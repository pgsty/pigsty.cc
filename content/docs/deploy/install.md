---
title: 生产部署
weight: 355
description: 如何在 Linux 主机上安装 Pigsty？
icon: fa-solid fa-table-list
module: [PIGSTY]
categories: [教程]
---


本文是 Pigsty 生产环境多节点部署指南，部署单机版本 Demo/Dev 环境可以参考 [**快速上手**](/docs/setup/) 文档。

----------------

## 摘要

[**准备**](/docs/deploy/prepare) [**几台**](/docs/deploy/planning) 具有 [**SSH 权限**](/docs/deploy/admin#ssh) 的 [**节点**](/docs/deploy/prepare#节点)，
安装 [**兼容的 Linux 系统**](/docs/ref/linux/)，使用具有免密 [**`ssh`**](/docs/deploy/admin#ssh) 和 [**`sudo`**](/docs/deploy/admin#sudo) 权限的 [**管理用户**](/docs/deploy/admin) 执行：

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

该命令会执行 [**安装**](#安装) 脚本，下载并提取 Pigsty 源码至家目录并安装依赖，接下来依次完成 [**配置**](#配置) 与 [**部署**](#部署) 即可完成交付。

在执行 [**`deploy.yml`**](/docs/setup/playbook) 进行部署前，您可能需要进一步审视与编辑 [**配置清单**](/docs/concept/iac/inventory)：**`pigsty.yml`** 文件，确认部署细节。

```bash
cd ~/pigsty      # 进入 Pigsty 目录
./configure -g   # 生成配置文件（可选，如果知道如何配置可以跳过）
./deploy.yml     # 执行部署剧本，根据生成的配置文件开始安装
```

安装完成后，您可以通过 IP / 域名 + `80/443` 端口访问 [**Web 用户界面**](/docs/setup/webui/)，
并通过 `5432` 端口访问 [**PostgreSQL 服务**](/docs/setup/pgsql/)。

完整流程根据服务器规格/网络条件需 3~10 分钟，[**离线安装**](/docs/setup/offline/) 时能够显著加速；无需监控时可使用 [**精简安装**](/docs/setup/slim/) 进一步加速。

**视频样例：20 节点生产仿真环境（Ubuntu 24.04 x86_64）**

{{< asciinema file="demo/install-simu.cast" markers="0:置备服务器,36.0:部署,360:完成" speed="1.3" autoplay="true" loop="true" >}}




----------------

## 准备

在生产环境中部署安装 Pigsty 涉及一些 [**准备工作**](/docs/deploy/prepare) ，以下为完整检查清单，供您参考。

|                    项目                     | 要求                           |                   项目                    | 要求                                               |
|:-----------------------------------------:|:-----------------------------|:---------------------------------------:|:-------------------------------------------------|
|     [**节点**](/docs/deploy/prepare#节点)     | 至少 `1C2G`，上不封顶               |    [**规格**](/docs/deploy/planning#常见方案)    | 多个同质节点，2 / 3 / 4 / 或更多                           |
|     [**磁盘**](/docs/deploy/prepare#磁盘)     | `/data` 作为默认主挂载点             |   [**FS**](/docs/deploy/prepare#文件系统)   | 推荐使用 `xfs`，按需使用 `ext4` / `zfs`                   |
|    [**VIP**](/docs/deploy/prepare#vip)    | L2 VIP，可选 （云环境不可用）           |    [**网络**](/docs/deploy/prepare#网络)    | 静态 IPv4 地址，单节点无固定 IP 可使用 `127.0.0.1`             |
|     [**CA**](/docs/deploy/prepare#ca)     | 可以使用自签名 CA 或指定已有证书           |    [**域名**](/docs/deploy/prepare#域名)    | 本地 / 公网域名，可选，默认 `i.pigsty` 自签名域名                 |
|   [**内核**](/docs/deploy/prepare#linux)    | `Linux` `x86_64` / `aarch64` | [**Linux**](/docs/deploy/prepare#linux) | `el8`, `el9`, `el10`, `d12`, `d13`, `u22`, `u24` |
| [**Locale**](/docs/deploy/prepare#locale) | `C.UTF-8` 或 `C`              |    [**防火墙**](/docs/deploy/admin#防火墙)    | 端口：`80` / `443` / `22` / `5432` （可选）             |
|      [**用户**](/docs/deploy/admin#用户)      | 避免使用 `root` 和 `postgres`     |   [**Sudo**](/docs/deploy/admin#sudo)   | sudo 权限，最好带有 `nopass` 免密选项                       |
|     [**SSH**](/docs/deploy/admin#ssh)     | 通过公钥 `nopass` SSH 登陆纳管节点     |   [**可达性**](/docs/deploy/admin#验证可达性)   | `ssh <ip\|alias> sudo ls` 无错误                    |
{.full-width}



----------------

## 安装

您可以使用以下命令自动安装 [**Pigsty 源码包**](/docs/deploy/prepare#pigsty) 至 `~/pigsty` 目录（推荐），部署所需依赖（Ansible）会自动安装。

{{< tabpane text=true persist=header >}}
{{% tab header="pigsty.cc（中国）" %}}
```bash
curl -fsSL https://repo.pigsty.cc/get | bash            # 安装最新稳定版本
curl -fsSL https://repo.pigsty.cc/get | bash -s v4.1.0  # 安装特定版本
```
{{% /tab %}}
{{% tab header="pigsty.io（全球）" %}}
```bash
curl -fsSL https://repo.pigsty.io/get | bash            # 安装最新稳定版本
curl -fsSL https://repo.pigsty.io/get | bash -s v4.1.0  # 安装特定版本
```
{{% /tab %}}
{{< /tabpane >}}

如果您不希望执行远程脚本，可以手动 [**下载**](https://github.com/pgsty/pigsty/releases) 或克隆源码。使用 `git` 克隆安装时，请务必检出特定版本后再使用。

```bash
git clone https://github.com/pgsty/pigsty; cd pigsty;
git checkout v4.1.0;  # 使用 git 安装时，请务必检出特定版本
```

手工下载克隆安装时，请额外执行 [**`bootstrap`**](/docs/setup/offline#bootstrap) 脚本以手动安装 Ansible 等部署依赖，您也可以 [**自行安装**](/docs/setup/playbook#安装-ansible)。

```bash
./bootstrap           # 安装 ansible，用于执行后续部署
```



----------------

## 配置

在 Pigsty 中，部署的蓝图细节由 [**配置清单**](/docs/setup/config/) 所定义，也就是 [**`pigsty.yml`**](https://github.com/pgsty/pigsty/blob/main/pigsty.yml) 配置文件，您可以通过声明式配置进行定制。

Pigsty 提供了 [**`configure`**](https://github.com/pgsty/pigsty/blob/main/configure) 脚本作为可选的 [**配置向导**](/docs/concept/iac/configure)，
它将根据您的环境和输入，生成具有良好默认值的 [**配置清单**](/docs/concept/iac/inventory/)：

```bash
./configure -g                # 使用配置向导生成配置文件，并且生成随机密码
```

配置过程生成的配置文件默认位于：`~/pigsty/pigsty.yml`，您可以在安装前进行检查，按需修改与定制。

有许多 [**配置模板**](/docs/concept/iac/template/) 供您参考与使用，但您也完全可以跳过配置向导，直接编辑 `pigsty.yml` 配置文件进行定制。

```bash
./configure -c ha/full -g       # 使用四节点沙箱环境模板
./configure -c ha/trio -g       # 使用三节点最小 HA 模板
./configure -c ha/dual -g -v 17 # 使用两节点半高可用模板，使用 PG 17
./configure -c ha/simu -s       # 使用二十节点生产仿真模板，不检查 IP，不生成随机强密码
```


<details><summary>配置 / configure 过程的样例输出</summary>

```bash
vagrant@meta:~/pigsty$ ./configure
configure pigsty v4.1.0 begin
[ OK ] region = china
[ OK ] kernel  = Linux
[ OK ] machine = x86_64
[ OK ] package = deb,apt
[ OK ] vendor  = ubuntu (Ubuntu)
[ OK ] version = 22 (22.04)
[ OK ] sudo = vagrant ok
[ OK ] ssh = vagrant@127.0.0.1 ok
[WARN] Multiple IP address candidates found:
    (1) 192.168.121.38	    inet 192.168.121.38/24 metric 100 brd 192.168.121.255 scope global dynamic eth0
    (2) 10.10.10.10	    inet 10.10.10.10/24 brd 10.10.10.255 scope global eth1
[ OK ] primary_ip = 10.10.10.10 (from demo)
[ OK ] admin = vagrant@10.10.10.10 ok
[ OK ] mode = meta (ubuntu22.04)
[ OK ] locale  = C.UTF-8
[ OK ] ansible = ready
[ OK ] pigsty configured
[WARN] don't forget to check it and change passwords!
proceed with ./deploy.yml
```

</details><br>

配置向导只会为您替换 **当前节点** 的 IP（如果您不想要替换，使用 `-s` 参数），所以对于一个多节点的部署，您需要自己替换其他节点的 IP 地址。
同时，你还需要按需对配置文件进行进一步的定制，例如修改默认密码、添加更多节点等。


**配置脚本常用参数**：

| 参数                      | 说明                                                                |
|:------------------------|:------------------------------------------------------------------|
| `-c\|--conf`            | 用于指定使用的 [**配置模板**](/docs/conf/)，相对于 `conf/` 目录，不带 `.yml` 后缀的配置名称  |
| `-v\|--version`         | 用于指定要安装的 PostgreSQL 大版本，如 `13`、`14`、`15`、`16`、`17`、`18`           |
| `-r\|--region`          | 用于指定上游软件源的区域，加速下载： (`default\|china\|europe`)                     |
| `-n\|--non-interactive` | 直接使用命令行参数提供首要 IP 地址，跳过交互式向导                                       |
| `-x\|--proxy`           | 使用当前环境变量配置 [`proxy_env`](/docs/infra/param#proxy_env) 变量          |
{.full-width}

如果您的机器网卡绑定了多个 IP 地址，那么需要使用 `-i|--ip <ipaddr>` 显式指定一个当前节点的首要 IP 地址，或在交互式问询中提供。
该脚本将把 IP 占位符 `10.10.10.10` 替换为当前节点的主 IPv4 地址。选用的地址应为静态 IP 地址，请勿使用公网 IP 地址。

配置过程生成的配置文件默认位于：`~/pigsty/pigsty.yml`，您可以在安装前进行检查与修改定制。

{{% alert title="修改默认密码！" color="danger" %}}
我们强烈建议您在安装前，事先修改配置文件中使用的默认密码与凭据，详情参考 [**安全加固**](/docs/setup/security/#密码)。
{{% /alert %}}




--------

## 部署

Pigsty 的 [**`deploy.yml`**](/docs/setup/playbook/) [**剧本**](/docs/setup/playbook/) 会将 [**配置**](#配置) 中生成的蓝图应用至 **所有的目标节点**。

```bash
./deploy.yml     # 一次性在所有节点上完成部署
```

<details><summary>部署过程的样例输出</summary>

```bash
......

TASK [pgsql : pgsql init done] *************************************************
ok: [10.10.10.11] => {
    "msg": "postgres://10.10.10.11/postgres | meta  | dbuser_meta dbuser_view "
}
......

TASK [pg_monitor : load grafana datasource meta] *******************************
changed: [10.10.10.11]

PLAY RECAP *********************************************************************
10.10.10.11                : ok=302  changed=232  unreachable=0    failed=0    skipped=65   rescued=0    ignored=1
localhost                  : ok=6    changed=3    unreachable=0    failed=0    skipped=1    rescued=0    ignored=0
```

当您看到输出尾部如果带有 `pgsql init done`，`PLAY RECAP` 等字样，说明安装已经完成！

</details><br>

{{% alert title="上游软件仓库变更可能导致在线安装失败！" color="warning" %}}
Pigsty 使用的上游软件仓库（如 Linux / PGDG 仓库）可能会因为不恰当的更新，进入崩溃状态并导致部署失败（相当常见）！
对于严肃的生产环境部署，我们强烈建议使用经过验证的 [**离线软件包**](/docs/setup/offline#离线软件包) 进行 [**离线安装**](/docs/setup/offline)
{{% /alert %}}

{{% alert title="避免重复执行部署剧本！" color="warning" %}}
警告： 在已经完成部署的环境中再次完整运行 [**`deploy.yml`**](https://github.com/pgsty/pigsty/blob/main/deploy.yml) 可能会重启相关服务并覆盖配置，请务必注意！
{{% /alert %}}


--------

## 界面

假设您使用 [**四节点**](/docs/conf/full) 部署模版，那么 Pigsty 部署完成后，您的环境应该具有类似下面的部署结构：

| ID | [NODE](/docs/node/) | [PGSQL](/docs/pgsql/) | [INFRA](/docs/infra/) | [**ETCD**](/docs/etcd/) |
|:--:|:-------------------:|:---------------------:|:---------------------:|:-----------------------:|
| 1  |    `10.10.10.10`    |      `pg-meta-1`      |       `infra-1`       |        `etcd-1`         |
| 2  |    `10.10.10.11`    |      `pg-test-1`      |           -           |            -            |
| 3  |    `10.10.10.12`    |      `pg-test-2`      |           -           |            -            |
| 4  |    `10.10.10.13`    |      `pg-test-3`      |           -           |            -            |
{.full-width}

[**`INFRA`**](/docs/infra) 模块通过浏览器提供了一个 [**图形化管理界面**](/docs/setup/webui)，您可以直接通过这台节点上的 Nginx 的 **80/443** 端口访问。

[**`PGSQL`**](/docs/pgsql/) 模块提供了一个 [**PostgreSQL 数据库服务器**](/docs/setup/pgsql)，监听 **5432** 端口，也可通过 Pgbouncer / HAProxy [**代理访问**](/docs/pgsql/service)。

对于生产环境的多节点高可用 PostgreSQL 集群来说，您需要通过 [**服务接入**](/docs/pgsql/misc/svc) 来使用数据库服务，实现流量自动路由。

[![](/img/pigsty/home.png)](https://demo.pigsty.cc/zh)


----------------

## 更多

安装完成后，您可以探索 [**用户界面**](/docs/setup/webui/)，并通过 5432 端口访问 [**PostgreSQL 服务**](/docs/setup/pgsql/)。

您还可以使用 Pigsty 部署和监控 [**更多集群**](/docs/conf/full)：向 [**配置清单**](/docs/setup/config/) 添加定义并运行：

```bash
bin/node-add   pg-test      # 将集群 pg-test 的 3 个节点纳入 Pigsty 管理
bin/pgsql-add  pg-test      # 初始化一个 3 节点的 pg-test 高可用 PG 集群
bin/redis-add  redis-ms     # 初始化 Redis 集群： redis-ms
```

大多数模块都需要先安装 [**`NODE`**](/docs/node/) 模块。查看可用的 [**模块**](/docs/ref/module/) 了解详情：

[**`PGSQL`**](/docs/pgsql/)、[**`INFRA`**](/docs/infra/)、[**`NODE`**](/docs/node/)、[**`ETCD`**](/docs/etcd/)、
[**`MINIO`**](/docs/minio/)、[**`REDIS`**](/docs/redis/)、[**`FERRET`**](/docs/ferret/)、[**`DOCKER`**](/docs/docker/)……
