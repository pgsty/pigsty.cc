---
title: "pg_pathcheck"
linkTitle: "pg_pathcheck"
description: "校验 planner Path 树，诊断已释放或损坏的内存引用"
weight: 5250
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/danolivo/pg_pathcheck">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">danolivo/pg_pathcheck</div>
    <div class="ext-card__desc">https://github.com/danolivo/pg_pathcheck</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/pg_pathcheck-0.9.1-pg17-18.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">pg_pathcheck-0.9.1-pg17-18.tar.gz</div>
    <div class="ext-card__desc">pg_pathcheck-0.9.1-pg17-18.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pg_pathcheck`**](/ext/e/pg_pathcheck) | `0.9.1` | <a class="ext-badge ext-badge--cate admin" href="/ext/cate/admin">ADMIN</a> | <a class="ext-badge ext-badge--license mit" href="/ext/license#mit">MIT</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 5250  | [**`pg_pathcheck`**](/ext/e/pg_pathcheck) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | - |
{.ext-table}

| **相关扩展** | [`pg_catcheck`](/ext/e/pg_catcheck) [`pg_checksums`](/ext/e/pg_checksums) [`amcheck`](/ext/e/amcheck) [`pg_surgery`](/ext/e/pg_surgery) [`pageinspect`](/ext/e/pageinspect) [`pg_visibility`](/ext/e/pg_visibility) [`pgstattuple`](/ext/e/pgstattuple) [`pg_repack`](/ext/e/pg_repack) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


> preload-only module; no CREATE EXTENSION objects; pg17-18 branch


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#admin) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.9.1` | {{< pgvers "18,17" >}} | `pg_pathcheck` | - |
| [**RPM**](/ext/rpm#admin) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.9.1` | {{< pgvers "18,17" >}} | `pg_pathcheck_$v` | - |
| [**DEB**](/ext/deb#admin) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.9.1` | {{< pgvers "18,17" >}} | `postgresql-$v-pg-pathcheck` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 0.9.1 1 | AVAIL PIGSTY 0.9.1 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| el8.aarch64 | AVAIL PIGSTY 0.9.1 1 | AVAIL PIGSTY 0.9.1 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| el9.x86_64 | AVAIL PIGSTY 0.9.1 1 | AVAIL PIGSTY 0.9.1 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| el9.aarch64 | AVAIL PIGSTY 0.9.1 1 | AVAIL PIGSTY 0.9.1 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| el10.x86_64 | AVAIL PIGSTY 0.9.1 1 | AVAIL PIGSTY 0.9.1 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| el10.aarch64 | AVAIL PIGSTY 0.9.1 1 | AVAIL PIGSTY 0.9.1 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| d12.x86_64 | AVAIL PIGSTY 0.9.1 1 | AVAIL PIGSTY 0.9.1 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| d12.aarch64 | AVAIL PIGSTY 0.9.1 1 | AVAIL PIGSTY 0.9.1 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| d13.x86_64 | AVAIL PIGSTY 0.9.1 1 | AVAIL PIGSTY 0.9.1 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| d13.aarch64 | AVAIL PIGSTY 0.9.1 1 | AVAIL PIGSTY 0.9.1 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| u22.x86_64 | AVAIL PIGSTY 0.9.1 1 | AVAIL PIGSTY 0.9.1 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| u22.aarch64 | AVAIL PIGSTY 0.9.1 1 | AVAIL PIGSTY 0.9.1 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| u24.x86_64 | AVAIL PIGSTY 0.9.1 1 | AVAIL PIGSTY 0.9.1 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| u24.aarch64 | AVAIL PIGSTY 0.9.1 1 | AVAIL PIGSTY 0.9.1 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| u26.x86_64 | AVAIL PIGSTY 0.9.1 1 | AVAIL PIGSTY 0.9.1 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| u26.aarch64 | AVAIL PIGSTY 0.9.1 1 | AVAIL PIGSTY 0.9.1 1 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
@ el8.x86_64 18 pg_pathcheck_18 pg_pathcheck_18-0.9.1-1PIGSTY.el8.x86_64.rpm pigsty 0.9.1 28.2KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_pathcheck_18-0.9.1-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 18 pg_pathcheck_18 pg_pathcheck_18-0.9.1-1PIGSTY.el8.aarch64.rpm pigsty 0.9.1 28.7KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_pathcheck_18-0.9.1-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 18 pg_pathcheck_18 pg_pathcheck_18-0.9.1-1PIGSTY.el9.x86_64.rpm pigsty 0.9.1 28.6KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_pathcheck_18-0.9.1-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 18 pg_pathcheck_18 pg_pathcheck_18-0.9.1-1PIGSTY.el9.aarch64.rpm pigsty 0.9.1 29.4KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_pathcheck_18-0.9.1-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 18 pg_pathcheck_18 pg_pathcheck_18-0.9.1-1PIGSTY.el10.x86_64.rpm pigsty 0.9.1 28.8KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_pathcheck_18-0.9.1-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 18 pg_pathcheck_18 pg_pathcheck_18-0.9.1-1PIGSTY.el10.aarch64.rpm pigsty 0.9.1 29.4KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_pathcheck_18-0.9.1-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-pg-pathcheck postgresql-18-pg-pathcheck_0.9.1-1PIGSTY~bookworm_amd64.deb pigsty 0.9.1 60.0KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-pathcheck/postgresql-18-pg-pathcheck_0.9.1-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-pg-pathcheck postgresql-18-pg-pathcheck_0.9.1-1PIGSTY~bookworm_arm64.deb pigsty 0.9.1 59.9KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-pathcheck/postgresql-18-pg-pathcheck_0.9.1-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-pg-pathcheck postgresql-18-pg-pathcheck_0.9.1-1PIGSTY~trixie_amd64.deb pigsty 0.9.1 59.8KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-pathcheck/postgresql-18-pg-pathcheck_0.9.1-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-pg-pathcheck postgresql-18-pg-pathcheck_0.9.1-1PIGSTY~trixie_arm64.deb pigsty 0.9.1 60.0KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-pathcheck/postgresql-18-pg-pathcheck_0.9.1-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-pg-pathcheck postgresql-18-pg-pathcheck_0.9.1-1PIGSTY~jammy_amd64.deb pigsty 0.9.1 67.2KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-pathcheck/postgresql-18-pg-pathcheck_0.9.1-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-pg-pathcheck postgresql-18-pg-pathcheck_0.9.1-1PIGSTY~jammy_arm64.deb pigsty 0.9.1 67.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-pathcheck/postgresql-18-pg-pathcheck_0.9.1-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-pg-pathcheck postgresql-18-pg-pathcheck_0.9.1-1PIGSTY~noble_amd64.deb pigsty 0.9.1 63.1KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-pathcheck/postgresql-18-pg-pathcheck_0.9.1-1PIGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-pg-pathcheck postgresql-18-pg-pathcheck_0.9.1-1PIGSTY~noble_arm64.deb pigsty 0.9.1 62.9KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-pathcheck/postgresql-18-pg-pathcheck_0.9.1-1PIGSTY~noble_arm64.deb
@ u26.x86_64 18 postgresql-18-pg-pathcheck postgresql-18-pg-pathcheck_0.9.1-1PIGSTY~resolute_amd64.deb pigsty 0.9.1 62.2KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-pathcheck/postgresql-18-pg-pathcheck_0.9.1-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 18 postgresql-18-pg-pathcheck postgresql-18-pg-pathcheck_0.9.1-1PIGSTY~resolute_arm64.deb pigsty 0.9.1 62.3KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-pathcheck/postgresql-18-pg-pathcheck_0.9.1-1PIGSTY~resolute_arm64.deb
@ el8.x86_64 17 pg_pathcheck_17 pg_pathcheck_17-0.9.1-1PIGSTY.el8.x86_64.rpm pigsty 0.9.1 28.2KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_pathcheck_17-0.9.1-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 17 pg_pathcheck_17 pg_pathcheck_17-0.9.1-1PIGSTY.el8.aarch64.rpm pigsty 0.9.1 28.7KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_pathcheck_17-0.9.1-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 17 pg_pathcheck_17 pg_pathcheck_17-0.9.1-1PIGSTY.el9.x86_64.rpm pigsty 0.9.1 28.5KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_pathcheck_17-0.9.1-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 17 pg_pathcheck_17 pg_pathcheck_17-0.9.1-1PIGSTY.el9.aarch64.rpm pigsty 0.9.1 29.3KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_pathcheck_17-0.9.1-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 17 pg_pathcheck_17 pg_pathcheck_17-0.9.1-1PIGSTY.el10.x86_64.rpm pigsty 0.9.1 28.7KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_pathcheck_17-0.9.1-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 17 pg_pathcheck_17 pg_pathcheck_17-0.9.1-1PIGSTY.el10.aarch64.rpm pigsty 0.9.1 29.6KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_pathcheck_17-0.9.1-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 17 postgresql-17-pg-pathcheck postgresql-17-pg-pathcheck_0.9.1-1PIGSTY~bookworm_amd64.deb pigsty 0.9.1 59.5KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-pathcheck/postgresql-17-pg-pathcheck_0.9.1-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 17 postgresql-17-pg-pathcheck postgresql-17-pg-pathcheck_0.9.1-1PIGSTY~bookworm_arm64.deb pigsty 0.9.1 59.5KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-pathcheck/postgresql-17-pg-pathcheck_0.9.1-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 17 postgresql-17-pg-pathcheck postgresql-17-pg-pathcheck_0.9.1-1PIGSTY~trixie_amd64.deb pigsty 0.9.1 59.3KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-pathcheck/postgresql-17-pg-pathcheck_0.9.1-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 17 postgresql-17-pg-pathcheck postgresql-17-pg-pathcheck_0.9.1-1PIGSTY~trixie_arm64.deb pigsty 0.9.1 59.6KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-pathcheck/postgresql-17-pg-pathcheck_0.9.1-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 17 postgresql-17-pg-pathcheck postgresql-17-pg-pathcheck_0.9.1-1PIGSTY~jammy_amd64.deb pigsty 0.9.1 70.4KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-pathcheck/postgresql-17-pg-pathcheck_0.9.1-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 17 postgresql-17-pg-pathcheck postgresql-17-pg-pathcheck_0.9.1-1PIGSTY~jammy_arm64.deb pigsty 0.9.1 71.0KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-pathcheck/postgresql-17-pg-pathcheck_0.9.1-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 17 postgresql-17-pg-pathcheck postgresql-17-pg-pathcheck_0.9.1-1PIGSTY~noble_amd64.deb pigsty 0.9.1 62.4KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-pathcheck/postgresql-17-pg-pathcheck_0.9.1-1PIGSTY~noble_amd64.deb
@ u24.aarch64 17 postgresql-17-pg-pathcheck postgresql-17-pg-pathcheck_0.9.1-1PIGSTY~noble_arm64.deb pigsty 0.9.1 62.5KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-pathcheck/postgresql-17-pg-pathcheck_0.9.1-1PIGSTY~noble_arm64.deb
@ u26.x86_64 17 postgresql-17-pg-pathcheck postgresql-17-pg-pathcheck_0.9.1-1PIGSTY~resolute_amd64.deb pigsty 0.9.1 61.8KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-pathcheck/postgresql-17-pg-pathcheck_0.9.1-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 17 postgresql-17-pg-pathcheck postgresql-17-pg-pathcheck_0.9.1-1PIGSTY~resolute_arm64.deb pigsty 0.9.1 61.9KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-pathcheck/postgresql-17-pg-pathcheck_0.9.1-1PIGSTY~resolute_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `pg_pathcheck` 扩展的 RPM / DEB 包：

```bash
pig build pkg pg_pathcheck         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `pg_pathcheck` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install pg_pathcheck;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y pg_pathcheck -v 18  # PG 18
pig ext install -y pg_pathcheck -v 17  # PG 17
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y pg_pathcheck_18       # PG 18
dnf install -y pg_pathcheck_17       # PG 17
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-pg-pathcheck   # PG 18
apt install -y postgresql-17-pg-pathcheck   # PG 17
```
{{% /tab %}}
{{< /tabpane >}}


**预加载配置**：

```bash
shared_preload_libraries = 'pg_pathcheck';
```


## 用法

来源：[README](https://github.com/danolivo/pg_pathcheck/blob/main/README.md)、[0.9.1 PG17/18 release](https://github.com/danolivo/pg_pathcheck/releases/tag/v0.9.1_pg17-18)、[PGXN metadata](https://api.pgxn.org/dist/pg_pathcheck.json)、[source](https://api.pgxn.org/src/pg_pathcheck/pg_pathcheck-0.9.1/pg_pathcheck.c)

`pg_pathcheck` 是 PostgreSQL 规划器诊断模块，用于验证可达的规划器 `Path` 树，并报告疑似已释放、损坏，或被错误关系复用的指针。它只能作为预加载共享库使用：注册 planner hook 和自定义 GUC，但不创建 SQL 函数、操作符、视图或表。

### 加载模块

针对要测试的 PostgreSQL 源码线构建 `pg_pathcheck`。上游 README 记录了 PostgreSQL 17/18 与 PostgreSQL master/19devel 的独立长期分支；版本 `0.9.1` 发布于 PG17/18 分支，PGXN 元数据也描述了 0.9.1 源码包。

将模块加入 `shared_preload_libraries` 并重启 PostgreSQL：

```ini
shared_preload_libraries = 'pg_pathcheck'
```

不需要执行 `CREATE EXTENSION pg_pathcheck`。预加载后，运行普通 SQL、`EXPLAIN`、回归测试或 PostgreSQL 测试套件即可；`pg_pathcheck` 会在查询规划时检查 planner path。

单个临时集群示例：

```bash
initdb -D pgdata
echo "shared_preload_libraries = 'pg_pathcheck'" >> pgdata/postgresql.conf
pg_ctl -D pgdata -l pgdata/logfile start

psql -c 'EXPLAIN SELECT ...'
```

对于 `make check-world` 生成的 PostgreSQL 测试集群，使用 `TEMP_CONFIG`：

```bash
cat > /tmp/pg_pathcheck.conf <<'EOF'
shared_preload_libraries = 'pg_pathcheck'
EOF

TEMP_CONFIG=/tmp/pg_pathcheck.conf make check-world
```

### 配置

`pg_pathcheck.elevel` 控制检测到异常 `Path` 时使用的严重级别：

```sql
SET pg_pathcheck.elevel = 'log';
SET pg_pathcheck.elevel = 'warning';  -- default
SET pg_pathcheck.elevel = 'error';
SET pg_pathcheck.elevel = 'panic';
```

使用 `warning` 或 `log` 可在测试继续运行时扩大覆盖；使用 `error` 可在第一条异常查询处停止；仅在需要后端崩溃和 core dump 进行事后调试时使用 `panic`。

`pg_pathcheck.stage_checks` 启用额外的逐阶段检查：

```sql
SET pg_pathcheck.stage_checks = off;  -- default
SET pg_pathcheck.stage_checks = on;
```

启用后，模块会在 base-rel、join-rel 和 upper-rel hook 边界检查 pathlist，从而把发现的问题关联到更窄的规划阶段。常规运行建议保持关闭，因为额外遍历会增加规划开销，尤其是 join 较多的查询。

### 检查内容

模块会遍历 planner roots、relation pathlists、partial pathlists、cheapest path slots、parameterized paths、subquery subroots、subplan subroots，以及嵌套的 `Path` 字段，例如 join children、append children、sort subpaths、bitmap paths 和类似复合 path 成员。

它主要报告两类问题：

- Invalid `NodeTag`：指针不再像 PostgreSQL `Path` 节点。
- Parent mismatch：base 或 join relation 上看似有效的 `Path` 指向另一个 `RelOptInfo`，可能表示陈旧 path 指针存活后发生了同大小内存复用。

典型报告会包含异常 tag 或 mismatch、所在槽位（如 `pathlist`、`partial_pathlist`、`cheapest_total_path` 或嵌套 path 字段）、可解析出的 relation 名称、pathlist 细节，以及可通过 PostgreSQL debug 状态取得的查询字符串。

### 注意事项

`pg_pathcheck` 是面向 PostgreSQL 规划器开发和扩展测试的调试辅助工具，不是面向用户的 SQL 扩展。PostgreSQL cassert/debug 构建能提供更好的信号，因为已释放内存更容易识别。上游 README 提到 PG17/18 分支与 master 分支覆盖范围不同：PG17/18 会在 `create_plan` 和 `setrefs.c` 等后续规划阶段之前检查，而 master 可使用更新的 planner shutdown hook。
