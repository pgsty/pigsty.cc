---
title: "codesystem"
linkTitle: "codesystem"
description: "支持校验、层级导航与修订追踪的分类编码类型"
weight: 3540
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/John-Cameron-Burns/pg-codesystem">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">John-Cameron-Burns/pg-codesystem</div>
    <div class="ext-card__desc">https://github.com/John-Cameron-Burns/pg-codesystem</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/codesystem-0.2.1.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">codesystem-0.2.1.tar.gz</div>
    <div class="ext-card__desc">codesystem-0.2.1.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`codesystem`**](/ext/e/codesystem) | `0.2.0` | <a class="ext-badge ext-badge--cate type" href="/ext/cate/type">TYPE</a> | <a class="ext-badge ext-badge--license bsd2clause" href="/ext/license#bsd2clause">BSD-2-Clause</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 3540  | [**`codesystem`**](/ext/e/codesystem) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | - |
{.ext-table}


> Distribution 0.2.1 keeps SQL/control 0.2.0; no extension upgrade from 0.2.0 is needed. Optional GSS entity updates and publisher-fetched ISIC/ISCO loaders need plpython3u, superuser installation and network access. Core extension dependencies unchanged. Upstream CI covers PG13-17; local EL9 aarch64 builds and regression checks additionally validate PG18.


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#type) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.2.0` | {{< pgvers "14,15,16,17,18" >}} | `codesystem` | - |
| [**RPM**](/ext/rpm#type) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.2.1` | {{< pgvers "14,15,16,17,18" >}} | `codesystem_$v` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 0.2.1 1 | AVAIL PIGSTY 0.2.1 1 | AVAIL PIGSTY 0.2.1 1 | AVAIL PIGSTY 0.2.1 1 | AVAIL PIGSTY 0.2.1 1 |
| el8.aarch64 | AVAIL PIGSTY 0.2.1 1 | AVAIL PIGSTY 0.2.1 1 | AVAIL PIGSTY 0.2.1 1 | AVAIL PIGSTY 0.2.1 1 | AVAIL PIGSTY 0.2.1 1 |
| el9.x86_64 | AVAIL PIGSTY 0.2.1 1 | AVAIL PIGSTY 0.2.1 1 | AVAIL PIGSTY 0.2.1 1 | AVAIL PIGSTY 0.2.1 1 | AVAIL PIGSTY 0.2.1 1 |
| el9.aarch64 | AVAIL PIGSTY 0.2.1 1 | AVAIL PIGSTY 0.2.1 1 | AVAIL PIGSTY 0.2.1 1 | AVAIL PIGSTY 0.2.1 1 | AVAIL PIGSTY 0.2.1 1 |
| el10.x86_64 | AVAIL PIGSTY 0.2.1 1 | AVAIL PIGSTY 0.2.1 1 | AVAIL PIGSTY 0.2.1 1 | AVAIL PIGSTY 0.2.1 1 | AVAIL PIGSTY 0.2.1 1 |
| el10.aarch64 | AVAIL PIGSTY 0.2.1 1 | AVAIL PIGSTY 0.2.1 1 | AVAIL PIGSTY 0.2.1 1 | AVAIL PIGSTY 0.2.1 1 | AVAIL PIGSTY 0.2.1 1 |
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
@ el8.x86_64 18 codesystem_18 codesystem_18-0.2.1-1PGSTY.el8.x86_64.rpm pigsty 0.2.1 122.3KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/codesystem_18-0.2.1-1PGSTY.el8.x86_64.rpm
@ el8.aarch64 18 codesystem_18 codesystem_18-0.2.1-1PGSTY.el8.aarch64.rpm pigsty 0.2.1 120.2KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/codesystem_18-0.2.1-1PGSTY.el8.aarch64.rpm
@ el9.x86_64 18 codesystem_18 codesystem_18-0.2.1-1PGSTY.el9.x86_64.rpm pigsty 0.2.1 122.5KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/codesystem_18-0.2.1-1PGSTY.el9.x86_64.rpm
@ el9.aarch64 18 codesystem_18 codesystem_18-0.2.1-1PGSTY.el9.aarch64.rpm pigsty 0.2.1 121.4KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/codesystem_18-0.2.1-1PGSTY.el9.aarch64.rpm
@ el10.x86_64 18 codesystem_18 codesystem_18-0.2.1-1PGSTY.el10.x86_64.rpm pigsty 0.2.1 122.8KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/codesystem_18-0.2.1-1PGSTY.el10.x86_64.rpm
@ el10.aarch64 18 codesystem_18 codesystem_18-0.2.1-1PGSTY.el10.aarch64.rpm pigsty 0.2.1 122.2KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/codesystem_18-0.2.1-1PGSTY.el10.aarch64.rpm
@ el8.x86_64 17 codesystem_17 codesystem_17-0.2.1-1PGSTY.el8.x86_64.rpm pigsty 0.2.1 122.2KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/codesystem_17-0.2.1-1PGSTY.el8.x86_64.rpm
@ el8.aarch64 17 codesystem_17 codesystem_17-0.2.1-1PGSTY.el8.aarch64.rpm pigsty 0.2.1 120.2KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/codesystem_17-0.2.1-1PGSTY.el8.aarch64.rpm
@ el9.x86_64 17 codesystem_17 codesystem_17-0.2.1-1PGSTY.el9.x86_64.rpm pigsty 0.2.1 122.5KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/codesystem_17-0.2.1-1PGSTY.el9.x86_64.rpm
@ el9.aarch64 17 codesystem_17 codesystem_17-0.2.1-1PGSTY.el9.aarch64.rpm pigsty 0.2.1 121.4KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/codesystem_17-0.2.1-1PGSTY.el9.aarch64.rpm
@ el10.x86_64 17 codesystem_17 codesystem_17-0.2.1-1PGSTY.el10.x86_64.rpm pigsty 0.2.1 122.9KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/codesystem_17-0.2.1-1PGSTY.el10.x86_64.rpm
@ el10.aarch64 17 codesystem_17 codesystem_17-0.2.1-1PGSTY.el10.aarch64.rpm pigsty 0.2.1 122.2KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/codesystem_17-0.2.1-1PGSTY.el10.aarch64.rpm
@ el8.x86_64 16 codesystem_16 codesystem_16-0.2.1-1PGSTY.el8.x86_64.rpm pigsty 0.2.1 122.2KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/codesystem_16-0.2.1-1PGSTY.el8.x86_64.rpm
@ el8.aarch64 16 codesystem_16 codesystem_16-0.2.1-1PGSTY.el8.aarch64.rpm pigsty 0.2.1 120.2KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/codesystem_16-0.2.1-1PGSTY.el8.aarch64.rpm
@ el9.x86_64 16 codesystem_16 codesystem_16-0.2.1-1PGSTY.el9.x86_64.rpm pigsty 0.2.1 122.5KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/codesystem_16-0.2.1-1PGSTY.el9.x86_64.rpm
@ el9.aarch64 16 codesystem_16 codesystem_16-0.2.1-1PGSTY.el9.aarch64.rpm pigsty 0.2.1 121.4KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/codesystem_16-0.2.1-1PGSTY.el9.aarch64.rpm
@ el10.x86_64 16 codesystem_16 codesystem_16-0.2.1-1PGSTY.el10.x86_64.rpm pigsty 0.2.1 122.9KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/codesystem_16-0.2.1-1PGSTY.el10.x86_64.rpm
@ el10.aarch64 16 codesystem_16 codesystem_16-0.2.1-1PGSTY.el10.aarch64.rpm pigsty 0.2.1 122.2KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/codesystem_16-0.2.1-1PGSTY.el10.aarch64.rpm
@ el8.x86_64 15 codesystem_15 codesystem_15-0.2.1-1PGSTY.el8.x86_64.rpm pigsty 0.2.1 122.6KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/codesystem_15-0.2.1-1PGSTY.el8.x86_64.rpm
@ el8.aarch64 15 codesystem_15 codesystem_15-0.2.1-1PGSTY.el8.aarch64.rpm pigsty 0.2.1 120.4KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/codesystem_15-0.2.1-1PGSTY.el8.aarch64.rpm
@ el9.x86_64 15 codesystem_15 codesystem_15-0.2.1-1PGSTY.el9.x86_64.rpm pigsty 0.2.1 124.1KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/codesystem_15-0.2.1-1PGSTY.el9.x86_64.rpm
@ el9.aarch64 15 codesystem_15 codesystem_15-0.2.1-1PGSTY.el9.aarch64.rpm pigsty 0.2.1 123.2KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/codesystem_15-0.2.1-1PGSTY.el9.aarch64.rpm
@ el10.x86_64 15 codesystem_15 codesystem_15-0.2.1-1PGSTY.el10.x86_64.rpm pigsty 0.2.1 124.5KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/codesystem_15-0.2.1-1PGSTY.el10.x86_64.rpm
@ el10.aarch64 15 codesystem_15 codesystem_15-0.2.1-1PGSTY.el10.aarch64.rpm pigsty 0.2.1 123.8KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/codesystem_15-0.2.1-1PGSTY.el10.aarch64.rpm
@ el8.x86_64 14 codesystem_14 codesystem_14-0.2.1-1PGSTY.el8.x86_64.rpm pigsty 0.2.1 122.5KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/codesystem_14-0.2.1-1PGSTY.el8.x86_64.rpm
@ el8.aarch64 14 codesystem_14 codesystem_14-0.2.1-1PGSTY.el8.aarch64.rpm pigsty 0.2.1 120.4KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/codesystem_14-0.2.1-1PGSTY.el8.aarch64.rpm
@ el9.x86_64 14 codesystem_14 codesystem_14-0.2.1-1PGSTY.el9.x86_64.rpm pigsty 0.2.1 124.0KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/codesystem_14-0.2.1-1PGSTY.el9.x86_64.rpm
@ el9.aarch64 14 codesystem_14 codesystem_14-0.2.1-1PGSTY.el9.aarch64.rpm pigsty 0.2.1 123.1KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/codesystem_14-0.2.1-1PGSTY.el9.aarch64.rpm
@ el10.x86_64 14 codesystem_14 codesystem_14-0.2.1-1PGSTY.el10.x86_64.rpm pigsty 0.2.1 124.5KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/codesystem_14-0.2.1-1PGSTY.el10.x86_64.rpm
@ el10.aarch64 14 codesystem_14 codesystem_14-0.2.1-1PGSTY.el10.aarch64.rpm pigsty 0.2.1 123.8KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/codesystem_14-0.2.1-1PGSTY.el10.aarch64.rpm
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `codesystem` 扩展的 RPM 包：

```bash
pig build pkg codesystem         # 构建 RPM 包
```


## 安装

您可以直接安装 `codesystem` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](https://pig.pgsty.com/zh) 或者是 `apt/yum/dnf` 安装扩展：

```bash {tab="安装" group="extension-install" value="install"}
pig install codesystem;          # 当前活跃 PG 版本安装
```

```bash {tab="pig" value="pig"}
pig ext install -y codesystem -v 18  # PG 18
pig ext install -y codesystem -v 17  # PG 17
pig ext install -y codesystem -v 16  # PG 16
pig ext install -y codesystem -v 15  # PG 15
pig ext install -y codesystem -v 14  # PG 14
```

```bash {tab="dnf" value="dnf"}
dnf install -y codesystem_18       # PG 18
dnf install -y codesystem_17       # PG 17
dnf install -y codesystem_16       # PG 16
dnf install -y codesystem_15       # PG 15
dnf install -y codesystem_14       # PG 14
```


**创建扩展**：

```sql
CREATE EXTENSION codesystem;
```

## 用法

来源：

- [README.md](https://github.com/John-Cameron-Burns/pg-codesystem/blob/482b052ab3ebd2b60816b4479d5cefa63eb7f61d/README.md)
- [docs/USER_GUIDE.md](https://github.com/John-Cameron-Burns/pg-codesystem/blob/482b052ab3ebd2b60816b4479d5cefa63eb7f61d/docs/USER_GUIDE.md)
- [codesystem--0.2.0.sql](https://github.com/John-Cameron-Burns/pg-codesystem/blob/482b052ab3ebd2b60816b4479d5cefa63eb7f61d/codesystem--0.2.0.sql)
- [codesystem--0.1.0--0.2.0.sql](https://github.com/John-Cameron-Burns/pg-codesystem/blob/482b052ab3ebd2b60816b4479d5cefa63eb7f61d/codesystem--0.1.0--0.2.0.sql)
- [codesystem.control](https://github.com/John-Cameron-Burns/pg-codesystem/blob/482b052ab3ebd2b60816b4479d5cefa63eb7f61d/codesystem.control)
- [.github/workflows/test.yml](https://github.com/John-Cameron-Burns/pg-codesystem/blob/482b052ab3ebd2b60816b4479d5cefa63eb7f61d/.github/workflows/test.yml)
- [tools/gss_update.sql](https://github.com/John-Cameron-Burns/pg-codesystem/blob/482b052ab3ebd2b60816b4479d5cefa63eb7f61d/tools/gss_update.sql)
- [tools/install_isic_isco.sql](https://github.com/John-Cameron-Burns/pg-codesystem/blob/482b052ab3ebd2b60816b4479d5cefa63eb7f61d/tools/install_isic_isco.sql)
- [NOTICE](https://github.com/John-Cameron-Burns/pg-codesystem/blob/482b052ab3ebd2b60816b4479d5cefa63eb7f61d/NOTICE)

`codesystem` 存储具名分类体系与具有类型约束的 `code` 值。0.2.0 支持列表层级、修订、派生标准、映射关系以及按模式定义的标识符。模式只能验证语法，不能判断标识符是否真的已签发。

### 核心用法

```sql
CREATE EXTENSION codesystem;
CREATE TABLE classification_source (code text, level text, parent text, label text);
INSERT INTO classification_source VALUES ('A', 'section', '', 'Agriculture');
SELECT define_code_system(
  'toy',
  '[{"name":"section","width":1,"charset":"[A-Z]","link":"none","expected":1}]',
  'SELECT * FROM classification_source', 'Toy classification', 'Example');
SELECT name, current_revision, ncodes FROM code_systems;
SELECT code_label('toy:A'::code);
SELECT define_code_system_pattern('my_id', 'AA-NNN');
SELECT code_from('AB-123', 'my_id');
```

### 运行边界

上游 CI 以 PostgreSQL 13–17 为目标。此原生扩展需要管理员安装；只有 SQL 扩展版本变化时才执行 `ALTER EXTENSION codesystem UPDATE`；分发包 0.2.1 仍使用 SQL/control 版本 0.2.0，已有 0.2.0 数据库无需升级。

`define_code_system` 校验层级，以及输入查询提供的编码、层级、父编码和标签四列。SQL 字面量必须带体系前缀，外部文本可用 `code_from` 转换。`code_level`、`code_parent`、`code_ancestor`、`code_children` 和 `code_label` 用于层级查询。不同修订中相同的文本表示不同值；编码仍有效时，可用 `code_current` 转换到当前修订。

`define_code_system` 还可通过 `refines` 和 `shared_levels` 定义派生分类，再用 `code_rollup` 向基础体系归并。`define_crosswalk` 注册对应关系，`code_map` 可能返回多个匹配，`code_map_unique` 则要求恰好匹配一个。`define_code_system_pattern` 定义有界模板或正则表达式，`code_part` 和 `code_parts` 返回命名片段。`code_from_padded` 可处理丢失的前导零，`code_first_with_prefix` 与 `code_last_with_prefix` 提供可利用索引的前缀范围。一个体系不能在列表形式与模式形式之间切换。

注册表的结构性修改受到保护，允许的编码集合变化时应定义新修订。写注册表需要相应表权限，读取编码需要注册表的 SELECT 权限。恢复自定义格式备份时，应使用上游 `tools/restore.sh` 辅助脚本，先恢复注册表，再恢复带编码类型的表数据，普通恢复顺序可能失败。

### 可选分类数据工具

分发包 0.2.1 提供 GSS 编码模板及实体类型数据。另行加载 `tools/gss_update.sql` 后，`gss_update_entity_types()` 可从 ONS 更新实体类型；加载 `tools/install_isic_isco.sql` 后，`codesystem_install_isic_rev4()` 与 `codesystem_install_isco_08()` 分别从 UN 和 ILO 下载分类。这些辅助工具需要预先创建 `plpython3u`、由超级用户安装，并允许数据库服务器访问对应来源；核心扩展本身不依赖它们。

先用 `dry_run` 检查下载内容；写入分类注册表时应连接主库。ISIC/ISCO 数据不随包重新分发，其使用仍遵循发布机构条款。上游 `NOTICE` 记录其他随包数据的署名和许可。
