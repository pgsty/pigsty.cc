---
title: 上手
weight: 250
description: 在你的笔记本/云服务器上部署 Pigsty 单机版本，访问数据库以及 Web 用户界面
icon: fas fa-rocket
module: [PIGSTY]
categories: [教程]
---


Pigsty 采用可伸缩的架构设计，既可用于 [**超大规模生产环境**](/docs/deploy)，也可用于 [**单机开发演示环境**](/docs/setup/install)，本文关注后者。

如果您打算学习了解 Pigsty，可以从 [**快速上手**](/docs/setup/install/) 单机部署开始。一台 1C/2G 的 Linux 虚拟机即可运行 Pigsty。

您可以利用一台 Linux MiniPC，云厂商提供的免费/优惠虚拟机，Windows 的 WSL，或者在自己的笔记本上创建虚拟机用于 Pigsty 部署。
Pigsty 提供了开箱即用的 [**Vagrant**](/docs/deploy/vagrant/) 模板与 [**Terraform**](/docs/deploy/terraform/) 模版，可以帮助您一键在本地或云端置备 Linux 虚拟机。

[![pigsty-arch](/img/pigsty/arch.png)](/docs/concept/arch)

单机版本的 Pigsty 包含了所有核心功能，**444** 个 [**PG 扩展**](/docs/pgsql/ext)，自包含的 Grafana / Victoria 监控，[**IaC**](/docs/concept/iac) 置备能力。
以及本地 [**PITR**](/docs/concept/pitr) 时间点恢复。如果您配备了外部的对象存储（用于 PostgreSQL PITR 备份），那么对于 Demo，个人网站，小型服务等场景，
即使是单机环境，也可以提供一定程度的 [**数据持久性**](/docs/concept/pitr) 保证。
不过，单机无法实现 [**高可用**](/docs/concept/ha) —— 故障自动切换至少需要 3 个节点。

如果您想要在没有互联网连接的环境中安装 Pigsty，请参考 [**离线安装**](/docs/setup/offline/) 模式。
如果您只需要 PostgreSQL 数据库本身，请参考 [**精简安装**](/docs/setup/slim/) 模式。
如果您准备开始进行严肃的多节点生产部署，请参考 [**部署指南**](/docs/deploy/)。

------

## 快速开始

[**准备**](/docs/deploy/prepare) 一台具有 [**SSH 权限**](/docs/deploy/admin#ssh) 的 [**节点**](/docs/deploy/prepare#节点)，
安装 [**兼容的 Linux 系统**](/docs/ref/linux/)，使用具有免密 [**`ssh`**](/docs/deploy/admin#ssh) 和 [**`sudo`**](/docs/deploy/admin#sudo) 权限的 [**管理用户**](/docs/deploy/admin) 执行：

```bash
curl -fsSL https://repo.pigsty.cc/get | bash  # 安装 Pigsty 与依赖
cd ~/pigsty; ./configure -g                   # 生成配置（使用默认单机配置模板，-g 参数会生成随机密码）
./deploy.yml                                  # 执行部署剧本，完成部署
```

是的，就是这么简单。您完全可以在不了解任何细节的情况下，使用 [**预制配置模板**](/docs/concept/iac/template) 一键拉起 Pigsty。

接下来，您可以探索 [**图形用户界面**](/docs/setup/webui/)，访问 [**PostgreSQL 数据库服务**](/docs/setup/pgsql/)；或者进行 [**配置定制**](/docs/setup/config) 并 [**执行剧本**](/docs/setup/playbook) 部署更多集群。 

