---
title: Linux 兼容性
weight: 455
description: Pigsty 兼容的 Linux 操作系统发行版大版本，以及芯片架构指令集
icon: fa-brands fa-redhat
categories: [参考]
---

Pigsty 运行于 **Linux** 操作系统上，支持 **`amd64/x86_64`** 与 **`arm64/aarch64`** 架构，支持 [**EL**](#el)，[**Debian**](#debian)，[**Ubuntu**](#ubuntu) 三大主流 Linux 发行版。

Pigsty 不使用任何虚拟化容器化技术，直接运行于裸操作系统上。我们为三大主流 Linux 发行版最近两个大版本的两种架构提供支持。


## 概述

Pigsty 推荐使用的操作系统版本：RockyLinux 10.1、Ubuntu 24.04.3、Debian 13.3。

| 发行版                    |                 架构                 |                                              系统代码                                               |                       PG18                       |                       PG17                       |                       PG16                       |                       PG15                       |                       PG14                       |                       PG13                       |
|:-----------------------|:----------------------------------:|:-----------------------------------------------------------------------------------------------:|:------------------------------------------------:|:------------------------------------------------:|:------------------------------------------------:|:------------------------------------------------:|:------------------------------------------------:|:------------------------------------------------:|
| RHEL / Rocky / Alma 10 | <b class="text-sky-600">x86_64</b> |  [`el10.x86_64`](https://github.com/pgsty/pigsty/blob/main/roles/node_id/vars/el10.x86_64.yml)  | <i class="fas fa-circle-check text-primary"></i> | <i class="fas fa-circle-check text-primary"></i> | <i class="fas fa-circle-check text-primary"></i> | <i class="fas fa-circle-check text-primary"></i> | <i class="fas fa-circle-check text-primary"></i> | <i class="fas fa-circle-check text-primary"></i> |
| RHEL / Rocky / Alma 10 | <b class="text-danger">aarch64</b> | [`el10.aarch64`](https://github.com/pgsty/pigsty/blob/main/roles/node_id/vars/el10.aarch64.yml) | <i class="fas fa-circle-check text-primary"></i> | <i class="fas fa-circle-check text-primary"></i> | <i class="fas fa-circle-check text-primary"></i> | <i class="fas fa-circle-check text-primary"></i> | <i class="fas fa-circle-check text-primary"></i> | <i class="fas fa-circle-check text-primary"></i> |
| Ubuntu 24.04 (`noble`) | <b class="text-sky-600">x86_64</b> |   [`u24.x86_64`](https://github.com/pgsty/pigsty/blob/main/roles/node_id/vars/u24.x86_64.yml)   | <i class="fas fa-circle-check text-primary"></i> | <i class="fas fa-circle-check text-primary"></i> | <i class="fas fa-circle-check text-primary"></i> | <i class="fas fa-circle-check text-primary"></i> | <i class="fas fa-circle-check text-primary"></i> | <i class="fas fa-circle-check text-primary"></i> |
| Ubuntu 24.04 (`noble`) | <b class="text-danger">aarch64</b> |  [`u24.aarch64`](https://github.com/pgsty/pigsty/blob/main/roles/node_id/vars/u24.aarch64.yml)  | <i class="fas fa-circle-check text-primary"></i> | <i class="fas fa-circle-check text-primary"></i> | <i class="fas fa-circle-check text-primary"></i> | <i class="fas fa-circle-check text-primary"></i> | <i class="fas fa-circle-check text-primary"></i> | <i class="fas fa-circle-check text-primary"></i> |
| Debian 13 (`trixie`)   | <b class="text-sky-600">x86_64</b> |   [`d13.x86_64`](https://github.com/pgsty/pigsty/blob/main/roles/node_id/vars/d13.x86_64.yml)   | <i class="fas fa-circle-check text-primary"></i> | <i class="fas fa-circle-check text-primary"></i> | <i class="fas fa-circle-check text-primary"></i> | <i class="fas fa-circle-check text-primary"></i> | <i class="fas fa-circle-check text-primary"></i> | <i class="fas fa-circle-check text-primary"></i> |
| Debian 13 (`trixie`)   | <b class="text-danger">aarch64</b> |  [`d13.aarch64`](https://github.com/pgsty/pigsty/blob/main/roles/node_id/vars/d13.aarch64.yml)  | <i class="fas fa-circle-check text-primary"></i> | <i class="fas fa-circle-check text-primary"></i> | <i class="fas fa-circle-check text-primary"></i> | <i class="fas fa-circle-check text-primary"></i> | <i class="fas fa-circle-check text-primary"></i> | <i class="fas fa-circle-check text-primary"></i> |
{.full-width}


----------------

## EL

Pigsty 支持 RHEL / Rocky / Alma / Anolis / CentOS 8、9、10 版本。

| EL 发行版                    |                 架构                 |                                              系统代码                                               |                        PG18                        |                        PG17                        |                        PG16                        |                          PG15                           |                          PG14                           |                          PG13                           |
|:--------------------------|:----------------------------------:|:-----------------------------------------------------------------------------------------------:|:--------------------------------------------------:|:--------------------------------------------------:|:--------------------------------------------------:|:-------------------------------------------------------:|:-------------------------------------------------------:|:-------------------------------------------------------:|
| RHEL10 / Rocky10 / Alma10 | <b class="text-sky-600">x86_64</b> |  [`el10.x86_64`](https://github.com/pgsty/pigsty/blob/main/roles/node_id/vars/el10.x86_64.yml)  |  <i class="fas fa-circle-check text-primary"></i>  |  <i class="fas fa-circle-check text-primary"></i>  |  <i class="fas fa-circle-check text-primary"></i>  |    <i class="fas fa-circle-check text-primary"></i>     |    <i class="fas fa-circle-check text-primary"></i>     |    <i class="fas fa-circle-check text-primary"></i>     |
| RHEL10 / Rocky10 / Alma10 | <b class="text-danger">aarch64</b> | [`el10.aarch64`](https://github.com/pgsty/pigsty/blob/main/roles/node_id/vars/el10.aarch64.yml) |  <i class="fas fa-circle-check text-primary"></i>  |  <i class="fas fa-circle-check text-primary"></i>  |  <i class="fas fa-circle-check text-primary"></i>  |    <i class="fas fa-circle-check text-primary"></i>     |    <i class="fas fa-circle-check text-primary"></i>     |    <i class="fas fa-circle-check text-primary"></i>     |
| RHEL9 / Rocky9 / Alma9    | <b class="text-sky-600">x86_64</b> |   [`el9.x86_64`](https://github.com/pgsty/pigsty/blob/main/roles/node_id/vars/el9.x86_64.yml)   |  <i class="fas fa-circle-check text-primary"></i>  |  <i class="fas fa-circle-check text-primary"></i>  |  <i class="fas fa-circle-check text-primary"></i>  |    <i class="fas fa-circle-check text-primary"></i>     |    <i class="fas fa-circle-check text-primary"></i>     |    <i class="fas fa-circle-check text-primary"></i>     |
| RHEL9 / Rocky9 / Alma9    | <b class="text-danger">aarch64</b> |  [`el9.aarch64`](https://github.com/pgsty/pigsty/blob/main/roles/node_id/vars/el9.aarch64.yml)  |  <i class="fas fa-circle-check text-primary"></i>  |  <i class="fas fa-circle-check text-primary"></i>  |  <i class="fas fa-circle-check text-primary"></i>  |    <i class="fas fa-circle-check text-primary"></i>     |    <i class="fas fa-circle-check text-primary"></i>     |    <i class="fas fa-circle-check text-primary"></i>     |
| RHEL8 / Rocky8 / Alma8    | <b class="text-sky-600">x86_64</b> |   [`el8.x86_64`](https://github.com/pgsty/pigsty/blob/main/roles/node_id/vars/el8.x86_64.yml)   | <i class="fas fa-circle-check text-secondary"></i> | <i class="fas fa-circle-check text-secondary"></i> | <i class="fas fa-circle-check text-secondary"></i> |   <i class="fas fa-circle-check text-secondary"></i>    |   <i class="fas fa-circle-check text-secondary"></i>    |   <i class="fas fa-circle-check text-secondary"></i>    |
| RHEL8 / Rocky8 / Alma8    | <b class="text-danger">aarch64</b> |  [`el8.aarch64`](https://github.com/pgsty/pigsty/blob/main/roles/node_id/vars/el8.aarch64.yml)  | <i class="fas fa-circle-check text-secondary"></i> | <i class="fas fa-circle-check text-secondary"></i> | <i class="fas fa-circle-check text-secondary"></i> |   <i class="fas fa-circle-check text-secondary"></i>    |   <i class="fas fa-circle-check text-secondary"></i>    |   <i class="fas fa-circle-check text-secondary"></i>    |
| RHEL7 / CentOS7           | <b class="text-sky-600">x86_64</b> |   [`el7.x86_64`](https://github.com/pgsty/pigsty/blob/main/roles/node_id/vars/el7.x86_64.yml)   |                                                    |                                                    |                                                    | <i class="fas fa-triangle-exclamation text-danger"></i> | <i class="fas fa-triangle-exclamation text-danger"></i> | <i class="fas fa-triangle-exclamation text-danger"></i> |
| RHEL7 / CentOS7           | <b class="text-danger">aarch64</b> |                                                -                                                |                                                    |                                                    |                                                    |                                                         |                                                         |                                                         |
{.full-width}

{{% alert title="推荐使用 RockyLinux 10.1 与 9.7" color="success" %}}
请注意，[PGDG Yum 仓库](https://www.postgresql.org/about/news/postgresql-rpm-repository-now-supports-multiple-rhel-minor-versions-3202/) 从 EL9 / EL10 开始，针对 **EL 小版本** 进行构建，目前支持的小版本为：9.6, 9.7, 10.0, 10.1。
建议离线安装包/自建离线仓库与系统 **EL 小版本**（例如 RockyLinux 9.7 / 10.1）保持一致，跨小版本可能因 OpenSSL 等依赖版本跳变导致不可用。
{{% /alert %}}

{{% alert title="EL8 即将不再支持" color="warning" %}}
EL8 将于 2029 年进入 EOL，建议尽早规划升级。鉴于 EL10 适配已经完成，我们将在下个版本移除对 EL8 的支持。
{{% /alert %}}

{{% alert title="EL 7 @ 2024-06" color="danger" %}}
Red Hat Enterprise Linux 7 已经于 2024年6月停止维护，PGDG 也不再为 PostgreSQL 16/17/18 提供 EL7 二进制包支持。

如需在老旧操作系统上获得运行支持，请考虑我们的 [专业订阅服务](/docs/about/service)。
{{% /alert %}}

----------------

## Ubuntu

Pigsty 支持 Ubuntu 24.04 / 22.04：

| Ubuntu 发行版             |                 架构                 |                                             系统代码                                              |                       PG18                       |                       PG17                       |                          PG16                           |                          PG15                           |                          PG14                           |                          PG13                           |
|:-----------------------|:----------------------------------:|:---------------------------------------------------------------------------------------------:|:------------------------------------------------:|:------------------------------------------------:|:-------------------------------------------------------:|:-------------------------------------------------------:|:-------------------------------------------------------:|:-------------------------------------------------------:|
| Ubuntu 24.04 (`noble`) | <b class="text-sky-600">x86_64</b> |  [`u24.x86_64`](https://github.com/pgsty/pigsty/blob/main/roles/node_id/vars/u24.x86_64.yml)  | <i class="fas fa-circle-check text-primary"></i> | <i class="fas fa-circle-check text-primary"></i> |    <i class="fas fa-circle-check text-primary"></i>     |    <i class="fas fa-circle-check text-primary"></i>     |    <i class="fas fa-circle-check text-primary"></i>     |    <i class="fas fa-circle-check text-primary"></i>     |
| Ubuntu 24.04 (`noble`) | <b class="text-danger">aarch64</b> | [`u24.aarch64`](https://github.com/pgsty/pigsty/blob/main/roles/node_id/vars/u24.aarch64.yml) | <i class="fas fa-circle-check text-primary"></i> | <i class="fas fa-circle-check text-primary"></i> |    <i class="fas fa-circle-check text-primary"></i>     |    <i class="fas fa-circle-check text-primary"></i>     |    <i class="fas fa-circle-check text-primary"></i>     |    <i class="fas fa-circle-check text-primary"></i>     |
| Ubuntu 22.04 (`jammy`) | <b class="text-sky-600">x86_64</b> |  [`u22.x86_64`](https://github.com/pgsty/pigsty/blob/main/roles/node_id/vars/u22.x86_64.yml)  | <i class="fas fa-circle-check text-primary"></i> | <i class="fas fa-circle-check text-primary"></i> |    <i class="fas fa-circle-check text-primary"></i>     |    <i class="fas fa-circle-check text-primary"></i>     |    <i class="fas fa-circle-check text-primary"></i>     |    <i class="fas fa-circle-check text-primary"></i>     |
| Ubuntu 22.04 (`jammy`) | <b class="text-danger">aarch64</b> | [`u22.aarch64`](https://github.com/pgsty/pigsty/blob/main/roles/node_id/vars/u22.aarch64.yml) | <i class="fas fa-circle-check text-primary"></i> | <i class="fas fa-circle-check text-primary"></i> |    <i class="fas fa-circle-check text-primary"></i>     |    <i class="fas fa-circle-check text-primary"></i>     |    <i class="fas fa-circle-check text-primary"></i>     |    <i class="fas fa-circle-check text-primary"></i>     |
| Ubuntu 20.04 (`focal`) | <b class="text-sky-600">x86_64</b> |  [`u20.x86_64`](https://github.com/pgsty/pigsty/blob/main/roles/node_id/vars/u20.x86_64.yml)  |                                                  |                                                  | <i class="fas fa-triangle-exclamation text-danger"></i> | <i class="fas fa-triangle-exclamation text-danger"></i> | <i class="fas fa-triangle-exclamation text-danger"></i> | <i class="fas fa-triangle-exclamation text-danger"></i> |
| Ubuntu 20.04 (`focal`) | <b class="text-danger">aarch64</b> |                                               -                                               |                                                  |                                                  |                                                         |                                                         |                                                         |                                                         |
{.full-width}

{{% alert title="推荐使用 Ubuntu 22.04 / 24.04 LTS" color="success" %}}
Ubuntu 24.04 在系统可靠性/稳定性与软件版本的新颖性/齐全性上取得了良好的平衡，推荐使用此系统。
{{% /alert %}}

{{% alert title="Ubuntu 20.04 已 EOL" color="danger" %}}
Ubuntu 20.04 已于 2025年4月进入 EOL。
如需在老旧操作系统上获得扩展支持，请考虑我们的 [专业订阅服务](/docs/about/service)。
{{% /alert %}}


----------------

## Debian

Pigsty 支持 Debian 12 / 13，推荐使用最新的 Debian 13.3

| Debian 发行版             |                 架构                 |                                             系统代码                                              |                       PG18                       |                       PG17                       |                          PG16                           |                          PG15                           |                          PG14                           |                          PG13                           |
|:-----------------------|:----------------------------------:|:---------------------------------------------------------------------------------------------:|:------------------------------------------------:|:------------------------------------------------:|:-------------------------------------------------------:|:-------------------------------------------------------:|:-------------------------------------------------------:|:-------------------------------------------------------:|
| Debian 13 (`trixie`)   | <b class="text-sky-600">x86_64</b> |  [`d13.x86_64`](https://github.com/pgsty/pigsty/blob/main/roles/node_id/vars/d13.x86_64.yml)  | <i class="fas fa-circle-check text-primary"></i> | <i class="fas fa-circle-check text-primary"></i> |    <i class="fas fa-circle-check text-primary"></i>     |    <i class="fas fa-circle-check text-primary"></i>     |    <i class="fas fa-circle-check text-primary"></i>     |    <i class="fas fa-circle-check text-primary"></i>     |
| Debian 13 (`trixie`)   | <b class="text-danger">aarch64</b> | [`d13.aarch64`](https://github.com/pgsty/pigsty/blob/main/roles/node_id/vars/d13.aarch64.yml) | <i class="fas fa-circle-check text-primary"></i> | <i class="fas fa-circle-check text-primary"></i> |    <i class="fas fa-circle-check text-primary"></i>     |    <i class="fas fa-circle-check text-primary"></i>     |    <i class="fas fa-circle-check text-primary"></i>     |    <i class="fas fa-circle-check text-primary"></i>     |
| Debian 12 (`bookworm`) | <b class="text-sky-600">x86_64</b> |  [`d12.x86_64`](https://github.com/pgsty/pigsty/blob/main/roles/node_id/vars/d12.x86_64.yml)  | <i class="fas fa-circle-check text-primary"></i> | <i class="fas fa-circle-check text-primary"></i> |    <i class="fas fa-circle-check text-primary"></i>     |    <i class="fas fa-circle-check text-primary"></i>     |    <i class="fas fa-circle-check text-primary"></i>     |    <i class="fas fa-circle-check text-primary"></i>     |
| Debian 12 (`bookworm`) | <b class="text-danger">aarch64</b> | [`d12.aarch64`](https://github.com/pgsty/pigsty/blob/main/roles/node_id/vars/d12.aarch64.yml) | <i class="fas fa-circle-check text-primary"></i> | <i class="fas fa-circle-check text-primary"></i> |    <i class="fas fa-circle-check text-primary"></i>     |    <i class="fas fa-circle-check text-primary"></i>     |    <i class="fas fa-circle-check text-primary"></i>     |    <i class="fas fa-circle-check text-primary"></i>     |
| Debian 11 (`bullseye`) | <b class="text-sky-600">x86_64</b> |  [`d11.x86_64`](https://github.com/pgsty/pigsty/blob/main/roles/node_id/vars/d11.x86_64.yml)  |                                                  |                                                  | <i class="fas fa-triangle-exclamation text-danger"></i> | <i class="fas fa-triangle-exclamation text-danger"></i> | <i class="fas fa-triangle-exclamation text-danger"></i> | <i class="fas fa-triangle-exclamation text-danger"></i> |
| Debian 11 (`bullseye`) | <b class="text-danger">aarch64</b> |                                               -                                               |                                                  |                                                  |                                                         |                                                         |                                                         |                                                         |
{.full-width}

{{% alert title="推荐使用 Debian 12.13 / 13.3" color="success" %}}
{{% /alert %}}

{{% alert title="Debian 11 EOL @ 2024-07" color="danger" %}}
Debian 11 已经于 2024-07 进入 EOL。如需在老旧操作系统上获得扩展支持，请考虑我们的 [专业订阅服务](/docs/about/service)。
{{% /alert %}}


----------------

## Vagrant

当您使用本地虚拟机部署 Pigsty 时，可以考虑使用以下 Vagrant 操作系统镜像，这也是 Pigsty 开发测试使用的镜像。

| **系统**         | 镜像                                                                                             |
|:---------------|:-----------------------------------------------------------------------------------------------|
| AlmaLinux 8.10 | [`cloud-image/almalinux-8`](https://portal.cloud.hashicorp.com/vagrant/discover/cloud-image/almalinux-8) |
| Rocky 9.7      | [`bento/rockylinux-9`](https://portal.cloud.hashicorp.com/vagrant/discover/bento/rockylinux-9) |
| AlmaLinux 10.1 | [`cloud-image/almalinux-10`](https://portal.cloud.hashicorp.com/vagrant/discover/cloud-image/almalinux-10) |
| Debian 12.13   | [`cloud-image/debian-12`](https://portal.cloud.hashicorp.com/vagrant/discover/cloud-image/debian-12) |
| Debian 13.3    | [`cloud-image/debian-13`](https://portal.cloud.hashicorp.com/vagrant/discover/cloud-image/debian-13) |
| Ubuntu 22.04   | [`cloud-image/ubuntu-22.04`](https://portal.cloud.hashicorp.com/vagrant/discover/cloud-image/ubuntu-22.04) |
| Ubuntu 24.04   | [`bento/ubuntu-24.04`](https://portal.cloud.hashicorp.com/vagrant/discover/bento/ubuntu-24.04) |
{.full-width}


----------------

## Terraform

当您使用云服务器部署 Pigsty 时，可以考虑在 Terraform 中使用以下操作系统基础镜像，以 [**阿里云**](https://help.aliyun.com/zh/ecs/release-notes-2/) 为例：

| **x86_64**   | 镜像                                             |
|:-------------|:-----------------------------------------------|
| Rocky 8.10   | `rockylinux_8_10_x64_20G_alibase_20240923.vhd` |
| Rocky 9.7    | `rockylinux_9_7_x64_20G_alibase_20260119.vhd`  |
| Rocky 10.1   | `rockylinux_10_1_x64_20G_alibase_20260119.vhd` |
| Ubuntu 22.04 | `ubuntu_22_04_x64_20G_alibase_20240926.vhd`    |
| Ubuntu 24.04 | `ubuntu_24_04_x64_20G_alibase_20240923.vhd`    |
| Debian 12.13 | `debian_12_13_x64_20G_alibase_20241201.vhd`    |
| Debian 13.3  | `debian_13_3_x64_20G_alibase_20250101.vhd`     |
{.full-width}


| **aarch64**  | 镜像                                               |
|:-------------|:-------------------------------------------------|
| Rocky 8.10   | `rockylinux_8_10_arm64_20G_alibase_20251120.vhd` |
| Rocky 9.7    | `rockylinux_9_7_arm64_20G_alibase_20260119.vhd`  |
| Rocky 10.1   | `rockylinux_10_1_arm64_20G_alibase_20260119.vhd` |
| Ubuntu 22.04 | `ubuntu_22_04_arm64_20G_alibase_20251126.vhd`    |
| Ubuntu 24.04 | `ubuntu_24_04_arm64_20G_alibase_20251126.vhd`    |
| Debian 12.13 | `debian_12_13_arm64_20G_alibase_20250825.vhd`    |
| Debian 13.3  | `debian_13_3_arm64_20G_alibase_20251121.vhd`     |
{.full-width}
