---
title: demo/remote
weight: 1070
description: 使用 INFRA 节点上的 pg_exporter 监控远程 PostgreSQL 与云 RDS 的示例
icon: fa-solid fa-satellite-dish
categories: [参考]
---

`demo/remote` 不部署本地 PostgreSQL 集群，而是在 INFRA 节点上声明多个 `pg_exporters`，用于接入远程 PostgreSQL、PolarDB 或云 RDS。


--------

## 配置概览

- 配置名称：`demo/remote`
- 本地节点数量：1 个 INFRA 节点
- Exporter 示例端口：`20001`～`20016`
- 相关文档：[PG Exporter](/docs/pg_exporter/)

```bash
./configure -c demo/remote [-i <infra_ip>]
```


--------

## 配置内容

源文件地址：[`pigsty/conf/demo/remote.yml`](https://github.com/pgsty/pigsty/blob/main/conf/demo/remote.yml)

{{< readfile file="yaml/demo/remote.yml" code="true" lang="yaml" >}}


--------

## 配置解读

每个 `pg_exporters` 条目使用一个唯一的本地监听端口，并声明远端实例的 `pg_cluster`、`pg_seq`、`pg_host` 与可选连接参数。模板同时展示完整 URL、拆分账号密码、数据库白名单与自动发现等写法。

示例主机名和凭据都是占位值。实际使用时只保留需要的条目，并使用最小权限监控账号；不要把真实 RDS 密码提交到版本库。
