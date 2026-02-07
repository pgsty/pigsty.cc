---
title: 资源准备
weight: 360
description: 生产部署的准备工作，包括硬件，节点、磁盘、网络、VIP、域名、软件、文件系统等……
icon: fa-solid fa-server
module: [PIGSTY]
categories: [教程]
---


Pigsty 运行在节点（物理机或虚拟机）之上，本文档介绍硬件相关的规划与准备。


----------------

## 节点

Pigsty 目前运行在 `Linux` 内核和 `x86_64` / `aarch64` 架构的节点上。
["**节点**"](/docs/concept/arch/node) 指的是 SSH [**可访问**](/docs/deploy/admin#验证可达性) 且提供裸 Linux 操作系统环境的资源。
它可以是物理机、虚拟机或配备 `systemd`、`sudo` 和 `sshd` 的类似操作系统的容器。

部署 Pigsty 至少需要 **1** 个节点，您可以准备更多，并在 [**执行部署剧本**](/docs/setup/playbook#部署剧本) 中一次性部署所有节点，或稍后添加并单独部署。
最小节点规格要求是 `1C1G`，建议至少使用 `1C2G`。越高越好，没有上限。**系统参数将根据可用资源自动调优**。

所需节点的数量，取决于您的需求，更多详情请参考 [**架构规划**](/docs/deploy/planning)。
尽管带有 [**外部备份**](/docs/pgsql/backup/repository) 的 [**单机部署**](/docs/setup/install) 也提供一定程度上的兜底，
但我们建议在生产部署中使用复数个节点，起作用的 [**高可用配置**](/docs/deploy/planning#三节点配置) 至少需要 **3** 个节点才能工作，**2** 个节点则提供 [**半高可用**](/docs/deploy/planning#双节点配置)。



--------

## 磁盘

Pigsty 将使用 **`/data`** 作为默认数据目录，如果您有专用的主数据磁盘，建议将其挂载到那里，并为额外的磁盘驱动器使用 `/data1`、`/data2`、`/dataN`。
如果你想使用其他的数据目录，可以通过以下参数进行配置：

| 名称                                                     | 描述         | 默认值              |
|--------------------------------------------------------|------------|:-----------------|
| [**`node_data`**](/docs/node/param#node_data)          | 节点主数据目录    | `/data`          |
| [**`pg_fs_main`**](/docs/pgsql/param#pg_fs_main)       | PG 主数据目录   | `/data/postgres` |
| [**`pg_fs_backup`**](/docs/pgsql/param#pg_fs_backup)   | PG 备份数据目录  | `/data/backups`  |
| [**`etcd_data`**](/docs/etcd/param#etcd_data)          | ETCD 数据目录  | `/data/etcd`     |
| [**`infra_data`**](/docs/infra/param#infra_data)       | Infra 数据目录 | `/data/infra`    |
| [**`nginx_data`**](/docs/infra/param#nginx_data)       | Nginx 数据目录 | `/data/nginx`    |
| [**`minio_data`**](/docs/minio/param#minio_data)       | MinIO 数据目录 | `/data/minio`    |
| [**`redis_fs_main`**](/docs/redis/param#redis_fs_main) | Redis 数据目录 | `/data/redis`    |
{.full-width}


--------

## 文件系统

您可以使用任何支持的 Linux 文件系统来格式化数据磁盘，但对于生产环境部署，我们建议使用 **`xfs`**。

`xfs` 是 linux 的标配之一，提供了最佳的性能，便利的 CoW 机制，允许你瞬间克隆大型数据库集群。使用 MinIO 时，必须使用 `xfs` 文件系统。
`ext4` 是另一个可用的选择，但缺乏 CoW 功能，但有着更为丰富的数据恢复工具生态。`zfs` 可以提供 RAID，快照功能，但性能折损较大且需要单独安装。
我们推荐您在这三种文件系统中按需权衡，择一使用。

如果有特殊需求，您也可以使用其他文件系统，但我们强烈不建议使用 NFS 网络文件系统来运行数据库服务。

Pigsty 的工作假设是 `/data` 目录属于 `root:root`，权限为 `755`。
管理员可以分配一级目录的所有权和权限。每个应用在其子目录中运行时将使用专用用户。
Pigsty 使用的目录结构说明，请参考 [**FHS**](/docs/ref/fhs) 文档说明。



----------------

## 网络

Pigsty 默认使用在线安装模式，需要出站互联网访问。
使用 [**离线安装**](/docs/setup/offline/) 模式则不再需要互联网访问。

在内网中，Pigsty 需要 **静态网络** 才能工作，您应该为每个节点明确分配一个 **固定的** IPv4 地址。

IP 地址将用作节点的 **唯一标识符**，它应该是绑定到用于 **内部** 网络通信的主网络接口的主 IP 地址。

作为特例，[**单机部署**](/docs/setup/install) 时如果没有固定 IP 地址，可以使用本地环回地址 `127.0.0.1` 作为变通。

{{% alert title="永远不要使用公网 IP 作为标识符" color="danger" %}}
使用公网 IP 地址作为节点标识符可能导致安全和连接问题，请务必使用内网 IP 地址作为标识。
{{% /alert %}}



----------------

## VIP

Pigsty 支持 NODE 集群（`keepalived`）和 PGSQL 集群（`vip-manager`）的可选 L2 VIP。

要使用 L2 VIP 功能，您必须为节点集群/数据库集群明确分配指定一个 L2 VIP 地址。
在您自己的硬件上运行时这不是大问题，但在公有云环境中工作时可能成为问题。

{{% alert title="L2 VIP 需要 L2 网络" color="warning" %}}
要使用可选的节点 VIP 和 PG VIP 功能，请确保所有节点位于同一 L2 网络内。
{{% /alert %}}


----------------

## CA

Pigsty 默认为每一套部署生成一套自签名的 [**CA 基础设施**](/docs/concept/sec/ca/)，用于签发环境中所有的加密证书。

如果您已经有了正规的企业 CA，或者已经有了自签名的 CA，您也可以选择使用已有的 CA 来签发 Pigsty 所需的证书。


----------------

## 域名

Pigsty 默认使用一个本地静态域名 `i.pigsty` 来访问 WebUI，这是可选的，你也可以直接使用 IP 地址访问。

对于生产环境部署来说，建议您使用域名来访问服务，只有使用域名，才能启用 HTTPS 支持，加密您的数据传输。
同时，域名访问允许您在同一个端口上运行多种不同的服务，并通过不同的域名进行区分。

如果您的部署提供 **互联网访问**，那么可以使用公共 DNS 供应商（如 Cloudflare、阿里云 DNS、AWS Route53 等）来管理您的域名解析。
将您的域名指向 Pigsty 节点的 **公网 IP 地址** 即可。
如果您的部署针对 **局域网/办公网** 开放，那么可以使用内部 DNS 服务器来管理域名解析。
将您的域名指向 Pigsty 节点的 **办公网 IP 地址** 即可。

如果您的访问仅限于本机，或特定的几台机器，那么可以使用本地静态解析来管理域名解析。
将以下记录添加到（用于访问 Pigsty WebUI 的机器） `/etc/hosts` 文件（本地静态解析）中，即可从浏览器中访问。

```bash
10.10.10.10 i.pigsty    # 替换为您计划使用的域名，与 Pigsty 节点的 IP 地址
```



--------

## Linux

Pigsty 运行在 **Linux** 操作系统上，它支持 **14** 种主流 Linux 发行版：[**兼容操作系统列表**](/docs/ref/linux/)

我们推荐使用 **RockyLinux 10.1**、**Debian 13.2** 或 **Ubuntu 24.04.2** 作为默认操作系统选项。

在 MacOS 和 Windows 上，您可以用各种虚拟机软件或者 Docker systemd 镜像来安装 Pigsty。

我们 **强烈建议** 使用全新安装的操作系统环境，如果您的服务器已经运行了 Nginx / PostgreSQL 等服务，请考虑使用新的节点进行部署。

{{% alert title="在所有节点上使用相同的操作系统版本" color="warning" %}}

多节点部署时，请确保所有节点使用相同的 Linux 发行版，架构与版本。异构节点部署虽然可能可以工作，但不受支持且可能导致不可预见的问题。

{{% /alert %}}

--------

## Locale

我们建议您将 `en_US` 设置为操作系统的主要语言，**至少确保该 Locale 可用**，从而确保 PG 日志打印英文。

一些发行版可能默认没有提供 `en_US` 区域设置，例如 Debian。使用以下命令启用 `en_US` 区域设置：

```bash
localedef -i en_US -f UTF-8 en_US.UTF-8
localectl set-locale LANG=en_US.UTF-8
```

对于 PostgreSQL 来说，我们强烈建议您默认使用 PG 17+ 内置的 `C.UTF-8` 作为默认排序规则。

在 [**配置向导**](/docs/setup/playbook#配置向导) 中如果检测到 PG 版本满足或者操作系统支持，就默认配置 `C.UTF-8` 作为排序规则。





----------------

## Ansible

Pigsty 使用 [**Ansible**](/docs/setup/playbook/) 从管理节点发起对所有被管理节点的控制，
[**安装 Ansible**](/docs/setup/playbook#安装-ansible) 会介绍更多细节。

Pigsty 默认会在 Infra 节点上安装 Ansible，所以 Infra 节点是可以作为管理节点（或备用管理节点）使用。
在 [**单机部署**](/docs/setup/install) 的时候，您当前执行安装的节点，既是运行 ansible 管理命令的 [**管理节点**](/docs/concept/arch/node#admin节点)，也是部署基础设施的 [**INFRA节点**](/docs/concept/arch/node#infra节点)。



----------------

## Pigsty

您可以使用以下方式 [**安装**](/docs/deploy/install#安装) 最新稳定版本的 Pigsty 源代码：

{{< tabpane text=true persist=header >}}
{{% tab header="pigsty.cc（中国）" %}}
```bash
curl -fsSL https://repo.pigsty.cc/get | bash;
```
{{% /tab %}}
{{% tab header="pigsty.io（全球）" %}}
```bash
curl -fsSL https://repo.pigsty.io/get | bash;
```
{{% /tab %}}
{{< /tabpane >}}


要 [**安装**](/docs/deploy/install#安装) 最新特定版本的 Pigsty，可以使用 **`-s <version>`** 参数：

{{< tabpane text=true persist=header >}}
{{% tab header="pigsty.cc（中国）" %}}
```bash
curl -fsSL https://repo.pigsty.cc/get | bash -s v4.0.0
```
{{% /tab %}}
{{% tab header="pigsty.io（全球）" %}}
```bash
curl -fsSL https://repo.pigsty.io/get | bash -s v4.0.0
```
{{% /tab %}}
{{< /tabpane >}}


要 [**安装**](/docs/deploy/install#安装) 最新 Beta 版本的 Pigsty 源代码，可以使用 **`beta`** 脚本：

{{< tabpane text=true persist=header >}}
{{% tab header="pigsty.cc（中国）" %}}
```bash
curl -fsSL https://repo.pigsty.cc/beta | bash;
```
{{% /tab %}}
{{% tab header="pigsty.io（全球）" %}}
```bash
curl -fsSL https://repo.pigsty.io/beta | bash;
```
{{% /tab %}}
{{< /tabpane >}}

如果你是开发者，或者想要获取最新的开发版本，可以直接 git 克隆 Pigsty 代码仓库：

```bash
git clone https://github.com/pgsty/pigsty.git;
cd pigsty; git checkout v4.0.0
```

如果您的环境没有互联网访问，也可以直接从 [**GitHub Release**](https://github.com/pgsty/pigsty/releases/) 页面，或者 Pigsty 仓库下载源码包：

```bash
wget https://repo.pigsty.cc/src/pigsty-v4.0.0.tgz
wget https://repo.pigsty.io/src/pigsty-v4.0.0.tgz
```

