---
title: fat
weight: 775
description: 功能全测试模板，单节点安装所有扩展，构建包含 PG 13-18 全版本的本地软件源。
icon: fa-solid fa-database
categories: [参考]
---

`fat` 配置模板是 Pigsty 的 **功能全测试模板**（Feature-All-Test），在单节点上安装所有扩展插件，并构建包含 PostgreSQL 13-18 全部六个大版本所有扩展的本地软件源。

这是一个用于测试与开发的全功能配置，适合需要完整软件包缓存或测试全部扩展的场景。


--------

## 配置概览

- 配置名称： `fat`
- 节点数量： 单节点
- 配置说明：功能全测试模板，安装所有扩展，构建包含 PG 13-18 全版本的本地软件源
- 适用系统：`el8`, `el9`, `el10`, `d12`, `d13`, `u22`, `u24`
- 适用架构：`x86_64`, `aarch64`
- 相关配置：[`meta`](/docs/conf/meta/)，[`slim`](/docs/conf/slim/)，[`fat`](/docs/conf/fat/)

启用方式：

```bash
./configure -c fat [-i <primary_ip>]
```

如需指定特定 PostgreSQL 版本：

```bash
./configure -c fat -v 17   # 使用 PostgreSQL 17
```


--------

## 配置内容

源文件地址：[`pigsty/conf/fat.yml`](https://github.com/Vonng/pigsty/blob/main/conf/fat.yml)

{{< readfile file="yaml/fat.yml" code="true" lang="yaml" >}}


--------

## 配置解读

`fat` 模板是 Pigsty 的 **全功能测试配置**，专为完整性测试和离线包构建设计。

**关键特性**：
- **全扩展安装**：安装 PostgreSQL 18 的所有分类扩展包
- **多版本软件源**：本地软件源包含 PostgreSQL 13-18 全部六个大版本
- **完整组件栈**：包含 MinIO 备份、Docker 应用、VIP 等功能
- **企业级组件**：包含 Kafka、PolarDB、IvorySQL、TigerBeetle 等

**软件源内容**：

| 分类 | 说明 |
|:--|:--|
| PostgreSQL 13-18 | 六个大版本的内核和全部扩展 |
| 扩展分类包 | `time`, `gis`, `rag`, `fts`, `olap`, `feat`, `lang`, `type`, `util`, `func`, `admin`, `stat`, `sec`, `fdw`, `sim`, `etl` |
| 企业组件 | Kafka、Java 运行时、Sealos、TigerBeetle |
| 数据库内核 | PolarDB、IvorySQL |

**与 rich 的区别**：
- `fat` 包含 PostgreSQL 13-18 全部六个版本，`rich` 只包含当前默认版本
- `fat` 包含额外的企业组件（Kafka、PolarDB、IvorySQL 等）
- `fat` 需要更大的磁盘空间和更长的构建时间

**适用场景**：
- Pigsty 开发测试与功能验证
- 构建完整的多版本离线软件包
- 需要测试全部扩展兼容性的场景
- 企业环境预先缓存所有软件包

**注意事项**：
- 需要较大磁盘空间（建议 100GB+）用于存储所有软件包
- 构建本地软件源需要较长时间
- 部分扩展在 ARM64 架构不可用
- 默认密码为示例密码，生产环境务必修改

