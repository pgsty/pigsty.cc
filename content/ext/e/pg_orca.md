---
title: "pg_orca"
linkTitle: "pg_orca"
description: "PostgreSQL ORCA 查询优化器扩展"
weight: 2540
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/quantumiodb/pgorca">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">quantumiodb/pgorca</div>
    <div class="ext-card__desc">https://github.com/quantumiodb/pgorca</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/pg_orca-1.0.0.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">pg_orca-1.0.0.tar.gz</div>
    <div class="ext-card__desc">pg_orca-1.0.0.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pg_orca`**](/ext/e/pg_orca) | `1.0.0` | <a class="ext-badge ext-badge--cate olap" href="/ext/cate/olap">OLAP</a> | <a class="ext-badge ext-badge--license apache20" href="/ext/license#apache20">Apache-2.0</a> | <a class="ext-badge ext-badge--lang cpp" href="/ext/language#cpp">C++</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 2540  | [**`pg_orca`**](/ext/e/pg_orca) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | - |
{.ext-table}

| **相关扩展** | [`pg_hint_plan`](/ext/e/pg_hint_plan) [`hypopg`](/ext/e/hypopg) [`index_advisor`](/ext/e/index_advisor) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


> PG18 only; use session_preload_libraries=pg_orca for automatic planner hook loading.


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#olap) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.0.0` | {{< pgvers "18" >}} | `pg_orca` | - |
| [**RPM**](/ext/rpm#olap) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.0.0` | {{< pgvers "18" >}} | `pg_orca_$v` | - |
| [**DEB**](/ext/deb#olap) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `1.0.0` | {{< pgvers "18" >}} | `postgresql-$v-pg-orca` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 1.0.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| el8.aarch64 | AVAIL PIGSTY 1.0.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| el9.x86_64 | AVAIL PIGSTY 1.0.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| el9.aarch64 | AVAIL PIGSTY 1.0.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| el10.x86_64 | AVAIL PIGSTY 1.0.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| el10.aarch64 | AVAIL PIGSTY 1.0.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| d12.x86_64 | AVAIL PIGSTY 1.0.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| d12.aarch64 | AVAIL PIGSTY 1.0.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| d13.x86_64 | AVAIL PIGSTY 1.0.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| d13.aarch64 | AVAIL PIGSTY 1.0.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| u22.x86_64 | AVAIL PIGSTY 1.0.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| u22.aarch64 | AVAIL PIGSTY 1.0.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| u24.x86_64 | AVAIL PIGSTY 1.0.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| u24.aarch64 | AVAIL PIGSTY 1.0.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| u26.x86_64 | AVAIL PIGSTY 1.0.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| u26.aarch64 | AVAIL PIGSTY 1.0.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
@ el8.x86_64 18 pg_orca_18 pg_orca_18-1.0.0-1PIGSTY.el8.x86_64.rpm pigsty 1.0.0 2.2MiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_orca_18-1.0.0-1PIGSTY.el8.x86_64.rpm
@ el8.aarch64 18 pg_orca_18 pg_orca_18-1.0.0-1PIGSTY.el8.aarch64.rpm pigsty 1.0.0 2.0MiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_orca_18-1.0.0-1PIGSTY.el8.aarch64.rpm
@ el9.x86_64 18 pg_orca_18 pg_orca_18-1.0.0-1PIGSTY.el9.x86_64.rpm pigsty 1.0.0 2.2MiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_orca_18-1.0.0-1PIGSTY.el9.x86_64.rpm
@ el9.aarch64 18 pg_orca_18 pg_orca_18-1.0.0-1PIGSTY.el9.aarch64.rpm pigsty 1.0.0 2.0MiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_orca_18-1.0.0-1PIGSTY.el9.aarch64.rpm
@ el10.x86_64 18 pg_orca_18 pg_orca_18-1.0.0-1PIGSTY.el10.x86_64.rpm pigsty 1.0.0 2.0MiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_orca_18-1.0.0-1PIGSTY.el10.x86_64.rpm
@ el10.aarch64 18 pg_orca_18 pg_orca_18-1.0.0-1PIGSTY.el10.aarch64.rpm pigsty 1.0.0 1.8MiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_orca_18-1.0.0-1PIGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-pg-orca postgresql-18-pg-orca_1.0.0-1PIGSTY~bookworm_amd64.deb pigsty 1.0.0 1.7MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-orca/postgresql-18-pg-orca_1.0.0-1PIGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-pg-orca postgresql-18-pg-orca_1.0.0-1PIGSTY~bookworm_arm64.deb pigsty 1.0.0 1.5MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-orca/postgresql-18-pg-orca_1.0.0-1PIGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-pg-orca postgresql-18-pg-orca_1.0.0-1PIGSTY~trixie_amd64.deb pigsty 1.0.0 1.7MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-orca/postgresql-18-pg-orca_1.0.0-1PIGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-pg-orca postgresql-18-pg-orca_1.0.0-1PIGSTY~trixie_arm64.deb pigsty 1.0.0 1.5MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-orca/postgresql-18-pg-orca_1.0.0-1PIGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-pg-orca postgresql-18-pg-orca_1.0.0-1PIGSTY~jammy_amd64.deb pigsty 1.0.0 1.7MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-orca/postgresql-18-pg-orca_1.0.0-1PIGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-pg-orca postgresql-18-pg-orca_1.0.0-1PIGSTY~jammy_arm64.deb pigsty 1.0.0 1.6MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-orca/postgresql-18-pg-orca_1.0.0-1PIGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-pg-orca postgresql-18-pg-orca_1.0.0-1PIGSTY~noble_amd64.deb pigsty 1.0.0 1.7MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-orca/postgresql-18-pg-orca_1.0.0-1PIGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-pg-orca postgresql-18-pg-orca_1.0.0-1PIGSTY~noble_arm64.deb pigsty 1.0.0 1.6MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-orca/postgresql-18-pg-orca_1.0.0-1PIGSTY~noble_arm64.deb
@ u26.x86_64 18 postgresql-18-pg-orca postgresql-18-pg-orca_1.0.0-1PIGSTY~resolute_amd64.deb pigsty 1.0.0 1.7MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-orca/postgresql-18-pg-orca_1.0.0-1PIGSTY~resolute_amd64.deb
@ u26.aarch64 18 postgresql-18-pg-orca postgresql-18-pg-orca_1.0.0-1PIGSTY~resolute_arm64.deb pigsty 1.0.0 1.6MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-orca/postgresql-18-pg-orca_1.0.0-1PIGSTY~resolute_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `pg_orca` 扩展的 RPM / DEB 包：

```bash
pig build pkg pg_orca         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `pg_orca` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install pg_orca;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y pg_orca -v 18  # PG 18
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y pg_orca_18       # PG 18
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-pg-orca   # PG 18
```
{{% /tab %}}
{{< /tabpane >}}


**预加载配置**：

```bash
shared_preload_libraries = 'pg_orca';
```


**创建扩展**：

```sql
CREATE EXTENSION pg_orca;
```




## 用法

- 来源：[pgorca README](https://github.com/quantumiodb/pgorca)，[entrypoint/GUC source](https://github.com/quantumiodb/pgorca/blob/main/pg_orca.cpp)，[control file](https://github.com/quantumiodb/pgorca/blob/main/pg_orca.control)

`pg_orca` 将 Greenplum/Apache Cloudberry 体系中的 ORCA 代价优化器接入标准 PostgreSQL 18 服务器。上游 README 将该项目描述为仅支持 PostgreSQL 18，本地包元数据也标记为仅适用于 PG18。

### 在会话中启用 ORCA

`CREATE EXTENSION` 会在当前会话中加载该库，因此 `pg_orca.*` GUC 与 planner hook 会立即可用：

```sql
CREATE EXTENSION pg_orca;

SET pg_orca.enable_orca = on;

EXPLAIN
SELECT *
FROM orders
WHERE customer_id = 42
  AND created_at >= now() - interval '30 days';
```

如果 ORCA 无法处理某条查询，README 说明它会自动回退到标准 PostgreSQL planner。验证工作负载覆盖情况时，可以打开回退日志：

```sql
SET pg_orca.trace_fallback = on;
```

### 为新连接预加载

为了让后续会话自动加载 planner hook，上游建议使用 `session_preload_libraries`，而不是 `shared_preload_libraries`：

```sql
ALTER DATABASE mydb SET session_preload_libraries = 'pg_orca';
ALTER DATABASE mydb SET pg_orca.enable_orca = on;
```

已有会话不会受影响，必须重新连接后才会生效。如果已经配置了其他 session preload library，需要显式写出所有值：

```sql
ALTER DATABASE mydb
SET session_preload_libraries = 'pg_orca,pg_stat_statements';
```

按角色和按集群设置也有效：

```sql
ALTER ROLE bench SET session_preload_libraries = 'pg_orca';

ALTER SYSTEM SET session_preload_libraries = 'pg_orca';
SELECT pg_reload_conf();
```

### 调优与诊断

README 记录了以下主要 GUC：

- `pg_orca.enable_orca`：启用 ORCA；默认 `off`。
- `pg_orca.trace_fallback`：记录回退到标准 planner 的情况；默认 `off`。
- `optimizer_segments`：用于代价估算的 segment 数量；默认 `1`。
- `optimizer_sort_factor`：排序代价缩放因子；默认 `1.0`。
- `optimizer_metadata_caching`：缓存关系元数据；默认 `on`。
- `optimizer_mdcache_size`：元数据缓存大小，单位 KB；默认 `16384`。
- `optimizer_search_strategy_path`：可选的自定义搜索策略 XML 路径。

入口源代码还定义了额外的 ORCA 调优和调试 GUC，例如 `optimizer_join_order`、`pg_orca.join_order_dynamic_threshold`、`pg_orca.cost_model` 和 `optimizer_print_*`。这些更适合作为工作负载或调试旋钮；在把它们写入持久化数据库设置前，应先验证实际执行计划。

### 注意事项

- 仅支持 PostgreSQL 18。
- 新会话自动加载时使用 `session_preload_libraries = 'pg_orca'`。
- 加载后 ORCA 默认仍是禁用状态；需要设置 `pg_orca.enable_orca = on`。
- 对不支持的查询回退到 PostgreSQL planner 是预期行为；检查覆盖范围时可启用 `pg_orca.trace_fallback`。
