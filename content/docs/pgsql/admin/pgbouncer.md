---
title: Pgbouncer 连接池管理
linkTitle: 连接池管理
weight: 50
description: 使用 Pgbouncer 管理连接池，包括暂停、恢复、禁用、启用、重连、终止、重载等操作。
icon: fa-solid fa-filter
module: [PGSQL]
categories: [任务]
---


## 概览

Pigsty 使用 [**Pgbouncer**](https://www.pgbouncer.org/) 作为 PostgreSQL 的连接池中间件，默认监听 `6432` 端口，代理访问本机 `5432` 端口上的 PostgreSQL 实例。

这是一个 **可选组件**，如果您并没有海量链接，也不需要事务池化与查询监控指标，可以关闭连接池，直连数据库，或者保留但不使用。



----------------

## 用户与数据库管理

Pgbouncer 的中用户和数据库由 Pigsty 自动管理，并在 [**创建数据库**](/docs/pgsql/admin/db) 与 [**创建用户**](/docs/pgsql/admin/user) 时自动应用 [**数据库配置**](/docs/pgsql/config/db) 与 [**用户配置**](/docs/pgsql/config/user)。

**数据库管理**：在 [**`pg_databases`**](/docs/pgsql/param#pg_databases) 中定义的数据库，默认会自动添加到 Pgbouncer。设置 [**`pgbouncer: false`**](/docs/pgsql/admin/db#连接池管理) 可以排除特定数据库。

```yaml
pg_databases:
  - name: mydb                # 默认加入连接池
    pool_mode: transaction    # 数据库级池化模式
    pool_size: 64             # 默认池大小
  - name: internal
    pgbouncer: false          # 不加入连接池
```

**用户管理**：在 [**`pg_users`**](/docs/pgsql/param#pg_users) 中定义的用户，需要显式设置 [**`pgbouncer: true`**](/docs/pgsql/admin/user#连接池管理)  才会加入连接池用户列表。

```yaml
pg_users:
  - name: dbuser_app
    password: DBUser.App
    pgbouncer: true           # 加入连接池用户列表
    pool_mode: transaction    # 用户级池化模式
```


----------------

## 服务管理

在 Pigsty 中，PostgreSQL 集群的 [**Primary 服务**](/docs/pgsql/service#primary服务) 与 Replica 服务默认指向 Pgbouncer 6432 端口，
如果您想要让这两个服务绕过连接池直接访问 PostgreSQL 实例，可以定制 [**`pg_services`**](/docs/pgsql/param#pg_services)，或将将 [**`pg_default_service_dest`**](/docs/pgsql/param#pg_default_service_dest) 设置为 `postgres`。


----------------

## 配置管理

Pgbouncer 的配置文件位于 `/etc/pgbouncer/` 目录，由 Pigsty 统一生成与管理：

| 文件              | 说明            |
|-----------------|---------------|
| `pgbouncer.ini` | 主配置文件，连接池级别参数 |
| `database.txt`  | 数据库列表，数据库级别参数 |
| `userlist.txt`  | 用户密码列表        |
| `useropts.txt`  | 用户级别的连接池参数    |
| `pgb_hba.conf`  | HBA 访问控制规则    |
{.full-width}

Pigsty 会自动管理 `database.txt` 和 `userlist.txt`，在 [**创建数据库**](/docs/pgsql/admin/db#创建数据库) 或 [**创建用户**](/docs/pgsql/admin/user#创建用户) 时自动更新这些文件。

您也可以手动编辑配置文件后执行 `RELOAD` 使其生效：

```bash
# 编辑配置
$ vim /etc/pgbouncer/pgbouncer.ini

# 重载生效：通过 systemctl
$ sudo systemctl reload pgbouncer

# 重载生效，本身是 pg_dbsu / postgres 用户
$ pgb -c "RELOAD;"
```



----------------

## 连接池管理

Pgbouncer 使用和 PostgreSQL 相同的 `dbsu` 运行，默认为 `postgres` 操作系统用户。Pigsty 提供了快捷命令 `pgb` 来简化管理操作：

```bash
alias pgb="psql -p 6432 -d pgbouncer -U postgres"
```

您可以在数据库节点上使用 `pgb` 命令连接到 Pgbouncer 管理控制台，执行管理命令和监控查询。

```bash
$ pgb
pgbouncer=# SHOW POOLS;
pgbouncer=# SHOW CLIENTS;
pgbouncer=# SHOW SERVERS;
```

| 命令                                | 功能   | 说明                            |
|-----------------------------------|------|-------------------------------|
| [**`PAUSE`**](#pause)             | 暂停   | 暂停数据库连接，等待事务完成后断开服务端连接        |
| [**`RESUME`**](#resume)           | 恢复   | 恢复被 PAUSE/KILL/SUSPEND 暂停的数据库 |
| [**`DISABLE`**](#disable)         | 禁用   | 拒绝指定数据库的新客户端连接                |
| [**`ENABLE`**](#enable)           | 启用   | 允许指定数据库的新客户端连接                |
| [**`RECONNECT`**](#reconnect)     | 重连   | 优雅地关闭并重建服务端连接                 |
| [**`KILL`**](#kill)               | 终止   | 立即断开指定数据库的所有客户端和服务端连接         |
| [**`KILL_CLIENT`**](#kill_client) | 杀客户端 | 终止指定的客户端连接                    |
| [**`SUSPEND`**](#suspend)         | 挂起   | 刷新缓冲区并停止监听，用于在线重启             |
| [**`SHUTDOWN`**](#shutdown)       | 关闭   | 关闭 Pgbouncer 进程               |
| [**`RELOAD`**](#reload)           | 重载   | 重新加载配置文件                      |
| [**`WAIT_CLOSE`**](#wait_close)   | 等待关闭 | 等待 RECONNECT/RELOAD 后的服务端连接释放 |
| [**监控命令**](#监控命令)                 | 监控   | 查看连接池状态、客户端、服务端等信息            |
{.full-width}


----------------

### PAUSE

使用 `PAUSE` 命令暂停数据库连接。Pgbouncer 会根据池化模式等待活动事务/会话完成后断开服务端连接。新的客户端请求会被阻塞直到执行 `RESUME`。

```sql
PAUSE [db];           -- 暂停指定数据库，不指定则暂停所有数据库
```

典型使用场景：

- 在线切换后端数据库（如主从切换后更新连接目标）
- 执行需要断开所有连接的维护操作
- 配合 `SUSPEND` 实现 Pgbouncer 在线重启

```bash
$ pgb -c "PAUSE mydb;"        # 暂停 mydb 数据库
$ pgb -c "PAUSE;"             # 暂停所有数据库
```

暂停后，`SHOW DATABASES` 会显示 `paused` 状态：

```sql
pgbouncer=# SHOW DATABASES;
   name   |   host    | port | database | ... | paused | disabled
----------+-----------+------+----------+-----+--------+----------
 mydb     | /var/run  | 5432 | mydb     | ... |      1 |        0
```


----------------

### RESUME

使用 `RESUME` 命令恢复被 `PAUSE`、`KILL` 或 `SUSPEND` 暂停的数据库，允许新的连接请求并恢复正常服务。

```sql
RESUME [db];          -- 恢复指定数据库，不指定则恢复所有数据库
```

```bash
$ pgb -c "RESUME mydb;"       # 恢复 mydb 数据库
$ pgb -c "RESUME;"            # 恢复所有数据库
```


----------------

### DISABLE

使用 `DISABLE` 命令禁用指定数据库，拒绝所有新的客户端连接请求。已存在的连接不受影响。

```sql
DISABLE db;           -- 禁用指定数据库（必须指定数据库名）
```

典型使用场景：

- 临时下线某个数据库进行维护
- 阻止新连接以便安全地进行数据库迁移
- 逐步下线即将删除的数据库

```bash
$ pgb -c "DISABLE mydb;"      # 禁用 mydb，新连接被拒绝
```


----------------

### ENABLE

使用 `ENABLE` 命令启用之前被 `DISABLE` 禁用的数据库，重新接受新的客户端连接。

```sql
ENABLE db;            -- 启用指定数据库（必须指定数据库名）
```

```bash
$ pgb -c "ENABLE mydb;"       # 启用 mydb，允许新连接
```


----------------

### RECONNECT

使用 `RECONNECT` 命令优雅地重建服务端连接。Pgbouncer 会在连接释放回池后关闭它们，并在需要时建立新连接。

```sql
RECONNECT [db];       -- 重建指定数据库的服务端连接，不指定则重建所有
```

典型使用场景：

- 后端数据库 IP 地址变更后刷新连接
- 主从切换后重新路由流量
- DNS 更新后重建连接

```bash
$ pgb -c "RECONNECT mydb;"    # 重建 mydb 的服务端连接
$ pgb -c "RECONNECT;"         # 重建所有服务端连接
```

执行 `RECONNECT` 后，可以使用 `WAIT_CLOSE` 等待旧连接完全释放。


----------------

### KILL

使用 `KILL` 命令立即断开指定数据库的所有客户端和服务端连接。与 `PAUSE` 不同，`KILL` 不等待事务完成，直接强制断开。

```sql
KILL [db];            -- 终止指定数据库的所有连接，不指定则终止所有（admin 除外）
```

```bash
$ pgb -c "KILL mydb;"         # 强制断开 mydb 的所有连接
$ pgb -c "KILL;"              # 强制断开所有数据库的连接（admin 除外）
```

执行 `KILL` 后，新连接会被阻塞直到执行 `RESUME`。


----------------

### KILL_CLIENT

使用 `KILL_CLIENT` 命令终止指定的客户端连接。客户端 ID 可以从 `SHOW CLIENTS` 输出中获取。

```sql
KILL_CLIENT id;       -- 终止指定 ID 的客户端连接
```

```bash
# 查看客户端连接
$ pgb -c "SHOW CLIENTS;"

# 终止特定客户端（假设 ptr 列显示的 ID 为 0x1234567890）
$ pgb -c "KILL_CLIENT 0x1234567890;"
```


----------------

### SUSPEND

使用 `SUSPEND` 命令挂起 Pgbouncer。Pgbouncer 会刷新所有 socket 缓冲区并停止监听数据，直到执行 `RESUME`。

```sql
SUSPEND;              -- 挂起 Pgbouncer
```

`SUSPEND` 主要用于实现 Pgbouncer 的在线重启（零停机升级）：

```bash
# 1. 挂起当前 Pgbouncer
$ pgb -c "SUSPEND;"

# 2. 启动新的 Pgbouncer 进程（使用 -R 选项接管 socket）
$ pgbouncer -R /etc/pgbouncer/pgbouncer.ini

# 3. 新进程接管后，旧进程自动退出
```


----------------

### SHUTDOWN

使用 `SHUTDOWN` 命令关闭 Pgbouncer 进程。支持多种关闭模式：

```sql
SHUTDOWN;                      -- 立即关闭
SHUTDOWN WAIT_FOR_SERVERS;     -- 等待服务端连接释放后关闭
SHUTDOWN WAIT_FOR_CLIENTS;     -- 等待客户端断开后关闭（零停机滚动重启）
```

| 模式                 | 说明                           |
|--------------------|------------------------------|
| `SHUTDOWN`         | 立即关闭 Pgbouncer 进程            |
| `WAIT_FOR_SERVERS` | 停止接受新连接，等待服务端连接释放后退出         |
| `WAIT_FOR_CLIENTS` | 停止接受新连接，等待所有客户端断开后退出，适用于滚动重启 |
{.full-width}

```bash
$ pgb -c "SHUTDOWN WAIT_FOR_CLIENTS;"   # 优雅关闭，等待客户端断开
```


----------------

### RELOAD

使用 `RELOAD` 命令重新加载 Pgbouncer 配置文件。可以动态更新大部分配置参数，无需重启进程。

```sql
RELOAD;               -- 重载配置文件
```

```bash
$ pgb -c "RELOAD;"              # 通过管理控制台重载
$ systemctl reload pgbouncer    # 通过 systemd 重载
$ kill -SIGHUP $(cat /var/run/pgbouncer/pgbouncer.pid)  # 通过信号重载
```

Pigsty 提供了重载 Pgbouncer 配置的剧本任务：

```bash
./pgsql.yml -l <cls> -t pgbouncer_reload    # 重载集群的 Pgbouncer 配置
```


----------------

### WAIT_CLOSE

使用 `WAIT_CLOSE` 命令等待服务端连接完成关闭。通常在 `RECONNECT` 或 `RELOAD` 后使用，确保旧连接已全部释放。

```sql
WAIT_CLOSE [db];      -- 等待指定数据库的服务端连接关闭，不指定则等待所有
```

```bash
# 完整的连接重建流程
$ pgb -c "RECONNECT mydb;"
$ pgb -c "WAIT_CLOSE mydb;"    # 等待旧连接释放
```


----------------

### 监控命令

Pgbouncer 提供了丰富的 `SHOW` 命令用于监控连接池状态：

| 命令                    | 说明                |
|-----------------------|-------------------|
| `SHOW HELP`           | 显示可用命令帮助          |
| `SHOW DATABASES`      | 显示数据库配置和状态        |
| `SHOW POOLS`          | 显示连接池统计信息         |
| `SHOW CLIENTS`        | 显示客户端连接列表         |
| `SHOW SERVERS`        | 显示服务端连接列表         |
| `SHOW USERS`          | 显示用户配置            |
| `SHOW STATS`          | 显示统计信息（请求数、字节数等）  |
| `SHOW STATS_TOTALS`   | 显示累计统计信息          |
| `SHOW STATS_AVERAGES` | 显示平均统计信息          |
| `SHOW CONFIG`         | 显示当前配置参数          |
| `SHOW MEM`            | 显示内存使用情况          |
| `SHOW DNS_HOSTS`      | 显示 DNS 缓存的主机名     |
| `SHOW DNS_ZONES`      | 显示 DNS 缓存的区域      |
| `SHOW SOCKETS`        | 显示打开的 socket 信息   |
| `SHOW ACTIVE_SOCKETS` | 显示活动的 socket      |
| `SHOW LISTS`          | 显示内部列表计数          |
| `SHOW FDS`            | 显示文件描述符使用情况       |
| `SHOW STATE`          | 显示 Pgbouncer 运行状态 |
| `SHOW VERSION`        | 显示 Pgbouncer 版本   |
{.full-width}

常用监控示例：

```bash
# 查看连接池状态
$ pgb -c "SHOW POOLS;"

# 查看客户端连接
$ pgb -c "SHOW CLIENTS;"

# 查看服务端连接
$ pgb -c "SHOW SERVERS;"

# 查看统计信息
$ pgb -c "SHOW STATS;"

# 查看数据库状态
$ pgb -c "SHOW DATABASES;"
```

更多监控命令的详细说明，请参考 [**Pgbouncer 官方文档**](https://www.pgbouncer.org/usage.html)。


----------------

### Unix 信号

Pgbouncer 支持通过 Unix 信号进行控制，这在无法连接管理控制台时非常有用：

| 信号        | 等效命令                        | 说明            |
|-----------|-----------------------------|--------------------|
| `SIGHUP`  | `RELOAD`                    | 重载配置文件           |
| `SIGTERM` | `SHUTDOWN WAIT_FOR_CLIENTS` | 优雅关闭，等待客户端断开     |
| `SIGINT`  | `SHUTDOWN WAIT_FOR_SERVERS` | 优雅关闭，等待服务端释放     |
| `SIGQUIT` | `SHUTDOWN`                  | 立即关闭             |
| `SIGUSR1` | `PAUSE`                     | 暂停所有数据库          |
| `SIGUSR2` | `RESUME`                    | 恢复所有数据库          |
{.full-width}

```bash
# 通过信号重载配置
$ kill -SIGHUP $(cat /var/run/pgbouncer/pgbouncer.pid)

# 通过信号优雅关闭
$ kill -SIGTERM $(cat /var/run/pgbouncer/pgbouncer.pid)

# 通过信号暂停
$ kill -SIGUSR1 $(cat /var/run/pgbouncer/pgbouncer.pid)

# 通过信号恢复
$ kill -SIGUSR2 $(cat /var/run/pgbouncer/pgbouncer.pid)
```



----------------

## 流量切换

Pigsty 提供了 `pgb-route` 实用函数，可以将 Pgbouncer 流量快速切换至其他节点，用于零停机迁移：

```bash
# 定义（已在 /etc/profile.d/pg-alias.sh 中）
function pgb-route(){
  local ip=${1-'\/var\/run\/postgresql'}
  sed -ie "s/host=[^[:space:]]\+/host=${ip}/g" /etc/pgbouncer/pgbouncer.ini
  cat /etc/pgbouncer/pgbouncer.ini
}

# 使用：将流量路由到 10.10.10.12
$ pgb-route 10.10.10.12
$ pgb -c "RECONNECT; WAIT_CLOSE;"
```

完整的零停机切换流程：

```bash
# 1. 修改路由目标
$ pgb-route 10.10.10.12

# 2. 重载配置
$ pgb -c "RELOAD;"

# 3. 重建连接并等待旧连接释放
$ pgb -c "RECONNECT;"
$ pgb -c "WAIT_CLOSE;"
```
