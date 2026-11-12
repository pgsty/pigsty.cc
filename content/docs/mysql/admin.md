---
title: 日常管理
weight: 5013
description: MySQL 集群的状态检查、快捷命令、客户端接入、配置变更、故障自愈，以及成员替换、物理恢复与停机恢复手册。
icon: fa-solid fa-wrench
module: [MYSQL]
categories: [参考]
---

本页覆盖 MYSQL 模块的日常运维操作。总原则：**声明状态改清单，收敛现场跑剧本**——单成员掉线、三节点全员可达的完全停机、以及同 IP 新机替换死机成员等场景，重跑一次 `./mysql.yml -l <集群>` 即可自动收敛自愈；只有物理备份回拷恢复、或不足三台可达的不完整停机场景需要按本页手册人工介入。


--------

## 速查手册

| 操作 | 命令 |
|:---|:---|
| 部署 / 收敛 / 自愈集群 | `./mysql.yml -l <集群>` |
| 预检（不改现场） | `./mysql.yml -l <集群> --check` |
| 本机 root 快捷客户端 | `my`（等价于 `sudo mysql --defaults-extra-file=/etc/mysql/pigsty/root.cnf`） |
| AdminAPI 集群状态（HA） | `mysh`（默认打印 `dba.getCluster().status()`） |
| 查看 MGR 拓扑 | `my -e "SELECT MEMBER_HOST,MEMBER_STATE,MEMBER_ROLE FROM performance_schema.replication_group_members;"` |
| 手工触发备份 | `sudo systemctl start mysql-backup`（HA 上仅可写主库真正执行） |
| 摘除并销毁单个成员 | `./mysql-rm.yml -l <IP> -e mysql_safeguard=false`（目标若为 PRIMARY 会自动先切主） |
| 整集群停服保数据 | `./mysql-rm.yml -l <集群> -e mysql_safeguard=false -e mysql_rm_data=false` |
| 彻底销毁整个集群 | `./mysql-rm.yml -l <集群> -e mysql_safeguard=false`（始终保留备份目录） |
{.full-width}


--------

## 状态检查与快捷命令

节点在安装阶段会自动部署 `/etc/profile.d/mysql.sh`，提供 `my`（全拓扑可用）与 `mysh`（HA 节点可用）两个快捷命令；凭据文件保存在 `/etc/mysql/pigsty/`（仅 root 可读）。示例以 EL 为准：Debian/Ubuntu 上 MySQL 服务单元名为 `mysql` 而非 `mysqld`。

在任意成员上确认服务与拓扑：

```bash
systemctl status mysqld mysqlrouter mysqld_exporter mysql-backup.timer

my -e "
  SELECT MEMBER_HOST, MEMBER_STATE, MEMBER_ROLE, MEMBER_VERSION
  FROM performance_schema.replication_group_members ORDER BY MEMBER_HOST;"
```

健康的三节点集群应显示 3 行 `ONLINE`，其中恰好 1 个 `PRIMARY`。查看 AdminAPI 集群视图可直接使用 `mysh`（或手工调用 `mysqlsh --no-defaults`）：

```bash
mysh

# 等价的手工命令（注意手工运行 mysqlsh 务必携带 --no-defaults）：
sudo mysqlsh --no-defaults --js -e '
shell.options.useWizards=false;
var pw = os.loadTextFile("/etc/mysql/pigsty/cluster-password").replace(/[\r\n]+$/, "");
shell.connect({user:"dbuser_cluster", password:pw, host:"127.0.0.1", port:3306,
  "ssl-mode":"VERIFY_CA", "ssl-ca":"/etc/pki/ca.crt"});
print(dba.getCluster().status());'
```

