---
title: ha/simu
weight: 840
description: 20 节点生产环境仿真配置，用于大规模部署测试
icon: fa-solid fa-server
categories: [参考]
---

`ha/simu` 配置模板是一个 20 节点的生产环境仿真配置，需要强大的宿主机方可运行。


--------

## 配置概览

- 配置名称： `ha/simu`
- 节点数量： 20 节点，[`pigsty/vagrant/spec/simu.rb`](https://github.com/Vonng/pigsty/blob/main/vagrant/spec/simu.rb)
- 配置说明：20 节点的生产环境仿真配置，需要强大的宿主机方可运行。
- 适用系统：`el8`, `el9`, `el10`, `d12`, `d13`, `u22`, `u24`
- 适用架构：`x86_64`, `aarch64`

启用方式：

```bash
./configure -c ha/simu [-i <primary_ip>]
```


--------

## 配置内容

源文件地址：[`pigsty/conf/ha/simu.yml`](https://github.com/Vonng/pigsty/blob/main/conf/ha/simu.yml)

{{< readfile file="yaml/ha/simu.yml" code="true" lang="yaml" >}}


--------

## 配置解读

`ha/simu` 模板是一个 **大规模生产环境仿真配置**，用于测试和验证复杂场景。

**架构组成**：
- 2 节点高可用 INFRA（监控/告警/Nginx/DNS）
- 5 节点高可用 ETCD 和 MinIO（多磁盘）
- 2 节点 Proxy（HAProxy + Keepalived VIP）
- 多套 PostgreSQL 集群：
  - pg-meta：2 节点高可用
  - pg-v12~v17：单节点多版本测试
  - pg-pitr：单节点 PITR 测试
  - pg-test：4 节点高可用
  - pg-src/pg-dst：3+2 节点复制测试
  - pg-citus：10 节点分布式集群
- 多种 Redis 模式：主从、哨兵、集群

**适用场景**：
- 大规模部署测试与验证
- 高可用故障演练
- 性能基准测试
- 新功能预览与评估

**注意事项**：
- 需要强大的宿主机（推荐 64GB+ 内存）
- 使用 Vagrant 虚拟机模拟

