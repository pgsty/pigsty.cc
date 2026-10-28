---
title: "PgBouncer 1.26.1 中文文档"
linkTitle: pgbouncer 文档
weight: 8100
description: "PgBouncer —— PostgreSQL 轻量级连接池，v1.26.1 中文文档"
icon: fas fa-baseball
sidebar_root_for: self
module: [PGBOUNCER]
categories: [概念]
upstream_link: "https://www.pgbouncer.org/"
upstream_source: "pgbouncer"
upstream_ref: "v1.26.1"
search_keywords: ["v1.26.1"]
cascade: {"upstream_source": "pgbouncer"}
---

本手册以 2026-10-14 发布的 [PgBouncer 1.26.1](https://github.com/pgbouncer/pgbouncer/releases/tag/pgbouncer_1_26_1) 为基准。与此前版本的差异请参阅 [发布说明](/docs/pgbouncer/changelog/#pgbouncer-126x)。

**pgbouncer** 是 PostgreSQL 的连接池。任何目标应用都可以像连接 PostgreSQL 服务器一样连接到 **pgbouncer**，**pgbouncer** 将负责创建到实际服务器的连接，或者复用已有的连接。

**pgbouncer** 的目标是降低向 PostgreSQL 建立新连接所带来的性能损耗。

为了在连接池化时不破坏事务语义，**pgbouncer** 在轮换连接时支持多种池化类型：

- **会话池化**：最温和的方式。当客户端连接时，将为其分配一个服务端连接，并在客户端保持连接期间始终持有。当客户端断开时，服务端连接将放回连接池。这是默认方式。
- **事务池化**：仅在事务期间为客户端分配服务端连接。当 PgBouncer 检测到事务结束时，服务端连接将放回连接池。
- **语句池化**：最激进的方式。查询完成后，服务端连接立即放回连接池。此模式禁止多语句事务。

## 来源与许可 {#upstream-attribution}

本手册以 PgBouncer 1.26.1 为基准，于 2026-10-28 从 [PG.CENTER 中文文档](https://doc.pg.center/zh/pgbouncer/) 同步，并适配本站路径与导航。

Copyright (c) 2007-2009 Marko Kreen, Skype Technologies OÜ。原始文档采用 [ISC 许可证](https://opensource.org/license/isc-license-txt)，完整版权与许可声明见 [上游文件](https://github.com/pgbouncer/pgbouncer/blob/pgbouncer_1_26_1/COPYRIGHT)。
