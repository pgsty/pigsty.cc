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
您可以将其视作 Linux- 原生版本的 Docker 镜像。


----------------

## 概览

**离线软件包** 打包了所有需要的 RPM/DEB 软件包及其依赖；它是常规 [**安装**](/docs/setup/install/) 后的本地 APT / YUM 仓库的快照。

在 [**严肃的生产环境部署**](/docs/deploy) 中，我们 **强烈推荐** 您使用离线安装包进行安装。
它可以确保后续所有新节点的软件版本与现有环境保持一致，
并且可以避免上游变动导致的在线安装失败（相当常见！）
确保您能独立自主运行它至地老天荒。

> [!TIP] 使用离线软件包的优点
> - 可以简单方便的在互联网隔离的环境中交付实施。
> - 一次性预下载所有软件包，可以有效加速安装过程。
> - 无需担心上游依赖项的变动导致依赖错漏/安装失败。
> - 如果有多个节点，那么所有软件包只需要下载一次，节省带宽资源。
> - 可以通过本地仓库确保所有节点的软件版本一致，实行统一版本管理

> [!WARNING] 使用离线软件包的缺点
> - 离线安装包针对 **特定的操作系统小版本制作**，通常不能跨版本使用
> - 仅为制作时刻的快照，可能不包含最新的更新和操作系统安全补丁。
> - `v4.5.0` 公开离线包约为 1.6～2.0 GB（压缩后）；在线安装按需下载，更节省空间。


------

## 离线软件包

