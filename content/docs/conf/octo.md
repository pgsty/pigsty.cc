---
title: ha/octo
weight: 615
description: 八节点紧凑高可用仿真模板：三节点 INFRA、五节点 etcd、八节点对象存储与两套 PostgreSQL 集群。
icon: fa-solid fa-server
categories: [参考]
---

`ha/octo` 使用 [`vagrant/spec/deci.rb`](https://github.com/pgsty/pigsty/blob/main/vagrant/spec/deci.rb) 的前八个节点，构造一套紧凑的高可用仿真环境。它用于验证多模块共置、VIP、远程备份和较大成员规模，不应未经容量、安全和故障域评审直接作为生产蓝图。


--------

## 配置概览

- 配置名称：`ha/octo`
- 节点地址：`10.10.10.10` ～ `10.10.10.17`
- INFRA：3 节点；仅首节点构建并服务本地软件仓库，三节点可按注释另行安装 Docker
- ETCD：5 节点，部署在后五个节点
- 对象存储：8 节点单盘集群；模板未覆盖 `minio_type`，部署与移除角色都默认使用 Silo，删除前仍须核对该值、精确目标和数据盘路径
- `pg-meta`：3 节点 PostgreSQL，VIP `10.10.10.2/24`
- `pg-test`：5 节点 PostgreSQL，其中最后一个实例角色为 `offline`，VIP `10.10.10.3/24`
- 备份：通过 `sss.pigsty:9002` 使用对象存储仓库，并保留本地仓库

```bash
./configure -c ha/octo
./deploy.yml
```

该模板依赖固定的八节点地址和 VIP。用于其他环境时，必须同步修改主机地址、VIP、网卡、DNS、仓库节点和所有公开示例凭据。


--------

## 配置内容

源文件地址：[`pigsty/conf/ha/octo.yml`](https://github.com/pgsty/pigsty/blob/main/conf/ha/octo.yml)

{{< readfile file="yaml/ha/octo.yml" code="true" lang="yaml" >}}


--------

## 配置解读

- 三个 INFRA 节点与五个 etcd 节点分置；PostgreSQL 的 `pg-meta` 和 `pg-test` 分别与这两组节点共置。
- 对象存储跨越全部八个节点，并通过 Keepalived VIP `10.10.10.9` 与 HAProxy `9002` 暴露 `sss.pigsty`。当前默认引擎是 Silo，但模块和变量继续使用 `minio_*` 兼容命名。
- `pg-meta` 每天做一次全量备份；`pg-test` 每周全量、其余日期增量备份，统一写入加密的 S3 pgBackRest 仓库。
- `repo_enabled: false` 的两个 INFRA 副本不会构建本地仓库；所有节点仍从首节点的 `local` 仓库安装软件包。
- 模板末尾的数据库、Grafana、Patroni、HAProxy、Silo 与 etcd 密码只适合一次性仿真，真实环境必须全部轮换。

如只需要常规最小高可用部署，优先使用 [ha/trio](/docs/conf/trio/)；需要更大规模的全场景仿真，参见 [ha/simu](/docs/conf/simu/)。
