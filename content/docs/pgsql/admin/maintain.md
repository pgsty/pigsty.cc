---
title: 维护 PostgreSQL 集群性能
linktitle: 维护保养
weight: 80
description: 维护保养：处理表膨胀、定期 VACUUM、自动化维护任务配置
icon: fa-solid fa-spray-can-sparkles
module: [PGSQL]
categories: [任务]
---

## 快速上手

要确保 PostgreSQL 集群健康稳定运行，需要进行例行维护保养工作。Pigsty 提供了开箱即用的维护脚本。

```bash
pg-repack                    # 重整所有数据库中的膨胀表与索引
pg-vacuum                    # 冻结所有数据库中的老化表
pg-backup full               # 执行全量备份
```


{{< tabpane text=true persist=header >}}
{{% tab header="重整" %}}
```bash
pg-repack [database...]      # 重整膨胀的表与索引
pg-repack -n mydb            # 空跑模式，只显示不执行
pg-repack -t mydb            # 仅重整表
pg-repack -i mydb            # 仅重整索引
```
{{% /tab %}}
{{% tab header="冻结" %}}
```bash
pg-vacuum [database...]      # 冻结老化事务
pg-vacuum -n mydb            # 空跑模式，只显示不执行
pg-vacuum -a 80000000 mydb   # 使用自定义年龄阈值
```
{{% /tab %}}
{{% tab header="定时" %}}
```yaml
# 在集群配置中添加定时任务
node_crontab:
  - '00 03 * * 0 postgres /pg/bin/pg-vacuum'   # 每周日凌晨3点
  - '00 04 * * 1 postgres /pg/bin/pg-repack'   # 每周一凌晨4点
```
{{% /tab %}}
{{< /tabpane >}}

关于备份恢复操作，请参考 [**备份管理**](/docs/pgsql/backup/) 章节。关于监控告警，请参考 [**监控系统**](/docs/pgsql/monitor/)。

