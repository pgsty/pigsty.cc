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
您可以将其视作 Linux 原生版本的 Docker 镜像。


----------------

## 概览

**离线软件包** 打包了所有需要的 RPM/DEB 软件包及其依赖；它是常规 [**安装**](/docs/setup/install/) 后的本地 APT / YUM 仓库的快照。

在 [**严肃的生产环境部署**](/docs/deploy/) 中，我们 **强烈推荐** 您使用离线安装包进行安装。
它可以确保后续所有新节点的软件版本与现有环境保持一致，
并且可以避免上游变动导致的在线安装失败（相当常见！），
确保您能独立自主运行它至地老天荒。

> [!TIP] 使用离线软件包的优点
> - 可以简单方便地在互联网隔离的环境中交付实施。
> - 一次性预下载所有软件包，可以有效加速安装过程。
> - 无需担心上游依赖项的变动导致依赖错漏或安装失败。
> - 如果有多个节点，那么所有软件包只需要下载一次，节省带宽资源。
> - 可以通过本地仓库确保所有节点的软件版本一致，实行统一版本管理。

> [!WARNING] 使用离线软件包的缺点
> - 离线安装包针对 **特定的操作系统小版本制作**，通常不能跨版本使用。
> - 仅为制作时刻的快照，可能不包含最新的更新和操作系统安全补丁。
> - `v4.6.0` 公开离线包体积约为 1.6～2.0 GiB（压缩后）；在线安装按需下载，更节省空间。


------

## 离线软件包

