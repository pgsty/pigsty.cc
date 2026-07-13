---
title: 备份策略
weight: 1702
description: 设计并配置备份策略：备份频率决定恢复速度，保留策略决定恢复窗口与空间占用，两张推演图帮您做出量化决策。
icon: fa-solid fa-clipboard-list
categories: [任务]
---

备份策略要回答三个问题：**何时** 备份（调度计划）、**何处** 存放（[**备份仓库**](/docs/pgsql/backup/repository)）、
**保留多久**（保留策略）。本页给出两套久经考验的预设策略及其量化推演 ——
背后的权衡逻辑请参阅概念层文档 [**策略权衡**](/docs/concept/pitr/tradeoff/)。

备份频率与恢复速度直接相关：恢复时需要从最近的基础备份开始重放 WAL 日志到目标时间点，
备份越频繁，需要重放的 WAL 越少，恢复越快；而保留策略与仓库空间直接相关：窗口越长，占用空间越大。


--------

## 每日全量备份

对于生产数据库，建议从最简单的每日全量备份策略开始。这也是 Pigsty 的默认备份策略，
配合默认的 `local` 本地仓库（保留最近 2 个全量备份）使用：

```yaml title="每天凌晨1点全量备份，本地仓库保留2份"
pg_crontab: [ '00 01 * * * /pg/bin/pg-backup full' ]
pgbackrest_method: local          # 选择备份仓库方法：`local`、`minio` 或其他自定义仓库
pgbackrest_repo:                  # pgbackrest 仓库配置: https://pgbackrest.org/configuration.html#section-repository
  local:                          # 使用本地 POSIX 文件系统的默认 pgbackrest 仓库
    path: /pg/backup              # 本地备份目录，默认为 `/pg/backup`
    retention_full_type: count    # 按数量保留全量备份
    retention_full: 2             # 使用本地文件系统仓库时，保留2个，最多3个全量备份
```

假设您的数据库大小为 100GB，每天写入 10GB 数据，备份耗时 1 小时。
下图将「恢复窗口」与「存储空间占用」合并到同一时间轴（`0~108h`）上推演该策略的稳态行为：
恢复窗口在 **25～49 小时** 之间循环，备份占用约为 2 个全量备份加上 2 天的 WAL 归档。
在实践中，您需要准备至少 **3～5 倍** 数据库大小的备份磁盘，才能从容使用该默认策略。

