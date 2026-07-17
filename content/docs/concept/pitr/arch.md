---
title: 时间点恢复的实现架构
linkTitle: 架构
weight: 212
description: Pigsty 以 pgBackRest 为引擎实现 PITR：仓库抽象、归档链路、调度机制，以及"备份跟随主库"的工程设计。
icon: fa-solid fa-sitemap
module: [PGSQL]
categories: [概念]
---

[**原理**](/docs/concept/pitr/mechanism/) 一页就能讲完，工程却没有那么简单：
归档不能拖垮主库的写入性能，备份放到对象存储上要加密，主从切换之后备份不能中断，
多套集群共用一个仓库时要相互隔离，海量小文件会拖垮备份吞吐……

Pigsty 选择 [**pgBackRest**](https://pgbackrest.org/) 作为备份引擎，并把这些工程问题的答案预置在了出厂配置中。
本文说明这套架构的组成：**引擎、仓库、链路、调度**，以及一个关键设计 —— 备份跟随主库。


----------------

## 备份引擎：pgBackRest

pgBackRest 是 PostgreSQL 生态中事实上的标准备份工具，Pigsty 用它承担三项职责：
执行基础备份（`backup`）、接收 WAL 归档（`archive-push`）、执行恢复（`restore` / `archive-get`）。
选择它的理由，恰好对应上面那些工程问题：

* **并行**：备份、归档、恢复都支持多进程并行，吞吐可以随核数扩展。
* **增量**：支持差异/增量备份与 **块级增量**（block incremental），只传输文件内部变化的块。
* **压缩与加密**：内置 zstd 压缩与 AES-256-CBC 加密，密文落盘，仓库泄露不等于数据泄露。
* **多种仓库**：本地磁盘、S3 兼容对象存储（MinIO、云厂商 OSS）、Azure、GCS、SFTP 皆可作为后端。
* **打包**：`bundle` 特性将海量小文件合并为大对象存储，避免对象存储的小文件惩罚。

在仓库内部，pgBackRest 使用 **stanza**（节）隔离不同集群的备份。Pigsty 将 stanza 直接映射为集群名
[**`pg_cluster`**](/docs/pgsql/param#pg_cluster)，因此多套集群可以安全地共享同一个备份仓库：

```
备份仓库
├── backup/
│   ├── pg-meta/          # pg-meta 集群的基础备份
│   └── pg-test/          # pg-test 集群的基础备份
└── archive/
    ├── pg-meta/          # pg-meta 集群的 WAL 归档
    └── pg-test/          # pg-test 集群的 WAL 归档
```


----------------

## 仓库抽象

备份放在哪里，是备份策略中最重要的决定。Pigsty 把这个决定抽象为两个参数：
[**`pgbackrest_method`**](/docs/pgsql/param#pgbackrest_method) 选择使用哪个仓库，
[**`pgbackrest_repo`**](/docs/pgsql/param#pgbackrest_repo) 定义所有候选仓库。默认提供两个开箱即用的选项：

```yaml
pgbackrest_method: local          # 使用哪个仓库：local，minio，或自定义仓库名
pgbackrest_repo:                  # 仓库定义：https://pgbackrest.org/configuration.html#section-repository
  local:                          # 默认仓库：主库本地文件系统
    path: /pg/backup              # 备份目录，默认挂在主数据盘上
    retention_full_type: count    # 按份数保留全量备份
    retention_full: 2             # 保留最近 2 个全量备份（清理前最多 3 个）
  minio:                          # 可选仓库：MinIO / S3 兼容对象存储
    type: s3                      # MinIO 走 S3 兼容协议
    s3_endpoint: sss.pigsty       # MinIO 服务端点（负载均衡域名）
    s3_bucket: pgsql              # 桶名称
    s3_key: pgbackrest            # 访问密钥
    s3_key_secret: S3User.Backup  # MinIO 用户密钥
    storage_ca_file: /etc/pki/ca.crt  # 使用 Pigsty 自签名 CA 验证 HTTPS
    block: y                      # 启用块级增量备份
    bundle: y                     # 小文件打包存储
    cipher_type: aes-256-cbc      # 仓库加密：AES-256-CBC
    cipher_pass: pgBackRest       # 仓库加密密码
    retention_full_type: time     # 按时间保留全量备份
    retention_full: 14            # 按时间保留 14 天
```

注意两套预置仓库的策略差异：**本地仓库** 追求简单直接 —— 不加密、不打包、按份数保留；
**MinIO 仓库** 面向生产 —— 加密、打包、块级增量、按时间保留两周。
这不是随意的默认值，而是对两种使用场景的判断：本地仓库与数据同生共死，重点是快；
远程仓库承担容灾职责，重点是安全与可追溯。

仓库定义到 pgBackRest 配置的转换是机械的：键名中的下划线替换为连字符，加上 `repo1-` 前缀，
渲染进 `/etc/pgbackrest/pgbackrest.conf`。所以 pgBackRest 支持的任何仓库选项都可以直接写进
`pgbackrest_repo` —— 例如添加一个云上 S3 仓库用于异地冷备：

```yaml
s3:    # 自定义仓库 ------> /etc/pgbackrest/pgbackrest.conf
  type: s3                        # ----> repo1-type=s3
  s3_endpoint: oss-cn-beijing-internal.aliyuncs.com
  s3_region: oss-cn-beijing       # ----> repo1-s3-region=oss-cn-beijing
  s3_bucket: <your_bucket>        # ----> repo1-s3-bucket=<your_bucket>
  s3_key: <your_access_key>       # ----> repo1-s3-key=<your_access_key>
  s3_key_secret: <your_secret>    # ----> repo1-s3-key-secret=<your_secret>
  s3_uri_style: host              # ----> repo1-s3-uri-style=host
  path: /pgbackrest               # ----> repo1-path=/pgbackrest
  cipher_type: aes-256-cbc        # ----> repo1-cipher-type=aes-256-cbc
  cipher_pass: <your_password>    # ----> repo1-cipher-pass=<your_password>
  retention_full_type: time       # ----> repo1-retention-full-type=time
  retention_full: 90              # ----> repo1-retention-full=90
```

各类仓库的完整配置方法（MinIO、阿里云 OSS、AWS S3、版本控制与对象锁定）请参阅 [**备份仓库**](/docs/pgsql/backup/repository/)。


----------------

## 归档与调度

WAL 归档链路在集群初始化时自动接通：只要 [**`pgbackrest_enabled`**](/docs/pgsql/param#pgbackrest_enabled)
为真（默认），Patroni 配置模板就会为集群设置 `archive_mode: on` 与
`archive_command: pgbackrest --stanza=<集群名> archive-push %p`，WAL 段从此源源不断地流入备份仓库。

基础备份的生产则有两个入口：

* **初始备份**：集群初始化完成后，Pigsty 默认在主库上尝试执行一次全量备份（留下 `/etc/pgbackrest/initial.done` 标记，避免重复）。
  可通过 [**`pgbackrest_init_backup`**](/docs/pgsql/param#pgbackrest_init_backup) 关闭。
* **定时备份**：[**`pg_crontab`**](/docs/pgsql/param#pg_crontab) 参数声明备份计划，写入 `postgres` 用户的 crontab。
  Pigsty 随附的标准集群配置声明每天凌晨一点的全量备份；角色参数本身的默认值为空列表：

```yaml
pg_crontab: [ '00 01 * * * /pg/bin/pg-backup full' ]
```

`pg-backup` 是 pgBackRest 的薄封装：自动解析 stanza，执行 `pgbackrest backup`，并做一件重要的事 —— **角色检查**。


----------------

## 备份跟随主库

pgBackRest 安装在集群的 **所有** 节点上，但任何时刻只有 **当前主库** 实际执行备份与归档：
`pg-backup` 在运行前检查节点角色，从库上直接退出。这个看似简单的设计带来一个重要性质 —— **备份链路与高可用拓扑解耦**：

* 所有节点的备份配置完全相同，crontab 也完全相同；
* [**故障切换**](/docs/concept/ha) 后，新主库自动接续后续备份与 WAL 归档，无需人工干预；
* 备份仓库只有一份由当前主库写入的权威数据流，不存在双写冲突。

仓库在另一个方向上也参与高可用：当使用远程仓库时，Pigsty 将 pgBackRest 注册为 Patroni 的备用副本创建方式
（`create_replica_methods`）。默认仍先尝试 `basebackup`，失败后才使用 `pgbackrest --delta restore` 从仓库拉取数据；
走到这一后备路径时，造从库的流量压力会从主库转移到备份仓库。


----------------

## 性能取舍

出厂配置中还有几处针对性能的预置判断，体现同一个原则：**备份为生产让路，恢复全力以赴**。

| 配置       | 默认值               | 考量                            |
|:---------|:------------------|:------------------------------|
| 压缩算法     | `zstd`            | 高压缩比与高吞吐的平衡点，备份体积通常远小于原库      |
| 备份/归档并行度 | 约 1/4 核数（2～4 进程）  | 备份不与生产负载争抢 CPU                |
| 恢复并行度    | 核数（至多 8 进程）       | 恢复时争分夺秒，资源全开                  |
| 异步归档     | `archive-async=y` | 经 `/pg/spool` 假脱机批量推送，归档不阻塞写入 |
| 归档队列上限   | 4 GiB             | 未归档 WAL 积压超限时丢弃归档，保护主库磁盘不被写满 |
| 快速启动     | `start-fast=y`    | 备份开始时立即执行检查点，不等常规检查点周期        |
| 增量恢复     | `delta=y`         | 恢复时复用数据目录中未变化的文件，大幅缩短 RTO     |
{.full-width}

归档队列上限的具体故障行为见 [**工作原理**](/docs/concept/pitr/mechanism/#历史wal-归档)。


----------------

## 可观测性

备份不被观测，就等于没有备份。每个 PostgreSQL 节点默认运行 `pgbackrest_exporter`（端口 `9854`），
将仓库中的备份状态导出为监控指标：最近一次备份的时刻、类型、大小、持续时间、错误状态 ——
Grafana 监控面板与告警规则开箱即用。此外还有几个便捷入口：

| 入口                    | 说明                                 |
|:----------------------|:-----------------------------------|
| `pb info`             | `pgbackrest info` 的别名封装，查看仓库中的备份列表 |
| `/pg/log/pgbackrest/` | 备份、归档、恢复的详细日志                      |
| `pg-backup`           | 手动触发备份：`full` / `diff` / `incr`    |
{.full-width}

关于备份的日常管理命令，请参阅 [**管理命令**](/docs/pgsql/backup/admin/)；
理解了架构之后，下一个问题是如何为您的场景选择策略 —— 请继续阅读 [**策略权衡**](/docs/concept/pitr/tradeoff/)。
