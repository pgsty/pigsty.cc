---
title: 功能配置
weight: 4810
description: VIBE 模块配置说明（Code-Server、JupyterLab、Node.js 与 Claude Code）。
icon: fas fa-sliders
module: [VIBE]
categories: [配置]
---

VIBE 模块支持按需启用组件，并通过统一的工作目录和 Nginx 入口对外提供服务。

--------

## 配置概览

| 组件          | 启用参数              | 默认状态 | 说明               |
|:------------|:------------------|:----:|:-----------------|
| Code-Server | `code_enabled`    |  启用  | 浏览器 VS Code      |
| JupyterLab  | `jupyter_enabled` |  禁用  | Notebook/终端/编辑器  |
| Node.js     | `nodejs_enabled`  |  启用  | Node.js 运行时与 npm |
| Claude Code | `claude_enabled`  |  启用  | CLI 安装、配置与可观测性   |
| Codex CLI   | `codex_enabled`   |  启用  | 仅安装 CLI，不托管配置    |
{.full-width}

说明：模块默认 `jupyter_enabled: false`，但 `conf/vibe.yml` 预置模板会显式设置为 `true`。

配置通常位于集群 `vars`，也可以在实例级别覆盖：

```yaml
all:
  children:
    infra:
      hosts:
        10.10.10.10:
          vibe_data: /fs
          code_enabled: true
          jupyter_enabled: true
          claude_enabled: true
          codex_enabled: true
```

--------

## 工作目录

`vibe_data` 作为 VIBE 的统一工作区：

- Code-Server 默认打开目录
- JupyterLab `root_dir`
- Claude Code 的工作目录
- `CLAUDE.md` / `AGENTS.md` 上下文文件

`vibe_dir` 任务会创建目录并写入上下文文件，文件属主为 `node_user`。

```yaml
vibe_data: /fs
```

--------

## Code-Server 配置

```yaml
code_enabled: true
code_port: 8443
code_data: /data/code
code_password: Vibe.Coding
code_gallery: openvsx
```

说明：

- 服务监听 `127.0.0.1:<code_port>`（默认 8443），通过 Nginx `/code/` 访问
- 配置文件：`code_data/code-server/config.yaml`（默认 `/data/code/code-server/config.yaml`）
- 环境文件：`/etc/default/code`，用于配置扩展市场

扩展市场：

- `code_gallery: microsoft` 使用微软官方市场
- `region=china` 时默认切换 Open VSX 清华镜像

--------

## JupyterLab 配置

```yaml
jupyter_enabled: true
jupyter_port: 8888
jupyter_data: /data/jupyter
jupyter_password: Vibe.Coding
jupyter_venv: /data/venv
```

说明：

- 服务监听 `0.0.0.0:<jupyter_port>`（默认 8888），基路径为 `/jupyter/`
- 配置文件：`jupyter_data/jupyter_config.py`（默认 `/data/jupyter/jupyter_config.py`）
- 登录 Token：`c.IdentityProvider.token`
- **不会自动创建 venv**，建议通过 `NODE` 模块的 `node_uv_env` 预先创建

创建 venv 示例：

```bash
uv venv /data/venv
```

--------

## Node.js 配置

```yaml
nodejs_enabled: true
nodejs_registry: ''
npm_packages: []
```

说明：

- `nodejs_registry` 为空时，`region=china` 会自动使用 `https://registry.npmmirror.com`
- `npm_packages` 用于安装额外的全局 npm 包，默认为空
- Claude Code 与 Codex CLI 由各自的独立任务安装

--------

## Claude Code 配置

`claude` 子任务同时执行 CLI 安装（`claude_install`）与配置写入（`claude_config`）。

```yaml
claude_enabled: true
claude_package: '@anthropic-ai/claude-code'
claude_env:
  ANTHROPIC_API_KEY: sk-ant-xxx
```

启用 Claude 或 Codex 时，VIBE 会确保 Node.js 运行时已经安装。需要替换 Claude npm 包时，可覆盖 `claude_package`。

生成的文件：

- `~/.claude.json`
- `~/.claude/settings.json`

`claude_env` 会与默认 OpenTelemetry 环境变量合并，默认上报到 VictoriaMetrics / VictoriaLogs。

--------

## Codex CLI 配置

```yaml
codex_enabled: true
```

`codex` 子任务执行 `npm install -g @openai/codex`。VIBE 仅安装 Codex CLI，不写入 Codex 配置，也不接入 VIBE 的 Claude Code 可观测性。

--------

## Nginx 入口

VIBE 通过 [`infra_portal`](/docs/infra/param#infra_portal) 暴露服务。
默认 `home` 域名自动包含 `/code/` 与 `/jupyter/` 子路径。

如需独立域名：

```yaml
infra_portal:
  code: { domain: code.pigsty, endpoint: "127.0.0.1:8443", websocket: true }
  jupyter: { domain: jupyter.pigsty, endpoint: "127.0.0.1:8888", websocket: true }
```
