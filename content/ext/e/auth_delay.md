---
title: "auth_delay"
linkTitle: "auth_delay"
description: "在返回认证失败前暂停一会，避免爆破"
weight: 7970
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://www.postgresql.org/docs/current/auth-delay.html">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">https://www.postgresql.org/docs/current/auth-delay.html</div>
    <div class="ext-card__desc">https://www.postgresql.org/docs/current/auth-delay.html</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`auth_delay`**](/ext/e/auth_delay) | `-` | <a class="ext-badge ext-badge--cate sec" href="/ext/cate/sec">SEC</a> | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 7970  | [**`auth_delay`**](/ext/e/auth_delay) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | - |
{.ext-table}

| **相关扩展** | [`pg_auth_mon`](/ext/e/pg_auth_mon) [`credcheck`](/ext/e/credcheck) [`login_hook`](/ext/e/login_hook) [`passwordcheck`](/ext/e/passwordcheck) [`passwordcheck_cracklib`](/ext/e/passwordcheck_cracklib) [`pgaudit`](/ext/e/pgaudit) [`set_user`](/ext/e/set_user) [`pg_permissions`](/ext/e/pg_permissions) |
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

> [auth_delay: 在报告认证失败前暂停](https://www.postgresql.org/docs/current/auth-delay.html)

`auth_delay` 在报告认证失败前使服务器短暂暂停，使暴力破解密码攻击更加困难。

### 配置

添加到 `postgresql.conf`：

```ini
shared_preload_libraries = 'auth_delay'
auth_delay.milliseconds = '500'
```

### 配置参数

| 参数 | 默认值 | 描述 |
|-----------|---------|-------------|
| `auth_delay.milliseconds` | `0` | 报告认证失败前等待的毫秒数 |

### 注意事项

- 必须通过 `shared_preload_libraries` 加载
- 无法防止拒绝服务攻击（等待的进程仍然占用连接槽位）
- 无需 `CREATE EXTENSION` —— 这仅是一个共享库模块
