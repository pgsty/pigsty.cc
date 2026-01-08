---
title: app/registry
weight: 895
description: 使用 Pigsty 部署 Docker Registry 镜像代理和私有仓库
icon: fa-brands fa-docker
categories: [参考]
---

`app/registry` 配置模板提供了部署 Docker Registry 镜像代理的参考配置，可用作 Docker Hub 镜像加速或私有镜像仓库。


--------

## 配置概览

- 配置名称： `app/registry`
- 节点数量： 单节点
- 配置说明：部署 Docker Registry 镜像代理和私有仓库
- 适用系统：`el8`, `el9`, `el10`, `d12`, `d13`, `u22`, `u24`
- 适用架构：`x86_64`, `aarch64`
- 相关配置：[`meta`](/docs/conf/meta/)

启用方式：

```bash
./configure -c app/registry [-i <primary_ip>]
```


--------

## 配置内容

源文件地址：[`pigsty/conf/app/registry.yml`](https://github.com/Vonng/pigsty/blob/main/conf/app/registry.yml)

{{< readfile file="yaml/app/registry.yml" code="true" lang="yaml" >}}


--------

## 配置解读

`app/registry` 模板提供了 Docker Registry 镜像代理的一键部署方案。

**Registry 是什么**：
- Docker 官方的镜像仓库实现
- 可作为 Docker Hub 的拉取代理（Pull-through Cache）
- 也可作为私有镜像仓库使用
- 支持镜像缓存和本地存储

**关键特性**：
- 作为 Docker Hub 的代理缓存，加速镜像拉取
- 缓存镜像到本地存储 `/data/registry`
- 提供 Web UI 界面查看缓存的镜像
- 支持自定义缓存过期时间

**配置 Docker 客户端**：

```bash
# 编辑 /etc/docker/daemon.json
{
  "registry-mirrors": ["https://d.pigsty"],
  "insecure-registries": ["d.pigsty"]
}

# 重启 Docker
sudo systemctl restart docker
```

**访问方式**：

```bash
# Registry API
https://d.pigsty/v2/_catalog

# Web UI
http://dui.pigsty:5080

# 拉取镜像（自动使用代理）
docker pull nginx:latest
```

**适用场景**：
- 加速 Docker 镜像拉取（尤其在中国大陆）
- 减少对外网络依赖
- 企业内部私有镜像仓库
- 离线环境镜像分发

**注意事项**：
- 需要足够的磁盘空间存储缓存镜像
- 默认缓存 7 天（`REGISTRY_PROXY_TTL: 168h`）
- 可配置 HTTPS 证书（通过 certbot）

