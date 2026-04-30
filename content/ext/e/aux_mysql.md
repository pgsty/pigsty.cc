---
title: "aux_mysql"
linkTitle: "aux_mysql"
description: "MySQL兼容辅助扩展模块"
weight: 9420
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/HaloTech-Co-Ltd/openHalo">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">HaloTech-Co-Ltd/openHalo</div>
    <div class="ext-card__desc">https://github.com/HaloTech-Co-Ltd/openHalo</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/openhalodb-1.0.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">openhalodb-1.0.tar.gz</div>
    <div class="ext-card__desc">openhalodb-1.0.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`openhalo`**](/ext/e/aux_mysql) | `1.5` | <a class="ext-badge ext-badge--cate sim" href="/ext/cate/sim">SIM</a> | <a class="ext-badge ext-badge--license gpl30" href="/ext/license#gpl30">GPL-3.0</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 9420  | [**`aux_mysql`**](/ext/e/aux_mysql) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | `mysql` |
{.ext-table}


> module_pathname=$libdir/mysm; openHalo 14.x only


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#sim) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.5` | {{< pgvers "14" >}} | `openhalo` | - |
| [**RPM**](/ext/rpm#sim) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.0` | {{< pgvers "14" >}} | `openhalodb_$v` | - |
| [**DEB**](/ext/deb#sim) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.0` | {{< pgvers "14" >}} | `openhalodb-$v` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | FORK PIGSTY 1.0 1 |
| el8.aarch64 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | FORK PIGSTY 1.0 1 |
| el9.x86_64 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | FORK PIGSTY 1.0 1 |
| el9.aarch64 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | FORK PIGSTY 1.0 1 |
| el10.x86_64 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | FORK PIGSTY 1.0 1 |
| el10.aarch64 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | FORK PIGSTY 1.0 1 |
| d12.x86_64 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | FORK PIGSTY 1.0 1 |
| d12.aarch64 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | FORK PIGSTY 1.0 1 |
| d13.x86_64 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | FORK PIGSTY 1.0 1 |
| d13.aarch64 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | FORK PIGSTY 1.0 1 |
| u22.x86_64 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | FORK PIGSTY 1.0 1 |
| u22.aarch64 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | FORK PIGSTY 1.0 1 |
| u24.x86_64 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | FORK PIGSTY 1.0 1 |
| u24.aarch64 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | FORK PIGSTY 1.0 1 |
| u26.x86_64 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| u26.aarch64 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
@ el8.x86_64 14 openhalodb_14 openhalodb_14-1.0-beta1PIGSTY.el8.x86_64.rpm pigsty 1.0 10.2MiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/openhalodb_14-1.0-beta1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 14 openhalodb_14 openhalodb_14-1.0-beta1PIGSTY.el8.aarch64.rpm pigsty 1.0 9.8MiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/openhalodb_14-1.0-beta1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 14 openhalodb_14 openhalodb_14-1.0-beta1PIGSTY.el9.x86_64.rpm pigsty 1.0 9.8MiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/openhalodb_14-1.0-beta1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 14 openhalodb_14 openhalodb_14-1.0-beta1PIGSTY.el9.aarch64.rpm pigsty 1.0 9.7MiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/openhalodb_14-1.0-beta1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 14 openhalodb_14 openhalodb_14-1.0-beta1PIGSTY.el10.x86_64.rpm pigsty 1.0 10.0MiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/openhalodb_14-1.0-beta1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 14 openhalodb_14 openhalodb_14-1.0-beta1PIGSTY.el10.aarch64.rpm pigsty 1.0 9.8MiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/openhalodb_14-1.0-beta1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 14 openhalodb-14 openhalodb-14_1.0-beta1PIGSTY~bookworm_amd64.deb pigsty 1.0 19.4MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/o/openhalodb/openhalodb-14_1.0-beta1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 14 openhalodb-14 openhalodb-14_1.0-beta1PIGSTY~bookworm_arm64.deb pigsty 1.0 18.8MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/o/openhalodb/openhalodb-14_1.0-beta1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 14 openhalodb-14 openhalodb-14_1.0-beta1PIGSTY~trixie_amd64.deb pigsty 1.0 17.6MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/o/openhalodb/openhalodb-14_1.0-beta1PIGSTY~trixie_amd64.deb
@ d13.aarch64 14 openhalodb-14 openhalodb-14_1.0-beta1PIGSTY~trixie_arm64.deb pigsty 1.0 17.0MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/o/openhalodb/openhalodb-14_1.0-beta1PIGSTY~trixie_arm64.deb
@ u22.x86_64 14 openhalodb-14 openhalodb-14_1.0-beta1PIGSTY~jammy_amd64.deb pigsty 1.0 21.2MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/o/openhalodb/openhalodb-14_1.0-beta1PIGSTY~jammy_amd64.deb
@ u22.aarch64 14 openhalodb-14 openhalodb-14_1.0-beta1PIGSTY~jammy_arm64.deb pigsty 1.0 20.9MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/o/openhalodb/openhalodb-14_1.0-beta1PIGSTY~jammy_arm64.deb
@ u24.x86_64 14 openhalodb-14 openhalodb-14_1.0-beta1PIGSTY~noble_amd64.deb pigsty 1.0 19.5MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/o/openhalodb/openhalodb-14_1.0-beta1PIGSTY~noble_amd64.deb
@ u24.aarch64 14 openhalodb-14 openhalodb-14_1.0-beta1PIGSTY~noble_arm64.deb pigsty 1.0 19.3MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/o/openhalodb/openhalodb-14_1.0-beta1PIGSTY~noble_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `openhalo` 扩展的 RPM / DEB 包：

```bash
pig build pkg openhalo         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `openhalo` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install openhalo;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y openhalo -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y openhalodb_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y openhalodb-14   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**创建扩展**：

```sql
CREATE EXTENSION aux_mysql;
```



## 用法

> [aux_mysql: MySQL 补充扩展](https://github.com/HaloTech-Co-Ltd/openHalo)

`aux_mysql` 扩展是 openHalo 项目的一部分，为 PostgreSQL 提供 MySQL 兼容函数和特性。它使 PostgreSQL 能够理解 MySQL SQL 方言和通信协议。

### 启用

```sql
CREATE EXTENSION aux_mysql CASCADE;
```

### 概述

与 openHalo 的 MySQL 兼容模式配合使用时，该扩展允许：

- 通过 MySQL 线协议进行 MySQL 客户端连接（3306 端口）
- MySQL 兼容的 SQL 语法解析
- MySQL 兼容的函数和操作符

### MySQL 兼容模式

在 `postgresql.conf` 中配置：

```ini
database_compat_mode = 'mysql'      -- 启用 MySQL 模式
mysql.listener_on = true            -- 启用 MySQL 协议监听
mysql.port = 3306                   -- MySQL 协议端口
```

启用后，MySQL 客户端可以直接连接：

```bash
mysql -P 3306 -h 127.0.0.1
```

### 关键特性

- MySQL 兼容 SQL 方言支持
- MySQL 线协议兼容性（TDS）
- MySQL 风格认证（`mysql_native_password`）
- PostgreSQL 中可用常见 MySQL 函数和操作符

### 注意事项

- 该扩展设计为作为 openHalo 发行版的一部分使用
- 标准 PostgreSQL 连接在 MySQL 协议连接旁边继续工作
- 并非所有 MySQL 特性都受支持；专注于常用功能
