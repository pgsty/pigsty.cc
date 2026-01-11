---
title: PG Exporter
weight: 5600
icon: fas fa-chart-line
description: 高级 PostgreSQL 与 PgBouncer 监控指标导出器
---

为 Prometheus / Victoria 打造的极致 PostgreSQL 监控体验：超过 **600+** 监控指标、**声明式配置** 与 **动态规划** 能力。

[**快速上手**](start) | [**GitHub**](https://github.com/pgsty/pg_exporter) | [**在线演示**](https://g.pgsty.com)


--------

## 功能特性

| 特性        | 描述                                                           |
|-----------|--------------------------------------------------------------|
| **全指标覆盖** | 监控 PostgreSQL（10-18+）与 pgBouncer（1.8-1.24+），全指标覆盖            |
| **声明式配置** | 通过 YAML 配置文件定义自定义指标，精细控制超时、缓存和跳过条件                           |
| **采集器定制** | 使用声明式 YAML 配置定义自己的指标，支持动态查询规划                                |
| **自动发现**  | 自动发现并监控 PostgreSQL 实例中的多个数据库                                 |
| **动态规划**  | 根据 PostgreSQL 版本、扩展和服务器特性自动调整指标采集策略                          |
| **生产就绪**  | 在真实环境中经过 6 年以上、12K+ 核心的实战检验，具备企业级可靠性                         |
| **健康检查**  | 提供全面的 HTTP 端点用于服务健康检查和流量路由，支持主从检测                            |
| **智能缓存**  | 内置缓存机制，可配置 TTL，减少数据库负载并提升性能                                  |
| **扩展感知**  | 原生支持 pg_stat_statements、pg_wait_sampling, citus, timesacledb |
{.full-width}


--------

## 快速安装

PG Exporter 提供多种 [**安装方式**](/docs/pig/install)，适配各种基础设施：

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
wget https://github.com/pgsty/pg_exporter/releases/download/v1.1.1/pg_exporter-1.1.1.linux-amd64.tar.gz
tar -xf pg_exporter-1.1.1.linux-amd64.tar.gz
sudo install pg_exporter-1.1.1.linux-amd64/pg_exporter /usr/bin/
sudo install pg_exporter-1.1.1.linux-amd64/pg_exporter.yml /etc/pg_exporter.yml
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

几分钟内即可启动 PG Exporter，参见 [快速上手](start)：

```bash
# 使用 PostgreSQL 连接 URL 运行
PG_EXPORTER_URL='postgres://user:pass@localhost:5432/postgres' pg_exporter

# 访问指标
curl http://localhost:9630/metrics
```


--------

## 文档目录

| 文档 | 描述 |
|------|------|
| [**快速上手**](start) | 快速开始指南与基础概念 |
| [**安装指南**](install) | 各平台的安装说明 |
| [**配置参考**](config) | 配置参考与采集器定义 |
| [**API 参考**](api) | HTTP API 端点参考 |
| [**部署指南**](deploy) | 生产部署最佳实践 |
| [**发布说明**](release) | 版本发布历史 |
{.full-width}


--------

## 在线演示

通过在线演示环境体验 PG Exporter 的实际效果：**https://g.pgsty.com**

演示展示了由 PG Exporter 监控的真实 PostgreSQL 集群，包含：

- 使用 Grafana 的实时指标可视化
- 多个 PostgreSQL 版本和配置
- 扩展特定的指标和监控
- 由 [Pigsty](https://pgsty.com) 驱动的完整可观测性堆栈


--------

## 社区与支持

- [**GitHub**](https://github.com/pgsty/pg_exporter)：源代码、问题反馈与贡献
- [**讨论区**](https://github.com/pgsty/pg_exporter/discussions)：提问与分享经验
- [**Pigsty**](https://pgsty.com)：包含 PG Exporter 的完整 PostgreSQL 发行版


--------

## 开源协议

PG Exporter 是基于 [Apache License 2.0](https://github.com/pgsty/pg_exporter/blob/main/LICENSE) 许可的开源软件。

Copyright 2018-2025 © [冯若航](https://vonng.com/en) / [rh@vonng.com](mailto:rh@vonng.com)
