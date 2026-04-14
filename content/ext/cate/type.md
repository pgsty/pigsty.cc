---
title: "TYPE - 数据类型"
linkTitle: "TYPE"
description: "自定义类型扩展：前缀树，语义版本号，SI单位，位图，无符号整型，高精度数值，有理数，哈希值，IP地址段，球面，RRULE等"
weight: 835
icon: fas fa-cubes
---

## 扩展列表

共有 **40** 个扩展，位于 **39** 个扩展包中。

| **扩展** | **包** | **版本** | **许可证** | **语言** | **描述** |
|:---------|:-------|:--------:|:----------:|:--------:|:---------|
| [`prefix`](/ext/e/prefix) | [`pg_prefix`](https://github.com/dimitri/prefix) | `1.2.10` | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | 前缀树数据类型 |
| [`semver`](/ext/e/semver) | [`pg_semver`](https://github.com/theory/pg-semver) | `0.41.0` | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | 语义版本号数据类型 |
| [`pg_text_semver`](/ext/e/pg_text_semver) | [`pg_text_semver`](https://github.com/bigsmoke/pg_text_semver) | `1.2.1` | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang sql" href="/ext/language#sql">SQL</a> | PostgreSQL 语义版本域类型与比较运算符 |
| [`unit`](/ext/e/unit) | [`pgunit`](https://github.com/df7cb/postgresql-unit) | `7.10` | <a class="ext-badge ext-badge--license gpl20" href="/ext/license#gpl20">GPL-2.0</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | SI 国标单位扩展 |
| [`pgpdf`](/ext/e/pgpdf) | [`pgpdf`](https://github.com/Florents-Tselai/pgpdf) | `0.1.0` | <a class="ext-badge ext-badge--license gpl30" href="/ext/license#gpl30">GPL-3.0</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | PDF数据类型，管理函数与全文检索 |
| [`pglite_fusion`](/ext/e/pglite_fusion) | [`pglite_fusion`](https://github.com/frectonz/pglite-fusion) | `0.0.6` | <a class="ext-badge ext-badge--license mit" href="/ext/license#mit">MIT</a> | <a class="ext-badge ext-badge--lang rust" href="/ext/language#rust">Rust</a> | 在PG表中嵌入SQLite数据库作为数据类型 |
| [`md5hash`](/ext/e/md5hash) | [`md5hash`](https://github.com/tvondra/md5hash) | `1.0.1` | <a class="ext-badge ext-badge--license bsd 2clause" href="/ext/license#bsd2clause">BSD 2-Clause</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | 提供128位MD5的原生数据类型 |
| [`asn1oid`](/ext/e/asn1oid) | [`asn1oid`](https://github.com/df7cb/pgsql-asn1oid) | `1.6` | <a class="ext-badge ext-badge--license gpl30" href="/ext/license#gpl30">GPL-3.0</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | ASN1OID数据类型支持 |
| [`roaringbitmap`](/ext/e/roaringbitmap) | [`pg_roaringbitmap`](https://github.com/ChenHuajun/pg_roaringbitmap) | `1.1.0` | <a class="ext-badge ext-badge--license apache20" href="/ext/license#apache20">Apache-2.0</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | 支持RoaringBitmap数据类型 |
| [`pgfaceting`](/ext/e/pgfaceting) | [`pgfaceting`](https://github.com/cybertec-postgresql/pgfaceting) | `0.2.0` | <a class="ext-badge ext-badge--license bsd 3clause" href="/ext/license#bsd3clause">BSD 3-Clause</a> | <a class="ext-badge ext-badge--lang sql" href="/ext/language#sql">SQL</a> | 使用倒排索引的高速切面查询 |
| [`pg_sphere`](/ext/e/pg_sphere) | [`pgsphere`](https://github.com/postgrespro/pgsphere) | `1.5.2` | <a class="ext-badge ext-badge--license bsd 3clause" href="/ext/license#bsd3clause">BSD 3-Clause</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | 球面对象函数、运算符与索引支持 |
| [`country`](/ext/e/country) | [`pg_country`](https://github.com/adjust/pg-country) | `0.0.3` | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | 国家代码数据类型，遵循ISO 3166-1标准 |
| [`pg_xenophile`](/ext/e/pg_xenophile) | [`pg_xenophile`](https://github.com/bigsmoke/pg_xenophile) | `0.8.3` | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang sql" href="/ext/language#sql">SQL</a> | PostgreSQL i8n与l10n工具包 |
| [`l10n_table_dependent_extension`](/ext/e/l10n_table_dependent_extension) | [`pg_xenophile`](https://github.com/bigsmoke/pg_xenophile) | `0.8.3` | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang sql" href="/ext/language#sql">SQL</a> | PostgreSQL l10n 工具包 |
| [`currency`](/ext/e/currency) | [`pg_currency`](https://github.com/adjust/pg-currency) | `0.0.3` | <a class="ext-badge ext-badge--license mit" href="/ext/license#mit">MIT</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | 使用1字节表示的货币数据类型 |
| [`collection`](/ext/e/collection) | [`pgcollection`](https://github.com/aws/pgcollection) | `2.0.0` | <a class="ext-badge ext-badge--license apache20" href="/ext/license#apache20">Apache-2.0</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | 在PlPGSQL中使用的内存优化高性能集合数据结构 |
| [`pgmp`](/ext/e/pgmp) | [`pgmp`](https://github.com/dvarrazzo/pgmp/) | `1.0.5` | <a class="ext-badge ext-badge--license lgpl30" href="/ext/license#lgpl30">LGPL-3.0</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | 多精度算术扩展 |
| [`numeral`](/ext/e/numeral) | [`numeral`](https://github.com/df7cb/postgresql-numeral) | `1.3` | <a class="ext-badge ext-badge--license gpl20" href="/ext/license#gpl20">GPL-2.0</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | 数值类型扩展 |
| [`pg_rational`](/ext/e/pg_rational) | [`pg_rational`](https://github.com/begriffs/pg_rational) | `0.0.2` | <a class="ext-badge ext-badge--license mit" href="/ext/license#mit">MIT</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | 使用BIGINT表示的有理数数据类型 |
| [`uint`](/ext/e/uint) | [`pguint`](https://github.com/petere/pguint) | `1.20250815` | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | 无符号整型数据类型 |
| [`uint128`](/ext/e/uint128) | [`pg_uint128`](https://github.com/pg-uint/pg-uint128) | `1.2.0` | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | 原生128位无符号整型数据类型 |
| [`hashtypes`](/ext/e/hashtypes) | [`hashtypes`](https://github.com/adjust/hashtypes/) | `0.1.5` | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | 包括SHA1，MD5在内的多种哈希数据类型 |
| [`ip4r`](/ext/e/ip4r) | [`ip4r`](https://github.com/RhodiumToad/ip4r) | `2.4.2` | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | PostgreSQL 的 IPv4/v6 和 IPv4/v6 范围索引类型 |
| [`pg_duration`](/ext/e/pg_duration) | [`pg_duration`](https://github.com/jkosh44/pg_duration) | `1.0.2` | <a class="ext-badge ext-badge--license mit" href="/ext/license#mit">MIT</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | 用于表示时间段的强化数据类型 |
| [`uri`](/ext/e/uri) | [`pg_uri`](https://github.com/petere/pguri) | `1.20251029` | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | URI数据类型 |
| [`emailaddr`](/ext/e/emailaddr) | [`pg_emailaddr`](https://github.com/petere/pgemailaddr) | `0` | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | Email地址数据类型 |
| [`acl`](/ext/e/acl) | [`pg_acl`](https://github.com/arkhipov/acl) | `1.0.4` | <a class="ext-badge ext-badge--license bsd 2clause" href="/ext/license#bsd2clause">BSD 2-Clause</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | ACL数据类型 |
| [`debversion`](/ext/e/debversion) | [`debversion`](https://github.com/ATIX-AG/postgresql-debversion-evr) | `1.2.0` | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang sql" href="/ext/language#sql">SQL</a> | Debian版本号数据类型 |
| [`pg_rrule`](/ext/e/pg_rrule) | [`pg_rrule`](https://github.com/petropavel13/pg_rrule) | `0.3.0` | <a class="ext-badge ext-badge--license mit" href="/ext/license#mit">MIT</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | 日历重复规则RRULE数据类型 |
| [`pgcalendar`](/ext/e/pgcalendar) | [`pgcalendar`](https://github.com/h4kbas/pgcalendar) | `1.1.0` | <a class="ext-badge ext-badge--license mit" href="/ext/license#mit">MIT</a> | <a class="ext-badge ext-badge--lang sql" href="/ext/language#sql">SQL</a> | 为 PostgreSQL 提供循环日程、投影与例外处理的日历扩展 |
| [`timestamp9`](/ext/e/timestamp9) | [`timestamp9`](https://github.com/optiver/timestamp9) | `1.4.0` | <a class="ext-badge ext-badge--license mit" href="/ext/license#mit">MIT</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | 纳秒分辨率时间戳 |
| [`pgbson`](/ext/e/pgbson) | [`pgbson`](https://github.com/buzzm/postgresbson) | `2.0.2` | <a class="ext-badge ext-badge--license mit" href="/ext/license#mit">MIT</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | 为 PostgreSQL 提供 BSON 数据类型、比较与访问函数 |
| [`chkpass`](/ext/e/chkpass) | [`chkpass`](https://github.com/lacanoid/chkpass) | `1.0` | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | 数据类型：自动加密的密码 |
| [`isn`](/ext/e/isn) | [`isn`](https://www.postgresql.org/docs/current/isn.html) | `1.2` | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | 用于国际产品编号标准的数据类型 |
| [`seg`](/ext/e/seg) | [`seg`](https://www.postgresql.org/docs/current/seg.html) | `1.4` | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | 表示线段或浮点间隔的数据类型 |
| [`cube`](/ext/e/cube) | [`cube`](https://www.postgresql.org/docs/current/cube.html) | `1.5` | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | 用于存储多维立方体的数据类型 |
| [`ltree`](/ext/e/ltree) | [`ltree`](https://www.postgresql.org/docs/current/ltree.html) | `1.3` | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | 用于表示分层树状结构的数据类型 |
| [`hstore`](/ext/e/hstore) | [`hstore`](https://www.postgresql.org/docs/current/hstore.html) | `1.8` | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | 用于存储（键，值）对集合的数据类型 |
| [`citext`](/ext/e/citext) | [`citext`](https://www.postgresql.org/docs/current/citext.html) | `1.6` | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | 提供大小写不敏感的字符串类型 |
| [`xml2`](/ext/e/xml2) | [`xml2`](https://www.postgresql.org/docs/current/xml2.html) | `1.1` | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | XPath 查询和 XSLT |
{.ext-table}


---------

## prefix {#prefix}

[**`pg_prefix`**](/ext/e/prefix) - `1.2.10` : 前缀树数据类型

| **条目** | **属性** | **OS** | **x86_64** | **aarch64** |
|:---:|:---|:---:|:---:|:---:|
| **扩展名** | [`prefix`](/ext/e/prefix) | **el8** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **扩展包** | [`pg_prefix`](https://github.com/dimitri/prefix) | **el9** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **RPM** | `prefix_$v` | **el10** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **DEB** | `postgresql-$v-prefix` | **d12** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **语言** | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | **d13** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **仓库** | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | **u22** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **协议** | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | **u24** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
{.ext-table .ext-table--cate}


---------

## semver {#semver}

[**`pg_semver`**](/ext/e/semver) - `0.41.0` : 语义版本号数据类型

| **条目** | **属性** | **OS** | **x86_64** | **aarch64** |
|:---:|:---|:---:|:---:|:---:|
| **扩展名** | [`semver`](/ext/e/semver) | **el8** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **扩展包** | [`pg_semver`](https://github.com/theory/pg-semver) | **el9** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **RPM** | `semver_$v` | **el10** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **DEB** | `postgresql-$v-semver` | **d12** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **语言** | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | **d13** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **仓库** | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | **u22** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **协议** | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | **u24** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
{.ext-table .ext-table--cate}


---------

## pg_text_semver {#pg_text_semver}

[**`pg_text_semver`**](/ext/e/pg_text_semver) - `1.2.1` : PostgreSQL 语义版本域类型与比较运算符

| **条目** | **属性** | **OS** | **x86_64** | **aarch64** |
|:---:|:---|:---:|:---:|:---:|
| **扩展名** | [`pg_text_semver`](/ext/e/pg_text_semver) | **el8** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **扩展包** | [`pg_text_semver`](https://github.com/bigsmoke/pg_text_semver) | **el9** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **RPM** | `pg_text_semver_$v` | **el10** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **DEB** | `postgresql-$v-pg-text-semver` | **d12** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **语言** | <a class="ext-badge ext-badge--lang sql" href="/ext/language#sql">SQL</a> | **d13** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **仓库** | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | **u22** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **协议** | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | **u24** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
{.ext-table .ext-table--cate}


---------

## unit {#unit}

[**`pgunit`**](/ext/e/unit) - `7.10` : SI 国标单位扩展

| **条目** | **属性** | **OS** | **x86_64** | **aarch64** |
|:---:|:---|:---:|:---:|:---:|
| **扩展名** | [`unit`](/ext/e/unit) | **el8** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **扩展包** | [`pgunit`](https://github.com/df7cb/postgresql-unit) | **el9** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **RPM** | `postgresql-unit_$v` | **el10** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **DEB** | `postgresql-$v-unit` | **d12** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **语言** | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | **d13** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **仓库** | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | **u22** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **协议** | <a class="ext-badge ext-badge--license gpl20" href="/ext/license#gpl20">GPL-2.0</a> | **u24** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
{.ext-table .ext-table--cate}


---------

## pgpdf {#pgpdf}

[**`pgpdf`**](/ext/e/pgpdf) - `0.1.0` : PDF数据类型，管理函数与全文检索

| **条目** | **属性** | **OS** | **x86_64** | **aarch64** |
|:---:|:---|:---:|:---:|:---:|
| **扩展名** | [`pgpdf`](/ext/e/pgpdf) | **el8** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **扩展包** | [`pgpdf`](https://github.com/Florents-Tselai/pgpdf) | **el9** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **RPM** | `pgpdf_$v` | **el10** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **DEB** | `postgresql-$v-pgpdf` | **d12** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **语言** | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | **d13** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **仓库** | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | **u22** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **协议** | <a class="ext-badge ext-badge--license gpl30" href="/ext/license#gpl30">GPL-3.0</a> | **u24** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
{.ext-table .ext-table--cate}


---------

## pglite_fusion {#pglite_fusion}

[**`pglite_fusion`**](/ext/e/pglite_fusion) - `0.0.6` : 在PG表中嵌入SQLite数据库作为数据类型

| **条目** | **属性** | **OS** | **x86_64** | **aarch64** |
|:---:|:---|:---:|:---:|:---:|
| **扩展名** | [`pglite_fusion`](/ext/e/pglite_fusion) | **el8** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **扩展包** | [`pglite_fusion`](https://github.com/frectonz/pglite-fusion) | **el9** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **RPM** | `pglite_fusion_$v` | **el10** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **DEB** | `postgresql-$v-pglite-fusion` | **d12** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **语言** | <a class="ext-badge ext-badge--lang rust" href="/ext/language#rust">Rust</a> | **d13** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **仓库** | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | **u22** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **协议** | <a class="ext-badge ext-badge--license mit" href="/ext/license#mit">MIT</a> | **u24** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
{.ext-table .ext-table--cate}


---------

## md5hash {#md5hash}

[**`md5hash`**](/ext/e/md5hash) - `1.0.1` : 提供128位MD5的原生数据类型

| **条目** | **属性** | **OS** | **x86_64** | **aarch64** |
|:---:|:---|:---:|:---:|:---:|
| **扩展名** | [`md5hash`](/ext/e/md5hash) | **el8** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **扩展包** | [`md5hash`](https://github.com/tvondra/md5hash) | **el9** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **RPM** | `md5hash_$v` | **el10** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **DEB** | `postgresql-$v-md5hash` | **d12** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **语言** | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | **d13** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **仓库** | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | **u22** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **协议** | <a class="ext-badge ext-badge--license bsd 2clause" href="/ext/license#bsd2clause">BSD 2-Clause</a> | **u24** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
{.ext-table .ext-table--cate}


---------

## asn1oid {#asn1oid}

[**`asn1oid`**](/ext/e/asn1oid) - `1.6` : ASN1OID数据类型支持

| **条目** | **属性** | **OS** | **x86_64** | **aarch64** |
|:---:|:---|:---:|:---:|:---:|
| **扩展名** | [`asn1oid`](/ext/e/asn1oid) | **el8** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **扩展包** | [`asn1oid`](https://github.com/df7cb/pgsql-asn1oid) | **el9** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **RPM** | `asn1oid_$v` | **el10** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **DEB** | `postgresql-$v-asn1oid` | **d12** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **语言** | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | **d13** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **仓库** | <a class="ext-badge ext-badge--repo mixed" href="/ext/repo#mixed">MIXED</a> | **u22** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **协议** | <a class="ext-badge ext-badge--license gpl30" href="/ext/license#gpl30">GPL-3.0</a> | **u24** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
{.ext-table .ext-table--cate}


---------

## roaringbitmap {#roaringbitmap}

[**`pg_roaringbitmap`**](/ext/e/roaringbitmap) - `1.1.0` : 支持RoaringBitmap数据类型

| **条目** | **属性** | **OS** | **x86_64** | **aarch64** |
|:---:|:---|:---:|:---:|:---:|
| **扩展名** | [`roaringbitmap`](/ext/e/roaringbitmap) | **el8** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **扩展包** | [`pg_roaringbitmap`](https://github.com/ChenHuajun/pg_roaringbitmap) | **el9** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **RPM** | `pg_roaringbitmap_$v` | **el10** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **DEB** | `postgresql-$v-roaringbitmap` | **d12** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **语言** | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | **d13** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **仓库** | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | **u22** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **协议** | <a class="ext-badge ext-badge--license apache20" href="/ext/license#apache20">Apache-2.0</a> | **u24** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
{.ext-table .ext-table--cate}


---------

## pgfaceting {#pgfaceting}

[**`pgfaceting`**](/ext/e/pgfaceting) - `0.2.0` : 使用倒排索引的高速切面查询

| **条目** | **属性** | **OS** | **x86_64** | **aarch64** |
|:---:|:---|:---:|:---:|:---:|
| **扩展名** | [`pgfaceting`](/ext/e/pgfaceting) | **el8** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **扩展包** | [`pgfaceting`](https://github.com/cybertec-postgresql/pgfaceting) | **el9** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **RPM** | `pgfaceting_$v` | **el10** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **DEB** | `postgresql-$v-pgfaceting` | **d12** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **语言** | <a class="ext-badge ext-badge--lang sql" href="/ext/language#sql">SQL</a> | **d13** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **仓库** | <a class="ext-badge ext-badge--repo mixed" href="/ext/repo#mixed">MIXED</a> | **u22** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **协议** | <a class="ext-badge ext-badge--license bsd 3clause" href="/ext/license#bsd3clause">BSD 3-Clause</a> | **u24** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
{.ext-table .ext-table--cate}


---------

## pg_sphere {#pg_sphere}

[**`pgsphere`**](/ext/e/pg_sphere) - `1.5.2` : 球面对象函数、运算符与索引支持

| **条目** | **属性** | **OS** | **x86_64** | **aarch64** |
|:---:|:---|:---:|:---:|:---:|
| **扩展名** | [`pg_sphere`](/ext/e/pg_sphere) | **el8** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **扩展包** | [`pgsphere`](https://github.com/postgrespro/pgsphere) | **el9** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **RPM** | `pgsphere_$v` | **el10** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **DEB** | `postgresql-$v-pgsphere` | **d12** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **语言** | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | **d13** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **仓库** | <a class="ext-badge ext-badge--repo mixed" href="/ext/repo#mixed">MIXED</a> | **u22** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **协议** | <a class="ext-badge ext-badge--license bsd 3clause" href="/ext/license#bsd3clause">BSD 3-Clause</a> | **u24** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
{.ext-table .ext-table--cate}


---------

## country {#country}

[**`pg_country`**](/ext/e/country) - `0.0.3` : 国家代码数据类型，遵循ISO 3166-1标准

| **条目** | **属性** | **OS** | **x86_64** | **aarch64** |
|:---:|:---|:---:|:---:|:---:|
| **扩展名** | [`country`](/ext/e/country) | **el8** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **扩展包** | [`pg_country`](https://github.com/adjust/pg-country) | **el9** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **RPM** | `pg_country_$v` | **el10** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **DEB** | `postgresql-$v-pg-country` | **d12** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **语言** | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | **d13** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **仓库** | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | **u22** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **协议** | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | **u24** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
{.ext-table .ext-table--cate}


---------

## pg_xenophile {#pg_xenophile}

[**`pg_xenophile`**](/ext/e/pg_xenophile) - `0.8.3` : PostgreSQL i8n与l10n工具包

| **条目** | **属性** | **OS** | **x86_64** | **aarch64** |
|:---:|:---|:---:|:---:|:---:|
| **扩展名** | [`pg_xenophile`](/ext/e/pg_xenophile) | **el8** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **扩展包** | [`pg_xenophile`](https://github.com/bigsmoke/pg_xenophile) | **el9** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **RPM** | `pg_xenophile_$v` | **el10** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **DEB** | `postgresql-$v-pg-xenophile` | **d12** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **语言** | <a class="ext-badge ext-badge--lang sql" href="/ext/language#sql">SQL</a> | **d13** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **仓库** | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | **u22** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **协议** | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | **u24** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
{.ext-table .ext-table--cate}


---------

## l10n_table_dependent_extension {#l10n_table_dependent_extension}

[**`pg_xenophile`**](/ext/e/l10n_table_dependent_extension) - `0.8.3` : PostgreSQL l10n 工具包

| **条目** | **属性** | **OS** | **x86_64** | **aarch64** |
|:---:|:---|:---:|:---:|:---:|
| **扩展名** | [`l10n_table_dependent_extension`](/ext/e/l10n_table_dependent_extension) | **el8** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **扩展包** | [`pg_xenophile`](https://github.com/bigsmoke/pg_xenophile) | **el9** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **RPM** | `pg_xenophile_$v` | **el10** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **DEB** | `postgresql-$v-pg-xenophile` | **d12** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **语言** | <a class="ext-badge ext-badge--lang sql" href="/ext/language#sql">SQL</a> | **d13** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **仓库** | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | **u22** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **协议** | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | **u24** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
{.ext-table .ext-table--cate}


---------

## currency {#currency}

[**`pg_currency`**](/ext/e/currency) - `0.0.3` : 使用1字节表示的货币数据类型

| **条目** | **属性** | **OS** | **x86_64** | **aarch64** |
|:---:|:---|:---:|:---:|:---:|
| **扩展名** | [`currency`](/ext/e/currency) | **el8** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **扩展包** | [`pg_currency`](https://github.com/adjust/pg-currency) | **el9** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **RPM** | `pg_currency_$v` | **el10** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **DEB** | `postgresql-$v-pg-currency` | **d12** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **语言** | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | **d13** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **仓库** | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | **u22** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **协议** | <a class="ext-badge ext-badge--license mit" href="/ext/license#mit">MIT</a> | **u24** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
{.ext-table .ext-table--cate}


---------

## collection {#collection}

[**`pgcollection`**](/ext/e/collection) - `2.0.0` : 在PlPGSQL中使用的内存优化高性能集合数据结构

| **条目** | **属性** | **OS** | **x86_64** | **aarch64** |
|:---:|:---|:---:|:---:|:---:|
| **扩展名** | [`collection`](/ext/e/collection) | **el8** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **扩展包** | [`pgcollection`](https://github.com/aws/pgcollection) | **el9** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **RPM** | `pgcollection_$v` | **el10** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **DEB** | `postgresql-$v-collection` | **d12** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **语言** | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | **d13** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **仓库** | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | **u22** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **协议** | <a class="ext-badge ext-badge--license apache20" href="/ext/license#apache20">Apache-2.0</a> | **u24** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
{.ext-table .ext-table--cate}


---------

## pgmp {#pgmp}

[**`pgmp`**](/ext/e/pgmp) - `1.0.5` : 多精度算术扩展

| **条目** | **属性** | **OS** | **x86_64** | **aarch64** |
|:---:|:---|:---:|:---:|:---:|
| **扩展名** | [`pgmp`](/ext/e/pgmp) | **el8** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **扩展包** | [`pgmp`](https://github.com/dvarrazzo/pgmp/) | **el9** | {{< pgvers "18,17,16,15" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **RPM** | `pgmp_$v` | **el10** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **DEB** | `postgresql-$v-pgmp` | **d12** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **语言** | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | **d13** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **仓库** | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | **u22** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **协议** | <a class="ext-badge ext-badge--license lgpl30" href="/ext/license#lgpl30">LGPL-3.0</a> | **u24** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
{.ext-table .ext-table--cate}


---------

## numeral {#numeral}

[**`numeral`**](/ext/e/numeral) - `1.3` : 数值类型扩展

| **条目** | **属性** | **OS** | **x86_64** | **aarch64** |
|:---:|:---|:---:|:---:|:---:|
| **扩展名** | [`numeral`](/ext/e/numeral) | **el8** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **扩展包** | [`numeral`](https://github.com/df7cb/postgresql-numeral) | **el9** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **RPM** | `numeral_$v` | **el10** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **DEB** | `postgresql-$v-numeral` | **d12** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **语言** | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | **d13** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **仓库** | <a class="ext-badge ext-badge--repo mixed" href="/ext/repo#mixed">MIXED</a> | **u22** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **协议** | <a class="ext-badge ext-badge--license gpl20" href="/ext/license#gpl20">GPL-2.0</a> | **u24** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
{.ext-table .ext-table--cate}


---------

## pg_rational {#pg_rational}

[**`pg_rational`**](/ext/e/pg_rational) - `0.0.2` : 使用BIGINT表示的有理数数据类型

| **条目** | **属性** | **OS** | **x86_64** | **aarch64** |
|:---:|:---|:---:|:---:|:---:|
| **扩展名** | [`pg_rational`](/ext/e/pg_rational) | **el8** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **扩展包** | [`pg_rational`](https://github.com/begriffs/pg_rational) | **el9** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **RPM** | `pg_rational_$v` | **el10** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **DEB** | `postgresql-$v-rational` | **d12** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **语言** | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | **d13** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **仓库** | <a class="ext-badge ext-badge--repo mixed" href="/ext/repo#mixed">MIXED</a> | **u22** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **协议** | <a class="ext-badge ext-badge--license mit" href="/ext/license#mit">MIT</a> | **u24** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
{.ext-table .ext-table--cate}


---------

## uint {#uint}

[**`pguint`**](/ext/e/uint) - `1.20250815` : 无符号整型数据类型

| **条目** | **属性** | **OS** | **x86_64** | **aarch64** |
|:---:|:---|:---:|:---:|:---:|
| **扩展名** | [`uint`](/ext/e/uint) | **el8** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **扩展包** | [`pguint`](https://github.com/petere/pguint) | **el9** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **RPM** | `pguint_$v` | **el10** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **DEB** | `postgresql-$v-pguint` | **d12** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **语言** | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | **d13** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **仓库** | <a class="ext-badge ext-badge--repo mixed" href="/ext/repo#mixed">MIXED</a> | **u22** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **协议** | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | **u24** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
{.ext-table .ext-table--cate}


---------

## uint128 {#uint128}

[**`pg_uint128`**](/ext/e/uint128) - `1.2.0` : 原生128位无符号整型数据类型

| **条目** | **属性** | **OS** | **x86_64** | **aarch64** |
|:---:|:---|:---:|:---:|:---:|
| **扩展名** | [`uint128`](/ext/e/uint128) | **el8** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **扩展包** | [`pg_uint128`](https://github.com/pg-uint/pg-uint128) | **el9** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **RPM** | `pg_uint128_$v` | **el10** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **DEB** | `postgresql-$v-pg-uint128` | **d12** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **语言** | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | **d13** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **仓库** | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | **u22** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **协议** | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | **u24** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
{.ext-table .ext-table--cate}


---------

## hashtypes {#hashtypes}

[**`hashtypes`**](/ext/e/hashtypes) - `0.1.5` : 包括SHA1，MD5在内的多种哈希数据类型

| **条目** | **属性** | **OS** | **x86_64** | **aarch64** |
|:---:|:---|:---:|:---:|:---:|
| **扩展名** | [`hashtypes`](/ext/e/hashtypes) | **el8** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **扩展包** | [`hashtypes`](https://github.com/adjust/hashtypes/) | **el9** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **RPM** | `hashtypes_$v` | **el10** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **DEB** | `postgresql-$v-hashtypes` | **d12** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **语言** | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | **d13** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **仓库** | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | **u22** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **协议** | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | **u24** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
{.ext-table .ext-table--cate}


---------

## ip4r {#ip4r}

[**`ip4r`**](/ext/e/ip4r) - `2.4.2` : PostgreSQL 的 IPv4/v6 和 IPv4/v6 范围索引类型

| **条目** | **属性** | **OS** | **x86_64** | **aarch64** |
|:---:|:---|:---:|:---:|:---:|
| **扩展名** | [`ip4r`](/ext/e/ip4r) | **el8** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **扩展包** | [`ip4r`](https://github.com/RhodiumToad/ip4r) | **el9** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **RPM** | `ip4r_$v` | **el10** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **DEB** | `postgresql-$v-ip4r` | **d12** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **语言** | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | **d13** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **仓库** | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | **u22** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **协议** | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | **u24** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
{.ext-table .ext-table--cate}


---------

## pg_duration {#pg_duration}

[**`pg_duration`**](/ext/e/pg_duration) - `1.0.2` : 用于表示时间段的强化数据类型

| **条目** | **属性** | **OS** | **x86_64** | **aarch64** |
|:---:|:---|:---:|:---:|:---:|
| **扩展名** | [`pg_duration`](/ext/e/pg_duration) | **el8** | {{< pgvers "18,17" >}} | {{< pgvers "18,17" >}} |
| **扩展包** | [`pg_duration`](https://github.com/jkosh44/pg_duration) | **el9** | {{< pgvers "18,17" >}} | {{< pgvers "18,17" >}} |
| **RPM** | `pg_duration_$v` | **el10** | {{< pgvers "18,17" >}} | {{< pgvers "18,17" >}} |
| **DEB** | `postgresql-$v-pg-duration` | **d12** | {{< pgvers "18,17" >}} | {{< pgvers "18,17" >}} |
| **语言** | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | **d13** | {{< pgvers "18,17" >}} | {{< pgvers "18,17" >}} |
| **仓库** | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | **u22** | {{< pgvers "18,17" >}} | {{< pgvers "18,17" >}} |
| **协议** | <a class="ext-badge ext-badge--license mit" href="/ext/license#mit">MIT</a> | **u24** | {{< pgvers "18,17" >}} | {{< pgvers "18,17" >}} |
{.ext-table .ext-table--cate}


---------

## uri {#uri}

[**`pg_uri`**](/ext/e/uri) - `1.20251029` : URI数据类型

| **条目** | **属性** | **OS** | **x86_64** | **aarch64** |
|:---:|:---|:---:|:---:|:---:|
| **扩展名** | [`uri`](/ext/e/uri) | **el8** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **扩展包** | [`pg_uri`](https://github.com/petere/pguri) | **el9** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **RPM** | `pg_uri_$v` | **el10** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **DEB** | `postgresql-$v-pg-uri` | **d12** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **语言** | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | **d13** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **仓库** | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | **u22** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **协议** | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | **u24** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
{.ext-table .ext-table--cate}


---------

## emailaddr {#emailaddr}

[**`pg_emailaddr`**](/ext/e/emailaddr) - `0` : Email地址数据类型

| **条目** | **属性** | **OS** | **x86_64** | **aarch64** |
|:---:|:---|:---:|:---:|:---:|
| **扩展名** | [`emailaddr`](/ext/e/emailaddr) | **el8** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **扩展包** | [`pg_emailaddr`](https://github.com/petere/pgemailaddr) | **el9** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **RPM** | `pg_emailaddr_$v` | **el10** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **DEB** | `postgresql-$v-pg-emailaddr` | **d12** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **语言** | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | **d13** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **仓库** | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | **u22** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **协议** | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | **u24** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
{.ext-table .ext-table--cate}


---------

## acl {#acl}

[**`pg_acl`**](/ext/e/acl) - `1.0.4` : ACL数据类型

| **条目** | **属性** | **OS** | **x86_64** | **aarch64** |
|:---:|:---|:---:|:---:|:---:|
| **扩展名** | [`acl`](/ext/e/acl) | **el8** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **扩展包** | [`pg_acl`](https://github.com/arkhipov/acl) | **el9** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **RPM** | `acl_$v` | **el10** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **DEB** | `postgresql-$v-acl` | **d12** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **语言** | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | **d13** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **仓库** | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | **u22** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **协议** | <a class="ext-badge ext-badge--license bsd 2clause" href="/ext/license#bsd2clause">BSD 2-Clause</a> | **u24** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
{.ext-table .ext-table--cate}


---------

## debversion {#debversion}

[**`debversion`**](/ext/e/debversion) - `1.2.0` : Debian版本号数据类型

| **条目** | **属性** | **OS** | **x86_64** | **aarch64** |
|:---:|:---|:---:|:---:|:---:|
| **扩展名** | [`debversion`](/ext/e/debversion) | **el8** | - | - |
| **扩展包** | [`debversion`](https://github.com/ATIX-AG/postgresql-debversion-evr) | **el9** | - | - |
| **RPM** | - | **el10** | - | - |
| **DEB** | `postgresql-$v-debversion` | **d12** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **语言** | <a class="ext-badge ext-badge--lang sql" href="/ext/language#sql">SQL</a> | **d13** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **仓库** | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | **u22** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **协议** | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | **u24** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
{.ext-table .ext-table--cate}


---------

## pg_rrule {#pg_rrule}

[**`pg_rrule`**](/ext/e/pg_rrule) - `0.3.0` : 日历重复规则RRULE数据类型

| **条目** | **属性** | **OS** | **x86_64** | **aarch64** |
|:---:|:---|:---:|:---:|:---:|
| **扩展名** | [`pg_rrule`](/ext/e/pg_rrule) | **el8** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **扩展包** | [`pg_rrule`](https://github.com/petropavel13/pg_rrule) | **el9** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **RPM** | `pg_rrule_$v` | **el10** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **DEB** | `postgresql-$v-pg-rrule` | **d12** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **语言** | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | **d13** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **仓库** | <a class="ext-badge ext-badge--repo mixed" href="/ext/repo#mixed">MIXED</a> | **u22** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **协议** | <a class="ext-badge ext-badge--license mit" href="/ext/license#mit">MIT</a> | **u24** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
{.ext-table .ext-table--cate}


---------

## pgcalendar {#pgcalendar}

[**`pgcalendar`**](/ext/e/pgcalendar) - `1.1.0` : 为 PostgreSQL 提供循环日程、投影与例外处理的日历扩展

| **条目** | **属性** | **OS** | **x86_64** | **aarch64** |
|:---:|:---|:---:|:---:|:---:|
| **扩展名** | [`pgcalendar`](/ext/e/pgcalendar) | **el8** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **扩展包** | [`pgcalendar`](https://github.com/h4kbas/pgcalendar) | **el9** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **RPM** | `pgcalendar_$v` | **el10** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **DEB** | `postgresql-$v-pgcalendar` | **d12** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **语言** | <a class="ext-badge ext-badge--lang sql" href="/ext/language#sql">SQL</a> | **d13** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **仓库** | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | **u22** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **协议** | <a class="ext-badge ext-badge--license mit" href="/ext/license#mit">MIT</a> | **u24** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
{.ext-table .ext-table--cate}


---------

## timestamp9 {#timestamp9}

[**`timestamp9`**](/ext/e/timestamp9) - `1.4.0` : 纳秒分辨率时间戳

| **条目** | **属性** | **OS** | **x86_64** | **aarch64** |
|:---:|:---|:---:|:---:|:---:|
| **扩展名** | [`timestamp9`](/ext/e/timestamp9) | **el8** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **扩展包** | [`timestamp9`](https://github.com/optiver/timestamp9) | **el9** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **RPM** | `timestamp9_$v` | **el10** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **DEB** | `postgresql-$v-timestamp9` | **d12** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **语言** | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | **d13** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **仓库** | <a class="ext-badge ext-badge--repo mixed" href="/ext/repo#mixed">MIXED</a> | **u22** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **协议** | <a class="ext-badge ext-badge--license mit" href="/ext/license#mit">MIT</a> | **u24** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
{.ext-table .ext-table--cate}


---------

## pgbson {#pgbson}

[**`pgbson`**](/ext/e/pgbson) - `2.0.2` : 为 PostgreSQL 提供 BSON 数据类型、比较与访问函数

| **条目** | **属性** | **OS** | **x86_64** | **aarch64** |
|:---:|:---|:---:|:---:|:---:|
| **扩展名** | [`pgbson`](/ext/e/pgbson) | **el8** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **扩展包** | [`pgbson`](https://github.com/buzzm/postgresbson) | **el9** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **RPM** | `postgresbson_$v` | **el10** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **DEB** | `postgresql-$v-pgbson` | **d12** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **语言** | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | **d13** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **仓库** | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | **u22** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **协议** | <a class="ext-badge ext-badge--license mit" href="/ext/license#mit">MIT</a> | **u24** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
{.ext-table .ext-table--cate}


---------

## chkpass {#chkpass}

[**`chkpass`**](/ext/e/chkpass) - `1.0` : 数据类型：自动加密的密码

| **条目** | **属性** | **OS** | **x86_64** | **aarch64** |
|:---:|:---|:---:|:---:|:---:|
| **扩展名** | [`chkpass`](/ext/e/chkpass) | **el8** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **扩展包** | [`chkpass`](https://github.com/lacanoid/chkpass) | **el9** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **RPM** | `chkpass_$v` | **el10** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **DEB** | `postgresql-$v-chkpass` | **d12** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **语言** | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | **d13** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **仓库** | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | **u22** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **协议** | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | **u24** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
{.ext-table .ext-table--cate}


---------

## isn {#isn}

[**`isn`**](/ext/e/isn) - `1.2` : 用于国际产品编号标准的数据类型

| **条目** | **属性** | **OS** | **x86_64** | **aarch64** |
|:---:|:---|:---:|:---:|:---:|
| **扩展名** | [`isn`](/ext/e/isn) | **el8** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **扩展包** | [`isn`](https://www.postgresql.org/docs/current/isn.html) | **el9** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **RPM** | `postgresql$v-contrib` | **el10** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **DEB** | `postgresql-$v` | **d12** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **语言** | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | **d13** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **仓库** | <a class="ext-badge ext-badge--repo contrib" href="/ext/repo#contrib">CONTRIB</a> | **u22** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **协议** | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | **u24** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
{.ext-table .ext-table--cate}


---------

## seg {#seg}

[**`seg`**](/ext/e/seg) - `1.4` : 表示线段或浮点间隔的数据类型

| **条目** | **属性** | **OS** | **x86_64** | **aarch64** |
|:---:|:---|:---:|:---:|:---:|
| **扩展名** | [`seg`](/ext/e/seg) | **el8** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **扩展包** | [`seg`](https://www.postgresql.org/docs/current/seg.html) | **el9** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **RPM** | `postgresql$v-contrib` | **el10** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **DEB** | `postgresql-$v` | **d12** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **语言** | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | **d13** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **仓库** | <a class="ext-badge ext-badge--repo contrib" href="/ext/repo#contrib">CONTRIB</a> | **u22** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **协议** | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | **u24** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
{.ext-table .ext-table--cate}


---------

## cube {#cube}

[**`cube`**](/ext/e/cube) - `1.5` : 用于存储多维立方体的数据类型

| **条目** | **属性** | **OS** | **x86_64** | **aarch64** |
|:---:|:---|:---:|:---:|:---:|
| **扩展名** | [`cube`](/ext/e/cube) | **el8** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **扩展包** | [`cube`](https://www.postgresql.org/docs/current/cube.html) | **el9** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **RPM** | `postgresql$v-contrib` | **el10** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **DEB** | `postgresql-$v` | **d12** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **语言** | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | **d13** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **仓库** | <a class="ext-badge ext-badge--repo contrib" href="/ext/repo#contrib">CONTRIB</a> | **u22** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **协议** | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | **u24** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
{.ext-table .ext-table--cate}


---------

## ltree {#ltree}

[**`ltree`**](/ext/e/ltree) - `1.3` : 用于表示分层树状结构的数据类型

| **条目** | **属性** | **OS** | **x86_64** | **aarch64** |
|:---:|:---|:---:|:---:|:---:|
| **扩展名** | [`ltree`](/ext/e/ltree) | **el8** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **扩展包** | [`ltree`](https://www.postgresql.org/docs/current/ltree.html) | **el9** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **RPM** | `postgresql$v-contrib` | **el10** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **DEB** | `postgresql-$v` | **d12** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **语言** | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | **d13** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **仓库** | <a class="ext-badge ext-badge--repo contrib" href="/ext/repo#contrib">CONTRIB</a> | **u22** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **协议** | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | **u24** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
{.ext-table .ext-table--cate}


---------

## hstore {#hstore}

[**`hstore`**](/ext/e/hstore) - `1.8` : 用于存储（键，值）对集合的数据类型

| **条目** | **属性** | **OS** | **x86_64** | **aarch64** |
|:---:|:---|:---:|:---:|:---:|
| **扩展名** | [`hstore`](/ext/e/hstore) | **el8** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **扩展包** | [`hstore`](https://www.postgresql.org/docs/current/hstore.html) | **el9** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **RPM** | `postgresql$v-contrib` | **el10** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **DEB** | `postgresql-$v` | **d12** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **语言** | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | **d13** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **仓库** | <a class="ext-badge ext-badge--repo contrib" href="/ext/repo#contrib">CONTRIB</a> | **u22** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **协议** | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | **u24** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
{.ext-table .ext-table--cate}


---------

## citext {#citext}

[**`citext`**](/ext/e/citext) - `1.6` : 提供大小写不敏感的字符串类型

| **条目** | **属性** | **OS** | **x86_64** | **aarch64** |
|:---:|:---|:---:|:---:|:---:|
| **扩展名** | [`citext`](/ext/e/citext) | **el8** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **扩展包** | [`citext`](https://www.postgresql.org/docs/current/citext.html) | **el9** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **RPM** | `postgresql$v-contrib` | **el10** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **DEB** | `postgresql-$v` | **d12** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **语言** | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | **d13** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **仓库** | <a class="ext-badge ext-badge--repo contrib" href="/ext/repo#contrib">CONTRIB</a> | **u22** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **协议** | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | **u24** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
{.ext-table .ext-table--cate}


---------

## xml2 {#xml2}

[**`xml2`**](/ext/e/xml2) - `1.1` : XPath 查询和 XSLT

| **条目** | **属性** | **OS** | **x86_64** | **aarch64** |
|:---:|:---|:---:|:---:|:---:|
| **扩展名** | [`xml2`](/ext/e/xml2) | **el8** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **扩展包** | [`xml2`](https://www.postgresql.org/docs/current/xml2.html) | **el9** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **RPM** | `postgresql$v-contrib` | **el10** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **DEB** | `postgresql-$v` | **d12** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **语言** | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> | **d13** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **仓库** | <a class="ext-badge ext-badge--repo contrib" href="/ext/repo#contrib">CONTRIB</a> | **u22** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
| **协议** | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | **u24** | {{< pgvers "18,17,16,15,14" >}} | {{< pgvers "18,17,16,15,14" >}} |
{.ext-table .ext-table--cate}

