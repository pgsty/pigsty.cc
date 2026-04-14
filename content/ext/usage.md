---
title: "使用说明"
linkTitle: "使用说明"
description: "如何使用 Pigsty 扩展仓库安装 PostgreSQL 扩展"
weight: 100
icon: fa-solid fa-book-open
---

Pigsty 提供了三样基础设施，帮助用户利用 PostgreSQL 扩展生态的协同超能力：

- [**扩展目录**](/ext/list)：查阅 [**504**](/ext/list) 个扩展插件的详细信息、使用方法、元数据、下载链接与文档
- [**扩展仓库**](/docs/repo/pgsql)：获取预先打包的 RPM/DEB 二进制包，在 [**14 个 Linux 系统**](/ext/os) 上可用
- [**包管理器**](/docs/pig)：使用 [`pig`](/docs/pig) 命令行工具，屏蔽操作系统与架构差异，一键安装扩展

--------

## 快速上手

```bash
curl -fsSL https://repo.pigsty.cc/pig | bash  # 安装 pig 命令行工具
pig repo add pigsty pgdg -u                   # 配置 Pigsty 与 PGDG 软件仓库
pig install pg18                              # 从 PGDG 官方仓库安装 PostgreSQL 18 内核
pig install pg_duckdb -v 18                   # 例：为 PG 18 安装 pg_duckdb （如果 PG18 在 PATH 中可以省略版本号）
```

--------

## 扩展仓库

Pigsty 扩展仓库包含以下三个来源的 RPM/DEB 软件包：

| **仓库**                         | **说明**                                     |
|:-------------------------------|:-------------------------------------------|
| [**PGDG**](/docs/repo/pgdg)    | PostgreSQL 全球开发组官方仓库，提供 PostgreSQL 内核与核心扩展 |
| [**PIGSTY**](/docs/repo/pgsql) | Pigsty 维护的补充仓库，提供 PGDG 中没有的额外扩展            |
| **CONTRIB**                    | PostgreSQL 自带的 contrib 扩展模块，随内核一起安装        |

仓库由 Cloudflare CDN 进行全球分发，并提供中国大陆 CDN 加速镜像。

要安装扩展，需要添加这两个仓库（PGDG 和 PIGSTY）以安装内核与扩展，以及您操作系统的默认软件仓库以安装必须的依赖。


