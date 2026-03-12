---
title: "basic_archive"
linkTitle: "basic_archive"
description: "归档模块样例"
weight: 5940
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://www.postgresql.org/docs/current/basic-archive.html">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">https://www.postgresql.org/docs/current/basic-archive.html</div>
    <div class="ext-card__desc">https://www.postgresql.org/docs/current/basic-archive.html</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`basic_archive`**](/ext/e/basic_archive) | `-` | <a class="ext-badge ext-badge--cate admin" href="/ext/cate/admin">ADMIN</a> | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 5940  | [**`basic_archive`**](/ext/e/basic_archive) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | - |
{.ext-table}

| **相关扩展** | [`basebackup_to_shell`](/ext/e/basebackup_to_shell) [`pg_walinspect`](/ext/e/pg_walinspect) [`pg_repack`](/ext/e/pg_repack) [`pg_rewrite`](/ext/e/pg_rewrite) [`pg_squeeze`](/ext/e/pg_squeeze) [`pg_dirtyread`](/ext/e/pg_dirtyread) [`pgfincore`](/ext/e/pgfincore) [`pg_cooldown`](/ext/e/pg_cooldown) |
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

> [basic_archive: 归档模块示例](https://www.postgresql.org/docs/current/basic-archive.html)

`basic_archive` 模块是一个 WAL 归档模块，将已完成的 WAL 段文件复制到指定目录。它作为自定义归档模块的参考实现。

### 配置

添加到 `postgresql.conf`：

```ini
archive_mode = 'on'
archive_library = 'basic_archive'
basic_archive.archive_directory = '/path/to/archive/directory'
```

### 参数

| 参数 | 类型 | 描述 |
|-----------|------|-------------|
| `basic_archive.archive_directory` | 字符串 | 复制 WAL 文件的目标目录（必须已存在） |

如果启用了 `archive_mode` 但 `basic_archive.archive_directory` 为空（默认值），服务器将持续累积 WAL 文件，直到配置目录路径。

### 注意事项

- 目标目录必须在使用前创建；模块不会自动创建
- 服务器崩溃后，归档目录中可能会留下前缀为 `archtemp` 的临时文件，应在重启前删除
- 这些临时文件也可以在服务器运行时安全删除，前提是它们与正在进行的归档操作无关
- 此模块主要用作开发自定义归档模块的简单示例和起点
