---
title: 人工切换
weight: 40
description: 管理员手动执行 Switchover 或 Failover 时的故障切换路径
icon: fa-solid fa-hand
draft: true
module: [PGSQL]
categories: [概念]
---

{{< infographic >}}
```
infographic list-row-simple-horizontal-arrow
data

  items
    - label 命令执行
      desc 管理员执行 failover
      icon mingcute/terminal-fill
    - label 从库提升
      desc pg_ctl promote
      icon mingcute/arrow-up-circle-fill
    - label 健康检查
      desc HAProxy 检测上线
      icon mingcute/check-circle-fill
theme light
  palette antv
```
{{< /infographic >}}


--------

## RTO 时序图

以下分析以 **Failover**（人工故障转移）为主，因为它涉及实际的服务中断时间。

{{< echarts height="520px" >}}
```js
var fmt = function(params) { if (!params || !params.length || params[0].name === '') return ''; return '<b>' + params[0].name + '</b><br/>' + params.filter(p => p.value !== '-' && p.value != null).map(p => p.marker + ' ' + p.seriesName + ': ' + p.value + 's').join('<br/>'); };
```
```yaml
tooltip: { trigger: axis, axisPointer: { type: shadow }, formatter: $fn:fmt }
legend: { top: 0, itemGap: 12, data: [命令执行, 从库提升, 健康检查] }
grid: { left: 64, right: 24, bottom: 32, top: 40 }
xAxis: { type: value, name: 秒, nameLocation: end, max: 15, axisLine: { show: true }, axisTick: { show: true }, splitLine: { show: true, lineStyle: { type: dashed, opacity: 0.5 } }, minorTick: { show: true, splitNumber: 5 }, minorSplitLine: { show: true, lineStyle: { type: dotted, opacity: 0.2 } } }
yAxis: { type: category, axisLine: { show: true }, axisTick: { show: true }, splitLine: { show: false }, axisLabel: { fontSize: 10, fontFamily: monospace }, data: [wide-max, wide-avg, wide-min, "", safe-max, safe-avg, safe-min, "", norm-max, norm-avg, norm-min, "", fast-max, fast-avg, fast-min] }
series:
  - { name: 命令执行, type: bar, stack: main, barWidth: 20, z: 2, emphasis: { focus: series }, itemStyle: { color: "#b07aa1" }, data: [2, 1, 0, "-", 2, 1, 0, "-", 2, 1, 0, "-", 2, 1, 0] }
  - { name: 从库提升, type: bar, stack: main, z: 2, emphasis: { focus: series }, itemStyle: { color: "#59a14f" }, data: [1, 0, 0, "-", 1, 0, 0, "-", 1, 0, 0, "-", 1, 0, 0] }
  - { name: 健康检查, type: bar, stack: main, z: 2, emphasis: { focus: series }, itemStyle: { color: "#4e79a7" }, data: [8, 6, 4, "-", 6, 5, 3, "-", 4, 3, 2, "-", 2, 2, 1] }
  - { name: RTO总计, type: bar, barGap: "-100%", barWidth: 20, z: 1, itemStyle: { color: "#888", opacity: 0 }, emphasis: { itemStyle: { opacity: 0 } }, data: [11, 7, 4, "-", 9, 6, 3, "-", 7, 4, 2, "-", 5, 3, 1] }
```
{{< /echarts >}}


--------

## 故障模型


|    项目    |           最好           |               最坏               |                平均                | 说明                                  |
|:--------:|:----------------------:|:------------------------------:|:--------------------------------:|:------------------------------------|
| **命令执行** |          `0`           |              `2`               |               `1`                | 最好：API 立即响应<br/>最坏：网络延迟或 API 超时     |
| **从库提升** |          `0`           |              `1`               |               `0`                | 最好：promote 瞬间完成<br/>最坏：checkpoint 开销 |
| **健康检查** | `(rise-1) × fastinter` | `(rise-1) × fastinter + inter` | `(rise-1) × fastinter + inter/2` | 最好：检查前状态变化<br/>最坏：检查后瞬间状态变化          |
{.full-width}

**人工切换与自动切换的核心区别**：

|     切换方式      |  租约过期  |  从库检测  |    主要耗时     |    典型 RTO    |
|:-------------:|:------:|:------:|:-----------:|:------------:|
| **自动切换**（过期故障） | 等待 TTL | 等待循环唤醒 | 租约过期 + 从库检测 | 16s ~ 150s  |
| **自动切换**（崩溃故障） | 等待重启超时 | 等待循环唤醒 | 重启超时 + 从库检测 | 1s ~ 111s   |
| **人工切换**（Failover） | **跳过** | **跳过** |    健康检查     | **1s ~ 11s** |
{.full-width}

人工切换跳过了最耗时的**租约过期**和**从库检测**阶段，RTO 大幅缩短。


--------

## 时序分析

### 阶段 1：命令执行

管理员执行 Failover 命令，Patroni 接收并处理 REST API 请求。

```bash
# Pigsty 封装的 failover 命令
pg failover pg-test              # 故障转移到最佳候选
pg failover pg-test pg-test-2    # 故障转移到指定从库
```

