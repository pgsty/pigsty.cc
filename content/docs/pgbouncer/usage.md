---
title: "pgbouncer 命令用法"
linkTitle: "使用"
weight: 30
description: "PgBouncer 命令行用法与管理控制台"
icon: fa-solid fa-bell-concierge
module: [PGBOUNCER]
category: [任务]
---

> Source: <https://www.pgbouncer.org/usage.html>

--------

## 语法

    pgbouncer [-d][-R][-v][-u user] <pgbouncer.ini>
    pgbouncer -V|-h

在 Windows 系统上，选项如下：

    pgbouncer.exe [-v][-u user] <pgbouncer.ini>
    pgbouncer.exe -V|-h

用于设置 Windows 服务的附加选项：

    pgbouncer.exe --regservice   <pgbouncer.ini>
    pgbouncer.exe --unregservice <pgbouncer.ini>

--------

## 描述

**pgbouncer** 是一个 PostgreSQL 连接池。任何目标应用程序都可以像连接 PostgreSQL 服务器一样连接到 **pgbouncer**，**pgbouncer** 会创建一个到实际服务器的连接，或者复用已有连接。

**pgbouncer** 的目标是降低向 PostgreSQL 打开新连接所带来的性能损耗。

为了在连接池化时不破坏事务语义，**pgbouncer** 在轮换连接时支持以下几种池化模式：

会话池化

:   最保守的方式。当客户端连接时，将为其分配一个服务端连接，并在客户端保持连接期间一直持有。当客户端断开时，该服务端连接将被归还到连接池中。这是默认模式。

事务池化

:   仅在事务期间将服务端连接分配给客户端。当 PgBouncer 检测到事务结束后，该服务端连接将被归还到连接池中。

语句池化

:   最激进的方式。查询完成后，服务端连接将立即归还到连接池中。此模式下不允许多语句事务，因为这会导致错误。

**pgbouncer** 的管理接口由一些新的 `SHOW` 命令组成，这些命令在连接到特殊的"虚拟"数据库 **pgbouncer** 时可用。

--------

## 快速入门

基本的安装和使用步骤如下。

1. 创建 pgbouncer.ini 文件。详见 **pgbouncer(5)**。简单示例：

        [databases]
        template1 = host=localhost port=5432 dbname=template1

        [pgbouncer]
        listen_port = 6432
        listen_addr = localhost
        auth_type = md5
        auth_file = userlist.txt
        logfile = pgbouncer.log
        pidfile = pgbouncer.pid
        admin_users = someuser

2. 创建 `userlist.txt` 文件，其中包含允许登录的用户：

        "someuser" "same_password_as_in_server"

3. 启动 **pgbouncer**：

        $ pgbouncer -d pgbouncer.ini

4. 让应用程序（或 **psql** 客户端）连接到 **pgbouncer** 而不是直接连接到 PostgreSQL 服务器：

        $ psql -p 6432 -U someuser template1

5. 通过连接到特殊管理数据库 **pgbouncer** 来管理 **pgbouncer**，并执行 `SHOW HELP;` 开始操作：

        $ psql -p 6432 -U someuser pgbouncer
        pgbouncer=# SHOW HELP;
        NOTICE:  Console usage
        DETAIL:
          SHOW [HELP|CONFIG|DATABASES|FDS|POOLS|CLIENTS|SERVERS|SOCKETS|LISTS|VERSION|...]
          SET key = arg
          RELOAD
          PAUSE
          SUSPEND
          RESUME
          SHUTDOWN
          [...]

6. 如果对 pgbouncer.ini 文件进行了修改，可以通过以下命令重新加载：

        pgbouncer=# RELOAD;

--------

## 命令行选项

`-d`，`--daemon`
:   在后台运行。不加此选项时，进程将在前台运行。

    在守护进程模式下，需要同时设置 `pidfile` 以及 `logfile` 或 `syslog`。进入后台后，不会向 stderr 写入任何日志信息。

    注意：在 Windows 上不可用；**pgbouncer** 需要以服务形式运行。

`-R`，`--reboot`
:   **已弃用：请使用多个 pgbouncer 进程通过 so_reuseport 监听同一端口的滚动重启方式来替代此选项。** 执行在线重启。即连接到正在运行的进程，从中加载已打开的套接字，然后使用这些套接字。如果没有活动进程，则正常启动。
    注意：仅在 OS 支持 Unix 套接字且配置中未禁用 `unix_socket_dir` 时有效。在 Windows 上不可用。TLS 连接不兼容此选项，将被断开。

