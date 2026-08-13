---
title: MINIO 集群模型
weight: 1103
description: 介绍 Pigsty MINIO 模块部署 Silo 时使用的集群、实例与节点身份模型。
icon: fa-solid fa-boxes-stacked
module: [MINIO]
categories: [概念]
---


MINIO 是 Pigsty 的对象存储兼容模块名。v4.5.0 当前源码通过 [`minio_type: silo`](/docs/minio/param#minio_type) 部署 Silo，并以 **集群** 组织一组对象存储 **实例**。

每个集群都是一个 **自治** 的 S3 兼容对象存储单元，由至少一个实例组成，通过 S3 API 端口对外提供服务。

MINIO 模块中有三种核心实体：

- **集群**（Cluster）：自治的对象存储服务单元，用作其他实体的顶级命名空间。
- **实例**（Instance）：单个 Silo 服务器进程，在节点上运行并管理本地磁盘。
- **节点**（Node）：运行 Linux + Systemd 环境的硬件资源抽象，隐含式声明。

此外，Silo 保留 [**存储池**](/docs/minio/config#多池部署)（Pool）概念，用于扩容。



----------------

## 部署模式

Silo 支持 Pigsty 的三类清单部署模式：

|                 模式                  |    代号    | 说明                   | 适用场景       |
|:-----------------------------------:|:--------:|:---------------------|:-----------|
| [**单机单盘**](/docs/minio/config#单机单盘) | **SNSD** | 单节点，单个数据目录，或单块磁盘     | 开发、测试、演示   |
| [**单机多盘**](/docs/minio/config#单机多盘) | **SNMD** | 单节点，使用多块磁盘，通常至少 4 块盘 | 资源受限的小规模部署 |
| [**多机多盘**](/docs/minio/config#多机多盘) | **MNMD** | 多节点，每节点多块磁盘          | **生产环境推荐** |
{.full-width}

单机单盘模式可以使用普通目录快速体验。Silo 多盘模式应使用真实磁盘挂载点，否则服务会拒绝启动。



----------------

## 具体样例

以下示例显式选择当前默认的 Silo 后端，并定义四节点多盘集群：

```yaml
minio:
  hosts:
    10.10.10.10: { minio_seq: 1 }
    10.10.10.11: { minio_seq: 2 }
    10.10.10.12: { minio_seq: 3 }
    10.10.10.13: { minio_seq: 4 }
  vars:
    minio_type: silo
    minio_cluster: minio
    minio_data: '/data{1...4}'
    minio_node: '${minio_cluster}-${minio_seq}.pigsty'
```

上面的配置片段定义了一个四节点的 Silo 集群，每个节点使用四块磁盘；实例标识仍沿用 MINIO 模块的兼容命名：

| <span class="text-secondary">**集群**</span> | <span class="text-secondary">**Cluster**</span> |
|:------------------------------------------:|-------------------------------------------------|
|                **`minio`**                 | Silo 四节点高可用集群                                   |
|  <span class="text-success">**实例**</span>  | <span class="text-success">**Instance**</span>  |
|               **`minio-1`**                | 1 号对象存储实例，管理 4 块磁盘                              |
|               **`minio-2`**                | 2 号对象存储实例，管理 4 块磁盘                              |
|               **`minio-3`**                | 3 号对象存储实例，管理 4 块磁盘                              |
|               **`minio-4`**                | 4 号对象存储实例，管理 4 块磁盘                              |
|  <span class="text-danger">**节点**</span>   | <span class="text-danger">**Nodes**</span>      |
|             **`10.10.10.10`**              | 1 号节点，对应 `minio-1` 实例                           |
|             **`10.10.10.11`**              | 2 号节点，对应 `minio-2` 实例                           |
|             **`10.10.10.12`**              | 3 号节点，对应 `minio-3` 实例                           |
|             **`10.10.10.13`**              | 4 号节点，对应 `minio-4` 实例                           |
{.full-width}


----------------

## 身份参数

Pigsty 使用 [**`MINIO`**](/docs/minio/param#minio) 参数组为对象存储实体赋予确定身份。以下两项为必选参数：

| 参数                                                     |    类型    | 级别 | 说明              | 形式                   |
|:-------------------------------------------------------|:--------:|:--:|:----------------|:---------------------|
| [**`minio_cluster`**](/docs/minio/param#minio_cluster) | `string` | 集群 | 对象存储集群名称，必选身份参数 | 有效且非空的名称，无默认值        |
| [**`minio_seq`**](/docs/minio/param#minio_seq)         |  `int`   | 实例 | 对象存储实例编号，必选身份参数 | 非负整数，建议从 1 开始，集群内不重复 |
{.full-width}

只要在集群层面定义了集群名称，实例层面分配了实例编号，Pigsty 就能自动根据规则为每个实体生成唯一标识符。

| 实体     | 生成规则                                  | 示例                                      |
|--------|:--------------------------------------|:----------------------------------------|
| **实例** | `{{ minio_cluster }}-{{ minio_seq }}` | `minio-1`，`minio-2`，`minio-3`，`minio-4` |
{.full-width}

MINIO 模块不会为主机节点赋予额外的身份标识，节点使用其原有的主机名或 IP 地址进行标识。
[**`minio_node`**](/docs/minio/param#minio_node) 用于生成 Silo 集群内部的节点名称（写入 `/etc/hosts` 供集群发现使用），而非主机节点身份。

角色在整个清单中按 `minio_cluster` 查找实际成员，Ansible Group 名称不必与集群名称一致。`minio_type` 是保留的后端选择器，当前必须为 `silo`。


----------------

## 核心配置参数

除身份参数外，以下参数对 Silo 集群配置至关重要：

| 参数                                                   |    类型    | 说明                     |
|:-----------------------------------------------------|:--------:|:-----------------------|
| [**`minio_type`**](/docs/minio/param#minio_type)     |  `enum`  | 保留选择器，当前只接受 `silo`     |
| [**`minio_data`**](/docs/minio/param#minio_data)     |  `path`  | 数据目录，使用 `{x...y}` 指定多盘 |
| [**`minio_node`**](/docs/minio/param#minio_node)     | `string` | 节点名模式，用于多节点部署          |
| [**`minio_domain`**](/docs/minio/param#minio_domain) | `string` | 服务域名，默认为 `sss.pigsty`  |
{.full-width}

这些参数共同决定 `minio_volumes`，再由角色写入 Silo 的 `MINIO_VOLUMES`：

- **单机单盘**：直接使用 `minio_data` 的值，如 `/data/minio`
- **单机多盘**：使用 `minio_data` 展开的多个目录，如 `/data{1...4}`
- **多机多盘**：组合 `minio_node` 与 `minio_data`，如 `https://minio-{1...4}.pigsty:9000/data{1...4}`


----------------

## 端口与服务

每个对象存储实例会监听以下端口：

| 端口    | 参数                                                           | 用途               |
|:------|:-------------------------------------------------------------|:-----------------|
| 9000  | [**`minio_port`**](/docs/minio/param#minio_port)             | S3 API 服务端口      |
| 9001  | [**`minio_admin_port`**](/docs/minio/param#minio_admin_port) | Web 管理控制台端口      |
{.full-width}

MINIO 模块默认启用 HTTPS 加密通信（由 [**`minio_https`**](/docs/minio/param#minio_https) 控制）。按默认 pgBackRest S3 仓库配置使用时应保持 HTTPS，并正确安装 Pigsty CA。

多节点 Silo 集群可以通过访问 **任意一个节点** 来访问其服务。最佳实践是使用负载均衡器（如 HAProxy + VIP）提供统一接入点。


----------------

## 资源置备

Silo 集群部署后，Pigsty 会自动创建以下资源（由 [**`minio_provision`**](/docs/minio/param#minio_provision) 控制）：

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

这些密码属于文档公开的 [**默认凭据**](/docs/concept/sec/compliance#默认凭证清单)，仅供演示与本地开发使用，生产部署前必须替换。

`pgbackrest` 是 PostgreSQL 集群备份时使用的用户，`s3user_meta` 和 `s3user_data` 是未实际使用的保留用户。



----------------

## 监控标签体系

Pigsty 使用上面的 [**身份参数**](#身份参数) 标识对象存储实体。Silo 可用性序列示例如下：

```text
minio_up{cls="minio", ins="minio-1", ip="10.10.10.10", job="minio"}
minio_up{cls="minio", ins="minio-2", ip="10.10.10.11", job="minio"}
minio_up{cls="minio", ins="minio-3", ip="10.10.10.12", job="minio"}
minio_up{cls="minio", ins="minio-4", ip="10.10.10.13", job="minio"}
```

其中 `cls`、`ins`、`ip` 分别对应集群名、实例名与节点 IP。兼容监控命名保持 `job=minio`，当前后端标签为 `flavor=silo`。详细接口见 [**指标列表**](/docs/minio/metric)。
