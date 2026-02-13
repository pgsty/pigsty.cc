---
title: docker
weight: 935
description: Pigsty Docker 容器化单机模板，适用于在容器内快速启动与体验 Pigsty。
icon: fa-brands fa-docker
categories: [参考]
---

`docker` 配置模板用于在 Docker 容器内运行 Pigsty，提供最小可用的单节点基础设施与 PostgreSQL 能力。


--------

## 配置概览

- 配置名称： `docker`
- 节点数量： 单节点（容器环境）
- 配置说明：容器内快速体验模板，使用 `127.0.0.1` 与精简系统能力，适配 Docker 场景。
- 适用系统：容器镜像内置环境（建议配合官方 Pigsty Docker 镜像）
- 适用架构：`x86_64`, `aarch64`
- 相关配置：[`meta`](/docs/conf/meta/)、[`vibe`](/docs/conf/vibe/)

启用方式：

```bash
./configure -c docker -i 127.0.0.1 -g
```


--------

## 配置内容

源文件地址：[`pigsty/conf/docker.yml`](https://github.com/pgsty/pigsty/blob/main/conf/docker.yml)

{{< readfile file="yaml/docker.yml" code="true" lang="yaml" >}}


--------

## 配置解读

`docker` 模板主要面向容器内开发与验证，默认配置特征如下：

- 关闭本地仓库构建（`repo_enabled: false`），避免容器内额外仓库构建成本。
- 精简节点行为：关闭 NTP、内核模块加载与 hosts 覆写（`node_ntp_enabled: false`、`node_kernel_modules: []`、`node_write_etc_hosts: false`）。
- 默认 PostgreSQL 18，预置较完整扩展集合（`pg18-*` 扩展包组）。
- 允许内网与公网密码访问（`pg_hba_rules` 包含 `intra` 与 `world`），便于演示与测试。
- 预留可选能力（注释项）：Code-Server、Jupyter、JuiceFS、Claude CLI 相关参数可按需启用。

注意事项：

- 这是开发/演示导向模板，生产环境请收紧 `pg_hba_rules` 与密码策略。
- 容器运行时建议挂载 `/data`，以持久化 PostgreSQL 与组件数据。
