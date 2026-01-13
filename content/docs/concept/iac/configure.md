---
title: 配置向导
weight: 212
description: 使用 configure 脚本根据当前环境自动生成推荐的配置文件。
icon: fa-solid fa-wand-magic-sparkles
module: [PIGSTY]
categories: [概念]
tags: [配置, 向导, 安装]
---


Pigsty 提供了一个 **`configure`** 脚本作为 **配置向导**，它能根据当前环境，自动生成合适的 `pigsty.yml` 配置文件。

这是一个 **可选** 的脚本：如果您已经了解了如何配置 Pigsty，大可以直接编辑 `pigsty.yml` 配置文件，跳过向导。

-----------------

## 快速开始

进入 pigsty 源码家目录中，执行 `./configure` 即可自动运行配置向导。不带任何参数时，默认使用 [**`meta`**](/docs/conf/meta) 单节点配置模板：

```bash
cd ~/pigsty
./configure          # 交互式配置向导，自动检测环境并生成配置
```

该命令会以选定的模板为基础，检测当前节点的 IP 地址与区域，并生成适合当前环境的 `pigsty.yml` 配置文件。

{{< asciinema file="demo/configure.cast" markers="3:默认配置,7:指定IP,14:随机密码,17:rich模板,20:app/odoo模板,26:china区域,33:ha/full模板" speed="1.3" autoplay="true" loop="true" >}}


## 功能说明

**`configure`** 脚本会根据环境与输入执行以下调整，并在当前目录下生成 `pigsty.yml` 配置文件。

