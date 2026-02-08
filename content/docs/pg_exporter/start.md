---
title: 快速上手
weight: 5610
icon: fas fa-rocket
description: 几分钟内启动并运行 PG Exporter
categories: [教程]
---

PG Exporter 是一款先进的 PostgreSQL 与 pgBouncer 指标导出器，专为 Prometheus 设计。本指南将帮助您快速启动并运行。


--------

## 前置条件

在开始之前，请确保您具备：

- PostgreSQL 10+ 或 pgBouncer 1.8+ 实例用于监控
- 具有适当监控权限的用户账户
- Prometheus 兼容系统（用于指标抓取）
- 对 PostgreSQL 连接字符串的基本了解


--------

## 快速开始

最快速地启动 PG Exporter：

```bash
# 下载并安装最新版本
curl -L https://github.com/pgsty/pg_exporter/releases/latest/download/pg_exporter-$(uname -s)-$(uname -m).tar.gz | tar xz
sudo install pg_exporter /usr/bin/

# 使用 PostgreSQL 连接 URL 运行
PG_EXPORTER_URL='postgres://user:pass@localhost:5432/postgres' pg_exporter

# 验证指标是否可用
curl http://localhost:9630/metrics
```


--------

## 基本概念

### 连接字符串

PG Exporter 使用标准的 PostgreSQL 连接 URL：

```
postgres://[user][:password]@[host][:port]/[database][?param=value]
```

示例：
- 本地 PostgreSQL：`postgres:///postgres`
- 带认证的远程连接：`postgres://monitor:password@db.example.com:5432/postgres`
- 使用 SSL：`postgres://user:pass@host/db?sslmode=require`
- pgBouncer：`postgres://pgbouncer:password@localhost:6432/pgbouncer`

### 内置指标

PG Exporter 开箱即用提供 4 个核心内置指标：

| 指标 | 类型 | 描述 |
|------|------|------|
| `pg_up` | Gauge | 如果导出器能够连接到 PostgreSQL 则为 1，否则为 0 |
| `pg_version` | Gauge | PostgreSQL 服务器版本号 |
| `pg_in_recovery` | Gauge | 如果服务器处于恢复模式（从库）则为 1，主库则为 0 |
| `pg_exporter_build_info` | Gauge | 导出器版本和构建信息 |
{.full-width}

### 配置文件

所有其他指标（600+）都在 `pg_exporter.yml` 配置文件中定义。默认情况下，PG Exporter 会按以下顺序查找此文件：

1. 通过 `--config` 标志指定的路径
2. `PG_EXPORTER_CONFIG` 环境变量中的路径
3. 当前目录（`./pg_exporter.yml`）
4. 系统配置（`/etc/pg_exporter.yml` 或 `/etc/pg_exporter/`）


--------

## 首次监控设置

### 步骤 1：创建监控用户

创建一个专用的 PostgreSQL 用户用于监控：

```sql
-- 创建监控用户
CREATE USER pg_monitor WITH PASSWORD 'secure_password';

-- 授予必要权限
GRANT pg_monitor TO pg_monitor;
GRANT CONNECT ON DATABASE postgres TO pg_monitor;

-- 对于 PostgreSQL 10+，pg_monitor 角色提供对监控视图的读取权限
-- 对于更早版本，您可能需要额外的授权
```

### 步骤 2：测试连接

验证导出器能够连接到您的数据库：

```bash
# 设置连接 URL
export PG_EXPORTER_URL='postgres://pg_monitor:secure_password@localhost:5432/postgres'

# 以干运行模式运行以测试配置
pg_exporter --dry-run
```

### 步骤 3：运行导出器

启动 PG Exporter：

```bash
# 使用默认设置运行
pg_exporter

# 或使用自定义标志
pg_exporter \
  --url='postgres://pg_monitor:secure_password@localhost:5432/postgres' \
  --web.listen-address=':9630' \
  --log.level=info
```

### 步骤 4：配置 Prometheus

在您的 `prometheus.yml` 中将 PG Exporter 添加为目标：

