---
title: 常见问题
weight: 5017
description: Pigsty MySQL 试点模块常见问题与故障排查。
icon: fa-solid fa-circle-question
module: [MYSQL]
categories: [参考]
---

## 当前 MYSQL 模块是什么成熟度？

Pilot 试点模块，定位「简单、廉价、够用」的 MySQL 集群。部署收敛、高可用切换、每日备份、监控告警四大核心能力经过系统性实测（含故障注入与完全停机演练）；恢复类破坏性流程刻意保留为手工操作并配有[操作手册](/docs/pilot/mysql/admin)。不追求与 PGSQL 模块同级的完备度：没有 PITR、没有接入层 VIP/DNS、没有自动扩缩容。用于严肃生产环境前，请按业务要求验证并演练恢复流程。


## 为什么固定 MySQL 8.4，不能选版本？

MYSQL 是「固定平台」而不是通用安装器：Server、Client、Shell、Router、XtraBackup 全线锁定 8.4 LTS，保证组件间兼容与行为可预期，省去版本矩阵的测试与踩坑成本。这是试点模块控制复杂度的核心取舍；需要其他版本或深度定制时，本模块不适合。


## 为什么只支持 1 或 3 节点？怎么扩容？

拓扑固定为单机或三节点单主 InnoDB Cluster，预检拒绝其他成员数，也不支持 1→3 原地升级（数据目录标记会拦截拓扑变更）。原因：动态成员数会引入仲裁、Router 重引导与收敛路径的组合复杂度，超出试点模块的收益。

扩容路径：

