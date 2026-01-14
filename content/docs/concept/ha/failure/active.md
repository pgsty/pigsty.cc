---
title: 主动故障检测
weight: 20
description: PostgreSQL 主库进程崩溃，Patroni 存活并尝试重启，超时后触发故障切换的路径
icon: fa-solid fa-explosion
module: [PGSQL]
categories: [概念]
---

{{< infographic >}}
```
infographic list-row-simple-horizontal-arrow
data
  title 崩溃故障切换流程
  desc 当 Patroni 健康，但 PostgreSQL 因故崩溃时的故障切换流程
  items
    - label 故障检测
      desc Patroni 在循环中检测到 PG 崩溃
      icon mingcute/close-circle-fill
    - label 重启超时
      desc Patroni 尝试重启 PG，超时后释放租约
      icon mingcute/refresh-2-fill
    - label 从库检测
      desc 从库从循环中醒来发现租约释放，开始竞选
      icon mingcute/key-2-fill
    - label 抢锁提拔
      desc 从库相互比较并抢锁，胜利者提升自己的 PG
      icon mingcute/radar-fill
    - label 健康检查
      desc HAProxy 健康检查发现新主上线，分配流量
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
legend: { top: 0, itemGap: 12, data: [故障检测, 重启超时, 从库检测, 抢锁提拔, 健康检查] }
grid: { left: 64, right: 24, bottom: 32, top: 40 }
xAxis: { type: value, name: 秒, nameLocation: end, max: 160, axisLine: { show: true }, axisTick: { show: true }, splitLine: { show: true, lineStyle: { type: dashed, opacity: 0.5 } }, minorTick: { show: true, splitNumber: 5 }, minorSplitLine: { show: true, lineStyle: { type: dotted, opacity: 0.2 } } }
yAxis: { type: category, axisLine: { show: true }, axisTick: { show: true }, splitLine: { show: false }, axisLabel: { fontSize: 10, fontFamily: monospace }, data: [wide-max, wide-avg, wide-min, "", safe-max, safe-avg, safe-min, "", norm-max, norm-avg, norm-min, "", fast-max, fast-avg, fast-min] }
series:
  - { name: 故障检测, type: bar, stack: main, barWidth: 20, z: 2, emphasis: { focus: series }, itemStyle: { color: "#b07aa1" }, data: [20, 10, 0, "-", 10, 5, 0, "-", 5, 3, 0, "-", 5, 3, 0] }
  - { name: 重启超时, type: bar, stack: main, z: 2, emphasis: { focus: series }, itemStyle: { color: "#f28e2c" }, data: [95, 95, 0, "-", 45, 45, 0, "-", 25, 25, 0, "-", 15, 15, 0] }
  - { name: 从库检测, type: bar, stack: main, z: 2, emphasis: { focus: series }, itemStyle: { color: "#edc949" }, data: [20, 10, 0, "-", 10, 5, 0, "-", 5, 3, 0, "-", 5, 3, 0] }
  - { name: 抢锁提拔, type: bar, stack: main, z: 2, emphasis: { focus: series }, itemStyle: { color: "#59a14f" }, data: [2, 1, 0, "-", 2, 1, 0, "-", 2, 1, 0, "-", 2, 1, 0] }
  - { name: 健康检查, type: bar, stack: main, z: 2, emphasis: { focus: series }, itemStyle: { color: "#4e79a7" }, data: [8, 6, 4, "-", 6, 5, 3, "-", 4, 3, 2, "-", 2, 2, 1] }
  - { name: RTO总计, type: bar, barGap: "-100%", barWidth: 20, z: 1, itemStyle: { color: "#888", opacity: 0 }, emphasis: { itemStyle: { opacity: 0 } }, data: [145, 122, 4, "-", 73, 61, 3, "-", 41, 35, 2, "-", 29, 24, 1] }
  - { name: RTO预算, type: bar, barGap: "-100%", barWidth: 20, z: 0, itemStyle: { color: "rgba(0,0,0,0.08)" }, emphasis: { itemStyle: { color: "rgba(0,0,0,0.12)" } }, data: [150, 150, 150, "-", 90, 90, 90, "-", 45, 45, 45, "-", 30, 30, 30] }
```
{{< /echarts >}}


--------

## 故障模型


