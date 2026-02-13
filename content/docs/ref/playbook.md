---
title: 剧本列表
weight: 480
description: Pigsty v4.x 预置 Ansible 剧本导航与执行要点
icon: fa-solid fa-scroll
categories: [参考]
---

本文汇总 Pigsty v4.x 各模块剧本入口与执行要点，详细任务标签请进入对应模块 `playbook` 文档。

## 模块剧本导航

| 模块                                    | 数量 | 剧本                                                                                                                              |
|:--------------------------------------|:--:|:--------------------------------------------------------------------------------------------------------------------------------|
| [**`INFRA`**](/docs/infra/playbook)   | 3  | `deploy.yml` `infra.yml` `infra-rm.yml`                                                                                         |
| [**`NODE`**](/docs/node/playbook)     | 2  | `node.yml` `node-rm.yml`                                                                                                        |
| [**`ETCD`**](/docs/etcd/playbook)     | 2  | `etcd.yml` `etcd-rm.yml`                                                                                                        |
| [**`PGSQL`**](/docs/pgsql/playbook)   | 7  | `pgsql.yml` `pgsql-rm.yml` <br> `pgsql-user.yml` `pgsql-db.yml` <br> `pgsql-monitor.yml` `pgsql-migration.yml` `pgsql-pitr.yml` |
| [**`REDIS`**](/docs/redis/playbook)   | 2  | `redis.yml` `redis-rm.yml`                                                                                                      |
| [**`MINIO`**](/docs/minio/playbook)   | 2  | `minio.yml` `minio-rm.yml`                                                                                                      |
| [**`FERRET`**](/docs/ferret/playbook) | 1  | `mongo.yml`                                                                                                                     |
| [**`DOCKER`**](/docs/docker/playbook) | 1  | `docker.yml`                                                                                                                    |
| [**`JUICE`**](/docs/juice/playbook)   | 1  | `juice.yml`                                                                                                                     |
| [**`VIBE`**](/docs/vibe/playbook)     | 1  | `vibe.yml`                                                                                                                      |
{.full-width}

--------

## 剧本总表

