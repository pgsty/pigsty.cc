---
title: "环境变量"
linkTitle: "环境变量"
weight: 30
icon: fa-solid fa-house-crack
description: "用于覆盖 Patroni 配置文件参数的环境变量。"
module: [PATRONI]
category: [Reference]
---

> 原始页面： https://patroni.readthedocs.io/en/latest/ENVIRONMENT.html

<a id="env"></a>
可以使用系统环境变量覆盖 Patroni 配置文件中定义的部分配置参数。本文档列出了 Patroni 处理的所有环境变量。通过环境变量设置的值始终优先于配置文件中的值。

--------

## 全局/通用

- **PATRONI_CONFIGURATION**：可通过 [`PATRONI_CONFIGURATION`](/docs/patroni/config#config) 环境变量为 Patroni 提供完整配置。设置此变量后，其他所有环境变量将被忽略！
- **PATRONI_NAME**：运行当前 Patroni 实例的节点名称，在集群内必须唯一。
- **PATRONI_NAMESPACE**：Patroni 在配置存储中保存集群信息的路径。默认值："/service"。
- **PATRONI_SCOPE**：集群名称。

--------

## 日志

- **PATRONI_LOG_TYPE**：日志格式，可为 **plain** 或 **json**。使用 **json** 格式需要安装 [`jsonlogger`](/docs/patroni/installation#extras)。默认值为 **plain**。
- **PATRONI_LOG_LEVEL**：全局日志级别。默认值为 **INFO**（参见 [Python logging 文档](https://docs.python.org/3.6/library/logging.html#levels)）。
- **PATRONI_LOG_TRACEBACK_LEVEL**：显示 traceback 的日志级别。默认值为 **ERROR**。若希望仅在 **PATRONI_LOG_LEVEL=DEBUG** 时才显示 traceback，可将其设置为 **DEBUG**。
- **PATRONI_LOG_FORMAT**：日志格式化字符串。若日志类型为 **plain**，格式应为字符串，可用属性参见 [LogRecord 属性文档](https://docs.python.org/3.6/library/logging.html#logrecord-attributes)。若日志类型为 **json**，格式除字符串外还可以是列表，每个列表项对应一个 LogRecord 属性，只需填写字段名，省略 **%(** 和 **)**。若希望以不同键名输出某个字段，可使用字典，键为日志字段名，值为希望在日志中显示的字段名。默认值为 **%(asctime)s %(levelname)s: %(message)s**。
- **PATRONI_LOG_DATEFORMAT**：日期时间格式化字符串（参见 [formatTime() 文档](https://docs.python.org/3.6/library/logging.html#logging.Formatter.formatTime)）。
- **PATRONI_LOG_STATIC_FIELDS**：为日志添加额外字段，仅在日志类型为 **json** 时可用。示例：`PATRONI_LOG_STATIC_FIELDS="{app: patroni}"`。
- **PATRONI_LOG_MAX_QUEUE_SIZE**：Patroni 采用两步日志记录机制。日志记录先写入内存队列，由独立线程从队列中取出后写入 stderr 或文件。内存队列容量默认限制为 **1000** 条，足以保留过去约 1 小时 20 分钟的日志。
- **PATRONI_LOG_DIR**：应用程序日志的写入目录。该目录必须已存在且对运行 Patroni 的用户可写。设置此变量后，默认保留 4 个 25MB 的日志文件，可通过 `PATRONI_LOG_FILE_NUM` 和 `PATRONI_LOG_FILE_SIZE` 调整（见下文）。
- **PATRONI_LOG_MODE**：日志文件权限（例如 `0644`）。若未指定，将基于当前 umask 值设置。
- **PATRONI_LOG_FILE_NUM**：保留的应用程序日志文件数量。
- **PATRONI_LOG_FILE_SIZE**：触发日志滚动的 patroni.log 文件大小（字节）。
- **PATRONI_LOG_LOGGERS**：按 Python 模块重新定义日志级别。示例：`PATRONI_LOG_LOGGERS="{patroni.postmaster: WARNING, urllib3: DEBUG}"`。
- **PATRONI_LOG_DEDUPLICATE_HEARTBEAT_LOGS**：设置为 `true` 时，连续且内容相同的心跳日志不再重复输出。默认值为 `false`。

> [!WARNING]
> HA 循环的执行时间是诊断资源耗尽等问题所致故障转移的重要信息。将 `PATRONI_LOG_DEDUPLICATE_HEARTBEAT_LOGS` 设置为 `true` 后，HA 循环执行将不产生日志（除非领导者发生变化），导致这些潜在有用的信息无法从日志中获取。

--------

## Citus

启用 Patroni 与 [Citus](https://docs.citusdata.com) 的集成。配置后，Patroni 将负责在协调器上注册 Citus 工作节点。更多关于 Citus 支持的信息请参阅 [**此处**](/docs/patroni/citus#citus)。

- **PATRONI_CITUS_GROUP**：Citus 组 ID，整数类型。协调器使用 `0`，工作节点使用 `1`、`2` 等。
- **PATRONI_CITUS_DATABASE**：应创建 [`citus`](/docs/patroni/citus#citus) 扩展的数据库，协调器和所有工作节点上必须相同。目前仅支持一个数据库。

--------

## Consul

- **PATRONI_CONSUL_HOST**：Consul 本地代理的 host:port。
- **PATRONI_CONSUL_URL**：Consul 本地代理的 URL，格式为：http(s)://host:port。
- **PATRONI_CONSUL_PORT**：（可选）Consul 端口。
- **PATRONI_CONSUL_SCHEME**：（可选）**http** 或 **https**，默认为 **http**。
- **PATRONI_CONSUL_TOKEN**：（可选）ACL 令牌。
- **PATRONI_CONSUL_VERIFY**：（可选）是否对 HTTPS 请求验证 SSL 证书。
- **PATRONI_CONSUL_CACERT**：（可选）CA 证书文件，存在时将启用验证。
- **PATRONI_CONSUL_CERT**：（可选）包含客户端证书的文件。
- **PATRONI_CONSUL_KEY**：（可选）包含客户端密钥的文件。若密钥已包含在证书中，可留空。
- **PATRONI_CONSUL_DC**：（可选）通信目标数据中心，默认使用主机所在的数据中心。
- **PATRONI_CONSUL_CONSISTENCY**：（可选）Consul 一致性模式，可选值为 `default`、`consistent` 或 `stale`（详见 [Consul API 参考](https://www.consul.io/api/features/consistency.html/)）。
- **PATRONI_CONSUL_CHECKS**：（可选）用于会话的 Consul 健康检查列表，默认使用空列表。
- **PATRONI_CONSUL_REGISTER_SERVICE**：（可选）是否注册以 scope 参数命名的服务，并根据节点角色添加 master、primary、replica 或 standby-leader 标签。默认为 **false**。
- **PATRONI_CONSUL_SERVICE_TAGS**：（可选）除角色标签（`primary`/`replica`/`standby-leader`）外，向 Consul 服务添加的额外静态标签，默认使用空列表。
- **PATRONI_CONSUL_SERVICE_CHECK_INTERVAL**：（可选）对已注册 URL 执行健康检查的频率。
- **PATRONI_CONSUL_SERVICE_CHECK_TLS_SERVER_NAME**：（可选）通过 TLS 连接时覆盖 SNI 主机名，另见 [Consul agent check API 参考](https://www.consul.io/api-docs/agent/check#tlsservername)。

--------

## Etcd

- **PATRONI_ETCD_PROXY**：etcd 的代理 URL。若通过代理连接 etcd，请使用此参数而非 **PATRONI_ETCD_URL**。
- **PATRONI_ETCD_URL**：etcd 的 URL，格式为：http(s)://(username:password@)host:port。
- **PATRONI_ETCD_HOSTS**：etcd 端点列表，格式为 'host1:port1','host2:port2' 等。
- **PATRONI_ETCD_USE_PROXIES**：若设置为 true，Patroni 将把 **hosts** 视为代理列表，不执行 etcd 集群的拓扑发现，直接使用固定的 **hosts** 列表。
- **PATRONI_ETCD_PROTOCOL**：http 或 https，未指定时使用 http。若指定了 **url** 或 **proxy**，将从中提取协议。
- **PATRONI_ETCD_HOST**：etcd 端点的 host:port。
- **PATRONI_ETCD_SRV**：用于集群自动发现的 SRV 记录搜索域。Patroni 将按以下顺序查询指定域的 SRV 服务名（直到第一次成功）：`_etcd-client-ssl`、`_etcd-client`、`_etcd-ssl`、`_etcd`、`_etcd-server-ssl`、`_etcd-server`。若检索到 `_etcd-server-ssl` 或 `_etcd-server` 的 SRV 记录，则使用 ETCD peer 协议查询可用成员；否则使用 SRV 记录中的主机。
- **PATRONI_ETCD_SRV_SUFFIX**：发现期间查询的 SRV 名称后缀，用于区分同一域下的多个 etcd 集群，仅与 **PATRONI_ETCD_SRV** 联合使用时生效。例如，设置 `PATRONI_ETCD_SRV_SUFFIX=foo` 和 `PATRONI_ETCD_SRV=example.org` 后，将进行如下 DNS SRV 查询：`_etcd-client-ssl-foo._tcp.example.com`（以及所有其他可能的 ETCD SRV 服务名）。
- **PATRONI_ETCD_USERNAME**：etcd 认证用户名。
- **PATRONI_ETCD_PASSWORD**：etcd 认证密码。
- **PATRONI_ETCD_CACERT**：CA 证书文件，存在时将启用验证。
- **PATRONI_ETCD_CERT**：包含客户端证书的文件。
- **PATRONI_ETCD_KEY**：包含客户端密钥的文件。若密钥已包含在证书中，可留空。

--------

## Etcdv3

Etcdv3 的环境变量名与 Etcd 类似，只需将变量名中的 `ETCD` 替换为 `ETCD3` 即可。例如：`PATRONI_ETCD3_HOST`、`PATRONI_ETCD3_CACERT` 等。

> [!WARNING]
> 使用协议版本 2 创建的键在协议版本 3 中不可见，反之亦然，因此无法仅通过更新 Patroni 配置来从 Etcd 切换到 Etcdv3。此外，Patroni 使用 Etcd 的 gRPC 网关（代理）与 V3 API 通信，这意味着不支持 TLS 通用名称认证。

--------

## ZooKeeper

- **PATRONI_ZOOKEEPER_HOSTS**：ZooKeeper 集群成员的逗号分隔列表，格式为：`'host1:port1','host2:port2','etc...'`。每一项均须加引号！
- **PATRONI_ZOOKEEPER_USE_SSL**：（可选）是否启用 SSL，默认为 `false`。设置为 `false` 时，所有 SSL 相关参数将被忽略。
- **PATRONI_ZOOKEEPER_CACERT**：（可选）CA 证书文件，存在时将启用验证。
- **PATRONI_ZOOKEEPER_CERT**：（可选）包含客户端证书的文件。
- **PATRONI_ZOOKEEPER_KEY**：（可选）包含客户端密钥的文件。
- **PATRONI_ZOOKEEPER_KEY_PASSWORD**：（可选）客户端密钥密码。
- **PATRONI_ZOOKEEPER_VERIFY**：（可选）是否验证证书，默认为 `true`。
- **PATRONI_ZOOKEEPER_SET_ACLS**：（可选）若设置，将配置 Kazoo 为其创建的每个 ZNode 应用默认 ACL。ACL 可使用 `x509` 模式（默认）或其他受支持的 ZooKeeper 方案（如 `digest`）。应以字典形式指定，键为完整主体名称（可选择性地添加方案前缀），值为权限列表。权限可为 `CREATE`、`READ`、`WRITE`、`DELETE`、`ADMIN` 或 `ALL` 中的一个或多个。示例：`set_acls: {CN=principal1: [CREATE, READ], digest:principal2:+pjROuBuuwNNSujKyH8dGcEnFPQ=: [ALL]}`。
- **PATRONI_ZOOKEEPER_AUTH_DATA**：（可选）连接认证凭据，应为字典形式，`scheme` 为键，`credential` 为值，默认为空字典。

> [!NOTE]
> 需要安装 `kazoo>=2.6.0` 以支持 SSL。

--------

## Exhibitor

- **PATRONI_EXHIBITOR_HOSTS**：Exhibitor（ZooKeeper）节点的初始列表，格式为：'host1,host2,etc...'。每当 Exhibitor（ZooKeeper）集群拓扑变化时，该列表会自动更新。
- **PATRONI_EXHIBITOR_PORT**：Exhibitor 端口。

<a id="kubernetes_environment"></a>

--------

## Kubernetes

- **PATRONI_KUBERNETES_BYPASS_API_SERVICE**：（可选）与 Kubernetes API 通信时，Patroni 通常依赖 [`kubernetes`](/docs/patroni/kubernetes#kubernetes) 服务，该服务的地址通过 `KUBERNETES_SERVICE_HOST` 环境变量暴露给 Pod。若将此参数设置为 `true`，Patroni 将解析该服务后端的 API 节点列表并直接与之连接。
- **PATRONI_KUBERNETES_NAMESPACE**：（可选）Patroni Pod 所在的 Kubernetes 命名空间，默认值为 `default`。
- **PATRONI_KUBERNETES_LABELS**：格式为 `{label1: value1, label2: value2}` 的标签。用于查找与当前集群关联的现有对象（Pod 以及 Endpoint 或 ConfigMap），Patroni 也会将它们设置在所创建的每个对象（Endpoint 或 ConfigMap）上。
- **PATRONI_KUBERNETES_SCOPE_LABEL**：（可选）包含集群名称的标签名，默认值为 `cluster-name`。
- **PATRONI_KUBERNETES_BOOTSTRAP_LABELS**：（可选）格式为 `{label1: value1, label2: value2}` 的标签。当 Patroni Pod 的状态为 `initializing new cluster`、`running custom bootstrap script`、`starting after custom bootstrap` 或 `creating replica` 时，这些标签将被分配给该 Pod。
- **PATRONI_KUBERNETES_ROLE_LABEL**：（可选）包含角色（`primary`、`replica` 或其他自定义值）的标签名。Patroni 会在其运行的 Pod 上设置此标签，默认值为 `role`。
- **PATRONI_KUBERNETES_LEADER_LABEL_VALUE**：（可选）Postgres 角色为 `primary` 时 Pod 标签的值，默认值为 `primary`。
- **PATRONI_KUBERNETES_FOLLOWER_LABEL_VALUE**：（可选）Postgres 角色为 `replica` 时 Pod 标签的值，默认值为 `replica`。
- **PATRONI_KUBERNETES_STANDBY_LEADER_LABEL_VALUE**：（可选）Postgres 角色为 `standby_leader` 时 Pod 标签的值，默认值为 `primary`。
- **PATRONI_KUBERNETES_TMP_ROLE_LABEL**：（可选）包含临时角色（`primary` 或 `replica`）的标签名。该标签的值始终使用对应角色的默认值，仅在必要时设置。
- **PATRONI_KUBERNETES_USE_ENDPOINTS**：（可选）若设置为 true，Patroni 将使用 Endpoint 而非 ConfigMap 进行领导者选举和保存集群状态。
- **PATRONI_KUBERNETES_POD_IP**：（可选）Patroni 所在 Pod 的 IP 地址。启用 `PATRONI_KUBERNETES_USE_ENDPOINTS` 时必填，用于在 Pod 的 PostgreSQL 被提升时填充领导者 Endpoint 的子集。
- **PATRONI_KUBERNETES_PORTS**：（可选）若 Service 对象为端口命名，则 Endpoint 对象中也必须出现相同名称，否则服务将无法工作。例如，若 Service 定义为 `{Kind: Service, spec: {ports: [{name: postgresql, port: 5432, targetPort: 5432}]}}`，则必须设置 `PATRONI_KUBERNETES_PORTS='[{"name": "postgresql", "port": 5432}]'`，Patroni 将使用该值更新领导者 Endpoint 的子集。此参数仅在设置了 `PATRONI_KUBERNETES_USE_ENDPOINTS` 时生效。
- **PATRONI_KUBERNETES_CACERT**：（可选）指定包含受信任 CA 证书的 CA_BUNDLE 文件，用于验证 Kubernetes API SSL 证书。若未提供，Patroni 将使用 ServiceAccount Secret 中的值。
- **PATRONI_RETRIABLE_HTTP_CODES**：（可选）需要重试的 K8s API HTTP 状态码列表。默认情况下，Patroni 在收到 `500`、`503`、`504` 时重试，或在 K8s API 响应包含 `retry-after` HTTP 头时重试。

--------

## Raft（已弃用）

- **PATRONI_RAFT_SELF_ADDR**：监听 Raft 连接的 `ip:port`，必须可从集群的其他节点访问。若未设置，该节点将不参与共识。
- **PATRONI_RAFT_BIND_ADDR**：（可选）监听 Raft 连接的 `ip:port`，若未指定，将使用 `self_addr`。
- **PATRONI_RAFT_PARTNER_ADDRS**：集群中其他 Patroni 节点的列表，格式为 `"'ip1:port1','ip2:port2'"`。每一项均须加引号！
- **PATRONI_RAFT_DATA_DIR**：存储 Raft 日志和快照的目录，若未指定，使用当前工作目录。
- **PATRONI_RAFT_PASSWORD**：（可选）使用指定密码加密 Raft 流量，需要安装 Python 的 `cryptography` 模块。

--------

## PostgreSQL

- **PATRONI_POSTGRESQL_LISTEN**：PostgreSQL 监听的 IP 地址和端口。支持多个逗号分隔的地址，端口须附加在最后一个地址后并以冒号分隔，例如 `listen: 127.0.0.1,127.0.0.2:5432`。Patroni 将使用列表中的第一个地址建立到 PostgreSQL 节点的本地连接。
- **PATRONI_POSTGRESQL_CONNECT_ADDRESS**：其他节点和应用程序访问 PostgreSQL 所用的 IP 地址和端口。
- **PATRONI_POSTGRESQL_PROXY_ADDRESS**：运行于 PostgreSQL 旁侧的连接池（如 pgbouncer）的可访问 IP 地址和端口。该值以 `proxy_url` 的形式写入 DCS 中的成员键，可用于服务发现。
- **PATRONI_POSTGRESQL_DATA_DIR**：PostgreSQL 数据目录的位置，可以是已有目录，也可以是由 Patroni 初始化的目录。
- **PATRONI_POSTGRESQL_CONFIG_DIR**：PostgreSQL 配置目录的位置，默认为数据目录，必须对 Patroni 可写。
- **PATRONI_POSTGRESQL_BIN_DIR**：PostgreSQL 可执行文件路径（pg_ctl、initdb、pg_controldata、pg_basebackup、postgres、pg_isready、pg_rewind）。默认值为空字符串，表示通过 PATH 环境变量查找可执行文件。
- **PATRONI_POSTGRESQL_BIN_PG_CTL**：（可选）`pg_ctl` 可执行文件的自定义名称。
- **PATRONI_POSTGRESQL_BIN_INITDB**：（可选）`initdb` 可执行文件的自定义名称。
- **PATRONI_POSTGRESQL_BIN_PG_CONTROLDATA**：（可选）`pg_controldata` 可执行文件的自定义名称。
- **PATRONI_POSTGRESQL_BIN_PG_BASEBACKUP**：（可选）`pg_basebackup` 可执行文件的自定义名称。
- **PATRONI_POSTGRESQL_BIN_POSTGRES**：（可选）`postgres` 可执行文件的自定义名称。
- **PATRONI_POSTGRESQL_BIN_IS_READY**：（可选）`pg_isready` 可执行文件的自定义名称。
- **PATRONI_POSTGRESQL_BIN_PG_REWIND**：（可选）`pg_rewind` 可执行文件的自定义名称。
- **PATRONI_POSTGRESQL_PGPASS**：[.pgpass](https://www.postgresql.org/docs/current/static/libpq-pgpass.html) 密码文件的路径。Patroni 在执行 pg_basebackup 及某些其他情况下会创建此文件，该位置必须对 Patroni 可写。
- **PATRONI_REPLICATION_USERNAME**：复制用户名，在初始化期间创建，从库将使用此用户通过流复制访问复制源。
- **PATRONI_REPLICATION_PASSWORD**：复制密码，在初始化期间创建。
- **PATRONI_REPLICATION_SSLMODE**：（可选）映射到 [sslmode](https://www.postgresql.org/docs/current/libpq-connect.html#LIBPQ-CONNECT-SSLMODE) 连接参数，用于指定客户端与服务器的 TLS 协商模式。各模式详见 [PostgreSQL 文档](https://www.postgresql.org/docs/current/libpq-ssl.html#LIBPQ-SSL-SSLMODE-STATEMENTS)，默认模式为 `prefer`。
- **PATRONI_REPLICATION_SSLKEY**：（可选）映射到 [sslkey](https://www.postgresql.org/docs/current/libpq-connect.html#LIBPQ-CONNECT-SSLKEY) 连接参数，指定与客户端证书配套使用的私钥文件位置。
- **PATRONI_REPLICATION_SSLPASSWORD**：（可选）映射到 [sslpassword](https://www.postgresql.org/docs/current/libpq-connect.html#LIBPQ-CONNECT-SSLPASSWORD) 连接参数，指定 `PATRONI_REPLICATION_SSLKEY` 所指定私钥的密码。
- **PATRONI_REPLICATION_SSLCERT**：（可选）映射到 [sslcert](https://www.postgresql.org/docs/current/libpq-connect.html#LIBPQ-CONNECT-SSLCERT) 连接参数，指定客户端证书的文件位置。
- **PATRONI_REPLICATION_SSLROOTCERT**：（可选）映射到 [sslrootcert](https://www.postgresql.org/docs/current/libpq-connect.html#LIBPQ-CONNECT-SSLROOTCERT) 连接参数，指定包含一个或多个 CA 证书的文件位置，客户端用于验证服务器证书。
- **PATRONI_REPLICATION_SSLCRL**：（可选）映射到 [sslcrl](https://www.postgresql.org/docs/current/libpq-connect.html#LIBPQ-CONNECT-SSLCRL) 连接参数，指定包含证书吊销列表的文件位置。客户端将拒绝连接到证书出现在此列表中的任何服务器。
- **PATRONI_REPLICATION_SSLCRLDIR**：（可选）映射到 [sslcrldir](https://www.postgresql.org/docs/current/libpq-connect.html#LIBPQ-CONNECT-SSLCRLDIR) 连接参数，指定包含证书吊销列表文件的目录位置。客户端将拒绝连接到证书出现在此列表中的任何服务器。
- **PATRONI_REPLICATION_SSLNEGOTIATION**：（可选）映射到 [sslnegotiation](https://www.postgresql.org/docs/current/libpq-connect.html#LIBPQ-CONNECT-SSLNEGOTIATION) 连接参数，控制使用 SSL 时如何与服务器协商 SSL 加密。
- **PATRONI_REPLICATION_GSSENCMODE**：（可选）映射到 [gssencmode](https://www.postgresql.org/docs/current/libpq-connect.html#LIBPQ-CONNECT-GSSENCMODE) 连接参数，决定是否以及以何种优先级与服务器协商安全的 GSS TCP/IP 连接。
- **PATRONI_REPLICATION_CHANNEL_BINDING**：（可选）映射到 [channel_binding](https://www.postgresql.org/docs/current/libpq-connect.html#LIBPQ-CONNECT-CHANNEL-BINDING) 连接参数，控制客户端对通道绑定的使用。
- **PATRONI_SUPERUSER_USERNAME**：超级用户名，在初始化（initdb）期间设置，之后由 Patroni 用于连接 PostgreSQL，pg_rewind 也使用此用户。
- **PATRONI_SUPERUSER_PASSWORD**：超级用户密码，在初始化（initdb）期间设置。
- **PATRONI_SUPERUSER_SSLMODE**：（可选）映射到 [sslmode](https://www.postgresql.org/docs/current/libpq-connect.html#LIBPQ-CONNECT-SSLMODE) 连接参数，用于指定客户端与服务器的 TLS 协商模式。各模式详见 [PostgreSQL 文档](https://www.postgresql.org/docs/current/libpq-ssl.html#LIBPQ-SSL-SSLMODE-STATEMENTS)，默认模式为 `prefer`。
- **PATRONI_SUPERUSER_SSLKEY**：（可选）映射到 [sslkey](https://www.postgresql.org/docs/current/libpq-connect.html#LIBPQ-CONNECT-SSLKEY) 连接参数，指定与客户端证书配套使用的私钥文件位置。
- **PATRONI_SUPERUSER_SSLPASSWORD**：（可选）映射到 [sslpassword](https://www.postgresql.org/docs/current/libpq-connect.html#LIBPQ-CONNECT-SSLPASSWORD) 连接参数，指定 `PATRONI_SUPERUSER_SSLKEY` 所指定私钥的密码。
- **PATRONI_SUPERUSER_SSLCERT**：（可选）映射到 [sslcert](https://www.postgresql.org/docs/current/libpq-connect.html#LIBPQ-CONNECT-SSLCERT) 连接参数，指定客户端证书的文件位置。
- **PATRONI_SUPERUSER_SSLROOTCERT**：（可选）映射到 [sslrootcert](https://www.postgresql.org/docs/current/libpq-connect.html#LIBPQ-CONNECT-SSLROOTCERT) 连接参数，指定包含一个或多个 CA 证书的文件位置，客户端用于验证服务器证书。
- **PATRONI_SUPERUSER_SSLCRL**：（可选）映射到 [sslcrl](https://www.postgresql.org/docs/current/libpq-connect.html#LIBPQ-CONNECT-SSLCRL) 连接参数，指定包含证书吊销列表的文件位置。客户端将拒绝连接到证书出现在此列表中的任何服务器。
- **PATRONI_SUPERUSER_SSLCRLDIR**：（可选）映射到 [sslcrldir](https://www.postgresql.org/docs/current/libpq-connect.html#LIBPQ-CONNECT-SSLCRLDIR) 连接参数，指定包含证书吊销列表文件的目录位置。客户端将拒绝连接到证书出现在此列表中的任何服务器。
- **PATRONI_SUPERUSER_SSLNEGOTIATION**：（可选）映射到 [sslnegotiation](https://www.postgresql.org/docs/current/libpq-connect.html#LIBPQ-CONNECT-SSLNEGOTIATION) 连接参数，控制使用 SSL 时如何与服务器协商 SSL 加密。
- **PATRONI_SUPERUSER_GSSENCMODE**：（可选）映射到 [gssencmode](https://www.postgresql.org/docs/current/libpq-connect.html#LIBPQ-CONNECT-GSSENCMODE) 连接参数，决定是否以及以何种优先级与服务器协商安全的 GSS TCP/IP 连接。
- **PATRONI_SUPERUSER_CHANNEL_BINDING**：（可选）映射到 [channel_binding](https://www.postgresql.org/docs/current/libpq-connect.html#LIBPQ-CONNECT-CHANNEL-BINDING) 连接参数，控制客户端对通道绑定的使用。
- **PATRONI_REWIND_USERNAME**：（可选）`pg_rewind` 使用的用户名；在 PostgreSQL 11+ 的初始化期间创建，并授予所有必要的 [权限](https://www.postgresql.org/docs/11/app-pgrewind.html#id-1.9.5.8.8)。
- **PATRONI_REWIND_PASSWORD**：（可选）`pg_rewind` 使用的用户密码，在初始化期间创建。
- **PATRONI_REWIND_SSLMODE**：（可选）映射到 [sslmode](https://www.postgresql.org/docs/current/libpq-connect.html#LIBPQ-CONNECT-SSLMODE) 连接参数，用于指定客户端与服务器的 TLS 协商模式。各模式详见 [PostgreSQL 文档](https://www.postgresql.org/docs/current/libpq-ssl.html#LIBPQ-SSL-SSLMODE-STATEMENTS)，默认模式为 `prefer`。
- **PATRONI_REWIND_SSLKEY**：（可选）映射到 [sslkey](https://www.postgresql.org/docs/current/libpq-connect.html#LIBPQ-CONNECT-SSLKEY) 连接参数，指定与客户端证书配套使用的私钥文件位置。
- **PATRONI_REWIND_SSLPASSWORD**：（可选）映射到 [sslpassword](https://www.postgresql.org/docs/current/libpq-connect.html#LIBPQ-CONNECT-SSLPASSWORD) 连接参数，指定 `PATRONI_REWIND_SSLKEY` 所指定私钥的密码。
- **PATRONI_REWIND_SSLCERT**：（可选）映射到 [sslcert](https://www.postgresql.org/docs/current/libpq-connect.html#LIBPQ-CONNECT-SSLCERT) 连接参数，指定客户端证书的文件位置。
- **PATRONI_REWIND_SSLROOTCERT**：（可选）映射到 [sslrootcert](https://www.postgresql.org/docs/current/libpq-connect.html#LIBPQ-CONNECT-SSLROOTCERT) 连接参数，指定包含一个或多个 CA 证书的文件位置，客户端用于验证服务器证书。
- **PATRONI_REWIND_SSLCRL**：（可选）映射到 [sslcrl](https://www.postgresql.org/docs/current/libpq-connect.html#LIBPQ-CONNECT-SSLCRL) 连接参数，指定包含证书吊销列表的文件位置。客户端将拒绝连接到证书出现在此列表中的任何服务器。
- **PATRONI_REWIND_SSLCRLDIR**：（可选）映射到 [sslcrldir](https://www.postgresql.org/docs/current/libpq-connect.html#LIBPQ-CONNECT-SSLCRLDIR) 连接参数，指定包含证书吊销列表文件的目录位置。客户端将拒绝连接到证书出现在此列表中的任何服务器。
- **PATRONI_REWIND_SSLNEGOTIATION**：（可选）映射到 [sslnegotiation](https://www.postgresql.org/docs/current/libpq-connect.html#LIBPQ-CONNECT-SSLNEGOTIATION) 连接参数，控制使用 SSL 时如何与服务器协商 SSL 加密。
- **PATRONI_REWIND_GSSENCMODE**：（可选）映射到 [gssencmode](https://www.postgresql.org/docs/current/libpq-connect.html#LIBPQ-CONNECT-GSSENCMODE) 连接参数，决定是否以及以何种优先级与服务器协商安全的 GSS TCP/IP 连接。
- **PATRONI_REWIND_CHANNEL_BINDING**：（可选）映射到 [channel_binding](https://www.postgresql.org/docs/current/libpq-connect.html#LIBPQ-CONNECT-CHANNEL-BINDING) 连接参数，控制客户端对通道绑定的使用。

--------

## REST API

- **PATRONI_RESTAPI_CONNECT_ADDRESS**：访问 REST API 所用的 IP 地址和端口。
- **PATRONI_RESTAPI_LISTEN**：Patroni 监听的 IP 地址和端口，用于为 HAProxy 提供健康检查信息。
- **PATRONI_RESTAPI_USERNAME**：用于保护不安全 REST API 端点的 Basic-auth 用户名。
- **PATRONI_RESTAPI_PASSWORD**：用于保护不安全 REST API 端点的 Basic-auth 密码。
- **PATRONI_RESTAPI_CERTFILE**：PEM 格式证书文件。若未指定或留空，API 服务器将在无 SSL 的情况下运行。
- **PATRONI_RESTAPI_KEYFILE**：PEM 格式私钥文件。
- **PATRONI_RESTAPI_KEYFILE_PASSWORD**：解密 keyfile 的密码。
- **PATRONI_RESTAPI_CAFILE**：包含受信任 CA 证书的 CA_BUNDLE 文件，用于验证客户端证书。
- **PATRONI_RESTAPI_CIPHERS**：（可选）允许使用的密码套件（例如 "ECDHE-RSA-AES256-GCM-SHA384:DHE-RSA-AES256-GCM-SHA384:ECDHE-RSA-AES128-GCM-SHA256:DHE-RSA-AES128-GCM-SHA256:!SSLv1:!SSLv2:!SSLv3:!TLSv1:!TLSv1.1"）。
- **PATRONI_RESTAPI_VERIFY_CLIENT**：`none`（默认）、`optional` 或 `required`。`none`：不检查客户端证书；`required`：所有 REST API 调用均须提供客户端证书，证书签名验证通过即认证成功；`optional`：仅不安全的 REST API 端点需要客户端证书，且只对 `PUT`、`POST`、`PATCH` 和 `DELETE` 请求检查。
- **PATRONI_RESTAPI_ALLOWLIST**：（可选）允许调用不安全 REST API 端点的主机集合。单个元素可为主机名、IP 地址或 CIDR 网络地址，默认允许所有来源。若设置了 `allowlist` 或 `allowlist_include_members`，不在列表中的请求将被拒绝。
- **PATRONI_RESTAPI_ALLOWLIST_INCLUDE_MEMBERS**：（可选）设置为 `true` 时，允许从 DCS 中注册的其他集群成员（IP 地址或主机名取自成员的 `api_url`）访问不安全的 REST API 端点。注意：操作系统可能为出站连接使用不同的 IP 地址。
- **PATRONI_RESTAPI_HTTP_EXTRA_HEADERS**：（可选）允许 REST API 服务器在 HTTP 响应中附加额外的 HTTP 头信息。
- **PATRONI_RESTAPI_HTTPS_EXTRA_HEADERS**：（可选）启用 TLS 时，允许 REST API 服务器在 HTTP 响应中附加额外的 HTTPS 头信息，同时也会附加 `http_extra_headers` 中设置的头信息。
- **PATRONI_RESTAPI_REQUEST_QUEUE_SIZE**：（可选）Patroni REST API 使用的 TCP 套接字请求队列大小，队列满后后续请求将收到"Connection denied"错误，默认值为 5。
- **PATRONI_RESTAPI_SERVER_TOKENS**：（可选）`Server` HTTP 头的值。`Original`（默认）沿用原始行为，显示 BaseHTTP 和 Python 版本，例如 `BaseHTTP/0.6 Python/3.12.3`；`Minimal`：仅包含 Patroni 版本，例如 `Patroni/4.0.0`；`ProductOnly`：仅包含产品名称，例如 `Patroni`。

<div class="warning">

<div class="title">

Warning

</div>

- `PATRONI_RESTAPI_CONNECT_ADDRESS` 必须可从指定 Patroni 集群的所有节点访问。Patroni 在领导者竞选期间会使用该地址查找复制延迟最小的节点。
- 若启用了客户端证书验证（`PATRONI_RESTAPI_VERIFY_CLIENT` 设置为 `required`），还**必须**在 `PATRONI_CTL_CERTFILE`、`PATRONI_CTL_KEYFILE`、`PATRONI_CTL_KEYFILE_PASSWORD` 中提供**有效的客户端证书**，否则 Patroni 将无法正常工作。

</div>

--------

## CTL

- **PATRONICTL_CONFIG_FILE**：（可选）配置文件的位置。
- **PATRONI_CTL_USERNAME**：（可选）访问受保护 REST API 端点的 Basic-auth 用户名。若未提供， [`patronictl`](/docs/patroni/patronictl#patronictl) 将使用 REST API "username" 参数中的值。
- **PATRONI_CTL_PASSWORD**：（可选）访问受保护 REST API 端点的 Basic-auth 密码。若未提供， [`patronictl`](/docs/patroni/patronictl#patronictl) 将使用 REST API "password" 参数中的值。
- **PATRONI_CTL_INSECURE**：（可选）允许在不验证 SSL 证书的情况下连接 REST API。
- **PATRONI_CTL_CACERT**：（可选）包含受信任 CA 证书的 CA_BUNDLE 文件或目录，用于验证 REST API SSL 证书。若未提供， [`patronictl`](/docs/patroni/patronictl#patronictl) 将使用 REST API "cafile" 参数中的值。
- **PATRONI_CTL_CERTFILE**：（可选）PEM 格式的客户端证书文件。
- **PATRONI_CTL_KEYFILE**：（可选）PEM 格式的客户端私钥文件。
- **PATRONI_CTL_KEYFILE_PASSWORD**：（可选）解密客户端 keyfile 的密码。
