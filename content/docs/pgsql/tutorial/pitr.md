---
title: 手工恢复
weight: 1706
description: 在沙箱环境中按照提示脚本手动执行 PITR
icon: fa-solid fa-flask
categories: [任务]
---


您可以使用 `pgsql-pitr.yml` 剧本执行 PITR，但在某些情况下，您可能希望手动执行 PITR，直接使用 pgbackrest 原语实现精细的控制。
我们将使用带有 MinIO 备份仓库的 [**四节点沙箱**](/docs/deploy/sandbox) 集群来演示该过程。

![pigsty-sandbox](/img/pigsty/sandbox.png)

-------

## 初始化沙箱

使用 [**vagrant**](/docs/deploy/vagrant) 或 [**terraform**](/docs/deploy/terraform) 准备四节点沙箱环境，然后：

```bash
curl https://repo.pigsty.io/get | bash; cd ~/pigsty/
./configure -c full
./install
```

现在以管理节点上的管理员用户（或 dbsu）身份操作。



-------

## 检查备份

要检查备份状态，您需要切换到 `postgres` 用户并使用 `pb` 命令：

```bash
sudo su - postgres    # 切换到 dbsu: postgres 用户
pb info               # 打印 pgbackrest 备份信息
```

`pb` 是 `pgbackrest` 的别名，会自动从 pgbackrest 配置中获取 `stanza` 名称。

```bash title="/etc/profile.d/pg-alias.sh"
function pb() {
    local stanza=$(grep -o '\[[^][]*]' /etc/pgbackrest/pgbackrest.conf | head -n1 | sed 's/.*\[\([^]]*\)].*/\1/')
    pgbackrest --stanza=$stanza $@
}
```

您可以看到初始备份信息，这是一个全量备份：

```
root@pg-meta-1:~# pb info
stanza: pg-meta
    status: ok
    cipher: aes-256-cbc

    db (current)
        wal archive min/max (17): 000000010000000000000001/000000010000000000000007

        full backup: 20250713-022731F
            timestamp start/stop: 2025-07-13 02:27:31+00 / 2025-07-13 02:27:33+00
            wal start/stop: 000000010000000000000004 / 000000010000000000000004
            database size: 44MB, database backup size: 44MB
            repo1: backup size: 8.4MB
```

这份备份从 `2025-07-13 02:27:31+00` 开始、于 `02:27:33+00` 完成，这是这条备份链的恢复起点。
您可以恢复到此后的任意时间点，最晚抵达最新归档的 WAL。


-------

## 生成心跳

您可以生成一些心跳来模拟工作负载。`/pg/bin/pg-heartbeat` 就是用于此目的的，
它每秒向 `monitor.heartbeat` 表写入一个心跳时间戳。

{{< tabpane persist="disabled" >}}
{{% tab header="心跳生成" disabled=true /%}}
{{< tab header="alias" lang="bash" >}}
make rh     # 运行心跳：ssh 10.10.10.10 'sudo -iu postgres /pg/bin/pg-heartbeat'
{{< /tab >}}
{{< tab header="pgbench" lang="bash" >}}
ssh 10.10.10.10 'sudo -iu postgres /pg/bin/pg-heartbeat'
{{< /tab >}}
{{< tab header="output" lang="bash" >}}
   cls   |              ts               |    lsn     |  lsn_int  | txid | status  |       now       |  elapse
---------+-------------------------------+------------+-----------+------+---------+-----------------+----------
 pg-meta | 2025-07-13 03:01:20.318234+00 | 0/115BF5C0 | 291239360 | 4812 | leading | 03:01:20.318234 | 00:00:00
{{< /tab >}}
{{< /tabpane >}}

您甚至可以向集群添加更多工作负载，让我们使用 `pgbench` 生成一些随机写入：

