---
title: "pgfr_analyze"
linkTitle: "pgfr_analyze"
description: "pgfr_record 采集数据的报告与性能分析函数"
weight: 6061
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/dventimisupabase/pg_flight_recorder">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">dventimisupabase/pg_flight_recorder</div>
    <div class="ext-card__desc">https://github.com/dventimisupabase/pg_flight_recorder</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/pg_flight_recorder-2.29.2.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">pg_flight_recorder-2.29.2.tar.gz</div>
    <div class="ext-card__desc">pg_flight_recorder-2.29.2.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pg_flight_recorder`**](/ext/e/pgfr_record) | `2.29.2` | <a class="ext-badge ext-badge--cate stat" href="/ext/cate/stat">STAT</a> | <a class="ext-badge ext-badge--license apache20" href="/ext/license#apache20">Apache-2.0</a> | <a class="ext-badge ext-badge--lang sql" href="/ext/language#sql">SQL</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 6060  | [**`pgfr_record`**](/ext/e/pgfr_record) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | `pgfr_record` |
| 6061  | [**`pgfr_analyze`**](/ext/e/pgfr_analyze) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | `pgfr_analyze` |
{.ext-table}

| **相关扩展** | [`pgfr_record`](/ext/e/pgfr_record) [`pgfr_record`](/ext/e/pgfr_record) [`pg_profile`](/ext/e/pg_profile) [`pg_stat_statements`](/ext/e/pg_stat_statements) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


> Secondary extension shipped by pg_flight_recorder; requires pgfr_record.


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#stat) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `2.29.2` | {{< pgvers "18,17,16,15" >}} | `pg_flight_recorder` | `pgfr_record` |
| [**RPM**](/ext/rpm#stat) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `2.29.2` | {{< pgvers "18,17,16,15" >}} | `pg_flight_recorder_$v` | `pg_cron_$v` |
| [**DEB**](/ext/deb#stat) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `2.29.2` | {{< pgvers "18,17,16,15" >}} | `postgresql-$v-pg-flight-recorder` | `postgresql-$v-cron` |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 2.29.2 1 | AVAIL PIGSTY 2.29.2 1 | AVAIL PIGSTY 2.29.2 1 | AVAIL PIGSTY 2.29.2 1 | N/A PIGSTY - 0 |
| el8.aarch64 | AVAIL PIGSTY 2.29.2 1 | AVAIL PIGSTY 2.29.2 1 | AVAIL PIGSTY 2.29.2 1 | AVAIL PIGSTY 2.29.2 1 | N/A PIGSTY - 0 |
| el9.x86_64 | AVAIL PIGSTY 2.29.2 1 | AVAIL PIGSTY 2.29.2 1 | AVAIL PIGSTY 2.29.2 1 | AVAIL PIGSTY 2.29.2 1 | N/A PIGSTY - 0 |
| el9.aarch64 | AVAIL PIGSTY 2.29.2 1 | AVAIL PIGSTY 2.29.2 1 | AVAIL PIGSTY 2.29.2 1 | AVAIL PIGSTY 2.29.2 1 | N/A PIGSTY - 0 |
| el10.x86_64 | AVAIL PIGSTY 2.29.2 1 | AVAIL PIGSTY 2.29.2 1 | AVAIL PIGSTY 2.29.2 1 | AVAIL PIGSTY 2.29.2 1 | N/A PIGSTY - 0 |
| el10.aarch64 | AVAIL PIGSTY 2.29.2 1 | AVAIL PIGSTY 2.29.2 1 | AVAIL PIGSTY 2.29.2 1 | AVAIL PIGSTY 2.29.2 1 | N/A PIGSTY - 0 |
| d12.x86_64 | AVAIL PIGSTY 2.29.2 1 | AVAIL PIGSTY 2.29.2 1 | AVAIL PIGSTY 2.29.2 1 | AVAIL PIGSTY 2.29.2 1 | N/A PIGSTY - 0 |
| d12.aarch64 | AVAIL PIGSTY 2.29.2 1 | AVAIL PIGSTY 2.29.2 1 | AVAIL PIGSTY 2.29.2 1 | AVAIL PIGSTY 2.29.2 1 | N/A PIGSTY - 0 |
| d13.x86_64 | AVAIL PIGSTY 2.29.2 1 | AVAIL PIGSTY 2.29.2 1 | AVAIL PIGSTY 2.29.2 1 | AVAIL PIGSTY 2.29.2 1 | N/A PIGSTY - 0 |
| d13.aarch64 | AVAIL PIGSTY 2.29.2 1 | AVAIL PIGSTY 2.29.2 1 | AVAIL PIGSTY 2.29.2 1 | AVAIL PIGSTY 2.29.2 1 | N/A PIGSTY - 0 |
| u22.x86_64 | AVAIL PIGSTY 2.29.2 1 | AVAIL PIGSTY 2.29.2 1 | AVAIL PIGSTY 2.29.2 1 | AVAIL PIGSTY 2.29.2 1 | N/A PIGSTY - 0 |
| u22.aarch64 | AVAIL PIGSTY 2.29.2 1 | AVAIL PIGSTY 2.29.2 1 | AVAIL PIGSTY 2.29.2 1 | AVAIL PIGSTY 2.29.2 1 | N/A PIGSTY - 0 |
| u24.x86_64 | AVAIL PIGSTY 2.29.2 1 | AVAIL PIGSTY 2.29.2 1 | AVAIL PIGSTY 2.29.2 1 | AVAIL PIGSTY 2.29.2 1 | N/A PIGSTY - 0 |
| u24.aarch64 | AVAIL PIGSTY 2.29.2 1 | AVAIL PIGSTY 2.29.2 1 | AVAIL PIGSTY 2.29.2 1 | AVAIL PIGSTY 2.29.2 1 | N/A PIGSTY - 0 |
| u26.x86_64 | AVAIL PIGSTY 2.29.2 1 | AVAIL PIGSTY 2.29.2 1 | AVAIL PIGSTY 2.29.2 1 | AVAIL PIGSTY 2.29.2 1 | N/A PIGSTY - 0 |
| u26.aarch64 | AVAIL PIGSTY 2.29.2 1 | AVAIL PIGSTY 2.29.2 1 | AVAIL PIGSTY 2.29.2 1 | AVAIL PIGSTY 2.29.2 1 | N/A PIGSTY - 0 |
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `pg_flight_recorder` 扩展的 RPM / DEB 包：

```bash
pig build pkg pg_flight_recorder         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `pg_flight_recorder` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install pg_flight_recorder;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y pg_flight_recorder -v 18  # PG 18
pig ext install -y pg_flight_recorder -v 17  # PG 17
pig ext install -y pg_flight_recorder -v 16  # PG 16
pig ext install -y pg_flight_recorder -v 15  # PG 15
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y pg_flight_recorder_18       # PG 18
dnf install -y pg_flight_recorder_17       # PG 17
dnf install -y pg_flight_recorder_16       # PG 16
dnf install -y pg_flight_recorder_15       # PG 15
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-pg-flight-recorder   # PG 18
apt install -y postgresql-17-pg-flight-recorder   # PG 17
apt install -y postgresql-16-pg-flight-recorder   # PG 16
apt install -y postgresql-15-pg-flight-recorder   # PG 15
```
{{% /tab %}}
{{< /tabpane >}}


**创建扩展**：

```sql
CREATE EXTENSION pgfr_analyze CASCADE;  -- 依赖: pgfr_record
```

## 用法

来源：

- [pgfr_analyze v2.29.2 说明文档](https://github.com/dventimisupabase/pg_flight_recorder/blob/v2.29.2/pgfr_analyze/README.md)
- [pgfr_analyze 控制文件](https://github.com/dventimisupabase/pg_flight_recorder/blob/v2.29.2/pgfr_analyze/extension.control)
- [pg_flight_recorder v2.29.2 参考手册](https://github.com/dventimisupabase/pg_flight_recorder/blob/v2.29.2/REFERENCE.md)
- [v2.29.2 发行说明](https://github.com/dventimisupabase/pg_flight_recorder/releases/tag/v2.29.2)

pgfr_analyze 是 PostgreSQL Flight Recorder 的读取分析部分。它解释由 pgfr_record 捕获的历史数据，用于比较时间段、汇总等待事件、组装事故时间线、检测退步并估算影响范围。在安装 pgfr_record 之后，请使用它进行诊断而不是收集数据。

### 安装分析层

    CREATE EXTENSION pg_cron;
    CREATE EXTENSION pgfr_record;
    CREATE EXTENSION pgfr_analyze;
    SELECT pgfr_record.enable();

pgfr_analyze 依赖于记录器对象，在没有收集样本之前没有任何有用的历史数据。它不需要自己的后台工作进程。

### 开始事故调查

在已知时间戳周围总结发生了什么：

    SELECT *
    FROM pgfr_analyze.what_happened_at(
      now() - interval '15 minutes'
    );

在一个时间段上构建有序的事故视图：

    SELECT *
    FROM pgfr_analyze.incident_timeline(
      now() - interval '30 minutes',
      now()
    );

使用 compare 对比可疑时间段与基线，然后通过 wait_summary 或 anomaly_report 窄化结果。始终使用 psql 或 pg_get_function_arguments 检查安装的函数签名，因为可选参数可能在不同版本之间有所变化。

### 分析索引

- compare：对比基准窗口和事故窗口中的指标。
- wait_summary：聚合采样等待事件。
- report 和 anomaly_report：生成广泛或侧重异常的总结。
- what_happened_at：围绕一个时间戳检查观察结果。
- incident_timeline：在一个范围内按重要事件排序。
- detect_regressions 和 detect_query_storms：标记退步行为或查询突发情况。
- blast_radius：识别受影响的会话或工作负载。
- capacity_summary 和 capacity_report：总结与容量相关的信号。
- 配置分析：将相关设置变化关联到该时间段。

### 解释流程

1. 确认 pgfr_record.health_check() 及可用样本间隔。
2. 选择具有可比工作负载的明确基准窗口和事故窗口。
3. 使用 compare 和 wait_summary 定位主要的变化。
4. 关联活动、锁、复制、真空和配置证据。
5. 使用 PostgreSQL 日志、查询计划、应用程序遥测数据及主机指标验证假设。

### 注意事项

- 结果是观察和启发式信息，而不是因果关系的证明。稀疏采样可能会错过短暂事件。
- 计数器重置、扩展更新、重启、保留间隔以及工作负载季节性都可能扭曲比较结果。
- 一些发现需要在启用 pg_stat_statements 并且足够大时才会更丰富。
- 分析输出的访问权限可能会暴露查询文本和操作元数据；相应地限制权限。
- v2.29.2 主要改进了 pgfr_record 中托管服务调度行为。它并不取代验证实际运行收集任务的需求。
