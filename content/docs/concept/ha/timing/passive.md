---
title: 被动故障检测
weight: 10
description: 被动故障检测（节点宕机，网络分区）场景下的 RTO 时序分析
icon: fa-solid fa-bell-slash
module: [PGSQL]
categories: [概念]
---

Pigsty 提供了四种 RTO 配置策略，下面是对三类故障场景下，不同 RTO 模式的最差，最优，平均 RTO 的计算逻辑与结果分析。


## 被动检测

**节点宕机/网络分区场景（被动检测）RTO 对比**

|    模式    | 最好 RTO | 平均 RTO | 最坏 RTO | TTL 占比 |
|:--------:|:------:|:------:|:------:|:------:|
| **fast** |  17s   |  22s   |  29s   |  80%   |
| **norm** |  28s   |  33s   |  41s   |  83%   |
| **safe** |  53s   |  63s   |  78s   |  87%   |
| **wide** |  97s   |  128s  |  168s  |  82%   |
{.full-width}

{{< echarts height="480px" >}}
title:
  text: 被动故障 RTO 时序分解
  left: center
  top: 0
  textStyle:
    fontSize: 14
tooltip:
  trigger: axis
  axisPointer:
    type: shadow
legend:
  data:
    - TTL 等待
    - 从库检测
    - 竞争锁
    - Promote
    - HAProxy UP
  bottom: 0
grid:
  left: 80
  right: 50
  top: 40
  bottom: 50
xAxis:
  type: value
  name: 秒
  nameLocation: end
  max: 180
yAxis:
  type: category
  name: RTO 模式
  nameLocation: start
  nameGap: 50
  data:
    - wide-max
    - wide-avg
    - wide-min
    - ""
    - safe-max
    - safe-avg
    - safe-min
    - ""
    - norm-max
    - norm-avg
    - norm-min
    - ""
    - fast-max
    - fast-avg
    - fast-min
  axisLabel:
    fontSize: 11
series:
  - name: TTL 等待
    type: bar
    stack: total
    emphasis:
      focus: series
    itemStyle:
      color: "#dc3545"
    data: [120, 105, 90, "-", 60, 55, 50, "-", 30, 28, 25, "-", 20, 18, 15]
  - name: 从库检测
    type: bar
    stack: total
    emphasis:
      focus: series
    itemStyle:
      color: "#fd7e14"
    data: [30, 15, 0, "-", 10, 5, 0, "-", 5, 2.5, 0, "-", 5, 2.5, 0]
  - name: 竞争锁
    type: bar
    stack: total
    emphasis:
      focus: series
    itemStyle:
      color: "#ffc107"
    data: [2, 1, 0.5, "-", 1, 0.5, 0.2, "-", 0.5, 0.3, 0.1, "-", 0.5, 0.3, 0.1]
  - name: Promote
    type: bar
    stack: total
    emphasis:
      focus: series
    itemStyle:
      color: "#20c997"
    data: [1, 0.7, 0.5, "-", 1, 0.7, 0.5, "-", 1, 0.7, 0.5, "-", 1, 0.7, 0.5]
  - name: HAProxy UP
    type: bar
    stack: total
    label:
      show: true
      position: right
      color: "#333"
      fontSize: 10
    emphasis:
      focus: series
    itemStyle:
      color: "#0d6efd"
    data:
      - value: 15
        label:
          formatter: "168s"
      - value: 6
        label:
          formatter: "128s"
      - value: 6
        label:
          formatter: "97s"
      - value: "-"
        label:
          show: false
      - value: 6
        label:
          formatter: "78s"
      - value: 2
        label:
          formatter: "63s"
      - value: 2
        label:
          formatter: "53s"
      - value: "-"
        label:
          show: false
      - value: 4
        label:
          formatter: "41s"
      - value: 2
        label:
          formatter: "33s"
      - value: 2
        label:
          formatter: "28s"
      - value: "-"
        label:
          show: false
      - value: 2
        label:
          formatter: "29s"
      - value: 1
        label:
          formatter: "22s"
      - value: 1
        label:
          formatter: "17s"
{{< /echarts >}}

### 故障路径

