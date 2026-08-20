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

```filetree {title="~/pigsty 源码树"}
- app/   {open=false}
  - 应用模板资源
- bin/   {open=false}
  - 管理与运维脚本
- files/
  - victoria/   {open=false}
    - 规则与运维脚本
  - grafana/   {open=false}
    - Grafana 仪表盘
  - postgres/   {open=false}
    - PostgreSQL 管理脚本
  - migration/   {open=false}
    - 数据迁移任务定义
  - pki/   {open=false}
    - 自签名 CA 与证书
- roles/   {open=false}
  - Ansible 角色实现
- templates/   {open=false}
  - Ansible 模板文件
- vagrant/   {open=false}
  - Vagrant 沙箱定义
- terraform/   {open=false}
  - Terraform 云资源模板
- configure
- ansible.cfg
- pigsty.yml
- *.yml
```

`/infra` 是 `/data/infra` 的运行时软链接，集中存放可观测性数据与生成的配置：

```filetree {title="/infra → /data/infra"}
- metrics · VictoriaMetrics TSDB 数据/   {open=false}
- logs · VictoriaLogs 数据/   {open=false}
- traces · VictoriaTraces 数据/   {open=false}
- alertmgr · AlertManager 数据/   {open=false}
- rules · 规则定义（含 agent.yml）/   {open=false}
- targets · FileSD 监控目标/   {open=false}
- dashboards · Grafana 仪表盘定义/   {open=false}
- datasources · Grafana 数据源定义/   {open=false}
- prometheus.yml · Victoria 的 Prometheus 兼容配置
```



----------------

## CA FHS

Pigsty 的 [**自签名 CA**](/docs/concept/sec/ca) 位于 Pigsty 主目录下的 `files/pki/`。

**你必须妥善保管 CA 的密钥文件**：`files/pki/ca/ca.key`，该密钥是在 `deploy.yml` 或 `infra.yml` 的 `ca` 角色负责生成的。



```filetree {title="pigsty/files/pki · (local_user) 0755"}
- ca · (local_user) 0700/
  - ca.key · 0600，务必保密
  - ca.crt · 0644，所有节点均信任
- csr · (local_user) 0755，证书签名请求/   {open=false}
- misc · (local_user) 0755，杂项及已签发证书/   {open=false}
- etcd · (local_user) 0755，etcd 服务器证书/   {open=false}
- minio · (local_user) 0755，minio 服务器证书/   {open=false}
- nginx · (local_user) 0755，Nginx SSL 证书/   {open=false}
- infra · (local_user) 0755，infra 客户端证书/   {open=false}
- pgsql · (local_user) 0755，pgsql 服务器证书/   {open=false}
- kafka · (local_user) 0755，Kafka 服务器证书/   {open=false}
- mysql · (local_user) 0755，MySQL 服务器证书/   {open=false}
```

被 Pigsty 所管理的节点将安装以下证书文件：

```filetree {title="受管节点根证书"}
- etc/
  - pki/
    - ca.crt · root:root 0644，所有节点的根证书
    - ca-trust/source/anchors/
      - ca.crt · EL 系统受信任锚点
- usr/local/share/ca-certificates/
  - ca.crt · Debian/Ubuntu 系统受信任锚点
```

所有 infra 节点都会有以下证书：

```filetree {title="infra 节点证书"}
- etc/pki/
  - infra.crt · root:infra 0644，infra 节点证书
  - infra.key · root:infra 0640，infra 节点密钥
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

```filetree {title="/infra → /data/infra · root:infra 0771"}
- pgadmin · 5050:5050 0700/   {open=false}
- alertmgr · prometheus:infra 0700/   {open=false}
- conf · root:infra 0750/
  - patronictl.yml · root:admin 0640
- tmp · root:infra 0750/   {open=false}
- hosts · dnsmasq:dnsmasq 0755，DNS 记录/
  - default · root:root 0644
- datasources · root:infra 0750/
  - *.json · 0600，由 register 生成
- dashboards · grafana:infra 0750/   {open=false}
- metrics · victoria:infra 0750/   {open=false}
- logs · victoria:infra 0750/   {open=false}
- traces · victoria:infra 0750/   {open=false}
- bin · victoria:infra 0750/
  - check · root:infra 0755
  - new · root:infra 0755
  - reload · root:infra 0755
  - status · root:infra 0755
