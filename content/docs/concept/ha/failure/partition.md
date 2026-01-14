---
title: 网络分区
weight: 50
description: 主库与 DCS 网络分区，导致租约过期并触发脑裂防护与故障切换的路径
icon: fa-solid fa-network-wired
draft: true
module: [PGSQL]
categories: [概念]
---

{{< infographic >}}
```
infographic list-row-simple-horizontal-arrow
data
  title 网络分区故障切换流程
  desc 主库与 DCS 网络分区，Patroni 主动降级防止脑裂，等待 TTL 过期后切换
  items
    - label 主库降级
      desc Patroni 重试超时后主动降级 PG
      icon mingcute/shield-fill
    - label 租约过期
      desc Leader Key TTL 过期
      icon mingcute/close-circle-fill
    - label 从库检测
      desc 从库发现租约过期，开始竞选
      icon mingcute/key-2-fill
    - label 抢锁提拔
      desc 从库抢锁并提升为新主库
      icon mingcute/radar-fill
    - label 健康检查
      desc HAProxy 检测新主上线
      icon mingcute/arrow-up-circle-fill
theme light
  palette antv
```
{{< /infographic >}}


--------

## RTO 时序图

{{< echarts height="520px" >}}
```js
var fmt = function(params) { if (!params || !params.length || params[0].name === '') return ''; return '<b>' + params[0].name + '</b><br/>' + params.filter(p => p.value !== '-' && p.value != null).map(p => p.marker + ' ' + p.seriesName + ': ' + p.value + 's').join('<br/>'); };
```
```yaml
tooltip: { trigger: axis, axisPointer: { type: shadow }, formatter: $fn:fmt }
legend: { top: 0, itemGap: 12, data: [主库降级, 租约过期, 从库检测, 抢锁提拔, 健康检查] }
grid: { left: 64, right: 24, bottom: 32, top: 40 }
xAxis: { type: value, name: 秒, nameLocation: end, max: 160, axisLine: { show: true }, axisTick: { show: true }, splitLine: { show: true, lineStyle: { type: dashed, opacity: 0.5 } }, minorTick: { show: true, splitNumber: 5 }, minorSplitLine: { show: true, lineStyle: { type: dotted, opacity: 0.2 } } }
yAxis: { type: category, axisLine: { show: true }, axisTick: { show: true }, splitLine: { show: false }, axisLabel: { fontSize: 10, fontFamily: monospace }, data: [wide-max, wide-avg, wide-min, "", safe-max, safe-avg, safe-min, "", norm-max, norm-avg, norm-min, "", fast-max, fast-avg, fast-min] }
series:
  - { name: 主库降级, type: bar, stack: main, barWidth: 20, z: 2, emphasis: { focus: series }, itemStyle: { color: "#76b7b2" }, data: [50, 40, 30, "-", 30, 25, 20, "-", 15, 13, 10, "-", 10, 8, 5] }
  - { name: 租约过期, type: bar, stack: main, z: 2, emphasis: { focus: series }, itemStyle: { color: "#e15759" }, data: [70, 70, 70, "-", 30, 30, 30, "-", 15, 15, 15, "-", 10, 10, 10] }
  - { name: 从库检测, type: bar, stack: main, z: 2, emphasis: { focus: series }, itemStyle: { color: "#edc949" }, data: [20, 10, 0, "-", 10, 5, 0, "-", 5, 3, 0, "-", 5, 3, 0] }
  - { name: 抢锁提拔, type: bar, stack: main, z: 2, emphasis: { focus: series }, itemStyle: { color: "#59a14f" }, data: [2, 1, 0, "-", 2, 1, 0, "-", 2, 1, 0, "-", 2, 1, 0] }
  - { name: 健康检查, type: bar, stack: main, z: 2, emphasis: { focus: series }, itemStyle: { color: "#4e79a7" }, data: [8, 6, 4, "-", 6, 5, 3, "-", 4, 3, 2, "-", 2, 2, 1] }
  - { name: RTO总计, type: bar, barGap: "-100%", barWidth: 20, z: 1, itemStyle: { color: "#888", opacity: 0 }, emphasis: { itemStyle: { opacity: 0 } }, data: [150, 127, 104, "-", 78, 66, 53, "-", 41, 34, 27, "-", 29, 23, 16] }
  - { name: RTO预算, type: bar, barGap: "-100%", barWidth: 20, z: 0, itemStyle: { color: "rgba(0,0,0,0.08)" }, emphasis: { itemStyle: { color: "rgba(0,0,0,0.12)" } }, data: [150, 150, 150, "-", 90, 90, 90, "-", 45, 45, 45, "-", 30, 30, 30] }
```
{{< /echarts >}}


