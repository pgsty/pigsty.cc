---
title: "安装"
weight: 20
icon: fa-solid fa-cloud-arrow-down
description: "在各支持平台上安装和升级 Patroni 的详细说明。"
module: [PATRONI]
category: [Tutorial]
---

> 原始页面： https://patroni.readthedocs.io/en/latest/installation.html

<a id="installation"></a>

--------

## Mac OS 前置依赖

在 Mac 上安装依赖，执行以下命令：

```bash
brew install postgresql etcd haproxy libyaml python
```

<a id="psycopg2_install_options"></a>

--------

## Psycopg

从 [psycopg2-2.8](http://initd.org/psycopg/articles/2019/04/04/psycopg-28-released/) 开始，psycopg2 的二进制版本不再默认安装。从源码编译安装需要 C 编译器以及 postgres 和 python 的开发包。由于 Python 生态中无法将依赖声明为 **`psycopg2 OR psycopg2-binary`**，您需要自行选择安装方式。

可选方案如下：

1.  使用发行版自带的包管理器：

```bash
sudo apt-get install python3-psycopg2  # 在 Debian/Ubuntu 上安装 psycopg2 模块
sudo yum install python3-psycopg2      # 在 RedHat/Fedora/CentOS 上安装 psycopg2
```

2.  在通过 pip 安装 Patroni 时，在 [**依赖列表**](/docs/patroni/installation#extras) 中指定 **`psycopg`**、**`psycopg2`** 或 **`psycopg2-binary`** 之一。

<a id="extras"></a>

--------

## 通过 pip 安装

Patroni 可以通过 pip 安装：

```bash
pip install patroni[dependencies]
```

其中 **`dependencies`** 可以为空，也可以是以下一个或多个选项的组合：

**`etcd`** 或 **`etcd3`**
: **`python-etcd`** 模块，用于将 Etcd 作为分布式配置存储（DCS）

**`consul`**
: **`py-consul`** 模块，用于将 Consul 作为 DCS

**`zookeeper`**
: **`kazoo`** 模块，用于将 Zookeeper 作为 DCS

**`exhibitor`**
: **`kazoo`** 模块，用于将 Exhibitor 作为 DCS（与 Zookeeper 依赖相同）

**`kubernetes`**
: [**kubernetes**](/docs/patroni/kubernetes#kubernetes) 模块，用于在 Patroni 中将 Kubernetes 作为 DCS

**`raft`**
: **`pysyncobj`** 模块，用于将 Python Raft 实现作为 DCS

**`aws`**
: **`boto3`**，用于支持 AWS 回调

**`jsonlogger`**
: **`python-json-logger`** 模块，用于开启 JSON 格式的 [**日志记录**](/docs/patroni/config/yaml#log_settings)

**`systemd`**
: **`systemd-python`**，用于支持 sd_notify 集成

**`all`**
: 以上所有选项（psycopg 系列除外）

**`psycopg3`**
: **`psycopg\[binary\]\>=3.0.0`** 模块

**`psycopg2`**
: **`psycopg2\>=2.5.4`** 模块

**`psycopg2-binary`**
: **`psycopg2-binary`** 模块

例如，以下命令将同时安装 Patroni、psycopg3、Etcd DCS 依赖以及 AWS 回调支持：

```bash
pip install patroni[psycopg3,etcd3,aws]
```

请注意，用于创建从库或自定义引导脚本的外部工具（如 WAL-E）需要独立于 Patroni 单独安装。

<a id="package_installation"></a>

--------

## 在 Linux 上通过包管理器安装

PostgreSQL 社区为以下操作系统提供了 Patroni 软件包：

- RHEL、RockyLinux、AlmaLinux；
- Debian 和 Ubuntu；
- SUSE Enterprise Linux。

您也可以在这里找到 Patroni 直接依赖项（如官方 OS 仓库中未收录的 Python 模块）的软件包。

更多信息请参阅 [**PGDG 仓库**](https://www.postgresql.org/download/linux/) 文档。

如果您使用的是 RedHat Enterprise Linux 衍生发行版，可能还需要 EPEL 中的软件包，请参阅 [**EPEL 仓库**](https://docs.fedoraproject.org/en-US/epel/) 文档。

为您的 OS 添加 PGDG 仓库后，即可安装 Patroni。

> [!NOTE]
> Patroni 软件包并非由 Patroni 开发团队维护，而是由 PostgreSQL 社区负责维护。如需支持，请优先在 [Postgres Slack](http://pgtreats.info/slack-invite) 上寻求帮助。

### 在 Debian 衍生发行版上安装

安装 PGDG 仓库（参见 [**上文**](/docs/patroni/installation#package_installation)）后，通过 apt 安装 Patroni：

```bash
apt-get install patroni
```

### 在 RedHat 衍生发行版上安装

安装 PGDG 仓库（参见 [**上文**](/docs/patroni/installation#package_installation)）后，在 RHEL 9（及其衍生版）上通过 dnf 安装 Patroni 和 etcd DCS：

```bash
dnf install patroni patroni-etcd
```

若您的 RedHat 衍生发行版未提供 etcd 软件包，可从 PGDG 安装。在承载 DCS 的节点上执行：

```bash
dnf install 'dnf-command(config-manager)'
dnf config-manager --enable pgdg-rhel9-extras
dnf install etcd
```

如需适配 RHEL 8，将仓库名中的版本号替换为 **`8`** 即可，即 **`pgdg-rhel8-extras`**。在 RockyLinux、AlmaLinux、Oracle Linux 等发行版上，仓库名仍为 **`pgdg-rhelN-extras`**。

### 在 SUSE Enterprise Linux 上安装

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

## 升级

升级 Patroni 非常简单：更新软件包后，在集群每个节点上重启 Patroni 守护进程即可。

但请注意，重启 Patroni 守护进程会导致 PostgreSQL 数据库重启。在某些情况下，这可能触发主库的故障转移。因此，建议在重启 Patroni 守护进程之前，先将集群置于维护模式。

在任意一个 Patroni 节点上执行以下命令，将集群切换至维护模式：

```bash
patronictl pause --wait
```

然后在集群的每个节点上执行对应 OS 所需的软件包升级操作：

```bash
apt-get update && apt-get install patroni patroni-etcd
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
