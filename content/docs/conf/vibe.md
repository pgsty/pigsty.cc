---
title: vibe
weight: 795
description: VIBE AI 编程沙箱配置模板，集成 Code-Server、JupyterLab、Claude Code 与 JuiceFS 的 Web 开发环境
icon: fa-solid fa-laptop-code
categories: [参考]
---

`vibe` 配置模板提供了一个开箱即用的 **AI 编程沙箱**，集成了 Code-Server（Web VS Code）、JupyterLab、Claude Code CLI，以及 JuiceFS 分布式文件系统和功能丰富的 PostgreSQL 数据库。


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
| **Claude Code** | AI 编程助手 CLI，内置 OpenTelemetry 可观测性 | 终端使用 `claude` 命令 |
| **JuiceFS** | 基于 PostgreSQL 的分布式文件系统 | 挂载点 `/fs` |
| **PostgreSQL 18** | 功能丰富的数据库，预装向量/时序/全文搜索扩展 | `5432` 端口 |

**预装开发工具**：

- **AI 助手**：`claude`（Claude Code CLI）、`opencode`（命令行 AI 编程工具）
- **语言运行时**：`golang`、`nodejs`、`uv`（Python 包管理器）
- **数据工具**：`postgrest`（自动 REST API）、`genai-toolbox`
- **实用工具**：`restic`、`rclone`（备份同步）、`asciinema`（终端录制）

**PostgreSQL 扩展**：

此模板预装了丰富的 PostgreSQL 扩展，覆盖 AI/向量、时序、全文搜索、分析等场景：

```
# 向量与 AI
pgvector, vchord, pgvectorscale, pg_search, pg_textsearch, vchord_bm25

# 时序与地理
timescaledb, postgis, pg_cron

# 分析与湖仓
pg_duckdb, pg_mooncake, pg_clickhouse, pg_parquet

# 安全与审计
pg_anon, pgsmcrypto, credcheck, pg_vault, pgsodium, pg_session_jwt

# 开发辅助
pg_tle, pljs, plprql, documentdb, pglinter
```


--------

## VIBE 模块组件

VIBE 模块是 v4.1.0 的 AI 编程沙箱模块，包含三个核心组件：

**Code-Server**：浏览器中的 VS Code

- 完整的 VS Code 功能，支持扩展安装
- 通过 Nginx 反向代理提供 HTTPS 访问
- 支持 Open VSX 和 Microsoft 扩展商店
- 相关参数：`code_enabled`, `code_port`, `code_data`, `code_password`, `code_gallery`

**JupyterLab**：交互式计算环境

- 支持 Python/SQL/Markdown 笔记本
- 预配置 Python venv 数据科学库
- 通过 Nginx 反向代理提供 HTTPS 访问
- 相关参数：`jupyter_enabled`, `jupyter_port`, `jupyter_data`, `jupyter_password`, `jupyter_venv`

**Claude Code**：AI 编程助手

- 配置 Claude Code CLI，跳过初始引导
- 内置 OpenTelemetry 配置，将指标/日志发送到 Victoria 堆栈
- 提供 `claude-code` 仪表盘监控使用情况
- 相关参数：`claude_enabled`, `claude_env`


--------

## JuiceFS 文件系统

此模板使用 **JuiceFS** 提供分布式文件系统能力，特别之处在于：**元数据和数据都存储在 PostgreSQL 中**。

**架构特点**：

- **元数据引擎**：使用 PostgreSQL 存储文件系统元数据
- **数据存储**：使用 PostgreSQL 大对象（Large Object）存储文件数据
- **挂载点**：默认挂载到 `/fs` 目录（由 `vibe_data` 参数控制）
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
# 密码：Code.Server（请修改）

# JupyterLab
http://<ip>/jupyter
# 密码：Jupyter.Lab（请修改）

# Claude Code 仪表盘
http://<ip>:3000/d/claude-code
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
- **网络安全**：此模板开放了全网访问（`addr: world`），生产环境请配置防火墙或 VPN
- **资源需求**：建议至少 2 核 4GB 内存，SSD 磁盘
- **精简架构**：此模板禁用了 Patroni、PgBouncer 等高可用组件，适合单节点开发环境
- **Claude API**：使用 Claude Code 需要配置 `claude_env` 中的 API 密钥
