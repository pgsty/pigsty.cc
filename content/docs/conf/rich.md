---
title: rich
weight: 765
description: 功能丰富的单节点配置，构建本地软件源，下载所有扩展，启用 MinIO 备份，预置完整示例
icon: fa-solid fa-gem
categories: [参考]
---


配置模板 [`rich`](https://github.com/Vonng/pigsty/blob/main/conf/rich.yml) 是 [`meta`](/docs/conf/meta/) 的增强版本，专为需要完整功能体验的用户设计。

如果您希望构建本地软件源、使用 MinIO 存储备份、运行 Docker 应用，或需要预置业务数据库，可以使用此模板。


--------

## 配置概览

- 配置名称： `rich`
- 节点数量： 单节点
- 配置说明：功能丰富的单节点配置，在 `meta` 基础上增加本地软件源、MinIO 备份、完整扩展、Docker 应用示例
- 适用系统：`el8`, `el9`, `el10`, `d12`, `d13`, `u22`, `u24`
- 适用架构：`x86_64`, `aarch64`
- 相关配置：[`meta`](/docs/conf/meta/)，[`slim`](/docs/conf/slim/)，[`fat`](/docs/conf/fat/)

此模板相比 `meta` 的主要增强：

- 构建本地软件源（`repo_enabled: true`），下载所有 PG 扩展
- 启用单节点 MinIO 作为 PostgreSQL 备份存储
- 预置 TimescaleDB、pgvector、pg_wait_sampling 等扩展
- 包含详细的用户/数据库/服务定义注释示例
- 添加 Redis 主从实例示例
- 预置 pg-test 三节点高可用集群配置存根

启用方式：

```bash
./configure -c rich [-i <primary_ip>]
```


--------

## 配置内容

源文件地址：[`pigsty/conf/rich.yml`](https://github.com/Vonng/pigsty/blob/main/conf/rich.yml)

{{< readfile file="yaml/rich.yml" code="true" lang="yaml" >}}


--------

## 配置解读

`rich` 模板是 Pigsty 的 **完整功能展示配置**，适合需要深入体验所有功能的用户。

**适用场景**：
- 需要构建本地软件源的离线环境
- 需要使用 MinIO 作为 PostgreSQL 备份存储
- 需要预先规划多个业务数据库和用户
- 需要运行 Docker 应用（pgAdmin、Bytebase 等）
- 希望了解配置参数完整用法的学习者

**与 meta 的主要区别**：
- 启用本地软件源构建（`repo_enabled: true`）
- 启用 MinIO 存储备份（`pgbackrest_method: minio`）
- 预装 TimescaleDB、pg_wait_sampling 等额外扩展
- 包含详细的参数注释，便于理解配置含义
- 预置高可用集群存根配置（pg-test）

**注意事项**：
- ARM64 架构部分扩展不可用，请按需调整
- 构建本地软件源需要较长时间和较大磁盘空间
- 默认密码为示例密码，生产环境务必修改

