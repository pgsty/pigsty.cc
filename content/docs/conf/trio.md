---
title: ha/trio
weight: 855
description: 三节点标准高可用配置模板，允许任意一台服务器宕机。
icon: fa-solid fa-dice-three
categories: [参考]
---

三节点是实现真正高可用的最小规格。`ha/trio` 模板使用三节点标准 HA 架构，INFRA、ETCD、PGSQL 三个核心模块均采用三节点部署，允许任意一台服务器宕机。


--------

## 配置概览

- 配置名称： `ha/trio`
- 节点数量： 三节点
- 配置说明：三节点标准高可用架构，允许任意一台服务器宕机
- 适用系统：`el8`, `el9`, `el10`, `d12`, `d13`, `u22`, `u24`
- 适用架构：`x86_64`, `aarch64`
- 相关配置：[`ha/dual`](/docs/conf/dual/)，[`ha/full`](/docs/conf/full/)，[`ha/safe`](/docs/conf/safe/)

启用方式：

```bash
./configure -c ha/trio [-i <primary_ip>]
```

配置生成后，需要将占位 IP `10.10.10.11` 和 `10.10.10.12` 修改为实际的节点 IP 地址。


--------

## 配置内容

源文件地址：[`pigsty/conf/ha/trio.yml`](https://github.com/Vonng/pigsty/blob/main/conf/ha/trio.yml)

{{< readfile file="yaml/ha/trio.yml" code="true" lang="yaml" >}}


--------

## 配置解读

`ha/trio` 模板是 Pigsty 的 **标准高可用配置**，提供真正的故障自动恢复能力。

**架构说明**：
- 三节点 INFRA：Prometheus/Grafana/Nginx 分布式部署
- 三节点 ETCD：DCS 多数派选举，容忍单点故障
- 三节点 PostgreSQL：一主两从，自动故障转移
- 单节点 MinIO：可按需扩展为多节点

**高可用保障**：
- ETCD 三节点可容忍一节点故障，保持多数派
- PostgreSQL 主库故障时，Patroni 自动选举新主
- L2 VIP 随主库漂移，应用无需修改连接配置

**适用场景**：
- 生产环境最小高可用部署
- 需要自动故障转移的关键业务
- 作为更大规模部署的基础架构

**扩展建议**：
- 需要更强数据安全性，参考 [`ha/safe`](/docs/conf/safe/) 模板
- 需要更多演示功能，参考 [`ha/full`](/docs/conf/full/) 模板
- 生产环境建议启用 `pgbackrest_method: minio` 远程备份

