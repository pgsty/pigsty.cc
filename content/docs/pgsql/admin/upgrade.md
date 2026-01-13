---
title: 升级 PostgreSQL 大小版本
linktitle: 版本升级
weight: 90
description: 版本升级：小版本滚动升级、大版本迁移、扩展升级
icon: fa-solid fa-plane-up
module: [PGSQL]
categories: [任务]
---

## 快速上手

PostgreSQL 版本升级分为两种类型：**小版本升级** 和 **大版本升级**，两者的风险和复杂度差异很大。

| 类型    | 示例          | 停机时间     | 数据兼容性    | 风险等级 |
|:------|:------------|:---------|:---------|:-----|
| 小版本升级 | 17.2 → 17.3 | 秒级（滚动重启） | 完全兼容     | 低    |
| 大版本升级 | 17 → 18     | 分钟级      | 需要升级数据目录 | 中    |
{.full-width}


{{< tabpane text=true persist=header >}}
{{% tab header="小版本" %}}
```bash
# 滚动升级：先从库后主库
ansible <cls> -b -a 'yum upgrade -y postgresql17*'
pg restart --role replica --force <cls>
pg switchover <cls>
pg restart <cls> <old-primary> --force
```
{{% /tab %}}
{{% tab header="大版本" %}}
```bash
# 推荐：逻辑复制迁移
bin/pgsql-add pg-new              # 创建新版本集群
# 配置逻辑复制同步数据...
# 切换流量到新集群
```
{{% /tab %}}
{{% tab header="扩展" %}}
```bash
ansible <cls> -b -a 'yum upgrade -y postgis36_17*'
psql -c 'ALTER EXTENSION postgis UPDATE;'
```
{{% /tab %}}
{{< /tabpane >}}

关于在线迁移的详细流程，请参考 [**在线迁移**](/docs/pgsql/migration) 文档。

