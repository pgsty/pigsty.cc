---
title: TigerBeetle
weight: 5060
description: 使用 Pigsty 部署 TigerBeetle，金融会计事务专用数据库。
icon: fas fa-bug
module: [PILOT]
categories: [参考]
---


> [TigerBeetle](https://tigerbeetle.com/) 是一个金融会计事务专用数据库，提供了极致性能与可靠性。


--------

## 概览

当前开源源码树没有 TigerBeetle 角色或专用剧本，只在节点平台包映射中提供 `tigerbeetle` 安装别名；服务初始化与生命周期管理需按 TigerBeetle 官方文档完成。


--------

## 安装

使用以下命令可从 Pigsty Infra 仓库安装映射的软件包：

```bash
./node.yml -t node_install -e '{"node_repo_modules":"infra","node_packages":["tigerbeetle"]}'
```

即可安装，然后请参考官方文档进行配置：https://github.com/tigerbeetle/tigerbeetle


{{% alert title="TigerBeetle需要Linux内核5.5以上版本！" color="danger" %}}

请注意，TigerBeetle 仅支持 Linux 内核 5.5 或更高版本，因此默认在 EL7 (3.10) / EL8 (4.18) 系统上无法使用。

请使用 EL 9/10、Ubuntu 22/24/26、Debian 12/13，或其他内核版本满足要求的系统来安装 TigerBeetle。

{{% /alert %}}
