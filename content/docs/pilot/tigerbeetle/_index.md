---
title: 模块：TigerBeetle
weight: 5080
description: 使用 Pigsty 部署 TigerBeetle，金融会计事务专用数据库。
icon: fas fa-bug
module: [PILOT]
categories: [参考]
---


> [TigerBeetle](https://tigerbeetle.com/) 是一个金融会计事务专用数据库，提供了极致性能与可靠性。


--------

## 概览

TigerBeetle 模块目前仅在 Pigsty 专业版中提供 **Beta** 试用预览。


--------

## 安装

Pigsty Infra 仓库中提供了 TigerBeetle 的 RPM / DEB 软件包，使用以下命令即可完成安装：

```bash
./node.yml -t node_install -e '{"node_repo_modules":"infra","node_packages":["tigerbeetle"]}'
```

即可安装，然后请参考官方文档进行配置：https://github.com/tigerbeetle/tigerbeetle


{{% alert title="TigerBeetle需要Linux内核5.5以上版本！" color="danger" %}}

请注意，TigerBeetle 仅支持 Linux 内核 5.5 或更高版本，因此默认在 EL7 (3.10) / EL8 (4.18) 系统上无法使用。

请使用 EL9 （5.14）， Ubuntu 22.04 (5.15)，或 Debian 12 (6.1) 与 Debian 11 (5.10)，或其他支持的系统来安装 Tiger Beetle

{{% /alert %}}
