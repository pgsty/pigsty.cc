---
title: "pg_track_optimizer"
linkTitle: "pg_track_optimizer"
description: "跟踪规划器决策与实际执行的差距"
weight: 6270
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/danolivo/pg_track_optimizer">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">danolivo/pg_track_optimizer</div>
    <div class="ext-card__desc">https://github.com/danolivo/pg_track_optimizer</div>
  </a>
  <a class="ext-card ext-card--source" href="pg_track_optimizer-0.9.1.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">pg_track_optimizer-0.9.1.tar.gz</div>
    <div class="ext-card__desc">pg_track_optimizer-0.9.1.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pg_track_optimizer`**](/ext/e/pg_track_optimizer) | `0.9.1` | <a class="ext-badge ext-badge--cate stat" href="/ext/cate/stat">STAT</a> | <a class="ext-badge ext-badge--license mit" href="/ext/license#mit">MIT</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 6270  | [**`pg_track_optimizer`**](/ext/e/pg_track_optimizer) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | - |
{.ext-table}

| **相关扩展** | [`pg_track_settings`](/ext/e/pg_track_settings) [`pg_show_plans`](/ext/e/pg_show_plans) [`powa`](/ext/e/powa) [`pg_stat_statements`](/ext/e/pg_stat_statements) [`pg_store_plans`](/ext/e/pg_store_plans) [`auto_explain`](/ext/e/auto_explain) [`pg_stat_kcache`](/ext/e/pg_stat_kcache) [`pg_qualstats`](/ext/e/pg_qualstats) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#stat) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.9.1` | {{< pgvers "18,17" >}} | `pg_track_optimizer` | - |
| [**RPM**](/ext/rpm#stat) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.9.1` | {{< pgvers "18,17" >}} | `pg_track_optimizer_$v` | - |
| [**DEB**](/ext/deb#stat) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.9.1` | {{< pgvers "18,17" >}} | `postgresql-$v-pg-track-optimizer` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 0.9.1 1 | AVAIL PIGSTY 0.9.1 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| el8.aarch64 | AVAIL PIGSTY 0.9.1 1 | AVAIL PIGSTY 0.9.1 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| el9.x86_64 | AVAIL PIGSTY 0.9.1 1 | AVAIL PIGSTY 0.9.1 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| el9.aarch64 | AVAIL PIGSTY 0.9.1 1 | AVAIL PIGSTY 0.9.1 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| el10.x86_64 | AVAIL PIGSTY 0.9.1 1 | AVAIL PIGSTY 0.9.1 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| el10.aarch64 | AVAIL PIGSTY 0.9.1 1 | AVAIL PIGSTY 0.9.1 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| d12.x86_64 | AVAIL PIGSTY 0.9.1 1 | AVAIL PIGSTY 0.9.1 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| d12.aarch64 | AVAIL PIGSTY 0.9.1 1 | AVAIL PIGSTY 0.9.1 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| d13.x86_64 | AVAIL PIGSTY 0.9.1 1 | AVAIL PIGSTY 0.9.1 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| d13.aarch64 | AVAIL PIGSTY 0.9.1 1 | AVAIL PIGSTY 0.9.1 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| u22.x86_64 | AVAIL PIGSTY 0.9.1 1 | AVAIL PIGSTY 0.9.1 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| u22.aarch64 | AVAIL PIGSTY 0.9.1 1 | AVAIL PIGSTY 0.9.1 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| u24.x86_64 | AVAIL PIGSTY 0.9.1 1 | AVAIL PIGSTY 0.9.1 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| u24.aarch64 | AVAIL PIGSTY 0.9.1 1 | AVAIL PIGSTY 0.9.1 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
@ el8.x86_64 18 pg_track_optimizer_18 pg_track_optimizer_18-0.9.1-1PIGSTY.el8.x86_64.rpm pigsty 0.9.1 35.2KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/pg_track_optimizer_18-0.9.1-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 18 pg_track_optimizer_18 pg_track_optimizer_18-0.9.1-1PIGSTY.el8.aarch64.rpm pigsty 0.9.1 34.4KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/pg_track_optimizer_18-0.9.1-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 18 pg_track_optimizer_18 pg_track_optimizer_18-0.9.1-1PIGSTY.el9.x86_64.rpm pigsty 0.9.1 34.9KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/pg_track_optimizer_18-0.9.1-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 18 pg_track_optimizer_18 pg_track_optimizer_18-0.9.1-1PIGSTY.el9.aarch64.rpm pigsty 0.9.1 34.6KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/pg_track_optimizer_18-0.9.1-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 18 pg_track_optimizer_18 pg_track_optimizer_18-0.9.1-1PIGSTY.el10.x86_64.rpm pigsty 0.9.1 34.9KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/pg_track_optimizer_18-0.9.1-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 18 pg_track_optimizer_18 pg_track_optimizer_18-0.9.1-1PIGSTY.el10.aarch64.rpm pigsty 0.9.1 35.0KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/pg_track_optimizer_18-0.9.1-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-pg-track-optimizer postgresql-18-pg-track-optimizer_0.9.1-1PIGSTY~bookworm_amd64.deb pigsty 0.9.1 57.8KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg-track-optimizer/postgresql-18-pg-track-optimizer_0.9.1-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-pg-track-optimizer postgresql-18-pg-track-optimizer_0.9.1-1PIGSTY~bookworm_arm64.deb pigsty 0.9.1 56.9KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg-track-optimizer/postgresql-18-pg-track-optimizer_0.9.1-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-pg-track-optimizer postgresql-18-pg-track-optimizer_0.9.1-1PIGSTY~trixie_amd64.deb pigsty 0.9.1 57.9KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg-track-optimizer/postgresql-18-pg-track-optimizer_0.9.1-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-pg-track-optimizer postgresql-18-pg-track-optimizer_0.9.1-1PIGSTY~trixie_arm64.deb pigsty 0.9.1 57.1KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg-track-optimizer/postgresql-18-pg-track-optimizer_0.9.1-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-pg-track-optimizer postgresql-18-pg-track-optimizer_0.9.1-1PIGSTY~jammy_amd64.deb pigsty 0.9.1 62.6KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg-track-optimizer/postgresql-18-pg-track-optimizer_0.9.1-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-pg-track-optimizer postgresql-18-pg-track-optimizer_0.9.1-1PIGSTY~jammy_arm64.deb pigsty 0.9.1 62.0KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg-track-optimizer/postgresql-18-pg-track-optimizer_0.9.1-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-pg-track-optimizer postgresql-18-pg-track-optimizer_0.9.1-1PIGSTY~noble_amd64.deb pigsty 0.9.1 60.4KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg-track-optimizer/postgresql-18-pg-track-optimizer_0.9.1-1PIGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-pg-track-optimizer postgresql-18-pg-track-optimizer_0.9.1-1PIGSTY~noble_arm64.deb pigsty 0.9.1 59.8KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg-track-optimizer/postgresql-18-pg-track-optimizer_0.9.1-1PIGSTY~noble_arm64.deb
@ el8.x86_64 17 pg_track_optimizer_17 pg_track_optimizer_17-0.9.1-1PIGSTY.el8.x86_64.rpm pigsty 0.9.1 35.2KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/pg_track_optimizer_17-0.9.1-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 17 pg_track_optimizer_17 pg_track_optimizer_17-0.9.1-1PIGSTY.el8.aarch64.rpm pigsty 0.9.1 34.4KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/pg_track_optimizer_17-0.9.1-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 17 pg_track_optimizer_17 pg_track_optimizer_17-0.9.1-1PIGSTY.el9.x86_64.rpm pigsty 0.9.1 34.9KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/pg_track_optimizer_17-0.9.1-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 17 pg_track_optimizer_17 pg_track_optimizer_17-0.9.1-1PIGSTY.el9.aarch64.rpm pigsty 0.9.1 34.6KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/pg_track_optimizer_17-0.9.1-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 17 pg_track_optimizer_17 pg_track_optimizer_17-0.9.1-1PIGSTY.el10.x86_64.rpm pigsty 0.9.1 34.8KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/pg_track_optimizer_17-0.9.1-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 17 pg_track_optimizer_17 pg_track_optimizer_17-0.9.1-1PIGSTY.el10.aarch64.rpm pigsty 0.9.1 35.0KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/pg_track_optimizer_17-0.9.1-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-pg-track-optimizer postgresql-17-pg-track-optimizer_0.9.1-1PIGSTY~bookworm_amd64.deb pigsty 0.9.1 57.6KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg-track-optimizer/postgresql-17-pg-track-optimizer_0.9.1-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-pg-track-optimizer postgresql-17-pg-track-optimizer_0.9.1-1PIGSTY~bookworm_arm64.deb pigsty 0.9.1 56.8KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg-track-optimizer/postgresql-17-pg-track-optimizer_0.9.1-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-pg-track-optimizer postgresql-17-pg-track-optimizer_0.9.1-1PIGSTY~trixie_amd64.deb pigsty 0.9.1 57.8KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg-track-optimizer/postgresql-17-pg-track-optimizer_0.9.1-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-pg-track-optimizer postgresql-17-pg-track-optimizer_0.9.1-1PIGSTY~trixie_arm64.deb pigsty 0.9.1 56.9KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg-track-optimizer/postgresql-17-pg-track-optimizer_0.9.1-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-pg-track-optimizer postgresql-17-pg-track-optimizer_0.9.1-1PIGSTY~jammy_amd64.deb pigsty 0.9.1 69.2KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg-track-optimizer/postgresql-17-pg-track-optimizer_0.9.1-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-pg-track-optimizer postgresql-17-pg-track-optimizer_0.9.1-1PIGSTY~jammy_arm64.deb pigsty 0.9.1 68.4KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg-track-optimizer/postgresql-17-pg-track-optimizer_0.9.1-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-pg-track-optimizer postgresql-17-pg-track-optimizer_0.9.1-1PIGSTY~noble_amd64.deb pigsty 0.9.1 60.3KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg-track-optimizer/postgresql-17-pg-track-optimizer_0.9.1-1PIGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-pg-track-optimizer postgresql-17-pg-track-optimizer_0.9.1-1PIGSTY~noble_arm64.deb pigsty 0.9.1 59.6KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg-track-optimizer/postgresql-17-pg-track-optimizer_0.9.1-1PIGSTY~noble_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `pg_track_optimizer` 扩展的 RPM / DEB 包：

```bash
pig build pkg pg_track_optimizer         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `pg_track_optimizer` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install pg_track_optimizer;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y pg_track_optimizer -v 18  # PG 18
pig ext install -y pg_track_optimizer -v 17  # PG 17
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y pg_track_optimizer_18       # PG 18
dnf install -y pg_track_optimizer_17       # PG 17
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-pg-track-optimizer   # PG 18
apt install -y postgresql-17-pg-track-optimizer   # PG 17
```
{{% /tab %}}
{{< /tabpane >}}


**预加载配置**：

```bash
shared_preload_libraries = 'pg_track_optimizer';
```


**创建扩展**：

```sql
CREATE EXTENSION pg_track_optimizer;
```




## 用法

> [pg_track_optimizer: 通过基数估计误差检测次优查询计划](https://github.com/danolivo/pg_track_optimizer)

pg_track_optimizer 通过比较规划器预测与实际执行结果，自动检测具有较差基数估计的查询。它使用对数刻度计算多种误差指标。

### 启用追踪

```sql
-- 生产环境仅追踪有问题的查询
SET pg_track_optimizer.mode = 'normal';

-- 调试时追踪所有查询
SET pg_track_optimizer.mode = 'forced';

-- 当误差超过阈值时记录 EXPLAIN
SET pg_track_optimizer.log_min_error = 2.0;
```

### 查看追踪的查询

```sql
SELECT queryid, query,
       avg_avg, avg_min, avg_max,
       rms_avg, rms_min, rms_max,
       time_avg, blks_avg, nexecs
FROM pg_track_optimizer
ORDER BY avg_avg DESC
LIMIT 10;

-- 直接使用 RStats 类型
SELECT queryid, query,
       wca_error -> 'mean' AS avg_wca_error,
       blks_accessed -> 'mean' AS avg_blocks
FROM pg_track_optimizer()
WHERE blks_accessed -> 'mean' > 1000
ORDER BY wca_error -> 'mean' DESC;
```

### 误差指标

| 指标 | 描述 |
|--------|-------------|
| `avg_error` | 计划节点对数刻度误差的简单平均值 |
| `rms_error` | 均方根误差，强调大误差 |
| `twa_error` | 时间加权平均，突出慢节点 |
| `wca_error` | 代价加权平均，突出高代价节点 |
| `f_join_filter` | JOIN 过滤开销因子 |
| `f_scan_filter` | 扫描过滤开销因子 |

### 管理统计信息

```sql
-- 将统计信息保存到磁盘
SELECT pg_track_optimizer_flush();

-- 清除所有追踪的统计信息
SELECT pg_track_optimizer_reset();

-- 检查扩展状态
SELECT * FROM pg_track_optimizer_status;
```

### 配置

| 参数 | 默认值 | 描述 |
|-----------|---------|-------------|
| `pg_track_optimizer.mode` | `disabled` | `disabled`、`normal`、`forced` |
| `pg_track_optimizer.log_min_error` | (无) | 触发 EXPLAIN 日志的误差阈值 |
| `pg_track_optimizer.hash_mem` | (默认) | 共享内存限制（KB） |
| `pg_track_optimizer.auto_flush` | `on` | 后端关闭时自动保存统计 |