当前公开稳定版 [**v4.5.0**](https://github.com/pgsty/pigsty/releases/tag/v4.5.0) 提供 **14 个离线包**，覆盖七个操作系统基线与 `x86_64`、`aarch64` 两种架构。以下为该版本发布时的验证基线；选择时应同时匹配 Pigsty 版本、系统小版本和 CPU 架构。

| Linux 发行版 | 系统代码 | 基线小版本 | x86_64 | aarch64 |
|:------------|:---------|:-----------|:-------|:--------|
| Rocky Linux 9 | `el9` | `9.8` | [**下载（1.95 GB）**](https://github.com/pgsty/pigsty/releases/download/v4.5.0/pigsty-pkg-v4.5.0.el9.x86_64.tgz) | [**下载（1.83 GB）**](https://github.com/pgsty/pigsty/releases/download/v4.5.0/pigsty-pkg-v4.5.0.el9.aarch64.tgz) |
| Rocky Linux 10 | `el10` | `10.2` | [**下载（1.91 GB）**](https://github.com/pgsty/pigsty/releases/download/v4.5.0/pigsty-pkg-v4.5.0.el10.x86_64.tgz) | [**下载（1.79 GB）**](https://github.com/pgsty/pigsty/releases/download/v4.5.0/pigsty-pkg-v4.5.0.el10.aarch64.tgz) |
| Debian 12 | `d12` | `12.15` | [**下载（1.74 GB）**](https://github.com/pgsty/pigsty/releases/download/v4.5.0/pigsty-pkg-v4.5.0.d12.x86_64.tgz) | [**下载（1.59 GB）**](https://github.com/pgsty/pigsty/releases/download/v4.5.0/pigsty-pkg-v4.5.0.d12.aarch64.tgz) |
| Debian 13 | `d13` | `13.6` | [**下载（1.87 GB）**](https://github.com/pgsty/pigsty/releases/download/v4.5.0/pigsty-pkg-v4.5.0.d13.x86_64.tgz) | [**下载（1.72 GB）**](https://github.com/pgsty/pigsty/releases/download/v4.5.0/pigsty-pkg-v4.5.0.d13.aarch64.tgz) |
| Ubuntu 22.04 | `u22` | `22.04.5` | [**下载（1.97 GB）**](https://github.com/pgsty/pigsty/releases/download/v4.5.0/pigsty-pkg-v4.5.0.u22.x86_64.tgz) | [**下载（1.84 GB）**](https://github.com/pgsty/pigsty/releases/download/v4.5.0/pigsty-pkg-v4.5.0.u22.aarch64.tgz) |
| Ubuntu 24.04 | `u24` | `24.04.4` | [**下载（1.76 GB）**](https://github.com/pgsty/pigsty/releases/download/v4.5.0/pigsty-pkg-v4.5.0.u24.x86_64.tgz) | [**下载（1.64 GB）**](https://github.com/pgsty/pigsty/releases/download/v4.5.0/pigsty-pkg-v4.5.0.u24.aarch64.tgz) |
| Ubuntu 26.04 | `u26` | `26.04.0` | [**下载（1.88 GB）**](https://github.com/pgsty/pigsty/releases/download/v4.5.0/pigsty-pkg-v4.5.0.u26.x86_64.tgz) | [**下载（1.77 GB）**](https://github.com/pgsty/pigsty/releases/download/v4.5.0/pigsty-pkg-v4.5.0.u26.aarch64.tgz) |
{.full-width}

发布页面还提供源码包、`checksums` 和对应的 `.asc` GPG 签名，验证方法见 [**GPG 签名**](/docs/repo/gpg/#github-发布资产验证)。旧版离线包可从 [**历史发布页面**](https://github.com/pgsty/pigsty/releases) 获取。

以下 SHA-256 来自 [**GitHub 发布资产元数据**](https://api.github.com/repos/pgsty/pigsty/releases/tags/v4.5.0)（核验于 2026-10-13）：

```text
962e38f5e8cadb00e9a30939227d431792e7c522c2ec509b3724f0751d2f9e41  pigsty-pkg-v4.5.0.d12.aarch64.tgz
5d88afde12a501ac2e7459a6d95a47d8f283860145235a1120d66655917858f8  pigsty-pkg-v4.5.0.d12.x86_64.tgz
46810463ad4b434f8541476aadaadfd65ea71f5c9e71f1f4b59b6376531a0a56  pigsty-pkg-v4.5.0.d13.aarch64.tgz
8e6193c3640ac8808c6cfcdfab4489dbf7fda0de6d71009db33f57179a73f39f  pigsty-pkg-v4.5.0.d13.x86_64.tgz
8303a7cbce51db378859fec0a13e161ff270453fb34cffa6e782b6d524ba4b7d  pigsty-pkg-v4.5.0.el10.aarch64.tgz
18abfd6dea933572b7345d1e41c7537370ec49da278156b5bb095ae2c16f0589  pigsty-pkg-v4.5.0.el10.x86_64.tgz
91b2a9ae80341e39c846a75c76e093cbfe52bcfb3fff8b2e4bef0fe9658a13f8  pigsty-pkg-v4.5.0.el9.aarch64.tgz
434f9a79c74ca4849597d0a28d83c98637aa5a5f0d75553099fc3cec8677121e  pigsty-pkg-v4.5.0.el9.x86_64.tgz
9520fb28bba836bf3b8dd794c21ede1b94406e49c99403f9c3f6698bf864e9bd  pigsty-pkg-v4.5.0.u22.aarch64.tgz
ec6642444908d1acdb067ca946832978600e68ea92a5951c3ba6ed5d9e716c5e  pigsty-pkg-v4.5.0.u22.x86_64.tgz
36bcb8297e0a21178fadf9764c53a7e09f0cf998f60877148933fb22d9a10b6d  pigsty-pkg-v4.5.0.u24.aarch64.tgz
625f9f606f13d06ee87d4473a408a4170a8de96a6c98b569f7908647e4111f67  pigsty-pkg-v4.5.0.u24.x86_64.tgz
fbd4d01ce39e13016343badc3258b32e0ce5088b1604b0f62ef8b4aafca82d65  pigsty-pkg-v4.5.0.u26.aarch64.tgz
1d6cbac50ef5034c3cfea0dd11c53ea1cf4b4b8b389086b1b8d735d8e1c0e122  pigsty-pkg-v4.5.0.u26.x86_64.tgz
```

将上述内容保存为 `SHA256SUMS` 后，在下载目录中、重命名文件前运行 `sha256sum --ignore-missing -c SHA256SUMS`。发布页中的 `checksums` 文件使用 MD5，格式与上面的 SHA-256 列表不同。

> [!WARNING] 离线软件包面向特定的 Linux 操作系统小版本
> 跨小版本可能因 OpenSSL 或其他系统库变化导致安装失败。若目标基线不匹配，请在相同操作系统的小版本与架构上 [**制作离线包**](#制作离线软件包)，或联系 [**支持服务**](/docs/about/service/)。



----------------

## 使用离线软件包

**离线安装的步骤**：

1. 下载与目标系统匹配的 Pigsty 离线软件包，将其放到 **`/var/tmp/pkg.tgz`**
2. 下载与离线包版本一致的 Pigsty 源码包，解压并进入目录（假设解压到家目录：**`cd ~/pigsty`**）
3. [**`./bootstrap -p /var/tmp/pkg.tgz`**](#bootstrap)，它将解压软件包并配置使用本地仓库（并从中离线安装 [**`ansible`**](/docs/setup/playbook)）
4. **`./configure -g -c rich`**，您可以直接使用配置好离线安装的模板 [**`rich`**](/docs/conf/rich)，或者自行配置
5. 照常运行 **`./deploy.yml`**，从本地仓库安装核心链路所需软件；其他可选模块仍需执行各自的剧本

{{< asciinema file="demo/install-offline.cast" markers="0:上传软件包,55:解压与使用,66:配置,80:部署" speed="1.3" autoplay="true" loop="true" >}}

> [!WARNING]
> 如果出现 “No package nginx available” 等错误，先核对离线包版本、系统与架构，并检查 `/www/pigsty/repo_complete` 和仓库内容。当前开发源码的 `bootstrap` 在解包失败或缺少完成标记时会清理不完整输出并报错；已有有效仓库则直接复用。需要更换已有仓库时，请先保留旧仓库再重新解包。

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
您可以使用离线软件包作为基础，并在线补足不匹配的增量软件包。

在同一 Linux 大版本与架构内，如果离线包缺少当前系统需要的依赖，可在具有互联网访问的构建节点上执行 `make repo-build` 补充软件包，再重新制作离线包并验证安装。
这种方式依然依赖上游仓库；只有完成下载、重建元数据和安装验证后的制品，才能用于隔离环境。




-------

## 制作离线软件包

如果您选择的操作系统不在默认列表中，您可以使用内置的 [**`cache.yml`**](https://github.com/pgsty/pigsty/blob/main/cache.yml) 剧本制作自己的离线软件包：

1. 找到一台运行完全相同操作系统版本，且可以访问互联网的节点
2. 使用 [**`rich`**](/docs/conf/rich) 配置模板执行 [**在线安装**](/docs/setup/install/)（`./configure -c rich`），并确认目标 Infra 节点的 `/www/pigsty` 本地仓库已经生成；若尚未生成，可先对该节点执行 `./infra.yml -t repo`
3. 选择一个已有本地仓库的 Infra 节点，制作并取回离线包。以下示例输出到 `/var/tmp/pigsty-dist/`：

   ```bash
   cd ~/pigsty
   ./cache.yml -l <infra-host> -e 'cache_pkg_dir=/var/tmp/pigsty-dist/${version}'
   ```

4. 从管理节点的 `/var/tmp/pigsty-dist/<version>/` 取出 `pigsty-pkg-<version>.<os>.<arch>.tgz`，传到离线环境的 `/var/tmp/pkg.tgz`，再运行 `./bootstrap -p /var/tmp/pkg.tgz`。

管理节点与目标节点都需要 rsync。同系统、同架构的节点生成相同文件名，因此每次只选择一个对应平台的构建节点。

`cache.yml` 的主要参数如下，可使用额外变量覆盖：

| 参数               | 默认值                                       | 说明                     |
|:-----------------|:------------------------------------------|:-----------------------|
| `cache_pkg_name` | `pigsty-pkg-${version}.${os}.${arch}.tgz` | 离线包文件名模板               |
| `cache_pkg_dir`  | `dist/${version}`                         | 管理节点上的输出目录             |
| `cache_tmp_dir`  | `/var/tmp`                                | 开发版本新增；目标节点生成归档的临时目录，覆盖时需先创建。v4.5.0 固定使用 `/tmp` |
| `cache_repo`     | `pigsty`                                  | 从目标节点打包的本地仓库；多个仓库用逗号分隔 |

输出目录同时包含 MD5 格式的 `checksums` 校验文件。源码发布包需另外准备，`cache.yml` 不会自动从工作树制作源码归档。

我们也提供 [**付费服务**](/docs/about/service/)，按指定 Linux 基线制作并验证离线软件包。



----------------

## Bootstrap

Pigsty 依赖 ansible 执行剧本，这个脚本负责用各种方式来确保 ansible 正确安装。

```bash
./bootstrap       # 确保 ansible 正确安装（如果有离线包，优先使用离线安装并解包使用）
```

通常在两种情况下，你需要运行这个脚本：

- 你不是通过 [**安装脚本**](/docs/setup/install#安装) 来安装 Pigsty 的，而是通过下载，`git clone` 源码包的方式安装的，因此没有安装 ansible。
- 你准备通过离线软件包来安装 Pigsty，需要使用这个脚本来从离线软件包中安装 ansible。

当前开发源码的 `bootstrap` 默认检测 `/var/tmp/pkg.tgz`；仅当默认路径不存在时才回退到旧路径 `/tmp/pkg.tgz`。`v4.5.0` 发布版默认仍是 `/tmp/pkg.tgz`，因此跨版本操作时建议始终显式指定：

```bash
./bootstrap -p /var/tmp/pkg.tgz
```

如果存在则解压使用它，然后从里面安装 ansible。
如果离线包不存在，它会尝试从互联网安装 ansible。如果还是不行，那你就要自己想办法了！


> [!WARNING] 我的 yum/apt 仓库文件跑到哪里去了？
> 引导程序默认会 **移走** 现有软件源配置，以确保只有所需的仓库被启用。
> 您可以在 `/etc/yum.repos.d/backup` (EL) 或 `/etc/apt/backup` (Debian / Ubuntu) 中找回它们。
>
> 如果您想在 `bootstrap` 过程中保留现有软件源配置，请使用 `-k|--keep` 参数。
>
> ```bash
> ./bootstrap -k # 或 --keep
> ```
