---
title: VIBE 剧本
weight: 4830
description: VIBE 模块的 Ansible 剧本使用说明，包括部署、更新和管理操作。
icon: fas fa-scroll
module: [VIBE]
categories: [剧本]
---

VIBE 模块提供了一个主剧本 `vibe.yml`，用于部署和管理 Code-Server、JupyterLab、Claude Code 和 Node.js。


--------

## 剧本概览

| 剧本        | 说明                                          |
|:----------|:--------------------------------------------|
| `vibe.yml`| 在目标节点上部署 VIBE 开发环境（Code、Jupyter、Claude） |
{.full-width}


--------

## `vibe.yml`

[`vibe.yml`](https://github.com/Vonng/pigsty/blob/main/vibe.yml) 剧本用于在已纳管的节点上部署 VIBE 模块。

### 剧本内容

```yaml
- name: Deploy VIBE development environment
  hosts: all
  become: yes
  gather_facts: no
  roles:
    - { role: node_id, tags: id }
    - { role: vibe, tags: vibe }
```

### 使用方法

```bash
# 完整部署（所有组件）
./vibe.yml -l <host>

# 仅部署 Code-Server
./vibe.yml -l <host> -t code

# 仅部署 JupyterLab
./vibe.yml -l <host> -t jupyter

# 仅部署 Claude Code
./vibe.yml -l <host> -t claude

# 仅部署 Node.js
./vibe.yml -l <host> -t nodejs

# 禁用特定组件
./vibe.yml -l <host> -e code_enabled=false
./vibe.yml -l <host> -e jupyter_enabled=false
./vibe.yml -l <host> -e claude_enabled=false
./vibe.yml -l <host> -e nodejs_enabled=false

# 配置 Claude API Key
./vibe.yml -l <host> -e claude_env.ANTHROPIC_API_KEY=sk-ant-xxx
```


--------

## 任务结构

`vibe.yml` 剧本包含以下任务层级：

```
vibe
├── vibe_dir          # 创建工作目录并渲染上下文文件
├── claude            # 配置 Claude Code CLI
│   ├── claude_install    # 安装 claude 软件包
│   └── claude_config     # 渲染配置文件
├── code              # 部署 Code-Server
│   ├── code_install      # 安装 code-server 软件包
│   ├── code_dir          # 创建数据目录
│   ├── code_config       # 渲染配置文件和 systemd 服务单元
│   └── code_launch       # 启动 code-server 服务
├── jupyter           # 部署 JupyterLab
│   ├── jupyter_install   # 安装 JupyterLab 到 venv
│   ├── jupyter_dir       # 创建数据目录
│   ├── jupyter_config    # 渲染配置文件和 systemd 服务单元
│   └── jupyter_launch    # 启动 JupyterLab 服务
└── nodejs            # 安装 Node.js 运行时
    ├── nodejs_install    # 安装 nodejs 软件包
    └── nodejs_config     # 配置 npm 镜像
```


--------

## 任务详解

### `vibe_dir`

创建 VIBE 工作目录并渲染上下文文件。

```bash
./vibe.yml -l <host> -t vibe_dir
```

执行内容：
- 创建 `{{ vibe_data }}` 目录（默认 `/fs`）
- 渲染 `CLAUDE.md` 环境文档
- 创建 `AGENTS.md` 符号链接

### `claude`

配置 Claude Code CLI。

```bash
./vibe.yml -l <host> -t claude
```

子任务：

| 标签              | 说明                                  |
|:----------------|:------------------------------------|
| `claude_install`| 安装 claude 软件包                      |
| `claude_config` | 渲染 `~/.claude.json` 和 `~/.claude/settings.json` |
{.full-width}

配置文件内容：
- `~/.claude.json`：跳过新手引导对话框
- `~/.claude/settings.json`：OpenTelemetry 配置

### `code`

部署 Code-Server。

```bash
./vibe.yml -l <host> -t code
```

子任务：

| 标签            | 说明                              |
|:--------------|:--------------------------------|
| `code_install`| 安装 code-server 软件包              |
| `code_dir`    | 创建 `{{ code_data }}` 数据目录       |
| `code_config` | 渲染 config.yaml、systemd 服务单元、环境文件 |
| `code_launch` | 启动/重启 code-server 服务            |
{.full-width}

生成的文件：
- `/etc/systemd/system/code-server.service`
- `/etc/default/code`
- `{{ code_data }}/code-server/config.yaml`

### `jupyter`

部署 JupyterLab。

```bash
./vibe.yml -l <host> -t jupyter
```

子任务：

| 标签               | 说明                                  |
|:-----------------|:------------------------------------|
| `jupyter_install`| 安装 JupyterLab 到 Python venv         |
| `jupyter_dir`    | 创建 `{{ jupyter_data }}` 数据目录        |
| `jupyter_config` | 渲染 jupyter_config.py、systemd 服务单元、环境文件 |
| `jupyter_launch` | 启动/重启 JupyterLab 服务                 |
{.full-width}

生成的文件：
- `/etc/systemd/system/jupyter.service`
- `/etc/default/jupyter`
- `{{ jupyter_data }}/jupyter_config.py`

### `nodejs`

安装 Node.js 运行时。

```bash
./vibe.yml -l <host> -t nodejs
```

子任务：

| 标签              | 说明                                  |
|:----------------|:------------------------------------|
| `nodejs_install`| 安装 nodejs 软件包                      |
| `nodejs_config` | 配置 npm 镜像（中国区自动使用 npmmirror） |
{.full-width}

生成的文件：
- `/usr/local/node/etc/npmrc`（仅当配置镜像时）


--------

## 常用命令

### 完整部署

```bash
# 在单个主机上部署
./vibe.yml -l 10.10.10.10

# 在多个主机上部署
./vibe.yml -l '10.10.10.10,10.10.10.11'

# 在指定组上部署
./vibe.yml -l infra
```

### 组件级部署

```bash
# 仅部署 Code-Server
./vibe.yml -l <host> -t code

# 仅部署 JupyterLab
./vibe.yml -l <host> -t jupyter

# 仅部署 Claude Code
./vibe.yml -l <host> -t claude

# 仅部署 Node.js
./vibe.yml -l <host> -t nodejs
```

### 配置更新

```bash
# 更新 Code-Server 配置并重启
./vibe.yml -l <host> -t code_config,code_launch

# 更新 JupyterLab 配置并重启
./vibe.yml -l <host> -t jupyter_config,jupyter_launch

# 更新 Claude Code 配置
./vibe.yml -l <host> -t claude_config
```

### 仅重启服务

```bash
# 重启 Code-Server
./vibe.yml -l <host> -t code_launch

# 重启 JupyterLab
./vibe.yml -l <host> -t jupyter_launch
```

### 参数覆盖

```bash
# 自定义密码
./vibe.yml -l <host> -e code_password='MyPassword'
./vibe.yml -l <host> -e jupyter_password='MyToken'

# 禁用组件
./vibe.yml -l <host> -e code_enabled=false
./vibe.yml -l <host> -e jupyter_enabled=false
./vibe.yml -l <host> -e claude_enabled=false
./vibe.yml -l <host> -e nodejs_enabled=false

# 配置 npm 镜像
./vibe.yml -l <host> -e nodejs_registry='https://registry.npmmirror.com'

# 配置 Claude API Key
./vibe.yml -l <host> -e "claude_env={ANTHROPIC_API_KEY: 'sk-ant-xxx'}"

# 使用微软扩展市场
./vibe.yml -l <host> -e code_gallery=microsoft
```


--------

## 部署顺序

VIBE 模块依赖于以下组件，请按顺序部署：

```bash
# 1. 部署基础设施（INFRA 模块）
./infra.yml

# 2. 部署 PostgreSQL（PGSQL 模块）
./pgsql.yml

# 3. 部署 JuiceFS 共享存储（可选，JUICE 模块）
./juice.yml

# 4. 部署 VIBE 开发环境
./vibe.yml
```

或使用一键部署：

```bash
./deploy.yml  # 包含 INFRA + PGSQL
./juice.yml   # JuiceFS（可选）
./vibe.yml    # VIBE
```


--------

## 幂等性

VIBE 剧本支持幂等执行：

- **可重复执行**：多次执行不会产生副作用
- **增量更新**：只更新变化的配置
- **服务重启**：配置变更后自动重启相关服务

```bash
# 首次部署
./vibe.yml -l <host>

# 修改配置后重新执行（安全）
./vibe.yml -l <host>
```


--------

## 执行保护

### 限制目标主机

使用 `-l` 参数限制执行范围：

```bash
# 仅在指定主机执行
./vibe.yml -l 10.10.10.10

# 仅在指定组执行
./vibe.yml -l infra
```

### 预览模式

使用 `--check` 参数预览变更：

```bash
./vibe.yml -l <host> --check
```

### 详细输出

使用 `-v` 参数查看详细输出：

```bash
./vibe.yml -l <host> -v      # 详细
./vibe.yml -l <host> -vv     # 更详细
./vibe.yml -l <host> -vvv    # 调试级别
```


