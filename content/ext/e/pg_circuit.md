---
title: "pg_circuit"
linkTitle: "pg_circuit"
description: "针对危险 SQL 语句提供运行时观察、告警和拦截"
weight: 5815
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/PG-Circuit/pg-circuit">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">PG-Circuit/pg-circuit</div>
    <div class="ext-card__desc">https://github.com/PG-Circuit/pg-circuit</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/pg_circuit-0.1.0.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">pg_circuit-0.1.0.tar.gz</div>
    <div class="ext-card__desc">pg_circuit-0.1.0.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pg_circuit`**](/ext/e/pg_circuit) | `0.1.0` | <a class="ext-badge ext-badge--cate admin" href="/ext/cate/admin">ADMIN</a> | <a class="ext-badge ext-badge--license apache20" href="/ext/license#apache20">Apache-2.0</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 5815  | [**`pg_circuit`**](/ext/e/pg_circuit) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | - |
{.ext-table}


> Requires shared_preload_libraries and restart; Community runtime pressure is informational.


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#admin) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.1.0` | {{< pgvers "18,17,16" >}} | `pg_circuit` | - |
| [**RPM**](/ext/rpm#admin) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.1.0` | {{< pgvers "18,17,16" >}} | `pg_circuit_$v` | - |
| [**DEB**](/ext/deb#admin) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.1.0` | {{< pgvers "18,17,16" >}} | `postgresql-$v-pg-circuit` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| el8.aarch64 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| el9.x86_64 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| el9.aarch64 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| el10.x86_64 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| el10.aarch64 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| d12.x86_64 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| d12.aarch64 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| d13.x86_64 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| d13.aarch64 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| u22.x86_64 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| u22.aarch64 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| u24.x86_64 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| u24.aarch64 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| u26.x86_64 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| u26.aarch64 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
@ el8.x86_64 18 pg_circuit_18 pg_circuit_18-0.1.0-1PGSTY.el8.x86_64.rpm pigsty 0.1.0 102.7KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_circuit_18-0.1.0-1PGSTY.el8.x86_64.rpm
@ el8.aarch64 18 pg_circuit_18 pg_circuit_18-0.1.0-1PGSTY.el8.aarch64.rpm pigsty 0.1.0 101.1KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_circuit_18-0.1.0-1PGSTY.el8.aarch64.rpm
@ el9.x86_64 18 pg_circuit_18 pg_circuit_18-0.1.0-1PGSTY.el9.x86_64.rpm pigsty 0.1.0 100.9KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_circuit_18-0.1.0-1PGSTY.el9.x86_64.rpm
@ el9.aarch64 18 pg_circuit_18 pg_circuit_18-0.1.0-1PGSTY.el9.aarch64.rpm pigsty 0.1.0 100.0KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_circuit_18-0.1.0-1PGSTY.el9.aarch64.rpm
@ el10.x86_64 18 pg_circuit_18 pg_circuit_18-0.1.0-1PGSTY.el10.x86_64.rpm pigsty 0.1.0 101.3KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_circuit_18-0.1.0-1PGSTY.el10.x86_64.rpm
@ el10.aarch64 18 pg_circuit_18 pg_circuit_18-0.1.0-1PGSTY.el10.aarch64.rpm pigsty 0.1.0 100.6KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_circuit_18-0.1.0-1PGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-pg-circuit postgresql-18-pg-circuit_0.1.0-1PGSTY~bookworm_amd64.deb pigsty 0.1.0 92.3KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-circuit/postgresql-18-pg-circuit_0.1.0-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-pg-circuit postgresql-18-pg-circuit_0.1.0-1PGSTY~bookworm_arm64.deb pigsty 0.1.0 91.3KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-circuit/postgresql-18-pg-circuit_0.1.0-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-pg-circuit postgresql-18-pg-circuit_0.1.0-1PGSTY~trixie_amd64.deb pigsty 0.1.0 93.5KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-circuit/postgresql-18-pg-circuit_0.1.0-1PGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-pg-circuit postgresql-18-pg-circuit_0.1.0-1PGSTY~trixie_arm64.deb pigsty 0.1.0 92.2KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-circuit/postgresql-18-pg-circuit_0.1.0-1PGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-pg-circuit postgresql-18-pg-circuit_0.1.0-1PGSTY~jammy_amd64.deb pigsty 0.1.0 97.3KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-circuit/postgresql-18-pg-circuit_0.1.0-1PGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-pg-circuit postgresql-18-pg-circuit_0.1.0-1PGSTY~jammy_arm64.deb pigsty 0.1.0 96.7KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-circuit/postgresql-18-pg-circuit_0.1.0-1PGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-pg-circuit postgresql-18-pg-circuit_0.1.0-1PGSTY~noble_amd64.deb pigsty 0.1.0 93.8KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-circuit/postgresql-18-pg-circuit_0.1.0-1PGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-pg-circuit postgresql-18-pg-circuit_0.1.0-1PGSTY~noble_arm64.deb pigsty 0.1.0 93.6KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-circuit/postgresql-18-pg-circuit_0.1.0-1PGSTY~noble_arm64.deb
@ u26.x86_64 18 postgresql-18-pg-circuit postgresql-18-pg-circuit_0.1.0-1PGSTY~resolute_amd64.deb pigsty 0.1.0 92.6KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-circuit/postgresql-18-pg-circuit_0.1.0-1PGSTY~resolute_amd64.deb
@ u26.aarch64 18 postgresql-18-pg-circuit postgresql-18-pg-circuit_0.1.0-1PGSTY~resolute_arm64.deb pigsty 0.1.0 91.8KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-circuit/postgresql-18-pg-circuit_0.1.0-1PGSTY~resolute_arm64.deb
@ el8.x86_64 17 pg_circuit_17 pg_circuit_17-0.1.0-1PGSTY.el8.x86_64.rpm pigsty 0.1.0 102.7KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_circuit_17-0.1.0-1PGSTY.el8.x86_64.rpm
@ el8.aarch64 17 pg_circuit_17 pg_circuit_17-0.1.0-1PGSTY.el8.aarch64.rpm pigsty 0.1.0 101.1KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_circuit_17-0.1.0-1PGSTY.el8.aarch64.rpm
@ el9.x86_64 17 pg_circuit_17 pg_circuit_17-0.1.0-1PGSTY.el9.x86_64.rpm pigsty 0.1.0 101.0KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_circuit_17-0.1.0-1PGSTY.el9.x86_64.rpm
@ el9.aarch64 17 pg_circuit_17 pg_circuit_17-0.1.0-1PGSTY.el9.aarch64.rpm pigsty 0.1.0 100.1KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_circuit_17-0.1.0-1PGSTY.el9.aarch64.rpm
@ el10.x86_64 17 pg_circuit_17 pg_circuit_17-0.1.0-1PGSTY.el10.x86_64.rpm pigsty 0.1.0 101.4KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_circuit_17-0.1.0-1PGSTY.el10.x86_64.rpm
@ el10.aarch64 17 pg_circuit_17 pg_circuit_17-0.1.0-1PGSTY.el10.aarch64.rpm pigsty 0.1.0 100.6KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_circuit_17-0.1.0-1PGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-pg-circuit postgresql-17-pg-circuit_0.1.0-1PGSTY~bookworm_amd64.deb pigsty 0.1.0 92.2KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-circuit/postgresql-17-pg-circuit_0.1.0-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-pg-circuit postgresql-17-pg-circuit_0.1.0-1PGSTY~bookworm_arm64.deb pigsty 0.1.0 91.0KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-circuit/postgresql-17-pg-circuit_0.1.0-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-pg-circuit postgresql-17-pg-circuit_0.1.0-1PGSTY~trixie_amd64.deb pigsty 0.1.0 93.4KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-circuit/postgresql-17-pg-circuit_0.1.0-1PGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-pg-circuit postgresql-17-pg-circuit_0.1.0-1PGSTY~trixie_arm64.deb pigsty 0.1.0 92.2KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-circuit/postgresql-17-pg-circuit_0.1.0-1PGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-pg-circuit postgresql-17-pg-circuit_0.1.0-1PGSTY~jammy_amd64.deb pigsty 0.1.0 109.3KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-circuit/postgresql-17-pg-circuit_0.1.0-1PGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-pg-circuit postgresql-17-pg-circuit_0.1.0-1PGSTY~jammy_arm64.deb pigsty 0.1.0 109.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-circuit/postgresql-17-pg-circuit_0.1.0-1PGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-pg-circuit postgresql-17-pg-circuit_0.1.0-1PGSTY~noble_amd64.deb pigsty 0.1.0 93.8KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-circuit/postgresql-17-pg-circuit_0.1.0-1PGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-pg-circuit postgresql-17-pg-circuit_0.1.0-1PGSTY~noble_arm64.deb pigsty 0.1.0 93.7KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-circuit/postgresql-17-pg-circuit_0.1.0-1PGSTY~noble_arm64.deb
@ u26.x86_64 17 postgresql-17-pg-circuit postgresql-17-pg-circuit_0.1.0-1PGSTY~resolute_amd64.deb pigsty 0.1.0 92.7KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-circuit/postgresql-17-pg-circuit_0.1.0-1PGSTY~resolute_amd64.deb
@ u26.aarch64 17 postgresql-17-pg-circuit postgresql-17-pg-circuit_0.1.0-1PGSTY~resolute_arm64.deb pigsty 0.1.0 92.0KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-circuit/postgresql-17-pg-circuit_0.1.0-1PGSTY~resolute_arm64.deb
@ el8.x86_64 16 pg_circuit_16 pg_circuit_16-0.1.0-1PGSTY.el8.x86_64.rpm pigsty 0.1.0 102.8KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_circuit_16-0.1.0-1PGSTY.el8.x86_64.rpm
@ el8.aarch64 16 pg_circuit_16 pg_circuit_16-0.1.0-1PGSTY.el8.aarch64.rpm pigsty 0.1.0 101.2KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_circuit_16-0.1.0-1PGSTY.el8.aarch64.rpm
@ el9.x86_64 16 pg_circuit_16 pg_circuit_16-0.1.0-1PGSTY.el9.x86_64.rpm pigsty 0.1.0 101.0KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_circuit_16-0.1.0-1PGSTY.el9.x86_64.rpm
@ el9.aarch64 16 pg_circuit_16 pg_circuit_16-0.1.0-1PGSTY.el9.aarch64.rpm pigsty 0.1.0 100.2KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_circuit_16-0.1.0-1PGSTY.el9.aarch64.rpm
@ el10.x86_64 16 pg_circuit_16 pg_circuit_16-0.1.0-1PGSTY.el10.x86_64.rpm pigsty 0.1.0 101.4KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_circuit_16-0.1.0-1PGSTY.el10.x86_64.rpm
@ el10.aarch64 16 pg_circuit_16 pg_circuit_16-0.1.0-1PGSTY.el10.aarch64.rpm pigsty 0.1.0 100.7KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_circuit_16-0.1.0-1PGSTY.el10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-pg-circuit postgresql-16-pg-circuit_0.1.0-1PGSTY~bookworm_amd64.deb pigsty 0.1.0 92.3KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-circuit/postgresql-16-pg-circuit_0.1.0-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-pg-circuit postgresql-16-pg-circuit_0.1.0-1PGSTY~bookworm_arm64.deb pigsty 0.1.0 91.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-circuit/postgresql-16-pg-circuit_0.1.0-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-pg-circuit postgresql-16-pg-circuit_0.1.0-1PGSTY~trixie_amd64.deb pigsty 0.1.0 93.5KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-circuit/postgresql-16-pg-circuit_0.1.0-1PGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-pg-circuit postgresql-16-pg-circuit_0.1.0-1PGSTY~trixie_arm64.deb pigsty 0.1.0 92.3KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-circuit/postgresql-16-pg-circuit_0.1.0-1PGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-pg-circuit postgresql-16-pg-circuit_0.1.0-1PGSTY~jammy_amd64.deb pigsty 0.1.0 109.1KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-circuit/postgresql-16-pg-circuit_0.1.0-1PGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-pg-circuit postgresql-16-pg-circuit_0.1.0-1PGSTY~jammy_arm64.deb pigsty 0.1.0 108.6KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-circuit/postgresql-16-pg-circuit_0.1.0-1PGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-pg-circuit postgresql-16-pg-circuit_0.1.0-1PGSTY~noble_amd64.deb pigsty 0.1.0 93.8KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-circuit/postgresql-16-pg-circuit_0.1.0-1PGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-pg-circuit postgresql-16-pg-circuit_0.1.0-1PGSTY~noble_arm64.deb pigsty 0.1.0 93.7KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-circuit/postgresql-16-pg-circuit_0.1.0-1PGSTY~noble_arm64.deb
@ u26.x86_64 16 postgresql-16-pg-circuit postgresql-16-pg-circuit_0.1.0-1PGSTY~resolute_amd64.deb pigsty 0.1.0 92.9KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-circuit/postgresql-16-pg-circuit_0.1.0-1PGSTY~resolute_amd64.deb
@ u26.aarch64 16 postgresql-16-pg-circuit postgresql-16-pg-circuit_0.1.0-1PGSTY~resolute_arm64.deb pigsty 0.1.0 92.1KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-circuit/postgresql-16-pg-circuit_0.1.0-1PGSTY~resolute_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `pg_circuit` 扩展的 RPM / DEB 包：

```bash
pig build pkg pg_circuit         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `pg_circuit` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](https://pig.pgsty.com/zh) 或者是 `apt/yum/dnf` 安装扩展：

```bash {tab="安装" group="extension-install" value="install"}
pig install pg_circuit;          # 当前活跃 PG 版本安装
```

```bash {tab="pig" value="pig"}
pig ext install -y pg_circuit -v 18  # PG 18
pig ext install -y pg_circuit -v 17  # PG 17
pig ext install -y pg_circuit -v 16  # PG 16
```

```bash {tab="dnf" value="dnf"}
dnf install -y pg_circuit_18       # PG 18
dnf install -y pg_circuit_17       # PG 17
dnf install -y pg_circuit_16       # PG 16
```

```bash {tab="apt" value="apt"}
apt install -y postgresql-18-pg-circuit   # PG 18
apt install -y postgresql-17-pg-circuit   # PG 17
apt install -y postgresql-16-pg-circuit   # PG 16
```


**预加载配置**：

```bash
shared_preload_libraries = 'pg_circuit';
```


**创建扩展**：

```sql
CREATE EXTENSION pg_circuit;
```

## 用法

来源：

- [README v0.1.0](https://github.com/PG-Circuit/pg-circuit/blob/v0.1.0/README.md)

`pg_circuit` 在 PostgreSQL 16–18 中检查有风险的 DML 和 DDL。社区版可以观察、告警或阻止语句。先将其加入 `shared_preload_libraries` 并重启 PostgreSQL，再以超级用户创建扩展。

### 基础保护

```conf
shared_preload_libraries = 'pg_circuit'
```

```sql
CREATE EXTENSION pg_circuit;
CREATE TABLE circuit_demo (id integer);
INSERT INTO circuit_demo VALUES (1);
SET pg_circuit.mode = 'enforce';
DELETE FROM circuit_demo; -- blocked
DELETE FROM circuit_demo WHERE id = 1;
SELECT * FROM pg_circuit_status();
```

### 配置与诊断

`pg_circuit.mode` 默认为告警模式；观察模式只计算风险，强制模式阻止评分达到配置阈值的语句。`pg_circuit_runtime_state()` 报告压力信号，`pg_circuit_events()` 展示近期事件。

社区版的有效运行模式始终为 NORMAL，压力读数不会自动提升拦截力度。扩展是策略辅助工具，数据保护仍取决于应用事务、授权和备份。启用强制模式前应使用代表性查询检查规则和阈值。
