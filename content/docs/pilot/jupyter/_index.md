---
title: 模块：Jupyter
weight: 5020
description: 使用 Pigsty 部署 JupyterLab，搭建开箱即用的交互式计算与数据分析环境。
icon: fab fa-python
module: [VIBE]
categories: [参考]
---

{{% alert title="文档已迁移" color="warning" %}}
JupyterLab 现已整合到 **[VIBE 模块](/docs/vibe/)** 中，请参阅新文档了解完整内容：

- **[VIBE 概述](/docs/vibe/)**：模块介绍和快速开始
- **[VIBE 配置](/docs/vibe/config/)**：JupyterLab 配置说明
- **[VIBE 参数](/docs/vibe/param/)**：`jupyter_*` 参数详解
- **[VIBE 剧本](/docs/vibe/playbook/)**：部署和管理操作
- **[VIBE 管理](/docs/vibe/admin/)**：日常运维指南
- **[VIBE FAQ](/docs/vibe/faq/)**：常见问题解答
{{% /alert %}}

JupyterLab 是新一代的交互式开发环境，支持 Notebook、终端、文本编辑器等多种功能。
Pigsty 的 VIBE 模块提供了 JupyterLab 的自动化部署方案，通过 Nginx 反向代理提供 HTTPS 访问。


--------

## 概述

JupyterLab 作为 VIBE 模块的一部分，部署为 systemd 服务，通过 Nginx 反向代理暴露到 Web。

```
用户浏览器
    ↓ HTTPS
Nginx (https://i.pigsty/jupyter/)
    ↓ proxy_pass
JupyterLab (127.0.0.1:8888)
    └─ User: {{ node_user }}
    └─ WorkDir: {{ vibe_data }}
    └─ Venv: {{ jupyter_venv }}
```


--------

## 快速开始

### 前置条件

JupyterLab 需要预先安装到 Python 虚拟环境中：

```bash
# 创建虚拟环境并安装 JupyterLab
uv pip install jupyterlab ipykernel --python /data/venv/bin/python

# 或使用 pip
/data/venv/bin/pip install jupyterlab ipykernel
```

### 启用 JupyterLab

在节点上设置 `jupyter_enabled: true`（默认已启用），然后执行：

```bash
./vibe.yml -l <host> -t jupyter
```

或部署完整的 VIBE 模块（Code-Server + JupyterLab + Claude Code）：

```bash
./vibe.yml -l <host>
```

### 访问 JupyterLab

部署完成后，通过以下地址访问：

- **子路径方式**：`https://i.pigsty/jupyter/`
- **子域名方式**：`https://jupyter.pigsty`（需在 `infra_portal` 中配置）

默认登录 Token：`Jupyter.Lab`


--------

## 参数配置

| 参数                 | 默认值           | 说明                                |
|:-------------------|:--------------|:----------------------------------|
| `jupyter_enabled`  | `true`        | 是否在该节点启用 JupyterLab               |
| `jupyter_port`     | `8888`        | JupyterLab 监听端口（仅 localhost）      |
| `vibe_data`        | `/fs`         | 工作目录（Notebook 根目录）                |
| `jupyter_data`     | `/data/jupyter` | 数据目录（配置、内核等）                      |
| `jupyter_password` | `Jupyter.Lab` | 登录 Token                          |
| `jupyter_venv`     | `/data/venv`  | JupyterLab 所在的 Python 虚拟环境路径      |
{.full-width}


--------

## 剧本与任务

JupyterLab 通过 `vibe.yml` 剧本的 `jupyter` 标签部署，包含以下任务：

| 标签               | 说明                       |
|:-----------------|:-------------------------|
| `jupyter`        | JupyterLab 完整部署          |
| `jupyter_install`| 安装 JupyterLab 到 venv     |
| `jupyter_dir`    | 创建工作目录和数据目录              |
| `jupyter_config` | 渲染配置文件和 systemd 服务单元     |
| `jupyter_launch` | 启动 JupyterLab 服务         |
{.full-width}

常用命令：

```bash
# 部署 JupyterLab
./vibe.yml -l <host> -t jupyter

# 仅更新配置
./vibe.yml -l <host> -t jupyter_config

# 重启服务
./vibe.yml -l <host> -t jupyter_launch
```


--------

## 连接 PostgreSQL

在 Notebook 中连接 PostgreSQL 数据库：

### 安装驱动

