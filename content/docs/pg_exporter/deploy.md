---
title: 部署指南
weight: 5650
icon: fa-solid fa-server
description: 生产环境部署策略与最佳实践
categories: [参考]
---

本指南涵盖生产环境的部署策略、最佳实践和实际配置。

pg_exporter 本身可以通过以下方式配置：

1. **命令行参数**（优先级较高）
2. **环境变量**（优先级较低）

指标采集器通过 YAML 配置文件（目录/文件）进行配置：

- `/etc/pg_exporter.yml`（默认）
- `/etc/pg_exporter/`（包含多个文件的目录）

配置文件使用 YAML 格式，由 **采集器定义** 组成，指定要采集的指标以及如何采集。


--------

## 命令行参数

所有配置选项都可以通过命令行标志指定：

```bash
pg_exporter \
  --url="postgres://user:pass@localhost:5432/postgres" \
  --config="/etc/pg_exporter/pg_exporter.yml" \
  --web.listen-address=":9630" \
  --auto-discovery \
  --exclude-database="template0,template1" \
  --log.level="info"
```

运行 `pg_exporter --help` 获取完整的可用标志列表：

```bash
Flags:
  -h, --[no-]help                显示上下文相关帮助（也可尝试 --help-long 和 --help-man）。
  -u, --url=URL                  postgres 目标 URL
  -c, --config=CONFIG            配置目录或文件路径
      --[no-]web.systemd-socket  使用 systemd socket 激活监听器代替端口监听器（仅限 Linux）。
      --web.listen-address=:9630 ...
                                 暴露指标和 Web 界面的地址。可重复指定多个地址。示例：`:9100` 或 `[::1]:9100` 用于 http，`vsock://:9100` 用于 vsock
      --web.config.file=""       可启用 TLS 或认证的配置文件路径。参见：https://github.com/prometheus/exporter-toolkit/blob/master/docs/web-configuration.md
  -l, --label=""                 常量标签：逗号分隔的 label=value 对列表 ($PG_EXPORTER_LABEL)
  -t, --tag=""                   标签，逗号分隔的服务器标签列表 ($PG_EXPORTER_TAG)
  -C, --[no-]disable-cache       强制不使用缓存 ($PG_EXPORTER_DISABLE_CACHE)
  -m, --[no-]disable-intro       禁用采集器级别的内省指标 ($PG_EXPORTER_DISABLE_INTRO)
  -a, --[no-]auto-discovery      自动抓取给定服务器的所有数据库 ($PG_EXPORTER_AUTO_DISCOVERY)
  -x, --exclude-database="template0,template1,postgres"
                                 启用自动发现时排除的数据库 ($PG_EXPORTER_EXCLUDE_DATABASE)
  -i, --include-database=""      启用自动发现时包含的数据库 ($PG_EXPORTER_INCLUDE_DATABASE)
  -n, --namespace=""             内置指标的前缀，默认为 (pg|pgbouncer) ($PG_EXPORTER_NAMESPACE)
  -f, --[no-]fail-fast           启动时立即失败而不是等待 ($PG_EXPORTER_FAIL_FAST)
  -T, --connect-timeout=100      连接超时（毫秒），默认 100 ($PG_EXPORTER_CONNECT_TIMEOUT)
  -P, --web.telemetry-path="/metrics"
                                 暴露指标的 URL 路径 ($PG_EXPORTER_TELEMETRY_PATH)
  -D, --[no-]dry-run             干运行并打印原始配置
  -E, --[no-]explain             解释服务器计划的查询
      --log.level="info"         日志级别：debug|info|warn|error]
      --log.format="logfmt"      日志格式：logfmt|json
      --[no-]version             显示应用程序版本
```


--------

## 环境变量

所有命令行参数都有对应的环境变量：

```bash
PG_EXPORTER_URL='postgres://:5432/?sslmode=disable'
PG_EXPORTER_CONFIG=/etc/pg_exporter.yml
PG_EXPORTER_LABEL=""
PG_EXPORTER_TAG=""
PG_EXPORTER_DISABLE_CACHE=false
PG_EXPORTER_AUTO_DISCOVERY=true
PG_EXPORTER_EXCLUDE_DATABASE="template0,template1,postgres"
PG_EXPORTER_INCLUDE_DATABASE=""
PG_EXPORTER_NAMESPACE="pg"
PG_EXPORTER_FAIL_FAST=false
PG_EXPORTER_CONNECT_TIMEOUT=100
PG_EXPORTER_TELEMETRY_PATH="/metrics"
PG_EXPORTER_OPTS='--log.level=info'

