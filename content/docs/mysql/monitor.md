---
title: 监控告警
weight: 5015
description: MySQL 指标采集、Grafana Dashboard、告警规则与日志查询。
icon: fa-solid fa-chart-line
module: [MYSQL]
categories: [参考]
---

MYSQL 模块复用 Pigsty 的可观测性基座：指标经 mysqld_exporter 进入 VictoriaMetrics，错误日志经 Journald/Vector 进入 VictoriaLogs，Grafana 提供 5 个预置 Dashboard，vmalert 加载 68 条衍生规则与 27 条告警规则。


--------

## 采集架构

每个 MySQL 节点运行一个 `mysqld_exporter`（端口 `9104`），以最小权限监控账号（`dbuser_monitor@'127.0.0.1'`）采集服务器与 MGR 指标。部署时在 Infra 节点生成文件发现 Target：

```text
/infra/targets/mysql/<实例名>.yml     # 如 my-test-1.yml
```

VictoriaMetrics 的 `mysql` 抓取任务消费该目录。`mysql_exporter_enabled: false` 会把 Target 收敛为空；只有 `mysql-rm.yml` 才删除 Target 文件。

Exporter 启用的采集器包括：全局状态/变量、Binlog 尺寸、InnoDB 指标、进程列表、性能模式语句摘要（Top 50 摘要）、表/索引 IO 等待，以及 MGR 成员与复制统计。


--------

## 标签模型

所有 MySQL 指标携带统一标签：

| 标签 | 含义 | 示例 |
|:---|:---|:---|
| `job` | 抓取任务 | `mysql` |
| `cls` | 集群名 | `my-test` |
| `ins` | 实例名 | `my-test-1` |
| `ip` | 成员地址 | `10.10.10.11` |
| `topology` | 拓扑类型 | `innodb_cluster` / `standalone` |
{.full-width}

衍生规则以 `mysql:ins:*`（实例级）与 `mysql:cls:*`（集群级）命名，完整清单见 [指标定义](/docs/mysql/metric)。


--------

## Grafana Dashboard

| Dashboard | 用途 |
|:---|:---|
| [MySQL Overview](https://demo.pigsty.cc/ui/d/mysql-overview) | 舰队总览：集群清单、健康度、QPS/TPS、活跃告警与实例清单 |
| [MySQL Cluster](https://demo.pigsty.cc/ui/d/mysql-cluster) | 单集群视角：成员状态、负载、节点资源与集群日志 |
| [MySQL Instance](https://demo.pigsty.cc/ui/d/mysql-instance) | 单实例细节：连接、语句、InnoDB、临时表、锁与实例日志 |
| [MySQL Group Replication](https://demo.pigsty.cc/ui/d/mysql-replication) | MGR 专题：成员角色、认证/应用队列、流控、只读安全与 GR 日志 |
| [MySQL Alert](https://demo.pigsty.cc/ui/d/mysql-alert) | 告警汇总与关键平台日志 |
{.full-width}

集群健康速读：`mysql:cls:health` 取值 **2（健康）/ 1（降级仍可写）/ 0（危险或不可写）**，Overview 首屏的 Healthy Clusters 与 Cluster Health 时间线都基于它。

MySQL Group Replication Dashboard 仅对 `innodb_cluster` 拓扑有意义；选中单机集群时相关面板显示 No data 属预期现象。


--------

## 告警规则

27 条告警规则按严重级分层（`severity`：CRIT / WARN / INFO），关键规则如下：

### 可用性与集群（响应优先）

| 告警 | 级别 | 触发条件 |
|:---|:---:|:---|
| `MySQLInstanceDown` | CRIT | 实例连接失败超 1 分钟 |
| `MySQLClusterNoPrimary` | CRIT | 集群无 ONLINE 主库超 1 分钟 |
| `MySQLClusterQuorumLost` | CRIT | ONLINE 成员不足多数派超 1 分钟 |
| `MySQLClusterMultiplePrimary` | CRIT | 出现多主（30 秒即告，脑裂信号） |
| `MySQLSecondaryWritable` | CRIT | 从库可写超 2 分钟（数据发散风险） |
| `MySQLClusterMemberOffline` | WARN | 声明成员离组超 5 分钟 |
| `MySQLPrimaryReadOnly` | WARN | 主库只读超 5 分钟 |
| `MySQLExporterDown` | WARN | Exporter 抓取失败超 2 分钟 |
{.full-width}

### 容量与性能（观察优先）

连接压力（`MySQLConnectionsHigh` WARN 80% / `MySQLConnectionsCritical` CRIT 95%）、复制队列（`MySQLGRQueueHigh` WARN / `MySQLGRQueueCritical` CRIT）、流控（`MySQLGRFlowControlHigh`）、InnoDB（`MySQLBufferPoolWaits`、`MySQLInnoDBLogWaits`、`MySQLRedoCapacityHigh`、`MySQLDeadlocksHigh`、`MySQLHistoryListLarge`），以及 INFO 级的慢查询、磁盘临时表、全表连接、缓冲池命中率与重启提示。

实测行为参考：主库崩溃切换（约 20 秒）只会产生 pending 不会误报；真正的完全停机会在 2 分钟内让 `ClusterNoPrimary` 与 `QuorumLost` 进入 firing。


--------

## 日志查询

MySQL 错误日志双写：本地文件 `/var/log/mysql/error.log` + Syslog → Journald → Vector → VictoriaLogs。日志条目携带 `app=mysqld-<实例名>` 标识，Dashboard 的日志面板开箱可用，也可直接用 LogsQL 查询：

```bash
# 某实例最近的错误日志
curl -s http://<infra>:9428/select/logsql/query \
  -d 'query=app:mysqld-my-test-1 level:err _time:1h'

# 某集群全部 MySQL 相关日志（含备份任务）
curl -s http://<infra>:9428/select/logsql/query \
  -d 'query=job:syslog cls:my-test (app:~"mysqld-" OR unit:mysql-backup) _time:1h | limit 100'
```

注意日志的 `cls` 标签取自 **节点** 集群名（`node_cluster`）——像配置示例那样保持 `node_cluster` 与 `mysql_cluster` 一致，指标与日志的标签才能对齐。

已知边界：

- **慢查询日志**（`slow.log`，阈值 1 秒）仅落本地文件，不进入 VictoriaLogs；分析慢查询请登录实例查看文件，或使用性能模式语句摘要指标（`mysql:ins:statement_latency` 等）；
- **Router 运行日志** 写入 `/var/log/mysqlrouter/`，同样仅限本地文件。


--------

## 验证监控链路

部署后可用以下命令自检全链路：

```bash
# Exporter 本体
curl -s http://<成员>:9104/metrics | grep -E '^mysql_up '

# VictoriaMetrics 抓取与衍生规则
curl -s 'http://<infra>:8428/api/v1/query?query=mysql_up'
curl -s 'http://<infra>:8428/api/v1/query?query=mysql:cls:health'

# vmalert 规则装载（应看到 mysql-rules 与 mysql-alerts 两组）
curl -s 'http://<infra>:8880/api/v1/rules' | grep -o '"name":"mysql-[a-z]*"'

# 日志入库
curl -s 'http://<infra>:9428/select/logsql/query' -d 'query=app:~"mysqld-" _time:1h | stats by (app) count()'
```