--------

## 故障模型


|    项目    |            最好            |             最坏              |             平均              | 说明                               |
|:--------:|:------------------------:|:---------------------------:|:---------------------------:|:---------------------------------|
| **主库降级** |         `retry`          |       `loop + retry`        |       `loop/2 + retry`      | Patroni 检测分区后重试，超时后主动降级          |
| **租约过期** |    `ttl - loop - retry`  |     `ttl - loop - retry`    |     `ttl - loop - retry`    | 降级后剩余的 TTL 时间（近似常数）              |
| **从库检测** |           `0`            |           `loop`            |          `loop/2`           | 最好：恰好在检测点<br/>最坏：刚错过检测点          |
| **抢锁提拔** |           `0`            |            `2`              |             `1`             | 最好：直接抢锁提升<br/>最坏：API超时+Promote   |
| **健康检查** |  `(rise-1) × fastinter`  | `(rise-1) × fastinter + inter` | `(rise-1) × fastinter + inter/2` | 最好：检查前状态变化<br/>最坏：检查后瞬间状态变化 |
{.full-width}

**网络分区与节点宕机的核心区别**：

|       场景        | Patroni 状态 |    PostgreSQL 状态     |      租约处理       |    脑裂风险    |
|:---------------:|:----------:|:--------------------:|:---------------:|:----------:|
| **节点宕机**（过期故障）  |  随节点死亡   |        完全不可用         | 被动等待 TTL 过期 |     无      |
| **网络分区**（本文场景）  | 存活但无法访问 DCS |   可能仍在运行（需要主动降级）   | 被动等待 TTL 过期 | **有，需防护** |
{.full-width}

在网络分区场景中，主库 PostgreSQL 可能仍在运行并接受写入，这会导致**脑裂**问题。
Patroni 通过**主动降级**机制解决：当无法刷新 Leader Key 时，主动将 PostgreSQL 降级为只读或关闭。


--------

## 时序分析

### 阶段 1：主库降级

当主库 Patroni 与 DCS 网络分区后，无法刷新 Leader Key，开始重试。

```
时间线：
  分区发生      检测分区      重试超时      主库降级
     |           |            |            |
     |←── loop ──→|←── retry ──→|
```

- **检测延迟**：分区发生后，需要等待下一个 `loop_wait` 周期才能检测到
- **重试阶段**：Patroni 会在 `retry_timeout` 期间持续重试 DCS 操作
- **主动降级**：重试超时后，Patroni 主动降级 PostgreSQL（防止脑裂）

```math
T_{demote} = \begin{cases}
retry & \text{最好（分区恰好在检测前）} \\
loop/2 + retry & \text{平均} \\
loop + retry & \text{最坏（分区刚好在刷新后）}
\end{cases}
```

**关键设计**：Patroni 要求参数满足约束 `loop_wait + 2 × retry_timeout ≤ ttl`，确保主库在 TTL 过期之前完成降级。


### 阶段 2：租约过期

主库降级后，Leader Key 仍然存在于 DCS 中，需要等待 TTL 自然过期。

```
时间线：
  主库降级                   TTL 过期
     |                         |
     |←── ttl - (loop + retry) ──→|
```

由于主库已经降级，此阶段的等待时间是 TTL 剩余时间。由于分区检测和 TTL 剩余时间是负相关的（分区发生得越早，检测越慢，但 TTL 剩余越长），两者相加是常数：

```math
T_{expire} = ttl - loop - retry \quad \text{（近似常数）}
```

**注意**：主库降级 + 租约过期的总时间仍然约等于 `ttl`，与过期故障相同。


### 阶段 3：从库检测

从库在 `loop_wait` 周期醒来后检查 DCS 中的 Leader Key 状态。

```
时间线：
    租约过期      从库醒来
       |            |
       |←── 0~loop ─→|
```

- **最好情况**：租约过期时从库恰好醒来，等待 `0`
- **最坏情况**：租约过期后从库刚进入睡眠，等待 `loop`
- **平均情况**：`loop/2`

