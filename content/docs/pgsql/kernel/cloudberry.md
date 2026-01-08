---
title: Cloudberry
weight: 2113
description: 使用 Pigsty 部署/监控 Cloudberry 集群，一个由 Greenplum 分叉而来的 MPP 数据仓库集群！
icon: fas fa-leaf
module: [PGSQL]
categories: [概念]
---

--------

## 安装

Pigsty 提供了 Greenplum 6 (@el7) 与 Greenplum 7 (@el8) 的安装包，开源版本用户可以自行安装配置。

```bash
# EL 7 Only (Greenplum6)
./node.yml -t node_install  -e '{"node_repo_modules":"pgsql","node_packages":["cloudberrydb"]}'

# EL 8 Only (Greenplum7)
./node.yml -t node_install  -e '{"node_repo_modules":"pgsql","node_packages":["cloudberrydb"]}'
```
