---
title: "pg_statecharts_dev"
linkTitle: "pg_statecharts_dev"
description: "pg_statecharts 的 SCXML 导入与迁移开发工具"
weight: 2696
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/kronor-io/statecharts">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">kronor-io/statecharts</div>
    <div class="ext-card__desc">https://github.com/kronor-io/statecharts</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/pg_statecharts-0.1.0.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">pg_statecharts-0.1.0.tar.gz</div>
    <div class="ext-card__desc">pg_statecharts-0.1.0.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pg_statecharts`**](/ext/e/pg_statecharts) | `0.1.0` | <a class="ext-badge ext-badge--cate feat" href="/ext/cate/feat">FEAT</a> | <a class="ext-badge ext-badge--license mit" href="/ext/license#mit">MIT</a> | <a class="ext-badge ext-badge--lang sql" href="/ext/language#sql">SQL</a> |
{.ext-table .wide .expand}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 2695  | [**`pg_statecharts`**](/ext/e/pg_statecharts) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | `fsm` |
| 2696  | [**`pg_statecharts_dev`**](/ext/e/pg_statecharts_dev) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | `fsm` |
{.ext-table .wide .expand}

| **相关扩展** | [`pg_statecharts`](/ext/e/pg_statecharts) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


> Development tooling; server file privileges


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#feat) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.1.0` | {{< pgvers "16,17,18" >}} | `pg_statecharts` | `pg_statecharts` |
| [**RPM**](/ext/rpm#feat) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.1.0` | {{< pgvers "16,17,18" >}} | `pg_statecharts_dev_$v` | `pg_statecharts_$v` |
| [**DEB**](/ext/deb#feat) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.1.0` | {{< pgvers "16,17,18" >}} | `postgresql-$v-pg-statecharts-dev` | `postgresql-$v-pg-statecharts` |
{.ext-table .wide .expand}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| el8.aarch64 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| el9.x86_64 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| el9.aarch64 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| el10.x86_64 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| el10.aarch64 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| d12.x86_64 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| d12.aarch64 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| d13.x86_64 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| d13.aarch64 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| u22.x86_64 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| u22.aarch64 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| u24.x86_64 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| u24.aarch64 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| u26.x86_64 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| u26.aarch64 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `pg_statecharts` 扩展的 RPM / DEB 包：

```bash
pig build pkg pg_statecharts         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `pg_statecharts` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](https://pig.pgsty.com/zh) 或者是 `apt/yum/dnf` 安装扩展：

```bash {tab="安装" group="extension-install" value="install"}
pig install pg_statecharts;          # 当前活跃 PG 版本安装
```

```bash {tab="pig" value="pig"}
pig ext install -y pg_statecharts -v 18  # PG 18
pig ext install -y pg_statecharts -v 17  # PG 17
pig ext install -y pg_statecharts -v 16  # PG 16
```

```bash {tab="dnf" value="dnf"}
dnf install -y pg_statecharts_dev_18       # PG 18
dnf install -y pg_statecharts_dev_17       # PG 17
dnf install -y pg_statecharts_dev_16       # PG 16
```

```bash {tab="apt" value="apt"}
apt install -y postgresql-18-pg-statecharts-dev   # PG 18
apt install -y postgresql-17-pg-statecharts-dev   # PG 17
apt install -y postgresql-16-pg-statecharts-dev   # PG 16
```


**创建扩展**：

```sql
CREATE EXTENSION pg_statecharts_dev CASCADE;  -- 依赖: pg_statecharts
```

## 用法

来源：

- [官方资料](https://github.com/kronor-io/statecharts/blob/472349e864440c39a30863a0db815050391804c7/pg_statecharts_dev/README.md)
- [官方资料](https://github.com/kronor-io/statecharts/blob/472349e864440c39a30863a0db815050391804c7/pg_statecharts_dev/pg_statecharts_dev.control)
- [官方资料](https://github.com/kronor-io/statecharts/blob/472349e864440c39a30863a0db815050391804c7/pg_statecharts/README.md)

`pg_statecharts_dev` 0.1.0 是 `pg_statecharts` 的开发工具扩展，用于导入 SCXML 定义与生成 Sqitch 迁移。生产状态机运行时不需要这套服务器文件访问工具。

### 核心流程

安装运行时及其依赖后，启用开发工具：

```sql
CREATE EXTENSION pg_statecharts_dev;
SELECT * FROM fsm.import_scxml_files(
  source_path => '/repo/statecharts',
  recursive => false,
  on_conflict_do_nothing => false
);
```

源目录位于数据库主机上。状态图回调必须已经存在，且签名符合要求。解析或验证失败会回滚导入事务，不会只接收状态图的一部分。

### 生成迁移

```sql
SELECT fsm.gen_statechart_sqitch_migrations(
  source_path => '/repo/statecharts',
  sqitch_plan_file_path => '/repo/sqitch/sqitch.plan',
  recursive => false
);
```

生成前应建立目标目录，并保证数据库操作系统用户可以访问。生成器写入部署、回退与验证脚本，更新计划文件，并可能覆盖已有的状态图生成文件。作为应用迁移使用前，必须检查这些改动。

### 权限与边界

读取服务器文件需要 `pg_read_server_files`，写入需要 `pg_write_server_files`。这些是广泛权限，不是仅限于所提供路径的沙箱。应将扩展及相关角色限制在受控的开发数据库中。它共用 `fsm` 模式，为纯 SQL 实现，无需预加载；文档测试覆盖 PostgreSQL 16–18。

生成迁移时使用运行时当前的语义版本辅助函数。旧迁移若仍转换到已移除的 semver 类型，应按上游迁移指南修订；重新生成全部历史状态图可能引入回调依赖顺序错误。生产端部署审查后的 SQL 即可，无需安装本开发工具。