```math
T_{detect} = \begin{cases}
0 & \text{最好} \\
loop/2 & \text{平均} \\
loop & \text{最坏}
\end{cases}
```


### 阶段 4：抢锁提拔

从库发现 Leader Key 过期后，开始竞选过程。

```
选举流程：
  从库A ──→ 查询复制位置 ──→ 比较 ──→ 尝试抢锁 ──→ 成功
  从库B ──→ 查询复制位置 ──→ 比较 ──→ 尝试抢锁 ──→ 失败
```

- **最好情况**：单从库或直接抢到锁并提升，`≈ 0`
- **最坏情况**：DCS API 调用超时，`2s`
- **平均情况**：`1s`

```math
T_{elect} = \begin{cases}
0 & \text{最好} \\
1 & \text{平均} \\
2 & \text{最坏}
\end{cases}
```


### 阶段 5：健康检查

HAProxy 检测新主库上线，需要连续 `rise` 次健康检查成功。

```
检测时序：
  新主提升    首次检查    第二次检查   第三次检查（UP）
     |          |           |           |
     |←─ 0~inter ─→|←─ fast ─→|←─ fast ─→|
```

- **最好情况**：`(rise-1) × fastinter`
- **最坏情况**：`(rise-1) × fastinter + inter`
- **平均情况**：`(rise-1) × fastinter + inter/2`

```math
T_{haproxy} = \begin{cases}
(rise-1) \times fastinter & \text{最好} \\
(rise-1) \times fastinter + inter/2 & \text{平均} \\
(rise-1) \times fastinter + inter & \text{最坏}
\end{cases}
```


--------

## RTO 公式

将各阶段时间相加，得到总 RTO。

由于主库降级 + 租约过期 ≈ `ttl`，网络分区的 RTO 公式与过期故障相同：

**最好情况**

```math
RTO_{min} = ttl - loop + 0.1 + (rise-1) \times fastinter
```

$$RTO_{min} \approx ttl - loop + (rise-1) \times fastinter$$

**平均情况**

```math
RTO_{avg} = ttl + 1 + inter/2 + (rise-1) \times fastinter
```

$$RTO_{avg} = ttl + 1 + inter/2 + (rise-1) \times fastinter$$

**最坏情况**

```math
RTO_{max} = ttl + loop + 2 + inter + (rise-1) \times fastinter
```

$$RTO_{max} = ttl + loop + 2 + inter + (rise-1) \times fastinter$$


--------

## 模型计算

将四种 RTO 模型的参数带入上面的公式：

```yaml
pg_rto_plan:  # [ttl, loop, retry, start, margin, inter, fastinter, downinter, rise, fall]
  fast: [ 20  ,5  ,5  ,15 ,5  ,'1s' ,'0.5s' ,'1s' ,3 ,3 ]  # rto < 30s
  norm: [ 30  ,5  ,10 ,25 ,5  ,'2s' ,'1s'   ,'2s' ,3 ,3 ]  # rto < 45s
  safe: [ 60  ,10 ,20 ,45 ,10 ,'3s' ,'1.5s' ,'3s' ,3 ,3 ]  # rto < 90s
  wide: [ 120 ,20 ,30 ,95 ,15 ,'4s' ,'2s'   ,'4s' ,3 ,3 ]  # rto < 150s
```

**Patroni 约束验证**（`loop + 2×retry ≤ ttl`）：

|    模式    | loop | retry |  TTL  | loop + 2×retry |  满足约束?   |
|:--------:|:----:|:-----:|:-----:|:--------------:|:----------:|
| **fast** |  5   |   5   |  20s  |      15s       |   ✓ 安全    |
| **norm** |  5   |  10   |  30s  |      25s       |   ✓ 安全    |
| **safe** |  10  |  20   |  60s  |      50s       |   ✓ 安全    |
| **wide** |  20  |  30   | 120s  |      80s       |   ✓ 安全    |
{.full-width}

**四种模式计算结果**（单位：秒，格式：min / avg / max）

