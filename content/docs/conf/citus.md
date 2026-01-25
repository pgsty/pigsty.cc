---
title: ha/citus
weight: 835
description: 13 节点 Citus 分布式 PostgreSQL 集群，1 协调组 + 5 工作组高可用配置，提供水平扩展与分片能力
icon: fa-solid fa-cubes
categories: [参考]
---

`ha/citus` 配置模板部署一套完整的 **Citus 分布式 PostgreSQL 集群**，包含 1 个基础设施节点、1 组协调节点和 5 组工作节点（共 12 个 Citus 节点），提供透明的水平扩展与数据分片能力。


--------

## 配置概览

- 配置名称： `ha/citus`
- 节点数量： 13 节点（1 基础设施 + 1 协调组 × 2 + 5 工作组 × 2）
- 配置说明：Citus 分布式 PostgreSQL 高可用集群
- 适用系统：`el8`, `el9`, `el10`, `d12`, `d13`, `u22`, `u24`
- 适用架构：`x86_64`
- 相关配置：[`meta`](/docs/conf/meta/)，[`ha/trio`](/docs/conf/trio/)

启用方式：

```bash
./configure -c ha/citus
```

> 备注：这是一个 13 节点模板，您需要在生成配置后修改各节点的 IP 地址


--------

## 配置内容

源文件地址：[`pigsty/conf/ha/citus.yml`](https://github.com/Vonng/pigsty/blob/main/conf/ha/citus.yml)

{{< readfile file="yaml/ha/citus.yml" code="true" lang="yaml" >}}


--------

## 集群拓扑

此配置部署一套完整的 Citus 分布式集群，拓扑结构如下：

| 集群 | 节点 | IP 地址 | VIP | 角色 |
|------|------|---------|-----|------|
| **pg-meta** | 1 | 10.10.10.10 | - | 基础设施 + CMDB |
| **pg-citus1** | 2 | 10.10.10.21, 22 | 10.10.10.29 | 协调节点（group 0） |
| **pg-citus2** | 2 | 10.10.10.31, 32 | 10.10.10.39 | 工作节点（group 1） |
| **pg-citus3** | 2 | 10.10.10.41, 42 | 10.10.10.49 | 工作节点（group 2） |
| **pg-citus4** | 2 | 10.10.10.51, 52 | 10.10.10.59 | 工作节点（group 3） |
| **pg-citus5** | 2 | 10.10.10.61, 62 | 10.10.10.69 | 工作节点（group 4） |
| **pg-citus6** | 2 | 10.10.10.71, 72 | 10.10.10.79 | 工作节点（group 5） |

**架构说明**：

- **pg-meta**：基础设施节点，运行 Grafana、Prometheus、etcd 等监控组件，同时部署一个独立的 CMDB 数据库
- **pg-citus1**：Citus 协调节点（group 0），负责接收客户端查询并路由到工作节点，1 主 1 从高可用配置
- **pg-citus2~6**：Citus 工作节点（group 1~5），存储分片数据，每组 1 主 1 从，通过 Patroni 实现自动故障转移
- **VIP**：每个节点组配置 L2 VIP，由 `vip-manager` 管理，确保故障转移时客户端连接自动切换


--------

## 配置解读

`ha/citus` 模板部署生产级 Citus 分布式集群，适合需要水平扩展的大规模数据场景。

**关键特性**：

- **水平扩展**：5 个工作组可线性扩展存储和计算能力
- **高可用**：每个工作组 1 主 1 从，支持自动故障转移
- **L2 VIP**：每组配置虚拟 IP，故障切换对应用透明
- **SSL 加密**：节点间通信使用 SSL 证书加密
- **透明分片**：数据自动分布到多个工作节点

**预装扩展**：

```yaml
pg_extensions: [ citus, postgis, pgvector, topn, pg_cron, hll ]
pg_libs: 'citus, pg_cron, pg_stat_statements'
```

**安全配置**：

- 启用 `pg_dbsu_password`，允许超级用户密码访问（Citus 节点间通信需要）
- HBA 规则要求所有连接使用 SSL 认证
- 节点间使用证书验证：`sslmode=verify-full`


--------

## 部署步骤

```bash
# 1. 下载 Pigsty
curl https://repo.pigsty.io/get | bash

# 2. 使用 ha/citus 配置模板
./configure -c ha/citus

# 3. 修改 IP 地址和密码
vi pigsty.yml

# 4. 部署完整集群
./deploy.yml
```

部署完成后，Citus 会自动注册所有工作节点。可通过以下命令验证：

```sql
-- 连接到任意协调节点
psql -h 10.10.10.29 -U dbuser_citus -d citus

-- 查看工作节点状态
SELECT * FROM citus_get_active_worker_nodes();

-- 查看分片分布
SELECT * FROM citus_shards;
```


--------

## 使用示例

**创建分布式表**：

```sql
-- 创建表
CREATE TABLE events (
    tenant_id INT,
    event_id BIGSERIAL,
    event_time TIMESTAMPTZ DEFAULT now(),
    payload JSONB,
    PRIMARY KEY (tenant_id, event_id)
);

-- 按 tenant_id 分片
SELECT create_distributed_table('events', 'tenant_id');

-- 插入数据（自动路由到对应分片）
INSERT INTO events (tenant_id, payload)
VALUES (1, '{"type": "click"}');

-- 查询（自动并行执行）
SELECT tenant_id, count(*)
FROM events
GROUP BY tenant_id;
```

**创建引用表**（小表复制到所有节点）：

```sql
CREATE TABLE tenants (
    tenant_id INT PRIMARY KEY,
    name TEXT
);

SELECT create_reference_table('tenants');
```


--------

## 适用场景

- **多租户 SaaS**：按租户 ID 分片，实现租户数据隔离和并行查询
- **实时分析**：大规模事件数据的实时聚合分析
- **时序数据**：结合 TimescaleDB 处理海量时序数据
- **水平扩展**：单表数据量超过单机容量时的扩展方案


--------

## 注意事项

- **PostgreSQL 版本**：Citus 支持 PostgreSQL 14~18，此模板默认使用 PG18
- **分布列选择**：合理选择分布列（通常是租户 ID 或时间戳）对性能至关重要
- **跨分片限制**：外键约束必须包含分布列，部分 DDL 操作有限制
- **网络要求**：需要配置正确的 `pg_vip_interface`（默认 `eth1`）
- **架构限制**：Citus 扩展不支持 ARM64 架构

