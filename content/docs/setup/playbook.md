---
title: 使用 Ansible 剧本完成部署
linkTitle: 剧本执行
weight: 275
description: 使用 Ansible 剧本部署与管理 Pigsty 集群
icon: fa-solid fa-scroll
module: [PIGSTY]
categories: [教程]
---


Pigsty 使用 [**Ansible**](https://docs.ansible.com/) 对集群进行管理，这是在 SRE 群体中非常流行的大规模/批量化/自动化运维工具。

Ansible 可以使用 **声明式** 的方式对服务器进行配置管理，所有模块的部署都是通过一系列幂等的 [**Ansible 剧本**](/docs/ref/playbook) 实现的。

例如，在单机部署时，您会用到 [**`deploy.yml`**](#部署剧本) 剧本。Pigsty 还有更多 [**内置剧本**](/docs/ref/playbook)，您可以根据需要选择使用。

了解 Ansible 基础知识有助于更好的使用 Pigsty，但这 **并非必须**，特别是在单机部署时。


-------

## 部署剧本

Pigsty 提供了一个 “一条龙” 部署剧本 **`deploy.yml`**，一次性在当前环境上安装所有模块（如果在配置中定义）：

| Playbook    | 命令            | 分组         | `infra` | `[nodes]` | `etcd` | `minio` | `[pgsql]` |
|-------------|---------------|------------|:-------:|:---------:|:------:|:-------:|:---------:|
| `infra.yml` | `./infra.yml` | `-l infra` |    ✓    |     ✓     |        |         |           |
| `node.yml`  | `./node.yml`  |            |         |     ✓     |        |         |           |
| `etcd.yml`  | `./etcd.yml`  | `-l etcd`  |         |           |   ✓    |         |           |
| `minio.yml` | `./minio.yml` | `-l minio` |         |           |        |    ✓    |           |
| `pgsql.yml` | `./pgsql.yml` |            |         |           |        |         |     ✓     |
{.full-width}

这是最简单的部署方式，您也可以参考 [**定制指南**](/docs/setup/config/) 里的说明，一步一步来增量式地完成所有模块与节点的部署。


------

## 安装 Ansible

使用 [**Pigsty 安装脚本**](/docs/setup/install#安装) ，或离线安装的 [**`bootstrap`**](/docs/setup/offline#bootstrap) 阶段，Pigsty 会自动为您安装 `ansible` 及其依赖。

如果您想手动安装 Ansible，可以参考以下说明，支持的 Ansible 最低版本为 2.9


{{< tabpane text=true persist=disabled >}}
{{% tab header="Debian / Ubuntu" %}}
```bash
sudo apt install -y ansible python3-jmespath
```
{{% /tab %}}
{{% tab header="EL" %}}
```bash
sudo dnf install -y ansible python-jmespath         # EL 10
sudo dnf install -y ansible python3.12-jmespath     # EL 9/8
```
{{% /tab %}}
{{% tab header="MacOS" %}}
```bash
brew install ansible
pip3 install jmespath
```
{{% /tab %}}
{{< /tabpane >}}


{{% alert title="修改默认密码！" color="warning" %}}
请注意，目前 EL10 EPEL 仓库尚未提供完整的 Ansible 包，[**Pigsty PGSQL**](/docs/repo/pgsql) EL10 仓库中补充了这个包。
{{% /alert %}}


Ansible 在 macOS 上也可用。您可以使用 [**Homebrew**](https://brew.sh/) 在 Mac 上安装 Ansible，
并将其用作管理节点来管理远程云服务器。如果您在云 VPS 上部署单节点 Pigsty 这很方便，但不建议在生产环境中使用。


--------

## 执行剧本

Ansible 剧本（Playbook）是包含要执行的一系列任务定义的可执行 YAML 文件。
执行剧本需要您的环境变量 `PATH` 中有 `ansible-playbook` 可执行文件。
运行 `./node.yml` 剧本本质上是执行 `ansible-playbook node.yml` 命令。

您可以使用一些参数来精细控制剧本的执行，其中以下 **4 个参数** 需要您了解，以便有效使用 Ansible：

|       目的        | 参数                        | 描述                     |
|:---------------:|---------------------------|------------------------|
| [**对象**](#限制主机) | `-l\|--limit <pattern>`   | 限制在特定 分组 / 主机 / 模式 上执行 |
| [**任务**](#限制任务) | `-t\|--tags <tags>`       | 只运行具有特定标签的任务           |
| [**参数**](#额外变量) | `-e\|--extra-vars <vars>` | 额外的命令行参数               |
| [**配置**](#指定清单) | `-i\|--inventory <path>`  | 使用特定的清单文件              |
{.full-width}

```bash
./node.yml                         # 在所有主机上运行 node 剧本
./pgsql.yml -l pg-test             # 在 pg-test 集群上运行 pgsql 剧本
./infra.yml -t repo_build          # 运行 infra.yml 的子任务 repo_build
./pgsql-rm.yml -e pg_rm_pkg=false  # 删除 pgsql，但保留软件包（不卸载软件）
./infra.yml -i conf/mynginx.yml    # 使用另外一个位置的配置文件
```


----------------

## 限制主机

剧本的 **执行目标** 可以通过 `-l|--limit <selector>` 限制。
当尝试在特定主机/节点或组/集群上运行剧本时，这很方便。
以下是主机限制的一些示例：

```bash
./pgsql.yml                              # 在所有主机上运行（危险！）
./pgsql.yml -l pg-test                   # 在 pg-test 集群上运行
./pgsql.yml -l 10.10.10.10               # 在单个主机 10.10.10.10 上运行
./pgsql.yml -l pg-*                      # 在匹配 glob 模式 `pg-*` 的主机/组上运行
./pgsql.yml -l '10.10.10.11,&pg-test'    # 在 pg-test 组的 10.10.10.11 上运行
./pgsql-rm.yml -l 'pg-test,!10.10.10.11' # 在 pg-test 上运行，除了 10.10.10.11
```

查看 Ansible 文档中的所有详细信息：[Patterns: targeting hosts and groups](https://docs.ansible.com/ansible/latest/inventory_guide/intro_patterns.html)

{{% alert title="谨慎运行没有主机限制的剧本！" color="warning" %}}
在大多数时候，缺少这个值可能会有危险，因为大多数剧本将在 `all` 主机上执行。**请谨慎使用**。
{{% /alert %}}



----------------

## 限制任务

**执行任务** 可以通过 `-t|--tags <tags>` 控制。
如果指定，将只执行具有给定标签的任务，而不是整个剧本。

```bash
./infra.yml -t repo          # 创建仓库
./node.yml  -t node_pkg      # 安装节点包
./pgsql.yml -t pg_install    # 安装 PG 包和扩展
./etcd.yml  -t etcd_purge    # 销毁 ETCD 集群
./minio.yml -t minio_alias   # 写入 MinIO CLI 配置
```

要运行多个任务，指定多个标签并用逗号分隔 `-t tag1,tag2`：

```bash
./node.yml  -t node_repo,node_pkg   # 添加仓库，然后安装包
./pgsql.yml -t pg_hba,pg_reload     # 配置，然后重新加载 pg hba 规则
```



----------------

## 额外变量

您可以使用 CLI 参数在运行时覆盖配置参数，它具有 [**最高优先级**](https://docs.ansible.com/ansible/latest/playbook_guide/playbooks_variables.html#understanding-variable-precedence)。

额外的命令行参数可以通过 `-e|--extra-vars KEY=VALUE` 传递，可以多次使用：

```bash
# 使用另一个管理员用户创建管理员
./node.yml -e ansible_user=admin -k -K -t node_admin

# 初始化一个特定的 Redis 实例：10.10.10.11:6379
./redis.yml -l 10.10.10.10 -e redis_port=6379 -t redis

# 删除 PostgreSQL，但保留软件包和数据
./pgsql-rm.yml -e pg_rm_pkg=false -e pg_rm_data=false
```

对于复杂参数，可以使用 JSON 字符串，一次传递多个复杂参数。

```bash
# 添加仓库并安装包
./node.yml -t node_install -e '{"node_repo_modules":"infra","node_packages":["duckdb"]}'
```



----------------

## 指定清单

默认配置文件是 Pigsty 主目录中的 `pigsty.yml`。
您可以使用 `-i <path>` 参数指定不同的 [**配置清单**](/docs/concept/iac/inventory) 文件路径。

```bash
./pgsql.yml -i conf/rich.yml            # 根据 rich 配置初始化一个下载了所有扩展的单节点
./pgsql.yml -i conf/ha/full.yml         # 根据 full 配置初始化一个 4 节点集群
./pgsql.yml -i conf/app/supa.yml        # 根据 supa.yml 配置初始化一个 1 节点 Supabase 部署
```

{{% alert title="更改默认清单文件" color="info" %}}
要永久更改 **默认** 配置文件，请修改 [`ansible.cfg`](https://github.com/pgsty/pigsty/blob/main/ansible.cfg#L6) 中的 `inventory` 参数。
{{% /alert %}}



----------------

## 便捷脚本

Pigsty 提供了一系列便捷脚本来简化常见操作，这些脚本位于 `bin/` 目录下：

```bash
bin/node-add   <cls>            # 将节点纳入 Pigsty 管理：./node.yml -l <cls>
bin/node-rm    <cls>            # 从 Pigsty 移除节点：./node-rm.yml -l <cls>
bin/pgsql-add  <cls>            # 初始化 PG 集群：./pgsql.yml -l <cls>
bin/pgsql-rm   <cls>            # 移除 PG 集群：./pgsql-rm.yml -l <cls>
bin/pgsql-user <cls> <username> # 添加业务用户：./pgsql-user.yml -l <cls> -e username=<user>
bin/pgsql-db   <cls> <dbname>   # 添加业务数据库：./pgsql-db.yml -l <cls> -e dbname=<db>
bin/redis-add  <cls>            # 初始化 Redis 集群：./redis.yml -l <cls>
bin/redis-rm   <cls>            # 移除 Redis 集群：./redis-rm.yml -l <cls>
```

这些脚本是对 Ansible 剧本的简单封装，让您可以更方便地执行常见操作。



----------------

## 剧本列表

以下是 Pigsty 中的 [**内置剧本**](/docs/ref/playbook)，您也轻松添加自己的剧本，或者按需定制修改剧本的实现逻辑。

|                  模块                  | Playbook                                                                                   | 功能                            |
|:------------------------------------:|--------------------------------------------------------------------------------------------|-------------------------------|
|  [**INFRA**](/docs/infra/playbook/)  | [**`deploy.yml`**](https://github.com/pgsty/pigsty/blob/main/deploy.yml)                   | 在当前节点上一键部署 Pigsty             |
|  [**INFRA**](/docs/infra/playbook/)  | [**`infra.yml`**](https://github.com/pgsty/pigsty/blob/main/infra.yml)                     | 在基础设施节点上初始化 Pigsty 基础设施       |
|  [**INFRA**](/docs/infra/playbook/)  | [**`infra-rm.yml`**](https://github.com/pgsty/pigsty/blob/main/infra-rm.yml)               | 从基础设施节点移除基础设施组件               |
|  [**INFRA**](/docs/infra/playbook/)  | [**`cache.yml`**](https://github.com/pgsty/pigsty/blob/main/cache.yml)                     | 从目标节点制作离线安装包                  |
|  [**INFRA**](/docs/infra/playbook/)  | [**`cert.yml`**](https://github.com/pgsty/pigsty/blob/main/cert.yml)                       | 使用 Pigsty 自签名 CA 颁发证书         |
|   [**NODE**](/docs/node/playbook/)   | [**`node.yml`**](https://github.com/pgsty/pigsty/blob/main/node.yml)                       | 初始化节点，将节点调整到所需状态              |
|   [**NODE**](/docs/node/playbook/)   | [**`node-rm.yml`**](https://github.com/pgsty/pigsty/blob/main/node-rm.yml)                 | 从 Pigsty 移除节点                 |
|  [**PGSQL**](/docs/pgsql/playbook/)  | [**`pgsql.yml`**](https://github.com/pgsty/pigsty/blob/main/pgsql.yml)                     | 初始化 HA PostgreSQL 集群，或添加新副本   |
|  [**PGSQL**](/docs/pgsql/playbook/)  | [**`pgsql-rm.yml`**](https://github.com/pgsty/pigsty/blob/main/pgsql-rm.yml)               | 移除 PostgreSQL 集群，或移除副本        |
|  [**PGSQL**](/docs/pgsql/playbook/)  | [**`pgsql-db.yml`**](https://github.com/pgsty/pigsty/blob/main/pgsql-db.yml)               | 向现有 PostgreSQL 集群添加新业务数据库     |
|  [**PGSQL**](/docs/pgsql/playbook/)  | [**`pgsql-user.yml`**](https://github.com/pgsty/pigsty/blob/main/pgsql-user.yml)           | 向现有 PostgreSQL 集群添加新业务用户      |
|  [**PGSQL**](/docs/pgsql/playbook/)  | [**`pgsql-pitr.yml`**](https://github.com/pgsty/pigsty/blob/main/pgsql-pitr.yml)           | 在现有 PostgreSQL 集群上执行时间点恢复     |
|  [**PGSQL**](/docs/pgsql/playbook/)  | [**`pgsql-monitor.yml`**](https://github.com/pgsty/pigsty/blob/main/pgsql-monitor.yml)     | 使用本地导出器监控远程 PostgreSQL 实例     |
|  [**PGSQL**](/docs/pgsql/playbook/)  | [**`pgsql-migration.yml`**](https://github.com/pgsty/pigsty/blob/main/pgsql-migration.yml) | 为现有 PostgreSQL 生成迁移手册和脚本      |
|  [**PGSQL**](/docs/pgsql/playbook/)  | [**`slim.yml`**](https://github.com/pgsty/pigsty/blob/main/slim.yml)                       | 安装最小组件的 Pigsty                |
|  [**REDIS**](/docs/redis/playbook/)  | [**`redis.yml`**](https://github.com/pgsty/pigsty/blob/main/redis.yml)                     | 初始化 Redis 集群/节点/实例            |
|  [**REDIS**](/docs/redis/playbook/)  | [**`redis-rm.yml`**](https://github.com/pgsty/pigsty/blob/main/redis-rm.yml)               | 移除 Redis 集群/节点/实例             |
|   [**ETCD**](/docs/etcd/playbook/)   | [**`etcd.yml`**](https://github.com/pgsty/pigsty/blob/main/etcd.yml)                       | 初始化 ETCD 集群，或扩容新成员            |
|   [**ETCD**](/docs/etcd/playbook/)   | [**`etcd-rm.yml`**](https://github.com/pgsty/pigsty/blob/main/etcd-rm.yml)                 | 移除 ETCD 集群与数据，或移除现有成员缩容       |
|  [**MINIO**](/docs/minio/playbook/)  | [**`minio.yml`**](https://github.com/pgsty/pigsty/blob/main/minio.yml)                     | 初始化 MinIO 集群（pgBackRest 仓库可选） |
|  [**MINIO**](/docs/minio/playbook/)  | [**`minio-rm.yml`**](https://github.com/pgsty/pigsty/blob/main/minio-rm.yml)               | 移除 MinIO 集群与数据                |
| [**DOCKER**](/docs/docker/playbook/) | [**`docker.yml`**](https://github.com/pgsty/pigsty/blob/main/docker.yml)                   | 在节点上安装 Docker                 |
| [**DOCKER**](/docs/docker/playbook/) | [**`app.yml`**](https://github.com/pgsty/pigsty/blob/main/app.yml)                         | 使用 Docker Compose 安装应用程序      |
| [**FERRET**](/docs/ferret/playbook)  | [**`mongo.yml`**](https://github.com/pgsty/pigsty/blob/main/mongo.yml)                     | 在节点上安装 Mongo/FerretDB         |
{.full-width}