- rules · victoria:infra 0750/
  - agent.yml · victoria:infra 0644
  - infra.yml · victoria:infra 0644
  - node.yml · victoria:infra 0644
  - pgsql.yml · victoria:infra 0644
  - redis.yml · victoria:infra 0644
  - etcd.yml · victoria:infra 0644
  - minio.yml · victoria:infra 0644
  - kafka.yml · victoria:infra 0644
  - mysql.yml · victoria:infra 0644
- targets · victoria:infra 0750/
  - infra · infra 组件目标，文件 0640/   {open=false}
  - node · 节点目标，文件 0640/   {open=false}
  - ping · ping 目标，文件 0640/   {open=false}
  - etcd · etcd 目标，文件 0640/   {open=false}
  - pgsql · pgsql 目标，文件 0640/   {open=false}
  - pgrds · pgrds 目标，文件 0640/   {open=false}
  - redis · redis 目标，文件 0640/   {open=false}
  - minio · minio 目标，文件 0640/   {open=false}
  - juice · JuiceFS 目标，文件 0640/   {open=false}
  - mysql · MySQL 目标，文件 0640/   {open=false}
  - kafka · Kafka 目标，文件 0640/   {open=false}
  - docker · Docker 目标，文件 0640/   {open=false}
  - patroni · Patroni SSL 目标，文件 0640/   {open=false}
- prometheus.yml · victoria:infra 0644
```

上述结构由以下实现生成：`roles/infra/tasks/dir.yml`、`roles/infra/tasks/victoria.yml`、`roles/infra/tasks/register.yml`、`roles/infra/tasks/dns.yml`、`roles/infra/tasks/env.yml`。



----------------

## NODE FHS

节点的数据目录由参数 [`node_data`](/docs/node/param#node_data) 指定，默认为 `/data`，由 `root:root` 持有，权限为 `0755`。

多数核心组件的默认数据目录位于这个目录下；个别试点模块使用自身固定目录，如原生 MySQL 8.4 当前使用 `/var/lib/mysql`：

```filetree {title="/data · root:root 0755"}
- postgres · postgres:postgres 0700，默认 pg_fs_main/   {open=false}
- backups · postgres:postgres 0700，默认 pg_fs_backup/   {open=false}
- redis · redis:redis 0700，多实例共用/   {open=false}
- minio · minio:minio 0750，单机单盘模式/   {open=false}
- etcd · etcd:etcd 0700，etcd_data/   {open=false}
- infra · root:infra 0771，infra 模块数据目录/   {open=false}
- docker · root:root 0755，Docker 数据目录/   {open=false}
- kafka · kafka:kafka 0700，kafka_data/   {open=false}
- … · 其他组件的数据目录/   {open=false}
```

### HAProxy

Pigsty 使用自带的 systemd 单元启动 HAProxy，并将主配置与服务片段分开管理：

```filetree {title="HAProxy 文件布局"}
- etc/
  - systemd/system/
    - haproxy.service · Pigsty 渲染的 systemd 单元
  - haproxy/
    - haproxy.cfg · HAProxy 主配置
    - conf.d/
      - *.cfg · 节点与 PostgreSQL 服务片段
  - default/
    - haproxy · 可选的用户环境文件，Pigsty 不主动创建