{{< tabpane persist="disabled" >}}
{{% tab header="pgbench 负载" disabled=true /%}}
{{< tab header="alias" lang="bash" >}}
make ri     # 初始化 pgbench
make rw     # 运行 pgbench 读写工作负载
{{< /tab >}}
{{< tab header="pgbench" lang="bash" >}}
pgbench -is10 postgres://dbuser_meta:DBUser.Meta@10.10.10.10:5433/meta
while true; do pgbench -nv -P1 -c4 --rate=64 -T10 postgres://dbuser_meta:DBUser.Meta@10.10.10.10:5433/meta; done
{{< /tab >}}
{{< tab header="output" lang="bash" >}}
while true; do pgbench -nv -P1 -c4 --rate=64 -T10 postgres://dbuser_meta:DBUser.Meta@10.10.10.10:5433/meta; done
pgbench (17.5 (Homebrew), server 17.4 (Ubuntu 17.4-1.pgdg24.04+2))
progress: 1.0 s, 60.9 tps, lat 7.295 ms stddev 4.219, 0 failed, lag 1.818 ms
progress: 2.0 s, 69.1 tps, lat 6.296 ms stddev 1.983, 0 failed, lag 1.397 ms
...
{{< /tab >}}
{{< /tabpane >}}


--------

## PITR 手册

现在让我们选择一个恢复时间点，比如 `2025-07-13 03:03:03+00`，这是初始备份（和心跳）之后的一个时间点。
可以先用 `pg-pitr` 脚本的检查模式生成并核对底层恢复命令：

```bash
$ pg-pitr -c -t "2025-07-13 03:03:00+00"   # -c / --check / --dry-run：只检查并打印命令
```

{{% alert color="warning" title="pg-pitr 会执行恢复" %}}
不带 `-c` 时，`pg-pitr` 会在预检后直接执行 `pgbackrest restore`，覆盖目标数据目录；交互终端只有可中断的倒计时，并没有 `y/N` 确认，非交互环境连倒计时也会跳过。
它不会替您暂停 Patroni、启动 PostgreSQL、验证数据或恢复 HA。这里的 Shell 脚本 `pg-pitr` 也不同于
[**`pig pitr`**](/docs/pig/pitr/) 命令，后者会保守地编排单节点 Patroni/PostgreSQL 生命周期。
{{% /alert %}}

完整的手工集群恢复通常需要四个阶段；下面是操作清单，不是 `pg-pitr` 的命令输出：

```bash
Perform time PITR on pg-meta
[1. Stop PostgreSQL] ===========================================
   1.1 Pause Patroni (if there are any replicas)
       $ pg pause <cls>  # 暂停 patroni 自动故障切换
   1.2 Shutdown Patroni
       $ pt-stop         # sudo systemctl stop patroni
   1.3 Shutdown Postgres
       $ pg-stop         # pg_ctl -D /pg/data stop -m fast

[2. Perform PITR] ===========================================
   2.1 Restore Backup
       $ pgbackrest --stanza=pg-meta --delta --force --type=time --target='2025-07-13 03:03:00+00' restore
   2.2 Start PG to Replay WAL
       $ pg-start        # pg_ctl -D /pg/data start
   2.3 Validate and Promote
     - If database content is ok, promote it to finish recovery, otherwise goto 2.1
       $ pg-promote      # pg_ctl -D /pg/data promote
```

```bash
[3. Restore Primary] ===========================================
   3.1 Check Archive Mode (Reset Only If Disabled)
       $ psql -Atqc 'show archive_mode'
       $ psql -c 'ALTER SYSTEM RESET archive_mode;'  # 仅当恢复时显式关闭过归档
   3.2 Stop the manually started Postgres
       $ pg-stop         # Patroni will start PostgreSQL again with the corrected setting
   3.3 Remove stale DCS metadata (all Patroni instances must remain stopped)
       $ pg remove pg-meta
   3.4 Start Patroni
       $ pt-start        # sudo systemctl start patroni

[4. Restore Cluster] ===========================================
   4.1 Re-Init All [**REPLICAS**] (if any)
       - 4.1.1 option 1: restore replicas with same pgbackrest cmd (require central backup repo)
           $ pgbackrest --stanza=pg-meta --delta --force --type=time --target='2025-07-13 03:03:00+00' restore
       - 4.1.2 option 2: nuke the replica data dir and restart patroni (may take long time to restore)
           $ rm -rf /pg/data/*; pt-restart
       - 4.1.3 option 3: reinit with patroni; verify the rebuilt cluster and DCS state afterward
           $ pg reinit pg-meta
   4.2 Full Backup (recommended)
       $ pg-backup full      # 建议在 PITR 后执行新的全量备份
```


--------

## 单节点示例

让我们从简单的单节点 `pg-meta` 集群开始，作为一个更简单的示例。

### 关闭数据库

