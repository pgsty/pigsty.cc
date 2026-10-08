---
title: Registry：容器镜像缓存
weight: 615
description: 使用 Pigsty 部署 Docker Registry Pull-Through Cache 与可选 Web UI。
module: [SOFTWARE]
categories: [参考]
---

Pigsty 提供 `app/registry` 配置模板（`conf/app/registry.yml`），用于部署：

- Docker Registry 缓存服务（默认 `5000`）
- 可选管理 UI（默认 `5080`）

默认镜像为 `registry:3.1.2` 与 `joxit/docker-registry-ui:2.6.0`。模板是单上游 pull-through cache，默认缓存 Docker Hub；此模式不接受镜像推送。

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
  "insecure-registries": ["d.pigsty"]
}
```

`registry-mirrors` 只代理 Docker Hub 拉取，不会重定向 GHCR、Quay 等显式镜像地址。若直接访问 `http://<IP>:5000`，镜像地址与 `insecure-registries` 应同时改为对应的 `<IP>:5000`。

修改 `/etc/docker/daemon.json` 后重启 Docker：

```bash
systemctl restart docker
```

## 代理与升级

Docker daemon 的拉取代理与 Registry 容器访问上游的代理分别配置。后者使用 `REGISTRY_HTTP_PROXY` / `REGISTRY_HTTPS_PROXY`，地址必须能从容器访问；宿主机的 `127.0.0.1` 不是容器的宿主机入口。

Registry 3.1.2 在启动时仍会访问上游；已有缓存不代表能在上游断网时重启成离线仓库。默认未认证的缓存只应开放给可信网络；若配置上游私有凭据，还需保护缓存入口，避免向所有访问者暴露私有镜像。

3.1.2 包含 manifest/blob digest 验证修复。升级前保留配置和缓存副本，升级后检查 `/v2/`、UI 后端，以及按 digest 的冷、热缓存拉取。参见 [3.1.2 发布说明](https://github.com/distribution/distribution/releases/tag/v3.1.2)。

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
