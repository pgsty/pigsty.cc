---
title: 预置剧本
weight: 4830
description: VIBE 模块的 Ansible 剧本使用说明。
icon: fas fa-scroll
module: [VIBE]
categories: [剧本]
---

VIBE 模块提供 `vibe.yml` 剧本，用于部署 Code-Server、JupyterLab、Node.js、Claude Code 与 Codex CLI。

> `vibe.yml` 只包含 `node_id` 与 `vibe` 角色，不包含 `node/infra`。
> 建议先执行 [`deploy.yml`](/docs/deploy/) 或显式运行 [`node.yml`](/docs/node/playbook) 与 [`infra.yml`](/docs/infra/playbook)。

--------

## `vibe.yml`

[`vibe.yml`](https://github.com/pgsty/pigsty/blob/main/vibe.yml) 内容：

```yaml
- name: VIBE
  hosts: all
  become: true
  gather_facts: no
  roles:
    - { role: node_id, tags: id }
    - { role: vibe,    tags: vibe }
```

--------

## 任务结构

```bash
vibe
├── vibe_dir          # 创建工作目录与上下文文件
├── code              # Code-Server
│   ├── code_install
│   ├── code_dir
│   ├── code_config
│   └── code_launch
├── jupyter           # JupyterLab
│   ├── jupyter_install
│   ├── jupyter_dir
│   ├── jupyter_config
│   └── jupyter_launch
├── nodejs            # Node.js Runtime 与额外 npm 包
│   ├── nodejs_install
│   ├── nodejs_config
│   └── nodejs_pkg
├── codex             # Codex CLI
│   └── codex_install
└── claude            # Claude Code
    ├── claude_install
    └── claude_config
```

说明：

- `jupyter_install` 使用 `uv pip`，不会创建 venv
- `nodejs_pkg` 只安装 `npm_packages` 中声明的额外包，默认列表为空
- `claude_install` 使用 `claude_package` 安装 Claude CLI，`claude_config` 写入 `~/.claude` 配置
- `codex_install` 安装 `@openai/codex`，不托管 Codex 配置

--------

## 常用命令

完整部署：

```bash
./vibe.yml -l <host>
```

组件级部署：

```bash
./vibe.yml -l <host> -t code
./vibe.yml -l <host> -t jupyter
./vibe.yml -l <host> -t nodejs
./vibe.yml -l <host> -t claude
./vibe.yml -l <host> -t codex
```

配置更新：

```bash
./vibe.yml -l <host> -t code_config,code_launch
./vibe.yml -l <host> -t jupyter_config,jupyter_launch
./vibe.yml -l <host> -t claude_config
```

禁用组件：

```bash
./vibe.yml -l <host> -e code_enabled=false
./vibe.yml -l <host> -e jupyter_enabled=false
./vibe.yml -l <host> -e nodejs_enabled=false
./vibe.yml -l <host> -e claude_enabled=false
./vibe.yml -l <host> -e codex_enabled=false
```

--------

## 部署顺序

```bash
./deploy.yml      # NODE + INFRA + PGSQL
./juice.yml       # 可选共享存储
./vibe.yml        # VIBE
```

--------

## 幂等性

`vibe.yml` 支持重复执行，配置变更后可直接重跑。