`-u` _USERNAME_，`--user=`_USERNAME_
:   启动时切换到指定用户。

`-v`，`--verbose`
:   增加详细程度。可多次使用。

`-q`，`--quiet`
:   静默模式：不向 stderr 输出日志。这不影响日志详细程度，仅禁止使用 stderr。适用于 init.d 脚本。

`-V`，`--version`
:   显示版本信息。

`-h`，`--help`
:   显示简短帮助信息。

`--regservice`
:   Win32：将 PgBouncer 注册为 Windows 服务。使用配置参数 **service_name** 的值作为注册名称。

`--unregservice`
:   Win32：注销 Windows 服务。

--------

## 管理控制台

通过普通方式连接到数据库 **pgbouncer** 即可访问控制台：

    $ psql -p 6432 pgbouncer

只有在配置参数 **admin_users** 或 **stats_users** 中列出的用户才能登录控制台。（当 `auth_type=any` 时，任何用户均可作为 stats_user 登录。）

此外，用户名为 **pgbouncer** 的用户可以无密码登录，前提是通过 Unix 套接字连接，且客户端的 Unix 用户 UID 与运行进程相同。

管理控制台目前仅支持简单查询协议。部分驱动程序对所有命令使用扩展查询协议，这些驱动程序无法用于此目的。

### Show 命令

**SHOW** 命令用于输出信息，每个命令说明如下。

#### SHOW STATS

显示统计信息。在此命令及相关命令中，总计数据自进程启动起累计，平均值每隔 `stats_period` 更新一次。

database
:   统计信息按数据库呈现。

total_xact_count
:   **pgbouncer** 处理的 SQL 事务总数。

total_query_count
:   **pgbouncer** 处理的 SQL 命令总数。

total_server_assignment_count
:   服务端连接被分配给客户端的总次数。

total_received
:   **pgbouncer** 接收的网络流量总字节数。

total_sent
:   **pgbouncer** 发送的网络流量总字节数。

total_xact_time
:   **pgbouncer** 连接到 PostgreSQL 并处于事务中（包括事务空闲或执行查询）所花费的总微秒数。

total_query_time
:   **pgbouncer** 主动连接到 PostgreSQL 并执行查询所花费的总微秒数。

total_wait_time
:   客户端等待服务端连接所花费的总时间（微秒）。在客户端连接被分配到后端连接时更新。

total_client_parse_count
:   客户端创建的预处理语句总数。仅适用于命名预处理语句跟踪模式，参见 `max_prepared_statements`。

total_server_parse_count
:   **pgbouncer** 在服务端创建的预处理语句总数。仅适用于命名预处理语句跟踪模式，参见 `max_prepared_statements`。

total_bind_count
:   客户端准备执行并由 **pgbouncer** 转发给 PostgreSQL 的预处理语句总数。仅适用于命名预处理语句跟踪模式，参见 `max_prepared_statements`。

avg_xact_count
:   最近统计周期内每秒平均事务数。

avg_query_count
:   最近统计周期内每秒平均查询数。

avg_server_assignment_count
:   最近统计周期内每秒平均服务端连接分配次数。

avg_recv
:   每秒平均接收（来自客户端）字节数。

avg_sent
:   每秒平均发送（到客户端）字节数。

avg_xact_time
:   平均事务持续时间（微秒）。

avg_query_time
:   平均查询持续时间（微秒）。

avg_wait_time
:   客户端等待服务端的时间（微秒），为当前 `stats_period` 内被分配到后端的客户端等待时间的平均值。

avg_client_parse_count
:   客户端创建预处理语句的平均数量。仅适用于命名预处理语句跟踪模式，参见 `max_prepared_statements`。

avg_server_parse_count
:   **pgbouncer** 在服务端创建预处理语句的平均数量。仅适用于命名预处理语句跟踪模式，参见 `max_prepared_statements`。

avg_bind_count
:   客户端准备执行并由 **pgbouncer** 转发给 PostgreSQL 的预处理语句平均数量。仅适用于命名预处理语句跟踪模式，参见 `max_prepared_statements`。

#### SHOW STATS_TOTALS

**SHOW STATS** 的子集，仅显示总计值（**total_** 前缀字段）。


#### SHOW STATS_AVERAGES

**SHOW STATS** 的子集，仅显示平均值（**avg_** 前缀字段）。

