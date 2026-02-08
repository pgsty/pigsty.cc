---
title: 安全合规
weight: 230
description: 认证、授权、加密、审计与合规基线，覆盖数据库与基础设施安全。
icon: fa-solid fa-shield-halved
module: [PIGSTY, PGSQL]
categories: [概念]
---

Pigsty 的安全目标是 **CIA 三元组**：

- **机密性**：防止未授权访问与泄露
- **完整性**：防止数据被篡改或静默损坏
- **可用性**：防止故障导致业务中断

Pigsty 的安全理念：

- **默认安全**：开箱即用的安全基线，配置少、覆盖广。
- **纵深防御**：多层保护叠加，单点失守不致系统失守。
- **最小权限**：角色与权限模型贯彻最小授权原则。
- **可合规**：安全能力与流程结合即可通过合规检查。


----------------

## 默认安全基线（解决什么问题）

| 安全选项 | 默认值 | 解决的问题 |
|:---|:---|:---|
| 密码加密 | `pg_pwd_enc: scram-sha-256` | 防止弱哈希与明文泄露 |
| 数据校验 | `pg_checksum: true` | 检测静默数据损坏 |
| HBA 分层 | 管理员外网必须 `ssl` | 防止外网明文访问 |
| 本地 CA | `ca_create: true` | 统一证书信任链 |
| 备份恢复 | `pgbackrest_enabled: true` | 防止误删误改不可恢复 |
| Nginx HTTPS | `nginx_sslmode: enable` | 防止 Web 入口明文泄露 |
| MinIO HTTPS | `minio_https: true` | 防止备份链路窃听 |
| OS 基线 | SELinux `permissive` | 为强制模式预留基础 |
{.full-width}

> 默认配置以“可用、可扩展”为先，生产环境应根据合规要求加固。


----------------

## 加固路线图

Pigsty 提供安全增强模板 `conf/ha/safe.yml`，可快速将默认基线升级到更高安全级别：

- 强制 SSL 与证书认证
- 密码强度与过期策略
- 连接与断开日志
- 防火墙与 SELinux 加固


----------------

## 本章内容

| 章节 | 说明 | 核心问题 |
|:---|:---|:---|
| [**纵深防御**](/docs/concept/sec/level) | 七层安全模型与基线 | 安全体系整体如何落地？ |
| [**身份认证**](/docs/concept/sec/auth) | HBA 规则、密码策略、证书认证 | 如何验证用户身份？ |
| [**访问控制**](/docs/concept/sec/ac) | 角色系统、权限模型、数据库隔离 | 如何控制用户权限？ |
| [**加密通信**](/docs/concept/sec/ca) | TLS、本地 CA、证书管理 | 如何保护传输与证书？ |
| [**数据安全**](/docs/concept/sec/data) | 校验和、备份、加密与恢复 | 数据如何完整可恢复？ |
| [**合规清单**](/docs/concept/sec/compliance) | 等保三级与 SOC2 对照 | 如何满足合规要求？ |
{.full-width}


----------------

## 相关话题

- ♾️ [**高可用**](/docs/concept/ha/)：业务连续性保障
- ⏰ [**备份恢复**](/docs/concept/pitr/)：PITR 与灾难恢复
- 📊 [**可观测性**](/docs/concept/monitor/)：安全事件监控
