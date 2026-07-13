---
title: 安全考量
weight: 395
description: Pigsty 生产部署中的凭据、网络、认证、加密、数据保护与审计检查。
icon: fas fa-shield-halved
module: [PIGSTY]
categories: [教程]
---

Pigsty 默认配置面向受信内网中的开发、测试和演示。生产部署需要根据实际威胁模型完成凭据、网络、认证、证书、备份和审计配置。

安全机制及其边界见 [**安全与合规**](/docs/concept/sec/)，可执行检查项见 [**合规实践**](/docs/concept/sec/compliance#上线检查)。[**`ha/safe`**](/docs/conf/safe) 是加固配置示例，不替代逐项审查。


----------------

## 机密性

### 重要文件

重点保护以下资产：

- `pigsty.yml` 与其他 inventory：通常包含系统和业务凭据；
- `files/pki/ca/ca.key`：可以签发受部署信任的证书；
- 管理用户 SSH 私钥：默认可以在纳管节点上执行 sudo；
- 客户端证书私钥与备份加密密钥；
- 自动化过程中生成的 `/pg/tmp/pg-user-*.sql`。

应限制管理节点和配置仓库访问，避免把完整配置或私钥提交到公开仓库。CA 私钥和恢复所需配置应进行受控备份。

### 密码

生产部署必须替换所有公开默认凭据。建议先使用：

```bash
./configure -g
```

该选项不会替换 pgBackRest `cipher_pass`、`ha/safe` 中的全部 MinIO 示例凭据，也不会处理用户自定义值。应按照 [**默认凭据**](/docs/concept/sec/compliance#默认凭据) 复核生成结果。

PostgreSQL 默认使用 SCRAM-SHA-256 保存新设置或更新的口令。需要强制复杂度时，在 [**`pg_libs`**](/docs/pgsql/param#pg_libs) 中预加载 `passwordcheck`，或配置 `credcheck`。账号有效期可以通过 `expire_in` 或 `expire_at` 声明。

凭据轮换还需要同步更新数据库用户、PgBouncer 用户列表、组件配置和使用方连接信息。执行前应准备回退方案。


----------------

## 网络边界

### IP地址

PostgreSQL 默认监听 `0.0.0.0`。需要收敛监听地址时，可设置：

```yaml
pg_listen: '${ip},${vip},${lo}'
```

监听地址不是唯一边界。生产环境应同时检查：

- 云安全组或上游防火墙；
- [**`node_firewall_public_port`**](/docs/node/param#node_firewall_public_port)；
- [**`node_firewall_intranet`**](/docs/node/param#node_firewall_intranet) 是否把过大的网段视为可信；
- PostgreSQL 与 PgBouncer [**HBA**](/docs/concept/sec/auth)；
- Patroni REST API 的 allowlist。

演示配置 `pigsty.yml` 会额外向公网放行 `5432`，生产环境通常应移除。需要直接连接数据库时，应限制到明确的业务网段。

### 网络流量

- PostgreSQL 服务端默认启用 TLS，但内网 HBA 默认不强制 TLS；
- PgBouncer TLS 默认关闭，由 [**`pgbouncer_sslmode`**](/docs/pgsql/param#pgbouncer_sslmode) 控制；
- Patroni REST API HTTPS 默认关闭，由 [**`patroni_ssl_enabled`**](/docs/pgsql/param#patroni_ssl_enabled) 控制；
- Nginx 与 MinIO 默认启用 HTTPS；etcd 客户端和对等通信使用 TLS。

HBA 的 `auth: ssl` 只要求加密连接。客户端还应使用 `sslmode=verify-full` 和可信 CA 验证数据库服务端，详见 [**加密通信**](/docs/concept/sec/ca#客户端验证服务端)。

Grafana、VictoriaMetrics 等组件可能监听节点端口，默认防火墙不会将其直接开放到公网。对外访问应优先通过 Nginx，并限制管理页面的来源地址和身份。


----------------

## 身份认证与访问控制

- 使用 [**HBA**](/docs/concept/sec/auth) 明确用户、数据库、来源地址和认证方式，避免宽泛的 `world` 规则；
- 为高权限远程用户使用 `auth: cert`，并建立客户端证书交付与吊销流程；
- 通过 [**内置角色**](/docs/concept/sec/ac#角色体系) 分配业务权限，不向普通业务账号授予超级用户；
- 为多业务共享集群设置 `revokeconn: true`，并检查实际数据库 ACL；
- 使用声明的数据库属主或受控管理角色创建对象，确保默认权限生效；
- 需要隔离离线查询时，显式为 `dbrole_offline` 的 HBA 规则设置 `role: offline`。

变更 HBA、用户或角色后，应同时核对配置清单和数据库中的实际状态。


----------------

## 完整性

Pigsty 默认启用页级数据校验和，用于发现写入后发生的页面损坏。校验和不能检测所有内存错误、逻辑错误和应用写入错误。

[**CRIT 模板**](/docs/pgsql/template/crit) 启用 Patroni 严格同步模式和更详细的连接日志。同步模式以不丢失已确认事务为目标，但依赖 `synchronous_commit`、同步副本状态和故障切换条件；没有同步副本时会阻塞写入。

watchdog 在 CRIT 中配置为 `automatic`，只有系统存在可用 watchdog 设备时才会启用。是否需要 `required` 模式应结合硬件和可用性要求评估。


----------------

## 可用性

- 关键集群通常应至少部署三个实例，并把实例分散到独立故障域；
- 使用 HAProxy、VIP 或 DNS 服务名接入，避免客户端绑定固定主库地址；
- etcd 应使用奇数节点，并分散到独立故障域；
- INFRA、DNS、监控和软件仓库也应根据可用性要求消除单点；
- 使用 [**`pg_rpo`**](/docs/pgsql/param#pg_rpo) 和 [**`pg_rto`**](/docs/pgsql/param#pg_rto) 时，应理解其配置含义并通过演练验证目标。

副本只解决部分节点故障，不能替代备份。


----------------

## 备份与恢复

- 本地 pgBackRest 仓库默认不加密，并与数据库主机共享故障域；
- MinIO 仓库默认启用 AES-256-CBC，但 `cipher_pass: pgBackRest` 是公开值，必须替换；
- `ha/safe` 中的 `pgBR.${pg_cluster}` 也是示例值，不应作为最终密钥；
- 重要备份应保存到独立故障域，并评估对象锁、版本控制或离线副本；
- 定期执行全量恢复和 PITR 演练，验证 WAL、密钥、恢复时间和应用一致性。

具体机制见 [**数据安全**](/docs/concept/sec/data) 与 [**备份恢复**](/docs/concept/pitr/)。


----------------

## 审计与响应

默认 OLTP 模板记录 DDL、慢查询和 PostgreSQL 18 的连接授权事件；CRIT 模板进一步记录连接和断开事件。

`pgaudit` 需要安装、预加载并配置审计策略，单纯安装软件包不会产生 SQL 审计日志。启用 Vector 和 VictoriaLogs 后，还应根据要求调整日志保留周期、访问权限与归档方式。

指标、日志和告警只提供事件输入。生产环境还需建立告警分级、值班、事件判定、响应、取证和复盘流程。


----------------

## 主机与软件供应链

- 根据兼容性验证结果将 SELinux 从默认 `permissive` 调整为 `enforcing`；
- 禁用不需要的 SSH 口令和 root 远程登录，并考虑堡垒机或多因素认证；
- 审查管理用户和数据库系统用户的 sudo 范围；
- 及时升级受支持的 Pigsty 和上游组件版本；
- 核对软件仓库 GPG 公钥指纹，并按需要启用逐包签名验证。

供应链与漏洞响应说明见 [**合规实践**](/docs/concept/sec/compliance#供应链与漏洞响应)。
