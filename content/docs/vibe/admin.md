---
title: VIBE 管理
weight: 4840
description: VIBE 模块的日常管理和运维操作指南，包括服务管理、密码修改、扩展安装等。
icon: fas fa-wrench
module: [VIBE]
categories: [管理]
---

本文档介绍 VIBE 模块的日常管理操作，包括服务管理、配置修改、扩展安装等常用 SOP。


--------

## 服务管理

### Code-Server 服务

```bash
# 查看服务状态
sudo systemctl status code-server

# 启动服务
sudo systemctl start code-server

# 停止服务
sudo systemctl stop code-server

# 重启服务
sudo systemctl restart code-server

# 开机自启
sudo systemctl enable code-server

# 禁用自启
sudo systemctl disable code-server
```

### JupyterLab 服务

```bash
# 查看服务状态
sudo systemctl status jupyter

# 启动服务
sudo systemctl start jupyter

# 停止服务
sudo systemctl stop jupyter

# 重启服务
sudo systemctl restart jupyter

# 开机自启
sudo systemctl enable jupyter

# 禁用自启
sudo systemctl disable jupyter
```

### 查看服务日志

```bash
# Code-Server 日志
journalctl -u code-server -f

# JupyterLab 日志
journalctl -u jupyter -f

# 查看最近 100 行日志
journalctl -u code-server -n 100
journalctl -u jupyter -n 100
```


--------

## 密码管理

### 修改 Code-Server 密码

**方法一：修改配置文件**

```bash
# 编辑配置文件
sudo vi /data/code/code-server/config.yaml

# 修改 password 字段
password: YourNewPassword

# 重启服务
sudo systemctl restart code-server
```

**方法二：使用 Ansible**

```bash
# 修改 pigsty.yml 中的 code_password
# 然后执行
./vibe.yml -l <host> -t code_config,code_launch
```

### 修改 JupyterLab Token

**方法一：修改配置文件**

```bash
# 编辑配置文件
sudo vi /data/jupyter/jupyter_config.py

# 修改 c.ServerApp.token 值
c.ServerApp.token = 'YourNewToken'

# 重启服务
sudo systemctl restart jupyter
```

**方法二：使用 Ansible**

```bash
# 修改 pigsty.yml 中的 jupyter_password
# 然后执行
./vibe.yml -l <host> -t jupyter_config,jupyter_launch
```


--------

## 扩展管理

### Code-Server 扩展

**通过 Web 界面安装**

1. 打开 Code-Server（`https://<host>/code/`）
2. 点击左侧扩展图标
3. 搜索并安装所需扩展

**通过命令行安装**

```bash
# 安装单个扩展
code-server --install-extension ms-python.python

# 从 VSIX 文件安装
code-server --install-extension /path/to/extension.vsix

# 列出已安装扩展
code-server --list-extensions

# 卸载扩展
code-server --uninstall-extension ms-python.python
```

**切换扩展市场**

修改 `code_gallery` 参数：

```yaml
# Open VSX（默认）
code_gallery: openvsx

# 微软官方市场
code_gallery: microsoft
```

然后重新部署：

```bash
./vibe.yml -l <host> -t code_config,code_launch
```

### JupyterLab 扩展

**安装 JupyterLab 扩展**

```bash
# 激活虚拟环境
source /data/venv/bin/activate

# 安装扩展
pip install jupyterlab-git
pip install jupyterlab-lsp

# 重启 JupyterLab
sudo systemctl restart jupyter
```


--------

## Python 包管理

### 安装 Python 包

```bash
# 激活虚拟环境
source /data/venv/bin/activate

# 使用 pip 安装
pip install numpy pandas matplotlib scikit-learn

# 使用清华镜像加速
pip install -i https://pypi.tuna.tsinghua.edu.cn/simple numpy pandas

# 使用 uv 安装（更快）
uv pip install numpy pandas matplotlib
```

### 配置 pip 镜像

```bash
# 临时使用
pip install -i https://pypi.tuna.tsinghua.edu.cn/simple <package>

# 永久配置
pip config set global.index-url https://pypi.tuna.tsinghua.edu.cn/simple
```

### 安装 Jupyter Kernel

```bash
# 安装 ipykernel
pip install ipykernel

# 注册新内核
python -m ipykernel install --user --name myenv --display-name "Python (myenv)"

# 列出已注册内核
jupyter kernelspec list

# 删除内核
jupyter kernelspec remove myenv
```


--------

## Claude Code 管理

### 配置 API Key

**方法一：环境变量**

```bash
# 临时设置
export ANTHROPIC_API_KEY=sk-ant-xxx-your-api-key

# 永久设置（添加到 ~/.bashrc 或 ~/.zshrc）
echo 'export ANTHROPIC_API_KEY=sk-ant-xxx-your-api-key' >> ~/.bashrc
source ~/.bashrc
```

**方法二：Claude 配置命令**

```bash
claude config set apiKey sk-ant-xxx-your-api-key
```

