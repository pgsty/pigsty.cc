---
title: "扩展详情"
description: "每个 PostgreSQL 扩展的详细信息，可用性情况，下载链接，使用说明"
weight: 1001
icon: fas fa-circle-info
no_list: true
---

Pigsty 中扩展的完整清单，请参考 [**扩展列表**](/ext/list)，[**RPM 包列表**](/ext/rpm)，[**DEB 包列表**](/ext/deb)。

--------

## 元数据说明

**扩展**（Extension, `name`）是 PostgreSQL 中的一个逻辑功能模块，名称与 `pg_available_extensions` 系统视图中的名称一致，是 PostgreSQL 世界里的唯一标识。
使用 `CREATE EXTENSION <name>` 来创建一个扩展，使用 `DROP EXTENSION <name>` 来删除一个扩展。

**扩展包**（Package, `pkg`）是包含一个或多个扩展的二进制软件包（RPM 或 DEB）。一个扩展包可能包含多个扩展，
例如 `postgis` 扩展包中包含了 `postgis`、`postgis_topology`、`postgis_raster` 等多个扩展。
扩展包的名称不一定与扩展名一致，例如扩展包 `pgvector` 对应的核心扩展名为 `vector`。

当一个扩展包中包含多个扩展时，会有一个**首要扩展**（Lead Extension, `lead`）作为该包的代表。
首要扩展通常是包中最核心的扩展，其他扩展被视为 “兄弟扩展”。

--------

## 分类维度

扩展可以按照以下维度进行分类：

|         **维度**          | **说明**                                   |
|:-----------------------:|:-----------------------------------------|
|   [**分类**](/ext/cate)   | 按功能划分为 16 个预定义类目，见下方分类表                  |
| [**协议**](/ext/license)  | 按开源许可证分类：MIT、PostgreSQL、Apache-2.0、GPL 等 |
| [**语言**](/ext/language) | 按实现语言分类：C、C++、Rust、SQL、Python 等          |
|   [**仓库**](/ext/repo)   | 按归属仓库分类：PGDG、PIGSTY、CONTRIB、MIXED        |
{.ext-table}

--------

## 属性标记

每个扩展都有 7 个布尔属性标记，在[扩展列表](/ext/list)中以 7 位字符串 `cbsLdtr` 的形式展示，每一位代表一个属性：

| **位** | **字符** | **列名**  | **字段**        | **全称** | **说明**                                   |
|:-----:|:------:|:-------:|---------------|:-------|:-----------------------------------------|
|   1   |  `c`   | Contrib | `contrib`     | 内核自带   | 是否为 PostgreSQL 内核自带的 contrib 扩展          |
|   2   |  `b`   |   Bin   | `has_bin`     | 二进制    | 扩展包是否包含额外的可执行二进制文件/命令行工具                 |
|   3   |  `s`   |  Solib  | `has_lib`     | 共享库    | 扩展是否包含共享库文件（`.so`），即 C/Rust 编译产物         |
|   4   |  `L`   |  Load   | `need_ddl`    | 显式加载   | 是否需要通过 `shared_preload_libraries` 预加载并重启 |
|   5   |  `d`   |   DDL   | `need_load`   | 需要创建   | 是否需要执行 `CREATE EXTENSION` DDL 语句完成安装     |
|   6   |  `t`   |  Trust  | `trusted`     | 信任扩展   | 是否为受信任的扩展，普通用户（非超级用户）可直接创建               |
|   7   |  `r`   |  Reloc  | `relocatable` | 可重定位   | 扩展是否可以被安装到指定的 Schema 中                   |
{.ext-table}

当该属性为真时，显示对应字母；为假时，显示短横线 `-`。

例如 `--sLd-r` 表示该扩展包含共享库，需要预加载，需要创建，不受信任（需要超级用户来创建）但可重定位。


--------

## 可用性状态

Pigsty 为每一个扩展都提供了 **版本可用性矩阵**，这是一个表格，行为操作系统（例如 `el9.x86_64`），列为 PG 大版本（`18`, `17`, ...）。

每一个单元格代表这个 Linux 操作系统与 PG 大版本组合下的扩展状态，包括：

- **版本**：这个 OS/PG 组合下，该扩展的最新可用版本号，如果缺失则显示为 `MISS`。
- **仓库**：上面的最新可用版本是来自哪个 [**仓库**](/ext/repo)？可能是 PGDG/PIGSTY
- **状态**：扩展的状态如下表所示，状态会使用徽章的颜色进行区分与标记：

