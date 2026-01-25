---
title: 配置 VIBE
weight: 4810
description: VIBE 模块的配置说明，包括 Code-Server、JupyterLab 和 Claude Code 的详细配置方法。
icon: fas fa-sliders
module: [VIBE]
categories: [配置]
---

VIBE 模块提供了灵活的配置选项，可以根据需求启用或禁用各个组件，并自定义其行为。


--------

## 配置概览

VIBE 模块包含三个可独立配置的组件：

| 组件          | 启用参数             | 默认状态 | 说明                     |
|:------------|:-----------------|:-----|:-----------------------|
| Code-Server | `code_enabled`   | 启用   | 浏览器中的 VS Code          |
| JupyterLab  | `jupyter_enabled`| 启用   | 交互式计算环境                |
| Claude Code | `claude_enabled` | 启用   | AI 编程助手 CLI            |
{.full-width}

配置位于 Pigsty 配置文件的主机变量或组变量中：

```yaml
all:
  children:
    infra:
      hosts:
        10.10.10.10:
          # VIBE 配置
          vibe_data: /fs
          code_enabled: true
          jupyter_enabled: true
          claude_enabled: true
```


--------

## Code-Server 配置

### 基本配置

```yaml
code_enabled: true           # 启用 Code-Server
code_port: 8443              # 监听端口（仅 localhost）
code_data: /data/code        # 用户数据目录
code_password: 'Code.Server' # 登录密码
code_gallery: openvsx        # 扩展市场
```

### 扩展市场选项

Code-Server 支持多种扩展市场：

| 选项        | 说明                                  |
|:----------|:------------------------------------|
| `openvsx`   | Open VSX 开源市场（默认）                  |
| `microsoft` | 微软官方市场                             |
{.full-width}

中国大陆用户会自动使用清华镜像加速。

### 配置示例

```yaml
# 使用微软扩展市场
code_enabled: true
code_password: 'MySecretPassword'
code_gallery: microsoft
code_data: /data/code
```


--------

## JupyterLab 配置

### 基本配置

```yaml
jupyter_enabled: true           # 启用 JupyterLab
jupyter_port: 8888              # 监听端口
jupyter_data: /data/jupyter     # 数据目录
jupyter_password: 'Jupyter.Lab' # 登录 Token
jupyter_venv: /data/venv        # Python 虚拟环境路径
```

### Python 虚拟环境

JupyterLab 运行在 Python 虚拟环境中，需要预先创建：

```bash
# 创建虚拟环境
python3 -m venv /data/venv

# 安装 JupyterLab（VIBE 剧本会自动安装）
/data/venv/bin/pip install jupyterlab ipykernel
```

### 配置示例

```yaml
# 自定义 JupyterLab 配置
jupyter_enabled: true
jupyter_password: 'MySecretToken'
jupyter_port: 8888
jupyter_data: /data/jupyter
jupyter_venv: /data/venv
```


--------

## Claude Code 配置

### 基本配置

```yaml
claude_enabled: true   # 启用 Claude Code
claude_env: {}         # 额外环境变量
```

### 配置 API Key

Claude Code 需要 API Key 才能使用。可以通过 `claude_env` 传递：

```yaml
claude_enabled: true
claude_env:
  ANTHROPIC_API_KEY: sk-ant-xxx-your-api-key
```

或者在部署后手动配置：

```bash
# 设置环境变量
export ANTHROPIC_API_KEY=sk-ant-xxx-your-api-key

# 或使用 Claude Code 配置命令
claude config set apiKey sk-ant-xxx-your-api-key
```

### OpenTelemetry 配置

Claude Code 默认集成了 OpenTelemetry 可观测性，自动将指标和日志推送到 VictoriaMetrics/VictoriaLogs：

- **指标端点**：`http://127.0.0.1:8428/opentelemetry/v1/metrics`
- **日志端点**：`http://127.0.0.1:9428/insert/opentelemetry/v1/logs`

配置文件位于 `~/.claude/settings.json`。


--------

## 工作目录配置

