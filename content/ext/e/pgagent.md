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
| u26.x86_64 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 |
| u26.aarch64 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 |
@ el8.x86_64 18 pgagent_18 pgagent_18-4.2.3-1PGDG.rhel8.x86_64.rpm pgdg 4.2.3 135.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-x86_64/pgagent_18-4.2.3-1PGDG.rhel8.x86_64.rpm
@ el8.aarch64 18 pgagent_18 pgagent_18-4.2.3-1PGDG.rhel8.aarch64.rpm pgdg 4.2.3 129.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-aarch64/pgagent_18-4.2.3-1PGDG.rhel8.aarch64.rpm
@ el9.x86_64 18 pgagent_18 pgagent_18-4.2.3-1PGDG.rhel9.x86_64.rpm pgdg 4.2.3 121.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/pgagent_18-4.2.3-1PGDG.rhel9.x86_64.rpm
@ el9.aarch64 18 pgagent_18 pgagent_18-4.2.3-1PGDG.rhel9.aarch64.rpm pgdg 4.2.3 117.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/pgagent_18-4.2.3-1PGDG.rhel9.aarch64.rpm
@ el10.x86_64 18 pgagent_18 pgagent_18-4.2.3-1PGDG.rhel10.x86_64.rpm pgdg 4.2.3 126.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/pgagent_18-4.2.3-1PGDG.rhel10.x86_64.rpm
@ el10.aarch64 18 pgagent_18 pgagent_18-4.2.3-1PGDG.rhel10.aarch64.rpm pgdg 4.2.3 116.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/pgagent_18-4.2.3-1PGDG.rhel10.aarch64.rpm
@ el8.x86_64 17 pgagent_17 pgagent_17-4.2.3-1PGDG.rhel8.x86_64.rpm pgdg 4.2.3 135.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/pgagent_17-4.2.3-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 17 pgagent_17 pgagent_17-4.2.2-5PGDG.rhel8.x86_64.rpm pgdg 4.2.2 133.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/pgagent_17-4.2.2-5PGDG.rhel8.x86_64.rpm
@ el8.aarch64 17 pgagent_17 pgagent_17-4.2.3-1PGDG.rhel8.aarch64.rpm pgdg 4.2.3 129.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/pgagent_17-4.2.3-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 17 pgagent_17 pgagent_17-4.2.2-5PGDG.rhel8.aarch64.rpm pgdg 4.2.2 128.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/pgagent_17-4.2.2-5PGDG.rhel8.aarch64.rpm
@ el9.x86_64 17 pgagent_17 pgagent_17-4.2.3-1PGDG.rhel9.x86_64.rpm pgdg 4.2.3 121.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/pgagent_17-4.2.3-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 17 pgagent_17 pgagent_17-4.2.2-5PGDG.rhel9.x86_64.rpm pgdg 4.2.2 120.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/pgagent_17-4.2.2-5PGDG.rhel9.x86_64.rpm
@ el9.aarch64 17 pgagent_17 pgagent_17-4.2.3-1PGDG.rhel9.aarch64.rpm pgdg 4.2.3 118.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/pgagent_17-4.2.3-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 17 pgagent_17 pgagent_17-4.2.2-5PGDG.rhel9.aarch64.rpm pgdg 4.2.2 116.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/pgagent_17-4.2.2-5PGDG.rhel9.aarch64.rpm
@ el10.x86_64 17 pgagent_17 pgagent_17-4.2.3-1PGDG.rhel10.x86_64.rpm pgdg 4.2.3 126.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/pgagent_17-4.2.3-1PGDG.rhel10.x86_64.rpm
@ el10.aarch64 17 pgagent_17 pgagent_17-4.2.3-1PGDG.rhel10.aarch64.rpm pgdg 4.2.3 116.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/pgagent_17-4.2.3-1PGDG.rhel10.aarch64.rpm
@ el8.x86_64 16 pgagent_16 pgagent_16-4.2.3-1PGDG.rhel8.x86_64.rpm pgdg 4.2.3 135.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/pgagent_16-4.2.3-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 16 pgagent_16 pgagent_16-4.2.2-3.rhel8.x86_64.rpm pgdg 4.2.2 133.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/pgagent_16-4.2.2-3.rhel8.x86_64.rpm
@ el8.aarch64 16 pgagent_16 pgagent_16-4.2.3-1PGDG.rhel8.aarch64.rpm pgdg 4.2.3 129.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/pgagent_16-4.2.3-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 16 pgagent_16 pgagent_16-4.2.2-3.rhel8.aarch64.rpm pgdg 4.2.2 127.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/pgagent_16-4.2.2-3.rhel8.aarch64.rpm
@ el9.x86_64 16 pgagent_16 pgagent_16-4.2.3-1PGDG.rhel9.x86_64.rpm pgdg 4.2.3 122.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/pgagent_16-4.2.3-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 16 pgagent_16 pgagent_16-4.2.2-3.rhel9.x86_64.rpm pgdg 4.2.2 120.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/pgagent_16-4.2.2-3.rhel9.x86_64.rpm
@ el9.aarch64 16 pgagent_16 pgagent_16-4.2.3-1PGDG.rhel9.aarch64.rpm pgdg 4.2.3 118.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/pgagent_16-4.2.3-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 16 pgagent_16 pgagent_16-4.2.2-3.rhel9.aarch64.rpm pgdg 4.2.2 116.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/pgagent_16-4.2.2-3.rhel9.aarch64.rpm
@ el10.x86_64 16 pgagent_16 pgagent_16-4.2.3-1PGDG.rhel10.x86_64.rpm pgdg 4.2.3 126.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/pgagent_16-4.2.3-1PGDG.rhel10.x86_64.rpm
@ el10.aarch64 16 pgagent_16 pgagent_16-4.2.3-1PGDG.rhel10.aarch64.rpm pgdg 4.2.3 116.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/pgagent_16-4.2.3-1PGDG.rhel10.aarch64.rpm
@ el8.x86_64 15 pgagent_15 pgagent_15-4.2.3-1PGDG.rhel8.x86_64.rpm pgdg 4.2.3 135.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/pgagent_15-4.2.3-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 15 pgagent_15 pgagent_15-4.2.2-1.rhel8.x86_64.rpm pgdg 4.2.2 133.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/pgagent_15-4.2.2-1.rhel8.x86_64.rpm
@ el8.aarch64 15 pgagent_15 pgagent_15-4.2.3-1PGDG.rhel8.aarch64.rpm pgdg 4.2.3 129.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/pgagent_15-4.2.3-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 15 pgagent_15 pgagent_15-4.2.2-1.rhel8.aarch64.rpm pgdg 4.2.2 127.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/pgagent_15-4.2.2-1.rhel8.aarch64.rpm
@ el9.x86_64 15 pgagent_15 pgagent_15-4.2.3-1PGDG.rhel9.x86_64.rpm pgdg 4.2.3 122.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pgagent_15-4.2.3-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 15 pgagent_15 pgagent_15-4.2.2-1.rhel9.x86_64.rpm pgdg 4.2.2 119.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pgagent_15-4.2.2-1.rhel9.x86_64.rpm
@ el9.aarch64 15 pgagent_15 pgagent_15-4.2.3-1PGDG.rhel9.aarch64.rpm pgdg 4.2.3 118.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/pgagent_15-4.2.3-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 15 pgagent_15 pgagent_15-4.2.2-1.rhel9.aarch64.rpm pgdg 4.2.2 114.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/pgagent_15-4.2.2-1.rhel9.aarch64.rpm
@ el10.x86_64 15 pgagent_15 pgagent_15-4.2.3-1PGDG.rhel10.x86_64.rpm pgdg 4.2.3 126.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/pgagent_15-4.2.3-1PGDG.rhel10.x86_64.rpm
@ el10.aarch64 15 pgagent_15 pgagent_15-4.2.3-1PGDG.rhel10.aarch64.rpm pgdg 4.2.3 116.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/pgagent_15-4.2.3-1PGDG.rhel10.aarch64.rpm
@ el8.x86_64 14 pgagent_14 pgagent_14-4.2.3-1PGDG.rhel8.x86_64.rpm pgdg 4.2.3 135.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pgagent_14-4.2.3-1PGDG.rhel8.x86_64.rpm
@ el8.x86_64 14 pgagent_14 pgagent_14-4.2.2-1.rhel8.x86_64.rpm pgdg 4.2.2 133.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pgagent_14-4.2.2-1.rhel8.x86_64.rpm
@ el8.x86_64 14 pgagent_14 pgagent_14-4.2.1-1.rhel8.x86_64.rpm pgdg 4.2.1 153.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pgagent_14-4.2.1-1.rhel8.x86_64.rpm
@ el8.aarch64 14 pgagent_14 pgagent_14-4.2.3-1PGDG.rhel8.aarch64.rpm pgdg 4.2.3 129.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/pgagent_14-4.2.3-1PGDG.rhel8.aarch64.rpm
@ el8.aarch64 14 pgagent_14 pgagent_14-4.2.2-1.rhel8.aarch64.rpm pgdg 4.2.2 127.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/pgagent_14-4.2.2-1.rhel8.aarch64.rpm
@ el9.x86_64 14 pgagent_14 pgagent_14-4.2.3-1PGDG.rhel9.x86_64.rpm pgdg 4.2.3 122.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pgagent_14-4.2.3-1PGDG.rhel9.x86_64.rpm
@ el9.x86_64 14 pgagent_14 pgagent_14-4.2.2-1.rhel9.x86_64.rpm pgdg 4.2.2 119.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pgagent_14-4.2.2-1.rhel9.x86_64.rpm
@ el9.x86_64 14 pgagent_14 pgagent_14-4.2.1-1.rhel9.x86_64.rpm pgdg 4.2.1 138.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pgagent_14-4.2.1-1.rhel9.x86_64.rpm
@ el9.aarch64 14 pgagent_14 pgagent_14-4.2.3-1PGDG.rhel9.aarch64.rpm pgdg 4.2.3 118.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/pgagent_14-4.2.3-1PGDG.rhel9.aarch64.rpm
@ el9.aarch64 14 pgagent_14 pgagent_14-4.2.2-1.rhel9.aarch64.rpm pgdg 4.2.2 114.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/pgagent_14-4.2.2-1.rhel9.aarch64.rpm
@ el10.x86_64 14 pgagent_14 pgagent_14-4.2.3-1PGDG.rhel10.x86_64.rpm pgdg 4.2.3 126.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/pgagent_14-4.2.3-1PGDG.rhel10.x86_64.rpm
@ el10.aarch64 14 pgagent_14 pgagent_14-4.2.3-1PGDG.rhel10.aarch64.rpm pgdg 4.2.3 116.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/pgagent_14-4.2.3-1PGDG.rhel10.aarch64.rpm
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



