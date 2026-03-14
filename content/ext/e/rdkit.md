---
title: "rdkit"
linkTitle: "rdkit"
description: "在PostgreSQL化学领域数据管理功能"
weight: 2930
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/rdkit/rdkit">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">rdkit/rdkit</div>
    <div class="ext-card__desc">https://github.com/rdkit/rdkit</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`rdkit`**](/ext/e/rdkit) | `202503.1` | <a class="ext-badge ext-badge--cate feat" href="/ext/cate/feat">FEAT</a> | <a class="ext-badge ext-badge--license bsd 3clause" href="/ext/license#bsd3clause">BSD 3-Clause</a> | <a class="ext-badge ext-badge--lang cpp" href="/ext/language#cpp">C++</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 2930  | [**`rdkit`**](/ext/e/rdkit) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | - |
{.ext-table}

| **相关扩展** | [`age`](/ext/e/age) [`hll`](/ext/e/hll) [`rum`](/ext/e/rum) [`pg_graphql`](/ext/e/pg_graphql) [`pg_jsonschema`](/ext/e/pg_jsonschema) [`jsquery`](/ext/e/jsquery) [`pg_hint_plan`](/ext/e/pg_hint_plan) [`hypopg`](/ext/e/hypopg) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


> u24 has rdkit for pg17


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#feat) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `202503.1` | {{< pgvers "18,17,16,15,14" >}} | `rdkit` | - |
| [**DEB**](/ext/deb#feat) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `202503.1` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-rdkit` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 |
| el8.aarch64 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 |
| el9.x86_64 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 |
| el9.aarch64 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 |
| el10.x86_64 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 |
| el10.aarch64 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 |
| d12.x86_64 | MISS PGDG - 0 | MISS PGDG - 0 | AVAIL PGDG 202303.3 1 | AVAIL PGDG 202303.3 1 | AVAIL PGDG 202303.3 1 |
| d12.aarch64 | MISS PGDG - 0 | MISS PGDG - 0 | AVAIL PGDG 202303.3 1 | AVAIL PGDG 202303.3 1 | AVAIL PGDG 202303.3 1 |
| d13.x86_64 | AVAIL PGDG 202503.1 1 | AVAIL PGDG 202503.1 1 | AVAIL PGDG 202503.1 1 | AVAIL PGDG 202503.1 1 | AVAIL PGDG 202503.1 1 |
| d13.aarch64 | AVAIL PGDG 202503.1 1 | AVAIL PGDG 202503.1 1 | AVAIL PGDG 202503.1 1 | AVAIL PGDG 202503.1 1 | AVAIL PGDG 202503.1 1 |
| u22.x86_64 | MISS PGDG - 0 | MISS PGDG - 0 | AVAIL PGDG 202303.3 1 | AVAIL PGDG 202303.3 1 | AVAIL PGDG 202303.3 1 |
| u22.aarch64 | MISS PGDG - 0 | MISS PGDG - 0 | AVAIL PGDG 202303.3 1 | AVAIL PGDG 202303.3 1 | AVAIL PGDG 202303.3 1 |
| u24.x86_64 | AVAIL PGDG 202503.1 1 | AVAIL PGDG 202503.1 1 | AVAIL PGDG 202503.1 1 | AVAIL PGDG 202503.1 1 | AVAIL PGDG 202503.1 1 |
| u24.aarch64 | AVAIL PGDG 202503.1 1 | AVAIL PGDG 202503.1 1 | AVAIL PGDG 202503.1 1 | AVAIL PGDG 202503.1 1 | AVAIL PGDG 202503.1 1 |
@ d13.x86_64 18 postgresql-18-rdkit postgresql-18-rdkit_202503.1-5.pgdg13+1_amd64.deb pgdg 202503.1 245.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/r/rdkit/postgresql-18-rdkit_202503.1-5.pgdg13+1_amd64.deb
@ d13.aarch64 18 postgresql-18-rdkit postgresql-18-rdkit_202503.1-5.pgdg13+1_arm64.deb pgdg 202503.1 237.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/r/rdkit/postgresql-18-rdkit_202503.1-5.pgdg13+1_arm64.deb
@ u24.x86_64 18 postgresql-18-rdkit postgresql-18-rdkit_202503.1-5.pgdg24.04+1_amd64.deb pgdg 202503.1 243.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/r/rdkit/postgresql-18-rdkit_202503.1-5.pgdg24.04+1_amd64.deb
@ u24.aarch64 18 postgresql-18-rdkit postgresql-18-rdkit_202503.1-5.pgdg24.04+1_arm64.deb pgdg 202503.1 237.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/r/rdkit/postgresql-18-rdkit_202503.1-5.pgdg24.04+1_arm64.deb
@ d13.x86_64 17 postgresql-17-rdkit postgresql-17-rdkit_202503.1-5.pgdg13+1_amd64.deb pgdg 202503.1 245.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/r/rdkit/postgresql-17-rdkit_202503.1-5.pgdg13+1_amd64.deb
@ d13.aarch64 17 postgresql-17-rdkit postgresql-17-rdkit_202503.1-5.pgdg13+1_arm64.deb pgdg 202503.1 237.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/r/rdkit/postgresql-17-rdkit_202503.1-5.pgdg13+1_arm64.deb
@ u24.x86_64 17 postgresql-17-rdkit postgresql-17-rdkit_202503.1-5.pgdg24.04+1_amd64.deb pgdg 202503.1 243.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/r/rdkit/postgresql-17-rdkit_202503.1-5.pgdg24.04+1_amd64.deb
@ u24.aarch64 17 postgresql-17-rdkit postgresql-17-rdkit_202503.1-5.pgdg24.04+1_arm64.deb pgdg 202503.1 237.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/r/rdkit/postgresql-17-rdkit_202503.1-5.pgdg24.04+1_arm64.deb
@ d12.x86_64 16 postgresql-16-rdkit postgresql-16-rdkit_202303.3-3.pgdg120+1_amd64.deb pgdg 202303.3 393.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/r/rdkit/postgresql-16-rdkit_202303.3-3.pgdg120+1_amd64.deb
@ d12.aarch64 16 postgresql-16-rdkit postgresql-16-rdkit_202303.3-3.pgdg120+1_arm64.deb pgdg 202303.3 384.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/r/rdkit/postgresql-16-rdkit_202303.3-3.pgdg120+1_arm64.deb
@ d13.x86_64 16 postgresql-16-rdkit postgresql-16-rdkit_202503.1-5.pgdg13+1_amd64.deb pgdg 202503.1 245.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/r/rdkit/postgresql-16-rdkit_202503.1-5.pgdg13+1_amd64.deb
@ d13.aarch64 16 postgresql-16-rdkit postgresql-16-rdkit_202503.1-5.pgdg13+1_arm64.deb pgdg 202503.1 237.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/r/rdkit/postgresql-16-rdkit_202503.1-5.pgdg13+1_arm64.deb
@ u22.x86_64 16 postgresql-16-rdkit postgresql-16-rdkit_202303.3-3.pgdg22.04+1_amd64.deb pgdg 202303.3 395.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/r/rdkit/postgresql-16-rdkit_202303.3-3.pgdg22.04+1_amd64.deb
@ u22.aarch64 16 postgresql-16-rdkit postgresql-16-rdkit_202303.3-3.pgdg22.04+1_arm64.deb pgdg 202303.3 387.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/r/rdkit/postgresql-16-rdkit_202303.3-3.pgdg22.04+1_arm64.deb
@ u24.x86_64 16 postgresql-16-rdkit postgresql-16-rdkit_202503.1-5.pgdg24.04+1_amd64.deb pgdg 202503.1 243.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/r/rdkit/postgresql-16-rdkit_202503.1-5.pgdg24.04+1_amd64.deb
@ u24.aarch64 16 postgresql-16-rdkit postgresql-16-rdkit_202503.1-5.pgdg24.04+1_arm64.deb pgdg 202503.1 237.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/r/rdkit/postgresql-16-rdkit_202503.1-5.pgdg24.04+1_arm64.deb
@ d12.x86_64 15 postgresql-15-rdkit postgresql-15-rdkit_202303.3-3.pgdg120+1_amd64.deb pgdg 202303.3 394.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/r/rdkit/postgresql-15-rdkit_202303.3-3.pgdg120+1_amd64.deb
@ d12.aarch64 15 postgresql-15-rdkit postgresql-15-rdkit_202303.3-3.pgdg120+1_arm64.deb pgdg 202303.3 385.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/r/rdkit/postgresql-15-rdkit_202303.3-3.pgdg120+1_arm64.deb
@ d13.x86_64 15 postgresql-15-rdkit postgresql-15-rdkit_202503.1-5.pgdg13+1_amd64.deb pgdg 202503.1 245.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/r/rdkit/postgresql-15-rdkit_202503.1-5.pgdg13+1_amd64.deb
@ d13.aarch64 15 postgresql-15-rdkit postgresql-15-rdkit_202503.1-5.pgdg13+1_arm64.deb pgdg 202503.1 237.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/r/rdkit/postgresql-15-rdkit_202503.1-5.pgdg13+1_arm64.deb
@ u22.x86_64 15 postgresql-15-rdkit postgresql-15-rdkit_202303.3-3.pgdg22.04+1_amd64.deb pgdg 202303.3 395.8KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/r/rdkit/postgresql-15-rdkit_202303.3-3.pgdg22.04+1_amd64.deb
@ u22.aarch64 15 postgresql-15-rdkit postgresql-15-rdkit_202303.3-3.pgdg22.04+1_arm64.deb pgdg 202303.3 387.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/r/rdkit/postgresql-15-rdkit_202303.3-3.pgdg22.04+1_arm64.deb
@ u24.x86_64 15 postgresql-15-rdkit postgresql-15-rdkit_202503.1-5.pgdg24.04+1_amd64.deb pgdg 202503.1 243.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/r/rdkit/postgresql-15-rdkit_202503.1-5.pgdg24.04+1_amd64.deb
@ u24.aarch64 15 postgresql-15-rdkit postgresql-15-rdkit_202503.1-5.pgdg24.04+1_arm64.deb pgdg 202503.1 237.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/r/rdkit/postgresql-15-rdkit_202503.1-5.pgdg24.04+1_arm64.deb
@ d12.x86_64 14 postgresql-14-rdkit postgresql-14-rdkit_202303.3-3.pgdg120+1_amd64.deb pgdg 202303.3 394.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/r/rdkit/postgresql-14-rdkit_202303.3-3.pgdg120+1_amd64.deb
@ d12.aarch64 14 postgresql-14-rdkit postgresql-14-rdkit_202303.3-3.pgdg120+1_arm64.deb pgdg 202303.3 385.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/r/rdkit/postgresql-14-rdkit_202303.3-3.pgdg120+1_arm64.deb
@ d13.x86_64 14 postgresql-14-rdkit postgresql-14-rdkit_202503.1-5.pgdg13+1_amd64.deb pgdg 202503.1 245.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/r/rdkit/postgresql-14-rdkit_202503.1-5.pgdg13+1_amd64.deb
@ d13.aarch64 14 postgresql-14-rdkit postgresql-14-rdkit_202503.1-5.pgdg13+1_arm64.deb pgdg 202503.1 237.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/r/rdkit/postgresql-14-rdkit_202503.1-5.pgdg13+1_arm64.deb
@ u22.x86_64 14 postgresql-14-rdkit postgresql-14-rdkit_202303.3-3.pgdg22.04+1_amd64.deb pgdg 202303.3 395.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/r/rdkit/postgresql-14-rdkit_202303.3-3.pgdg22.04+1_amd64.deb
@ u22.aarch64 14 postgresql-14-rdkit postgresql-14-rdkit_202303.3-3.pgdg22.04+1_arm64.deb pgdg 202303.3 387.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/r/rdkit/postgresql-14-rdkit_202303.3-3.pgdg22.04+1_arm64.deb
@ u24.x86_64 14 postgresql-14-rdkit postgresql-14-rdkit_202503.1-5.pgdg24.04+1_amd64.deb pgdg 202503.1 242.9KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/r/rdkit/postgresql-14-rdkit_202503.1-5.pgdg24.04+1_amd64.deb
@ u24.aarch64 14 postgresql-14-rdkit postgresql-14-rdkit_202503.1-5.pgdg24.04+1_arm64.deb pgdg 202503.1 237.0KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/r/rdkit/postgresql-14-rdkit_202503.1-5.pgdg24.04+1_arm64.deb
{{< /pgext_matrix >}}


## 安装

您可以直接安装 `rdkit` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 仓库已经添加并启用：

```bash
pig repo add pgdg -u          # 添加 PGDG 仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install rdkit;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y rdkit -v 18  # PG 18
pig ext install -y rdkit -v 17  # PG 17
pig ext install -y rdkit -v 16  # PG 16
pig ext install -y rdkit -v 15  # PG 15
pig ext install -y rdkit -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-rdkit   # PG 18
apt install -y postgresql-17-rdkit   # PG 17
apt install -y postgresql-16-rdkit   # PG 16
apt install -y postgresql-15-rdkit   # PG 15
apt install -y postgresql-14-rdkit   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**创建扩展**：

```sql
CREATE EXTENSION rdkit;
```




## 用法

> [rdkit: 化学信息学与分子工具 PostgreSQL 扩展](https://github.com/rdkit/rdkit)

RDKit PostgreSQL 扩展提供了用于分子的 `mol` 数据类型、用于指纹的 `fp` 数据类型、子结构和相似性搜索操作，以及 GiST 索引支持。

```sql
CREATE EXTENSION rdkit;
```

### 数据类型

| 类型 | 描述 |
|------|------|
| `mol` | 分子结构（来自 SMILES、SMARTS 等） |
| `bfp` | 位向量指纹 |
| `sfp` | 稀疏（计数）指纹 |

### 分子输入/输出

```sql
-- 从 SMILES 创建分子
SELECT 'c1ccccc1'::mol;

-- 检查 SMILES 是否有效
SELECT is_valid_smiles('c1ccccc1');

-- 将分子转换为 SMILES
SELECT mol_to_smiles('c1ccccc1'::mol);
```

### 子结构搜索

```sql
-- 子结构匹配运算符
SELECT 'c1ccccc1O'::mol @> 'c1ccccc1'::mol;   -- true（苯酚包含苯环）
SELECT 'c1ccccc1'::mol <@ 'c1ccccc1O'::mol;    -- true

-- 使用 SMARTS 模式
SELECT 'c1ccccc1O'::mol @> 'c1ccc(O)cc1'::mol;
```

### 相似性搜索

```sql
-- Tanimoto 相似度（返回 0 到 1 之间的值）
SELECT tanimoto_sml(morganbv_fp('c1ccccc1'::mol), morganbv_fp('c1ccccc1O'::mol));

-- Dice 相似度
SELECT dice_sml(morganbv_fp('c1ccccc1'::mol), morganbv_fp('c1ccccc1O'::mol));
```

### 指纹函数

```sql
-- Morgan 指纹（位向量）
SELECT morganbv_fp('c1ccccc1'::mol);
SELECT morganbv_fp('c1ccccc1'::mol, 2);  -- radius=2

-- RDKit 指纹
SELECT rdkit_fp('c1ccccc1'::mol);

-- 拓扑扭转指纹
SELECT torsionbv_fp('c1ccccc1'::mol);

-- 原子对指纹
SELECT atompairbv_fp('c1ccccc1'::mol);
```

### 描述符计算

```sql
SELECT mol_amw('c1ccccc1'::mol);          -- 平均分子量
SELECT mol_logp('c1ccccc1'::mol);         -- LogP
SELECT mol_hba('c1ccccc1O'::mol);         -- 氢键受体
SELECT mol_hbd('c1ccccc1O'::mol);         -- 氢键供体
SELECT mol_numrotatablebonds('c1ccccc1'::mol); -- 可旋转键
SELECT mol_numatoms('c1ccccc1'::mol);     -- 原子数
SELECT mol_numheavyatoms('c1ccccc1'::mol);    -- 重原子数
SELECT mol_numrings('c1ccccc1'::mol);     -- 环数
```

### GiST 索引支持

创建索引以加速子结构和相似性搜索：

```sql
-- 子结构搜索索引
CREATE INDEX idx_mol ON molecules USING gist(molecule);

-- 指纹相似性索引
CREATE INDEX idx_fp ON molecules USING gist(morganbv_fp(molecule));
```

使用索引查询：

```sql
-- 子结构搜索
SELECT * FROM molecules WHERE molecule @> 'c1ccccc1'::mol;

-- 相似性搜索（带阈值）
SET rdkit.dice_threshold = 0.5;
SELECT * FROM molecules WHERE morganbv_fp(molecule) % morganbv_fp('c1ccccc1O'::mol);
```

### GUC 参数

| 参数 | 默认值 | 描述 |
|------|--------|------|
| `rdkit.tanimoto_threshold` | 0.5 | Tanimoto 相似度运算符 `<%>` 的阈值 |
| `rdkit.dice_threshold` | 0.5 | Dice 相似度运算符 `%` 的阈值 |
