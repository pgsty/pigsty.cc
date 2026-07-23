---
title: "pgmq"
linkTitle: "pgmq"
description: "基于Postgres实现类似AWS SQS/RSMQ的消息队列"
weight: 2660
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/pgmq/pgmq">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">pgmq/pgmq</div>
    <div class="ext-card__desc">https://github.com/pgmq/pgmq</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/pgmq-1.12.0.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">pgmq-1.12.0.tar.gz</div>
    <div class="ext-card__desc">pgmq-1.12.0.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pgmq`**](/ext/e/pgmq) | `1.12.0` | <a class="ext-badge ext-badge--cate feat" href="/ext/cate/feat">FEAT</a> | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang sql" href="/ext/language#sql">SQL</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 2660  | [**`pgmq`**](/ext/e/pgmq) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | `pgmq` |
{.ext-table}

| **相关扩展** | [`kafka_fdw`](/ext/e/kafka_fdw) [`pg_task`](/ext/e/pg_task) [`pg_net`](/ext/e/pg_net) [`pg_background`](/ext/e/pg_background) [`pgagent`](/ext/e/pgagent) [`pg_jobmon`](/ext/e/pg_jobmon) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **下游依赖** | [`fsm_core`](/ext/e/fsm_core) [`pg_later`](/ext/e/pg_later) [`vectorize`](/ext/e/vectorize) |
{.ext-table .ext-table--rel}


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#feat) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.12.0` | {{< pgvers "18,17,16,15,14" >}} | `pgmq` | - |
| [**RPM**](/ext/rpm#feat) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.12.0` | {{< pgvers "18,17,16,15,14" >}} | `pgmq_$v` | - |
| [**DEB**](/ext/deb#feat) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.12.0` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-pgmq` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 1.12.0 4 | AVAIL PIGSTY 1.12.0 4 | AVAIL PIGSTY 1.12.0 4 | AVAIL PIGSTY 1.12.0 4 | AVAIL PIGSTY 1.12.0 4 |
| el8.aarch64 | AVAIL PIGSTY 1.12.0 4 | AVAIL PIGSTY 1.12.0 4 | AVAIL PIGSTY 1.12.0 4 | AVAIL PIGSTY 1.12.0 4 | AVAIL PIGSTY 1.12.0 4 |
| el9.x86_64 | AVAIL PIGSTY 1.12.0 7 | AVAIL PIGSTY 1.12.0 7 | AVAIL PIGSTY 1.12.0 7 | AVAIL PIGSTY 1.12.0 7 | AVAIL PIGSTY 1.12.0 7 |
| el9.aarch64 | AVAIL PIGSTY 1.12.0 7 | AVAIL PIGSTY 1.12.0 7 | AVAIL PIGSTY 1.12.0 7 | AVAIL PIGSTY 1.12.0 7 | AVAIL PIGSTY 1.12.0 7 |
| el10.x86_64 | AVAIL PIGSTY 1.12.0 7 | AVAIL PIGSTY 1.12.0 7 | AVAIL PIGSTY 1.12.0 7 | AVAIL PIGSTY 1.12.0 7 | AVAIL PIGSTY 1.12.0 7 |
| el10.aarch64 | AVAIL PIGSTY 1.12.0 7 | AVAIL PIGSTY 1.12.0 7 | AVAIL PIGSTY 1.12.0 7 | AVAIL PIGSTY 1.12.0 7 | AVAIL PIGSTY 1.12.0 7 |
| d12.x86_64 | AVAIL PIGSTY 1.12.0 1 | AVAIL PIGSTY 1.12.0 1 | AVAIL PIGSTY 1.12.0 1 | AVAIL PIGSTY 1.12.0 1 | AVAIL PIGSTY 1.12.0 1 |
| d12.aarch64 | AVAIL PIGSTY 1.12.0 1 | AVAIL PIGSTY 1.12.0 1 | AVAIL PIGSTY 1.12.0 1 | AVAIL PIGSTY 1.12.0 1 | AVAIL PIGSTY 1.12.0 1 |
| d13.x86_64 | AVAIL PIGSTY 1.12.0 1 | AVAIL PIGSTY 1.12.0 1 | AVAIL PIGSTY 1.12.0 1 | AVAIL PIGSTY 1.12.0 1 | AVAIL PIGSTY 1.12.0 1 |
| d13.aarch64 | AVAIL PIGSTY 1.12.0 1 | AVAIL PIGSTY 1.12.0 1 | AVAIL PIGSTY 1.12.0 1 | AVAIL PIGSTY 1.12.0 1 | AVAIL PIGSTY 1.12.0 1 |
| u22.x86_64 | AVAIL PIGSTY 1.12.0 1 | AVAIL PIGSTY 1.12.0 1 | AVAIL PIGSTY 1.12.0 1 | AVAIL PIGSTY 1.12.0 1 | AVAIL PIGSTY 1.12.0 1 |
| u22.aarch64 | AVAIL PIGSTY 1.12.0 1 | AVAIL PIGSTY 1.12.0 1 | AVAIL PIGSTY 1.12.0 1 | AVAIL PIGSTY 1.12.0 1 | AVAIL PIGSTY 1.12.0 1 |
| u24.x86_64 | AVAIL PIGSTY 1.12.0 1 | AVAIL PIGSTY 1.12.0 1 | AVAIL PIGSTY 1.12.0 1 | AVAIL PIGSTY 1.12.0 1 | AVAIL PIGSTY 1.12.0 1 |
| u24.aarch64 | AVAIL PIGSTY 1.12.0 1 | AVAIL PIGSTY 1.12.0 1 | AVAIL PIGSTY 1.12.0 1 | AVAIL PIGSTY 1.12.0 1 | AVAIL PIGSTY 1.12.0 1 |
| u26.x86_64 | AVAIL PIGSTY 1.12.0 1 | AVAIL PIGSTY 1.12.0 1 | AVAIL PIGSTY 1.12.0 1 | AVAIL PIGSTY 1.12.0 1 | AVAIL PIGSTY 1.12.0 1 |
| u26.aarch64 | AVAIL PIGSTY 1.12.0 1 | AVAIL PIGSTY 1.12.0 1 | AVAIL PIGSTY 1.12.0 1 | AVAIL PIGSTY 1.12.0 1 | AVAIL PIGSTY 1.12.0 1 |
@ el8.x86_64 18 pgmq_18 pgmq_18-1.12.0-1PIGSTY.el8.x86_64.rpm pigsty 1.12.0 43.0KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pgmq_18-1.12.0-1PIGSTY.el8.x86_64.rpm
@ el8.x86_64 18 pgmq_18 pgmq_18-1.12.0-1PGDG.rhel8.10.noarch.rpm pgdg 1.12.0 55.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-x86_64/pgmq_18-1.12.0-1PGDG.rhel8.10.noarch.rpm
@ el8.x86_64 18 pgmq_18 pgmq_18-1.11.0-1PGDG.rhel8.10.noarch.rpm pgdg 1.11.0 54.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-x86_64/pgmq_18-1.11.0-1PGDG.rhel8.10.noarch.rpm
@ el8.x86_64 18 pgmq_18 pgmq_18-1.10.1-1PGDG.rhel8.10.noarch.rpm pgdg 1.10.1 44.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-x86_64/pgmq_18-1.10.1-1PGDG.rhel8.10.noarch.rpm
@ el8.aarch64 18 pgmq_18 pgmq_18-1.12.0-1PIGSTY.el8.aarch64.rpm pigsty 1.12.0 43.0KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pgmq_18-1.12.0-1PIGSTY.el8.aarch64.rpm
@ el8.aarch64 18 pgmq_18 pgmq_18-1.12.0-1PGDG.rhel8.10.noarch.rpm pgdg 1.12.0 55.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-aarch64/pgmq_18-1.12.0-1PGDG.rhel8.10.noarch.rpm
@ el8.aarch64 18 pgmq_18 pgmq_18-1.11.0-1PGDG.rhel8.10.noarch.rpm pgdg 1.11.0 53.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-aarch64/pgmq_18-1.11.0-1PGDG.rhel8.10.noarch.rpm
@ el8.aarch64 18 pgmq_18 pgmq_18-1.10.1-1PGDG.rhel8.10.noarch.rpm pgdg 1.10.1 44.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-aarch64/pgmq_18-1.10.1-1PGDG.rhel8.10.noarch.rpm
@ el9.x86_64 18 pgmq_18 pgmq_18-1.12.0-1PIGSTY.el9.x86_64.rpm pigsty 1.12.0 41.0KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pgmq_18-1.12.0-1PIGSTY.el9.x86_64.rpm
@ el9.x86_64 18 pgmq_18 pgmq_18-1.12.0-1PGDG.rhel9.8.noarch.rpm pgdg 1.12.0 53.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/pgmq_18-1.12.0-1PGDG.rhel9.8.noarch.rpm
@ el9.x86_64 18 pgmq_18 pgmq_18-1.11.1-1PGDG.rhel9.8.noarch.rpm pgdg 1.11.1 52.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/pgmq_18-1.11.1-1PGDG.rhel9.8.noarch.rpm
@ el9.x86_64 18 pgmq_18 pgmq_18-1.11.0-1PGDG.rhel9.7.noarch.rpm pgdg 1.11.0 51.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/pgmq_18-1.11.0-1PGDG.rhel9.7.noarch.rpm
@ el9.x86_64 18 pgmq_18 pgmq_18-1.11.0-1PGDG.rhel9.6.noarch.rpm pgdg 1.11.0 51.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/pgmq_18-1.11.0-1PGDG.rhel9.6.noarch.rpm
@ el9.x86_64 18 pgmq_18 pgmq_18-1.10.1-1PGDG.rhel9.7.noarch.rpm pgdg 1.10.1 42.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/pgmq_18-1.10.1-1PGDG.rhel9.7.noarch.rpm
@ el9.x86_64 18 pgmq_18 pgmq_18-1.10.1-1PGDG.rhel9.6.noarch.rpm pgdg 1.10.1 42.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/pgmq_18-1.10.1-1PGDG.rhel9.6.noarch.rpm
@ el9.aarch64 18 pgmq_18 pgmq_18-1.12.0-1PIGSTY.el9.aarch64.rpm pigsty 1.12.0 41.0KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pgmq_18-1.12.0-1PIGSTY.el9.aarch64.rpm
@ el9.aarch64 18 pgmq_18 pgmq_18-1.12.0-1PGDG.rhel9.8.noarch.rpm pgdg 1.12.0 53.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/pgmq_18-1.12.0-1PGDG.rhel9.8.noarch.rpm
@ el9.aarch64 18 pgmq_18 pgmq_18-1.11.1-1PGDG.rhel9.8.noarch.rpm pgdg 1.11.1 52.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/pgmq_18-1.11.1-1PGDG.rhel9.8.noarch.rpm
@ el9.aarch64 18 pgmq_18 pgmq_18-1.11.0-1PGDG.rhel9.7.noarch.rpm pgdg 1.11.0 51.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/pgmq_18-1.11.0-1PGDG.rhel9.7.noarch.rpm
@ el9.aarch64 18 pgmq_18 pgmq_18-1.11.0-1PGDG.rhel9.6.noarch.rpm pgdg 1.11.0 51.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/pgmq_18-1.11.0-1PGDG.rhel9.6.noarch.rpm
@ el9.aarch64 18 pgmq_18 pgmq_18-1.10.1-1PGDG.rhel9.7.noarch.rpm pgdg 1.10.1 42.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/pgmq_18-1.10.1-1PGDG.rhel9.7.noarch.rpm
@ el9.aarch64 18 pgmq_18 pgmq_18-1.10.1-1PGDG.rhel9.6.noarch.rpm pgdg 1.10.1 42.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/pgmq_18-1.10.1-1PGDG.rhel9.6.noarch.rpm
@ el10.x86_64 18 pgmq_18 pgmq_18-1.12.0-1PIGSTY.el10.x86_64.rpm pigsty 1.12.0 41.1KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pgmq_18-1.12.0-1PIGSTY.el10.x86_64.rpm
@ el10.x86_64 18 pgmq_18 pgmq_18-1.12.0-1PGDG.rhel10.2.noarch.rpm pgdg 1.12.0 53.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/pgmq_18-1.12.0-1PGDG.rhel10.2.noarch.rpm
@ el10.x86_64 18 pgmq_18 pgmq_18-1.11.1-1PGDG.rhel10.2.noarch.rpm pgdg 1.11.1 52.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/pgmq_18-1.11.1-1PGDG.rhel10.2.noarch.rpm
@ el10.x86_64 18 pgmq_18 pgmq_18-1.11.0-1PGDG.rhel10.1.noarch.rpm pgdg 1.11.0 51.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/pgmq_18-1.11.0-1PGDG.rhel10.1.noarch.rpm
@ el10.x86_64 18 pgmq_18 pgmq_18-1.11.0-1PGDG.rhel10.0.noarch.rpm pgdg 1.11.0 51.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/pgmq_18-1.11.0-1PGDG.rhel10.0.noarch.rpm
@ el10.x86_64 18 pgmq_18 pgmq_18-1.10.1-1PGDG.rhel10.1.noarch.rpm pgdg 1.10.1 42.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/pgmq_18-1.10.1-1PGDG.rhel10.1.noarch.rpm
@ el10.x86_64 18 pgmq_18 pgmq_18-1.10.1-1PGDG.rhel10.0.noarch.rpm pgdg 1.10.1 43.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/pgmq_18-1.10.1-1PGDG.rhel10.0.noarch.rpm
@ el10.aarch64 18 pgmq_18 pgmq_18-1.12.0-1PIGSTY.el10.aarch64.rpm pigsty 1.12.0 41.1KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pgmq_18-1.12.0-1PIGSTY.el10.aarch64.rpm
@ el10.aarch64 18 pgmq_18 pgmq_18-1.12.0-1PGDG.rhel10.2.noarch.rpm pgdg 1.12.0 53.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/pgmq_18-1.12.0-1PGDG.rhel10.2.noarch.rpm
@ el10.aarch64 18 pgmq_18 pgmq_18-1.11.1-1PGDG.rhel10.2.noarch.rpm pgdg 1.11.1 52.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/pgmq_18-1.11.1-1PGDG.rhel10.2.noarch.rpm
@ el10.aarch64 18 pgmq_18 pgmq_18-1.11.0-1PGDG.rhel10.1.noarch.rpm pgdg 1.11.0 51.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/pgmq_18-1.11.0-1PGDG.rhel10.1.noarch.rpm
@ el10.aarch64 18 pgmq_18 pgmq_18-1.11.0-1PGDG.rhel10.0.noarch.rpm pgdg 1.11.0 51.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/pgmq_18-1.11.0-1PGDG.rhel10.0.noarch.rpm
@ el10.aarch64 18 pgmq_18 pgmq_18-1.10.1-1PGDG.rhel10.1.noarch.rpm pgdg 1.10.1 42.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/pgmq_18-1.10.1-1PGDG.rhel10.1.noarch.rpm
@ el10.aarch64 18 pgmq_18 pgmq_18-1.10.1-1PGDG.rhel10.0.noarch.rpm pgdg 1.10.1 42.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/pgmq_18-1.10.1-1PGDG.rhel10.0.noarch.rpm
@ d12.x86_64 18 postgresql-18-pgmq postgresql-18-pgmq_1.12.0-1PIGSTY~bookworm_amd64.deb pigsty 1.12.0 26.6KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgmq/postgresql-18-pgmq_1.12.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-pgmq postgresql-18-pgmq_1.12.0-1PIGSTY~bookworm_arm64.deb pigsty 1.12.0 26.6KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgmq/postgresql-18-pgmq_1.12.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-pgmq postgresql-18-pgmq_1.12.0-1PIGSTY~trixie_amd64.deb pigsty 1.12.0 26.6KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgmq/postgresql-18-pgmq_1.12.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-pgmq postgresql-18-pgmq_1.12.0-1PIGSTY~trixie_arm64.deb pigsty 1.12.0 26.6KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgmq/postgresql-18-pgmq_1.12.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-pgmq postgresql-18-pgmq_1.12.0-1PIGSTY~jammy_amd64.deb pigsty 1.12.0 27.1KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgmq/postgresql-18-pgmq_1.12.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-pgmq postgresql-18-pgmq_1.12.0-1PIGSTY~jammy_arm64.deb pigsty 1.12.0 27.1KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgmq/postgresql-18-pgmq_1.12.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-pgmq postgresql-18-pgmq_1.12.0-1PIGSTY~noble_amd64.deb pigsty 1.12.0 27.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgmq/postgresql-18-pgmq_1.12.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-pgmq postgresql-18-pgmq_1.12.0-1PIGSTY~noble_arm64.deb pigsty 1.12.0 27.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgmq/postgresql-18-pgmq_1.12.0-1PIGSTY~noble_arm64.deb
@ u26.x86_64 18 postgresql-18-pgmq postgresql-18-pgmq_1.12.0-1PIGSTY~resolute_amd64.deb pigsty 1.12.0 27.1KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgmq/postgresql-18-pgmq_1.12.0-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 18 postgresql-18-pgmq postgresql-18-pgmq_1.12.0-1PIGSTY~resolute_arm64.deb pigsty 1.12.0 27.1KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgmq/postgresql-18-pgmq_1.12.0-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 17 pgmq_17 pgmq_17-1.12.0-1PIGSTY.el8.x86_64.rpm pigsty 1.12.0 43.0KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pgmq_17-1.12.0-1PIGSTY.el8.x86_64.rpm
@ el8.x86_64 17 pgmq_17 pgmq_17-1.12.0-1PGDG.rhel8.10.noarch.rpm pgdg 1.12.0 55.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/pgmq_17-1.12.0-1PGDG.rhel8.10.noarch.rpm
@ el8.x86_64 17 pgmq_17 pgmq_17-1.11.0-1PGDG.rhel8.10.noarch.rpm pgdg 1.11.0 54.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/pgmq_17-1.11.0-1PGDG.rhel8.10.noarch.rpm
@ el8.x86_64 17 pgmq_17 pgmq_17-1.10.1-1PGDG.rhel8.10.noarch.rpm pgdg 1.10.1 44.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-x86_64/pgmq_17-1.10.1-1PGDG.rhel8.10.noarch.rpm
@ el8.aarch64 17 pgmq_17 pgmq_17-1.12.0-1PIGSTY.el8.aarch64.rpm pigsty 1.12.0 43.0KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pgmq_17-1.12.0-1PIGSTY.el8.aarch64.rpm
@ el8.aarch64 17 pgmq_17 pgmq_17-1.12.0-1PGDG.rhel8.10.noarch.rpm pgdg 1.12.0 55.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/pgmq_17-1.12.0-1PGDG.rhel8.10.noarch.rpm
@ el8.aarch64 17 pgmq_17 pgmq_17-1.11.0-1PGDG.rhel8.10.noarch.rpm pgdg 1.11.0 53.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/pgmq_17-1.11.0-1PGDG.rhel8.10.noarch.rpm
@ el8.aarch64 17 pgmq_17 pgmq_17-1.10.1-1PGDG.rhel8.10.noarch.rpm pgdg 1.10.1 44.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-8-aarch64/pgmq_17-1.10.1-1PGDG.rhel8.10.noarch.rpm
@ el9.x86_64 17 pgmq_17 pgmq_17-1.12.0-1PIGSTY.el9.x86_64.rpm pigsty 1.12.0 41.0KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pgmq_17-1.12.0-1PIGSTY.el9.x86_64.rpm
@ el9.x86_64 17 pgmq_17 pgmq_17-1.12.0-1PGDG.rhel9.8.noarch.rpm pgdg 1.12.0 53.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/pgmq_17-1.12.0-1PGDG.rhel9.8.noarch.rpm
@ el9.x86_64 17 pgmq_17 pgmq_17-1.11.1-1PGDG.rhel9.8.noarch.rpm pgdg 1.11.1 52.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/pgmq_17-1.11.1-1PGDG.rhel9.8.noarch.rpm
@ el9.x86_64 17 pgmq_17 pgmq_17-1.11.0-1PGDG.rhel9.7.noarch.rpm pgdg 1.11.0 51.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/pgmq_17-1.11.0-1PGDG.rhel9.7.noarch.rpm
@ el9.x86_64 17 pgmq_17 pgmq_17-1.11.0-1PGDG.rhel9.6.noarch.rpm pgdg 1.11.0 51.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/pgmq_17-1.11.0-1PGDG.rhel9.6.noarch.rpm
@ el9.x86_64 17 pgmq_17 pgmq_17-1.10.1-1PGDG.rhel9.7.noarch.rpm pgdg 1.10.1 42.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/pgmq_17-1.10.1-1PGDG.rhel9.7.noarch.rpm
@ el9.x86_64 17 pgmq_17 pgmq_17-1.10.1-1PGDG.rhel9.6.noarch.rpm pgdg 1.10.1 42.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-x86_64/pgmq_17-1.10.1-1PGDG.rhel9.6.noarch.rpm
@ el9.aarch64 17 pgmq_17 pgmq_17-1.12.0-1PIGSTY.el9.aarch64.rpm pigsty 1.12.0 41.0KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pgmq_17-1.12.0-1PIGSTY.el9.aarch64.rpm
@ el9.aarch64 17 pgmq_17 pgmq_17-1.12.0-1PGDG.rhel9.8.noarch.rpm pgdg 1.12.0 53.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/pgmq_17-1.12.0-1PGDG.rhel9.8.noarch.rpm
@ el9.aarch64 17 pgmq_17 pgmq_17-1.11.1-1PGDG.rhel9.8.noarch.rpm pgdg 1.11.1 52.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/pgmq_17-1.11.1-1PGDG.rhel9.8.noarch.rpm
@ el9.aarch64 17 pgmq_17 pgmq_17-1.11.0-1PGDG.rhel9.7.noarch.rpm pgdg 1.11.0 51.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/pgmq_17-1.11.0-1PGDG.rhel9.7.noarch.rpm
@ el9.aarch64 17 pgmq_17 pgmq_17-1.11.0-1PGDG.rhel9.6.noarch.rpm pgdg 1.11.0 51.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/pgmq_17-1.11.0-1PGDG.rhel9.6.noarch.rpm
@ el9.aarch64 17 pgmq_17 pgmq_17-1.10.1-1PGDG.rhel9.7.noarch.rpm pgdg 1.10.1 42.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/pgmq_17-1.10.1-1PGDG.rhel9.7.noarch.rpm
@ el9.aarch64 17 pgmq_17 pgmq_17-1.10.1-1PGDG.rhel9.6.noarch.rpm pgdg 1.10.1 42.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-9-aarch64/pgmq_17-1.10.1-1PGDG.rhel9.6.noarch.rpm
@ el10.x86_64 17 pgmq_17 pgmq_17-1.12.0-1PIGSTY.el10.x86_64.rpm pigsty 1.12.0 41.1KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pgmq_17-1.12.0-1PIGSTY.el10.x86_64.rpm
@ el10.x86_64 17 pgmq_17 pgmq_17-1.12.0-1PGDG.rhel10.2.noarch.rpm pgdg 1.12.0 53.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/pgmq_17-1.12.0-1PGDG.rhel10.2.noarch.rpm
@ el10.x86_64 17 pgmq_17 pgmq_17-1.11.1-1PGDG.rhel10.2.noarch.rpm pgdg 1.11.1 52.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/pgmq_17-1.11.1-1PGDG.rhel10.2.noarch.rpm
@ el10.x86_64 17 pgmq_17 pgmq_17-1.11.0-1PGDG.rhel10.1.noarch.rpm pgdg 1.11.0 51.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/pgmq_17-1.11.0-1PGDG.rhel10.1.noarch.rpm
@ el10.x86_64 17 pgmq_17 pgmq_17-1.11.0-1PGDG.rhel10.0.noarch.rpm pgdg 1.11.0 51.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/pgmq_17-1.11.0-1PGDG.rhel10.0.noarch.rpm
@ el10.x86_64 17 pgmq_17 pgmq_17-1.10.1-1PGDG.rhel10.1.noarch.rpm pgdg 1.10.1 42.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/pgmq_17-1.10.1-1PGDG.rhel10.1.noarch.rpm
@ el10.x86_64 17 pgmq_17 pgmq_17-1.10.1-1PGDG.rhel10.0.noarch.rpm pgdg 1.10.1 43.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-x86_64/pgmq_17-1.10.1-1PGDG.rhel10.0.noarch.rpm
@ el10.aarch64 17 pgmq_17 pgmq_17-1.12.0-1PIGSTY.el10.aarch64.rpm pigsty 1.12.0 41.1KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pgmq_17-1.12.0-1PIGSTY.el10.aarch64.rpm
@ el10.aarch64 17 pgmq_17 pgmq_17-1.12.0-1PGDG.rhel10.2.noarch.rpm pgdg 1.12.0 53.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/pgmq_17-1.12.0-1PGDG.rhel10.2.noarch.rpm
@ el10.aarch64 17 pgmq_17 pgmq_17-1.11.1-1PGDG.rhel10.2.noarch.rpm pgdg 1.11.1 52.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/pgmq_17-1.11.1-1PGDG.rhel10.2.noarch.rpm
@ el10.aarch64 17 pgmq_17 pgmq_17-1.11.0-1PGDG.rhel10.1.noarch.rpm pgdg 1.11.0 51.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/pgmq_17-1.11.0-1PGDG.rhel10.1.noarch.rpm
@ el10.aarch64 17 pgmq_17 pgmq_17-1.11.0-1PGDG.rhel10.0.noarch.rpm pgdg 1.11.0 51.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/pgmq_17-1.11.0-1PGDG.rhel10.0.noarch.rpm
@ el10.aarch64 17 pgmq_17 pgmq_17-1.10.1-1PGDG.rhel10.1.noarch.rpm pgdg 1.10.1 42.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/pgmq_17-1.10.1-1PGDG.rhel10.1.noarch.rpm
@ el10.aarch64 17 pgmq_17 pgmq_17-1.10.1-1PGDG.rhel10.0.noarch.rpm pgdg 1.10.1 42.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/17/redhat/rhel-10-aarch64/pgmq_17-1.10.1-1PGDG.rhel10.0.noarch.rpm
@ d12.x86_64 17 postgresql-17-pgmq postgresql-17-pgmq_1.12.0-1PIGSTY~bookworm_amd64.deb pigsty 1.12.0 26.6KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgmq/postgresql-17-pgmq_1.12.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-pgmq postgresql-17-pgmq_1.12.0-1PIGSTY~bookworm_arm64.deb pigsty 1.12.0 26.6KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgmq/postgresql-17-pgmq_1.12.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-pgmq postgresql-17-pgmq_1.12.0-1PIGSTY~trixie_amd64.deb pigsty 1.12.0 26.6KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgmq/postgresql-17-pgmq_1.12.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-pgmq postgresql-17-pgmq_1.12.0-1PIGSTY~trixie_arm64.deb pigsty 1.12.0 26.6KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgmq/postgresql-17-pgmq_1.12.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-pgmq postgresql-17-pgmq_1.12.0-1PIGSTY~jammy_amd64.deb pigsty 1.12.0 27.1KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgmq/postgresql-17-pgmq_1.12.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-pgmq postgresql-17-pgmq_1.12.0-1PIGSTY~jammy_arm64.deb pigsty 1.12.0 27.1KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgmq/postgresql-17-pgmq_1.12.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-pgmq postgresql-17-pgmq_1.12.0-1PIGSTY~noble_amd64.deb pigsty 1.12.0 27.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgmq/postgresql-17-pgmq_1.12.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-pgmq postgresql-17-pgmq_1.12.0-1PIGSTY~noble_arm64.deb pigsty 1.12.0 27.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgmq/postgresql-17-pgmq_1.12.0-1PIGSTY~noble_arm64.deb
@ u26.x86_64 17 postgresql-17-pgmq postgresql-17-pgmq_1.12.0-1PIGSTY~resolute_amd64.deb pigsty 1.12.0 27.1KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgmq/postgresql-17-pgmq_1.12.0-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 17 postgresql-17-pgmq postgresql-17-pgmq_1.12.0-1PIGSTY~resolute_arm64.deb pigsty 1.12.0 27.1KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgmq/postgresql-17-pgmq_1.12.0-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 16 pgmq_16 pgmq_16-1.12.0-1PIGSTY.el8.x86_64.rpm pigsty 1.12.0 43.0KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pgmq_16-1.12.0-1PIGSTY.el8.x86_64.rpm
@ el8.x86_64 16 pgmq_16 pgmq_16-1.12.0-1PGDG.rhel8.10.noarch.rpm pgdg 1.12.0 55.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/pgmq_16-1.12.0-1PGDG.rhel8.10.noarch.rpm
@ el8.x86_64 16 pgmq_16 pgmq_16-1.11.0-1PGDG.rhel8.10.noarch.rpm pgdg 1.11.0 54.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/pgmq_16-1.11.0-1PGDG.rhel8.10.noarch.rpm
@ el8.x86_64 16 pgmq_16 pgmq_16-1.10.1-1PGDG.rhel8.10.noarch.rpm pgdg 1.10.1 44.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-x86_64/pgmq_16-1.10.1-1PGDG.rhel8.10.noarch.rpm
@ el8.aarch64 16 pgmq_16 pgmq_16-1.12.0-1PIGSTY.el8.aarch64.rpm pigsty 1.12.0 43.0KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pgmq_16-1.12.0-1PIGSTY.el8.aarch64.rpm
@ el8.aarch64 16 pgmq_16 pgmq_16-1.12.0-1PGDG.rhel8.10.noarch.rpm pgdg 1.12.0 55.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/pgmq_16-1.12.0-1PGDG.rhel8.10.noarch.rpm
@ el8.aarch64 16 pgmq_16 pgmq_16-1.11.0-1PGDG.rhel8.10.noarch.rpm pgdg 1.11.0 53.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/pgmq_16-1.11.0-1PGDG.rhel8.10.noarch.rpm
@ el8.aarch64 16 pgmq_16 pgmq_16-1.10.1-1PGDG.rhel8.10.noarch.rpm pgdg 1.10.1 44.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-8-aarch64/pgmq_16-1.10.1-1PGDG.rhel8.10.noarch.rpm
@ el9.x86_64 16 pgmq_16 pgmq_16-1.12.0-1PIGSTY.el9.x86_64.rpm pigsty 1.12.0 41.0KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pgmq_16-1.12.0-1PIGSTY.el9.x86_64.rpm
@ el9.x86_64 16 pgmq_16 pgmq_16-1.12.0-1PGDG.rhel9.8.noarch.rpm pgdg 1.12.0 53.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/pgmq_16-1.12.0-1PGDG.rhel9.8.noarch.rpm
@ el9.x86_64 16 pgmq_16 pgmq_16-1.11.1-1PGDG.rhel9.8.noarch.rpm pgdg 1.11.1 52.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/pgmq_16-1.11.1-1PGDG.rhel9.8.noarch.rpm
@ el9.x86_64 16 pgmq_16 pgmq_16-1.11.0-1PGDG.rhel9.7.noarch.rpm pgdg 1.11.0 51.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/pgmq_16-1.11.0-1PGDG.rhel9.7.noarch.rpm
@ el9.x86_64 16 pgmq_16 pgmq_16-1.11.0-1PGDG.rhel9.6.noarch.rpm pgdg 1.11.0 51.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/pgmq_16-1.11.0-1PGDG.rhel9.6.noarch.rpm
@ el9.x86_64 16 pgmq_16 pgmq_16-1.10.1-1PGDG.rhel9.7.noarch.rpm pgdg 1.10.1 42.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/pgmq_16-1.10.1-1PGDG.rhel9.7.noarch.rpm
@ el9.x86_64 16 pgmq_16 pgmq_16-1.10.1-1PGDG.rhel9.6.noarch.rpm pgdg 1.10.1 42.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-x86_64/pgmq_16-1.10.1-1PGDG.rhel9.6.noarch.rpm
@ el9.aarch64 16 pgmq_16 pgmq_16-1.12.0-1PIGSTY.el9.aarch64.rpm pigsty 1.12.0 41.0KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pgmq_16-1.12.0-1PIGSTY.el9.aarch64.rpm
@ el9.aarch64 16 pgmq_16 pgmq_16-1.12.0-1PGDG.rhel9.8.noarch.rpm pgdg 1.12.0 53.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/pgmq_16-1.12.0-1PGDG.rhel9.8.noarch.rpm
@ el9.aarch64 16 pgmq_16 pgmq_16-1.11.1-1PGDG.rhel9.8.noarch.rpm pgdg 1.11.1 52.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/pgmq_16-1.11.1-1PGDG.rhel9.8.noarch.rpm
@ el9.aarch64 16 pgmq_16 pgmq_16-1.11.0-1PGDG.rhel9.7.noarch.rpm pgdg 1.11.0 51.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/pgmq_16-1.11.0-1PGDG.rhel9.7.noarch.rpm
@ el9.aarch64 16 pgmq_16 pgmq_16-1.11.0-1PGDG.rhel9.6.noarch.rpm pgdg 1.11.0 51.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/pgmq_16-1.11.0-1PGDG.rhel9.6.noarch.rpm
@ el9.aarch64 16 pgmq_16 pgmq_16-1.10.1-1PGDG.rhel9.7.noarch.rpm pgdg 1.10.1 42.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/pgmq_16-1.10.1-1PGDG.rhel9.7.noarch.rpm
@ el9.aarch64 16 pgmq_16 pgmq_16-1.10.1-1PGDG.rhel9.6.noarch.rpm pgdg 1.10.1 42.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-9-aarch64/pgmq_16-1.10.1-1PGDG.rhel9.6.noarch.rpm
@ el10.x86_64 16 pgmq_16 pgmq_16-1.12.0-1PIGSTY.el10.x86_64.rpm pigsty 1.12.0 41.1KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pgmq_16-1.12.0-1PIGSTY.el10.x86_64.rpm
@ el10.x86_64 16 pgmq_16 pgmq_16-1.12.0-1PGDG.rhel10.2.noarch.rpm pgdg 1.12.0 53.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/pgmq_16-1.12.0-1PGDG.rhel10.2.noarch.rpm
@ el10.x86_64 16 pgmq_16 pgmq_16-1.11.1-1PGDG.rhel10.2.noarch.rpm pgdg 1.11.1 52.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/pgmq_16-1.11.1-1PGDG.rhel10.2.noarch.rpm
@ el10.x86_64 16 pgmq_16 pgmq_16-1.11.0-1PGDG.rhel10.1.noarch.rpm pgdg 1.11.0 51.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/pgmq_16-1.11.0-1PGDG.rhel10.1.noarch.rpm
@ el10.x86_64 16 pgmq_16 pgmq_16-1.11.0-1PGDG.rhel10.0.noarch.rpm pgdg 1.11.0 51.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/pgmq_16-1.11.0-1PGDG.rhel10.0.noarch.rpm
@ el10.x86_64 16 pgmq_16 pgmq_16-1.10.1-1PGDG.rhel10.1.noarch.rpm pgdg 1.10.1 42.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/pgmq_16-1.10.1-1PGDG.rhel10.1.noarch.rpm
@ el10.x86_64 16 pgmq_16 pgmq_16-1.10.1-1PGDG.rhel10.0.noarch.rpm pgdg 1.10.1 43.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-x86_64/pgmq_16-1.10.1-1PGDG.rhel10.0.noarch.rpm
@ el10.aarch64 16 pgmq_16 pgmq_16-1.12.0-1PIGSTY.el10.aarch64.rpm pigsty 1.12.0 41.1KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pgmq_16-1.12.0-1PIGSTY.el10.aarch64.rpm
@ el10.aarch64 16 pgmq_16 pgmq_16-1.12.0-1PGDG.rhel10.2.noarch.rpm pgdg 1.12.0 53.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/pgmq_16-1.12.0-1PGDG.rhel10.2.noarch.rpm
@ el10.aarch64 16 pgmq_16 pgmq_16-1.11.1-1PGDG.rhel10.2.noarch.rpm pgdg 1.11.1 52.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/pgmq_16-1.11.1-1PGDG.rhel10.2.noarch.rpm
@ el10.aarch64 16 pgmq_16 pgmq_16-1.11.0-1PGDG.rhel10.1.noarch.rpm pgdg 1.11.0 51.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/pgmq_16-1.11.0-1PGDG.rhel10.1.noarch.rpm
@ el10.aarch64 16 pgmq_16 pgmq_16-1.11.0-1PGDG.rhel10.0.noarch.rpm pgdg 1.11.0 51.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/pgmq_16-1.11.0-1PGDG.rhel10.0.noarch.rpm
@ el10.aarch64 16 pgmq_16 pgmq_16-1.10.1-1PGDG.rhel10.1.noarch.rpm pgdg 1.10.1 42.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/pgmq_16-1.10.1-1PGDG.rhel10.1.noarch.rpm
@ el10.aarch64 16 pgmq_16 pgmq_16-1.10.1-1PGDG.rhel10.0.noarch.rpm pgdg 1.10.1 42.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/16/redhat/rhel-10-aarch64/pgmq_16-1.10.1-1PGDG.rhel10.0.noarch.rpm
@ d12.x86_64 16 postgresql-16-pgmq postgresql-16-pgmq_1.12.0-1PIGSTY~bookworm_amd64.deb pigsty 1.12.0 26.6KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgmq/postgresql-16-pgmq_1.12.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-pgmq postgresql-16-pgmq_1.12.0-1PIGSTY~bookworm_arm64.deb pigsty 1.12.0 26.6KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgmq/postgresql-16-pgmq_1.12.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-pgmq postgresql-16-pgmq_1.12.0-1PIGSTY~trixie_amd64.deb pigsty 1.12.0 26.6KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgmq/postgresql-16-pgmq_1.12.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-pgmq postgresql-16-pgmq_1.12.0-1PIGSTY~trixie_arm64.deb pigsty 1.12.0 26.6KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgmq/postgresql-16-pgmq_1.12.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-pgmq postgresql-16-pgmq_1.12.0-1PIGSTY~jammy_amd64.deb pigsty 1.12.0 27.1KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgmq/postgresql-16-pgmq_1.12.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-pgmq postgresql-16-pgmq_1.12.0-1PIGSTY~jammy_arm64.deb pigsty 1.12.0 27.1KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgmq/postgresql-16-pgmq_1.12.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-pgmq postgresql-16-pgmq_1.12.0-1PIGSTY~noble_amd64.deb pigsty 1.12.0 27.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgmq/postgresql-16-pgmq_1.12.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-pgmq postgresql-16-pgmq_1.12.0-1PIGSTY~noble_arm64.deb pigsty 1.12.0 27.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgmq/postgresql-16-pgmq_1.12.0-1PIGSTY~noble_arm64.deb
@ u26.x86_64 16 postgresql-16-pgmq postgresql-16-pgmq_1.12.0-1PIGSTY~resolute_amd64.deb pigsty 1.12.0 27.1KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgmq/postgresql-16-pgmq_1.12.0-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 16 postgresql-16-pgmq postgresql-16-pgmq_1.12.0-1PIGSTY~resolute_arm64.deb pigsty 1.12.0 27.1KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgmq/postgresql-16-pgmq_1.12.0-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 15 pgmq_15 pgmq_15-1.12.0-1PIGSTY.el8.x86_64.rpm pigsty 1.12.0 43.0KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pgmq_15-1.12.0-1PIGSTY.el8.x86_64.rpm
@ el8.x86_64 15 pgmq_15 pgmq_15-1.12.0-1PGDG.rhel8.10.noarch.rpm pgdg 1.12.0 55.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/pgmq_15-1.12.0-1PGDG.rhel8.10.noarch.rpm
@ el8.x86_64 15 pgmq_15 pgmq_15-1.11.0-1PGDG.rhel8.10.noarch.rpm pgdg 1.11.0 54.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/pgmq_15-1.11.0-1PGDG.rhel8.10.noarch.rpm
@ el8.x86_64 15 pgmq_15 pgmq_15-1.10.1-1PGDG.rhel8.10.noarch.rpm pgdg 1.10.1 44.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-x86_64/pgmq_15-1.10.1-1PGDG.rhel8.10.noarch.rpm
@ el8.aarch64 15 pgmq_15 pgmq_15-1.12.0-1PIGSTY.el8.aarch64.rpm pigsty 1.12.0 43.0KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pgmq_15-1.12.0-1PIGSTY.el8.aarch64.rpm
@ el8.aarch64 15 pgmq_15 pgmq_15-1.12.0-1PGDG.rhel8.10.noarch.rpm pgdg 1.12.0 55.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/pgmq_15-1.12.0-1PGDG.rhel8.10.noarch.rpm
@ el8.aarch64 15 pgmq_15 pgmq_15-1.11.0-1PGDG.rhel8.10.noarch.rpm pgdg 1.11.0 53.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/pgmq_15-1.11.0-1PGDG.rhel8.10.noarch.rpm
@ el8.aarch64 15 pgmq_15 pgmq_15-1.10.1-1PGDG.rhel8.10.noarch.rpm pgdg 1.10.1 44.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-8-aarch64/pgmq_15-1.10.1-1PGDG.rhel8.10.noarch.rpm
@ el9.x86_64 15 pgmq_15 pgmq_15-1.12.0-1PIGSTY.el9.x86_64.rpm pigsty 1.12.0 41.0KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pgmq_15-1.12.0-1PIGSTY.el9.x86_64.rpm
@ el9.x86_64 15 pgmq_15 pgmq_15-1.12.0-1PGDG.rhel9.8.noarch.rpm pgdg 1.12.0 53.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pgmq_15-1.12.0-1PGDG.rhel9.8.noarch.rpm
@ el9.x86_64 15 pgmq_15 pgmq_15-1.11.1-1PGDG.rhel9.8.noarch.rpm pgdg 1.11.1 52.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pgmq_15-1.11.1-1PGDG.rhel9.8.noarch.rpm
@ el9.x86_64 15 pgmq_15 pgmq_15-1.11.0-1PGDG.rhel9.7.noarch.rpm pgdg 1.11.0 51.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pgmq_15-1.11.0-1PGDG.rhel9.7.noarch.rpm
@ el9.x86_64 15 pgmq_15 pgmq_15-1.11.0-1PGDG.rhel9.6.noarch.rpm pgdg 1.11.0 51.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pgmq_15-1.11.0-1PGDG.rhel9.6.noarch.rpm
@ el9.x86_64 15 pgmq_15 pgmq_15-1.10.1-1PGDG.rhel9.7.noarch.rpm pgdg 1.10.1 42.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pgmq_15-1.10.1-1PGDG.rhel9.7.noarch.rpm
@ el9.x86_64 15 pgmq_15 pgmq_15-1.10.1-1PGDG.rhel9.6.noarch.rpm pgdg 1.10.1 42.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-x86_64/pgmq_15-1.10.1-1PGDG.rhel9.6.noarch.rpm
@ el9.aarch64 15 pgmq_15 pgmq_15-1.12.0-1PIGSTY.el9.aarch64.rpm pigsty 1.12.0 41.0KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pgmq_15-1.12.0-1PIGSTY.el9.aarch64.rpm
@ el9.aarch64 15 pgmq_15 pgmq_15-1.12.0-1PGDG.rhel9.8.noarch.rpm pgdg 1.12.0 53.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/pgmq_15-1.12.0-1PGDG.rhel9.8.noarch.rpm
@ el9.aarch64 15 pgmq_15 pgmq_15-1.11.1-1PGDG.rhel9.8.noarch.rpm pgdg 1.11.1 52.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/pgmq_15-1.11.1-1PGDG.rhel9.8.noarch.rpm
@ el9.aarch64 15 pgmq_15 pgmq_15-1.11.0-1PGDG.rhel9.7.noarch.rpm pgdg 1.11.0 51.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/pgmq_15-1.11.0-1PGDG.rhel9.7.noarch.rpm
@ el9.aarch64 15 pgmq_15 pgmq_15-1.11.0-1PGDG.rhel9.6.noarch.rpm pgdg 1.11.0 51.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/pgmq_15-1.11.0-1PGDG.rhel9.6.noarch.rpm
@ el9.aarch64 15 pgmq_15 pgmq_15-1.10.1-1PGDG.rhel9.7.noarch.rpm pgdg 1.10.1 42.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/pgmq_15-1.10.1-1PGDG.rhel9.7.noarch.rpm
@ el9.aarch64 15 pgmq_15 pgmq_15-1.10.1-1PGDG.rhel9.6.noarch.rpm pgdg 1.10.1 42.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-9-aarch64/pgmq_15-1.10.1-1PGDG.rhel9.6.noarch.rpm
@ el10.x86_64 15 pgmq_15 pgmq_15-1.12.0-1PIGSTY.el10.x86_64.rpm pigsty 1.12.0 41.1KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pgmq_15-1.12.0-1PIGSTY.el10.x86_64.rpm
@ el10.x86_64 15 pgmq_15 pgmq_15-1.12.0-1PGDG.rhel10.2.noarch.rpm pgdg 1.12.0 53.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/pgmq_15-1.12.0-1PGDG.rhel10.2.noarch.rpm
@ el10.x86_64 15 pgmq_15 pgmq_15-1.11.1-1PGDG.rhel10.2.noarch.rpm pgdg 1.11.1 52.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/pgmq_15-1.11.1-1PGDG.rhel10.2.noarch.rpm
@ el10.x86_64 15 pgmq_15 pgmq_15-1.11.0-1PGDG.rhel10.1.noarch.rpm pgdg 1.11.0 51.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/pgmq_15-1.11.0-1PGDG.rhel10.1.noarch.rpm
@ el10.x86_64 15 pgmq_15 pgmq_15-1.11.0-1PGDG.rhel10.0.noarch.rpm pgdg 1.11.0 51.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/pgmq_15-1.11.0-1PGDG.rhel10.0.noarch.rpm
@ el10.x86_64 15 pgmq_15 pgmq_15-1.10.1-1PGDG.rhel10.1.noarch.rpm pgdg 1.10.1 42.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/pgmq_15-1.10.1-1PGDG.rhel10.1.noarch.rpm
@ el10.x86_64 15 pgmq_15 pgmq_15-1.10.1-1PGDG.rhel10.0.noarch.rpm pgdg 1.10.1 43.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-x86_64/pgmq_15-1.10.1-1PGDG.rhel10.0.noarch.rpm
@ el10.aarch64 15 pgmq_15 pgmq_15-1.12.0-1PIGSTY.el10.aarch64.rpm pigsty 1.12.0 41.1KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pgmq_15-1.12.0-1PIGSTY.el10.aarch64.rpm
@ el10.aarch64 15 pgmq_15 pgmq_15-1.12.0-1PGDG.rhel10.2.noarch.rpm pgdg 1.12.0 53.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/pgmq_15-1.12.0-1PGDG.rhel10.2.noarch.rpm
@ el10.aarch64 15 pgmq_15 pgmq_15-1.11.1-1PGDG.rhel10.2.noarch.rpm pgdg 1.11.1 52.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/pgmq_15-1.11.1-1PGDG.rhel10.2.noarch.rpm
@ el10.aarch64 15 pgmq_15 pgmq_15-1.11.0-1PGDG.rhel10.1.noarch.rpm pgdg 1.11.0 51.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/pgmq_15-1.11.0-1PGDG.rhel10.1.noarch.rpm
@ el10.aarch64 15 pgmq_15 pgmq_15-1.11.0-1PGDG.rhel10.0.noarch.rpm pgdg 1.11.0 51.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/pgmq_15-1.11.0-1PGDG.rhel10.0.noarch.rpm
@ el10.aarch64 15 pgmq_15 pgmq_15-1.10.1-1PGDG.rhel10.1.noarch.rpm pgdg 1.10.1 42.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/pgmq_15-1.10.1-1PGDG.rhel10.1.noarch.rpm
@ el10.aarch64 15 pgmq_15 pgmq_15-1.10.1-1PGDG.rhel10.0.noarch.rpm pgdg 1.10.1 42.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/15/redhat/rhel-10-aarch64/pgmq_15-1.10.1-1PGDG.rhel10.0.noarch.rpm
@ d12.x86_64 15 postgresql-15-pgmq postgresql-15-pgmq_1.12.0-1PIGSTY~bookworm_amd64.deb pigsty 1.12.0 26.6KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgmq/postgresql-15-pgmq_1.12.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-pgmq postgresql-15-pgmq_1.12.0-1PIGSTY~bookworm_arm64.deb pigsty 1.12.0 26.6KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgmq/postgresql-15-pgmq_1.12.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-pgmq postgresql-15-pgmq_1.12.0-1PIGSTY~trixie_amd64.deb pigsty 1.12.0 26.6KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgmq/postgresql-15-pgmq_1.12.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-pgmq postgresql-15-pgmq_1.12.0-1PIGSTY~trixie_arm64.deb pigsty 1.12.0 26.6KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgmq/postgresql-15-pgmq_1.12.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-pgmq postgresql-15-pgmq_1.12.0-1PIGSTY~jammy_amd64.deb pigsty 1.12.0 27.1KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgmq/postgresql-15-pgmq_1.12.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-pgmq postgresql-15-pgmq_1.12.0-1PIGSTY~jammy_arm64.deb pigsty 1.12.0 27.1KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgmq/postgresql-15-pgmq_1.12.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-pgmq postgresql-15-pgmq_1.12.0-1PIGSTY~noble_amd64.deb pigsty 1.12.0 27.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgmq/postgresql-15-pgmq_1.12.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-pgmq postgresql-15-pgmq_1.12.0-1PIGSTY~noble_arm64.deb pigsty 1.12.0 27.0KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgmq/postgresql-15-pgmq_1.12.0-1PIGSTY~noble_arm64.deb
@ u26.x86_64 15 postgresql-15-pgmq postgresql-15-pgmq_1.12.0-1PIGSTY~resolute_amd64.deb pigsty 1.12.0 27.1KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgmq/postgresql-15-pgmq_1.12.0-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 15 postgresql-15-pgmq postgresql-15-pgmq_1.12.0-1PIGSTY~resolute_arm64.deb pigsty 1.12.0 27.1KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgmq/postgresql-15-pgmq_1.12.0-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 14 pgmq_14 pgmq_14-1.12.0-1PIGSTY.el8.x86_64.rpm pigsty 1.12.0 43.0KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pgmq_14-1.12.0-1PIGSTY.el8.x86_64.rpm
@ el8.x86_64 14 pgmq_14 pgmq_14-1.12.0-1PGDG.rhel8.10.noarch.rpm pgdg 1.12.0 55.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pgmq_14-1.12.0-1PGDG.rhel8.10.noarch.rpm
@ el8.x86_64 14 pgmq_14 pgmq_14-1.11.0-1PGDG.rhel8.10.noarch.rpm pgdg 1.11.0 54.0KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pgmq_14-1.11.0-1PGDG.rhel8.10.noarch.rpm
@ el8.x86_64 14 pgmq_14 pgmq_14-1.10.1-1PGDG.rhel8.10.noarch.rpm pgdg 1.10.1 44.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-x86_64/pgmq_14-1.10.1-1PGDG.rhel8.10.noarch.rpm
@ el8.aarch64 14 pgmq_14 pgmq_14-1.12.0-1PIGSTY.el8.aarch64.rpm pigsty 1.12.0 43.0KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pgmq_14-1.12.0-1PIGSTY.el8.aarch64.rpm
@ el8.aarch64 14 pgmq_14 pgmq_14-1.12.0-1PGDG.rhel8.10.noarch.rpm pgdg 1.12.0 55.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/pgmq_14-1.12.0-1PGDG.rhel8.10.noarch.rpm
@ el8.aarch64 14 pgmq_14 pgmq_14-1.11.0-1PGDG.rhel8.10.noarch.rpm pgdg 1.11.0 53.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/pgmq_14-1.11.0-1PGDG.rhel8.10.noarch.rpm
@ el8.aarch64 14 pgmq_14 pgmq_14-1.10.1-1PGDG.rhel8.10.noarch.rpm pgdg 1.10.1 44.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-8-aarch64/pgmq_14-1.10.1-1PGDG.rhel8.10.noarch.rpm
@ el9.x86_64 14 pgmq_14 pgmq_14-1.12.0-1PIGSTY.el9.x86_64.rpm pigsty 1.12.0 41.0KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pgmq_14-1.12.0-1PIGSTY.el9.x86_64.rpm
@ el9.x86_64 14 pgmq_14 pgmq_14-1.12.0-1PGDG.rhel9.8.noarch.rpm pgdg 1.12.0 53.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pgmq_14-1.12.0-1PGDG.rhel9.8.noarch.rpm
@ el9.x86_64 14 pgmq_14 pgmq_14-1.11.1-1PGDG.rhel9.8.noarch.rpm pgdg 1.11.1 52.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pgmq_14-1.11.1-1PGDG.rhel9.8.noarch.rpm
@ el9.x86_64 14 pgmq_14 pgmq_14-1.11.0-1PGDG.rhel9.7.noarch.rpm pgdg 1.11.0 51.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pgmq_14-1.11.0-1PGDG.rhel9.7.noarch.rpm
@ el9.x86_64 14 pgmq_14 pgmq_14-1.11.0-1PGDG.rhel9.6.noarch.rpm pgdg 1.11.0 51.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pgmq_14-1.11.0-1PGDG.rhel9.6.noarch.rpm
@ el9.x86_64 14 pgmq_14 pgmq_14-1.10.1-1PGDG.rhel9.7.noarch.rpm pgdg 1.10.1 42.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pgmq_14-1.10.1-1PGDG.rhel9.7.noarch.rpm
@ el9.x86_64 14 pgmq_14 pgmq_14-1.10.1-1PGDG.rhel9.6.noarch.rpm pgdg 1.10.1 42.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-x86_64/pgmq_14-1.10.1-1PGDG.rhel9.6.noarch.rpm
@ el9.aarch64 14 pgmq_14 pgmq_14-1.12.0-1PIGSTY.el9.aarch64.rpm pigsty 1.12.0 41.0KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pgmq_14-1.12.0-1PIGSTY.el9.aarch64.rpm
@ el9.aarch64 14 pgmq_14 pgmq_14-1.12.0-1PGDG.rhel9.8.noarch.rpm pgdg 1.12.0 53.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/pgmq_14-1.12.0-1PGDG.rhel9.8.noarch.rpm
@ el9.aarch64 14 pgmq_14 pgmq_14-1.11.1-1PGDG.rhel9.8.noarch.rpm pgdg 1.11.1 52.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/pgmq_14-1.11.1-1PGDG.rhel9.8.noarch.rpm
@ el9.aarch64 14 pgmq_14 pgmq_14-1.11.0-1PGDG.rhel9.7.noarch.rpm pgdg 1.11.0 51.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/pgmq_14-1.11.0-1PGDG.rhel9.7.noarch.rpm
@ el9.aarch64 14 pgmq_14 pgmq_14-1.11.0-1PGDG.rhel9.6.noarch.rpm pgdg 1.11.0 51.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/pgmq_14-1.11.0-1PGDG.rhel9.6.noarch.rpm
@ el9.aarch64 14 pgmq_14 pgmq_14-1.10.1-1PGDG.rhel9.7.noarch.rpm pgdg 1.10.1 42.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/pgmq_14-1.10.1-1PGDG.rhel9.7.noarch.rpm
@ el9.aarch64 14 pgmq_14 pgmq_14-1.10.1-1PGDG.rhel9.6.noarch.rpm pgdg 1.10.1 42.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-9-aarch64/pgmq_14-1.10.1-1PGDG.rhel9.6.noarch.rpm
@ el10.x86_64 14 pgmq_14 pgmq_14-1.12.0-1PIGSTY.el10.x86_64.rpm pigsty 1.12.0 41.1KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pgmq_14-1.12.0-1PIGSTY.el10.x86_64.rpm
@ el10.x86_64 14 pgmq_14 pgmq_14-1.12.0-1PGDG.rhel10.2.noarch.rpm pgdg 1.12.0 53.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/pgmq_14-1.12.0-1PGDG.rhel10.2.noarch.rpm
@ el10.x86_64 14 pgmq_14 pgmq_14-1.11.1-1PGDG.rhel10.2.noarch.rpm pgdg 1.11.1 52.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/pgmq_14-1.11.1-1PGDG.rhel10.2.noarch.rpm
@ el10.x86_64 14 pgmq_14 pgmq_14-1.11.0-1PGDG.rhel10.1.noarch.rpm pgdg 1.11.0 51.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/pgmq_14-1.11.0-1PGDG.rhel10.1.noarch.rpm
@ el10.x86_64 14 pgmq_14 pgmq_14-1.11.0-1PGDG.rhel10.0.noarch.rpm pgdg 1.11.0 51.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/pgmq_14-1.11.0-1PGDG.rhel10.0.noarch.rpm
@ el10.x86_64 14 pgmq_14 pgmq_14-1.10.1-1PGDG.rhel10.1.noarch.rpm pgdg 1.10.1 42.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/pgmq_14-1.10.1-1PGDG.rhel10.1.noarch.rpm
@ el10.x86_64 14 pgmq_14 pgmq_14-1.10.1-1PGDG.rhel10.0.noarch.rpm pgdg 1.10.1 43.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-x86_64/pgmq_14-1.10.1-1PGDG.rhel10.0.noarch.rpm
@ el10.aarch64 14 pgmq_14 pgmq_14-1.12.0-1PIGSTY.el10.aarch64.rpm pigsty 1.12.0 41.1KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pgmq_14-1.12.0-1PIGSTY.el10.aarch64.rpm
@ el10.aarch64 14 pgmq_14 pgmq_14-1.12.0-1PGDG.rhel10.2.noarch.rpm pgdg 1.12.0 53.3KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/pgmq_14-1.12.0-1PGDG.rhel10.2.noarch.rpm
@ el10.aarch64 14 pgmq_14 pgmq_14-1.11.1-1PGDG.rhel10.2.noarch.rpm pgdg 1.11.1 52.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/pgmq_14-1.11.1-1PGDG.rhel10.2.noarch.rpm
@ el10.aarch64 14 pgmq_14 pgmq_14-1.11.0-1PGDG.rhel10.1.noarch.rpm pgdg 1.11.0 51.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/pgmq_14-1.11.0-1PGDG.rhel10.1.noarch.rpm
@ el10.aarch64 14 pgmq_14 pgmq_14-1.11.0-1PGDG.rhel10.0.noarch.rpm pgdg 1.11.0 51.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/pgmq_14-1.11.0-1PGDG.rhel10.0.noarch.rpm
@ el10.aarch64 14 pgmq_14 pgmq_14-1.10.1-1PGDG.rhel10.1.noarch.rpm pgdg 1.10.1 42.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/pgmq_14-1.10.1-1PGDG.rhel10.1.noarch.rpm
@ el10.aarch64 14 pgmq_14 pgmq_14-1.10.1-1PGDG.rhel10.0.noarch.rpm pgdg 1.10.1 42.8KiB https://mirrors.aliyun.com/postgresql/repos/yum/14/redhat/rhel-10-aarch64/pgmq_14-1.10.1-1PGDG.rhel10.0.noarch.rpm
@ d12.x86_64 14 postgresql-14-pgmq postgresql-14-pgmq_1.12.0-1PIGSTY~bookworm_amd64.deb pigsty 1.12.0 26.6KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgmq/postgresql-14-pgmq_1.12.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 14 postgresql-14-pgmq postgresql-14-pgmq_1.12.0-1PIGSTY~bookworm_arm64.deb pigsty 1.12.0 26.6KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pgmq/postgresql-14-pgmq_1.12.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 14 postgresql-14-pgmq postgresql-14-pgmq_1.12.0-1PIGSTY~trixie_amd64.deb pigsty 1.12.0 26.6KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgmq/postgresql-14-pgmq_1.12.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 14 postgresql-14-pgmq postgresql-14-pgmq_1.12.0-1PIGSTY~trixie_arm64.deb pigsty 1.12.0 26.6KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pgmq/postgresql-14-pgmq_1.12.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 14 postgresql-14-pgmq postgresql-14-pgmq_1.12.0-1PIGSTY~jammy_amd64.deb pigsty 1.12.0 27.1KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgmq/postgresql-14-pgmq_1.12.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 14 postgresql-14-pgmq postgresql-14-pgmq_1.12.0-1PIGSTY~jammy_arm64.deb pigsty 1.12.0 27.1KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pgmq/postgresql-14-pgmq_1.12.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 14 postgresql-14-pgmq postgresql-14-pgmq_1.12.0-1PIGSTY~noble_amd64.deb pigsty 1.12.0 27.1KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgmq/postgresql-14-pgmq_1.12.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 14 postgresql-14-pgmq postgresql-14-pgmq_1.12.0-1PIGSTY~noble_arm64.deb pigsty 1.12.0 27.1KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pgmq/postgresql-14-pgmq_1.12.0-1PIGSTY~noble_arm64.deb
@ u26.x86_64 14 postgresql-14-pgmq postgresql-14-pgmq_1.12.0-1PIGSTY~resolute_amd64.deb pigsty 1.12.0 27.1KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgmq/postgresql-14-pgmq_1.12.0-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 14 postgresql-14-pgmq postgresql-14-pgmq_1.12.0-1PIGSTY~resolute_arm64.deb pigsty 1.12.0 27.1KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pgmq/postgresql-14-pgmq_1.12.0-1PIGSTY~resolute_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `pgmq` 扩展的 RPM / DEB 包：

```bash
pig build pkg pgmq         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `pgmq` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install pgmq;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y pgmq -v 18  # PG 18
pig ext install -y pgmq -v 17  # PG 17
pig ext install -y pgmq -v 16  # PG 16
pig ext install -y pgmq -v 15  # PG 15
pig ext install -y pgmq -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y pgmq_18       # PG 18
dnf install -y pgmq_17       # PG 17
dnf install -y pgmq_16       # PG 16
dnf install -y pgmq_15       # PG 15
dnf install -y pgmq_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-pgmq   # PG 18
apt install -y postgresql-17-pgmq   # PG 17
apt install -y postgresql-16-pgmq   # PG 16
apt install -y postgresql-15-pgmq   # PG 15
apt install -y postgresql-14-pgmq   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**创建扩展**：

```sql
CREATE EXTENSION pgmq;
```

## 用法

来源：

- [PGMQ v1.12.0 README](https://github.com/pgmq/pgmq/blob/v1.12.0/README.md)
- [PGMQ v1.12.0 发行说明](https://github.com/pgmq/pgmq/releases/tag/v1.12.0)
- [版本 1.12.0 迁移 SQL](https://github.com/pgmq/pgmq/blob/v1.12.0/pgmq-extension/sql/pgmq--1.11.1--1.12.0.sql)
- [PGMQ 文档](https://pgmq.github.io/pgmq/)

pgmq 实现了持久化消息队列，作为 PostgreSQL 表和 SQL 函数。它支持延迟投递、可见性超时、FIFO 组、消息头、轮询、主题和归档功能。当需要将队列事务与同一数据库中的关系变化协调起来时，请使用此扩展。

### 创建队列并发送消息

    CREATE EXTENSION pgmq;
    SELECT pgmq.create('jobs');

    SELECT *
    FROM pgmq.send(
      queue_name => 'jobs',
      msg        => '{"task":"refresh"}'::jsonb,
      delay      => 0
    );

send 返回消息标识符。send_batch 可插入多个 JSONB 消息。头部可以携带路由或跟踪元数据，这些元数据与主体分开存储，并且在某些重载中支持它们。

### 使用可见性超时读取消息

    SELECT *
    FROM pgmq.read(
      queue_name => 'jobs',
      vt         => 30,
      qty        => 10
    );

读取操作会隐藏每条消息 vt 秒。成功后，可以删除或归档它：

    SELECT pgmq.delete('jobs', 42);
    SELECT pgmq.archive('jobs', 43);

如果处理失败或者消费者消失，则未确认的消息将再次可见。因此，消费者必须是幂等的；pgmq 不会保证任意应用程序副作用在全局范围内恰好执行一次。

pop 读取消息并立即删除，仅当允许在调用后丢失消息时才适用。

### FIFO 组头轮询

1.12.0 版本增加了对多个 FIFO 组头部的消息轮询：

    SELECT *
    FROM pgmq.read_grouped_head_with_poll(
      queue_name          => 'jobs',
      vt                  => 30,
      qty                 => 10,
      max_poll_seconds    => 5,
      poll_interval_ms    => 100
    );

此操作会选择组头部消息并进行轮询，直到达到最大轮询时间。这保留了每个组内的顺序，并允许不同组并发处理。

### 队列管理索引

- pgmq.create(queue_name): 创建队列和归档结构。
- pgmq.send 和 pgmq.send_batch: 入队 JSONB 消息，可选延迟。
- pgmq.read: 为可见性超时声明消息。
- pgmq.read_grouped_head_with_poll: 轮询 FIFO 组头部。
- pgmq.pop: 读取消息并立即删除。
- pgmq.delete: 通过移除消息来确认。
- pgmq.archive: 将消息移动到队列归档表中。
- pgmq.drop_queue: 移除队列对象。
- pgmq.metrics 和相关辅助函数: 检查可用时的队列深度和年龄。

对于队列作业，归档行存储在 pgmq.a_<queue_name> 中。将这些表视为由扩展管理的对象。

### 运营注意事项

- 将 vt 设定为比正常处理时间更长，并设计好超时后的重新投递。
- 队列和归档表消耗普通 PostgreSQL 的 WAL、存储、真空和备份容量。
- 归档或删除已完成的消息并强制执行归档保留策略。
- 长期轮询会占用数据库连接。根据消费者数量调整连接池大小和轮询间隔。
- 保持队列名称符合 pgmq 的标识符规则；调用 API 而不是从不可信输入构造表名。
