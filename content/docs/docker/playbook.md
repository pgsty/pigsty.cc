---
title: 预置剧本
weight: 4230
description: 如何使用预置的 ansible 剧本来管理 Docker，常用管理命令速查。
icon: fa-solid fa-scroll
module: [DOCKER]
categories: [任务]
---

Docker 模块提供了一个默认的剧本 [`docker.yml`](#dockeryml) ，用于安装 Docker Daemon 与 Docker Compose。

------

## `docker.yml`

剧本原始文件：[`docker.yml`](https://github.com/pgsty/pigsty/blob/main/docker.yml) 中

执行本剧本，将会在带有 `docker_enabled: true` 标记的目标节点上安装 `docker-ce` 与 `docker-compose-plugin`，启用 `dockerd` 服务

以下是 `docker.yml` 剧本中可用的任务子集：

- `docker_install`   ： 在节点上安装 Docker，Docker Compose 软件包
- `docker_admin`     ： 将指定的用户加入 Docker 管理员用户组中
- `docker_alias`     ： 生成 Docker 命令补全与别名脚本
- `docker_dir`       ： 创建 Docker 相关目录
- `docker_config`    ： 生成 Docker 守护进程服务配置文件
- `docker_launch`    ： 启动 Docker 守护进程服务
- `docker_register`  ： 将 Docker 守护进程注册为 Prometheus 监控目标
- `docker_image`     ： 尝试从 `/tmp/docker/*.tgz` 加载预置镜像压缩包（如果存在）

Docker 模块没有提供专门的卸载剧本，如果您需要卸载 Docker，可以手工停止 docker 后卸载：

```bash
systemctl stop docker                        # 停止 Docker 守护进程服务
yum remove docker-ce docker-compose-plugin   # 在 EL 系统上卸载 Docker 
apt remove docker-ce docker-compose-plugin   # 在 Debian 系统上卸载 Docker
```

