---
title: Registry：容器镜像缓存
weight: 615
description: 使用 Pigsty v4.2 部署 Docker Registry Pull-Through Cache 与可选 Web UI。
module: [SOFTWARE]
categories: [参考]
---

Pigsty v4.2 提供 `app/registry` 配置模板（`conf/app/registry.yml`），用于部署：

- Docker Registry 缓存服务（默认 `5000`）
- 可选管理 UI（默认 `5080`）

## 快速开始

```bash
curl -fsSL https://repo.pigsty.cc/get | bash; cd ~/pigsty
./bootstrap
./configure -c app/registry
vi pigsty.yml                 # 修改域名、证书与端口（如需）
./deploy.yml
./docker.yml
./app.yml
```

默认入口：

- Registry API：`http://<IP>:5000` 或 `http://d.pigsty`
- Registry UI：`http://<IP>:5080` 或 `http://dui.pigsty`

镜像数据目录默认为 `/data/registry`。

## Docker 客户端配置

如果你使用 HTTP（无 TLS），Docker 需要显式信任该仓库：

```json
{
  "registry-mirrors": ["http://d.pigsty"],
  "insecure-registries": ["d.pigsty:5000"]
}
```

修改 `/etc/docker/daemon.json` 后重启 Docker：

```bash
systemctl restart docker
```

## 运维命令

`app/registry/Makefile` 默认在 `/opt/registry` 工作：

```bash
cd /opt/registry
make up
make status
make health
make log
```

## 参考

- Docker Registry 文档： https://docs.docker.com/registry/
- Pigsty 模板： https://github.com/pgsty/pigsty/blob/main/conf/app/registry.yml