```yaml
scrape_configs:
  - job_name: 'postgresql'
    static_configs:
      - targets: ['localhost:9630']
        labels:
          instance: 'postgres-primary'
```

### 步骤 5：验证指标

检查指标是否正在被采集：

```bash
# 查看原始指标
curl http://localhost:9630/metrics | grep pg_

# 检查导出器统计信息
curl http://localhost:9630/stat

# 验证服务器检测
curl http://localhost:9630/explain
```


--------

## 自动发现模式

PG Exporter 可以自动发现并监控 PostgreSQL 实例中的所有数据库：

```bash
# 启用自动发现（默认行为）
pg_exporter --auto-discovery

# 排除特定数据库
pg_exporter --auto-discovery \
  --exclude-database="template0,template1,postgres"

# 仅包含特定数据库
pg_exporter --auto-discovery \
  --include-database="app_db,analytics_db"
```

当启用自动发现时：
- 集群级指标（1xx-5xx）每个实例采集一次
- 数据库级指标（6xx-8xx）为每个发现的数据库采集
- 指标使用 `datname` 标签来区分不同的数据库


--------

## 监控 pgBouncer

要监控 pgBouncer 而不是 PostgreSQL：

```bash
# 连接到 pgBouncer 管理数据库
PG_EXPORTER_URL='postgres://pgbouncer:password@localhost:6432/pgbouncer' \
pg_exporter --config=/etc/pg_exporter.yml
```

导出器会自动检测 pgBouncer 并：
- 使用 `pgbouncer` 命名空间作为指标前缀
- 执行 pgBouncer 专用采集器（9xx 系列）
- 提供 pgBouncer 专用的健康检查


--------

## 使用 Docker

在容器中运行 PG Exporter：

```bash
docker run -d \
  --name pg_exporter \
  -p 9630:9630 \
  -e PG_EXPORTER_URL="postgres://user:pass@host.docker.internal:5432/postgres" \
  pgsty/pg_exporter:latest
```

使用自定义配置：

```bash
docker run -d \
  --name pg_exporter \
  -p 9630:9630 \
  -v /path/to/pg_exporter.yml:/etc/pg_exporter.yml \
  -e PG_EXPORTER_URL="postgres://user:pass@db:5432/postgres" \
  pgsty/pg_exporter:latest
```


--------

## 健康检查

PG Exporter 为负载均衡器和编排器提供健康检查端点：

```bash
# 基本健康检查
curl http://localhost:9630/up
# 返回：连接正常返回 200，否则返回 503

# 主库检测
curl http://localhost:9630/primary
# 返回：主库返回 200，从库返回 404，未知返回 503

# 从库检测
curl http://localhost:9630/replica
# 返回：从库返回 200，主库返回 404，未知返回 503
```


--------

## 故障排查

### 连接问题

```bash
# 使用详细日志测试
pg_exporter --log.level=debug --dry-run

# 检查服务器规划
pg_exporter --explain
```

### 权限错误

确保监控用户具有必要的权限：

```sql
-- 检查当前权限
SELECT * FROM pg_roles WHERE rolname = 'pg_monitor';

-- 如需要，授予额外权限
GRANT USAGE ON SCHEMA pg_catalog TO pg_monitor;
GRANT SELECT ON ALL TABLES IN SCHEMA pg_catalog TO pg_monitor;
```

### 抓取缓慢

如果抓取超时：

1. 检查慢查询：`curl http://localhost:9630/stat`
2. 在配置中调整采集器超时
3. 对昂贵的查询使用缓存（在采集器配置中设置 `ttl`）
4. 如果不需要，禁用昂贵的采集器


--------

## 下一步

- [**安装指南**](/docs/pg_exporter/install/)：各平台的详细安装说明
- [**配置参考**](/docs/pg_exporter/config/)：完整的配置文档
- [**部署指南**](/docs/pg_exporter/deploy/)：生产部署最佳实践
- [**API 参考**](/docs/pg_exporter/api/)：完整的 API 端点文档
