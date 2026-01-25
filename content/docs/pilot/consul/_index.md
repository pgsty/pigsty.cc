---
title: 模块：Consul
weight: 5080
description: 使用 Pigsty 安装部署 Consul —— Etcd 的替代品。
icon: fas fa-c
module: [PILOT]
categories: [参考]
---

Consul 是一个分布式 DCS + KV + DNS + 服务注册/发现的组件。

在旧版本 （1.x） 的 Pigsty 里，默认使用 Consul 作为高可用的 DCS，现在该支持已经移除，但会在后续重新作为独立模块提供。


--------

## 配置

要部署 Consul，您需要将所有节点的 IP 地址和主机名添加到 `consul` 分组中。

您至少需要指定一个节点的 `consul_role` 为 `server`，其他节点的 `consul_role` 默认为 `node`。

```bash
consul:
  hosts:
    10.10.10.10: { nodename: meta , consul_role: server }
    10.10.10.11: { nodename: node-1 }
    10.10.10.12: { nodename: node-2 }
    10.10.10.13: { nodename: node-3 }
```

我们建议在严肃生产部署中使用奇数个 Consul Server，三个为宜。


--------

## 参数

```yaml
#-----------------------------------------------------------------
# CONSUL
#-----------------------------------------------------------------
consul_role: node                 # consul role, node or server, node by default
consul_dc: pigsty                 # consul data center name, `pigsty` by default
consul_data: /data/consul         # consul data dir, `/data/consul`
consul_clean: true                # consul purge flag, if true, clean consul during init
consul_ui: false                  # enable consul ui, the default value for consul server is true
```