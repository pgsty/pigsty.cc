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

- `jupyter_install` 在 `<jupyter_venv>/bin/python` 不存在时自动调用 `uv venv` 创建虚拟环境，并通过 `uv pip` 安装 `jupyterlab` 与 `ipykernel`
- `nodejs_config` 自动探测全局 npm 配置路径并写入 `prefix=/usr/local`（及可选镜像源）；`nodejs_pkg` 只安装 `npm_packages` 中声明的额外包，默认列表为空
- `claude_install` 通过系统包管理器安装 `claude_package`（默认原生包 `claude`），`claude_config` 非破坏性合并更新 `~/.claude/settings.json` 并初始化 `~/.claude.json`
- `codex_install` 通过系统包管理器安装原生软件包 `codex`，不托管 Codex 配置

--------

## 常用命令

完整部署：

```bash
./vibe.yml -l <host>
```

组件级部署（注意 `jupyter_enabled` 默认值为 `false`，若清单中未开启需显式传入 `-e jupyter_enabled=true`）：

```bash
./vibe.yml -l <host> -t code
./vibe.yml -l <host> -t jupyter -e jupyter_enabled=true
./vibe.yml -l <host> -t nodejs
./vibe.yml -l <host> -t claude
./vibe.yml -l <host> -t codex
```

配置更新（当配置、单元或环境文件发生变更时，`code_launch` 与 `jupyter_launch` 均会自动重启对应服务）：

```bash
./vibe.yml -l <host> -t code_config,code_launch
./vibe.yml -l <host> -t jupyter_config,jupyter_launch -e jupyter_enabled=true
./vibe.yml -l <host> -t claude_config
```

在本次执行中跳过组件：

```bash
./vibe.yml -l <host> -e code_enabled=false
./vibe.yml -l <host> -e jupyter_enabled=false
./vibe.yml -l <host> -e nodejs_enabled=false
./vibe.yml -l <host> -e claude_enabled=false
./vibe.yml -l <host> -e codex_enabled=false
```

这些开关彼此独立，仅作为对应任务的执行条件：设为 `false` 只会跳过对应安装与配置任务（例如 `nodejs_enabled=false` 即便在启用 `claude` 或 `codex` 时也会跳过 `nodejs` 阶段），不会停止、禁用或卸载此前已经部署的服务/软件。若要退役 Code-Server 或 JupyterLab，需要另行执行 `systemctl disable --now code-server` 或 `systemctl disable --now jupyter`；VIBE 当前没有独立的移除剧本。

--------

## 部署顺序

```bash
./deploy.yml      # 清单中已定义的 NODE、INFRA、ETCD、VAULT、MINIO 与 PGSQL
./juice.yml       # 可选共享存储
./vibe.yml        # VIBE
```

--------

## 幂等性

`vibe.yml` 支持重复执行，配置变更后可直接重跑。
