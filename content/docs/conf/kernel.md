---
title: demo/kernel
weight: 1035
description: 十节点 PostgreSQL 内核矩阵演示配置
icon: fa-solid fa-microchip
categories: [参考]
---

`demo/kernel` 配置模板用于在一套配置中演示 Pigsty 支持的主要 PostgreSQL 内核与兼容分支。它面向功能验证和内核差异测试，不是生产模板。


--------

## 配置概览

- 配置名称： `demo/kernel`
- 节点数量：10 个节点，其中 1 个同时承载 INFRA/ETCD 与 `pg-citus`
- 配置说明：PostgreSQL 内核矩阵演示，覆盖 Citus、IvorySQL、Babelfish、PolarDB、Percona TDE、OrioleDB、OpenHalo、DocumentDB/FerretDB、AgensGraph、pgEdge
- 适用系统：以各内核包实际支持的平台为准
- 适用架构：以各内核包实际支持的平台为准
- 相关配置：[`pgsql`](/docs/conf/pgsql/)、[`mssql`](/docs/conf/mssql/)、[`mongo`](/docs/conf/mongo/)

启用方式：

```bash
./configure -c demo/kernel
```

> 备注：这是固定 IP 的演示模板，生成后需要按实际环境调整节点地址。


--------

## 配置内容

源文件地址：[`pigsty/conf/demo/kernel.yml`](https://github.com/pgsty/pigsty/blob/main/conf/demo/kernel.yml)

{{< readfile file="yaml/demo/kernel.yml" code="true" lang="yaml" >}}


--------

## 配置解读

该模板用单节点集群展示不同内核的最低可用配置：

- `pg-citus`：PostgreSQL 18 + Citus
- `pg-ivory`：IvorySQL，兼容 PostgreSQL 18
- `pg-mssql`：Babelfish，兼容 PostgreSQL 17
- `pg-polar`：PolarDB for PostgreSQL，兼容 PostgreSQL 17
- `pg-tde`：Percona PostgreSQL 18 + `pg_tde`
- `pg-oriole`：OrioleDB，支持 PostgreSQL 16、17、18；当前演示配置默认使用 PG18
- `pg-mysql`：OpenHalo，兼容 PostgreSQL 14
- `pg-mongo`：DocumentDB + FerretDB，默认 PostgreSQL 18
- `pg-agens`：AgensGraph，兼容 PostgreSQL 16
- `pg-edge`：pgEdge，兼容 PostgreSQL 18

**注意事项**：
- 不同内核的软件包支持平台不同，部署前应先确认目标系统的软件源可用性。
- 该模板包含演示用途的宽松访问规则，生产环境请改用单独内核模板并收紧 HBA 与密码策略。
