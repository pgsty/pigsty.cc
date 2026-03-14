---
title: "plperlu"
linkTitle: "plperlu"
description: "PL/PerlU 存储过程语言（未受信/高权限）"
weight: 3270
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://www.postgresql.org/docs/current/plperl.html">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">https://www.postgresql.org/docs/current/plperl.html</div>
    <div class="ext-card__desc">https://www.postgresql.org/docs/current/plperl.html</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`plperlu`**](/ext/e/plperlu) | `1.0` | <a class="ext-badge ext-badge--cate lang" href="/ext/cate/lang">LANG</a> | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 3270  | [**`plperlu`**](/ext/e/plperlu) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | `pg_catalog` |
| 3271  | [**`bool_plperlu`**](/ext/e/bool_plperlu) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | - |
| 3272  | [**`jsonb_plperlu`**](/ext/e/jsonb_plperlu) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | - |
| 3273  | [**`hstore_plperlu`**](/ext/e/hstore_plperlu) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | - |
{.ext-table}

| **相关扩展** | [`plperlu`](/ext/e/plperlu) [`plperl`](/ext/e/plperl) [`plluau`](/ext/e/plluau) [`pltclu`](/ext/e/pltclu) [`bool_plperl`](/ext/e/bool_plperl) [`hstore_plperl`](/ext/e/hstore_plperl) [`jsonb_plperl`](/ext/e/jsonb_plperl) [`plpgsql`](/ext/e/plpgsql) [`plv8`](/ext/e/plv8) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **下游依赖** | [`bool_plperlu`](/ext/e/bool_plperlu) [`hstore_plperlu`](/ext/e/hstore_plperlu) [`jsonb_plperlu`](/ext/e/jsonb_plperlu) [`plperlu`](/ext/e/plperlu) [`pg_utl_smtp`](/ext/e/pg_utl_smtp) [`sparql`](/ext/e/sparql) |
{.ext-table .ext-table--rel}


## 版本

| **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:------:|:------:|:------:|:------:|:------:|
| <span class="ext-badge ext-badge--avail">1.0</span> | <span class="ext-badge ext-badge--avail">1.0</span> | <span class="ext-badge ext-badge--avail">1.0</span> | <span class="ext-badge ext-badge--avail">1.0</span> | <span class="ext-badge ext-badge--avail">1.0</span> |
{.ext-table}


## 安装

> **提示**：这是 PostgreSQL 内核自带的 contrib 扩展

```sql
CREATE EXTENSION plperlu;
```



## 用法

> [plperlu: PL/Perl 不受信过程语言](https://www.postgresql.org/docs/current/plperl.html)

PL/Perl 不受信版本提供完整的 Perl 功能，包括加载外部模块、访问文件系统和网络操作。只有超级用户可以使用此语言创建函数。

```sql
CREATE EXTENSION plperlu;

-- 使用外部 CPAN 模块
CREATE FUNCTION fetch_url(text) RETURNS text
LANGUAGE plperlu AS $$
  use LWP::Simple;
  my ($url) = @_;
  return get($url);
$$;

-- 从服务器文件系统读取文件
CREATE FUNCTION read_server_file(text) RETURNS text
LANGUAGE plperlu AS $$
  my ($path) = @_;
  open my $fh, '<', $path or die "Cannot open $path: $!";
  local $/;
  my $content = <$fh>;
  close $fh;
  return $content;
$$;

-- 使用外部模块处理 JSON
CREATE FUNCTION parse_json_key(text, text) RETURNS text
LANGUAGE plperlu AS $$
  use JSON;
  my ($json_str, $key) = @_;
  my $data = decode_json($json_str);
  return $data->{$key};
$$;

-- 使用 Net::SMTP 发送邮件
CREATE FUNCTION send_email(text, text, text) RETURNS boolean
LANGUAGE plperlu AS $$
  use Net::SMTP;
  my ($to, $subject, $body) = @_;
  my $smtp = Net::SMTP->new('localhost');
  $smtp->mail('postgres@localhost');
  $smtp->to($to);
  $smtp->data();
  $smtp->datasend("Subject: $subject\n\n$body");
  $smtp->dataend();
  $smtp->quit();
  return 1;
$$;
```