集群级健康也可以直接看 Grafana [MySQL Overview](https://demo.pigsty.cc/ui/d/mysql-overview)，或查询衍生指标 `mysql:cls:health`（2 健康 / 1 降级 / 0 危险）。


--------

## 客户端接入

HA 集群通过任一成员的 Router 端口（或节点二层 VIP）接入，Router 自动跟随主从切换：

```bash
# 读写入口（当前主库，可填任一成员 IP 或 NODE VIP）
mysql -h <任一成员或VIP> -P 6446 -u app -pDBUser.App --ssl-mode=VERIFY_CA --ssl-ca=/etc/pki/ca.crt app

# 只读入口（从库轮询）
mysql -h <任一成员或VIP> -P 6447 -u app -pDBUser.App --ssl-mode=VERIFY_CA --ssl-ca=/etc/pki/ca.crt app
```

接入建议：

- 服务端强制 TLS，明文连接会被拒绝；普通客户端默认的 `PREFERRED` 模式即可自动协商加密，建议显式 `VERIFY_CA`（JDBC：`sslMode=VERIFY_CA`）并信任 Pigsty CA；
- **二层 VIP 或多地址 DSN**：若在同组启用了 [`NODE`](/docs/node) 模块的二层 VIP（`vip_enabled: true`、`vip_address`、`vip_vrid`），VIP 会在存活节点间漂移并自动写入 TLS 叶证书 SAN，客户端可直接连接 `<vip>:6446`（读写）与 `<vip>:6447`（只读）；若未启用 VIP，建议在应用侧配置 **多地址 DSN**（例如 JDBC `jdbc:mysql://10.10.10.11:6446,10.10.10.12:6446,10.10.10.13:6446/app`）；
- 单机集群没有 Router，直连 `3306`；
- 成员被隔离或失去多数派时，本机 Router 会主动拒绝读写连接（fail-safe），不会提供过期读。

实测参考：主库优雅停机的写中断约 3–4 秒，主库崩溃（`kill -9`）约 20 秒出头（默认驱逐参数），滚动重启期间从库重启对客户端无感。


--------

## 管理数据库与用户

在清单中修改 `mysql_databases` / `mysql_users` 声明，然后收敛：

```bash
./mysql.yml -l my-test                      # 全量收敛（需全员在线）
./mysql.yml -l my-test -t mysql_provision   # 只收敛业务库与用户（更快；也可单独用 -t mysql_db 或 -t mysql_user）
```

HA 集群的对象变更只会在当前运行时主库执行并经复制生效。若集群处于单节点故障降级期，`-t mysql_provision` / `-t mysql_db` / `-t mysql_user` 支持通过 `-l` 仅选中存活成员执行（前提是当前 `PRIMARY` 包含在 `-l` 范围内）。声明是增量语义：不会删库、删用户或回收授权；这三类操作请手工执行后同步清单。


--------

## 修改集群参数

参数覆盖统一走 [`mysql_parameters`](/docs/mysql/param#mysql_parameters)：

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

计划内主从切换（Switchover）可在任一 HA 成员上通过 `mysh` 快捷函数执行：

```bash
mysh 'dba.getCluster().setPrimaryInstance("10.10.10.12:3306")'
```

切换后 Router 自动跟随，无需重新配置。之后可重跑 `./mysql.yml -l <集群>` 确认收敛（运行时主库位置不属于声明状态，剧本不会把主库切回 1 号节点）。


--------

## 成员故障与自愈

**故障中无需人工介入**：主库崩溃后 MGR 约 20 秒内选出新主，Router 自动改道；崩溃成员由 systemd 拉起并自动重新入组。出现滞留异常时按表处理：

| 现象 | 处理 |
|:---|:---|
| 某成员 `MEMBER_STATE` 长期 `OFFLINE`（进程在、GR 停了） | 重跑 `./mysql.yml -l <集群>`，剧本会将其增量 rejoin 回集群 |
| 成员反复无法入组，日志报 `peers not configured` | 同上：收敛会把 `group_replication_group_seeds` 钉回声明值 |
| 网络分区恢复后成员未回归 | 等待约 1 分钟自动重连；仍未回归则重跑 `./mysql.yml -l <集群>` |
| 三台成员全部 `OFFLINE` 但主机均可达 | 直接重跑 `./mysql.yml -l <集群>`，自动选最高 GTID 节点执行 `rebootClusterFromCompleteOutage` |
| 全部 `OFFLINE` 且部分主机损毁失联 | 见 [完全停机恢复](#完全停机恢复) 手工恢复仲裁 |
| 单台机器损坏重装替换 | 用原 IP 装好新机后直接跑 `./node.yml` + `./mysql.yml -l <集群>`，见 [替换故障成员](#替换故障成员) |
{.full-width}

对应告警：`MySQLClusterDegraded`（WARN）、`MySQLClusterDown`（CRIT）、`MySQLDown`（CRIT）。


--------

## 替换故障成员

替换契约：**新机器复用故障机的服务地址**（清单不变）。假设 `my-test-3`（`10.10.10.13`）需要更换：

```bash
# 场景 A：旧机器已彻底损坏失联，直接用同一 IP 准备全新机器
./node.yml  -l 10.10.10.13          # 1. 完成新机器节点纳管（仓库、共享 CA、监控代理）
./mysql.yml -l my-test --check      # 2. 预检整套集群
./mysql.yml -l my-test              # 3. 自动 rescan 摘除旧注册，并通过 Clone 重建新成员入组

# 场景 B：旧机器仍在线可达，计划内腾退重做（目标即使当前是 PRIMARY 也会自动先切主）
./mysql-rm.yml -l 10.10.10.13 -e mysql_safeguard=false   # 1. 优雅退群并清空本机数据与配置
./mysql.yml    -l my-test                                # 2. 重新初始化并通过 Clone 重建入组
```

要点：

- **死机替换无需手工 `removeInstance`**：只要新机器复用同一 IP 且数据目录为空，整簇运行 `mysql.yml` 时协调脚本会自动识别全新实例，调用 `cluster.rescan({removeInstances})` 清理旧 UUID 注册并通过 MySQL Clone 全量重建入组；
- 若旧机已永久损毁但暂时不补新机、仅希望先从集群元数据中清除死节点，可在任一存活成员执行 `mysh 'dba.getCluster().removeInstance("10.10.10.13:3306", {force: true})'`；
- 新机器必须是 **全新状态**（空 `mysql_data`、无残留 Router 状态），Clone 耗时与数据量成正比，期间集群保持可用（1 主 1 从在线）；
- 不支持在替换时直接更换成员 IP，也不支持长期两节点运行。


--------

## 停服保数据与销毁集群

`mysql-rm.yml` 默认销毁数据与受管配置（`mysql_rm_data: true`），同时也支持整集群停服保数据模式（`-e mysql_rm_data=false`）：

```bash
# 1. 整集群停服保数据（仅停止服务并注销监控，完整保留 /data/mysql 与受管配置）
./mysql-rm.yml -l my-test -e mysql_safeguard=false -e mysql_rm_data=false

# 重新拉起并自动恢复三节点集群（无需手工删锁文件或手工 rebootCluster）
./mysql.yml -l my-test

# 2. 彻底销毁整个集群（删除 /data/mysql 与受管配置，但始终保留 /data/backups/mysql 备份）
./mysql-rm.yml -l my-test -e mysql_safeguard=false

# 如需连同软件包一并卸载：
./mysql-rm.yml -l my-test -e mysql_safeguard=false -e mysql_rm_pkg=true
```

注意：

- 当前版本不再写入 `.pigsty-mysql-retired` 退役锁文件，也不再要求 `mysql_rm_confirm`；
- `-e mysql_rm_data=false` 仅适用于整集群（或单机集群）停服，单成员摘除强制要求 `mysql_rm_data=true`；
- 无论何种模式，`mysql-rm.yml` **绝不会删除 `mysql_backup_dir`（`/data/backups/mysql`）**，历史物理备份需由管理员在确认无用后手工清理。


--------

## 管理备份

```bash
systemctl list-timers mysql-backup.timer          # 查看下次备份时间
sudo systemctl start mysql-backup                 # 手工触发（HA 上仅可写主库真正执行，从库自动跳过）
journalctl -u mysql-backup --since today          # 查看备份日志
```

备份目录布局（在 **当前主库** 的本地磁盘上，默认保留最近 `mysql_backup_retention: 3` 份）：

```text
/data/backups/mysql/<集群名>/
├── 20260729T053900Z/          # 一份已 prepare 的全量备份（可直接恢复）
│   ├── backup.ok              # 提交标记：只有完整成功的备份才有
│   ├── backup.log             # XtraBackup 执行日志
│   └── ...                    # InnoDB 数据文件
├── ...                        # 按 mysql_backup_retention（默认 3）保留最近 N 份
└── latest -> 20260729T053900Z # 原子指向最新一份
```

检查备份新鲜度（HA 集群要在 **所有成员** 上检查，因为备份跟随主库落盘）：

```bash
ansible my-test -b -a 'ls -l /data/backups/mysql/my-test/latest'
```

备份监控与排障：

- 每次成功备份后，脚本会原子更新 `/var/lib/node_exporter/textfile/mysql.prom`（导出 `mysql_backup_last_success_timestamp_seconds` 与 `mysql_backup_size_bytes`），由 VictoriaMetrics 聚合为 `mysql:ins:backup_time` 与 `mysql:cls:backup_time`；若全集群超过 30 小时无成功备份，会自动触发 `MySQLBackupStale`（WARN）告警；
- 若备份中途失败，旧的已提交备份与 `latest` 软链保持原样不受污染，失败当次的 XtraBackup 详细日志保存在 `/var/lib/pigsty/mysql-backup/<UTC 时间戳>.log`。


--------

## 恢复物理备份

以下手册将单机实例恢复到最近一次备份（**破坏性操作**：备份之后的写入将丢失。恢复前确认 `latest` 时间戳可接受；若自定义了 `mysql_data`，请将下文的 `/data/mysql` 替换为实际路径）。HA 集群的整簇重建同理：先在一台恢复出数据，其余空节点走 Clone 重建。

```bash
# 0. 确认备份可用：必须存在 backup.ok
BK=/data/backups/mysql/my-meta/latest
sudo test -f "$BK/backup.ok" && sudo cat "$BK/backup.ok"

# 1. 停止备份定时器、正在运行的备份任务与数据库（Debian/Ubuntu 将 mysqld 换为 mysql），保留现场残骸
sudo systemctl stop mysql-backup.timer mysql-backup.service mysqld
sudo mv /data/mysql /data/mysql.destroyed

# 2. 回拷备份（备份已 prepare，无需再执行 --prepare；务必加 --no-defaults 与 --datadir）
sudo install -d -m 0750 -o mysql -g mysql /data/mysql
sudo xtrabackup --no-defaults --copy-back --target-dir="$BK" --datadir=/data/mysql
sudo rm -f /data/mysql/backup.ok /data/mysql/backup.log   # 清除随备份带入的记录文件

# 3. 重建备份不包含的运行子目录
sudo install -d -m 0750 -o mysql -g mysql /data/mysql/binlog /data/mysql/tmp

# 4. 重建 Pigsty 数据目录属主标记（cluster/instance/topology 按实际实例填写）
echo '{"version": 1, "cluster": "my-meta", "instance": "my-meta-1", "topology": "standalone"}' | \
  sudo tee /data/mysql/.pigsty-mysql-initialized > /dev/null
sudo chmod 0600 /data/mysql/.pigsty-mysql-initialized
sudo chown -R mysql:mysql /data/mysql

# 5. EL 系统恢复 SELinux 上下文，然后重新启动数据库与备份定时器
sudo restorecon -RF /data/mysql 2>/dev/null || true
sudo systemctl start mysqld mysql-backup.timer

# 6. 验证数据与 GTID 位点，并确认剧本可正常收敛
my -e 'SELECT @@gtid_executed; SHOW DATABASES;'
./mysql.yml -l my-meta        # 应全绿收敛（changed=0 或仅例行项）
```

第 4 步的标记文件是 Pigsty 的数据目录属主凭证：缺失或内容不匹配时，`mysql.yml` 会拒绝接管恢复出的数据目录。HA 场景的 `topology` 值为 `innodb_cluster`，实例名按成员各自填写。


--------

## 完全停机恢复

三个成员全部 `OFFLINE`（如机房断电恢复、或执行过停服保数据）时，分两种情况处理：

### 三台主机全部可达（自动恢复）

只要三台成员的 SSH 与 `mysqld` 均可访问，直接对完整集群运行剧本即可：

```bash
./mysql.yml -l my-test
```

剧本会自动采集三台成员的 `@@gtid_executed` 超集关系，选出事务位点最新的成员以 `force: false` 执行 `dba.rebootClusterFromCompleteOutage("my-test")`，并将残余 `OFFLINE` 成员增量 rejoin 回集群。

### 部分主机损毁失联（手工强制恢复）

若全停的同时有成员硬件损坏无法开机，剧本出于防脑裂安全边界会拒绝自动重建（因为失联机器可能持有更新事务）。确认可接受潜在未同步事务损失后，在存活成员中选出 GTID 最新的一台手工重建：

```bash
# 1. 在所有存活成员上比较已执行 GTID 集合，选出最新的一台（假设为 10.10.10.12）
ansible 10.10.10.11,10.10.10.12 -b -a "mysql --defaults-extra-file=/etc/mysql/pigsty/root.cnf -NBe 'SELECT @@gtid_executed'"

# 2. 在最新成员上用 mysqlsh --no-defaults 重建集群仲裁
sudo mysqlsh --no-defaults --js -e '
shell.options.useWizards=false;
var pw = os.loadTextFile("/etc/mysql/pigsty/cluster-password").replace(/[\r\n]+$/, "");
shell.connect({user:"dbuser_cluster", password:pw, host:"10.10.10.12", port:3306,
  "ssl-mode":"VERIFY_CA", "ssl-ca":"/etc/pki/ca.crt"});
var c = dba.rebootClusterFromCompleteOutage("my-test", {force: true});
print(c.status().defaultReplicaSet.status);'

# 3. 用原 IP 补齐损坏机器后（见「替换故障成员」），整簇运行剧本自动 Clone 补齐三副本
./node.yml  -l 10.10.10.13
./mysql.yml -l my-test
```

要点：

- 重建完成前集群处于 `super_read_only` 无法写入；
- 平台默认 `sql_require_primary_key=ON` 已从源头拦截会阻塞该流程的无主键表。


--------

## 平台密码的边界

三个平台密码的运维边界（详见 [参数参考](/docs/mysql/param#凭据参数)）：

- `mysql_monitor_password`：改清单后重跑即可轮换（Exporter 配置随之更新）；
- `mysql_root_password`：不支持隐式重置。轮换流程：主库手工 `ALTER USER 'root'@'localhost' IDENTIFIED BY '新密码';` → 更新清单 → 重跑收敛凭据文件；
- `mysql_cluster_password`：HA 集群中与 Metadata 和 Router 密钥环绑定，普通重跑拒绝轮换（单机无此限制，改清单重跑即生效）；当前版本没有 HA 自动轮换流程，如必须轮换请通过 AdminAPI 手工操作并同步全部成员的凭据文件后再更新清单。
