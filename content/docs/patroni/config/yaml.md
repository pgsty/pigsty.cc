---
title: "YAML 配置参数"
linkTitle: "YAML 配置文件"
weight: 20
icon: fa-solid fa-file-code
description: "Patroni YAML 配置选项与各配置节的完整参考。"
module: [PATRONI]
categories: [参考]
---

> 原始页面： https://patroni.readthedocs.io/en/latest/yaml_configuration.html

<a id="yaml"></a>

--------

## 全局/通用

- **`name`**：主机名称，在集群中必须唯一。
- **`namespace`**：Patroni 在配置存储中保存集群信息的路径，默认值为 **`/service`**。
- **`scope`**：集群名称。

<a id="log_settings"></a>

--------

## 日志

- **`type`**：设置日志格式，可选 **`plain`** 或 **`json`**。使用 **`json`** 格式时，必须安装 [`jsonlogger`](/docs/patroni/installation#extras)。默认值为 **`plain`**。
- **`level`**：设置通用日志级别，默认值为 **`INFO`**（参见 [Python logging 文档](https://docs.python.org/3.6/library/logging.html#levels)）。
- **`traceback_level`**：设置显示调用栈跟踪的日志级别，默认值为 **`ERROR`**。若希望仅在 **`log.level=DEBUG`** 时才输出调用栈，可将其设为 **`DEBUG`**。
- **`format`**：设置日志格式化字符串。若日志类型为 **`plain`**，格式应为字符串，可用属性参见 [LogRecord 属性](https://docs.python.org/3.6/library/logging.html#logrecord-attributes)。若日志类型为 **`json`**，格式可以是字符串，也可以是列表——列表中每项对应一个 LogRecord 属性名，只需填写字段名，无需加 **`%(`** 和 **`)`**。若希望以不同键名输出某个日志字段，可使用字典：键为日志字段名，值为期望在日志中显示的名称。默认值为 **%(asctime)s %(levelname)s: %(message)s**。
- **`dateformat`**：设置日期时间格式化字符串（参见 [formatTime() 文档](https://docs.python.org/3.6/library/logging.html#logging.Formatter.formatTime)）。
- **`static_fields`**：向日志中添加额外字段，仅在日志类型设为 **`json`** 时可用。
- **`max_queue_size`**：Patroni 采用两阶段日志记录——日志记录先写入内存队列，由独立线程从队列取出后写入 stderr 或文件。内部队列默认最多保存 **`1000`** 条记录，足以覆盖过去约 1 小时 20 分钟的日志。
- **`dir`**：应用日志的写入目录，该目录必须存在且对运行 Patroni 的用户可写。设置此值后，默认保留 4 个 25MB 的日志文件，可通过 **`file_num`** 和 **`file_size`**（见下文）调整保留策略。
- **`mode`**：日志文件的权限（例如 **`0644`**）。若未指定，权限将根据当前 umask 值设置。
- **`file_num`**：保留的应用日志文件数量。
- **`file_size`**：触发日志滚动的 patroni.log 文件大小（单位：字节）。
- **`loggers`**：本节允许按 Python 模块重新定义日志级别：
  - **patroni.postmaster: WARNING**
  - **urllib3: DEBUG**
- **`deduplicate_heartbeat_logs`**：若设为 **`true`**，连续相同的心跳日志将不再重复输出，默认值为 **`false`**。

> [!WARNING]
> HA 循环的执行时间是诊断因资源耗尽等问题导致故障转移的重要信息。当 **`deduplicate_heartbeat_logs`** 设为 **`true`** 时，HA 循环的执行日志将不再生成（除非主库发生变更），因此这部分潜在有用的信息将无法从日志中获取。

以下是将 Patroni 配置为 JSON 格式日志的配置示例：

```yaml
log:
   type: json
   format:
      - message
      - module
      - asctime: '@timestamp'
      - levelname: level
   static_fields:
      app: patroni
```

<a id="bootstrap_settings"></a>

--------

## 引导配置

> [!NOTE]
> 一旦 Patroni 完成集群的首次初始化并将配置写入 DCS，此后对 YAML 配置文件中 **`bootstrap.dcs`** 节所做的任何修改将不再生效！如需更改，请使用 [`patronictl edit-config`](/docs/patroni/patronictl#patronictl_edit_config) 或 Patroni [**REST API**](/docs/patroni/rest_api#rest_api)。

- **`bootstrap`**：
  - **`dcs`**：本节内容将在新集群初始化完成后写入配置存储的 <span class="title-ref">/\<namespace\>/\<scope\>/config</span>，作为集群的全局动态配置。可将 [**动态配置参数**](/docs/patroni/config/dynamic#dynamic) 中描述的任意参数放在 **`bootstrap.dcs`** 下，Patroni 完成集群引导后会将本节写入该路径。

  - **`method`**：用于引导本集群的自定义脚本。

    详见 [**自定义引导方法文档**](/docs/patroni/replica_bootstrap#custom_bootstrap)。指定 **`initdb`** 时将回退到默认的 **`initdb`** 命令；配置文件中不存在 **`method`** 参数时同样触发 **`initdb`**。

  - **`initdb`**：（可选）传递给 initdb 的选项列表。

    - **`- data-checksums`**：在 PostgreSQL 9.3 上使用 pg_rewind 时必须启用。
    - **`- encoding: UTF8`**：新数据库的默认编码。
    - **`- locale: UTF8`**：新数据库的默认区域设置。

  - **`post_bootstrap`** 或 **`post_init`**：集群初始化完成后执行的附加脚本。脚本接收一个以集群超级用户为用户名的连接字符串 URL，pgpass 文件路径通过 PGPASSFILE 环境变量传入。

<a id="citus_settings"></a>

--------

## Citus

启用 Patroni 与 [Citus](https://docs.citusdata.com) 的集成。配置后，Patroni 将负责在协调节点上注册 Citus 工作节点。关于 Citus 支持的更多信息，参见 [**此处**](/docs/patroni/citus#citus)。

- **`group`**：Citus 组 ID，整数类型。协调节点使用 **`0`**，工作节点使用 **`1`**、**`2`** 等。
- **`database`**：应创建 [`citus`](/docs/patroni/citus#citus) 扩展的数据库，协调节点和所有工作节点必须相同，目前仅支持一个数据库。

<a id="consul_settings"></a>

--------

## Consul

大多数参数为可选，但必须指定 **`host`** 或 **`url`** 之一。

- **`host`**：Consul 本地代理的 host:port。
- **`url`**：Consul 本地代理的 URL，格式为 http(s)://host:port。
- **`port`**：（可选）Consul 端口。
- **`scheme`**：（可选）**`http`** 或 **`https`**，默认为 **`http`**。
- **`token`**：（可选）ACL 令牌。
- **`verify`**：（可选）是否验证 HTTPS 请求的 SSL 证书。
- **`cacert`**：（可选）CA 证书文件，设置后将启用验证。
- **`cert`**：（可选）客户端证书文件。
- **`key`**：（可选）客户端密钥文件，若密钥已包含在 **`cert`** 中则可为空。
- **`dc`**：（可选）通信的数据中心，默认使用当前主机所在的数据中心。
- **`consistency`**：（可选）选择 Consul 一致性模式，可选值为 **`default`**、**`consistent`** 或 **`stale`**（详见 [Consul API 参考](https://www.consul.io/api/features/consistency.html/)）。
- **`checks`**：（可选）用于会话的 Consul 健康检查列表，默认为空列表。
- **`register_service`**：（可选）是否注册以 scope 参数命名的服务，并根据节点角色标记为 master、primary、replica 或 standby-leader，默认为 **`false`**。
- **`service_tags`**：（可选）除角色标签（**`primary`**/**`replica`**/**`standby-leader`**）外，要添加到 Consul 服务的额外静态标签，默认为空列表。
- **`service_check_interval`**：（可选）对已注册 URL 执行健康检查的频率，默认为 **`5s`**。
- **`service_check_tls_server_name`**：（可选）通过 TLS 连接时覆盖 SNI 主机名，参见 [Consul agent check API 参考](https://www.consul.io/api-docs/agent/check#tlsservername)。

**`token`** 需要具备以下 ACL 权限：

    service_prefix "${scope}" {
        policy = "write"
    }
    key_prefix "${namespace}/${scope}" {
        policy = "write"
    }
    session_prefix "" {
        policy = "write"
    }

--------

## Etcd

大多数参数为可选，但必须指定 **`host`**、**`hosts`**、**`url`**、**`proxy`** 或 **`srv`** 之一。

- **`host`**：etcd 端点的 host:port。
- **`hosts`**：etcd 端点列表，格式为 host1:port1,host2:port2 等，可以是逗号分隔的字符串，也可以是 YAML 列表。
- **`use_proxies`**：若设为 true，Patroni 将把 **`hosts`** 视为代理列表，不再对 etcd 集群进行拓扑发现。
- **`url`**：etcd 的 URL。
- **`proxy`**：etcd 的代理 URL，若通过代理连接 etcd，请使用此参数而非 **`url`**。
- **`srv`**：用于集群自动发现的 SRV 记录搜索域。Patroni 将按以下顺序查询指定域的 SRV 服务名，找到第一个有效结果即止：**`_etcd-client-ssl`**、**`_etcd-client`**、**`_etcd-ssl`**、**`_etcd`**、**`_etcd-server-ssl`**、**`_etcd-server`**。若查到 **`_etcd-server-ssl`** 或 **`_etcd-server`** 的 SRV 记录，将通过 ETCD peer 协议查询可用成员；否则直接使用 SRV 记录中的主机。
- **`srv_suffix`**：配置用于自动发现时 SRV 查询名称的后缀，可在同一域下区分多个 etcd 集群，仅与 **`srv`** 联用。例如，设置 **`srv_suffix: foo`** 且 **`srv: example.org`** 时，将发起 **`_etcd-client-ssl-foo._tcp.example.com`** 等 DNS SRV 查询（所有可能的 ETCD SRV 服务名均以相同方式处理）。
- **`protocol`**：（可选）http 或 https，未指定时默认使用 http。若已指定 **`url`** 或 **`proxy`**，则从中获取协议。
- **`username`**：（可选）etcd 认证的用户名。
- **`password`**：（可选）etcd 认证的密码。
- **`cacert`**：（可选）CA 证书文件，设置后将启用验证。
- **`cert`**：（可选）客户端证书文件。
- **`key`**：（可选）客户端密钥文件，若密钥已包含在 **`cert`** 中则可为空。

--------

## Etcdv3

若要让 Patroni 通过协议版本 3 与 Etcd 集群通信，在 Patroni 配置文件中使用 **`etcd3`** 节即可，所有配置参数与 **`etcd`** 相同。

> [!WARNING]
> 使用协议版本 2 创建的键在版本 3 中不可见，反之亦然，因此不能仅通过更新 Patroni 配置文件来从 **`etcd`** 切换到 **`etcd3`**。此外，Patroni 使用 Etcd 的 gRPC-gateway（代理）与 V3 API 通信，这意味着不支持 TLS 通用名称认证。

--------

## ZooKeeper

- **`hosts`**：ZooKeeper 集群成员列表，格式为 \['host1:port1', 'host2:port2', 'etc...'\]。
- **`use_ssl`**：（可选）是否使用 SSL，默认为 **`false`**。若为 **`false`**，所有 SSL 相关参数将被忽略。
- **`cacert`**：（可选）CA 证书文件，设置后将启用验证。
- **`cert`**：（可选）客户端证书文件。
- **`key`**：（可选）客户端密钥文件。
- **`key_password`**：（可选）客户端密钥密码。
- **`verify`**：（可选）是否验证证书，默认为 **`true`**。
- **`set_acls`**：（可选）若设置，Kazoo 将对其创建的每个 ZNode 应用默认 ACL。ACL 以字典形式指定，键为完整主体（可选带模式前缀），值为权限列表。支持 **`x509`** 模式（默认）或其他 ZooKeeper 支持的模式（如 **`digest`**）。权限可以是 **`CREATE`**、**`READ`**、**`WRITE`**、**`DELETE`**、**`ADMIN`** 或 **`ALL`** 之一或多个。示例：**`set_acls: {CN=principal1: [CREATE, READ], digest:principal2:+pjROuBuuwNNSujKyH8dGcEnFPQ=: [ALL]}`**。
- **`auth_data`**：（可选）连接使用的认证凭据，应以字典形式指定，键为 **`scheme`**，值为 **`credential`**，默认为空字典。

> [!NOTE]
> 需要安装 **`kazoo>=2.6.0`** 以支持 SSL。

--------

## Exhibitor

- **`hosts`**：Exhibitor（ZooKeeper）节点的初始列表，格式为 'host1,host2,etc...'，当 Exhibitor（ZooKeeper）集群拓扑变化时自动更新。
- **`poll_interval`**：从 Exhibitor 更新 ZooKeeper 和 Exhibitor 节点列表的频率。
- **`port`**：Exhibitor 端口。

<a id="kubernetes_settings"></a>

--------

## Kubernetes

- **`bypass_api_service`**：（可选）与 Kubernetes API 通信时，Patroni 通常依赖 [`kubernetes`](/docs/patroni/kubernetes#kubernetes) 服务——该服务地址通过 **`KUBERNETES_SERVICE_HOST`** 环境变量暴露给 Pod。若将 **`bypass_api_service`** 设为 **`true`**，Patroni 将解析该服务背后的 API 节点列表并直接连接。
- **`namespace`**：（可选）Patroni Pod 运行所在的 Kubernetes namespace，默认值为 **`default`**。
- **`labels`**：格式为 **`{label1: value1, label2: value2}`** 的标签，用于查找与当前集群关联的已有对象（Pod 及 Endpoints 或 ConfigMaps），Patroni 也会将这些标签设置到其创建的每个对象（Endpoint 或 ConfigMap）上。
- **`scope_label`**：（可选）包含集群名称的标签名，默认值为 **`cluster-name`**。
- **`bootstrap_labels`**：（可选）格式为 **`{label1: value1, label2: value2}`** 的标签，当 Patroni Pod 处于 **`initializing new cluster`**、**`running custom bootstrap script`**、**`starting after custom bootstrap`** 或 **`creating replica`** 状态时，这些标签将被分配给该 Pod。
- **`role_label`**：（可选）包含角色（**`primary`**、**`replica`** 或其他自定义值）的标签名，Patroni 会在其运行的 Pod 上设置此标签，默认值为 **`role`**。
- **`leader_label_value`**：（可选）Postgres 角色为 **`primary`** 时 Pod 标签的值，默认值为 **`primary`**。
- **`follower_label_value`**：（可选）Postgres 角色为 **`replica`** 时 Pod 标签的值，默认值为 **`replica`**。
- **`standby_leader_label_value`**：（可选）Postgres 角色为 **`standby_leader`** 时 Pod 标签的值，默认值为 **`primary`**。
- **`tmp_role_label`**：（可选）包含临时角色（**`primary`** 或 **`replica`**）的标签名，此标签的值始终使用对应角色的默认值，仅在必要时设置。
- **`use_endpoints`**：（可选）若设为 true，Patroni 将使用 Endpoints 而非 ConfigMaps 进行主库选举和集群状态保存。
- **`pod_ip`**：（可选）运行 Patroni 的 Pod 的 IP 地址。启用 **`use_endpoints`** 时必须提供，用于在该 Pod 上的 PostgreSQL 被提升时填充领导者 Endpoint 的子集。
- **`ports`**：（可选）若 Service 对象为端口指定了名称，Endpoint 对象中也必须出现相同名称，否则服务将无法工作。例如，若服务定义为 **`{Kind: Service, spec: {ports: [{name: postgresql, port: 5432, targetPort: 5432}]}}`**，则须设置 **`kubernetes.ports: [{"name": "postgresql", "port": 5432}]`**，Patroni 将用它更新领导者 Endpoint 的子集。此参数仅在 **`kubernetes.use_endpoints`** 已设置时生效。
- **`cacert`**：（可选）用于验证 Kubernetes API SSL 证书的受信任 CA 证书包文件，若未提供，Patroni 将使用 ServiceAccount secret 中的值。
- **`retriable_http_codes`**：（可选）需要重试的 K8s API HTTP 状态码列表。默认情况下，Patroni 在收到 **`500`**、**`503`**、**`504`** 响应，或 K8s API 响应包含 **`retry-after`** HTTP 头时自动重试。

<a id="raft_settings"></a>

--------

## Raft（已弃用）

- **`self_addr`**：用于 Raft 连接监听的 **`ip:port`**，**`self_addr`** 必须可从集群其他节点访问。若未设置，该节点将不参与共识。

- **`bind_addr`**：（可选）用于 Raft 连接监听的 **`ip:port`**，若未指定则使用 **`self_addr`**。

- **`partner_addrs`**：集群中其他 Patroni 节点的列表，格式为 \['ip1:port', 'ip2:port', 'etc...'\]。

- **`data_dir`**：存储 Raft 日志和快照的目录，若未指定则使用当前工作目录。

- **`password`**：（可选）使用指定密码加密 Raft 流量，需要 **`cryptography`** Python 模块。

  关于 Raft 实现的简短 FAQ：

  - 问：如何列出所有参与共识的节点？

    答：**`syncobj_admin -conn host:port -status`**，其中 host:port 为集群某个节点的地址。

  - 问：某个参与共识的节点已下线，且我无法为其他节点复用相同 IP，如何将其从共识中移除？

    答：**`syncobj_admin -conn host:port -remove host2:port2`**，其中 **`host2:port2`** 为要移除的节点地址。

  - 问：从哪里获取 **`syncobj_admin`** 工具？

    答：它随 **`pysyncobj`** 模块（Python RAFT 实现，Patroni 的依赖项）一同安装。

  - 问：是否可以在不加入共识的情况下运行 Patroni 节点？

    答：可以，只需在 Patroni 配置中注释掉或删除 **`raft.self_addr`**。

  - 问：是否可以只在两个节点上运行 Patroni 和 PostgreSQL？

    答：可以，在第三个节点上运行 **`patroni_raft_controller`**（不含 Patroni 和 PostgreSQL）。这种部署方式下，临时失去一个节点不会影响主库。

<a id="postgresql_settings"></a>

--------

## PostgreSQL

- **`postgresql`**：
  - **`authentication`**：

    - **`superuser`**：
      - **`username`**：超级用户名，在初始化（initdb）时设置，后续由 Patroni 用于连接 PostgreSQL。
      - **`password`**：超级用户密码，在初始化（initdb）时设置。
      - **`sslmode`**：（可选）映射到 [sslmode](https://www.postgresql.org/docs/current/libpq-connect.html#LIBPQ-CONNECT-SSLMODE) 连接参数，允许客户端指定与服务器的 TLS 协商模式，默认模式为 **`prefer`**。
      - **`sslkey`**：（可选）映射到 [sslkey](https://www.postgresql.org/docs/current/libpq-connect.html#LIBPQ-CONNECT-SSLKEY) 连接参数，指定与客户端证书配套的私钥位置。
      - **`sslpassword`**：（可选）映射到 [sslpassword](https://www.postgresql.org/docs/current/libpq-connect.html#LIBPQ-CONNECT-SSLPASSWORD) 连接参数，指定 **`sslkey`** 中私钥的密码。
      - **`sslcert`**：（可选）映射到 [sslcert](https://www.postgresql.org/docs/current/libpq-connect.html#LIBPQ-CONNECT-SSLCERT) 连接参数，指定客户端证书的位置。
      - **`sslrootcert`**：（可选）映射到 [sslrootcert](https://www.postgresql.org/docs/current/libpq-connect.html#LIBPQ-CONNECT-SSLROOTCERT) 连接参数，指定包含一个或多个受信任 CA 证书的文件位置，客户端将用其验证服务器证书。
      - **`sslcrl`**：（可选）映射到 [sslcrl](https://www.postgresql.org/docs/current/libpq-connect.html#LIBPQ-CONNECT-SSLCRL) 连接参数，指定证书吊销列表文件的位置，客户端将拒绝连接证书出现在该列表中的服务器。
      - **`sslcrldir`**：（可选）映射到 [sslcrldir](https://www.postgresql.org/docs/current/libpq-connect.html#LIBPQ-CONNECT-SSLCRLDIR) 连接参数，指定包含证书吊销列表文件的目录位置，客户端将拒绝连接证书出现在该列表中的服务器。
      - **`sslnegotiation`**：（可选）映射到 [sslnegotiation](https://www.postgresql.org/docs/current/libpq-connect.html#LIBPQ-CONNECT-SSLNEGOTIATION) 连接参数，控制在使用 SSL 时与服务器协商 SSL 加密的方式。
      - **`gssencmode`**：（可选）映射到 [gssencmode](https://www.postgresql.org/docs/current/libpq-connect.html#LIBPQ-CONNECT-GSSENCMODE) 连接参数，决定是否以及以何种优先级与服务器建立安全的 GSS TCP/IP 连接。
      - **`channel_binding`**：（可选）映射到 [channel_binding](https://www.postgresql.org/docs/current/libpq-connect.html#LIBPQ-CONNECT-CHANNEL-BINDING) 连接参数，控制客户端对通道绑定的使用。
    - **`replication`**：
      - **`username`**：复制用户名，在初始化时创建，从库通过流复制连接复制源时使用该用户。
      - **`password`**：复制用户密码，在初始化时创建。
      - **`sslmode`**：（可选）映射到 [sslmode](https://www.postgresql.org/docs/current/libpq-connect.html#LIBPQ-CONNECT-SSLMODE) 连接参数，默认模式为 **`prefer`**。
      - **`sslkey`**：（可选）映射到 [sslkey](https://www.postgresql.org/docs/current/libpq-connect.html#LIBPQ-CONNECT-SSLKEY) 连接参数，指定与客户端证书配套的私钥位置。
      - **`sslpassword`**：（可选）映射到 [sslpassword](https://www.postgresql.org/docs/current/libpq-connect.html#LIBPQ-CONNECT-SSLPASSWORD) 连接参数，指定 **`sslkey`** 中私钥的密码。
      - **`sslcert`**：（可选）映射到 [sslcert](https://www.postgresql.org/docs/current/libpq-connect.html#LIBPQ-CONNECT-SSLCERT) 连接参数，指定客户端证书的位置。
      - **`sslrootcert`**：（可选）映射到 [sslrootcert](https://www.postgresql.org/docs/current/libpq-connect.html#LIBPQ-CONNECT-SSLROOTCERT) 连接参数，指定包含一个或多个受信任 CA 证书的文件位置。
      - **`sslcrl`**：（可选）映射到 [sslcrl](https://www.postgresql.org/docs/current/libpq-connect.html#LIBPQ-CONNECT-SSLCRL) 连接参数，指定证书吊销列表文件的位置。
      - **`sslcrldir`**：（可选）映射到 [sslcrldir](https://www.postgresql.org/docs/current/libpq-connect.html#LIBPQ-CONNECT-SSLCRLDIR) 连接参数，指定包含证书吊销列表文件的目录位置。
      - **`sslnegotiation`**：（可选）映射到 [sslnegotiation](https://www.postgresql.org/docs/current/libpq-connect.html#LIBPQ-CONNECT-SSLNEGOTIATION) 连接参数，控制在使用 SSL 时协商 SSL 加密的方式。
      - **`gssencmode`**：（可选）映射到 [gssencmode](https://www.postgresql.org/docs/current/libpq-connect.html#LIBPQ-CONNECT-GSSENCMODE) 连接参数，决定是否以及以何种优先级建立安全的 GSS TCP/IP 连接。
      - **`channel_binding`**：（可选）映射到 [channel_binding](https://www.postgresql.org/docs/current/libpq-connect.html#LIBPQ-CONNECT-CHANNEL-BINDING) 连接参数，控制客户端对通道绑定的使用。
    - **`rewind`**：
      - **`username`**：（可选）用于 **`pg_rewind`** 的用户名，在初始化 PostgreSQL 11+ 时创建，并授予所有必要的 [权限](https://www.postgresql.org/docs/11/app-pgrewind.html#id-1.9.5.8.8)。
      - **`password`**：（可选）用于 **`pg_rewind`** 的用户密码，在初始化时创建。
      - **`sslmode`**：（可选）映射到 [sslmode](https://www.postgresql.org/docs/current/libpq-connect.html#LIBPQ-CONNECT-SSLMODE) 连接参数，默认模式为 **`prefer`**。
      - **`sslkey`**：（可选）映射到 [sslkey](https://www.postgresql.org/docs/current/libpq-connect.html#LIBPQ-CONNECT-SSLKEY) 连接参数，指定与客户端证书配套的私钥位置。
      - **`sslpassword`**：（可选）映射到 [sslpassword](https://www.postgresql.org/docs/current/libpq-connect.html#LIBPQ-CONNECT-SSLPASSWORD) 连接参数，指定 **`sslkey`** 中私钥的密码。
      - **`sslcert`**：（可选）映射到 [sslcert](https://www.postgresql.org/docs/current/libpq-connect.html#LIBPQ-CONNECT-SSLCERT) 连接参数，指定客户端证书的位置。
      - **`sslrootcert`**：（可选）映射到 [sslrootcert](https://www.postgresql.org/docs/current/libpq-connect.html#LIBPQ-CONNECT-SSLROOTCERT) 连接参数，指定包含一个或多个受信任 CA 证书的文件位置。
      - **`sslcrl`**：（可选）映射到 [sslcrl](https://www.postgresql.org/docs/current/libpq-connect.html#LIBPQ-CONNECT-SSLCRL) 连接参数，指定证书吊销列表文件的位置。
      - **`sslcrldir`**：（可选）映射到 [sslcrldir](https://www.postgresql.org/docs/current/libpq-connect.html#LIBPQ-CONNECT-SSLCRLDIR) 连接参数，指定包含证书吊销列表文件的目录位置。
      - **`sslnegotiation`**：（可选）映射到 [sslnegotiation](https://www.postgresql.org/docs/current/libpq-connect.html#LIBPQ-CONNECT-SSLNEGOTIATION) 连接参数，控制在使用 SSL 时协商 SSL 加密的方式。
      - **`gssencmode`**：（可选）映射到 [gssencmode](https://www.postgresql.org/docs/current/libpq-connect.html#LIBPQ-CONNECT-GSSENCMODE) 连接参数，决定是否以及以何种优先级建立安全的 GSS TCP/IP 连接。
      - **`channel_binding`**：（可选）映射到 [channel_binding](https://www.postgresql.org/docs/current/libpq-connect.html#LIBPQ-CONNECT-CHANNEL-BINDING) 连接参数，控制客户端对通道绑定的使用。

  - **`callbacks`**：在特定操作时运行的回调脚本，Patroni 会将操作名称、角色和集群名称作为参数传入（可参考 scripts/aws.py 作为示例）。

    - **`on_reload`**：触发配置重载时运行此脚本。
    - **`on_restart`**：Postgres 重启时（不改变角色）运行此脚本。
    - **`on_role_change`**：Postgres 被提升或降级时运行此脚本。
    - **`on_start`**：Postgres 启动时运行此脚本。
    - **`on_stop`**：Postgres 停止时运行此脚本。

  - **`connect_address`**：其他节点和应用程序访问 Postgres 所用的 IP 地址和端口。

  - **`proxy_address`**：与 PostgreSQL 并行运行的连接池（如 pgbouncer）的可访问 IP 地址和端口，该值以 **`proxy_url`** 的形式写入 DCS 成员键，可用于服务发现。

  - **`create_replica_methods`**：创建新从库所用方法的有序列表，**`basebackup`** 为默认方法，其余方法视为脚本，每个脚本需作为独立配置节进行配置。详见 [**自定义从库创建方法文档**](/docs/patroni/replica_bootstrap#custom_replica_creation)。

  - **`data_dir`**：Postgres 数据目录的位置，可以是 [**已有目录**](/docs/patroni/existing_data#existing_data) 或由 Patroni 初始化的目录。

  - **`config_dir`**：Postgres 配置目录的位置，默认为数据目录，必须对 Patroni 可写。

  - **`bin_dir`**：（可选）PostgreSQL 可执行文件（pg_ctl、initdb、pg_controldata、pg_basebackup、postgres、pg_isready、pg_rewind）的路径。若未提供或为空字符串，将使用 PATH 环境变量查找可执行文件。

  - **`bin_name`**：（可选）若使用自定义 Postgres 发行版，可用此选项覆盖 Postgres 二进制文件名：

    - **`pg_ctl`**：（可选）**`pg_ctl`** 的自定义名称。
    - **`initdb`**：（可选）**`initdb`** 的自定义名称。
    - **`pgcontroldata`**：（可选）**`pg_controldata`** 的自定义名称。
    - **`pg_basebackup`**：（可选）**`pg_basebackup`** 的自定义名称。
    - **`postgres`**：（可选）**`postgres`** 的自定义名称。
    - **`pg_isready`**：（可选）**`pg_isready`** 的自定义名称。
    - **`pg_rewind`**：（可选）**`pg_rewind`** 的自定义名称。

  - **`listen`**：PostgreSQL 监听的 IP 地址和端口，使用流复制时必须可从集群其他节点访问。支持多个逗号分隔的地址，端口附加在最后一个地址之后，例如 **`listen: 127.0.0.1,127.0.0.2:5432`**。Patroni 将使用列表中的第一个地址建立到 PostgreSQL 节点的本地连接。

  - **`use_unix_socket`**：指定 Patroni 优先使用 Unix 套接字连接 PostgreSQL，默认值为 **`false`**。若已定义 **`unix_socket_directories`**，Patroni 将从中选取第一个合适的路径用于连接，无合适值时回退到 TCP。若 **`postgresql.parameters`** 中未指定 **`unix_socket_directories`**，Patroni 将假设使用默认值并在连接参数中省略 **`host`**。

  - **`use_unix_socket_repl`**：指定 Patroni 优先使用 Unix 套接字建立复制用户连接，默认值为 **`false`**，行为与 **`use_unix_socket`** 相同。

  - **`pgpass`**：[.pgpass](https://www.postgresql.org/docs/current/static/libpq-pgpass.html) 密码文件的路径。Patroni 在执行 pg_basebackup、post_init 脚本及其他某些情况下会创建此文件，该路径必须对 Patroni 可写。

  - **`recovery_conf`**：配置从库时写入 recovery.conf 的附加配置项。

  - **`custom_conf`**：可选的自定义 **`postgresql.conf`** 文件路径，将代替 **`postgresql.base.conf`** 使用。该文件必须存在于所有集群节点上且对 PostgreSQL 可读，实际的 **`postgresql.conf`** 将从其所在位置包含该文件。注意 Patroni 不会监控此文件的变更，也不会备份它，但其中的设置仍可被 Patroni 自身的配置机制覆盖，详见 [**动态配置**](/docs/patroni/config#config)。

  - **`parameters`**：Postgres 的配置参数（GUC），格式为 **`{ssl: "on", ssl_cert_file: "cert_file"}`**。

  - **`pg_hba`**：Patroni 用于生成 **`pg_hba.conf`** 的行列表。若 PostgreSQL 的 **`hba_file`** 参数设为非默认值，Patroni 将忽略此参数。与 [**动态配置**](/docs/patroni/config/dynamic#dynamic) 配合使用，可简化 **`pg_hba.conf`** 的管理。

    - **`- host all all 0.0.0.0/0 md5`**
    - **`- host replication replicator 127.0.0.1/32 md5`**：复制所需的规则行。

  - **`pg_ident`**：Patroni 用于生成 **`pg_ident.conf`** 的行列表。若 PostgreSQL 的 **`ident_file`** 参数设为非默认值，Patroni 将忽略此参数。与 [**动态配置**](/docs/patroni/config/dynamic#dynamic) 配合使用，可简化 **`pg_ident.conf`** 的管理。

    - **`- mapname1 systemname1 pguser1`**
    - **`- mapname1 systemname2 pguser2`**

  - **`pg_ctl_timeout`**：pg_ctl 执行 **`start`**、**`stop`** 或 **`restart`** 时的等待时长，默认值为 60 秒。

  - **`use_pg_rewind`**：当旧主库以从库身份重新加入集群时，尝试对其执行 pg_rewind。需要集群在初始化时启用了 **`data page checksums`**（**`initdb`** 的 **`--data-checksums`** 选项）或将 **`wal_log_hints`** 设为 **`on`**，否则 pg_rewind 无法正常工作。

  - **`rewind`**：（可选）传递给 **`pg_rewind`** 的自定义选项，可以是字符串列表和/或单键值字典。以下选项不允许使用：**`target-pgdata`**、**`source-pgdata`**、**`source-server`**、**`write-recovery-conf`**、**`dry-run`**、**`restore-target-wal`**、**`config-file`**、**`no-ensure-shutdown`**、**`version`** 和 **`help`**。使用示例：

    ```yaml
    postgresql:
      rewind:
        - debug
        - progress
        - sync-method: fsync
    ```

  - **`remove_data_directory_on_rewind_failure`**：启用后，若 pg_rewind 失败，Patroni 将删除 PostgreSQL 数据目录并重新创建从库；否则将尝试跟随新主库，默认值为 **`false`**。

  - **`remove_data_directory_on_diverged_timelines`**：若 Patroni 检测到时间线出现分歧，且旧主库无法从新主库开始流复制，则删除 PostgreSQL 数据目录并重新创建从库。此选项在无法使用 **`pg_rewind`** 时很有用。在 PostgreSQL v10 及更早版本上进行时间线分歧检查时，Patroni 将尝试使用复制凭据连接 "postgres" 数据库，因此 pg_hba.conf 中必须允许此类访问。默认值为 **`false`**。

  - **`replica_method`**：对于 **`create_replica_methods`** 中除 **`basebackup`** 外的每种方法，需添加同名配置节。该节至少须包含 **`command`** 字段，指向实际执行脚本的完整路径，其余配置参数将以 **`parameter=value`** 的形式传递给脚本。

  - **`pre_promote`**：故障转移期间在获取领导者锁之后、提升从库之前执行的隔离脚本。若脚本以非零退出码退出，Patroni 将放弃提升并从 DCS 中移除领导者键。

  - **`before_stop`**：在停止 PostgreSQL 之前立即执行的脚本。与回调不同，此脚本同步运行，会阻塞关闭流程直到脚本完成。脚本的返回码不影响后续关闭操作的执行。

<a id="restapi_settings"></a>

--------

## REST API

- **`restapi`**：
  - **`connect_address`**：访问 Patroni [**REST API**](/docs/patroni/rest_api#rest_api) 所用的 IP 地址（或主机名）和端口。集群中所有成员必须能够访问此地址，因此除非 Patroni 仅用于本地演示，否则不能使用回环地址（如 "localhost" 或 "127.0.0.1"）。该地址可作为 HTTP 健康检查端点（详见下文 REST API 的 "listen" 参数），也用于用户查询（直接访问或通过 REST API）以及集群成员在主库选举期间的健康检查（例如，判断当前主库是否仍在运行，或是否存在 WAL 位置超前于查询节点的节点）。**`connect_address`** 写入 DCS 的成员键，从而可通过成员名称解析出其 REST API 连接地址。
  - **`listen`**：Patroni 监听 REST API 请求的 IP 地址（或主机名）和端口，同样提供上述健康检查与集群节点间通信功能，也可为 HAProxy 等支持 HTTP **`OPTIONS`** 或 **`GET`** 检查的负载均衡器提供健康检查端点。
  - **`authentication`**：（可选）
    - **`username`**：用于保护不安全 REST API 端点的 Basic-auth 用户名。
    - **`password`**：用于保护不安全 REST API 端点的 Basic-auth 密码。
  - **`certfile`**：（可选）PEM 格式的证书文件，若未指定或留空，API 服务器将在无 SSL 的情况下工作。
  - **`keyfile`**：（可选）PEM 格式的私钥文件。
  - **`keyfile_password`**：（可选）用于解密 keyfile 的密码。
  - **`cafile`**：（可选）包含受信任 CA 证书的 CA_BUNDLE 文件，用于验证客户端证书。
  - **`ciphers`**：（可选）允许的密码套件（例如 "ECDHE-RSA-AES256-GCM-SHA384:DHE-RSA-AES256-GCM-SHA384:ECDHE-RSA-AES128-GCM-SHA256:DHE-RSA-AES128-GCM-SHA256:!SSLv1:!SSLv2:!SSLv3:!TLSv1:!TLSv1.1"）。
  - **`verify_client`**：（可选）**`none`**（默认）、**`optional`** 或 **`required`**。**`none`** 时不检查客户端证书；**`required`** 时所有 REST API 调用均需提供客户端证书；**`optional`** 时仅对不安全的 REST API 端点要求客户端证书。使用 **`required`** 时，证书签名验证通过即视为认证成功；使用 **`optional`** 时，仅对 **`PUT`**、**`POST`**、**`PATCH`** 和 **`DELETE`** 请求检查客户端证书。
  - **`allowlist`**：（可选）允许调用不安全 REST API 端点的主机列表，每个元素可以是主机名、IP 地址或 CIDR 格式的网络地址，默认允许所有来源。一旦设置了 **`allowlist`** 或 **`allowlist_include_members`**，不在列表中的请求将被拒绝。
  - **`allowlist_include_members`**：（可选）若设为 **`true`**，DCS 中已注册的其他集群成员（IP 地址或主机名取自成员的 **`api_url`**）也被允许访问不安全 REST API 端点。注意操作系统可能为出站连接使用不同的 IP 地址。
  - **`http_extra_headers`**：（可选）允许 REST API 服务器在 HTTP 响应中传递额外信息的 HTTP 头。
  - **`https_extra_headers`**：（可选）启用 TLS 时，允许 REST API 服务器在 HTTP 响应中传递额外信息的 HTTPS 头，同时也会传递 **`http_extra_headers`** 中设置的额外信息。
  - **`request_queue_size`**：（可选）Patroni REST API 使用的 TCP 套接字请求队列大小，队列满后新请求将收到 "Connection denied" 错误，默认值为 5。
  - **`server_tokens`**：（可选）配置 **`Server`** HTTP 头的值：
    - **`Minimal`**：头部仅包含 Patroni 版本，例如 **`Patroni/4.0.0`**。
    - **`ProductOnly`**：头部仅包含产品名称，例如 **`Patroni`**。
    - **`Original`**（默认）：头部显示原始行为，包含 BaseHTTP 和 Python 版本，例如 **`BaseHTTP/0.6 Python/3.12.3`**。

以下是 **`http_extra_headers`** 和 **`https_extra_headers`** 的配置示例：

```yaml
restapi:
  listen: <listen>
  connect_address: <connect_address>
  authentication:
    username: <username>
    password: <password>
  http_extra_headers:
    'X-Frame-Options': 'SAMEORIGIN'
    'X-XSS-Protection': '1; mode=block'
    'X-Content-Type-Options': 'nosniff'
  cafile: <ca file>
  certfile: <cert>
  keyfile: <key>
  https_extra_headers:
    'Strict-Transport-Security': 'max-age=31536000; includeSubDomains'
```

<div class="warning">

<div class="title">

Warning

</div>

- **`restapi.connect_address`** 必须可从该 Patroni 集群的所有节点访问。Patroni 在主库竞选期间会在内部使用它来查找复制延迟最小的节点。
- 若启用了客户端证书验证（**`restapi.verify_client`** 设为 **`required`**），还**必须**在 **`ctl.certfile`**、**`ctl.keyfile`**、**`ctl.keyfile_password`** 中提供有效的客户端证书，否则 Patroni 将无法正常工作。

</div>

<a id="patronictl_settings"></a>

--------

## CTL

- **`ctl`**：（可选）
  - **`authentication`**：
    - **`username`**：访问受保护 REST API 端点的 Basic-auth 用户名。若未提供，[`patronictl`](/docs/patroni/patronictl#patronictl) 将使用 REST API 的 "username" 参数值。
    - **`password`**：访问受保护 REST API 端点的 Basic-auth 密码。若未提供，[`patronictl`](/docs/patroni/patronictl#patronictl) 将使用 REST API 的 "password" 参数值。
  - **`insecure`**：允许在不验证 SSL 证书的情况下连接 REST API。
  - **`cacert`**：用于验证 REST API SSL 证书的 CA_BUNDLE 文件或受信任 CA 证书目录，若未提供，[`patronictl`](/docs/patroni/patronictl#patronictl) 将使用 REST API 的 "cafile" 参数值。
  - **`certfile`**：PEM 格式的客户端证书文件。
  - **`keyfile`**：PEM 格式的客户端私钥文件。
  - **`keyfile_password`**：用于解密客户端 keyfile 的密码。

--------

## Watchdog

- **`mode`**：**`off`**、**`automatic`** 或 **`required`**。**`off`** 时禁用 watchdog；**`automatic`** 时如有可用的 watchdog 则启用，否则忽略；**`required`** 时节点必须在 watchdog 成功启用后才能成为主库。
- **`device`**：watchdog 设备路径，默认为 **`/dev/watchdog`**。
- **`safety_margin`**：watchdog 触发与领导者键过期之间的安全边距（秒）。

<a id="tags_settings"></a>

--------

## 标签（Tags）

- **`clonefrom`**：**`true`** 或 **`false`**。若设为 **`true`**，其他节点在引导时可能优先从此节点克隆（**`pg_basebackup`**）。若多个节点的 **`clonefrom`** 均为 **`true`**，将随机选择引导源节点，默认值为 **`false`**。
- **`noloadbalance`**：**`true`** 或 **`false`**。若设为 **`true`**，该节点在 **`GET /replica`** REST API 健康检查时将返回 HTTP 503，从而被排除在负载均衡之外，默认为 **`false`**。
- **`replicatefrom`**：另一个从库的名称，用于支持级联复制。
- **`nosync`**：**`true`** 或 **`false`**。若设为 **`true`**，该节点永远不会被选为同步从库。
- **`sync_priority`**：整数，控制 [`synchronous_mode`](/docs/patroni/replication_modes#synchronous_mode) 设为 **`on`** 时此节点在同步从库选择中的优先级，数值越高越优先。若 **`sync_priority`** 为 0 或负数，该节点不会被写入 **`synchronous_standby_names`** 参数（效果类似于 **`nosync: true`**）。注意此参数的含义与 **`pg_stat_replication`** 视图中报告的 **`sync_priority`** 值相反。
- **`nofailover`**：**`true`** 或 **`false`**，控制此节点是否允许参与主库竞选，默认为 **`false`**，即此节点 <span id="can">可以</span> 参与主库竞选。
- **`failover_priority`**：整数，控制此节点在故障转移时的优先级。在接收/回放相同 WAL 量的前提下，优先级高的节点优先被选为新主库；但无论优先级高低，接收/回放 LSN 更大的节点始终优先。若 **`failover_priority`** 为 0 或负数，该节点不允许参与主库竞选（效果类似于 **`nofailover: true`**）。已知限制：**`failover_priority`** 目前不支持 [**基于法定人数的同步复制**](/docs/patroni/replication_modes#quorum_mode)。
- **`nostream`**：**`true`** 或 **`false`**。若设为 **`true`**，该节点将不使用复制协议流式传输 WAL，而依赖归档恢复（需配置 **`restore_command`**）和 **`pg_wal`**/**`pg_xlog`** 轮询。同时将禁用该节点本身及其所有级联从库上永久逻辑复制槽的复制与同步，在主库上设置此标签无效。

> [!WARNING]
> **`nofailover`** 和 **`failover_priority`** 只能提供其中一个。**`nofailover: true`** 等同于 **`failover_priority: 0`**，而 **`nofailover: false`** 将给予节点优先级 1。

除这些预定义标签外，还可以添加自定义标签：

- **`key1`**：**`true`**
- **`key2`**：**`false`**
- **`key3`**：**`1.4`**
- **`key4`**：**`"RandomString"`**

标签在 [**REST API**](/docs/patroni/rest_api#rest_api) 和 [`patronictl list`](/docs/patroni/patronictl#patronictl_list) 中均可查看。也可通过这些标签检查实例的健康状态——若某个实例未定义该标签，或对应值与查询值不匹配，将返回 HTTP 503。
