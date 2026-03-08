---
title: "pgmq"
linkTitle: "pgmq"
description: "基于Postgres实现类似AWS SQS/RSMQ的消息队列"
weight: 2880
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/pgmq/pgmq">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">pgmq/pgmq</div>
    <div class="ext-card__desc">https://github.com/pgmq/pgmq</div>
  </a>
  <a class="ext-card ext-card--source" href="pgmq-1.11.0.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">pgmq-1.11.0.tar.gz</div>
    <div class="ext-card__desc">pgmq-1.11.0.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pgmq`**](/ext/e/pgmq) | `1.11.0` | <a class="ext-badge ext-badge--cate feat" href="/ext/cate/feat">FEAT</a> | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang sql" href="/ext/language#sql">SQL</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 2880  | [**`pgmq`**](/ext/e/pgmq) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | `pgmq` |
{.ext-table}

| **相关扩展** | [`kafka_fdw`](/ext/e/kafka_fdw) [`pg_cron`](/ext/e/pg_cron) [`pg_task`](/ext/e/pg_task) [`pg_net`](/ext/e/pg_net) [`pg_background`](/ext/e/pg_background) [`pgagent`](/ext/e/pgagent) [`pg_jobmon`](/ext/e/pg_jobmon) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **下游依赖** | [`pg_later`](/ext/e/pg_later) [`vectorize`](/ext/e/vectorize) |
{.ext-table .ext-table--rel}


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#feat) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.11.0` | {{< pgvers "18,17,16,15,14" >}} | `pgmq` | - |
| [**RPM**](/ext/rpm#feat) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.11.0` | {{< pgvers "18,17,16,15,14" >}} | `pgmq_$v` | - |
| [**DEB**](/ext/deb#feat) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.11.0` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-pgmq` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 1.11.0 3 | AVAIL PIGSTY 1.11.0 3 | AVAIL PIGSTY 1.11.0 3 | AVAIL PIGSTY 1.11.0 3 | AVAIL PIGSTY 1.11.0 3 |
| el8.aarch64 | AVAIL PIGSTY 1.11.0 3 | AVAIL PIGSTY 1.11.0 3 | AVAIL PIGSTY 1.11.0 3 | AVAIL PIGSTY 1.11.0 3 | AVAIL PIGSTY 1.11.0 3 |
| el9.x86_64 | AVAIL PIGSTY 1.11.0 3 | AVAIL PIGSTY 1.11.0 3 | AVAIL PIGSTY 1.11.0 3 | AVAIL PIGSTY 1.11.0 3 | AVAIL PIGSTY 1.11.0 3 |
| el9.aarch64 | AVAIL PIGSTY 1.11.0 3 | AVAIL PIGSTY 1.11.0 3 | AVAIL PIGSTY 1.11.0 3 | AVAIL PIGSTY 1.11.0 3 | AVAIL PIGSTY 1.11.0 3 |
| el10.x86_64 | AVAIL PIGSTY 1.11.0 3 | AVAIL PIGSTY 1.11.0 3 | AVAIL PIGSTY 1.11.0 3 | AVAIL PIGSTY 1.11.0 3 | AVAIL PIGSTY 1.11.0 3 |
| el10.aarch64 | AVAIL PIGSTY 1.11.0 3 | AVAIL PIGSTY 1.11.0 3 | AVAIL PIGSTY 1.11.0 3 | AVAIL PIGSTY 1.11.0 3 | AVAIL PIGSTY 1.11.0 3 |
| d12.x86_64 | AVAIL PIGSTY 1.11.0 1 | AVAIL PIGSTY 1.11.0 1 | AVAIL PIGSTY 1.11.0 1 | AVAIL PIGSTY 1.11.0 1 | AVAIL PIGSTY 1.11.0 1 |
| d12.aarch64 | AVAIL PIGSTY 1.11.0 1 | AVAIL PIGSTY 1.11.0 1 | AVAIL PIGSTY 1.11.0 1 | AVAIL PIGSTY 1.11.0 1 | AVAIL PIGSTY 1.11.0 1 |
| d13.x86_64 | AVAIL PIGSTY 1.11.0 1 | AVAIL PIGSTY 1.11.0 1 | AVAIL PIGSTY 1.11.0 1 | AVAIL PIGSTY 1.11.0 1 | AVAIL PIGSTY 1.11.0 1 |
| d13.aarch64 | AVAIL PIGSTY 1.11.0 1 | AVAIL PIGSTY 1.11.0 1 | AVAIL PIGSTY 1.11.0 1 | AVAIL PIGSTY 1.11.0 1 | AVAIL PIGSTY 1.11.0 1 |
| u22.x86_64 | AVAIL PIGSTY 1.11.0 1 | AVAIL PIGSTY 1.11.0 1 | AVAIL PIGSTY 1.11.0 1 | AVAIL PIGSTY 1.11.0 1 | AVAIL PIGSTY 1.11.0 1 |
| u22.aarch64 | AVAIL PIGSTY 1.11.0 1 | AVAIL PIGSTY 1.11.0 1 | AVAIL PIGSTY 1.11.0 1 | AVAIL PIGSTY 1.11.0 1 | AVAIL PIGSTY 1.11.0 1 |
| u24.x86_64 | AVAIL PIGSTY 1.11.0 1 | AVAIL PIGSTY 1.11.0 1 | AVAIL PIGSTY 1.11.0 1 | AVAIL PIGSTY 1.11.0 1 | AVAIL PIGSTY 1.11.0 1 |
| u24.aarch64 | AVAIL PIGSTY 1.11.0 1 | AVAIL PIGSTY 1.11.0 1 | AVAIL PIGSTY 1.11.0 1 | AVAIL PIGSTY 1.11.0 1 | AVAIL PIGSTY 1.11.0 1 |
@ el8.x86_64 18 pgmq_18 pgmq_18-1.11.0-1PIGSTY.el8.x86_64.rpm pigsty 1.11.0 38.3KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/pgmq_18-1.11.0-1PIGSTY.el8.x86_64.rpm
@ el8.x86_64 18 pgmq_18 pgmq_18-1.11.0-1PGDG.rhel8.10.noarch.rpm pgdg 1.11.0 54.0KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-8-x86_64/pgmq_18-1.11.0-1PGDG.rhel8.10.noarch.rpm
@ el8.x86_64 18 pgmq_18 pgmq_18-1.10.1-1PGDG.rhel8.10.noarch.rpm pgdg 1.10.1 44.5KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-8-x86_64/pgmq_18-1.10.1-1PGDG.rhel8.10.noarch.rpm
@ el8.aarch64 18 pgmq_18 pgmq_18-1.11.0-1PIGSTY.el8.aarch64.rpm pigsty 1.11.0 38.2KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/pgmq_18-1.11.0-1PIGSTY.el8.aarch64.rpm
@ el8.aarch64 18 pgmq_18 pgmq_18-1.11.0-1PGDG.rhel8.10.noarch.rpm pgdg 1.11.0 53.9KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-8-aarch64/pgmq_18-1.11.0-1PGDG.rhel8.10.noarch.rpm
@ el8.aarch64 18 pgmq_18 pgmq_18-1.10.1-1PGDG.rhel8.10.noarch.rpm pgdg 1.10.1 44.4KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-8-aarch64/pgmq_18-1.10.1-1PGDG.rhel8.10.noarch.rpm
@ el9.x86_64 18 pgmq_18 pgmq_18-1.11.0-1PIGSTY.el9.x86_64.rpm pigsty 1.11.0 36.4KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/pgmq_18-1.11.0-1PIGSTY.el9.x86_64.rpm
@ el9.x86_64 18 pgmq_18 pgmq_18-1.11.0-1PGDG.rhel9.7.noarch.rpm pgdg 1.11.0 51.4KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-9-x86_64/pgmq_18-1.11.0-1PGDG.rhel9.7.noarch.rpm
@ el9.x86_64 18 pgmq_18 pgmq_18-1.10.1-1PGDG.rhel9.7.noarch.rpm pgdg 1.10.1 42.7KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-9-x86_64/pgmq_18-1.10.1-1PGDG.rhel9.7.noarch.rpm
@ el9.aarch64 18 pgmq_18 pgmq_18-1.11.0-1PIGSTY.el9.aarch64.rpm pigsty 1.11.0 36.4KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/pgmq_18-1.11.0-1PIGSTY.el9.aarch64.rpm
@ el9.aarch64 18 pgmq_18 pgmq_18-1.11.0-1PGDG.rhel9.7.noarch.rpm pgdg 1.11.0 51.3KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-9-aarch64/pgmq_18-1.11.0-1PGDG.rhel9.7.noarch.rpm
@ el9.aarch64 18 pgmq_18 pgmq_18-1.10.1-1PGDG.rhel9.7.noarch.rpm pgdg 1.10.1 42.6KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-9-aarch64/pgmq_18-1.10.1-1PGDG.rhel9.7.noarch.rpm
@ el10.x86_64 18 pgmq_18 pgmq_18-1.11.0-1PIGSTY.el10.x86_64.rpm pigsty 1.11.0 36.5KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/pgmq_18-1.11.0-1PIGSTY.el10.x86_64.rpm
@ el10.x86_64 18 pgmq_18 pgmq_18-1.11.0-1PGDG.rhel10.1.noarch.rpm pgdg 1.11.0 51.6KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-10-x86_64/pgmq_18-1.11.0-1PGDG.rhel10.1.noarch.rpm
@ el10.x86_64 18 pgmq_18 pgmq_18-1.10.1-1PGDG.rhel10.1.noarch.rpm pgdg 1.10.1 42.8KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-10-x86_64/pgmq_18-1.10.1-1PGDG.rhel10.1.noarch.rpm
@ el10.aarch64 18 pgmq_18 pgmq_18-1.11.0-1PIGSTY.el10.aarch64.rpm pigsty 1.11.0 36.5KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/pgmq_18-1.11.0-1PIGSTY.el10.aarch64.rpm
@ el10.aarch64 18 pgmq_18 pgmq_18-1.11.0-1PGDG.rhel10.1.noarch.rpm pgdg 1.11.0 51.5KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-10-aarch64/pgmq_18-1.11.0-1PGDG.rhel10.1.noarch.rpm
@ el10.aarch64 18 pgmq_18 pgmq_18-1.10.1-1PGDG.rhel10.1.noarch.rpm pgdg 1.10.1 42.8KiB https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-10-aarch64/pgmq_18-1.10.1-1PGDG.rhel10.1.noarch.rpm
@ d12.x86_64 18 postgresql-18-pgmq postgresql-18-pgmq_1.11.0-1PIGSTY~bookworm_amd64.deb pigsty 1.11.0 26.0KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pgmq/postgresql-18-pgmq_1.11.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-pgmq postgresql-18-pgmq_1.11.0-1PIGSTY~bookworm_arm64.deb pigsty 1.11.0 26.0KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pgmq/postgresql-18-pgmq_1.11.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-pgmq postgresql-18-pgmq_1.11.0-1PIGSTY~trixie_amd64.deb pigsty 1.11.0 26.0KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pgmq/postgresql-18-pgmq_1.11.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-pgmq postgresql-18-pgmq_1.11.0-1PIGSTY~trixie_arm64.deb pigsty 1.11.0 26.0KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pgmq/postgresql-18-pgmq_1.11.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-pgmq postgresql-18-pgmq_1.11.0-1PIGSTY~jammy_amd64.deb pigsty 1.11.0 26.5KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pgmq/postgresql-18-pgmq_1.11.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-pgmq postgresql-18-pgmq_1.11.0-1PIGSTY~jammy_arm64.deb pigsty 1.11.0 26.5KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pgmq/postgresql-18-pgmq_1.11.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-pgmq postgresql-18-pgmq_1.11.0-1PIGSTY~noble_amd64.deb pigsty 1.11.0 26.4KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pgmq/postgresql-18-pgmq_1.11.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-pgmq postgresql-18-pgmq_1.11.0-1PIGSTY~noble_arm64.deb pigsty 1.11.0 26.4KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pgmq/postgresql-18-pgmq_1.11.0-1PIGSTY~noble_arm64.deb
@ el8.x86_64 17 pgmq_17 pgmq_17-1.11.0-1PIGSTY.el8.x86_64.rpm pigsty 1.11.0 38.3KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/pgmq_17-1.11.0-1PIGSTY.el8.x86_64.rpm
@ el8.x86_64 17 pgmq_17 pgmq_17-1.11.0-1PGDG.rhel8.10.noarch.rpm pgdg 1.11.0 54.0KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-8-x86_64/pgmq_17-1.11.0-1PGDG.rhel8.10.noarch.rpm
@ el8.x86_64 17 pgmq_17 pgmq_17-1.10.1-1PGDG.rhel8.10.noarch.rpm pgdg 1.10.1 44.5KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-8-x86_64/pgmq_17-1.10.1-1PGDG.rhel8.10.noarch.rpm
@ el8.aarch64 17 pgmq_17 pgmq_17-1.11.0-1PIGSTY.el8.aarch64.rpm pigsty 1.11.0 38.2KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/pgmq_17-1.11.0-1PIGSTY.el8.aarch64.rpm
@ el8.aarch64 17 pgmq_17 pgmq_17-1.11.0-1PGDG.rhel8.10.noarch.rpm pgdg 1.11.0 53.9KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-8-aarch64/pgmq_17-1.11.0-1PGDG.rhel8.10.noarch.rpm
@ el8.aarch64 17 pgmq_17 pgmq_17-1.10.1-1PGDG.rhel8.10.noarch.rpm pgdg 1.10.1 44.4KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-8-aarch64/pgmq_17-1.10.1-1PGDG.rhel8.10.noarch.rpm
@ el9.x86_64 17 pgmq_17 pgmq_17-1.11.0-1PIGSTY.el9.x86_64.rpm pigsty 1.11.0 36.4KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/pgmq_17-1.11.0-1PIGSTY.el9.x86_64.rpm
@ el9.x86_64 17 pgmq_17 pgmq_17-1.11.0-1PGDG.rhel9.7.noarch.rpm pgdg 1.11.0 51.4KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-9-x86_64/pgmq_17-1.11.0-1PGDG.rhel9.7.noarch.rpm
@ el9.x86_64 17 pgmq_17 pgmq_17-1.10.1-1PGDG.rhel9.7.noarch.rpm pgdg 1.10.1 42.7KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-9-x86_64/pgmq_17-1.10.1-1PGDG.rhel9.7.noarch.rpm
@ el9.aarch64 17 pgmq_17 pgmq_17-1.11.0-1PIGSTY.el9.aarch64.rpm pigsty 1.11.0 36.4KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/pgmq_17-1.11.0-1PIGSTY.el9.aarch64.rpm
@ el9.aarch64 17 pgmq_17 pgmq_17-1.11.0-1PGDG.rhel9.7.noarch.rpm pgdg 1.11.0 51.3KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-9-aarch64/pgmq_17-1.11.0-1PGDG.rhel9.7.noarch.rpm
@ el9.aarch64 17 pgmq_17 pgmq_17-1.10.1-1PGDG.rhel9.7.noarch.rpm pgdg 1.10.1 42.6KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-9-aarch64/pgmq_17-1.10.1-1PGDG.rhel9.7.noarch.rpm
@ el10.x86_64 17 pgmq_17 pgmq_17-1.11.0-1PIGSTY.el10.x86_64.rpm pigsty 1.11.0 36.5KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/pgmq_17-1.11.0-1PIGSTY.el10.x86_64.rpm
@ el10.x86_64 17 pgmq_17 pgmq_17-1.11.0-1PGDG.rhel10.1.noarch.rpm pgdg 1.11.0 51.6KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-10-x86_64/pgmq_17-1.11.0-1PGDG.rhel10.1.noarch.rpm
@ el10.x86_64 17 pgmq_17 pgmq_17-1.10.1-1PGDG.rhel10.1.noarch.rpm pgdg 1.10.1 42.8KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-10-x86_64/pgmq_17-1.10.1-1PGDG.rhel10.1.noarch.rpm
@ el10.aarch64 17 pgmq_17 pgmq_17-1.11.0-1PIGSTY.el10.aarch64.rpm pigsty 1.11.0 36.5KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/pgmq_17-1.11.0-1PIGSTY.el10.aarch64.rpm
@ el10.aarch64 17 pgmq_17 pgmq_17-1.11.0-1PGDG.rhel10.1.noarch.rpm pgdg 1.11.0 51.5KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-10-aarch64/pgmq_17-1.11.0-1PGDG.rhel10.1.noarch.rpm
@ el10.aarch64 17 pgmq_17 pgmq_17-1.10.1-1PGDG.rhel10.1.noarch.rpm pgdg 1.10.1 42.8KiB https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-10-aarch64/pgmq_17-1.10.1-1PGDG.rhel10.1.noarch.rpm
@ d12.x86_64 17 postgresql-17-pgmq postgresql-17-pgmq_1.11.0-1PIGSTY~bookworm_amd64.deb pigsty 1.11.0 26.0KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pgmq/postgresql-17-pgmq_1.11.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-pgmq postgresql-17-pgmq_1.11.0-1PIGSTY~bookworm_arm64.deb pigsty 1.11.0 26.0KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pgmq/postgresql-17-pgmq_1.11.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-pgmq postgresql-17-pgmq_1.11.0-1PIGSTY~trixie_amd64.deb pigsty 1.11.0 26.0KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pgmq/postgresql-17-pgmq_1.11.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-pgmq postgresql-17-pgmq_1.11.0-1PIGSTY~trixie_arm64.deb pigsty 1.11.0 26.0KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pgmq/postgresql-17-pgmq_1.11.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-pgmq postgresql-17-pgmq_1.11.0-1PIGSTY~jammy_amd64.deb pigsty 1.11.0 26.5KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pgmq/postgresql-17-pgmq_1.11.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-pgmq postgresql-17-pgmq_1.11.0-1PIGSTY~jammy_arm64.deb pigsty 1.11.0 26.5KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pgmq/postgresql-17-pgmq_1.11.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-pgmq postgresql-17-pgmq_1.11.0-1PIGSTY~noble_amd64.deb pigsty 1.11.0 26.4KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pgmq/postgresql-17-pgmq_1.11.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-pgmq postgresql-17-pgmq_1.11.0-1PIGSTY~noble_arm64.deb pigsty 1.11.0 26.4KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pgmq/postgresql-17-pgmq_1.11.0-1PIGSTY~noble_arm64.deb
@ el8.x86_64 16 pgmq_16 pgmq_16-1.11.0-1PIGSTY.el8.x86_64.rpm pigsty 1.11.0 38.3KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/pgmq_16-1.11.0-1PIGSTY.el8.x86_64.rpm
@ el8.x86_64 16 pgmq_16 pgmq_16-1.11.0-1PGDG.rhel8.10.noarch.rpm pgdg 1.11.0 54.0KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-x86_64/pgmq_16-1.11.0-1PGDG.rhel8.10.noarch.rpm
@ el8.x86_64 16 pgmq_16 pgmq_16-1.10.1-1PGDG.rhel8.10.noarch.rpm pgdg 1.10.1 44.5KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-x86_64/pgmq_16-1.10.1-1PGDG.rhel8.10.noarch.rpm
@ el8.aarch64 16 pgmq_16 pgmq_16-1.11.0-1PIGSTY.el8.aarch64.rpm pigsty 1.11.0 38.2KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/pgmq_16-1.11.0-1PIGSTY.el8.aarch64.rpm
@ el8.aarch64 16 pgmq_16 pgmq_16-1.11.0-1PGDG.rhel8.10.noarch.rpm pgdg 1.11.0 53.9KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-aarch64/pgmq_16-1.11.0-1PGDG.rhel8.10.noarch.rpm
@ el8.aarch64 16 pgmq_16 pgmq_16-1.10.1-1PGDG.rhel8.10.noarch.rpm pgdg 1.10.1 44.4KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-8-aarch64/pgmq_16-1.10.1-1PGDG.rhel8.10.noarch.rpm
@ el9.x86_64 16 pgmq_16 pgmq_16-1.11.0-1PIGSTY.el9.x86_64.rpm pigsty 1.11.0 36.4KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/pgmq_16-1.11.0-1PIGSTY.el9.x86_64.rpm
@ el9.x86_64 16 pgmq_16 pgmq_16-1.11.0-1PGDG.rhel9.7.noarch.rpm pgdg 1.11.0 51.4KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-x86_64/pgmq_16-1.11.0-1PGDG.rhel9.7.noarch.rpm
@ el9.x86_64 16 pgmq_16 pgmq_16-1.10.1-1PGDG.rhel9.7.noarch.rpm pgdg 1.10.1 42.7KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-x86_64/pgmq_16-1.10.1-1PGDG.rhel9.7.noarch.rpm
@ el9.aarch64 16 pgmq_16 pgmq_16-1.11.0-1PIGSTY.el9.aarch64.rpm pigsty 1.11.0 36.4KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/pgmq_16-1.11.0-1PIGSTY.el9.aarch64.rpm
@ el9.aarch64 16 pgmq_16 pgmq_16-1.11.0-1PGDG.rhel9.7.noarch.rpm pgdg 1.11.0 51.3KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-aarch64/pgmq_16-1.11.0-1PGDG.rhel9.7.noarch.rpm
@ el9.aarch64 16 pgmq_16 pgmq_16-1.10.1-1PGDG.rhel9.7.noarch.rpm pgdg 1.10.1 42.6KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-9-aarch64/pgmq_16-1.10.1-1PGDG.rhel9.7.noarch.rpm
@ el10.x86_64 16 pgmq_16 pgmq_16-1.11.0-1PIGSTY.el10.x86_64.rpm pigsty 1.11.0 36.5KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/pgmq_16-1.11.0-1PIGSTY.el10.x86_64.rpm
@ el10.x86_64 16 pgmq_16 pgmq_16-1.11.0-1PGDG.rhel10.1.noarch.rpm pgdg 1.11.0 51.6KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-10-x86_64/pgmq_16-1.11.0-1PGDG.rhel10.1.noarch.rpm
@ el10.x86_64 16 pgmq_16 pgmq_16-1.10.1-1PGDG.rhel10.1.noarch.rpm pgdg 1.10.1 42.8KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-10-x86_64/pgmq_16-1.10.1-1PGDG.rhel10.1.noarch.rpm
@ el10.aarch64 16 pgmq_16 pgmq_16-1.11.0-1PIGSTY.el10.aarch64.rpm pigsty 1.11.0 36.5KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/pgmq_16-1.11.0-1PIGSTY.el10.aarch64.rpm
@ el10.aarch64 16 pgmq_16 pgmq_16-1.11.0-1PGDG.rhel10.1.noarch.rpm pgdg 1.11.0 51.5KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-10-aarch64/pgmq_16-1.11.0-1PGDG.rhel10.1.noarch.rpm
@ el10.aarch64 16 pgmq_16 pgmq_16-1.10.1-1PGDG.rhel10.1.noarch.rpm pgdg 1.10.1 42.8KiB https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-10-aarch64/pgmq_16-1.10.1-1PGDG.rhel10.1.noarch.rpm
@ d12.x86_64 16 postgresql-16-pgmq postgresql-16-pgmq_1.11.0-1PIGSTY~bookworm_amd64.deb pigsty 1.11.0 26.0KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pgmq/postgresql-16-pgmq_1.11.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-pgmq postgresql-16-pgmq_1.11.0-1PIGSTY~bookworm_arm64.deb pigsty 1.11.0 26.0KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pgmq/postgresql-16-pgmq_1.11.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-pgmq postgresql-16-pgmq_1.11.0-1PIGSTY~trixie_amd64.deb pigsty 1.11.0 26.0KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pgmq/postgresql-16-pgmq_1.11.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-pgmq postgresql-16-pgmq_1.11.0-1PIGSTY~trixie_arm64.deb pigsty 1.11.0 26.0KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pgmq/postgresql-16-pgmq_1.11.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-pgmq postgresql-16-pgmq_1.11.0-1PIGSTY~jammy_amd64.deb pigsty 1.11.0 26.5KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pgmq/postgresql-16-pgmq_1.11.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-pgmq postgresql-16-pgmq_1.11.0-1PIGSTY~jammy_arm64.deb pigsty 1.11.0 26.5KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pgmq/postgresql-16-pgmq_1.11.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-pgmq postgresql-16-pgmq_1.11.0-1PIGSTY~noble_amd64.deb pigsty 1.11.0 26.4KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pgmq/postgresql-16-pgmq_1.11.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-pgmq postgresql-16-pgmq_1.11.0-1PIGSTY~noble_arm64.deb pigsty 1.11.0 26.4KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pgmq/postgresql-16-pgmq_1.11.0-1PIGSTY~noble_arm64.deb
@ el8.x86_64 15 pgmq_15 pgmq_15-1.11.0-1PIGSTY.el8.x86_64.rpm pigsty 1.11.0 38.3KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/pgmq_15-1.11.0-1PIGSTY.el8.x86_64.rpm
@ el8.x86_64 15 pgmq_15 pgmq_15-1.11.0-1PGDG.rhel8.10.noarch.rpm pgdg 1.11.0 54.0KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-x86_64/pgmq_15-1.11.0-1PGDG.rhel8.10.noarch.rpm
@ el8.x86_64 15 pgmq_15 pgmq_15-1.10.1-1PGDG.rhel8.10.noarch.rpm pgdg 1.10.1 44.5KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-x86_64/pgmq_15-1.10.1-1PGDG.rhel8.10.noarch.rpm
@ el8.aarch64 15 pgmq_15 pgmq_15-1.11.0-1PIGSTY.el8.aarch64.rpm pigsty 1.11.0 38.2KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/pgmq_15-1.11.0-1PIGSTY.el8.aarch64.rpm
@ el8.aarch64 15 pgmq_15 pgmq_15-1.11.0-1PGDG.rhel8.10.noarch.rpm pgdg 1.11.0 53.9KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-aarch64/pgmq_15-1.11.0-1PGDG.rhel8.10.noarch.rpm
@ el8.aarch64 15 pgmq_15 pgmq_15-1.10.1-1PGDG.rhel8.10.noarch.rpm pgdg 1.10.1 44.4KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-8-aarch64/pgmq_15-1.10.1-1PGDG.rhel8.10.noarch.rpm
@ el9.x86_64 15 pgmq_15 pgmq_15-1.11.0-1PIGSTY.el9.x86_64.rpm pigsty 1.11.0 36.4KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/pgmq_15-1.11.0-1PIGSTY.el9.x86_64.rpm
@ el9.x86_64 15 pgmq_15 pgmq_15-1.11.0-1PGDG.rhel9.7.noarch.rpm pgdg 1.11.0 51.4KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-x86_64/pgmq_15-1.11.0-1PGDG.rhel9.7.noarch.rpm
@ el9.x86_64 15 pgmq_15 pgmq_15-1.10.1-1PGDG.rhel9.7.noarch.rpm pgdg 1.10.1 42.7KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-x86_64/pgmq_15-1.10.1-1PGDG.rhel9.7.noarch.rpm
@ el9.aarch64 15 pgmq_15 pgmq_15-1.11.0-1PIGSTY.el9.aarch64.rpm pigsty 1.11.0 36.4KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/pgmq_15-1.11.0-1PIGSTY.el9.aarch64.rpm
@ el9.aarch64 15 pgmq_15 pgmq_15-1.11.0-1PGDG.rhel9.7.noarch.rpm pgdg 1.11.0 51.3KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-aarch64/pgmq_15-1.11.0-1PGDG.rhel9.7.noarch.rpm
@ el9.aarch64 15 pgmq_15 pgmq_15-1.10.1-1PGDG.rhel9.7.noarch.rpm pgdg 1.10.1 42.6KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-9-aarch64/pgmq_15-1.10.1-1PGDG.rhel9.7.noarch.rpm
@ el10.x86_64 15 pgmq_15 pgmq_15-1.11.0-1PIGSTY.el10.x86_64.rpm pigsty 1.11.0 36.5KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/pgmq_15-1.11.0-1PIGSTY.el10.x86_64.rpm
@ el10.x86_64 15 pgmq_15 pgmq_15-1.11.0-1PGDG.rhel10.1.noarch.rpm pgdg 1.11.0 51.6KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-10-x86_64/pgmq_15-1.11.0-1PGDG.rhel10.1.noarch.rpm
@ el10.x86_64 15 pgmq_15 pgmq_15-1.10.1-1PGDG.rhel10.1.noarch.rpm pgdg 1.10.1 42.8KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-10-x86_64/pgmq_15-1.10.1-1PGDG.rhel10.1.noarch.rpm
@ el10.aarch64 15 pgmq_15 pgmq_15-1.11.0-1PIGSTY.el10.aarch64.rpm pigsty 1.11.0 36.5KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/pgmq_15-1.11.0-1PIGSTY.el10.aarch64.rpm
@ el10.aarch64 15 pgmq_15 pgmq_15-1.11.0-1PGDG.rhel10.1.noarch.rpm pgdg 1.11.0 51.5KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-10-aarch64/pgmq_15-1.11.0-1PGDG.rhel10.1.noarch.rpm
@ el10.aarch64 15 pgmq_15 pgmq_15-1.10.1-1PGDG.rhel10.1.noarch.rpm pgdg 1.10.1 42.8KiB https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-10-aarch64/pgmq_15-1.10.1-1PGDG.rhel10.1.noarch.rpm
@ d12.x86_64 15 postgresql-15-pgmq postgresql-15-pgmq_1.11.0-1PIGSTY~bookworm_amd64.deb pigsty 1.11.0 26.0KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pgmq/postgresql-15-pgmq_1.11.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 15 postgresql-15-pgmq postgresql-15-pgmq_1.11.0-1PIGSTY~bookworm_arm64.deb pigsty 1.11.0 26.0KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pgmq/postgresql-15-pgmq_1.11.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 15 postgresql-15-pgmq postgresql-15-pgmq_1.11.0-1PIGSTY~trixie_amd64.deb pigsty 1.11.0 26.0KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pgmq/postgresql-15-pgmq_1.11.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 15 postgresql-15-pgmq postgresql-15-pgmq_1.11.0-1PIGSTY~trixie_arm64.deb pigsty 1.11.0 26.0KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pgmq/postgresql-15-pgmq_1.11.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 15 postgresql-15-pgmq postgresql-15-pgmq_1.11.0-1PIGSTY~jammy_amd64.deb pigsty 1.11.0 26.5KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pgmq/postgresql-15-pgmq_1.11.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 15 postgresql-15-pgmq postgresql-15-pgmq_1.11.0-1PIGSTY~jammy_arm64.deb pigsty 1.11.0 26.5KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pgmq/postgresql-15-pgmq_1.11.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 15 postgresql-15-pgmq postgresql-15-pgmq_1.11.0-1PIGSTY~noble_amd64.deb pigsty 1.11.0 26.4KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pgmq/postgresql-15-pgmq_1.11.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 15 postgresql-15-pgmq postgresql-15-pgmq_1.11.0-1PIGSTY~noble_arm64.deb pigsty 1.11.0 26.4KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pgmq/postgresql-15-pgmq_1.11.0-1PIGSTY~noble_arm64.deb
@ el8.x86_64 14 pgmq_14 pgmq_14-1.11.0-1PIGSTY.el8.x86_64.rpm pigsty 1.11.0 38.3KiB https://repo.pigsty.io/yum/pgsql/el8.x86_64/pgmq_14-1.11.0-1PIGSTY.el8.x86_64.rpm
@ el8.x86_64 14 pgmq_14 pgmq_14-1.11.0-1PGDG.rhel8.10.noarch.rpm pgdg 1.11.0 54.0KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-x86_64/pgmq_14-1.11.0-1PGDG.rhel8.10.noarch.rpm
@ el8.x86_64 14 pgmq_14 pgmq_14-1.10.1-1PGDG.rhel8.10.noarch.rpm pgdg 1.10.1 44.5KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-x86_64/pgmq_14-1.10.1-1PGDG.rhel8.10.noarch.rpm
@ el8.aarch64 14 pgmq_14 pgmq_14-1.11.0-1PIGSTY.el8.aarch64.rpm pigsty 1.11.0 38.2KiB https://repo.pigsty.io/yum/pgsql/el8.aarch64/pgmq_14-1.11.0-1PIGSTY.el8.aarch64.rpm
@ el8.aarch64 14 pgmq_14 pgmq_14-1.11.0-1PGDG.rhel8.10.noarch.rpm pgdg 1.11.0 53.9KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-aarch64/pgmq_14-1.11.0-1PGDG.rhel8.10.noarch.rpm
@ el8.aarch64 14 pgmq_14 pgmq_14-1.10.1-1PGDG.rhel8.10.noarch.rpm pgdg 1.10.1 44.4KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-8-aarch64/pgmq_14-1.10.1-1PGDG.rhel8.10.noarch.rpm
@ el9.x86_64 14 pgmq_14 pgmq_14-1.11.0-1PIGSTY.el9.x86_64.rpm pigsty 1.11.0 36.4KiB https://repo.pigsty.io/yum/pgsql/el9.x86_64/pgmq_14-1.11.0-1PIGSTY.el9.x86_64.rpm
@ el9.x86_64 14 pgmq_14 pgmq_14-1.11.0-1PGDG.rhel9.7.noarch.rpm pgdg 1.11.0 51.4KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-x86_64/pgmq_14-1.11.0-1PGDG.rhel9.7.noarch.rpm
@ el9.x86_64 14 pgmq_14 pgmq_14-1.10.1-1PGDG.rhel9.7.noarch.rpm pgdg 1.10.1 42.7KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-x86_64/pgmq_14-1.10.1-1PGDG.rhel9.7.noarch.rpm
@ el9.aarch64 14 pgmq_14 pgmq_14-1.11.0-1PIGSTY.el9.aarch64.rpm pigsty 1.11.0 36.4KiB https://repo.pigsty.io/yum/pgsql/el9.aarch64/pgmq_14-1.11.0-1PIGSTY.el9.aarch64.rpm
@ el9.aarch64 14 pgmq_14 pgmq_14-1.11.0-1PGDG.rhel9.7.noarch.rpm pgdg 1.11.0 51.3KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-aarch64/pgmq_14-1.11.0-1PGDG.rhel9.7.noarch.rpm
@ el9.aarch64 14 pgmq_14 pgmq_14-1.10.1-1PGDG.rhel9.7.noarch.rpm pgdg 1.10.1 42.6KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-9-aarch64/pgmq_14-1.10.1-1PGDG.rhel9.7.noarch.rpm
@ el10.x86_64 14 pgmq_14 pgmq_14-1.11.0-1PIGSTY.el10.x86_64.rpm pigsty 1.11.0 36.5KiB https://repo.pigsty.io/yum/pgsql/el10.x86_64/pgmq_14-1.11.0-1PIGSTY.el10.x86_64.rpm
@ el10.x86_64 14 pgmq_14 pgmq_14-1.11.0-1PGDG.rhel10.1.noarch.rpm pgdg 1.11.0 51.6KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-10-x86_64/pgmq_14-1.11.0-1PGDG.rhel10.1.noarch.rpm
@ el10.x86_64 14 pgmq_14 pgmq_14-1.10.1-1PGDG.rhel10.1.noarch.rpm pgdg 1.10.1 42.8KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-10-x86_64/pgmq_14-1.10.1-1PGDG.rhel10.1.noarch.rpm
@ el10.aarch64 14 pgmq_14 pgmq_14-1.11.0-1PIGSTY.el10.aarch64.rpm pigsty 1.11.0 36.5KiB https://repo.pigsty.io/yum/pgsql/el10.aarch64/pgmq_14-1.11.0-1PIGSTY.el10.aarch64.rpm
@ el10.aarch64 14 pgmq_14 pgmq_14-1.11.0-1PGDG.rhel10.1.noarch.rpm pgdg 1.11.0 51.5KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-10-aarch64/pgmq_14-1.11.0-1PGDG.rhel10.1.noarch.rpm
@ el10.aarch64 14 pgmq_14 pgmq_14-1.10.1-1PGDG.rhel10.1.noarch.rpm pgdg 1.10.1 42.8KiB https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-10-aarch64/pgmq_14-1.10.1-1PGDG.rhel10.1.noarch.rpm
@ d12.x86_64 14 postgresql-14-pgmq postgresql-14-pgmq_1.11.0-1PIGSTY~bookworm_amd64.deb pigsty 1.11.0 26.0KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pgmq/postgresql-14-pgmq_1.11.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 14 postgresql-14-pgmq postgresql-14-pgmq_1.11.0-1PIGSTY~bookworm_arm64.deb pigsty 1.11.0 26.0KiB https://repo.pigsty.io/apt/pgsql/bookworm/pool/main/p/pgmq/postgresql-14-pgmq_1.11.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 14 postgresql-14-pgmq postgresql-14-pgmq_1.11.0-1PIGSTY~trixie_amd64.deb pigsty 1.11.0 26.0KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pgmq/postgresql-14-pgmq_1.11.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 14 postgresql-14-pgmq postgresql-14-pgmq_1.11.0-1PIGSTY~trixie_arm64.deb pigsty 1.11.0 26.0KiB https://repo.pigsty.io/apt/pgsql/trixie/pool/main/p/pgmq/postgresql-14-pgmq_1.11.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 14 postgresql-14-pgmq postgresql-14-pgmq_1.11.0-1PIGSTY~jammy_amd64.deb pigsty 1.11.0 26.5KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pgmq/postgresql-14-pgmq_1.11.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 14 postgresql-14-pgmq postgresql-14-pgmq_1.11.0-1PIGSTY~jammy_arm64.deb pigsty 1.11.0 26.5KiB https://repo.pigsty.io/apt/pgsql/jammy/pool/main/p/pgmq/postgresql-14-pgmq_1.11.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 14 postgresql-14-pgmq postgresql-14-pgmq_1.11.0-1PIGSTY~noble_amd64.deb pigsty 1.11.0 26.4KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pgmq/postgresql-14-pgmq_1.11.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 14 postgresql-14-pgmq postgresql-14-pgmq_1.11.0-1PIGSTY~noble_arm64.deb pigsty 1.11.0 26.4KiB https://repo.pigsty.io/apt/pgsql/noble/pool/main/p/pgmq/postgresql-14-pgmq_1.11.0-1PIGSTY~noble_arm64.deb
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
