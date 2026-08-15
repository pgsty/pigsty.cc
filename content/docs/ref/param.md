---
title: 参数列表
weight: 475
description: Pigsty v4.x 配置参数总览与模块参数导航
icon: fa-solid fa-sliders
categories: [参考]
---

本文是 Pigsty v4.x 的参数导航页，不重复展开每个参数的详细解释。
参数细节请进入各模块的 `param` 页面查看。

按照当前源码与参数参考页逐项对账，10 个正式模块合计 **373** 个公开参数。原生 MySQL 8.4 仍是试点模块，其 13 个公开参数单列，不计入正式模块合计。

--------

## 模块参数导航

|                 模块                 | 参数组 | 参数量 | 说明                                   |
|:----------------------------------:|:---:|:---:|:-------------------------------------|
|  [**`PGSQL`**](/docs/pgsql/param)  |  9  | 124 | PostgreSQL 高可用集群配置                   |
|  [**`INFRA`**](/docs/infra/param)  | 10  | 73  | 软件仓库与 Victoria 可观测基础设施               |
|   [**`NODE`**](/docs/node/param)   | 11  | 73  | 节点初始化、系统调优与运维基线                      |
|   [**`ETCD`**](/docs/etcd/param)   |  2  | 13  | ETCD 集群与移除保护参数                       |
|  [**`MINIO`**](/docs/minio/param)  |  2  | 22  | Silo 部署、观测与移除参数                       |
|  [**`REDIS`**](/docs/redis/param)  |  2  | 22  | Redis/Valkey 部署与移除参数                 |
| [**`DOCKER`**](/docs/docker/param) |  1  |  8  | Docker 引擎参数                          |
|  [**`JUICE`**](/docs/juice/param)  |  1  |  2  | JuiceFS 实例与缓存参数                      |
|   [**`VIBE`**](/docs/vibe/param)   |  1  | 18  | Code/Jupyter/Node.js/Claude/Codex 配置 |
|  [**`KAFKA`**](/docs/kafka/param)  |  2  | 18  | Kafka 部署参数与移除保护参数                    |
{.stretch-last}

试点模块：[**原生 `MYSQL` 8.4**](/docs/mysql/param/#参数概览) 当前公开 13 个参数，其中 11 个用于部署、2 个用于受保护移除；固定的端口、路径、软件版本和定时器不属于公开参数。

--------

## 参数组速览

|                 模块                 | 主要参数组                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|:----------------------------------:|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|  [**`PGSQL`**](/docs/pgsql/param)  | [`PG_ID`](/docs/pgsql/param/#pg_id)、[`PG_BUSINESS`](/docs/pgsql/param/#pg_business)、[`PG_INSTALL`](/docs/pgsql/param/#pg_install)、[`PG_BOOTSTRAP`](/docs/pgsql/param/#pg_bootstrap)、[`PG_PROVISION`](/docs/pgsql/param/#pg_provision)、[`PG_BACKUP`](/docs/pgsql/param/#pg_backup)、[`PG_ACCESS`](/docs/pgsql/param/#pg_access)、[`PG_MONITOR`](/docs/pgsql/param/#pg_monitor)、[`PG_REMOVE`](/docs/pgsql/param/#pg_remove)                                                                 |
|  [**`INFRA`**](/docs/infra/param)  | [`META`](/docs/infra/param/#meta)、[`CA`](/docs/infra/param/#ca)、[`INFRA_ID`](/docs/infra/param/#infra_id)、[`REPO`](/docs/infra/param/#repo)、[`INFRA_PACKAGE`](/docs/infra/param/#infra_package)、[`NGINX`](/docs/infra/param/#nginx)、[`DNS`](/docs/infra/param/#dns)、[`VICTORIA`](/docs/infra/param/#victoria)、[`PROMETHEUS`](/docs/infra/param/#prometheus)、[`GRAFANA`](/docs/infra/param/#grafana)                                                                                     |
|   [**`NODE`**](/docs/node/param)   | [`NODE_ID`](/docs/node/param/#node_id)、[`NODE_DNS`](/docs/node/param/#node_dns)、[`NODE_PACKAGE`](/docs/node/param/#node_package)、[`NODE_TUNE`](/docs/node/param/#node_tune)、[`NODE_SEC`](/docs/node/param/#node_sec)、[`NODE_ADMIN`](/docs/node/param/#node_admin)、[`NODE_TIME`](/docs/node/param/#node_time)、[`NODE_VIP`](/docs/node/param/#node_vip)<br>[`HAPROXY`](/docs/node/param/#haproxy)、[`NODE_EXPORTER`](/docs/node/param/#node_exporter)、[`VECTOR`](/docs/node/param/#vector) |
|   [**`ETCD`**](/docs/etcd/param)   | [`ETCD`](/docs/etcd/param/#etcd)、[`ETCD_REMOVE`](/docs/etcd/param/#etcd_remove)                                                                                                                                                                                                                                                                                                                                                                                                         |
|  [**`MINIO`**](/docs/minio/param)  | [`MINIO`](/docs/minio/param/#minio)、[`MINIO_REMOVE`](/docs/minio/param/#minio_remove)                                                                                                                                                                                                                                                                                                                                                                                                   |
|  [**`REDIS`**](/docs/redis/param)  | [`REDIS`](/docs/redis/param/#redis)、[`REDIS_REMOVE`](/docs/redis/param/#redis_remove)                                                                                                                                                                                                                                                                                                                                                                                                   |
| [**`DOCKER`**](/docs/docker/param) | [`DOCKER`](/docs/docker/param)                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
|  [**`JUICE`**](/docs/juice/param)  | [`JUICE`](/docs/juice/param)                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|   [**`VIBE`**](/docs/vibe/param)   | [`VIBE`](/docs/vibe/param)                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|  [**`KAFKA`**](/docs/kafka/param)  | [`KAFKA`](/docs/kafka/param/#参数概览)、[`KAFKA_REMOVE`](/docs/kafka/param/#临时受保护运维变量)                                                                                                                                                                                                                                                                                                                                                                                                       |
{.stretch-last}

--------

## 使用建议

- 首次部署优先阅读：[`NODE`](/docs/node/param)、[`INFRA`](/docs/infra/param)、[`PGSQL`](/docs/pgsql/param)
- 生产环境务必审查：`*_safeguard`、密码凭据、端口与网络暴露参数
- 变更前先在单集群小范围验证，再扩展到全局参数
