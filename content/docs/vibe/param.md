---
title: 参数列表
weight: 4820
description: VIBE 模块参数详解（共 16 项）。
icon: fas fa-cog
module: [VIBE]
categories: [参数]
---

VIBE 模块共有 **16** 个参数，分为：

- 通用参数
- Code-Server 参数
- JupyterLab 参数
- Node.js 参数
- Claude Code 参数

--------

## 参数概览

| 参数 | 类型 | 级别 | 默认值 | 说明 |
|:-----|:----:|:----:|:------|:-----|
| [`vibe_data`](#vibe_data) | `path` | `C` | `/fs` | 工作目录 |
| [`code_enabled`](#code_enabled) | `bool` | `C` | `true` | 启用 Code-Server |
| [`code_port`](#code_port) | `port` | `C` | `8443` | Code-Server 端口 |
| [`code_data`](#code_data) | `path` | `C` | `/data/code` | Code-Server 数据目录 |
| [`code_password`](#code_password) | `string` | `C` | `Vibe.Coding` | Code-Server 密码 |
| [`code_gallery`](#code_gallery) | `enum` | `C` | `openvsx` | 扩展市场 |
| [`jupyter_enabled`](#jupyter_enabled) | `bool` | `C` | `false` | 启用 JupyterLab |
| [`jupyter_port`](#jupyter_port) | `port` | `C` | `8888` | JupyterLab 端口 |
| [`jupyter_data`](#jupyter_data) | `path` | `C` | `/data/jupyter` | JupyterLab 数据目录 |
| [`jupyter_password`](#jupyter_password) | `string` | `C` | `Vibe.Coding` | JupyterLab Token |
| [`jupyter_venv`](#jupyter_venv) | `path` | `C` | `/data/venv` | Python venv 路径 |
| [`nodejs_enabled`](#nodejs_enabled) | `bool` | `C` | `true` | 启用 Node.js |
| [`nodejs_registry`](#nodejs_registry) | `url` | `C` | `''` | npm 镜像地址 |
| [`npm_packages`](#npm_packages) | `string[]` | `C` | `['@anthropic-ai/claude-code','happy-coder']` | 全局 npm 包 |
| [`claude_enabled`](#claude_enabled) | `bool` | `C` | `true` | 启用 Claude 配置 |
| [`claude_env`](#claude_env) | `dict` | `C` | `{}` | Claude 环境变量 |
{.full-width}

--------

## 默认参数

定义于 [`roles/vibe/defaults/main.yml`](https://github.com/pgsty/pigsty/blob/main/roles/vibe/defaults/main.yml)：

```yaml
vibe_data: /fs

code_enabled: true
code_port: 8443
code_data: /data/code
code_password: Vibe.Coding
code_gallery: 'openvsx'

jupyter_enabled: false
jupyter_port: 8888
jupyter_data: /data/jupyter
jupyter_password: Vibe.Coding
jupyter_venv: /data/venv

nodejs_enabled: true
nodejs_registry: ''
npm_packages: [ '@anthropic-ai/claude-code' , 'happy-coder' ]

claude_enabled: true
claude_env: {}
```

--------

## 通用参数

### `vibe_data`

工作目录，Code-Server 与 JupyterLab 的默认根目录，`CLAUDE.md` 与 `AGENTS.md` 也会写入此处。

--------

## Code-Server

### `code_enabled`

是否启用 Code-Server。

### `code_port`

监听端口，绑定 `127.0.0.1`，由 Nginx `/code/` 转发。

### `code_data`

用户数据目录，配置文件位于 `code_data/code-server/config.yaml`（默认 `/data/code/code-server/config.yaml`）。

### `code_password`

登录密码，生产环境必须修改。

### `code_gallery`

扩展市场：`openvsx` / `microsoft`。
当 `region=china` 且选择 `openvsx` 时会自动使用清华镜像。

--------

## JupyterLab

### `jupyter_enabled`

是否启用 JupyterLab。
模块默认值为 `false`，`conf/vibe.yml` 中会显式改为 `true` 以启用完整沙箱。

### `jupyter_port`

监听端口，默认 `0.0.0.0:8888`。

### `jupyter_data`

数据目录，配置文件位于 `jupyter_data/jupyter_config.py`（默认 `/data/jupyter/jupyter_config.py`）。

### `jupyter_password`

访问 Token，写入 `c.IdentityProvider.token`。

### `jupyter_venv`

JupyterLab 使用的 Python venv 路径，需要预先创建（通常由 `NODE` 模块完成）。

--------

## Node.js

### `nodejs_enabled`

是否启用 Node.js。

### `nodejs_registry`

npm 镜像地址，`region=china` 且为空时自动使用 `https://registry.npmmirror.com`。

### `npm_packages`

全局安装的 npm 包列表，对应标签 `nodejs_pkg`。
默认包含 `@anthropic-ai/claude-code` 与 `happy-coder`。

--------

## Claude Code

### `claude_enabled`

启用 Claude Code 配置任务（`claude_config`）。
Claude CLI 默认由 `nodejs_pkg` 根据 `npm_packages` 安装。

### `claude_env`

额外环境变量，合并至默认 OpenTelemetry 配置。

默认环境变量包括：

- `CLAUDE_CODE_ENABLE_TELEMETRY=1`
- `CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS=1`
- `OTEL_METRICS_EXPORTER=otlp`
- `OTEL_LOGS_EXPORTER=otlp`
- `OTEL_EXPORTER_OTLP_METRICS_ENDPOINT=http://127.0.0.1:8428/opentelemetry/v1/metrics`
- `OTEL_EXPORTER_OTLP_LOGS_ENDPOINT=http://127.0.0.1:9428/insert/opentelemetry/v1/logs`
