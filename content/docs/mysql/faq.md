---
title: 常见问题
weight: 5017
description: Pigsty MySQL 试点模块常见问题与故障排查。
icon: fa-solid fa-circle-question
module: [MYSQL]
categories: [参考]
---

## 当前 MYSQL 模块是什么成熟度？

Pilot 试点模块，定位「简单、廉价、够用」的 MySQL 集群。部署收敛、高可用切换、三节点完全停机自愈、同地址死机替换、每日物理备份与监控告警均经过系统性实测；物理备份回拷恢复刻意保留为手工操作并配有 [操作手册](/docs/mysql/admin#恢复物理备份)。不追求与 PGSQL 模块同级的完备度：没有 PITR、没有 DNS/HAProxy 接入层（支持本地 Router 与 `NODE` 二层 VIP）、没有在线拓扑扩缩容。用于严肃生产环境前，请按业务要求验证并演练恢复流程。


## 为什么固定 MySQL 8.4，不能选版本？

MYSQL 是「固定平台」而不是通用安装器：Server、Client、Shell、Router、XtraBackup 全线锁定 8.4 LTS，保证组件间兼容与行为可预期，省去版本矩阵的测试与踩坑成本。这是试点模块控制复杂度的核心取舍；需要其他版本或深度定制时，本模块不适合。


## 为什么只支持 1 或 3 节点？怎么扩容？

拓扑固定为单机或三节点单主 InnoDB Cluster，预检拒绝其他成员数，也不支持 1→3 原地升级（数据目录标记会拦截拓扑变更）。原因：动态成员数会引入仲裁、Router 重引导与收敛路径的组合复杂度，超出试点模块的收益。

扩容路径：

- **纵向**：换更大机器，走 [同地址替换](/docs/mysql/admin#替换故障成员) 逐台完成（滚动换硬件）；
- **单机 → HA**：新建三节点集群，用 `mysqldump`/`mysqlsh util.dumpInstance` 逻辑迁移；
- **读扩展**：只读流量走 `6447` 由两个从库分担。


## 为什么建表报 ERROR 3750（要求主键）？

平台默认 `sql_require_primary_key=ON`。无主键表在 Group Replication 下 **只读不可写**，还会在完全停机恢复时阻塞 AdminAPI 重建集群——与其让它在灾难现场爆炸，不如在建表时拦截。请为所有表定义主键；接入既有系统确实无法改表时，可用参数覆盖关闭：

```yaml
mysql_parameters: { sql_require_primary_key: false }
```

单机实例同样默认开启，以保证未来能平滑迁往 HA。


## 为什么 Ubuntu/Debian ARM64 被拒绝？

Oracle 的 APT 仓库没有为 MySQL 8.4 提供 `arm64` 软件包，这不是 Pigsty 能绕过的。ARM 环境（含 Apple Silicon 上的虚拟机）请使用 EL 9/10（Rocky/Alma），Oracle 的 YUM 仓库提供完整 `aarch64` 支持。


## 客户端应该连哪个端口？TLS 是必须的吗？

HA 集群连任一成员的 `6446`（读写）/`6447`（只读），Router 自动跟随主从切换；单机直连 `3306`。TLS 是强制的：服务端 `require_secure_transport=ON`，明文连接直接被拒（`ERROR 3159`）。普通客户端默认的 `PREFERRED` 模式即会自动协商加密（只有显式 `DISABLED` 才会被拒）；建议显式 `VERIFY_CA` 并信任 `/etc/pki/ca.crt`。

Router 是每节点本地部署。若希望使用单一浮动接入地址，可在同组启用 [`NODE`](/docs/node) 模块的二层 VIP（`vip_enabled: true`、`vip_address`、`vip_vrid`），VIP 会自动写入 TLS 叶证书 SAN 并暴露 `<vip>:6446/6447`；若不使用 VIP，建议在应用侧配置多地址 DSN（把三个成员的 `6446` 都写进连接串）以规避单节点故障。


## 主库切走了，会自动切回来吗？

不会，也不需要。`mysql_seq=1` 只是首次引导顺序，运行时主库由 MGR 选举决定；故障切换或滚动重启后主库落在哪台都是合法状态，重跑剧本不会移动主库。需要指定主库时用 [`setPrimaryInstance`](/docs/mysql/admin#主从切换) 手工切换。


## 某个成员掉线了怎么办？

绝大多数情况下什么都不用做：进程崩溃由 systemd 拉起并自动重新入组（实测主库崩溃约 20 秒完成切换与自愈）。如果成员长期停留在 `OFFLINE`（如网络分区恢复后、或 `STOP GROUP_REPLICATION` 之后），重跑一次 `./mysql.yml -l <集群>` 即可将其 rejoin。仍失败时看剧本报错——错误信息会说明原因与下一步动作。


## 三台全挂了怎么恢复？

只要三台主机恢复网络与 `mysqld` 可达，直接执行 `./mysql.yml -l <集群>` 即可自动恢复：剧本会自动比对三台节点的 GTID 集合，从位点最高的成员以 `force: false` 执行 `dba.rebootClusterFromCompleteOutage()` 并将其余成员 rejoin 入组。只有当全停的同时伴随机器损毁失联（不足三台可达）时，剧本才会出于防脑裂保护拒绝自动重建，此时请按 [完全停机恢复手册](/docs/mysql/admin#完全停机恢复) 在最新存活成员上手工介入。


## 备份在哪里？能恢复到任意时间点吗？

备份是 **每日一次的全量物理备份**，落在 **当前主库** 的 `mysql_backup_dir/<集群>/`（默认 `/data/backups/mysql/<集群>/`，默认保留最近 `mysql_backup_retention: 3` 份；主从切换后新备份跟随新主库，检查时要看所有成员）。没有增量与 Binlog 归档，因此 **不支持 PITR**：单机的恢复点就是最近一次备份（最坏损失一天写入）；HA 集群的数据安全主要靠三副本同步复制，备份用于兜底与整簇重建。恢复步骤见 [恢复物理备份手册](/docs/mysql/admin#恢复物理备份)。异地容灾请自行同步备份目录。


## 备份失败会有告警吗？

会。`mysql-backup` 脚本会将最近一次成功备份的时间戳与体积写入 `/var/lib/node_exporter/textfile/mysql.prom`（若首次备份即失败则写入 `0`），由 VictoriaMetrics 聚合为 `mysql:cls:backup_time`；当整个集群超过 30 小时未产出成功备份时，会自动触发 `MySQLBackupStale`（WARN）告警。失败当次的详细 XtraBackup 日志位于 `/var/lib/pigsty/mysql-backup/`，服务日志也已接入 VictoriaLogs（`unit:mysql-backup`）。


## 为什么 `mysql_parameters` 里有些参数被拒绝？

身份（`server_id`、`datadir`、端口等）、复制（`gtid_mode`、`log_bin`、`group_replication_*`）与 TLS 全族是平台保证的一部分，被列为保留参数——覆盖它们会破坏集群身份或安全底线，预检直接拒绝（`-` 与 `_` 写法同判）。其余参数放行，且渲染后仍经 `mysqld --validate-config` 校验。完整保留清单见 [参数参考](/docs/mysql/param#mysql_parameters)。


## 修改参数会导致停机吗？

会有一次可控的秒级抖动：参数变更触发编排式滚动重启，从库逐台先行（客户端无感），主库最后重启并触发一次自动切换（实测写中断约 3–4 秒）。降级集群会拒绝滚动重启，避免雪上加霜。对切换敏感的业务请安排变更窗口。


## 怎么修改 root 或平台密码？

- `mysql_monitor_password`：改清单重跑即可（Exporter 配置随之刷新）；
- `mysql_root_password`：为防止误配置静默改密，剧本拒绝隐式重置——先手工 `ALTER USER 'root'@'localhost' ...`，再更新清单重跑；
- `mysql_cluster_password`：HA 集群中与 Metadata、Router 密钥环绑定，普通重跑拒绝轮换（单机改清单重跑即生效），当前无 HA 自动轮换流程；如必须轮换，请通过 AdminAPI 手工操作并同步各成员凭据文件后再更新清单。


## `mysql-rm.yml` 会删数据吗？怎么只停服保数据后重新拉起？

`mysql-rm.yml` 默认 `mysql_rm_data: true`，传入 `-e mysql_safeguard=false` 执行时会彻底删除 `mysql_data`（默认 `/data/mysql`）与受管配置文件，但 **始终保留 `mysql_backup_dir`（`/data/backups/mysql`）**。若希望临时停服并完整保留数据，请对整套集群加上 `-e mysql_rm_data=false`（见 [停服保数据与销毁集群](/docs/mysql/admin#停服保数据与销毁集群)）；当前版本不再写入 `.pigsty-mysql-retired` 锁文件，后续直接执行 `./mysql.yml -l <集群>` 即可原地拉起服务并自动完成仲裁恢复。


## OpenHalo 模板与这个模块是什么关系？

[`conf/fork/halo.yml`](https://github.com/pgsty/pigsty/blob/main/conf/fork/halo.yml) 是 **OpenHalo** 模板——基于 PostgreSQL 内核的 MySQL 线缆协议兼容方案（`pg_mode: mysql`），与原生 MYSQL 模块无关。原生 MySQL 模块的参考模板是 [`conf/demo/mysql.yml`](https://github.com/pgsty/pigsty/blob/main/conf/demo/mysql.yml)。选型参考：需要真 MySQL 8.4 生态与 InnoDB Cluster 兼容用本模块；在 PGSQL 基础设施上兼容部分 MySQL 协议应用可评估 OpenHalo。


## 剧本失败提示完全停机且无法自动恢复？

当集群没有任何 `ONLINE` 成员，且三台声明成员中 **有主机失联不可达** 时，剧本无法确认失联主机是否持有更新的 GTID 事务，因此拒绝自动执行 `rebootClusterFromCompleteOutage`。若故障主机可恢复开机，请先恢复主机连通性再重跑 `./mysql.yml -l <集群>`（三台全可达时会自动选最高 GTID 重建）；若机器已永久损坏，请按 [完全停机恢复](/docs/mysql/admin#完全停机恢复) 在最新存活成员上手工强制重建。


## 监控没有数据 / Dashboard 空白？

按链路排查：`curl http://<成员>:9104/metrics | grep mysql_up`（Exporter 本体）→ Infra 上确认 `/infra/targets/mysql/` 有实例文件 → VictoriaMetrics 查询 `up{job="mysql"}`。GR Dashboard 选中了单机集群时 MGR 面板显示 No data 属正常现象。完整自检命令见 [监控告警](/docs/mysql/monitor#验证监控链路)。
