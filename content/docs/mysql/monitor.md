---
title: 监控告警
weight: 5015
description: MySQL 指标采集、Grafana Dashboard、告警规则与日志查询。
icon: fa-solid fa-chart-line
module: [MYSQL]
categories: [参考]
---

MYSQL 模块复用 Pigsty 的可观测性基座：指标经 `mysqld_exporter` 与 `node_exporter` textfile 收集器进入 VictoriaMetrics，错误日志经 Journald/Vector 进入 VictoriaLogs，Grafana 提供 5 个预置 Dashboard，vmalert 加载 **70 条** 衍生规则与 **8 条** 精炼可行动告警规则。


--------

## 采集架构

每个 MySQL 节点运行一个 `mysqld_exporter`（端口 `9104`），以最小权限监控账号（`dbuser_monitor@'127.0.0.1'`）采集服务器与 MGR 指标；同时 `mysql-backup` 脚本将本地物理备份成功时间戳与体积写入 `/var/lib/node_exporter/textfile/mysql.prom`，由节点 `node_exporter` 一并上报并按 `ip` 关联至集群指标。部署时在 Infra 节点生成文件发现 Target：

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

[`files/victoria/rules/mysql.yml`](https://github.com/pgsty/pigsty/blob/main/files/victoria/rules/mysql.yml) 收敛为 **8 条精炼、可行动（Actionable）** 的告警规则（慢查询、临时表、缓冲池命中率、Redo 利用率等诊断型信号保留在 Grafana Dashboard 面板上，不再制造噪音告警）：

| 告警名称 | 级别 | 持续时间 | 触发表达式与处置提示 |
|:---|:---:|:---:|:---|
| `MySQLDown` | `CRIT` | `1m` | `mysql:ins:exporter_up == 1 and on (...) mysql:ins:up < 1`：Exporter 在线但无法连接 `mysqld` |
| `MySQLExporterDown` | `WARN` | `2m` | `mysql:ins:exporter_up < 1`：`mysqld_exporter` 抓取不可达 |
| `MySQLClusterDown` | `CRIT` | `1m` | `mysql:cls:health{topology="innodb_cluster"} < 1`：失去多数派或无唯一在线主库（全员恢复可达后跑 `mysql.yml` 可自动重建） |
| `MySQLClusterDegraded` | `WARN` | `5m` | `mysql:cls:health{topology="innodb_cluster"} == 1`：集群仍可写但有成员离线，跑 `mysql.yml` 重入组或同址换机 |
| `MySQLReplicationLag` | `WARN` | `10m` | `mysql:ins:gr_certifier_queue > 1000 or mysql:ins:gr_applier_queue > 1000`：MGR 认证或应用队列积压超 1000 事务 |
| `MySQLConnUsageHigh` | `WARN` | `5m` | `mysql:ins:connection_usage > 0.80`：实例连接数超过 `max_connections` 的 80% |
| `MySQLHistoryListLarge` | `WARN` | `15m` | `mysql:ins:history_list_length > 1000000`：长事务阻塞 Undo Purge，历史链表超 100 万 |
| `MySQLBackupStale` | `WARN` | `5m` | `time() - mysql:cls:backup_time > 30 * 3600`：全集群过去 30 小时内无成功本地全量备份（或首次备份失败） |
{.full-width .wide .expand}

实测行为参考：主库崩溃自动切换（约 20 秒）只会短暂进入 pending，不会触发误报；真正的完全停机或单成员掉线会按持续时间窗口准确触发 `MySQLClusterDown` 或 `MySQLClusterDegraded`。


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
