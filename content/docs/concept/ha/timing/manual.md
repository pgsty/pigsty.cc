---
title: 人工故障切换
weight: 30
description: 人工触发 Failover / Switchover 下的的 RTO 计算逻辑与结果分析。
icon: fa-regular fa-circle-dot
module: [PGSQL]
categories: [概念]
---

**Switchover / Failover 场景（人工触发）RTO 对比**

|    模式    | Switchover 平均 | Switchover 最坏 | Failover 平均 | Failover 最坏 |
|:--------:|:-------------:|:-------------:|:-----------:|:-----------:|
| **fast** |      2s       |      5s       |     2s      |     4s      |
| **norm** |      4s       |      8s       |     3s      |     6s      |
| **safe** |      4s       |      10s      |     3s      |     8s      |
| **wide** |      9s       |      21s      |     9s      |     17s     |
{.full-width}

{{< echarts height="480px" >}}
{
  "title": { "text": "Switchover（计划内切换）RTO 分布", "left": "center" },
  "tooltip": { "trigger": "axis", "axisPointer": { "type": "shadow" } },
  "legend": { "bottom": 0 },
  "grid": { "left": 80, "right": 50, "bottom": 50, "top": 40 },
  "xAxis": { "type": "value", "name": "秒", "nameLocation": "end", "max": 25 },
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
      "name": "WAL 追平",
      "type": "bar",
      "stack": "total",
      "emphasis": { "focus": "series" },
      "itemStyle": { "color": "#dc3545" },
      "data": [3, 1, 0, "-", 2, 1, 0, "-", 2, 1, 0, "-", 1, 0, 0]
    },
    {
      "name": "释放锁",
      "type": "bar",
      "stack": "total",
      "emphasis": { "focus": "series" },
      "itemStyle": { "color": "#fd7e14" },
      "data": [2, 1, 1, "-", 1, 0, 0, "-", 1, 0, 0, "-", 1, 0, 0]
    },
    {
      "name": "获取锁",
      "type": "bar",
      "stack": "total",
      "emphasis": { "focus": "series" },
      "itemStyle": { "color": "#ffc107" },
      "data": [1, 1, 1, "-", 1, 0, 0, "-", 1, 0, 0, "-", 1, 0, 0]
    },
    {
      "name": "Promote",
      "type": "bar",
      "stack": "total",
      "emphasis": { "focus": "series" },
      "itemStyle": { "color": "#20c997" },
      "data": [1, 1, 1, "-", 1, 1, 1, "-", 1, 1, 1, "-", 1, 1, 1]
    },
    {
      "name": "HAProxy UP",
      "type": "bar",
      "stack": "total",
      "emphasis": { "focus": "series" },
      "itemStyle": { "color": "#0d6efd" },
      "data": [15, 6, 6, "-", 6, 2, 2, "-", 4, 2, 2, "-", 2, 1, 1]
    }
  ]
}
{{< /echarts >}}

{{< echarts height="480px" >}}
{
  "title": { "text": "Failover（强制切换）RTO 分布", "left": "center" },
  "tooltip": { "trigger": "axis", "axisPointer": { "type": "shadow" } },
  "legend": { "bottom": 0 },
  "grid": { "left": 80, "right": 50, "bottom": 50, "top": 40 },
  "xAxis": { "type": "value", "name": "秒", "nameLocation": "end", "max": 20 },
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
      "name": "验证从库",
      "type": "bar",
      "stack": "total",
      "emphasis": { "focus": "series" },
      "itemStyle": { "color": "#fd7e14" },
      "data": [1, 1, 1, "-", 1, 0, 0, "-", 1, 0, 0, "-", 1, 0, 0]
    },
    {
      "name": "获取锁",
      "type": "bar",
      "stack": "total",
      "emphasis": { "focus": "series" },
      "itemStyle": { "color": "#ffc107" },
      "data": [2, 1, 1, "-", 1, 0, 0, "-", 1, 0, 0, "-", 1, 0, 0]
    },
    {
      "name": "Promote",
      "type": "bar",
      "stack": "total",
      "emphasis": { "focus": "series" },
      "itemStyle": { "color": "#20c997" },
      "data": [1, 1, 1, "-", 1, 1, 1, "-", 1, 1, 1, "-", 1, 1, 1]
    },
    {
      "name": "HAProxy UP",
      "type": "bar",
      "stack": "total",
      "emphasis": { "focus": "series" },
      "itemStyle": { "color": "#0d6efd" },
      "data": [15, 6, 6, "-", 6, 2, 2, "-", 4, 2, 2, "-", 2, 1, 1]
    }
  ]
}
{{< /echarts >}}

