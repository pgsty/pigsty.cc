---
title: API 参考
weight: 5640
icon: fa-solid fa-plug
description: PG Exporter 的 HTTP API 端点参考
categories: [参考]
---

PG Exporter 提供全面的 REST API，用于指标采集、健康检查、流量路由和运维控制。所有端点都通过配置的端口（默认：9630）以 HTTP 方式暴露。


--------

## 端点概览

| 端点                     | 方法  | 描述              |
|------------------------|-----|-----------------|
| [`/metrics`](#metrics) | GET | Prometheus 指标端点 |
| [`/up`](#健康检查)         | GET | 基本存活检查          |
| [`/health`](#健康检查)     | GET | 详细健康状态          |
| [`/primary`](#流量路由)    | GET | 主库服务器检查         |
| [`/replica`](#流量路由)    | GET | 从库服务器检查         |
| [`/read`](#流量路由)       | GET | 读流量路由           |
| [`/reload`](#运维端点)     | GET | 重新加载配置          |
| [`/explain`](#运维端点)    | GET | 解释查询规划          |
| [`/stat`](#运维端点)       | GET | 运行时统计           |


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
# HELP pg_up PostgreSQL server is up and accepting connections
# TYPE pg_up gauge
pg_up 1

# HELP pg_version PostgreSQL server version number
# TYPE pg_version gauge
pg_version 140000

# HELP pg_in_recovery PostgreSQL server is in recovery mode
# TYPE pg_in_recovery gauge
pg_in_recovery 0

# HELP pg_exporter_build_info PG Exporter build information
# TYPE pg_exporter_build_info gauge
pg_exporter_build_info{version="1.1.0",branch="main",revision="abc123"} 1

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

简单的二元健康检查。

#### 响应码

| 状态码 | 状态 | 描述 |
|--------|------|------|
| 200 | OK | 导出器和数据库都正常运行 |
| 503 | Service Unavailable | 数据库宕机或无法访问 |

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

检查服务器是否为主库（master）实例。

#### 响应码

| 状态码 | 状态 | 描述 |
|--------|------|------|
| 200 | OK | 服务器是主库且接受写入 |
| 404 | Not Found | 服务器不是主库（是从库） |
| 503 | Service Unavailable | 服务器宕机 |

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

| 状态码 | 状态 | 描述 |
|--------|------|------|
| 200 | OK | 服务器是从库且处于恢复状态 |
| 404 | Not Found | 服务器不是从库（是主库） |
| 503 | Service Unavailable | 服务器宕机 |

#### 别名

- `/standby`
- `/slave`
- `/read-only`
- `/ro`

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

| 状态码 | 状态 | 描述 |
|--------|------|------|
| 200 | OK | 服务器正常运行且可以处理读请求 |
| 503 | Service Unavailable | 服务器宕机 |

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

### POST /reload

在不重启导出器的情况下重新加载配置。

#### 请求

```bash
curl -X POST http://localhost:9630/reload
```

#### 响应

```json
{
  "status": "success",
  "message": "Configuration reloaded successfully",
  "timestamp": "2024-01-15T10:30:00Z"
}
```

#### 响应码

| 状态码 | 状态                    | 描述       |
|-----|-----------------------|----------|
| 200 | OK                    | 配置重新加载成功 |
| 500 | Internal Server Error | 重新加载失败   |

#### 使用场景

- 更新采集器定义
- 更改查询参数
- 修改缓存 TTL 值
- 添加或移除采集器

{{% alert title="注意" color="info" %}}
配置重新加载不会影响数据库连接。要更改连接参数，需要重启导出器。
{{% /alert %}}

### GET /explain

显示所有已配置采集器的查询执行规划信息。

#### 请求

```bash
curl http://localhost:9630/explain
```

#### 响应

```text
Collector: pg_stat_database
  Query: SELECT datname, numbackends FROM pg_stat_database
  Tags: [cluster]
  TTL: 10s
  Timeout: 100ms
  Version: 100000-999999
  Status: Active

Collector: pg_stat_replication
  Query: SELECT client_addr, state FROM pg_stat_replication
  Tags: [primary]
  TTL: 5s
  Timeout: 100ms
  Version: 100000-999999
  Status: Active (primary only)

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
Collector Statistics:
  pg_stat_database:
    Executions: 1234
    Successes: 1230
    Failures: 4
    Avg Duration: 2.5ms
    Last Execution: 2024-01-15T10:29:55Z

  pg_stat_activity:
    Executions: 1234
    Successes: 1234
    Failures: 0
    Avg Duration: 1.2ms
    Last Execution: 2024-01-15T10:29:55Z
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
