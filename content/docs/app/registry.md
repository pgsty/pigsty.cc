---
title: Registry：容器镜像仓库
weight: 615
description: 部署 Docker Registry 镜像服务，加速 Docker 镜像拉取，特别适合中国用户。
module: [SOFTWARE]
categories: [参考]
---

[**Docker Registry**](https://docs.docker.com/registry/) 镜像服务用于缓存 Docker Hub 和其他镜像仓库的镜像。

特别适合中国用户或访问 Docker Hub 速度较慢的地区，显著减少镜像拉取时间。

## 快速开始

```bash
cd ~/pigsty/app/registry
make up     # 启动 Registry 镜像服务
```

访问地址： http://registry.pigsty 或 http://10.10.10.10:5000

## 功能特性

- **镜像缓存**：缓存 Docker Hub 和其他仓库的镜像
- **Web 界面**：可选的镜像管理界面
- **高性能**：本地缓存大幅提升拉取速度
- **存储管理**：可配置的清理和管理策略
- **健康检查**：内置健康检查端点

## 配置 Docker

配置 Docker 使用本地镜像：

```bash
# 编辑 /etc/docker/daemon.json
{
  "registry-mirrors": ["http://10.10.10.10:5000"]
}

# 重启 Docker
systemctl restart docker
```

## 存储管理

镜像数据存储在 `/data/registry` 目录，建议预留至少 100GB 空间。

## 相关链接

- Docker Registry 文档： https://docs.docker.com/registry/
- GitHub 仓库： https://github.com/distribution/distribution
