---
title: 主动故障检测
weight: 20
description: 主动故障检测（Patroni 存活，PG 宕机）场景下的 RTO 计算逻辑与结果分析
icon: fa-solid fa-bell
module: [PGSQL]
categories: [概念]
---

Pigsty 提供了四种 RTO 配置策略，下面是对三类故障场景下，不同 RTO 模式的最差，最优，平均 RTO 的计算逻辑与结果分析。


------

## RTO 计算


--------

## 主动检测

**PG 崩溃场景（主动检测）RTO 对比**

|    模式    | 最好 RTO | 平均 RTO | 最坏 RTO |
|:--------:|:------:|:------:|:------:|
| **fast** |   7s   |  12s   |  19s   |
| **norm** |  18s   |  23s   |  31s   |
| **safe** |  63s   |  73s   |  88s   |
| **wide** |  127s  |  158s  |  198s  |
{.full-width}

{{< echarts height="480px" >}}
{
  "title": { "text": "主动检测（PG 崩溃）RTO 分布", "left": "center" },
  "tooltip": { "trigger": "axis", "axisPointer": { "type": "shadow" } },
  "legend": { "bottom": 0 },
  "grid": { "left": 80, "right": 50, "bottom": 50, "top": 40 },
  "xAxis": { "type": "value", "name": "秒", "nameLocation": "end", "max": 210 },
  "yAxis": {
    "type": "category",
    "name": "RTO 模式",
    "nameLocation": "start",
    "nameGap": 50,
    "data": ["wide-max", "wide-avg", "wide-min", "", "safe-max", "safe-avg", "safe-min", "", "norm-max", "norm-avg", "norm-min", "", "fast-max", "fast-avg", "fast-min"],
    "axisLabel": { "fontSize": 11 }
  },
  "series": [
    {
      "name": "Patroni 检测",
      "type": "bar",
      "stack": "total",
      "emphasis": { "focus": "series" },
      "itemStyle": { "color": "#dc3545" },
      "data": [30, 15, 0, "-", 10, 5, 0, "-", 5, 3, 0, "-", 5, 3, 0]
    },
    {
      "name": "尝试重启",
      "type": "bar",
      "stack": "total",
      "emphasis": { "focus": "series" },
      "itemStyle": { "color": "#e83e8c" },
      "data": [120, 120, 120, "-", 60, 60, 60, "-", 15, 15, 15, "-", 5, 5, 5]
    },
    {
      "name": "从库检测", "type": "bar", "stack": "total", "emphasis": { "focus": "series" }, "itemStyle": { "color": "#fd7e14" },
      "data": [30, 15, 0, "-", 10, 5, 0, "-", 5, 3, 0, "-", 5, 3, 0]
    },
    {
      "name": "竞争锁", "type": "bar", "stack": "total", "emphasis": { "focus": "series" }, "itemStyle": { "color": "#ffc107" },
      "data": [2, 1, 1, "-", 1, 1, 0, "-", 1, 0, 0, "-", 1, 0, 0]
    },
    {
      "name": "Promote", "type": "bar", "stack": "total", "emphasis": { "focus": "series" }, "itemStyle": { "color": "#20c997" },
      "data": [1, 1, 1, "-", 1, 1, 1, "-", 1, 1, 1, "-", 1, 1, 1]
    },
    {
      "name": "HAProxy UP", "type": "bar", "stack": "total", "emphasis": { "focus": "series" },
      "itemStyle": { "color": "#0d6efd" },
      "data": [15, 6, 6, "-", 6, 2, 2, "-", 4, 2, 2, "-", 2, 1, 1]
    }
  ]
}
{{< /echarts >}}

### 故障路径

{{< infographic >}}
```
infographic list-row-simple-horizontal-arrow
data
  title 主动故障检测流程
  desc PG 崩溃场景下的 RTO 时序
  items
    - label PG 崩溃
      desc PostgreSQL 进程崩溃
      icon mingcute/close-circle-fill
    - label Patroni 检测
      desc 检测到 PG 故障
      icon mingcute/search-fill
    - label 尝试重启
      desc 等待本地恢复
      icon mingcute/refresh-2-fill
    - label 释放锁
      desc 超时后释放锁
      icon mingcute/key-2-fill
    - label 从库检测
      desc 检测到锁释放
      icon mingcute/radar-fill
    - label Promote
      desc 竞争锁并提升
      icon mingcute/arrow-up-circle-fill
    - label HAProxy UP
      desc 检测新主上线
      icon mingcute/check-circle-fill
theme light
  palette antv
```
{{< /infographic >}}





