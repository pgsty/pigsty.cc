---
title: PG Exporter
weight: 5600
icon: fas fa-chart-line
description: 高级 PostgreSQL 与 PgBouncer 监控指标导出器
---

为 Prometheus / Victoria 打造的极致 PostgreSQL 监控体验：超过 **600+** 监控指标、**声明式配置** 与 **动态规划** 能力。

[**快速上手**](/docs/pg_exporter/start) | [**GitHub**](https://github.com/pgsty/pg_exporter) | [**在线演示**](https://g.pgsty.com)


--------

## 功能特性

| 特性        | 描述                                                         |
|-----------|------------------------------------------------------------|
| **全指标覆盖** | 监控 PostgreSQL（10-18+）与 pgBouncer（1.8-1.25+），全指标覆盖          |
| **声明式配置** | 通过 YAML 配置文件定义自定义指标，精细控制超时、缓存和跳过条件                         |
| **采集器定制** | 使用声明式 YAML 配置定义自己的指标，支持动态查询规划                              |
| **自动发现**  | 自动发现并监控 PostgreSQL 实例中的多个数据库                               |
| **动态规划**  | 根据 PostgreSQL 版本、扩展和服务器特性自动调整指标采集策略                        |
| **生产就绪**  | 在真实环境中经过 6 年以上、12K+ 核心的实战检验，具备企业级可靠性                       |
| **健康检查**  | 提供全面的 HTTP 端点用于服务健康检查和流量路由，支持主从检测                          |
| **智能缓存**  | 内置缓存机制，可配置 TTL，减少数据库负载并提升性能                                |
| **扩展感知**  | 原生支持 pg_stat_statements、pg_wait_sampling、citus、timescaledb |
{.full-width}


--------

## 版本信息

- 当前稳定版本：[`v1.2.0`](https://github.com/pgsty/pg_exporter/releases/tag/v1.2.0)
- 默认配置支持：PostgreSQL **10-18+**
- Legacy 配置支持：PostgreSQL **9.1-9.6**（使用 `legacy/` 配置包）
- PgBouncer 支持：**1.8-1.25+**

完整版本历史见 [发布注记](/docs/pg_exporter/release)。


--------

## 设计逻辑

`pg_exporter` 的核心设计取向是「本地优先 + 可声明 + 可演进」：

- 本地优先连接：未显式指定 URL 时默认使用 `postgresql:///?sslmode=disable`，适配同机部署场景
- 声明式采集：指标由 YAML 采集器定义驱动，行为可通过 `ttl`、`timeout`、`tags`、`fatal` 精细控制
- 动态规划：运行时依据版本、角色、扩展与标签自动选择采集器分支
- 可持续运行：默认非阻塞启动，目标不可达时也可先启动 HTTP 端点，待数据库恢复后自动恢复采集
- 热重载能力：支持 `POST/GET /reload` 与 `SIGHUP` 信号重载（非 Windows 额外支持 `SIGUSR1`）
- 健康探针分离：健康端点基于后台探测缓存，避免每次探针请求都阻塞数据库


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
wget https://github.com/pgsty/pg_exporter/releases/download/v1.2.0/pg_exporter-1.2.0.linux-amd64.tar.gz
tar -xf pg_exporter-1.2.0.linux-amd64.tar.gz
sudo install pg_exporter-1.2.0.linux-amd64/pg_exporter /usr/bin/
sudo install pg_exporter-1.2.0.linux-amd64/pg_exporter.yml /etc/pg_exporter.yml
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
