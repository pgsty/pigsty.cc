---
title: ha/trio
weight: 640
description: 三节点标准高可用配置模板，PostgreSQL、ETCD 与 Silo 均可容忍单节点故障。
icon: fa-solid fa-dice-three
categories: [参考]
---

三节点是实现多数派高可用的最小规格。`ha/trio` 将 INFRA、ETCD、PGSQL 与 Silo 分布在三台服务器上；PostgreSQL、ETCD 和对象存储都可以在一台服务器宕机时继续服务。


--------

## 配置概览

- 配置名称： `ha/trio`
- 节点数量： 三节点
- 配置说明：三节点标准高可用架构，包含三节点单盘 Silo 与统一 S3 高可用入口
- 适用系统：`el8`, `el9`, `el10`, `d12`, `d13`, `u22`, `u24`, `u26`
- 适用架构：`x86_64`, `aarch64`
- 相关配置：[`ha/dual`](/docs/conf/dual/)，[`ha/full`](/docs/conf/full/)，[`ha/safe`](/docs/conf/safe/)

启用方式：

```bash
./configure -c ha/trio [-i <primary_ip>]
```

配置生成后，需要将占位 IP `10.10.10.11` 和 `10.10.10.12` 修改为实际的节点 IP 地址。


--------

## 配置内容

源文件地址：[`pigsty/conf/ha/trio.yml`](https://github.com/pgsty/pigsty/blob/main/conf/ha/trio.yml)

{{< include file="yaml/ha/trio.yml" code=true lang="yaml" >}}


--------

## 配置解读

`ha/trio` 模板是 Pigsty 的 **标准高可用配置**，提供真正的故障自动恢复能力。

**架构说明**：
- 三节点 INFRA：VictoriaMetrics/Grafana/Nginx 分布式部署
- 三节点 ETCD：DCS 多数派选举，容忍单点故障
- 三节点 PostgreSQL：一主两从，自动故障转移
- 三节点 Silo：每节点一个数据目录，默认 EC:1（2 份数据、1 份校验）
- S3 高可用入口：Keepalived VIP `10.10.10.9` 与三节点 HAProxy `9002`

**高可用保障**：
- ETCD 三节点可容忍一节点故障，保持多数派
- PostgreSQL 主库故障时，Patroni 自动选举新主
- L2 VIP 随主库漂移，应用无需修改连接配置
- Silo 在一个节点或一个数据盘不可用时仍保持读写仲裁
- `sss.pigsty` 指向对象存储 VIP，pgBackRest 与 `mcli` 统一通过 `https://sss.pigsty:9002` 访问

**对象存储**：

- `minio_data: /data/minio` 配置的是文件系统目录，不是 `/dev/sdb` 之类的裸设备。
- 分布式 Silo 会拒绝根文件系统上的数据目录。`/data/minio` 必须位于独立挂载的 `/data` 文件系统中，或者自身就是独立挂载点。
- 数据盘可以是本地盘、云盘、独立分区或 LVM 逻辑卷；生产环境应优先使用独立持久化磁盘，并让三台节点容量接近。
- 可用 `findmnt -T /data/minio` 检查实际挂载点。如果结果仍是 `/`，说明它只是根盘上的普通目录。
- 三节点单盘拓扑的原始容量利用率约为三分之二，适合资源受限的紧凑高可用部署；需要更高容量、吞吐与磁盘冗余时应使用多机多盘拓扑。
- 既有单节点对象存储不能通过直接增加两个成员原地变成该拓扑；应创建新的三节点集群并迁移对象。

模板中的 S3 API 是高可用入口；Portal 中的管理控制台仍连接首节点 `9001`，不属于该 API 高可用链路。

**适用场景**：
- 生产环境最小高可用部署
- 需要自动故障转移的关键业务
- 作为更大规模部署的基础架构

**扩展建议**：
- 需要更强数据安全性，参考 [`ha/safe`](/docs/conf/safe/) 模板
- 需要更多演示功能，参考 [`ha/full`](/docs/conf/full/) 模板
- 对象存储容量或性能要求较高时，使用每节点多盘的 Silo 集群
