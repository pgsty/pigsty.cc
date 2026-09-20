---
title: "acdat"
linkTitle: "acdat"
description: "PostgreSQL 大规模精确多模式匹配与替换扩展"
weight: 2250
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/Vonng/ac">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">Vonng/ac</div>
    <div class="ext-card__desc">https://github.com/Vonng/ac</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/acdat-0.1.0.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">acdat-0.1.0.tar.gz</div>
    <div class="ext-card__desc">acdat-0.1.0.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`acdat`**](/ext/e/acdat) | `0.1.0` | <a class="ext-badge ext-badge--cate fts" href="/ext/cate/fts">FTS</a> | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 2250  | [**`acdat`**](/ext/e/acdat) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | `acdat` |
{.ext-table}

| **相关扩展** | [`pg_trgm`](/ext/e/pg_trgm) [`pg_bigm`](/ext/e/pg_bigm) [`pgroonga`](/ext/e/pgroonga) [`pg_search`](/ext/e/pg_search) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


> Indexes the compiled pattern dictionary, not the document table; exact case-sensitive matching in the fixed acdat schema.


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#fts) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.1.0` | {{< pgvers "18,17,16,15,14" >}} | `acdat` | - |
| [**RPM**](/ext/rpm#fts) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.1.0` | {{< pgvers "18,17,16,15,14" >}} | `acdat_$v` | - |
| [**DEB**](/ext/deb#fts) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.1.0` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-acdat` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| el8.aarch64 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| el9.x86_64 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| el9.aarch64 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| el10.x86_64 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| el10.aarch64 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| d12.x86_64 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| d12.aarch64 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| d13.x86_64 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| d13.aarch64 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| u22.x86_64 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| u22.aarch64 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| u24.x86_64 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| u24.aarch64 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| u26.x86_64 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| u26.aarch64 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `acdat` 扩展的 RPM / DEB 包：

```bash
pig build pkg acdat         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `acdat` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](https://pig.pgsty.com/zh) 或者是 `apt/yum/dnf` 安装扩展：

```bash {tab="安装" group="extension-install" value="install"}
pig install acdat;          # 当前活跃 PG 版本安装
```

```bash {tab="pig" value="pig"}
pig ext install -y acdat -v 18  # PG 18
pig ext install -y acdat -v 17  # PG 17
pig ext install -y acdat -v 16  # PG 16
pig ext install -y acdat -v 15  # PG 15
pig ext install -y acdat -v 14  # PG 14
```

```bash {tab="dnf" value="dnf"}
dnf install -y acdat_18       # PG 18
dnf install -y acdat_17       # PG 17
dnf install -y acdat_16       # PG 16
dnf install -y acdat_15       # PG 15
dnf install -y acdat_14       # PG 14
```

```bash {tab="apt" value="apt"}
apt install -y postgresql-18-acdat   # PG 18
apt install -y postgresql-17-acdat   # PG 17
apt install -y postgresql-16-acdat   # PG 16
apt install -y postgresql-15-acdat   # PG 15
apt install -y postgresql-14-acdat   # PG 14
```


**创建扩展**：

```sql
CREATE EXTENSION acdat;
```

## 用法

来源：

- [官方 README v0.1.0](https://github.com/Vonng/ac/blob/v0.1.0/README.md)
- [扩展控制文件](https://github.com/Vonng/ac/blob/v0.1.0/acdat.control)
- [版本化安装 SQL](https://github.com/Vonng/ac/blob/v0.1.0/sql/acdat--0.1.0.sql)
- [官方使用指南](https://github.com/Vonng/ac/blob/v0.1.0/docs/usage.md)
- [可执行 SQL 演示](https://github.com/Vonng/ac/blob/v0.1.0/examples/demo.sql)

`acdat` 0.1.0 将大规模精确字面量模式词典编译为不可变的 Aho-Corasick Double-Array machine，再对每个 `text` 或 `bytea` 值执行一次扫描以完成匹配或替换。它适合策略规则、失陷指标、实体名称、脱敏别名等稳定且会被反复使用的词典。

### 核心流程

创建扩展、编译词典，并在大量输入上复用生成的 `acdat.machine` 值：

```sql
CREATE EXTENSION acdat;

WITH machine AS (
    SELECT acdat.compile(
        ARRAY['he', 'she', 'his', 'hers'],
        ARRAY[1, 2, 3, 4]::bigint[]
    ) AS value
)
SELECT acdat.contains('ushers', value) AS matched,
       acdat.info(value)->>'pattern_count' AS patterns
FROM machine;
```

生产词典的源规则应保存在应用自有表中。`acdat.compile()` 的聚合重载可以直接从模式、ID、替换值和优先级记录构建确定性的 machine；一次编译后即可扫描大量输入。

### 匹配与替换

`acdat.contains()` 在首次命中后停止。`acdat.matches()` 返回 `acdat.hit` 行，其中包含模式 ID、字节与字符坐标以及优先级。`acdat.replace()` 执行字面量、非递归替换：

```sql
WITH machine AS (
    SELECT acdat.compile(
        ARRAY['病毒', '特征码', '病毒特征码'],
        ARRAY[10, 11, 12]::bigint[],
        ARRAY['[VIRUS]', '[SIGNATURE]', '[IOC]'],
        ARRAY[20, 20, 5]::integer[]
    ) AS value
)
SELECT *
FROM acdat.matches('发现病毒特征码', (SELECT value FROM machine), 'all_overlapping');

SELECT acdat.replace(
    'aaa',
    acdat.compile(
        ARRAY['a', 'aa', 'aaa'],
        ARRAY[1, 2, 3]::bigint[],
        ARRAY['[x]', '[yy]', '[zzz]']
    ),
    'leftmost_longest'
);
```

匹配策略包括 `all_overlapping`、`leftmost_longest` 和 `leftmost_priority`。替换只能使用非重叠策略。可通过 `acdat.info()` 检查已编译 machine，并在移动或校验产物时使用导出、验证、导入和指纹函数。

`acdat.matches()` 的 `max_matches` 默认值为 10000，`acdat.replace()` 的 `max_output_bytes` 默认值为 268435456。对于不可信或高命中输入，应设置更严格的上限，确保命中枚举和替换输出有界。

### 托管词典

可选的目录层用于发布不可变、内容寻址的 build，并以原子方式选择一个活动 build。其控制函数使用 `SECURITY INVOKER`，且不向 `PUBLIC` 授予执行权限：

```sql
WITH machine AS (
    SELECT acdat.compile(pattern, pattern_id)
    FROM app_keyword
    WHERE enabled
), published AS (
    SELECT acdat.publish('moderation', 1, machine) AS build_id
    FROM machine
)
SELECT acdat.activate('moderation', build_id)
FROM published;

SELECT name, version, build_id, machine
FROM acdat.active_machine
WHERE name = 'moderation';
```

应用表始终是事实源。逻辑备份包含目录元数据和活动 machine 载荷，但不会包含所有历史产物，因此应保留重建已退休或非活动版本所需的源模式。

### 兼容性与安全

0.1.0 已在 PostgreSQL 14 至 18 上测试，不需要预加载或重启服务器，没有外部扩展依赖，也不定义 GUC。控制文件将 schema 固定为 `acdat`，并设置 `relocatable = false` 和 `trusted = false`，因此 `CREATE EXTENSION` 需要超级用户。

ACDAT 索引的是模式词典，而不是文档表：扫描已有大表时仍需读取候选行。匹配是精确且区分大小写的；扩展不提供正则表达式、模糊匹配、分词、自动大小写折叠、Unicode 规范化或文档侧索引。文本引擎支持 UTF-8 和单字节服务器编码，二进制数据应使用 bytea 接口。需要反复反向查询时，应将 `(document_id, pattern_id)` 命中物化到应用表中。

编译格式具备自描述和校验和，导入的产物会在使用前接受验证。卸载前应清点依赖：`DROP EXTENSION acdat` 会删除托管词典状态，而添加 `CASCADE` 还可能删除依赖 `acdat.machine` 的用户列或其他对象。
