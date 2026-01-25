---
title: 模块：VIBE
weight: 4800
description: 使用 Pigsty 部署 AI 编程沙箱，包含 Code-Server、JupyterLab 和 Claude Code 三大组件。
icon: fas fa-laptop-code
module: [VIBE]
categories: [参考]
---

VIBE 模块提供了一套完整的 **云端开发环境**，将浏览器中的 VS Code、交互式计算平台 JupyterLab 以及 AI 辅助编程工具 Claude Code 整合在一起，
配合 JuiceFS 分布式文件系统和功能丰富的 PostgreSQL 数据库，打造开箱即用的 **AI 编程沙箱**。


--------

## 模块组件

VIBE 模块包含三个核心组件：

| 组件            | 说明                                    | 默认端口    | 访问路径             |
|:--------------|:--------------------------------------|:--------|:-----------------|
| **Code-Server**   | 浏览器中的 VS Code，完整的云端 IDE 体验            | 8443    | `/code/`         |
| **JupyterLab**    | 交互式计算环境，支持 Notebook、终端、编辑器           | 8888    | `/jupyter/`      |
| **Claude Code**   | Anthropic 的 AI 编程助手 CLI 工具，集成可观测性     | -       | CLI / Dashboard  |
{.full-width}


--------

## 架构概览

VIBE 组件部署为 systemd 服务，通过 Nginx 反向代理提供 HTTPS 访问：

```
用户浏览器
    │
    ├── https://h.pigsty/code/     ─────► Code-Server  (127.0.0.1:8443)
    ├── https://h.pigsty/jupyter/  ─────► JupyterLab   (127.0.0.1:8888)
    └── https://h.pigsty:3000/d/claude-code ──► Grafana Dashboard

命令行
    └── ssh user@h.pigsty ──► Claude Code CLI

共享存储
    └── JuiceFS (/fs) ─────► PostgreSQL (元数据 + 数据)
```


--------

## 模块特点

- **云端 IDE**：通过浏览器访问完整的 VS Code 开发环境，随时随地编程
- **交互式计算**：JupyterLab 提供 Notebook、终端、编辑器等多功能界面
- **AI 编程助手**：Claude Code CLI 集成 OpenTelemetry 可观测性，支持监控分析
- **共享存储**：配合 JuiceFS 实现文件系统共享，支持时间点恢复（PITR）
- **丰富的 PostgreSQL**：预装 400+ 扩展，覆盖向量、时序、地理、分析等场景
- **一键部署**：通过 Ansible 剧本自动化安装配置，开箱即用


--------

## 快速开始

### 1. 准备配置

使用 `vibe` 配置模板：

```bash
./configure -c vibe
```

### 2. 部署基础设施

```bash
./deploy.yml    # 部署 INFRA + PGSQL
./juice.yml     # 部署 JuiceFS 共享存储（可选）
```

### 3. 部署 VIBE 模块

```bash
./vibe.yml      # 部署 Code-Server + JupyterLab + Claude Code
```

### 4. 访问服务

| 服务           | 地址                            | 默认凭证            |
|:-------------|:------------------------------|:----------------|
| Code-Server  | `https://<ip>/code/`          | `Code.Server`   |
| JupyterLab   | `https://<ip>/jupyter/`       | `Jupyter.Lab`   |
| Claude 监控   | `https://<ip>:3000/d/claude-code` | Grafana 凭证    |
{.full-width}


--------

## 配置示例

典型的 VIBE 配置示例（参见 [`conf/vibe.yml`](/docs/conf/vibe/)）：

```yaml
all:
  children:
    infra:
      hosts:
        10.10.10.10:
          # VIBE 组件配置
          vibe_data: /fs                    # 工作目录（JuiceFS 挂载点）
          code_enabled: true                # 启用 Code-Server
          code_password: 'Code.Server'      # Code-Server 密码
          jupyter_enabled: true             # 启用 JupyterLab
          jupyter_password: 'Jupyter.Lab'   # JupyterLab Token
          claude_enabled: true              # 启用 Claude Code

          # JuiceFS 共享存储
          juice_instances:
            jfs:
              path: /fs
              meta: postgres://dbuser_meta:DBUser.Meta@10.10.10.10:5432/meta
              data: --storage postgres --bucket postgres://dbuser_meta:DBUser.Meta@10.10.10.10:5432/meta?prefix=juice
```


--------

## 预装工具

VIBE 配置模板预装了以下开发工具：

| 工具             | 说明                           |
|:---------------|:-----------------------------|
| `claude`       | Anthropic Claude Code CLI    |
| `opencode`     | 开源 AI 编程助手                  |
| `code-server`  | 浏览器中的 VS Code               |
| `golang`       | Go 语言工具链                    |
| `nodejs`       | Node.js 运行时                  |
| `uv`           | 高性能 Python 包管理器             |
| `postgrest`    | PostgreSQL RESTful API 服务    |
| `genai-toolbox`| Google GenAI Toolbox MCP 服务 |
| `restic`       | 增量备份工具                      |
| `rclone`       | 云存储同步工具                    |
| `asciinema`    | 终端录屏工具                      |
{.full-width}


--------

## PostgreSQL 扩展

VIBE 配置模板的 PostgreSQL 预装了丰富的扩展：

- **向量搜索**：`pgvector`、`pgvectorscale`
- **时序分析**：`timescaledb`、`pg_timeseries`
- **地理空间**：`postgis`、`h3`、`pgrouting`
- **数据分析**：`pg_duckdb`、`pg_analytics`、`hydra`
- **全文搜索**：`pg_search`、`zhparser`
- **安全增强**：`pg_tde`、`supabase_vault`、`pgsodium`
- **更多扩展**：详见 [扩展目录](https://pgext.cloud)


--------

## 使用场景

- **AI 辅助开发**：利用 Claude Code 进行智能编程，提升开发效率
- **数据科学**：JupyterLab + PostgreSQL + 向量/时序扩展，构建分析平台
- **远程开发**：在任何设备上通过浏览器访问完整开发环境
- **教学培训**：快速搭建标准化的教学环境，降低环境配置门槛
- **原型验证**：快速搭建 PoC 环境，验证技术方案


--------

## 注意事项

{{% alert title="安全提醒" color="warning" %}}
- 请务必修改默认密码（`code_password`、`jupyter_password`）
- 生产环境建议配置防火墙限制访问来源
- Claude Code 需要配置 API Key 才能使用
{{% /alert %}}


--------

## 文档目录

- [**配置说明**](/docs/vibe/config/)：如何配置 VIBE 模块的各个组件
- [**参数详解**](/docs/vibe/param/)：VIBE 模块的所有配置参数
- [**剧本说明**](/docs/vibe/playbook/)：部署和管理 VIBE 的 Ansible 剧本
- [**管理手册**](/docs/vibe/admin/)：日常管理和运维操作指南
- [**监控集成**](/docs/vibe/monitor/)：监控指标和 Dashboard 说明
- [**常见问题**](/docs/vibe/faq/)：使用中的常见问题解答


