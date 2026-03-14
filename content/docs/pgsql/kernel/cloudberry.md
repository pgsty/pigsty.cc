---
title: Cloudberry
weight: 2113
description: 在 Pigsty 中使用 Cloudberry 开源 MPP 数仓内核，通过 `gpsql` 模式统一纳管节点、监控与配置。
icon: fas fa-leaf
module: [PGSQL]
categories: [概念]
---

[Cloudberry](https://cloudberry.apache.org/) 是一个源自 Greenplum 社区的开源 MPP 数据仓库内核，适合大规模并行分析场景。


--------

## 概览

在 Pigsty 中，Cloudberry 沿用 `gpsql` 模式接入，与 Greenplum / MatrixDB 共享一套身份模型、监控逻辑与目录约定。

- 内核包名：`cloudberry`
- 模式标识：`pg_mode: gpsql`
- 角色标识：`gp_role: master | segment`
- 当前仓库版本：`Cloudberry 2.0.0`
- 当前版本字符串：`PostgreSQL 14.4 (Apache Cloudberry 2.0.0-incubating build 1)`
- 默认二进制目录：`/usr/local/cloudberry`

需要特别说明的是，Pigsty 当前对 Cloudberry 的支持重点在于：软件包交付、节点管理、监控纳管、访问控制与配置编排。
对于 MPP 集群初始化、扩容、重平衡和上游专有运维动作，仍建议使用 Cloudberry 官方工具链完成。

> 根据当前发布说明，Cloudberry 目前在 Pigsty 仓库中为 **仅 RPM 构建** 的内核。


--------

## 安装

当前版本暂未提供独立的 `cloudberry` 一键模板。更常见的使用方式是：

1. 将目标节点纳入 Pigsty 管理。
2. 安装 `cloudberry` 内核包。
3. 通过 `gpsql` 模式描述 coordinator / segment 拓扑。
4. 使用 Pigsty 统一接入监控、账号、访问控制与备份体系。

如果只是为节点安装内核包，可直接执行：

```bash
./node.yml -t node_repo    -e '{"node_repo_modules":"local,node,pgsql"}'
./node.yml -t node_install -e '{"node_packages":["cloudberry"]}'
```

如果是已有 Cloudberry 集群纳管，建议先保留原有初始化方式，再逐步补齐 Pigsty inventory 与监控配置。


--------

## 配置

Cloudberry 使用 `gpsql` 模式，而不是单独的 `cloudberry` 模式。与原生 PostgreSQL 相比，至少需要额外关注 `pg_shard` 与 `gp_role` 两个身份参数；如需显式标注分片组，也可以补充 `pg_group`。

下面是一个最小可读的拓扑示例：

```yaml
all:
  children:
    cb-mdw:
      hosts:
        10.10.10.10: { pg_seq: 1, pg_role: primary }
      vars:
        pg_cluster: cb-mdw
        pg_mode: gpsql
        pg_shard: cb
        gp_role: master
        pg_packages: [ cloudberry, pgsql-common ]

    cb-sdw:
      hosts:
        10.10.10.11:
          nodename: cb-sdw-1
          pg_instances:
            6000: { pg_cluster: cb-seg1, pg_seq: 1, pg_role: primary, pg_exporter_port: 9633 }
        10.10.10.12:
          nodename: cb-sdw-2
          pg_instances:
            6000: { pg_cluster: cb-seg2, pg_seq: 1, pg_role: primary, pg_exporter_port: 9633 }
      vars:
        pg_cluster: cb-sdw
        pg_mode: gpsql
        pg_shard: cb
        gp_role: segment
        pg_preflight_skip: true
        pg_packages: [ cloudberry, pgsql-common ]
        pg_exporter_config: pg_exporter_basic.yml
        pg_exporter_params: 'options=-c%20gp_role%3Dutility&sslmode=disable'
```

其中有两点最容易忽略：

- `gp_role: master` 用于 coordinator / master 节点，业务访问通常落在这里。
- `gp_role: segment` 节点采集监控时，通常需要让 `pg_exporter` 以 `utility` 模式连接。


--------

## 客户端访问

对业务侧来说，Cloudberry 仍然暴露 PostgreSQL 线缆协议，绝大多数兼容 PostgreSQL 的客户端、驱动与 BI 工具都可以接入。

但需要注意：

- 应用与分析查询应连接到 master / coordinator，而不是直接访问 segment 节点。
- segment 节点更适合承载数据与计算分片，以及被 Pigsty 纳入监控采集。
- 如果需要统一接入地址，可以继续使用 Pigsty 的 HAProxy / PgBouncer / DNS 服务抽象。


--------

## 扩展与生态

Cloudberry 虽然源自 PostgreSQL 生态，但它不是“原生 PostgreSQL + 若干扩展”那么简单。
对于 Pigsty 主仓库中现成的扩展包，需要分两类看待：

- 纯 SQL 或与内核 ABI 耦合较弱的对象，通常更容易适配。
- 依赖 PGXS / 内核 C ABI 的扩展，往往需要针对 Cloudberry 的版本和编译链重新验证甚至重编译。

如果你的业务依赖 `postgis`、向量、FDW、审计或自定义 C 扩展，请先在目标 Cloudberry 版本上单独做兼容性验证，不要直接照搬原生 PostgreSQL 的扩展清单。


--------

## 注意事项

- Cloudberry 当前没有单独的 Pigsty 配置模板，使用时应以 `gpsql` 模式手工描述拓扑。
- 当前仓库交付重点是包、配置与监控，并不替代 Cloudberry 官方的 MPP 初始化与扩缩容工具。
- 由于这是 MPP 分布式内核，Patroni / PgBouncer / PgBackRest 的原生 PostgreSQL 经验并不能无条件套用到所有节点角色。
- 如果你只需要 PostgreSQL 水平扩展而不是完整 MPP 数仓，通常应优先考虑 [Citus](/docs/pgsql/kernel/citus/)。


--------

## 相关文档

- [PGSQL 内核总览](/docs/pgsql/kernel/)
- [PGSQL 内核模式配置](/docs/pgsql/config/kernel/)
- [Greenplum / GPSQL 文档](/docs/pgsql/kernel/greenplum/)
