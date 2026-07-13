---
title: 合规实践
weight: 236
description: 合规是配置、流程与证据的组合：上线加固清单、等保与 SOC 2 控制点映射、供应链完整性与漏洞响应机制。
icon: fa-solid fa-clipboard-check
module: [PIGSTY, PGSQL]
categories: [概念]
---

合规不是一个可以购买的产品，而是一种需要持续证明的状态。它由三部分组成：

- **配置**：安全能力是否启用 —— 这部分由 Pigsty 直接提供；
- **流程**：权限审批、变更管理、恢复演练等制度 —— 需要组织自行建立；
- **证据**：能证明前两者持续有效的记录 —— Pigsty 的 [**配置清单**](/docs/concept/iac/inventory)、运行日志和 [**监控系统**](/docs/concept/monitor) 可以提供其中一部分。

本页从上线前的加固清单开始，给出 Pigsty 安全能力与常见合规框架的映射关系。
这些映射用于方案设计和差距分析，不构成等保测评结论、SOC 2 审计意见或法律建议。


---------------------

<span id="默认凭据"></span>

## 默认凭证清单

Pigsty 的默认凭证公开写在文档与源码中，仅供演示与本地开发使用。**任何生产部署或暴露于网络的部署，上线前必须修改所有适用的默认值**：

| 范围                                          | 默认值示例                                             | `configure -g` |
|:--------------------------------------------|:--------------------------------------------------|:--------------:|
| Grafana 管理员与只读用户                            | `pigsty`、`DBUser.Viewer`                          |       是        |
| HAProxy 管理界面                                | `pigsty`                                          |       是        |
| PostgreSQL 管理、监控、复制用户                       | `DBUser.DBA`、`DBUser.Monitor`、`DBUser.Replicator` |       是        |
| Patroni REST API                            | `Patroni.API`                                     |       是        |
| etcd root                                   | `Etcd.Root`                                       |       是        |
| MinIO root                                  | `S3User.MinIO`                                    |       是        |
| MinIO 备份与示例业务用户                             | `S3User.Backup`、`S3User.Meta`、`S3User.Data`       |       是        |
| 示例数据库用户                                     | `DBUser.Meta`、`DBUser.Supa`、`Vibe.Coding`         |       是        |
| pgBackRest 加密口令                             | `cipher_pass: pgBackRest`                         |     **否**      |
| `ha/safe` 中的 MinIO 用户与 `pgBR.${pg_cluster}` | 模板示例值                                             |     **否**      |
| 用户自行添加的凭据                                   | 自定义值                                              |     **否**      |
{.full-width}

生成配置时可以使用 `-g`，随机化配置向导识别的内置参数和示例字符串：

```bash
./configure -g     # 生成配置清单，并随机化向导识别的默认凭据
```

配置向导会把生成的密码输出到终端，因此终端记录和自动化日志也应按敏感信息保护。生成完成后还要检查配置文件，单独替换 pgBackRest `cipher_pass`、`ha/safe` 中未覆盖的 MinIO 示例值和自定义凭据。


---------------------

<span id="上线检查"></span>

## 上线加固清单

**部署前**：

