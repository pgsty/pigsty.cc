---
title: ha/simu
weight: 610
description: 20 节点生产环境仿真配置，用于大规模部署测试
icon: fa-solid fa-server
categories: [参考]
---

`ha/simu` 配置模板是一个 20 节点的生产环境仿真配置，需要强大的宿主机方可运行。


--------

## 配置概览

- 配置名称： `ha/simu`
- 节点数量： 20 节点，[`pigsty/vagrant/spec/simu.rb`](https://github.com/pgsty/pigsty/blob/main/vagrant/spec/simu.rb)
- 配置说明：20 节点的生产环境仿真配置，需要强大的宿主机方可运行。
- 适用系统：`el8`, `el9`, `el10`, `d12`, `d13`, `u22`, `u24`, `u26`
- 适用架构：`x86_64`, `aarch64`

启用方式：

```bash
./configure -c ha/simu [-i <primary_ip>]
```


--------

## 配置内容

源文件地址：[`pigsty/conf/ha/simu.yml`](https://github.com/pgsty/pigsty/blob/main/conf/ha/simu.yml)

{{< include file="yaml/ha/simu.yml" code=true lang="yaml" >}}


--------

## 配置解读

`ha/simu` 模板是一个 **大规模生产环境仿真配置**，用于测试和验证复杂场景。

**架构组成**：
- 3 节点高可用 INFRA（`10.10.10.10` ～ `10.10.10.12`，监控/告警/Nginx/DNS）
- 5 节点 ETCD（`10.10.10.25` ～ `10.10.10.29`）
- 4 节点 MINIO（Silo，每节点 4 块盘 `/data{1...4}`，`10.10.10.21` ～ `10.10.10.24`）
- 2 节点 Proxy（HAProxy + Keepalived VIP `10.10.10.20`，`sss.pigsty` 指向该 VIP）
- 多套 PostgreSQL 集群：
  - pg-meta：3 节点高可用，与 INFRA 共置
  - pg-src / pg-dst：各 3 节点高可用（`10.10.10.31` ～ `33`、`10.10.10.41` ～ `43`）
  - pg-tmp / pg-etcd / pg-minio：复用 Proxy、ETCD、MINIO 节点的 2、5、4 节点集群
- 多种 Redis 模式：主从（redis-src、redis-dst）、哨兵（redis-meta）

**适用场景**：
- 大规模部署测试与验证
- 高可用故障演练
- 性能基准测试
- 新功能预览与评估

**注意事项**：
- 需要强大的宿主机（推荐 64GB+ 内存）
- 使用 Vagrant 虚拟机模拟
