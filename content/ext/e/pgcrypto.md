---
title: "pgcrypto"
linkTitle: "pgcrypto"
description: "实用加解密函数"
weight: 7980
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://www.postgresql.org/docs/current/pgcrypto.html">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">https://www.postgresql.org/docs/current/pgcrypto.html</div>
    <div class="ext-card__desc">https://www.postgresql.org/docs/current/pgcrypto.html</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pgcrypto`**](/ext/e/pgcrypto) | `1.3` | <a class="ext-badge ext-badge--cate sec" href="/ext/cate/sec">SEC</a> | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 7980  | [**`pgcrypto`**](/ext/e/pgcrypto) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | - |
{.ext-table}

| **相关扩展** | [`pgsodium`](/ext/e/pgsodium) [`pgsmcrypto`](/ext/e/pgsmcrypto) [`lo`](/ext/e/lo) [`anon`](/ext/e/anon) [`pg_tde`](/ext/e/pg_tde) [`sslutils`](/ext/e/sslutils) [`faker`](/ext/e/faker) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **下游依赖** | [`omni_auth`](/ext/e/omni_auth) [`omni_aws`](/ext/e/omni_aws) [`omni_credentials`](/ext/e/omni_credentials) [`omni_rest`](/ext/e/omni_rest) [`pgcryptokey`](/ext/e/pgcryptokey) [`pgjwt`](/ext/e/pgjwt) |
{.ext-table .ext-table--rel}


## 版本

| **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:------:|:------:|:------:|:------:|:------:|
| <span class="ext-badge ext-badge--avail">1.3</span> | <span class="ext-badge ext-badge--avail">1.3</span> | <span class="ext-badge ext-badge--avail">1.3</span> | <span class="ext-badge ext-badge--avail">1.3</span> | <span class="ext-badge ext-badge--avail">1.3</span> |
{.ext-table}


## 安装

> **提示**：这是 PostgreSQL 内核自带的 contrib 扩展

```sql
CREATE EXTENSION pgcrypto;
```



## 用法

> [pgcrypto: PostgreSQL 加密函数](https://www.postgresql.org/docs/current/pgcrypto.html)

`pgcrypto` 提供加密函数，包括哈希、密码哈希、PGP 加密和原始加密。

```sql
CREATE EXTENSION pgcrypto;
```

### 通用哈希

```sql
SELECT digest('data', 'sha256');                    -- 二进制哈希
SELECT encode(digest('data', 'sha256'), 'hex');     -- 十六进制输出
SELECT hmac('data', 'secret_key', 'sha256');        -- HMAC
```

支持的算法：`md5`、`sha1`、`sha224`、`sha256`、`sha384`、`sha512`。

### 密码哈希

```sql
-- 设置新密码
UPDATE users SET pswhash = crypt('new password', gen_salt('bf'));

-- 验证密码
SELECT (pswhash = crypt('entered password', pswhash)) AS valid FROM users;
```

`gen_salt()` 类型：`bf`（Blowfish）、`md5`、`xdes`、`des`、`sha256crypt`、`sha512crypt`。

### PGP 对称加密

```sql
-- 加密
SELECT pgp_sym_encrypt('secret data', 'password');
SELECT pgp_sym_encrypt('secret data', 'password', 'cipher-algo=aes256, compress-algo=1');

-- 解密
SELECT pgp_sym_decrypt(encrypted_data, 'password');
```

### PGP 公钥加密

```sql
-- 使用公钥加密
SELECT pgp_pub_encrypt('secret data', dearmor(pubkey));

-- 使用私钥解密
SELECT pgp_pub_decrypt(encrypted_data, dearmor(seckey));
SELECT pgp_pub_decrypt(encrypted_data, dearmor(seckey), 'key_password');
```

### 密钥工具

```sql
SELECT pgp_key_id(dearmor(key_text));       -- 提取密钥 ID
SELECT armor(binary_data);                   -- ASCII 封装
SELECT dearmor(armored_text);                -- 移除封装
SELECT pgp_armor_headers(armored_text);      -- 提取封装头
```

### 原始加密

```sql
SELECT encrypt('data'::bytea, 'key'::bytea, 'aes');
SELECT decrypt(encrypted, 'key'::bytea, 'aes');

-- 带 IV
SELECT encrypt_iv('data'::bytea, 'key'::bytea, 'iv'::bytea, 'aes-cbc/pad:pkcs');
SELECT decrypt_iv(encrypted, 'key'::bytea, 'iv'::bytea, 'aes-cbc/pad:pkcs');
```

算法：`bf`（Blowfish）、`aes`。模式：`cbc`（默认）、`cfb`、`ecb`。填充：`pkcs`（默认）、`none`。

### 随机数据

```sql
SELECT gen_random_bytes(16);        -- 16个加密随机字节
SELECT gen_random_uuid();           -- 随机 UUID v4
```

### PGP 加密选项

| 选项 | 值 | 默认值 |
|--------|--------|---------|
| `cipher-algo` | `bf`、`aes128`、`aes192`、`aes256`、`3des`、`cast5` | `aes128` |
| `compress-algo` | `0`（无）、`1`（ZIP）、`2`（ZLIB） | `0` |
| `compress-level` | `0-9` | `6` |
| `s2k-mode` | `0`、`1`、`3` | `3` |
