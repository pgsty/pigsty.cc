---
title: 精简安装
weight: 285
description: 只安装高可用 PostgreSQL 集群及其最小依赖的精简安装模式
icon: fa-solid fa-minimize
module: [PIGSTY]
categories: [教程]
---


如果您只想要高可用 PostgreSQL 数据库集群本身，而不需要监控、基础设施等功能，请考虑 **精简安装**。

精简安装没有 [**`INFRA`**](/docs/infra/) 模块，没有监控，没有 [**本地仓库**](/docs/setup/offline/)，只有 [**`ETCD`**](/docs/etcd/) 和 [**`PGSQL`**](/docs/pgsql/) 以及部分 [**`NODE`**](/docs/node/) 功能。

{{% alert title="精简安装适合以下场景" color="success" %}}
- 只需要 PostgreSQL 数据库本身，不需要可观测性基础设施。
- 资源极度受限的环境，不愿意承担基础设施开销（单机约 0.2 vCPU / 500MB 开销）
- 已有外部监控系统，希望统一使用自己的监控管理体系。
- 不希望引入 AGPLv3 许可证的 Grafana 可视化看板组件。
  {{% /alert %}}

{{% alert title="精简安装的局限性" color="warning" %}}
- 没有 [**基础设施模块**](/docs/infra)，无法使用 WebUI 和本地软件仓库功能。
- [**离线安装**](/docs/setup/offline) 仅限单机模式使用，多节点精简安装只能在线安装。
  {{% /alert %}}


--------

## 概览

使用精简安装，您需要：

1. 使用 [**`slim.yml`**](/docs/conf/slim) 精简安装配置模板（`configure -c slim`）
2. 执行 `slim.yml` 剧本进行部署，而不是默认的 `deploy.yml`

```bash
curl https://repo.pigsty.cc/get | bash
./configure -g -c slim
./slim.yml
```

{{< asciinema file="demo/install-slim.cast" markers="3:安装,13:配置,22:部署" theme="solarized-light" speed="1.3" autoplay="true" loop="true" >}}


--------

## 说明

精简安装只安装/配置以下组件：

|        组件         |  必要性  | 描述                                                  |
|:-----------------:|:-----:|:----------------------------------------------------|
|   **`patroni`**   | ⚠️ 必需 | 引导高可用 PostgreSQL 集群                                 |
|    **`etcd`**     | ⚠️ 必需 | Patroni 的元数据库依赖（DCS）                                |
|  **`pgbouncer`**  | ✔️ 可选 | PostgreSQL 连接池                                      |
| **`vip-manager`** | ✔️ 可选 | L2 VIP 绑定到 PostgreSQL 集群主节点                         |
|   **`haproxy`**   | ✔️ 可选 | 根据 Patroni 健康检查，自动路由 [**服务**](/docs/pgsql/service/) |
|   **`chronyd`**   | ✔️ 可选 | 与 NTP 服务器的时间同步                                      |
|    **`tuned`**    | ✔️ 可选 | 节点调优模板和内核参数管理                                       |
{.full-width}

你可以通过进一步的配置，关闭所有可选组件，只保留必需组件 `patroni` 和 `etcd`。

因为缺少 Infra 模块的 Nginx 提供本地仓库服务，只有单机安装的时候可以进行[**离线安装**](/docs/setup/offline/)。


--------

## 配置

精简安装的配置文件示例：[**`conf/slim.yml`**](https://github.com/pgsty/pigsty/blob/main/conf/slim.yml)：

| ID | [NODE](/docs/node/) | [PGSQL](/docs/pgsql/) | [INFRA](/docs/infra/) | [**ETCD**](/docs/etcd/) |
|:--:|:-------------------:|:---------------------:|:---------------------:|:-----------------------:|
| 1  |    `10.10.10.10`    |      `pg-meta-1`      |     **不安装基础设施模块**     |        `etcd-1`         |
{.full-width}


{{< readfile file="/docs/conf/yaml/slim.yml" code="true" lang="yaml" >}}


--------

## 部署

精简安装需要使用 [`slim.yml`](https://github.com/pgsty/pigsty/blob/main/slim.yml) 剧本而不是 [`deploy.yml`](https://github.com/pgsty/pigsty/blob/main/deploy.yml) 剧本进行部署：

```bash
./slim.yml
```


--------

## 高可用集群

精简安装模式也可以部署高可用集群，在 `etcd` 和 `pg-meta` 分组中添加更多节点即可，一个三节点的部署样例：

| ID | [NODE](/docs/node/) | [PGSQL](/docs/pgsql/) | [INFRA](/docs/infra/) | [**ETCD**](/docs/etcd/) |
|:--:|:-------------------:|:---------------------:|:---------------------:|:-----------------------:|
| 1  |    `10.10.10.10`    |      `pg-meta-1`      |     **不安装基础设施模块**     |        `etcd-1`         |
| 2  |    `10.10.10.11`    |      `pg-meta-2`      |     **不安装基础设施模块**     |        `etcd-2`         |
| 3  |    `10.10.10.12`    |      `pg-meta-3`      |     **不安装基础设施模块**     |        `etcd-3`         |
{.full-width}


```yaml
all:
  children:
    etcd:
      hosts:
        10.10.10.10: { etcd_seq: 1 }
        10.10.10.11: { etcd_seq: 2 }  # <-- 新增
        10.10.10.12: { etcd_seq: 3 }  # <-- 新增

    pg-meta:
      hosts:
        10.10.10.10: { pg_seq: 1, pg_role: primary }
        10.10.10.11: { pg_seq: 2, pg_role: replica } # <-- 新增
        10.10.10.12: { pg_seq: 3, pg_role: replica } # <-- 新增
      vars:
        pg_cluster: pg-meta
        pg_users:
          - { name: dbuser_meta ,password: DBUser.Meta   ,pgbouncer: true ,roles: [dbrole_admin   ] ,comment: pigsty admin user }
          - { name: dbuser_view ,password: DBUser.Viewer ,pgbouncer: true ,roles: [dbrole_readonly] ,comment: read-only viewer  }
        pg_databases:
          - { name: meta, baseline: cmdb.sql ,comment: pigsty meta database ,schemas: [pigsty] ,extensions: [ vector ]}
        node_crontab: [ '00 01 * * * postgres /pg/bin/pg-backup full' ] # make a full backup every 1am
  vars:
    # 省略 ……
```