#### SHOW TOTALS

类似 **SHOW STATS**，但跨所有数据库汇总。

#### SHOW SERVERS

type
:   S，表示服务端。

user
:   **pgbouncer** 用于连接服务端的用户名。

database
:   数据库名称。

replication
:   服务端连接是否使用复制。可为 **none**、**logical** 或 **physical**。

state
:   PgBouncer 服务端连接的状态，为以下之一：**active**、**idle**、**used**、**tested**、**new**、**active_cancel**、**being_canceled**。

addr
:   PostgreSQL 服务器的 IP 地址。

port
:   PostgreSQL 服务器的端口。

local_addr
:   本机上连接的起始地址。

local_port
:   本机上连接的起始端口。

connect_time
:   连接建立的时间。

request_time
:   最近一次请求发出的时间。

wait
:   服务端连接不使用此字段。

wait_us
:   服务端连接不使用此字段。

close_needed
:   若为 1，表示该连接将尽快关闭，原因是配置文件重新加载或 DNS 更新改变了连接信息，或发出了 **RECONNECT** 命令。

ptr
:   此连接内部对象的地址。

link
:   与该服务端配对的客户端连接地址。

remote_pid
:   后端服务器进程的 PID。若连接通过 Unix 套接字建立且 OS 支持获取进程 ID 信息，则为 OS PID；否则从服务器发送的取消包中提取，对于 PostgreSQL 服务器应为 PID，对于另一个 PgBouncer 则为随机数。

tls
:   TLS 连接信息字符串，未使用 TLS 时为空。

application_name
:   链接客户端连接上设置的 `application_name` 字符串，未设置或无链接连接时为空。

prepared_statements
:  服务端上已准备的预处理语句数量，受 `max_prepared_statements` 设置限制。

id
:   服务端的唯一 ID。


#### SHOW CLIENTS

type
:   C，表示客户端。

user
:   客户端连接使用的用户名。

database
:   数据库名称。

replication
:   客户端连接是否使用复制。可为 **none**、**logical** 或 **physical**。

state
:   客户端连接的状态，为以下之一：**active**（已链接到服务端连接的客户端）、**idle**（无等待查询的空闲客户端）、**waiting**、**active_cancel_req** 或 **waiting_cancel_req**。

addr
:   客户端的 IP 地址。

port
:   客户端的源端口。

local_addr
:   本机上连接的终止地址。

local_port
:   本机上连接的终止端口。

connect_time
:   连接时间的时间戳。

request_time
:   最近一次客户端请求的时间戳。

wait
:   当前等待时间（秒）。

wait_us
:   当前等待时间的微秒部分。

close_needed
:   客户端不使用此字段。

ptr
:   此连接内部对象的地址。

link
:   与该客户端配对的服务端连接地址。

remote_pid
:   进程 ID，当客户端通过 Unix 套接字连接且 OS 支持获取时可用。

tls
:   TLS 连接信息字符串，未使用 TLS 时为空。

application_name
:   客户端为此连接设置的 `application_name` 字符串，未设置时为空。

prepared_statements
:  客户端已准备的预处理语句数量。

id
:   客户端的唯一 ID。

#### SHOW POOLS

每对（database，user）组合会创建一个连接池条目。

database
:   数据库名称。

user
:   用户名。

cl_active
:   已链接到服务端连接或空闲无等待查询的客户端连接数。

cl_waiting
:   已发送查询但尚未获得服务端连接的客户端连接数。

cl_active_cancel_req
:   已将查询取消请求转发给服务端并等待服务端响应的客户端连接数。

cl_waiting_cancel_req
:   尚未将查询取消请求转发给服务端的客户端连接数。

sv_active
:   已链接到客户端的服务端连接数。

sv_active_cancel
:   当前正在转发取消请求的服务端连接数。

sv_being_canceled
:   正常情况下可变为空闲，但正在等待所有发送到该服务端以取消查询的飞行中取消请求完成后才能变为空闲的服务端连接数。

sv_idle
:   未使用且可立即用于客户端查询的服务端连接数。

sv_used
:   空闲时间超过 `server_check_delay` 的服务端连接数，需要先运行 `server_check_query` 才能再次使用。

sv_tested
:   当前正在运行 `server_reset_query` 或 `server_check_query` 的服务端连接数。

sv_login
:   当前正在登录过程中的服务端连接数。

