---
title: 安全模型
weight: 231
description: Pigsty 的信任边界与纵深防御体系：管理节点作为高信任控制面，从默认基线逐步完成生产加固。
icon: fa-solid fa-layer-group
module: [PIGSTY, PGSQL]
categories: [概念]
---

在讨论具体的安全特性之前，值得先回答两个更基本的问题：**信任的根在哪里**，以及 **防线有几道**。
前者决定了你应该重点保护什么，后者决定了当某一道防线失守时，你还剩下什么。


----------------

## 信任边界

Pigsty 是一套基于 Ansible 的声明式部署系统，它的信任模型与其他控制平面系统类似：[**管理节点**](/docs/concept/arch/node#admin节点) 就是控制平面，也是整个部署中最需要保护的节点。

| 角色                                              | 掌握的资产与权限                                             |
|:------------------------------------------------|:-----------------------------------------------------|
| **管理节点**（Admin Node）                            | 配置清单 `pigsty.yml`（通常包含系统与业务凭据）、CA 私钥、对所有节点的 SSH 管理权限 |
| [**INFRA 节点**](/docs/concept/arch/node#infra节点) | 监控告警、DNS、Nginx 入口、软件仓库                               |
| [**数据库节点**](/docs/concept/arch/node#pgsql节点)    | 数据库实例、本地 dbsu、受限 sudo                                |
| **客户端**                                         | 数据库凭据或客户端证书，经服务端口、HBA 与认证进入                          |
{.full-width}

这些角色掌握的能力不同，并不是简单的线性等级。其中三份资产尤其关键：

1. [**配置清单 `pigsty.yml`**](/docs/concept/iac/inventory)：包含所有组件的密码与凭证。应当严格控制管理节点与配置仓库（如果使用 git 管理）的访问权限。
2. **CA 私钥** `files/pki/ca/ca.key`：整个部署的信任锚点，持有它就可以签发任意受信证书。文件权限为 `0600`，存放于 `0700` 的目录中，建议离线备份。
3. **管理用户的 SSH 私钥**：管理节点通过 SSH 免密 sudo 管理所有纳管节点，这份私钥等价于所有节点的 root 权限。

Pigsty 的 [**安全策略**](https://github.com/pgsty/pigsty/blob/main/SECURITY.md) 对此有明确表述：需要管理节点访问权限、或已持有 `pigsty.yml` 与 CA 私钥才能实施的攻击，不被视作安全漏洞 ——
这些是设计上的高信任控制面，必须以相应的等级加以保护。


----------------

## 七道防线

纵深防御不依赖某一项机制独立解决所有问题，而是让不同控制相互补充。
Pigsty 的安全能力可以归纳为七道防线：

| # | 防线   | 机制                     | 详见                                       |
|:-:|:-----|:-----------------------|:-----------------------------------------|
| 1 | 网络边界 | 防火墙分区、监听地址收敛、统一入口      | 本页下文                                     |
| 2 | 传输加密 | 本地 CA、组件间 TLS          | [**加密通信**](/docs/concept/sec/ca)         |
| 3 | 身份认证 | HBA 规则集、SCRAM 密码、客户端证书 | [**身份认证**](/docs/concept/sec/auth)       |
| 4 | 访问控制 | 角色体系、默认权限、数据库隔离        | [**访问控制**](/docs/concept/sec/ac)         |
| 5 | 主机安全 | SELinux、受限 sudo、专用系统用户 | 本页下文                                     |
| 6 | 数据安全 | 校验和、备份与加密、PITR、防误删     | [**数据安全**](/docs/concept/sec/data)       |
| 7 | 审计追溯 | DDL 与连接日志、审计扩展、集中日志    | [**数据安全**](/docs/concept/sec/data#审计与追溯) |
{.full-width}

其中第 2、3、4、6、7 道防线各有专门章节展开，这里补充说明网络与主机两道防线。

### 网络边界

Pigsty 在节点置备时默认启用防火墙（[`node_firewall_mode`](/docs/node/param#node_firewall_mode) 默认为 `zone` 模式），按操作系统使用 `firewalld` 或 `ufw` 实现：
内网网段（`10.0.0.0/8`、`172.16.0.0/12`、`192.168.0.0/16`，由 [`node_firewall_intranet`](/docs/node/param#node_firewall_intranet) 定义）加入信任区，
公网侧仅放行 [`node_firewall_public_port`](/docs/node/param#node_firewall_public_port) 声明的端口，默认为 `22`（SSH）、`80`、`443`（Web）。

> 默认演示配置 `pigsty.yml` 中额外放行了 `5432` 端口以便本地体验，生产部署通常应当移除。确需直接接入数据库时，应通过安全组、防火墙与 HBA 将来源限制到明确网段。

数据库默认监听所有地址（[`pg_listen`](/docs/pgsql/param#pg_listen)：`0.0.0.0`），实际访问范围由监听地址、防火墙与 HBA 共同决定。对于要求更严格的场景，可以将监听收敛到特定地址：

```yaml
pg_listen: '${ip},${vip},${lo}'   # 仅监听主机 IP、集群 VIP 与本地环回地址
```

默认防火墙不会直接向公网开放 Grafana、VictoriaMetrics 等 Web 基础设施，外部访问通常经由 [**Nginx 门户**](/docs/concept/arch/infra#nginx) 反向代理接入；
数据库流量则通过 HAProxy 提供的 [**服务**](/docs/pgsql/misc/svc) 端口接入。入口越少，越容易加固，也越容易审计。

### 主机安全

主机层的核心原则：**每个系统用户只拥有完成本职工作所需的最小权限**。

- 数据库超级用户 `postgres`（[`pg_dbsu`](/docs/pgsql/param#pg_dbsu)）默认 **不设密码**，只能通过本地 `ident` 认证登录数据库，无法远程以超级用户身份进入。
  它的 sudo 权限由 [`pg_dbsu_sudo`](/docs/pgsql/param#pg_dbsu_sudo) 控制，默认为 `limit` 模式：仅允许免密执行数据库相关服务的 `systemctl` 操作与日志查看，而不是完整的 root 权限。
- 管理用户（[`node_admin_username`](/docs/node/param#node_admin_username)，默认 `dba`）供运维人员与剧本使用，默认拥有免密 sudo（`nopass`）；
  安全敏感的环境可通过 [`node_admin_sudo`](/docs/node/param#node_admin_sudo) 改为 `all`（sudo 需输入密码）或 `limit`（限制命令集）。
- SELinux 由 [`node_selinux_mode`](/docs/node/param#node_selinux_mode) 控制，默认为 `permissive` 模式：记录违规行为但不阻断，为切换到 `enforcing` 强制模式积累基线。

Pigsty 不接管 SSH 服务端配置：禁用口令登录、限制 root 远程登录等操作系统级加固不在剧本管理范围内，应当纳入您自己的主机安全基线。


----------------

## 加固梯度

安全水位的提升不必一步到位。Pigsty 提供了一条清晰的升级路径，每一档都建立在前一档之上：

**第一档：默认基线**。开箱即用的安全能力包括 SCRAM 密码、数据校验和、本地 CA 与组件证书、分层 HBA、四层角色模型、默认备份和防火墙分区。
它适合受信内网中的开发、测试与验证环境；生产部署还需要继续检查凭据、网络边界和客户端验证。

**第二档：随机凭证**。默认密码是公开写在文档里的，任何暴露于网络的部署都必须更换。在生成配置时加上 `-g` 选项，可以随机化配置向导识别的内置参数和示例凭据：

```bash
./configure -g    # --generate：随机化向导识别的默认凭据
```

该选项不会替换 pgBackRest 的 `cipher_pass`、`ha/safe` 中的全部 MinIO 示例凭据，也不会处理用户自定义值。完整范围见 [**默认凭证清单**](/docs/concept/sec/compliance#默认凭证清单)。

**第三档：策略加固（`ha/safe` 模板）**。配置模板 [**`conf/ha/safe.yml`**](/docs/conf/safe) 将多项安全配置组合为一份可以继续定制的参考：

- **TLS 与证书认证**：主要 TCP HBA 规则使用 `ssl`，公网管理员使用客户端证书；PgBouncer 启用 `require`，Patroni API 启用 HTTPS。本地 `ident` 与部分 localhost 口令规则仍然保留。
- **密码策略**：显式预加载 `passwordcheck`，并为内置用户声明 `expire_in`；模板中的示例口令仍需在部署前检查和替换。
- **攻击面收敛**：监听地址收敛至 `${ip},${vip},${lo}`，监控与管理账号从公网访问连接池被显式拒绝。
- **备份加密**：pgBackRest 使用 MinIO 仓库并启用 AES-256-CBC；`pgBR.${pg_cluster}` 是可预测的示例值，必须替换。
- [**安全扩展**](/ext/cate/sec/)：安装 `passwordcheck`、`credcheck`、`pgaudit`、`pgsodium`、`anonymizer` 等安全相关扩展；安装不等于预加载、创建或配置。

**第四档：内核加固（`crit.yml` 参数模板）**。safe 模板默认为集群指定了面向核心业务的 [**CRIT 参数模板**](/docs/pgsql/template/crit)，它相对通用的 `oltp` 模板：

- 强制启用数据校验和，不受 `pg_checksum` 参数影响；
- 启用严格同步复制（`synchronous_mode_strict`），没有可用同步副本时阻塞需要同步确认的写入；
- 记录连接与断开事件；PostgreSQL 18 还会区分连接接收、认证与授权阶段；
- 将 [**watchdog**](/docs/concept/ha/failure/partition#2-linux-watchdog) 配置为 `automatic`，仅在系统存在可用设备时启用。

严格同步模式以不丢失已确认事务为目标，但仍依赖 `synchronous_commit`、同步副本状态和故障切换条件；[**RPO**](/docs/concept/ha/rpo) 需要通过目标拓扑上的故障演练验证。

也可以不使用完整模板，只挑选需要的加固项，声明在集群或全局参数中：

```yaml
pg-meta:
  hosts:
    10.10.10.10: { pg_seq: 1 , pg_role: primary }
    10.10.10.11: { pg_seq: 2 , pg_role: replica }
    10.10.10.12: { pg_seq: 3 , pg_role: replica }
  vars:
    pg_cluster: pg-meta
    pg_conf: crit.yml                    # 使用 crit 内核参数模板
    patroni_ssl_enabled: true            # Patroni API 启用 HTTPS
    pgbouncer_sslmode: require           # Pgbouncer 强制 TLS
    pg_listen: '${ip},${vip},${lo}'      # 监听地址收敛
    pg_libs: '$libdir/passwordcheck, pg_stat_statements, auto_explain'  # 密码强度检查
```


----------------

## 接下来

- 🔑 [**身份认证**](/docs/concept/sec/auth)：HBA 规则集与密码策略
- 👤 [**访问控制**](/docs/concept/sec/ac)：角色体系与最小权限
- 🔐 [**加密通信**](/docs/concept/sec/ca)：本地 CA 与 TLS
- 🔒 [**数据安全**](/docs/concept/sec/data)：完整性、备份与审计
- ✅ [**合规实践**](/docs/concept/sec/compliance)：等保与 SOC 2 映射