## 用法

> [pgagent: PostgreSQL 作业调度器](https://www.pgadmin.org/docs/pgadmin4/development/pgagent.html)

pgAgent 是 PostgreSQL 的作业调度代理，能够在复杂的调度计划上运行多步骤的批处理/Shell 脚本和 SQL 任务。它以守护进程方式运行，并将作业定义存储在数据库中。

### 核心概念

- **作业（Job）**：包含一个或多个步骤和调度计划的可调度命名单元
- **步骤（Step）**：作业中的单个操作（SQL 脚本或 OS 批处理/Shell 命令）
- **调度（Schedule）**：定义作业何时运行，具有类似 cron 的灵活性

### 通过 SQL 管理作业

pgAgent 将其配置存储在 `pgagent` 模式中。作业可以通过 pgAdmin 或直接通过 SQL 管理。

```sql
-- 查看所有作业
SELECT jobid, jobname, jobenabled, jobdesc
FROM pgagent.pga_job;

-- 查看作业步骤
SELECT jstid, jstjobid, jstname, jstenabled, jstkind, jstcode
FROM pgagent.pga_jobstep;

-- 查看作业调度
SELECT jscid, jscjobid, jscname, jscenabled,
       jscstart, jscend, jscminutes, jschours,
       jscweekdays, jscmonthdays, jscmonths
FROM pgagent.pga_schedule;

-- 查看作业执行日志
SELECT * FROM pgagent.pga_joblog
WHERE jlgjobid = 1 ORDER BY jlgstart DESC;

-- 查看步骤执行日志
SELECT * FROM pgagent.pga_jobsteplog
WHERE jsljlgid IN (SELECT jlgid FROM pgagent.pga_joblog WHERE jlgjobid = 1)
ORDER BY jslstart DESC;
```

### 步骤类型

| 类型 | 描述 |
|------|-------------|
| `s` | 针对数据库执行的 SQL 脚本 |
| `b` | 在操作系统上执行的批处理/Shell 命令 |

### 调度字段

| 字段 | 描述 |
|-------|-------------|
| `jscstart` / `jscend` | 调度的有效日期范围 |
| `jscminutes` | 布尔数组[60]：在哪些分钟运行 |
| `jschours` | 布尔数组[24]：在哪些小时运行 |
| `jscweekdays` | 布尔数组[7]：在一周的哪几天运行 |
| `jscmonthdays` | 布尔数组[32]：在一月的哪几天运行 |
| `jscmonths` | 布尔数组[12]：在哪些月份运行 |

### 安全性

pgAgent 守护进程使用存储的连接字符串连接到数据库。只有数据库超级用户或被授予 `pgagent` 模式表适当权限的用户才能管理作业。