------

## Switchover（计划内优雅切换）

### 故障路径

**准备阶段**（老主库仍可用，不计入 RTO）：

{{< infographic height="160px" >}}
```
infographic list-row-simple-horizontal-arrow
data
  title Switchover 准备阶段
  desc 老主库仍可用，不计入 RTO
  items
    - label 执行 Switchover
      desc patronictl switchover
      icon mingcute/play-circle-fill
    - label 验证从库
      desc 检查健康状态
      icon mingcute/search-fill
    - label CHECKPOINT
      desc 主库刷脏页
      icon mingcute/save-fill
theme light
  palette antv
```
{{< /infographic >}}

**RTO 计时阶段**（服务不可用）：

{{< infographic height="200px" >}}
```
infographic list-row-simple-horizontal-arrow
data
  title Switchover RTO 阶段
  desc 服务不可用时段
  items
    - label 停止写入
      desc demote，RTO 开始
      icon mingcute/stop-circle-fill
    - label WAL 追平
      desc 等待从库同步
      icon mingcute/time-fill
    - label 释放锁
      desc 主库释放 Leader 锁
      icon mingcute/key-2-fill
    - label 获取锁
      desc 从库获取 Leader 锁
      icon mingcute/key-1-fill
    - label Promote
      desc pg_ctl promote
      icon mingcute/arrow-up-circle-fill
    - label HAProxy UP
      desc RTO 结束
      icon mingcute/check-circle-fill
theme light
  palette antv
```
{{< /infographic >}}

**RTO 计算公式**：

```
RTO = WAL追平 + 锁切换 + promote + HAProxy_UP
```

**RTO 构成分析**

```
RTO = WAL追平 + 锁释放(~0.3s) + 锁获取(~0.2s) + promote(~0.5s) + HAProxy_UP
      \______/
      同步复制时为0
```

- **WAL 追平**：同步复制模式下为 0（已实时同步）；异步复制时取决于复制延迟
- **锁切换**：DCS 两次原子操作（释放 + 获取），约 0.3~1s
- **HAProxy 延迟**：`rise × fastinter`

**与 Failover 的差异**

| 对比项   | Switchover             | Failover             |
| :------- | :--------------------- | :------------------- |
| WAL 追平 | ✅ 等待（保证数据完整） | ❌ 跳过（可能丢数据） |
| 其他阶段 | 相同                   | 相同                 |
{.full-width}

------

### fast 模式

**参数**: inter=1s, fastinter=500ms, rise=2

#### 最好结果

| 阶段     | 操作                   |     耗时 | 说明                     |
| :------- | :--------------------- | -------: | :----------------------- |
| 1        | 主库停止接受写入       |       0s | 即时生效                 |
| 2        | 等待从库 WAL 追平      |       0s | 同步复制，已完全同步     |
| 3        | 主库释放 Leader 锁     |       0s | DCS 原子操作             |
| 4        | 目标从库获取 Leader 锁 |       0s | DCS 原子操作             |
| 5        | 执行 pg_ctl promote    |       1s | promote 快速完成         |
| 6        | HAProxy 检测新主 UP    |       1s | rise=2 × fastinter=500ms |
| **总计** |                        |   **2s** |                          |
{.full-width}

#### 最坏结果

