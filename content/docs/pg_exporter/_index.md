---
title: "PG Exporter 1.4 中文文档"
linktitle: "pg_exporter 文档"
weight: 8400
icon: fas fa-chart-line
module: [PG_EXPORTER]
description: 高级 PostgreSQL 与 PgBouncer 监控指标导出器
---

为 Prometheus / Victoria 打造的极致 PostgreSQL 监控体验：超过 **600+** 监控指标、**声明式配置** 与 **动态规划** 能力。

[**快速上手**](/docs/pg_exporter/start) | [**GitHub**](https://github.com/pgsty/pg_exporter) | [**在线演示**](https://g.pgsty.com)


--------

## 功能特性

| 特性        | 描述                                                          |
|-----------|-------------------------------------------------------------|
| **全指标覆盖** | 600+ 指标覆盖 PostgreSQL（10-19+）与 pgBouncer（1.8-1.25+）的几乎全部统计视图  |
| **声明式采集** | 每个指标都来自 YAML 采集器定义——SQL 查询加执行条件，可自由增删改，无需改代码                 |
| **动态规划**  | 按目标的版本、主从角色、已装扩展与标签自动裁决每个采集器是否执行、执行哪个分支                      |
| **自动发现**  | 自动发现实例内的所有数据库并分别采集，指标以 `datname` 标签区分                        |
| **健康检查**  | `/up`、`/primary`、`/replica` 等端点可直接充当负载均衡器探针，实现主从流量路由         |
| **智能缓存**  | 采集器级 TTL 缓存把抓取频率与查询频率解耦，探针与抓取风暴不会穿透到数据库                      |
| **快照直方图** | `HISTOGRAM` 列类型将 SQL 快照聚合为经典 Prometheus 直方图分布               |
| **扩展感知**  | 原生支持 pg_stat_statements、pg_wait_sampling、citus、timescaledb  |
| **生产就绪**  | 在真实环境中经过 6 年以上、12K+ 核心的实战检验                                  |
{.full-width}


--------

## 版本信息

- 当前稳定版本：[`v1.4.0`](https://github.com/pgsty/pg_exporter/releases/tag/v1.4.0)
- 默认配置支持：PostgreSQL **10-19+**
- Legacy 配置支持：PostgreSQL **9.1-9.6**（使用 `legacy/` 配置包）
- PgBouncer 支持：**1.8-1.25+**

完整版本历史见 [发布注记](/docs/pg_exporter/release)。


--------

## 设计逻辑

`pg_exporter` 的核心设计取向是「本地优先 + 可声明 + 可演进」：

- 本地优先连接：未显式指定 URL 时默认使用 `postgresql:///?sslmode=disable`，适配同机部署场景
- 声明式采集：指标由 YAML 采集器定义驱动，行为可通过 `ttl`、`timeout`、`tags`、`fatal` 精细控制
- 动态规划：运行时依据版本、角色、扩展与标签自动选择合适的采集器分支
- 可持续运行：默认非阻塞启动，目标不可达时也可先启动 HTTP 端点，待数据库恢复后自动恢复采集
- 热重载能力：支持 `POST/GET /reload` 与 `SIGHUP` 信号重载（非 Windows 额外支持 `SIGUSR1`）
- 健康探针分离：健康端点基于后台探测缓存，避免每次探针请求都阻塞数据库
- 管理面可收敛：`/reload`、`/explain`、`/stat` 会暴露配置与运行态信息，生产环境建议结合 `--web.config.file` 启用认证/TLS，或仅在内网暴露


--------

## 快速安装

PG Exporter 提供多种 [**安装方式**](/docs/pg_exporter/install)，适配各种基础设施：

{{< tabpane persist="disabled" >}}
{{% tab header="安装" disabled=true /%}}

{{< tab header="Docker" lang="bash" >}}
docker run -d --name pg_exporter -p 9630:9630 -e PG_EXPORTER_URL="postgres://user:pass@host:5432/postgres" pgsty/pg_exporter:latest
{{< /tab >}}

{{< tab header="YUM" lang="bash" >}}
# 基于 RPM 的系统
sudo tee /etc/yum.repos.d/pigsty-infra.repo > /dev/null <<-'EOF'
[pigsty-infra]
name=Pigsty Infra for $basearch
baseurl=https://repo.pigsty.io/yum/infra/$basearch
enabled = 1
gpgcheck = 0
module_hotfixes=1
EOF

sudo yum makecache;
sudo yum install -y pg_exporter
{{< /tab >}}

{{< tab header="APT" lang="bash" >}}
sudo tee /etc/apt/sources.list.d/pigsty-infra.list > /dev/null <<EOF
deb [trusted=yes] https://repo.pigsty.io/apt/infra generic main
EOF

sudo apt update;
sudo apt install -y pg-exporter
{{< /tab >}}

{{< tab header="二进制" lang="bash" >}}
VERSION=$(curl -fsSL https://api.github.com/repos/pgsty/pg_exporter/releases/latest | sed -n 's/.*"tag_name": "v\([^"]*\)".*/\1/p')
wget "https://github.com/pgsty/pg_exporter/releases/download/v${VERSION}/pg_exporter-${VERSION}.linux-amd64.tar.gz"
tar -xf "pg_exporter-${VERSION}.linux-amd64.tar.gz"
sudo install "pg_exporter-${VERSION}.linux-amd64/pg_exporter" /usr/bin/
sudo install "pg_exporter-${VERSION}.linux-amd64/pg_exporter.yml" /etc/pg_exporter.yml
{{< /tab >}}

{{< tab header="源码" lang="bash" >}}
# 从源码构建
git clone https://github.com/pgsty/pg_exporter.git
cd pg_exporter
make build
{{< /tab >}}

{{< /tabpane >}}


--------

## 快速开始

几分钟内即可启动 PG Exporter，参见 [快速上手](/docs/pg_exporter/start)：

```bash
# 最小可用启动（本地优先默认 URL）
pg_exporter

# 或显式指定目标
PG_EXPORTER_URL='postgres://user:pass@localhost:5432/postgres' pg_exporter

# 访问指标
curl http://localhost:9630/metrics

# 在线重载配置（推荐 POST）
curl -X POST http://localhost:9630/reload
```


--------

## 在线演示

通过在线演示环境体验 PG Exporter 的实际效果：**https://g.pgsty.com**

演示展示了由 PG Exporter 监控的真实 PostgreSQL 集群，包含：

- 使用 Grafana 的实时指标可视化
- 多个 PostgreSQL 版本和配置
- 扩展特定的指标和监控
- 由 [Pigsty](https://pigsty.cc) 驱动的完整可观测性堆栈


--------

## 社区与支持

- [**GitHub**](https://github.com/pgsty/pg_exporter)：源代码、问题反馈与贡献
- [**讨论区**](https://github.com/pgsty/pg_exporter/discussions)：提问与分享经验
- [**Pigsty**](https://pigsty.cc)：包含 PG Exporter 的完整 PostgreSQL 发行版


--------

## 开源协议

PG Exporter 是基于 [Apache License 2.0](https://github.com/pgsty/pg_exporter/blob/main/LICENSE) 许可的开源软件。

Copyright 2018-2026 © [冯若航](https://vonng.com/en) / [rh@vonng.com](mailto:rh@vonng.com)
