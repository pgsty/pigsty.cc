---
title: 管理 PostgreSQL 组件服务
linkTitle: 组件管理
weight: 70
description: 使用 systemctl 管理 PostgreSQL 集群中的各个组件服务：启动、停止、重启、重载与状态检查。
icon: fa-solid fa-gears
module: [PGSQL]
categories: [任务]
---

## 概述

Pigsty 的 PGSQL 模块由多个组件构成，每个组件都以 systemd 服务的形式运行在节点上。（ [**pgbackrest**](/docs/concept/arch/pgsql#pgbackrest) 除外）

了解这些组件及其管理方式，对于维护生产环境中的 PostgreSQL 集群非常重要。

| 组件                 | 端口         | 服务名                  | 说明                           |
|:-------------------|:-----------|:---------------------|:-----------------------------|
| Patroni            | **`8008`** | `patroni`            | 高可用管理器，负责 PostgreSQL 的生命周期管理 |
| PostgreSQL         | **`5432`** | `postgres`           | 占位服务，默认不使用，应急使用              |
| Pgbouncer          | **`6432`** | `pgbouncer`          | 连接池中间件，业务流量入口                |
| PgBackRest         | -          | -                    | pgBackRest 没有守护服务            |
| HAProxy            | **`543x`** | `haproxy`            | 负载均衡器，暴露数据库服务                |
| pg_exporter        | **`9630`** | `pg_exporter`        | PostgreSQL 监控指标导出器           |
| pgbouncer_exporter | **`9631`** | `pgbouncer_exporter` | Pgbouncer 监控指标导出器            |
| vip-manager        | -          | `vip-manager`        | 可选，管理 L2 VIP 地址漂移            |
{.full-width}

{{% alert title="重要提示" color="warning" %}}
**不要直接使用 systemctl 管理 PostgreSQL 服务**。PostgreSQL 由 Patroni 托管，应通过 [**`patronictl`**](/docs/pgsql/admin/patroni) 命令进行管理。
直接操作 PostgreSQL 可能导致 Patroni 状态不一致，触发意外的故障转移。`postgres` 服务是 Patroni 服务失效时的应急逃生窗口。
{{% /alert %}}


----------------

## 命令速查

| 操作   | 命令                            |
|:-----|:------------------------------|
| 启动服务 | `systemctl start <service>`   |
| 停止服务 | `systemctl stop <service>`    |
| 重启服务 | `systemctl restart <service>` |
| 重载配置 | `systemctl reload <service>`  |
| 查看状态 | `systemctl status <service>`  |
| 查看日志 | `journalctl -u <service> -f`  |
| 开机启动 | `systemctl enable <service>`  |
| 禁用启动 | `systemctl disable <service>` |

常用组件服务名：`patroni`、`pgbouncer`、`haproxy`、`pg_exporter`、`pgbouncer_exporter`、`vip-manager`


----------------

## Patroni

[**Patroni**](https://patroni.readthedocs.io/) 是 PostgreSQL 的高可用管理器，负责 PostgreSQL 的启动、停止、故障检测与自动故障转移。
它是 PGSQL 模块的核心组件，PostgreSQL 进程由 Patroni 托管，不应直接通过 systemctl 管理 postgres 服务。

**启动 Patroni**

```bash
systemctl start patroni     # 启动 Patroni（同时启动 PostgreSQL）
```

启动 Patroni 后，它会自动拉起 PostgreSQL 进程。首次启动时，Patroni 会根据角色决定行为：
- 主库：初始化或恢复数据目录
- 从库：从主库克隆数据并建立复制

**停止 Patroni**

```bash
systemctl stop patroni      # 停止 Patroni（同时停止 PostgreSQL）
```

停止 Patroni 时，它会优雅地关闭 PostgreSQL 进程。注意：如果这是主库，且未暂停自动切换，可能触发故障转移。

**重启 Patroni**

```bash
systemctl restart patroni   # 重启 Patroni（同时重启 PostgreSQL）
```

重启会导致短暂的服务中断。对于生产环境，建议使用 `pg restart` 命令进行滚动重启。

**重载 Patroni**

```bash
systemctl reload patroni    # 重载 Patroni 配置
```

重载会让 Patroni 重新读取配置文件，并将可热加载的参数应用到 PostgreSQL。

**查看状态与日志**

```bash
systemctl status patroni    # 查看 Patroni 服务状态
journalctl -u patroni -f    # 实时查看 Patroni 日志
journalctl -u patroni -n 100 --no-pager  # 查看最近 100 行日志
```

**配置文件位置**：`/etc/patroni/patroni.yml`

> **最佳实践**：使用 [**`patronictl`**](/docs/pgsql/admin/patroni) 而非 systemctl 管理 PostgreSQL 集群。


----------------

## Pgbouncer

[**Pgbouncer**](https://www.pgbouncer.org/) 是轻量级的 PostgreSQL 连接池中间件。
业务流量通常通过 Pgbouncer（6432 端口）而非直接连接 PostgreSQL（5432 端口），以实现连接复用和保护数据库。

**启动 Pgbouncer**

```bash
systemctl start pgbouncer
```

**停止 Pgbouncer**

```bash
systemctl stop pgbouncer
```

注意：停止 Pgbouncer 会中断所有通过连接池的业务连接。

**重启 Pgbouncer**

```bash
systemctl restart pgbouncer
```

重启会断开所有现有连接。如果只是配置变更，建议使用 `reload`。

**重载 Pgbouncer**

```bash
systemctl reload pgbouncer
```

重载会重新读取配置文件（用户列表、连接池参数等），不会断开现有连接。

**查看状态与日志**

```bash
systemctl status pgbouncer
journalctl -u pgbouncer -f
```

**配置文件位置**：
- 主配置：`/etc/pgbouncer/pgbouncer.ini`
- HBA 规则：`/etc/pgbouncer/pgb_hba.conf`
- 用户列表：`/etc/pgbouncer/userlist.txt`
- 数据库列表：`/etc/pgbouncer/database.txt`

**管理控制台**

```bash
psql -p 6432 -U postgres -d pgbouncer  # 连接到 Pgbouncer 管理控制台
```

常用管理命令：

```sql
SHOW POOLS;      -- 查看连接池状态
SHOW CLIENTS;    -- 查看客户端连接
SHOW SERVERS;    -- 查看后端服务器连接
SHOW STATS;      -- 查看统计信息
RELOAD;          -- 重载配置
PAUSE;           -- 暂停所有连接池
RESUME;          -- 恢复所有连接池
```


----------------

## HAProxy

[**HAProxy**](https://www.haproxy.org/) 是高性能的负载均衡器，负责将流量分发到正确的 PostgreSQL 实例。
Pigsty 使用 HAProxy 暴露 [**服务**](/docs/pgsql/service/)，根据角色（主库/从库）和健康状态进行流量调度。

**启动 HAProxy**

```bash
systemctl start haproxy
```

**停止 HAProxy**

```bash
systemctl stop haproxy
```

注意：停止 HAProxy 会中断所有通过负载均衡器的连接。

**重启 HAProxy**

```bash
systemctl restart haproxy
```

**重载 HAProxy**

```bash
systemctl reload haproxy
```

HAProxy 支持优雅重载，不会断开现有连接。配置变更后推荐使用 `reload`。

**查看状态与日志**

```bash
systemctl status haproxy
journalctl -u haproxy -f
```

**配置文件位置**：`/etc/haproxy/haproxy.cfg`

**管理界面**

HAProxy 提供 Web 管理界面，默认监听在 9101 端口：

```
http://<node_ip>:9101/haproxy
```

默认认证：用户名 `admin`，密码由 [**`haproxy_admin_password`**](/docs/node/param#haproxy_admin_password) 配置。


----------------

## pg_exporter

[**pg_exporter**](https://github.com/Vonng/pg_exporter) 是 PostgreSQL 的 Prometheus 监控指标导出器，负责采集数据库性能指标。

**启动 pg_exporter**

```bash
systemctl start pg_exporter
```

**停止 pg_exporter**

```bash
systemctl stop pg_exporter
```

停止后，Prometheus 将无法采集该实例的 PostgreSQL 监控指标。

**重启 pg_exporter**

```bash
systemctl restart pg_exporter
```

**查看状态与日志**

```bash
systemctl status pg_exporter
journalctl -u pg_exporter -f
```

**配置文件位置**：`/etc/pg_exporter.yml`

**验证指标采集**

```bash
curl -s localhost:9630/metrics | head -20
```


----------------

## pgbouncer_exporter

**pgbouncer_exporter** 是 Pgbouncer 的 Prometheus 监控指标导出器。

**启动/停止/重启**

```bash
systemctl start pgbouncer_exporter
systemctl stop pgbouncer_exporter
systemctl restart pgbouncer_exporter
```

**查看状态与日志**

```bash
systemctl status pgbouncer_exporter
journalctl -u pgbouncer_exporter -f
```

**验证指标采集**

```bash
curl -s localhost:9631/metrics | head -20
```


----------------

## vip-manager

[**vip-manager**](https://github.com/cybertec-postgresql/vip-manager) 是可选组件，用于管理 L2 VIP 地址漂移。
当启用 [**`pg_vip_enabled`**](/docs/pgsql/param#pg_vip_enabled) 时，vip-manager 会将 VIP 绑定到当前主库节点。

**启动 vip-manager**

```bash
systemctl start vip-manager
```

**停止 vip-manager**

```bash
systemctl stop vip-manager
```

停止后，VIP 地址会从当前节点释放。

**重启 vip-manager**

```bash
systemctl restart vip-manager
```

**查看状态与日志**

```bash
systemctl status vip-manager
journalctl -u vip-manager -f
```

**配置文件位置**：`/etc/default/vip-manager`

**验证 VIP 绑定**

```bash
ip addr show           # 查看网络接口，检查 VIP 是否绑定
pg list <cls>          # 确认主库位置
```


----------------

## 启动顺序与依赖

PGSQL 模块组件的推荐启动顺序：

```
1. patroni          # 首先启动 Patroni（会自动启动 PostgreSQL）
2. pgbouncer        # 然后启动连接池
3. haproxy          # 启动负载均衡器
4. pg_exporter      # 启动监控导出器
5. pgbouncer_exporter
6. vip-manager      # 最后启动 VIP 管理器（如果启用）
```

停止顺序应相反。Pigsty 剧本会自动处理这些依赖关系。

**批量启动所有服务**

```bash
systemctl start patroni pgbouncer haproxy pg_exporter pgbouncer_exporter
```

**批量停止所有服务**

```bash
systemctl stop pgbouncer_exporter pg_exporter haproxy pgbouncer patroni
```


----------------

## 常见故障排查

**服务启动失败**

```bash
systemctl status <service>        # 查看服务状态
journalctl -u <service> -n 50     # 查看最近日志
journalctl -u <service> --since "5 min ago"  # 查看最近 5 分钟日志
```

**Patroni 无法启动**

| 现象        | 可能原因             | 解决方案                                  |
|:----------|:-----------------|:--------------------------------------|
| 无法连接 etcd | etcd 集群不可用       | 检查 etcd 服务状态                          |
| 数据目录权限错误  | 文件所有权不是 postgres | `chown -R postgres:postgres /pg/data` |
| 端口被占用     | PostgreSQL 残留进程  | `pg_ctl stop -D /pg/data` 或 `kill`    |

**Pgbouncer 无法启动**

| 现象              | 可能原因        | 解决方案                                    |
|:----------------|:------------|:----------------------------------------|
| 配置文件语法错误        | INI 格式错误    | 检查 `/etc/pgbouncer/pgbouncer.ini`       |
| 端口被占用           | 6432 端口已被使用 | `lsof -i :6432`                         |
| userlist.txt 权限 | 文件权限不正确     | `chmod 600 /etc/pgbouncer/userlist.txt` |

**HAProxy 无法启动**

| 现象       | 可能原因             | 解决方案                                     |
|:---------|:-----------------|:-----------------------------------------|
| 配置文件语法错误 | haproxy.cfg 格式错误 | `haproxy -c -f /etc/haproxy/haproxy.cfg` |
| 端口被占用    | 服务端口冲突           | `lsof -i :5433`                          |


----------------

## 相关文档

- [**Patroni 管理**](/docs/pgsql/admin/patroni/)：使用 patronictl 管理 PostgreSQL 高可用
- [**集群管理**](/docs/pgsql/admin/cluster/)：集群的创建、扩缩容、销毁
- [**服务配置**](/docs/pgsql/service/)：HAProxy 服务定义与配置
- [**监控系统**](/docs/pgsql/monitor/)：PostgreSQL 监控与告警
