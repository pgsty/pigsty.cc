---
title: 数据安全
weight: 235
description: 数据完整性、备份与恢复、加密与审计。
icon: fa-solid fa-database
module: [PIGSTY, PGSQL]
categories: [概念]
---

数据安全关注三件事：**完整性、可恢复性、保密性**。Pigsty 在默认配置中已启用关键能力，并支持按需加固。


---------------------

## 数据完整性

**解决的问题**

- 磁盘坏块、内存错误导致的静默损坏
- 意外写入导致的数据污染

**Pigsty 支持**

- **数据校验和**：默认 `pg_checksum: true`，初始化时启用 `data-checksums`。
- **副本兜底**：主库坏块可从从库恢复（与 HA 配合使用）。


---------------------

## 可恢复性（备份与 PITR）

**解决的问题**

- 误删误改
- 灾难性故障导致数据丢失

**Pigsty 支持**

- **pgBackRest 默认启用**：`pgbackrest_enabled: true`。
- **本地仓库**：默认保留 2 份完整备份。
- **远程仓库**：可接入 MinIO，支持对象存储与多副本。
- **PITR**：结合 WAL 归档进行任意时间点恢复。


---------------------

## 数据保密性

**解决的问题**

- 备份被窃导致数据外泄
- 介质被盗导致明文数据泄露

**Pigsty 支持**

- **备份加密**：MinIO 仓库支持 AES-256-CBC（`cipher_type`）。
- **透明加密（可选）**：通过 `pg_tde` 等扩展实现数据静态加密。
- **密钥隔离**：建议将 `cipher_pass` 与 CA 私钥分离管理。


---------------------

## 审计与可追溯

**解决的问题**

- 无法追责与还原操作
- 合规审计缺少证据

**Pigsty 支持**

- **日志收集**：模板默认启用 `logging_collector`。
- **DDL 审计**：`log_statement: ddl`。
- **慢查询**：`log_min_duration_statement`。
- **连接日志**：`log_connections`（PG18+）。
- **审计扩展**：`pgaudit`、`pgauditlogtofile` 可选。


---------------------

## 加固建议

- 对远程备份强制加密与专用密钥。
- 定期演练 PITR，验证恢复链路。
- 对关键业务启用 `pgaudit`。
- 结合 [高可用](/docs/concept/ha/) 形成“备份 + 副本”双层兜底。


---------------------

## 接下来

- 🔐 [**加密通信**](/docs/concept/sec/ca)：证书管理与 TLS
- ✅ [**合规清单**](/docs/concept/sec/compliance)：审计与合规要求
- ⏰ [**备份恢复**](/docs/concept/pitr/)：PITR 机制与实践
