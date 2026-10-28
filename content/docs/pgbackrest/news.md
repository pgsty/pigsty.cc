---
title: "新闻"
linkTitle: "项目新闻"
weight: 10
description: "pgBackRest 项目新闻、版本发布公告与维护动态。"
icon: fa-solid fa-newspaper
module: [PGBACKREST]
categories: [参考]
upstream_link: "https://pgbackrest.org/news.html"
---

--------

## pgBackRest 2.60.0 正式发布 {#release-2-60-0}

**2026 年 10 月 18 日**

pgBackRest 社区很高兴地宣布 [pgBackRest](https://pgbackrest.org) 2.60.0 正式发布。pgBackRest 是一款可靠、易用的备份与恢复解决方案，可无缝扩展以应对超大规模数据库和工作负载。

pgBackRest 为管理备份与恢复基础设施提供了丰富而强大的功能，包括：并行备份与恢复、全量/差异/增量备份、块级增量备份、多仓库、delta 恢复、并行异步归档、恶意软件/勒索软件防护、逐文件校验和、备份期间验证页面校验和（启用时）、多种压缩类型、加密、部分备份/失败备份续传、从备库执行备份、表空间与链接支持、S3/Azure/GCS/SFTP 支持、备份过期、本地或通过 SSH/TLS 进行远程操作、灵活配置，以及更多功能。

pgBackRest 可从 [PostgreSQL Yum 仓库](https://yum.postgresql.org) 或 [PostgreSQL APT 仓库](https://apt.postgresql.org) 安装，许多其他发行版也提供相应软件包。源码可从 [版本发布](/docs/pgbackrest/release/) 页面下载。

### 主要新功能与改进 {#release-2-60-0-feature}

- 新增 checksum-page-error 选项，在页面校验和无效时报错 (Andrew Pogrebnoi)
- 支持 GCS 工作负载身份联合 (Adol Rodriguez)
- 从对象存储预取多个文件/范围的读取请求 (David Steele)
- 减少发送给远程进程的保活请求 (David Steele)
- 重试 Azure 响应中缺失的批处理子请求 (David Steele)
- 减少重建 backup.info 时的清单检查 (David Steele)
- 支持在 illumos 上构建 (Kalevi Kolttonen)
- 支持 OpenSSL 4 (David Steele)
- 更新网站设计 (David Steele, Jan Wieremjewicz)

更多功能与改进请参阅 [2.60.0 版本说明](/docs/pgbackrest/release/#v2600-release-notes)。

### 重要提示 {#release-2-60-0-note}

- restore 命令现在会在任一恢复文件包含无效页面校验和时报错并停止，此时集群不完整、无法启动，必须重新执行恢复。如果保留的最旧备份将包含校验和错误，expire 命令现在会拒绝执行过期操作，该仓库中的归档也因此无法过期。设置 checksum-page-error=n 可改为仅发出警告。
- 从 Git 检出目录构建时需要 PyYAML，不再需要 libyaml。发行版 tar 包包含生成的代码，两者均不需要。
- v2.59.2 及后续版本（包括本版本）支持 PostgreSQL 19rc1。

### 相关链接 {#release-2-60-0-link}

- [网站](/docs/pgbackrest/)
- [用户指南](/docs/pgbackrest/user-guide/)
- [版本说明](/docs/pgbackrest/release/)

### 赞助 {#release-2-60-0-sponsorship}

感谢 [AWS](https://aws.amazon.com)、[Supabase](https://supabase.com)、[pgEdge](https://pgedge.com)、[Tiger Data](https://tigerdata.com)、[Percona](https://percona.com)、[Eon](https://eon.io)、[Xata](https://xata.io)、[Dalibo](https://dalibo.com) 和 [Data Egret](https://dataegret.com/) 的慷慨赞助，使本次发布成为可能。


--------

## 弱加密子密钥和盐值 {#weak-encryption}

**2026 年 10 月 4 日**

pgBackRest 2.59.3 之前的版本在生成加密所需的随机数据时，未检查是否发生错误。如果 OpenSSL 无法从操作系统获取随机数据，就会使用内存中已有的数据生成加密子密钥和盐值，且不报告错误。未启用加密的仓库不受影响。

这种错误应该很少见。可能的原因包括沙箱或 seccomp 策略阻止 `getrandom()` 系统调用，以及 OpenSSL 配置无效。

主要需要关注 `archive.info` 和 `backup.info` 中的子密钥。它们由 `stanza-create` 一次性生成，在 stanza 的整个生命周期内使用，因此升级不会替换弱子密钥。弱备份子密钥和盐值会随着备份与 WAL 的过期而被移除。

### 影响 {#weak-encryption-impact}

WAL 子密钥存储在 `archive.info` 中，清单子密钥存储在 `backup.info` 中。弱子密钥比随机子密钥更容易被猜出；猜出子密钥后，无需 `repo-cipher-pass` 即可解密用该子密钥加密的文件。具体容易多少取决于内存中的数据，而这些数据因平台和构建而异。`archive.info` 中的弱子密钥会使仓库中的所有 WAL 面临泄露风险。`backup.info` 中的弱子密钥会使所有备份面临泄露风险，因为清单使用它加密，而每份清单都存储着对应备份中文件的子密钥。这也包括升级后新增的 WAL 和备份。

每次全量备份都会生成一个用于加密备份文件的子密钥，基于该全量备份的差异备份和增量备份也使用这个子密钥。弱备份子密钥会使这些备份中的文件面临泄露风险。

弱盐值不会泄露子密钥。使用相同子密钥和盐值加密的文件会使用相同的密钥和 IV，因此这些文件中的相同数据会产生相同的密文。盐值以明文存储在每个文件的开头，弱盐值可能包含最多 8 字节此前位于内存中的数据。

### 检查子密钥 {#weak-encryption-check-subkey}

在能够访问仓库的主机上运行以下命令，将 `STANZA` 设为 stanza 名称。若要检查第一个仓库以外的仓库，请为 `pgbackrest` 命令添加 `--repo`。

```bash
STANZA=demo

for file in archive/$STANZA/archive.info backup/$STANZA/backup.info; do
    for key in $(pgbackrest --stanza=$STANZA repo-get $file | grep '^cipher-pass=' | grep -oE '[A-Za-z0-9+/]{64}'); do
        echo "$(printf '%s' $key | base64 -d | od -An -v -tx1 | tr -s ' ' '\n' | grep -c '^00$') $file"
    done
done
```

第一列是子密钥中零字节的数量。随机子密钥包含 6 个或更多零字节的概率低于 25,000,000 分之一，而测试中发现的弱子密钥包含 13 个或更多零字节。包含 6 个或更多零字节的子密钥应视为弱子密钥。

### OpenSSL 1.0 {#weak-encryption-openssl-1-0}

pgBackRest 2.53 之前的版本可以使用 OpenSSL 1.0 构建。当其无法从操作系统获取随机数据时，会使用未经随机数据播种的状态生成随机数据。上述检查无法检测以这种方式生成的弱子密钥。

### 修复措施 {#weak-encryption-remediation}

- 升级到 pgBackRest 2.59.3 或更高版本；这些版本会在无法生成随机数据时报错。
- 如果 `archive.info` 或 `backup.info` 中的子密钥是弱子密钥，请在新仓库中创建 stanza，旧仓库仅保留到不再需要其中备份为止。
- 考虑在升级后执行一次新的全量备份，因为差异备份和增量备份会使用其全量备份的子密钥。
- 弱备份子密钥和盐值会随着升级前的备份与 WAL 过期而被移除。保留期较长的备份会一直保留它们，直到这些备份过期。


--------

## pgBackRest 2.59.3 正式发布 {#release-2-59-3}

**2026 年 10 月 4 日**

pgBackRest 社区很高兴地宣布 [pgBackRest](https://pgbackrest.org) 2.59.3 正式发布。pgBackRest 是一款可靠、易用的备份与恢复解决方案，可无缝扩展以应对超大规模数据库和工作负载。

pgBackRest 为管理备份与恢复基础设施提供了丰富而强大的功能，包括：并行备份与恢复、全量/差异/增量备份、块级增量备份、多仓库、delta 恢复、并行异步归档、恶意软件/勒索软件防护、逐文件校验和、备份期间验证页面校验和（启用时）、多种压缩类型、加密、部分备份/失败备份续传、从备库执行备份、表空间与链接支持、S3/Azure/GCS/SFTP 支持、备份过期、本地或通过 SSH/TLS 进行远程操作、灵活配置，以及更多功能。

pgBackRest 可从 [PostgreSQL Yum 仓库](https://yum.postgresql.org) 或 [PostgreSQL APT 仓库](https://apt.postgresql.org) 安装，许多其他发行版也提供相应软件包。源码可从 [版本发布](/docs/pgbackrest/release/) 页面下载。

### 缺陷修复 {#release-2-59-3-feature}

- 修复可能生成弱加密子密钥或盐值的问题 (j0uinim)
- 修复加载加密的信息文件和清单文件时可能出现校验和错误的问题 (j0uinim)

其他修复和改进请参阅 [2.59.3 版本说明](/docs/pgbackrest/release/#v2593-release-notes)。

### 重要提示 {#release-2-59-3-note}

- 旧版本在访问系统随机数据出错时，可能生成弱加密子密钥和盐值。详情请参阅 [弱加密子密钥和盐值](/docs/pgbackrest/news/#weak-encryption)。

### 相关链接 {#release-2-59-3-link}

- [网站](/docs/pgbackrest/)
- [用户指南](/docs/pgbackrest/user-guide/)
- [版本说明](/docs/pgbackrest/release/)

### 赞助 {#release-2-59-3-sponsorship}

感谢 [AWS](https://aws.amazon.com)、[Supabase](https://supabase.com)、[pgEdge](https://pgedge.com)、[Tiger Data](https://tigerdata.com)、[Percona](https://percona.com)、[Eon](https://eon.io)、[Xata](https://xata.io)、[Dalibo](https://dalibo.com) 和 [Data Egret](https://dataegret.com) 的慷慨赞助，使本次发布成为可能。



--------

## pgBackRest 2.59.2 正式发布 {#release-2-59-2}

**2026 年 9 月 27 日**

pgBackRest 社区很高兴地宣布 [pgBackRest](https://pgbackrest.org) 2.59.2 正式发布。pgBackRest 是一款可靠、易用的备份与恢复解决方案，可无缝扩展以应对超大规模数据库和工作负载。

pgBackRest 为管理备份与恢复基础设施提供了丰富而强大的功能，包括：并行备份与恢复、全量/差异/增量备份、块级增量备份、多仓库、delta 恢复、并行异步归档、恶意软件/勒索软件防护、逐文件校验和、备份期间验证页面校验和（启用时）、多种压缩类型、加密、部分备份/失败备份续传、从备库执行备份、表空间与链接支持、S3/Azure/GCS/SFTP 支持、备份过期、本地或通过 SSH/TLS 进行远程操作、灵活配置，以及更多功能。

pgBackRest 可从 [PostgreSQL Yum 仓库](https://yum.postgresql.org) 或 [PostgreSQL APT 仓库](https://apt.postgresql.org) 安装，许多其他发行版也提供相应软件包。源码可从 [版本发布](/docs/pgbackrest/release/) 页面下载。

### 新功能与漏洞修复 {#release-2-59-2-feature}

- 支持 PostgreSQL 19beta4（David Steele）
- 修复备份期间文件被截断为零长度时产生空块映射的问题（David Steele）
- 向驱动传入过滤器时，禁用读取重试（David Steele）
- 修复 S3 对象版本列表的分页问题（David Steele）
- 使用 SAS 认证时设置 Azure 版本请求头（David Steele）
- 修复异步 `archive-push` 遇到零长度备份历史文件时停滞的问题（Andrew Kroh）
- 修复 `annotate` 命令在远程加密仓库上执行时的问题（Douglas J Hunley）

其他修复和改进请参阅 [2.59.2 版本说明](/docs/pgbackrest/release/#v2592-版本说明)。

### 重要提示 {#release-2-59-2-note}

- PostgreSQL 19beta4 更改了 `pg_control` 和 WAL 格式，因此不再支持早期 PostgreSQL 19 beta 版本的集群及其 WAL。运行早期 beta 版本的集群应使用 19beta4 重新创建。

### 相关链接 {#release-2-59-2-link}

- [网站](/docs/pgbackrest/)
- [用户指南](/docs/pgbackrest/user-guide/)
- [版本说明](/docs/pgbackrest/release/)

### 赞助 {#release-2-59-2-sponsorship}

感谢 [AWS](https://aws.amazon.com)、[Supabase](https://supabase.com)、[pgEdge](https://pgedge.com)、[Tiger Data](https://tigerdata.com)、[Percona](https://percona.com)、[Eon](https://eon.io)、[Xata](https://xata.io)、[Dalibo](https://dalibo.com) 和 [Data Egret](https://dataegret.com) 的慷慨赞助，使本次发布成为可能。


--------

## pgBackRest 2.59.1 正式发布 {#release-2-59-1}

**2026 年 8 月 17 日**

pgBackRest 社区很高兴地宣布 [pgBackRest](https://pgbackrest.org) 2.59.1 正式发布。pgBackRest 是一款可靠、易用的备份与恢复解决方案，可无缝扩展以应对超大规模数据库和工作负载。

pgBackRest 为管理备份与恢复基础设施提供了丰富而强大的功能，包括：并行备份与恢复、全量/差异/增量备份、块级增量备份、多仓库、delta 恢复、并行异步归档、恶意软件/勒索软件防护、逐文件校验和、备份期间验证页面校验和（启用时）、多种压缩类型、加密、部分备份/失败备份续传、从备库执行备份、表空间与链接支持、S3/Azure/GCS/SFTP 支持、备份过期、本地或通过 SSH/TLS 进行远程操作、灵活配置，以及更多功能。

pgBackRest 可从 [PostgreSQL Yum 仓库](https://yum.postgresql.org) 或 [PostgreSQL APT 仓库](https://apt.postgresql.org) 安装，许多其他发行版也提供相应软件包。源码可从 [版本发布](/docs/pgbackrest/release/) 页面下载。

### 新功能与漏洞修复 {#release-2-59-1-feature}

- 支持 PostgreSQL 19beta3（Lardière Sébastien）
- 修复分块缓冲区小于输入缓冲区时发生挂起的问题（David Steele）
- 新备份标签仅与其所属的全量备份集比较（David Steele）
- 修复 GitHub 生成的源码归档缺少构建所需文件的问题（David Steele）

其他修复和改进请参阅 [2.59.1 版本说明](/docs/pgbackrest/release/#v2591-版本说明)。

### 重要提示 {#release-2-59-1-note}

- PostgreSQL 19beta3 更改了 WAL 格式，因此早期 PostgreSQL 19 beta 归档的 WAL 已无法读取。运行早期 beta 版本的集群应使用 19beta3 重新创建。

### 相关链接 {#release-2-59-1-link}

- [网站](/docs/pgbackrest/)
- [用户指南](/docs/pgbackrest/user-guide/)
- [版本说明](/docs/pgbackrest/release/)

### 赞助 {#release-2-59-1-sponsorship}

感谢 [AWS](https://aws.amazon.com)、[Supabase](https://supabase.com)、[pgEdge](https://pgedge.com)、[Tiger Data](https://tigerdata.com)、[Percona](https://percona.com)、[Eon](https://eon.io)、[Xata](https://xata.io)、[Dalibo](https://dalibo.com) 和 [Data Egret](https://dataegret.com) 的慷慨赞助，使本次发布成为可能。


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

[Percona](https://percona.com) 是一家开源数据库软件、支持与服务公司，致力于帮助组织完全掌控自己的数据基础设施。他们通过免费提供的开源软件、全天候（24/7）专家支持和实际数据库经验，帮助企业安全高效地运行 MySQL、PostgreSQL、MongoDB、Valkey 和 Redis。

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
