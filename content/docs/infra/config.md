---
title: 集群配置
weight: 3020
description: 如何配置 Infra 节点？定制 Nginx 服务器的配置与本地软件仓库的内容？配置 DNS，NTP 与监控组件的方法。
icon: fa-solid fa-code
categories: [参考]
---


## 配置说明

INFRA 主要用于提供**监控**基础设施，对于 PostgreSQL 数据库是**可选项**。

除非手工配置了对 INFRA 节点上 DNS/NTP 服务的依赖，否则 INFRA 模块故障通常不影响 PostgreSQL 数据库集群运行。

单个 INFRA 节点足以应对绝大部分场景。生产环境建议使用 2～3 个 INFRA 节点实现高可用。

通常出于提高资源利用率的考虑，PostgreSQL 高可用依赖的 ETCD 模块可以与 INFRA 模块共用节点。

使用 3 个以上的 INFRA 节点意义不大，但可以使用更多 ETCD 节点（如 5 个）提高 DCS 服务可用性。


----------------

## 配置样例

在配置清单中的 `infra` 分组加入节点 IP，并分配 Infra 实例号 `infra_seq`。

默认单个 INFRA 节点配置：

```yaml
all:
  children:
    infra: { hosts: { 10.10.10.10: { infra_seq: 1 } }}
```

默认情况下，`10.10.10.10` 占位符在配置过程中被替换为当前节点首要 IP 地址。

使用 `infra.yml` 剧本在节点上初始化 INFRA 模块。


### 更多节点

两个 INFRA 节点配置：

```yaml
all:
  children:
    infra:
      hosts:
        10.10.10.10: { infra_seq: 1 }
        10.10.10.11: { infra_seq: 2 }
```

三个 INFRA 节点配置（含参数）：

```yaml
all:
  children:
    infra:
      hosts:
        10.10.10.10: { infra_seq: 1 }
        10.10.10.11: { infra_seq: 2, repo_enabled: false }
        10.10.10.12: { infra_seq: 3, repo_enabled: false }
      vars:
        grafana_clean: false
        vmetrics_clean: false
        vlogs_clean: false
        vtraces_clean: false
```


----------------

## Infra 高可用

Infra 模块中的大部分组件都属于"无状态/相同状态"，对于这类组件，高可用只需要操心"负载均衡"问题。

高可用可通过 Keepalived L2 VIP 或 HAProxy 四层负载均衡实现。二层互通网络推荐使用 Keepalived L2 VIP。

配置示例：

```yaml
infra:
  hosts:
    10.10.10.10: { infra_seq: 1 }
    10.10.10.11: { infra_seq: 2 }
    10.10.10.12: { infra_seq: 3 }
  vars:
    vip_enabled: true
    vip_vrid: 128
    vip_address: 10.10.10.8
    vip_interface: eth1

    infra_portal:
      home         : { domain: i.pigsty }
      grafana      : { domain: g.pigsty ,endpoint: "10.10.10.8:3000" , websocket: true }
      prometheus   : { domain: p.pigsty ,endpoint: "10.10.10.8:8428" }
      alertmanager : { domain: a.pigsty ,endpoint: "10.10.10.8:9059" }
      blackbox     : { endpoint: "10.10.10.8:9115" }
      vmalert      : { endpoint: "10.10.10.8:8880" }
```

需要设置 VIP 相关参数并在 `infra_portal` 中修改各 Infra 服务端点。


----------------

## Nginx配置

请参阅 [Nginx 参数配置](/docs/infra/param/#nginx) 与 [Nginx 管理](/docs/infra/admin/portal)。


----------------

## 本地仓库配置

请参阅 [Repo 参数配置](/docs/infra/param/#repo)。


----------------

## DNS配置

请参阅 [DNS 参数配置](/docs/infra/param/#dns) 与 [教程：DNS](/docs/infra/admin/domain)。


----------------

## NTP配置

请参阅 [NTP 参数配置](/docs/node/param/#node_time)。
