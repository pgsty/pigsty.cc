---
title: "pg_render"
linkTitle: "pg_render"
description: "使用SQL渲染HTML页面"
weight: 4290
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/mkaski/pg_render">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">mkaski/pg_render</div>
    <div class="ext-card__desc">https://github.com/mkaski/pg_render</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/pg_render-0.1.3.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">pg_render-0.1.3.tar.gz</div>
    <div class="ext-card__desc">pg_render-0.1.3.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pg_render`**](/ext/e/pg_render) | `0.1.3` | <a class="ext-badge ext-badge--cate util" href="/ext/cate/util">UTIL</a> | <a class="ext-badge ext-badge--license mit" href="/ext/license#mit">MIT</a> | <a class="ext-badge ext-badge--lang rust" href="/ext/language#rust">Rust</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 4290  | [**`pg_render`**](/ext/e/pg_render) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | - |
{.ext-table}

| **相关扩展** | [`pg_html5_email_address`](/ext/e/pg_html5_email_address) [`pg_readme`](/ext/e/pg_readme) [`gzip`](/ext/e/gzip) [`bzip`](/ext/e/bzip) [`zstd`](/ext/e/zstd) [`http`](/ext/e/http) [`pg_net`](/ext/e/pg_net) [`pg_curl`](/ext/e/pg_curl) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


> manual updated pgrx by Vonng


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#util) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.1.3` | {{< pgvers "18,17,16,15,14" >}} | `pg_render` | - |
| [**RPM**](/ext/rpm#util) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.1.3` | {{< pgvers "18,17,16,15,14" >}} | `pg_render_$v` | - |
| [**DEB**](/ext/deb#util) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.1.3` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-pg-render` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 0.1.3 1 | AVAIL PIGSTY 0.1.3 1 | AVAIL PIGSTY 0.1.3 1 | AVAIL PIGSTY 0.1.3 1 | AVAIL PIGSTY 0.1.3 1 |
| el8.aarch64 | AVAIL PIGSTY 0.1.3 1 | AVAIL PIGSTY 0.1.3 1 | AVAIL PIGSTY 0.1.3 1 | AVAIL PIGSTY 0.1.3 1 | AVAIL PIGSTY 0.1.3 1 |
| el9.x86_64 | AVAIL PIGSTY 0.1.3 1 | AVAIL PIGSTY 0.1.3 1 | AVAIL PIGSTY 0.1.3 1 | AVAIL PIGSTY 0.1.3 1 | AVAIL PIGSTY 0.1.3 1 |
| el9.aarch64 | AVAIL PIGSTY 0.1.3 1 | AVAIL PIGSTY 0.1.3 1 | AVAIL PIGSTY 0.1.3 1 | AVAIL PIGSTY 0.1.3 1 | AVAIL PIGSTY 0.1.3 1 |
| el10.x86_64 | AVAIL PIGSTY 0.1.3 1 | AVAIL PIGSTY 0.1.3 1 | AVAIL PIGSTY 0.1.3 1 | AVAIL PIGSTY 0.1.3 1 | AVAIL PIGSTY 0.1.3 1 |
| el10.aarch64 | AVAIL PIGSTY 0.1.3 1 | AVAIL PIGSTY 0.1.3 1 | AVAIL PIGSTY 0.1.3 1 | AVAIL PIGSTY 0.1.3 1 | AVAIL PIGSTY 0.1.3 1 |
| d12.x86_64 | AVAIL PIGSTY 0.1.3 1 | AVAIL PIGSTY 0.1.3 1 | AVAIL PIGSTY 0.1.3 1 | AVAIL PIGSTY 0.1.3 1 | AVAIL PIGSTY 0.1.3 1 |
| d12.aarch64 | AVAIL PIGSTY 0.1.3 1 | AVAIL PIGSTY 0.1.3 1 | AVAIL PIGSTY 0.1.3 1 | AVAIL PIGSTY 0.1.3 1 | AVAIL PIGSTY 0.1.3 1 |
| d13.x86_64 | AVAIL PIGSTY 0.1.3 1 | AVAIL PIGSTY 0.1.3 1 | AVAIL PIGSTY 0.1.3 1 | AVAIL PIGSTY 0.1.3 1 | AVAIL PIGSTY 0.1.3 1 |
| d13.aarch64 | AVAIL PIGSTY 0.1.3 1 | AVAIL PIGSTY 0.1.3 1 | AVAIL PIGSTY 0.1.3 1 | AVAIL PIGSTY 0.1.3 1 | AVAIL PIGSTY 0.1.3 1 |
| u22.x86_64 | AVAIL PIGSTY 0.1.3 1 | AVAIL PIGSTY 0.1.3 1 | AVAIL PIGSTY 0.1.3 1 | AVAIL PIGSTY 0.1.3 1 | AVAIL PIGSTY 0.1.3 1 |
| u22.aarch64 | AVAIL PIGSTY 0.1.3 1 | AVAIL PIGSTY 0.1.3 1 | AVAIL PIGSTY 0.1.3 1 | AVAIL PIGSTY 0.1.3 1 | AVAIL PIGSTY 0.1.3 1 |
| u24.x86_64 | AVAIL PIGSTY 0.1.3 1 | AVAIL PIGSTY 0.1.3 1 | AVAIL PIGSTY 0.1.3 1 | AVAIL PIGSTY 0.1.3 1 | AVAIL PIGSTY 0.1.3 1 |
| u24.aarch64 | AVAIL PIGSTY 0.1.3 1 | AVAIL PIGSTY 0.1.3 1 | AVAIL PIGSTY 0.1.3 1 | AVAIL PIGSTY 0.1.3 1 | AVAIL PIGSTY 0.1.3 1 |
| u26.x86_64 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| u26.aarch64 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
@ el8.x86_64 18 pg_render_18 pg_render_18-0.1.3-1PIGSTY.el8.x86_64.rpm pigsty 0.1.3 1.1MiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_render_18-0.1.3-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 18 pg_render_18 pg_render_18-0.1.3-1PIGSTY.el8.aarch64.rpm pigsty 0.1.3 906.8KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_render_18-0.1.3-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 18 pg_render_18 pg_render_18-0.1.3-1PIGSTY.el9.x86_64.rpm pigsty 0.1.3 1.1MiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_render_18-0.1.3-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 18 pg_render_18 pg_render_18-0.1.3-1PIGSTY.el9.aarch64.rpm pigsty 0.1.3 970.5KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_render_18-0.1.3-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 18 pg_render_18 pg_render_18-0.1.3-1PIGSTY.el10.x86_64.rpm pigsty 0.1.3 1.1MiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_render_18-0.1.3-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 18 pg_render_18 pg_render_18-0.1.3-1PIGSTY.el10.aarch64.rpm pigsty 0.1.3 988.4KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_render_18-0.1.3-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-pg-render postgresql-18-pg-render_0.1.3-1PIGSTY~bookworm_amd64.deb pigsty 0.1.3 903.5KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-render/postgresql-18-pg-render_0.1.3-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-pg-render postgresql-18-pg-render_0.1.3-1PIGSTY~bookworm_arm64.deb pigsty 0.1.3 709.4KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-render/postgresql-18-pg-render_0.1.3-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-pg-render postgresql-18-pg-render_0.1.3-1PIGSTY~trixie_amd64.deb pigsty 0.1.3 903.6KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-render/postgresql-18-pg-render_0.1.3-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-pg-render postgresql-18-pg-render_0.1.3-1PIGSTY~trixie_arm64.deb pigsty 0.1.3 709.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-render/postgresql-18-pg-render_0.1.3-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-pg-render postgresql-18-pg-render_0.1.3-1PIGSTY~jammy_amd64.deb pigsty 0.1.3 1014.7KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-render/postgresql-18-pg-render_0.1.3-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-pg-render postgresql-18-pg-render_0.1.3-1PIGSTY~jammy_arm64.deb pigsty 0.1.3 847.6KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-render/postgresql-18-pg-render_0.1.3-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-pg-render postgresql-18-pg-render_0.1.3-1PIGSTY~noble_amd64.deb pigsty 0.1.3 1013.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-render/postgresql-18-pg-render_0.1.3-1PIGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-pg-render postgresql-18-pg-render_0.1.3-1PIGSTY~noble_arm64.deb pigsty 0.1.3 841.3KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-render/postgresql-18-pg-render_0.1.3-1PIGSTY~noble_arm64.deb
@ el8.x86_64 17 pg_render_17 pg_render_17-0.1.3-1PIGSTY.el8.x86_64.rpm pigsty 0.1.3 1.1MiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_render_17-0.1.3-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 17 pg_render_17 pg_render_17-0.1.3-1PIGSTY.el8.aarch64.rpm pigsty 0.1.3 907.6KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_render_17-0.1.3-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 17 pg_render_17 pg_render_17-0.1.3-1PIGSTY.el9.x86_64.rpm pigsty 0.1.3 1.1MiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_render_17-0.1.3-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 17 pg_render_17 pg_render_17-0.1.3-1PIGSTY.el9.aarch64.rpm pigsty 0.1.3 975.5KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_render_17-0.1.3-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 17 pg_render_17 pg_render_17-0.1.3-1PIGSTY.el10.x86_64.rpm pigsty 0.1.3 1.1MiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_render_17-0.1.3-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 17 pg_render_17 pg_render_17-0.1.3-1PIGSTY.el10.aarch64.rpm pigsty 0.1.3 988.6KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_render_17-0.1.3-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-pg-render postgresql-17-pg-render_0.1.3-1PIGSTY~bookworm_amd64.deb pigsty 0.1.3 905.2KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-render/postgresql-17-pg-render_0.1.3-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-pg-render postgresql-17-pg-render_0.1.3-1PIGSTY~bookworm_arm64.deb pigsty 0.1.3 709.5KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-render/postgresql-17-pg-render_0.1.3-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-pg-render postgresql-17-pg-render_0.1.3-1PIGSTY~trixie_amd64.deb pigsty 0.1.3 903.5KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-render/postgresql-17-pg-render_0.1.3-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-pg-render postgresql-17-pg-render_0.1.3-1PIGSTY~trixie_arm64.deb pigsty 0.1.3 710.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-render/postgresql-17-pg-render_0.1.3-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-pg-render postgresql-17-pg-render_0.1.3-1PIGSTY~jammy_amd64.deb pigsty 0.1.3 1011.1KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-render/postgresql-17-pg-render_0.1.3-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-pg-render postgresql-17-pg-render_0.1.3-1PIGSTY~jammy_arm64.deb pigsty 0.1.3 847.4KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-render/postgresql-17-pg-render_0.1.3-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-pg-render postgresql-17-pg-render_0.1.3-1PIGSTY~noble_amd64.deb pigsty 0.1.3 1012.6KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-render/postgresql-17-pg-render_0.1.3-1PIGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-pg-render postgresql-17-pg-render_0.1.3-1PIGSTY~noble_arm64.deb pigsty 0.1.3 839.6KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-render/postgresql-17-pg-render_0.1.3-1PIGSTY~noble_arm64.deb
@ el8.x86_64 16 pg_render_16 pg_render_16-0.1.3-1PIGSTY.el8.x86_64.rpm pigsty 0.1.3 1.1MiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_render_16-0.1.3-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 16 pg_render_16 pg_render_16-0.1.3-1PIGSTY.el8.aarch64.rpm pigsty 0.1.3 907.6KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_render_16-0.1.3-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 16 pg_render_16 pg_render_16-0.1.3-1PIGSTY.el9.x86_64.rpm pigsty 0.1.3 1.1MiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_render_16-0.1.3-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 16 pg_render_16 pg_render_16-0.1.3-1PIGSTY.el9.aarch64.rpm pigsty 0.1.3 970.7KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_render_16-0.1.3-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 16 pg_render_16 pg_render_16-0.1.3-1PIGSTY.el10.x86_64.rpm pigsty 0.1.3 1.1MiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_render_16-0.1.3-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 16 pg_render_16 pg_render_16-0.1.3-1PIGSTY.el10.aarch64.rpm pigsty 0.1.3 988.5KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_render_16-0.1.3-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-pg-render postgresql-16-pg-render_0.1.3-1PIGSTY~bookworm_amd64.deb pigsty 0.1.3 902.8KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-render/postgresql-16-pg-render_0.1.3-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-pg-render postgresql-16-pg-render_0.1.3-1PIGSTY~bookworm_arm64.deb pigsty 0.1.3 709.5KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-render/postgresql-16-pg-render_0.1.3-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-pg-render postgresql-16-pg-render_0.1.3-1PIGSTY~trixie_amd64.deb pigsty 0.1.3 904.5KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-render/postgresql-16-pg-render_0.1.3-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-pg-render postgresql-16-pg-render_0.1.3-1PIGSTY~trixie_arm64.deb pigsty 0.1.3 710.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-render/postgresql-16-pg-render_0.1.3-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-pg-render postgresql-16-pg-render_0.1.3-1PIGSTY~jammy_amd64.deb pigsty 0.1.3 1011.2KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-render/postgresql-16-pg-render_0.1.3-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-pg-render postgresql-16-pg-render_0.1.3-1PIGSTY~jammy_arm64.deb pigsty 0.1.3 847.5KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-render/postgresql-16-pg-render_0.1.3-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-pg-render postgresql-16-pg-render_0.1.3-1PIGSTY~noble_amd64.deb pigsty 0.1.3 1012.8KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-render/postgresql-16-pg-render_0.1.3-1PIGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-pg-render postgresql-16-pg-render_0.1.3-1PIGSTY~noble_arm64.deb pigsty 0.1.3 839.5KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-render/postgresql-16-pg-render_0.1.3-1PIGSTY~noble_arm64.deb
@ el8.x86_64 15 pg_render_15 pg_render_15-0.1.3-1PIGSTY.el8.x86_64.rpm pigsty 0.1.3 1.1MiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_render_15-0.1.3-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 15 pg_render_15 pg_render_15-0.1.3-1PIGSTY.el8.aarch64.rpm pigsty 0.1.3 907.9KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_render_15-0.1.3-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 15 pg_render_15 pg_render_15-0.1.3-1PIGSTY.el9.x86_64.rpm pigsty 0.1.3 1.1MiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_render_15-0.1.3-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 15 pg_render_15 pg_render_15-0.1.3-1PIGSTY.el9.aarch64.rpm pigsty 0.1.3 971.1KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_render_15-0.1.3-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 15 pg_render_15 pg_render_15-0.1.3-1PIGSTY.el10.x86_64.rpm pigsty 0.1.3 1.1MiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_render_15-0.1.3-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 15 pg_render_15 pg_render_15-0.1.3-1PIGSTY.el10.aarch64.rpm pigsty 0.1.3 988.7KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_render_15-0.1.3-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-pg-render postgresql-15-pg-render_0.1.3-1PIGSTY~bookworm_amd64.deb pigsty 0.1.3 904.6KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-render/postgresql-15-pg-render_0.1.3-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-pg-render postgresql-15-pg-render_0.1.3-1PIGSTY~bookworm_arm64.deb pigsty 0.1.3 709.8KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-render/postgresql-15-pg-render_0.1.3-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-pg-render postgresql-15-pg-render_0.1.3-1PIGSTY~trixie_amd64.deb pigsty 0.1.3 903.8KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-render/postgresql-15-pg-render_0.1.3-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-pg-render postgresql-15-pg-render_0.1.3-1PIGSTY~trixie_arm64.deb pigsty 0.1.3 709.7KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-render/postgresql-15-pg-render_0.1.3-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-pg-render postgresql-15-pg-render_0.1.3-1PIGSTY~jammy_amd64.deb pigsty 0.1.3 1015.3KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-render/postgresql-15-pg-render_0.1.3-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-pg-render postgresql-15-pg-render_0.1.3-1PIGSTY~jammy_arm64.deb pigsty 0.1.3 847.7KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-render/postgresql-15-pg-render_0.1.3-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-pg-render postgresql-15-pg-render_0.1.3-1PIGSTY~noble_amd64.deb pigsty 0.1.3 1012.3KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-render/postgresql-15-pg-render_0.1.3-1PIGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-pg-render postgresql-15-pg-render_0.1.3-1PIGSTY~noble_arm64.deb pigsty 0.1.3 841.4KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-render/postgresql-15-pg-render_0.1.3-1PIGSTY~noble_arm64.deb
@ el8.x86_64 14 pg_render_14 pg_render_14-0.1.3-1PIGSTY.el8.x86_64.rpm pigsty 0.1.3 1.1MiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_render_14-0.1.3-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 14 pg_render_14 pg_render_14-0.1.3-1PIGSTY.el8.aarch64.rpm pigsty 0.1.3 907.0KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_render_14-0.1.3-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 14 pg_render_14 pg_render_14-0.1.3-1PIGSTY.el9.x86_64.rpm pigsty 0.1.3 1.1MiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_render_14-0.1.3-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 14 pg_render_14 pg_render_14-0.1.3-1PIGSTY.el9.aarch64.rpm pigsty 0.1.3 970.9KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_render_14-0.1.3-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 14 pg_render_14 pg_render_14-0.1.3-1PIGSTY.el10.x86_64.rpm pigsty 0.1.3 1.1MiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_render_14-0.1.3-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 14 pg_render_14 pg_render_14-0.1.3-1PIGSTY.el10.aarch64.rpm pigsty 0.1.3 988.7KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_render_14-0.1.3-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-pg-render postgresql-14-pg-render_0.1.3-1PIGSTY~bookworm_amd64.deb pigsty 0.1.3 903.8KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-render/postgresql-14-pg-render_0.1.3-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 14 postgresql-14-pg-render postgresql-14-pg-render_0.1.3-1PIGSTY~bookworm_arm64.deb pigsty 0.1.3 709.9KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-render/postgresql-14-pg-render_0.1.3-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 14 postgresql-14-pg-render postgresql-14-pg-render_0.1.3-1PIGSTY~trixie_amd64.deb pigsty 0.1.3 903.8KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-render/postgresql-14-pg-render_0.1.3-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 14 postgresql-14-pg-render postgresql-14-pg-render_0.1.3-1PIGSTY~trixie_arm64.deb pigsty 0.1.3 709.5KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-render/postgresql-14-pg-render_0.1.3-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 14 postgresql-14-pg-render postgresql-14-pg-render_0.1.3-1PIGSTY~jammy_amd64.deb pigsty 0.1.3 1014.3KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-render/postgresql-14-pg-render_0.1.3-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 14 postgresql-14-pg-render postgresql-14-pg-render_0.1.3-1PIGSTY~jammy_arm64.deb pigsty 0.1.3 847.6KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-render/postgresql-14-pg-render_0.1.3-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 14 postgresql-14-pg-render postgresql-14-pg-render_0.1.3-1PIGSTY~noble_amd64.deb pigsty 0.1.3 1009.6KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-render/postgresql-14-pg-render_0.1.3-1PIGSTY~noble_amd64.deb
@ u24.aarch64 14 postgresql-14-pg-render postgresql-14-pg-render_0.1.3-1PIGSTY~noble_arm64.deb pigsty 0.1.3 841.6KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-render/postgresql-14-pg-render_0.1.3-1PIGSTY~noble_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `pg_render` 扩展的 RPM / DEB 包：

```bash
pig build pkg pg_render         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `pg_render` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install pg_render;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y pg_render -v 18  # PG 18
pig ext install -y pg_render -v 17  # PG 17
pig ext install -y pg_render -v 16  # PG 16
pig ext install -y pg_render -v 15  # PG 15
pig ext install -y pg_render -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y pg_render_18       # PG 18
dnf install -y pg_render_17       # PG 17
dnf install -y pg_render_16       # PG 16
dnf install -y pg_render_15       # PG 15
dnf install -y pg_render_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-pg-render   # PG 18
apt install -y postgresql-17-pg-render   # PG 17
apt install -y postgresql-16-pg-render   # PG 16
apt install -y postgresql-15-pg-render   # PG 15
apt install -y postgresql-14-pg-render   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**创建扩展**：

```sql
CREATE EXTENSION pg_render;
```



## 用法

> [pg_render: PostgreSQL 的 Liquid 模板渲染](https://github.com/mkaski/pg_render)

### `render(template text, input json|array|value)`

使用 [Liquid](https://shopify.github.io/liquid/) 语法，用查询结果渲染模板：

```sql
-- 单个值
SELECT render('Total: {{ value }}', (SELECT count(*) FROM posts));

-- 单行多列
SELECT render(
    '<h1>{{ title }}</h1><p>{{ text }}</p>',
    (SELECT to_json(r) FROM (SELECT title, text FROM posts WHERE id = 1) r)
);

-- 遍历数组
SELECT render(
    '{% for v in values %} {{ v }} {% endfor %}',
    (SELECT array(SELECT title FROM posts))
);

-- 遍历多行多列
SELECT render(
    '{% for row in rows %} {{ row.title }} - {{ row.author }} {% endfor %}',
    json_agg(to_json(posts.*))
) FROM posts;
```

### `render_agg(template text, input record|json|value)`

聚合渲染函数 -- 为每一行渲染模板：

```sql
-- 从派生表逐行渲染
SELECT render_agg('{{ title }} {{ text }}', props)
FROM (SELECT title, text FROM posts) AS props;

-- 使用 json_build_object 渲染
SELECT render_agg(
    '<article><h1>{{ title }}</h1></article>',
    json_build_object('title', title)
) FROM posts;
```

### 使用存储的模板

```sql
SELECT render(
    (SELECT template FROM templates WHERE id = 'my_tpl'),
    (SELECT to_json(r) FROM (SELECT title, text FROM posts WHERE id = 1) r)
);
```

### PostgREST 集成

```sql
CREATE FUNCTION api.index() RETURNS "text/html" AS $$
SELECT render(
    '<html><body><h1>{{ title }}</h1></body></html>',
    (SELECT to_json(r) FROM (SELECT title FROM posts WHERE id = 1) r)
) $$;
```
