---
title: cloudberry
weight: 812
description: "Cloudberry MPP 内核参考配置，使用 pg_mode: gpsql 与 cloudberry 包组启用"
icon: fa-solid fa-leaf
categories: [参考]
---

`cloudberry` 页面说明如何在 Pigsty 中启用 Cloudberry 内核（MPP 数仓场景）。  
Cloudberry 在 Pigsty 中通过 `pg_mode: gpsql` 模式接入，并使用 `cloudberry` 包组完成安装。


--------

## 配置概览

- 配置名称：`cloudberry`（内核模式说明页，不是独立 `conf/*.yml` 模板文件）
- 节点数量：按 MPP 拓扑规划（Master/Segment）
- 配置说明：通过 `pg_mode: gpsql` 启用 Cloudberry 内核，复用 Pigsty 的部署、监控与管控体系
- 适用系统：`el8`, `el9`, `el10`, `d12`, `d13`, `u22`, `u24`
- 适用架构：`x86_64`, `aarch64`
- 相关配置：[`pgsql`](/docs/conf/pgsql/)、[`mssql`](/docs/conf/mssql/)、[`Cloudberry 内核说明`](/docs/pgsql/kernel/cloudberry/)


--------

## 启用方式

当前 v4.2.0 没有单独的 `./configure -c cloudberry` 模板，建议在 `meta`（或其他模板）基础上切换内核模式：

```bash
./configure -c meta
```

然后在 `pigsty.yml` 中设置（示例）：

```yaml
all:
  vars:
    pg_mode: gpsql
    pg_version: 17
    pg_packages: [ cloudberry, pgsql-common ]
```


--------

## 拓扑参数

Cloudberry/Greenplum 风格集群通常需要：

- `pg_mode: gpsql`：启用并行数仓模式
- `gp_role: master | segment`：标识集群角色
- `pg_shard`：标识同一 MPP 部署

完整拓扑可参考 `pigsty/conf/demo/kernels.yml` 中的 `gpsql` 示例段。


--------

## 配置建议

- 优先使用 PG17（当前 Cloudberry 包组默认面向 PG17 生态）。
- 先完成基础设施部署，再分批接入 Master/Segment 节点。
- 将 Cloudberry 集群纳入 Pigsty 监控后，可统一使用 PGSQL 仪表盘与告警能力。
