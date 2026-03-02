---
title: "pgBackRest 2.58 文档"
linkTitle: "pgbackrest 文档"
weight: 8200
icon: fas fa-couch
sidebar_root_for: self
description: "可靠的 PostgreSQL 备份与恢复工具 —— pgBackRest 文档与参考手册。"
module: [PGBACKREST]
category: [Concept]
---

> snapshot of pgBackrest 2.58 documentation: <https://pgbackrest.org/>


--------

## 简介

pgBackRest 是一款可靠的 PostgreSQL 备份与恢复解决方案，可无缝扩展以应对超大规模数据库和高并发工作负载。

pgBackRest [v2.58.0](https://github.com/pgbackrest/pgbackrest/releases/tag/release/2.58.0) 是当前稳定版本。发布说明请查阅 [**发布历史**](/docs/pgbackrest/release/) 页面。

如果您喜欢 pgBackRest，欢迎在 [GitHub](https://github.com/pgbackrest/pgbackrest) 上给我们点星！如果您在企业中使用 pgBackRest，请考虑 [赞助](https://github.com/sponsors/dwsteele) 项目。



--------

## 功能特性


### 并行备份与恢复

压缩通常是备份操作的性能瓶颈，pgBackRest 通过并行处理以及 `lz4`、`zstd` 等高效压缩算法解决了这一问题。


### 本地或远程操作

pgBackRest 采用自定义协议，仅需极少配置即可通过 TLS/SSH 在本地或远程执行备份、恢复和归档操作。协议层还提供了查询 PostgreSQL 的接口，因此无需直接远程访问 PostgreSQL，从而增强了安全性。


### 多仓库支持

多仓库支持让用户可以灵活组合，例如：用一个保留周期较短的本地仓库快速恢复，同时用一个保留周期较长的远程仓库实现冗余备份和企业级访问。


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

校验和验证失败不会中止备份进程，而是将包含具体失败页面详情的警告信息输出到控制台和日志文件。

此功能可在包含有效数据副本的备份过期之前，提前发现页面级损坏。


### 备份续传

中断的备份可从中断位置续传。已复制的文件会与清单文件（manifest）中的校验和进行比对以确保完整性。由于该操作可完全在仓库主机上执行，因此减轻了数据库主机的负载，并因校验和计算比重新压缩和重传数据更快而节省了时间。


### 流式压缩与校验和

无论仓库位于本地还是远程，压缩和校验和计算均在文件复制到仓库的过程中以流式方式同步进行。

若仓库位于仓库主机上，压缩在数据库主机上执行，文件以压缩格式传输并直接存储到仓库主机。若禁用压缩，则采用较低级别的压缩，在最大程度降低 CPU 开销的同时有效利用可用带宽。


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


### 兼容 S3、Azure 和 GCS 对象存储

pgBackRest 仓库可存储在兼容 S3、Azure 和 GCS 的对象存储中，从而实现近乎无限的存储容量和保留期限。


### 加密

pgBackRest 支持对仓库加密，无论备份存储在何处，均能保障数据安全。


### 兼容十个 PostgreSQL 版本

pgBackRest 支持十个 PostgreSQL 版本，包括五个仍在官方支持期内的版本和最近五个已终止支持（EOL）的版本，为用户升级到受支持版本留出了充足时间。


--------

## 快速入门

pgBackRest 致力于提供简便的配置和操作体验：

- 针对各种操作系统和 PostgreSQL 版本的 [**用户指南**](/docs/pgbackrest/user-guide/)。
- 常用命令行操作参考：[**`backup`**](/docs/pgbackrest/command/backup/)、 [**`restore`**](/docs/pgbackrest/command/restore/)、 [**`check`**](/docs/pgbackrest/command/check/) 和 [**`info`**](/docs/pgbackrest/command/info/)。
- 创建 pgBackRest 配置的 [**配置参考**](/docs/pgbackrest/configuration/)。

v1 版本的文档可在 [此处](http://www.pgbackrest.org/1) 查阅。v1 不再计划发布新版本，v2 与 v1 的选项和仓库完全向后兼容。




--------

## 贡献

我们随时欢迎对 pgBackRest 的贡献！请参阅 [**贡献指南**](https://github.com/pgbackrest/pgbackrest/blob/main/CONTRIBUTING.md) 了解如何贡献功能、改进或提交问题反馈。


--------

## 支持

pgBackRest 基于 [MIT](https://github.com/pgbackrest/pgbackrest/blob/main/LICENSE) 许可证完全免费开源，可用于个人或商业用途，不受任何限制。我们非常重视 Bug 报告，并将尽快处理。请在 [此处](https://github.com/pgbackrest/pgbackrest/issues) 提交 Bug。

制定完善的容灾方案（包含合理的复制和备份策略）可能是一项复杂而艰巨的任务。在架构设计阶段和持续运营中，您可能需要专业支持以确保企业业务平稳运行。目前有多家 PostgreSQL 支持公司可提供此类服务。


--------

## 致谢

[Crunchy Data](http://www.crunchydata.com) 和 [Resonate](http://www.resonate.com) 慷慨地支持了 pgBackRest 的开发。

[Armchair](https://thenounproject.com/icon/armchair-129971) 图标由 [Alexander Skowalsky](https://thenounproject.com/sandorsz) 设计。
