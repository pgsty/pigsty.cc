---
title: app/silo
weight: 875
description: 独立 Silo Docker APP 配置模板，提供单节点 S3 对象存储与控制台。
icon: fa-solid fa-box-archive
categories: [参考]
---

`app/silo` 配置模板在单节点上部署 Silo Docker Compose 应用，替代原 `app/minio`。使用方法见 [**Silo 应用说明**](/docs/app/silo/)。

本模板尚未包含在 v4.5.0 发布包中，需要配套的开发版 `conf/app/silo.yml` 与 `app/silo/`。

## 配置概览

- 配置名称：`app/silo`
- 节点数量：单节点
- 应用镜像：`docker.io/pgsty/silo:latest`
- 持久目录：`/data/silo`
- S3 API：宿主机 `9000`，门户 `sss.pigsty`
- 控制台：宿主机 `9001`，门户 `silo.pigsty`

```bash
./configure -c app/silo
vi pigsty.yml              # 修改口令、域名与数据目录
./deploy.yml
./docker.yml -l silo
./app.yml -l silo
```

## 配置内容

开发版源文件：`conf/app/silo.yml`。

{{< include file="yaml/app/silo.yml" code=true lang="yaml" >}}

## 配置解读

模板定义 `silo` 应用组，并在同一主机部署 INFRA 与 ETCD；没有配置 PostgreSQL 集群，也不会创建由原生 MINIO 模块管理的对象存储集群。

`apps.silo.file` 创建数据目录，`apps.silo.conf` 写入镜像、口令与端口。默认根用户为 `siloadmin`，口令为 `S3User.Silo`，部署前必须修改。通过控制台门户访问时，将 `SILO_BROWSER_REDIRECT_URL` 设置为完整外部 URL。

这份模板适合应用专用的单节点对象存储。需要共享备份存储、TLS、自动创建用户与存储桶、监控或多节点高可用时，使用 [**MINIO 模块**](/docs/minio/) 与 [`demo/minio`](/docs/conf/minio/) 或 [`ha/trio`](/docs/conf/trio/) 模板。