> **注意**：HAProxy 检测旧主 DOWN 与 Patroni 流程**并行**执行，在 promote 完成前早已完成，**不计入 RTO**。

**RTO 计算公式**：

```
RTO = loop_wait + primary_start_timeout + loop_wait + 选举 + HAProxy新主UP
    = 2 × loop_wait + primary_start_timeout + 选举 + HAProxy新主UP
```

**RTO 构成分析**

```
RTO = 2 × loop_wait + primary_start_timeout + 选举(~1s) + HAProxy新主UP
      \_________/   \__________________/
       可变成本           固定成本
```

- **固定成本**：`primary_start_timeout` 是最大的固定成本，占 RTO 的 27%~96%
- **可变成本**：主要来自 `2 × loop_wait`（主库检测 + 从库检测），最坏情况两者都是满值
- **HAProxy 延迟**：仅计算 `rise × fastinter`（新主上线检测），约 1~15s
- **HAProxy 旧主 DOWN**：与 Patroni 流程**并行**执行，在 promote 完成前早已完成，**不计入 RTO**

**与被动检测（节点宕机/网络分区）的差异**：节点宕机时 Patroni 也死了，无法主动释放锁，只能等 TTL 过期被动触发。
而 PG 崩溃时 Patroni 还活着，会主动尝试恢复 PG，`primary_start_timeout` 决定了等待多久才放弃。



------

### fast 模式

#### 最好结果

**参数**: loop_wait=5, primary_start_timeout=5, inter=1s, fastinter=500ms, rise=2, fall=2

| 阶段     | 操作                 |      耗时 | 说明                         |
|:-------|:-------------------|---------:|:---------------------------|
| 1      | Patroni 检测到 PG 崩溃  |       0s | PG 恰好在 HA loop 检查时崩溃       |
| 2      | Patroni 尝试重启 PG    |       5s | primary_start_timeout 固定等待 |
| 3      | 释放 Leader 锁        |       0s | 超时后立即释放                    |
| 4      | 从库检测到 Leader 锁释放   |       0s | 从库恰好在 HA loop 检查点          |
| 5      | 从库竞争 Leader 锁      |       0s | DCS 单次写操作                  |
| 6      | 执行 pg_ctl promote  |       1s | WAL 已同步，promote 快速完成       |
| 7      | HAProxy 检测新主 UP    |       1s | rise=2 × fastinter=500ms   |
| **总计** |                    |   **7s** |                            |
{.full-width}

#### 最坏结果

| 阶段     | 操作                 |       耗时 | 说明                             |
|:-------|:-------------------|----------:|:-------------------------------|
| 1      | Patroni 检测到 PG 崩溃  |        5s | PG 恰好在 HA loop 刚结束时崩溃          |
| 2      | Patroni 尝试重启 PG    |        5s | primary_start_timeout 固定等待     |
| 3      | 释放 Leader 锁        |        0s | 超时后立即释放                        |
| 4      | 从库检测到 Leader 锁释放   |        5s | 从库 HA loop 恰好错过                |
| 5      | 从库竞争 Leader 锁      |        1s | DCS 操作 + 网络延迟                  |
| 6      | 执行 pg_ctl promote  |        1s | promote + 少量 WAL 回放            |
| 7      | HAProxy 检测新主 UP    |        2s | rise=2 × inter=1s（从 DOWN 状态开始） |
| **总计** |                    |   **19s** |                                |
{.full-width}

#### 平均结果

| 阶段     | 操作                 |      耗时 | 说明                       |
|:-------|:-------------------|---------:|:-------------------------|
| 1      | Patroni 检测到 PG 崩溃  |       3s | loop_wait/2              |
| 2      | Patroni 尝试重启 PG    |       5s | primary_start_timeout 固定 |
| 3      | 释放 Leader 锁        |       0s | 超时后立即释放                  |
| 4      | 从库检测到 Leader 锁释放   |       3s | loop_wait/2              |
| 5      | 从库竞争 Leader 锁      |       0s | DCS 操作平均延迟               |
| 6      | 执行 pg_ctl promote  |       1s | promote 平均时间             |
| 7      | HAProxy 检测新主 UP    |       1s | rise=2 × fastinter       |
| **总计** |                    |  **12s** |                          |
{.full-width}

#### 小结