|                              **状态**                               | **说明**                              |
|:-----------------------------------------------------------------:|:------------------------------------|
|  <span class="ext-avail-cell ext-avail-cell--pgdg">AVAIL</span>   | **可用**（PGDG 仓库），显示该平台上可用的具体版本号      |
| <span class="ext-avail-cell ext-avail-cell--pigsty">AVAIL</span>  | **可用**（PIGSTY 仓库），显示该平台上可用的具体版本号    |
| <span class="ext-avail-cell ext-avail-cell--contrib">AVAIL</span> | **可用**（CONTRIB 内核自带），显示该平台上可用的具体版本号 |
|   <span class="ext-avail-cell ext-avail-cell--miss">MISS</span>   | **缺失**，该平台上没有可用的二进制包                |
|   <span class="ext-avail-cell ext-avail-cell--hide">HIDE</span>   | **隐藏**，该扩展已知不支持此 PG 版本（如版本范围限制）     |
|  <span class="ext-avail-cell ext-avail-cell--throw">THROW</span>  | **异常**，该包存在但安装时会抛出错误                |
|  <span class="ext-avail-cell ext-avail-cell--break">BREAK</span>  | **损坏**，该包存在但运行时可能导致问题               |
|   <span class="ext-avail-cell ext-avail-cell--fork">FORK</span>   | **分支**，需要使用特定的 PostgreSQL 内核分支版本    |
{.ext-table}



------

## 数据库模式