{{< echarts height="640px" >}}
```js
var int1 = function(v) { return Math.round(Number(v)); };
var fmtHour = function(v) { return int1(v) === 0 ? '0' : int1(v) + 'h'; };
var fmtWin = function(v) { return int1(v) + 'h'; };
var fmtGb = function(v) {
  return Number(v) === 0 ? '0' : (((Number(v) >= 100) ? Number(v).toFixed(0) : ((Number(v) >= 10) ? Number(v).toFixed(1) : Number(v).toFixed(2))).replace(/\.00$/, '').replace(/(\.\d)0$/, '$1') + 'GB');
};
var fmtGbTick = function(v) { return int1(v) === 0 ? '0' : '' + int1(v); };
var tipMerged = function(params) {
  if (!params || !params.length) { return ''; }
  return (function(stat) {
    return ['时间: ' + int1(params[0].axisValue) + 'h']
      .concat(stat.win === null ? [] : ['恢复窗口: ' + fmtWin(stat.win)])
      .concat(['首要备份: ' + fmtGb(stat.p), '次要备份: ' + fmtGb(stat.s), 'WAL归档: ' + fmtGb(stat.w)])
      .concat(stat.t > 0 ? ['瞬时备份: ' + fmtGb(stat.t)] : [])
      .concat(['备份存储: ' + fmtGb(stat.p + stat.s + stat.w + stat.t)])
      .join('<br/>');
  })(params.reduce(function(acc, item) {
    return item.seriesName === '恢复窗口' ? { win: Number(item.data[1]), p: acc.p, s: acc.s, w: acc.w, t: acc.t } :
      (item.seriesName === '首要备份' ? { win: acc.win, p: Number(item.value), s: acc.s, w: acc.w, t: acc.t } :
      (item.seriesName === '次要备份' ? { win: acc.win, p: acc.p, s: Number(item.value), w: acc.w, t: acc.t } :
      (item.seriesName === 'WAL归档' ? { win: acc.win, p: acc.p, s: acc.s, w: Number(item.value), t: acc.t } :
      (item.seriesName === '瞬时备份' ? { win: acc.win, p: acc.p, s: acc.s, w: acc.w, t: Number(item.value) } : acc))));
  }, { win: null, p: 0, s: 0, w: 0, t: 0 }));
};
```
```yaml
tooltip: { trigger: axis, formatter: $fn:tipMerged, axisPointer: { type: line, snap: true, label: { show: false } } }
axisPointer: { link: [ { xAxisIndex: [0, 1] } ] }
legend: { show: false, bottom: 10, itemGap: 18, data: ["首要备份", "次要备份", "WAL归档", "瞬时备份"] }
grid:
  - { left: 82, right: "10%", top: 42, height: 218, containLabel: false }
  - { left: 82, right: "10%", top: 286, height: 218, containLabel: false }
xAxis:
  - type: category
    gridIndex: 0
    position: bottom
    boundaryGap: false
    data: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108]
    name: 时间 h
    nameLocation: end
    nameGap: 10
    nameTextStyle: { align: left, verticalAlign: top, padding: [8, 0, 0, 0] }
    axisLabel: { interval: 11, formatter: $fn:fmtHour }
    axisLine: { show: true, symbol: [none, arrow], symbolSize: [10, 14], lineStyle: { width: 1.6, color: "#4b5563" } }
    axisTick: { show: true, length: 6 }
    splitLine: { show: true, lineStyle: { type: dashed, width: 1, opacity: 0.28, color: "#9ca3af" } }
    minorTick: { show: true, splitNumber: 12, length: 3 }
    minorSplitLine: { show: true, lineStyle: { type: dotted, width: 1, opacity: 0.14, color: "#9ca3af" } }
  - type: category
    gridIndex: 1
    position: top
    boundaryGap: true
    data: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108]
    axisLabel: { show: false }
    axisLine: { show: true, lineStyle: { width: 1.6, color: "#4b5563" } }
    axisTick: { show: true, length: 6 }
    splitLine: { show: true, lineStyle: { type: dashed, width: 1, opacity: 0.22, color: "#9ca3af" } }
yAxis:
  - type: value
    gridIndex: 0
    min: 0
    max: 52
    interval: 5
    name: 恢复窗口 h
    nameLocation: end
    nameRotate: 0
    nameGap: 8
    nameTextStyle: { align: left, verticalAlign: bottom, padding: [0, 0, 8, 4] }
    axisLabel: { formatter: $fn:fmtWin }
    axisLine: { show: true, symbol: [none, arrow], symbolSize: [10, 14], lineStyle: { width: 1.6, color: "#4b5563" } }
    axisTick: { show: true, length: 6 }
    splitLine: { show: true, lineStyle: { type: dashed, width: 1, opacity: 0.35, color: "#9ca3af" } }
    minorTick: { show: true, splitNumber: 5, length: 3 }
    minorSplitLine: { show: true, lineStyle: { type: dotted, width: 1, opacity: 0.18, color: "#9ca3af" } }
  - type: value
    gridIndex: 1
    min: 0
    max: 350
    interval: 50
    inverse: true
    name: 存储空间 GB
    nameLocation: end
    nameRotate: 0
    nameGap: 8
    nameTextStyle: { align: left, verticalAlign: top, padding: [10, 0, 0, 4] }
    axisLabel: { formatter: $fn:fmtGbTick }
    axisLine: { show: true, symbol: [arrow, none], symbolSize: [10, 14], lineStyle: { width: 1.6, color: "#4b5563" } }
    axisTick: { show: true, length: 6 }
    splitLine: { show: true, lineStyle: { type: dashed, width: 1, opacity: 0.32, color: "#9ca3af" } }
series: [ { name: 恢复窗口, type: line, smooth: false, symbol: none, showSymbol: false, xAxisIndex: 0, yAxisIndex: 0, lineStyle: { width: 3, color: "#f2a000" }, itemStyle: { color: "#f2a000" }, data: [[0,0],[1,0],[1,1],[2,2],[3,3],[4,4],[5,5],[6,6],[7,7],[8,8],[9,9],[10,10],[11,11],[12,12],[13,13],[14,14],[15,15],[16,16],[17,17],[18,18],[19,19],[20,20],[21,21],[22,22],[23,23],[24,24],[25,25],[26,26],[27,27],[28,28],[29,29],[30,30],[31,31],[32,32],[33,33],[34,34],[35,35],[36,36],[37,37],[38,38],[39,39],[40,40],[41,41],[42,42],[43,43],[44,44],[45,45],[46,46],[47,47],[48,48],[49,49],[49,25],[50,26],[51,27],[52,28],[53,29],[54,30],[55,31],[56,32],[57,33],[58,34],[59,35],[60,36],[61,37],[62,38],[63,39],[64,40],[65,41],[66,42],[67,43],[68,44],[69,45],[70,46],[71,47],[72,48],[73,49],[73,25],[74,26],[75,27],[76,28],[77,29],[78,30],[79,31],[80,32],[81,33],[82,34],[83,35],[84,36],[85,37],[86,38],[87,39],[88,40],[89,41],[90,42],[91,43],[92,44],[93,45],[94,46],[95,47],[96,48],[97,49],[97,25],[98,26],[99,27],[100,28],[101,29],[102,30],[103,31],[104,32],[105,33],[106,34],[107,35],[108,36]], markLine: { symbol: none, label: { show: false }, data: [ { xAxis: 0, lineStyle: { color: "#59a14f", type: "solid", width: 1.4, opacity: 0.75 } }, { xAxis: 24, lineStyle: { color: "#59a14f", type: "solid", width: 1.4, opacity: 0.75 } }, { xAxis: 48, lineStyle: { color: "#59a14f", type: "solid", width: 1.4, opacity: 0.75 } }, { xAxis: 72, lineStyle: { color: "#59a14f", type: "solid", width: 1.4, opacity: 0.75 } }, { xAxis: 96, lineStyle: { color: "#59a14f", type: "solid", width: 1.4, opacity: 0.75 } }, { xAxis: 1, lineStyle: { color: "#336791", type: "solid", width: 1.4, opacity: 0.8 } }, { xAxis: 25, lineStyle: { color: "#336791", type: "solid", width: 1.4, opacity: 0.8 } }, { xAxis: 49, lineStyle: { color: "#336791", type: "solid", width: 1.4, opacity: 0.8 } }, { xAxis: 73, lineStyle: { color: "#336791", type: "solid", width: 1.4, opacity: 0.8 } }, { xAxis: 97, lineStyle: { color: "#336791", type: "solid", width: 1.4, opacity: 0.8 } }, { yAxis: 25, label: { show: true, formatter: "稳态下限 25h", position: "end", distance: 12, color: "#2563eb" }, lineStyle: { color: "#2563eb", type: "dashdot", width: 1.4, opacity: 0.75 } }, { yAxis: 49, label: { show: true, formatter: "窗口峰值 49h", position: "end", distance: 12, color: "#7c3aed" }, lineStyle: { color: "#7c3aed", type: "dashdot", width: 1.4, opacity: 0.75 } } ] } }, { name: 首要备份, type: bar, stack: used, xAxisIndex: 1, yAxisIndex: 1, barWidth: 5, itemStyle: { color: "#59a14f" }, data: [0,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100] }, { name: 次要备份, type: bar, stack: used, xAxisIndex: 1, yAxisIndex: 1, barWidth: 5, itemStyle: { color: "#4e79a7" }, data: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100] }, { name: WAL归档, type: bar, stack: used, xAxisIndex: 1, yAxisIndex: 1, barWidth: 5, itemStyle: { color: "#edc949" }, data: [0,0,0.42,0.83,1.25,1.67,2.08,2.5,2.92,3.33,3.75,4.17,4.58,5,5.42,5.83,6.25,6.67,7.08,7.5,7.92,8.33,8.75,9.17,9.58,10,10.42,10.83,11.25,11.67,12.08,12.5,12.92,13.33,13.75,14.17,14.58,15,15.42,15.83,16.25,16.67,17.08,17.5,17.92,18.33,18.75,19.17,19.58,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20] }, { name: 瞬时备份, type: bar, stack: used, xAxisIndex: 1, yAxisIndex: 1, barWidth: 5, itemStyle: { color: "#9ca3af", opacity: 0.75 }, data: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,100,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,100,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,100,0,0,0,0,0,0,0,0,0,0,0,0] } ]
```
{{< /echarts >}}


