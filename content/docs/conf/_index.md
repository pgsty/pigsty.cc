---
title: 模板
weight: 750
description: 开箱即用的配置模板，针对具体场景的配置示例，以及配置文件的详细解释。
icon: fa-solid fa-sliders
module: [PIGSTY]
categories: [参考]
main_menu: True
---

Pigsty 提供了多种开箱即用的配置模板，适用于不同的使用场景。

您可以在 [**`configure`**](/docs/concept/iac/configure) 时使用 `-c` 指定一个配置模板。如果没有指定配置模板，将会使用默认的 [**`meta`**](/docs/conf/meta/) 模版。

| 分类    | 模板                                                                                                                                                                                                                                                                           |
|:------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 单机模版  | [`meta`](/docs/conf/meta/)、[`rich`](/docs/conf/rich/)、[`fat`](/docs/conf/fat/)、[`slim`](/docs/conf/slim/)、[`infra`](/docs/conf/infra/)、[`vibe`](/docs/conf/vibe/)                                                                                                            |
| 内核模版  | [`pgsql`](/docs/conf/pgsql/)、[`citus`](/docs/conf/citus/)、[`mssql`](/docs/conf/mssql/)、[`polar`](/docs/conf/polar/)、[`ivory`](/docs/conf/ivory/)、[`mysql`](/docs/conf/mysql/)、[`pgtde`](/docs/conf/pgtde/)、[`oriole`](/docs/conf/oriole/)、[`supabase`](/docs/conf/supabase/) |
| 高可用模板 | [`ha/simu`](/docs/conf/simu/)、[`ha/full`](/docs/conf/full/)、[`ha/safe`](/docs/conf/safe/)、[`ha/trio`](/docs/conf/trio/)、[`ha/dual`](/docs/conf/dual/)                                                                                                                        |
| 应用模版  | [`app/odoo`](/docs/conf/odoo/)、[`app/dify`](/docs/conf/dify/)、[`app/electric`](/docs/conf/electric/)、[`app/maybe`](/docs/conf/maybe/)、[`app/teable`](/docs/conf/teable/)、[`app/registry`](/docs/conf/registry/)                                                              |
| 其他模版  | [`demo/el`](/docs/conf/el/)、[`demo/debian`](/docs/conf/debian/)、[`demo/demo`](/docs/conf/demo/)、[`demo/minio`](/docs/conf/minio/)、[`build/oss`](/docs/conf/oss/)、[`build/pro`](/docs/conf/pro/)                                                                              |
{.full-width}

