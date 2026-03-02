---
title: "常见问题解答"
linkTitle: "FAQ"
weight: 90
description: "PgBouncer 常见问题解答"
icon: fa-solid fa-circle-question
module: [PGBOUNCER]
category: [参考]
---

> Source: <https://www.pgbouncer.org/faq.html>

--------

## 如何连接到 PgBouncer？

PgBouncer 扮演 PostgreSQL 服务器的角色，只需将客户端指向 PgBouncer 端口即可。

--------

## 如何在多个服务器之间实现查询负载均衡？

PgBouncer 没有内置的多主机配置功能，但可以通过外部工具实现：

1.  DNS 轮询。在一个 DNS 名称后面配置多个 IP。PgBouncer 不会在每次新建连接时查询 DNS，而是缓存所有 IP 并在内部进行轮询。注意：若一个名称后有 8 个以上的 IP，则 DNS 后端必须支持 EDNS0 协议。详情参见 README。

2.  使用 TCP 连接负载均衡器。 [**LVS**](http://www.linuxvirtualserver.org/) 或 [**HAProxy**](http://www.haproxy.org/) 都是不错的选择。在 PgBouncer 一侧，建议适当减小 `server_lifetime` 的值并开启 `server_round_robin`：默认情况下，空闲连接按 LIFO 算法复用，在需要负载均衡时效果可能不佳。

--------

## 如何实现故障转移？

PgBouncer 没有内置的故障转移主机配置或检测功能，可借助外部工具实现：

1. DNS 重新配置：当 DNS 名称对应的 IP 地址发生变化时，PgBouncer 将重新连接到新服务器。可通过两个配置参数进行调整：`dns_max_ttl` 控制单个主机名的生存时间，`dns_zone_check_period` 控制查询区域 SOA 变更的频率。若区域 SOA 记录发生变化，PgBouncer 将重新查询该区域下的所有主机名。

2. 向配置文件写入新主机并让 PgBouncer 重新加载：发送 SIGHUP 信号或在控制台执行 `RELOAD` 命令。PgBouncer 会检测到主机配置变更并重新连接到新服务器。

3. 使用 `RECONNECT` 命令。适用于上述两种方案都不适用的情况，例如使用前述的 HAProxy 在 PgBouncer 下游路由连接时。`RECONNECT` 会重新打开所有服务端连接，请在其他组件更改连接路由信息后执行该命令。

--------

## 如何在会话池化模式下使用预处理语句？

在会话池化模式下，重置查询必须清理旧的预处理语句。可通过设置 `server_reset_query = DISCARD ALL;` 或至少 `DEALLOCATE ALL;` 来实现。

--------

## 如何在事务池化模式下使用预处理语句？

自 1.21.0 版本起，PgBouncer 可在事务池化模式下追踪预处理语句，并确保它们在关联的服务端连接上即时准备好。要启用此功能，需将 `max_prepared_statements` 设置为非零值。详情请参阅 [`max_prepared_statements`](/docs/pgbouncer/config/#max_prepared_statements) 的文档。

如果使用 PHP/PDO，根据其版本可能与 PgBouncer 的预处理语句支持不兼容（[#991]）。PHP/PDO 仅在使用 [PHP 8.4+ **且** libpq 17][php-fix] 时才兼容。因此，对于使用旧版本的环境，建议升级或在客户端禁用预处理语句。

[php-fix]: https://github.com/php/php-src/commit/f35ad560b468e3e0a6c289949ba9b19af4fa3e7b

[#991]: https://github.com/pgbouncer/pgbouncer/issues/991

### 在 JDBC 中禁用预处理语句

对于 JDBC，正确的做法是在连接字符串中添加 `prepareThreshold=0` 参数。

### 在 PHP/PDO 中禁用预处理语句

要禁用服务端预处理语句，必须将 PDO 属性 `PDO::ATTR_EMULATE_PREPARES` 设置为 `true`。可在连接时设置：

    $db = new PDO("dsn", "user", "pass", array(PDO::ATTR_EMULATE_PREPARES => true));

或在连接后设置：

    $db->setAttribute(PDO::ATTR_EMULATE_PREPARES, true);

--------

## 如何在不断开连接的情况下升级 PgBouncer？

可以按照 [`SHUTDOWN WAIT_FOR_CLIENTS`](/docs/pgbouncer/usage/#shutdown-wait_for_clients) 文档章节中描述的流程执行滚动重启。

--------

## 如何查看哪个客户端对应哪个服务端连接？

在控制台使用 `SHOW CLIENTS` 和 `SHOW SERVERS` 命令。

1.  使用 `ptr` 和 `link` 将本地客户端连接映射到服务端连接。

2.  使用客户端连接的 `addr` 和 `port` 识别来自客户端的 TCP 连接。

3.  使用 `local_addr` 和 `local_port` 识别到服务端的 TCP 连接。

--------

## PgBouncer 应安装在 Web 服务器还是数据库服务器上？

视情况而定。

当使用短连接时，将 PgBouncer 安装在 Web 服务器上较为合适，可以最大程度降低连接建立的延迟（TCP 连接在可用前需要几次数据包往返）。当有大量不同主机（如多台 Web 服务器）连接到数据库时，将 PgBouncer 安装在数据库服务器上更为合适，可统一优化这些连接。

也可以在 Web 服务器和数据库服务器上同时安装 PgBouncer。但这样做的缺点是每经过一个 PgBouncer 节点，每条查询都会增加一定的延迟。

最终，需要根据性能需求测试哪种模式效果更好。还应考虑在 Web 服务器或数据库服务器发生故障时，PgBouncer 的安装位置将如何影响应用程序的故障转移。
