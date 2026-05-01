---
title: 沙箱环境
weight: 375
description: 用于学习、测试与演示的 Pigsty 标准四节点沙箱环境
icon: fa-solid fa-box-open
module: [PIGSTY]
categories: [教程]
---

Pigsty 提供了一个标准的四节点 **沙箱环境**，用于学习、测试与功能演示。

沙箱使用固定的 IP 地址和预定义的身份标识符，便于复现各种演示用例。


----------------

## 环境描述

默认的沙箱环境由 4 个节点组成，默认使用配置文件 [`ha/full.yml`](https://github.com/pgsty/pigsty/blob/main/conf/ha/full.yml)。

| ID |     IP 地址     |   节点名    | PostgreSQL  |   INFRA   |   ETCD   |   MINIO   |
|:--:|:-------------:|:--------:|:-----------:|:---------:|:--------:|:---------:|
| 1  | `10.10.10.10` |  `meta`  | `pg-meta-1` | `infra-1` | `etcd-1` | `minio-1` |
| 2  | `10.10.10.11` | `node-1` | `pg-test-1` |           |          |           |
| 3  | `10.10.10.12` | `node-2` | `pg-test-2` |           |          |           |
| 4  | `10.10.10.13` | `node-3` | `pg-test-3` |           |          |           |
{.full-width}

沙箱的配置可以概括表示为以下配置文件：

```yaml
all:
  children:
    infra: { hosts: { 10.10.10.10: { infra_seq: 1 } } }
    etcd:  { hosts: { 10.10.10.10: { etcd_seq:  1 } }, vars: { etcd_cluster: etcd } }
    minio: { hosts: { 10.10.10.10: { minio_seq: 1 } }, vars: { minio_cluster: minio } }

    pg-meta:
      hosts: { 10.10.10.10: { pg_seq: 1, pg_role: primary } }
      vars:  { pg_cluster: pg-meta }

    pg-test:
      hosts:
        10.10.10.11: { pg_seq: 1, pg_role: primary }
        10.10.10.12: { pg_seq: 2, pg_role: replica }
        10.10.10.13: { pg_seq: 3, pg_role: replica }
      vars: { pg_cluster: pg-test }

  vars:
    version: v4.3.0
    admin_ip: 10.10.10.10
    region: default
    pg_version: 18
```

![pigsty-sandbox](/img/pigsty/sandbox.png)



### PostgreSQL 集群

沙箱带有一个位于 `meta` 节点上的单实例 PostgreSQL 集群 `pg-meta`：

```bash
10.10.10.10 meta pg-meta-1
10.10.10.2  pg-meta          # 可选的 L2 VIP
```

沙箱中还有一个由三个实例组成的 PostgreSQL 高可用集群 `pg-test`，部署在另外三个节点上：

```bash
10.10.10.11 node-1 pg-test-1
10.10.10.12 node-2 pg-test-2
10.10.10.13 node-3 pg-test-3
10.10.10.3  pg-test          # 可选的 L2 VIP
```

两个可选的 L2 VIP 分别绑定在 `pg-meta` 和 `pg-test` 集群的主实例上。

### 基础设施

在 `meta` 节点上还部署有：

- **ETCD 集群**：单节点 `etcd` 集群，为 PostgreSQL HA 提供 DCS 服务
- **MinIO 集群**：单节点 `minio` 集群，提供 S3 兼容的对象存储服务

```bash
10.10.10.10 etcd-1
10.10.10.10 minio-1
```



----------------

## 创建沙箱

Pigsty 提供了开箱即用的模板，您可以使用 [**Vagrant**](/docs/deploy/vagrant/) 在本地创建沙箱，或使用 [**Terraform**](/docs/deploy/terraform/) 在云上创建沙箱。

当然，您也可以自己手工准备并置备这些节点。


### 本地沙箱（Vagrant）

本地沙箱使用 VirtualBox/libvirt 创建本地虚拟机，可以在您的 Mac / PC 上免费运行。

运行完整的 4 节点沙箱，您的机器应至少拥有 **4 核 CPU** 与 **8GB 内存**。

```bash
cd ~/pigsty
make full       # 使用默认 RockyLinux 9 镜像创建 4 节点沙箱
make full9      # 使用 RockyLinux 9 创建 4 节点沙箱
make full12     # 使用 Debian 12 创建 4 节点沙箱
make full24     # 使用 Ubuntu 24.04 创建 4 节点沙箱
make full26     # 使用 Ubuntu 26.04 创建 4 节点沙箱
```

Pigsty v4.3 统一使用 [**Vagrant Cloud**](https://portal.cloud.hashicorp.com/vagrant/discover/cloud-image) 上的 `cloud-image/*` Box。下表列出 4 节点本地沙箱可使用的 VirtualBox/libvirt 镜像版本。

#### VirtualBox

| 系统 | Vagrant Box | `amd64` 版本 | `arm64` 版本 |
|------|-------------|:------------:|:------------:|
| Rocky 8 | [`cloud-image/rocky-8`](https://portal.cloud.hashicorp.com/vagrant/discover/cloud-image/rocky-8) | `8.10.20240528.0` | `8.10.20240528.0` |
| Rocky 9 | [`cloud-image/rocky-9`](https://portal.cloud.hashicorp.com/vagrant/discover/cloud-image/rocky-9) | `9.7.20251123.2` | `9.7.20251123.2` |
| Rocky 10 | [`cloud-image/rocky-10`](https://portal.cloud.hashicorp.com/vagrant/discover/cloud-image/rocky-10) | `10.1.20251116.0` | `10.1.20251116.0` |
| Debian 11 | [`cloud-image/debian-11`](https://portal.cloud.hashicorp.com/vagrant/discover/cloud-image/debian-11) | `20260419.2453.0` | `20260419.2453.0` |
| Debian 12 | [`cloud-image/debian-12`](https://portal.cloud.hashicorp.com/vagrant/discover/cloud-image/debian-12) | `20260413.2447.0` | `20260413.2447.0` |
| Debian 13 | [`cloud-image/debian-13`](https://portal.cloud.hashicorp.com/vagrant/discover/cloud-image/debian-13) | `20260413.2447.0` | `20260413.2447.0` |
| Ubuntu 22.04 | [`cloud-image/ubuntu-22.04`](https://portal.cloud.hashicorp.com/vagrant/discover/cloud-image/ubuntu-22.04) | `20260320.0.0` | `20260320.0.0` |
| Ubuntu 24.04 | [`cloud-image/ubuntu-24.04`](https://portal.cloud.hashicorp.com/vagrant/discover/cloud-image/ubuntu-24.04) | `20260323.0.0` | `20260323.0.0` |
| Ubuntu 26.04 | [`cloud-image/ubuntu-26.04`](https://portal.cloud.hashicorp.com/vagrant/discover/cloud-image/ubuntu-26.04) | `20260421.0.0` | `20260421.0.0` |
| AlmaLinux 8 | [`cloud-image/almalinux-8`](https://portal.cloud.hashicorp.com/vagrant/discover/cloud-image/almalinux-8) | `8.10.20260414` | `8.10.20260414` |
| AlmaLinux 9 | [`cloud-image/almalinux-9`](https://portal.cloud.hashicorp.com/vagrant/discover/cloud-image/almalinux-9) | `9.7.20260414` | `9.7.20260414` |
| AlmaLinux 10 | [`cloud-image/almalinux-10`](https://portal.cloud.hashicorp.com/vagrant/discover/cloud-image/almalinux-10) | `10.1.20260414.0` | `10.1.20260414.0` |
{.full-width}

#### libvirt

| 系统 | Vagrant Box | `amd64` 版本 | `arm64` 版本 |
|------|-------------|:------------:|:------------:|
| Rocky 8 | [`cloud-image/rocky-8`](https://portal.cloud.hashicorp.com/vagrant/discover/cloud-image/rocky-8) | `8.10.20240528.0` | `8.10.20240528.0` |
| Rocky 9 | [`cloud-image/rocky-9`](https://portal.cloud.hashicorp.com/vagrant/discover/cloud-image/rocky-9) | `9.7.20251123.2` | `9.7.20251123.2` |
| Rocky 10 | [`cloud-image/rocky-10`](https://portal.cloud.hashicorp.com/vagrant/discover/cloud-image/rocky-10) | `10.1.20251116.0` | `10.1.20251116.0` |
| Debian 11 | [`cloud-image/debian-11`](https://portal.cloud.hashicorp.com/vagrant/discover/cloud-image/debian-11) | `20260419.2453.0` | `20260419.2453.0` |
| Debian 12 | [`cloud-image/debian-12`](https://portal.cloud.hashicorp.com/vagrant/discover/cloud-image/debian-12) | `20260413.2447.0` | `20260413.2447.0` |
| Debian 13 | [`cloud-image/debian-13`](https://portal.cloud.hashicorp.com/vagrant/discover/cloud-image/debian-13) | `20260413.2447.0` | `20260413.2447.0` |
| Ubuntu 22.04 | [`cloud-image/ubuntu-22.04`](https://portal.cloud.hashicorp.com/vagrant/discover/cloud-image/ubuntu-22.04) | `20260320.0.0` | `20260320.0.0` |
| Ubuntu 24.04 | [`cloud-image/ubuntu-24.04`](https://portal.cloud.hashicorp.com/vagrant/discover/cloud-image/ubuntu-24.04) | `20260323.0.0` | `20260323.0.0` |
| Ubuntu 26.04 | [`cloud-image/ubuntu-26.04`](https://portal.cloud.hashicorp.com/vagrant/discover/cloud-image/ubuntu-26.04) | `20260421.0.0` | `20260421.0.0` |
| AlmaLinux 8 | [`cloud-image/almalinux-8`](https://portal.cloud.hashicorp.com/vagrant/discover/cloud-image/almalinux-8) | `8.10.20260414` | `8.10.20260414` |
| AlmaLinux 9 | [`cloud-image/almalinux-9`](https://portal.cloud.hashicorp.com/vagrant/discover/cloud-image/almalinux-9) | `9.7.20260414` | `9.7.20260414` |
| AlmaLinux 10 | [`cloud-image/almalinux-10`](https://portal.cloud.hashicorp.com/vagrant/discover/cloud-image/almalinux-10) | `10.1.20260414.0` | `10.1.20260414.0` |
{.full-width}

更多详情请参考 [**Vagrant**](/docs/deploy/vagrant/) 文档。


### 云沙箱（Terraform）

云沙箱使用公有云 API 创建虚拟机，可以轻松创建和销毁，按需付费，非常适合快速测试。

使用 [`spec/aliyun-full.tf`](https://github.com/pgsty/pigsty/tree/main/terraform/spec/aliyun-full.tf) 模板在阿里云上创建 4 节点沙箱：

```bash
cd ~/pigsty/terraform
cp spec/aliyun-full.tf terraform.tf
terraform init
terraform apply
```

更多详情请参考 [**Terraform**](/docs/deploy/terraform/) 文档。



----------------

## 其他规格

除了标准的 4 节点沙箱，Pigsty 还提供了其他规格的环境：

### 单节点开发箱（meta）

最简单的 1 节点环境，用于快速上手、开发和测试：

```bash
make meta       # 创建单节点开发箱
```

### 双节点环境（dual）

2 节点环境，用于测试主从复制：

```bash
make dual       # 创建 2 节点环境
```

### 三节点环境（trio）

3 节点环境，用于测试基本高可用：

```bash
make trio       # 创建 3 节点环境
```

### 生产仿真环境（simu）

20 节点的大型仿真环境，用于模拟生产环境进行完整测试：

```bash
make simu       # 创建 20 节点生产仿真环境
```

该环境包含：

- 3 个基础设施节点（`meta1`, `meta2`, `meta3`）
- 2 个 HAProxy 代理节点
- 4 个 MinIO 节点
- 5 个 ETCD 节点
- 6 个 PostgreSQL 节点（2 个集群，每个 3 节点）
