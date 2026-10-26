---
title: app/mattermost
weight: 860
description: Mattermost 应用模板，使用 Pigsty 托管 PostgreSQL + Docker 一键部署团队协作系统。
icon: fa-solid fa-comments
categories: [参考]
---

`app/mattermost` 配置模板用于部署 Mattermost，默认将应用与数据库放在同一节点，使用 Pigsty 提供 PostgreSQL、Nginx 与监控能力。

下方预览保留了 Bleve 路径等修正，新增的 Calls 端口映射和目录准备脚本需配套更新，详见 [**Mattermost 应用说明**](/docs/app/mattermost/)。

--------

## 配置概览

- 配置名称： `app/mattermost`
- 节点数量： 单节点（默认）
- 配置说明：Mattermost + PostgreSQL + Docker 的开箱即用模板。
- 适用系统：`el8`, `el9`, `el10`, `d12`, `d13`, `u22`, `u24`, `u26`
- 应用镜像架构：`x86_64`（官方 Team Edition 镜像仅提供 `linux/amd64`；ARM64 模拟运行仅供测试）
- 相关配置：[`app/odoo`](/docs/conf/odoo/)、[`app/registry`](/docs/conf/registry/)、[`supabase`](/docs/conf/supabase/)

启用方式：

```bash
./configure -c app/mattermost
./deploy.yml
./docker.yml
./app.yml
```


--------

## 配置内容

源文件：[**`conf/app/mattermost.yml`**](https://github.com/pgsty/pigsty/blob/main/conf/app/mattermost.yml)。

<details>
<summary>开发版配置预览：Calls 需要同步修改 Compose 端口映射</summary>

{{< include file="yaml/app/mattermost.yml" code=true lang="yaml" >}}

</details>

--------

## 配置解读

`app/mattermost` 模板定义了三个关键部分：

- `mattermost` 组：应用主机与 `apps.mattermost` 参数，包含 `.env` 覆写与数据目录声明。
- `pg-mattermost` 组：独立 PostgreSQL 集群、数据库与应用账号。
- `infra`/`etcd` 组：Pigsty 基础设施依赖。

关键特征：

- 默认开启 `docker_enabled: true`，并通过 `./docker.yml` 完成容器运行时准备。
- Nginx 门户默认暴露 `mm.pigsty`（`infra_portal.mattermost`），支持 WebSocket。
- 预置本地 Docker 网段 HBA 规则（`172.16.0.0/12`），仅允许应用账号访问 `mattermost` 数据库。
- `apps.mattermost.file` 创建数据目录并设置为 `2000:2000`；开发模板另外增加 Calls 的 `8443/TCP` 与 `8443/UDP` 映射。
- 可选启用 JuiceFS（注释块）将 `/data/mattermost` 挂载到 PostgreSQL 后端存储。

注意事项：

- 请在部署前修改数据库口令、域名与应用密码等敏感信息。
- 若开放公网访问，建议配合 HTTPS、ACL 与防火墙规则。
- Calls 媒体流量需放行 TCP 与 UDP；`node_firewall_public_port` 仅打开 TCP，详细要求见 [应用说明](/docs/app/mattermost/)。
