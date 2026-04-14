---
title: 版本
weight: 40
description: pig —— PostgreSQL 包管理器的发布说明
icon: fa-solid fa-clipboard-list
module: [PIG]
categories: [参考]
---

最新稳定版本是 [v1.3.4](https://github.com/pgsty/pig/releases/tag/v1.3.4)。

|       版本        |     日期     | 摘要                                |                                                     GitHub |
|:---------------:|:----------:|-----------------------------------|-----------------------------------------------------------:|
| [v1.3.4](#v134) | 2026-04-14 | 504 扩展更新与发布产物校验和刷新             | [v1.3.4](https://github.com/pgsty/pig/releases/tag/v1.3.4) |
| [v1.3.3](#v133) | 2026-04-10 | 481 扩展与 Go 1.26.2 更新              | [v1.3.3](https://github.com/pgsty/pig/releases/tag/v1.3.3) |
| [v1.3.2](#v132) | 2026-03-23 | 例行元数据更新，新增 `pg tune` 与构建别名        | [v1.3.2](https://github.com/pgsty/pig/releases/tag/v1.3.2) |
| [v1.3.1](#v131) | 2026-03-05 | PG13 退役，支持窗口统一为 PG14-18，扩展增至 464  | [v1.3.1](https://github.com/pgsty/pig/releases/tag/v1.3.1) |
| [v1.3.0](#v130) | 2026-02-27 | 构建链路强化，扩展增至 461，新内核支持             | [v1.3.0](https://github.com/pgsty/pig/releases/tag/v1.3.0) |
| [v1.2.0](#v120) | 2026-02-23 | 统一别名，例行更新，计划模式，仓库修复               | [v1.2.0](https://github.com/pgsty/pig/releases/tag/v1.2.0) |
| [v1.1.0](#v110) | 2026-02-12 | 451 扩展，Agent-Native CLI 框架        | [v1.1.0](https://github.com/pgsty/pig/releases/tag/v1.1.0) |
| [v1.0.0](#v100) | 2026-01-26 | 444, 新增 pg/pt/pb/pitr 子命令，可用性矩阵   | [v1.0.0](https://github.com/pgsty/pig/releases/tag/v1.0.0) |
| [v0.8.0](#v080) | 2025-12-26 | 440 extensions，移除 sysupdate 仓库    | [v0.8.0](https://github.com/pgsty/pig/releases/tag/v0.8.0) |
| [v0.7.5](#v075) | 2025-12-12 | 常规扩展更新，使用修复后的阿里云镜像                | [v0.7.5](https://github.com/pgsty/pig/releases/tag/v0.7.5) |
| [v0.7.4](#v074) | 2025-12-01 | 更新 ivory/pgtde 内核与 pgdg extras 仓库 | [v0.7.4](https://github.com/pgsty/pig/releases/tag/v0.7.4) |
| [v0.7.3](#v073) | 2025-11-24 | 修复 el10 & debian13 仓库配置           | [v0.7.3](https://github.com/pgsty/pig/releases/tag/v0.7.3) |
| [v0.7.2](#v072) | 2025-11-20 | 437 个扩展，修复 pig build 的一些问题        | [v0.7.2](https://github.com/pgsty/pig/releases/tag/v0.7.2) |
| [v0.7.1](#v071) | 2025-11-10 | 新网站，改进容器内的使用体验                    | [v0.7.1](https://github.com/pgsty/pig/releases/tag/v0.7.1) |
| [v0.7.0](#v070) | 2025-11-05 | 强化 build 能力，大批量包更新                | [v0.7.0](https://github.com/pgsty/pig/releases/tag/v0.7.0) |
| [v0.6.2](#v062) | 2025-10-03 | 正式提供 PG 18 支持                     | [v0.6.2](https://github.com/pgsty/pig/releases/tag/v0.6.2) |
| [v0.6.1](#v061) | 2025-08-14 | CI/CD, el10 存根, PGDG 中国镜像         | [v0.6.1](https://github.com/pgsty/pig/releases/tag/v0.6.1) |
| [v0.6.0](#v060) | 2025-07-17 | 423 个扩展，percona pg_tde，mcp 工具箱    | [v0.6.0](https://github.com/pgsty/pig/releases/tag/v0.6.0) |
| [v0.5.0](#v050) | 2025-06-30 | 422 个扩展，新的扩展目录                    | [v0.5.0](https://github.com/pgsty/pig/releases/tag/v0.5.0) |
| [v0.4.2](#v042) | 2025-05-27 | 421 个扩展，halo 和 oriole deb         | [v0.4.2](https://github.com/pgsty/pig/releases/tag/v0.4.2) |
| [v0.4.1](#v041) | 2025-05-07 | 414 个扩展，pg18 别名支持                 | [v0.4.1](https://github.com/pgsty/pig/releases/tag/v0.4.1) |
| [v0.4.0](#v040) | 2025-05-01 | do 和 pt 子命令，halo 和 orioledb       | [v0.4.0](https://github.com/pgsty/pig/releases/tag/v0.4.0) |
| [v0.3.4](#v034) | 2025-04-05 | 常规更新                              | [v0.3.4](https://github.com/pgsty/pig/releases/tag/v0.3.4) |
| [v0.3.3](#v033) | 2025-03-25 | 别名、仓库、依赖                          | [v0.3.3](https://github.com/pgsty/pig/releases/tag/v0.3.3) |
| [v0.3.2](#v032) | 2025-03-21 | 新扩展                               | [v0.3.2](https://github.com/pgsty/pig/releases/tag/v0.3.2) |
| [v0.3.1](#v031) | 2025-03-19 | 轻微错误修复                            | [v0.3.1](https://github.com/pgsty/pig/releases/tag/v0.3.1) |
| [v0.3.0](#v030) | 2025-02-24 | 新主页和扩展目录                          | [v0.3.0](https://github.com/pgsty/pig/releases/tag/v0.3.0) |
| [v0.2.2](#v022) | 2025-02-22 | 404 个扩展                           | [v0.2.2](https://github.com/pgsty/pig/releases/tag/v0.2.2) |
| [v0.2.0](#v020) | 2025-02-14 | 400 个扩展                           | [v0.2.0](https://github.com/pgsty/pig/releases/tag/v0.2.0) |
| [v0.1.4](#v014) | 2025-02-12 | 常规错误修复                            | [v0.1.4](https://github.com/pgsty/pig/releases/tag/v0.1.4) |
| [v0.1.3](#v013) | 2025-01-23 | 390 个扩展                           | [v0.1.3](https://github.com/pgsty/pig/releases/tag/v0.1.3) |
| [v0.1.2](#v012) | 2025-01-12 | anon 扩展和其他 350 个扩展                | [v0.1.2](https://github.com/pgsty/pig/releases/tag/v0.1.2) |
| [v0.1.1](#v011) | 2025-01-09 | 更新扩展列表                            | [v0.1.1](https://github.com/pgsty/pig/releases/tag/v0.1.1) |
| [v0.1.0](#v010) | 2024-12-29 | repo、ext、sty 和自更新                 | [v0.1.0](https://github.com/pgsty/pig/releases/tag/v0.1.0) |
| [v0.0.1](#v001) | 2024-12-23 | 创世发布                              | [v0.0.1](https://github.com/pgsty/pig/releases/tag/v0.0.1) |
{.full-width}



--------

# v1.3.4

扩展数量更新至 **504** 个。

**校验和**

```bash
dc78def9a1e5eb483ac5df4c87f4ac0ef2018bb12b4bedff650d8ba4d58a05fd  pig-1.3.4-1.aarch64.rpm
998fcbdab1846c94c3155391d2100dad9b0fe338f48212022db38980bb11e696  pig-1.3.4-1.x86_64.rpm
031048c561abbeeeaa73fa3ac919b9fb89479b61c8a759bee5db2efba2e8a1df  pig-v1.3.4.darwin-amd64.tar.gz
e13c939330d32fa91819ce2da88d121fb02a1063240dbf6cc8fa7975960f8fd3  pig-v1.3.4.darwin-arm64.tar.gz
46aa321cf45fc9be635d91b38969b7f3602b7f226f43e5ee0e7614a030945c64  pig-v1.3.4.linux-amd64.tar.gz
f25c4f336edba5c9d2145368082f54e5b1a8b2d4261285b7a1721c088df4caa4  pig-v1.3.4.linux-arm64.tar.gz
563516047e37b25da01da9e25bcbada2c55642d1636b1bdab7d62488f9dcdfbb  pig_1.3.4-1_amd64.deb
81bb482892f7fd4be862d0f377cb37d01c925006c96998d81d94c770ed9652ba  pig_1.3.4-1_arm64.deb
```

发布：https://github.com/pgsty/pig/releases/tag/v1.3.4


--------

# v1.3.3

- 扩展目录刷新，可用扩展总数增加到 **481** 个。
- Go 工具链从 `1.26.0` 升级到 `1.26.2`。

**扩展更新**

| 扩展名              | 旧版本    | 新版本    | 备注            |
|:-----------------|:-------|:-------|:--------------|
| `timescaledb`    | 2.25.2 | 2.26.2 | 正常，PG15-18    |
| `pg_background`  | 1.8    | 1.9.2  | 仅 DEB，PG14-18 |
| `pg_ivm`         | 1.13   | 1.14   | 升级，PG14-18    |
| `system_stats`   | 3.2    | 4.0    | 升级，PG14-18    |
| `nominatim_fdw`  | 1.1.0  | 1.2    | 升级，PG14-18    |
| `pg_textsearch`  | 0.5.0  | 1.0.0  | PG17-18       |
| `pg_clickhouse`  | 0.1.5  | 0.1.10 | 正常，PG14-18    |
| `pg_search`      | 0.22.2 | 0.22.6 | 手工下载，PG15-18  |
| `pg_store_plans` | 1.9    | 1.10   | 升级，PG14-18    |
| `pg_dispatch`    |        | 0.1.5  | 新增，PG14-18    |
| `pg_fsql`        |        | 1.1.0  | 新增，PG14-18    |
| `pg_liquid`      |        | 0.1.7  | 新增，PG14-18    |
| `pg_regresql`    |        | 2.0.0  | 新增，PG14-18    |
| `pg_slug_gen`    |        | 1.0.0  | 新增，PG15-18    |
| `pg_stat_ch`     |        | 0.3.3  | 新增，PG16-18    |
| `pg_variables`   |        | 1.2.5  | 新增，PG14-18    |
| `pgcalendar`     |        | 1.1.0  | 新增，PG14-18    |
| `pgclone`        |        | 2.2.0  | 新增，PG14-18    |
| `pgelog`         |        | 1.0.2  | 新增，PG14-18    |
| `pglock`         |        | 1.0.0  | 新增，PG14-18    |
| `pgproto`        |        | 0.2.1  | 新增，PG14-18    |
| `postgresbson`   |        | 2.0.2  | 新增，PG14-18    |
| `rdf_fdw`        |        | 2.4.0  | 新增，PG14-18    |
| `parray_gin`     |        | 1.4.0  | 新增，PG14-18    |


**校验和**

```bash
e74418061ea975fbc3e8a89b31f274d7dc3617d12b9d681e5c8ef03584392088  pig-1.3.3-1.aarch64.rpm
8450e3e1076425fc8a10f24cc5fd833c3d2d880bab12baff5c10e59a31f62231  pig-1.3.3-1.x86_64.rpm
952a0e94b9020fca5add91f8e9a398fbedfda5d2e5c8736e59ddaa2b7152c826  pig-v1.3.3.darwin-amd64.tar.gz
c896b4fd44b19a250f4c3c47dc78643e10e92fde8cb6531b08cdc78e3623bb8a  pig-v1.3.3.darwin-arm64.tar.gz
d18a92f9aa05d6315c5e9bfde3245afc08fca93d200a8063aa20cb40feb8e85e  pig-v1.3.3.linux-amd64.tar.gz
62d020072360229b47f6c430b014344b912f2d9b58fd528154ae9c4ee805190a  pig-v1.3.3.linux-arm64.tar.gz
7a613a1f1c323ee78276b1733df026b8b0f415e0057b4cb8e509f771bfd3d614  pig_1.3.3-1_amd64.deb
f4c91ce86b787b6ab8cd584949d38c2ca87eb82d5e066bab91b80345252f43d8  pig_1.3.3-1_arm64.deb
```

发布：https://github.com/pgsty/pig/releases/tag/v1.3.3


--------

# v1.3.2

例行维护版本。

- 例行刷新部分扩展版本元数据与扩展目录条目，扩展版本更新。
- 新增 `pig pg tune` 子命令，可根据硬件资源与工作负载画像生成 PostgreSQL 调优参数建议。
- 为 `pig build get` 新增 `pdu` 与 `pgdog` 两个源码包 alias。
- 调整 pgext.cloud 的 URL 至新版本的扩展目录 pigsty.io/ext

**校验和**

```bash
d760f47652ff3e2e4a61eb7b9a68ca68665b2b36c187c52f5eaf50d2f007d8f3  pig-1.3.2-1.aarch64.rpm
c2e02e62497f4c2055a9b448ddb3a24c618fcd488580c28b2b9a0e7cedacef55  pig-1.3.2-1.x86_64.rpm
b8d066ddefa4530946c74c30e7e4acdab6abf8da70a47dcfe2a77719b79e397f  pig-v1.3.2.darwin-amd64.tar.gz
a90e78d879fd720fd2865870c696aed7952558d5ae75591deced3121f2aab1f9  pig-v1.3.2.darwin-arm64.tar.gz
2fe3a9ffbb6383154dfd25ed79420b210828eabf6a96a8af6e8feb9d744b9559  pig-v1.3.2.linux-amd64.tar.gz
522290aaf14f98f0bae83ce75cc76749f2a4e72742eb5c3cba36a1d2fa4d12c2  pig-v1.3.2.linux-arm64.tar.gz
d6c1cf2c52962045f6bbfb2a669058e7f903088526591d6c939e7723f3928d30  pig_1.3.2-1_amd64.deb
4352385c629b26a1837054445a546da89591499848b557699c2fb70fde9377aa  pig_1.3.2-1_arm64.deb
```

发布：https://github.com/pgsty/pig/releases/tag/v1.3.2


--------

# v1.3.1

这是从 `v1.3.0` 到 `v1.3.1` 的一次小型维护版本。

- 由于 PGDG 上游已移除 PG13 归档与分发，pig 同步移除 PG13 安装/构建支持。
- 活跃支持的 PostgreSQL 主版本现在为 **14-18**。
- 扩展目录刷新（`461 -> 464`），新增 `pg_pinyin`、`pg_eviltransform`、`qos`。
- Percona PPG 上游仓库更新到 `18.3`。
- 修复 `pig build` 依赖/构建同步问题，rsync 增加 `--keep-dirlinks` 参数。
- YUM 仓库中 Nginx 从 `infra` 模块拆分为独立模块索引（`nginx`）。

**校验和**

```bash
196e57c7dd46cdedd90ab75965a766f74aabc3bc23ddc8fb757473647bed7b8f  pig-1.3.1-1.aarch64.rpm
e4bdd52ef635524d5aec95f6a5abd76bd49940584ecbb00bd309a4f9186292ac  pig-1.3.1-1.x86_64.rpm
4f3f9479344c158e1c5edc3003471be6b595c01b7d86104bf676b34f8faadce5  pig-v1.3.1.darwin-amd64.tar.gz
05ae2f550ef5062ab5714518a24bbf52f48079ca6d0190359fae5b8f4cb7f20d  pig-v1.3.1.darwin-arm64.tar.gz
940645497e907e56bfd387a478e580ac930aaa72593cc9d04225a08b37880ec4  pig-v1.3.1.linux-amd64.tar.gz
8b2c204fd6c933a1097cd1cd0ce491b02ba5c0025626a331a199684ceca3ab43  pig-v1.3.1.linux-arm64.tar.gz
1cfc23d147795cc4c1ea9596e6978d79ff1ec34c02850fbb224f7c2844548ea5  pig_1.3.1-1_amd64.deb
e495678ae1c762194a56e8c9969fd2109e7a59830f34a4747039fb978f7820cc  pig_1.3.1-1_arm64.deb
```

发布：https://github.com/pgsty/pig/releases/tag/v1.3.1


--------

# v1.3.0

这是从 `v1.2.0` 到 `v1.3.0` 的一次工程强化与目录扩展版本：15 commits、74 files changed、代码行 `+1184 / -236`。

该版本重点围绕 `pig build` 构建链路和 `ext` 目录/别名能力增强，并将可用扩展数量从 **451** 增加到 **461**。

**主要变化**

- 构建源码下载增强（`pig build get`）：
  - 支持从扩展 `Source` 字段解析多源码（空格/换行/Tab 分隔）并去重。
  - 新增 `agensgraph` / `agentsgraph` 源码映射。
  - `pgedge` 构建源码改为同时下载 `postgresql-17.9.tar.gz` 与 `spock-5.0.5.tar.gz`。
- 依赖解析与安装优化（`pig build dep`）：
  - RPM 依赖安装可从 spec 的 `pgmajorversion` 宏推断 PG 主版本，spec 缺失改为显式报错。
  - DEB 依赖解析支持 `Build-Depends` / `Build-Depends-Arch` / `Build-Depends-Indep` 的多行、候选依赖、架构限定与 profile 清理。
  - 支持 `PGVERSION` 占位符自动展开（优先 `--pg`，其次已安装版本与扩展元数据）。
  - 依赖安装失败降级为 warning，批量流程继续执行。
- DEB 构建结果判定修正（`pig build ext/pkg`）：
  - 构建命令退出码成功即判定成功，产物发现改为 best-effort 警告，避免误判失败。
  - 成功但无产物时不再显示空包列表横幅；部分产物场景标记 warning 而非 fail。
  - 构建日志中的源码与版本显示改为读取扩展元数据真实值，避免错误拼接 `name-version`。
- 扩展操作输出语义改进（`pig ext rm/update`）：
  - 别名解析后，`removed/updated` 返回值改为“实际包名”，方便自动化脚本精确比对。
- 扩展目录与别名更新：
  - 新增别名：`agensgraph` / `agens`、`pgedge`、`babelfishpg`。
  - `openhalodb` 对齐 PG14 包命名，`ivorysqldb` 命名对齐。
  - fork 元数据与可用性矩阵批量刷新（含 `timescaledb`、`pgmq`、`orioledb`、`documentdb`、`pg_tde`、`babelfishpg_*` 等条目）。
- 工程与发布：
  - 版本号提升到 `v1.3.0`（包含 `v1.2.1` 过渡提交），版权年份更新到 2026，README 同步更新到 461 扩展与最新 alias 说明。

**兼容性提醒**

- `pig ext rm/update` 结构化输出中的 `removed/updated` 字段由扩展名切换为包名；如果你的自动化逻辑按扩展别名匹配，请同步调整。

**新增扩展（451 -> 461）**

| 扩展名                  | 版本    | 说明                          |
|:---------------------|:------|:----------------------------|
| `aux_mysql`          | 1.5   | openHalo MySQL 兼容辅助模块（PG14） |
| `gb18030_2022`       | 1.0   | IvorySQL 编码转换模块             |
| `ivorysql_ora`       | 1.0   | IvorySQL Oracle 兼容扩展        |
| `ora_btree_gin`      | 1.0   | Oracle 类型 GIN 索引支持          |
| `ora_btree_gist`     | 1.0   | Oracle 类型 GiST 索引支持         |
| `pg_get_functiondef` | 1.0   | 获取函数定义                      |
| `plisql`             | 1.0   | PL/iSQL 过程语言                |
| `snowflake`          | 2.4   | pgEdge Snowflake ID 生成扩展    |
| `spock`              | 5.0.5 | pgEdge 多主逻辑复制扩展             |
| `lolor`              | 1.2.2 | pgEdge 大对象逻辑复制兼容扩展          |

**完整提交列表（`v1.2.0..v1.3.0`）**

- `b8ecf8d` 版本字符串更新到 1.2.1
- `55df9a4` `build/get` 支持多源码解析与 pgedge spock 源码
- `da8e347` 新增 agensgraph 和 pgedge 别名
- `86edbd7` `ext rm/update` 输出显示解析后的包名
- `ef3c905` `build/dep` 改进 rpm/deb 依赖解析
- `7144e09` 刷新 fork 元数据与可用性矩阵条目
- `befffbf` DEB 构建将成功命令视作权威结果
- `33fd517` DEB 成功但无产物时不再显示空包列表横幅
- `3b450f2` 下载源码时避免将扩展名与版本错误拼接
- `33847ab` `ext rm/update` 满足 staticcheck S1011
- `b8b917d` 依赖安装失败降级为 warning
- `8110c00` 调整 `ivorysqldb` / `babelfishpg` 别名
- `fac9faf` 版本提升到 1.3.0
- `1f88f06` 版权年份更新为 2026
- `c804757` `v1.3.0` 发布提交

**校验和**

```bash
196f32419886da095f303b1bcad2729b674abc03d412199e88a39390b2616534  pig-1.3.0-1.aarch64.rpm
a2dcc930dd47a08e85285c1fb7925e1355a1e67d458a265a7ef6d9666bc8e7ec  pig-1.3.0-1.x86_64.rpm
c7ebda6b9839408b12ffe1c8ea561f03e1793aae0732f9bbe2320a0d45160714  pig-v1.3.0.darwin-amd64.tar.gz
b717b485ed0a4a8c11dd8bf918400595b21df5ef43818836ec332f8518674c1a  pig-v1.3.0.darwin-arm64.tar.gz
40e6570c6ba0fe36c97950ff8de585eecb6bc1f862509a04f410a5f08ee90148  pig-v1.3.0.linux-amd64.tar.gz
d61430eeafc8005a22918a9aa60dea5c987916f9834331b5484f761b8235644f  pig-v1.3.0.linux-arm64.tar.gz
62c9a4fadc7dda393d6f28ab83b5f3d741e7d7f7de7abe40a5b89c393288519c  pig_1.3.0-1_amd64.deb
19261ae50e873a05a10a6ad500ab1b429b22e2612325c09f9cd5443dcd34308b  pig_1.3.0-1_arm64.deb
```

发布：https://github.com/pgsty/pig/releases/tag/v1.3.0


--------

# v1.2.0

- 扩展目录与别名解析增强：
  - 引入动态 PG 分类别名解析，按 PG 主版本选择别名映射。
  - 引入 OS 维度别名覆盖（ansible/bootstrap），并在未知发行版回退中收敛为 PGDG-only。
  - 新增 `node/infra`、`babelfish/cloudberry` 等别名并更新扩展元数据，减少包解析歧义。
- 高风险操作计划预览：
  - 新增 `pig install --plan`，支持结构化执行计划输出。
  - 统一 `pig pitr` 与 pgBackRest `repack/expire` 在 `--plan` / `--dry-run` 下的预览语义。
  - 新增 plan flag 一致性测试，确保子命令行为对齐。
- `sty` 原生配置能力：
  - 新增 `pig sty configure` 命令及完整执行流（preflight、参数处理、执行编排）。
  - 统一 `sty conf/configure` 行为，默认走原生实现并保留 `--raw` 回退。
  - 补充 configure 主流程、preflight、路由与安装联动测试，提升可维护性。
- 仓库/构建/可靠性修复：
  - 修复 repo cache 在 `os.Stat` 错误场景中的 nil dereference。
  - 对齐 Ubuntu 与 Debian 仓库 channel 映射，补充 reload 镜像拉取超时控制。
  - 加固 `repo rm` 对 dotted module 名称的安全删除与路径校验。
  - 修复 `sty init` 与 build 相关符号链接保留、跨设备迁移与目标目录处理问题。
  - 改进文本输出与矩阵配色渲染，修复 ext 命令空参数与空目标校验问题。

- 35 Commit，66 文件变更，代码行：`+5006 / -379`

- **PG扩展与内核包更新**

| 包名                  | 旧版本      | 新版本      | 备注                    |
|:--------------------|:---------|:---------|:----------------------|
| `timescaledb`       | 2.25.0   | 2.25.1   |                       |
| `citus`             | 14.0.0-3 | 14.0.0-4 | 使用最新官方版本重新构建          |
| `age`               | 1.7.0    | 1.7.0    | 新增 PG 17 的 1.7.0 版本支持 |
| `pg_background`     | -        | 1.8      | 仅构建 DEB 包，RPM 来自 PGDG |
| `pgmq`              | 1.10.0   | 1.10.1   | 当前没有该扩展包              |
| `pg_search`         | 0.21.6   | 0.21.8   | 直接下载使用                |
| `oriolepg`          | 17.11    | 17.16    | OriolePG 内核更新         |
| `orioledb`          | beta12   | beta14   | 配套 OriolePG 17.16     |
| `cloudberry`        | -        | 2.0.0    | 新增包                   |
| `babelfishpg`       | -        | 5.5.0    | 新增 BabelfishPG 包组     |
| `babelfish`         | -        | 5.5.0    | 新增 Babelfish 兼容包      |
| `antlr4-runtime413` | -        | 4.13     | 新增 Babelfish 依赖运行时    |


**校验和**

```bash
344b77385fa9c3d4fe5e1961340e68716251e38d1cb8308f5af45ce8a03cd206  pig-1.2.0-1.aarch64.rpm
aa9cf1820a9045cc42f0d66689d5e8679cb71452042f3f01ddd4c3a518a2b757  pig-1.2.0-1.x86_64.rpm
f26e4d9e9fa76c39f7c591c18a09287ca3388e016d121c196302ee9eafb5b678  pig-v1.2.0.darwin-amd64.tar.gz
2ca41efc3495822305f6e6a3ae1825d57cc97e764f280581f833c72e6e5019a2  pig-v1.2.0.darwin-arm64.tar.gz
f7aa291b3534d92d0459b6e8301190e39c63db14a45a6c097d4c5d3062c35181  pig-v1.2.0.linux-amd64.tar.gz
38007ecd6d7a69bae0e3d8f7c78f1a4c8bbaead320b7ac319b0d94d6b53853f0  pig-v1.2.0.linux-arm64.tar.gz
e824716ddfbf3805dc0a1fd6d97917241b7780503657e9fd40a37beb6b398d7a  pig_1.2.0-1_amd64.deb
b67baa404d877b37004331041cb270c85b8f9a3f8a92a5083390a54d76553d2a  pig_1.2.0-1_arm64.deb
```

发布：https://github.com/pgsty/pig/releases/tag/v1.2.0


--------

## v1.1.0

该版本是从 `v1.0.0` 到 `v1.1.0` 的一次规划中架构级升级（79 commits，193 files 变更），
核心目标是把 pig 从“人类可用 CLI”推进到“Agent-native 可编排 CLI”。

新增七个扩展，总可用扩展数量达到 451 个。

**新功能**

- Agent-native 统一输出框架落地：引入全局 `--output`（`text/yaml/json/json-pretty`），为 `ext/repo/pg/pt/pb/pitr/status/version/context` 等命令提供统一 `Result` 结构、稳定状态码与可机器解析输出。
- 引入 ANCS（Agent Native Command Schema）元数据体系：为命令补齐 `type/volatility/parallel/risk/confirm/os_user/cost` 等语义字段，`help` 在结构化模式下可直接输出命令能力树，便于 Agent 自动发现能力与风险边界。
- 新增 `pig context`（`pig ctx`）环境快照命令：一次调用聚合主机、PostgreSQL、Patroni、pgBackRest、扩展信息，专门面向 Agent 工作流做上下文注入。
- Plan 能力从 PITR 扩展到更多高风险动作：新增 `pig ext add/rm --plan`、`pig pg stop/restart --plan`、`pig pt switchover/failover --plan`，并与 `pig pitr --plan/--dry-run` 统一为可审阅执行计划（动作、影响面、风险、预期结果）。
- 结构化结果覆盖进一步完善：`pgbackrest info` 可嵌入原生 JSON 信息，Patroni/PostgreSQL/PITR/Repo/Ext 子系统的结构化返回与辅助 DTO 统一，兼容自动化消费。
- 兼容层增强：对 `pg_exporter/pg_probe/do/sty` 等存量命令引入 legacy structured wrapper，在保留旧交互行为的同时提供结构化执行结果与输出捕获。
- Pigsty 版本更新至 v4.1.0

**扩展更新**

| 扩展                 | 旧版本          | 新版本           |
|:-------------------|:-------------|:--------------|
| timescaledb        | 2.24.0       | 2.25.0        |
| citus              | 14.0.0-2     | 14.0.0-3      |
| pg_incremental     | 1.2.0        | 1.4.1         |
| pg_bigm            | 1.2-20240606 | 1.2-20250903  |
| pg_net             | 0.20.0       | 0.20.2        |
| pgmq               | 1.9.0        | 1.10.0        |
| pg_textsearch      | 0.4.0        | 0.5.0         |
| pljs               | 1.0.4        | 1.0.5         |
| sslutils           | 1.4-1        | 1.4-2         |
| table_version      | 1.11.0       | 1.11.1        |
| supautils          | 3.0.2        | 3.1.0         |
| pg_math            | 1.0          | 1.1.0         |
| pgsentinel         | 1.3.1        | 1.4.0         |
| pg_uri             | 1.20151224   | 1.20251029    |
| pgcollection       | 1.1.0        | 1.1.1         |
| pg_readonly        | 1.0.3        | 1.0.4         |
| timestamp9         | 1.4.0-1      | 1.4.0-2       |
| pg_uint128         | 1.1.1        | 1.2.0         |
| pg_roaringbitmap   | 0.5.5        | 1.1.0         |
| plprql             | 18.0.0       | 18.0.1        |
| pglinter           | 1.0.1        | 1.1.0         |
| pg_jsonschema      | 0.3.3        | 0.3.4         |
| pg_anon            | 2.5.1        | 3.0.1         |
| vchord             | 1.0.0        | 1.1.0         |
| pg_search          | 0.21.4       | 0.21.6/0.21.7 |
| pg_graphql         | 1.5.12-1     | 1.5.12-2      |
| pg_summarize       | 0.0.1-2      | 0.0.1-3       |
| nominatim_fdw      | -            | 1.1.0         |
| pg_utl_smtp        | -            | 1.0.0         |
| pg_strict          | -            | 1.0.2         |
| pg_track_optimizer | -            | 0.9.1         |
| pgmb               | -            | 1.0.0         |

**Bug 修复**

- 安全修复：修复 `pig build proxy` 在异常地址输入下的解析 panic 问题。
- 安全修复：修复 `pig pg log` 文件名路径穿越风险，阻止通过 `../../` 访问日志目录外文件。
- 安全加固：加强 installer/repo 路径处理与引号处理，降低路径注入与异常路径误用风险。
- 构建链路可靠性修复：`pig build get/pkg/ext` 在下载或构建失败时正确传递错误并返回非零退出码；修复 DEB 构建中 `pg_ver` 不匹配导致的误报失败。
- 仓库与目录刷新修复：`ext/repo reload` 支持静默镜像回退；`repo add/set/rm` 在缓存更新失败时正确返回错误状态。
- 扩展管理修复：`ext update` 调整为显式目标更新并修复状态漂移问题；`ext import` 将请求的 DEB 资源下载到指定 repo 目录。
- 输出与可观察性修复：修复结构化输出 exit code 与文本渲染一致性问题；修复 `pg status` 权限处理与解析稳定性问题。

**校验和**

```bash
95245dc035270df2b02cdd5d19afac57ccf4949a61b07b1b806fffde3a3b780e  pig-1.1.0-1.aarch64.rpm
8b1a26f1b5dd002841a0b31904eea8ce94d1e6c4acde4704a78d9e121e1656f4  pig-1.1.0-1.x86_64.rpm
dbd079510513f1cd0521b0871cc6fe3eed8f7fa26f66c04c682568c43e24c456  pig-v1.1.0.darwin-amd64.tar.gz
3f3ba081b54569a7de4d9a8fce72c02c84d9e1cbeb53173567f970c7291af251  pig-v1.1.0.darwin-arm64.tar.gz
ad61384bf01cbb8346ce869da0bc893203ad316c516fb9420cb748f1519a005e  pig-v1.1.0.linux-amd64.tar.gz
7713632beea1e6ca5c3e2e7172c4adee13a2b1b256755f6c2898b6ca98ee1e00  pig-v1.1.0.linux-arm64.tar.gz
70cfc41b7b0aad48f29e12c22c34afd55b938bf50868ac8ab067b9cb62ccb867  pig_1.1.0-1_amd64.deb
fc5cf16671254f8f3495ff7e80c9d77d06b2328c1a247f90f96cf1e918e0ad0e  pig_1.1.0-1_arm64.deb
```

发布：https://github.com/pgsty/pig/releases/tag/v1.1.0


--------

## v1.0.0

本版本引入三组主要的新子命令（`pig pg`、`pig pt`、`pig pb`），用于管理 PostgreSQL、Patroni 和 pgBackRest，同时新增编排式 PITR 命令，并增强扩展可用性显示。

**新增命令**

- `pig pg` - PostgreSQL 实例管理
  - `pg init/start/stop/restart/reload/status` - 控制与管理 PostgreSQL 实例
  - `pg role/promote` - 检测和切换实例角色（主库/从库）
  - `pg psql/ps/kill` - 连接与会话管理
  - `pg vacuum/analyze/freeze/repack` - 数据库维护操作
  - `pg log` - 日志查看（list/tail/cat/less）

- `pig pt` - Patroni 集群管理
  - `pt list/config` - 查看集群状态与配置
  - `pt restart/reload/reinit` - 管理集群成员
  - `pt switchover/failover` - 集群切换操作
  - `pt pause/resume` - 控制自动故障切换
  - `pt start/stop/status/log` - Patroni 服务管理

- `pig pb` - pgBackRest 备份管理
  - `pb info/ls` - 查看备份信息
  - `pb backup/restore/expire` - 备份操作
  - `pb create/upgrade/delete` - Stanza 管理
  - `pb check/start/stop/log` - 控制操作

- `pig pitr` - 编排式时间点恢复
  - 自动协调 Patroni/PostgreSQL
  - 多种恢复目标：时间、LSN、XID、还原点
  - 支持 dry-run 模式与恢复后指引

**新功能**

- 为 `pig ext avail` 和 `pig ext ls` 添加可用性矩阵

**改进**

- 统一 pg/pt/pb 命令别名风格
- 规范化错误消息格式
- 代码重构与清理

**Bug 修复**

- 修复 UTIL 扩展分类缺失问题

**校验和**

```bash
306637079e942bcac9ccbc089cd09a80051898f8db1630269bb1acd3fbdaa872  pig-1.0.0-1.aarch64.rpm
d2b9440410f00efbca174d63b507c39d97fc55f402d8e9290ee054c1b1c6414c  pig-1.0.0-1.x86_64.rpm
c8a169e48a8168ee03db508ca2edc22b56ecf6997bae924e9023796ab7ae4e62  pig-v1.0.0.darwin-amd64.tar.gz
c0996037bfeffeae241b545e69d46c06e7fec2d7d456885229f3af9a7f9ea2f8  pig-v1.0.0.darwin-arm64.tar.gz
13837c6f2379edf965888bad9e373e69f70cb72e8428bca18c2c804e2bd879f6  pig-v1.0.0.linux-amd64.tar.gz
08207dfedd6f72745631596a3d3293de65cc12e1544956a643d1da2165d2c876  pig-v1.0.0.linux-arm64.tar.gz
a543882aa905713a0c50088d4e848951b6957a37a1594d7e9f3fe46453d5ce66  pig_1.0.0-1_amd64.deb
4cd6ec54261b09025c12e9c56bcc0cd3c11779ea0e8becdbd4f901cf2e7c8995  pig_1.0.0-1_arm64.deb
```

发布：https://github.com/pgsty/pig/releases/tag/v1.0.0


--------

## v0.8.0

**扩展更新**
- 扩展总数达到 440 个
- 新增扩展：[pg_ai_query](https://github.com/benodiwal/pg_ai_query) 0.1.1
- 新增扩展：[pg_textsearch](https://github.com/timescale/pg_textsearch) 0.1.0
- 新增扩展：[pg_clickhouse](https://github.com/clickhouse/pg_clickhouse/) 0.1.0
- pg_biscuit 从 1.0 升级至 2.0.1（切换至新仓库，更名为 biscuit）
- pg_search 从 0.20.3 升级至 0.20.5
- pg_duckdb 升级至官方正式版 1.1.1
- vchord_bm25 从 0.2.2 升级至 0.3.0
- pg_semver 从 0.40.0 升级至 0.41.0
- pg_timeseries 从 0.1.7 升级至 0.1.8
- 修复 debian/ubuntu pg18 扩展问题：supautils、pg_summarize、pg_vectorize、pg_tiktoken、pg_tzf、pglite_fusion、pgsmcrypto、pgx_ulid、plprql
- pigsty 版本号同步至 4.0.0

**仓库更新**
- 因上游变更移除 pgdg yum sysupdate 仓库
- 因上游变更移除 pgdg yum llvmjit 软件包
- 修复 el9.aarch64 上 patroni 3.0.4 重复软件包问题
- 为 el 仓库定义添加优先级，docker 仓库不可用时自动跳过
- 添加 epel 10 / pgdg 9/10 操作系统小版本热修复

**校验和**

```bash
e457832fb290e2f9975bf719966dc36e650bdcbf8505d319c9e0431f4c03bc9e  pig-0.8.0-1.aarch64.rpm
c97b1bfdd7541f0f464cab0ecc273e65535c8dd2603c38d5cf8dccbf7e95b523  pig-0.8.0-1.x86_64.rpm
d892f06d3d3b440671529f40e6cc7949686e0167e2a4758adc666b8a3d75254d  pig-v0.8.0.darwin-amd64.tar.gz
222413bafdf5a62dc682dac32ea1118cbc34ec3544e2a1b85076ec450b9cc7ae  pig-v0.8.0.darwin-arm64.tar.gz
d50aa9806bbab8fee5ad9228e104fc9e7ead48729228116b5bf889000791fedc  pig-v0.8.0.linux-amd64.tar.gz
d2f410f7b243a8323c8d479f462a0267ac72d217aa4a506c80b5a9927d12dff8  pig-v0.8.0.linux-arm64.tar.gz
4ccd330a995911d4f732e8c9d62aa0db479c21c9596f64c4bc129ec43f156abe  pig_0.8.0-1_amd64.deb
5cb9eccce659110f3ba58e502575564bd6befffd51992a43d84df5a17f8eb8a0  pig_0.8.0-1_arm64.deb
```

发布：https://github.com/pgsty/pig/releases/tag/v0.8.0


--------

## v0.7.5

**扩展更新**

- timescaledb 2.23.1 -> 2.24.0
- pg_search 0.20.0 -> 0.20.3
- convert 0.0.4 -> 0.0.5
- pglinter 1.0.0 -> 1.0.1
- pgdd 0.6.0 -> 0.6.1
- pg_session_jwt 0.3.3 -> 0.4.0
- pg_anon 2.4.1 -> 2.5.1
- pg_enigma 0.4.0 -> 0.5.0
- wrappers 0.5.6 -> 0.5.7
- pg_vectorize 0.25.0 -> 0.26.0

**仓库更新**

使用修复后的阿里云 PGDG 镜像仓库

**校验和**

```bash
9de11ac1404fc4100074113f2a5d50e4ec42c353b6e122a0b29edc17e53feca6  pig-0.7.5-1.aarch64.rpm
071d655580f1cc63b33d41a8fb49368556b7b5a276318f4bd772a6ab50e22b34  pig-0.7.5-1.x86_64.rpm
befe0a8f786e5243669ed7219acde8156d13d9adb0a5c2fb88ccf0f614a51f9b  pig-v0.7.5.darwin-amd64.tar.gz
4766b4e9ba390a32a7115e9f2dd6b65cf158439e28f9c099bab5c7f2e588bae2  pig-v0.7.5.darwin-arm64.tar.gz
dc45726c5e7fccd502cacaffc94c659570844151cdc279f2cac6500836071ade  pig-v0.7.5.linux-amd64.tar.gz
1483cf967d4bc9c12d4c6724567644d6b88fcd2a93aaf1d317fc6ad4e1672c13  pig-v0.7.5.linux-arm64.tar.gz
0152b7bd254eccadd640e563845abd9fa62efa68f11c6b67a5f9f0eebfa2d92e  pig_0.7.5-1_amd64.deb
7d22116d26ca09c5e2b8afbf086bb1acb1aea1148905efcc38944c18908fb105  pig_0.7.5-1_arm64.deb
```

发布：https://github.com/pgsty/pig/releases/tag/v0.7.5


--------

## v0.7.4

- 更新扩展版本与元数据：`pg_search`，`pgmq`，`pg_stat_monitor`
- 更新 PGDG 仓库 URL 变化，`extras` 仓库现在位于 yum 仓库顶层
- 将 ivorysql 更新至 5.0 版本，与 PG 18 兼容
- 将 Percona Postgres TDE 内核更新至 18.1

**Checksums**

```bash
5769b0051f04dcda22dd92b30b8effc8ddfa40097308bded76ce2b38d012ce57  pig-0.7.4-1.aarch64.rpm
d15c829fa2e3ce8dcd1adc063c107607b8e70f2cf747646aaa2fa257cdbf979c  pig-0.7.4-1.x86_64.rpm
bb4c90e253a3d470e50316e633a41e90ed2d4a5c5a1fd3a8dbb68ee87d831d47  pig-v0.7.4.darwin-amd64.tar.gz
faaf7ac7b08390f5048c081bb7a78100714387e35dc890e26d9746fc1caef415  pig-v0.7.4.darwin-arm64.tar.gz
037cacddd0dc1283f13dd2c9bace87ad7f2c74ffc245e629f1420be94bbf93df  pig-v0.7.4.linux-amd64.tar.gz
2ce819b2c3686cfb9f86790fdf61acd30bf7798bd6cd3c4f589df22e273dc867  pig-v0.7.4.linux-arm64.tar.gz
97f62d62f1cca61ce6d335efed88e3855d94ea2cd4ed941f2755fbac73931fcd  pig_0.7.4-1_amd64.deb
d2b80af89ed42601716f6b41eda3f8bee16db34023527df9deef8a43aa25a498  pig_0.7.4-1_arm64.deb
```

发布：https://github.com/pgsty/pig/releases/tag/v0.7.4




--------

## v0.7.3

- 新增 pig repo reload 命令，更新仓库元数据
- 修复 EL PGDG sysupdate aarch64 仓库问题。
- 修复 EL10.aarch64 PGDG 仓库重命名问题。
- 订正了若干扩展版本
- 更新 Pigsty 版本至 3.7.0

**校验和**

```bash
786d72f6b685d6d6abf5f255f0a7de9204988a05630a26a53bfc7631823c0c6f  pig-0.7.3-1.aarch64.rpm
da59e24ef79d1164e348bacc43e3222e8e2778ec0e103e7ffc0c6df064758e8f  pig-0.7.3-1.x86_64.rpm
73062a979749095e89abc07dd583d34d4f57908bb4ee935cf7640f129ca6a2cb  pig-v0.7.3.darwin-amd64.tar.gz
ca5f5576f6d0d9be1d10cad769821be9daa62220b2fb56b94d6e4c0cede6da61  pig-v0.7.3.darwin-arm64.tar.gz
d193b4b87cf9a6e4775b1b07709802d30f0233ccb1b728843a09decb545168d3  pig-v0.7.3.linux-amd64.tar.gz
e7f612df0e8e4d9fac6df3765862b9e491bb50aad651856abf7a6935986e6f99  pig-v0.7.3.linux-arm64.tar.gz
3d5306ce95dcf704dd498b05325d942637564b13115f1e5a5bb9ef6781df1ba6  pig_0.7.3-1_amd64.deb
32e695ba2d49a741d8cd92008f8f2dec29f10754d35b732035f48517b382c30d  pig_0.7.3-1_arm64.deb
```

发布：https://github.com/pgsty/pig/releases/tag/v0.7.3

--------

## v0.7.2

- 批量更新扩展，数量达到 437 个
- 新增 PGDG EL10 Sysupdate 仓库
- 新增 LLVM APT 仓库
- 在 pig build 命令中使用可选的本地 extension.csv 扩展定义问题。

- 更新的扩展： vchord pg_later pgvectorscale pglite_fusion pgx_ulid pg_search citus timescaledb pg_profile pg_stat_monitor documentdb
- 新增的扩展：pglinter pg_typeid pg_enigma pg_retry pg_biscuit pg_weighted_statistics

**校验和**

```bash
f303c391fc28bc74832712e0aa58319abe0ebcae4f6c07fdf9a9e542b735d2ec  pig-0.7.2-1.aarch64.rpm
c096a61a4e3a49b1238659664bbe2cd7f29954c43fb6bb8e8e9fb271f95a612e  pig-0.7.2-1.x86_64.rpm
5e037c891dff23b46856485108d6f64bede5216dfbd4f38a481f0d0672ee910b  pig-v0.7.2.darwin-amd64.tar.gz
736b4b47999c543c3c886781f4d8dddbf4276f363c35c7bf50094b6f18d14600  pig-v0.7.2.darwin-arm64.tar.gz
20b13f059efed29dd76f6927b3e8d7b597c0c8d734f9e22ba3d0a2af6dbcd3bf  pig-v0.7.2.linux-amd64.tar.gz
9548b530c05f2ffdc8d73b8f890718d47b74a51eb62852a99c08b1b52e47f014  pig-v0.7.2.linux-arm64.tar.gz
b6faad9f92b926546a10f590274f2cb2afff21b9cea878094cfc5caf09e67d2c  pig_0.7.2-1_amd64.deb
452f73f1fa035e5417ab49fc51d797925550179ffcc023e8f03d80144309212a  pig_0.7.2-1_arm64.deb
```

发布：https://github.com/pgsty/pig/releases/tag/v0.7.2


--------

## v0.7.1

- 全新的网站： /ext/
- 修复了不必要的 sudo 使用问题，现在可以方便的在容器中使用
- 允许 pig ext link 命令使用形如 pg17 pg18 的参数形式
- 新增环境变量 `PIG_NO_SUDO`，强制不使用 sudo 执行命令
- [RPM 变更日志](/docs/repo/pgsql/rpm#2025-11-10)：为几乎所有扩展新增 PG 18 支持
- [DEB 变更日志](/docs/repo/pgsql/deb#2025-11-10)：为几乎所有扩展新增 PG 18 支持
- [Infra 变更日志](/docs/repo/infra/log/)：例行更新至最新版本

**校验和**

```bash
a696c9ec784e2fc248e5f3d87cc8aae4116e890f78c5997957d30593f2c85ca6  pig-0.7.1-1.aarch64.rpm
f669538a99cd1dc592d3005b949628fcceb9e78114fc78862d7726b340ee194d  pig-0.7.1-1.x86_64.rpm
e42bdaaf93b720c5b76b32b57362320e4b447109740c76089aefe030b7c8b836  pig-v0.7.1.darwin-amd64.tar.gz
b4c240aadad34e785666ee0a755d9b7455724f790c2d088a1dd7c37ad3b2a457  pig-v0.7.1.darwin-arm64.tar.gz
ffc687add0ca71ac90cba5749c8a7a6075cf7618cba85584072831cf3eb182f7  pig-v0.7.1.linux-amd64.tar.gz
7b0d1f158150d0a40c525692f02b6bce9f5b4ac523a4e59278d702c334e222e1  pig-v0.7.1.linux-arm64.tar.gz
43e91a3bea273d7cacb2d7a58c0a5745501dbd06348b5cb3af971171fae70268  pig_0.7.1-1_amd64.deb
fc2a34aeb46e07cb0ae93611de47d6622c3bd46fe4c415ce4c9091840e0e08a2  pig_0.7.1-1_arm64.deb
```

发布：https://github.com/pgsty/pig/releases/tag/v0.7.1

--------

## v0.7.0

- 提供针对 Debian 13 和 EL 10 发行版的支持
- 大批量扩展更新至最新版本，带有 PostgreSQL 18 支持。
- 几乎所有 Rust 扩展现已通过 pgrx 0.16.1 支持 PG 18
- `pig build` 命令彻底重做
  - `pig build pkg <pkg>` 现在会一条龙完成扩展的下载，依赖安装，构建
  - `pig build pgrx` 命令现在从 `pig build rust` 中分离
  - `pig build pgrx [-v pgrx_version]` 现在可以直接使用现有的 PG 安装
  - `pig build dep` 现在会处理 EL 和 Debian 系统下的扩展依赖
  - `pig build ext` 命令现在有了更为紧凑和美观的输出，可在 EL 下不依赖 build 脚本直接构建 RPM
  - `pig build spec` 现在支持直接从Pigsty仓库下载 spec 文件包
  - `pig build repo` / `pig repo add` / `pig repo set` 现在默认使用 `node,pgsql,infra` 仓库模块，取代原本的 `node,pgdg,pigsty`
- 大量优化了错误日志记录。
- 基于 hugo 与 hextra 全新目录网站

**校验和**

```bash
ad60f9abcde954769e46eb23de61965e  pig_0.7.0-1_amd64.deb
aa15d7088d561528e38b2778fe8f7cf9  pig_0.7.0-1_arm64.deb
05549fe01008e04f8d5a59d4f2a5f0b8  pig-0.7.0-1.aarch64.rpm
0cc9e46c7c72d43c127a6ad115873b67  pig-0.7.0-1.x86_64.rpm
ddacfb052f3f3e5567a02e92fdb31cdd  pig-v0.7.0.darwin-amd64.tar.gz
17d25b565308d3d35513e4b0d824946b  pig-v0.7.0.darwin-arm64.tar.gz
ee7e055ceff638039956765fb747f80b  pig-v0.7.0.linux-amd64.tar.gz
284e674807b87447d4b33691fd7a420d  pig-v0.7.0.linux-arm64.tar.gz
```

发布：https://github.com/pgsty/pig/releases/tag/v0.7.0


--------

## v0.6.2

- 使用 PG 18 官方正式仓库取代原本的 Testing Beta 仓库 instead of testing repo
- 在接收 Pigsty 版本字符串的时候，自动添加 `v` 前缀
- 改进了网络检查与下载的逻辑

**校验和**

```bash
01f5b7dc20644226c762dbb229768347  pig_0.6.2-1_amd64.deb
ce4f00256adc12cbea91467b7f2241cd  pig_0.6.2-1_arm64.deb
cefc36ae8f348aede533b30836fba720  pig-0.6.2-1.aarch64.rpm
d04a287c6eb92b11ecbf99542c2db602  pig-0.6.2-1.x86_64.rpm
e637ca86a7f38866c67686b060223d9a  pig-v0.6.2.darwin-amd64.tar.gz
79749bc69c683586bd8d761bdf6af98e  pig-v0.6.2.darwin-arm64.tar.gz
ad4f02993c7d7d8eec142f0224551bb4  pig-v0.6.2.linux-amd64.tar.gz
9793affa4a0cb60e9753e65b7cba3dca  pig-v0.6.2.linux-arm64.tar.gz
```

发布：https://github.com/pgsty/pig/releases/tag/v0.6.2


--------

## v0.6.1

- 新增 el10 与 debian 13 trixie 的支持存根
- 专门的新文档网站： /ext/pig/
- 使用 go 1.25 重新构建，新增 CI/CD 管道
- 在中国大陆使用 PIGSTY PGDG 镜像
- 移除空的 `pgdg-el10fix` 仓库
- 使用 Pigsty Babelfish 镜像
- 修复 EL 10 专用的 EPEL 仓库
- pig version 输出构建环境信息

发布：https://github.com/pgsty/pig/releases/tag/v0.6.1


--------

## v0.6.0

- 新扩展目录：[https://ext.pgsty.com](https://ext.pgsty.com)
- 新子命令：`pig install` 简化 `pig ext install`
- 添加新内核支持：带 pg_tde 的 percona
- 添加新包：Google GenAI MCP 数据库工具箱
- 添加新仓库：percona 仓库和 clickhouse 仓库
- 将扩展摘要信息链接更改为 https://ext.pgsty.com
- 修复 orioledb 在 Debian/Ubuntu 系统上的问题
- 修复 EL 发行版上的 epel 仓库
- 将 golang 升级到 1.24.5
- 将 pigsty 升级到 v3.6.0

**校验和**

```bash
1804766d235b9267701a08f95903bc3b  pig_0.6.0-1_amd64.deb
35f4efa35c1eaecdd12aa680d29eadcb  pig_0.6.0-1_arm64.deb
b523b54d9f2d7dcc5999bcc6bd046b1d  pig-0.6.0-1.aarch64.rpm
9434d9dca7fd9725ea574c5fae1a7f52  pig-0.6.0-1.x86_64.rpm
f635c12d9ad46a779aa7174552977d11  pig-v0.6.0.linux-amd64.tar.gz
165af4e63ec0031d303fe8b6c35c5732  pig-v0.6.0.linux-arm64.tar.gz
```

发布：https://github.com/pgsty/pig/releases/tag/v0.6.0


--------

## v0.5.0

- 将扩展列表更新至 422 个
- 新扩展：来自 AWS 的 [pgactive](https://github.com/aws/pgactive)
- 将 timescaledb 升级到 2.20.3
- 将 citus 升级到 13.1.0
- 将 vchord 升级到 0.4.3
- 修复错误：pgvectorscale debian/ubuntu pg17 失败
- 将 kubernetes 仓库升级到 1.33
- 将默认 pigsty 版本升级到 3.5.0

**校验和**

```
9ec6f3caf3edbe867caab5de0e0ccb33  pig_0.5.0-1_amd64.deb
4fbb0a42cd8a88bce50b3c9d85745d77  pig_0.5.0-1_arm64.deb
9cf8208396b068cab438f72c90d39efe  pig-0.5.0-1.aarch64.rpm
d9a8d78c30f45e098b29c3d16471aa8d  pig-0.5.0-1.x86_64.rpm
761df804ff7b83965c41492700717674  pig-v0.5.0.linux-amd64.tar.gz
5d1830069d98030728f08835f883ea39  pig-v0.5.0.linux-arm64.tar.gz
```

发布：https://github.com/pgsty/pig/releases/tag/v0.5.0



--------

## v0.4.2

- 将扩展列表更新至 421 个
- 为 Debian / Ubuntu 添加 openhalo/orioledb 支持
- pgdd [0.6.0](https://github.com/rustprooflabs/pgdd) (pgrx 0.14.1)
- convert [0.0.4](https://github.com/rustprooflabs/convert) (pgrx 0.14.1)
- pg_idkit [0.3.0](https://github.com/VADOSWARE/pg_idkit) (pgrx 0.14.1)
- pg_tokenizer.rs [0.1.0](https://github.com/tensorchord/pg_tokenizer.rs) (pgrx 0.13.1)
- pg_render [0.1.2](https://github.com/mkaski/pg_render) (pgrx 0.12.8)
- pgx_ulid [0.2.0](https://github.com/pksunkara/pgx_ulid) (pgrx 0.12.7)
- pg_ivm [1.11.0](https://github.com/sraoss/pg_ivm) 适用于 debian/ubuntu
- orioledb [1.4.0 beta11](https://github.com/orioledb/orioledb)
- 重新添加 el7 仓库

**校验和**

```bash
bbf83fa3e3ec9a4dca82eeed921ae90a  pig_0.4.2-1_amd64.deb
e45753335faf80a70d4f2ef1d3100d72  pig_0.4.2-1_arm64.deb
966d60bbc2025ba9cc53393011605f9f  pig-0.4.2-1.aarch64.rpm
1f31f54da144f10039fa026b7b6e75ad  pig-0.4.2-1.x86_64.rpm
1eec26c4e69b40921e209bcaa4fe257a  pig-v0.4.2.linux-amd64.tar.gz
768d43441917a3625c462ce9f2b9d4ef  pig-v0.4.2.linux-arm64.tar.gz
```

发布：https://github.com/pgsty/pig/releases/tag/v0.4.2

------

## v0.4.1

- 将扩展列表更新至 414 个
- 在 `pig ext scan` 映射中添加 `citus_wal2json` 和 `citus_pgoutput`
- 添加 PG 18 beta 仓库
- 添加 PG 18 包别名

发布：https://github.com/pgsty/pig/releases/tag/v0.4.1

------

## v0.4.0

- 更新扩展列表，可用扩展达到 **407** 个
- 添加 `pig do` 子命令用于执行 Pigsty playbook 任务
- 添加 `pig pt` 子命令用于包装 Patroni 命令行工具
- 添加扩展别名：`openhalo` 和 `orioledb`
- 添加 `gitlab-ce` / `gitlab-ee` 仓库区分
- 使用最新 Go 1.24.2 构建并升级依赖项版本
- 修复特定条件下 `pig ext status` 的 panic 问题
- 修复 `pig ext scan` 无法匹配多个扩展的问题

发布：https://github.com/pgsty/pig/releases/tag/v0.4.0

------

## v0.3.4

```bash
curl https://repo.pigsty.io/pig | bash -s 0.3.4
```

- 常规扩展元数据更新
- 使用阿里云 epel 镜像代替损坏的清华大学 tuna 镜像
- 升级 pigsty 版本字符串
- 在仓库列表中添加 `gitlab` 仓库

发布：https://github.com/pgsty/pig/releases/tag/v0.3.4

------

## v0.3.3

- 添加 `pig build dep` 命令安装扩展构建依赖项
- 更新默认仓库列表
- 为 `mssql` 模块（babelfish）使用 pigsty.io 镜像
- 将 docker 模块合并到 `infra`
- 从 el7 目标中移除 pg16/17
- 允许在 el7 中安装扩展
- 更新包别名

发布：https://github.com/pgsty/pig/releases/tag/v0.3.3


------

## v0.3.2

**增强功能**

- 新扩展
- 使用 `upx` 减少二进制大小
- 移除嵌入的 pigsty 以减少二进制大小

发布：https://github.com/pgsty/pig/releases/tag/v0.3.2

------

## v0.3.1

常规错误修复

- 修复仓库格式字符串
- 修复扩展信息链接
- 更新 pg_mooncake 元数据

发布：https://github.com/pgsty/pig/releases/tag/v0.3.1

------

## v0.3.0

[`pig`](/docs/pig/) 项目现在有了新的 [主页](/ext/pig/)，以及 PostgreSQL 扩展 [目录](/ext/list/)。

发布：https://github.com/pgsty/pig/releases/tag/v0.3.0

------

## v0.2.2

Pig v0.2.2 中提供 [**404**](/docs/pgsql/ext) 个扩展

发布：https://github.com/pgsty/pig/releases/tag/v0.2.2

------

## v0.2.0

发布：https://github.com/pgsty/pig/releases/tag/v0.2.0

------

## v0.1.4

发布：https://github.com/pgsty/pig/releases/tag/v0.1.4

------

## v0.1.3

v0.1.3，常规更新，现在可用 390 个扩展！

发布：https://github.com/pgsty/pig/releases/tag/v0.1.3

------

## v0.1.2

[**351**](/ext/list/) 个 PostgreSQL 扩展，包括强大的 [postgresql-anonymizer 2.0](https://postgresql-anonymizer.readthedocs.io/en/stable/)

发布：https://github.com/pgsty/pig/releases/tag/v0.1.2

------

## v0.1.1

更新扩展列表。

发布：https://github.com/pgsty/pig/releases/tag/v0.1.1

------

## v0.1.0

pig CLI v0.1 发布

发布：https://github.com/pgsty/pig/releases/tag/v0.1.0

------

## v0.0.1

创世发布

发布：https://github.com/pgsty/pig/releases/tag/v0.0.1