|    项目    |   最好   |     最坏     |     平均      | 说明                                         |
|:--------:|:------:|:----------:|:-----------:|:-------------------------------------------|
| **故障检测** |  `0`   |   `loop`   |  `loop/2`   | 最好：PG 恰好在检测前崩溃<br/>最坏：PG 刚检测完就崩溃           |
| **重启超时** |  `0`   |  `start`   |   `start`   | 最好：PG 瞬间自愈<br/>最坏：等满 start 超时才释放租约         |
| **从库检测** |  `0`   |   `loop`   |  `loop/2`   | 最好：恰好在检测点<br/>最坏：刚错过检测点                    |
| **抢锁提拔** |  `0`   |    `2`     |     `1`     | 最好：直接抢锁提升<br/>最坏：API 超时 + Promote          |
| **健康检查** | `(rise-1) × fastinter` | `(rise-1) × fastinter + inter` | `(rise-1) × fastinter + inter/2` | 最好：检查前状态变化<br/>最坏：检查后瞬间状态变化 |
{.full-width}

**主动故障与被动故障的核心区别**：

|       场景       | Patroni 状态 |        租约处理        |         主要等待时间          |
|:--------------:|:----------:|:------------------:|:-----------------------:|
| **主动故障**（PG 崩溃） |   存活，健康    | 主动尝试重启 PG，超时后释放租约  | `primary_start_timeout` |
| **被动故障**（节点宕机） |  随节点一起死亡   | 无法主动释放，只能等待 TTL 过期 |          `ttl`          |
{.full-width}

在主动故障场景中，Patroni 仍然存活，能够**主动检测到 PG 崩溃并尝试重启**。
如果重启成功，服务自愈；如果超时仍未恢复，Patroni 会**主动释放 Leader Key**，触发集群选举。


--------

## 时序分析

### 阶段 1：故障检测

Patroni 在每个 `loop_wait` 周期检查 PostgreSQL 状态（通过 `pg_isready` 或检查进程）。

```
时间线：
    上次检测      PG崩溃      下次检测
       |           |           |
       |←── 0~loop ─→|          |
```

- **最好情况**：PG 恰好在 Patroni 检测前崩溃，立即被发现，等待 `0`
- **最坏情况**：PG 刚检测完就崩溃，需等待下一个周期，等待 `loop`
- **平均情况**：`loop/2`

```math
T_{detect} = \begin{cases}
0 & \text{最好} \\
loop/2 & \text{平均} \\
loop & \text{最坏}
\end{cases}
```


### 阶段 2：重启超时

Patroni 检测到 PG 崩溃后，会尝试重启 PostgreSQL。此阶段有两种可能的结果：

```
时间线：
  检测到崩溃     尝试重启     重启成功/超时
      |           |             |
      |←──── 0 ~ start ────────→|
```

**路径 A：自愈成功**（最好情况）
- PG 成功重启，服务恢复
- 不触发故障切换，RTO 极短
- 等待时间：`0`（相对于 Failover 路径）

**路径 B：需要 Failover**（平均/最坏情况）
- 等待 `primary_start_timeout` 超时后 PG 仍未恢复
- Patroni 主动释放 Leader Key
- 等待时间：`start`

```math
T_{restart} = \begin{cases}
0 & \text{最好（自愈成功）} \\
start & \text{平均（需要 Failover）} \\
start & \text{最坏}
\end{cases}
```

> **注意**：平均情况假设需要进行故障切换。如果 PG 能够快速自愈，则整体 RTO 会大幅降低。


### 阶段 3：从库检测

从库在 `loop_wait` 周期醒来后检查 DCS 中的 Leader Key 状态。当主库 Patroni 释放 Leader Key 后，从库发现后开始竞选。

```
时间线：
    租约释放      从库醒来
       |            |
       |←── 0~loop ─→|
```

- **最好情况**：租约释放时从库恰好醒来，等待 `0`
- **最坏情况**：租约释放后从库刚进入睡眠，等待 `loop`
- **平均情况**：`loop/2`

```math
T_{standby} = \begin{cases}
0 & \text{最好} \\
loop/2 & \text{平均} \\
loop & \text{最坏}
\end{cases}
```


### 阶段 4：抢锁提拔

从库发现 Leader Key 空缺后，开始竞选过程，获得 Leader Key 的从库执行 `pg_ctl promote`，将自己提升为新主库。