{{< infographic >}}
```
infographic list-row-simple-horizontal-arrow
data
  title 被动故障检测流程
  desc 节点宕机/网络分区场景下的 RTO 时序
  items
    - label 节点宕机
      desc Patroni + PG 同时失效
      icon mingcute/close-circle-fill
    - label TTL 等待
      desc 等待 Leader 锁过期
      icon mingcute/time-fill
    - label 从库检测
      desc 检测到锁过期
      icon mingcute/search-fill
    - label 竞争锁
      desc DCS 原子操作
      icon mingcute/key-2-fill
    - label Promote
      desc pg_ctl promote
      icon mingcute/arrow-up-circle-fill
    - label HAProxy UP
      desc 检测新主上线
      icon mingcute/check-circle-fill
theme light
  palette antv
```
{{< /infographic >}}

**RTO 计算公式**：

```
RTO = TTL等待 + 从库检测 + 竞争锁 + promote + HAProxy_UP
    = (ttl - loop_wait ~ ttl) + (0 ~ loop_wait) + 选举 + HAProxy_UP
```

**RTO 构成分析**

```
RTO = TTL等待 + loop_wait + 选举(~1s) + HAProxy_UP
      \_____/   \______/
      主要固定成本  可变成本
```

- **固定成本**：TTL 等待是最大成本（占 80%~87%），这是被动检测的本质代价
- **可变成本**：从库检测延迟（0 ~ loop_wait）
- **HAProxy 延迟**：仅计算 `rise × fastinter`（UP 检测），DOWN 检测与选举并行，不在关键路径

**TTL 等待时间的精确计算**

Patroni Leader 每 `loop_wait` 续约一次，将 TTL 重置为完整值。当节点宕机时：

```
  续约周期示意图：
  
  ──────────────────────────────────────────────────────────────→ 时间
     │                    │                    │
   续约                  续约                  续约
   TTL=ttl              TTL=ttl              TTL=ttl
     │←── loop_wait ───→│
     
  如果故障发生在 Δt 处（续约后 Δt 时间）：
  TTL 剩余 = ttl - Δt
  由于 Δt ∈ [0, loop_wait)
  所以 TTL 等待 ∈ (ttl - loop_wait, ttl]
```

**与主动检测（PG 崩溃）的关键差异**

| 对比项        | 主动检测（PG 崩溃）                         | 被动检测（节点宕机）                      |
|:-----------|:------------------------------------|:--------------------------------|
| 主要控制参数     | primary_start_timeout               | ttl                             |
| Patroni 状态 | 存活，主动处理                             | 失效，无法响应                         |
| 锁释放方式      | 主动释放                                | 自然过期                            |
| RTO 公式核心   | 2×loop_wait + primary_start_timeout | (ttl-loop_wait~ttl) + loop_wait |
{.full-width}

------

### fast 模式

**参数**: ttl=20, loop_wait=5, inter=1s, fastinter=500ms, rise=2, fall=2

#### 最好结果

| 阶段     | 操作                |     耗时 | 说明                                 |
|:-------|:------------------|-------:|:-----------------------------------|
| 1      | 节点宕机，停止续约         |     0s | Patroni + PG 同时失效                  |
| 2      | 等待 TTL 过期         |    15s | ttl - loop_wait = 20 - 5（故障恰好在续约前） |
| 3      | 从库检测到 Leader 锁过期  |     0s | 从库恰好在 HA loop 检查点                  |
| 4      | 从库竞争 Leader 锁     |   0.1s | DCS 单次写操作                          |
| 5      | 执行 pg_ctl promote |   0.5s | WAL 已同步，promote 快速完成               |
| 6      | HAProxy 检测新主 UP   |     1s | rise=2 × fastinter=500ms           |
| **总计** |                   | **17s** |                                    |
{.full-width}

#### 最坏结果

| 阶段     | 操作                |     耗时 | 说明                             |
|:-------|:------------------|-------:|:-------------------------------|
| 1      | 节点宕机，停止续约         |     0s | Patroni + PG 同时失效              |
| 2      | 等待 TTL 过期         |    20s | 完整 ttl = 20（故障恰好在刚续约后）         |
| 3      | 从库检测到 Leader 锁过期  |     5s | 从库 HA loop 恰好错过，等待下一轮          |
| 4      | 从库竞争 Leader 锁     |   0.5s | DCS 操作 + 网络延迟                  |
| 5      | 执行 pg_ctl promote |     1s | promote + 少量 WAL 回放            |
| 6      | HAProxy 检测新主 UP   |     2s | rise=2 × inter=1s（从 DOWN 状态开始） |
| **总计** |                   | **29s** |                                |
{.full-width}