| 操作                      | 说明                | 风险  |
|:------------------------|:------------------|:----|
| [**小版本升级**](#小版本升级)     | 更新软件包，滚动重启        | 低   |
| [**小版本降级**](#小版本降级)     | 回退到之前的小版本         | 低   |
| [**大版本升级**](#大版本升级)     | 逻辑复制或 pg_upgrade  | 中   |
| [**扩展升级**](#扩展升级)       | 升级扩展软件包和扩展对象      | 低   |
{.full-width}


----------------

## 小版本升级

小版本升级（如 17.2 → 17.3）是最常见的升级场景，通常用于应用安全补丁和 Bug 修复。数据目录完全兼容，通过滚动重启即可完成。

**升级策略**：推荐采用 **滚动升级** 方式：先升级从库，再通过主从切换升级原主库，最小化服务中断。

```
1. 更新软件仓库 → 2. 升级从库软件包 → 3. 重启从库
4. 主从切换 → 5. 升级原主库软件包 → 6. 重启原主库
```

**步骤一：准备软件包**

确保本地软件仓库中有最新版本的 PostgreSQL 包，并刷新节点缓存：

{{< tabpane text=true persist=header >}}
{{% tab header="仓库" %}}
```bash
cd ~/pigsty
./infra.yml -t repo_upstream      # 添加上游仓库（需要互联网）
./infra.yml -t repo_build         # 重建本地仓库
```
{{% /tab %}}
{{% tab header="EL" %}}
```bash
ansible <cls> -b -a 'yum clean all'
ansible <cls> -b -a 'yum makecache'
```
{{% /tab %}}
{{% tab header="Debian" %}}
```bash
ansible <cls> -b -a 'apt clean'
ansible <cls> -b -a 'apt update'
```
{{% /tab %}}
{{< /tabpane >}}

**步骤二：升级从库**

在所有从库上升级软件包并验证版本：

{{< tabpane text=true persist=header >}}
{{% tab header="EL" %}}
```bash
ansible <cls> -b -a 'yum upgrade -y postgresql17*'
ansible <cls> -b -a '/usr/pgsql/bin/pg_ctl --version'
```
{{% /tab %}}
{{% tab header="Debian" %}}
```bash
ansible <cls> -b -a 'apt install -y postgresql-17'
ansible <cls> -b -a '/usr/lib/postgresql/17/bin/pg_ctl --version'
```
{{% /tab %}}
{{< /tabpane >}}

重启所有从库以应用新版本：

```bash
pg restart --role replica --force <cls>
```

**步骤三：切换主库**

执行主从切换，将主库角色转移到已升级的从库：

```bash
pg switchover <cls>
# 或非交互式：
pg switchover --leader <old-primary> --candidate <new-primary> --scheduled=now --force <cls>
```

**步骤四：升级原主库**

原主库现在已降级为从库，升级软件包并重启：

{{< tabpane text=true persist=header >}}
{{% tab header="EL" %}}
```bash
ansible <old-primary-ip> -b -a 'yum upgrade -y postgresql17*'
```
{{% /tab %}}
{{% tab header="Debian" %}}
```bash
ansible <old-primary-ip> -b -a 'apt install -y postgresql-17'
```
{{% /tab %}}
{{< /tabpane >}}

```bash
pg restart <cls> <old-primary-name> --force
```

**步骤五：验证**

确认所有实例版本一致：

```bash
pg list <cls>
pg query <cls> -c "SELECT version()"
```


----------------

## 小版本降级

在极少数情况下（如新版本引入 Bug），可能需要将 PostgreSQL 降级到之前的版本。

**步骤一：获取旧版本包**

{{< tabpane text=true persist=header >}}
{{% tab header="EL" %}}
```bash
cd ~/pigsty; ./infra.yml -t repo_upstream     # 添加上游仓库
cd /www/pigsty; repotrack postgresql17-*-17.1 # 下载指定版本的包
cd ~/pigsty; ./infra.yml -t repo_create       # 重建仓库元数据
```
{{% /tab %}}
{{% tab header="刷新缓存" %}}
```bash
ansible <cls> -b -a 'yum clean all'
ansible <cls> -b -a 'yum makecache'
```
{{% /tab %}}
{{< /tabpane >}}

**步骤二：执行降级**

{{< tabpane text=true persist=header >}}
{{% tab header="EL" %}}
```bash
ansible <cls> -b -a 'yum downgrade -y postgresql17*'
```
{{% /tab %}}
{{% tab header="Debian" %}}
```bash
ansible <cls> -b -a 'apt install -y postgresql-17=17.1*'
```
{{% /tab %}}
{{< /tabpane >}}

**步骤三：重启集群**

```bash
pg restart --force <cls>
```


----------------

## 大版本升级

大版本升级（如 17 → 18）涉及数据格式变更，需要使用专用工具进行数据迁移。

| 方式                                   | 停机时间   | 复杂度 | 适用场景           |
|:-------------------------------------|:-------|:----|:---------------|
| [**逻辑复制迁移**](#逻辑复制迁移)               | 秒级切换   | 高   | 生产环境，要求最小停机    |
| [**pg_upgrade 原地升级**](#pg_upgrade-原地升级) | 分钟~小时  | 中   | 测试环境，数据量较小     |
{.full-width}

{{% alert title="推荐方案" color="success" %}}
对于生产环境，推荐使用 **逻辑复制迁移** 方式：创建新版本集群，通过逻辑复制同步数据，然后进行蓝绿切换。这种方式停机时间最短，且可以随时回滚。详见 [**在线迁移**](/docs/pgsql/migration)。
{{% /alert %}}


### 逻辑复制迁移

逻辑复制迁移是生产环境大版本升级的推荐方式，核心步骤：

```
1. 创建新版本目标集群 → 2. 配置逻辑复制同步数据 → 3. 验证数据一致性
4. 切换应用流量到新集群 → 5. 下线旧集群
```

**步骤一：创建新版本集群**

```yaml
pg-meta-new:
  hosts:
    10.10.10.12: { pg_seq: 1, pg_role: primary }
  vars:
    pg_cluster: pg-meta-new
    pg_version: 18                    # 新版本
```

```bash
bin/pgsql-add pg-meta-new
```

**步骤二：配置逻辑复制**

```sql
-- 源集群（旧版本）主库：创建发布
CREATE PUBLICATION upgrade_pub FOR ALL TABLES;

-- 目标集群（新版本）主库：创建订阅
CREATE SUBSCRIPTION upgrade_sub
  CONNECTION 'host=10.10.10.11 port=5432 dbname=mydb user=replicator password=xxx'
  PUBLICATION upgrade_pub;
```

**步骤三：等待同步完成**

```sql
-- 目标集群：检查订阅状态
SELECT * FROM pg_stat_subscription;

-- 源集群：检查复制槽 LSN
SELECT slot_name, confirmed_flush_lsn FROM pg_replication_slots;
```

**步骤四：切换流量**

确认数据同步完成后：停止应用写入源集群 → 等待最后的数据同步 → 切换应用连接到新集群 → 删除订阅，下线源集群。

```sql
-- 目标集群：删除订阅
DROP SUBSCRIPTION upgrade_sub;
```

详细的迁移流程请参考 [**在线迁移**](/docs/pgsql/migration) 文档。


### pg_upgrade 原地升级

`pg_upgrade` 是 PostgreSQL 官方提供的大版本升级工具，适用于测试环境或可接受较长停机时间的场景。

{{% alert title="重要警告" color="warning" %}}
原地升级会导致较长的停机时间，且回滚困难。生产环境请优先考虑逻辑复制迁移方式。
{{% /alert %}}

**步骤一：安装新版本软件包**

```bash
./pgsql.yml -l <cls> -t pg_pkg -e pg_version=18
```

**步骤二：停止 Patroni**

```bash
pg pause <cls>                        # 暂停自动故障转移
systemctl stop patroni                # 停止 Patroni（会停止 PostgreSQL）
```

**步骤三：运行 pg_upgrade**

```bash
sudo su - postgres
mkdir -p /data/postgres/pg-meta-18/data

# 预检（-c 参数只检查不执行）
/usr/pgsql-18/bin/pg_upgrade \
  -b /usr/pgsql-17/bin -B /usr/pgsql-18/bin \
  -d /data/postgres/pg-meta-17/data \
  -D /data/postgres/pg-meta-18/data \
  -v -c

# 执行升级
/usr/pgsql-18/bin/pg_upgrade \
  -b /usr/pgsql-17/bin -B /usr/pgsql-18/bin \
  -d /data/postgres/pg-meta-17/data \
  -D /data/postgres/pg-meta-18/data \
  --link -j 8 -v
```

**步骤四：更新链接并启动**

```bash
rm -rf /usr/pgsql && ln -s /usr/pgsql-18 /usr/pgsql
rm -rf /pg && ln -s /data/postgres/pg-meta-18 /pg
# 编辑 /etc/patroni/patroni.yml 更新路径
systemctl start patroni
pg resume <cls>
```

**步骤五：后处理**

```bash
/usr/pgsql-18/bin/vacuumdb --all --analyze-in-stages
./delete_old_cluster.sh   # pg_upgrade 生成的清理脚本
```


----------------

## 扩展升级

升级 PostgreSQL 版本时，通常也需要升级相关扩展插件。

**升级扩展软件包**

{{< tabpane text=true persist=header >}}
{{% tab header="EL" %}}
```bash
ansible <cls> -b -a 'yum upgrade -y postgis36_17 timescaledb-2-postgresql-17* pgvector_17*'
```
{{% /tab %}}
{{% tab header="Debian" %}}
```bash
ansible <cls> -b -a 'apt install -y postgresql-17-postgis-3 postgresql-17-pgvector'
```
{{% /tab %}}
{{< /tabpane >}}

**升级扩展版本**

软件包升级后，在数据库中执行扩展升级：

```sql
-- 查看可升级的扩展
SELECT name, installed_version, default_version FROM pg_available_extensions
WHERE installed_version IS NOT NULL AND installed_version <> default_version;

-- 升级扩展
ALTER EXTENSION postgis UPDATE;
ALTER EXTENSION timescaledb UPDATE;
ALTER EXTENSION vector UPDATE;

-- 检查扩展版本
SELECT extname, extversion FROM pg_extension;
```

{{% alert title="扩展兼容性" color="warning" %}}
大版本升级前，请确认所有使用的扩展都支持目标 PostgreSQL 版本。某些扩展可能需要先卸载再重新安装，请查阅扩展文档。
{{% /alert %}}


----------------

## 注意事项

1. **备份优先**：任何升级操作前都应进行完整备份
2. **测试验证**：先在测试环境验证升级流程
3. **扩展兼容**：确认所有扩展支持目标版本
4. **回滚预案**：准备好回滚方案，特别是大版本升级
5. **监控观察**：升级后密切监控数据库性能和错误日志
6. **文档记录**：记录升级过程中的所有操作和问题


----------------

## 相关文档

- [**在线迁移**](/docs/pgsql/migration/)：使用逻辑复制进行零停机迁移
- [**Patroni 管理**](/docs/pgsql/admin/patroni/)：使用 patronictl 管理集群
- [**集群管理**](/docs/pgsql/admin/cluster/)：集群的创建、扩缩容、销毁
- [**备份恢复**](/docs/pgsql/backup/)：PostgreSQL 备份与恢复
- [**扩展管理**](/docs/pgsql/admin/ext/)：扩展的安装与管理