| 阶段     | 操作                   |   耗时 | 说明                            |
| :------- | :--------------------- | -----: | :------------------------------ |
| 1        | 主库停止接受写入       |     0s | 即时生效                        |
| 2        | 等待从库 WAL 追平      |     1s | 异步复制，存在少量延迟          |
| 3        | 主库释放 Leader 锁     |     1s | DCS 操作 + 网络延迟             |
| 4        | 目标从库获取 Leader 锁 |     1s | DCS 操作 + 网络延迟             |
| 5        | 执行 pg_ctl promote    |     1s | promote + 少量 WAL 回放         |
| 6        | HAProxy 检测新主 UP    |     2s | rise=2 × inter=1s（从DOWN开始） |
| **总计** |                        | **5s** |                                 |
{.full-width}

#### 平均结果

| 阶段     | 操作                   |     耗时 | 说明               |
| :------- | :--------------------- | -------: | :----------------- |
| 1        | 主库停止接受写入       |       0s | 即时生效           |
| 2        | 等待从库 WAL 追平      |       0s | 少量复制延迟       |
| 3        | 主库释放 Leader 锁     |       0s | DCS 原子操作       |
| 4        | 目标从库获取 Leader 锁 |       0s | DCS 原子操作       |
| 5        | 执行 pg_ctl promote    |       1s | promote 平均时间   |
| 6        | HAProxy 检测新主 UP    |       1s | rise=2 × fastinter |
| **总计** |                        |   **2s** |                    |
{.full-width}

#### 小结

| 阶段 | 操作                   |     最好 |     平均 |   最坏 |
| :--: | :--------------------- | -------: | -------: | -----: |
|  1   | 主库停止接受写入       |       0s |       0s |     0s |
|  2   | 等待从库 WAL 追平      |       0s |       0s |     1s |
|  3   | 主库释放 Leader 锁     |       0s |       0s |     1s |
|  4   | 目标从库获取 Leader 锁 |       0s |       0s |     1s |
|  5   | 执行 pg_ctl promote    |       1s |       1s |     1s |
|  6   | HAProxy 检测新主 UP    |       1s |       1s |     2s |
|      | **总计**               |   **2s** |   **2s** | **5s** |
{.full-width}

------

### norm 模式

**参数**: inter=2s, fastinter=1s, rise=2

#### 最好结果

| 阶段     | 操作                   |     耗时 | 说明                  |
| :------- | :--------------------- | -------: | :-------------------- |
| 1        | 主库停止接受写入       |       0s | 即时生效              |
| 2        | 等待从库 WAL 追平      |       0s | 同步复制，已完全同步  |
| 3        | 主库释放 Leader 锁     |       0s | DCS 原子操作          |
| 4        | 目标从库获取 Leader 锁 |       0s | DCS 原子操作          |
| 5        | 执行 pg_ctl promote    |       1s | promote 快速完成      |
| 6        | HAProxy 检测新主 UP    |       2s | rise=2 × fastinter=1s |
| **总计** |                        |   **3s** |                       |
{.full-width}

#### 最坏结果

| 阶段     | 操作                   |   耗时 | 说明                            |
| :------- | :--------------------- | -----: | :------------------------------ |
| 1        | 主库停止接受写入       |     0s | 即时生效                        |
| 2        | 等待从库 WAL 追平      |     2s | 异步复制，存在复制延迟          |
| 3        | 主库释放 Leader 锁     |     1s | DCS 操作 + 网络延迟             |
| 4        | 目标从库获取 Leader 锁 |     1s | DCS 操作 + 网络延迟             |
| 5        | 执行 pg_ctl promote    |     1s | promote + 少量 WAL 回放         |
| 6        | HAProxy 检测新主 UP    |     4s | rise=2 × inter=2s（从DOWN开始） |
| **总计** |                        | **8s** |                                 |
{.full-width}

#### 平均结果

| 阶段     | 操作                   |     耗时 | 说明                  |
| :------- | :--------------------- | -------: | :-------------------- |
| 1        | 主库停止接受写入       |       0s | 即时生效              |
| 2        | 等待从库 WAL 追平      |       1s | 少量复制延迟          |
| 3        | 主库释放 Leader 锁     |       0s | DCS 原子操作          |
| 4        | 目标从库获取 Leader 锁 |       0s | DCS 原子操作          |
| 5        | 执行 pg_ctl promote    |       1s | promote 平均时间      |
| 6        | HAProxy 检测新主 UP    |       2s | rise=2 × fastinter=1s |
| **总计** |                        |   **4s** |                       |
{.full-width}

