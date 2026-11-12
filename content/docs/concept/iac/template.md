---
title: 配置模板
weight: 215
description: 使用预制的配置模板，快速生成适配当前环境的配置文件
icon: fa-solid fa-code
module: [PIGSTY]
categories: [概念]
---

在 Pigsty 中，部署的蓝图细节由 [**配置清单**](/docs/setup/config/) 所定义，也就是 [**`pigsty.yml`**](https://github.com/pgsty/pigsty/blob/main/pigsty.yml) 配置文件，您可以通过声明式配置进行定制。

然而，直接编写配置文件可能会让新用户望而生畏。为此，我们提供了一些开箱即用的配置模板，涵盖了常见的使用场景。

每一个模板都是一个预定义的 `pigsty.yml` 配置文件，包含了适用于特定场景的合理默认值。

您可以根据自己的需要，选择一个模板作为定制起点，然后根据需要进行修改，以满足您的具体需求。


------

## 使用模板

Pigsty 提供了 [**`configure`**](https://github.com/pgsty/pigsty/blob/main/configure) 脚本作为可选的配置向导，它将根据您的环境和输入，生成具有良好默认值的 [**配置清单**](/docs/setup/config/)。

使用 `./configure -c <conf>` 指定配置模板，其中 `<conf>` 可以是相对于 `conf/` 目录的路径（省略 `.yml` 后缀），也可以直接使用裸名称（按 `conf/` → `ha/` → `fork/` → `app/` → `demo/` → `build/` 顺序查找）：

```bash
./configure                     # 默认使用 meta.yml 配置模板
./configure -c meta             # 显式指定使用 meta.yml 单节点模板
./configure -c rich             # 使用包含全部扩展与 Silo 的富功能模板
./configure -c slim             # 使用最小化的单节点模板

# 使用不同的数据库内核与兼容栈
./configure -c pgsql            # 原生 PostgreSQL 内核，基础功能 (14~18)
./configure -c pg19             # PostgreSQL 19 Beta 专用试用模板
./configure -c mssql            # Babelfish 内核，兼容 SQL Server 协议 (17/18)
./configure -c polar            # PolarDB PG 内核，Aurora/RAC 风格 (17)
./configure -c ivory            # IvorySQL 内核，兼容 Oracle 语法 (18)
./configure -c halo             # OpenHalo 内核，兼容 MySQL 协议 (14)，等价于 fork/halo
./configure -c pgtde            # Percona PostgreSQL Server 透明加密 (18)
./configure -c oriole           # OrioleDB 内核，OLTP 增强 (16~18)
./configure -c agens            # AgensGraph 图数据库内核 (18)，等价于 fork/agens
./configure -c pgedge           # pgEdge 分布式数据库内核 (15~18，默认 18)
./configure -c mongo            # FerretDB / MongoDB 协议兼容栈，等价于 fork/mongo
./configure -c mysql            # 原生 MySQL 8.4 部署模板，等价于 demo/mysql
./configure -c ha/citus         # Citus 分布式高可用 PostgreSQL (14~18)
./configure -c supabase         # Supabase 自托管配置 (15~18)

# 使用多节点高可用模板
./configure -c ha/dual          # 使用 2 节点高可用模板
./configure -c ha/trio          # 使用 3 节点高可用模板
./configure -c ha/full          # 使用 4 节点高可用模板
```

如果不指定模板，Pigsty 默认使用 `meta.yml` 单节点配置模板。


------

## 模板列表

### 主要模板

以下是单节点配置模板，可用于在单台服务器上安装 Pigsty：

| 模板                                 | 说明                            |
|------------------------------------|-------------------------------|
| [**`meta.yml`**](/docs/conf/meta/) | **默认模板**，单节点 PostgreSQL 在线安装  |
| [**`rich.yml`**](/docs/conf/rich/) | 富功能模板，包含本地软件源、Silo 及更多示例      |
| [**`slim.yml`**](/docs/conf/slim/) | 精简模板，仅安装 PostgreSQL，不含监控与基础设施 |
{.full-width}

### 数据库内核模板

适用于各类数据库管理系统与内核的模板：

| 模板                                           | 说明                                    |
|----------------------------------------------|---------------------------------------|
| [**`fork/pgsql.yml`**](/docs/conf/pgsql/)    | 原生 PostgreSQL 内核，基础功能 (14~18)         |
| [**`pg19.yml`**](/docs/conf/pg19/)           | PostgreSQL 19 Beta 专用试用模板             |
| [**`fork/mssql.yml`**](/docs/conf/mssql/)    | Babelfish 内核，兼容 SQL Server 协议 (17/18) |
| [**`fork/polar.yml`**](/docs/conf/polar/)    | PolarDB PG 内核，Aurora/RAC 风格 (17)      |
| [**`fork/ivory.yml`**](/docs/conf/ivory/)    | IvorySQL 内核，兼容 Oracle 语法 (18)         |
| [**`fork/halo.yml`**](/docs/conf/mysql/)     | OpenHalo 内核，兼容 MySQL 协议 (14)          |
| [**`fork/pgtde.yml`**](/docs/conf/pgtde/)    | Percona PostgreSQL Server 透明加密 (18)   |
| [**`fork/oriole.yml`**](/docs/conf/oriole/)  | OrioleDB 内核，OLTP 增强 (16~18)           |
| [**`fork/agens.yml`**](/docs/conf/agens/)    | AgensGraph 图数据库内核 (18)                |
| [**`fork/pgedge.yml`**](/docs/conf/pgedge/)  | pgEdge 分布式数据库内核 (15~18，默认 18)         |
| [**`fork/mongo.yml`**](/docs/conf/mongo/)    | FerretDB / MongoDB 协议兼容示例             |
| [**`supabase.yml`**](/docs/conf/supabase/)   | Supabase 自托管配置 (15~18)                |
{.full-width .wide .expand}

您可以后续添加更多节点，或使用 [高可用模板](#高可用模板) 在一开始就规划好集群。


------

### 高可用模板

您可以配置 Pigsty 在多节点上运行，组成高可用（HA）集群：

| 模板                                      | 说明                              |
|-----------------------------------------|---------------------------------|
| [**`ha/dual.yml`**](/docs/conf/dual/)   | 2 节点半高可用部署                      |
| [**`ha/trio.yml`**](/docs/conf/trio/)   | 3 节点标准高可用部署                     |
| [**`ha/full.yml`**](/docs/conf/full/)   | 4 节点标准部署                        |
| [**`ha/safe.yml`**](/docs/conf/safe/)   | 3 节点安全增强部署，含离线查询从库              |
| [**`ha/octo.yml`**](/docs/conf/octo/)   | 8 节点紧凑高可用仿真                     |
| [**`ha/simu.yml`**](/docs/conf/simu/)   | 20 节点生产环境模拟                     |
| [**`ha/citus.yml`**](/docs/conf/citus/) | Citus 分布式高可用 PostgreSQL (14~18) |
{.full-width}


------

### 应用模板

您可以使用以下模板运行 Docker 应用/软件：

| 模板                                                 | 说明                  |
|----------------------------------------------------|---------------------|
| [**`supabase.yml`**](/docs/conf/supabase/)         | 启动单节点 Supabase      |
| [**`app/supa.yml`**](/docs/conf/supabase/)         | 启动精简版 Supabase 应用栈  |
| [**`app/odoo.yml`**](/docs/conf/odoo/)             | 启动 Odoo ERP 系统      |
| [**`app/dify.yml`**](/docs/conf/dify/)             | 启动 Dify AI 工作流系统    |
| [**`app/electric.yml`**](/docs/conf/electric/)     | 启动 Electric 同步引擎    |
| [**`app/insforge.yml`**](/docs/conf/insforge/)     | 启动 Insforge 后端平台    |
| [**`app/hindsight.yml`**](/docs/conf/hindsight/)   | 启动 Hindsight 应用     |
| [**`app/mattermost.yml`**](/docs/conf/mattermost/) | 启动 Mattermost 协作平台  |
| [**`app/teable.yml`**](/docs/conf/teable/)         | 启动 Teable 表格数据库     |
| [**`app/maybe.yml`**](/docs/conf/maybe/)           | 启动 Maybe 财务应用       |
| [**`app/registry.yml`**](/docs/conf/registry/)     | 启动 Docker Registry  |
| [**`app/immich.yml`**](/docs/conf/immich/)         | 启动 Immich 相册管理应用    |
| [**`app/jumpserver.yml`**](/docs/conf/jumpserver/) | 启动 JumpServer 堡垒机   |
| [**`app/discourse.yml`**](/docs/conf/discourse/)   | 启动 Discourse 社区论坛   |
| [**`app/silo.yml`**](/docs/conf/silo/)             | 启动独立的 Silo 对象存储应用   |
{.full-width .wide .expand}


------

### 演示模板

除主要模板外，Pigsty 还提供了一组面向不同场景的演示模板：

| 模板                                           | 说明                                                      |
|----------------------------------------------|---------------------------------------------------------|
| [**`demo/bare.yml`**](/docs/conf/bare/)      | 最小化的单节点起步配置                                             |
| [**`demo/el.yml`**](/docs/conf/el/)          | EL 9/10 系统的全参数配置文件                                      |
| [**`demo/debian.yml`**](/docs/conf/debian/)  | Debian/Ubuntu 系统的全参数配置文件                                |
| [**`demo/remote.yml`**](/docs/conf/remote/)  | 监控远程 PostgreSQL 集群或 RDS 的示例配置                           |
| [**`demo/redis.yml`**](/docs/conf/redis/)    | Redis 集群示例配置                                            |
| [**`demo/minio.yml`**](/docs/conf/minio/)    | 4 节点 Silo 多盘集群示例                                        |
| [**`demo/kafka.yml`**](/docs/conf/kafka/)    | 单节点开发集群 + 三节点安全集群的 Kafka dynamic KRaft 示例               |
| [**`demo/mysql.yml`**](/docs/conf/mysql84/)  | 原生 MySQL 8.4 单节点/三节点试点示例（区别于 OpenHalo `fork/halo.yml`）  |
| [**`demo/kernel.yml`**](/docs/conf/kernel/)  | 10 节点内核矩阵演示配置                                           |
| [**`demo/saas.yml`**](/docs/conf/saas/)      | 含全部扩展的富功能单节点模板                                          |
| [**`demo/wool.yml`**](/docs/conf/wool/)      | 低成本阿里云 ECS 演示模板                                         |
| [**`demo/demo.yml`**](/docs/conf/demo/)      | Pigsty [公开演示站](https://demo.pigsty.cc) 的配置文件            |
| [**`fat.yml`**](/docs/conf/fat/)             | 含本地软件源与完整功能的单节点配置文件                                     |
| [**`infra.yml`**](/docs/conf/infra/)         | 仅部署基础设施模块                                               |
| [**`vibe.yml`**](/docs/conf/vibe/)           | Vibe Coding / AI 应用开发模板                                 |
| [**`docker.yml`**](/docs/conf/docker/)       | Docker 应用宿主模板                                           |
{.full-width .wide .expand}


------

### 构建模板

以下配置模板用于软件包构建与跨发行版测试目的：

| 模板                                       | 说明                                                   |
|------------------------------------------|------------------------------------------------------|
| [**`build/oss.yml`**](/docs/conf/oss/)   | EL 9/10、Debian 12/13、Ubuntu 22.04/24.04/26.04 开源构建配置 |
| [**`build/dev.yml`**](/docs/conf/dev/)   | 7 节点跨发行版本地开发测试构建配置                                   |
{.full-width}
