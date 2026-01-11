---
title: 离线安装
weight: 280
description: 在没有互联网访问的环境中，使用离线安装包安装 Pigsty
icon: fa-solid fa-download
module: [PIGSTY]
categories: [教程]
---


Pigsty 默认从互联网上游 [**安装**](/docs/setup/install/) 所需软件包，但有些环境与互联网隔离。
为了解决这个问题，Pigsty 支持使用 [**离线软件包**](#离线软件包) 进行离线安装。
您可以将其视作 Linux-原生版本的 Docker 镜像。


----------------

## 概览

**离线软件包** 打包了所有需要的 RPM/DEB 软件包及其依赖；它是常规 [**安装**](/docs/setup/install/) 后的本地 APT / YUM 仓库的快照。

在 [**严肃的生产环境部署**](/docs/deploy) 中，我们 **强烈推荐** 您使用离线安装包进行安装。
它可以确保后续所有新节点的软件版本与现有环境保持一致，
并且可以避免上游变动导致的在线安装失败（相当常见！）
确保您能独立自主运行它至地老天荒。

{{% alert title="使用离线软件包的优点" color="success" %}}
- 可以简单方便的在互联网隔离的环境中交付实施。
- 一次性预下载所有软件包，可以有效加速安装过程。
- 无需担心上游依赖项的变动导致依赖错漏/安装失败。
- 如果有多个节点，那么所有软件包只需要下载一次，节省带宽资源。
- 可以通过本地仓库确保所有节点的软件版本一致，实行统一版本管理
  {{% /alert %}}

{{% alert title="使用离线软件包的缺点" color="warning" %}}
- 离线安装包针对 **特定的操作系统小版本制作**，通常不能跨版本使用
- 仅为制作时刻的快照，可能不包含最新的更新和操作系统安全补丁。
- 离线安装包通常约 1GB 左右，而在线安装则是按需下载，更节省空间。 
{{% /alert %}}


------
## 离线软件包

我们通常为以下 [**Linux 发行版**](/docs/ref/linux/) 发布离线软件包，使用较新的操作系统次要版本。

| Linux 发行版             | 系统代码           | 小版本       | 软件包                                                                                                                                     |
|:----------------------|:---------------|:----------|:----------------------------------------------------------------------------------------------------------------------------------------|
| RockyLinux 8 x86_64   | `el8.x86_64`   | `8.10`    | [**`pigsty-pkg-v4.0.0.el8.x86_64.tgz`**](https://github.com/pgsty/pigsty/releases/download/v4.0.0/pigsty-pkg-v4.0.0.el8.x86_64.tgz)     |
| RockyLinux 8 aarch64  | `el8.aarch64`  | `8.10`    | [**`pigsty-pkg-v4.0.0.el8.aarch64.tgz`**](https://github.com/pgsty/pigsty/releases/download/v4.0.0/pigsty-pkg-v4.0.0.el8.aarch64.tgz)   |
| RockyLinux 9 x86_64   | `el9.x86_64`   | `9.6`     | [**`pigsty-pkg-v4.0.0.el9.x86_64.tgz`**](https://github.com/pgsty/pigsty/releases/download/v4.0.0/pigsty-pkg-v4.0.0.el9.x86_64.tgz)     |
| RockyLinux 9 aarch64  | `el9.aarch64`  | `9.6`     | [**`pigsty-pkg-v4.0.0.el9.aarch64.tgz`**](https://github.com/pgsty/pigsty/releases/download/v4.0.0/pigsty-pkg-v4.0.0.el9.aarch64.tgz)   |
| RockyLinux 10 x86_64  | `el10.x86_64`  | `10.0`    | [**`pigsty-pkg-v4.0.0.el10.x86_64.tgz`**](https://github.com/pgsty/pigsty/releases/download/v4.0.0/pigsty-pkg-v4.0.0.el10.x86_64.tgz)   |
| RockyLinux 10 aarch64 | `el10.aarch64` | `10.0`    | [**`pigsty-pkg-v4.0.0.el10.aarch64.tgz`**](https://github.com/pgsty/pigsty/releases/download/v4.0.0/pigsty-pkg-v4.0.0.el10.aarch64.tgz) |
| Debian 12 x86_64      | `d12.x86_64`   | `12.11`   | [**`pigsty-pkg-v4.0.0.d12.x86_64.tgz`**](https://github.com/pgsty/pigsty/releases/download/v4.0.0/pigsty-pkg-v4.0.0.d12.x86_64.tgz)     |
| Debian 12 aarch64     | `d12.aarch64`  | `12.11`   | [**`pigsty-pkg-v4.0.0.d12.aarch64.tgz`**](https://github.com/pgsty/pigsty/releases/download/v4.0.0/pigsty-pkg-v4.0.0.d12.aarch64.tgz)   |
| Debian 13 x86_64      | `d13.x86_64`   | `13.2`    | [**`pigsty-pkg-v4.0.0.d13.x86_64.tgz`**](https://github.com/pgsty/pigsty/releases/download/v4.0.0/pigsty-pkg-v4.0.0.d13.x86_64.tgz)     |
| Debian 13 aarch64     | `d13.aarch64`  | `13.2`    | [**`pigsty-pkg-v4.0.0.d13.aarch64.tgz`**](https://github.com/pgsty/pigsty/releases/download/v4.0.0/pigsty-pkg-v4.0.0.d13.aarch64.tgz)   |
| Ubuntu 24.04 x86_64   | `u24.x86_64`   | `24.04.2` | [**`pigsty-pkg-v4.0.0.u24.x86_64.tgz`**](https://github.com/pgsty/pigsty/releases/download/v4.0.0/pigsty-pkg-v4.0.0.u24.x86_64.tgz)     |
| Ubuntu 24.04 aarch64  | `u24.aarch64`  | `24.04.2` | [**`pigsty-pkg-v4.0.0.u24.aarch64.tgz`**](https://github.com/pgsty/pigsty/releases/download/v4.0.0/pigsty-pkg-v4.0.0.u24.aarch64.tgz)   |
| Ubuntu 22.04 x86_64   | `u22.x86_64`   | `22.04.5` | [**`pigsty-pkg-v4.0.0.u22.x86_64.tgz`**](https://github.com/pgsty/pigsty/releases/download/v4.0.0/pigsty-pkg-v4.0.0.u22.x86_64.tgz)     |
| Ubuntu 22.04 aarch64  | `u22.aarch64`  | `22.04.5` | [**`pigsty-pkg-v4.0.0.u22.aarch64.tgz`**](https://github.com/pgsty/pigsty/releases/download/v4.0.0/pigsty-pkg-v4.0.0.u22.aarch64.tgz)   |
{.full-width}

如果您使用的是上述列表中给出的操作系统（精确匹配的小版本），那么建议使用离线软件包。
Pigsty 为这些系统提供了开箱即用的预制离线软件包，在 GitHub 上提供免费下载。

您可以从 [**GitHub 发布页面**](https://github.com/pgsty/pigsty/releases/latest) 找到这些软件包：

```bash
6a26fa44f90a16c7571d2aaf0e997d07  pigsty-v4.0.0.tgz
537839201c536a1211f0b794482d733b  pigsty-pkg-v4.0.0.el9.x86_64.tgz
85687cb56517acc2dce14245452fdc05  pigsty-pkg-v4.0.0.el9.aarch64.tgz
a333e8eb34bf93f475c85a9652605139  pigsty-pkg-v4.0.0.el10.x86_64.tgz
4b98b463e2ebc104c35ddc94097e5265  pigsty-pkg-v4.0.0.el10.aarch64.tgz
4f62851c9d79a490d403f59deb4823f4  pigsty-pkg-v4.0.0.el8.x86_64.tgz
66e283c9f6bfa80654f7ed3ffb9b53e5  pigsty-pkg-v4.0.0.el8.aarch64.tgz
f7971d9d6aab1f8f307556c2f64b701c  pigsty-pkg-v4.0.0.d12.x86_64.tgz
c4d870e5ef61ed05724c15fbccd1220b  pigsty-pkg-v4.0.0.d12.aarch64.tgz
408991c5ff028b5c0a86fac804d64b93  pigsty-pkg-v4.0.0.d13.x86_64.tgz
8d7c9404b97a11066c00eb7fc1330181  pigsty-pkg-v4.0.0.d13.aarch64.tgz
2a25eff283332d9006854f36af6602b2  pigsty-pkg-v4.0.0.u24.x86_64.tgz
a4fb30148a2d363bbfd3bec0daa14ab6  pigsty-pkg-v4.0.0.u24.aarch64.tgz
87bb91ef703293b6ec5b77ae3bb33d54  pigsty-pkg-v4.0.0.u22.x86_64.tgz
5c81bdaa560dad4751840dec736fe404  pigsty-pkg-v4.0.0.u22.aarch64.tgz
```

{{% alert title="离线软件包是为特定的 Linux 操作系统小版本制作的" color="warning" %}}

当操作系统小版本不匹配时，有概率能用，也有概率失败，我们建议你不要冒险尝试。

请务必注意，Pigsty 提供的 EL9/EL10 安装包基于 9.6 / 10.0 制作，目前无法用于 9.7 / 10.1 小版本（因为 OpenSSL 版本发生变化）。
您需要在安装相同操作系统的环境中执行在线安装后制作离线安装包，或联系我们定制离线软件包。

{{% /alert %}}



----------------

## 使用离线软件包

**离线安装的步骤**：

1. 下载 Pigsty 离线软件包，将其放到 **`/tmp/pkg.tgz`**
2. 下载 Pigsty 源码包，解压并进入目录（假设解压到家目录：**`cd ~/pigsty`**）
3. [**`./bootstrap`**](#bootstrap)，它将解压软件包并配置使用本地仓库（并从中离线安装 [**`ansible`**](/docs/setup/playbook) ）
4. **`./configure -g -c rich`**，您可以直接使用配置好离线安装的模板 [**`rich`**](/docs/conf/rich)，或者自行配置
5. 照常运行 **`./deploy.yml`**，它将从本地仓库安装所有内容

{{< asciinema file="demo/install-offline.cast" markers="0:上传软件包,55:解压与使用,66:配置,80:部署" theme="solarized-light" speed="1.3" autoplay="true" loop="true" >}}


如果您想要在自己的配置中，使用已经解包配置好的离线软件包，请修改并确保以下配置项：

- [**`repo_enabled`**](/docs/infra/param#repo_enabled)：将此参数打开，设置为 **`true`**，则会构建本地软件源（在大部份配置中被显式关闭）
- [**`node_repo_modules`**](/docs/node/param#node_repo_modules)：将此参数设置为 **`local`**，则环境中所有节点都从本地软件仓库安装
  - 在大部份模板中，此参数被显式配置为：`node,infra,pgsql`，即直接从这些上游软件仓库安装。
  - 将其设置为 `local`，则会使用本地软件仓库安装所有软件包，速度最快，没有其他仓库的变数干扰。
  - 如果你想同时使用本地软件仓库和上游软件仓库，可以将其设置为 `local,node,infra,pgsql`

第一个参数如果打开，Pigsty 会创建 **本地软件仓库**，第二个参数如果包含 `local`，则环境中的所有节点会使用这个本地软件仓库。
如果只包含 `local`，那么它会成为所有节点的唯一软件源，如果你还想要从其他上游软件仓库继续安装其他软件包，可以将其他仓库模块名称也添加进去，例如 `local,node,infra,pgsql`。

**混合安装模式**

如果您的环境有互联网访问，那么有一种混合方法可以融合离线安装与在线安装的优点。
您可以可以使用离线软件包作为基础，并在线补足不匹配的增量软件包。

例如，假设您使用的是 RockyLinux 9.5，但官方离线软件包是为 RockyLinux 9.6 制作的。
您可以使用 `el9` 离线软件包（虽然是针对 9.6 制作的），然后在执行正式安装前，执行 `make repo-build` 重新下载 9.5 对应的缺失软件包，
Pigsty 将从上游仓库重新下载所需的 **增量**。




-------

## 制作离线软件包

如果您选择的操作系统不在默认列表中，您可以使用内置的 [**`cache.yml`**](https://github.com/pgsty/pigsty/blob/main/cache.yml) 剧本制作自己的离线软件包：

1. 找到一台运行完全相同操作系统版本，且可以访问互联网的节点
2. 使用 [**`rich`**](/docs/conf/rich) 配置模板执行[**在线安装**](/docs/setup/install/)（`configure -c rich`）
3. `cd ~/pigsty; ./cache.yml`：制作并获取离线软件包到 `~/pigsty/dist/${version}/`
4. 将离线软件包复制到没有互联网访问的环境中（ftp、scp、usb 等），通过 `bootstrap` 解包使用

我们提供 [**付费服务**](/docs/about/service/)，提供经过测试的预制 Linux 主版本.次版本制作离线软件包（**¥200**）。



----------------

## Bootstrap

Pigsty 依赖 ansible 执行剧本，这个脚本负责用各种方式来确保 ansible 正确安装。

```bash
./bootstrap       # 确保 ansible 正确安装（如果有离线包，优先使用离线安装并解包使用）
```

通常在两种情况下，你需要运行这个脚本：

- 你不是通过 [**安装脚本**](/docs/setup/install#安装) 来安装 Pigsty 的，而是通过下载，`git clone` 源码包的方式安装的，因此没有安装 ansible。
- 你准备通过离线软件包来安装 Pigsty，需要使用这个脚本来从离线软件包中安装 ansible。

`bootstrap` 脚本将自动检测离线软件包是否存在（`-p` 指定，默认为 `/tmp/pkg.tgz`）。
如果存在则解压使用它，然后从里面安装 ansible。
如果离线包不存在，它会尝试从互联网安装 ansible。如果还是不行，那你就要自己想办法了！


{{% alert title="我的 yum/apt 仓库文件跑到哪里去了？" color="warning" %}}
引导程序默认会 **移走** 现有软件源配置，以确保只有所需的仓库被启用。
您可以在 `/etc/yum.repos.d/backup` (EL) 或 `/etc/apt/backup` (Debian / Ubuntu) 中找回它们。

如果您想在 `bootstrap` 过程中保留现有软件源配置，请使用 `-k|--keep` 参数。

```bash
./bootstrap -k # 或 --keep
```

{{% /alert %}}
