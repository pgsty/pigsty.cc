---
title: "使用说明"
linkTitle: "使用说明"
description: "如何使用 Pigsty 扩展仓库安装 PostgreSQL 扩展"
weight: 50
icon: fa-solid fa-book-open
---

Pigsty 提供了三样基础设施，帮助用户利用 PostgreSQL 扩展生态的协同超能力：

- [**扩展目录**](/ext/list)：查阅 [**464**](/ext/list) 个扩展插件的详细信息、使用方法、元数据、下载链接与文档
- [**扩展仓库**](/docs/repo/pgsql)：获取预先打包的 RPM/DEB 二进制包，在 [**14 个 Linux 系统**](/ext/os) 上可用
- [**包管理器**](/docs/pig)：使用 [`pig`](/docs/pig) 命令行工具，屏蔽操作系统与架构差异，一键安装扩展

--------

## 快速上手

```bash
curl -fsSL https://repo.pigsty.cc/pig | bash  # 安装 pig 命令行工具
pig repo add pigsty pgdg -u                   # 配置 Pigsty 与 PGDG 软件仓库
pig install pg17                              # 从 PGDG 官方仓库安装 PostgreSQL 17 内核
pig install pg_duckdb -v 17                   # 例：为 PG 17 安装 pg_duckdb
```

--------

## 扩展仓库

Pigsty 扩展仓库包含以下三个来源的 RPM/DEB 软件包：

| **仓库** | **说明** |
|:---------|:---------|
| **PGDG** | PostgreSQL 全球开发组官方仓库，提供 PostgreSQL 内核与核心扩展 |
| **PIGSTY** | Pigsty 维护的补充仓库，提供 PGDG 中没有的额外扩展 |
| **CONTRIB** | PostgreSQL 自带的 contrib 扩展模块，随内核一起安装 |

仓库由 Cloudflare CDN 进行全球分发，并提供中国大陆 CDN 加速镜像。

--------

## 兼容系统

扩展仓库支持以下 Linux 发行版（x86_64 与 aarch64 架构），兼容 PostgreSQL 14 — 18：

| **系统** | **x86_64** | **aarch64** |
|:---------|:----------:|:-----------:|
| RockyLinux / RHEL 8 | [`el8.x86_64`](/ext/os/el8.x86_64) | [`el8.aarch64`](/ext/os/el8.aarch64) |
| RockyLinux / RHEL 9 | [`el9.x86_64`](/ext/os/el9.x86_64) | [`el9.aarch64`](/ext/os/el9.aarch64) |
| RockyLinux / RHEL 10 | [`el10.x86_64`](/ext/os/el10.x86_64) | [`el10.aarch64`](/ext/os/el10.aarch64) |
| Debian 12 (bookworm) | [`d12.x86_64`](/ext/os/d12.x86_64) | [`d12.aarch64`](/ext/os/d12.aarch64) |
| Debian 13 (trixie) | [`d13.x86_64`](/ext/os/d13.x86_64) | [`d13.aarch64`](/ext/os/d13.aarch64) |
| Ubuntu 22.04 (jammy) | [`u22.x86_64`](/ext/os/u22.x86_64) | [`u22.aarch64`](/ext/os/u22.aarch64) |
| Ubuntu 24.04 (noble) | [`u24.x86_64`](/ext/os/u24.x86_64) | [`u24.aarch64`](/ext/os/u24.aarch64) |
{.ext-table}
