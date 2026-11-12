---
title: 常见问题
weight: 4860
description: VIBE 模块常见问题解答。
icon: fas fa-question-circle
module: [VIBE]
categories: [FAQ]
---

--------

## 部署问题

### code-server 软件包找不到

确认已部署 [`NODE`](/docs/node) 与仓库配置：

```bash
yum repolist    # EL
apt update      # Debian/Ubuntu
./infra.yml -t repo
```

### JupyterLab 未部署或安装失败

1. `jupyter_enabled` 默认值为 `false`（仅 `conf/vibe.yml` 模板显式设为 `true`），单独执行 `-t jupyter` 时请确认已在清单开启或附带 `-e jupyter_enabled=true`
2. 确认目标节点已由 [`NODE`](/docs/node) 模块安装 `uv`（`jupyter_install` 会自动调用 `uv venv` 创建 `jupyter_venv` 并安装 `jupyterlab` 与 `ipykernel`）

```bash
which uv
./vibe.yml -l <host> -t jupyter -e jupyter_enabled=true
```

--------

## 访问问题

### 无法访问 `/code/` 或 `/jupyter/`

1. 检查服务状态
2. 检查端口监听
3. 检查 Nginx 配置

```bash
systemctl status code-server
systemctl status jupyter
ss -tlnp | grep 8443
ss -tlnp | grep 8888
nginx -t
```

### WebSocket 连接失败

确保 Nginx 配置启用 WebSocket（默认已配置）。
若使用自定义 `infra_portal`，需配置 `websocket: true`。

--------

## 密码与 Token

### 修改 Code-Server 密码

```bash
./vibe.yml -l <host> -e code_password='NewPass' -t code_config,code_launch
```

### 修改 JupyterLab Token

`jupyter_launch` 在检测到配置文件变更时会自动重启 `jupyter` 服务（若清单中未开启 `jupyter_enabled: true`，需一并传入 `-e jupyter_enabled=true`）：

```bash
./vibe.yml -l <host> -e jupyter_enabled=true -e jupyter_password='NewToken' -t jupyter_config,jupyter_launch
```

--------

## Claude Code

### CLI 找不到命令

Claude Code 通过 `pigsty-infra` 原生系统包安装（默认包名 `claude`），请检查软件源与 `claude_install` 是否执行成功：

```bash
which claude
rpm -q claude || dpkg -l claude
./vibe.yml -l <host> -t claude_install
```

如果你禁用了 `claude_enabled`，可通过系统包管理器手工安装：

```bash
yum install -y claude      # EL
apt install -y claude      # Debian/Ubuntu
```

如需切换为软件源提供的新官方包名，可在配置中设置 `claude_package: claude-code`。

### Codex CLI 找不到命令

Codex CLI 同样通过 `pigsty-infra` 原生系统包 `codex` 安装：

```bash
which codex
rpm -q codex || dpkg -l codex
./vibe.yml -l <host> -t codex_install
```

确认 `codex_enabled: true` 且节点已挂载 `pigsty-infra` 软件源。VIBE 仅安装 Codex CLI，不负责生成 Codex 配置。

### API Key 未配置

```bash
export ANTHROPIC_API_KEY=sk-ant-xxx
# 或配置到 claude_env 后执行 ./vibe.yml -l <host> -t claude_config
```

### 监控数据不显示

检查控制平面（`<admin_ip>`，单机部署即 `127.0.0.1`）上的 VictoriaMetrics / VictoriaLogs 可达性：

```bash
curl http://<admin_ip>:8428/api/v1/status/buildinfo
curl http://<admin_ip>:9428/select/logsql/stats_query
```

确保 `~/.claude/settings.json` 中 OTEL 端点（`http://<admin_ip>:8428/opentelemetry/v1/metrics` 与 `http://<admin_ip>:9428/insert/opentelemetry/v1/logs`）可达。

--------

## 扩展与插件

### Code-Server 扩展安装失败

- 检查网络
- 尝试切换 `code_gallery`
- 或手动安装 VSIX

```bash
code-server --install-extension /path/to/extension.vsix
```

### JupyterLab 扩展安装失败

```bash
source /data/venv/bin/activate
pip install jupyterlab-git
systemctl restart jupyter
```