--------

## 全量 + 增量备份

如果使用 MinIO / S3 作为集中式备份仓库，存储空间不再受本地磁盘限制，
此时可以用「周全量 + 每日增量」配合两周保留策略，换取更长的恢复窗口：

```yaml title="周一全量备份，工作日增量备份，保留14天"
pg_crontab:  # 周一凌晨1点全量备份，其余每日增量备份
  - '00 01 * * 1           /pg/bin/pg-backup full'
  - '00 01 * * 2,3,4,5,6,7 /pg/bin/pg-backup'
pgbackrest_method: minio
pgbackrest_repo:                  # pgbackrest 仓库配置: https://pgbackrest.org/configuration.html#section-repository
  minio:                          # 可选的 minio 仓库
    type: s3                      # minio 兼容 S3 协议
    s3_endpoint: sss.pigsty       # minio 端点域名，默认为 `sss.pigsty`
    s3_region: us-east-1          # minio 区域，默认 us-east-1，对 minio 无实际意义
    s3_bucket: pgsql              # minio 桶名，默认为 `pgsql`
    s3_key: pgbackrest            # pgbackrest 的 minio 用户访问密钥
    s3_key_secret: S3User.Backup  # pgbackrest 的 minio 用户密钥
    s3_uri_style: path            # minio 使用路径风格 URI 而非主机风格
    path: /pgbackrest             # minio 备份路径，默认为 `/pgbackrest`
    storage_port: 9000            # minio 端口，默认 9000
    storage_ca_file: /etc/pki/ca.crt  # minio CA 证书路径，默认 `/etc/pki/ca.crt`
    block: y                      # 启用块级增量备份
    bundle: y                     # 将小文件打包成单个文件
    bundle_limit: 20MiB           # 文件包大小限制，对象存储建议 20MiB
    bundle_size: 128MiB           # 文件包目标大小，对象存储建议 128MiB
    cipher_type: aes-256-cbc      # 为远程备份仓库启用 AES 加密
    cipher_pass: pgBackRest       # AES 加密密码，默认为 'pgBackRest'
    retention_full_type: time     # 按时间保留全量备份
    retention_full: 14            # 保留最近 14 天的全量备份
```

