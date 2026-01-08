---
title: 剧本
weight: 3102
description: Pigsty 内置的 Ansible 剧本
icon: fa-solid fa-scroll
categories: [任务]
---

Pigsty 使用**幂等的** Ansible 剧本实现管理控制。执行剧本需要将 `ansible-playbook` 添加到系统 PATH 中，用户需要先 [安装 Ansible](./ansible/#安装) 才能执行剧本。


## 可用剧本

| 模块     | 剧本                    | 功能                              |
|--------|-----------------------|---------------------------------|
| INFRA  | `deploy.yml`          | 一键式安装 Pigsty                    |
| INFRA  | `infra.yml`           | 在基础设施节点上初始化 Pigsty 基础设施         |
| INFRA  | `infra-rm.yml`        | 从基础设施节点移除基础设施组件                 |
| INFRA  | `cache.yml`           | 从目标节点制作离线安装包                    |
| INFRA  | `cert.yml`            | 使用 Pigsty 自签名 CA 签发证书           |
| NODE   | `node.yml`            | 初始化节点，将节点配置到预期状态                |
| NODE   | `node-rm.yml`         | 从 Pigsty 中移除节点                  |
| PGSQL  | `pgsql.yml`           | 初始化高可用 PostgreSQL 集群，或添加新从库     |
| PGSQL  | `pgsql-rm.yml`        | 移除 PostgreSQL 集群，或移除从库          |
| PGSQL  | `pgsql-db.yml`        | 向现有 PostgreSQL 集群添加新业务数据库       |
| PGSQL  | `pgsql-user.yml`      | 向现有 PostgreSQL 集群添加新业务用户        |
| PGSQL  | `pgsql-pitr.yml`      | 在现有 PostgreSQL 集群上执行时间点恢复（PITR） |
| PGSQL  | `pgsql-monitor.yml`   | 使用本地导出器监控远程 PostgreSQL 实例       |
| PGSQL  | `pgsql-migration.yml` | 为现有 PostgreSQL 生成迁移手册和脚本        |
| PGSQL  | `slim.yml`            | 以最小化组件安装 Pigsty                 |
| REDIS  | `redis.yml`           | 初始化 Redis 集群/节点/实例              |
| REDIS  | `redis-rm.yml`        | 移除 Redis 集群/节点/实例               |
| ETCD   | `etcd.yml`            | 初始化 ETCD 集群，或添加新成员              |
| ETCD   | `etcd-rm.yml`         | 移除 ETCD 集群，或移除现有成员              |
| MINIO  | `minio.yml`           | 初始化 MinIO 集群                    |
| MINIO  | `minio-rm.yml`        | 移除 MinIO 集群                     |
| DOCKER | `docker.yml`          | 在节点上安装 Docker                   |
| DOCKER | `app.yml`             | 使用 Docker Compose 安装应用          |
| FERRET | `mongo.yml`           | 在节点上安装 Mongo/FerretDB           |


----------------

## 部署策略

`deploy.yml` 剧本会按照以下分组顺序协调各个专用剧本，完成完整部署：

- **infra**：`infra.yml`（-l infra）
- **nodes**：`node.yml`
- **etcd**：`etcd.yml`（-l etcd）
- **minio**：`minio.yml`（-l minio）
- **pgsql**：`pgsql.yml`

> **循环依赖说明**：NODE 和 INFRA 之间存在弱循环依赖：要将 NODE 注册到 INFRA，INFRA 必须已经存在；而 INFRA 模块又依赖 NODE 才能工作。
> 解决方法是先初始化 `infra` 节点，然后再添加其他节点。如果希望一次性完成所有部署，使用 `deploy.yml` 即可。


----------------

## 安全须知

> 大多数剧本都是**幂等**的，这意味着某些部署剧本在未开启保护选项的情况下，**可能会擦除现有数据库并创建新数据库**。
> 使用 `pgsql`、`minio` 和 `infra` 剧本时请特别小心。请仔细阅读文档，谨慎操作。

### 最佳实践

1. 执行前**仔细阅读剧本文档**
2. 发现异常时**立即按 Ctrl-C 停止**
3. 先在**非生产环境**中进行测试
4. 使用 `-l` 参数**限定执行主机**，避免影响非目标主机
5. 使用 `-t` 参数**指定特定标签**，仅执行部分任务


----------------

## 预演模式

使用 `--check --diff` 选项可以预览将要进行的更改，而不实际执行：

```bash
# 预览将要进行的更改，但不实际执行
./pgsql.yml -l pg-test --check --diff

# 结合标签检查特定任务
./pgsql.yml -l pg-test -t pg_config --check --diff
```
