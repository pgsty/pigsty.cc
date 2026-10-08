---
title: app/registry
weight: 870
description: 使用 Pigsty 部署 Docker Registry 镜像代理缓存
icon: fa-brands fa-docker
categories: [参考]
---

`app/registry` 配置模板提供了部署 Docker Registry 镜像代理的参考配置，默认作为 Docker Hub 的 pull-through cache。


--------

## 配置概览

- 配置名称： `app/registry`
- 节点数量： 单节点
- 配置说明：部署 Docker Registry 镜像代理缓存
- 适用系统：`el8`, `el9`, `el10`, `d12`, `d13`, `u22`, `u24`, `u26`
- 适用架构：`x86_64`, `aarch64`
- 相关配置：[`meta`](/docs/conf/meta/)

启用方式：

```bash
./configure -c app/registry [-i <primary_ip>]
```


--------

## 配置内容

源文件地址：[`pigsty/conf/app/registry.yml`](https://github.com/pgsty/pigsty/blob/main/conf/app/registry.yml)

{{< include file="yaml/app/registry.yml" code=true lang="yaml" >}}


--------

## 配置解读

`app/registry` 模板提供了 Docker Registry 镜像代理的一键部署方案。

**Registry 是什么**：
- Docker 官方的镜像仓库实现
- 可作为 Docker Hub 的拉取代理（Pull-through Cache）
- 此模板的代理缓存模式不接受镜像推送
- 支持镜像缓存和本地存储

**关键特性**：
- 默认固定 `registry:3.1.2` 与 `joxit/docker-registry-ui:2.6.0` 镜像
- 作为 Docker Hub 的代理缓存，加速镜像拉取
- 缓存镜像到本地存储 `/data/registry`
- 提供 Web UI 界面查看缓存的镜像
- 支持自定义缓存过期时间

**配置 Docker 客户端**：

编辑 `/etc/docker/daemon.json`：

```json
{
  "registry-mirrors": ["http://d.pigsty"],
  "insecure-registries": ["d.pigsty"]
}
```

重启 Docker：

```bash
sudo systemctl restart docker
```

**访问方式**：

```bash
# Registry API
http://d.pigsty/v2/_catalog

# Web UI
http://dui.pigsty

# 拉取镜像（自动使用代理）
docker pull nginx:latest
```

**适用场景**：
- 加速 Docker 镜像拉取（尤其在中国大陆）
- 减少对外网络依赖
- 多台主机共享 Docker Hub 拉取缓存

**注意事项**：
- 需要足够的磁盘空间存储缓存镜像
- 默认缓存 7 天（`REGISTRY_PROXY_TTL: 168h`）
- 可配置 HTTPS 证书（通过 certbot）
- `registry-mirrors` 不重定向 GHCR / Quay；容器出站代理使用 `REGISTRY_HTTP_PROXY` / `REGISTRY_HTTPS_PROXY`
- Registry 启动仍依赖上游可用性；不能把已有缓存视为独立离线仓库
- 升级前保留配置与缓存，升级后验证 manifest/blob digest 与冷、热拉取，见 [应用说明](/docs/app/registry/#代理与升级)
