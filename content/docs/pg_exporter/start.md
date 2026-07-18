---
title: 快速上手
weight: 5610
icon: fas fa-rocket
description: 十分钟内启动 pg_exporter，并在 Prometheus 中看到 PostgreSQL 指标
categories: [教程]
---

本页是一条最短路径：安装 `pg_exporter`，连上一个 PostgreSQL 实例，确认指标产出，接入 Prometheus。

你需要准备的东西只有两样：一个可访问的 PostgreSQL 10-19+（或 pgBouncer 1.8+）实例，以及在其中创建用户的权限。更老的 PostgreSQL 9.1-9.6 实例请参阅 [兼容性说明](/docs/pg_exporter/install/#兼容性)。


--------

## 第 1 步：安装

Linux amd64 可以直接下载二进制（其他平台与 RPM/DEB/Docker 安装方式见 [安装指南](/docs/pg_exporter/install/)）：

```bash
VERSION=$(curl -fsSL https://api.github.com/repos/pgsty/pg_exporter/releases/latest | sed -n 's/.*"tag_name": "v\([^"]*\)".*/\1/p')
wget "https://github.com/pgsty/pg_exporter/releases/download/v${VERSION}/pg_exporter-${VERSION}.linux-amd64.tar.gz"
tar -xf "pg_exporter-${VERSION}.linux-amd64.tar.gz"
sudo install "pg_exporter-${VERSION}.linux-amd64/pg_exporter" /usr/bin/
sudo install "pg_exporter-${VERSION}.linux-amd64/pg_exporter.yml" /etc/pg_exporter.yml
```

装好后确认版本：

```bash
pg_exporter --version
# pg_exporter v1.4.0 (built with go1.26.5 on linux/amd64)
```


--------

## 第 2 步：创建监控用户

在目标 PostgreSQL 上创建一个专用监控用户。PostgreSQL 10+ 内置的 `pg_monitor` 角色已覆盖默认采集器所需的全部读取权限：

```sql
CREATE USER monitor WITH PASSWORD 'S3cret';
GRANT pg_monitor TO monitor;
```

如果你只是在本机以 `postgres` 等超级用户试用，可以跳过这一步。


--------

## 第 3 步：启动并验证

先用 `--dry-run` 确认配置能正确解析，再正式启动：

```bash
export PG_EXPORTER_URL='postgres://monitor:S3cret@localhost:5432/postgres'

pg_exporter --dry-run     # 打印解析后的采集器配置，随即退出
pg_exporter               # 正式启动，默认监听 :9630
```

如果完全不指定 URL，`pg_exporter` 会回退到本地优先的默认连接串 `postgresql:///?sslmode=disable`，适合与 PostgreSQL 同机部署的场景。完整的 URL 来源优先级（`--url` > `PG_EXPORTER_URL` > `PGURL` > `PG_EXPORTER_URL_FILE` > 默认值）见 [部署指南](/docs/pg_exporter/deploy/)。

另开一个终端拉取指标：

```bash
curl -s http://localhost:9630/metrics | grep -E '^pg_(up|version|in_recovery) '
```

你应当看到三个最核心的内置指标：

```prometheus
pg_up 1              # 能连上目标库为 1，否则为 0
pg_version 170000    # server_version_num 格式的版本号
pg_in_recovery 0     # 从库为 1，主库为 0
```

`pg_up` 为 `1` 说明链路已通，其余 600+ 指标（`pg_db_*`、`pg_table_*`、`pg_wal_*`……）都来自 `pg_exporter.yml` 中的声明式采集器定义。如果 `pg_up` 为 `0`，用 `pg_exporter --log.level=debug` 重启并观察连接错误。


--------

## 第 4 步：接入 Prometheus

在 `prometheus.yml` 中添加抓取目标：

```yaml
scrape_configs:
  - job_name: 'postgresql'
    scrape_interval: 15s
    static_configs:
      - targets: ['localhost:9630']
```

采集器自带按 `ttl` 的结果缓存（例如多数实时采集器 `ttl: 10`）：只要 TTL 小于抓取间隔，每轮抓取都能拿到新数据，同时避免高频抓取压垮数据库。这也是为什么不建议把 `scrape_interval` 设得比常用 TTL 更短。

到这里就完成了。Grafana 侧可以直接复用 [Pigsty](https://pigsty.cc) 的 PostgreSQL 仪表盘，或到 [在线演示](https://g.pgsty.com) 看实际效果。


--------

## 常见问题排查

| 症状 | 排查方法 |
|------|---------|
| `pg_up 0`，连接失败 | `pg_exporter --log.level=debug` 查看具体报错；确认 URL、`pg_hba.conf` 与网络可达性 |
| 部分指标缺失 | `curl localhost:9630/explain` 查看每个采集器的规划结果（版本门槛、标签、谓词是否命中） |
| 某个采集器持续报错 | `curl localhost:9630/stat` 查看各采集器的错误计数与耗时 |
| 抓取缓慢 | 在 `/stat` 中找出慢采集器，调大其 `ttl` 或在配置中 `skip: true` |
{.full-width}

`/stat`、`/explain`、`/reload` 属于管理端点，生产环境建议配合 `--web.config.file` 启用认证/TLS，或仅在内网开放，详见 [API 参考](/docs/pg_exporter/api/)。


--------

## 下一步

- 监控 **pgBouncer**、启用**自动发现**、配置 **systemd/Docker/Kubernetes** 生产部署：[部署指南](/docs/pg_exporter/deploy/)
- 理解与定制**采集器**（GAUGE/COUNTER/HISTOGRAM、TTL、标签、版本门槛）：[配置参考](/docs/pg_exporter/config/)
- **健康检查与主从流量路由**端点（`/up`、`/primary`、`/replica`）：[API 参考](/docs/pg_exporter/api/)
