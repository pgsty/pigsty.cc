---
title: "配置：pgbouncer.ini"
linkTitle: "配置"
weight: 20
description: "PgBouncer 配置文件（pgbouncer.ini）完整参考"
icon: fa-solid fa-code
module: [PGBOUNCER]
category: [参考]
---

> 原始页面： <https://www.pgbouncer.org/config.html>

--------

## 描述

配置文件采用 "ini" 格式。节名称位于 `[` 和 `]` 之间。以 `;` 或 `#` 开头的行被视为注释并忽略。当 `;` 和 `#` 出现在行中间时，不会被识别为特殊字符。

--------

## 通用设置

### logfile

指定日志文件。若要以守护进程方式运行（`-d`），需要设置此项或 `syslog`。

日志文件保持打开状态，因此在日志轮转后，应执行 `kill -HUP` 或在控制台执行 `RELOAD;`。在 Windows 上，必须停止并重启服务。

注意：设置 `logfile` 本身并不会关闭向 stderr 的日志输出，如需关闭请使用命令行选项 `-q` 或 `-d`。

默认值：未设置

### pidfile

指定 PID 文件。若未设置 `pidfile`，则不允许以守护进程方式运行（`-d`）。

默认值：未设置

### listen_addr

指定监听 TCP 连接的地址列表（逗号分隔）。也可使用 `*` 表示"监听所有地址"。若未设置，则只接受 Unix 套接字连接。

地址可以用数字形式（IPv4/IPv6）或主机名指定。

默认值：未设置

### listen_port

监听的端口号。同时适用于 TCP 和 Unix 套接字。

默认值：6432

### unix_socket_dir

指定 Unix 套接字的位置。同时适用于监听套接字和服务端连接。若设为空字符串，则禁用 Unix 套接字。以 `@` 开头的值表示创建抽象命名空间中的 Unix 套接字（目前仅支持 Linux 和 Windows）。

若要使在线重启（`-R`）正常工作，需要配置 Unix 套接字，且必须位于文件系统命名空间中。

默认值：`/tmp`（Windows 上为空）

### unix_socket_mode

Unix 套接字的文件系统权限模式。对抽象命名空间中的套接字无效，Windows 上不支持。

默认值：0777

### unix_socket_group

Unix 套接字使用的组名。对抽象命名空间中的套接字无效，Windows 上不支持。

默认值：未设置

### user

若设置此项，则在启动后切换到指定的 Unix 用户。仅当 PgBouncer 以 root 启动或已以指定用户运行时有效，Windows 上不支持。

默认值：未设置

### pool_mode

指定服务端连接何时可被其他客户端复用。

- **`session`**：客户端断开连接后，服务端连接被归还到连接池。默认值。
- **`transaction`**：事务结束后，服务端连接被归还到连接池。
- **`statement`**：查询结束后，服务端连接被归还到连接池。在此模式下，不允许跨多条语句的事务。

### max_client_conn

允许的最大客户端连接数。

增大此设置时，操作系统的文件描述符限制可能也需要相应提高。注意，实际可能使用的文件描述符数量多于 `max_client_conn`。如果每个用户以自己的用户名连接到服务器，理论最大值为：

```
max_client_conn + (max pool_size * total databases * total users)
```

如果连接字符串中指定了数据库用户（所有用户以同一用户名连接），理论最大值为：

```
max_client_conn + (max pool_size * total databases)
```

理论最大值通常不会被达到，除非有人刻意构造特殊负载。尽管如此，这意味着你应该将文件描述符数量设置到一个足够大的安全值。

在你喜欢的 shell 手册页中搜索 `ulimit`。注意：`ulimit` 在 Windows 环境中不适用。

默认值：100

### default_pool_size

每个用户/数据库对允许的服务端连接数。可在每个数据库的配置中覆盖。

默认值：20

### min_pool_size

若连接池中的连接数低于此值，则向连接池添加更多服务端连接。在长时间完全空闲后恢复正常负载时，可改善响应行为。该值实际上被限制在连接池大小以内。

仅在以下至少一个条件满足时才强制执行：

* `[database]` 节中该连接池的条目设置了 `user` 键（即强制用户）
* 该连接池中至少有一个客户端连接

默认值：0（禁用）

### reserve_pool_size

允许向连接池添加的额外连接数（参见 `reserve_pool_timeout`）。0 表示禁用。

默认值：0（禁用）

### reserve_pool_timeout

如果客户端在此时间内未被服务，则使用备用连接池中的额外连接。0 表示禁用。[秒]

默认值：5.0

### max_db_connections

每个数据库允许的最大服务端连接数（不区分用户）。这里指的是客户端所连接的 PgBouncer 数据库，而非出站连接对应的 PostgreSQL 数据库。

也可在 `[databases]` 节中按数据库设置。

注意：达到限制后，关闭某个连接池的客户端连接并不会立即允许另一个连接池建立新的服务端连接，因为第一个连接池的服务端连接仍然是打开的。一旦该服务端连接因空闲超时而关闭，等待中的连接池将立即打开新的服务端连接。

默认值：0（不限制）

### max_db_client_connections

每个数据库允许的最大客户端连接数（不区分用户）。这里指的是客户端所连接的 PgBouncer 数据库，而非出站连接对应的 PostgreSQL 数据库。

此值应大于或等于 `max_db_connections`。两者之差可以理解为：在等待活跃连接完成的过程中，某个数据库可以排队的连接数。

也可在 `[databases]` 节中按数据库设置。

默认值：0（不限制）

### max_user_connections

每个用户允许的最大服务端连接数（不区分数据库）。这里指的是与连接池关联的 PgBouncer 用户，即为服务端连接指定的用户，或在未指定的情况下，客户端所使用的登录用户。

也可在 `[users]` 节中按用户设置。

注意：达到限制后，关闭某个连接池的客户端连接并不会立即允许另一个连接池建立新的服务端连接，因为第一个连接池的服务端连接仍然是打开的。一旦该服务端连接因空闲超时而关闭，等待中的连接池将立即打开新的服务端连接。

默认值：0（不限制）

### max_user_client_connections

每个用户允许的最大客户端连接数（不区分数据库）。此值应高于 `max_user_connections`。`max_user_connections` 与 `max_user_client_connections` 之差，可以理解为该用户的最大排队长度。

也可在 `[users]` 节中按用户设置。

默认值：0（不限制）

### server_round_robin

默认情况下，PgBouncer 以 LIFO（后进先出）方式复用服务端连接，从而使少数连接承担大部分负载。当只有一台服务器为某个数据库提供服务时，这种方式性能最佳。但如果数据库地址背后有轮询系统（TCP、DNS 或主机列表），则 PgBouncer 也采用轮询方式使用连接会更好，从而实现均匀的负载分布。

默认值：0

### track_extra_parameters

默认情况下，PgBouncer 为每个客户端跟踪 `client_encoding`、`datestyle`、`timezone`、`standard_conforming_strings` 和 `application_name` 参数。若需跟踪其他参数，可在此处指定，使 PgBouncer 知道应将它们维护在客户端变量缓存中，并在客户端变为活跃状态时将其恢复到服务端。