maxwait
:   队列中第一个（最早的）客户端已等待的时间（秒）。若此值持续增加，说明当前服务端连接池处理请求的速度不够快，原因可能是服务器过载或 **pool_size** 设置过小。

maxwait_us
:   最大等待时间的微秒部分。

pool_mode
:   当前使用的池化模式。

load_balance_hosts
:   若连接池的 host 包含逗号分隔列表，则显示所使用的 load_balance_hosts。

#### SHOW PEER_POOLS

每个已配置的 peer 会创建一个 peer_pool 条目。

database
:   已配置 peer 条目的 ID。

cl_active_cancel_req
:   已将查询取消请求转发给服务端并等待服务端响应的客户端连接数。

cl_waiting_cancel_req
:   尚未将查询取消请求转发给服务端的客户端连接数。

sv_active_cancel
:   当前正在转发取消请求的服务端连接数。

sv_login
:   当前正在登录过程中的服务端连接数。

#### SHOW LISTS

以列（而非行）形式显示以下内部信息：

databases
:   数据库数量。

users
:   用户数量。

pools
:   连接池数量。

free_clients
:   空闲客户端数量。这些客户端已断开连接，但 PgBouncer 保留了为其分配的内存，以便后续客户端复用，避免重复分配。

used_clients
:   已使用的客户端数量。

login_clients
:   处于 **login** 状态的客户端数量。

free_servers
:   空闲服务端数量。这些服务端已断开连接，但 PgBouncer 保留了为其分配的内存，以便后续服务端复用，避免重复分配。

used_servers
:   已使用的服务端数量。

dns_names
:   DNS 缓存中的域名数量。

dns_zones
:   DNS 缓存中的 DNS 区域数量。

dns_queries
:   飞行中的 DNS 查询数量。

dns_pending
:   未使用。

#### SHOW USERS

name
:   用户名。

pool_size
:   用户的覆盖 pool_size，未设置则为 NULL。

reserve_pool_size
:   用户的覆盖 reserve_pool_size，未设置则为 NULL。

pool_mode
:   用户的覆盖 pool_mode，未设置则为 NULL。

max_user_connections
:   用户的 max_user_connections 设置。若未为该用户单独设置，则显示默认值。

current_connections
:   该用户当前向所有服务器打开的服务端连接数。

max_user_client_connections
:   用户的 max_user_client_connections 设置。若未为该用户单独设置，则显示默认值。

current_client_connections
:   该用户当前向 PgBouncer 打开的客户端连接数。

#### SHOW DATABASES

name
:   已配置数据库条目的名称。

host
:   PgBouncer 连接到的主机。

port
:   PgBouncer 连接到的端口。

database
:   PgBouncer 实际连接到的数据库名称。

force_user
:   当用户包含在连接字符串中时，无论客户端用户是谁，PgBouncer 与 PostgreSQL 之间的连接都强制使用指定用户。

pool_size
:   最大服务端连接数。

min_pool_size
:   最小服务端连接数。

reserve_pool_size
:   此数据库的最大附加连接数。

server_lifetime
:   此数据库服务端连接的最大生命周期。

pool_mode
:   数据库的覆盖 pool_mode，为 NULL 时使用默认值。

load_balance_hosts
:   若 host 包含逗号分隔列表，则显示数据库的 load_balance_hosts。

max_connections
:   此数据库允许的最大服务端连接数，由 **max_db_connections** 全局或按数据库设置。

current_connections
:   此数据库当前的服务端连接数。

max_client_connections
:   此 PgBouncer 实例允许的最大客户端连接数，由 max_db_client_connections 按数据库设置。

current_client_connections
:   此数据库当前的客户端连接数。

paused
:   若此数据库当前已暂停则为 1，否则为 0。

disabled
:   若此数据库当前已禁用则为 1，否则为 0。

#### SHOW PEERS

peer_id
:   已配置 peer 条目的 ID。

host
:   PgBouncer 连接到的主机。

port
:   PgBouncer 连接到的端口。

pool_size
:   可向此 peer 建立的最大服务端连接数。

#### SHOW FDS

内部命令——显示当前使用中的文件描述符列表及其关联的内部状态。

当连接用户名为"pgbouncer"、通过 Unix 套接字连接且 UID 与运行进程相同时，实际的 FD 将通过连接传递。此机制用于在线重启。
注意：在 Windows 上不可用。

此命令还会阻塞内部事件循环，因此在 PgBouncer 使用期间不应调用。

