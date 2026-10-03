---
title: "macavity"
linkTitle: "macavity"
description: "为 PostgreSQL 测试集群提供确定性的会话内故障注入"
weight: 5215
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/CrystallineCore/Macavity">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">CrystallineCore/Macavity</div>
    <div class="ext-card__desc">https://github.com/CrystallineCore/Macavity</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/macavity-0.2.0.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">macavity-0.2.0.tar.gz</div>
    <div class="ext-card__desc">macavity-0.2.0.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`macavity`**](/ext/e/macavity) | `0.2.0` | <a class="ext-badge ext-badge--cate admin" href="/ext/cate/admin">ADMIN</a> | <a class="ext-badge ext-badge--license mit" href="/ext/license#mit">MIT</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 5215  | [**`macavity`**](/ext/e/macavity) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | - |
{.ext-table}


> Testing release; destructive crash action affects the entire instance. Disposable test clusters only.


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#admin) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.2.0` | {{< pgvers "18,17,16" >}} | `macavity` | - |
| [**RPM**](/ext/rpm#admin) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.2.0` | {{< pgvers "18,17,16" >}} | `macavity_$v` | - |
| [**DEB**](/ext/deb#admin) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.2.0` | {{< pgvers "18,17,16" >}} | `postgresql-$v-macavity` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 0.2.0 1 | AVAIL PIGSTY 0.2.0 1 | AVAIL PIGSTY 0.2.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| el8.aarch64 | AVAIL PIGSTY 0.2.0 1 | AVAIL PIGSTY 0.2.0 1 | AVAIL PIGSTY 0.2.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| el9.x86_64 | AVAIL PIGSTY 0.2.0 1 | AVAIL PIGSTY 0.2.0 1 | AVAIL PIGSTY 0.2.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| el9.aarch64 | AVAIL PIGSTY 0.2.0 1 | AVAIL PIGSTY 0.2.0 1 | AVAIL PIGSTY 0.2.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| el10.x86_64 | AVAIL PIGSTY 0.2.0 1 | AVAIL PIGSTY 0.2.0 1 | AVAIL PIGSTY 0.2.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| el10.aarch64 | AVAIL PIGSTY 0.2.0 1 | AVAIL PIGSTY 0.2.0 1 | AVAIL PIGSTY 0.2.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| d12.x86_64 | AVAIL PIGSTY 0.2.0 1 | AVAIL PIGSTY 0.2.0 1 | AVAIL PIGSTY 0.2.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| d12.aarch64 | AVAIL PIGSTY 0.2.0 1 | AVAIL PIGSTY 0.2.0 1 | AVAIL PIGSTY 0.2.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| d13.x86_64 | AVAIL PIGSTY 0.2.0 1 | AVAIL PIGSTY 0.2.0 1 | AVAIL PIGSTY 0.2.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| d13.aarch64 | AVAIL PIGSTY 0.2.0 1 | AVAIL PIGSTY 0.2.0 1 | AVAIL PIGSTY 0.2.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| u22.x86_64 | AVAIL PIGSTY 0.2.0 1 | AVAIL PIGSTY 0.2.0 1 | AVAIL PIGSTY 0.2.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| u22.aarch64 | AVAIL PIGSTY 0.2.0 1 | AVAIL PIGSTY 0.2.0 1 | AVAIL PIGSTY 0.2.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| u24.x86_64 | AVAIL PIGSTY 0.2.0 1 | AVAIL PIGSTY 0.2.0 1 | AVAIL PIGSTY 0.2.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| u24.aarch64 | AVAIL PIGSTY 0.2.0 1 | AVAIL PIGSTY 0.2.0 1 | AVAIL PIGSTY 0.2.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| u26.x86_64 | AVAIL PIGSTY 0.2.0 1 | AVAIL PIGSTY 0.2.0 1 | AVAIL PIGSTY 0.2.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| u26.aarch64 | AVAIL PIGSTY 0.2.0 1 | AVAIL PIGSTY 0.2.0 1 | AVAIL PIGSTY 0.2.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
@ el8.x86_64 18 macavity_18 macavity_18-0.2.0-1PGSTY.el8.x86_64.rpm pigsty 0.2.0 47.8KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/macavity_18-0.2.0-1PGSTY.el8.x86_64.rpm
@ el8.aarch64 18 macavity_18 macavity_18-0.2.0-1PGSTY.el8.aarch64.rpm pigsty 0.2.0 47.2KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/macavity_18-0.2.0-1PGSTY.el8.aarch64.rpm
@ el9.x86_64 18 macavity_18 macavity_18-0.2.0-1PGSTY.el9.x86_64.rpm pigsty 0.2.0 47.8KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/macavity_18-0.2.0-1PGSTY.el9.x86_64.rpm
@ el9.aarch64 18 macavity_18 macavity_18-0.2.0-1PGSTY.el9.aarch64.rpm pigsty 0.2.0 47.3KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/macavity_18-0.2.0-1PGSTY.el9.aarch64.rpm
@ el10.x86_64 18 macavity_18 macavity_18-0.2.0-1PGSTY.el10.x86_64.rpm pigsty 0.2.0 47.8KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/macavity_18-0.2.0-1PGSTY.el10.x86_64.rpm
@ el10.aarch64 18 macavity_18 macavity_18-0.2.0-1PGSTY.el10.aarch64.rpm pigsty 0.2.0 47.6KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/macavity_18-0.2.0-1PGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-macavity postgresql-18-macavity_0.2.0-1PGSTY~bookworm_amd64.deb pigsty 0.2.0 40.6KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/m/macavity/postgresql-18-macavity_0.2.0-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-macavity postgresql-18-macavity_0.2.0-1PGSTY~bookworm_arm64.deb pigsty 0.2.0 40.3KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/m/macavity/postgresql-18-macavity_0.2.0-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-macavity postgresql-18-macavity_0.2.0-1PGSTY~trixie_amd64.deb pigsty 0.2.0 40.6KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/m/macavity/postgresql-18-macavity_0.2.0-1PGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-macavity postgresql-18-macavity_0.2.0-1PGSTY~trixie_arm64.deb pigsty 0.2.0 40.4KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/m/macavity/postgresql-18-macavity_0.2.0-1PGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-macavity postgresql-18-macavity_0.2.0-1PGSTY~jammy_amd64.deb pigsty 0.2.0 40.1KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/m/macavity/postgresql-18-macavity_0.2.0-1PGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-macavity postgresql-18-macavity_0.2.0-1PGSTY~jammy_arm64.deb pigsty 0.2.0 39.6KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/m/macavity/postgresql-18-macavity_0.2.0-1PGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-macavity postgresql-18-macavity_0.2.0-1PGSTY~noble_amd64.deb pigsty 0.2.0 39.5KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/m/macavity/postgresql-18-macavity_0.2.0-1PGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-macavity postgresql-18-macavity_0.2.0-1PGSTY~noble_arm64.deb pigsty 0.2.0 39.3KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/m/macavity/postgresql-18-macavity_0.2.0-1PGSTY~noble_arm64.deb
@ u26.x86_64 18 postgresql-18-macavity postgresql-18-macavity_0.2.0-1PGSTY~resolute_amd64.deb pigsty 0.2.0 39.4KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/m/macavity/postgresql-18-macavity_0.2.0-1PGSTY~resolute_amd64.deb
@ u26.aarch64 18 postgresql-18-macavity postgresql-18-macavity_0.2.0-1PGSTY~resolute_arm64.deb pigsty 0.2.0 39.3KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/m/macavity/postgresql-18-macavity_0.2.0-1PGSTY~resolute_arm64.deb
@ el8.x86_64 17 macavity_17 macavity_17-0.2.0-1PGSTY.el8.x86_64.rpm pigsty 0.2.0 47.8KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/macavity_17-0.2.0-1PGSTY.el8.x86_64.rpm
@ el8.aarch64 17 macavity_17 macavity_17-0.2.0-1PGSTY.el8.aarch64.rpm pigsty 0.2.0 47.2KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/macavity_17-0.2.0-1PGSTY.el8.aarch64.rpm
@ el9.x86_64 17 macavity_17 macavity_17-0.2.0-1PGSTY.el9.x86_64.rpm pigsty 0.2.0 47.7KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/macavity_17-0.2.0-1PGSTY.el9.x86_64.rpm
@ el9.aarch64 17 macavity_17 macavity_17-0.2.0-1PGSTY.el9.aarch64.rpm pigsty 0.2.0 47.3KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/macavity_17-0.2.0-1PGSTY.el9.aarch64.rpm
@ el10.x86_64 17 macavity_17 macavity_17-0.2.0-1PGSTY.el10.x86_64.rpm pigsty 0.2.0 47.7KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/macavity_17-0.2.0-1PGSTY.el10.x86_64.rpm
@ el10.aarch64 17 macavity_17 macavity_17-0.2.0-1PGSTY.el10.aarch64.rpm pigsty 0.2.0 47.6KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/macavity_17-0.2.0-1PGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-macavity postgresql-17-macavity_0.2.0-1PGSTY~bookworm_amd64.deb pigsty 0.2.0 40.6KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/m/macavity/postgresql-17-macavity_0.2.0-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-macavity postgresql-17-macavity_0.2.0-1PGSTY~bookworm_arm64.deb pigsty 0.2.0 40.3KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/m/macavity/postgresql-17-macavity_0.2.0-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-macavity postgresql-17-macavity_0.2.0-1PGSTY~trixie_amd64.deb pigsty 0.2.0 40.6KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/m/macavity/postgresql-17-macavity_0.2.0-1PGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-macavity postgresql-17-macavity_0.2.0-1PGSTY~trixie_arm64.deb pigsty 0.2.0 40.4KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/m/macavity/postgresql-17-macavity_0.2.0-1PGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-macavity postgresql-17-macavity_0.2.0-1PGSTY~jammy_amd64.deb pigsty 0.2.0 44.9KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/m/macavity/postgresql-17-macavity_0.2.0-1PGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-macavity postgresql-17-macavity_0.2.0-1PGSTY~jammy_arm64.deb pigsty 0.2.0 44.4KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/m/macavity/postgresql-17-macavity_0.2.0-1PGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-macavity postgresql-17-macavity_0.2.0-1PGSTY~noble_amd64.deb pigsty 0.2.0 39.5KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/m/macavity/postgresql-17-macavity_0.2.0-1PGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-macavity postgresql-17-macavity_0.2.0-1PGSTY~noble_arm64.deb pigsty 0.2.0 39.2KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/m/macavity/postgresql-17-macavity_0.2.0-1PGSTY~noble_arm64.deb
@ u26.x86_64 17 postgresql-17-macavity postgresql-17-macavity_0.2.0-1PGSTY~resolute_amd64.deb pigsty 0.2.0 39.4KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/m/macavity/postgresql-17-macavity_0.2.0-1PGSTY~resolute_amd64.deb
@ u26.aarch64 17 postgresql-17-macavity postgresql-17-macavity_0.2.0-1PGSTY~resolute_arm64.deb pigsty 0.2.0 39.1KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/m/macavity/postgresql-17-macavity_0.2.0-1PGSTY~resolute_arm64.deb
@ el8.x86_64 16 macavity_16 macavity_16-0.2.0-1PGSTY.el8.x86_64.rpm pigsty 0.2.0 47.8KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/macavity_16-0.2.0-1PGSTY.el8.x86_64.rpm
@ el8.aarch64 16 macavity_16 macavity_16-0.2.0-1PGSTY.el8.aarch64.rpm pigsty 0.2.0 47.2KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/macavity_16-0.2.0-1PGSTY.el8.aarch64.rpm
@ el9.x86_64 16 macavity_16 macavity_16-0.2.0-1PGSTY.el9.x86_64.rpm pigsty 0.2.0 47.7KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/macavity_16-0.2.0-1PGSTY.el9.x86_64.rpm
@ el9.aarch64 16 macavity_16 macavity_16-0.2.0-1PGSTY.el9.aarch64.rpm pigsty 0.2.0 47.3KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/macavity_16-0.2.0-1PGSTY.el9.aarch64.rpm
@ el10.x86_64 16 macavity_16 macavity_16-0.2.0-1PGSTY.el10.x86_64.rpm pigsty 0.2.0 47.7KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/macavity_16-0.2.0-1PGSTY.el10.x86_64.rpm
@ el10.aarch64 16 macavity_16 macavity_16-0.2.0-1PGSTY.el10.aarch64.rpm pigsty 0.2.0 47.6KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/macavity_16-0.2.0-1PGSTY.el10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-macavity postgresql-16-macavity_0.2.0-1PGSTY~bookworm_amd64.deb pigsty 0.2.0 40.6KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/m/macavity/postgresql-16-macavity_0.2.0-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-macavity postgresql-16-macavity_0.2.0-1PGSTY~bookworm_arm64.deb pigsty 0.2.0 40.3KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/m/macavity/postgresql-16-macavity_0.2.0-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-macavity postgresql-16-macavity_0.2.0-1PGSTY~trixie_amd64.deb pigsty 0.2.0 40.6KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/m/macavity/postgresql-16-macavity_0.2.0-1PGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-macavity postgresql-16-macavity_0.2.0-1PGSTY~trixie_arm64.deb pigsty 0.2.0 40.4KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/m/macavity/postgresql-16-macavity_0.2.0-1PGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-macavity postgresql-16-macavity_0.2.0-1PGSTY~jammy_amd64.deb pigsty 0.2.0 44.7KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/m/macavity/postgresql-16-macavity_0.2.0-1PGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-macavity postgresql-16-macavity_0.2.0-1PGSTY~jammy_arm64.deb pigsty 0.2.0 44.3KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/m/macavity/postgresql-16-macavity_0.2.0-1PGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-macavity postgresql-16-macavity_0.2.0-1PGSTY~noble_amd64.deb pigsty 0.2.0 39.5KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/m/macavity/postgresql-16-macavity_0.2.0-1PGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-macavity postgresql-16-macavity_0.2.0-1PGSTY~noble_arm64.deb pigsty 0.2.0 39.2KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/m/macavity/postgresql-16-macavity_0.2.0-1PGSTY~noble_arm64.deb
@ u26.x86_64 16 postgresql-16-macavity postgresql-16-macavity_0.2.0-1PGSTY~resolute_amd64.deb pigsty 0.2.0 39.4KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/m/macavity/postgresql-16-macavity_0.2.0-1PGSTY~resolute_amd64.deb
@ u26.aarch64 16 postgresql-16-macavity postgresql-16-macavity_0.2.0-1PGSTY~resolute_arm64.deb pigsty 0.2.0 39.1KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/m/macavity/postgresql-16-macavity_0.2.0-1PGSTY~resolute_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `macavity` 扩展的 RPM / DEB 包：

```bash
pig build pkg macavity         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `macavity` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](https://pig.pgsty.com/zh) 或者是 `apt/yum/dnf` 安装扩展：

```bash {tab="安装" group="extension-install" value="install"}
pig install macavity;          # 当前活跃 PG 版本安装
```

```bash {tab="pig" value="pig"}
pig ext install -y macavity -v 18  # PG 18
pig ext install -y macavity -v 17  # PG 17
pig ext install -y macavity -v 16  # PG 16
```

```bash {tab="dnf" value="dnf"}
dnf install -y macavity_18       # PG 18
dnf install -y macavity_17       # PG 17
dnf install -y macavity_16       # PG 16
```

```bash {tab="apt" value="apt"}
apt install -y postgresql-18-macavity   # PG 18
apt install -y postgresql-17-macavity   # PG 17
apt install -y postgresql-16-macavity   # PG 16
```


**创建扩展**：

```sql
CREATE EXTENSION macavity;
```

## 用法

来源：

- [README.md](https://github.com/CrystallineCore/Macavity/blob/v0.2.0/README.md)
- [CHANGELOG.md](https://github.com/CrystallineCore/Macavity/blob/v0.2.0/CHANGELOG.md)
- [macavity.control](https://github.com/CrystallineCore/Macavity/blob/v0.2.0/macavity.control)
- [sql/macavity--0.2.0.sql](https://github.com/CrystallineCore/Macavity/blob/v0.2.0/sql/macavity--0.2.0.sql)
- [sql/macavity--0.1.0--0.2.0.sql](https://github.com/CrystallineCore/Macavity/blob/v0.2.0/sql/macavity--0.1.0--0.2.0.sql)

`macavity` 0.2.0 为可丢弃的 PostgreSQL 测试集群提供确定性故障注入。上游在 Linux 上测试 PostgreSQL 16–18，尚未验证 PostgreSQL 19+ 及其他平台，Windows 不支持崩溃注入。崩溃动作可能断开所有会话并触发崩溃恢复。

### 事件用法

```sql
CREATE EXTENSION macavity;
SELECT * FROM macavity_points();
SELECT macavity_arm('executor_start', 'error', 1);
SELECT 1; -- expected injected error
SELECT * FROM macavity_status();
SELECT macavity_disarm();
SELECT macavity_reset();
```

### 事件表与升级

每个会话保存多个事件，各有固定 ID、独立计数及 `armed`、`completed` 或 `disarmed` 状态。`macavity_arm` 返回整数事件 ID；仅接收 ID 的重载会重新启用已完成或已停用事件。`macavity_status` 返回零到多行事件。`macavity_disarm` 保留事件历史，`macavity_reset` 则清空历史并重置 ID。

注入点为 `executor_start`、`executor_end`、`before_commit` 与 `before_abort`，动作为 `error`、`delay` 与 `crash`。延迟固定一秒，回滚期间不允许注入错误。同一次命中按延迟、崩溃、错误的顺序处理，同类事件按 ID 排序。

创建需要超级用户，无需共享预加载。只有注入点枚举向 `PUBLIC` 开放。使用 `ALTER EXTENSION macavity UPDATE` 升级会以新签名重新创建函数：须恢复显式授权、修改调用方并重新连接旧会话。当前 Pigsty 打包字段仍对应 0.1.0。
