---
title: "pgagent"
linkTitle: "pgagent"
description: "PostgreSQL任务调度工具，与PGADMIN配合使用"
weight: 5880
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://www.pgadmin.org/docs/pgadmin4/development/pgagent.html">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">https://www.pgadmin.org/docs/pgadmin4/development/pgagent.html</div>
    <div class="ext-card__desc">https://www.pgadmin.org/docs/pgadmin4/development/pgagent.html</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pgagent`**](/ext/e/pgagent) | `4.2.3` | <a class="ext-badge ext-badge--cate admin" href="/ext/cate/admin">ADMIN</a> | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 5880  | [**`pgagent`**](/ext/e/pgagent) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | - |
{.ext-table}

| **相关扩展** | [`pg_cron`](/ext/e/pg_cron) [`pg_task`](/ext/e/pg_task) [`pg_jobmon`](/ext/e/pg_jobmon) [`pg_partman`](/ext/e/pg_partman) [`pglogical`](/ext/e/pglogical) [`pg_background`](/ext/e/pg_background) [`pg_repack`](/ext/e/pg_repack) [`pg_rewrite`](/ext/e/pg_rewrite) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#admin) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `4.2.3` | {{< pgvers "18,17,16,15,14" >}} | `pgagent` | - |
| [**RPM**](/ext/rpm#admin) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `4.2.3` | {{< pgvers "18,17,16,15,14" >}} | `pgagent_$v` | - |
| [**DEB**](/ext/deb#admin) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `4.2.3` | {{< pgvers "18,17,16,15,14" >}} | `pgagent` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PGDG 4.2.3 1 | AVAIL PGDG 4.2.3 2 | AVAIL PGDG 4.2.3 2 | AVAIL PGDG 4.2.3 2 | AVAIL PGDG 4.2.3 3 |
| el8.aarch64 | AVAIL PGDG 4.2.3 1 | AVAIL PGDG 4.2.3 2 | AVAIL PGDG 4.2.3 2 | AVAIL PGDG 4.2.3 2 | AVAIL PGDG 4.2.3 2 |
| el9.x86_64 | AVAIL PGDG 4.2.3 1 | AVAIL PGDG 4.2.3 2 | AVAIL PGDG 4.2.3 2 | AVAIL PGDG 4.2.3 2 | AVAIL PGDG 4.2.3 3 |
| el9.aarch64 | AVAIL PGDG 4.2.3 1 | AVAIL PGDG 4.2.3 2 | AVAIL PGDG 4.2.3 2 | AVAIL PGDG 4.2.3 2 | AVAIL PGDG 4.2.3 2 |
| el10.x86_64 | AVAIL PGDG 4.2.3 1 | AVAIL PGDG 4.2.3 1 | AVAIL PGDG 4.2.3 1 | AVAIL PGDG 4.2.3 1 | AVAIL PGDG 4.2.3 1 |
| el10.aarch64 | AVAIL PGDG 4.2.3 1 | AVAIL PGDG 4.2.3 1 | AVAIL PGDG 4.2.3 1 | AVAIL PGDG 4.2.3 1 | AVAIL PGDG 4.2.3 1 |
| d12.x86_64 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 |
| d12.aarch64 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 |
| d13.x86_64 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 |
| d13.aarch64 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 |
| u22.x86_64 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 |
| u22.aarch64 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 |
| u24.x86_64 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 |
| u24.aarch64 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 |
@ el8.x86_64 18 pgagent_18 pgagent_18-4.2.3-1PGDG.rhel8.x86_64.rpm pgdg 4.2.3 135.5KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-8-x86_64/pgagent_18-4.2.3-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 18 pgagent_18 pgagent_18-4.2.3-1PGDG.rhel8.aarch64.rpm pgdg 4.2.3 129.6KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-8-aarch64/pgagent_18-4.2.3-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 18 pgagent_18 pgagent_18-4.2.3-1PGDG.rhel9.x86_64.rpm pgdg 4.2.3 121.5KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-9-x86_64/pgagent_18-4.2.3-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 18 pgagent_18 pgagent_18-4.2.3-1PGDG.rhel9.aarch64.rpm pgdg 4.2.3 117.8KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-9-aarch64/pgagent_18-4.2.3-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 18 pgagent_18 pgagent_18-4.2.3-1PGDG.rhel10.x86_64.rpm pgdg 4.2.3 126.9KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-10-x86_64/pgagent_18-4.2.3-1PGDG.rhel10.x86_64.rpm
@ el10.aarch64 18 pgagent_18 pgagent_18-4.2.3-1PGDG.rhel10.aarch64.rpm pgdg 4.2.3 116.6KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-10-aarch64/pgagent_18-4.2.3-1PGDG.rhel10.aarch64.rpm
@ el8.x86_64 17 pgagent_17 pgagent_17-4.2.3-1PGDG.rhel8.x86_64.rpm pgdg 4.2.3 135.5KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-8-x86_64/pgagent_17-4.2.3-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 17 pgagent_17 pgagent_17-4.2.2-5PGDG.rhel8.x86_64.rpm pgdg 4.2.2 133.9KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-8-x86_64/pgagent_17-4.2.2-5PGDG.rhel8.x86_64.rpm
@ el8.aarch64 17 pgagent_17 pgagent_17-4.2.3-1PGDG.rhel8.aarch64.rpm pgdg 4.2.3 129.6KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-8-aarch64/pgagent_17-4.2.3-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 17 pgagent_17 pgagent_17-4.2.2-5PGDG.rhel8.aarch64.rpm pgdg 4.2.2 128.2KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-8-aarch64/pgagent_17-4.2.2-5PGDG.rhel8.aarch64.rpm
@ el9.x86_64 17 pgagent_17 pgagent_17-4.2.3-1PGDG.rhel9.x86_64.rpm pgdg 4.2.3 121.9KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-9-x86_64/pgagent_17-4.2.3-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 17 pgagent_17 pgagent_17-4.2.2-5PGDG.rhel9.x86_64.rpm pgdg 4.2.2 120.3KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-9-x86_64/pgagent_17-4.2.2-5PGDG.rhel9.x86_64.rpm
@ el9.aarch64 17 pgagent_17 pgagent_17-4.2.3-1PGDG.rhel9.aarch64.rpm pgdg 4.2.3 118.0KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-9-aarch64/pgagent_17-4.2.3-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 17 pgagent_17 pgagent_17-4.2.2-5PGDG.rhel9.aarch64.rpm pgdg 4.2.2 116.7KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-9-aarch64/pgagent_17-4.2.2-5PGDG.rhel9.aarch64.rpm
@ el10.x86_64 17 pgagent_17 pgagent_17-4.2.3-1PGDG.rhel10.x86_64.rpm pgdg 4.2.3 126.9KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-10-x86_64/pgagent_17-4.2.3-1PGDG.rhel10.x86_64.rpm
@ el10.aarch64 17 pgagent_17 pgagent_17-4.2.3-1PGDG.rhel10.aarch64.rpm pgdg 4.2.3 116.6KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-10-aarch64/pgagent_17-4.2.3-1PGDG.rhel10.aarch64.rpm
@ el8.x86_64 16 pgagent_16 pgagent_16-4.2.3-1PGDG.rhel8.x86_64.rpm pgdg 4.2.3 135.5KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-x86_64/pgagent_16-4.2.3-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 pgagent_16 pgagent_16-4.2.2-3.rhel8.x86_64.rpm pgdg 4.2.2 133.5KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-x86_64/pgagent_16-4.2.2-3.rhel8.x86_64.rpm
@ el8.aarch64 16 pgagent_16 pgagent_16-4.2.3-1PGDG.rhel8.aarch64.rpm pgdg 4.2.3 129.6KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-aarch64/pgagent_16-4.2.3-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 pgagent_16 pgagent_16-4.2.2-3.rhel8.aarch64.rpm pgdg 4.2.2 127.9KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-aarch64/pgagent_16-4.2.2-3.rhel8.aarch64.rpm
@ el9.x86_64 16 pgagent_16 pgagent_16-4.2.3-1PGDG.rhel9.x86_64.rpm pgdg 4.2.3 122.0KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-x86_64/pgagent_16-4.2.3-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 pgagent_16 pgagent_16-4.2.2-3.rhel9.x86_64.rpm pgdg 4.2.2 120.0KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-x86_64/pgagent_16-4.2.2-3.rhel9.x86_64.rpm
@ el9.aarch64 16 pgagent_16 pgagent_16-4.2.3-1PGDG.rhel9.aarch64.rpm pgdg 4.2.3 118.0KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-aarch64/pgagent_16-4.2.3-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 16 pgagent_16 pgagent_16-4.2.2-3.rhel9.aarch64.rpm pgdg 4.2.2 116.4KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-aarch64/pgagent_16-4.2.2-3.rhel9.aarch64.rpm
@ el10.x86_64 16 pgagent_16 pgagent_16-4.2.3-1PGDG.rhel10.x86_64.rpm pgdg 4.2.3 126.9KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-10-x86_64/pgagent_16-4.2.3-1PGDG.rhel10.x86_64.rpm
@ el10.aarch64 16 pgagent_16 pgagent_16-4.2.3-1PGDG.rhel10.aarch64.rpm pgdg 4.2.3 116.6KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-10-aarch64/pgagent_16-4.2.3-1PGDG.rhel10.aarch64.rpm
@ el8.x86_64 15 pgagent_15 pgagent_15-4.2.3-1PGDG.rhel8.x86_64.rpm pgdg 4.2.3 135.5KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-x86_64/pgagent_15-4.2.3-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 pgagent_15 pgagent_15-4.2.2-1.rhel8.x86_64.rpm pgdg 4.2.2 133.4KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-x86_64/pgagent_15-4.2.2-1.rhel8.x86_64.rpm
@ el8.aarch64 15 pgagent_15 pgagent_15-4.2.3-1PGDG.rhel8.aarch64.rpm pgdg 4.2.3 129.6KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-aarch64/pgagent_15-4.2.3-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 pgagent_15 pgagent_15-4.2.2-1.rhel8.aarch64.rpm pgdg 4.2.2 127.7KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-aarch64/pgagent_15-4.2.2-1.rhel8.aarch64.rpm
@ el9.x86_64 15 pgagent_15 pgagent_15-4.2.3-1PGDG.rhel9.x86_64.rpm pgdg 4.2.3 122.0KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-x86_64/pgagent_15-4.2.3-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 pgagent_15 pgagent_15-4.2.2-1.rhel9.x86_64.rpm pgdg 4.2.2 119.1KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-x86_64/pgagent_15-4.2.2-1.rhel9.x86_64.rpm
@ el9.aarch64 15 pgagent_15 pgagent_15-4.2.3-1PGDG.rhel9.aarch64.rpm pgdg 4.2.3 118.1KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-aarch64/pgagent_15-4.2.3-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 pgagent_15 pgagent_15-4.2.2-1.rhel9.aarch64.rpm pgdg 4.2.2 114.4KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-aarch64/pgagent_15-4.2.2-1.rhel9.aarch64.rpm
@ el10.x86_64 15 pgagent_15 pgagent_15-4.2.3-1PGDG.rhel10.x86_64.rpm pgdg 4.2.3 126.9KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-10-x86_64/pgagent_15-4.2.3-1PGDG.rhel10.x86_64.rpm
@ el10.aarch64 15 pgagent_15 pgagent_15-4.2.3-1PGDG.rhel10.aarch64.rpm pgdg 4.2.3 116.6KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-10-aarch64/pgagent_15-4.2.3-1PGDG.rhel10.aarch64.rpm
@ el8.x86_64 14 pgagent_14 pgagent_14-4.2.3-1PGDG.rhel8.x86_64.rpm pgdg 4.2.3 135.5KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-x86_64/pgagent_14-4.2.3-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 pgagent_14 pgagent_14-4.2.2-1.rhel8.x86_64.rpm pgdg 4.2.2 133.4KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-x86_64/pgagent_14-4.2.2-1.rhel8.x86_64.rpm
@ el8.x86_64 14 pgagent_14 pgagent_14-4.2.1-1.rhel8.x86_64.rpm pgdg 4.2.1 153.1KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-x86_64/pgagent_14-4.2.1-1.rhel8.x86_64.rpm
@ el8.aarch64 14 pgagent_14 pgagent_14-4.2.3-1PGDG.rhel8.aarch64.rpm pgdg 4.2.3 129.6KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-aarch64/pgagent_14-4.2.3-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 pgagent_14 pgagent_14-4.2.2-1.rhel8.aarch64.rpm pgdg 4.2.2 127.7KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-aarch64/pgagent_14-4.2.2-1.rhel8.aarch64.rpm
@ el9.x86_64 14 pgagent_14 pgagent_14-4.2.3-1PGDG.rhel9.x86_64.rpm pgdg 4.2.3 122.0KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-x86_64/pgagent_14-4.2.3-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 pgagent_14 pgagent_14-4.2.2-1.rhel9.x86_64.rpm pgdg 4.2.2 119.1KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-x86_64/pgagent_14-4.2.2-1.rhel9.x86_64.rpm
@ el9.x86_64 14 pgagent_14 pgagent_14-4.2.1-1.rhel9.x86_64.rpm pgdg 4.2.1 138.6KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-x86_64/pgagent_14-4.2.1-1.rhel9.x86_64.rpm
@ el9.aarch64 14 pgagent_14 pgagent_14-4.2.3-1PGDG.rhel9.aarch64.rpm pgdg 4.2.3 118.0KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-aarch64/pgagent_14-4.2.3-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 pgagent_14 pgagent_14-4.2.2-1.rhel9.aarch64.rpm pgdg 4.2.2 114.4KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-aarch64/pgagent_14-4.2.2-1.rhel9.aarch64.rpm
@ el10.x86_64 14 pgagent_14 pgagent_14-4.2.3-1PGDG.rhel10.x86_64.rpm pgdg 4.2.3 126.9KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-10-x86_64/pgagent_14-4.2.3-1PGDG.rhel10.x86_64.rpm
@ el10.aarch64 14 pgagent_14 pgagent_14-4.2.3-1PGDG.rhel10.aarch64.rpm pgdg 4.2.3 116.7KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-10-aarch64/pgagent_14-4.2.3-1PGDG.rhel10.aarch64.rpm
{{< /pgext_matrix >}}


## 安装

您可以直接安装 `pgagent` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 仓库已经添加并启用：

```bash
pig repo add pgdg -u          # 添加 PGDG 仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install pgagent;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y pgagent -v 18  # PG 18
pig ext install -y pgagent -v 17  # PG 17
pig ext install -y pgagent -v 16  # PG 16
pig ext install -y pgagent -v 15  # PG 15
pig ext install -y pgagent -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y pgagent_18       # PG 18
dnf install -y pgagent_17       # PG 17
dnf install -y pgagent_16       # PG 16
dnf install -y pgagent_15       # PG 15
dnf install -y pgagent_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y pgagent   # PG 18
apt install -y pgagent   # PG 17
apt install -y pgagent   # PG 16
apt install -y pgagent   # PG 15
apt install -y pgagent   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**创建扩展**：

```sql
CREATE EXTENSION pgagent;
```