#### 平均结果

| 阶段     | 操作                |     耗时 | 说明                           |
|:-------|:------------------|-------:|:-----------------------------|
| 1      | 节点宕机，停止续约         |     0s | Patroni + PG 同时失效            |
| 2      | 等待 TTL 过期         |    18s | ttl - loop_wait/2 = 20 - 2.5 |
| 3      | 从库检测到 Leader 锁过期  |   2.5s | loop_wait/2                  |
| 4      | 从库竞争 Leader 锁     |   0.3s | DCS 操作平均延迟                   |
| 5      | 执行 pg_ctl promote |   0.7s | promote 平均时间                 |
| 6      | HAProxy 检测新主 UP   |     1s | rise=2 × fastinter           |
| **总计** |                   | **22s** |                              |
{.full-width}

#### 小结

| 阶段 | 操作                |     最好 |    平均 |     最坏 |
|:--:|:------------------|-------:|------:|-------:|
| 1  | 节点宕机，停止续约         |     0s |    0s |     0s |
| 2  | 等待 TTL 过期         |    15s |   18s |    20s |
| 3  | 从库检测到 Leader 锁过期  |     0s |  2.5s |     5s |
| 4  | 从库竞争 Leader 锁     |   0.1s |  0.3s |   0.5s |
| 5  | 执行 pg_ctl promote |   0.5s |  0.7s |     1s |
| 6  | HAProxy 检测新主 UP   |     1s |    1s |     2s |
|    | **总计**            | **17s** | **22s** | **29s** |
{.full-width}

fast 模式下节点宕机场景 RTO 范围为 **17s ~ 29s**，平均约 **22s**。TTL=20s 是主要耗时（占 80%），由于 loop_wait=5s 的续约频率，实际 TTL 等待范围被压缩到 15~20s。此配置适合同机房低延迟环境，追求最快的被动故障恢复。

------

### norm 模式

**参数**: ttl=30, loop_wait=5, inter=2s, fastinter=1s, rise=2, fall=3

#### 最好结果

| 阶段     | 操作                |     耗时 | 说明                                 |
|:-------|:------------------|-------:|:-----------------------------------|
| 1      | 节点宕机，停止续约         |     0s | Patroni + PG 同时失效                  |
| 2      | 等待 TTL 过期         |    25s | ttl - loop_wait = 30 - 5（故障恰好在续约前） |
| 3      | 从库检测到 Leader 锁过期  |     0s | 从库恰好在 HA loop 检查点                  |
| 4      | 从库竞争 Leader 锁     |   0.1s | DCS 单次写操作                          |
| 5      | 执行 pg_ctl promote |   0.5s | WAL 已同步，promote 快速完成               |
| 6      | HAProxy 检测新主 UP   |     2s | rise=2 × fastinter=1s              |
| **总计** |                   | **28s** |                                    |
{.full-width}

#### 最坏结果

| 阶段     | 操作                |     耗时 | 说明                             |
|:-------|:------------------|-------:|:-------------------------------|
| 1      | 节点宕机，停止续约         |     0s | Patroni + PG 同时失效              |
| 2      | 等待 TTL 过期         |    30s | 完整 ttl = 30（故障恰好在刚续约后）         |
| 3      | 从库检测到 Leader 锁过期  |     5s | 从库 HA loop 恰好错过，等待下一轮          |
| 4      | 从库竞争 Leader 锁     |   0.5s | DCS 操作 + 网络延迟                  |
| 5      | 执行 pg_ctl promote |     1s | promote + 少量 WAL 回放            |
| 6      | HAProxy 检测新主 UP   |     4s | rise=2 × inter=2s（从 DOWN 状态开始） |
| **总计** |                   | **41s** |                                |
{.full-width}

#### 平均结果

| 阶段     | 操作                |     耗时 | 说明                           |
|:-------|:------------------|-------:|:-----------------------------|
| 1      | 节点宕机，停止续约         |     0s | Patroni + PG 同时失效            |
| 2      | 等待 TTL 过期         |    28s | ttl - loop_wait/2 = 30 - 2.5 |
| 3      | 从库检测到 Leader 锁过期  |   2.5s | loop_wait/2                  |
| 4      | 从库竞争 Leader 锁     |   0.3s | DCS 操作平均延迟                   |
| 5      | 执行 pg_ctl promote |   0.7s | promote 平均时间                 |
| 6      | HAProxy 检测新主 UP   |     2s | rise=2 × fastinter=1s        |
| **总计** |                   | **33s** |                              |
{.full-width}

