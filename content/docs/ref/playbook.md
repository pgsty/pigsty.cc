---
title: 剧本列表
weight: 480
description: Pigsty 提供了一系列 Ansible 剧本用于自动化部署与管理各个模块，本页面提供了所有剧本的导航与汇总。
icon: fa-solid fa-scroll
categories: [参考]
---

## 模块导航

每个模块均包含若干预置剧本，以下表格列出了各模块及其包含的剧本数量与说明：

|                  模块                   | 数量 | 说明                |
|:-------------------------------------:|:--:|-------------------|
|  [**`INFRA`**](/docs/infra/playbook)  | 5  | 基础设施模块剧本          |
|   [**`NODE`**](/docs/node/playbook)   | 2  | 节点管理模块剧本          |
|   [**`ETCD`**](/docs/etcd/playbook)   | 2  | ETCD 集群管理剧本       |
|  [**`PGSQL`**](/docs/pgsql/playbook)  | 7  | PostgreSQL 集群管理剧本 |
|  [**`REDIS`**](/docs/redis/playbook)  | 2  | Redis 集群管理剧本      |
|  [**`MINIO`**](/docs/minio/playbook)  | 2  | MinIO 对象存储管理剧本    |
| [**`FERRET`**](/docs/ferret/playbook) | 1  | FerretDB 管理剧本     |
| [**`DOCKER`**](/docs/docker/playbook) | 2  | Docker 与应用管理剧本    |
{.stretch-last}

----------------

## 剧本汇总

以下表格列出了 Pigsty 中所有可用的预置剧本:

| 剧本                                                                   | 模块                           | 功能                                |
|----------------------------------------------------------------------|------------------------------|-----------------------------------|
| [**`deploy.yml`**](/docs/infra/playbook#deployyml)                   | [**`INFRA`**](/docs/infra)   | 在所有节点上一次性完整部署所有组件                 |
| [**`infra.yml`**](/docs/infra/playbook#infrayml)                     | [**`INFRA`**](/docs/infra)   | 在 infra 节点上初始化 pigsty 基础设施        |
| [**`infra-rm.yml`**](/docs/infra/playbook#infra-rmyml)               | [**`INFRA`**](/docs/infra)   | 从 infra 节点移除基础设施组件                |
| [**`cache.yml`**](/docs/infra/playbook#cacheyml)                     | [**`INFRA`**](/docs/infra)   | 从现有仓库创建离线安装包缓存                    |
| [**`cert.yml`**](/docs/infra/playbook#certyml)                       | [**`INFRA`**](/docs/infra)   | 使用 Pigsty 自签名 CA 签发证书             |
| [**`node.yml`**](/docs/node/playbook#nodeyml)                        | [**`NODE`**](/docs/node)     | 纳管节点，调整节点到期望状态                    |
| [**`node-rm.yml`**](/docs/node/playbook#node-rmyml)                  | [**`NODE`**](/docs/node)     | 从 Pigsty 中移除纳管节点                  |
| [**`etcd.yml`**](/docs/etcd/playbook#etcdyml)                        | [**`ETCD`**](/docs/etcd)     | 安装与配置 Etcd 集群                     |
| [**`etcd-rm.yml`**](/docs/etcd/playbook#etcd-rmyml)                  | [**`ETCD`**](/docs/etcd)     | 移除 Etcd 集群或成员                     |
| [**`pgsql.yml`**](/docs/pgsql/playbook#pgsqlyml)                     | [**`PGSQL`**](/docs/pgsql)   | 初始化 PostgreSQL 集群或添加新的从库          |
| [**`pgsql-rm.yml`**](/docs/pgsql/playbook#pgsql-rmyml)               | [**`PGSQL`**](/docs/pgsql)   | 移除 PostgreSQL 集群，或移除某个实例          |
| [**`pgsql-user.yml`**](/docs/pgsql/playbook#pgsql-useryml)           | [**`PGSQL`**](/docs/pgsql)   | 在现有的 PostgreSQL 集群中添加新的业务用户       |
| [**`pgsql-db.yml`**](/docs/pgsql/playbook#pgsql-dbyml)               | [**`PGSQL`**](/docs/pgsql)   | 在现有的 PostgreSQL 集群中添加新的业务数据库      |
| [**`pgsql-monitor.yml`**](/docs/pgsql/playbook#pgsql-monitoryml)     | [**`PGSQL`**](/docs/pgsql)   | 将远程 PostgreSQL 实例纳入监控中            |
| [**`pgsql-migration.yml`**](/docs/pgsql/playbook#pgsql-migrationyml) | [**`PGSQL`**](/docs/pgsql)   | 为现有的 PostgreSQL 集群生成迁移手册和脚本       |
| [**`pgsql-pitr.yml`**](/docs/pgsql/playbook#pgsql-pitryml)           | [**`PGSQL`**](/docs/pgsql)   | 执行 PostgreSQL 时间点恢复 (PITR)        |
| [**`minio.yml`**](/docs/minio/playbook#minioyml)                     | [**`MINIO`**](/docs/minio)   | 安装 MinIO 集群                       |
| [**`minio-rm.yml`**](/docs/minio/playbook#minio-rmyml)               | [**`MINIO`**](/docs/minio)   | 移除 MinIO 集群                       |
| [**`redis.yml`**](/docs/redis/playbook#redisyml)                     | [**`REDIS`**](/docs/redis)   | 初始化 Redis 集群/节点/实例                |
| [**`redis-rm.yml`**](/docs/redis/playbook#redis-rmyml)               | [**`REDIS`**](/docs/redis)   | 移除 Redis 集群/节点/实例                 |
| [**`docker.yml`**](/docs/docker/playbook#dockeryml)                  | [**`DOCKER`**](/docs/docker) | 安装 Docker Daemon 与 Docker Compose |
| [**`app.yml`**](/docs/docker/playbook#appyml)                        | [**`DOCKER`**](/docs/docker) | 部署 Docker Compose 应用模板            |
| [**`mongo.yml`**](/docs/ferret/playbook#mongoyml)                    | [**`FERRET`**](/docs/ferret) | 在节点上安装 FerretDB                   |
{.stretch-last}

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
./etcd-rm.yml -e etcd_safeguard=false
./minio-rm.yml -l minio -e minio_safeguard=false
```


### 限制执行范围

执行剧本时建议使用 `-l` 参数限制命令执行的对象范围:

```bash
./pgsql.yml -l pg-meta            # 限制在集群 pg-meta 上执行
./node.yml -l 10.10.10.10         # 限制在特定节点上执行
./redis.yml -l redis-test         # 限制在 redis-test 集群上执行
```


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
