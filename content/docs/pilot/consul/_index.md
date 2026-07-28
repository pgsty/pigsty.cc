---
title: Consul
weight: 5080
description: 使用 Pigsty 安装部署 Consul —— Etcd 的替代品。
icon: fas fa-c
module: [PILOT]
categories: [参考]
---

Consul 是一个分布式 DCS、KV、DNS 与服务注册/发现组件。

Pigsty 1.x 曾使用 Consul 作为高可用 DCS；当前开源源码树已经移除 Consul 角色、剧本和 `consul_*` 参数，不能使用本页旧版清单直接部署。当前 Pigsty 的 DCS 集成以 [ETCD](/docs/etcd/) 模块为准。