| 阶段 | 操作                 |      最好 |      平均 |       最坏 |
|:--:|:-------------------|---------:|---------:|----------:|
| 1  | Patroni 检测到 PG 崩溃  |       0s |       3s |        5s |
| 2  | Patroni 尝试重启 PG    |       5s |       5s |        5s |
| 3  | 释放 Leader 锁        |       0s |       0s |        0s |
| 4  | 从库检测到 Leader 锁释放   |       0s |       3s |        5s |
| 5  | 从库竞争 Leader 锁      |       0s |       0s |        1s |
| 6  | 执行 pg_ctl promote  |       1s |       1s |        1s |
| 7  | HAProxy 检测新主 UP    |       1s |       1s |        2s |
|    | **总计**             |   **7s** |  **12s** |   **19s** |
{.full-width}

fast 模式下 PG 崩溃场景 RTO 范围为 **7s ~ 19s**，平均约 **12s**。`primary_start_timeout=5s` 是固定成本，两个 `loop_wait` 周期（0~10s）是主要变量。此配置适合同机房低延迟环境，能快速完成故障切换。

------

### norm 模式

**参数**: loop_wait=5, primary_start_timeout=15, inter=2s, fastinter=1s, rise=2, fall=3

#### 最好结果

| 阶段     | 操作                 |       耗时 | 说明                          |
|:-------|:-------------------|----------:|:----------------------------|
| 1      | Patroni 检测到 PG 崩溃  |        0s | PG 恰好在 HA loop 检查时崩溃        |
| 2      | Patroni 尝试重启 PG    |       15s | primary_start_timeout 固定等待  |
| 3      | 释放 Leader 锁        |        0s | 超时后立即释放                     |
| 4      | 从库检测到 Leader 锁释放   |        0s | 从库恰好在 HA loop 检查点           |
| 5      | 从库竞争 Leader 锁      |        0s | DCS 单次写操作                   |
| 6      | 执行 pg_ctl promote  |        1s | WAL 已同步，promote 快速完成        |
| 7      | HAProxy 检测新主 UP    |        2s | rise=2 × fastinter=1s       |
| **总计** |                    |   **18s** |                             |
{.full-width}

#### 最坏结果

| 阶段     | 操作                 |       耗时 | 说明                             |
|:-------|:-------------------|----------:|:-------------------------------|
| 1      | Patroni 检测到 PG 崩溃  |        5s | PG 恰好在 HA loop 刚结束时崩溃          |
| 2      | Patroni 尝试重启 PG    |       15s | primary_start_timeout 固定等待     |
| 3      | 释放 Leader 锁        |        0s | 超时后立即释放                        |
| 4      | 从库检测到 Leader 锁释放   |        5s | 从库 HA loop 恰好错过                |
| 5      | 从库竞争 Leader 锁      |        1s | DCS 操作 + 网络延迟                  |
| 6      | 执行 pg_ctl promote  |        1s | promote + 少量 WAL 回放            |
| 7      | HAProxy 检测新主 UP    |        4s | rise=2 × inter=2s（从 DOWN 状态开始） |
| **总计** |                    |   **31s** |                                |
{.full-width}

#### 平均结果

| 阶段     | 操作                 |       耗时 | 说明                       |
|:-------|:-------------------|---------:|:-------------------------|
| 1      | Patroni 检测到 PG 崩溃  |       3s | loop_wait/2              |
| 2      | Patroni 尝试重启 PG    |      15s | primary_start_timeout 固定 |
| 3      | 释放 Leader 锁        |       0s | 超时后立即释放                  |
| 4      | 从库检测到 Leader 锁释放   |       3s | loop_wait/2              |
| 5      | 从库竞争 Leader 锁      |       0s | DCS 操作平均延迟               |
| 6      | 执行 pg_ctl promote  |       1s | promote 平均时间             |
| 7      | HAProxy 检测新主 UP    |       2s | rise=2 × fastinter=1s    |
| **总计** |                    |  **23s** |                          |
{.full-width}

#### 小结

| 阶段 | 操作                 |       最好 |       平均 |       最坏 |
|:--:|:-------------------|----------:|---------:|----------:|
| 1  | Patroni 检测到 PG 崩溃  |        0s |       3s |        5s |
| 2  | Patroni 尝试重启 PG    |       15s |      15s |       15s |
| 3  | 释放 Leader 锁        |        0s |       0s |        0s |
| 4  | 从库检测到 Leader 锁释放   |        0s |       3s |        5s |
| 5  | 从库竞争 Leader 锁      |        0s |       0s |        1s |
| 6  | 执行 pg_ctl promote  |        1s |       1s |        1s |
| 7  | HAProxy 检测新主 UP    |        2s |       2s |        4s |
|    | **总计**             |   **18s** |  **23s** |   **31s** |
{.full-width}