- [ ] 明确 [**网络边界**](/docs/concept/sec/level#网络边界)：数据库端口不暴露公网，移除演示配置中防火墙放行的 `5432`
- [ ] 确定证书策略：使用内置 CA，或接入企业 PKI（参见 [**使用企业 CA**](/docs/concept/sec/ca#使用企业-ca)）
- [ ] 规划 [**客户端验证**](/docs/concept/sec/ca#客户端验证服务端)：为数据库客户端配置 `sslmode=verify-full` 与可信 CA
- [ ] 规划账号体系：业务账号按 [**四层角色**](/docs/concept/sec/ac#角色体系) 分级，声明 `expire_in` 过期时间
- [ ] 规划 [**备份仓库**](/docs/concept/pitr/tradeoff)、保留周期、加密口令和异地副本
- [ ] 评估是否采用 [**`ha/safe`**](/docs/conf/safe) 加固模板与 [**CRIT 参数模板**](/docs/pgsql/template/crit)

**部署后**：

- [ ] 确认 `configure -g` 覆盖的凭据与未覆盖的备份、MinIO、自定义凭据均已修改
- [ ] 审查实际生效的 [**HBA 规则**](/docs/concept/sec/auth)（`/pg/data/pg_hba.conf`）是否与声明及预期一致
- [ ] 查询实际用户、角色、[**默认权限**](/docs/concept/sec/ac#默认权限) 和数据库 `CONNECT` 授权，并与配置清单比较
- [ ] 执行一次全量备份与 [**恢复演练**](/docs/concept/pitr/scenarios)，验证备份链路可用
- [ ] 确认日志采集、监控告警与通知通道可用

**周期性**：

- [ ] 权限审计：核对 `pg_users` 声明与实际授权，清理过期与离职账号
- [ ] 凭证与证书轮换
- [ ] 恢复演练与故障切换演练
- [ ] 跟进 Pigsty 与上游组件的安全更新


---------------------

## 合规证据

声明式配置为合规审计提供了稳定的证据入口，但还需要保留运行时状态，证明配置已经应用并持续有效。

| 证据           | 来源                                                                                       |
|:-------------|:-----------------------------------------------------------------------------------------|
| 安全配置基线及其变更历史 | `pigsty.yml` 配置清单与 Git 提交记录                                                              |
| 访问控制矩阵       | `pg_default_roles`、`pg_users` 与 `pg_hba_rules` 声明                                        |
| 实际生效的认证规则    | 各实例渲染出的 `pg_hba.conf`，用于与声明比较并发现漂移                                                       |
| 实际用户与权限      | PostgreSQL 系统目录、数据库 ACL、`\du+` 与 `\ddp+`                                                 |
| 操作与连接日志      | PostgreSQL 日志（DDL、慢查询、连接），[**VictoriaLogs**](/docs/concept/arch/infra#victorialogs) 集中留存 |
| 备份记录         | [**pgBackRest**](/docs/concept/arch/pgsql#pgbackrest) 备份信息与监控面板                          |
| 安全事件与告警记录    | 监控系统告警历史                                                                                 |
| 证书清单         | `files/pki/` 目录与各组件部署证书                                                                  |
{.full-width}


---------------------

## 等保三级映射

《GB/T 22239-2019》三级要求中“安全计算环境”部分与 Pigsty 能力的对应关系：

| 控制要求       | Pigsty 能力                                       | 需要补充                           |
|:-----------|:------------------------------------------------|:-------------------------------|
| 身份鉴别唯一性    | 独立账号体系，SCRAM-SHA-256 密码存储                       | 账号实名管理制度                       |
| 口令复杂度与定期更换 | `passwordcheck`、`credcheck` 扩展，`expire_in` 账号过期 | 启用扩展；轮换制度                      |
| 登录失败处理     | 可借助 `credcheck` 等扩展实现                           | 按需启用与配置                        |
| 访问控制与最小权限  | 四层角色模型、默认权限与数据库隔离                               | 权限审批流程                         |
| 安全审计       | DDL、连接、慢查询日志，`pgaudit`，集中日志留存                   | CRIT 模板或手工启用连接日志；留存周期按要求调整     |
| 通信保密性      | 本地 CA 与 TLS，HBA 强制 `ssl` 或 `cert`               | 强制 TLS、客户端 `verify-full` 与证书轮换 |
| 数据完整性      | 页级校验和（默认启用），严格同步复制（CRIT）                        | 存储保护、故障模型与演练                   |
| 数据保密性      | 备份 AES 加密，TDE 与列级加密路径                           | 按需启用                           |
| 数据备份恢复     | pgBackRest、PITR 与远端仓库（MinIO）                    | 恢复演练制度                         |
| 剩余信息保护     | -                                               | 介质销毁与擦除流程                      |
{.full-width}

等保还包括安全物理环境、安全通信网络、安全管理制度等部分，超出数据库发行版的能力范畴：
Pigsty 可以支持“安全计算环境”中与数据库相关的部分技术控制，机房、网络设备与管理制度仍需在整体方案中补足。


---------------------

## SOC 2 映射

SOC 2 [**信任服务准则**](https://www.aicpa-cima.com/resources/download/2017-trust-services-criteria-with-revised-points-of-focus-2022)（TSC）中与数据库直接相关的部分控制点：

| 控制点           | Pigsty 能力                                                    | 需要补充             |
|:--------------|:-------------------------------------------------------------|:-----------------|
| CC6.1 逻辑访问安全  | HBA、RBAC、默认权限与数据库隔离                                          | 权限设计、审批与定期复核     |
| CC6.2 用户注册与授权 | 声明式用户、角色和有效期                                                 | 入职、变更、离职和身份核验流程  |
| CC6.3 访问变更与撤销 | `pg_users`、角色调整、`REVOKE` 与到期时间                               | 工单、授权批准和及时回收证据   |
| CC6.6 外部边界威胁  | 防火墙、监听地址、HBA 与管理入口限制                                         | 网络架构、边界设备和持续验证   |
| CC6.7 信息传输与移动 | TLS、客户端验证与备份加密                                               | 数据导出、介质和第三方传输策略  |
| CC7.2 系统监控    | Victoria 可观测性栈，数千项指标与告警                                      | 告警响应流程           |
| CC7.3 事件追溯    | 集中日志，审计扩展                                                    | 日志审查流程           |
| A1.2 可用性与恢复   | [**高可用**](/docs/concept/ha) 与 [**PITR**](/docs/concept/pitr) | 演练记录与 RTO、RPO 目标 |
{.full-width}


---------------------

## 供应链与漏洞响应

合规审查越来越关注软件供应链，Pigsty 在分发与响应侧提供以下保障：

**包完整性**：Pigsty 软件仓库（`repo.pigsty.io`、`repo.pigsty.cc`）中的 RPM、DEB 包经 GPG 签名，
公钥指纹为 `9592 A7BC 7A68 2E73 3337 6E09 E793 5D8D B9BD 8B20`（`B9BD8B20`），可在信任前核验。但部署时写入的仓库定义以及 [**INFRA 节点**](/docs/concept/arch/node#infra节点) 上的本地仓库，默认不强制逐包签名验证；生产环境应检查包管理器的仓库信任与验签设置。

**漏洞响应**：安全问题通过 GitHub 私有漏洞报告或邮件渠道私下披露（参见 [**SECURITY.md**](https://github.com/pgsty/pigsty/blob/main/SECURITY.md)），
项目目标是在 3 个工作日内确认、7 天内给出初步评估。

**版本支持**：安全修复随最新稳定版发布，保持升级是获得安全修复的方式；需要长期锁定版本的用户，可通过 [**订阅服务**](/docs/about/service/) 获得延长支持。


---------------------

## 接下来

- 🛡️ [**安全模型**](/docs/concept/sec/level)：从默认基线到加固梯度
- 🔰 [**安全建议**](/docs/setup/security)：快速上手场景的最小加固动作
- 📄 [**`ha/safe` 模板**](/docs/conf/safe)：安全加固配置示例
