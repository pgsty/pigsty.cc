---
title: "LANG - 编程语言"
linkTitle: "LANG"
description: "存储过程语言扩展：使用各种编程语言开发，调试，打包，分发，测试 PostgreSQL 存储过程：Java，Js，Lua，R，SH，PRQL…"
weight: 830
icon: fas fa-language
---

## 扩展列表

共有 **34** 个扩展，位于 **21** 个扩展包中。

| **扩展** | **包** | **版本** | **许可证** | **语言** | **描述** |
|:---------|:-------|:--------:|:----------:|:--------:|:---------|
| [`pg_tle`](/ext/e/pg_tle) | [`pg_tle`](https://github.com/aws/pg_tle) | `1.5.2` | <a class="ext-badge ext-badge--license apache20" href="/ext/license#apache20">Apache-2.0</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | AWS 可信语言扩展 |
| [`plv8`](/ext/e/plv8) | [`plv8`](https://github.com/plv8/plv8) | `3.2.4` | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang cpp" href="/ext/language#cpp">C++</a> | PL/JavaScript (v8) 可信过程程序语言 |
| [`pljs`](/ext/e/pljs) | [`pljs`](https://github.com/plv8/pljs) | `1.0.5` | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | PL/JS 可信过程程序语言 |
| [`pllua`](/ext/e/pllua) | [`pllua`](https://github.com/pllua/pllua) | `2.0.12` | <a class="ext-badge ext-badge--license mit" href="/ext/license#mit">MIT</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | Lua 程序语言 |
| [`hstore_pllua`](/ext/e/hstore_pllua) | [`pllua`](https://github.com/pllua/pllua) | `2.0.12` | <a class="ext-badge ext-badge--license mit" href="/ext/license#mit">MIT</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | Lua 程序语言的Hstore适配扩展 |
| [`plluau`](/ext/e/plluau) | [`pllua`](https://github.com/pllua/pllua) | `2.0.12` | <a class="ext-badge ext-badge--license mit" href="/ext/license#mit">MIT</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | Lua 程序语言（不受信任的） |
| [`hstore_plluau`](/ext/e/hstore_plluau) | [`pllua`](https://github.com/pllua/pllua) | `2.0.12` | <a class="ext-badge ext-badge--license mit" href="/ext/license#mit">MIT</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | Lua 程序语言的Hstore适配扩展（不受信任的） |
| [`plprql`](/ext/e/plprql) | [`plprql`](https://github.com/kaspermarstal/plprql) | `18.0.1` | <a class="ext-badge ext-badge--license apache20" href="/ext/license#apache20">Apache-2.0</a> | <a class="ext-badge ext-badge--lang rust" href="/ext/language#rust">Rust</a> | 在PostgreSQL使用PRQL——管线式关系查询语言 |
| [`pldbgapi`](/ext/e/pldbgapi) | [`pldebugger`](https://github.com/EnterpriseDB/pldebugger) | `1.9` | <a class="ext-badge ext-badge--license artistic" href="/ext/license#artistic">Artistic</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | 用于调试 PL/pgSQL 函数的服务器端支持 |
| [`plpgsql_check`](/ext/e/plpgsql_check) | [`plpgsql_check`](https://github.com/okbob/plpgsql_check) | `2.8.11` | <a class="ext-badge ext-badge--license mit" href="/ext/license#mit">MIT</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | 对 plpgsql 函数进行扩展检查 |
| [`plprofiler`](/ext/e/plprofiler) | [`plprofiler`](https://github.com/bigsql/plprofiler) | `4.2.5` | <a class="ext-badge ext-badge--license artistic" href="/ext/license#artistic">Artistic</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | 剖析 PL/pgSQL 函数 |
| [`plsh`](/ext/e/plsh) | [`plsh`](https://github.com/petere/plsh) | `1.20220917` | <a class="ext-badge ext-badge--license mit" href="/ext/license#mit">MIT</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | PL/sh 程序语言 |
| [`pljava`](/ext/e/pljava) | [`pljava`](https://github.com/tada/pljava) | `1.6.10` | <a class="ext-badge ext-badge--license bsd 3clause" href="/ext/license#bsd3clause">BSD 3-Clause</a> | <a class="ext-badge ext-badge--lang java" href="/ext/language#java">Java</a> | Java 程序语言 |
| [`plr`](/ext/e/plr) | [`plr`](https://github.com/postgres-plr/plr) | `8.4.8` | <a class="ext-badge ext-badge--license gpl20" href="/ext/license#gpl20">GPL-2.0</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | 从数据库中加载R语言解释器并执行R脚本 |
| [`plxslt`](/ext/e/plxslt) | [`plxslt`](https://github.com/petere/plxslt) | `0.20140221` | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | XSLT 存储过程语言 |
| [`pgtap`](/ext/e/pgtap) | [`pgtap`](https://github.com/theory/pgtap) | `1.3.4` | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | PostgreSQL单元测试框架 |
| [`faker`](/ext/e/faker) | [`faker`](https://github.com/anpandu/postgresql_faker) | `0.5.3` | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang python" href="/ext/language#python">Python</a> | 插入生成的测试伪造数据，Python库的包装 |
| [`dbt2`](/ext/e/dbt2) | [`dbt2`](https://github.com/osdldbt/dbt2) | `0.61.7` | <a class="ext-badge ext-badge--license artistic" href="/ext/license#artistic">Artistic</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | OSDL-DBT-2 测试组件 |
| [`pg_regresql`](/ext/e/pg_regresql) | [`pg_regresql`](https://github.com/boringsql/regresql) | `2.0.0` | <a class="ext-badge ext-badge--license bsd2clause" href="/ext/license#bsd2clause">BSD-2-Clause</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | 用 pg_class 统计信息替代物理文件大小参与查询规划 |
| [`pltcl`](/ext/e/pltcl) | [`pltcl`](https://www.postgresql.org/docs/current/pltcl.html) | `1.0` | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | PL/TCL 存储过程语言 |
| [`pltclu`](/ext/e/pltclu) | [`pltcl`](https://www.postgresql.org/docs/current/pltcl.html) | `1.0` | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | PL/TCL 存储过程语言（未受信/高权限） |
| [`plperl`](/ext/e/plperl) | [`plperl`](https://www.postgresql.org/docs/current/plperl.html) | `1.0` | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | PL/Perl 存储过程语言 |
| [`bool_plperl`](/ext/e/bool_plperl) | [`plperl`](https://www.postgresql.org/docs/current/plperl.html) | `1.0` | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | 在 bool 和 plperl 之间转换 |
| [`hstore_plperl`](/ext/e/hstore_plperl) | [`plperl`](https://www.postgresql.org/docs/current/plperl.html) | `1.0` | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | 在 hstore 和 plperl 之间转换适配类型 |
| [`jsonb_plperl`](/ext/e/jsonb_plperl) | [`plperl`](https://www.postgresql.org/docs/current/plperl.html) | `1.0` | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | 在 jsonb 和 plperl 之间转换 |
| [`plperlu`](/ext/e/plperlu) | [`plperlu`](https://www.postgresql.org/docs/current/plperl.html) | `1.0` | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | PL/PerlU 存储过程语言（未受信/高权限） |
| [`bool_plperlu`](/ext/e/bool_plperlu) | [`plperlu`](https://www.postgresql.org/docs/current/plperl.html) | `1.0` | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | 在 bool 和 plperlu 之间转换 |
| [`jsonb_plperlu`](/ext/e/jsonb_plperlu) | [`plperlu`](https://www.postgresql.org/docs/current/plperl.html) | `1.0` | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | 在 jsonb 和 plperlu 之间转换 |
| [`hstore_plperlu`](/ext/e/hstore_plperlu) | [`plperlu`](https://www.postgresql.org/docs/current/plperl.html) | `1.0` | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | 在 hstore 和 plperlu 之间转换适配类型 |
| [`plpgsql`](/ext/e/plpgsql) | [`plpgsql`](https://www.postgresql.org/docs/current/plpgsql.html) | `1.0` | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | PL/pgSQL 程序设计语言 |
| [`plpython3u`](/ext/e/plpython3u) | [`plpython3u`](https://www.postgresql.org/docs/current/plpython.html) | `1.0` | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | PL/Python3 存储过程语言（未受信/高权限） |
| [`jsonb_plpython3u`](/ext/e/jsonb_plpython3u) | [`plpython3u`](https://www.postgresql.org/docs/current/plpython.html) | `1.0` | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | 在 jsonb 和 plpython3u 之间转换 |
| [`ltree_plpython3u`](/ext/e/ltree_plpython3u) | [`plpython3u`](https://www.postgresql.org/docs/current/plpython.html) | `1.0` | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | 在 ltree 和 plpython3u 之间转换 |
| [`hstore_plpython3u`](/ext/e/hstore_plpython3u) | [`plpython3u`](https://www.postgresql.org/docs/current/plpython.html) | `1.0` | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | 在 hstore 和 plpython3u 之间转换 |
{.ext-table}


---------

## pg_tle {#pg_tle}

[**`pg_tle`**](/ext/e/pg_tle) - `1.5.2` : AWS 可信语言扩展

| **条目** | **属性** | **OS** | **x86_64** | **aarch64** |
|:---:|:---|:---:|:---:|:---:|
| **扩展名** | [`pg_tle`](/ext/e/pg_tle) | **el8** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **扩展包** | [`pg_tle`](https://github.com/aws/pg_tle) | **el9** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **RPM** | `pg_tle_$v` | **el10** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **DEB** | `postgresql-$v-pg-tle` | **d12** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **语言** | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | **d13** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **仓库** | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | **u22** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **协议** | <a class="ext-badge ext-badge--license apache20" href="/ext/license#apache20">Apache-2.0</a> | **u24** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| | | **u26** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
{.ext-table .ext-table--cate}


---------

## plv8 {#plv8}

[**`plv8`**](/ext/e/plv8) - `3.2.4` : PL/JavaScript (v8) 可信过程程序语言

| **条目** | **属性** | **OS** | **x86_64** | **aarch64** |
|:---:|:---|:---:|:---:|:---:|
| **扩展名** | [`plv8`](/ext/e/plv8) | **el8** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **扩展包** | [`plv8`](https://github.com/plv8/plv8) | **el9** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **RPM** | `plv8_$v` | **el10** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **DEB** | `postgresql-$v-plv8` | **d12** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **语言** | <a class="ext-badge ext-badge--lang cpp" href="/ext/language#cpp">C++</a> | **d13** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **仓库** | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | **u22** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **协议** | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | **u24** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| | | **u26** | - | - |
{.ext-table .ext-table--cate}


---------

## pljs {#pljs}

[**`pljs`**](/ext/e/pljs) - `1.0.5` : PL/JS 可信过程程序语言

| **条目** | **属性** | **OS** | **x86_64** | **aarch64** |
|:---:|:---|:---:|:---:|:---:|
| **扩展名** | [`pljs`](/ext/e/pljs) | **el8** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **扩展包** | [`pljs`](https://github.com/plv8/pljs) | **el9** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **RPM** | `pljs_$v` | **el10** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **DEB** | `postgresql-$v-pljs` | **d12** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **语言** | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | **d13** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **仓库** | <a class="ext-badge ext-badge--repo mixed" href="/ext/repo#mixed">MIXED</a> | **u22** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **协议** | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | **u24** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| | | **u26** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
{.ext-table .ext-table--cate}


---------

## pllua {#pllua}

[**`pllua`**](/ext/e/pllua) - `2.0.12` : Lua 程序语言

| **条目** | **属性** | **OS** | **x86_64** | **aarch64** |
|:---:|:---|:---:|:---:|:---:|
| **扩展名** | [`pllua`](/ext/e/pllua) | **el8** | {{< pgvers "17,16,15,14" >}} | {{< pgvers "17,16" >}} |
| **扩展包** | [`pllua`](https://github.com/pllua/pllua) | **el9** | {{< pgvers "17,16,15,14" >}} | {{< pgvers "17,16" >}} |
| **RPM** | `pllua_$v` | **el10** | {{< pgvers "17,16,15,14" >}} | {{< pgvers "17,16,15,14" >}} |
| **DEB** | `postgresql-$v-pllua` | **d12** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **语言** | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | **d13** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **仓库** | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | **u22** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **协议** | <a class="ext-badge ext-badge--license mit" href="/ext/license#mit">MIT</a> | **u24** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| | | **u26** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
{.ext-table .ext-table--cate}


---------

## hstore_pllua {#hstore_pllua}

[**`pllua`**](/ext/e/hstore_pllua) - `2.0.12` : Lua 程序语言的Hstore适配扩展

| **条目** | **属性** | **OS** | **x86_64** | **aarch64** |
|:---:|:---|:---:|:---:|:---:|
| **扩展名** | [`hstore_pllua`](/ext/e/hstore_pllua) | **el8** | {{< pgvers "17,16,15,14" >}} | {{< pgvers "17,16" >}} |
| **扩展包** | [`pllua`](https://github.com/pllua/pllua) | **el9** | {{< pgvers "17,16,15,14" >}} | {{< pgvers "17,16" >}} |
| **RPM** | - | **el10** | {{< pgvers "17,16,15,14" >}} | {{< pgvers "17,16,15,14" >}} |
| **DEB** | `postgresql-$v-pllua` | **d12** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **语言** | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | **d13** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **仓库** | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | **u22** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **协议** | <a class="ext-badge ext-badge--license mit" href="/ext/license#mit">MIT</a> | **u24** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| | | **u26** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
{.ext-table .ext-table--cate}


---------

## plluau {#plluau}

[**`pllua`**](/ext/e/plluau) - `2.0.12` : Lua 程序语言（不受信任的）

| **条目** | **属性** | **OS** | **x86_64** | **aarch64** |
|:---:|:---|:---:|:---:|:---:|
| **扩展名** | [`plluau`](/ext/e/plluau) | **el8** | {{< pgvers "17,16,15,14" >}} | {{< pgvers "17,16" >}} |
| **扩展包** | [`pllua`](https://github.com/pllua/pllua) | **el9** | {{< pgvers "17,16,15,14" >}} | {{< pgvers "17,16" >}} |
| **RPM** | `pllua_$v` | **el10** | {{< pgvers "17,16,15,14" >}} | {{< pgvers "17,16,15,14" >}} |
| **DEB** | `postgresql-$v-pllua` | **d12** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **语言** | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | **d13** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **仓库** | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | **u22** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **协议** | <a class="ext-badge ext-badge--license mit" href="/ext/license#mit">MIT</a> | **u24** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| | | **u26** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
{.ext-table .ext-table--cate}


---------

## hstore_plluau {#hstore_plluau}

[**`pllua`**](/ext/e/hstore_plluau) - `2.0.12` : Lua 程序语言的Hstore适配扩展（不受信任的）

| **条目** | **属性** | **OS** | **x86_64** | **aarch64** |
|:---:|:---|:---:|:---:|:---:|
| **扩展名** | [`hstore_plluau`](/ext/e/hstore_plluau) | **el8** | {{< pgvers "17,16,15,14" >}} | {{< pgvers "17,16" >}} |
| **扩展包** | [`pllua`](https://github.com/pllua/pllua) | **el9** | {{< pgvers "17,16,15,14" >}} | {{< pgvers "17,16" >}} |
| **RPM** | - | **el10** | {{< pgvers "17,16,15,14" >}} | {{< pgvers "17,16,15,14" >}} |
| **DEB** | `postgresql-$v-pllua` | **d12** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **语言** | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | **d13** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **仓库** | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | **u22** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **协议** | <a class="ext-badge ext-badge--license mit" href="/ext/license#mit">MIT</a> | **u24** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| | | **u26** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
{.ext-table .ext-table--cate}


---------

## plprql {#plprql}

[**`plprql`**](/ext/e/plprql) - `18.0.1` : 在PostgreSQL使用PRQL——管线式关系查询语言

| **条目** | **属性** | **OS** | **x86_64** | **aarch64** |
|:---:|:---|:---:|:---:|:---:|
| **扩展名** | [`plprql`](/ext/e/plprql) | **el8** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **扩展包** | [`plprql`](https://github.com/kaspermarstal/plprql) | **el9** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **RPM** | `plprql_$v` | **el10** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **DEB** | `postgresql-$v-plprql` | **d12** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **语言** | <a class="ext-badge ext-badge--lang rust" href="/ext/language#rust">Rust</a> | **d13** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **仓库** | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | **u22** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **协议** | <a class="ext-badge ext-badge--license apache20" href="/ext/license#apache20">Apache-2.0</a> | **u24** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| | | **u26** | - | - |
{.ext-table .ext-table--cate}


---------

## pldbgapi {#pldbgapi}

[**`pldebugger`**](/ext/e/pldbgapi) - `1.9` : 用于调试 PL/pgSQL 函数的服务器端支持

| **条目** | **属性** | **OS** | **x86_64** | **aarch64** |
|:---:|:---|:---:|:---:|:---:|
| **扩展名** | [`pldbgapi`](/ext/e/pldbgapi) | **el8** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **扩展包** | [`pldebugger`](https://github.com/EnterpriseDB/pldebugger) | **el9** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **RPM** | `pldebugger_$v` | **el10** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **DEB** | `postgresql-$v-pldebugger` | **d12** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **语言** | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | **d13** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **仓库** | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | **u22** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **协议** | <a class="ext-badge ext-badge--license artistic" href="/ext/license#artistic">Artistic</a> | **u24** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| | | **u26** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
{.ext-table .ext-table--cate}


---------

## plpgsql_check {#plpgsql_check}

[**`plpgsql_check`**](/ext/e/plpgsql_check) - `2.8.11` : 对 plpgsql 函数进行扩展检查

| **条目** | **属性** | **OS** | **x86_64** | **aarch64** |
|:---:|:---|:---:|:---:|:---:|
| **扩展名** | [`plpgsql_check`](/ext/e/plpgsql_check) | **el8** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **扩展包** | [`plpgsql_check`](https://github.com/okbob/plpgsql_check) | **el9** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **RPM** | `plpgsql_check_$v` | **el10** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **DEB** | `postgresql-$v-plpgsql-check` | **d12** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **语言** | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | **d13** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **仓库** | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | **u22** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **协议** | <a class="ext-badge ext-badge--license mit" href="/ext/license#mit">MIT</a> | **u24** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| | | **u26** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
{.ext-table .ext-table--cate}


---------

## plprofiler {#plprofiler}

[**`plprofiler`**](/ext/e/plprofiler) - `4.2.5` : 剖析 PL/pgSQL 函数

| **条目** | **属性** | **OS** | **x86_64** | **aarch64** |
|:---:|:---|:---:|:---:|:---:|
| **扩展名** | [`plprofiler`](/ext/e/plprofiler) | **el8** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **扩展包** | [`plprofiler`](https://github.com/bigsql/plprofiler) | **el9** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **RPM** | `plprofiler_$v` | **el10** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **DEB** | `postgresql-$v-plprofiler` | **d12** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **语言** | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | **d13** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **仓库** | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | **u22** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **协议** | <a class="ext-badge ext-badge--license artistic" href="/ext/license#artistic">Artistic</a> | **u24** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| | | **u26** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
{.ext-table .ext-table--cate}


---------

## plsh {#plsh}

[**`plsh`**](/ext/e/plsh) - `1.20220917` : PL/sh 程序语言

| **条目** | **属性** | **OS** | **x86_64** | **aarch64** |
|:---:|:---|:---:|:---:|:---:|
| **扩展名** | [`plsh`](/ext/e/plsh) | **el8** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **扩展包** | [`plsh`](https://github.com/petere/plsh) | **el9** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **RPM** | `plsh_$v` | **el10** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **DEB** | `postgresql-$v-plsh` | **d12** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **语言** | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | **d13** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **仓库** | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | **u22** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **协议** | <a class="ext-badge ext-badge--license mit" href="/ext/license#mit">MIT</a> | **u24** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| | | **u26** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
{.ext-table .ext-table--cate}


---------

## pljava {#pljava}

[**`pljava`**](/ext/e/pljava) - `1.6.10` : Java 程序语言

| **条目** | **属性** | **OS** | **x86_64** | **aarch64** |
|:---:|:---|:---:|:---:|:---:|
| **扩展名** | [`pljava`](/ext/e/pljava) | **el8** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **扩展包** | [`pljava`](https://github.com/tada/pljava) | **el9** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **RPM** | `pljava_$v` | **el10** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **DEB** | `postgresql-$v-pljava` | **d12** | {{< pgvers "17,16,15,14" >}} | {{< pgvers "17,16,15,14" >}} |
| **语言** | <a class="ext-badge ext-badge--lang java" href="/ext/language#java">Java</a> | **d13** | {{< pgvers "17,16,15,14" >}} | {{< pgvers "17,16,15,14" >}} |
| **仓库** | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | **u22** | {{< pgvers "17,16,15,14" >}} | {{< pgvers "17,16,15,14" >}} |
| **协议** | <a class="ext-badge ext-badge--license bsd 3clause" href="/ext/license#bsd3clause">BSD 3-Clause</a> | **u24** | {{< pgvers "17,16,15,14" >}} | {{< pgvers "17,16,15,14" >}} |
| | | **u26** | - | - |
{.ext-table .ext-table--cate}


---------

## plr {#plr}

[**`plr`**](/ext/e/plr) - `8.4.8` : 从数据库中加载R语言解释器并执行R脚本

| **条目** | **属性** | **OS** | **x86_64** | **aarch64** |
|:---:|:---|:---:|:---:|:---:|
| **扩展名** | [`plr`](/ext/e/plr) | **el8** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **扩展包** | [`plr`](https://github.com/postgres-plr/plr) | **el9** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **RPM** | `plr_$v` | **el10** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **DEB** | `postgresql-$v-plr` | **d12** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **语言** | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | **d13** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **仓库** | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | **u22** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **协议** | <a class="ext-badge ext-badge--license gpl20" href="/ext/license#gpl20">GPL-2.0</a> | **u24** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| | | **u26** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
{.ext-table .ext-table--cate}


---------

## plxslt {#plxslt}

[**`plxslt`**](/ext/e/plxslt) - `0.20140221` : XSLT 存储过程语言

| **条目** | **属性** | **OS** | **x86_64** | **aarch64** |
|:---:|:---|:---:|:---:|:---:|
| **扩展名** | [`plxslt`](/ext/e/plxslt) | **el8** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **扩展包** | [`plxslt`](https://github.com/petere/plxslt) | **el9** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **RPM** | `plxslt_$v` | **el10** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **DEB** | `postgresql-$v-plxslt` | **d12** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **语言** | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | **d13** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **仓库** | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | **u22** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **协议** | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | **u24** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| | | **u26** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
{.ext-table .ext-table--cate}


---------

## pgtap {#pgtap}

[**`pgtap`**](/ext/e/pgtap) - `1.3.4` : PostgreSQL单元测试框架

| **条目** | **属性** | **OS** | **x86_64** | **aarch64** |
|:---:|:---|:---:|:---:|:---:|
| **扩展名** | [`pgtap`](/ext/e/pgtap) | **el8** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **扩展包** | [`pgtap`](https://github.com/theory/pgtap) | **el9** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **RPM** | `pgtap_$v` | **el10** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **DEB** | `postgresql-$v-pgtap` | **d12** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **语言** | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | **d13** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **仓库** | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | **u22** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **协议** | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | **u24** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| | | **u26** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
{.ext-table .ext-table--cate}


---------

## faker {#faker}

[**`faker`**](/ext/e/faker) - `0.5.3` : 插入生成的测试伪造数据，Python库的包装

| **条目** | **属性** | **OS** | **x86_64** | **aarch64** |
|:---:|:---|:---:|:---:|:---:|
| **扩展名** | [`faker`](/ext/e/faker) | **el8** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **扩展包** | [`faker`](https://github.com/anpandu/postgresql_faker) | **el9** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **RPM** | `postgresql_faker_$v` | **el10** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **DEB** | - | **d12** | - | - |
| **语言** | <a class="ext-badge ext-badge--lang python" href="/ext/language#python">Python</a> | **d13** | - | - |
| **仓库** | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | **u22** | - | - |
| **协议** | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | **u24** | - | - |
| | | **u26** | - | - |
{.ext-table .ext-table--cate}


---------

## dbt2 {#dbt2}

[**`dbt2`**](/ext/e/dbt2) - `0.61.7` : OSDL-DBT-2 测试组件

| **条目** | **属性** | **OS** | **x86_64** | **aarch64** |
|:---:|:---|:---:|:---:|:---:|
| **扩展名** | [`dbt2`](/ext/e/dbt2) | **el8** | {{< pgvers "16,15,14" >}} | {{< pgvers "16,15,14" >}} |
| **扩展包** | [`dbt2`](https://github.com/osdldbt/dbt2) | **el9** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **RPM** | `dbt2-pg$v-extensions` | **el10** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **DEB** | - | **d12** | - | - |
| **语言** | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | **d13** | - | - |
| **仓库** | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | **u22** | - | - |
| **协议** | <a class="ext-badge ext-badge--license artistic" href="/ext/license#artistic">Artistic</a> | **u24** | - | - |
| | | **u26** | - | - |
{.ext-table .ext-table--cate}


---------

## pg_regresql {#pg_regresql}

[**`pg_regresql`**](/ext/e/pg_regresql) - `2.0.0` : 用 pg_class 统计信息替代物理文件大小参与查询规划

| **条目** | **属性** | **OS** | **x86_64** | **aarch64** |
|:---:|:---|:---:|:---:|:---:|
| **扩展名** | [`pg_regresql`](/ext/e/pg_regresql) | **el8** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **扩展包** | [`pg_regresql`](https://github.com/boringsql/regresql) | **el9** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **RPM** | `pg_regresql_$v` | **el10** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **DEB** | `postgresql-$v-pg-regresql` | **d12** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **语言** | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | **d13** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **仓库** | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | **u22** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **协议** | <a class="ext-badge ext-badge--license bsd2clause" href="/ext/license#bsd2clause">BSD-2-Clause</a> | **u24** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| | | **u26** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
{.ext-table .ext-table--cate}


---------

## pltcl {#pltcl}

[**`pltcl`**](/ext/e/pltcl) - `1.0` : PL/TCL 存储过程语言

| **条目** | **属性** | **OS** | **x86_64** | **aarch64** |
|:---:|:---|:---:|:---:|:---:|
| **扩展名** | [`pltcl`](/ext/e/pltcl) | **el8** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **扩展包** | [`pltcl`](https://www.postgresql.org/docs/current/pltcl.html) | **el9** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **RPM** | `postgresql$v-contrib` | **el10** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **DEB** | `postgresql-$v` | **d12** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **语言** | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | **d13** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **仓库** | <a class="ext-badge ext-badge--repo contrib" href="/ext/repo#contrib">CONTRIB</a> | **u22** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **协议** | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | **u24** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| | | **u26** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
{.ext-table .ext-table--cate}


---------

## pltclu {#pltclu}

[**`pltcl`**](/ext/e/pltclu) - `1.0` : PL/TCL 存储过程语言（未受信/高权限）

| **条目** | **属性** | **OS** | **x86_64** | **aarch64** |
|:---:|:---|:---:|:---:|:---:|
| **扩展名** | [`pltclu`](/ext/e/pltclu) | **el8** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **扩展包** | [`pltcl`](https://www.postgresql.org/docs/current/pltcl.html) | **el9** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **RPM** | `postgresql$v-contrib` | **el10** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **DEB** | `postgresql-$v` | **d12** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **语言** | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | **d13** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **仓库** | <a class="ext-badge ext-badge--repo contrib" href="/ext/repo#contrib">CONTRIB</a> | **u22** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **协议** | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | **u24** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| | | **u26** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
{.ext-table .ext-table--cate}


---------

## plperl {#plperl}

[**`plperl`**](/ext/e/plperl) - `1.0` : PL/Perl 存储过程语言

| **条目** | **属性** | **OS** | **x86_64** | **aarch64** |
|:---:|:---|:---:|:---:|:---:|
| **扩展名** | [`plperl`](/ext/e/plperl) | **el8** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **扩展包** | [`plperl`](https://www.postgresql.org/docs/current/plperl.html) | **el9** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **RPM** | `postgresql$v-contrib` | **el10** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **DEB** | `postgresql-$v` | **d12** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **语言** | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | **d13** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **仓库** | <a class="ext-badge ext-badge--repo contrib" href="/ext/repo#contrib">CONTRIB</a> | **u22** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **协议** | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | **u24** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| | | **u26** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
{.ext-table .ext-table--cate}


---------

## bool_plperl {#bool_plperl}

[**`plperl`**](/ext/e/bool_plperl) - `1.0` : 在 bool 和 plperl 之间转换

| **条目** | **属性** | **OS** | **x86_64** | **aarch64** |
|:---:|:---|:---:|:---:|:---:|
| **扩展名** | [`bool_plperl`](/ext/e/bool_plperl) | **el8** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **扩展包** | [`plperl`](https://www.postgresql.org/docs/current/plperl.html) | **el9** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **RPM** | `postgresql$v-contrib` | **el10** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **DEB** | `postgresql-$v` | **d12** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **语言** | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | **d13** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **仓库** | <a class="ext-badge ext-badge--repo contrib" href="/ext/repo#contrib">CONTRIB</a> | **u22** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **协议** | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | **u24** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| | | **u26** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
{.ext-table .ext-table--cate}


---------

## hstore_plperl {#hstore_plperl}

[**`plperl`**](/ext/e/hstore_plperl) - `1.0` : 在 hstore 和 plperl 之间转换适配类型

| **条目** | **属性** | **OS** | **x86_64** | **aarch64** |
|:---:|:---|:---:|:---:|:---:|
| **扩展名** | [`hstore_plperl`](/ext/e/hstore_plperl) | **el8** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **扩展包** | [`plperl`](https://www.postgresql.org/docs/current/plperl.html) | **el9** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **RPM** | `postgresql$v-contrib` | **el10** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **DEB** | `postgresql-$v` | **d12** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **语言** | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | **d13** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **仓库** | <a class="ext-badge ext-badge--repo contrib" href="/ext/repo#contrib">CONTRIB</a> | **u22** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **协议** | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | **u24** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| | | **u26** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
{.ext-table .ext-table--cate}


---------

## jsonb_plperl {#jsonb_plperl}

[**`plperl`**](/ext/e/jsonb_plperl) - `1.0` : 在 jsonb 和 plperl 之间转换

| **条目** | **属性** | **OS** | **x86_64** | **aarch64** |
|:---:|:---|:---:|:---:|:---:|
| **扩展名** | [`jsonb_plperl`](/ext/e/jsonb_plperl) | **el8** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **扩展包** | [`plperl`](https://www.postgresql.org/docs/current/plperl.html) | **el9** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **RPM** | `postgresql$v-contrib` | **el10** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **DEB** | `postgresql-$v` | **d12** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **语言** | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | **d13** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **仓库** | <a class="ext-badge ext-badge--repo contrib" href="/ext/repo#contrib">CONTRIB</a> | **u22** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **协议** | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | **u24** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| | | **u26** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
{.ext-table .ext-table--cate}


---------

## plperlu {#plperlu}

[**`plperlu`**](/ext/e/plperlu) - `1.0` : PL/PerlU 存储过程语言（未受信/高权限）

| **条目** | **属性** | **OS** | **x86_64** | **aarch64** |
|:---:|:---|:---:|:---:|:---:|
| **扩展名** | [`plperlu`](/ext/e/plperlu) | **el8** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **扩展包** | [`plperlu`](https://www.postgresql.org/docs/current/plperl.html) | **el9** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **RPM** | `postgresql$v-contrib` | **el10** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **DEB** | `postgresql-$v` | **d12** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **语言** | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | **d13** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **仓库** | <a class="ext-badge ext-badge--repo contrib" href="/ext/repo#contrib">CONTRIB</a> | **u22** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **协议** | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | **u24** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| | | **u26** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
{.ext-table .ext-table--cate}


---------

## bool_plperlu {#bool_plperlu}

[**`plperlu`**](/ext/e/bool_plperlu) - `1.0` : 在 bool 和 plperlu 之间转换

| **条目** | **属性** | **OS** | **x86_64** | **aarch64** |
|:---:|:---|:---:|:---:|:---:|
| **扩展名** | [`bool_plperlu`](/ext/e/bool_plperlu) | **el8** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **扩展包** | [`plperlu`](https://www.postgresql.org/docs/current/plperl.html) | **el9** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **RPM** | `postgresql$v-contrib` | **el10** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **DEB** | `postgresql-$v` | **d12** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **语言** | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | **d13** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **仓库** | <a class="ext-badge ext-badge--repo contrib" href="/ext/repo#contrib">CONTRIB</a> | **u22** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **协议** | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | **u24** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| | | **u26** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
{.ext-table .ext-table--cate}


---------

## jsonb_plperlu {#jsonb_plperlu}

[**`plperlu`**](/ext/e/jsonb_plperlu) - `1.0` : 在 jsonb 和 plperlu 之间转换

| **条目** | **属性** | **OS** | **x86_64** | **aarch64** |
|:---:|:---|:---:|:---:|:---:|
| **扩展名** | [`jsonb_plperlu`](/ext/e/jsonb_plperlu) | **el8** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **扩展包** | [`plperlu`](https://www.postgresql.org/docs/current/plperl.html) | **el9** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **RPM** | `postgresql$v-contrib` | **el10** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **DEB** | `postgresql-$v` | **d12** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **语言** | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | **d13** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **仓库** | <a class="ext-badge ext-badge--repo contrib" href="/ext/repo#contrib">CONTRIB</a> | **u22** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **协议** | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | **u24** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| | | **u26** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
{.ext-table .ext-table--cate}


---------

## hstore_plperlu {#hstore_plperlu}

[**`plperlu`**](/ext/e/hstore_plperlu) - `1.0` : 在 hstore 和 plperlu 之间转换适配类型

| **条目** | **属性** | **OS** | **x86_64** | **aarch64** |
|:---:|:---|:---:|:---:|:---:|
| **扩展名** | [`hstore_plperlu`](/ext/e/hstore_plperlu) | **el8** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **扩展包** | [`plperlu`](https://www.postgresql.org/docs/current/plperl.html) | **el9** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **RPM** | `postgresql$v-contrib` | **el10** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **DEB** | `postgresql-$v` | **d12** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **语言** | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | **d13** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **仓库** | <a class="ext-badge ext-badge--repo contrib" href="/ext/repo#contrib">CONTRIB</a> | **u22** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **协议** | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | **u24** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| | | **u26** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
{.ext-table .ext-table--cate}


---------

## plpgsql {#plpgsql}

[**`plpgsql`**](/ext/e/plpgsql) - `1.0` : PL/pgSQL 程序设计语言

| **条目** | **属性** | **OS** | **x86_64** | **aarch64** |
|:---:|:---|:---:|:---:|:---:|
| **扩展名** | [`plpgsql`](/ext/e/plpgsql) | **el8** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **扩展包** | [`plpgsql`](https://www.postgresql.org/docs/current/plpgsql.html) | **el9** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **RPM** | `postgresql$v-contrib` | **el10** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **DEB** | `postgresql-$v` | **d12** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **语言** | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | **d13** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **仓库** | <a class="ext-badge ext-badge--repo contrib" href="/ext/repo#contrib">CONTRIB</a> | **u22** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **协议** | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | **u24** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| | | **u26** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
{.ext-table .ext-table--cate}


---------

## plpython3u {#plpython3u}

[**`plpython3u`**](/ext/e/plpython3u) - `1.0` : PL/Python3 存储过程语言（未受信/高权限）

| **条目** | **属性** | **OS** | **x86_64** | **aarch64** |
|:---:|:---|:---:|:---:|:---:|
| **扩展名** | [`plpython3u`](/ext/e/plpython3u) | **el8** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **扩展包** | [`plpython3u`](https://www.postgresql.org/docs/current/plpython.html) | **el9** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **RPM** | `postgresql$v-contrib` | **el10** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **DEB** | `postgresql-$v` | **d12** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **语言** | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | **d13** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **仓库** | <a class="ext-badge ext-badge--repo contrib" href="/ext/repo#contrib">CONTRIB</a> | **u22** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **协议** | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | **u24** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| | | **u26** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
{.ext-table .ext-table--cate}


---------

## jsonb_plpython3u {#jsonb_plpython3u}

[**`plpython3u`**](/ext/e/jsonb_plpython3u) - `1.0` : 在 jsonb 和 plpython3u 之间转换

| **条目** | **属性** | **OS** | **x86_64** | **aarch64** |
|:---:|:---|:---:|:---:|:---:|
| **扩展名** | [`jsonb_plpython3u`](/ext/e/jsonb_plpython3u) | **el8** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **扩展包** | [`plpython3u`](https://www.postgresql.org/docs/current/plpython.html) | **el9** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **RPM** | `postgresql$v-contrib` | **el10** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **DEB** | `postgresql-$v` | **d12** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **语言** | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | **d13** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **仓库** | <a class="ext-badge ext-badge--repo contrib" href="/ext/repo#contrib">CONTRIB</a> | **u22** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **协议** | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | **u24** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| | | **u26** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
{.ext-table .ext-table--cate}


---------

## ltree_plpython3u {#ltree_plpython3u}

[**`plpython3u`**](/ext/e/ltree_plpython3u) - `1.0` : 在 ltree 和 plpython3u 之间转换

| **条目** | **属性** | **OS** | **x86_64** | **aarch64** |
|:---:|:---|:---:|:---:|:---:|
| **扩展名** | [`ltree_plpython3u`](/ext/e/ltree_plpython3u) | **el8** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **扩展包** | [`plpython3u`](https://www.postgresql.org/docs/current/plpython.html) | **el9** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **RPM** | `postgresql$v-contrib` | **el10** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **DEB** | `postgresql-$v` | **d12** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **语言** | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | **d13** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **仓库** | <a class="ext-badge ext-badge--repo contrib" href="/ext/repo#contrib">CONTRIB</a> | **u22** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **协议** | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | **u24** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| | | **u26** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
{.ext-table .ext-table--cate}


---------

## hstore_plpython3u {#hstore_plpython3u}

[**`plpython3u`**](/ext/e/hstore_plpython3u) - `1.0` : 在 hstore 和 plpython3u 之间转换

| **条目** | **属性** | **OS** | **x86_64** | **aarch64** |
|:---:|:---|:---:|:---:|:---:|
| **扩展名** | [`hstore_plpython3u`](/ext/e/hstore_plpython3u) | **el8** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **扩展包** | [`plpython3u`](https://www.postgresql.org/docs/current/plpython.html) | **el9** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **RPM** | `postgresql$v-contrib` | **el10** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **DEB** | `postgresql-$v` | **d12** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **语言** | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | **d13** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **仓库** | <a class="ext-badge ext-badge--repo contrib" href="/ext/repo#contrib">CONTRIB</a> | **u22** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **协议** | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | **u24** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| | | **u26** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
{.ext-table .ext-table--cate}

