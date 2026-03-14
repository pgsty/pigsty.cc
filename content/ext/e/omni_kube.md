---
title: "omni_kube"
linkTitle: "omni_kube"
description: "Omnigres Kubernetes集成模块"
weight: 2954
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://docs.omnigres.org/omni_kube/api/">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">https://docs.omnigres.org/omni_kube/api/</div>
    <div class="ext-card__desc">https://docs.omnigres.org/omni_kube/api/</div>
  </a>
  <a class="ext-card ext-card--source" href="https://repo.pigsty.cc/ext/src/omnigres-20251108.tar.gz">
    <div class="ext-card__kicker">源码</div>
    <div class="ext-card__title">omnigres-20251108.tar.gz</div>
    <div class="ext-card__desc">omnigres-20251108.tar.gz</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`omnigres`**](/ext/e/omni) | `0.4.2` | <a class="ext-badge ext-badge--cate feat" href="/ext/cate/feat">FEAT</a> | <a class="ext-badge ext-badge--license apache20" href="/ext/license#apache20">Apache-2.0</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 2940  | [**`omni`**](/ext/e/omni) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | `omni` |
| 2941  | [**`omni_auth`**](/ext/e/omni_auth) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | `omni_auth` |
| 2942  | [**`omni_aws`**](/ext/e/omni_aws) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | `omni_aws` |
| 2943  | [**`omni_cloudevents`**](/ext/e/omni_cloudevents) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | `omni_cloudevents` |
| 2944  | [**`omni_containers`**](/ext/e/omni_containers) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | `omni_containers` |
| 2945  | [**`omni_credentials`**](/ext/e/omni_credentials) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | `omni_credentials` |
| 2948  | [**`omni_email`**](/ext/e/omni_email) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | `omni_email` |
| 2949  | [**`omni_http`**](/ext/e/omni_http) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | `omni_http` |
| 2950  | [**`omni_httpc`**](/ext/e/omni_httpc) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | `omni_httpc` |
| 2951  | [**`omni_httpd`**](/ext/e/omni_httpd) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | `omni_httpd` |
| 2952  | [**`omni_id`**](/ext/e/omni_id) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | - |
| 2953  | [**`omni_json`**](/ext/e/omni_json) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | `omni_json` |
| 2954  | [**`omni_kube`**](/ext/e/omni_kube) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | `omni_kube` |
| 2955  | [**`omni_ledger`**](/ext/e/omni_ledger) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | `omni_ledger` |
| 2956  | [**`omni_manifest`**](/ext/e/omni_manifest) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | `omni_manifest` |
| 2957  | [**`omni_mimetypes`**](/ext/e/omni_mimetypes) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | `omni_mimetypes` |
| 2958  | [**`omni_os`**](/ext/e/omni_os) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | `omni_os` |
| 2959  | [**`omni_polyfill`**](/ext/e/omni_polyfill) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | `omni_polyfill` |
| 2960  | [**`omni_python`**](/ext/e/omni_python) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | `omni_python` |
| 2961  | [**`omni_regex`**](/ext/e/omni_regex) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | - |
| 2962  | [**`omni_rest`**](/ext/e/omni_rest) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | `omni_rest` |
| 2963  | [**`omni_schema`**](/ext/e/omni_schema) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | `omni_schema` |
| 2964  | [**`omni_seq`**](/ext/e/omni_seq) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | `omni_seq` |
| 2965  | [**`omni_service`**](/ext/e/omni_service) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | `omni_service` |
| 2966  | [**`omni_session`**](/ext/e/omni_session) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | `omni_session` |
| 2968  | [**`omni_sql`**](/ext/e/omni_sql) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | `omni_sql` |
| 2969  | [**`omni_sqlite`**](/ext/e/omni_sqlite) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | `omni_sqlite` |
| 2970  | [**`omni_test`**](/ext/e/omni_test) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | `omni_test` |
| 2971  | [**`omni_txn`**](/ext/e/omni_txn) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | `omni_txn` |
| 2972  | [**`omni_types`**](/ext/e/omni_types) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | `omni_types` |
| 2973  | [**`omni_var`**](/ext/e/omni_var) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | `omni_var` |
| 2974  | [**`omni_vfs`**](/ext/e/omni_vfs) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | `omni_vfs` |
| 2975  | [**`omni_vfs_types_v1`**](/ext/e/omni_vfs_types_v1) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | `omni_vfs_types_v1` |
| 2976  | [**`omni_web`**](/ext/e/omni_web) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | `omni_web` |
| 2977  | [**`omni_worker`**](/ext/e/omni_worker) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | `omni_worker` |
| 2978  | [**`omni_xml`**](/ext/e/omni_xml) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | `omni_xml` |
| 2979  | [**`omni_yaml`**](/ext/e/omni_yaml) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--no">否</span> | `omni_yaml` |
{.ext-table}

