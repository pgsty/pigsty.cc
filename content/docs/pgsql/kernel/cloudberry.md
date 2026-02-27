---
title: Cloudberry
weight: 2113
description: 在 Pigsty 中启用 Cloudberry MPP 数仓内核（gpsql 模式），统一接入部署与监控体系。
icon: fas fa-leaf
module: [PGSQL]
categories: [概念]
---

[Cloudberry](https://cloudberry.apache.org/) 是一个源于 Greenplum 社区的开源 MPP 数据仓库内核，适合大规模并行分析场景。


--------

## 概览

在 Pigsty 中，Cloudberry 使用 `pg_mode: gpsql` 接入：

- 内核包组：`cloudberry`
- 模式标识：`pg_mode: gpsql`
- 典型角色：`gp_role: master | segment`

Cloudberry 节点可复用 Pigsty 的节点管理、监控告警、访问控制与配置管理能力。


--------

## 最新变化（v4.2.0）

Cloudberry 已作为 Pigsty 新引入内核纳入标准包映射：

- 包别名：`cloudberry`
- 默认二进制目录：`/usr/local/cloudberry`
- 主流平台可用：
  - OS：`el8`, `el9`, `el10`, `d12`, `d13`, `u22`, `u24`
  - Arch：`x86_64`, `aarch64`


--------

## 启用方式

建议从 `meta`（或其他基础模板）开始，在配置中切换模式：

```yaml
all:
  vars:
    pg_mode: gpsql
    pg_version: 17
    pg_packages: [ cloudberry, pgsql-common ]
```

如需单机先安装内核包，也可使用：

```bash
./node.yml -t node_install -e '{"node_packages":["cloudberry"]}'
```


--------

## 基础拓扑示例

```yaml
all:
  children:
    cb-master:
      hosts:
        10.10.10.10: { pg_seq: 1, pg_role: primary }
      vars:
        pg_mode: gpsql
        gp_role: master
        pg_shard: cb
        pg_cluster: cb-master

    cb-seg:
      hosts:
        10.10.10.11:
          pg_instances:
            6000: { pg_cluster: cb-seg1, pg_seq: 1, pg_role: primary }
        10.10.10.12:
          pg_instances:
            6000: { pg_cluster: cb-seg2, pg_seq: 1, pg_role: primary }
      vars:
        pg_mode: gpsql
        gp_role: segment
        pg_shard: cb
        pg_cluster: cb-seg
```

完整拓扑可参考 `pigsty/conf/demo/kernels.yml` 的 `gpsql` 段落。


--------

## 使用建议

- 统一使用 PG17 生态进行内核与扩展规划。
- 先完成节点与监控接入，再进行 MPP 集群初始化与业务库迁移。
- 对于分布式初始化与数据重平衡，优先配合 Cloudberry 官方工具链执行。


--------

## 相关文档

- [PGSQL 内核总览](/docs/pgsql/kernel/)
- [PGSQL 内核模式配置](/docs/pgsql/config/kernel/)
- [Greenplum / GPSQL 旧文档](/docs/pgsql/kernel/greenplum/)
