---
title: 监控告警
weight: 4550
description: JUICE 模块监控与指标说明。
icon: fa-solid fa-chart-line
module: [JUICE]
categories: [参考]
---

JuiceFS 实例通过 `juicefs mount --metrics` 暴露 Prometheus 指标。
在 JUICE 模块中，指标监听地址为 `0.0.0.0:<port>`，默认端口 `9567`。

--------

## 监控架构

```
JuiceFS Mount (metrics: 0.0.0.0:<port>)
    ↓
VictoriaMetrics (scrape)
    ↓
Grafana Dashboard
```

若已部署 [`INFRA`](/docs/infra)，`juice_register` 会自动写入抓取目标：

```
/infra/targets/juice/<hostname>.yml
```

--------

## 目标文件示例

```yaml
- labels: { ip: 10.10.10.10, ins: "node-jfs", cls: "jfs" }
  targets: [ 10.10.10.10:9567 ]
```

如需手动注册：

```bash
./juice.yml -l <host> -t juice_register
```

--------

## 关键指标

### 对象存储

| 指标 | 类型 | 说明 |
|:-----|:----:|:-----|
| `juicefs_object_request_durations_histogram_seconds` | histogram | 对象存储请求延迟 |
| `juicefs_object_request_errors` | counter | 对象存储错误数 |
{.full-width}

### 缓存

| 指标 | 类型 | 说明 |
|:-----|:----:|:-----|
| `juicefs_blockcache_hits` | counter | 缓存命中次数 |
| `juicefs_blockcache_miss` | counter | 缓存未命中次数 |
{.full-width}

### 元数据事务

| 指标 | 类型 | 说明 |
|:-----|:----:|:-----|
| `juicefs_transaction_durations_histogram_seconds` | histogram | 元数据事务延迟（直方图） |
| `juicefs_transaction_durations_histogram_seconds_count` | counter | 元数据事务请求计数 |
{.full-width}

--------

## 常用 PromQL

缓存命中率：

```promql
rate(juicefs_blockcache_hits[5m]) /
(rate(juicefs_blockcache_hits[5m]) + rate(juicefs_blockcache_miss[5m]))
```

对象存储 P99 延迟：

```promql
histogram_quantile(0.99, rate(juicefs_object_request_durations_histogram_seconds_bucket[5m]))
```