若需指定多个值，请使用逗号分隔的列表（例如 `default_transaction_read_only, IntervalStyle`）。

注意：大多数参数无法通过此方式跟踪。只有 Postgres 向客户端报告的参数才能被跟踪。Postgres 有一份 [官方报告给客户端的参数列表](https://www.postgresql.org/docs/15/protocol-flow.html#PROTOCOL-ASYNC)。不过，Postgres 扩展可以修改此列表——它们可以添加自己上报的参数，也可以开始上报 Postgres 原本未上报的已有参数。值得注意的是，Citus 12.0+ 会导致 Postgres 额外上报 `search_path`。

Postgres 协议支持通过两种方式指定参数设置：直接作为启动包中的参数，或在 [`options` 启动包][options-startup] 中指定。这两种方式指定的参数均受 `track_extra_parameters` 支持。但 `options` 本身不能被包含在 `track_extra_parameters` 中，只有 `options` 中包含的参数才可以。

默认值：IntervalStyle

### ignore_startup_parameters

默认情况下，PgBouncer 在启动包中只允许它可以跟踪的参数：`client_encoding`、`datestyle`、`timezone` 和 `standard_conforming_strings`。所有其他参数都会触发错误。若要允许其他参数，可在此处指定，PgBouncer 便知道这些参数由管理员处理，可以忽略它们。

若需指定多个值，请使用逗号分隔的列表（例如 `options,extra_float_digits`）。

Postgres 协议支持通过两种方式指定参数设置：直接作为启动包中的参数，或在 [`options` 启动包][options-startup] 中指定。这两种方式指定的参数均受 `ignore_startup_parameters` 支持。甚至可以将 `options` 本身包含在 `track_extra_parameters` 中，这样 `options` 中包含的所有未知参数都会被忽略。

[options-startup]: https://www.postgresql.org/docs/current/libpq-connect.html#LIBPQ-CONNECT-OPTIONS

默认值：空

### peer_id

用于在一组相互对等的 PgBouncer 进程中标识当前 PgBouncer 进程的对等 ID。在一组对等的 PgBouncer 进程中，`peer_id` 值必须唯一。设为 0 时，PgBouncer 对等功能被禁用。详见 `[peers]` 节的文档。`peer_id` 的最大值为 16383。

默认值：0

### disable_pqexec

禁用简单查询协议（PQexec）。与扩展查询协议不同，简单查询协议允许在一个数据包中发送多条查询，这可能导致某些类型的 SQL 注入攻击。禁用它可以提高安全性。显然，这意味着只有完全使用扩展查询协议的客户端才能正常工作。

默认值：0

### application_name_add_host

在连接建立时，将客户端主机地址和端口追加到 `application_name` 设置中。这有助于识别问题查询的来源等。此逻辑仅在连接建立时生效。若之后通过 `SET` 修改了 `application_name`，PgBouncer 不会再次更改它。

默认值：0

### conffile

显示当前配置文件的位置。修改此项将使 PgBouncer 在下次 `RELOAD` / `SIGHUP` 时使用另一个配置文件。

默认值：命令行指定的文件

### service_name

用于 Win32 服务注册。

默认值：`pgbouncer`

### job_name

`service_name` 的别名。

### stats_period

设置各 `SHOW` 命令中显示的平均值的更新频率，以及聚合统计信息写入日志的频率（另见 `log_stats`）。[秒]

默认值：60

### max_prepared_statements

当此值设为非零时，PgBouncer 会在事务池化和语句池化模式下，跟踪客户端发送的协议级命名预处理语句相关命令。PgBouncer 会确保客户端发出的任何预处理语句在后端服务端连接上都可用，即使该语句最初是在另一个服务端连接上准备的。

PgBouncer 内部会检查客户端作为预处理语句发送的所有查询，并以 `PGBOUNCER_{unique_id}` 格式为每个唯一查询字符串分配一个内部名称。如果同一查询字符串被多次准备（可能来自不同客户端），这些查询会共享同一个内部名称。PgBouncer 仅使用内部名称（而非客户端提供的名称）在实际的 PostgreSQL 服务器上准备语句。PgBouncer 会记录客户端为每个预处理语句指定的名称，并在将命令转发到服务器之前，将使用预处理语句的每条命令中的客户端名称替换为内部名称（例如，将 `my_prepared_statement` 替换为 `PGBOUNCER_123`）。更重要的是，如果客户端想要执行的预处理语句尚未在服务器上准备好（例如，因为当前分配给客户端的服务器与客户端准备该语句时的服务器不同），PgBouncer 会在执行前透明地进行准备。

注意：对预处理语句命令的跟踪和改写不适用于 SQL 级别的预处理语句命令，因此 `PREPARE`、`EXECUTE` 和 `DEALLOCATE` 会直接转发给 Postgres。例外情况是 `DEALLOCATE ALL` 和 `DISCARD ALL` 命令，它们可以按预期工作，并会清除 PgBouncer 为发送这些命令的客户端跟踪的预处理语句。

此设置的实际值控制在单个服务端连接上的 LRU 缓存中保持活跃的预处理语句数量。设为 0 时，事务池化和语句池化的预处理语句支持被禁用。为获得最佳性能，应确保此设置大于应用程序中常用预处理语句的数量。请注意，该值越高，PgBouncer 每个连接在 PostgreSQL 服务器上的内存占用就越大，因为服务器会保持更多已准备好的查询。这也会增加 PgBouncer 自身的内存占用，因为它需要跟踪查询字符串。

不过，PgBouncer 内存使用的影响并不太大：
- 每个唯一查询在全局查询缓存中只存储一次。
- 每个客户端连接都保留一个用于改写数据包的缓冲区，大小最多为 `pkt_buf` 的 4 倍。但这个上限通常不会被达到，只有在预处理语句中的查询大小介于 `pkt_buf` 的 2 到 4 倍之间时才会出现。

以如下示例场景为例：
- 有 1000 个活跃客户端
- 客户端准备了 200 个唯一查询
- 查询的平均大小为 5kB
- `pkt_buf` 参数设置为默认值 4096（4kB）

那么，PgBouncer 处理这些预处理语句所需的最大内存量为：

```
200 x 5kB + 1000 x 4 x 4kB = ~17MB of memory.
```

跟踪预处理语句不仅有内存开销，还会增加 CPU 使用率，因为 PgBouncer 需要检查和改写查询。多个 PgBouncer 实例可以监听同一端口，以使用多个核心进行处理，详情参见 [so_reuseport 选项的文档](#so_reuseport)。

当然，预处理语句也有性能优势。就像直接连接 PostgreSQL 一样，通过预先准备一个多次执行的查询，可以减少总体的解析和规划开销。PgBouncer 跟踪预处理语句的方式对性能尤其有益，特别是当多个客户端准备相同查询时。因为客户端连接会自动在服务端连接上复用预处理语句，即使该语句是由其他客户端准备的。例如，如果 `pool_size` 为 20，且有 100 个客户端都准备了完全相同的查询，那么该查询在 PostgreSQL 服务器上只会被准备（即解析）20 次。

复用预处理语句有一个缺点。如果预处理语句的返回类型或参数类型在多次执行之间发生变化，PostgreSQL 当前会抛出如下错误：

```
ERROR:  cached plan must not change result type
```

避免此类错误的方法是：不要让多个客户端使用完全相同的查询字符串的预处理语句，但期望不同的参数或返回类型。最常见的触发场景是在 DDL 迁移期间，对现有表添加新列或更改列类型。在这种情况下，可以在完成迁移后在 PgBouncer 管理控制台上运行 `RECONNECT`，强制重新准备查询以消除该错误。

默认值：200

### scram_iterations

使用 SCRAM-SHA-256 加密密码时执行的计算迭代次数。迭代次数越多，对已存储密码的暴力破解攻击的防护越强，但也会使认证速度变慢。

默认值：4096

--------

## 认证设置

PgBouncer 处理自己的客户端认证，并维护自己的用户数据库。这些设置用于控制此行为。

### auth_type

用户认证方式。

- **`cert`**：客户端必须通过 TLS 连接并提供有效的客户端证书。用户名从证书的 CommonName 字段中获取。
- **`md5`**：使用基于 MD5 的密码验证。这是默认的认证方式。`auth_file` 可以同时包含 MD5 加密和明文密码。若配置了 `md5` 但某用户拥有 SCRAM 密钥，则自动使用 SCRAM 认证。
- **`scram-sha-256`**：使用 SCRAM-SHA-256 进行密码验证。`auth_file` 必须包含 SCRAM 密钥或明文密码。
- **`plain`**：明文密码通过网络传输。已弃用。
- **`trust`**：不进行认证。用户名仍必须存在于 `auth_file` 中。
- **`any`**：类似 `trust` 方式，但忽略所提供的用户名。要求所有数据库都配置为以特定用户登录。此外，控制台数据库允许任何用户以管理员身份登录。
- **`hba`**：实际的认证类型从 `auth_hba_file` 加载。这允许为不同的访问路径使用不同的认证方式，例如：通过 Unix 套接字的连接使用 `peer` 认证方式，通过 TCP 的连接必须使用 TLS。
- **`ldap`**：用户通过 LDAP 服务器认证，与 PostgreSQL 中的方式类似（详见 <https://www.postgresql.org/docs/current/auth-ldap.html>）。LDAP 连接选项通过 `auth_ldap_options` 设置配置，也可在 `auth_hba_file` 中配置。
- **`pam`**：使用 PAM 认证用户，忽略 `auth_file`。此方法与使用 `auth_user` 选项的数据库不兼容。报告给 PAM 的服务名称为 "pgbouncer"。`pam` 在 HBA 配置文件中不受支持。

### auth_hba_file

当 `auth_type` 为 `hba` 时使用的 HBA 配置文件。详见下方 [HBA 文件格式](#hba-文件格式) 节。

默认值：未设置

### auth_ident_file

当 `auth_type` 为 `hba` 且需要定义用户映射时使用的身份映射文件。详见下方 [Ident 映射文件格式](#ident-映射文件格式) 节。

默认值：未设置

### auth_file

用于加载用户名和密码的文件名。详见下方 [认证文件格式](#认证文件格式) 节。

大多数认证类型（见上文）要求设置 `auth_file` 或 `auth_user`，否则将没有用户定义。

默认值：未设置

### auth_user

若设置了 `auth_user`，则任何未在 `auth_file` 中指定的用户，都将通过 `auth_query` 查询从数据库的 `pg_authid` 中获取密码，使用的是 `auth_user`。`auth_user` 的密码从 `auth_file` 中获取。（如果 `auth_user` 不需要密码，则不需要在 `auth_file` 中定义。）

直接访问 `pg_authid` 需要管理员权限。建议使用调用 SECURITY DEFINER 函数的非超级用户替代。

默认值：未设置

### auth_query

用于从数据库加载用户密码的查询。

直接访问 `pg_authid` 需要管理员权限。建议使用调用 SECURITY DEFINER 函数的非超级用户替代。

注意：该查询在目标数据库内部运行。因此，若使用函数，需要将其安装到每个数据库中。

默认值：`SELECT rolname, CASE WHEN rolvaliduntil < now() THEN NULL ELSE rolpassword END FROM pg_authid WHERE rolname=$1 AND rolcanlogin`

### auth_dbname

`[database]` 节中用于认证目的的数据库名称。此选项可以是全局设置，也可以在连接字符串中指定该参数来覆盖全局设置。

### auth_ldap_options

当 `auth_type` 为 `ldap` 时使用的 LDAP 连接选项。（若通过 `auth_hba_file` 配置认证，则不使用此项。）示例：

```ini
auth_ldap_options = ldapurl="ldap://127.0.0.1:12345/dc=example,dc=net?uid?sub"
```

--------

## 日志设置

### syslog

开启/关闭 syslog。在 Windows 上，使用事件日志替代。

默认值：0

### syslog_ident

发送日志到 syslog 时使用的名称。

默认值：`pgbouncer`（程序名）

### syslog_facility

发送日志到 syslog 时使用的设施（facility）。可选值：`auth`、`authpriv`、`daemon`、`user`、`local0-7`。

默认值：`daemon`

### log_connections

记录成功的登录。

默认值：1

### log_disconnections

记录断开连接及其原因。

默认值：1

### log_pooler_errors

记录连接池向客户端发送的错误消息。

默认值：1

### log_stats

每隔 `stats_period` 将聚合统计信息写入日志。如果使用外部监控工具通过 `SHOW` 命令获取相同数据，可以禁用此项。

默认值：1

### verbose

增加日志详细程度。与命令行上的 `-v` 开关效果相同。例如，命令行上使用 `-v -v` 等同于 `verbose=2`。3 是目前支持的最高详细级别。

默认值：0

--------

## 控制台访问控制

### admin_users

允许连接并在控制台执行所有命令的数据库用户（逗号分隔列表）。当 `auth_type` 为 `any` 时忽略此项，此时任何用户名都被允许作为管理员登录。

默认值：空

### stats_users

允许连接并在控制台执行只读查询的数据库用户（逗号分隔列表）。即除 `SHOW FDS` 外的所有 `SHOW` 命令。

默认值：空

--------

## 连接健康检查与超时

### server_reset_query

在将服务端连接释放给其他客户端之前，向服务器发送的查询。此时没有进行中的事务，因此该值不应包含 `ABORT` 或 `ROLLBACK`。

该查询用于清除对数据库会话所做的任何更改，以便下一个客户端获得处于明确已知状态的连接。默认值为 `DISCARD ALL`，它会清除所有内容，但这使下一个客户端没有任何预缓存的状态。可以设置得更轻量，例如仅使用 `DEALLOCATE ALL` 来清除预处理语句，前提是应用程序在保留部分状态时不会出错。

使用事务池化时，不使用 `server_reset_query`，因为在该模式下，客户端不得使用任何基于会话的功能，因为每个事务最终会在不同的连接上执行，从而获得不同的会话状态。

默认值：`DISCARD ALL`

### server_reset_query_always

是否在所有池化模式下都运行 `server_reset_query`。当此设置关闭时（默认），`server_reset_query` 只会在会话池化模式的连接池中运行。事务池化模式的连接不应需要重置查询。

此设置用于变通处理一种异常配置：应用程序通过事务池化的 PgBouncer 使用了会话级功能。它将不确定性故障转变为确定性故障：客户端在每次事务后都会丢失会话状态。

默认值：0

### server_check_delay

释放的连接在无需运行 `server_check_query` 的情况下，可供立即重用的时间长度。若为 0，则每次都运行检查。

默认值：30.0

### server_check_query

用于检查服务端连接是否存活的简单无操作查询。

若为空字符串，则禁用健康检查。

若为 `<empty>`，则发送空查询作为健康检查。

默认值：`<empty>`

### server_fast_close

在会话池化模式下，如果服务端处于"close_needed"状态（由 `RECONNECT`、更改连接设置的 `RELOAD` 或 DNS 变更触发），则立即断开该服务端连接，或在当前事务结束后断开，而不是等到会话结束。在语句或事务池化模式下，此设置无效，因为那已经是默认行为。

如果因此设置导致服务端连接在客户端会话结束前被关闭，则客户端连接也会被关闭。这确保客户端注意到会话已被中断。

此设置使连接配置变更在使用会话池化和长时间会话时能更快生效。缺点是客户端会话可能因配置变更而被中断，因此客户端应用程序需要具备重连并重建会话状态的逻辑。但请注意，不会有任何事务丢失，因为正在运行的事务不会被中断，只有空闲会话才会被中断。

默认值：0

### server_lifetime

连接池将关闭已建立连接时间超过此值的未使用服务端连接（即当前未与任何客户端连接关联的连接）。设为 0 表示连接只使用一次，然后关闭。[秒]

也可在 `[databases]` 节中按数据库设置。

默认值：3600.0

### server_idle_timeout

如果服务端连接空闲超过此秒数，则关闭该连接。若为 0，则禁用此超时。[秒]

默认值：600.0

### server_connect_timeout

如果连接和登录在此时间内未完成，则关闭该连接。[秒]

默认值：15.0

### server_login_retry

如果因连接失败或认证失败导致无法登录到服务器，连接池在重试连接前等待的时间。在等待期间，尝试连接到故障服务器的新客户端将立即收到错误，而不会再次尝试连接。[秒]

此行为的目的是：当服务器不可用时，避免客户端不必要地排队等待服务端连接。但这也意味着，如果服务器出现短暂故障（例如在重启期间或配置有误时），连接池至少需要等待这么长时间才会再次考虑连接它。对于计划内的重启等事件，通常应使用 `PAUSE` 命令来管理，以避免此问题。

默认值：15.0

### client_login_timeout

客户端连接后，若在此时间内未能完成登录，则断开该连接。主要用于避免僵尸连接阻塞 `SUSPEND` 进而影响在线重启。[秒]

默认值：60.0

### autodb_idle_timeout

通过 `*` 自动创建的数据库连接池，若在此秒数内未被使用，则释放。其负面影响是对应的统计数据也会被清除。[秒]

默认值：3600.0

### dns_max_ttl

DNS 查询结果可被缓存的时长。实际的 DNS TTL 值会被忽略。[秒]

默认值：15.0

### dns_nxdomain_ttl

DNS 错误和 NXDOMAIN 查询结果可被缓存的时长。[秒]

默认值：15.0

### dns_zone_check_period

检查区域序列号是否已变更的周期。

PgBouncer 可以从主机名（第一个点之后的所有内容）中收集 DNS 区域，并定期检查区域序列号是否变更。如果检测到变更，则重新查找该区域下的所有主机名。若任何主机的 IP 发生变化，则使相关连接失效。

仅适用于 c-ares 后端（`configure` 选项 `--with-cares`）。

默认值：0.0（禁用）

### resolv_conf

自定义 `resolv.conf` 文件的位置。这允许独立于全局操作系统配置来指定自定义 DNS 服务器及其他名称解析选项。

需要 evdns（>= 2.0.3）或 c-ares（>= 1.15.0）后端。

文件的解析由 DNS 后端库完成，而非 PgBouncer，因此请参阅相应库的文档以了解允许的语法和指令。

默认值：空（使用操作系统默认值）

### query_wait_notify

客户端在 PgBouncer 发送排队通知消息前等待的时间。[秒]

设为 0 时禁用此通知消息。

默认值：5

--------

## TLS 设置

如果任何证书或密钥文件的内容发生了变更，但配置中的文件名未变，新的文件内容将在 RELOAD 之后用于新的连接。但现有连接不会被关闭。如果出于安全原因需要让所有连接尽快使用新文件，建议在 RELOAD 之后运行 RECONNECT。

更改任何 TLS 设置都会出于安全原因自动触发 RECONNECT。

### client_tls_sslmode

用于客户端连接的 TLS 模式。默认情况下禁用 TLS 连接。启用后，还必须配置 `client_tls_key_file` 和 `client_tls_cert_file`，以设置 PgBouncer 用于接受客户端连接的密钥和证书。PgBouncer 支持的最常见证书文件格式是 PEM。

- **`disable`**：纯 TCP 连接。若客户端请求 TLS，则忽略。默认值。
- **`allow`**：若客户端请求 TLS，则使用 TLS；否则使用纯 TCP。若客户端提供了客户端证书，则不对其进行验证。
- **`prefer`**：与 `allow` 相同。
- **`require`**：客户端必须使用 TLS，否则拒绝连接。若客户端提供了客户端证书，则不对其进行验证。
- **`verify-ca`**：客户端必须使用 TLS 并提供有效的客户端证书。
- **`verify-full`**：与 `verify-ca` 相同。

### client_tls_key_file

PgBouncer 用于接受客户端连接的私钥。

默认值：未设置

### client_tls_cert_file

与私钥对应的证书，客户端可以对其进行验证。

默认值：未设置

### client_tls_ca_file

用于验证客户端证书的根证书文件。

默认值：未设置

### client_tls_protocols

允许使用的 TLS 协议版本。可选值：`tlsv1.0`、`tlsv1.1`、`tlsv1.2`、`tlsv1.3`。快捷方式：`all`（tlsv1.0,tlsv1.1,tlsv1.2,tlsv1.3）、`secure`（tlsv1.2,tlsv1.3）。

默认值：`secure`

### client_tls_ciphers

允许使用的 TLS 加密套件，采用 OpenSSL 语法。快捷方式：

- `default`/`secure`/`fast`/`normal`（均使用系统级 OpenSSL 默认值）
- `all`（启用所有加密套件，不推荐）

此设置仅影响使用 TLS 1.2 及以下版本的连接。目前没有用于控制 TLS 1.3 连接所使用加密套件的设置。

默认值：`default`

### client_tls13_ciphers

允许使用的 TLS v1.3 加密套件。若为空，则使用 `client_tls_ciphers` 的值。可选值：

- `TLS_AES_256_GCM_SHA384`
- `TLS_CHACHA20_POLY1305_SHA256`
- `TLS_AES_128_GCM_SHA256`
- `TLS_AES_128_CCM_8_SHA256`
- `TLS_AES_128_CCM_SHA256`

此设置仅影响使用 TLS 1.3 及以上版本的连接。对于 1.2 及以下版本，请参见 `client_tls_ciphers`。

默认值：`<empty>`

### client_tls_ecdhcurve

用于 ECDH 密钥交换的椭圆曲线名称。

可选值：`none`（禁用 DH）、`auto`（256 位 ECDH）、曲线名称

默认值：`auto`

### client_tls_dheparams

DHE 密钥交换类型。

可选值：`none`（禁用 DH）、`auto`（2048 位 DH）、`legacy`（1024 位 DH）

默认值：`auto`

### server_tls_sslmode

用于连接 PostgreSQL 服务器的 TLS 模式。默认模式为 `prefer`。

- **`disable`**：纯 TCP 连接。甚至不向服务器请求 TLS。
- **`allow`**：待定：若服务器拒绝明文连接，则尝试 TLS？
- **`prefer`**：始终首先向 PostgreSQL 请求 TLS 连接。若被拒绝，则通过纯 TCP 建立连接。不验证服务器证书。默认值。
- **`require`**：连接必须使用 TLS。若服务器拒绝，则不尝试纯 TCP。不验证服务器证书。
- **`verify-ca`**：连接必须使用 TLS，且服务器证书必须根据 `server_tls_ca_file` 有效。不检查服务器主机名与证书是否匹配。
- **`verify-full`**：连接必须使用 TLS，且服务器证书必须根据 `server_tls_ca_file` 有效。服务器主机名必须与证书信息匹配。

### server_tls_ca_file

用于验证 PostgreSQL 服务器证书的根证书文件。

默认值：未设置

### server_tls_key_file

PgBouncer 用于向 PostgreSQL 服务器进行认证的私钥。

默认值：未设置

### server_tls_cert_file

与私钥对应的证书，PostgreSQL 服务器可以对其进行验证。

默认值：未设置

### server_tls_protocols

允许使用的 TLS 协议版本。可选值：`tlsv1.0`、`tlsv1.1`、`tlsv1.2`、`tlsv1.3`。快捷方式：`all`（tlsv1.0,tlsv1.1,tlsv1.2,tlsv1.3）、`secure`（tlsv1.2,tlsv1.3）、`legacy`（all）。

默认值：`secure`

### server_tls_ciphers

允许使用的 TLS 加密套件，采用 OpenSSL 语法。快捷方式：

- `default`/`secure`/`fast`/`normal`（均使用系统级 OpenSSL 默认值）
- `all`（启用所有加密套件，不推荐）

此设置仅影响使用 TLS 1.2 及以下版本的连接。目前没有用于控制 TLS 1.3 连接所使用加密套件的设置。

默认值：`default`

### server_tls13_ciphers

允许使用的 TLS v1.3 加密套件。若为空，则使用 `server_tls_ciphers` 的值。可选值：

- `TLS_AES_256_GCM_SHA384`
- `TLS_CHACHA20_POLY1305_SHA256`
- `TLS_AES_128_GCM_SHA256`
- `TLS_AES_128_CCM_8_SHA256`
- `TLS_AES_128_CCM_SHA256`

此设置仅影响使用 TLS 1.3 及以上版本的连接。对于 1.2 及以下版本，请参见 `client_tls_ciphers`。

默认值：`<empty>`

--------

## 危险超时

设置以下超时可能导致意外错误。

### query_timeout

运行时间超过此值的查询将被取消。此设置应与略小于此值的服务端 `statement_timeout` 配合使用，以便仅针对网络问题生效。[秒]

默认值：0.0（禁用）

### query_wait_timeout

查询等待执行的最长时间。若在此时间内未将查询分配给服务器，则断开客户端连接。0 表示禁用；禁用后，客户端将无限期排队。[秒]

此设置用于防止无响应的服务器占用连接。在服务器宕机或因任何原因拒绝连接时也有帮助。

默认值：120.0

### cancel_wait_timeout

取消请求等待执行的最长时间。若在此时间内未将取消请求分配给服务器，则断开客户端连接。0 表示禁用；禁用后，取消请求将无限期排队。[秒]

此设置用于防止在服务器宕机导致取消请求无法转发时客户端被卡住。

默认值：10.0

### client_idle_timeout

空闲时间超过此秒数的客户端连接将被关闭。此值应大于客户端侧的连接生命周期设置，且仅用于处理网络问题。[秒]

默认值：0.0（禁用）

### idle_transaction_timeout

客户端处于"事务中空闲"状态超过此时间后，将被断开连接。[秒]

默认值：0.0（禁用）

### transaction_timeout

客户端处于"事务进行中"状态超过此时间后，将被断开连接。[秒]

默认值：0.0（禁用）

### suspend_timeout

在 `SUSPEND` 或重启（`-R`）期间，等待缓冲区刷新的时长。若刷新未能成功完成，则断开该连接。[秒]

默认值：10

--------

## 底层网络设置

### pkt_buf

数据包的内部缓冲区大小，影响发送的 TCP 数据包大小和总体内存使用量。实际的 libpq 数据包可能大于此值，因此无需将其设置得很大。

默认值：4096

### max_packet_size

PgBouncer 允许通过的 PostgreSQL 数据包的最大大小。一个数据包对应一条查询或一行结果集，完整的结果集可以更大。

默认值：2147483647

### listen_backlog

`listen(2)` 的 backlog 参数，决定在队列中保留多少个未应答的新连接尝试。队列满时，后续新连接将被丢弃。

默认值：128

### sbuf_loopcnt

在继续处理之前，对单个连接上的数据进行多少轮处理。若没有此限制，一个拥有大型结果集的连接可能会长时间阻塞 PgBouncer。每轮处理一个 `pkt_buf` 大小的数据量。0 表示不限制。

默认值：5

### so_reuseport

指定是否在 TCP 监听套接字上设置 `SO_REUSEPORT` 套接字选项。在某些操作系统上，这允许在同一主机上运行多个 PgBouncer 实例，监听相同端口，并由内核自动分配连接。此选项是让 PgBouncer 使用更多 CPU 核心的一种方式。（PgBouncer 是单线程的，每个实例使用一个 CPU 核心。）

具体行为取决于操作系统内核。截至本文撰写时，此设置在（足够新版本的）Linux、DragonFlyBSD 和 FreeBSD 上具有预期效果（在 FreeBSD 上，应用的是 `SO_REUSEPORT_LB` 套接字选项）。某些其他操作系统支持该套接字选项，但不会达到预期效果：允许多个进程绑定到同一端口，但只有其中一个会收到连接。详情请参阅操作系统的 `setsockopt()` 文档。

在完全不支持该套接字选项的系统上，启用此设置将导致错误。

同一主机上的每个 PgBouncer 实例至少需要为 `unix_socket_dir` 和 `pidfile` 配置不同的值，如果使用 `logfile` 也是如此。另外请注意，如果使用了此选项，就无法再通过 TCP/IP 连接到特定的 PgBouncer 实例，这可能对监控和指标收集有影响。

为确保查询取消功能正常工作，应在不同的 PgBouncer 进程之间配置 PgBouncer 对等（peering）。详情请参阅 `peer_id` 配置选项和 `peers` 配置节的文档。本文档示例节中也提供了一个使用对等和 `so_reuseport` 的示例。

默认值：0

### tcp_defer_accept

设置 `TCP_DEFER_ACCEPT` 套接字选项；详见 `man 7 tcp`。（这是一个布尔选项：1 表示启用。启用时实际设置的值当前硬编码为 45 秒。）

目前仅在 Linux 上支持。

默认值：Linux 上为 1，其他系统为 0

### tcp_socket_buffer

默认值：未设置

### tcp_keepalive

使用操作系统默认值开启基本的 keepalive。

在 Linux 上，系统默认值为 `tcp_keepidle=7200`、`tcp_keepintvl=75`、`tcp_keepcnt=9`。其他操作系统上的默认值可能相近。

默认值：1

### tcp_keepcnt

默认值：未设置

### tcp_keepidle

默认值：未设置

### tcp_keepintvl

默认值：未设置

### tcp_user_timeout

设置 `TCP_USER_TIMEOUT` 套接字选项。该选项指定已传输数据在 TCP 连接被强制关闭之前，可以保持未确认状态的最长时间（毫秒）。若设为 0，则使用操作系统默认值。

目前仅在 Linux 上支持。

默认值：0

--------

## [databases] 节 {#section-databases}

`[databases]` 节定义了 PgBouncer 客户端可以连接的数据库名称，并指定这些连接将被路由到何处。该节包含如下形式的 key=value 行：

```ini
dbname = connection string
```

其中键将作为数据库名称，值将作为连接字符串，由以下描述的连接参数键值对组成（类似于 libpq，但实际上并不使用 libpq，且可用功能集有所不同）。示例：

```ini
foodb = host=host1.example.com port=5432
bardb = host=localhost dbname=bazdb
```

数据库名称可包含字符 `_0-9A-Za-z` 而无需引号。包含其他字符的名称需要使用标准 SQL 标识符引号（双引号）括起来，双引号字符本身用 `""` 表示。

数据库名称 `pgbouncer` 为管理控制台保留，不能在此处用作键。

`*` 充当后备数据库：若请求的数据库名称不完全匹配任何条目，则将其值作为所请求数据库的连接字符串使用。例如，若存在（且没有其他覆盖条目）：

```ini
* = host=foo
```

那么，指定数据库 `bar` 连接到 PgBouncer 时，其行为实际上等同于存在如下条目：

```ini
bar = host=foo dbname=bar
```

（利用了 `dbname` 默认为客户端侧数据库名的特性；见下文。）

此类自动创建的数据库条目，若空闲时间超过 `autodb_idle_timeout` 参数指定的时间，则会被清除。

### dbname

目标数据库名称。

默认值：与客户端侧数据库名相同

### host

连接的目标主机名或 IP 地址。主机名在连接时解析，结果按 `dns_max_ttl` 参数进行缓存。当主机名的解析结果发生变化时，现有服务端连接在被释放时（根据池化模式）自动关闭，新的服务端连接立即使用新的解析结果。若 DNS 返回多个结果，则以轮询方式使用。

若值以 `/` 开头，则使用文件系统命名空间中的 Unix 套接字。若以 `@` 开头，则使用抽象命名空间中的 Unix 套接字。

可以指定逗号分隔的主机名或地址列表，连接将以轮询方式建立。（若主机列表中的主机名通过 DNS 解析到多个地址，则轮询系统独立运行。这是一个实现细节，可能会发生变化。）注意，列表中所有主机在任何时候都必须可用：没有跳过不可达主机或仅选择可用主机的机制。（这与 libpq 中主机列表的含义不同。）另外请注意，这只影响新连接的目标选择方式。关于客户端如何被分配到已建立的服务端连接，另见 `server_round_robin` 设置。

示例：

```
host=localhost
host=127.0.0.1
host=2001:0db8:85a3:0000:0000:8a2e:0370:7334
host=/var/run/postgresql
host=192.168.0.1,192.168.0.2,192.168.0.3
```

默认值：未设置，表示使用 Unix 套接字

### port

默认值：5432

### user

若设置了 `user=`，则所有到目标数据库的连接都将以指定用户进行，意味着该数据库只有一个连接池。

否则，PgBouncer 将以客户端用户名登录到目标数据库，意味着每个用户有一个连接池。

### password

若此处未指定密码，则使用 `auth_file` 中对应上述指定用户的密码。目前不支持动态密码发现方式（如 `auth_query`）。

### auth_user

若指定，则覆盖全局 `auth_user` 设置。

### auth_query

若指定，则覆盖全局 `auth_query` 设置。整个 SQL 语句需要用单引号括起来。

### auth_dbname

若指定，则覆盖全局 `auth_dbname` 设置。

### pool_size

设置此数据库的连接池最大大小。若未设置，则使用 `default_pool_size`。

### min_pool_size

设置此数据库的连接池最小大小。若未设置，则使用全局 `min_pool_size`。

仅在以下至少一个条件满足时才强制执行：

* `[database]` 节中此条目设置了 `user` 键（即强制用户）
* 该连接池中至少有一个客户端连接

### reserve_pool_size

为此数据库设置额外连接数。若未设置，则使用全局 `reserve_pool_size`。出于向后兼容原因，`reserve_pool` 是此选项的别名。

### connect_query

连接建立后、允许任何客户端使用该连接前执行的查询。若查询引发错误，则记录日志但忽略该错误。

### pool_mode

为此数据库设置特定的池化模式。若未设置，则使用默认的 `pool_mode`。

### load_balance_hosts

当 `host` 中指定了逗号分隔的列表时，`load_balance_hosts` 控制新连接选择哪个条目。

注意：此设置目前仅控制在连接字符串中提供多个主机时的负载均衡行为，不控制单个主机的 DNS 记录指向多个 IP 地址的情况。这是一个待实现的功能，因此在未来版本中此设置可能开始同时控制这两种负载均衡方式。

- **`round-robin`**：新的连接尝试选择列表中的下一个主机条目。
- **`disable`**：新的连接继续使用同一主机条目，直到连接失败，之后选择下一个主机条目。

建议将 `server_login_retry` 设置得低于默认值，以确保在有多个可用主机时能快速重试。

默认值：`round-robin`

### max_db_connections

配置该数据库的服务端连接上限（即该数据库内所有连接池的服务端连接总数不超过此值）。

### max_db_client_connections

配置该数据库的客户端连接上限。应与 `max_client_conn` 配合使用，以限制 PgBouncer 允许接受的连接数。

### server_lifetime

按数据库配置 `server_lifetime`。若未设置，则回退到实例级别配置的 `server_lifetime`。

### client_encoding

向服务器请求特定的 `client_encoding`。

### datestyle

向服务器请求特定的 `datestyle`。

### timezone

向服务器请求特定的 `timezone`。

--------

## [users] 节 {#section-users}

本节包含如下形式的 key=value 行：

```ini
user1 = settings
```

其中键将作为用户名，值将作为该用户特定配置设置的键值对列表。示例：

```ini
user1 = pool_mode=session
```

此处仅支持少数几项设置。

注意：当配置了 `auth_file` 时，若某用户在本节中有定义但未列于 `auth_file` 中，且已设置 `auth_user`，则 PgBouncer 将尝试使用 `auth_query` 为该用户查找密码。若未设置 `auth_user`，PgBouncer 将假装该用户存在，但不会向客户端返回"无此用户"消息，也不会接受任何提供的密码。

### pool_size

设置此用户所有连接的连接池最大大小。若未设置，则使用数据库级别或 `default_pool_size`。

### reserve_pool_size

设置允许为此用户连接池添加的额外连接数。若未设置，则使用数据库级别配置或全局 `reserve_pool_size`。

### pool_mode

设置此用户所有连接使用的池化模式。若未设置，则使用数据库级别或默认的 `pool_mode`。

### max_user_connections

配置该用户的服务端连接上限（即该用户的所有连接池的服务端连接总数不超过此值）。

### query_timeout

设置用户查询的最长运行秒数。若设置，此超时将覆盖上述服务器级别的 `query_timeout`。

### idle_transaction_timeout

设置用户保持事务空闲打开的最长秒数。若设置，此超时将覆盖上述服务器级别的 `idle_transaction_timeout`。

### transaction_timeout

设置用户保持事务打开的最长秒数。若设置，此超时将覆盖上述服务器级别的 `transaction_timeout`。

### client_idle_timeout

设置客户端在 PgBouncer 实例上保持空闲连接的最长秒数。若设置，此超时将覆盖上述服务器级别的 `client_idle_timeout`。

请注意，这是一个潜在危险的超时。

### max_user_client_connections

配置该用户的客户端连接上限。这是 `max_client_conn` 设置在用户级别的等效项。

--------

## [peers] 节 {#section-peers}

`[peers]` 节定义了 PgBouncer 可以将取消请求转发到的对等节点，以及这些取消请求将被路由到的位置。

可以通过在所有 PgBouncer 进程的配置中定义 `peer_id` 值和 `[peers]` 节，将多个 PgBouncer 进程组成一组对等节点。这些 PgBouncer 进程可以将取消请求转发到其来源进程。当多个 PgBouncer 进程（可能在不同服务器上）位于同一 TCP 负载均衡器后端时，这对于使取消功能正常工作是必要的。取消请求通过与被取消查询不同的 TCP 连接发送，因此 TCP 负载均衡器可能会将取消请求连接发送到与预期不同的进程。通过配置对等关系，这些取消请求最终会到达正确的进程。这份 [会议演讲录像][cancel-problem-video] 提供了更深入的解释。

[cancel-problem-video]: https://www.youtube.com/watch?v=X-nCHcZ6vQU

本节包含如下形式的 key=value 行：

```ini
peer_id = connection string
```

其中键将作为 `peer_id`，值将作为连接字符串，由以下描述的连接参数键值对组成（类似于 libpq，但实际上并不使用 libpq，且可用功能集有所不同）。示例：

```ini
1 = host=host1.example.com
2 = host=/tmp/pgbouncer-2  port=5555
```

注意 1：要使对等功能正常工作，组内每个 PgBouncer 进程的 `peer_id` 在对等组中必须唯一。且 `[peers]` 节应包含所有这些对等 ID 的条目。文档示例节中有一个示例。**允许**（但非必须）`[peers]` 节包含当前配置所属 PgBouncer 的 `peer_id`，此类条目会被忽略，但允许这样做是为了便于配置管理——使得同一个 `[peers]` 节可以用于多个配置文件。

注意 2：只要所有对等节点都在 v1.21.0 版本边界的同一侧，即支持跨版本对等。v1.21.0 对取消令牌的编码方式做了一些破坏性变更，与早期版本不兼容。

### host

连接的目标主机名或 IP 地址。主机名在连接时解析，结果按 `dns_max_ttl` 参数进行缓存。若 DNS 返回多个结果，则以轮询方式使用。但一般不建议使用解析到多个 IP 的主机名，因为这样取消请求可能仍会被转发到错误的节点，需要再次转发（最多只允许转发三次）。

若值以 `/` 开头，则使用文件系统命名空间中的 Unix 套接字。若以 `@` 开头，则使用抽象命名空间中的 Unix 套接字。

示例：

```
host=localhost
host=127.0.0.1
host=2001:0db8:85a3:0000:0000:8a2e:0370:7334
host=/var/run/pgbouncer-1
```

### port

默认值：6432

### pool_size

设置同时发往该对等节点的最大在途取消请求数。取消请求以突发形式到达是很常见的，例如当后端 Postgres 服务器响应缓慢或宕机时。因此，`pool_size` 不应设置得太低而无法处理这些突发请求。

若未设置，则使用 `default_pool_size`。

--------

## Include 指令

PgBouncer 配置文件可以包含 include 指令，用于指定要读取和处理的另一个配置文件。这允许将配置文件拆分为物理上独立的部分。include 指令的格式如下：

```ini
%include filename
```

若文件名不是绝对路径，则相对于当前工作目录进行解析。

--------

## 认证文件格式

本节描述 `auth_file` 设置所指定文件的格式。该文件是如下格式的文本文件：

```
"username1" "password" ...
"username2" "md5abcdef012342345" ...
"username2" "SCRAM-SHA-256$<iterations>:<salt>$<storedkey>:<serverkey>"
```

至少需要 2 个字段，并用双引号括起。第一个字段是用户名，第二个字段是明文密码、MD5 哈希密码或 SCRAM 密钥。PgBouncer 忽略该行的其余内容。字段值中的双引号可以用两个双引号来转义。

PostgreSQL MD5 哈希密码格式：

```
"md5" + md5(password + username)
```

因此，用户名为 `admin`、密码为 `1234` 的用户，其 MD5 哈希密码为 `md545f2603610af569b6155c45067268c6b`。

PostgreSQL SCRAM 密钥格式：

```
SCRAM-SHA-256$<iterations>:<salt>$<storedkey>:<serverkey>
```

详情请参见 PostgreSQL 文档和 RFC 5803。

认证文件中存储的密码或密钥有两个用途：一是在配置了基于密码的认证方式时，用于验证传入客户端连接的密码；二是在后端服务器需要基于密码认证时，用作到后端服务器出站连接的密码（除非在数据库的连接字符串中直接指定了密码）。

### 限制

若密码以明文存储，则可用于后端服务器使用的任何基于密码的认证方式：明文、MD5 或 SCRAM（详见 <https://www.postgresql.org/docs/current/auth-password.html>）。

MD5 哈希密码可用于后端服务器使用 MD5 认证（或特定用户具有 MD5 哈希密码）的情况。

SCRAM 密钥只有在以下条件同时满足时才能用于登录服务器：客户端认证也使用 SCRAM；PgBouncer 数据库定义中未指定用户名；且 PgBouncer 与 PostgreSQL 服务器中的 SCRAM 密钥完全相同（相同的盐值和迭代次数，而不仅仅是相同的密码）。这是由 SCRAM 固有的安全属性决定的：存储的 SCRAM 密钥本身不能用于推导登录凭据。

认证文件可以手动编写，但也可以从其他用户和密码列表生成。参见 `./etc/mkauth.py` 了解从 `pg_authid` 系统表生成认证文件的示例脚本。也可以使用 `auth_query` 代替 `auth_file`，以避免维护单独的认证文件。

### 关于托管服务器的说明

若后端服务器配置为使用 SCRAM 密码认证，且 PgBouncer 不知道用户的明文密码或对应的 SCRAM 密钥，则 PgBouncer 无法成功认证。

某些云服务提供商（如 AWS RDS）禁止访问 PostgreSQL 敏感系统表以获取密码。即使是权限最高的用户（如 `rds_superuser` 的成员），执行 `select * from pg_authid` 也会返回 `ERROR: permission denied for table pg_authid`。这是已知行为（[博客](https://aws.amazon.com/blogs/database/best-practices-for-migrating-postgresql-databases-to-amazon-rds-and-amazon-aurora/)）。

因此，在托管服务器中一旦存储了 SCRAM 密钥，便无法再获取，这使得配置 PgBouncer 使用相同 SCRAM 密钥变得困难。不过，仍然可以通过以下技巧在双方配置并使用 SCRAM 密钥：

使用能够打印出密钥的工具为任意密码生成 SCRAM 密钥。例如，`psql --echo-hidden` 及 `\password` 命令会在将 SCRAM 密钥发送到服务器之前将其打印到控制台。

```bash
$ psql --echo-hidden <connection_string>
postgres=# \password <role_name>
Enter new password for user "<role_name>":
Enter it again:
********* QUERY **********
ALTER USER <role_name> PASSWORD 'SCRAM-SHA-256$<iterations>:<salt>$<storedkey>:<serverkey>'
**************************
```

记下 QUERY 中的 SCRAM 密钥，并将其设置到 PgBouncer 的 `userlist.txt` 中。

若使用了 `psql --echo-hidden` 以外的工具，则还需要在服务器端设置 SCRAM 密钥（可以使用 `ALTER ROLE <role_name> PASSWORD '<scram_secret>'` 来设置）。

--------

## HBA 文件格式

HBA 文件的位置由 `auth_hba_file` 设置指定。仅当 `auth_type` 设置为 `hba` 时才使用。

该文件遵循 PostgreSQL `pg_hba.conf` 文件的格式（见 <https://www.postgresql.org/docs/current/auth-pg-hba-conf.html>）。

* 支持的记录类型：`local`、`host`、`hostssl`、`hostnossl`。
* 数据库字段：支持 `all`、`replication`、`sameuser`、`@file`、多个名称。不支持：`samerole`、`samegroup`。
* 用户名字段：支持 `all`、`@file`、多个名称。不支持：`+groupname`。
* 地址字段：支持 `all`、IPv4、IPv6。不支持：`samehost`、`samenet`、DNS 名称、域前缀。
* 认证方式字段：仅支持 PgBouncer `auth_type` 支持的方式，以及 `peer` 和 `reject`，但不支持 `any` 和 `pam`（它们只在全局范围内有效）。
* 当 `auth_type` 为 `cert` 或 `peer` 时，支持用户名映射（`map=`）参数。

--------

## Ident 映射文件格式

Ident 映射文件的位置由 `auth_ident_file` 设置指定。仅当 `auth_type` 设置为 `hba` 时才加载。

该文件格式是 PostgreSQL ident 映射文件的简化变体（见 <https://www.postgresql.org/docs/current/auth-username-maps.html>）。

* 支持的行格式仅为 `map-name system-username database-username`。
* 不支持 include 文件/目录。
* 系统用户名字段：不支持正则表达式。
* 数据库用户名字段：支持 `all` 或单个 Postgres 用户名。不支持：`+groupname`、正则表达式。

--------

## 示例

小型配置示例：

```ini
[databases]
template1 = host=localhost dbname=template1 auth_user=someuser

[pgbouncer]
pool_mode = session
listen_port = 6432
listen_addr = localhost
auth_type = md5
auth_file = users.txt
logfile = pgbouncer.log
pidfile = pgbouncer.pid
admin_users = someuser
stats_users = stat_collector
```

数据库配置示例：

```ini
[databases]

; foodb 通过 Unix 套接字连接
foodb =

; 将 bardb 重定向到 localhost 上的 bazdb
bardb = host=localhost dbname=bazdb

; 到目标数据库的访问将以单一用户进行
forcedb = host=localhost port=300 user=baz password=foo client_encoding=UNICODE datestyle=ISO
```

`auth_query` 安全函数示例：

```sql
CREATE OR REPLACE FUNCTION pgbouncer.user_lookup(in i_username text, out uname text, out phash text)
RETURNS record AS $$
BEGIN
    SELECT rolname, CASE WHEN rolvaliduntil < now() THEN NULL ELSE rolpassword END
    FROM pg_authid
    WHERE rolname=i_username AND rolcanlogin
    INTO uname, phash;
    RETURN;
END;
$$ LANGUAGE plpgsql
   SECURITY DEFINER
   -- 设置安全的 search_path：受信任的模式，然后是 'pg_temp'。
   SET search_path = pg_catalog, pg_temp;
REVOKE ALL ON FUNCTION pgbouncer.user_lookup(text) FROM public, pgbouncer;
GRANT EXECUTE ON FUNCTION pgbouncer.user_lookup(text) TO pgbouncer;
```

使用 `so_reuseport` 配置 2 个对等 PgBouncer 进程以创建多核 PgBouncer 部署的配置示例。第一个进程的配置：

```ini
[databases]
postgres = host=localhost dbname=postgres

[peers]
1 = host=/tmp/pgbouncer1
2 = host=/tmp/pgbouncer2

[pgbouncer]
listen_addr=127.0.0.1
auth_file=auth_file.conf
so_reuseport=1
unix_socket_dir=/tmp/pgbouncer1
peer_id=1
```

第二个进程的配置：

```ini
[databases]
postgres = host=localhost dbname=postgres

[peers]
1 = host=/tmp/pgbouncer1
2 = host=/tmp/pgbouncer2

[pgbouncer]
listen_addr=127.0.0.1
auth_file=auth_file.conf
so_reuseport=1
; 只有 unix_socket_dir 和 peer_id 不同
unix_socket_dir=/tmp/pgbouncer2
peer_id=2
```

--------

## 另请参阅

pgbouncer(1) - 通用用法及控制台命令的 man 手册页