#### 小结

| 阶段 | 操作                   |     最好 |     平均 |   最坏 |
| :--: | :--------------------- | -------: | -------: | -----: |
|  1   | 主库停止接受写入       |       0s |       0s |     0s |
|  2   | 等待从库 WAL 追平      |       0s |       1s |     2s |
|  3   | 主库释放 Leader 锁     |       0s |       0s |     1s |
|  4   | 目标从库获取 Leader 锁 |       0s |       0s |     1s |
|  5   | 执行 pg_ctl promote    |       1s |       1s |     1s |
|  6   | HAProxy 检测新主 UP    |       2s |       2s |     4s |
|      | **总计**               |   **3s** |   **4s** | **8s** |
{.full-width}

------

### safe 模式

**参数**: inter=3s, fastinter=1s, rise=2

#### 最好结果

| 阶段     | 操作                   |   耗时 | 说明                  |
| :------- | :--------------------- | -----: | :-------------------- |
| 1        | 主库停止接受写入       |     0s | 即时生效              |
| 2        | 等待从库 WAL 追平      |     0s | 同步复制，已完全同步  |
| 3        | 主库释放 Leader 锁     |     0s | DCS 原子操作          |
| 4        | 目标从库获取 Leader 锁 |     0s | DCS 原子操作          |
| 5        | 执行 pg_ctl promote    |     1s | promote 快速完成      |
| 6        | HAProxy 检测新主 UP    |     2s | rise=2 × fastinter=1s |
| **总计** |                        | **3s** |                       |
{.full-width}

#### 最坏结果

| 阶段     | 操作                   |    耗时 | 说明                            |
| :------- | :--------------------- | ------: | :------------------------------ |
| 1        | 主库停止接受写入       |      0s | 即时生效                        |
| 2        | 等待从库 WAL 追平      |      2s | 异步复制，存在复制延迟          |
| 3        | 主库释放 Leader 锁     |      1s | DCS 操作 + 网络延迟             |
| 4        | 目标从库获取 Leader 锁 |      1s | DCS 操作 + 网络延迟             |
| 5        | 执行 pg_ctl promote    |      1s | promote + 少量 WAL 回放         |
| 6        | HAProxy 检测新主 UP    |      6s | rise=2 × inter=3s（从DOWN开始） |
| **总计** |                        | **10s** |                                 |
{.full-width}

#### 平均结果

| 阶段     | 操作                   |     耗时 | 说明                  |
| :------- | :--------------------- | -------: | :-------------------- |
| 1        | 主库停止接受写入       |       0s | 即时生效              |
| 2        | 等待从库 WAL 追平      |       1s | 少量复制延迟          |
| 3        | 主库释放 Leader 锁     |       0s | DCS 原子操作          |
| 4        | 目标从库获取 Leader 锁 |       0s | DCS 原子操作          |
| 5        | 执行 pg_ctl promote    |       1s | promote 平均时间      |
| 6        | HAProxy 检测新主 UP    |       2s | rise=2 × fastinter=1s |
| **总计** |                        |   **4s** |                       |
{.full-width}

#### 小结

| 阶段 | 操作                   |   最好 |     平均 |    最坏 |
| :--: | :--------------------- | -----: | -------: | ------: |
|  1   | 主库停止接受写入       |     0s |       0s |      0s |
|  2   | 等待从库 WAL 追平      |     0s |       1s |      2s |
|  3   | 主库释放 Leader 锁     |     0s |       0s |      1s |
|  4   | 目标从库获取 Leader 锁 |     0s |       0s |      1s |
|  5   | 执行 pg_ctl promote    |     1s |       1s |      1s |
|  6   | HAProxy 检测新主 UP    |     2s |       2s |      6s |
|      | **总计**               | **3s** |   **4s** | **10s** |
{.full-width}

------

### wide 模式