| **相关扩展** | [`omni_httpc`](/ext/e/omni_httpc) [`omni_web`](/ext/e/omni_web) [`omni_var`](/ext/e/omni_var) [`omni_yaml`](/ext/e/omni_yaml) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#feat) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.4.2` | {{< pgvers "18,17,16,15,14" >}} | `omnigres` | `omni_httpc`, `omni_web`, `omni_var`, `omni_yaml` |
| [**RPM**](/ext/rpm#feat) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.4.2` | {{< pgvers "18,17,16,15,14" >}} | `omnigres_$v` | - |
| [**DEB**](/ext/deb#feat) | <a class="ext-badge ext-badge--repo pigsty" href="/ext/repo#pigsty">PIGSTY</a> | `0.4.2` | {{< pgvers "18,17,16,15,14" >}} | `postgresql-$v-omnigres` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | MISS PIGSTY - 0 | AVAIL PIGSTY 20250120 1 | AVAIL PIGSTY 20250120 1 | AVAIL PIGSTY 20250120 1 | AVAIL PIGSTY 20250120 1 |
| el8.aarch64 | MISS PIGSTY - 0 | AVAIL PIGSTY 20250120 1 | AVAIL PIGSTY 20250120 1 | AVAIL PIGSTY 20250120 1 | AVAIL PIGSTY 20250120 1 |
| el9.x86_64 | MISS PIGSTY - 0 | AVAIL PIGSTY 20250507 1 | AVAIL PIGSTY 20250507 1 | AVAIL PIGSTY 20250507 1 | AVAIL PIGSTY 20250507 1 |
| el9.aarch64 | MISS PIGSTY - 0 | AVAIL PIGSTY 20250507 1 | AVAIL PIGSTY 20250507 1 | AVAIL PIGSTY 20250507 1 | AVAIL PIGSTY 20250507 1 |
| el10.x86_64 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| el10.aarch64 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 | MISS PIGSTY - 0 |
| d12.x86_64 | MISS PIGSTY - 0 | AVAIL PIGSTY 20250120 1 | AVAIL PIGSTY 20250120 1 | AVAIL PIGSTY 20250120 1 | AVAIL PIGSTY 20250120 1 |
| d12.aarch64 | MISS PIGSTY - 0 | AVAIL PIGSTY 20250120 1 | AVAIL PIGSTY 20250120 1 | AVAIL PIGSTY 20250120 1 | AVAIL PIGSTY 20250120 1 |
| d13.x86_64 | AVAIL PIGSTY 20251108 1 | AVAIL PIGSTY 20251108 1 | AVAIL PIGSTY 20251108 1 | AVAIL PIGSTY 20251108 1 | AVAIL PIGSTY 20251108 1 |
| d13.aarch64 | AVAIL PIGSTY 20251108 1 | AVAIL PIGSTY 20251108 1 | AVAIL PIGSTY 20251108 1 | AVAIL PIGSTY 20251108 1 | AVAIL PIGSTY 20251108 1 |
| u22.x86_64 | MISS PIGSTY - 0 | AVAIL PIGSTY 20250120 1 | AVAIL PIGSTY 20250120 1 | AVAIL PIGSTY 20250120 1 | AVAIL PIGSTY 20250120 1 |
| u22.aarch64 | MISS PIGSTY - 0 | AVAIL PIGSTY 20250120 1 | AVAIL PIGSTY 20250120 1 | AVAIL PIGSTY 20250120 1 | AVAIL PIGSTY 20250120 1 |
| u24.x86_64 | AVAIL PIGSTY 20251108 1 | AVAIL PIGSTY 20251108 1 | AVAIL PIGSTY 20251108 1 | AVAIL PIGSTY 20251108 1 | AVAIL PIGSTY 20251108 1 |
| u24.aarch64 | AVAIL PIGSTY 20251108 1 | AVAIL PIGSTY 20251108 1 | AVAIL PIGSTY 20251108 1 | AVAIL PIGSTY 20251108 1 | AVAIL PIGSTY 20251108 1 |
{{< /pgext_matrix >}}

## 构建

您可以使用 `pig build` 命令构建 `omnigres` 扩展的 RPM / DEB 包：

```bash
pig build pkg omnigres         # 构建 RPM / DEB 包
```


## 安装

您可以直接安装 `omnigres` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 和 [**PIGSTY**](/docs/repo/pgsql) 仓库已经添加并启用：

```bash
pig repo add pgsql -u          # 添加仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install omnigres;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y omnigres -v 18  # PG 18
pig ext install -y omnigres -v 17  # PG 17
pig ext install -y omnigres -v 16  # PG 16
pig ext install -y omnigres -v 15  # PG 15
pig ext install -y omnigres -v 14  # PG 14
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y omnigres_18       # PG 18
dnf install -y omnigres_17       # PG 17
dnf install -y omnigres_16       # PG 16
dnf install -y omnigres_15       # PG 15
dnf install -y omnigres_14       # PG 14
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-omnigres   # PG 18
apt install -y postgresql-17-omnigres   # PG 17
apt install -y postgresql-16-omnigres   # PG 16
apt install -y postgresql-15-omnigres   # PG 15
apt install -y postgresql-14-omnigres   # PG 14
```
{{% /tab %}}
{{< /tabpane >}}


**创建扩展**：

```sql
CREATE EXTENSION omni_kube CASCADE;  -- 依赖: omni_httpc, omni_web, omni_var, omni_yaml
```




## 用法

> [omni_kube: Kubernetes（k8s）集成](https://docs.omnigres.org/omni_kube/api/)

`omni_kube` 扩展从 PostgreSQL 提供 Kubernetes API 集成。依赖 `omni_httpc`、`omni_web`、`omni_var` 和 `omni_yaml`。

该扩展支持直接从 SQL 与 Kubernetes 集群交互，通过 `omni_httpc` 提供的 HTTP 客户端查询和管理 Kubernetes 资源。
