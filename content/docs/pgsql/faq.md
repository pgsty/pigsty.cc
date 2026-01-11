---
title: 常见问题
weight: 2210
description: PostgreSQL 常见问题答疑
icon: fa-solid fa-circle-question
module: [PGSQL]
categories: [参考]
---


-----------------------

## 我当前执行安装的用户为何不能使用 `pg` 管理别名？

从 Pigsty v4.0 开始，使用 `pg` 管理别名管理全局的 Patroni / PostgreSQL 集群的权限被收紧到了管理节点上的管理员分组（`admin`）。

[**`node.yml`**](/docs/node/playbook#nodeyml) 剧本创建的管理员（`dba`）默认具有此权限，而其他用户如果想要获得这个权限，需要你显式地将该用户加入到 `admin` 组中。

```bash
sudo usermod -aG admin <username>
```


-----------------------

## PGSQL初始化失败：Fail to wait for postgres/patroni primary

这种错误信息存在多种可能，需要你 [检查](https://github.com/pgsty/pigsty/discussions/338) Ansible，Systemd / Patroni / PostgreSQL 日志，找出真正的原因。

- 可能性1：集群配置错误，找出错误的配置项修改并应用。
- 可能性2：在部署中存在同名集群，或者之前的同名集群主节点被不正确地移除
- 可能性3：在DCS中有同名集群残留的垃圾元数据：没有正确完成下线，你可以使用 `etcdctl del --prefix /pg/<cls>` 来手工删除残留数据（请小心）
- 可能性4：你的 PostgreSQL 或节点相关 RPM 包没有被成功安装
- 可能性5：你的 Watchdog 内核模块没有正确启用加载
- 可能性6：你在初始化数据库时指定的语言 Locale 不存在（例如，使用了 en_US.UTF8，但没有安装英文语言包或 Locale 支持）
- 如果你遇到了其他的原因，欢迎提交 Issue 或向社区求助。







-----------------------

## PGSQL初始化失败：Fail to wait for postgres/patroni replica

存在几种可能的原因：

**立即失败**：通常是由于配置错误、网络问题、损坏的DCS元数据等原因。你必须检查 `/pg/log` 找出实际原因。

**过了一会儿失败**：这可能是由于源实例数据损坏。查看 PGSQL FAQ：如何在数据损坏时创建副本？

**过了很长时间再超时**：如果 `wait for postgres replica` 任务耗时 30 分钟或更长时间并由于超时而失败，这对于大型集群（例如，1TB+，可能需要几小时创建一个副本）是很常见的。

在这种情况下，底层创建副本的过程仍在进行。你可以使用 `pg list <cls>` 检查集群状态并等待副本赶上主节点。然后使用以下命令继续以下任务，完成完整的从库初始化：

```bash
./pgsql.yml -t pg_hba,pg_reload,pg_backup,pgbouncer,pg_vip,pg_dns,pg_service,pg_exporter,pg_register -l <problematic_replica>
```


-----------------------

## PGSQL初始化失败：ABORT due to pg_safeguard enabled

这意味着正准备清理的 PostgreSQL 实例打开了防误删保险， 禁用 `pg_safeguard` 以移除 Postgres 实例。

如果防误删保险 [`pg_safeguard`](/docs/pgsql/param#pg_safeguard) 打开，那么你就不能使用 `bin/pgsql-rm` 和 `pgsql-rm.yml` 剧本移除正在运行的 PGSQL 实例了。

要禁用 `pg_safeguard`，你可以在配置清单中将 `pg_safeguard` 设置为 `false`，或者在执行剧本时使用命令参数 `-e pg_safeguard=false`。

```bash
./pgsql-rm.yml -e pg_safeguard=false -l <cls_to_remove>    # 强制覆盖 pg_safeguard
```








-----------------------

## 如何确保故障转移中数据不丢失？

> 使用 `crit.yml` 参数模板，设置 `pg_rpo` 为 `0`，或 [配置集群](/docs/pgsql/admin#配置集群) 为同步提交模式。

考虑使用 [**同步备库**](/docs/pgsql/config#同步备库) 和 [**法定多数提交**](/docs/pgsql/config#法定人数提交) 来确保故障转移过程中的零数据丢失。

更多细节，可以参考 [安全考量 - 可用性](/docs/setup/security#可用性) 的相关介绍。






-----------------------

## 磁盘写满了如何抢救？

如果磁盘写满了，连 Shell 命令都无法执行，`rm -rf /pg/dummy` 可以释放一些救命空间。

默认情况下，[`pg_dummy_filesize`](/docs/pgsql/param#pg_dummy_filesize) 设置为 `64MB`。在生产环境中，建议将其增加到 `8GB` 或更大。

它将被放置在 PGSQL 主数据磁盘上的 `/pg/dummy` 路径下。你可以删除该文件以释放一些紧急空间：

至少可以让你在该节点上运行一些 shell 脚本来进一步回收其他空间（例如日志/WAL，过时数据，WAL归档与备份）。






-----------------------

## 当集群数据已经损坏时如何创建副本？

Pigsty 在所有实例的 patroni 配置中设置了 `cloneform: true` 标签，标记该实例可用于创建副本。

如果某个实例有损坏的数据文件，导致创建新副本的时候出错中断，那么你可以设置 `clonefrom: false` 来避免从损坏的实例中拉取数据。具体操作如下

```bash
$ vi /pg/bin/patroni.yml

tags:
  nofailover: false
  clonefrom: true      # ----------> change to false
  noloadbalance: false
  nosync: false
  version:  '15'
  spec: '4C.8G.50G'
  conf: 'oltp.yml'
  
$ systemctl reload patroni    # 重新加载 Patroni 配置
```



----------------

## PostgreSQL 监控的性能损耗如何？

一个常规 PostgreSQL 实例抓取耗时大约 200ms。抓取间隔默认为 10 秒，对于一个生产多核数据库实例来说几乎微不足道。

请注意，Pigsty 默认开启了库内对象监控，所以如果您的数据库内有数以十万计的表/索引对象，抓取可能耗时会增加到几秒。

您可以修改 Prometheus 的抓取频率，请确保一点：抓取周期应当显著高于一次抓取的时长。




----------------

## 如何监控一个现存的 PostgreSQL 实例？

在 [PGSQL Monitor](/docs/pgsql/monitor) 中提供了详细的监控配置说明。




----------------

## 如何手工从监控中移除 PostgreSQL 监控目标？

```bash
./pgsql-rm.yml -t rm_metrics -l <cls>     # 将集群 'cls' 的所有实例从 victoria 中移除
```

```bash
bin/pgmon-rm <ins>     # 用于从 Victoria 中移除单个实例 'ins' 的监控对象，特别适合移除添加的外部实例
```