| 剧本                                                                   |    模块    | 主要用途                                         |
|:---------------------------------------------------------------------|:--------:|:---------------------------------------------|
| [**`deploy.yml`**](/docs/infra/playbook#deployyml)                   | `INFRA`  | 一次性部署核心链路（Infra/Node/Etcd/PGSQL，按配置启用 MinIO） |
| [**`infra.yml`**](/docs/infra/playbook#infrayml)                     | `INFRA`  | 初始化基础设施节点                                    |
| [**`infra-rm.yml`**](/docs/infra/playbook#infra-rmyml)               | `INFRA`  | 移除基础设施组件                                     |
| [**`node.yml`**](/docs/node/playbook#nodeyml)                        |  `NODE`  | 节点纳管与基线配置                                    |
| [**`node-rm.yml`**](/docs/node/playbook#node-rmyml)                  |  `NODE`  | 节点去纳管                                        |
| [**`etcd.yml`**](/docs/etcd/playbook#etcdyml)                        |  `ETCD`  | ETCD 安装/扩容                                   |
| [**`etcd-rm.yml`**](/docs/etcd/playbook#etcd-rmyml)                  |  `ETCD`  | ETCD 移除/缩容                                   |
| [**`pgsql.yml`**](/docs/pgsql/playbook#pgsqlyml)                     | `PGSQL`  | 初始化 PostgreSQL 集群或新增实例                       |
| [**`pgsql-rm.yml`**](/docs/pgsql/playbook#pgsql-rmyml)               | `PGSQL`  | 移除 PostgreSQL 集群/实例                          |
| [**`pgsql-user.yml`**](/docs/pgsql/playbook#pgsql-useryml)           | `PGSQL`  | 增加业务用户                                       |
| [**`pgsql-db.yml`**](/docs/pgsql/playbook#pgsql-dbyml)               | `PGSQL`  | 增加业务数据库                                      |
| [**`pgsql-monitor.yml`**](/docs/pgsql/playbook#pgsql-monitoryml)     | `PGSQL`  | 纳管远程 PostgreSQL 监控                           |
| [**`pgsql-migration.yml`**](/docs/pgsql/playbook#pgsql-migrationyml) | `PGSQL`  | 生成迁移手册与脚本                                    |
| [**`pgsql-pitr.yml`**](/docs/pgsql/playbook#pgsql-pitryml)           | `PGSQL`  | 时间点恢复（PITR）                                  |
| [**`redis.yml`**](/docs/redis/playbook#redisyml)                     | `REDIS`  | Redis 部署                                     |
| [**`redis-rm.yml`**](/docs/redis/playbook#redis-rmyml)               | `REDIS`  | Redis 移除                                     |
| [**`minio.yml`**](/docs/minio/playbook#minioyml)                     | `MINIO`  | MinIO 部署                                     |
| [**`minio-rm.yml`**](/docs/minio/playbook#minio-rmyml)               | `MINIO`  | MinIO 移除                                     |
| [**`mongo.yml`**](/docs/ferret/playbook#mongoyml)                    | `FERRET` | FerretDB（Mongo API）部署                        |
| [**`docker.yml`**](/docs/docker/playbook#dockeryml)                  | `DOCKER` | Docker 引擎部署                                  |
| [**`juice.yml`**](/docs/juice/playbook#juiceyml)                     | `JUICE`  | JuiceFS 实例部署/移除                              |
| [**`vibe.yml`**](/docs/vibe/playbook#vibeyml)                        |  `VIBE`  | VIBE 开发环境部署                                  |
{.full-width}

--------

## 辅助剧本

以下剧本不归属于特定模块，提供一些辅助功能。

| 剧本                                                                     | 说明                       |
|:-----------------------------------------------------------------------|:-------------------------|
| [**`cache.yml`**](https://github.com/pgsty/pigsty/blob/main/cache.yml) | 构建离线安装包缓存                |
| [**`cert.yml`**](https://github.com/pgsty/pigsty/blob/main/cert.yml)   | 使用 Pigsty CA 签发证书        |
| [**`app.yml`**](https://github.com/pgsty/pigsty/blob/main/app.yml)     | 使用 Docker Compose 安装应用模板 |
| [**`slim.yml`**](https://github.com/pgsty/pigsty/blob/main/slim.yml)   | 最小化组件安装场景                |


----------------

## 剧本使用注意事项

### 保护机制

多个模块提供了防误删保险，通过 `*_safeguard` 参数控制：

- **PGSQL**: [**`pg_safeguard`**](/docs/pgsql/param#pg_safeguard) 参数用于防止误删 PostgreSQL 集群
- **ETCD**: [**`etcd_safeguard`**](/docs/etcd/param#etcd_safeguard) 参数用于防止误删 Etcd 集群
- **MINIO**: [**`minio_safeguard`**](/docs/minio/param#minio_safeguard) 参数用于防止误删 MinIO 集群

默认情况下，这些 safeguard 参数均未启用（未定义）。建议在生产环境中为已初始化的集群显式设置为 `true`。

当保护开关设置为 `true` 时，对应的 `*-rm.yml` 剧本会立即中止执行，防止误删。可以通过命令行参数强制覆盖：

```bash
./pgsql-rm.yml -l pg-test -e pg_safeguard=false
./etcd-rm.yml  -l etcd    -e etcd_safeguard=false
./minio-rm.yml -l minio   -e minio_safeguard=false
```


### 限制执行范围

执行剧本时建议使用 `-l` 参数限制命令执行的对象范围:

```bash
./pgsql.yml -l pg-meta            # 限制在集群 pg-meta 上执行
./node.yml -l 10.10.10.10         # 限制在特定节点上执行
./redis.yml -l redis-test         # 限制在 redis-test 集群上执行
```

在大规模部署上批量执行时，建议先在单集群灰度验证，再分批执行到全局。



### 幂等性

大部分剧本都是幂等的，可以重复执行。但需要注意：

- `infra.yml` 默认**不会**清除数据，可安全重复执行。所有 clean 参数（`vmetrics_clean`、`vlogs_clean`、`vtraces_clean`、`grafana_clean`、`nginx_clean`）默认均为 `false`
- 如需清除基础设施数据重建，需显式设置对应的 clean 参数为 `true`
- 重复执行 `*-rm.yml` 删除剧本需格外小心，确保在正确的目标上执行


### 任务标签

可以使用 `-t` 参数只执行特定的任务子集:

```bash
./pgsql.yml -l pg-test -t pg_service    # 只刷新集群 pg-test 的服务
./node.yml -t haproxy                   # 只在节点上设置 haproxy
./etcd.yml -t etcd_launch               # 只重启 etcd 服务
```


----------------

## 常用命令速查

### INFRA 模块

```bash
./deploy.yml                     # 一次性完整部署 Pigsty
./infra.yml                      # 初始化基础设施
./infra-rm.yml                   # 移除基础设施
./cache.yml                      # 从现有仓库创建离线安装包
./cert.yml -e cn=<name>          # 签发客户端证书
```

### NODE 模块

```bash
./node.yml -l <cls|ip>           # 添加节点
./node-rm.yml -l <cls|ip>        # 移除节点
bin/node-add <cls|ip>            # 添加节点 (包装脚本)
bin/node-rm <cls|ip>             # 移除节点 (包装脚本)
```

### ETCD 模块

```bash
./etcd.yml                       # 初始化 etcd 集群
./etcd-rm.yml                    # 移除 etcd 集群
bin/etcd-add <ip>                # 添加 etcd 成员 (包装脚本)
bin/etcd-rm <ip>                 # 移除 etcd 成员 (包装脚本)
```

### PGSQL 模块

```bash
./pgsql.yml -l <cls>             # 初始化 PostgreSQL 集群
./pgsql-rm.yml -l <cls>          # 移除 PostgreSQL 集群
./pgsql-user.yml -l <cls> -e username=<user>   # 创建业务用户
./pgsql-db.yml -l <cls> -e dbname=<db>         # 创建业务数据库
./pgsql-monitor.yml -e clsname=<cls>           # 监控远程集群
./pgsql-migration.yml -e@files/migration/<cls>.yml  # 生成迁移手册
./pgsql-pitr.yml -l <cls> -e '{"pg_pitr": {}}'      # 执行 PITR 恢复

bin/pgsql-add <cls>              # 初始化集群 (包装脚本)
bin/pgsql-rm <cls>               # 移除集群 (包装脚本)
bin/pgsql-user <cls> <user>      # 创建用户 (包装脚本)
bin/pgsql-db <cls> <db>          # 创建数据库 (包装脚本)
bin/pgsql-svc <cls>              # 刷新服务 (包装脚本)
bin/pgsql-hba <cls>              # 重载 HBA (包装脚本)
bin/pgmon-add <cls>              # 监控远程集群 (包装脚本)
```

### REDIS 模块

```bash
./redis.yml -l <cls>             # 初始化 Redis 集群
./redis-rm.yml -l <cls>          # 移除 Redis 集群
```

### MINIO 模块

```bash
./minio.yml -l <cls>             # 初始化 MinIO 集群
./minio-rm.yml -l <cls>          # 移除 MinIO 集群
```

### FERRET 模块

```bash
./mongo.yml -l ferret            # 安装 FerretDB
```

### DOCKER 模块

```bash
./docker.yml -l <host>           # 安装 Docker
./app.yml -e app=<name>          # 部署 Docker Compose 应用
```