Pigsty 扩展目录的模式定义于 [`github.com/pgsty/pgext`](https://github.com/pgsty/pgext/blob/main/db/schema.sql)，数据位于 [`extension.csv`](https://github.com/pgsty/pgext/blob/main/db/extension.csv) 中。

<details><summary> Extension 表结构定义</summary>

```sql
CREATE TABLE IF NOT EXISTS pgext.extension
(
    id          INTEGER PRIMARY KEY,      -- Unique extension identifier
    name        TEXT NOT NULL UNIQUE,     -- Extension name as it appears in pg_extension
    pkg         TEXT NOT NULL,            -- Normalized package name (may differ from extension name)
    lead_ext    TEXT,                     -- Leading/primary extension in multi-extension packages
    category    TEXT,                     -- Category classification (TIME, GIS, RAG, FTS, etc.)
    state       TEXT,                     -- Extension state: available, deprecated, removed, not-ready
    url         TEXT,                     -- Extension homepage or source repository URL
    license     TEXT,                     -- Software license (PostgreSQL, MIT, Apache-2.0, etc.)
    tags        TEXT[],                   -- Additional classification tags
    version     TEXT,                     -- Latest available version of this extension
    repo        TEXT,                     -- Source repository type (github, gitlab, etc.)
    lang        TEXT,                     -- Primary programming language (C, SQL, PLpgSQL, Rust, etc.)
    contrib     BOOLEAN,                  -- Whether this is a PostgreSQL contrib extension
    lead        BOOLEAN,                  -- Whether this is the lead extension in its package
    has_bin     BOOLEAN,                  -- Whether extension includes binary executables
    has_lib     BOOLEAN,                  -- Whether extension includes shared libraries (.so/.dll)
    need_ddl    BOOLEAN,                  -- Whether requires CREATE EXTENSION DDL to install
    need_load   BOOLEAN,                  -- Whether requires LOAD or shared_preload_libraries
    trusted     BOOLEAN,                  -- Whether non-superuser can install (trusted extension)
    relocatable BOOLEAN,                  -- Whether extension can be relocated to different schema
    schemas     TEXT[],                   -- Fixed schema names if not relocatable
    pg_ver      TEXT[],                   -- Supported PostgreSQL major versions
    requires    TEXT[],                   -- Extension dependencies (other extensions required)
    require_by  TEXT[],                   -- Extensions that depend on this extension
    see_also    TEXT[],                   -- Related or similar extensions
    rpm_ver     TEXT,                     -- Latest RPM package version
    rpm_repo    TEXT,                     -- RPM repository source (PGDG, PIGSTY, etc.)
    rpm_pkg     TEXT,                     -- RPM package name template ($v for PG version)
    rpm_pg      TEXT[],                   -- PostgreSQL versions available in RPM
    rpm_deps    TEXT[],                   -- RPM package dependencies
    deb_ver     TEXT,                     -- Latest DEB package version
    deb_repo    TEXT,                     -- DEB repository source (PGDG, PIGSTY, etc.)
    deb_pkg     TEXT,                     -- DEB package name template ($v for PG version)
    deb_deps    TEXT[],                   -- DEB package dependencies
    deb_pg      TEXT[],                   -- PostgreSQL versions available in DEB
    source      TEXT,                     -- Source tarball name if built by Pigsty
    extra       JSONB,                    -- Additional metadata in JSONB format
    en_desc     TEXT,                     -- English description of extension functionality
    zh_desc     TEXT,                     -- Chinese description of extension functionality
    comment     TEXT,                     -- Additional notes or special instructions
    mtime       DATE DEFAULT CURRENT_DATE -- Last modification date of this record
);

CREATE INDEX IF NOT EXISTS ext_name_pkg_idx ON pgext.extension (name, pkg);

COMMENT ON TABLE pgext.extension IS 'PostgreSQL Extension Central Catalog Table';
COMMENT ON COLUMN pgext.extension.id IS 'Unique integer identifier for each extension';
COMMENT ON COLUMN pgext.extension.name IS 'Extension name as it appears in PostgreSQL system catalog (pg_extension)';
COMMENT ON COLUMN pgext.extension.pkg IS 'Normalized package name used for package management (may differ from extension name)';
COMMENT ON COLUMN pgext.extension.lead_ext IS 'Primary/leading extension name in multi-extension packages';
COMMENT ON COLUMN pgext.extension.category IS 'Functional category: TIME, GIS, RAG, FTS, OLAP, FEAT, LANG, TYPE, UTIL, FUNC, ADMIN, STAT, SEC, FDW, SIM, ETL';
COMMENT ON COLUMN pgext.extension.state IS 'Extension lifecycle state: available, deprecated, removed, not-ready';
COMMENT ON COLUMN pgext.extension.url IS 'Extension homepage or source code repository URL (GitHub, GitLab, etc.)';
COMMENT ON COLUMN pgext.extension.license IS 'Software license (e.g., PostgreSQL, MIT, Apache-2.0, GPL, BSD)';
COMMENT ON COLUMN pgext.extension.tags IS 'Additional classification tags as string array for flexible categorization';
COMMENT ON COLUMN pgext.extension.version IS 'Latest available version of this extension';
COMMENT ON COLUMN pgext.extension.repo IS 'Source repository hosting platform (github, gitlab, bitbucket, etc.)';
COMMENT ON COLUMN pgext.extension.lang IS 'Primary implementation language (C, SQL, PLpgSQL, Rust, Go, Python, etc.)';
COMMENT ON COLUMN pgext.extension.contrib IS 'Whether this is an official PostgreSQL contrib extension';
COMMENT ON COLUMN pgext.extension.lead IS 'Whether this is the primary/lead extension in a multi-extension package';
COMMENT ON COLUMN pgext.extension.has_bin IS 'Whether the extension package includes binary executables/utilities';
COMMENT ON COLUMN pgext.extension.has_lib IS 'Whether the extension includes shared library files (.so on Linux, .dll on Windows)';
COMMENT ON COLUMN pgext.extension.need_ddl IS 'Whether extension requires CREATE EXTENSION DDL command to install';
COMMENT ON COLUMN pgext.extension.need_load IS 'Whether requires explicit LOAD or shared_preload_libraries configuration';
COMMENT ON COLUMN pgext.extension.trusted IS 'Whether non-superuser can install this extension (trusted extension feature)';
COMMENT ON COLUMN pgext.extension.relocatable IS 'Whether extension can be relocated to a different schema after installation';
COMMENT ON COLUMN pgext.extension.schemas IS 'Fixed schema names if extension is not relocatable (must be installed in specific schema)';
COMMENT ON COLUMN pgext.extension.pg_ver IS 'Array of supported PostgreSQL major versions (e.g., {14,15,16,17,18})';
COMMENT ON COLUMN pgext.extension.requires IS 'Array of extension dependencies (other extensions that must be installed first)';
COMMENT ON COLUMN pgext.extension.require_by IS 'Array of extensions that depend on this extension (reverse dependency list)';
COMMENT ON COLUMN pgext.extension.see_also IS 'Array of related or similar extensions (for discovery and comparison)';
COMMENT ON COLUMN pgext.extension.rpm_ver IS 'Latest available RPM package version';
COMMENT ON COLUMN pgext.extension.rpm_repo IS 'RPM repository source (PGDG, PIGSTY, EPEL, etc.)';
COMMENT ON COLUMN pgext.extension.rpm_pkg IS 'RPM package name template where $v is replaced with PostgreSQL major version';
COMMENT ON COLUMN pgext.extension.rpm_pg IS 'Array of PostgreSQL versions available as RPM packages';
COMMENT ON COLUMN pgext.extension.rpm_deps IS 'Array of RPM package dependencies (system libraries and other packages)';
COMMENT ON COLUMN pgext.extension.deb_ver IS 'Latest available DEB package version';
COMMENT ON COLUMN pgext.extension.deb_repo IS 'DEB repository source (PGDG, PIGSTY, etc.)';
COMMENT ON COLUMN pgext.extension.deb_pkg IS 'DEB package name template where $v is replaced with PostgreSQL major version';
COMMENT ON COLUMN pgext.extension.deb_deps IS 'Array of DEB package dependencies (system libraries and other packages)';
COMMENT ON COLUMN pgext.extension.deb_pg IS 'Array of PostgreSQL versions available as DEB packages';
COMMENT ON COLUMN pgext.extension.source IS 'Source code tarball filename if built and distributed by Pigsty';
COMMENT ON COLUMN pgext.extension.extra IS 'Additional extension metadata stored as JSONB for extensibility';
COMMENT ON COLUMN pgext.extension.en_desc IS 'English description of extension functionality and purpose';
COMMENT ON COLUMN pgext.extension.zh_desc IS 'Chinese description of extension functionality and purpose';
COMMENT ON COLUMN pgext.extension.comment IS 'Additional notes, special instructions, or warnings';
COMMENT ON COLUMN pgext.extension.mtime IS 'Last modification timestamp of this record';
```

</details>
