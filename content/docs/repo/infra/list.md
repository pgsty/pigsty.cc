---
title: "软件清单"
icon: fas fa-list
description: Infra 仓库中可用的软件清单
weight: 5441
---


--------

## Grafana 技术栈

| 名称                                                                                       | 版本       | 许可证                                                                                    | 备注                   |
|------------------------------------------------------------------------------------------|----------|----------------------------------------------------------------------------------------|----------------------|
| [`grafana`](https://github.com/grafana/grafana/)                                         | `12.3.1` | [AGPLv3](https://github.com/grafana/grafana/blob/main/LICENSE)                         | 开源可观测性与数据可视化平台       |
| [`loki`](https://github.com/grafana/loki)                                                | `3.1.1`  | [AGPLv3](https://github.com/grafana/loki/blob/main/LICENSE)                            | 日志聚合系统（已弃用）          |
| [`promtail`](https://github.com/grafana/loki/releases/tag/v3.0.0)                        | `3.0.0`  | [AGPLv3](https://github.com/grafana/loki/blob/main/LICENSE)                            | Loki 日志采集代理（已弃用）     |
| [`grafana-infinity-ds`](https://github.com/grafana/grafana-infinity-datasource/)         | `3.6.0`  | [Apache-2.0](https://github.com/grafana/grafana-infinity-datasource/blob/main/LICENSE) | 支持 JSON/CSV/XML 等数据源 |
| [`grafana-plugins`](https://github.com/pgsty/infra-pkg/tree/main/noarch/grafana-plugins) | `12.3.0` | [Apache-2.0](https://github.com/pgsty/infra-pkg/blob/main/LICENSE)                     | Pigsty 打包的额外面板插件     |
{.stretch-last}


--------

## Victoria 技术栈

| 名称                                                                                                      | 版本        | 许可证                                                                                           | 备注                          |
|---------------------------------------------------------------------------------------------------------|-----------|-----------------------------------------------------------------------------------------------|-----------------------------|
| [`victoria-metrics`](https://github.com/VictoriaMetrics/VictoriaMetrics)                                | `1.132.0` | [Apache-2.0](https://github.com/VictoriaMetrics/VictoriaMetrics/blob/master/LICENSE)          | 高性能时序数据库，替代 Prometheus      |
| [`victoria-logs`](https://github.com/VictoriaMetrics/VictoriaMetrics)                                   | `1.43.1`  | [Apache-2.0](https://github.com/VictoriaMetrics/VictoriaMetrics/blob/master/LICENSE)          | 高性能日志存储与查询引擎                |
| [`victoria-traces`](https://github.com/VictoriaMetrics/VictoriaMetrics)                                 | `0.5.1`   | [Apache-2.0](https://github.com/VictoriaMetrics/VictoriaMetrics/blob/master/LICENSE)          | 分布式链路追踪后端                   |
| [`victoria-metrics-cluster`](https://github.com/VictoriaMetrics/VictoriaMetrics)                        | `1.132.0` | [Apache-2.0](https://github.com/VictoriaMetrics/VictoriaMetrics/blob/master/LICENSE)          | VictoriaMetrics 分布式集群版      |
| [`vmutils`](https://github.com/VictoriaMetrics/VictoriaMetrics)                                         | `1.132.0` | [Apache-2.0](https://github.com/VictoriaMetrics/VictoriaMetrics/blob/master/LICENSE)          | VictoriaMetrics 配套命令行工具     |
| [`vlogscli`](https://github.com/VictoriaMetrics/VictoriaMetrics)                                        | `1.43.1`  | [Apache-2.0](https://github.com/VictoriaMetrics/VictoriaMetrics/blob/master/LICENSE)          | VictoriaLogs 交互式查询客户端       |
| [`vlagent`](https://github.com/VictoriaMetrics/VictoriaMetrics)                                         | `1.43.1`  | [Apache-2.0](https://github.com/VictoriaMetrics/VictoriaMetrics/blob/master/LICENSE)          | VictoriaLogs 日志采集代理         |
| [`grafana-victorialogs-ds`](https://github.com/VictoriaMetrics/victorialogs-datasource/releases/)       | `0.23.2`  | [Apache-2.0](https://github.com/VictoriaMetrics/victorialogs-datasource/blob/main/LICENSE)    | VictoriaLogs Grafana 数据源    |
| [`grafana-victoriametrics-ds`](https://github.com/VictoriaMetrics/victoriametrics-datasource/releases/) | `0.19.7`  | [Apache-2.0](https://github.com/VictoriaMetrics/victoriametrics-datasource/blob/main/LICENSE) | VictoriaMetrics Grafana 数据源 |
{.stretch-last}

{{% alert title="自行安装使用 victoria grafana 数据源插件时注意" color="info" %}}
Pigsty 将 victoria 数据源扩展拆分为特定架构的专用分包，因此如果您选择自行安装这些插件到您自己的 grafana 中使用时，
请在 `/etc/grafana/grafana.ini` 中配置以下参数，以允许使用未签名的插件。

```ini
allow_loading_unsigned_plugins = victoriametrics-logs-datasource,victoriametrics-metrics-datasource
```
{{% /alert %}}



--------

## Prometheus 技术栈

| 名称                                                                     |    版本    | 许可证                                                                               | 备注            |
|------------------------------------------------------------------------|----------|-----------------------------------------------------------------------------------|---------------|
| [`prometheus`](https://github.com/prometheus/prometheus)               | `3.8.1`  | [Apache-2.0](https://github.com/prometheus/prometheus/blob/main/LICENSE)          | 云原生监控系统与时序数据库 |
| [`pushgateway`](https://github.com/prometheus/pushgateway)             | `1.11.2` | [Apache-2.0](https://github.com/prometheus/pushgateway/blob/master/LICENSE)       | 短生命周期任务指标推送网关 |
| [`alertmanager`](https://github.com/prometheus/alertmanager)           | `0.30.0` | [Apache-2.0](https://github.com/prometheus/alertmanager/blob/main/LICENSE)        | 告警管理与通知分发     |
| [`blackbox_exporter`](https://github.com/prometheus/blackbox_exporter) | `0.27.0` | [Apache-2.0](https://github.com/prometheus/blackbox_exporter/blob/master/LICENSE) | 黑盒探测，监控端点可用性  |
{.stretch-last}


--------

## 指标导出器

| 名称                                                                        | 版本       | 许可证                                                                                   | 备注                   |
|---------------------------------------------------------------------------|----------|---------------------------------------------------------------------------------------|----------------------|
| [`pg_exporter`](https://github.com/Vonng/pg_exporter)                     | `1.1.0`  | [Apache-2.0](https://github.com/Vonng/pg_exporter/blob/master/LICENSE)                | 高级 Postgres 指标导出器    |
| [`pgbackrest_exporter`](https://github.com/woblerr/pgbackrest_exporter)   | `0.22.0` | [MIT](https://github.com/woblerr/pgbackrest_exporter/blob/master/LICENSE)             | 导出 pgbackrest 指标     |
| [`node_exporter`](https://github.com/prometheus/node_exporter)            | `1.10.2` | [Apache-2.0](https://github.com/prometheus/node_exporter/blob/master/LICENSE)         | 导出 Linux 节点指标        |
| [`keepalived_exporter`](https://github.com/mehdy/keepalived-exporter)     | `1.7.0`  | [GPL-3.0](https://github.com/mehdy/keepalived-exporter/blob/master/LICENSE)           | 导出 keepalived/VIP 指标 |
| [`nginx_exporter`](https://github.com/nginxinc/nginx-prometheus-exporter) | `1.5.1`  | [Apache-2.0](https://github.com/nginxinc/nginx-prometheus-exporter/blob/main/LICENSE) | 导出 nginx 指标          |
| [`zfs_exporter`](https://github.com/waitingsong/zfs_exporter/releases/)   | `3.8.1`  | [MIT](https://github.com/waitingsong/zfs_exporter/blob/main/LICENSE)                  | 导出 zfs 指标            |
| [`mysqld_exporter`](https://github.com/prometheus/mysqld_exporter)        | `0.18.0` | [Apache-2.0](https://github.com/prometheus/mysqld_exporter/blob/main/LICENSE)         | 导出 mysql 指标          |
| [`redis_exporter`](https://github.com/oliver006/redis_exporter)           | `1.80.1` | [MIT](https://github.com/oliver006/redis_exporter/blob/master/LICENSE)                | 导出 redis 指标          |
| [`kafka_exporter`](https://github.com/danielqsj/kafka_exporter)           | `1.9.0`  | [Apache-2.0](https://github.com/danielqsj/kafka_exporter/blob/master/LICENSE)         | 导出 kafka 指标          |
| [`mongodb_exporter`](https://github.com/percona/mongodb_exporter)         | `0.47.2` | [Apache-2.0](https://github.com/percona/mongodb_exporter/blob/main/LICENSE)           | 导出 mongodb 指标        |
| [`mtail`](https://github.com/google/mtail)                                | `3.0.8`  | [Apache-2.0](https://github.com/google/mtail/blob/main/LICENSE)                       | 分析日志并生成指标            |
| [`vector`](https://github.com/vectordotdev/vector/releases)               | `0.52.0` | [MPL-2.0](https://github.com/vectordotdev/vector/blob/master/LICENSE)                 | 多功能日志收集器             |
{.stretch-last}


--------

## 对象存储

| 名称                                                      |        版本        |                                       许可证                                       | 备注                       |
|---------------------------------------------------------|------------------|---------------------------------------------------------------------------------|--------------------------|
| [`minio`](https://github.com/minio/minio)               | `20251203120000` |          [AGPLv3](https://github.com/minio/minio/blob/master/LICENSE)           | 开源 S3 服务器，现在由 pgsty 维护构建 |
| [`mcli`](https://github.com/minio/mc)                   | `20250813083541` |            [AGPLv3](https://github.com/minio/mc/blob/master/LICENSE)            | 开源 S3 客户端                |
| [`rustfs`](https://github.com/rustfs/rustfs)            |   `1.0.0-a71`    |        [Apache-2.0](https://github.com/rustfs/rustfs/blob/main/LICENSE)         | 开源 MinIO，Alpha           |
| [`garage`](https://git.deuxfleurs.fr/Deuxfleurs/garage) |     `2.1.0`      | [AGPL-3.0](https://git.deuxfleurs.fr/Deuxfleurs/garage/src/branch/main/LICENSE) | 轻量级 S3                   |
| [`seaweedfs`](https://github.com/seaweedfs/seaweedfs)   |      `4.01`      |    [Apache-2.0](https://github.com/seaweedfs/seaweedfs/blob/master/LICENSE)     | 小文件 S3                   |
| [`rclone`](https://github.com/rclone/rclone/)           |     `1.72.1`     |           [MIT](https://github.com/rclone/rclone/blob/master/COPYING)           | S3 命令行工具                 |
| [`restic`](https://github.com/restic/restic)            |     `0.18.1`     |          [BSD-2](https://github.com/restic/restic/blob/master/LICENSE)          | 备份工具                     |
| [`juicefs`](https://github.com/juicedata/juicefs)       |     `1.3.1`      |      [Apache-2.0](https://github.com/juicedata/juicefs/blob/main/LICENSE)       | S3 上的文件系统                |
{.stretch-last}


--------

## 数据库

PostgreSQL 相关工具、数据库管理系统和其他实用程序

| 名称                                                          |    版本     | 许可证                                                                                  | 备注                             |
|-------------------------------------------------------------|-----------|--------------------------------------------------------------------------------------|--------------------------------|
| [`etcd`](https://github.com/etcd-io/etcd)                   |  `3.6.7`  | [Apache-2.0](https://github.com/etcd-io/etcd/blob/main/LICENSE)                      | 容错分布式协调服务                      |
| [`kafka`](https://github.com/apache/kafka)                  |  `4.0.0`  | [Apache-2.0](https://github.com/apache/kafka/blob/trunk/LICENSE)                     | 消息队列                           |
| [`duckdb`](https://github.com/duckdb/duckdb)                |  `1.4.3`  | [MIT](https://github.com/duckdb/duckdb/blob/main/LICENSE)                            | 嵌入式 OLAP                       |
| [`ferretdb`](https://github.com/FerretDB/FerretDB)          |  `2.7.0`  | [Apache-2.0](https://github.com/FerretDB/FerretDB/blob/main/LICENSE)                 | 基于 PG 的 MongoDB                |
| [`tigerbeetle`](https://github.com/tigerbeetle/tigerbeetle) | `0.16.65` | [Apache-2.0](https://github.com/tigerbeetle/tigerbeetle/blob/main/LICENSE)           | 金融 OLTP                        |
| [`IvorySQL`](https://github.com/IvorySQL/IvorySQL)          |   `5.1`   | [Apache-2.0](https://github.com/IvorySQL/IvorySQL/blob/IVORY_REL_5_STABLE/LICENSE)   | Oracle 兼容的 PG 18.1             |
{.stretch-last}


--------

## 工具

Pig 包管理器、PostgreSQL 工具和其他数据库相关实用程序

| 名称                                                                                      | 版本       | 许可证                                                                                     | 备注                              |
|-----------------------------------------------------------------------------------------|----------|-----------------------------------------------------------------------------------------|---------------------------------|
| [`pig`](https://github.com/pgsty/pig)                                                   | `0.9.0`  | [Apache-2.0](https://github.com/pgsty/pig/blob/main/LICENSE)                            | PG 包管理器                         |
| [`vip-manager`](https://github.com/cybertec-postgresql/vip-manager)                     | `4.0.0`  | [BSD-2](https://github.com/cybertec-postgresql/vip-manager/blob/master/LICENSE)         | 将 L2 VIP 绑定到 PG 主节点             |
| [`pgflo`](https://github.com/pgflo/pg_flo)                                              | `0.0.15` | [Apache-2.0](https://github.com/pgflo/pg_flo/blob/main/LICENSE)                         | 实时流式传输、转换和路由 PG 数据              |
| [`pgschema`](https://github.com/schemagood/pgschema)                                    | `1.4.2`  | [Apache-2.0](https://github.com/schemagood/pgschema/blob/main/LICENSE)                  | 执行 PG 模式迁移                      |
| [`pg_timetable`](https://github.com/cybertec-postgresql/pg_timetable)                   | `6.2.0`  | [PostgreSQL](https://github.com/cybertec-postgresql/pg_timetable/blob/master/LICENSE)   | PostgreSQL 高级调度                 |
| [`timescaledb-tools`](https://github.com/timescale/timescaledb-tune)                    | `0.18.1` | [Apache-2.0](https://github.com/timescale/timescaledb-tune/blob/main/LICENSE)           | 优化 timescaledb 参数               |
| [`timescaledb-event-streamer`](https://github.com/noctarius/timescaledb-event-streamer) | `0.20.0` | [Apache-2.0](https://github.com/noctarius/timescaledb-event-streamer/blob/main/LICENSE) | timescaledb 超表 CDC              |
| [`dblab`](https://github.com/danvergara/dblab)                                          | `0.34.2` | [MIT](https://github.com/danvergara/dblab/blob/main/LICENSE)                            | 多数据库命令行工具                       |
| [`sqlcmd`](https://github.com/microsoft/go-sqlcmd)                                      | `1.8.0`  | [MIT](https://github.com/microsoft/go-sqlcmd/blob/main/LICENSE)                         | MS SQL Server 数据库客户端            |
| [`pev2`](https://github.com/dalibo/pev2)                                                | `1.19.0` | [PostgreSQL](https://github.com/dalibo/pev2/blob/master/LICENSE.md)                     | PostgreSQL 执行计划可视化工具 2          |
| [`genai-toolbox`](https://github.com/googleapis/genai-toolbox)                          | `0.23.0` | [Apache-2.0](https://github.com/googleapis/genai-toolbox/blob/main/LICENSE)             | Google 数据库 MCP 服务器              |
| [`sealos`](https://github.com/labring/sealos)                                           | `5.0.1`  | [Apache-2.0](https://github.com/labring/sealos/blob/main/LICENSE)                       | 开箱即用的 Kubernetes 发行版            |
| [`vray`](https://github.com/v2fly/v2ray-core)                                           | `5.28.0` | [MIT](https://github.com/v2fly/v2ray-core/blob/master/LICENSE)                          | 构建代理以绕过网络限制                     |
| [`uv`](https://github.com/astral-sh/uv)                                                 | `0.9.18` | [MIT](https://github.com/astral-sh/uv/blob/main/LICENSE-MIT)                            | 新一代 Python 包管理器                 |
| [`ccm`](https://github.com/foreveryh/claude-code-switch)                                | `2.0.76` | [MIT](https://github.com/foreveryh/claude-code-switch/blob/main/LICENSE)                | Claude API 切换工具（以及 Claude Code） |
| [`asciinema`](https://github.com/asciinema/asciinema)                                   | `3.0.1`  | [GPL-3.0](https://github.com/asciinema/asciinema/blob/develop/LICENSE)                  | 终端会话记录，流式传输与播放器                 |
{.stretch-last}

