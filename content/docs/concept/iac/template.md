---
title: 配置模板
weight: 215
description: 使用预制的配置模板，快速生成适配当前环境的配置文件
icon: fa-solid fa-code
module: [PIGSTY]
categories: [概念]
---

在 Pigsty 中，部署的蓝图细节由 [**配置清单**](/docs/setup/config/) 所定义，也就是 [**`pigsty.yml`**](https://github.com/pgsty/pigsty/blob/main/pigsty.yml) 配置文件，您可以通过声明式配置进行定制。

然而，直接编写配置文件可能会让新用户望而生畏。为此，我们提供了一些开箱即用的配置模板，涵盖了常见的使用场景。

每一个模板都是一个预定义的 `pigsty.yml` 配置文件，包含了适用于特定场景的合理默认值。

您可以根据自己的需要，选择一个模板作为定制起点，然后根据需要进行修改，以满足您的具体需求。


------

## 使用模板

Pigsty 提供了 [**`configure`**](https://github.com/pgsty/pigsty/blob/main/configure) 脚本作为可选的配置向导，它将根据您的环境和输入，生成具有良好默认值的 [**配置清单**](/docs/setup/config/)。

使用 `./configure -c <conf>` 指定配置模板，其中 `<conf>` 是相对于 `conf` 目录的路径（可省略 `.yml` 后缀）。

```bash
./configure                     # 默认使用 meta.yml 配置模板
./configure -c meta             # 显式指定使用 meta.yml 单节点模板
./configure -c rich             # 使用包含全部扩展与 MinIO 的富功能模板
./configure -c slim             # 使用最小化的单节点模板

# 使用不同的数据库内核
./configure -c pgsql            # 原生 PostgreSQL 内核，基础功能 (13~18)
./configure -c citus            # Citus 分布式高可用 PostgreSQL (14~17)
./configure -c mssql            # Babelfish 内核，兼容 SQL Server 协议 (15)
./configure -c polar            # PolarDB PG 内核，Aurora/RAC 风格 (15)
./configure -c ivory            # IvorySQL 内核，兼容 Oracle 语法 (18)
./configure -c mysql            # OpenHalo 内核，兼容 MySQL (14)
./configure -c pgtde            # Percona PostgreSQL Server 透明加密 (18)
./configure -c oriole           # OrioleDB 内核，OLTP 增强 (17)
./configure -c supabase         # Supabase 自托管配置 (15~18)

# 使用多节点高可用模板
./configure -c ha/dual          # 使用 2 节点高可用模板
./configure -c ha/trio          # 使用 3 节点高可用模板
./configure -c ha/full          # 使用 4 节点高可用模板
```

如果不指定模板，Pigsty 默认使用 `meta.yml` 单节点配置模板。


------

## 模板列表

### 主要模板

以下是单节点配置模板，可用于在单台服务器上安装 Pigsty：

| 模板                                 | 说明                            |
|------------------------------------|-------------------------------|
| [**`meta.yml`**](/docs/conf/meta/) | **默认模板**，单节点 PostgreSQL 在线安装  |
| [**`rich.yml`**](/docs/conf/rich/) | 富功能模板，包含本地软件源、MinIO 及更多示例     |
| [**`slim.yml`**](/docs/conf/slim/) | 精简模板，仅安装 PostgreSQL，不含监控与基础设施 |
{.full-width}

### 数据库内核模板

适用于各类数据库管理系统与内核的模板：

| 模板                                         | 说明                                  |
|--------------------------------------------|-------------------------------------|
| [**`pgsql.yml`**](/docs/conf/pgsql/)       | 原生 PostgreSQL 内核，基础功能 (13~18)       |
| [**`citus.yml`**](/docs/conf/citus/)       | Citus 分布式高可用 PostgreSQL (14~17)     |
| [**`mssql.yml`**](/docs/conf/mssql/)       | Babelfish 内核，兼容 SQL Server 协议 (15)  |
| [**`polar.yml`**](/docs/conf/polar/)       | PolarDB PG 内核，Aurora/RAC 风格 (15)    |
| [**`ivory.yml`**](/docs/conf/ivory/)       | IvorySQL 内核，兼容 Oracle 语法 (17)       |
| [**`mysql.yml`**](/docs/conf/mysql/)       | OpenHalo 内核，兼容 MySQL (14)           |
| [**`pgtde.yml`**](/docs/conf/pgtde/)       | Percona PostgreSQL Server 透明加密 (17) |
| [**`oriole.yml`**](/docs/conf/oriole/)     | OrioleDB 内核，OLTP 增强 (17，Debian 包暂缺) |
| [**`supabase.yml`**](/docs/conf/supabase/) | Supabase 自托管配置 (15~17)              |
{.full-width}

您可以后续添加更多节点，或使用 [高可用模板](#高可用模板) 在一开始就规划好集群。


------

### 高可用模板

您可以配置 Pigsty 在多节点上运行，组成高可用（HA）集群：

| 模板                                 | 说明               |
|------------------------------------|------------------|
| [**`dual.yml`**](/docs/conf/dual/) | 2 节点半高可用部署       |
| [**`trio.yml`**](/docs/conf/trio/) | 3 节点标准高可用部署      |
| [**`full.yml`**](/docs/conf/full/) | 4 节点标准部署         |
| [**`safe.yml`**](/docs/conf/safe/) | 4 节点安全增强部署，含延迟从库 |
| [**`simu.yml`**](/docs/conf/simu/) | 20 节点生产环境模拟      |
{.full-width}


------

### 应用模板

您可以使用以下模板运行 Docker 应用/软件：

| 模板 | 说明 |
|------|------|
| [**`supa.yml`**](/docs/conf/supabase/) | 启动单节点 Supabase |
| [**`odoo.yml`**](/docs/conf/odoo/) | 启动 Odoo ERP 系统 |
| [**`dify.yml`**](/docs/conf/dify/) | 启动 Dify AI 工作流系统 |
| [**`electric.yml`**](/docs/conf/electric/) | 启动 Electric 同步引擎 |
{.full-width}


------

### 演示模板

除主要模板外，Pigsty 还提供了一组面向不同场景的演示模板：

| 模板 | 说明 |
|------|------|
| [**`el.yml`**](/docs/conf/el/) | EL 8/9 系统的全参数配置文件 |
| [**`debian.yml`**](/docs/conf/debian/) | Debian/Ubuntu 系统的全参数配置文件 |
| **`remote.yml`** | 监控远程 PostgreSQL 集群或 RDS 的示例配置 |
| **`redis.yml`** | Redis 集群示例配置 |
| [**`minio.yml`**](/docs/conf/minio/) | 3 节点 MinIO 集群示例配置 |
| [**`demo.yml`**](/docs/conf/demo/) | Pigsty [公开演示站](https://demo.pigsty.cc) 的配置文件 |
{.full-width}


------

### 构建模板

以下配置模板用于开发和测试目的：

| 模板 | 说明 |
|------|------|
| **`build.yml`** | EL 9/10、Debian 12/13、Ubuntu 22.04/24.04 开源构建配置 |
{.full-width}

