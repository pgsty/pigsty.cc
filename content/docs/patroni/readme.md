---
title: "简介"
weight: 10
icon: fa-solid fa-circle-info
description: "Patroni 简介、快速上手以及高可用核心概念。"
module: [PATRONI]
category: [Concept]
---

> 原始页面： https://patroni.readthedocs.io/en/latest/README.html

<a id="readme"></a>
Patroni 是一个基于 Python 构建的高可用 PostgreSQL 解决方案模板框架。它最初 fork 自 Compose 公司的 [Governor](https://github.com/compose/governor) 项目，并在此基础上引入了大量新特性。

更多背景资料，请参阅：

- [PostgreSQL HA with Kubernetes and Patroni](https://www.youtube.com/watch?v=iruaCgeG7qs)——Josh Berkus 在 KubeCon 2016 上的演讲（视频）
- [2016 年 2 月 Zalando 技术博客文章](https://engineering.zalando.com/posts/2016/02/zalandos-patroni-a-template-for-high-availability-postgresql.html)

--------

## 开发状态

Patroni 正处于活跃开发阶段，欢迎社区贡献。详情请参阅下方的 [**贡献**](/docs/patroni/contributing#contributing) 章节。

新版本发布信息记录在 [**这里**](/docs/patroni/releases#releases)。

--------

## 技术要求与安装

有关在各平台上安装和升级 Patroni 的指引，请参阅 [**安装文档**](/docs/patroni/installation#installation)。

<a id="running_configuring"></a>

--------

## 规划 PostgreSQL 节点数量

Patroni/PostgreSQL 节点与 DCS 节点是解耦的（除非 Patroni 自行实现 RAFT），因此对最小节点数没有硬性要求。运行一个由一主一从构成的集群完全没有问题，后续可随时添加更多从库节点。

**双节点集群**（一主一备）是常见部署方式，可提供自动故障转移和高可用能力。请注意，在故障转移期间，直至故障节点重新加入集群前，集群将暂时失去冗余。

**DCS 要求**：您的 DCS（etcd、ZooKeeper、Consul）必须以 **3 或 5 个节点**运行，以保证正确的共识能力和容错性。单个 DCS 集群可通过不同的命名空间/scope 组合，同时存储数百乃至数千个 Patroni 集群的信息。

--------

## 运行与配置

以下内容假设您已从 <https://github.com/patroni/patroni> 克隆了 Patroni 仓库，尤其需要用到示例配置文件 `postgres0.yml` 和 `postgres1.yml`。如果您通过 pip 安装了 Patroni，可以从 git 仓库获取这些文件，并将下方的 `./patroni.py` 替换为 `patroni` 命令。

在不同终端窗口中依次执行以下命令即可启动：

    > etcd --data-dir=data/etcd --enable-v2=true
    > ./patroni.py postgres0.yml
    > ./patroni.py postgres1.yml

随后您将看到一个高可用集群启动起来。可以修改 YAML 文件中的不同配置，观察集群行为的变化；也可以主动终止某些组件，观察系统的响应表现。

通过添加更多 `postgres*.yml` 文件，可以构建规模更大的集群。

Patroni 提供了一份 [HAProxy](http://www.haproxy.org/) 配置，可为应用程序提供连接集群主库的单一端点。配置方式如下：

    > haproxy -f haproxy.cfg

    > psql --host 127.0.0.1 --port 5000 postgres

--------

## YAML 配置

有关 etcd、Consul 和 ZooKeeper 的完整配置说明，请参阅 [**YAML 配置文档**](/docs/patroni/config/yaml#yaml)。配置示例可参考 [postgres0.yml](https://github.com/patroni/patroni/blob/master/postgres0.yml)。

--------

## 环境变量配置

有关通过环境变量覆盖配置的完整说明，请参阅 [**环境变量文档**](/docs/patroni/config/env#env)。

--------

## 复制模式选择

Patroni 使用 PostgreSQL 的流复制，默认为异步复制。异步复制模式下可配置 `maximum_lag_on_failover` 参数，当某个从库落后主库的字节数超过该阈值时，故障转移将不会触发。该参数值应根据业务需求进行调整。如需更强的持久性保证，也可以改用同步复制。详情请参阅 [**复制模式文档**](/docs/patroni/replication_modes#replication_modes)。

--------

## 应用程序不应使用超级用户

从应用程序连接数据库时，请始终使用非超级用户账号。Patroni 本身需要访问数据库才能正常运行。若应用程序使用超级用户连接，可能耗尽整个连接池，包括通过 `superuser_reserved_connections` 参数为超级用户预留的连接。一旦 Patroni 因连接池耗尽而无法访问主库，将产生不可预期的后果。

--------

## 测试您的高可用方案

测试高可用方案是一项耗时的工作，涉及诸多变量，跨平台应用尤为如此。这项工作需要经验丰富的系统管理员或专业顾问来执行，文档中难以全面覆盖。

以下是您应当重点测试的基础设施要素：

- 网络（系统前端网络以及网卡本身，无论是物理网卡还是虚拟网卡）
- 磁盘 IO
- 文件描述符限制（Linux 中的 nofile）
- 内存——即便关闭了 oomkiller，内存不足同样可能引发问题
- CPU
- 虚拟化资源争用（Hypervisor 超售）
- 任何 cgroup 限制（通常与上述问题相关）
- 对任意 postgres 进程执行 `kill -9`（postmaster 除外）——这是模拟段错误的有效手段

有一件事切勿尝试：对 postmaster 进程执行 `kill -9`。这种操作并不对应任何真实场景。如果您担心基础设施不安全、攻击者可能执行 `kill -9`，任何高可用机制都无法解决这个问题——攻击者大可再次杀掉进程，或以其他方式制造混乱。