fd
:   文件描述符的数值。

task
:   为 **pooler**、**client** 或 **server** 之一。

user
:   使用该 FD 的连接的用户名。

database
:   使用该 FD 的连接的数据库名。

addr
:   使用该 FD 的连接的 IP 地址，若使用 Unix 套接字则为 **unix**。

port
:   使用该 FD 的连接所用的端口。

cancel
:   此连接的取消密钥。

link
:   对应服务端/客户端的 FD。空闲时为 NULL。

#### SHOW SOCKETS, SHOW ACTIVE_SOCKETS

显示套接字或仅显示活跃套接字的底层信息。包含 **SHOW CLIENTS** 和 **SHOW SERVERS** 所显示的信息，以及其他更底层的信息。

#### SHOW CONFIG

显示当前配置设置，每行一条，包含以下列：

key
:   配置变量名称。

value
:   配置值。

default
:   配置默认值。

changeable
:   **yes** 或 **no**，表示该变量是否可在运行时更改。若为 **no**，则只能在启动时更改。使用 **SET** 在运行时更改变量。

#### SHOW MEM

显示各种内部内存分配当前大小的底层信息。所呈现的信息可能随版本变化。

#### SHOW DNS_HOSTS

显示 DNS 缓存中的主机名。

hostname
:   主机名。

ttl
:   距下次查询还剩多少秒。

addrs
:   逗号分隔的地址列表。

#### SHOW DNS_ZONES

显示缓存中的 DNS 区域。

zonename
:   区域名称。

serial
:   当前序列号。

count
:   属于此区域的主机名数量。


#### SHOW VERSION

显示 PgBouncer 版本字符串。

#### SHOW STATE

显示 PgBouncer 状态设置。当前状态为 active、paused 和 suspended。

### 进程控制命令

#### PAUSE [db]

PgBouncer 尝试断开与所有服务器的连接。断开每个服务端连接时，需根据服务端连接池的池化模式等待该连接被释放（事务池化模式下需等待事务完成，语句模式下需等待语句完成，会话池化模式下需等待客户端断开）。该命令在所有服务端连接断开之前不会返回。适用于数据库重启时使用。

若指定了数据库名称，则仅暂停该数据库。

连接到已暂停数据库的新客户端连接将等待，直到调用 **RESUME**。

#### DISABLE db

拒绝指定数据库上的所有新客户端连接。

#### ENABLE db

在之前的 **DISABLE** 命令之后，允许新客户端连接。

#### RECONNECT [db]

关闭指定数据库或所有数据库中每个已打开的服务端连接，在其被释放后（根据池化模式），即使其生命周期尚未结束。新服务端连接可立即建立，并根据连接池大小设置按需连接。

此命令适用于服务端连接配置发生变化时，例如逐步切换到新服务器。当 pgbouncer.ini 中的连接字符串已更改并重新加载（见 **RELOAD**）或 DNS 解析发生变化时，*无需*执行此命令，因为等效操作会自动运行。仅当 PgBouncer 下游有某些组件负责路由连接时，才需要此命令。

运行此命令后，可能有一段时间部分服务端连接指向旧目标，部分指向新目标。这通常仅在将只读流量在只读副本之间切换，或在多主复制环境节点之间切换时才合理。若需要同时切换所有连接，建议使用 **PAUSE**。若需要不等待地立即关闭服务端连接（例如紧急故障转移而非渐进式切换），还可考虑 **KILL**。

#### KILL [db]

立即断开指定数据库或所有数据库（不包括管理数据库）上的所有客户端和服务端连接。

连接到已被 kill 的数据库的新客户端连接将等待，直到调用 **RESUME**。

#### KILL_CLIENT id

立即终止指定的客户端连接及该客户端的所有服务端连接。要终止的客户端由 `SHOW CLIENTS` 命令中找到的 `id` 值标识。

示例命令类似于 `KILL_CLIENT 1234`。

#### SUSPEND

所有套接字缓冲区将被刷新，PgBouncer 停止监听其上的数据。该命令在所有缓冲区清空之前不会返回。适用于 PgBouncer 在线重启时使用。

连接到已挂起数据库的新客户端连接将等待，直到调用 **RESUME**。

#### RESUME [db]

从之前的 **KILL**、**PAUSE** 或 **SUSPEND** 命令中恢复工作。

#### SHUTDOWN

PgBouncer 进程将退出。