pg_exporter
```


--------

## 部署架构

最简单的部署方式是每个 PostgreSQL 实例配置一个导出器：

```
┌─────────────┐     ┌──────────────┐     ┌────────────┐
│ Prometheus  │────▶│ PG Exporter  │────▶│ PostgreSQL │
└─────────────┘     └──────────────┘     └────────────┘
                         :9630                :5432
```

### 多数据库环境

使用自动发现来监控多个数据库（默认启用）：

```
┌─────────────┐     ┌────────────────┐     ┌────────────┐
│ Prometheus  │────▶│ PG Exporter    │────▶│ PostgreSQL │
└─────────────┘     │   启用自动发现  │     │  ├─ db1    │
                    │                │     │  ├─ db2    │
                    └────────────────┘     │  └─ db3    │
                                           └────────────┘
```


--------

## 生产配置

### PostgreSQL 用户设置

创建一个具有最小必要权限的专用监控用户：

```sql
-- 创建监控角色
CREATE ROLE pg_monitor WITH LOGIN PASSWORD 'strong_password' CONNECTION LIMIT 5;

-- 授予必要权限
GRANT pg_monitor TO pg_monitor;  -- PostgreSQL 10+ 内置角色
GRANT CONNECT ON DATABASE postgres TO pg_monitor;

-- 对于特定数据库
GRANT CONNECT ON DATABASE app_db TO pg_monitor;
GRANT USAGE ON SCHEMA public TO pg_monitor;

-- 扩展监控的额外权限
GRANT SELECT ON ALL TABLES IN SCHEMA pg_catalog TO pg_monitor;
GRANT SELECT ON ALL SEQUENCES IN SCHEMA pg_catalog TO pg_monitor;
```


--------

### 连接安全

#### 使用 SSL/TLS

```bash
# 带 SSL 的连接字符串
PG_EXPORTER_URL='postgres://pg_monitor:password@db.example.com:5432/postgres?sslmode=require&sslcert=/path/to/client.crt&sslkey=/path/to/client.key&sslrootcert=/path/to/ca.crt'
```

#### 使用 .pgpass 文件

```bash
# 创建 .pgpass 文件
echo "db.example.com:5432:*:pg_monitor:password" > ~/.pgpass
chmod 600 ~/.pgpass

# 在 URL 中不使用密码
PG_EXPORTER_URL='postgres://pg_monitor@db.example.com:5432/postgres'
```


--------

## Systemd 服务配置

完整的生产环境 systemd 设置：

```ini
[Unit]
Description=Prometheus exporter for PostgreSQL/Pgbouncer server metrics
Documentation=https://github.com/pgsty/pg_exporter
After=network.target

[Service]
EnvironmentFile=-/etc/default/pg_exporter
User=prometheus
ExecStart=/usr/bin/pg_exporter $PG_EXPORTER_OPTS
Restart=on-failure

[Install]
WantedBy=multi-user.target
```

环境文件 `/etc/default/pg_exporter`：

```bash
PG_EXPORTER_URL='postgres://:5432/?sslmode=disable'
PG_EXPORTER_CONFIG=/etc/pg_exporter.yml
PG_EXPORTER_LABEL=""
PG_EXPORTER_TAG=""
PG_EXPORTER_DISABLE_CACHE=false
PG_EXPORTER_AUTO_DISCOVERY=true
PG_EXPORTER_EXCLUDE_DATABASE="template0,template1,postgres"
PG_EXPORTER_INCLUDE_DATABASE=""
PG_EXPORTER_NAMESPACE="pg"
PG_EXPORTER_FAIL_FAST=false
PG_EXPORTER_CONNECT_TIMEOUT=100
PG_EXPORTER_TELEMETRY_PATH="/metrics"
PG_EXPORTER_OPTS='--log.level=info'
```


--------

## 服务管理

### 启动和停止服务

```bash
# 启动服务
sudo systemctl start pg_exporter

# 停止服务
sudo systemctl stop pg_exporter

# 重启服务
sudo systemctl restart pg_exporter

# 查看服务状态
sudo systemctl status pg_exporter