```
时间线：
  执行命令      API响应      开始提升
     |           |           |
     |←── 0~2s ──→|
```

- **最好情况**：API 立即响应，开销可忽略 `≈ 0`
- **最坏情况**：网络延迟或 DCS 访问超时，`2s`
- **平均情况**：`1s`

```math
T_{command} = \begin{cases}
0 & \text{最好} \\
1 & \text{平均} \\
2 & \text{最坏}
\end{cases}
```


### 阶段 2：从库提升

Patroni 获取 Leader Key 并执行 `pg_ctl promote` 将目标从库提升为新主库。

```
提升流程：
  Patroni ──→ 获取 Leader Key ──→ pg_ctl promote ──→ 新主库就绪
```

- **最好情况**：promote 瞬间完成，`≈ 0`
- **最坏情况**：需要完成 checkpoint，`1s`
- **平均情况**：`0s`（通常很快）

```math
T_{promote} = \begin{cases}
0 & \text{最好} \\
0 & \text{平均} \\
1 & \text{最坏}
\end{cases}
```


### 阶段 3：健康检查

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
RTO_{min} = 0 + 0 + (rise-1) \times fastinter
```

$$RTO_{min} = (rise-1) \times fastinter$$

**平均情况**

```math
RTO_{avg} = 1 + 0 + (rise-1) \times fastinter + inter/2
```

$$RTO_{avg} = 1 + (rise-1) \times fastinter + inter/2$$

**最坏情况**

```math
RTO_{max} = 2 + 1 + (rise-1) \times fastinter + inter
```

$$RTO_{max} = 3 + (rise-1) \times fastinter + inter$$


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

|   阶段   |      fast       |      norm       |      safe       |       wide       |
|:------:|:---------------:|:---------------:|:---------------:|:----------------:|
|  命令执行  | `0` / `1` / `2` | `0` / `1` / `2` | `0` / `1` / `2` | `0` / `1` / `2`  |
|  从库提升  | `0` / `0` / `1` | `0` / `0` / `1` | `0` / `0` / `1` | `0` / `0` / `1`  |
|  健康检查  | `1` / `2` / `2` | `2` / `3` / `4` | `3` / `5` / `6` | `4` / `6` / `8`  |
| **总计** | `1` / `3` / `5` | `2` / `4` / `7` | `3` / `6` / `9` | `4` / `7` / `11` |
{.full-width}


--------

## Switchover 说明

**Switchover**（计划切换）用于计划性维护场景，与 Failover 的主要区别在于 **WAL 追平阶段**。

```bash
# Pigsty 封装的 switchover 命令
pg switchover pg-test              # 切换到最佳候选
pg switchover pg-test pg-test-2    # 切换到指定从库
```

{{< infographic >}}
```
infographic list-row-simple-horizontal-arrow
data
  title Switchover 计划切换流程
  desc 主库正常运行，等待 WAL 追平后优雅切换
  items
    - label 停止写入
      desc 主库停止接受写入
      icon mingcute/pause-circle-fill
    - label WAL 追平
      desc 等待从库同步完成
      icon mingcute/time-fill
    - label 从库提升
      desc Patroni 执行 pg_ctl promote
      icon mingcute/arrow-up-circle-fill
    - label 健康检查
      desc HAProxy 检测新主上线
      icon mingcute/check-circle-fill
theme light
  palette antv
```
{{< /infographic >}}

**WAL 追平时间不计入 RTO**：追平期间主库仍可处理只读请求，服务并未完全中断。

|     类型      |      场景       |   主库状态   | WAL 追平 |  数据丢失  |       RTO       |
|:-----------:|:-------------:|:--------:|:------:|:------:|:---------------:|
| Switchover  | 计划维护、滚动升级、迁移  |   正常运行   |   等待   |   无    | ≈ Failover RTO  |
|  Failover   |  主库故障、紧急切换   |  故障或不可达  |   跳过   | 可能有少量  |   1s ~ 11s    |
{.full-width}

**WAL 追平时间** 取决于从库的复制延迟。在正常运维场景下，从库通常保持同步或接近同步状态，追平可在毫秒到秒级完成。
使用同步复制时，WAL 追平时间为 0，此时 Switchover 与 Failover 的 RTO 几乎相同。


--------

## 关键洞察

1. **人工切换 RTO 极短**：1~11 秒，远低于自动切换的 16~150 秒
2. **健康检查是主要延迟源**：占总 RTO 的 60%~75%
3. **紧急情况下的最佳选择**：如果管理员能快速响应，人工 Failover 是恢复服务的最快方式

|    模式    | 人工 Failover | 自动切换（过期故障） | 自动切换（崩溃故障） |   加速倍数   |
|:--------:|:-----------:|:-----------:|:-----------:|:--------:|
| **fast** |     3s      |    23s     |    24s     |  **8x**  |
| **norm** |     4s      |    34s     |    30s     |  **8x**  |
| **safe** |     6s      |    66s     |    46s     | **8~11x** |
| **wide** |     7s      |   127s     |    87s     | **12~18x** |
{.full-width}

