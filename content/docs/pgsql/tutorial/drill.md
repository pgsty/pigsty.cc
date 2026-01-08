---
title: 3坏2应急处理
weight: 2001
date: 2025-01-11
description: 高可用典型场景处理预案：三节点坏了两个节点，高可用不生效了，怎么从紧急状态中恢复？
icon: fa-solid fa-arrow-right-from-bracket
module: [PGSQL]
categories: [任务, 概念]
---


如果经典3节点高可用部署同时出现两台（多数主体）故障，系统通常无法自动完成故障切换，需要人工介入：

首先判断另外两台服务器的情况，如果短时间内可以拉起，优先选择拉起另外两台服务。否则进入 **紧急止血流程**

**紧急止血流程假设您的管理节点故障**，只有单台普通数据库节点存活，在这种情况下，最快的恢复操作流程为：

- 调整 HAProxy 配置，将流量指向主库。
- 关闭 Patroni，手动提升 PostgreSQL 从库为主库。


--------

## 调整HAProxy配置

如果你通过其他方式绕开 HAProxy 访问集群，那么可以跳过这一步。
如果你通过 HAProxy 方式访问数据库集群，那么你需要调整负载均衡配置，将读写流量手工指向主库。

- 编辑  `/etc/haproxy/<pg_cluster>-primary.cfg` 配置文件，其中 `<pg_cluster>` 为你的 PostgreSQL 集群名称，例如 `pg-meta`。
- 将健康检查配置选项注释，停止进行健康鉴擦好
- 将服务器列表中，其他两台故障的机器注释掉，只保留当前主库服务器。

```ini
listen pg-meta-primary
    bind *:5433
    mode tcp
    maxconn 5000
    balance roundrobin

    # 注释掉以下四行健康检查配置
    #option httpchk                               # <---- remove this
    #option http-keep-alive                       # <---- remove this
    #http-check send meth OPTIONS uri /primary    # <---- remove this
    #http-check expect status 200                 # <---- remove this

    default-server inter 3s fastinter 1s downinter 5s rise 3 fall 3 on-marked-down shutdown-sessions slowstart 30s maxconn 3000 maxqueue 128 weight 100
    server pg-meta-1 10.10.10.10:6432 check port 8008 weight 100

    # 注释掉其他两台故障的机器
    #server pg-meta-2 10.10.10.11:6432 check port 8008 weight 100 <---- comment this
    #server pg-meta-3 10.10.10.12:6432 check port 8008 weight 100 <---- comment this
```

配置调整完成后，先不着急执行 `systemctl reload haproxy` 重载生效，等待后续主库提升后一起执行。
以上配置的效果是，HAProxy 将不再进行主库健康检查（默认使用 Patroni），而是直接将写入流量指向当前主库


--------

## 手工提升备库

登陆目标服务器，切换至 dbsu 用户，执行 `CHECKPOINT` 刷盘后，关闭 Patroni，重启 PostgreSQL 并执行 Promote。

```bash
sudo su - postgres                     # 切换到数据库 dbsu 用户
psql -c 'checkpoint; checkpoint;'      # 两次 Checkpoint 刷脏页，避免PG后重启耗时过久
sudo systemctl stop patroni            # 关闭 Patroni
pg-restart                             # 重新拉起 PostgreSQL
pg-promote                             # 将 PostgreSQL 从库提升为主库
psql -c 'SELECT pg_is_in_recovery();'  # 如果结果为 f，表示已经提升为主库
```

如果你上面调整了 HAProxy 配置，那么现在可以执行 `systemctl reload haproxy` 重载 HAProxy 配置，将流量指向新的主库。

```bash
systemctl reload haproxy                # 重载 HAProxy 配置，将写入流量指向当前实例
```



--------

## 避免脑裂

紧急止血后，第二优先级问题为：**避免脑裂**。用户应当防止另外两台服务器重新上线后，与当前主库形成脑裂，导致数据不一致。

简单的做法是：

- 将另外两台服务器直接 **断电/断网**，确保它们不会在不受控的情况下再次上线。
- 调整应用使用的数据库连接串，将其 HOST 直接指向唯一幸存服务器上的主库。

然后应当根据具体情况，决定下一步的操作：

