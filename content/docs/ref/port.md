---
title: 端口列表
weight: 490
description: Pigsty 中各个组件使用的端口一览，以及相关的配置参数与组件状态。
icon: fa-solid fa-door-open
categories: [参考]
---


以下为 Pigsty 中各模块组件使用的默认端口及其对应参数，您可以按需调整，或者作为内部防火墙精细配置的参考。

|              模块              |                组件                |   端口    | 参数                                                                           | 状态      |
|:----------------------------:|:--------------------------------:|:-------:|:-----------------------------------------------------------------------------|---------|
|   [**`NODE`**](/docs/node)   |       **`node_exporter`**        | `9100`  | [**`node_exporter_port`**](/docs/node/param#node_exporter_port)              | ✅ 默认启用  |
|   [**`NODE`**](/docs/node)   |          **`haproxy`**           | `9101`  | [**`haproxy_exporter_port`**](/docs/node/param#haproxy_exporter_port)        | ✅ 默认启用  |
|   [**`NODE`**](/docs/node)   |           **`vector`**           | `9598`  | [**`vector_port`**](/docs/node/param#vector_port)                            | ✅ 默认启用  |
|   [**`NODE`**](/docs/node)   |    **`keepalived_exporter`**     | `9650`  | [**`vip_exporter_port`**](/docs/node/param#vip_exporter_port)                | ⚠️ 按需启用 |
|   [**`NODE`**](/docs/node)   |          **`chronyd`**           |  `123`  | -                                                                            | ✅ 默认启用  |
| [**`DOCKER`**](/docs/docker) |           **`docker`**           | `9323`  | [**`docker_exporter_port`**](/docs/docker/param#docker_exporter_port)        | ⚠️ 按需启用 |
|  [**`INFRA`**](/docs/infra)  |           **`nginx`**            |  `80`   | [**`nginx_port`**](/docs/infra/param#nginx_port)                             | ✅ 默认启用  |
|  [**`INFRA`**](/docs/infra)  |           **`nginx`**            |  `443`  | [**`nginx_ssl_port`**](/docs/infra/param#nginx_ssl_port)                     | ✅ 默认启用  |
|  [**`INFRA`**](/docs/infra)  |          **`grafana`**           | `3000`  | [**`grafana_port`**](/docs/infra/param#grafana_port)                         | ✅ 默认启用  |
|  [**`INFRA`**](/docs/infra)  |      **`victoriaMetrics`**       | `8428`  | [**`vmetrics_port`**](/docs/infra/param#vmetrics_port)                       | ✅ 默认启用  |
|  [**`INFRA`**](/docs/infra)  |        **`victoriaLogs`**        | `9428`  | [**`vlogs_port`**](/docs/infra/param#vlogs_port)                             | ✅ 默认启用  |
|  [**`INFRA`**](/docs/infra)  |       **`victoriaTraces`**       | `10428` | [**`vtraces_port`**](/docs/infra/param#vtraces_port)                         | ✅ 默认启用  |
|  [**`INFRA`**](/docs/infra)  |          **`vmalert`**           | `8880`  | [**`vmalert_port`**](/docs/infra/param#vmalert_port)                         | ✅ 默认启用  |
|  [**`INFRA`**](/docs/infra)  |        **`alertmanager`**        | `9059`  | [**`alertmanager_port`**](/docs/infra/param#alertmanager_port)               | ✅ 默认启用  |
|  [**`INFRA`**](/docs/infra)  |     **`blackbox_exporter`**      | `9115`  | [**`blackbox_port`**](/docs/infra/param#blackbox_port)                       | ✅ 默认启用  |
|  [**`INFRA`**](/docs/infra)  |          **`dnsmasq`**           |  `53`   | [**`dns_port`**](/docs/infra/param#dns_port)                                 | ✅ 默认启用  |
|   [**`ETCD`**](/docs/etcd)   |            **`etcd`**            | `2379`  | [**`etcd_port`**](/docs/etcd/param#etcd_port)                                | ✅ 默认启用  |
|   [**`ETCD`**](/docs/etcd)   |            **`etcd`**            | `2380`  | [**`etcd_peer_port`**](/docs/etcd/param#etcd_peer_port)                      | ✅ 默认启用  |
|  [**`MINIO`**](/docs/minio)  |           **`minio`**            | `9000`  | [**`minio_port`**](/docs/minio/param#minio_port)                             | ✅ 默认启用  |
|  [**`MINIO`**](/docs/minio)  |           **`minio`**            | `9001`  | [**`minio_admin_port`**](/docs/minio/param#minio_admin_port)                 | ✅ 默认启用  |
|  [**`REDIS`**](/docs/redis)  |           **`redis`**            | `6379`  | [**`redis_port`**](/docs/redis/param#redis_port)                             | ⚠️ 按需启用 |
|  [**`REDIS`**](/docs/redis)  |       **`redis_exporter`**       | `9121`  | [**`redis_exporter_port`**](/docs/redis/param#redis_exporter_port)           | ⚠️ 按需启用 |
| [**`FERRET`**](/docs/ferret) |          **`ferretdb`**          | `27017` | [**`mongo_port`**](/docs/ferret/param#mongo_port)                            | ⚠️ 按需启用 |
| [**`FERRET`**](/docs/ferret) |       **`mongo_exporter`**       | `9216`  | [**`mongo_exporter_port`**](/docs/ferret/param#mongo_exporter_port)          | ✅ 默认启用  |
|  [**`PGSQL`**](/docs/pgsql)  |          **`postgres`**          | `5432`  | [**`pg_port`**](/docs/pgsql/param#pg_port)                                   | ✅ 默认启用  |
|  [**`PGSQL`**](/docs/pgsql)  |         **`pgbouncer`**          | `6432`  | [**`pgbouncer_port`**](/docs/pgsql/param#pgbouncer_port)                     | ✅ 默认启用  |
|  [**`PGSQL`**](/docs/pgsql)  |          **`patroni`**           | `8008`  | [**`patroni_port`**](/docs/pgsql/param#patroni_port)                         | ✅ 默认启用  |
|  [**`PGSQL`**](/docs/pgsql)  |        **`pg_exporter`**         | `9630`  | [**`pg_exporter_port`**](/docs/pgsql/param#pg_exporter_port)                 | ✅ 默认启用  |
|  [**`PGSQL`**](/docs/pgsql)  |     **`pgbouncer_exporter`**     | `9631`  | [**`pgbouncer_exporter_port`**](/docs/pgsql/param#pgbouncer_exporter_port)   | ✅ 默认启用  |
|  [**`PGSQL`**](/docs/pgsql)  |    **`pgbackrest_exporter`**     | `9854`  | [**`pgbackrest_exporter_port`**](/docs/pgsql/param#pgbackrest_exporter_port) | ✅ 默认启用  |
|  [**`PGSQL`**](/docs/pgsql)  |  **`{{ pg_cluster }}-primary`**  | `5433`  | [**`pg_default_services`**](/docs/pgsql/param#pg_default_services)           | ✅ 默认启用  |
|  [**`PGSQL`**](/docs/pgsql)  |  **`{{ pg_cluster }}-replica`**  | `5434`  | [**`pg_default_services`**](/docs/pgsql/param#pg_default_services)           | ✅ 默认启用  |
|  [**`PGSQL`**](/docs/pgsql)  |  **`{{ pg_cluster }}-default`**  | `5436`  | [**`pg_default_services`**](/docs/pgsql/param#pg_default_services)           | ✅ 默认启用  |
|  [**`PGSQL`**](/docs/pgsql)  |  **`{{ pg_cluster }}-offline`**  | `5438`  | [**`pg_default_services`**](/docs/pgsql/param#pg_default_services)           | ✅ 默认启用  |
|  [**`PGSQL`**](/docs/pgsql)  | **`{{ pg_cluster }}-<service>`** | `543x`  | [**`pg_services`**](/docs/pgsql/param#pg_services)                           | ⚠️ 按需启用 |
{.full-width}


