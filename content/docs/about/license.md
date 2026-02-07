---
title: 开源协议
weight: 135
description: Pigsty 使用的开源协议 —— Apache-2.0，它授予您什么样的权利，又有哪些限制？
icon: fas fa-balance-scale
module: [PIGSTY]
categories: [参考]
---

## 协议摘要

Pigsty 项目主体使用 **Apache-2.0** 开源许可证；Pigsty 文档网站使用 **CC by 4.0** 许可证。
项目协议地址：[https://github.com/pgsty/pigsty/blob/main/LICENSE](https://github.com/pgsty/pigsty/blob/main/LICENSE)


----------------

## Pigsty 项目主体

Pigsty 软件主体采用 [**Apache License 2.0**](#apache-20-许可证原文) 许可证。
这是一种宽松的开源许可证，允许您自由地使用、修改和分发本软件，包括用于商业目的，而无需公开您的源代码或使用相同许可证。

| **本协议授权您**                                            | **本协议不提供**                                            | **本协议的条件**                                                                  |
|-------------------------------------------------------|-------------------------------------------------------|-----------------------------------------------------------------------------|
| <i class="fas fa-circle-check text-primary"></i> 商用   | <i class="fas fa-circle-xmark text-danger"></i> 商标使用权 | <i class="fa-solid fa-triangle-exclamation text-secondary"></i> 包含本许可证与版权声明 |
| <i class="fas fa-circle-check text-primary"></i> 修改   | <i class="fas fa-circle-xmark text-danger"></i> 责任与担保 | <i class="fa-solid fa-triangle-exclamation text-secondary"></i> 声明对原始代码的修改  |
| <i class="fas fa-circle-check text-primary"></i> 分发   |                                                       |                                                                             |
| <i class="fas fa-circle-check text-primary"></i> 专利授权 |                                                       |                                                                             |
| <i class="fas fa-circle-check text-primary"></i> 私人使用 |                                                       |                                                                             |
{.full-width}


----------------

## Pigsty 文档网站

Pigsty 的文档与网站（包括但不限于：[**pigsty.cc**](https://pigsty.cc)，[**pigsty.io**](https://pigsty.io)，[**pgsty.com**](https://pgsty.com) ）均使用 **Creative Commons Attribution 4.0 International (CC BY 4.0)** 许可证。
**CC BY 4.0** 是一种知识共享许可证，允许您自由地分享与演绎本站的内容，但是您必须给出 [**适当的署名**](https://creativecommons.org/licenses/by/4.0/deed.zh-hans#ref-appropriate-credit)，提供指向许可证的链接，并 [**指出是否有对原始内容进行了修改**](https://creativecommons.org/licenses/by/4.0/deed.zh-hans#ref-indicate-changes)。

| **本协议授权您**                                            | **本协议不提供**                                            | **本协议的条件**                                                                |
|-------------------------------------------------------|-------------------------------------------------------|---------------------------------------------------------------------------|
| <i class="fas fa-circle-check text-primary"></i> 商用   | <i class="fas fa-circle-xmark text-danger"></i> 商标使用权 | <i class="fa-solid fa-triangle-exclamation text-secondary"></i> 署名（注明原作者） |
| <i class="fas fa-circle-check text-primary"></i> 修改   | <i class="fas fa-circle-xmark text-danger"></i> 责任与担保 | <i class="fa-solid fa-triangle-exclamation text-secondary"></i> 标明修改内容    |
| <i class="fas fa-circle-check text-primary"></i> 分发   | <i class="fas fa-circle-xmark text-danger"></i> 专利授权  | <i class="fa-solid fa-triangle-exclamation text-secondary"></i> 提供许可证链接   |
| <i class="fas fa-circle-check text-primary"></i> 私人使用 |                                                       |                                                                           |
{.full-width}



----------------

## SBOM 清单

以下为 Pigsty 项目所使用或相关的开源软件及其开源协议。

444 个 PostgreSQL 扩展插件的许可证请参考 [**PostgreSQL 扩展许可证清单**](https://pgext.cloud/zh/list/license)。

|    模块    |                               软件名称                                | 许可证                                                                                                       | 必要性，用途与说明                       |  必要性   |
|:--------:|:-----------------------------------------------------------------:|-----------------------------------------------------------------------------------------------------------|---------------------------------|:------:|
|  PGSQL   |             [PostgreSQL](https://www.postgresql.org/)             | [PostgreSQL License](https://www.postgresql.org/about/licence/)                                           | PostgreSQL 内核                   | **必选** |
|  PGSQL   |       [patroni](https://patroni.readthedocs.io/en/latest/)        | [MIT License](https://github.com/zalando/patroni/blob/master/LICENSE)                                     | 提供 PostgreSQL 高可用能力             | **必选** |
|   ETCD   |                     [etcd](https://etcd.io/)                      | [Apache License 2.0](https://github.com/etcd-io/etcd/blob/main/LICENSE)                                   | 提供高可用共识与分布式配置存储                 | **必选** |
|  INFRA   |   [Ansible](https://docs.ansible.com/ansible/latest/index.html)   | [GPLv3](https://github.com/ansible/ansible/blob/devel/COPYING)                                            | 管控工具，执行剧本，发起管控命令                | **必选** |
|  INFRA   |              [Nginx](https://github.com/nginx/nginx)              | [BSD-2](https://github.com/nginx/nginx/blob/master/LICENSE)                                               | 暴露Web系统界面，提供本地软件源               |   建议   |
|  PGSQL   |               [pgbackrest](https://pgbackrest.org/)               | [MIT License](https://github.com/pgbackrest/pgbackrest/blob/main/LICENSE)                                 | 提供 PITR 备份/恢复管理能力               |   建议   |
|  PGSQL   |       [pgbouncer](https://www.pgbouncer.org/community.html)       | [ISC License](https://github.com/pgbouncer/pgbouncer/blob/master/COPYRIGHT)                               | 提供 PostgreSQL 连接池化能力            |   建议   |
|  PGSQL   | [vip-manager](https://github.com/cybertec-postgresql/vip-manager) | [BSD 2-Clause License](https://github.com/cybertec-postgresql/vip-manager/blob/master/LICENSE)            | 提供自动将 L2 VIP 绑定到 PG 集群主库的能力     |   建议   |
|  PGSQL   |        [pg_exporter](https://github.com/Vonng/pg_exporter)        | [Apache License 2.0](https://github.com/Vonng/pg_exporter/blob/master/LICENSE)                            | 提供监控 PostgreSQL 与 PgBouncer 的能力 |   建议   |
|   NODE   |   [node_exporter](https://github.com/prometheus/node_exporter)    | [Apache License 2.0](https://github.com/prometheus/node_exporter/blob/master/LICENSE)                     | 提供主机节点监控能力                      |   建议   |
|   NODE   |                [haproxy](https://www.haproxy.org/)                | [HAPROXY's License](https://www.haproxy.org/download/1.3/doc/LICENSE) (GPLv2)                             | 提供负载均衡，对外暴露服务的能力                |   建议   |
|  INFRA   |                  [Grafana](https://grafana.com/)                  | [AGPLv3](https://github.com/grafana/grafana/blob/main/LICENSE)                                            | 提供数据库可视化平台                      |   建议   |
|  INFRA   |          [VictoriaMetrics](https://victoriametrics.com/)          | [Apache License 2.0](https://github.com/VictoriaMetrics/VictoriaMetrics/blob/master/LICENSE)              | 提供监控时序数据库存储，指标采集与监控告警           |   建议   |
|  INFRA   |           [VictoriaLogs](https://victoriametrics.com/)            | [Apache License 2.0](https://github.com/VictoriaMetrics/VictoriaMetrics/blob/master/LICENSE)              | 提供集中式日志收集存储查询平台                 |   建议   |
|  INFRA   |       [DNSMASQ](https://thekelleys.org.uk/dnsmasq/doc.html)       | [GPLv2](https://thekelleys.org.uk/dnsmasq/doc.html) / [GPLv3](https://thekelleys.org.uk/dnsmasq/doc.html) | 提供DNS解析服务，提供集群名查询能力             |   建议   |
|  MINIO   |                     [MinIO](https://min.io/)                      | [AGPLv3](https://github.com/minio/minio/blob/master/LICENSE)                                              | 提供S3兼容的对象存储服务                   |   可选   |
|   NODE   |             [keepalived](https://www.keepalived.org/)             | [MIT License](https://github.com/umich-arc/keepalived/blob/master/LICENSE)                                | 提供绑定在节点集群上的 VIP                 |   可选   |
|  REDIS   |                    [Redis](https://redis.io/)                     | [Redis License](https://redis.io/docs/about/license/) (BSD-3)                                             | 搭配PG使用的缓存服务，锁死版本 7.2.6          |   可选   |
|  REDIS   |   [Redis Exporter](https://github.com/oliver006/redis_exporter)   | [MIT License](https://github.com/oliver006/redis_exporter/blob/master/LICENSE)                            | 提供 Redis 监控能力                   |   可选   |
|  MONGO   |               [FerretDB](https://www.ferretdb.io/)                | [Apache License 2.0](https://github.com/FerretDB/FerretDB/blob/main/LICENSE)                              | 提供基于PG的MongoDB兼容能力              |   可选   |
|  DOCKER  |         [docker-ce](https://github.com/docker/docker-ce)          | [Apache License 2.0](https://github.com/docker/docker-ce/blob/master/LICENSE)                             | 提供容器管理能力                        |   可选   |
|  CLOUD   |   [SealOS](https://github.com/labring/sealos/blob/main/LICENSE)   | [Apache License 2.0](https://github.com/labring/sealos/blob/main/LICENSE)                                 | 提供快速部署，复制，打包K8S集群的能力            |   可选   |
|  DUCKDB  |            [DuckDB](https://github.com/duckdb/duckdb)             | [MIT](https://github.com/duckdb/duckdb/blob/main/LICENSE)                                                 | 提供简单易用的高性能分析能力                  |   可选   |
| External |               [Vagrant](https://www.vagrantup.com/)               | [Business Source License 1.1](https://github.com/hashicorp/vagrant/blob/main/LICENSE)                     | 拉起本地测试环境虚拟机                     |   可选   |
| External |              [Terraform](https://www.terraform.io/)               | [Business Source License 1.1](https://github.com/hashicorp/terraform/blob/main/LICENSE)                   | 一键申请云资源用于部署                     |   可选   |
| External |             [Virtualbox](https://www.virtualbox.org/)             | [GPLv2](https://www.virtualbox.org/wiki/Licensing_FAQ)                                                    | 虚拟机管理软件                         |   可选   |
{.full-width}

必要性等级说明：

* **必选**：提供 Pigsty 关键性核心能力，不提供关闭停用选项
* **建议**：Pigsty **默认启用** 的组件，可以通过配置选项停用
* **可选**：Pigsty 默认支持但不启用的组件，可通过配置启用


## Apache-2.0 许可证原文

```

                                 Apache License
                           Version 2.0, January 2004
                        http://www.apache.org/licenses/

   TERMS AND CONDITIONS FOR USE, REPRODUCTION, AND DISTRIBUTION

   1. Definitions.

      "License" shall mean the terms and conditions for use, reproduction,
      and distribution as defined by Sections 1 through 9 of this document.

      "Licensor" shall mean the copyright owner or entity authorized by
      the copyright owner that is granting the License.

      "Legal Entity" shall mean the union of the acting entity and all
      other entities that control, are controlled by, or are under common
      control with that entity. For the purposes of this definition,
      "control" means (i) the power, direct or indirect, to cause the
      direction or management of such entity, whether by contract or
      otherwise, or (ii) ownership of fifty percent (50%) or more of the
      outstanding shares, or (iii) beneficial ownership of such entity.

      "You" (or "Your") shall mean an individual or Legal Entity
      exercising permissions granted by this License.

      "Source" form shall mean the preferred form for making modifications,
      including but not limited to software source code, documentation
      source, and configuration files.

      "Object" form shall mean any form resulting from mechanical
      transformation or translation of a Source form, including but
      not limited to compiled object code, generated documentation,
      and conversions to other media types.

      "Work" shall mean the work of authorship, whether in Source or
      Object form, made available under the License, as indicated by a
      copyright notice that is included in or attached to the work
      (an example is provided in the Appendix below).

      "Derivative Works" shall mean any work, whether in Source or Object
      form, that is based on (or derived from) the Work and for which the
      editorial revisions, annotations, elaborations, or other modifications
      represent, as a whole, an original work of authorship. For the purposes
      of this License, Derivative Works shall not include works that remain
      separable from, or merely link (or bind by name) to the interfaces of,
      the Work and Derivative Works thereof.

      "Contribution" shall mean any work of authorship, including
      the original version of the Work and any modifications or additions
      to that Work or Derivative Works thereof, that is intentionally
      submitted to Licensor for inclusion in the Work by the copyright owner
      or by an individual or Legal Entity authorized to submit on behalf of
      the copyright owner. For the purposes of this definition, "submitted"
      means any form of electronic, verbal, or written communication sent
      to the Licensor or its representatives, including but not limited to
      communication on electronic mailing lists, source code control systems,
      and issue tracking systems that are managed by, or on behalf of, the
      Licensor for the purpose of discussing and improving the Work, but
      excluding communication that is conspicuously marked or otherwise
      designated in writing by the copyright owner as "Not a Contribution."

      "Contributor" shall mean Licensor and any individual or Legal Entity
      on behalf of whom a Contribution has been received by Licensor and
      subsequently incorporated within the Work.

   2. Grant of Copyright License. Subject to the terms and conditions of
      this License, each Contributor hereby grants to You a perpetual,
      worldwide, non-exclusive, no-charge, royalty-free, irrevocable
      copyright license to reproduce, prepare Derivative Works of,
      publicly display, publicly perform, sublicense, and distribute the
      Work and such Derivative Works in Source or Object form.

   3. Grant of Patent License. Subject to the terms and conditions of
      this License, each Contributor hereby grants to You a perpetual,
      worldwide, non-exclusive, no-charge, royalty-free, irrevocable
      (except as stated in this section) patent license to make, have made,
      use, offer to sell, sell, import, and otherwise transfer the Work,
      where such license applies only to those patent claims licensable
      by such Contributor that are necessarily infringed by their
      Contribution(s) alone or by combination of their Contribution(s)
      with the Work to which such Contribution(s) was submitted. If You
      institute patent litigation against any entity (including a
      cross-claim or counterclaim in a lawsuit) alleging that the Work
      or a Contribution incorporated within the Work constitutes direct
      or contributory patent infringement, then any patent licenses
      granted to You under this License for that Work shall terminate
      as of the date such litigation is filed.

   4. Redistribution. You may reproduce and distribute copies of the
      Work or Derivative Works thereof in any medium, with or without
      modifications, and in Source or Object form, provided that You
      meet the following conditions:

      (a) You must give any other recipients of the Work or
          Derivative Works a copy of this License; and

      (b) You must cause any modified files to carry prominent notices
          stating that You changed the files; and

      (c) You must retain, in the Source form of any Derivative Works
          that You distribute, all copyright, patent, trademark, and
          attribution notices from the Source form of the Work,
          excluding those notices that do not pertain to any part of
          the Derivative Works; and

      (d) If the Work includes a "NOTICE" text file as part of its
          distribution, then any Derivative Works that You distribute must
          include a readable copy of the attribution notices contained
          within such NOTICE file, excluding those notices that do not
          pertain to any part of the Derivative Works, in at least one
          of the following places: within a NOTICE text file distributed
          as part of the Derivative Works; within the Source form or
          documentation, if provided along with the Derivative Works; or,
          within a display generated by the Derivative Works, if and
          wherever such third-party notices normally appear. The contents
          of the NOTICE file are for informational purposes only and
          do not modify the License. You may add Your own attribution
          notices within Derivative Works that You distribute, alongside
          or as an addendum to the NOTICE text from the Work, provided
          that such additional attribution notices cannot be construed
          as modifying the License.

      You may add Your own copyright statement to Your modifications and
      may provide additional or different license terms and conditions
      for use, reproduction, or distribution of Your modifications, or
      for any such Derivative Works as a whole, provided Your use,
      reproduction, and distribution of the Work otherwise complies with
      the conditions stated in this License.

   5. Submission of Contributions. Unless You explicitly state otherwise,
      any Contribution intentionally submitted for inclusion in the Work
      by You to the Licensor shall be under the terms and conditions of
      this License, without any additional terms or conditions.
      Notwithstanding the above, nothing herein shall supersede or modify
      the terms of any separate license agreement you may have executed
      with Licensor regarding such Contributions.

   6. Trademarks. This License does not grant permission to use the trade
      names, trademarks, service marks, or product names of the Licensor,
      except as required for reasonable and customary use in describing the
      origin of the Work and reproducing the content of the NOTICE file.

   7. Disclaimer of Warranty. Unless required by applicable law or
      agreed to in writing, Licensor provides the Work (and each
      Contributor provides its Contributions) on an "AS IS" BASIS,
      WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or
      implied, including, without limitation, any warranties or conditions
      of TITLE, NON-INFRINGEMENT, MERCHANTABILITY, or FITNESS FOR A
      PARTICULAR PURPOSE. You are solely responsible for determining the
      appropriateness of using or redistributing the Work and assume any
      risks associated with Your exercise of permissions under this License.

   8. Limitation of Liability. In no event and under no legal theory,
      whether in tort (including negligence), contract, or otherwise,
      unless required by applicable law (such as deliberate and grossly
      negligent acts) or agreed to in writing, shall any Contributor be
      liable to You for damages, including any direct, indirect, special,
      incidental, or consequential damages of any character arising as a
      result of this License or out of the use or inability to use the
      Work (including but not limited to damages for loss of goodwill,
      work stoppage, computer failure or malfunction, or any and all
      other commercial damages or losses), even if such Contributor
      has been advised of the possibility of such damages.

   9. Accepting Warranty or Additional Liability. While redistributing
      the Work or Derivative Works thereof, You may choose to offer,
      and charge a fee for, acceptance of support, warranty, indemnity,
      or other liability obligations and/or rights consistent with this
      License. However, in accepting such obligations, You may act only
      on Your own behalf and on Your sole responsibility, not on behalf
      of any other Contributor, and only if You agree to indemnify,
      defend, and hold each Contributor harmless for any liability
      incurred by, or claims asserted against, such Contributor by reason
      of your accepting any such warranty or additional liability.

   END OF TERMS AND CONDITIONS

   APPENDIX: How to apply the Apache License to your work.

      To apply the Apache License to your work, attach the following
      boilerplate notice, with the fields enclosed by brackets "[]"
      replaced with your own identifying information. (Don't include
      the brackets!)  The text should be enclosed in the appropriate
      comment syntax for the file format. We also recommend that a
      file or class name and description of purpose be included on the
      same "printed page" as the copyright notice for easier
      identification within third-party archives.

   Copyright (C) 2018-2026  Ruohang Feng, @Vonng (rh@vonng.com)

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
```
