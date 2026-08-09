---
title: "新闻"
linkTitle: "项目新闻"
weight: 10
description: "pgBackRest 项目新闻、版本发布公告与维护动态。"
icon: fa-solid fa-newspaper
module: [PGBACKREST]
categories: [参考]
---

> 原始页面： <https://pgbackrest.org/news.html>

--------

## 新的发行版 tarball {#distribution-tarball}

**2026 年 7 月 20 日**

从 pgBackRest 2.59.0 开始，每个版本都会提供一个发行版 tarball，让从源码构建变得更加简单。与 Git 仓库检出版本不同，该 tarball 已经包含生成后的源码和预先渲染的文档，因此构建和安装 pgBackRest 时不再需要仓库检出所要求的代码生成工具或文档工具。

tarball 包含 pgBackRest 源码及预生成代码、命令参考手册页、HTML 文档，以及用于验证构建的冒烟测试。仅需 pgBackRest 通常依赖的库，即可使用 meson 和 ninja 进行构建。

该 tarball 会以 `pgbackrest-{version}.tar.gz` 的名称作为附件随每个版本发布，并同时提供对应的 `.sha256sum` 校验和文件。请从 GitHub 的 [版本发布](https://github.com/pgbackrest/pgbackrest/releases) 页面下载，然后参阅 tarball 中的 `README.md` 了解构建与测试说明。

建议打包者使用发行版 tarball 进行构建，以避免未来版本因生成代码和文档而需要额外的构建工具。


--------

## pgBackRest 2.59.0 正式发布 {#release-2-59-0}

**2026 年 7 月 20 日**

pgBackRest 社区很高兴地宣布 [pgBackRest](https://pgbackrest.org) 2.59.0 正式发布。pgBackRest 是一款可靠、易用的备份与恢复解决方案，可无缝扩展以应对超大规模数据库和工作负载。

pgBackRest 为管理备份与恢复基础设施提供了丰富而强大的功能，包括：并行备份与恢复、全量/差异/增量备份、块级增量备份、多仓库、delta 恢复、并行异步归档、恶意软件/勒索软件防护、逐文件校验和、备份期间验证页面校验和（启用时）、多种压缩类型、加密、部分备份/失败备份续传、从备库执行备份、表空间与链接支持、S3/Azure/GCS/SFTP 支持、备份过期、本地或通过 SSH/TLS 进行远程操作、灵活配置，以及更多功能。

pgBackRest 可从 [PostgreSQL Yum 仓库](https://yum.postgresql.org) 或 [PostgreSQL APT 仓库](https://apt.postgresql.org) 安装，许多其他发行版也提供相应软件包。源码可从 [版本发布](/docs/pgbackrest/release/) 页面下载。

### 重要新功能与改进 {#feature}

- 支持 PostgreSQL 19（David Steele）
- 新增 `archive-expire-before` 选项，用于清理 WAL 归档（Stefan Fercot）
- 添加对 S3 Outposts 的支持（Shiva Kumar Ambigi）
- 添加 S3 进程认证支持（David Steele）
- 添加用户/组缓存，加快清单构建速度（Gunnar Lindholm）
- 服务器断开空闲连接后，重新建立 SFTP 存储连接（David Steele）
- 在 `info` 命令输出中添加各仓库的备份进度（Will Morland）
- 为 Azure 存储添加批量删除功能（David Steele）
- 为 `verify` 命令添加 `backup.info` 检查（Denis Garsh）
- 允许配置 S3 STS 端点（Simon Gratton）
- 添加 systemd 通知集成（Andrew Jackson）
- 未启用 `allow-root` 时，由 root 用户运行命令将报错（David Steele）
- 异步 `archive-push` 遇到第一个错误时退出（David Steele）

其他功能和改进请参阅 [2.59.0 版本说明](/docs/pgbackrest/release/#v2590-版本说明)。

### 重要提示 {#note}

- 默认情况下，只有 `restore` 命令允许由 root 用户运行。若要由 root 用户运行其他命令，请使用 `allow-root`（但不建议这样做）。
- 每个版本现在都会附带一个新的发行版 tarball，其中包含预生成的文档、手册页和代码，从而简化打包流程。详情请参阅 [新的发行版 tarball](#distribution-tarball)。
- 新增了对 `libsystemd` 的可选依赖。

### 相关链接 {#link}

- [网站](/docs/pgbackrest/)
- [用户指南](/docs/pgbackrest/user-guide/)
- [版本说明](/docs/pgbackrest/release/)

### 赞助 {#sponsorship}

感谢 [AWS](https://aws.amazon.com)、[Supabase](https://supabase.com)、[pgEdge](https://pgedge.com)、[Tiger Data](https://tigerdata.com)、[Percona](https://percona.com)、[Eon](https://eon.io)、[Xata](https://xata.io)、[Dalibo](https://dalibo.com) 和 [Data Egret](https://dataegret.com) 的慷慨赞助，使本次发布成为可能。


--------

## pgBackRest 将继续维护！ {#will-continue}

**2026 年 5 月 18 日**

我很高兴地宣布，pgBackRest 将继续维护！在过去几周里，多家赞助商组成联盟，为项目的持续开发提供资金。他们的支持意味着项目不再依赖单一赞助商，为 pgBackRest 提供了长期发展所需的稳定性。

我要感谢每一位赞助商：

[Amazon Web Services](https://aws.amazon.com) 为个人、企业和政府提供按需云计算资源。用户可以按实际用量付费，使用计算、存储、数据库、机器学习以及 200 多项服务。AWS 与用户共同成长，并持续投资于我们共有的社区。

[Supabase](https://supabase.com) 是一个基于 PostgreSQL 构建的完整后端平台，使开发者无需管理基础设施即可快速构建和扩展应用。它提供 Postgres 数据库、用户认证、实时订阅、文件存储、边缘函数和无服务器函数，并由活跃的开源社区提供支持。

[pgEdge](https://pgedge.com) 是面向 AI、高可用等场景的企业级开源 Postgres 平台，提供 Agentic AI 原生工具、DBA 工作台、监控与事件响应、灵活部署以及零停机维护。它可以从单节点扩展到双活多主集群，并可部署在云端、本地或网络隔离环境中。

[Tiger Data](https://tigerdata.com) 是 TimescaleDB 的创建者，负责开发基于 PostgreSQL 构建的开源时序数据库，并运营面向时序、分析和 AI 工作负载的托管平台 Tiger Cloud。无论自主管理还是使用云服务，组织都可以大规模采集、存储和分析时序数据，覆盖从边缘到集中式云端的部署场景。

[Percona](https://percona.com) 是一家开源数据库软件、支持与服务公司，致力于帮助组织完全掌控自己的数据基础设施。他们通过免费提供的开源软件、全天候专家支持和实际数据库经验，帮助企业安全高效地运行 MySQL、PostgreSQL、MongoDB、Valkey 和 Redis。

[Eon.io](https://eon.io) 提供面向备份、恢复和数据管理的智能云基础设施，帮助团队更高效地存储和访问备份，并使数据可用于分析和 AI 工作流。它为各类云环境中的 Postgres 和数据密集型工作负载提供快速、细粒度的恢复能力并显著降低存储成本，也能应对误删数据和 AI 智能体回归问题。

这些组织依赖 pgBackRest 为其产品和客户提供可靠的容灾能力。他们的投资体现了 pgBackRest 在 PostgreSQL 生态系统中的关键作用，而共同赞助则确保了项目的长期可持续发展。

我期待着重新投入工作。项目已经规划了一些令人振奋的功能和优化，我很高兴能在后续版本中与大家分享。感谢赞助商让这一切成为可能，也感谢社区在此次过渡期间的耐心与支持。


--------

## 维护动态 {#maintenance-update}

**2026 年 5 月 4 日**

在我宣布不再维护 pgBackRest 后，收件箱瞬间被塞爆了。我花了一些时间梳理这些邮件，其中很多都是对我多年工作的祝福与感谢。

但很快便出现了一种明显的共识。许多 pgBackRest 用户，尤其是那些还需要为自己的 pgBackRest 用户提供支持的人，更希望项目继续由我担任主要维护者。我当然也希望如此，但经过数月筹款后，我刚刚认定这件事不会实现。

现在情况已经改变，我几乎可以确定能够获得足够的资金让项目继续下去。这一次，pgBackRest 将由赞助商联盟提供资金，这样单次收购事件就不会再影响我继续维护项目的能力。我们应该还能引入另一位维护者来分担工作，并为项目未来提供连续性保障。

我知道这件事令人震惊，也带来了许多不确定性。请保持耐心——当前版本的 pgBackRest 可以正常工作，也没有尚未解决的关键缺陷或安全问题，因此不必立即 fork 项目。

我预计将在本周结束前发布更明确的公告。在此之前，请耐心等待；我们正积极努力让 pgBackRest 恢复活力。


--------

## pgBackRest 已不再维护 {#no-longer-maintained}

**2026 年 4 月 27 日**

简而言之：pgBackRest 已不再维护。如果您要 fork pgBackRest，请为自己的项目选择一个新名称。

经过深思熟虑，我决定停止 pgBackRest 的开发工作。这个决定并非轻率做出。过去十三年间，pgBackRest 一直是我倾注热情的项目；在其中很长一段时间里，我很幸运地获得了企业赞助，但也曾在许多个深夜和周末持续工作，并在众多贡献者的帮助下将 pgBackRest 打造成今天的项目。每一位开源开发者都清楚我的意思，也知道一个特别的项目会占据生命中的多少时间。

Crunchy Data 被收购后，我一边继续维护 pgBackRest，一边寻找能让我继续这项工作的职位，但截至目前并未成功。同样，我为项目争取赞助的努力，也远未达到维持项目所需的水平。

和所有人一样，我也需要维持生计，但与 pgBackRest 相关的职位选择非常有限。现在我可以考虑更广泛的机会，但这些工作不会给我留下维护 pgBackRest 的时间，而日常维护、修复缺陷、审核 PR、回复问题等都需要投入相当多的精力。这甚至还不包括开发新功能的时间，而那恰恰是我最喜欢的工作。与其质量低下或断断续续地继续，我认为彻底停止更为合理。

我想 pgBackRest 终有一天会被 fork，但那将是一个由新维护者负责的新项目，他们也需要像我们当初一样逐步建立信任。

再次衷心感谢这些年来所有 pgBackRest 的贡献者。与大家合作是我的荣幸！
