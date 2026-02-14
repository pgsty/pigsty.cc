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

### JupyterLab 安装失败

`jupyter_venv` 必须存在：

```bash
uv venv /data/venv
./vibe.yml -l <host> -t jupyter
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

```bash
./vibe.yml -l <host> -e jupyter_password='NewToken' -t jupyter_config,jupyter_launch
```

--------

## Claude Code

### CLI 找不到命令

先检查 `nodejs_pkg` 是否完成（默认会安装 `@anthropic-ai/claude-code`）：

```bash
which claude
npm list -g --depth=0 | grep '@anthropic-ai/claude-code'
./vibe.yml -l <host> -t nodejs_pkg
```

如果你禁用了 `nodejs_enabled` 或覆盖了 `npm_packages`，可手工安装：

```bash
npm install -g @anthropic-ai/claude-code
```

### API Key 未配置

```bash
export ANTHROPIC_API_KEY=sk-ant-xxx
# 或配置到 claude_env
```

### 监控数据不显示

检查本地 VictoriaMetrics/VictoriaLogs：

```bash
curl http://127.0.0.1:8428/api/v1/status/buildinfo
curl http://127.0.0.1:9428/select/logsql/stats_query
```

确保 `~/.claude/settings.json` 中 OTEL 端点正确。

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
