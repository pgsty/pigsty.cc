---
title: API 参考
weight: 5640
icon: fa-solid fa-plug
description: PG Exporter 的 HTTP API 端点参考
categories: [参考]
---

PG Exporter 提供全面的 REST API，用于指标采集、健康检查、流量路由和运维控制。所有端点都通过配置的端口（默认：9630）以 HTTP/HTTPS 方式暴露。


--------

## 端点概览

| 端点                         | 方法       | 描述              |
|----------------------------|----------|-----------------|
| [`/metrics`](#get-metrics) | GET      | Prometheus 指标端点 |
| [`/up`](#健康检查)             | GET      | 基本存活检查          |
| [`/health`](#健康检查)         | GET      | `/up` 别名        |
| [`/primary`](#流量路由)        | GET      | 主库服务器检查         |
| [`/replica`](#流量路由)        | GET      | 从库服务器检查         |
| [`/read`](#流量路由)           | GET      | 读流量路由           |
| [`/reload`](#运维端点)         | GET/POST | 重新加载配置          |
| [`/explain`](#运维端点)        | GET      | 解释查询规划          |
| [`/stat`](#运维端点)           | GET      | 运行时统计           |
{.full-width}


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
pg_exporter_build_info{version="1.2.2",branch="main",revision="<git-sha>",builddate="<build-date>",goversion="go1.26.2",goos="linux",goarch="amd64"} 1

# ... 更多指标
```

#### 响应格式

指标遵循 Prometheus 暴露格式：

```
# HELP <metric_name> <description>
# TYPE <metric_name> <type>
<metric_name>{<label_name>="<label_value>",...} <value> <timestamp>
```


--------

## 健康检查

健康检查端点提供多种方式来监控 PG Exporter 和目标数据库的状态。

### GET /up

简单的存活检查（基于后台探针缓存状态，不会在每次 HTTP 请求时主动探测数据库）。

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

### GET /liveness

Kubernetes 存活探针端点。

```yaml
# 存活探针配置
livenessProbe:
  httpGet:
    path: /liveness
    port: 9630
  initialDelaySeconds: 30
  periodSeconds: 10
```

### GET /readiness

Kubernetes 就绪探针端点。

```yaml
# 就绪探针配置
readinessProbe:
  httpGet:
    path: /readiness
    port: 9630
  initialDelaySeconds: 5
  periodSeconds: 5
```


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

{{% alert title="注意" color="info" %}}
重载会刷新采集器配置和查询计划；如需修改进程级参数（例如监听地址、CLI 参数），仍需重启导出器。
{{% /alert %}}

{{% alert title="安全建议" color="warning" %}}
`/reload`、`/explain`、`/stat` 都属于管理端点。若 exporter 不仅在本机或可信内网使用，建议通过 `--web.config.file` 启用认证/TLS，或在反向代理 / 防火墙层限制访问。
{{% /alert %}}

### GET /explain

显示所有已配置采集器的查询执行规划信息。

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

### Nginx 配置示例

```nginx
upstream pg_primary {
    server 10.0.0.1:5432;
    server 10.0.0.2:5432 backup;
}

upstream pg_replicas {
    server 10.0.0.2:5432;
    server 10.0.0.3:5432;
}

server {
    listen 5432;

    location / {
        proxy_pass http://pg_primary;
        health_check uri=/primary port=9630;
    }
}
```
