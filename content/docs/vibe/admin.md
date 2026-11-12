---
title: 管理预案
weight: 4840
description: VIBE 模块运维操作与常见管理任务。
icon: fas fa-wrench
module: [VIBE]
categories: [管理]
---

--------

## 服务管理

```bash
systemctl status code-server
systemctl restart code-server
systemctl status jupyter
systemctl restart jupyter
```

查看日志：

```bash
journalctl -u code-server -f
journalctl -u jupyter -f
```

--------

## 工作目录与上下文

`vibe_dir` 会在 `vibe_data` 下创建：

- `AGENTS.md`：由角色模板渲染的上下文文件
- `CLAUDE.md`：指向 `AGENTS.md` 的符号链接

默认位置（可由 `vibe_data` 调整）：

```text
/fs/CLAUDE.md
/fs/AGENTS.md
```

--------

## 密码与认证

### Code-Server

修改配置：

```bash
vi /data/code/code-server/config.yaml
systemctl restart code-server
```

或通过 Ansible：

```bash
./vibe.yml -l <host> -e code_password='NewPassword' -t code_config,code_launch
```

### JupyterLab

配置文件位置：`/data/jupyter/jupyter_config.py`

字段：`c.IdentityProvider.token`。

```bash
vi /data/jupyter/jupyter_config.py
systemctl restart jupyter
```

或通过 Ansible 更新并自动重启（若清单中未开启 `jupyter_enabled: true`，需附带 `-e jupyter_enabled=true`）：

```bash
./vibe.yml -l <host> -e jupyter_enabled=true -e jupyter_password='NewToken' -t jupyter_config,jupyter_launch
```

--------

## Code-Server 扩展

```bash
code-server --install-extension ms-python.python
code-server --list-extensions
code-server --uninstall-extension ms-python.python
```

切换扩展市场：

```yaml
code_gallery: microsoft
```

重新部署：

```bash
./vibe.yml -l <host> -t code_config,code_launch
```

--------

## JupyterLab 环境管理

若 `jupyter_venv`（默认 `/data/venv`）不存在，`jupyter_install` 任务会自动调用 `uv venv` 创建虚拟环境并安装 `jupyterlab` 与 `ipykernel`。如需手工初始化 venv：

```bash
uv venv /data/venv
```

手工安装/更新 JupyterLab：

```bash
uv pip install --python /data/venv/bin/python jupyterlab ipykernel
systemctl restart jupyter
```

安装扩展（以 venv 为准）：

```bash
uv pip install --python /data/venv/bin/python jupyterlab-git
systemctl restart jupyter
```

--------

## Claude Code

`claude_install` 子任务从 `pigsty-infra` 软件源安装原生系统包（默认 `claude_package: claude`），`claude_config` 子任务维护配置文件。

```bash
which claude
claude --version
```

配置文件（位于 `~<node_user>/` 下）：

- `~/.claude.json`（首次创建后不覆盖用户状态，`force: false`）
- `~/.claude/settings.json`（非破坏性合并 `env`，保留用户已有自定义配置）

更新配置：

```bash
./vibe.yml -l <host> -t claude_config
```

重装/升级 Claude CLI：

```bash
./vibe.yml -l <host> -t claude_install
# 或通过系统包管理器升级（EL / Debian）
yum install -y claude      # EL
apt install -y claude      # Debian/Ubuntu
```

软件源中亦提供新官方包名 `claude-code`，如需切换可配置 `claude_package: claude-code`。

--------

## Codex CLI

VIBE 通过 `codex_install` 从 `pigsty-infra` 软件源安装原生软件包 `codex`，但不托管 Codex 配置：

```bash
which codex
codex --version
./vibe.yml -l <host> -t codex_install
```

如果需要配置到其他用户，请使用对应的远程登录用户执行或手动拷贝配置文件。

--------

## 文件位置速查

| 组件          | 关键文件                                         |
|:------------|:---------------------------------------------|
| Code-Server | `/data/code/code-server/config.yaml`         |
| Code-Server | `/etc/default/code`                          |
| Code-Server | `/etc/systemd/system/code-server.service`    |
| JupyterLab  | `/data/jupyter/jupyter_config.py`            |
| JupyterLab  | `/etc/default/jupyter`                       |
| JupyterLab  | `/etc/systemd/system/jupyter.service`        |
| Claude Code | `~/.claude.json` / `~/.claude/settings.json` |
{.full-width}

--------

## 故障排查

端口检查：

```bash
ss -tlnp | grep 8443
ss -tlnp | grep 8888
```

Nginx 入口：

```bash
nginx -t
systemctl status nginx
```
