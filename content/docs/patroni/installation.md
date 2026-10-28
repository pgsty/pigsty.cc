---
title: "安装"
weight: 20
icon: fa-solid fa-cloud-arrow-down
description: "在各支持平台上安装和升级 Patroni 的说明。"
module: [PATRONI]
categories: [教程]
upstream_link: "https://patroni.readthedocs.io/en/latest/installation.html"
---

<a id="installation"></a>

--------

<div id="mac-os-前置依赖"></div>

## Mac OS 前置依赖 {#pre-requirements-for-mac-os}

在 Mac 上安装依赖，执行以下命令：

```bash
brew install postgresql etcd haproxy libyaml python
```

<a id="psycopg2_install_options"></a>

--------

## Psycopg {#psycopg}

从 [psycopg2-2.8](https://www.psycopg.org/articles/2019/04/04/psycopg-28-released/) 开始，psycopg2 的二进制版本不再默认安装。从源码编译安装需要 C 编译器以及 postgres 和 python 的开发包。由于 Python 生态中无法将依赖声明为 **`psycopg2 OR psycopg2-binary`**，必须自行决定安装方式。

可选方案如下：

1.  使用发行版自带的包管理器：

```bash
sudo apt-get install python3-psycopg2  # install psycopg2 module on Debian/Ubuntu
sudo yum install python3-psycopg2      # install psycopg2 on RedHat/Fedora/CentOS
```

2.  在通过 pip 安装 Patroni 时，在 [**依赖列表**](/docs/patroni/installation#extras) 中指定 **`psycopg3`**、**`psycopg2`** 或 **`psycopg2-binary`** 之一。

<a id="extras"></a>

--------

<div id="通过-pip-安装"></div>

## 通过 pip 安装 {#general-installation-for-pip}

Patroni 可以通过 pip 安装：

```bash
pip install patroni[dependencies]
```

其中 **`dependencies`** 可以为空，也可以是以下一个或多个选项的组合：

**`etcd`** 或 **`etcd3`**  
**`python-etcd`** 模块，用于将 Etcd 作为分布式配置存储（DCS）

**`consul`**  
**`py-consul`** 模块，用于将 Consul 作为 DCS

**`zookeeper`**  
**`kazoo`** 模块，用于将 Zookeeper 作为 DCS

**`exhibitor`**  
**`kazoo`** 模块，用于将 Exhibitor 作为 DCS（与 Zookeeper 依赖相同）

**`kubernetes`**  
[**kubernetes**](/docs/patroni/kubernetes#kubernetes) 模块，用于在 Patroni 中将 Kubernetes 作为 DCS

**`raft`**  
**`pysyncobj`** 模块，用于将 Python Raft 实现作为 DCS

**`aws`**  
**`boto3`**，用于支持 AWS 回调

**`jsonlogger`**  
**`python-json-logger`** 模块，用于开启 JSON 格式的 [**日志记录**](/docs/patroni/config/yaml#log_settings)

**`systemd`**  
**`systemd-python`**，用于支持 sd_notify 集成

**`all`**  
以上所有选项（psycopg 系列除外）

**`psycopg3`**  
**`psycopg[binary]>=3.0.0`** 模块

**`psycopg2`**  
**`psycopg2>=2.5.4`** 模块

**`psycopg2-binary`**  
**`psycopg2-binary`** 模块

例如，以下命令将同时安装 Patroni、psycopg3、Etcd DCS 依赖以及 AWS 回调支持：

```bash
pip install patroni[psycopg3,etcd3,aws]
```

请注意，在从库创建或自定义引导脚本中调用的外部工具（即 WAL-E）应独立于 Patroni 安装。

<a id="package_installation"></a>

--------

<div id="在-linux-上通过包管理器安装"></div>

## 在 Linux 上通过包管理器安装 {#package-installation-on-linux}

你的操作系统上可能已有 Patroni 软件包可用，它们由 PostgreSQL 社区为以下系统提供：

- RHEL、RockyLinux、AlmaLinux；
- Debian 和 Ubuntu；
- SUSE Enterprise Linux。

此外，还可以找到 Patroni 直接依赖项的软件包，例如官方操作系统仓库中可能未提供的 Python 模块。

更多信息请参阅 [**PGDG 仓库**](https://www.postgresql.org/download/linux/) 文档。

如果你使用的是 RedHat Enterprise Linux 衍生发行版，可能还需要 EPEL 中的软件包，请参阅 [**EPEL 仓库**](https://docs.fedoraproject.org/en-US/epel/) 文档。

为你的 OS 安装 PGDG 仓库后，即可安装 Patroni。

> [!NOTE]
> Patroni 软件包并非由 Patroni 开发团队维护，而是由 PostgreSQL 社区负责维护。如需支持，请优先在 [Postgres Slack](http://pgtreats.info/slack-invite) 上寻求帮助。

<div id="在-debian-衍生发行版上安装"></div>

### 在 Debian 衍生发行版上安装 {#installing-on-debian-derivatives}

安装 PGDG 仓库（参见 [**上文**](/docs/patroni/installation#package_installation)）后，通过 apt 安装 Patroni：

```bash
apt-get install patroni
```

<div id="在-redhat-衍生发行版上安装"></div>

### 在 RedHat 衍生发行版上安装 {#installing-on-redhat-derivatives}

安装 PGDG 仓库（参见 [**上文**](/docs/patroni/installation#package_installation)）后，在 RHEL 9（及其衍生版）上通过 dnf 安装支持 etcd DCS 的 Patroni：

```bash
dnf install patroni patroni-etcd
```

如果所用的 RedHat 衍生发行版未提供 etcd 软件包，可从 PGDG 安装。在承载 DCS 的节点上执行：

```bash
dnf install 'dnf-command(config-manager)'
dnf config-manager --enable pgdg-rhel9-extras
dnf install etcd
```

如需适配 RHEL 8，将仓库名中的版本号替换为 **`8`** 即可，即 **`pgdg-rhel8-extras`**。在 RockyLinux、AlmaLinux、Oracle Linux 等发行版上，仓库名仍为 **`pgdg-rhelN-extras`**。

<div id="在-suse-enterprise-linux-上安装"></div>

### 在 SUSE Enterprise Linux 上安装 {#installing-on-suse-enterprise-linux}

部分依赖可能需要启用 SUSE PackageHub 仓库，请参阅 [**SUSE PackageHub**](https://packagehub.suse.com/how-to-use/) 文档。

在已安装 PGDG 仓库（参见 [**上文**](/docs/patroni/installation#package_installation)）的 SLES 15 上，可通过以下命令安装 Patroni：

```bash
zypper install patroni patroni-etcd
```

启用 SUSE PackageHub 仓库后，还可安装 etcd：

```bash
SUSEConnect -p PackageHub/15.5/x86_64
zypper install etcd
```

--------

<div id="升级"></div>

## 升级 {#upgrading}

升级 Patroni 非常简单：更新软件包后，在集群每个节点上重启 Patroni 守护进程即可。

不过，重启 Patroni 守护进程会导致 PostgreSQL 数据库重启。在某些情况下，这可能导致集群中主库节点的故障转移，因此建议将集群置于维护模式，直至 Patroni 守护进程重启完成。

在任意一个 Patroni 节点上执行以下命令，将集群切换至维护模式：

```bash
patronictl pause --wait
```

然后在集群的每个节点上执行对应 OS 所需的软件包升级操作：

```bash
apt-get update && apt-get install patroni
```

在每个节点上重启 Patroni 守护进程：

```bash
systemctl restart patroni
```

最后，恢复 Patroni 对 PostgreSQL 的监控，退出维护模式：

```bash
patronictl resume --wait
```

至此，集群已使用新版 Patroni 恢复完整运行。
