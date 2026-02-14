---
title: 模块：DOCKER
weight: 4200
description: Docker Daemon 服务，允许用户一键拉起容器化的无状态软件工具模板，加装各种功能。
icon: fa-brands fa-docker
module: [DOCKER]
categories: [参考]
---


[Docker](https://www.docker.com/) 是最流行的容器化平台，提供了标准化的软件交付能力。

**Pigsty 本身并不依赖 Docker 部署任何组件，相反，它提供了部署安装 Docker 的能力**，这是一个 **可选模块**。

Pigsty 提供一系列 [Docker 软件/工具/应用模板](/docs/app/)，供您按需选用。
这允许用户快速拉起各种容器化的无状态软件工具模板，加装各种功能。
您可以使用外部由 Pigsty 托管的高可用数据库集群，将无状态的应用放入容器之中。

在执行 `configure` 时，Pigsty 会根据 `region`（如中国大陆网络环境）自动选择合适的软件源与镜像加速配置，以提升拉取镜像的速度与可用性。
您可以轻松配置 Registry 与 Proxy，以便灵活访问不同的镜像源。
