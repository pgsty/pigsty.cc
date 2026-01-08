---
title: 别名翻译
weight: 1203
description: Pigsty 提供软件包别名翻译机制，可以屏蔽底层操作系统的二进制包细节差异，让安装更简易。
icon: fa-solid fa-square-binary
module: [PGSQL]
categories: [参考]
---



PostgreSQL 在不同操作系统上的软件包命名规则存在显著差异：

- **EL 系统**（RHEL/Rocky/Alma/...）使用 `pgvector_17`，`postgis36_17*` 这样的格式
- **Debian/Ubuntu 系统**使用 `postgresql-17-pgvector`，`postgresql-17-postgis-3` 这样的格式

这种差异给用户带来了额外的认知负担：您需要记住不同系统的包名规则，还要处理 PostgreSQL 版本号嵌入的问题。


## 软件包别名

Pigsty 通过 **软件包别名（Package Alias）** 机制解决了这个问题：您只需使用统一的别名，Pigsty 会处理好所有细节：

```yaml
# 使用别名 —— 简单、统一、跨平台
pg_extensions: [ postgis, pgvector, timescaledb ]

# 等效于 EL9 + PG17 上的实际包名
pg_extensions: [ postgis36_17*, pgvector_17*, timescaledb-tsl_17* ]

# 等效于 Ubuntu 24 + PG17 上的实际包名
pg_extensions: [ postgresql-17-postgis-3, postgresql-17-pgvector, postgresql-17-timescaledb-tsl ]
```

## 别名翻译