{{< tabpane persist="disabled" >}}
{{% tab header="关闭服务" disabled=true /%}}
{{< tab header="shutdown patroni" lang="bash" >}}
pt-stop         # sudo systemctl stop patroni，关闭 patroni（和 postgres）
{{< /tab >}}
{{< tab header="shutdown postgres" lang="bash" >}}
# 可选，因为如果 patroni 未暂停，postgres 会被 patroni 关闭
$ pg-stop        # pg_ctl -D /pg/data stop -m fast，关闭 postgres

pg_ctl: PID file "/pg/data/postmaster.pid" does not exist
Is server running?

$ pg-ps           # 打印 postgres 相关进程

 UID         PID   PPID  C STIME TTY      STAT   TIME CMD
postgres  31048      1  0 02:27 ?        Ssl    0:19 /usr/sbin/pgbouncer /etc/pgbouncer/pgbouncer.ini
postgres  32026      1  0 02:28 ?        Ssl    0:03 /usr/bin/pg_exporter ...
postgres  35510  35480  0 03:01 pts/2    S+     0:00 /bin/bash /pg/bin/pg-heartbeat
{{< /tab >}}
{{< /tabpane >}}

确保本地 postgres 没有运行，然后执行手册中给出的恢复命令：

### 恢复备份

{{< tabpane persist="disabled" >}}
{{% tab header="恢复备份" disabled=true /%}}
{{< tab header="restore" lang="bash" >}}
pgbackrest --stanza=pg-meta --delta --force --type=time --target='2025-07-13 03:03:00+00' restore
{{< /tab >}}
{{< tab header="output" lang="bash" >}}
postgres@pg-meta-1:~$ pgbackrest --stanza=pg-meta --delta --force --type=time --target='2025-07-13 03:03:00+00' restore
2025-07-13 03:17:07.443 P00   INFO: restore command begin 2.54.2: ...
2025-07-13 03:17:07.470 P00   INFO: repo1: restore backup set 20250713-022731F, recovery will start at 2025-07-13 02:27:31
2025-07-13 03:17:07.471 P00   INFO: remove invalid files/links/paths from '/pg/data'
2025-07-13 03:17:08.523 P00   INFO: write updated /pg/data/postgresql.auto.conf
2025-07-13 03:17:08.527 P00   INFO: restore size = 44MB, file total = 1436
2025-07-13 03:17:08.527 P00   INFO: restore command end: completed successfully (1087ms)
{{< /tab >}}
{{< /tabpane >}}

### 验证数据

我们不希望 patroni HA 接管，直到确定数据正确，所以手动启动 postgres：

{{< tabpane persist="disabled" >}}
{{% tab header="验证数据" disabled=true /%}}
{{< tab header="start postgres" lang="bash" >}}
pg-start
{{< /tab >}}
{{< tab header="output" lang="bash" >}}
waiting for server to start....2025-07-13 03:19:33.133 UTC [39294] LOG:  redirecting log output to logging collector process
2025-07-13 03:19:33.133 UTC [39294] HINT:  Future log output will appear in directory "/pg/log/postgres".
 done
server started
{{< /tab >}}
{{< /tabpane >}}

先确认 WAL 已重放到目标并暂停，再检查数据是否处于您想要的时间点：

```bash
psql -Atqc 'SELECT pg_is_in_recovery(), pg_is_wal_replay_paused(), pg_last_xact_replay_timestamp()'
# 预期仍在恢复、且回放已暂停：t|t|<目标附近的时间>
```

您可以通过检查业务表中的最新时间戳来验证，或者在本例中通过心跳表检查。

```bash title="检查数据"
postgres@pg-meta-1:~$ psql -c 'table monitor.heartbeat'
   id    |              ts               |    lsn    | txid
---------+-------------------------------+-----------+------
 pg-meta | 2025-07-13 03:02:59.214104+00 | 302005504 | 4912
```

时间戳正好在我们指定的时间点之前！（`2025-07-13 03:03:00+00`）。
如果这不是您想要的时间点，可以使用不同的时间点重复恢复。
重复前必须再次停止 PostgreSQL。由于恢复是以增量和并行方式执行的，速度通常很快。
可以重试直到找到正确的时间点。


### 提升主库

恢复后的 postgres 集群处于 `recovery` 模式，因此在提升为主库之前会拒绝任何写操作。
这些恢复参数是由 pgBackRest 在配置文件中生成的。

