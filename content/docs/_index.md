---
title: Pigsty 中文文档 v4.4
weight: 10
module: [PIGSTY]
categories: [参考]
linkTitle: 文档
no_list: true
hide_feedback: true
outputs:
  - HTML
  - RSS
  - print
cascade:
  outputs:
    - HTML
    - print
---

"**P**ostgreSQL **I**n **G**reat **STY**le": **P**ostgres, **I**nfras, **G**raphics, **S**ervice, **T**oolbox, it's all **Y**ours.

—— **开源免费、开箱即用、本地优先、自主可控的企业级 PostgreSQL 发行版与 RDS 方案**

> [仓库](https://github.com/pgsty/pigsty) | [演示](https://demo.pigsty.cc) | [博客](/blog) | [论坛](https://github.com/pgsty/pigsty/discussions) | [微信](https://mp.weixin.qq.com/s/-E_-HZ7LvOze5lmzy3QbQA) | [EN Docs](https://pigsty.io/docs/)

## 简介

从了解项目、理解概念，到单机上手、生产部署，四步掌握 Pigsty：

{{< nav-cards >}}
{{< nav-card title="关于" link="/docs/about/" icon="fa-solid fa-circle-info" desc="了解 Pigsty 项目本身的方方面面：功能特性、历史沿革、开源协议、隐私政策与社区动态。" >}}
[功能特性](/docs/about/feature) [历史沿革](/docs/about/history) [活动新闻](/docs/about/event) [加入社区](/docs/about/community) [开源协议](/docs/about/license) [服务订阅](/docs/about/service)
{{< /nav-card >}}
{{< nav-card title="概念" link="/docs/concept/" icon="fa-solid fa-compass" desc="理解 Pigsty 的核心概念、架构设计与设计理念，掌握高可用、备份恢复、安全合规等关键能力。" >}}
[系统架构](/docs/concept/arch) [集群模型](/docs/concept/model) [监控系统](/docs/concept/monitor) [IaC](/docs/concept/iac) [高可用](/docs/concept/ha) [PITR](/docs/concept/pitr) [服务接入](/docs/pgsql/misc/svc) [安全加固](/docs/concept/sec)
{{< /nav-card >}}
{{< nav-card title="上手" link="/docs/setup/" icon="fa-solid fa-rocket" desc="在你的笔记本或云服务器上拉起 Pigsty 单机版本，访问数据库服务与 Web 管理界面。" >}}
[单机安装](/docs/setup/install) [离线安装](/docs/setup/offline) [声明配置](/docs/setup/config) [执行剧本](/docs/setup/playbook) [图形界面](/docs/setup/webui) [常见问题](/docs/pgsql/faq)
{{< /nav-card >}}
{{< nav-card title="部署" link="/docs/deploy/" icon="fa-solid fa-download" desc="在生产环境中进行多节点、高可用的 Pigsty 架构规划、资源准备与正式部署。" >}}
[架构规划](/docs/deploy/planning) [资源准备](/docs/deploy/prepare) [生产部署](/docs/deploy/install) [沙箱环境](/docs/deploy/sandbox) [Vagrant](/docs/deploy/vagrant) [Terraform](/docs/deploy/terraform)
{{< /nav-card >}}
{{< /nav-cards >}}

## 安装

[**快速上手**](/docs/setup/install)：[**准备**](/docs/deploy/prepare) 一台全新安装 [**Linux**](/docs/ref/linux) 操作系统的节点，使用具有免密 `ssh` 与 `sudo` 权限的用户运行：

```bash
curl -fsSL https://repo.pigsty.cc/get | bash -s v4.4.0   # 下载 Pigsty 源码包
cd ~/pigsty      # 进入源码目录
./configure      # 生成配置文件
./install.yml    # 执行安装部署
```

[**下载**](/docs/setup/install#安装)、[**配置**](/docs/setup/install#配置) 与 [**部署**](/docs/setup/install#部署)，Pigsty 会在几分钟内完成安装！您可以稍后 [**添加更多节点**](/docs/deploy/install) 与数据库集群。

接下来，您可以探索 [**图形界面**](/docs/setup/webui)，访问 `5432` 端口上的 [**PostgreSQL 服务**](/docs/pgsql/service/)，以及 `3000` 端口上的 Grafana 监控大盘（用户名 / 密码：`admin` / `pigsty`）。

您还可以将多种风味的 [**PostgreSQL 内核**](/docs/pgsql/kernel/) 封装为 RDS 服务：[**Citus**](/docs/pgsql/kernel/citus)、[**WiltonDB**](/docs/pgsql/kernel/babelfish)、[**IvorySQL**](/docs/pgsql/kernel/ivorysql)、[**OpenHalo**](/docs/pgsql/kernel/openhalo)、[**Percona**](/docs/pgsql/kernel/percona)、[**OrioleDB**](/docs/pgsql/kernel/orioledb)、[**PolarDB**](/docs/pgsql/kernel/polardb)，以及 [**Supabase**](/docs/pgsql/kernel/supabase)。


## 模块

Pigsty 由多个 [**模块**](/docs/ref/module) 组成。其中 `PGSQL` / `INFRA` / `NODE` / `ETCD`（PINE 组合）是自建 PostgreSQL RDS 服务的 **必选** 模块：

{{< nav-cards >}}
{{< nav-card title="PGSQL" link="/docs/pgsql/" icon="fa-solid fa-database" accent="copper" badge="核心" desc="自治自愈的高可用 PostgreSQL 集群：HA、PITR、IaC、ACL 与监控齐备，海量扩展开箱即用。" >}}
[集群配置](/docs/pgsql/config/) [日常管理](/docs/pgsql/admin/) [备份恢复](/docs/pgsql/backup/) [服务接入](/docs/pgsql/service/) [内核分支](/docs/pgsql/kernel/) [参数列表](/docs/pgsql/param/)
{{< /nav-card >}}
{{< nav-card title="INFRA" link="/docs/infra/" icon="fa-solid fa-bank" accent="copper" badge="核心" desc="Nginx、本地软件仓库、DNS、NTP，以及 Prometheus 与 Grafana 可观测性技术栈。" >}}
[配置](/docs/infra/config) [管理](/docs/infra/admin/) [剧本](/docs/infra/playbook) [监控](/docs/infra/monitor) [参数](/docs/infra/param)
{{< /nav-card >}}
{{< nav-card title="NODE" link="/docs/node/" icon="fa-solid fa-server" accent="copper" badge="核心" desc="将主机节点纳管调整至期望状态：主机监控、日志收集、VIP 与 HAProxy 负载均衡。" >}}
[配置](/docs/node/config) [管理](/docs/node/admin) [剧本](/docs/node/playbook) [监控](/docs/node/monitor) [参数](/docs/node/param)
{{< /nav-card >}}
{{< nav-card title="ETCD" link="/docs/etcd/" icon="fa-solid fa-gears" accent="copper" badge="核心" desc="可靠的分布式共识存储（DCS），为 PostgreSQL 高可用提供集群元数据支撑。" >}}
[配置](/docs/etcd/config) [管理](/docs/etcd/admin) [剧本](/docs/etcd/playbook) [监控](/docs/etcd/monitor) [参数](/docs/etcd/param)
{{< /nav-card >}}
{{< /nav-cards >}}

此外还有一些 **可选** 模块，它们与 PostgreSQL 配合良好，可为你的数据基础设施带来额外价值：

{{< nav-cards cols="3" >}}
{{< nav-card title="MINIO" link="/docs/minio/" icon="fa-solid fa-boxes-stacked" accent="gray" badge="可选" desc="S3 兼容的对象存储，可用作数据库备份的集中存储仓库。" />}}
{{< nav-card title="REDIS" link="/docs/redis/" icon="fa-solid fa-layer-group" accent="gray" badge="可选" desc="高性能内存数据结构服务器，主从、集群、哨兵三种模式。" />}}
{{< nav-card title="DOCKER" link="/docs/docker/" icon="fa-brands fa-docker" accent="gray" badge="可选" desc="容器运行时，一键拉起容器化的无状态软件与应用模板。" />}}
{{< nav-card title="FERRET" link="/docs/ferret/" icon="fa-solid fa-leaf" accent="gray" badge="可选" desc="基于 PostgreSQL 提供 MongoDB 协议兼容能力。" />}}
{{< nav-card title="JUICE" link="/docs/juice/" icon="fa-solid fa-folder-tree" accent="gray" badge="可选" desc="JuiceFS 分布式文件系统，将 PostgreSQL 挂载为文件系统" />}}
{{< nav-card title="VIBE" link="/docs/vibe/" icon="fa-solid fa-laptop-code" accent="gray" badge="可选" desc="AI 编程沙箱，Claude/Codex 开发环境，Agent 运行时" />}}
{{< nav-card title="KAFKA" link="/docs/kafka/" icon="fa-solid fa-share-nodes" accent="gray" badge="可选" desc="Apache Kafka 4.x dynamic KRaft 消息队列集群，安全与监控齐备。" />}}
{{< nav-card title="PILOT" link="/docs/pilot/" icon="fa-solid fa-flask-vial" accent="gray" badge="试点" desc="试点功能模组：Kubernetes、DuckDB、MySQL、TigerBeetle……供尝鲜探索。" />}}
{{< /nav-cards >}}


## 参考信息

详尽的参考资料、扩展目录、开箱即用的模板，以及周边组件的中文文档：

{{< nav-cards >}}
{{< nav-card title="参考手册" link="/docs/ref/" icon="fa-solid fa-map" desc="详尽的参考信息列表：操作系统、文件结构、参数、监控指标与同类产品对比。" >}}
[操作系统](/docs/ref/linux) [模块列表](/docs/ref/module) [文件结构](/docs/ref/fhs) [同类产品](/docs/about/compare) [成本参考](/docs/about/compare/cost) [运维 SOP](/docs/sop/)
{{< /nav-card >}}
{{< nav-card title="扩展目录" link="/ext/" icon="fa-solid fa-puzzle-piece" desc="555 个 PostgreSQL 生态扩展的完整目录：元数据、文档、下载与支持矩阵。" >}}
[扩展列表](/ext/list) [系统支持](/ext/os) [软件仓库](/docs/repo/)
{{< /nav-card >}}
{{< nav-card title="开箱模板" link="/docs/conf/" icon="fa-solid fa-cubes" desc="开箱即用的集群配置模板，以及容器化的软件与应用模板。" >}}
[配置模板](/docs/conf/) [应用模板](/docs/app/)
{{< /nav-card >}}
{{< nav-card title="组件手册" link="/docs/pig/" icon="fa-solid fa-toolbox" desc="Pigsty 所用周边组件与工具的中文文档：包管理、高可用、连接池、备份与监控。" >}}
[pig](/docs/pig/) [piglet](/docs/piglet/) [patroni](/docs/patroni/) [pgbouncer](/docs/pgbouncer/) [pgbackrest](/docs/pgbackrest/) [pg_exporter](/docs/pg_exporter/)
{{< /nav-card >}}
{{< /nav-cards >}}
