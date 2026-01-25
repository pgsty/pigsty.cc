---
title: 模块：Code
weight: 5010
description: 使用 Pigsty 部署 Code-Server，在浏览器中运行 VS Code，打造云端开发环境。
icon: fa-solid fa-code
module: [VIBE]
categories: [参考]
---

{{% alert title="文档已迁移" color="warning" %}}
Code-Server 现已整合到 **[VIBE 模块](/docs/vibe/)** 中，请参阅新文档了解完整内容：

- **[VIBE 概述](/docs/vibe/)**：模块介绍和快速开始
- **[VIBE 配置](/docs/vibe/config/)**：Code-Server 配置说明
- **[VIBE 参数](/docs/vibe/param/)**：`code_*` 参数详解
- **[VIBE 剧本](/docs/vibe/playbook/)**：部署和管理操作
- **[VIBE 管理](/docs/vibe/admin/)**：日常运维指南
- **[VIBE FAQ](/docs/vibe/faq/)**：常见问题解答
{{% /alert %}}

Code-Server 是在浏览器中运行的 VS Code，让您可以在任何设备上访问完整的开发环境。
Pigsty 的 VIBE 模块提供了 Code-Server 的自动化部署方案，通过 Nginx 反向代理提供 HTTPS 访问。


--------

## 概述

Code-Server 作为 VIBE 模块的一部分，部署为 systemd 服务，通过 Nginx 反向代理暴露到 Web。

```
用户浏览器
    ↓ HTTPS
Nginx (https://i.pigsty/code/)
    ↓ proxy_pass
Code-Server (127.0.0.1:8443)
    └─ User: {{ node_user }}
    └─ WorkDir: {{ vibe_data }}
    └─ DataDir: {{ code_data }}
```


--------

## 快速开始

### 启用 Code-Server

在节点上设置 `code_enabled: true`（默认已启用），然后执行：

```bash
./vibe.yml -l <host> -t code
```

或部署完整的 VIBE 模块（Code-Server + JupyterLab + Claude Code）：

```bash
./vibe.yml -l <host>
```

### 访问 Code-Server

部署完成后，通过以下地址访问：

- **子路径方式**：`https://i.pigsty/code/`
- **子域名方式**：`https://code.pigsty`（需在 `infra_portal` 中配置）

默认登录密码：`Code.Server`


--------

## 参数配置

| 参数               | 默认值           | 说明                               |
|:-----------------|:--------------|:---------------------------------|
| `code_enabled`   | `true`        | 是否在该节点启用 Code-Server             |
| `code_port`      | `8443`        | Code-Server 监听端口（仅 localhost）    |
| `vibe_data`      | `/fs`         | 工作目录（VS Code 打开的文件夹）             |
| `code_data`      | `/data/code`  | 用户数据目录（扩展、设置等）                   |
| `code_password`  | `Code.Server` | 登录密码                             |
| `code_gallery`   | `openvsx`     | 扩展市场：`openvsx` 或 `microsoft`     |
{.full-width}


--------

## 扩展市场

Code-Server 默认使用 [Open VSX](https://open-vsx.org/) 扩展市场。如需使用微软官方市场：

```yaml
code_gallery: microsoft
```

中国大陆用户可使用清华镜像加速（自动配置）。


--------

## 剧本与任务

Code-Server 通过 `vibe.yml` 剧本的 `code` 标签部署，包含以下任务：

| 标签               | 说明                     |
|:-----------------|:-----------------------|
| `code`           | Code-Server 完整部署       |
| `code_install`   | 安装 code-server 软件包     |
| `code_dir`       | 创建工作目录和数据目录            |
| `code_config`    | 渲染配置文件和 systemd 服务单元   |
| `code_launch`    | 启动 code-server 服务      |
{.full-width}

常用命令：

```bash
# 部署 Code-Server
./vibe.yml -l <host> -t code

# 仅更新配置
./vibe.yml -l <host> -t code_config

# 重启服务
./vibe.yml -l <host> -t code_launch
```


--------

## 目录结构

```
{{ vibe_data }}                 # 工作目录（如 /fs）
└── your-projects/              # 项目文件

{{ code_data }}                 # 数据目录（如 /data/code）
├── code-server/
│   ├── config.yaml             # Code-Server 配置
│   ├── extensions/             # 已安装扩展
│   └── User/
│       └── settings.json       # 用户设置
└── ...

/etc/systemd/system/code-server.service  # systemd 服务单元
/etc/default/code                         # 环境变量
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
          code_enabled: true
          code_password: 'MySecurePassword'
```

### AI 辅助编程沙箱

配合 JuiceFS 共享文件系统，打造云端开发环境（使用 `vibe` 配置模板）：

```yaml
all:
  children:
    infra:
      hosts:
        10.10.10.10:
          code_enabled: true
          code_password: 'Code.Server'
          vibe_data: /fs                # 使用 JuiceFS 挂载点作为工作目录
          jupyter_enabled: true
          jupyter_password: 'Jupyter.Lab'
          claude_enabled: true
          juice_instances:
            jfs:
              path: /fs
              meta: postgres://dbuser_meta:DBUser.Meta@10.10.10.10:5432/meta
              data: --storage postgres --bucket ...
```


--------

## 常见问题

### 如何修改密码？

修改配置中的 `code_password`，然后重新执行剧本：

```bash
./vibe.yml -l <host> -t code_config,code_launch
```

### 如何安装扩展？

在 Code-Server 界面中直接搜索安装，或通过命令行：

```bash
code-server --install-extension ms-python.python
```

### 扩展市场访问慢？

使用 `code_gallery: microsoft` 切换到微软官方市场，或确保网络可访问 Open VSX。

### 如何使用 GitHub Copilot？

GitHub Copilot 目前不支持 Code-Server，可以考虑使用其他 AI 辅助编程工具。


--------

## 支持平台

- **操作系统**：EL 8/9/10、Ubuntu 20/22/24、Debian 11/12/13
- **架构**：x86_64、ARM64
- **Ansible**：2.9+


