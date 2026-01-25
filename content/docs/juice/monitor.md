---
title: 监控告警
weight: 4550
description: JuiceFS 文件系统的监控指标与 Grafana 仪表盘
icon: fa-solid fa-chart-line
module: [JUICE]
categories: [参考]
---


JuiceFS 每个实例会在配置的端口（默认 9567）暴露 Prometheus 格式的监控指标。


--------

## 监控架构

```
JuiceFS Instance (port: 9567)
    ↓ /metrics
VictoriaMetrics (scrape)
    ↓
Grafana Dashboard
```

Pigsty 会自动将 JuiceFS 实例注册到 VictoriaMetrics，目标文件位于：

```
/infra/targets/juice/<hostname>.yml
```


--------

## 关键指标

### 对象存储指标

| 指标                                                    | 类型        | 说明         |
|:------------------------------------------------------|:----------|:-----------|
| `juicefs_object_request_durations_histogram_seconds`  | histogram | 对象存储请求延迟分布 |
| `juicefs_object_request_data_bytes`                   | counter   | 对象存储数据传输量  |
| `juicefs_object_request_errors`                       | counter   | 对象存储请求错误数  |
{.full-width}

### 缓存指标

| 指标                            | 类型      | 说明      |
|:------------------------------|:--------|:--------|
| `juicefs_blockcache_hits`     | counter | 块缓存命中数  |
| `juicefs_blockcache_misses`   | counter | 块缓存未命中数 |
| `juicefs_blockcache_writes`   | counter | 块缓存写入数  |
| `juicefs_blockcache_drops`    | counter | 块缓存丢弃数  |
| `juicefs_blockcache_evictions`| counter | 块缓存淘汰数  |
| `juicefs_blockcache_hit_bytes`| counter | 缓存命中字节数 |
| `juicefs_blockcache_miss_bytes`| counter | 缓存未命中字节数|
{.full-width}

### 元数据指标

| 指标                                                  | 类型        | 说明          |
|:----------------------------------------------------|:----------|:------------|
| `juicefs_meta_ops_durations_histogram_seconds`      | histogram | 元数据操作延迟分布   |
| `juicefs_transaction_durations_histogram_seconds`   | histogram | 事务延迟分布      |
| `juicefs_transaction_restart`                       | counter   | 事务重试次数      |
{.full-width}

### FUSE 操作指标

| 指标                                                | 类型        | 说明           |
|:--------------------------------------------------|:----------|:-------------|
| `juicefs_fuse_ops_durations_histogram_seconds`    | histogram | FUSE 操作延迟分布  |
| `juicefs_fuse_read_size_bytes`                    | histogram | 读操作大小分布      |
| `juicefs_fuse_written_size_bytes`                 | histogram | 写操作大小分布      |
{.full-width}

### 文件系统指标

| 指标                       | 类型    | 说明        |
|:-------------------------|:------|:----------|
| `juicefs_used_space`     | gauge | 已使用空间（字节） |
| `juicefs_used_inodes`    | gauge | 已使用 inode |
{.full-width}


--------

## 常用 PromQL

### 缓存命中率

```promql
rate(juicefs_blockcache_hits[5m]) /
(rate(juicefs_blockcache_hits[5m]) + rate(juicefs_blockcache_misses[5m]))
```

### 对象存储 P99 延迟

```promql
histogram_quantile(0.99, rate(juicefs_object_request_durations_histogram_seconds_bucket[5m]))
```

### 元数据操作 P99 延迟

```promql
histogram_quantile(0.99, rate(juicefs_meta_ops_durations_histogram_seconds_bucket[5m]))
```

### 读写吞吐量

```promql
# 读吞吐
rate(juicefs_blockcache_hit_bytes[5m]) + rate(juicefs_blockcache_miss_bytes[5m])

# 写吞吐
rate(juicefs_fuse_written_size_bytes_sum[5m])
```


--------

## 指标采集配置

JuiceFS 实例注册到 VictoriaMetrics 的目标文件格式：

```yaml
# /infra/targets/juice/<hostname>.yml
- labels: { ip: 10.10.10.10, ins: "node-jfs", cls: "jfs" }
  targets: [ 10.10.10.10:9567 ]
```

如需手动重新注册，执行：

```bash
./juice.yml -l <ip> -t juice_register
```


