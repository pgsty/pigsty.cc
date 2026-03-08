---
title: "pg_dbms_errlog"
linkTitle: "pg_dbms_errlog"
description: "模仿 Oracle DBMS_ERRLOG 模块来记录特定表的DML错误"
weight: 9270
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/HexaCluster/pg_dbms_errlog">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">HexaCluster/pg_dbms_errlog</div>
    <div class="ext-card__desc">https://github.com/HexaCluster/pg_dbms_errlog</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pg_dbms_errlog`**](/ext/e/pg_dbms_errlog) | `2.2` | <a class="ext-badge ext-badge--cate sim" href="/ext/cate/sim">SIM</a> | <a class="ext-badge ext-badge--license isc" href="/ext/license#isc">ISC</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 9270  | [**`pg_dbms_errlog`**](/ext/e/pg_dbms_errlog) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | `dbms_errlog` |
{.ext-table}

| **相关扩展** | [`pg_dbms_metadata`](/ext/e/pg_dbms_metadata) [`pg_dbms_lock`](/ext/e/pg_dbms_lock) [`pg_dbms_job`](/ext/e/pg_dbms_job) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#sim) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `2.2` | {{< pgvers "18,17,16,15,14" >}} | `pg_dbms_errlog` | - |
| [**RPM**](/ext/rpm#sim) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `2.2` | {{< pgvers "18,17,16,15,14" >}} | `pg_dbms_errlog_$v` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PGDG 2.2 1 | AVAIL PGDG 2.2 1 | AVAIL PGDG 2.2 1 | AVAIL PGDG 2.2 1 | AVAIL PGDG 2.2 1 |
| el8.aarch64 | AVAIL PGDG 2.2 1 | AVAIL PGDG 2.2 1 | AVAIL PGDG 2.2 1 | AVAIL PGDG 2.2 1 | AVAIL PGDG 2.2 1 |
| el9.x86_64 | AVAIL PGDG 2.2 1 | AVAIL PGDG 2.2 1 | AVAIL PGDG 2.2 1 | AVAIL PGDG 2.2 1 | AVAIL PGDG 2.2 1 |
| el9.aarch64 | AVAIL PGDG 2.2 1 | AVAIL PGDG 2.2 1 | AVAIL PGDG 2.2 1 | AVAIL PGDG 2.2 1 | AVAIL PGDG 2.2 1 |
| el10.x86_64 | AVAIL PGDG 2.2 1 | AVAIL PGDG 2.2 1 | AVAIL PGDG 2.2 1 | AVAIL PGDG 2.2 1 | AVAIL PGDG 2.2 1 |
| el10.aarch64 | AVAIL PGDG 2.2 1 | AVAIL PGDG 2.2 1 | AVAIL PGDG 2.2 1 | AVAIL PGDG 2.2 1 | AVAIL PGDG 2.2 1 |
| d12.x86_64 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 |
| d12.aarch64 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 |
| d13.x86_64 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 |
| d13.aarch64 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 |
| u22.x86_64 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 |
| u22.aarch64 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 |
| u24.x86_64 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 |
| u24.aarch64 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 |
@ el8.x86_64 18 pg_dbms_errlog_18 pg_dbms_errlog_18-2.2-1PGDG.rhel8.x86_64.rpm pgdg 2.2 32.0KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-8-x86_64/pg_dbms_errlog_18-2.2-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 18 pg_dbms_errlog_18 pg_dbms_errlog_18-2.2-1PGDG.rhel8.aarch64.rpm pgdg 2.2 31.3KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-8-aarch64/pg_dbms_errlog_18-2.2-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 18 pg_dbms_errlog_18 pg_dbms_errlog_18-2.2-1PGDG.rhel9.x86_64.rpm pgdg 2.2 32.0KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-9-x86_64/pg_dbms_errlog_18-2.2-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 18 pg_dbms_errlog_18 pg_dbms_errlog_18-2.2-1PGDG.rhel9.aarch64.rpm pgdg 2.2 31.6KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-9-aarch64/pg_dbms_errlog_18-2.2-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 18 pg_dbms_errlog_18 pg_dbms_errlog_18-2.2-1PGDG.rhel10.x86_64.rpm pgdg 2.2 32.6KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-10-x86_64/pg_dbms_errlog_18-2.2-1PGDG.rhel10.x86_64.rpm
@ el10.aarch64 18 pg_dbms_errlog_18 pg_dbms_errlog_18-2.2-1PGDG.rhel10.aarch64.rpm pgdg 2.2 32.2KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-10-aarch64/pg_dbms_errlog_18-2.2-1PGDG.rhel10.aarch64.rpm
@ el8.x86_64 17 pg_dbms_errlog_17 pg_dbms_errlog_17-2.2-1PGDG.rhel8.x86_64.rpm pgdg 2.2 32.0KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-8-x86_64/pg_dbms_errlog_17-2.2-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 17 pg_dbms_errlog_17 pg_dbms_errlog_17-2.2-1PGDG.rhel8.aarch64.rpm pgdg 2.2 31.3KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-8-aarch64/pg_dbms_errlog_17-2.2-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 17 pg_dbms_errlog_17 pg_dbms_errlog_17-2.2-1PGDG.rhel9.x86_64.rpm pgdg 2.2 32.0KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-9-x86_64/pg_dbms_errlog_17-2.2-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 17 pg_dbms_errlog_17 pg_dbms_errlog_17-2.2-1PGDG.rhel9.aarch64.rpm pgdg 2.2 31.6KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-9-aarch64/pg_dbms_errlog_17-2.2-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 17 pg_dbms_errlog_17 pg_dbms_errlog_17-2.2-1PGDG.rhel10.x86_64.rpm pgdg 2.2 32.6KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-10-x86_64/pg_dbms_errlog_17-2.2-1PGDG.rhel10.x86_64.rpm
@ el10.aarch64 17 pg_dbms_errlog_17 pg_dbms_errlog_17-2.2-1PGDG.rhel10.aarch64.rpm pgdg 2.2 32.3KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-10-aarch64/pg_dbms_errlog_17-2.2-1PGDG.rhel10.aarch64.rpm
@ el8.x86_64 16 pg_dbms_errlog_16 pg_dbms_errlog_16-2.2-1PGDG.rhel8.x86_64.rpm pgdg 2.2 32.0KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-x86_64/pg_dbms_errlog_16-2.2-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 16 pg_dbms_errlog_16 pg_dbms_errlog_16-2.2-1PGDG.rhel8.aarch64.rpm pgdg 2.2 31.3KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-aarch64/pg_dbms_errlog_16-2.2-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 16 pg_dbms_errlog_16 pg_dbms_errlog_16-2.2-1PGDG.rhel9.x86_64.rpm pgdg 2.2 32.0KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-x86_64/pg_dbms_errlog_16-2.2-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 16 pg_dbms_errlog_16 pg_dbms_errlog_16-2.2-1PGDG.rhel9.aarch64.rpm pgdg 2.2 31.6KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-aarch64/pg_dbms_errlog_16-2.2-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 16 pg_dbms_errlog_16 pg_dbms_errlog_16-2.2-1PGDG.rhel10.x86_64.rpm pgdg 2.2 32.6KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-10-x86_64/pg_dbms_errlog_16-2.2-1PGDG.rhel10.x86_64.rpm
@ el10.aarch64 16 pg_dbms_errlog_16 pg_dbms_errlog_16-2.2-1PGDG.rhel10.aarch64.rpm pgdg 2.2 32.2KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-10-aarch64/pg_dbms_errlog_16-2.2-1PGDG.rhel10.aarch64.rpm
@ el8.x86_64 15 pg_dbms_errlog_15 pg_dbms_errlog_15-2.2-1PGDG.rhel8.x86_64.rpm pgdg 2.2 32.6KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-x86_64/pg_dbms_errlog_15-2.2-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 15 pg_dbms_errlog_15 pg_dbms_errlog_15-2.2-1PGDG.rhel8.aarch64.rpm pgdg 2.2 31.8KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-aarch64/pg_dbms_errlog_15-2.2-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 15 pg_dbms_errlog_15 pg_dbms_errlog_15-2.2-1PGDG.rhel9.x86_64.rpm pgdg 2.2 33.1KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-x86_64/pg_dbms_errlog_15-2.2-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 15 pg_dbms_errlog_15 pg_dbms_errlog_15-2.2-1PGDG.rhel9.aarch64.rpm pgdg 2.2 32.7KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-aarch64/pg_dbms_errlog_15-2.2-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 15 pg_dbms_errlog_15 pg_dbms_errlog_15-2.2-1PGDG.rhel10.x86_64.rpm pgdg 2.2 33.5KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-10-x86_64/pg_dbms_errlog_15-2.2-1PGDG.rhel10.x86_64.rpm
@ el10.aarch64 15 pg_dbms_errlog_15 pg_dbms_errlog_15-2.2-1PGDG.rhel10.aarch64.rpm pgdg 2.2 33.2KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-10-aarch64/pg_dbms_errlog_15-2.2-1PGDG.rhel10.aarch64.rpm
@ el8.x86_64 14 pg_dbms_errlog_14 pg_dbms_errlog_14-2.2-1PGDG.rhel8.x86_64.rpm pgdg 2.2 32.5KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-x86_64/pg_dbms_errlog_14-2.2-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 14 pg_dbms_errlog_14 pg_dbms_errlog_14-2.2-1PGDG.rhel8.aarch64.rpm pgdg 2.2 31.8KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-aarch64/pg_dbms_errlog_14-2.2-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 14 pg_dbms_errlog_14 pg_dbms_errlog_14-2.2-1PGDG.rhel9.x86_64.rpm pgdg 2.2 33.1KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-x86_64/pg_dbms_errlog_14-2.2-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 14 pg_dbms_errlog_14 pg_dbms_errlog_14-2.2-1PGDG.rhel9.aarch64.rpm pgdg 2.2 32.6KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-aarch64/pg_dbms_errlog_14-2.2-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 14 pg_dbms_errlog_14 pg_dbms_errlog_14-2.2-1PGDG.rhel10.x86_64.rpm pgdg 2.2 33.4KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-10-x86_64/pg_dbms_errlog_14-2.2-1PGDG.rhel10.x86_64.rpm
@ el10.aarch64 14 pg_dbms_errlog_14 pg_dbms_errlog_14-2.2-1PGDG.rhel10.aarch64.rpm pgdg 2.2 33.1KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-10-aarch64/pg_dbms_errlog_14-2.2-1PGDG.rhel10.aarch64.rpm
{{< /pgext_matrix >}}


## 安装

您可以直接安装 `pg_dbms_errlog` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 仓库已经添加并启用：

```bash
pig repo add pgdg -u          # 添加 PGDG 仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install pg_dbms_errlog;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y pg_dbms_errlog -v 18  # PG 18
pig ext install -y pg_dbms_errlog -v 17  # PG 17
pig ext install -y pg_dbms_errlog -v 16  # PG 16
pig ext install -y pg_dbms_errlog -v 15  # PG 15
pig ext install -y pg_dbms_errlog -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y pg_dbms_errlog_18       # PG 18
dnf install -y pg_dbms_errlog_17       # PG 17
dnf install -y pg_dbms_errlog_16       # PG 16
dnf install -y pg_dbms_errlog_15       # PG 15
dnf install -y pg_dbms_errlog_14       # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**创建扩展**：

```sql
CREATE EXTENSION pg_dbms_errlog;
```
