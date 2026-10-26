---
title: "pg_lease"
linkTitle: "pg_lease"
description: "提供 TTL 过期与单调递增隔离令牌的 SQL 租约"
weight: 4145
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://pgxn.org/dist/pg_lease/0.1.0/">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">https://pgxn.org/dist/pg_lease/0.1.0/</div>
    <div class="ext-card__desc">https://pgxn.org/dist/pg_lease/0.1.0/</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/pg_lease-0.1.0.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">pg_lease-0.1.0.tar.gz</div>
    <div class="ext-card__desc">pg_lease-0.1.0.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pg_lease`**](/ext/e/pg_lease) | `0.1.0` | <a class="ext-badge ext-badge--cate util" href="/ext/cate/util">UTIL</a> | <a class="ext-badge ext-badge--license mit" href="/ext/license#mit">MIT</a> | <a class="ext-badge ext-badge--lang sql" href="/ext/language#sql">SQL</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 4145  | [**`pg_lease`**](/ext/e/pg_lease) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | `lease` |
{.ext-table}

| **相关扩展** | [`pglock`](/ext/e/pglock) [`pg_retry`](/ext/e/pg_retry) [`pgmq`](/ext/e/pgmq) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


> PGXN testing release. Requires PG14+; upstream tests PG14/15, local EL9 aarch64 regression and isolation tests pass PG14-18. No failover fencing guarantee; owner strings are application identities. PGXN-listed GitHub repository azghr/pg-primitive returned 404 on 2026-10-23; PGXN hosts the verified source.


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#util) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.1.0` | {{< pgvers "14,15,16,17,18" >}} | `pg_lease` | - |
| [**RPM**](/ext/rpm#util) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.1.0` | {{< pgvers "14,15,16,17,18" >}} | `pg_lease_$v` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 |
| el8.aarch64 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 |
| el9.x86_64 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 |
| el9.aarch64 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 |
| el10.x86_64 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 |
| el10.aarch64 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 | AVAIL PIGSTY 0.1.0 1 |
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
@ el8.x86_64 18 pg_lease_18 pg_lease_18-0.1.0-1PGSTY.el8.noarch.rpm pigsty 0.1.0 23.0KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_lease_18-0.1.0-1PGSTY.el8.noarch.rpm
@ el8.aarch64 18 pg_lease_18 pg_lease_18-0.1.0-1PGSTY.el8.noarch.rpm pigsty 0.1.0 23.0KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_lease_18-0.1.0-1PGSTY.el8.noarch.rpm
@ el9.x86_64 18 pg_lease_18 pg_lease_18-0.1.0-1PGSTY.el9.noarch.rpm pigsty 0.1.0 22.8KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_lease_18-0.1.0-1PGSTY.el9.noarch.rpm
@ el9.aarch64 18 pg_lease_18 pg_lease_18-0.1.0-1PGSTY.el9.noarch.rpm pigsty 0.1.0 22.8KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_lease_18-0.1.0-1PGSTY.el9.noarch.rpm
@ el10.x86_64 18 pg_lease_18 pg_lease_18-0.1.0-1PGSTY.el10.noarch.rpm pigsty 0.1.0 22.9KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_lease_18-0.1.0-1PGSTY.el10.noarch.rpm
@ el10.aarch64 18 pg_lease_18 pg_lease_18-0.1.0-1PGSTY.el10.noarch.rpm pigsty 0.1.0 22.9KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_lease_18-0.1.0-1PGSTY.el10.noarch.rpm
@ el8.x86_64 17 pg_lease_17 pg_lease_17-0.1.0-1PGSTY.el8.noarch.rpm pigsty 0.1.0 23.0KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_lease_17-0.1.0-1PGSTY.el8.noarch.rpm
@ el8.aarch64 17 pg_lease_17 pg_lease_17-0.1.0-1PGSTY.el8.noarch.rpm pigsty 0.1.0 23.0KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_lease_17-0.1.0-1PGSTY.el8.noarch.rpm
@ el9.x86_64 17 pg_lease_17 pg_lease_17-0.1.0-1PGSTY.el9.noarch.rpm pigsty 0.1.0 22.8KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_lease_17-0.1.0-1PGSTY.el9.noarch.rpm
@ el9.aarch64 17 pg_lease_17 pg_lease_17-0.1.0-1PGSTY.el9.noarch.rpm pigsty 0.1.0 22.8KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_lease_17-0.1.0-1PGSTY.el9.noarch.rpm
@ el10.x86_64 17 pg_lease_17 pg_lease_17-0.1.0-1PGSTY.el10.noarch.rpm pigsty 0.1.0 22.9KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_lease_17-0.1.0-1PGSTY.el10.noarch.rpm
@ el10.aarch64 17 pg_lease_17 pg_lease_17-0.1.0-1PGSTY.el10.noarch.rpm pigsty 0.1.0 22.9KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_lease_17-0.1.0-1PGSTY.el10.noarch.rpm
@ el8.x86_64 16 pg_lease_16 pg_lease_16-0.1.0-1PGSTY.el8.noarch.rpm pigsty 0.1.0 23.0KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_lease_16-0.1.0-1PGSTY.el8.noarch.rpm
@ el8.aarch64 16 pg_lease_16 pg_lease_16-0.1.0-1PGSTY.el8.noarch.rpm pigsty 0.1.0 23.0KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_lease_16-0.1.0-1PGSTY.el8.noarch.rpm
@ el9.x86_64 16 pg_lease_16 pg_lease_16-0.1.0-1PGSTY.el9.noarch.rpm pigsty 0.1.0 22.8KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_lease_16-0.1.0-1PGSTY.el9.noarch.rpm
@ el9.aarch64 16 pg_lease_16 pg_lease_16-0.1.0-1PGSTY.el9.noarch.rpm pigsty 0.1.0 22.8KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_lease_16-0.1.0-1PGSTY.el9.noarch.rpm
@ el10.x86_64 16 pg_lease_16 pg_lease_16-0.1.0-1PGSTY.el10.noarch.rpm pigsty 0.1.0 22.9KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_lease_16-0.1.0-1PGSTY.el10.noarch.rpm
@ el10.aarch64 16 pg_lease_16 pg_lease_16-0.1.0-1PGSTY.el10.noarch.rpm pigsty 0.1.0 22.9KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_lease_16-0.1.0-1PGSTY.el10.noarch.rpm
@ el8.x86_64 15 pg_lease_15 pg_lease_15-0.1.0-1PGSTY.el8.noarch.rpm pigsty 0.1.0 23.0KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_lease_15-0.1.0-1PGSTY.el8.noarch.rpm
@ el8.aarch64 15 pg_lease_15 pg_lease_15-0.1.0-1PGSTY.el8.noarch.rpm pigsty 0.1.0 23.0KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_lease_15-0.1.0-1PGSTY.el8.noarch.rpm
@ el9.x86_64 15 pg_lease_15 pg_lease_15-0.1.0-1PGSTY.el9.noarch.rpm pigsty 0.1.0 22.8KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_lease_15-0.1.0-1PGSTY.el9.noarch.rpm
@ el9.aarch64 15 pg_lease_15 pg_lease_15-0.1.0-1PGSTY.el9.noarch.rpm pigsty 0.1.0 22.8KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_lease_15-0.1.0-1PGSTY.el9.noarch.rpm
@ el10.x86_64 15 pg_lease_15 pg_lease_15-0.1.0-1PGSTY.el10.noarch.rpm pigsty 0.1.0 22.9KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_lease_15-0.1.0-1PGSTY.el10.noarch.rpm
@ el10.aarch64 15 pg_lease_15 pg_lease_15-0.1.0-1PGSTY.el10.noarch.rpm pigsty 0.1.0 22.9KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_lease_15-0.1.0-1PGSTY.el10.noarch.rpm
@ el8.x86_64 14 pg_lease_14 pg_lease_14-0.1.0-1PGSTY.el8.noarch.rpm pigsty 0.1.0 23.0KiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/pg_lease_14-0.1.0-1PGSTY.el8.noarch.rpm
@ el8.aarch64 14 pg_lease_14 pg_lease_14-0.1.0-1PGSTY.el8.noarch.rpm pigsty 0.1.0 23.0KiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/pg_lease_14-0.1.0-1PGSTY.el8.noarch.rpm
@ el9.x86_64 14 pg_lease_14 pg_lease_14-0.1.0-1PGSTY.el9.noarch.rpm pigsty 0.1.0 22.8KiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/pg_lease_14-0.1.0-1PGSTY.el9.noarch.rpm
@ el9.aarch64 14 pg_lease_14 pg_lease_14-0.1.0-1PGSTY.el9.noarch.rpm pigsty 0.1.0 22.8KiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/pg_lease_14-0.1.0-1PGSTY.el9.noarch.rpm
@ el10.x86_64 14 pg_lease_14 pg_lease_14-0.1.0-1PGSTY.el10.noarch.rpm pigsty 0.1.0 22.9KiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/pg_lease_14-0.1.0-1PGSTY.el10.noarch.rpm
@ el10.aarch64 14 pg_lease_14 pg_lease_14-0.1.0-1PGSTY.el10.noarch.rpm pigsty 0.1.0 22.9KiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/pg_lease_14-0.1.0-1PGSTY.el10.noarch.rpm
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `pg_lease` 扩展的 RPM 包：

```bash
pig build pkg pg_lease         # 构建 RPM 包
```


## 安装

您可以直接安装 `pg_lease` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](https://pig.pgsty.com/zh) 或者是 `apt/yum/dnf` 安装扩展：

```bash {tab="安装" group="extension-install" value="install"}
pig install pg_lease;          # 当前活跃 PG 版本安装
```

```bash {tab="pig" value="pig"}
pig ext install -y pg_lease -v 18  # PG 18
pig ext install -y pg_lease -v 17  # PG 17
pig ext install -y pg_lease -v 16  # PG 16
pig ext install -y pg_lease -v 15  # PG 15
pig ext install -y pg_lease -v 14  # PG 14
```

```bash {tab="dnf" value="dnf"}
dnf install -y pg_lease_18       # PG 18
dnf install -y pg_lease_17       # PG 17
dnf install -y pg_lease_16       # PG 16
dnf install -y pg_lease_15       # PG 15
dnf install -y pg_lease_14       # PG 14
```


**创建扩展**：

```sql
CREATE EXTENSION pg_lease;
```

## 用法

来源：

- [PGXN 0.1.0](https://pgxn.org/dist/pg_lease/0.1.0/)
- [官方 README](https://api.pgxn.org/src/pg_lease/pg_lease-0.1.0/README.md)
- [扩展 SQL](https://api.pgxn.org/src/pg_lease/pg_lease-0.1.0/sql/pg_lease--0.1.0.sql)
- [控制文件](https://api.pgxn.org/src/pg_lease/pg_lease-0.1.0/pg_lease.control)

`pg_lease` 为具名资源提供可过期的所有权与递增的隔离令牌。它是纯 SQL/PL/pgSQL 扩展，采用惰性过期，无后台工作进程，也不需要预加载。PGXN 将 0.1.0 标为 testing；上游要求 PostgreSQL 14 或更高版本，文档记录了 PostgreSQL 14 和 15 的兼容性测试。

### 核心流程

扩展标为可信：拥有数据库内创建权限的角色可以安装。它创建固定的 `lease` 模式，不能迁移到其他模式。

```sql
CREATE EXTENSION pg_lease;

SELECT acquired, epoch, expires_at
FROM lease.acquire('job-42', 'worker-a', interval '30 seconds');

SELECT status, expires_at
FROM lease.renew('job-42', 'worker-a', 1, interval '30 seconds');

SELECT status FROM lease.release('job-42', 'worker-a', 1);
SELECT held, owner, epoch, expires_at FROM lease.inspect('job-42');
```

示例使用首次获取租约返回的令牌 1。应用必须把实际取得的令牌传给后续续租、释放操作以及外部资源的校验逻辑。成功释放会推进令牌，再次获取后必须使用新返回值。

### 操作接口

| 操作 | 行为 |
|---|---|
| `lease.acquire(key, owner, ttl, wait)` | 获取空闲或已过期的资源。等待时间默认零，资源被占用时返回失败；正值表示轮询直到成功或超时。 |
| `lease.renew(key, owner, epoch, ttl)` | 延长有效租约，保持令牌不变。 |
| `lease.release(key, owner, epoch)` | 释放有效租约并推进令牌。 |
| `lease.inspect(key)` | 查询所有权、到期时间与当前令牌；未知资源不返回记录。 |

续租与释放返回 `ok`、`not_owner`、`lapsed` 或 `epoch_mismatch`。无效输入抛出 SQLSTATE `22023`；阻塞等待超时抛出 `57014`。同一持有者再次获取尚未过期的租约是幂等操作，不延长到期时间。

### 事务与边界

阻塞获取应使用 READ COMMITTED。状态变更属于调用者事务，回滚会撤销变更。过期判断使用数据库服务器时钟；会话结束不会立即释放租约。函数采用固定搜索路径的 `SECURITY DEFINER`，并撤销公众直接访问 `lease.leases` 的权限。

持有者字符串由应用提供，不是经过认证的数据库身份。应用必须限制租约接口的访问，并在受保护资源处检查隔离令牌。扩展不保证主备切换或独立数据库之间的安全性。删除扩展会丢失租约状态，重新安装会重置令牌历史；0.1.0 没有为租约表注册扩展配置转储。
