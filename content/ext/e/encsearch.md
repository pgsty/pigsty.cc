---
title: "encsearch"
linkTitle: "encsearch"
description: "使用 AEAD 加密与盲索引的实验性密文文本搜索"
weight: 7035
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/lokeshmulpuru/encsearch">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">lokeshmulpuru/encsearch</div>
    <div class="ext-card__desc">https://github.com/lokeshmulpuru/encsearch</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/encsearch-0.1.1.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">encsearch-0.1.1.tar.gz</div>
    <div class="ext-card__desc">encsearch-0.1.1.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`encsearch`**](/ext/e/encsearch) | `0.1.1` | <a class="ext-badge ext-badge--cate sec" href="/ext/cate/sec">SEC</a> | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang rust" href="/ext/language#rust">Rust</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 7035  | [**`encsearch`**](/ext/e/encsearch) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | - |
{.ext-table}


> Early release 0.1.1 changes PGXN status to stable without code changes from 0.1.0; PG17 tested, other Cargo PG14-18 targets untested. Session preload must precede key settings; blind indexes leak equality and token frequency.


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#sec) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.1.1` | {{< pgvers "17" >}} | `encsearch` | - |
| [**RPM**](/ext/rpm#sec) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.1.1` | {{< pgvers "17" >}} | `encsearch_$v` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | N/A PIGSTY - 0 | AVAIL PIGSTY 0.1.1 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| el8.aarch64 | N/A PIGSTY - 0 | AVAIL PIGSTY 0.1.1 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| el9.x86_64 | N/A PIGSTY - 0 | AVAIL PIGSTY 0.1.1 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| el9.aarch64 | N/A PIGSTY - 0 | AVAIL PIGSTY 0.1.1 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| el10.x86_64 | N/A PIGSTY - 0 | AVAIL PIGSTY 0.1.1 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| el10.aarch64 | N/A PIGSTY - 0 | AVAIL PIGSTY 0.1.1 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| d12.x86_64 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| d12.aarch64 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| d13.x86_64 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| d13.aarch64 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| u22.x86_64 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| u22.aarch64 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| u24.x86_64 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| u24.aarch64 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| u26.x86_64 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| u26.aarch64 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
@ el8.x86_64 17 encsearch_17 encsearch_17-0.1.1-1PGSTY.el8.x86_64.rpm pigsty 0.1.1 517.1KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/encsearch_17-0.1.1-1PGSTY.el8.x86_64.rpm
@ el8.aarch64 17 encsearch_17 encsearch_17-0.1.1-1PGSTY.el8.aarch64.rpm pigsty 0.1.1 414.3KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/encsearch_17-0.1.1-1PGSTY.el8.aarch64.rpm
@ el9.x86_64 17 encsearch_17 encsearch_17-0.1.1-1PGSTY.el9.x86_64.rpm pigsty 0.1.1 519.3KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/encsearch_17-0.1.1-1PGSTY.el9.x86_64.rpm
@ el9.aarch64 17 encsearch_17 encsearch_17-0.1.1-1PGSTY.el9.aarch64.rpm pigsty 0.1.1 445.6KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/encsearch_17-0.1.1-1PGSTY.el9.aarch64.rpm
@ el10.x86_64 17 encsearch_17 encsearch_17-0.1.1-1PGSTY.el10.x86_64.rpm pigsty 0.1.1 473.0KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/encsearch_17-0.1.1-1PGSTY.el10.x86_64.rpm
@ el10.aarch64 17 encsearch_17 encsearch_17-0.1.1-1PGSTY.el10.aarch64.rpm pigsty 0.1.1 430.4KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/encsearch_17-0.1.1-1PGSTY.el10.aarch64.rpm
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `encsearch` 扩展的 RPM 包：

```bash
pig build pkg encsearch         # 构建 RPM 包
```


## 安装

您可以直接安装 `encsearch` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](https://pig.pgsty.com/zh) 或者是 `apt/yum/dnf` 安装扩展：

```bash {tab="安装" group="extension-install" value="install"}
pig install encsearch;          # 当前活跃 PG 版本安装
```

```bash {tab="pig" value="pig"}
pig ext install -y encsearch -v 17  # PG 17
```

```bash {tab="dnf" value="dnf"}
dnf install -y encsearch_17       # PG 17
```


**预加载配置**：

```bash
shared_preload_libraries = 'encsearch';
```


**创建扩展**：

```sql
CREATE EXTENSION encsearch;
```

## 用法

来源：

- [README.md](https://github.com/lokeshmulpuru/encsearch/blob/cfa1a2af334ebbd4026a9f467c0ec40bed12a035/README.md)
- [src/lib.rs](https://github.com/lokeshmulpuru/encsearch/blob/cfa1a2af334ebbd4026a9f467c0ec40bed12a035/src/lib.rs)
- [Cargo.toml](https://github.com/lokeshmulpuru/encsearch/blob/cfa1a2af334ebbd4026a9f467c0ec40bed12a035/Cargo.toml)
- [META.json](https://github.com/lokeshmulpuru/encsearch/blob/cfa1a2af334ebbd4026a9f467c0ec40bed12a035/META.json)
- [encsearch.control](https://github.com/lokeshmulpuru/encsearch/blob/cfa1a2af334ebbd4026a9f467c0ec40bed12a035/encsearch.control)

`encsearch` 将加密文本与带密钥的搜索词元分别存入密文字段和 `int8[]` 字段。实验性的 0.1.0 版本可借助 GIN 索引进行精确、单词及模式搜索。上游已测试 PostgreSQL 17，Cargo 中声明的其他版本目标尚未测试。

### 核心用法

```ini
session_preload_libraries = 'encsearch'
```

```sql
CREATE EXTENSION encsearch;
CREATE TABLE encrypted_notes (id bigint GENERATED ALWAYS AS IDENTITY, body bytea, idx int8[]);
CREATE INDEX encrypted_notes_tokens ON encrypted_notes USING gin (idx);
INSERT INTO encrypted_notes (body, idx)
VALUES (enc_encrypt('Patient has diabetes'), enc_index('Patient has diabetes'));
SELECT enc_decrypt(body) FROM encrypted_notes
WHERE enc_like(body, idx, '%diab%');
```

### 运行边界

此扩展不受信任，需要管理员安装。应先配置 `session_preload_libraries`，再建立客户端连接并设置 `encsearch.key`，否则提前设置的密钥会成为可见的占位参数。执行数据示例前，应向会话或显式接收密钥的函数重载提供安全保存的密钥，长度至少为 32 个字符。`enc_gen_key()` 可生成 64 个字符的密钥，丢失密钥后将无法恢复明文。

`enc_encrypt` 和 `enc_decrypt` 处理文本与密文；`enc_index` 生成需存储的词元；`enc_like`、`enc_ilike` 和 `enc_eq` 先筛选候选项，再解密核对。`enc_has_words` 仅检查词元包含关系，不解密；`enc_q_like`、`enc_q_exact` 和 `enc_q_words` 返回原始查询词元。`enc_algorithm` 和 `enc_algorithms` 用于查看加密算法。

`encsearch.algorithm` 默认为 `aes-256-gcm`，确定性的 `aes-256-siv` 会暴露重复明文。建立和查询词元时，`encsearch.token_hash` 必须一致：默认使用 `hmac-sha256`，也可选 `blake3`。更换词元哈希算法需要重新生成词元；更换密钥需要先用旧密钥解密，再用新密钥重建密文和词元。

盲索引会暴露相同值、单词、字符片段及其出现频率。密钥会到达数据库服务器，也可能进入语句或参数日志。这项实验性功能是在隐私与搜索性能之间取舍，无法防范已持有密钥的服务器。
