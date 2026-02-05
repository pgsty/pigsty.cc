---
title: 亮点特性
weight: 101
description: Pigsty 的价值主张与亮点功能特性。
icon: fa-solid fa-wand-magic-sparkles
module: [PIGSTY]
categories: [参考]
---

> "**P**ostgreSQL **I**n **G**reat **STY**le": **P**ostgres, **I**nfras, **G**raphics, **S**ervice, **T**oolbox, it's all **Y**ours.
>
> —— **开箱即用、本地优先的 PostgreSQL 发行版，开源 RDS 替代**


----------------

## 价值主张

- [**可扩展性**](/img/pigsty/ecosystem.png)： 强力 [**扩展**](/docs/ref/extension) 开箱即用：深度整合 **PostGIS**, **TimescaleDB**, **Citus**, **PGVector** 等 [**444**](https://pgext.cloud/zh/list) 插件与 Oracle / SQL Server 的 [**兼容内核**](/docs/pgsql/kernel)。
- [**可靠性**](/img/pigsty/arch.png)：快速创建 [**高可用**](/docs/concept/ha/)、故障自愈的 [**PostgreSQL**](/docs/pgsql) 集群，自动预置的 [**时间点恢复**](/docs/concept/pitr/)、[**访问控制**](/docs/concept/sec/ac/)、自签名 [**CA**](/docs/concept/sec/ca) 与 [**SSL**](/docs/setup/security/)，确保数据坚如磐石。
- [**可观测性**](/img/pigsty/dashboard.jpg)： 基于 [**Prometheus**](/docs/infra#prometheus) & [**Grafana**](/docs/infra#grafana) 现代可观测性技术栈，提供惊艳的监控最佳实践。模块化设计，可独立使用：[**画廊**](https://github.com/pgsty/pigsty/wiki/Gallery) & [**Demo**](https://demo.pigsty.cc)。
- [**可用性**](/img/pigsty/ha.png)：交付稳定可靠，自动路由，事务池化、读写分离的高性能数据库 [**服务**](/docs/pgsql/service/#默认服务)，通过 HAProxy，Pgbouncer，VIP 提供灵活的 [**接入**](/docs/pgsql/service/#接入服务) 模式。
- [**可维护性**](/img/pigsty/iac.jpg)：[**简单易用**](/docs/setup/install)，[**基础设施即代码**](/docs/pgsql/config)，[**管理SOP预案**](/docs/pgsql/admin/)，自动调参，本地软件仓库，[**Vagrant**](/docs/deploy/vagrant) [**沙箱**](/docs/deploy/sandbox) 与 [**Terraform**](/docs/deploy/terraform) 模板，不停机 [**迁移**](/docs/pgsql/migration) 方案。
- [**可组合性**](/img/pigsty/sandbox.png)：[**模块化**](/docs/concept/arch#模块) 架构设计，可复用的 [**Infra**](/docs/infra)，多样的可选 [**模块**](/docs/ref/module/)：[**Redis**](/docs/redis), [**MinIO**](/docs/minio), [**ETCD**](/docs/etcd), [**FerretDB**](/docs/ferret), [**DuckDB**](https://github.com/pgsty/pigsty/tree/master/app/duckdb), [**Docker**](/docs/app/), [**Supabase**](https://github.com/pgsty/pigsty/tree/master/app/supabase)。

![](/img/pigsty/banner.png)


----------------

## 总览

Pigsty 是一个更好的本地开源 RDS for PostgreSQL 替代：

- [开箱即用的RDS](#开箱即用的rds)：从内核到RDS发行版，在 EL/Debian/Ubuntu 下提供 13-18 版本的生产级 PG 数据库服务。
- [丰富的扩展插件](#丰富的扩展插件)：提供无可比拟的 444 扩展，提供开箱即用的分布式的时序地理空间图文向量多模态数据库能力。
- [灵活的模块架构](#灵活的模块架构)：灵活组合，自由扩展：Redis/Etcd/MinIO/Mongo；可独立使用，监控现有RDS/主机/数据库。
- [惊艳的观测能力](#惊艳的观测能力)：基于现代可观测性技术栈 Prometheus/Grafana，提供令人惊艳，无可比拟的数据库观测能力。
- [验证过的可靠性](#验证过的可靠性)：故障自愈的高可用架构：硬件故障自动切换，流量无缝衔接。并提供自动配置的 PITR 兜底删库！
- [简单易用可维护](#简单易用可维护)：声明式API，GitOps就位，傻瓜式操作，Database/Infra-as-Code 以及管理SOP封装管理复杂度！
- [扎实的安全实践](#扎实的安全实践)：加密备份一应俱全，自带基础ACL最佳实践。只要硬件与密钥安全，您无需操心数据库的安全性！
- [广泛的应用场景](#广泛的应用场景)：低代码数据应用开发，或使用预置的 Docker Compose 模板，一键拉起使用PostgreSQL的海量软件！
- [开源的自由软件](#开源的自由软件)：以云数据库1/10不到的成本拥有与更好的数据库服务！帮您真正“拥有”自己的数据，实现自主可控！

PostgreSQL 整合了生态中的工具与最佳实践：

- 开箱即用的 [PostgreSQL](https://www.postgresql.org/) 发行版，深度整合地理、时序、分布式、图、向量、搜索、AI等 444 余个 [扩展插件](/docs/ref/extension)！
- 运行于裸操作系统之上，无需容器支持，支持主流操作系统： EL 8/9/10, Ubuntu 22.04/24.04 以及 Debian 12/13。
- 基于 [patroni](https://patroni.readthedocs.io/en/latest/), [haproxy](http://www.haproxy.org/), 与 [etcd](https://etcd.io/)，打造故障自愈的高可用架构：硬件故障自动切换，流量无缝衔接。
- 基于 [pgBackRest](https://pgbackrest.org/) 与可选的 [MinIO](https://min.io/) 集群提供开箱即用的 PITR 时间点恢复，为软件缺陷与人为删库兜底。
- 基于 [Ansible](https://www.ansible.com/) 提供声明式的 API 对复杂度进行抽象，以 **Database-as-Code** 的方式极大简化了日常运维管理操作。
- Pigsty用途广泛，可用作完整应用运行时，开发演示数据/可视化应用，大量使用 PG 的软件可用 [Docker](https://www.docker.com/) 模板一键拉起。
- 提供基于 [Vagrant](https://www.vagrantup.com/) 的本地开发测试沙箱环境，与基于 [Terraform](https://www.terraform.io/) 的云端自动部署方案，开发测试生产保持环境一致。
- 部署并监控专用的 [Redis](https://redis.io/)（主从，哨兵，集群），MinIO，Etcd，Haproxy，MongoDB ([FerretDB](https://www.ferretdb.io/)) 集群


----------------

## 开箱即用的RDS

**让您立刻在本地拥有生产级的PostgreSQL数据库服务！**

PostgreSQL 是一个足够完美的数据库内核，但它需要更多工具与系统的配合才能成为一个足够好的数据库服务（RDS），Pigsty 帮助 PostgreSQL 完成这一步飞跃。
Pigsty 为您解决使用 PostgreSQL 中会遇到的各种难题：内核扩展安装，连接池，负载均衡，服务接入，高可用 / 自动故障切换，日志收集，指标监控，告警，备份恢复，PITR，访问控制，参数调优，安全加密，证书签发，NTP，DNS，参数调优，配置管理，CMDB，管理预案… 您无需再为这些细节烦心劳神！


Pigsty 支持 PostgreSQL 13 ～ 18 主干内核与其他兼容分支，可运行于 EL / Debian / Ubuntu 以及 [兼容操作系统发行版](/docs/ref/linux) 上，在 x86_64 与 ARM64 芯片架构上可用，且无需容器支持。
除了数据库内核与大量开箱即用的扩展插件以外，Pigsty 还提供了数据库服务所需的完整基础设施与运行时，以及本地沙箱 / 生产环境 / 云 IaaS 自动部署方案。

Pigsty 可以一键从裸机开始拉起整套环境，触达软件交付的最后一公里。普通研发运维均可快速上手并兼职进行数据库管理，无需数据库专家即可自建企业级RDS服务！

[![pigsty-arch](/img/pigsty/arch.png)](/docs/concept/arch#单机安装)




----------------

## 丰富的扩展插件

**超融合多模态，一切皆用 PostgreSQL，一个PG替换所有数据库！**

PostgreSQL 的灵魂在于其丰富的 [**扩展生态**](/blog/pg/pg-eat-db-world)，而 Pigsty 独一无二地深度整合了 PostgreSQL 生态中的 [**444 扩展**](https://pgext.cloud/zh/list)，为您提供开箱即用的超融合多模态数据库！

插件间可以产生 [**协同效应**](https://pigsty.cc/zh/blog/pg/pg-eat-db-world#极致可扩展性的魔法)，产生 1+1 远大于 2 的效果。
您可以使用 [**PostGIS**](https://postgis.net/) 处理地理空间数据，使用 [**TimescaleDB**](https://www.timescale.com/) 分析时序/事件流数据，并使用 [**Citus**](https://www.citusdata.com/) 将其原地升级为分布式地理时空数据库；
您可以用 [**PGVector**](https://github.com/pgvector/pgvector) 存储并搜索AI嵌入，用 [**ParadeDB**](https://www.paradedb.com/) 实现 ES级全文检索，并同时使用精准的 SQL，全文检索，与模糊向量进行混合检索。
您还可以通过 [**pg_duckdb**](https://github.com/duckdb/pg_duckdb)，[**pg_mooncake**](https://github.com/duckdb/pg_mooncake) 等分析扩展，实现专用 OLAP 数据库/数据湖仓的分析表现。

使用 PostgreSQL 单一组件替代 MySQL，Kafka，ElasticSearch，MongoDB，以及大数据分析技术栈已经成为一种最佳实践 —— 单一数据库选型能够显著降低系统复杂度，极大提高研发效能与敏捷性，实现程度惊人的软硬件，研发/运维人力降本增效。

[![pigsty-ecosystem.jpg](/img/pigsty/ecosystem.jpg)](/docs/ref/extension/)



----------------

## 灵活的模块架构

**灵活组合，自由扩展，多数据库支持，监控现有RDS/主机/数据库**

Pigsty 中的组件被抽象可独立部署的 [**模块**](/docs/ref/module/)，并可自由组合以应对多变的需求场景。[**`INFRA`**](/docs/infra) 模块带有完整的现代监控技术栈，而 [**`NODE`**](/docs/node) 模块则将节点调谐至指定状态并纳管。
在多个节点上安装 [**`PGSQL`**](/docs/pgsql) 模块会自动组建出基于主从复制的高可用数据库集群，而同样的 [**`ETCD`**](/docs/etcd) 模块则为数据库高可用提供共识与元数据存储。

除了上述四个 [核心模块](/docs/about/module#核心模块) 之外，Pigsty 还提供一系列选装功能模块：[**`MINIO`**](/docs/minio) 模块可以提供本地对象存储能力，并作为集中式数据库备份仓库。
[**`REDIS`**](/docs/redis/) 模块能以独立主从，哨兵，原生集群的方式为数据库提供辅助。[**`DOCKER`**](/docs/docker) 模块可用于拉起无状态的应用软件。

此外，Pigsty 还提供 PG 兼容 / 衍生内核的支持，您可以使用 [**`Babelfish`**](/docs/pgsql/kernel/babelfish) 提供 MS SQL Server 兼容性，使用 [**`IvorySQL`**](/docs/pgsql/kernel/ivorysql) 提供 Oracle 兼容性，
使用 [**`OpenHaloDB`**](/docs/pgsql/kernel/openhalo) 提供 MySQL 兼容性，使用 [**`OrioleDB`**](/docs/pgsql/kernel/orioledb) 提供极致的 OLTP 性能。

不仅如此，你还可以使用 [**`FerretDB`**](/docs/ferret/) 提供 MongoDB 兼容性，使用 [**`Supabase`**](/docs/pgsql/kernel/supabase) 提供 Firebase 兼容，并使用 [**`PolarDB`**](/docs/pgsql/kernel/polardb) 满足国产化合规要求。
更多专业版/试点模块将不断引入 Pigsty，如 [**`GPSQL`**](/docs/pgsql/kernel/greenplum)，[KAFKA](/docs/pilot/kafka/)，[DUCKDB](/docs/pilot/duckdb/)，[VICTORIA](/docs/pilot/victoria/)，[TIGERBEETLE](/docs/pilot/tigerbeetle/)，[KUBERNETES](/docs/pilot/kube/)，[CONSUL](/docs/pilot/consul/)，[JUPYTER](/docs/pilot/jupyter/)，[GREENPLUM](/docs/pgsql/kernel/greenplum/)，[CLOUDBERRY](/docs/pgsql/kernel/cloudberry/)，[MYSQL](/docs/pilot/mysql/), …

[![pigsty-sandbox](/img/pigsty/sandbox.png)](/docs/ref/module/)





----------------

## 惊艳的观测能力

**使用现代开源可观测性技术栈，提供无与伦比的监控最佳实践！**

Pigsty 提供了基于开源的 Grafana / Prometheus 现代可观测性技术栈做 [**监控**](/docs/pgsql/monitor) 的最佳实践：，Grafana 负责可视化呈现，VictoriaMetrics 用于收集监控指标，VictoriaLogs 用于日志收集与查询，Alertmanager 用于告警通知。Blackbox Exporter 负责检查服务可用性。整套系统同样被设计为一键拉起，开箱即用的 INFRA 模块。

Pigsty 所管理的任何组件都会被自动纳入监控之中，包括主机节点，负载均衡 HAProxy，数据库 Postgres，连接池 Pgbouncer，元数据库 ETCD，KV缓存 Redis，对象存储 MinIO，……，以及整套监控基础设施本身。大量的 Grafana 监控面板与预置告警规则会让你的系统观测能力有质的提升，当然，这套系统也可以被复用于您的应用监控基础设施，或者监控已有的数据库实例或 RDS。

无论是故障分析还是慢查询优化、无论是水位评估还是资源规划，Pigsty 为您提供全面的数据支撑，真正做到数据驱动。在 Pigsty 中，超过三千类监控指标被用于描述整个系统的方方面面，并被进一步加工、聚合、处理、分析、提炼并以符合直觉的可视化模式呈现在您的面前。从全局大盘总览，到某个数据库实例中单个对象（表，索引，函数）的增删改查详情都能一览无余。您可以随意上卷下钻横向跳转，浏览系统现状与历史趋势，并预测未来的演变。

[![pigsty-dashboard.jpg](/img/pigsty/dashboard.jpg)](https://github.com/Vonng/pigsty/wiki/Gallery)


此外，Pigsty的监控系统模块部分还可以 [**独立使用**](/docs/pgsql/monitor/#监控rds) ——用它来监控现有的主机节点与数据库实例，或者是云上的 RDS 服务。只需要一个连接串一行命令，您就可以获得极致的 PostgreSQL 可观测性体验。

访问 [**截图画廊**](https://github.com/Vonng/pigsty/wiki/Gallery) 与 [**在线演示**](https://demo.pigsty.cc) 获取更多详情。




----------------

## 久经考验的可靠性

**开箱即用的高可用与时间点恢复能力，确保你的数据库坚如磐石！**

对于软件缺陷或人为误操作造成的删表删库，Pigsty 提供了开箱即用的 [PITR](/docs/concept/pitr) 时间点恢复能力，无需额外配置即默认启用。只要存储空间管够，基于 `pgBackRest` 的基础备份与 WAL 归档让您拥有快速回到过去任意时间点的能力。您可以使用本地目录/磁盘，亦或专用的 MinIO 集群或 S3 对象存储服务保留更长的回溯期限，丰俭由人。

更重要的是，Pigsty 让高可用与故障自愈成为 PostgreSQL 集群的标配，基于 `patroni`, `etcd`, 与 `haproxy` 打造的 [高可用故障自愈架构](/docs/concept/ha)，让您在面对硬件故障时游刃有余：主库故障自动切换的 RTO < 45s（可配置），一致性优先模式下确保数据零损失 RPO = 0。只要集群中有任意实例存活，集群就可以对外提供完整的服务，而客户端只要连接至集群中的任意节点，即可获得完整的服务。

Pigsty 内置了 HAProxy 负载均衡器用于自动流量切换，提供 DNS/VIP/LVS 等多种接入方式供客户端选用。故障切换与主动切换对业务侧除零星闪断外几乎无感知，应用不需要修改连接串重启。极小的维护窗口需求带来了极大的灵活便利：您完全可以在无需应用配合的情况下滚动维护升级整个集群。硬件故障可以等到第二天再抽空善后处置的特性，让研发，运维与 DBA 都能安心睡个好觉。
许多大型组织与核心机构已经在生产环境中长时间使用 Pigsty ，最大的部署有 25K CPU 核心与 200+ PostgreSQL 超大规格实例；在这一部署案例中，六七年内经历了数十次硬件故障与各类事故，DBA 换了几茬，但依然可以保持比 99.999% 更高的可用性战绩。

[![pigsty-ha.png](/img/pigsty/ha.png)](/docs/concept/ha/)



----------------

## 简单易用可维护

**Infra as Code, 数据库即代码，声明式的API将数据库管理的复杂度来封装。**

Pigsty 使用声明式的接口对外提供服务，将系统的可控制性拔高到一个全新水平：用户通过配置清单告诉 Pigsty "我想要什么样的数据库集群"，而不用去操心到底需要怎样去做。从效果上讲，这类似于 K8S 中的 CRD 与 Operator，但 Pigsty 可用于任何节点上的数据库与基础设施：不论是容器，虚拟机，还是物理机。

无论是创建/销毁集群，添加/移除从库，还是新增数据库/用户/服务/扩展/黑白名单规则，您只需要修改配置清单并运行 Pigsty 提供的幂等剧本，而 Pigsty 负责将系统调整到您期望的状态。
用户无需操心配置的细节，Pigsty将自动根据机器的硬件配置进行调优，您只需要关心诸如集群叫什么名字，有几个实例放在哪几台机器上，使用什么配置模版：事务/分析/核心/微型，这些基础信息，研发也可以自助服务。但如果您愿意跳入兔子洞中，Pigsty 也提供了丰富且精细的控制参数，满足最龟毛 DBA 的苛刻定制需求。

除此之外，Pigsty 本身的安装部署也是一键傻瓜式的，所有依赖被预先打包，在安装时可以无需互联网访问。而安装所需的机器资源，也可以通过 Vagrant 或 Terraform 模板自动获取，让您在十几分钟内就可以从零在本地笔记本或云端虚拟机上拉起一套完整的 Pigsty 部署。本地沙箱环境可以跑在1核2G的微型虚拟机中，提供与生产环境完全一致的功能模拟，可以用于开发、测试、演示与学习。

[![pigsty-iac.jpg](/img/pigsty/iac.jpg)](/docs/setup/config)



----------------

## 扎实的安全实践

**加密备份一应俱全，只要硬件与密钥安全，您无需操心数据库的安全性。**

**Pigsty 针对高标准，严要求的企业级场景设计**，采用业界领先的 [安全最佳实践](/docs/setup/security) 保护您的数据安全（机密性/完整性/可用性），默认配置下的安全性便足以满足绝大多数场景下的合规要求。

Pigsty 会创建自签名的 CA （或使用您提供的 CA）签发证书，加密网络通信。需要保护的敏感管理页面与API端点都受到密码保护。
数据库备份使用 AES 算法加密，数据库密码使用 scram-sha-256 算法加密，并提供插件强制执行密码强度策略。
Pigsty 提供了一套开箱即用，简单易用，便于扩展的 [**ACL**](/docs/concept/sec/ac/) 模型，提供读/写/管理/ETL 的权限区分，并带有遵循最小权限原则的 [**HBA**](/docs/pgsql/config/hba) 规则集，通过多重防护确保系统机密性。

Pigsty 默认启用数据库校验和避免静默数据腐坏，通过从库副本提供坏块兜底。提供 CRIT 数据零丢失配置模板，使用 watchdog 确保为高可用 Fencing 兜底。
您可以通过 audit 插件审计数据库操作，系统与数据库日志全部收集备查，以满足合规要求。

Pigsty 正确配置 SELinux 与防火墙配置，并遵循最小权限原则设计操作系统用户组与文件权限，确保系统安全基线符合合规要求。
而且在 Etcd，MinIO 等附属可选组件上的安全上也毫不妥协，etcd 与 minio 均使用 RBAC 模型与 TLS 加密通信，确保系统整体安全性。

合理配置的系统通过等保三级/SOC2毫无问题，只要您遵循安全性最佳实践，内网部署并合理配置安全组与防火墙，数据库安全性将不再是您的痛点。

[![pigsty-acl.jpg](/img/pigsty/acl.jpg)](/docs/setup/security)



----------------

## 广泛的应用场景

**使用预置的Docker模板，一键拉起使用PostgreSQL的海量软件！**

在各类数据密集型应用中，数据库往往是最为棘手的部分。例如 Gitlab 企业版与社区版的核心区别就是底层 PostgreSQL 数据库的监控与高可用，如果您已经有了足够好的本地 PG RDS，完全可以拒绝为软件自带的土法手造数据库组件买单。

Pigsty 提供了 Docker 模块与大量开箱即用的 Compose 模板。您可以使用 Pigsty 管理的高可用 PostgreSQL （以及 Redis 与 MinIO ）作为后端存储，以无状态的模式一键拉起这些软件：
Gitlab、Gitea、Wiki.js、NocoDB、Odoo、Jira、Confluence、Habour、Mastodon、Discourse、KeyCloak 等等。如果您的应用需要一个靠谱的 PostgreSQL 数据库， Pigsty 也许是最简单的获取方案。

Pigsty 也提供了与 PostgreSQL 紧密联系的应用开发工具集：PGAdmin4、PGWeb、ByteBase、PostgREST、Kong、以及 EdgeDB、FerretDB、Supabase 这些使用 PostgreSQL 作为存储的"上层数据库"。
更奇妙的是，您完全可以基于 Pigsty 内置了的 Grafana 与 Postgres ，以低代码的方式快速搭建起一个交互式的数据应用来，甚至还可以使用 Pigsty 内置的 ECharts 面板创造更有表现力的交互可视化作品。

Pigsty 为您的 AI 应用提供了一个功能强大的运行时，您的 Agent 可以在这个环境中利用 PostgreSQL 与可观测性世界的强大能力，快速构建起一个数据驱动的智能体。

[![pigsty-app.jpg](/img/pigsty/app.jpg)](/docs/app/)



----------------

## 开源的自由软件

**Pigsty是基于 Apache-2.0 开源的自由软件，由热爱 PostgreSQL 的社区成员用热情浇灌**

Pigsty 是完全 [**开源免费**](/docs/about/license/) 的自由软件，它允许您在缺乏数据库专家的情况下，用几乎接近纯硬件的成本来运行企业级的 PostgreSQL 数据库服务。
作为对比，数据库厂商的“企业级数据库服务”与公有云厂商提供的 RDS 会收取底层硬件资源几倍到十几倍不等的 [**溢价**](/docs/about/compare/cost/) 作为 "服务费"。

很多用户选择上云，正是因为自己搞不定数据库；很多用户使用 RDS，是因为别无他选。
我们将打破云厂商的垄断，为用户提供一个云中立的，[**更好的**](/docs/about/compare/) RDS 开源替代：
Pigsty 紧跟 PostgreSQL 上游主干，不会有供应商锁定，不会有恼人的 "授权费"，不会有节点数量限制，不会收集您的任何数据。您的所有的核心资产 —— 数据，都能"自主可控"，掌握在自己手中。

Pigsty 本身旨在用数据库自动驾驶软件，替代大量无趣的人肉数据库运维工作，但再好的软件也没法解决所有的问题。
总会有一些的冷门低频疑难杂症需要专家介入处理。这也是为什么我们也提供专业的 [**订阅服务**](/docs/about/service/)，来为有需要的企业级用户使用 PostgreSQL 提供兜底。
几万块的订阅咨询费不到顶尖 DBA 每年工资的几十分之一，让您彻底免除后顾之忧，把成本真正花在刀刃上。对于社区用户，我们亦 [**用爱发电**](/docs/about/sponsor/)，提供免费的支持与日常答疑。

[![pigsty-price.jpg](/img/pigsty/price.jpg)](/docs/about/cost/)
