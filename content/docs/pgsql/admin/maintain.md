---
title: 维护 PostgreSQL 集群的性能
linkTitle: 维护保养
weight: 80
description: 常见系统维护任务，处理表膨胀，定期执行 VACUUM
icon: fa-solid fa-spray-can-sparkles
module: [PGSQL]
categories: [任务]
---

要确保 Pigsty 与 PostgreSQL 集群健康稳定运行，需要进行一些例行维护保养工作。


--------

## 定期查阅监控

Pigsty 提供了开箱即用的监控平台，我们建议您每天浏览一次监控大盘，关注系统状态。
极端情况下，我们建议您每周至少查阅一次监控，关注出现的告警事件，这样可以提前规避绝大多数故障与问题。

这里列举了 Pigsty 中预先定义的 [告警规则](https://demo.pigsty.cc/alerting/list) 列表。


--------

## 故障切换善后

Pigsty 的高可用架构允许 PostgreSQL 集群自动进行主从切换，这意味着运维与 DBA 无需即时介入与响应。
然而用户仍然需要在合适的时机（例如第二天工作日）进行以下善后工作，包括：

- 调查并确认故障出现的原因，避免再次出现
- 视情况恢复集群原本的主从拓扑，或者修改配置清单以匹配新的主从状态。
- 通过 `bin/pgsql-svc` 刷新负载均衡器配置，更新服务的路由状态
- 通过 `bin/pgsql-hba` 刷新集群的 HBA 规则，避免主从特定的规则漂移
- 如果有必要，使用 `bin/pgsql-rm` 移除故障服务器，并通过 `bin/pgsql-add` 扩容一台新从库


--------

## 表膨胀治理

长时间运行的 PostgreSQL 会出现 "表膨胀" / "索引膨胀" 现象，导致系统性能劣化。

定期使用 [`pg_repack`](https://reorg.github.io/pg_repack/) 对表与索引进行在线重建，有助于维护 PostgreSQL 的良好性能表现。
Pigsty 已经默认在所有数据库中安装并启用了此扩展，因此您可以直接使用。

您可以通过 Pigsty 的 [PGCAT Database - Table Bloat](https://demo.pigsty.cc/d/pgcat-database) 面板，
确认数据库中的表膨胀情况与索引膨胀情况。并选择膨胀率较高（膨胀率高于 50% 的较大表）的表与索引，使用 `pg_repack` 进行在线重整：

```bash
pg_repack dbname -t schema.table
```

重整期间不会影响正常读写，但重整完毕之后的 **切换瞬间** 需要获取表上的 AccessExclusive 锁阻塞一切访问。
因此对于高吞吐量业务，建议在业务低峰期或者维护窗口进行。更多细节，请参考：[关系膨胀的治理](https://vonng.com/pg/bloat/)


### 使用 pg-repack 脚本

Pigsty 提供了开箱即用的 `/pg/bin/pg-repack` 脚本，可以自动检测并重整膨胀的表与索引。
该脚本必须在主库上以 `postgres` 用户身份运行，会自动识别膨胀的表与索引并进行在线重整。

```bash
pg-repack [options] [database...]

# 选项：
#   -h, --help          显示帮助信息
#   -n, --dry-run       只显示将要执行的操作，不实际执行
#   -t, --table         仅重整表
#   -i, --index         仅重整索引
#   -T, --timeout SEC   锁等待超时秒数（默认：10）
#   -j, --jobs NUM      并行任务数（默认：2）

# 使用示例：
pg-repack                    # 重整所有数据库中的膨胀表与索引
pg-repack mydb               # 仅重整指定数据库
pg-repack -n mydb            # 空跑模式，只显示不执行
pg-repack -t mydb            # 仅重整表
pg-repack -i mydb            # 仅重整索引
pg-repack -T 30 -j 4 mydb    # 自定义锁超时和并行度
```

该脚本会根据表和索引的大小与膨胀率，自动选择需要重整的对象：

| 类型 | 大小范围 | 膨胀率阈值 | 最大数量 |
|:--:|:--:|:--:|:--:|
| 小表 | < 256MB | > 40% | 64 |
| 中表 | 256MB - 2GB | > 30% | 16 |
| 大表 | 2GB - 8GB | > 20% | 4 |
| 特大表 | 8GB - 64GB | > 15% | 1 |

超过 64GB 的巨型表会被跳过并给出提示，需要手动处理。脚本使用文件锁防止重复运行，并在执行前取消可能造成锁争用的 vacuum/analyze 查询。


--------

## VACUUM FREEZE

冻结过期事务ID（VACUUM FREEZE）是 PostgreSQL 重要的维护任务，用于防止事务ID (XID) 用尽导致停机。
尽管 PostgreSQL 已经提供了自动垃圾回收（AutoVacuum）机制，然而对于高标准的生产环境，
我们依然建议结合自动和手动两种方式，定期执行全库级别的 VACUUM FREEZE，以确保 XID 安全。

您可以使用以下命令手工对数据库执行 VACUUM FREEZE：

```sql
-- 对整个数据库执行 VACUUM FREEZE
VACUUM FREEZE;

-- 对特定表执行 VACUUM FREEZE
VACUUM FREEZE schema.table_name;
```


### 使用 pg-vacuum 脚本

Pigsty 提供了开箱即用的 `/pg/bin/pg-vacuum` 脚本，可以智能地执行 VACUUM FREEZE 操作。
该脚本必须在主库上以 `postgres` 用户身份运行，会根据表的年龄自动决定冻结策略。

```bash
pg-vacuum [options] [database...]

# 选项：
#   -h, --help          显示帮助信息
#   -n, --dry-run       只显示将要执行的操作，不实际执行
#   -a, --age THRESH    年龄阈值（默认：100000000，即1亿）
#   -r, --ratio PCT     老化比例阈值（默认：40）

# 使用示例：
pg-vacuum                    # 冻结所有数据库中的老化表
pg-vacuum mydb               # 仅处理指定数据库
pg-vacuum -n mydb            # 空跑模式，只显示不执行
pg-vacuum -a 80000000 mydb   # 使用自定义年龄阈值
```

该脚本的工作逻辑：

1. 检查数据库的 `datfrozenxid` 年龄，如果低于阈值则跳过该库
2. 计算老化页面比例（超过年龄阈值的表页面占总页面的百分比）
3. 如果老化比例 > 40%，执行全库 `VACUUM FREEZE ANALYZE`
4. 否则，仅对超过年龄阈值的表执行 `VACUUM FREEZE ANALYZE`

脚本会设置 `vacuum_cost_limit = 10000` 和 `vacuum_cost_delay = 1ms` 以控制 I/O 影响，
执行前后会记录表的年龄变化，并使用文件锁防止重复运行。


--------

## 自动化维护

对于生产环境，我们建议配置定时任务来自动执行维护脚本。Pigsty 提供了 [`node_crontab`](/docs/node/param/#node_crontab) 参数，
可以在集群配置中声明定时任务，由 Ansible 剧本自动部署到节点的 `/etc/crontab` 中。


### 推荐的维护计划

以下是一个典型的 PostgreSQL 集群自动化维护配置示例：

```yaml
# 在集群配置的 vars 中添加
node_crontab:
  - '00 03 * * 0 postgres /pg/bin/pg-vacuum'     # 每周日凌晨3点执行 vacuum freeze
  - '00 04 * * 1 postgres /pg/bin/pg-repack'     # 每周一凌晨4点执行 repack
```

维护策略建议：

| 任务 | 频率 | 时机 | 说明 |
|:--|:--|:--|:--|
| `pg-vacuum` | 每周一次 | 周日凌晨 | 冻结老化事务，预防 XID 回卷 |
| `pg-repack` | 每周/每月 | 业务低峰期 | 重整膨胀表索引，回收空间 |
| `pg-backup full` | 每天/每周 | 凌晨 | 全量备份，视业务需求而定 |


### 完整配置示例

以下是一个包含全面维护计划的 PostgreSQL 集群配置示例：

```yaml
pg-meta:
  hosts:
    10.10.10.10: { pg_seq: 1, pg_role: primary }
    10.10.10.11: { pg_seq: 2, pg_role: replica }
    10.10.10.12: { pg_seq: 3, pg_role: replica }
  vars:
    pg_cluster: pg-meta
    # ... 其他配置 ...

    # 定时维护任务（只在主库执行的任务会自动检测角色）
    node_crontab:
      - '00 01 * * * postgres /pg/bin/pg-backup full'  # 每天凌晨1点全量备份
      - '00 03 * * 0 postgres /pg/bin/pg-vacuum'       # 每周日凌晨3点 vacuum
      - '00 04 * * 1 postgres /pg/bin/pg-repack'       # 每周一凌晨4点 repack
```


### 手动配置定时任务

如果您希望在已部署的集群上手动添加定时任务，可以直接编辑主库上的 crontab：

```bash
# 以 postgres 用户编辑定时任务
sudo -u postgres crontab -e

# 或直接追加到系统 crontab
sudo tee -a /etc/crontab <<-'EOF'
00 03 * * 0 postgres /pg/bin/pg-vacuum
00 04 * * 1 postgres /pg/bin/pg-repack
EOF
```


### 注意事项

- **仅在主库执行**：`pg-repack` 和 `pg-vacuum` 脚本会自动检测当前节点角色，只有主库才会实际执行维护操作，从库会直接退出。因此可以安全地在所有节点配置相同的定时任务。
- **错开执行时间**：不同维护任务应错开执行，避免同时运行造成 I/O 压力。
- **业务低峰期**：建议将维护任务安排在业务低峰期（如凌晨），尤其是 `pg-repack` 操作。
- **监控日志**：定时任务的输出会记录到系统日志，可通过 `journalctl` 或 `/var/log/cron` 查看执行情况。
- **文件锁保护**：两个脚本都使用文件锁（`/tmp/pg-repack.lock` 和 `/tmp/pg-vacuum.lock`）防止重复运行。


### 应用配置变更

配置定时任务后，使用以下命令将配置应用到节点：

```bash
# 应用 node_crontab 配置到指定集群
./node.yml -l pg-meta -t node_crontab

# 或者仅针对特定主机
./node.yml -l 10.10.10.10 -t node_crontab
```

如果希望追加而非覆盖现有定时任务，可以设置 [`node_crontab_overwrite`](/docs/node/param/#node_crontab_overwrite) 为 `false`。
