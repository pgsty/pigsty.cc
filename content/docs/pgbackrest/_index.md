---
title: "pgBackRest 2.60.0 中文文档"
linkTitle: "pgbackrest 文档"
weight: 8200
icon: fas fa-couch
sidebar_root_for: self
description: "可靠的 PostgreSQL 备份与恢复工具 —— pgBackRest 文档与参考手册。"
module: [PGBACKREST]
categories: [概念]
upstream_link: "https://pgbackrest.org/"
upstream_source: "pgbackrest"
upstream_ref: "v2.60.0"
search_keywords: ["v2.60.0"]
cascade: {"upstream_source": "pgbackrest"}
---

--------

## 简介

pgBackRest 是一款可靠的 PostgreSQL 备份与恢复解决方案，可无缝扩展以应对超大规模数据库和各类工作负载。

本站文档对应 pgBackRest [`v2.60.0`](https://github.com/pgbackrest/pgbackrest/releases/tag/release/2.60.0)。发布说明请查阅 [**发布历史**](/docs/pgbackrest/release/) 页面。

2.60.0 新增了可配置的页面校验和错误处理、对象存储读取预取和 GCS 工作负载身份联合。`restore` 和 `expire` 现在默认在页面校验和无效时停止；详见 [2.60.0 版本说明](/docs/pgbackrest/release/#v2600-release-notes)。

2.59.3 修复了可能生成弱加密子密钥和盐值的问题。升级不会替换 stanza 已有的弱子密钥；检查方法与修复措施请参阅 [弱加密子密钥和盐值](/docs/pgbackrest/news/#weak-encryption)。

如果您喜欢 pgBackRest，欢迎在 [**GitHub**](https://github.com/pgbackrest/pgbackrest) 上给我们点星！


--------

## 新闻

**2026 年 10 月 18 日** - [pgBackRest 2.60.0 正式发布](/docs/pgbackrest/news/#release-2-60-0)

**2026 年 10 月 4 日** - [弱加密子密钥和盐值](/docs/pgbackrest/news/#weak-encryption)

**2026 年 10 月 4 日** - [pgBackRest 2.59.3 正式发布](/docs/pgbackrest/news/#release-2-59-3)

**2026 年 9 月 27 日** - [pgBackRest 2.59.2 正式发布](/docs/pgbackrest/news/#release-2-59-2)


--------

<div id="赞助商"></div>

## 赞助商 {#sponsors}

没有赞助就不会有 pgBackRest。开发新功能、修复缺陷、审核贡献、回答社区问题以及日常维护都需要投入大量时间。如果您在企业中使用 pgBackRest，请考虑 [**赞助**](https://github.com/sponsors/dwsteele) 项目。

我们的赞助商：[AWS](https://aws.amazon.com)、[Supabase](https://supabase.com)、[pgEdge](https://pgedge.com)、[Tiger Data](https://tigerdata.com)、[Percona](https://percona.com)、[Eon](https://eon.io)、[Xata](https://xata.io)、[Dalibo](https://dalibo.com) 和 [Data Egret](https://dataegret.com)。

感谢赞助商投资于惠及整个 PostgreSQL 社区的开源基础设施。

曾经的赞助商：[Crunchy Data](https://crunchydata.com)、[Resonate](https://resonate.com)。


--------

## 功能特性


### 并行备份与恢复

压缩通常是备份操作的性能瓶颈，pgBackRest 通过并行处理以及 `lz4`、`zstd` 等高效压缩算法解决了这一问题。


### 本地或远程操作

pgBackRest 采用自定义协议，仅需极少配置即可通过 TLS/SSH 在本地或远程执行备份、恢复和归档操作。协议层还提供了查询 PostgreSQL 的接口，因此无需直接远程访问 PostgreSQL，从而增强了安全性。


### 多仓库支持

多仓库支持让用户可以灵活组合，例如：用一个保留周期较短的本地仓库快速恢复，同时用一个保留周期较长的远程仓库实现冗余备份和企业级访问。


### 从备库备份 {#backup-from-standby}

可从备库执行备份，以降低主库负载。只有少数未被复制的文件需要从主库复制。


### 全量、差异与增量备份（文件级或块级）

pgBackRest 支持全量备份（full backup）、差异备份（differential backup）和增量备份（incremental backup）。pgBackRest 不受 `rsync` 时间精度问题的影响，因此无需对每个文件都做校验和计算，差异备份和增量备份同样安全可靠。块级备份通过仅复制文件中发生变化的部分来节省存储空间。


### 备份轮换与归档过期

可为全量备份和差异备份分别设置保留策略，覆盖任意时间范围。WAL 归档可以针对所有备份维护，也可以只针对最近的备份维护；后一种情况下，旧备份保持一致性所必需的 WAL 会继续保留在归档中。


### 备份完整性

pgBackRest 为备份中的每个文件计算校验和，并在恢复或验证时重新校验。备份完成文件复制后，会等待所有维持备份一致性所需的 WAL 段到达仓库。

仓库中的备份可以与标准 PostgreSQL 集群相同的格式存储（含表空间）。若禁用压缩并启用硬链接，可对仓库中的备份创建快照，并直接在快照上启动 PostgreSQL 集群。这对于以传统方式恢复耗时较长的 TB 级数据库尤为有利。

所有操作均使用文件和目录级 fsync 以确保持久性。


### 页面校验和

若启用了页面校验和，pgBackRest 在备份时会对每个复制的文件进行校验和验证。全量备份时验证所有页面的校验和，差异备份和增量备份时仅验证已变更文件的校验和。

默认情况下，校验和验证失败不会中止备份进程，而是将包含具体失败页面详情的警告信息输出到控制台和日志文件。默认情况下，备份含有无效页面校验和时，restore 会报错；expire 也不会让含有无效页面校验和的备份成为保留的最旧备份。

此功能可在包含有效数据副本的备份过期之前，提前发现页面级损坏。


### 备份续传

中断的备份可从中断位置续传。已复制的文件会与清单文件（manifest）中的校验和进行比对以确保完整性。由于该操作可完全在仓库主机上执行，因此减轻了数据库主机的负载，并因校验和计算比重新压缩和重传数据更快而节省了时间。


### 流式压缩与校验和

无论仓库位于本地还是远程，压缩和校验和计算均在文件复制到仓库的过程中以流式方式同步进行。

若仓库位于仓库主机上，压缩在数据库主机上执行，文件以压缩格式传输并直接存储到仓库主机。若禁用压缩，则采用较低级别的压缩，在最大程度降低 CPU 开销的同时有效利用可用带宽。


### 文件打包 {#file-bundling}

仓库中的小文件会合并成文件包，以减少备份时创建的文件数量。这对对象存储尤其有效。


### Delta 恢复

清单文件（manifest）包含备份中每个文件的校验和，恢复时可利用这些校验和大幅加速处理过程。执行 delta restore 时，先删除备份中不存在的文件，再对剩余文件计算校验和；与备份匹配的文件原地保留，其余文件按常规方式恢复。并行处理可显著缩短恢复时间。


### 并行异步 WAL 推送与获取

pgBackRest 提供了专用命令，用于将 WAL 推送到归档以及从归档获取 WAL。两个命令均支持并行处理以加速操作，并以异步方式运行，尽可能快速地响应 PostgreSQL 的请求。

WAL 推送会自动检测被重复推送的 WAL 段：内容相同则去重，内容不同则报错。异步 WAL 推送可将传输任务卸载到后台进程，该进程并行压缩 WAL 段以实现最大吞吐量。对于写入量极大的数据库，这是一项关键功能。

异步 WAL 获取会在本地维护一个已解压、可供回放的 WAL 段队列，从而减少向 PostgreSQL 提供 WAL 所需的延迟，最大化回放速度。高延迟连接和存储（如 S3）受益最为明显。

推送和获取命令均通过比对 PostgreSQL 版本和系统标识符来确保数据库与仓库匹配，从而几乎消除了 WAL 归档位置配置错误的风险。


### 表空间与链接支持

pgBackRest 完全支持表空间，恢复时可将表空间重新映射到任意位置。也可通过单条命令将所有表空间映射到同一位置，在开发环境恢复时非常实用。

pgBackRest 支持 PostgreSQL 集群中任意文件或目录的文件链接和目录链接。恢复时，可将所有链接还原到原始位置、重新映射部分或全部链接，也可将部分或全部链接以普通文件或目录的形式恢复到集群目录中。


<span id="兼容-s3azure-和-gcs-对象存储"></span>

### S3、Azure、GCS 和 SFTP 支持 {#s3-azure-and-gcs-compatible-object-store-support}

pgBackRest 仓库可存储在兼容 S3、Azure 和 GCS 的对象存储中，从而实现近乎无限的存储容量和保留期限。仓库也可以存储在 SFTP 服务器上。在云环境中，可使用多种身份验证方式自动获取对象存储凭据。


### 加密

pgBackRest 支持对仓库加密，无论备份存储在何处，均能保障数据安全。


### 勒索软件与恶意软件防护

当仓库存储在启用了版本控制的对象存储中时，pgBackRest 可以按指定时间点读取仓库。如果备份因误操作、恶意软件或勒索软件而被删除或损坏，可以设置目标时间，恢复受损前的数据。

兼容 S3、Azure 和 GCS 的对象存储均支持版本控制。S3 的对象锁定以及 GCS 或 Azure 的软删除可以提供额外的防篡改保护。


### 兼容十个 PostgreSQL 版本

pgBackRest 支持十个 PostgreSQL 版本，包括五个仍在官方支持期内的版本和最近五个已终止支持（EOL）的版本，为用户升级到受支持版本留出了充足时间。


--------

## 快速入门

pgBackRest 致力于提供简便的配置和操作体验：

- 针对各种操作系统和 PostgreSQL 版本的 [**用户指南**](/docs/pgbackrest/user-guide/)。
- 命令行操作的命令页面： [**`backup`**](/docs/pgbackrest/command/backup/)、 [**`restore`**](/docs/pgbackrest/command/restore/)、 [**`check`**](/docs/pgbackrest/command/check/) 和 [**`info`**](/docs/pgbackrest/command/info/)。
- 创建 pgBackRest 配置的 [**配置参考**](/docs/pgbackrest/configuration/)。


--------

## 贡献

我们随时欢迎对 pgBackRest 的贡献！请参阅 [**贡献指南**](https://github.com/pgbackrest/pgbackrest/blob/main/CONTRIBUTING.md) 了解如何贡献功能、改进或提交问题反馈。


--------

## 支持

pgBackRest 基于 [**MIT**](https://github.com/pgbackrest/pgbackrest/blob/main/LICENSE) 许可证完全免费开源，可用于个人或商业用途，不受任何限制。我们非常重视 Bug 报告，并将尽快处理。请在 [**此处**](https://github.com/pgbackrest/pgbackrest/issues) 提交 Bug。

制定完善的容灾方案（包含合理的复制和备份策略）可能是一项复杂而艰巨的任务。在架构设计阶段和持续运营中，您可能需要专业支持以确保企业业务平稳运行。

我们的 [赞助商](#sponsors) 所提供的产品和服务包含 pgBackRest 支持，可协助您满足容灾需求。

## 来源与许可 {#upstream-attribution}

本手册以 pgBackRest 2.60.0 为基准，于 2026-10-28 从 [PG.CENTER 中文文档](https://doc.pg.center/zh/pgbackrest/) 同步，并适配本站路径与导航。

Copyright (c) 2015-2026 The PostgreSQL Global Development Group and David Steele。原始文档采用 [MIT 许可证](https://opensource.org/license/mit)，完整版权与许可声明见 [上游文件](https://github.com/pgbackrest/pgbackrest/blob/release/2.60.0/LICENSE)。
