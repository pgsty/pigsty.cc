---
title: "分支扩展"
linkTitle: "分支扩展"
description: "基于 PostgreSQL 内核分支的扩展"
weight: 50
---

以下 **16** 个扩展基于 **6** 种不同的 PostgreSQL 内核分支。

这些扩展需要使用特定的 PostgreSQL 内核分支版本，而非原版 PostgreSQL 内核。

## Babelfish

以下扩展基于 [**Babelfish**](/docs/pgsql/kernel/babelfish) 内核分支：

| **扩展** | **包** | **版本** | **许可证** | **语言** | **描述** |
|:---------|:-------|:--------:|:----------:|:--------:|:---------|
| [`babelfishpg_common`](/ext/e/babelfishpg_common) | [`babelfish`](https://babelfishpg.org/) | `5.5.0` | <a class="ext-badge ext-badge--license apache20" href="/ext/license#apache20">Apache-2.0</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | SQL Server 数据类型兼容扩展 |
| [`babelfishpg_tsql`](/ext/e/babelfishpg_tsql) | [`babelfish`](https://babelfishpg.org/) | `5.5.0` | <a class="ext-badge ext-badge--license apache20" href="/ext/license#apache20">Apache-2.0</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | SQL Server SQL语法兼容性扩展 |
| [`babelfishpg_tds`](/ext/e/babelfishpg_tds) | [`babelfish`](https://babelfishpg.org/) | `1.0.0` | <a class="ext-badge ext-badge--license apache20" href="/ext/license#apache20">Apache-2.0</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | SQL Server TDS线缆协议兼容扩展 |
| [`babelfishpg_money`](/ext/e/babelfishpg_money) | [`babelfish`](https://babelfishpg.org/) | `1.1.0` | <a class="ext-badge ext-badge--license apache20" href="/ext/license#apache20">Apache-2.0</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | SQL Server 货币数据类型兼容扩展 |
{.ext-table}

## IvorySQL

以下扩展基于 [**IvorySQL**](/docs/pgsql/kernel/ivorysql) 内核分支：

| **扩展** | **包** | **版本** | **许可证** | **语言** | **描述** |
|:---------|:-------|:--------:|:----------:|:--------:|:---------|
| [`ivorysql_ora`](/ext/e/ivorysql_ora) | [`ivorysql`](https://github.com/IvorySQL/IvorySQL/tree/master/contrib/ivorysql_ora) | `1.0` | <a class="ext-badge ext-badge--license apache20" href="/ext/license#apache20">Apache-2.0</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | Oracle 兼容扩展 |
| [`ora_btree_gin`](/ext/e/ora_btree_gin) | [`ivorysql`](https://github.com/IvorySQL/IvorySQL/tree/master/contrib/ora_btree_gin) | `1.0` | <a class="ext-badge ext-badge--license apache20" href="/ext/license#apache20">Apache-2.0</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | Oracle 数据类型 GIN 索引支持 |
| [`ora_btree_gist`](/ext/e/ora_btree_gist) | [`ivorysql`](https://github.com/IvorySQL/IvorySQL/tree/master/contrib/ora_btree_gist) | `1.0` | <a class="ext-badge ext-badge--license apache20" href="/ext/license#apache20">Apache-2.0</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | Oracle 数据类型 GiST 索引支持 |
| [`pg_get_functiondef`](/ext/e/pg_get_functiondef) | [`ivorysql`](https://github.com/IvorySQL/IvorySQL/tree/master/contrib/pg_get_functiondef) | `1.0` | <a class="ext-badge ext-badge--license apache20" href="/ext/license#apache20">Apache-2.0</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | 获取函数定义 |
| [`plisql`](/ext/e/plisql) | [`ivorysql`](https://github.com/IvorySQL/IvorySQL/tree/master/src/pl/plisql) | `1.0` | <a class="ext-badge ext-badge--license apache20" href="/ext/license#apache20">Apache-2.0</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | PL/iSQL 过程语言 |
| [`gb18030_2022`](/ext/e/gb18030_2022) | [`ivorysql`](https://github.com/IvorySQL/IvorySQL/tree/master/contrib/gb18030_2022) | `1.0` | <a class="ext-badge ext-badge--license apache20" href="/ext/license#apache20">Apache-2.0</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | 支持 GB18030-2022 与 UTF-8 编码转换 |
{.ext-table}

## openHalo

以下扩展基于 [**openHalo**](/docs/pgsql/kernel/openhalo) 内核分支：

| **扩展** | **包** | **版本** | **许可证** | **语言** | **描述** |
|:---------|:-------|:--------:|:----------:|:--------:|:---------|
| [`aux_mysql`](/ext/e/aux_mysql) | [`openhalo`](https://github.com/HaloTech-Co-Ltd/openHalo) | `1.5` | <a class="ext-badge ext-badge--license gpl30" href="/ext/license#gpl30">GPL-3.0</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | MySQL兼容辅助扩展模块 |
{.ext-table}

## OrioleDB

以下扩展基于 [**OrioleDB**](/docs/pgsql/kernel/orioledb) 内核分支：

| **扩展** | **包** | **版本** | **许可证** | **语言** | **描述** |
|:---------|:-------|:--------:|:----------:|:--------:|:---------|
| [`orioledb`](/ext/e/orioledb) | [`orioledb`](https://github.com/orioledb/orioledb) | `1.7` | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | OrioleDB，下一代事务处理引擎 |
{.ext-table}

## Percona

以下扩展基于 [**Percona**](/docs/pgsql/kernel/percona) 内核分支：

| **扩展** | **包** | **版本** | **许可证** | **语言** | **描述** |
|:---------|:-------|:--------:|:----------:|:--------:|:---------|
| [`pg_tde`](/ext/e/pg_tde) | [`pg_tde`](https://github.com/percona/pg_tde) | `2.1` | <a class="ext-badge ext-badge--license mit" href="/ext/license#mit">MIT</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | Percona加密存储引擎 |
{.ext-table}

## pgEdge

以下扩展基于 [**pgEdge**](/docs/pgsql/kernel/pgedge) 内核分支：

| **扩展** | **包** | **版本** | **许可证** | **语言** | **描述** |
|:---------|:-------|:--------:|:----------:|:--------:|:---------|
| [`snowflake`](/ext/e/snowflake) | [`snowflake`](https://github.com/pgEdge/snowflake) | `2.4` | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | Snowflake 风格 64 位 ID 生成与序列工具 |
| [`spock`](/ext/e/spock) | [`spock`](https://github.com/pgEdge/spock) | `5.0.6` | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | PostgreSQL 多主逻辑复制扩展 |
| [`lolor`](/ext/e/lolor) | [`lolor`](https://github.com/pgEdge/lolor) | `1.2.2` | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | 让 PostgreSQL 大对象兼容逻辑复制的扩展 |
{.ext-table}

