---
title: 参数列表
weight: 475
description: Pigsty v4.x 配置参数总览与模块参数导航
icon: fa-solid fa-sliders
categories: [参考]
---

本文是 Pigsty v4.x 的参数导航页，不重复展开每个参数的详细解释。
参数细节请进入各模块的 `param` 页面查看。

下表按 `files/cmdb.sql` 默认参数基线统计，12 个模块合计收录 **399** 个公开配置参数（包含各模块的部署与受保护移除参数）。各模块成熟度详见 [**模块列表**](/docs/ref/module/)。

--------

## 模块参数导航

|                 模块                 |  参数组   |   参数量   | 说明                                   |
|:----------------------------------:|:------:|:-------:|:-------------------------------------|
|  [**`PGSQL`**](/docs/pgsql/param)  |   10   |   125   | PostgreSQL 高可用集群、备份与 PITR 配置         |
|  [**`INFRA`**](/docs/infra/param)  |   10   |   73    | 软件仓库与 Victoria 可观测基础设施               |
|   [**`NODE`**](/docs/node/param)   |   11   |   73    | 节点初始化、系统调优与运维基线                      |
|   [**`ETCD`**](/docs/etcd/param)   |   2    |   13    | ETCD 集群与移除保护参数                       |
|  [**`VAULT`**](/docs/vault/param)  |   2    |    8    | OpenBao 密钥管理集群与移除保护参数                |
|  [**`MINIO`**](/docs/minio/param)  |   2    |   22    | Silo 部署、观测与移除参数                      |
|  [**`REDIS`**](/docs/redis/param)  |   2    |   22    | Redis/Valkey 部署与移除参数                 |
| [**`DOCKER`**](/docs/docker/param) |   1    |    8    | Docker 引擎参数                          |
|  [**`JUICE`**](/docs/juice/param)  |   1    |    2    | JuiceFS 实例与缓存参数                      |
|   [**`VIBE`**](/docs/vibe/param)   |   6    |   18    | Code/Jupyter/Node.js/Claude/Codex 配置 |
|  [**`KAFKA`**](/docs/kafka/param)  |   2    |   19    | Kafka 部署参数（含 `kafka_jmx_exporter_enabled`）与移除保护参数 |
|  [**`MYSQL`**](/docs/mysql/param)  |   6    |   16    | 原生 MySQL 8.4 部署、备份、监控与移除参数           |
|              **合计**                | **55** | **399** | `files/cmdb.sql` 默认参数记录总数            |
{.wide .expand}

