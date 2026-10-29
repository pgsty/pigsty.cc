---
title: "pg_agent_gate"
linkTitle: "pg_agent_gate"
description: "为 Agent 数据库角色提供 SQL 提议、校验、受控执行与人工审批。"
weight: 7470
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/Manuelreyesbravo/pg_agent_gate">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">Manuelreyesbravo/pg_agent_gate</div>
    <div class="ext-card__desc">https://github.com/Manuelreyesbravo/pg_agent_gate</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/pg_agent_gate-0.3.0.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">pg_agent_gate-0.3.0.tar.gz</div>
    <div class="ext-card__desc">pg_agent_gate-0.3.0.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pg_agent_gate`**](/ext/e/pg_agent_gate) | `0.3.0` | <a class="ext-badge ext-badge--cate sec" href="/ext/cate/sec">SEC</a> | <a class="ext-badge ext-badge--license apache20" href="/ext/license#apache20">Apache-2.0</a> | <a class="ext-badge ext-badge--lang rust" href="/ext/language#rust">Rust</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 7470  | [**`pg_agent_gate`**](/ext/e/pg_agent_gate) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | `agent_gate` |
{.ext-table}

| **相关扩展** | [`pg_living_assertions`](/ext/e/pg_living_assertions) [`pg_policy`](/ext/e/pg_policy) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


> Upstream PG18-19; packages PG18. Preload before the first agent statement; READ COMMITTED required. Human approval preserves commit guards; pg_living_assertions optional. Build pgrx 0.19.3, upstream 0.19.2. Trusted code and external effects remain outside the sandbox.


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#sec) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.3.0` | {{< pgvers "18" >}} | `pg_agent_gate` | - |
| [**RPM**](/ext/rpm#sec) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.3.0` | {{< pgvers "18" >}} | `pg_agent_gate_$v` | - |
| [**DEB**](/ext/deb#sec) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.3.0` | {{< pgvers "18" >}} | `postgresql-$v-pg-agent-gate` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 0.3.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| el8.aarch64 | AVAIL PIGSTY 0.3.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| el9.x86_64 | AVAIL PIGSTY 0.3.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| el9.aarch64 | AVAIL PIGSTY 0.3.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| el10.x86_64 | AVAIL PIGSTY 0.3.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| el10.aarch64 | AVAIL PIGSTY 0.3.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| d12.x86_64 | AVAIL PIGSTY 0.3.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| d12.aarch64 | AVAIL PIGSTY 0.3.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| d13.x86_64 | AVAIL PIGSTY 0.3.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| d13.aarch64 | AVAIL PIGSTY 0.3.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| u22.x86_64 | AVAIL PIGSTY 0.3.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| u22.aarch64 | AVAIL PIGSTY 0.3.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| u24.x86_64 | AVAIL PIGSTY 0.3.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| u24.aarch64 | AVAIL PIGSTY 0.3.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| u26.x86_64 | AVAIL PIGSTY 0.3.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| u26.aarch64 | AVAIL PIGSTY 0.3.0 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
@ el8.x86_64 18 pg_agent_gate_18 pg_agent_gate_18-0.3.0-1PGSTY.el8.x86_64.rpm pigsty 0.3.0 524.4KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_agent_gate_18-0.3.0-1PGSTY.el8.x86_64.rpm
@ el8.aarch64 18 pg_agent_gate_18 pg_agent_gate_18-0.3.0-1PGSTY.el8.aarch64.rpm pigsty 0.3.0 457.4KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_agent_gate_18-0.3.0-1PGSTY.el8.aarch64.rpm
@ el9.x86_64 18 pg_agent_gate_18 pg_agent_gate_18-0.3.0-1PGSTY.el9.x86_64.rpm pigsty 0.3.0 526.7KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_agent_gate_18-0.3.0-1PGSTY.el9.x86_64.rpm
@ el9.aarch64 18 pg_agent_gate_18 pg_agent_gate_18-0.3.0-1PGSTY.el9.aarch64.rpm pigsty 0.3.0 485.6KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_agent_gate_18-0.3.0-1PGSTY.el9.aarch64.rpm
@ el10.x86_64 18 pg_agent_gate_18 pg_agent_gate_18-0.3.0-1PGSTY.el10.x86_64.rpm pigsty 0.3.0 526.6KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_agent_gate_18-0.3.0-1PGSTY.el10.x86_64.rpm
@ el10.aarch64 18 pg_agent_gate_18 pg_agent_gate_18-0.3.0-1PGSTY.el10.aarch64.rpm pigsty 0.3.0 462.1KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_agent_gate_18-0.3.0-1PGSTY.el10.aarch64.rpm
@ d12.x86_64 18 postgresql-18-pg-agent-gate postgresql-18-pg-agent-gate_0.3.0-1PGSTY~bookworm_amd64.deb pigsty 0.3.0 461.1KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-agent-gate/postgresql-18-pg-agent-gate_0.3.0-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 18 postgresql-18-pg-agent-gate postgresql-18-pg-agent-gate_0.3.0-1PGSTY~bookworm_arm64.deb pigsty 0.3.0 397.0KiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/p/pg-agent-gate/postgresql-18-pg-agent-gate_0.3.0-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 18 postgresql-18-pg-agent-gate postgresql-18-pg-agent-gate_0.3.0-1PGSTY~trixie_amd64.deb pigsty 0.3.0 460.9KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-agent-gate/postgresql-18-pg-agent-gate_0.3.0-1PGSTY~trixie_amd64.deb
@ d13.aarch64 18 postgresql-18-pg-agent-gate postgresql-18-pg-agent-gate_0.3.0-1PGSTY~trixie_arm64.deb pigsty 0.3.0 397.3KiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/p/pg-agent-gate/postgresql-18-pg-agent-gate_0.3.0-1PGSTY~trixie_arm64.deb
@ u22.x86_64 18 postgresql-18-pg-agent-gate postgresql-18-pg-agent-gate_0.3.0-1PGSTY~jammy_amd64.deb pigsty 0.3.0 500.3KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-agent-gate/postgresql-18-pg-agent-gate_0.3.0-1PGSTY~jammy_amd64.deb
@ u22.aarch64 18 postgresql-18-pg-agent-gate postgresql-18-pg-agent-gate_0.3.0-1PGSTY~jammy_arm64.deb pigsty 0.3.0 459.3KiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/p/pg-agent-gate/postgresql-18-pg-agent-gate_0.3.0-1PGSTY~jammy_arm64.deb
@ u24.x86_64 18 postgresql-18-pg-agent-gate postgresql-18-pg-agent-gate_0.3.0-1PGSTY~noble_amd64.deb pigsty 0.3.0 494.7KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-agent-gate/postgresql-18-pg-agent-gate_0.3.0-1PGSTY~noble_amd64.deb
@ u24.aarch64 18 postgresql-18-pg-agent-gate postgresql-18-pg-agent-gate_0.3.0-1PGSTY~noble_arm64.deb pigsty 0.3.0 451.4KiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/p/pg-agent-gate/postgresql-18-pg-agent-gate_0.3.0-1PGSTY~noble_arm64.deb
@ u26.x86_64 18 postgresql-18-pg-agent-gate postgresql-18-pg-agent-gate_0.3.0-1PGSTY~resolute_amd64.deb pigsty 0.3.0 493.2KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-agent-gate/postgresql-18-pg-agent-gate_0.3.0-1PGSTY~resolute_amd64.deb
@ u26.aarch64 18 postgresql-18-pg-agent-gate postgresql-18-pg-agent-gate_0.3.0-1PGSTY~resolute_arm64.deb pigsty 0.3.0 451.0KiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/p/pg-agent-gate/postgresql-18-pg-agent-gate_0.3.0-1PGSTY~resolute_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `pg_agent_gate` 扩展的 RPM / DEB 包：

```bash
pig build pkg pg_agent_gate         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `pg_agent_gate` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](https://pig.pgsty.com/zh) 或者是 `apt/yum/dnf` 安装扩展：

```bash {tab="安装" group="extension-install" value="install"}
pig install pg_agent_gate;          # 当前活跃 PG 版本安装
```

```bash {tab="pig" value="pig"}
pig ext install -y pg_agent_gate -v 18  # PG 18
```

```bash {tab="dnf" value="dnf"}
dnf install -y pg_agent_gate_18       # PG 18
```

```bash {tab="apt" value="apt"}
apt install -y postgresql-18-pg-agent-gate   # PG 18
```


**预加载配置**：

```bash
shared_preload_libraries = 'pg_agent_gate';
```


**创建扩展**：

```sql
CREATE EXTENSION pg_agent_gate;
```

## 用法

来源：

- [README](https://github.com/Manuelreyesbravo/pg_agent_gate/blob/v0.3.0/README.md)
- [Control](https://github.com/Manuelreyesbravo/pg_agent_gate/blob/v0.3.0/pg_agent_gate.control)
- [CHANGELOG](https://github.com/Manuelreyesbravo/pg_agent_gate/blob/v0.3.0/CHANGELOG.md)
- [SQL upgrade](https://github.com/Manuelreyesbravo/pg_agent_gate/blob/v0.3.0/sql/pg_agent_gate--0.2.15--0.3.0.sql)

`pg_agent_gate` 0.3.0 在 PostgreSQL 18/19 上通过提议、检查、试运行和受控执行处理已注册 Agent 角色，并可要求提交前经过人工审批。必须在第一条 Agent 语句之前加载动态库，可采用共享预加载，或配置角色会话预加载后重新连接。

### 核心用法

```sql
CREATE EXTENSION pg_agent_gate;
```

```sql
SELECT agent_gate.whoami();
SELECT agent_gate.discover('customers');
SELECT agent_gate.propose('SELECT 1', 'Check connectivity');
```

### 运行边界

由超级用户安装，为普通角色登记有限的表权限、行数限制与 DDL 允许列表。API 包括 `agent_gate.whoami`、`agent_gate.discover`、`agent_gate.propose`、`agent_gate.dry_run`、`agent_gate.commit` 和 `agent_gate.acts`。这些操作要求 READ COMMITTED，试运行与提交前会再次核对提议时的会话设置，调用已知状态修改内置函数的读取请求会被拒绝。重新登记同名角色不会继承旧提议。`agent_gate.max_proposal_bytes` 与 `agent_gate.max_intent_bytes` 限制输入大小。已有重复提交的提议可能阻止升级，需要检查处理。可选绑定检查使用 `pg_living_assertions`。回滚无法撤销所有序列或外部副作用，已有特权代码仍须可信。服务器日志可能包含 SQL 字面量；尝试记录受外层事务影响，默认快速持久化模式可能在崩溃时丢失近期记录。

### 人工审批

调用 `agent_gate.register_agent` 时设置 `p_requires_approval`，即可要求该 Agent 的提议经过审批。`agent_gate_approver` 的成员通过 `agent_gate.approve` 记录同意后，仍由 Agent 提交自己的提议。审批本身不执行 SQL，也不绕过行数限制、断言或提交时检查。Agent 不能自行审批，`propose_and_commit` 也不能绕过审批要求。

固定模式 `agent_gate_internal` 保存提议、执行和审批记录，Agent 不直接访问这些表。执行记录的 `approved_by` 字段保存审批者身份。

### 动态库与 SQL 升级

动态库保留了 0.2.15 对可执行函数的参数转换和单分号崩溃的防护。应替换动态库，重启或重连所有预加载它的进程，再通过上游 SQL 升级脚本逐库升级到 0.3.0。0.3.0 迁移新增审批对象，不是空操作。DDL 权限属于模式修改能力，行数限制无法约束它。
