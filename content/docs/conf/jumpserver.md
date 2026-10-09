---
title: app/jumpserver
weight: 900
description: 使用 Pigsty 托管的 PostgreSQL 部署 JumpServer 开源堡垒机
icon: fa-solid fa-shield-halved
categories: [参考]
---

`app/jumpserver` 配置模板部署 JumpServer Community Edition，并使用 Pigsty 托管的 PostgreSQL 18 作为外部数据库。当前模板按 JumpServer v5.0.0-ce 验证。


--------

## 配置概览

- 配置名称：`app/jumpserver`
- 节点数量：单节点
- Web 端口：`8080`
- SSH 端口：`2222`
- KoKo 网站代理端口：`5001`
- 镜像命名空间：`registry.cn-beijing.aliyuncs.com/jumpservice`
- 实测平台：Linux amd64；外部 PostgreSQL 18.6
- 相关配置：[`meta`](/docs/conf/meta/)

启用方式：

```bash
./configure -c app/jumpserver [-i <primary_ip>]
```


--------

## 配置内容

源文件地址：[`pigsty/conf/app/jumpserver.yml`](https://github.com/pgsty/pigsty/blob/main/conf/app/jumpserver.yml)

{{< include file="yaml/app/jumpserver.yml" code=true lang="yaml" >}}


--------

## 配置解读

- 为 Core、KoKo、Kael、Chen、Nginx 与 Redis 预建 `/data/jumpserver` 持久化目录
- 使用固定 Docker 网段 `192.168.250.0/24`，并为 PostgreSQL/PgBouncer 配置对应 HBA
- PostgreSQL 集群名为 `pg-jumpserver`，数据库与服务账号为 `jumpserver`
- 本地 Redis 由应用 Compose 管理
- 通过 `jump.pigsty` 反向代理到 `10.10.10.10:8080`

部署前必须替换 `SECRET_KEY`、`BOOTSTRAP_TOKEN`、`CHAT_AI_DELEGATION_SECRET`、Redis/数据库密码与域名。`SECRET_KEY` 在产生生产数据后必须保持不变。

一次性 init 完成迁移与主机密钥验证后启动 Core；Celery 与连接组件等待 Core 健康。`jms_init` 正常状态为 `Exited (0)`。完整安装、4.10.19 升级、备份恢复与验收说明见 [JumpServer 应用文档](/docs/app/jumpserver/)。
