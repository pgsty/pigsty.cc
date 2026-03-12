---
title: "sslinfo"
linkTitle: "sslinfo"
description: "关于 SSL 证书的信息"
weight: 6920
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://www.postgresql.org/docs/current/sslinfo.html">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">https://www.postgresql.org/docs/current/sslinfo.html</div>
    <div class="ext-card__desc">https://www.postgresql.org/docs/current/sslinfo.html</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`sslinfo`**](/ext/e/sslinfo) | `1.2` | <a class="ext-badge ext-badge--cate stat" href="/ext/cate/stat">STAT</a> | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 6920  | [**`sslinfo`**](/ext/e/sslinfo) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | - |
{.ext-table}

| **相关扩展** | [`sslutils`](/ext/e/sslutils) [`pg_profile`](/ext/e/pg_profile) [`pg_tracing`](/ext/e/pg_tracing) [`pg_show_plans`](/ext/e/pg_show_plans) [`pg_stat_kcache`](/ext/e/pg_stat_kcache) [`pg_stat_monitor`](/ext/e/pg_stat_monitor) [`pg_qualstats`](/ext/e/pg_qualstats) [`pg_store_plans`](/ext/e/pg_store_plans) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


## 版本

| **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:------:|:------:|:------:|:------:|:------:|
| <span class="ext-badge ext-badge--avail">1.2</span> | <span class="ext-badge ext-badge--avail">1.2</span> | <span class="ext-badge ext-badge--avail">1.2</span> | <span class="ext-badge ext-badge--avail">1.2</span> | <span class="ext-badge ext-badge--avail">1.2</span> |
{.ext-table}


## 安装

> **提示**：这是 PostgreSQL 内核自带的 contrib 扩展

```sql
CREATE EXTENSION sslinfo;
```




## 用法

> [sslinfo: SSL 证书信息函数](https://www.postgresql.org/docs/current/sslinfo.html)

sslinfo 提供函数来访问当前数据库连接中使用的 SSL 证书信息。

### 函数

```sql
-- 检查当前连接是否使用 SSL
SELECT ssl_is_used();

-- SSL/TLS 协议版本（TLSv1.2、TLSv1.3 等）
SELECT ssl_version();

-- 密码套件名称（例如 DHE-RSA-AES256-SHA）
SELECT ssl_cipher();

-- 检查客户端是否提供了有效证书
SELECT ssl_client_cert_present();

-- 客户端证书序列号
SELECT ssl_client_serial();

-- 客户端证书主题（完整 DN）
SELECT ssl_client_dn();
-- 例如 /CN=Somebody /C=Some country/O=Some organization

-- 证书颁发者（完整 DN）
SELECT ssl_issuer_dn();

-- 客户端证书主题的特定字段
SELECT ssl_client_dn_field('CN');
SELECT ssl_client_dn_field('O');

-- 证书颁发者的特定字段
SELECT ssl_issuer_field('CN');

-- 客户端证书扩展
SELECT * FROM ssl_extension_info();
-- 返回：name、value、critical
```

### 注意事项

- 如果连接未使用 SSL，大多数函数返回 NULL
- 需要 PostgreSQL 使用 OpenSSL 支持编译
- `ssl_client_serial()` 和 `ssl_issuer_dn()` 的组合可以唯一标识一个证书