norm 模式下 PG 崩溃场景 RTO 范围为 **18s ~ 31s**，平均约 **23s**。`primary_start_timeout=15s` 给了 PG 一定的本地恢复机会（如 crash recovery），同时保持了合理的 RTO。这是生产环境的推荐配置，平衡了故障恢复速度和误判风险。

------

### safe 模式

**参数**: loop_wait=10, primary_start_timeout=60, inter=3s, fastinter=1s, rise=2, fall=3

#### 最好结果

| 阶段     | 操作                 |       耗时 | 说明                          |
|:-------|:-------------------|---------:|:----------------------------|
| 1      | Patroni 检测到 PG 崩溃  |       0s | PG 恰好在 HA loop 检查时崩溃        |
| 2      | Patroni 尝试重启 PG    |      60s | primary_start_timeout 固定等待  |
| 3      | 释放 Leader 锁        |       0s | 超时后立即释放                     |
| 4      | 从库检测到 Leader 锁释放   |       0s | 从库恰好在 HA loop 检查点           |
| 5      | 从库竞争 Leader 锁      |       0s | DCS 单次写操作                   |
| 6      | 执行 pg_ctl promote  |       1s | WAL 已同步，promote 快速完成        |
| 7      | HAProxy 检测新主 UP    |       2s | rise=2 × fastinter=1s       |
| **总计** |                    |  **63s** |                             |
{.full-width}

#### 最坏结果

| 阶段     | 操作                 |       耗时 | 说明                             |
|:-------|:-------------------|---------:|:-------------------------------|
| 1      | Patroni 检测到 PG 崩溃  |      10s | PG 恰好在 HA loop 刚结束时崩溃          |
| 2      | Patroni 尝试重启 PG    |      60s | primary_start_timeout 固定等待     |
| 3      | 释放 Leader 锁        |       0s | 超时后立即释放                        |
| 4      | 从库检测到 Leader 锁释放   |      10s | 从库 HA loop 恰好错过                |
| 5      | 从库竞争 Leader 锁      |       1s | DCS 操作 + 网络延迟                  |
| 6      | 执行 pg_ctl promote  |       1s | promote + 少量 WAL 回放            |
| 7      | HAProxy 检测新主 UP    |       6s | rise=2 × inter=3s（从 DOWN 状态开始） |
| **总计** |                    |  **88s** |                                |
{.full-width}

#### 平均结果

| 阶段     | 操作                 |       耗时 | 说明                       |
|:-------|:-------------------|---------:|:-------------------------|
| 1      | Patroni 检测到 PG 崩溃  |       5s | loop_wait/2              |
| 2      | Patroni 尝试重启 PG    |      60s | primary_start_timeout 固定 |
| 3      | 释放 Leader 锁        |       0s | 超时后立即释放                  |
| 4      | 从库检测到 Leader 锁释放   |       5s | loop_wait/2              |
| 5      | 从库竞争 Leader 锁      |       1s | DCS 操作平均延迟               |
| 6      | 执行 pg_ctl promote  |       1s | promote 平均时间             |
| 7      | HAProxy 检测新主 UP    |       2s | rise=2 × fastinter=1s    |
| **总计** |                    |  **73s** |                          |
{.full-width}

#### 小结

| 阶段 | 操作                 |       最好 |       平均 |       最坏 |
|:--:|:-------------------|---------:|----------:|---------:|
| 1  | Patroni 检测到 PG 崩溃  |       0s |        5s |      10s |
| 2  | Patroni 尝试重启 PG    |      60s |       60s |      60s |
| 3  | 释放 Leader 锁        |       0s |        0s |       0s |
| 4  | 从库检测到 Leader 锁释放   |       0s |        5s |      10s |
| 5  | 从库竞争 Leader 锁      |       0s |        1s |       1s |
| 6  | 执行 pg_ctl promote  |       1s |        1s |       1s |
| 7  | HAProxy 检测新主 UP    |       2s |        2s |       6s |
|    | **总计**             |  **63s** |   **73s** |  **88s** |
{.full-width}