#### SHUTDOWN WAIT_FOR_SERVERS

停止接受新连接，并在所有服务端连接释放后关闭。这基本上等同于依次执行 **PAUSE** 和 **SHUTDOWN**，区别在于此命令在等待 **PAUSE** 期间也停止接受新连接，并主动断开正在等待服务端连接的客户端。请注意，关闭期间 UNIX 套接字将保持打开，但只接受到 PgBouncer 管理控制台的连接。

#### SHUTDOWN WAIT_FOR_CLIENTS

停止接受新连接，并在所有现有客户端断开后关闭进程。请注意，关闭期间 UNIX 套接字将保持打开，但只接受到 pgbouncer 管理控制台的连接。此命令可用于使用以下步骤对两个 PgBouncer 进程进行零停机时间的滚动重启：

1. 让两个或更多 PgBouncer 进程使用 `so_reuseport` 在同一端口上运行（建议 [配置对等](/docs/pgbouncer/config/#section-peers)，但非必须）。为了在重启时实现零停机时间，我们将逐个重启这些进程，让其他进程在某一进程重启期间继续接受连接。
2. 选择一个进程先重启，称之为 A。
3. 对进程 A 执行 `SHUTDOWN WAIT_FOR_CLIENTS`（或发送 `SIGTERM`）。
4. 让所有客户端重新连接。可能需要等待一段时间，直到客户端侧连接池因其 `server_idle_timeout`（或类似配置）触发重连。如果没有客户端侧连接池，可能需要重启客户端。一旦所有客户端重新连接，进程 A 将自动退出，因为已没有客户端连接到它。
5. 重新启动进程 A。
6. 对其余每个进程逐个重复步骤 3、4 和 5，直到所有进程都重启完成。


#### RELOAD

PgBouncer 进程将重新加载其配置文件并更新可更改的设置。包括主配置文件以及由 `auth_file` 和 `auth_hba_file` 设置指定的文件。

PgBouncer 会检测配置文件重新加载是否更改了数据库定义的连接参数。到旧目标的现有服务端连接将在下次释放时关闭（根据池化模式），新服务端连接将立即使用更新后的连接参数。

#### WAIT_CLOSE [db]

等待指定数据库或所有数据库的所有服务端连接清除"close_needed"状态（见 **SHOW SERVERS**）。可在 **RECONNECT** 或 **RELOAD** 之后调用，等待相应配置更改完全生效，例如在切换脚本中使用。

### 其他命令

#### SET key = arg

更改配置设置（另见 **SHOW CONFIG**）。例如：

    SET log_connections = 1;
    SET server_check_query = 'select 2';

（注意，此命令在 PgBouncer 管理控制台上运行，用于设置 PgBouncer 的配置项。在其他数据库上运行的 **SET** 命令将像普通 SQL 命令一样传递给 PostgreSQL 后端。）

### 信号

SIGHUP
:   重新加载配置。与在控制台执行 **RELOAD** 命令效果相同。

SIGTERM
:   超安全关闭。等待所有现有客户端断开连接，但不接受新连接。与在控制台执行 **SHUTDOWN WAIT_FOR_CLIENTS** 效果相同。若在已有关闭进程中再次收到此信号，则触发"立即关闭"而非"超安全关闭"。在 PgBouncer 1.23.0 之前的版本中，此信号会导致"立即关闭"。

SIGINT
:   安全关闭。与在控制台执行 **SHUTDOWN WAIT_FOR_SERVERS** 效果相同。若在已有关闭进程中再次收到此信号，则触发"立即关闭"而非"安全关闭"。

SIGQUIT
:   立即关闭。与在控制台执行 **SHUTDOWN** 效果相同。

SIGUSR1
:   与在控制台执行 **PAUSE** 效果相同。

SIGUSR2
:   与在控制台执行 **RESUME** 效果相同。

### Libevent 设置

来自 Libevent 文档：

> It is possible to disable support for epoll, kqueue, devpoll, poll
> or select by setting the environment variable EVENT_NOEPOLL,
> EVENT_NOKQUEUE, EVENT_NODEVPOLL, EVENT_NOPOLL or EVENT_NOSELECT,
> respectively.
>
> By setting the environment variable EVENT_SHOW_METHOD, libevent
> displays the kernel notification method that it uses.

--------

## 另请参阅

pgbouncer(5) - 配置设置描述手册页

<https://www.pgbouncer.org/>