```bash
# 使用 pip 安装
pip install psycopg2-binary psycopg2

# 使用清华镜像加速
pip install -i https://pypi.tuna.tsinghua.edu.cn/simple psycopg2-binary psycopg2
```

### 使用示例

```python
import psycopg2

# 连接数据库
conn = psycopg2.connect('postgres://dbuser_dba:DBUser.DBA@10.10.10.10:5432/meta')
cursor = conn.cursor()

# 执行查询
cursor.execute('SELECT * FROM pg_stat_activity LIMIT 5')
for row in cursor.fetchall():
    print(row)

# 关闭连接
cursor.close()
conn.close()
```

### 使用 pandas

```python
import pandas as pd
import psycopg2

conn = psycopg2.connect('postgres://dbuser_dba:DBUser.DBA@10.10.10.10:5432/meta')
df = pd.read_sql('SELECT * FROM pg_stat_activity', conn)
df.head()
```


--------

## 目录结构

```
{{ vibe_data }}                 # 工作目录（如 /fs）
├── *.ipynb                     # Notebook 文件
└── data/                       # 数据文件

{{ jupyter_data }}              # 数据目录（如 /data/jupyter）
├── jupyter_config.py           # JupyterLab 配置
└── kernels/                    # Jupyter 内核

{{ jupyter_venv }}              # Python 虚拟环境（如 /data/venv）
└── bin/
    ├── python
    ├── pip
    └── jupyter

/etc/systemd/system/jupyter.service  # systemd 服务单元
/etc/default/jupyter                  # 环境变量
```


--------

## 配置示例

### 基础配置

```yaml
all:
  children:
    infra:
      hosts:
        10.10.10.10:
          jupyter_enabled: true
          jupyter_password: 'MySecureToken'
```

### 数据分析工作站

配合 JuiceFS 共享文件系统，打造数据分析环境（使用 `vibe` 配置模板）：

```yaml
all:
  children:
    infra:
      hosts:
        10.10.10.10:
          jupyter_enabled: true
          jupyter_password: 'Jupyter.Lab'
          vibe_data: /fs                 # 使用 JuiceFS 挂载点作为工作目录
          code_enabled: true
          code_password: 'Code.Server'
          claude_enabled: true
          juice_instances:
            jfs:
              path: /fs
              meta: postgres://dbuser_meta:DBUser.Meta@10.10.10.10:5432/meta
              data: --storage postgres --bucket ...
```


--------

## 安装 Python 包

在 JupyterLab 终端中安装额外的 Python 包：

```bash
# 使用 pip
pip install numpy pandas matplotlib scikit-learn

# 使用清华镜像
pip install -i https://pypi.tuna.tsinghua.edu.cn/simple numpy pandas matplotlib

# 配置默认镜像
pip config set global.index-url https://pypi.tuna.tsinghua.edu.cn/simple
```

或使用 conda（如已安装）：

```bash
conda config --add channels https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/main/
conda install numpy pandas matplotlib
```


--------

## 常见问题

### 如何修改登录密码？

修改配置中的 `jupyter_password`，然后重新执行剧本：

```bash
./vibe.yml -l <host> -t jupyter_config,jupyter_launch
```

### JupyterLab 启动失败？

检查虚拟环境中是否正确安装了 JupyterLab：

```bash
/data/venv/bin/jupyter --version
```

如未安装，先执行安装：

```bash
/data/venv/bin/pip install jupyterlab ipykernel
```

### 如何添加新的 Kernel？

```bash
# 安装 ipykernel
pip install ipykernel

# 注册新内核
python -m ipykernel install --user --name myenv --display-name "Python (myenv)"
```

### WebSocket 连接问题？

JupyterLab 依赖 WebSocket 进行实时通信。如果遇到连接问题，确保 Nginx 配置正确支持 WebSocket：

```nginx
proxy_http_version 1.1;
proxy_set_header Upgrade $http_upgrade;
proxy_set_header Connection "upgrade";
```


--------

## Docker 替代方案

如果不想使用 systemd 服务，也可以使用 Docker 部署：

```bash
cd ~/pigsty/app/jupyter
make dir up
```

访问 `http://10.10.10.10:8888`，默认 Token：`pigsty`

Docker 版本的 Makefile 命令：

```bash
make up      # 启动 Jupyter 容器
make down    # 停止容器
make log     # 查看日志
make clean   # 删除容器
```


--------

## 支持平台

- **操作系统**：EL 8/9/10、Ubuntu 20/22/24、Debian 11/12/13
- **架构**：x86_64、ARM64
- **Ansible**：2.9+


