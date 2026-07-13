---
title: ha/safe
weight: 630
description: 三节点高可用与安全加固配置示例。
icon: fa-solid fa-shield-halved
categories: [参考]
---

`ha/safe` 基于三节点高可用拓扑，示范 TLS、客户端证书、口令检查、备份加密和 CRIT 参数模板等安全配置。它是可修改的配置样例，不是合规认证模板。


--------

## 配置概览

- 配置名称：`ha/safe`
- 节点数量：3 个 INFRA、etcd 和 PostgreSQL 节点；可选延迟副本
- 适用系统：`el8`、`el9`、`el10`、`d12`、`d13`、`u22`、`u24`、`u26`
- 适用架构：`x86_64`；部分安全扩展没有 ARM64 软件包
- 相关配置：[**`ha/trio`**](/docs/conf/trio/)、[**`ha/full`**](/docs/conf/full/)

生成配置：

```bash
./configure -c ha/safe -g [-i <primary_ip>]
```

`-g` 只能随机化配置向导识别的凭据。生成后仍需手工替换 MinIO 用户、pgBackRest `cipher_pass` 和其他模板示例值。


--------

## 加固内容

| 配置项 | 模板行为 | 边界与后续操作 |
|:---|:---|:---|
| PostgreSQL HBA | 主要 TCP 规则使用 `ssl`，公网管理员使用 `cert` | 本地 `ident` 和部分 localhost `pwd` 规则保留 |
| PgBouncer | `pgbouncer_sslmode: require` | 客户端仍需按需要验证服务端证书 |
| Patroni | REST API 启用 HTTPS，并限制监听地址 | 仍使用 Basic Auth，应轮换口令 |
| 口令检查 | 在 `pg_libs` 中预加载 `passwordcheck` | 只影响新设置或修改的口令 |
| 用户有效期 | 内置用户和示例业务用户设置 `expire_in: 7300` | 20 年不是轮换策略，应按组织要求缩短 |
| 监听地址 | PostgreSQL 收敛到 `${ip},${vip},${lo}` | 仍需配合防火墙和 HBA |
| 备份 | 使用 MinIO，启用 AES-256-CBC | `pgBR.${pg_cluster}` 是可预测示例值，必须替换 |
| PostgreSQL 参数 | `pg-meta` 使用 `crit.yml` | 严格同步模式可能在无同步副本时阻塞写入 |
| 日志 | CRIT 记录连接和断开事件 | SQL 细粒度审计需另行启用 `pgaudit` |
| 安全扩展 | 安装 `passwordcheck`、`credcheck`、`pgaudit` 等软件包 | 安装不等于预加载、创建或配置 |
| 延迟副本 | 提供注释掉的 1 小时延迟集群示例 | 默认不会创建，需要显式启用 |
{.full-width}


--------

## 使用前检查

- 替换所有公开示例凭据，重点检查 `minio_users`、`pgbackrest_repo`、业务用户和 API 口令；
- 确认 3 个节点位于独立故障域，并按实际网络修改 IP、VIP 和域名；
- 为数据库客户端配置 `sslmode=verify-full` 与可信 CA；
- 确认严格同步模式的可用性影响符合业务要求；
- 根据需要预加载并配置 `pgaudit`、`credcheck` 等扩展；
- 检查 ARM64 环境中的扩展软件包可用性；
- 完成备份恢复、故障切换和证书验证测试。

安全机制说明见 [**安全模型**](/docs/concept/sec/level)、[**身份认证**](/docs/concept/sec/auth)、[**加密通信**](/docs/concept/sec/ca) 和 [**数据安全**](/docs/concept/sec/data)。


--------

## 配置内容

源文件：[**`pigsty/conf/ha/safe.yml`**](https://github.com/pgsty/pigsty/blob/main/conf/ha/safe.yml)

{{< readfile file="yaml/ha/safe.yml" code="true" lang="yaml" >}}
