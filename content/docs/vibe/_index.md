---
title: 模块：VIBE
weight: 4800
description: 使用 Pigsty 部署 AI 编程沙箱：Code-Server、JupyterLab、Node.js 与 Claude Code。
icon: fas fa-laptop-code
module: [VIBE]
categories: [参考]
---

VIBE 模块提供一套 **浏览器化开发环境**，包含 Code-Server、JupyterLab、Node.js 与 Claude Code 的协同配置，
并可与 [`JUICE`](/docs/juice) 共享存储和 [`PGSQL`](/docs/pgsql) 数据库能力配合使用。

VIBE 依赖 [`NODE`](/docs/node) 与 [`INFRA`](/docs/infra)：

- `NODE` 负责基础软件与 Python `uv` 环境
- `INFRA` 提供 Nginx 反向代理、Grafana 等可视化入口

--------

## 组件一览

| 组件 | 说明 | 本地端口 | 访问路径 |
|:-----|:-----|:--------:|:---------|
| Code-Server | VS Code 浏览器版 | 8443 | `/code/` |
| JupyterLab | 交互式 Notebook | 8888 | `/jupyter/` |
| Node.js | 运行时与 npm | - | CLI |
| Claude Code | CLI + 可观测性配置 | - | CLI / Grafana |
{.full-width}

说明：

- Code-Server 仅监听 `127.0.0.1:8443`，通过 Nginx 暴露
- JupyterLab 监听 `0.0.0.0:8888`，默认基路径为 `/jupyter/`

--------

## 快速开始

```bash
./configure -c vibe
./deploy.yml        # 部署 NODE + INFRA + PGSQL
./juice.yml         # 可选，部署共享存储
./vibe.yml          # 部署 VIBE
```

默认访问入口（通过 `infra_portal.home`）：

- Code-Server：`https://<domain>/code/`
- JupyterLab：`https://<domain>/jupyter/`
- Claude Dashboard：`https://<domain>/ui/d/claude-code`

--------

## 模块特点

- **统一工作区**：`vibe_data` 作为 Code-Server 与 Jupyter 的根目录
- **可选共享存储**：配合 `JUICE` 实现多节点共享
- **可观测性**：Claude Code OpenTelemetry 默认对接 VictoriaMetrics/VictoriaLogs
- **可组件化**：Code/Jupyter/Node.js/Claude 可按需启用

--------

## 文档目录

- [**配置说明**](/docs/vibe/config)：组件配置与工作目录设置
- [**参数详解**](/docs/vibe/param)：VIBE 参数列表与默认值
- [**剧本说明**](/docs/vibe/playbook)：`vibe.yml` 使用与标签
- [**管理手册**](/docs/vibe/admin)：运维、密码与扩展管理
- [**监控集成**](/docs/vibe/monitor)：Claude Code 监控与日志
- [**常见问题**](/docs/vibe/faq)：FAQ