**方法三：Ansible 部署时配置**

```yaml
claude_env:
  ANTHROPIC_API_KEY: sk-ant-xxx-your-api-key
```

### 查看 Claude 配置

```bash
# 查看当前配置
cat ~/.claude.json
cat ~/.claude/settings.json

# 查看 Claude 版本
claude --version
```

### 使用 Claude Code

```bash
# 在当前目录启动 Claude
claude

# 在指定目录启动
claude /path/to/project

# 非交互模式执行任务
claude -p "解释这段代码的作用"

# 指定模型
claude --model claude-sonnet-4-20250514
```


--------

## 目录结构

### VIBE 工作目录

```
{{ vibe_data }}           # 默认 /fs
├── CLAUDE.md             # Claude Code 上下文文件
├── AGENTS.md             # 符号链接 -> CLAUDE.md
└── <your-projects>/      # 项目文件
```

### Code-Server 数据目录

```
{{ code_data }}           # 默认 /data/code
└── code-server/
    ├── config.yaml       # 配置文件
    ├── extensions/       # 扩展目录
    └── User/
        └── settings.json # 用户设置
```

### JupyterLab 数据目录

```
{{ jupyter_data }}        # 默认 /data/jupyter
├── jupyter_config.py     # 配置文件
└── kernels/              # Jupyter 内核
```

### Python 虚拟环境

```
{{ jupyter_venv }}        # 默认 /data/venv
├── bin/
│   ├── python
│   ├── pip
│   ├── jupyter
│   └── ...
├── lib/
│   └── python3.x/
│       └── site-packages/
└── ...
```


--------

## 配置文件位置

| 组件          | 配置文件                                       |
|:------------|:-------------------------------------------|
| Code-Server | `/data/code/code-server/config.yaml`       |
| Code-Server | `/etc/systemd/system/code-server.service`  |
| Code-Server | `/etc/default/code`                        |
| JupyterLab  | `/data/jupyter/jupyter_config.py`          |
| JupyterLab  | `/etc/systemd/system/jupyter.service`      |
| JupyterLab  | `/etc/default/jupyter`                     |
| Claude Code | `~/.claude.json`                           |
| Claude Code | `~/.claude/settings.json`                  |
{.full-width}


--------

## 连接 PostgreSQL

### 从 JupyterLab 连接

```python
import psycopg2

# 连接数据库
conn = psycopg2.connect(
    'postgres://dbuser_dba:DBUser.DBA@10.10.10.10:5432/meta'
)
cursor = conn.cursor()

# 执行查询
cursor.execute('SELECT version()')
print(cursor.fetchone())

# 关闭连接
cursor.close()
conn.close()
```

### 使用 pandas

```python
import pandas as pd
import psycopg2

conn = psycopg2.connect(
    'postgres://dbuser_dba:DBUser.DBA@10.10.10.10:5432/meta'
)
df = pd.read_sql('SELECT * FROM pg_stat_activity', conn)
df.head()
```

### 从 Code-Server 终端连接

```bash
# 使用 psql
psql postgres://dbuser_dba:DBUser.DBA@10.10.10.10:5432/meta

# 使用 pgcli（如已安装）
pgcli postgres://dbuser_dba:DBUser.DBA@10.10.10.10:5432/meta
```


--------

## 备份与恢复

### 备份 Code-Server 配置

```bash
# 备份用户数据
tar -czvf code-backup.tar.gz /data/code

# 恢复
tar -xzvf code-backup.tar.gz -C /
sudo systemctl restart code-server
```

### 备份 JupyterLab 配置

```bash
# 备份配置和 Notebook
tar -czvf jupyter-backup.tar.gz /data/jupyter /fs/*.ipynb

# 恢复
tar -xzvf jupyter-backup.tar.gz -C /
sudo systemctl restart jupyter
```

### 使用 JuiceFS PITR

如果工作目录使用 JuiceFS，可以利用 PostgreSQL 的 PITR 能力进行时间点恢复。详见 [JUICE 管理文档](/docs/juice/admin/)。


--------

## 故障排查

### 服务无法启动

```bash
# 查看详细错误日志
journalctl -u code-server -xe
journalctl -u jupyter -xe

# 检查端口占用
ss -tlnp | grep 8443
ss -tlnp | grep 8888

# 检查进程
ps aux | grep code-server
ps aux | grep jupyter
```

### 无法访问 Web 界面

```bash
# 检查 Nginx 状态
sudo systemctl status nginx

# 检查 Nginx 配置
sudo nginx -t

# 检查防火墙
sudo firewall-cmd --list-all
```

### JupyterLab Python 版本问题

```bash
# 检查 venv 中的 Python 版本
/data/venv/bin/python --version

# 检查 JupyterLab 版本
/data/venv/bin/jupyter --version

# 重建虚拟环境
rm -rf /data/venv
python3 -m venv /data/venv
/data/venv/bin/pip install jupyterlab ipykernel
```