同样假设数据库 100GB、每日写入 10GB，下图推演 30 天内恢复窗口与存储占用的变化：
恢复窗口在 **7～14 天** 之间循环（保证至少一周），稳态存储占用约为数据库大小的 4～5 倍 ——
块级增量与 zstd 压缩通常会使实际占用显著低于此粗估。

{{< echarts height="640px" >}}
```js
var int30d = function(v) { return Math.round(Number(v)); };
var fmtDay30 = function(v) { return (int30d(v) < 1 || int30d(v) > 30) ? '' : ('' + int30d(v)); };
var fmtWin30 = function(v) { return int30d(v) + 'h'; };
var fmtGb30 = function(v) { return Number(v) === 0 ? '0' : (((Number(v) >= 100) ? Number(v).toFixed(0) : ((Number(v) >= 10) ? Number(v).toFixed(1) : Number(v).toFixed(2))).replace(/\.00$/, '').replace(/(\.\d)0$/, '$1') + 'GB'); };
var fmtGbTick30 = function(v) { return int30d(v) === 0 ? '0' : '' + int30d(v); };
var valY30 = function(v) { return Array.isArray(v) ? Number(v[1]) : Number(v); };
var tipMerged30 = function(params) {
  if (!params || !params.length) { return ''; }
  return (function(stat) {
    return ['第' + int30d(params[0].axisValue) + '天']
      .concat(stat.win === null ? [] : ['恢复窗口: ' + fmtWin30(stat.win)])
      .concat(['首要备份: ' + fmtGb30(stat.p), '次要备份: ' + fmtGb30(stat.s), '增量备份: ' + fmtGb30(stat.i), 'WAL归档: ' + fmtGb30(stat.w)])
      .concat(stat.t > 0 ? ['瞬时备份: ' + fmtGb30(stat.t)] : [])
      .concat(['备份存储: ' + fmtGb30(stat.p + stat.s + stat.i + stat.w + stat.t)])
      .join('<br/>');
  })(params.reduce(function(acc, item) {
    return item.seriesName === '恢复窗口' ? { win: valY30(item.value), p: acc.p, s: acc.s, i: acc.i, w: acc.w, t: acc.t } :
      (item.seriesName === '首要备份' ? { win: acc.win, p: valY30(item.value), s: acc.s, i: acc.i, w: acc.w, t: acc.t } :
      (item.seriesName === '次要备份' ? { win: acc.win, p: acc.p, s: valY30(item.value), i: acc.i, w: acc.w, t: acc.t } :
      (item.seriesName === '增量备份' ? { win: acc.win, p: acc.p, s: acc.s, i: valY30(item.value), w: acc.w, t: acc.t } :
      (item.seriesName === 'WAL归档' ? { win: acc.win, p: acc.p, s: acc.s, i: acc.i, w: valY30(item.value), t: acc.t } :
      (item.seriesName === '瞬时备份' ? { win: acc.win, p: acc.p, s: acc.s, i: acc.i, w: acc.w, t: valY30(item.value) } : acc)))));
  }, { win: null, p: 0, s: 0, i: 0, w: 0, t: 0 }));
};
```
```yaml
tooltip: { trigger: axis, formatter: $fn:tipMerged30, axisPointer: { type: line, snap: true, label: { show: false } } }
axisPointer: { link: [ { xAxisIndex: [0, 1] } ] }
legend: { show: false, bottom: 10, itemGap: 18, data: ["首要备份", "次要备份", "增量备份", "WAL归档", "瞬时备份"] }
grid:
  - { left: 82, right: "10%", top: 42, height: 218, containLabel: false }
  - { left: 82, right: "10%", top: 302, height: 218, containLabel: false }
xAxis:
  - type: value
    gridIndex: 0
    position: bottom
    boundaryGap: false
    min: 0
    max: 31
    interval: 1
    name: 时间
    nameLocation: end
    nameGap: 10
    nameTextStyle: { align: left, verticalAlign: top, padding: [8, 0, 0, 0] }
    axisLabel: { formatter: $fn:fmtDay30 }
    axisLine: { show: true, symbol: [none, arrow], symbolSize: [10, 14], lineStyle: { width: 1.6, color: "#4b5563" } }
    axisTick: { show: true, length: 6 }
    splitLine: { show: true, lineStyle: { type: dashed, width: 1, opacity: 0.28, color: "#9ca3af" } }
    minorTick: { show: true, splitNumber: 4, length: 3 }
    minorSplitLine: { show: true, lineStyle: { type: dotted, width: 1, opacity: 0.14, color: "#9ca3af" } }
  - type: category
    gridIndex: 1
    position: top
    boundaryGap: true
    z: 10
    data: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]
    axisLabel: { show: false }
    axisLine: { show: true, lineStyle: { width: 1.6, color: "#4b5563" } }
    axisTick: { show: true, alignWithLabel: true, length: 6 }
    splitLine: { show: true, lineStyle: { type: dashed, width: 1, opacity: 0.22, color: "#9ca3af" } }
yAxis:
  - type: value
    gridIndex: 0
    min: 0
    max: 360
    interval: 48
    name: 恢复窗口 h
    nameLocation: end
    nameRotate: 0
    nameGap: 8
    nameTextStyle: { align: left, verticalAlign: bottom, padding: [0, 0, 8, 4] }
    axisLabel: { formatter: $fn:fmtWin30 }
    axisLine: { show: true, symbol: [none, arrow], symbolSize: [10, 14], lineStyle: { width: 1.6, color: "#4b5563" } }
    axisTick: { show: true, length: 6 }
    splitLine: { show: true, lineStyle: { type: dashed, width: 1, opacity: 0.35, color: "#9ca3af" } }
    minorTick: { show: true, splitNumber: 4, length: 3 }
    minorSplitLine: { show: true, lineStyle: { type: dotted, width: 1, opacity: 0.18, color: "#9ca3af" } }
  - type: value
    gridIndex: 1
    min: 0
    max: 600
    interval: 50
    inverse: true
    z: 10
    name: 存储空间 GB
    nameLocation: end
    nameRotate: 0
    nameGap: 8
    nameTextStyle: { align: left, verticalAlign: top, padding: [10, 0, 0, 4] }
    axisLabel: { formatter: $fn:fmtGbTick30 }
    axisLine: { show: true, symbol: [arrow, none], symbolSize: [10, 14], lineStyle: { width: 1.6, color: "#4b5563" } }
    axisTick: { show: true, length: 6 }
    splitLine: { show: true, lineStyle: { type: dashed, width: 1, opacity: 0.32, color: "#9ca3af" } }
series:
  - { name: 恢复窗口, type: line, smooth: false, symbol: none, showSymbol: false, xAxisIndex: 0, yAxisIndex: 0, lineStyle: { width: 3, color: "#f28e2c" }, itemStyle: { color: "#f28e2c" }, data: [[1,24],[2,48],[3,72],[4,96],[5,120],[6,144],[7,168],[8,192],[9,216],[10,240],[11,264],[12,288],[13,312],[14,336],[14,168],[15,192],[16,216],[17,240],[18,264],[19,288],[20,312],[21,336],[21,168],[22,192],[23,216],[24,240],[25,264],[26,288],[27,312],[28,336],[28,168],[29,192],[30,216]], markLine: { symbol: none, label: { show: false }, data: [ { xAxis: 7, lineStyle: { color: "#336791", type: "solid", width: 1.4, opacity: 0.65 } }, { xAxis: 14, lineStyle: { color: "#336791", type: "solid", width: 1.4, opacity: 0.65 } }, { xAxis: 21, lineStyle: { color: "#336791", type: "solid", width: 1.4, opacity: 0.65 } }, { xAxis: 28, lineStyle: { color: "#336791", type: "solid", width: 1.4, opacity: 0.65 } }, { yAxis: 168, label: { show: true, formatter: "窗口下限 7d", position: "end", distance: 12, color: "#2563eb" }, lineStyle: { color: "#2563eb", type: "dashdot", width: 1.4, opacity: 0.72 } }, { yAxis: 336, label: { show: true, formatter: "窗口上限 14d", position: "end", distance: 12, color: "#7c3aed" }, lineStyle: { color: "#7c3aed", type: "dashdot", width: 1.4, opacity: 0.72 } } ] } }
  - { name: 首要备份, type: bar, stack: used, xAxisIndex: 1, yAxisIndex: 1, barWidth: 16, itemStyle: { color: "#59a14f" }, data: [100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100] }
  - { name: 次要备份, type: bar, stack: used, xAxisIndex: 1, yAxisIndex: 1, barWidth: 16, itemStyle: { color: "#4e79a7" }, data: [0,0,0,0,0,0,0,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100] }
  - { name: 增量备份, type: bar, stack: used, xAxisIndex: 1, yAxisIndex: 1, barWidth: 16, itemStyle: { color: "#76b7b2" }, data: [0,10,20,30,40,50,60,70,80,90,100,110,120,130,70,80,90,100,110,120,130,70,80,90,100,110,120,130,70,80] }
  - { name: WAL归档, type: bar, stack: used, xAxisIndex: 1, yAxisIndex: 1, barWidth: 16, itemStyle: { color: "#edc949" }, data: [10,20,30,40,50,60,70,80,90,100,110,120,130,140,80,90,100,110,120,130,140,80,90,100,110,120,130,140,80,90] }
  - { name: 瞬时备份, type: bar, stack: used, xAxisIndex: 1, yAxisIndex: 1, barWidth: 16, itemStyle: { color: "#9ca3af", opacity: 0.75 }, data: [0,0,0,0,0,0,0,0,0,0,0,0,0,110,0,0,0,0,0,0,110,0,0,0,0,0,0,110,0,0] }
```
{{< /echarts >}}