> 注：`INFRA` 在 `cmdb.sql` 中将 `INFRA_ID` 与 `INFRA_PACKAGE` 合并为同一分组（共 9 组），参数文档拆分为 10 组以便查阅；另 `NODE` 角色在 `defaults/main.yml` 中还包含平台派生参数 `node_tuned_profile_dir`（[**NODE 参数列表**](/docs/node/param) 共列 74 项）。原生 [**`MYSQL` 8.4**](/docs/mysql/param/#参数概览) 当前公开 16 个参数（含 `mysql_data`、`mysql_backup_dir`、`mysql_backup_retention` 与 3 个移除保护参数），固定的端口、软件版本和定时器不属于公开参数。

--------

## 参数组速览

|                 模块                 | 主要参数组                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|:----------------------------------:|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|  [**`PGSQL`**](/docs/pgsql/param)  | [`PG_ID`](/docs/pgsql/param/#pg_id)、[`PG_BUSINESS`](/docs/pgsql/param/#pg_business)、[`PG_INSTALL`](/docs/pgsql/param/#pg_install)、[`PG_BOOTSTRAP`](/docs/pgsql/param/#pg_bootstrap)、[`PG_PROVISION`](/docs/pgsql/param/#pg_provision)、[`PG_BACKUP`](/docs/pgsql/param/#pg_backup)、[`PG_ACCESS`](/docs/pgsql/param/#pg_access)、[`PG_MONITOR`](/docs/pgsql/param/#pg_monitor)、[`PG_PITR`](/docs/pgsql/param/)、[`PG_REMOVE`](/docs/pgsql/param/#pg_remove)                                |
|  [**`INFRA`**](/docs/infra/param)  | [`META`](/docs/infra/param/#meta)、[`CA`](/docs/infra/param/#ca)、[`INFRA_ID`](/docs/infra/param/#infra_id)、[`REPO`](/docs/infra/param/#repo)、[`INFRA_PACKAGE`](/docs/infra/param/#infra_package)、[`NGINX`](/docs/infra/param/#nginx)、[`DNS`](/docs/infra/param/#dns)、[`VICTORIA`](/docs/infra/param/#victoria)、[`PROMETHEUS`](/docs/infra/param/#prometheus)、[`GRAFANA`](/docs/infra/param/#grafana)                                                                                     |
|   [**`NODE`**](/docs/node/param)   | [`NODE_ID`](/docs/node/param/#node_id)、[`NODE_DNS`](/docs/node/param/#node_dns)、[`NODE_PACKAGE`](/docs/node/param/#node_package)、[`NODE_TUNE`](/docs/node/param/#node_tune)、[`NODE_SEC`](/docs/node/param/#node_sec)、[`NODE_ADMIN`](/docs/node/param/#node_admin)、[`NODE_TIME`](/docs/node/param/#node_time)、[`NODE_VIP`](/docs/node/param/#node_vip)<br>[`HAPROXY`](/docs/node/param/#haproxy)、[`NODE_EXPORTER`](/docs/node/param/#node_exporter)、[`VECTOR`](/docs/node/param/#vector) |
|   [**`ETCD`**](/docs/etcd/param)   | [`ETCD`](/docs/etcd/param/#etcd)、[`ETCD_REMOVE`](/docs/etcd/param/#etcd_remove)                                                                                                                                                                                                                                                                                                                                                                                                         |
|  [**`VAULT`**](/docs/vault/param)  | [`VAULT`](/docs/vault/param/#vault)、[`VAULT_REMOVE`](/docs/vault/param/#vault_remove)                                                                                                                                                                                                                                                                                                                                                                                                   |
|  [**`MINIO`**](/docs/minio/param)  | [`MINIO`](/docs/minio/param/#minio)、[`MINIO_REMOVE`](/docs/minio/param/#minio_remove)                                                                                                                                                                                                                                                                                                                                                                                                   |
|  [**`REDIS`**](/docs/redis/param)  | [`REDIS`](/docs/redis/param/#redis)、[`REDIS_REMOVE`](/docs/redis/param/#redis_remove)                                                                                                                                                                                                                                                                                                                                                                                                   |
| [**`DOCKER`**](/docs/docker/param) | [`DOCKER`](/docs/docker/param)                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
|  [**`JUICE`**](/docs/juice/param)  | [`JUICE`](/docs/juice/param)                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|   [**`VIBE`**](/docs/vibe/param)   | [`VIBE`](/docs/vibe/param)（含通用参数、Code-Server、JupyterLab、Node.js、Claude Code、Codex CLI）                                                                                                                                                                                                                                                                                                                                                                                                 |
|  [**`KAFKA`**](/docs/kafka/param)  | [`KAFKA`](/docs/kafka/param/#参数概览)、[`KAFKA_REMOVE`](/docs/kafka/param/#临时受保护运维变量)                                                                                                                                                                                                                                                                                                                                                                                                       |
|  [**`MYSQL`**](/docs/mysql/param)  | [`MYSQL`](/docs/mysql/param/#参数概览)（含身份、目录、凭据、业务对象、备份、监控与受保护移除参数）                                                                                                                                                                                                                                                                                                                                                                                                                |
{.wide .expand}

--------

## 使用建议

- 首次部署优先阅读：[`NODE`](/docs/node/param)、[`INFRA`](/docs/infra/param)、[`PGSQL`](/docs/pgsql/param)
- 生产环境务必审查：`*_safeguard`、密码凭据、端口与网络暴露参数
- 变更前先在单集群小范围验证，再扩展到全局参数
