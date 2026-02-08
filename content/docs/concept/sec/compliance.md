---
title: 合规清单
weight: 236
description: 以 SOC2 与等保三级为切入点，映射 Pigsty 安全能力与证据准备。
icon: fa-solid fa-clipboard-check
module: [PIGSTY, PGSQL]
categories: [概念]
---

合规不是“开关”，而是 **配置 + 流程 + 证据** 的组合：

- **配置**：安全能力是否启用（HBA/TLS/审计/备份）
- **流程**：是否有权限管理、变更、备份演练等制度
- **证据**：日志、配置快照、备份报告、监控告警

本页以 SOC2 与等保三级为切入点，说明 Pigsty 的安全能力与合规映射。


---------------------

## 默认凭证清单（必须修改）

来自源码默认值：

| 组件 | 默认用户名 | 默认密码 |
|---|---|---|
| PostgreSQL 管理员 | `dbuser_dba` | `DBUser.DBA` |
| PostgreSQL 监控 | `dbuser_monitor` | `DBUser.Monitor` |
| PostgreSQL 复制 | `replicator` | `DBUser.Replicator` |
| Patroni API | `postgres` | `Patroni.API` |
| HAProxy 管理 | `admin` | `pigsty` |
| Grafana 管理 | `admin` | `pigsty` |
| MinIO Root | `minioadmin` | `S3User.MinIO` |
| etcd Root | `root` | `Etcd.Root` |
{.full-width}

生产环境必须修改。


---------------------

## 证据准备（建议）

| 证据类型 | 说明 | Pigsty 支持 |
|---|---|---|
| 配置快照 | HBA、角色、TLS、备份策略 | `pigsty.yml` / inventory 配置 |
| 访问控制 | 角色与权限 | `pg_default_roles` / `pg_default_privileges` |
| 连接审计 | 连接、断开、DDL | `log_connections` / `log_statement` |
| 备份报告 | 完整备份与恢复记录 | pgBackRest 日志与任务 |
| 监控告警 | 异常事件记录 | Prometheus + Grafana |
| 证书管理 | CA/证书分发记录 | `files/pki/` / `/etc/pki/ca.crt` |
{.full-width}


---------------------

## SOC2 视角（示例映射）

SOC2 的核心是 **安全、可用性、机密性**。以下为常见控制点的概念映射：

| 控制点（SOC2） | 解决的问题 | Pigsty 能力 | 需要流程 |
|---|---|---|---|
| CC6 逻辑访问控制 | 未授权访问 | HBA + RBAC + 默认权限 | 权限审批与定期审计 |
| CC6 认证强度 | 弱口令/复用 | SCRAM + `passwordcheck` | 密码轮换策略 |
| CC6 传输加密 | 明文传输 | TLS/CA、`ssl`/`cert` | 强制 TLS 政策 |
| CC7 系统监控 | 异常未发现 | Prometheus/Grafana | 告警处理流程 |
| CC7 审计追踪 | 无法追责 | 连接/DDL/慢查日志、`pgaudit` | 日志留存与审查 |
| CC9 业务连续性 | 数据不可恢复 | pgBackRest + PITR | 定期恢复演练 |
{.full-width}

> 以上为概念映射，实际 SOC2 需要配合组织制度与审计证据。


---------------------

## 等保三级（GB/T 22239-2019）映射

等保三级关注“身份鉴别、访问控制、审计、数据安全、通信安全、主机安全、网络边界”等。以下为核心控制点与 Pigsty 能力的对应关系：

| 控制点 | 解决的问题 | Pigsty 能力 | 需要配置/流程 |
|---|---|---|---|
| 身份鉴别唯一性 | 账号混用 | 唯一用户 + SCRAM | 账号管理流程 |
| 口令复杂度 | 弱口令 | `passwordcheck`/`credcheck` | 启用扩展 |
| 口令定期更换 | 长期风险 | `expire_in` | 密码轮换制度 |
| 访问控制 | 越权访问 | RBAC + 默认权限 | 权限审批 |
| 最小权限 | 权限膨胀 | 四层角色模型 | 账号分级 |
| 通信保密性 | 明文泄露 | TLS/CA、HBA `ssl/cert` | 强制 TLS |
| 安全审计 | 无法追责 | 连接/DDL/慢查日志 + `pgaudit` | 日志留存 |
| 数据完整性 | 静默损坏 | `pg_checksum: true` | - |
| 数据备份恢复 | 数据丢失 | pgBackRest + PITR | 演练与验收 |
| 主机安全 | 主机被攻破 | SELinux/防火墙 | 加固策略 |
| 边界安全 | 暴露入口 | HAProxy/Nginx 统一入口 | 网络分区 |
| 安全管理制度 | 缺乏流程 | - | 制度与审批 |
{.full-width}

**提示**：等保三级不仅是技术问题，还需要完善的制度与运维流程支撑。


---------------------

## 合规加固配置片段

```yaml
# 强制 SSL / 证书
pg_hba_rules:
  - { user: '+dbrole_readonly', db: all, addr: intra, auth: ssl }
  - { user: dbuser_dba, db: all, addr: world, auth: cert }

# 密码强度
pg_libs: '$libdir/passwordcheck, pg_stat_statements, auto_explain'
pg_extensions: [ passwordcheck, credcheck ]

# PgBouncer / Patroni TLS
pgbouncer_sslmode: require
patroni_ssl_enabled: true

# 操作系统安全
node_firewall_mode: zone
node_selinux_mode: enforcing
```


---------------------

## 合规检查清单

### 部署前

- [ ] 网络分区与可信 CIDR 明确
- [ ] 证书策略确定（自签/企业 CA）
- [ ] 账号权限分级方案明确

### 部署后（必做）

- [ ] 修改所有默认密码
- [ ] 验证 HBA 规则符合预期
- [ ] 启用并验证 TLS
- [ ] 配置审计与日志留存策略

### 定期维护

- [ ] 权限审计与账号清理
- [ ] 证书轮换
- [ ] 备份恢复演练


---------------------

## 接下来

- 🔑 [**身份认证**](/docs/concept/sec/auth)：HBA 与密码策略
- 🔒 [**数据安全**](/docs/concept/sec/data)：备份与加密
- ♾️ [**高可用**](/docs/concept/ha/)：业务连续性
