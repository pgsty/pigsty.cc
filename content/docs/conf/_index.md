---
title: 模板
weight: 600
description: 开箱即用的配置模板，针对具体场景的配置示例，以及配置文件的详细解释。
icon: fa-solid fa-sliders
module: [PIGSTY]
categories: [参考]
main_menu: True
---

使用 [**`configure`**](/docs/concept/iac/configure) 的 `-c` 选择模板；默认使用 [**`meta`**](/docs/conf/meta/)。
当前开发源码支持裸名称，例如 `full`，并按 `conf/ → ha/ → fork/ → app/ → demo/ → build/` 的顺序查找，
其中所有子目录均位于 `conf/` 下，首个匹配文件生效。显式路径 `ha/full` 只定位该模板。
可省略开头的 `./`、`conf/` 前缀和 `.yml` 后缀。

例如 `-c full` 与 `-c ha/full` 均选择 `conf/ha/full.yml`，`-c pgsql` 与 `-c fork/pgsql` 均选择 `conf/fork/pgsql.yml`。
OpenHalo 使用 `halo` / `fork/halo`；原生 MySQL 示例使用 `mysql` / `demo/mysql`。
较早发布包使用该版本自带的脚本与模板布局，v4.5.0 的 OpenHalo 模板仍名为 `mysql`。
应用配置中尚未发布的改动在各页单独注明。

| 分类    | 模板                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|:------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 单机模板  | [`meta`](/docs/conf/meta/)、[`rich`](/docs/conf/rich/)、[`fat`](/docs/conf/fat/)、[`slim`](/docs/conf/slim/)、[`infra`](/docs/conf/infra/)、[`vibe`](/docs/conf/vibe/)、[`docker`](/docs/conf/docker/)                                                                                                                                                                                                                                                                                             |
| 内核模板  | [`pgsql`](/docs/conf/pgsql/)、[`pg19`](/docs/conf/pg19/)、[`mssql`](/docs/conf/mssql/)、[`polar`](/docs/conf/polar/)、[`ivory`](/docs/conf/ivory/)、[`agens`](/docs/conf/agens/)、[`pgedge`](/docs/conf/pgedge/)、[`halo`（OpenHalo）](/docs/conf/mysql/)、[`mongo`](/docs/conf/mongo/)、[`pgtde`](/docs/conf/pgtde/)、[`oriole`](/docs/conf/oriole/)                                                                                                                                                   |
| 高可用模板 | [`ha/simu`](/docs/conf/simu/)、[`ha/octo`](/docs/conf/octo/)、[`ha/citus`](/docs/conf/citus/)、[`ha/full`](/docs/conf/full/)、[`ha/safe`](/docs/conf/safe/)、[`ha/trio`](/docs/conf/trio/)、[`ha/dual`](/docs/conf/dual/)                                                                                                                                                                                                                                                                          |
| 应用模板  | [`supabase`](/docs/conf/supabase/)、[`app/odoo`](/docs/conf/odoo/)、[`app/dify`](/docs/conf/dify/)、[`app/insforge`](/docs/conf/insforge/)、[`app/hindsight`](/docs/conf/hindsight/)、[`app/electric`](/docs/conf/electric/)、[`app/maybe`](/docs/conf/maybe/)、[`app/teable`](/docs/conf/teable/)、[`app/mattermost`](/docs/conf/mattermost/)、[`app/registry`](/docs/conf/registry/)、[`app/immich`](/docs/conf/immich/)、[`app/jumpserver`](/docs/conf/jumpserver/)、[`app/discourse`](/docs/conf/discourse/)                                  |
| 其他模板  | [`demo/bare`](/docs/conf/bare/)、[`demo/el`](/docs/conf/el/)、[`demo/debian`](/docs/conf/debian/)、[`demo/demo`](/docs/conf/demo/)、[`demo/kernel`](/docs/conf/kernel/)、[`demo/redis`](/docs/conf/redis/)、[`demo/minio`](/docs/conf/minio/)、[`demo/kafka`](/docs/conf/kafka/)、[`demo/mysql`（原生 MySQL 试点）](/docs/conf/mysql84/)、[`demo/remote`](/docs/conf/remote/)、[`demo/saas`](/docs/conf/saas/)、[`demo/wool`](/docs/conf/wool/)、[`build/oss`](/docs/conf/oss/)、[`build/dev`](/docs/conf/dev/) |
{.full-width}
