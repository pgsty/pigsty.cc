---
title: "特性"
weight: 10
description: "PgBouncer 特性——池化模式与 SQL 兼容性"
icon: fa-solid fa-wand-magic-sparkles
module: [PGBOUNCER]
categories: [概念]
---

> 原始页面： <https://www.pgbouncer.org/features.html>

- 连接轮换时，按激进程度分为以下几种策略：

  **会话池化**
  : 最温和的方式。当客户端连接时，将为其分配一个服务端连接，并在客户端保持连接期间始终持有。当客户端断开时，服务端连接将放回连接池。此模式支持所有 PostgreSQL 特性。

  **事务池化**
  : 仅在事务期间为客户端分配服务端连接。当 PgBouncer 检测到事务结束时，服务端连接将放回连接池。此模式会破坏 PostgreSQL 的部分会话级特性，只有在应用程序配合、不使用不兼容特性的情况下才可使用。不兼容特性详见下表。

  **语句池化**
  : 最激进的方式。这是事务池化的变体：禁止多语句事务。这是为了在客户端强制执行“自动提交”（autocommit）模式，主要面向 PL/Proxy。

- 内存占用极低（默认每连接仅需 2 kB）。这是因为 PgBouncer 无需一次性看到完整的数据包。

- 不绑定到单一后端服务器。目标数据库可以分布在不同的主机上。

- 支持大多数配置项的在线重新配置。

- 支持通过多个进程配合 [`so_reuseport`](/docs/pgbouncer/config/#so_reuseport) 进行 [滚动重启与升级](/docs/pgbouncer/usage/#shutdown-wait_for_clients)。旧的在线重启功能（`-R`）已在 1.26.0 中移除。

--------

## 各池化模式的 SQL 特性兼容表

下表列出了 PostgreSQL 的各项特性及其与 PgBouncer 池化模式的兼容性。请注意，事务池化 *在设计上* 就会打破客户端对服务端的预期，只有在应用程序配合、不使用不可用特性的情况下方可使用。

| 特性                             | 会话池化          |  事务池化             |
|----------------------------------|:----------------:|:---------------------:|
| Startup parameters [^0]          | 是               |          是           |
| SET/RESET                        | 是               | 已跟踪参数支持 [^0] |
| LISTEN                           | 是               |         不支持         |
| NOTIFY                           | 是               |          是           |
| WITHOUT HOLD CURSOR              | 是               |          是           |
| WITH HOLD CURSOR                 | 是               |         不支持         |
| Protocol-level prepared plans    | 是               |       是 [^1]         |
| PREPARE / DEALLOCATE             | 是               |         不支持         |
| ON COMMIT DROP temp tables       | 是               |          是           |
| PRESERVE/DELETE ROWS temp tables | 是               |         不支持         |
| Cached plan reset                | 是               |          是           |
| LOAD statement                   | 是               |         不支持         |
| Session-level advisory locks     | 是               |         不支持         |

[^0]: 自 1.26.0 起，PgBouncer 会跟踪所有由服务端上报且客户端可修改的参数：`application_name`、`client_encoding`、`DateStyle`、`default_transaction_read_only`（PostgreSQL 14+）、`IntervalStyle`、`scram_iterations`（PostgreSQL 16+）、`search_path`（PostgreSQL 18+）、`session_authorization`、`standard_conforming_strings` 和 `TimeZone`。对于服务端不报告的参数，只能跟踪启动时指定的值，后续的 `SET` 修改不会被跟踪。相关细节及扩展上报的参数，请参阅 [`track_extra_parameters`](/docs/pgbouncer/config/#track_extra_parameters) 和 [`ignore_startup_parameters`](/docs/pgbouncer/config/#ignore_startup_parameters)。

[^1]: 当 [`max_prepared_statements`](/docs/pgbouncer/config/#max_prepared_statements) 为非零值时，启用协议级预处理语句支持。默认值为 200，设为 0 可禁用此支持。SQL 级 `PREPARE` / `DEALLOCATE` 仍不兼容事务池化；启用跟踪时的 `DEALLOCATE ALL` 和 `DISCARD ALL` 除外。