`vibe_data` 参数指定所有 VIBE 组件的共享工作目录：

```yaml
vibe_data: /fs   # 默认使用 JuiceFS 挂载点
```

该目录用于：
- Code-Server 的默认打开目录
- JupyterLab 的 Notebook 根目录
- Claude Code 的工作目录

建议配合 JuiceFS 使用，以获得：
- 分布式文件系统的高可用
- 基于 PostgreSQL 的 PITR 能力
- 多节点间的文件共享


--------

## 完整配置示例

### 最小配置

```yaml
all:
  children:
    infra:
      hosts:
        10.10.10.10:
          code_enabled: true
```

### 标准配置

```yaml
all:
  children:
    infra:
      hosts:
        10.10.10.10:
          # 工作目录
          vibe_data: /fs

          # Code-Server
          code_enabled: true
          code_port: 8443
          code_password: 'Code.Server'
          code_gallery: openvsx

          # JupyterLab
          jupyter_enabled: true
          jupyter_port: 8888
          jupyter_password: 'Jupyter.Lab'
          jupyter_venv: /data/venv

          # Claude Code
          claude_enabled: true
          claude_env:
            ANTHROPIC_API_KEY: sk-ant-xxx
```

### AI 编程沙箱配置

完整的 AI 编程沙箱配置，包含 JuiceFS 共享存储：

```yaml
all:
  vars:
    version: v3.4.0
    admin_ip: 10.10.10.10
    infra_portal:
      home: { domain: h.pigsty }
      grafana: { domain: g.pigsty, endpoint: "${admin_ip}:3000" }
      prometheus: { domain: p.pigsty, endpoint: "${admin_ip}:9090" }
      alertmanager: { domain: a.pigsty, endpoint: "${admin_ip}:9093" }
      code: { domain: code.pigsty, endpoint: "127.0.0.1:8443", websocket: true }
      jupyter: { domain: jupyter.pigsty, endpoint: "127.0.0.1:8888", websocket: true }

    # PostgreSQL 配置
    pg_cluster: pg-meta
    pg_databases:
      - name: meta

    # JuiceFS 配置
    juice_instances:
      jfs:
        path: /fs
        meta: postgres://dbuser_meta:DBUser.Meta@10.10.10.10:5432/meta
        data: --storage postgres --bucket postgres://dbuser_meta:DBUser.Meta@10.10.10.10:5432/meta?prefix=juice

  children:
    infra:
      hosts:
        10.10.10.10:
          # VIBE 配置
          vibe_data: /fs
          code_enabled: true
          code_password: 'YourSecurePassword'
          jupyter_enabled: true
          jupyter_password: 'YourSecureToken'
          claude_enabled: true
          claude_env:
            ANTHROPIC_API_KEY: sk-ant-xxx
```


--------

## 禁用组件

如果不需要某个组件，可以将其禁用：

```yaml
# 只启用 Code-Server
code_enabled: true
jupyter_enabled: false
claude_enabled: false

# 只启用 JupyterLab
code_enabled: false
jupyter_enabled: true
claude_enabled: false

# 只启用 Claude Code
code_enabled: false
jupyter_enabled: false
claude_enabled: true
```

或在执行剧本时通过命令行禁用：

```bash
./vibe.yml -l <host> -e code_enabled=false
./vibe.yml -l <host> -e jupyter_enabled=false
./vibe.yml -l <host> -e claude_enabled=false
```


--------

## Nginx 反向代理

VIBE 组件通过 Nginx 反向代理暴露到外部。相关配置在 `infra_portal` 中：

```yaml
infra_portal:
  # 子路径方式（默认）
  home: { domain: h.pigsty }

  # 子域名方式（可选）
  code: { domain: code.pigsty, endpoint: "127.0.0.1:8443", websocket: true }
  jupyter: { domain: jupyter.pigsty, endpoint: "127.0.0.1:8888", websocket: true }
```

访问方式：
- **子路径**：`https://h.pigsty/code/`、`https://h.pigsty/jupyter/`
- **子域名**：`https://code.pigsty`、`https://jupyter.pigsty`