别名还可以将一组软件包归类为一个整体，例如 Pigsty 默认安装的软件包 —— [**`pg_packages`**](/docs/pgsql/param#pg_packages) 的默认值是：

```yaml
pg_packages:                      # pg packages to be installed, alias can be used
  - pgsql-main pgsql-common
```

Pigsty 将查询当前的操作系统别名清单（假设为 [**`el10.x86_64`**](https://github.com/pgsty/pigsty/blob/main/roles/node_id/vars/el10.x86_64.yml#L105)），将其翻译为 PGSQL 内核，扩展，以及工具包：

```yaml
pgsql-main:    "postgresql$v postgresql$v-server postgresql$v-libs postgresql$v-contrib postgresql$v-plperl postgresql$v-plpython3 postgresql$v-pltcl postgresql$v-llvmjit pg_repack_$v* wal2json_$v* pgvector_$v*"
pgsql-common:  "patroni patroni-etcd pgbouncer pgbackrest pg_exporter pgbackrest_exporter vip-manager"
```

接下来，Pigsty 又进一步通过当前指定的 PG 大版本（假设 [**`pg_version`**](/docs/pgsql/param#pg_version) = `18` ），将 `pgsql-main` 翻译为：

```yaml
pg18-main:   "postgresql18 postgresql18-server postgresql18-libs postgresql18-contrib postgresql18-plperl postgresql18-plpython3 postgresql18-pltcl postgresql18-llvmjit pg_repack_18* wal2json_18* pgvector_18*"
```

通过这种方式，Pigsty 屏蔽了软件包的复杂性，让用户可以简单的指定自己想要的功能组件。


----------------

## 哪些变量可以使用别名？

您可以在以下四个参数中使用包别名，别名会根据翻译流程自动转换为实际的软件包名称：

- [**`pg_extensions`**](/docs/pgsql/param#pg_extensions) - PG 扩展软件包
- [**`pg_packages`**](/docs/pgsql/param#pg_extensions) - PG 内核/基础工具软件包
- [**`repo_packages`**](/docs/infra/param#repo_packages) - 软件包下载参数：下载到本地软件仓库的软件包
- [**`repo_packages_extra`**](/docs/pgsql/param#pg_extensions) - 扩展安装参数：额外下载到本地软件仓库的软件包


--------

## 别名列表

你可以在 Pigsty 项目源代码的 [`roles/node_id/vars/`](https://github.com/pgsty/pigsty/tree/main/roles/node_id/vars) 目录下，找到各操作系统与架构对应的别名映射文件：

- [`el10.x86_64`](https://github.com/pgsty/pigsty/blob/main/roles/node_id/vars/el10.x86_64.yml#L85)
- [`el10.aarch64`](https://github.com/pgsty/pigsty/blob/main/roles/node_id/vars/el10.aarch64.yml#L85)
- [`el9.x86_64`](https://github.com/pgsty/pigsty/blob/main/roles/node_id/vars/el9.x86_64.yml#L85)
- [`el9.aarch64`](https://github.com/pgsty/pigsty/blob/main/roles/node_id/vars/el9.aarch64.yml#L85)
- [`el8.x86_64`](https://github.com/pgsty/pigsty/blob/main/roles/node_id/vars/el8.x86_64.yml#L85)
- [`el8.aarch64`](https://github.com/pgsty/pigsty/blob/main/roles/node_id/vars/el8.aarch64.yml#L85)
- [`u24.x86_64`](https://github.com/pgsty/pigsty/blob/main/roles/node_id/vars/u24.x86_64.yml#L78)
- [`u24.aarch64`](https://github.com/pgsty/pigsty/blob/main/roles/node_id/vars/u24.aarch64.yml#L78)
- [`u22.x86_64`](https://github.com/pgsty/pigsty/blob/main/roles/node_id/vars/u22.x86_64.yml#L78)
- [`u22.aarch64`](https://github.com/pgsty/pigsty/blob/main/roles/node_id/vars/u22.aarch64.yml#L78)
- [`d13.x86_64`](https://github.com/pgsty/pigsty/blob/main/roles/node_id/vars/d13.x86_64.yml#L78)
- [`d13.aarch64`](https://github.com/pgsty/pigsty/blob/main/roles/node_id/vars/d13.aarch64.yml#L78)
- [`d12.x86_64`](https://github.com/pgsty/pigsty/blob/main/roles/node_id/vars/d12.x86_64.yml#L78)
- [`d12.aarch64`](https://github.com/pgsty/pigsty/blob/main/roles/node_id/vars/d12.aarch64.yml#L78)



----------------

## 工作原理


### 别名翻译流程

```bash
用户配置别名 --> 检测操作系统 -->  查找别名映射表 ---> 替换$v占位符 ---> 安装实际软件包
     ↓              ↓               ↓                               ↓
  postgis      el9.x86_64      postgis36_$v*                postgis36_17*
  postgis      u24.x86_64      postgresql-$v-postgis-3      postgresql-17-postgis-3
```



### 版本占位符

Pigsty 的别名系统使用 `$v` 作为 PostgreSQL 版本号的占位符。当您使用 [`pg_version`](/docs/pgsql/param#pg_version) 指定了 PostgreSQL 版本后，所有别名中的 `$v` 都会被替换为实际版本号。

例如，当 `pg_version: 17` 时：

| 别名定义 (EL)             | 展开结果                  |
|-----------------------|-----------------------|
| `postgresql$v*`       | `postgresql17*`       |
| `pgvector_$v*`        | `pgvector_17*`        |
| `timescaledb-tsl_$v*` | `timescaledb-tsl_17*` |

| 别名定义 (Debian/Ubuntu)            | 展开结果                            |
|---------------------------------|---------------------------------|
| `postgresql-$v`                 | `postgresql-17`                 |
| `postgresql-$v-pgvector`        | `postgresql-17-pgvector`        |
| `postgresql-$v-timescaledb-tsl` | `postgresql-17-timescaledb-tsl` |


### 通配符匹配

在 EL 系统上，许多别名使用 `*` 通配符来匹配相关的子包。例如：

- `postgis36_17*` 会匹配 `postgis36_17`、`postgis36_17-client`、`postgis36_17-utils` 等
- `postgresql17*` 会匹配 `postgresql17`、`postgresql17-server`、`postgresql17-libs`、`postgresql17-contrib` 等

这种设计确保您无需逐一列出每个子包，一个别名即可安装完整的扩展。



