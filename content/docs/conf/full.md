---
title: ha/full
weight: 845
description: 四节点完整功能演示环境，带有两套 PostgreSQL 集群、MinIO、Redis 等组件示例
icon: fa-solid fa-dice-four
categories: [参考]
---

`ha/full` 配置模板是 Pigsty 推荐的沙箱演示环境，使用四个节点部署两套 PostgreSQL 集群，用于测试和演示 Pigsty 各方面的能力。

Pigsty 大部分教程和示例都基于此模板的沙箱环境。


--------

## 配置概览

- 配置名称： `ha/full`
- 节点数量： 四节点
- 配置说明：四节点完整功能演示环境，带有两套 PostgreSQL 集群、MinIO、Redis 等组件示例
- 适用系统：`el8`, `el9`, `el10`, `d12`, `d13`, `u22`, `u24`
- 适用架构：`x86_64`, `aarch64`
- 相关配置：[`ha/trio`](/docs/conf/trio/)，[`ha/safe`](/docs/conf/safe/)，[`demo/demo`](/docs/conf/demo/)

启用方式：

```bash
./configure -c ha/full [-i <primary_ip>]
```

配置生成后，需要修改其他三个节点的 IP 地址。


--------

## 配置内容

源文件地址：[`pigsty/conf/ha/full.yml`](https://github.com/pgsty/pigsty/blob/main/conf/ha/full.yml)

{{< readfile file="yaml/ha/full.yml" code="true" lang="yaml" >}}


--------

## 配置解读

`ha/full` 模板是 Pigsty 的 **完整功能演示配置**，展示了多种组件的协同工作。

**组件概览**：

| 组件 | 节点分布 | 说明 |
|:--|:--|:--|
| INFRA | 节点1 | 监控/告警/Nginx/DNS |
| ETCD | 节点1 | DCS 服务 |
| MinIO | 节点1 | S3 兼容存储 |
| pg-meta | 节点1 | 单节点 PostgreSQL |
| pg-test | 节点2-4 | 三节点高可用 PostgreSQL |
| redis-ms | 节点1 | Redis 主从模式 |
| redis-meta | 节点2 | Redis 哨兵模式 |
| redis-test | 节点3-4 | Redis 原生集群模式 |

**适用场景**：
- Pigsty 功能演示与学习
- 开发测试环境
- 评估高可用架构
- Redis 不同模式对比测试

**与 ha/trio 的区别**：
- 增加了第二套 PostgreSQL 集群（pg-test）
- 增加了三种模式的 Redis 集群示例
- 基础设施使用单节点（而非三节点）

**注意事项**：
- 此模板主要用于演示和测试，生产环境请参考 [`ha/trio`](/docs/conf/trio/) 或 [`ha/safe`](/docs/conf/safe/)
- 默认启用 MinIO 备份，如不需要可注释相关配置

