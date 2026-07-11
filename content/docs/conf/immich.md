---
title: app/immich
weight: 895
description: 使用 Pigsty 托管的 PostgreSQL 与 VectorChord 部署 Immich 相册和视频管理服务
icon: fa-solid fa-images
categories: [参考]
---

`app/immich` 配置模板部署 Immich，并使用 Pigsty 托管的 PostgreSQL 18 保存元数据与向量索引。当前模板按 Immich v3.0.1 验证。


--------

## 配置概览

- 配置名称：`app/immich`
- 节点数量：单节点
- 应用端口：`2283`
- 数据目录：`/data/immich/library`
- 相关配置：[`meta`](/docs/conf/meta/)、[`app/registry`](/docs/conf/registry/)

启用方式：

```bash
./configure -c app/immich [-i <primary_ip>]
```


--------

## 配置内容

源文件地址：[`pigsty/conf/app/immich.yml`](https://github.com/pgsty/pigsty/blob/main/conf/app/immich.yml)

{{< readfile file="yaml/app/immich.yml" code="true" lang="yaml" >}}


--------

## 配置解读

- 应用文件持久化到 `/data/immich/library`
- PostgreSQL 集群名为 `pg-immich`，数据库与账号均为 `immich` 对应定义
- 安装 `pgvector` 与 `vchord` 软件包，在数据库中创建 `vchord` 与 `earthdistance`
- 预加载 `vchord.so`，并设置 `DB_VECTOR_EXTENSION: vectorchord`
- 使用 Compose 内的本地 Valkey 服务，不在 Pigsty 中另建 Redis 集群
- 通过 `photo.pigsty` 反向代理到 `10.10.10.10:2283`

部署前必须修改数据库密码、域名与媒体目录。目标平台还需要能够取得匹配 PostgreSQL 18 的 `vchord` 软件包。
