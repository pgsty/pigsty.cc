---
title: "Patroni REST API"
weight: 40
icon: fa-solid fa-book
description: "Patroni REST API 端点与操作行为参考。"
module: [PATRONI]
categories: [参考]
---

> 原始页面： https://patroni.readthedocs.io/en/latest/rest_api.html

<a id="rest_api"></a>
Patroni 提供了丰富的 REST API，供 Patroni 自身在主库竞选期间调用，也供 [patronictl](/docs/patroni/patronictl#patronictl) 工具执行故障转移、主从切换、重新初始化、重启和重载等操作，还可供 HAProxy 或其他负载均衡器执行 HTTP 健康检查，以及用于监控目的。以下是 Patroni REST API 端点的完整列表。

--------

## 健康检查端点

对于所有健康检查 **`GET`** 请求，Patroni 返回描述节点状态的 JSON 文档，并附带相应的 HTTP 状态码。若不需要 JSON 响应体，可使用 **`HEAD`** 或 **`OPTIONS`** 方法代替 **`GET`**。

- 以下请求仅在 Patroni 节点作为持有领导者锁的主库运行时返回 HTTP 状态码 **`200`**：

  - **`GET /`**
  - **`GET /primary`**
  - **`GET /read-write`**

- **`GET /standby-leader`**：仅当 Patroni 节点作为 [备用集群](/docs/patroni/standby_cluster#standby_cluster) 中的领导者运行时，返回 HTTP 状态码 **`200`**。

- **`GET /leader`**：当 Patroni 节点持有领导者锁时返回 HTTP 状态码 **`200`**。与前两个端点的主要区别在于，它不区分 PostgreSQL 以 **`primary`** 还是 **`standby_leader`** 身份运行。

- **`GET /replica`**：从库健康检查端点，仅当 Patroni 节点状态为 **`running`**、角色为 **`replica`** 且未设置 **`noloadbalance`** 标签时返回 HTTP 状态码 **`200`**。

- **`GET /replica?replication_state=<required state>`**：从库检查端点，在 **`replica`** 检查的基础上，还会验证复制状态是否与指定状态匹配。主要用于 **`replication_state=streaming`**，以排除仍在通过归档恢复追赶进度的从库。

- **`GET /replica?lag=<max-lag>`**：从库检查端点，在 **`replica`** 检查的基础上还会检查复制延迟，仅当延迟低于指定值时才返回 **`200`**。出于性能考虑，延迟计算使用 DCS 中的 **`cluster.last_leader_operation`** 键作为领导者 WAL 位置。**`max-lag`** 可用字节数（整数）或可读格式指定，例如 16kB、64MB、1GB。

  - **`GET /replica?lag=1048576`**
  - **`GET /replica?lag=1024kB`**
  - **`GET /replica?lag=10MB`**
  - **`GET /replica?lag=1GB`**

- **`GET /replica?tag_key1=value1&tag_key2=value2`**：从库检查端点，还会检查 YAML 配置 **`tags`** 节中用户自定义的 **`key1`** 和 **`key2`** 标签及其对应值。若实例未定义该标签，或 YAML 配置中的值与查询值不匹配，则返回 HTTP 503。

  以下请求检查的是 leader 或 standby-leader 状态，Patroni 不会应用任何用户自定义标签，这些标签将被忽略：

  - **`GET /?tag_key1=value1&tag_key2=value2`**
  - **`GET /leader?tag_key1=value1&tag_key2=value2`**
  - **`GET /primary?tag_key1=value1&tag_key2=value2`**
  - **`GET /read-write?tag_key1=value1&tag_key2=value2`**
  - **`GET /standby_leader?tag_key1=value1&tag_key2=value2`**
  - **`GET /standby-leader?tag_key1=value1&tag_key2=value2`**

- **`GET /read-only`**：与上述端点类似，但同时包含主库。

- **`GET /synchronous`** 或 **`GET /sync`**：仅当 Patroni 节点作为同步备库运行时返回 HTTP 状态码 **`200`**。

- **`GET /read-only-sync`**：与上述端点类似，但同时包含主库。

- **`GET /quorum`**：仅当此 Patroni 节点被列入主库 **`synchronous_standby_names`** 中的法定人数节点时返回 HTTP 状态码 **`200`**。

- **`GET /read-only-quorum`**：与上述端点类似，但同时包含主库。

- **`GET /asynchronous`** 或 **`GET /async`**：仅当 Patroni 节点作为异步备库运行时返回 HTTP 状态码 **`200`**。

- **`GET /asynchronous?lag=<max-lag>`** 或 **`GET /async?lag=<max-lag>`**：异步备库检查端点，在 **`asynchronous`** 或 **`async`** 检查的基础上还会检查复制延迟，仅当延迟低于指定值时才返回 **`200`**。出于性能考虑，延迟计算使用 DCS 中的 **`cluster.last_leader_operation`** 键。**`max-lag`** 可用字节数（整数）或可读格式指定，例如 16kB、64MB、1GB。

  - **`GET /async?lag=1048576`**
  - **`GET /async?lag=1024kB`**
  - **`GET /async?lag=10MB`**
  - **`GET /async?lag=1GB`**

- **`GET /health`**：仅当 PostgreSQL 正常运行时，返回 HTTP 状态码 **`200`**。

- **`GET /liveness`**：若 Patroni 心跳循环正常运行，返回 HTTP 状态码 **`200`**；若主库上次心跳距今超过 **`ttl`** 秒，或从库超过 **`2*ttl`** 秒，则返回 **`503`**。可用于 Kubernetes **`livenessProbe`**。

- **`GET /readiness?lag=<max-lag>&mode=apply|write`**：当 Patroni 节点作为领导者运行时，或当 PostgreSQL 正常运行、正在复制且与领导者差距在允许范围内时，返回 HTTP 状态码 **`200`**。**`lag`** 参数设置备库允许落后的最大距离，默认为 **`maximum_lag_on_failover`**，可用字节数或可读格式指定，例如 16kB、64MB、1GB。**`mode`** 设置 WAL 是否需要已回放（apply）还是仅接收即可（write），默认为 apply。

  作为 Kubernetes **`readinessProbe`** 使用时，可确保新启动的 Pod 只有在追上领导者后才变为就绪状态。结合 PodDisruptionBudget，可防止滚动重启期间领导者过早被终止，并确保复制落后的从库不会承接只读流量。在无法使用 Kubernetes endpoints 进行领导者选举的环境（如 OpenShift）中，也可将此端点用于 **`readinessProbe`**。

**`liveness`** 端点非常轻量，不执行任何 SQL。探针应配置为在领导者键即将过期时开始报错。以 **`ttl`** 默认值 **`30s`** 为例，探针配置如下：

```yaml
readinessProbe:
  httpGet:
    scheme: HTTP
    path: /readiness
    port: 8008
  initialDelaySeconds: 3
  periodSeconds: 10
  timeoutSeconds: 5
  successThreshold: 1
  failureThreshold: 3
livenessProbe:
  httpGet:
    scheme: HTTP
    path: /liveness
    port: 8008
  initialDelaySeconds: 3
  periodSeconds: 10
  timeoutSeconds: 5
  successThreshold: 1
  failureThreshold: 3
```

--------

## 监控端点

**`GET /patroni`** 由 Patroni 在主库竞选期间内部调用，也可供监控系统使用。此端点返回的 JSON 文档与健康检查端点结构相同。

**示例：** 健康运行中的集群

``` bash
$ curl -s http://localhost:8008/patroni | jq .
{
  "state": "running",
  "postmaster_start_time": "2024-08-28 19:39:26.352526+00:00",
  "role": "primary",
  "server_version": 160004,
  "xlog": {
    "location": 67395656
  },
  "timeline": 1,
  "replication": [
    {
      "usename": "replicator",
      "application_name": "patroni2",
      "client_addr": "10.89.0.6",
      "state": "streaming",
      "sync_state": "async",
      "sync_priority": 0
    },
    {
      "usename": "replicator",
      "application_name": "patroni3",
      "client_addr": "10.89.0.2",
      "state": "streaming",
      "sync_state": "async",
      "sync_priority": 0
    }
  ],
  "dcs_last_seen": 1692356718,
  "tags": {
    "clonefrom": true
  },
  "database_system_identifier": "7268616322854375442",
  "patroni": {
    "version": "4.0.0",
    "scope": "demo",
    "name": "patroni1"
  }
}
```

**示例：** 无主锁的集群

``` bash
$ curl -s http://localhost:8008/patroni  | jq .
{
  "state": "running",
  "postmaster_start_time": "2024-08-28 19:39:26.352526+00:00",
  "role": "replica",
  "server_version": 160004,
  "xlog": {
    "received_location": 67419744,
    "replayed_location": 67419744,
    "replayed_timestamp": null,
    "paused": false
  },
  "timeline": 1,
  "replication": [
    {
      "usename": "replicator",
      "application_name": "patroni2",
      "client_addr": "10.89.0.6",
      "state": "streaming",
      "sync_state": "async",
      "sync_priority": 0
    },
    {
      "usename": "replicator",
      "application_name": "patroni3",
      "client_addr": "10.89.0.2",
      "state": "streaming",
      "sync_state": "async",
      "sync_priority": 0
    }
  ],
  "cluster_unlocked": true,
  "dcs_last_seen": 1692356928,
  "tags": {
    "clonefrom": true
  },
  "database_system_identifier": "7268616322854375442",
  "patroni": {
    "version": "4.0.0",
    "scope": "demo",
    "name": "patroni1"
  }
}
```

**示例：** 启用了 [DCS 故障安全模式](/docs/patroni/dcs_failsafe_mode#dcs_failsafe_mode) 的无主锁集群

``` bash
$ curl -s http://localhost:8008/patroni  | jq .
{
  "state": "running",
  "postmaster_start_time": "2024-08-28 19:39:26.352526+00:00",
  "role": "replica",
  "server_version": 160004,
  "xlog": {
    "location": 67420024
  },
  "timeline": 1,
  "replication": [
    {
      "usename": "replicator",
      "application_name": "patroni2",
      "client_addr": "10.89.0.6",
      "state": "streaming",
      "sync_state": "async",
      "sync_priority": 0
    },
    {
      "usename": "replicator",
      "application_name": "patroni3",
      "client_addr": "10.89.0.2",
      "state": "streaming",
      "sync_state": "async",
      "sync_priority": 0
    }
  ],
  "cluster_unlocked": true,
  "failsafe_mode_is_active": true,
  "dcs_last_seen": 1692356928,
  "tags": {
    "clonefrom": true
  },
  "database_system_identifier": "7268616322854375442",
  "patroni": {
    "version": "4.0.0",
    "scope": "demo",
    "name": "patroni1"
  }
}
```

**示例：** 启用了 [暂停模式](/docs/patroni/pause#pause) 的集群

``` bash
$ curl -s http://localhost:8008/patroni  | jq .
{
  "state": "running",
  "postmaster_start_time": "2024-08-28 19:39:26.352526+00:00",
  "role": "replica",
  "server_version": 160004,
  "xlog": {
    "location": 67420024
  },
  "timeline": 1,
  "replication": [
    {
      "usename": "replicator",
      "application_name": "patroni2",
      "client_addr": "10.89.0.6",
      "state": "streaming",
      "sync_state": "async",
      "sync_priority": 0
    },
    {
      "usename": "replicator",
      "application_name": "patroni3",
      "client_addr": "10.89.0.2",
      "state": "streaming",
      "sync_state": "async",
      "sync_priority": 0
    }
  ],
  "pause": true,
  "dcs_last_seen": 1724874295,
  "tags": {
    "clonefrom": true
  },
  "database_system_identifier": "7268616322854375442",
  "patroni": {
    "version": "4.0.0",
    "scope": "demo",
    "name": "patroni1"
  }
}
```

**`GET /metrics`** 端点以 Prometheus 格式返回 Patroni 监控指标：

``` bash
$ curl http://localhost:8008/metrics

# HELP patroni_version Patroni semver without periods. \
# TYPE patroni_version gauge
patroni_version{scope="batman",name="patroni1"} 040000
# HELP patroni_postgres_running Value is 1 if Postgres is running, 0 otherwise.
# TYPE patroni_postgres_running gauge
patroni_postgres_running{scope="batman",name="patroni1"} 1
# HELP patroni_postmaster_start_time Epoch seconds since Postgres started.
# TYPE patroni_postmaster_start_time gauge
patroni_postmaster_start_time{scope="batman",name="patroni1"} 1724873966.352526
# HELP patroni_primary Value is 1 if this node is the leader, 0 otherwise.
# TYPE patroni_primary gauge
patroni_primary{scope="batman",name="patroni1"} 1
# HELP patroni_xlog_location Current location of the Postgres transaction log, 0 if this node is not the leader.
# TYPE patroni_xlog_location counter
patroni_xlog_location{scope="batman",name="patroni1"} 22320573386952
# HELP patroni_standby_leader Value is 1 if this node is the standby_leader, 0 otherwise.
# TYPE patroni_standby_leader gauge
patroni_standby_leader{scope="batman",name="patroni1"} 0
# HELP patroni_replica Value is 1 if this node is a replica, 0 otherwise.
# TYPE patroni_replica gauge
patroni_replica{scope="batman",name="patroni1"} 0
# HELP patroni_sync_standby Value is 1 if this node is a sync standby replica, 0 otherwise.
# TYPE patroni_sync_standby gauge
patroni_sync_standby{scope="batman",name="patroni1"} 0
# HELP patroni_quorum_standby Value is 1 if this node is a quorum standby replica, 0 otherwise.
# TYPE patroni_quorum_standby gauge
patroni_quorum_standby{scope="batman",name="patroni1"} 0
# HELP patroni_xlog_received_location Current location of the received Postgres transaction log, 0 if this node is not a replica.
# TYPE patroni_xlog_received_location counter
patroni_xlog_received_location{scope="batman",name="patroni1"} 0
# HELP patroni_xlog_replayed_location Current location of the replayed Postgres transaction log, 0 if this node is not a replica.
# TYPE patroni_xlog_replayed_location counter
patroni_xlog_replayed_location{scope="batman",name="patroni1"} 0
# HELP patroni_xlog_replayed_timestamp Current timestamp of the replayed Postgres transaction log, 0 if null.
# TYPE patroni_xlog_replayed_timestamp gauge
patroni_xlog_replayed_timestamp{scope="batman",name="patroni1"} 0
# HELP patroni_xlog_paused Value is 1 if the Postgres xlog is paused, 0 otherwise.
# TYPE patroni_xlog_paused gauge
patroni_xlog_paused{scope="batman",name="patroni1"} 0
# HELP patroni_postgres_streaming Value is 1 if Postgres is streaming, 0 otherwise.
# TYPE patroni_postgres_streaming gauge
patroni_postgres_streaming{scope="batman",name="patroni1"} 1
# HELP patroni_postgres_in_archive_recovery Value is 1 if Postgres is replicating from archive, 0 otherwise.
# TYPE patroni_postgres_in_archive_recovery gauge
patroni_postgres_in_archive_recovery{scope="batman",name="patroni1"} 0
# HELP patroni_postgres_server_version Version of Postgres (if running), 0 otherwise.
# TYPE patroni_postgres_server_version gauge
patroni_postgres_server_version{scope="batman",name="patroni1"} 160004
# HELP patroni_cluster_unlocked Value is 1 if the cluster is unlocked, 0 if locked.
# TYPE patroni_cluster_unlocked gauge
patroni_cluster_unlocked{scope="batman",name="patroni1"} 0
# HELP patroni_postgres_timeline Postgres timeline of this node (if running), 0 otherwise.
# TYPE patroni_postgres_timeline counter
patroni_failsafe_mode_is_active{scope="batman",name="patroni1"} 0
# HELP patroni_postgres_timeline Postgres timeline of this node (if running), 0 otherwise.
# TYPE patroni_postgres_timeline counter
patroni_postgres_timeline{scope="batman",name="patroni1"} 24
# HELP patroni_dcs_last_seen Epoch timestamp when DCS was last contacted successfully by Patroni.
# TYPE patroni_dcs_last_seen gauge
patroni_dcs_last_seen{scope="batman",name="patroni1"} 1724874235
# HELP patroni_pending_restart Value is 1 if the node needs a restart, 0 otherwise.
# TYPE patroni_pending_restart gauge
patroni_pending_restart{scope="batman",name="patroni1"} 1
# HELP patroni_is_paused Value is 1 if auto failover is disabled, 0 otherwise.
# TYPE patroni_is_paused gauge
patroni_is_paused{scope="batman",name="patroni1"} 1
# HELP patroni_postgres_state Numeric representation of Postgres state.
# Values: 0=initdb, 1=initdb_failed, 2=custom_bootstrap, 3=custom_bootstrap_failed, 4=creating_replica, 5=running, 6=starting, 7=bootstrap_starting, 8=start_failed, 9=restarting, 10=restart_failed, 11=stopping, 12=stopped, 13=stop_failed, 14=crashed
# TYPE patroni_postgres_state gauge
patroni_postgres_state{scope="batman",name="patroni1"} 5
```

### PostgreSQL 状态值

**`patroni_postgres_state`** 指标以数值形式表示当前 PostgreSQL 实例的状态，对于需要跟踪状态随时间变化的监控和告警系统很有用。数值由 **`PostgresqlState.get_metrics_description()`** 静态方法生成。

| 值  | 状态名称                 | 描述                     |
|-----|--------------------------|--------------------------|
| 0   | initdb                   | 正在初始化新集群         |
| 1   | initdb_failed            | 新集群初始化失败         |
| 2   | custom_bootstrap         | 正在运行自定义引导脚本   |
| 3   | custom_bootstrap_failed  | 自定义引导脚本失败       |
| 4   | creating_replica         | 正在从主库创建从库       |
| 5   | running                  | PostgreSQL 正常运行      |
| 6   | starting                 | PostgreSQL 正在启动      |
| 7   | bootstrap_starting       | 自定义引导后正在启动     |
| 8   | start_failed             | PostgreSQL 启动失败      |
| 9   | restarting               | PostgreSQL 正在重启      |
| 10  | restart_failed           | PostgreSQL 重启失败      |
| 11  | stopping                 | PostgreSQL 正在停止      |
| 12  | stopped                  | PostgreSQL 已停止        |
| 13  | stop_failed              | PostgreSQL 停止失败      |
| 14  | crashed                  | PostgreSQL 已崩溃        |

> [!NOTE]
> 上述数值固定不变，以保持与现有监控系统的向后兼容性。未来如需新增状态，将分配新的数值，已有数值不会改变。

--------

## 集群状态端点

- **`GET /cluster`**：返回描述当前集群拓扑和状态的 JSON 文档：

``` bash
$ curl -s http://localhost:8008/cluster | jq .
{
  "members": [
    {
      "name": "patroni1",
      "role": "leader",
      "state": "running",
      "api_url": "http://10.89.0.4:8008/patroni",
      "host": "10.89.0.4",
      "port": 5432,
      "timeline": 5,
      "tags": {
        "clonefrom": true
      }
    },
    {
      "name": "patroni2",
      "role": "replica",
      "state": "streaming",
      "api_url": "http://10.89.0.6:8008/patroni",
      "host": "10.89.0.6",
      "port": 5433,
      "timeline": 5,
      "tags": {
        "clonefrom": true
      },
      "receive_lag": 0,
      "receive_lsn": "0/4000060",
      "replay_lag": 0,
      "replay_lsn": "0/4000060",
      "lag": 0,
      "lsn": "0/4000060"
    }
  ],
  "scope": "demo",
  "scheduled_switchover": {
    "at": "2023-09-24T10:36:00+02:00",
    "from": "patroni1",
    "to": "patroni3"
  }
}
```

- **`GET /history`**：返回集群主从切换/故障转移历史记录，格式与 **`pg_wal`** 目录中历史文件的内容非常相似，唯一区别是增加了一个时间戳字段，标记新时间线的创建时间。

``` bash
$ curl -s http://localhost:8008/history | jq .
[
  [
    1,
    25623960,
    "no recovery target specified",
    "2019-09-23T16:57:57+02:00"
  ],
  [
    2,
    25624344,
    "no recovery target specified",
    "2019-09-24T09:22:33+02:00"
  ],
  [
    3,
    25624752,
    "no recovery target specified",
    "2019-09-24T09:26:15+02:00"
  ],
  [
    4,
    50331856,
    "no recovery target specified",
    "2019-09-24T09:35:52+02:00"
  ]
]
```

<a id="config_endpoint"></a>

--------

## 配置端点

**`GET /config`**：获取当前动态配置：

``` bash
$ curl -s http://localhost:8008/config | jq .
{
  "ttl": 30,
  "loop_wait": 10,
  "retry_timeout": 10,
  "maximum_lag_on_failover": 1048576,
  "postgresql": {
    "use_slots": true,
    "use_pg_rewind": true,
    "parameters": {
      "hot_standby": "on",
      "wal_level": "hot_standby",
      "max_wal_senders": 5,
      "max_replication_slots": 5,
      "max_connections": "100"
    }
  }
}
```

**`PATCH /config`**：修改现有配置。

``` bash
$ curl -s -XPATCH -d \
    '{"loop_wait":5,"ttl":20,"postgresql":{"parameters":{"max_connections":"101"}}}' \
    http://localhost:8008/config | jq .
{
  "ttl": 20,
  "loop_wait": 5,
  "maximum_lag_on_failover": 1048576,
  "retry_timeout": 10,
  "postgresql": {
    "use_slots": true,
    "use_pg_rewind": true,
    "parameters": {
      "hot_standby": "on",
      "wal_level": "hot_standby",
      "max_wal_senders": 5,
      "max_replication_slots": 5,
      "max_connections": "101"
    }
  }
}
```

上述调用对现有配置进行部分更新（patch），并返回更新后的配置。

验证节点是否已处理该配置：日志应每 5 秒打印一次（loop_wait=5）。由于 **`max_connections`** 的变更需要重启，响应中应出现 **`pending_restart`** 标志：

``` bash
$ curl -s http://localhost:8008/patroni | jq .
{
  "database_system_identifier": "6287881213849985952",
  "postmaster_start_time": "2024-08-28 19:39:26.352526+00:00",
  "xlog": {
    "location": 2197818976
  },
  "timeline": 1,
  "dcs_last_seen": 1724874545,
  "database_system_identifier": "7408277255830290455",
  "pending_restart": true,
  "pending_restart_reason": {
    "max_connections": {
      "old_value": "100",
      "new_value": "101"
    }
  },
  "patroni": {
    "version": "4.0.0",
    "scope": "batman",
    "name": "patroni1"
  },
  "state": "running",
  "role": "primary",
  "server_version": 160004
}
```

**删除参数：**

若要删除（重置）某个配置项，将其 patch 为 **`null`** 即可：

``` bash
$ curl -s -XPATCH -d \
    '{"postgresql":{"parameters":{"max_connections":null}}}' \
    http://localhost:8008/config | jq .
{
  "ttl": 20,
  "loop_wait": 5,
  "retry_timeout": 10,
  "maximum_lag_on_failover": 1048576,
  "postgresql": {
    "use_slots": true,
    "use_pg_rewind": true,
    "parameters": {
      "hot_standby": "on",
      "unix_socket_directories": ".",
      "wal_level": "hot_standby",
      "max_wal_senders": 5,
      "max_replication_slots": 5
    }
  }
}
```

上述调用从动态配置中删除了 **`postgresql.parameters.max_connections`**。

**`PUT /config`**：对现有动态配置进行无条件的完整覆写：

``` bash
$ curl -s -XPUT -d \
    '{"maximum_lag_on_failover":1048576,"retry_timeout":10,"postgresql":{"use_slots":true,"use_pg_rewind":true,"parameters":{"hot_standby":"on","wal_level":"hot_standby","unix_socket_directories":".","max_wal_senders":5}},"loop_wait":3,"ttl":20}' \
    http://localhost:8008/config | jq .
{
  "ttl": 20,
  "maximum_lag_on_failover": 1048576,
  "retry_timeout": 10,
  "postgresql": {
    "use_slots": true,
    "parameters": {
      "hot_standby": "on",
      "unix_socket_directories": ".",
      "wal_level": "hot_standby",
      "max_wal_senders": 5
    },
    "use_pg_rewind": true
  },
  "loop_wait": 3
}
```

--------

## 主从切换与故障转移端点

<a id="switchover_api"></a>
### 主从切换（Switchover）

**`/switchover`** 端点仅在集群健康（存在领导者）时有效，也支持在指定时间调度主从切换。

调用 **`/switchover`** 端点时，候选节点可以指定，也可以不指定——这与 **`/failover`** 端点不同。若未指定候选节点，领导者降级后集群中所有符合条件的节点将参与主库竞选。

**`POST`** 请求的 JSON 请求体中必须包含 **`leader`** 字段，**`candidate`** 和 **`scheduled_at`** 字段为可选，可用于指定切换目标和调度时间。

根据执行情况，请求可能返回不同的 HTTP 状态码。主从切换或故障转移成功完成时返回 **`200`**；切换成功调度时返回 **`202`**；若出现错误，返回 **`400`**、**`412`** 或 **`503`** 之一，并在响应体中提供详情。

**`DELETE /switchover`** 可用于删除当前已调度的主从切换计划。

**示例：** 切换到任意健康备库

``` bash
$ curl -s http://localhost:8008/switchover -XPOST -d '{"leader":"postgresql1"}'
Successfully switched over to "postgresql2"
```

**示例：** 切换到指定节点

``` bash
$ curl -s http://localhost:8008/switchover -XPOST -d \
    '{"leader":"postgresql1","candidate":"postgresql2"}'
Successfully switched over to "postgresql2"
```

**示例：** 在指定时间将领导者切换到集群中任意健康备库。

``` bash
$ curl -s http://localhost:8008/switchover -XPOST -d \
    '{"leader":"postgresql0","scheduled_at":"2019-09-24T12:00+00"}'
Switchover scheduled
```

### 故障转移（Failover）

**`/failover`** 端点可在没有健康节点时执行手动故障转移（例如，当所有同步备库均无法提升时，可将一个异步备库提升为主库）。集群不一定要处于无主状态——故障转移也可以在健康集群上执行。

**`POST`** 请求的 JSON 请求体中必须指定 **`candidate`** 字段。若同时指定了 **`leader`** 字段，则触发主从切换而非故障转移。

**示例：**

``` bash
$ curl -s http://localhost:8008/failover -XPOST -d '{"candidate":"postgresql1"}'
Successfully failed over to "postgresql1"
```

> [!WARNING]
> 使用此端点时请 [格外谨慎](/docs/patroni/rest_api#failover_healthcheck)，在某些情况下可能造成数据丢失。大多数情况下，使用 [主从切换端点](/docs/patroni/rest_api#switchover_api) 即可满足需求。

**`POST /switchover`** 和 **`POST /failover`** 端点分别由 [patronictl_switchover](/docs/patroni/patronictl#patronictl_switchover) 和 [patronictl_failover](/docs/patroni/patronictl#patronictl_failover) 使用。

**`DELETE /switchover`** 由 [patronictl flush cluster-name switchover](/docs/patroni/patronictl#patronictl_flush_parameters) 使用。

|                          | 故障转移 | 主从切换                       |
|--------------------------|----------|--------------------------------|
| 需要指定 leader          | 否       | 是                             |
| 需要指定 candidate       | 是       | 否                             |
| 可在暂停模式下执行       | 是       | 是（仅限指定候选节点的情况）   |
| 可调度执行               | 否       | 是（非暂停模式下）             |

<a id="failover_healthcheck"></a>
### 健康备库

集群成员需满足以下所有条件，才能在主从切换期间参与主库竞选，或被选为故障转移/主从切换的候选节点：

- 可通过 Patroni API 访问；
- 未将 **`nofailover`** 标签设为 **`true`**；
- watchdog 功能完整可用（若配置要求）；
- 在健康集群的主从切换或自动故障转移场景中，复制延迟不超过 **`maximum_lag_on_failover`** [配置参数](/docs/patroni/config/dynamic#dynamic) 所设的上限；
- 在健康集群的主从切换或自动故障转移场景中，若 **`check_timeline`** [配置参数](/docs/patroni/config/dynamic#dynamic) 设为 **`true`**，时间线编号不得小于集群当前时间线；
- 在 [同步模式](/docs/patroni/replication_modes#synchronous_mode) 下：
  - 主从切换场景（无论是否指定候选节点）：必须列于 **`/sync`** 键的成员中；
  - 故障转移场景（无论集群是否健康）：跳过此检查。

> [!WARNING]
> 在无领导者的集群中执行手动故障转移时，候选节点即便存在以下情况也将被允许提升：同步模式下该节点不在 **`/sync`** 键成员中；复制延迟超过允许的最大值；时间线编号小于已知的最后集群时间线。

<a id="restart_endpoint"></a>

--------

## 重启端点

- **`POST /restart`**：重启指定节点上的 PostgreSQL。**`POST`** 请求体中可选择指定以下重启条件：
  - **`restart_pending`**：布尔值，若设为 **`true`**，仅在有待应用的 PostgreSQL 配置变更时才执行重启。
  - **`role`**：仅当节点当前角色与请求中指定的角色匹配时才执行重启。
  - **`postgres_version`**：仅当当前 PostgreSQL 版本低于请求中指定的版本时才执行重启。
  - **`timeout`**：等待 PostgreSQL 开始接受连接的时长，覆盖 **`primary_start_timeout`**。
  - **`schedule`**：带时区的时间戳，用于在未来某个时间调度重启。
- **`DELETE /restart`**：取消已调度的重启计划。

**`POST /restart`** 和 **`DELETE /restart`** 端点分别由 [patronictl_restart](/docs/patroni/patronictl#patronictl_restart) 和 [`patronictl flush cluster-name restart`](/docs/patroni/patronictl#patronictl_flush_parameters) 使用。

<a id="reload_endpoint"></a>

--------

## 重载端点

**`POST /reload`** 指示 Patroni 重新读取并应用配置文件，等同于向 Patroni 进程发送 **`SIGHUP`** 信号。若修改了需要重启才能生效的 PostgreSQL 参数（如 **`shared_buffers`**），仍需通过 **`POST /restart`** 端点或 [patronictl_restart](/docs/patroni/patronictl#patronictl_restart) 显式重启 PostgreSQL。

重载端点由 [patronictl_reload](/docs/patroni/patronictl#patronictl_reload) 使用。

--------

## 重新初始化端点

**`POST /reinitialize`**：重新初始化指定节点上的 PostgreSQL 数据目录，仅允许在从库上执行。调用后，将删除数据目录并启动 **`pg_basebackup`** 或其他 [从库创建方法](/docs/patroni/replica_bootstrap#custom_replica_creation)。

若 Patroni 正处于循环尝试恢复失败 PostgreSQL 的过程中，此调用可能失败。解决方法是在请求体中指定 **`{"force":true}`**。

也可在请求体中指定 **`{"from-leader":true}`**，直接从领导者节点获取基础备份，在所有从库均已失败的情况下执行重新初始化时尤为有用。

重新初始化端点由 [patronictl_reinit](/docs/patroni/patronictl#patronictl_reinit) 使用。
