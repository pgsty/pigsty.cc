---
title: "pgBouncer 1.25 中文文档"
linkTitle: pgbouncer 文档
weight: 8100
description: >
  PgBouncer —— PostgreSQL 轻量级连接池，v1.25 中文文档
icon: fas fa-baseball
sidebar_root_for: self
module: [PGBOUNCER]
category: [概念]
---

> 原始页面： <https://www.pgbouncer.org/>

**pgbouncer** 是 PostgreSQL 的连接池。任何目标应用都可以像连接 PostgreSQL 服务器一样连接到 **pgbouncer**，**pgbouncer** 将负责创建到实际服务器的连接，或者复用已有的连接。

**pgbouncer** 的目标是降低向 PostgreSQL 建立新连接所带来的性能损耗。

为了在连接池化时不破坏事务语义，**pgbouncer** 在轮换连接时支持多种池化类型：

- **会话池化**：最温和的方式。当客户端连接时，将为其分配一个服务端连接，并在客户端保持连接期间始终持有。当客户端断开时，服务端连接将放回连接池。这是默认方式。
- **事务池化**：仅在事务期间为客户端分配服务端连接。当 PgBouncer 检测到事务结束时，服务端连接将放回连接池。
- **语句池化**：最激进的方式。查询完成后，服务端连接立即放回连接池。此模式禁止多语句事务。
