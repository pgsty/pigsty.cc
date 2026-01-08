---
title: 常见问题
weight: 4250
description: Pigsty Docker 模块常见问题答疑
icon: fa-solid fa-circle-question
module: [Docker]
categories: [参考]
---



--------

## 谁能执行Docker命令？

默认情况下，Pigsty 会将当前远程节点执行剧本的管理用户（即目标节点上 ssh 远程登陆的用户），以及参数 [`node_admin_username`](/docs/node/param#node_admin_username) 中指定的管理用户加入到 Docker 操作系统用户组中。
在这个用户组（`docker`）中的所有用户，可以使用 `docker` CLI 命令对 Docker 发起管理。

如果你想让其他用户也可以执行 Docker 命令，可以将该操作系统用户加入到 docker 组中：

```bash
usermod -aG docker <username>
```


--------

## 使用代理服务器

在 Docker 安装过程中，如果 [`proxy_env`](/docs/infra/param#proxy_env) 参数存在，
这里的 HTTP 代理服务器配置会被写入到 `/etc/docker/daemon.json` 配置文件中。

Docker 在从上游 Registry 拉取镜像时，会使用此代理服务器。

小提示，在执行 `configure` 过程中使用 `-x` 参数会将当前环境中的代理服务器配置写入到 `proxy_env` 中。


--------

## 使用镜像站点

如果您在中国大陆受到功夫网影响，可以考虑使用墙内可用的 Docker 镜像站点，例如 quay.io：

```bash
docker login quay.io    # 输入用户名密码，完成登陆
```

2024-06 更新，国内所有可用 Docker 镜像站点均已被墙，请使用代理服务器访问并拉取。



--------

## 将Docker纳入监控

在 Docker 模块安装过程中

针对节点单独执行监控目标注册子任务 `docker_register` 或 `register_prometheus` 即可：

```bash
./docker.yml -l <your-node-selector> -t register_prometheus
```



--------

## 使用软件模板

Pigsty 提供了一系列使用 Docker Compose 拉起的软件 [**工具模板**](/docs/app/)，可以开箱即用。

但需要首先安装 Docker 模块。
