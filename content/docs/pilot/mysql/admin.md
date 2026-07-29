---
title: 日常管理
weight: 5013
description: MySQL 集群的状态检查、客户端接入、配置变更、故障处理，以及成员替换、物理恢复与完全停机恢复三份操作手册。
icon: fa-solid fa-wrench
module: [MYSQL]
categories: [参考]
---

本页覆盖 MYSQL 模块的日常运维操作。总原则：**声明状态改清单，收敛现场跑剧本**——成员掉线、AdminAPI 状态漂移等多数异常，重跑一次 `./mysql.yml -l <集群>` 即可自愈；只有三类破坏性场景（替换成员、恢复备份、完全停机恢复）需要按本页手册人工介入。


--------

## 速查手册

| 操作 | 命令 |
|:---|:---|
| 部署 / 收敛集群 | `./mysql.yml -l <集群>` |
| 预检（不改现场） | `./mysql.yml -l <集群> --check` |
| 本机 root 会话 | `mysql --defaults-extra-file=/etc/mysql/pigsty/root.cnf` |
| 查看 MGR 拓扑 | `SELECT MEMBER_HOST,MEMBER_STATE,MEMBER_ROLE FROM performance_schema.replication_group_members;` |
| AdminAPI 状态 | `mysqlsh` 连接后 `dba.getCluster().status()` |
| 手工触发备份 | `systemctl start mysql-backup`（HA 上仅主库真正执行） |
| 退役一个从库 | `./mysql-rm.yml -l <IP> -e mysql_safeguard=false -e mysql_rm_confirm=<实例名>` |
| 下线整个集群 | `./mysql-rm.yml -l <集群> -e mysql_safeguard=false -e mysql_rm_confirm=<集群名>` |
{.full-width}


--------

## 状态检查

本页命令需以 root 在集群成员上执行（`/etc/mysql/pigsty/` 下的客户端配置与密钥仅 root 可读）。示例以 EL 为准：Debian/Ubuntu 上 MySQL 服务单元名为 `mysql` 而非 `mysqld`。

在任意成员上确认服务与拓扑：

```bash
systemctl status mysqld mysqlrouter mysqld_exporter mysql-backup.timer

mysql --defaults-extra-file=/etc/mysql/pigsty/root.cnf -e "
  SELECT MEMBER_HOST, MEMBER_STATE, MEMBER_ROLE, MEMBER_VERSION
  FROM performance_schema.replication_group_members ORDER BY MEMBER_HOST;"
```

健康的三节点集群应显示 3 行 `ONLINE`，其中恰好 1 个 `PRIMARY`。需要 AdminAPI 视角时：

```bash
mysqlsh --js -e '
shell.options.useWizards=false;
var pw = os.loadTextFile("/etc/mysql/pigsty/cluster-password").replace(/[\r\n]+$/, "");
shell.connect({user:"dbuser_cluster", password:pw, host:"127.0.0.1", port:3306,
  "ssl-mode":"VERIFY_CA", "ssl-ca":"/etc/pki/ca.crt"});
print(dba.getCluster().status());'
```

