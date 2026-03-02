---
title: "版本变更日志"
linkTitle: "版本"
weight: 70
description: "PgBouncer 版本历史与发布说明"
icon: fa-solid fa-scroll
module: [PGBOUNCER]
category: [Reference]
---

> 来源： <https://www.pgbouncer.org/changelog.html>

--------

## PgBouncer 1.25.x

**2025-12-03  -  PgBouncer 1.25.1  -  "Fixing a bunch of bugs before Christmas（圣诞节前修复一堆 Bug）"**

- 安全
  * 修复 CVE-2025-12819：在此版本之前，未经身份验证的攻击者可以在认证过程中，通过在 StartupMessage 中提供恶意的 `search_path` 参数来执行任意 SQL。同时满足以下**所有**条件的系统存在此漏洞：

    1. `track_extra_parameters` 包含 `search_path`（非默认配置，通常仅在涉及 Citus 或 PostgreSQL 18 的场景中配置）
    2. `auth_user` 被设置为非空字符串（非默认配置）
    3. `auth_query` 配置时未使用完全限定的对象名（默认配置，`<` 运算符未经 Schema 限定）

- 修复
    - 修复重连服务器后临时 SCRAM 认证的错误（ [#1432]，引入自 1.25.0）
    - 为不支持 SIMD 的特殊架构补充缺失的类型定义（ [#1414]，引入自 1.25.0）
    - 移除客户端在发送任何数据之前关闭连接时产生的噪音警告日志（ [#1420]，引入自 1.25.0）
    - 防止潜在的 NULL 指针解引用（ [#1423]，引入自 1.25.0）
    - 修复潜在的内存泄漏（ [#1422]，引入自 1.25.0）
    - 修复 SCRAM 对服务端消息的解析（ [#1431]，引入自 1.25.0）

[#1414]: https://github.com/pgbouncer/pgbouncer/pull/1414
[#1420]: https://github.com/pgbouncer/pgbouncer/pull/1420
[#1422]: https://github.com/pgbouncer/pgbouncer/pull/1422
[#1423]: https://github.com/pgbouncer/pgbouncer/pull/1423
[#1431]: https://github.com/pgbouncer/pgbouncer/pull/1431
[#1432]: https://github.com/pgbouncer/pgbouncer/pull/1432

**2025-11-09  -  PgBouncer 1.25.0  -  "The one with LDAP support（支持 LDAP 的版本）"**

- 功能
    * 新增 LDAP 认证支持！可通过 HBA 文件或使用 `auth_ldap_options` 进行配置。（ [#731]）
    * 新增客户端侧直连 TLS 支持。这使客户端能够使用 PostgreSQL 17 引入的更快速的 TLS 连接建立方式。PgBouncer 暂不支持通过此更快方式连接 PostgreSQL 服务器。（ [#1359]）
    * 在 `SHOW CLIENTS` 中新增空闲状态字段。（ [#1191]）
    * 新增 `transaction_timeout` 设置，支持全局配置及用户级别配置。（ [#1242]）
    * 若客户端排队等待超过 5 秒仍未获得连接，则向客户端发送 NOTICE 消息。此时长可通过 `query_wait_notify` 修改或禁用。（ [#1264]）
    * 新增 `scram_iterations` 设置，允许运维人员在安全性与认证速度之间做出权衡。（ [#1339]）
    * 新增 `client_tls13_ciphers` 与 `server_tls13_ciphers`，用于选择启用哪些 TLSv1.3 加密套件。（ [#1352]）
- 变更
    * 大幅提升临时 SCRAM 认证的性能。（ [#1338]）
    * 允许 `KILL` 命令不指定数据库，此时表示终止所有数据库。（ [#1317]）
    * 健康检查查询默认改为发送空查询，而非 `SELECT 1`。（ [#1233]）
    * 将完整的 PAM 队列记录为警告日志，便于排查由此引起的慢查询原因。（ [#1297]）
    * `RELOAD` 命令现在会报告重载过程中发生的任何错误。（ [#1231]）
    * 在关闭过程中开放对 PgBouncer UNIX 套接字的管理连接访问。这使运维人员更容易排查 PgBouncer 进程无法关闭的原因，并可手动执行 `KILL_CLIENT` 终止卡住的连接。（ [#1305]）
    * 修改 `mkauth.py`，不再添加已废弃的第三个字段。（ [#1365]）
    * 改进 `disconnect_client` 和 `disconnect_server` 函数中的 `FATAL` 消息。（ [#1382]）
    * 停止使用已废弃的 OpenSSL 函数 `EVP_PKEY_get0_EC_KEY`，该函数可能在某些 FIPS 实现中引发问题。（ [#1384]）
- 修复
    * 修复涉及长密码（1024 个字符或以上）的崩溃问题。（ [#1215]）
    * 修复使用 `server_tls_sslmode=verify-full` 时多主机连接的问题。（ [#1303]）
    * 修复转发取消请求时偶发的 `FATAL` 错误。（ [#1383]）
    * 修复 `SHOW CONFIG` 中参数的排序问题。（ [#1403]）
    * 加固启动包的解析逻辑。（ [#1407]）

[#731]: https://github.com/pgbouncer/pgbouncer/pull/731
[#1191]: https://github.com/pgbouncer/pgbouncer/pull/1191
[#1215]: https://github.com/pgbouncer/pgbouncer/pull/1215
[#1231]: https://github.com/pgbouncer/pgbouncer/pull/1231
[#1233]: https://github.com/pgbouncer/pgbouncer/pull/1233
[#1242]: https://github.com/pgbouncer/pgbouncer/pull/1242
[#1264]: https://github.com/pgbouncer/pgbouncer/pull/1264
[#1297]: https://github.com/pgbouncer/pgbouncer/pull/1297
[#1303]: https://github.com/pgbouncer/pgbouncer/pull/1303
[#1305]: https://github.com/pgbouncer/pgbouncer/pull/1305
[#1317]: https://github.com/pgbouncer/pgbouncer/pull/1317
[#1338]: https://github.com/pgbouncer/pgbouncer/pull/1338
[#1339]: https://github.com/pgbouncer/pgbouncer/pull/1339
[#1352]: https://github.com/pgbouncer/pgbouncer/pull/1352
[#1359]: https://github.com/pgbouncer/pgbouncer/pull/1359
[#1365]: https://github.com/pgbouncer/pgbouncer/pull/1365
[#1382]: https://github.com/pgbouncer/pgbouncer/pull/1382
[#1383]: https://github.com/pgbouncer/pgbouncer/pull/1383
[#1384]: https://github.com/pgbouncer/pgbouncer/pull/1384
[#1403]: https://github.com/pgbouncer/pgbouncer/pull/1403
[#1407]: https://github.com/pgbouncer/pgbouncer/pull/1407

--------

## PgBouncer 1.24.x

**2025-04-16  -  PgBouncer 1.24.1  -  "CVE-2025-2291 VALID UNTIL yesterday（CVE-2025-2291 昨天已到期）"**

- 安全
  * 修复 CVE-2025-2291：此前 PgBouncer 在通过 `auth_query` 查询密码哈希时，未考虑用户密码的 `VALID UNTIL` 有效期。因此，若将 PgBouncer 用作 PostgreSQL 前端的透明代理，可能允许已过期的密码通过验证。为解决此问题，文档中默认 `auth_query` 及自定义 `auth_query` 函数的示例均已更新，以正确处理 `VALID UNTIL`。如果您使用的是自定义 `auth_query`，请相应更新。如果您使用的是默认 `auth_query`，可以升级到 PgBouncer 1.24.1，或在旧版本中手动修改配置以使用新的默认 `auth_query`。

- 修复
  * 通过回退 HBA 文件中 `pam` 认证支持来修复 PAM 问题。（ [#1291]）（Bug 引入自 1.24.0）
  * 修复用户连接计数递减时的 Bug。该修复已包含在 GitHub 上的 1.24.0 标签中，但发布压缩包未包含此修复。（ [#1238]）（Bug 引入自 1.24.0）
  * 将 `test_load_balance_hosts.py` 添加到发布压缩包中。（ [#1282]）
  * 修复测试相关问题，以便 Debian 打包人员可以正常运行测试。（ [#1266]，[#1250]）

- 文档
  * 更新 `auth_query` 示例，设置安全的 `search_path`。（ [#1245]）

[#1238]: https://github.com/pgbouncer/pgbouncer/pull/1238
[#1291]: https://github.com/pgbouncer/pgbouncer/pull/1291
[#1282]: https://github.com/pgbouncer/pgbouncer/pull/1282
[#1266]: https://github.com/pgbouncer/pgbouncer/pull/1266
[#1250]: https://github.com/pgbouncer/pgbouncer/pull/1250
[#1245]: https://github.com/pgbouncer/pgbouncer/pull/1245

**2025-01-10  -  PgBouncer 1.24.0  -  "New year, new bouncer（新年，新连接池）"**

- 功能
  * 新增对 systemd `Type=notify-reload` 的支持，需要 systemd 253 或更高版本。（ [#1148]）
  * 在管理控制台新增 `KILL_CLIENT` 命令，允许强制终止客户端连接。（ [#1147]）
  * 新增 `max_user_client_connections` 设置，支持全局配置及用户级别配置。（ [#1137]）
  * 新增 `max_db_client_connections` 设置，支持全局配置及数据库级别配置。（ [#1138]）
  * 在 `SHOW USERS` 和 `SHOW DATABASES` 输出中新增 `current_client_connections` 计数器。（ [#1137]，[#1138]）
  * 新增 `load_balance_hosts` 参数，支持**禁止**在多个主机之间进行负载均衡。（ [#736]）
  * 在 `SHOW STATS` 中暴露预备语句使用计数器。（ [#1192]）
  * 新增 `client_idle_timeout` 设置。（ [#1189]）
  * 新增用户级别的 `query_timeout` 和 `reserve_pool_size`。（ [#1180]，[#1228]）
  * 在 HBA 文件中启用 `pam` 认证支持。（ [#326]）

- 变更
  * TLS 配置未发生变更时，`RELOAD` 不再回收连接。此前只要执行 RELOAD，所有 TLS 连接都会被回收，可能导致短暂但严重的性能下降。现在仅在 TLS 设置实际发生变更时才会触发回收。（ [#1157]）
  * 默认启用预备语句支持，`max_prepared_statements` 默认值现为 200。此默认值变更仅影响实际使用预备语句的客户端。如果您使用预备语句，建议阅读 [文档][prepared-docs] 中关于预备语句支持限制的说明。（ [#1144]）
  * 套接字、客户端和服务器现在可通过唯一 ID 在管理输出中进行标识。此前使用指针标识，但指针在断开连接后常被新客户端复用。（ [#1172]）
  * 对空 pidfile 提供更清晰的错误提示。（ [#1195]）
  * `server_login_retry` 失败时，将原始错误返回给客户端。（ [#1152]）
  * `auth_query` 出错时，在日志中记录原始服务器错误。（ [#1187]）
  * 将 `default_pool_size` 设置为 0 表示不限制大小。（ [#1227]）
  * 将数据库级别的 `reserve_pool` 设置重命名为 `reserve_pool_size`，原名称仍作为别名保留。（ [#1232]）

- 修复
  * 更好地处理各种低概率错误情况，例如 OOM 错误，此类情况此前可能导致崩溃或内存泄漏。（ [#1108]，[#1101]，[#1099]，[#1169]，[#1202]）
  * 修正示例配置文件中 `server_tls_sslmode` 的默认值。（ [#1133]）
  * 移除文档中对 `server_tls_protocols` 无效别名的描述。（ [#1155]）
  * 修复同时使用 `auth_query` 和复制连接时的 Bug，该 Bug 会导致此类场景下的连接失败。（ [#1166]）
  * PgBouncer 配置服务器参数期间忽略客户端取消请求。（ [#298]）

[prepared-docs]: /docs/pgbouncer/config/#max_prepared_statements

[#1148]: https://github.com/pgbouncer/pgbouncer/pull/1148
[#1147]: https://github.com/pgbouncer/pgbouncer/pull/1147
[#1137]: https://github.com/pgbouncer/pgbouncer/pull/1137
[#1138]: https://github.com/pgbouncer/pgbouncer/pull/1138
[#736]: https://github.com/pgbouncer/pgbouncer/pull/736
[#1192]: https://github.com/pgbouncer/pgbouncer/pull/1192
[#1189]: https://github.com/pgbouncer/pgbouncer/pull/1189
[#1180]: https://github.com/pgbouncer/pgbouncer/pull/1180
[#1228]: https://github.com/pgbouncer/pgbouncer/pull/1228
[#326]: https://github.com/pgbouncer/pgbouncer/pull/326
[#1157]: https://github.com/pgbouncer/pgbouncer/pull/1157
[#1144]: https://github.com/pgbouncer/pgbouncer/pull/1144
[#1172]: https://github.com/pgbouncer/pgbouncer/pull/1172
[#1195]: https://github.com/pgbouncer/pgbouncer/pull/1195
[#1152]: https://github.com/pgbouncer/pgbouncer/pull/1152
[#1187]: https://github.com/pgbouncer/pgbouncer/pull/1187
[#1227]: https://github.com/pgbouncer/pgbouncer/pull/1227
[#1232]: https://github.com/pgbouncer/pgbouncer/pull/1232
[#1108]: https://github.com/pgbouncer/pgbouncer/pull/1108
[#1101]: https://github.com/pgbouncer/pgbouncer/pull/1101
[#1099]: https://github.com/pgbouncer/pgbouncer/pull/1099
[#1169]: https://github.com/pgbouncer/pgbouncer/pull/1169
[#1202]: https://github.com/pgbouncer/pgbouncer/pull/1202
[#1133]: https://github.com/pgbouncer/pgbouncer/pull/1133
[#1155]: https://github.com/pgbouncer/pgbouncer/pull/1155
[#1166]: https://github.com/pgbouncer/pgbouncer/pull/1166
[#298]: https://github.com/pgbouncer/pgbouncer/pull/298

--------

## PgBouncer 1.23.x

**2024-08-02  -  PgBouncer 1.23.1  -  "Everything is put back in order（一切恢复有序）"**

- 修复
  * 修复 PgBouncer 重载配置后可能发生的段错误。（ [#1105]）（Bug 引入自 1.23.0）
  * 修复所有已知的 `put_in_order` 崩溃问题。（ [#1120]）（新崩溃引入自 1.23.0）
  * 将发布压缩包中缺失的测试所需文件补充完整。（ [#1124]）（文件缺失引入自 1.23.0）

[#1120]: https://github.com/pgbouncer/pgbouncer/pull/1120
[#1105]: https://github.com/pgbouncer/pgbouncer/pull/1105
[#1124]: https://github.com/pgbouncer/pgbouncer/pull/1124

**2024-07-03  -  PgBouncer 1.23.0  -  "Into the new beginnings（迈向新的起点）"**

- 功能
  * 新增滚动重启支持。SIGTERM 不再触发 PgBouncer 进程的立即关闭，现在改为执行"超安全关闭"：等待所有客户端断开连接后再关闭。新的 SIGTERM 行为允许在负载均衡器后对多个 PgBouncer 进程进行滚动重启，或在使用 `so_reuseport` 监听同一端口的场景下滚动重启。这是一个**次要的破坏性变更**：如果您在 Dockerfile 或 Systemd 服务文件中依赖 SIGTERM 的旧行为，现在应改用 SIGQUIT。（ [#902]）
  * 新增对 `cert` 和 `peer` 认证方式的用户名映射支持。此功能提供了灵活性，使发起连接的用户无需与数据库用户相同。PgBouncer 对用户名映射的支持与 PostgreSQL 非常相似，但存在文档中列出的若干例外。（ [#996]）
  * 新增通过 PgBouncer 进行复制连接的支持。（ [#876]）

- 变更
  * 改进 `SHOW USERS` 输出中的连接列表展示。（ [#1040]）
  * 允许按用户配置 `pool_size`。（ [#1049]）
  * 允许按数据库配置 `server_lifetime`。（ [#1057]）
  * 在 `SHOW USERS` 输出中支持列举动态创建的用户。（ [#1052]）
  * 在 HBA 配置中支持 `all` 地址类型。（ [#1078]）
  * 支持使用 systemd 时自动重启。（ [#1080]）
  * 将 c-ares 最低版本要求提升至 1.9.0。（ [#1076]）

- 修复
  * 修复处理大型及不完整启动包时的问题。（ [#1058]）
  * 在 options 启动参数中新增对 `--config=value` 格式的支持。（ [#1064]）
  * 修复 `avg_wait_time` 指标计算错误。（ [#727]）
  * 新增与客户端协商 PostgreSQL 协议版本的支持。（ [#1007]）
  * 为 `auth_query` 添加未完成请求的处理。（ [#1034]）
  * 多项文档与 CI 改进。

[#996]: https://github.com/pgbouncer/pgbouncer/pull/996
[#1040]: https://github.com/pgbouncer/pgbouncer/pull/1040
[#1049]: https://github.com/pgbouncer/pgbouncer/pull/1049
[#1057]: https://github.com/pgbouncer/pgbouncer/pull/1057
[#1052]: https://github.com/pgbouncer/pgbouncer/pull/1052
[#1058]: https://github.com/pgbouncer/pgbouncer/pull/1058
[#1007]: https://github.com/pgbouncer/pgbouncer/pull/1007
[#876]: https://github.com/pgbouncer/pgbouncer/pull/876
[#902]: https://github.com/pgbouncer/pgbouncer/pull/902
[#1064]: https://github.com/pgbouncer/pgbouncer/pull/1064
[#1078]: https://github.com/pgbouncer/pgbouncer/pull/1078
[#1080]: https://github.com/pgbouncer/pgbouncer/pull/1080
[#727]: https://github.com/pgbouncer/pgbouncer/pull/727
[#1076]: https://github.com/pgbouncer/pgbouncer/pull/1076
[#1034]: https://github.com/pgbouncer/pgbouncer/pull/1034

--------
## PgBouncer 1.22.x

**2024-03-04  -  PgBouncer 1.22.1  -  "It's summer in Bangalore（班加罗尔的夏天）"**

- 修复
  * 修复部分客户端使用 `COPY FROM STDIN` 查询时引发的问题。此类查询可能导致内存泄漏、性能回退以及预备语句行为异常。 ([#1025])
    （漏洞引入自 1.21.0）
  * 在发布压缩包中补充缺失的测试用例 ([#1026])
    （测试文件缺失问题引入自 1.19.0 和 1.21.0）

[#1025]: https://github.com/pgbouncer/pgbouncer/pull/1025
[#1026]: https://github.com/pgbouncer/pgbouncer/pull/1026

**2024-01-31  -  PgBouncer 1.22.0  -  "DEALLOCATE ALL（取消分配所有语句）"**

- 功能
  * 在 `max_prepared_statements` 设置为非零值时，新增对 `DEALLOCATE ALL` 和 `DISCARD ALL` 的支持（普通的 `DEALLOCATE` 仍不受支持）。 ([#972])
  * 支持按数据库单独配置 `auth_query`。 ([#979])

- 变更
  * 改进推荐的 systemd 单元文件中的设置。 ([#983])
  * 使快速失败逻辑能够处理所有无法再向数据库建立有效连接的场景。 ([#998])
  * 多处文档改进。

- 修复
  * 修复在 PG14 及更高版本中，PgBouncer 每次事务都会发送 `SET DateStyle='ISO'` 的问题。 ([#879])
  * 修复对空 `application_name` 的处理问题。 ([#999])
  * 修复在 Windows 上使用 OpenSSL 3.2.0 时的编译问题。 ([#1009])

[#972]: https://github.com/pgbouncer/pgbouncer/pull/972
[#979]: https://github.com/pgbouncer/pgbouncer/pull/979
[#983]: https://github.com/pgbouncer/pgbouncer/pull/983
[#998]: https://github.com/pgbouncer/pgbouncer/pull/998
[#879]: https://github.com/pgbouncer/pgbouncer/pull/879
[#999]: https://github.com/pgbouncer/pgbouncer/pull/999
[#1009]: https://github.com/pgbouncer/pgbouncer/pull/1009

--------

## PgBouncer 1.21.x

**2023-10-16  -  PgBouncer 1.21.0  -  "The one with prepared statements（预备语句版本）"**

- 功能
  * 新增对协议层命名预备语句的支持！这可能是 PgBouncer 呼声最高的功能之一。将预备语句与 PgBouncer 配合使用，可以大幅降低系统的 CPU 负载（PgBouncer 侧和 PostgreSQL 侧均如此）。在合成基准测试中，该功能能够将查询吞吐量提升 15% 至 250%，具体幅度取决于工作负载。要使用此新功能，需要将新参数 `max_prepared_statements` 设置为非零值（具体数值取决于您的工作负载，100 通常是一个合理的起点）。有关该功能的工作原理、限制及调优方法，请参阅 [`max_prepared_statements` 文档](/docs/pgbouncer/config/#max_prepared_statements)。完成配置后，还需确保您的客户端库实际使用了预备语句，具体方式因客户端而异，请参阅所使用客户端的文档。该功能在发布前经过了充分测试，但由于其复杂性，仍可能存在性能问题或缺陷，如有发现请及时反馈。 ([#845])

- 变更
  * 改进 OpenSSL 安全设置，之前使用的默认值已严重过时。此版本起默认值与运行 PgBouncer 的系统 OpenSSL 默认值保持一致。 ([#948] 及 [libusual/#41])
  * PgBouncer 现在在可能的情况下使用 OpenSSL 计算 MD5 哈希，这是以符合 FIPS 标准的方式使用 PgBouncer 的必要条件。 ([#949])
  * 即使没有客户端连接到 PgBouncer，也为拥有强制用户的连接池维持 `min_pool_size`。 ([#947])
  * PgBouncer 在取消令牌中编码 `peer_id` 的方式已更改，这意味着不同版本的 PgBouncer 之间若未同时处于 v1.21.0 版本边界的同一侧，则无法正常互联。 ([#945])

- 修复
  * 修复带有错误信息 "FATAL in function client\_proto(): bad client state: 6/7" 的崩溃问题。 ([#928])（漏洞引入自 1.18.0）
  * 修复带有错误信息 "FATAL in function server\_proto(): server in bad state: 11" 的崩溃问题。 ([#927])（漏洞引入自 1.18.0）
  * 降低取消请求的日志记录级别。 ([#903])
  * 修复对等节点的 slog 日志前缀问题。 ([#922])
  * 修复文档中的拼写错误。 ([#932])
  * 修复静态分析器指出的错误。 ([#943])
  * 不再因登录阶段的临时 FATAL 错误而终止所有等待中的客户端连接。 ([#946])
  * 当 `auth_dbname` 中的数据库未显式配置时，使用自动数据库。 ([#921])

- 清理
  * 移除对 udns 的支持。 ([#938])

[#845]: https://github.com/pgbouncer/pgbouncer/pull/845
[#948]: https://github.com/pgbouncer/pgbouncer/pull/948
[#949]: https://github.com/pgbouncer/pgbouncer/pull/949
[#947]: https://github.com/pgbouncer/pgbouncer/pull/947
[#945]: https://github.com/pgbouncer/pgbouncer/pull/945
[#903]: https://github.com/pgbouncer/pgbouncer/pull/903
[#922]: https://github.com/pgbouncer/pgbouncer/pull/922
[#932]: https://github.com/pgbouncer/pgbouncer/pull/932
[#928]: https://github.com/pgbouncer/pgbouncer/pull/928
[#927]: https://github.com/pgbouncer/pgbouncer/pull/927
[#943]: https://github.com/pgbouncer/pgbouncer/pull/943
[#946]: https://github.com/pgbouncer/pgbouncer/pull/946
[#921]: https://github.com/pgbouncer/pgbouncer/pull/921
[#938]: https://github.com/pgbouncer/pgbouncer/pull/938
[libusual/#41]: https://github.com/libusual/libusual/pull/41

--------

## PgBouncer 1.20.x

**2023-08-09  -  PgBouncer 1.20.1  -  "Optional options（可选的选项）"**

- 修复
  * 修复将 `options` 加入 `ignore_startup_parameters` 后，不再忽略 `options` 启动参数中未知参数的回退问题。 ([#908])（回退引入自 1.20.0）
  * 修复文档中令人困惑的拼写错误。 ([#917])

[#908]: https://github.com/pgbouncer/pgbouncer/pull/908
[#917]: https://github.com/pgbouncer/pgbouncer/pull/917

**2023-07-20  -  PgBouncer 1.20.0  -  "A funny name goes here（此处应有一个有趣的名字）"**

- 废弃声明
  * 在线重启选项现已被视为废弃。该功能近年来几乎未得到维护，存在多个已知问题，且新增功能通常不支持它。目前推荐的在线重启方式是使用 `so_reuseport` 和 `peers` 功能，这样可以让多个 PgBouncer 进程监听同一端口，通过逐一重启各进程，始终保证有一个 PgBouncer 进程在目标端口上监听。 ([#894])

- 功能
  * 引入 `track_extra_parameters` 参数，允许在事务池化模式下追踪更多参数。此前 PgBouncer 仅追踪 `application_name`、`DateStyle`、`TimeZone` 和 `standard_conforming_strings`。此版本起，PgBouncer 默认还追踪 `IntervalStyle`。通过修改 `track_extra_parameters`，可以追踪更多设置，但仅限于 [PostgreSQL 会向客户端回报的参数][guc_report]。如果使用 Citus 12.0 及以上版本，Citus 会确保 PostgreSQL 也将 `search_path` 回报给客户端，因此可以将 `search_path` 添加到 `track_extra_parameters` 设置中。 ([#867])
  * 在认证阶段转发 SQLSTATE，这允许检测数据库不存在的情况，该功能由 Npgsql（.NET 的 PostgreSQL 数据提供程序）使用。 ([#814])
  * 将 `server_tls_sslmode` 的默认值更改为 `prefer`。 ([#866])
  * 新增对 `options` 启动参数的支持，允许使用 [psql 和 libpq 所支持的 `PGOPTIONS` 环境变量][pgoptions]，通过该变量可以在启动时设置任意 PostgreSQL 参数。此功能仅适用于 PgBouncer 通过 `track_extra_parameters` 追踪的 PostgreSQL 参数。 ([#878])

- 修复
  * 修复将 `pgbouncer` 管理数据库用作 `auth_dbname` 时的崩溃问题。该用法仍不受支持，但现在会给出明确的错误提示而非直接崩溃。 ([#817])
  * 修复 `SHOW MEM` 中 `peer_cache` 的名称显示错误（之前错误地显示为 `db_cache`）。 ([#864])
  * 修复日志中源地址与目标地址混淆的问题（PgBouncer 原本应记录目标 IP，却记录了源 IP）。 ([#880])
  * 仅在 `log_connections` 设置为 `1` 时，才记录通过 UNIX 套接字进行的管理连接日志。 ([#883])

[guc_report]: https://www.postgresql.org/docs/15/protocol-flow.html#PROTOCOL-ASYNC
[pgoptions]: https://www.postgresql.org/docs/current/config-setting.html#id-1.6.7.4.5
[#867]: https://github.com/pgbouncer/pgbouncer/pull/867
[#814]: https://github.com/pgbouncer/pgbouncer/pull/814
[#866]: https://github.com/pgbouncer/pgbouncer/pull/866
[#878]: https://github.com/pgbouncer/pgbouncer/pull/878
[#817]: https://github.com/pgbouncer/pgbouncer/pull/817
[#864]: https://github.com/pgbouncer/pgbouncer/pull/864
[#880]: https://github.com/pgbouncer/pgbouncer/pull/880
[#883]: https://github.com/pgbouncer/pgbouncer/pull/883
[#894]: https://github.com/pgbouncer/pgbouncer/pull/894

--------

## PgBouncer 1.19.x

**2023-05-31  -  PgBouncer 1.19.1  -  "Sunny Spring（晴朗的春天）"**

本次为小版本发布，修复了若干近期引入的缺陷：

- 修复
  * 修复：FATAL in function disconnect_client(): bad client state: 0 ([#846])
    （漏洞引入自 1.18.0）
  * 修复：FATAL in function server_proto(): server in bad state: 14 ([#849])
    （漏洞引入自 1.18.0）
  * 在发布压缩包中补充运行 Python 测试所需的文件。 ([#852])
    （新测试引入自 1.19.0）

[#846]: https://github.com/pgbouncer/pgbouncer/pull/846
[#849]: https://github.com/pgbouncer/pgbouncer/pull/849
[#852]: https://github.com/pgbouncer/pgbouncer/pull/852

**2023-05-04  -  PgBouncer 1.19.0  -  "The old-fashioned, human-generated kind（老派的、人工生成的那种）"**

- 功能
  * 新增 `auth_dbname` 选项，用于指定运行 `auth_query` 所使用的数据库。 ([#764])
  * 新增 `SHOW STATE` 命令，显示 PgBouncer 当前处于活跃、暂停还是挂起状态。 ([#528])
  * 新增对 PgBouncer 进程间互联（peering）的支持。此功能允许在多个不同的 PgBouncer 进程位于同一负载均衡器后端时，查询取消请求仍能正常工作。 ([#666])
  * 新增专用的 `cancel_wait_timeout` 设置，用于指定转发取消请求的超时时长，默认为 10 秒。 ([#833])
  * 新增测试框架。 ([#792])

- 修复
  * 修复 TLS 握手失败时可能发生的内存泄漏问题。 ([#796])
  * 在 Windows 上，为不支持的命令行选项提供更准确的错误提示信息。 ([#620])
  * 修复在服务器处于 `BEING_CANCELED` 状态时调用 `disconnect_server` 的问题。 ([#815])（引入自 1.18.0）
  * 修复接收到 `SIGTERM` 信号时以非零状态码退出的问题。 ([#834])
  * 在 `unix_socket_dir` 中无法创建套接字时，于启动阶段立即报错退出。 ([#830])
  * 在 `listen_addr` 中所有地址均无法监听时，于启动阶段立即报错退出。 ([#838])
  * 当 `sbuf_connect` 失败时，输出包含更多信息的警告日志，这在 UNIX 套接字创建失败时尤为有用。 ([#837])

- 清理
  * 多项 CI 更新以提升性能
  * 移除 AppVeyor

[#528]: https://github.com/pgbouncer/pgbouncer/issues/528
[#620]: https://github.com/pgbouncer/pgbouncer/pull/620
[#666]: https://github.com/pgbouncer/pgbouncer/pull/666
[#764]: https://github.com/pgbouncer/pgbouncer/pull/764
[#792]: https://github.com/pgbouncer/pgbouncer/pull/792
[#796]: https://github.com/pgbouncer/pgbouncer/pull/796
[#815]: https://github.com/pgbouncer/pgbouncer/pull/815
[#830]: https://github.com/pgbouncer/pgbouncer/pull/830
[#833]: https://github.com/pgbouncer/pgbouncer/pull/833
[#834]: https://github.com/pgbouncer/pgbouncer/pull/834
[#837]: https://github.com/pgbouncer/pgbouncer/pull/837
[#838]: https://github.com/pgbouncer/pgbouncer/pull/838

--------

## PgBouncer 1.18.x

**2022-12-12  -  PgBouncer 1.18.0  -  "No real mystery（并无真正的谜团）"**

- 功能
  * 在 `SHOW CLIENTS`/`SERVERS`/`SOCKETS` 输出中新增 `application_name` 字段。
    ([#449](https://github.com/pgbouncer/pgbouncer/pull/449))
  * 在 `SHOW CLIENTS`/`SERVERS`/`POOLS` 输出中新增取消请求相关信息。
    ([#782](https://github.com/pgbouncer/pgbouncer/pull/782))

- 修复
  * 当目标套接字已关闭时，`sbuf_send_pending` 操作立即失败。
    ([#652](https://github.com/pgbouncer/pgbouncer/pull/652))
  * 修复若干可能导致崩溃的问题。
    ([#700](https://github.com/pgbouncer/pgbouncer/pull/700)，
    [#730](https://github.com/pgbouncer/pgbouncer/pull/730))
  * 修复逗号分隔主机列表功能中的整数溢出缺陷，该缺陷会导致连接被错误路由到 UNIX 套接字。
    ([#747](https://github.com/pgbouncer/pgbouncer/pull/747))
  * 不再为维持 `min_pool_size` 而驱逐现有连接。
    ([#648](https://github.com/pgbouncer/pgbouncer/pull/648))
  * 修复与 PostgreSQL 15 一起使用时 `SHOW HELP` 的问题。
    ([#769](https://github.com/pgbouncer/pgbouncer/issues/769))
  * 修复查询取消处理中的竞争条件。此前，针对某个客户端的查询取消请求有可能取消另一个客户端的查询——当 PgBouncer 收到取消请求时，被取消的查询已自行完成，就会发生这种情况。
    ([#717](https://github.com/pgbouncer/pgbouncer/pull/717))

- 清理
  * 多项 CI 更新

--------
## PgBouncer 1.17.x

**2022-03-23  -  PgBouncer 1.17.0  -  "A line has been drawn"（界限已划定）**

- 功能
  * 数据库定义现在可以指定以逗号分隔的主机列表，连接时将以轮询方式依次访问各主机。
  * 连接到不存在的数据库时，错误信息（"no such database"）现在会在身份验证完成后才返回。这可以防止未经验证的客户端探测数据库是否存在。（与 1.15.0 版本中将用户不存在的错误推迟到验证后报告的变更类似。）
  * 登录前不再向客户端发送服务器断开连接的错误信息。此前这可能会将配置细节等非公开信息泄露给尚未登录的客户端。
  * 再次提高最大密码长度上限。显然上一次的调整仍不足够。
  * 移除 `auth_file` 的自动重载功能。`auth_file` 现在仅在配置文件重载时才会重新读取，不再在文件变更后自动加载。
  * Windows 构建版本现已包含版本信息资源文件。
  * CI 生成的 Windows 构建版本现采用静态链接，可直接使用，无需额外依赖。

- 修复
  * 修复了 OpenSSL 3 的支持问题。之前的版本会导致崩溃。
  * 连接时不再应用快速失败（fast-fail）机制。这是上述"在验证前不报告服务器错误"变更的一部分。同时也修复了 SCRAM 透传认证场景中的特殊问题——在该场景下，需要允许客户端侧的认证交换，以便通过重新认证来修复服务端连接。快速失败机制仍会在认证完成后立即生效，因此在大多数情况下，实际可观察到的行为保持不变。
  * 将示例 `pgbouncer.ini` 中的 `auth_type` 改为 `md5`，以与内置默认值保持一致。由于部分用户直接将此文件作为默认配置文件使用，请检查这一配置变更是否适合您的环境。
  * 修复在启用断言的构建版本中退出时发生的崩溃问题。
  * 改进 `tcp_defer_accept` 的文档说明和行为。文档中关于默认值的描述此前存在错误和误导性，在某些情况下 "show config" 显示的值也不正确。此外，若该选项已设置但不受支持，现在将报错而非忽略，与其他平台相关 socket 选项的处理方式保持一致。
  * 修复 Windows 上使用 c-ares 的构建问题。Windows 上现在要求 c-ares >= 1.18.0。

- 清理
  * 清理了 Autoconf >= 2.70 产生的大部分弃用警告，仍支持旧版本的 Autoconf。
  * Cirrus CI 的使用已扩展到更多平台。
  * 已移除对 Travis CI 的支持。
  * 更新了默认根 CA 文件的搜索路径，以覆盖更多平台，例如 Fedora/RHEL/CentOS。
  * 所有 Python 脚本现在默认使用 `python3`，不再维护 Python 2 兼容性。
  * 测试套件脚本改用 `command -v` 替代已弃用的 `which`。
  * 多条错误信息已重新措辞，以更清晰地说明其对应的命令或配置项。
  * 测试套件脚本不再依赖 GNU sed。
  * `make check` 现在可在 Windows 上运行（但 SSL 测试套件暂不支持）。
  * 文档中说明了管理控制台仅支持简单查询协议，并针对此问题提供了更清晰的错误提示。

--------

## PgBouncer 1.16.x

**2021-11-11  -  PgBouncer 1.16.1  -  "Test of depth against quiet efficiency"（以深度检验静默效率）**

这是一个包含安全修复的小版本发布。

* 使 PgBouncer 作为服务器时，拒绝在 SSL 或 GSS 加密握手后接收多余数据。

  具有 TCP 连接数据注入能力的中间人攻击者，可能在本应受加密保护的数据库会话开始时塞入明文数据。这可能被用于向服务器发送伪造的 SQL 命令，但仅在 PgBouncer 不要求任何身份验证数据时才有效。（不过，依赖 SSL 证书认证的 PgBouncer 部署恰恰可能不要求验证。）（CVE-2021-3935）

**2021-08-09  -  PgBouncer 1.16.0  -  "Fended off a jaguar"（击退了一头美洲虎）**

- 功能
  * 支持 TLS 设置的热重载。重载配置文件时，变更的 TLS 设置会自动生效。
  * 新增对抽象 UNIX 域套接字的支持。在 UNIX 域套接字路径前加 `@` 前缀即可使用抽象命名空间中的套接字。这与 PostgreSQL 14 中的对应功能保持一致。
  * 密码和用户名的最大长度分别提升至 996 和 128 个字符。多种云服务有此需求。
  * 最小连接池大小现在可以按数据库单独配置，与常规连接池大小和保留连接池大小的配置方式相同。
  * `SHOW POOLS` 中新增显示待处理查询取消请求的数量。

- 修复
  * 配置解析在多处增强了错误处理的严格程度。此前可能仅记录错误并继续运行的情况，现在将导致启动失败。这才是应有的正确行为，但部分代码之前并未做到。某些用户可能会发现其配置一直存在问题，并将无法继续使用。
  * 修复了查询取消的处理逻辑。在某些情况下，取消请求会莫名地卡住很长时间，此问题现已解决。事实上，取消请求现在可以超出连接池大小两倍，因此不应再出现卡住的情况。（ [#542](https://github.com/pgbouncer/pgbouncer/pull/542)、 [#543](https://github.com/pgbouncer/pgbouncer/pull/543)）
  * 修复了通过 HBA 混用 md5 和 scram 认证的问题。
  * 修复了 Windows 上使用 c-ares 的构建问题。
  * 修复了令人头疼的"FIXME: query end, but query_start == 0"日志信息。我们现在已知其成因，您不应再看到这条信息。（ [#565](https://github.com/pgbouncer/pgbouncer/pull/565)）
  * 修复 `default_pool_size`、`min_pool_size` 和 `res_pool_size` 的热重载问题。此前重载这些配置项不会生效。

- 清理
  * 现已改用 [Cirrus CI](https://cirrus-ci.com/github/pgbouncer/pgbouncer)，不再使用 Travis CI。
  * 照例新增了许多测试用例。
  * "unclean server"日志信息已进一步明确。现在会显示"client disconnect while server was not ready"或"client disconnect before everything was sent to the server"。前者可能发生在客户端断开时服务器仍有事务块未关闭的情况下，此前曾令部分用户感到困惑。
  * 不再允许将"pgbouncer"用作数据库名称。该名称为管理控制台保留，将其用作普通数据库名称从未真正正常工作过，现已明确禁止。
  * 在关闭连接前发送给客户端的错误信息现在标记为 FATAL 而非 ERROR。部分客户端此前会因此产生困惑。（ [#564](https://github.com/pgbouncer/pgbouncer/pull/564)）
  * 修复了 GCC 11 的编译警告。（ [#623](https://github.com/pgbouncer/pgbouncer/issues/623)）

--------

## PgBouncer 1.15.x

**2020-11-19  -  PgBouncer 1.15.0  -  "Ich hab noch einen Koffer in Berlin"（我在柏林还有一只行李箱）**

- 功能
  * 改进认证失败的错误报告。发送给客户端的认证失败消息现在只说明认证失败，不再提供进一步细节，详细信息可在 PgBouncer 日志中查看。此外，若请求的用户不存在，认证流程仍会完整执行，并返回相同的通用失败消息。这些改动可防止客户端探测 PgBouncer 实例中存在的用户名及其他认证相关信息，与 PostgreSQL 的行为保持一致。
  * 客户端立即断开连接时不再记录日志。这可以避免监控系统仅建立 TCP/IP 连接但未发送任何数据就断开时产生大量日志噪音。
  * 使用 systemd journal 时改用其进行日志输出。当检测到标准错误输出指向 systemd journal 时，使用 systemd 原生函数输出日志，避免重复打印时间戳和进程 ID，使日志更加整洁。同时，这也为日志添加了严重级别等元数据，使 journal 转发至 syslog 时消息能携带有用的元数据。
  * 测试套件的部分内容现在可以在 Windows 上运行。
  * `SHOW CONFIG` 现在同时显示各配置项的默认值。

- 修复
  * 修复 FreeBSD 上的 `so_reuseport` 选项。PgBouncer 1.12.0 中的原始实现在 FreeBSD 上实际无法工作。（ [#504](https://github.com/pgbouncer/pgbouncer/pull/504)）
  * 修复在旧版 systemd 系统上的编译问题。该问题在 1.14.0 中引入。（ [#505](https://github.com/pgbouncer/pgbouncer/issues/505)）
  * 修复了用于构建 Windows 二进制 zip 包的 Makefile 目标。
  * 长格式命令行选项现在也可以在 Windows 上正常使用。
  * 修复全局 `auth_user` 配置项的行为。旧的行为取决于配置文件中的顺序，容易造成混乱且不稳定，现已不再如此。（ [#391](https://github.com/pgbouncer/pgbouncer/issues/391)、 [#393](https://github.com/pgbouncer/pgbouncer/issues/393)）

- 清理
  * 提高测试的稳定性和可移植性。
  * 现代化 Autoconf 相关代码。
  * 禁用来自 OpenSSL 3.0.0 的弃用编译警告。

--------

## PgBouncer 1.14.x

**2020-06-11  -  PgBouncer 1.14.0  -  "La ritrovata magia"（重拾的魔法）**

- 功能
  * 新增 SCRAM 认证透传支持。允许在 PgBouncer 中使用加密的 SCRAM 密钥（来自 `userlist.txt` 或 `auth_query`）登录后端服务器。
  * 新增对 systemd socket 激活的支持。在对 `/var/run/postgresql` 访问受限的系统上，这对于让 systemd 管理 UNIX 域套接字的创建尤为有用。
  * 新增 Windows 上对 UNIX 域套接字的支持。

- 清理
  * 新增一个更精简的备用示例配置文件 `pgbouncer-minimal.ini`，供测试或部署使用。

--------

## PgBouncer 1.13.x

**2020-04-27  -  PgBouncer 1.13.0  -  "My favourite game"（我最喜欢的游戏）**

- 功能
  * 新增配置项 `tcp_user_timeout`，用于设置对应的 socket 选项。
  * `client_tls_protocols` 和 `server_tls_protocols` 现在默认值为 `secure`，即仅启用 TLS 1.2 和 TLS 1.3。旧版本仍受支持，只是默认不启用。
  * 新增对 systemd 服务通知的支持。目前支持使用 `Type=notify` 服务单元，未来版本计划提供更深入的集成。

- 修复
  * 修复多行日志消息问题（ [libusual #24](https://github.com/libusual/libusual/pull/24)）
  * 正确处理 `auth_query` 返回的空用户名（ [#340](https://github.com/pgbouncer/pgbouncer/pull/340)）

- 清理
  * 移除了 `debian` 目录下的 Debian 打包文件，建议使用来自 https://apt.postgresql.org/ 的软件包。
  * 对测试套件进行了大量修复和改进。
  * 测试默认不再尝试使用 sudo，现在可以通过设置环境变量 `USE_SUDO` 来显式启用。
  * libevent API 的使用已更新为版本 2 风格的接口，不再使用版本 1 中已弃用的接口。

--------
## PgBouncer 1.12.x

**2019-10-17  -  PgBouncer 1.12.0  -  "It's about learning and getting better"（关于学习与持续进步）**

本版本包含多项小幅功能增强与缺陷修复。

- 功能
  * 新增启用 `SO_REUSEPORT` 套接字选项的配置项。在部分操作系统上，该选项允许在同一主机上运行多个 PgBouncer 实例，监听相同端口，并由内核自动分发连接。
  * 新增使用独立于操作系统的 `resolv.conf` 文件的配置项。这允许设置自定义 DNS 服务器以及其他 DNS 选项。
  * 将 `SHOW VERSION` 的输出从 NOTICE 消息改为普通结果行返回。这样更易于处理，并与其他 `SHOW` 命令保持一致。

- 修复
  * 将统计列的类型从 `bigint` 改为 `numeric` 发送。这避免了在值超出 `bigint` 范围时某些客户端库报错的问题。（ [#360](https://github.com/pgbouncer/pgbouncer/pull/360)，[#401](https://github.com/pgbouncer/pgbouncer/pull/401) ）
  * 修复 PAM 用户密码丢失的问题。（ [#285](https://github.com/pgbouncer/pgbouncer/issues/285) ）
  * 接受启用了 SCRAM channel binding 的客户端。此前，支持 channel binding 的客户端（即 PostgreSQL 11+）在某些情况下连接 PgBouncer 时会失败。（PgBouncer 本身不支持 channel binding，此修复仅为兼容提供该功能的客户端。）
  * 修复与较新版本 musl-libc（Alpine Linux 所用）的编译兼容性问题。

- 清理
  * 新增 `make check` 目标，允许通过单个命令运行所有测试。
  * 移除对 PostgreSQL wiki 的引用，相关信息现已全部收录于 PgBouncer 文档或官网中。
  * 移除对 Libevent 1.x 版本的支持，现在要求使用 Libevent 2.x。Libevent 现通过 pkg-config 进行检测。
  * 修复 macOS 和 Windows 上的编译器警告，这两个平台的构建现在应无警告。
  * 修复 LLVM scan-build 报告的若干警告。

--------

## PgBouncer 1.11.x

**2019-08-27  -  PgBouncer 1.11.0  -  "Instinct for Greatness"（卓越的本能）**

- 功能
  * 新增对客户端和服务端 SCRAM 认证的支持，添加了新的认证类型 `scram-sha-256`。
  * 当存储密码为 md5 格式时，`auth_type=password` 的处理行为与 PostgreSQL 服务器保持一致。（ [#129](https://github.com/pgbouncer/pgbouncer/pull/129) ）
  * 新增 `log_stats` 选项，用于禁止将统计信息打印到日志。（ [#287](https://github.com/pgbouncer/pgbouncer/pull/287) ）
  * 在日志时间戳中添加时区信息。
  * 在日志前缀中以方括号包裹 PID。
- 修复
  * 修复在针对较新版本 OpenSSL（使用 `-Werror`）运行时的 OpenSSL 配置检测问题。
  * 修复使用 `auth_user` 时等待时间的计算错误，该问题会导致程序崩溃或报告错误的等待时间。（ [#393](https://github.com/pgbouncer/pgbouncer/pull/393) ）
  * 处理 PostgreSQL 12 新增的 GSSENCRequest 数据包。当前该处理不执行任何操作，但可避免出现关于"bad packet header"的令人困惑的错误信息。
- 清理
  * 对测试套件进行了大量改进，并新增了若干测试用例。
  * 修复 Windows 上的多个编译器警告。
  * 扩展了 `[users]` 节的文档说明，并在示例配置文件中补充了相关内容。（ [#330](https://github.com/pgbouncer/pgbouncer/pull/330) ）

--------

## PgBouncer 1.10.x

**2019-07-01  -  PgBouncer 1.10.0  -  "Afraid of the World"（对世界的畏惧）**

- 功能
  * 新增启用和禁用 TLS 1.3 的支持。（TLS 1.3 在之前已可依赖 OpenSSL 库的版本获得支持，但现在配置 TLS 协议版本的相关设置项也正式支持 TLS 1.3。）
- 修复
  * 修复 TLS 1.3 支持问题，该问题在 OpenSSL 1.1.1 和 1.1.1a 版本中存在（更早或更新版本不受影响）。
  * 修复 `SHOW FDS` 命令中偶发的崩溃问题。（ [#311](https://github.com/pgbouncer/pgbouncer/issues/311) ）
  * 修复大量取消请求到达时可能导致长时间宕机的问题。（ [#329](https://github.com/pgbouncer/pgbouncer/issues/329) ）
  * 避免 PostgreSQL 执行 reload 后出现"unexpected response from login query"错误。（ [#220](https://github.com/pgbouncer/pgbouncer/issues/220) ）
  * 修复 `idle_transaction_timeout` 的计算错误，该缺陷会在特定情况下导致过早超时。（ [#125](https://github.com/pgbouncer/pgbouncer/issues/125) ）
- 清理
  * 使各类日志和错误信息更加精确。
  * 修复 Coverity 发现的若干问题（均对实际运行无显著影响）。
  * 改进所有测试脚本并补充文档说明。
  * 在文档中新增若干 SHOW 命令的说明。
  * 将文档格式从 rst 转换为 Markdown。
  * 源码树中的 Python 脚本现已全部兼容 Python 3。

--------

## PgBouncer 1.9.x

**2018-08-13  -  PgBouncer 1.9.0  -  "Chaos Survival"（混乱中求生）**

- 功能
  * 新增 RECONNECT 命令。
  * 新增 WAIT_CLOSE 命令。
  * 快速关闭——在会话池模式下，若服务器连接处于"close_needed"（重连）状态，立即断开该连接。
  * 在 SHOW SERVERS 输出中新增 `close_needed` 列。
- 修复
  * 避免 `parse_filename` 中的双重释放（double-free）问题。
  * 避免 `parse_line` 中的空指针解引用问题。
- 清理
  * 将 `mkauth.py` 移植到 Python 3。
  * 改进信号（signals）相关文档。
  * 改进快速入门文档。
  * 补充 SET 命令的文档说明。
  * 更正所需软件列表。
  * 修复 `-Wimplicit-fallthrough` 编译警告。
  * 补充多个 SHOW 字段的缺失文档说明。
  * 补充 reload 和 DNS 变更时的重连行为说明。
  * 说明 KILL 命令之后需执行 RESUME。
  * 补充 `server_lifetime` 文档说明。
  * 修正消息和文档中的错别字及大小写问题。
  * 修复测试中 psql 的调用方式。
  * 其他若干测试环境改进。

--------

## PgBouncer 1.8.x

**2017-12-20  -  PgBouncer 1.8.1  -  "Ground-and-pound Mentality"（摔打磨练的心态）**

- 修复
  * 将头文件 `include/pam.h` 加入发布压缩包。该文件缺失导致 1.8 版本的压缩包完全无法构建。

**2017-12-19  -  PgBouncer 1.8  -  "Confident at the Helm"（掌舵自如的自信）**

- 功能
  * 支持 PAM 认证（通过 `--with-pam` 启用）。
  * 在 `SHOW DATABASES` 输出中新增 `paused` 和 `disabled` 字段。
  * 在 `SHOW POOLS` 输出中新增 `maxwait_us` 字段。
  * 在 `SHOW` 命令输出中新增 `wait` 和 `wait_us` 字段。
  * 新增 `SHOW STATS_TOTALS` 和 `SHOW STATS_AVERAGES` 命令。
  * 在 `SHOW STATS` 中分别追踪查询数和事务数，原有字段 `total_requests`、`avg_req` 和 `avg_query` 已被新字段替代。
  * 在 `SHOW STATS` 中新增 `wait_time` 字段。
- 修复
  * 更新 libusual 以支持 OpenSSL 1.1。
  * 不再尝试在 UNIX 套接字上使用 TLS。
  * 解析 `pg_hba.conf` 时，遇到错误行后继续解析，而非拒绝整个文件。（ [#118](https://github.com/pgbouncer/pgbouncer/issues/118) ）
  * 其他若干 HBA 解析修复。
  * 修复取消查询时的竞争条件（race condition）。（ [#141](https://github.com/pgbouncer/pgbouncer/issues/141) ）
- 清理
  * `auth_user` 设置现在也允许在全局范围内配置，而不仅限于单个数据库。（ [#142](https://github.com/pgbouncer/pgbouncer/issues/142) ）
  * 将控制台客户端和服务端编码设置为 `UTF8`。

--------

## PgBouncer 1.7.x

**2016-02-26  -  PgBouncer 1.7.2  -  "Finally Airborne"（终于腾空而起）**

- 修复
  * 修复删除过期 pidfile 时的崩溃问题，该问题由 1.7.1 版本引入。
  * 禁用内存清理功能——该功能会破坏接管（takeover）流程，对生产负载也无益。该问题由 1.7.1 版本引入。
  * 接管完成后，等待 pidfile 消失再启动。缓慢的内存清理关闭暴露了已存在的竞争条件。（ [#113](https://github.com/pgbouncer/pgbouncer/issues/113) ）
- 清理
  * 移除 DBGVER 处理，使构建结果可重现。（ [#112](https://github.com/pgbouncer/pgbouncer/issues/112) ）
  * Antimake：对 `$(wildcard)` 的文件列表进行排序，较新版本的 gmake 已不再自动排序。（ [#111](https://github.com/pgbouncer/pgbouncer/issues/111) ）
  * 在日志中显示 libssl 版本信息。
  * deb：开启完整的构建安全加固选项。

**2016-02-18  -  PgBouncer 1.7.1  -  "Forward To Five Friends Or Else"（转发给五位好友，否则后果自负）**

警告：自 1.7 版本起，当数据库处于事务池模式时，`server_reset_query` 将不再被执行。这一变化在 1.7 版本的发布说明中未被充分强调。如果你的应用依赖此行为，请使用 `server_reset_query_always` 恢复旧有行为。

本版本的主要工作是追查一个与 TLS 相关的内存泄漏问题，最终证明该泄漏并不存在。问题实际上出在 Debian/wheezy 中构建的 libssl 版本上——每个连接有约 600k 的固定开销（不存在泄漏），而预期应为 20–30k。使用 TLS 时需留意此问题。

- 修复
  * TLS：将 sslmode 中的"disabled"重命名为"disable"，与 PostgreSQL 的命名保持一致。
  * TLS：`client_tls_sslmode=verify-ca/-full` 现在会拒绝未提供客户端证书的连接。（ [#104](https://github.com/pgbouncer/pgbouncer/issues/104) ）
  * TLS：`client_tls_sslmode=allow/require` 在客户端提供证书时会对其进行验证。此前由于证书验证未配置，带有客户端证书的连接会失败。（ [#105](https://github.com/pgbouncer/pgbouncer/issues/105) ）
  * 修复释放数据库时的内存泄漏。
  * 修复 `tls_handshake()` 中潜在的内存泄漏。
  * 修复 `tls_handshake()` 中的 EOF 处理问题。
  * 修复 `asn1_time_parse` 兼容实现中 memset 大小过小的问题。
  * 修复非 TLS 构建（`--without-openssl`）的编译问题。（ [#101](https://github.com/pgbouncer/pgbouncer/issues/101) ）
  * 修复 Windows 构建中的若干问题。（ [#100](https://github.com/pgbouncer/pgbouncer/issues/100) ）
- 清理
  * TLS：使用 `SSL_MODE_RELEASE_BUFFERS` 降低非活跃连接的内存占用。
  * 在退出时释放已分配的内存，便于使用内存泄漏检测工具。
  * 改进 `server_reset_query` 的文档说明。（ [#110](https://github.com/pgbouncer/pgbouncer/issues/110) ）
  * 在示例配置文件中新增 TLS 相关选项。

**2015-12-18  -  PgBouncer 1.7  -  "Colors Vary After Resurrection"（复活之后，色彩各异）**

- 功能
  * 支持 TLS 连接，以 OpenSSL/LibreSSL 作为后端实现。
  * 支持通过 TLS 客户端证书进行身份认证。
  * 支持 UNIX 套接字上的"peer"认证。
  * 支持基于主机的访问控制文件（类似 Postgres 的 [pg_hba.conf](http://www.postgresql.org/docs/9.4/static/auth-pg-hba-conf.html)），允许为网络连接配置 TLS，为本地连接配置"peer"认证。
- 清理
  * 将 `query_wait_timeout` 的默认值设置为 120 秒。原默认值（0）会导致无限排队，实际上没有意义。即当客户端有待执行的查询但尚未分配到服务器连接时，客户端连接将被断开。
  * 默认禁用 `server_reset_query_always`。现在重置查询仅在会话模式的连接池中执行。
  * 将 `pkt_buf` 增大至 4096 字节，可改善 TLS 下的性能。此行为可能与负载特性有关，但自 v1.2 起数据包缓冲区已从连接中分离并从池中按需惰性使用，因此该修改是安全的。
  * 支持流水线（pipelining）——统计预期的 ReadyForQuery 数据包数量，避免过早释放服务器连接。修复了 [#52](https://github.com/pgbouncer/pgbouncer/issues/52)。
  * 改进 `sbuf_loopcnt` 逻辑——即使套接字无事件，也保证套接字会被重新处理。这对 TLS 是必要的，因为 TLS 有其自身的缓冲机制。
  * 适配系统测试以兼容现代 BSD 和 MacOS。（Eric Radman）
  * 移除 **crypt** 认证方式，该方式已过时，PostgreSQL 8.4 起不再支持。
  * 修复不带参数的 `--with-cares` 配置选项——此前不带参数时该选项无法正常工作。

--------
## PgBouncer 1.6.x

**2015-09-03  -  PgBouncer 1.6.1  -  "Studio Audience Approves（观众席报以掌声）"**

- 功能
  * 新增配置项：`server_reset_query_always`。设置后，在非会话池模式下禁用 `server_reset_query`。
    PgBouncer 引入了按连接池粒度的 pool_mode，但会话池与事务池不应使用相同的重置查询。
    事实上，事务池根本不应使用任何重置查询。

    该选项在 1.6.x 中默认开启，但将在 1.7 中关闭。

- 修复
  * 【安全】移除对 `auth_user` 的错误赋值（#69）。
    当 `auth_user` 已配置，且客户端请求一个不存在的用户名时，
    客户端将以 `auth_user` 身份登录。这是不合理的。

    [CVE-2015-6817](https://access.redhat.com/security/cve/cve-2015-6817)

  * 在 handle_auth_response 中跳过 NoticeResponse。否则，服务端较高的日志级别会导致登录失败。

  * console：当 auth_type=any 时，填充 `auth_user`。否则日志记录可能崩溃（#67）。

  * 多项可移植性修复（OpenBSD、Solaris、OSX）。

**2015-08-01  -  PgBouncer 1.6  -  "Zombies of the future（未来的僵尸）"**

- 功能

  * 从 postgres 数据库加载用户密码哈希。
    新增参数：

    auth_user
        用于连接同一数据库并获取用户信息的用户名。
        也可按数据库单独设置。

    auth_query
        以 auth_user 身份执行的 SQL 查询。
        默认值："SELECT usename, passwd FROM pg_shadow WHERE usename=$1"

    （Cody Cutrer）

  * 连接池模式现在支持按数据库和按用户分别配置。
    （Cody Cutrer）

  * 支持按数据库和按用户设置连接数上限：`max_db_connections` 和 `max_user_connections`。
    （Cody Cutrer / Pavel Stehule）

  * 新增 DISABLE/ENABLE 命令，用于阻止新连接接入。
    （William Grant）

  * 新增 DNS 后端：c-ares。这是唯一支持所有关键特性的 DNS 后端：支持自动刷新的 /etc/hosts、SOA 查询、大响应（通过 TCP/EDNS+UDP）以及 IPv6。它现在是首选后端，未来可能成为**唯一**后端，因为维护一套功能残缺的库没有意义。

    注意：c-ares 版本 <= 1.10 存在一个 bug，当启用 IPv6 时会导致 CNAME 支持失效（上游已修复）。作为临时规避措施，c-ares <= 1.10 将仅使用 IPv4。因此，PgBouncer 将在 c-ares >1.10（尚未发布）发布一段时间后，才会放弃其他后端……

  * 在 SHOW CLIENTS/SERVERS 中显示 remote_pid。适用于通过 UNIX socket 连接的客户端，以及通过 TCP 和 UNIX socket 连接的服务端。对于 TCP 服务端，pid 来自取消密钥。

  * 新增独立的配置参数（`dns_nxdomain_ttl`），用于控制 DNS 否定缓存时间。
    （Cody Cutrer）

  * 将客户端主机 IP 地址和端口追加到 application_name 中。
    该功能由配置参数 application_name_add_host 控制，默认为 'off'。
    （Andrew Dunstan）

  * 配置文件新增 `%include FILENAME` 指令，允许将配置拆分到多个文件中。
    （Andrew Dunstan）

- 清理

  * 日志：用 [] 包裹 IPv6 地址
  * 日志：连接服务端时，显示本地 IP 和端口
  * win32：长参数采用 GNU 风格：--foo
  * 允许主机名中包含数字，始终尝试用 inet_pton 解析
  * 修正 FAQ 中的 deallocate_all()
  * 修正示例配置文件中的错误关键字
    （Magnus Hagander）
  * 允许在认证文件中使用注释（以 ';' 开头）。
    （Guillaume Aubert）
  * 修正日志消息和注释中的拼写错误。
    （Dmitriy Olshevskiy）

- 修复

  * 修复维护期间启动新连接的问题
    （Cody Cutrer）
  * 启动时不重复加载认证文件
    （Cody Cutrer）
  * 修复自动数据库（autodb）的失效逻辑
  * IPv6：在监听套接字上设置 IPV6_V6ONLY。
  * win32：不在监听套接字上设置 SO_REUSEADDR。
  * 修复 IPv6 地址的 memcpy 问题
  * 修复取消等待中的客户端连接的问题。
    （Mathieu Fenniak）
  * 小 bug 修复：必须检查 calloc 的返回值
    （Heikki Linnakangas）
  * 在 PID 文件末尾添加换行符
    （Peter Eisentraut）
  * 执行 PAUSE <db> 后，不允许建立新的服务端连接。
    （Petr Jelinek）
  * 修复登录时因包头延迟导致的 'bad packet' 错误。
    （Michal Trojnara, Marko Kreen）
  * 修复 Coverity 检测到的错误。
    （Euler Taveira）
  * 当服务端连接数低于 min_pool 时，禁用 server_idle_timeout（#60）
    （Marko Kreen）

--------

## PgBouncer 1.5.x

**2015-04-09  -  PgBouncer 1.5.5  -  "Play Dead To Win（装死求胜）"**

- 修复
  * 修复远程崩溃问题——无效的数据包顺序导致对 NULL 指针进行查找。
    该漏洞不可被利用，仅会造成拒绝服务（DoS）。

**2012-11-28  -  PgBouncer 1.5.4  -  "No Leaks, Potty-Training Successful（无内存泄漏，如厕训练成功）"**

- 修复
  * DNS：修复 getaddrinfo_a() 后端中的内存泄漏。
  * DNS：修复 udns 后端中的内存泄漏。
  * DNS：修复统计数据计算错误。
  * DNS：改进 getaddrinfo_a() 的错误消息处理。
  * 修复 win32 编译问题。
  * 修复 configure 中的编译器依赖性支持检测。
  * 若干文档修复。

**2012-09-12  -  PgBouncer 1.5.3  -  "Quantum Toaster（量子烤面包机）"**

- 严重修复

  * 过长的数据库名称可能导致崩溃。若启用了 autodb，此问题可被远程触发。

    原有检查假定所有名称均来自配置文件，因此使用 fatal() 是安全的。但当启用 autodb 时——即在 [databases] 节中设置 '*'——数据库名称可来自网络，从而使远程关闭成为可能。

    [CVE-2012-4575](https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2012-4575)

- 次要功能

  * `max_packet_size`——用于调整允许通过的最大数据包大小的配置参数。默认值保持不变：（2G-1），但现在可以调小。
  * 当数据包头无法解析时，在日志和错误消息中以十六进制显示该包头。

- 修复

  * AntiMake：其使用了 $(relpath) 和 $(abspath) 来操作路径名，但当源码树路径包含符号链接时，会导致构建失败。相关代码现已改为仅在纯字符串上操作。
  * console：现在可以使用 SET 命令来设置空字符串值。
  * config.txt：说明所有超时参数均可设置为浮点数。这是 1.4 中引入的隐藏特性。

**2012-05-29  -  PgBouncer 1.5.2  -  "Don't Chew, Just Swallow（别嚼，直接吞）"**

- 修复
  * 由于失误，`reserve_pool_timeout` 被以微秒而非秒为单位读取，导致在连接池满时立即激活备用池。现已修正为以秒为单位，与设计意图一致。
    （由 Keyur Govande 发现）

**2012-04-17  -  PgBouncer 1.5.1  -  "Abort, Retry, Ignore?（中止，重试，忽略？）"**

- 功能
  * 新增用于调整 UNIX socket 权限的参数：`unix_socket_mode=0777`、`unix_socket_group=''`。
- 修复
  * 允许服务端变量设置为空字符串——这是使 "application_name" 正常工作所必需的，因为它是唯一没有服务端默认值的参数。
  * 若连接字符串发生变化，要求刷新服务端参数。
    此前 PgBouncer 会继续使用旧参数，这在 Postgres 升级后会出现问题。
  * 若 autodb 的连接字符串发生变化，断开旧连接。
  * cf_setint：使用 strtol() 而非 atoi() 来解析整型配置参数，支持十六进制、八进制，并具备更好的错误检测能力。
  * 使用 sigqueue() 检测 union sigval 的存在——修复在 HPUX 上的编译问题。
  * 从 Makefile 中移除 'git' 命令，以避免在纯 tarball 构建时出现随机错误。
  * 为 stats_period 参数补充文档，该参数用于调整统计信息的输出周期。
  * 要求 Asciidoc 版本 >= 8.4，文档与更早版本已不再兼容。
  * 停止对 close() 返回的 EINTR 进行重试。

**2012-01-05  -  PgBouncer 1.5  -  "Bouncing Satisfied Clients Since 2007（自 2007 年起，服务满意的客户端）"**

若一个 DNS 名称背后有超过 8 个 IP，现在需要使用 EDNS0 协议进行查询。只有 getaddrinfo_a()/getaddrinfo() 和 UDNS 后端支持它，libevent 1.x/2.x 不支持。要为 libc 启用此功能，请在 /etc/resolv.conf 中添加 'options edns0'。

构建现在需要 GNU Make 3.81+。

- 功能
  * 检测 DNS 回复变化，并使 IP 不再出现在最新回复中的连接失效。
    （Petr Jelinek）
  * 基于 DNS 区域 serial 的主机名失效机制。当设置了 dns_zone_check_period 选项后，所有 DNS 区域都会被查询 SOA 记录，一旦 serial 发生变化，所有主机名都将重新查询。这是实现确定性连接失效的必要机制，因为当没有查询发生时，基于查询的失效方式毫无意义。仅在新 UDNS 后端下可用。
  * 新增 SHOW DNS_HOSTS、SHOW DNS_ZONES 命令，用于检查 DNS 缓存。
  * 新增参数：`min_pool_size`——避免在无负载时断开所有连接。
    （Filip Rembialkowski）
  * `idle_in_transaction_timeout`——若事务空闲时间过长则终止。默认不设置。
  * 新增 libudns DNS 查询后端，比 evdns 功能更丰富。使用 --with-udns 启用。暂不支持 IPv6。
  * KILL 命令，立即断开某一数据库的所有连接。
    （Michael Tharp）
  * 迁移至 Antimake 构建系统，使 Makefile 更整洁。构建现需 GNU Make 3.81+。
- 修复
  * DNS 现在支持 IPv6 主机名。
  * 当 NOTIFY 来自服务端时，不改变连接状态。
  * 若干文档修复。
    （Dan McGee）
  * Console：支持使用 "" 进行标识符引用。原先没有接受数据库名称的命令，因此无需引用。
  * Console：允许单词正则表达式以数字开头。使用严格解析器在此处会使事情过于复杂。
  * 不要使已暂停的自动数据库过期。
    （Michael Tharp）
  * 在执行 PAUSE 时按需创建自动数据库。
    （Michael Tharp）
  * 修复 RESUME 命令打印的错误日志消息。
    （Peter Eisentraut）
  * 当数据库连接字符串中有 user= 但无 password= 时，将从 userlist 中获取密码。
  * 在接管（takeover）代码中正确解析 '*'。
  * autogen.sh：兼容更旧版本的 autoconf/automake。
  * 修复 win32 上因 mingw/msvc 运行时提供了错误的 basename() 而导致的服务崩溃。现在始终使用兼容版本的 basename()。

--------

## PgBouncer 1.4.x

**2011-06-16  -  PgBouncer 1.4.2  -  "Strike-First Algorithm（先发制人算法）"**

受影响的操作系统：\*BSD、Solaris、Win32。

- 可移植性修复
  * 将 CFLAGS 传递给链接器。在使用基于 pthread 的 getaddrinfo_a() 回退实现时，这是必要的。
  * lib/find_modules.sh：用 index()+substr() 替换 split()，使其兼容更旧版本的 AWK。
  * <usual/endian.h>：忽略系统定义的 htoX/Xtoh 宏。系统可能只定义了部分宏。
  * <usual/signal.h>：将兼容的 sigval 与兼容的 sigevent 分离
  * <usual/socket.h>：引入 <sys/uio.h> 以获取 iovec
  * <usual/time.h>：在 win32 上改进函数自动检测
  * <usual/base_win32.h>：移除重复的 sigval/sigevent 声明

**2011-04-01  -  PgBouncer 1.4.1  -  "It Was All An Act（一切不过是表演）"**

- 功能

  * 支持监听/连接 IPv6 地址。
    （Hannu Krosing）
  * `listen_addr` 支持多个监听地址。对每个地址调用 getaddrinfo()，因此也可以使用域名。
  * console：向客户端发送 PgBouncer 版本作为 'server_version'。

- 重要修复

  * 在 glibc < 2.9 上禁用 getaddrinfo_a()，因为旧版本会崩溃。

    受影响的主要操作系统：RHEL/CentOS 5.x（glibc 2.5）、Ubuntu 8.04（glibc 2.7）。
    Debian/lenny（glibc 2.7）的 getaddrinfo_a() 不会崩溃，但目前没有好的检测方法。

    请在此类系统上使用 libevent 2.x，getaddrinfo_a() 的回退实现不适用于生产系统。另请阅读 README 中新增的"DNS 查询支持"章节，了解 DNS 后端的选取方式。

    （Hubert Depesz Lubaczewski, Dominique Hermsdorff, David Sommerseth）

  * 若使用 libevent 2.x，默认启用 --enable-evdns。

  * 默认开启 tcp_keepalive，与 Postgres 的行为保持一致。
    （Hubert Depesz Lubaczewski）

  * 将默认的 `server_reset_query` 设置为 DISCARD ALL，以默认与 Postgres 兼容。

  * win32：修复 NULL UNIX socket 地址导致的崩溃。
    （Hiroshi Saito）

  * 修复 autodb 清理逻辑：旧的清理代码混淆了数据库和连接池——一旦发现一个空连接池，就将该数据库标记为"空闲"，这可能导致有活跃用户的数据库被错误终止。

    由 Hubert Depesz Lubaczewski 报告。

- 修复

  * 通过使用单个并行线程执行查询，使兼容版本的 getaddrinfo_a() 变为非阻塞。
  * 若使用兼容版 getaddrinfo_a()，启用 pthread 编译。
  * release_server 在生命周期断开时漏掉了对 ->last_lifetime_disconnect 的设置。
    （Emmanuel Courreges）
  * win32：修复 DOS 换行符的认证文件处理——load_file() 在加载时未考虑文件大小缩减的情况。
    （Rich Schaaf）
  * <usual/endian.h>：为编解码函数添加 autoconf 检测，避免在 BSD 上产生冲突。
    （James Pye）
  * 当配置文件不存在时不崩溃。
    （Lou Picciano）
  * 在噪声级别日志（-v -v）下，DNS 查询失败时不崩溃。
    （Hubert Depesz Lubaczewski, Dominique Hermsdorff）
  * 在 find_modules.sh 中使用反引号替代 $(cmd)，提升可移植性。
    （Lou Picciano）
  * 在 find_modules.sh 中使用 'awk' 替代 'sed'，提升可移植性。
    （Giorgio Valoti）
  * 启动时记录当前使用的异步 DNS 后端信息。
  * 修复 --disable-evdns 被识别为 'yes' 而非 'no' 的问题。
  * 在文档中说明 -R 需要配置 unix_socket_dir。
  * 在 faq.txt 中讨论 server_reset_query。
  * 恢复 slab 分配器中丢失的 memset
  * libusual 中的若干小型可移植性修复。

**2011-01-11  -  PgBouncer 1.4  -  "Gore Code（鲜血淋漓的代码）"**

- 功能

  * 异步 DNS 查询——不再在重载时解析主机名，而是在连接时按需解析，并支持可配置的缓存。
    （参见 dns_max_ttl 参数。）

    默认使用 getaddrinfo_a()（glibc）作为后端；若不存在，则通过阻塞式（！）getaddrinfo() 模拟 getaddrinfo_a()。

    若在 configure 时指定 --enable-evdns 参数，则使用 libevent 的 evdns 作为后端。默认不使用，因为 libevent 1.3/1.4 包含有 bug 的实现，只有 libevent 2.0 中的 evdns 看起来是可用的。

  * 新配置变量：`syslog_ident`，用于调整 syslog 名称。

  * 正式支持 `application_name` 启动参数。

  * 命令行长选项支持（Guillaume Lelarge）

  * Solaris 可移植性修复（Hubert Depesz Lubaczewski）

  * 新配置变量：`disable_pqexec`。高度偏执的环境可以使用此选项禁用简单查询协议（Simple Query Protocol），要求应用仅使用扩展查询协议（Extended Query Protocol）。

  * Postgres 兼容性：若启动数据包中的数据库名称为空，则使用用户名作为数据库名。

- 修复

  * DateStyle 和 TimeZone 服务端参数需要使用精确的大小写。
  * Console：向客户端发送 datetime、timezone 和 stdstr 服务端参数。

- 内部清理

  * 使用 libusual 库处理底层工具函数。
  * 移除服务端参数的固定长度限制。

--------

## PgBouncer 1.3.x

**2010-09-09  -  PgBouncer 1.3.4  -  "Bouncer is always right（保镖永远是对的）"**

- 修复
  * 在连接时应用快速失败（fast-fail）逻辑，使客户端在服务端出现故障时连接时即可收到错误。
  * 不在重载时将自动生成的数据库标记为待检查状态，否则它们将因不在配置中而被删除。
  * 默认忽略 application_name 参数，避免所有 Postgres 9.0 用户都需要自行将其添加到 `ignore_startup_parameters=` 中。
  * 修正 pg_auth 中的引用处理，其中不使用 '\'。
  * 改善 console 的错误报告，向用户显示传入的查询。
  * 支持 tv_sec 不是 time_t 类型的操作系统（如 OpenBSD）。
  * 避免在 gcc 4.5 上产生过多警告。

**2010-05-10  -  PgBouncer 1.3.3  -  "NSFW（不宜工作场所浏览）"**

- 改进
  * 使 listen(2) 的参数可配置：`listen_backlog`。这在允许配置系统最大值的操作系统上非常有用。
  * 改进断开连接的日志消息，显示导致登录失败的用户名或数据库名。
- 修复
  * 调整快速失败（fast-fail）重启逻辑的位置。旧的逻辑令人恼火，当数据库或用户永久损坏时，即使没有客户端想要登录，也会不断重试。
  * 使日志函数保留旧的 errno，否则在日志级别较高且存在日志问题时，pgbouncer 可能产生异常行为。
  * 增大各种启动相关缓冲区的大小，以处理 EDB 更冗长的启动过程。
  * 检测 V2 协议启动请求，并给出明确的断开原因。

**2010-03-15  -  PgBouncer 1.3.2  -  "Boomerang Bullet（回旋镖子弹）"**

- 修复

  * 新配置变量 `query_wait_timeout`。若客户端在此秒数内未获得服务端连接，将被终止。

  * 若连接池中没有可用的服务端连接且上次连接尝试失败，则不让客户端连接进入等待队列，而是立即返回错误。

    此修复与上一修复结合，可在数据库宕机时避免不必要的停滞。

  * 在 sbuf.c 中追踪 libevent 状态，以避免重复调用 event_del()。尽管通常是安全的，但似乎并非 100% 可靠。现在我们应能始终明确是否已调用过它。

  * 在 SUSPEND 期间禁用维护操作。否则，在超时较短的情况下，旧的 bouncer 可能在将连接移交后关闭其中几个。

  * 对等待欢迎数据包（即第一个服务端连接）的客户端应用 `client_login_timeout`。否则，除非设置了 query_timeout，它们可能会无限期等待。

  * win32：在 -regservice 中新增 -U/-P 开关，允许用户选择运行服务所用的账户。旧的在 Local Service 和 Local System 之间自动选择的逻辑不够可靠。

  * console：移除文本列末尾的 \0。由于 C 客户端对此无感，该问题不易察觉。

  * 文档改进。（Greg Sabino Mullane）

  * 澄清若干登录相关的日志消息。

  * 将连接池发出的错误（通常在断开时）的日志级别从 INFO 提升至 WARNING，因为它们表示存在问题。

  * 将 query_timeout 的日志消息更改为 "query timeout"。

**2009-07-06  -  PgBouncer 1.3.1  -  "Now fully conforming to NSA monitoring requirements（现已完全符合 NSA 监控要求）"**

- 修复
  * 修复 sbuf_loopcnt 相关问题，该问题可能导致连接挂起。若查询或结果长度接近 (pktlen*sbuf_loopcnt)（默认 10k）的整数倍，连接可能会停留在等待更多数据的状态，而这些数据永远不会到来。
  * 使数据库重新配置立即生效。此前在 SIGHUP 后旧连接可能被复用。
  * 修复 SHOW DATABASES 因列添加而损坏的问题。
  * 当 "auth_type=any" 时，console 访问因 pgbouncer 丢弃了用户名而被禁用。修复：若 "auth_type=any"，允许任何用户以管理员身份访问 console。
  * 修复错误的 CUSTOM_ALIGN 宏。幸运的是，若操作系统已定义了 ALIGN 宏，该宏则不会被使用，因此该 bug 似乎从未在实际中触发。
  * win32：始终调用 WSAStartup()，而不仅在守护进程模式下调用，因为配置解析也需要解析主机名。
  * win32：在服务命令行中为配置文件名加上引号，以支持路径中包含空格。可执行文件路径似乎因某种 win32 机制而无需此处理。
  * 将 STATS 添加到 SHOW HELP 文本中。
  * doc/usage.txt：console 结果中的时间单位是微秒，不是毫秒。

**2009-02-18  -  PgBouncer 1.3 -  "New Ki-Smash Finishing Move（全新气功波终结技）"**

- 功能

  * IANA 已将 6432 端口分配为 PgBouncer 的官方端口。因此，默认端口号已更改为 6432。现有的个人用户无需更改，但若您打包分发 PgBouncer，请将包的默认端口改为此官方端口。

  * 动态数据库创建（David Galoyan）

    现在可以定义名称为 "*" 的数据库。若已定义，其连接字符串将用于所有未定义的数据库。主要适用于测试/开发环境。

  * Windows 支持（Hiroshi Saito）

    PgBouncer 现可运行于 Windows 2000+。命令行用法保持不变，但不能以守护进程运行，也不能进行在线重启。要作为服务运行，请在配置中定义 service_name 参数，然后执行：

        > pgbouncer.exe config.ini -regservice
        > net start SERVICE_NAME

    停止并注销服务：

        > net stop SERVICE_NAME
        > pgbouncer.exe config.ini -unregservice

    要使用 Windows 事件日志，需要先注册事件 DLL：

        > regsrv32 pgbevent.dll

    之后即可在配置中设置 "syslog = 1"。

- 次要功能

  * 配置文件中的数据库名称现在可以使用标准 SQL 标识符引用方式加引号，以支持名称中包含非标准字符。

  * 新可调参数：`reserve_pool_size` 和 `reserve_pool_timeout`。当连接池中有客户端等待时间超过 `reserve_pool_timeout` 秒时，`reserve_pool_size` 指定可向连接池添加的额外连接数。也可通过连接变量 `reserve_pool` 按连接池单独设置。

  * 新可调参数 `sbuf_loopcnt`，用于限制在单个套接字上花费的时间。

    在某些情况下——如 SMP 服务器、本地 Postgres 和快速网络——pgbouncer 可以在两端都不阻塞的情况下多次执行 recv()->send() 循环。但这意味着其他连接将长时间停滞。为使处理更加公平，限制对单个套接字执行 recv()->send() 的次数。若计数达到限制，则继续处理其他套接字，该套接字的处理将在下一个事件循环中恢复。

    感谢 Alexander Schocke 的报告和测试。

  * crypt() 认证现为可选，因为它已从 Postgres 中移除。若操作系统不提供它，pgbouncer 也能正常工作。

  * 在日志时间戳中添加毫秒。

  * 用更精简的实现替换旧的 MD5 实现。

  * 更新 ISC 许可证，加入 FSF 的澄清说明。

- 修复

  * 若 event_del() 报告失败，则继续执行清理操作。
    此前 pgbouncer 会重试，以防失败是由 ENOMEM 引起的。但这导致了包含无限重复的日志洪泛，看来 libevent 不喜欢这种做法。

    为何 event_del() 第一次就报告失败，至今仍是个谜。

  * --enable-debug 现在仅控制是否从二进制文件中剥离调试信息，不再影响 -fomit-frame-pointer，因为那样做是危险的。

  * 修复 include 顺序，否则系统头文件可能在内部头文件之前被引入。这对新的 md5.h 头文件来说是个问题。

  * 在 .tgz 中包含 COPYRIGHT 文件……

--------

## PgBouncer 1.2.x

**2008-08-08  -  PgBouncer 1.2.3  -  "Carefully Selected Bytes（精心挑选的字节）"**

- 修复
  * 禁用在 BSD 上无法正常工作的 SO_ACCEPTFILTER 代码。
  * 在 tgz 中包含示例 etc/userlist.txt。
  * 在递归调用中使用 '$(MAKE)' 而非 'make'（Jorgen Austvik）
  * 定义 _GNU_SOURCE，否则 glibc 形同虚设。
  * 允许 libevent 1.1 通过链接测试，以便稍后报告"需要 1.3b+"。
  * 检测并移除过期的 pidfile。

感谢 Devrim GUNDUZ 和 Bjoern Metzdorf 的问题报告和测试。

**2008-08-06  -  PgBouncer 1.2.2  -  "Barf-bag Included（随附呕吐袋）"**

- 修复
  * 移除 'drop_on_error'，这是个糟糕的设计。它最初是作为 Postgres 中破损的计划缓存行为的变通方案而添加的，但在某些查询总是返回错误的常见场景下，可能会造成损坏。

**2008-08-04  -  PgBouncer 1.2.1  -  "Waterproof（防水）"**

- 功能
  * 新参数 `drop_on_error`——若服务端抛出错误，该连接在客户端使用完毕后将被丢弃而非复用。这是为了刷新计划缓存，即便在 8.3 中自动刷新也无法正常工作。默认值为 1。
- 修复
  * SHOW SOCKETS/CLIENTS/SERVERS：若套接字无缓冲区时不崩溃。
  * 修复当 suspend_timeout 触发时 SUSPEND 进入无限循环的问题。
- 小型清理
  * 使用 <sys/uio.h> 获取 'struct iovec'。
  * 在 RESUME/SIGUSR2 时取消关闭操作（由 SIGINT 触发），否则下次 PAUSE 时还会触发。
  * 若 console 操作被取消，输出正确的日志消息。

**2008-07-29  -  PgBouncer 1.2  -  "Ordinary Magic Flute（普通魔法长笛）"**

PgBouncer 1.2 现在要求 libevent 版本 1.3b 或更高。更旧的 libevent 版本在新的重启代码下会崩溃。

- 功能

  * 命令行选项（-u）和配置参数（user=），支持在启动时切换用户。同时，pgbouncer 现在拒绝以 root 身份运行。

    （Jacob Coby）

  * 更具描述性的使用说明文本（-h）。（Jacob Coby）

  * 新的数据库选项：`connect_query`，允许在新连接投入使用前执行一条查询。

    （Teodor Sigaev）

  * 新配置变量 `ignore_startup_parameters`，允许忽略启动数据包中的额外参数。默认情况下只允许 'database' 和 'user'，其他所有参数均会触发错误。这是为了兼容 JDBC 强制在启动数据包中设置 'extra_float_digits=2' 的行为。

  * syslog 日志记录：新增参数 syslog=0/1 和 syslog_facility=daemon/user/local0。

  * 更平滑的在线重启（-R）

    - 将 FD 加载移至 fork 之前，使其日志输出到控制台，且可用 ^C 取消。

    - fork 之后保持 SHUTDOWN 状态，使 ^C 操作更安全。

    - 尝试通过 connect() 连接 UNIX socket，以检查是否有进程在监听。现在即使之前没有运行中的进程，也可以使用 -R。若之前有进程运行，但未使用 -R，则启动失败。

  * 新控制台命令：

    - SHOW TOTALS：显示统计摘要（与日志内容一致）及内存使用情况。

    - SHOW ACTIVE_SOCKETS：类似 show sockets，但仅过滤出活跃的套接字。

- 次要功能

  * `suspend_timeout`——断开停滞连接和长时间登录的连接。为重启提供额外安全保障。

  * 当远端数据库在登录时抛出错误，将通知客户端。

  * 从配置中删除数据库并重载配置后，该数据库的所有连接将被终止并移除。

  * 在 console 的 SHOW/SET 命令中伪造部分参数，使其更接近 Postgres。这是为了让 psycopg 能够连接到 console。
    （client_encoding/default_transaction_isolation/datestyle/timezone）

  * 将 `server_lifetime=0` 的行为改为：在首次使用后立即断开服务端连接。此前 "0" 使 PgBouncer 忽略服务端连接的存活时间。由于该行为未在文档中说明，应该没有用户依赖此行为。

  * 内部改进：

    - 数据包缓冲区现在按需分配并复用，内存使用量将大幅降低。这也使得在大量连接时使用较大的 pktbuf 成为现实。

    - 大量错误处理改进，PgBouncer 现在应能在内存不足（OOM）时优雅降级。

    - 使用 slab 分配器进行内存管理。

    - 大量代码清理。

- 修复

  * 每个事件循环只处理一个 accept()，当连接请求量较大时可能导致连接积压。现在始终将监听套接字完全排空，应可解决此问题。
  * 处理来自 connect() 的 EINTR。
  * 使 configure.ac 兼容 autoconf 2.59。
  * Solaris 兼容性修复（Magne Maehre）

--------

## PgBouncer 1.1.x

**2007-12-10  -  PgBouncer 1.1.2  -  "The Hammer（铁锤）"**

- 功能
  * 因 `server_lifetime` 导致的断开连接现在按（server_lifetime / pool_size）秒的间隔分散执行，以避免 pgbouncer 造成重连风暴。
- 修复
  * 在线升级 1.0 -> 1.1 时的问题：
    - 1.0 不追踪服务端参数，因此它们保持为 NULL，而 1.1 未预期此情况并发生崩溃。
    - 若服务端参数未知，但客户端参数已设置，则发出 SET 命令，而非报错。
  * 移除意外遗留在代码中的 INFO 级别临时调试语句，它们污染了日志。
  * 修复 debian/changelog
- 清理
  * 重新排列 SBuf 结构体字段，使缓冲区对齐更优。

**2007-10-26  -  PgBouncer 1.1.1  -  "Breakdancing Bee（霹雳舞蜜蜂）"**

- 修复
  * 服务端参数缓存可能保持未初始化状态，导致不必要的 SET 操作。这在不允许修改 standard_conforming_strings 的 8.1 版本上引发了问题。
    （感谢 Dimitri Fontaine 的报告和测试。）
  * 若干文档修复。
  * 在 .tgz 中包含 doc/fixman.py。

**2007-10-09  -  PgBouncer 1.1  -  "Mad-Hat Toolbox（疯帽子工具箱）"**

- 功能

  * 追踪以下服务端参数：

        client_encoding  datestyle, timezone, standard_conforming_strings

  * 数据库连接字符串增强：

    - host= 接受主机名
    - host= 接受自定义 UNIX socket 路径
    - 接受带引号的值：password=' asd''foo'

  * 新配置变量：`server_reset_query`，在连接释放后立即发送。
  * 新配置变量：`server_round_robin`，用于在 LIFO 和轮询（RR）之间切换。
  * 向空闲连接发送取消包不再断开该连接。
  * 在 SUSPEND / PAUSE 时，psql 的 ^C 取消操作现在可以正常工作。
  * 启动时打印 FD 限制。
  * 暂停时尽快对齐到数据包边界。
  * 将 'timezone' 添加到数据库参数中。
  * 使用长期持有的日志文件描述符，在 SIGHUP / RELOAD 时重新打开。
  * 在 SHOW SERVERS/CLIENTS/SOCKETS 中显示本地连接端点信息。

- 代码清理

  * 更多调试日志消息包含套接字信息。
  * 移除魔法数字，清理错误消息。（David Fetter）
  * 为当前包信息引入包装结构体，大幅降低代码复杂度。

- 修复

  * 改进无效包头的检测。
  * auth_file 的修改时间检测存在 bug，导致 pgbouncer 过于频繁地重新加载它。

--------

## PgBouncer 1.0.x

**2007-06-18  -  PgBouncer 1.0.8  -  "Undead Shovel Jutsu（不死铲子术）"**

- 修复
  * 修复取消包（cancel packet）处理中的崩溃问题。（psql 中的 ^C）
- 功能
  * PAUSE <db>; RESUME <db>; 现在可以正常使用。
  * 清理 console 命令解析。
  * 禁用开销较大的列表内断言检查。

**2007-04-19  -  PgBouncer 1.0.7  -  "With Vitamin A-Z（含维生素 A-Z）"**

- 修复
  * 在发送过程中多个错误/通知数据包与 send() 阻塞交叠时触发了断言。通过彻底移除刷新逻辑来修复此问题。由于 pgbouncer 不主动缓冲任何内容，刷新逻辑实际上不必要。这是使用 MSG_MORE 将缓冲推送到内核时代遗留下来的。
  * 另外，避免在发送解除阻塞时调用 recv() 逻辑。
  * admin_users 和 stats_users 的列表搜索代码对部分匹配处理有误，已修复。
  * 将 UNIX socket 对端 UID 获取标准化为使用 getpeereid()。

**2007-04-12  -  PgBouncer 1.0.6  -  "Daily Dose（每日剂量）"**

- 修复
  * "在接管期间禁用维护"的修复可能导致维护被彻底禁用，已修复。
  * FreeBSD 编译修复：在 FreeBSD 上，<sys/ucred.h> 需要先引入 <sys/param.h>。
    感谢 Robert Gogolok 的报告。

**2007-04-11  -  PgBouncer 1.0.5  -  "Enough for today（今天到此为止）"**

- 修复
  * 修复在线重启（online-restart）的若干 bug：
    - 为空闲服务端设置 ->ready 标志。
    - 移除 use_client_socket() 中的过时代码。
    - 在接管期间禁用维护操作。

**2007-04-11  -  PgBouncer 1.0.4  -  "Last 'last' bug（最后一个'最后'的 bug）"**

- 修复
  * 来自空闲服务端的 Notice 将服务端连接标记为脏状态，而 release_server() 未预期此情况。通过直接丢弃此类通知来修复。

**2007-04-11  -  PgBouncer 1.0.3  -  "Fearless Fork（无畏的 Fork）"**

- 修复
  * 登录路径中部分错误处理缺失，导致该处的连接断开可能触发断言。
  * 清理 sbuf.c 中的断言，以便更早发现问题。
  * 在 Assert() 触发时生成 core dump。

- 新增内容
  * 新配置变量：`log_connections`、`log_disconnections`、`log_pooler_errors`，用于控制日志噪声的开关。
  * 配置变量：`client_login_timeout`，用于终止登录阶段停滞的连接，避免其阻塞 SUSPEND 进而影响在线重启。

**2007-03-28  -  PgBouncer 1.0.2  -  "Supersonic Spoon（超音速汤匙）"**

- 修复
  * libevent 可能在同一事件循环内报告一个已删除的事件。通过在一个事件循环内避免套接字复用来解决。
  * 从 disconnect_client() 调用 release_server() 时，未检查数据包是否实际已发送。

**2007-03-15  -  PgBouncer 1.0.1  -  "Alien technology（外星科技）"**

- 修复
  * 混用缓存时间与非缓存时间，加上无符号的 usec_t typedef，导致了虚假的 query_timeout 错误。
  * 修复套接字从发送等待中唤醒后偶发停滞的罕见情况。
  * 更公平的服务端连接排队机制。此前，新查询可能比旧查询更早获得服务端连接。
  * 延迟服务端释放，直至所有数据确保已发送完毕。

- 功能
  * SHOW SOCKETS 命令，提供连接状态的详细信息。
  * 在日志中加入 PgSocket 指针，便于追踪单个连接。
  * 在 console 中，允许用 SELECT 替代 SHOW。
  * 若干代码清理。

**2007-03-13  -  PgBouncer 1.0  -  "Tuunitud bemm（调校过的宝马）"**

- 首次公开发布。
