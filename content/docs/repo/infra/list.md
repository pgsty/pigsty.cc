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
| [`grafana`](https://github.com/grafana/grafana/)                                         | `13.0.1` | [AGPLv3](https://github.com/grafana/grafana/blob/main/LICENSE)                         | 开源可观测性与数据可视化平台       |
| [`loki`](https://github.com/grafana/loki)                                                | `3.6.7`  | [AGPLv3](https://github.com/grafana/loki/blob/main/LICENSE)                            | 日志聚合系统（obsolete，冻结）  |
| [`promtail`](https://github.com/grafana/loki/releases/tag/v3.6.7)                        | `3.6.7`  | [AGPLv3](https://github.com/grafana/loki/blob/main/LICENSE)                            | Loki 日志采集代理（obsolete，冻结） |
| [`logcli`](https://github.com/grafana/loki/releases/tag/v3.6.7)                          | `3.6.7`  | [AGPLv3](https://github.com/grafana/loki/blob/main/LICENSE)                            | Loki 日志查询命令行客户端（obsolete，冻结） |
| [`grafana-infinity-ds`](https://github.com/grafana/grafana-infinity-datasource/)         | `3.8.0`  | [Apache-2.0](https://github.com/grafana/grafana-infinity-datasource/blob/main/LICENSE) | 支持 JSON/CSV/XML 等数据源 |
| [`grafana-plugins`](https://github.com/pgsty/infra-pkg/tree/main/noarch/grafana-plugins) | `13.0.0` | [Apache-2.0](https://github.com/pgsty/infra-pkg/blob/main/LICENSE)                     | Pigsty 打包的额外面板插件（noarch） |
{.stretch-last}


--------

## Victoria 技术栈

| 名称                                                                                                      | 版本        | 许可证                                                                                           | 备注                          |
|---------------------------------------------------------------------------------------------------------|-----------|-----------------------------------------------------------------------------------------------|-----------------------------|
| [`victoria-metrics`](https://github.com/VictoriaMetrics/VictoriaMetrics)                                | `1.142.0` | [Apache-2.0](https://github.com/VictoriaMetrics/VictoriaMetrics/blob/master/LICENSE)          | 高性能时序数据库，替代 Prometheus      |
| [`victoria-logs`](https://github.com/VictoriaMetrics/VictoriaMetrics)                                   | `1.50.0`  | [Apache-2.0](https://github.com/VictoriaMetrics/VictoriaMetrics/blob/master/LICENSE)          | 高性能日志存储与查询引擎                |
| [`victoria-traces`](https://github.com/VictoriaMetrics/VictoriaMetrics)                                 | `0.8.2`   | [Apache-2.0](https://github.com/VictoriaMetrics/VictoriaMetrics/blob/master/LICENSE)          | 分布式链路追踪后端                   |
| [`victoria-metrics-cluster`](https://github.com/VictoriaMetrics/VictoriaMetrics)                        | `1.142.0` | [Apache-2.0](https://github.com/VictoriaMetrics/VictoriaMetrics/blob/master/LICENSE)          | VictoriaMetrics 分布式集群版      |
| [`vmutils`](https://github.com/VictoriaMetrics/VictoriaMetrics)                                         | `1.142.0` | [Apache-2.0](https://github.com/VictoriaMetrics/VictoriaMetrics/blob/master/LICENSE)          | VictoriaMetrics 配套命令行工具     |
| [`vlogscli`](https://github.com/VictoriaMetrics/VictoriaMetrics)                                        | `1.50.0`  | [Apache-2.0](https://github.com/VictoriaMetrics/VictoriaMetrics/blob/master/LICENSE)          | VictoriaLogs 交互式查询客户端       |
| [`vlagent`](https://github.com/VictoriaMetrics/VictoriaMetrics)                                         | `1.50.0`  | [Apache-2.0](https://github.com/VictoriaMetrics/VictoriaMetrics/blob/master/LICENSE)          | VictoriaLogs 日志采集代理         |
| [`grafana-victorialogs-ds`](https://github.com/VictoriaMetrics/victorialogs-datasource/releases/)       | `0.26.3`  | [Apache-2.0](https://github.com/VictoriaMetrics/victorialogs-datasource/blob/main/LICENSE)    | VictoriaLogs Grafana 数据源    |
| [`grafana-victoriametrics-ds`](https://github.com/VictoriaMetrics/victoriametrics-datasource/releases/) | `0.24.0`  | [Apache-2.0](https://github.com/VictoriaMetrics/victoriametrics-datasource/blob/main/LICENSE) | VictoriaMetrics Grafana 数据源 |
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

| 名称                                                                     | 版本       | 许可证                                                                               | 备注            |
|------------------------------------------------------------------------|----------|-----------------------------------------------------------------------------------|---------------|
| [`prometheus`](https://github.com/prometheus/prometheus)               | `3.11.3` | [Apache-2.0](https://github.com/prometheus/prometheus/blob/main/LICENSE)          | 云原生监控系统与时序数据库 |
| [`pushgateway`](https://github.com/prometheus/pushgateway)             | `1.11.2` | [Apache-2.0](https://github.com/prometheus/pushgateway/blob/master/LICENSE)       | 短生命周期任务指标推送网关 |
| [`alertmanager`](https://github.com/prometheus/alertmanager)           | `0.32.1` | [Apache-2.0](https://github.com/prometheus/alertmanager/blob/main/LICENSE)        | 告警管理与通知分发     |
| [`blackbox_exporter`](https://github.com/prometheus/blackbox_exporter) | `0.28.0` | [Apache-2.0](https://github.com/prometheus/blackbox_exporter/blob/master/LICENSE) | 黑盒探测，监控端点可用性  |
{.stretch-last}


--------

## 指标导出器

| 名称                                                                        | 版本       | 许可证                                                                                   | 备注                   |
|---------------------------------------------------------------------------|----------|---------------------------------------------------------------------------------------|----------------------|
| [`pg_exporter`](https://github.com/pgsty/pg_exporter)                     | `1.2.2`  | [Apache-2.0](https://github.com/pgsty/pg_exporter/blob/master/LICENSE)                | 高级 Postgres 指标导出器    |
| [`pgbackrest_exporter`](https://github.com/woblerr/pgbackrest_exporter)   | `0.23.0` | [MIT](https://github.com/woblerr/pgbackrest_exporter/blob/master/LICENSE)             | 导出 pgbackrest 指标     |
| [`node_exporter`](https://github.com/prometheus/node_exporter)            | `1.11.1` | [Apache-2.0](https://github.com/prometheus/node_exporter/blob/master/LICENSE)         | 导出 Linux 节点指标        |
| [`keepalived_exporter`](https://github.com/mehdy/keepalived-exporter)     | `1.7.1`  | [GPL-3.0](https://github.com/mehdy/keepalived-exporter/blob/master/LICENSE)           | 导出 keepalived/VIP 指标 |
| [`nginx_exporter`](https://github.com/nginxinc/nginx-prometheus-exporter) | `1.5.1`  | [Apache-2.0](https://github.com/nginxinc/nginx-prometheus-exporter/blob/main/LICENSE) | 导出 nginx 指标          |
| [`zfs_exporter`](https://github.com/waitingsong/zfs_exporter/releases/)   | `3.8.1`  | [MIT](https://github.com/waitingsong/zfs_exporter/blob/main/LICENSE)                  | 导出 zfs 指标            |
| [`mysqld_exporter`](https://github.com/prometheus/mysqld_exporter)        | `0.19.0` | [Apache-2.0](https://github.com/prometheus/mysqld_exporter/blob/main/LICENSE)         | 导出 mysql 指标          |
| [`redis_exporter`](https://github.com/oliver006/redis_exporter)           | `1.82.0` | [MIT](https://github.com/oliver006/redis_exporter/blob/master/LICENSE)                | 导出 redis 指标          |
| [`kafka_exporter`](https://github.com/danielqsj/kafka_exporter)           | `1.9.0`  | [Apache-2.0](https://github.com/danielqsj/kafka_exporter/blob/master/LICENSE)         | 导出 kafka 指标          |
| [`mongodb_exporter`](https://github.com/percona/mongodb_exporter)         | `0.50.0` | [Apache-2.0](https://github.com/percona/mongodb_exporter/blob/main/LICENSE)           | 导出 mongodb 指标        |
| [`mtail`](https://github.com/google/mtail)                                | `3.0.8`  | [Apache-2.0](https://github.com/google/mtail/blob/main/LICENSE)                       | 分析日志并生成指标            |
| [`vector`](https://github.com/vectordotdev/vector/releases)               | `0.55.0` | [MPL-2.0](https://github.com/vectordotdev/vector/blob/master/LICENSE)                 | 多功能日志收集器             |
{.stretch-last}


--------

## 对象存储

| 名称                                                      | 版本               | 许可证                                                                             | 备注                       |
|---------------------------------------------------------|------------------|---------------------------------------------------------------------------------|--------------------------|
| [`minio`](https://github.com/pgsty/minio)               | `20260417000000` | [AGPLv3](https://github.com/minio/minio/blob/master/LICENSE)                    | 开源 S3 服务器，现在由 pgsty 维护构建 |
| [`mcli`](https://github.com/pgsty/mc)                   | `20260417000000` | [AGPLv3](https://github.com/pgsty/mc/blob/main/LICENSE)                         | 开源 S3 客户端，现在由 pgsty 维护构建 |
| [`rustfs`](https://github.com/rustfs/rustfs)            | `1.0.0-beta.1`       | [Apache-2.0](https://github.com/rustfs/rustfs/blob/main/LICENSE)                | 开源 MinIO，Beta            |
| [`garage`](https://git.deuxfleurs.fr/Deuxfleurs/garage) | `2.3.0`          | [AGPL-3.0](https://git.deuxfleurs.fr/Deuxfleurs/garage/src/branch/main/LICENSE) | 轻量级 S3                   |
| [`seaweedfs`](https://github.com/seaweedfs/seaweedfs)   | `4.22`           | [Apache-2.0](https://github.com/seaweedfs/seaweedfs/blob/master/LICENSE)        | 小文件 S3                   |
| [`rclone`](https://github.com/rclone/rclone/)           | `1.73.5`         | [MIT](https://github.com/rclone/rclone/blob/master/COPYING)                     | S3 命令行工具                 |
| [`restic`](https://github.com/restic/restic)            | `0.18.1`         | [BSD-2](https://github.com/restic/restic/blob/master/LICENSE)                   | 备份工具                     |
| [`juicefs`](https://github.com/juicedata/juicefs)       | `1.3.1`          | [Apache-2.0](https://github.com/juicedata/juicefs/blob/main/LICENSE)            | S3 上的文件系统                |
{.stretch-last}

{{% alert title="minio 现在由 pgsty 维护分支" color="info" %}}
[`minio/minio`](https://github.com/minio/minio) 已经不再维护，Pigsty 目前维护了自己的 MinIO 分支 —— [`pgsty/minio`](https://github.com/pgsty/minio) 与 [`pgsty/mc`](https://github.com/pgsty/mc)。
`minio` 与 `mcli` 现在均使用 pgsty 维护的最新构建。

{{% /alert %}}


--------

## 数据库

PostgreSQL 相关工具、数据库管理系统和其他实用程序

| 名称                                                          | 版本       | 许可证                                                                                | 备注                          |
|-------------------------------------------------------------|----------|------------------------------------------------------------------------------------|-----------------------------|
| [`etcd`](https://github.com/etcd-io/etcd)                   | `3.6.10` | [Apache-2.0](https://github.com/etcd-io/etcd/blob/main/LICENSE)                    | 容错分布式协调服务                  |
| [`kafka`](https://github.com/apache/kafka)                  | `4.2.0`  | [Apache-2.0](https://github.com/apache/kafka/blob/trunk/LICENSE)                   | 消息队列                        |
| [`duckdb`](https://github.com/duckdb/duckdb)                | `1.5.2`  | [MIT](https://github.com/duckdb/duckdb/blob/main/LICENSE)                          | 嵌入式 OLAP                    |
| [`ferretdb`](https://github.com/FerretDB/FerretDB)          | `2.7.0`  | [Apache-2.0](https://github.com/FerretDB/FerretDB/blob/main/LICENSE)               | 基于 PG 的 MongoDB             |
| [`tigerbeetle`](https://github.com/tigerbeetle/tigerbeetle) | `0.17.2` | [Apache-2.0](https://github.com/tigerbeetle/tigerbeetle/blob/main/LICENSE)         | 金融 OLTP                     |
| [`ivorysql`](https://github.com/IvorySQL/IvorySQL)          | `5.3`    | [Apache-2.0](https://github.com/IvorySQL/IvorySQL/blob/IVORY_REL_5_STABLE/LICENSE) | Oracle 兼容的 PG 18.1          |
{.stretch-last}


--------

## 工具

Pig 包管理器、PostgreSQL 工具和其他数据库相关实用程序

| 名称                                                                                      | 版本         | 许可证                                                                                     | 备注                            |
|-----------------------------------------------------------------------------------------|------------|-----------------------------------------------------------------------------------------|-------------------------------|
| [`pig`](https://github.com/pgsty/pig)                                                   | `1.4.1`    | [Apache-2.0](https://github.com/pgsty/pig/blob/main/LICENSE)                            | PG 包管理器                       |
| [`vip-manager`](https://github.com/cybertec-postgresql/vip-manager)                     | `4.2.0`    | [BSD-2](https://github.com/cybertec-postgresql/vip-manager/blob/master/LICENSE)         | 将 L2 VIP 绑定到 PG 主节点           |
| [`pgschema`](https://github.com/pgplex/pgschema)                                        | `1.9.0`    | [Apache-2.0](https://github.com/pgplex/pgschema/blob/main/LICENSE)                      | Terraform 风格的声明式 PG 模式迁移 CLI  |
| [`pgstream`](https://github.com/xataio/pgstream)                                        | `1.0.1`    | [Apache-2.0](https://github.com/xataio/pgstream/blob/main/LICENSE)                      | PostgreSQL 复制与 DDL 变更同步       |
| [`pg_timetable`](https://github.com/cybertec-postgresql/pg_timetable)                   | `6.3.0`    | [PostgreSQL](https://github.com/cybertec-postgresql/pg_timetable/blob/master/LICENSE)   | PostgreSQL 高级调度               |
| [`timescaledb-tools`](https://github.com/timescale/timescaledb-tune)                    | `0.19.0`   | [Apache-2.0](https://github.com/timescale/timescaledb-tune/blob/main/LICENSE)           | 优化 timescaledb 参数             |
| [`timescaledb-event-streamer`](https://github.com/noctarius/timescaledb-event-streamer) | `0.20.0`   | [Apache-2.0](https://github.com/noctarius/timescaledb-event-streamer/blob/main/LICENSE) | timescaledb 超表 CDC            |
| [`tigerfs`](https://github.com/timescale/tigerfs)                                       | `0.6.0`    | [MIT](https://github.com/timescale/tigerfs/blob/main/LICENSE)                           | 将 PostgreSQL 挂载为文件系统          |
| [`dblab`](https://github.com/danvergara/dblab)                                          | `0.38.0`   | [MIT](https://github.com/danvergara/dblab/blob/main/LICENSE)                            | 多数据库命令行工具                     |
| [`rainfrog`](https://github.com/achristmascarl/rainfrog)                                | `0.3.18`   | [MIT](https://github.com/achristmascarl/rainfrog/blob/main/LICENSE)                     | Postgres 终端数据库管理工具            |
| [`sql-studio`](https://github.com/frectonz/sql-studio)                                  | `0.1.51`   | [MIT](https://github.com/frectonz/sql-studio/blob/main/LICENSE)                         | 终端 SQL 数据库浏览器                 |
| [`sqlcmd`](https://github.com/microsoft/go-sqlcmd)                                      | `1.10.0`   | [MIT](https://github.com/microsoft/go-sqlcmd/blob/main/LICENSE)                         | MS SQL Server 数据库客户端          |
| [`pev2`](https://github.com/dalibo/pev2)                                                | `1.21.0`   | [PostgreSQL](https://github.com/dalibo/pev2/blob/master/LICENSE.md)                     | PostgreSQL 执行计划可视化工具 2        |
| [`sealos`](https://github.com/labring/sealos)                                           | `5.1.1`    | [Apache-2.0](https://github.com/labring/sealos/blob/main/LICENSE)                       | 开箱即用的 Kubernetes 发行版          |
| [`vray`](https://github.com/v2fly/v2ray-core)                                           | `5.48.0`   | [MIT](https://github.com/v2fly/v2ray-core/blob/master/LICENSE)                          | 构建代理以绕过网络限制                   |
| [`xray`](https://github.com/XTLS/Xray-core)                                             | `26.3.27`  | [MPL-2.0](https://github.com/XTLS/Xray-core/blob/main/LICENSE)                          | 新一代代理核心，支持更强路由与传输协议           |
| [`gost`](https://github.com/ginuerzh/gost)                                              | `2.12.0`   | [MIT](https://github.com/ginuerzh/gost/blob/master/LICENSE)                             | Go 编写的通用隧道与代理工具               |
| [`sabiql`](https://github.com/riii111/sabiql)                                           | `1.11.1`   | [MIT](https://github.com/riii111/sabiql/blob/main/LICENSE)                              | 现代化 SQL 客户端（PostgreSQL/MySQL） |
| [`postgrest`](https://github.com/PostgREST/postgrest)                                   | `14.10`    | [MIT](https://github.com/PostgREST/postgrest/blob/main/LICENSE)                         | PostgreSQL RESTful API 服务器    |
| [`npgsqlrest`](https://github.com/vb-consulting/NpgsqlRest)                             | `3.12.0`   | [MIT](https://github.com/vb-consulting/NpgsqlRest/blob/master/LICENSE.md)               | .NET PostgreSQL REST API 生成器  |
| [`caddy`](https://github.com/caddyserver/caddy)                                         | `2.11.2`   | [Apache-2.0](https://github.com/caddyserver/caddy/blob/master/LICENSE)                  | 自动 HTTPS 的 Web 服务器            |
| [`hugo`](https://github.com/gohugoio/hugo)                                              | `0.161.1`  | [Apache-2.0](https://github.com/gohugoio/hugo/blob/master/LICENSE)                      | 快速静态网站生成器                     |
| [`cloudflared`](https://github.com/cloudflare/cloudflared)                              | `2026.2.0` | [Apache-2.0](https://github.com/cloudflare/cloudflared/blob/master/LICENSE)             | Cloudflare 隧道客户端              |
| [`headscale`](https://github.com/juanfont/headscale)                                    | `0.28.0`   | [BSD-3](https://github.com/juanfont/headscale/blob/main/LICENSE)                        | 自托管 Tailscale 控制服务器           |
| [`stalwart`](https://github.com/stalwartlabs/stalwart)                                  | `0.16.2`   | [AGPLv3](https://github.com/stalwartlabs/stalwart/blob/main/LICENSE)                    | 新一代全功能邮件服务器                   |
| [`maddy`](https://github.com/foxcpp/maddy)                                              | `0.9.3`    | [GPL-3.0](https://github.com/foxcpp/maddy/blob/master/LICENSE)                          | 轻量化邮件服务器                      |
{.stretch-last}


--------

## AI

AI Agent，MCP 工具箱，编码 IDE，Python/Go/Node 工具……

| 名称                                                             | 版本        | 许可证                                                                         | 备注                             |
|----------------------------------------------------------------|-----------|-----------------------------------------------------------------------------|--------------------------------|
| [`claude`](https://github.com/anthropics/claude-code)          | `2.1.123` | [Proprietary](https://www.anthropic.com/legal/terms)                        | Claude Code - Anthropic 代理编程工具 |
| [`opencode`](https://github.com/anomalyco/opencode)            | `1.14.30` | [MIT](https://github.com/anomalyco/opencode/blob/main/LICENSE)              | 终端 AI 编程助手                     |
| [`codex`](https://github.com/openai/codex)                     | `0.125.0` | [Apache-2.0](https://github.com/openai/codex/blob/main/LICENSE)             | OpenAI 代理编程工具                  |
| [`crush`](https://github.com/charmbracelet/crush)              | `0.64.0`  | [FSL-1.1-MIT](https://github.com/charmbracelet/crush/blob/main/LICENSE.md)  | Charm 出品的终端 AI 代理编程助手          |
| [`agentsview`](https://github.com/wesm/agentsview)             | `0.26.0`  | [MIT](https://github.com/wesm/agentsview/blob/main/LICENSE)                 | 在终端中浏览与回放 AI 编码代理轨迹            |
| [`code`](https://code.visualstudio.com/)                       | `1.118.1` | [MIT](https://github.com/microsoft/vscode/blob/main/LICENSE.txt)            | Visual Studio Code 编辑器         |
| [`code-server`](https://github.com/coder/code-server)          | `4.117.0` | [MIT](https://github.com/coder/code-server/blob/main/LICENSE)               | 浏览器中的 VS Code                  |
| [`genai-toolbox`](https://github.com/googleapis/mcp-toolbox)   | `1.1.0`   | [Apache-2.0](https://github.com/googleapis/mcp-toolbox/blob/main/LICENSE)   | Google 数据库 MCP 服务器             |
| [`uv`](https://github.com/astral-sh/uv)                        | `0.11.8`  | [MIT](https://github.com/astral-sh/uv/blob/main/LICENSE-MIT)                | 新一代 Python 包管理器                |
| [`golang`](https://golang.org/)                                | `1.26.2`  | [BSD-3](https://github.com/golang/go/blob/master/LICENSE)                   | Go 编译器                         |
| [`nodejs`](https://nodejs.org/)                                | `24.15.0` | [MIT/Mixed](https://github.com/nodejs/node/blob/main/LICENSE)               | 在服务端运行 Javascript              |
{.stretch-last}
