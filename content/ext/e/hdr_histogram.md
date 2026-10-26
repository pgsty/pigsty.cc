---
title: "hdr_histogram"
linkTitle: "hdr_histogram"
description: "HDR 直方图类型、分位数查询与可合并聚合。"
weight: 4715
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/vovcke/pg_hdr_histogram">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">vovcke/pg_hdr_histogram</div>
    <div class="ext-card__desc">https://github.com/vovcke/pg_hdr_histogram</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/hdr_histogram-1.0.0.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">hdr_histogram-1.0.0.tar.gz</div>
    <div class="ext-card__desc">hdr_histogram-1.0.0.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`hdr_histogram`**](/ext/e/hdr_histogram) | `1.0` | <a class="ext-badge ext-badge--cate func" href="/ext/cate/func">FUNC</a> | <a class="ext-badge ext-badge--license mit" href="/ext/license#mit">MIT</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 4715  | [**`hdr_histogram`**](/ext/e/hdr_histogram) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | - |
{.ext-table}


> Official v1.0.0 release asset installs control/SQL 1.0; the Git tag declares 1.0.0. Extension license is MIT; packages also include the CC0-1.0 HdrHistogram_c library. PG14-18; requires zlib. Default lossless merge depends on accumulator range/order; left mode can discard samples.


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#func) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.0` | {{< pgvers "14,15,16,17,18" >}} | `hdr_histogram` | - |
| [**RPM**](/ext/rpm#func) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.0.0` | {{< pgvers "14,15,16,17,18" >}} | `hdr_histogram_$v` | `zlib` |
| [**DEB**](/ext/deb#func) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.0.0` | {{< pgvers "14,15,16,17,18" >}} | `postgresql-$v-hdr-histogram` | `zlib1g` |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 |
| el8.aarch64 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 |
| el9.x86_64 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 |
| el9.aarch64 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 |
| el10.x86_64 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 |
| el10.aarch64 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 |
| d12.x86_64 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 |
| d12.aarch64 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 |
| d13.x86_64 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 |
| d13.aarch64 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 |
| u22.x86_64 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 |
| u22.aarch64 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 |
| u24.x86_64 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 |
| u24.aarch64 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 |
| u26.x86_64 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 |
| u26.aarch64 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 |
@ el8.x86_64 18 hdr_histogram_18 hdr_histogram_18-1.0.0-1PGSTY.el8.x86_64.rpm pigsty 1.0.0 79.4KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/hdr_histogram_18-1.0.0-1PGSTY.el8.x86_64.rpm
@ el8.aarch64 18 hdr_histogram_18 hdr_histogram_18-1.0.0-1PGSTY.el8.aarch64.rpm pigsty 1.0.0 76.4KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/hdr_histogram_18-1.0.0-1PGSTY.el8.aarch64.rpm
@ el9.x86_64 18 hdr_histogram_18 hdr_histogram_18-1.0.0-1PGSTY.el9.x86_64.rpm pigsty 1.0.0 76.0KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/hdr_histogram_18-1.0.0-1PGSTY.el9.x86_64.rpm
@ el9.aarch64 18 hdr_histogram_18 hdr_histogram_18-1.0.0-1PGSTY.el9.aarch64.rpm pigsty 1.0.0 72.1KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/hdr_histogram_18-1.0.0-1PGSTY.el9.aarch64.rpm
@ el10.x86_64 18 hdr_histogram_18 hdr_histogram_18-1.0.0-1PGSTY.el10.x86_64.rpm pigsty 1.0.0 76.8KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/hdr_histogram_18-1.0.0-1PGSTY.el10.x86_64.rpm
@ el10.aarch64 18 hdr_histogram_18 hdr_histogram_18-1.0.0-1PGSTY.el10.aarch64.rpm pigsty 1.0.0 72.7KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/hdr_histogram_18-1.0.0-1PGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-hdr-histogram postgresql-18-hdr-histogram_1.0.0-1PGSTY~bookworm_amd64.deb pigsty 1.0.0 70.5KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/h/hdr-histogram/postgresql-18-hdr-histogram_1.0.0-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-hdr-histogram postgresql-18-hdr-histogram_1.0.0-1PGSTY~bookworm_arm64.deb pigsty 1.0.0 66.8KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/h/hdr-histogram/postgresql-18-hdr-histogram_1.0.0-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-hdr-histogram postgresql-18-hdr-histogram_1.0.0-1PGSTY~trixie_amd64.deb pigsty 1.0.0 71.7KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/h/hdr-histogram/postgresql-18-hdr-histogram_1.0.0-1PGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-hdr-histogram postgresql-18-hdr-histogram_1.0.0-1PGSTY~trixie_arm64.deb pigsty 1.0.0 67.9KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/h/hdr-histogram/postgresql-18-hdr-histogram_1.0.0-1PGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-hdr-histogram postgresql-18-hdr-histogram_1.0.0-1PGSTY~jammy_amd64.deb pigsty 1.0.0 69.4KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/h/hdr-histogram/postgresql-18-hdr-histogram_1.0.0-1PGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-hdr-histogram postgresql-18-hdr-histogram_1.0.0-1PGSTY~jammy_arm64.deb pigsty 1.0.0 65.7KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/h/hdr-histogram/postgresql-18-hdr-histogram_1.0.0-1PGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-hdr-histogram postgresql-18-hdr-histogram_1.0.0-1PGSTY~noble_amd64.deb pigsty 1.0.0 68.3KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/h/hdr-histogram/postgresql-18-hdr-histogram_1.0.0-1PGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-hdr-histogram postgresql-18-hdr-histogram_1.0.0-1PGSTY~noble_arm64.deb pigsty 1.0.0 64.8KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/h/hdr-histogram/postgresql-18-hdr-histogram_1.0.0-1PGSTY~noble_arm64.deb
@ u26.x86_64 18 postgresql-18-hdr-histogram postgresql-18-hdr-histogram_1.0.0-1PGSTY~resolute_amd64.deb pigsty 1.0.0 68.7KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/h/hdr-histogram/postgresql-18-hdr-histogram_1.0.0-1PGSTY~resolute_amd64.deb
@ u26.aarch64 18 postgresql-18-hdr-histogram postgresql-18-hdr-histogram_1.0.0-1PGSTY~resolute_arm64.deb pigsty 1.0.0 65.1KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/h/hdr-histogram/postgresql-18-hdr-histogram_1.0.0-1PGSTY~resolute_arm64.deb
@ el8.x86_64 17 hdr_histogram_17 hdr_histogram_17-1.0.0-1PGSTY.el8.x86_64.rpm pigsty 1.0.0 79.4KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/hdr_histogram_17-1.0.0-1PGSTY.el8.x86_64.rpm
@ el8.aarch64 17 hdr_histogram_17 hdr_histogram_17-1.0.0-1PGSTY.el8.aarch64.rpm pigsty 1.0.0 76.4KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/hdr_histogram_17-1.0.0-1PGSTY.el8.aarch64.rpm
@ el9.x86_64 17 hdr_histogram_17 hdr_histogram_17-1.0.0-1PGSTY.el9.x86_64.rpm pigsty 1.0.0 76.1KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/hdr_histogram_17-1.0.0-1PGSTY.el9.x86_64.rpm
@ el9.aarch64 17 hdr_histogram_17 hdr_histogram_17-1.0.0-1PGSTY.el9.aarch64.rpm pigsty 1.0.0 72.1KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/hdr_histogram_17-1.0.0-1PGSTY.el9.aarch64.rpm
@ el10.x86_64 17 hdr_histogram_17 hdr_histogram_17-1.0.0-1PGSTY.el10.x86_64.rpm pigsty 1.0.0 76.7KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/hdr_histogram_17-1.0.0-1PGSTY.el10.x86_64.rpm
@ el10.aarch64 17 hdr_histogram_17 hdr_histogram_17-1.0.0-1PGSTY.el10.aarch64.rpm pigsty 1.0.0 72.7KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/hdr_histogram_17-1.0.0-1PGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-hdr-histogram postgresql-17-hdr-histogram_1.0.0-1PGSTY~bookworm_amd64.deb pigsty 1.0.0 70.5KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/h/hdr-histogram/postgresql-17-hdr-histogram_1.0.0-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-hdr-histogram postgresql-17-hdr-histogram_1.0.0-1PGSTY~bookworm_arm64.deb pigsty 1.0.0 66.8KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/h/hdr-histogram/postgresql-17-hdr-histogram_1.0.0-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-hdr-histogram postgresql-17-hdr-histogram_1.0.0-1PGSTY~trixie_amd64.deb pigsty 1.0.0 71.7KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/h/hdr-histogram/postgresql-17-hdr-histogram_1.0.0-1PGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-hdr-histogram postgresql-17-hdr-histogram_1.0.0-1PGSTY~trixie_arm64.deb pigsty 1.0.0 67.9KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/h/hdr-histogram/postgresql-17-hdr-histogram_1.0.0-1PGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-hdr-histogram postgresql-17-hdr-histogram_1.0.0-1PGSTY~jammy_amd64.deb pigsty 1.0.0 72.6KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/h/hdr-histogram/postgresql-17-hdr-histogram_1.0.0-1PGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-hdr-histogram postgresql-17-hdr-histogram_1.0.0-1PGSTY~jammy_arm64.deb pigsty 1.0.0 68.5KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/h/hdr-histogram/postgresql-17-hdr-histogram_1.0.0-1PGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-hdr-histogram postgresql-17-hdr-histogram_1.0.0-1PGSTY~noble_amd64.deb pigsty 1.0.0 68.2KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/h/hdr-histogram/postgresql-17-hdr-histogram_1.0.0-1PGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-hdr-histogram postgresql-17-hdr-histogram_1.0.0-1PGSTY~noble_arm64.deb pigsty 1.0.0 64.8KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/h/hdr-histogram/postgresql-17-hdr-histogram_1.0.0-1PGSTY~noble_arm64.deb
@ u26.x86_64 17 postgresql-17-hdr-histogram postgresql-17-hdr-histogram_1.0.0-1PGSTY~resolute_amd64.deb pigsty 1.0.0 68.7KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/h/hdr-histogram/postgresql-17-hdr-histogram_1.0.0-1PGSTY~resolute_amd64.deb
@ u26.aarch64 17 postgresql-17-hdr-histogram postgresql-17-hdr-histogram_1.0.0-1PGSTY~resolute_arm64.deb pigsty 1.0.0 65.2KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/h/hdr-histogram/postgresql-17-hdr-histogram_1.0.0-1PGSTY~resolute_arm64.deb
@ el8.x86_64 16 hdr_histogram_16 hdr_histogram_16-1.0.0-1PGSTY.el8.x86_64.rpm pigsty 1.0.0 79.3KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/hdr_histogram_16-1.0.0-1PGSTY.el8.x86_64.rpm
@ el8.aarch64 16 hdr_histogram_16 hdr_histogram_16-1.0.0-1PGSTY.el8.aarch64.rpm pigsty 1.0.0 76.4KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/hdr_histogram_16-1.0.0-1PGSTY.el8.aarch64.rpm
@ el9.x86_64 16 hdr_histogram_16 hdr_histogram_16-1.0.0-1PGSTY.el9.x86_64.rpm pigsty 1.0.0 76.1KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/hdr_histogram_16-1.0.0-1PGSTY.el9.x86_64.rpm
@ el9.aarch64 16 hdr_histogram_16 hdr_histogram_16-1.0.0-1PGSTY.el9.aarch64.rpm pigsty 1.0.0 72.1KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/hdr_histogram_16-1.0.0-1PGSTY.el9.aarch64.rpm
@ el10.x86_64 16 hdr_histogram_16 hdr_histogram_16-1.0.0-1PGSTY.el10.x86_64.rpm pigsty 1.0.0 76.7KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/hdr_histogram_16-1.0.0-1PGSTY.el10.x86_64.rpm
@ el10.aarch64 16 hdr_histogram_16 hdr_histogram_16-1.0.0-1PGSTY.el10.aarch64.rpm pigsty 1.0.0 72.6KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/hdr_histogram_16-1.0.0-1PGSTY.el10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-hdr-histogram postgresql-16-hdr-histogram_1.0.0-1PGSTY~bookworm_amd64.deb pigsty 1.0.0 70.5KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/h/hdr-histogram/postgresql-16-hdr-histogram_1.0.0-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-hdr-histogram postgresql-16-hdr-histogram_1.0.0-1PGSTY~bookworm_arm64.deb pigsty 1.0.0 66.8KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/h/hdr-histogram/postgresql-16-hdr-histogram_1.0.0-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-hdr-histogram postgresql-16-hdr-histogram_1.0.0-1PGSTY~trixie_amd64.deb pigsty 1.0.0 71.7KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/h/hdr-histogram/postgresql-16-hdr-histogram_1.0.0-1PGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-hdr-histogram postgresql-16-hdr-histogram_1.0.0-1PGSTY~trixie_arm64.deb pigsty 1.0.0 67.9KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/h/hdr-histogram/postgresql-16-hdr-histogram_1.0.0-1PGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-hdr-histogram postgresql-16-hdr-histogram_1.0.0-1PGSTY~jammy_amd64.deb pigsty 1.0.0 72.6KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/h/hdr-histogram/postgresql-16-hdr-histogram_1.0.0-1PGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-hdr-histogram postgresql-16-hdr-histogram_1.0.0-1PGSTY~jammy_arm64.deb pigsty 1.0.0 68.6KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/h/hdr-histogram/postgresql-16-hdr-histogram_1.0.0-1PGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-hdr-histogram postgresql-16-hdr-histogram_1.0.0-1PGSTY~noble_amd64.deb pigsty 1.0.0 68.2KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/h/hdr-histogram/postgresql-16-hdr-histogram_1.0.0-1PGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-hdr-histogram postgresql-16-hdr-histogram_1.0.0-1PGSTY~noble_arm64.deb pigsty 1.0.0 65.6KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/h/hdr-histogram/postgresql-16-hdr-histogram_1.0.0-1PGSTY~noble_arm64.deb
@ u26.x86_64 16 postgresql-16-hdr-histogram postgresql-16-hdr-histogram_1.0.0-1PGSTY~resolute_amd64.deb pigsty 1.0.0 68.7KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/h/hdr-histogram/postgresql-16-hdr-histogram_1.0.0-1PGSTY~resolute_amd64.deb
@ u26.aarch64 16 postgresql-16-hdr-histogram postgresql-16-hdr-histogram_1.0.0-1PGSTY~resolute_arm64.deb pigsty 1.0.0 65.2KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/h/hdr-histogram/postgresql-16-hdr-histogram_1.0.0-1PGSTY~resolute_arm64.deb
@ el8.x86_64 15 hdr_histogram_15 hdr_histogram_15-1.0.0-1PGSTY.el8.x86_64.rpm pigsty 1.0.0 79.7KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/hdr_histogram_15-1.0.0-1PGSTY.el8.x86_64.rpm
@ el8.aarch64 15 hdr_histogram_15 hdr_histogram_15-1.0.0-1PGSTY.el8.aarch64.rpm pigsty 1.0.0 76.9KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/hdr_histogram_15-1.0.0-1PGSTY.el8.aarch64.rpm
@ el9.x86_64 15 hdr_histogram_15 hdr_histogram_15-1.0.0-1PGSTY.el9.x86_64.rpm pigsty 1.0.0 82.9KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/hdr_histogram_15-1.0.0-1PGSTY.el9.x86_64.rpm
@ el9.aarch64 15 hdr_histogram_15 hdr_histogram_15-1.0.0-1PGSTY.el9.aarch64.rpm pigsty 1.0.0 79.1KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/hdr_histogram_15-1.0.0-1PGSTY.el9.aarch64.rpm
@ el10.x86_64 15 hdr_histogram_15 hdr_histogram_15-1.0.0-1PGSTY.el10.x86_64.rpm pigsty 1.0.0 83.6KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/hdr_histogram_15-1.0.0-1PGSTY.el10.x86_64.rpm
@ el10.aarch64 15 hdr_histogram_15 hdr_histogram_15-1.0.0-1PGSTY.el10.aarch64.rpm pigsty 1.0.0 79.9KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/hdr_histogram_15-1.0.0-1PGSTY.el10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-hdr-histogram postgresql-15-hdr-histogram_1.0.0-1PGSTY~bookworm_amd64.deb pigsty 1.0.0 71.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/h/hdr-histogram/postgresql-15-hdr-histogram_1.0.0-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-hdr-histogram postgresql-15-hdr-histogram_1.0.0-1PGSTY~bookworm_arm64.deb pigsty 1.0.0 71.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/h/hdr-histogram/postgresql-15-hdr-histogram_1.0.0-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-hdr-histogram postgresql-15-hdr-histogram_1.0.0-1PGSTY~trixie_amd64.deb pigsty 1.0.0 72.3KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/h/hdr-histogram/postgresql-15-hdr-histogram_1.0.0-1PGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-hdr-histogram postgresql-15-hdr-histogram_1.0.0-1PGSTY~trixie_arm64.deb pigsty 1.0.0 68.5KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/h/hdr-histogram/postgresql-15-hdr-histogram_1.0.0-1PGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-hdr-histogram postgresql-15-hdr-histogram_1.0.0-1PGSTY~jammy_amd64.deb pigsty 1.0.0 78.6KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/h/hdr-histogram/postgresql-15-hdr-histogram_1.0.0-1PGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-hdr-histogram postgresql-15-hdr-histogram_1.0.0-1PGSTY~jammy_arm64.deb pigsty 1.0.0 75.1KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/h/hdr-histogram/postgresql-15-hdr-histogram_1.0.0-1PGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-hdr-histogram postgresql-15-hdr-histogram_1.0.0-1PGSTY~noble_amd64.deb pigsty 1.0.0 74.3KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/h/hdr-histogram/postgresql-15-hdr-histogram_1.0.0-1PGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-hdr-histogram postgresql-15-hdr-histogram_1.0.0-1PGSTY~noble_arm64.deb pigsty 1.0.0 71.4KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/h/hdr-histogram/postgresql-15-hdr-histogram_1.0.0-1PGSTY~noble_arm64.deb
@ u26.x86_64 15 postgresql-15-hdr-histogram postgresql-15-hdr-histogram_1.0.0-1PGSTY~resolute_amd64.deb pigsty 1.0.0 75.0KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/h/hdr-histogram/postgresql-15-hdr-histogram_1.0.0-1PGSTY~resolute_amd64.deb
@ u26.aarch64 15 postgresql-15-hdr-histogram postgresql-15-hdr-histogram_1.0.0-1PGSTY~resolute_arm64.deb pigsty 1.0.0 71.7KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/h/hdr-histogram/postgresql-15-hdr-histogram_1.0.0-1PGSTY~resolute_arm64.deb
@ el8.x86_64 14 hdr_histogram_14 hdr_histogram_14-1.0.0-1PGSTY.el8.x86_64.rpm pigsty 1.0.0 79.7KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/hdr_histogram_14-1.0.0-1PGSTY.el8.x86_64.rpm
@ el8.aarch64 14 hdr_histogram_14 hdr_histogram_14-1.0.0-1PGSTY.el8.aarch64.rpm pigsty 1.0.0 76.8KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/hdr_histogram_14-1.0.0-1PGSTY.el8.aarch64.rpm
@ el9.x86_64 14 hdr_histogram_14 hdr_histogram_14-1.0.0-1PGSTY.el9.x86_64.rpm pigsty 1.0.0 82.9KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/hdr_histogram_14-1.0.0-1PGSTY.el9.x86_64.rpm
@ el9.aarch64 14 hdr_histogram_14 hdr_histogram_14-1.0.0-1PGSTY.el9.aarch64.rpm pigsty 1.0.0 79.2KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/hdr_histogram_14-1.0.0-1PGSTY.el9.aarch64.rpm
@ el10.x86_64 14 hdr_histogram_14 hdr_histogram_14-1.0.0-1PGSTY.el10.x86_64.rpm pigsty 1.0.0 83.6KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/hdr_histogram_14-1.0.0-1PGSTY.el10.x86_64.rpm
@ el10.aarch64 14 hdr_histogram_14 hdr_histogram_14-1.0.0-1PGSTY.el10.aarch64.rpm pigsty 1.0.0 79.9KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/hdr_histogram_14-1.0.0-1PGSTY.el10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-hdr-histogram postgresql-14-hdr-histogram_1.0.0-1PGSTY~bookworm_amd64.deb pigsty 1.0.0 71.0KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/h/hdr-histogram/postgresql-14-hdr-histogram_1.0.0-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 14 postgresql-14-hdr-histogram postgresql-14-hdr-histogram_1.0.0-1PGSTY~bookworm_arm64.deb pigsty 1.0.0 67.5KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/h/hdr-histogram/postgresql-14-hdr-histogram_1.0.0-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 14 postgresql-14-hdr-histogram postgresql-14-hdr-histogram_1.0.0-1PGSTY~trixie_amd64.deb pigsty 1.0.0 72.2KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/h/hdr-histogram/postgresql-14-hdr-histogram_1.0.0-1PGSTY~trixie_amd64.deb
@ d13.aarch64 14 postgresql-14-hdr-histogram postgresql-14-hdr-histogram_1.0.0-1PGSTY~trixie_arm64.deb pigsty 1.0.0 68.5KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/h/hdr-histogram/postgresql-14-hdr-histogram_1.0.0-1PGSTY~trixie_arm64.deb
@ u22.x86_64 14 postgresql-14-hdr-histogram postgresql-14-hdr-histogram_1.0.0-1PGSTY~jammy_amd64.deb pigsty 1.0.0 78.5KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/h/hdr-histogram/postgresql-14-hdr-histogram_1.0.0-1PGSTY~jammy_amd64.deb
@ u22.aarch64 14 postgresql-14-hdr-histogram postgresql-14-hdr-histogram_1.0.0-1PGSTY~jammy_arm64.deb pigsty 1.0.0 75.1KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/h/hdr-histogram/postgresql-14-hdr-histogram_1.0.0-1PGSTY~jammy_arm64.deb
@ u24.x86_64 14 postgresql-14-hdr-histogram postgresql-14-hdr-histogram_1.0.0-1PGSTY~noble_amd64.deb pigsty 1.0.0 74.3KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/h/hdr-histogram/postgresql-14-hdr-histogram_1.0.0-1PGSTY~noble_amd64.deb
@ u24.aarch64 14 postgresql-14-hdr-histogram postgresql-14-hdr-histogram_1.0.0-1PGSTY~noble_arm64.deb pigsty 1.0.0 71.3KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/h/hdr-histogram/postgresql-14-hdr-histogram_1.0.0-1PGSTY~noble_arm64.deb
@ u26.x86_64 14 postgresql-14-hdr-histogram postgresql-14-hdr-histogram_1.0.0-1PGSTY~resolute_amd64.deb pigsty 1.0.0 75.0KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/h/hdr-histogram/postgresql-14-hdr-histogram_1.0.0-1PGSTY~resolute_amd64.deb
@ u26.aarch64 14 postgresql-14-hdr-histogram postgresql-14-hdr-histogram_1.0.0-1PGSTY~resolute_arm64.deb pigsty 1.0.0 71.6KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/h/hdr-histogram/postgresql-14-hdr-histogram_1.0.0-1PGSTY~resolute_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `hdr_histogram` 扩展的 RPM / DEB 包：

```bash
pig build pkg hdr_histogram         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `hdr_histogram` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](https://pig.pgsty.com/zh) 或者是 `apt/yum/dnf` 安装扩展：

```bash {tab="安装" group="extension-install" value="install"}
pig install hdr_histogram;          # 当前活跃 PG 版本安装
```

```bash {tab="pig" value="pig"}
pig ext install -y hdr_histogram -v 18  # PG 18
pig ext install -y hdr_histogram -v 17  # PG 17
pig ext install -y hdr_histogram -v 16  # PG 16
pig ext install -y hdr_histogram -v 15  # PG 15
pig ext install -y hdr_histogram -v 14  # PG 14
```

```bash {tab="dnf" value="dnf"}
dnf install -y hdr_histogram_18       # PG 18
dnf install -y hdr_histogram_17       # PG 17
dnf install -y hdr_histogram_16       # PG 16
dnf install -y hdr_histogram_15       # PG 15
dnf install -y hdr_histogram_14       # PG 14
```

```bash {tab="apt" value="apt"}
apt install -y postgresql-18-hdr-histogram   # PG 18
apt install -y postgresql-17-hdr-histogram   # PG 17
apt install -y postgresql-16-hdr-histogram   # PG 16
apt install -y postgresql-15-hdr-histogram   # PG 15
apt install -y postgresql-14-hdr-histogram   # PG 14
```


**创建扩展**：

```sql
CREATE EXTENSION hdr_histogram;
```

## 用法

来源：

- [README.md](https://github.com/vovcke/pg_hdr_histogram/blob/87686cfe3a06d48addd052e50f8e41a5bdc4347b/README.md)
- [hdr_histogram--1.0.0.sql](https://github.com/vovcke/pg_hdr_histogram/blob/87686cfe3a06d48addd052e50f8e41a5bdc4347b/hdr_histogram--1.0.0.sql)
- [hdr_histogram.c](https://github.com/vovcke/pg_hdr_histogram/blob/87686cfe3a06d48addd052e50f8e41a5bdc4347b/hdr_histogram.c)
- [META.json](https://github.com/vovcke/pg_hdr_histogram/blob/87686cfe3a06d48addd052e50f8e41a5bdc4347b/META.json)
- [.github/workflows/ci.yml](https://github.com/vovcke/pg_hdr_histogram/blob/87686cfe3a06d48addd052e50f8e41a5bdc4347b/.github/workflows/ci.yml)
- [hdr_histogram.control](https://github.com/vovcke/pg_hdr_histogram/blob/87686cfe3a06d48addd052e50f8e41a5bdc4347b/hdr_histogram.control)
- [官方 1.0.0 发布归档](https://github.com/vovcke/pg_hdr_histogram/releases/download/v1.0.0/hdr_histogram-1.0.0.tar.gz)

`hdr_histogram` 存储压缩 HDR 直方图，以可配置精度计算分位数。`hdr_add` 聚合数值样本，`hdr_merge` 合并已存储的直方图。上游 CI 包含 PostgreSQL 14–18。扩展可信、可迁移，依赖 zlib；拥有数据库 CREATE 权限的角色可以安装。

Pigsty 软件包使用的官方 1.0.0 发布归档安装的 control/SQL 版本为 1.0，而 Git 标签内的 control 文件声明 1.0.0。应检查实际安装的扩展版本，不能直接从软件包版本推断。

### 核心用法

```sql
CREATE EXTENSION hdr_histogram;
SELECT hdr_percentile(hdr_add(1.0), 50);
SET hdr_histogram.merge_mode = 'lossless';
SELECT hdr_percentile(hdr_add(latency::double precision), 99)
FROM (VALUES (100), (200), (300), (500)) AS samples(latency);
CREATE TABLE latency_histograms (recorded_at timestamptz, hist hdr_histogram);
SELECT hdr_percentile(hdr_merge(hist), 99) FROM latency_histograms;
```

### 运行边界

样本会转换为 int64，因此应统一计量单位。默认最大值为 1e9、精度为三位有效数字；hdr_histogram.lowest、hdr_histogram.highest 和 hdr_histogram.sig_figs 控制新直方图参数。非有限值或超出范围的样本会报错。`hdr_percentile` 接受 0 到 100 的分位点；`hdr_min`、`hdr_max`、`hdr_mean`、`hdr_stddev`、`hdr_total_count`、`hdr_sig_figs`、`hdr_lowest` 和 `hdr_highest` 用于检查直方图。默认 merge_mode 为 lossless，不兼容的合并会报错；strict 要求参数相同，left 可能丢弃超出累加器范围的值，union 会扩展范围和精度。首次调用直方图函数会加载库；示例先调用函数，再设置会话 GUC。核心功能无需共享预加载。分位数是误差有界的估计，不是精确的顺序统计量。