- **纵向**：换更大机器，走[同地址替换](/docs/pilot/mysql/admin#替换故障成员)逐台完成（滚动换硬件）；
- **单机 → HA**：新建三节点集群，用 `mysqldump`/`mysqlsh util.dumpInstance` 逻辑迁移；
- **读扩展**：只读流量走 `6447` 由两个从库分担。


## 为什么建表报 ERROR 3750（要求主键）？

平台默认 `sql_require_primary_key=ON`。无主键表在 Group Replication 下**只读不可写**，还会在完全停机恢复时阻塞 AdminAPI 重建集群——与其让它在灾难现场爆炸，不如在建表时拦截。请为所有表定义主键；接入既有系统确实无法改表时，可用参数覆盖关闭：

```yaml
mysql_parameters: { sql_require_primary_key: false }
```

单机实例同样默认开启，以保证未来能平滑迁往 HA。


## 为什么 Ubuntu/Debian ARM64 被拒绝？

Oracle 的 APT 仓库没有为 MySQL 8.4 提供 `arm64` 软件包，这不是 Pigsty 能绕过的。ARM 环境（含 Apple Silicon 上的虚拟机）请使用 EL 9/10（Rocky/Alma），Oracle 的 YUM 仓库提供完整 `aarch64` 支持。


## 客户端应该连哪个端口？TLS 是必须的吗？

HA 集群连任一成员的 `6446`（读写）/`6447`（只读），Router 自动跟随主从切换；单机直连 `3306`。TLS 是强制的：服务端 `require_secure_transport=ON`，明文连接直接被拒（`ERROR 3159`）。普通客户端默认的 `PREFERRED` 模式即会自动协商加密（只有显式 `DISABLED` 才会被拒）；建议显式 `VERIFY_CA` 并信任 `/etc/pki/ca.crt`。

Router 是每节点本地部署，没有统一 VIP。应用侧请使用多地址 DSN（把三个成员的 `6446` 都写进连接串）以规避单节点故障。


## 主库切走了，会自动切回来吗？

不会，也不需要。`mysql_seq=1` 只是首次引导顺序，运行时主库由 MGR 选举决定；故障切换或滚动重启后主库落在哪台都是合法状态，重跑剧本不会移动主库。需要指定主库时用 [`setPrimaryInstance`](/docs/pilot/mysql/admin#主从切换) 手工切换。


## 某个成员掉线了怎么办？

绝大多数情况下什么都不用做：进程崩溃由 systemd 拉起并自动重新入组（实测主库崩溃约 20 秒完成切换与自愈）。如果成员长期停留在 `OFFLINE`（如网络分区恢复后、或 `STOP GROUP_REPLICATION` 之后），重跑一次 `./mysql.yml -l <集群>` 即可将其 rejoin。仍失败时看剧本报错——错误信息会说明原因与下一步动作。


## 三台全挂了怎么恢复？

这是唯一需要手工介入的可用性场景（防脑裂的刻意设计）：在数据最新的成员上执行 `dba.rebootClusterFromCompleteOutage()`，然后重跑剧本收敛其余成员。完整步骤见[完全停机恢复手册](/docs/pilot/mysql/admin#完全停机恢复)。`mysql.yml` 在这种状态下的报错会直接给出该指引。


## 备份在哪里？能恢复到任意时间点吗？

备份是**每日一次的全量物理备份**，落在**当前主库**的 `/data/backups/mysql/<集群>/` 下（主从切换后新备份跟随新主库，检查时要看所有成员）。没有增量与 Binlog 归档，因此**不支持 PITR**：单机的恢复点就是最近一次备份（最坏损失一天写入）；HA 集群的数据安全主要靠三副本同步复制，备份用于兜底与整簇重建。恢复步骤见[恢复物理备份手册](/docs/pilot/mysql/admin#恢复物理备份)。异地容灾请自行同步备份目录。


## 备份失败会有告警吗？

当前版本没有备份专属指标与告警（已知缺口）。备份日志已接入 VictoriaLogs（`unit:mysql-backup`），Instance Dashboard 的 Router / Backup Logs 面板可查；重要环境建议对备份日志做外部巡检，并定期做恢复演练验证备份可用性。


## 为什么 `mysql_parameters` 里有些参数被拒绝？

身份（`server_id`、`datadir`、端口等）、复制（`gtid_mode`、`log_bin`、`group_replication_*`）与 TLS 全族是平台保证的一部分，被列为保留参数——覆盖它们会破坏集群身份或安全底线，预检直接拒绝（`-` 与 `_` 写法同判）。其余参数放行，且渲染后仍经 `mysqld --validate-config` 校验。完整保留清单见[参数参考](/docs/pilot/mysql/param#mysql_parameters)。


## 修改参数会导致停机吗？

会有一次可控的秒级抖动：参数变更触发编排式滚动重启，从库逐台先行（客户端无感），主库最后重启并触发一次自动切换（实测写中断约 3–4 秒）。降级集群会拒绝滚动重启，避免雪上加霜。对切换敏感的业务请安排变更窗口。


## 怎么修改 root 或平台密码？

- `mysql_monitor_password`：改清单重跑即可（Exporter 配置随之刷新）；
- `mysql_root_password`：为防止误配置静默改密，剧本拒绝隐式重置——先手工 `ALTER USER 'root'@'localhost' ...`，再更新清单重跑；
- `mysql_cluster_password`：HA 集群中与 Metadata、Router 密钥环绑定，普通重跑拒绝轮换（单机改清单重跑即生效），当前无 HA 自动轮换流程；如必须轮换，请通过 AdminAPI 手工操作并同步各成员凭据文件后再更新清单。


## 下线的集群怎么复活？误删了退役标记会怎样？

`mysql-rm.yml` 下线时保留全部数据并写入退役标记；复活 = 删除各成员的 `/var/lib/mysql/.pigsty-mysql-retired` 后重跑 `mysql.yml`（见[下线与复活集群](/docs/pilot/mysql/admin#下线与复活集群)）。单机两步即可；HA 集群还需按[完全停机恢复](/docs/pilot/mysql/admin#完全停机恢复)重建仲裁。标记的意义是防止「下线后被无意重新拉起」；数据目录属主校验（`.pigsty-mysql-initialized`）独立存在，删除退役标记不会让别的集群接管这份数据。


## `conf/mysql.yml` 模板怎么和这个模块对不上？

那是 **OpenHalo** 模板——基于 PostgreSQL 内核的 MySQL 线缆协议兼容方案（`pg_mode: mysql`），与本模块无关。原生 MySQL 模块的参考模板是 [`conf/demo/mysql.yml`](https://github.com/pgsty/pigsty/blob/main/conf/demo/mysql.yml)。选型参考：需要真 MySQL 生态兼容用本模块；PG 基础设施上跑 MySQL 协议应用可考虑 OpenHalo。


## 剧本失败显示 `no ONLINE member holds the cluster`？

这是完全停机（或仅存成员不可达）的判定：没有任何 ONLINE 成员持有集群。按报错给出的指引执行[完全停机恢复](/docs/pilot/mysql/admin#完全停机恢复)。如果实际上有成员在线却报此错，先检查 seq=1 协调成员（收敛脚本在其上执行）到各成员 3306 的连通性，以及该成员上的 CA（`/etc/pki/ca.crt`）是否就位。


## 监控没有数据 / Dashboard 空白？

按链路排查：`curl http://<成员>:9104/metrics | grep mysql_up`（Exporter 本体）→ Infra 上确认 `/infra/targets/mysql/` 有实例文件 → VictoriaMetrics 查询 `up{job="mysql"}`。GR Dashboard 选中了单机集群时 MGR 面板显示 No data 属正常现象。完整自检命令见[监控告警](/docs/pilot/mysql/monitor#验证监控链路)。
