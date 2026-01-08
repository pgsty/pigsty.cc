---
title: 通过配置清单定制 Pigsty 部署
linkTitle: 定制教程
weight: 270
description: 使用声明式的配置文件，表达你需要的基础设施与集群。
icon: fa-solid fa-code
module: [PIGSTY]
categories: [教程]
---

除了使用 [**配置向导**](/docs/concept/iac/configure) 自动生成配置，您也可以从零开始手工编写 Pigsty 配置文件。
本教程将指导您从头开始，逐步构建一个复杂的 [**配置清单**](/docs/concept/iac/inventory)。

如果您事先就在 [**配置清单**](/docs/concept/iac/inventory) 中定义好了一切，那么只要 `deploy.yml` 剧本一把梭，即可完成所有部署工作，但它隐藏了所有细节。

所以本文档会把所有模块与剧本拆解开来，介绍如何从一个简单的配置，通过增量添加的方式，形成一套复杂完备的部署。


--------

## 最小配置

最简单的有效配置文件可能如下所示，唯一的内容是定义 [**`admin_ip`**](/docs/infra/param#admin_ip) 变量，这是当前安装 Pigsty 节点的 IP 地址（**管理节点**）

{{< tabpane text=true persist=header >}}
{{% tab header="最简配置" %}}
```yaml
all: { vars: { admin_ip: 10.10.10.10 } }
```
{{% /tab %}}
{{% tab header="中国特色" %}}
```yaml
# 天朝自有国情在此，额外配置 region: chian 以使用国内的镜像源加速下载
all: { vars: { admin_ip: 10.10.10.10, region: china } }
```
{{% /tab %}}
{{< /tabpane >}}


这个配置不会部署任何东西，但是执行 `./deploy.yml` 剧本时，会在 `files/pki/ca` 生成一套自签名的 **CA**，用于签发证书。

为了方便起见，我们还可以额外设置 [**`region`**](/docs/infra/param/#region) 参数，指定使用哪个区域的软件镜像源（`default`，`china`，`europe`）。


--------

## 加入节点

Pigsty 的 [**`NODE`**](/docs/node/) 模块负责管理集群中的节点。配置清单里存在的 IP 地址，都会被 Pigsty 纳入管理，安装 NODE 模块。

{{< tabpane text=true persist=header >}}
{{% tab header="最简配置" %}}
```yaml
all:  # 不要忘了将 10.10.10.10 替换为您的实际 IP 地址
  children: { nodes: { hosts: { 10.10.10.10: {} } } } 
  vars: 
    admin_ip: 10.10.10.10                   # 当前节点 IP 地址
    region: default                         # 全球默认软件仓库
    node_repo_modules: node,pgsql,infra     # 添加 node, pgsql, infra 软件仓库
```
{{% /tab %}}
{{% tab header="中国特色" %}}
```yaml
all:  # 不要忘了将 10.10.10.10 替换为您的实际 IP 地址                        
  children: { nodes: { hosts: { 10.10.10.10: {} } } } 
  vars:
    admin_ip: 10.10.10.10                 # 当前节点 IP 地址
    region: china                         # 使用中国镜像
    node_repo_modules: node,pgsql,infra   # 添加 node, pgsql, infra 软件仓库
```
{{% /tab %}}
{{< /tabpane >}}

为了让这个配置更有用，我们添加了两个 [**全局参数**](/docs/concept/iac/parameter)：
指定该节点要添加的软件源 [**`node_repo_modules`**](/docs/node/param/#node_repo_modules)；
以及使用哪个区域的镜像的 [**`region`**](/docs/infra/param/#region)。

上面的两个参数能够让节点使用正确的软件仓库，安装默认指定的必须包。
在 NODE 模块中有许多可用的 [**定制项**](/docs/node/param)：您可以定制节点的名称，DNS，软件仓库，要安装的软件包，DNS，NTP，内核参数，调优模板，监控，日志采集等各种细节。
但即使您什么都不改，默认配置也足够了。

接下来，执行 `deploy.yml` 剧本，或者更精确地执行 `node.yml` 剧本，将会把这里定义节点 “纳入 Pigsty 管理”，调整至默认配置描述的状态。

| ID | [NODE](/docs/node/) | [INFRA](/docs/infra/) | [**ETCD**](/docs/etcd/) | [PGSQL](/docs/pgsql/) | 说明   |
|:--:|:-------------------:|:---------------------:|:-----------------------:|:---------------------:|:-----|
| 1  |    `10.10.10.10`    |           -           |            -            |           -           | 添加节点 |
{.full-width}


--------

## 加入基础设施

一套功能完备的 RDS 云数据库服务需要基础设施的支持，例如，监控系统（指标/日志采集，告警，可视化），NTP，DNS 等各种基础性服务。

现在，我们通过定义一个特殊的分组 `infra`，来部署 [**`INFRA`**](/docs/infra/) 模块。为 Pigsty 添加基础设施支持。

{{< tabpane text=true persist=header >}}
{{% tab header="最简配置" %}}
```yaml
all:  # 只是简单的改了个分组名 nodes -> infra，并添加新的实例变量 infra_seq
  children: { infra: { hosts: { 10.10.10.10: { infra_seq: 1 } } } } 
  vars: 
    admin_ip: 10.10.10.10
    region: default
    node_repo_modules: node,pgsql,infra
```
{{% /tab %}}
{{% tab header="中国特色" %}}
```yaml
all:  # 只是简单的改了个分组名 nodes -> infra，并添加新的实例变量 infra_seq
  children: { infra: { hosts: { 10.10.10.10: { infra_seq: 1 } } } } 
  vars:
    admin_ip: 10.10.10.10
    region: china
    node_repo_modules: node,pgsql,infra
```
{{% /tab %}}
{{< /tabpane >}}


同时，我们还分配了一个 [**身份参数**](/docs/concept/iac/parameter#身份参数)：[**`infra_seq`**](/docs/infra/param/#infra_seq)，这是为了在多节点部署高可用 **INFRA** 模块时将不同的节点区分开来。

执行 `infra.yml` 剧本，将在 `10.10.10.10` 上安装 [**INFRA**](/docs/infra/) 和 [**NODE**](/docs/node/) 模块。

```bash title="~/pigsty"
./infra.yml   # 在 infra 分组上安装 INFRA 模块（连带安装 NODE 模块）
```

> 只要 IP 地址存在，NODE 模块会隐含定义。NODE 模块也是幂等的，即使重复执行一次，也没有什么副作用。

安装完成后，您将拥有一套完整的可观测性基础设施，以及节点监控功能，但 PostgreSQL 数据库服务尚未部署。

如果您的目的就是设置这一套监控系统（Grafana + Victoria），那么到此为止就大功告成了！[**`infra`**](/docs/conf/infra) 模板就是为此设计的。
Pigsty 中的一切都是 **模块化** 的：您可以只部署监控基础设施，而不部署数据库服务；
或者反过来 —— 在没有基础设施的情况下，运行高可用 PostgreSQL 集群 —— [**精简安装**](/docs/setup/slim)。

| ID | [NODE](/docs/node/) | [INFRA](/docs/infra/) | [**ETCD**](/docs/etcd/) | [PGSQL](/docs/pgsql/) | 说明       |
|:--:|:-------------------:|:---------------------:|:-----------------------:|:---------------------:|:---------|
| 1  |    `10.10.10.10`    |       `infra-1`       |            -            |           -           | 添加基础设施模块 | 
{.full-width}

--------

## 部署数据库集群

要提供 PostgreSQL 服务，您还需要额外安装 [**PGSQL**](/docs/pgsql/) 模块和它所依赖的 [**ETCD**](/docs/etcd/) 模块，这并不复杂，两行配置而已：

{{< tabpane text=true persist=header >}}
{{% tab header="最简配置" %}}
```yaml
all:
  children:
    infra:   { hosts: { 10.10.10.10: { infra_seq: 1 } } }
    etcd:    { hosts: { 10.10.10.10: { etcd_seq:  1 } } } # 新增 etcd 集群
    pg-meta: { hosts: { 10.10.10.10: { pg_seq: 1, pg_role: primary } }, vars: { pg_cluster: pg-meta } } # 新增 pg 集群
  vars: { admin_ip: 10.10.10.10, region: default, node_repo_modules: node,pgsql,infra }
```
{{% /tab %}}
{{% tab header="中国特色" %}}
```yaml
all:
  children:
    infra:   { hosts: { 10.10.10.10: { infra_seq: 1 } } }
    etcd:    { hosts: { 10.10.10.10: { etcd_seq:  1 } } } # 新增 etcd 集群
    pg-meta: { hosts: { 10.10.10.10: { pg_seq: 1, pg_role: primary } }, vars: { pg_cluster: pg-meta } } # 新增 pg 集群
  vars: { admin_ip: 10.10.10.10, region: china, node_repo_modules: node,pgsql,infra }
```
{{% /tab %}}
{{< /tabpane >}}


我们在这里添加了两个新的分组：`etcd` 与 `pg-meta`，分别定义了一个单节点的 etcd 集群和一个单节点的 PostgreSQL 集群。

您可以使用 `./deploy.yml` 重新部署所有内容，也可以使用以下命令进行增量部署：

```bash title="~/pigsty"
./etcd.yml  -l etcd      # 在 etcd 组上安装 ETCD 模块
./pgsql.yml -l pg-meta   # 在 pg-meta 组上安装 PGSQL 模块
```

[**PGSQL**](/docs/pgsql/) 模块依赖 [**ETCD**](/docs/etcd/) 进行高可用共识，因此请确保先安装 ETCD 模块。
执行完毕后，您就拥有一个可用的 PostgreSQL 服务了！

| ID | [NODE](/docs/node/) | [INFRA](/docs/infra/) | [**ETCD**](/docs/etcd/) | [PGSQL](/docs/pgsql/) | 说明                      |
|:--:|:-------------------:|:---------------------:|:-----------------------:|:---------------------:|:------------------------|
| 1  |    `10.10.10.10`    |       `infra-1`       |        `etcd-1`         |       `etcd-1`        | 添加 etcd 与 PostgreSQL 集群 |
{.full-width}

至此，我们用 [**`node.yml`**](/docs/node/playbook#nodeyml), [**`infra.yml`**](/docs/infra/playbook#infrayml), [**`etcd.yml`**](/docs/etcd/playbook#etcdyml) 和 [**`pgsql.yml`**](/docs/pgsql/playbook#pgsqlyml) 四个 [**剧本**](/docs/setup/playbook)，
在单机上部署了完整的四个核心功能模块。


--------

## 定义数据库与用户

您不仅可以定制在哪些节点上安装哪些模块，还可以定制 PostgreSQL 集群的内部细节，例如 [**数据库**](/docs/pgsql/config/db) 与 [**用户**](/docs/pgsql/config/user)。

```yaml title="~/pigsty/pigsty.yml"
all:
  children:
    # 隐藏其他分组与变量以简化展示
    pg-meta:
      hosts: { 10.10.10.10: { pg_seq: 1, pg_role: primary } }
      vars:
        pg_cluster: pg-meta
        pg_users:       # 定义数据库用户
          - { name: dbuser_meta ,password: DBUser.Meta ,pgbouncer: true ,roles: [dbrole_admin] ,comment: admin user  }
        pg_databases:   # 定义业务数据库
          - { name: meta ,baseline: cmdb.sql ,comment: pigsty meta database }
```

- [**`pg_users`**](/docs/pgsql/param/#pg_users)：这里定义一个名为 `dbuser_meta` 的新用户，密码为 `DBUser.Meta`
- [**`pg_databases`**](/docs/pgsql/param/#pg_databases)：定义一个名为 `meta` 的新数据库，包含 Pigsty [**CMDB**](/docs/concept/iac/cmdb) 模式（完全可选）。

Pigsty 提供了非常丰富的定制参数，覆盖了数据库与用户的方方面面。
如果您事先定义好了上面两个参数描述所需的数据库与用户，那么它们会在 [**`./pgsql.yml`**](/docs/pgsql/playbook#pgsqlyml) 剧本执行时被自动创建。
如果集群已经创建，您也可以进行增量变更，在现有集群上创建或修改 [**用户**](/docs/pgsql/admin/user) 与 [**数据库**](/docs/pgsql/admin/db)。


```bash title="~/pigsty"
bin/pgsql-user pg-meta dbuser_meta      # 确保 pg-meta 集群中有用户 dbuser_meta
bin/pgsql-db   pg-meta meta             # 确保 pg-meta 集群中有数据库 meta
```



--------

## 配置 PG 版本与扩展

您可以安装 [**不同大版本**](/docs/pgsql/config/kernel) 的 PostgreSQL，以及多达 [**440**](https://pgext.cloud/list) 种 [**扩展插件**](/docs/pgsql/ext)。让我们卸载当前默认的 PG 18，并安装 PG 17：

```bash
./pgsql-rm.yml -l pg-meta   # 移除旧的 pg-meta 集群（因为它是 PG 18）
```

我们可以通过定制参数，让集群默认安装并启用一些常用的扩展：`timescaledb`、`postgis` 和 `pgvector`：

- [**`pg_extensions`**](/docs/pgsql/param/#pg_extensions)：[**安装**](/docs/pgsql/ext/install) `timescaledb`、`postgis`、`pgvector` 扩展。
- [**`pg_libs`**](/docs/pgsql/param/#pg_libs)：[**配置加载**](/docs/pgsql/ext/config) `timescaledb`、`pg_stat_statements`、`auto_explain` 扩展动态库。
- [**`pg_databases`**](/docs/pgsql/param/#pg_databases)：为 `meta` 数据库 [**创建启用**](/docs/pgsql/ext/create) `vector`、`postgis`、`timescaledb` 扩展。

```yaml
all:
  children:
    infra:   { hosts: { 10.10.10.10: { infra_seq: 1 } } }
    etcd:    { hosts: { 10.10.10.10: { etcd_seq:  1 } } } # 新增 etcd 集群
    pg-meta:
      hosts: { 10.10.10.10: { pg_seq: 1, pg_role: primary } }
      vars:
        pg_cluster: pg-meta
        pg_version: 17   # 指定 PG 版本为 17
        pg_extensions: [ timescaledb, postgis, pgvector ]      # 安装这些扩展
        pg_lib: 'timescaledb,pg_stat_statements,auto_explain'  # 预加载这些扩展动态库
        pg_databases: { { name: meta ,baseline: cmdb.sql ,comment: pigsty meta database ,schemas: [pigsty] ,extensions: [vector, postgis, timescaledb ] } }
        pg_users: { { name: dbuser_meta ,password: DBUser.Meta ,pgbouncer: true ,roles: [dbrole_admin] ,comment: admin user } }
        
  vars:
    admin_ip: 10.10.10.10
    region: default
    node_repo_modules: node,pgsql,infra

```


```bash
./pgsql.yml -l pg-meta   # 安装 PG17 和扩展重新创建 pg-meta 集群
```



--------

## 添加更多节点

我们可以向部署中添加更多节点，将其纳入 Pigsty 的管理之中，部署监控，配置仓库，安装软件 …… 

```yaml
一次添加整个集群，或者逐个添加节点
bin/node-add pg-test

bin/node-add 10.10.10.11
bin/node-add 10.10.10.12
bin/node-add 10.10.10.13
```


--------

## 部署高可用PG集群

现在假设我们要在刚添加的三个新节点上，部署一套新的数据库集群 `pg-test`，采用三节点高可用架构，只需要：

```yaml
all:
  children:
    infra:   { hosts: { 10.10.10.10: { infra_seq: 1 } } }
    etcd:    { hosts: { 10.10.10.10: { etcd_seq: 1 } }, vars: { etcd_cluster: etcd } }
    pg-meta: { hosts: { 10.10.10.10: { pg_seq: 1, pg_role: primary } }, vars: { pg_cluster: pg-meta } }
    pg-test:
      hosts:
        10.10.10.11: { pg_seq: 1, pg_role: primary }
        10.10.10.12: { pg_seq: 2, pg_role: replica  }
        10.10.10.13: { pg_seq: 3, pg_role: replica  }
      vars: { pg_cluster: pg-test }
```


--------

## 部署 Redis 集群

Pigsty 提供了可选的 Redis 支持，可作为 PostgreSQL 前端的缓存服务。

```bash
bin/redis-add redis-ms
bin/redis-add redis-meta
bin/redis-add redis-test
```

Redis 高可用设置需要使用集群模式或哨兵模式，详情请参阅 [**Redis 配置**](/docs/redis/config/)。


--------

## 部署 MinIO 集群

Pigsty 提供了可选的开源对象存储，S3 替代 —— [**MinIO**](/docs/minio) 支持，可作为 PostgreSQL 的 [**备份存储仓库**](/docs/pgsql/backup/repository) 。

```bash
./minio.yml -l minio
```

严肃的生产环境 MinIO 部署通常需要至少 4 个节点，每个节点配备 4 块硬盘（4N/16D）。


--------

## 部署 Docker 模块

如果您想要使用容器运行一些 [**管理 PG 的工具**](/docs/app) 或者 [**使用 PostgreSQL 的软件**](/docs/app)，可以安装 [**`DOCKER`**](/docs/docker/) 模块。

```bash
./docker.yml -l infra
```

你可以使用预制的应用配置模板，一键拉起一些常见的软件工具，例如用于 PG 管理的 GUI 工具：  [**Pgadmin**](/docs/app/pgadmin/)：

```bash
./app.yml    -l infra -e app=pgadmin
```

甚至，您还可以用 Pigsty 自建 **企业级质量的** [**Supabase**](/docs/app/supabase/)，使用外面的高可用 PostgreSQL 集群作为底座，将无状态的部分运行在容器之中。

