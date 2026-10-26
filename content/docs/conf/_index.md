---
title: 模板
weight: 600
description: 开箱即用的配置模板，针对具体场景的配置示例，以及配置文件的详细解释。
icon: fa-solid fa-sliders
module: [PIGSTY]
categories: [参考]
main_menu: True
---

您可以在 [**`configure`**](/docs/concept/iac/configure) 时使用 `-c` 指定配置模板；参数值为相对 `conf/` 的路径且不带 `.yml` 后缀。内核模板位于 `fork/` 子目录，例如 `-c fork/pgsql`。如果没有指定，将使用默认的 [**`meta`**](/docs/conf/meta/) 模板。

本节包含 v4.5.0 之后的开发版配置。v4.5.0 的内核模板仍位于 `conf/` 根目录，使用时去掉 `fork/` 前缀；新增的 `app/silo` 需要配套开发版源码。

| 分类    | 模板                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|:------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 单机模板  | [`meta`](/docs/conf/meta/)、[`rich`](/docs/conf/rich/)、[`fat`](/docs/conf/fat/)、[`slim`](/docs/conf/slim/)、[`infra`](/docs/conf/infra/)、[`vibe`](/docs/conf/vibe/)、[`docker`](/docs/conf/docker/)                                                                                                                                                                                                                                                                                             |
| 内核模板  | [`fork/pgsql`](/docs/conf/pgsql/)、[`pg19`](/docs/conf/pg19/)、[`fork/mssql`](/docs/conf/mssql/)、[`fork/polar`](/docs/conf/polar/)、[`fork/ivory`](/docs/conf/ivory/)、[`fork/agens`](/docs/conf/agens/)、[`fork/pgedge`](/docs/conf/pgedge/)、[`fork/mysql`（OpenHalo）](/docs/conf/mysql/)、[`fork/mongo`](/docs/conf/mongo/)、[`fork/pgtde`](/docs/conf/pgtde/)、[`fork/oriole`](/docs/conf/oriole/)                                                                                                                                                   |
| 高可用模板 | [`ha/simu`](/docs/conf/simu/)、[`ha/octo`](/docs/conf/octo/)、[`ha/citus`](/docs/conf/citus/)、[`ha/full`](/docs/conf/full/)、[`ha/safe`](/docs/conf/safe/)、[`ha/trio`](/docs/conf/trio/)、[`ha/dual`](/docs/conf/dual/)                                                                                                                                                                                                                                                                          |
| 应用模板  | [`supabase`](/docs/conf/supabase/)、[`app/odoo`](/docs/conf/odoo/)、[`app/dify`](/docs/conf/dify/)、[`app/insforge`](/docs/conf/insforge/)、[`app/hindsight`](/docs/conf/hindsight/)、[`app/electric`](/docs/conf/electric/)、[`app/maybe`](/docs/conf/maybe/)、[`app/teable`](/docs/conf/teable/)、[`app/mattermost`](/docs/conf/mattermost/)、[`app/registry`](/docs/conf/registry/)、[`app/immich`](/docs/conf/immich/)、[`app/jumpserver`](/docs/conf/jumpserver/)、[`app/silo`](/docs/conf/silo/)                                  |
| 其他模板  | [`demo/bare`](/docs/conf/bare/)、[`demo/el`](/docs/conf/el/)、[`demo/debian`](/docs/conf/debian/)、[`demo/demo`](/docs/conf/demo/)、[`demo/kernel`](/docs/conf/kernel/)、[`demo/redis`](/docs/conf/redis/)、[`demo/minio`](/docs/conf/minio/)、[`demo/kafka`](/docs/conf/kafka/)、[`demo/mysql`（原生 MySQL 试点）](/docs/conf/mysql84/)、[`demo/remote`](/docs/conf/remote/)、[`demo/saas`](/docs/conf/saas/)、[`demo/wool`](/docs/conf/wool/)、[`build/oss`](/docs/conf/oss/)、[`build/dev`](/docs/conf/dev/) |
{.full-width}
