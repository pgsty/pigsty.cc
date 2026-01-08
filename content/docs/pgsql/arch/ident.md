---
title: 身份标识符
weight: 1103
description: 介绍 Pigsty 中 PostgreSQL 集群的实体身份标识符：命名规范、设计理念，以及使用方法。
icon: fa-solid fa-address-card
module: [PGSQL]
categories: [概念]
---


Pigsty 使用 [`PG_ID`](/docs/pgsql/param#pg_id) 参数组为 PGSQL 模块的每个实体赋予确定的身份。

----------------

## 核心身份参数

三项必填参数构成 PGSQL 的最小 ID 集：

| 参数                                           | 层级 | 作用      | 约束                                      |
|----------------------------------------------|----|---------|-----------------------------------------|
| [`pg_cluster`](/docs/pgsql/param#pg_cluster) | 集群 | 业务命名空间  | `[a-z][a-z0-9-]*`                       |
| [`pg_seq`](/docs/pgsql/param#pg_seq)         | 实例 | 集群内实例序号 | 递增分配的自然数，唯一且不可复用                        |
| [`pg_role`](/docs/pgsql/param#pg_role)       | 实例 | 复制角色    | `primary / replica / offline / delayed` |

- `pg_cluster` 决定所有衍生名称：实例、服务、监控标签。
- `pg_seq` 与节点 1:1 绑定，表达拓扑顺序和预期优先级。
- `pg_role` 驱动 Patroni/HAProxy 的行为：`primary` 唯一，`replica` 承载在线只读，`offline` 只接离线服务，`delayed` 用于延迟集群。

Pigsty 不会为上述参数提供默认值，必须在 inventory 中显式写明。

----------------

## 实体身份标识

Pigsty 的 PostgreSQL 实体标识符将根据上面的核心身份参数自动生成

| 实体  | 生成规则                             | 示例                |
|-----|----------------------------------|-------------------|
| 实例  | `{{ pg_cluster }}-{{ pg_seq }}`  | `pg-test-1`       |
| 服务  | `{{ pg_cluster }}-{{ pg_role }}` | `pg-test-primary` |
| 节点名 | 默认等同实例名，但可以显式覆盖                  | `pg-test-1`       |

服务后缀采用内置约定：`primary`、`replica`、`default`、`offline`、`delayed` 等。HAProxy/pgbouncer 会读取这些标识自动构建路由。命名保持前缀一致，可直接通过 `pg-test-*` 查询或筛选。

----------------

## 监控标签体系

在 PGSQL 模块中，所有监控指标使用以下标签体系：

- `cls`：集群名：`{{ pg_cluster }}`。
- `ins`：实例名：`{{ pg_cluster }}-{{ pg_seq }}` 。
- `ip`：实例所在节点 IP。

对于 VictoriaMetrics 而言，采集 PostgreSQL 指标的 job 名固定为 `pgsql`；
用于监控远程 PG 实例的 job 名固定为 `pgrds`。

对于 VictoriaLogs 而言，采集 PostgreSQL CSV 日志的 job 名固定为 `postgres`；
采集 pgbackrest 日志的 job 名固定为 `pgbackrest`，其余组件通过 syslog 采集日志。


--------

## 示例：`pg-test` 身份视图

```yaml
pg-test:
  hosts:
    10.10.10.11: { pg_seq: 1, pg_role: primary }
    10.10.10.12: { pg_seq: 2, pg_role: replica }
    10.10.10.13: { pg_seq: 3, pg_role: replica, pg_offline_query: true }
  vars:
    pg_cluster: pg-test
```

| 集群      | 序号 | 角色              | 节点/IP       | 实例        | 服务入口                              |
|---------|----|-----------------|-------------|-----------|-----------------------------------|
| pg-test | 1  | primary         | 10.10.10.11 | pg-test-1 | pg-test-primary                   |
| pg-test | 2  | replica         | 10.10.10.12 | pg-test-2 | pg-test-replica                   |
| pg-test | 3  | replica+offline | 10.10.10.13 | pg-test-3 | pg-test-replica / pg-test-offline |

Prometheus 标签示例：

```text
pg_up{cls="pg-test", ins="pg-test-1", ip="10.10.10.11", job="pgsql"}
pg_up{cls="pg-test", ins="pg-test-2", ip="10.10.10.12", job="pgsql"}
pg_up{cls="pg-test", ins="pg-test-3", ip="10.10.10.13", job="pgsql"}
```

