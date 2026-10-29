---
title: "kafgres"
linkTitle: "kafgres"
description: "在 PostgreSQL 中运行 Kafka 协议消息代理"
weight: 9440
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/RayElg/kafgres">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">RayElg/kafgres</div>
    <div class="ext-card__desc">https://github.com/RayElg/kafgres</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/kafgres-0.3.1.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">kafgres-0.3.1.tar.gz</div>
    <div class="ext-card__desc">kafgres-0.3.1.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`kafgres`**](/ext/e/kafgres) | `0.3.1` | <a class="ext-badge ext-badge--cate sim" href="/ext/cate/sim">SIM</a> | <a class="ext-badge ext-badge--license elastic20" href="/ext/license#elastic20">Elastic-2.0</a> | <a class="ext-badge ext-badge--lang rust" href="/ext/language#rust">Rust</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 9440  | [**`kafgres`**](/ext/e/kafgres) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | - |
{.ext-table}


> Preload/restart; broker readiness required; replicate/archive segment data separately.


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#sim) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.3.1` | {{< pgvers "16" >}} | `kafgres` | - |
| [**RPM**](/ext/rpm#sim) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.3.1` | {{< pgvers "16" >}} | `kafgres_$v` | - |
| [**DEB**](/ext/deb#sim) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.3.1` | {{< pgvers "16" >}} | `postgresql-$v-kafgres` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | AVAIL PIGSTY 0.3.1 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| el8.aarch64 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | AVAIL PIGSTY 0.3.1 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| el9.x86_64 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | AVAIL PIGSTY 0.3.1 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| el9.aarch64 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | AVAIL PIGSTY 0.3.1 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| el10.x86_64 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | AVAIL PIGSTY 0.3.1 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| el10.aarch64 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | AVAIL PIGSTY 0.3.1 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| d12.x86_64 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | AVAIL PIGSTY 0.3.1 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| d12.aarch64 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | AVAIL PIGSTY 0.3.1 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| d13.x86_64 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | AVAIL PIGSTY 0.3.1 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| d13.aarch64 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | AVAIL PIGSTY 0.3.1 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| u22.x86_64 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | AVAIL PIGSTY 0.3.1 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| u22.aarch64 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | AVAIL PIGSTY 0.3.1 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| u24.x86_64 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | AVAIL PIGSTY 0.3.1 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| u24.aarch64 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | AVAIL PIGSTY 0.3.1 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| u26.x86_64 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | AVAIL PIGSTY 0.3.1 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
| u26.aarch64 | N/A PIGSTY - 0 | N/A PIGSTY - 0 | AVAIL PIGSTY 0.3.1 1 | N/A PIGSTY - 0 | N/A PIGSTY - 0 |
@ el8.x86_64 16 kafgres_16 kafgres_16-0.3.1-1PGSTY.el8.x86_64.rpm pigsty 0.3.1 4.5MiB https://repo.pigsty.cc/yum/pgsql/el8.x86_64/kafgres_16-0.3.1-1PGSTY.el8.x86_64.rpm
@ el8.aarch64 16 kafgres_16 kafgres_16-0.3.1-1PGSTY.el8.aarch64.rpm pigsty 0.3.1 3.9MiB https://repo.pigsty.cc/yum/pgsql/el8.aarch64/kafgres_16-0.3.1-1PGSTY.el8.aarch64.rpm
@ el9.x86_64 16 kafgres_16 kafgres_16-0.3.1-1PGSTY.el9.x86_64.rpm pigsty 0.3.1 4.4MiB https://repo.pigsty.cc/yum/pgsql/el9.x86_64/kafgres_16-0.3.1-1PGSTY.el9.x86_64.rpm
@ el9.aarch64 16 kafgres_16 kafgres_16-0.3.1-1PGSTY.el9.aarch64.rpm pigsty 0.3.1 4.1MiB https://repo.pigsty.cc/yum/pgsql/el9.aarch64/kafgres_16-0.3.1-1PGSTY.el9.aarch64.rpm
@ el10.x86_64 16 kafgres_16 kafgres_16-0.3.1-1PGSTY.el10.x86_64.rpm pigsty 0.3.1 4.4MiB https://repo.pigsty.cc/yum/pgsql/el10.x86_64/kafgres_16-0.3.1-1PGSTY.el10.x86_64.rpm
@ el10.aarch64 16 kafgres_16 kafgres_16-0.3.1-1PGSTY.el10.aarch64.rpm pigsty 0.3.1 4.0MiB https://repo.pigsty.cc/yum/pgsql/el10.aarch64/kafgres_16-0.3.1-1PGSTY.el10.aarch64.rpm
@ d12.x86_64 16 postgresql-16-kafgres postgresql-16-kafgres_0.3.1-1PGSTY~bookworm_amd64.deb pigsty 0.3.1 3.9MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/k/kafgres/postgresql-16-kafgres_0.3.1-1PGSTY~bookworm_amd64.deb
@ d12.aarch64 16 postgresql-16-kafgres postgresql-16-kafgres_0.3.1-1PGSTY~bookworm_arm64.deb pigsty 0.3.1 3.3MiB https://repo.pigsty.cc/apt/pgsql/bookworm/pool/main/k/kafgres/postgresql-16-kafgres_0.3.1-1PGSTY~bookworm_arm64.deb
@ d13.x86_64 16 postgresql-16-kafgres postgresql-16-kafgres_0.3.1-1PGSTY~trixie_amd64.deb pigsty 0.3.1 3.9MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/k/kafgres/postgresql-16-kafgres_0.3.1-1PGSTY~trixie_amd64.deb
@ d13.aarch64 16 postgresql-16-kafgres postgresql-16-kafgres_0.3.1-1PGSTY~trixie_arm64.deb pigsty 0.3.1 3.3MiB https://repo.pigsty.cc/apt/pgsql/trixie/pool/main/k/kafgres/postgresql-16-kafgres_0.3.1-1PGSTY~trixie_arm64.deb
@ u22.x86_64 16 postgresql-16-kafgres postgresql-16-kafgres_0.3.1-1PGSTY~jammy_amd64.deb pigsty 0.3.1 4.2MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/k/kafgres/postgresql-16-kafgres_0.3.1-1PGSTY~jammy_amd64.deb
@ u22.aarch64 16 postgresql-16-kafgres postgresql-16-kafgres_0.3.1-1PGSTY~jammy_arm64.deb pigsty 0.3.1 3.8MiB https://repo.pigsty.cc/apt/pgsql/jammy/pool/main/k/kafgres/postgresql-16-kafgres_0.3.1-1PGSTY~jammy_arm64.deb
@ u24.x86_64 16 postgresql-16-kafgres postgresql-16-kafgres_0.3.1-1PGSTY~noble_amd64.deb pigsty 0.3.1 4.2MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/k/kafgres/postgresql-16-kafgres_0.3.1-1PGSTY~noble_amd64.deb
@ u24.aarch64 16 postgresql-16-kafgres postgresql-16-kafgres_0.3.1-1PGSTY~noble_arm64.deb pigsty 0.3.1 3.8MiB https://repo.pigsty.cc/apt/pgsql/noble/pool/main/k/kafgres/postgresql-16-kafgres_0.3.1-1PGSTY~noble_arm64.deb
@ u26.x86_64 16 postgresql-16-kafgres postgresql-16-kafgres_0.3.1-1PGSTY~resolute_amd64.deb pigsty 0.3.1 4.2MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/k/kafgres/postgresql-16-kafgres_0.3.1-1PGSTY~resolute_amd64.deb
@ u26.aarch64 16 postgresql-16-kafgres postgresql-16-kafgres_0.3.1-1PGSTY~resolute_arm64.deb pigsty 0.3.1 3.8MiB https://repo.pigsty.cc/apt/pgsql/resolute/pool/main/k/kafgres/postgresql-16-kafgres_0.3.1-1PGSTY~resolute_arm64.deb
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `kafgres` 扩展的 RPM / DEB 包：

```bash
pig build pkg kafgres         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `kafgres` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](https://pig.pgsty.com/zh) 或者是 `apt/yum/dnf` 安装扩展：

```bash {tab="安装" group="extension-install" value="install"}
pig install kafgres;          # 当前活跃 PG 版本安装
```

```bash {tab="pig" value="pig"}
pig ext install -y kafgres -v 16  # PG 16
```

```bash {tab="dnf" value="dnf"}
dnf install -y kafgres_16       # PG 16
```

```bash {tab="apt" value="apt"}
apt install -y postgresql-16-kafgres   # PG 16
```


**预加载配置**：

```bash
shared_preload_libraries = 'kafgres';
```


**创建扩展**：

```sql
CREATE EXTENSION kafgres;
```

## 用法

来源：

- [extension/sql/kafgres--0.2.0--0.3.0.sql](https://github.com/RayElg/kafgres/blob/8def1919c65f71217665cdc9b72df4c693811cc2/extension/sql/kafgres--0.2.0--0.3.0.sql)
- [.github/workflows/ci.yml](https://github.com/RayElg/kafgres/blob/8def1919c65f71217665cdc9b72df4c693811cc2/.github/workflows/ci.yml)
- [README 0.3.1](https://github.com/RayElg/kafgres/blob/451a7f622a10bcf28b3ba4ae63c372a7f15c5aeb/README.md)
- [Configuration 0.3.1](https://github.com/RayElg/kafgres/blob/451a7f622a10bcf28b3ba4ae63c372a7f15c5aeb/docs/configuration.md)

- [0.3.0 release](https://github.com/RayElg/kafgres/releases/tag/0.3.1)

`kafgres` 在 PostgreSQL 中提供 Kafka 协议代理。上游 0.3.1 构建并测试 PostgreSQL 13–18。需要超级用户安装、共享预加载及重启，许可为 Elastic License 2.0。

### 启用代理

```ini
shared_preload_libraries = 'kafgres'
kafgres.database = 'postgres'
kafgres.bind_host = '127.0.0.1'
kafgres.advertised_host = '127.0.0.1'
kafgres.port = 9092
```

```sql
CREATE EXTENSION kafgres;
SELECT kafgres_create_topic('demo', 1);
BEGIN;
SELECT kafgres_produce('demo', 'key', 'value');
COMMIT;
SELECT * FROM kafgres_partition_offsets('demo');
```

Kafka 客户端连接配置的代理端口，SQL 消息生产参与调用者的事务。将监听器暴露到受信任本地环境之外前，应配置 TLS、身份认证和访问控制。

### 存储与变更捕获

`kafgres.storage_engine` 默认为 segment，日志保存在独立文件中，需要使用扩展自己的复制与归档流程。依赖 segment 保留和恢复能力前，应配置 `kafgres.segment_archive_command` 并监控 `kafgres_archive_status()`。普通 PostgreSQL WAL/PITR 无法覆盖整个 segment 日志。table 引擎将日志保存在 PostgreSQL 表内；切换引擎不会迁移已有记录。

CDC 还需要 `wal_level = logical`；部分 PostgreSQL 构建另外要求配置 `output_plugin_libraries` 白名单。0.3.0 支持带投影和过滤的 SQL CDC 映射。部署前应审阅映射与恢复流程；标签中的 CI 矩阵及发行产物覆盖 PostgreSQL 13–18。

### 持久性设置

0.3.0 默认开启 `kafgres.fsync_before_ack`，默认关闭 `kafgres.relaxed_produce_commit`。放宽前者可能在断电时丢失已经确认的分段记录；放宽后者可能在崩溃后丢失最新的幂等生产者状态，使重试产生重复记录。这些参数的作用范围小于事务性 SQL 生产，并不统一作用于表引擎。应保留严格默认值，直到明确接受对应的持久性取舍。

### 0.3.0 升级

安装匹配的 0.3.0 库并重启后，在 broker 数据库执行 `ALTER EXTENSION kafgres UPDATE`。SQL 升级收紧管理函数授权，并固定生产函数的 search_path。段存储引擎首次启动时会移除 0.2.0 的旧时间戳索引；旧段仍可通过扫描读取，新段生成当前格式的索引。

### 0.3.1 的 CDC 安装边界

CDC 需要 wal_level = logical。若 PostgreSQL 构建启用了输出插件允许列表，且代理报告不能把 kafgres 用作输出插件，应将其加入 output_plugin_libraries 并重载配置。库预加载仍需重启。已有事务式段记录应按上游 0.3.1 升级说明处理；单纯替换库不是存储迁移。