|   阶段   |        fast        |        norm        |        safe         |         wide          |
|:------:|:------------------:|:------------------:|:-------------------:|:---------------------:|
|  主库降级  |  `5` / `8` / `10`  | `10` / `13` / `15` | `20` / `25` / `30`  |  `30` / `40` / `50`   |
|  租约过期  |       `10`         |        `15`        |        `30`         |         `70`          |
|  从库检测  |  `0` / `3` / `5`   |  `0` / `3` / `5`   |  `0` / `5` / `10`   |   `0` / `10` / `20`   |
|  抢锁提拔  |  `0` / `1` / `2`   |  `0` / `1` / `2`   |   `0` / `1` / `2`   |    `0` / `1` / `2`    |
|  健康检查  |  `1` / `2` / `2`   |  `2` / `3` / `4`   |   `3` / `5` / `6`   |    `4` / `6` / `8`    |
| **总计** | `16` / `23` / `29` | `27` / `34` / `41` | `53` / `66` / `78`  | `104` / `127` / `150` |
{.full-width}

**结论**：网络分区的 RTO 与过期故障（节点宕机）相同，因为瓶颈都是 TTL 过期时间。


--------

## 脑裂防护

网络分区的最大风险是**脑裂**：老主库可能仍在运行并接受写入。Patroni 提供多重防护机制：

### 1. 主库自我降级

Patroni 的核心防护机制：当无法刷新 Leader Key 时，主动降级 PostgreSQL。

```python
# Patroni 伪代码逻辑
if not can_refresh_leader_key():
    retry_until(retry_timeout)
    if still_cannot_refresh():
        demote_postgresql()  # 降级为只读或关闭
```

### 2. Linux Watchdog

如果 Patroni 进程卡住无法执行降级，Linux watchdog 会强制重启系统。

```yaml
# patroni.yml 配置
watchdog:
  mode: required  # 要求 watchdog 可用
  device: /dev/watchdog
  safety_margin: 5
```

### 3. Fencing 机制

可以配置 fencing 脚本来强制隔离老主库（如关闭网络接口、停止服务等）。


--------

## 特殊场景

### 场景 A：主库与 DCS 分区，从库正常

这是最常见的网络分区场景，本文主要分析此场景。

```
┌─────────┐         ╳         ┌─────────┐
│  主库   │ ←── 分区 ──→ │   DCS   │
│ Patroni │                   │  etcd   │
└─────────┘                   └─────────┘
                                  ↑
                              正常连接
                                  ↓
                              ┌─────────┐
                              │  从库   │
                              │ Patroni │
                              └─────────┘
```

- 主库 Patroni 无法刷新 Leader Key → 主动降级
- 从库正常检测到 TTL 过期 → 竞选成为新主库
- RTO ≈ 过期故障 RTO

### 场景 B：主库正常，从库与 DCS 分区

```
┌─────────┐                   ┌─────────┐
│  主库   │ ←── 正常 ──→ │   DCS   │
│ Patroni │                   │  etcd   │
└─────────┘                   └─────────┘
                                  ╳
                              分区
                                  ╳
                              ┌─────────┐
                              │  从库   │
                              │ Patroni │
                              └─────────┘
```

- 主库正常刷新 Leader Key
- 从库无法参与竞选（但复制仍可继续）
- **不会触发故障切换**，服务继续正常运行

### 场景 C：所有节点与 DCS 分区

```
┌─────────┐         ╳         ┌─────────┐
│  主库   │ ←── 分区 ──→ │   DCS   │
│ Patroni │                   │  etcd   │
└─────────┘                   └─────────┘
                                  ╳
┌─────────┐         ╳             │
│  从库   │ ←── 分区 ──────────────┘
│ Patroni │
└─────────┘
```

- 主库降级，从库无法竞选
- **集群完全不可用**
- 需要人工干预恢复 DCS 连接


--------

## 与其他故障对比

|    故障类型    |   主库状态   |    租约处理    |     RTO      |   脑裂风险   |
|:----------:|:--------:|:----------:|:------------:|:--------:|
|  **过期故障**  |   节点宕机   | 被动等待 TTL 过期 | 16s ~ 150s |    无     |
|  **崩溃故障**  | PG 崩溃，Patroni 存活 | 重启超时后主动释放 | 1s ~ 111s  |    无     |
|  **网络分区**  | 存活但与 DCS 隔离 | 被动等待 TTL 过期 | 16s ~ 150s | **有，需防护** |
|  **人工切换**  |  正常或故障  |  直接释放/获取  |  1s ~ 11s  |    无     |
{.full-width}

**关键洞察**：网络分区的 RTO 与过期故障相同，但需要额外的脑裂防护机制。
确保满足 `loop_wait + 2 × retry_timeout ≤ ttl` 约束是防止脑裂的关键设计。

