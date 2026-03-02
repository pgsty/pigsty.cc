---
title: "版本发布说明"
linkTitle: "版本历史"
weight: 60
description: "pgBackRest 版本发布历史，包含每个版本的详细变更日志。"
icon: fa-solid fa-scroll
module: [PGBACKREST]
category: [Reference]
---

> 原始页面： <https://pgbackrest.org/release.html>

--------

## 简介

pgBackRest 的版本号由主版本号和次版本号两部分组成。主版本升级**可能**破坏与上一主版本的兼容性，但 v2 版本与 v1 仓库完全兼容，且接受所有 v1 选项。次版本可包含漏洞修复和新功能，但不会更改仓库格式，并尽量避免修改选项和命名约定。v1 版本的文档可在 [此处](http://www.pgbackrest.org/1) 查阅。版本说明中还可能包含"附加说明"，此部分变更仅涉及文档或测试套件，不直接影响 pgBackRest 代码库。


--------

## 当前稳定版本


### v2.58.0 版本说明

*对象存储改进*

*发布于 2026 年 1 月 19 日*

**重要提示**：`--repo-storage-upload-chunk-size` 选项的最小值已提高，现在代表各云存储供应商所允许的最小值。

**漏洞修复：**

- 修复信号处理程序中日志记录引发的死锁问题。（*由 Maxim Michkov 修复，David Steele 审核。*）

**新功能：**

- 为 S3、GCS 和 Azure 添加 HTTP 支持。（*由 Will Morland 贡献，David Steele 审核。*）
- 允许直接过期最旧的全量备份，不受当前保留策略限制。（*由 Stefan Fercot 贡献，David Steele 审核，Ron Johnson 建议。*）
- 支持 Azure 托管标识（managed identities）。（*由 Moiz Ibrar、Matthew Mols 贡献，David Steele 审核。*）
- ***实验性*** 支持 S3 EKS Pod 身份认证。（*由 Pierre BOUTELOUP 贡献，David Steele 审核。*）
- 允许配置 TLS 密码套件。（*由 Gunnar "Nick" Bluth 贡献，David Steele 审核。*）
- 允许设置进程优先级。（*由 Douglas J Hunley 审核。*）

**改进：**

- 使用 path-style URI 时，允许 S3 桶名中包含点号。（*由 Joakim Hindersson 贡献，David Steele 审核。*）
- 除非禁用验证，否则要求 TLS >= 1.2。（*由 Douglas J Hunley、Gunnar "Nick" Bluth 审核。*）
- 针对大文件上传，动态调整 S3/GCS/Azure 的分块大小。（*由 Douglas J Hunley 审核，Timothée Peignier 建议。*）
- 针对小文件，优化 S3/GCS/Azure 的分块大小。（*由 Douglas J Hunley 审核。*）
- 移除对 PostgreSQL `9.5` 的支持。（*由 Douglas J Hunley 审核。*）
- 改进存在未解析依赖项的选项在默认值日志中的输出信息。（*由 Stefan Fercot 审核。*）

**文档改进：**

- 从用户指南中移除显式的 `max_wal_senders`/`wal_level` 配置说明。（*由 Jamie Nguyen 建议。*）
- 阐明 bundling（包捆绑）在大块大小文件系统上的优势。（*由 Ron Johnson 建议。*）


--------

## 稳定版本


### v2.57.0 版本说明

*禁止仓库符号链接*

*发布于 2025 年 10 月 18 日*

**漏洞修复：**

- 解除 HTTP/TLS/socket 超时的嵌套处理。（*由 David Christensen 审核。*）
- 修复页面校验和错误信息中可能出现的段错误。（*由 Zsolt Parragi 修复，David Steele 审核。*）

**新功能：**

- 新增 `--repo-symlink` 选项，用于禁止创建仓库符号链接。（*由 Douglas J Hunley 审核，Ron Johnson 建议。*）

**改进：**

- 为 HTTP 408 和 429 错误添加重试机制。（*由 David Christensen 审核。*）


### v2.56.0 版本说明

*进度信息改进*

*发布于 2025 年 7 月 21 日*

**漏洞修复：**

- 修复仓库中无备份时临时过期操作（adhoc expiration）的问题。（*由 Stefan Fercot 审核，Anup Gupta 报告。*）

**新功能：**

- 在 `info` 命令输出中添加恢复进度信息。（*由 Denis Garsh、Maxim Michkov 贡献，David Steele 审核。*）
- 为 `info` 命令输出添加仅显示进度的详细级别。（*由 Denis Garsh 贡献，David Steele、Stefan Fercot 审核。*）

**改进：**

- 在对象存储上重试失败的读取操作。（*由 David Christensen 审核。*）
- 修复命令行帮助中默认值的显示问题。（*由 David Christensen、Chris Bandy 审核。*）

**文档改进：**

- 在适当情况下，以列表形式描述离散选项值。（*由 Anton Kurochkin 贡献，David Steele 审核。*）
- 修复 `archive-mode` 选项帮助输出中"小于"的描述。（*由 Anton Kurochkin 贡献，David Steele 审核。*）


### v2.55.1 版本说明

*漏洞修复*

*发布于 2025 年 5 月 5 日*

**漏洞修复：**

- 回滚"仅在需要时才在 S3 上计算 content-md5"的变更。（*由 David Christensen 审核，Frank Brendel 报告。*）
- 修复选项键的下界检查。（*由 David Christensen、Wolfgang Walther 审核，Wolfgang Walther 报告。*）


### v2.55.0 版本说明

*验证功能改进与 PostgreSQL 18 支持*

*发布于 2025 年 4 月 21 日*

**漏洞修复：**

- 修复在非默认仓库上进行块级增量恢复的问题。（*由 David Christensen、Aleksander Łukasz 审核，Aleksander Łukasz 报告。*）
- 对于 PostgreSQL < 12，不再设置 `recovery_target_timeline=current`。（*由 Stefan Fercot 审核。*）
- 修复归档范围过期的日志记录问题。（*由 Stefan Fercot 审核，Aleš Zelený 报告。*）
- 修复无结果查询的错误报告。（*由 Stefan Fercot 审核，Susantha Bathige 报告。*）

**新功能：**

- 支持验证恢复目标时间线。（*由 Stefan Fercot 审核。*）
- 允许对指定备份执行验证。（*由 Maxim Michkov 贡献，David Steele 审核。*）
- 新增对 S3/GCS 请求方付费（requester pays）的支持。（*由 Timothée Peignier 贡献，David Steele 审核。*）
- 支持 PostgreSQL 18。（*由 Stefan Fercot 审核。*）
- 允许通过抽象域套接字（abstract domain sockets）连接 PostgreSQL。（*由 Chris Bandy 审核，Chris Bandy 建议。*）
- 为 `version` 命令添加数字格式输出。（*由 Stefan Fercot 贡献，David Steele 审核。*）

**改进：**

- 允许 `backup` 命令在远程仓库上运行。（*由 Stefan Fercot 审核。*）
- 使用 lz4 进行协议压缩。（*由 Stefan Fercot 审核。*）
- 仅在需要时才在 S3 上计算 `content-md5`。（*由 David Christensen 审核。*）
- 多键选项的值被覆盖时，发出警告。（*由 David Christensen、Stefan Fercot 审核。*）
- 为已过期归档路径添加详细日志记录。（*由 Stefan Fercot 贡献，David Steele 审核。*）
- 移除对 PostgreSQL `9.4` 的支持。（*由 Stefan Fercot 审核。*）
- 移除 autoconf/make 构建方式。（*由 David Christensen 审核。*）

**文档改进：**

- 修复为多个 stanza 指定 `--tls-server-auth` 时的文档说明。（*由 David Christensen、Stefan Fercot 审核，Terry MacAndrew 建议。*）
- 阐明增量备份的过期机制。（*由 Stefan Fercot 审核。*）
- 阐明本地与远程 pgBackRest 版本须保持一致的要求。（*由 Greg Clough 贡献，David Steele 审核。*）
- 新增关于导出自包含集群的常见问题解答。（*由 Stefan Fercot 贡献，David Steele 审核。*）
- 补充 `--tablespace-map-all` 关于表空间创建的注意事项。（*由 Stefan Fercot、Christophe Courtois 审核，Christophe Courtois 建议。*）
- 阐明 `--repo-retention-full-type` 的行为。（*由 Antoine Beaupré 审核，Antoine Beaupré 建议。*）
- 将对象存储的 `--process-max` 建议改为使用 `--repo-bundle`。（*由 Stefan Fercot 审核。*）
- 将 `unix_socket_directory` 更新为 `unix_socket_directories`。（*由 hyunkyu han 贡献，David Steele 审核。*）
- 建议不要将 `--spool-path` 置于 `pg_xlog`/`pg_wal` 目录内。（*由 Martín Marqués、Don Seiler 审核，Martín Marqués 建议。*）


### v2.54.2 版本说明

*漏洞修复*

*发布于 2025 年 1 月 20 日*

**漏洞修复：**

- 修复在启用块级增量的情况下禁用 bundling 后出现的问题。（*由 David Christensen 审核。*）

**文档改进：**

- 阐明多个配置文件的行为方式。（*由 Paul Bierly 审核，Paul Bierly 建议。*）


### v2.54.1 版本说明

*漏洞修复*

*发布于 2024 年 12 月 16 日*

**漏洞修复：**

- 修复 `version`/`help` 命令尝试加载 `pgbackrest.conf` 的问题。（*由 Stefan Fercot 审核，Bradford Boyle、Julian 报告。*）

**测试套件改进：**

- 稳定集成测试中的异步归档功能。（*由 Viktor Kurilko 贡献，David Steele 审核。*）


### v2.54.0 版本说明

*版本化存储的目标时间点*

*发布于 2024 年 10 月 21 日*

**打包者注意**：这是最后一个支持 autoconf/make 构建方式的功能版本。如尚未迁移，请迁移到 meson。2.54.X 补丁版本（如有）将继续支持 autoconf/make。

**漏洞修复：**

- 修复大型数据集上的 PostgreSQL 查询性能问题。（*由 Thibault Vincent、David Steele 修复，David Christensen、Antoine Millet 审核，Antoine Millet 报告。*）

**新功能：**

- 允许在版本化存储（versioned storage）上的仓库中按目标时间点读取数据。（*由 Stefan Fercot、David Christensen 审核。*）
- 允许在没有备库的情况下继续执行已请求的备库备份。（*由 Stefan Fercot 审核。*）

**改进：**

- 在 `info` 命令文本输出中汇总备份引用列表。（*由 Stefan Fercot 贡献，David Steele 审核。*）
- 每次 S3 认证时刷新 web-id 令牌。（*由 Brent Graveland 贡献，David Steele 审核。*）
- 在帮助信息中正确显示索引选项的当前值。（*由 David Christensen 审核。*）
- 仅在内容发生变化时才保存 `backup.info`。（*由 Stefan Fercot 审核。*）
- 移除恢复过程中并行读取文件的数量限制。（*由 David Christensen 审核。*）
- 改进 SFTP 错误信息。（*由 Reid Thompson 贡献，David Steele 审核。*）

**文档改进：**

- 在用户指南中添加性能调优章节。（*由 Stefan Fercot 审核。*）
- 阐明 `data_directory` 的来源。（*由 Stefan Fercot 贡献，David Steele 审核，Matthias 建议。*）
- 优化摘要（summary）是否使用小写的判断逻辑。（*由 Daniel Westermann 建议。*）


### v2.53.1 版本说明

*PostgreSQL 17 支持*

*发布于 2024 年 8 月 19 日*

**漏洞修复：**

- 修复以 root 用户运行 `restore` 时的权限问题。（*由 Stefan Fercot 审核，Will M. 报告。*）
- 修复延迟连接报错时的段错误。（*由 David Christensen 审核，Anton Glushakov 报告。*）
- 跳过 SFTP 的本地仓库重复检查。（*由 Reid Thompson 修复，David Steele 审核，Anton Kurochkin 报告。*）

**改进：**

- 支持 PostgreSQL 17。


### v2.53 版本说明

*并发备份*

*发布于 2024 年 7 月 22 日*

**重要提示**：`--log-level-stderr` 选项的默认值已从 `warn` 更改为 `off`，仅重定向 `stdout` 时更易捕获错误。如需恢复之前的行为，请设置 `--log-level-stderr=warn`。**打包者注意**：meson 构建现在需要 lz4 库。**打包者注意**：meson 构建现在要求编译器支持 `__builtin_clzl()` 和 `__builtin_bswap64()`。

**漏洞修复：**

- 修复文件已存在时 SFTP 重命名失败的问题。（*由 Reid Thompson 修复，David Steele 审核，ahmed112212 报告。*）

**新功能：**

- 允许在不同仓库上并发执行备份。（*由 Reid Thompson、Stefan Fercot 审核。*）
- 支持基于 IP 的 SAN（主题备用名称）用于 TLS 证书验证。（*由 David Christensen 贡献，David Steele 审核。*）

**改进：**

- 将 `--log-level-stderr` 选项默认值设为 `off`。（*由 Greg Sabino Mullane、Stefan Fercot 审核。*）
- 允许 PostgreSQL <= 10 使用非默认 WAL 段大小。（*由 Viktor Kurilko 贡献，David Steele 审核。*）
- 新增检查 SFTP 授权日志的提示信息。（*由 Vitalii Zurian 贡献，Reid Thompson、David Steele 审核。*）

**文档改进：**

- 阐明 `archive-push` 多仓库模式的行为。（*由 Stefan Fercot 审核。*）


### v2.52.1 版本说明

*漏洞修复*

*发布于 2024 年 6 月 25 日*

**漏洞修复：**

- 修复副本上的文件大于主库对应文件时出现的问题。（*由 Stefan Fercot 审核，Nicolas Lassimonne 报告。*）


### v2.52 版本说明

*PostgreSQL 17beta1 支持*

*发布于 2024 年 5 月 27 日*

**打包者注意**：pgBackRest 的构建系统现已切换为 meson。autoconf/make 构建将不再接收新功能，并将在后续版本中移除。

**新功能：**

- 新增 GCS 批量删除支持。（*由 Reid Thompson 审核。*）
- 支持 S3 `SSE-C` 加密。（*由 Tim Jones 审核，Tim Jones 建议。*）
- 支持 PostgreSQL 17beta1。（*由 Stefan Fercot 审核。*）

**改进：**

- 允许在 meson 构建中显式禁用可选依赖项。（*由 Michael Schout 贡献，David Steele 审核。*）
- 在 meson 构建中动态查找 python。（*由 Michael Schout 贡献，David Steele 审核。*）
- 在 meson 中将 `pgbackrest` 构建目标标记为可安装。（*由 Bradford Boyle 贡献，David Steele 审核。*）

**文档改进：**

- 更新 `start`/`stop` 文档，以反映实际功能。（*由 Stefan Fercot 审核。*）


### v2.51 版本说明

*Meson 构建系统*

*发布于 2024 年 3 月 25 日*

**漏洞修复：**

- 跳过块级增量 delta 恢复中的零长度文件。（*由 Sebastian Krause、René Højbjerg Larsen 审核，Sebastian Krause 报告。*）
- 修复存储列表中的性能回归问题。（*由 Stephen Frost 审核，Maksym Boguk 报告。*）
- 修复备份期间文件大小发生变化时的进度日志记录问题。（*由 Stephen Frost 审核，samkingno 报告。*）

**改进：**

- 改进双栈连接（dual stack）支持。（*由 Stephen Frost 审核，Timothée Peignier 建议。*）
- 将 meson 作为主要构建系统。（*由 Stephen Frost 审核。*）
- 在非 delta 增量备份期间检测未发生变化的文件。（*由 Stephen Frost 审核。*）
- 防止因移除 `backup_label` 而导致无效恢复。（*由 Stephen Frost 审核。*）
- 改进 `archive-push` 的 WAL 段队列处理。（*由 Stephen Frost 审核。*）
- 将恢复继续（resume）功能限制为全量备份。（*由 Stephen Frost、Stefan Fercot 审核。*）
- 更新块级增量备份的恢复继续功能。（*由 Stephen Frost 审核。*）
- 支持使用 `--version` 和 `--help` 查看版本和帮助信息。（*由 Greg Sabino Mullane 审核，Greg Sabino Mullane 建议。*）
- 为 autoconf/make 构建添加详细的回溯（backtrace）信息。（*由 Stephen Frost 审核。*）

**文档改进：**

- 更新对 `recovery.conf` 的引用说明。（*由 Stefan Fercot 审核，Stephen Frost 建议。*）


### v2.50 版本说明

*性能改进与漏洞修复*

*发布于 2024 年 1 月 22 日*

**漏洞修复：**

- 修复块级增量恢复中的短读（short read）问题。（*由 Stephen Frost、Brent Graveland 审核，Adol Rodriguez、Brent Graveland 报告。*）
- 修复 `info` 输出中因备份进度溢出导致的显示错误。（*由 Robert Donovan 修复，Joe Wildish 审核。*）

**改进：**

- 在块级增量 delta 恢复期间保留部分文件。（*由 Stephen Frost 审核。*）
- 新增对备用编译时页面大小的支持。（*由 Viktor Kurilko 贡献，David Steele 审核。*）
- 使用 bundling 时，跳过备份期间被截断的文件。（*由 Georgy Shelkovy 贡献，David Steele 审核。*）
- 改进 SFTP 存储错误信息。（*由 Reid Thompson 贡献，David Steele 审核。*）


### v2.49 版本说明

*移除 PostgreSQL 9.3 支持*

*发布于 2023 年 11 月 27 日*

**漏洞修复：**

- 修复重试机制的回归问题。（*由 Stephen Frost 审核，Norman Adkins、Tanel Suurhans、Jordan English、Timothée Peignier 报告。*）
- 修复 SFTP 存储驱动中递归路径删除的问题。（*由 Reid Thompson 修复，Stephen Frost 审核，Luc 报告。*）

**改进：**

- 移除对 PostgreSQL `9.3` 的支持。（*由 Stephen Frost 审核。*）

**文档改进：**

- 记录维护者选项。（*由 Stefan Fercot 审核。*）
- 更新 PostgreSQL >= 13 的时间点恢复（PITR）文档。

**测试套件改进：**

- 允许在未安装 `libssh2` 的情况下运行 `config/load` 单元测试。（*由 Reid Thompson 贡献，David Steele 审核，Wu Ning 建议。*）


### v2.48 版本说明

*仓库存储标签*

*发布于 2023 年 9 月 25 日*

**漏洞修复：**

- 修复在没有块列表的情况下恢复块级增量备份的问题。（*由 Stephen Frost、Burak Yurdakul 审核，Burak Yurdakul 报告。*）

**新功能：**

- 新增 `--repo-storage-tag` 选项，用于创建对象标签。（*由 Stephen Frost、Stefan Fercot、Timothée Peignier 审核。*）
- 为 SFTP 存储驱动添加已知主机（known hosts）检查。（*由 Reid Thompson 贡献，Stephen Frost、David Steele 审核。*）
- 支持双栈（dual stack）连接。（*由 Stephen Frost 审核。*）
- 在 `info` 命令的 JSON 输出中新增已完成/总计备份大小字段。（*由 Stefan Fercot 贡献，David Steele 审核。*）

**改进：**

- `check` 命令支持多 stanza。（*由 Stephen Frost 审核。*）
- 重试读取 `pg_control`，直到校验和有效。（*由 Stefan Fercot、Stephen Frost 审核。*）
- 优化成功备份后的 WAL 段检查。（*由 Stephen Frost 审核。*）
- 改进 GCS 多部分上传性能。（*由 Reid Thompson 审核。*）
- 允许在 stanza 停止时运行 `archive-get` 命令。（*由 Tom Swartz、David Christensen、Reid Thompson 审核。*）
- 支持 SFTP 公钥/私钥路径中的前导波浪号（`~`）。（*由 Reid Thompson 贡献，David Steele 审核。*）
- 在续期认证令牌前重新加载 GCS 凭证。（*由 Stephen Frost 审核，Daniel Farina 建议。*）

**文档改进：**

- 修复配置参考中 `--tls-server-address` 选项的示例。（*由 Hartmut Goebel 修复，David Steele 审核。*）
- 修复命令参考中 `filter` 选项的示例。

**测试套件改进：**

- 允许在未安装 `libssh2` 的情况下运行 `storage/sftp` 单元测试。（*由 Reid Thompson 贡献，David Steele 审核，Wu Ning 建议。*）


### v2.47 版本说明

*性能改进与漏洞修复*

*发布于 2023 年 7 月 24 日*

**漏洞修复：**

- 在 delta 备份期间，在 manifest 中保留块级增量信息。（*由 Stephen Frost 审核，Francisco Miguel Biete Banon 报告。*）
- 修复 `verify` 命令中的块级增量文件名问题。（*由 Reid Thompson 审核，Francisco Miguel Biete Banon 报告。*）
- 修复从备库备份时错误触发自动 delta 备份的问题。（*由 Stephen Frost 审核，krmozejko、Don Seiler 报告。*）
- 恢复类型为 `type=none` 时，跳过 PostgreSQL >= 12 的 `recovery.signal` 文件。（*由 Stefan Fercot 审核，T.Anastacio 报告。*）
- 修复差异/增量备份的唯一标签生成问题。（*由 Andrey Sokolov 修复，David Steele 审核。*）
- 修复无备份过期时基于时间的归档过期问题。（*由 Stefan Fercot 审核。*）

**改进：**

- 提升 SFTP 存储驱动的性能。（*由 Stephen Frost、Reid Thompson 贡献，David Steele 审核。*）
- 在 `info` 命令的日期/时间输出中添加时区偏移量。（*由 Stefan Fercot、Philip Hurst 审核，Philip Hurst 建议。*）
- 集中处理不支持功能的错误。（*由 Stefan Fercot 审核。*）

**文档改进：**

- 在用户指南中阐明优先从软件包安装的建议。（*由 Stefan Fercot 审核，dr-kd 建议。*）


### v2.46 版本说明

*块级增量备份与 SFTP 存储*

*发布于 2023 年 5 月 22 日*

**新功能：**

- 支持块级备份（block incremental backup）。（*由 John Morris、Stephen Frost、Stefan Fercot 审核。*）
- 支持 SFTP 作为仓库存储。（*由 Reid Thompson 贡献，Stephen Frost、David Steele 审核。*）
- 支持 PostgreSQL 16。（*由 Stefan Fercot 审核。*）

**改进：**

- 允许跳过页头检查。（*由 David Christensen 审核，David Christensen 建议。*）
- 恢复期间避免对恢复文件调用 `chown()`。（*由 Stefan Fercot、Marcelo Henrique Neppel 审核，Marcelo Henrique Neppel 建议。*）
- 为 HTTP 重试添加错误重试详情。

**文档改进：**

- 添加关于使用恢复类型 `type=none` 的警告说明。（*由 Stefan Fercot 审核。*）
- 添加关于在已创建仓库上运行 `stanza-create` 的注意事项。


### v2.45 版本说明

*块级增量备份（测试版）*

*发布于 2023 年 3 月 20 日*

**漏洞修复：**

- 默认跳过为离线备份恢复时写入 `recovery.signal` 的操作。（*由 Stefan Fercot 审核，Marcel Borger 报告。*）

**新功能：**

- 支持块级增量备份（BETA 测试版）。（*由 John Morris、Stephen Frost、Stefan Fercot 审核。*）

**改进：**

- 仅保留一个全为默认值的组索引。（*由 Stefan Fercot 审核。*）

**文档改进：**

- 添加在 `2.x` 版本之间升级的明确说明。（*由 Christophe Courtois 贡献，David Steele 审核。*）
- 移除引入 TLS 后已过时的 SSH 相关说明。


### v2.44 版本说明

*移除 PostgreSQL 9.0/9.1/9.2 支持*

*发布于 2023 年 1 月 30 日*

**改进：**

- 移除对 PostgreSQL `9.0`/`9.1`/`9.2` 的支持。（*由 Stefan Fercot 审核。*）
- 当没有备份与当前 PostgreSQL 版本匹配时，`restore` 操作报错退出。（*由 Stefan Fercot 贡献，David Steele 审核，Soulou 建议。*）
- 为每种 `compress-type` 添加 `compress-level` 的范围检查。（*由 Stefan Fercot 审核，gkleen、ViperRu 建议。*）

**文档改进：**

- 添加关于在 Azure 存储上启用"分层命名空间"的警告。（*由 Stefan Fercot 审核，Vojtech Galda、Pluggi、asjonos 建议。*）
- 在监控示例中添加换行符替换处理。（*由 Stefan Fercot 审核，rudonx、gmustdie、Ivan Shelestov 建议。*）
- 阐明 `--target-action` 在各 PostgreSQL 版本上的行为。（*由 Chris Bandy 贡献，David Steele、Anton Kurochkin、Stefan Fercot 审核，Anton Kurochkin、Chris Bandy 建议。*）
- 更新并完善索引页面内容。（*由 Stefan Fercot 审核。*）
- 为网站添加深色模式。（*由 Stephen Frost 建议。*）


### v2.43 版本说明

*漏洞修复*

*发布于 2022 年 11 月 28 日*

**漏洞修复：**

- 修复差异/增量备份中缺少引用的问题。（*由 Stefan Fercot 审核，Marcel Borger、ulfedf、jaymefSO 报告。*）

**改进：**

- 当选项未指定索引时，添加相应提示信息。（*由 Stefan Fercot 审核。*）


### v2.42 版本说明

*漏洞修复*

*发布于 2022 年 11 月 22 日*

**漏洞修复：**

- 修复文件 bundle 备份/恢复中的内存泄漏问题。（*由 John Morris、Oscar 审核，Oscar 报告。*）
- 修复远程文件短读时的协议错误。（*由 Stephen Frost 审核。*）

**改进：**

- 使用 bundling 时，不为零长度文件存储引用。（*由 Stefan Fercot 审核。*）
- 对 `pg_start_backup()`/`pg_stop_backup()` 使用更通用的描述文字。（*由 Greg Sabino Mullane、David Christensen 审核，Greg Sabino Mullane 建议。*）
- 更新 `test.pl` 的 `--psql-bin` 选项以匹配命令行帮助。（*由 Koshi Shibagaki 贡献，David Steele 审核。*）


### v2.41 版本说明

*备份注解*

*发布于 2022 年 9 月 19 日*

**漏洞修复：**

- 修复非默认仓库使用了错误时间过期策略的问题。（*由 Stefan Fercot 审核，Adam Brusselback 报告。*）
- 修复使用过滤器递归列出目录时的问题。（*由 Stephen Frost 审核，Efremov Egor 报告。*）

**新功能：**

- 支持备份键值注解（key/value annotations）。（*由 Stefan Fercot 贡献，David Steele 审核，Adam Berlin 建议。*）

**改进：**

- 在 `info` 命令的 JSON 输出中支持 `--set` 参数。（*由 Stefan Fercot 贡献，David Steele 审核，Anton Kurochkin 建议。*）
- 允许为对象存储配置上传分块大小。（*由 Stefan Fercot 审核，Anton Glushakov 建议。*）
- 备份成功后更新 `archive.info` 的时间戳。（*由 Stefan Fercot 审核，Alex Richman 建议。*）
- 将备库时间线检查移至检查点之后执行。（*由 Stefan Fercot、Keith Fiske 审核，Keith Fiske 建议。*）
- 改进备份恢复 resume 时的警告信息。（*由 Cynthia Shang 建议。*）

**文档改进：**

- 在 `pgbackrest.service` 中为 `kill` 添加绝对路径。（*由 Don Seiler 建议。*）


### v2.40 版本说明

*OpenSSL 3 支持*

*发布于 2022 年 7 月 18 日*

**打包者注意**：已添加实验性的 meson 构建，但在可预见的未来，打包者应继续使用 autoconf/make 构建。

**漏洞修复：**

- 在配置参考中跳过内部选项。（*由 Francisco Miguel Biete Banon 报告。*）

**改进：**

- 支持 OpenSSL 3。（*由 Stephen Frost 审核。*）
- 列出路径内容时创建快照。（*由 John Morris、Stephen Frost 审核。*）
- 当恢复 `type=immediate` 时，强制设置 `target-timeline=current`。（*由 Stephen Frost 审核。*）
- 在 delta `restore` 期间，当文件大于预期时进行截断。（*由 Stephen Frost 审核。*）
- 当 `resume=n` 时，禁用增量 manifest 文件保存。（*由 Reid Thompson 贡献，David Steele 审核。*）
- 在复制开始前将备份完成百分比置为零。（*由 Reid Thompson 贡献，David Steele 审核。*）
- 使用 S3 的 `IsTruncated` 标志判断列表是否需要继续。（*由 John Morris、Soulou 审核，Christian Montagne 建议。*）
- 添加实验性 Meson 构建。（*由 Eli Schwartz、Sam Bassaly 审核。*）
- 允许向 `--test-path` 选项传递任意路径。（*由 Andrey Sokolov 贡献，David Steele 审核。*）
- 修复在定义 `DEBUG_EXEC_TIME` 但未定义 `DEBUG` 时的编译错误。（*由 Andrey Sokolov 贡献，David Steele 审核。*）

**文档改进：**

- 在仓库主机章节中添加 PostgreSQL 配置的链接。（*由 Stefan Fercot 审核，Julien Cigar 建议。*）


### v2.39 版本说明

*Verify 命令与文件 Bundling*

*发布于 2022 年 5 月 16 日*

**漏洞修复：**

- 修复 `FINALLY()` 中抛出的错误导致无限循环的问题。（*由 Stephen Frost 审核。*）
- 除其他进程持有锁之外，对所有锁定失败情况报错。（*由 Reid Thompson、Geir Råness 审核，Geir Råness 报告。*）
- 修复用户指南中对 `stanza-update` 的错误引用。（*由 Abubakar Mohammed 修复，David Steele 审核。*）
- 修复配置参考中 `repo-gcs-key-type` 选项的示例。（*由 Reid Thompson 审核。*）
- 修复 `tls-server-auth` 示例并添加说明。（*由 Reid Thompson 审核。*）

**新功能：**

- 备份文件 bundling，改善对小文件的处理效果。（*由 Reid Thompson、Stefan Fercot、Chris Bandy 审核。*）
- 新增 `verify` 命令，用于验证仓库内容的有效性。（*由 Cynthia Shang、Reid Thompson 贡献，David Steele、Stefan Fercot 审核。*）
- 支持 PostgreSQL 15。（*由 Stefan Fercot 审核。*）
- 在 `info` 输出中显示备份完成百分比。（*由 Reid Thompson 贡献，David Steele 审核。*）
- 为 `restore` 命令的 `--type=lsn` 自动选择备份。（*由 Reid Thompson 贡献，Stefan Fercot、David Steele 审核。*）
- 当 `archive-mode-check` 被禁用时，抑制现有 WAL 的警告信息。（*由 Reid Thompson 贡献，David Steele 审核。*）
- 新增 AWS IMDSv2 支持。（*由 Nuno Pires 贡献，David Steele 审核。*）

**改进：**

- 允许在全量备份（full backup）后更改 `repo-hardlink` 选项。（*由 Reid Thompson 审核。*）
- 提高 `backup` 和 `restore` 完成百分比日志的精度。（*由 Reid Thompson 贡献，David Steele 审核。*）
- 改进 `repo-*` 命令的路径验证。（*由 Reid Thompson 贡献，David Steele 审核。*）
- 改进 `stop` 命令以遵循 `stanza` 选项。（*由 Reid Thompson 贡献，David Steele 审核，ragaoua 建议。*）
- 改进 `repo-azure-key` 无效时的错误信息。（*由 Reid Thompson 贡献，David Steele 审核，Seth Daniel 建议。*）
- 在 `archive-get`/`archive-push` 异步出错时，添加检查日志的提示信息。（*由 Reid Thompson 审核。*）
- 新增 `ClockError`，用于处理意外的时钟偏差和时区变更。（*由 Greg Sabino Mullane、Stefan Fercot 审核，Greg Sabino Mullane 建议。*）
- 在错误信息中显示历史 manifest 文件前，去除其扩展名。（*由 Stefan Fercot 审核。*）
- 在锁权限错误信息中添加用户：组信息。（*由 Reid Thompson 审核。*）

**文档改进：**

- 简化文档中关于支持版本的描述。（*由 Stefan Fercot、Reid Thompson、Greg Sabino Mullane 审核。*）
- 添加选项类型描述。（*由 Reid Thompson 贡献，David Steele 审核。*）
- 添加备份类型与恢复速度的常见问题解答。（*由 David Christensen 贡献，Reid Thompson 审核。*）
- 记录 Pull Request 所需的基础分支。（*由 David Christensen 贡献，Reid Thompson 审核。*）


### v2.38 版本说明

*小型漏洞修复与改进*

*发布于 2022 年 3 月 6 日*

**重要提示**：`info` 命令报告的仓库大小现在完全基于 pgBackRest 写入存储的数据量。此前，在某些情况下，pgBackRest 可以检测到存储是否应用了额外的压缩，但此功能已不再支持。

**漏洞修复：**

- 对 S3 批量文件删除中的错误进行重试。（*由 Reid Thompson 审核，Alex Richman 报告。*）
- 允许对 HTTP `connection` 头部值进行大小写不敏感的匹配。（*由 Reid Thompson 审核，Rémi Vidier 报告。*）
- 将 TLS 文档中的 `repo` 选项移至 `global` 部分。（*由 Anton Kurochkin 报告。*）
- 从 stanza 命令中移除未使用的 `backup-standby` 选项。（*由 Stefan Fercot 报告。*）
- 修复帮助文档和版本说明中的错别字。（*由 Daniel Gustafsson 修复，David Steele 审核。*）

**新功能：**

- 新增使用 KMS 的 AWS S3 服务端加密支持。（*由 Christoph Berg 贡献，David Steele、Tharindu Amila 审核。*）
- 新增 `archive-missing-retry` 选项。（*由 Stefan Fercot 审核。*）
- 为 `info` 命令添加备份类型过滤功能。（*由 Stefan Fercot 贡献，David Steele 审核。*）

**改进：**

- 在 `backup` 期间页面验证失败时进行重试。（*由 Stephen Frost、David Christensen 审核。*）
- 处理未能优雅关闭连接的 TLS 服务端。（*由 Rémi Vidier、David Christensen、Stephen Frost 审核。*）
- 在 `info` 命令输出中添加备份的 LSN 信息。（*由 Stefan Fercot 贡献，David Steele 审核。*）
- 自动去除 `repo-ls` 路径末尾的斜杠。（*由 David Christensen 贡献，David Steele 审核。*）
- 不重试致命错误。（*由 Reid Thompson 审核。*）
- 移除对 PostgreSQL `8.3`/`8.4` 的支持。（*由 Reid Thompson、Stefan Fercot 审核。*）
- 移除尝试检测额外文件系统压缩的逻辑。（*由 Reid Thompson、Stefan Fercot 审核。*）

**文档改进：**

- 在 systemd 服务配置中添加存活检查。（*由 Yogesh Sharma 建议。*）
- 添加解释 WAL 归档后缀的常见问题解答。（*由 Stefan Fercot 贡献，David Steele 审核。*）
- 说明复制槽不会在恢复时被还原。（*由 Reid Thompson 贡献，David Steele、Stefan Fercot 审核，Christophe Courtois 建议。*）


### v2.37 版本说明

*TLS 服务端*

*发布于 2022 年 1 月 3 日*

**重要提示**：如果 `restore` 命令找不到与指定时间目标匹配的备份，现在将抛出错误，而之前仅记录一条警告。

**漏洞修复：**

- 修复 `restore` delta 链接映射中路径/文件已存在时的问题。（*由 Reid Thompson 审核，Younes Alhroub 报告。*）
- 修复连接重试时的套接字泄漏问题。（*由 Reid Thompson 审核，James Coleman 报告。*）

**新功能：**

- 新增 TLS 服务端。（*由 Stephen Frost、Reid Thompson、Andrew L'Ecuyer 审核。*）
- 新增 `--cmd` 选项。（*由 Reid Thompson 贡献，Stefan Fercot、David Steele 审核，Virgile CREVON 建议。*）

**改进：**

- 在备份开始后立即检查归档。（*由 Reid Thompson、David Christensen 审核。*）
- 为备份添加时间线和检查点检查。（*由 Stefan Fercot、Reid Thompson 审核。*）
- 在备份期间检查集群是否存活且配置正确。（*由 Stefan Fercot 审核。*）
- 当 `restore` 无法找到匹配时间目标的备份时，报错退出。（*由 Reid Thompson、Douglas J Hunley 审核，Douglas J Hunley 建议。*）
- 解析 S3/Azure 端点中的协议/端口。（*由 Reid Thompson 贡献，David Steele 审核。*）
- 当 `checkpoint_timeout` 超过 `db-timeout` 时，添加警告信息。（*由 Stefan Fercot 贡献，David Steele 审核。*）
- 在 HTTP 错误输出中添加请求方法（verb）。（*由 Christoph Berg 贡献，David Steele 审核。*）
- 允许布尔命令行选项使用 y/n 作为参数。（*由 Reid Thompson 贡献，David Steele 审核。*）
- 使备份大小日志与 `info` 命令输出完全一致。（*由 Reid Thompson 贡献，David Steele 审核，Mahomed Hussein 建议。*）

**文档改进：**

- 以合适的单位显示大小选项的默认值和允许范围。（*由 Reid Thompson 审核。*）
- 修复 `tablespace-map-all` 选项的错别字并改进文档。（*由 Reid Thompson 审核，Reid Thompson 建议。*）
- 移除关于未来多仓库支持的过时说明。（*由 David Christensen 建议。*）


### v2.36 版本说明

*小型漏洞修复与改进*

*发布于 2021 年 11 月 1 日*

**漏洞修复：**

- 允许将 `global` 用作 stanza 名称前缀。（*由 Stefan Fercot 审核，Younes Alhroub 报告。*）
- 修复 GCS 密钥文件无效时的段错误。（*由 Stephen Frost 审核，Henrik Feldt 报告。*）

**改进：**

- 允许 `link-map` 选项创建新链接。（*由 Don Seiler、Stefan Fercot、Chris Bandy 审核，Don Seiler 建议。*）
- 将 `pg`/`repo` 选项允许的最大索引值提升至 256。（*由 Cynthia Shang 审核。*）
- 为 AWS S3 添加 `WebIdentity` 认证支持。（*由 James Callahan、Reid Thompson、Benjamin Blattberg、Andrew L'Ecuyer 审核。*）
- 在 `backup.info` 中报告备份文件验证错误。（*由 Stefan Fercot 贡献，David Steele 审核。*）
- 在在线备份恢复日志中添加恢复开始时间。（*由 Tom Swartz、Stefan Fercot 审核，Tom Swartz 建议。*）
- 本地任务失败时，同时报告原始错误和重试信息。（*由 Stefan Fercot 审核。*）
- 在 `info` 文本输出中，将页面校验和错误重命名为错误列表。（*由 Stefan Fercot 审核。*）
- 在备库重放超时信息中添加提示。（*由 Cynthia Shang、Stefan Fercot 审核，Leigh Downs 建议。*）


### v2.35 版本说明

*二进制协议*

*发布于 2021 年 8 月 23 日*

**重要提示**：`backup`/`restore` 命令中已复制文件的日志级别已更改为 `detail`。这使 `info` 日志级别的输出不再冗杂，如需查看这些信息，请将 `backup`/`restore` 命令的日志级别设置为 `detail`。

**漏洞修复：**

- 检测 S3 多部分上传完成阶段的错误。（*由 Cynthia Shang、Marco Montagna 审核，Marco Montagna、Lev Kokotov、Anderson A. Mallmann 报告。*）
- 修复循环符号链接的检测问题。（*由 Stefan Fercot 审核，Rohit Raveendran 报告。*）
- 仅将选定的 `repo` 选项传递给远端。（*由 David Christensen、Cynthia Shang 审核，Greg Sabino Mullane、David Christensen 报告。*）
- 修复用户指南中错误的主机名。（*由 Stefan Fercot 审核，Greg Sabino Mullane 报告。*）

**改进：**

- 新增二进制协议。（*由 Cynthia Shang 审核。*）
- 在 `restore` 时自动创建数据目录。（*由 Stefan Fercot 贡献，David Steele 审核，Chris Bandy 建议。*）
- 允许 `restore` 使用 `--type=lsn`。（*由 Stefan Fercot 贡献，Cynthia Shang 审核，James Coleman 建议。*）
- 将 `backup`/`restore` 已复制文件的日志级别更改为 `detail`。（*由 Stefan Fercot 审核，Jens Wilke 建议。*）
- 等待检查点 LSN 赶上重放 LSN 时改为循环等待。（*由 Stefan Fercot 贡献，David Steele 审核，Fatih Mencutekin 建议。*）
- 记录 `backup` 文件总数与 `restore` 大小/文件总数。（*由 Cynthia Shang 审核。*）
- 添加测试路径在仓库路径内的检查。（*由 Greg Sabino Mullane 审核，Greg Sabino Mullane 建议。*）
- 添加 CodeQL 静态代码分析。（*由 Cynthia Shang 审核。*）
- 更新测试以使用标准模式。（*由 Cynthia Shang 贡献，David Steele 审核。*）

**文档改进：**

- 更新贡献文档并添加 Pull Request 模板。（*由 Cynthia Shang 贡献，David Steele 审核。*）
- 在用户指南中重新整理备份文档。（*由 Cynthia Shang 审核。*）
- 在命令参考中阐明 `restore` 的 `--type` 行为。（*由 Cynthia Shang 贡献，David Steele 审核。*）
- 修复文档和注释中的错别字。（*由 Eric Radman 贡献，David Steele 审核。*）


### v2.34 版本说明

*PostgreSQL 14 支持*

*发布于 2021 年 6 月 7 日*

**漏洞修复：**

- 修复先前 `restore` 遗留的缓冲区文件问题。（*由 Cynthia Shang、Stefan Fercot、Floris van Nee 审核，Floris van Nee 报告。*）
- 修复检查大量表空间链接时的问题。（*由 Cynthia Shang、Avinash Vallarapu 审核，Avinash Vallarapu 报告。*）
- 及时释放不再需要的远程连接，避免其在 `restore` 期间超时。（*由 Cynthia Shang 审核，Francisco Miguel Biete Banon 报告。*）
- 修复当有效选项对指定命令无效时的 `help` 显示问题。（*由 Stefan Fercot 审核，Cynthia Shang 报告。*）

**新功能：**

- 新增 PostgreSQL 14 支持。（*由 Cynthia Shang 审核。*）
- 为 GCE 实例添加自动 GCS 认证。（*由 Jan Wieck、Daniel Farina 审核。*）
- 新增 `repo-retention-history` 选项，用于过期备份历史记录。（*由 Stefan Fercot 贡献，Cynthia Shang、David Steele 审核。*）
- 新增 `db-exclude` 选项。（*由 Stefan Fercot 贡献，Cynthia Shang 审核。*）

**改进：**

- 将归档过期日志从 `detail` 级别提升至 `info` 级别。（*由 Cynthia Shang 贡献，David Steele 审核。*）
- 在 `restore` 时删除 stanza 归档缓冲（spool）路径。（*由 Cynthia Shang、Stefan Fercot 审核。*）
- 在 `backup` 复制期间，不以原子方式写入文件，也不同步路径。（*由 Stephen Frost、Stefan Fercot、Cynthia Shang 审核。*）

**文档改进：**

- 更新贡献文档。（*由 Cynthia Shang 贡献，David Steele、Stefan Fercot 审核。*）
- 将 RHEL/CentOS 用户指南合并为单一文档。（*由 Cynthia Shang 审核。*）
- 阐明 `repo-s3-role` 不是 ARN。（*由 Isaac Yuen 贡献，David Steele 审核。*）


### v2.33 版本说明

*多仓库与 GCS 支持*

*发布于 2021 年 4 月 5 日*

**漏洞修复：**

- 修复选项警告破坏异步 `archive-get`/`archive-push` 的问题。（*由 Cynthia Shang 审核，Lev Kokotov 报告。*）
- 修复备份期间归档复制中的内存泄漏。（*由 Cynthia Shang 审核，Christian ROUX、Efremov Egor 报告。*）
- 修复加密口令生成中的栈溢出问题。（*由 Cynthia Shang 审核，bsiara 报告。*）
- 修复 S3 仓库上 `repo-ls` `/` 的问题。（*由 Cynthia Shang 审核，Lesovsky Alexey 报告。*）

**新功能：**

- 支持多仓库。（*由 Cynthia Shang、David Steele 贡献，Stefan Fercot、Stephen Frost 审核。*）
- 支持 GCS 作为仓库存储。（*由 Cynthia Shang、Daniel Farina 审核。*）
- 新增 `archive-header-check` 选项。（*由 Stephen Frost、Cynthia Shang 审核，Hans-Jürgen Schönig 建议。*）

**改进：**

- 选择性恢复时包含重建的系统数据库。（*由 Stefan Fercot 贡献，Cynthia Shang 审核。*）
- 从 S3 签名头部中排除 `content-length`。（*由 Cynthia Shang 审核，Brian P Bockelman 建议。*）
- 合并较少使用的仓库存储选项。（*由 Cynthia Shang 审核。*）
- 允许通过 `./configure --with-configdir` 自定义 `config-path` 的默认值。（*由 Michael Schout 贡献，David Steele 审核。*）
- 在 `backup` 期间记录归档复制日志。（*由 Cynthia Shang、Stefan Fercot 审核。*）

**文档改进：**

- 更新参考文档，添加指向用户指南示例的链接。（*由 Cynthia Shang 贡献，David Steele 审核。*）
- 更新选择性恢复文档，添加注意事项。（*由 Cynthia Shang、Stefan Fercot 审核。*）
- 为 `archive-copy` 文档添加 `compress-type` 说明。（*由 Cynthia Shang、Stefan Fercot 审核。*）
- 添加每种 `compress-type` 值对应的 `compress-level` 默认值。（*由 Cynthia Shang 贡献，David Steele 审核。*）
- 添加关于 NFS 所需设置与 PostgreSQL 相同的注意事项。（*由 Cynthia Shang 贡献，David Steele 审核。*）


### v2.32 版本说明

*仓库命令*

*发布于 2021 年 2 月 8 日*

**漏洞修复：**

- 修复因先前恢复操作部分删除备份后，再次 resume 时失败的问题。（*由 Cynthia Shang 审核，Tom Swartz 报告。*）

**新功能：**

- 新增 `repo-ls` 命令。（*由 Cynthia Shang、Stefan Fercot 审核。*）
- 新增 `repo-get` 命令。（*由 Stefan Fercot、David Steele 贡献，Cynthia Shang 审核。*）
- 新增 `archive-mode-check` 选项。（*由 Stefan Fercot 贡献，David Steele、Michael Banck 审核。*）

**改进：**

- 提升 `archive-get` 性能。（*由 Cynthia Shang 审核。*）

**文档改进：**

- 完善 `expire` 命令的文档说明。（*由 Cynthia Shang 贡献，David Steele 审核。*）


### v2.31 版本说明

*小型漏洞修复与改进*

*发布于 2020 年 12 月 7 日*

**漏洞修复：**

- 允许使用 `[`、`#` 和空格作为数据库名称的首字符。（*由 Stefan Fercot、Cynthia Shang 审核，Jefferson Alexandre 报告。*）
- 仅在 PostgreSQL 12 且 `restore` 类型为 `standby` 时才创建 `standby.signal`。（*由 Stefan Fercot 修复，David Steele 审核，Keith Fiske 报告。*）

**新功能：**

- 支持历史文件的过期清理。（*由 Stefan Fercot 贡献，David Steele 审核。*）
- 在 `info` 命令的文本输出中报告页面校验和错误。（*由 Stefan Fercot 贡献，Cynthia Shang 审核。*）
- 新增 `repo-azure-endpoint` 选项。（*由 Cynthia Shang、Brian Peterson 审核，Brian Peterson 建议。*）
- 新增 `pg-database` 选项。（*由 Cynthia Shang 审核。*）

**改进：**

- 改进 `info` 命令在指定 stanza 不存在时的输出提示。（*由 Stefan Fercot 贡献，Cynthia Shang、David Steele 审核，uspen 建议。*）
- 提升 `backup`/`restore` 命令处理大量文件列表时的性能。（*由 Cynthia Shang、Oscar 审核。*）
- 启动备份时为 PostgreSQL 连接等待添加重试机制。（*由 Cynthia Shang 审核，Vitaliy Kukharik 建议。*）

**文档改进：**

- 将 RHEL/CentOS 6 的文档替换为 RHEL/CentOS 8。
### v2.30 版本说明

*PostgreSQL 13 支持*

*发布于 2020 年 10 月 5 日*

**漏洞修复：**

- 当备份用户无法读取 `pg_settings` 时，输出带有提示信息的错误报告。（*由 Stefan Fercot、Cynthia Shang 审核，Mohamed Insaf K 报告。*）

**新功能：**

- 支持 PostgreSQL 13。（*由 Cynthia Shang 审核。*）

**改进：**

- 改进 PostgreSQL 版本识别机制。（*由 Cynthia Shang、Stephen Frost 审核。*）
- 改进工作目录相关的错误提示信息。（*由 Stefan Fercot 审核。*）
- 当找不到 WAL 段时，添加启动 stanza 的提示信息。（*由 David Christensen 贡献，David Steele 审核。*）
- 新增协议版本不匹配时的提示信息。（*由 Cynthia Shang 审核，loop-evgeny 建议。*）

**文档改进：**

- 添加远程运行时 pgBackRest 版本必须一致的说明。（*由 Cynthia Shang 审核，loop-evgeny 建议。*）
- 将 `info` 命令的文本内容移至参考手册，并在用户指南中添加对应链接。（*由 Cynthia Shang 审核，Christophe Courtois 建议。*）
- 更新用户指南中 CentOS/RHEL 的 yum 仓库路径。（*由 Heath Lord 贡献，David Steele 审核。*）


### v2.29 版本说明

*AWS 自动获取 S3 凭证*

*发布于 2020 年 8 月 31 日*

**漏洞修复：**

- 抑制关闭 `local`/`remote` 进程时的错误输出。命令已执行完毕，此时抛出错误适得其反；但仍会以 **warn** 级别记录警告，以说明发生了异常情况。（*由 Cynthia Shang 审核，argdenis 报告。*）
- 修复文件名或数据库名中包含 `=` 字符时的处理问题。（*由 Bastian Wegge、Cynthia Shang 审核，Brad Nicholson、Bastian Wegge 报告。*）

**新功能：**

- 在 AWS 实例上自动获取临时 S3 凭证。（*由 David Steele、Stephen Frost 贡献，Cynthia Shang、David Youatt、Aleš Zelený、Jeanette Bromage 审核。*）
- 新增 `archive-mode` 选项，用于在 `restore` 时禁用归档。（*由 Stephen Frost 审核，Stephen Frost 建议。*）

**改进：**

- 支持 PostgreSQL 13 beta3。后续 beta 版本中控制/目录/WAL 版本如有变更可能导致兼容性问题，pgBackRest 将随每个版本发布同步更新。
- S3/Azure 存储的异步 `list`/`remove` 操作。（*由 Cynthia Shang、Stephen Frost 审核。*）
- 优化 manifest 构建过程中未记录关系检测的内存使用效率。（*由 Cynthia Shang、Stephen Frost、Brad Nicholson、Oscar 审核，Oscar、Brad Nicholson 建议。*）
- 派生异步进程后主动关闭文件描述符。（*由 Stephen Frost、Cynthia Shang 审核。*）
- 将备份远程连接的关闭延迟至归档检查完成之后。（*由 Floris van Nee 贡献，David Steele 审核。*）
- 改进详细错误输出。（*由 Cynthia Shang 审核。*）
- 改进 TLS 错误报告。（*由 Cynthia Shang、Stephen Frost 审核。*）

**文档漏洞修复：**

- 在 `compress-type` 选项参考中补充 `none` 并修正示例。（*Ugo Bellavance、Don Seiler 报告。*）
- 在 `repo-type` 选项参考中补充缺失的 `azure` 类型。（*由 Don Seiler 修复，David Steele 审核。*）
- 修正 `repo-cipher-type` 选项参考中的拼写错误。（*由 Don Seiler 修复，David Steele 审核。*）

**文档改进：**

- 明确说明当 `expire-auto` 禁用时，必须定期手动运行 `expire`。（*由 Douglas J Hunley 审核，Douglas J Hunley 建议。*）


### v2.28 版本说明

*Azure 仓库存储*

*发布于 2020 年 7 月 20 日*

**漏洞修复：**

- 修复 `restore --force` 行为等同于 `--force --delta` 的问题。该问题导致 `restore` 根据时间戳和文件大小判断是否替换文件，而非直接覆盖，造成部分应被更新的文件保持不变。普通 `restore` 和 `restore --delta` 不受此问题影响。（*由 Cynthia Shang 审核。*）

**新功能：**

- 支持 Azure 作为仓库存储后端。（*由 Cynthia Shang、Don Seiler 审核。*）
- 新增 `expire-auto` 选项，用于禁止在成功备份后自动执行过期清理。（*由 Stefan Fercot 贡献，Cynthia Shang、David Steele 审核。*）

**改进：**

- 支持 S3 分片上传的异步处理。（*由 Stephen Frost 审核。*）
- 为 `backup`、`restore`、`archive-get` 和 `archive-push` 添加自动重试机制。（*由 Cynthia Shang 审核。*）
- 在用于备份控制的 PostgreSQL 会话中禁用查询并行化。（*由 Stefan Fercot 审核。*）
- 支持 PostgreSQL 13 beta2。后续 beta 版本中控制/目录/WAL 版本如有变更可能导致兼容性问题，pgBackRest 将随每个版本发布同步更新。
- 改进对无效 HTTP 响应状态码的处理。（*由 Cynthia Shang 审核。*）
- 改进 `archive-get` 命令缺少 `pg1-path` 选项时的错误提示。（*由 Cynthia Shang 审核。*）
- 在时间线切换后启用校验和 delta 时，添加相应提示信息。（*由 Matt Bunter、Cynthia Shang 审核。*）
- 在适当场合以 PostgreSQL 替代 `postmaster`。（*由 Cynthia Shang 审核。*）

**文档漏洞修复：**

- 修正 `repo-retention-full-type` 选项的错误示例。（*Höseyin Sönmez 报告。*）
- 从 HTML 和 man 页面的命令参考中移除内部命令。（*Cynthia Shang 报告。*）

**文档改进：**

- 更新用户指南使用的 PostgreSQL 版本，并添加版本范围说明，以表明用户指南适用于一定范围内的 PostgreSQL 版本，即使其针对特定版本构建。（*由 Stephen Frost 审核。*）
- 更新关于过期特定备份集的 FAQ。（*由 Cynthia Shang 贡献，David Steele 审核。*）
- 更新 FAQ 以明确默认 PITR 行为。（*由 Cynthia Shang 贡献，David Steele 审核。*）


### v2.27 版本说明

*过期改进与压缩驱动*

*发布于 2020 年 5 月 26 日*

**漏洞修复：**

- 修复检测文件链接是否包含在路径链接中的逻辑问题。（*由 Cynthia Shang 审核，Christophe Cavallié 报告。*）
- 允许 `pg-path1` 在同步 `archive-push` 中为可选项。（*由 Cynthia Shang 审核，Jerome Peng 报告。*）
- `expire` 命令现在会检查停止文件是否存在。（*由 Cynthia Shang 修复，David Steele 审核。*）
- 处理 HTTP 响应中缺少原因短语的情况。（*由 Cynthia Shang 审核，Tenuun 报告。*）
- 增大 lz4 压缩刷新的缓冲区大小。（*由 Cynthia Shang 审核，Eric Radman 报告。*）
- 在 `remote` 命令中忽略 `pg-host*` 和 `repo-host*` 选项。（*由 Cynthia Shang 审核，Pavel Suderevsky 报告。*）
- 修复 `remote` 命令中可能缺少 `pg1-*` 选项的问题。（*由 Cynthia Shang 审核，Andrew L'Ecuyer 报告。*）

**新功能：**

- 全量备份的基于时间的保留策略。`--repo-retention-full-type` 选项支持按天数指定全量备份的保留周期。（*由 Cynthia Shang、Pierre Ducroquet 贡献，David Steele 审核。*）
- 临时备份过期清理。允许用户无视保留策略设置，直接删除指定备份。（*由 Cynthia Shang 贡献，David Steele 审核。*）
- 支持 Zstandard 压缩。注意：设置 `compress-type=zst` 将使新备份和归档与旧版本的 pgBackRest 不兼容（无法恢复）。（*由 Cynthia Shang 审核。*）
- 支持 bzip2 压缩。注意：设置 `compress-type=bz2` 将使新备份和归档与旧版本的 pgBackRest 不兼容（无法恢复）。（*由 Stephen Frost 贡献，David Steele、Cynthia Shang 审核。*）
- 在 `info` 命令中显示 `backup`/`expire` 的运行状态。（*由 Stefan Fercot 贡献，David Steele 审核。*）

**改进：**

- 仅当满足 `repo-retention-archive` 阈值时才过期 WAL 归档。此前，首次全量备份之前的 WAL 会在第一次全量备份后被清理；现在将按保留策略进行保留。（*由 Cynthia Shang 贡献，David Steele 审核。*）
- 添加本地 MD5 实现，使 S3 在启用 FIPS 时仍可正常工作。（*由 Cynthia Shang、Stephen Frost 审核，Brian Almeida、John Kelly 建议。*）
- 支持 PostgreSQL 13 beta1。后续 beta 版本中控制/目录/WAL 版本如有变更可能导致兼容性问题，pgBackRest 将随每个版本发布同步更新。（*由 Cynthia Shang 审核。*）
- 将 `buffer-size` 默认值降低至 `1MiB`。（*由 Stephen Frost 审核。*）
- 若 `expire` 未在仓库主机上运行，则输出用户友好的错误信息。（*由 Cynthia Shang 贡献，David Steele 审核。*）


### v2.26 版本说明

*非阻塞 TLS*

*发布于 2020 年 4 月 20 日*

**漏洞修复：**

- 从 manifest 正则表达式中移除空子表达式。MacOS 对此不兼容，其他平台似乎可以正常运行。（*由 David Raftis 修复，David Steele 审核。*）

**改进：**

- 实现非阻塞 TLS。（*由 Slava Moudry、Cynthia Shang、Stephen Frost 审核。*）
- 仅对 WAL 记录的文件限制备份复制大小。此前的行为可能导致 `postgresql.conf` 或 `postgresql.auto.conf` 在备份中被截断。（*由 Cynthia Shang 审核。*）
- TCP keep-alive 选项现在支持配置。（*Marc Cousin 建议。*）
- 新增 `io-timeout` 选项。（*由 Cynthia Shang 审核。*）


### v2.25 版本说明

*lz4 压缩支持*

*发布于 2020 年 3 月 26 日*

**新功能：**

- 新增 lz4 压缩支持。注意：设置 `compress-type=lz4` 将使新备份和归档与旧版本的 pgBackRest 不兼容（无法恢复）。（*由 Cynthia Shang 审核。*）
- 为 `expire` 命令新增 `--dry-run` 选项。使用 dry-run 可以预览 `expire` 命令将删除哪些备份/归档，而不会实际执行删除操作。（*由 Cynthia Shang、Luca Ferrari 贡献，David Steele 审核，Marc Cousin 建议。*）

**改进：**

- 提升远程 manifest 构建的性能。（*Jens Wilke 建议。*）
- 修复 Linux 上 keepalive 选项的检测问题。（*由 Marc Cousin 贡献，David Steele 审核。*）
- 添加 configure 主机检测，以正确设置标准编译标志。（*由 Marc Cousin 贡献，David Steele 审核。*）
- 从不使用压缩选项的命令中移除 `compress`/`compress-level` 选项。这些命令（如 `restore`、`archive-get`）从未使用过压缩选项，但此前允许在命令行中传入；现在若传入这些选项将报错。如果遇到此类错误，请移除无效选项。（*由 Cynthia Shang 审核。*）
- 将备份文件复制大小限制为备份开始时报告的大小。若文件在备份过程中增大，恢复期间会通过 WAL 回放重建，无需复制额外数据。（*由 Cynthia Shang 审核。*）


### v2.24 版本说明

*时间目标的备份集自动选择*

*发布于 2020 年 2 月 25 日*

**漏洞修复：**

- 修复异步归档命令产生僵尸进程的问题。（*由 Stephen Frost 审核，Adam Brusselback、ejberdecia 报告。*）
- 当 `archive-get`/`archive-push`/`restore` 未在 PostgreSQL 主机上运行时报错。（*由 Stephen Frost 审核，Jesper St John 报告。*）
- 当未指定大小/编码时，读取 HTTP 内容直至 EOF。（*由 Cynthia Shang 审核，Christian ROUX 报告。*）
- 修复由 Perl 创建的可续传备份在恢复时的处理问题。此情况下应忽略该可续传备份，但 C 代码无法加载 Perl 写入的部分 manifest（格式略有差异）。已添加相关校验以正常处理此情况。（*Kacey Holston 报告。*）

**新功能：**

- 指定时间目标时自动选择备份集进行恢复。仅在未指定 `--set` 时执行自动选择；若找不到适合目标时间的备份集，则使用最新（默认）备份集。（*由 Cynthia Shang 贡献，David Steele 审核。*）

**改进：**

- 备份期间跳过 `pg_internal.init` 临时文件。（*由 Cynthia Shang 审核，Michael Paquier 建议。*）
- `backup` 时对 manifest 添加更多校验。（*由 Cynthia Shang 审核。*）

**文档改进：**

- 阻止 lock-bot 向已锁定的 issue 添加评论。（*Christoph Berg 建议。*）


### v2.23 版本说明

*漏洞修复*

*发布于 2020 年 1 月 27 日*

**漏洞修复：**

- 修复文件缺失导致 manifest 损坏的问题。若 PostgreSQL 在备份过程中删除了某个文件（或该文件在备库上缺失），则下一个文件可能不会被复制并更新到 manifest 中；发生此情况时，恢复该备份将报错。（*由 Cynthia Shang 审核，Vitaliy Kukharik 报告。*）

**改进：**

- 使用 `pkg-config` 替代 `xml2-config` 获取 libxml2 构建选项。（*由 David Steele、Adrian Vondendriesch 贡献。*）
- 在 `backup`/`restore` 时校验 manifest 中的校验和是否已设置。（*由 Cynthia Shang 审核。*）


### v2.22 版本说明

*漏洞修复*

*发布于 2020 年 1 月 21 日*

**漏洞修复：**

- 修复时间线转换中的错误。时间线用于备份后验证归档中的 WAL 段。转换使用了十进制（base `10`）而非十六进制（base `16`），导致时间线 ≥ `0xA` 时出现错误。（*Lukas Ertl、Eric Veldhuyzen 报告。*）


### v2.21 版本说明

*C 语言迁移完成*

*发布于 2020 年 1 月 15 日*

**漏洞修复：**

- 修复异步命令忽略选项的问题。异步 `archive-get`/`archive-push` 进程未加载命令配置节（如 `[global:archive-get]`）中配置的选项。（*由 Cynthia Shang 审核，Urs Kramer 报告。*）
- 修复文件名中包含 `\` 的处理问题。计算 manifest 校验和时 `\` 未被正确转义，导致 manifest 无法加载。由于集群文件名中出现 `\` 的情况极为罕见，此问题在实际使用中影响应该不大。

**新功能：**

- pgBackRest 现已完全用 C 语言实现。
- 新增 `pg-user` 选项，用于指定连接 PostgreSQL 时使用的数据库用户名。若未指定，pgBackRest 将使用本地操作系统用户或 `PGUSER`，与先前行为一致。（*由 Mike Palmiotto 贡献，David Steele 审核。*）
- 允许在 S3 驱动中使用路径风格的 URI。

**改进：**

- `backup` 命令已完全用 C 实现。（*由 Cynthia Shang 审核。*）


### v2.20 版本说明

*漏洞修复*

*发布于 2019 年 12 月 12 日*

**漏洞修复：**

- 修复 `PGDATA` 为符号链接时 `archive-push`/`archive-get` 失败的问题。这些命令尝试使用 `cwd()` 作为 `PGDATA`，但若 `PGDATA` 是符号链接，其结果与 pgBackRest 配置的路径可能不一致。修复方案：若 `cwd()` 与 pgBackRest 路径不匹配，则 `chdir()` 到该路径，并确保后续 `cwd()` 的结果与首次调用一致。（*Stephen Frost、Milosz Suchy 报告。*）
- 修复 `expire` 命令重建 `backup.info` 时的引用列表问题。由于 `backup` 命令仍使用 Perl 版本的重建逻辑，此问题仅在以下两个条件同时满足时才会触发：**1)** `backup.info` 中存在缺失的备份；**2)** 直接运行 `expire` 命令而非在 `backup` 后自动运行。两个条件同时成立的概率极低，在实际使用中应该不是问题。
- 修复 gzip 解压时意外遇到 EOF 导致的段错误。（*Stephen Frost 报告。*）


### v2.19 版本说明

*C 语言迁移与漏洞修复*

*发布于 2019 年 11 月 12 日*

**漏洞修复：**

- 修复 delta restore 中的远程超时问题。对基本未变化的集群执行 delta restore 时，若在 `protocol-timeout` 时间内未从仓库获取任何文件，远程端可能超时。已添加 keep-alive 机制以防止远程超时。（*James Sewell、Jens Wilke 报告。*）
- 修复重复 HTTP 响应头的处理问题。HTTP 响应头重复出现时，应视为等同于单个逗号分隔的响应头，而非报错（此前的行为）。（*donicrosby 报告。*）

**改进：**

- `info` 命令的 JSON 输出不再格式化（pretty-print）。不含换行符的 JSON 更便于监控系统解析；如需格式化输出，可使用 `jq` 等外部工具。（*由 Cynthia Shang 贡献，David Steele 审核。*）
- `check` 命令已完全用 C 实现。（*由 Cynthia Shang 贡献，David Steele 审核。*）

**文档改进：**

- 说明如何为 pgBackRest 做出贡献。（*由 Cynthia Shang、David Steele 贡献。*）
- 说明 `auto-stop` 选项的最大支持版本。（*由 Brad Nicholson 贡献，David Steele 审核。*）

**测试套件改进：**

- 修复使用 `--vm=none` 时容器测试路径的问题。（*Stephen Frost 建议。*）
- 修复期望测试中时区不匹配的问题。（*Stephen Frost 建议。*）
- 默认不自动生成嵌入式 libc 代码。（*Stephen Frost 建议。*）


### v2.18 版本说明

*PostgreSQL 12 支持*

*发布于 2019 年 10 月 1 日*

**新功能：**

- 支持 PostgreSQL 12。
- 为 `info` 命令新增 `set` 选项以显示详细文本输出。额外信息包括：可用于选择性恢复的数据库列表，以及表空间、符号链接及其默认目标的列表。（*由 Cynthia Shang 贡献，David Steele 审核，Stephen Frost、ejberdecia 建议。*）
- 新增 `standby` 恢复类型。在 PostgreSQL < 12 时自动向 `recovery.conf` 添加 `standby_mode=on`，在 PostgreSQL ≥ 12 时创建 `standby.signal`，为不同 PostgreSQL 版本提供统一接口。（*由 Cynthia Shang 审核。*）

**改进：**

- `restore` 命令已完全用 C 实现。（*由 Cynthia Shang 审核。*）

**文档改进：**

- 说明 `db-timeout` 与 `protocol-timeout` 之间的关系。（*由 Cynthia Shang 贡献，David Steele 审核，James Chanco Jr 建议。*）
- 添加关于备库仓库的文档说明。（*由 Cynthia Shang 贡献，David Steele 审核。*）
- 添加基于时间的 PITR FAQ。（*由 Cynthia Shang 贡献，David Steele 审核。*）


### v2.17 版本说明

*C 语言迁移与漏洞修复*

*发布于 2019 年 9 月 3 日*

**漏洞修复：**

- 改进超大量表/段文件时 manifest 构建速度过慢的问题。（*Jens Wilke 报告。*）
- 修复特殊文件的排除处理问题。（*CluelessTechnologist、Janis Puris、Rachid Broum 报告。*）

**改进：**

- `stanza-create`/`stanza-update`/`stanza-delete` 命令已完全用 C 实现。（*由 Cynthia Shang 贡献，David Steele 审核。*）
- `start`/`stop` 命令已完全用 C 实现。（*由 Cynthia Shang 贡献，David Steele 审核。*）
- 以 `0750`/`0640` 模式创建日志目录/文件。（*Damiano Albani 建议。*）

**文档漏洞修复：**

- 修复指定自定义包时仍安装 `yum.p.o` 包的问题。（*Joe Ayers、John Harvey 报告。*）

**文档改进：**

- 说明以非特权用户构建 pgBackRest 的方式。（*Laurenz Albe 建议。*）


### v2.16 版本说明

*C 语言迁移与漏洞修复*

*发布于 2019 年 8 月 5 日*

**漏洞修复：**

- 对 S3 `RequestTimeTooSkewed` 错误执行重试而非立即终止。（*sean0101n、Tim Garton、Jesper St John、Aleš Zelený 报告。*）
- 修复对 `HEAD` 请求响应中 `transfer-encoding` 的错误处理。（*Pavel Suderevsky 报告。*）
- 修复 gcc 9 优化暴露的作用域违规问题。（*Christian Lange、Ned T. Crigler 报告。*）

**新功能：**

- 新增 `repo-s3-port` 选项，用于设置非标准 S3 服务端口。

**改进：**

- `backup` 的 `local` 命令已完全用 C 实现。（*由 David Steele、Cynthia Shang 贡献。*）
- `check` 命令已部分用 C 实现。（*由 Cynthia Shang 审核。*）


### v2.15 版本说明

*`expire` 命令的 C 语言实现*

*发布于 2019 年 6 月 25 日*

**漏洞修复：**

- 修复归档保留过期清理过于激进的问题。（*由 Cynthia Shang 修复，David Steele 审核，Mohamad El-Rifai 报告。*）

**改进：**

- `expire` 命令已完全用 C 实现。（*由 Cynthia Shang 贡献，David Steele 审核。*）
- `restore` 的 `local` 命令已完全用 C 实现。
- 移除硬编码的 PostgreSQL 用户，使 `$PGUSER` 生效。（*Julian Zhang、Janis Puris 建议。*）
- 支持 `configure` 的 `--prefix` 选项。（*Daniel Westermann 建议。*）
- 将 `repo-s3-verify-ssl` 选项重命名为 `repo-s3-verify-tls`。新名称更为准确，因为 pgBackRest 不支持任何 SSL 协议版本（均视为不安全）。旧选项名称仍可继续使用。

**文档改进：**

- 在文档中添加 FAQ。（*由 Cynthia Shang 贡献，David Steele 审核。*）
- 在 PostgreSQL ≥ 9.6 的文档中使用 `wal_level=replica`。（*Patrick McLaughlin 建议。*）


### v2.14 版本说明

*漏洞修复与改进*

*发布于 2019 年 5 月 20 日*

**漏洞修复：**

- 修复当 `process-max` > 8 时 `archive-push`/`archive-get` 发生段错误的问题。（*Jens Wilke 报告。*）

**改进：**

- 使用 `force` 执行 `stanza-delete` 时绕过数据库检查。（*由 Cynthia Shang 贡献，David Steele 审核，hatifnatt 建议。*）
- 添加 `configure` 脚本以改善多平台支持。

**文档新功能：**

- 添加 CentOS/RHEL 6/7 的用户指南。


### v2.13 版本说明

*漏洞修复*

*发布于 2019 年 4 月 18 日*

**漏洞修复：**

- 修复零长度读取导致不期望接收零长度数据的 IO 过滤器出现异常的问题。（*brunre01、Jens Wilke、Tomasz Kontusz、guruguruguru 报告。*）
- 修复 `local`/`remote` 进程错误报告的可靠性问题。
- 修复 Posix/CIFS 在写入/同步/关闭时报告错误文件名的问题。


### v2.12 版本说明

*`archive-push` 命令的 C 语言实现*

*发布于 2019 年 4 月 11 日*

**重要提示**：新的 TLS/SSL 实现根据 RFC-2818 禁止 S3 存储桶名称中包含点号（`.`）。这是合规主机名验证所必需的安全修复。

**漏洞修复：**

- 修复路径选项以 `/` 结尾时的处理问题。（*Marc Cousin 报告。*）
- 修复 `archive-get` 命令中设置 `log-level-file=off` 时的问题。（*Brad Nicholson 报告。*）
- 修复 C 代码无法识别 `host:port` 选项格式（Perl 可以识别）的问题。（*Kyle Nevins 报告。*）
- 修复 `remote`/`local` 命令日志选项的问题。

**改进：**

- `archive-push` 命令已完全用 C 实现。
- 将 `process-max` 上限提升至 `999`。（*Rakshitha-BR 建议。*）
- 改进 S3 存储桶名称包含点号时的错误提示信息。

**文档改进：**

- 明确说明支持兼容 S3 协议的对象存储。（*Magnus Hagander 建议。*）


### v2.11 版本说明

*`archive-get` 命令的 C 语言实现*

*发布于 2019 年 3 月 11 日*

**漏洞修复：**

- 修复写入过程中出错可能导致 WAL 段被截断的问题。（*blogh 报告。*）
- 修复 `info` 命令在指定 stanza 时缺少 WAL 最小/最大值的问题。（*由 Stefan Fercot 修复，David Steele 审核。*）
- 修复从 C 传递给 Perl 的选项中不符合规范的 JSON 格式。（*Leo Khomenko 报告。*）

**改进：**

- `archive-get` 命令已完全用 C 实现。
- 在较旧的 Perl 版本上启用 socket keep-alive。（*由 Marc Cousin 贡献，David Steele 审核。*）
- 当参数传递给不接受参数的命令时报错。（*Jason O'Donnell 建议。*）
- 在归档中找不到 WAL 段时添加提示信息。（*Hans-Jürgen Schönig 建议。*）
- 改进证书中找不到主机名时的错误提示。（*James Badger 建议。*）
- 为 `backup.manifest` 添加额外的调试选项。（*由 blogh 贡献，David Steele 审核。*）

**文档改进：**

- 将默认文档版本更新为 PostgreSQL 10。


### v2.10 版本说明

*漏洞修复*

*发布于 2019 年 2 月 9 日*

**漏洞修复：**

- 补充 `archive-get` 所需但尚未实现的 S3 驱动方法。（*mibiio 报告。*）
- 修复对 `pg-path` 配置错误的检查逻辑。（*James Chanco Jr 报告。*）
### v2.09 版本说明

*小型改进与缺陷修复*

*发布于 2019 年 1 月 30 日*

**漏洞修复：**

- 修复多个异步状态文件引发硬错误的问题。（*报告：Vidhya Gurumoorthi、Joe Ayers、Douglas J Hunley。*）

**改进：**

- `info` 命令已完全用 C 重新实现。（*由 Cynthia Shang 贡献，David Steele 审核。*）
- 简化 `info` 命令在无 stanza 时的文本提示，将仓库路径替换为"the repository"。
- 为 macOS 构建在 Makefile 中添加 `_DARWIN_C_SOURCE` 标志。（*由 Douglas J Hunley 贡献，David Steele 审核。*）
- 将 C TLS 客户端的地址查找更新为使用现代接口。（*建议：Bruno Friedmann。*）
- 包含符合 POSIX 规范的 `strcasecmp()` 和 `fd_set` 头文件。（*建议：ucando。*）

**文档改进：**

- 修复硬编码的仓库路径。（*报告：Heath Lord。*）
- 明确说明加密始终在客户端执行。（*建议：Bruce Burdick。*）
- 添加构建文档主机的示例。
- 在 manifest 变量、列表及列表项中允许使用 `if`。


### v2.08 版本说明

*小型改进与缺陷修复*

*发布于 2019 年 1 月 2 日*

**漏洞修复：**

- 移除在 PUT S3 对象后立即请求其元数据的操作。（*报告：Matt Kunkel。*）
- 将 `archive-get-queue-max` 类型修正为 `size`。（*报告：Ronan Dunklau。*）
- 添加当前用户的 `uid`/`gid` 无法映射到用户名时的错误提示。（*报告：Camilo Aguilar。*）
- 在 PostgreSQL < 9.5 时指定 `--target-action=shutdown` 时报错。

**改进：**

- 在 S3 连接上启用 TCP keepalive。（*建议：Ronan Dunklau。*）
- 调整 `info` 命令文本输出顺序，使最新备份排在最后。（*由 Cynthia Shang 贡献，David Steele 审核，Ryan Lambert 建议。*）
- 仅在必要时变更文件所有权。
- 在抛出 S3 错误时对 `authentication` 头进行脱敏处理。（*建议：Brad Nicholson。*）

**文档改进：**

- 明确说明 `target-action` 的生效条件及 PostgreSQL 版本支持情况。（*建议：Keith Fiske。*）
- 明确说明 region/endpoint 必须与存储桶正确匹配。（*建议：Pritam Barhate。*）
- 添加构建文档的说明。


### v2.07 版本说明

*备份校验和 Delta 自动启用*

*发布于 2018 年 11 月 16 日*

**漏洞修复：**

- 修复 `archive-push-queue-max` 在连接错误时未被遵守的问题。（*报告：Lardière Sébastien。*）
- 修复用于判断是否超过 `archive-push-queue-max` 阈值时使用静态 WAL 段大小的问题。
- 修复日志文件打开失败后处理应继续却仍报错的问题。（*报告：vthriller。*）

**新功能：**

- 检测到异常情况（如时间线切换）时自动启用备份校验和 delta。（*由 Cynthia Shang 贡献，David Steele 审核。*）

**改进：**

- 对所有 S3 `5xx` 错误执行重试，而非仅对 `500` 内部错误重试。（*建议：Craig A. James。*）


### v2.06 版本说明

*校验和 Delta 备份与 PostgreSQL 11 支持*

*发布于 2018 年 10 月 15 日*

**漏洞修复：**

- 修复 S3 驱动中缺失 URI 编码的问题。（*报告：Dan Farrell。*）
- 修复配置文件中出现重复选项时错误提示不正确的问题。（*报告：Jesper St John。*）
- 修复 `info` 日志中错误报告的返回码问题。`archive-get` 返回码 1 被以 `info` 级别记录为错误消息，但实际运行正常。

**新功能：**

- 为增量备份添加校验和 delta 支持。校验和 delta 备份使用文件校验和而非时间戳来判断文件是否发生变更。（*由 Cynthia Shang 贡献，David Steele 审核。*）
- 支持 PostgreSQL 11，包括可配置的 WAL 段大小。

**改进：**

- 忽略链接表空间目录中当前 PostgreSQL 版本子目录以外的所有文件。此前若表空间目录中存在非 PostgreSQL 用户所有的其他文件，会产生报错。
- 改进 `info` 命令，使其显示 stanza 的加密类型。（*由 Cynthia Shang 贡献，David Steele 审核，Douglas J Hunley 建议。*）
- 改进对文件名中特殊字符的支持。
- 允许在 pgBackRest 配置文件中指定 `delta` 选项。（*由 Cynthia Shang 贡献，David Steele 审核。*）

**文档改进：**

- 在 `authorized_hosts` 中使用 `command` 以提升 SSH 安全性。（*建议：Stephen Frost、Magnus Hagander。*）
- 在配置参考中列出 `buffer-size` 选项的允许值。（*由 Cynthia Shang 贡献，David Steele 审核，Stéphane Schildknecht 建议。*）


### v2.05 版本说明

*环境变量选项与临时/未记录关系的排除*

*发布于 2018 年 8 月 31 日*

**漏洞修复：**

- 修复 `$PGDATA` 中*相对*链接可能以错误路径存入备份的问题。此问题不影响绝对链接，相对表空间链接已由其他检查捕获。（*报告：Cynthia Shang。*）
- 从 `check` 命令中移除未完全实现的 `online` 选项。离线操作与该命令的目的（检查归档和备份是否正常工作）相悖。（*报告：Jason O'Donnell。*）
- 修复 C 中抛出的错误在由 Perl 调用时未被记录的问题。pgBackRest 以正确的错误码退出，但缺少有助于调试的错误消息。（*报告：Douglas J Hunley。*）
- 修复布尔型选项（如 `delta`）被多次指定时的错误。（*报告：Yogesh Sharma。*）

**新功能：**

- 允许通过环境变量设置任意选项，包括之前只能在命令行指定的选项（如 `stanza`），以及不能在命令行指定的加密选项（如 `repo1-s3-key-secret`）。
- 从备份中排除临时和未记录的关系（表/索引）文件。实现逻辑与 PostgreSQL 中引入此功能的补丁一致，参见 [8694cc96](https://git.postgresql.org/pg/commitdiff/8694cc96b52a967a49725f32be7aa77fd3b6ac25) 和 [920a5e50](https://git.postgresql.org/pg/commitdiff/920a5e500a119b03356fb1fb64a677eb1aa5fc6f)。临时关系排除在 PostgreSQL ≥ `9.0` 时启用，未记录关系排除在 PostgreSQL ≥ `9.1`（该功能引入版本）时启用。（*由 Cynthia Shang 贡献，David Steele 审核。*）
- 允许从备份中排除任意目录和/或文件。滥用此功能可能导致备份不一致，使用前请仔细阅读 `--exclude` 文档。（*由 Cynthia Shang 审核。*）
- 添加 `log-subprocess` 选项，允许为 `local` 和 `remote` 子进程启用文件日志。
- 支持 PostgreSQL 11 Beta 3。

**改进：**

- 允许备份 manifest 中零大小文件引用之前的 manifest，不受时间戳 delta 的限制。（*由 Cynthia Shang 贡献，David Steele 审核。*）
- 通过直接检查状态文件改善异步 `archive-get`/`archive-push` 性能。（*由 Stephen Frost 贡献，David Steele 审核。*）
- 改进命令缺少 `stanza` 选项时的错误提示。（*建议：Sarah Conway。*）

**文档改进：**

- 修复 `log-path` 选项参考中无效的日志级别。（*报告：Camilo Aguilar。*）
- 停止尝试在 `release.xml` 中按姓/名排列贡献者。贡献者名称始终按原样呈现在发布说明中，但我们曾尝试基于姓/名分配内部 ID，这既难以判断又毫无意义。受 Christophe 在 PostgresOpen 2017 演讲"Human Beings Do Not Have a Primary Key"的启发。（*建议：Christophe Pettus。*）

**测试套件改进：**

- 若在测试环境之外执行 LibC 构建则报错。LibC 不再是生产构建所必需的。


### v2.04 版本说明

*备份恢复关键缺陷修复*

*发布于 2018 年 7 月 5 日*

**重要提示**：本版本修复了备份 resume 功能中的一个关键缺陷。此版本之前所有已 resume 的备份均应视为不一致。当先前的备份失败时，若未指定 `resume=n`，则会触发备份 resume。可通过检查备份日志中是否存在"aborted backup of same type exists, will be cleaned to remove invalid files and resumed"消息来判断备份是否已被 resume。若存在该消息，请勿使用该备份或同一备份集中的任何备份进行恢复，并检查恢复日志确认是否用到了 resume 备份。若已使用，集群中可能存在不一致数据。

**漏洞修复：**

- 修复 resume 中导致备份不一致的关键缺陷。`v0.82` 中的一次回归移除了在决定恢复哪些已中止备份文件时的时间戳比较逻辑，详情参见上方说明。（*报告：David Youatt、Yogesh Sharma、Stephen Frost。*）
- 修复集群中只存在一个用户数据库时选择性恢复报错的问题。（*由 Cynthia Shang 修复，David Steele 审核，Nj Baliyan 报告。*）
- 修复 S3 授权头中不符合 ISO-8601 规范的时间戳格式。AWS 和部分网关对空格与零填充小时均可容忍，但其他实现则不然。（*由 Andrew Schwartz 修复，David Steele 审核。*）

**新功能：**

- 支持 PostgreSQL 11 Beta 2。

**改进：**

- 改进 HTTP 客户端，在服务端未指定时将 `content-length` 设为 0。S3（及其网关）始终设置 `content-length` 或 `transfer-encoding`，但 `HTTP 1.1` 并不强制要求，部分代理（如 HAProxy）可能不包含任一字段。（*建议：Adam K. Sumner。*）
- 在 PostgreSQL 连接上设置 `search_path = 'pg_catalog'`。（*建议：Stephen Frost。*）

**文档改进：**

- 新增章节，说明如何在独立主机上构建 pgBackRest。
- 添加 S3 策略示例以限制存储桶权限。（*建议：Douglas J Hunley、Jason O'Donnell。*）


### v2.03 版本说明

*单一可执行文件部署*

*发布于 2018 年 5 月 22 日*

**漏洞修复：**

- 修复错误消息处理中潜在的缓冲区溢出问题。（*报告：Lætitia。*）
- 修复同步 `archive-get` 命令错误获取归档写锁的问题。（*报告：uspen。*）

**改进：**

- 将导出的 C 函数和 Perl 模块直接嵌入 pgBackRest 可执行文件中。
- 使用 `time_t` 替代 `__time_t` 以提升可移植性。（*建议：Nick Floersch。*）
- 在命令结束时以毫秒为单位打印总运行时长。


### v2.02 版本说明

*并行异步 archive-get 与配置文件包含*

*发布于 2018 年 5 月 6 日*

**漏洞修复：**

- 修复目录同步在仅应同步指定目录时递归执行的问题。（*报告：Craig A. James。*）
- 修复增量/差异备份中 `archive-copy` 抛出"path not found"错误的问题。（*报告：yummyliu、Vitaliy Kukharik。*）
- 修复 `PGDATA` 中两个或多个文件链接到同一目录时 manifest 构建失败的问题。（*报告：Vitaliy Kukharik。*）
- 修复链接文件缺失时 delta restore 失败的问题。
- 修复帮助信息中键值和列表选项的渲染问题。（*报告：Clinton Adams。*）

**新功能：**

- 添加异步并行 `archive-get`。该特性维护一个 WAL 段预取队列，在 PostgreSQL 通过 `restore_command` 请求 WAL 段时降低等待延迟。
- 支持附加的 pgBackRest 配置文件。配置文件目录由 `--config-include-path` 选项指定；新增 `--config-path` 选项用于覆盖 `--config` 和 `--config-include-path` 的默认基础路径。（*由 Cynthia Shang 贡献，David Steele 审核。*）
- 添加 `repo-s3-token` 选项，支持配置临时凭证令牌。pgBackRest 目前不具备主动刷新凭证的能力，因此整个命令（如 `backup`、`restore`）必须在凭证过期前完成。（*由 Yogesh Sharma 贡献，David Steele 审核。*）

**改进：**

- 更新 `archive-push-queue-max`、`manifest-save-threshold` 和 `buffer-size` 选项，支持接受 `KB`、`MB`、`GB`、`TB` 或 `PB` 为单位的值（乘数以 1024 的幂计算）。（*由 Cynthia Shang 贡献，David Steele 审核。*）
- 提升备份/恢复路径同步效率。扫描整个目录在小表数量众多时代价高昂；备份 manifest 中已包含路径列表，现改为使用该列表执行同步，而非扫描备份/恢复路径。
- 在初始 info 日志消息中同时显示命令参数和选项。
- 将 `archive-queue-max` 选项重命名为 `archive-push-queue-max`，与新增的 `archive-get-queue-max` 选项保持命名一致。旧选项名称仍可继续使用。

**文档改进：**

- 更新文档，添加 32 位支持说明及注意事项。32 位支持已于 v1.26 添加。（*报告：Viorel Tabara。*）
- 添加使用 PostgreSQL 和 jq 的监控示例。（*建议：Stephen Frost、Brian Faherty。*）
- 添加归档配置中命令节使用示例。（*建议：Christophe Courtois。*）
- 移除将 `info --output=json` 描述为实验性功能的说明。
- 更新 `spool-path` 选项的过时描述。

**测试套件改进：**

- 使用 lcov 进行 C 单元测试覆盖率报告，从 Devel::Cover 切换，原因是后者无法报告从 gcov 转换的报告中的分支覆盖率。模块的不完整分支覆盖率现在会产生错误。单元测试覆盖率仅在语句或分支覆盖不完整时才会出现在报告中。


### v2.01 版本说明

*小型缺陷修复与改进*

*发布于 2018 年 3 月 19 日*

**漏洞修复：**

- 修复使用 `--type=immediate` 恢复时 `--target-action` 和 `--recovery-option` 选项被报告为无效的问题。（*报告：Brad Nicholson。*）
- 在命令行传入加密选项（如 `repo1-s3-key`）时立即报错。由于 pgBackRest 不会将加密选项传递给子进程，之前会抛出晦涩的错误；新错误更加清晰并提示了解决方法。同时更新命令文档，省略不能在命令行指定的加密选项。（*报告：Brad Nicholson。*）
- 修复向嵌入式 Perl 传递 `--no-config` 时的问题。（*报告：Ibrahim Edib Kokdemir。*）
- 修复将 `log-level-stderr` 设置高于 `warn` 时 `local`/`remote` 进程因 stderr 出现意外输出而报错退出的问题。`local`/`remote` 进程的日志级别上限现调整为 `error`，因为这些进程本不应输出警告。（*报告：Clinton Adams。*）
- 修复存在表空间时 `check` 命令中 manifest 测试的问题。（*由 Cynthia Shang 修复，David Steele 审核，Thomas Flatley 报告。*）

**改进：**

- 在配置文件中为不接受多个参数的选项设置多个值时报错。（*由 Cynthia Shang 贡献，David Steele 审核。*）
- 从 `src/Makefile` 中移除多余的 sudo 命令。（*由 Adrian Vondendriesch 贡献，David Steele 审核。*）

**文档改进：**

- 在示例中为带索引的选项（如 `repo-*`、`pg-*`）显示索引。（*建议：Stephen Frost。*）
- 简化命令页面目录，仅列出命令。（*建议：Stephen Frost。*）
- 移除关于 C 库为可选项的说明。

**测试套件改进：**

- 添加 CentOS/RHEL 软件包构建。
- 使用 clang 进行静态代码分析。初始分析未发现问题，仅发现部分函数应标记为 `__noreturn__`。


### v2.00 版本说明

*archive-push 性能改进*

*发布于 2018 年 2 月 23 日*

**新功能：**

- `archive-push` 命令现已部分用 C 实现，使 PostgreSQL 的 `archive_command` 在处理来自异步归档进程的状态消息时运行速度显著提升。（*由 Cynthia Shang 审核。*）

**改进：**

- 改进 `check` 命令，增加对备份 manifest 是否可构建的验证。（*由 Cynthia Shang 贡献，David Steele 审核。*）
- 提升 HTTPS 客户端性能。缓冲现在会在 socket 上有 `pending` 字节时将其计入，而非完全依赖 `select()`。在某些情况下，最后几个字节直到连接关闭才会被刷出。
- 提升 S3 删除性能。常量 `S3_BATCH_MAX` 曾被替换为硬编码值 2（可能是测试时遗留）。
- 允许在命令行将任意非命令行选项重置为默认值，从而无需为特定需求另写配置文件即可覆盖 `pgbackrest.conf` 中的设置。
- C 库现为必需项，取消了条件加载，简化了新库特性的开发。
- `pgbackrest` 可执行文件现在是 C 二进制文件而非 Perl，使对时间敏感的命令（如异步 `archive-push`）运行更快。
- 将 `db-*` 选项重命名为 `pg-*`，将 `backup-*` 选项重命名为 `repo-*`，以提高一致性。`repo-*` 选项现已带索引，但目前仅允许使用一个。

**文档改进：**

- 文档中所有集群均使用校验和初始化。
- 在文档和命令行帮助中列出已弃用的选项名称。
- 明确说明 S3 存储桶必须由用户自行创建。（*建议：David Youatt。*）


### v1.29 版本说明

*备份恢复关键缺陷修复*

*发布于 2018 年 7 月 5 日*

**重要提示**：本版本修复了备份 resume 功能中的一个关键缺陷。此版本之前所有已 resume 的备份均应视为不一致。当先前的备份失败时，若未指定 `resume=n`，则会触发备份 resume。可通过检查备份日志中是否存在"aborted backup of same type exists, will be cleaned to remove invalid files and resumed"消息来判断备份是否已被 resume。若存在该消息，请勿使用该备份或同一备份集中的任何备份进行恢复，并检查恢复日志确认是否用到了 resume 备份。若已使用，集群中可能存在不一致数据。

**漏洞修复：**

- 修复 resume 中导致备份不一致的关键缺陷。`v0.82` 中的一次回归移除了在决定恢复哪些已中止备份文件时的时间戳比较逻辑，详情参见上方说明。（*报告：David Youatt、Yogesh Sharma、Stephen Frost。*）
- 修复 S3 授权头中不符合 ISO-8601 规范的时间戳格式。AWS 和部分网关对空格与零填充小时均可容忍，但其他实现则不然。（*由 Andrew Schwartz 修复，David Steele 审核。*）
- 修复目录同步在仅应同步指定目录时递归执行的问题。（*报告：Craig A. James。*）
- 修复使用 `--type=immediate` 恢复时 `--target-action` 和 `--recovery-option` 选项被报告为无效的问题。（*报告：Brad Nicholson。*）
- 修复增量/差异备份中 `archive-copy` 抛出"path not found"错误的问题。（*报告：yummyliu、Vitaliy Kukharik。*）
- 修复 `PGDATA` 中两个或多个文件链接到同一目录时 manifest 构建失败的问题。（*报告：Vitaliy Kukharik。*）
- 修复链接文件缺失时 delta restore 失败的问题。
- 修复集群中只存在一个用户数据库时选择性恢复报错的问题。（*由 Cynthia Shang 修复，David Steele 审核，Nj Baliyan 报告。*）

**改进：**

- 改进 HTTP 客户端，在服务端未指定时将 `content-length` 设为 0。S3（及其网关）始终设置 `content-length` 或 `transfer-encoding`，但 `HTTP 1.1` 并不强制要求，部分代理（如 HAProxy）可能不包含任一字段。（*建议：Adam K. Sumner。*）
- 提升 HTTPS 客户端性能。缓冲现在会在 socket 上有 `pending` 字节时将其计入，而非完全依赖 `select()`。在某些情况下，最后几个字节直到连接关闭才会被刷出。
- 提升 S3 删除性能。常量 `S3_BATCH_MAX` 曾被替换为硬编码值 2（可能是测试时遗留）。
- 提升备份/恢复路径同步效率。扫描整个目录在小表数量众多时代价高昂；备份 manifest 中已包含路径列表，现改为使用该列表执行同步，并移除不再使用的递归路径同步功能。

**文档改进：**

- 更新文档，添加 32 位支持说明及注意事项。32 位支持已于 v1.26 添加。（*报告：Viorel Tabara。*）
- 明确说明 S3 存储桶必须由用户自行创建。（*建议：David Youatt。*）
- 更新 `spool-path` 选项的过时描述。


### v1.28 版本说明

*Stanza 删除*

*发布于 2018 年 2 月 1 日*

**漏洞修复：**

- 修复使用 `--db-include` 恢复表空间中单个数据库时失败的问题。（*由 Cynthia Shang 修复，David Steele 审核，Chiranjeevi Ravilla 报告。*）
- 确保在将 `archive.info` 匹配到 `backup.info` 时选择最新的 `db-id`。在存在 `system-id` 和 `db-version` 重复项时（例如回滚 `pg_upgrade` 后），此改动可提供正确匹配。（*由 Cynthia Shang 修复，David Steele 审核，Adam K. Sumner 报告。*）
- 修复报告无效命令时过于冗长的错误消息。（*报告：Jason O'Donnell。*）

**新功能：**

- 添加 `stanza-delete` 命令，用于清理不再使用的 stanza。（*由 Cynthia Shang 贡献，David Steele 审核，Magnus Hagander 建议。*）

**改进：**

- 改进 `stanza-create` 命令，使其在 stanza 已存在时不再报错。（*由 Cynthia Shang 贡献，David Steele 审核。*）

**文档改进：**

- 更新 `stanza-create --force` 文档，提示使用时需谨慎。（*建议：Jason O'Donnell。*）


### v1.27 版本说明

*缺陷修复与文档*

*发布于 2017 年 12 月 19 日*

**漏洞修复：**

- 修复 `backup` 和 `restore` 的本地性检查错误被抑制的问题。存在备份主机时，备份应仅允许在备份主机上执行，恢复应仅允许在数据库主机上执行，除非创建了忽略远程主机的备用配置。（*报告：Lardière Sébastien。*）
- 修复 PostgreSQL 10 上 WAL 未过期的问题。原因是正则表达式存在缺陷，期望所有 PostgreSQL 主版本号均为 X.X 格式。（*报告：Adam Brusselback。*）
- 修复 `--no-config` 选项未传递给子进程的问题。这会导致子进程仍读取本地配置文件，可能引发意外行为。
- 修复 `info` 命令在先前版本集群没有备份或归档时仍显示 `"db (prior)"` 输出的问题。（*由 Cynthia Shang 修复，David Steele 审核，Stephen Frost 报告。*）

**文档改进：**

- 说明 `archive-copy` 和 `archive-check` 选项之间的关系。（*建议：Markus Nullmeier。*）
- 改进 `archive-copy` 参考文档。


### v1.26 版本说明

*仓库加密*

*发布于 2017 年 11 月 21 日*

**漏洞修复：**

- 修复恢复时复制大型 manifest 可能失败的问题。（*报告：Craig A. James。*）
- 修复 32 位架构下不正确的 WAL 偏移量。（*由 Javier Wilson 修复，David Steele 审核。*）
- 修复获取旧数据库版本 WAL 时的问题。执行 `stanza-upgrade` 后，应仍能恢复之前版本的备份并通过 `archive-get` 进行恢复。但 `archive-get` 仅检查最新的 db 版本/id 而失败。同时清理了同一 db 版本/id 多次出现时的相关问题。（*由 Cynthia Shang 修复，David Steele 审核，Clinton Adams 报告。*）
- 修复恢复时无效备份组未被正确设置的问题。若备份无法将某个组映射到名称，则将该组以 `false` 存入 manifest，恢复时使用 `$PGDATA` 所有者或当前用户的组来设置。该逻辑存在缺陷，导致所选的组覆盖了用户，组未定义而用户被错误设置为组。（*报告：Jeff McCormick。*）
- 修复向远程传递参数时的问题。指定多个 db 时，无论实际处理的是哪个 db，都会传递 db1 的路径、端口和 socket 路径。（*报告：uspen。*）

**新功能：**

- 支持仓库加密。（*由 Cynthia Shang、David Steele 贡献。*）

**改进：**

- 当 `--compress-level-network=0` 时禁用 gzip 过滤器。该过滤器曾以压缩级别 0 运行，带来额外开销却毫无收益。
- 改进 gzip 过滤器的解压性能。

**文档改进：**

- 添加用于改善 issue 提交时初始信息收集的模板。（*由 Cynthia Shang 贡献，David Steele 审核。*）
- 明确说明 `archive-timeout` 选项的用法及其与 PostgreSQL `archive_timeout` 设置的区别。（*由 Cynthia Shang 贡献，David Steele 审核，Keith Fiske 建议。*）

**测试套件改进：**

- 支持 32 位 i386/i686 架构的自动化测试。


### v1.25 版本说明

*S3 性能改进*

*发布于 2017 年 10 月 24 日*

**漏洞修复：**

- 修复 `compress-level` 选项自定义设置被忽略的问题。（*报告：Jens Wilke。*）
- 移除检测到重叠时间线时的报错。重叠时间线在许多时间点恢复（PITR）场景中是有效的。（*报告：blogh。*）
- 修复 JSON info 输出中 `database-id` 未渲染为整数的问题。（*由 Cynthia Shang 修复，David Steele 审核，Jason O'Donnell 报告。*）

**新功能：**

- 提升 S3 列表请求的性能。过滤表达式中任何起始字面量部分均用于生成搜索前缀，通常可将请求范围控制在足够小，从而避免触发限流。（*建议：Mihail Shvein。*）

**测试套件改进：**

- 添加 I/O 性能测试。


### v1.24 版本说明

*新增备份排除项*

*发布于 2017 年 9 月 28 日*

**漏洞修复：**

- 修复从备库初始化备份期间警告消息覆盖低优先级日志消息输出的问题。（*报告：uspen。*）
- 修复部分 `db-*` 选项（如 `db-port`）未传递给远程的问题。（*报告：uspen。*）

**新功能：**

- 从备份中排除 `pg_snapshots`、`pg_serial`、`pg_notify` 和 `pg_dynshmem` 目录的内容，因为这些内容在启动时会重建。
- 从备份中排除 `pg_internal.init` 文件，因为这些文件在启动时会重建。

**改进：**

- 在异步进程完全从主进程分离后才打开日志文件，以防止主进程向该文件写入日志。（*建议：Jens Wilke。*）

**文档改进：**

- 添加无密码 SSH 配置说明。
- 在文档中将 master 重命名为 primary，与 PostgreSQL 惯例保持一致。


### v1.23 版本说明

*多备库与 PostgreSQL 10 支持*

*发布于 2017 年 9 月 3 日*

**漏洞修复：**

- 修复文件持续增大时压缩可能中止的问题。（*报告：Jesper St John、Aleksandr Rogozin。*）
- 修复本地进程未向远程发送 keep-alive 的问题。（*报告：William Cox。*）

**新功能：**

- 支持配置最多七个备库用于从备库备份。（*由 Cynthia Shang 贡献，David Steele 审核。*）
- 支持 PostgreSQL 10。
- 在读取 XML 数据时允许使用 `content-length`（除分块编码外），以提升与第三方 S3 网关的兼容性。（*建议：Victor Gdalevich。*）

**改进：**

- 增加 S3 的 HTTP 超时时间。
- 添加 HTTP 重试，增强对 S3 瞬时网络错误的容错能力。

**文档改进：**

- 修复文档生成，在配置页面中包含章节摘要。（*由 Cynthia Shang 修复，David Steele 审核。*）

### v1.22 版本说明

*修复 S3 重试*

*发布于 2017 年 8 月 9 日*

**漏洞修复：**

- 修复 S3 重试中的身份验证问题。
### v1.21 版本说明

*改进 `info` 输出及 SSH 端口选项*

*发布于 2017 年 8 月 8 日*

**漏洞修复：**

- 恢复时现在会重新创建 `archive_status` 目录，以支持 PostgreSQL 8.3——该版本与较新版本不同，不会自动重建此目录。（*报告者：Stephen Frost。*）
- 修复了执行 `stanza-upgrade` 后，旧版 PostgreSQL 的空归档目录可能残留的问题。（*修复者：Cynthia Shang。审阅者：David Steele。*）

**新功能：**

- 改进了 `info` 命令的文本与 JSON 输出，新增归档 ID 字段，以及当前与历史数据库集群版本（如有）在归档中的最小/最大 WAL 信息。（*贡献者：Cynthia Shang。审阅者：David Steele。*）
- 新增 `--backup-ssh-port` 和 `--db-ssh-port` 选项，支持非默认 SSH 端口。（*贡献者：Cynthia Shang。审阅者：David Steele。*）

**改进：**

- 当 S3 返回内部错误（500）时自动重试。

**文档漏洞修复：**

- 根据命令上下文修正了 `--online` 选项的描述。

**文档新功能：**

- 在手动安装说明中新增了创建 `/etc/pgbackrest.conf` 的步骤。

**文档改进：**

- 将仓库选项移入命令行帮助的独立章节。（*建议者：Stephen Frost。*）


### v1.20 版本说明

*关键 8.3/8.4 漏洞修复*

*发布于 2017 年 6 月 27 日*

**重要说明**：使用了表空间的 PostgreSQL 8.3 和 8.4 环境，应立即从任意 v1 版本升级并执行一次全量备份。本版本修复了一个仅影响上述两个版本的漏洞——该漏洞会导致表空间无法被备份。PostgreSQL >= 9.0 不受影响。

**漏洞修复：**

- 修复了 PostgreSQL <= 8.4 上表空间无法备份的问题。
- 修复了 C 库构建时缺少编译标志的问题，该问题会导致在 32 位系统上生成不匹配的二进制文件。（*报告者：Adrian Vondendriesch。*）

**新功能：**

- 新增 `s3-repo-ca-path` 和 `s3-repo-ca-file` 选项，支持 `IO::Socket::SSL` 无法自动定位 CA 的系统（如 RHEL7），或加载自定义 CA。（*建议者：Scott Frazer。*）

**测试套件新功能：**

- 将文档构建纳入 CI 流程。


### v1.19 版本说明

*S3 支持*

*发布于 2017 年 6 月 12 日*

**漏洞修复：**

- 修复了 `info` 命令，确保显示的 WAL 归档最小/最大值对应当前数据库版本。（*修复者：Cynthia Shang。审阅者：David Steele。*）
- 修复了 `backup` 命令：当备库未配置或不可达时，`--backup-standby` 选项现在会被重置，并继续在主库上执行备份。（*修复者：Cynthia Shang。审阅者：David Steele。*）
- 修复了远程进程产生的配置警告导致主进程报错的问题。（*修复者：Cynthia Shang。审阅者：David Steele。*）

**新功能：**

- 支持将 Amazon S3 作为备份仓库。（*审阅者：Cynthia Shang。*）

**文档漏洞修复：**

- 将配置参考中无效的 `max-archive-mb` 选项更正为 `archive-queue-max`。
- 修复了安装章节中缺少 `sudo` 的问题。（*修复者：Lætitia。审阅者：David Steele。*）


### v1.18 版本说明

*stanza 升级、代码重构与锁机制改进*

*发布于 2017 年 4 月 12 日*

**漏洞修复：**

- 修复了一个问题：使用本地工作进程的只读操作（如 `restore`）会创建写锁，干扰并行 `archive-push`。（*报告者：Jens Wilke。*）

**新功能：**

- 新增 `stanza-upgrade` 命令，为 PostgreSQL 主版本升级后的 stanza 升级提供了正式机制。（*贡献者：Cynthia Shang。审阅者：David Steele。*）
- 新增对 `pgbackrest.conf` 的验证功能，当选项无效或所在章节不正确时输出警告。（*贡献者：Cynthia Shang。审阅者：David Steele。*）

**改进：**

- 简化了锁机制。现在仅主进程持有写锁（用于 `archive-push` 和 `backup` 命令），不再要求所有本地和远程工作进程都持锁。
- 不再将备份目录中文件的时间戳同步为与集群目录一致。此做法原本为支持备份续传而设计，该功能现已改由校验和机制实现。
- 改进了 `restore` 命令检测到 `postmaster.pid` 时的错误提示信息。（*建议者：Yogesh Sharma。*）
- 将返回码范围从 25~125 重新编号，以避免 PostgreSQL 将某些返回码解释为致命信号异常。（*建议者：Yogesh Sharma。*）


### v1.17 版本说明

*页面校验和漏洞修复*

*发布于 2017 年 3 月 13 日*

**漏洞修复：**

- 修复了新初始化但未使用的页面触发页面校验和警告的问题。（*报告者：Stephen Frost。*）


### v1.16 版本说明

*页面校验和改进、CI 与包测试*

*发布于 2017 年 3 月 2 日*

**漏洞修复：**

- 修复了超过 1GB 的表在第一个段之后报告页面校验和警告的问题。（*报告者：Stephen Frost。*）
- 修复了使用非默认表空间创建的数据库，对 `pg_filenode.map` 和 `pg_internal.init` 产生虚假页面未对齐警告的问题。（*报告者：blogh。*）

**测试套件新功能：**

- 集成 `travis-ci` 进行持续集成。
- 为所有受支持发行版自动构建 Debian 软件包。


### v1.15 版本说明

*代码重构与漏洞修复*

*发布于 2017 年 2 月 13 日*

**漏洞修复：**

- 修复了 v1.13 引入的回归问题：构建 manifest 期间若有文件被删除（如表被删除），备份可能失败。（*报告者：Navid Golpayegani。*）


### v1.14 版本说明

*代码重构与漏洞修复*

*发布于 2017 年 2 月 13 日*

**漏洞修复：**

- 修复了 `archive-push` 报错后不重试、而是无限期向 PostgreSQL 返回错误（除非手动删除 `.error` 文件）的问题。（*报告者：Jens Wilke。*）
- 修复了并行归档中的竞争条件：多个进程同时尝试创建新路径时会产生错误。（*报告者：Jens Wilke。*）

**改进：**

- 提升了 `info` 命令中 `wal archive min/max` 的查询性能。（*建议者：Jens Wilke。*）

**文档新功能：**

- 更新了异步归档文档，更准确地描述了新方法的工作原理及其与旧方法的差异。（*建议者：Jens Wilke。*）


### v1.13 版本说明

*并行归档、stanza 创建、改进的 `info` 与 `check`*

*发布于 2017 年 2 月 5 日*

**重要说明**：异步归档的新实现不再将 WAL 复制到独立队列。升级到 1.13 后，旧队列中残留的 WAL 将被放弃，**不会**推送到仓库。为避免数据丢失，请在升级前通过设置 `archive_command = false` 停止归档，然后执行 `pgbackrest --stanza=[stanza-name] archive-push` 清空异步队列并等待进程结束，确认 `[spool-path]/archive/[stanza-name]/out` 中的队列已清空，最后再安装 1.13 并恢复原始 `archive_command`。**重要说明**：`stanza-create` 命令不再是可选步骤，在**新** stanza 上执行备份或归档前必须先执行该命令。已有 stanza 无需重新执行。

**漏洞修复：**

- 修复了 C 库中 const 赋值导致编译器警告的问题。（*修复者：Adrian Vondendriesch。审阅者：David Steele。*）
- 修复了 `--repo-sync` 选项遗漏的若干目录同步操作。
- 修复了恢复时因用户/组缺失导致 `File->owner()` 出现"未初始化值"错误的问题。（*报告者：Leonardo GG Avellar。*）
- 修复了协议不匹配错误未输出预期值的问题。
- 修复了 `archive-get` 的一条虚假日志消息，该消息错误地将退出码 1 标记为异常终止。

**新功能：**

- 改进了异步归档的多进程实现。
- 改进了 `stanza-create` 命令，使其能在大多数情况下修复损坏的仓库，并具备足够的健壮性以成为强制执行步骤。（*贡献者：Cynthia Shang。审阅者：David Steele。*）
- 改进了 `check` 命令，使其可在备库上运行；由于副本无法执行 `pg_switch_xlog()`，仅执行基本检查。（*贡献者：Cynthia Shang。审阅者：David Steele。*）
- 在 `info` 命令中新增了归档和备份的 WAL 范围信息。
- 在 PostgreSQL < 9.2 中重映射表空间时，新增更新 `pg_tablespace.spclocation` 的警告提示。（*贡献者：blogh。审阅者：David Steele。*）
- 移除了 `archive-get`、`restore`、`info` 和 `check` 命令的远程锁需求，因为上述均为只读操作。（*建议者：Michael Vitale。*）

**改进：**

- 日志文件头信息现在等到第一条日志条目写入时才输出。（*建议者：Jens Wilke。*）
- 通过以备份起始 LSN 过滤，降低了撕裂页面导致页面校验和误报的概率。
- 从 C 库构建标志中移除了 Intel 专用优化。（*贡献者：Adrian Vondendriesch。审阅者：David Steele。*）
- 移除了 `--lock` 选项。该选项在锁目录可以位于仓库之外前引入，现已废弃。
- 新增 `--log-timestamp` 选项，允许在日志中抑制时间戳输出，主要用于自动化文档场景以避免过滤器干扰。
- 修复了无法将相对路径转换为绝对路径时未返回正确错误码的问题。（*建议者：Yogesh Sharma。*）

**文档新功能：**

- 在用户指南中新增了 `process-max` 选项的说明文档。（*贡献者：Cynthia Shang。审阅者：David Steele。*）


### v1.12 版本说明

*页面校验和、配置改进与漏洞修复*

*发布于 2016 年 12 月 12 日*

**重要说明**：在此前版本中，命令行上指定对当前命令无效的选项不会报错。现在无效选项将产生错误，请仔细检查环境中的命令行参数以避免升级中断。

**漏洞修复：**

- 修复了命令行上提供对指定命令无效的选项时不报错的问题。这些选项虽被忽略且不影响行为，但容易造成混淆。无效选项现在将产生错误。（*报告者：Nikhilchandra Kulkarni。*）
- 修复了仓库中表空间内部符号链接未被创建的问题。此问题仅在尝试通过文件系统快照在原地手动启动集群时才会出现，不影响正常的备份与恢复。
- 修复了日志系统初始化之前（即解析选项期间）错误信息无法输出到控制台的问题。错误码仍会准确返回，进程不会在实际失败时显示为成功。（*报告者：Adrian Vondendriesch。*）
- 修复了备份服务器上指定的 `db-port` 选项，若不来自第一个已配置的数据库则无法正确传递给远程的问题。（*报告者：Michael Vitale。*）

**新功能：**

- 新增 `--checksum-page` 选项，允许 pgBackRest 在 PostgreSQL >= 9.3 且启用了页面校验和的情况下，验证数据文件中的页面校验和。注意：此功能依赖 C 库，操作系统软件包中可能暂不提供。当 C 库存在且集群启用了校验和时，该选项将自动启用。（*建议者：Stephen Frost。*）
- 新增 `--repo-link` 选项，允许在仓库位于不支持符号链接的文件系统时抑制内部符号链接的创建。这不影响 pgBackRest 的任何核心功能，但不会创建 `latest` 便捷链接及内部表空间符号链接，从而影响通过文件系统快照在原地手动启动集群的能力。
- 新增 `--repo-sync` 选项，允许在不支持目录同步的文件系统（如 NTFS）上禁用仓库目录同步。
- 新增可预测的日志条目，用于标识命令已成功完成。例如，备份成功结束时将输出：`INFO: backup command end: completed successfully`。（*建议者：Jens Wilke。*）

**改进：**

- 为简化处理，`pg_control` 文件现在与其他文件一同复制，不再单独在流程末尾复制。`backup` 命令不依赖此行为，`restore` 命令则将文件复制到临时文件，在恢复结束时重命名。

**文档漏洞修复：**

- 修复了 PDF 构建中异常抑制的问题。
- 修复了 v1.10 引入的章节链接回归问题。

**文档新功能：**

- 在快速入门章节中新增了保留策略相关内容。


### v1.11 版本说明

*异步归档效率漏洞修复*

*发布于 2016 年 11 月 17 日*

**漏洞修复：**

- 修复了异步归档每次执行只传输一个文件而非批量传输的问题。此回归问题自 v1.09 引入，仅影响效率——异步模式下所有 WAL 段均被正确归档。（*报告者：Stephen Frost。*）


### v1.10 版本说明

*stanza 创建与小型漏洞修复*

*发布于 2016 年 11 月 8 日*

**漏洞修复：**

- 修复了两次备份之间数据库没有任何变更、仅 `pg_control` 发生变化时备份可能报错的问题。
- 修复了前缀相同的表空间路径触发无效链接错误的问题。（*报告者：Nikhilchandra Kulkarni。*）

**新功能：**

- 新增 `stanza-create` 命令，正式化了在仓库中创建 stanza 的流程。（*贡献者：Cynthia Shang。审阅者：David Steele。*）

**改进：**

- 从 Perl 模块中移除了多余的 `use lib` 指令。（*建议者：Devrim Gündüz。*）


### v1.09 版本说明

*9.6 支持、可配置性改进与漏洞修复*

*发布于 2016 年 10 月 10 日*

**漏洞修复：**

- 修复了 `check` 命令在备份目录不存在时仍记录错误日志消息的问题。（*修复者：Cynthia Shang。审阅者：David Steele。*）
- 修复了检测到无效归档命令时错误消息未正确显示该命令的问题。（*报告者：Jason O'Donnell。*）
- 修复了一个问题：当 `archive-push` 没有足够空间排队新 WAL 段时，异步归档进程不会被启动，导致队列永远无法清空（除非手动干预）。现在，当空间不足时 PostgreSQL 会收到错误，但异步进程仍会被启动，以便最终释放空间。（*报告者：Jens Wilke。*）
- 修复了一个远程超时问题：本地进程在生成校验和（续传或恢复期间）而未复制文件时，远程进程可能进入空闲状态。（*报告者：Jens Wilke。*）

**新功能：**

- 在 PostgreSQL 9.6 上将自动使用非独占备份。
- 新增 `cmd-ssh` 选项，允许指定 SSH 客户端。（*建议者：Jens Wilke。*）
- 新增 `log-level-stderr` 选项，控制控制台日志消息输出到 `stderr` 还是 `stdout`。默认值为 `warn`，与旧版本行为略有不同，但更符合直觉。设置 `log-level-stderr=off` 可恢复旧行为。（*建议者：Sascha Biberhofer。*）
- 将数据库连接的 `application_name` 设置为 `"pgBackRest [command]"`。（*建议者：Jens Wilke。*）
- 当 `archive-check` 选项启用时，检查 `archive_mode` 是否已开启。

**改进：**

- 优化了无法获取 pgBackRest 顾问锁时的错误提示，明确说明这不是 PostgreSQL 备份锁。（*建议者：Jens Wilke。*）
- 命令启动的 INFO 日志中包含 pgBackRest 版本号。
- 本地进程启动/停止的 INFO 日志中记录进程 ID。

**文档新功能：**

- 在用户指南中新增了 `archive-timeout` 选项的说明文档。（*贡献者：Cynthia Shang。审阅者：David Steele。*）


### v1.08 版本说明

*漏洞修复与日志改进*

*发布于 2016 年 9 月 14 日*

**漏洞修复：**

- 修复了本地进程完成后未断开连接、可能导致稍后超时的问题。（*报告者：Todd Vernick。*）
- 修复了协议层在等待 WAL 段到达归档时可能超时的问题。（*报告者：Todd Vernick。*）

**改进：**

- 缓存文件日志输出，直到文件创建完成，以生成更完整的日志记录。


### v1.07 版本说明

*线程转进程及漏洞修复*

*发布于 2016 年 9 月 7 日*

**漏洞修复：**

- 修复了备库备份期间表空间从主库复制的问题。
- 修复了 `check` 命令：备份信息现在同时在远程和本地进行检查，而不仅仅在本地。（*修复者：Cynthia Shang。审阅者：David Steele。*）
- 修复了 `retention-archive-type=diff` 时 `retention-archive` 未被自动设置、导致归档过期不积极的问题。（*修复者：Cynthia Shang。审阅者：David Steele。*）

**新功能：**

- 将 Perl 线程转换为进程，提高兼容性与性能。
- 排除 `$PGDATA/pg_replslot` 目录内容，防止主库上的复制槽被纳入备份。
- 即使 `archive-check=n`，`archive-start` 和 `archive-stop` 设置也会写入 `backup.manifest`。（*建议者：Jens Wilke。*）
- 当归档保留策略设置可能未达到预期效果或会导致无限期保留时，新增额外警告。（*贡献者：Cynthia Shang。审阅者：David Steele。*）
- 对 PostgreSQL 9.6 rc1 的非独占备份提供实验性支持。后续候选版本中控制/目录/WAL 版本的变更可能破坏兼容性，但 pgBackRest 将跟随每个版本更新。

**文档漏洞修复：**

- 修复了与二进制路径相关的文档可复现性问题。

**文档新功能：**

- 新增归档保留策略文档。（*贡献者：Cynthia Shang。审阅者：David Steele。*）


### v1.06 版本说明

*从备库备份与漏洞修复*

*发布于 2016 年 8 月 25 日*

**漏洞修复：**

- 修复了引用另一个链接的表空间链接不报错、而是直接跳过该表空间的问题。（*报告者：Michael Vitale。*）
- 修复了 `pgbackrest.conf` 中不允许多值的选项可被多次指定而不报错的问题。（*报告者：Michael Vitale。*）
- 修复了增大 `db-timeout` 选项时 `protocol-timeout` 未自动同步增大的问题。（*报告者：Todd Vernick。*）

**新功能：**

- 支持从备库集群执行备份。仍需连接主库以启动/停止备份并复制未被复制的文件，但绝大多数文件从备库复制，从而降低主库负载。
- 更灵活的数据库配置。主库和备库均可在备份服务器上配置，pgBackRest 将自动判断哪个是主库。使用独立备份服务器时，主备切换后无需修改备份配置。
- 备份时排除 PostgreSQL 启动时会清理、重建或清零的目录，包括 `pgsql_tmp` 和 `pg_stat_tmp`。`postgresql.auto.conf.tmp` 文件现在也被排除，此外还有之前已排除的文件：`backup_label.old`、`postmaster.opts`、`postmaster.pid`、`recovery.conf`、`recovery.done`。
- 对 PostgreSQL 9.6 beta4 的非独占备份提供实验性支持。后续 Beta 版本中控制/目录/WAL 版本的变更可能破坏兼容性，但 pgBackRest 将跟随每个版本更新。

**改进：**

- 改进了 manifest 构建中链接指向另一链接时的错误消息。
- 在 `archive-push` 或 `archive-get` 中检测到相对路径时，在错误消息中添加了提示信息。
- 改进了备份日志消息，明确指出文件正在从哪台主机复制。


### v1.05 版本说明

*表空间链接检查漏洞修复*

*发布于 2016 年 8 月 9 日*

**漏洞修复：**

- 修复了一个问题：以 $PGDATA 为子字符串的表空间路径，即使实际上不是 $PGDATA 的子目录，也会被误识别为子目录。同时对相对路径检查进行了加固。（*报告者：Chris Fort。*）

**文档新功能：**

- 新增了使用 cron 调度备份的文档。（*贡献者：Cynthia Shang。审阅者：David Steele。*）

**文档改进：**

- 将积压事项从 pgBackRest 网站迁移到 GitHub 仓库 Wiki。（*贡献者：Cynthia Shang。审阅者：David Steele。*）


### v1.04 版本说明

*各类漏洞修复*

*发布于 2016 年 7 月 30 日*

**漏洞修复：**

- 修复了多余远程连接导致多线程备份/恢复可能超时或产生锁冲突的问题。（*报告者：Michael Vitale。*）
- 修复了 `check` 命令未强制要求 `db-path`、缺失时触发断言而非友好错误消息的问题。（*报告者：Michael Vitale。*）
- 修复了 `check` 命令在数据库版本/ID 与归档不匹配时未抛出错误的问题。（*修复者：Cynthia Shang。审阅者：David Steele。*）
- 修复了数据库服务器的 `pgbackrest.conf` 中没有 `backup-host` 选项时，远程进程可能尝试启动自身远程进程的问题。（*报告者：Lardière Sébastien。*）
- 修复了 `pg_xlog` 目录为符号链接时其内容被纳入备份的问题。这不会影响恢复，但会浪费存储空间。
- 修复了锁操作中一个无效的 `log()` 调用。

**新功能：**

- 对 PostgreSQL 9.6 beta3 的非独占备份提供实验性支持。后续 Beta 版本中控制/目录/WAL 版本的变更可能破坏兼容性，但 pgBackRest 将跟随每个版本更新。

**改进：**

- 抑制 SSH 协议连接上的横幅信息。
- 改进了远程错误消息，标识出发生错误的主机。
- 所有远程类型现在都会获取锁。此前的例外情况源于测试框架和 pgBackRest 运行在同一虚拟机中的历史原因，现已不再适用。

**文档新功能：**

- 新增了关于 `backrest-user` 选项默认值为 `backrest` 的说明。（*建议者：Michael Vitale。*）
- 更新了受支持平台上软件包可用性的相关信息。（*建议者：Michael Vitale。*）


### v1.03 版本说明

*`check` 命令与漏洞修复*

*发布于 2016 年 7 月 2 日*

**漏洞修复：**

- 修复了多线程 `backup` 期间大量小文件导致 keep-alive 被抢占，以及单/多线程备份续传和 `restore` 校验和计算中完全缺少 keep-alive 的问题。（*报告者：Janice Parkinson、Chris Barber。*）
- 修复了设置 `db-host` 选项后从命令行显式调用 `expire` 命令被拒绝执行的问题。备份后自动运行 `expire` 时不受此问题影响。（*报告者：Chris Barber。*）
- 修复了即使禁用 `archive-check` 选项，仍会验证 `archive_command` 的问题。

**新功能：**

- 新增 `check` 命令，用于验证 pgBackRest 的归档和备份配置是否正确。（*贡献者：Cynthia Shang。审阅者：David Steele。*）
- 新增 `protocol-timeout` 选项。此前该值固定为 `db-timeout` + 30 秒。
- 备份结束时远程关闭失败不再抛出异常，改为生成建议提高 `protocol-timeout` 的警告。
- 对 PostgreSQL 9.6 beta2 的非独占备份提供实验性支持。后续 Beta 版本中控制/目录/WAL 版本的变更可能破坏兼容性，但 pgBackRest 将跟随每个版本更新。

**改进：**

- 改进了备份时捕获的用户/组在恢复主机上不存在的处理方式，同时明确处理了用户/组未映射到名称的情况。
- 选项处理现在更加严格。此前命令可能使用未明确分配给它的选项，`backup-host` 和 `db-host` 选项尤为如此，这两个选项用于判断操作是否为本地执行。

**文档改进：**

- 允许在文档中使用静态日期，以生成可复现的构建结果。（*建议者：Adrian Vondendriesch。*）
- 在用户指南中新增了异步归档的文档。（*贡献者：Cynthia Shang。审阅者：David Steele。*）
- pgBackRest 模块的推荐安装位置更改为 `/usr/share/perl5`，因为 `/usr/lib/perl5` 在较新版本的 Perl 中已从搜索路径中移除。
- 新增了删除旧版本 pgBackRest 的操作说明。


### v1.02 版本说明

*修复 Perl 5.22 兼容性*

*发布于 2016 年 6 月 2 日*

**漏洞修复：**

- 修复了 `sprintf()` 的使用方式，使其符合 Perl 5.22 的新限制——格式字符串中不再允许未引用的参数。（*修复者：Adrian Vondendriesch。审阅者：David Steele。*）

**文档漏洞修复：**

- 修复了与 Perl 5.2X 不兼容的语法。（*修复者：Christoph Berg、Adrian Vondendriesch。审阅者：David Steele。*）
- 修复了 PDF 徽标中使用绝对路径的问题。（*报告者：Adrian Vondendriesch。*）

**文档新功能：**

- 发布说明现在按章节划分，明确区分漏洞修复、新功能和代码重构。新增"附加说明"章节，用于记录不影响核心代码的文档和测试套件变更。
- 新增 man 页面生成功能。（*贡献者：Adrian Vondendriesch、David Steele。*）
- 变更日志是最后一个仅以 Markdown 格式渲染的文档。现编写了转换器使其可由标准渲染器输出。变更日志现已发布在网站上，并更名为"发布说明（Releases）"。（*贡献者：Cynthia Shang。审阅者：David Steele。*）


### v1.01 版本说明

*增强的 `info`、选择性恢复与 9.6 支持*

*发布于 2016 年 5 月 17 日*

**新功能：**

- 增强了 `info` 命令的文本输出，包含所有备份的时间戳、大小和参考列表。（*贡献者：Cynthia Shang。审阅者：David Steele。*）
- 支持从集群备份中选择性恢复指定数据库。当只需恢复特定数据库时，此功能可大幅节省空间和时间。未恢复的数据库将不可访问，在从共享目录中删除前须手动处理。（*审阅者：Cynthia Shang、Greg Smith、Stephen Frost。建议者：Stephen Frost。*）
- 对 PostgreSQL 9.6 beta1 的非独占备份提供实验性支持。后续 Beta 版本中控制/目录/WAL 版本的变更可能破坏兼容性，但 pgBackRest 将跟随每个版本更新。（*审阅者：Cynthia Shang。*）


### v1.00 版本说明

*新仓库格式与配置方案、链接支持*

*发布于 2016 年 4 月 14 日*

**重要说明**：此次重大版本变更与旧版本 pgBackRest 不兼容。manifest 格式、磁盘目录结构、配置方案以及可执行文件/路径名称均已变更。您必须为此版本的 pgBackRest 创建新仓库以存储备份，并暂时保留旧仓库以备恢复之需。从旧仓库恢复需使用旧版本的 pgBackRest，但由于名称变更，可同时安装 1.00 与旧版本。具体变更如下。

**新功能：**

- 实现了全新的配置方案，使用更为简便。详见用户指南和配置参考。对于简单配置，所有选项现在都可以放在 `stanza` 章节中；多个 stanza 间共享的选项可以放在 `[global]` 章节；更复杂的配置仍可使用命令章节，但这应属于少见情况。（*建议者：Michael Renner。*）
- `repo-path` 选项现在始终指向存储备份和归档的仓库，无论本地还是远程，因此 `repo-remote-path` 选项已被移除。新增 `spool-path` 选项，可用于定义异步归档时排队 WAL 段的位置。本地仓库不再是必需的。
- 默认配置文件名由 `pg_backrest.conf` 改为 `pgbackrest.conf`，以与其他命名变更保持一致，同时防止迁移到 1.00 时意外加载旧配置文件。（*建议者：Michael Renner、Stephen Frost。*）
- 默认仓库路径由 `/var/lib/backup` 改为 `/var/lib/pgbackrest`。（*建议者：Michael Renner、Stephen Frost。*）
- 锁文件现在默认存储在 `/tmp/pgbackrest` 中。目前 `/run/pgbackrest` 是首选位置，但这需要初始化脚本，本版本暂不包含。可使用 `lock-path` 选项配置锁目录。
- 日志文件现在默认存储在 `/var/log/pgbackrest` 中，文件名不再追加日期，便于使用 `logrotate` 管理。可使用 `log-path` 选项配置日志目录。（*建议者：Stephen Frost。*）
- 可执行文件名由 `pg_backrest` 改为 `pgbackrest`。（*建议者：Michael Renner、Stephen Frost。*）
- PGDATA 中所有链接的文件和目录现在均包含在备份中。默认情况下，链接在恢复时将直接作为文件或目录还原到 PGDATA 中。可使用 `--link-all` 选项将所有链接恢复到其原始位置，或使用 `--link-map` 选项将链接重新映射到新位置。
- 移除了 `--tablespace` 选项，以 `--tablespace-map-all` 选项替代，更清晰地表达其功能。
- 新增 `detail` 日志级别，输出介于 `info` 和 `debug` 之间的详细信息。


--------

## 预稳定版本


### v0.92 版本说明

*命令行仓库路径修复*

*发布于 2016 年 4 月 6 日*

**漏洞修复：**

- 修复了主进程将 `--repo-remote-path` 而非 `--repo-path` 传递给远程的问题，该问题导致锁文件被创建在默认仓库目录（`/var/lib/backup`）中，通常以失败告终。此问题仅在命令行（而非 `pg_backrest.conf`）中定义了 `--repo-remote-path` 时才会出现。（*报告者：Jan Wieck。*）


### v0.91 版本说明

*表空间漏洞修复与小型改进*

*发布于 2016 年 3 月 22 日*

**表空间重要漏洞修复**：v0.90 意外引入了仓库格式变更，导致包含表空间的备份在磁盘上不再是有效的 PostgreSQL 集群。此问题仅影响直接复制备份来恢复 PostgreSQL 集群（而非使用 `restore` 命令）的用户。无论采用哪种恢复方式，此修复与包含表空间的旧备份均不兼容（pgBackRest 将抛出错误并拒绝恢复）。对于包含表空间的集群，安装 v0.91 后应立即执行新的全量备份。如需恢复旧备份，请使用与备份版本匹配的 pgBackRest 版本。

**漏洞修复：**

- 修复了 pgBackRest v0.90 引入的仓库不兼容问题。（*报告者：Evan Benoit。*）

**新功能：**

- 备份时最后复制 `global/pg_control`。
- 将 `.info` 和 `.manifest` 文件先写入临时文件，再移动到最终位置并执行 fsync。
- 将 `--no-start-stop` 选项重命名为 `--no-online`。

**测试套件新功能：**

- 使用 Perl-Critic 进行静态源码分析，目前在 `gentle`（宽松）级别通过。


### v0.90 版本说明

*9.5 支持、各类改进与小型漏洞修复*

*发布于 2016 年 2 月 7 日*

**漏洞修复：**

- 修复了指定 `--no-archive-check` 时抛出配置错误的问题。（*报告者：Jason O'Donnell。*）
- 修复了系统在恰当时机崩溃后遗留的临时 WAL 文件导致下次 `archive-push` 失败的问题。
- `retention-archive` 选项现在可以安全地设置为低于备份保留值（`retention-full` 或 `retention-diff`），而无需同时指定 `archive-copy=n`。使超出归档保留范围的备份保持一致性所需的 WAL 将被保留在归档中。但在此情况下，超出归档保留范围的备份将无法进行 PITR。

**新功能：**

- 备份和恢复表空间时，pgBackRest 仅操作为当前运行的 PostgreSQL 版本创建的子目录。由于多个版本可以共用同一个表空间目录（尤其是在二进制升级期间），这可以防止备份时复制过多文件，以及恢复时可能清除其他版本数据。此特性仅适用于 PostgreSQL >= 9.0——更早版本不支持共享表空间目录。
- 当 `archive-check=y` 但 `archive_command` 不执行 `pg_backrest` 时，生成错误。（*贡献者：Jason O'Donnell。审阅者：David Steele。*）
- 改进了 `repo-path` 或 `repo-remote-path` 不存在时的错误消息。
- 为 `--delta` 和 `--force` 恢复选项新增了检查，确保目标是有效的 $PGDATA 目录。pgBackRest 将检查 `PG_VERSION` 或 `backup.manifest`（中止恢复的遗留文件）是否存在。如果两个文件均不存在，`--delta` 和 `--force` 将被禁用，但恢复仍会继续——除非 $PGDATA 目录（或任何表空间目录）中有文件存在，此时操作将被中止。
- 当 `restore --set=latest`（默认值）时，实际恢复的备份将输出到日志中。
- 支持 PostgreSQL 9.5 的部分 WAL 段和 `recovery_target_action` 设置。`archive_mode = 'always'` 暂不支持。
- 支持 PostgreSQL 9.4 引入的 `recovery_target = 'immediate'` 恢复设置。
- 新增以下表空间检查：`pg_tblspc` 中存在路径或普通文件、`pg_tblspc` 中存在相对链接、$PGDATA 中存在表空间。以上三种情况均会产生错误。


### v0.89 版本说明

*超时漏洞修复与只读仓库恢复*

*发布于 2015 年 12 月 24 日*

**漏洞修复：**

- 修复了使用远程和多线程时，长时间运行的备份/恢复会超时的问题。现在使用 keepalive 确保主进程的远程连接在线程处理所有工作期间不会超时。同时改进了超时的错误消息，便于调试。（*报告者：Stephen Frost。*）

**新功能：**

- 允许通过 `--no-lock` 和 `--log-level-file=off` 在只读仓库上执行恢复。`--no-lock` 选项仅用于恢复操作。


### v0.88 版本说明

*文档与小型漏洞修复*

*发布于 2015 年 11 月 22 日*

**漏洞修复：**

- 修复了 `start`/`stop` 命令要求提供 `--config` 选项的问题。（*报告者：Dmitry Didovicher。*）
- 修复了日志文件被覆盖而非追加写入的问题。（*报告者：Stephen Frost、Dmitry Didovicher。*）
- 修复了 `backup-user` 不是可选项的问题。

**新功能：**

- 备份仓库目录中不再创建符号链接。这些符号链接可能指向任意位置，存在安全风险。恢复时仍会重新创建符号链接。（*建议者：Stephen Frost。*）
- 改进了备份过期的消息输出。全量和差异备份的过期信息现在合并为一行记录，并附带所有关联备份的列表。
- 如果归档保留策略未显式配置，则自动设置为与全量备份保留策略一致。

**文档新功能：**

- 在用户指南中新增了 delta 恢复、过期策略、专用备份主机、启动和停止 pgBackRest 以及复制相关文档。


### v0.87 版本说明

*网站与用户指南*

*发布于 2015 年 10 月 28 日*

**新功能：**

- `backup_label.old` 和 `recovery.done` 文件现在从备份中排除。

**文档新功能：**

- 新增用户指南，涵盖 pgBackRest 基础知识及部分高级主题（包括 PITR）。内容还会持续扩充，这是一个良好的开端。（*贡献者：David Steele、Stephen Frost。审阅者：Michael Renner、Cynthia Shang、Eric Radman、Dmitry Didovicher。*）


### v0.85 版本说明

*`start`/`stop` 命令与小型漏洞修复*

*发布于 2015 年 10 月 8 日*

**漏洞修复：**

- 修复了备份或恢复成功完成后仍可能返回错误的问题。
- 修复了备份失败时根备份目录中残留临时文件、导致续传失败的问题。备份进程在复制阶段被终止时很可能出现此情形。

**新功能：**

- 新增 `stop` 和 `start` 命令，用于在 PostgreSQL 关闭或系统需要以其他原因静默时，阻止 pgBackRest 进程运行。
- 对 PostgreSQL 9.5 beta1 提供实验性支持。未来版本中控制版本或 WAL magic 变更时可能发生兼容性问题，但 pgBackRest 将跟随每个版本更新。除 `--target-resume` 测试（此功能在 9.5 中已更改）外，所有回归测试均通过，`.partial` WAL 段暂未测试。


### v0.82 版本说明

*代码重构、命令行帮助与小型漏洞修复*

*发布于 2015 年 9 月 14 日*

**漏洞修复：**

- 修复了续传的压缩备份未保留已有文件的问题。
- 修复了续传与增量/差异备份未检验前序备份是否具有相同压缩和硬链接设置的问题。
- 修复了未指定 `--force` 时，使用 `--no-start-stop` 的冷备份可能在运行中的 PostgreSQL 集群上启动的问题。
- 修复了即使未请求线程也可能启动一个线程的问题。
- 修复了升级/降级后 `backup.info` 和 `archive.info` 中 pgBackRest 版本号未被更新的问题。
- 修复了仓库中没有 stanza 时 `info` 命令抛出异常的问题。（*报告者：Stephen Frost。*）
- 修复了 PostgreSQL 的 `pg_stop_backup()` NOTICE 信息被输出到 `stderr` 的问题。（*报告者：Stephen Frost。*）

**新功能：**

- 对 PostgreSQL 9.5 alpha2 提供实验性支持。未来版本中控制版本或 WAL magic 变更时可能发生兼容性问题，但 pgBackRest 将跟随每个版本更新。除 `--target-resume` 测试（此功能在 9.5 中已更改）外，所有回归测试均通过，`.partial` WAL 段暂未测试。

**改进：**

- 将 `recovery-setting` 选项和章节重命名为 `recovery-option`，与 pgBackRest 命名约定保持一致。
- 新增动态模块加载，加快命令执行速度，尤其是异步归档场景。

**文档新功能：**

- 命令行帮助现在从与其他文档共用的同一 XML 源中提取，包含更多详细信息。


### v0.80 版本说明

*DBI 支持、稳定性与便利性改进*

*发布于 2015 年 8 月 9 日*

**漏洞修复：**

- 修复了 `info` 命令将最旧和最新备份的格式化时间戳都显示为当前时间的问题。仅 `text` 输出受影响，`json` 输出报告的 epoch 值是正确的。（*报告者：Michael Renner。*）
- 修复了阻止 SSH 错误（尤其是连接时）被记录的协议问题。

**新功能：**

- 仓库现在以统一的目录和文件权限模式创建和更新。默认情况下 `umask` 被设置为 `0000`，可通过 `neutral-umask` 设置禁用。（*建议者：Cynthia Shang。*）
- 新增 `stop-auto` 选项，允许在启动新备份时自动停止失败的备份。
- 新增 `db-timeout` 选项，限制 pgBackRest 等待 `pg_start_backup()` 和 `pg_stop_backup()` 返回的最长时间。
- 恢复开始时移除 `pg_control` 文件，在最后才将其复制回去，防止 PostgreSQL 启动部分恢复的实例。
- 新增检查，通过比较集群报告的 `data_directory` 与 `db-path` 设置，以及集群报告的版本与从 `pg_control` 读取的值，确保 `db-path` 与 `db-port` 设置一致。同时检查 `db-socket-path` 是否为绝对路径。
- 对 PostgreSQL 9.5 alpha1 提供实验性支持。未来版本中控制版本或 WAL magic 变更时可能发生兼容性问题，但 pgBackRest 将跟随每个版本更新。除 `--target-resume` 测试（此功能在 9.5 中已更改）外，所有回归测试均通过，`.partial` WAL 段暂未测试。

**改进：**

- 现在使用 Perl 的 `DBI` 和 `DBD::Pg` 连接 PostgreSQL，替代原来的 `psql`。`cmd-psql` 和 `cmd-psql-option` 设置已被移除，替换为 `db-port` 和 `db-socket-path`。请按照安装指南在您的操作系统上安装 `DBD::Pg`。

**测试套件新功能：**

- 新增了 Ubuntu 14.04 和 CentOS 7 的 vagrant 测试配置。


### v0.78 版本说明

*移除 CPAN 依赖、稳定性改进*

*发布于 2015 年 7 月 13 日*

**改进：**

- 移除了多线程操作对 CPAN 软件包的依赖。更新 `threads` 和 `Thread::Queue` 软件包并非坏事，但现在不再是必须。
- 将等待退避策略由等比数列改为斐波那契数列，等待时间增长更为平缓，同时保持合理的上限。

**测试套件新功能：**

- 新增了 Ubuntu 12.04 和 CentOS 6 的 vagrant 测试配置。


### v0.77 版本说明

*CentOS/RHEL 6 支持与协议改进*

*发布于 2015 年 6 月 30 日*

**新功能：**

- 在 `File` 对象中新增了文件和目录同步，为备份/恢复和归档操作提供额外的数据安全保障。（*建议者：Andres Freund。*）
- 新增对 CentOS/RHEL 6 默认版本 Perl 5.10.1 和 OpenSSH 5.3 的支持。（*建议者：Eric Radman。*）
- 改进了未设置 `archive_command` 且未指定 `--no-archive-check` 时运行备份的错误消息。（*建议者：Eric Radman。*）


### v0.75 版本说明

*新仓库格式、`info` 命令与实验性 9.5 支持*

*发布于 2015 年 6 月 14 日*

**重要说明**：此次重大版本变更与旧版本 pgBackRest 不兼容。manifest 格式、磁盘目录结构以及二进制文件名均已变更。您必须为此版本的 pgBackRest 创建新仓库以存储备份，并暂时保留旧仓库以备恢复之需。`pg_backrest.conf` 配置文件未变更，但需要将 cron（或其他位置）中对 `pg_backrest.pl` 的引用改为 `pg_backrest`（去掉 `.pl` 扩展名）。

**新功能：**

- 新增 `info` 命令。
- 日志现在使用非缓冲输出，使多线程并发写入的日志文件更加有序。（*建议者：Michael Renner。*）
- 对 PostgreSQL 9.5 提供实验性支持。控制版本或 WAL magic 变更时可能发生兼容性问题，但将在每个版本中同步更新。

**改进：**

- 改进了 `backup` 的文件处理顺序，按文件大小降序复制，防止单个线程在末尾处理大文件。此优化此前已在 `restore` 中实现。


### v0.70 版本说明

*归档稳定性改进、日志与帮助优化*

*发布于 2015 年 6 月 1 日*

**漏洞修复：**

- 修复了 `hardlink=n` 时 `archive-copy` 在增量/差异备份中失败的问题。此情况下 `pg_xlog` 路径不存在，必须先创建。（*报告者：Michael Renner。*）
- 修复了异步归档中 `archive-max-mb` 达到上限时 `archive-push` 未正确返回 0 的问题；同时将异步检查移到传输之后，以避免重复删除停止文件。新增了此情况的单元测试，并改进了错误消息，使用户更清楚地了解出错原因。（*报告者：Michael Renner。*）
- 修复了一个锁定问题，该问题可能允许对同一 stanza 同时执行多个相同类型的操作。此问题在数据完整性方面似乎无害，但在归档时会引起虚假错误，并可能导致备份/恢复出错。（*报告者：Michael Renner。*）

**新功能：**

- 允许在校验和匹配的情况下归档重复 WAL 段，这对某些恢复场景是必要的。
- 允许在 `pg_backrest.conf` 中使用 `#` 字符进行注释/禁用。仅当 `#` 位于行首时才生效。（*建议者：Michael Renner。*）
- 改进了 `pg_start_backup()` 之前的日志输出，当备份在等待检查点时输出更为明确。（*建议者：Michael Renner。*）
- 各命令行为和日志修复。（*审阅者：Michael Renner。建议者：Michael Renner。*）

**改进：**

- 将 `JSON` 模块替换为随核心 Perl 一起发布的 `JSON::PP`。

**文档漏洞修复：**

- 各类帮助文档修复。（*审阅者：Michael Renner。报告者：Michael Renner。*）


### v0.65 版本说明

*改进的续传与恢复日志、紧凑恢复*

*发布于 2015 年 5 月 11 日*

**漏洞修复：**

- 修复了使用相对路径运行恢复时 `recovery.conf` 中未写入绝对路径的问题。

**新功能：**

- 改进了续传支持。续传的文件会被检查以确保未被修改，manifest 保存频率更高，以在备份进行时保留校验和。新增了更多单元测试以验证各续传场景。
- 续传现在是可选的，可通过 `resume` 设置或命令行的 `--no-resume` 禁用。
- 恢复时的 info 级别消息更加详尽。此前大部分恢复消息为 debug 级别，日志中输出内容有限。
- 新增 `tablespace` 设置，允许将表空间恢复到 `pg_tblspc` 路径中，产生紧凑型恢复，便于开发、测试等场景使用。目前此类恢复无法再次备份，因为 pgBackRest 要求 `pg_tblspc` 路径中只能有链接。


### v0.61 版本说明

*非压缩远程目标漏洞修复*

*发布于 2015 年 4 月 21 日*

**漏洞修复：**

- 修复了将大型高可压缩文件复制到非压缩远程目标时可能出现的缓冲错误。该错误在解压代码中被检测到并导致备份失败，而非产生数据损坏，因此不应影响使用旧版本成功完成的备份。


### v0.60 版本说明

*更好的版本支持与 WAL 改进*

*发布于 2015 年 4 月 19 日*

**漏洞修复：**

- 修复了推送重复 WAL 段不产生错误的问题。此前仅在禁用校验和时有效。

**新功能：**

- 使用数据库系统 ID 确保归档中所有 WAL 均来自同一集群，有助于防止将多个集群的 WAL 发送到同一归档的配置错误。

**测试套件新功能：**

- 回归测试支持追溯至 PostgreSQL 8.3。


### v0.50 版本说明

*恢复功能及更多改进*

*发布于 2015 年 3 月 25 日*

**漏洞修复：**

- 修复了校验和问题，现在校验和可以在正常备份和续传备份中正常工作。校验和与校验和 delta 在功能上应该分离，这简化了许多逻辑。Issue #28 已为校验和 delta 创建。
- 修复了可能从类型或前序备份不匹配的中止备份中续传的问题。

**新功能：**

- 新增恢复功能。
- 所有选项现在均可在命令行上设置，`pg_backrest.conf` 成为可选。
- 压缩/解压现在在非线程模式下执行，校验和/大小在流中计算，文件校验和不再是可选项。
- 新增 `--no-start-stop` 选项，允许在 PostgreSQL 关闭时进行备份。如果 `postmaster.pid` 存在，则需要 `--force` 才能运行备份（但如果 PostgreSQL 正在运行，可能会创建不一致的备份）。此选项主要为单元测试目的而添加，但在实际环境中也可能有应用场景。
- 为 `backup.manifest` 添加校验和，以检测损坏或被修改的 manifest 文件。
- `latest` 链接始终指向最后一次备份，便于使用并简化恢复操作。

**测试套件新功能：**

- 在各方面新增了更全面的单元测试。


### v0.30 版本说明

*核心重构与单元测试*

*发布于 2014 年 10 月 5 日*

**文档新功能：**

- 新增了亟需的文档。

**测试套件新功能：**

- 对所有基本操作进行了相当全面的单元测试。当然，单元测试方面总是还有更多工作可做。


### v0.19 版本说明

*改进的错误报告/处理*

*发布于 2014 年 5 月 13 日*

**漏洞修复：**

- 发现并修复了一个严重漏洞：`file_copy()` 被默认设置为忽略错误。`file_exists()` 中也存在一个问题，会导致在文件实际存在时测试失败。两者共同作用，理论上可能在无任何错误提示的情况下产生损坏的备份，但概率极低。


### v0.18 版本说明

*归档缺失时返回软错误*

*发布于 2014 年 4 月 13 日*

**漏洞修复：**

- 当归档文件缺失时，`archive-get` 命令现在返回 1，以区别于硬错误（SSH 连接失败、文件复制错误等），让 PostgreSQL 知道归档流已正常终止。但需注意，这并未考虑归档流中可能存在空洞的情况。（*报告者：Stephen Frost。*）


### v0.17 版本说明

*归档目录无法删除时发出警告*

*发布于 2014 年 4 月 3 日*

**漏洞修复：**

- 如果应为空的归档目录无法被删除，之前 pgBackRest 会抛出错误。目前有一个更好的修复方案正在开发中，暂时将其改为警告以允许处理继续。此问题影响了备份流程——在某些情况下，如果第一个归档文件与第二个归档文件在不同目录中，最后的归档文件可能无法被推送。


### v0.16 版本说明

*SSH 会话添加 RequestTTY=yes*

*发布于 2014 年 4 月 1 日*

**漏洞修复：**

- 在 SSH 会话中添加了 `RequestTTY=yes`，以防止随机挂起问题。


### v0.15 版本说明

*新增 `archive-get`*

*发布于 2014 年 3 月 29 日*

**新功能：**

- 新增 `archive-get` 功能，辅助恢复操作。
- 新增启动备份时强制执行检查点的选项：`start-fast=y`。


### v0.11 版本说明

*小型修复*

*发布于 2014 年 3 月 26 日*

**漏洞修复：**

- 移除了数据库 SSH 连接上的 `master_stderr_discard` 选项。此前偶发挂起问题，可能与文件代码中最初发现的问题相关。（*报告者：Stephen Frost。*）
- 将 `backup` 和 `expire` 命令的锁文件冲突级别改为 `ERROR`。此前由于从归档锁代码复制粘贴，误设为 `DEBUG`。


### v0.10 版本说明

*备份与归档功能可用*

*发布于 2014 年 3 月 5 日*

**新功能：**

- 暂无恢复功能，但备份目录是一致的 PostgreSQL 数据目录。需要手动解压文件，或在备份时关闭压缩。在 ZFS（或类似）文件系统上使用非压缩备份是一个好选择，可以通过快照在本地恢复备份，用于创建逻辑备份或进行点数据恢复。
- 归档为单线程。在多太字节数据库（高写入量）上，这并未造成问题。建议使用较大的 WAL 卷，或配合大容量卷使用异步选项。
- 备份为多线程，但 `Net::OpenSSH` 库似乎并非 100% 线程安全，偶尔会在某个线程上发生死锁。现有一个整体进程超时机制，通过终止进程来解决此问题——是的，这很粗糙。
- 任何续传备份都会丢失校验和。多次续传时只有最终备份会记录校验和。之前备份的校验和可以正确记录，全量备份将重置所有内容。
- `backup.manifest` 正在以 `Storable` 格式写入，因为 `Config::IniFile` 似乎不能很好地处理大文件。理想情况下希望将这些文件保存为人类可读的文本格式。

**文档新功能：**

- 完全没有文档（代码之外）。嗯，除了这份发布说明。