```ini title="/pg/data/postgresql.auto.conf"
postgres@pg-meta-1:~$ cat /pg/data/postgresql.auto.conf
# Do not edit this file or use ALTER SYSTEM manually!
# It is managed by Pigsty & Ansible automatically!

# Recovery settings generated by pgBackRest restore on 2025-07-13 03:17:08
archive_mode = 'off'
restore_command = 'pgbackrest --stanza=pg-meta archive-get %f "%p"'
recovery_target_time = '2025-07-13 03:03:00+00'
```

如果数据正确，您可以**提升**它为主库，将其标记为新的领导者并准备接受写入。

{{< tabpane persist="disabled" >}}
{{% tab header="提升主库" disabled=true /%}}
{{< tab header="promote" lang="bash" >}}
pg-promote
waiting for server to promote.... done
server promoted
{{< /tab >}}
{{< tab header="check" lang="bash" >}}
psql -c 'SELECT pg_is_in_recovery()'   # 'f' 表示已提升为主库
 pg_is_in_recovery
-------------------
 f
(1 row)
{{< /tab >}}
{{< /tabpane >}}

{{% alert color="warning" title="新时间线和脑裂" %}}
一旦提升，数据库集群将进入新的时间线（领导者纪元）。
如果有任何写流量，将写入新的时间线。
{{% /alert %}}


### 恢复集群

最后，不仅需要恢复数据，还需要恢复集群状态，例如：

- 归档模式
- patroni 接管
- 备份集
- 从库

#### 归档模式

Pigsty v4.4 的 `pgsql-pitr.yml` 默认使用 `archive: true`，裸 `pgbackrest restore` 也默认保留原归档设置。
只有显式使用 `archive: false` 或 `--archive-mode=off` 时，恢复结果才会在 `postgresql.auto.conf` 中写入 `archive_mode = off`。
交还 Patroni 前检查该值；若恢复时关闭过归档，重置后再由 Patroni 重启 PostgreSQL。

{{< tabpane persist="disabled" >}}
{{% tab header="归档模式" disabled=true /%}}
{{< tab header="check archive_mode" lang="bash" >}}
psql -c 'show archive_mode'

 archive_mode
--------------
 on
{{< /tab >}}
{{< tab header="reset archive_mode" lang="bash" >}}
psql -c 'ALTER SYSTEM RESET archive_mode;'
# 仅当上一步显示 off 时需要；archive_mode 是 postmaster 参数，由下面的 Patroni 重启生效
{{< /tab >}}
{{< tab header="edit directly" lang="bash" >}}
# 若显式关闭过归档，也可以直接编辑 postgresql.auto.conf；下面由 Patroni 重新启动 PostgreSQL
sed -i '/archive_mode/d' /pg/data/postgresql.auto.conf
{{< /tab >}}
{{< /tabpane >}}

#### Patroni 接管

您的 postgres 是直接启动的。恢复 HA 接管前，应确保所有 Patroni 实例仍处于停止状态，停止手工启动的 PostgreSQL，
并清理恢复前留下的 DCS 元数据；否则旧时间线上的集群状态可能干扰重新接管。然后再启动主库上的 Patroni：

{{< tabpane persist="disabled" >}}
{{% tab header="Patroni 接管" disabled=true /%}}
{{< tab header="stop postgres" lang="bash" >}}
pg-stop  # 停止手工启动的 PostgreSQL；所有 Patroni 实例仍须保持停止
{{< /tab >}}
{{< tab header="clean dcs" lang="bash" >}}
pg remove pg-meta  # 交互式清除该集群的 DCS 元数据
{{< /tab >}}
{{< tab header="launch patroni" lang="bash" >}}
pt-start   # sudo systemctl start patroni
psql -c 'show archive_mode'
{{< /tab >}}
{{< /tabpane >}}

#### 备份集

通常建议在 PITR 后执行新的全量备份，但这是可选的。

#### 从库

多节点生产集群优先使用 [`pgsql-pitr.yml`](/docs/pgsql/backup/restore/) 编排。若坚持手工恢复，旧时间线上的从库不能直接重新加入；
应在新主库与 DCS 状态确认无误后，清空从库数据目录并逐台重启 Patroni，或使用 `pg reinit <cls>` 重新初始化，再检查复制状态。
