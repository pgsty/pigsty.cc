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
- 渲染 `AGENTS.md` 上下文文件（若存在旧版符号链接会先清理），并创建指向它的 `CLAUDE.md` 符号链接

`vibe_dir` 任务会创建目录并写入上下文文件，文件属主为 `node_user`（未定义时默认为 `root`）。

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
- 若 `<jupyter_venv>/bin/python` 不存在，`jupyter_install` 会自动调用 `uv venv` 创建虚拟环境，并在 `<jupyter_venv>/bin/jupyter` 不存在时自动安装 `jupyterlab` 与 `ipykernel`（也可配合 `NODE` 模块预置的 `/data/venv` 复用同一环境）

手工创建或复用 venv 示例：

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

- `nodejs` 是完全独立的运行时组件，仅受 `nodejs_enabled` 控制，与 `claude` / `codex` 解耦
- `nodejs_config` 会自动探测全局 npm 配置文件（`npm config get globalconfig`，回退 `/etc/npmrc`），并写入全局安装前缀 `prefix=/usr/local`
- `nodejs_registry` 为空时，`region=china` 会自动使用 `https://registry.npmmirror.com`
- `npm_packages` 用于通过 `npm install -g` 安装额外的全局 npm 包，默认为空
- Claude Code 与 Codex CLI 通过 `pigsty-infra` 原生系统软件包安装，不依赖 npm

--------

## Claude Code 配置

`claude` 子任务同时执行原生软件包安装（`claude_install`）与配置写入（`claude_config`）。

```yaml
claude_enabled: true
claude_package: claude
claude_env:
  ANTHROPIC_API_KEY: sk-ant-xxx
```

`claude_install` 通过系统包管理器（APT/YUM）从 `pigsty-infra` 软件源安装 `claude_package`（默认为 `claude`；软件源中亦提供新官方包名 `claude-code`，可按需覆盖 `claude_package: claude-code`）。

生成与维护的文件（位于 `~<node_user>/` 下，权限 `0600`）：

- `~/.claude.json`：写入跳过首次引导与权限确认的初始状态，采用 `force: false`（若文件已存在则不覆盖用户状态）
- `~/.claude/settings.json`：读取已有配置后执行非破坏性 `combine` 合并，保留用户自定义顶层字段与自定义 `env` 键，同时刷新受管的 OpenTelemetry 默认项并应用 `claude_env` 覆盖项（值为 `null` 的键会被剔除）

默认 OpenTelemetry 端点会自动指向控制平面 `admin_ip`（未定义时回退 `127.0.0.1`）上的 `vmetrics_port`（默认 `8428`）与 `vlogs_port`（默认 `9428`），支持非管理节点直接向中心 VictoriaMetrics / VictoriaLogs 上报遥测数据。

--------

## Codex CLI 配置

```yaml
codex_enabled: true
```

`codex` 子任务通过系统包管理器从 `pigsty-infra` 软件源安装原生软件包 `codex`。VIBE 仅安装 Codex CLI，不写入 Codex 配置，也不接入 VIBE 的 Claude Code 可观测性。

--------

## Nginx 入口

VIBE 通过 [`infra_portal`](/docs/infra/param#infra_portal) 暴露服务。
默认 `home` 域名自动包含 `/code/` 与 `/jupyter/` 子路径。

如需独立域名：

```yaml
infra_portal:
  code: { domain: code.pigsty, endpoint: "127.0.0.1:8443", websocket: true, auth: true }
  jupyter: { domain: jupyter.pigsty, endpoint: "127.0.0.1:8888", websocket: true, auth: true }
nginx_users:
  devadmin: '<strong-password>'
```
