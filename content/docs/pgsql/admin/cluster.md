---
title: 管理 PostgreSQL 数据库集群
linkTitle: 集群管理
weight: 10
description: 创建/销毁 PostgreSQL 集群，以及对现有集群进行扩容，缩容，克隆集群。
icon: fa-solid fa-server
module: [PGSQL]
categories: [任务]
---


## 速查手册

| 操作                  | 快捷命令                          | 说明                 |
|:--------------------|:------------------------------|:-------------------|
| [**创建集群**](#创建集群)   | `bin/pgsql-add <cls>`         | 创建新的 PostgreSQL 集群 |
| [**扩容集群**](#扩容集群)   | `bin/pgsql-add <cls> <ip...>` | 为现有集群添加从库副本        |
| [**缩容集群**](#缩容集群)   | `bin/pgsql-rm <cls> <ip...>`  | 从集群中移除指定实例         |
| [**销毁集群**](#销毁集群)   | `bin/pgsql-rm <cls>`          | 销毁整个 PostgreSQL 集群 |
| [**刷新服务**](#刷新服务)   | `bin/pgsql-svc <cls> [ip...]` | 重载集群的负载均衡配置        |
| [**刷新HBA**](#刷新hba) | `bin/pgsql-hba <cls> [ip...]` | 重载集群的 HBA 访问规则     |
| [**克隆集群**](#克隆集群)   | -                             | 通过备份集群或 PITR 克隆    |
{.full-width}

其他管理任务，请参考：[**高可用管理**](/docs/pgsql/admin/patroni)，[**管理用户**](/docs/pgsql/admin/user/)，[**管理数据库**](/docs/pgsql/admin/db/)。


----------------

## 创建集群

要创建一个新的 PostgreSQL 集群，请首先在 [**配置清单**](/docs/concept/iac/inventory) 中 [**定义集群**](/docs/pgsql/config/cluster)，然后 [**纳管节点**](/docs/node/admin#添加节点)并进行初始化：

{{< tabpane text=true persist=header >}}
{{% tab header="脚本" %}}
```bash
bin/node-add  <cls>     # 添加分组 <cls> 下的节点
```
{{% /tab %}}
{{% tab header="剧本" %}}
```bash
./node.yml  -l <cls>    # 直接使用 Ansible 剧本添加分组 <cls> 下的节点
```
{{% /tab %}}
{{% tab header="示例" %}}
```bash
bin/pgsql-add pg-test   # 例子，添加 pg-test 分组下的节点，实际执行 ./node.yml -l pg-test
```
{{% /tab %}}
{{< /tabpane >}}

在被纳管的节点上，可以使用以下命令创建集群：（针对 **`<cls>`** 分组执行 [**`pgsql.yml`**](/docs/pgsql/playbook#pgsqlyml) 剧本）

{{< tabpane text=true persist=header >}}
{{% tab header="脚本" %}}
```bash
bin/pgsql-add <cls>     # 创建 PostgreSQL 集群 <cls>
```
{{% /tab %}}
{{% tab header="剧本" %}}
```bash
./pgsql.yml -l <cls>    # 直接使用 Ansible 剧本创建 PostgreSQL 集群 <cls>
```
{{% /tab %}}
{{% tab header="示例" %}}
```bash
bin/pgsql-add pg-test   # 例子，创建 pg-test 集群
```
{{% /tab %}}
{{< /tabpane >}}


**示例：创建三节点 PG 集群 `pg-test`**

{{< asciinema file="demo/pgsql.cast" markers="4:执行" speed="1.3" autoplay="true" loop="true" >}}

{{% alert title="针对已经存在的集群重新执行创建存在风险" color="warning" %}}
如果您在已经存在的集群上重新执行创建操作，Pigsty 不会移除已有的数据文件，但现有服务配置会被覆盖，集群会发生 **重启**！
此外，如果你在 [**数据库定义**](/docs/pgsql/config/db#baseline) 中指定了 `baseline` SQL ，它也会重新执行，如果里面包含删除/覆盖逻辑，可能会导致 **数据丢失**。
{{% /alert %}}







----------------

## 扩容集群

若要将新从库添加到 **现有的 PostgreSQL 集群** 中，您需要将 [**实例定义**](/docs/pgsql/config/cluster) 添加到 [**配置清单**](/docs/concept/iac/inventory)：`all.children.<cls>.hosts` 中。

```yaml
pg-test:
  hosts:
    10.10.10.11: { pg_seq: 1, pg_role: primary } # 已存在的成员
    10.10.10.12: { pg_seq: 2, pg_role: replica } # 已存在的成员
    10.10.10.13: { pg_seq: 3, pg_role: replica } # <--- 新成员
  vars: { pg_cluster: pg-test }
```

扩容集群的操作与 [**创建集群**](#创建集群) 非常类似，首先需要将扩容的节点纳入 Pigsty 管理：[**添加节点**](/docs/node/admin#添加节点)：

{{< tabpane text=true persist=header >}}
{{% tab header="脚本" %}}
```bash
bin/node-add <ip>       # 添加 IP 地址为 <ip> 的节点
```
{{% /tab %}}
{{% tab header="剧本" %}}
```bash
./node.yml -l <ip>      # 直接使用 Ansible 剧本添加 <ip> 对应的节点
```
{{% /tab %}}
{{% tab header="示例" %}}
```bash
bin/node-add 10.10.10.13    # 例子，添加 IP 为 10.10.10.13 的节点，实际执行 ./node.yml -l 10.10.10.13
```
{{% /tab %}}
{{< /tabpane >}}

然后在新节点上运行以下命令以扩容集群（针对新节点安装 [**PGSQL 模块**](/docs/pgsql)，使用与现有集群相同的 [**`pg_cluster`**](/docs/pgsql/param#pg_cluster)）

{{< tabpane text=true persist=header >}}
{{% tab header="脚本" %}}
```bash
bin/pgsql-add <cls> <ip>  # 添加 IP 地址为 <ip> 的节点
```
{{% /tab %}}
{{% tab header="剧本" %}}
```bash
./pgsql.yml -l <ip>       # 核心逻辑：使用 Ansible 剧本在 <ip> 节点上安装 PGSQL 模块
```
{{% /tab %}}
{{% tab header="示例" %}}
```bash
bin/pgsql-add pg-test 10.10.10.13   # 示例，为 pg-test 集群扩容 IP 为 10.10.10.13 的节点
```
{{% /tab %}}
{{< /tabpane >}}

扩容完成后，您应当 [**刷新服务**](/docs/pgsql/admin/service#重载服务) 以将新成员添加至负载均衡器中以实际承载流量。

**示例：为两节点集群 `pg-test` 扩容一个新从库 `10.10.10.13`**

{{< asciinema file="demo/pgsql-append.cast" markers="" speed="1.2" autoplay="true" loop="true" >}}






----------------

## 缩容集群

若要从 **现有的 PostgreSQL 集群** 中移除副本，您需要从 [**配置清单**](/docs/concept/iac/inventory) 的 `all.children.<cls>.hosts` 中移除对应的 [**实例定义**](/docs/pgsql/config/cluster)。

缩容集群首先需要卸载目标节点上的 PGSQL 模块（针对 **`<ip>`** 执行 [**`pgsql-rm.yml`**](/docs/pgsql/playbook#pgsql-rmyml) 剧本）：

{{< tabpane text=true persist=header >}}
{{% tab header="脚本" %}}
```bash
bin/pgsql-rm <cls> <ip>   # 从集群 <cls> 中移除 <ip> 节点上的 PostgreSQL 实例
```
{{% /tab %}}
{{% tab header="剧本" %}}
```bash
./pgsql-rm.yml -l <ip>    # 直接使用 Ansible 剧本移除 <ip> 节点上的 PostgreSQL 实例
```
{{% /tab %}}
{{% tab header="示例" %}}
```bash
bin/pgsql-rm pg-test 10.10.10.13  # 例子，从 pg-test 集群移除 10.10.10.13 节点
```
{{% /tab %}}
{{< /tabpane >}}

移除 PGSQL 模块后，您可以选择将节点从 Pigsty 管理中移除：[**移除节点**](/docs/node/admin#移除节点)（可选）：

{{< tabpane text=true persist=header >}}
{{% tab header="脚本" %}}
```bash
bin/node-rm <ip>          # 从 Pigsty 管理中移除 <ip> 节点
```
{{% /tab %}}
{{% tab header="剧本" %}}
```bash
./node-rm.yml -l <ip>     # 直接使用 Ansible 剧本从 Pigsty 管理中移除 <ip> 节点
```
{{% /tab %}}
{{% tab header="示例" %}}
```bash
bin/node-rm 10.10.10.13   # 例子，从 Pigsty 管理中移除 10.10.10.13 节点
```
{{% /tab %}}
{{< /tabpane >}}

缩容完成后，您应当从 [**配置清单**](/docs/concept/iac/inventory) 中移除该实例的定义，然后 [**刷新服务**](/docs/pgsql/admin/service#重载服务) 以将已它从负载均衡器中踢除。

```yaml
pg-test:
  hosts:
    10.10.10.11: { pg_seq: 1, pg_role: primary }
    10.10.10.12: { pg_seq: 2, pg_role: replica }
    10.10.10.13: { pg_seq: 3, pg_role: replica } # <--- 执行后移除此行
  vars: { pg_cluster: pg-test }
```

**示例：从三节点集群 `pg-test` 中缩容一个从库 `10.10.10.13`**

{{< asciinema file="demo/pgsql-shrink.cast" markers="" speed="1.2" autoplay="true" loop="true" >}}







----------------

## 销毁集群

销毁集群需要在集群的所有节点上卸载 PGSQL 模块（针对 **`<cls>`** 执行 [**`pgsql-rm.yml`**](/docs/pgsql/playbook#pgsql-rmyml) 剧本）：

{{< tabpane text=true persist=header >}}
{{% tab header="脚本" %}}
```bash
bin/pgsql-rm <cls>        # 销毁整个 PostgreSQL 集群 <cls>
```
{{% /tab %}}
{{% tab header="剧本" %}}
```bash
./pgsql-rm.yml -l <cls>   # 直接使用 Ansible 剧本销毁整个 PostgreSQL 集群 <cls>
```
{{% /tab %}}
{{% tab header="示例" %}}
```bash
bin/pgsql-rm pg-test      # 例子，销毁 pg-test 集群
```
{{% /tab %}}
{{< /tabpane >}}

销毁 PGSQL 模块后，您可以选择将节点一并从 Pigsty 管理中移除：[**移除节点**](/docs/node/admin#移除节点)（可选，如果还有其他服务可以保留）：

{{< tabpane text=true persist=header >}}
{{% tab header="脚本" %}}
```bash
bin/node-rm <cls>         # 从 Pigsty 管理中移除 <cls> 分组下的所有节点
```
{{% /tab %}}
{{% tab header="剧本" %}}
```bash
./node-rm.yml -l <cls>    # 直接使用 Ansible 剧本从 Pigsty 管理中移除 <cls> 分组下的所有节点
```
{{% /tab %}}
{{% tab header="示例" %}}
```bash
bin/node-rm pg-test       # 例子，从 Pigsty 管理中移除 pg-test 分组下的所有节点
```
{{% /tab %}}
{{< /tabpane >}}

销毁结束后，建议及时从 [**配置清单**](/docs/concept/iac/inventory) 中移除整个 [**集群定义**](/docs/pgsql/config/cluster)。

```yaml
pg-test: # 清理这个集群定义分组
  hosts:
    10.10.10.11: { pg_seq: 1, pg_role: primary }
    10.10.10.12: { pg_seq: 2, pg_role: replica }
    10.10.10.13: { pg_seq: 3, pg_role: replica }
  vars: { pg_cluster: pg-test }
```


**示例：销毁三节点 PG 集群 `pg-test`**

{{< asciinema file="demo/pgsql-rm.cast" markers="" speed="1.2" autoplay="true" loop="true" >}}

注意：如果为这个集群配置了 [**`pg_safeguard`**](/docs/pgsql/param#pg_safeguard)（或全局设置为 `true`），`pgsql-rm.yml` 将中止执行，以避免意外销毁集群。
您可以使用剧本命令行参数明确地覆盖它，以强制执行销毁。
此外默认情况下，集群的备份仓库将同集群一并删除。如果你希望保留备份（例如在使用集中式备份仓库时），可以设置 [**`pg_rm_backup=false`**](/docs/pgsql/param#pg_rm_backup) 参数：


```bash
./pgsql-rm.yml -l pg-meta -e pg_safeguard=false    # 强制销毁受保护的 pg 集群 pg-meta
./pgsql-rm.yml -l pg-meta -e pg_rm_backup=false    # 在销毁集群过程中保留其备份仓库
```








----------------

## 刷新服务

PostgreSQL 集群通过主机节点上的 [**HAProxy**](/docs/concept/arch/pgsql#haproxy) 对外提供 [**服务**](/docs/pgsql/service/)。
当服务定义变化，实例权重变化，或者集群成员发生变化时（例如，集群 [**扩容**](#扩容集群) / [**缩容**](#缩容集群)，主从切换／故障转移），您需要择机刷新服务以更新负载均衡器的配置。

要在整个集群或特定实例上刷新服务配置（针对 **`<cls>`** 或 **`<ip>`** 执行 [**`pgsql.yml`**](/docs/pgsql/playbook#pgsqlyml) 的 `pg_service` 子任务）：

{{< tabpane text=true persist=header >}}
{{% tab header="脚本" %}}
```bash
bin/pgsql-svc <cls>           # 刷新整个集群 <cls> 的服务配置
bin/pgsql-svc <cls> <ip...>   # 刷新集群 <cls> 中指定实例的服务配置
```
{{% /tab %}}
{{% tab header="剧本" %}}
```bash
./pgsql.yml -l <cls> -t pg_service -e pg_reload=true        # 刷新整个集群的服务配置
./pgsql.yml -l <ip>  -t pg_service -e pg_reload=true        # 刷新指定实例的服务配置
```
{{% /tab %}}
{{% tab header="示例" %}}
```bash
bin/pgsql-svc pg-test                 # 例子，刷新 pg-test 集群的服务配置
bin/pgsql-svc pg-test 10.10.10.13     # 例子，刷新 pg-test 集群中 10.10.10.13 实例的服务配置
```
{{% /tab %}}
{{< /tabpane >}}

> 备注：如果您使用集中式的专用负载均衡集群（[**`pg_service_provider`**](/docs/pgsql/param#pg_service_provider)），那么只有刷新集群主库时才会更新负载均衡配置。


**示例：刷新集群 `pg-test` 的服务配置**

{{< asciinema file="demo/pgsql-svc.cast" markers="" speed="1.2" autoplay="true" loop="true" >}}

<details><summary>示例：重载PG服务以踢除一个实例</summary>

[![asciicast](https://asciinema.org/a/568815.svg)](https://asciinema.org/a/568815)

</details>




----------------

## 刷新HBA

当您修改了 HBA 相关配置后，需要刷新 HBA 规则以应用更改。（[**`pg_hba_rules`**](/docs/pgsql/param#pg_hba_rules) / [**`pgb_hba_rules`**](/docs/pgsql/param#pgb_hba_rules)）
如果您有任何特定于角色的 HBA 规则，或者在 IP 地址段中引用了集群成员的别名，那么当主从切换/集群扩缩容后也可能需要刷新 HBA。

要在整个集群或特定实例上刷新 PG 和 Pgbouncer 的 HBA 规则（针对 **`<cls>`** 或 **`<ip>`** 执行 [**`pgsql.yml`**](/docs/pgsql/playbook#pgsqlyml) 的 HBA 相关子任务）：

{{< tabpane text=true persist=header >}}
{{% tab header="脚本" %}}
```bash
bin/pgsql-hba <cls>           # 刷新整个集群 <cls> 的 HBA 规则
bin/pgsql-hba <cls> <ip...>   # 刷新集群 <cls> 中指定实例的 HBA 规则
```
{{% /tab %}}
{{% tab header="剧本" %}}
```bash
./pgsql.yml -l <cls> -t pg_hba,pg_reload,pgbouncer_hba,pgbouncer_reload -e pg_reload=true   # 刷新整个集群
./pgsql.yml -l <ip>  -t pg_hba,pg_reload,pgbouncer_hba,pgbouncer_reload -e pg_reload=true   # 刷新指定实例
```
{{% /tab %}}
{{% tab header="示例" %}}
```bash
bin/pgsql-hba pg-test                 # 例子，刷新 pg-test 集群的 HBA 规则
bin/pgsql-hba pg-test 10.10.10.13     # 例子，刷新 pg-test 集群中 10.10.10.13 实例的 HBA 规则
```
{{% /tab %}}
{{< /tabpane >}}


**示例：刷新集群 `pg-test` 的 HBA 规则**

{{< asciinema file="demo/pgsql-hba.cast" markers="" speed="1.2" autoplay="true" loop="true" >}}


----------------

## 配置集群

PostgreSQL 的配置参数由 Patroni 管理，初始参数由 [**Patroni 配置模板**](/docs/pgsql/template/) 指定。
集群初始化之后，配置存储在 Etcd 中，并由 Patroni 进行动态管理，并在集群中同步与共享。
Patroni 本身的 [**配置参数**](/docs/pgsql/admin/patroni#修改配置) 大部分可以通过 `patronictl`命令行工具修改。
其余参数（例如，etcd DCS 配置，日志/RestAPI 等配置）则可以通过下面的子任务进行更新。例如，当 [**etcd**](/docs/etcd) 集群成员发生变动时，你可以刷新 Patroni 配置：

```bash
./pgsql.yml -l pg-test -t pg_conf                   # 更新 Patroni 配置文件
ansible pg-test -b -a 'systemctl reload patroni'    # 重载 Patroni 服务
```

您可以在不同层次上覆盖 Patroni 集中管理的默认，例如单独 [**为实例指定配置参数**](/docs/pgsql/param#pg_parameters)；
单独为 [**为用户指定配置参数**](/docs/pgsql/admin/user)，或者 [**为数据库指定配置参数**](/docs/pgsql/admin/db)。



----------------

## 克隆集群

有两种克隆集群的方式：使用 [**备份集群**](/docs/pgsql/config/cluster#备份集群) 功能，或者使用 [**时间点恢复**](/docs/pgsql/backup/restore#快速上手) 功能。
前者配置简单，无需依赖，但只能克隆指定集群的最新状态；后者依赖集中式的 [**备份仓库**](/docs/pgsql/backup/repository)（例如 MinIO），但可以克隆到备份保留期内的任意时间点。

| 方式   | 优点        | 缺点        | 适用场景       |
|:-----|:----------|:----------|:-----------|
| 备份集群 | 配置简单，无需依赖 | 只能克隆最新状态  | 灾备，读写分离，迁移 |
| PITR | 可恢复到任意时间点 | 依赖集中式备份仓库 | 误操作恢复，数据审计 |


### 使用备份集群克隆

备份集群（Standby Cluster）通过流复制从上游集群持续同步数据，是克隆集群最简单的方式。
只需在新集群主库上指定 [**`pg_upstream`**](/docs/pgsql/param#pg_upstream) 参数，即可自动从上游集群拉取数据。

```yaml
# pg-test 是原始集群
pg-test:
  hosts:
    10.10.10.11: { pg_seq: 1, pg_role: primary }
  vars: { pg_cluster: pg-test }

# pg-test2 是 pg-test 的备份集群（克隆）
pg-test2:
  hosts:
    10.10.10.12: { pg_seq: 1, pg_role: primary, pg_upstream: 10.10.10.11 }  # 指定上游
    10.10.10.13: { pg_seq: 2, pg_role: replica }
  vars: { pg_cluster: pg-test2 }
```

使用以下命令创建备份集群：

{{< tabpane text=true persist=header >}}
{{% tab header="脚本" %}}
```bash
bin/pgsql-add pg-test2    # 创建备份集群，自动从上游 pg-test 克隆数据
```
{{% /tab %}}
{{% tab header="剧本" %}}
```bash
./pgsql.yml -l pg-test2   # 直接使用 Ansible 剧本创建备份集群
```
{{% /tab %}}
{{< /tabpane >}}

备份集群会持续追随上游集群，保持数据同步。您可以随时将其 **提升** 为独立集群：

<details><summary>示例：提升备份集群为独立集群</summary>

通过 [**配置集群**](#配置集群) 擦除 `standby_cluster` 配置段，即可将备份集群提升为独立集群：

```bash
$ pg edit-config pg-test2
-standby_cluster:
-  create_replica_methods:
-  - basebackup
-  host: 10.10.10.11
-  port: 5432

Apply these changes? [y/N]: y
```

提升后，`pg-test2` 将成为可以独立承载写入请求的独立集群，与原集群 `pg-test` 分叉。

</details>

<details><summary>示例：更改复制上游</summary>

如果上游集群发生主从切换，您可以通过 [**配置集群**](#配置集群) 更改备份集群的复制上游：

```bash
$ pg edit-config pg-test2

 standby_cluster:
   create_replica_methods:
   - basebackup
-  host: 10.10.10.11     # <--- 旧的上游
+  host: 10.10.10.14     # <--- 新的上游
   port: 5432

Apply these changes? [y/N]: y
```

</details>


### 使用 PITR 克隆

[**时间点恢复**](/docs/pgsql/backup/restore)（PITR）允许您将集群恢复到备份保留期内的任意时间点。
此方式依赖集中式的 [**备份仓库**](/docs/pgsql/backup/repository)（如 MinIO/S3），但功能更加强大。

要使用 PITR 克隆集群，在配置中添加 [**`pg_pitr`**](/docs/pgsql/param#pg_pitr) 参数指定恢复目标：

```yaml
# 从 pg-meta 集群的备份克隆一个新集群 pg-meta2
pg-meta2:
  hosts: { 10.10.10.12: { pg_seq: 1, pg_role: primary } }
  vars:
    pg_cluster: pg-meta2
    pg_pitr:
      cluster: pg-meta                    # 从 pg-meta 的备份恢复
      time: '2025-01-10 10:00:00+00'      # 恢复到指定时间点
```

使用 `pgsql-pitr.yml` 剧本执行克隆：

{{< tabpane text=true persist=header >}}
{{% tab header="剧本" %}}
```bash
./pgsql-pitr.yml -l pg-meta2    # 从 pg-meta 备份克隆 pg-meta2
```
{{% /tab %}}
{{% tab header="命令行" %}}
```bash
# 也可以通过命令行参数指定 PITR 选项
./pgsql-pitr.yml -l pg-meta2 -e '{"pg_pitr": {"cluster": "pg-meta", "time": "2025-01-10 10:00:00+00"}}'
```
{{% /tab %}}
{{< /tabpane >}}

PITR 支持多种恢复目标类型：

| 目标类型 | 参数示例 | 说明 |
|:---------|:---------|:-----|
| 时间点 | `time: "2025-01-10 10:00:00+00"` | 恢复到指定时间戳 |
| 事务ID | `xid: "250000"` | 恢复到指定事务之前/之后 |
| 恢复点 | `name: "before_migration"` | 恢复到命名恢复点 |
| LSN | `lsn: "0/4001C80"` | 恢复到指定 WAL 位置 |
| 最新 | `type: "latest"` | 恢复到 WAL 归档末尾 |

{{% alert title="PITR 恢复后处理" color="info" %}}
恢复后的集群会**禁用** `archive_mode`，以防止意外的 WAL 写入覆盖归档。
如果恢复后的数据库状态正常，您应当启用归档并执行新的全量备份：

```bash
psql -c 'ALTER SYSTEM RESET archive_mode; SELECT pg_reload_conf();'
pg-backup full    # 执行新的全量备份
```
{{% /alert %}}

更多 PITR 的详细用法，请参考 [**恢复操作**](/docs/pgsql/backup/restore) 文档。
