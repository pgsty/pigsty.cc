---
title: 七层安全模型
weight: 231
description: Pigsty 的纵深防御模型：从物理到用户的多层安全基线。
icon: fa-solid fa-layer-group
module: [PIGSTY, PGSQL]
categories: [概念]
---

安全不是一道墙，而是一座城。Pigsty 采用**纵深防御**策略，在七个层次上构建多重保护，即使某一层被突破，仍有其他层提供保护。

这种分层思路解决三类核心风险：

- **边界被突破**：降低“单点失守导致全盘失守”的概率。
- **内部滥用**：即使内部账号被盗，也能通过最小权限限制破坏范围。
- **不可预期故障**：硬件、软件、人为错误都能被“多层兜底”。


--------

## 概览

{{< infographic >}}
```
infographic sequence-pyramid-simple
data
  title 七层安全模型
  desc Pigsty 纵深防御体系：从物理到用户的多层保护
  items
    - label 物理与介质
      value 100
      desc 数据校验和 · 介质盗取防护
      time L1
      icon mingcute/building-4-fill
      illus server-cluster
    - label 网络安全
      value 95
      desc 防火墙 · 监听收敛 · TLS
      time L2
      icon mingcute/earth-2-fill
      illus secure-server
    - label 边界安全
      value 90
      desc HAProxy · Nginx · 统一入口
      time L3
      icon mingcute/shield-fill
      illus firewall-protection
    - label 主机安全
      value 85
      desc SELinux · 最小权限 · 系统加固
      time L4
      icon mingcute/computer-fill
      illus server-status
    - label 应用安全
      value 80
      desc HBA · SCRAM · 密码策略
      time L5
      icon mingcute/safe-box-fill
      illus database-security
    - label 数据安全
      value 75
      desc 备份加密 · PITR · 审计
      time L6
      icon mingcute/lock-fill
      illus data-encryption
    - label 用户安全
      value 70
      desc RBAC · 默认权限 · 隔离
      time L7
      icon mingcute/user-security-fill
      illus user-flow
theme light
  palette pigsty
```
{{< /infographic >}}


--------

## L1 物理与介质安全

> 物理层失守时，唯一的对抗手段是数据本身的自我保护。

**解决的问题**

- 硬件故障导致静默数据损坏
- 介质被盗导致数据泄露

**Pigsty 支持**

- **数据校验和**：默认开启 `pg_checksum: true`，可发现坏块/内存错误导致的数据损坏。
- **可选透明加密**：通过 `pg_tde` 等扩展实现数据静态加密，防止介质泄露。


--------

## L2 网络安全

> 控制“谁能接触到服务”，降低攻击面。

**解决的问题**

- 未授权网络访问
- 明文传输被窃听/篡改

**Pigsty 支持**

- **防火墙分区**：`node_firewall_mode` 可启用 `zone`，内网信任、公网受限。
- **监听收敛**：`pg_listen` 可限制监听地址，避免全网暴露。
- **TLS 能力**：HBA 支持 `ssl`/`cert`，保证连接加密与身份校验。


--------

## L3 边界安全

> “统一入口”是可审计、可控制、可封禁的基础。

**解决的问题**

- 多入口难以管控
- 外部系统无处统一加固

**Pigsty 支持**

- **HAProxy 入口**：数据库流量统一入口，便于封禁/限流/切换。
- **Nginx 网关**：基础设施服务统一 HTTPS 入口（`nginx_sslmode`）。
- **集中管理口令**：HAProxy 管理口令、Grafana 管理口令统一在配置中声明。


--------

## L4 主机安全

> 数据库安全的地基：最小权限、访问隔离、系统加固。

**解决的问题**

- 主机被入侵导致全盘失守
- 管理权限过度扩散

**Pigsty 支持**

- **SELinux 模式**：`node_selinux_mode` 可切换 `enforcing` 强制模式。
- **最小权限管理员**：`node_admin_sudo` 支持 `limit` 限制 sudo 命令集。
- **敏感文件权限**：CA 私钥目录默认 0700，私钥文件 0600。


--------

## L5 应用安全

> 认证是所有数据库安全的“第一道闸门”。

**解决的问题**

- 弱密码或明文认证导致账号泄露
- 错误放行导致越权访问

**Pigsty 支持**

- **HBA 分层控制**：默认规则按来源与角色分层，管理员外网访问必须 `ssl`。
- **SCRAM 密码哈希**：`pg_pwd_enc: scram-sha-256` 默认启用。
- **密码强度检查**：`passwordcheck/credcheck` 可启用，阻止弱口令。
- **证书认证**：`auth: cert` 支持客户端证书认证。


--------

## L6 数据安全

> 保障数据在“可用、可恢复、可追责”。

**解决的问题**

- 人为误操作与逻辑错误
- 黑客入侵后数据被篡改或删除

**Pigsty 支持**

- **pgBackRest 备份**：默认启用，支持本地与 MinIO 仓库。
- **备份加密**：MinIO 仓库支持 AES-256-CBC（`cipher_type`）。
- **PITR 恢复**：结合归档可恢复到任意时间点。
- **审计日志**：模板启用 DDL/连接/慢查询日志，可选 `pgaudit`。


--------

## L7 用户安全

> 最小权限不是口号，而是默认行为。

**解决的问题**

- 业务账号拥有过高权限
- 数据库之间相互“穿透”

**Pigsty 支持**

- **四层 RBAC**：`dbrole_readonly/readwrite/admin/offline`。
- **默认权限策略**：对象创建即自动授予正确权限。
- **数据库隔离**：`revokeconn: true` 可隔离跨库访问。
- **公共权限收敛**：撤销 `public` 模式 `CREATE` 权限。


--------

## 安全加固路径

Pigsty 提供安全增强模板：`conf/ha/safe.yml`。它将常见加固项集中封装：

- 强制 SSL、证书认证
- 密码强度与过期策略
- 连接与断开日志
- 防火墙与 SELinux 加固

这条路径可以作为“从默认到合规”的快速升级方案。


--------

## 接下来

- 🔑 [**身份认证**](/docs/concept/sec/auth)：HBA 规则与密码策略
- 👤 [**访问控制**](/docs/concept/sec/ac)：角色系统与权限模型
- 🔐 [**加密通信**](/docs/concept/sec/ca)：TLS 与证书管理
- 🔒 [**数据安全**](/docs/concept/sec/data)：备份与加密
- ✅ [**合规清单**](/docs/concept/sec/compliance)：等保与 SOC2 对照
