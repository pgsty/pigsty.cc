---
title: "PGDG 仓库"
icon: fas fa-republican
description: PostgreSQL 官方 APT/YUM 仓库
weight: 5410
---

Pigsty PGSQL 仓库旨在与 PostgreSQL [PGDG 官方仓库](https://www.postgresql.org/download/linux/) 配合使用。

Pigsty 依赖 PGDG 仓库中原生的 PostgreSQL 内核软件包，在此基础上提供了额外的 340+ 扩展插件。

> PGDG Pigsty 镜像仓库最后同步于：2025-12-29 12:00:00


---------

## 快速上手

您可以安装 [**`pig`**](/docs/pig/) CLI 工具，并使用它添加 pgdg / pigsty 仓库（推荐）：

```bash
pig repo add pgdg                         # 添加 PGDG 仓库
pig repo add pgdg -u                      # 添加 PGDG 仓库，并更新本地缓存
pig repo add pgdg -u --region=default     # 强制使用全球默认区域的仓库（postgresql.org）
pig repo add pgdg -u --region=china       # 使用中国镜像仓库 (repo.pigsty.cc)
pig repo add pgsql -u                     # pgsql = pgdg + pigsty-pgsql (同时添加 Pigsty 与 PGDG 官方仓库)
pig repo add -u                           # all = node + pgsql (pgdg + pigsty) + infra，一次性添加所有仓库
```


---------

## 镜像

2025年5月中旬，PGDG 关闭了 rsync/ftp 同步渠道，导致全球几乎所有 PGDG 镜像站失去同步。根据观察，目前只有 YANDEX，XTOM，PIGSTY 提供定期同步。

Pigsty 在中国区域提供了 PGDG 镜像的子集，更新频率约为一周一更新。对于 EL 7-10，Debian 11-13，Ubuntu 20.04 - 24.04 提供 x86_64 与 arm64 架构的镜像仓库。覆盖范围为所有生命周期内的 PG 大版本（PG12 - 19alpha）。

{{% alert title="2025-11 更新通知：阿里云/清华TUNA 恢复更新" color="info" %}}
目前阿里云/清华TUNA镜像站已经恢复 PGDG 仓库的同步。
{{% /alert %}}


---------

## 仓库配置

### EL YUM/DNF 仓库

```yaml
- { name: pgdg13         ,description: 'PostgreSQL 13'      ,module: pgsql   ,releases: [7,8,9,10]       ,arch: [x86_64, aarch64] ,baseurl: { default: 'https://download.postgresql.org/pub/repos/yum/13/redhat/rhel-$releasever-$basearch' ,china: 'https://repo.pigsty.cc/yum/pgdg/13/redhat/rhel-$releasever-$basearch' ,europe: 'https://mirrors.xtom.de/postgresql/repos/yum/13/redhat/rhel-$releasever-$basearch' }}
- { name: pgdg14         ,description: 'PostgreSQL 14'      ,module: pgsql   ,releases: [7,8,9,10]       ,arch: [x86_64, aarch64] ,baseurl: { default: 'https://download.postgresql.org/pub/repos/yum/14/redhat/rhel-$releasever-$basearch' ,china: 'https://repo.pigsty.cc/yum/pgdg/14/redhat/rhel-$releasever-$basearch' ,europe: 'https://mirrors.xtom.de/postgresql/repos/yum/14/redhat/rhel-$releasever-$basearch' }}
- { name: pgdg15         ,description: 'PostgreSQL 15'      ,module: pgsql   ,releases: [7,8,9,10]       ,arch: [x86_64, aarch64] ,baseurl: { default: 'https://download.postgresql.org/pub/repos/yum/15/redhat/rhel-$releasever-$basearch' ,china: 'https://repo.pigsty.cc/yum/pgdg/15/redhat/rhel-$releasever-$basearch' ,europe: 'https://mirrors.xtom.de/postgresql/repos/yum/15/redhat/rhel-$releasever-$basearch' }}
- { name: pgdg16         ,description: 'PostgreSQL 16'      ,module: pgsql   ,releases: [  8,9,10]       ,arch: [x86_64, aarch64] ,baseurl: { default: 'https://download.postgresql.org/pub/repos/yum/16/redhat/rhel-$releasever-$basearch' ,china: 'https://repo.pigsty.cc/yum/pgdg/16/redhat/rhel-$releasever-$basearch' ,europe: 'https://mirrors.xtom.de/postgresql/repos/yum/16/redhat/rhel-$releasever-$basearch' }}
- { name: pgdg17         ,description: 'PostgreSQL 17'      ,module: pgsql   ,releases: [  8,9,10]       ,arch: [x86_64, aarch64] ,baseurl: { default: 'https://download.postgresql.org/pub/repos/yum/17/redhat/rhel-$releasever-$basearch' ,china: 'https://repo.pigsty.cc/yum/pgdg/17/redhat/rhel-$releasever-$basearch' ,europe: 'https://mirrors.xtom.de/postgresql/repos/yum/17/redhat/rhel-$releasever-$basearch' }}
- { name: pgdg18         ,description: 'PostgreSQL 18'      ,module: pgsql   ,releases: [  8,9,10]       ,arch: [x86_64, aarch64] ,baseurl: { default: 'https://download.postgresql.org/pub/repos/yum/18/redhat/rhel-$releasever-$basearch' ,china: 'https://repo.pigsty.cc/yum/pgdg/18/redhat/rhel-$releasever-$basearch' ,europe: 'https://mirrors.xtom.de/postgresql/repos/yum/18/redhat/rhel-$releasever-$basearch' }}
- { name: pgdg19-beta    ,description: 'PostgreSQL 19 Beta' ,module: beta    ,releases: [  8,9,10]       ,arch: [x86_64, aarch64] ,baseurl: { default: 'https://download.postgresql.org/pub/repos/yum/testing/19/redhat/rhel-$releasever-$basearch' ,china: 'https://repo.pigsty.cc/yum/pgdg/testing/19/redhat/rhel-$releasever-$basearch' ,europe: 'https://mirrors.xtom.de/postgresql/repos/yum/testing/19/redhat/rhel-$releasever-$basearch' }}
```

### Debian / Ubuntu APT 仓库

```yaml
- { name: pgdg           ,description: 'PGDG'               ,module: pgsql   ,releases: [11,12,13,   22,24] ,arch: [x86_64, aarch64] ,baseurl: { default: 'http://apt.postgresql.org/pub/repos/apt/ ${distro_codename}-pgdg main'            ,china: 'https://repo.pigsty.cc/apt/pgdg/ ${distro_codename}-pgdg main' }}
- { name: pgdg-beta      ,description: 'PGDG Beta'          ,module: beta    ,releases: [11,12,13,   22,24] ,arch: [x86_64, aarch64] ,baseurl: { default: 'http://apt.postgresql.org/pub/repos/apt/ ${distro_codename}-pgdg-testing main 19' ,china: 'https://repo.pigsty.cc/apt/pgdg/ ${distro_codename}-pgdg-testing main 19' }}
```


---------

## APT GPG 密钥

PGDG APT 仓库使用以下 GPG 密钥签名: `B97B0AFCAA1A47F044F244A07FCC7D46ACCC4CF8` (`ACCC4CF8`)

MD5 校验和为 `f54c5c1aa1329dc26e33b29762faaec4`，详情参考 https://www.postgresql.org/download/linux/debian/

{{< tabpane text=true persist=header >}}
{{% tab header="官方" %}}
```bash
sudo curl -fsSL https://www.postgresql.org/media/keys/ACCC4CF8.asc -o /usr/share/postgresql-common/pgdg/apt.postgresql.org.asc
. /etc/os-release
sudo sh -c "echo 'deb [signed-by=/usr/share/postgresql-common/pgdg/apt.postgresql.org.asc] https://apt.postgresql.org/pub/repos/apt $VERSION_CODENAME-pgdg main' > /etc/apt/sources.list.d/pgdg.list"
```
{{% /tab %}}
{{% tab header="镜像" %}}
```bash
sudo curl -fsSL https://repo.pigsty.cc/apt/pgdg/ACCC4CF8.key -o /usr/share/postgresql-common/pgdg/apt.postgresql.org.asc
. /etc/os-release
sudo sh -c "echo 'deb [signed-by=/usr/share/postgresql-common/pgdg/apt.postgresql.org.asc] https://repo.pigsty.cc/apt/pgdg/ $VERSION_CODENAME-pgdg main' > /etc/apt/sources.list.d/pgdg.list"
```
{{% /tab %}}
{{< /tabpane >}}


---------

## YUM GPG 密钥

PGDG YUM 仓库使用 `https://ftp.postgresql.org/pub/repos/yum/keys/` 中的一系列密钥进行签名。请自行按需选取使用。


---------

## 兼容性

|   OS 系统代码    | 厂商     | 大版本 |                  PG 大版本                   |   备注   |
|:------------:|:-------|:---:|:-----------------------------------------:|:------:|
| el7.x86_64   | EL     |  7  | **18** **17** **16** **15** **14** **13** |  EOL   |
| el8.x86_64   | EL     |  8  | **18** **17** **16** **15** **14** **13** | 即将 EOL |
| el8.aarch64  | EL     |  8  | **18** **17** **16** **15** **14** **13** | 即将 EOL |
| el9.x86_64   | EL     |  9  | **18** **17** **16** **15** **14** **13** |   OK   |
| el9.aarch64  | EL     |  9  | **18** **17** **16** **15** **14** **13** |   OK   |
| el10.x86_64  | EL     | 10  | **18** **17** **16** **15** **14** **13** |   OK   |
| el10.aarch64 | EL     | 10  | **18** **17** **16** **15** **14** **13** |   OK   |
| d11.x86_64   | Debian | 11  | **18** **17** **16** **15** **14** **13** |  EOL   |
| d11.aarch64  | Debian | 11  | **18** **17** **16** **15** **14** **13** |  EOL   |
| d12.x86_64   | Debian | 12  | **18** **17** **16** **15** **14** **13** |   OK   |
| d12.aarch64  | Debian | 12  | **18** **17** **16** **15** **14** **13** |   OK   |
| d13.x86_64   | Debian | 13  | **18** **17** **16** **15** **14** **13** |   OK   |
| d13.aarch64  | Debian | 13  | **18** **17** **16** **15** **14** **13** |   OK   |
| u20.x86_64   | Ubuntu | 20  | **18** **17** **16** **15** **14** **13** |  EOL   |
| u20.aarch64  | Ubuntu | 20  | **18** **17** **16** **15** **14** **13** |  EOL   |
| u22.x86_64   | Ubuntu | 22  | **18** **17** **16** **15** **14** **13** |   OK   |
| u22.aarch64  | Ubuntu | 22  | **18** **17** **16** **15** **14** **13** |   OK   |
| u24.x86_64   | Ubuntu | 24  | **18** **17** **16** **15** **14** **13** |   OK   |
| u24.aarch64  | Ubuntu | 24  | **18** **17** **16** **15** **14** **13** |   OK   |
{.full-width}

