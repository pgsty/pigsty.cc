---
title: 集群管理
weight: 10
description: 创建/销毁 PostgreSQL 集群，以及对现有集群进行扩容与缩容的标准操作指南。
icon: fa-solid fa-circle-up
module: [PGSQL]
categories: [任务]
---




----------------

## 创建集群

要创建一个新的Postgres集群，请首先在配置清单中定义，然后进行初始化：

```bash
bin/node-add <cls>    # 为集群 <cls> 初始化节点       # ./node.yml  -l <cls> 
bin/pgsql-add <cls>   # 初始化集群 <cls> 的pgsql实例  # ./pgsql.yml -l <cls>
```

> 请注意，PGSQL 模块需要在 Pigsty 纳管的节点上安装，请先使用 `bin/node-add` 纳管节点。

**示例：创建集群**



----------------

## 创建用户

要在现有的Postgres集群上创建一个新的业务用户，请将用户定义添加到 `all.children.<cls>.pg_users`，然后使用以下命令将其创建：

```bash
bin/pgsql-user <cls> <username>   # ./pgsql-user.yml -l <cls> -e username=<username>
```

<details><summary>示例：创建业务用户</summary>

[![asciicast](https://asciinema.org/a/568789.svg)](https://asciinema.org/a/568789)

</details>



----------------

## 创建数据库

要在现有的Postgres集群上创建一个新的数据库用户，请将数据库定义添加到 `all.children.<cls>.pg_databases`，然后按照以下方式创建数据库：

```bash
bin/pgsql-db <cls> <dbname>       # ./pgsql-db.yml -l <cls> -e dbname=<dbname>
```

注意：如果数据库指定了一个非默认的属主，该属主用户应当已存在，否则您必须先[创建用户](#创建用户)。

<details><summary>示例：创建业务数据库</summary>

[![asciicast](https://asciinema.org/a/568790.svg)](https://asciinema.org/a/568790)

</details>



----------------

## 重载服务

[服务](/docs/pgsql/service/)是 PostgreSQL 对外提供能力的访问点（PGURL可达），由主机节点上的 HAProxy 对外暴露。

当集群成员发生变化时使用此任务，例如：[添加](#添加实例)／[移除](#移除实例)副本，[主从切换](#主动切换)／故障转移 / 暴露新服务，或更新现有服务的配置（例如，LB权重）

要在整个代理集群，或特定实例上创建新服务或重新加载现有服务：

```bash
bin/pgsql-svc <cls>               # pgsql.yml -l <cls> -t pg_service -e pg_reload=true
bin/pgsql-svc <cls> [ip...]       # pgsql.yml -l ip... -t pg_service -e pg_reload=true
```

<details><summary>示例：重载PG服务以踢除一个实例</summary>

[![asciicast](https://asciinema.org/a/568815.svg)](https://asciinema.org/a/568815)

</details>




----------------

## 重载HBA

当您的 Postgres/Pgbouncer HBA 规则发生更改时，您 *可能* 需要重载 HBA 以应用更改。

如果您有任何特定于角色的 HBA 规则，或者在IP地址段中引用了集群成员的别名，那么当主从切换/集群扩缩容后也可能需要重载HBA。

要在整个集群或特定实例上重新加载 postgres 和 pgbouncer 的 HBA 规则：

```bash
bin/pgsql-hba <cls>               # pgsql.yml -l <cls> -t pg_hba,pg_reload,pgbouncer_hba,pgbouncer_reload -e pg_reload=true
bin/pgsql-hba <cls> [ip...]       # pgsql.yml -l ip... -t pg_hba,pg_reload,pgbouncer_hba,pgbouncer_reload -e pg_reload=true
```

<details><summary>示例：重载集群 HBA 规则</summary>

[![asciicast](https://asciinema.org/a/568794.svg)](https://asciinema.org/a/568794)

</details>



----------------

## 配置集群

要更改现有的 Postgres 集群配置，您需要在**管理节点**上使用**管理员用户**（安装Pigsty的用户，nopass ssh/sudo）发起控制命令：

另一种方式是在数据库集群中的任何节点上，使用 `dbsu` （默认为 postgres） ，也可以执行管理命令，但只能管理本集群。

```bash
pg edit-config <cls>              # interactive config a cluster with patronictl
```

更改 patroni 参数和 `postgresql.parameters`，根据提示保存并应用更改即可。


<details><summary>示例：非交互式方式配置集群</summary>

您可以跳过交互模式，并使用 `-p` 选项覆盖 postgres 参数，例如：

```bash
pg edit-config -p log_min_duration_statement=1000 pg-test
pg edit-config --force -p shared_preload_libraries='timescaledb, pg_cron, pg_stat_statements, auto_explain'
```

</details>


<details><summary>示例：使用 Patroni REST API 更改集群配置</summary>

您还可以使用 [Patroni REST API](https://patroni.readthedocs.io/en/latest/rest_api.html) 以非交互式方式更改配置，例如：

```bash
$ curl -s 10.10.10.11:8008/config | jq .  # get current config
$ curl -u 'postgres:Patroni.API' \
        -d '{"postgresql":{"parameters": {"log_min_duration_statement":200}}}' \
        -s -X PATCH http://10.10.10.11:8008/config | jq .
```

注意：Patroni 敏感API（例如重启等） 访问仅限于从基础设施/管理节点发起，并且有 HTTP 基本认证（用户名/密码）以及可选的 HTTPS 保护。

</details>


<details><summary>示例：使用 patronictl 配置集群</summary>

[![asciicast](https://asciinema.org/a/568799.svg)](https://asciinema.org/a/568799)

</details>



----------------

## 添加实例

若要将新从库添加到现有的 PostgreSQL 集群中，您需要将其定义添加到配置清单：`all.children.<cls>.hosts` 中，然后：

```bash
bin/node-add <ip>                 # 将节点 <ip> 纳入 Pigsty 管理                
bin/pgsql-add <cls> <ip>          # 初始化 <ip> ，作为集群 <cls> 的新从库
```

这将会把节点 `<ip>` 添加到 pigsty 并将其初始化为集群 `<cls>` 的一个副本。

集群服务将会[重新加载](#重载服务)以接纳新成员。

<details><summary>示例：为 pg-test 添加从库</summary>

[![asciicast](https://asciinema.org/a/566421.svg)](https://asciinema.org/a/566421)

例如，如果您想将 `pg-test-3 / 10.10.10.13` 添加到现有的集群 `pg-test`，您首先需要更新配置清单：

```bash
pg-test:
  hosts:
    10.10.10.11: { pg_seq: 1, pg_role: primary } # 已存在的成员
    10.10.10.12: { pg_seq: 2, pg_role: replica } # 已存在的成员
    10.10.10.13: { pg_seq: 3, pg_role: replica } # <--- 新成员
  vars: { pg_cluster: pg-test }
```

然后按如下方式应用更改：

```bash
bin/node-add          10.10.10.13   # 将节点添加到 pigsty
bin/pgsql-add pg-test 10.10.10.13   # 在 10.10.10.13 上为集群 pg-test 初始化新的副本
```

这与集群初始化相似，但只在单个实例上工作：

```bash
[ OK ] 初始化实例  10.10.10.11 到 pgsql 集群 'pg-test' 中:
[WARN]   提醒：先将节点添加到 pigsty 中，然后再安装模块 'pgsql'
[HINT]     $ bin/node-add  10.10.10.11  # 除 infra 节点外，先运行此命令
[WARN]   从集群初始化实例：
[ OK ]     $ ./pgsql.yml -l '10.10.10.11,&pg-test'
[WARN]   重新加载现有实例上的 pg_service：
[ OK ]     $ ./pgsql.yml -l 'pg-test,!10.10.10.11' -t pg_service
```

</details>




----------------

## 移除实例

若要从现有的 PostgreSQL 集群中移除副本：

```bash
bin/pgsql-rm <cls> <ip...>        # ./pgsql-rm.yml -l <ip>
```

这将从集群 `<cls>` 中移除实例 `<ip>`。 集群服务将会[重新加载](#重载服务)以从负载均衡器中踢除已移除的实例。

<details><summary>示例：从 pg-test 移除从库</summary>

[![asciicast](https://asciinema.org/a/566419.svg)](https://asciinema.org/a/566419)

例如，如果您想从现有的集群 `pg-test` 中移除 `pg-test-3 / 10.10.10.13`：

```bash
bin/pgsql-rm pg-test 10.10.10.13  # 从 pg-test 中移除 pgsql 实例 10.10.10.13
bin/node-rm  10.10.10.13          # 从 pigsty 中移除该节点（可选）
vi pigsty.yml                     # 从目录中移除实例定义
bin/pgsql-svc pg-test             # 刷新现有实例上的 pg_service，以从负载均衡器中踢除已移除的实例
```

```bash
[ OK ] 从 'pg-test' 移除 10.10.10.13 的 pgsql 实例：
[WARN]   从集群中移除实例：
[ OK ]     $ ./pgsql-rm.yml -l '10.10.10.13,&pg-test'
```

并从配置清单中移除实例定义：

```yaml
pg-test:
  hosts:
    10.10.10.11: { pg_seq: 1, pg_role: primary }
    10.10.10.12: { pg_seq: 2, pg_role: replica }
    10.10.10.13: { pg_seq: 3, pg_role: replica } # <--- 执行后移除此行
  vars: { pg_cluster: pg-test }
```

最后，您可以[重载PG服务](#重载服务)并从负载均衡器中踢除已移除的实例：

```bash
bin/pgsql-svc pg-test             # 重载 pg-test 上的服务
```

</details>



----------------

## 下线集群

要移除整个 Postgres 集群，只需运行：

```bash
bin/pgsql-rm <cls>                # ./pgsql-rm.yml -l <cls>
```

<details><summary>示例：移除集群</summary>

[![asciicast](https://asciinema.org/a/566418.svg)](https://asciinema.org/a/566418)

</details>

<details><summary>示例：强制移除集群</summary>

注意：如果为这个集群配置了[`pg_safeguard`](/docs/pgsql/param#pg_safeguard)（或全局设置为 `true`），`pgsql-rm.yml` 将中止，以避免意外移除集群。

您可以使用 playbook 命令行参数明确地覆盖它，以强制执行清除：

```bash
./pgsql-rm.yml -l pg-meta -e pg_safeguard=false    # 强制移除 pg 集群 pg-meta
```

</details>