| 任务                  | 脚本命令                     | 说明                |
|:--------------------|:-------------------------|:------------------|
| [**表膨胀治理**](#表膨胀治理) | `pg-repack [db...]`      | 在线重整膨胀的表与索引       |
| [**事务冻结**](#事务冻结)   | `pg-vacuum [db...]`      | 冻结老化事务，预防 XID 回卷  |
| [**自动化维护**](#自动化维护) | `node_crontab`           | 配置定时任务自动执行维护      |
| [**故障善后**](#故障善后)   | `bin/pgsql-svc`          | 故障切换后的善后工作        |
{.full-width}


----------------

## 表膨胀治理

长时间运行的 PostgreSQL 会出现"表膨胀"/"索引膨胀"现象，导致系统性能劣化。定期使用 [**`pg_repack`**](https://reorg.github.io/pg_repack/) 对表与索引进行在线重建，有助于维护良好性能。

您可以通过 Pigsty 的 [**PGCAT Database - Table Bloat**](https://demo.pigsty.cc/d/pgcat-database) 面板确认数据库中的膨胀情况，并选择膨胀率较高的表与索引进行重整。

**使用 pg-repack 脚本**

Pigsty 提供了开箱即用的 `/pg/bin/pg-repack` 脚本，必须在主库上以 `postgres` 用户身份运行：

{{< tabpane text=true persist=header >}}
{{% tab header="基本用法" %}}
```bash
pg-repack                    # 重整所有数据库中的膨胀表与索引
pg-repack mydb               # 仅重整指定数据库
pg-repack -n mydb            # 空跑模式，只显示不执行
```
{{% /tab %}}
{{% tab header="选项" %}}
```bash
pg-repack -t mydb            # 仅重整表
pg-repack -i mydb            # 仅重整索引
pg-repack -T 30 -j 4 mydb    # 自定义锁超时(秒)和并行度
```
{{% /tab %}}
{{% tab header="手工" %}}
```bash
# 直接使用 pg_repack 命令重整特定表
pg_repack dbname -t schema.table
```
{{% /tab %}}
{{< /tabpane >}}

**自动选择阈值**

该脚本会根据表和索引的大小与膨胀率，自动选择需要重整的对象：

| 类型  | 大小范围       | 膨胀率阈值 | 最大数量 |
|:---:|:-----------|:-----:|:----:|
| 小表  | < 256MB    | > 40% |  64  |
| 中表  | 256MB - 2GB | > 30% |  16  |
| 大表  | 2GB - 8GB  | > 20% |  4   |
| 特大表 | 8GB - 64GB | > 15% |  1   |
{.full-width}

超过 64GB 的巨型表会被跳过并给出提示，需要手动处理。

{{% alert title="锁等待" color="info" %}}
重整期间不会影响正常读写，但重整完毕的 **切换瞬间** 需要获取表上的 AccessExclusive 锁阻塞一切访问。对于高吞吐量业务，建议在业务低峰期或维护窗口进行。
{{% /alert %}}


----------------

## 事务冻结

冻结过期事务ID（VACUUM FREEZE）是 PostgreSQL 重要的维护任务，用于防止事务ID（XID）用尽导致停机。

**使用 pg-vacuum 脚本**

Pigsty 提供了开箱即用的 `/pg/bin/pg-vacuum` 脚本，必须在主库上以 `postgres` 用户身份运行：

{{< tabpane text=true persist=header >}}
{{% tab header="基本用法" %}}
```bash
pg-vacuum                    # 冻结所有数据库中的老化表
pg-vacuum mydb               # 仅处理指定数据库
pg-vacuum -n mydb            # 空跑模式，只显示不执行
```
{{% /tab %}}
{{% tab header="选项" %}}
```bash
pg-vacuum -a 80000000 mydb   # 使用自定义年龄阈值（默认1亿）
pg-vacuum -r 50 mydb         # 使用自定义老化比例阈值（默认40%）
```
{{% /tab %}}
{{% tab header="手工" %}}
```sql
-- 对整个数据库执行 VACUUM FREEZE
VACUUM FREEZE;

-- 对特定表执行 VACUUM FREEZE
VACUUM FREEZE schema.table_name;
```
{{% /tab %}}
{{< /tabpane >}}

**工作逻辑**

1. 检查数据库的 `datfrozenxid` 年龄，如果低于阈值则跳过该库
2. 计算老化页面比例（超过年龄阈值的表页面占总页面的百分比）
3. 如果老化比例 > 40%，执行全库 `VACUUM FREEZE ANALYZE`
4. 否则，仅对超过年龄阈值的表执行 `VACUUM FREEZE ANALYZE`

脚本会设置 `vacuum_cost_limit = 10000` 和 `vacuum_cost_delay = 1ms` 以控制 I/O 影响。


----------------

## 自动化维护

对于生产环境，建议配置定时任务自动执行维护脚本。Pigsty 提供了 [**`node_crontab`**](/docs/node/param/#node_crontab) 参数，可以在集群配置中声明定时任务。

**推荐的维护计划**

```yaml
# 在集群配置的 vars 中添加
node_crontab:
  - '00 03 * * 0 postgres /pg/bin/pg-vacuum'     # 每周日凌晨3点执行 vacuum freeze
  - '00 04 * * 1 postgres /pg/bin/pg-repack'     # 每周一凌晨4点执行 repack
  - '00 01 * * * postgres /pg/bin/pg-backup full' # 每天凌晨1点全量备份
```

| 任务           | 频率     | 时机     | 说明               |
|:-------------|:-------|:-------|:-----------------|
| `pg-vacuum`  | 每周一次   | 周日凌晨   | 冻结老化事务，预防 XID 回卷 |
| `pg-repack`  | 每周/每月  | 业务低峰期  | 重整膨胀表索引，回收空间     |
| `pg-backup`  | 每天/每周  | 凌晨     | 全量备份，视业务需求而定     |
{.full-width}

**应用配置变更**

{{< tabpane text=true persist=header >}}
{{% tab header="剧本" %}}
```bash
./node.yml -l pg-meta -t node_crontab    # 应用 node_crontab 配置到指定集群
./node.yml -l 10.10.10.10 -t node_crontab # 仅针对特定主机
```
{{% /tab %}}
{{% tab header="手工" %}}
```bash
# 以 postgres 用户编辑定时任务
sudo -u postgres crontab -e

# 或直接追加到系统 crontab
sudo tee -a /etc/crontab <<-'EOF'
00 03 * * 0 postgres /pg/bin/pg-vacuum
00 04 * * 1 postgres /pg/bin/pg-repack
EOF
```
{{% /tab %}}
{{< /tabpane >}}

{{% alert title="仅在主库执行" color="secondary" %}}
`pg-repack` 和 `pg-vacuum` 脚本会自动检测当前节点角色，只有主库才会实际执行维护操作，从库会直接退出。因此可以安全地在所有节点配置相同的定时任务。
{{% /alert %}}


----------------

## 故障善后

Pigsty 的高可用架构允许 PostgreSQL 集群自动进行主从切换，无需即时介入。然而在故障发生后，仍需进行以下善后工作：

**善后检查清单**

| 步骤 | 操作                        | 说明              |
|:--:|:--------------------------|:----------------|
| 1  | 调查故障原因                    | 避免再次发生          |
| 2  | 更新配置清单                    | 匹配新的主从状态        |
| 3  | `bin/pgsql-svc <cls>`     | 刷新负载均衡器配置       |
| 4  | `bin/pgsql-hba <cls>`     | 刷新 HBA 规则       |
| 5  | 视情况移除故障节点或扩容新从库           | 恢复集群冗余度         |
{.full-width}

{{< tabpane text=true persist=header >}}
{{% tab header="刷新服务" %}}
```bash
bin/pgsql-svc pg-test        # 刷新集群的负载均衡配置
```
{{% /tab %}}
{{% tab header="刷新HBA" %}}
```bash
bin/pgsql-hba pg-test        # 刷新集群的 HBA 规则
```
{{% /tab %}}
{{% tab header="恢复冗余" %}}
```bash
bin/pgsql-rm pg-test 10.10.10.13    # 移除故障节点
bin/pgsql-add pg-test 10.10.10.14   # 扩容新从库
```
{{% /tab %}}
{{< /tabpane >}}


----------------

## 定期查阅监控

Pigsty 提供了开箱即用的监控平台，建议每天浏览一次监控大盘，关注系统状态。极端情况下，每周至少查阅一次监控，关注告警事件，可以提前规避绝大多数故障与问题。

预定义的 [**告警规则**](https://demo.pigsty.cc/alerting/list) 列表可在 Grafana 中查看。

更多细节请参考：[**关系膨胀的治理**](https://vonng.com/pg/bloat/)


----------------

## 相关文档

- [**备份管理**](/docs/pgsql/backup/)：PostgreSQL 备份与恢复
- [**监控系统**](/docs/pgsql/monitor/)：PostgreSQL 监控与告警
- [**集群管理**](/docs/pgsql/admin/cluster/)：集群的创建、扩缩容、销毁
- [**Patroni 管理**](/docs/pgsql/admin/patroni/)：高可用集群管理
