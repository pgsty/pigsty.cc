---
title: demo/rustfs
weight: 1045
description: 四节点 RustFS 分布式对象存储示例，使用 MINIO 模块统一部署、置备和监控。
icon: fa-solid fa-box-archive
categories: [参考]
---

`demo/rustfs` 显式设置 `minio_type: rustfs`，在四个节点上部署一套 RustFS S3 兼容对象存储集群。它沿用 MINIO 模块的身份、TLS、`mcli`、存储桶与用户置备接口，但使用独立的 RustFS 软件包、证书目录、数据格式和原生 OTLP 指标。


--------

## 配置概览

- 配置名称：`demo/rustfs`
- 节点数量：4 个对象存储节点；首节点同时承担单节点 INFRA
- 集群身份：`minio_cluster: rustfs`
- 数据目录：每个节点使用 `/data/rustfs`
- 客户端入口：`https://rustfs-1.pigsty:9000`，别名为 `rustfs`
- 资源置备：创建 `pgsql`、`meta`、`data` 三个桶及对应示例用户
- 软件仓库：通过 `repo_extra_packages: [rustfs]` 显式纳入 RustFS 软件包

```bash
./configure -c demo/rustfs
./deploy.yml
```

也可以只对已完成 NODE/INFRA 初始化的四个成员执行：

```bash
./minio.yml -l minio
```

`-l minio` 是模板中的 Ansible 分组名；实际成员身份由 `minio_cluster: rustfs` 决定。


--------

## 配置内容

源文件地址：[`pigsty/conf/demo/rustfs.yml`](https://github.com/pgsty/pigsty/blob/main/conf/demo/rustfs.yml)

{{< readfile file="yaml/demo/rustfs.yml" code="true" lang="yaml" >}}


--------

## 配置解读

- 多节点卷地址由 MINIO 角色根据四个 `minio_seq` 与 `/data/rustfs` 自动生成。
- RustFS 默认每 15 秒把原生 `rustfs_*` 指标通过 OTLP/HTTP 推送到第一个 `infra` 节点的 VictoriaMetrics，并另外注册 HTTPS 就绪探测。
- `minio_endpoint` 直接指向第一个成员，不是高可用入口；生产环境应按故障预算增加经过验证的负载均衡或 VIP。
- 模板中的访问密钥都是公开演示值，部署前必须替换。
- RustFS 与 Silo/MinIO 只共享 S3 与模块接口，不共享可原地互换的数据格式；已有集群切换引擎必须使用经过验证的数据迁移和回滚流程。

参数、监控与迁移边界见 [MINIO 模块](/docs/minio/) 与 [RustFS 监控说明](/docs/minio/monitor/)。
