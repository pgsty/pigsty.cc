---
title: Vagrant
weight: 385
description: 使用 Vagrant 在本地创建虚拟机环境
icon: fa-solid fa-laptop-code
module: [PIGSTY]
categories: [教程]
---

[**Vagrant**](https://www.vagrantup.com/) 是一个流行的本地虚拟化工具，可以按照声明式的方式创建本地虚拟机。

Pigsty 需要 Linux 环境运行，您可以使用 Vagrant 轻松在本地创建 Linux 虚拟机进行测试。


------

## 安装依赖

首先，确保您的系统中已经安装了 [**Vagrant**](https://www.vagrantup.com/) 和虚拟机软件（[**VirtualBox**](https://www.virtualbox.org/)， [**libvirt**](https://libvirt.org/)，Hyper-V，Parallel，……）。

在 MacOS 上，您可以使用 [**Homebrew**](https://brew.sh/) 一键安装 vagrant 与 virtualbox；
在 Linux 上，您可以使用 VirtualBox 或 [**vagrant-libvirt**](https://vagrant-libvirt.github.io/vagrant-libvirt/) 作为虚拟机管理软件；
在 Windows 专业版上，可以使用 Virtualbox 与 Hyper-V 作为提供商。

{{< tabpane persist="disabled" >}}
{{< tab header="macOS" lang="Bash" >}}
brew install vagrant virtualbox ansible
# 安装 VirtualBox 后需要重启系统，并在系统偏好设置中允许其内核扩展。
{{% /tab %}}

{{< tab header="安装 Homebrew" lang="Bash" >}}
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
{{< /tab >}}

{{< /tabpane >}}





### 创建虚拟机

使用 Pigsty 提供的 `make` 快捷方式创建虚拟机：

```bash
cd ~/pigsty

make meta       # 1 节点开发箱，用于快速上手、开发和测试
make full       # 4 节点沙箱，用于高可用测试和功能演示
make simu       # 20 节点仿真环境，用于生产环境模拟

# 其他不常用的规格
make dual       # 2 节点环境
make trio       # 3 节点环境
make deci       # 10 节点环境
```

您可以使用变体别名指定不同的操作系统镜像：

```bash
make meta9      # 使用 RockyLinux 9.7 创建单节点
make full12     # 使用 Debian 12.13 创建 4 节点沙箱
make simu24     # 使用 Ubuntu 24.04 创建 20 节点仿真环境
```

可用的操作系统后缀：`8`（EL8）、`9`（EL9）、`10`（EL10）、`12`（Debian 12）、`13`（Debian 13）、`22`（Ubuntu 22.04）、`24`（Ubuntu 24.04）

### 构建环境

您还可以使用以下别名创建 Pigsty 构建环境，这些模板不会替换基础镜像：

```bash
make oss        # 3 节点 OSS 构建环境
make pro        # 5 节点 PRO 构建环境
make rpm        # 3 节点 EL8/9/10 构建环境
make deb        # 4 节点 Debian12/13 Ubuntu22/24 构建环境
make all        # 7 节点全量构建环境
```


----------------

## 规格配置

Pigsty 在 [`vagrant/spec/`](https://github.com/pgsty/pigsty/tree/main/vagrant/spec) 目录下提供了多种预定义的虚拟机规格：

|                                 模板                                  |  节点数  |       规格        |         说明          |  别名   |
|:-------------------------------------------------------------------:|:-----:|:---------------:|:-------------------:|:-----:|
| [meta.rb](https://github.com/pgsty/pigsty/blob/main/vagrant/spec/meta.rb) | 1 节点  |    2c4g x 1     |      单节点开发箱      | Devbox |
| [dual.rb](https://github.com/pgsty/pigsty/blob/main/vagrant/spec/dual.rb) | 2 节点  |    1c2g x 2     |       双节点环境       |       |
| [trio.rb](https://github.com/pgsty/pigsty/blob/main/vagrant/spec/trio.rb) | 3 节点  |    1c2g x 3     |       三节点环境       |       |
| [full.rb](https://github.com/pgsty/pigsty/blob/main/vagrant/spec/full.rb) | 4 节点  | 2c4g + 1c2g x 3 |     4 节点完整沙箱     | Sandbox |
| [deci.rb](https://github.com/pgsty/pigsty/blob/main/vagrant/spec/deci.rb) | 10 节点 |       混合       |      10 节点环境      |       |
| [simu.rb](https://github.com/pgsty/pigsty/blob/main/vagrant/spec/simu.rb) | 20 节点 |       混合       |   20 节点生产仿真环境    | Simubox |
| [minio.rb](https://github.com/pgsty/pigsty/blob/main/vagrant/spec/minio.rb) | 4 节点  |  1c2g x 4 + 磁盘  |   MinIO 测试环境     |       |
| [oss.rb](https://github.com/pgsty/pigsty/blob/main/vagrant/spec/oss.rb) | 3 节点  |    1c2g x 3     | 3 节点 OSS 构建环境  |       |
| [pro.rb](https://github.com/pgsty/pigsty/blob/main/vagrant/spec/pro.rb) | 5 节点  |    1c2g x 5     | 5 节点 PRO 构建环境  |       |
| [rpm.rb](https://github.com/pgsty/pigsty/blob/main/vagrant/spec/rpm.rb) | 3 节点  |    1c2g x 3     | 3 节点 EL 构建环境   |       |
| [deb.rb](https://github.com/pgsty/pigsty/blob/main/vagrant/spec/deb.rb) | 4 节点  |    1c2g x 4     | 4 节点 Deb 构建环境  |       |
| [all.rb](https://github.com/pgsty/pigsty/blob/main/vagrant/spec/all.rb) | 7 节点  |    1c2g x 7     | 7 节点全量构建环境    |       |
{.full-width}

每个规格文件包含一个描述虚拟机节点的 `Specs` 变量。例如，`full.rb` 包含 4 节点沙箱的定义：

```ruby
# full: pigsty full-featured 4-node sandbox for HA-testing & tutorial & practices

Specs = [
  { "name" => "meta"   , "ip" => "10.10.10.10" ,  "cpu" => "2" ,  "mem" => "4096" ,  "image" => "bento/rockylinux-9" },
  { "name" => "node-1" , "ip" => "10.10.10.11" ,  "cpu" => "1" ,  "mem" => "2048" ,  "image" => "bento/rockylinux-9" },
  { "name" => "node-2" , "ip" => "10.10.10.12" ,  "cpu" => "1" ,  "mem" => "2048" ,  "image" => "bento/rockylinux-9" },
  { "name" => "node-3" , "ip" => "10.10.10.13" ,  "cpu" => "1" ,  "mem" => "2048" ,  "image" => "bento/rockylinux-9" },
]
```

### simu 规格详情

`simu.rb` 提供了一个 20 节点的生产环境仿真配置：

- 3 x infra 节点（`meta1-3`）：4c16g
- 2 x haproxy 节点（`proxy1-2`）：1c2g
- 4 x minio 节点（`minio1-4`）：1c2g
- 5 x etcd 节点（`etcd1-5`）：1c2g
- 6 x pgsql 节点（`pg-src-1-3`，`pg-dst-1-3`）：2c4g


----------------

## 配置脚本

使用 [`vagrant/config`](https://github.com/pgsty/pigsty/blob/main/vagrant/config) 脚本可以根据规格和选项生成最终的 `Vagrantfile`：

```bash
cd ~/pigsty
vagrant/config [spec] [image] [scale] [provider]

# 示例
vagrant/config meta                # 使用 1 节点规格，默认 RockyLinux 9.7（EL9）镜像
vagrant/config dual el9            # 使用 2 节点规格，EL9 镜像
vagrant/config trio d12 2          # 使用 3 节点规格，Debian 12.13 镜像，双倍资源
vagrant/config full u22 4          # 使用 4 节点规格，Ubuntu 22 镜像，4 倍资源
vagrant/config simu u24 1 libvirt  # 使用 20 节点规格，Ubuntu 24 镜像，libvirt 提供商
```

### 镜像别名

config 脚本支持多种镜像别名：

| 发行版 | 别名 | Vagrant Box |
|--------|------|-------------|
| AlmaLinux 8 | `el8`, `rocky8` | `cloud-image/almalinux-8` |
| Rocky 9 | `el9`, `rocky9`, `el` | `bento/rockylinux-9` |
| AlmaLinux 10 | `el10`, `rocky10` | `cloud-image/almalinux-10` |
| Debian 12 | `d12`, `debian12` | `cloud-image/debian-12` |
| Debian 13 | `d13`, `debian13` | `cloud-image/debian-13` |
| Ubuntu 22.04 | `u22`, `ubuntu22`, `ubuntu` | `cloud-image/ubuntu-22.04` |
| Ubuntu 24.04 | `u24`, `ubuntu24` | `bento/ubuntu-24.04` |

### 资源缩放

您可以使用环境变量 `VM_SCALE` 来调整资源倍数，默认值为 `1`：

```bash
VM_SCALE=2 vagrant/config meta     # 将 meta 规格的 CPU/内存资源翻倍
```

例如，使用 `VM_SCALE=4` 配置 meta 规格，会将默认的 2c4g 调整为 8c16g：

```ruby
Specs = [
  { "name" => "meta" , "ip" => "10.10.10.10", "cpu" => "8" , "mem" => "16384" , "image" => "bento/rockylinux-9" },
]
```

{{% alert title="simu 规格不支持缩放" color="info" %}}
`simu` 规格不支持资源缩放，scale 参数会被自动忽略，因为其资源配置已经针对仿真场景优化。
{{% /alert %}}


----------------

## 虚拟机管理

Pigsty 提供了一系列 Makefile 快捷方式来管理虚拟机：

```bash
make           # 等于 make start
make new       # 销毁现有虚拟机，创建新的虚拟机
make ssh       # 将虚拟机 SSH 配置写入 ~/.ssh/（创建后必须执行）
make dns       # 将虚拟机 DNS 记录写入 /etc/hosts（可选）
make start     # 启动虚拟机并配置 SSH（up + ssh）
make up        # 使用 vagrant up 启动虚拟机
make halt      # 关闭虚拟机（别名：down, dw）
make clean     # 销毁虚拟机（别名：del, destroy）
make status    # 显示虚拟机状态（别名：st）
make pause     # 暂停虚拟机（别名：suspend）
make resume    # 恢复虚拟机
make nuke      # 使用 virsh 销毁所有虚拟机和卷（仅 libvirt）
make info      # 显示 libvirt 信息（虚拟机、网络、存储卷）
```


----------------

## SSH 密钥

Pigsty Vagrant 模板默认使用您的 `~/.ssh/id_rsa[.pub]` 作为虚拟机的 SSH 密钥。

在开始之前，请确保您有一个有效的 SSH 密钥对。如果没有，可以使用以下命令生成：

```bash
ssh-keygen -t rsa -b 2048 -N '' -f ~/.ssh/id_rsa -q
```


----------------

## 支持的镜像

Pigsty 目前使用以下 Vagrant Box 进行测试：

```bash
# x86_64 / amd64
el8 :  cloud-image/almalinux-8   (EL 8.10)
el9 :  bento/rockylinux-9        (RockyLinux 9.7)
el10:  cloud-image/almalinux-10  (RockyLinux 10.1)

d12 :  cloud-image/debian-12     (Debian 12.13)
d13 :  cloud-image/debian-13     (Debian 13.3)

u22 :  cloud-image/ubuntu-22.04
u24 :  bento/ubuntu-24.04
```

对于 Apple Silicon (aarch64) 架构：

```bash
# aarch64 / arm64
el8 :  cloud-image/almalinux-8
el9 :  bento/rockylinux-9
el10:  cloud-image/almalinux-10
d12 :  cloud-image/debian-12
d13 :  cloud-image/debian-13
u22 :  cloud-image/ubuntu-22.04
u24 :  bento/ubuntu-24.04
```

您可以在 [**Vagrant Cloud**](https://app.vagrantup.com/boxes/search) 上查找对应 provider / 架构可用的 Box 镜像。


----------------

## 环境变量

您可以使用以下环境变量来控制 Vagrant 行为：

```bash
export VM_SPEC='meta'              # 规格名称
export VM_IMAGE='bento/rockylinux-9'  # 镜像名称
export VM_SCALE='1'                # 资源缩放倍数
export VM_PROVIDER='virtualbox'    # 虚拟化提供商
export VAGRANT_EXPERIMENTAL=disks  # 启用实验性磁盘功能
```


----------------

## 注意事项

{{% alert title="VirtualBox 网络配置" color="warning" %}}
使用较旧版本的 VirtualBox 作为 Vagrant 提供商时，需要额外配置才能使用 `10.x.x.x` CIDR 作为 Host-Only 网络：

```bash
echo "* 10.0.0.0/8" | sudo tee -a /etc/vbox/networks.conf
```
{{% /alert %}}

{{% alert title="第一次下载镜像较慢" color="info" %}}
第一次使用 Vagrant 启动特定操作系统时，会下载相应的 Box 镜像文件（通常 1-2 GB）。下载完成后，镜像会被缓存，后续创建虚拟机时会直接复用。
{{% /alert %}}

{{% alert title="libvirt 提供商" color="info" %}}
如果您使用 libvirt 作为提供商，可以使用 `make info` 查看虚拟机、网络和存储卷信息，使用 `make nuke` 强制销毁所有相关资源。
{{% /alert %}}
