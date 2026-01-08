---
title: 发布注记
weight: 5660
icon: fa-solid fa-clipboard-list
description: PG Exporter 版本发布历史
---

`pg_exporter` 的最新稳定版本是 [v1.1.1](https://github.com/pgsty/pg_exporter/releases/tag/v1.1.1)

| 版本 | 日期 | 摘要 | GitHub |
|:----:|:----:|------|:------:|
| [v1.1.1](#v111) | 2025-12-30 | 新增 pg_timeline 采集器，pg_sub_16 分支，Bug 修复 | [v1.1.1](https://github.com/pgsty/pg_exporter/releases/tag/v1.1.1) |
| [v1.1.0](#v110) | 2025-12-15 | 更新默认指标采集器，升级到 Go 1.25.5 | [v1.1.0](https://github.com/pgsty/pg_exporter/releases/tag/v1.1.0) |
| [v1.0.3](#v103) | 2025-11-20 | 例行更新到 1.25.4，修复不支持的 libpq 环境变量 | [v1.0.3](https://github.com/pgsty/pg_exporter/releases/tag/v1.0.3) |
| [v1.0.2](#v102) | 2025-08-14 | 使用 goreleaser 构建更多操作系统架构 | [v1.0.2](https://github.com/pgsty/pg_exporter/releases/tag/v1.0.2) |
| [v1.0.1](#v101) | 2025-07-17 | DockerHub 镜像，Go 1.24.5，禁用 pg_tsdb_hypertable | [v1.0.1](https://github.com/pgsty/pg_exporter/releases/tag/v1.0.1) |
| [v1.0.0](#v100) | 2025-05-06 | PostgreSQL 18 支持，新增 WAL/检查点/I/O 指标 | [v1.0.0](https://github.com/pgsty/pg_exporter/releases/tag/v1.0.0) |
| [v0.9.0](#v090) | 2025-04-26 | TimescaleDB、Citus、pg_wait_sampling 采集器 | [v0.9.0](https://github.com/pgsty/pg_exporter/releases/tag/v0.9.0) |
| [v0.8.1](#v081) | 2025-02-14 | 依赖更新，Docker 镜像标签 | [v0.8.1](https://github.com/pgsty/pg_exporter/releases/tag/v0.8.1) |
| [v0.8.0](#v080) | 2025-02-14 | PgBouncer 1.24 支持，Go 1.24，日志重构 | [v0.8.0](https://github.com/pgsty/pg_exporter/releases/tag/v0.8.0) |
| [v0.7.1](#v071) | 2024-12-29 | 例行更新，支持 Reader 配置 | [v0.7.1](https://github.com/pgsty/pg_exporter/releases/tag/v0.7.1) |
| [v0.7.0](#v070) | 2024-08-13 | PostgreSQL 17 支持，谓词查询功能 | [v0.7.0](https://github.com/pgsty/pg_exporter/releases/tag/v0.7.0) |
| [v0.6.0](#v060) | 2023-10-18 | PostgreSQL 16 支持，ARM64 包，安全修复 | [v0.6.0](https://github.com/pgsty/pg_exporter/releases/tag/v0.6.0) |
| [v0.5.0](#v050) | 2022-04-27 | RPM/DEB 构建，列缩放，指标增强 | [v0.5.0](https://github.com/pgsty/pg_exporter/releases/tag/v0.5.0) |
| [v0.4.1](#v041) | 2022-03-08 | 采集器更新，connect-timeout 参数 | [v0.4.1](https://github.com/pgsty/pg_exporter/releases/tag/v0.4.1) |
| [v0.4.0](#v040) | 2021-07-12 | PostgreSQL 14 支持，自动发现功能 | [v0.4.0](https://github.com/pgsty/pg_exporter/releases/tag/v0.4.0) |
| [v0.3.2](#v032) | 2021-02-01 | Shadow DSN 修复，文档更新 | [v0.3.2](https://github.com/pgsty/pg_exporter/releases/tag/v0.3.2) |
| [v0.3.1](#v031) | 2020-12-04 | 旧版 PostgreSQL 配置修复 | [v0.3.1](https://github.com/pgsty/pg_exporter/releases/tag/v0.3.1) |
| [v0.3.0](#v030) | 2020-10-29 | PostgreSQL 13 支持，REST API，虚拟服务器 | [v0.3.0](https://github.com/pgsty/pg_exporter/releases/tag/v0.3.0) |
| [v0.2.0](#v020) | 2020-03-21 | YUM 包，配置重载支持 | [v0.2.0](https://github.com/pgsty/pg_exporter/releases/tag/v0.2.0) |
| [v0.1.2](#v012) | 2020-02-20 | 动态配置重载，批量模式 | [v0.1.2](https://github.com/pgsty/pg_exporter/releases/tag/v0.1.2) |
| [v0.1.1](#v011) | 2020-01-10 | 启动挂起 Bug 修复 | [v0.1.1](https://github.com/pgsty/pg_exporter/releases/tag/v0.1.1) |
| [v0.1.0](#v010) | 2020-01-08 | 首个稳定版本 | [v0.1.0](https://github.com/pgsty/pg_exporter/releases/tag/v0.1.0) |
| [v0.0.4](#v004) | 2019-12-20 | 生产环境测试版本 | [v0.0.4](https://github.com/pgsty/pg_exporter/releases/tag/v0.0.4) |
| [v0.0.3](#v003) | 2019-12-14 | 生产环境测试 | [v0.0.3](https://github.com/pgsty/pg_exporter/releases/tag/v0.0.3) |
| [v0.0.2](#v002) | 2019-12-09 | 早期测试版本 | [v0.0.2](https://github.com/pgsty/pg_exporter/releases/tag/v0.0.2) |
| [v0.0.1](#v001) | 2019-12-06 | 初始版本，支持 PgBouncer 模式 | [v0.0.1](https://github.com/pgsty/pg_exporter/releases/tag/v0.0.1) |


--------

## v1.1.1

小版本更新，新增采集器和 Bug 修复。

**新功能：**

- 新增 `pg_timeline` 采集器，用于时间线监控
- 新增 `pg_sub_16` 采集器分支，排除订阅中的并行操作（PostgreSQL 16+ 兼容性）

**Bug 修复：**

- 修复：为 `pg_recv` 采集器的 slotname 添加 coalesce 以处理 NULL 值

**校验和**

https://github.com/pgsty/pg_exporter/releases/download/v1.1.1/checksums.txt

```bash
fd5ee96511676fc11b975115a4870ed0c811056519f79ad7f24ab7ec538fa278  pg-exporter_1.1.1-1_amd64.deb
b90a08d16a6e4707d82f8f3ae282cb76acb331de607e7544532fd0b774b7aa27  pg-exporter_1.1.1-1_arm64.deb
163955f59a71da48901ffa26bb2f2db0712d31d8aeb1ab3fa463683f719a6d3a  pg-exporter_1.1.1-1_ppc64le.deb
cf4f8bc12bb8a2d1e55553f891fd31c43324e4348249727972eb44f82cd4e6c8  pg_exporter-1.1.1-1.aarch64.rpm
5a425b2f61f308b32f2d107372830c34eb685bfb312ee787f11877a20f1c4a2e  pg_exporter-1.1.1-1.ppc64le.rpm
23606ccea565368971ac2e7f39766455b507021f09457bcf61db13cb10501a16  pg_exporter-1.1.1-1.x86_64.rpm
ce74624eba92573318f50764cee4f355fa1f35697d209f70a4240f8f9d976188  pg_exporter-1.1.1.darwin-amd64.tar.gz
35fba12521dbdcc54a3792278ed4822e4ca9e951665b5e53dff7c2a0f7014ae3  pg_exporter-1.1.1.darwin-arm64.tar.gz
7699bdef15dd306289645beee8d40a123ca75dc988e46d89cdd75a1c1f650bef  pg_exporter-1.1.1.linux-amd64.tar.gz
f4baba59d27a8eb67f0c5209fed7b9f00f78db796e583cc3487701e7803671c6  pg_exporter-1.1.1.linux-arm64.tar.gz
810c3817c27358fa667714f8bfe8d52840a7ea010035e29547919ccb7c9fa781  pg_exporter-1.1.1.linux-ppc64le.tar.gz
3f6df693b3eb92fdaeaeccf99ea7e5977b2c65028a4f00bdfabbc0405b9f5f93  pg_exporter-1.1.1.windows-amd64.tar.gz
```

https://github.com/pgsty/pg_exporter/releases/tag/v1.1.1


--------

## v1.1.0

使用 Go 1.25.5 和最新依赖构建，采集器更新：

**采集器变更：**

- `pg_setting`：针对 PG10-18 兼容性进行重大重构，支持 `missing_ok`
  - 新增 13 个指标：`max_parallel_workers`、`max_parallel_workers_per_gather`、`max_parallel_maintenance_workers`、`shared_buffers`、`maintenance_work_mem`、`effective_cache_size`、`fsync`、`full_page_writes`、`autovacuum`、`autovacuum_max_workers`、`checkpoint_timeout`、`checkpoint_completion_target`、`hot_standby`、`synchronous_commit`、`io_method`
  - 将 `work_memory_size` 重命名为 `work_mem`
  - min_version 从 9.6 改为 10，显式 `::int` 类型转换
- `pg_size`：修复日志目录大小检测，使用 `logging_collector` 检查代替路径模式匹配
- `pg_table`：性能优化，用 JOIN 替换 LATERAL 子查询以提升查询性能；修复 `tuples` 和 `frozenxid` 指标类型从 COUNTER 改为 GAUGE；超时从 1s 增加到 2s
- `pg_vacuuming`：新增 PG17 采集器分支，包含新指标 `indexes_total`、`indexes_processed`、`dead_tuple_bytes` 用于索引 vacuum 进度跟踪
- `pg_query`：超时从 1s 增加到 2s 以应对高负载场景
- `pg_io`：修复 `reuses` 描述中的拼写错误（"in reused" -> "is reused"）
- `pg_checkpointer`：修复 pg_checkpointer_10 描述（"9.4+" -> "9.4-17"）
- `pg_db_confl`：修复 pg_db_confl_15 描述（"9.1 - 16" -> "9.1 - 15"）
- `pg_db`、`pg_indexing`、`pg_clustering`、`pg_backup` 格式对齐修复

**其他变更：**

- 由 [@anayrat](https://github.com/anayrat) 修复发布年份

**校验和**

https://github.com/pgsty/pg_exporter/releases/download/v1.0.3/checksums.txt

```bash
9c65f43e76213bb8a49d1eab2c76a27d9ab694e67bc79f0ad12769ea362b5ca2  pg-exporter_1.1.0-1_amd64.deb
bcd2cacb4febc5fb92f9eda8e733c161c8c6721416e16ec91a773503241c972d  pg-exporter_1.1.0-1_arm64.deb
2c9d4a9cb06d07af0b6dd9dd6e568af073dc9f6775abde63b45f0aae34d171b1  pg-exporter_1.1.0-1_ppc64le.deb
2934ab5b0fb16dca5a96ec1e8f230e32c72b30ca076b5e5ddf8ec553c821f7b8  pg_exporter-1.1.0-1.aarch64.rpm
3c9955f31ba93532cc7f95ff60b0658f4b6eca6a827710e2f70c0716b34eab43  pg_exporter-1.1.0-1.ppc64le.rpm
9fdefbd8e7660dcb130207901a27762e0a381857ba8cf12b63184744f92dea05  pg_exporter-1.1.0-1.x86_64.rpm
7159002016754309e0ed625a9a48049d21177883fa11d1e448eb7655ceb690cc  pg_exporter-1.1.0.darwin-amd64.tar.gz
7d55ac5cda0b1fd8ffbd5e76b9c1c1784ac8e353104a206caaadce89adda6d65  pg_exporter-1.1.0.darwin-arm64.tar.gz
8211ec24277554b9b1a36920d7865153e21c2621031d3d08f22d94cdd2ddf02f  pg_exporter-1.1.0.linux-amd64.tar.gz
d17ab7f9bf04442e642483d432d005d25bb62e0c9caa73cb7e69ee19eb89b3ae  pg_exporter-1.1.0.linux-arm64.tar.gz
c074aeb345cc30f7b6e16aa153ae3d9a12789e4425987590c3fd77c4e68a40b6  pg_exporter-1.1.0.linux-ppc64le.tar.gz
13d653e2abb023ce9526bdc2815135b82f49c044d237030f3f56b09fb016fcb7  pg_exporter-1.1.0.windows-amd64.tar.gz
```

https://github.com/pgsty/pg_exporter/releases/tag/v1.1.0


--------

## v1.0.3

- 使用 Go 1.25.4 和最新依赖构建
- 修复 [#80](https://github.com/pgsty/pg_exporter/issues/80) 与 libpq 环境变量冲突
- 由 [@kadaffy](https://github.com/kadaffy) 将 `auto-discovery` 默认值改为 `true`

**校验和**

https://github.com/pgsty/pg_exporter/releases/download/v1.0.3/checksums.txt

```bash
7efa1a77dfd5b94813c32c7ac015b1d479b1f04fb958f6b1ed5af333e354d015  pg-exporter_1.0.3-1_amd64.deb
41e18bf18eba2ab90ac371bfb46e9152da9fe628ebd8e26766cac08325eb3b07  pg-exporter_1.0.3-1_arm64.deb
7da8ed738d254c120d42aa51d6137f84e7f4e3188bc764d4f9a1438220363a43  pg-exporter_1.0.3-1_ppc64le.deb
a214b555981156da7b7d248b1f728f8ac88a07ac8f77a66c5d8e43b40670d6b4  pg_exporter-1.0.3-1.aarch64.rpm
d876fc66e208612ebffe3c43dabce88b088d915f92584260d710b85a3a131413  pg_exporter-1.0.3-1.ppc64le.rpm
75f62d314fec50c836c534996c884d25ecea77810ab33e7ba0e9c4b783e775b4  pg_exporter-1.0.3-1.x86_64.rpm
47829a19707284bcee1b8dc47cc7d0172398bb533e6b4043950f787486712769  pg_exporter-1.0.3.darwin-amd64.tar.gz
38b6ccb72315cadea542b1f2a7b7022d0e8d48ffd4ab177bb69a0a909b99af6b  pg_exporter-1.0.3.darwin-arm64.tar.gz
36e8dff84d61a7593ff1fcec567ca4ffeaecd0be2f9eabd227ceac71b12a919a  pg_exporter-1.0.3.linux-amd64.tar.gz
6477e8ef873773a09c4f39a29444f21b5b2c71e717e52ca425bcc8e8e5448791  pg_exporter-1.0.3.linux-arm64.tar.gz
a083b51ebed2b280e2eaa0f19558494e7fa6f122a0a86a1d117206fcd090820c  pg_exporter-1.0.3.linux-ppc64le.tar.gz
a1f9b27b7190f478726d96f270a72d9dc4d3f2bcc3b0326b7c4a2607e62ea588  pg_exporter-1.0.3.windows-amd64.tar.gz
```

https://github.com/pgsty/pg_exporter/releases/tag/v1.0.3


--------

## v1.0.2

- 使用 Go 1.25.0 和最新依赖构建
- 专属网站和主页：https://exp.pgsty.com
- 使用 goreleaser 通过 CI/CD 流水线发布更多操作系统/架构：
  - 新增 Windows amd64 支持
  - 新增 Linux ppc64le 支持

**校验和**

https://github.com/pgsty/pg_exporter/releases/download/v1.0.2/checksums.txt

```bash
683bf97f22173f2f2ec319a88e136939c2958a1f5ced4f4aa09a1357fc1c44c5  pg-exporter_1.0.2-1_amd64.deb
f62d479a92be2d03211c162b8419f968cea87ceef5b1f25f2bcd390e0b72ccb5  pg-exporter_1.0.2-1_arm64.deb
e1bbfc5a4c1b93e6f92bc7adcb4364583ab763e76e156aa5c979d6d1040f4c7a  pg-exporter_1.0.2-1_ppc64le.deb
f51d5b45448e6bbec3467d1d1dc049b1e16976f723af713c4262541ac55a039c  pg_exporter-1.0.2-1.aarch64.rpm
18380011543674e4c48b2410266b41165974d780cbc8918fc562152ba623939e  pg_exporter-1.0.2-1.ppc64le.rpm
198372d894b9598c166a0e91ca36d3c9271cb65298415f63dbffcf6da611f2bb  pg_exporter-1.0.2-1.x86_64.rpm
cbe7e07df6d180507c830cdab4cf86d40ccd62774723946307b5331d4270477d  pg_exporter-1.0.2.darwin-amd64.tar.gz
20c4a35fa244287766c1d1a19cd2e393b3fa451a96a81e5635401e69bef04b97  pg_exporter-1.0.2.darwin-arm64.tar.gz
d742111185f6a89fff34bfd304b851c8eb7a8e38444f0220786e11ed1934eff1  pg_exporter-1.0.2.linux-amd64.tar.gz
0b1f4c97c1089c4767d92eb22419b8f29c9f46fb90ddfd1e8514cc42dc41054f  pg_exporter-1.0.2.linux-arm64.tar.gz
895083fd2c7fc5409cc1a2dbaaef1e47ac7aa6a3fd5db2359012922d90bcdcc3  pg_exporter-1.0.2.linux-ppc64le.tar.gz
5f751228e7120604af9a482fb70197489fa633c38a0f2b6a3489393fbc6a10aa  pg_exporter-1.0.2.windows-amd64.tar.gz
```

https://github.com/pgsty/pg_exporter/releases/tag/v1.0.2


--------

## v1.0.1

- 新增 DockerHub 镜像：[pgsty/pg_exporter](https://hub.docker.com/r/pgsty/pg_exporter)
- 升级 Go 依赖到最新版本，使用 Go 1.24.5 构建
- 默认禁用 `pg_tsdb_hypertable` 采集器，因为 `timescaledb` 目录已变更

**校验和**

```bash
d5e2d6a656eef0ae1b29cd49695f9773  pg_exporter-1.0.1-1.aarch64.rpm
cb01bb78d7b216a235363e9342803cb3  pg_exporter-1.0.1-1.x86_64.rpm
67093a756b04845f69ad333b6d458e81  pg_exporter-v1.0.1.darwin-amd64.tar.gz
2d3fdc10045d1cf494b9c1ee7f94f127  pg_exporter-v1.0.1.darwin-arm64.tar.gz
e242314461becfa99c3978ae72838ab0  pg_exporter-v1.0.1.linux-amd64.tar.gz
63de91da9ef711a53718bc60b89c82a6  pg_exporter-v1.0.1.linux-arm64.tar.gz
718f6afc004089f12c1ca6553f9b9ba5  pg-exporter_1.0.1_amd64.deb
57da7a8005cdf91ba8c1fb348e0d7367  pg-exporter_1.0.1_arm64.deb
```

https://github.com/pgsty/pg_exporter/releases/tag/v1.0.1


--------

## v1.0.0

新增 PostgreSQL 18 指标支持

- 新采集器分支 `pg_wal_18`：
  - 移除 `write`、`sync`、`write_time`、`sync_time` 指标
  - 移至 `pg_stat_io`
- 新采集器分支 `pg_checkpointer_18`：
  - 新指标 `num_done`
  - 新指标 `slru_written`
- 新采集器分支 `pg_db_18`：
  - 新指标 `parallel_workers_to_launch`
  - 新指标 `parallel_workers_launched`
- 新采集器分支 `pg_table_18`：
  - `table_parallel_workers_to_launch`
  - `table_parallel_workers_launched`
- 新采集器分支 `pg_io_18`：
  - 新增 WAL 统计系列
  - 新指标 `read_bytes`
  - 新指标 `write_bytes`
  - 新指标 `extend_bytes`
  - 移除 `op_bytes`（因为是固定值）
- 新采集器分支 `pg_vacuuming_18`：
  - 新指标 `delay_time`

```bash
8637bc1a05b93eedfbfd3816cca468dd  pg_exporter-1.0.0-1.aarch64.rpm
a28c4c0dcdd3bf412268a2dbff79f5b9  pg_exporter-1.0.0-1.x86_64.rpm
229129209b8e6bc356c28043c7c22359  pg_exporter-v1.0.0.darwin-amd64.tar.gz
d941c2c28301269e62a8853c93facf12  pg_exporter-v1.0.0.darwin-arm64.tar.gz
5bbb94db46cacca4075d4c341c54db37  pg_exporter-v1.0.0.linux-amd64.tar.gz
da9ad428a50546a507a542d808f1c0fa  pg_exporter-v1.0.0.linux-arm64.tar.gz
0fa2395d9d7a43ab87e5c87e5b06ffcc  pg-exporter_1.0.0_amd64.deb
fed56f8a37e30cc59e85f03c81fce3f5  pg-exporter_1.0.0_arm64.deb
```

https://github.com/pgsty/pg_exporter/releases/tag/v1.0.0


--------

## v0.9.0

**默认采集器**

* 新增 `timescaledb` 超表指标采集器
* 新增 `citus` 分布式节点指标采集器
* 新增 `pg_wait_sampling` 等待事件采集器
* `pg_slot` 全面改进：新增 16/17 pg_replication_slot 指标
* 允许 `pg_slot` 采集器从 16/17 开始在从库上运行
* 重构 `pg_wait` 采集器，从所有进程聚合
* 限制 pg_clustering、pg_indexing、pg_vacuuming 只在主库运行
* 将所有 `reset_time` 标记为 `GAUGE` 而非 `COUNTER`
* 修复 `pg_recovery_prefetch_skip_fpw` 类型从 `GAUGE` 改为 `COUNTER`
* 修复 `pg_recv.state` 类型从 `LABEL` 改为 `GAUGE`
* 采集器格式改为紧凑模式
* 新增默认指标 `pg_exporter_build_info` / `pgbouncer_exporter_build_info`
* 为 `pg_meta` 采集器新增 `server_encoding`
* 为 `pg_setting` 采集器新增 12 个设置指标：
  - wal_block_size
  - segment_size
  - wal_segment_size
  - wal_level
  - wal_log_hints
  - work_mem
  - hugepage_count
  - hugepage_status
  - max_wal_size
  - min_wal_size
  - max_slot_wal_keep_size

**导出器代码库**

* 使用最小 PG 版本后缀规范化采集器分支名称
* 为二进制包添加许可证文件
* 将 `pgsty/pg_exporter` 仓库移至 `pgsty/pg_exporter`
* 重构 `server.go` 以降低 `Compatible` 和 `PostgresPrecheck` 复杂度
* 使用额外数字前缀重命名指标采集器以便排序
* 升级依赖到最新版本
* 在所有非致命采集器之前执行致命采集器，快速失败

https://github.com/pgsty/pg_exporter/releases/tag/v0.9.0


--------

## v0.8.1

* 升级依赖到最新版本
* [升级 golang.org/x/net 从 0.35.0 到 0.36.0 #67](https://github.com/pgsty/pg_exporter/pull/67)
* 更新 Docker 镜像构建标签

https://github.com/pgsty/pg_exporter/releases/tag/v0.8.1


--------

## v0.8.0

* 新增 PgBouncer 1.24 新指标支持（stat、pool、database）
* 修复：`310-pg_size.yml` 在日志目录设置不正确时失败 [#64](https://github.com/pgsty/pg_exporter/issues/64)，由 [@Süleyman Vurucu](https://github.com/suikast42) 贡献
* 使用最新 Go 1.24 构建并升级所有依赖
* 使用标准 `log/slog` 重构日志，替代 `go-kit`
* **完整变更日志**：https://github.com/pgsty/pg_exporter/compare/v0.7.1...v0.8.0

https://github.com/pgsty/pg_exporter/releases/tag/v0.8.0


--------

## v0.7.1

使用 dependabot 进行例行更新

* 功能：支持将配置指定为 Reader，由 [@ringerc](https://github.com/ringerc) 在 [#62](https://github.com/pgsty/pg_exporter/pull/62) 贡献
* 升级 golang.org/x/crypto 从 0.21.0 到 0.31.0，由 [@dependabot](https://github.com/dependabot) 在 [#63](https://github.com/pgsty/pg_exporter/pull/63) 贡献
* 修复一些拼写错误
* **完整变更日志**：https://github.com/pgsty/pg_exporter/compare/v0.7.0...v0.7.1

https://github.com/pgsty/pg_exporter/releases/tag/v0.7.1


--------

## v0.7.0

为最新 Go 版本重构代码库。

- [PostgreSQL 17 指标支持](https://github.com/pgsty/pg_exporter/issues/53)，由 @Vonng 贡献
- [pg_exporter: 谓词查询功能](https://github.com/pgsty/pg_exporter/pull/47)，由 [@ringerc](https://github.com/ringerc) 贡献
- [在 Dockerfile 中进行干净构建](https://github.com/pgsty/pg_exporter/pull/54)，由 [@ringerc](https://github.com/ringerc) 贡献
- [pg_exporter: "bind: address already in use" 后不再 panic](https://github.com/pgsty/pg_exporter/pull/46)，由 [@ringerc](https://github.com/ringerc) 贡献
- [pg_exporter: 修复 /stat 端点格式](https://github.com/pgsty/pg_exporter/pull/48)，由 [@ringerc](https://github.com/ringerc) 贡献
- [pg_exporter: yaml 导出时省略默认查询属性](https://github.com/pgsty/pg_exporter/pull/49)，由 [@ringerc](https://github.com/ringerc) 贡献
- [从发现中排除模板数据库并模式限定发现查询](https://github.com/pgsty/pg_exporter/pull/50)，由 [@ringerc](https://github.com/ringerc) 贡献
- [修复一些拼写错误和指标描述错误](https://github.com/pgsty/pg_exporter/pull/51)，由 [@ringerc](https://github.com/ringerc) 贡献
- [从废弃的 lib/pq 驱动切换到带 stdlib 包装的 pgx](https://github.com/pgsty/pg_exporter/pull/52)，由 [@ringerc](https://github.com/ringerc) 贡献

https://github.com/pgsty/pg_exporter/releases/tag/v0.7.0


--------

## v0.6.0

- 安全增强：修复 [安全](https://github.com/pgsty/pg_exporter/security/dependabot?q=is%3Aclosed) dependabot 问题
- 新增 pg16 采集器
- 新增 `arm64` 和 `aarch64` 包
- 移除 `pg_query` 采集器的 `monitor` 模式要求（您需要通过 search_path 确保或直接在默认 `public` 模式中安装 `pg_stat_statements`）
- 修复 pgbouncer 版本解析消息级别从 info 改为 debug
- 修复 `pg_table_10_12` 采集器缺少 `relid` 的问题

- [识别配置目录中的 yml 后缀文件](https://github.com/pgsty/pg_exporter/pull/34)，由 [@Japin Li](https://github.com/japinli) 贡献
- [支持 PostgreSQL 15 及更高版本](https://github.com/pgsty/pg_exporter/pull/35)，由 [@Japin Li](https://github.com/japinli) 贡献
- [修复 connect-timeout 传播](https://github.com/pgsty/pg_exporter/pull/37/files)，由 [@mouchar](https://github.com/mouchar) 贡献

https://github.com/pgsty/pg_exporter/releases/tag/v0.6.0


--------

## v0.5.0

**导出器增强**

- 使用 `nfpm` 构建 rpm 和 deb
- 新增 `column.default`，当指标值为 NULL 时替换
- 新增 `column.scale`，当指标值为浮点/整数时乘以缩放因子（例如微秒转秒）
- 修复 `/stat` 端点输出
- 新增 Docker 容器 [`pgsty/pg_exporter`](https://hub.docker.com/r/pgsty/pg_exporter)

**指标采集器**

- 将 bgwriter 和 pg_wal 时间单位缩放为秒
- 移除 pg_class 采集器，将其移至 pg_table 和 pg_index
- 为 pg_table 新增 pg_class 指标
- 为 pg_index 新增 pg_class 指标
- 默认启用 pg_table_size
- 将 pg_query、pg_db、pg_bgwriter、pg_ssl、pgbouncer_stat 时间指标缩放为秒

https://github.com/pgsty/pg_exporter/releases/tag/v0.5.0


--------

## v0.4.1

- 更新默认采集器
    - 在对象监控中省略 citus 和 timescaledb 模式
    - 避免重复的 pg_statio 元组
    - 支持 pgbouncer v1.16
    - Bug 修复：`pg_repl` 采集器在 pg 12 上重叠
- 新参数：`-T` `connect-timeout` `PG_EXPORTER_CONNECT_TIMEOUT`
  这在监控远程 Postgres 实例时很有用
- 现在 `pg_exporter.yaml` 在 rpm 包中重命名为 `pg_exporter.yml`

https://github.com/pgsty/pg_exporter/releases/tag/v0.4.1


--------

## v0.4.0

- 新增 PG 14 支持
- 默认指标配置全面改进（但您仍可使用旧配置）
- 新增 `auto-discovery`、`include-database` 和 `exclude-database` 选项
- 新增多数据库监控实现（使用 `auto-discovery = on`）

https://github.com/pgsty/pg_exporter/releases/tag/v0.4.0


--------

## v0.3.2

- 修复 shadow DSN 边界情况
- 修复拼写错误和文档

https://github.com/pgsty/pg_exporter/releases/tag/v0.3.2


--------

## v0.3.1

修复默认配置问题（特别是低于 13 的版本）

- 设置 `primary_conninfo` 在 PG13 之前不存在
- 为 `pg_func` 采集器添加 `funcid` 标签以避免函数名重复标签
- 修复版本字符串为 `pg_exporter`

https://github.com/pgsty/pg_exporter/releases/tag/v0.3.1


--------

## v0.3.0

https://github.com/pgsty/pg_exporter/releases/tag/v0.3.0

- 更改默认配置，支持 PostgreSQL 13 新指标（`pg_slru`、`pg_shmem`、`pg_query13`、`pg_backup` 等）
- 新增一系列用于健康/恢复状态检查的 REST API
- 新增一个带有假 `pg_up 0` 指标的虚拟服务器，在 PgExporter 初始化之前提供服务
- 如果未指定 `sslmode`，向 URL 添加 `sslmode=disable`
- 修复拼写错误和 Bug


--------

## v0.2.0

- 新增 yum 包和 Linux 服务定义
- 在查询配置中新增 'skip' 标志
- 修复 `pgbouncer_up` 指标
- 新增配置重载支持

https://github.com/pgsty/pg_exporter/releases/tag/v0.2.0


--------

## v0.1.2

* 修复 pgbouncer_up 指标
* 新增动态配置重载
* 移除 'shard' 相关逻辑
* 在默认设置中添加 'bulky' 模式

https://github.com/pgsty/pg_exporter/releases/tag/v0.1.2


--------

## v0.1.1

修复 pg_exporter 在启动时如果任何查询失败会挂起的 Bug。

https://github.com/pgsty/pg_exporter/releases/tag/v0.1.1


--------

## v0.1.0

可以工作了，看起来不错。

https://github.com/pgsty/pg_exporter/releases/tag/v0.1.0


--------

## v0.0.4

在真实生产环境中测试了大约 2 周，200+ 节点。看起来不错！

https://github.com/pgsty/pg_exporter/releases/tag/v0.0.4


--------

## v0.0.3

v0.0.3 发布，在生产环境中测试

此版本已在生产环境中测试。

这个项目仍在快速发展中，如果您想在生产中使用，请谨慎尝试。

https://github.com/pgsty/pg_exporter/releases/tag/v0.0.3


--------

## v0.0.2

现在可以尝试了

https://github.com/pgsty/pg_exporter/releases/tag/v0.0.2


--------

## v0.0.1

新增 pgbouncer 模式

https://github.com/pgsty/pg_exporter/releases/tag/v0.0.1
