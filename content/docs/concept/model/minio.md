---
title: MINIO 集群模型
weight: 1103
description: 介绍 Pigsty 中 MinIO 集群的实体-关系模型，E-R 关系图，实体释义与命名规范。
icon: fa-solid fa-boxes-stacked
module: [MINIO]
categories: [概念]
---


MinIO 模块在生产环境中以**集群**的形式组织，这些**集群**是由一组分布式 MinIO **实例**组成的**逻辑实体**，共同提供高可用的对象存储服务。

每个集群都是一个**自治**的 S3 兼容对象存储单元，由至少一个 **MinIO 实例** 组成，通过 S3 API 端口向外暴露服务能力。

在 Pigsty 的 MinIO 模块中有三种核心实体：

- **集群**（Cluster）：自治的 MinIO 服务单元，用作其他实体的顶级命名空间。
- **实例**（Instance）：单个 MinIO 服务器进程，在节点上运行，管理本地磁盘存储。
- **节点**（Node）：运行 Linux + Systemd 环境的硬件资源抽象，隐含式声明。

此外，MinIO 还有 [**存储池**](/docs/minio/config#多池部署)（Pool）的概念，用于集群平滑扩容。
一个集群可以包含多个存储池，每个存储池由一组节点和磁盘组成。



----------------

## 部署模式

MinIO 支持三种主要部署模式，适用于不同的场景：

|                 模式                  |    代号    | 说明                   | 适用场景       |
|:-----------------------------------:|:--------:|:---------------------|:-----------|
| [**单机单盘**](/docs/minio/config#单机单盘) | **SNSD** | 单节点，单个数据目录，或单块磁盘     | 开发、测试、演示   |
| [**单机多盘**](/docs/minio/config#单机多盘) | **SNMD** | 单节点，使用多块磁盘，通常至少 4 块盘 | 资源受限的小规模部署 |
| [**多机多盘**](/docs/minio/config#多机多盘) | **MNMD** | 多节点，每节点多块磁盘          | **生产环境推荐** |
{.full-width}

单机单盘模式可以使用任意目录作为存储，适合快速体验；单机多盘和多机多盘模式需要使用真实的磁盘挂载点，否则会拒绝启动。



----------------

## 具体样例

让我们来看一个多机多盘模式的具体例子，以四节点的 MinIO 集群为例：

```yaml
minio:
  hosts:
    10.10.10.10: { minio_seq: 1 }
    10.10.10.11: { minio_seq: 2 }
    10.10.10.12: { minio_seq: 3 }
    10.10.10.13: { minio_seq: 4 }
  vars:
    minio_cluster: minio
    minio_data: '/data{1...4}'
    minio_node: '${minio_cluster}-${minio_seq}.pigsty'
```

上面的配置片段定义了一个四节点的 MinIO 集群，每个节点使用四块磁盘，该集群中的相关实体包括：

| <span class="text-secondary">**集群**</span> | <span class="text-secondary">**Cluster**</span> |
|:------------------------------------------:|-------------------------------------------------|
|                **`minio`**                 | MinIO 四节点高可用集群                                  |
|  <span class="text-success">**实例**</span>  | <span class="text-success">**Instance**</span>  |
|               **`minio-1`**                | 1 号 MinIO 实例，管理 4 块磁盘                           |
|               **`minio-2`**                | 2 号 MinIO 实例，管理 4 块磁盘                           |
|               **`minio-3`**                | 3 号 MinIO 实例，管理 4 块磁盘                           |
|               **`minio-4`**                | 4 号 MinIO 实例，管理 4 块磁盘                           |
|  <span class="text-danger">**节点**</span>   | <span class="text-danger">**Nodes**</span>      |
|             **`10.10.10.10`**              | 1 号节点，对应 `minio-1` 实例                           |
|             **`10.10.10.11`**              | 2 号节点，对应 `minio-2` 实例                           |
|           **`10.10.10.12`**                | 3 号节点，对应 `minio-3` 实例                           |
|             **`10.10.10.13`**              | 4 号节点，对应 `minio-4` 实例                           |
{.full-width}


----------------

## 身份参数

Pigsty 使用 [**`MINIO`**](/docs/minio/param#minio) 参数组为 MinIO 模块的每个实体赋予确定的身份。以下两项为必选参数：

| 参数                                                     |    类型    | 级别 | 说明               | 形式                                 |
|:-------------------------------------------------------|:--------:|:--:|:-----------------|:-----------------------------------|
| [**`minio_cluster`**](/docs/minio/param#minio_cluster) | `string` | 集群 | MinIO 集群名称，必选身份参数 | 有效的 DNS 名称，默认为 `minio`             |
| [**`minio_seq`**](/docs/minio/param#minio_seq)         |  `int`   | 实例 | MinIO 实例编号，必选身份参数 | 自然数，从 1 开始分配，集群内不重复                |
{.full-width}

只要在集群层面定义了集群名称，实例层面分配了实例编号，Pigsty 就能自动根据规则为每个实体生成唯一标识符。

| 实体     | 生成规则                                  | 示例                                      |
|--------|:--------------------------------------|:----------------------------------------|
| **实例** | `{{ minio_cluster }}-{{ minio_seq }}` | `minio-1`，`minio-2`，`minio-3`，`minio-4` |
{.full-width}

MinIO 模块不会为主机节点赋予额外的身份标识，节点使用其原有的主机名或 IP 地址进行标识。
[**`minio_node`**](/docs/minio/param#minio_node) 参数用于生成 MinIO 集群内部的节点名称（写入 `/etc/hosts` 供集群发现使用），而非主机节点的身份。


----------------

## 核心配置参数

除身份参数外，以下参数对 MinIO 集群配置至关重要：

| 参数                                                   |    类型    | 说明                 |
|:-----------------------------------------------------|:--------:|:-------------------|
| [**`minio_data`**](/docs/minio/param#minio_data)     |  `path`  | 数据目录，使用 `{x...y}` 指定多盘 |
| [**`minio_node`**](/docs/minio/param#minio_node)     | `string` | 节点名模式，用于多节点部署      |
| [**`minio_domain`**](/docs/minio/param#minio_domain) | `string` | 服务域名，默认为 `sss.pigsty` |
{.full-width}

这些参数共同决定了 MinIO 的核心配置 `MINIO_VOLUMES`：

- **单机单盘**：直接使用 `minio_data` 的值，如 `/data/minio`
- **单机多盘**：使用 `minio_data` 展开的多个目录，如 `/data{1...4}`
- **多机多盘**：组合 `minio_node` 与 `minio_data`，如 `https://minio-{1...4}.pigsty:9000/data{1...4}`


----------------

## 端口与服务

每个 MinIO 实例会监听以下端口：

| 端口    | 参数                                                           | 用途               |
|:------|:-------------------------------------------------------------|:-----------------|
| 9000  | [**`minio_port`**](/docs/minio/param#minio_port)             | S3 API 服务端口      |
| 9001  | [**`minio_admin_port`**](/docs/minio/param#minio_admin_port) | Web 管理控制台端口      |
{.full-width}

MinIO 默认启用 HTTPS 加密通信（由 [**`minio_https`**](/docs/minio/param#minio_https) 控制）。这对于 pgBackREST 等备份工具访问 MinIO 是必需的。

多节点 MinIO 集群可以通过访问 **任意一个节点** 来访问其服务。最佳实践是使用负载均衡器（如 HAProxy + VIP）统一接入点。


----------------

## 资源置备

MinIO 集群部署后，Pigsty 会自动创建以下资源（由 [**`minio_provision`**](/docs/minio/param#minio_provision) 控制）：

**默认存储桶**（由 [**`minio_buckets`**](/docs/minio/param#minio_buckets) 定义）：

| 存储桶     | 用途                         |
|:--------|:---------------------------|
| `pgsql` | PostgreSQL pgBackREST 备份存储 |
| `meta`  | 元数据存储，启用版本控制               |
| `data`  | 通用数据存储                     |
{.full-width}

**默认用户**（由 [**`minio_users`**](/docs/minio/param#minio_users) 定义）：

| 用户            | 默认密码            | 策略      | 用途                |
|:--------------|:----------------|:--------|:------------------|
| `pgbackrest`  | `S3User.Backup` | `pgsql` | PostgreSQL 备份专用用户 |
| `s3user_meta` | `S3User.Meta`   | `meta`  | 访问 `meta` 存储桶     |
| `s3user_data` | `S3User.Data`   | `data`  | 访问 `data` 存储桶     |
{.full-width}

`pgbackrest` 是 PostgreSQL 集群备份时使用的用户，`s3user_meta` 和 `s3user_data` 是未实际使用的保留用户。



----------------

## 监控标签体系

Pigsty 提供了一套开箱即用的监控系统，在这个系统中使用上面的 [**身份参数**](#身份参数) 来标识各个 MinIO 实体对象。

```text
minio_up{cls="minio", ins="minio-1", ip="10.10.10.10", job="minio"}
minio_up{cls="minio", ins="minio-2", ip="10.10.10.11", job="minio"}
minio_up{cls="minio", ins="minio-3", ip="10.10.10.12", job="minio"}
minio_up{cls="minio", ins="minio-4", ip="10.10.10.13", job="minio"}
```

例如，上面的 `cls`，`ins`，`ip` 三个标签，分别对应集群名、实例名与节点 IP，这三个核心实体的标识符。
它们与 `job` 标签，在 **所有** [**VictoriaMetrics**](/docs/concept/arch/infra#victoriametrics) 采集的 MinIO 监控指标中都会出现并可用。
采集 MinIO 指标的 `job` 名固定为 `minio`。