- A：这两台服务器是临时故障（比如断网断电），可以原地修复后继续服务
- B：这两台故障服务器是永久故障（比如硬件损坏），将移除并下线。



--------

## 临时故障后的复原

如果另外两台服务器是临时故障，可以修复后继续服务，那么可以按照以下步骤进行修复与重建：

- 每次处理一台故障服务器，优先处理 管理节点 / INFRA 管理节点
- 启动故障服务器，并在启动后关停 Patroni

ETCD 集群在法定人数恢复后，将恢复工作，此时可以启动幸存服务器（当前主库）上的 Patroni，接管现有 PostgreSQL，并重新获取集群领导者身份。
Patroni 启动后进入维护模式。

```bash
systemctl restart patroni
pg pause <pg_cluster>
```

在另外两台实例上以 `postgres` 用户身份创建 `touch /pg/data/standby.signal` 标记文件将其标记为从库，然后拉起 Patroni：

```bash
systemctl restart patroni
```

确认 Patroni 集群身份/角色正常后，退出维护模式：

```bash
pg resume <pg_cluster>
```



--------

## 永久故障后的复原

出现永久故障后，首先需要恢复管理节点上的 `~/pigsty` 目录，主要是需要 `pigsty.yml` 与 `files/pki/ca/ca.key` 两个核心文件。

> 如果您无法取回或没有备份这两个文件，您可以选择部署一套新的 Pigsty，并通过 [备份集群](/docs/pgsql/config/#备份集群) 的方式将现有集群迁移至新部署中。
>
> 请定期备份 `pigsty` 目录（例如使用 Git 进行版本管理）。建议吸取教训，下次不要犯这样的错误。



#### 配置修复

您可以将幸存的节点作为新的管理节点，将 `~/pigsty` 目录拷贝到新的管理节点上，然后开始调整配置。
例如，将原本默认的管理节点 `10.10.10.10` 替换为幸存节点 `10.10.10.12`

```yaml
all:
  vars:
    admin_ip: 10.10.10.12               # 使用新的管理节点地址
    node_etc_hosts: [10.10.10.12 h.pigsty a.pigsty p.pigsty g.pigsty sss.pigsty]
    infra_portal: {}                    # 一并修改其他引用旧管理节点 IP (10.10.10.10) 的配置

  children:

    infra:                              # 调整 Infra 集群
      hosts:
        # 10.10.10.10: { infra_seq: 1 } # 老的 Infra 节点
        10.10.10.12: { infra_seq: 3 }   # 新增 Infra 节点

    etcd:                               # 调整 ETCD 集群
      hosts:
        #10.10.10.10: { etcd_seq: 1 }   # 注释掉此故障节点
        #10.10.10.11: { etcd_seq: 2 }   # 注释掉此故障节点
        10.10.10.12: { etcd_seq: 3 }    # 保留幸存节点
      vars:
        etcd_cluster: etcd

    pg-meta:                            # 调整 PGSQL 集群配置
      hosts:
        #10.10.10.10: { pg_seq: 1, pg_role: primary }
        #10.10.10.11: { pg_seq: 2, pg_role: replica }
        #10.10.10.12: { pg_seq: 3, pg_role: replica , pg_offline_query: true }
        10.10.10.12: { pg_seq: 3, pg_role: primary , pg_offline_query: true }
      vars:
        pg_cluster: pg-meta
```


#### ETCD修复

然后执行以下命令，将 ETCD 重置为单节点集群：

```bash
./etcd.yml -e etcd_safeguard=false -e etcd_clean=true
```

根据 [ETCD重载配置](/docs/etcd/admin#重载配置) 的说明，调整对 ETCD Endpoint 的引用。


#### INFRA修复

如果幸存节点上没有 INFRA 模块，请在当前节点上配置新的 INFRA 模块并安装。执行以下命令，将 INFRA 模块部署到幸存节点上：

```bash
./infra.yml -l 10.10.10.12
```

修复当前节点的监控

```bash
./node.yml -t node_monitor
```


#### PGSQL修复

```bash
./pgsql.yml -t pg_conf                            # 重新生成 PG 配置文件
systemctl reload patroni                          # 在幸存节点上重载 Patroni 配置
```

各模块修复后，您可以参考标准扩容流程，将新的节点加入集群，恢复集群的高可用性。