**参数**: inter=5s, fastinter=2s, rise=3

#### 最好结果

| 阶段     | 操作                   |     耗时 | 说明                       |
| :------- | :--------------------- | -------: | :------------------------- |
| 1        | 主库停止接受写入       |       0s | 即时生效                   |
| 2        | 等待从库 WAL 追平      |       0s | 同步复制，已完全同步       |
| 3        | 主库释放 Leader 锁     |       1s | DCS 原子操作（广域网延迟） |
| 4        | 目标从库获取 Leader 锁 |       1s | DCS 原子操作（广域网延迟） |
| 5        | 执行 pg_ctl promote    |       1s | promote 快速完成           |
| 6        | HAProxy 检测新主 UP    |       6s | rise=3 × fastinter=2s      |
| **总计** |                        |   **8s** |                            |
{.full-width}

#### 最坏结果

| 阶段     | 操作                   |    耗时 | 说明                            |
| :------- | :--------------------- | ------: | :------------------------------ |
| 1        | 主库停止接受写入       |      0s | 即时生效                        |
| 2        | 等待从库 WAL 追平      |      3s | 异步复制 + 广域网复制延迟       |
| 3        | 主库释放 Leader 锁     |      2s | DCS 操作 + 广域网延迟           |
| 4        | 目标从库获取 Leader 锁 |      1s | DCS 操作 + 广域网延迟           |
| 5        | 执行 pg_ctl promote    |      1s | promote + 少量 WAL 回放         |
| 6        | HAProxy 检测新主 UP    |     15s | rise=3 × inter=5s（从DOWN开始） |
| **总计** |                        | **21s** |                                 |
{.full-width}

#### 平均结果

| 阶段     | 操作                   |     耗时 | 说明                       |
| :------- | :--------------------- | -------: | :------------------------- |
| 1        | 主库停止接受写入       |       0s | 即时生效                   |
| 2        | 等待从库 WAL 追平      |       1s | 广域网复制延迟             |
| 3        | 主库释放 Leader 锁     |       1s | DCS 原子操作（广域网延迟） |
| 4        | 目标从库获取 Leader 锁 |       1s | DCS 原子操作（广域网延迟） |
| 5        | 执行 pg_ctl promote    |       1s | promote 平均时间           |
| 6        | HAProxy 检测新主 UP    |       6s | rise=3 × fastinter=2s      |
| **总计** |                        |   **9s** |                            |
{.full-width}

#### 小结

| 阶段 | 操作                   |     最好 |     平均 |    最坏 |
| :--: | :--------------------- | -------: | -------: | ------: |
|  1   | 主库停止接受写入       |       0s |       0s |      0s |
|  2   | 等待从库 WAL 追平      |       0s |       1s |      3s |
|  3   | 主库释放 Leader 锁     |       1s |       1s |      2s |
|  4   | 目标从库获取 Leader 锁 |       1s |       1s |      1s |
|  5   | 执行 pg_ctl promote    |       1s |       1s |      1s |
|  6   | HAProxy 检测新主 UP    |       6s |       6s |     15s |
|      | **总计**               |   **8s** |   **9s** | **21s** |
{.full-width}

------

## Failover（强制切换）

### 故障路径

{{< infographic height="180px" >}}
infographic list-row-simple-horizontal-arrow
data
  title Failover 强制切换流程
  desc 主库已故障时使用
  items
    - label 执行 Failover
      desc patronictl failover
      icon mingcute/flash-fill
    - label 验证从库
      desc RTO 开始
      icon mingcute/search-fill
    - label 获取锁
      desc 直接获取 Leader 锁
      icon mingcute/key-2-fill
    - label Promote
      desc pg_ctl promote
      icon mingcute/arrow-up-circle-fill
    - label HAProxy UP
      desc RTO 结束
      icon mingcute/check-circle-fill
theme light
  palette antv
{{< /infographic >}}

**RTO 计算公式**：

```
RTO = 验证 + 获取锁 + promote + HAProxy_UP
```

**说明**：Failover 通常在主库已故障时使用，此时 RTO 从执行命令开始计时（主库已不可用）。

