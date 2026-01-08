---
title: 集群概念图
weight: 170
description: Pigsty 是如何将不同种类的功能抽象成为模块的，以及这些模块的逻辑模型。
icon: fa-solid fa-coins
module: [PIGSTY]
categories: [概念]
---


在 Pigsty 中，功能模块是以 “集群” 的方式组织起来的。每一个集群都是一个 Ansible 分组，包含有若干节点资源，定义有实例

> PGSQL 模块总览：关键概念与架构细节

PGSQL模块在生产环境中以**集群**的形式组织，这些**集群**是由一组由**主-备**关联的数据库**实例**组成的**逻辑实体**。
每个**数据库集群**都是一个**自治**的业务服务单元，由至少一个 **数据库（主库）实例** 组成。


----------------

## 实体概念图

让我们从ER图开始。在Pigsty的PGSQL模块中，有四种核心实体：

- **集群**（Cluster）：自治的PostgreSQL业务单元，用作其他实体的顶级命名空间。
- **服务**（Service）：集群能力的命名抽象，路由流量，并使用节点端口暴露postgres服务。
- **实例**（Instance）：一个在单个节点上的运行进程和数据库文件组成的单一postgres服务器。
- **节点**（Node）：硬件资源的抽象，可以是裸金属、虚拟机或甚至是k8s pods。

![](/img/pigsty/er.jpg)

**命名约定**

- 集群名应为有效的 DNS 域名，不包含任何点号，正则表达式为：`[a-zA-Z0-9-]+`
- 服务名应以集群名为前缀，并以特定单词作为后缀：`primary`、`replica`、`offline`、`delayed`，中间用`-`连接。
- 实例名以集群名为前缀，以正整数实例号为后缀，用`-`连接，例如`${cluster}-${seq}`。
- 节点由其首要内网IP地址标识，因为PGSQL模块中数据库与主机1:1部署，所以主机名通常与实例名相同。


----------------

## 身份参数

Pigsty使用**身份参数**来识别实体：[`PG_ID`](/docs/pgsql/param#pg_id)。

除了节点IP地址，[`pg_cluster`](/docs/pgsql/param#pg_cluster)、[`pg_role`](/docs/pgsql/param#pg_role)和[`pg_seq`](/docs/pgsql/param#pg_seq)三个参数是定义postgres集群所必需的最小参数集。
以[沙箱环境](/docs/deploy/sandbox#沙箱环境)测试集群`pg-test`为例：

```yaml
pg-test:
  hosts:
    10.10.10.11: { pg_seq: 1, pg_role: primary }
    10.10.10.12: { pg_seq: 2, pg_role: replica }
    10.10.10.13: { pg_seq: 3, pg_role: replica }
  vars:
    pg_cluster: pg-test
```

集群的三个成员如下所示：

|    集群     | 序号  |    角色     |    主机 / IP    |     实例      |        服务         |     节点名     |
|:---------:|:---:|:---------:|:-------------:|:-----------:|:-----------------:|:-----------:|
| `pg-test` | `1` | `primary` | `10.10.10.11` | `pg-test-1` | `pg-test-primary` | `pg-test-1` |
| `pg-test` | `2` | `replica` | `10.10.10.12` | `pg-test-2` | `pg-test-replica` | `pg-test-2` |
| `pg-test` | `3` | `replica` | `10.10.10.13` | `pg-test-3` | `pg-test-replica` | `pg-test-3` |

这里包含了：

- 一个集群：该集群命名为`pg-test`。
- 两种角色：`primary`和`replica`。
- 三个实例：集群由三个实例组成：`pg-test-1`、`pg-test-2`、`pg-test-3`。
- 三个节点：集群部署在三个节点上：`10.10.10.11`、`10.10.10.12`和`10.10.10.13`。
- 四个服务：
    - 读写服务：[`pg-test-primary`](/docs/pgsql/service/#primary服务)
    - 只读服务：[`pg-test-replica`](/docs/pgsql/service/#replica服务)
    - 直接连接的管理服务：[`pg-test-default`](/docs/pgsql/service/#default服务)
    - 离线读服务：[`pg-test-offline`](/docs/pgsql/service/#offline服务)

在监控系统（Prometheus/Grafana/Loki）中，相应的指标将会使用这些身份参数进行标记：

```yaml
pg_up{cls="pg-meta", ins="pg-meta-1", ip="10.10.10.10", job="pgsql"}
pg_up{cls="pg-test", ins="pg-test-1", ip="10.10.10.11", job="pgsql"}
pg_up{cls="pg-test", ins="pg-test-2", ip="10.10.10.12", job="pgsql"}
pg_up{cls="pg-test", ins="pg-test-3", ip="10.10.10.13", job="pgsql"}
```


