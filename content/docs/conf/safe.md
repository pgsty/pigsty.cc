---
title: ha/safe
weight: 850
description: 安全加固的高可用配置模板，采用高标准的安全最佳实践
icon: fa-solid fa-shield-halved
categories: [参考]
---

`ha/safe` 配置模板基于 `ha/trio` 模板修改，是一个安全加固的专用配置模板，采用高标准的安全最佳实践。


--------

## 配置概览

- 配置名称： `ha/safe`
- 节点数量： 三节点（可选添加延迟副本）
- 配置说明：安全加固的高可用配置模板，采用高标准的安全最佳实践
- 适用系统：`el8`, `el9`, `el10`, `d12`, `d13`, `u22`, `u24`
- 适用架构：`x86_64`（部分安全扩展在 ARM64 不可用）
- 相关配置：[`ha/trio`](/docs/conf/trio/)，[`ha/full`](/docs/conf/full/)

启用方式：

```bash
./configure -c ha/safe [-i <primary_ip>]
```


--------

## 安全加固措施

`ha/safe` 模板实现了以下安全加固：

- **强制 SSL 加密**：PostgreSQL 和 PgBouncer 均启用 SSL
- **强密码策略**：使用 `passwordcheck` 扩展强制密码复杂度
- **用户过期时间**：所有用户设置 20 年过期时间
- **最小化连接范围**：限制 PostgreSQL/Patroni/PgBouncer 监听地址
- **严格 HBA 规则**：强制 SSL 认证，管理员需证书认证
- **审计日志**：记录连接和断开事件
- **延迟副本**：可选的 1 小时延迟副本，用于误操作恢复
- **关键模板**：使用 `crit.yml` 调优模板，零数据丢失


--------

## 配置内容

源文件地址：[`pigsty/conf/ha/safe.yml`](https://github.com/Vonng/pigsty/blob/main/conf/ha/safe.yml)

{{< readfile file="yaml/ha/safe.yml" code="true" lang="yaml" >}}


--------

## 配置解读

`ha/safe` 模板是 Pigsty 的 **安全加固配置**，专为对安全性有较高要求的生产环境设计。

**安全特性汇总**：

| 安全措施 | 说明 |
|:--|:--|
| SSL 加密 | PostgreSQL/PgBouncer/Patroni 全链路 SSL |
| 强密码策略 | `passwordcheck` 扩展强制密码复杂度 |
| 用户过期 | 所有用户 20 年过期（`expire_in: 7300`） |
| 严格 HBA | 管理员远程访问需要证书认证 |
| 备份加密 | MinIO 备份启用 AES-256-CBC 加密 |
| 审计日志 | `pgaudit` 扩展记录 SQL 审计日志 |
| 延迟副本 | 1 小时延迟副本用于误操作恢复 |

**适用场景**：
- 金融、医疗、政务等高安全要求行业
- 需要满足合规审计要求的环境
- 对数据安全有极高要求的关键业务

**注意事项**：
- 部分安全扩展在 ARM64 架构不可用，请酌情启用
- 所有默认密码必须修改为强密码
- 建议配合定期安全审计使用

