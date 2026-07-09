---
title: Immich：自建照片视频库
weight: 602
description: 使用 Pigsty 自建 Google Photos 开源替代 Immich，并将元数据、向量检索、备份与入口交给 Pigsty 管理。
module: [SOFTWARE]
categories: [参考]
---

[**Immich**](https://github.com/immich-app/immich) 是高性能自托管照片与视频管理应用，也是最流行的 Google Photos 开源替代品之一。
它提供 Web 与移动端上传、相册共享、时间线、地图、EXIF、RAW、LivePhoto、语义搜索、人脸识别与自动备份等能力，采用 AGPL-3.0 许可证。

Pigsty 的 `app/immich` 模板使用 Docker Compose 拉起 Immich 应用层，并使用 Pigsty 托管的 PostgreSQL 保存元数据。
当前模板按 Immich v3 组织，默认使用 VectorChord 作为相似图片、智能搜索与人脸检索的向量扩展。

相比 Immich 官方的单机 Compose 模板，这里的关键差异是：PostgreSQL 不再跑在应用容器里，而是交给 Pigsty 管理，从而获得监控、备份、PITR、扩展管理与高可用接入能力。

------

## 快速开始

Immich 建议至少 2C / 6GB 内存，流畅使用建议 4C / 8GB 内存；v3 的 amd64 机器学习镜像需要 x86-64-v2 指令集。生产环境建议使用 Linux 与本地 SSD。

在运行 [兼容操作系统](/docs/deploy/prepare/) 的全新 Linux x86 / ARM 服务器上执行：

```bash
curl -fsSL https://repo.pigsty.cc/get | bash; cd ~/pigsty
./bootstrap
./configure -c app/immich
vi pigsty.yml              # 必改：密码、域名、媒体文件路径

./deploy.yml               # 安装 Pigsty 与 PostgreSQL
./docker.yml               # 安装 Docker 和 Compose
./app.yml                  # 安装 Immich
```

默认入口：

```text
http://photo.pigsty
http://10.10.10.10:2283
```

如果使用 `photo.pigsty`，请在浏览器所在主机添加 hosts 解析，或将模板中的域名替换为真实域名。

------

## 模板结构

[`conf/app/immich.yml`](https://github.com/pgsty/pigsty/blob/main/conf/app/immich.yml) 定义了单节点 Immich 自建模板。默认拓扑包括：

- `immich`：Immich Server、Machine Learning 与本地 Valkey/Redis 容器所在节点。
- `pg-immich`：Pigsty 托管的 PostgreSQL 数据库集群。
- `infra`：Nginx 入口、Grafana、VictoriaMetrics 等基础设施。
- `etcd`：Patroni 所需的分布式配置存储。

应用容器包括：

- `immich-server`：API、Web UI 与后台任务，默认监听宿主机 `2283` 端口。
- `immich-machine-learning`：CLIP 与人脸识别模型推理。
- `redis`：本地 Valkey 队列与缓存。

模板不会启动 Immich 上游 Compose 中的 PostgreSQL 容器；数据库由 Pigsty 通过 `DB_URL` 提供。

------

## 数据存储策略

Immich 的状态被拆成三层，请分别管理：

- **媒体文件**：原图、原视频、缩略图、转码视频、头像与上传队列，保存在 `UPLOAD_LOCATION` 对应的宿主机目录。
- **PostgreSQL**：保存用户、相册、资产、EXIF、文件路径、任务状态、人物、人脸与智能搜索向量等元数据。
- **Valkey/Redis**：保存队列、缓存与运行时状态，不应当作为权威数据源。

照片和视频本体不会写入 PostgreSQL。反过来，Immich 也不会把媒体目录当成唯一真相重新扫描出完整业务状态；数据库里保存的路径与元数据同样关键。

因此，一个可恢复的 Immich 备份必须同时包含 PostgreSQL 与媒体目录。只备份数据库会丢照片，只备份文件也无法可靠恢复相册、用户、分享、人脸与检索状态。

------

## PostgreSQL

默认数据库连接与向量扩展：

```text
DB_URL=postgresql://dbuser_immich:DBUser.Immich@10.10.10.10:5432/immich
DB_VECTOR_EXTENSION=vectorchord
```

模板会在 `pg-immich` 集群安装扩展包并创建数据库扩展：

```sql
CREATE EXTENSION vchord CASCADE;
CREATE EXTENSION earthdistance CASCADE;
```

`vchord` 需要通过 `pg_libs` 加入 `shared_preload_libraries`，模板已经配置：

```yaml
pg_extensions: [ pgvector, vchord ]
pg_libs: 'vchord.so, pg_stat_statements, auto_explain'
```

这里默认使用直连 PostgreSQL 的 `5432` 端口。不要把 Immich 指向事务池模式的 PgBouncer；迁移、索引和预备语句场景下，直连 PostgreSQL 或 session pooling 更稳妥。

Immich 官方仍然把预置 PostgreSQL 视为高级用法，但同时明确这种模式可以解锁 pgBackRest / Barman 这类 WAL 流式备份。Pigsty 模板选择无超级用户路径：由 Pigsty 预先创建数据库、用户和扩展，Immich 业务用户不需要 PostgreSQL 超级用户权限。

------

## 媒体文件

Immich 上传的照片、视频、缩略图、转码文件和头像保存在宿主机目录，也就是模板中的 `UPLOAD_LOCATION`：

```text
/data/immich/library
```

PostgreSQL 只保存元数据和文件路径。媒体文件不在 PostgreSQL 中，也不会被 pgBackRest 自动保护。

生产环境至少需要备份两层数据：

- PostgreSQL：使用 Pigsty pgBackRest / PITR。
- 媒体文件：对 `/data/immich/library` 做完整文件级备份，覆盖其中的原图、上传队列、缩略图、转码文件、头像与其他生成资产。

如果需要更一致的组合备份，先停止 `immich-server`，再同时备份数据库和媒体目录。如果业务不能停止，则建议先备份数据库，再备份文件系统。

------

## 镜像与网络

默认镜像来自 GHCR 与 Docker Hub：

```bash
docker pull ghcr.io/immich-app/immich-server:v3
docker pull ghcr.io/immich-app/immich-machine-learning:v3
docker pull docker.io/valkey/valkey:9
```

如果拉取镜像较慢或受限，请在 `pigsty.yml` 中配置 `proxy_env` 或 `docker_registry_mirrors`。

------

## 运维命令

安装后进入 `/opt/immich`：

```bash
cd /opt/immich

make up       # 启动 Immich
make logs     # 跟随日志
make info     # 查看容器状态
make pull     # 拉取镜像
make restart  # 重启容器
make down     # 停止并移除容器
```

如需固定具体 Immich 版本，在 `pigsty.yml` 中设置：

```yaml
IMMICH_VERSION: v3.0.1
```

升级 Immich 或 VectorChord 前，请先阅读上游 release notes。VectorChord 包升级后，通常还需要在 `immich` 数据库中更新扩展并重建相关索引：

```sql
ALTER EXTENSION vchord UPDATE;
REINDEX INDEX face_index;
REINDEX INDEX clip_index;
```

大型图库重建索引可能耗时较长，执行前请确认已有备份和维护窗口。

------

## 参考

- Immich 项目： https://github.com/immich-app/immich
- Immich 预置 PostgreSQL： https://docs.immich.app/administration/postgres-standalone/
- Immich 备份与恢复： https://docs.immich.app/administration/backup-and-restore/
- Pigsty Immich 模板： https://github.com/pgsty/pigsty/blob/main/conf/app/immich.yml
- [Pigsty Docker 模块](/docs/docker/)
- [Pigsty Nginx 入口](/docs/infra/admin/portal/)
