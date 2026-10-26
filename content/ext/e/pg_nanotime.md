---
title: "pg_nanotime"
linkTitle: "pg_nanotime"
description: "纳秒时间戳与固定时长间隔类型"
weight: 3870
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/bunko666-cloud/pg_nanotime">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">bunko666-cloud/pg_nanotime</div>
    <div class="ext-card__desc">https://github.com/bunko666-cloud/pg_nanotime</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/pg_nanotime-0.2.0.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">pg_nanotime-0.2.0.tar.gz</div>
    <div class="ext-card__desc">pg_nanotime-0.2.0.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pg_nanotime`**](/ext/e/pg_nanotime) | `0.2.0` | <a class="ext-badge ext-badge--cate type" href="/ext/cate/type">TYPE</a> | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 3870  | [**`pg_nanotime`**](/ext/e/pg_nanotime) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | - |
{.ext-table}


> 0.2.0 is a PGXN testing release for PG17-18. Adds nanointerval aggregates, abs and generate_series. Ordinary types need no preload; cross-backend global clocks require preload/restart, and state is lost at restart.


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#type) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.2.0` | {{< pgvers "17,18" >}} | `pg_nanotime` | - |
| [**RPM**](/ext/rpm#type) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.2.0` | {{< pgvers "18,17" >}} | `pg_nanotime_$v` | - |
| [**DEB**](/ext/deb#type) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.2.0` | {{< pgvers "18,17" >}} | `postgresql-$v-pg-nanotime` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 0.2.0 1 | AVAIL PIGSTY 0.2.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| el8.aarch64 | AVAIL PIGSTY 0.2.0 1 | AVAIL PIGSTY 0.2.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| el9.x86_64 | AVAIL PIGSTY 0.2.0 1 | AVAIL PIGSTY 0.2.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| el9.aarch64 | AVAIL PIGSTY 0.2.0 1 | AVAIL PIGSTY 0.2.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| el10.x86_64 | AVAIL PIGSTY 0.2.0 1 | AVAIL PIGSTY 0.2.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| el10.aarch64 | AVAIL PIGSTY 0.2.0 1 | AVAIL PIGSTY 0.2.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| d12.x86_64 | AVAIL PIGSTY 0.2.0 1 | AVAIL PIGSTY 0.2.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| d12.aarch64 | AVAIL PIGSTY 0.2.0 1 | AVAIL PIGSTY 0.2.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| d13.x86_64 | AVAIL PIGSTY 0.2.0 1 | AVAIL PIGSTY 0.2.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| d13.aarch64 | AVAIL PIGSTY 0.2.0 1 | AVAIL PIGSTY 0.2.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| u22.x86_64 | AVAIL PIGSTY 0.2.0 1 | AVAIL PIGSTY 0.2.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| u22.aarch64 | AVAIL PIGSTY 0.2.0 1 | AVAIL PIGSTY 0.2.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| u24.x86_64 | AVAIL PIGSTY 0.2.0 1 | AVAIL PIGSTY 0.2.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| u24.aarch64 | AVAIL PIGSTY 0.2.0 1 | AVAIL PIGSTY 0.2.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| u26.x86_64 | AVAIL PIGSTY 0.2.0 1 | AVAIL PIGSTY 0.2.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| u26.aarch64 | AVAIL PIGSTY 0.2.0 1 | AVAIL PIGSTY 0.2.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
@ el8.x86_64 18 pg_nanotime_18 pg_nanotime_18-0.2.0-1PGSTY.el8.x86_64.rpm pigsty 0.2.0 107.5KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_nanotime_18-0.2.0-1PGSTY.el8.x86_64.rpm
@ el8.aarch64 18 pg_nanotime_18 pg_nanotime_18-0.2.0-1PGSTY.el8.aarch64.rpm pigsty 0.2.0 109.1KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_nanotime_18-0.2.0-1PGSTY.el8.aarch64.rpm
@ el9.x86_64 18 pg_nanotime_18 pg_nanotime_18-0.2.0-1PGSTY.el9.x86_64.rpm pigsty 0.2.0 111.3KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_nanotime_18-0.2.0-1PGSTY.el9.x86_64.rpm
@ el9.aarch64 18 pg_nanotime_18 pg_nanotime_18-0.2.0-1PGSTY.el9.aarch64.rpm pigsty 0.2.0 113.8KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_nanotime_18-0.2.0-1PGSTY.el9.aarch64.rpm
@ el10.x86_64 18 pg_nanotime_18 pg_nanotime_18-0.2.0-1PGSTY.el10.x86_64.rpm pigsty 0.2.0 111.5KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_nanotime_18-0.2.0-1PGSTY.el10.x86_64.rpm
@ el10.aarch64 18 pg_nanotime_18 pg_nanotime_18-0.2.0-1PGSTY.el10.aarch64.rpm pigsty 0.2.0 114.2KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_nanotime_18-0.2.0-1PGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-pg-nanotime postgresql-18-pg-nanotime_0.2.0-1PGSTY~bookworm_amd64.deb pigsty 0.2.0 102.6KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-nanotime/postgresql-18-pg-nanotime_0.2.0-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-pg-nanotime postgresql-18-pg-nanotime_0.2.0-1PGSTY~bookworm_arm64.deb pigsty 0.2.0 104.0KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-nanotime/postgresql-18-pg-nanotime_0.2.0-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-pg-nanotime postgresql-18-pg-nanotime_0.2.0-1PGSTY~trixie_amd64.deb pigsty 0.2.0 102.2KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-nanotime/postgresql-18-pg-nanotime_0.2.0-1PGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-pg-nanotime postgresql-18-pg-nanotime_0.2.0-1PGSTY~trixie_arm64.deb pigsty 0.2.0 103.9KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-nanotime/postgresql-18-pg-nanotime_0.2.0-1PGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-pg-nanotime postgresql-18-pg-nanotime_0.2.0-1PGSTY~jammy_amd64.deb pigsty 0.2.0 110.3KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-nanotime/postgresql-18-pg-nanotime_0.2.0-1PGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-pg-nanotime postgresql-18-pg-nanotime_0.2.0-1PGSTY~jammy_arm64.deb pigsty 0.2.0 113.3KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-nanotime/postgresql-18-pg-nanotime_0.2.0-1PGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-pg-nanotime postgresql-18-pg-nanotime_0.2.0-1PGSTY~noble_amd64.deb pigsty 0.2.0 106.8KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-nanotime/postgresql-18-pg-nanotime_0.2.0-1PGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-pg-nanotime postgresql-18-pg-nanotime_0.2.0-1PGSTY~noble_arm64.deb pigsty 0.2.0 110.6KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-nanotime/postgresql-18-pg-nanotime_0.2.0-1PGSTY~noble_arm64.deb
@ u26.x86_64 18 postgresql-18-pg-nanotime postgresql-18-pg-nanotime_0.2.0-1PGSTY~resolute_amd64.deb pigsty 0.2.0 106.4KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-nanotime/postgresql-18-pg-nanotime_0.2.0-1PGSTY~resolute_amd64.deb
@ u26.aarch64 18 postgresql-18-pg-nanotime postgresql-18-pg-nanotime_0.2.0-1PGSTY~resolute_arm64.deb pigsty 0.2.0 104.8KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-nanotime/postgresql-18-pg-nanotime_0.2.0-1PGSTY~resolute_arm64.deb
@ el8.x86_64 17 pg_nanotime_17 pg_nanotime_17-0.2.0-1PGSTY.el8.x86_64.rpm pigsty 0.2.0 107.5KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_nanotime_17-0.2.0-1PGSTY.el8.x86_64.rpm
@ el8.aarch64 17 pg_nanotime_17 pg_nanotime_17-0.2.0-1PGSTY.el8.aarch64.rpm pigsty 0.2.0 109.0KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_nanotime_17-0.2.0-1PGSTY.el8.aarch64.rpm
@ el9.x86_64 17 pg_nanotime_17 pg_nanotime_17-0.2.0-1PGSTY.el9.x86_64.rpm pigsty 0.2.0 111.3KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_nanotime_17-0.2.0-1PGSTY.el9.x86_64.rpm
@ el9.aarch64 17 pg_nanotime_17 pg_nanotime_17-0.2.0-1PGSTY.el9.aarch64.rpm pigsty 0.2.0 113.7KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_nanotime_17-0.2.0-1PGSTY.el9.aarch64.rpm
@ el10.x86_64 17 pg_nanotime_17 pg_nanotime_17-0.2.0-1PGSTY.el10.x86_64.rpm pigsty 0.2.0 111.6KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_nanotime_17-0.2.0-1PGSTY.el10.x86_64.rpm
@ el10.aarch64 17 pg_nanotime_17 pg_nanotime_17-0.2.0-1PGSTY.el10.aarch64.rpm pigsty 0.2.0 114.2KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_nanotime_17-0.2.0-1PGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-pg-nanotime postgresql-17-pg-nanotime_0.2.0-1PGSTY~bookworm_amd64.deb pigsty 0.2.0 102.6KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-nanotime/postgresql-17-pg-nanotime_0.2.0-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-pg-nanotime postgresql-17-pg-nanotime_0.2.0-1PGSTY~bookworm_arm64.deb pigsty 0.2.0 104.0KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-nanotime/postgresql-17-pg-nanotime_0.2.0-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-pg-nanotime postgresql-17-pg-nanotime_0.2.0-1PGSTY~trixie_amd64.deb pigsty 0.2.0 102.3KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-nanotime/postgresql-17-pg-nanotime_0.2.0-1PGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-pg-nanotime postgresql-17-pg-nanotime_0.2.0-1PGSTY~trixie_arm64.deb pigsty 0.2.0 103.7KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-nanotime/postgresql-17-pg-nanotime_0.2.0-1PGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-pg-nanotime postgresql-17-pg-nanotime_0.2.0-1PGSTY~jammy_amd64.deb pigsty 0.2.0 115.3KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-nanotime/postgresql-17-pg-nanotime_0.2.0-1PGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-pg-nanotime postgresql-17-pg-nanotime_0.2.0-1PGSTY~jammy_arm64.deb pigsty 0.2.0 118.3KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-nanotime/postgresql-17-pg-nanotime_0.2.0-1PGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-pg-nanotime postgresql-17-pg-nanotime_0.2.0-1PGSTY~noble_amd64.deb pigsty 0.2.0 106.6KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-nanotime/postgresql-17-pg-nanotime_0.2.0-1PGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-pg-nanotime postgresql-17-pg-nanotime_0.2.0-1PGSTY~noble_arm64.deb pigsty 0.2.0 110.5KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-nanotime/postgresql-17-pg-nanotime_0.2.0-1PGSTY~noble_arm64.deb
@ u26.x86_64 17 postgresql-17-pg-nanotime postgresql-17-pg-nanotime_0.2.0-1PGSTY~resolute_amd64.deb pigsty 0.2.0 106.4KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-nanotime/postgresql-17-pg-nanotime_0.2.0-1PGSTY~resolute_amd64.deb
@ u26.aarch64 17 postgresql-17-pg-nanotime postgresql-17-pg-nanotime_0.2.0-1PGSTY~resolute_arm64.deb pigsty 0.2.0 104.8KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-nanotime/postgresql-17-pg-nanotime_0.2.0-1PGSTY~resolute_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `pg_nanotime` 扩展的 RPM / DEB 包：

```bash
pig build pkg pg_nanotime         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `pg_nanotime` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](https://pig.pgsty.com/zh) 或者是 `apt/yum/dnf` 安装扩展：

```bash {tab="安装" group="extension-install" value="install"}
pig install pg_nanotime;          # 当前活跃 PG 版本安装
```

```bash {tab="pig" value="pig"}
pig ext install -y pg_nanotime -v 18  # PG 18
pig ext install -y pg_nanotime -v 17  # PG 17
```

```bash {tab="dnf" value="dnf"}
dnf install -y pg_nanotime_18       # PG 18
dnf install -y pg_nanotime_17       # PG 17
```

```bash {tab="apt" value="apt"}
apt install -y postgresql-18-pg-nanotime   # PG 18
apt install -y postgresql-17-pg-nanotime   # PG 17
```


**创建扩展**：

```sql
CREATE EXTENSION pg_nanotime;
```

## 用法

来源：

- [0.2.0 README](https://github.com/bunko666-cloud/pg_nanotime/blob/f7583f4609223a53818a7841d5bc52903305ed2f/README.md)
- [0.2.0 控制文件](https://github.com/bunko666-cloud/pg_nanotime/blob/f7583f4609223a53818a7841d5bc52903305ed2f/pg_nanotime.control)
- [0.2.0 SQL 对象](https://github.com/bunko666-cloud/pg_nanotime/blob/f7583f4609223a53818a7841d5bc52903305ed2f/sql/pg_nanotime--0.2.0.sql)
- [技术参考](https://github.com/bunko666-cloud/pg_nanotime/blob/f7583f4609223a53818a7841d5bc52903305ed2f/docs/TECHNICAL.md)
- [0.2.0 变更记录](https://github.com/bunko666-cloud/pg_nanotime/blob/f7583f4609223a53818a7841d5bc52903305ed2f/CHANGELOG.md)
- [PGXN 发布元数据](https://github.com/bunko666-cloud/pg_nanotime/blob/f7583f4609223a53818a7841d5bc52903305ed2f/META.json)

`pg_nanotime` 0.2.0 在 PostgreSQL 17–18 中提供纳秒时间戳与时间间隔类型，适用于事件时间、延迟测量和外部纳秒数据。纳秒存储精度不代表系统时钟具有纳秒准确度。

### 核心用法

```sql
CREATE EXTENSION pg_nanotime;
CREATE TABLE events (at nanotimestamptz DEFAULT clock_ns(), body text);
INSERT INTO events (body) VALUES ('received');
SELECT at, at::timestamptz FROM events;
```

| 类型 | 存储与含义 |
| --- | --- |
| `nanotimestamptz` | 16 字节；按会话时区显示的时刻，覆盖 PostgreSQL 的完整时间戳范围 |
| `nanotimestamp` | 16 字节；不带时区的时间戳 |
| `nanotimestamptz8` | 8 字节；有符号 Unix 纳秒数，范围缩小到 1677–2262 年 |
| `nanointerval` | 16 字节；固定经过时长，不包含日历月份 |

转换为内置时间戳时向下取整到微秒，Unix 纪元之前的时间也一样。绝对时刻转为 bigint 得到 Unix 纳秒数，超出 bigint 范围会报错。不要用双精度浮点数传递较大的整数纳秒值。

### 时长、聚合与序列

时间戳相减得到纳秒时长。0.2.0 新增时间间隔聚合与序列生成：

```sql
WITH samples(ns) AS (VALUES (1250::bigint), (2751::bigint))
SELECT sum(nanointerval_from_ns(ns)) AS total,
       avg(nanointerval_from_ns(ns)) AS mean,
       abs(nanointerval_from_ns(-1250::bigint)) AS magnitude
FROM samples;

SELECT *
FROM generate_series(
  '2026-10-24 00:00:00+00'::nanotimestamptz,
  '2026-10-24 00:00:00.000000003+00'::nanotimestamptz,
  nanointerval_from_ns(1::bigint)
);
```

`sum` 与 `avg` 精确累加，忽略 NULL，无输入时返回 NULL，溢出时报错。平均值舍入到最近的纳秒，恰好一半时远离零。序列包含步长能够到达的终点，支持负步长，拒绝零步长。

整数输入用 `nanointerval_from_ns(bigint)` 保持精确，更大的值用 `nanointerval_from_ns(numeric)`；小数输入会舍入到纳秒。双精度浮点重载在超过 2^53 纳秒后会丢失精度。

其他常用对象包括固定时长分桶函数 `time_bucket_ns`、精确字段提取函数 `extract_ns`，以及 `date_trunc` 和 `timezone`。应显式标注时长字面量的类型：时间戳运算中的无类型字符串可能被解析为 PostgreSQL 的日历间隔。时间戳类型支持 B-tree、hash 与 BRIN minmax 索引；时间间隔类型支持 B-tree 和 hash。

### 时钟与使用边界

`clock_ns()` 每次调用都读取墙上时钟。`now_ns()` 为事务缓存扩展自己的时钟读数，`statement_ns()` 为语句缓存；这些读数与 PostgreSQL 内置时间戳并非同一次采样。普通时钟可能随系统时钟回拨。

`clock_ns_monotonic()` 在单个后端内产生严格递增的值。`clock_ns_global()` 在同一 PostgreSQL 实例的各后端之间实现严格递增，需要以下配置并重启服务器：

```ini
shared_preload_libraries = 'pg_nanotime'
```

保留配置中已有的其他库。普通类型和时钟不要求预加载。全局递增状态位于共享内存，重启后不保留，不能当作持久序列或分布式排序机制。安装需要超级用户；扩展可迁移到其他模式，但未标记为可信扩展。

`nanotime_clock_status()` 提供时钟与单调状态诊断。`nanotime.clock_source` 默认为 `realtime`；可选的 `tai` 依赖操作系统配置的 TAI 偏移量。TAI 值仍按 UTC 格式输出，因此不要在同一列中混用这两种来源。

### 升级与迁移

上游将 0.2.0 标记为 PGXN 测试版。替换库文件与 SQL 文件后，逐库执行升级：

```sql
ALTER EXTENSION pg_nanotime UPDATE TO '0.2.0';
```

列转换辅助过程 `nanotime_migrate_column` 默认使用 16 字节类型，bigint 来源也一样；它通过 ALTER TABLE 修改列并重建索引。执行前应检查转换规则和锁开销。TimescaleDB 集成是可选功能；整数时间与连续聚合有各自的要求，不能仅凭能够存储纳秒时间戳就推断兼容。
