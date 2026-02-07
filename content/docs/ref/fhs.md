---
title: 文件结构
weight: 470
description: Pigsty 的文件系统结构是如何设计与组织的，以及各个模块使用的目录结构。
icon: fa-solid fa-folder-tree
module: [PIGSTY]
categories: [参考]
---



----------------

## Pigsty FHS

Pigsty 的主目录默认放置于 `~/pigsty`，该目录下的文件结构如下所示：

```bash
#------------------------------------------------------------------------------
# pigsty
#  ^-----@app                    # 额外的示例应用资源
#  ^-----@bin                    # bin 脚本
#  ^-----@docs                   # 文档（可docsify化）
#  ^-----@files                  # ansible 文件资源
#            ^-----@victoria     # Victoria 规则与运维脚本（bin/rules）
#            ^-----@grafana      # grafana 仪表盘
#            ^-----@postgres     # /pg/bin/ 脚本
#            ^-----@migration    # pgsql 迁移任务定义
#            ^-----@pki          # 自签名 CA 和证书
#  ^-----@roles                  # ansible 剧本实现
#  ^-----@templates              # ansible 模板文件
#  ^-----@vagrant                # Vagrant 沙箱虚拟机定义模板
#  ^-----@terraform              # Terraform 云虚拟机申请模板
#  ^-----configure               # 配置向导脚本
#  ^-----ansible.cfg             # ansible 默认配置文件
#  ^-----pigsty.yml              # pigsty 默认配置文件
#  ^-----*.yml                   # ansible 剧本
#------------------------------------------------------------------------------
# /infra -> /data/infra          # infra 运行时目录软链接
# /data/infra                    # root:infra 0771
#  ^-----@metrics                # VictoriaMetrics TSDB 数据
#  ^-----@logs                   # VictoriaLogs 数据
#  ^-----@traces                 # VictoriaTraces 数据
#  ^-----@alertmgr               # AlertManager 数据
#  ^-----@rules                  # 规则定义（含 agent.yml）
#  ^-----@targets                # FileSD 监控目标
#  ^-----@dashboards             # Grafana 仪表盘定义
#  ^-----@datasources            # Grafana 数据源定义
#  ^-----prometheus.yml          # Victoria 的 Prometheus 兼容配置
#------------------------------------------------------------------------------
```



----------------

## CA FHS

Pigsty 的 [**自签名 CA**](/docs/concept/sec/ca) 位于 Pigsty 主目录下的 `files/pki/`。

**你必须妥善保管 CA 的密钥文件**：`files/pki/ca/ca.key`，该密钥是在 `deploy.yml` 或 `infra.yml` 的 `ca` 角色负责生成的。



```bash
# pigsty/files/pki                           # (local_user) 0755
#  ^-----@ca                                 # (local_user) 0700
#         ^-----@ca.key                      # 0600，非常重要：保守其秘密
#         ^-----@ca.crt                      # 0644，非常重要：在所有地方都受信任
#  ^-----@csr                                # (local_user) 0755，签名请求 csr
#  ^-----@misc                               # (local_user) 0755，杂项证书，已签发证书
#  ^-----@etcd                               # (local_user) 0755，etcd 服务器证书
#  ^-----@minio                              # (local_user) 0755，minio 服务器证书
#  ^-----@nginx                              # (local_user) 0755，nginx SSL 证书
#  ^-----@infra                              # (local_user) 0755，infra 客户端证书
#  ^-----@pgsql                              # (local_user) 0755，pgsql 服务器证书
#  ^-----@mongo                              # (local_user) 0755，mongodb/ferretdb 服务器证书
#  ^-----@mysql                              # (local_user) 0755，mysql 服务器证书（占位符）
```

被 Pigsty 所管理的节点将安装以下证书文件：

```
/etc/pki/ca.crt                             # root:root 0644，所有节点都添加的根证书
/etc/pki/ca-trust/source/anchors/ca.crt     # 软链接到系统受信任的锚点
```

所有 infra 节点都会有以下证书：

```
/etc/pki/infra.crt                          # root:infra 0644，infra 节点证书
/etc/pki/infra.key                          # root:infra 0640，infra 节点密钥
```

