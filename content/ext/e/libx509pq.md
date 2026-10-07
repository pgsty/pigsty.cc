---
title: "libx509pq"
linkTitle: "libx509pq"
description: "通过 OpenSSL 解析与检查 X.509 证书"
weight: 7420
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/crtsh/libx509pq">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">crtsh/libx509pq</div>
    <div class="ext-card__desc">https://github.com/crtsh/libx509pq</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/libx509pq-1.3-bed05c6e87d7.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">libx509pq-1.3-bed05c6e87d7.tar.gz</div>
    <div class="ext-card__desc">libx509pq-1.3-bed05c6e87d7.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`libx509pq`**](/ext/e/libx509pq) | `1.3` | <a class="ext-badge ext-badge--cate sec" href="/ext/cate/sec">SEC</a> | <a class="ext-badge ext-badge--license gpl30orlater" href="/ext/license#gpl30orlater">GPL-3.0-or-later</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 7420  | [**`libx509pq`**](/ext/e/libx509pq) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | - |
{.ext-table}

| **相关扩展** | [`sslinfo`](/ext/e/sslinfo) [`sslutils`](/ext/e/sslutils) [`pg_snakeoil`](/ext/e/pg_snakeoil) [`pgcrypto`](/ext/e/pgcrypto) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


> Requires OpenSSL 1.1.1+; GPL-3.0-or-later is explicit in source headers. EL9 default crypto policy rejects a legacy SHA-1 test fixture; SHA-256 verification passed without changing policy.


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#sec) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.3` | {{< pgvers "18,17,16,15,14" >}} | `libx509pq` | - |
| [**RPM**](/ext/rpm#sec) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.3` | {{< pgvers "18,17,16,15,14" >}} | `libx509pq_$v` | `openssl-libs` |
| [**DEB**](/ext/deb#sec) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.3` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-libx509pq` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 1.3 1 | AVAIL PIGSTY 1.3 1 | AVAIL PIGSTY 1.3 1 | AVAIL PIGSTY 1.3 1 | AVAIL PIGSTY 1.3 1 |
| el8.aarch64 | AVAIL PIGSTY 1.3 1 | AVAIL PIGSTY 1.3 1 | AVAIL PIGSTY 1.3 1 | AVAIL PIGSTY 1.3 1 | AVAIL PIGSTY 1.3 1 |
| el9.x86_64 | AVAIL PIGSTY 1.3 1 | AVAIL PIGSTY 1.3 1 | AVAIL PIGSTY 1.3 1 | AVAIL PIGSTY 1.3 1 | AVAIL PIGSTY 1.3 1 |
| el9.aarch64 | AVAIL PIGSTY 1.3 1 | AVAIL PIGSTY 1.3 1 | AVAIL PIGSTY 1.3 1 | AVAIL PIGSTY 1.3 1 | AVAIL PIGSTY 1.3 1 |
| el10.x86_64 | AVAIL PIGSTY 1.3 1 | AVAIL PIGSTY 1.3 1 | AVAIL PIGSTY 1.3 1 | AVAIL PIGSTY 1.3 1 | AVAIL PIGSTY 1.3 1 |
| el10.aarch64 | AVAIL PIGSTY 1.3 1 | AVAIL PIGSTY 1.3 1 | AVAIL PIGSTY 1.3 1 | AVAIL PIGSTY 1.3 1 | AVAIL PIGSTY 1.3 1 |
| d12.x86_64 | AVAIL PIGSTY 1.3 1 | AVAIL PIGSTY 1.3 1 | AVAIL PIGSTY 1.3 1 | AVAIL PIGSTY 1.3 1 | AVAIL PIGSTY 1.3 1 |
| d12.aarch64 | AVAIL PIGSTY 1.3 1 | AVAIL PIGSTY 1.3 1 | AVAIL PIGSTY 1.3 1 | AVAIL PIGSTY 1.3 1 | AVAIL PIGSTY 1.3 1 |
| d13.x86_64 | AVAIL PIGSTY 1.3 1 | AVAIL PIGSTY 1.3 1 | AVAIL PIGSTY 1.3 1 | AVAIL PIGSTY 1.3 1 | AVAIL PIGSTY 1.3 1 |
| d13.aarch64 | AVAIL PIGSTY 1.3 1 | AVAIL PIGSTY 1.3 1 | AVAIL PIGSTY 1.3 1 | AVAIL PIGSTY 1.3 1 | AVAIL PIGSTY 1.3 1 |
| u22.x86_64 | AVAIL PIGSTY 1.3 1 | AVAIL PIGSTY 1.3 1 | AVAIL PIGSTY 1.3 1 | AVAIL PIGSTY 1.3 1 | AVAIL PIGSTY 1.3 1 |
| u22.aarch64 | AVAIL PIGSTY 1.3 1 | AVAIL PIGSTY 1.3 1 | AVAIL PIGSTY 1.3 1 | AVAIL PIGSTY 1.3 1 | AVAIL PIGSTY 1.3 1 |
| u24.x86_64 | AVAIL PIGSTY 1.3 1 | AVAIL PIGSTY 1.3 1 | AVAIL PIGSTY 1.3 1 | AVAIL PIGSTY 1.3 1 | AVAIL PIGSTY 1.3 1 |
| u24.aarch64 | AVAIL PIGSTY 1.3 1 | AVAIL PIGSTY 1.3 1 | AVAIL PIGSTY 1.3 1 | AVAIL PIGSTY 1.3 1 | AVAIL PIGSTY 1.3 1 |
| u26.x86_64 | AVAIL PIGSTY 1.3 1 | AVAIL PIGSTY 1.3 1 | AVAIL PIGSTY 1.3 1 | AVAIL PIGSTY 1.3 1 | AVAIL PIGSTY 1.3 1 |
| u26.aarch64 | AVAIL PIGSTY 1.3 1 | AVAIL PIGSTY 1.3 1 | AVAIL PIGSTY 1.3 1 | AVAIL PIGSTY 1.3 1 | AVAIL PIGSTY 1.3 1 |
@ el8.x86_64 18 libx509pq_18 libx509pq_18-1.3-1PGSTY.el8.x86_64.rpm pigsty 1.3 92.2KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/libx509pq_18-1.3-1PGSTY.el8.x86_64.rpm
@ el8.aarch64 18 libx509pq_18 libx509pq_18-1.3-1PGSTY.el8.aarch64.rpm pigsty 1.3 91.2KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/libx509pq_18-1.3-1PGSTY.el8.aarch64.rpm
@ el9.x86_64 18 libx509pq_18 libx509pq_18-1.3-1PGSTY.el9.x86_64.rpm pigsty 1.3 92.8KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/libx509pq_18-1.3-1PGSTY.el9.x86_64.rpm
@ el9.aarch64 18 libx509pq_18 libx509pq_18-1.3-1PGSTY.el9.aarch64.rpm pigsty 1.3 92.4KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/libx509pq_18-1.3-1PGSTY.el9.aarch64.rpm
@ el10.x86_64 18 libx509pq_18 libx509pq_18-1.3-1PGSTY.el10.x86_64.rpm pigsty 1.3 93.1KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/libx509pq_18-1.3-1PGSTY.el10.x86_64.rpm
@ el10.aarch64 18 libx509pq_18 libx509pq_18-1.3-1PGSTY.el10.aarch64.rpm pigsty 1.3 92.4KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/libx509pq_18-1.3-1PGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-libx509pq postgresql-18-libx509pq_1.3-1PGSTY~bookworm_amd64.deb pigsty 1.3 76.6KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/libx/libx509pq/postgresql-18-libx509pq_1.3-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-libx509pq postgresql-18-libx509pq_1.3-1PGSTY~bookworm_arm64.deb pigsty 1.3 75.9KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/libx/libx509pq/postgresql-18-libx509pq_1.3-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-libx509pq postgresql-18-libx509pq_1.3-1PGSTY~trixie_amd64.deb pigsty 1.3 76.5KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/libx/libx509pq/postgresql-18-libx509pq_1.3-1PGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-libx509pq postgresql-18-libx509pq_1.3-1PGSTY~trixie_arm64.deb pigsty 1.3 75.7KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/libx/libx509pq/postgresql-18-libx509pq_1.3-1PGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-libx509pq postgresql-18-libx509pq_1.3-1PGSTY~jammy_amd64.deb pigsty 1.3 83.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/libx/libx509pq/postgresql-18-libx509pq_1.3-1PGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-libx509pq postgresql-18-libx509pq_1.3-1PGSTY~jammy_arm64.deb pigsty 1.3 82.5KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/libx/libx509pq/postgresql-18-libx509pq_1.3-1PGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-libx509pq postgresql-18-libx509pq_1.3-1PGSTY~noble_amd64.deb pigsty 1.3 80.5KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/libx/libx509pq/postgresql-18-libx509pq_1.3-1PGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-libx509pq postgresql-18-libx509pq_1.3-1PGSTY~noble_arm64.deb pigsty 1.3 80.5KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/libx/libx509pq/postgresql-18-libx509pq_1.3-1PGSTY~noble_arm64.deb
@ u26.x86_64 18 postgresql-18-libx509pq postgresql-18-libx509pq_1.3-1PGSTY~resolute_amd64.deb pigsty 1.3 80.2KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/libx/libx509pq/postgresql-18-libx509pq_1.3-1PGSTY~resolute_amd64.deb
@ u26.aarch64 18 postgresql-18-libx509pq postgresql-18-libx509pq_1.3-1PGSTY~resolute_arm64.deb pigsty 1.3 79.6KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/libx/libx509pq/postgresql-18-libx509pq_1.3-1PGSTY~resolute_arm64.deb
@ el8.x86_64 17 libx509pq_17 libx509pq_17-1.3-1PGSTY.el8.x86_64.rpm pigsty 1.3 92.2KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/libx509pq_17-1.3-1PGSTY.el8.x86_64.rpm
@ el8.aarch64 17 libx509pq_17 libx509pq_17-1.3-1PGSTY.el8.aarch64.rpm pigsty 1.3 91.2KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/libx509pq_17-1.3-1PGSTY.el8.aarch64.rpm
@ el9.x86_64 17 libx509pq_17 libx509pq_17-1.3-1PGSTY.el9.x86_64.rpm pigsty 1.3 93.0KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/libx509pq_17-1.3-1PGSTY.el9.x86_64.rpm
@ el9.aarch64 17 libx509pq_17 libx509pq_17-1.3-1PGSTY.el9.aarch64.rpm pigsty 1.3 92.5KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/libx509pq_17-1.3-1PGSTY.el9.aarch64.rpm
@ el10.x86_64 17 libx509pq_17 libx509pq_17-1.3-1PGSTY.el10.x86_64.rpm pigsty 1.3 93.2KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/libx509pq_17-1.3-1PGSTY.el10.x86_64.rpm
@ el10.aarch64 17 libx509pq_17 libx509pq_17-1.3-1PGSTY.el10.aarch64.rpm pigsty 1.3 92.6KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/libx509pq_17-1.3-1PGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-libx509pq postgresql-17-libx509pq_1.3-1PGSTY~bookworm_amd64.deb pigsty 1.3 76.6KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/libx/libx509pq/postgresql-17-libx509pq_1.3-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-libx509pq postgresql-17-libx509pq_1.3-1PGSTY~bookworm_arm64.deb pigsty 1.3 75.9KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/libx/libx509pq/postgresql-17-libx509pq_1.3-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-libx509pq postgresql-17-libx509pq_1.3-1PGSTY~trixie_amd64.deb pigsty 1.3 76.5KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/libx/libx509pq/postgresql-17-libx509pq_1.3-1PGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-libx509pq postgresql-17-libx509pq_1.3-1PGSTY~trixie_arm64.deb pigsty 1.3 75.7KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/libx/libx509pq/postgresql-17-libx509pq_1.3-1PGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-libx509pq postgresql-17-libx509pq_1.3-1PGSTY~jammy_amd64.deb pigsty 1.3 97.2KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/libx/libx509pq/postgresql-17-libx509pq_1.3-1PGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-libx509pq postgresql-17-libx509pq_1.3-1PGSTY~jammy_arm64.deb pigsty 1.3 96.6KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/libx/libx509pq/postgresql-17-libx509pq_1.3-1PGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-libx509pq postgresql-17-libx509pq_1.3-1PGSTY~noble_amd64.deb pigsty 1.3 80.6KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/libx/libx509pq/postgresql-17-libx509pq_1.3-1PGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-libx509pq postgresql-17-libx509pq_1.3-1PGSTY~noble_arm64.deb pigsty 1.3 80.6KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/libx/libx509pq/postgresql-17-libx509pq_1.3-1PGSTY~noble_arm64.deb
@ u26.x86_64 17 postgresql-17-libx509pq postgresql-17-libx509pq_1.3-1PGSTY~resolute_amd64.deb pigsty 1.3 80.2KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/libx/libx509pq/postgresql-17-libx509pq_1.3-1PGSTY~resolute_amd64.deb
@ u26.aarch64 17 postgresql-17-libx509pq postgresql-17-libx509pq_1.3-1PGSTY~resolute_arm64.deb pigsty 1.3 79.7KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/libx/libx509pq/postgresql-17-libx509pq_1.3-1PGSTY~resolute_arm64.deb
@ el8.x86_64 16 libx509pq_16 libx509pq_16-1.3-1PGSTY.el8.x86_64.rpm pigsty 1.3 92.2KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/libx509pq_16-1.3-1PGSTY.el8.x86_64.rpm
@ el8.aarch64 16 libx509pq_16 libx509pq_16-1.3-1PGSTY.el8.aarch64.rpm pigsty 1.3 91.2KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/libx509pq_16-1.3-1PGSTY.el8.aarch64.rpm
@ el9.x86_64 16 libx509pq_16 libx509pq_16-1.3-1PGSTY.el9.x86_64.rpm pigsty 1.3 93.0KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/libx509pq_16-1.3-1PGSTY.el9.x86_64.rpm
@ el9.aarch64 16 libx509pq_16 libx509pq_16-1.3-1PGSTY.el9.aarch64.rpm pigsty 1.3 92.5KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/libx509pq_16-1.3-1PGSTY.el9.aarch64.rpm
@ el10.x86_64 16 libx509pq_16 libx509pq_16-1.3-1PGSTY.el10.x86_64.rpm pigsty 1.3 93.2KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/libx509pq_16-1.3-1PGSTY.el10.x86_64.rpm
@ el10.aarch64 16 libx509pq_16 libx509pq_16-1.3-1PGSTY.el10.aarch64.rpm pigsty 1.3 92.6KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/libx509pq_16-1.3-1PGSTY.el10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-libx509pq postgresql-16-libx509pq_1.3-1PGSTY~bookworm_amd64.deb pigsty 1.3 76.6KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/libx/libx509pq/postgresql-16-libx509pq_1.3-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-libx509pq postgresql-16-libx509pq_1.3-1PGSTY~bookworm_arm64.deb pigsty 1.3 75.9KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/libx/libx509pq/postgresql-16-libx509pq_1.3-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-libx509pq postgresql-16-libx509pq_1.3-1PGSTY~trixie_amd64.deb pigsty 1.3 76.5KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/libx/libx509pq/postgresql-16-libx509pq_1.3-1PGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-libx509pq postgresql-16-libx509pq_1.3-1PGSTY~trixie_arm64.deb pigsty 1.3 75.7KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/libx/libx509pq/postgresql-16-libx509pq_1.3-1PGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-libx509pq postgresql-16-libx509pq_1.3-1PGSTY~jammy_amd64.deb pigsty 1.3 96.4KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/libx/libx509pq/postgresql-16-libx509pq_1.3-1PGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-libx509pq postgresql-16-libx509pq_1.3-1PGSTY~jammy_arm64.deb pigsty 1.3 95.8KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/libx/libx509pq/postgresql-16-libx509pq_1.3-1PGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-libx509pq postgresql-16-libx509pq_1.3-1PGSTY~noble_amd64.deb pigsty 1.3 80.6KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/libx/libx509pq/postgresql-16-libx509pq_1.3-1PGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-libx509pq postgresql-16-libx509pq_1.3-1PGSTY~noble_arm64.deb pigsty 1.3 80.6KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/libx/libx509pq/postgresql-16-libx509pq_1.3-1PGSTY~noble_arm64.deb
@ u26.x86_64 16 postgresql-16-libx509pq postgresql-16-libx509pq_1.3-1PGSTY~resolute_amd64.deb pigsty 1.3 80.3KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/libx/libx509pq/postgresql-16-libx509pq_1.3-1PGSTY~resolute_amd64.deb
@ u26.aarch64 16 postgresql-16-libx509pq postgresql-16-libx509pq_1.3-1PGSTY~resolute_arm64.deb pigsty 1.3 79.6KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/libx/libx509pq/postgresql-16-libx509pq_1.3-1PGSTY~resolute_arm64.deb
@ el8.x86_64 15 libx509pq_15 libx509pq_15-1.3-1PGSTY.el8.x86_64.rpm pigsty 1.3 92.4KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/libx509pq_15-1.3-1PGSTY.el8.x86_64.rpm
@ el8.aarch64 15 libx509pq_15 libx509pq_15-1.3-1PGSTY.el8.aarch64.rpm pigsty 1.3 91.3KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/libx509pq_15-1.3-1PGSTY.el8.aarch64.rpm
@ el9.x86_64 15 libx509pq_15 libx509pq_15-1.3-1PGSTY.el9.x86_64.rpm pigsty 1.3 93.6KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/libx509pq_15-1.3-1PGSTY.el9.x86_64.rpm
@ el9.aarch64 15 libx509pq_15 libx509pq_15-1.3-1PGSTY.el9.aarch64.rpm pigsty 1.3 92.9KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/libx509pq_15-1.3-1PGSTY.el9.aarch64.rpm
@ el10.x86_64 15 libx509pq_15 libx509pq_15-1.3-1PGSTY.el10.x86_64.rpm pigsty 1.3 93.7KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/libx509pq_15-1.3-1PGSTY.el10.x86_64.rpm
@ el10.aarch64 15 libx509pq_15 libx509pq_15-1.3-1PGSTY.el10.aarch64.rpm pigsty 1.3 93.0KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/libx509pq_15-1.3-1PGSTY.el10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-libx509pq postgresql-15-libx509pq_1.3-1PGSTY~bookworm_amd64.deb pigsty 1.3 77.0KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/libx/libx509pq/postgresql-15-libx509pq_1.3-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-libx509pq postgresql-15-libx509pq_1.3-1PGSTY~bookworm_arm64.deb pigsty 1.3 76.2KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/libx/libx509pq/postgresql-15-libx509pq_1.3-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-libx509pq postgresql-15-libx509pq_1.3-1PGSTY~trixie_amd64.deb pigsty 1.3 76.9KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/libx/libx509pq/postgresql-15-libx509pq_1.3-1PGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-libx509pq postgresql-15-libx509pq_1.3-1PGSTY~trixie_arm64.deb pigsty 1.3 75.9KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/libx/libx509pq/postgresql-15-libx509pq_1.3-1PGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-libx509pq postgresql-15-libx509pq_1.3-1PGSTY~jammy_amd64.deb pigsty 1.3 96.9KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/libx/libx509pq/postgresql-15-libx509pq_1.3-1PGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-libx509pq postgresql-15-libx509pq_1.3-1PGSTY~jammy_arm64.deb pigsty 1.3 96.3KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/libx/libx509pq/postgresql-15-libx509pq_1.3-1PGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-libx509pq postgresql-15-libx509pq_1.3-1PGSTY~noble_amd64.deb pigsty 1.3 81.1KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/libx/libx509pq/postgresql-15-libx509pq_1.3-1PGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-libx509pq postgresql-15-libx509pq_1.3-1PGSTY~noble_arm64.deb pigsty 1.3 81.1KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/libx/libx509pq/postgresql-15-libx509pq_1.3-1PGSTY~noble_arm64.deb
@ u26.x86_64 15 postgresql-15-libx509pq postgresql-15-libx509pq_1.3-1PGSTY~resolute_amd64.deb pigsty 1.3 80.7KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/libx/libx509pq/postgresql-15-libx509pq_1.3-1PGSTY~resolute_amd64.deb
@ u26.aarch64 15 postgresql-15-libx509pq postgresql-15-libx509pq_1.3-1PGSTY~resolute_arm64.deb pigsty 1.3 80.1KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/libx/libx509pq/postgresql-15-libx509pq_1.3-1PGSTY~resolute_arm64.deb
@ el8.x86_64 14 libx509pq_14 libx509pq_14-1.3-1PGSTY.el8.x86_64.rpm pigsty 1.3 92.2KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/libx509pq_14-1.3-1PGSTY.el8.x86_64.rpm
@ el8.aarch64 14 libx509pq_14 libx509pq_14-1.3-1PGSTY.el8.aarch64.rpm pigsty 1.3 91.2KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/libx509pq_14-1.3-1PGSTY.el8.aarch64.rpm
@ el9.x86_64 14 libx509pq_14 libx509pq_14-1.3-1PGSTY.el9.x86_64.rpm pigsty 1.3 93.5KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/libx509pq_14-1.3-1PGSTY.el9.x86_64.rpm
@ el9.aarch64 14 libx509pq_14 libx509pq_14-1.3-1PGSTY.el9.aarch64.rpm pigsty 1.3 92.8KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/libx509pq_14-1.3-1PGSTY.el9.aarch64.rpm
@ el10.x86_64 14 libx509pq_14 libx509pq_14-1.3-1PGSTY.el10.x86_64.rpm pigsty 1.3 93.6KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/libx509pq_14-1.3-1PGSTY.el10.x86_64.rpm
@ el10.aarch64 14 libx509pq_14 libx509pq_14-1.3-1PGSTY.el10.aarch64.rpm pigsty 1.3 92.9KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/libx509pq_14-1.3-1PGSTY.el10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-libx509pq postgresql-14-libx509pq_1.3-1PGSTY~bookworm_amd64.deb pigsty 1.3 81.9KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/libx/libx509pq/postgresql-14-libx509pq_1.3-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 14 postgresql-14-libx509pq postgresql-14-libx509pq_1.3-1PGSTY~bookworm_arm64.deb pigsty 1.3 81.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/libx/libx509pq/postgresql-14-libx509pq_1.3-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 14 postgresql-14-libx509pq postgresql-14-libx509pq_1.3-1PGSTY~trixie_amd64.deb pigsty 1.3 81.8KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/libx/libx509pq/postgresql-14-libx509pq_1.3-1PGSTY~trixie_amd64.deb
@ d13.aarch64 14 postgresql-14-libx509pq postgresql-14-libx509pq_1.3-1PGSTY~trixie_arm64.deb pigsty 1.3 80.8KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/libx/libx509pq/postgresql-14-libx509pq_1.3-1PGSTY~trixie_arm64.deb
@ u22.x86_64 14 postgresql-14-libx509pq postgresql-14-libx509pq_1.3-1PGSTY~jammy_amd64.deb pigsty 1.3 99.4KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/libx/libx509pq/postgresql-14-libx509pq_1.3-1PGSTY~jammy_amd64.deb
@ u22.aarch64 14 postgresql-14-libx509pq postgresql-14-libx509pq_1.3-1PGSTY~jammy_arm64.deb pigsty 1.3 98.9KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/libx/libx509pq/postgresql-14-libx509pq_1.3-1PGSTY~jammy_arm64.deb
@ u24.x86_64 14 postgresql-14-libx509pq postgresql-14-libx509pq_1.3-1PGSTY~noble_amd64.deb pigsty 1.3 85.8KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/libx/libx509pq/postgresql-14-libx509pq_1.3-1PGSTY~noble_amd64.deb
@ u24.aarch64 14 postgresql-14-libx509pq postgresql-14-libx509pq_1.3-1PGSTY~noble_arm64.deb pigsty 1.3 86.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/libx/libx509pq/postgresql-14-libx509pq_1.3-1PGSTY~noble_arm64.deb
@ u26.x86_64 14 postgresql-14-libx509pq postgresql-14-libx509pq_1.3-1PGSTY~resolute_amd64.deb pigsty 1.3 85.5KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/libx/libx509pq/postgresql-14-libx509pq_1.3-1PGSTY~resolute_amd64.deb
@ u26.aarch64 14 postgresql-14-libx509pq postgresql-14-libx509pq_1.3-1PGSTY~resolute_arm64.deb pigsty 1.3 85.0KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/libx/libx509pq/postgresql-14-libx509pq_1.3-1PGSTY~resolute_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `libx509pq` 扩展的 RPM / DEB 包：

```bash
pig build pkg libx509pq         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `libx509pq` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](https://pig.pgsty.com/zh) 或者是 `apt/yum/dnf` 安装扩展：

```bash {tab="安装" group="extension-install" value="install"}
pig install libx509pq;          # 当前活跃 PG 版本安装
```

```bash {tab="pig" value="pig"}
pig ext install -y libx509pq -v 18  # PG 18
pig ext install -y libx509pq -v 17  # PG 17
pig ext install -y libx509pq -v 16  # PG 16
pig ext install -y libx509pq -v 15  # PG 15
pig ext install -y libx509pq -v 14  # PG 14
```

```bash {tab="dnf" value="dnf"}
dnf install -y libx509pq_18       # PG 18
dnf install -y libx509pq_17       # PG 17
dnf install -y libx509pq_16       # PG 16
dnf install -y libx509pq_15       # PG 15
dnf install -y libx509pq_14       # PG 14
```

```bash {tab="apt" value="apt"}
apt install -y postgresql-18-libx509pq   # PG 18
apt install -y postgresql-17-libx509pq   # PG 17
apt install -y postgresql-16-libx509pq   # PG 16
apt install -y postgresql-15-libx509pq   # PG 15
apt install -y postgresql-14-libx509pq   # PG 14
```


**创建扩展**：

```sql
CREATE EXTENSION libx509pq;
```

## 用法

来源：

- [已复核 commit 的上游 README](https://github.com/crtsh/libx509pq/blob/bed05c6e87d79a98d79e42a1fac16386eead0c13/README.md)
- [1.3 版本 SQL 对象](https://github.com/crtsh/libx509pq/blob/bed05c6e87d79a98d79e42a1fac16386eead0c13/libx509pq--1.3.sql)
- [基于 OpenSSL 的实现](https://github.com/crtsh/libx509pq/blob/bed05c6e87d79a98d79e42a1fac16386eead0c13/libx509pq.c)

`libx509pq` 向 SQL 暴露 OpenSSL X.509 证书解析。它接收 DER `bytea` 证书，并提取主题、签发者、有效期、序列号、密钥与签名信息、扩展、备用名称、指纹等字段。

```sql
CREATE EXTENSION libx509pq;
SELECT x509_commonName(der),
       x509_issuerName(der),
       x509_notBefore(der),
       x509_notAfter(der),
       x509_keyAlgorithm(der),
       x509_keySize(der)
FROM certificate_store;
```

提取多个基础字段时，`x509_basic_info(der)` 可避免重复解析同一证书。其他 API 可枚举扩展与名称、提取公钥、识别部分弱密钥模式，并用指定密钥验证单个证书签名。

解析或签名验证并不等于完整 PKIX 路径验证：它本身不能建立信任、主机名有效性、吊销状态、策略或当前可接受性。畸形 DER 会进入原生 OpenSSL 代码，应限制输入大小，用不可信语料做模糊和回归测试，并及时修补 PostgreSQL 与 OpenSSL。构建和运行时应固定 OpenSSL ABI，审计错误哨兵与空值语义，限制高开销函数，并基准批量解析。
