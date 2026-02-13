---
title: pgtde
weight: 820
description: Percona PostgreSQL 内核，提供透明数据加密 (pg_tde) 能力
icon: fa-solid fa-lock
categories: [参考]
---

`pgtde` 配置模板使用 Percona PostgreSQL 数据库内核，提供透明数据加密 (Transparent Data Encryption, TDE) 能力。


--------

## 配置概览

- 配置名称： `pgtde`
- 节点数量： 单节点
- 配置说明：Percona PostgreSQL 透明数据加密配置
- 适用系统：`el8`, `el9`, `el10`, `d12`, `d13`, `u22`, `u24`
- 适用架构：`x86_64`
- 相关配置：[`meta`](/docs/conf/meta/)

启用方式：

```bash
./configure -c pgtde [-i <primary_ip>]
```


--------

## 配置内容

源文件地址：[`pigsty/conf/pgtde.yml`](https://github.com/pgsty/pigsty/blob/main/conf/pgtde.yml)

{{< readfile file="yaml/pgtde.yml" code="true" lang="yaml" >}}


--------

## 配置解读

`pgtde` 模板使用 Percona PostgreSQL 内核，提供企业级透明数据加密能力。

**关键特性**：
- **透明数据加密**：数据在磁盘上自动加密，对应用透明
- **密钥管理**：支持本地密钥和外部密钥管理系统 (KMS)
- **表级加密**：可选择性加密敏感表
- **完整兼容**：与原生 PostgreSQL 完全兼容

**适用场景**：
- 需要满足数据安全合规要求（如 PCI-DSS、HIPAA）
- 存储敏感数据（如个人信息、金融数据）
- 需要静态数据加密的场景
- 对数据安全有严格要求的企业环境

**使用方法**：

```sql
-- 创建加密表
CREATE TABLE sensitive_data (
    id SERIAL PRIMARY KEY,
    ssn VARCHAR(11)
) USING pg_tde;

-- 或对现有表启用加密
ALTER TABLE existing_table SET ACCESS METHOD pg_tde;
```

**注意事项**：
- Percona PostgreSQL 基于 PostgreSQL 18
- 加密会带来一定性能开销（通常 5-15%）
- 需要妥善管理加密密钥
- 不支持 ARM64 架构