#### 小结

| 阶段 | 操作                |     最好 |    平均 |     最坏 |
|:--:|:------------------|-------:|------:|-------:|
| 1  | 节点宕机，停止续约         |     0s |    0s |     0s |
| 2  | 等待 TTL 过期         |    25s |   28s |    30s |
| 3  | 从库检测到 Leader 锁过期  |     0s |  2.5s |     5s |
| 4  | 从库竞争 Leader 锁     |   0.1s |  0.3s |   0.5s |
| 5  | 执行 pg_ctl promote |   0.5s |  0.7s |     1s |
| 6  | HAProxy 检测新主 UP   |     2s |    2s |     4s |
|    | **总计**            | **28s** | **33s** | **41s** |
{.full-width}

norm 模式下节点宕机场景 RTO 范围为 **28s ~ 41s**，平均约 **33s**。TTL=30s 是主要耗时因素（占 83%）。这是生产环境的平衡选择，在故障恢复速度和集群稳定性之间取得折中。

------

### safe 模式

**参数**: ttl=60, loop_wait=10, inter=3s, fastinter=1s, rise=2, fall=3

#### 最好结果

| 阶段     | 操作                |     耗时 | 说明                                  |
|:-------|:------------------|-------:|:------------------------------------|
| 1      | 节点宕机，停止续约         |     0s | Patroni + PG 同时失效                   |
| 2      | 等待 TTL 过期         |    50s | ttl - loop_wait = 60 - 10（故障恰好在续约前） |
| 3      | 从库检测到 Leader 锁过期  |     0s | 从库恰好在 HA loop 检查点                   |
| 4      | 从库竞争 Leader 锁     |   0.2s | DCS 单次写操作                           |
| 5      | 执行 pg_ctl promote |   0.5s | WAL 已同步，promote 快速完成                |
| 6      | HAProxy 检测新主 UP   |     2s | rise=2 × fastinter=1s               |
| **总计** |                   | **53s** |                                     |
{.full-width}

#### 最坏结果

| 阶段     | 操作                |     耗时 | 说明                             |
|:-------|:------------------|-------:|:-------------------------------|
| 1      | 节点宕机，停止续约         |     0s | Patroni + PG 同时失效              |
| 2      | 等待 TTL 过期         |    60s | 完整 ttl = 60（故障恰好在刚续约后）         |
| 3      | 从库检测到 Leader 锁过期  |    10s | 从库 HA loop 恰好错过，等待下一轮          |
| 4      | 从库竞争 Leader 锁     |     1s | DCS 操作 + 网络延迟                  |
| 5      | 执行 pg_ctl promote |     1s | promote + 少量 WAL 回放            |
| 6      | HAProxy 检测新主 UP   |     6s | rise=2 × inter=3s（从 DOWN 状态开始） |
| **总计** |                   | **78s** |                                |
{.full-width}

#### 平均结果

| 阶段     | 操作                |     耗时 | 说明                         |
|:-------|:------------------|-------:|:---------------------------|
| 1      | 节点宕机，停止续约         |     0s | Patroni + PG 同时失效          |
| 2      | 等待 TTL 过期         |    55s | ttl - loop_wait/2 = 60 - 5 |
| 3      | 从库检测到 Leader 锁过期  |     5s | loop_wait/2                |
| 4      | 从库竞争 Leader 锁     |   0.5s | DCS 操作平均延迟                 |
| 5      | 执行 pg_ctl promote |   0.7s | promote 平均时间               |
| 6      | HAProxy 检测新主 UP   |     2s | rise=2 × fastinter=1s      |
| **总计** |                   | **63s** |                            |
{.full-width}

#### 小结

| 阶段 | 操作                |     最好 |    平均 |     最坏 |
|:--:|:------------------|-------:|------:|-------:|
| 1  | 节点宕机，停止续约         |     0s |    0s |     0s |
| 2  | 等待 TTL 过期         |    50s |   55s |    60s |
| 3  | 从库检测到 Leader 锁过期  |     0s |    5s |    10s |
| 4  | 从库竞争 Leader 锁     |   0.2s |  0.5s |     1s |
| 5  | 执行 pg_ctl promote |   0.5s |  0.7s |     1s |
| 6  | HAProxy 检测新主 UP   |     2s |    2s |     6s |
|    | **总计**            | **53s** | **63s** | **78s** |
{.full-width}