集群级健康也可以直接看 Grafana [MySQL Overview](https://demo.pigsty.cc/ui/d/mysql-overview)，或查询衍生指标 `mysql:cls:health`（2 健康 / 1 降级 / 0 危险）。


--------

## 客户端接入

HA 集群通过任一成员的 Router 端口接入，Router 自动跟随主从切换：

```bash
# 读写入口（当前主库）
mysql -h <任一成员> -P 6446 -u app -pDBUser.App --ssl-mode=VERIFY_CA --ssl-ca=/etc/pki/ca.crt app

# 只读入口（从库轮询）
mysql -h <任一成员> -P 6447 -u app -pDBUser.App --ssl-mode=VERIFY_CA --ssl-ca=/etc/pki/ca.crt app
```

接入建议：

- 服务端强制 TLS，明文连接会被拒绝；普通客户端默认的 `PREFERRED` 模式即可自动协商加密，建议显式 `VERIFY_CA`（JDBC：`sslMode=VERIFY_CA`）并信任 Pigsty CA；
- 模块不提供 VIP/DNS 接入层。为避免单一 Router 节点成为断点，应用侧建议配置**多地址 DSN**，例如 JDBC `jdbc:mysql://10.10.10.11:6446,10.10.10.12:6446,10.10.10.13:6446/app`，或在应用侧负载均衡器中列出全部成员；
- 单机集群没有 Router，直连 `3306`；
- 成员被隔离或失去多数派时，本机 Router 会主动拒绝读写连接（fail-safe），不会提供过期读。

实测参考：主库优雅停机的写中断约 3–4 秒，主库崩溃（`kill -9`）约 20 秒出头（默认驱逐参数），滚动重启期间从库重启对客户端无感。


--------

## 管理数据库与用户

在清单中修改 `mysql_databases` / `mysql_users` 声明，然后收敛：

```bash
./mysql.yml -l my-test                      # 全量收敛
./mysql.yml -l my-test -t mysql_provision   # 只收敛业务对象（更快）
```

HA 集群的对象变更只会在当前主库执行并经复制生效。声明是增量语义：不会删库、删用户或回收授权；这三类操作请手工执行后同步清单。


--------

## 修改集群参数

参数覆盖统一走 [`mysql_parameters`](/docs/pilot/mysql/param#mysql_parameters)：

```yaml
mysql_parameters:
  max_connections: 500
  long_query_time: 2
```

```bash
./mysql.yml -l my-test --check    # 预检：确认将要发生的变更
./mysql.yml -l my-test            # 应用：自动编排滚动重启
```

滚动重启的编排语义（实测验证）：

1. 配置渲染后先做 `mysqld --validate-config` 校验，写错参数当场失败、不动服务；
2. 重启前检查集群健康：**降级集群（少于 3 个 ONLINE）拒绝滚动重启**，先恢复再变更；
3. 从库逐台重启，每台等待回归 `ONLINE` 后再处理下一台；主库最后重启；
4. 主库重启会触发一次自动主从切换，预期数秒写中断；对切换时机敏感的业务请安排变更窗口。

单机集群直接原地重启。


--------

## 主从切换

模块不自动编排计划内主从切换（Switchover）；需要时用 AdminAPI 手工执行：

```bash
mysqlsh --js -e '
shell.options.useWizards=false;
var pw = os.loadTextFile("/etc/mysql/pigsty/cluster-password").replace(/[\r\n]+$/, "");
shell.connect({user:"dbuser_cluster", password:pw, host:"127.0.0.1", port:3306,
  "ssl-mode":"VERIFY_CA", "ssl-ca":"/etc/pki/ca.crt"});
dba.getCluster().setPrimaryInstance("10.10.10.12:3306");   // 指定新主库
'
```

切换后 Router 自动跟随，无需重新配置。之后重跑 `./mysql.yml -l <集群>` 确认收敛（运行时主库位置不属于声明状态，剧本不会把主库切回去）。


--------

## 成员故障与自愈

**故障中无需人工介入**：主库崩溃后 MGR 约 20 秒内选出新主，Router 自动改道；崩溃成员由 systemd 拉起并自动重新入组。以下场景才需要动手：

| 现象 | 处理 |
|:---|:---|
| 某成员 `MEMBER_STATE` 长期 `OFFLINE`（进程在、GR 停了） | 重跑 `./mysql.yml -l <集群>`，剧本会将其 rejoin 回集群 |
| 成员反复无法入组，日志报 `peers not configured` | 同上：收敛会把 `group_replication_group_seeds` 钉回声明值 |
| 网络分区恢复后成员未回归 | 等待约 1 分钟自动重连；仍未回归则重跑剧本 |
| 全部成员 `OFFLINE` | 完全停机场景，见[完全停机恢复](#完全停机恢复) |
| 机器损坏无法修复 | 见[替换故障成员](#替换故障成员) |
{.full-width}

对应告警：`MySQLClusterMemberOffline`（WARN）、`MySQLClusterNoPrimary` / `MySQLClusterQuorumLost`（CRIT）。


--------

## 替换故障成员

替换契约：**新机器复用故障机的服务地址**（清单不变），三步完成。假设 `my-test-3`（`10.10.10.13`）损坏：

```bash
# 1. 摘除故障成员。机器仍可达时使用退役剧本：
./mysql-rm.yml -l 10.10.10.13 -e mysql_safeguard=false -e mysql_rm_confirm=my-test-3

# 1b. 机器已彻底失联（SSH 不可达）时，剧本无法在其上执行；
#     改在任一健康成员上用 AdminAPI 强制摘除：
mysqlsh --js -e '
shell.options.useWizards=false;
var pw = os.loadTextFile("/etc/mysql/pigsty/cluster-password").replace(/[\r\n]+$/, "");
shell.connect({user:"dbuser_cluster", password:pw, host:"127.0.0.1", port:3306,
  "ssl-mode":"VERIFY_CA", "ssl-ca":"/etc/pki/ca.crt"});
dba.getCluster("my-test").removeInstance("10.10.10.13:3306", {force: true});'

# 2. 用同一地址准备新机器（重装系统），完成节点纳管
./node.yml -l 10.10.10.13

# 3. 对完整集群重新收敛：新成员将通过 Clone 自动重建数据并入组
./mysql.yml -l my-test --check
./mysql.yml -l my-test
```

要点：

- 第 1 步的本质是把该地址从集群 Metadata 中摘除——只有不在 Metadata 中的地址才会走全新 Clone 路径。退役剧本要求**目标可达**（在线 SECONDARY 或已脱离集群的成员）；死机场景用 1b 的强制摘除代替；
- 新机器必须是**全新状态**（空数据目录、无 Router 密钥残留）——重装系统即可保证；带残留状态的"半新机器"会被预检或 Router 引导拒绝；
- Clone 会全量复制数据，耗时与数据量成正比，期间集群保持可用（1 主 1 从在线）；
- 不支持在替换时更换成员地址，也不支持长期两节点运行。


--------

## 下线与复活集群

下线整个集群（停止服务、注销监控、保留全部数据）：

```bash
./mysql-rm.yml -l my-test -e mysql_safeguard=false -e mysql_rm_confirm=my-test
```

下线后每个成员的数据目录会留下退役标记 `/var/lib/mysql/.pigsty-mysql-retired`，它会**阻止普通 `mysql.yml` 重新接管**，防止误操作复活已退役实例。确认要原地复活时，删除标记后重新收敛：

```bash
ansible my-test -b -a 'rm -f /var/lib/mysql/.pigsty-mysql-retired'
./mysql.yml -l my-test
```

单机实例两条命令即可复活。**HA 集群**多一步：重跑会把服务拉起，但三个成员的 GR 都处于 OFFLINE（防脑裂：无人自举），剧本会以完全停机报错退出——继续按[完全停机恢复](#完全停机恢复)第 3-4 步重建仲裁即可。

彻底销毁（删除数据目录、备份、软件包）不由剧本代劳，属于确认过备份的手工操作。


--------

## 管理备份

```bash
systemctl list-timers mysql-backup.timer          # 查看下次备份时间
systemctl start mysql-backup                      # 手工触发（HA 上仅主库真正执行，从库自动跳过）
journalctl -u mysql-backup --since today          # 查看备份日志
```

备份目录布局（在**当前主库**的本地磁盘上）：

```text
/data/backups/mysql/<集群名>/
├── 20260729T053900Z/          # 一份已 prepare 的全量备份（可直接恢复）
│   ├── backup.ok              # 提交标记：只有完整成功的备份才有
│   ├── backup.log             # XtraBackup 执行日志
│   └── ...                    # InnoDB 数据文件
├── ...                        # 按 retention 保留最近 N 份
└── latest -> 20260729T053900Z # 原子指向最新一份
```

检查备份新鲜度（HA 集群要在**所有成员**上检查，因为备份跟随主库落盘）：

```bash
ansible my-test -b -a 'ls -l /data/backups/mysql/my-test/latest'
```

{{% alert title="备份告警缺口" color="warning" %}}
当前版本没有备份新鲜度指标与告警：备份失败只能从 `mysql-backup` 日志（已接入 VictoriaLogs，Instance Dashboard 的 Router / Backup Logs 面板可查）发现。重要环境建议为备份日志配置外部巡检，并定期演练下文的恢复流程。
{{% /alert %}}


--------

## 恢复物理备份

以下手册将单机实例恢复到最近一次备份（**破坏性操作**：备份之后的写入将丢失。恢复前确认 `latest` 时间戳可接受）。HA 集群的整簇重建同理：先在一台恢复出主库，其余成员走 Clone 重建。

```bash
# 0. 确认备份可用：必须存在 backup.ok
BK=/data/backups/mysql/my-meta/latest
sudo test -f $BK/backup.ok && sudo cat $BK/backup.ok

# 1. 停库并保留残骸（便于事后取证，确认无误后再删除）
sudo systemctl stop mysqld
sudo mv /var/lib/mysql /var/lib/mysql.destroyed

# 2. 回拷备份（备份已 prepare，无需再执行 --prepare）
sudo mkdir -p /var/lib/mysql && sudo chown mysql:mysql /var/lib/mysql && sudo chmod 750 /var/lib/mysql
sudo xtrabackup --copy-back --target-dir=$BK
sudo rm -f /var/lib/mysql/backup.ok /var/lib/mysql/backup.log   # 清除随备份带入的记录文件

# 3. 重建备份不包含的运行目录
sudo mkdir -p /var/lib/mysql/binlog /var/lib/mysql/tmp
sudo chown -R mysql:mysql /var/lib/mysql
sudo chmod 750 /var/lib/mysql/binlog /var/lib/mysql/tmp

# 4. 重建 Pigsty 数据目录属主标记（cluster/instance/topology 按实际实例填写）
echo '{"version": 1, "cluster": "my-meta", "instance": "my-meta-1", "topology": "standalone"}' | \
  sudo tee /var/lib/mysql/.pigsty-mysql-initialized > /dev/null
sudo chown mysql:mysql /var/lib/mysql/.pigsty-mysql-initialized
sudo chmod 600 /var/lib/mysql/.pigsty-mysql-initialized

# 5. EL 系统恢复 SELinux 上下文，然后启动
sudo restorecon -RF /var/lib/mysql 2>/dev/null || true
sudo systemctl start mysqld

# 6. 验证数据与 GTID 位点，并确认剧本可正常收敛
sudo mysql --defaults-extra-file=/etc/mysql/pigsty/root.cnf -e 'SELECT @@gtid_executed; SHOW DATABASES;'
./mysql.yml -l my-meta        # 应全绿收敛（changed=0 或仅例行项）
```

第 4 步的标记文件是 Pigsty 的数据目录属主凭证：缺失或内容不匹配时，`mysql.yml` 会拒绝接管恢复出的数据目录。HA 场景的 `topology` 值为 `innodb_cluster`，实例名按成员各自填写。


--------

## 完全停机恢复

三个成员全部 `OFFLINE`（机房断电、级联故障）时，MGR 出于防脑裂考虑**不会自动重建仲裁**，`mysql.yml` 也会明确拒绝并在报错中给出指引。恢复流程：

```bash
# 1. 确认所有成员的 mysqld 进程在运行（systemd 通常已自动拉起），GR 全部 OFFLINE
ansible my-test -b -a "mysql --defaults-extra-file=/etc/mysql/pigsty/root.cnf -NBe \
  \"SELECT COALESCE((SELECT MEMBER_STATE FROM performance_schema.replication_group_members \
  WHERE MEMBER_ID=@@server_uuid),'OFFLINE')\""

# 2. 选出数据最新的成员：比较各成员 GTID，选执行集最大（或相等任选）的一台
ansible my-test -b -a "mysql --defaults-extra-file=/etc/mysql/pigsty/root.cnf -NBe 'SELECT @@gtid_executed'"

# 3. 在最新成员上用 AdminAPI 重建集群（把 10.10.10.12 换成第 2 步选出的地址）
mysqlsh --js -e '
shell.options.useWizards=false;
var pw = os.loadTextFile("/etc/mysql/pigsty/cluster-password").replace(/[\r\n]+$/, "");
shell.connect({user:"dbuser_cluster", password:pw, host:"10.10.10.12", port:3306,
  "ssl-mode":"VERIFY_CA", "ssl-ca":"/etc/pki/ca.crt"});
var c = dba.rebootClusterFromCompleteOutage("my-test");
print(c.status().defaultReplicaSet.status);'

# 4. 重跑剧本：仍处于 OFFLINE 的其余成员会被自动 rejoin，随后全绿收敛
./mysql.yml -l my-test
```

要点：

- 第 3 步通常已把所有可达成员一并带回；个别成员仍 OFFLINE 时由第 4 步的剧本收敛完成 rejoin，无需逐台手工处理；
- 若在少数成员上重建（其余机器已损坏），先完成重建恢复写入，再按[替换故障成员](#替换故障成员)补齐；
- 重建完成前集群无法写入（`super_read_only`）；多数场景下各成员仍可只读访问，个别曾被驱逐的成员可能处于 `offline_mode` 拒绝普通连接；
- 平台默认 `sql_require_primary_key=ON` 已从源头拦截会阻塞该流程的无主键表。


--------

## 平台密码的边界

三个平台密码的运维边界（详见[参数参考](/docs/pilot/mysql/param#凭据参数)）：

- `mysql_monitor_password`：改清单后重跑即可轮换（Exporter 配置随之更新）；
- `mysql_root_password`：不支持隐式重置。轮换流程：主库手工 `ALTER USER 'root'@'localhost' IDENTIFIED BY '新密码';` → 更新清单 → 重跑收敛凭据文件；
- `mysql_cluster_password`：HA 集群中与 Metadata 和 Router 密钥环绑定，普通重跑拒绝轮换（单机无此限制，改清单重跑即生效）；当前版本没有 HA 自动轮换流程，如必须轮换请通过 AdminAPI 手工操作并同步全部成员的凭据文件后再更新清单。
