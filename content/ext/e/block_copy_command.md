---
title: "block_copy_command"
linkTitle: "block_copy_command"
description: "通过可配置的 ProcessUtility hook 阻止 COPY 命令"
weight: 7405
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/rustwizard/block_copy_command">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">rustwizard/block_copy_command</div>
    <div class="ext-card__desc">https://github.com/rustwizard/block_copy_command</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/block_copy_command-0.1.5.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">block_copy_command-0.1.5.tar.gz</div>
    <div class="ext-card__desc">block_copy_command-0.1.5.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`block_copy_command`**](/ext/e/block_copy_command) | `0.1.5` | <a class="ext-badge ext-badge--cate sec" href="/ext/cate/sec">SEC</a> | <a class="ext-badge ext-badge--license bsd 3clause" href="/ext/license#bsd3clause">BSD 3-Clause</a> | <a class="ext-badge ext-badge--lang rust" href="/ext/language#rust">Rust</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 7405  | [**`block_copy_command`**](/ext/e/block_copy_command) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | - |
{.ext-table}


> Requires shared_preload_libraries = block_copy_command.


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#sec) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.1.5` | {{< pgvers "18,17,16,15,14,13" >}} | `block_copy_command` | - |
| [**RPM**](/ext/rpm#sec) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.1.5` | {{< pgvers "18,17,16,15,14,13" >}} | `block_copy_command_$v` | - |
| [**DEB**](/ext/deb#sec) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.1.5` | {{< pgvers "18,17,16,15,14,13" >}} | `postgresql-$v-block-copy-command` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 0.1.5 1 | AVAIL PIGSTY 0.1.5 1 | AVAIL PIGSTY 0.1.5 1 | AVAIL PIGSTY 0.1.5 1 | AVAIL PIGSTY 0.1.5 1 |
| el8.aarch64 | AVAIL PIGSTY 0.1.5 1 | AVAIL PIGSTY 0.1.5 1 | AVAIL PIGSTY 0.1.5 1 | AVAIL PIGSTY 0.1.5 1 | AVAIL PIGSTY 0.1.5 1 |
| el9.x86_64 | AVAIL PIGSTY 0.1.5 1 | AVAIL PIGSTY 0.1.5 1 | AVAIL PIGSTY 0.1.5 1 | AVAIL PIGSTY 0.1.5 1 | AVAIL PIGSTY 0.1.5 1 |
| el9.aarch64 | AVAIL PIGSTY 0.1.5 1 | AVAIL PIGSTY 0.1.5 1 | AVAIL PIGSTY 0.1.5 1 | AVAIL PIGSTY 0.1.5 1 | AVAIL PIGSTY 0.1.5 1 |
| el10.x86_64 | AVAIL PIGSTY 0.1.5 1 | AVAIL PIGSTY 0.1.5 1 | AVAIL PIGSTY 0.1.5 1 | AVAIL PIGSTY 0.1.5 1 | AVAIL PIGSTY 0.1.5 1 |
| el10.aarch64 | AVAIL PIGSTY 0.1.5 1 | AVAIL PIGSTY 0.1.5 1 | AVAIL PIGSTY 0.1.5 1 | AVAIL PIGSTY 0.1.5 1 | AVAIL PIGSTY 0.1.5 1 |
| d12.x86_64 | AVAIL PIGSTY 0.1.5 1 | AVAIL PIGSTY 0.1.5 1 | AVAIL PIGSTY 0.1.5 1 | AVAIL PIGSTY 0.1.5 1 | AVAIL PIGSTY 0.1.5 1 |
| d12.aarch64 | AVAIL PIGSTY 0.1.5 1 | AVAIL PIGSTY 0.1.5 1 | AVAIL PIGSTY 0.1.5 1 | AVAIL PIGSTY 0.1.5 1 | AVAIL PIGSTY 0.1.5 1 |
| d13.x86_64 | AVAIL PIGSTY 0.1.5 1 | AVAIL PIGSTY 0.1.5 1 | AVAIL PIGSTY 0.1.5 1 | AVAIL PIGSTY 0.1.5 1 | AVAIL PIGSTY 0.1.5 1 |
| d13.aarch64 | AVAIL PIGSTY 0.1.5 1 | AVAIL PIGSTY 0.1.5 1 | AVAIL PIGSTY 0.1.5 1 | AVAIL PIGSTY 0.1.5 1 | AVAIL PIGSTY 0.1.5 1 |
| u22.x86_64 | AVAIL PIGSTY 0.1.5 1 | AVAIL PIGSTY 0.1.5 1 | AVAIL PIGSTY 0.1.5 1 | AVAIL PIGSTY 0.1.5 1 | AVAIL PIGSTY 0.1.5 1 |
| u22.aarch64 | AVAIL PIGSTY 0.1.5 1 | AVAIL PIGSTY 0.1.5 1 | AVAIL PIGSTY 0.1.5 1 | AVAIL PIGSTY 0.1.5 1 | AVAIL PIGSTY 0.1.5 1 |
| u24.x86_64 | AVAIL PIGSTY 0.1.5 1 | AVAIL PIGSTY 0.1.5 1 | AVAIL PIGSTY 0.1.5 1 | AVAIL PIGSTY 0.1.5 1 | AVAIL PIGSTY 0.1.5 1 |
| u24.aarch64 | AVAIL PIGSTY 0.1.5 1 | AVAIL PIGSTY 0.1.5 1 | AVAIL PIGSTY 0.1.5 1 | AVAIL PIGSTY 0.1.5 1 | AVAIL PIGSTY 0.1.5 1 |
@ el8.x86_64 18 block_copy_command_18 block_copy_command_18-0.1.5-1PIGSTY.el8.x86_64.rpm pigsty 0.1.5 306.1KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/block_copy_command_18-0.1.5-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 18 block_copy_command_18 block_copy_command_18-0.1.5-1PIGSTY.el8.aarch64.rpm pigsty 0.1.5 199.0KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/block_copy_command_18-0.1.5-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 18 block_copy_command_18 block_copy_command_18-0.1.5-1PIGSTY.el9.x86_64.rpm pigsty 0.1.5 321.7KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/block_copy_command_18-0.1.5-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 18 block_copy_command_18 block_copy_command_18-0.1.5-1PIGSTY.el9.aarch64.rpm pigsty 0.1.5 212.1KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/block_copy_command_18-0.1.5-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 18 block_copy_command_18 block_copy_command_18-0.1.5-1PIGSTY.el10.x86_64.rpm pigsty 0.1.5 321.9KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/block_copy_command_18-0.1.5-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 18 block_copy_command_18 block_copy_command_18-0.1.5-1PIGSTY.el10.aarch64.rpm pigsty 0.1.5 212.1KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/block_copy_command_18-0.1.5-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-block-copy-command postgresql-18-block-copy-command_0.1.5-1PIGSTY~bookworm_amd64.deb pigsty 0.1.5 248.3KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/b/block-copy-command/postgresql-18-block-copy-command_0.1.5-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-block-copy-command postgresql-18-block-copy-command_0.1.5-1PIGSTY~bookworm_arm64.deb pigsty 0.1.5 149.9KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/b/block-copy-command/postgresql-18-block-copy-command_0.1.5-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-block-copy-command postgresql-18-block-copy-command_0.1.5-1PIGSTY~trixie_amd64.deb pigsty 0.1.5 248.3KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/b/block-copy-command/postgresql-18-block-copy-command_0.1.5-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-block-copy-command postgresql-18-block-copy-command_0.1.5-1PIGSTY~trixie_arm64.deb pigsty 0.1.5 149.9KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/b/block-copy-command/postgresql-18-block-copy-command_0.1.5-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-block-copy-command postgresql-18-block-copy-command_0.1.5-1PIGSTY~jammy_amd64.deb pigsty 0.1.5 281.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/b/block-copy-command/postgresql-18-block-copy-command_0.1.5-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-block-copy-command postgresql-18-block-copy-command_0.1.5-1PIGSTY~jammy_arm64.deb pigsty 0.1.5 173.9KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/b/block-copy-command/postgresql-18-block-copy-command_0.1.5-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-block-copy-command postgresql-18-block-copy-command_0.1.5-1PIGSTY~noble_amd64.deb pigsty 0.1.5 278.5KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/b/block-copy-command/postgresql-18-block-copy-command_0.1.5-1PIGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-block-copy-command postgresql-18-block-copy-command_0.1.5-1PIGSTY~noble_arm64.deb pigsty 0.1.5 172.4KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/b/block-copy-command/postgresql-18-block-copy-command_0.1.5-1PIGSTY~noble_arm64.deb
@ el8.x86_64 17 block_copy_command_17 block_copy_command_17-0.1.5-1PIGSTY.el8.x86_64.rpm pigsty 0.1.5 306.0KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/block_copy_command_17-0.1.5-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 17 block_copy_command_17 block_copy_command_17-0.1.5-1PIGSTY.el8.aarch64.rpm pigsty 0.1.5 199.1KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/block_copy_command_17-0.1.5-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 17 block_copy_command_17 block_copy_command_17-0.1.5-1PIGSTY.el9.x86_64.rpm pigsty 0.1.5 321.6KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/block_copy_command_17-0.1.5-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 17 block_copy_command_17 block_copy_command_17-0.1.5-1PIGSTY.el9.aarch64.rpm pigsty 0.1.5 212.1KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/block_copy_command_17-0.1.5-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 17 block_copy_command_17 block_copy_command_17-0.1.5-1PIGSTY.el10.x86_64.rpm pigsty 0.1.5 321.7KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/block_copy_command_17-0.1.5-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 17 block_copy_command_17 block_copy_command_17-0.1.5-1PIGSTY.el10.aarch64.rpm pigsty 0.1.5 212.1KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/block_copy_command_17-0.1.5-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-block-copy-command postgresql-17-block-copy-command_0.1.5-1PIGSTY~bookworm_amd64.deb pigsty 0.1.5 247.4KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/b/block-copy-command/postgresql-17-block-copy-command_0.1.5-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-block-copy-command postgresql-17-block-copy-command_0.1.5-1PIGSTY~bookworm_arm64.deb pigsty 0.1.5 149.9KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/b/block-copy-command/postgresql-17-block-copy-command_0.1.5-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-block-copy-command postgresql-17-block-copy-command_0.1.5-1PIGSTY~trixie_amd64.deb pigsty 0.1.5 247.6KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/b/block-copy-command/postgresql-17-block-copy-command_0.1.5-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-block-copy-command postgresql-17-block-copy-command_0.1.5-1PIGSTY~trixie_arm64.deb pigsty 0.1.5 150.0KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/b/block-copy-command/postgresql-17-block-copy-command_0.1.5-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-block-copy-command postgresql-17-block-copy-command_0.1.5-1PIGSTY~jammy_amd64.deb pigsty 0.1.5 280.9KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/b/block-copy-command/postgresql-17-block-copy-command_0.1.5-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-block-copy-command postgresql-17-block-copy-command_0.1.5-1PIGSTY~jammy_arm64.deb pigsty 0.1.5 173.9KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/b/block-copy-command/postgresql-17-block-copy-command_0.1.5-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-block-copy-command postgresql-17-block-copy-command_0.1.5-1PIGSTY~noble_amd64.deb pigsty 0.1.5 278.4KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/b/block-copy-command/postgresql-17-block-copy-command_0.1.5-1PIGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-block-copy-command postgresql-17-block-copy-command_0.1.5-1PIGSTY~noble_arm64.deb pigsty 0.1.5 172.8KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/b/block-copy-command/postgresql-17-block-copy-command_0.1.5-1PIGSTY~noble_arm64.deb
@ el8.x86_64 16 block_copy_command_16 block_copy_command_16-0.1.5-1PIGSTY.el8.x86_64.rpm pigsty 0.1.5 305.9KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/block_copy_command_16-0.1.5-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 16 block_copy_command_16 block_copy_command_16-0.1.5-1PIGSTY.el8.aarch64.rpm pigsty 0.1.5 199.1KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/block_copy_command_16-0.1.5-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 16 block_copy_command_16 block_copy_command_16-0.1.5-1PIGSTY.el9.x86_64.rpm pigsty 0.1.5 321.3KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/block_copy_command_16-0.1.5-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 16 block_copy_command_16 block_copy_command_16-0.1.5-1PIGSTY.el9.aarch64.rpm pigsty 0.1.5 212.6KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/block_copy_command_16-0.1.5-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 16 block_copy_command_16 block_copy_command_16-0.1.5-1PIGSTY.el10.x86_64.rpm pigsty 0.1.5 321.5KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/block_copy_command_16-0.1.5-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 16 block_copy_command_16 block_copy_command_16-0.1.5-1PIGSTY.el10.aarch64.rpm pigsty 0.1.5 212.1KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/block_copy_command_16-0.1.5-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-block-copy-command postgresql-16-block-copy-command_0.1.5-1PIGSTY~bookworm_amd64.deb pigsty 0.1.5 248.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/b/block-copy-command/postgresql-16-block-copy-command_0.1.5-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-block-copy-command postgresql-16-block-copy-command_0.1.5-1PIGSTY~bookworm_arm64.deb pigsty 0.1.5 149.9KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/b/block-copy-command/postgresql-16-block-copy-command_0.1.5-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-block-copy-command postgresql-16-block-copy-command_0.1.5-1PIGSTY~trixie_amd64.deb pigsty 0.1.5 248.2KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/b/block-copy-command/postgresql-16-block-copy-command_0.1.5-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-block-copy-command postgresql-16-block-copy-command_0.1.5-1PIGSTY~trixie_arm64.deb pigsty 0.1.5 149.8KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/b/block-copy-command/postgresql-16-block-copy-command_0.1.5-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-block-copy-command postgresql-16-block-copy-command_0.1.5-1PIGSTY~jammy_amd64.deb pigsty 0.1.5 281.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/b/block-copy-command/postgresql-16-block-copy-command_0.1.5-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-block-copy-command postgresql-16-block-copy-command_0.1.5-1PIGSTY~jammy_arm64.deb pigsty 0.1.5 174.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/b/block-copy-command/postgresql-16-block-copy-command_0.1.5-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-block-copy-command postgresql-16-block-copy-command_0.1.5-1PIGSTY~noble_amd64.deb pigsty 0.1.5 278.4KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/b/block-copy-command/postgresql-16-block-copy-command_0.1.5-1PIGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-block-copy-command postgresql-16-block-copy-command_0.1.5-1PIGSTY~noble_arm64.deb pigsty 0.1.5 172.8KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/b/block-copy-command/postgresql-16-block-copy-command_0.1.5-1PIGSTY~noble_arm64.deb
@ el8.x86_64 15 block_copy_command_15 block_copy_command_15-0.1.5-1PIGSTY.el8.x86_64.rpm pigsty 0.1.5 305.9KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/block_copy_command_15-0.1.5-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 15 block_copy_command_15 block_copy_command_15-0.1.5-1PIGSTY.el8.aarch64.rpm pigsty 0.1.5 199.1KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/block_copy_command_15-0.1.5-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 15 block_copy_command_15 block_copy_command_15-0.1.5-1PIGSTY.el9.x86_64.rpm pigsty 0.1.5 321.8KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/block_copy_command_15-0.1.5-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 15 block_copy_command_15 block_copy_command_15-0.1.5-1PIGSTY.el9.aarch64.rpm pigsty 0.1.5 212.0KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/block_copy_command_15-0.1.5-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 15 block_copy_command_15 block_copy_command_15-0.1.5-1PIGSTY.el10.x86_64.rpm pigsty 0.1.5 322.0KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/block_copy_command_15-0.1.5-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 15 block_copy_command_15 block_copy_command_15-0.1.5-1PIGSTY.el10.aarch64.rpm pigsty 0.1.5 212.1KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/block_copy_command_15-0.1.5-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 15 postgresql-15-block-copy-command postgresql-15-block-copy-command_0.1.5-1PIGSTY~bookworm_amd64.deb pigsty 0.1.5 247.4KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/b/block-copy-command/postgresql-15-block-copy-command_0.1.5-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-block-copy-command postgresql-15-block-copy-command_0.1.5-1PIGSTY~bookworm_arm64.deb pigsty 0.1.5 149.9KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/b/block-copy-command/postgresql-15-block-copy-command_0.1.5-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-block-copy-command postgresql-15-block-copy-command_0.1.5-1PIGSTY~trixie_amd64.deb pigsty 0.1.5 247.4KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/b/block-copy-command/postgresql-15-block-copy-command_0.1.5-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-block-copy-command postgresql-15-block-copy-command_0.1.5-1PIGSTY~trixie_arm64.deb pigsty 0.1.5 149.9KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/b/block-copy-command/postgresql-15-block-copy-command_0.1.5-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-block-copy-command postgresql-15-block-copy-command_0.1.5-1PIGSTY~jammy_amd64.deb pigsty 0.1.5 280.7KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/b/block-copy-command/postgresql-15-block-copy-command_0.1.5-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-block-copy-command postgresql-15-block-copy-command_0.1.5-1PIGSTY~jammy_arm64.deb pigsty 0.1.5 173.9KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/b/block-copy-command/postgresql-15-block-copy-command_0.1.5-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-block-copy-command postgresql-15-block-copy-command_0.1.5-1PIGSTY~noble_amd64.deb pigsty 0.1.5 278.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/b/block-copy-command/postgresql-15-block-copy-command_0.1.5-1PIGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-block-copy-command postgresql-15-block-copy-command_0.1.5-1PIGSTY~noble_arm64.deb pigsty 0.1.5 173.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/b/block-copy-command/postgresql-15-block-copy-command_0.1.5-1PIGSTY~noble_arm64.deb
@ el8.x86_64 14 block_copy_command_14 block_copy_command_14-0.1.5-1PIGSTY.el8.x86_64.rpm pigsty 0.1.5 305.6KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/block_copy_command_14-0.1.5-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 14 block_copy_command_14 block_copy_command_14-0.1.5-1PIGSTY.el8.aarch64.rpm pigsty 0.1.5 199.0KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/block_copy_command_14-0.1.5-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 14 block_copy_command_14 block_copy_command_14-0.1.5-1PIGSTY.el9.x86_64.rpm pigsty 0.1.5 321.9KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/block_copy_command_14-0.1.5-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 14 block_copy_command_14 block_copy_command_14-0.1.5-1PIGSTY.el9.aarch64.rpm pigsty 0.1.5 212.5KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/block_copy_command_14-0.1.5-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 14 block_copy_command_14 block_copy_command_14-0.1.5-1PIGSTY.el10.x86_64.rpm pigsty 0.1.5 322.1KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/block_copy_command_14-0.1.5-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 14 block_copy_command_14 block_copy_command_14-0.1.5-1PIGSTY.el10.aarch64.rpm pigsty 0.1.5 212.2KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/block_copy_command_14-0.1.5-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 14 postgresql-14-block-copy-command postgresql-14-block-copy-command_0.1.5-1PIGSTY~bookworm_amd64.deb pigsty 0.1.5 248.3KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/b/block-copy-command/postgresql-14-block-copy-command_0.1.5-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 14 postgresql-14-block-copy-command postgresql-14-block-copy-command_0.1.5-1PIGSTY~bookworm_arm64.deb pigsty 0.1.5 149.9KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/b/block-copy-command/postgresql-14-block-copy-command_0.1.5-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 14 postgresql-14-block-copy-command postgresql-14-block-copy-command_0.1.5-1PIGSTY~trixie_amd64.deb pigsty 0.1.5 247.9KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/b/block-copy-command/postgresql-14-block-copy-command_0.1.5-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 14 postgresql-14-block-copy-command postgresql-14-block-copy-command_0.1.5-1PIGSTY~trixie_arm64.deb pigsty 0.1.5 149.9KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/b/block-copy-command/postgresql-14-block-copy-command_0.1.5-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 14 postgresql-14-block-copy-command postgresql-14-block-copy-command_0.1.5-1PIGSTY~jammy_amd64.deb pigsty 0.1.5 280.7KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/b/block-copy-command/postgresql-14-block-copy-command_0.1.5-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 14 postgresql-14-block-copy-command postgresql-14-block-copy-command_0.1.5-1PIGSTY~jammy_arm64.deb pigsty 0.1.5 174.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/b/block-copy-command/postgresql-14-block-copy-command_0.1.5-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 14 postgresql-14-block-copy-command postgresql-14-block-copy-command_0.1.5-1PIGSTY~noble_amd64.deb pigsty 0.1.5 278.2KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/b/block-copy-command/postgresql-14-block-copy-command_0.1.5-1PIGSTY~noble_amd64.deb
@ u24.aarch64 14 postgresql-14-block-copy-command postgresql-14-block-copy-command_0.1.5-1PIGSTY~noble_arm64.deb pigsty 0.1.5 172.8KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/b/block-copy-command/postgresql-14-block-copy-command_0.1.5-1PIGSTY~noble_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `block_copy_command` 扩展的 RPM / DEB 包：

```bash
pig build pkg block_copy_command         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `block_copy_command` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install block_copy_command;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y block_copy_command -v 18  # PG 18
pig ext install -y block_copy_command -v 17  # PG 17
pig ext install -y block_copy_command -v 16  # PG 16
pig ext install -y block_copy_command -v 15  # PG 15
pig ext install -y block_copy_command -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y block_copy_command_18       # PG 18
dnf install -y block_copy_command_17       # PG 17
dnf install -y block_copy_command_16       # PG 16
dnf install -y block_copy_command_15       # PG 15
dnf install -y block_copy_command_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-block-copy-command   # PG 18
apt install -y postgresql-17-block-copy-command   # PG 17
apt install -y postgresql-16-block-copy-command   # PG 16
apt install -y postgresql-15-block-copy-command   # PG 15
apt install -y postgresql-14-block-copy-command   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**预加载配置**：

```bash
shared_preload_libraries = 'block_copy_command';
```


**创建扩展**：

```sql
CREATE EXTENSION block_copy_command;
```

## 用法
- GitHub 仓库: [`rustwizard/block_copy_command`](https://github.com/rustwizard/block_copy_command)
- README: [rustwizard/block_copy_command/blob/master/README.md](https://github.com/rustwizard/block_copy_command/blob/master/README.md)

`block_copy_command` 通过安装 `ProcessUtility` hook，在整个集群范围内拦截 `COPY` 命令。它通过 `shared_preload_libraries` 加载，而 `CREATE EXTENSION` 只是在每个数据库中登记扩展元数据。

这个扩展适用于希望默认禁止非超级用户执行 `COPY TO` 和 `COPY FROM`，同时仍可通过 GUC 和审计表进行更细粒度控制的部署场景。

### 安装与启用

```conf
shared_preload_libraries = 'block_copy_command'
```

```sql
CREATE EXTENSION block_copy_command;
```

README 指出，一旦库被加载，这个 hook 就会对整个集群生效。

### 拦截规则

默认情况下，非超级用户无法执行 `COPY`。

```sql
COPY my_table TO STDOUT;
COPY my_table FROM STDIN;
COPY (SELECT * FROM my_table) TO '/tmp/out.csv';
```

超级用户默认可以绕过拦截，除非它们被列入 `block_copy_command.blocked_roles`，或者启用了 `block_copy_command.block_program`。`COPY ... PROGRAM` 默认对所有用户都被阻止。

### 配置项

- `block_copy_command.enabled` 控制是否拦截非超级用户。
- `block_copy_command.block_to` 控制是否阻止 `COPY TO`。
- `block_copy_command.block_from` 控制是否阻止 `COPY FROM`。
- `block_copy_command.block_program` 阻止所有用户执行 `COPY TO/FROM PROGRAM`。
- `block_copy_command.hint` 会为被阻止的命令附加自定义 `HINT:`。
- `block_copy_command.blocked_roles` 会永久阻止指定角色，包括超级用户。
- `block_copy_command.audit_log_enabled` 控制是否将拦截到的 `COPY` 事件写入 `block_copy_command.audit_log`。

### 审计日志

扩展会把被拦截的 `COPY` 活动记录到 `block_copy_command.audit_log`，并将被阻止事件以 `LOG` 级别写入 PostgreSQL 服务器日志。

README 中常见的监控查询包括查看最近事件、筛选被阻止事件，以及按用户分组统计。

### 范围

上游 README 已经覆盖了需求、启用方式、拦截行为、主要 GUC、审计表和测试覆盖，因此这个 stub 不需要额外的项目主页或文档站内容。
