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
  - 管理与运维脚本（如 `node-add`、`pgsql-add`、`vault-add`、`vault-rm` 等）
- conf/
  - meta.yml
  - … · 其他单节点模板
  - fork/   {open=false}
    - 内核分支模板（pgsql、mssql、ivory 等）
  - ha/   {open=false}
    - 高可用拓扑模板
  - app/   {open=false}
    - 应用模板
  - demo/   {open=false}
    - 演示模板
  - build/   {open=false}
    - 多平台构建清单
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
  - OpenTofu 云资源模板（兼容 Terraform）
- configure
- ansible.cfg
- pigsty.yml
- deploy.yml / infra.yml / node.yml / etcd.yml / vault.yml / minio.yml / pgsql.yml / …
- *-rm.yml · 各模块移除剧本（如 `pgsql-rm.yml`、`vault-rm.yml`、`mysql-rm.yml` 等）
```

内核分支模板统一位于 `conf/fork/` 目录下，完整模板清单详见 [**配置模板**](/docs/conf/)。

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
- vault · (local_user) 0700，OpenBao 解封密钥、初始化凭据、备份与服务器证书/
  - unseal.key · 0600，32 字节静态解封密钥，务必保密
  - init.json · 0600，初始化根令牌与恢复材料
  - backup.token · 0600，快照备份专用令牌
  - backup/ · 0700，回收至控制机的快照备份
  - <vault_instance>.{key,crt} · 0600/0644，OpenBao 服务器证书
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
- pgadmin · 5050:5050 0700/
  - servers.json · 5050:5050 0600，pgAdmin 服务器列表
  - pgpass · 5050:5050 0600，pgAdmin 连接口令文件
- alertmgr · prometheus:infra 0700/   {open=false}
- conf · root:infra 0750/
  - patronictl.yml · root:admin 0640
- tmp · root:infra 0750/   {open=false}
- hosts · dnsmasq:dnsmasq 0755，DNS 记录/
  - default · root:root 0644
- datasources · root:infra 0750/
  - *.json · 0600，由 register 生成
- dashboards · root:infra 0750/   {open=false}
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
  - vault.yml · victoria:infra 0644
  - minio.yml · victoria:infra 0644
  - kafka.yml · victoria:infra 0644
  - mysql.yml · victoria:infra 0644
- targets · victoria:infra 0750/
  - infra · infra 组件目标，文件 0640/   {open=false}
  - node · 节点目标，文件 0640/   {open=false}
  - ping · ping 目标，文件 0640/   {open=false}
  - etcd · etcd 目标，文件 0640/   {open=false}
  - vault · OpenBao 目标，文件 0640/   {open=false}
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

当通过 `pgsql-monitor.yml`（`roles/pg_exporters`）在 INFRA 节点部署远程 PostgreSQL / RDS 监控采集器时，还会在 INFRA 节点上创建 `/etc/pg_exporter/`（`prometheus:infra 0755`），按单元存放 `/etc/pg_exporter/<unit>.yml`（`0644`）。该目录仅由远程监控角色使用；PGSQL 数据库节点本地的 `pg_exporter` 直接使用文件 `/etc/pg_exporter.yml`。

Certbot 集成还会写入 `/etc/letsencrypt/renewal-hooks/deploy/10-reload-nginx`（`0755`），在证书续签完成后重载 Nginx。

----------------

## NODE FHS

节点的数据目录由参数 [`node_data`](/docs/node/param#node_data) 指定，默认为 `/data`，由 `root:root` 持有，权限为 `0755`。

各模块的默认数据与备份目录均统一规划在 `/data` 下：

```filetree {title="/data · root:root 0755"}
- postgres · postgres:postgres 0700，默认 pg_fs_main/   {open=false}
- backups · postgres:postgres 0700，默认 pg_fs_backup（MySQL 本地备份默认位于 /data/backups/mysql）/   {open=false}
- vault · openbao:openbao 0700，默认 vault_data（含 raft/ 0700 与 backup/ root:root 0700）/   {open=false}
- redis · redis:redis 0700，多实例共用/   {open=false}
- minio · minio:minio 0750，单机单盘模式/   {open=false}
- etcd · etcd:etcd 0700，etcd_data/   {open=false}
- infra · root:infra 0771，infra 模块数据目录/   {open=false}
- docker · root:root 0755，Docker 数据目录/   {open=false}
- kafka · kafka:kafka 0700，kafka_data/   {open=false}
- mysql · mysql:mysql 0750，默认 mysql_data（原生 MySQL 8.4 数据目录）/   {open=false}
- juice · root:root 0755，默认 juice_cache/   {open=false}
- … · 其他组件的数据目录/   {open=false}
```

此外，`node_monitor` 角色默认创建 `/var/lib/node_exporter/textfile`（`root:root 0755`）并挂载给 `node_exporter` 的 Textfile Collector，供各模块（如 VAULT 的 `vault.prom`、MYSQL 的 `mysql.prom`）输出本地任务与备份指标。

### Chrony 与 tuned

Chrony 使用操作系统原生配置路径：EL 为 `/etc/chrony.conf`，Debian / Ubuntu 为 `/etc/chrony/chrony.conf`。tuned 的自定义配置目录由 `node_tuned_profile_dir` 决定：EL 10、Debian 13、Ubuntu 26 使用 `/etc/tuned/profiles`，其余当前支持平台使用 `/etc/tuned`。

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
    - vault.yml · OpenBao 规则和告警
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
    - vault · OpenBao 静态目标/   {open=false}
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
        - { path: "/var/run/postgresql"         ,mode: "0755" }
        - { path: "/etc/patroni"                ,mode: "0700" }
        - { path: "/etc/pgbackrest"             ,mode: "0750" }
        - { path: "/etc/pgbouncer"              ,mode: "0750" }

    - name: link pgsql directories
      file: src={{ item.src }} dest={{ item.dest }} state=link
      with_items:
        - { src: "{{ pg_backup_dir }}/backup" ,dest: "{{ pg_cluster_dir }}/backup" }
        - { src: "{{ pg_cluster_dir }}"       ,dest: "/pg" }
```