```

如需在 `/etc/default/haproxy` 中追加启动参数，请使用 `EXTRAOPTS`，并保留默认的 `-S /run/haproxy-master.sock`；配置文件已经由 systemd 单元通过 `-f` 显式加载，不要再把 `-f` 写入 `EXTRAOPTS`。



----------------

## Victoria FHS

监控配置已经从旧的 `/etc/prometheus` 目录布局迁移为 `/infra` 运行时布局。主配置模板位于 [`roles/infra/templates/victoria/prometheus.yml`](https://github.com/pgsty/pigsty/blob/main/roles/infra/templates/victoria/prometheus.yml)，渲染结果为 `/infra/prometheus.yml`。

`files/victoria/bin/*` 与 `files/victoria/rules/*` 会被同步到 `/infra/bin/` 与 `/infra/rules/`，各模块再向 `/infra/targets/*` 注册 FileSD 目标。

```filetree {title="Victoria 与监控组件文件布局"}
- infra/
  - prometheus.yml · Victoria 主配置，Prometheus 兼容格式，0644
  - bin · 工具脚本，0755/
    - check
    - new
    - reload
    - status
  - rules · 记录与告警规则，*.yml 0644/
    - agent.yml · Agent 预聚合规则
    - infra.yml · infra 规则和告警
    - etcd.yml · etcd 规则和告警
    - node.yml · node 规则和告警
    - pgsql.yml · pgsql 规则和告警
    - redis.yml · redis 规则和告警
    - minio.yml · minio 规则和告警
    - kafka.yml · Kafka 规则和告警
    - mysql.yml · MySQL 规则和告警
  - targets · FileSD 服务发现目标，*.yml 0640/
    - infra · infra 静态目标/   {open=false}
    - node · node 静态目标/   {open=false}
    - pgsql · pgsql 静态目标/   {open=false}
    - pgrds · pgsql 远程 RDS 目标/   {open=false}
    - redis · redis 静态目标/   {open=false}
    - minio · minio 静态目标/   {open=false}
    - mysql · MySQL 静态目标/   {open=false}
    - etcd · etcd 静态目标/   {open=false}
    - ping · ping 静态目标/   {open=false}
    - kafka · Kafka 静态目标/   {open=false}
    - juice · JuiceFS 静态目标/   {open=false}
    - docker · Docker 静态目标/   {open=false}
    - patroni · Patroni 静态目标，启用 SSL 时/   {open=false}
- etc/
  - default/
    - vmetrics · victoria:infra 0644
    - vlogs · victoria:infra 0644
    - vtraces · victoria:infra 0644
    - vmalert · victoria:infra 0644
    - alertmanager · prometheus:infra 0640
    - blackbox_exporter · prometheus:infra 0644
  - alertmanager.yml · prometheus:infra 0644
  - blackbox.yml · prometheus:infra 0644
```

Pigsty 自行渲染的 INFRA 单元统一位于 `/etc/systemd/system/`，包括 `vmetrics`、`vlogs`、`vtraces`、`vmalert`、`alertmanager`、`blackbox_exporter`、`nginx_exporter` 与 `dnsmasq`；发行版软件包自带的单元目录不是这些角色的写入目标。



----------------

## Postgres FHS


以下参数和内部变量均与 PostgreSQL 数据库目录结构相关：

* [**`pg_dbsu_home`**](/docs/pgsql/param#pg_dbsu_home)： Postgres 默认用户的家目录，默认为 `/var/lib/pgsql`
* [**`pg_bin_dir`**](/docs/pgsql/param#pg_bin_dir)： Postgres 二进制目录，默认为 `/usr/pgsql/bin/`
* [**`pg_fs_main`**](/docs/pgsql/param#pg_fs_main)：Postgres 主数据目录，默认为 `/data/postgres`
* [**`pg_fs_backup`**](/docs/pgsql/param#pg_fs_backup)：Postgres 备份盘挂载点，默认为 `/data/backups`（可选，也可以选择备份到主数据盘上的子目录）
* [**`pg_data`**](/docs/pgsql/param#pg_data)：内部变量，固定表示 Postgres 数据目录软链 `/pg/data`
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

```filetree {title="PostgreSQL 数据目录（pg-test，PostgreSQL 18）"}
- data/
  - postgres · postgres:postgres 0700，pg_fs_main/
    - pg-test-18 · postgres:postgres 0700，pg_cluster_dir/
      - bin · postgres:postgres 0700，脚本为 root:postgres 0755/   {open=false}
      - log · postgres:postgres 0750，日志目录/   {open=false}
      - tmp · postgres:postgres 0700，临时文件/   {open=false}
      - cert · postgres:postgres 0700，证书/   {open=false}
      - conf · postgres:postgres 0700，配置索引/   {open=false}
      - data · postgres:postgres 0700，主数据目录/   {open=false}
      - spool · postgres:postgres 0700，pgBackRest spool/   {open=false}
      - backup → /data/backups/pg-test-18/backup/   {open=false}
  - backups · postgres:postgres 0700，pg_fs_backup/
    - pg-test-18 · postgres:postgres 0700，pg_backup_dir/
      - backup · postgres:postgres 0700，实际备份位置/   {open=false}
- pg → /data/postgres/pg-test-18/
  - data → /data/postgres/pg-test-18/data/   {open=false}
  - backup → /data/backups/pg-test-18/backup/   {open=false}
```



**二进制文件结构**

在 EL 兼容发行版上（使用 yum），PostgreSQL 默认安装位置为

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

Pigsty 渲染的 PostgreSQL 运行单元同样统一位于 `/etc/systemd/system/`，主要包括 `patroni.service`、`postgres.service`、`pgbouncer.service`、`pg_exporter.service`、`pgbackrest_exporter.service`、`pgbouncer_exporter.service`，以及启用 VIP 时的 `vip-manager.service`。



----------------

## Pgbouncer FHS

Pgbouncer 使用与 `{{ pg_dbsu }}`（默认为 `postgres`）相同的用户运行，配置文件位于 `/etc/pgbouncer`。

```filetree {title="PgBouncer 文件布局"}
- etc/pgbouncer · postgres:postgres 0750/
  - pgbouncer.ini · postgres:postgres 0640，连接池主配置
  - database.txt · postgres:postgres 0600，连接池数据库
  - useropts.txt · postgres:postgres 0600，业务用户连接参数
  - userlist.txt · postgres:postgres，由 /pg/bin/pgb-user 维护
  - pgb_hba.conf · postgres:postgres 0600，访问控制
- pg/log/pgbouncer · postgres:postgres 0750/   {open=false}
- var/run/postgresql · pg_dbsu:postgres 0755，由 tmpfiles 维护/   {open=false}
```




----------------

## Object Storage FHS

MINIO 模块当前只部署 Silo，但继续使用 `minio_*` 参数与目录命名保持兼容：

```filetree {title="Silo 文件布局"}
- etc/
  - default/
    - silo · root:minio 0640，服务环境变量
  - systemd/system/
    - silo.service · root:root 0644，Pigsty 渲染的单元
- data/minio · minio:minio 0750，默认数据目录/   {open=false}
- infra/targets/minio/
  - <cluster>-<seq>.yml · victoria:infra 0640，FileSD 目标
- home/minio/.mcli/
  - config.json · mcli 客户端别名，执行用户家目录亦会写入
```

Silo 的证书位于 `/home/minio/.minio/certs/`。模块名、角色参数、数据目录和 FileSD 路径仍使用 `MINIO` / `minio_*` 兼容命名。


----------------

## Redis FHS

Pigsty 使用同一套目录与实例命名管理 Redis 或 Valkey。

服务单元会按 `redis_type` 调用对应二进制（`/bin/*` 在多数发行版上与 `/usr/bin/*` 兼容）：

```bash
/bin/redis-server  /bin/redis-cli    # redis_type: redis
/bin/valkey-server /bin/valkey-cli   # redis_type: valkey
```

对于一个名为 `redis-test-1-6379` 的 Redis 实例，与其相关的资源如下所示：

```filetree {title="Redis 实例 redis-test-1-6379"}
- etc/
  - systemd/system/
    - redis-test-1-6379.service · root:root 0644，Pigsty 渲染
    - redis_exporter.service · root:root 0644，Pigsty 渲染
  - redis · redis:redis 0700/
    - redis-test-1-6379.conf · redis:redis 0600
- data/redis · redis:redis 0700/
  - redis-test-1-6379 · redis:redis 0700/
    - redis-test-1-6379.rdb · RDB 文件
    - redis-test-1-6379.aof · AOF 文件
- var/log/redis · redis:redis 0700/
  - redis-test-1-6379.log · 实例日志
- var/run/redis · redis:redis 0700，开机时 tmpfiles 为 0755/
  - redis-test-1-6379.pid · PID 文件
```

Pigsty 渲染的 Redis/Valkey 实例与 exporter 单元统一放在 `/etc/systemd/system/`，实例单元使用 `Type=notify`；软件包自带的单元可能仍位于发行版目录，但不是角色写入的位置。
