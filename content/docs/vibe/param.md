---
title: 参数列表
weight: 4820
description: VIBE 模块参数详解（共 18 项）。
icon: fas fa-cog
module: [VIBE]
categories: [参数]
---

VIBE 模块共有 **18** 个参数，分为：

- 通用参数
- Code-Server 参数
- JupyterLab 参数
- Node.js 参数
- Claude Code 参数
- Codex CLI 参数

--------

## 参数概览

| 参数                                      |     类型     | 级别  | 默认值                         | 说明                |
|:----------------------------------------|:----------:|:---:|:----------------------------|:------------------|
| [`vibe_data`](#vibe_data)               |   `path`   | `C` | `/fs`                       | 工作目录              |
| [`code_enabled`](#code_enabled)         |   `bool`   | `C` | `true`                      | 启用 Code-Server    |
| [`code_port`](#code_port)               |   `port`   | `C` | `8443`                      | Code-Server 端口    |
| [`code_data`](#code_data)               |   `path`   | `C` | `/data/code`                | Code-Server 数据目录  |
| [`code_password`](#code_password)       |  `string`  | `C` | `Vibe.Coding`               | Code-Server 密码    |
| [`code_gallery`](#code_gallery)         |   `enum`   | `C` | `openvsx`                   | 扩展市场              |
| [`jupyter_enabled`](#jupyter_enabled)   |   `bool`   | `C` | `false`                     | 启用 JupyterLab     |
| [`jupyter_port`](#jupyter_port)         |   `port`   | `C` | `8888`                      | JupyterLab 端口     |
| [`jupyter_data`](#jupyter_data)         |   `path`   | `C` | `/data/jupyter`             | JupyterLab 数据目录   |
| [`jupyter_password`](#jupyter_password) |  `string`  | `C` | `Vibe.Coding`               | JupyterLab Token  |
| [`jupyter_venv`](#jupyter_venv)         |   `path`   | `C` | `/data/venv`                | Python venv 路径    |
| [`nodejs_enabled`](#nodejs_enabled)     |   `bool`   | `C` | `true`                      | 启用 Node.js        |
| [`nodejs_registry`](#nodejs_registry)   |   `url`    | `C` | `''`                        | npm 镜像地址          |
| [`npm_packages`](#npm_packages)         | `string[]` | `C` | `[]`                        | 额外全局 npm 包        |
| [`claude_enabled`](#claude_enabled)     |   `bool`   | `C` | `true`        | 安装并配置 Claude Code  |
| [`claude_package`](#claude_package)     |  `string`  | `C` | `claude`      | Claude Code 系统软件包名 |
| [`claude_env`](#claude_env)             |   `dict`   | `C` | `{}`          | Claude 环境变量        |
| [`codex_enabled`](#codex_enabled)       |   `bool`   | `C` | `true`        | 安装 Codex CLI 软件包   |
{.full-width .wide .expand}

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
npm_packages: []

claude_enabled: true
claude_package: claude
claude_env: {}

codex_enabled: true
```

--------

## 通用参数

### `vibe_data`

工作目录，默认值为 `/fs`。Code-Server 与 JupyterLab 默认以此作为工作区根目录；`vibe_dir` 会在这里渲染 `AGENTS.md`，并创建指向它的 `CLAUDE.md` 符号链接。

--------

## Code-Server

### `code_enabled`

是否启用 Code-Server，默认值为 `true`。

### `code_port`

监听端口，默认值为 `8443`；绑定 `127.0.0.1`，由 Nginx `/code/` 转发。

### `code_data`

用户数据目录，配置文件位于 `code_data/code-server/config.yaml`（默认 `/data/code/code-server/config.yaml`）。

### `code_password`

登录密码，默认值为 `Vibe.Coding`，生产环境必须修改。

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

访问 Token，默认值为 `Vibe.Coding`，写入 `c.IdentityProvider.token`。

### `jupyter_venv`

JupyterLab 使用的 Python venv 路径，默认值为 `/data/venv`。若 `<jupyter_venv>/bin/python` 不存在，`jupyter_install` 任务会自动调用 `uv venv` 创建虚拟环境，并在 `<jupyter_venv>/bin/jupyter` 不存在时自动安装 `jupyterlab` 与 `ipykernel`。

--------

## Node.js

### `nodejs_enabled`

是否启用独立的 Node.js 安装与配置任务，默认值为 `true`。该开关与 `claude_enabled` / `codex_enabled` 完全解耦；启用时 `nodejs_config` 还会将全局 npm 安装前缀统一设为 `prefix=/usr/local`。

### `nodejs_registry`

npm 镜像地址，`region=china` 且为空时自动使用 `https://registry.npmmirror.com`。

### `npm_packages`

额外全局安装的 npm 包列表，对应标签 `nodejs_pkg`，默认为空。
Claude Code 与 Codex CLI 均由各自的独立任务通过原生系统包安装，不需要加入此列表。

--------

## Claude Code

### `claude_enabled`

启用 Claude Code 安装与配置任务，默认值为 `true`。`claude_install` 安装原生系统软件包，`claude_config` 非破坏性合并写入 `~/.claude/settings.json` 并初始化 `~/.claude.json`（`force: false`）。

### `claude_package`

Claude Code 使用的 `pigsty-infra` 原生系统软件包名，默认为 `claude`（仓库亦提供新官方包名 `claude-code`，可按需覆盖）。

### `claude_env`

额外环境变量，非破坏性合并至 `~/.claude/settings.json` 的 `env` 字典（优先级高于受管默认项，且保留文件中已有的其他用户自定义键）。

默认环境变量包括（其中 `<admin_ip>` 默认回退 `127.0.0.1`，端口取 `vmetrics_port: 8428` 与 `vlogs_port: 9428`）：

- `CLAUDE_CODE_ENABLE_TELEMETRY=1`
- `OTEL_METRICS_EXPORTER=otlp`
- `OTEL_LOGS_EXPORTER=otlp`
- `OTEL_EXPORTER_OTLP_METRICS_PROTOCOL=http/protobuf`
- `OTEL_EXPORTER_OTLP_LOGS_PROTOCOL=http/protobuf`
- `OTEL_EXPORTER_OTLP_METRICS_ENDPOINT=http://<admin_ip>:<vmetrics_port>/opentelemetry/v1/metrics`
- `OTEL_EXPORTER_OTLP_LOGS_ENDPOINT=http://<admin_ip>:<vlogs_port>/insert/opentelemetry/v1/logs`
- `OTEL_RESOURCE_ATTRIBUTES=ip=<inventory_hostname>,job=claude`

--------

## Codex CLI

### `codex_enabled`

是否安装 Codex CLI，默认为 `true`。启用后，`codex_install` 任务通过系统包管理器从 `pigsty-infra` 软件源安装原生软件包 `codex`。
VIBE 只负责安装 Codex CLI，不托管 Codex 配置，也不为其配置 OpenTelemetry。
