---
title: "pg_trickle"
linkTitle: "pg_trickle"
description: "为 PostgreSQL 18 提供流式表与差分视图维护"
weight: 2860
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/trickle-labs/pg-trickle">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">trickle-labs/pg-trickle</div>
    <div class="ext-card__desc">https://github.com/trickle-labs/pg-trickle</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/pg_trickle-0.108.1.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">pg_trickle-0.108.1.tar.gz</div>
    <div class="ext-card__desc">pg_trickle-0.108.1.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pg_trickle`**](/ext/e/pg_trickle) | `0.108.1` | <a class="ext-badge ext-badge--cate feat" href="/ext/cate/feat">FEAT</a> | <a class="ext-badge ext-badge--license apache20" href="/ext/license#apache20">Apache-2.0</a> | <a class="ext-badge ext-badge--lang rust" href="/ext/language#rust">Rust</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 2860  | [**`pg_trickle`**](/ext/e/pg_trickle) | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | `pgtrickle` |
{.ext-table}

| **相关扩展** | [`pg_ivm`](/ext/e/pg_ivm) [`pg_incremental`](/ext/e/pg_incremental) [`timescaledb`](/ext/e/timescaledb) [`pg_duckdb`](/ext/e/pg_duckdb) [`pg_partman`](/ext/e/pg_partman) [`pg_ttl_index`](/ext/e/pg_ttl_index) [`duckdb_fdw`](/ext/e/duckdb_fdw) [`pg_lake`](/ext/e/pg_lake) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


> PG18 only; requires preload and ships pg_trickle_dump. Follow the packaged upgrade guide.


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#feat) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.108.1` | {{< pgvers "18" >}} | `pg_trickle` | - |
| [**RPM**](/ext/rpm#feat) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.108.1` | {{< pgvers "18" >}} | `pg_trickle_$v` | - |
| [**DEB**](/ext/deb#feat) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.108.1` | {{< pgvers "18" >}} | `postgresql-$v-pg-trickle` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 0.108.1 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| el8.aarch64 | AVAIL PIGSTY 0.108.1 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| el9.x86_64 | AVAIL PIGSTY 0.108.1 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| el9.aarch64 | AVAIL PIGSTY 0.108.1 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| el10.x86_64 | AVAIL PIGSTY 0.108.1 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| el10.aarch64 | AVAIL PIGSTY 0.108.1 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| d12.x86_64 | AVAIL PIGSTY 0.108.1 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| d12.aarch64 | AVAIL PIGSTY 0.108.1 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| d13.x86_64 | AVAIL PIGSTY 0.108.1 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| d13.aarch64 | AVAIL PIGSTY 0.108.1 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| u22.x86_64 | AVAIL PIGSTY 0.108.1 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| u22.aarch64 | AVAIL PIGSTY 0.108.1 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| u24.x86_64 | AVAIL PIGSTY 0.108.1 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| u24.aarch64 | AVAIL PIGSTY 0.108.1 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| u26.x86_64 | AVAIL PIGSTY 0.108.1 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| u26.aarch64 | AVAIL PIGSTY 0.108.1 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
@ el8.x86_64 18 pg_trickle_18 pg_trickle_18-0.108.1-1PGSTY.el8.x86_64.rpm pigsty 0.108.1 6.5MiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_trickle_18-0.108.1-1PGSTY.el8.x86_64.rpm
@ el8.aarch64 18 pg_trickle_18 pg_trickle_18-0.108.1-1PGSTY.el8.aarch64.rpm pigsty 0.108.1 5.4MiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_trickle_18-0.108.1-1PGSTY.el8.aarch64.rpm
@ el9.x86_64 18 pg_trickle_18 pg_trickle_18-0.108.1-1PGSTY.el9.x86_64.rpm pigsty 0.108.1 6.4MiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_trickle_18-0.108.1-1PGSTY.el9.x86_64.rpm
@ el9.aarch64 18 pg_trickle_18 pg_trickle_18-0.108.1-1PGSTY.el9.aarch64.rpm pigsty 0.108.1 5.6MiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_trickle_18-0.108.1-1PGSTY.el9.aarch64.rpm
@ el10.x86_64 18 pg_trickle_18 pg_trickle_18-0.108.1-1PGSTY.el10.x86_64.rpm pigsty 0.108.1 6.4MiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_trickle_18-0.108.1-1PGSTY.el10.x86_64.rpm
@ el10.aarch64 18 pg_trickle_18 pg_trickle_18-0.108.1-1PGSTY.el10.aarch64.rpm pigsty 0.108.1 5.6MiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_trickle_18-0.108.1-1PGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-pg-trickle postgresql-18-pg-trickle_0.108.1-1PGSTY~bookworm_amd64.deb pigsty 0.108.1 5.6MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-trickle/postgresql-18-pg-trickle_0.108.1-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-pg-trickle postgresql-18-pg-trickle_0.108.1-1PGSTY~bookworm_arm64.deb pigsty 0.108.1 4.6MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-trickle/postgresql-18-pg-trickle_0.108.1-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-pg-trickle postgresql-18-pg-trickle_0.108.1-1PGSTY~trixie_amd64.deb pigsty 0.108.1 5.6MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-trickle/postgresql-18-pg-trickle_0.108.1-1PGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-pg-trickle postgresql-18-pg-trickle_0.108.1-1PGSTY~trixie_arm64.deb pigsty 0.108.1 4.6MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-trickle/postgresql-18-pg-trickle_0.108.1-1PGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-pg-trickle postgresql-18-pg-trickle_0.108.1-1PGSTY~jammy_amd64.deb pigsty 0.108.1 6.1MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-trickle/postgresql-18-pg-trickle_0.108.1-1PGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-pg-trickle postgresql-18-pg-trickle_0.108.1-1PGSTY~jammy_arm64.deb pigsty 0.108.1 5.4MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-trickle/postgresql-18-pg-trickle_0.108.1-1PGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-pg-trickle postgresql-18-pg-trickle_0.108.1-1PGSTY~noble_amd64.deb pigsty 0.108.1 6.1MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-trickle/postgresql-18-pg-trickle_0.108.1-1PGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-pg-trickle postgresql-18-pg-trickle_0.108.1-1PGSTY~noble_arm64.deb pigsty 0.108.1 5.4MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-trickle/postgresql-18-pg-trickle_0.108.1-1PGSTY~noble_arm64.deb
@ u26.x86_64 18 postgresql-18-pg-trickle postgresql-18-pg-trickle_0.108.1-1PGSTY~resolute_amd64.deb pigsty 0.108.1 6.1MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-trickle/postgresql-18-pg-trickle_0.108.1-1PGSTY~resolute_amd64.deb
@ u26.aarch64 18 postgresql-18-pg-trickle postgresql-18-pg-trickle_0.108.1-1PGSTY~resolute_arm64.deb pigsty 0.108.1 5.3MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-trickle/postgresql-18-pg-trickle_0.108.1-1PGSTY~resolute_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `pg_trickle` 扩展的 RPM / DEB 包：

```bash
pig build pkg pg_trickle         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `pg_trickle` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](https://pig.pgsty.com/zh) 或者是 `apt/yum/dnf` 安装扩展：

```bash {tab="安装" group="extension-install" value="install"}
pig install pg_trickle;          # 当前活跃 PG 版本安装
```

```bash {tab="pig" value="pig"}
pig ext install -y pg_trickle -v 18  # PG 18
```

```bash {tab="dnf" value="dnf"}
dnf install -y pg_trickle_18       # PG 18
```

```bash {tab="apt" value="apt"}
apt install -y postgresql-18-pg-trickle   # PG 18
```


**预加载配置**：

```bash
shared_preload_libraries = 'pg_trickle';
```


**创建扩展**：

```sql
CREATE EXTENSION pg_trickle;
```

## 用法

来源：

- [sql/pg_trickle--0.108.0--0.108.1.sql](https://github.com/trickle-labs/pg-trickle/blob/v0.108.1/sql/pg_trickle--0.108.0--0.108.1.sql)
- [Version 0.108.1 README](https://github.com/trickle-labs/pg-trickle/blob/v0.108.1/README.md)
- [SQL reference](https://github.com/trickle-labs/pg-trickle/blob/v0.108.1/docs/SQL_REFERENCE.md)
- [Configuration](https://github.com/trickle-labs/pg-trickle/blob/v0.108.1/docs/CONFIGURATION.md)
- [GUC catalog](https://github.com/trickle-labs/pg-trickle/blob/v0.108.1/docs/GUC_CATALOG.md)
- [Upgrade guide](https://github.com/trickle-labs/pg-trickle/blob/v0.108.1/docs/UPGRADING.md)
- [Control file](https://github.com/trickle-labs/pg-trickle/blob/v0.108.1/pg_trickle.control)
- [0.107.0 to 0.108.0 migration](https://github.com/trickle-labs/pg-trickle/blob/v0.108.1/sql/pg_trickle--0.107.0--0.108.0.sql)

`pg_trickle` 0.108.1 在 PostgreSQL 18 上维护流式表：由 SQL 查询定义、可以常规查询的数据表；在支持时增量刷新，也可全量重算。流式表可依赖其他流式表，形成依赖图，同时支持在同一事务中维护结果。

### 启用扩展

将 `pg_trickle` 追加到 `shared_preload_libraries` 后重启 PostgreSQL，再以超级用户身份安装。应根据部署规模配置后台工作进程池；上游示例使用八个工作进程。

```ini
shared_preload_libraries = 'pg_trickle'
max_worker_processes = 8
```

```sql
CREATE EXTENSION pg_trickle;
```

`pg_trickle.cdc_mode` 默认为 `trigger`，事务内的变更捕获不需要逻辑 WAL 或复制槽。显式选择 `auto` 时先使用触发器，符合条件的源表随后可切换到带接收确认的 WAL 捕获。显式选择 `wal` 后，若准入检查或逻辑解码前置条件不满足，也会回退到触发器。不同方式的写入开销与运维要求不同。

### 创建并刷新流式表

```sql
CREATE TABLE orders (id bigint PRIMARY KEY, region text, amount numeric);
SELECT pgtrickle.create_stream_table(
    name => 'regional_totals',
    query => 'SELECT region, SUM(amount) AS total, COUNT(*) AS cnt FROM orders GROUP BY region',
    schedule => '30s',
    refresh_mode => 'AUTO'
);
INSERT INTO orders VALUES (1, 'east', 10);
SELECT pgtrickle.refresh_stream_table('regional_totals');
SELECT * FROM regional_totals;
```

`initialize` 默认为 true，因此创建时会填充结果。`schedule` 接受时间间隔、`@hourly` 等 cron 表达式，或默认的 `calculated`，从下游依赖者继承刷新周期。`AUTO` 在可行时选择差分维护，也可回退为全量刷新。`DIFFERENTIAL` 会拒绝无法增量维护的查询；`FULL` 会清空并重新加载结果。

`IMMEDIATE` 在基表写入事务内使用语句级触发器，不使用 WAL 捕获，并拒绝实际生效的显式 WAL 请求。连接、聚合、子查询、递归查询等应遵循文档中的查询准入规则；支持某类语法不代表所有 SQL 表达式都能进行差分维护。

### 生命周期与监控

`pgtrickle.alter_stream_table` 修改定义或刷新策略，`pgtrickle.drop_stream_table` 删除托管表。恢复或管理员 DDL 导致捕获设施缺失时，`pgtrickle.repair_stream_table` 可修复设施并重置维护状态。应使用生命周期 API，不要直接写入托管流式表或在其上使用外键。

```sql
SELECT * FROM pgtrickle.pgt_status();
SELECT * FROM pgtrickle.health_check();
SELECT * FROM pgtrickle.dependency_tree();
SELECT * FROM pgtrickle.explain_st('regional_totals');
```

生命周期函数要求显式执行授权并检查所有权；全局管理操作仅限扩展所有者或超级用户。接受任意 SQL 的辅助函数保留调用者权限。捕获触发器会增加源表写入工作量，刷新失败可能导致变更缓冲积压，因此应监控健康状态与存储，不应将刷新周期视为严格的新鲜度保证。

### 外部协调与结果增量

`orchestration_mode` 可选择 `MANAGED` 调度或 `EXTERNAL` 协调，外部协调不能与即时维护同时使用。`pgtrickle.integration_capabilities` 公布可用接口契约；0.108.0 提供 Graph V1 的 1.2 版和 Delta V1 的 1.1 版。

`pgtrickle.output_delta_consumer_status` 报告消费者状态，`pgtrickle.validate_output_delta_consumer` 检查消费者能否恢复。`pgtrickle.request_output_delta_resnapshot`、`pgtrickle.begin_output_delta_resnapshot` 和 `pgtrickle.ack_output_delta_resnapshot` 管理基线重建。重新获取快照时，会校验数据库实例身份、输出契约摘要和行标识版本。推进外部投递前应遵循 SQL 参考中的准确签名与确认协议。

### 升级至 0.108.0

先安装新的库和扩展文件，再执行随版本提供的迁移：

```sql
ALTER EXTENSION pg_trickle UPDATE TO '0.108.1';
SELECT * FROM pgtrickle.output_delta_consumer_status();
```

升级保留消费者、游标、批次和类型化载荷，并新增快照重建校验。0.106.1 可通过随包提供的 0.107.0 迁移继续升级。恢复投递前应逐一验证消费者；出现 `INVALIDATED` 或 `RESNAPSHOT_REQUIRED` 时，必须创建并确认新的基线。0.105.2 及以前的部分版本存在文档列明的特定查询形态差分结果错误；升级不会自动修复已经物化的错误行。适用时应按升级指南进行比较和修复。

### 0.108.1 版本变化

本补丁修复上游 FULL 刷新或截断后下游 `IMMEDIATE` 表未及时更新的问题，支持恢复缺失的变更缓冲区，并修复源模式变更后的意外挂起及标量子查询增量刷新。同时增加 PostgreSQL 18.6 支持。安装匹配文件后执行 `ALTER EXTENSION pg_trickle UPDATE TO '0.108.1'`，并检查依赖流表结果及变更捕获状态。