--------

## 空间规划

两套策略的空间需求可以按以下经验公式粗估（实际占用受压缩与块级增量影响，通常更低）：

| 策略                       | 恢复窗口     | 空间粗估                      | 建议预留         |
|:-------------------------|:---------|:--------------------------|:-------------|
| 每日全量，保留 2 份（local）       | 25～49 小时 | 2 × 全量 + 2 天 WAL          | 数据库大小的 3～5 倍 |
| 周全量 + 日增量，保留 14 天（minio） | 7～14 天   | 2 × 全量 + 12 份增量 + 2 周 WAL | 数据库大小的 4～5 倍 |
{.full-width}

注意 **瞬时峰值**：新的全量备份完成之前，旧备份尚未过期，仓库中会短暂同时存在「保留数 + 1」份全量备份
（图中灰色的"瞬时备份"）——空间规划必须覆盖这个峰值而非稳态。

WAL 归档的增长与写入负载成正比。批量导数、`VACUUM FULL`、大规模 `UPDATE` 都会瞬间产生大量 WAL，
如果备份仓库空间紧张，请在此类操作前后关注仓库水位（[**监控指标**](/docs/pgbackrest/metric) 开箱即用）。


--------

## 应用策略变更

备份策略的三类变更，分别用对应的剧本任务应用：

```bash
./pgsql.yml -t pg_crontab -l pg-meta    # 变更调度计划（pg_crontab）后：更新 crontab
./pgsql.yml -t pg_backup  -l pg-meta    # 变更仓库定义（pgbackrest_repo / pgbackrest_method）后：重新渲染配置并初始化 stanza
pg-backup full                          # 切换仓库后：立即执行一次全量备份，建立新仓库中的恢复起点
```

注意：切换 [**`pgbackrest_method`**](/docs/pgsql/param#pgbackrest_method) 到新仓库后，旧仓库中的备份不会自动迁移；
在新仓库完成首次全量备份之前，恢复窗口存在缺口。
