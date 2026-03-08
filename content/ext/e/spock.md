---
title: "spock"
linkTitle: "spock"
description: "PostgreSQL 多主逻辑复制扩展"
weight: 9560
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/pgEdge/spock">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">pgEdge/spock</div>
    <div class="ext-card__desc">https://github.com/pgEdge/spock</div>
  </a>
  <a class="ext-card ext-card--source" href="spock-5.0.5.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">spock-5.0.5.tar.gz</div>
    <div class="ext-card__desc">spock-5.0.5.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`spock`**](/ext/e/spock) | `5.0.5` | <a class="ext-badge ext-badge--cate etl" href="/ext/cate/etl">ETL</a> | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 9560  | [**`spock`**](/ext/e/spock) | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | `spock` |
{.ext-table}

| **相关扩展** | [`lolor`](/ext/e/lolor) [`snowflake`](/ext/e/snowflake) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


> works on pgedge kernel fork


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#etl) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `5.0.5` | {{< pgvers "17" >}} | `spock` | - |
| [**RPM**](/ext/rpm#etl) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `5.0.5` | {{< pgvers "17" >}} | `spock_$v` | `pgedge_$v` |
| [**DEB**](/ext/deb#etl) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `5.0.5` | {{< pgvers "17" >}} | `pgedge-$v-spock` | `pgedge-$v` |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | MISS PIGSTY - 0 | FORK PIGSTY 5.0.5 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| el8.aarch64 | MISS PIGSTY - 0 | FORK PIGSTY 5.0.5 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| el9.x86_64 | MISS PIGSTY - 0 | FORK PIGSTY 5.0.5 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| el9.aarch64 | MISS PIGSTY - 0 | FORK PIGSTY 5.0.5 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| el10.x86_64 | MISS PIGSTY - 0 | FORK PIGSTY 5.0.5 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| el10.aarch64 | MISS PIGSTY - 0 | FORK PIGSTY 5.0.5 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| d12.x86_64 | MISS PIGSTY - 0 | FORK PIGSTY 5.0.5 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| d12.aarch64 | MISS PIGSTY - 0 | FORK PIGSTY 5.0.5 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| d13.x86_64 | MISS PIGSTY - 0 | FORK PIGSTY 5.0.5 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| d13.aarch64 | MISS PIGSTY - 0 | FORK PIGSTY 5.0.5 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| u22.x86_64 | MISS PIGSTY - 0 | FORK PIGSTY 5.0.5 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| u22.aarch64 | MISS PIGSTY - 0 | FORK PIGSTY 5.0.5 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| u24.x86_64 | MISS PIGSTY - 0 | FORK PIGSTY 5.0.5 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| u24.aarch64 | MISS PIGSTY - 0 | FORK PIGSTY 5.0.5 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
@ el8.x86_64 17 spock_17 spock_17-5.0.5-1PIGSTY.el8.x86_64.rpm pigsty 5.0.5 195.5KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/spock_17-5.0.5-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 17 spock_17 spock_17-5.0.5-1PIGSTY.el8.aarch64.rpm pigsty 5.0.5 185.9KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/spock_17-5.0.5-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 17 spock_17 spock_17-5.0.5-1PIGSTY.el9.x86_64.rpm pigsty 5.0.5 183.2KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/spock_17-5.0.5-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 17 spock_17 spock_17-5.0.5-1PIGSTY.el9.aarch64.rpm pigsty 5.0.5 179.2KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/spock_17-5.0.5-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 17 spock_17 spock_17-5.0.5-1PIGSTY.el10.x86_64.rpm pigsty 5.0.5 185.0KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/spock_17-5.0.5-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 17 spock_17 spock_17-5.0.5-1PIGSTY.el10.aarch64.rpm pigsty 5.0.5 180.9KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/spock_17-5.0.5-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 17 pgedge-17-spock pgedge-17-spock_5.0.5-1PIGSTY~bookworm_amd64.deb pigsty 5.0.5 166.6KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/s/spock/pgedge-17-spock_5.0.5-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 17 pgedge-17-spock pgedge-17-spock_5.0.5-1PIGSTY~bookworm_arm64.deb pigsty 5.0.5 154.0KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/s/spock/pgedge-17-spock_5.0.5-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 17 pgedge-17-spock pgedge-17-spock_5.0.5-1PIGSTY~trixie_amd64.deb pigsty 5.0.5 166.8KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/s/spock/pgedge-17-spock_5.0.5-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 17 pgedge-17-spock pgedge-17-spock_5.0.5-1PIGSTY~trixie_arm64.deb pigsty 5.0.5 155.0KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/s/spock/pgedge-17-spock_5.0.5-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 17 pgedge-17-spock pgedge-17-spock_5.0.5-1PIGSTY~jammy_amd64.deb pigsty 5.0.5 177.5KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/s/spock/pgedge-17-spock_5.0.5-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 17 pgedge-17-spock pgedge-17-spock_5.0.5-1PIGSTY~jammy_arm64.deb pigsty 5.0.5 172.0KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/s/spock/pgedge-17-spock_5.0.5-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 17 pgedge-17-spock pgedge-17-spock_5.0.5-1PIGSTY~noble_amd64.deb pigsty 5.0.5 173.6KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/s/spock/pgedge-17-spock_5.0.5-1PIGSTY~noble_amd64.deb
@ u24.aarch64 17 pgedge-17-spock pgedge-17-spock_5.0.5-1PIGSTY~noble_arm64.deb pigsty 5.0.5 167.8KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/s/spock/pgedge-17-spock_5.0.5-1PIGSTY~noble_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `spock` 扩展的 RPM / DEB 包：

```bash
pig build pkg spock         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `spock` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install spock;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y spock -v 17  # PG 17
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y spock_17       # PG 17
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y pgedge-17-spock   # PG 17
```
{{% /tab %}}
{{< /tabpane >}}


**预加载配置**：

```bash
shared_preload_libraries = 'spock';
```


**创建扩展**：

```sql
CREATE EXTENSION spock;
```
