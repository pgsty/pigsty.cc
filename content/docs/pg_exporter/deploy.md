---
title: 部署指南
weight: 5650
icon: fa-solid fa-server
description: 生产环境部署：连接与凭据、systemd / Docker / Kubernetes、自动发现与告警
categories: [参考]
---

本页覆盖把 `pg_exporter` 放进生产环境要做的事：进程参数与环境变量、监控用户与凭据管理、systemd / Docker / Kubernetes 三种部署形态、pgBouncer 与自动发现，以及 Prometheus 侧的抓取与告警配置。

进程级配置有两个来源，优先级从高到低：

1. **命令行参数**（`--url`、`--config` 等）
2. **环境变量**（每个参数都有对应的 `PG_EXPORTER_*` 变量）

指标采集行为则完全由 YAML 采集器定义驱动（默认 `/etc/pg_exporter.yml`，亦可指向配置目录），详见 [配置参考](/docs/pg_exporter/config/)。


--------

## 命令行参数

```bash
pg_exporter \
  --url="postgres://monitor:S3cret@localhost:5432/postgres" \
  --config="/etc/pg_exporter.yml" \
  --web.listen-address=":9630" \
  --auto-discovery \
  --log.level="info"
```

`pg_exporter --help` 的完整参数列表：

```bash
Flags:
  -h, --[no-]help                显示上下文相关帮助（也可尝试 --help-long 和 --help-man）。
  -u, --url=URL                  postgres 目标 URL
  -c, --config=CONFIG            配置目录或文件路径
      --web.listen-address=:9630 ...
                                 暴露指标和 Web 界面的地址。可重复指定多个地址。示例：`:9100` 或 `[::1]:9100` 用于 http，`vsock://:9100` 用于 vsock
      --web.config.file=""       可启用 TLS 或认证的配置文件路径。参见：https://github.com/prometheus/exporter-toolkit/blob/master/docs/web-configuration.md
  -l, --label=""                 常量标签：逗号分隔的 label=value 项 ($PG_EXPORTER_LABEL)
  -t, --tag=""                   标签，逗号分隔的服务器标签 ($PG_EXPORTER_TAG)
  -C, --[no-]disable-cache       强制不使用缓存 ($PG_EXPORTER_DISABLE_CACHE)
  -m, --[no-]disable-intro       禁用内部/导出器自监控指标（仅暴露查询指标）($PG_EXPORTER_DISABLE_INTRO)
  -a, --[no-]auto-discovery      自动抓取目标服务器上的所有数据库 ($PG_EXPORTER_AUTO_DISCOVERY)
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
      --log.level="info"         日志级别：debug|info|warn|error
      --log.format="logfmt"      日志格式：logfmt|json
      --[no-]version             显示应用程序版本
```

两点部署相关的行为说明：

- **启动策略**：默认非阻塞启动——目标库暂时不可达时，HTTP 端点照常拉起，后台持续探测直到恢复；如果希望"连不上就失败退出"（例如交由 systemd/编排器重启决策），设置 `--fail-fast`。
- **telemetry path 校验**：自 v1.4.0 起，`--web.telemetry-path` 在启动时严格校验，空路径、与内置端点冲突、或 `//metrics` 这类永远无法命中的非规范路径会直接报错退出。

### 连接 URL 的来源

连接串按以下优先级解析，取第一个非空值：

1. `--url` / `-u` 命令行参数
2. `PG_EXPORTER_URL` 环境变量
3. `PGURL` 环境变量
4. `PG_EXPORTER_URL_FILE` 指向文件的内容（适合容器 Secret 挂载）
5. 默认值 `postgresql:///?sslmode=disable`（本地优先，适配同机部署）

URL 中未指定 `sslmode` 时会自动补 `sslmode=disable`。另外，`PGSERVICE` / `PGSERVICEFILE` 等 libpq 服务文件环境变量会在启动时被清除并记录日志——服务文件可能覆盖显式指定的连接目标，`pg_exporter` 要求"日志里宣告的 URL 就是实际连接的 URL"。


--------

## 监控用户与凭据

### 创建监控用户

```sql
CREATE ROLE monitor WITH LOGIN PASSWORD 'S3cret' CONNECTION LIMIT 5;
GRANT pg_monitor TO monitor;   -- PostgreSQL 10+ 内置监控角色，覆盖默认采集器全部所需权限
```

