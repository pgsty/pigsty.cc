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

- `CLAUDE.md`
- `AGENTS.md`（指向 `CLAUDE.md` 的符号链接）

默认位置（可由 `vibe_data` 调整）：

```
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

VIBE 不会自动创建 venv，请确保 `jupyter_venv` 存在：

```bash
uv venv /data/venv
```

安装/更新 JupyterLab：

```bash
uv pip install --python /data/venv/bin/python jupyterlab ipykernel
systemctl restart jupyter
```

安装扩展（以 venv 为准）：

```bash
source /data/venv/bin/activate
pip install jupyterlab-git
systemctl restart jupyter
```

--------

## Claude Code

VIBE 仅写入配置，不安装 CLI。推荐：

```bash
npm install -g @anthropic-ai/claude-code
```

配置文件：

- `~/.claude.json`
- `~/.claude/settings.json`

更新配置：

```bash
./vibe.yml -l <host> -t claude_config
```

如果需要配置到其他用户，请使用对应的远程登录用户执行或手动拷贝配置文件。

--------

## 文件位置速查

| 组件 | 关键文件 |
|:-----|:--------|
| Code-Server | `/data/code/code-server/config.yaml` |
| Code-Server | `/etc/default/code` |
| Code-Server | `/etc/systemd/system/code-server.service` |
| JupyterLab | `/data/jupyter/jupyter_config.py` |
| JupyterLab | `/etc/default/jupyter` |
| JupyterLab | `/etc/systemd/system/jupyter.service` |
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