- 检测当前节点 IP 地址，如果有多个 IP，则要求用户输入一个 **首要的 IP 地址** 作为当前节点的身份标识
- 使用 IP 地址替换配置模板中的占位符 **`10.10.10.10`**，并将其配置为 [**`admin_ip`**](/docs/infra/param#admin_ip) 参数的值。
- 检测当前区域，将 [**`region`**](/docs/infra/param#region) 设置为 **`default`** （全球默认仓库）或 **`china`** （使用中国镜像仓库）
- 针对小微实例（vCPU < 4），为 [**`node_tune`**](/docs/node/param#node_tune) 和 [**`pg_conf`**](/docs/pgsql/param#pg_conf) 参数使用 **`tiny`** 参数模板，优化资源使用。
- 如果指定了 **`-v`** PG 大版本，将 [**`pg_version`**](/docs/pgsql/param#pg_version) 以及所有 PG 别名参数设置为对应大版本。
- 如果指定了 **`-g`** 参数，将所有默认密码替换为随机生成的强密码，提升安全性。（**强烈推荐**）
- 当 PG 大版本 ≥ 17 时优先使用内置的 **`C.UTF-8`** Locale，次选由操作系统支持的 **`C.UTF-8`** 。
- 检测当前环境中，用于执行部署的核心依赖 **`ansible`** 是否可用
- 同时检测部署目标节点是否 ssh 可达，并可以使用 sudo 执行命令。（**`-s`** 跳过）



-----------------

## 使用示例

```bash
# 基本用法
./configure                       # 交互式配置向导
./configure -i 10.10.10.10        # 指定主 IP 地址

# 指定配置模板
./configure -c meta               # 使用默认单节点模板（默认）
./configure -c rich               # 使用功能丰富的单节点模板
./configure -c slim               # 使用精简模板（仅 PGSQL + ETCD）
./configure -c ha/full            # 使用 4 节点高可用沙箱模板
./configure -c ha/trio            # 使用 3 节点高可用模板
./configure -c app/supa           # 使用 Supabase 自托管模板

# 指定 PostgreSQL 版本
./configure -v 17                 # 使用 PostgreSQL 17
./configure -v 16                 # 使用 PostgreSQL 16
./configure -c rich -v 16         # rich 模板 + PG 16

# 区域与代理
./configure -r china              # 使用中国镜像源
./configure -r europe             # 使用欧洲镜像源
./configure -x                    # 导入当前代理环境变量

# 跳过与自动化
./configure -s                    # 跳过 IP 探测，保留占位符
./configure -n -i 10.10.10.10     # 非交互模式，指定 IP
./configure -c ha/full -s         # 4 节点模板，跳过 IP 替换

# 安全增强
./configure -g                    # 生成随机密码
./configure -c meta -g -i 10.10.10.10  # 完整生产配置

# 指定输出与 SSH 端口
./configure -o prod.yml           # 输出到 prod.yml
./configure -p 2222               # 使用 SSH 端口 2222
```


-----------------

## 命令参数

```bash
./configure
    [-c|--conf <template>]      # 配置模板名称（meta|rich|slim|ha/full|...）
    [-i|--ip <ipaddr>]          # 指定主 IP 地址
    [-v|--version <pgver>]      # PostgreSQL 大版本号（13|14|15|16|17|18）
    [-r|--region <region>]      # 上游软件仓库区域（default|china|europe）
    [-o|--output <file>]        # 输出配置文件路径（默认：pigsty.yml）
    [-s|--skip]                 # 跳过 IP 地址探测与替换
    [-x|--proxy]                # 从环境变量导入代理设置
    [-n|--non-interactive]      # 非交互模式（不询问任何问题）
    [-p|--port <port>]          # 指定 SSH 端口
    [-g|--generate]             # 生成随机密码
    [-h|--help]                 # 显示帮助信息
```

### 参数详解

| 参数                      | 说明                                                                |
|:------------------------|:------------------------------------------------------------------|
| `-c, --conf`            | 从 `conf/<template>.yml` 生成配置文件，支持子目录如 `ha/full`                   |
| `-i, --ip`              | 用指定 IP 替换配置模板中的占位符 `10.10.10.10`                                  |
| `-v, --version`         | 指定 PostgreSQL 大版本号（13-18），不指定时保持模板默认值                             |
| `-r, --region`          | 设置软件仓库镜像区域：`default`（默认）、`china`（中国镜像）、`europe`（欧洲镜像）             |
| `-o, --output`          | 指定输出文件路径，默认为 `pigsty.yml`                                         |
| `-s, --skip`            | 跳过 IP 地址探测与替换，保留模板中的 `10.10.10.10` 占位符                            |
| `-x, --proxy`           | 将当前环境的代理变量（`HTTP_PROXY`、`HTTPS_PROXY`、`ALL_PROXY`、`NO_PROXY`）写入配置 |
| `-n, --non-interactive` | 非交互模式，不询问任何问题（需配合 `-i` 指定 IP）                                     |
| `-p, --port`            | 指定 SSH 端口（非默认 22 端口时使用）                                           |
| `-g, --generate`        | **为配置文件中的密码生成随机值，提高安全性（强烈推荐）**                                    |
{.full-width}



-----------------

## 执行流程

`configure` 脚本按照以下顺序执行检测与配置：

```
┌─────────────────────────────────────────────────────────────┐
│                    configure 执行流程                         │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  1. check_region          检测网络区域（GFW 检测）              │
│         ↓                                                   │
│  2. check_version         验证 PostgreSQL 版本号              │
│         ↓                                                   │
│  3. check_kernel          检测操作系统内核（Linux/Darwin）       │
│         ↓                                                   │
│  4. check_machine         检测 CPU 架构（x86_64/aarch64）      │
│         ↓                                                   │
│  5. check_package_manager 检测包管理器（dnf/yum/apt）           │
│         ↓                                                   │
│  6. check_vendor_version  检测 OS 发行版与版本                  │
│         ↓                                                   │
│  7. check_sudo            检测免密 sudo 权限                   │
│         ↓                                                   │
│  8. check_ssh             检测免密 SSH 到本机                   │
│         ↓                                                   │
│  9. check_proxy           处理代理环境变量                      │
│         ↓                                                   │
│ 10. check_ipaddr          探测/输入主 IP 地址                   │
│         ↓                                                   │
│ 11. check_admin           验证管理员 SSH + Sudo 权限            │
│         ↓                                                   │
│ 12. check_conf            选择配置模板                         │
│         ↓                                                   │
│ 13. check_config          生成配置文件                         │
│         ↓                                                   │
│ 14. check_utils           检测 Ansible 等工具是否安装           │
│         ↓                                                   │
│     ✓ 配置完成，输出 pigsty.yml                                │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```


-----------------

## 自动化行为

### 区域检测

脚本会自动检测网络环境，判断是否在中国大陆（GFW 内）：

```bash
# 通过访问 Google 判断网络环境
curl -I -s --connect-timeout 1 www.google.com
```

- 如果无法访问 Google，自动设置 `region: china` 使用国内镜像
- 如果可以访问，使用 `region: default` 默认镜像
- 可通过 `-r` 参数手动指定区域


### IP 地址处理

脚本按以下优先级确定主 IP 地址：

1. **命令行参数**：如果通过 `-i` 指定了 IP，直接使用
2. **单 IP 探测**：如果当前节点只有一个 IP，自动使用
3. **演示 IP 检测**：如果检测到 `10.10.10.10`，自动选择（用于沙箱环境）
4. **交互式输入**：多个 IP 时，提示用户选择或输入

```bash
[WARN] Multiple IP address candidates found:
    (1) 192.168.1.100   inet 192.168.1.100/24 scope global eth0
    (2) 10.10.10.10     inet 10.10.10.10/24 scope global eth1
[ IN ] INPUT primary_ip address (of current meta node, e.g 10.10.10.10):
=> 10.10.10.10
```


### 低端硬件优化

当检测到 CPU 核心数 ≤ 4 时，脚本会自动调整配置：

```bash
[WARN] replace oltp template with tiny due to cpu < 4
```

- 将 [`pg_conf`](/docs/pgsql/param#pg_conf) 从 `oltp.yml` 改为 `tiny.yml`
- 将 [`node_tune`](/docs/node/param#node_tune) 从 `oltp` 改为 `tiny`

这样可以确保在低配虚拟机上也能顺利运行。


### Locale 设置

脚本会在以下情况自动启用 `C.UTF-8` 作为默认 Locale：

- PostgreSQL 版本 ≥ 17（内置 Locale Provider 支持）
- **或者** 当前系统支持 `C.UTF-8` / `C.utf8` Locale

```yaml
pg_locale: C.UTF-8
pg_lc_collate: C.UTF-8
pg_lc_ctype: C.UTF-8
```


### 中国区特殊处理

当区域设置为 `china` 时，脚本会自动：

- 启用 `docker_registry_mirrors` Docker 镜像加速
- 启用 `PIP_MIRROR_URL` Python 镜像加速


### 密码生成

使用 `-g` 参数时，脚本会为以下密码生成 24 位随机字符串：

| 密码参数 | 说明 |
|:---:|:---|
| `grafana_admin_password` | Grafana 管理员密码 |
| `pg_admin_password` | PostgreSQL 管理员密码 |
| `pg_monitor_password` | PostgreSQL 监控用户密码 |
| `pg_replication_password` | PostgreSQL 复制用户密码 |
| `patroni_password` | Patroni API 密码 |
| `haproxy_admin_password` | HAProxy 管理密码 |
| `minio_secret_key` | MinIO Secret Key |
| `etcd_root_password` | ETCD Root 密码 |

同时还会替换以下占位符密码：

- `DBUser.Meta` → 随机密码
- `DBUser.Viewer` → 随机密码
- `S3User.Backup` → 随机密码
- `S3User.Meta` → 随机密码
- `S3User.Data` → 随机密码

```bash
$ ./configure -g
[INFO] generating random passwords...
    grafana_admin_password   : xK9mL2nP4qR7sT1vW3yZ5bD8
    pg_admin_password        : aB3cD5eF7gH9iJ1kL2mN4oP6
    ...
[INFO] random passwords generated, check and save them
```


-----------------

## 配置模板

脚本从 `conf/` 目录读取配置模板，支持以下模板：

### 核心模板

| 模板 | 说明 |
|:---:|:---|
| `meta` | **默认模板**：单节点安装，包含 INFRA + NODE + ETCD + PGSQL |
| `rich` | 功能丰富版：包含几乎所有扩展、MinIO、本地仓库 |
| `slim` | 精简版：仅 PostgreSQL + ETCD，无监控基础设施 |
| `fat` | 完整版：rich 基础上安装更多扩展 |
| `pgsql` | 纯 PostgreSQL 模板 |
| `infra` | 纯基础设施模板 |
{.full-width}

### 高可用模板 (`ha/`)

| 模板 | 说明 |
|:---:|:---|
| `ha/dual` | 2 节点高可用集群 |
| `ha/trio` | 3 节点高可用集群 |
| `ha/full` | 4 节点完整沙箱环境 |
| `ha/safe` | 安全加固版高可用配置 |
| `ha/simu` | 42 节点大规模仿真环境 |
{.full-width}

### 应用模板 (`app/`)

| 模板 | 说明 |
|:---:|:---|
| `supabase` | Supabase 自托管配置 |
| `app/dify` | Dify AI 平台配置 |
| `app/odoo` | Odoo ERP 配置 |
| `app/teable` | Teable 表格数据库配置 |
| `app/registry` | Docker Registry 配置 |
{.full-width}

### 特殊内核模板

| 模板 | 说明 |
|:---:|:---|
| `ivory` | IvorySQL：Oracle 兼容 PostgreSQL |
| `mssql` | Babelfish：SQL Server 兼容 PostgreSQL |
| `polar` | PolarDB：阿里云开源分布式 PostgreSQL |
| `citus` | Citus：分布式 PostgreSQL |
| `oriole` | OrioleDB：新一代存储引擎 |
{.full-width}

### 演示模板 (`demo/`)

| 模板 | 说明 |
|:---:|:---|
| `demo/demo` | 演示环境配置 |
| `demo/redis` | Redis 集群演示 |
| `demo/minio` | MinIO 集群演示 |


-----------------

## 输出示例

```bash
$ ./configure
configure pigsty v4.0.0 begin
[ OK ] region = china
[ OK ] kernel  = Linux
[ OK ] machine = x86_64
[ OK ] package = rpm,dnf
[ OK ] vendor  = rocky (Rocky Linux)
[ OK ] version = 9 (9.5)
[ OK ] sudo = vagrant ok
[ OK ] ssh = vagrant@127.0.0.1 ok
[WARN] Multiple IP address candidates found:
    (1) 192.168.121.193	    inet 192.168.121.193/24 brd 192.168.121.255 scope global dynamic noprefixroute eth0
    (2) 10.10.10.10	    inet 10.10.10.10/24 brd 10.10.10.255 scope global noprefixroute eth1
[ OK ] primary_ip = 10.10.10.10 (from demo)
[ OK ] admin = vagrant@10.10.10.10 ok
[ OK ] mode = meta (el9)
[ OK ] locale  = C.UTF-8
[ OK ] ansible = ready
[ OK ] pigsty configured
[WARN] don't forget to check it and change passwords!
proceed with ./deploy.yml
```


-----------------

## 环境变量

脚本支持以下环境变量：

| 环境变量 | 说明 | 默认值 |
|:---:|:---|:---:|
| `PIGSTY_HOME` | Pigsty 安装目录 | `~/pigsty` |
| `METADB_URL` | 元数据库连接 URL | `service=meta` |
| `HTTP_PROXY` | HTTP 代理 | - |
| `HTTPS_PROXY` | HTTPS 代理 | - |
| `ALL_PROXY` | 通用代理 | - |
| `NO_PROXY` | 代理白名单 | 内置默认值 |
{.full-width}


-----------------

## 注意事项

1. **免密访问**：运行 `configure` 前，确保当前用户具有免密 sudo 权限和免密 SSH 到本机的能力。可以通过 `bootstrap` 脚本自动配置。

2. **IP 地址选择**：请选择**内网 IP** 作为主 IP 地址，不要使用公网 IP 或 `127.0.0.1`。

3. **密码安全**：生产环境**务必**修改配置文件中的默认密码，或使用 `-g` 参数生成随机密码。

4. **配置检查**：脚本执行完成后，建议检查生成的 `pigsty.yml` 文件，确认配置符合预期。

5. **多次执行**：可以多次运行 `configure` 重新生成配置，每次会覆盖现有的 `pigsty.yml`。

6. **macOS 限制**：在 macOS 上运行时，脚本会跳过部分 Linux 特有的检测，并使用占位符 IP `10.10.10.10`。macOS 只能作为管理节点使用。


-----------------

## 常见问题

### 如何使用自定义配置模板？

将您的配置文件放到 `conf/` 目录下，然后使用 `-c` 参数指定：

```bash
cp my-config.yml ~/pigsty/conf/myconf.yml
./configure -c myconf
```

### 如何为多集群生成不同配置？

使用 `-o` 参数指定不同的输出文件：

```bash
./configure -c ha/full -o cluster-a.yml
./configure -c ha/trio -o cluster-b.yml
```

然后在执行剧本时指定配置文件：

```bash
./deploy.yml -i cluster-a.yml
```

### 非交互模式下如何处理多 IP？

必须使用 `-i` 参数明确指定 IP 地址：

```bash
./configure -n -i 10.10.10.10
```

### 如何保留模板中的占位符 IP？

使用 `-s` 参数跳过 IP 替换：

```bash
./configure -c ha/full -s   # 保留 10.10.10.10 占位符
```


-----------------

## 相关文档

- [**配置清单**](/docs/concept/iac/inventory/)：了解 Ansible 配置清单的结构
- [**配置参数**](/docs/concept/iac/parameter/)：了解 Pigsty 参数的层级与优先级
- [**配置模板**](/docs/conf/)：查看所有可用的配置模板
- [**安装部署**](/docs/setup/install/)：了解完整的安装流程
- [**元数据库**](/docs/concept/iac/cmdb/)：使用 PostgreSQL 作为动态配置源
