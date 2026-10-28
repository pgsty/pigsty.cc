---
title: "版本发布说明"
linkTitle: "版本历史"
weight: 60
description: "pgBackRest 版本发布历史，包含每个版本的详细变更日志。"
icon: fa-solid fa-scroll
module: [PGBACKREST]
categories: [参考]
upstream_link: "https://pgbackrest.org/release.html"
---

--------

## 简介

pgBackRest 版本号由主版本、次版本和补丁版本三部分组成。主版本 *可能* 与上一主版本不兼容，但 v2 与 v1 仓库完全兼容，并接受所有 v1 选项。次版本可以包含缺陷修复和新功能，但不改变仓库格式，并尽量避免修改选项和命名。补丁版本包含针对最新次版本的缺陷修复。

功能版本计划在一月、四月、七月和十月的第三个星期一发布。补丁版本则根据需要，在其余月份的第三个星期一发布。

v1 版本的文档可在 [此处](https://pgbackrest.org/1) 查阅。

版本说明还可能包含“附加说明”，但该部分仅涉及文档或测试套件的变更，不会直接影响 pgBackRest 代码库。

--------

## 本站文档版本 {#current-stable-release}

本文档镜像覆盖 v2.60.0。更新版本请查阅 [上游发布历史](https://pgbackrest.org/release.html)。

### v2.60.0 版本说明 {#v2600-release-notes}

*页面校验和错误与对象存储预取*

*发布于 2026 年 10 月 18 日*

**重要说明**：`restore` 命令现在会在任一恢复文件包含无效页面校验和时报错并停止，此时集群不完整、无法启动，必须重新执行恢复。如果保留的最旧备份将包含校验和错误，`expire` 命令现在会拒绝执行过期操作，该仓库中的归档也因此无法过期。设置 `checksum-page-error=n` 可改为仅发出警告。

**新功能：**

- 新增 `checksum-page-error` 选项，在页面校验和无效时报错。（*贡献：Andrew Pogrebnoi. 审核：Douglas J Hunley, David Steele, Greg Sabino Mullane, Stefan Fercot. 建议：Greg Sabino Mullane.*）

  此选项适用于 `backup`、`restore` 和 `expire` 命令。`backup` 命令默认仍对每个出错文件发出警告，并新增了备份结束时的校验和警告总数统计。`restore` 和 `expire` 命令默认报错。此前，`restore` 命令完全不会报告无效页面校验和。

  议题 [#2687](https://github.com/pgbackrest/pgbackrest/issues/2687); 拉取请求 [#2833](https://github.com/pgbackrest/pgbackrest/pull/2833); 提交 [`d7f54b2`](https://github.com/pgbackrest/pgbackrest/commit/d7f54b2245c8a9467e9a811c65626fe77739376b)
- 支持 GCS 工作负载身份联合（Workload Identity Federation）。（*贡献：Adol Rodriguez. 审核：Douglas J Hunley, David Steele.*）

  设置 `repo-gcs-key-type=web-id`，并将 `repo-gcs-key` 设为外部账户凭据文件，例如通过 `gcloud iam workload-identity-pools create-cred-config` 生成的文件。Web 身份令牌可直接换取访问令牌，无需服务账户密钥。每次交换都会重新加载令牌文件，以获取轮换后的令牌，例如 Kubernetes 投射的服务账户令牌。不支持服务账户模拟。

  议题 [#2838](https://github.com/pgbackrest/pgbackrest/issues/2838); 拉取请求 [#2839](https://github.com/pgbackrest/pgbackrest/pull/2839); 提交 [`1d217e6`](https://github.com/pgbackrest/pgbackrest/commit/1d217e626301118ae2c1e7be39a6a4affa86e501)
- 从对象存储预取多个文件或范围的读取请求。（*审核：Andrew Pogrebnoi, Douglas J Hunley.*）

  请求会在当前读取之前排入队列，使后续请求在读取过程中推进；文件间较小的间隙则通过连续读取跳过，无需另发请求。`Restore` 用它读取文件包和块级增量映射，`backup` 用它读取前一次备份的块级增量映射。`repo-storage-prefetch`（默认 3）设置预先排队的请求数量，`repo-storage-read-over`（默认 64KiB）设置可连续读取跳过的最大间隙。

  [`e63dec3`](https://github.com/pgbackrest/pgbackrest/commit/e63dec323b9e79513638b9858e4ad13b6072d060) 从对象存储预取多个文件或范围的读取请求。; 拉取请求 [#2783](https://github.com/pgbackrest/pgbackrest/pull/2783)

  [`5ae4015`](https://github.com/pgbackrest/pgbackrest/commit/5ae4015d37081eba4259f4de379a9d160236de0e) 合并备份过程中对前一次块级增量映射的读取。; 拉取请求 [#2816](https://github.com/pgbackrest/pgbackrest/pull/2816)

**改进：**

- 减少发送给远程进程的保活请求。（*审核：Douglas J Hunley.*）

  此前，`archive-push` 和 `backup` 每完成一个任务，都会向所有远程进程发送保活请求，即使刚刚才向其发送过请求。现在，仅在 30 秒内未向某个远程进程发送过请求时，才会发送保活请求。

  提交 [`f652261`](https://github.com/pgbackrest/pgbackrest/commit/f652261d32a4ffba98e7da26a41ef4ef1cd08da3)
- 重试 Azure 响应中缺失的批处理子请求。（*审核：Douglas J Hunley.*）

  Azure 批量删除失败时，可能仅为整个批次返回一个响应。没有响应的子请求此前会被视为已完成，导致每批只删除一个文件，命令却报告成功。现在会重试没有响应的子请求。

  议题 [#2840](https://github.com/pgbackrest/pgbackrest/issues/2840); 拉取请求 [#2849](https://github.com/pgbackrest/pgbackrest/pull/2849); 提交 [`567a245`](https://github.com/pgbackrest/pgbackrest/commit/567a2451244e0e7a4c54e41880fac1a007b49930)
- 减少重建 `backup.info` 时的清单检查。（*审核：Douglas J Hunley. 建议：todeb.*）

  当仓库列表表明备份路径不存在，或某个差异/增量备份所属的全量备份集不在 `backup.info` 中时，`backup`、`expire` 和 `annotate` 命令不再检查是否存在 `backup.manifest`。每次检查都要发出请求，因此在对象存储上检查不存在的清单会产生 404 日志。

  议题 [#2769](https://github.com/pgbackrest/pgbackrest/issues/2769); 拉取请求 [#2825](https://github.com/pgbackrest/pgbackrest/pull/2825); 提交 [`0d3c340`](https://github.com/pgbackrest/pgbackrest/commit/0d3c340087bfb97263c29a8fd681cf079071236b)
- 使用原始大小判断文件是否应打包。（*审核：Douglas J Hunley.*）

  此前依据前一次备份中块级增量文件的大小决定是否打包，因此已经增长到超过 `repo-bundle-limit` 的文件仍可能存入文件包。现在改用文件的当前大小。

  拉取请求 [#2843](https://github.com/pgbackrest/pgbackrest/pull/2843); 提交 [`340d58b`](https://github.com/pgbackrest/pgbackrest/commit/340d58bb49d6c88a002a0d23830fd37be155cc21)
- 为备份期间的块映射读取错误添加上下文。（*审核：Stefan Fercot, Douglas J Hunley.*）

  读取前一次备份的块映射出错时，现在会报告文件、仓库路径、偏移量和映射大小。如果读取的字节数少于预期，会明确报告这一情况，不再将其报告为解析错误。

  [`bc91688`](https://github.com/pgbackrest/pgbackrest/commit/bc91688c4cf18fa6a36ec65441784533d5e6bdd5) 为备份期间的块映射读取错误添加上下文。; 议题 [#2489](https://github.com/pgbackrest/pgbackrest/issues/2489); 议题 [#2829](https://github.com/pgbackrest/pgbackrest/issues/2829); 拉取请求 [#2830](https://github.com/pgbackrest/pgbackrest/pull/2830)

  [`f46bfaf`](https://github.com/pgbackrest/pgbackrest/commit/f46bfafdd53dd0031a320fa95b08568263901ff3) 修正块级增量映射错误信息中的选项名。
- 在备份开始标签中将 `current_timestamp` 显式转换为 `text`。（*贡献：Tiago Corcelli de Oliveira. 审核：David Steele.*）

  用户定义的 `timestamptz` 到 `text` 隐式转换曾导致备份失败，并报错 "operator is not unique: unknown || timestamp with time zone"。标签文本保持不变。

  议题 [#2873](https://github.com/pgbackrest/pgbackrest/issues/2873); 提交 [`86936e1`](https://github.com/pgbackrest/pgbackrest/commit/86936e1fa60b10b7592eaac09283c4bb5991265d)
- 支持在 illumos 上构建。（*贡献：Kalevi Kolttonen. 审核：Douglas J Hunley, David Steele.*）

  CI 新增了 OmniOS 任务。Solaris 也可能可用，但尚未测试。

  拉取请求 [#2870](https://github.com/pgbackrest/pgbackrest/pull/2870); 提交 [`ad72e58`](https://github.com/pgbackrest/pgbackrest/commit/ad72e5815f3cf9c0c6170dcbe04ef9c41762d3d9)
- 支持 OpenSSL 4。（*审核：Douglas J Hunley.*）

  由于 `X509_get_subject_name()` 现在返回 `const` 名称对象，使用 OpenSSL 4 构建曾会失败。

  提交 [`a729ac8`](https://github.com/pgbackrest/pgbackrest/commit/a729ac881f48225622151841e80146f7a3a4bce6)
- 修复 clang 构建。（*审核：Douglas J Hunley.*）

  在 Linux 上，gcc 将 `libbacktrace.a` 安装到 clang 也会搜索的位置，却将 `backtrace.h` 安装到仅 gcc 能找到的位置。clang 构建因此会找到库，却编译失败。现在只有找到头文件时才使用该库。同时修复了调试构建中被 clang 报告为窄化转换的返回类型。

  [`84b031a`](https://github.com/pgbackrest/pgbackrest/commit/84b031af68fe6a30b4150ec6c903cc8c1781fc05) 检查 libbacktrace 时要求同时存在头文件。

  [`195e66b`](https://github.com/pgbackrest/pgbackrest/commit/195e66bafd89da511fb0d48e6e053176104c47c7) 返回基于 StringId 的枚举的函数须返回其声明的类型。

  [`d9e5e14`](https://github.com/pgbackrest/pgbackrest/commit/d9e5e14e93f460d62930f58dd4dd5bbc2a9f3a85) 声明返回 bool 的函数须返回 bool。
- 将代码生成从 C 迁移到 Python。

  构建时，根据选项、错误、帮助和 PostgreSQL 声明生成代码的工作，现在由 Python 工具完成，不再使用需要先行编译的 C 工具。从 Git 检出目录构建时需要 PyYAML，不再需要 libyaml。发行版 tar 包包含生成的代码，两者均不需要。

  提交 [`59bd2cd`](https://github.com/pgbackrest/pgbackrest/commit/59bd2cd96cfba2b02b07e81ade57d9beb5f2812e)

**文档改进：**

- 更新网站设计。特别感谢 Jan 设计了构思巧妙又诙谐的标志。（*贡献：David Steele, Jan Wieremjewicz. 审核：Steve Atkins, Kai Wagner, Douglas J Hunley, Nikolaos Stamatopoulos, Matt Hudson, Stefan Fercot.*）

  网站采用了新的设计，提供浅色、深色主题，并适配手机布局。有目录的页面会在正文旁显示目录，标出当前阅读的章节。命令和配置文件可以通过按钮复制，配置文件会标记各节修改的行，发行说明还可展开查看详细信息。

  [`5bc14b5`](https://github.com/pgbackrest/pgbackrest/commit/5bc14b581a054ab3dc9cd633954a689acc99a58f) 缩短文档标题并消除歧义。

  [`b668d71`](https://github.com/pgbackrest/pgbackrest/commit/b668d71f22489cbd4d5e120e7e6e73be0ca9e167) 将赞助商移到首页下方，并缩短赞助呼吁。

  [`60b85c5`](https://github.com/pgbackrest/pgbackrest/commit/60b85c58d98dd65d47747e6355f47c934cd6b430) 更新网站设计。

  [`ab8df23`](https://github.com/pgbackrest/pgbackrest/commit/ab8df23807cc4c11768ef40196bcade70ebec23a) 分享链接时显示卡片，而非标志。

  [`76ae494`](https://github.com/pgbackrest/pgbackrest/commit/76ae49456c7dace20bbd6f17e8acdfd36bf03a46) 移除发行页面的目录，并收紧日期周围的间距。

  [`3e86c71`](https://github.com/pgbackrest/pgbackrest/commit/3e86c71f5546c86941f35d5be3a7fdcd98af3cca) 命令参考通过链接引用选项，不再重复列出。

  [`dc3af7b`](https://github.com/pgbackrest/pgbackrest/commit/dc3af7b2aee5778dbe9200e31d5a2f95ecae5777) 明确命令参考中的命令标题。

  [`078d52c`](https://github.com/pgbackrest/pgbackrest/commit/078d52c5768bb67989624b5418fdd687fab9e485) 在配置文件中标记各节修改的行。

  [`bd33623`](https://github.com/pgbackrest/pgbackrest/commit/bd33623ba945ed251e2a6704cea14a81d51c2c9e) 按配置文件的方式标记命令输出。

  [`578fc2d`](https://github.com/pgbackrest/pgbackrest/commit/578fc2de14a6a739401fd58b9a232cf587c52fb4) 支持复制命令及配置文件。

  [`1fb93f9`](https://github.com/pgbackrest/pgbackrest/commit/1fb93f92725124d6afa8953b7c7243aee92fcaf5) 配置节没有产生读者可见的更改时报错。

  [`2f3b2f2`](https://github.com/pgbackrest/pgbackrest/commit/2f3b2f22a30a35340549d42b09d5aaa58d9dfe61) 将站点标志设为首页链接。

  [`8f902c6`](https://github.com/pgbackrest/pgbackrest/commit/8f902c66609c0bf1de6720e60552adde515209cd) 加快文档构建。

  [`b56b6ab`](https://github.com/pgbackrest/pgbackrest/commit/b56b6ab4d24ff6298b95b415b3115591e311de20) 在首页自动列出最新新闻。

  [`5b8987d`](https://github.com/pgbackrest/pgbackrest/commit/5b8987da0bb24fc3979fb764ccbde82b7b0e9500) 在参考文档中将选项类型示例呈现为代码块。

  [`b5d5274`](https://github.com/pgbackrest/pgbackrest/commit/b5d527471444f90df5529f15726b3d33065f9829) 菜单采用横向滚动，避免换行后超出可见区域。

  [`9ae2c32`](https://github.com/pgbackrest/pgbackrest/commit/9ae2c32a35f56f53f299e8c04f004ed3386b95e4) 在菜单中高亮当前页面，而非将其省略。

  [`b8da5b0`](https://github.com/pgbackrest/pgbackrest/commit/b8da5b061d0f9c5d1cc01e936dc65cbdd9f70be7) 为样式和脚本链接添加版本标识，确保旧缓存重新获取。

  [`ec57431`](https://github.com/pgbackrest/pgbackrest/commit/ec57431aa88860b9058d971b938afb5e35a142c7) 直接跳转至章节，不再平滑滚动。

  [`46babed`](https://github.com/pgbackrest/pgbackrest/commit/46babedaed8429026efa4592d93a8d9876acad0b) 菜单超出可见范围的一端采用渐隐效果，而非直接截断。

  [`17de501`](https://github.com/pgbackrest/pgbackrest/commit/17de50192b7e40d7517a4079451e93da5c39b3f3) 将 section2 标题的横线置于标题下方，而非旁边。

  [`940f431`](https://github.com/pgbackrest/pgbackrest/commit/940f4311375dda3caabdc0bdd01c36bedf43d46f) 页面标题在标志旁居中，换行后左对齐。

  [`050ca9e`](https://github.com/pgbackrest/pgbackrest/commit/050ca9e354421530ba4282d95dead90e31d6dc2a) 为发行说明添加可展开的详细信息。

  [`bd8f99b`](https://github.com/pgbackrest/pgbackrest/commit/bd8f99be00cd4b03a1b234bf7fbaa39f406c0c44) 补充 v2.33 至 v2.60 的发行说明详情。

  [`28a1e3d`](https://github.com/pgbackrest/pgbackrest/commit/28a1e3d6278992e0a347aab19248abdcddefd491) 调整浅色模式下的关键词样式。

  [`1911f5f`](https://github.com/pgbackrest/pgbackrest/commit/1911f5f1744ff4bfee528d95e37a0a8d9b77d6b3) 将发行说明历史的终点设为上游集成到 CI 的位置。
- 记录发布计划。

  功能版本计划在一月、四月、七月和十月的第三个星期一发布。补丁版本则根据需要，在其余月份的第三个星期一发布。发行说明的引言也解释了版本号中的主版本、次版本和补丁版本三部分。

  [`9bca69a`](https://github.com/pgbackrest/pgbackrest/commit/9bca69a591abcee0623ff910d0db3e27008cfc25) 记录发布计划。

  [`c179f3f`](https://github.com/pgbackrest/pgbackrest/commit/c179f3f7d6d6b1963d9d3b98b981786ef9546022) 更新发行说明引言中的版本编号规则。
- 将文档工具从 C 和 Perl 迁移到 Python。

  文档改由 `doc/doc.py` 构建，不再使用由 `doc/doc.pl` 运行的 C 工具，构建文档也不再需要 Perl。

  [`59bd2cd`](https://github.com/pgbackrest/pgbackrest/commit/59bd2cd96cfba2b02b07e81ade57d9beb5f2812e) 将构建和文档代码从 C 迁移到 Python。

  [`fa3d197`](https://github.com/pgbackrest/pgbackrest/commit/fa3d1979b77d6252642c64d708a951914e0a0ac2) 将剩余的文档代码从 Perl 迁移到 Python。

**测试套件改进：**

- 将测试框架从 C 和 Perl 迁移到 Python。

  测试改用 `test/test.py` 运行，不再使用 `test/test.pl`。测试容器和 CI 运行器不再需要 Perl，测试框架自身也纳入了测试覆盖。

  [`163e5ba`](https://github.com/pgbackrest/pgbackrest/commit/163e5ba0f9ff72ec730f0b35ddac0e5d68ece531) 将测试框架从 C 迁移到 Python。

  [`e25c662`](https://github.com/pgbackrest/pgbackrest/commit/e25c6621e8427e862e4ce0196d059ab651bb276d) 将测试框架的其余部分从 Perl 迁移到 Python。
- 为 CI 添加 Fil-C 任务。

  Fil-C 是一种内存安全的 C 实现，会检查每次指针访问。它发现了 gcc、clang 和 Valgrind 未能发现的两处越界读取。新增工作流还会直接在 CI 运行器上使用 gcc 和 clang 构建并测试，覆盖包含和不包含可选库的情况。

  [`f32a5d5`](https://github.com/pgbackrest/pgbackrest/commit/f32a5d5543c4dc547006629bdb2dd52d3edb9205) 添加直接在运行器上编译和测试的工作流，无需容器。

  [`12396fb`](https://github.com/pgbackrest/pgbackrest/commit/12396fb353bc4aa10c3739b826189e421732adf5) 为编译工作流添加 Fil-C 任务。

  [`908a11a`](https://github.com/pgbackrest/pgbackrest/commit/908a11a841e85d4e66e4aa551380b52aabfe606f) Fil-C 发行包现已包含所需的所有库，可以直接使用。
- 为 `JSON`、`Ini` 和 `Pack` 读取器添加模糊测试。

  CI 使用 libFuzzer、AddressSanitizer 和 UndefinedBehaviorSanitizer 对这些读取器进行模糊测试。测试发现了处理无效输入时的多处缺陷，例如信息文件或对象存储响应中嵌套过深的 JSON 数组可能导致内存上下文栈溢出。

  提交 [`4c65010`](https://github.com/pgbackrest/pgbackrest/commit/4c65010e7d28ea68571732fb275d91266a97ad80)
- 允许使用 Debian 上 adduser 会拒绝的测试用户名。（*贡献：Stefan Fercot. 审核：David Steele.*）

  测试容器使用与宿主机用户相同的用户名构建。Debian 的 `adduser` 会拒绝包含句点的名称，例如 `first.last`，因此这些用户在基于 Debian 的镜像上构建容器时会失败。

  议题 [#2858](https://github.com/pgbackrest/pgbackrest/issues/2858); 拉取请求 [#2859](https://github.com/pgbackrest/pgbackrest/pull/2859); 提交 [`ce19dae`](https://github.com/pgbackrest/pgbackrest/commit/ce19dae6a2d6ab3665374ead04c270fd45d563fb)


--------

<div id="当前稳定版本"></div>

## 稳定版本

### v2.59.3 版本说明 {#v2593-release-notes}

*弱加密子密钥缺陷*

*发布于 2026 年 10 月 4 日*

**重要说明**：旧版本在访问系统随机数据出错时，可能生成弱加密子密钥和盐值。详情请参阅 [弱加密子密钥和盐值](/docs/pgbackrest/news/#weak-encryption)。

**缺陷修复:**

- 修复加载加密的信息文件和清单文件时可能出现校验和错误的问题。（*由 j0uinim 修复，David Steele 审核。*）

  较大的加密信息文件或清单文件在加载时可能丢失最后几行，导致校验和验证失败。只有这些行能够容纳在最后一个加密块中才会发生，因此实际出现的可能性较低。

  议题 [#2866](https://github.com/pgbackrest/pgbackrest/issues/2866); 拉取请求 [#2868](https://github.com/pgbackrest/pgbackrest/pull/2868); 提交 [`2def063`](https://github.com/pgbackrest/pgbackrest/commit/2def063e06c6f0b7e137309c7ed0d7631a42f6cf)
- 修复可能生成弱加密子密钥或盐值的问题。（*由 j0uinim 修复，David Steele, Stefan Fercot, Douglas J Hunley 审核。*）

  当 OpenSSL 无法从操作系统获取随机数据时，此前会忽略失败，使用非随机的内存数据生成子密钥和盐值。现在会报告错误。

  议题 [#2866](https://github.com/pgbackrest/pgbackrest/issues/2866); 拉取请求 [#2867](https://github.com/pgbackrest/pgbackrest/pull/2867); 提交 [`47ed78f`](https://github.com/pgbackrest/pgbackrest/commit/47ed78f8d54a44466a872852939edc0273172bf1)

### v2.59.2 版本说明

*支持 PostgreSQL 19beta4*

*发布于 2026 年 9 月 27 日*

**漏洞修复：**

- 修复备份期间文件被截断为零长度时产生空块映射的问题。（*由 Douglas J Hunley 审核，JPCOSTA78 报告。*）

  如果块级增量文件大于 `repo-bundle-limit`，且在备份期间被 PostgreSQL 截断为零长度，就会被存储成不含任何块的块映射。在下一次全量备份之前，之后引用该文件的每次备份都会因 "unexpected eof" 而失败。

  议题 [#2829](https://github.com/pgbackrest/pgbackrest/issues/2829); 拉取请求 [#2842](https://github.com/pgbackrest/pgbackrest/pull/2842); 提交 [`572d163`](https://github.com/pgbackrest/pgbackrest/commit/572d1631026d5f10915634592b547f3439b7a291)
- 向驱动传入过滤器时，禁用读取重试。（*由 Douglas J Hunley 审核，megamaced 报告。*）

  通过仓库主机访问对象存储中的仓库时，重试读取会导致崩溃。客户端不再重试此类读取；仓库主机仍会重试从对象存储读取。

  议题 [#2845](https://github.com/pgbackrest/pgbackrest/issues/2845); 拉取请求 [#2846](https://github.com/pgbackrest/pgbackrest/pull/2846); 提交 [`c6eca28`](https://github.com/pgbackrest/pgbackrest/commit/c6eca28ff8e551bd2e76f0c91b1a70ddee60b35e)
- 修复 S3 对象版本列表的分页问题。（*由 Douglas J Hunley、guruguruguru 审核，guruguruguru 报告。*）

  使用 `repo-target-time` 按目标时间读取仓库时，如果某个前缀下列出的版本超过一千个，就会因 "unable to find child 'NextContinuationToken'" 而失败。

  议题 [#2854](https://github.com/pgbackrest/pgbackrest/issues/2854); 拉取请求 [#2855](https://github.com/pgbackrest/pgbackrest/pull/2855); 提交 [`6f0490d`](https://github.com/pgbackrest/pgbackrest/commit/6f0490dd29f0c756e6766fd9be023805540815fc)
- 使用 `SAS` 认证时设置 Azure 版本请求头。（*审核：Douglas J Hunley. 报告：Florian Helmberger.*）

  批量删除要求包含版本请求头，因此使用 `SAS` 认证时，所有批次都会被拒绝。该拒绝被误认为单个文件失败，每个批次中的其余文件都未删除，`expire` 却报告成功，导致过期备份和 WAL 留在仓库中。

  议题 [#2840](https://github.com/pgbackrest/pgbackrest/issues/2840); 拉取请求 [#2848](https://github.com/pgbackrest/pgbackrest/pull/2848); 提交 [`ea3293b`](https://github.com/pgbackrest/pgbackrest/commit/ea3293be75c86b5e6c9ca4158b5ebe2a3224f76f)
- 修复异步 `archive-push` 遇到零长度备份历史文件时停滞的问题。（*由 Andrew Kroh 修复，David Steele、Douglas J Hunley 审核。*）

  零长度的备份历史文件（例如在从存储快照复制的集群中）会使每次异步 `archive-push` 运行失败，导致没有任何 WAL 被归档。现在会根据第一个就绪 WAL 段的大小，将 `archive-push-batch-size` 换算为段数。

  议题 [#2856](https://github.com/pgbackrest/pgbackrest/issues/2856); 拉取请求 [#2857](https://github.com/pgbackrest/pgbackrest/pull/2857); 提交 [`12b1b3c`](https://github.com/pgbackrest/pgbackrest/commit/12b1b3cf58caee7b04ed788eee221726f5caa155)
- 修复 `annotate` 命令在远程加密仓库上执行时的问题。（*由 Douglas J Hunley 修复，David Steele 审核。*）

  如果仓库已加密，且仅在仓库主机上配置了加密设置，`annotate` 就无法加载 `backup.info`。

  提交 [`497ad5a`](https://github.com/pgbackrest/pgbackrest/commit/497ad5aee0c654611d2ad4185958727e1341dd8c)

**新功能：**

- 支持 PostgreSQL 19beta4/rc1。

  PostgreSQL 19beta4 撤销了在线页面校验和变更，因此页面校验和版本重新限定为 0 和 1。它还更改了 `pg_control` 版本和 WAL 页魔数。

  提交 [`89eae83`](https://github.com/pgbackrest/pgbackrest/commit/89eae839d5ca79591aaea8157f437688c3b53df4)

### v2.59.1 版本说明

*支持 PostgreSQL 19beta3*

*发布于 2026 年 8 月 17 日*

**漏洞修复：**

- 修复分块缓冲区小于输入缓冲区时发生挂起的问题。（*由 Andrew Pogrebnoi、Douglas J Hunley 审核，crajac66 报告。*）

  向 S3、GCS 或 Azure 分段上传时，如果分段缓冲区小于输入缓冲区（例如上传过程中分段大小增大后），就可能陷入无限循环。现在始终确保分段缓冲区足以容纳输入缓冲区。

  议题 [#2818](https://github.com/pgbackrest/pgbackrest/issues/2818); 拉取请求 [#2819](https://github.com/pgbackrest/pgbackrest/pull/2819); 提交 [`a53e470`](https://github.com/pgbackrest/pgbackrest/commit/a53e470eca258c2db088af55be307403c8f43b7a)
- 新备份标签仅与其所属的全量备份集比较。（*由 Douglas J Hunley 审核，Anton Glushakov 报告。*）

  某些对象存储在前缀下的所有对象都被删除后，仍会列出该前缀，例如启用对象锁定的 MinIO 或 SeaweedFS，因此已经删除的全量备份仍可能出现在仓库列表中。之后的每次差异和增量备份都会因 "new backup label ... is not later than latest backup label ..." 而失败。现在，新标签只与所属全量备份集中的备份比较。

  议题 [#2792](https://github.com/pgbackrest/pgbackrest/issues/2792); 拉取请求 [#2824](https://github.com/pgbackrest/pgbackrest/pull/2824); 提交 [`d01f77e`](https://github.com/pgbackrest/pgbackrest/commit/d01f77e8237f5d008bb7782c18ced12cd6d1971a)
- 修复 GitHub 生成的源码归档缺少构建所需文件的问题。（*由 aardvarkzed 报告。*）

  GitHub 为发行版本生成的源码归档缺少代码生成工具及其输入文件，因此无法构建。现在仅对发行版 tar 包进行裁剪。

  议题 [#2821](https://github.com/pgbackrest/pgbackrest/issues/2821); 提交 [`163670a`](https://github.com/pgbackrest/pgbackrest/commit/163670a4eeede6d2d170b5d1f55c5ba0b66ba564)

**新功能：**

- 支持 PostgreSQL 19beta3。（*由 Lardière Sébastien 贡献，David Steele 审核。*）

  PostgreSQL 19beta3 更改了 WAL 页魔数。

  提交 [`5cbc256`](https://github.com/pgbackrest/pgbackrest/commit/5cbc256bf37a44fa478d73a12a2e5b2d84fa6337)

**文档改进：**

- 说明使用 `repo-s3-uri-style=path` 时，S3 存储桶名称可以包含点号。

  设置 `repo-s3-uri-style=path` 后，存储桶名称是路径的一部分，而非主机名的一部分，因此桶名称中的句点不会导致证书主机名不匹配。

  提交 [`bbdc4b9`](https://github.com/pgbackrest/pgbackrest/commit/bbdc4b9217a0e66f6a01c05f4edc04282cffb3fc)
- 从用户指南中移除显式的 `hot_standby` 配置。

  从 PostgreSQL 10 起，`hot_standby` 默认启用。快速入门现在说明：如果不启用它，备库不会接受只读连接。

  提交 [`cda454d`](https://github.com/pgbackrest/pgbackrest/commit/cda454d4bac0c0412230a0b41513659a7d0d4205)

### v2.59.0 版本说明

*支持 PostgreSQL 19beta2*

*发布于 2026 年 7 月 20 日*

**打包维护者注意**：新增的发行版 tar 包提供预生成的 HTML 文档、man 手册页和代码，可简化构建流程。该 tar 包作为每个发行版本的附件提供，名称为 `pgbackrest-{version}.tar.gz`。详情请参阅包内的 `README.md`。请使用新的发行版 tar 包，以免后续版本需要额外的代码生成工具。更多信息请参阅 [新的发行版 tar 包](/docs/pgbackrest/news/#distribution-tarball)。<br/> <br/> **打包维护者注意**：新增可选依赖 `libsystemd`。<br/> <br/> **重要说明**：从本版本起，默认仅允许 `restore` 命令以 root 身份运行。可使用 `allow-root` 让其他命令以 root 身份运行，但不建议这样做。

**漏洞修复：**

- 修复 `expire` 删除另一台主机上正在进行的备份的问题。（*由 Douglas J Hunley 审核，Dmitrii 报告。*）

  备份只有完成后才会加入 `backup.info`，因此在一台主机备份期间，若另一台主机运行 `expire`（例如主库备份时在备库运行 `expire`），正在进行的备份可能被删除。过期处理现在不会删除仍在进行或可续传的最新备份。

  议题 [#2622](https://github.com/pgbackrest/pgbackrest/issues/2622); 拉取请求 [#2797](https://github.com/pgbackrest/pgbackrest/pull/2797); 提交 [`aa0e215`](https://github.com/pgbackrest/pgbackrest/commit/aa0e215019f50f92a8f0c97f907affc1d3bf86c4)
- 修复 WAL 文件出错时未执行 `archive-push-queue-max` 限制的问题。（*由 Stefan Fercot 审核，vut12 报告。*）

  在异步模式下，此前根据尚未推送的 WAL 计算队列大小。如果某个 WAL 文件反复出错，后续 WAL 虽已推送、不再计入队列，却仍留在 `pg_wal` 中，因此永远无法达到队列上限，`pg_wal` 可能占满磁盘。现在与同步模式一样，队列大小按 PostgreSQL 正在等待归档的全部 WAL 计算。

  议题 [#2629](https://github.com/pgbackrest/pgbackrest/issues/2629); 拉取请求 [#2799](https://github.com/pgbackrest/pgbackrest/pull/2799); 提交 [`7fe3636`](https://github.com/pgbackrest/pgbackrest/commit/7fe363658639bbc2f70e53496fa6da4acb9e481e)
- 修复跨时间线切换恢复期间异步 `archive-get` 失败的问题。（*由 Douglas J Hunley 审核，Jimmy Yih 报告。*）

  两个异步进程可能竞争归档锁，未获取锁的进程在获取所需 WAL 段前便退出。启动它的 `archive-get` 随后等待 `archive-timeout`，并对实际存在的 WAL 段返回错误，可能导致恢复提前结束，尤其是在切换时间线时。现在，如果负责获取该段的异步进程未运行，会直接获取该段。

  议题 [#2423](https://github.com/pgbackrest/pgbackrest/issues/2423); 拉取请求 [#2806](https://github.com/pgbackrest/pgbackrest/pull/2806); 提交 [`baed942`](https://github.com/pgbackrest/pgbackrest/commit/baed942af0d61fcf3c2cb1f7d1bf1d6fe5bb6df9)
- 修复错误模块中潜在的缓冲区越界问题。（*由 Christophe Pettus 修复，David Steele 审核。*）

  堆栈跟踪过长、超出缓冲区时，此前不会正确终止字符串，可能导致越界读取；错误信息过长时，在追加系统错误信息时也可能写出缓冲区边界。两种情况都需要异常长的信息才会触发。

  [`7fd8bc8`](https://github.com/pgbackrest/pgbackrest/commit/7fd8bc89a15cb039111aa85fd37f9dc68f7c4d6d) 修复错误模块中潜在的缓冲区越界问题。

  [`5ca98ab`](https://github.com/pgbackrest/pgbackrest/commit/5ca98abc91f823ef97ff6a1e77d65727d1259218) 格式化错误信息时使用完整缓冲区。

  [`3a71dc8`](https://github.com/pgbackrest/pgbackrest/commit/3a71dc839a89b83f592c1d5813c068bcded1b6bc) 防止超长信息导致错误缓冲区越界写入。
- 修复并行协议客户端释放后使用的问题。（*由 Douglas J Hunley 审核，Georgy Shelkovy 报告。*）

  没有剩余任务的客户端被释放后，仍留在客户端列表中，后续调用会再次释放它。在 debug 或 trace 日志级别下，这会读取已释放内存并可能崩溃，例如设置 `log-level-file=trace` 的并行备份。

  议题 [#2754](https://github.com/pgbackrest/pgbackrest/issues/2754); 拉取请求 [#2804](https://github.com/pgbackrest/pgbackrest/pull/2804); 提交 [`31432ed`](https://github.com/pgbackrest/pgbackrest/commit/31432ed3977302b5e183f2b592d85afb521b4f55)
- 修复未设置 `pg1` 却设置 `pg` 选项时发生的堆溢出。（*由 Douglas J Hunley 审核，Naveen 报告。*）

  未设置 `pg1-path` 却为其他索引设置 `pg` 选项（例如 `pg2-path` 和 `pg3-path`）时，索引映射会被覆盖。这在使用 musl 的系统（如 Alpine）上会损坏堆并引发段错误，编号最大的 `pg-path` 也会丢失。

  议题 [#1768](https://github.com/pgbackrest/pgbackrest/issues/1768); 拉取请求 [#2796](https://github.com/pgbackrest/pgbackrest/pull/2796); 提交 [`2d767de`](https://github.com/pgbackrest/pgbackrest/commit/2d767de3c59cf5570639e75755dc73c626fb99e1)
- 修复 musl 1.2.6 上退出期间收到信号导致崩溃的问题。

  musl 1.2.6（例如 Alpine 3.24 所用版本）在退出已开始后再次调用 `exit()` 会崩溃。退出期间收到信号时会触发此问题，例如 `server` 命令终止一个已经开始退出的子进程。现在会忽略退出期间到达的信号。

  提交 [`e166a33`](https://github.com/pgbackrest/pgbackrest/commit/e166a33f48a00192c09b0f1cea3465243c03d1f1)

**新功能：**

- 支持 PostgreSQL 19beta1/beta2。（*审核：Stefan Fercot.*）

  新增 PostgreSQL 19beta1/beta2 支持。PostgreSQL 19 可以在线启用和禁用页面校验和，这两种操作进行期间不会验证页面校验和。

  [`bc6d399`](https://github.com/pgbackrest/pgbackrest/commit/bc6d399a6a160f5fa41dd3a98ae046dff66e56a8) 支持 PostgreSQL 19beta1。; 拉取请求 [#2779](https://github.com/pgbackrest/pgbackrest/pull/2779)

  [`2777395`](https://github.com/pgbackrest/pgbackrest/commit/2777395dacc35aec51572d3e75c621725e2f9d9c) 支持 PostgreSQL 19beta2。
- 新增 `archive-expire-before` 选项，用于清理 WAL 归档。（*由 Stefan Fercot 贡献，David Steele 审核。*）

  `expire` 的 `archive-expire-before` 选项可从归档中删除指定 WAL 段之前的 WAL，但绝不会删除保留备份所需的 WAL。它可以通过 `archive_cleanup_command`，从备库的重启点开始清理归档，替代不了解保留策略的 `pg_archivecleanup`。

  [`6cd692b`](https://github.com/pgbackrest/pgbackrest/commit/6cd692b1b321faf544ee3a9b1f503fd48007d7c7) 将 WAL 过期处理提取到 expireArchiveId()。

  [`4945139`](https://github.com/pgbackrest/pgbackrest/commit/4945139392c21f197f2e307abc3c89b5548cef8d) 添加 archive-expire-before 选项以清理 WAL 归档。; 拉取请求 [#2801](https://github.com/pgbackrest/pgbackrest/pull/2801)
- 为 Azure 存储添加批量删除功能。（*由 Douglas J Hunley、Crispy 审核。*）

  文件删除改用 Azure Blob Batch API，每个请求最多删除 256 个文件，不再为每个文件单独发出请求。这可加快 `expire` 等从仓库删除文件的命令。

  拉取请求 [#2786](https://github.com/pgbackrest/pgbackrest/pull/2786); 提交 [`ffa325b`](https://github.com/pgbackrest/pgbackrest/commit/ffa325b8a44c1e9e44dc038bbcc8aece6f312a90)
- 添加对 S3 Outposts 的支持。（*由 Shiva Kumar Ambigi 贡献，David Steele、Roberto Mello 审核。*）

  使用 S3 Outposts 端点时，设置 `repo-s3-service=s3-outposts`。该选项设置请求签名所用的服务名称，默认值为 `s3`。

  拉取请求 [#2762](https://github.com/pgbackrest/pgbackrest/pull/2762); 提交 [`6c51800`](https://github.com/pgbackrest/pgbackrest/commit/6c518001c24ad2405eaf750d358f69703322a221)
- 添加 S3 进程认证支持。（*由 Andrew Charlton 审核，Andrew Charlton 建议。*）

  设置 `repo-s3-key-type=process`，并将 `repo-s3-process-cmd` 设为以 AWS 进程凭据提供程序的 JSON 格式输出临时凭据的命令。凭据会在过期之前刷新。

  拉取请求 [#2778](https://github.com/pgbackrest/pgbackrest/pull/2778); 提交 [`b5a578a`](https://github.com/pgbackrest/pgbackrest/commit/b5a578a5c2c88d53fca0ee8cfbfb8ee662ce7e48)
- 提供包含生成代码和文档的发行版 tar 包。

  tar 包包含生成的代码以及已呈现的 man 手册页和 HTML 文档，因此构建和安装无需代码生成或文档工具，也无需 `libyaml`。

  提交 [`8fcfef5`](https://github.com/pgbackrest/pgbackrest/commit/8fcfef5d8732055f9bc8e50224d5b7a988512e61)

**改进：**

- 服务器断开空闲连接后，重新建立 SFTP 存储连接。（*由 Stefan Fercot 审核，mustafa0x、tisserat 建议。*）

  SFTP 服务器和防火墙可能断开空闲一段时间的连接，例如备份复制阶段的仓库读取连接，导致下次使用时出现套接字错误。现在会重新建立已断开的连接，并重试一次操作。

  [`d72bea9`](https://github.com/pgbackrest/pgbackrest/commit/d72bea9fe7c3975fc6832a51b0b0c1c041c467d2) 在 SFTP 读写对象中从存储对象获取 libssh2 会话。

  [`a31febf`](https://github.com/pgbackrest/pgbackrest/commit/a31febfbd9ba639589fe57e4083ae9358b1306a4) 服务器断开空闲连接后，重新连接 SFTP 存储。; 议题 [#2739](https://github.com/pgbackrest/pgbackrest/issues/2739); 议题 [#2772](https://github.com/pgbackrest/pgbackrest/issues/2772); 拉取请求 [#2793](https://github.com/pgbackrest/pgbackrest/pull/2793)
- 添加用户/组缓存，加快清单构建速度。（*由 Gunnar Lindholm 贡献，David Steele 审核。*）

  通过远程名称服务（如 sssd 或 LDAP）查询用户和组名时，每次查询都需往返通信，在有数百万文件的集群上成为构建清单的主要耗时。现在会缓存用户和组名。

  拉取请求 [#2773](https://github.com/pgbackrest/pgbackrest/pull/2773); 提交 [`1e6d23f`](https://github.com/pgbackrest/pgbackrest/commit/1e6d23fea72ac9c599f8b62a2e0a3de02d0d08d0)
- 在 `info` 命令输出中添加各仓库的备份进度。（*由 Will Morland 贡献，David Steele、Stefan Fercot 审核。*）

  同时向多个仓库执行备份时，`info` 命令现在会分别报告各仓库的进度及总体进度。JSON 输出为每个备份锁增加了 `repo` 数组。

  议题 [#2736](https://github.com/pgbackrest/pgbackrest/issues/2736); 拉取请求 [#2740](https://github.com/pgbackrest/pgbackrest/pull/2740); 提交 [`77312b3`](https://github.com/pgbackrest/pgbackrest/commit/77312b33ba913132b33401d862c2e354f323c786)
- 为 `verify` 命令添加 `backup.info` 检查。（*由 Denis Garsh 贡献，David Steele、Douglas J Hunley 审核。*）

  当仓库中的备份不在 `backup.info` 中，或 `backup.info` 中的备份在仓库中缺失时，`verify` 命令现在会发出警告。缺失的备份会被报告为清单缺失。

  议题 [#2723](https://github.com/pgbackrest/pgbackrest/issues/2723); 拉取请求 [#2752](https://github.com/pgbackrest/pgbackrest/pull/2752); 提交 [`7f82fb6`](https://github.com/pgbackrest/pgbackrest/commit/7f82fb6635c1e3e9dd285d53076e9aee3fbf1ca2)
- 允许配置 S3 STS 端点。（*由 Simon Gratton 贡献，David Steele 审核。*）

  配合 `repo-s3-key-type=web-id`，可设置 `repo-s3-sts-host` 使用区域 STS 端点，例如 `sts.eu-central-2.amazonaws.com`。需要显式启用的 AWS 区域不接受全球端点签发的凭据，但全球端点仍是默认值。

  议题 [#2791](https://github.com/pgbackrest/pgbackrest/issues/2791); 拉取请求 [#2798](https://github.com/pgbackrest/pgbackrest/pull/2798); 提交 [`11f5582`](https://github.com/pgbackrest/pgbackrest/commit/11f5582dfe696187cab1f15d08f649a5117730b3)
- 新增 `archive-push-batch-size`，用于限制每次异步运行推送的 WAL 数据量。（*由 Stefan Fercot 审核。*）

  在异步模式下，`archive-push-queue-max` 仅在每次运行开始时检查，因此处理大量积压 WAL 时，队列可能远超上限。`archive-push-batch-size`（默认 16GiB）限制每次运行推送的 WAL 数量，使队列更早得到再次检查。

  拉取请求 [#2803](https://github.com/pgbackrest/pgbackrest/pull/2803); 提交 [`34a035f`](https://github.com/pgbackrest/pgbackrest/commit/34a035f4d62f06822c1f60f72a605762cc1ad79c)
- 异步 `archive-push` 遇到第一个错误时退出。（*由 Stefan Fercot 审核，Lardière Sébastien 建议。*）

  仓库不可用时，异步进程此前会不断尝试每个就绪 WAL 段，单次运行可能长到尚未再次检查 `archive-push-queue-max`，`pg_wal` 就已占满磁盘。现在发生第一个错误后，等待进行中的任务完成便退出。

  议题 [#1848](https://github.com/pgbackrest/pgbackrest/issues/1848); 拉取请求 [#2802](https://github.com/pgbackrest/pgbackrest/pull/2802); 提交 [`a0c1435`](https://github.com/pgbackrest/pgbackrest/commit/a0c14359392e283d88f72e7f9f815d9e78ddfb10)
- 加固 HTTP 分块响应解析。（*由 Shubham 贡献，David Steele 审核。*）

  现在接受分块扩展和尾部字段，对 `transfer-encoding` 进行不区分大小写的比较，并拒绝同时包含 `transfer-encoding` 和 `content-length` 的响应。

  拉取请求 [#2785](https://github.com/pgbackrest/pgbackrest/pull/2785); 提交 [`34bba82`](https://github.com/pgbackrest/pgbackrest/commit/34bba828c6ba97579d65c2199c02d94bf31257a5)
- 未启用 `allow-root` 时，由 root 用户运行命令将报错。（*由 Douglas J Hunley 审核。*）

  以 root 身份运行 `restore` 以外的命令，可能在仓库中创建 PostgreSQL 用户无法访问的文件，例如 `backup.info`。除 `restore` 外，所有命令默认禁用 `allow-root`，远程主机也会执行这项检查。

  议题 [#1693](https://github.com/pgbackrest/pgbackrest/issues/1693); 拉取请求 [#2812](https://github.com/pgbackrest/pgbackrest/pull/2812); 提交 [`0daf53d`](https://github.com/pgbackrest/pgbackrest/commit/0daf53da03fb179b5771b6aaa559f9e0cc5842bb)
- 构建清单时减少二分查找次数。（*由 Gunnar Lindholm 贡献，David Steele 审核。*）

  构建差异或增量备份清单时，此前会为每个文件搜索前一份清单三次。现在仅搜索一次，可为有数百万文件的集群节省数百万次搜索。

  拉取请求 [#2774](https://github.com/pgbackrest/pgbackrest/pull/2774); 提交 [`f1ef629`](https://github.com/pgbackrest/pgbackrest/commit/f1ef62956adabf305a7e959477ea1bb668fd8d65)
- 提升块级增量 delta 恢复期间的文件定位性能。（*由 David Christensen、Douglas J Hunley 审核。*）

  块级增量 delta 恢复此前每写一个块，都要定位文件并刷新写缓冲区，而块通常只有 8KiB。现在会跟踪文件位置，仅在必要时定位和刷新。

  拉取请求 [#2732](https://github.com/pgbackrest/pgbackrest/pull/2732); 提交 [`b908d5e`](https://github.com/pgbackrest/pgbackrest/commit/b908d5e2c5b37ef968f19e2c40a1001e19e5b87f)
- 按顺序将备份文件打包，不再扫描以寻找更合适的文件组合。（*由 Stefan Fercot 审核。*）

  此前，如果加入某个文件会使文件包超过 `repo-bundle-size`，就会跳过它，转而加入队列后方较小的文件。现在按顺序添加文件，达到 `repo-bundle-size` 后关闭文件包，因此包大小可能超过该阈值，超出量最多为 `repo-bundle-limit`。

  拉取请求 [#2794](https://github.com/pgbackrest/pgbackrest/pull/2794); 提交 [`253dbc3`](https://github.com/pgbackrest/pgbackrest/commit/253dbc3f03e5581c98bb97b252dc77b8defd3693)
- 查询未能完成时报告底层错误。（*由 Andrew Pogrebnoi 审核，Marco Fontana 建议。*）

  查询返回第一个结果后连接丢失时（例如负载较高时），此前只会报告笼统的 "NULL result required to complete request"。现在会报告 PostgreSQL 返回的错误，并提示可能是连接丢失，或 `idle_session_timeout`、`idle_in_transaction_session_timeout` 设置过于激进。

  议题 [#2789](https://github.com/pgbackrest/pgbackrest/issues/2789); 拉取请求 [#2790](https://github.com/pgbackrest/pgbackrest/pull/2790); 提交 [`23e966c`](https://github.com/pgbackrest/pgbackrest/commit/23e966cd8f17a8cd446b04901d0ae66ebf4118ee)
- S3 凭据请求失败时报告实际错误。（*由 Douglas J Hunley 审核，Mitchell Grice 建议。*）

  AWS 对 `web-id` 或 `pod-id` 凭据请求返回错误时，此前会报告响应解析失败。现在会报告 AWS 返回的错误，并在记录请求日志时隐藏令牌。

  议题 [#1997](https://github.com/pgbackrest/pgbackrest/issues/1997); 拉取请求 [#2808](https://github.com/pgbackrest/pgbackrest/pull/2808); 提交 [`b0c57c2`](https://github.com/pgbackrest/pgbackrest/commit/b0c57c280d727e743b72a6d86e2c3e413307e44b)
- 将 `archive-push` 的 `spool-path` 错误报告到 PostgreSQL 日志。（*由 Douglas J Hunley 审核，Don Seiler 建议。*）

  无法创建异步 spool 路径时（例如权限不足），错误无法写入 spool，`archive-push` 只会因笼统的超时而失败，并提示查看异步日志。现在在启动异步进程之前创建 spool 路径，使错误能出现在 PostgreSQL 日志中。

  议题 [#1408](https://github.com/pgbackrest/pgbackrest/issues/1408); 拉取请求 [#2810](https://github.com/pgbackrest/pgbackrest/pull/2810); 提交 [`7b0159c`](https://github.com/pgbackrest/pgbackrest/commit/7b0159c7dfd69763b63b1385fd564c18a4a5c1bc)
- 遇到不受支持的版本时，提示 pgBackRest 可能版本过旧。

  pgBackRest 无法识别 PostgreSQL 版本时（例如恢复主机上的旧版 pgBackRest 读取新版集群的备份），错误现在会提示可能需要更新所有主机上的 pgBackRest。版本号会以用户可读的形式报告，例如 13，而非 130000。

  提交 [`d4f697e`](https://github.com/pgbackrest/pgbackrest/commit/d4f697ebce705f9439798f970103fd38f829dfff)
- 添加 systemd 通知集成。（*由 Andrew Jackson 贡献，David Steele 审核。*）

  使用 `libsystemd` 构建时，`server` 命令会像 PostgreSQL 和 PgBouncer 一样，在准备接受连接和停止时通知 systemd。

  议题 [#2757](https://github.com/pgbackrest/pgbackrest/issues/2757); 拉取请求 [#2760](https://github.com/pgbackrest/pgbackrest/pull/2760); 提交 [`742fff1`](https://github.com/pgbackrest/pgbackrest/commit/742fff174a3f5baaed932afa284334ca2aa1be82)
- 在 meson 编译器探测中抑制 `unused parameter` 错误。（*由 Jörg Plate 贡献，David Steele 审核。*）

  meson 的编译器探测代码声明了未使用的 `main()` 参数；当未使用参数警告被视为错误时，会导致探测失败。

  议题 [#2724](https://github.com/pgbackrest/pgbackrest/issues/2724); 提交 [`d4465bd`](https://github.com/pgbackrest/pgbackrest/commit/d4465bd6f78d6d58d18ebedbe8f63b55d0ae2508)
- C11 现为最低 C 语言标准。（*由 Mohammad Ali Nazir Kosar 审核。*）

  拉取请求 [#2738](https://github.com/pgbackrest/pgbackrest/pull/2738); 提交 [`3a6c671`](https://github.com/pgbackrest/pgbackrest/commit/3a6c67183cd9c6a12c24f0d978ef5e501b7c3fcf)

**文档改进：**

- 将 `repo-*` 命令的 `stanza` 选项设为内部选项。（*由 Stefan Fercot 审核。*）

  `stanza` 选项对 `repo-*` 命令仅在使用未公开的存储路径常量时有效，此前文档却让人误以为它具有实际并不存在的作用。现在不再为这些命令列出该选项，其行为保持不变。

  议题 [#2735](https://github.com/pgbackrest/pgbackrest/issues/2735); 提交 [`3e9eabd`](https://github.com/pgbackrest/pgbackrest/commit/3e9eabd8a5551cdaeb6bc78a52f000eaf239defb)
- 说明 `info` 会从全局配置节读取加密设置。（*由 Stefan Fercot 审核，Ron Johnson 建议。*）

  不指定 `stanza` 运行 `info` 时，只会从全局配置节读取加密设置。因此，若加密设置配置在 stanza 节中，就必须指定 `stanza`。

  议题 [#1407](https://github.com/pgbackrest/pgbackrest/issues/1407); 拉取请求 [#2805](https://github.com/pgbackrest/pgbackrest/pull/2805); 提交 [`2137bda`](https://github.com/pgbackrest/pgbackrest/commit/2137bda1a5a1ad890d0137feffe8491102041af3)
- 说明 `expire-auto` 使用 `backup` 命令的配置。（*由 Stefan Fercot 审核，Lardière Sébastien 建议。*）

  备份后的自动过期处理使用 `backup` 命令的配置，因此仅为 `expire` 命令设置的选项不会生效。如果需要单独的配置，应禁用 `expire-auto` 并另行运行 `expire`。

  议题 [#1874](https://github.com/pgbackrest/pgbackrest/issues/1874); 拉取请求 [#2807](https://github.com/pgbackrest/pgbackrest/pull/2807); 提交 [`cf847f9`](https://github.com/pgbackrest/pgbackrest/commit/cf847f94cd7ab6517ec1abb30075fb53dc75d5f8)
- 说明使用专用用户时需要调整 logrotate 的 `su` 指令。（*由 Douglas J Hunley 审核，lkanbus 建议。*）

  软件包可能安装以 `postgres` 用户轮转日志的 logrotate 配置。如果仓库和日志归专用用户所有，必须将 `su` 指令改为该用户，否则轮转会因权限错误而失败。

  议题 [#2737](https://github.com/pgbackrest/pgbackrest/issues/2737); 拉取请求 [#2809](https://github.com/pgbackrest/pgbackrest/pull/2809); 提交 [`bde2c50`](https://github.com/pgbackrest/pgbackrest/commit/bde2c509c923fbe2844c10b0f95c55973378d2ae)
- 说明配置文件不支持行尾注释。（*由 Douglas J Hunley 审核，Alex Richman 建议。*）

  从未支持过行尾注释，尽管对某些选项看起来似乎有效。仅支持独占一行的注释。

  议题 [#1633](https://github.com/pgbackrest/pgbackrest/issues/1633); 拉取请求 [#2811](https://github.com/pgbackrest/pgbackrest/pull/2811); 提交 [`8571799`](https://github.com/pgbackrest/pgbackrest/commit/85717992cadbfdabc571fb23914b62b08c7f6f44)

**测试套件改进：**

- 修复 CI 容器中的 Alpine 用户组冲突。（*由 Artur Zakirov 贡献，David Steele 审核。*）

  重命名测试组时，现在会处理含有成员的组条目；仅在 Alpine 组尚不存在时才创建它。

  拉取请求 [#2784](https://github.com/pgbackrest/pgbackrest/pull/2784); 提交 [`760dd8d`](https://github.com/pgbackrest/pgbackrest/commit/760dd8db69e7c6e5cbb9c5b7e2067b6813cf4497)

### v2.58.0 版本说明

*对象存储改进*

*发布于 2026 年 1 月 19 日*

**重要提示**：`repo-storage-upload-chunk-size` 选项的最小值已提高，现在代表各云存储供应商所允许的最小值。

**漏洞修复：**

- 修复信号处理程序中日志记录引发的死锁问题。（*由 Maxim Michkov 修复，David Steele 审核。*）

  在 `gmtime_r()` 持锁期间到达的信号（例如 带 `--force` 的 `stop` 命令 发送的 SIGTERM），可能在信号处理器记录日志时导致死锁。信号处理器现在只使用异步信号安全的函数记录日志。

  议题 [#2710](https://github.com/pgbackrest/pgbackrest/issues/2710); 拉取请求 [#2715](https://github.com/pgbackrest/pgbackrest/pull/2715); 提交 [`e13c462`](https://github.com/pgbackrest/pgbackrest/commit/e13c462908c6ee25f8795b5d1373981549d4d5cf)

**新功能：**

- 为 S3、GCS 和 Azure 添加 HTTP 支持。（*由 Will Morland 贡献，David Steele 审核。*）

  对象存储端点现在可以使用 `http://` 前缀，以不启用 TLS 的方式连接。未指定协议时仍使用 HTTPS。

  议题 [#2340](https://github.com/pgbackrest/pgbackrest/issues/2340); 拉取请求 [#2703](https://github.com/pgbackrest/pgbackrest/pull/2703); 提交 [`2398dd4`](https://github.com/pgbackrest/pgbackrest/commit/2398dd4d432d312b3641e9fbbcbe0487ad43112d)
- 允许直接过期最旧的全量备份，不受当前保留策略限制。（*由 Stefan Fercot 贡献，David Steele 审核，Ron Johnson 建议。*）

  `expire` 的 `--oldest` 选项会忽略保留设置，使最旧的全量备份及依赖它的备份过期，例如可在仓库空间不足时使用。早于剩余最旧全量备份的 WAL 也会过期。

  议题 [#2666](https://github.com/pgbackrest/pgbackrest/issues/2666); 拉取请求 [#2709](https://github.com/pgbackrest/pgbackrest/pull/2709); 提交 [`bf2b276`](https://github.com/pgbackrest/pgbackrest/commit/bf2b276dc011464b13039630870934fd42ca473c)
- 支持 Azure 托管标识（managed identities）。（*由 Moiz Ibrar、Matthew Mols 贡献，David Steele 审核。*）

  设置 `repo-azure-key-type=auto` 可通过托管身份自动获取凭据，无需手动配置。凭据会在过期之前刷新。

  议题 [#2023](https://github.com/pgbackrest/pgbackrest/issues/2023); 拉取请求 [#2712](https://github.com/pgbackrest/pgbackrest/pull/2712); 提交 [`38f14d7`](https://github.com/pgbackrest/pgbackrest/commit/38f14d73b6a62d06e1ead7942e49a2bb2ae90dab)
- ***实验性*** 支持 S3 EKS Pod 身份认证。（*由 Pierre BOUTELOUP 贡献，David Steele 审核。*）

  设置 `repo-s3-key-type=pod-id` 可通过 EKS Pod 身份自动获取凭据，无需手动配置。凭据会在过期之前刷新。

  议题 [#2718](https://github.com/pgbackrest/pgbackrest/issues/2718); 拉取请求 [#2719](https://github.com/pgbackrest/pgbackrest/pull/2719); 提交 [`79544f6`](https://github.com/pgbackrest/pgbackrest/commit/79544f64a3ce198f4685f923739def997fcafbce)
- 允许配置 TLS 密码套件。（*由 Gunnar "Nick" Bluth 贡献，David Steele 审核。*）

  使用 `tls-cipher-12` 设置 TLS 1.2 的密码套件，使用 `tls-cipher-13` 设置 TLS 1.3 的密码套件，例如用于满足合规要求。这些密码套件设置适用于进程建立的所有连接。

  [`fbc607a`](https://github.com/pgbackrest/pgbackrest/commit/fbc607a48b1fb4ae65c9f2691c44453f02aef2b8) 允许配置 TLS 密码套件。; 议题 [#2697](https://github.com/pgbackrest/pgbackrest/issues/2697); 拉取请求 [#2700](https://github.com/pgbackrest/pgbackrest/pull/2700)

  [`91ad655`](https://github.com/pgbackrest/pgbackrest/commit/91ad65537f55aa3825b6c7b626a9e1b7cbb1ad4c) 修复 fbc607a4 中新增的 common/io-tls 单元测试偶发失败问题。
- 允许设置进程优先级。（*由 Douglas J Hunley 审核。*）

  `priority` 可像 `nice` 一样，将 pgBackRest 进程的调度优先级设置为 -20 至 19。值越高，pgBackRest 越不容易影响 PostgreSQL。

  拉取请求 [#2693](https://github.com/pgbackrest/pgbackrest/pull/2693); 提交 [`0fc7e96`](https://github.com/pgbackrest/pgbackrest/commit/0fc7e96f5addb01e7f6f3585e37d209cc17dd956)

**改进：**

- 使用 path-style URI 时，允许 S3 桶名中包含点号。（*由 Joakim Hindersson 贡献，David Steele 审核。*）

  桶名称中的句点仅在主机式 URI 中会导致证书主机名不匹配，因此现在允许在 `repo-s3-uri-style=path` 下使用。大多数自建 S3 服务采用路径式 URI。

  拉取请求 [#2713](https://github.com/pgbackrest/pgbackrest/pull/2713); 提交 [`3fdb4a1`](https://github.com/pgbackrest/pgbackrest/commit/3fdb4a1ea00b442aca5fc714818d293d57490386)
- 除非禁用验证，否则要求 TLS >= 1.2。（*由 Douglas J Hunley、Gunnar "Nick" Bluth 审核。*）

  TLS 1.0 和 1.1 自 2021 年起已被弃用。pgBackRest 主机之间的连接始终启用验证。如果通过 `repo-storage-verify-tls` 禁用对象存储的验证（例如使用自签名证书时），则允许所有协议版本。

  拉取请求 [#2720](https://github.com/pgbackrest/pgbackrest/pull/2720); 提交 [`5b4b20a`](https://github.com/pgbackrest/pgbackrest/commit/5b4b20a8d7d17c2bffe106595310853e3f3a9604)
- 针对大文件上传，动态调整 S3/GCS/Azure 的分块大小。（*由 Douglas J Hunley 审核，Timothée Peignier 建议。*）

  上传的分段数量有限，因此使用默认的 `repo-storage-upload-chunk-size` 时，S3、GCS 和 Azure 可上传的最大文件分别为 50GiB、40GiB 和 200GiB。现在分段大小会在上传过程中增长，因此 S3 和 GCS 可上传最大 5TiB 的文件，Azure 可上传最大 45TiB 的文件。

  议题 [#2679](https://github.com/pgbackrest/pgbackrest/issues/2679); 拉取请求 [#2701](https://github.com/pgbackrest/pgbackrest/pull/2701); 提交 [`86554fa`](https://github.com/pgbackrest/pgbackrest/commit/86554faa707292855c2776a0c70b5e212b1e3945)
- 针对小文件，优化 S3/GCS/Azure 的分块大小。（*由 Douglas J Hunley 审核。*）

  此前打开文件时就会分配整个分段缓冲区，尽管许多文件比一个分段还小。现在缓冲区随数据到达逐渐增长，可减少上传小文件时的内存占用。

  拉取请求 [#2705](https://github.com/pgbackrest/pgbackrest/pull/2705); 提交 [`28bfa20`](https://github.com/pgbackrest/pgbackrest/commit/28bfa20ba3b860f72ba7ab6c018e37ada99e2109)
- 移除对 PostgreSQL `9.5` 的支持。（*由 Douglas J Hunley 审核。*）

  按照支持五个已结束生命周期的 PostgreSQL 版本的策略，不再支持 PostgreSQL 9.5。

  拉取请求 [#2692](https://github.com/pgbackrest/pgbackrest/pull/2692); 提交 [`5171e8b`](https://github.com/pgbackrest/pgbackrest/commit/5171e8bde31b9711c9c5b4ccc5170b61c5235548)
- 改进存在未解析依赖项的选项在默认值日志中的输出信息。（*由 Stefan Fercot 审核。*）

  配置文件中设置的选项在依赖条件未满足时，实际使用的是默认值，此前却仍会在命令开始时记录该选项。现在不再记录这种情况。

  议题 [#2707](https://github.com/pgbackrest/pgbackrest/issues/2707); 拉取请求 [#2708](https://github.com/pgbackrest/pgbackrest/pull/2708); 提交 [`38ac638`](https://github.com/pgbackrest/pgbackrest/commit/38ac6387cbbfc6f78a686de657e5a4de4ed59295)

**文档改进：**

- 从用户指南中移除显式的 `max_wal_senders`/`wal_level` 配置说明。（*由 Jamie Nguyen 建议。*）

  从 PostgreSQL 10 起，`max_wal_senders` 和 `wal_level` 的默认值已符合用户指南的要求。

  议题 [#2699](https://github.com/pgbackrest/pgbackrest/issues/2699); 提交 [`bce97d3`](https://github.com/pgbackrest/pgbackrest/commit/bce97d3ea80675b8eab3dbf692e8bc8f077f30c7)
- 阐明 bundling（包捆绑）在大块大小文件系统上的优势。（*由 Ron Johnson 建议。*）

  在块较大的文件系统上，每个小文件都会占用一整个块，因此文件打包可节省空间。

  议题 [#2706](https://github.com/pgbackrest/pgbackrest/issues/2706); 提交 [`a7e5f28`](https://github.com/pgbackrest/pgbackrest/commit/a7e5f28511c27f2504a873db26803b26a84df8f1)

### v2.57.0 版本说明

*禁止仓库符号链接*

*发布于 2025 年 10 月 18 日*

**漏洞修复：**

- 解除 HTTP/TLS/socket 超时的嵌套处理。（*由 David Christensen 审核。*）

  套接字连接失败后，TLS 和 HTTP 层也会重复重试，导致在 `io-timeout` 默认为 60 秒时，连接竟需九分钟才超时。现在每一层仅重试自身的失败。

  议题 [#2654](https://github.com/pgbackrest/pgbackrest/issues/2654); 拉取请求 [#2662](https://github.com/pgbackrest/pgbackrest/pull/2662); 提交 [`9c7f064`](https://github.com/pgbackrest/pgbackrest/commit/9c7f0648648e651d82918e5dbfc3d511abee3298)
- 修复页面校验和错误信息中可能出现的段错误。（*由 Zsolt Parragi 修复，David Steele 审核。*）

  无效页面校验和的错误信息使用了已超出作用域的字符串，可能记录乱码或导致崩溃。使用 pg_tde 时最容易出现，因为每个加密文件都会使页面校验和验证失败。

  拉取请求 [#2675](https://github.com/pgbackrest/pgbackrest/pull/2675); 提交 [`adc5e5b`](https://github.com/pgbackrest/pgbackrest/commit/adc5e5b23b9b544745724a7eaa0461b88b691e36)
- 修复备份续传信息可能导致段错误的问题。

  用于解释备份为何无法续传的信息使用了已超出作用域的字符串，可能记录乱码或导致崩溃。

  提交 [`c1c40a4`](https://github.com/pgbackrest/pgbackrest/commit/c1c40a4a851efe98be83aca2044c02fd1c7fb2ae)

**新功能：**

- 新增 `repo-symlink` 选项，用于禁止创建仓库符号链接。（*由 Douglas J Hunley 审核，Ron Johnson 建议。*）

  某些在其他方面兼容 Posix 的文件系统不支持符号链接。设置 `repo-symlink=n` 可避免在仓库中创建 `latest` 和表空间符号链接。

  议题 [#2673](https://github.com/pgbackrest/pgbackrest/issues/2673); 拉取请求 [#2674](https://github.com/pgbackrest/pgbackrest/pull/2674); 提交 [`bfd9790`](https://github.com/pgbackrest/pgbackrest/commit/bfd97907311a25ed239798691cff52cf73acdb83)

**改进：**

- 为 HTTP 408 和 429 错误添加重试机制。（*由 David Christensen 审核。*）

  现在会重试 HTTP 408（Request Timeout）和 429（Too Many Requests）错误。429 错误在 Cloudflare R2 上较为常见。

  拉取请求 [#2661](https://github.com/pgbackrest/pgbackrest/pull/2661); 提交 [`8733900`](https://github.com/pgbackrest/pgbackrest/commit/87339004e59c03d2a03a6ceb8426202346849c37)

### v2.56.0 版本说明

*进度信息改进*

*发布于 2025 年 7 月 21 日*

**漏洞修复：**

- 修复仓库中无备份时临时过期操作（adhoc expiration）的问题。（*由 Stefan Fercot 审核，Anup Gupta 报告。*）

  仓库中没有备份时，临时指定的过期操作会因 "cannot get index 0 from list with 0 value(s)" 而失败。

  议题 [#2645](https://github.com/pgbackrest/pgbackrest/issues/2645); 拉取请求 [#2646](https://github.com/pgbackrest/pgbackrest/pull/2646); 提交 [`638815b`](https://github.com/pgbackrest/pgbackrest/commit/638815b4cde1ba1322516e256742c51676af66f0)

**新功能：**

- 在 `info` 命令输出中添加恢复进度信息。（*由 Denis Garsh、Maxim Michkov 贡献，David Steele 审核。*）

  `restore` 命令现在会记录进度，由 `info` 命令与备份进度一起报告。`stop` 命令也不再终止恢复。

  议题 [#2546](https://github.com/pgbackrest/pgbackrest/issues/2546); 拉取请求 [#2652](https://github.com/pgbackrest/pgbackrest/pull/2652); 提交 [`8cdd9ce`](https://github.com/pgbackrest/pgbackrest/commit/8cdd9ce1c4ab6cca508932a41a3013374d7547ef)
- 为 `info` 命令输出添加仅显示进度的详细级别。（*由 Denis Garsh 贡献，David Steele、Stefan Fercot 审核。*）

  设置 `--detail-level=progress` 可仅报告进度；由于无需读取仓库，速度更快。默认值为 `full`。

  拉取请求 [#2550](https://github.com/pgbackrest/pgbackrest/pull/2550); 提交 [`2706168`](https://github.com/pgbackrest/pgbackrest/commit/2706168f609af544b0453d384c7fb620626fc205)

**改进：**

- 在对象存储上重试失败的读取操作。（*由 David Christensen 审核。*）

  从对象存储读取开始后发生错误，此前会视为致命错误，可能导致恢复等代价较高的任务重新开始。现在会从中断位置重试失败的读取。

  拉取请求 [#2642](https://github.com/pgbackrest/pgbackrest/pull/2642); 提交 [`5e14692`](https://github.com/pgbackrest/pgbackrest/commit/5e14692588b9fd8a566c9a1795c866ba2e83eebd)
- 修复命令行帮助中默认值的显示问题。（*由 David Christensen、Chris Bandy 审核。*）

  如果选项有多个默认值，例如同时配置 S3 和 Azure 仓库时的 `repo-storage-upload-chunk-size`，选项列表会显示 `<multi>`，该选项的帮助则会列出每个默认值。对于在当前配置中无效的选项，不显示默认值。

  拉取请求 [#2625](https://github.com/pgbackrest/pgbackrest/pull/2625); 提交 [`8737cad`](https://github.com/pgbackrest/pgbackrest/commit/8737cad566974c37529595715ecdc06571420752)

**文档改进：**

- 在适当情况下，以列表形式描述离散选项值。（*由 Anton Kurochkin 贡献，David Steele 审核。*）

  `verify` 和 `version` 命令的 `output` 等选项值，现在与其他选项一样以列表形式说明。

  拉取请求 [#2638](https://github.com/pgbackrest/pgbackrest/pull/2638); 提交 [`2e76e9f`](https://github.com/pgbackrest/pgbackrest/commit/2e76e9fc699d22286f6bf05fddc271d8fa22523e)
- 修复 `archive-mode` 选项帮助输出中"小于"的描述。（*由 Anton Kurochkin 贡献，David Steele 审核。*）

  拉取请求 [#2633](https://github.com/pgbackrest/pgbackrest/pull/2633); 提交 [`cb67322`](https://github.com/pgbackrest/pgbackrest/commit/cb673225e90604a8865ce30c188d15661f945e5e)

### v2.55.1 版本说明

*漏洞修复*

*发布于 2025 年 5 月 5 日*

**漏洞修复：**

- 回滚"仅在需要时才在 S3 上计算 content-md5"的变更。（*由 David Christensen 审核，Frank Brendel 报告。*）

  启用对象锁定后，S3 要求上传请求包含 `content-md5` 或 `x-amz-content-*` 校验和，而 Scality 不接受替代校验和，导致上传失败。现在重新为所有带有内容的请求计算 `content-md5`。

  议题 [#2613](https://github.com/pgbackrest/pgbackrest/issues/2613); 拉取请求 [#2615](https://github.com/pgbackrest/pgbackrest/pull/2615); 提交 [`8bbb982`](https://github.com/pgbackrest/pgbackrest/commit/8bbb98243566bfa052f6aacfd1bd3a6acd770e40)
- 修复选项键的下界检查。（*由 David Christensen、Wolfgang Walther 审核，Wolfgang Walther 报告。*）

  索引为 0 的选项（例如 `pg0-path`）此前会导致段错误，现在会报告错误。

  议题 [#2610](https://github.com/pgbackrest/pgbackrest/issues/2610); 拉取请求 [#2611](https://github.com/pgbackrest/pgbackrest/pull/2611); 提交 [`5e01098`](https://github.com/pgbackrest/pgbackrest/commit/5e01098617a3803067b153be2d41e023cd4d95e4)

### v2.55.0 版本说明

*验证功能改进与 PostgreSQL 18 支持*

*发布于 2025 年 4 月 21 日*

**漏洞修复：**

- 修复在非默认仓库上进行块级增量恢复的问题。（*审核：David Christensen. 测试：Aleksander Łukasz. 报告：Aleksander Łukasz.*）

  待恢复备份使用块级增量、且不在编号最小的仓库中时，恢复却会从编号最小的仓库读取部分块级增量数据。显式设置 `repo` 可以绕过该问题。

  议题 [#2577](https://github.com/pgbackrest/pgbackrest/issues/2577); 拉取请求 [#2579](https://github.com/pgbackrest/pgbackrest/pull/2579); 提交 [`5d2c67c`](https://github.com/pgbackrest/pgbackrest/commit/5d2c67c3c6975ea3ed08c7425f6e410ae378913f)
- 对于 PostgreSQL < 12，不再设置 `recovery_target_timeline=current`。（*由 Stefan Fercot 审核。*）

  在 PostgreSQL 12 之前，虽然 `current` 是默认值，但显式将 `recovery_target_timeline` 设为 `current` 时，其行为却与 `latest` 相同。对于这些版本，设置为 `current` 时，现在不再将此设置写入 `recovery.conf`。

  拉取请求 [#2533](https://github.com/pgbackrest/pgbackrest/pull/2533); 提交 [`6fbb28f`](https://github.com/pgbackrest/pgbackrest/commit/6fbb28fa2d615576be78376c7f539921f6b8bc6a)
- 修复归档范围过期的日志记录问题。（*由 Stefan Fercot 审核，Aleš Zelený 报告。*）

  此前将最后一个删除的归档路径记录为范围起点，因此日志显示的过期文件数量远少于实际数量。

  议题 [#2543](https://github.com/pgbackrest/pgbackrest/issues/2543); 拉取请求 [#2554](https://github.com/pgbackrest/pgbackrest/pull/2554); 提交 [`47f050f`](https://github.com/pgbackrest/pgbackrest/commit/47f050f8fd816e57326d881f4253d8a13c0f8da6)
- 修复无结果查询的错误报告。（*由 Stefan Fercot 审核，Susantha Bathige 报告。*）

  预期不返回结果的查询发生错误时，此前会将它报告为意外结果，而非实际错误。

  拉取请求 [#2539](https://github.com/pgbackrest/pgbackrest/pull/2539); 提交 [`d5cefb7`](https://github.com/pgbackrest/pgbackrest/commit/d5cefb7290c34c64a2b9aa89ff04a718df4ec18b)

**新功能：**

- 支持验证恢复目标时间线。（*由 Stefan Fercot 审核。*）

  如果备份无法沿目标时间线恢复（例如备份是在备库提升且新时间线已分叉之后创建的），此前只有在恢复启动时才会失败，并返回难以理解的 PostgreSQL 错误。现在在开始恢复之前，就会根据历史文件检查时间线。

  拉取请求 [#2534](https://github.com/pgbackrest/pgbackrest/pull/2534); 提交 [`922e9f0`](https://github.com/pgbackrest/pgbackrest/commit/922e9f0775c39b64e009251a6bec8ef9b83c190f)
- 允许对指定备份执行验证。（*由 Maxim Michkov 贡献，David Steele 审核。*）

  `verify` 的 `--set` 选项仅验证指定备份，以及使其保持一致所需的 WAL。

  议题 [#2419](https://github.com/pgbackrest/pgbackrest/issues/2419); 拉取请求 [#2544](https://github.com/pgbackrest/pgbackrest/pull/2544); 提交 [`e4def88`](https://github.com/pgbackrest/pgbackrest/commit/e4def8845eb5c3fe9fb8cc44d9f64766cfb348c2)
- 新增对 S3/GCS 请求方付费（requester pays）的支持。（*由 Timothée Peignier 贡献，David Steele 审核。*）

  设置 `repo-s3-requester-pays` 或 `repo-gcs-user-project` 可由请求者承担费用，而非桶所有者，例如让托管服务向客户开放其备份的访问权限。

  [`4db0263`](https://github.com/pgbackrest/pgbackrest/commit/4db0263fd63274a8168eb4de17b320d2f86251a2) 支持 S3 请求者付费。; 拉取请求 [#2560](https://github.com/pgbackrest/pgbackrest/pull/2560)

  [`814bf48`](https://github.com/pgbackrest/pgbackrest/commit/814bf487c3955e877d226faaa22324d3c79863b2) 支持 GCS 请求者付费。; 拉取请求 [#2557](https://github.com/pgbackrest/pgbackrest/pull/2557)
- 支持 PostgreSQL 18。（*由 Stefan Fercot 审核。*）

  本版本发布时，PostgreSQL 18 尚未推出 beta 版，因此最初的支持属于实验性质。直到 PostgreSQL 18.0，均未出现影响 pgBackRest 的变更。

  拉取请求 [#2603](https://github.com/pgbackrest/pgbackrest/pull/2603); 提交 [`565d2e0`](https://github.com/pgbackrest/pgbackrest/commit/565d2e0c47cd21df890a40b3a94a8c865bed76d9)
- 允许通过抽象域套接字（abstract domain sockets）连接 PostgreSQL。（*测试：Chris Bandy. 建议：Chris Bandy.*）

  `pg-socket-path` 不再必须是绝对路径，因此可以指定抽象域套接字。无效路径由 libpq 报告。

  议题 [#2529](https://github.com/pgbackrest/pgbackrest/issues/2529); 拉取请求 [#2535](https://github.com/pgbackrest/pgbackrest/pull/2535); 提交 [`68f22ae`](https://github.com/pgbackrest/pgbackrest/commit/68f22aea6665b9dcbe76dbfaa731f37187e1ce20)
- 为 `version` 命令添加数字格式输出。（*由 Stefan Fercot 贡献，David Steele 审核。*）

  设置 `--output=num` 可将版本输出为数字，例如 2055000，便于比较。

  议题 [#2410](https://github.com/pgbackrest/pgbackrest/issues/2410); 拉取请求 [#2526](https://github.com/pgbackrest/pgbackrest/pull/2526); 提交 [`750a051`](https://github.com/pgbackrest/pgbackrest/commit/750a051b7aeccc3dd7ae9c07af2c73cb25057de9)

**改进：**

- 允许 `backup` 命令在远程仓库上运行。（*由 Stefan Fercot 审核。*）

  `backup` 命令现在可以在仓库位于远程的主机上运行，使备份的执行位置更加灵活。

  [`4a94b6b`](https://github.com/pgbackrest/pgbackrest/commit/4a94b6bef9108ab775c0070571a1fb7dd8883eeb) 重构协议辅助模块。

  [`931435c`](https://github.com/pgbackrest/pgbackrest/commit/931435c0177ded2189903385d520d5c8819c4f5e) 允许 backup 命令操作远程仓库。; 拉取请求 [#2512](https://github.com/pgbackrest/pgbackrest/pull/2512)
- 使用 lz4 进行协议压缩。（*由 Stefan Fercot 审核。*）

  在协议压缩所用的低压缩级别下，lz4 比 gz 快得多，压缩率却相近。设置 `compress-level-network=0` 不再禁用协议压缩。

  [`0577b03`](https://github.com/pgbackrest/pgbackrest/commit/0577b0301689bc19d49c4081cc652971de5da8cf) 使用 lz4 进行协议压缩。; 拉取请求 [#2488](https://github.com/pgbackrest/pgbackrest/pull/2488)

  [`5c8296d`](https://github.com/pgbackrest/pgbackrest/commit/5c8296df066564be35d3936610ebff1c332f38da) 移除文档中关于禁用网络压缩的说明。
- 仅在需要时才在 S3 上计算 `content-md5`。（*由 David Christensen 审核。*）

  为减少上传文件时的 CPU 开销，`content-md5` 请求头改为仅对必须使用它的批量删除请求计算。此变更已在 v2.55.1 中回退。

  拉取请求 [#2592](https://github.com/pgbackrest/pgbackrest/pull/2592); 提交 [`20bfd14`](https://github.com/pgbackrest/pgbackrest/commit/20bfd14b73ad6d75b6fb1169565b18dcfa183c9b)
- 多键选项的值被覆盖时，发出警告。（*由 David Christensen、Stefan Fercot 审核。*）

  对于键值对选项（例如 `recovery-option`），重复指定键时，此前会静默覆盖其值。现在会记录警告。

  议题 [#2591](https://github.com/pgbackrest/pgbackrest/issues/2591); 拉取请求 [#2594](https://github.com/pgbackrest/pgbackrest/pull/2594); 提交 [`cab4d6f`](https://github.com/pgbackrest/pgbackrest/commit/cab4d6fd5c775d6e1a9cd9889d825eee667b5322)
- 为已过期归档路径添加详细日志记录。（*由 Stefan Fercot 贡献，David Steele 审核。*）

  删除大量归档文件时，看起来可能像卡住。现在会以 detail 级别记录进度信息。

  [`4dcfa9e`](https://github.com/pgbackrest/pgbackrest/commit/4dcfa9ef59c5e75c6c0ee83390c64b9a3d4af1fc) 为 expire 测试添加 detail 级别日志。

  [`2155a12`](https://github.com/pgbackrest/pgbackrest/commit/2155a12a3d861645de5618518350f90962fbc26d) 为过期归档路径添加 detail 级别日志。; 议题 [#2543](https://github.com/pgbackrest/pgbackrest/issues/2543); 拉取请求 [#2559](https://github.com/pgbackrest/pgbackrest/pull/2559)
- 移除对 PostgreSQL `9.4` 的支持。（*由 Stefan Fercot 审核。*）

  按照支持五个已结束生命周期的 PostgreSQL 版本的策略，不再支持 PostgreSQL 9.4。仍可对 9.4 集群的备份执行过期处理。

  拉取请求 [#2472](https://github.com/pgbackrest/pgbackrest/pull/2472); 提交 [`48f511d`](https://github.com/pgbackrest/pgbackrest/commit/48f511dad339ef9357e00f7bd8e2bf4b7c800dd4)
- 移除 autoconf/make 构建方式。（*由 David Christensen 审核。*）

  v2.54.0 是最后一个支持 autoconf/make 构建的版本。请使用 meson 构建。

  拉取请求 [#2470](https://github.com/pgbackrest/pgbackrest/pull/2470); 提交 [`89c9bab`](https://github.com/pgbackrest/pgbackrest/commit/89c9baba72fc99616083a7adc4be2c3e2bf9e4dd)

**文档改进：**

- 修复为多个 stanza 指定 `tls-server-auth` 时的文档说明。（*由 David Christensen、Stefan Fercot 审核，Terry MacAndrew 建议。*）

  `tls-server-auth` 的多个 stanza 应以逗号分隔列表指定。此前文档误写为重复指定该选项。

  议题 [#2591](https://github.com/pgbackrest/pgbackrest/issues/2591); 拉取请求 [#2595](https://github.com/pgbackrest/pgbackrest/pull/2595); 提交 [`53a45d2`](https://github.com/pgbackrest/pgbackrest/commit/53a45d25c3e60e5067010b2676f5d6216638fbe3)
- 阐明增量备份的过期机制。（*由 Stefan Fercot 审核。*）

  此前文档让人误以为增量备份按数量过期。现在说明了增量备份的过期方式，以及在差异备份保留策略中，全量备份也计作差异备份。

  拉取请求 [#2601](https://github.com/pgbackrest/pgbackrest/pull/2601); 提交 [`8bdba74`](https://github.com/pgbackrest/pgbackrest/commit/8bdba747981e8805a9bf355050f70cdf19e9babc)
- 阐明本地与远程 pgBackRest 版本须保持一致的要求。（*由 Greg Clough 贡献，David Steele 审核。*）

  议题 [#2540](https://github.com/pgbackrest/pgbackrest/issues/2540); 拉取请求 [#2541](https://github.com/pgbackrest/pgbackrest/pull/2541); 提交 [`82299eb`](https://github.com/pgbackrest/pgbackrest/commit/82299eb4cd997524eeddef170ad99669ed6651cf)
- 新增关于导出自包含集群的常见问题解答。（*由 Stefan Fercot 贡献，David Steele 审核。*）

  FAQ 说明了如何使用 `--archive-copy` 创建备份，再通过 `--type=none` 恢复，以导出可独立使用的集群。

  拉取请求 [#2605](https://github.com/pgbackrest/pgbackrest/pull/2605); 提交 [`9386920`](https://github.com/pgbackrest/pgbackrest/commit/9386920b79971347c6c57589190bf09b591d8b4d)
- 补充 `--tablespace-map-all` 关于表空间创建的注意事项。（*由 Stefan Fercot、Christophe Courtois 审核，Christophe Courtois 建议。*）

  备份开始后新建的表空间不在清单中，因此 `tablespace-map-all` 无法映射它。

  拉取请求 [#2538](https://github.com/pgbackrest/pgbackrest/pull/2538); 提交 [`e625ed8`](https://github.com/pgbackrest/pgbackrest/commit/e625ed8be2228cb99c3801f9d1776909a2201c5a)
- 阐明 `--repo-retention-full-type` 的行为。（*由 Antoine Beaupré 审核，Antoine Beaupré 建议。*）

  议题 [#2562](https://github.com/pgbackrest/pgbackrest/issues/2562); 拉取请求 [#2583](https://github.com/pgbackrest/pgbackrest/pull/2583); 提交 [`84eb9a7`](https://github.com/pgbackrest/pgbackrest/commit/84eb9a742dcf75f071e011946263dedaa985099e)
- 将对象存储的 `--process-max` 建议改为使用 `--repo-bundle`。（*由 Stefan Fercot 审核。*）

  在对象存储上，`repo-bundle` 通过减少创建的文件数量，大幅缩短创建文件的耗时，其效果远大于 `process-max`。

  拉取请求 [#2542](https://github.com/pgbackrest/pgbackrest/pull/2542); 提交 [`aa7210a`](https://github.com/pgbackrest/pgbackrest/commit/aa7210a1830825e0a3e6b6740937357341127a6f)
- 将 `unix_socket_directory` 更新为 `unix_socket_directories`。（*由 hyunkyu han 贡献，David Steele 审核。*）

  `unix_socket_directory` 从 PostgreSQL 9.2 起已无效，因此文档仅保留 `unix_socket_directories`。

  议题 [#2589](https://github.com/pgbackrest/pgbackrest/issues/2589); 提交 [`b28ae98`](https://github.com/pgbackrest/pgbackrest/commit/b28ae98cec7ae7e881e6476c1cba1ba7e1abc358)
- 建议不要将 `spool-path` 置于 `pg_xlog`/`pg_wal` 目录内。（*由 Martín Marqués、Don Seiler 审核，Martín Marqués 建议。*）

  将 spool 路径放在 `pg_xlog` 或 `pg_wal` 内，可能给 `pg_rewind` 等 PostgreSQL 工具带来问题。

  拉取请求 [#2600](https://github.com/pgbackrest/pgbackrest/pull/2600); 提交 [`dd3a7d9`](https://github.com/pgbackrest/pgbackrest/commit/dd3a7d99a78d0d604967d90e8a8dbf8915432896)

### v2.54.2 版本说明

*漏洞修复*

*发布于 2025 年 1 月 20 日*

**漏洞修复：**

- 修复在启用块级增量的情况下禁用 bundling 后出现的问题。（*由 David Christensen 审核。*）

  在启用文件打包和块级增量的情况下创建备份后，如果禁用了打包，就无法读取之前的备份。现在会保留读取它们所需的设置。

  拉取请求 [#2511](https://github.com/pgbackrest/pgbackrest/pull/2511); 提交 [`dbc6f28`](https://github.com/pgbackrest/pgbackrest/commit/dbc6f2875356ec16cf4883830a0d7b00204752ee)

**文档改进：**

- 阐明多个配置文件的行为方式。（*由 Paul Bierly 审核，Paul Bierly 建议。*）

  每个配置文件必须独立有效，因此在某个文件中设置选项时，必须在该文件中声明所属配置节。文档还说明：不支持引号，键和值两端的空白会被去除，重复的配置节会合并。

  提交 [`5da2df4`](https://github.com/pgbackrest/pgbackrest/commit/5da2df4a933f04d5fb9a3b6c7c59529f3afa805b)

### v2.54.1 版本说明

*漏洞修复*

*发布于 2024 年 12 月 16 日*

**漏洞修复：**

- 修复 `version`/`help` 命令尝试加载 `pgbackrest.conf` 的问题。（*由 Stefan Fercot 审核，Bradford Boyle、Julian 报告。*）

  在 v2.54.0 中，`version` 和 `help` 命令会加载 `pgbackrest.conf`，无法读取或解析时就会失败。

  议题 [#2476](https://github.com/pgbackrest/pgbackrest/issues/2476); 拉取请求 [#2477](https://github.com/pgbackrest/pgbackrest/pull/2477); 提交 [`8d69118`](https://github.com/pgbackrest/pgbackrest/commit/8d6911898afd75c586ef70c6d8559b1e5959a155)

**测试套件改进：**

- 稳定集成测试中的异步归档功能。（*由 Viktor Kurilko 贡献，David Steele 审核。*）

  某个集成测试遗留运行的异步 `archive-get`，可能将错误写入下一个测试的队列，导致其恢复失败。

  议题 [#2463](https://github.com/pgbackrest/pgbackrest/issues/2463); 拉取请求 [#2481](https://github.com/pgbackrest/pgbackrest/pull/2481); 提交 [`b90ce9e`](https://github.com/pgbackrest/pgbackrest/commit/b90ce9eb8c7cd9e9b131477a377249a3d3fda181)

### v2.54.0 版本说明

*版本化存储的目标时间点*

*发布于 2024 年 10 月 21 日*

**打包者注意**：这是最后一个支持 autoconf/make 构建方式的功能版本。如尚未迁移，请迁移到 meson。2.54.X 补丁版本（如有）将继续支持 autoconf/make。

**漏洞修复：**

- 修复大型数据集上的 PostgreSQL 查询性能问题。（*修复：Thibault Vincent, David Steele. 审核：David Christensen. 测试：Antoine Millet. 报告：Antoine Millet.*）

  查询超时逻辑延迟了读取查询结果，导致返回大量结果的查询耗时可能达到 `db-timeout`。现在会在结果可用后立即读取。

  [`6ac4e8d`](https://github.com/pgbackrest/pgbackrest/commit/6ac4e8dd78f16e93300f7747c4bc8fa8e1a0558b) 将 fd 模块的测试替身移到 io 模块测试中。

  [`77ae753`](https://github.com/pgbackrest/pgbackrest/commit/77ae753ef59bd40b9867be21e8519093786c3b85) 允许 fdReady() 测试替身仅执行一次，并返回指定值。

  [`33fa396`](https://github.com/pgbackrest/pgbackrest/commit/33fa3965616b1432e5d1d59c489302fa4891a39e) 重构 Wait 对象，通过 waitRemains() 暴露剩余等待时间。

  [`c8ccaaa`](https://github.com/pgbackrest/pgbackrest/commit/c8ccaaa755993e3fd5e87148bd0a991acb3050c3) 修复大数据集下的 PostgreSQL 查询性能问题。; 议题 [#2458](https://github.com/pgbackrest/pgbackrest/issues/2458); 拉取请求 [#2459](https://github.com/pgbackrest/pgbackrest/pull/2459)

**新功能：**

- 允许在版本化存储（versioned storage）上的仓库中按目标时间点读取数据。（*由 Stefan Fercot、David Christensen 审核。*）

  `archive-get`、`info`、`repo-get`、`repo-ls`、`restore` 和 `verify` 命令可以读取启用版本管理的 Azure、GCS 或 S3 存储中，仓库在 `repo-target-time` 时刻的状态。即使仓库被意外或恶意删除、损坏，也能据此恢复。

  拉取请求 [#2404](https://github.com/pgbackrest/pgbackrest/pull/2404); 提交 [`b19134d`](https://github.com/pgbackrest/pgbackrest/commit/b19134dccd5d0dab87b5d45b443f481df00370b1)
- 允许在没有备库的情况下继续执行已请求的备库备份。（*由 Stefan Fercot 审核。*）

  设置 `backup-standby=prefer` 后，备库可用时从备库备份，否则从主库备份。如果备库能够响应，但备份开始后无法与主库同步，此设置无济于事。

  拉取请求 [#2378](https://github.com/pgbackrest/pgbackrest/pull/2378); 提交 [`a42629f`](https://github.com/pgbackrest/pgbackrest/commit/a42629f87ab70ffaee8d1241eb50c5ea7154a87d)

**改进：**

- 在 `info` 命令文本输出中汇总备份引用列表。（*由 Stefan Fercot 贡献，David Steele 审核。*）

  备份引用列表可能很长，因此 `info` 命令的文本输出现在会对其进行汇总。指定 `--set` 时仍显示完整列表。

  拉取请求 [#2399](https://github.com/pgbackrest/pgbackrest/pull/2399); 提交 [`b306f83`](https://github.com/pgbackrest/pgbackrest/commit/b306f83493cc859ad15c8f175fc6db2321b79340)
- 每次 S3 认证时刷新 web-id 令牌。（*由 Brent Graveland 贡献，David Steele 审核。*）

  `AWS_WEB_IDENTITY_TOKEN_FILE` 指定的令牌文件此前仅在启动时读取一次，因此令牌可能在长时间操作期间过期。现在每次认证都会读取令牌。

  议题 [#2428](https://github.com/pgbackrest/pgbackrest/issues/2428); 拉取请求 [#2429](https://github.com/pgbackrest/pgbackrest/pull/2429); 提交 [`95a4b9e`](https://github.com/pgbackrest/pgbackrest/commit/95a4b9e10a3f7a26ebaae22fc6abd79cee14189a)
- 在帮助信息中正确显示索引选项的当前值。（*由 David Christensen 审核。*）

  索引选项显示的当前值此前始终是第一个索引的值，例如 `pg1-path`。选项帮助现在会列出每个索引的值；如果有多个值，选项列表会显示 `<multi>`。

  拉取请求 [#2453](https://github.com/pgbackrest/pgbackrest/pull/2453); 提交 [`b3ca2e3`](https://github.com/pgbackrest/pgbackrest/commit/b3ca2e34823b28862d999f87c4d7346707952a5b)
- 仅在内容发生变化时才保存 `backup.info`。（*由 Stefan Fercot 审核。*）

  即使 `backup.info` 未发生变化，`expire` 此前也会保存它。减少保存次数还使版本化存储上的目标时间更容易选择。

  拉取请求 [#2403](https://github.com/pgbackrest/pgbackrest/pull/2403); 提交 [`b454b9e`](https://github.com/pgbackrest/pgbackrest/commit/b454b9e403526b1f352df964d9206c27d2397df3)
- 移除恢复过程中并行读取文件的数量限制。（*由 David Christensen 审核。*）

  此前协议一次只能在远端读写一个文件，因此恢复也只能逐个读取仓库文件。现在协议命令可以复用同一连接交错执行，使恢复能够同时读取多个文件，例如一个文件包及其中某个文件的块级增量数据。

  [`df8cbc9`](https://github.com/pgbackrest/pgbackrest/commit/df8cbc91c348bc2f746767c87ac5626460fb6f39) 协议命令多路复用。; 拉取请求 [#2108](https://github.com/pgbackrest/pgbackrest/pull/2108)

  [`46c1297`](https://github.com/pgbackrest/pgbackrest/commit/46c1297be344909e900be596a865064233da9f87) 移除恢复期间并行读取文件的限制。; 拉取请求 [#2436](https://github.com/pgbackrest/pgbackrest/pull/2436)
- 改进 SFTP 错误信息。（*由 Reid Thompson 贡献，David Steele 审核。*）

  SFTP 错误此前仅以数字报告，现在还会包含错误描述。

  拉取请求 [#2439](https://github.com/pgbackrest/pgbackrest/pull/2439); 提交 [`70bda2c`](https://github.com/pgbackrest/pgbackrest/commit/70bda2cfb21130eb589a87cb419fb5f22a71c78a)

**文档新功能：**

- 在用户指南中添加性能调优章节。（*由 Stefan Fercot 审核。*）

  常用的性能优化选项此前散落在文档各处。快速入门现在增加了专门列出这些选项的章节。

  拉取请求 [#2446](https://github.com/pgbackrest/pgbackrest/pull/2446); 提交 [`278319e`](https://github.com/pgbackrest/pgbackrest/commit/278319eba3444070123d3f0f277be9234604d937)

**文档改进：**

- 阐明 `data_directory` 的来源。（*由 Stefan Fercot 贡献，David Steele 审核，Matthias 建议。*）

  `pg-path` 应与 PostgreSQL 报告的 `data_directory` 一致，该值可能不同于 `postgresql.conf` 中的设置。

  议题 [#2464](https://github.com/pgbackrest/pgbackrest/issues/2464); 拉取请求 [#2467](https://github.com/pgbackrest/pgbackrest/pull/2467); 提交 [`9ba2db0`](https://github.com/pgbackrest/pgbackrest/commit/9ba2db017348d304f96ce89592fc01f29197e136)
- 优化摘要（summary）是否使用小写的判断逻辑。（*由 Daniel Westermann 建议。*）

  文档中以专有名称或缩写（例如 PostgreSQL）开头的摘要，不再被转换为小写。

  议题 [#2462](https://github.com/pgbackrest/pgbackrest/issues/2462); 提交 [`eb2f279`](https://github.com/pgbackrest/pgbackrest/commit/eb2f279a2998d1ed893c5d8984590ab4997a5f32)

### v2.53.1 版本说明

*PostgreSQL 17 支持*

*发布于 2024 年 8 月 19 日*

**漏洞修复：**

- 修复以 root 用户运行 `restore` 时的权限问题。（*由 Stefan Fercot 审核，Will M. 报告。*）

  以 root 运行 `restore` 时，`pg_control` 的所有者会被设为 root。如果基础路径不存在，以 root 执行恢复也会失败。

  议题 [#2407](https://github.com/pgbackrest/pgbackrest/issues/2407); 拉取请求 [#2416](https://github.com/pgbackrest/pgbackrest/pull/2416); 提交 [`7bd8da4`](https://github.com/pgbackrest/pgbackrest/commit/7bd8da4eecb0ce1461854414b727606a5e884edf)
- 修复延迟连接报错时的段错误。（*由 David Christensen 审核，Anton Glushakov 报告。*）

  如果连接错误延迟到后续等待时才被报告，就可能导致段错误。

  议题 [#2420](https://github.com/pgbackrest/pgbackrest/issues/2420); 拉取请求 [#2422](https://github.com/pgbackrest/pgbackrest/pull/2422); 提交 [`377ba06`](https://github.com/pgbackrest/pgbackrest/commit/377ba062ac81867dca6197265688deb0111ae81a)
- 跳过 SFTP 的本地仓库重复检查。（*由 Reid Thompson 修复，David Steele 审核，Anton Kurochkin 报告。*）

  检查本地仓库是否被重复配置的逻辑，此前也应用于 SFTP 仓库，而 SFTP 仓库始终是远程仓库。

  议题 [#2418](https://github.com/pgbackrest/pgbackrest/issues/2418); 拉取请求 [#2421](https://github.com/pgbackrest/pgbackrest/pull/2421); 提交 [`9840304`](https://github.com/pgbackrest/pgbackrest/commit/98403046ed6af4c54fa2f572ecf9c211f94b67db)

**改进：**

- 支持 PostgreSQL 17。

  PostgreSQL 17beta3 更改了控制文件和 WAL 格式，这在 beta 版中并不常见。

  提交 [`189d15d`](https://github.com/pgbackrest/pgbackrest/commit/189d15d1a640e31aac5ffbbd0fb06eb9eed8b576)

### v2.53 版本说明

*并发备份*

*发布于 2024 年 7 月 22 日*

**重要说明**：`log-level-stderr` 选项的默认值已从 `warn` 改为 `off`，使仅重定向 `stdout` 时更容易捕获错误。若要保留此前的行为，请设置 `log-level-stderr=warn`。<br/> <br/> **打包维护者注意**：meson 构建现在要求安装 lz4 库。<br/> <br/> **打包维护者注意**：meson 构建现在要求编译器支持 `__builtin_clzl()` 和 `__builtin_bswap64()`。

**漏洞修复：**

- 修复文件已存在时 SFTP 重命名失败的问题。（*由 Reid Thompson 修复，David Steele 审核，ahmed112212 报告。*）

  某些 SFTP 服务器使用此前未处理的错误来报告文件已存在，因此将文件重命名为已有文件名时会失败。

  议题 [#2376](https://github.com/pgbackrest/pgbackrest/issues/2376); 拉取请求 [#2377](https://github.com/pgbackrest/pgbackrest/pull/2377); 提交 [`d6f0bf8`](https://github.com/pgbackrest/pgbackrest/commit/d6f0bf88af8b39492aa8e20c09bdf30260e2eb2f)

**新功能：**

- 允许在不同仓库上并发执行备份。（*由 Reid Thompson、Stefan Fercot 审核。*）

  锁现在按 stanza 和仓库划分，不再仅按 stanza 划分，因此同一 stanza 的备份可以同时在不同仓库运行。PostgreSQL <= 9.5 不支持这种方式。

  [`270dce4`](https://github.com/pgbackrest/pgbackrest/commit/270dce41b6fff0d0ad0769b0ea5df0011140f0b9) 重构锁模块。; 拉取请求 [#2371](https://github.com/pgbackrest/pgbackrest/pull/2371)

  [`cfb8aa2`](https://github.com/pgbackrest/pgbackrest/commit/cfb8aa202ee972579697db2cc8d5d8ef111f0022) 为 31c7824a 遗漏的 stanza 命令添加远程锁。

  [`edd6163`](https://github.com/pgbackrest/pgbackrest/commit/edd61636a98d193b7c0634b5a4444527132959e0) 允许备份在不同仓库并发运行。; 拉取请求 [#2389](https://github.com/pgbackrest/pgbackrest/pull/2389)
- 支持基于 IP 的 SAN（主题备用名称）用于 TLS 证书验证。（*由 David Christensen 贡献，David Steele 审核。*）

  现在支持验证主题备用名称为 IP 地址的证书，例如 `IP:1.2.3.4`。IPv4 和 IPv6 地址都必须精确匹配。

  议题 [#1977](https://github.com/pgbackrest/pgbackrest/issues/1977); 拉取请求 [#2047](https://github.com/pgbackrest/pgbackrest/pull/2047); 提交 [`dfb620b`](https://github.com/pgbackrest/pgbackrest/commit/dfb620b0b8cf884ca486b413f4cd162e258b2fc5)

**改进：**

- 将 `log-level-stderr` 选项默认值设为 `off`。（*由 Greg Sabino Mullane、Stefan Fercot 审核。*）

  收集日志时如果仅重定向 stdout，写入 stderr 的警告和错误往往会丢失。显式设置的 `log-level-stderr` 不受影响。

  拉取请求 [#2379](https://github.com/pgbackrest/pgbackrest/pull/2379); 提交 [`7d54073`](https://github.com/pgbackrest/pgbackrest/commit/7d540730941994d3cb630c695e9f672e047d8e7f)
- 允许 PostgreSQL <= 10 使用非默认 WAL 段大小。（*由 Viktor Kurilko 贡献，David Steele 审核。*）

  PostgreSQL <= 10 可以在构建时使用不同的 WAL 段大小，Greenplum 等分支则通过 `initdb` 设置。

  拉取请求 [#2303](https://github.com/pgbackrest/pgbackrest/pull/2303); 提交 [`4ac3b82`](https://github.com/pgbackrest/pgbackrest/commit/4ac3b82c99ff3bd48d2cc74651a47ce072ac0022)
- 新增检查 SFTP 授权日志的提示信息。（*由 Vitalii Zurian 贡献，Reid Thompson、David Steele 审核。*）

  SFTP 认证失败时，错误现在会提示服务器上的授权日志可能包含更多详情。

  议题 [#2381](https://github.com/pgbackrest/pgbackrest/issues/2381); 拉取请求 [#2385](https://github.com/pgbackrest/pgbackrest/pull/2385); 提交 [`ccae609`](https://github.com/pgbackrest/pgbackrest/commit/ccae60940241b30e8bc3e405936b6ba68857930c)
- 使用合适的单位显示时间选项的默认值和允许值。

  时间选项的默认值和允许值此前以秒显示，较大的值难以阅读。现在不再允许小数秒，因此 `archive-timeout=0.5` 这样的值必须改写为 `archive-timeout=500ms`。

  提交 [`3a2266f`](https://github.com/pgbackrest/pgbackrest/commit/3a2266f327c340ff1133a6a2398429c844b5755d)
- 要求 OpenSSL >= 1.1.1。

  提交 [`cf8625d`](https://github.com/pgbackrest/pgbackrest/commit/cf8625d24bd953ad1ed448c32b937584009e5b6b)

**文档改进：**

- 阐明 `archive-push` 多仓库模式的行为。（*由 Stefan Fercot 审核。*）

  某个仓库发生故障时，除非启用 `archive-async`，否则 `archive-push` 无法继续向其他仓库推送。

  拉取请求 [#2398](https://github.com/pgbackrest/pgbackrest/pull/2398); 提交 [`ec3e387`](https://github.com/pgbackrest/pgbackrest/commit/ec3e387bb73826c30b32bf0221acb2d56f23f1c5)

### v2.52.1 版本说明

*漏洞修复*

*发布于 2024 年 6 月 25 日*

**漏洞修复：**

- 修复副本上的文件大于主库对应文件时出现的问题。（*由 Stefan Fercot 审核，Nicolas Lassimonne 报告。*）

  使用块级增量从备库备份时，如果某个文件在主库和备库上的大小不同，下一次差异或增量备份会存储主库上的大小。再下一次备份就会因 "repo size must be > 0" 而失败。

  [`83aaa86`](https://github.com/pgbackrest/pgbackrest/commit/83aaa868ef396348bf96589457f13c1805b25cb6) 添加使用块级增量从备库备份的单元测试。

  [`aabc122`](https://github.com/pgbackrest/pgbackrest/commit/aabc122021a582e9d0193f978cf710cff95c2bee) 修复文件在副本上比主库上更大时的问题。; 议题 [#2358](https://github.com/pgbackrest/pgbackrest/issues/2358); 拉取请求 [#2367](https://github.com/pgbackrest/pgbackrest/pull/2367)

### v2.52 版本说明

*PostgreSQL 17beta1 支持*

*发布于 2024 年 5 月 27 日*

**打包者注意**：pgBackRest 的构建系统现已切换为 meson。autoconf/make 构建将不再接收新功能，并将在后续版本中移除。

**新功能：**

- 新增 GCS 批量删除支持。（*由 Reid Thompson 审核。*）

  文件改为通过批量请求删除，不再为每个文件单独发出请求，可加快 `expire` 等从仓库删除文件的命令。

  拉取请求 [#2326](https://github.com/pgbackrest/pgbackrest/pull/2326); 提交 [`76bcb74`](https://github.com/pgbackrest/pgbackrest/commit/76bcb740b66f64804dbbf5a2a6be6407f9cec376)
- 支持 S3 `SSE-C` 加密。（*由 Tim Jones 审核，Tim Jones 建议。*）

  设置 `repo-s3-sse-customer-key` 可让 S3 在数据传输完成后，用提供的密钥加密数据。这不如通过 `repo-cipher-type` 在传输前加密安全。

  议题 [#2279](https://github.com/pgbackrest/pgbackrest/issues/2279); 拉取请求 [#2282](https://github.com/pgbackrest/pgbackrest/pull/2282); 提交 [`57731b6`](https://github.com/pgbackrest/pgbackrest/commit/57731b6cd261c732041aacc094429ab02ca13418)
- 支持 PostgreSQL 17beta1。（*由 Stefan Fercot 审核。*）

  添加 PostgreSQL 17 的目录版本和 WAL 魔数。

  拉取请求 [#2328](https://github.com/pgbackrest/pgbackrest/pull/2328); 提交 [`fb22f04`](https://github.com/pgbackrest/pgbackrest/commit/fb22f04555fecfa143354372ec3543ab186c131d)

**改进：**

- 允许在 meson 构建中显式禁用可选依赖项。（*由 Michael Schout 贡献，David Steele 审核。*）

  即使相应库已安装，meson 构建也可以禁用可选功能，以满足 FreeBSD 等平台的要求。默认情况下，找到库便启用相应功能。

  拉取请求 [#2321](https://github.com/pgbackrest/pgbackrest/pull/2321); 提交 [`7b95fd3`](https://github.com/pgbackrest/pgbackrest/commit/7b95fd3bd29346e7325aa161bfee45efd71e22eb)
- 在 meson 构建中动态查找 python。（*由 Michael Schout 贡献，David Steele 审核。*）

  meson 构建现在会查找 Python 安装，而非要求 PATH 中必须存在 `python3` 可执行文件，例如只安装了 `python3.9` 时也能构建。meson 最低版本现在为 0.47。

  [`55e9969`](https://github.com/pgbackrest/pgbackrest/commit/55e996912aa57d39ea21f5dc905b7acabe93b0f8) 将 meson 最低版本提高到 0.47。

  [`e00e33b`](https://github.com/pgbackrest/pgbackrest/commit/e00e33b52856a63e82552ccc12df235d1a7f6f17) 在 meson 构建中动态查找 Python。; 拉取请求 [#2338](https://github.com/pgbackrest/pgbackrest/pull/2338)
- 在 meson 中将 `pgbackrest` 构建目标标记为可安装。（*由 Bradford Boyle 贡献，David Steele 审核。*）

  拉取请求 [#2312](https://github.com/pgbackrest/pgbackrest/pull/2312); 提交 [`7877983`](https://github.com/pgbackrest/pgbackrest/commit/7877983acb3b1a27e900f7e7aea89cb7b29a817d)

**文档改进：**

- 更新 `start`/`stop` 文档，以反映实际功能。（*由 Stefan Fercot 审核。*）

  议题 [#2325](https://github.com/pgbackrest/pgbackrest/issues/2325); 议题 [#2334](https://github.com/pgbackrest/pgbackrest/issues/2334); 拉取请求 [#2352](https://github.com/pgbackrest/pgbackrest/pull/2352); 提交 [`b6ac11b`](https://github.com/pgbackrest/pgbackrest/commit/b6ac11beec920fe978994c0d018c380477199ca8)

### v2.51 版本说明

*Meson 构建系统*

*发布于 2024 年 3 月 25 日*

**漏洞修复：**

- 跳过块级增量 delta 恢复中的零长度文件。（*由 Sebastian Krause、René Højbjerg Larsen 审核，Sebastian Krause 报告。*）

  已存在的零长度文件会使块级增量 delta 恢复在块校验和过滤器中失败。由于这些文件没有可复用的内容，现在会跳过它们。

  议题 [#2271](https://github.com/pgbackrest/pgbackrest/issues/2271); 拉取请求 [#2272](https://github.com/pgbackrest/pgbackrest/pull/2272); 提交 [`f7a7ab1`](https://github.com/pgbackrest/pgbackrest/commit/f7a7ab16c9652179945717ebf9b68af3aa8a0b0e)
- 修复存储列表中的性能回归问题。（*由 Stephen Frost 审核，Maksym Boguk 报告。*）

  列出路径时，此前会请求每个文件的详细信息，在对象存储等场景下可能很慢。现在只请求列表所需的信息。

  议题 [#2275](https://github.com/pgbackrest/pgbackrest/issues/2275); 拉取请求 [#2276](https://github.com/pgbackrest/pgbackrest/pull/2276); 提交 [`e00bfe2`](https://github.com/pgbackrest/pgbackrest/commit/e00bfe2d2c3f124b2883e3c2d169a2ce506a1e98)
- 修复备份期间文件大小发生变化时的进度日志记录问题。（*由 Stephen Frost 审核，samkingno 报告。*）

  议题 [#2298](https://github.com/pgbackrest/pgbackrest/issues/2298); 拉取请求 [#2304](https://github.com/pgbackrest/pgbackrest/pull/2304); 提交 [`76956e7`](https://github.com/pgbackrest/pgbackrest/commit/76956e71cfa3044867213bd65a6f22e96120c108)

**改进：**

- 改进双栈连接（dual stack）支持。（*由 Stephen Frost 审核，Timothée Peignier 建议。*）

  主机名解析出多个地址（例如 IPv4 和 IPv6）时，会遵循 RFC 8305 的“Happy Eyeballs”方式：给前一个地址合理的连接时间后，就尝试下一个地址。不失败也未连接成功的尝试，不再耗尽全部可用时间。

  议题 [#2154](https://github.com/pgbackrest/pgbackrest/issues/2154); 拉取请求 [#2235](https://github.com/pgbackrest/pgbackrest/pull/2235); 提交 [`7448fde`](https://github.com/pgbackrest/pgbackrest/commit/7448fde157c6d22f57b90c0cef11957b0aadf4b3)
- 将 meson 作为主要构建系统。（*由 Stephen Frost 审核。*）

  测试和文档构建现在使用 meson 构建系统。模块外不使用的函数现在会隐藏，可减小二进制文件体积。

  [`e3d9df3`](https://github.com/pgbackrest/pgbackrest/commit/e3d9df3ae9669ee5749b970d59f8afeb20fd3d9d) 将 meson 设为主要构建系统。; 拉取请求 [#2264](https://github.com/pgbackrest/pgbackrest/pull/2264)

  [`f287178`](https://github.com/pgbackrest/pgbackrest/commit/f287178b705cc90aa887d66c932e2a223029649b) 将函数和变量的可见性设为隐藏。; 拉取请求 [#2265](https://github.com/pgbackrest/pgbackrest/pull/2265)
- 在非 delta 增量备份期间检测未发生变化的文件。（*由 Stephen Frost 审核。*）

  执行不启用 delta 的差异或增量备份时，如果文件可容纳于单个缓冲区，或它是块级增量文件，就会与前一次备份中的文件比较；若未改变，则仅引用它，不再重新存储。

  拉取请求 [#2257](https://github.com/pgbackrest/pgbackrest/pull/2257); 提交 [`9d91d1b`](https://github.com/pgbackrest/pgbackrest/commit/9d91d1b2f817b543fc8d970af56d1442c325ed7c)
- 防止因移除 `backup_label` 而导致无效恢复。（*由 Stephen Frost 审核。*）

  如果从已恢复的集群中删除 `backup_label`，PostgreSQL 会使用 `pg_control` 中的检查点执行崩溃恢复，几乎总会导致集群损坏。恢复现在会将 `pg_control` 中的检查点设为无效，使后续恢复报错，而非造成损坏。`pg_controldata` 会将该检查点显示为 `0/DEAD`。

  拉取请求 [#2232](https://github.com/pgbackrest/pgbackrest/pull/2232); 提交 [`e634fd8`](https://github.com/pgbackrest/pgbackrest/commit/e634fd85cedc1ae3aef7c4fa2556d7d73d05cb8a)
- 改进 `archive-push` 的 WAL 段队列处理。（*由 Stephen Frost 审核。*）

  此前会读取队列中每个 WAL 段的大小来计算队列大小。现在统一使用第一个段的大小。

  拉取请求 [#2277](https://github.com/pgbackrest/pgbackrest/pull/2277); 提交 [`cf17515`](https://github.com/pgbackrest/pgbackrest/commit/cf17515e409440eecfb04bf7186790d8baa8ab12)
- 将恢复继续（resume）功能限制为全量备份。（*由 Stephen Frost、Stefan Fercot 审核。*）

  启用 delta 的差异和增量备份无法正确续传，且自前一次备份后发生变化的文件，在续传前很可能再次改变。现在仅允许全量备份续传。

  拉取请求 [#2268](https://github.com/pgbackrest/pgbackrest/pull/2268); 提交 [`dddcbcd`](https://github.com/pgbackrest/pgbackrest/commit/dddcbcd8e9a1cae578b0cc5bb2d1aa768330f3c5)
- 更新块级增量备份的恢复继续功能。（*由 Stephen Frost 审核。*）

  续传此前会移除块级增量文件，因此虽然能够工作，却会重新复制所有这些文件。现在续传时会保留块级增量文件。

  拉取请求 [#2296](https://github.com/pgbackrest/pgbackrest/pull/2296); 提交 [`ff47450`](https://github.com/pgbackrest/pgbackrest/commit/ff47450402fde5ebc64a08d31791551bee52200e)
- 支持使用 `--version` 和 `--help` 查看版本和帮助信息。（*由 Greg Sabino Mullane 审核，Greg Sabino Mullane 建议。*）

  `--version` 和 `--help` 现在与大多数程序的行为一致。查看特定命令或选项的帮助时，请使用 `help`。

  拉取请求 [#2263](https://github.com/pgbackrest/pgbackrest/pull/2263); 提交 [`68db307`](https://github.com/pgbackrest/pgbackrest/commit/68db3075d7ac4a48377967ad54e45b95b9ee6c61)
- 为 autoconf/make 构建添加详细的回溯（backtrace）信息。（*由 Stephen Frost 审核。*）

  autoconf/make 构建中的错误堆栈跟踪现在包含 libbacktrace 提供的详情；性能测试表明，这不会产生明显开销。

  拉取请求 [#1970](https://github.com/pgbackrest/pgbackrest/pull/1970); 提交 [`676700d`](https://github.com/pgbackrest/pgbackrest/commit/676700d8ca6f2e0e0ab8123aa9606c8ec7aa81ae)

**文档改进：**

- 更新对 `recovery.conf` 的引用说明。（*由 Stefan Fercot 审核，Stephen Frost 建议。*）

  提到 `recovery.conf` 的地方现在也包含新版 PostgreSQL 使用的 `postgresql.auto.conf`。

  拉取请求 [#2281](https://github.com/pgbackrest/pgbackrest/pull/2281); 提交 [`6835178`](https://github.com/pgbackrest/pgbackrest/commit/68351785f6816a23526900db595557cf6e3a0056)

### v2.50 版本说明

*性能改进与漏洞修复*

*发布于 2024 年 1 月 22 日*

**漏洞修复：**

- 修复块级增量恢复中的短读（short read）问题。（*审核：Stephen Frost. 测试：Brent Graveland. 报告：Adol Rodriguez, Brent Graveland.*）

  压缩超级块的末尾可能带有标记数据结束的字节，虽然解压本身不需要这些字节。根据缓冲区与数据的对齐方式，这些字节可能未被读取，导致恢复失败。

  议题 [#2215](https://github.com/pgbackrest/pgbackrest/issues/2215); 议题 [#2238](https://github.com/pgbackrest/pgbackrest/issues/2238); 拉取请求 [#2256](https://github.com/pgbackrest/pgbackrest/pull/2256); 提交 [`f4a4af2`](https://github.com/pgbackrest/pgbackrest/commit/f4a4af299bee93ab7dde599ccdb35becc1c2afad)
- 修复 `info` 输出中因备份进度溢出导致的显示错误。（*由 Robert Donovan 修复，Joe Wildish 审核。*）

  锁文件中的大小此前按 32 位值读取，因此 `info` 命令无法报告超过 4GiB 的备份进度。

  议题 [#2251](https://github.com/pgbackrest/pgbackrest/issues/2251); 拉取请求 [#2252](https://github.com/pgbackrest/pgbackrest/pull/2252); 提交 [`25f1489`](https://github.com/pgbackrest/pgbackrest/commit/25f14898babf4ad78baef3e8343933a863633975)

**改进：**

- 在块级增量 delta 恢复期间保留部分文件。（*由 Stephen Frost 审核。*）

  小于预期的文件此前不会在块级增量 delta 恢复中保留，尽管其数据块可以复用，例如重试失败的恢复，或覆盖较小文件进行恢复时。

  拉取请求 [#2254](https://github.com/pgbackrest/pgbackrest/pull/2254); 提交 [`a42614e`](https://github.com/pgbackrest/pgbackrest/commit/a42614e8f3a9e6871c16331f01c2cd765ab181aa)
- 新增对备用编译时页面大小的支持。（*由 Viktor Kurilko 贡献，David Steele 审核。*）

  PostgreSQL 可以使用不同的页面大小构建，例如 4096，Greenplum 等分支便采用这种方式。

  拉取请求 [#2197](https://github.com/pgbackrest/pgbackrest/pull/2197); 提交 [`89d5278`](https://github.com/pgbackrest/pgbackrest/commit/89d5278b74ab0d880345575d7ac4c239cd1fce54)
- 使用 bundling 时，跳过备份期间被截断的文件。（*由 Georgy Shelkovy 贡献，David Steele 审核。*）

  文件分配到文件包后，如果被截断为零长度，此前仍会存入包中，在调试构建中触发断言失败。现在会跳过这些文件。

  [`02eea55`](https://github.com/pgbackrest/pgbackrest/commit/02eea555c7169e99892fdbc8ce7cc1ee59f50509) 文件打包时跳过备份期间被截断的文件。; 拉取请求 [#2227](https://github.com/pgbackrest/pgbackrest/pull/2227)

  [`c879509`](https://github.com/pgbackrest/pgbackrest/commit/c8795094d418802a0e24d4d19da66973c71b00e5) 允许 backupFile() 返回 const 校验和缓冲区。

  [`9049fec`](https://github.com/pgbackrest/pgbackrest/commit/9049fec2c02c4110e16ffdff7b56f83d8ff32b4a) 重构文件打包时跳过备份期间被截断文件的逻辑。

  [v2.49](#v249-release-notes) 中的开发变更：

  [`337da35`](https://github.com/pgbackrest/pgbackrest/commit/337da35ab278e058ec4cdffeb4319f1a1e2cb0df) 添加测试，展示打包文件在备份期间被截断时的行为。
- 改进 SFTP 存储错误信息。（*由 Reid Thompson 贡献，David Steele 审核。*）

  拉取请求 [#2249](https://github.com/pgbackrest/pgbackrest/pull/2249); 提交 [`7c17eec`](https://github.com/pgbackrest/pgbackrest/commit/7c17eec3db455d3e8e660f4f8247b6975517648f)

<span id="v249-release-notes"></span>

### v2.49 版本说明

*移除 PostgreSQL 9.3 支持*

*发布于 2023 年 11 月 27 日*

**漏洞修复：**

- 修复重试机制的回归问题。（*由 Stephen Frost 审核，Norman Adkins、Tanel Suurhans、Jordan English、Timothée Peignier 报告。*）

  v2.48 移除了操作耗尽整个超时时间后的一次重试，导致超时直接变成错误，例如等待对象存储套接字可写时。现在即使超时已到，也会再重试两次。

  [`3c116e1`](https://github.com/pgbackrest/pgbackrest/commit/3c116e1829a0df62aaf50ce241c63d829eb438e0) 移除未使用的头文件。

  [`fa5b2d4`](https://github.com/pgbackrest/pgbackrest/commit/fa5b2d44ad9f7591517eecaaaaeb07e9500dd51c) 修复重试行为的回归问题。; 议题 [#2200](https://github.com/pgbackrest/pgbackrest/issues/2200); 议题 [#2214](https://github.com/pgbackrest/pgbackrest/issues/2214); 拉取请求 [#2221](https://github.com/pgbackrest/pgbackrest/pull/2221)
- 修复 SFTP 存储驱动中递归路径删除的问题。（*由 Reid Thompson 修复，Stephen Frost 审核，Luc 报告。*）

  某些 SFTP 服务器在试图把目录当作文件解除链接时，会报告权限不足而非一般失败，导致在这些服务器上递归删除路径失败。

  议题 [#2219](https://github.com/pgbackrest/pgbackrest/issues/2219); 拉取请求 [#2226](https://github.com/pgbackrest/pgbackrest/pull/2226); 提交 [`c4dc466`](https://github.com/pgbackrest/pgbackrest/commit/c4dc4665f88e9d67a3b66f44cd59d6dd4bb5107f)

**改进：**

- 移除对 PostgreSQL `9.3` 的支持。（*由 Stephen Frost 审核。*）

  按照支持五个已结束生命周期的 PostgreSQL 版本的策略，不再支持 PostgreSQL 9.3。

  拉取请求 [#2220](https://github.com/pgbackrest/pgbackrest/pull/2220); 提交 [`dcf0781`](https://github.com/pgbackrest/pgbackrest/commit/dcf078198761a2cfe9be6b4c7f4b4fb07ef53cbf)

**文档新功能：**

- 记录维护者选项。（*由 Stefan Fercot 审核。*）

  维护者选项现在有独立的文档章节，说明使用注意事项，`pg-version-force` 也不再是内部选项。

  拉取请求 [#2202](https://github.com/pgbackrest/pgbackrest/pull/2202); 提交 [`21c8c8a`](https://github.com/pgbackrest/pgbackrest/commit/21c8c8a66cb06eba714bfa41bed7239af3d14f08)
- 更新 PostgreSQL >= 13 的时间点恢复（PITR）文档。

  从 PostgreSQL 13 起，未到达恢复目标时会报错。时间点恢复章节现在既适用于 PostgreSQL 13 及后续版本，也适用于更早版本。

  提交 [`eb69e2e`](https://github.com/pgbackrest/pgbackrest/commit/eb69e2ee6339047f0145b751437ac2bec82bb5ab)

**测试套件改进：**

- 允许在未安装 `libssh2` 的情况下运行 `config/load` 单元测试。（*由 Reid Thompson 贡献，David Steele 审核，Wu Ning 建议。*）

  议题 [#2193](https://github.com/pgbackrest/pgbackrest/issues/2193); 拉取请求 [#2194](https://github.com/pgbackrest/pgbackrest/pull/2194); 提交 [`e2b734e`](https://github.com/pgbackrest/pgbackrest/commit/e2b734eff97e3fac32895b799cc32126013aae27)

### v2.48 版本说明

*仓库存储标签*

*发布于 2023 年 9 月 25 日*

**漏洞修复：**

- 修复在没有块列表的情况下恢复块级增量备份的问题。（*审核：Stephen Frost. 测试：Burak Yurdakul. 报告：Burak Yurdakul.*）

  文件时间戳改变但内容未变时，会写入一个没有数据块的块映射。在一次文件包读取中，如果该映射位于一个未使用块级增量存储的文件之后，就不会被解密。受影响的文件足够多时，会耗尽重试次数，导致恢复失败。

  议题 [#2182](https://github.com/pgbackrest/pgbackrest/issues/2182); 拉取请求 [#2184](https://github.com/pgbackrest/pgbackrest/pull/2184); 提交 [`31de127`](https://github.com/pgbackrest/pgbackrest/commit/31de127cf42438b1fac04c161c47264aa1fb1060)

**新功能：**

- 新增 `--repo-storage-tag` 选项，用于创建对象标签。（*由 Stephen Frost、Stefan Fercot、Timothée Peignier 审核。*）

  设置 `repo-storage-tag` 可为写入 S3、GCS 或 Azure 仓库的对象添加标签。标签按仓库分别设置。

  议题 [#2150](https://github.com/pgbackrest/pgbackrest/issues/2150); 拉取请求 [#2159](https://github.com/pgbackrest/pgbackrest/pull/2159); 提交 [`1b4e0cc`](https://github.com/pgbackrest/pgbackrest/commit/1b4e0cce5f3ff5ea3ee0b889e6d4ce4de1430b04)
- 为 SFTP 存储驱动添加已知主机（known hosts）检查。（*由 Reid Thompson 贡献，Stephen Frost、David Steele 审核。*）

  现在默认根据 known hosts 文件检查 SFTP 主机密钥，即 `repo-sftp-host-key-check-type=strict`。设置 `repo-sftp-host-key-check-type=accept-new` 可自动添加新主机，设置 `repo-sftp-host-key-check-type=none` 则像以前一样跳过检查。

  拉取请求 [#2125](https://github.com/pgbackrest/pgbackrest/pull/2125); 提交 [`ce9ba0f`](https://github.com/pgbackrest/pgbackrest/commit/ce9ba0fadee652d409488bee701ea6a51cafec75)
- 支持双栈（dual stack）连接。（*由 Stephen Frost 审核。*）

  现在会依次尝试主机名解析出的每个地址，例如先尝试没有到主机路由的 IPv6 地址，再尝试 IPv4 地址，直到连接成功或超时。重复的重试错误也会在错误信息中汇总。

  [`5314dbf`](https://github.com/pgbackrest/pgbackrest/commit/5314dbffc761bc7507db02693f2421c1578efe10) 调整 Wait 对象，提高嵌套使用时的准确性。

  [`c180513`](https://github.com/pgbackrest/pgbackrest/commit/c1805134b370f0c5c54c40a2df8978599328784f) 在 ErrorRetry 输出中汇总重试错误。

  [`edbd520`](https://github.com/pgbackrest/pgbackrest/commit/edbd520c81f5d437963aaf42d1c79b2c51d01665) 重构地址列表查询，包含所有返回地址。; 拉取请求 [#2174](https://github.com/pgbackrest/pgbackrest/pull/2174)

  [`39bb8a0`](https://github.com/pgbackrest/pgbackrest/commit/39bb8a0d3a96eef63219dff262a9306a4f59dae9) 支持双栈连接。; 议题 [#2154](https://github.com/pgbackrest/pgbackrest/issues/2154); 拉取请求 [#2175](https://github.com/pgbackrest/pgbackrest/pull/2175)
- 在 `info` 命令的 JSON 输出中新增已完成/总计备份大小字段。（*由 Stefan Fercot 贡献，David Steele 审核。*）

  `info` 命令的 JSON 输出现在包含进行中备份的已完成大小和总大小，使其他程序可以监控进度。

  议题 [#2007](https://github.com/pgbackrest/pgbackrest/issues/2007); 拉取请求 [#2141](https://github.com/pgbackrest/pgbackrest/pull/2141); 提交 [`e3fcd8c`](https://github.com/pgbackrest/pgbackrest/commit/e3fcd8cd9e0be42a32fc4cbd2ae3db2c072eabcd)

**改进：**

- `check` 命令支持多 stanza。（*由 Stephen Frost 审核。*）

  未指定 `stanza` 时，`check` 命令现在会检查配置中的所有 stanza。

  拉取请求 [#2057](https://github.com/pgbackrest/pgbackrest/pull/2057); 提交 [`1141dc2`](https://github.com/pgbackrest/pgbackrest/commit/1141dc20708cf0c68296f83e74c872a7db9c2bd9)
- 重试读取 `pg_control`，直到校验和有效。（*由 Stefan Fercot、Stephen Frost 审核。*）

  在 ext4 等某些文件系统上，并发写入期间读取 `pg_control` 可能得到部分新、部分旧的撕裂数据。现在会重试读取，直到校验和有效。

  拉取请求 [#2131](https://github.com/pgbackrest/pgbackrest/pull/2131); 提交 [`f42d927`](https://github.com/pgbackrest/pgbackrest/commit/f42d927d2dcd58cf5a80d68eaf6888bcf2c67a4b)
- 优化成功备份后的 WAL 段检查。（*由 Stephen Frost 审核。*）

  备份后检查 WAL 段时，此前每个段都会列举一次存储内容。现在每个 WAL 目录只列举一次，并复用列表。

  拉取请求 [#2169](https://github.com/pgbackrest/pgbackrest/pull/2169); 提交 [`9d3a605`](https://github.com/pgbackrest/pgbackrest/commit/9d3a605900644059ff0e030d71a818b3965eb031)
- 改进 GCS 多部分上传性能。（*由 Reid Thompson 审核。*）

  分段上传中的每个分段现在会在数据就绪后立即上传。

  拉取请求 [#2162](https://github.com/pgbackrest/pgbackrest/pull/2162); 提交 [`6cb9c40`](https://github.com/pgbackrest/pgbackrest/commit/6cb9c40fb8ea18e6572bf3f6e44bbb1d8f922682)
- 允许在 stanza 停止时运行 `archive-get` 命令。（*由 Tom Swartz、David Christensen、Reid Thompson 审核。*）

  `archive-get` 命令不会写入仓库，因此现在可像 `restore` 一样，在 stanza 已停止时运行。

  提交 [`fbd992a`](https://github.com/pgbackrest/pgbackrest/commit/fbd992adc7b18db5e70774d675c160c8c8e2f031)
- 支持 SFTP 公钥/私钥路径中的前导波浪号（`~`）。（*由 Reid Thompson 贡献，David Steele 审核。*）

  `repo-sftp-private-key-file` 和 `repo-sftp-public-key-file` 的路径现在可按文档所述以 `~` 开头。

  拉取请求 [#2136](https://github.com/pgbackrest/pgbackrest/pull/2136); 提交 [`eb32d6d`](https://github.com/pgbackrest/pgbackrest/commit/eb32d6de5e1575a37efb166abbf7df400d93352e)
- 在续期认证令牌前重新加载 GCS 凭据。（*由 Stephen Frost 审核，Daniel Farina 建议。*）

  现在会在更新认证令牌之前重新读取服务密钥文件，因此可以在命令运行期间更换密钥。

  拉取请求 [#2072](https://github.com/pgbackrest/pgbackrest/pull/2072); 提交 [`995a8e9`](https://github.com/pgbackrest/pgbackrest/commit/995a8e96691d23eaf3914a425669f89deb3ce002)

**文档漏洞修复：**

- 修复配置参考中 `tls-server-address` 选项的示例。（*由 Hartmut Goebel 修复，David Steele 审核。*）

  示例中的 `::*` 无效。IPv4 应使用 `*`，IPv6 应使用 `::`。

  拉取请求 [#2165](https://github.com/pgbackrest/pgbackrest/pull/2165); 提交 [`43524a4`](https://github.com/pgbackrest/pgbackrest/commit/43524a47a4c6a847f76514812f94b87cb7af4c05)
- 修复命令参考中 `filter` 选项的示例。

  提交 [`cb3ff6e`](https://github.com/pgbackrest/pgbackrest/commit/cb3ff6ed4336af9e4c0643d8224d5bc3d790a655)

**测试套件改进：**

- 允许在未安装 `libssh2` 的情况下运行 `storage/sftp` 单元测试。（*由 Reid Thompson 贡献，David Steele 审核，Wu Ning 建议。*）

  议题 [#2163](https://github.com/pgbackrest/pgbackrest/issues/2163); 拉取请求 [#2177](https://github.com/pgbackrest/pgbackrest/pull/2177); 提交 [`c3c0834`](https://github.com/pgbackrest/pgbackrest/commit/c3c0834e170196a1241a368779162fcca65f9ad5)

### v2.47 版本说明

*性能改进与漏洞修复*

*发布于 2023 年 7 月 24 日*

**漏洞修复：**

- 在 delta 备份期间，在 manifest 中保留块级增量信息。（*由 Stephen Frost 审核，Francisco Miguel Biete Banon 报告。*）

  如果文件发生变化，以其当前状态作为新文件时不会使用块级增量（例如缩小到块级增量阈值以下，或时间戳前移足够久），它的块级增量信息此前会从 delta 备份的清单中丢失，即使该文件仍可引用前一次备份。

  [`1d42aed`](https://github.com/pgbackrest/pgbackrest/commit/1d42aed152563fff6ec70c517d86eb39158b3f20) 改进 command/backup 单元测试中对引用文件的验证。

  [`4c27d74`](https://github.com/pgbackrest/pgbackrest/commit/4c27d74bbd3a44d8ab1af140277d3cd8302060c2) 在 delta 备份期间保留清单中的块级增量信息。; 议题 [#2112](https://github.com/pgbackrest/pgbackrest/issues/2112); 拉取请求 [#2123](https://github.com/pgbackrest/pgbackrest/pull/2123)
- 修复 `verify` 命令中的块级增量文件名问题。（*由 Reid Thompson 审核，Francisco Miguel Biete Banon 报告。*）

  对于存储在文件包之外的块级增量文件，`verify` 命令此前使用压缩扩展名而非 `.pgbi`，导致无法找到文件。

  议题 [#2112](https://github.com/pgbackrest/pgbackrest/issues/2112); 拉取请求 [#2120](https://github.com/pgbackrest/pgbackrest/pull/2120); 提交 [`cdb7e26`](https://github.com/pgbackrest/pgbackrest/commit/cdb7e26350822b55c00771d6d575242b1202e741)
- 修复从备库备份时错误触发自动 delta 备份的问题。（*由 Stephen Frost 审核，krmozejko、Don Seiler 报告。*）

  备库上的文件大小可能不同于主库，例如空闲空间映射文件。下一次增量备份可能因此检测到主库文件大小改变，转为按校验和进行 delta 比较，耗时可能大幅增加。现在会在清单中保留原始大小，用于后续比较。

  议题 [#2020](https://github.com/pgbackrest/pgbackrest/issues/2020); 拉取请求 [#2124](https://github.com/pgbackrest/pgbackrest/pull/2124); 提交 [`5ed6f8d`](https://github.com/pgbackrest/pgbackrest/commit/5ed6f8df1487174985c42d6e13c367d70c2d8b8a)
- 恢复类型为 `type=none` 时，跳过 PostgreSQL >= 12 的 `recovery.signal` 文件。（*由 Stefan Fercot 审核，T.Anastacio 报告。*）

  对于 PostgreSQL >= 12，设置 `type=none` 时不再写入 `recovery.signal`，与更早版本的行为保持一致。

  议题 [#2062](https://github.com/pgbackrest/pgbackrest/issues/2062); 拉取请求 [#2070](https://github.com/pgbackrest/pgbackrest/pull/2070); 提交 [`9cceed6`](https://github.com/pgbackrest/pgbackrest/commit/9cceed6ac4a32c14a797eba89a4ad1dc06d89d80)
- 修复差异/增量备份的唯一标签生成问题。（*由 Andrey Sokolov 修复，David Steele 审核。*）

  如果至少有两个全量备份，而最新的备份已过期，差异或增量备份此前会因与该过期全量备份的标签比较而失败，表现得像系统时钟回拨。

  议题 [#1873](https://github.com/pgbackrest/pgbackrest/issues/1873); 拉取请求 [#2104](https://github.com/pgbackrest/pgbackrest/pull/2104); 提交 [`0ac0934`](https://github.com/pgbackrest/pgbackrest/commit/0ac09344dc17fb54e250705ce49399b86329bb3d)
- 修复无备份过期时基于时间的归档过期问题。（*由 Stefan Fercot 审核。*）

  基于时间的保留条件已满足、但没有备份过期时，此前不会清理归档，而是记录 "time-based archive retention not met"。必须再创建一个备份，较早的 WAL 才会过期。

  议题 [#2103](https://github.com/pgbackrest/pgbackrest/issues/2103); 拉取请求 [#2109](https://github.com/pgbackrest/pgbackrest/pull/2109); 提交 [`762498f`](https://github.com/pgbackrest/pgbackrest/commit/762498f4cd5f1425db4c176fc707926d62cc7c04)

**改进：**

- 提升 SFTP 存储驱动的性能。（*由 Stephen Frost、Reid Thompson 贡献，David Steele 审核。*）

  libssh2 无法继续时，SFTP 存储驱动此前会等待固定时长。现在改为等待套接字可读或可写。

  [`e280ed9`](https://github.com/pgbackrest/pgbackrest/commit/e280ed9098a6f5da9bdabb541e9c69d4f24ffcf2) 使 storage/sftp 中的结果码处理更加一致。

  [`125676a`](https://github.com/pgbackrest/pgbackrest/commit/125676ae0e98d3730d2dc0d47e37ca1df145d044) 清理 storageSftpNew() 中的初始化和握手逻辑。

  [`28b6b2d`](https://github.com/pgbackrest/pgbackrest/commit/28b6b2d4659d78ce67c1bd3104d96e5705d955c9) 改进 SFTP 存储驱动的性能。; 拉取请求 [#2089](https://github.com/pgbackrest/pgbackrest/pull/2089)
- 在 `info` 命令的日期/时间输出中添加时区偏移量。（*由 Stefan Fercot、Philip Hurst 审核，Philip Hurst 建议。*）

  `info` 命令输出的时间戳现在包含时区偏移量，可直接作为恢复目标，例如用于 `--target`。

  [`9efd5cd`](https://github.com/pgbackrest/pgbackrest/commit/9efd5cd0bb40c5dc2fcac2e21c9b62e554b94db6) 为 info 命令的日期时间输出添加时区偏移量。; 议题 [#2093](https://github.com/pgbackrest/pgbackrest/issues/2093); 拉取请求 [#2095](https://github.com/pgbackrest/pgbackrest/pull/2095)

  [`aa229a1`](https://github.com/pgbackrest/pgbackrest/commit/aa229a1deef3afeebb66db1443b19e24559adf96) 根据 Coverity 的报告修改 time_t 类型转换。
- 集中处理不支持功能的错误。（*由 Stefan Fercot 审核。*）

  对于编译时未包含的功能（如 lz4），错误信息现在更加详细且一致。指定编译时未包含的 SFTP 存储时，不再触发断言失败。

  [`de46276`](https://github.com/pgbackrest/pgbackrest/commit/de46276bf60b8a2181621b123d1a99e56808a089) 重构 config/parse 模块中的允许列表处理。

  [`36ff81d`](https://github.com/pgbackrest/pgbackrest/commit/36ff81dc6ff7e98e40c0c05a4a343a71b91b1678) 集中处理不受支持功能的错误。; 拉取请求 [#2075](https://github.com/pgbackrest/pgbackrest/pull/2075)

**文档改进：**

- 在用户指南中阐明优先从软件包安装的建议。（*由 Stefan Fercot 审核，dr-kd 建议。*）

  拉取请求 [#2090](https://github.com/pgbackrest/pgbackrest/pull/2090); 提交 [`a36f480`](https://github.com/pgbackrest/pgbackrest/commit/a36f480c85c7add6fdf0e5517748d740e3a7b424)

### v2.46 版本说明

*块级增量备份与 SFTP 存储*

*发布于 2023 年 5 月 22 日*

**新功能：**

- 支持块级备份（block incremental backup）。（*由 John Morris、Stephen Frost、Stefan Fercot 审核。*）

  块级增量仅存储文件自前一次备份后变化的部分，可在对大文件进行差异和增量备份时节省空间与时间。通过 `repo-block` 启用，且必须同时启用 `repo-bundle`。

  [`dd4e526`](https://github.com/pgbackrest/pgbackrest/commit/dd4e52679ecdc43539bd038b5aa9bd4ff9055cbf) 从增量块列表中移除分段和块编号。; 拉取请求 [#2029](https://github.com/pgbackrest/pgbackrest/pull/2029)

  [`822f2a5`](https://github.com/pgbackrest/pgbackrest/commit/822f2a584260a012b833455a7a2bd1c8487e3010) 完成块级增量功能。; 拉取请求 [#2053](https://github.com/pgbackrest/pgbackrest/pull/2053)
- 支持 SFTP 作为仓库存储。（*由 Reid Thompson 贡献，Stephen Frost、David Steele 审核。*）

  设置 `repo-type=sftp` 和 `repo-sftp-host`，即可将仓库存储在 SFTP 服务器上。

  拉取请求 [#1959](https://github.com/pgbackrest/pgbackrest/pull/1959); 提交 [`87087fa`](https://github.com/pgbackrest/pgbackrest/commit/87087fac231d2110160b3219daee3f9fb91aec02)

  [v2.42](#v242-release-notes) 中的开发变更：

  [`01b81f9`](https://github.com/pgbackrest/pgbackrest/commit/01b81f9d374701eb489dd1888bcba25fb5d6df84) 将链接创建移到存储接口。; 拉取请求 [#1879](https://github.com/pgbackrest/pgbackrest/pull/1879)
- 支持 PostgreSQL 16。（*由 Stefan Fercot 审核。*）

  添加 PostgreSQL 16 的目录版本和 WAL 魔数。

  拉取请求 [#2051](https://github.com/pgbackrest/pgbackrest/pull/2051); 提交 [`3fc3690`](https://github.com/pgbackrest/pgbackrest/commit/3fc3690dd77ef5fa032abb006558184164db53ec)

**改进：**

- 允许跳过页头检查。（*由 David Christensen 审核，David Christensen 建议。*）

  验证页面校验和时进行的页头检查，可能对加密页面误报错误。设置 `page-header-check=n` 可跳过这些检查；它们默认启用。

  拉取请求 [#2045](https://github.com/pgbackrest/pgbackrest/pull/2045); 提交 [`f5e6bc2`](https://github.com/pgbackrest/pgbackrest/commit/f5e6bc26983396ec51c6579aade37db39807f3a5)
- 恢复期间避免对恢复文件调用 `chown()`。（*由 Stefan Fercot、Marcelo Henrique Neppel 审核，Marcelo Henrique Neppel 建议。*）

  恢复时，对所有者已经正确的已恢复文件会跳过 `chown()`，但对写出的恢复配置文件却不会。现在，如果所有者已经正确，Posix 驱动也会跳过 `chown()`。

  议题 [#2036](https://github.com/pgbackrest/pgbackrest/issues/2036); 拉取请求 [#2038](https://github.com/pgbackrest/pgbackrest/pull/2038); 提交 [`3ff88ff`](https://github.com/pgbackrest/pgbackrest/commit/3ff88ffbb495fd669e9a361478e60192930ee0a1)
- 为 HTTP 重试添加错误重试详情。

  HTTP 重试后仍发生错误时，现在会报告重试次数和持续时间。

  [`801e396`](https://github.com/pgbackrest/pgbackrest/commit/801e396dace2a4d9f4125ef0e751c90dc0cc644a) 将错误模块移到 common/error 目录。

  [`df419b3`](https://github.com/pgbackrest/pgbackrest/commit/df419b34b55a15a902ff5cc1912aaebc7e023738) 改进重试错误信息。

  [`f33e1cf`](https://github.com/pgbackrest/pgbackrest/commit/f33e1cfb1600643820a1ae76bdeb15c62ac1fcc7) 为 HTTP 重试添加错误重试详情。

**文档改进：**

- 添加关于使用恢复类型 `type=none` 的警告说明。（*由 Stefan Fercot 审核。*）

  `type=none` 恢复在结束时不会递增时间线，这可能使 PostgreSQL 归档重复的 WAL；重复 WAL 被拒绝后可能导致磁盘占满，还可能使 `pg_rewind` 等工具失败或损坏集群。文档现在对此发出警告。

  议题 [#2062](https://github.com/pgbackrest/pgbackrest/issues/2062); 拉取请求 [#2069](https://github.com/pgbackrest/pgbackrest/pull/2069); 提交 [`a28b72c`](https://github.com/pgbackrest/pgbackrest/commit/a28b72c62431bcf9df02791219d9d6f5d0e60b54)
- 添加关于在已创建仓库上运行 `stanza-create` 的注意事项。

  已存在的 stanza 会被跳过，因此可以安全地重复运行 `stanza-create`，例如配置新仓库后。

  提交 [`0c1f823`](https://github.com/pgbackrest/pgbackrest/commit/0c1f823e7a3abf1cadb44de3832ec1ddb2da7ec8)

### v2.45 版本说明

*块级增量备份（测试版）*

*发布于 2023 年 3 月 20 日*

**漏洞修复：**

- 默认跳过为离线备份恢复时写入 `recovery.signal` 的操作。（*由 Stefan Fercot 审核，Marcel Borger 报告。*）

  在 PostgreSQL >= 12 上，如果备份是在 `wal_level=minimal` 下离线创建的，`recovery.signal` 会导致 PostgreSQL 无法启动。恢复离线备份时，现在默认不写入该文件，除非显式设置了 `type`，例如对以更高 `wal_level` 创建的离线备份执行时间点恢复。

  [`0818601`](https://github.com/pgbackrest/pgbackrest/commit/0818601c055724bde3b97d4b02d3a38b0a53899a) 在 command/restore 单元测试中设置清单的 online 标志。

  [`2fa7e53`](https://github.com/pgbackrest/pgbackrest/commit/2fa7e53c5d4b5a5fd79f62d39763746727a5b9be) 恢复离线备份时，默认跳过写入 recovery.signal。; 议题 [#2018](https://github.com/pgbackrest/pgbackrest/issues/2018); 拉取请求 [#2019](https://github.com/pgbackrest/pgbackrest/pull/2019)

**新功能：**

- 支持块级增量备份（BETA 测试版）。（*由 John Morris、Stephen Frost、Stefan Fercot 审核。*）

  块级增量仅存储文件自前一次备份后变化的部分，而非整个文件。通过 `repo-block` 启用，且必须同时启用 `repo-bundle`。该功能处于 beta 阶段，还需设置 `beta` 选项。请勿用于生产环境：正式发布前，磁盘格式还会改变。

  [`089fae0`](https://github.com/pgbackrest/pgbackrest/commit/089fae035bf0a9778fff0527ea3cbb113625a403) 在 real/all 测试输出中添加块级增量。

  [`3feed38`](https://github.com/pgbackrest/pgbackrest/commit/3feed389a2199454db68e446851323498b45db20) 改进 IoChunkedRead 的文件结束处理。

  [`d520816`](https://github.com/pgbackrest/pgbackrest/commit/d520816acf9ecb01ef805cecbc9de7e8d0a9f468) 从 deltaMapNew() 中移除参数列表。

  [`779efe0`](https://github.com/pgbackrest/pgbackrest/commit/779efe0d7a54340141e01597279e9ab1d0bd0773) 统一将块级增量大小声明为 size_t。

  [`dffc933`](https://github.com/pgbackrest/pgbackrest/commit/dffc933384e4327e2fd52868dd19668ed9d3ed91) 将 DeltaMap 重命名为 BlockHash。

  [`a9867cb`](https://github.com/pgbackrest/pgbackrest/commit/a9867cb0b8e8d7abcac9b18b76e3e490c265f3cb) 添加 repo-block-age-map 和 repo-block-size-map 选项。

  [`16ac5ee`](https://github.com/pgbackrest/pgbackrest/commit/16ac5ee8d3b926464cd27e8f064579f1e7935f4c) 重命名清单中的块级增量键。

  [`da91858`](https://github.com/pgbackrest/pgbackrest/commit/da9185870222057b97365f5db0acf797f959ec5e) 为压缩类型添加可选的原始格式。

  [`7e5adc0`](https://github.com/pgbackrest/pgbackrest/commit/7e5adc03594a3b7a975001e80902a51df3ddd577) 对文件打包和块级增量备份使用原始压缩和加密格式。

  [`8b5153a`](https://github.com/pgbackrest/pgbackrest/commit/8b5153ad210011812c8fe6db2f2ed829a5aa543a) 块级增量备份超级块。; 拉取请求 [#1996](https://github.com/pgbackrest/pgbackrest/pull/1996)

  [`210bed4`](https://github.com/pgbackrest/pgbackrest/commit/210bed4511ae5523b170eb193b877346d787140d) 块级增量校验和改用 xxHash，而非 SHA-1。

  [`6252c0e`](https://github.com/pgbackrest/pgbackrest/commit/6252c0e4485caee362edec13302a5f735a69bff4) 在块级增量备份的 info 信息中排除备份集大小。

  [`1119a53`](https://github.com/pgbackrest/pgbackrest/commit/1119a5353911d6d326edac325f530bb796a806ae) 将 BlockHash 重命名为 BlockChecksum。

  [`6b409d0`](https://github.com/pgbackrest/pgbackrest/commit/6b409d049eb935146f7996b75b97744b75c411a9) 根据测试更新默认块大小和超级块值。

  [`1281a6e`](https://github.com/pgbackrest/pgbackrest/commit/1281a6eaf8552232c8c9af4d7fc15c082a7794d9) 确保块大小等于超级块大小时不会产生续接块。

  [`5c1f78d`](https://github.com/pgbackrest/pgbackrest/commit/5c1f78d4dd62c37218285d13b09a9450eb3a588e) 修复 blockIncrProcess() 中的笔误。

  [`c30d3e4`](https://github.com/pgbackrest/pgbackrest/commit/c30d3e439b77d544477e289606d30d0c8ffe301f) 块级增量映射修复与改进。; 拉取请求 [#2026](https://github.com/pgbackrest/pgbackrest/pull/2026)

  [`24f7252`](https://github.com/pgbackrest/pgbackrest/commit/24f725212d0c1dedc0f34fe4e939e481585ff697) 添加 beta 功能基础设施。

  [`04d224b`](https://github.com/pgbackrest/pgbackrest/commit/04d224b88e73194ff1c6497dbecaaff392008dfe) 添加块级增量备份的 beta 功能标记及文档。

  [v2.44](#v244-release-notes) 中的开发变更：

  [`912eec6`](https://github.com/pgbackrest/pgbackrest/commit/912eec63bb971c10a545e582f628c982f4e00005) 块级增量备份。; 议题 [#959](https://github.com/pgbackrest/pgbackrest/issues/959); 议题 [#1806](https://github.com/pgbackrest/pgbackrest/issues/1806); 议题 [#1913](https://github.com/pgbackrest/pgbackrest/issues/1913); 拉取请求 [#1916](https://github.com/pgbackrest/pgbackrest/pull/1916)

  [v2.42](#v242-release-notes) 中的开发变更：

  [`1ea6a41`](https://github.com/pgbackrest/pgbackrest/commit/1ea6a4142e47e2e0b56911ad1f028dfcddc5fd64) 改进清单文件更新。; 拉取请求 [#1888](https://github.com/pgbackrest/pgbackrest/pull/1888)

  [`c647bcb`](https://github.com/pgbackrest/pgbackrest/commit/c647bcb50954f623d29104cdb8a1457ed8e94579) 为备份期间的文件处理添加清单标志。; 拉取请求 [#1889](https://github.com/pgbackrest/pgbackrest/pull/1889)

  [`102ce5d`](https://github.com/pgbackrest/pgbackrest/commit/102ce5dee47e8d9a8d2eeaf2b2cc2bac105914ef) 为清单添加持久化引用列表。; 拉取请求 [#1890](https://github.com/pgbackrest/pgbackrest/pull/1890)

  [`ac99201`](https://github.com/pgbackrest/pgbackrest/commit/ac99201c0ebde616279214e600e49fdf506f7469) 为 cvtUInt64FromVarInt128() 添加 bufferSize，以进一步限制读取范围。

  [`5602f17`](https://github.com/pgbackrest/pgbackrest/commit/5602f179a177a8513b96c762590829c012c28175) 为 IoRead/IoWrite 添加 varint-128 编解码。; 拉取请求 [#1891](https://github.com/pgbackrest/pgbackrest/pull/1891)

  [`352cbf1`](https://github.com/pgbackrest/pgbackrest/commit/352cbf1d5738a720292b5067051a05efc2b9a8ac) 将 ManifestFile 的布尔值改为位字段。

  [`e7e106f`](https://github.com/pgbackrest/pgbackrest/commit/e7e106f781be01027d4829b258902549eb36eb7b) 在 restoreFile() 中使用只读存储计算校验和。

  [`909be41`](https://github.com/pgbackrest/pgbackrest/commit/909be412f8ad0d87f23ce2a2dbca94c3e0732f9f) 调换 command/backup 和 command/restore 单元测试。

  [`1730ef4`](https://github.com/pgbackrest/pgbackrest/commit/1730ef4ac3d88137bd218e6128b0107a8bf2c121) 为 storageNewWriteP() 添加 noTruncate 标志。; 拉取请求 [#1898](https://github.com/pgbackrest/pgbackrest/pull/1898)

  [`fee38c2`](https://github.com/pgbackrest/pgbackrest/commit/fee38c2c7cc3ae318bf0d3b50fe23c22900c2311) 以处理器数组的形式向远程存储传递过滤器。

  [`5fceee8`](https://github.com/pgbackrest/pgbackrest/commit/5fceee88a9439460bf24082f275ec2e695cc6bf6) 添加 backupFileRepoPathP()。

  [`221db61`](https://github.com/pgbackrest/pgbackrest/commit/221db610d2a054ed00ad27377663941abfb9fb98) 缩短 real/all 集成测试矩阵中的名称。

  [`c9db7bc`](https://github.com/pgbackrest/pgbackrest/commit/c9db7bc274211820030c4ab6ab8c70c1b1896254) 更新 cipherBlockNew()，允许可选参数。

  [`58b3c91`](https://github.com/pgbackrest/pgbackrest/commit/58b3c91babc6af9e003e5ef09bf99becf8a6f827) 为 CipherBlock 添加原始模式以节省空间。

**改进：**

- 仅保留一个全为默认值的组索引。（*由 Stefan Fercot 审核。*）

  不适用的选项（例如 `repo2-type` 不是 `s3` 时的 `repo2-s3-key`）可能创建一个只有默认值的虚假仓库。现在会移除只有默认值的仓库和 PostgreSQL 索引，除非已没有其他索引。

  拉取请求 [#2011](https://github.com/pgbackrest/pgbackrest/pull/2011); 提交 [`1648c13`](https://github.com/pgbackrest/pgbackrest/commit/1648c133d6bc1ffd0682ae6219934d00295aa580)

**文档改进：**

- 添加在 `2.x` 版本之间升级的明确说明。（*由 Christophe Courtois 贡献，David Steele 审核。*）

  用户指南新增章节说明：在 `2.x` 版本之间升级，只需安装新的二进制文件。如果没有使用旧版本不支持的功能，也可以降级。

  议题 [#1774](https://github.com/pgbackrest/pgbackrest/issues/1774); 拉取请求 [#1993](https://github.com/pgbackrest/pgbackrest/pull/1993); 提交 [`15d5dcd`](https://github.com/pgbackrest/pgbackrest/commit/15d5dcdd3bb387aab28bbe7262011c38c7d6d22c)
- 移除引入 TLS 后已过时的 SSH 相关说明。

  `repo-host`、`pg-host` 及其端口选项的帮助不再将 SSH 作为唯一远程协议，SSH 压缩相关的详细说明也已移除。

  提交 [`c5907a2`](https://github.com/pgbackrest/pgbackrest/commit/c5907a2e7193ca8f79cf56dca23e0df118e686c3)

<span id="v244-release-notes"></span>

### v2.44 版本说明

*移除 PostgreSQL 9.0/9.1/9.2 支持*

*发布于 2023 年 1 月 30 日*

**改进：**

- 移除对 PostgreSQL `9.0`/`9.1`/`9.2` 的支持。（*由 Stefan Fercot 审核。*）

  pgBackRest 现在支持十个 PostgreSQL 版本：五个仍受支持的版本，以及最近五个已结束生命周期的版本。以 PostgreSQL 15 为准，这意味着不再支持 `9.0`、`9.1` 和 `9.2`。

  拉取请求 [#1941](https://github.com/pgbackrest/pgbackrest/pull/1941); 提交 [`77c721e`](https://github.com/pgbackrest/pgbackrest/commit/77c721eb635c6d757d2d5ed6f2ffc083720c10a7)
- 当没有备份与当前 PostgreSQL 版本匹配时，`restore` 操作报错退出。（*由 Stefan Fercot 贡献，David Steele 审核，Soulou 建议。*）

  执行 `stanza-upgrade` 后若未创建新备份，恢复此前会使用最新备份，而该备份来自旧 PostgreSQL 版本。以此方式创建的副本可能失败。现在这种情况会报错，除非指定了 `set` 或 `type=time`/`type=lsn`。

  议题 [#1942](https://github.com/pgbackrest/pgbackrest/issues/1942); 拉取请求 [#1967](https://github.com/pgbackrest/pgbackrest/pull/1967); 提交 [`b9be4fa`](https://github.com/pgbackrest/pgbackrest/commit/b9be4fa54039e2c79fad0dc1552c7ffaf883004c)
- 为每种 `compress-type` 添加 `compress-level` 的范围检查。（*由 Stefan Fercot 审核，gkleen、ViperRu 建议。*）

  此前所有 `compress-type` 的 `compress-level` 范围都是 `0-9`。这是 `gz` 的范围，却只是 `lz4` 和 `zst` 支持范围的一部分。现在每种类型使用各自的范围，例如 `zst` 为 `-7` 至 `22`。

  议题 [#1216](https://github.com/pgbackrest/pgbackrest/issues/1216); 议题 [#1931](https://github.com/pgbackrest/pgbackrest/issues/1931); 拉取请求 [#1962](https://github.com/pgbackrest/pgbackrest/pull/1962); 提交 [`44da314`](https://github.com/pgbackrest/pgbackrest/commit/44da314adb2b63f96b1d571f822e91a0e412e984)

**文档改进：**

- 添加关于在 Azure 存储上启用"分层命名空间"的警告。（*由 Stefan Fercot 审核，Vojtech Galda、Pluggi、asjonos 建议。*）

  启用“分层命名空间”后，Azure 要求单独删除目录，导致 `expire` 失败。用户指南现在明确提醒不要启用它。

  议题 [#1770](https://github.com/pgbackrest/pgbackrest/issues/1770); 拉取请求 [#1980](https://github.com/pgbackrest/pgbackrest/pull/1980); 提交 [`3aea997`](https://github.com/pgbackrest/pgbackrest/commit/3aea997df5ace85251d0579ccbe13fa938f587ee)
- 在监控示例中添加换行符替换处理。（*由 Stefan Fercot 审核，rudonx、gmustdie、Ivan Shelestov 建议。*）

  当 `info` 输出包含换行符（例如某些错误信息中）时，监控示例会失败，因为 `COPY` 会将 `\n` 转换为 `jsonb` 不接受的实际换行符。示例现在会在转换为 `jsonb` 之前替换换行符。

  议题 [#1910](https://github.com/pgbackrest/pgbackrest/issues/1910); 拉取请求 [#1963](https://github.com/pgbackrest/pgbackrest/pull/1963); 提交 [`ae258f6`](https://github.com/pgbackrest/pgbackrest/commit/ae258f604e634f1d2a760ffdb92dd359fd1129bb)
- 阐明 `target-action` 在各 PostgreSQL 版本上的行为。（*由 Chris Bandy 贡献，David Steele、Anton Kurochkin、Stefan Fercot 审核，Anton Kurochkin、Chris Bandy 建议。*）

  `pause` 的效果取决于 `hot_standby` 和 PostgreSQL 版本。设置 `hot_standby=off` 时，在 PostgreSQL >= 12 上，`pause` 等同于 `shutdown`；在更早版本上则等同于 `promote`。

  议题 [#987](https://github.com/pgbackrest/pgbackrest/issues/987); 议题 [#1314](https://github.com/pgbackrest/pgbackrest/issues/1314); 拉取请求 [#1960](https://github.com/pgbackrest/pgbackrest/pull/1960); 提交 [`84a3ff8`](https://github.com/pgbackrest/pgbackrest/commit/84a3ff8b7ac1243c0b47c6585697f4fcf3c12065)
- 更新并完善索引页面内容。（*由 Stefan Fercot 审核。*）

  关于其他备份方案不支持并行处理的章节已不再准确，现已改写。其他章节也更新了术语，并改进了表达。

  拉取请求 [#1966](https://github.com/pgbackrest/pgbackrest/pull/1966); 提交 [`36ee30d`](https://github.com/pgbackrest/pgbackrest/commit/36ee30d118ce6cc7720653a3d3a49a06c655c463)
- 为网站添加深色模式。（*由 Stephen Frost 建议。*）

  浏览器偏好深色配色时，网站会使用深色配色。

  提交 [`ed818b3`](https://github.com/pgbackrest/pgbackrest/commit/ed818b31867c640d72ef829dd36cd0a7feff12df)

### v2.43 版本说明

*漏洞修复*

*发布于 2022 年 11 月 28 日*

**漏洞修复：**

- 修复差异/增量备份中缺少引用的问题。（*由 Stefan Fercot 审核，Marcel Borger、ulfedf、jaymefSO 报告。*）

  在 v2.42 中，如果前一次备份由更早版本创建，差异或增量备份会因 "unable to find '...' in string list" 而失败。现在为旧版本清单生成的引用列表会包含该备份自身的标签。

  [`28f6604`](https://github.com/pgbackrest/pgbackrest/commit/28f660482aa5abb97850a9d7c89c2e5e9f23a4c9) 移动 info/manifest 单元中的 manifestBackupLabelSet() 测试。

  [`c4bf775`](https://github.com/pgbackrest/pgbackrest/commit/c4bf775099c85e3cd081f9c1ce35efd4c71d9161) 修复差异和增量备份中缺失引用的问题。; 议题 [#1933](https://github.com/pgbackrest/pgbackrest/issues/1933); 拉取请求 [#1935](https://github.com/pgbackrest/pgbackrest/pull/1935)

**改进：**

- 当选项未指定索引时，添加相应提示信息。（*由 Stefan Fercot 审核。*）

  对必须指定索引的选项（例如 `repo-storage-ca-file`），错误现在会提示带索引的名称，例如 `repo1-storage-ca-file`。已弃用的选项也会提示其当前名称。

  议题 [#1925](https://github.com/pgbackrest/pgbackrest/issues/1925); 拉取请求 [#1929](https://github.com/pgbackrest/pgbackrest/pull/1929); 提交 [`3f363cb`](https://github.com/pgbackrest/pgbackrest/commit/3f363cb3aed1a7c6836ee6c32eae600129a6f6b8)

<span id="v242-release-notes"></span>

### v2.42 版本说明

*漏洞修复*

*发布于 2022 年 11 月 22 日*

**漏洞修复：**

- 修复文件捆绑模式的 `backup`/`restore` 中的内存泄漏问题。（*审核：John Morris. 测试：Oscar. 报告：Oscar.*）

  恢复此前只有在文件包中的所有文件都恢复后，才会释放某些 I/O 对象。包中包含大量小文件时，内存占用会不断增长，直至恢复因 "unable to allocate" 而失败。备份续传也存在类似但规模较小的泄漏。

  议题 [#1877](https://github.com/pgbackrest/pgbackrest/issues/1877); 拉取请求 [#1878](https://github.com/pgbackrest/pgbackrest/pull/1878); 提交 [`cd8db7d`](https://github.com/pgbackrest/pgbackrest/commit/cd8db7d9e53e041ad6fb31f2f015541c1d24abc2)
- 修复远程文件短读时的协议错误。（*由 Stephen Frost 审核。*）

  远程文件读取提前结束或中途失败后，会使协议处于错误状态。下一个命令因 "client state is 'data-get' but expected 'idle'" 而失败，原始错误信息也会丢失。现在关闭文件时会读取剩余内容。

  [`ea162e8`](https://github.com/pgbackrest/pgbackrest/commit/ea162e821634919b7c839e866b99bf82010dbacc) 移动 storage/remote/read 模块中的 storageReadRemoteOpen()。

  [`7967c75`](https://github.com/pgbackrest/pgbackrest/commit/7967c750d83466d030081e9deb1d70a1ba240271) 修复远程文件读取不完整导致的协议错误。; 拉取请求 [#1900](https://github.com/pgbackrest/pgbackrest/pull/1900)

**改进：**

- 使用 bundling 时，不为零长度文件存储引用。（*由 Stefan Fercot 审核。*）

  使用文件打包的差异和增量备份，此前会为零长度文件存储指向前一次备份的引用，但这些文件实际上并不存储在任何备份中。恢复时会忽略该引用，但它仍占用清单空间。

  拉取请求 [#1887](https://github.com/pgbackrest/pgbackrest/pull/1887); 提交 [`f981fb4`](https://github.com/pgbackrest/pgbackrest/commit/f981fb45d9931e597afec764e13b1a53d8365d25)
- 对 `pg_start_backup()`/`pg_stop_backup()` 使用更通用的描述文字。（*由 Greg Sabino Mullane、David Christensen 审核，Greg Sabino Mullane 建议。*）

  PostgreSQL 15 将这些函数重命名为 `pg_backup_start()`/`pg_backup_stop()`。日志和文档现在使用不依赖 PostgreSQL 版本的描述。

  拉取请求 [#1901](https://github.com/pgbackrest/pgbackrest/pull/1901); 提交 [`ddd966c`](https://github.com/pgbackrest/pgbackrest/commit/ddd966cadc30440a81100144204d4084a0f2ac3a)

**测试套件改进：**

- 更新 `test.pl` 的 `--psql-bin` 选项以匹配命令行帮助。（*由 Koshi Shibagaki 贡献，David Steele 审核。*）

  帮助中显示的是 `--psql-bin`，实际选项名却是 `--pgsql-bin`。现在选项名称已与帮助一致。

  拉取请求 [#1920](https://github.com/pgbackrest/pgbackrest/pull/1920); 提交 [`3ad5884`](https://github.com/pgbackrest/pgbackrest/commit/3ad588443b452e04f3abcc107e825dc47e078103)

### v2.41 版本说明

*备份注解*

*发布于 2022 年 9 月 19 日*

**漏洞修复：**

- 修复非默认仓库使用了错误时间过期策略的问题。（*由 Stefan Fercot 审核，Adam Brusselback 报告。*）

  未指定 `repo` 运行 `expire` 时，所有仓库基于时间的 `repo-retention-full` 值此前都取自编号最小的仓库。现在每个仓库使用各自的值。

  议题 [#1852](https://github.com/pgbackrest/pgbackrest/issues/1852); 拉取请求 [#1854](https://github.com/pgbackrest/pgbackrest/pull/1854); 提交 [`eda7f81`](https://github.com/pgbackrest/pgbackrest/commit/eda7f81ee4fd6818ce458768144fc3fc1e1f0f21)
- 修复使用过滤器递归列出目录时的问题。（*由 Stephen Frost 审核，Efremov Egor 报告。*）

  `repo-ls` 同时使用 `recurse` 和 `filter` 时，如果目录的最后一个条目是含有条目的子目录，可能因重复释放或段错误而失败。原因是在处理子目录条目前，父列表就已被释放。

  议题 [#1870](https://github.com/pgbackrest/pgbackrest/issues/1870); 拉取请求 [#1871](https://github.com/pgbackrest/pgbackrest/pull/1871); 提交 [`c39c9f2`](https://github.com/pgbackrest/pgbackrest/commit/c39c9f220ed328b4175d912e109697b726e9ea9b)

**新功能：**

- 支持备份键值注解（key/value annotations）。（*由 Stefan Fercot 贡献，David Steele 审核，Adam Berlin 建议。*）

  可通过 `backup` 命令的 `annotation` 选项为备份添加键值注解，再使用新的 `annotate` 命令增添、修改或移除注解。指定 `set` 时，`info` 会在文本输出中显示注解；JSON 输出始终包含注解。

  议题 [#1709](https://github.com/pgbackrest/pgbackrest/issues/1709); 拉取请求 [#1724](https://github.com/pgbackrest/pgbackrest/pull/1724); 提交 [`381fd0a`](https://github.com/pgbackrest/pgbackrest/commit/381fd0a5a4de61624615b150ba98beeafac31f7e)

**改进：**

- 在 `info` 命令的 JSON 输出中支持 `--set` 参数。（*由 Stefan Fercot 贡献，David Steele 审核，Anton Kurochkin 建议。*）

  指定 `set` 后，`info` 的 JSON 输出现在包含此前仅文本输出显示的详情，例如错误列表和表空间列表。

  议题 [#1484](https://github.com/pgbackrest/pgbackrest/issues/1484); 拉取请求 [#1501](https://github.com/pgbackrest/pgbackrest/pull/1501); 提交 [`db75ffd`](https://github.com/pgbackrest/pgbackrest/commit/db75ffd27037d690a11eb02902f929250fe2bf5b)
- 允许为对象存储配置上传分块大小。（*由 Stefan Fercot 审核，Anton Glushakov 建议。*）

  设置 `repo-storage-upload-chunk-size` 可调整 S3、GCS 或 Azure 每个上传分段的大小。更大的分段可能提高性能，但会占用更多内存。默认值保持不变。

  [`ff1188f`](https://github.com/pgbackrest/pgbackrest/commit/ff1188f92dfc9e8f6d4aeca8b71a9886f24f58b4) 允许在命令行帮助中使用 quote 标签。

  [`b05d31f`](https://github.com/pgbackrest/pgbackrest/commit/b05d31f531b55b747175cf94c963f95574c54d2b) 允许配置对象存储的上传分段大小。; 议题 [#1843](https://github.com/pgbackrest/pgbackrest/issues/1843); 拉取请求 [#1847](https://github.com/pgbackrest/pgbackrest/pull/1847)
- 备份成功后更新 `archive.info` 的时间戳。（*由 Stefan Fercot 审核，Alex Richman 建议。*）

  `archive.info` 及其副本此前仅由 `stanza-create` 和 `stanza-upgrade` 写入，清理旧文件的对象存储生命周期策略可能将其删除。现在每次备份成功后都会更新它们的时间戳。

  议题 [#1853](https://github.com/pgbackrest/pgbackrest/issues/1853); 拉取请求 [#1855](https://github.com/pgbackrest/pgbackrest/pull/1855); 提交 [`3b5df1e`](https://github.com/pgbackrest/pgbackrest/commit/3b5df1e089234d425dd225f8c1976755dc947c8a)
- 将备库时间线检查移至检查点之后执行。（*审核：Stefan Fercot. 测试：Keith Fiske. 建议：Keith Fiske.*）

  检查备库是否位于预期时间线时，此前使用的是备份开始前的 `pg_control`。刚完成提升后，备库可能尚未将新时间线写入 `pg_control`，导致备份因 "standby is on timeline ... but expected ..." 而失败。现在在检查点之后执行检查。

  议题 [#1816](https://github.com/pgbackrest/pgbackrest/issues/1816); 拉取请求 [#1819](https://github.com/pgbackrest/pgbackrest/pull/1819); 提交 [`c267ba5`](https://github.com/pgbackrest/pgbackrest/commit/c267ba51b1778b5872f4ee928a9614545d743f3f)
- 改进备份恢复 resume 时的警告信息。（*由 Cynthia Shang 建议。*）

  此前警告的措辞让人以为需要用户采取行动。现在明确说明：无效文件会被移除，随后继续备份。

  提交 [`cbbe93f`](https://github.com/pgbackrest/pgbackrest/commit/cbbe93f592d8097393c5ffe214f0a8c5fb0549c1)

**文档改进：**

- 在 `pgbackrest.service` 中为 `kill` 添加绝对路径。（*由 Don Seiler 建议。*）

  `pgbackrest.service` 示例现在在 `ExecReload` 中使用 `/bin/kill`。旧版 systemd 要求绝对路径。

  提交 [`e9ff524`](https://github.com/pgbackrest/pgbackrest/commit/e9ff5248039eedb25da2fee550ec64fcebbc51c7)

### v2.40 版本说明

*OpenSSL 3 支持*

*发布于 2022 年 7 月 18 日*

**打包者注意**：已添加实验性的 meson 构建，但在可预见的未来，打包者应继续使用 autoconf/make 构建。

**改进：**

- 支持 OpenSSL 3。（*由 Stephen Frost 审核。*）

  pgBackRest 现在可使用 OpenSSL 3 构建。弃用警告已被抑制，并会根据 OpenSSL 3 返回的错误码检测意外 EOF。

  拉取请求 [#1767](https://github.com/pgbackrest/pgbackrest/pull/1767); 提交 [`08242ee`](https://github.com/pgbackrest/pgbackrest/commit/08242ee6ac93b9eb9c05cc39e3db15bbafb9052c)
- 列出路径内容时创建快照。（*由 John Morris、Stephen Frost 审核。*）

  不排序列出路径时，此前会边读取边处理条目。列举期间如果删除文件，某些文件系统可能跳过仍然存在的文件，导致路径无法删除。现在始终根据路径快照列举条目。

  [`61ca9b5`](https://github.com/pgbackrest/pgbackrest/commit/61ca9b58a000aa8789ef3267682519bdb15e8a6b) 在测试中用 TEST_STORAGE_LIST() 替代 hrnStorageInfoListCallback()。

  [`1c0bf0b`](https://github.com/pgbackrest/pgbackrest/commit/1c0bf0b15da8c0d15cc639851ff1d1bd05b51d06) 调整远程协议中空用户和组检查的顺序，并添加测试。

  [`72960bb`](https://github.com/pgbackrest/pgbackrest/commit/72960bbf179b4e8051bd4fc50be57d95159e9e13) 将 strTrunc() 重命名为 strTruncIdx()，并添加新的 strTrunc()。

  [`75623d4`](https://github.com/pgbackrest/pgbackrest/commit/75623d4583bfdaccb3a19b935fd04d744b363923) 列举路径内容时创建快照。; 议题 [#1754](https://github.com/pgbackrest/pgbackrest/issues/1754); 拉取请求 [#1805](https://github.com/pgbackrest/pgbackrest/pull/1805)
- 当恢复 `type=immediate` 时，强制设置 `target-timeline=current`。（*由 Stephen Frost 审核。*）

  在 PostgreSQL >= 12 上，默认目标时间线为 `latest`；如果无法从备份到达仓库中的最新时间线，恢复就可能失败。`type=immediate` 恢复不会切换时间线，因此现在将目标时间线设为 `current`。

  拉取请求 [#1814](https://github.com/pgbackrest/pgbackrest/pull/1814); 提交 [`364af16`](https://github.com/pgbackrest/pgbackrest/commit/364af1635d40431276cc6fd87d6ddd689b611e09)
- 在 delta `restore` 期间，当文件大于预期时进行截断。（*由 Stephen Frost 审核。*）

  delta 恢复此前在文件大小与清单不同时，总会从仓库复制文件。现在先将较大的文件截断为清单中的大小，仅在校验和不匹配时才复制。只追加了内容的文件（如日志）不再需要复制。

  拉取请求 [#1758](https://github.com/pgbackrest/pgbackrest/pull/1758); 提交 [`7ec51e7`](https://github.com/pgbackrest/pgbackrest/commit/7ec51e7e6279ea576ad3b4b5c2ea1fc389d08ab5)
- 当 `resume=n` 时，禁用增量 manifest 文件保存。（*由 Reid Thompson 贡献，David Steele 审核。*）

  备份期间会定期保存清单，以供续传使用。现在设置 `resume=n` 时会跳过这些保存操作。

  拉取请求 [#1760](https://github.com/pgbackrest/pgbackrest/pull/1760); 提交 [`60d70fa`](https://github.com/pgbackrest/pgbackrest/commit/60d70fa66fc3f709914f40dd088bac1b467001f2)
- 在复制开始前将备份完成百分比置为零。（*由 Reid Thompson 贡献，David Steele 审核。*）

  运行中的备份此前只有在复制完第一个文件后才会报告进度。现在开始复制时就将进度设为零。

  拉取请求 [#1759](https://github.com/pgbackrest/pgbackrest/pull/1759); 提交 [`38ad283`](https://github.com/pgbackrest/pgbackrest/commit/38ad2838d553febae1b7fe0244d942dfaa9cf548)
- 使用 S3 的 `IsTruncated` 标志判断列表是否需要继续。（*审核：John Morris. 测试：Soulou. 建议：Christian Montagne.*）

  新版 Scality 在列表未截断时会发送空的 `NextContinuationToken`，此前会导致无限循环。现在根据 `IsTruncated` 标志判断是否继续列举；如果列表已截断，但令牌缺失或为空，则报告错误。

  议题 [#1748](https://github.com/pgbackrest/pgbackrest/issues/1748); 拉取请求 [#1783](https://github.com/pgbackrest/pgbackrest/pull/1783); 提交 [`845d82f`](https://github.com/pgbackrest/pgbackrest/commit/845d82f6825d4101e6a465a435ef056ff6ec15a2)

**文档漏洞修复：**

- 在配置参考中跳过内部选项。（*由 Francisco Miguel Biete Banon 报告。*）

  某些仅对部分命令属于内部选项的参数，此前会出现在配置参考中。命令行帮助不受影响。

  提交 [`2643050`](https://github.com/pgbackrest/pgbackrest/commit/2643050be0dc4b7363c434f58373919bd6fdac68)

**文档改进：**

- 在仓库主机章节中添加 PostgreSQL 配置的链接。（*由 Stefan Fercot 审核，Julien Cigar 建议。*）

  拉取请求 [#1809](https://github.com/pgbackrest/pgbackrest/pull/1809); 提交 [`74a4ac8`](https://github.com/pgbackrest/pgbackrest/commit/74a4ac801db921f7b11b63b9f927228c6a6af861)

**测试套件改进：**

- 添加实验性 Meson 构建。（*由 Eli Schwartz、Sam Bassaly 审核。*）

  Meson 的语法比 autoconf/make 简单，性能也更好。它用于代码生成和测试构建，非调试构建会报错。打包维护者应继续使用 autoconf/make。

  [`2feaaea`](https://github.com/pgbackrest/pgbackrest/commit/2feaaeaac803d6c0193477b56dbeb622fd991156) 为被其他 C 文件包含的 C 文件添加 .inc 扩展名。

  [`b8fc20d`](https://github.com/pgbackrest/pgbackrest/commit/b8fc20d5b8e7ca003ff39f29ea6e3ba57653f55c) 添加实验性的 Meson 构建。; 拉取请求 [#1765](https://github.com/pgbackrest/pgbackrest/pull/1765)

  [`665da12`](https://github.com/pgbackrest/pgbackrest/commit/665da12ae7f519077512e60ce3a5ec6c6a9997fd) 更新 meson.build 中的 include 注释，使其更通用。

  [`9fd85a1`](https://github.com/pgbackrest/pgbackrest/commit/9fd85a104ad56061b028afd9057ce8c1d636d3dd) 除调试构建外，禁用 meson 构建。

  [`59f148b`](https://github.com/pgbackrest/pgbackrest/commit/59f148bf6ea8c090d4d65ce5b135a71501e8ae22) 生成 -fmacro-prefix-map，以从 __FILE__ 中剥离相对路径。

  [`0eccbc8`](https://github.com/pgbackrest/pgbackrest/commit/0eccbc8bf47073ab8ec1f13fed9865d0bd7c3635) Meson 构建可在 0.45 版本上运行。
- 允许向 `--test-path` 选项传递任意路径。（*由 Andrey Sokolov 贡献，David Steele 审核。*）

  拉取请求 [#1764](https://github.com/pgbackrest/pgbackrest/pull/1764); 提交 [`29b2a54`](https://github.com/pgbackrest/pgbackrest/commit/29b2a54fcc74457af5c63ffb505c5fbb24bb2ade)
- 修复在定义 `DEBUG_EXEC_TIME` 但未定义 `DEBUG` 时的编译错误。（*由 Andrey Sokolov 贡献，David Steele 审核。*）

  未定义 `DEBUG` 时，使用开始时间的 `ASSERT()` 会展开为空，未使用的变量因此导致编译错误。该检查现在使用 `CHECK()`。

  拉取请求 [#1775](https://github.com/pgbackrest/pgbackrest/pull/1775); 提交 [`1a00ab1`](https://github.com/pgbackrest/pgbackrest/commit/1a00ab10033e9ac6e6f797627567e8b91e143432)

### v2.39 版本说明

*Verify 命令与文件 Bundling*

*发布于 2022 年 5 月 16 日*

**漏洞修复：**

- 修复 `FINALLY()` 中抛出的错误导致无限循环的问题。（*由 Stephen Frost 审核。*）

  在 `FINALLY()` 块内抛出错误后，此前会返回同一代码块，很可能再次抛出错误并陷入无限循环。现在 `FINALLY()` 只执行一次。

  [`9a271e9`](https://github.com/pgbackrest/pgbackrest/commit/9a271e925c6239fbd3577f9827c34940e7e43ae4) 修复从 FINALLY() 抛出错误导致无限循环的问题。; 拉取请求 [#1732](https://github.com/pgbackrest/pgbackrest/pull/1732)

  [`ef4c4ab`](https://github.com/pgbackrest/pgbackrest/commit/ef4c4ab8525f81c9ed22c7e82ed12096e81703c5) 使用变量而非函数跟踪 FINALLY() 状态。; 拉取请求 [#1744](https://github.com/pgbackrest/pgbackrest/pull/1744)
- 除其他进程持有锁之外，对所有锁定失败情况报错。（*审核：Reid Thompson. 测试：Geir Råness. 报告：Geir Råness.*）

  `archive-get`/`archive-push` 因权限等其他原因无法获取锁时，此前不会报错，也不会启动异步进程。用户只会收到笼统的失败信息，且没有异步日志。现在这些失败都会报错。

  议题 [#1722](https://github.com/pgbackrest/pgbackrest/issues/1722); 拉取请求 [#1730](https://github.com/pgbackrest/pgbackrest/pull/1730); 提交 [`9629908`](https://github.com/pgbackrest/pgbackrest/commit/962990869454b15db058f4037dbc0b1b611fc95e)

**新功能：**

- 备份文件 bundling，改善对小文件的处理效果。（*由 Reid Thompson、Stefan Fercot、Chris Bandy 审核。*）

  文件打包将仓库中的小文件集中存储，可节省备份时间和空间，尤其适用于创建每个文件开销都较高的对象存储。通过 `repo-bundle` 启用，并用 `repo-bundle-size` 和 `repo-bundle-limit` 调整。恢复时会用一次读取获取包内相邻的文件。

  [`4d2fef1`](https://github.com/pgbackrest/pgbackrest/commit/4d2fef1c37d357965f0ffb9af0d7489f3be1371b) 移除重复的 restoreFile() 测试并改进覆盖率。

  [`5141370`](https://github.com/pgbackrest/pgbackrest/commit/514137040e60e8fff0e7f42f43b493113abae5ff) 为 ioCopyP() 添加 limit 参数。

  [`dca6da8`](https://github.com/pgbackrest/pgbackrest/commit/dca6da86bfe84a0cda004df1140d125db1630c90) 针对文件打包优化 restore 命令。; 议题 [#1149](https://github.com/pgbackrest/pgbackrest/issues/1149); 拉取请求 [#1683](https://github.com/pgbackrest/pgbackrest/pull/1683)

  [`0054677`](https://github.com/pgbackrest/pgbackrest/commit/0054677147121967889ead7feab0959fb19e39a6) 为 backup 命令添加文件包日志。

  [`3f66f42`](https://github.com/pgbackrest/pgbackrest/commit/3f66f42ef9605a83c356e4c6eb3ef47bcb12c30d) 将 bundle-* 选项重命名为 repo-bundle-*。; 拉取请求 [#1694](https://github.com/pgbackrest/pgbackrest/pull/1694)

  [`fe9fd2f`](https://github.com/pgbackrest/pgbackrest/commit/fe9fd2ff2d778b86c0df159aabe7644f18f6479f) 启用 repo-bundle 选项时禁用 repo-hardlink 选项。

  [`424008d`](https://github.com/pgbackrest/pgbackrest/commit/424008d293661dfb1a167cfec2697def48057447) 允许处理在备份清单构建后变为零长度的文件。

  [`f405fc6`](https://github.com/pgbackrest/pgbackrest/commit/f405fc6ae281eebf4d61abb39963a9830fe2fa2f) 备份文件打包文档。; 拉取请求 [#1740](https://github.com/pgbackrest/pgbackrest/pull/1740)

  [v2.38](#v238-release-notes) 中的开发变更：

  [`a79034a`](https://github.com/pgbackrest/pgbackrest/commit/a79034ae2f6a8ec66b84c62ab6cd4042d2c1a249) 为所有存储驱动添加读取范围。; 拉取请求 [#1619](https://github.com/pgbackrest/pgbackrest/pull/1619)

  [`b791f1c`](https://github.com/pgbackrest/pgbackrest/commit/b791f1c82f53fa16866837d4544b58243c682f7f) 实现恢复文件所有权，无需更新清单内部数据。

  [`f84909f`](https://github.com/pgbackrest/pgbackrest/commit/f84909f85f7dfb202ac812c67665cc590a5acad4) 修复出错后 Posix 读取偏移量的处理问题。

  [`4ca0590`](https://github.com/pgbackrest/pgbackrest/commit/4ca0590a51a665535fbba903b8f55e10557b606a) 重构 backupProcessQueue()，使用 BackupJobData 结构体。

  [`16559d9`](https://github.com/pgbackrest/pgbackrest/commit/16559d9e421c66596d21b047c8afe1b2c96ccd82) 在适当位置使用 PG_FILE_POSTMTRPID 常量。

  [`8c062e1`](https://github.com/pgbackrest/pgbackrest/commit/8c062e1af824c3dc80ff94b3df8d433f95e88d0f) 从清单中移除 primary 标志。; 拉取请求 [#1630](https://github.com/pgbackrest/pgbackrest/pull/1630)

  [`b0db4b8`](https://github.com/pgbackrest/pgbackrest/commit/b0db4b8ff00db913cb69308017a56155d6070830) 简化 mock/all 集成测试中的基础路径权限。

  [`4a73a02`](https://github.com/pgbackrest/pgbackrest/commit/4a73a0286387f3f2185f3f193f9c20ed0d7d926d) 简化清单默认值。; 拉取请求 [#1631](https://github.com/pgbackrest/pgbackrest/pull/1631)

  [`575ae77`](https://github.com/pgbackrest/pgbackrest/commit/575ae77c0dee12b932469d479b2e45dbaf389737) 在清单中尽可能将 varNewUInt64() 转为 VARUINT64()。

  [`61ce586`](https://github.com/pgbackrest/pgbackrest/commit/61ce58692f3092b72833b6e9ee87037f45b3b702) 紧凑存储清单文件结构体以节省内存。; 拉取请求 [#1626](https://github.com/pgbackrest/pgbackrest/pull/1626)

  [`ca13f11`](https://github.com/pgbackrest/pgbackrest/commit/ca13f11b4a3858587c7055b0b2b4a8b396dd8451) 优化 jsonFromStrInternal()。

  [`e4df5b7`](https://github.com/pgbackrest/pgbackrest/commit/e4df5b7d3846134832b9315e22786f679d63a46b) 简化清单文件默认值。; 拉取请求 [#1632](https://github.com/pgbackrest/pgbackrest/pull/1632)

  [`7dd657b`](https://github.com/pgbackrest/pgbackrest/commit/7dd657b7dd163ded9fbf7caef37eea7e08bc5a37) 简化 command/verify 模块中的文件名构造。

  [`34d6495`](https://github.com/pgbackrest/pgbackrest/commit/34d649579eb3bd1530aa99f0ed1879e7d3125424) 备份期间在仓库中打包文件。; 议题 [#1149](https://github.com/pgbackrest/pgbackrest/issues/1149); 拉取请求 [#1655](https://github.com/pgbackrest/pgbackrest/pull/1655)

  [`efc09db`](https://github.com/pgbackrest/pgbackrest/commit/efc09db7b9ece6e7b7f92538d56d6ab7b9798f8f) 限制可打包的文件。; 议题 [#1149](https://github.com/pgbackrest/pgbackrest/issues/1149); 拉取请求 [#1662](https://github.com/pgbackrest/pgbackrest/pull/1662)

  [`e6e1122`](https://github.com/pgbackrest/pgbackrest/commit/e6e1122dbcf5e667d683295f7e7e45de4bbf56bd) 在 manifestFileAdd() 中按引用传递文件。
- 新增 `verify` 命令，用于验证仓库内容的有效性。（*由 Cynthia Shang、Reid Thompson 贡献，David Steele、Stefan Fercot 审核。*）

  `verify` 命令检查仓库中的备份和 WAL 是否有效。设置 `output=text` 可输出结果，设置 `verbose` 可在错误之外，同时列出验证成功的内容。

  拉取请求 [#1607](https://github.com/pgbackrest/pgbackrest/pull/1607); 提交 [`65d22e4`](https://github.com/pgbackrest/pgbackrest/commit/65d22e43257d46ff6523ffbdb3af59e30deeaea5)
- 支持 PostgreSQL 15。（*由 Stefan Fercot 审核。*）

  PostgreSQL 15 移除了排他备份，重命名了备份开始和结束函数，并删除了 pgBackRest 已不再使用的 `pg_database.datlastsysoid`。

  [`692fe49`](https://github.com/pgbackrest/pgbackrest/commit/692fe496bdb5fa6dcffeb9f85b6188ceb1df707a) 移除对 pg_database.datlastsysoid 的依赖。; 拉取请求 [#1735](https://github.com/pgbackrest/pgbackrest/pull/1735)

  [`20782c8`](https://github.com/pgbackrest/pgbackrest/commit/20782c88bc8d0842d547bd5f4fecdb292e69d1f7) 支持 PostgreSQL 15。; 拉取请求 [#1736](https://github.com/pgbackrest/pgbackrest/pull/1736)
- 在 `info` 输出中显示备份完成百分比。（*由 Reid Thompson 贡献，David Steele 审核。*）

  在备份运行的主机上，`info` 会显示运行中备份的完成百分比。JSON 输出将其表示为整数，即百分比乘以 100。

  [`d9088b2`](https://github.com/pgbackrest/pgbackrest/commit/d9088b2e2b16a89d29b967187a547976f96061fc) 在 info 输出中显示备份完成百分比。; 议题 [#1490](https://github.com/pgbackrest/pgbackrest/issues/1490); 拉取请求 [#1621](https://github.com/pgbackrest/pgbackrest/pull/1621)

  [`a6b1adb`](https://github.com/pgbackrest/pgbackrest/commit/a6b1adb5fd533b4b9aca29646c8acf647d872959) 移除写入锁文件时多余的换行。

  [v2.38](#v238-release-notes) 中的开发变更：

  [`22734eb`](https://github.com/pgbackrest/pgbackrest/commit/22734eb376b3183924cb7794f9111c1eeb5d92d6) 添加 ioBufferReadNewOpen() 和 ioBufferWriteNewOpen()。

  [`9b2f10d`](https://github.com/pgbackrest/pgbackrest/commit/9b2f10dbb49a8b869cef2c419d9957ed4c550016) 重构锁代码。; 拉取请求 [#1643](https://github.com/pgbackrest/pgbackrest/pull/1643)
- 为 `restore` 命令的 `--type=lsn` 自动选择备份。（*由 Reid Thompson 贡献，Stefan Fercot、David Steele 审核。*）

  使用 `type=lsn` 时，恢复现在会选择结束 LSN 不晚于 `target` LSN 的最新备份。

  [`08d9e26`](https://github.com/pgbackrest/pgbackrest/commit/08d9e269c6f03e7797584e90c53eb0743b787f60) 重构 restore 模块中的目标类型检查，使逻辑更清晰。

  [`d8d4132`](https://github.com/pgbackrest/pgbackrest/commit/d8d4132118edd7f93a5b221478c85c2d213c39dd) 为 restore 命令的 --type=lsn 自动选择备份。; 拉取请求 [#1706](https://github.com/pgbackrest/pgbackrest/pull/1706)

  [`ea4d73f`](https://github.com/pgbackrest/pgbackrest/commit/ea4d73f375558c237fce696f20c19d1efef00bc1) 修正 command/restore 单元测试中 backup-lsn-stop 字段的顺序。
- 当 `archive-mode-check` 被禁用时，抑制现有 WAL 的警告信息。（*由 Reid Thompson 贡献，David Steele 审核。*）

  设置 `archive-mode-check=n` 并从多台主机推送 WAL 时，归档中已存在校验和相同的 WAL 文件属于预期情况，不再记录警告。校验和不同时仍会报错。

  拉取请求 [#1711](https://github.com/pgbackrest/pgbackrest/pull/1711); 提交 [`aad7171`](https://github.com/pgbackrest/pgbackrest/commit/aad7171940afdb221a03825bee6eb2f1827289f1)
- 新增 AWS IMDSv2 支持。（*由 Nuno Pires 贡献，David Steele 审核。*）

  IMDSv2 保护为 `repo-s3-key-type=auto` 提供凭据的实例元数据。当 IMDSv2 令牌请求失败时，pgBackRest 会回退到 IMDSv1。

  议题 [#1685](https://github.com/pgbackrest/pgbackrest/issues/1685); 拉取请求 [#1691](https://github.com/pgbackrest/pgbackrest/pull/1691); 提交 [`21cef09`](https://github.com/pgbackrest/pgbackrest/commit/21cef09dfd03c313531dc66ba9556164ae2835ab)

**改进：**

- 允许在全量备份（full backup）后更改 `repo-hardlink` 选项。（*由 Reid Thompson 审核。*）

  更改 `repo-hardlink` 此前要求重新创建全量备份。现在可随时更改，例如为了使用文件打包而禁用它。

  拉取请求 [#1699](https://github.com/pgbackrest/pgbackrest/pull/1699); 提交 [`7afaac0`](https://github.com/pgbackrest/pgbackrest/commit/7afaac0a3d0e43e5598d1abf548559dbe6329363)
- 提高 `backup` 和 `restore` 完成百分比日志的精度。（*由 Reid Thompson 贡献，David Steele 审核。*）

  日志中的完成百分比现在精确到小数点后两位，可更频繁地报告大规模备份和恢复的进度。

  拉取请求 [#1679](https://github.com/pgbackrest/pgbackrest/pull/1679); 提交 [`330e199`](https://github.com/pgbackrest/pgbackrest/commit/330e19900ee3415d920680cf6e6856bf5e8e9a69)
- 改进 `repo-*` 命令的路径验证。（*由 Reid Thompson 贡献，David Steele 审核。*）

  路径不得包含 `//`，末尾的 `/` 会被移除，绝对路径必须位于仓库路径之内。

  [`5ae84d5`](https://github.com/pgbackrest/pgbackrest/commit/5ae84d5e474e95dcc00c174aa5111815a5a70ba5) 改进 repo-* 命令的路径验证。; 拉取请求 [#1697](https://github.com/pgbackrest/pgbackrest/pull/1697)

  [`19dd015`](https://github.com/pgbackrest/pgbackrest/commit/19dd015d589ed3efd31a2a238249a150fb3748c1) 修复 repo-* 命令改进后的路径验证中存在的问题。; 拉取请求 [#1751](https://github.com/pgbackrest/pgbackrest/pull/1751)
- 改进 `stop` 命令以遵循 `stanza` 选项。（*由 Reid Thompson 贡献，David Steele 审核，ragaoua 建议。*）

  同时使用 `force` 和 `stanza` 的 `stop` 命令，现在仅终止持有该 stanza 锁的进程。此前会终止所有 stanza 的进程。

  议题 [#1608](https://github.com/pgbackrest/pgbackrest/issues/1608); 拉取请求 [#1676](https://github.com/pgbackrest/pgbackrest/pull/1676); 提交 [`f7ab002`](https://github.com/pgbackrest/pgbackrest/commit/f7ab002aa74dd2ca277123f7500018ae68a04c74)
- 改进 `repo-azure-key` 无效时的错误信息。（*由 Reid Thompson 贡献，David Steele 审核，Seth Daniel 建议。*）

  设置 `repo-azure-key-type=shared` 时，现在会检查 `repo-azure-key` 是否为有效的 base64。

  议题 [#1686](https://github.com/pgbackrest/pgbackrest/issues/1686); 拉取请求 [#1688](https://github.com/pgbackrest/pgbackrest/pull/1688); 提交 [`7c9208b`](https://github.com/pgbackrest/pgbackrest/commit/7c9208ba856a71833dc7d8f1cf8cb2b4bb4b7414)
- 在 `archive-get`/`archive-push` 异步出错时，添加检查日志的提示信息。（*由 Reid Thompson 审核。*）

  异步进程无法写入状态文件时，`archive-get`/`archive-push` 会超时并返回笼统的错误。现在错误会附带异步日志路径提示，该日志中包含实际错误。

  议题 [#1722](https://github.com/pgbackrest/pgbackrest/issues/1722); 提交 [`03c71aa`](https://github.com/pgbackrest/pgbackrest/commit/03c71aa606bc0dc89303b3907e7fcbd83ace79d6)
- 新增 `ClockError`，用于处理意外的时钟偏差和时区变更。（*由 Greg Sabino Mullane、Stefan Fercot 审核，Greg Sabino Mullane 建议。*）

  拉取请求 [#1739](https://github.com/pgbackrest/pgbackrest/pull/1739); 提交 [`5f8c9cd`](https://github.com/pgbackrest/pgbackrest/commit/5f8c9cd66a1b39a47acaddfbc3cf443ae8057519)
- 在错误信息中显示历史 manifest 文件前，去除其扩展名。（*由 Stefan Fercot 审核。*）

  新备份标签不晚于备份历史中的最新标签时，此前错误信息显示的是历史清单文件名，例如 `20220504-222042F_20220504-222141I.manifest.gz`。现在仅显示标签。

  拉取请求 [#1738](https://github.com/pgbackrest/pgbackrest/pull/1738); 提交 [`b6bfd9f`](https://github.com/pgbackrest/pgbackrest/commit/b6bfd9f99d74b1f5e631cf6462b68342589d2b80)
- 在锁权限错误信息中添加用户：组信息。（*由 Reid Thompson 审核。*）

  议题 [#1722](https://github.com/pgbackrest/pgbackrest/issues/1722); 提交 [`0055fa4`](https://github.com/pgbackrest/pgbackrest/commit/0055fa40fee2636fed88699f52e9e67cd2803f71)
- 无法找到主库集群时添加提示。

  "unable to find primary cluster" 错误现在会提示检查：所有可用集群是否都处于恢复状态。

  提交 [`46b7b72`](https://github.com/pgbackrest/pgbackrest/commit/46b7b7287446d0bb5ed0963fd01c51fb2b08893f)

**文档漏洞修复：**

- 修复用户指南中对 `stanza-update` 的错误引用。（*由 Abubakar Mohammed 修复，David Steele 审核。*）

  提交 [`3dd7960`](https://github.com/pgbackrest/pgbackrest/commit/3dd796045160c4d4dbf70ec2800ad483867629f1)
- 修复配置参考中 `repo-gcs-key-type` 选项的示例。（*由 Reid Thompson 审核。*）

  示例此前为无效值 `none`，现在改为 `auto`。

  提交 [`166039c`](https://github.com/pgbackrest/pgbackrest/commit/166039c0da1875581a08d41ab8a44adf95fa6db1)
- 修复 `tls-server-auth` 示例并添加说明。（*由 Reid Thompson 审核。*）

  示例此前缺少客户端 CN，现在改为 `client-cn=stanza1`。帮助还说明，客户端 CN 不允许使用通配符。

  提交 [`c222ce1`](https://github.com/pgbackrest/pgbackrest/commit/c222ce1a5f6f813188b7e87a3838d6dce656e0ff)

**文档改进：**

- 简化文档中关于支持版本的描述。（*由 Stefan Fercot、Reid Thompson、Greg Sabino Mullane 审核。*）

  用户指南此前列出了 PostgreSQL 版本范围，使人误以为其他版本不受支持，例如 RHEL 上的 PostgreSQL 12。现在已移除这些范围，并在引言中说明指南覆盖哪些版本。

  拉取请求 [#1742](https://github.com/pgbackrest/pgbackrest/pull/1742); 提交 [`eefa0b1`](https://github.com/pgbackrest/pgbackrest/commit/eefa0b161a6a02b7843e18455443a4bce41cd4b9)
- 添加选项类型描述。（*由 Reid Thompson 贡献，David Steele 审核。*）

  配置参考现在统一说明各选项类型，例如大小选项的单位，不再在每个选项下重复描述。

  拉取请求 [#1747](https://github.com/pgbackrest/pgbackrest/pull/1747); 提交 [`a913113`](https://github.com/pgbackrest/pgbackrest/commit/a913113fda5886ffd2ff136cdd52a3f469eca026)
- 添加备份类型与恢复速度的常见问题解答。（*由 David Christensen 贡献，Reid Thompson 审核。*）

  新增 FAQ 说明：备份类型只影响备份过程，不决定恢复速度。

  拉取请求 [#1731](https://github.com/pgbackrest/pgbackrest/pull/1731); 提交 [`50d409a`](https://github.com/pgbackrest/pgbackrest/commit/50d409a812be577f2c296f3d6096cf97fab049ff)
- 记录 Pull Request 所需的基础分支。（*由 David Christensen 贡献，Reid Thompson 审核。*）

  贡献指南现在明确说明，拉取请求必须基于 `integration` 分支。

  拉取请求 [#1733](https://github.com/pgbackrest/pgbackrest/pull/1733); 提交 [`cc5b061`](https://github.com/pgbackrest/pgbackrest/commit/cc5b0614894e1b5ef78f1ceba3bc8e4760a40a24)

<span id="v238-release-notes"></span>

### v2.38 版本说明

*小型漏洞修复与改进*

*发布于 2022 年 3 月 6 日*

**重要提示**：`info` 命令报告的仓库大小现在完全基于 pgBackRest 写入存储的数据量。此前，在某些情况下，pgBackRest 可以检测到存储是否应用了额外的压缩，但此功能已不再支持。

**漏洞修复：**

- 对 S3 批量文件删除中的错误进行重试。（*由 Reid Thompson 审核，Alex Richman 报告。*）

  批量删除失败会重试，但批次内单个文件的错误此前不会重试，可能导致 pgBackRest 在过期处理或删除无法续传的备份时终止。现在批次中失败的文件会单独删除，并使用常规 HTTP 重试机制。

  议题 [#1650](https://github.com/pgbackrest/pgbackrest/issues/1650); 拉取请求 [#1653](https://github.com/pgbackrest/pgbackrest/pull/1653); 提交 [`551e5bc`](https://github.com/pgbackrest/pgbackrest/commit/551e5bc6f67c91cf1e11da0cefe24f9650353adc)
- 允许对 HTTP `connection` 头部值进行大小写不敏感的匹配。（*由 Reid Thompson 审核，Rémi Vidier 报告。*）

  HTTP 规范允许 `connection` 请求头或响应头的值使用任意大小写，例如 `Close`。

  议题 [#1638](https://github.com/pgbackrest/pgbackrest/issues/1638); 拉取请求 [#1675](https://github.com/pgbackrest/pgbackrest/pull/1675); 提交 [`b33cabe`](https://github.com/pgbackrest/pgbackrest/commit/b33cabe08c33e29eb8aef65dd46b2c1f3cf2d186)

**新功能：**

- 新增使用 KMS 的 AWS S3 服务端加密支持。（*贡献：Christoph Berg. 审核：David Steele. 测试：Tharindu Amila.*）

  设置 `repo-s3-kms-key-id` 可使用 AWS KMS 管理的密钥加密对象。

  议题 [#1430](https://github.com/pgbackrest/pgbackrest/issues/1430); 拉取请求 [#1567](https://github.com/pgbackrest/pgbackrest/pull/1567); 提交 [`3097acd`](https://github.com/pgbackrest/pgbackrest/commit/3097acd73a21b630aa5352be57a82b031930f96b)
- 新增 `archive-missing-retry` 选项。（*由 Stefan Fercot 审核。*）

  默认情况下，`archive-get` 会重试此前已报告缺失的 WAL 段，从而忽略上一次恢复留在 spool 路径中的缺失通知。设置 `archive-missing-retry=n` 后，即使仍在归档 WAL，PostgreSQL 也能检测归档结束并转为流复制。此时必须确保恢复开始时 spool 路径为空。

  拉取请求 [#1642](https://github.com/pgbackrest/pgbackrest/pull/1642); 提交 [`10038db`](https://github.com/pgbackrest/pgbackrest/commit/10038db9c9f2b4753c3821e0b246fa8626527184)
- 为 `info` 命令添加备份类型过滤功能。（*由 Stefan Fercot 贡献，David Steele 审核。*）

  设置 `type` 可仅显示该类型的备份，例如 `type=full`。

  议题 [#600](https://github.com/pgbackrest/pgbackrest/issues/600); 拉取请求 [#1651](https://github.com/pgbackrest/pgbackrest/pull/1651); 提交 [`b26097f`](https://github.com/pgbackrest/pgbackrest/commit/b26097f8d8a7e2af6e9a21576994cbb47110c6f4)

**改进：**

- 在 `backup` 期间页面验证失败时进行重试。（*由 Stephen Frost、David Christensen 审核。*）

  页面校验和验证失败后，现在会重新读取该页；只有页面未改变时才报告错误。发生变化说明 PostgreSQL 正在写入，WAL 中会包含完整页面镜像。对零页面的检查也改为验证全部内容为零，不再只检查 `pd_upper` 字段。

  [`b489707`](https://github.com/pgbackrest/pgbackrest/commit/b4897077937ee4571ba719276a44d5db0a75510e) 移动 command/backup 模块中的 command/backup-common 测试。

  [`9eec98c`](https://github.com/pgbackrest/pgbackrest/commit/9eec98c61302121134d2067326dbd2cd0f2f0b9c) 备份期间页面校验和验证失败时重试。; 议题 [#952](https://github.com/pgbackrest/pgbackrest/issues/952); 拉取请求 [#1667](https://github.com/pgbackrest/pgbackrest/pull/1667)

  [`53f1b25`](https://github.com/pgbackrest/pgbackrest/commit/53f1b2520434221c01caf92e052403a28c455c1b) 改进零页面验证。; 议题 [#952](https://github.com/pgbackrest/pgbackrest/issues/952); 拉取请求 [#1669](https://github.com/pgbackrest/pgbackrest/pull/1669)
- 处理未能优雅关闭连接的 TLS 服务端。（*审核：David Christensen, Stephen Frost. 测试：Rémi Vidier.*）

  某些服务器会直接关闭套接字，而非关闭 TLS 连接。如果响应没有内容长度或分块编码，且其内容能够解析，现在会将套接字关闭视为 EOF。这些服务器从 v2.35 起曾无法正常使用。

  议题 [#1638](https://github.com/pgbackrest/pgbackrest/issues/1638); 拉取请求 [#1677](https://github.com/pgbackrest/pgbackrest/pull/1677); 提交 [`59a5373`](https://github.com/pgbackrest/pgbackrest/commit/59a5373cf85e4ad0057b592bfe855495384dfcbd)
- 在 `info` 命令输出中添加备份的 LSN 信息。（*由 Stefan Fercot 贡献，David Steele 审核。*）

  指定 `set` 时以及 JSON 输出中，会显示备份的开始和结束 LSN，可用于基于 LSN 的时间点恢复。

  拉取请求 [#1610](https://github.com/pgbackrest/pgbackrest/pull/1610); 提交 [`d866dd5`](https://github.com/pgbackrest/pgbackrest/commit/d866dd5c297dc046581134a108032cf9694cae0e)
- 自动去除 `repo-ls` 路径末尾的斜杠。（*由 David Christensen 贡献，David Steele 审核。*）

  对某些仓库存储类型，路径末尾带斜杠会使 `repo-ls` 不显示任何内容。

  拉取请求 [#1673](https://github.com/pgbackrest/pgbackrest/pull/1673); 提交 [`6320712`](https://github.com/pgbackrest/pgbackrest/commit/632071232344a1160ef932d6e0d65eb3149ed226)
- 不重试致命错误。（*由 Reid Thompson 审核。*）

  重试致命错误，尤其是内存不足错误，可能导致卡死。现在会直接报告断言和内存错误，不再重试。

  [`8573a2d`](https://github.com/pgbackrest/pgbackrest/commit/8573a2df14d0bfd5578333b68147cc12c93c6f96) 改进 protocolClientFree() 的协议模块错误测试。

  [`8d0cce6`](https://github.com/pgbackrest/pgbackrest/commit/8d0cce66f83abc1ff02a985ec3f0d7e285c09d72) 协议模块的错误重试测试改用普通错误。

  [`8046f06`](https://github.com/pgbackrest/pgbackrest/commit/8046f0630715015d5adcced570c54e9a183c0e73) 不重试致命错误。; 拉取请求 [#1658](https://github.com/pgbackrest/pgbackrest/pull/1658)
- 移除对 PostgreSQL `8.3`/`8.4` 的支持。（*由 Reid Thompson、Stefan Fercot 审核。*）

  没有证据表明这些版本仍在使用，而继续支持会占用开发和测试时间。若要备份这些版本或从中迁移，请使用旧版 pgBackRest。

  拉取请求 [#1611](https://github.com/pgbackrest/pgbackrest/pull/1611); 提交 [`bb4b30d`](https://github.com/pgbackrest/pgbackrest/commit/bb4b30ddd3f80c246c565eb4769efc82b9509648)
- 移除尝试检测额外文件系统压缩的逻辑。（*由 Reid Thompson、Stefan Fercot 审核。*）

  复制文件后，pgBackRest 此前会检查其磁盘占用，以检测 ZFS 等文件系统的压缩效果。这部分没有测试，在有大量小文件时很慢，并且妨碍文件打包。`info` 中的仓库大小现在表示 pgBackRest 实际写入的大小。

  拉取请求 [#1652](https://github.com/pgbackrest/pgbackrest/pull/1652); 提交 [`cb630ff`](https://github.com/pgbackrest/pgbackrest/commit/cb630ffe3b5c819b5e97ac11d5974000bd44d632)

**文档漏洞修复：**

- 将 TLS 文档中的 `repo` 选项移至 `global` 部分。（*由 Anton Kurochkin 报告。*）

  用户指南此前在 stanza 配置节中设置这些选项，虽然在某些情况下可行，却不是最佳实践。

  提交 [`53de3e3`](https://github.com/pgbackrest/pgbackrest/commit/53de3e3aeb71f8209f56167941df35bbfcb7cdc9)
- 从 stanza 命令中移除未使用的 `backup-standby` 选项。（*由 Stefan Fercot 报告。*）

  `stanza-create` 和 `stanza-upgrade` 的命令参考及帮助此前列出了 `backup-standby`，但实际并未使用它。

  提交 [`5cbb4a3`](https://github.com/pgbackrest/pgbackrest/commit/5cbb4a3e6b13598b90cae46fad28c31604f9f094)
- 修复帮助文档和版本说明中的错别字。（*由 Daniel Gustafsson 修复，David Steele 审核。*）

  [`cacfdd9`](https://github.com/pgbackrest/pgbackrest/commit/cacfdd94d74307285b1b590ec0977d7db3142d0d) 修复帮助和发行说明中的笔误。; 拉取请求 [#1671](https://github.com/pgbackrest/pgbackrest/pull/1671)

  [`5c332a0`](https://github.com/pgbackrest/pgbackrest/commit/5c332a0b100d5a5180b3d95bd90d4d7b521b42db) 修正 cacfdd94 和 f798458e 中的发行说明归因。

**文档改进：**

- 在 systemd 服务配置中添加存活检查。（*由 Yogesh Sharma 建议。*）

  `pgbackrest.service` 示例现在会在服务器启动后不久检查它是否仍在运行。此前即使服务器启动失败，也不会报告错误，而 systemd 只是在后台重试。

  提交 [`f1bdf3e`](https://github.com/pgbackrest/pgbackrest/commit/f1bdf3e04b07dc9a2eaa1fdbe5278cc18371e868)
- 添加解释 WAL 归档后缀的常见问题解答。（*由 Stefan Fercot 贡献，David Steele 审核。*）

  仓库中 WAL 文件的后缀是其 SHA1 校验和，用于验证文件，不能省略。

  议题 [#1485](https://github.com/pgbackrest/pgbackrest/issues/1485); 议题 [#1663](https://github.com/pgbackrest/pgbackrest/issues/1663); 拉取请求 [#1664](https://github.com/pgbackrest/pgbackrest/pull/1664); 提交 [`98d525d`](https://github.com/pgbackrest/pgbackrest/commit/98d525dba43ba259ff7989746b8e5be3382c189d)
- 说明复制槽不会在恢复时被还原。（*由 Reid Thompson 贡献，David Steele、Stefan Fercot 审核，Christophe Courtois 建议。*）

  议题 [#1585](https://github.com/pgbackrest/pgbackrest/issues/1585); 拉取请求 [#1601](https://github.com/pgbackrest/pgbackrest/pull/1601); 提交 [`a82f017`](https://github.com/pgbackrest/pgbackrest/commit/a82f0179cdd5742e5c5b1e0bdfd23166753fdb38)

### v2.37 版本说明

*TLS 服务端*

*发布于 2022 年 1 月 3 日*

**重要提示**：如果 `restore` 命令找不到与指定时间目标匹配的备份，现在将抛出错误，而之前仅记录一条警告。

**漏洞修复：**

- 修复 `restore` delta 链接映射中路径/文件已存在时的问题。（*由 Reid Thompson 审核，Younes Alhroub 报告。*）

  使用 `link-map` 或 `link-all` 将已存在的路径或文件映射为链接时，delta 恢复此前会保留原有路径或文件。现在会将其替换为链接。

  议题 [#1588](https://github.com/pgbackrest/pgbackrest/issues/1588); 拉取请求 [#1589](https://github.com/pgbackrest/pgbackrest/pull/1589); 提交 [`a73fe4e`](https://github.com/pgbackrest/pgbackrest/commit/a73fe4eb966f9685f6e4179c397a10c1e7f15f19)
- 修复连接重试时的套接字泄漏问题。（*由 Reid Thompson 审核，James Coleman 报告。*）

  在优化构建中，失败连接尝试的套接字此前未关闭，每次重试都会泄漏一个套接字。

  议题 [#1593](https://github.com/pgbackrest/pgbackrest/issues/1593); 拉取请求 [#1594](https://github.com/pgbackrest/pgbackrest/pull/1594); 提交 [`615bdff`](https://github.com/pgbackrest/pgbackrest/commit/615bdff4030a31bfedfe7df04676e3948ec9c2c0)

**新功能：**

- 新增 TLS 服务端。（*审核：Stephen Frost, Reid Thompson. 测试：Andrew L'Ecuyer.*）

  `server` 命令启动 TLS 服务器，可代替 SSH 访问仓库主机和 PostgreSQL 主机。在客户端设置 `repo-host-type=tls` 或 `pg-host-type=tls`，并通过 `tls-server-*` 选项配置证书和客户端授权。`SIGHUP` 重新加载配置，`SIGTERM` 停止服务器。

  [`2d963ce`](https://github.com/pgbackrest/pgbackrest/commit/2d963ce9471808172f879916c3f3accc35f14d56) 将 server-start 命令重命名为 server。

  [`7b3ea88`](https://github.com/pgbackrest/pgbackrest/commit/7b3ea883c7c010aafbeb14d150d073a113b703e4) 为 TLS 服务器添加 SIGTERM 和 SIGHUP 处理。; 拉取请求 [#1572](https://github.com/pgbackrest/pgbackrest/pull/1572)

  [`f06101d`](https://github.com/pgbackrest/pgbackrest/commit/f06101de77a980c7e4115762f2fc301280aa4127) 添加 TLS 服务器文档。; 拉取请求 [#1597](https://github.com/pgbackrest/pgbackrest/pull/1597)

  [v2.36](#v236-release-notes) 中的开发变更：

  [`ccc255d`](https://github.com/pgbackrest/pgbackrest/commit/ccc255d3e05d8ce2b6ac251d1498f71b04098a86) 添加 TLS 服务器。; 拉取请求 [#1504](https://github.com/pgbackrest/pgbackrest/pull/1504)

  [`13d4559`](https://github.com/pgbackrest/pgbackrest/commit/13d4559708819787ad05be6f37ec0badb0eccae5) 检查 getsockopt() 的返回值。

  [v2.35](#v235-release-notes) 中的开发变更：

  [`947c7a8`](https://github.com/pgbackrest/pgbackrest/commit/947c7a84cb37d09ab925785ca7670c970e32b8a3) 重构 cmdLocal()/cmdRemote()，使其接受 ProtocolServer 对象。

  [`0999de0`](https://github.com/pgbackrest/pgbackrest/commit/0999de0279fabf35af80396a9a8d35546ec02d53) 将 noop 从 protocolClientNew() 移到本地和远程初始化流程。
- 新增 `--cmd` 选项。（*由 Reid Thompson 贡献，Stefan Fercot、David Steele 审核，Virgile CREVON 建议。*）

  将 `cmd` 设为 pgBackRest 写出的命令所应使用的 pgBackRest 可执行文件，例如 `recovery.conf` 中的 `restore_command`。

  议题 [#1537](https://github.com/pgbackrest/pgbackrest/issues/1537); 拉取请求 [#1540](https://github.com/pgbackrest/pgbackrest/pull/1540); 提交 [`2a57647`](https://github.com/pgbackrest/pgbackrest/commit/2a576477b316238473525e56bc8fc8ea5790455f)

**改进：**

- 在备份开始后立即检查归档。（*由 Reid Thompson、David Christensen 审核。*）

  此前 WAL 归档不工作时，只有在复制完所有文件后，备份才会失败。现在在备份开始后立即检查归档。在空闲系统上，会创建恢复点以切换 WAL 段。

  议题 [#152](https://github.com/pgbackrest/pgbackrest/issues/152); 拉取请求 [#1570](https://github.com/pgbackrest/pgbackrest/pull/1570); 提交 [`1f14f45`](https://github.com/pgbackrest/pgbackrest/commit/1f14f45dfb0d1677a695719381cbd5a8a3c6c986)
- 为备份添加时间线和检查点检查。（*由 Stefan Fercot、Reid Thompson 审核。*）

  备份现在会检查 `pg_control` 中的检查点和时间线是否对应备份开始时的状态，并确认备库正在跟随主库，即处于同一时间线且其检查点不晚于备份检查点。

  拉取请求 [#1581](https://github.com/pgbackrest/pgbackrest/pull/1581); 提交 [`49145d7`](https://github.com/pgbackrest/pgbackrest/commit/49145d72bac16498cdbf5eeb3cd6128ea0be0667)
- 在备份期间检查集群是否存活且配置正确。（*由 Stefan Fercot 审核。*）

  集群停止或备库提升时，备份现在会立即失败。此前只有到备份结束时才会检测到主库停止，也不会检测备库提升。

  拉取请求 [#1584](https://github.com/pgbackrest/pgbackrest/pull/1584); 提交 [`bd2ba80`](https://github.com/pgbackrest/pgbackrest/commit/bd2ba802db11c505ec69943fa81b2b379073fbf4)
- 当 `restore` 无法找到匹配时间目标的备份时，报错退出。（*由 Reid Thompson、Douglas J Hunley 审核，Douglas J Hunley 建议。*）

  此前这只是一条容易被忽略的警告，用户可能花费大量时间恢复一个无法到达目标的备份。

  议题 [#1582](https://github.com/pgbackrest/pgbackrest/issues/1582); 拉取请求 [#1586](https://github.com/pgbackrest/pgbackrest/pull/1586); 提交 [`be4ac39`](https://github.com/pgbackrest/pgbackrest/commit/be4ac3923cb77873da298a30aca5d847b3c635af)
- 解析 S3/Azure 端点中的协议/端口。（*由 Reid Thompson 贡献，David Steele 审核。*）

  `repo-s3-endpoint`、`repo-azure-endpoint` 和 `repo-storage-host` 现在可以包含协议和端口，例如 `https://host:9000`。

  议题 [#1560](https://github.com/pgbackrest/pgbackrest/issues/1560); 拉取请求 [#1591](https://github.com/pgbackrest/pgbackrest/pull/1591); 提交 [`6a12458`](https://github.com/pgbackrest/pgbackrest/commit/6a12458440168f13cb05d70f36ea54b1860e390c)
- 当 `checkpoint_timeout` 超过 `db-timeout` 时发出警告。（*贡献：Stefan Fercot. 审核：David Steele.*）

  设置 `start-fast=n` 时，如果 `checkpoint_timeout` 大于 `db-timeout`，备份可能在等待检查点时超时。现在会对这种情况发出警告。

  拉取请求 [#1564](https://github.com/pgbackrest/pgbackrest/pull/1564); 提交 [`6723305`](https://github.com/pgbackrest/pgbackrest/commit/672330593789f07aaad90bbafcd2597cbc602686)
- 在 HTTP 错误输出中添加请求方法（verb）。（*由 Christoph Berg 贡献，David Steele 审核。*）

  拉取请求 [#1566](https://github.com/pgbackrest/pgbackrest/pull/1566); 提交 [`c38e2d3`](https://github.com/pgbackrest/pgbackrest/commit/c38e2d31709804eb4b9125a15ad84c8fc813f366)
- 允许布尔命令行选项使用 y/n 作为参数。（*由 Reid Thompson 贡献，David Steele 审核。*）

  拉取请求 [#1571](https://github.com/pgbackrest/pgbackrest/pull/1571); 提交 [`1a0560d`](https://github.com/pgbackrest/pgbackrest/commit/1a0560d363d28737befb8c222647783d4fc2ca29)
- 使备份大小日志与 `info` 命令输出完全一致。（*由 Reid Thompson 贡献，David Steele 审核，Mahomed Hussein 建议。*）

  日志中的备份大小现在只包含实际复制的文件，以及 `backup_label` 和 `tablespace_map`。此前，例如主备切换后的增量备份，会记录每个已检查文件的大小。

  [`6e63576`](https://github.com/pgbackrest/pgbackrest/commit/6e635764a66278d5a8c2b4d30b23063bc3923067) 使备份日志中的大小与 info 命令报告的大小一致。; 议题 [#766](https://github.com/pgbackrest/pgbackrest/issues/766); 拉取请求 [#1562](https://github.com/pgbackrest/pgbackrest/pull/1562)

  [`afe77e7`](https://github.com/pgbackrest/pgbackrest/commit/afe77e76e0adf948138d797e227a6f4c7d47c2eb) 更新 6e635764 的贡献者。

  [`1e77fc3`](https://github.com/pgbackrest/pgbackrest/commit/1e77fc3d75490b7a1b6a0b31be9298c995ec672f) 在日志输出中计入 backup_label 和 tablespace_map 的文件大小。; 拉取请求 [#1568](https://github.com/pgbackrest/pgbackrest/pull/1568)

  [`a3d7a23`](https://github.com/pgbackrest/pgbackrest/commit/a3d7a23a9d90611a3d31947598fbea240b250710) 使用 infoBackupDataByLabel() 记录备份大小。; 拉取请求 [#1573](https://github.com/pgbackrest/pgbackrest/pull/1573)

  [`dcb4f09`](https://github.com/pgbackrest/pgbackrest/commit/dcb4f09d8315e92c0877b589f3fa9b7f0fa65f93) 回退 1e77fc3d 对 backupFilePut() 的更改。

**文档改进：**

- 以合适的单位显示大小选项的默认值和允许范围。（*由 Reid Thompson 审核。*）

  [`cff961e`](https://github.com/pgbackrest/pgbackrest/commit/cff961ede7e41fa8035ffe7451a22eb5ea0e46c1) 集中处理配置呈现期间构建值列表的逻辑。

  [`038abaa`](https://github.com/pgbackrest/pgbackrest/commit/038abaa71d816cc87b382bd81d3df62ddec9455a) 使用合适的单位显示大小选项的默认值和允许值。; 拉取请求 [#1557](https://github.com/pgbackrest/pgbackrest/pull/1557)
- 修复 `tablespace-map-all` 选项的错别字并改进文档。（*由 Reid Thompson 审核，Reid Thompson 建议。*）

  提交 [`df89eff`](https://github.com/pgbackrest/pgbackrest/commit/df89eff429e9b8fbc68d9e9895badf9719fd31d2)
- 移除关于未来多仓库支持的过时说明。（*由 David Christensen 建议。*）

  文档此前声称仅允许一个仓库，但从 v2.33 起就已支持多仓库。

  提交 [`dea7524`](https://github.com/pgbackrest/pgbackrest/commit/dea752477ab8e812cdbd717eb2091baf3f5d0906)

<span id="v236-release-notes"></span>

### v2.36 版本说明

*小型漏洞修复与改进*

*发布于 2021 年 11 月 1 日*

**漏洞修复：**

- 允许将 `global` 用作 stanza 名称前缀。（*由 Stefan Fercot 审核，Younes Alhroub 报告。*）

  以 `global` 开头的 stanza 名称（例如 `global_stanza`）此前会被拒绝，因为配置解析器将其误认为全局配置节。

  议题 [#1524](https://github.com/pgbackrest/pgbackrest/issues/1524); 拉取请求 [#1525](https://github.com/pgbackrest/pgbackrest/pull/1525); 提交 [`498902e`](https://github.com/pgbackrest/pgbackrest/commit/498902e885c9d7a44648ccc01b20454094d5b742)
- 修复 GCS 密钥文件无效时的段错误。（*由 Stephen Frost 审核，Henrik Feldt 报告。*）

  GCS 密钥文件缺少客户端邮箱、私钥或令牌 URI 时，此前会导致段错误。现在会报告错误。

  议题 [#1536](https://github.com/pgbackrest/pgbackrest/issues/1536); 提交 [`2cea005`](https://github.com/pgbackrest/pgbackrest/commit/2cea005f740d640290a9948595f5933833e30e7d)

**改进：**

- 允许 `link-map` 选项创建新链接。（*由 Don Seiler、Stefan Fercot、Chris Bandy 审核，Don Seiler 建议。*）

  `link-map` 此前只能重新映射备份中已有的链接。现在可以为备份中的任意路径或文件创建新链接。

  [`d89a677`](https://github.com/pgbackrest/pgbackrest/commit/d89a67776cfbb7b3047dbe297cc0c768e5c670e8) 重构 command/restore 单元中的 restoreManifestMap() 测试。

  [`cf1a575`](https://github.com/pgbackrest/pgbackrest/commit/cf1a57518fe3230886509f59fcec9c9a81e6513c) 重构 restoreManifestMap()，改由 link-map 驱动。

  [`68c5f3e`](https://github.com/pgbackrest/pgbackrest/commit/68c5f3eaf18fc9bd10fde15a323890bcdcbf4534) 允许 link-map 选项创建新链接。; 议题 [#1409](https://github.com/pgbackrest/pgbackrest/issues/1409); 拉取请求 [#1520](https://github.com/pgbackrest/pgbackrest/pull/1520)
- 将 `pg`/`repo` 选项允许的最大索引值提升至 256。（*由 Cynthia Shang 审核。*）

  `pg` 选项的最大索引此前为 8，`repo` 选项为 4。现在均为 256，例如 `pg256-path`。

  [`02b06aa`](https://github.com/pgbackrest/pgbackrest/commit/02b06aa4957cf3fe64ceb7a44cc1893bff12fe99) 将 pg/repo 选项允许的最大索引提高到 256。; 拉取请求 [#1481](https://github.com/pgbackrest/pgbackrest/pull/1481)

  [`71047a9`](https://github.com/pgbackrest/pgbackrest/commit/71047a9d6d1eea71b3fbd430983541a54049cc69) 使用 strncpy() 限制复制到 optionName 的字符数。
- 为 AWS S3 添加 `WebIdentity` 认证支持。（*审核：James Callahan, Reid Thompson, Andrew L'Ecuyer. 测试：Benjamin Blattberg.*）

  设置 `repo-s3-key-type=web-id` 可在 EKS 环境中自动获取凭据。

  [`cfd8233`](https://github.com/pgbackrest/pgbackrest/commit/cfd823355af2ac99f30c5e1393a121c6dbf622b7) 重构 S3 存储驱动，以支持更多认证方式。

  [`3879bc6`](https://github.com/pgbackrest/pgbackrest/commit/3879bc69b888daa04d2ca98a2d1219cf22519ddc) 为 AWS S3 添加 WebIdentity 认证。; 议题 [#1203](https://github.com/pgbackrest/pgbackrest/issues/1203); 拉取请求 [#1527](https://github.com/pgbackrest/pgbackrest/pull/1527)

  [`1152f7a`](https://github.com/pgbackrest/pgbackrest/commit/1152f7a7d64e69eed1d9e74b48a308f6c742c28a) 修复 tlsClientNew() 调用中参数不匹配的问题。
- 添加 `repo-azure-uri-style` 选项。

  将 `repo-azure-uri-style` 设为 `host`（默认）或 `path`，可选择 Azure 的 URI 风格。当端点看起来像由多个部分组成的主机名时，Azurite 会使用主机式 URI。

  提交 [`096829b`](https://github.com/pgbackrest/pgbackrest/commit/096829b3b257444162417662612e80d8cb2ac6ec)
- 在 `backup.info` 中报告备份文件验证错误。（*由 Stefan Fercot 贡献，David Steele 审核。*）

  备份中发现的错误（例如无效页面校验和）此前仅在 `info` 指定 `set` 时显示。现在通过 `backup.info` 中的标志，在文本和 JSON 输出中表明备份包含错误。查看详情仍需指定 `set`。

  议题 [#1484](https://github.com/pgbackrest/pgbackrest/issues/1484); 拉取请求 [#1508](https://github.com/pgbackrest/pgbackrest/pull/1508); 提交 [`34f7873`](https://github.com/pgbackrest/pgbackrest/commit/34f78734325743b4e34cb39224852e6debf49750)
- 在在线备份恢复日志中添加恢复开始时间。（*由 Tom Swartz、Stefan Fercot 审核，Tom Swartz 建议。*）

  恢复现在会记录后续恢复重放的起始时间，便于判断需要重放多少 WAL。

  议题 [#1507](https://github.com/pgbackrest/pgbackrest/issues/1507); 拉取请求 [#1518](https://github.com/pgbackrest/pgbackrest/pull/1518); 提交 [`9e79f0e`](https://github.com/pgbackrest/pgbackrest/commit/9e79f0e64b661e944ce2b3897c366feea1544ac2)
- 本地任务失败时，同时报告原始错误和重试信息。（*由 Stefan Fercot 审核。*）

  本地任务重试后仍失败时，现在会先报告原始错误及其堆栈跟踪，再列出重试错误。此前仅报告最后一个错误，而它往往只是协议失步等连锁失败。

  [`136d309`](https://github.com/pgbackrest/pgbackrest/commit/136d309dd4bc1ada9f3d775f036b62292fda390b) 允许为 errorInternalThrow() 指定堆栈跟踪。

  [`ae40ed6`](https://github.com/pgbackrest/pgbackrest/commit/ae40ed6ec9cf77e577518b128518a5763767f589) 为 HRN_CFG_LOAD() 添加 jobRetry 参数。

  [`6af827c`](https://github.com/pgbackrest/pgbackrest/commit/6af827cbb1e78cd4c5d649ed4cb24c49a7204b8f) 本地任务失败时报告原始错误及重试情况。; 拉取请求 [#1521](https://github.com/pgbackrest/pgbackrest/pull/1521)
- 在 `info` 文本输出中，将页面校验和错误重命名为错误列表。（*由 Stefan Fercot 审核。*）

  `info` 文本输出中的标签现在为 "error list"，不再是 "page checksum error"。文件也可能存在对齐错误，而非页面校验和错误。

  拉取请求 [#1519](https://github.com/pgbackrest/pgbackrest/pull/1519); 提交 [`9346895`](https://github.com/pgbackrest/pgbackrest/commit/9346895f5b61627b50d431f09447e08d8a50caa8)
- 在备库重放超时信息中添加提示。（*由 Cynthia Shang、Stefan Fercot 审核，Leigh Downs 建议。*）

  等待备库重放超时时，现在会提示检查复制是否运行，或禁用 `backup-standby` 改为从主库备份。

  议题 [#1434](https://github.com/pgbackrest/pgbackrest/issues/1434); 提交 [`b7ef12a`](https://github.com/pgbackrest/pgbackrest/commit/b7ef12a76f219881d0b24c715592af96fe5c9b8f)

**文档漏洞修复：**

- 修复用户指南中的错误主机名。（*修复：Reid Thompson. 审核：David Steele.*）

  复制配置此前在 `pg_hba.conf` 中使用了 pg-primary 的 IP 地址，而非 pg-standby 的 IP 地址。

  拉取请求 [#1544](https://github.com/pgbackrest/pgbackrest/pull/1544); 提交 [`1cb8ae1`](https://github.com/pgbackrest/pgbackrest/commit/1cb8ae15de5b4276682bdd9825ca97012cd43855)

**文档改进：**

- 改进选项文档。

  `buffer-size` 的帮助现在说明了使用该选项的所有操作；`cmd-ssh`、`repo-host-cmd` 和 `pg-host-cmd` 的描述已统一；`archive-header-check` 则移到了配置参考的归档章节。

  [`3763624`](https://github.com/pgbackrest/pgbackrest/commit/376362475e3b3b13b70313d9002d4ff8b25b4b40) 将 archive-header-check 选项移到归档参考章节。

  [`e1f6c06`](https://github.com/pgbackrest/pgbackrest/commit/e1f6c066b3da11fd21b1155c90370c3fa2da06b7) 改进 buffer-size 选项文档。

  [`fa564ee`](https://github.com/pgbackrest/pgbackrest/commit/fa564ee1969229b5cf60d2479d8ace85325f4db3) 改进 cmd-ssh、repo-host-cmd 和 pg-host-cmd 选项文档。

<span id="v235-release-notes"></span>

### v2.35 版本说明

*二进制协议*

*发布于 2021 年 8 月 23 日*

**重要提示**：`backup`/`restore` 命令中已复制文件的日志级别已更改为 `detail`。这使 `info` 日志级别的输出不再冗杂，如需查看这些信息，请将 `backup`/`restore` 命令的日志级别设置为 `detail`。

**漏洞修复：**

- 检测 S3 多部分上传完成阶段的错误。（*审核：Cynthia Shang. 测试：Marco Montagna. 报告：Marco Montagna, Lev Kokotov, Anderson A. Mallmann.*）

  即使 S3 返回 HTTP 成功状态，完成分段上传仍可能失败。现在将不含 `ETag` 的响应视为失败，并重试任务。

  [`8e1807c`](https://github.com/pgbackrest/pgbackrest/commit/8e1807cdbe08a6e059ff79220247cf4b3c058979) 检测 S3 分段上传完成阶段的错误。; 议题 [#1116](https://github.com/pgbackrest/pgbackrest/issues/1116); 议题 [#1290](https://github.com/pgbackrest/pgbackrest/issues/1290); 议题 [#1433](https://github.com/pgbackrest/pgbackrest/issues/1433); 拉取请求 [#1438](https://github.com/pgbackrest/pgbackrest/pull/1438)

  [`25508a4`](https://github.com/pgbackrest/pgbackrest/commit/25508a48e0d3b0a3eabc6d1fe858b9c3dc12dc86) 补充 8e187cdb 遗漏的贡献者。
- 修复循环符号链接的检测问题。（*由 Stefan Fercot 审核，Rohit Raveendran 报告。*）

  此前会先跟随链接，再进行检查，循环链接因此可能使清单构建陷入无限递归并崩溃。

  议题 [#1447](https://github.com/pgbackrest/pgbackrest/issues/1447); 拉取请求 [#1452](https://github.com/pgbackrest/pgbackrest/pull/1452); 提交 [`43b8746`](https://github.com/pgbackrest/pgbackrest/commit/43b874628c86ec4fe297dbd5cab5bd3f62b8639b)
- 仅将选定的 `repo` 选项传递给远端。（*由 David Christensen、Cynthia Shang 审核，Greg Sabino Mullane、David Christensen 报告。*）

  远端仅使用一个仓库，其他仓库的选项可能在远端造成冲突。

  拉取请求 [#1480](https://github.com/pgbackrest/pgbackrest/pull/1480); 提交 [`935de1e`](https://github.com/pgbackrest/pgbackrest/commit/935de1e7a06d60415c16cad137875b49346337c6)

**改进：**

- 新增二进制协议。（*由 Cynthia Shang 审核。*）

  本地和远程进程现在使用二进制 pack 格式通信，不再使用 JSON。pack 更紧凑，生成和解析更快，且具有严格的类型。每条消息集中写入，降低了错误使协议处于异常状态的可能性，消息也不再有大小限制。

  [`6a1c033`](https://github.com/pgbackrest/pgbackrest/commit/6a1c0337ddee9900dda58b7d2fa74d82c0586ed2) 二进制协议。; 拉取请求 [#1424](https://github.com/pgbackrest/pgbackrest/pull/1424)

  [`2d5cbfc`](https://github.com/pgbackrest/pgbackrest/commit/2d5cbfc73142fa99df609aa23b64db5342e73c88) 修复 6a1c0337 中二进制协议引入的内存泄漏。

  [`f716cb6`](https://github.com/pgbackrest/pgbackrest/commit/f716cb6f4f9765baa03f71b5563786d79d9f04a2) 修复 6a1c0337 中二进制协议引入的释放后使用问题。

  [`4fb6384`](https://github.com/pgbackrest/pgbackrest/commit/4fb6384f10f6cd26c422ab9b24feb5ae0ebeeee9) 修复 6a1c0337 中二进制协议引入的其他内存泄漏。
- 在 `restore` 时自动创建数据目录。（*由 Stefan Fercot 贡献，David Steele 审核，Chris Bandy 建议。*）

  从 Perl 迁移过来的一项检查，阻止了恢复过程创建数据目录。

  议题 [#1445](https://github.com/pgbackrest/pgbackrest/issues/1445); 拉取请求 [#1454](https://github.com/pgbackrest/pgbackrest/pull/1454); 提交 [`056a307`](https://github.com/pgbackrest/pgbackrest/commit/056a3070e0dba299389c7b5049878d40dd91ec9a)
- 允许 `restore` 使用 `--type=lsn`。（*由 Stefan Fercot 贡献，Cynthia Shang 审核，James Coleman 建议。*）

  在 PostgreSQL >= 10 上，设置 `type=lsn` 并在 `target` 中指定 LSN，即可恢复至该 LSN。

  议题 [#1339](https://github.com/pgbackrest/pgbackrest/issues/1339); 拉取请求 [#1462](https://github.com/pgbackrest/pgbackrest/pull/1462); 提交 [`563d117`](https://github.com/pgbackrest/pgbackrest/commit/563d117967ab9770f9f646c6186d0bc37121611f)
- 将 `backup`/`restore` 已复制文件的日志级别更改为 `detail`。（*由 Stefan Fercot 审核，Jens Wilke 建议。*）

  此变更减少了 `info` 日志级别的输出噪声。将日志级别设为 `detail`，可查看每个已复制文件。

  议题 [#1277](https://github.com/pgbackrest/pgbackrest/issues/1277); 拉取请求 [#1455](https://github.com/pgbackrest/pgbackrest/pull/1455); 提交 [`849ab34`](https://github.com/pgbackrest/pgbackrest/commit/849ab343aa10d66fbbd27cad407eff981c186d06)
- 等待检查点 LSN 赶上重放 LSN 时改为循环等待。（*由 Stefan Fercot 贡献，David Steele 审核，Fatih Mencutekin 建议。*）

  在备库上，检查点 LSN 在 `pg_control` 更新前可能略落后于重放 LSN。现在备份会持续检查，而非立即失败。

  议题 [#1450](https://github.com/pgbackrest/pgbackrest/issues/1450); 拉取请求 [#1460](https://github.com/pgbackrest/pgbackrest/pull/1460); 提交 [`8fac1ac`](https://github.com/pgbackrest/pgbackrest/commit/8fac1ac50d28557d162fbb251fbbdcc3c9fb950c)
- 记录 `backup` 文件总数与 `restore` 大小/文件总数。（*由 Cynthia Shang 审核。*）

  备份大小现在在备份结束时记录，包含主要复制阶段后加入清单的文件，例如 `backup_label` 和 WAL。恢复现在也会记录总大小和文件总数。

  拉取请求 [#1489](https://github.com/pgbackrest/pgbackrest/pull/1489); 提交 [`a0bdfa4`](https://github.com/pgbackrest/pgbackrest/commit/a0bdfa436c9e1c2723be905ebe5cef7809a26244)

**文档漏洞修复：**

- 修复用户指南中错误的主机名。（*由 Stefan Fercot 审核，Greg Sabino Mullane 报告。*）

  某些示例此前显示 `pg1` 而非主机名，安装代码块也无论指定哪个主机，都在构建主机上安装软件包。

  拉取请求 [#1479](https://github.com/pgbackrest/pgbackrest/pull/1479); 提交 [`155ef85`](https://github.com/pgbackrest/pgbackrest/commit/155ef85013088a1150a4c15b04af36420d06e9c3)

**文档改进：**

- 更新贡献文档并添加 Pull Request 模板。（*由 Cynthia Shang 贡献，David Steele 审核。*）

  贡献指南现在有目录，并增加了解读测试输出和提交拉取请求的章节。GitHub 现在会为新拉取请求显示模板。

  [`e3d05e2`](https://github.com/pgbackrest/pgbackrest/commit/e3d05e2b4aa80149219b6d49a3136b34fa268127) 更新贡献文档并添加拉取请求模板。; 拉取请求 [#1469](https://github.com/pgbackrest/pgbackrest/pull/1469)

  [`71b654f`](https://github.com/pgbackrest/pgbackrest/commit/71b654fc29497319862fe01c3917bbc353cc6dd9) 修复链接并更新子进程示例。; 拉取请求 [#1487](https://github.com/pgbackrest/pgbackrest/pull/1487)
- 在用户指南中重新整理备份文档。（*由 Cynthia Shang 审核。*）

  “快速启动选项”和“归档超时”章节移至“快速入门 - 执行备份”。仅适用于 PostgreSQL <= 9.6 的“自动停止选项”章节已移除。

  拉取请求 [#1488](https://github.com/pgbackrest/pgbackrest/pull/1488); 提交 [`6ab18dc`](https://github.com/pgbackrest/pgbackrest/commit/6ab18dc0fa42885aea8eb9405ab0a943c2d49a71)
- 在命令参考中阐明 `restore` 的 `--type` 行为。（*由 Cynthia Shang 贡献，David Steele 审核。*）

  参考文档现在明确说明：目标早于最新备份且 `type` 不是 `time` 时，必须指定 `set`。

  提交 [`a6691c6`](https://github.com/pgbackrest/pgbackrest/commit/a6691c6f615f90195aeb6c1c6657a6afd79a10d3)
- 修复文档和注释中的错别字。（*由 Eric Radman 贡献，David Steele 审核。*）

  拉取请求 [#1446](https://github.com/pgbackrest/pgbackrest/pull/1446); 提交 [`23bdc3d`](https://github.com/pgbackrest/pgbackrest/commit/23bdc3deb62a622713064df3b0777110ebba8723)

**测试套件改进：**

- 添加测试路径在仓库路径内的检查。（*由 Greg Sabino Mullane 审核，Greg Sabino Mullane 建议。*）

  测试路径位于仓库路径内时，由于仓库会被复制到测试路径，会导致奇怪的失败。`test.pl` 现在会对此报错。

  议题 [#1472](https://github.com/pgbackrest/pgbackrest/issues/1472); 拉取请求 [#1474](https://github.com/pgbackrest/pgbackrest/pull/1474); 提交 [`e32f9e1`](https://github.com/pgbackrest/pgbackrest/commit/e32f9e146b11389e3d16feba9665360b73737d66)
- 添加 CodeQL 静态代码分析。（*由 Cynthia Shang 审核。*）

  CodeQL 现在在 CI 中运行。它发现的问题已修复，例如将 `gmtime()`/`localtime()` 替换为 `gmtime_r()`/`localtime_r()`。

  拉取请求 [#1457](https://github.com/pgbackrest/pgbackrest/pull/1457); 提交 [`3c8819e`](https://github.com/pgbackrest/pgbackrest/commit/3c8819e10f9eff89195566e7e02f349373f5c4c7)
- 更新测试以使用标准模式。（*由 Cynthia Shang 贡献，David Steele 审核。*）

  [`3f9fbc3`](https://github.com/pgbackrest/pgbackrest/commit/3f9fbc3c24eab48e7ae2871484ea01273049e601) 更新 command/expire 测试，使用标准模式。; 拉取请求 [#1420](https://github.com/pgbackrest/pgbackrest/pull/1420)

  [`03021c6`](https://github.com/pgbackrest/pgbackrest/commit/03021c6a17f1374e84ef42614fa1dd2a6be4b64d) 更新 command/stanza 测试，使用标准模式。; 拉取请求 [#1426](https://github.com/pgbackrest/pgbackrest/pull/1426)

  [`8dd882b`](https://github.com/pgbackrest/pgbackrest/commit/8dd882badee76b038dc8b494a1112eb3e18ef678) 更新 info/infoArchive 测试，使用标准模式。; 拉取请求 [#1436](https://github.com/pgbackrest/pgbackrest/pull/1436)

  [`ff95edd`](https://github.com/pgbackrest/pgbackrest/commit/ff95eddc369597c76a9ea70ffbada493ed4d1951) 更新 command/verify 测试，使用标准模式。; 拉取请求 [#1435](https://github.com/pgbackrest/pgbackrest/pull/1435)

  [`17c9ed0`](https://github.com/pgbackrest/pgbackrest/commit/17c9ed0ef0380fb14fba9a5299b6618ca8c92c2e) 更新 command/info 测试，使用标准模式。; 拉取请求 [#1432](https://github.com/pgbackrest/pgbackrest/pull/1432)

  [`bffb43e`](https://github.com/pgbackrest/pgbackrest/commit/bffb43ea3fe00f445a2fc3c44a07f105cee65b4b) 更新 command/check 测试，使用标准模式。; 拉取请求 [#1431](https://github.com/pgbackrest/pgbackrest/pull/1431)

  [`fb2d111`](https://github.com/pgbackrest/pgbackrest/commit/fb2d111dcd75021313a64a348959482339bf7f2a) 更新 info/infoBackup 测试，使用标准模式。; 拉取请求 [#1437](https://github.com/pgbackrest/pgbackrest/pull/1437)

  [`065a8c8`](https://github.com/pgbackrest/pgbackrest/commit/065a8c8454d2acdd72c0c71a24d6b8bc09669e18) 在单元测试中以字符串常量替代宏定义。; 拉取请求 [#1440](https://github.com/pgbackrest/pgbackrest/pull/1440)

  [`c620811`](https://github.com/pgbackrest/pgbackrest/commit/c6208113bfce9d637ca3fd0b35ab28a819c1a83e) 为 HRN_STORAGE_PUT() 宏添加 timeModified 参数。

  [`6a90d46`](https://github.com/pgbackrest/pgbackrest/commit/6a90d469094ee2697ae4c932349756a54136799d) 更新 info/manifest 测试，使用标准模式。; 拉取请求 [#1444](https://github.com/pgbackrest/pgbackrest/pull/1444)

  [`62e8d97`](https://github.com/pgbackrest/pgbackrest/commit/62e8d97af03e7628d5710b17aad1cc31f83d7e69) 更新 command/archive 测试，使用标准模式。; 拉取请求 [#1449](https://github.com/pgbackrest/pgbackrest/pull/1449)

  [`8bb0b28`](https://github.com/pgbackrest/pgbackrest/commit/8bb0b28455d59ef884eab7ab25a91f988adbab81) 更新 command/control 和 command/command 测试，使用标准模式。; 拉取请求 [#1456](https://github.com/pgbackrest/pgbackrest/pull/1456)

  [`f2ec4e0`](https://github.com/pgbackrest/pgbackrest/commit/f2ec4e00a4c4c388a8f1b094381fd566a3dc9aa7) 为 TEST_STORAGE_GET() 宏添加加密参数。

  [`4ad0bbd`](https://github.com/pgbackrest/pgbackrest/commit/4ad0bbda53b34688146f14d130cf0e53c8dd650f) 更新 command/backup 测试，使用标准模式。; 拉取请求 [#1463](https://github.com/pgbackrest/pgbackrest/pull/1463)

  [`117ffe8`](https://github.com/pgbackrest/pgbackrest/commit/117ffe88965fd60ce3dcb328e9d28503870af05a) 更新 command/help 测试，使用标准模式。; 拉取请求 [#1464](https://github.com/pgbackrest/pgbackrest/pull/1464)

  [`ebe5848`](https://github.com/pgbackrest/pgbackrest/commit/ebe5848494d4e37a9c86f1fafb5b3453c1f425a6) 更新 command/local 和 command/remote 测试，使用标准模式。; 拉取请求 [#1466](https://github.com/pgbackrest/pgbackrest/pull/1466)

  [`a6cdf5b`](https://github.com/pgbackrest/pgbackrest/commit/a6cdf5b22f0eed53f33bbd84478af0542c81af7d) 更新 command/repo 测试，使用标准模式。; 拉取请求 [#1467](https://github.com/pgbackrest/pgbackrest/pull/1467)

  [`4992508`](https://github.com/pgbackrest/pgbackrest/commit/49925087644c76df005828eb27c24f503a09b20b) 更新 command/restore 测试，使用标准模式。; 拉取请求 [#1468](https://github.com/pgbackrest/pgbackrest/pull/1468)

  [`4c9ddf5`](https://github.com/pgbackrest/pgbackrest/commit/4c9ddf5ef25d0f441e20e918f57c1ec79218cfdb) 更新 storage 测试，使用标准模式。; 拉取请求 [#1470](https://github.com/pgbackrest/pgbackrest/pull/1470)

  [`eeaab6a`](https://github.com/pgbackrest/pgbackrest/commit/eeaab6a3d192fc788c0f74aadbf4b3de5da52531) 更新 config 测试（parse 除外），使用标准模式。; 拉取请求 [#1473](https://github.com/pgbackrest/pgbackrest/pull/1473)

  [`f653b59`](https://github.com/pgbackrest/pgbackrest/commit/f653b59664e757a0e3da63cc8462deafe2d9e0ef) 更新 db/db 测试，使用标准模式。; 拉取请求 [#1486](https://github.com/pgbackrest/pgbackrest/pull/1486)

  [`e17865a`](https://github.com/pgbackrest/pgbackrest/commit/e17865a03a5451b82a101557d400ff223d104383) 更新 protocol/protocol 测试，使用标准模式。; 拉取请求 [#1491](https://github.com/pgbackrest/pgbackrest/pull/1491)

  [`eca2fc6`](https://github.com/pgbackrest/pgbackrest/commit/eca2fc69589cd44f7c1a43206553984adde5cfb1) 更新 config/parse 测试，使用标准模式。; 拉取请求 [#1492](https://github.com/pgbackrest/pgbackrest/pull/1492)

### v2.34 版本说明

*PostgreSQL 14 支持*

*发布于 2021 年 6 月 7 日*

**漏洞修复：**

- 修复先前 `restore` 遗留的缓冲区文件问题。（*审核：Cynthia Shang, Stefan Fercot. 测试：Floris van Nee. 报告：Floris van Nee.*）

  前一次恢复留在 spool 路径中的通知，可能使 `archive-get` 将 WAL 段报告为缺失。现在如果在首次检查时发现该通知，会将其移除并再次运行异步进程。如果异步进程没有响应，会报告错误，而非报告 WAL 段缺失。

  议题 [#1357](https://github.com/pgbackrest/pgbackrest/issues/1357); 拉取请求 [#1371](https://github.com/pgbackrest/pgbackrest/pull/1371); 提交 [`f45e76f`](https://github.com/pgbackrest/pgbackrest/commit/f45e76fa2e8ce0f62317a74fdd51083d52659cd5)
- 修复检查大量表空间链接时的问题。（*审核：Cynthia Shang. 测试：Avinash Vallarapu. 报告：Avinash Vallarapu.*）

  表空间较多时，链接检查会消耗大量内存并可能崩溃。新的检查速度快得多，内存占用大幅降低，还能检测重复的文件链接。

  议题 [#1354](https://github.com/pgbackrest/pgbackrest/issues/1354); 拉取请求 [#1356](https://github.com/pgbackrest/pgbackrest/pull/1356); 提交 [`eba013b`](https://github.com/pgbackrest/pgbackrest/commit/eba013b49b850e53d59795ac6358fcb3381048a3)
- 及时释放不再需要的远程连接，避免其在 `restore` 期间超时。（*由 Cynthia Shang 审核，Francisco Miguel Biete Banon 报告。*）

  此前远程连接会在整个恢复期间保持，可能超时，从而在长时间恢复结束时记录一条无害却令人困惑的警告。现在加载完清单后就会关闭这些连接。

  议题 [#1368](https://github.com/pgbackrest/pgbackrest/issues/1368); 拉取请求 [#1374](https://github.com/pgbackrest/pgbackrest/pull/1374); 提交 [`06fa185`](https://github.com/pgbackrest/pgbackrest/commit/06fa18582a405417c8ab4ba667cb01a13a5c3103)
- 修复当有效选项对指定命令无效时的 `help` 显示问题。（*由 Stefan Fercot 审核，Cynthia Shang 报告。*）

  查询对该命令无效的选项时，`help` 此前会发生段错误。

  拉取请求 [#1375](https://github.com/pgbackrest/pgbackrest/pull/1375); 提交 [`45f8355`](https://github.com/pgbackrest/pgbackrest/commit/45f83558ea862c6f496a27b886e1160e6303bbe8)

**新功能：**

- 新增 PostgreSQL 14 支持。（*由 Cynthia Shang 审核。*）

  相较于 PostgreSQL 13，支持 PostgreSQL 14 不需要修改代码。现在 PostgreSQL 在 beta/rc 阶段更改目录版本时，也无需发布新版 pgBackRest。

  拉取请求 [#1413](https://github.com/pgbackrest/pgbackrest/pull/1413); 提交 [`2452c4d`](https://github.com/pgbackrest/pgbackrest/commit/2452c4d5a4c230b8e3c33d3bddf69e56dfbec284)
- 为 GCE 实例添加自动 GCS 认证。（*审核：Jan Wieck. 测试：Daniel Farina.*）

  设置 `repo-gcs-key-type=auto` 可在 GCE 实例上从实例元数据获取认证令牌。

  [`7b71604`](https://github.com/pgbackrest/pgbackrest/commit/7b71604defa02d5ed9b7aa3407961cb59a52cc45) 使用现有变量设置 GCS 测试服务器端口。

  [`26fefa6`](https://github.com/pgbackrest/pgbackrest/commit/26fefa6aeeae90bbb572ea57b605fb8fe526f1a0) 将 GCS 令牌响应解析重构为独立函数。

  [`9af0331`](https://github.com/pgbackrest/pgbackrest/commit/9af033194abc4b1cd3f06c3a97fff71c966c3827) 为 GCE 实例添加自动 GCS 认证。; 拉取请求 [#1395](https://github.com/pgbackrest/pgbackrest/pull/1395)
- 新增 `repo-retention-history` 选项，用于过期备份历史记录。（*由 Stefan Fercot 贡献，Cynthia Shang、David Steele 审核。*）

  设置备份历史的保留天数。默认保留全部历史，仍在仓库中的备份历史永不过期。全量备份清单过期时，其差异和增量备份的清单也会过期。

  拉取请求 [#1389](https://github.com/pgbackrest/pgbackrest/pull/1389); 提交 [`5b332b2`](https://github.com/pgbackrest/pgbackrest/commit/5b332b22b508d896abb64fa6abe26c78c83a29bc)
- 新增 `db-exclude` 选项。（*由 Stefan Fercot 贡献，Cynthia Shang 审核。*）

  恢复通过将指定数据库写为全零稀疏文件来排除它们。PostgreSQL 仍可完成恢复，之后可删除这些数据库。使用 `db-include` 时，`db-exclude` 仅适用于系统数据库 `template0`、`template1` 和 `postgres`。

  议题 [#986](https://github.com/pgbackrest/pgbackrest/issues/986); 拉取请求 [#1337](https://github.com/pgbackrest/pgbackrest/pull/1337); 提交 [`292f836`](https://github.com/pgbackrest/pgbackrest/commit/292f836f1243e51d102bb4be202e7b21a7a386b1)

**改进：**

- 将归档过期日志从 `detail` 级别提升至 `info` 级别。（*由 Cynthia Shang 贡献，David Steele 审核。*）

  拉取请求 [#1416](https://github.com/pgbackrest/pgbackrest/pull/1416); 提交 [`aceb956`](https://github.com/pgbackrest/pgbackrest/commit/aceb956815a87f0c19ea171de25d2c3842a6d806)
- 在 `restore` 时删除 stanza 归档缓冲（spool）路径。（*由 Cynthia Shang、Stefan Fercot 审核。*）

  spool 路径中的文件可能干扰新集群，例如旧的 `archive-push` 确认文件可能使新集群跳过 WAL 归档。

  议题 [#1357](https://github.com/pgbackrest/pgbackrest/issues/1357); 拉取请求 [#1386](https://github.com/pgbackrest/pgbackrest/pull/1386); 提交 [`320c6e1`](https://github.com/pgbackrest/pgbackrest/commit/320c6e1aad2cc9a8dabecb2bc91a9b34464de6ec)
- 在 `backup` 复制期间，不以原子方式写入文件，也不同步路径。（*由 Stephen Frost、Stefan Fercot、Cynthia Shang 审核。*）

  由于续传失败备份时会验证校验和，且备份结束时会同步所有路径，因此不需要原子写入。

  拉取请求 [#1373](https://github.com/pgbackrest/pgbackrest/pull/1373); 提交 [`aa72c19`](https://github.com/pgbackrest/pgbackrest/commit/aa72c19a831fb0dd15a50a003fbaad427f335353)

**文档改进：**

- 更新贡献文档。（*由 Cynthia Shang 贡献，David Steele、Stefan Fercot 审核。*）

  贡献指南补充了更多关于编写代码、添加配置选项和测试的示例。

  拉取请求 [#1400](https://github.com/pgbackrest/pgbackrest/pull/1400); 提交 [`68faf14`](https://github.com/pgbackrest/pgbackrest/commit/68faf1482a42ea14f5b00a91e19bd5aedec275b8)
- 将 RHEL/CentOS 用户指南合并为单一文档。（*由 Cynthia Shang 审核。*）

  第二套指南主要用于说明 PostgreSQL <= 9.5 的 `stop-auto`，而这些版本现已结束生命周期。参考文档仍保留该选项的说明。

  拉取请求 [#1405](https://github.com/pgbackrest/pgbackrest/pull/1405); 提交 [`ccac75e`](https://github.com/pgbackrest/pgbackrest/commit/ccac75e7de8754b39bb691ff8830a2839ea7a285)
- 阐明 `repo-s3-role` 不是 ARN。（*由 Isaac Yuen 贡献，David Steele 审核。*）

  拉取请求 [#1365](https://github.com/pgbackrest/pgbackrest/pull/1365); 提交 [`5bf1606`](https://github.com/pgbackrest/pgbackrest/commit/5bf160643b53699a28a8f0920c36d6ded767d249)

### v2.33 版本说明

*多仓库与 GCS 支持*

*发布于 2021 年 4 月 5 日*

**漏洞修复：**

- 修复选项警告破坏异步 `archive-get`/`archive-push` 的问题。（*由 Cynthia Shang 审核，Lev Kokotov 报告。*）

  异步进程的选项警告此前会写入已关闭的 stdout，导致进程中止。异步角色现在可能具有与默认角色不同的有效选项，因此更容易触发此问题。现在仅为默认角色记录选项警告。

  议题 [#1299](https://github.com/pgbackrest/pgbackrest/issues/1299); 拉取请求 [#1301](https://github.com/pgbackrest/pgbackrest/pull/1301); 提交 [`3837e61`](https://github.com/pgbackrest/pgbackrest/commit/3837e61a7504b1e211e4b3a70cbe97343c1cf2e6)
- 修复备份期间归档复制中的内存泄漏。（*由 Cynthia Shang 审核，Christian ROUX、Efremov Egor 报告。*）

  使用 `archive-copy` 将 WAL 复制到备份中时会泄漏内存，尤其是在 WAL 需要重新压缩时。

  议题 [#1319](https://github.com/pgbackrest/pgbackrest/issues/1319); 提交 [`778adbf`](https://github.com/pgbackrest/pgbackrest/commit/778adbf19f71ceb90071f01197bf189d59b14df0)
- 修复加密密码生成中的栈溢出问题。（*由 Cynthia Shang 审核，bsiara 报告。*）

  生成密码的缓冲区没有为末尾的零字符预留空间。此问题在使用 musl libc 的 arm64 上被发现。

  议题 [#1294](https://github.com/pgbackrest/pgbackrest/issues/1294); 拉取请求 [#1295](https://github.com/pgbackrest/pgbackrest/pull/1295); 提交 [`d29855b`](https://github.com/pgbackrest/pgbackrest/commit/d29855bd0bf8b957fa8c06445d22e425c443a704)
- 修复 S3 仓库上 `repo-ls` `/` 的问题。（*由 Cynthia Shang 审核，Lesovsky Alexey 报告。*）

  S3 将 `/` 报告为文件，却不返回预期的响应头，导致错误。现在对于不支持路径的存储，会将 `/` 报告为不存在。

  议题 [#1317](https://github.com/pgbackrest/pgbackrest/issues/1317); 拉取请求 [#1336](https://github.com/pgbackrest/pgbackrest/pull/1336); 提交 [`b1d945e`](https://github.com/pgbackrest/pgbackrest/commit/b1d945ebb774c25676155af439b0558e8582bbe5)

**新功能：**

- 支持多仓库。（*由 Cynthia Shang、David Steele 贡献，Stefan Fercot、Stephen Frost 审核。*）

  最多可配置四个仓库，例如用于快速恢复的本地仓库，以及用于冗余的远程仓库。`archive-push` 向所有仓库推送 WAL，各仓库分别安排备份。某些命令可操作所有仓库，其他命令则要求指定 `repo`。仅配置 `repo1` 时，无需指定 `repo`。

  [`3408f1e`](https://github.com/pgbackrest/pgbackrest/commit/3408f1ee2ee3f774699a15de045e0afe3eaf9a26) 增强 expire 命令的多仓库支持。; 拉取请求 [#1289](https://github.com/pgbackrest/pgbackrest/pull/1289)

  [`e28f6f1`](https://github.com/pgbackrest/pgbackrest/commit/e28f6f11e97a80e9c1adf1a6eaeeabbfc991914f) 处理某个仓库出错时，expire 继续处理其他仓库。; 拉取请求 [#1308](https://github.com/pgbackrest/pgbackrest/pull/1308)

  [`bec3e20`](https://github.com/pgbackrest/pgbackrest/commit/bec3e20b2cb061ef0413df24234ebe246ea53063) 为 archive-get 命令添加多仓库支持。; 拉取请求 [#1292](https://github.com/pgbackrest/pgbackrest/pull/1292)

  [`118d9e6`](https://github.com/pgbackrest/pgbackrest/commit/118d9e64fea71c2e049b52802e55f72f5793871b) 增强 restore 命令的多仓库支持。; 拉取请求 [#1300](https://github.com/pgbackrest/pgbackrest/pull/1300)

  [`065b2ff`](https://github.com/pgbackrest/pgbackrest/commit/065b2ff2300a9f06a8c32621fac521451ca942bd) 重构 info 命令的 repoMin/Max。

  [`0ddc038`](https://github.com/pgbackrest/pgbackrest/commit/0ddc0380ff408f9ed6e8bcd4d328df500681ce77) 从集成测试中移除 restore 的默认仓库。

  [`13dc8e6`](https://github.com/pgbackrest/pgbackrest/commit/13dc8e68d74fa9e06180e67b7e59994767b4a34d) 将 backup 命令的 --repo 改为可选。; 拉取请求 [#1316](https://github.com/pgbackrest/pgbackrest/pull/1316)

  [`a1280c4`](https://github.com/pgbackrest/pgbackrest/commit/a1280c41e530500e5bbde73a900683f6db207686) 重构 archive-push 命令的警告，使其行为与 archive-get 一致。

  [`3b8f0ef`](https://github.com/pgbackrest/pgbackrest/commit/3b8f0ef7ae8a81ae969934fff4ad3da299454b24) 为 archive-push 命令添加写入容错。; 拉取请求 [#1316](https://github.com/pgbackrest/pgbackrest/pull/1316)

  [`95063f6`](https://github.com/pgbackrest/pgbackrest/commit/95063f6812279cd59380fd72e16e67b631582bd0) 将除 stanza-delete 外其他剩余命令的 --repo 改为可选。

  [`1dbb3bf`](https://github.com/pgbackrest/pgbackrest/commit/1dbb3bf50b94dcc9d53dfe1e5ad57a17bd6d38e8) 多仓库支持。; 拉取请求 [#1227](https://github.com/pgbackrest/pgbackrest/pull/1227)

  [`31c7824`](https://github.com/pgbackrest/pgbackrest/commit/31c7824a4d84cbf5a0ba0938f4caa546fa67af0a) 允许远程运行 stanza-* 命令。; 拉取请求 [#1326](https://github.com/pgbackrest/pgbackrest/pull/1326)

  [`2789d3b`](https://github.com/pgbackrest/pgbackrest/commit/2789d3b6206c4de9299a3bc459e04cdab793abc9) 改进 info 命令的容错能力。; 拉取请求 [#1342](https://github.com/pgbackrest/pgbackrest/pull/1342)

  [`01b8e22`](https://github.com/pgbackrest/pgbackrest/commit/01b8e2258f6efa5386665c33cb5c267c154376fb) 改进 archive-push 命令的容错能力。; 拉取请求 [#1343](https://github.com/pgbackrest/pgbackrest/pull/1343)
- 支持 GCS 作为仓库存储。（*审核：Cynthia Shang. 测试：Daniel Farina.*）

  设置 `repo-type=gcs` 可将仓库存储在 GCS 或兼容 GCS 的对象存储上。

  [`dcb79ab`](https://github.com/pgbackrest/pgbackrest/commit/dcb79ab8fb18c63c2d56ecacd9d680b999ea044b) 解码 JSON 的 \u 转义字符。

  [`1b4b353`](https://github.com/pgbackrest/pgbackrest/commit/1b4b3538cc218f66ed1e903c3caeade4b0ab1120) 在 HTTP 和存储模块的适当位置，将 uri 重命名为 path。

  [`66a4ff4`](https://github.com/pgbackrest/pgbackrest/commit/66a4ff496afe63305cb1a437bcb52d1efc11edf7) 将路径传给 HttpRequest 之前进行编码。

  [`d485609`](https://github.com/pgbackrest/pgbackrest/commit/d4856096587c72daee76f8ad8408db677a16d6dd) 添加 strNewEncode()、strCatEncode() 和 bufNewDecode()。

  [`abcbe0f`](https://github.com/pgbackrest/pgbackrest/commit/abcbe0f9c1804ecb1b93b811cfb0a362c17e1b85) 将 encode 模块的多个文件合并为一个文件。

  [`edab2a0`](https://github.com/pgbackrest/pgbackrest/commit/edab2a0b89eabc5fd5ba6e795d938670bd5d3105) 编码类型判断改用 switch，而非 if-else。

  [`f6c3262`](https://github.com/pgbackrest/pgbackrest/commit/f6c3262861252b24e7e0cffd6d67e0c5e3291f3e) 不再对外暴露 encode 模块的 valid/validate 函数。

  [`a1f4fd3`](https://github.com/pgbackrest/pgbackrest/commit/a1f4fd32a1790e569ccae3598cd9648bb25d13b6) 添加 ASSERT_MSG()。

  [`00b60e5`](https://github.com/pgbackrest/pgbackrest/commit/00b60e564eef13f8adba0ab867fcde2c352669d6) 添加 base64url 编码。

  [`54c4eb0`](https://github.com/pgbackrest/pgbackrest/commit/54c4eb0c10758879b4bf2b96efd2a1523ecccc21) 使远程存储对象可写。

  [`088662d`](https://github.com/pgbackrest/pgbackrest/commit/088662d986288843d1bfd118b724091c93df4569) 支持将仓库存储在 GCS 上。; 议题 [#631](https://github.com/pgbackrest/pgbackrest/issues/631); 议题 [#743](https://github.com/pgbackrest/pgbackrest/issues/743); 拉取请求 [#1320](https://github.com/pgbackrest/pgbackrest/pull/1320)
- 新增 `archive-header-check` 选项。（*由 Stephen Frost、Cynthia Shang 审核，Hans-Jürgen Schönig 建议。*）

  会根据 PostgreSQL 版本和系统标识符检查 WAL 头，确保 WAL 被推送到正确的 stanza。此检查默认启用，必要时可禁用，例如处理加密 WAL 时。

  拉取请求 [#1298](https://github.com/pgbackrest/pgbackrest/pull/1298); 提交 [`b6106f3`](https://github.com/pgbackrest/pgbackrest/commit/b6106f3c1f586b410c50c9da8dcea583cc157423)

**改进：**

- 选择性恢复时包含重建的系统数据库。（*由 Stefan Fercot 贡献，Cynthia Shang 审核。*）

  被重新创建的系统数据库（`template0`、`template1` 或 `postgres`）的 OID，可能使其看起来像用户数据库。现在无论 OID 为何，都会恢复这些系统数据库。

  议题 [#986](https://github.com/pgbackrest/pgbackrest/issues/986); 拉取请求 [#1307](https://github.com/pgbackrest/pgbackrest/pull/1307); 提交 [`6942ff5`](https://github.com/pgbackrest/pgbackrest/commit/6942ff569dd950a5146faa0bebfee69e241c4179)
- 从 S3 签名头部中排除 `content-length`。（*由 Cynthia Shang 审核，Brian P Bockelman 建议。*）

  某些代理会修改 `content-length` 头，如果签名包含该头，就会导致认证失败。

  议题 [#1340](https://github.com/pgbackrest/pgbackrest/issues/1340); 拉取请求 [#1341](https://github.com/pgbackrest/pgbackrest/pull/1341); 提交 [`7d7ac0e`](https://github.com/pgbackrest/pgbackrest/commit/7d7ac0e0eb63a02bbc1dd8bd8fc89c6008c740f8)
- 合并较少使用的仓库存储选项。（*由 Cynthia Shang 审核。*）

  S3 和 Azure 的 CA、主机、端口和 TLS 验证选项重命名为 `repo-storage-*`，例如 `repo1-s3-host` 现在为 `repo1-storage-host`。旧名称仍可使用。

  拉取请求 [#1321](https://github.com/pgbackrest/pgbackrest/pull/1321); 提交 [`d1aa765`](https://github.com/pgbackrest/pgbackrest/commit/d1aa765a9d5f290738c1de00c5ea99d5f6056ba5)
- 允许通过 `./configure --with-configdir` 自定义 `config-path` 的默认值。（*由 Michael Schout 贡献，David Steele 审核。*）

  打包维护者可在构建时为 `config-path` 设置不同的默认值。不使用此选项时，默认值仍为 `/etc/pgbackrest`。

  [`6a717e0`](https://github.com/pgbackrest/pgbackrest/commit/6a717e032f1309ddc9dc955042b5e2ac2bc7324d) 在 configure 脚本中设置配置路径。

  [`9243962`](https://github.com/pgbackrest/pgbackrest/commit/9243962b9504787c6f4af42318af6dc27094136d) 允许通过 ./configure --with-configdir 自定义 config-path 默认值。; 议题 [#1251](https://github.com/pgbackrest/pgbackrest/issues/1251); 议题 [#1293](https://github.com/pgbackrest/pgbackrest/issues/1293); 拉取请求 [#1255](https://github.com/pgbackrest/pgbackrest/pull/1255)
- 在 `backup` 期间记录归档复制日志。（*由 Cynthia Shang、Stefan Fercot 审核。*）

  议题 [#1319](https://github.com/pgbackrest/pgbackrest/issues/1319); 拉取请求 [#1328](https://github.com/pgbackrest/pgbackrest/pull/1328); 提交 [`c862e96`](https://github.com/pgbackrest/pgbackrest/commit/c862e9654aff198167efeb897957bf93c1afe453)

**文档改进：**

- 更新参考文档，添加指向用户指南示例的链接。（*由 Cynthia Shang 贡献，David Steele 审核。*）

  命令参考现在链接到包含示例的用户指南章节，部分描述也更加明确，例如 `expire` 的 `set` 选项。

  拉取请求 [#1353](https://github.com/pgbackrest/pgbackrest/pull/1353); 提交 [`d372dd6`](https://github.com/pgbackrest/pgbackrest/commit/d372dd652c9a01b72444998d87f0f44464676803)
- 更新选择性恢复文档，添加注意事项。（*由 Cynthia Shang、Stefan Fercot 审核。*）

  除非指定 `type=immediate`，否则恢复可能失败，因为 PostgreSQL 在达到一致状态后会将全零页面报告为错误。在 PostgreSQL >= 13 上可以使用 `ignore_invalid_pages`，但应检查日志，确认所选数据库中是否存在无效页面。

  议题 [#796](https://github.com/pgbackrest/pgbackrest/issues/796); 拉取请求 [#1329](https://github.com/pgbackrest/pgbackrest/pull/1329); 提交 [`92d12cc`](https://github.com/pgbackrest/pgbackrest/commit/92d12ccb9bd0787e30441794e2a2a4d4a4e0fe9c)
- 为 `archive-copy` 文档添加 `compress-type` 说明。（*由 Cynthia Shang、Stefan Fercot 审核。*）

  `archive-push` 与 `backup` 使用不同的 `compress-type` 时，WAL 必须重新压缩，开销可能很高。

  议题 [#1319](https://github.com/pgbackrest/pgbackrest/issues/1319); 拉取请求 [#1327](https://github.com/pgbackrest/pgbackrest/pull/1327); 提交 [`9506ffa`](https://github.com/pgbackrest/pgbackrest/commit/9506ffae39dd86d2c5454511026f1249097d96a2)
- 添加每种 `compress-type` 值对应的 `compress-level` 默认值。（*由 Cynthia Shang 贡献，David Steele 审核。*）

  默认压缩级别分别为：`bz2` 为 9，`gz` 为 6，`lz4` 为 1，`zst` 为 3。

  议题 [#1242](https://github.com/pgbackrest/pgbackrest/issues/1242); 拉取请求 [#1346](https://github.com/pgbackrest/pgbackrest/pull/1346); 提交 [`3e20608`](https://github.com/pgbackrest/pgbackrest/commit/3e206088e79c4a73a20b8f2fda1706c6b95fa188)
- 添加关于 NFS 所需设置与 PostgreSQL 相同的注意事项。（*由 Cynthia Shang 贡献，David Steele 审核。*）

  议题 [#871](https://github.com/pgbackrest/pgbackrest/issues/871); 拉取请求 [#1347](https://github.com/pgbackrest/pgbackrest/pull/1347); 提交 [`7598762`](https://github.com/pgbackrest/pgbackrest/commit/75987621fab5f57d0e95b42eabd301731587c438)

### v2.32 版本说明

*仓库命令*

*发布于 2021 年 2 月 8 日*

**漏洞修复：**

- 修复因先前恢复操作部分删除备份后，再次 `resume` 时失败的问题。（*由 Cynthia Shang 审核，Tom Swartz 报告。*）

**新功能：**

- 新增 `repo-ls` 命令。（*审核：Cynthia Shang. 测试：Stefan Fercot.*）
- 新增 `repo-get` 命令。（*由 Stefan Fercot、David Steele 贡献，Cynthia Shang 审核。*）
- 新增 `archive-mode-check` 选项。（*贡献：Stefan Fercot. 审核：David Steele. 测试：Michael Banck.*）

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
- 在 `info` 命令的 `text` 输出中报告页面校验和错误。（*由 Stefan Fercot 贡献，Cynthia Shang 审核。*）
- 新增 `repo-azure-endpoint` 选项。（*审核：Cynthia Shang. 测试：Brian Peterson. 建议：Brian Peterson.*）
- 新增 `pg-database` 选项。（*由 Cynthia Shang 审核。*）

**改进：**

- 改进 `info` 命令在指定 stanza 不存在时的输出提示。（*由 Stefan Fercot 贡献，Cynthia Shang、David Steele 审核，uspen 建议。*）
- 提升 `backup`/`restore` 命令处理大量文件列表时的性能。（*审核：Cynthia Shang. 测试：Oscar.*）
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

*AWS 自动获取 S3 凭据*

*发布于 2020 年 8 月 31 日*

**漏洞修复：**

- 抑制关闭 `local`/`remote` 进程时的错误输出。命令已执行完毕，此时抛出错误适得其反；但仍会以 `warn` 级别记录警告，以说明发生了异常情况。（*由 Cynthia Shang 审核，argdenis 报告。*）
- 修复文件名或数据库名中包含 `=` 字符时的处理问题。（*由 Bastian Wegge、Cynthia Shang 审核，Brad Nicholson、Bastian Wegge 报告。*）

**新功能：**

- 在 AWS 实例上自动获取临时 S3 凭据。（*贡献：David Steele, Stephen Frost. 审核：Cynthia Shang, Aleš Zelený, Jeanette Bromage. 测试：David Youatt.*）
- 新增 `archive-mode` 选项，用于在 `restore` 时禁用归档。（*由 Stephen Frost 审核，Stephen Frost 建议。*）

**改进：**

- 支持 PostgreSQL 13 beta3。后续 beta 版本中控制/目录/WAL 版本如有变更可能导致兼容性问题，pgBackRest 将随每个版本发布同步更新。
- S3/Azure 存储的异步 `list`/`remove` 操作。（*由 Cynthia Shang、Stephen Frost 审核。*）
- 优化 manifest 构建过程中未记录关系检测的内存使用效率。（*审核：Cynthia Shang, Stephen Frost, Oscar. 测试：Brad Nicholson. 建议：Oscar, Brad Nicholson.*）
- 派生异步进程后主动关闭文件描述符。（*由 Stephen Frost、Cynthia Shang 审核。*）
- 将备份远程连接的关闭延迟至归档检查完成之后。（*由 Floris van Nee 贡献，David Steele 审核。*）
- 改进详细错误输出。（*由 Cynthia Shang 审核。*）
- 改进 TLS 错误报告。（*由 Cynthia Shang、Stephen Frost 审核。*）

**文档漏洞修复：**

- 在 `compress-type` 选项参考中补充 `none` 并修正示例。（*由 Ugo Bellavance、Don Seiler 报告。*）
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

- 支持 Azure 作为仓库存储后端。（*审核：Cynthia Shang. 测试：Don Seiler.*）
- 新增 `expire-auto` 选项，用于禁止在成功备份后自动执行过期清理。（*由 Stefan Fercot 贡献，Cynthia Shang、David Steele 审核。*）

**改进：**

- 支持 S3 分段上传的异步处理。（*由 Stephen Frost 审核。*）
- 为 `backup`、`restore`、`archive-get` 和 `archive-push` 添加自动重试机制。（*由 Cynthia Shang 审核。*）
- 在用于备份控制的 PostgreSQL 会话中禁用查询并行化。（*由 Stefan Fercot 审核。*）
- 支持 PostgreSQL 13 beta2。后续 beta 版本中控制/目录/WAL 版本如有变更可能导致兼容性问题，pgBackRest 将随每个版本发布同步更新。
- 改进对无效 HTTP 响应状态码的处理。（*由 Cynthia Shang 审核。*）
- 改进 `archive-get` 命令缺少 `pg1-path` 选项时的错误提示。（*由 Cynthia Shang 审核。*）
- 在时间线切换后启用校验和 delta 时，添加相应提示信息。（*由 Matt Bunter、Cynthia Shang 审核。*）
- 在适当场合以 PostgreSQL 替代 `postmaster`。（*由 Cynthia Shang 审核。*）

**文档漏洞修复：**

- 修正 `repo-retention-full-type` 选项的错误示例。（*由 Höseyin Sönmez 报告。*）
- 从 HTML 和 man 页面的命令参考中移除内部命令。（*由 Cynthia Shang 报告。*）

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

- 实现非阻塞 TLS。（*审核：Cynthia Shang, Stephen Frost. 测试：Slava Moudry.*）
- 仅对 WAL 记录的文件限制备份复制大小。此前的行为可能导致 `postgresql.conf` 或 `postgresql.auto.conf` 在备份中被截断。（*由 Cynthia Shang 审核。*）
- TCP keep-alive 选项现在支持配置。（*由 Marc Cousin 建议。*）
- 新增 `io-timeout` 选项。（*由 Cynthia Shang 审核。*）


### v2.25 版本说明

*lz4 压缩支持*

*发布于 2020 年 3 月 26 日*

**新功能：**

- 新增 lz4 压缩支持。注意：设置 `compress-type=lz4` 将使新备份和归档与旧版本的 pgBackRest 不兼容（无法恢复）。（*由 Cynthia Shang 审核。*）
- 为 `expire` 命令新增 `--dry-run` 选项。使用 dry-run 可以预览 `expire` 命令将删除哪些备份/归档，而不会实际执行删除操作。（*由 Cynthia Shang、Luca Ferrari 贡献，David Steele 审核，Marc Cousin 建议。*）

**改进：**

- 提升远程 manifest 构建的性能。（*由 Jens Wilke 建议。*）
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
- 修复由 Perl 创建的可续传备份在恢复时的处理问题。此情况下应忽略该可续传备份，但 C 代码无法加载 Perl 写入的部分 manifest（格式略有差异）。已添加相关校验以正常处理此情况。（*由 Kacey Holston 报告。*）

**新功能：**

- 指定时间目标时自动选择备份集进行恢复。仅在未指定 `--set` 时执行自动选择；若找不到适合目标时间的备份集，则使用最新（默认）备份集。（*由 Cynthia Shang 贡献，David Steele 审核。*）

**改进：**

- 备份期间跳过 `pg_internal.init` 临时文件。（*由 Cynthia Shang 审核，Michael Paquier 建议。*）
- `backup` 时对 manifest 添加更多校验。（*由 Cynthia Shang 审核。*）

**文档改进：**

- 阻止 lock-bot 向已锁定的 issue 添加评论。（*由 Christoph Berg 建议。*）


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

- 修复时间线转换中的错误。时间线用于备份后验证归档中的 WAL 段。转换使用了十进制（base `10`）而非十六进制（base `16`），导致时间线 ≥ `0xA` 时出现错误。（*由 Lukas Ertl、Eric Veldhuyzen 报告。*）


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

- 修复 `PGDATA` 为符号链接时 `archive-push`/`archive-get` 失败的问题。这些命令尝试使用 `cwd()` 作为 `PGDATA`，但若 `PGDATA` 是符号链接，其结果与 pgBackRest 配置的路径可能不一致。修复方案：若 `cwd()` 与 pgBackRest 路径不匹配，则 `chdir()` 到该路径，并确保后续 `cwd()` 的结果与首次调用一致。（*由 Stephen Frost、Milosz Suchy 报告。*）
- 修复 `expire` 命令重建 `backup.info` 时的引用列表问题。由于 `backup` 命令仍使用 Perl 版本的重建逻辑，此问题仅在以下两个条件同时满足时才会触发：**1）** `backup.info` 中存在缺失的备份；**2）** 直接运行 `expire` 命令而非在 `backup` 后自动运行。两个条件同时成立的概率极低，在实际使用中应该不是问题。
- 修复 gzip 解压时意外遇到 EOF 导致的段错误。（*由 Stephen Frost 报告。*）


### v2.19 版本说明

*C 语言迁移与漏洞修复*

*发布于 2019 年 11 月 12 日*

**漏洞修复：**

- 修复 delta restore 中的远程超时问题。对基本未变化的集群执行 delta restore 时，若在 `protocol-timeout` 时间内未从仓库获取任何文件，远程端可能超时。已添加 keep-alive 机制以防止远程超时。（*由 James Sewell、Jens Wilke 报告。*）
- 修复重复 HTTP 响应头的处理问题。HTTP 响应头重复出现时，应视为等同于单个逗号分隔的响应头，而非报错（此前的行为）。（*由 donicrosby 报告。*）

**改进：**

- `info` 命令的 JSON 输出不再格式化（pretty-print）。不含换行符的 JSON 更便于监控系统解析；如需格式化输出，可使用 `jq` 等外部工具。（*由 Cynthia Shang 贡献，David Steele 审核。*）
- `check` 命令已完全用 C 实现。（*由 Cynthia Shang 贡献，David Steele 审核。*）

**文档改进：**

- 说明如何为 pgBackRest 做出贡献。（*由 Cynthia Shang、David Steele 贡献。*）
- 说明 `auto-stop` 选项的最大支持版本。（*由 Brad Nicholson 贡献，David Steele 审核。*）

**测试套件改进：**

- 修复使用 `--vm=none` 时容器测试路径的问题。（*由 Stephen Frost 建议。*）
- 修复期望测试中时区不匹配的问题。（*由 Stephen Frost 建议。*）
- 默认不自动生成嵌入式 libc 代码。（*由 Stephen Frost 建议。*）


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

- 改进超大量表/段文件时 manifest 构建速度过慢的问题。（*由 Jens Wilke 报告。*）
- 修复特殊文件的排除处理问题。（*由 CluelessTechnologist、Janis Puris、Rachid Broum 报告。*）

**改进：**

- `stanza-create`/`stanza-update`/`stanza-delete` 命令已完全用 C 实现。（*由 Cynthia Shang 贡献，David Steele 审核。*）
- `start`/`stop` 命令已完全用 C 实现。（*由 Cynthia Shang 贡献，David Steele 审核。*）
- 以 `0750`/`0640` 模式创建日志目录/文件。（*由 Damiano Albani 建议。*）

**文档漏洞修复：**

- 修复指定自定义包时仍安装 `yum.p.o` 包的问题。（*由 Joe Ayers、John Harvey 报告。*）

**文档改进：**

- 说明以非特权用户构建 pgBackRest 的方式。（*由 Laurenz Albe 建议。*）


### v2.16 版本说明

*C 语言迁移与漏洞修复*

*发布于 2019 年 8 月 5 日*

**漏洞修复：**

- 对 S3 `RequestTimeTooSkewed` 错误执行重试而非立即终止。（*由 sean0101n、Tim Garton、Jesper St John、Aleš Zelený 报告。*）
- 修复对 `HEAD` 请求响应中 `transfer-encoding` 的错误处理。（*由 Pavel Suderevsky 报告。*）
- 修复 gcc 9 优化暴露的作用域违规问题。（*由 Christian Lange、Ned T. Crigler 报告。*）

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
- 移除硬编码的 PostgreSQL 用户，使 `$PGUSER` 生效。（*由 Julian Zhang、Janis Puris 建议。*）
- 支持 `configure` 的 `--prefix` 选项。（*由 Daniel Westermann 建议。*）
- 将 `repo-s3-verify-ssl` 选项重命名为 `repo-s3-verify-tls`。新名称更为准确，因为 pgBackRest 不支持任何 SSL 协议版本（均视为不安全）。旧选项名称仍可继续使用。

**文档改进：**

- 在文档中添加 FAQ。（*由 Cynthia Shang 贡献，David Steele 审核。*）
- 在 PostgreSQL ≥ 9.6 的文档中使用 `wal_level=replica`。（*由 Patrick McLaughlin 建议。*）


### v2.14 版本说明

*漏洞修复与改进*

*发布于 2019 年 5 月 20 日*

**漏洞修复：**

- 修复当 `process-max` > 8 时 `archive-push`/`archive-get` 发生段错误的问题。（*由 Jens Wilke 报告。*）

**改进：**

- 使用 `force` 执行 `stanza-delete` 时绕过数据库检查。（*由 Cynthia Shang 贡献，David Steele 审核，hatifnatt 建议。*）
- 添加 `configure` 脚本以改善多平台支持。

**文档新功能：**

- 添加 CentOS/RHEL 6/7 的用户指南。


### v2.13 版本说明

*漏洞修复*

*发布于 2019 年 4 月 18 日*

**漏洞修复：**

- 修复零长度读取导致不期望接收零长度数据的 IO 过滤器出现异常的问题。（*由 brunre01、Jens Wilke、Tomasz Kontusz、guruguruguru 报告。*）
- 修复 `local`/`remote` 进程错误报告的可靠性问题。
- 修复 Posix/CIFS 在写入/同步/关闭时报告错误文件名的问题。


### v2.12 版本说明

*`archive-push` 命令的 C 语言实现*

*发布于 2019 年 4 月 11 日*

**重要提示**：新的 TLS/SSL 实现根据 RFC-2818 禁止 S3 存储桶名称中包含点号（`.`）。这是合规主机名验证所必需的安全修复。

**漏洞修复：**

- 修复路径选项以 `/` 结尾时的处理问题。（*由 Marc Cousin 报告。*）
- 修复 `archive-get` 命令中设置 `log-level-file=off` 时的问题。（*由 Brad Nicholson 报告。*）
- 修复 C 代码无法识别 `host:port` 选项格式（Perl 可以识别）的问题。（*由 Kyle Nevins 报告。*）
- 修复 `remote`/`local` 命令日志选项的问题。

**改进：**

- `archive-push` 命令已完全用 C 实现。
- 将 `process-max` 上限提升至 `999`。（*由 Rakshitha-BR 建议。*）
- 改进 S3 存储桶名称包含点号时的错误提示信息。

**文档改进：**

- 明确说明支持兼容 S3 协议的对象存储。（*由 Magnus Hagander 建议。*）


### v2.11 版本说明

*`archive-get` 命令的 C 语言实现*

*发布于 2019 年 3 月 11 日*

**漏洞修复：**

- 修复写入过程中出错可能导致 WAL 段被截断的问题。（*由 blogh 报告。*）
- 修复 `info` 命令在指定 stanza 时缺少 WAL 最小/最大值的问题。（*由 Stefan Fercot 修复，David Steele 审核。*）
- 修复从 C 传递给 Perl 的选项中不符合规范的 JSON 格式。（*由 Leo Khomenko 报告。*）

**改进：**

- `archive-get` 命令已完全用 C 实现。
- 在较旧的 Perl 版本上启用 socket keep-alive。（*由 Marc Cousin 贡献，David Steele 审核。*）
- 当参数传递给不接受参数的命令时报错。（*由 Jason O'Donnell 建议。*）
- 在归档中找不到 WAL 段时添加提示信息。（*由 Hans-Jürgen Schönig 建议。*）
- 改进证书中找不到主机名时的错误提示。（*由 James Badger 建议。*）
- 为 `backup.manifest` 添加额外的调试选项。（*由 blogh 贡献，David Steele 审核。*）

**文档改进：**

- 将默认文档版本更新为 PostgreSQL 10。


### v2.10 版本说明

*漏洞修复*

*发布于 2019 年 2 月 9 日*

**漏洞修复：**

- 补充 `archive-get` 所需但尚未实现的 S3 驱动方法。（*由 mibiio 报告。*）
- 修复对 `pg-path` 配置错误的检查逻辑。（*由 James Chanco Jr 报告。*）


### v2.09 版本说明

*小型改进与缺陷修复*

*发布于 2019 年 1 月 30 日*

**漏洞修复：**

- 修复多个异步状态文件引发硬错误的问题。（*由 Vidhya Gurumoorthi、Joe Ayers、Douglas J Hunley 报告。*）

**改进：**

- `info` 命令已完全用 C 重新实现。（*由 Cynthia Shang 贡献，David Steele 审核。*）
- 简化 `info` 命令在无 stanza 时的文本提示，将仓库路径替换为"the repository"。
- 为 macOS 构建在 Makefile 中添加 `_DARWIN_C_SOURCE` 标志。（*由 Douglas J Hunley 贡献，David Steele 审核。*）
- 将 C TLS 客户端的地址查找更新为使用现代接口。（*由 Bruno Friedmann 建议。*）
- 包含符合 POSIX 规范的 `strcasecmp()` 和 `fd_set` 头文件。（*由 ucando 建议。*）

**文档漏洞修复：**

- 修复硬编码的仓库路径。（*由 Heath Lord 报告。*）

**文档改进：**

- 明确说明加密始终在客户端执行。（*由 Bruce Burdick 建议。*）
- 添加构建文档主机的示例。
- 在 manifest 变量、列表及列表项中允许使用 `if`。


### v2.08 版本说明

*小型改进与缺陷修复*

*发布于 2019 年 1 月 2 日*

**漏洞修复：**

- 移除在 PUT S3 对象后立即请求其元数据的操作。（*由 Matt Kunkel 报告。*）
- 将 `archive-get-queue-max` 类型修正为 `size`。（*由 Ronan Dunklau 报告。*）
- 添加当前用户的 `uid`/`gid` 无法映射到用户名时的错误提示。（*由 Camilo Aguilar 报告。*）
- 在 PostgreSQL < 9.5 时指定 `--target-action=shutdown` 时报错。

**改进：**

- 在 S3 连接上启用 TCP keepalive。（*由 Ronan Dunklau 建议。*）
- 调整 `info` 命令文本输出顺序，使最新备份排在最后。（*由 Cynthia Shang 贡献，David Steele 审核，Ryan Lambert 建议。*）
- 仅在必要时变更文件所有权。
- 在抛出 S3 错误时对 `authentication` 头进行脱敏处理。（*由 Brad Nicholson 建议。*）

**文档改进：**

- 明确说明 `target-action` 的生效条件及 PostgreSQL 版本支持情况。（*由 Keith Fiske 建议。*）
- 明确说明 region/endpoint 必须与存储桶正确匹配。（*由 Pritam Barhate 建议。*）
- 添加构建文档的说明。


### v2.07 版本说明

*备份校验和 Delta 自动启用*

*发布于 2018 年 11 月 16 日*

**漏洞修复：**

- 修复 `archive-push-queue-max` 在连接错误时未被遵守的问题。（*由 Lardière Sébastien 报告。*）
- 修复用于判断是否超过 `archive-push-queue-max` 阈值时使用静态 WAL 段大小的问题。
- 修复日志文件打开失败后处理应继续却仍报错的问题。（*由 vthriller 报告。*）

**新功能：**

- 检测到异常情况（如时间线切换）时自动启用备份校验和 delta。（*由 Cynthia Shang 贡献，David Steele 审核。*）

**改进：**

- 对所有 S3 `5xx` 错误执行重试，而非仅对 `500` 内部错误重试。（*由 Craig A. James 建议。*）


### v2.06 版本说明

*校验和 Delta 备份与 PostgreSQL 11 支持*

*发布于 2018 年 10 月 15 日*

**漏洞修复：**

- 修复 S3 驱动中缺失 URI 编码的问题。（*由 Dan Farrell 报告。*）
- 修复配置文件中出现重复选项时错误提示不正确的问题。（*由 Jesper St John 报告。*）
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

- 在 `authorized_hosts` 中使用 `command` 以提升 SSH 安全性。（*由 Stephen Frost、Magnus Hagander 建议。*）
- 在配置参考中列出 `buffer-size` 选项的允许值。（*由 Cynthia Shang 贡献，David Steele 审核，Stéphane Schildknecht 建议。*）


### v2.05 版本说明

*环境变量选项与临时/未记录关系的排除*

*发布于 2018 年 8 月 31 日*

**漏洞修复：**

- 修复 `$PGDATA` 中 *相对* 链接可能以错误路径存入备份的问题。此问题不影响绝对链接，相对表空间链接已由其他检查捕获。（*由 Cynthia Shang 报告。*）
- 从 `check` 命令中移除未完全实现的 `online` 选项。离线操作与该命令的目的（检查归档和备份是否正常工作）相悖。（*由 Jason O'Donnell 报告。*）
- 修复 C 中抛出的错误在由 Perl 调用时未被记录的问题。pgBackRest 以正确的错误码退出，但缺少有助于调试的错误消息。（*由 Douglas J Hunley 报告。*）
- 修复布尔型选项（如 `delta`）被多次指定时的错误。（*由 Yogesh Sharma 报告。*）

**新功能：**

- 允许通过环境变量设置任意选项，包括之前只能在命令行指定的选项（如 `stanza`），以及不能在命令行指定的加密选项（如 `repo1-s3-key-secret`）。
- 从备份中排除临时和未记录的关系（表/索引）文件。实现逻辑与 PostgreSQL 中引入此功能的补丁一致，参见 [8694cc96](https://git.postgresql.org/pg/commitdiff/8694cc96b52a967a49725f32be7aa77fd3b6ac25) 和 [920a5e50](https://git.postgresql.org/pg/commitdiff/920a5e500a119b03356fb1fb64a677eb1aa5fc6f)。临时关系排除在 PostgreSQL ≥ `9.0` 时启用，未记录关系排除在 PostgreSQL ≥ `9.1`（该功能引入版本）时启用。（*由 Cynthia Shang 贡献，David Steele 审核。*）
- 允许从备份中排除任意目录和/或文件。滥用此功能可能导致备份不一致，使用前请仔细阅读 `--exclude` 文档。（*由 Cynthia Shang 审核。*）
- 添加 `log-subprocess` 选项，允许为 `local` 和 `remote` 子进程启用文件日志。
- 支持 PostgreSQL 11 Beta 3。

**改进：**

- 允许备份 manifest 中零大小文件引用之前的 manifest，不受时间戳 delta 的限制。（*由 Cynthia Shang 贡献，David Steele 审核。*）
- 通过直接检查状态文件改善异步 `archive-get`/`archive-push` 性能。（*由 Stephen Frost 贡献，David Steele 审核。*）
- 改进命令缺少 `stanza` 选项时的错误提示。（*由 Sarah Conway 建议。*）

**文档漏洞修复：**

- 修复 `log-path` 选项参考中无效的日志级别。（*由 Camilo Aguilar 报告。*）

**文档改进：**

- 停止尝试在 `release.xml` 中按姓/名排列贡献者。贡献者名称始终按原样呈现在发布说明中，但我们曾尝试基于姓/名分配内部 ID，这既难以判断又毫无意义。受 Christophe 在 PostgresOpen 2017 演讲"Human Beings Do Not Have a Primary Key"的启发。（*由 Christophe Pettus 建议。*）

**测试套件改进：**

- 若在测试环境之外执行 LibC 构建则报错。LibC 不再是生产构建所必需的。


### v2.04 版本说明

*备份恢复关键缺陷修复*

*发布于 2018 年 7 月 5 日*

**重要提示**：本版本修复了备份 resume 功能中的一个关键缺陷。此版本之前所有已 resume 的备份均应视为不一致。当先前的备份失败时，若未指定 `resume=n`，则会触发备份 resume。可通过检查备份日志中是否存在"aborted backup of same type exists, will be cleaned to remove invalid files and resumed"消息来判断备份是否已被 resume。若存在该消息，请勿使用该备份或同一备份集中的任何备份进行恢复，并检查恢复日志确认是否用到了 resume 备份。若已使用，集群中可能存在不一致数据。

**漏洞修复：**

- 修复 resume 中导致备份不一致的关键缺陷。`v0.82` 中的一次回归移除了在决定恢复哪些已中止备份文件时的时间戳比较逻辑，详情参见上方说明。（*由 David Youatt、Yogesh Sharma、Stephen Frost 报告。*）
- 修复集群中只存在一个用户数据库时选择性恢复报错的问题。（*由 Cynthia Shang 修复，David Steele 审核，Nj Baliyan 报告。*）
- 修复 S3 授权头中不符合 ISO-8601 规范的时间戳格式。AWS 和部分网关对空格与零填充小时均可容忍，但其他实现则不然。（*由 Andrew Schwartz 修复，David Steele 审核。*）

**新功能：**

- 支持 PostgreSQL 11 Beta 2。

**改进：**

- 改进 HTTP 客户端，在服务端未指定时将 `content-length` 设为 0。S3（及其网关）始终设置 `content-length` 或 `transfer-encoding`，但 `HTTP 1.1` 并不强制要求，部分代理（如 HAProxy）可能不包含任一字段。（*由 Adam K. Sumner 建议。*）
- 在 PostgreSQL 连接上设置 `search_path = 'pg_catalog'`。（*由 Stephen Frost 建议。*）

**文档改进：**

- 新增章节，说明如何在独立主机上构建 pgBackRest。
- 添加 S3 策略示例以限制存储桶权限。（*由 Douglas J Hunley、Jason O'Donnell 建议。*）


### v2.03 版本说明

*单一可执行文件部署*

*发布于 2018 年 5 月 22 日*

**漏洞修复：**

- 修复错误消息处理中潜在的缓冲区溢出问题。（*由 Lætitia 报告。*）
- 修复同步 `archive-get` 命令错误获取归档写锁的问题。（*由 uspen 报告。*）

**改进：**

- 将导出的 C 函数和 Perl 模块直接嵌入 pgBackRest 可执行文件中。
- 使用 `time_t` 替代 `__time_t` 以提升可移植性。（*由 Nick Floersch 建议。*）
- 在命令结束时以毫秒为单位打印总运行时长。


### v2.02 版本说明

*并行异步 archive-get 与配置文件包含*

*发布于 2018 年 5 月 6 日*

**漏洞修复：**

- 修复目录同步在仅应同步指定目录时递归执行的问题。（*由 Craig A. James 报告。*）
- 修复增量/差异备份中 `archive-copy` 抛出"path not found"错误的问题。（*由 yummyliu、Vitaliy Kukharik 报告。*）
- 修复 `PGDATA` 中两个或多个文件链接到同一目录时 manifest 构建失败的问题。（*由 Vitaliy Kukharik 报告。*）
- 修复链接文件缺失时 delta restore 失败的问题。
- 修复帮助信息中键值和列表选项的渲染问题。（*由 Clinton Adams 报告。*）

**新功能：**

- 添加异步并行 `archive-get`。该特性维护一个 WAL 段预取队列，在 PostgreSQL 通过 `restore_command` 请求 WAL 段时降低等待延迟。
- 支持附加的 pgBackRest 配置文件。配置文件目录由 `--config-include-path` 选项指定；新增 `--config-path` 选项用于覆盖 `--config` 和 `--config-include-path` 的默认基础路径。（*由 Cynthia Shang 贡献，David Steele 审核。*）
- 添加 `repo-s3-token` 选项，支持配置临时凭据令牌。pgBackRest 目前不具备主动刷新凭据的能力，因此整个命令（如 `backup`、`restore`）必须在凭据过期前完成。（*由 Yogesh Sharma 贡献，David Steele 审核。*）

**改进：**

- 更新 `archive-push-queue-max`、`manifest-save-threshold` 和 `buffer-size` 选项，支持接受 `KB`、`MB`、`GB`、`TB` 或 `PB` 为单位的值（乘数以 1024 的幂计算）。（*由 Cynthia Shang 贡献，David Steele 审核。*）
- 提升备份/恢复路径同步效率。扫描整个目录在小表数量众多时代价高昂；备份 manifest 中已包含路径列表，现改为使用该列表执行同步，而非扫描备份/恢复路径。
- 在初始 info 日志消息中同时显示命令参数和选项。
- 将 `archive-queue-max` 选项重命名为 `archive-push-queue-max`，与新增的 `archive-get-queue-max` 选项保持命名一致。旧选项名称仍可继续使用。

**文档漏洞修复：**

- 更新文档，添加 32 位支持说明及注意事项。32 位支持已于 v1.26 添加。（*由 Viorel Tabara 报告。*）

**文档改进：**

- 添加使用 PostgreSQL 和 jq 的监控示例。（*由 Stephen Frost、Brian Faherty 建议。*）
- 添加归档配置中命令节使用示例。（*由 Christophe Courtois 建议。*）
- 移除将 `info --output=json` 描述为实验性功能的说明。
- 更新 `spool-path` 选项的过时描述。

**测试套件新功能：**

- 使用 lcov 进行 C 单元测试覆盖率报告，从 Devel::Cover 切换，原因是后者无法报告从 gcov 转换的报告中的分支覆盖率。模块的不完整分支覆盖率现在会产生错误。单元测试覆盖率仅在语句或分支覆盖不完整时才会出现在报告中。


### v2.01 版本说明

*小型缺陷修复与改进*

*发布于 2018 年 3 月 19 日*

**漏洞修复：**

- 修复使用 `--type=immediate` 恢复时 `--target-action` 和 `--recovery-option` 选项被报告为无效的问题。（*由 Brad Nicholson 报告。*）
- 在命令行传入加密选项（如 `repo1-s3-key`）时立即报错。由于 pgBackRest 不会将加密选项传递给子进程，之前会抛出晦涩的错误；新错误更加清晰并提示了解决方法。同时更新命令文档，省略不能在命令行指定的加密选项。（*由 Brad Nicholson 报告。*）
- 修复向嵌入式 Perl 传递 `--no-config` 时的问题。（*由 Ibrahim Edib Kokdemir 报告。*）
- 修复将 `log-level-stderr` 设置高于 `warn` 时 `local`/`remote` 进程因 stderr 出现意外输出而报错退出的问题。`local`/`remote` 进程的日志级别上限现调整为 `error`，因为这些进程本不应输出警告。（*由 Clinton Adams 报告。*）
- 修复存在表空间时 `check` 命令中 manifest 测试的问题。（*由 Cynthia Shang 修复，David Steele 审核，Thomas Flatley 报告。*）

**改进：**

- 在配置文件中为不接受多个参数的选项设置多个值时报错。（*由 Cynthia Shang 贡献，David Steele 审核。*）
- 从 `src/Makefile` 中移除多余的 sudo 命令。（*由 Adrian Vondendriesch 贡献，David Steele 审核。*）

**文档改进：**

- 在示例中为带索引的选项（如 `repo-*`、`pg-*`）显示索引。（*由 Stephen Frost 建议。*）
- 简化命令页面目录，仅列出命令。（*由 Stephen Frost 建议。*）
- 移除关于 C 库为可选项的说明。

**测试套件新功能：**

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

**文档新功能：**

- 文档中所有集群均使用校验和初始化。

**文档改进：**

- 在文档和命令行帮助中列出已弃用的选项名称。
- 明确说明 S3 存储桶必须由用户自行创建。（*由 David Youatt 建议。*）


### v1.29 版本说明

*备份恢复关键缺陷修复*

*发布于 2018 年 7 月 5 日*

**重要提示**：本版本修复了备份 resume 功能中的一个关键缺陷。此版本之前所有已 resume 的备份均应视为不一致。当先前的备份失败时，若未指定 `resume=n`，则会触发备份 resume。可通过检查备份日志中是否存在"aborted backup of same type exists, will be cleaned to remove invalid files and resumed"消息来判断备份是否已被 resume。若存在该消息，请勿使用该备份或同一备份集中的任何备份进行恢复，并检查恢复日志确认是否用到了 resume 备份。若已使用，集群中可能存在不一致数据。

**漏洞修复：**

- 修复 resume 中导致备份不一致的关键缺陷。`v0.82` 中的一次回归移除了在决定恢复哪些已中止备份文件时的时间戳比较逻辑，详情参见上方说明。（*由 David Youatt、Yogesh Sharma、Stephen Frost 报告。*）
- 修复 S3 授权头中不符合 ISO-8601 规范的时间戳格式。AWS 和部分网关对空格与零填充小时均可容忍，但其他实现则不然。（*由 Andrew Schwartz 修复，David Steele 审核。*）
- 修复目录同步在仅应同步指定目录时递归执行的问题。（*由 Craig A. James 报告。*）
- 修复使用 `--type=immediate` 恢复时 `--target-action` 和 `--recovery-option` 选项被报告为无效的问题。（*由 Brad Nicholson 报告。*）
- 修复增量/差异备份中 `archive-copy` 抛出"path not found"错误的问题。（*由 yummyliu、Vitaliy Kukharik 报告。*）
- 修复 `PGDATA` 中两个或多个文件链接到同一目录时 manifest 构建失败的问题。（*由 Vitaliy Kukharik 报告。*）
- 修复链接文件缺失时 delta restore 失败的问题。
- 修复集群中只存在一个用户数据库时选择性恢复报错的问题。（*由 Cynthia Shang 修复，David Steele 审核，Nj Baliyan 报告。*）

**改进：**

- 改进 HTTP 客户端，在服务端未指定时将 `content-length` 设为 0。S3（及其网关）始终设置 `content-length` 或 `transfer-encoding`，但 `HTTP 1.1` 并不强制要求，部分代理（如 HAProxy）可能不包含任一字段。（*由 Adam K. Sumner 建议。*）
- 提升 HTTPS 客户端性能。缓冲现在会在 socket 上有 `pending` 字节时将其计入，而非完全依赖 `select()`。在某些情况下，最后几个字节直到连接关闭才会被刷出。
- 提升 S3 删除性能。常量 `S3_BATCH_MAX` 曾被替换为硬编码值 2（可能是测试时遗留）。
- 提升备份/恢复路径同步效率。扫描整个目录在小表数量众多时代价高昂；备份 manifest 中已包含路径列表，现改为使用该列表执行同步，并移除不再使用的递归路径同步功能。

**文档漏洞修复：**

- 更新文档，添加 32 位支持说明及注意事项。32 位支持已于 v1.26 添加。（*由 Viorel Tabara 报告。*）

**文档改进：**

- 明确说明 S3 存储桶必须由用户自行创建。（*由 David Youatt 建议。*）
- 更新 `spool-path` 选项的过时描述。


### v1.28 版本说明

*Stanza 删除*

*发布于 2018 年 2 月 1 日*

**漏洞修复：**

- 修复使用 `--db-include` 恢复表空间中单个数据库时失败的问题。（*由 Cynthia Shang 修复，David Steele 审核，Chiranjeevi Ravilla 报告。*）
- 确保在将 `archive.info` 匹配到 `backup.info` 时选择最新的 `db-id`。在存在 `system-id` 和 `db-version` 重复项时（例如回滚 `pg_upgrade` 后），此改动可提供正确匹配。（*由 Cynthia Shang 修复，David Steele 审核，Adam K. Sumner 报告。*）
- 修复报告无效命令时过于冗长的错误消息。（*由 Jason O'Donnell 报告。*）

**新功能：**

- 添加 `stanza-delete` 命令，用于清理不再使用的 stanza。（*由 Cynthia Shang 贡献，David Steele 审核，Magnus Hagander 建议。*）

**改进：**

- 改进 `stanza-create` 命令，使其在 stanza 已存在时不再报错。（*由 Cynthia Shang 贡献，David Steele 审核。*）

**文档改进：**

- 更新 `stanza-create --force` 文档，提示使用时需谨慎。（*由 Jason O'Donnell 建议。*）


### v1.27 版本说明

*缺陷修复与文档*

*发布于 2017 年 12 月 19 日*

**漏洞修复：**

- 修复 `backup` 和 `restore` 的本地性检查错误被抑制的问题。存在备份主机时，备份应仅允许在备份主机上执行，恢复应仅允许在数据库主机上执行，除非创建了忽略远程主机的备用配置。（*由 Lardière Sébastien 报告。*）
- 修复 PostgreSQL 10 上 WAL 未过期的问题。原因是正则表达式存在缺陷，期望所有 PostgreSQL 主版本号均为 X.X 格式。（*由 Adam Brusselback 报告。*）
- 修复 `--no-config` 选项未传递给子进程的问题。这会导致子进程仍读取本地配置文件，可能引发意外行为。
- 修复 `info` 命令在先前版本集群没有备份或归档时仍显示 `"db (prior)"` 输出的问题。（*由 Cynthia Shang 修复，David Steele 审核，Stephen Frost 报告。*）

**文档新功能：**

- 说明 `archive-copy` 和 `archive-check` 选项之间的关系。（*由 Markus Nullmeier 建议。*）
- 改进 `archive-copy` 参考文档。


### v1.26 版本说明

*仓库加密*

*发布于 2017 年 11 月 21 日*

**漏洞修复：**

- 修复恢复时复制大型 manifest 可能失败的问题。（*由 Craig A. James 报告。*）
- 修复 32 位架构下不正确的 WAL 偏移量。（*由 Javier Wilson 修复，David Steele 审核。*）
- 修复获取旧数据库版本 WAL 时的问题。执行 `stanza-upgrade` 后，应仍能恢复之前版本的备份并通过 `archive-get` 进行恢复。但 `archive-get` 仅检查最新的 db 版本/id 而失败。同时清理了同一 db 版本/id 多次出现时的相关问题。（*由 Cynthia Shang 修复，David Steele 审核，Clinton Adams 报告。*）
- 修复恢复时无效备份组未被正确设置的问题。若备份无法将某个组映射到名称，则将该组以 `false` 存入 manifest，恢复时使用 `$PGDATA` 所有者或当前用户的组来设置。该逻辑存在缺陷，导致所选的组覆盖了用户，组未定义而用户被错误设置为组。（*由 Jeff McCormick 报告。*）
- 修复向远程传递参数时的问题。指定多个 db 时，无论实际处理的是哪个 db，都会传递 db1 的路径、端口和 socket 路径。（*由 uspen 报告。*）

**新功能：**

- 支持仓库加密。（*由 Cynthia Shang、David Steele 贡献。*）

**改进：**

- 当 `--compress-level-network=0` 时禁用 gzip 过滤器。该过滤器曾以压缩级别 0 运行，带来额外开销却毫无收益。
- 改进 gzip 过滤器的解压性能。

**文档新功能：**

- 添加用于改善 issue 提交时初始信息收集的模板。（*由 Cynthia Shang 贡献，David Steele 审核。*）

**文档改进：**

- 明确说明 `archive-timeout` 选项的用法及其与 PostgreSQL `archive_timeout` 设置的区别。（*由 Cynthia Shang 贡献，David Steele 审核，Keith Fiske 建议。*）

**测试套件新功能：**

- 支持 32 位 i386/i686 架构的自动化测试。


### v1.25 版本说明

*S3 性能改进*

*发布于 2017 年 10 月 24 日*

**漏洞修复：**

- 修复 `compress-level` 选项自定义设置被忽略的问题。（*由 Jens Wilke 报告。*）
- 移除检测到重叠时间线时的报错。重叠时间线在许多时间点恢复（PITR）场景中是有效的。（*由 blogh 报告。*）
- 修复 JSON info 输出中 `database-id` 未渲染为整数的问题。（*由 Cynthia Shang 修复，David Steele 审核，Jason O'Donnell 报告。*）

**新功能：**

- 提升 S3 列表请求的性能。过滤表达式中任何起始字面量部分均用于生成搜索前缀，通常可将请求范围控制在足够小，从而避免触发限流。（*由 Mihail Shvein 建议。*）

**测试套件新功能：**

- 添加 I/O 性能测试。


### v1.24 版本说明

*新增备份排除项*

*发布于 2017 年 9 月 28 日*

**漏洞修复：**

- 修复从备库初始化备份期间警告消息覆盖低优先级日志消息输出的问题。（*由 uspen 报告。*）
- 修复部分 `db-*` 选项（如 `db-port`）未传递给远程的问题。（*由 uspen 报告。*）

**新功能：**

- 从备份中排除 `pg_snapshots`、`pg_serial`、`pg_notify` 和 `pg_dynshmem` 目录的内容，因为这些内容在启动时会重建。
- 从备份中排除 `pg_internal.init` 文件，因为这些文件在启动时会重建。

**改进：**

- 在异步进程完全从主进程分离后才打开日志文件，以防止主进程向该文件写入日志。（*由 Jens Wilke 建议。*）

**文档新功能：**

- 添加无密码 SSH 配置说明。

**文档改进：**

- 在文档中将 `master` 重命名为 `primary`，与 PostgreSQL 惯例保持一致。


### v1.23 版本说明

*多备库与 PostgreSQL 10 支持*

*发布于 2017 年 9 月 3 日*

**漏洞修复：**

- 修复文件持续增大时压缩可能中止的问题。（*由 Jesper St John、Aleksandr Rogozin 报告。*）
- 修复本地进程未向远程发送 keep-alive 的问题。（*由 William Cox 报告。*）

**新功能：**

- 支持配置最多七个备库用于从备库备份。（*由 Cynthia Shang 贡献，David Steele 审核。*）
- 支持 PostgreSQL 10。
- 在读取 XML 数据时允许使用 `content-length`（除分块编码外），以提升与第三方 S3 网关的兼容性。（*由 Victor Gdalevich 建议。*）

**改进：**

- 增加 S3 的 HTTP 超时时间。
- 添加 HTTP 重试，增强对 S3 瞬时网络错误的容错能力。

**文档漏洞修复：**

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

- 恢复时现在会重新创建 `archive_status` 目录，以支持 PostgreSQL 8.3——该版本与较新版本不同，不会自动重建此目录。（*由 Stephen Frost 报告。*）
- 修复了执行 `stanza-upgrade` 后，旧版 PostgreSQL 的空归档目录可能残留的问题。（*由 Cynthia Shang 修复，David Steele 审核。*）

**新功能：**

- 改进了 `info` 命令的文本与 JSON 输出，新增归档 ID 字段，以及当前与历史数据库集群版本（如有）在归档中的最小/最大 WAL 信息。（*由 Cynthia Shang 贡献，David Steele 审核。*）
- 新增 `--backup-ssh-port` 和 `--db-ssh-port` 选项，支持非默认 SSH 端口。（*由 Cynthia Shang 贡献，David Steele 审核。*）

**改进：**

- 当 S3 返回内部错误（500）时自动重试。

**文档漏洞修复：**

- 根据命令上下文修正了 `--online` 选项的描述。

**文档新功能：**

- 在手动安装说明中新增了创建 `/etc/pgbackrest.conf` 的步骤。

**文档改进：**

- 将仓库选项移入命令行帮助的独立章节。（*由 Stephen Frost 建议。*）


### v1.20 版本说明

*关键 8.3/8.4 漏洞修复*

*发布于 2017 年 6 月 27 日*

**重要提示**：使用了表空间的 PostgreSQL 8.3 和 8.4 环境，应立即从任意 v1 版本升级并执行一次全量备份。本版本修复了一个仅影响上述两个版本的漏洞——该漏洞会导致表空间无法被备份。PostgreSQL >= 9.0 不受影响。

**漏洞修复：**

- 修复了 PostgreSQL <= 8.4 上表空间无法备份的问题。
- 修复了 C 库构建时缺少编译标志的问题，该问题会导致在 32 位系统上生成不匹配的二进制文件。（*由 Adrian Vondendriesch 报告。*）

**新功能：**

- 新增 `s3-repo-ca-path` 和 `s3-repo-ca-file` 选项，支持 `IO::Socket::SSL` 无法自动定位 CA 的系统（如 RHEL7），或加载自定义 CA。（*由 Scott Frazer 建议。*）

**测试套件新功能：**

- 将文档构建纳入 CI 流程。


### v1.19 版本说明

*S3 支持*

*发布于 2017 年 6 月 12 日*

**漏洞修复：**

- 修复了 `info` 命令，确保显示的 WAL 归档最小/最大值对应当前数据库版本。（*由 Cynthia Shang 修复，David Steele 审核。*）
- 修复了 `backup` 命令：当备库未配置或不可达时，`backup-standby` 选项现在会被重置，并继续在主库上执行备份。（*由 Cynthia Shang 修复，David Steele 审核。*）
- 修复了远程进程产生的配置警告导致主进程报错的问题。（*由 Cynthia Shang 修复，David Steele 审核。*）

**新功能：**

- 支持将 Amazon S3 作为备份仓库。（*由 Cynthia Shang 审核。*）

**文档漏洞修复：**

- 将配置参考中无效的 `max-archive-mb` 选项更正为 `archive-queue-max`。
- 修复了安装章节中缺少 `sudo` 的问题。（*由 Lætitia 修复，David Steele 审核。*）


### v1.18 版本说明

*stanza 升级、代码重构与锁机制改进*

*发布于 2017 年 4 月 12 日*

**漏洞修复：**

- 修复了一个问题：使用本地工作进程的只读操作（如 `restore`）会创建写锁，干扰并行 `archive-push`。（*由 Jens Wilke 报告。*）

**新功能：**

- 新增 `stanza-upgrade` 命令，为 PostgreSQL 主版本升级后的 stanza 升级提供了正式机制。（*由 Cynthia Shang 贡献，David Steele 审核。*）
- 新增对 `pgbackrest.conf` 的验证功能，当选项无效或所在章节不正确时输出警告。（*由 Cynthia Shang 贡献，David Steele 审核。*）

**改进：**

- 简化了锁机制。现在仅主进程持有写锁（用于 `archive-push` 和 `backup` 命令），不再要求所有本地和远程工作进程都持锁。
- 不再将备份目录中文件的时间戳同步为与集群目录一致。此做法原本为支持备份续传而设计，该功能现已改由校验和机制实现。
- 改进了 `restore` 命令检测到 `postmaster.pid` 时的错误提示信息。（*由 Yogesh Sharma 建议。*）
- 将返回码范围从 25~125 重新编号，以避免 PostgreSQL 将某些返回码解释为致命信号异常。（*由 Yogesh Sharma 建议。*）


### v1.17 版本说明

*页面校验和漏洞修复*

*发布于 2017 年 3 月 13 日*

**漏洞修复：**

- 修复了新初始化但未使用的页面触发页面校验和警告的问题。（*由 Stephen Frost 报告。*）


### v1.16 版本说明

*页面校验和改进、CI 与包测试*

*发布于 2017 年 3 月 2 日*

**漏洞修复：**

- 修复了超过 1GB 的表在第一个段之后报告页面校验和警告的问题。（*由 Stephen Frost 报告。*）
- 修复了使用非默认表空间创建的数据库，对 `pg_filenode.map` 和 `pg_internal.init` 产生虚假页面未对齐警告的问题。（*由 blogh 报告。*）

**测试套件新功能：**

- 集成 `travis-ci` 进行持续集成。
- 为所有受支持发行版自动构建 Debian 软件包。


### v1.15 版本说明

*代码重构与漏洞修复*

*发布于 2017 年 2 月 13 日*

**漏洞修复：**

- 修复了 v1.13 引入的回归问题：构建 manifest 期间若有文件被删除（如表被删除），备份可能失败。（*由 Navid Golpayegani 报告。*）


### v1.14 版本说明

*代码重构与漏洞修复*

*发布于 2017 年 2 月 13 日*

**漏洞修复：**

- 修复了 `archive-push` 报错后不重试、而是无限期向 PostgreSQL 返回错误（除非手动删除 `.error` 文件）的问题。（*由 Jens Wilke 报告。*）
- 修复了并行归档中的竞争条件：多个进程同时尝试创建新路径时会产生错误。（*由 Jens Wilke 报告。*）

**改进：**

- 提升了 `info` 命令中 `wal archive min/max` 的查询性能。（*由 Jens Wilke 建议。*）

**文档新功能：**

- 更新了异步归档文档，更准确地描述了新方法的工作原理及其与旧方法的差异。（*由 Jens Wilke 建议。*）


### v1.13 版本说明

*并行归档、stanza 创建、改进的 `info` 与 `check`*

*发布于 2017 年 2 月 5 日*

**重要提示**：异步归档的新实现不再将 WAL 复制到独立队列。升级到 1.13 后，旧队列中残留的 WAL 将被放弃，**不会** 推送到仓库。为避免数据丢失，请在升级前通过设置 `archive_command = false` 停止归档，然后执行 `pgbackrest --stanza=[stanza-name] archive-push` 清空异步队列并等待进程结束，确认 `[spool-path]/archive/[stanza-name]/out` 中的队列已清空，最后再安装 1.13 并恢复原始 `archive_command`。**重要说明**：`stanza-create` 命令不再是可选步骤，在 **新** stanza 上执行备份或归档前必须先执行该命令。已有 stanza 无需重新执行。

**漏洞修复：**

- 修复了 C 库中 const 赋值导致编译器警告的问题。（*由 Adrian Vondendriesch 修复，David Steele 审核。*）
- 修复了 `--repo-sync` 选项遗漏的若干目录同步操作。
- 修复了恢复时因用户/组缺失导致 `File->owner()` 出现"未初始化值"错误的问题。（*由 Leonardo GG Avellar 报告。*）
- 修复了协议不匹配错误未输出预期值的问题。
- 修复了 `archive-get` 的一条虚假日志消息，该消息错误地将退出码 1 标记为异常终止。

**新功能：**

- 改进了异步归档的多进程实现。
- 改进了 `stanza-create` 命令，使其能在大多数情况下修复损坏的仓库，并具备足够的健壮性以成为强制执行步骤。（*由 Cynthia Shang 贡献，David Steele 审核。*）
- 改进了 `check` 命令，使其可在备库上运行；由于副本无法执行 `pg_switch_xlog()`，仅执行基本检查。（*由 Cynthia Shang 贡献，David Steele 审核。*）
- 在 `info` 命令中新增了归档和备份的 WAL 范围信息。
- 在 PostgreSQL < 9.2 中重映射表空间时，新增更新 `pg_tablespace.spclocation` 的警告提示。（*由 blogh 贡献，David Steele 审核。*）
- 移除了 `archive-get`、`restore`、`info` 和 `check` 命令的远程锁需求，因为上述均为只读操作。（*由 Michael Vitale 建议。*）

**改进：**

- 日志文件头信息现在等到第一条日志条目写入时才输出。（*由 Jens Wilke 建议。*）
- 通过以备份起始 LSN 过滤，降低了撕裂页面导致页面校验和误报的概率。
- 从 C 库构建标志中移除了 Intel 专用优化。（*由 Adrian Vondendriesch 贡献，David Steele 审核。*）
- 移除了 `--lock` 选项。该选项在锁目录可以位于仓库之外前引入，现已废弃。
- 新增 `--log-timestamp` 选项，允许在日志中抑制时间戳输出，主要用于自动化文档场景以避免过滤器干扰。
- 修复了无法将相对路径转换为绝对路径时未返回正确错误码的问题。（*由 Yogesh Sharma 建议。*）

**文档新功能：**

- 在用户指南中新增了 `process-max` 选项的说明文档。（*由 Cynthia Shang 贡献，David Steele 审核。*）


### v1.12 版本说明

*页面校验和、配置改进与漏洞修复*

*发布于 2016 年 12 月 12 日*

**重要提示**：在此前版本中，命令行上指定对当前命令无效的选项不会报错。现在无效选项将产生错误，请仔细检查环境中的命令行参数以避免升级中断。

**漏洞修复：**

- 修复了命令行上提供对指定命令无效的选项时不报错的问题。这些选项虽被忽略且不影响行为，但容易造成混淆。无效选项现在将产生错误。（*由 Nikhilchandra Kulkarni 报告。*）
- 修复了仓库中表空间内部符号链接未被创建的问题。此问题仅在尝试通过文件系统快照在原地手动启动集群时才会出现，不影响正常的备份与恢复。
- 修复了日志系统初始化之前（即解析选项期间）错误信息无法输出到控制台的问题。错误码仍会准确返回，进程不会在实际失败时显示为成功。（*由 Adrian Vondendriesch 报告。*）
- 修复了备份服务器上指定的 `db-port` 选项，若不来自第一个已配置的数据库则无法正确传递给远程的问题。（*由 Michael Vitale 报告。*）

**新功能：**

- 新增 `--checksum-page` 选项，允许 pgBackRest 在 PostgreSQL >= 9.3 且启用了页面校验和的情况下，验证数据文件中的页面校验和。注意：此功能依赖 C 库，操作系统软件包中可能暂不提供。当 C 库存在且集群启用了校验和时，该选项将自动启用。（*由 Stephen Frost 建议。*）
- 新增 `--repo-link` 选项，允许在仓库位于不支持符号链接的文件系统时抑制内部符号链接的创建。这不影响 pgBackRest 的任何核心功能，但不会创建 `latest` 便捷链接及内部表空间符号链接，从而影响通过文件系统快照在原地手动启动集群的能力。
- 新增 `--repo-sync` 选项，允许在不支持目录同步的文件系统（如 NTFS）上禁用仓库目录同步。
- 新增可预测的日志条目，用于标识命令已成功完成。例如，备份成功结束时将输出：`INFO: backup command end: completed successfully`。（*由 Jens Wilke 建议。*）

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

- 修复了异步归档每次执行只传输一个文件而非批量传输的问题。此回归问题自 v1.09 引入，仅影响效率——异步模式下所有 WAL 段均被正确归档。（*由 Stephen Frost 报告。*）


### v1.10 版本说明

*stanza 创建与小型漏洞修复*

*发布于 2016 年 11 月 8 日*

**漏洞修复：**

- 修复了两次备份之间数据库没有任何变更、仅 `pg_control` 发生变化时备份可能报错的问题。
- 修复了前缀相同的表空间路径触发无效链接错误的问题。（*由 Nikhilchandra Kulkarni 报告。*）

**新功能：**

- 新增 `stanza-create` 命令，正式化了在仓库中创建 stanza 的流程。（*由 Cynthia Shang 贡献，David Steele 审核。*）

**改进：**

- 从 Perl 模块中移除了多余的 `use lib` 指令。（*由 Devrim Gündüz 建议。*）


### v1.09 版本说明

*9.6 支持、可配置性改进与漏洞修复*

*发布于 2016 年 10 月 10 日*

**漏洞修复：**

- 修复了 `check` 命令在备份目录不存在时仍记录错误日志消息的问题。（*由 Cynthia Shang 修复，David Steele 审核。*）
- 修复了检测到无效归档命令时错误消息未正确显示该命令的问题。（*由 Jason O'Donnell 报告。*）
- 修复了一个问题：当 `archive-push` 没有足够空间排队新 WAL 段时，异步归档进程不会被启动，导致队列永远无法清空（除非手动干预，例如直接调用 `archive-push`）。现在，当空间不足时 PostgreSQL 会收到错误，但异步进程仍会被启动，以便最终释放空间。（*由 Jens Wilke 报告。*）
- 修复了一个远程超时问题：本地进程在生成校验和（续传或恢复期间）而未复制文件时，远程进程可能进入空闲状态。（*由 Jens Wilke 报告。*）

**新功能：**

- 在 PostgreSQL 9.6 上将自动使用非独占备份。
- 新增 `cmd-ssh` 选项，允许指定 SSH 客户端。（*由 Jens Wilke 建议。*）
- 新增 `log-level-stderr` 选项，控制台日志消息输出到 `stderr` 还是 `stdout`。默认值为 `warn`，与旧版本行为略有不同，但更符合直觉。设置 `log-level-stderr=off` 可恢复旧行为。（*由 Sascha Biberhofer 建议。*）
- 将数据库连接的 `application_name` 设置为 `"pgBackRest [command]"`。（*由 Jens Wilke 建议。*）
- 当 `archive-check` 选项启用时，检查 `archive_mode` 是否已开启。

**改进：**

- 优化了无法获取 pgBackRest 顾问锁时的错误提示，明确说明这不是 PostgreSQL 备份锁。（*由 Jens Wilke 建议。*）
- 命令启动的 INFO 日志中包含 pgBackRest 版本号。
- 本地进程启动/停止的 INFO 日志中记录进程 ID。

**文档新功能：**

- 在用户指南中新增了 `archive-timeout` 选项的说明文档。（*由 Cynthia Shang 贡献，David Steele 审核。*）


### v1.08 版本说明

*漏洞修复与日志改进*

*发布于 2016 年 9 月 14 日*

**漏洞修复：**

- 修复了本地进程完成后未断开连接、可能导致稍后超时的问题。（*由 Todd Vernick 报告。*）
- 修复了协议层在等待 WAL 段到达归档时可能超时的问题。（*由 Todd Vernick 报告。*）

**改进：**

- 缓存文件日志输出，直到文件创建完成，以生成更完整的日志记录。


### v1.07 版本说明

*线程转进程及漏洞修复*

*发布于 2016 年 9 月 7 日*

**漏洞修复：**

- 修复了备库备份期间表空间从主库复制的问题。
- 修复了 `check` 命令：备份信息现在同时在远程和本地进行检查，而不仅仅在本地。（*由 Cynthia Shang 修复，David Steele 审核。*）
- 修复了 `retention-archive-type=diff` 时 `retention-archive` 未被自动设置、导致归档过期不积极的问题。（*由 Cynthia Shang 修复，David Steele 审核。*）

**新功能：**

- 将 Perl 线程转换为进程，提高兼容性与性能。
- 排除 `$PGDATA/pg_replslot` 目录内容，防止主库上的复制槽被纳入备份。
- 即使 `archive-check=n`，`archive-start` 和 `archive-stop` 设置也会写入 `backup.manifest`。（*由 Jens Wilke 建议。*）
- 当归档保留策略设置可能未达到预期效果或会导致无限期保留时，新增额外警告。（*由 Cynthia Shang 贡献，David Steele 审核。*）
- 对 PostgreSQL 9.6 rc1 的非独占备份提供实验性支持。后续候选版本中控制/目录/WAL 版本的变更可能破坏兼容性，但 pgBackRest 将跟随每个版本更新。

**文档漏洞修复：**

- 修复了与二进制路径相关的文档可复现性问题。

**文档新功能：**

- 新增归档保留策略文档。（*由 Cynthia Shang 贡献，David Steele 审核。*）


### v1.06 版本说明

*从备库备份与漏洞修复*

*发布于 2016 年 8 月 25 日*

**漏洞修复：**

- 修复了引用另一个链接的表空间链接不报错、而是直接跳过该表空间的问题。（*由 Michael Vitale 报告。*）
- 修复了 `pgbackrest.conf` 中不允许多值的选项可被多次指定而不报错的问题。（*由 Michael Vitale 报告。*）
- 修复了增大 `db-timeout` 选项时 `protocol-timeout` 未自动同步增大的问题。（*由 Todd Vernick 报告。*）

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

- 修复了一个问题：以 `$PGDATA` 为子字符串的表空间路径，即使实际上不是 `$PGDATA` 的子目录，也会被误识别为子目录。同时对相对路径检查进行了加固。（*由 Chris Fort 报告。*）

**文档新功能：**

- 新增了使用 cron 调度备份的文档。（*由 Cynthia Shang 贡献，David Steele 审核。*）

**文档改进：**

- 将积压事项从 pgBackRest 网站迁移到 GitHub 仓库 Wiki。（*由 Cynthia Shang 贡献，David Steele 审核。*）


### v1.04 版本说明

*各类漏洞修复*

*发布于 2016 年 7 月 30 日*

**漏洞修复：**

- 修复了多余远程连接导致多线程备份/恢复可能超时或产生锁冲突的问题。（*由 Michael Vitale 报告。*）
- 修复了 `check` 命令未强制要求 `db-path`、缺失时触发断言而非友好错误消息的问题。（*由 Michael Vitale 报告。*）
- 修复了 `check` 命令在数据库版本/ID 与归档不匹配时未抛出错误的问题。（*由 Cynthia Shang 修复，David Steele 审核。*）
- 修复了数据库服务器的 `pgbackrest.conf` 中没有 `backup-host` 选项时，远程进程可能尝试启动自身远程进程的问题。（*由 Lardière Sébastien 报告。*）
- 修复了 `pg_xlog` 目录为符号链接时其内容被纳入备份的问题。这不会影响恢复，但会浪费存储空间。
- 修复了锁操作中一个无效的 `log()` 调用。

**新功能：**

- 对 PostgreSQL 9.6 beta3 的非独占备份提供实验性支持。后续 Beta 版本中控制/目录/WAL 版本的变更可能破坏兼容性，但 pgBackRest 将跟随每个版本更新。

**改进：**

- 抑制 SSH 协议连接上的横幅信息。
- 改进了远程错误消息，标识出发生错误的主机。
- 所有远程类型现在都会获取锁。此前的例外情况源于测试框架和 pgBackRest 运行在同一虚拟机中的历史原因，现已不再适用。

**文档新功能：**

- 新增了关于 `backrest-user` 选项默认值为 `backrest` 的说明。（*由 Michael Vitale 建议。*）
- 更新了受支持平台上软件包可用性的相关信息。（*由 Michael Vitale 建议。*）


### v1.03 版本说明

*`check` 命令与漏洞修复*

*发布于 2016 年 7 月 2 日*

**漏洞修复：**

- 修复了多线程 `backup` 期间大量小文件导致 `keep-alives` 被抢占，以及单/多线程 `backup` 续传和 `restore` 校验和计算中完全缺少 keep-alive 的问题。（*由 Janice Parkinson、Chris Barber 报告。*）
- 修复了设置 `db-host` 选项后从命令行显式调用 `expire` 命令被拒绝执行的问题。`backup` 后自动运行 `expire` 时不受此问题影响。（*由 Chris Barber 报告。*）
- 修复了即使禁用 `archive-check` 选项，仍会验证 `archive_command` 的问题。

**新功能：**

- 新增 `check` 命令，用于验证 pgBackRest 的归档和备份配置是否正确。（*由 Cynthia Shang 贡献，David Steele 审核。*）
- 新增 `protocol-timeout` 选项。此前该值固定为 `db-timeout` + 30 秒。
- 备份结束时远程关闭失败不再抛出异常，改为生成建议提高 `protocol-timeout` 的警告。
- 对 PostgreSQL 9.6 beta2 的非独占备份提供实验性支持。后续 Beta 版本中控制/目录/WAL 版本的变更可能破坏兼容性，但 pgBackRest 将跟随每个版本更新。

**改进：**

- 改进了备份时捕获的用户/组在恢复主机上不存在的处理方式，同时明确处理了用户/组未映射到名称的情况。
- 选项处理现在更加严格。此前命令可能使用未明确分配给它的选项，`backup-host` 和 `db-host` 选项尤为如此，这两个选项用于判断操作是否为本地执行。

**文档改进：**

- 允许在文档中使用静态日期，以生成可复现的构建结果。（*由 Adrian Vondendriesch 建议。*）
- 在用户指南中新增了异步归档的文档。（*由 Cynthia Shang 贡献，David Steele 审核。*）
- pgBackRest 模块的推荐安装位置更改为 `/usr/share/perl5`，因为 `/usr/lib/perl5` 在较新版本的 Perl 中已从搜索路径中移除。
- 新增了删除旧版本 pgBackRest 的操作说明。


### v1.02 版本说明

*修复 Perl 5.22 兼容性*

*发布于 2016 年 6 月 2 日*

**漏洞修复：**

- 修复了 `sprintf()` 的使用方式，使其符合 Perl 5.22 的新限制——格式字符串中不再允许未引用的参数。（*由 Adrian Vondendriesch 修复，David Steele 审核。*）

**文档漏洞修复：**

- 修复了与 Perl 5.2X 不兼容的语法。（*由 Christoph Berg、Adrian Vondendriesch 修复，David Steele 审核。*）
- 修复了 PDF 徽标中使用绝对路径的问题。（*由 Adrian Vondendriesch 报告。*）

**文档新功能：**

- 发布说明现在按章节划分，明确区分漏洞修复、新功能和代码重构。新增"附加说明"章节，用于记录不影响核心代码的文档和测试套件变更。
- 新增 man 页面生成功能。（*由 Adrian Vondendriesch、David Steele 贡献。*）
- 变更日志是最后一个仅以 Markdown 格式渲染的文档。现编写了转换器使其可由标准渲染器输出。变更日志现已发布在网站上，并更名为"发布说明（Releases）"。（*由 Cynthia Shang 贡献，David Steele 审核。*）


### v1.01 版本说明

*增强的 `info`、选择性恢复与 9.6 支持*

*发布于 2016 年 5 月 17 日*

**新功能：**

- 增强了 `info` 命令的文本输出，包含所有备份的时间戳、大小和参考列表。（*由 Cynthia Shang 贡献，David Steele 审核。*）
- 支持从集群备份中选择性恢复指定数据库。当只需恢复特定数据库时，此功能可大幅节省空间和时间。未恢复的数据库将不可访问，在从共享目录中删除前须手动处理。（*由 Cynthia Shang、Greg Smith、Stephen Frost 审核，Stephen Frost 建议。*）
- 对 PostgreSQL 9.6 beta1 的非独占备份提供实验性支持。后续 Beta 版本中控制/目录/WAL 版本的变更可能破坏兼容性，但 pgBackRest 将跟随每个版本更新。（*由 Cynthia Shang 审核。*）


### v1.00 版本说明

*新仓库格式与配置方案、链接支持*

*发布于 2016 年 4 月 14 日*

**重要提示**：此次重大版本变更与旧版本 pgBackRest 不兼容。manifest 格式、磁盘目录结构、配置方案以及可执行文件/路径名称均已变更。您必须为此版本的 pgBackRest 创建新仓库以存储备份，并暂时保留旧仓库以备恢复之需。从旧仓库恢复需使用旧版本的 pgBackRest，但由于名称变更，可同时安装 1.00 与旧版本。具体变更如下。

**新功能：**

- 实现了全新的配置方案，使用更为简便。详见用户指南和配置参考。对于简单配置，所有选项现在都可以放在 `stanza` 章节中；多个 stanza 间共享的选项可以放在 `[global]` 章节；更复杂的配置仍可使用命令章节，但这应属于少见情况。（*由 Michael Renner 建议。*）
- `repo-path` 选项现在始终指向存储备份和归档的仓库，无论本地还是远程，因此 `repo-remote-path` 选项已被移除。新增 `spool-path` 选项，可用于定义异步归档时排队 WAL 段的位置。本地仓库不再是必需的。
- 默认配置文件名由 `pg_backrest.conf` 改为 `pgbackrest.conf`，以与其他命名变更保持一致，同时防止迁移到 1.00 时意外加载旧配置文件。（*由 Michael Renner、Stephen Frost 建议。*）
- 默认仓库路径由 `/var/lib/backup` 改为 `/var/lib/pgbackrest`。（*由 Michael Renner、Stephen Frost 建议。*）
- 锁文件现在默认存储在 `/tmp/pgbackrest` 中。目前 `/run/pgbackrest` 是首选位置，但这需要初始化脚本，本版本暂不包含。可使用 `lock-path` 选项配置锁目录。
- 日志文件现在默认存储在 `/var/log/pgbackrest` 中，文件名不再追加日期，便于使用 `logrotate` 管理。可使用 `log-path` 选项配置日志目录。（*由 Stephen Frost 建议。*）
- 可执行文件名由 `pg_backrest` 改为 `pgbackrest`。（*由 Michael Renner、Stephen Frost 建议。*）
- `PGDATA` 中所有链接的文件和目录现在均包含在备份中。默认情况下，链接在恢复时将直接作为文件或目录还原到 `PGDATA` 中。可使用 `--link-all` 选项将所有链接恢复到其原始位置，或使用 `--link-map` 选项将链接重新映射到新位置。
- 移除了 `--tablespace` 选项，以 `--tablespace-map-all` 选项替代，更清晰地表达其功能。
- 新增 `detail` 日志级别，输出介于 `info` 和 `debug` 之间的详细信息。


--------

## 预稳定版本


### v0.92 版本说明

*命令行仓库路径修复*

*发布于 2016 年 4 月 6 日*

**漏洞修复：**

- 修复了主进程将 `--repo-remote-path` 而非 `--repo-path` 传递给远程的问题，该问题导致锁文件被创建在默认仓库目录（`/var/lib/backup`）中，通常以失败告终。此问题仅在命令行（而非 `pg_backrest.conf`）中定义了 `--repo-remote-path` 时才会出现。（*由 Jan Wieck 报告。*）


### v0.91 版本说明

*表空间漏洞修复与小型改进*

*发布于 2016 年 3 月 22 日*

**表空间重要漏洞修复**：v0.90 意外引入了仓库格式变更，导致包含表空间的备份在磁盘上不再是有效的 PostgreSQL 集群。此问题仅影响直接复制备份来恢复 PostgreSQL 集群（而非使用 `restore` 命令）的用户。无论采用哪种恢复方式，此修复与包含表空间的旧备份均不兼容（pgBackRest 将抛出错误并拒绝恢复）。对于包含表空间的集群，安装 v0.91 后应立即执行新的全量备份。如需恢复旧备份，请使用与备份版本匹配的 pgBackRest 版本。

**漏洞修复：**

- 修复了 pgBackRest v0.90 引入的仓库不兼容问题。（*由 Evan Benoit 报告。*）

**新功能：**

- 备份时最后复制 `global/pg_control`。
- 将 `.info` 和 `.manifest` 文件先写入临时文件，再移动到最终位置并执行 `fsync`。
- 将 `--no-start-stop` 选项重命名为 `--no-online`。

**测试套件新功能：**

- 使用 Perl-Critic 进行静态源码分析，目前在 `gentle`（宽松）级别通过。


### v0.90 版本说明

*9.5 支持、各类改进与小型漏洞修复*

*发布于 2016 年 2 月 7 日*

**漏洞修复：**

- 修复了指定 `--no-archive-check` 时抛出配置错误的问题。（*由 Jason O'Donnell 报告。*）
- 修复了系统在恰当时机崩溃后遗留的临时 WAL 文件导致下次 `archive-push` 失败的问题。
- `retention-archive` 选项现在可以安全地设置为低于备份保留值（`retention-full` 或 `retention-diff`），而无需同时指定 `archive-copy=n`。使超出归档保留范围的备份保持一致性所需的 WAL 将被保留在归档中。但在此情况下，超出归档保留范围的备份将无法进行 PITR。

**新功能：**

- 备份和恢复表空间时，pgBackRest 仅操作为当前运行的 PostgreSQL 版本创建的子目录。由于多个版本可以共用同一个表空间目录（尤其是在二进制升级期间），这可以防止备份时复制过多文件，以及恢复时可能清除其他版本数据。此特性仅适用于 PostgreSQL >= 9.0——更早版本不支持共享表空间目录。
- 当 `archive-check=y` 但 `archive_command` 不执行 `pg_backrest` 时，生成错误。（*由 Jason O'Donnell 贡献，David Steele 审核。*）
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

- 修复了使用远程和多线程时，长时间运行的备份/恢复会超时的问题。现在使用 `keepalive` 确保主进程的远程连接在线程处理所有工作期间不会超时。同时改进了超时的错误消息，便于调试。（*由 Stephen Frost 报告。*）

**新功能：**

- 允许通过 `--no-lock` 和 `--log-level-file=off` 在只读仓库上执行恢复。`--no-lock` 选项仅用于恢复操作。


### v0.88 版本说明

*文档与小型漏洞修复*

*发布于 2015 年 11 月 22 日*

**漏洞修复：**

- 修复了 `start`/`stop` 命令要求提供 `--config` 选项的问题。（*由 Dmitry Didovicher 报告。*）
- 修复了日志文件被覆盖而非追加写入的问题。（*由 Stephen Frost、Dmitry Didovicher 报告。*）
- 修复了 `backup-user` 不是可选项的问题。

**新功能：**

- 备份仓库目录中不再创建符号链接。这些符号链接可能指向任意位置，存在安全风险。恢复时仍会重新创建符号链接。（*由 Stephen Frost 建议。*）
- 改进了备份过期的消息输出。全量和差异备份的过期信息现在合并为一行记录，并附带所有关联备份的列表。
- 如果归档保留策略未显式配置，则自动设置为与全量备份保留策略一致。

**文档新功能：**

- 在用户指南中新增了 `delta` 恢复、过期策略、专用备份主机、启动和停止 pgBackRest 以及复制相关文档。


### v0.87 版本说明

*网站与用户指南*

*发布于 2015 年 10 月 28 日*

**新功能：**

- `backup_label.old` 和 `recovery.done` 文件现在从备份中排除。

**文档新功能：**

- 新增用户指南，涵盖 pgBackRest 基础知识及部分高级主题（包括 PITR）。内容还会持续扩充，这是一个良好的开端。（*由 David Steele、Stephen Frost 贡献，Michael Renner、Cynthia Shang、Eric Radman、Dmitry Didovicher 审核。*）


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
- 修复了仓库中没有 `stanza` 时 `info` 命令抛出异常的问题。（*由 Stephen Frost 报告。*）
- 修复了 PostgreSQL 的 `pg_stop_backup()` NOTICE 信息被输出到 `stderr` 的问题。（*由 Stephen Frost 报告。*）

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

- 修复了 `info` 命令将最旧和最新备份的格式化时间戳都显示为当前时间的问题。仅 `text` 输出受影响，`json` 输出报告的 `epoch` 值是正确的。（*由 Michael Renner 报告。*）
- 修复了阻止 SSH 错误（尤其是连接时）被记录的协议问题。

**新功能：**

- 仓库现在以统一的目录和文件权限模式创建和更新。默认情况下 `umask` 被设置为 `0000`，可通过 `neutral-umask` 设置禁用。（*由 Cynthia Shang 建议。*）
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

- 在 `File` 对象中新增了文件和目录同步，为备份/恢复和归档操作提供额外的数据安全保障。（*由 Andres Freund 建议。*）
- 新增对 CentOS/RHEL 6 默认版本 Perl 5.10.1 和 OpenSSH 5.3 的支持。（*由 Eric Radman 建议。*）
- 改进了未设置 `archive_command` 且未指定 `--no-archive-check` 时运行备份的错误消息。（*由 Eric Radman 建议。*）


### v0.75 版本说明

*新仓库格式、`info` 命令与实验性 9.5 支持*

*发布于 2015 年 6 月 14 日*

**重要提示**：此次重大版本变更与旧版本 pgBackRest 不兼容。`manifest` 格式、磁盘目录结构以及二进制文件名均已变更。您必须为此版本的 pgBackRest 创建新仓库以存储备份，并暂时保留旧仓库以备恢复之需。`pg_backrest.conf` 配置文件未变更，但需要将 `cron`（或其他位置）中对 `pg_backrest.pl` 的引用改为 `pg_backrest`（去掉 `.pl` 扩展名）。

**新功能：**

- 新增 `info` 命令。
- 日志现在使用非缓冲输出，使多线程并发写入的日志文件更加有序。（*由 Michael Renner 建议。*）
- 对 PostgreSQL 9.5 提供实验性支持。控制版本或 WAL magic 变更时可能发生兼容性问题，但将在每个版本中同步更新。

**改进：**

- 改进了 `backup` 的文件处理顺序，按文件大小降序复制，防止单个线程在末尾处理大文件。此优化此前已在 `restore` 中实现。


### v0.70 版本说明

*归档稳定性改进、日志与帮助优化*

*发布于 2015 年 6 月 1 日*

**漏洞修复：**

- 修复了 `hardlink=n` 时 `archive-copy` 在增量/差异备份中失败的问题。此情况下 `pg_xlog` 路径不存在，必须先创建。（*由 Michael Renner 报告。*）
- 修复了异步归档中 `archive-max-mb` 达到上限时 `archive-push` 未正确返回 0 的问题；同时将异步检查移到传输之后，以避免重复删除停止文件。新增了此情况的单元测试，并改进了错误消息，使用户更清楚地了解出错原因。（*由 Michael Renner 报告。*）
- 修复了一个锁定问题，该问题可能允许对同一 `stanza` 同时执行多个相同类型的操作。此问题在数据完整性方面似乎无害，但在归档时会引起虚假错误，并可能导致备份/恢复出错。（*由 Michael Renner 报告。*）

**新功能：**

- 允许在校验和匹配的情况下归档重复 WAL 段，这对某些恢复场景是必要的。
- 允许在 `pg_backrest.conf` 中使用 `#` 字符进行注释/禁用。仅当 `#` 位于行首时才生效。（*由 Michael Renner 建议。*）
- 改进了 `pg_start_backup()` 之前的日志输出，当备份在等待检查点时输出更为明确。（*由 Michael Renner 建议。*）
- 各命令行为和日志修复。（*由 Michael Renner 审核，Michael Renner 建议。*）

**改进：**

- 将 `JSON` 模块替换为随核心 Perl 一起发布的 `JSON::PP`。

**文档漏洞修复：**

- 各类帮助文档修复。（*由 Michael Renner 审核，Michael Renner 报告。*）


### v0.65 版本说明

*改进的续传与恢复日志、紧凑恢复*

*发布于 2015 年 5 月 11 日*

**漏洞修复：**

- 修复了使用相对路径运行恢复时 `recovery.conf` 中未写入绝对路径的问题。

**新功能：**

- 改进了续传支持。续传的文件会被检查以确保未被修改，`manifest` 保存频率更高，以在备份进行时保留校验和。新增了更多单元测试以验证各续传场景。
- 续传现在是可选的，可通过 `resume` 设置或命令行的 `--no-resume` 禁用。
- 恢复时的 `info` 级别消息更加详尽。此前大部分恢复消息为 `debug` 级别，日志中输出内容有限。
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

- 修复了校验和问题，现在校验和可以在正常备份和续传备份中正常工作。校验和与校验和 `delta` 在功能上应该分离，这简化了许多逻辑。Issue #28 已为校验和 `delta` 创建。
- 修复了可能从类型或前序备份不匹配的中止备份中续传的问题。

**新功能：**

- 新增恢复功能。
- 所有选项现在均可在命令行上设置，`pg_backrest.conf` 成为可选。
- 压缩/解压现在在非线程模式下执行，校验和/大小在流中计算，文件校验和不再是可选项。
- 新增 `--no-start-stop` 选项，允许在 PostgreSQL 关闭时进行备份。如果 `postmaster.pid` 存在，则需要 `--force` 才能运行备份（但如果 PostgreSQL 正在运行，可能会创建不一致的备份）。此选项主要为单元测试目的而添加，但在实际环境中也可能有应用场景。
- 为 `backup.manifest` 添加校验和，以检测损坏或被修改的 `manifest` 文件。
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

- 当归档文件缺失时，`archive-get` 命令现在返回 1，以区别于硬错误（SSH 连接失败、文件复制错误等），让 PostgreSQL 知道归档流已正常终止。但需注意，这并未考虑归档流中可能存在空洞的情况。（*由 Stephen Frost 报告。*）


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

- 移除了数据库 SSH 连接上的 `master_stderr_discard` 选项。此前偶发挂起问题，可能与文件代码中最初发现的问题相关。（*由 Stephen Frost 报告。*）
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
