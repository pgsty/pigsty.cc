---
title: API 参考
weight: 5640
icon: fa-solid fa-plug
description: PG Exporter 的 HTTP API 端点参考
categories: [参考]
---

`pg_exporter` 在监听端口（默认 `:9630`）上暴露四类 HTTP 端点：指标、健康检查、流量路由与运维管理。全部端点如下：

| 端点                         | 方法       | 描述                                          |
|----------------------------|----------|---------------------------------------------|
| [`/metrics`](#get-metrics) | GET      | Prometheus 指标端点（路径可经 `--web.telemetry-path` 修改） |
| [`/up`](#健康检查)             | GET      | 存活检查；别名 `/health`、`/liveness`、`/readiness`、`/read` |
| [`/primary`](#流量路由)        | GET      | 主库检查；别名 `/leader`、`/master`、`/read-write`、`/rw` |
| [`/replica`](#流量路由)        | GET      | 从库检查；别名 `/standby`、`/slave`、`/read-only`、`/ro` |
| [`/reload`](#运维端点)         | GET/POST | 热重载采集器配置                                    |
| [`/explain`](#运维端点)        | GET      | 展示各采集器的规划裁决结果                               |
| [`/stat`](#运维端点)           | GET      | 各采集器的运行统计（命中/错误/耗时）                         |
| `/version`                 | GET      | 版本与构建信息（文本）                                 |
| `/`                        | GET      | 落地页，链接到指标端点                                 |
{.full-width}

健康与路由端点的判定基于后台探测缓存的角色状态（`primary` / `replica` / `down` / `starting` / `unknown`），不会在每次 HTTP 请求时同步查询数据库。v1.5.0 每次响应只读取一个原子状态快照，HTTP 状态码和正文始终对应同一状态；状态仍可能落后于数据库的最新变化。PgBouncer 探测成功映射为 `primary`，不代表其后端 PostgreSQL 的主从角色。


--------

## 指标端点

### GET /metrics

暴露所有采集指标的主端点，格式为 Prometheus 格式。

#### 请求

```bash
curl http://localhost:9630/metrics
```

#### 响应

```prometheus
# HELP pg_up last scrape was able to connect to the server: 1 for yes, 0 for no
# TYPE pg_up gauge
pg_up 1

# HELP pg_version server version number
# TYPE pg_version gauge
pg_version 140000

# HELP pg_in_recovery server is in recovery mode? 1 for yes 0 for no
# TYPE pg_in_recovery gauge
pg_in_recovery 0

# HELP pg_exporter_build_info A metric with a constant '1' value labeled with version, revision, branch, goversion, builddate, goos, and goarch from which pg_exporter was built.
# TYPE pg_exporter_build_info gauge
pg_exporter_build_info{version="v1.6.0",branch="main",revision="<git-sha>",builddate="<build-date>",goversion="go1.27.3",goos="linux",goarch="amd64"} 1

# ... 更多指标
```

#### 响应格式

指标遵循 Prometheus 暴露格式：

```text
# HELP <metric_name> <description>
# TYPE <metric_name> <type>
<metric_name>{<label_name>="<label_value>",...} <value> <timestamp>
```

自 v1.6.0 起，采集、等待与响应写入阶段合计最多接纳两个指标请求。采集仍串行；第二个请求在剩余预算内等待，更多请求返回 HTTP 503。预算默认为 30 秒，合法、有限且为正数的 `X-Prometheus-Scrape-Timeout-Seconds` 请求头可以缩短它。等待期间取消的请求不执行 SQL。

请求取消后，不再启动下一个采集器或数据库。已启动且 timeout 为正数的采集器，其谓词链与主 SQL 共用同一期限，继续执行并正常缓存结果。负数 timeout 关闭该期限，此时查询随请求取消。中断的采集在连接仍允许响应时返回 503。驱动与网络阻塞意味着这些期限不是硬性的墙钟上限；建连握手需另行设置 DSN 的 `connect_timeout`。

中断轮次不增加 `pg_exporter_scrape_error_count` 和 `pg_exporter_server_scrape_error_count`，轮次汇总日志为 INFO `interrupted`；查询错误计数与 fatal 查询的 ERROR 日志仍然保留。因此，恰好与请求取消重叠的真实失败可能不计入这两个轮次计数。请求没有取消时，连接／预检失败和 fatal 查询失败（包括自身超时）仍按错误计数；非 fatal 失败仍体现在查询级计数中。

刷新失败沿用原有失败 TTL。尤其是负数 timeout 的 fatal 采集器，被取消后会缓存 fatal 失败；后续有效抓取可能对该失败计数并返回 `pg_up 0`，直到成功刷新。建议 fatal 采集器保留正数 timeout。设计理由见 [采集生命周期](https://exp.pgsty.com/zh/design/scrape-lifetime/)。

#### 自监控指标

PostgreSQL 的内置指标前缀默认为 `pg`，PgBouncer 默认为 `pgbouncer`。`--namespace` 可以修改此类前缀，但不会改变 YAML 中定义的指标名。

| 指标 | 类型 | 标签 | 含义 |
|:---|:---|:---|:---|
| `pg_up` | Gauge | — | 采集所见的主目标可用状态；中断规则见下文 |
| `pg_version` | Gauge | — | 主目标的版本号 |
| `pg_in_recovery` | Gauge | — | 从库为 1，主库为 0；在 `pg_up = 1` 时使用 |
| `pg_exporter_build_info` | Gauge | version、revision、branch、builddate、goversion、goos、goarch | 恒为 1，标签记录构建信息 |
| `pg_exporter_up` | Gauge | — | 恒为 1 |
| `pg_exporter_uptime` | Gauge | — | exporter 初始化以来的秒数 |
| `pg_exporter_scrape_total_count` | Counter | — | 采集轮数 |
| `pg_exporter_scrape_error_count` | Counter | — | 主目标出现连接错误或致命采集器错误的轮数 |
| `pg_exporter_scrape_duration` | Gauge | — | 最近一轮完整采集的耗时，单位秒 |
| `pg_exporter_last_scrape_time` | Gauge | — | 最近一轮采集结束时的 Unix 时间戳 |
| `pg_exporter_server_scrape_duration` | Gauge | datname | 数据库最近一轮采集的耗时，单位秒 |
| `pg_exporter_server_scrape_total_seconds` | Gauge | datname | 数据库累计采集耗时，单位秒 |
| `pg_exporter_server_scrape_total_count` | Gauge | datname | 数据库采集轮数 |
| `pg_exporter_server_scrape_error_count` | Gauge | datname | 数据库连接错误或致命采集器错误次数 |
| `pg_exporter_query_scrape_total_count` | Gauge | datname、query | 采集器调用次数，含缓存命中和谓词跳过 |
| `pg_exporter_query_scrape_error_count` | Gauge | datname、query | 采集器调用报错次数 |
| `pg_exporter_query_scrape_hit_count` | Gauge | datname、query | 结果缓存命中次数 |
| `pg_exporter_query_scrape_metric_count` | Gauge | datname、query | 采集器当前结果中的样本数 |
| `pg_exporter_query_scrape_duration` | Gauge | datname、query | 最近一次实际执行耗时，单位秒；缓存命中时保留原值 |
| `pg_exporter_query_scrape_predicate_skip_count` | Gauge | datname、query | 谓词返回 false、NULL 或零行而跳过的次数 |
| `pg_exporter_query_cache_ttl` | Gauge | datname、query | 结果缓存剩余有效期，单位秒 |
{.full-width .wide .expand}

这些序列也会附加配置的固定标签。数据库和采集器级别的累计计数以 Gauge 暴露。服务器重新规划时会重置采集器统计，配置重载也会触发这一过程。数据库连接对象重建时会重置该数据库的统计。

`--disable-intro` 会隐藏表中所有内置指标，包括 `pg_up`。YAML 指标、Go/进程指标和 HTTP 健康检查仍然可用。

中断时，`pg_up` 保留主目标此前的可用状态；若本轮预检已成功，则保留为 1。首次预检在成功前被中断时，保持为 0，后续成功抓取可恢复。子数据库中断采用相同的单库规则，不增加主目标的错误计数。


--------

## 健康检查

健康检查端点提供多种方式来监控 PG Exporter 和目标数据库的状态。

### GET /up

初始化后，HTTP 健康状态只由每秒一次的后台探测更新。慢采集不再占用探测所需的锁，采集完成也不会覆盖更新的探测结果。HTTP 健康请求只读取快照，不执行 SQL。`pg_up` 与 `pg_in_recovery` 仍属于采集指标：fatal 采集器失败可能使 `pg_up` 为 0，而数据库可达时 `/up` 仍返回 200。PostgreSQL 主连接池最多三个连接，PgBouncer 最多两个，每个发现数据库最多一个。

#### 响应码

| 状态码 | 状态 | 描述 |
|--------|------|------|
| 200 | OK | 目标可用（primary/replica） |
| 503 | Service Unavailable | 目标不可用（down/starting/unknown） |
{.full-width}

#### 示例

```bash
# 检查服务是否正常
curl -I http://localhost:9630/up

HTTP/1.1 200 OK
Content-Type: text/plain; charset=utf-8
```

### GET /health

`/up` 的别名，行为相同。

```bash
curl http://localhost:9630/health
```

### GET /liveness 与 GET /readiness

为 Kubernetes 探针习惯提供的路径别名，行为与 `/up` 完全一致（同一处理器）：

```yaml
livenessProbe:
  httpGet: { path: /liveness, port: 9630 }
  initialDelaySeconds: 30
  periodSeconds: 10
readinessProbe:
  httpGet: { path: /readiness, port: 9630 }
  initialDelaySeconds: 5
  periodSeconds: 5
```

注意二者语义相同：目标数据库不可达时都会返回 503。若不希望"数据库宕机导致 exporter Pod 被重启"，liveness 探针可以改用 TCP 探测监听端口。


--------

## 流量路由

这些端点专为负载均衡器和代理设计，根据服务器角色路由流量。

### GET /primary

检查服务器是否为主库（primary）实例。

#### 响应码

| 状态码 | 状态                  | 描述                            |
|-----|---------------------|-------------------------------|
| 200 | OK                  | 服务器是主库且接受写入                   |
| 404 | Not Found           | 服务器不是主库（是从库）                  |
| 503 | Service Unavailable | 服务器不可用（down/starting/unknown） |
{.full-width}

#### 别名

- `/leader`
- `/master`
- `/read-write`
- `/rw`

#### 示例

```bash
# 检查服务器是否为主库
curl -I http://localhost:9630/primary

# 在 HAProxy 配置中使用
backend pg_primary
  option httpchk GET /primary
  server pg1 10.0.0.1:5432 check port 9630
  server pg2 10.0.0.2:5432 check port 9630
```

### GET /replica

检查服务器是否为从库（standby）实例。

#### 响应码

| 状态码 | 状态                  | 描述                            |
|-----|---------------------|-------------------------------|
| 200 | OK                  | 服务器是从库且处于恢复状态                 |
| 404 | Not Found           | 服务器不是从库（是主库）                  |
| 503 | Service Unavailable | 服务器不可用（down/starting/unknown） |
{.full-width}

#### 别名

- `/standby`
- `/read-only`
- `/ro`

`/slave` 仍兼容，但建议优先使用 `/replica`。

#### 示例

```bash
# 检查服务器是否为从库
curl -I http://localhost:9630/replica

# 在负载均衡器配置中使用
backend pg_replicas
  option httpchk GET /replica
  server pg2 10.0.0.2:5432 check port 9630
  server pg3 10.0.0.3:5432 check port 9630
```

### GET /read

检查服务器是否可以处理读流量（主库和从库都可以）。

#### 响应码

| 状态码 | 状态                  | 描述                            |
|-----|---------------------|-------------------------------|
| 200 | OK                  | 服务器正常运行且可以处理读请求               |
| 503 | Service Unavailable | 服务器不可用（down/starting/unknown） |
{.full-width}

#### 示例

```bash
# 检查服务器是否可以处理读请求
curl -I http://localhost:9630/read

# 将读流量路由到任何可用服务器
backend pg_read
  option httpchk GET /read
  server pg1 10.0.0.1:5432 check port 9630
  server pg2 10.0.0.2:5432 check port 9630
  server pg3 10.0.0.3:5432 check port 9630
```


--------

## 运维端点

### GET /reload / POST /reload

在不重启导出器的情况下重新加载配置。

#### 请求

```bash
# 推荐 POST
curl -X POST http://localhost:9630/reload

# 兼容 GET
curl http://localhost:9630/reload
```

#### 响应

```text
server reloaded
```

#### 响应码

| 状态码 | 状态                    | 描述                                |
|-----|-----------------------|-----------------------------------|
| 200 | OK                    | 配置重新加载成功                          |
| 500 | Internal Server Error | 重新加载失败（返回 `fail to reload: ...`）  |
| 405 | Method Not Allowed    | 非 GET/POST 方法（`Allow: GET, POST`） |
{.full-width}

#### 使用场景

- 更新采集器定义
- 更改查询参数
- 修改缓存 TTL 值
- 添加或移除采集器

> [!NOTE] 注意
> 重载会刷新采集器配置、查询计划、缓存与查询统计；解析失败时保留原计划及缓存。空 YAML 是合法空配置，成功重载后会清空采集器。目录模式允许部分文件成功加载，详见 [配置加载](/docs/pg_exporter/config/#配置加载)。如需修改进程级参数（例如监听地址、CLI 参数），仍需重启导出器。

> [!WARNING] 安全建议
> `/reload`、`/explain`、`/stat` 都属于管理端点。若 exporter 不仅在本机或可信内网使用，建议通过 `--web.config.file` 启用认证/TLS，或在反向代理 / 防火墙层限制访问。

### GET /explain

显示主目标当前计划中选中的采集器；谓词在刷新时运行，不能从该端点判断谓词结果。

#### 请求

```bash
curl http://localhost:9630/explain
```

#### 响应

```text
##
# SYNOPSIS
#       pg.pg_primary_only_*
#
# DESCRIPTION
#       PostgreSQL basic information (on primary)
#
# OPTIONS
#       Tags       [cluster, primary]
#       TTL        1
#       Priority   110
#       Timeout    100ms
#       Fatal      true
#       Version    100000 ~ higher
#       Source     pg_exporter.yml

...
```

### GET /stat

显示运行时统计信息，包括采集器执行时间和成功/失败计数。

#### 请求

```bash
curl http://localhost:9630/stat
```

#### 响应

```text
name                     total      hit        error      skip       metric     ttl/s  duration/ms
pg                       12         0          0          0          15         1      4.231000
pg_db                    12         11         0          0          28         10     0.153000
pg_activity              12         0          1          0          8          0      7.842000
...
```

此端点对于识别慢速或有问题的采集器非常有用。


--------

## 在负载均衡器中使用

### HAProxy 配置示例

```haproxy
# 主库后端 - 用于写流量
backend pg_primary
  mode tcp
  option httpchk GET /primary
  http-check expect status 200
  server pg1 10.0.0.1:5432 check port 9630 inter 3000 fall 2 rise 2
  server pg2 10.0.0.2:5432 check port 9630 inter 3000 fall 2 rise 2 backup

# 从库后端 - 用于读流量
backend pg_replicas
  mode tcp
  balance roundrobin
  option httpchk GET /replica
  http-check expect status 200
  server pg2 10.0.0.2:5432 check port 9630 inter 3000 fall 2 rise 2
  server pg3 10.0.0.3:5432 check port 9630 inter 3000 fall 2 rise 2

# 读后端 - 用于任何可以处理读请求的服务器
backend pg_read
  mode tcp
  balance leastconn
  option httpchk GET /read
  http-check expect status 200
  server pg1 10.0.0.1:5432 check port 9630 inter 3000 fall 2 rise 2
  server pg2 10.0.0.2:5432 check port 9630 inter 3000 fall 2 rise 2
  server pg3 10.0.0.3:5432 check port 9630 inter 3000 fall 2 rise 2
```

### 关于 Nginx

Nginx 开源版不支持基于旁路端口的主动 HTTP 健康检查（`health_check` 指令是 NGINX Plus 功能），且代理 PostgreSQL 流量需要 `stream` 模块而非 `http` 代理。按角色路由 PostgreSQL 流量请优先使用上面的 HAProxy 方案，或 Patroni + vip-manager 等方案。
