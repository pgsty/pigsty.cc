---
title: "Linux 软件源"
icon: fas fa-warehouse
description: 用于交付 PostgreSQL 扩展的基础设施和软件包仓库
weight: 5400
---

Pigsty 为主流 [Linux 发行版](/docs/ref/linux/) 提供了 PostgreSQL 扩展仓库，其中包含 340+ 额外的 PostgreSQL 扩展。

Pigsty 扩展仓库旨在与 [PGDG](https://www.postgresql.org/download/linux/) 官方仓库配合使用，共同使用时可以安装多达 [400+ PostgreSQL 扩展](https://ext.pigsty.io) 。

|   PGSQL 仓库   |                      描述                       |              链接               |
|:------------:|:---------------------------------------------:|:-----------------------------:|
| **PGSQL** 仓库 | [Pigsty PG 扩展仓库](/docs/repo/pgsql/)，340+ 额外扩展 | [pgsql.md](/docs/repo/pgsql/) |
| **INFRA** 仓库 |  [Pigsty 基础设施仓库](/docs/repo/infra/)，监控/工具软件   | [infra.md](/docs/repo/infra/) |
| **PGDG** 仓库  |     [PGDG 官方仓库镜像](/docs/repo/pgdg/)，PG 内核     |  [pgdg.md](/docs/repo/pgdg/)  |
|  **GPG** 密钥  |        [GPG 公钥](/docs/repo/gpg/)，签名验证         |   [gpg.md](/docs/repo/gpg/)   |
{.full-width}


---------

## 兼容性概览

|   系统 / 架构    |  代码  |                  x86_64                   |                  aarch64                  |
|:------------:|:----:|:-----------------------------------------:|:-----------------------------------------:|
|     EL8      | el8  | **18** **17** **16** **15** **14** **13** | **18** **17** **16** **15** **14** **13** |
|     EL9      | el9  | **18** **17** **16** **15** **14** **13** | **18** **17** **16** **15** **14** **13** |
|     EL10     | el10 | **18** **17** **16** **15** **14** **13** | **18** **17** **16** **15** **14** **13** |
|  Debian 12   | d12  | **18** **17** **16** **15** **14** **13** | **18** **17** **16** **15** **14** **13** |
|  Debian 13   | d13  | **18** **17** **16** **15** **14** **13** | **18** **17** **16** **15** **14** **13** |
| Ubuntu 22.04 | u22  | **18** **17** **16** **15** **14** **13** | **18** **17** **16** **15** **14** **13** |
| Ubuntu 24.04 | u24  | **18** **17** **16** **15** **14** **13** | **18** **17** **16** **15** **14** **13** |
{.full-width}


---------

## 快速上手

你可以使用 [**`pig`**](/docs/pig/) 命令行工具来方便地启用 infra 和 pgsql 仓库：

{{< tabpane text=true persist=header >}}
{{% tab header="默认" %}}
```bash
curl https://repo.pigsty.io/pig | bash      # 下载安装最新版本的 pig 命令行工具
pig repo add all -u                         # 添加 Linux / PGDG / Pigsty 仓库并更新缓存
```
{{% /tab %}}
{{% tab header="镜像" %}}
```bash
curl https://repo.pigsty.cc/pig | bash      # 从中国镜像站下载安装最新版本的 pig 命令行工具
pig repo add -u                             # 添加 Linux / PGDG / Pigsty 仓库并更新缓存
```
{{% /tab %}}
{{< /tabpane >}}


---------

## 手工添加

您也可以使用经典的 `apt` / `dnf` / `yum` 命令，将仓库手工添加到系统中。

{{< tabpane text=true persist=header >}}
{{% tab header="APT" %}}
```bash
# 将 Pigsty 的 GPG 公钥添加到系统密钥链中，以验证软件包签名
curl -fsSL https://repo.pigsty.io/key | sudo gpg --dearmor -o /etc/apt/keyrings/pigsty.gpg

# 获取 Debian / Ubuntu 发行版的代号（jammy, focal, bullseye, bookworm），并将相应的上游仓库地址写入 /etc/apt/sources.list.d/ 中
distro_codename=$(lsb_release -cs)
sudo tee /etc/apt/sources.list.d/pigsty-io.list > /dev/null <<EOF
deb [signed-by=/etc/apt/keyrings/pigsty.gpg] https://repo.pigsty.io/apt/infra generic main
deb [signed-by=/etc/apt/keyrings/pigsty.gpg] https://repo.pigsty.io/apt/pgsql/${distro_codename} ${distro_codename} main
EOF

# 刷新 APT 仓库缓存
sudo apt update
```
{{% /tab %}}
{{% tab header="YUM" %}}
```bash
# 将 Pigsty 的 GPG 公钥添加到系统密钥链中，以验证软件包签名
curl -fsSL https://repo.pigsty.io/key | sudo tee /etc/pki/rpm-gpg/RPM-GPG-KEY-pigsty >/dev/null

# 将 Pigsty 仓库的定义写入 /etc/yum.repos.d/ 目录中
sudo tee /etc/yum.repos.d/pigsty-io.repo > /dev/null <<-'EOF'
[pigsty-infra]
name=Pigsty Infra for $basearch
baseurl=https://repo.pigsty.io/yum/infra/$basearch
skip_if_unavailable = 1
enabled = 1
priority = 1
gpgcheck = 1
gpgkey=file:///etc/pki/rpm-gpg/RPM-GPG-KEY-pigsty
module_hotfixes=1

[pigsty-pgsql]
name=Pigsty PGSQL For el$releasever.$basearch
baseurl=https://repo.pigsty.io/yum/pgsql/el$releasever.$basearch
skip_if_unavailable = 1
enabled = 1
priority = 1
gpgcheck = 1
gpgkey=file:///etc/pki/rpm-gpg/RPM-GPG-KEY-pigsty
module_hotfixes=1
EOF

# 刷新 YUM 仓库缓存
sudo yum makecache;
```
{{% /tab %}}
{{< /tabpane >}}

所有的 RPM / DEB 软件包都使用指纹为 (`B9BD8B20`) 的 [GPG 密钥](/docs/repo/gpg/) 进行签名，以确保软件包的完整性。


---------

## 仓库组成

Pigsty 仓库由两个主要部分组成：[**INFRA**](/docs/repo/infra/) 和 [**PGSQL**](/docs/repo/pgsql/)，提供 `x86_64` 和 `aarch64` 架构下的 DEB / RPM 包。

[**INFRA**](/docs/repo/infra/) 仓库中的软件包与 PostgreSQL / Linux 大版本无关，包括 Prometheus、Grafana、以及一些 PostgreSQL 管理工具，
通常由 Go 等语言编写的，只有芯片架构（`x86_64` | `aarch64`）的区别。

| Linux  |  软件包  | x86_64 | aarch64 |
|:------:|:-----:|:------:|:-------:|
|   EL   | `rpm` |   ✓    |    ✓    |
| Debian | `deb` |   ✓    |    ✓    |
{.full-width}

[**PGSQL**](/docs/repo/pgsql/) 仓库中的软件包通常特定于 Linux 大版本（例如 el9, d12），也通常与 PostgreSQL 大版本相关（例如 pg17，pg16 ）。
这个仓库中包含了 PostgreSQL 内核分支、扩展插件与工具，通常由类 C 语言编写。


---------

## 兼容性详情

|       OS 系统代码        | 厂商     | 大版本 |   小版本   | 全名                |              PG 大版本              |   备注   |
|:--------------------:|:-------|:---:|:-------:|:------------------|:---------------------------------:|:------:|
|    `el7.x86_64`      | EL     |  7  |   7.9   | CentOS 7 x86      |    15 14 13                       |  EOL   |
|    `el8.x86_64`      | EL     |  8  |  8.10   | RockyLinux 8 x86  | **18** **17** **16** **15** **14** **13** | 即将 EOL |
|    `el8.aarch64`     | EL     |  8  |  8.10   | RockyLinux 8 ARM  | **18** **17** **16** **15** **14** **13** | 即将 EOL |
|    `el9.x86_64`      | EL     |  9  |   9.6   | RockyLinux 9 x86  | **18** **17** **16** **15** **14** **13** |   OK   |
|    `el9.aarch64`     | EL     |  9  |   9.6   | RockyLinux 9 ARM  | **18** **17** **16** **15** **14** **13** |   OK   |
|    `el10.x86_64`     | EL     | 10  |  10.0   | RockyLinux 10 x86 | **18** **17** **16** **15** **14** **13** |   OK   |
|    `el10.aarch64`    | EL     | 10  |  10.0   | RockyLinux 10 ARM | **18** **17** **16** **15** **14** **13** |   OK   |
|    `d11.x86_64`      | Debian | 11  |  11.11  | Debian 11 x86     |    17 16 15 14 13                 |  EOL   |
|    `d11.aarch64`     | Debian | 11  |  11.11  | Debian 11 ARM     |    17 16 15 14 13                 |  EOL   |
|    `d12.x86_64`      | Debian | 12  |  12.12  | Debian 12 x86     | **18** **17** **16** **15** **14** **13** |   OK   |
|    `d12.aarch64`     | Debian | 12  |  12.12  | Debian 12 ARM     | **18** **17** **16** **15** **14** **13** |   OK   |
|    `d13.x86_64`      | Debian | 13  |  13.1   | Debian 13 x86     | **18** **17** **16** **15** **14** **13** |   OK   |
|    `d13.aarch64`     | Debian | 13  |  13.1   | Debian 13 ARM     | **18** **17** **16** **15** **14** **13** |   OK   |
|    `u20.x86_64`      | Ubuntu | 20  | 20.04.6 | Ubuntu 20.04 x86  |    17 16 15 14 13                 |  EOL   |
|    `u20.aarch64`     | Ubuntu | 20  | 20.04.6 | Ubuntu 20.04 ARM  |    17 16 15 14 13                 |  EOL   |
|    `u22.x86_64`      | Ubuntu | 22  | 22.04.5 | Ubuntu 22.04 x86  | **18** **17** **16** **15** **14** **13** |   OK   |
|    `u22.aarch64`     | Ubuntu | 22  | 22.04.5 | Ubuntu 22.04 ARM  | **18** **17** **16** **15** **14** **13** |   OK   |
|    `u24.x86_64`      | Ubuntu | 24  | 24.04.3 | Ubuntu 24.04 x86  | **18** **17** **16** **15** **14** **13** |   OK   |
|    `u24.aarch64`     | Ubuntu | 24  | 24.04.3 | Ubuntu 24.04 ARM  | **18** **17** **16** **15** **14** **13** |   OK   |
{.full-width}


---------

## 源代码

用于构建仓库内软件的源代码文件位于以下仓库中：

- https://github.com/pgsty/rpm
- https://github.com/pgsty/deb
- https://github.com/pgsty/infra-pkg