当您的管理节点出现故障时，`files/pki` 目录与 `pigsty.yml` 文件应当在备份的管理节点上可用。你可以用 `rsync` 做到这一点。

```bash
# run on meta-1, rsync to meta2
cd ~/pigsty;
rsync -avz ./ meta-2:~/pigsty  
```

----------------

## INFRA FHS

`infra` 角色会创建 `infra_data`（默认 `/data/infra`）并建立 `/infra -> /data/infra` 软链接。`/data/infra` 的权限为 `root:infra 0771`，子目录默认权限为 `*:infra 0750`，覆盖项如下：

```bash
# /infra -> /data/infra
# /data/infra                              # root:infra 0771
#  ^-----@pgadmin                          # 5050:5050 0700
#  ^-----@alertmgr                         # prometheus:infra 0700
#  ^-----@conf                             # root:infra 0750
#            ^-----patronictl.yml          # root:admin 0640
#  ^-----@tmp                              # root:infra 0750
#  ^-----@hosts                            # dnsmasq:dnsmasq 0755（DNS 记录）
#            ^-----default                 # root:root 0644
#  ^-----@datasources                      # root:infra 0750
#            ^-----*.json                  # 0600（register 生成）
#  ^-----@dashboards                       # grafana:infra 0750
#  ^-----@metrics                          # victoria:infra 0750
#  ^-----@logs                             # victoria:infra 0750
#  ^-----@traces                           # victoria:infra 0750
#  ^-----@bin                              # victoria:infra 0750
#            ^-----check|new|reload|status # root:infra 0755
#  ^-----@rules                            # victoria:infra 0750
#            ^-----agent.yml               # victoria:infra 0644
#            ^-----infra.yml               # victoria:infra 0644
#            ^-----node.yml                # victoria:infra 0644
#            ^-----pgsql.yml               # victoria:infra 0644
#            ^-----redis.yml               # victoria:infra 0644
#            ^-----etcd.yml                # victoria:infra 0644
#            ^-----minio.yml               # victoria:infra 0644
#            ^-----kafka.yml               # victoria:infra 0644
#            ^-----mysql.yml               # victoria:infra 0644
#  ^-----@targets                          # victoria:infra 0750
#            ^-----@infra                  # infra 组件目标（文件 0640）
#            ^-----@node                   # 节点目标（文件 0640）
#            ^-----@ping                   # ping 目标（文件 0640）
#            ^-----@etcd                   # etcd 目标（文件 0640）
#            ^-----@pgsql                  # pgsql 目标（文件 0640）
#            ^-----@pgrds                  # pgrds 目标（文件 0640）
#            ^-----@redis                  # redis 目标（文件 0640）
#            ^-----@minio                  # minio 目标（文件 0640）
#            ^-----@mongo                  # mongo 目标（文件 0640）
#            ^-----@juice                  # juicefs 目标（文件 0640）
#            ^-----@mysql                  # mysql 目标（文件 0640）
#            ^-----@kafka                  # kafka 目标（文件 0640）
#            ^-----@docker                 # docker 目标（文件 0640）
#            ^-----@patroni                # patroni SSL 目标（文件 0640）
#  ^-----prometheus.yml                    # victoria:infra 0644
```

上述结构由以下实现生成：`roles/infra/tasks/dir.yml`、`roles/infra/tasks/victoria.yml`、`roles/infra/tasks/register.yml`、`roles/infra/tasks/dns.yml`、`roles/infra/tasks/env.yml`。



----------------

## NODE FHS

