---
title: "passwordcheck"
linkTitle: "passwordcheck"
description: "用于强制拒绝修改弱密码的扩展"
weight: 7990
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://www.postgresql.org/docs/current/passwordcheck.html">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">https://www.postgresql.org/docs/current/passwordcheck.html</div>
    <div class="ext-card__desc">https://www.postgresql.org/docs/current/passwordcheck.html</div>
  </a>
  <a class="ext-card ext-card--source" href="passwordcheck_cracklib-3.1.0.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">passwordcheck_cracklib-3.1.0.tar.gz</div>
    <div class="ext-card__desc">passwordcheck_cracklib-3.1.0.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`passwordcheck`**](/ext/e/passwordcheck) | `-` | <a class="ext-badge ext-badge--cate sec" href="/ext/cate/sec">SEC</a> | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 7990  | [**`passwordcheck`**](/ext/e/passwordcheck) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | - |
{.ext-table}

| **相关扩展** | [`pg_auth_mon`](/ext/e/pg_auth_mon) [`credcheck`](/ext/e/credcheck) [`pgaudit`](/ext/e/pgaudit) [`login_hook`](/ext/e/login_hook) [`auth_delay`](/ext/e/auth_delay) [`set_user`](/ext/e/set_user) [`sepgsql`](/ext/e/sepgsql) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


## 版本

| **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:------:|:------:|:------:|:------:|:------:|
| <span class="ext-badge ext-badge--avail">-</span> | <span class="ext-badge ext-badge--avail">-</span> | <span class="ext-badge ext-badge--avail">-</span> | <span class="ext-badge ext-badge--avail">-</span> | <span class="ext-badge ext-badge--avail">-</span> |
{.ext-table}


## 安装

> **提示**：这是 PostgreSQL 内核自带的 contrib 扩展




## 用法

> [passwordcheck: 在 CREATE/ALTER ROLE 时检查密码强度](https://www.postgresql.org/docs/current/passwordcheck.html)

`passwordcheck` 在通过 `CREATE ROLE` 或 `ALTER ROLE` 设置密码时验证密码强度。弱密码将被拒绝并返回错误。

### 配置

添加到 `postgresql.conf`：

```ini
shared_preload_libraries = 'passwordcheck'
```

### 配置参数

| 参数 | 默认值 | 描述 |
|-----------|---------|-------------|
| `passwordcheck.min_password_length` | `8` | 最小密码长度（字节）（仅超级用户可设置） |

### 工作原理

该模块检查通过 `CREATE ROLE` 或 `ALTER ROLE` 设置的密码：

```sql
-- 如果密码太短或太弱将被拒绝
CREATE ROLE myuser WITH LOGIN PASSWORD 'abc';
-- ERROR: password is too short

-- 足够强的密码将被接受
CREATE ROLE myuser WITH LOGIN PASSWORD 'Str0ng_P@ssword!';
```

### 默认检查

在没有 CrackLib 的情况下，该模块强制执行：
- 最小密码长度（可通过 `passwordcheck.min_password_length` 配置）
- 密码不能是用户名
- 基本复杂度要求

### 限制

- 客户端程序发送的预加密密码无法被完全验证
- 该模块只能猜测加密提交中的实际密码
- 为了更强的安全性，考虑使用外部认证方法（例如 GSSAPI）
- 无需 `CREATE EXTENSION` —— 这仅是一个共享库模块