`CONNECTION LIMIT` 建议保留：exporter 正常只占用一至数个连接（自动发现时每库一个），限流可以防止配置错误时耗尽连接。

### 使用 .pgpass 管理密码

把密码从 URL 中拿掉，交给 libpq 的 `.pgpass` 机制：

```bash
# 以运行 exporter 的操作系统用户身份创建
echo "localhost:5432:*:monitor:S3cret" > ~/.pgpass
chmod 600 ~/.pgpass

# URL 中不再携带密码
PG_EXPORTER_URL='postgres://monitor@localhost:5432/postgres'
```

{{% alert title="RPM/DEB 包安装场景" color="info" %}}
包安装的服务以 `prometheus` 系统用户运行。自 v1.4.0 起该用户的 HOME 指向 `/var/lib/prometheus`（libpq 查找 `~/.pgpass` 的位置），但安装包**不会**创建这个目录。使用 `.pgpass` 前请先执行：
`install -d -o prometheus -g prometheus /var/lib/prometheus`
{{% /alert %}}

### 数据库连接 TLS

```bash
PG_EXPORTER_URL='postgres://monitor:S3cret@db.example.com:5432/postgres?sslmode=verify-full&sslrootcert=/etc/pki/ca.crt'
```

### HTTP 端口侧的保护

