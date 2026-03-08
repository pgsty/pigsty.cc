---
title: "pg_retry"
linkTitle: "pg_retry"
description: "在临时错误中使用指数退避重试语句"
weight: 4100
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/Agent-Hellboy/pg_retry">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">Agent-Hellboy/pg_retry</div>
    <div class="ext-card__desc">https://github.com/Agent-Hellboy/pg_retry</div>
  </a>
  <a class="ext-card ext-card--source" href="pg_retry-1.0.0.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">pg_retry-1.0.0.tar.gz</div>
    <div class="ext-card__desc">pg_retry-1.0.0.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pg_retry`**](/ext/e/pg_retry) | `1.0.0` | <a class="ext-badge ext-badge--cate util" href="/ext/cate/util">UTIL</a> | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 4100  | [**`pg_retry`**](/ext/e/pg_retry) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | - |
{.ext-table}


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#util) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.0.0` | {{< pgvers "18,17" >}} | `pg_retry` | - |
| [**RPM**](/ext/rpm#util) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.0.0` | {{< pgvers "18,17" >}} | `pg_retry_$v` | - |
| [**DEB**](/ext/deb#util) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.0.0` | {{< pgvers "18,17" >}} | `postgresql-$v-retry` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| el8.aarch64 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| el9.x86_64 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| el9.aarch64 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| el10.x86_64 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| el10.aarch64 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| d12.x86_64 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| d12.aarch64 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| d13.x86_64 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| d13.aarch64 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| u22.x86_64 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| u22.aarch64 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| u24.x86_64 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| u24.aarch64 | AVAIL PIGSTY 1.0.0 1 | AVAIL PIGSTY 1.0.0 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
@ el8.x86_64 18 pg_retry_18 pg_retry_18-1.0.0-1PIGSTY.el8.x86_64.rpm pigsty 1.0.0 17.4KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/pg_retry_18-1.0.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 18 pg_retry_18 pg_retry_18-1.0.0-1PIGSTY.el8.aarch64.rpm pigsty 1.0.0 17.4KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/pg_retry_18-1.0.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 18 pg_retry_18 pg_retry_18-1.0.0-1PIGSTY.el9.x86_64.rpm pigsty 1.0.0 17.6KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/pg_retry_18-1.0.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 18 pg_retry_18 pg_retry_18-1.0.0-1PIGSTY.el9.aarch64.rpm pigsty 1.0.0 17.4KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/pg_retry_18-1.0.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 18 pg_retry_18 pg_retry_18-1.0.0-1PIGSTY.el10.x86_64.rpm pigsty 1.0.0 17.6KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/pg_retry_18-1.0.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 18 pg_retry_18 pg_retry_18-1.0.0-1PIGSTY.el10.aarch64.rpm pigsty 1.0.0 17.6KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/pg_retry_18-1.0.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-retry postgresql-18-retry_1.0.0-1PIGSTY~bookworm_amd64.deb pigsty 1.0.0 19.6KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg-retry/postgresql-18-retry_1.0.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-retry postgresql-18-retry_1.0.0-1PIGSTY~bookworm_arm64.deb pigsty 1.0.0 19.6KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg-retry/postgresql-18-retry_1.0.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-retry postgresql-18-retry_1.0.0-1PIGSTY~trixie_amd64.deb pigsty 1.0.0 19.6KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg-retry/postgresql-18-retry_1.0.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-retry postgresql-18-retry_1.0.0-1PIGSTY~trixie_arm64.deb pigsty 1.0.0 19.6KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg-retry/postgresql-18-retry_1.0.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-retry postgresql-18-retry_1.0.0-1PIGSTY~jammy_amd64.deb pigsty 1.0.0 20.5KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg-retry/postgresql-18-retry_1.0.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-retry postgresql-18-retry_1.0.0-1PIGSTY~jammy_arm64.deb pigsty 1.0.0 20.5KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg-retry/postgresql-18-retry_1.0.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-retry postgresql-18-retry_1.0.0-1PIGSTY~noble_amd64.deb pigsty 1.0.0 20.5KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg-retry/postgresql-18-retry_1.0.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-retry postgresql-18-retry_1.0.0-1PIGSTY~noble_arm64.deb pigsty 1.0.0 20.2KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg-retry/postgresql-18-retry_1.0.0-1PIGSTY~noble_arm64.deb
@ el8.x86_64 17 pg_retry_17 pg_retry_17-1.0.0-1PIGSTY.el8.x86_64.rpm pigsty 1.0.0 17.4KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/pg_retry_17-1.0.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 17 pg_retry_17 pg_retry_17-1.0.0-1PIGSTY.el8.aarch64.rpm pigsty 1.0.0 17.4KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/pg_retry_17-1.0.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 17 pg_retry_17 pg_retry_17-1.0.0-1PIGSTY.el9.x86_64.rpm pigsty 1.0.0 17.6KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/pg_retry_17-1.0.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 17 pg_retry_17 pg_retry_17-1.0.0-1PIGSTY.el9.aarch64.rpm pigsty 1.0.0 17.5KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/pg_retry_17-1.0.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 17 pg_retry_17 pg_retry_17-1.0.0-1PIGSTY.el10.x86_64.rpm pigsty 1.0.0 17.6KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/pg_retry_17-1.0.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 17 pg_retry_17 pg_retry_17-1.0.0-1PIGSTY.el10.aarch64.rpm pigsty 1.0.0 17.6KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/pg_retry_17-1.0.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-retry postgresql-17-retry_1.0.0-1PIGSTY~bookworm_amd64.deb pigsty 1.0.0 19.6KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg-retry/postgresql-17-retry_1.0.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-retry postgresql-17-retry_1.0.0-1PIGSTY~bookworm_arm64.deb pigsty 1.0.0 19.5KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pg-retry/postgresql-17-retry_1.0.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-retry postgresql-17-retry_1.0.0-1PIGSTY~trixie_amd64.deb pigsty 1.0.0 19.5KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg-retry/postgresql-17-retry_1.0.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-retry postgresql-17-retry_1.0.0-1PIGSTY~trixie_arm64.deb pigsty 1.0.0 19.5KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pg-retry/postgresql-17-retry_1.0.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-retry postgresql-17-retry_1.0.0-1PIGSTY~jammy_amd64.deb pigsty 1.0.0 21.3KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg-retry/postgresql-17-retry_1.0.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-retry postgresql-17-retry_1.0.0-1PIGSTY~jammy_arm64.deb pigsty 1.0.0 21.2KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pg-retry/postgresql-17-retry_1.0.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-retry postgresql-17-retry_1.0.0-1PIGSTY~noble_amd64.deb pigsty 1.0.0 20.5KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg-retry/postgresql-17-retry_1.0.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-retry postgresql-17-retry_1.0.0-1PIGSTY~noble_arm64.deb pigsty 1.0.0 20.3KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pg-retry/postgresql-17-retry_1.0.0-1PIGSTY~noble_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `pg_retry` 扩展的 RPM / DEB 包：

```bash
pig build pkg pg_retry         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `pg_retry` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install pg_retry;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y pg_retry -v 18  # PG 18
pig ext install -y pg_retry -v 17  # PG 17
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y pg_retry_18       # PG 18
dnf install -y pg_retry_17       # PG 17
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-retry   # PG 18
apt install -y postgresql-17-retry   # PG 17
```
{{% /tab %}}
{{< /tabpane >}}


**创建扩展**：

```sql
CREATE EXTENSION pg_retry;
```
