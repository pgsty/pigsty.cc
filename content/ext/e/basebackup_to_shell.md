---
title: "basebackup_to_shell"
linkTitle: "basebackup_to_shell"
description: "添加一种备份到Shell终端到基础备份方式"
weight: 5950
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://www.postgresql.org/docs/current/basebackup-to-shell.html">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">https://www.postgresql.org/docs/current/basebackup-to-shell.html</div>
    <div class="ext-card__desc">https://www.postgresql.org/docs/current/basebackup-to-shell.html</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`basebackup_to_shell`**](/ext/e/basebackup_to_shell) | `-` | <a class="ext-badge ext-badge--cate admin" href="/ext/cate/admin">ADMIN</a> | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 5950  | [**`basebackup_to_shell`**](/ext/e/basebackup_to_shell) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | - |
{.ext-table}

| **相关扩展** | [`basic_archive`](/ext/e/basic_archive) [`pg_walinspect`](/ext/e/pg_walinspect) [`pg_repack`](/ext/e/pg_repack) [`pg_rewrite`](/ext/e/pg_rewrite) [`pg_squeeze`](/ext/e/pg_squeeze) [`pg_dirtyread`](/ext/e/pg_dirtyread) [`pgfincore`](/ext/e/pgfincore) [`pg_cooldown`](/ext/e/pg_cooldown) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


## 版本

| **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:------:|:------:|:------:|:------:|:------:|
| <span class="ext-badge ext-badge--avail">-</span> | <span class="ext-badge ext-badge--avail">-</span> | <span class="ext-badge ext-badge--avail">-</span> | <span class="ext-badge ext-badge--avail">-</span> | <span class="ext-badge ext-badge--miss">✗</span> |
{.ext-table}


## 安装

> **提示**：这是 PostgreSQL 内核自带的 contrib 扩展




## 用法

> [basebackup_to_shell: 添加名为 shell 的自定义基础备份目标](https://www.postgresql.org/docs/current/basebackup-to-shell.html)

`basebackup_to_shell` 模块为 `pg_basebackup` 添加一个自定义的 `shell` 备份目标，允许管理员通过任意 Shell 命令传输备份归档。

### 配置

添加到 `postgresql.conf`：

```ini
shared_preload_libraries = 'basebackup_to_shell'

# 每个归档执行的命令；在 stdin 上接收归档数据
basebackup_to_shell.command = 'gzip > /backup/%f.gz'

# 可选：限制仅特定角色可使用
basebackup_to_shell.required_role = 'backup_admin'
```

### 参数

| 参数 | 类型 | 描述 |
|-----------|------|-------------|
| `basebackup_to_shell.command` | 字符串 | 要执行的 Shell 命令；通过 stdin 接收归档 |
| `basebackup_to_shell.required_role` | 字符串 | 使用 shell 目标所需的角色（空 = 任何复制用户） |

### 命令占位符

| 占位符 | 替换为 |
|-------------|---------------|
| `%f` | 归档文件名（例如 `base.tar`） |
| `%d` | 用户提供的目标详情字符串 |
| `%%` | 字面量 `%` |

### 示例

```bash
# 将备份压缩到本地目录
# postgresql.conf: basebackup_to_shell.command = 'gzip > /backup/%f.gz'
pg_basebackup --target=shell

# 使用详情参数上传到 S3
# postgresql.conf: basebackup_to_shell.command = 'aws s3 cp - s3://bucket/%d/%f'
pg_basebackup --target=shell:myprefix

# 自定义处理管道
# postgresql.conf: basebackup_to_shell.command = 'zstd | ssh backup-host "cat > /backup/%f.zst"'
pg_basebackup --target=shell
```

`%d` 占位符需要通过 `--target=shell:DETAIL` 提供目标详情。如果命令中没有 `%d`，则禁止提供详情。详情字符串只能包含字母数字字符。