节点的数据目录由参数 [`node_data`](/docs/node/param#node_data) 指定，默认为 `/data`，由 `root:root` 持有，权限为 `0755`。

每个组件的默认数据目录都位于这个数据库目录下，如下所示：

```bash
/data                                 # root:root 0755
#  ^-----@postgres                    # postgres:postgres 0700（默认 pg_fs_main）
#  ^-----@backups                     # postgres:postgres 0700（默认 pg_fs_backup）
#  ^-----@redis                       # redis:redis 0700（多实例共用）
#  ^-----@minio                       # minio:minio 0750（单机单盘模式）
#  ^-----@etcd                        # etcd:etcd 0700（etcd_data）
#  ^-----@infra                       # root:infra 0771（infra 模块数据目录）
#  ^-----@docker                      # root:root 0755（Docker 数据目录）
#  ^-----@...                         # 其他组件的数据目录
```



----------------

## Victoria FHS

监控配置已经从旧的 `/etc/prometheus` 目录布局迁移为 `/infra` 运行时布局。主配置模板位于 [`roles/infra/templates/victoria/prometheus.yml`](https://github.com/pgsty/pigsty/blob/main/roles/infra/templates/victoria/prometheus.yml)，渲染结果为 `/infra/prometheus.yml`。

`files/victoria/bin/*` 与 `files/victoria/rules/*` 会被同步到 `/infra/bin/` 与 `/infra/rules/`，各模块再向 `/infra/targets/*` 注册 FileSD 目标。

```bash
# /infra
#  ^-----prometheus.yml              # Victoria 主配置（Prometheus 兼容格式）0644
#  ^-----@bin                        # 工具脚本（check/new/reload/status）0755
#  ^-----@rules                      # 记录与告警规则（*.yml 0644）
#            ^-----agent.yml         # Agent 预聚合规则
#            ^-----infra.yml         # infra 规则和告警
#            ^-----etcd.yml          # etcd 规则和告警
#            ^-----node.yml          # node 规则和告警
#            ^-----pgsql.yml         # pgsql 规则和告警
#            ^-----redis.yml         # redis 规则和告警
#            ^-----minio.yml         # minio 规则和告警
#            ^-----kafka.yml         # kafka 规则和告警
#            ^-----mysql.yml         # mysql 规则和告警
#  ^-----@targets                    # FileSD 服务发现目标（*.yml 0640）
#            ^-----@infra            # infra 静态目标
#            ^-----@node             # node 静态目标
#            ^-----@pgsql            # pgsql 静态目标
#            ^-----@pgrds            # pgsql 远程 RDS 目标
#            ^-----@redis            # redis 静态目标
#            ^-----@minio            # minio 静态目标
#            ^-----@mongo            # mongo 静态目标
#            ^-----@mysql            # mysql 静态目标
#            ^-----@etcd             # etcd 静态目标
#            ^-----@ping             # ping 静态目标
#            ^-----@kafka            # kafka 静态目标
#            ^-----@juice            # juicefs 静态目标
#            ^-----@docker           # docker 静态目标
#            ^-----@patroni          # patroni 静态目标（启用 SSL 时）
# /etc/default/vmetrics              # vmetrics 启动参数（victoria:infra 0644）
# /etc/default/vlogs                 # vlogs 启动参数（victoria:infra 0644）
# /etc/default/vtraces               # vtraces 启动参数（victoria:infra 0644）
# /etc/default/vmalert               # vmalert 启动参数（victoria:infra 0644）
# /etc/alertmanager.yml              # 告警组件主配置（prometheus:infra 0644）
# /etc/default/alertmanager          # 告警组件环境变量（prometheus:infra 0640）
# /etc/blackbox.yml                  # 黑盒探测主配置（prometheus:infra 0644）
# /etc/default/blackbox_exporter     # 黑盒探测环境变量（prometheus:infra 0644）
```



----------------

## Postgres FHS


以下参数与PostgreSQL数据库目录结构相关:

* [**`pg_dbsu_home`**](/docs/pgsql/param#pg_dbsu_home)： Postgres 默认用户的家目录，默认为`/var/lib/pgsql`
* [**`pg_bin_dir`**](/docs/pgsql/param#pg_bin_dir)： Postgres二进制目录，默认为`/usr/pgsql/bin/`
* [**`pg_data`**](/docs/pgsql/param#pg_data)：Postgres数据库目录，默认为`/pg/data`
* [**`pg_fs_main`**](/docs/pgsql/param#pg_fs_main)：Postgres主数据目录，默认为`/data/postgres`
* [**`pg_fs_backup`**](/docs/pgsql/param#pg_fs_backup)：Postgres 备份盘挂载点，默认为 `/data/backups`（可选，也可以选择备份到主数据盘上的子目录）
* **`pg_cluster_dir`**：派生变量，`{{ pg_fs_main }}/{{ pg_cluster }}-{{ pg_version }}`
* **`pg_backup_dir`**：派生变量，`{{ pg_fs_backup }}/{{ pg_cluster }}-{{ pg_version }}`


```yaml
#--------------------------------------------------------------#
# 工作假设:
#   {{ pg_fs_main   }} 主数据目录，默认位置：`/data/postgres` [SSD]
#   {{ pg_fs_backup }} 备份数据盘，默认位置：`/data/backups`  [HDD]
#--------------------------------------------------------------#
# 默认配置（pg_cluster=pg-test, pg_version=18）:
#     pg_fs_main = /data/postgres      高速SSD
#     pg_fs_backup = /data/backups     廉价HDD (可选)
#
#     /pg        -> /data/postgres/pg-test-18
#     /pg/data   -> /data/postgres/pg-test-18/data
#     /pg/backup -> /data/backups/pg-test-18/backup
#--------------------------------------------------------------#
- name: create pgsql directories
  tags: pg_dir
  become: true
  block:

    - name: create pgsql directories
      file: path={{ item.path }} state=directory owner={{ item.owner|default(pg_dbsu) }} group={{ item.group|default('postgres') }} mode={{ item.mode }}
      with_items:
        - { path: "{{ pg_fs_main }}"            ,mode: "0700" }
        - { path: "{{ pg_fs_backup }}"          ,mode: "0700" }
        - { path: "{{ pg_cluster_dir }}"        ,mode: "0700" }
        - { path: "{{ pg_cluster_dir }}/bin"    ,mode: "0700" }
        - { path: "{{ pg_cluster_dir }}/log"    ,mode: "0750" }
        - { path: "{{ pg_cluster_dir }}/tmp"    ,mode: "0700" }
        - { path: "{{ pg_cluster_dir }}/cert"   ,mode: "0700" }
        - { path: "{{ pg_cluster_dir }}/conf"   ,mode: "0700" }
        - { path: "{{ pg_cluster_dir }}/data"   ,mode: "0700" }
        - { path: "{{ pg_cluster_dir }}/spool"  ,mode: "0700" }
        - { path: "{{ pg_backup_dir }}/backup"  ,mode: "0700" }
        - { path: "/var/run/postgresql"         ,owner: root, group: root, mode: "0755" }

    - name: link pgsql directories
      file: src={{ item.src }} dest={{ item.dest }} state=link
      with_items:
        - { src: "{{ pg_backup_dir }}/backup" ,dest: "{{ pg_cluster_dir }}/backup" }
        - { src: "{{ pg_cluster_dir }}"       ,dest: "/pg" }
```


**数据文件结构**

```bash
# 真实目录
{{ pg_fs_main }}     /data/postgres                    # postgres:postgres 0700，主数据目录
{{ pg_cluster_dir }} /data/postgres/pg-test-18         # postgres:postgres 0700，集群目录
                     /data/postgres/pg-test-18/bin     # postgres:postgres 0700（脚本文件 root:postgres 0755）
                     /data/postgres/pg-test-18/log     # postgres:postgres 0750，日志目录
                     /data/postgres/pg-test-18/tmp     # postgres:postgres 0700，临时文件
                     /data/postgres/pg-test-18/cert    # postgres:postgres 0700，证书
                     /data/postgres/pg-test-18/conf    # postgres:postgres 0700，配置索引
                     /data/postgres/pg-test-18/data    # postgres:postgres 0700，主数据目录
                     /data/postgres/pg-test-18/spool   # postgres:postgres 0700，pgBackRest spool
                     /data/postgres/pg-test-18/backup  # -> /data/backups/pg-test-18/backup

{{ pg_fs_backup  }}  /data/backups                     # postgres:postgres 0700，可选备份盘目录/挂载点
{{ pg_backup_dir }}  /data/backups/pg-test-18          # postgres:postgres 0700，集群备份目录
                     /data/backups/pg-test-18/backup   # postgres:postgres 0700，实际备份位置

# 软链接
/pg             ->   /data/postgres/pg-test-18         # pg 根软链接
/pg/data        ->   /data/postgres/pg-test-18/data    # pg 数据目录
/pg/backup      ->   /data/backups/pg-test-18/backup   # pg 备份目录
```



**二进制文件结构**

在 EL 兼容发行版上（使用yum），PostgreSQL 默认安装位置为

```bash
/usr/pgsql-${pg_version}/
```

Pigsty 会创建一个名为 `/usr/pgsql` 的软连接，指向由 [`pg_version`](/docs/pgsql/param#pg_version) 参数指定的实际版本，例如

```bash
/usr/pgsql -> /usr/pgsql-18
```

因此，默认的 [`pg_bin_dir`](/docs/pgsql/param#pg_bin_dir) 是 `/usr/pgsql/bin/`，而该路径会被添加至系统的 `PATH` 环境变量中，定义文件为：`/etc/profile.d/pgsql.sh`.

```bash
export PATH="/usr/pgsql/bin:/pg/bin:$PATH"
export PGHOME=/usr/pgsql
export PGDATA=/pg/data
```

在 Ubuntu/Debian 上，PostgreSQL Deb 包的默认安装位置是：

```bash
/usr/lib/postgresql/${pg_version}/bin
```



----------------

## Pgbouncer FHS

Pgbouncer 使用与 `{{ pg_dbsu }}`（默认为 `postgres`）相同的用户运行，配置文件位于`/etc/pgbouncer`。

* `pgbouncer.ini`：连接池主配置文件（`postgres:postgres 0640`）
* `database.txt`：定义连接池中的数据库（`postgres:postgres 0600`）
* `useropts.txt`：业务用户连接参数（`postgres:postgres 0600`）
* `userlist.txt`：由 `/pg/bin/pgb-user` 维护的用户密码文件
* `pgb_hba.conf`：连接池访问控制文件（`postgres:postgres 0600`）

```bash
/etc/pgbouncer/                # postgres:postgres 0750
/etc/pgbouncer/pgbouncer.ini   # postgres:postgres 0640
/etc/pgbouncer/database.txt    # postgres:postgres 0600
/etc/pgbouncer/useropts.txt    # postgres:postgres 0600
/etc/pgbouncer/userlist.txt    # postgres:postgres (由 pgb-user 维护)
/etc/pgbouncer/pgb_hba.conf    # postgres:postgres 0600
/pg/log/pgbouncer              # postgres:postgres 0750
/var/run/postgresql            # {{ pg_dbsu }}:postgres 0755（tmpfiles 维护）
```




----------------

## Redis FHS

Pigsty 提供了对 Redis 部署与监控的基础支持。

Redis 二进制通常由系统包管理器安装（服务调用路径为 `/bin/*`，在多数发行版上由 `/usr/bin/*` 软链接兼容）：

```bash
redis-server    
redis-cli       
redis-sentinel  
redis-check-rdb 
redis-check-aof 
redis-benchmark 
/usr/libexec/redis-shutdown
```

对于一个名为 `redis-test-1-6379` 的 Redis 实例，与其相关的资源如下所示：

```bash
/usr/lib/systemd/system/redis-test-1-6379.service     # root:root 0644（Debian系为 /lib/systemd/system）
/etc/redis/                                           # redis:redis 0700
/etc/redis/redis-test-1-6379.conf                     # redis:redis 0700
/data/redis/                                          # redis:redis 0700
/data/redis/redis-test-1-6379                         # redis:redis 0700
/data/redis/redis-test-1-6379/redis-test-1-6379.rdb   # RDB 文件
/data/redis/redis-test-1-6379/redis-test-1-6379.aof   # AOF 文件
/var/log/redis/                                       # redis:redis 0700
/var/log/redis/redis-test-1-6379.log                  # 日志
/var/run/redis/                                       # redis:redis 0700（开机 tmpfiles 为 0755）
/var/run/redis/redis-test-1-6379.pid                  # PID
```

对于 Ubuntu / Debian 而言，systemd 服务的默认目录不是 `/usr/lib/systemd/system/` 而是 `/lib/systemd/system/`
