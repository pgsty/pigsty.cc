---
title: 被动故障切换
weight: 10
description: 节点宕机，导致领导者租约过期触发集群领导竞选的故障路径
icon: fa-solid fa-clock-rotate-left
module: [PGSQL]
categories: [概念]
---

{{< infographic >}}
```
infographic list-row-simple-horizontal-arrow
data
  title 租约过期故障切换流程
  desc 当整个节点宕机，Patroni 无法主动释放租约，只能等待 TTL 过期
  items
    - label 租约过期
      desc Patroni 失联，被动等待主库租约 TTL 过期
      icon mingcute/close-circle-fill
    - label 从库检测
      desc 从库从循环中醒来后发现租约过期，开始竞选
      icon mingcute/key-2-fill
    - label 抢锁提拔
      desc 从库相互比较并抢锁，胜利者提升自己的PG
      icon mingcute/radar-fill
    - label 健康检查
      desc HAPROXY 健康检查发现新主上线，分配流量
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
legend: { top: 0, itemGap: 12, data: [租约过期, 从库检测, 抢锁提拔, 健康检查] }
grid: { left: 64, right: 24, bottom: 32, top: 40 }
xAxis: { type: value, name: 秒, nameLocation: end, max: 160, axisLine: { show: true }, axisTick: { show: true }, splitLine: { show: true, lineStyle: { type: dashed, opacity: 0.5 } }, minorTick: { show: true, splitNumber: 5 }, minorSplitLine: { show: true, lineStyle: { type: dotted, opacity: 0.2 } } }
yAxis: { type: category, axisLine: { show: true }, axisTick: { show: true }, splitLine: { show: false }, axisLabel: { fontSize: 10, fontFamily: monospace }, data: [wide-max, wide-avg, wide-min, "", safe-max, safe-avg, safe-min, "", norm-max, norm-avg, norm-min, "", fast-max, fast-avg, fast-min] }
series:
  - { name: 租约过期, type: bar, stack: main, barWidth: 20, z: 2, emphasis: { focus: series }, itemStyle: { color: "#e15759" }, data: [120, 110, 100, "-", 60, 55, 50, "-", 30, 27, 25, "-", 20, 17, 15] }
  - { name: 从库检测, type: bar, stack: main, z: 2, emphasis: { focus: series }, itemStyle: { color: "#edc949" }, data: [20, 10, 0, "-", 10, 5, 0, "-", 5, 3, 0, "-", 5, 3, 0] }
  - { name: 抢锁提拔, type: bar, stack: main, z: 2, emphasis: { focus: series }, itemStyle: { color: "#59a14f" }, data: [2, 1, 0, "-", 2, 1, 0, "-", 2, 1, 0, "-", 2, 1, 0] }
  - { name: 健康检查, type: bar, stack: main, z: 2, emphasis: { focus: series }, itemStyle: { color: "#4e79a7" }, data: [8, 6, 4, "-", 6, 5, 3, "-", 4, 3, 2, "-", 2, 2, 1] }
  - { name: RTO总计, type: bar, barGap: "-100%", barWidth: 20, z: 1, itemStyle: { color: "#888", opacity: 0 }, emphasis: { itemStyle: { opacity: 0 } }, data: [150, 127, 104, "-", 78, 66, 53, "-", 41, 34, 27, "-", 29, 23, 16] }
  - { name: RTO预算, type: bar, barGap: "-100%", barWidth: 20, z: 0, itemStyle: { color: "rgba(0,0,0,0.08)" }, emphasis: { itemStyle: { color: "rgba(0,0,0,0.12)" } }, data: [150, 150, 150, "-", 90, 90, 90, "-", 45, 45, 45, "-", 30, 30, 30] }
```
{{< /echarts >}}


--------

## 故障模型


|    项目    |           最好           |               最坏               |                平均                | 说明                             |
|:--------:|:----------------------:|:------------------------------:|:--------------------------------:|:-------------------------------|
| **租约过期** |      `ttl - loop`      |             `ttl`              |          `ttl - loop/2`          | 最好：即将刷新时宕机<br/>最坏：刚刷新完就宕机      |
| **从库检测** |          `0`           |             `loop`             |            `loop / 2`            | 最好：恰好在检测点<br/>最坏：刚错过检测点        |
| **抢锁提拔** |          `0`           |              `2`               |               `1`                | 最好：直接抢锁提升<br/>最坏：API超时+Promote |
| **健康检查** | `(rise-1) × fastinter` | `(rise-1) × fastinter + inter` | `(rise-1) × fastinter + inter/2` | 最好：检查前状态变化<br/>最坏：检查后瞬间状态变化    |
{.full-width}

**被动故障与主动故障的核心区别**：

|       场景       | Patroni 状态 |        租约处理        |         主要等待时间          |
|:--------------:|:----------:|:------------------:|:-----------------------:|
| **主动故障**（PG崩溃） |   存活，健康    | 主动尝试重启 PG，超时后释放租约  | `primary_start_timeout` |
| **被动故障**（节点宕机） |  随节点一起死亡   | 无法主动释放，只能等待 TTL 过期 |          `ttl`          |
{.full-width}

在被动故障场景中，Patroni 随节点一起宕机，**无法主动释放 Leader Key**。
DCS 中的租约只能等待 TTL 自然过期后触发集群选举。


--------

## 时序分析

### 阶段 1：租约过期

Patroni 主库会在每个 `loop_wait` 周期刷新 Leader Key，将 TTL 重置为配置值。

```
时间线：
     t-loop        t          t+ttl-loop    t+ttl
       |           |              |           |
    上次刷新    故障发生        最好情况      最坏情况
       |←── loop ──→|              |           |
       |←──────────── ttl ─────────────────────→|
```

- **最好情况**：故障发生在即将刷新租约之前（距上次刷新已过 `loop`），剩余 TTL = `ttl - loop`
- **最坏情况**：故障发生在刚刷新租约之后，需等待完整 `ttl`
- **平均情况**：`ttl - loop/2`

```math
T_{expire} = \begin{cases}
ttl - loop & \text{最好} \\
ttl - loop/2 & \text{平均} \\
ttl & \text{最坏}
\end{cases}
```


### 阶段 2：从库检测

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


### 阶段 3：抢锁提拔

从库发现 Leader Key 过期后，开始竞选过程，获得 Leader Key 的从库执行 `pg_ctl promote`，将自己提升为新主库。

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


### 阶段 4：健康检查

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

**最好情况**

```math
RTO_{min} = ttl - loop + 0.1 + (rise-1) \times fastinter
```

**平均情况**

```math
RTO_{avg} = ttl + 1 + inter/2 + (rise-1) \times fastinter
```

**最坏情况**

```math
RTO_{max} = ttl + loop + 2 + inter + (rise-1) \times fastinter
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
|  租约过期  | `15` / `17` / `20` | `25` / `27` / `30` | `50` / `55` / `60`  | `100` / `110` / `120` |
|  从库检测  |  `0` / `3` / `5`   |  `0` / `3` / `5`   |  `0` / `5` / `10`   |   `0` / `10` / `20`   |
|  抢锁提拔  |  `0` / `1` / `2`   |  `0` / `1` / `2`   |   `0` / `1` / `2`   |    `0` / `1` / `2`    |
|  健康检查  |  `1` / `2` / `2`   |  `2` / `3` / `4`   |   `3` / `5` / `6`   |    `4` / `6` / `8`    |
| **总计** | `16` / `23` / `29` | `27` / `34` / `41` | `53` / `66` / `78`  | `104` / `127` / `150` |
{.full-width}