1. 通过 Rest API，并行发起查询，查询各从库的复制位置，通常 10ms，硬编码 2 秒超时。
2. 比较 WAL 位置，确定最优候选，各从库尝试创建 Leader Key（CAS 原子操作）
3. 执行 `pg_ctl promote` 提升自己为主库（很快，通常忽略不计）

```
选举流程：
  从库A ──→ 查询复制位置 ──→ 比较 ──→ 尝试抢锁 ──→ 成功
  从库B ──→ 查询复制位置 ──→ 比较 ──→ 尝试抢锁 ──→ 失败
```

- **最好情况**：单从库或直接抢到锁并提升，常数开销 `0.1s`
- **最坏情况**：DCS API 调用超时：`2s`
- **平均情况**：`1s` 常数开销

```math
T_{elect} = \begin{cases}
0.1 & \text{最好} \\
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

- **最好情况**：新主提升时恰好赶上检查，`(rise-1) × fastinter`
- **最坏情况**：新主提升后刚错过检查，`(rise-1) × fastinter + inter`
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

将各阶段时间相加，得到总 RTO：

**最好情况**（PG 瞬间自愈）

```math
RTO_{min} = 0 + 0 + 0 + 0.1 + (rise-1) \times fastinter \approx (rise-1) \times fastinter
```

**平均情况**（需要 Failover）

```math
RTO_{avg} = loop + start + 1 + inter/2 + (rise-1) \times fastinter
```

**最坏情况**

```math
RTO_{max} = loop \times 2 + start + 2 + inter + (rise-1) \times fastinter
```


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

**四种模式计算结果**（单位：秒，格式：min / avg / max）

|   阶段   |        fast        |        norm        |        safe         |         wide          |
|:------:|:------------------:|:------------------:|:-------------------:|:---------------------:|
|  故障检测  |  `0` / `3` / `5`   |  `0` / `3` / `5`   |  `0` / `5` / `10`   |  `0` / `10` / `20`    |
|  重启超时  | `0` / `15` / `15`  | `0` / `25` / `25`  | `0` / `45` / `45`   |  `0` / `95` / `95`    |
|  从库检测  |  `0` / `3` / `5`   |  `0` / `3` / `5`   |  `0` / `5` / `10`   |  `0` / `10` / `20`    |
|  抢锁提拔  |  `0` / `1` / `2`   |  `0` / `1` / `2`   |   `0` / `1` / `2`   |    `0` / `1` / `2`    |
|  健康检查  |  `1` / `2` / `2`   |  `2` / `3` / `4`   |   `3` / `5` / `6`   |    `4` / `6` / `8`    |
| **总计** | `1` / `24` / `29`  | `2` / `35` / `41`  | `3` / `61` / `73`   | `4` / `122` / `145`   |
{.full-width}


--------

## 与被动故障对比

|   阶段   | 主动故障（PG 崩溃） | 被动故障（节点宕机） | 说明                         |
|:------:|:------------:|:------------:|:---------------------------|
|  检测机制  |  Patroni 主动检测  |  TTL 被动过期   | 主动检测更快发现故障                 |
|  核心等待  |   `start`    |    `ttl`     | start 通常小于 ttl，但需要额外的故障检测时间 |
|  租约处理  |    主动释放     |   被动过期     | 主动释放更及时                    |
|  自愈可能  |     ✅ 有      |     ❌ 无     | 主动检测可尝试本地恢复                |
{.full-width}

**RTO 对比**（平均情况）：

|   模式   | 主动故障（PG 崩溃） | 被动故障（节点宕机） | 差异     |
|:------:|:------------:|:------------:|:-------|
|  fast  |     24s      |     23s      | +1s    |
|  norm  |     35s      |     34s      | +1s    |
|  safe  |     61s      |     66s      | -5s    |
|  wide  |    122s      |    127s      | -5s    |
{.full-width}

> **分析**：在 `fast` 和 `norm` 模式下，主动故障的 RTO 略高于被动故障，因为需要等待 `primary_start_timeout`（`start`）；
> 但在 `safe` 和 `wide` 模式下，由于 `start < ttl - loop`，主动故障反而更快。
> 不过主动故障有自愈的可能性，最好情况下 RTO 可以极短。
