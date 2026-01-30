---
title: VIBE 参数
weight: 4820
description: VIBE 模块的配置参数详解，涵盖 Code-Server、JupyterLab 和 Claude Code 的所有可配置项。
icon: fas fa-cog
module: [VIBE]
categories: [参数]
---

VIBE 模块共有 **16** 个配置参数，分为五组：通用参数、Code-Server 参数、JupyterLab 参数、Claude Code 参数和 Node.js 参数。


--------

## 参数概览

| 参数                 | 类型     | 级别  | 默认值              | 说明                   |
|:-------------------|:-------|:----|:-----------------|:---------------------|
| [`vibe_data`](#vibe_data) | path | H/I | `/fs` | VIBE 工作目录 |
| [`code_enabled`](#code_enabled) | bool | H/I | `true` | 是否启用 Code-Server |
| [`code_port`](#code_port) | port | H/I | `8443` | Code-Server 监听端口 |
| [`code_data`](#code_data) | path | H/I | `/data/code` | Code-Server 数据目录 |
| [`code_password`](#code_password) | string | H/I | `Code.Server` | Code-Server 登录密码 |
| [`code_gallery`](#code_gallery) | enum | H/I | `openvsx` | 扩展市场类型 |
| [`jupyter_enabled`](#jupyter_enabled) | bool | H/I | `true` | 是否启用 JupyterLab |
| [`jupyter_port`](#jupyter_port) | port | H/I | `8888` | JupyterLab 监听端口 |
| [`jupyter_data`](#jupyter_data) | path | H/I | `/data/jupyter` | JupyterLab 数据目录 |
| [`jupyter_password`](#jupyter_password) | string | H/I | `Jupyter.Lab` | JupyterLab 登录 Token |
| [`jupyter_venv`](#jupyter_venv) | path | H/I | `/data/venv` | Python 虚拟环境路径 |
| [`claude_enabled`](#claude_enabled) | bool | H/I | `true` | 是否启用 Claude Code |
| [`claude_env`](#claude_env) | dict | H/I | `{}` | Claude Code 额外环境变量 |
| [`nodejs_enabled`](#nodejs_enabled) | bool | H/I | `true` | 是否启用 Node.js |
| [`nodejs_registry`](#nodejs_registry) | url | H/I | `''` | npm 镜像地址，留空则自动配置 |
| [`npm_packages`](#npm_packages) | string[] | H/I | `[]` | 全局安装的 npm 包列表 |
{.full-width}


--------

## 通用参数

### `vibe_data`

VIBE 模块的工作目录，所有组件的默认工作路径。

- **类型**：`path`
- **级别**：H/I（主机/实例）
- **默认值**：`/fs`

该目录用于：
- Code-Server 打开的默认目录
- JupyterLab 的 Notebook 根目录
- Claude Code 的工作目录
- 存放 `CLAUDE.md` 和 `AGENTS.md` 上下文文件

建议使用 JuiceFS 挂载点，以获得分布式存储和 PITR 能力。

```yaml
vibe_data: /fs              # 默认值，JuiceFS 挂载点
vibe_data: /home/dev/work   # 自定义工作目录
```


--------

## Code-Server 参数

### `code_enabled`

是否在该节点启用 Code-Server。

- **类型**：`bool`
- **级别**：H/I
- **默认值**：`true`

```yaml
code_enabled: true   # 启用（默认）
code_enabled: false  # 禁用
```

### `code_port`

Code-Server 监听端口，仅绑定 localhost。

- **类型**：`port`
- **级别**：H/I
- **默认值**：`8443`

外部访问通过 Nginx 反向代理，无需直接暴露此端口。

```yaml
code_port: 8443   # 默认端口
code_port: 9443   # 自定义端口
```

### `code_data`

Code-Server 用户数据目录，存放扩展、用户设置等。

- **类型**：`path`
- **级别**：H/I
- **默认值**：`/data/code`

目录结构：
```
/data/code/
├── code-server/
│   ├── config.yaml      # 配置文件
│   ├── extensions/      # 已安装扩展
│   └── User/
│       └── settings.json # 用户设置
└── ...
```

```yaml
code_data: /data/code      # 默认路径
code_data: /home/dev/code  # 自定义路径
```

### `code_password`

Code-Server 登录密码。

- **类型**：`string`
- **级别**：H/I
- **默认值**：`Code.Server`

{{% alert title="安全提醒" color="warning" %}}
生产环境请务必修改默认密码！
{{% /alert %}}

```yaml
code_password: 'Code.Server'     # 默认密码（请修改）
code_password: 'MySecretPass!'   # 自定义密码
```

### `code_gallery`

Code-Server 扩展市场类型。

- **类型**：`enum`
- **级别**：H/I
- **默认值**：`openvsx`
- **可选值**：`openvsx`、`microsoft`

| 选项        | 说明                              |
|:----------|:--------------------------------|
| `openvsx`   | Open VSX 开源市场（默认）              |
| `microsoft` | 微软官方 VS Code 市场               |
{.full-width}

中国大陆用户会自动使用清华镜像加速。

```yaml
code_gallery: openvsx    # Open VSX（默认）
code_gallery: microsoft  # 微软官方市场
```


--------

## JupyterLab 参数

### `jupyter_enabled`

是否在该节点启用 JupyterLab。

- **类型**：`bool`
- **级别**：H/I
- **默认值**：`true`

```yaml
jupyter_enabled: true   # 启用（默认）
jupyter_enabled: false  # 禁用
```

### `jupyter_port`

JupyterLab 监听端口。

- **类型**：`port`
- **级别**：H/I
- **默认值**：`8888`

JupyterLab 绑定到 `0.0.0.0`，但通常通过 Nginx 反向代理访问。

```yaml
jupyter_port: 8888   # 默认端口
jupyter_port: 8899   # 自定义端口
```

### `jupyter_data`

JupyterLab 数据目录，存放配置文件和内核信息。

- **类型**：`path`
- **级别**：H/I
- **默认值**：`/data/jupyter`

目录结构：
```
/data/jupyter/
├── jupyter_config.py   # JupyterLab 配置
└── kernels/            # Jupyter 内核
```

```yaml
jupyter_data: /data/jupyter      # 默认路径
jupyter_data: /home/dev/jupyter  # 自定义路径
```

### `jupyter_password`

JupyterLab 登录 Token。

- **类型**：`string`
- **级别**：H/I
- **默认值**：`Jupyter.Lab`

{{% alert title="安全提醒" color="warning" %}}
生产环境请务必修改默认 Token！
{{% /alert %}}

```yaml
jupyter_password: 'Jupyter.Lab'   # 默认 Token（请修改）
jupyter_password: 'MySecretToken' # 自定义 Token
```

### `jupyter_venv`

JupyterLab 所在的 Python 虚拟环境路径。

- **类型**：`path`
- **级别**：H/I
- **默认值**：`/data/venv`

目录结构：
```
/data/venv/
└── bin/
    ├── python
    ├── pip
    └── jupyter
```

```yaml
jupyter_venv: /data/venv          # 默认路径
jupyter_venv: /home/dev/.venv     # 自定义路径
```


--------

## Claude Code 参数

### `claude_enabled`

是否在该节点启用 Claude Code CLI 配置。

- **类型**：`bool`
- **级别**：H/I
- **默认值**：`true`

```yaml
claude_enabled: true   # 启用（默认）
claude_enabled: false  # 禁用
```

### `claude_env`

Claude Code 的额外环境变量，用于配置 API Key 等。

- **类型**：`dict`
- **级别**：H/I
- **默认值**：`{}`

常用环境变量：

| 变量                  | 说明                        |
|:--------------------|:--------------------------|
| `ANTHROPIC_API_KEY` | Anthropic API 密钥          |
| `ANTHROPIC_BASE_URL`| 自定义 API 端点               |
{.full-width}

```yaml
# 配置 API Key
claude_env:
  ANTHROPIC_API_KEY: sk-ant-xxx-your-api-key

# 配置自定义 API 端点
claude_env:
  ANTHROPIC_API_KEY: sk-ant-xxx
  ANTHROPIC_BASE_URL: https://api.example.com
```


--------

## Node.js 参数

### `nodejs_enabled`

是否在该节点启用 Node.js 运行时。

- **类型**：`bool`
- **级别**：H/I
- **默认值**：`true`

```yaml
nodejs_enabled: true   # 启用（默认）
nodejs_enabled: false  # 禁用
```

### `nodejs_registry`

npm 软件包镜像地址。

- **类型**：`url`
- **级别**：H/I
- **默认值**：`''`（空字符串）

当此参数留空时：
- 如果 `region=china`，自动使用淘宝 npm 镜像 `https://registry.npmmirror.com`
- 否则使用 npm 官方默认源

显式填写时，使用指定的镜像地址（适用于内网环境）。

```yaml
nodejs_registry: ''                                # 自动配置（默认）
nodejs_registry: 'https://registry.npmmirror.com'  # 手动指定淘宝镜像
nodejs_registry: 'http://npm.internal.example.com' # 内网镜像
```

### `npm_packages`

需要全局安装的 npm 包列表，通过 `npm install -g` 安装。

- **类型**：`string[]`
- **级别**：H/I
- **默认值**：`[]`（空列表）

用于安装 Claude Code、TypeScript、pnpm 等命令行工具。

```yaml
npm_packages: []                                   # 不安装任何包（默认）
npm_packages:
  - '@anthropic-ai/claude-code'                    # Claude Code CLI
  - typescript                                      # TypeScript 编译器
  - pnpm                                            # 高性能包管理器
```


--------

## 参数级别说明

| 级别 | 说明                       |
|:---|:-------------------------|
| G  | 全局参数，在 `all.vars` 中定义    |
| C  | 集群参数，在集群层级定义             |
| I  | 实例参数，在主机层级定义             |
| H  | 主机参数，特指单个主机              |
{.full-width}

VIBE 模块参数均为 **H/I 级别**，即在主机或实例层级定义。可以为不同主机配置不同的值：

```yaml
all:
  children:
    infra:
      hosts:
        10.10.10.10:
          code_enabled: true
          code_password: 'Password1'
        10.10.10.11:
          code_enabled: true
          code_password: 'Password2'
```


--------

## 默认值汇总

```yaml
# VIBE 通用参数
vibe_data: /fs

# Code-Server 参数
code_enabled: true
code_port: 8443
code_data: /data/code
code_password: 'Code.Server'
code_gallery: openvsx

# JupyterLab 参数
jupyter_enabled: true
jupyter_port: 8888
jupyter_data: /data/jupyter
jupyter_password: 'Jupyter.Lab'
jupyter_venv: /data/venv

# Claude Code 参数
claude_enabled: true
claude_env: {}

# Node.js 参数
nodejs_enabled: true
nodejs_registry: ''
npm_packages: []
```