当前公开稳定版 [**v4.6.0**](https://github.com/pgsty/pigsty/releases/tag/v4.6.0) 提供 **14 个离线包**，覆盖七个操作系统基线与 `x86_64`、`aarch64` 两种架构。以下为该版本发布时的验证基线；选择时应同时匹配 Pigsty 版本、系统小版本和 CPU 架构。

| Linux 发行版 | 系统代码 | 基线小版本 | x86_64 | aarch64 |
|:------------|:---------|:-----------|:-------|:--------|
| Rocky Linux 9 | `el9` | `9.8` | [**下载 x86_64**](https://github.com/pgsty/pigsty/releases/download/v4.6.0/pigsty-pkg-v4.6.0.el9.x86_64.tgz) | [**下载 aarch64**](https://github.com/pgsty/pigsty/releases/download/v4.6.0/pigsty-pkg-v4.6.0.el9.aarch64.tgz) |
| Rocky Linux 10 | `el10` | `10.2` | [**下载 x86_64**](https://github.com/pgsty/pigsty/releases/download/v4.6.0/pigsty-pkg-v4.6.0.el10.x86_64.tgz) | [**下载 aarch64**](https://github.com/pgsty/pigsty/releases/download/v4.6.0/pigsty-pkg-v4.6.0.el10.aarch64.tgz) |
| Debian 12 | `d12` | `12.15` | [**下载 x86_64**](https://github.com/pgsty/pigsty/releases/download/v4.6.0/pigsty-pkg-v4.6.0.d12.x86_64.tgz) | [**下载 aarch64**](https://github.com/pgsty/pigsty/releases/download/v4.6.0/pigsty-pkg-v4.6.0.d12.aarch64.tgz) |
| Debian 13 | `d13` | `13.7` | [**下载 x86_64**](https://github.com/pgsty/pigsty/releases/download/v4.6.0/pigsty-pkg-v4.6.0.d13.x86_64.tgz) | [**下载 aarch64**](https://github.com/pgsty/pigsty/releases/download/v4.6.0/pigsty-pkg-v4.6.0.d13.aarch64.tgz) |
| Ubuntu 22.04 | `u22` | `22.04.5` | [**下载 x86_64**](https://github.com/pgsty/pigsty/releases/download/v4.6.0/pigsty-pkg-v4.6.0.u22.x86_64.tgz) | [**下载 aarch64**](https://github.com/pgsty/pigsty/releases/download/v4.6.0/pigsty-pkg-v4.6.0.u22.aarch64.tgz) |
| Ubuntu 24.04 | `u24` | `24.04.5` | [**下载 x86_64**](https://github.com/pgsty/pigsty/releases/download/v4.6.0/pigsty-pkg-v4.6.0.u24.x86_64.tgz) | [**下载 aarch64**](https://github.com/pgsty/pigsty/releases/download/v4.6.0/pigsty-pkg-v4.6.0.u24.aarch64.tgz) |
| Ubuntu 26.04 | `u26` | `26.04.1` | [**下载 x86_64**](https://github.com/pgsty/pigsty/releases/download/v4.6.0/pigsty-pkg-v4.6.0.u26.x86_64.tgz) | [**下载 aarch64**](https://github.com/pgsty/pigsty/releases/download/v4.6.0/pigsty-pkg-v4.6.0.u26.aarch64.tgz) |
{.full-width .wide .expand}

如果跳板机能够访问互联网，也可以在解压源码后直接运行内置辅助脚本 [**`bin/get-pkg`**](https://github.com/pgsty/pigsty/blob/main/bin/get-pkg) 自动识别当前系统或按指定平台下载离线包到 `/var/tmp/pkg.tgz`：

```bash
bin/get-pkg                                   # 自动探测当前系统架构，从 GitHub 下载 v4.6.0 离线包到 /var/tmp/pkg.tgz
bin/get-pkg -c                                # 从中国镜像 CDN（repo.pigsty.cc）下载当前系统离线包
bin/get-pkg -c -o el9.x86_64 -p /var/tmp/pkg.tgz  # 下载指定系统与架构的离线包
```

发布页面同时提供源码包、`checksums` 校验文件及对应的 `.asc` GPG 签名，每个发布资产也在 [**GitHub 发布页面**](https://github.com/pgsty/pigsty/releases/tag/v4.6.0) 展示 SHA-256 摘要；验证方法详见 [**GPG 签名**](/docs/repo/gpg/#github-发布资产验证)。旧版离线包可从 [**历史发布页面**](https://github.com/pgsty/pigsty/releases) 获取。

> [!WARNING] 离线软件包面向特定的 Linux 操作系统小版本
> 跨小版本可能因 OpenSSL 或其他系统库变化导致安装失败。若目标基线不匹配，请在相同操作系统的小版本与架构上 [**制作离线包**](#制作离线软件包)，或联系 [**支持服务**](/docs/about/service/)。



----------------

## 使用离线软件包

**离线安装的步骤**：

1. 下载与目标系统匹配的 Pigsty 离线软件包，将其放到 **`/var/tmp/pkg.tgz`**
2. 下载与离线包版本一致的 Pigsty 源码包，解压并进入目录（假设解压到家目录：**`cd ~/pigsty`**）
3. [**`./bootstrap -p /var/tmp/pkg.tgz`**](#bootstrap)，它将解压软件包并配置使用本地仓库（并从中离线安装 [**`ansible`**](/docs/setup/playbook/)）
4. **`./configure -g -c rich`**，您可以直接使用配置好离线安装的模板 [**`rich`**](/docs/conf/rich/)，或者自行配置
5. 照常运行 **`./deploy.yml`**，从本地仓库安装核心链路所需软件；其他可选模块仍需执行各自的剧本

{{< asciinema file="demo/install-offline.cast" markers="0:上传软件包,55:解压与使用,66:配置,80:部署" speed="1.3" autoplay="true" loop="true" >}}

> [!WARNING]
> 如果出现 “No package nginx available” 等错误，请先核对离线包版本、系统与架构，并检查 `/www/pigsty/repo_complete` 和仓库内容。`bootstrap` 在解包失败或缺少完成标记时会清理不完整输出并报错；已有有效仓库则直接复用。需要更换已有仓库时，请先移走或备份旧仓库目录再重新解包。

如果您想要在自己的配置中，使用已经解包配置好的离线软件包，请修改并确保以下配置项：

- [**`repo_enabled`**](/docs/infra/param/#repo_enabled)：将此参数打开，设置为 **`true`**，则会构建本地软件源（在大部分配置中被显式关闭）
- [**`node_repo_modules`**](/docs/node/param/#node_repo_modules)：将此参数设置为 **`local`**，则环境中所有节点都从本地软件仓库安装
  - 在大部分模板中，此参数被显式配置为：`node,infra,pgsql`，即直接从这些上游软件仓库安装。
  - 将其设置为 `local`，则会使用本地软件仓库安装所有软件包，速度最快，没有其他仓库的变数干扰。
  - 如果你想同时使用本地软件仓库和上游软件仓库，可以将其设置为 `local,node,infra,pgsql`。

第一个参数如果打开，Pigsty 会创建 **本地软件仓库**，第二个参数如果包含 `local`，则环境中的所有节点会使用这个本地软件仓库。
如果只包含 `local`，那么它会成为所有节点的唯一软件源；如果你还想要从其他上游软件仓库继续安装额外软件包（例如独立拆分出的 `nginx`、`docker` 仓库模块），可以将对应模块名称一并添加进去，例如 `local,node,infra,pgsql,docker`。

**混合安装模式**

如果您的环境有互联网访问，那么有一种混合方法可以融合离线安装与在线安装的优点。
您可以使用离线软件包作为基础，并在线补足不匹配的增量软件包。

在同一 Linux 大版本与架构内，如果离线包缺少当前系统需要的依赖，可在具有互联网访问的构建节点上执行 `make repo-build` 补充软件包，再重新制作离线包并验证安装。
这种方式依然依赖上游仓库；只有完成下载、重建元数据和安装验证后的制品，才能用于隔离环境。




-------

## 制作离线软件包

如果您选择的操作系统不在默认列表中，您可以使用内置的 [**`cache.yml`**](https://github.com/pgsty/pigsty/blob/main/cache.yml) 剧本制作自己的离线软件包：

1. 找到一台运行完全相同操作系统版本，且可以访问互联网的节点。
2. 使用 [**`rich`**](/docs/conf/rich/) 配置模板执行 [**在线安装**](/docs/setup/install/)（`./configure -c rich`），并确认目标 Infra 节点的 `/www/pigsty` 本地仓库已经生成；若尚未生成，可先对该节点执行 `./infra.yml -t repo`。
3. 选择一个已有本地仓库的 Infra 节点，制作并取回离线包。以下示例输出到 `/var/tmp/pigsty-dist/`：

   ```bash
   cd ~/pigsty
   ./cache.yml -l <infra-host> -e 'cache_pkg_dir=/var/tmp/pigsty-dist/${version}'
   ```

4. 从管理节点的 `/var/tmp/pigsty-dist/<version>/` 取出 `pigsty-pkg-<version>.<os>.<arch>.tgz`，传到离线环境的 `/var/tmp/pkg.tgz`，再运行 `./bootstrap -p /var/tmp/pkg.tgz`。

将 `<infra-host>` 替换为清单中的一个 Infra 主机。`cache.yml` 会通过 `sow create --pigsty` 清理 32 位多架构包与冲突旧包（保留被其他包依赖的 `*-docs` 文档包）并重建仓库索引，在目标节点 `cache_tmp_dir` 下压缩归档并执行 `gzip -t` 完整性校验，随后通过 `delegate_to: localhost` 拉回管理节点并生成校验值。管理节点与目标节点都需要安装 `rsync`；同平台节点生成相同文件名，每次只选择一个构建节点。针对多发行版批量构建环境，仓库还提供了 `bin/boot-pkg` 辅助脚本用于并发分发与引导。

`cache.yml` 的主要参数如下，可使用额外变量覆盖：

| 参数               | 默认值                                       | 说明                     |
|:-----------------|:------------------------------------------|:-----------------------|
| `cache_pkg_name` | `pigsty-pkg-${version}.${os}.${arch}.tgz` | 离线包文件名模板               |
| `cache_pkg_dir`  | `dist/${version}`                         | 管理节点上的输出目录             |
| `cache_tmp_dir`  | `/var/tmp`                                | 目标节点生成归档的临时目录，覆盖时需预先创建 |
| `cache_repo`     | `pigsty`                                  | 从目标节点打包的本地仓库；多个仓库用逗号分隔 |
{.wide .expand}

输出目录同时包含 MD5 格式的 `checksums` 校验文件。若管理节点的 `dist/<version>/pigsty-<version>.tgz` 存在，`cache_src` 步骤会将其一并拷入仓库目录；`cache.yml` 本身不会自动从工作树打包源码归档。

我们也提供 [**付费服务**](/docs/about/service/)，按指定 Linux 基线制作并验证离线软件包，参考价格为 **¥300**，具体范围与报价请联系确认。



----------------

## Bootstrap

`bootstrap` 用于在运行 Pigsty 剧本前准备软件源与 Ansible。手工下载或克隆源码后，可以用它安装部署依赖；离线安装时，可以用它解包并启用本地软件仓库。

### 参数

| 参数 | 说明 |
|:-----|:-----|
| `-h`、`--help` | 显示用法并退出，不执行引导操作 |
| `-r <region>`、`--region <region>` | 镜像区域：`default`、`china` 或 `europe`；省略时探测网络，自动选择 `default` 或 `china`。实际镜像取决于发行版 |
| `-p <path>`、`--path <path>`、`--pkg <path>` | 指定已有离线包的路径，默认为 `/var/tmp/pkg.tgz` |
| `-k`、`--keep` | 跳过将现有软件源文件批量移到备份目录的步骤；仍可能写入或覆盖脚本生成的软件源文件，详见下文 |
{.full-width}

请先将离线包放置就绪，再通过 `-p` 指定路径（或放在默认的 `/var/tmp/pkg.tgz`）。

常用示例：

```bash
./bootstrap --help                                       # 查看参数
./bootstrap -r china                                     # 使用中国镜像
./bootstrap -p /var/tmp/pkg.tgz                          # 使用已下载的离线包
./bootstrap --region china --pkg /var/tmp/pkg.tgz --keep # 组合使用参数
```

### 执行流程

在 Linux 上，脚本按以下顺序执行：

1. 检查系统、架构和包管理器。当前用户须为 `root` 或具有免密 sudo 权限；脚本只检查 sudo 并在不满足要求时退出，不会自动修改 sudo 配置。
2. 检查当前用户免密 SSH 到 `127.0.0.1` 的能力，必要时尝试生成 `~/.ssh/id_rsa` 并将公钥加入本机的 `~/.ssh/authorized_keys`。这不会向远程节点分发密钥。
3. 准备本地仓库：若 `/www/pigsty/repo_complete` 已存在，则直接复用，传入 `-p` 也不会重新解包。否则，若指定的离线包存在，则解压到 `/www`；解压失败或缺少完成标记时，清理不完整的 `/www/pigsty` 并报错退出。
4. 若本地仓库已就绪，则配置指向 `/www/pigsty` 的本地文件软件源；否则，联网探测成功时配置所选区域的上游源，探测失败时保留现有源。随后刷新包管理器缓存。
5. 若 `ansible-playbook` 已在 `PATH` 中，则跳过安装；否则从可用软件源安装 Ansible 及引导工具，如 `unzip`、`wget`、`sshpass` 和相应平台的依赖，并检查 Ansible 是否可用。已有 Ansible 不会跳过前面的 SSH、仓库准备和缓存刷新步骤。

当未显式覆盖包路径且默认的 `/var/tmp/pkg.tgz` 不存在、但 `/tmp/pkg.tgz` 存在时，脚本会自动回退兼容 `/tmp/pkg.tgz`。建议统一使用 `/var/tmp/pkg.tgz`（避免 `/tmp` 为内存 `tmpfs` 时空间不足或重启丢失）。即使指定的离线包不存在，脚本也会继续按上述软件源选择流程尝试在线引导。

脚本不会安装或启动 Nginx；此阶段通过本地文件软件源读取离线包。完成后再运行 `./configure` 和相应的部署剧本。

### 软件源变更

> [!WARNING] 现有软件源与 `--keep` 的边界
> 在启用本地仓库或配置上游源前，默认会将现有软件源文件 **移到备份目录**：EL 为 `/etc/yum.repos.d/backup`，Debian / Ubuntu 为 `/etc/apt/backup`。脚本结束时不会自动恢复这些文件。
>
> `-k/--keep` 跳过这一步批量移走操作，但仍会写入软件源文件：本地模式会写入 `pigsty-local.repo` 或 `pigsty-local.list`；在线上游模式会写入 `/etc/yum.repos.d/el<版本>.repo` 或覆盖 `/etc/apt/sources.list`。旧的 EL7 上游配置分支仍会移走已有 `.repo` 文件，即使使用了 `-k`。
>
> ```bash
> ./bootstrap -k # 等同于 --keep
> ```

### macOS

macOS 只能作为管理节点。脚本会跳过 Linux 的 sudo、SSH、离线解包和软件源配置步骤；若未找到 Ansible，只提示手工运行 `brew install ansible`，不会自动执行 Homebrew 安装。
