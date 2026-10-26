---
title: 指标列表
weight: 3060
description: INFRA 当前 Victoria 可观测组件的指标入口、标签、记录规则与查询方式。
icon: fa-solid fa-list-check
module: [INFRA]
categories: [参考]
---

INFRA 对 VictoriaMetrics、VictoriaLogs、VictoriaTraces、VMAlert、Alertmanager、Grafana、Nginx Exporter 与 Blackbox Exporter 进行自监控。采集目标来自 [`roles/infra/templates/prometheus/infra.yml.j2`](https://github.com/pgsty/pigsty/blob/main/roles/infra/templates/prometheus/infra.yml.j2)，采集任务定义在 [`roles/infra/templates/victoria/prometheus.yml`](https://github.com/pgsty/pigsty/blob/main/roles/infra/templates/victoria/prometheus.yml)。

组件版本与启用状态会改变原始指标集合。旧版 Prometheus / Loki 抓取快照不能作为 Victoria 套件的完整接口；本页列出当前源码明确配置的目标、规则和仪表盘使用的指标。全站仪表盘、记录规则与告警数量的统计口径见 [**监控体系**](/docs/concept/monitor/)。

## 采集入口与标签

所有下列目标均使用 `job=infra`，通过 HTTP `/metrics` 抓取；默认目标文件为 `/infra/targets/infra/infra-<infra_seq>.yml`。

| 组件 | 默认端口 | `cls` | 实例标签 `ins` |
|:---|---:|:---|:---|
| Nginx Exporter | 9113 | `nginx` | `nginx-<infra_seq>` |
| VictoriaMetrics | 8428 | `vmetrics` | `vmetrics-<infra_seq>` |
| VictoriaLogs | 9428 | `vlogs` | `vlogs-<infra_seq>` |
| VictoriaTraces | 10428 | `vtraces` | `vtraces-<infra_seq>` |
| VMAlert | 8880 | `vmalert` | `vmalert-<infra_seq>` |
| Alertmanager | 9059 | `alertmanager` | `alertmanager-<infra_seq>` |
| Blackbox Exporter | 9115 | `blackbox` | `blackbox-<infra_seq>` |
| Grafana | 3000 | `grafana` | `grafana-<infra_seq>` |
{.full-width}

每个目标还携带 `ip` 和抓取端点 `instance`。模板不注入旧式 `type` 标签，应使用 `cls` 区分组件。仅启用对应组件才会注册目标；VMAlert 同时要求 `vmalert_enabled` 与 `vmetrics_enabled`，Nginx 目标的注册条件是 `nginx_enabled`。

Blackbox Exporter 的自身指标属于 `job=infra`；ICMP 探测经 `/probe` 产生的 `probe_*` 指标属于独立的 `job=ping`。这两种目标不能混为一谈。

## 当前记录规则

[`files/victoria/rules/infra.yml`](https://github.com/pgsty/pigsty/blob/main/files/victoria/rules/infra.yml) 定义 **2 条记录规则**，由 vmalert 求值并写回 VictoriaMetrics：

| 指标 | 源码表达式 | 含义 |
|:---|:---|:---|
| `infra_up` | `up{job="infra"}` | 基础设施抓取端点是否可达 |
| `agent_up` | `up{job!~"infra\|node\|etcd\|minio\|pgsql\|redis\|mysql"}` | 排除列出的任务后，其余抓取目标的可达状态 |
{.full-width}

`infra_up` 与 `agent_up` 是记录规则，不会出现在组件原始 `/metrics` 输出中。`agent_up` 的实际范围由上面的排除列表决定；当前列表没有排除 `kafka`、`ping`、`pgrds` 等任务，也不会覆盖已经属于 `node` 或 `pgsql` 的 Exporter。`up=1` 只说明抓取成功，服务功能健康还需结合 `nginx_up`、探测结果或组件自身指标判断。

两条告警 `InfraDown` 与 `AgentDown` 分别在上述指标 `<1` 持续 1 分钟时触发，级别均为 `CRIT`。具体规则见 [**监控告警**](/docs/infra/monitor/)。

## 共享存活记录规则

除模块规则外，[`roles/infra/templates/victoria/agent.yml`](https://github.com/pgsty/pigsty/blob/main/roles/infra/templates/victoria/agent.yml) 还生成 **14 条共享存活规则**，部署到 `/infra/rules/agent.yml`。下表保留模板表达式；其中端口由配置变量渲染。它们都源于采集器生成的 `up`，反映抓取是否成功，不代表数据库查询、仲裁或应用请求一定正常。

| 记录指标 | 模板表达式 |
|:---|:---|
| `node_up` | `up{instance=~".*:{{ node_exporter_port\|default('9100') }}"}` |
| `haproxy_up` | `up{instance=~".*:{{ haproxy_exporter_port\|default('9101') }}"}` |
| `keepalived_exporter_up` | `up{instance=~".*:{{ vip_exporter_port\|default('9650') }}"}` |
| `docker_up` | `up{instance=~".*:{{ docker_exporter_port\|default('9323') }}"}` |
| `vector_up` | `up{instance=~".*:{{ vector_port\|default('9598') }}"}` |
| `etcd_up` | `up{job="etcd"}` |
| `minio_up` | `up{job="minio"}` |
| `pg_exporter_agent_up` | `up{instance=~".*:{{ pg_exporter_port\|default('9630') }}"}` |
| `pgbouncer_exporter_agent_up` | `up{instance=~".*:{{ pgbouncer_exporter_port\|default('9631') }}"}` |
| `pgbackrest_exporter_agent_up` | `up{instance=~".*:{{ pgbackrest_exporter_port\|default('9854') }}"}` |
| `patroni_up` | `up{instance=~".*:{{ patroni_port\|default('8008') }}"}` |
| `mysql_exporter_up` | `up{job="mysql"}` |
| `kafka_up` | `up{job="kafka",role=~".+"}` |
| `kafka_exporter_up` | `up{job="kafka",role=""}` |
{.full-width}

这些记录指标同样不在原始 `/metrics` 端点中。按端口匹配的规则没有限定 `job`，因此相关端口覆盖需要在 Infra 的规则模板与服务配置之间保持一致。

## 仪表盘使用的主要指标

以下指标名来自当前 [`files/grafana/infra`](https://github.com/pgsty/pigsty/tree/main/files/grafana/infra) 中的查询表达式，是排查入口；可用性仍以实际安装版本的 `/metrics` 为准。

| 组件 | 主要指标 | 用途 |
|:---|:---|:---|
| 公共进程指标 | `process_cpu_seconds_total`、`process_resident_memory_bytes`、`process_start_time_seconds` | 进程资源和启动时间 |
| Victoria 组件 | `vm_app_version`、`vm_app_uptime_seconds` | 版本与运行时间 |
| VictoriaMetrics | `vm_rows_inserted_total`、`vm_rows`、`vm_data_size_bytes`、`vm_new_timeseries_created_total` | 写入、存储与新增时间序列 |
| VictoriaLogs | `vl_rows_ingested_total`、`vl_bytes_ingested_total`、`vl_data_size_bytes`、`vl_http_requests_total` | 日志写入、容量与请求 |
| VictoriaTraces | `vt_rows_ingested_total`、`vt_bytes_ingested_total`、`vt_storage_rows`、`vt_data_size_bytes` | Trace 写入与存储 |
| VMAlert | `vmalert_alerts_firing`、`vmalert_alerts_pending`、`vmalert_recording_rules_last_evaluation_samples`、`vmalert_alerting_rules_errors_total` | 告警状态和规则求值 |
| Alertmanager | `alertmanager_alerts`、`alertmanager_silences`、`alertmanager_notifications_total`、`alertmanager_notifications_failed_total` | 告警聚合、静默与通知 |
| Grafana | `grafana_build_info`、`grafana_http_request_duration_seconds_count`、`grafana_stat_active_sessions` | 版本、HTTP 请求与会话 |
| Nginx | `nginx_up`、`nginx_http_requests_total`、`nginx_connections_active`、`nginx_connections_waiting` | Nginx 状态、流量与连接 |
{.full-width}

这些是原始指标名，Counter 通常需要 `rate()` / `increase()` 后再分析。Histogram / Summary 的 `_bucket`、`_sum`、`_count` 是一个指标族的不同样本，不能按行数视作互不相关的指标族。

## 获取实际指标清单

在 VictoriaMetrics 的 VMUI（默认 `http://<infra-ip>:8428/vmui`）或 Grafana Explore 执行：

```promql
up{job="infra"}
count by (cls) (up{job="infra"})
count by (__name__) ({job="infra"})
```

第一条检查每个目标的抓取状态，第二条统计已注册的组件端点，第三条按指标名列出当前查询时刻可见的序列数。若要统计不同指标名数量，可使用 `count(count by (__name__) ({job="infra"}))`；它仍不是 Exporter 指标族数量，也不能与其他模块计数直接相加。

原始类型、HELP 文本与标签应从目标端点读取，例如：

```bash
curl -fsS http://127.0.0.1:8428/metrics
curl -fsS http://127.0.0.1:9428/metrics
curl -fsS http://127.0.0.1:8880/metrics
```