# 设置开机自启
sudo systemctl enable pg_exporter
```

### 查看日志

```bash
# 实时查看日志
journalctl -u pg_exporter -f

# 查看最近的日志
journalctl -u pg_exporter --since "1 hour ago"

# 查看错误日志
journalctl -u pg_exporter -p err
```


--------

## Docker 部署

### 基本 Docker 运行

```bash
docker run -d \
  --name pg_exporter \
  --restart unless-stopped \
  -p 9630:9630 \
  -e PG_EXPORTER_URL="postgres://user:pass@host:5432/postgres" \
  pgsty/pg_exporter:latest
```

### Docker Compose

```yaml
version: '3.8'

services:
  pg_exporter:
    image: pgsty/pg_exporter:latest
    container_name: pg_exporter
    restart: unless-stopped
    ports:
      - "9630:9630"
    environment:
      - PG_EXPORTER_URL=postgres://pg_monitor:password@postgres:5432/postgres
      - PG_EXPORTER_AUTO_DISCOVERY=true
      - PG_EXPORTER_EXCLUDE_DATABASE=template0,template1
    volumes:
      - ./pg_exporter.yml:/etc/pg_exporter.yml:ro
    depends_on:
      - postgres
```


--------

## Kubernetes 部署

### Deployment 示例

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: pg-exporter
  labels:
    app: pg-exporter
spec:
  replicas: 1
  selector:
    matchLabels:
      app: pg-exporter
  template:
    metadata:
      labels:
        app: pg-exporter
      annotations:
        prometheus.io/scrape: "true"
        prometheus.io/port: "9630"
    spec:
      containers:
      - name: pg-exporter
        image: pgsty/pg_exporter:latest
        ports:
        - containerPort: 9630
        env:
        - name: PG_EXPORTER_URL
          valueFrom:
            secretKeyRef:
              name: pg-credentials
              key: connection-url
        - name: PG_EXPORTER_AUTO_DISCOVERY
          value: "true"
        livenessProbe:
          httpGet:
            path: /liveness
            port: 9630
          initialDelaySeconds: 30
          periodSeconds: 10
        readinessProbe:
          httpGet:
            path: /readiness
            port: 9630
          initialDelaySeconds: 5
          periodSeconds: 5
        resources:
          limits:
            cpu: 200m
            memory: 256Mi
          requests:
            cpu: 100m
            memory: 128Mi
```

### Service 示例

```yaml
apiVersion: v1
kind: Service
metadata:
  name: pg-exporter
  labels:
    app: pg-exporter
spec:
  ports:
  - port: 9630
    targetPort: 9630
    name: metrics
  selector:
    app: pg-exporter
```


--------

## Prometheus 配置

### 静态配置

```yaml
scrape_configs:
  - job_name: 'postgresql'
    static_configs:
      - targets:
        - 'pg-exporter-1:9630'
        - 'pg-exporter-2:9630'
        - 'pg-exporter-3:9630'
```

### 服务发现

```yaml
scrape_configs:
  - job_name: 'postgresql'
    kubernetes_sd_configs:
      - role: pod
    relabel_configs:
      - source_labels: [__meta_kubernetes_pod_label_app]
        regex: pg-exporter
        action: keep
      - source_labels: [__meta_kubernetes_pod_ip]
        target_label: __address__
        replacement: ${1}:9630
```


--------

## 监控与告警

### 推荐的告警规则

```yaml
groups:
  - name: pg_exporter
    rules:
      # 导出器宕机告警
      - alert: PgExporterDown
        expr: up{job="postgresql"} == 0
        for: 5m
        labels:
          severity: critical
        annotations:
          summary: "PG Exporter 宕机"
          description: "{{ $labels.instance }} 的 PG Exporter 已宕机超过 5 分钟"

      # 数据库连接失败告警
      - alert: PostgreSQLDown
        expr: pg_up == 0
        for: 1m
        labels:
          severity: critical
        annotations:
          summary: "PostgreSQL 连接失败"
          description: "无法连接到 {{ $labels.instance }} 上的 PostgreSQL"

      # 抓取时间过长告警
      - alert: PgExporterSlowScrape
        expr: pg_exporter_last_scrape_duration_seconds > 30
        for: 5m
        labels:
          severity: warning
        annotations:
          summary: "PG Exporter 抓取缓慢"
          description: "{{ $labels.instance }} 的抓取时间超过 30 秒"
```