其中 `/etc/pgbackrest` 与 `/etc/pgbouncer` 目录均归属 `{{ pg_dbsu }}:postgres`，权限为 `0750`；备份主配置 `/etc/pgbackrest/pgbackrest.conf` 权限为 `0640`。本地数据库监控采集器的配置文件直接写入 `/etc/pg_exporter.yml`（不再在 PG 节点创建 `/etc/pg_exporter` 子目录）。


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
  - userlist.txt · postgres:postgres 0600，由 /pg/bin/pgb-user 维护
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


----------------

## Vault FHS

VAULT 模块在操作系统层运行 OpenBao 服务（`openbao.service`），节点与管理节点上的目录结构如下：

```filetree {title="OpenBao（VAULT）文件布局"}
- etc/
  - openbao · root:openbao 0750/
    - openbao.hcl · root:openbao 0640，OpenBao 服务配置
    - unseal.key · root:openbao 0640，静态自动解封密钥副本
    - backup.token · root:root 0600，每日快照备份专用令牌
    - tls · root:openbao 0750/
      - ca.crt · root:openbao 0640
      - server.crt · root:openbao 0640
      - server.key · root:openbao 0640
  - profile.d/
    - bao.sh · root:root 0644，CLI 环境变量（BAO_ADDR / BAO_CACERT）
  - systemd/system/
    - openbao.service · root:root 0644，Pigsty 渲染的服务单元
- data/vault · openbao:openbao 0700，默认 vault_data/
  - raft · openbao:openbao 0700，内置 Raft 存储引擎数据/   {open=false}
  - backup · root:root 0700，每日快照 vault-*.snap（0600）与 .backup.lock/   {open=false}
- var/log/openbao · openbao:openbao 0750，审计日志 audit.log（0600）/   {open=false}
- var/lib/node_exporter/textfile/
  - vault.prom · 快照时间戳与体积指标
- infra/targets/vault/
  - <cluster>-<seq>.yml · victoria:infra 0640，FileSD 目标
```
