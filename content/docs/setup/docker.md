---
title: Docker 部署
linktitle: Docker 部署
weight: 258
description: 在 Docker 容器中快速拉起 Pigsty 单机环境，适合 macOS/Windows 用户体验学习
icon: fa-brands fa-docker
module: [PIGSTY]
categories: [教程]
---


Pigsty 旨在运行于原生 Linux 系统上，但也可以在带有 systemd 的 Linux 容器环境中运行。
如果您没有原生 Linux 环境（例如 **macOS** 或 **Windows** 用户），可以使用 Docker 快速拉起一个本地单机 Pigsty 环境进行测试与体验。


----------------

## 快速开始

进入 Pigsty 源码包的 [**`docker/`**](https://github.com/pgsty/pigsty/tree/main/docker) 目录，使用以下一键命令启动 Pigsty：

```bash
cd ~/pigsty/docker
make launch          # 启动容器 + 生成配置 + 执行部署
```

部署完成后，您可以通过以下方式访问服务：

| 服务         | 地址                                                               | 凭据                 |
|:-----------|:-----------------------------------------------------------------|:-------------------|
| SSH        | `ssh root@localhost -p 2222`                                     | 密码：`pigsty`        |
| Web 界面     | http://localhost:8080                                            | -                  |
| Grafana    | http://localhost:8080/ui                                         | `admin` / `pigsty` |
| PostgreSQL | `psql postgres://dbuser_dba:DBUser.DBA@localhost:5432/postgres`  | `DBUser.DBA`       |

{{% alert title="Web 界面与 PostgreSQL 服务" color="info" %}}
Web 界面与 PostgreSQL 服务仅在完成 **部署**（`./deploy.yml`）后才可用。
{{% /alert %}}


----------------

## 准备

使用 Docker 部署 Pigsty 需要满足以下条件：

|       项目       | 要求                                 |      项目      | 要求           |
|:--------------:|:-----------------------------------|:------------:|:-------------|
| **Docker**     | Docker 20.10+（Docker Desktop 或 CE） | **CPU**      | 至少 1 核       |
| **内存**         | 至少 2GB                             | **磁盘**       | 至少 20GB 可用空间 |

请确保默认宿主机端口（2222/8080/8443/5432）可用，否则请先修改 [**`.env`**](#配置) 文件。

{{% alert title="Docker 部署适用场景" color="success" %}}
- 在 macOS / Windows 等非 Linux 环境下快速体验 Pigsty
- 学习和测试 Pigsty 的功能特性，进行开发调试
- 快速构建一个本地开发用的 PostgreSQL 环境
{{% /alert %}}

{{% alert title="Docker 部署不适用场景" color="warning" %}}
- **生产环境部署**：容器环境性能和稳定性不如原生 Linux
- **高可用集群**：Docker 单机模式无法实现多节点高可用
- **大规模部署**：建议使用原生 Linux 虚拟机或物理机
{{% /alert %}}


----------------

## 镜像

Pigsty 提供开箱即用的 Docker 镜像，发布在 [**Docker Hub**](https://hub.docker.com/r/pgsty/pigsty)。

| 镜像             | 拉取大小   | 解压大小   | 内容                                 |
|:---------------|:-------|:-------|:-----------------------------------|
| `pgsty/pigsty` | ~500MB | 1.3GB  | Debian 13 + systemd + SSH + pig + Ansible |

- 同时支持 **amd64**（x86_64）和 **arm64**（Apple Silicon、AWS Graviton）架构
- 镜像标签与 Pigsty 版本一致：`v4.1.0`、`latest` 等
- 镜像内已预生成 docker 配置模板，可直接执行 `./deploy.yml` 部署

镜像基于 **Debian 13 (Trixie)** 构建，预装了 [**`pig`**](/docs/pig/) CLI 工具和 Ansible，并已初始化好 Pigsty 源码。


----------------

## 启动

Pigsty 提供了开箱即用的 Docker 支持，位于源码的 [**`docker/`**](https://github.com/pgsty/pigsty/tree/main/docker) 目录中。

最简单的方式是使用 `make launch` 一键启动，它会自动完成启动容器、生成配置、执行部署三个步骤：

```bash
cd ~/pigsty/docker
make launch          # 一键启动：up + config + deploy
```

或者分步执行，可以在每一步进行检查和调整：

```bash
cd ~/pigsty/docker
make up              # 启动容器
make exec            # 进入容器
./configure -c docker -g --ip 127.0.0.1  # 生成配置（可选，镜像已预配置）
./deploy.yml         # 执行部署
```

如果您想要使用本地构建的镜像而非从 Docker Hub 拉取，可以先执行构建：

```bash
cd ~/pigsty/docker
make build           # 本地构建镜像
make launch          # 启动容器 + 生成配置 + 执行部署
```


----------------

## 配置

您可以通过修改 [**`.env`**](https://github.com/pgsty/pigsty/blob/main/docker/.env) 文件来自定义镜像版本和端口映射：

```bash
PIGSTY_VERSION=v4.1.0         # 镜像版本，与 Pigsty 版本号一致
PIGSTY_SSH_PORT=2222          # SSH 端口
PIGSTY_HTTP_PORT=8080         # Nginx HTTP 端口
PIGSTY_HTTPS_PORT=8443        # Nginx HTTPS 端口
PIGSTY_PG_PORT=5432           # PostgreSQL 端口
```

**端口映射说明**：

| 环境变量                | 默认值      | 容器端口 | 说明             |
|:--------------------|:---------|:-----|:---------------|
| `PIGSTY_VERSION`    | `v4.1.0` | -    | 镜像版本标签         |
| `PIGSTY_SSH_PORT`   | `2222`   | 22   | SSH 访问端口       |
| `PIGSTY_HTTP_PORT`  | `8080`   | 80   | Nginx HTTP 端口  |
| `PIGSTY_HTTPS_PORT` | `8443`   | 443  | Nginx HTTPS 端口 |
| `PIGSTY_PG_PORT`    | `5432`   | 5432 | PostgreSQL 端口  |

如果默认端口已被占用，可以通过环境变量临时覆盖：

```bash
PIGSTY_HTTP_PORT=8888 docker compose up -d
```


----------------

## 命令

Pigsty Docker 提供了丰富的 Makefile 命令，方便您管理容器和镜像。

### Docker Compose 命令

推荐使用 Docker Compose 方式运行，以下是常用命令：

```bash
make up           # 启动容器
make down         # 停止并删除容器
make start        # 启动已停止的容器
make stop         # 停止容器
make restart      # 重启容器
make pull         # 拉取最新镜像
make config       # 在容器内执行 ./configure
make deploy       # 在容器内执行 ./deploy.yml
make launch       # 一键启动：up + config + deploy
```

### 容器访问命令

```bash
make exec         # 进入容器 bash
make ssh          # 通过 SSH 进入容器
make log          # 查看容器日志
make status       # 查看 systemd 状态
make ps           # 查看进程列表
make conf         # 查看配置文件
make pass         # 查看配置中的密码
```

### 镜像构建命令

```bash
make build        # 本地构建镜像
make buildnc      # 不使用缓存构建镜像
make push         # 构建并推送多架构镜像
```

### 镜像管理命令

```bash
make save         # 导出镜像到 pigsty-<version>-<arch>.tgz
make load         # 从 tgz 文件导入镜像
make rmi          # 删除当前版本的 pigsty 镜像
```

### 容器清理命令

```bash
make clean        # 停止并删除容器
make purge        # 删除容器并清空数据（会提示确认）
```


----------------

## 手动运行

如果您不想使用 Docker Compose，也可以直接使用 `docker run` 命令：

```bash
mkdir -p ./data
docker run -d --privileged --name pigsty \
  -p 2222:22 -p 8080:80 -p 5432:5432 \
  -v ./data:/data \
  pgsty/pigsty:v4.1.0

docker exec -it pigsty ./configure -c docker -g --ip 127.0.0.1
docker exec -it pigsty ./deploy.yml
```

或者使用 Makefile 提供的 `make run` 命令：

```bash
make run          # 使用 docker run 启动
make exec         # 进入容器
make clean        # 停止并删除容器
make purge        # 删除容器并清空数据
```


----------------

## 原理

Pigsty Docker 镜像基于 **Debian 13 (Trixie)**，启用了 **systemd** 作为 init 系统。
这使得容器内的服务管理方式与原生 Linux 系统保持一致，可以使用 `systemctl` 管理服务。

镜像的关键特性：

- **systemd 支持**：容器内运行完整的 systemd，可以正常使用服务管理
- **SSH 访问**：预配置了 SSH 服务，root 密码为 `pigsty`
- **特权模式**：需要 `--privileged` 参数以支持 systemd
- **数据持久化**：通过 `/data` 卷挂载实现数据持久化
- **预装软件**：预装 pig CLI 和 Ansible，已完成 Pigsty 源码初始化

镜像构建时会执行以下初始化步骤：

```dockerfile
# 安装 pig CLI
RUN echo "deb [trusted=yes] https://repo.pigsty.cc/apt/infra/ generic main" \
    > /etc/apt/sources.list.d/pigsty.list \
    && apt-get update && apt-get install -y pig

# 初始化 Pigsty 源码并安装 Ansible
RUN pig sty init -v ${PIGSTY_VERSION} \
    && pig sty boot \
    && pig sty conf -c docker --ip 127.0.0.1
```

在容器内执行 `./configure` 时，使用 `-c docker` 参数会应用专门针对 Docker 环境优化的 [**配置模板**](/docs/concept/iac/template/)：

- 使用 `127.0.0.1` 作为默认 IP 地址
- 针对容器环境进行了优化调整


----------------

## 常见问题

### 容器无法启动

确保 Docker 已正确安装且有足够的资源分配。在 Docker Desktop 中，建议分配至少 2GB 内存。
检查是否有端口冲突，特别是 2222、8080、8443、5432 端口。

### 服务访问失败

Web 界面和 PostgreSQL 服务仅在部署完成后才可用。请确保 `./deploy.yml` 已成功执行完成。
可以通过 `make status` 检查容器内服务状态。

### 端口冲突

如果默认端口已被占用，可以通过修改 `.env` 文件或使用环境变量指定其他端口：

```bash
PIGSTY_HTTP_PORT=8888 PIGSTY_PG_PORT=5433 docker compose up -d
```

### 数据持久化

容器数据默认挂载到 `./data` 目录。如果需要清空数据重新开始：

```bash
make purge        # 删除容器并清空数据（会提示确认）
```

### macOS 上的性能

在 macOS 上使用 Docker Desktop 时，由于虚拟化层的开销，性能会比原生 Linux 环境差。
这是正常现象，Docker 部署主要用于开发测试，生产环境请使用 [**原生 Linux 安装**](/docs/setup/install/)。


----------------

## 更多

- **Docker Hub**：https://hub.docker.com/r/pgsty/pigsty
- **源码目录**：https://github.com/pgsty/pigsty/tree/main/docker
- **快速上手**：[**原生 Linux 安装**](/docs/setup/install/)
- **离线安装**：[**离线安装**](/docs/setup/offline/)
- **生产部署**：[**部署指南**](/docs/deploy/)