safe 模式下节点宕机场景 RTO 范围为 **53s ~ 78s**，平均约 **63s**。TTL=60s 提供了充足的容错窗口（占 87%），能有效避免短暂网络抖动导致的误判。此配置适合对稳定性要求极高、可容忍分钟级中断的场景。

------

### wide 模式

**参数**: ttl=120, loop_wait=30, inter=5s, fastinter=2s, rise=3, fall=5

#### 最好结果

| 阶段     | 操作                |     耗时 | 说明                                   |
|:-------|:------------------|-------:|:-------------------------------------|
| 1      | 节点宕机，停止续约         |     0s | Patroni + PG 同时失效                    |
| 2      | 等待 TTL 过期         |    90s | ttl - loop_wait = 120 - 30（故障恰好在续约前） |
| 3      | 从库检测到 Leader 锁过期  |     0s | 从库恰好在 HA loop 检查点                    |
| 4      | 从库竞争 Leader 锁     |   0.5s | DCS 单次写操作（广域网延迟）                     |
| 5      | 执行 pg_ctl promote |   0.5s | WAL 已同步，promote 快速完成                 |
| 6      | HAProxy 检测新主 UP   |     6s | rise=3 × fastinter=2s                |
| **总计** |                   | **97s** |                                      |
{.full-width}

#### 最坏结果

| 阶段     | 操作                |      耗时 | 说明                             |
|:-------|:------------------|--------:|:-------------------------------|
| 1      | 节点宕机，停止续约         |      0s | Patroni + PG 同时失效              |
| 2      | 等待 TTL 过期         |    120s | 完整 ttl = 120（故障恰好在刚续约后）        |
| 3      | 从库检测到 Leader 锁过期  |     30s | 从库 HA loop 恰好错过，等待下一轮          |
| 4      | 从库竞争 Leader 锁     |      2s | DCS 操作 + 广域网延迟                 |
| 5      | 执行 pg_ctl promote |      1s | promote + 少量 WAL 回放            |
| 6      | HAProxy 检测新主 UP   |     15s | rise=3 × inter=5s（从 DOWN 状态开始） |
| **总计** |                   | **168s** |                                |
{.full-width}

#### 平均结果

| 阶段     | 操作                |      耗时 | 说明                           |
|:-------|:------------------|--------:|:-----------------------------|
| 1      | 节点宕机，停止续约         |      0s | Patroni + PG 同时失效            |
| 2      | 等待 TTL 过期         |    105s | ttl - loop_wait/2 = 120 - 15 |
| 3      | 从库检测到 Leader 锁过期  |     15s | loop_wait/2                  |
| 4      | 从库竞争 Leader 锁     |      1s | DCS 操作平均延迟                   |
| 5      | 执行 pg_ctl promote |    0.7s | promote 平均时间                 |
| 6      | HAProxy 检测新主 UP   |      6s | rise=3 × fastinter=2s        |
| **总计** |                   | **128s** |                              |
{.full-width}

#### 小结

| 阶段 | 操作                |     最好 |     平均 |      最坏 |
|:--:|:------------------|-------:|-------:|--------:|
| 1  | 节点宕机，停止续约         |     0s |     0s |      0s |
| 2  | 等待 TTL 过期         |    90s |   105s |    120s |
| 3  | 从库检测到 Leader 锁过期  |     0s |    15s |     30s |
| 4  | 从库竞争 Leader 锁     |   0.5s |     1s |      2s |
| 5  | 执行 pg_ctl promote |   0.5s |   0.7s |      1s |
| 6  | HAProxy 检测新主 UP   |     6s |     6s |     15s |
|    | **总计**            | **97s** | **128s** | **168s** |
{.full-width}

wide 模式下节点宕机场景 RTO 范围为 **97s ~ 168s**（约 1.6~2.8 分钟），平均约 **128s**（约 2.1 分钟）。TTL=120s 和 loop_wait=30s 提供极强的容错能力（TTL 占 82%），适合广域网/跨数据中心部署。此配置优先保证不误判，代价是故障切换时间较长。