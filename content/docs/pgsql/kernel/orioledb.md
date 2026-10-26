---
title: OrioleDB
weight: 2112
description: PostgreSQL 的下一代 OLTP 引擎
icon: fa-solid fa-bolt
module: [PGSQL]
categories: [概念]
---

[OrioleDB](https://orioledb.com/) 是一个 PostgreSQL 存储引擎扩展，支持将数据存储在 S3。其 MVCC 使用 UNDO 日志保存旧版本，减少主存储中的膨胀，并通过 64 位事务 ID 避免传统 XID 环绕问题；实现细节见 [**OrioleDB 上游说明**](https://github.com/orioledb/orioledb)。

OrioleDB 当前在 Pigsty 中支持 PostgreSQL 16、17、18 三个兼容系，当前基线版本为 OrioleDB 1.8 beta16。

您可以使用 Pigsty 将 OrioleDB 作为 RDS 运行。`pg_mode` 仍使用 `oriole` 选择 `/usr/oriole-$v` 安装路径，
`orioledb` 包别名会按 `pg_version` 解析为版本化内核包，例如 `orioledb-16`、`orioledb-17`、`orioledb-18`。


------

## 快速开始

按照 Pigsty [**标准安装**](/docs/setup/install) 流程，使用 [`fork/oriole`](/docs/conf/oriole/) 配置模板。

以下命令使用 [v4.5.0 模板](https://github.com/pgsty/pigsty/blob/v4.5.0/conf/oriole.yml)；开发版已迁移至 `conf/fork/oriole.yml`，对应使用 `-c fork/oriole`。

```bash
curl -fsSL https://repo.pigsty.io/get | bash; cd ~/pigsty;
./configure -c oriole    # 使用 OrioleDB 配置模板
./deploy.yml             # 使用 OrioleDB 安装 Pigsty
```

对于生产部署，请确保在运行 `install` 剧本之前修改 `pigsty.yml` 配置中的密码参数。



------

## 配置

```yaml
pg-meta:
  hosts:
    10.10.10.10: { pg_seq: 1, pg_role: primary }
  vars:
    pg_cluster: pg-meta
    pg_users:
      - {name: dbuser_meta ,password: DBUser.Meta   ,pgbouncer: true ,roles: [dbrole_admin]    ,comment: pigsty admin user }
      - {name: dbuser_view ,password: DBUser.Viewer ,pgbouncer: true ,roles: [dbrole_readonly] ,comment: read-only viewer for meta database }
    pg_databases:
      - {name: meta ,baseline: cmdb.sql ,comment: pigsty meta database ,schemas: [pigsty], extensions: [orioledb]}
    pg_hba_rules:
      - {user: dbuser_view , db: all ,addr: infra ,auth: pwd ,title: 'allow grafana dashboard access cmdb from infra nodes'}
    pg_crontab: [ '00 01 * * * /pg/bin/pg-backup full' ] # 每天凌晨 1 点进行全量备份

    # OrioleDB 临时设置
    pg_mode: oriole                                         # oriole 兼容模式
    pg_version: 18                                          # OrioleDB 支持 PG 16、17、18
    pg_packages: [ orioledb, pgsql-common ]                 # 安装 OrioleDB 内核
    pg_libs: 'orioledb, pg_stat_statements, auto_explain'   # 加载 OrioleDB 扩展
```

------

## 使用

要使用 OrioleDB，请安装 `orioledb` 包别名；Pigsty 会按平台与 `pg_version` 解析为对应的 PG16、PG17 或 PG18 内核包。

使用 `pgbench` 初始化类似 TPC-B 的表，包含 100 个仓库：

```bash
pgbench -is 100 meta
pgbench -nv -P1 -c10 -S -T1000 meta
pgbench -nv -P1 -c50 -S -T1000 meta
pgbench -nv -P1 -c10    -T1000 meta
pgbench -nv -P1 -c50    -T1000 meta
```

接下来，您可以使用 `orioledb` 存储引擎重建这些表并观察性能差异：

```sql
-- 创建 OrioleDB 表
CREATE TABLE pgbench_accounts_o (LIKE pgbench_accounts INCLUDING ALL) USING orioledb;
CREATE TABLE pgbench_branches_o (LIKE pgbench_branches INCLUDING ALL) USING orioledb;
CREATE TABLE pgbench_history_o (LIKE pgbench_history INCLUDING ALL) USING orioledb;
CREATE TABLE pgbench_tellers_o (LIKE pgbench_tellers INCLUDING ALL) USING orioledb;

-- 从常规表复制数据到 OrioleDB 表
INSERT INTO pgbench_accounts_o SELECT * FROM pgbench_accounts;
INSERT INTO pgbench_branches_o SELECT * FROM pgbench_branches;
INSERT INTO pgbench_history_o SELECT  * FROM pgbench_history;
INSERT INTO pgbench_tellers_o SELECT * FROM pgbench_tellers;

-- 删除原始表并重命名 OrioleDB 表
DROP TABLE pgbench_accounts, pgbench_branches, pgbench_history, pgbench_tellers;
ALTER TABLE pgbench_accounts_o RENAME TO pgbench_accounts;
ALTER TABLE pgbench_branches_o RENAME TO pgbench_branches;
ALTER TABLE pgbench_history_o RENAME TO pgbench_history;
ALTER TABLE pgbench_tellers_o RENAME TO pgbench_tellers;
```


------

## 关键特性

- **无 XID 回绕**：消除事务 ID 回绕维护
- **无表膨胀**：高级存储管理防止表膨胀
- **云存储**：对 S3 兼容对象存储的原生支持
- **OLTP 优化**：专为事务工作负载设计
- **改进性能**：更好的空间利用率和查询性能

> **注意**：OrioleDB 仍处于快速迭代阶段，生产使用前请按目标版本单独评估。


--------

## 可用扩展

以下列出部分非 Contrib 扩展供参考；实际可用性与版本请在目标实例上 [**查询确认**](/docs/pgsql/kernel/#版本)。

| 扩展名                         | 版本号   | 说明                                                   |
|:----------------------------|:------|:-----------------------------------------------------|
| [orioledb](/ext/e/orioledb) | `1.8` | OrioleDB -- the next generation transactional engine |
{.full-width}