safe 模式下 PG 崩溃场景 RTO 范围为 **63s ~ 88s**，平均约 **73s**。`primary_start_timeout=60s` 给大型数据库充足的 crash recovery 时间，降低不必要的 failover。此配置适合数据安全性要求极高、可容忍分钟级中断的场景。

------

### wide 模式

**参数**: loop_wait=30, primary_start_timeout=120, inter=5s, fastinter=2s, rise=3, fall=5

#### 最好结果

| 阶段     | 操作                 |        耗时 | 说明                          |
|:-------|:-------------------|---------:|:----------------------------|
| 1      | Patroni 检测到 PG 崩溃  |       0s | PG 恰好在 HA loop 检查时崩溃        |
| 2      | Patroni 尝试重启 PG    |     120s | primary_start_timeout 固定等待  |
| 3      | 释放 Leader 锁        |       0s | 超时后立即释放                     |
| 4      | 从库检测到 Leader 锁释放   |       0s | 从库恰好在 HA loop 检查点           |
| 5      | 从库竞争 Leader 锁      |       1s | DCS 单次写操作（广域网延迟）            |
| 6      | 执行 pg_ctl promote  |       1s | WAL 已同步，promote 快速完成        |
| 7      | HAProxy 检测新主 UP    |       6s | rise=3 × fastinter=2s       |
| **总计** |                    | **127s** |                             |
{.full-width}

#### 最坏结果

| 阶段     | 操作                 |        耗时 | 说明                             |
|:-------|:-------------------|---------:|:-------------------------------|
| 1      | Patroni 检测到 PG 崩溃  |      30s | PG 恰好在 HA loop 刚结束时崩溃          |
| 2      | Patroni 尝试重启 PG    |     120s | primary_start_timeout 固定等待     |
| 3      | 释放 Leader 锁        |       0s | 超时后立即释放                        |
| 4      | 从库检测到 Leader 锁释放   |      30s | 从库 HA loop 恰好错过                |
| 5      | 从库竞争 Leader 锁      |       2s | DCS 操作 + 广域网延迟                 |
| 6      | 执行 pg_ctl promote  |       1s | promote + 少量 WAL 回放            |
| 7      | HAProxy 检测新主 UP    |      15s | rise=3 × inter=5s（从 DOWN 状态开始） |
| **总计** |                    | **198s** |                                |
{.full-width}

#### 平均结果

| 阶段     | 操作                 |        耗时 | 说明                       |
|:-------|:-------------------|---------:|:-------------------------|
| 1      | Patroni 检测到 PG 崩溃  |      15s | loop_wait/2              |
| 2      | Patroni 尝试重启 PG    |     120s | primary_start_timeout 固定 |
| 3      | 释放 Leader 锁        |       0s | 超时后立即释放                  |
| 4      | 从库检测到 Leader 锁释放   |      15s | loop_wait/2              |
| 5      | 从库竞争 Leader 锁      |       1s | DCS 操作平均延迟               |
| 6      | 执行 pg_ctl promote  |       1s | promote 平均时间             |
| 7      | HAProxy 检测新主 UP    |       6s | rise=3 × fastinter=2s    |
| **总计** |                    | **158s** |                          |
{.full-width}

#### 小结

| 阶段 | 操作                 |        最好 |        平均 |        最坏 |
|:--:|:-------------------|---------:|-----------:|---------:|
| 1  | Patroni 检测到 PG 崩溃  |       0s |        15s |      30s |
| 2  | Patroni 尝试重启 PG    |     120s |       120s |     120s |
| 3  | 释放 Leader 锁        |       0s |         0s |       0s |
| 4  | 从库检测到 Leader 锁释放   |       0s |        15s |      30s |
| 5  | 从库竞争 Leader 锁      |       1s |         1s |       2s |
| 6  | 执行 pg_ctl promote  |       1s |         1s |       1s |
| 7  | HAProxy 检测新主 UP    |       6s |         6s |      15s |
|    | **总计**             | **127s** |   **158s** | **198s** |
{.full-width}

wide 模式下 PG 崩溃场景 RTO 范围为 **127s ~ 198s**（约 2~3 分钟），平均约 **158s**（约 3 分钟）。`primary_start_timeout=120s` 和 `loop_wait=30s` 提供极强的容错能力，适合广域网/跨数据中心部署。此配置优先保证不误判，代价是故障切换时间较长。







--------

## 被动探测



## 手动触发
