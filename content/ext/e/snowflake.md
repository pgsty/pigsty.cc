---
title: "snowflake"
linkTitle: "snowflake"
description: "Snowflake 风格 64 位 ID 生成与序列工具"
weight: 4590
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/pgEdge/snowflake">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">pgEdge/snowflake</div>
    <div class="ext-card__desc">https://github.com/pgEdge/snowflake</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/snowflake-2.4.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">snowflake-2.4.tar.gz</div>
    <div class="ext-card__desc">snowflake-2.4.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`snowflake`**](/ext/e/snowflake) | `2.4` | <a class="ext-badge ext-badge--cate func" href="/ext/cate/func">FUNC</a> | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 4590  | [**`snowflake`**](/ext/e/snowflake) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | `snowflake` |
{.ext-table}

| **相关扩展** | [`spock`](/ext/e/spock) [`lolor`](/ext/e/lolor) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


> works on pgedge kernel fork. Set snowflake.node (1..1023) before using snowflake.nextval().


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#func) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `2.4` | {{< pgvers "17" >}} | `snowflake` | - |
| [**RPM**](/ext/rpm#func) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `2.4` | {{< pgvers "17" >}} | `snowflake_$v` | `pgedge_$v` |
| [**DEB**](/ext/deb#func) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `2.4` | {{< pgvers "17" >}} | `pgedge-$v-snowflake` | `pgedge-$v` |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | MISS PIGSTY - 0 | FORK PIGSTY 2.4 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| el8.aarch64 | MISS PIGSTY - 0 | FORK PIGSTY 2.4 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| el9.x86_64 | MISS PIGSTY - 0 | FORK PIGSTY 2.4 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| el9.aarch64 | MISS PIGSTY - 0 | FORK PIGSTY 2.4 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| el10.x86_64 | MISS PIGSTY - 0 | FORK PIGSTY 2.4 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| el10.aarch64 | MISS PIGSTY - 0 | FORK PIGSTY 2.4 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| d12.x86_64 | MISS PIGSTY - 0 | FORK PIGSTY 2.4 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| d12.aarch64 | MISS PIGSTY - 0 | FORK PIGSTY 2.4 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| d13.x86_64 | MISS PIGSTY - 0 | FORK PIGSTY 2.4 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| d13.aarch64 | MISS PIGSTY - 0 | FORK PIGSTY 2.4 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| u22.x86_64 | MISS PIGSTY - 0 | FORK PIGSTY 2.4 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| u22.aarch64 | MISS PIGSTY - 0 | FORK PIGSTY 2.4 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| u24.x86_64 | MISS PIGSTY - 0 | FORK PIGSTY 2.4 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| u24.aarch64 | MISS PIGSTY - 0 | FORK PIGSTY 2.4 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
@ el8.x86_64 17 snowflake_17 snowflake_17-2.4-1PIGSTY.el8.x86_64.rpm pigsty 2.4 20.7KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/snowflake_17-2.4-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 17 snowflake_17 snowflake_17-2.4-1PIGSTY.el8.aarch64.rpm pigsty 2.4 20.7KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/snowflake_17-2.4-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 17 snowflake_17 snowflake_17-2.4-1PIGSTY.el9.x86_64.rpm pigsty 2.4 20.6KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/snowflake_17-2.4-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 17 snowflake_17 snowflake_17-2.4-1PIGSTY.el9.aarch64.rpm pigsty 2.4 20.4KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/snowflake_17-2.4-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 17 snowflake_17 snowflake_17-2.4-1PIGSTY.el10.x86_64.rpm pigsty 2.4 20.7KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/snowflake_17-2.4-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 17 snowflake_17 snowflake_17-2.4-1PIGSTY.el10.aarch64.rpm pigsty 2.4 20.6KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/snowflake_17-2.4-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 17 pgedge-17-snowflake pgedge-17-snowflake_2.4-1PIGSTY~bookworm_amd64.deb pigsty 2.4 10.2KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/s/snowflake/pgedge-17-snowflake_2.4-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 17 pgedge-17-snowflake pgedge-17-snowflake_2.4-1PIGSTY~bookworm_arm64.deb pigsty 2.4 10.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/s/snowflake/pgedge-17-snowflake_2.4-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 17 pgedge-17-snowflake pgedge-17-snowflake_2.4-1PIGSTY~trixie_amd64.deb pigsty 2.4 10.2KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/s/snowflake/pgedge-17-snowflake_2.4-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 17 pgedge-17-snowflake pgedge-17-snowflake_2.4-1PIGSTY~trixie_arm64.deb pigsty 2.4 10.1KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/s/snowflake/pgedge-17-snowflake_2.4-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 17 pgedge-17-snowflake pgedge-17-snowflake_2.4-1PIGSTY~jammy_amd64.deb pigsty 2.4 10.7KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/s/snowflake/pgedge-17-snowflake_2.4-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 17 pgedge-17-snowflake pgedge-17-snowflake_2.4-1PIGSTY~jammy_arm64.deb pigsty 2.4 10.4KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/s/snowflake/pgedge-17-snowflake_2.4-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 17 pgedge-17-snowflake pgedge-17-snowflake_2.4-1PIGSTY~noble_amd64.deb pigsty 2.4 10.6KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/s/snowflake/pgedge-17-snowflake_2.4-1PIGSTY~noble_amd64.deb
@ u24.aarch64 17 pgedge-17-snowflake pgedge-17-snowflake_2.4-1PIGSTY~noble_arm64.deb pigsty 2.4 10.4KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/s/snowflake/pgedge-17-snowflake_2.4-1PIGSTY~noble_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `snowflake` 扩展的 RPM / DEB 包：

```bash
pig build pkg snowflake         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `snowflake` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install snowflake;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y snowflake -v 17  # PG 17
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y snowflake_17       # PG 17
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y pgedge-17-snowflake   # PG 17
```
{{% /tab %}}
{{< /tabpane >}}


**创建扩展**：

```sql
CREATE EXTENSION snowflake;
```



## 用法

> [snowflake: PostgreSQL 的 Snowflake ID 序列](https://github.com/pgEdge/snowflake)

提供基于 `int8` 和 `sequence` 的唯一 ID 生成，使用 Snowflake 格式，适用于分布式系统。

```sql
CREATE EXTENSION snowflake;
```

### 配置

在 `postgresql.conf` 中设置节点标识符（必需，值为 1-1023）：

```ini
snowflake.node = 1
```

### 函数

| 函数 | 描述 |
|---|---|
| `snowflake.nextval([sequence regclass])` | 生成下一个 Snowflake ID（未指定序列时使用内部序列） |
| `snowflake.currval([sequence regclass])` | 返回序列的当前值 |
| `snowflake.get_epoch(snowflake int8)` | 提取时间戳（自 2023-01-01 起的秒数） |
| `snowflake.get_count(snowflake int8)` | 提取计数部分（每毫秒重置） |
| `snowflake.get_node(snowflake int8)` | 提取节点标识符 |
| `snowflake.format(snowflake int8)` | 返回包含 `node`、`ts` 和 `count` 字段的 JSONB |

### 示例

```sql
-- 生成一个 Snowflake ID
SELECT snowflake.nextval();
-- 136169504773242881

-- 配合命名序列使用
CREATE SEQUENCE orders_id_seq;
SELECT snowflake.nextval('orders_id_seq'::regclass);

-- 提取各组成部分
SELECT snowflake.get_epoch(136169504773242881);
-- 1704996539.845

SELECT to_timestamp(snowflake.get_epoch(136169504773242881));
-- 2024-01-11 13:08:59.845-05

SELECT snowflake.get_node(136169504773242881);
-- 1

SELECT snowflake.format(136169504773242881);
-- {"id": 1, "ts": "2024-01-11 13:08:59.845-05", "count": 0}

-- 用作默认列值
CREATE TABLE orders (
  id int8 DEFAULT snowflake.nextval() PRIMARY KEY,
  data text
);
```
