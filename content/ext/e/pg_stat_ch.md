---
title: "pg_stat_ch"
linkTitle: "pg_stat_ch"
description: "将 PostgreSQL 查询遥测实时导出到 ClickHouse"
weight: 6020
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/ClickHouse/pg_stat_ch">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">ClickHouse/pg_stat_ch</div>
    <div class="ext-card__desc">https://github.com/ClickHouse/pg_stat_ch</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/pg_stat_ch-0.3.6.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">pg_stat_ch-0.3.6.tar.gz</div>
    <div class="ext-card__desc">pg_stat_ch-0.3.6.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pg_stat_ch`**](/ext/e/pg_stat_ch) | `0.3.6` | <a class="ext-badge ext-badge--cate stat" href="/ext/cate/stat">STAT</a> | <a class="ext-badge ext-badge--license apache20 and mit and bsd2clause and bsd3clause" href="/ext/license#apache20andmitandbsd2clauseandbsd3clause">Apache-2.0 AND MIT AND BSD-2-Clause AND BSD-3-Clause</a> | <a class="ext-badge ext-badge--lang cpp" href="/ext/language#cpp">C++</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 6020  | [**`pg_stat_ch`**](/ext/e/pg_stat_ch) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | - |
{.ext-table}

| **相关扩展** | [`pg_tracing`](/ext/e/pg_tracing) [`pg_stat_monitor`](/ext/e/pg_stat_monitor) [`pg_stat_kcache`](/ext/e/pg_stat_kcache) [`powa`](/ext/e/powa) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


> freeze due to new vcpkg dependency stack


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#stat) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.3.6` | {{< pgvers "18,17,16" >}} | `pg_stat_ch` | - |
| [**RPM**](/ext/rpm#stat) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.3.6` | {{< pgvers "18,17,16" >}} | `pg_stat_ch_$v` | - |
| [**DEB**](/ext/deb#stat) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.3.6` | {{< pgvers "18,17,16" >}} | `postgresql-$v-pg-stat-ch` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| el8.aarch64 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| el9.x86_64 | AVAIL PIGSTY 0.3.6 1 | AVAIL PIGSTY 0.3.6 1 | AVAIL PIGSTY 0.3.6 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| el9.aarch64 | AVAIL PIGSTY 0.3.6 1 | AVAIL PIGSTY 0.3.6 1 | AVAIL PIGSTY 0.3.6 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| el10.x86_64 | AVAIL PIGSTY 0.3.6 1 | AVAIL PIGSTY 0.3.6 1 | AVAIL PIGSTY 0.3.6 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| el10.aarch64 | AVAIL PIGSTY 0.3.6 1 | AVAIL PIGSTY 0.3.6 1 | AVAIL PIGSTY 0.3.6 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| d12.x86_64 | AVAIL PIGSTY 0.3.6 1 | AVAIL PIGSTY 0.3.6 1 | AVAIL PIGSTY 0.3.6 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| d12.aarch64 | AVAIL PIGSTY 0.3.6 1 | AVAIL PIGSTY 0.3.6 1 | AVAIL PIGSTY 0.3.6 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| d13.x86_64 | AVAIL PIGSTY 0.3.6 1 | AVAIL PIGSTY 0.3.6 1 | AVAIL PIGSTY 0.3.6 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| d13.aarch64 | AVAIL PIGSTY 0.3.6 1 | AVAIL PIGSTY 0.3.6 1 | AVAIL PIGSTY 0.3.6 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| u22.x86_64 | AVAIL PIGSTY 0.3.6 1 | AVAIL PIGSTY 0.3.6 1 | AVAIL PIGSTY 0.3.6 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| u22.aarch64 | AVAIL PIGSTY 0.3.6 1 | AVAIL PIGSTY 0.3.6 1 | AVAIL PIGSTY 0.3.6 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| u24.x86_64 | AVAIL PIGSTY 0.3.6 1 | AVAIL PIGSTY 0.3.6 1 | AVAIL PIGSTY 0.3.6 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| u24.aarch64 | AVAIL PIGSTY 0.3.6 1 | AVAIL PIGSTY 0.3.6 1 | AVAIL PIGSTY 0.3.6 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| u26.x86_64 | AVAIL PIGSTY 0.3.6 1 | AVAIL PIGSTY 0.3.6 1 | AVAIL PIGSTY 0.3.6 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| u26.aarch64 | AVAIL PIGSTY 0.3.6 1 | AVAIL PIGSTY 0.3.6 1 | AVAIL PIGSTY 0.3.6 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
@ el9.x86_64 18 pg_stat_ch_18 pg_stat_ch_18-0.3.6-1PIGSTY.el9.x86_64.rpm pigsty 0.3.6 872.4KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_stat_ch_18-0.3.6-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 18 pg_stat_ch_18 pg_stat_ch_18-0.3.6-1PIGSTY.el9.aarch64.rpm pigsty 0.3.6 829.2KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_stat_ch_18-0.3.6-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 18 pg_stat_ch_18 pg_stat_ch_18-0.3.6-1PIGSTY.el10.x86_64.rpm pigsty 0.3.6 822.8KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_stat_ch_18-0.3.6-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 18 pg_stat_ch_18 pg_stat_ch_18-0.3.6-1PIGSTY.el10.aarch64.rpm pigsty 0.3.6 774.1KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_stat_ch_18-0.3.6-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-pg-stat-ch postgresql-18-pg-stat-ch_0.3.6-1PIGSTY~bookworm_amd64.deb pigsty 0.3.6 720.3KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-stat-ch/postgresql-18-pg-stat-ch_0.3.6-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-pg-stat-ch postgresql-18-pg-stat-ch_0.3.6-1PIGSTY~bookworm_arm64.deb pigsty 0.3.6 649.5KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-stat-ch/postgresql-18-pg-stat-ch_0.3.6-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-pg-stat-ch postgresql-18-pg-stat-ch_0.3.6-1PIGSTY~trixie_amd64.deb pigsty 0.3.6 731.0KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-stat-ch/postgresql-18-pg-stat-ch_0.3.6-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-pg-stat-ch postgresql-18-pg-stat-ch_0.3.6-1PIGSTY~trixie_arm64.deb pigsty 0.3.6 656.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-stat-ch/postgresql-18-pg-stat-ch_0.3.6-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-pg-stat-ch postgresql-18-pg-stat-ch_0.3.6-1PIGSTY~jammy_amd64.deb pigsty 0.3.6 5.4MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-stat-ch/postgresql-18-pg-stat-ch_0.3.6-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-pg-stat-ch postgresql-18-pg-stat-ch_0.3.6-1PIGSTY~jammy_arm64.deb pigsty 0.3.6 5.1MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-stat-ch/postgresql-18-pg-stat-ch_0.3.6-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-pg-stat-ch postgresql-18-pg-stat-ch_0.3.6-1PIGSTY~noble_amd64.deb pigsty 0.3.6 716.9KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-stat-ch/postgresql-18-pg-stat-ch_0.3.6-1PIGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-pg-stat-ch postgresql-18-pg-stat-ch_0.3.6-1PIGSTY~noble_arm64.deb pigsty 0.3.6 683.3KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-stat-ch/postgresql-18-pg-stat-ch_0.3.6-1PIGSTY~noble_arm64.deb
@ u26.x86_64 18 postgresql-18-pg-stat-ch postgresql-18-pg-stat-ch_0.3.6-1PIGSTY~resolute_amd64.deb pigsty 0.3.6 734.0KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-stat-ch/postgresql-18-pg-stat-ch_0.3.6-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 18 postgresql-18-pg-stat-ch postgresql-18-pg-stat-ch_0.3.6-1PIGSTY~resolute_arm64.deb pigsty 0.3.6 717.7KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-stat-ch/postgresql-18-pg-stat-ch_0.3.6-1PIGSTY~resolute_arm64.deb
@ el9.x86_64 17 pg_stat_ch_17 pg_stat_ch_17-0.3.6-1PIGSTY.el9.x86_64.rpm pigsty 0.3.6 871.9KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_stat_ch_17-0.3.6-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 17 pg_stat_ch_17 pg_stat_ch_17-0.3.6-1PIGSTY.el9.aarch64.rpm pigsty 0.3.6 829.3KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_stat_ch_17-0.3.6-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 17 pg_stat_ch_17 pg_stat_ch_17-0.3.6-1PIGSTY.el10.x86_64.rpm pigsty 0.3.6 822.7KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_stat_ch_17-0.3.6-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 17 pg_stat_ch_17 pg_stat_ch_17-0.3.6-1PIGSTY.el10.aarch64.rpm pigsty 0.3.6 773.3KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_stat_ch_17-0.3.6-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-pg-stat-ch postgresql-17-pg-stat-ch_0.3.6-1PIGSTY~bookworm_amd64.deb pigsty 0.3.6 719.4KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-stat-ch/postgresql-17-pg-stat-ch_0.3.6-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-pg-stat-ch postgresql-17-pg-stat-ch_0.3.6-1PIGSTY~bookworm_arm64.deb pigsty 0.3.6 648.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-stat-ch/postgresql-17-pg-stat-ch_0.3.6-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-pg-stat-ch postgresql-17-pg-stat-ch_0.3.6-1PIGSTY~trixie_amd64.deb pigsty 0.3.6 730.8KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-stat-ch/postgresql-17-pg-stat-ch_0.3.6-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-pg-stat-ch postgresql-17-pg-stat-ch_0.3.6-1PIGSTY~trixie_arm64.deb pigsty 0.3.6 655.8KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-stat-ch/postgresql-17-pg-stat-ch_0.3.6-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-pg-stat-ch postgresql-17-pg-stat-ch_0.3.6-1PIGSTY~jammy_amd64.deb pigsty 0.3.6 5.4MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-stat-ch/postgresql-17-pg-stat-ch_0.3.6-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-pg-stat-ch postgresql-17-pg-stat-ch_0.3.6-1PIGSTY~jammy_arm64.deb pigsty 0.3.6 5.1MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-stat-ch/postgresql-17-pg-stat-ch_0.3.6-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-pg-stat-ch postgresql-17-pg-stat-ch_0.3.6-1PIGSTY~noble_amd64.deb pigsty 0.3.6 716.7KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-stat-ch/postgresql-17-pg-stat-ch_0.3.6-1PIGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-pg-stat-ch postgresql-17-pg-stat-ch_0.3.6-1PIGSTY~noble_arm64.deb pigsty 0.3.6 683.1KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-stat-ch/postgresql-17-pg-stat-ch_0.3.6-1PIGSTY~noble_arm64.deb
@ u26.x86_64 17 postgresql-17-pg-stat-ch postgresql-17-pg-stat-ch_0.3.6-1PIGSTY~resolute_amd64.deb pigsty 0.3.6 735.5KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-stat-ch/postgresql-17-pg-stat-ch_0.3.6-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 17 postgresql-17-pg-stat-ch postgresql-17-pg-stat-ch_0.3.6-1PIGSTY~resolute_arm64.deb pigsty 0.3.6 719.1KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-stat-ch/postgresql-17-pg-stat-ch_0.3.6-1PIGSTY~resolute_arm64.deb
@ el9.x86_64 16 pg_stat_ch_16 pg_stat_ch_16-0.3.6-1PIGSTY.el9.x86_64.rpm pigsty 0.3.6 871.8KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_stat_ch_16-0.3.6-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 16 pg_stat_ch_16 pg_stat_ch_16-0.3.6-1PIGSTY.el9.aarch64.rpm pigsty 0.3.6 829.1KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_stat_ch_16-0.3.6-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 16 pg_stat_ch_16 pg_stat_ch_16-0.3.6-1PIGSTY.el10.x86_64.rpm pigsty 0.3.6 822.6KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_stat_ch_16-0.3.6-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 16 pg_stat_ch_16 pg_stat_ch_16-0.3.6-1PIGSTY.el10.aarch64.rpm pigsty 0.3.6 773.5KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_stat_ch_16-0.3.6-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-pg-stat-ch postgresql-16-pg-stat-ch_0.3.6-1PIGSTY~bookworm_amd64.deb pigsty 0.3.6 719.6KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-stat-ch/postgresql-16-pg-stat-ch_0.3.6-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-pg-stat-ch postgresql-16-pg-stat-ch_0.3.6-1PIGSTY~bookworm_arm64.deb pigsty 0.3.6 649.4KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-stat-ch/postgresql-16-pg-stat-ch_0.3.6-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-pg-stat-ch postgresql-16-pg-stat-ch_0.3.6-1PIGSTY~trixie_amd64.deb pigsty 0.3.6 729.5KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-stat-ch/postgresql-16-pg-stat-ch_0.3.6-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-pg-stat-ch postgresql-16-pg-stat-ch_0.3.6-1PIGSTY~trixie_arm64.deb pigsty 0.3.6 656.6KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-stat-ch/postgresql-16-pg-stat-ch_0.3.6-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-pg-stat-ch postgresql-16-pg-stat-ch_0.3.6-1PIGSTY~jammy_amd64.deb pigsty 0.3.6 5.4MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-stat-ch/postgresql-16-pg-stat-ch_0.3.6-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-pg-stat-ch postgresql-16-pg-stat-ch_0.3.6-1PIGSTY~jammy_arm64.deb pigsty 0.3.6 5.1MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-stat-ch/postgresql-16-pg-stat-ch_0.3.6-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-pg-stat-ch postgresql-16-pg-stat-ch_0.3.6-1PIGSTY~noble_amd64.deb pigsty 0.3.6 716.4KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-stat-ch/postgresql-16-pg-stat-ch_0.3.6-1PIGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-pg-stat-ch postgresql-16-pg-stat-ch_0.3.6-1PIGSTY~noble_arm64.deb pigsty 0.3.6 681.9KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-stat-ch/postgresql-16-pg-stat-ch_0.3.6-1PIGSTY~noble_arm64.deb
@ u26.x86_64 16 postgresql-16-pg-stat-ch postgresql-16-pg-stat-ch_0.3.6-1PIGSTY~resolute_amd64.deb pigsty 0.3.6 733.9KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-stat-ch/postgresql-16-pg-stat-ch_0.3.6-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 16 postgresql-16-pg-stat-ch postgresql-16-pg-stat-ch_0.3.6-1PIGSTY~resolute_arm64.deb pigsty 0.3.6 717.6KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-stat-ch/postgresql-16-pg-stat-ch_0.3.6-1PIGSTY~resolute_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `pg_stat_ch` 扩展的 RPM / DEB 包：

```bash
pig build pkg pg_stat_ch         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `pg_stat_ch` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install pg_stat_ch;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y pg_stat_ch -v 18  # PG 18
pig ext install -y pg_stat_ch -v 17  # PG 17
pig ext install -y pg_stat_ch -v 16  # PG 16
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y pg_stat_ch_18       # PG 18
dnf install -y pg_stat_ch_17       # PG 17
dnf install -y pg_stat_ch_16       # PG 16
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-pg-stat-ch   # PG 18
apt install -y postgresql-17-pg-stat-ch   # PG 17
apt install -y postgresql-16-pg-stat-ch   # PG 16
```
{{% /tab %}}
{{< /tabpane >}}


**预加载配置**：

```bash
shared_preload_libraries = 'pg_stat_ch';
```


**创建扩展**：

```sql
CREATE EXTENSION pg_stat_ch;
```

## 用法

来源：[README](https://github.com/ClickHouse/pg_stat_ch/blob/main/README.md)、[release 0.3.6](https://github.com/ClickHouse/pg_stat_ch/releases/tag/v0.3.6)

`pg_stat_ch` 会捕获 PostgreSQL 的逐查询执行遥测，并通过共享内存队列和后台 worker 将原始事件导出到 ClickHouse。上游将它定位为 `pg_stat_statements` 的原始事件替代方案：聚合与看板交给 ClickHouse 处理，而不是留在 PostgreSQL 内部。

```sql
CREATE EXTENSION pg_stat_ch;
```

### 所需配置

`pg_stat_ch` 必须被 preload，并指向一个 ClickHouse 数据库：

```conf
shared_preload_libraries = 'pg_stat_ch'
track_io_timing = on

pg_stat_ch.clickhouse_host = 'localhost'
pg_stat_ch.clickhouse_port = 9000
pg_stat_ch.clickhouse_database = 'pg_stat_ch'
pg_stat_ch.clickhouse_use_tls = on
pg_stat_ch.clickhouse_skip_tls_verify = off
```

README 说明 PostgreSQL 16、17 和 18 已完整支持；最新 release 是 2026-04-15 发布的 `0.3.6`。

### SQL API

- `pg_stat_ch_version()` 返回扩展版本。
- `pg_stat_ch_stats()` 暴露队列与导出器计数器。
- `pg_stat_ch_reset()` 清空队列计数器。
- `pg_stat_ch_flush()` 立即触发一次导出 flush。

```sql
SELECT pg_stat_ch_version();
SELECT * FROM pg_stat_ch_stats();
SELECT pg_stat_ch_flush();
```

### 重要 GUC

- `pg_stat_ch.enabled` 控制是否采集。
- `pg_stat_ch.queue_capacity` 和 `pg_stat_ch.string_area_size` 用于调整共享内存缓冲区大小。
- `pg_stat_ch.flush_interval_ms` 和 `pg_stat_ch.batch_max` 控制导出节奏和批量大小。
- `pg_stat_ch.log_min_elevel` 控制捕获哪些错误。

### 捕获内容

- 查询耗时、返回行数、缓冲区使用、WAL 使用量和 CPU 时间。
- DML、DDL 和 utility 语句。
- SQLSTATE 和错误级别。
- PostgreSQL 15+ 的 JIT 指标。
- PostgreSQL 18+ 的并行 worker 统计。
- 应用名、客户端 IP，以及在上游截断限制内的查询文本。

Release `0.3.6` 将 normalize cache 替换为以 queryId 为键的 LRU cache，并将 OpenTelemetry SDK 替换为 direct-protobuf exporter 加 sampling support。现有 SQL 用法仍围绕事件表、汇总视图，以及上面的 reset/version 辅助函数。

### 注意事项

- 该设计在队列溢出时会主动丢弃事件，而不是阻塞前台查询路径。
- ClickHouse schema 创建是必需的部署步骤；上游 quickstart 脚本会自动加载，但手工部署必须单独加载 schema。
- Pigsty 当前这次 RPM refresh 中，`pg_stat_ch` 是 PostgreSQL 16-18 且仅覆盖 EL9/EL10；Debian/Ubuntu 包仍覆盖活跃目标上的 PostgreSQL 16-18。