`/metrics` 之外，`/reload`、`/explain`、`/stat` 属于管理端点：能访问该端口的任何人都可以读取配置与运行态信息、触发重载。如果 exporter 暴露在共享网络中，请通过 `--web.config.file`（[exporter-toolkit web 配置](https://github.com/prometheus/exporter-toolkit/blob/master/docs/web-configuration.md)）启用 TLS/Basic Auth，或在防火墙/反向代理层限制来源。


--------

## Systemd 部署（RPM/DEB 包）

RPM/DEB 包已内置服务单元与环境文件，安装后仅需修改环境文件并启动：

```ini
# /usr/lib/systemd/system/pg_exporter.service
[Unit]
Description=Prometheus exporter for PostgreSQL/Pgbouncer server metrics
Documentation=https://pigsty.io/docs/pg_exporter
After=network.target

[Service]
EnvironmentFile=-/etc/default/pg_exporter
User=prometheus
ExecStart=/usr/bin/pg_exporter $PG_EXPORTER_OPTS
Restart=on-failure

[Install]
WantedBy=multi-user.target
```

环境文件 `/etc/default/pg_exporter`（包默认值）：

```bash
PG_EXPORTER_URL='postgres://:5432/postgres?sslmode=disable'
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

所有命令行参数都有对应环境变量，需要时（如 `PG_EXPORTER_DISABLE_INTRO`）直接在此追加即可。该文件以 `noreplace` 方式打包，升级不会覆盖你的修改。

常用管理命令：

```bash
sudo systemctl enable --now pg_exporter    # 启动并设置开机自启
sudo systemctl status pg_exporter          # 查看状态
journalctl -u pg_exporter -f               # 跟踪日志
curl -X POST localhost:9630/reload         # 热重载采集器配置（无需重启）
```


--------

## Docker 部署

```bash
docker run -d \
  --name pg_exporter \
  --restart unless-stopped \
  -p 9630:9630 \
  -e PG_EXPORTER_URL="postgres://monitor:S3cret@host:5432/postgres" \
  pgsty/pg_exporter:latest
```

Docker Compose：

```yaml
services:
  pg_exporter:
    image: pgsty/pg_exporter:latest
    container_name: pg_exporter
    restart: unless-stopped
    ports:
      - "9630:9630"
    environment:
      - PG_EXPORTER_URL=postgres://monitor:S3cret@postgres:5432/postgres
    volumes:
      - ./pg_exporter.yml:/etc/pg_exporter.yml:ro   # 可选：自定义采集器配置
    depends_on:
      - postgres
```

{{% alert title="注意" color="warning" %}}
官方镜像基于 `scratch`，不含系统 CA 证书。若以 `sslmode=verify-ca` / `verify-full` 连接远程 PostgreSQL，请显式挂载 CA 证书并通过 `sslrootcert` 指定，否则 TLS 校验无法完成。
{{% /alert %}}


--------

## Kubernetes 部署

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: pg-exporter
  labels: { app: pg-exporter }
spec:
  replicas: 1
  selector:
    matchLabels: { app: pg-exporter }
  template:
    metadata:
      labels: { app: pg-exporter }
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
        livenessProbe:
          httpGet: { path: /liveness, port: 9630 }
          initialDelaySeconds: 30
          periodSeconds: 10
        readinessProbe:
          httpGet: { path: /readiness, port: 9630 }
          initialDelaySeconds: 5
          periodSeconds: 5
        resources:
          requests: { cpu: 100m, memory: 128Mi }
          limits: { cpu: 200m, memory: 256Mi }
---
apiVersion: v1
kind: Service
metadata:
  name: pg-exporter
  labels: { app: pg-exporter }
spec:
  ports:
  - { port: 9630, targetPort: 9630, name: metrics }
  selector: { app: pg-exporter }
```

也可以用 `PG_EXPORTER_URL_FILE` 指向 Secret 挂载出的文件，避免把连接串放进环境变量。


--------

## 自动发现

自动发现（默认启用）让一个 exporter 实例监控目标 PostgreSQL 中的所有数据库：

```bash
pg_exporter --auto-discovery \
  --exclude-database="template0,template1,postgres" \  # 默认排除清单
  --include-database=""                                # 设置后改为白名单模式
```

行为规则：

- 集群级采集器（`tags: [cluster]`）只在主连接上执行一次
- 数据库级采集器在每个被发现的库上分别执行，指标带 `datname` 标签区分
- 新建/删除的数据库会在后续规划周期被自动纳入/移除


--------

## 监控 pgBouncer

将 URL 的数据库名设为 `pgbouncer` 即可切换到 pgBouncer 模式（以此触发自动检测）：

```bash
PG_EXPORTER_URL='postgres://stats_user:S3cret@localhost:6432/pgbouncer' pg_exporter
```

pgBouncer 模式下，exporter 使用 `pgbouncer` 指标前缀，只执行 pgBouncer 专属采集器（`SHOW STATS` / `SHOW POOLS` 等）。通常的做法是为 PostgreSQL 和 pgBouncer 各跑一个 exporter 实例（不同端口）。


--------

## Prometheus 抓取与告警

### 抓取配置

```yaml
scrape_configs:
  - job_name: 'postgresql'
    scrape_interval: 15s
    static_configs:
      - targets: ['pg-1:9630', 'pg-2:9630', 'pg-3:9630']
```

Kubernetes 服务发现：

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

抓取间隔建议不小于常用采集器的 `ttl`（默认配置多为 10 秒）：TTL 缓存保证了更高频的抓取只会拿到缓存结果，徒增开销。

### 告警规则

以下规则全部基于真实存在的指标：

```yaml
groups:
  - name: pg_exporter
    rules:
      # 导出器进程失联
      - alert: PgExporterDown
        expr: up{job="postgresql"} == 0
        for: 1m
        labels: { severity: critical }
        annotations:
          summary: "pg_exporter 宕机 ({{ $labels.instance }})"

      # 导出器存活但连不上数据库
      - alert: PostgreSQLDown
        expr: pg_up == 0
        for: 1m
        labels: { severity: critical }
        annotations:
          summary: "PostgreSQL 连接失败 ({{ $labels.instance }})"

      # 整体抓取耗时异常（单位：秒）
      - alert: PgExporterSlowScrape
        expr: pg_exporter_scrape_duration > 10
        for: 5m
        labels: { severity: warning }
        annotations:
          summary: "pg_exporter 抓取缓慢 ({{ $labels.instance }})"

      # 某个采集器持续报错（按 datname/query 定位）
      - alert: PgExporterQueryError
        expr: increase(pg_exporter_query_scrape_error_count[10m]) > 0
        for: 10m
        labels: { severity: warning }
        annotations:
          summary: "采集器 {{ $labels.query }} 在 {{ $labels.datname }} 上持续报错"
```

### 基于角色的流量路由

`/primary`、`/replica`、`/read` 等健康检查端点可以直接充当 HAProxy 等负载均衡器的健康检查探针，实现主从读写分离。端点语义与完整的 HAProxy 配置示例见 [API 参考](/docs/pg_exporter/api/#流量路由)。

注意：Nginx 开源版不支持基于旁路端口的主动 HTTP 健康检查（`health_check` 为 NGINX Plus 功能），按角色路由 PostgreSQL 流量请优先使用 HAProxy，或 Patroni + vip-manager 等方案。
