---
title: vibe
weight: 795
description: VIBE AI 编程沙箱配置模板，集成 Code-Server、JupyterLab、Claude Code 与 JuiceFS 的 Web 开发环境
icon: fa-solid fa-laptop-code
categories: [参考]
---

`vibe` 配置模板提供了一个开箱即用的 **AI 编程沙箱**，集成了 Code-Server（Web VS Code）、JupyterLab、Claude Code 可观测能力、JuiceFS 分布式文件系统，以及功能丰富的 PostgreSQL 数据库。


--------

## 配置概览

- 配置名称： `vibe`
- 节点数量： 单节点
- 配置说明：VIBE AI 编程沙箱，Code-Server + JupyterLab + Claude Code + JuiceFS + PostgreSQL
- 适用系统：`el8`, `el9`, `el10`, `d12`, `d13`, `u22`, `u24`
- 适用架构：`x86_64`, `aarch64`
- 相关配置：[`meta`](/docs/conf/meta/)

启用方式：

```bash
./configure -c vibe [-i <primary_ip>]
```


--------

## 配置内容

源文件地址：[`pigsty/conf/vibe.yml`](https://github.com/pgsty/pigsty/blob/main/conf/vibe.yml)

{{< readfile file="yaml/vibe.yml" code="true" lang="yaml" >}}


--------

## 配置解读

`vibe` 模板是一个面向 **AI 时代的 Web 编程沙箱**，让您可以在浏览器中完成开发、数据分析、AI 应用构建等任务。

**核心组件**：

| 组件 | 说明 | 访问方式 |
|------|------|---------|
| **Code-Server** | VS Code 的 Web 版本，功能完整的代码编辑器 | `http://<ip>/code` |
| **JupyterLab** | 交互式数据科学笔记本，支持 Python/SQL | `http://<ip>/jupyter` |
| **Claude Code** | AI 编程助手运行环境与可观测性入口（可通过 `claude_env` 定制） | 终端 / 仪表盘 |
| **JuiceFS** | 基于 PostgreSQL 的分布式文件系统 | 挂载点 `/fs` |
| **PostgreSQL 18** | 功能丰富的数据库，安装 `pg18-main` + 全类别扩展包组 | `5432` 端口 |

**模板显式安装的节点工具**（`node_packages`）：

- `openssh-server`, `juicefs`, `restic`, `rclone`
- `uv`, `opencode`, `golang`
- `asciinema`, `tmux`

**PostgreSQL 扩展**：

此模板通过分类包组安装 PostgreSQL 18 的完整扩展集合：

```
pg18-main, pg18-time, pg18-gis, pg18-rag, pg18-fts, pg18-olap,
pg18-feat, pg18-lang, pg18-type, pg18-util, pg18-func, pg18-admin,
pg18-stat, pg18-sec, pg18-fdw, pg18-sim, pg18-etl
```

`meta` 业务库默认创建扩展为 `postgis`、`timescaledb`、`vector`，其余扩展可按需启用。


--------

## VIBE 模块组件

VIBE 模块在 v4.2 系列中提供 AI 编程沙箱能力；`vibe.yml` 显式开启 Code-Server 与 Jupyter，并预留 Claude 自定义入口。

**Code-Server**：浏览器中的 VS Code

- 完整的 VS Code 功能，支持扩展安装
- 通过 Nginx 反向代理提供 HTTPS 访问
- 支持 Open VSX 和 Microsoft 扩展商店
- 模板显式参数：`code_enabled`, `code_password`
- 其余可选参数：`code_port`, `code_data`, `code_gallery`

**JupyterLab**：交互式计算环境

- 支持 Python/SQL/Markdown 笔记本
- 预配置 Python venv 数据科学库
- 通过 Nginx 反向代理提供 HTTPS 访问
- 模板显式参数：`jupyter_enabled`, `jupyter_password`
- 其余可选参数：`jupyter_port`, `jupyter_data`, `jupyter_venv`

**Claude Code**：AI 编程助手

- 使用模块默认行为完成 Claude 运行环境配置
- 可通过 `claude_env` 覆盖模型端点与 API 密钥
- 提供 `claude-code` 仪表盘监控使用情况


--------

## JuiceFS 文件系统

此模板使用 **JuiceFS** 提供分布式文件系统能力，特别之处在于：**元数据和数据都存储在 PostgreSQL 中**。

**架构特点**：

- **元数据引擎**：使用 PostgreSQL 存储文件系统元数据
- **数据存储**：使用 PostgreSQL 大对象（Large Object）存储文件数据
- **挂载点**：默认挂载到 `/fs` 目录（由 `juice_instances.jfs.path` 控制）
- **监控端口**：`9567` 提供 Prometheus 指标

**使用场景**：

- 代码项目的持久化存储
- Jupyter Notebook 的工作目录
- AI 模型和数据集的存储
- 多实例间的文件共享（扩展到多节点时）

**配置示例**：

```yaml
juice_instances:
  jfs:
    path  : /fs
    meta  : postgres://dbuser_meta:DBUser.Meta@10.10.10.10:5432/meta
    data  : --storage postgres --bucket 10.10.10.10:5432/meta --access-key dbuser_meta --secret-key DBUser.Meta
    port  : 9567
```


--------

## 部署步骤

```bash
# 1. 下载 Pigsty
curl https://repo.pigsty.io/get | bash

# 2. 使用 vibe 配置模板
./configure -c vibe

# 3. 修改密码（重要！）
vi pigsty.yml
# 修改 code_password, jupyter_password 等

# 4. 部署基础设施和 PostgreSQL
./deploy.yml

# 5. 部署 JuiceFS 文件系统
./juice.yml

# 6. 部署 VIBE 模块（Code-Server、JupyterLab、Claude Code）
./vibe.yml
```


--------

## 访问方式

部署完成后，通过浏览器访问：

```bash
# Code-Server (VS Code Web)
http://<ip>/code
# 密码：DBUser.Meta（请修改）

# JupyterLab
http://<ip>/jupyter
# 密码：DBUser.Meta（请修改）

# Claude Code 仪表盘
http://<ip>/ui/d/claude-code
# Grafana 默认用户名：admin，密码：pigsty

# PostgreSQL
psql postgres://dbuser_meta:DBUser.Meta@<ip>:5432/meta
```


--------

## 适用场景

- **AI 应用开发**：构建 RAG、Agent、LLM 应用
- **数据科学**：使用 JupyterLab 进行数据分析和可视化
- **远程开发**：在云服务器上搭建 Web IDE 环境
- **教学演示**：提供一致的开发环境供学员使用
- **快速原型**：快速验证想法，无需配置本地环境
- **Claude Code 可观测性**：监控 AI 编程助手的使用情况


--------

## 注意事项

- **必须修改密码**：`code_password` 和 `jupyter_password` 默认值仅供测试
- **网络安全**：此模板默认开放 `5432`（`node_firewall_public_port`）且包含 `addr: world` HBA 规则，生产环境请收紧
- **资源需求**：建议至少 2 核 4GB 内存，SSD 磁盘
- **精简架构**：此模板禁用了 Patroni、PgBouncer 等高可用组件，适合单节点开发环境
- **Claude API**：使用 Claude Code 需要配置 `claude_env` 中的 API 密钥
