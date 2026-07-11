---
title: 模板
weight: 600
description: 开箱即用的配置模板，针对具体场景的配置示例，以及配置文件的详细解释。
icon: fa-solid fa-sliders
module: [PIGSTY]
categories: [参考]
main_menu: True
---

Pigsty v4.4.0 在 `conf/` 目录提供 48 个开箱即用的 YAML 配置模板，适用于不同的部署、测试与构建场景。

您可以在 [**`configure`**](/docs/concept/iac/configure) 时使用 `-c` 指定配置模板；参数值为相对 `conf/` 的路径且不带 `.yml` 后缀。如果没有指定，将使用默认的 [**`meta`**](/docs/conf/meta/) 模板。

| 分类    | 模板                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|:------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 单机模板  | [`meta`](/docs/conf/meta/)、[`rich`](/docs/conf/rich/)、[`fat`](/docs/conf/fat/)、[`slim`](/docs/conf/slim/)、[`infra`](/docs/conf/infra/)、[`vibe`](/docs/conf/vibe/)、[`docker`](/docs/conf/docker/)                                                                                                                                                                                                                                                         |
| 内核模板  | [`pgsql`](/docs/conf/pgsql/)、[`pg19`](/docs/conf/pg19/)、[`mssql`](/docs/conf/mssql/)、[`polar`](/docs/conf/polar/)、[`ivory`](/docs/conf/ivory/)、[`agens`](/docs/conf/agens/)、[`pgedge`](/docs/conf/pgedge/)、[`mysql`](/docs/conf/mysql/)、[`mongo`](/docs/conf/mongo/)、[`pgtde`](/docs/conf/pgtde/)、[`oriole`](/docs/conf/oriole/)                                                                                                                   |
| 高可用模板 | [`ha/simu`](/docs/conf/simu/)、[`ha/citus`](/docs/conf/citus/)、[`ha/full`](/docs/conf/full/)、[`ha/safe`](/docs/conf/safe/)、[`ha/trio`](/docs/conf/trio/)、[`ha/dual`](/docs/conf/dual/)                                                                                                                                                                                                                                                                    |
| 应用模板  | [`supabase`](/docs/conf/supabase/)、[`app/odoo`](/docs/conf/odoo/)、[`app/dify`](/docs/conf/dify/)、[`app/insforge`](/docs/conf/insforge/)、[`app/hindsight`](/docs/conf/hindsight/)、[`app/electric`](/docs/conf/electric/)、[`app/maybe`](/docs/conf/maybe/)、[`app/teable`](/docs/conf/teable/)、[`app/mattermost`](/docs/conf/mattermost/)、[`app/registry`](/docs/conf/registry/)、[`app/immich`](/docs/conf/immich/)、[`app/jumpserver`](/docs/conf/jumpserver/) |
| 其他模板  | [`demo/bare`](/docs/conf/bare/)、[`demo/el`](/docs/conf/el/)、[`demo/debian`](/docs/conf/debian/)、[`demo/demo`](/docs/conf/demo/)、[`demo/kernel`](/docs/conf/kernel/)、[`demo/redis`](/docs/conf/redis/)、[`demo/minio`](/docs/conf/minio/)、[`demo/remote`](/docs/conf/remote/)、[`demo/saas`](/docs/conf/saas/)、[`demo/wool`](/docs/conf/wool/)、[`build/oss`](/docs/conf/oss/)、[`build/dev`](/docs/conf/dev/)                                                                  |
{.full-width}