------

### fast 模式

| 阶段 | 操作                   |     最好 |     平均 |   最坏 |
| :--: | :--------------------- | -------: | -------: | -----: |
|  1   | 验证候选从库           |       0s |       0s |     1s |
|  2   | 候选从库获取 Leader 锁 |       0s |       0s |     1s |
|  3   | 执行 pg_ctl promote    |       1s |       1s |     1s |
|  4   | HAProxy 检测新主 UP    |       1s |       1s |     2s |
|      | **总计**               |   **2s** |   **2s** | **4s** |
{.full-width}

------

### norm 模式

| 阶段 | 操作                   |     最好 |     平均 |   最坏 |
| :--: | :--------------------- | -------: | -------: | -----: |
|  1   | 验证候选从库           |       0s |       0s |     1s |
|  2   | 候选从库获取 Leader 锁 |       0s |       0s |     1s |
|  3   | 执行 pg_ctl promote    |       1s |       1s |     1s |
|  4   | HAProxy 检测新主 UP    |       2s |       2s |     4s |
|      | **总计**               |   **3s** |   **3s** | **6s** |
{.full-width}

------

### safe 模式

| 阶段 | 操作                   |     最好 |     平均 |   最坏 |
| :--: | :--------------------- | -------: | -------: | -----: |
|  1   | 验证候选从库           |       0s |       0s |     1s |
|  2   | 候选从库获取 Leader 锁 |       0s |       0s |     1s |
|  3   | 执行 pg_ctl promote    |       1s |       1s |     1s |
|  4   | HAProxy 检测新主 UP    |       2s |       2s |     6s |
|      | **总计**               |   **3s** |   **3s** | **8s** |
{.full-width}

------

### wide 模式

| 阶段 | 操作                   |     最好 |     平均 |    最坏 |
| :--: | :--------------------- | -------: | -------: | ------: |
|  1   | 验证候选从库           |       1s |       1s |      1s |
|  2   | 候选从库获取 Leader 锁 |       1s |       1s |      2s |
|  3   | 执行 pg_ctl promote    |       1s |       1s |      1s |
|  4   | HAProxy 检测新主 UP    |       6s |       6s |     15s |
|      | **总计**               |   **8s** |   **9s** | **17s** |
{.full-width}

------

## 人工触发汇总

### Switchover vs Failover 对比

|   模式   | Switchover |      |      | Failover |      |      |
| :------: | :--------: | :--: | :--: | :------: | :--: | :--: |
|          |    最好    | 平均 | 最坏 |   最好   | 平均 | 最坏 |
| **fast** |     2s     |  2s  |  5s  |    2s    |  2s  |  4s  |
| **norm** |     3s     |  4s  |  8s  |    3s    |  3s  |  6s  |
| **safe** |     3s     |  4s  | 10s  |    3s    |  3s  |  8s  |
| **wide** |     8s     |  9s  | 21s  |    8s    |  9s  | 17s  |
{.full-width}

### 关键洞察

1. **Switchover 与 Failover RTO 非常接近**
   - 差异仅在于 WAL 追平时间（同步复制时为 0）
   - 同步复制模式下，两者 RTO 几乎相同
2. **HAProxy 检测是主要延迟来源**
   - 在人工触发场景中，HAProxy UP 检测占总 RTO 的 43%~65%
   - wide 模式下 HAProxy 延迟更为显著
3. **与自动故障检测的对比**

|   模式   | 人工 Switchover | 人工 Failover | 主动检测（PG崩溃） | 被动检测（节点宕机） |
| :------: | :-------------: | :-----------: | :----------------: | :------------------: |
| **fast** |       2s        |      2s       |        12s         |         13s          |
| **norm** |       4s        |      3s       |        23s         |         24s          |
| **safe** |       4s        |      3s       |        73s         |         73s          |
| **wide** |       9s        |      9s       |        158s        |         128s         |
{.full-width}

人工触发比自动检测快 **6~20 倍**，因为跳过了 `primary_start_timeout` 和 `TTL 等待` 这两个最大的时间消耗。