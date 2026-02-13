---
title: ha/dual
weight: 860
description: 双节点配置模板，有限高可用部署，允许宕机特定一台服务器。
icon: fa-solid fa-dice-two
categories: [参考]
---

`ha/dual` 模板使用双节点部署，实现一主一备的"半高可用"架构。如果您只有两台服务器，这是一个务实的选择。


--------

## 配置概览

- 配置名称： `ha/dual`
- 节点数量： 双节点
- 配置说明：两节点有限高可用部署，允许特定一台服务器宕机
- 适用系统：`el8`, `el9`, `el10`, `d12`, `d13`, `u22`, `u24`
- 适用架构：`x86_64`, `aarch64`
- 相关配置：[`ha/trio`](/docs/conf/trio/)，[`slim`](/docs/conf/slim/)

启用方式：

```bash
./configure -c ha/dual [-i <primary_ip>]
```

配置生成后，需要将占位 IP `10.10.10.11` 修改为实际的备库节点 IP 地址。


--------

## 配置内容

源文件地址：[`pigsty/conf/ha/dual.yml`](https://github.com/pgsty/pigsty/blob/main/conf/ha/dual.yml)

{{< readfile file="yaml/ha/dual.yml" code="true" lang="yaml" >}}


--------

## 配置解读

`ha/dual` 模板是 Pigsty 的 **双节点有限高可用配置**，专为只有两台服务器的场景设计。

**架构说明**：
- **节点A** (10.10.10.10)：管理节点，运行 Infra + etcd + PostgreSQL 备库
- **节点B** (10.10.10.11)：数据节点，仅运行 PostgreSQL 主库

**故障场景分析**：

| 故障节点 | 影响 | 是否自动恢复 |
|:--|:--|:--:|
| 节点B 宕机 | 主库切换到节点A | 自动 |
| 节点A etcd 宕机 | 主库继续运行（无 DCS） | 需人工 |
| 节点A pgsql 宕机 | 主库继续运行 | 需人工 |
| 节点A 完全宕机 | 主库降级为单机 | 需人工 |

**适用场景**：
- 仅有两台服务器的预算受限环境
- 可接受部分故障场景需要人工介入
- 作为三节点高可用的过渡方案

**注意事项**：
- 真正的高可用需要至少三节点（DCS 需要多数派）
- 建议尽快升级到三节点架构
- L2 VIP 需要网络环境支持（同一广播域）

