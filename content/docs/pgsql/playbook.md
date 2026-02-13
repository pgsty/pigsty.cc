---
title: 预置剧本
weight: 2010
description: 如何使用 ansible 剧本来管理 PostgreSQL 集群
icon: fa-solid fa-scroll
module: [PGSQL]
categories: [任务]
---


> Pigsty提供了一系列剧本，用于集群上下线扩缩容，用户/数据库管理，监控、备份恢复或迁移已有实例。

| 剧本                                           | 功能                           |
|----------------------------------------------|------------------------------|
| [`pgsql.yml`](#pgsqlyml)                     | 初始化 PostgreSQL 集群或添加新的从库     |
| [`pgsql-rm.yml`](#pgsql-rmyml)               | 移除 PostgreSQL 集群，或移除某个实例     |
| [`pgsql-user.yml`](#pgsql-useryml)           | 在现有的 PostgreSQL 集群中添加新的业务用户  |
| [`pgsql-db.yml`](#pgsql-dbyml)               | 在现有的 PostgreSQL 集群中添加新的业务数据库 |
| [`pgsql-monitor.yml`](#pgsql-monitoryml)     | 将远程 PostgreSQL 实例纳入监控中       |
| [`pgsql-migration.yml`](#pgsql-migrationyml) | 为现有的 PostgreSQL 集群生成迁移手册和脚本  |
| [`pgsql-pitr.yml`](#pgsql-pitryml)           | 执行 PostgreSQL 时间点恢复 (PITR)   |


----------------

## 保护机制

使用 [`PGSQL`](/docs/pgsql) 剧本时需要**特别注意**，剧本 [`pgsql.yml`](#pgsqlyml) 与 [`pgsql-rm.yml`](#pgsql-rmyml) 使用不当会有误删数据库的风险！

* 在执行时添加 `-l` 参数，限制命令执行的对象范围，并确保自己在正确的目标上执行正确的任务。
* 限制范围通常以一个数据库集群为宜，使用不带参数的 `pgsql.yml` 在生产环境中是一个高危操作，务必三思而后行。

出于防止误删的目的，Pigsty 的 PGSQL 模块提供了防误删保险，由 [`pg_safeguard`](/docs/pgsql/param#pg_safeguard) 参数控制。
当 `pg_safeguard` 设置为 `true` 时，[`pgsql-rm.yml`](#pgsql-rmyml) 剧本会立即中止执行，防止误删数据库集群。

```bash
# 将会中止执行，保护数据安全
./pgsql-rm.yml -l pg-test

# 通过命令行参数强制覆盖保护开关
./pgsql-rm.yml -l pg-test -e pg_safeguard=false
```

除了 `pg_safeguard` 外，[`pgsql-rm.yml`](#pgsql-rmyml) 还提供了更细粒度的控制参数：

| 参数 | 默认值 | 说明 |
|------|--------|------|
| [`pg_safeguard`](/docs/pgsql/param#pg_safeguard) | `false` | 防误删保险，设为 `true` 时剧本会中止执行 |
| `pg_rm_data` | `true` | 是否移除 PostgreSQL 数据目录 |
| `pg_rm_backup` | `true` | 是否移除 pgBackRest 备份数据（仅主库移除时生效） |
| `pg_rm_pkg` | `false` | 是否卸载 PostgreSQL 软件包 |

这些参数允许你根据实际需求精确控制移除行为：

```bash
# 移除集群但保留数据目录（仅停止服务）
./pgsql-rm.yml -l pg-test -e pg_rm_data=false

# 移除集群但保留备份数据
./pgsql-rm.yml -l pg-test -e pg_rm_backup=false

# 移除集群并卸载软件包
./pgsql-rm.yml -l pg-test -e pg_rm_pkg=true
```


----------------

## `pgsql.yml`

剧本 [`pgsql.yml`](https://github.com/pgsty/pigsty/blob/main/pgsql.yml) 用于初始化 PostgreSQL 集群或添加新的从库。

下面是使用此剧本初始化沙箱环境中 PostgreSQL 集群的过程：

[![asciicast](https://asciinema.org/a/566417.svg)](https://asciinema.org/a/566417)


**基本用法**

```bash
./pgsql.yml -l pg-meta            # 初始化集群 pg-meta
./pgsql.yml -l 10.10.10.13        # 初始化/添加实例 10.10.10.13
./pgsql.yml -l pg-test -t pg_service  # 刷新集群 pg-test 的服务
./pgsql.yml -l pg-test -t pg_hba,pgbouncer_hba,pgbouncer_reload -e pg_reload=true  # 重载HBA规则
```

**包装脚本**

Pigsty 提供了便捷的包装脚本简化常见操作：

```bash
bin/pgsql-add pg-meta             # 初始化 pgsql 集群 pg-meta
bin/pgsql-add 10.10.10.10         # 初始化 pgsql 实例 10.10.10.10
bin/pgsql-add pg-test 10.10.10.13 # 添加 10.10.10.13 到集群 pg-test（自动刷新服务）
bin/pgsql-svc pg-test             # 刷新 pg-test 的 haproxy 服务（成员变更时使用）
bin/pgsql-hba pg-test             # 重载 pg-test 的 pg/pgb HBA 规则
```


**任务列表**

本剧本包含以下子任务：

```yaml
# pg_install              : 安装 postgres 软件包与扩展
#   - pg_dbsu             : 设置 postgres 超级用户
#     - pg_dbsu_create    : 创建 dbsu 用户
#     - pg_dbsu_sudo      : 配置 dbsu sudo 权限
#     - pg_ssh            : 交换 dbsu SSH 密钥
#   - pg_pkg              : 安装 postgres 软件包
#     - pg_pre            : 安装前置任务
#     - pg_ext            : 安装 postgres 扩展包
#     - pg_post           : 安装后置任务
#   - pg_link             : 将 pgsql 版本 bin 链接到 /usr/pgsql
#   - pg_path             : 将 pgsql bin 添加到系统路径
#   - pg_dir              : 创建 postgres 目录并设置 FHS
#   - pg_bin              : 同步 /pg/bin 脚本
#   - pg_alias            : 配置 pgsql/psql 别名
#   - pg_dummy            : 创建 dummy 占位文件
#
# pg_bootstrap            : 引导 postgres 集群
#   - pg_config           : 生成 postgres 配置
#     - pg_conf           : 生成 patroni 配置
#     - pg_key            : 生成 pgsodium 密钥
#   - pg_cert             : 为 postgres 签发证书
#     - pg_cert_private   : 检查 pg 私钥是否存在
#     - pg_cert_issue     : 签发 pg 服务端证书
#     - pg_cert_copy      : 复制密钥与证书到 pg 节点
#   - pg_launch           : 启动 patroni 主库与从库
#     - pg_watchdog       : 授予 postgres watchdog 权限
#     - pg_primary        : 启动 patroni/postgres 主库
#     - pg_init           : 使用角色/模板初始化 pg 集群
#     - pg_pass           : 将 .pgpass 文件写入 pg 主目录
#     - pg_replica        : 启动 patroni/postgres 从库
#     - pg_hba            : 生成 pg HBA 规则
#     - patroni_reload    : 重新加载 patroni 配置
#     - pg_patroni        : 必要时暂停或移除 patroni
#
# pg_provision            : 创建 postgres 业务用户与数据库
#   - pg_user             : 创建 postgres 业务用户
#     - pg_user_config    : 渲染创建用户的 sql
#     - pg_user_create    : 在 postgres 上创建用户
#   - pg_db               : 创建 postgres 业务数据库
#     - pg_db_drop        : 删除数据库（state=absent/recreate时）
#     - pg_db_config      : 渲染创建数据库的 sql
#     - pg_db_create      : 在 postgres 上创建数据库
#
# pg_backup               : 初始化 postgres PITR 备份
#   - pgbackrest          : 配置 pgbackrest 备份
#     - pgbackrest_config : 生成 pgbackrest 配置
#     - pgbackrest_init   : 初始化 pgbackrest 仓库
#     - pgbackrest_backup : 引导后进行初始备份
#
# pg_crontab              : 配置 postgres dbsu 定时任务
#
# pg_access               : 初始化 postgres 服务访问层
#   - pgbouncer           : 部署 pgbouncer 连接池
#     - pgbouncer_dir     : 创建 pgbouncer 目录
#     - pgbouncer_config  : 生成 pgbouncer 配置
#       - pgbouncer_hba   : 生成 pgbouncer hba 配置
#       - pgbouncer_user  : 生成 pgbouncer 用户列表
#     - pgbouncer_launch  : 启动 pgbouncer 服务
#     - pgbouncer_reload  : 重载 pgbouncer 配置
#   - pg_vip              : 使用 vip-manager 绑定 VIP 到主库
#     - pg_vip_config     : 生成 vip-manager 配置
#     - pg_vip_launch     : 启动 vip-manager 绑定 vip
#   - pg_dns              : 将 DNS 名称注册到基础设施 dnsmasq
#     - pg_dns_ins        : 注册 pg 实例名称
#     - pg_dns_cls        : 注册 pg 集群名称
#   - pg_service          : 使用 haproxy 暴露 pgsql 服务
#     - pg_service_config : 为 pg 服务生成本地 haproxy 配置
#     - pg_service_reload : 使用 haproxy 暴露 postgres 服务
#
# pg_monitor              : 设置 pgsql 监控并注册到基础设施
#   - pg_exporter         : 配置并启动 pg_exporter
#   - pgbouncer_exporter  : 配置并启动 pgbouncer_exporter
#   - pgbackrest_exporter : 配置并启动 pgbackrest_exporter
#   - pg_register         : 将 pgsql 注册到监控/日志/数据源
#     - add_metrics       : 将 pg 注册为 victoria 监控目标
#     - add_logs          : 将 pg 注册为 vector 日志来源
#     - add_ds            : 将 pg 数据库注册为 grafana 数据源
```

**以下管理任务使用到了此剧本**

- [创建集群](/docs/pgsql/admin/cluster#创建集群)
- [添加实例](/docs/pgsql/admin/cluster#扩容集群)
- [重载服务](/docs/pgsql/admin/cluster#刷新服务)
- [重载HBA](/docs/pgsql/admin/cluster#刷新hba)

**注意事项**

* 单独针对某一集群从库执行此剧本时，用户应当确保 **集群主库已经完成初始化！**
* 扩容完成后，您需要 [重载服务](/docs/pgsql/admin/cluster#刷新服务) 与 [重载HBA](/docs/pgsql/admin/cluster#刷新hba)，包装脚本 `bin/pgsql-add` 会自动完成这些任务。

集群扩容时，如果 Patroni 拉起从库的时间过长，Ansible 剧本可能会因为超时而中止：
* 典型错误信息为：`wait for postgres/patroni replica` 任务执行很长时间后中止
* 但制作从库的进程会继续，例如制作从库需超过1天的场景，后续处理请参考 [FAQ](/docs/pgsql/faq)：制作从库失败。



----------------

## `pgsql-rm.yml`

剧本 [`pgsql-rm.yml`](https://github.com/pgsty/pigsty/blob/main/pgsql-rm.yml) 用于移除 PostgreSQL 集群，或移除某个实例。

下面是使用此剧本移除沙箱环境中 PostgreSQL 集群的过程：

[![asciicast](https://asciinema.org/a/566418.svg)](https://asciinema.org/a/566418)


**基本用法**

```bash
./pgsql-rm.yml -l pg-test          # 移除集群 pg-test
./pgsql-rm.yml -l 10.10.10.13      # 移除实例 10.10.10.13
```

**命令行参数**

本剧本可以使用以下命令行参数控制其行为：

```bash
./pgsql-rm.yml -l pg-test          # 移除集群 pg-test
    -e pg_safeguard=false          # 防误删保险，默认关闭，开启时需强制覆盖
    -e pg_rm_data=true             # 是否一并移除 PostgreSQL 数据目录，默认移除
    -e pg_rm_backup=true           # 是否一并移除 pgBackRest 备份（仅主库），默认移除
    -e pg_rm_pkg=false             # 是否卸载 PostgreSQL 软件包，默认不卸载
```

**包装脚本**

```bash
bin/pgsql-rm pg-meta               # 移除 pgsql 集群 pg-meta
bin/pgsql-rm pg-test 10.10.10.13   # 从集群 pg-test 移除实例 10.10.10.13
```

**任务列表**

本剧本包含以下子任务：

```yaml
# pg_safeguard           : 如果 pg_safeguard 启用则中止执行
#
# pg_monitor             : 从监控系统移除注册
#   - pg_deregister      : 从基础设施移除 pg 监控目标
#     - rm_metrics       : 从 prometheus 移除监控目标
#     - rm_ds            : 从 grafana 移除数据源
#     - rm_logs          : 从 vector 移除日志目标
#   - pg_exporter        : 移除 pg_exporter
#   - pgbouncer_exporter : 移除 pgbouncer_exporter
#   - pgbackrest_exporter: 移除 pgbackrest_exporter
#
# pg_access              : 移除 pg 服务访问层
#   - dns                : 移除 pg DNS 记录
#   - vip                : 移除 vip-manager
#   - pg_service         : 从 haproxy 移除 pg 服务
#   - pgbouncer          : 移除 pgbouncer 连接中间件
#
# pg_crontab             : 移除 postgres dbsu 定时任务
#
# postgres               : 移除 postgres 实例
#   - pg_replica         : 移除所有从库
#   - pg_primary         : 移除主库
#   - pg_meta            : 从 etcd 移除元数据
#
# pg_backup              : 移除备份仓库（使用 pg_rm_backup=false 禁用）
# pg_data                : 移除 postgres 数据（使用 pg_rm_data=false 禁用）
# pg_pkg                 : 卸载 pg 软件包（使用 pg_rm_pkg=true 启用）
#   - pg_ext             : 单独卸载 postgres 扩展
```

**以下管理任务使用到了此剧本**

- [移除实例](/docs/pgsql/admin/cluster#缩容集群)
- [下线集群](/docs/pgsql/admin/cluster#销毁集群)

**注意事项**

* **请不要直接对还有从库的集群主库单独执行此剧本**，否则抹除主库后，其余从库会自动触发高可用自动故障切换。总是先下线所有从库后，再下线主库，当一次性下线整个集群时不需要操心此问题。
* **实例下线后请刷新集群服务**，当您从集群中下线掉某一个从库实例时，它仍然存留于在负载均衡器的配置文件中。因为健康检查无法通过，所以下线后的实例不会对集群产生影响。但您应当在恰当的时间点 [重载服务](/docs/pgsql/admin/cluster#刷新服务)，确保生产环境与配置清单的一致性。



----------------

## `pgsql-user.yml`

剧本 [`pgsql-user.yml`](https://github.com/pgsty/pigsty/blob/main/pgsql-user.yml) 用于在现有的 PostgreSQL 集群中添加新的业务用户。

**基本用法**

```bash
./pgsql-user.yml -l pg-meta -e username=dbuser_meta
```

**包装脚本**

```bash
bin/pgsql-user pg-meta dbuser_meta  # 在集群 pg-meta 上创建用户 dbuser_meta
```

**工作流程**

1. 在配置清单中定义用户: `all.children.<pg_cluster>.vars.pg_users[i]`
2. 执行剧本时指定集群和用户名: `pgsql-user.yml -l <pg_cluster> -e username=<name>`

剧本会：
1. 在 `/pg/tmp/pg-user-{{ user.name }}.sql` 生成用户创建 SQL
2. 在集群主库上执行用户创建/更新 SQL
3. 若启用 `pgbouncer_enabled: true`，更新 `/etc/pgbouncer/userlist.txt` 与 `useropts.txt`
4. 重载 pgbouncer 使配置生效

**用户定义示例**

```yaml
pg_users:
  - name: dbuser_meta               # 必填，用户名是唯一必须的字段
    password: DBUser.Meta           # 可选，密码可以是 scram-sha-256 哈希或明文
    login: true                     # 可选，是否可登录，默认 true
    superuser: false                # 可选，是否超级用户，默认 false
    createdb: false                 # 可选，是否可创建数据库，默认 false
    createrole: false               # 可选，是否可创建角色，默认 false
    inherit: true                   # 可选，是否继承权限，默认 true
    replication: false              # 可选，是否可复制，默认 false
    bypassrls: false                # 可选，是否绕过 RLS，默认 false
    pgbouncer: true                 # 可选，是否添加到 pgbouncer 用户列表，默认 false
    connlimit: -1                   # 可选，连接数限制，-1 表示无限制
    expire_in: 3650                 # 可选，N 天后过期（覆盖 expire_at）
    expire_at: '2030-12-31'         # 可选，指定过期日期
    comment: pigsty admin user      # 可选，用户注释
    roles: [dbrole_admin]           # 可选，所属角色
    parameters: {}                  # 可选，角色级参数
    pool_mode: transaction          # 可选，pgbouncer 用户级连接池模式
    pool_connlimit: -1              # 可选，用户级最大连接数（映射为 max_user_connections）
```

详情请参考：[管理SOP：创建用户](/docs/pgsql/admin/user#创建用户)


----------------

## `pgsql-db.yml`

剧本 [`pgsql-db.yml`](https://github.com/pgsty/pigsty/blob/main/pgsql-db.yml) 用于在现有的 PostgreSQL 集群中添加新的业务数据库。

**基本用法**

```bash
./pgsql-db.yml -l pg-meta -e dbname=meta
```

**包装脚本**

```bash
bin/pgsql-db pg-meta meta  # 在集群 pg-meta 上创建数据库 meta
```

**工作流程**

1. 在配置清单中定义数据库: `all.children.<pg_cluster>.vars.pg_databases[i]`
2. 执行剧本时指定集群和数据库名: `pgsql-db.yml -l <pg_cluster> -e dbname=<name>`

剧本会：
1. 在 `/pg/tmp/pg-db-{{ database.name }}.sql` 生成数据库创建 SQL
2. 在集群主库上执行数据库创建/更新 SQL
3. 如果 `db.register_datasource` 为 true，将数据库注册为 grafana 数据源
4. 更新 `/etc/pgbouncer/database.txt` 并重载 pgbouncer

**数据库定义示例**

```yaml
pg_databases:
  - name: meta                      # 必填，数据库名是唯一必须的字段
    baseline: cmdb.sql              # 可选，数据库初始化 SQL 文件路径
    pgbouncer: true                 # 可选，是否添加到 pgbouncer，默认 true
    schemas: [pigsty]               # 可选，额外创建的 schema
    extensions:                     # 可选，要安装的扩展
      - { name: postgis, schema: public }
      - { name: timescaledb }
    comment: pigsty meta database   # 可选，数据库注释
    owner: postgres                 # 可选，数据库所有者
    template: template1             # 可选，模板数据库
    encoding: UTF8                  # 可选，字符编码
    locale: C                       # 可选，区域设置
    tablespace: pg_default          # 可选，默认表空间
    allowconn: true                 # 可选，是否允许连接
    revokeconn: false               # 可选，是否回收 public 连接权限
    register_datasource: true       # 可选，是否注册到 grafana 数据源
    connlimit: -1                   # 可选，连接数限制
    pool_auth_user: dbuser_meta     # 可选，认证查询使用的用户（配合 pgbouncer_auth_query）
    pool_mode: transaction          # 可选，pgbouncer 连接池模式
    pool_size: 64                   # 可选，pgbouncer 默认池大小
    pool_reserve: 32                # 可选，pgbouncer 保留池大小
    pool_size_min: 0                # 可选，pgbouncer 最小池大小
    pool_connlimit: 100             # 可选，pgbouncer 最大数据库连接数
```

详情请参考：[管理SOP：创建数据库](/docs/pgsql/admin/db#创建数据库)


----------------

## `pgsql-monitor.yml`

剧本 [`pgsql-monitor.yml`](https://github.com/pgsty/pigsty/blob/main/pgsql-monitor.yml) 用于将远程 PostgreSQL 实例纳入 Pigsty 监控体系。

**基本用法**

```bash
./pgsql-monitor.yml -e clsname=pg-foo  # 监控远程集群 pg-foo
```

**包装脚本**

```bash
bin/pgmon-add pg-foo              # 监控一个远程 pgsql 集群 pg-foo
bin/pgmon-add pg-foo pg-bar       # 同时监控多个集群
```

**配置方式**

首先需要在 `infra` 组变量中定义 `pg_exporters`：

```yaml
infra:
  hosts:
    10.10.10.10:
      pg_exporters:  # 列出所有远程实例，分配唯一的未使用本地端口
        20001: { pg_cluster: pg-foo, pg_seq: 1, pg_host: 10.10.10.10 }
        20002: { pg_cluster: pg-foo, pg_seq: 2, pg_host: 10.10.10.11 }
```

**架构示意**

```
     ------ infra ------
     |                 |
     |   prometheus    |            v---- pg-foo-1 ----v
     |       ^         |  metrics   |         ^        |
     |   pg_exporter <-|------------|----  postgres    |
     |   (port: 20001) |            | 10.10.10.10:5432 |
     |       ^         |            ^------------------^
     |       ^         |                      ^
     |       ^         |            v---- pg-foo-2 ----v
     |       ^         |  metrics   |         ^        |
     |   pg_exporter <-|------------|----  postgres    |
     |   (port: 20002) |            | 10.10.10.11:5433 |
     -------------------            ^------------------^
```

**可配置参数**

```yaml
pg_exporter_config: pg_exporter.yml    # pg_exporter 配置文件名
pg_exporter_cache_ttls: '1,10,60,300'  # pg_exporter 采集器 TTL 阶段
pg_exporter_port: 9630                 # pg_exporter 监听端口
pg_exporter_params: 'sslmode=disable'  # DSN 额外 URL 参数
pg_exporter_url: ''                    # 直接覆盖自动生成的 DSN
pg_exporter_auto_discovery: true       # 是否启用自动数据库发现
pg_exporter_exclude_database: 'template0,template1,postgres'  # 排除的数据库
pg_exporter_include_database: ''       # 仅包含的数据库
pg_exporter_connect_timeout: 200       # 连接超时（毫秒）
pg_monitor_username: dbuser_monitor    # 监控用户名
pg_monitor_password: DBUser.Monitor    # 监控密码
```

**远程数据库配置**

远程 PostgreSQL 实例需要创建监控用户：

```sql
CREATE USER dbuser_monitor;
COMMENT ON ROLE dbuser_monitor IS 'system monitor user';
ALTER USER dbuser_monitor PASSWORD 'DBUser.Monitor';
GRANT pg_monitor TO dbuser_monitor;
CREATE EXTENSION IF NOT EXISTS "pg_stat_statements" WITH SCHEMA "monitor";
```

**限制**

* 仅 postgres 指标可用
* node、pgbouncer、patroni、haproxy 指标不可用

详情请参考：[管理SOP：监控现有PG](/docs/pgsql/monitor#监控rds)


----------------

## `pgsql-migration.yml`

剧本 [`pgsql-migration.yml`](https://github.com/pgsty/pigsty/blob/main/pgsql-migration.yml) 用于为现有的 PostgreSQL 集群生成基于逻辑复制的零停机迁移手册和脚本。

**基本用法**

```bash
./pgsql-migration.yml -e@files/migration/pg-meta.yml
```

**工作流程**

1. 定义迁移任务配置文件（如 `files/migration/pg-meta.yml`）
2. 执行剧本生成迁移手册与脚本
3. 按照手册逐步执行脚本完成迁移

**迁移任务定义示例**

```yaml
# files/migration/pg-meta.yml
context_dir: ~/migration           # 迁移手册与脚本输出目录
src_cls: pg-meta                   # 源集群名称（必填）
src_db: meta                       # 源数据库名称（必填）
src_ip: 10.10.10.10                # 源集群主库 IP（必填）
dst_cls: pg-test                   # 目标集群名称（必填）
dst_db: test                       # 目标数据库名称（必填）
dst_ip: 10.10.10.11                # 目标集群主库 IP（必填）

# 可选参数
pg_dbsu: postgres
pg_replication_username: replicator
pg_replication_password: DBUser.Replicator
pg_admin_username: dbuser_dba
pg_admin_password: DBUser.DBA
pg_monitor_username: dbuser_monitor
pg_monitor_password: DBUser.Monitor
```

详情请参考：[管理SOP：迁移数据库集群](/docs/pgsql/migration/)


----------------

## `pgsql-pitr.yml`

剧本 [`pgsql-pitr.yml`](https://github.com/pgsty/pigsty/blob/main/pgsql-pitr.yml) 用于执行 PostgreSQL 时间点恢复 (Point-In-Time Recovery)。

**基本用法**

```bash
# 恢复到最新状态（WAL 归档流末端）
./pgsql-pitr.yml -l pg-meta -e '{"pg_pitr": {}}'

# 恢复到指定时间点
./pgsql-pitr.yml -l pg-meta -e '{"pg_pitr": {"time": "2025-07-13 10:00:00+00"}}'

# 恢复到指定 LSN
./pgsql-pitr.yml -l pg-meta -e '{"pg_pitr": {"lsn": "0/4001C80"}}'

# 恢复到指定事务 ID
./pgsql-pitr.yml -l pg-meta -e '{"pg_pitr": {"xid": "250000"}}'

# 恢复到命名还原点
./pgsql-pitr.yml -l pg-meta -e '{"pg_pitr": {"name": "some_restore_point"}}'

# 从其他集群备份恢复
./pgsql-pitr.yml -l pg-test -e '{"pg_pitr": {"cluster": "pg-meta"}}'
```

**PITR 任务参数**

```yaml
pg_pitr:                           # 定义 PITR 任务
  cluster: "pg-meta"               # 源集群名称（恢复其他集群的备份时使用）
  type: latest                     # 恢复目标类型: time, xid, name, lsn, immediate, latest
  time: "2025-01-01 10:00:00+00"   # 恢复目标：时间点
  name: "some_restore_point"       # 恢复目标：命名还原点
  xid: "100000"                    # 恢复目标：事务 ID
  lsn: "0/3000000"                 # 恢复目标：日志序列号
  set: latest                      # 从哪个备份集恢复，默认 latest
  timeline: latest                 # 目标时间线，可以是整数，默认 latest
  exclusive: false                 # 是否排除目标点，默认 false
  action: pause                    # 恢复后动作: pause, promote, shutdown
  archive: false                   # 是否保留归档设置，默认 false
  backup: false                    # 恢复前是否备份现有数据到 /pg/data-backup？默认 false
  db_include: []                   # 仅包含这些数据库
  db_exclude: []                   # 排除这些数据库
  link_map: {}                     # 表空间链接映射
  process: 4                       # 并行恢复进程数
  repo: {}                         # 恢复源仓库配置
  data: /pg/data                   # 恢复数据目录
  port: 5432                       # 恢复实例监听端口
```

**任务列表**

本剧本包含以下子任务：

```yaml
# down                 : 停止 HA 并关闭 patroni 和 postgres
#   - pause            : 暂停 patroni 自动故障转移
#   - stop             : 停止 patroni 和 postgres 服务
#     - stop_patroni   : 停止 patroni 服务
#     - stop_postgres  : 停止 postgres 服务
#
# pitr                 : 执行 PITR 恢复过程
#   - config           : 生成 pgbackrest 配置和恢复脚本
#   - backup           : 执行可选的原始数据备份
#   - restore          : 运行 pgbackrest restore 命令
#   - recovery         : 启动 postgres 并完成恢复
#   - verify           : 验证恢复的集群控制数据
#
# up                   : 启动 postgres/patroni 并恢复 HA
#   - etcd             : 启动前清理 etcd 元数据
#   - start            : 启动 patroni 和 postgres 服务
#     - start_postgres : 启动 postgres 服务
#     - start_patroni  : 启动 patroni 服务
#   - resume           : 恢复 patroni 自动故障转移
```

**恢复目标类型说明**

| 类型 | 说明 | 示例 |
|------|------|------|
| `latest` | 恢复到 WAL 归档流末端（最新状态） | `{"pg_pitr": {}}` |
| `time` | 恢复到指定时间点 | `{"pg_pitr": {"time": "2025-07-13 10:00:00"}}` |
| `xid` | 恢复到指定事务 ID | `{"pg_pitr": {"xid": "250000"}}` |
| `name` | 恢复到命名还原点 | `{"pg_pitr": {"name": "before_ddl"}}` |
| `lsn` | 恢复到指定 LSN | `{"pg_pitr": {"lsn": "0/4001C80"}}` |
| `immediate` | 恢复到一致性状态后立即停止 | `{"pg_pitr": {"type": "immediate"}}` |

详情请参考：[备份恢复教程](/docs/pgsql/backup/restore/)
