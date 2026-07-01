---
title: "pg_stat_log"
linkTitle: "pg_stat_log"
description: "按后端类型、数据库、用户、日志级别与 SQLSTATE 统计 PostgreSQL 日志消息。"
weight: 6040
---

<div class="ext-cards">
  <a class="ext-card ext-card--repo" href="https://github.com/fabriziomello/pg_stat_log">
    <div class="ext-card__kicker">仓库</div>
    <div class="ext-card__title">fabriziomello/pg_stat_log</div>
    <div class="ext-card__desc">https://github.com/fabriziomello/pg_stat_log</div>
  </a>
</div>


---------

## 概览

| **扩展包名** | **版本** | **分类** | **许可证** | **语言** |
|:---------------------------------------------------:|:-------:|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| [**`pg_stat_log`**](/ext/e/pg_stat_log) | `0.1` | <a class="ext-badge ext-badge--cate stat" href="/ext/cate/stat">STAT</a> | <a class="ext-badge ext-badge--license postgresql" href="/ext/license#postgresql">PostgreSQL</a> | <a class="ext-badge ext-badge--lang c" href="/ext/language#c">C</a> |
{.ext-table}

|  ID   | **扩展名** | **Bin** | **Lib** | **Load** | **Create** | **Trust** | **Reloc** | **模式** |
|:-----:|:-------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------|
| 6040  | [**`pg_stat_log`**](/ext/e/pg_stat_log) | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--yes">是</span> | <span class="ext-flag ext-flag--no">否</span> | <span class="ext-flag ext-flag--yes">是</span> | - |
{.ext-table}

| **相关扩展** | [`pg_stat_statements`](/ext/e/pg_stat_statements) [`pg_stat_monitor`](/ext/e/pg_stat_monitor) [`pg_stat_plans`](/ext/e/pg_stat_plans) |
|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
{.ext-table .ext-table--rel}


## 版本

| 类型 | 仓库 | 版本 | PG 大版本 | 包名 | 依赖 |
|:----:|:----:|:----:|:------:|:--------:|:----:|
| [**EXT**](/ext/list#stat) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `0.1` | {{< pgvers "18" >}} | `pg_stat_log` | - |
| [**RPM**](/ext/rpm#stat) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `0.1` | {{< pgvers "18" >}} | `pg_stat_log_$v` | - |
| [**DEB**](/ext/deb#stat) | <a class="ext-badge ext-badge--repo pgdg" href="/ext/repo#pgdg">PGDG</a> | `0.1` | {{< pgvers "18" >}} | `postgresql-$v-stat-log` | - |
{.ext-table}

{{< pgext_matrix >}}
| **OS / PG** | **PG18** | **PG17** | **PG16** | **PG15** | **PG14** |
|:--:|:--:|:--:|:--:|:--:|:--:|
| el8.x86_64 | AVAIL PGDG 0.1 1 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 |
| el8.aarch64 | AVAIL PGDG 0.1 1 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 |
| el9.x86_64 | AVAIL PGDG 0.1 3 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 |
| el9.aarch64 | AVAIL PGDG 0.1 3 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 |
| el10.x86_64 | AVAIL PGDG 0.1 3 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 |
| el10.aarch64 | AVAIL PGDG 0.1 3 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 |
| d12.x86_64 | AVAIL PGDG 0.1 2 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 |
| d12.aarch64 | AVAIL PGDG 0.1 2 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 |
| d13.x86_64 | AVAIL PGDG 0.1 2 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 |
| d13.aarch64 | AVAIL PGDG 0.1 2 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 |
| u22.x86_64 | AVAIL PGDG 0.1 2 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 |
| u22.aarch64 | AVAIL PGDG 0.1 2 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 |
| u24.x86_64 | AVAIL PGDG 0.1 2 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 |
| u24.aarch64 | AVAIL PGDG 0.1 2 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 |
| u26.x86_64 | AVAIL PGDG 0.1 2 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 |
| u26.aarch64 | AVAIL PGDG 0.1 2 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 | MISS PGDG - 0 |
@ el8.x86_64 18 pg_stat_log_18 pg_stat_log_18-0.1-1PGDG.rhel8.10.x86_64.rpm pgdg 0.1 23.2KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-x86_64/pg_stat_log_18-0.1-1PGDG.rhel8.10.x86_64.rpm
@ el8.aarch64 18 pg_stat_log_18 pg_stat_log_18-0.1-1PGDG.rhel8.10.aarch64.rpm pgdg 0.1 23.1KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-8-aarch64/pg_stat_log_18-0.1-1PGDG.rhel8.10.aarch64.rpm
@ el9.x86_64 18 pg_stat_log_18 pg_stat_log_18-0.1-1PGDG.rhel9.8.x86_64.rpm pgdg 0.1 23.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/pg_stat_log_18-0.1-1PGDG.rhel9.8.x86_64.rpm
@ el9.x86_64 18 pg_stat_log_18 pg_stat_log_18-0.1-1PGDG.rhel9.7.x86_64.rpm pgdg 0.1 23.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/pg_stat_log_18-0.1-1PGDG.rhel9.7.x86_64.rpm
@ el9.x86_64 18 pg_stat_log_18 pg_stat_log_18-0.1-1PGDG.rhel9.6.x86_64.rpm pgdg 0.1 23.6KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-x86_64/pg_stat_log_18-0.1-1PGDG.rhel9.6.x86_64.rpm
@ el9.aarch64 18 pg_stat_log_18 pg_stat_log_18-0.1-1PGDG.rhel9.8.aarch64.rpm pgdg 0.1 23.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/pg_stat_log_18-0.1-1PGDG.rhel9.8.aarch64.rpm
@ el9.aarch64 18 pg_stat_log_18 pg_stat_log_18-0.1-1PGDG.rhel9.7.aarch64.rpm pgdg 0.1 23.4KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/pg_stat_log_18-0.1-1PGDG.rhel9.7.aarch64.rpm
@ el9.aarch64 18 pg_stat_log_18 pg_stat_log_18-0.1-1PGDG.rhel9.6.aarch64.rpm pgdg 0.1 23.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-9-aarch64/pg_stat_log_18-0.1-1PGDG.rhel9.6.aarch64.rpm
@ el10.x86_64 18 pg_stat_log_18 pg_stat_log_18-0.1-1PGDG.rhel10.2.x86_64.rpm pgdg 0.1 23.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/pg_stat_log_18-0.1-1PGDG.rhel10.2.x86_64.rpm
@ el10.x86_64 18 pg_stat_log_18 pg_stat_log_18-0.1-1PGDG.rhel10.1.x86_64.rpm pgdg 0.1 23.5KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/pg_stat_log_18-0.1-1PGDG.rhel10.1.x86_64.rpm
@ el10.x86_64 18 pg_stat_log_18 pg_stat_log_18-0.1-1PGDG.rhel10.0.x86_64.rpm pgdg 0.1 23.9KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-x86_64/pg_stat_log_18-0.1-1PGDG.rhel10.0.x86_64.rpm
@ el10.aarch64 18 pg_stat_log_18 pg_stat_log_18-0.1-1PGDG.rhel10.2.aarch64.rpm pgdg 0.1 23.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/pg_stat_log_18-0.1-1PGDG.rhel10.2.aarch64.rpm
@ el10.aarch64 18 pg_stat_log_18 pg_stat_log_18-0.1-1PGDG.rhel10.1.aarch64.rpm pgdg 0.1 23.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/pg_stat_log_18-0.1-1PGDG.rhel10.1.aarch64.rpm
@ el10.aarch64 18 pg_stat_log_18 pg_stat_log_18-0.1-1PGDG.rhel10.0.aarch64.rpm pgdg 0.1 23.7KiB https://mirrors.aliyun.com/postgresql/repos/yum/18/redhat/rhel-10-aarch64/pg_stat_log_18-0.1-1PGDG.rhel10.0.aarch64.rpm
@ d12.x86_64 18 postgresql-18-stat-log postgresql-18-stat-log_0.1-2.pgdg12+1_amd64.deb pgdg 0.1 42.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-stat-log/postgresql-18-stat-log_0.1-2.pgdg12+1_amd64.deb
@ d12.x86_64 18 postgresql-18-stat-log postgresql-18-stat-log_0.1-1.pgdg12+1_amd64.deb pgdg 0.1 42.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-stat-log/postgresql-18-stat-log_0.1-1.pgdg12+1_amd64.deb
@ d12.aarch64 18 postgresql-18-stat-log postgresql-18-stat-log_0.1-2.pgdg12+1_arm64.deb pgdg 0.1 42.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-stat-log/postgresql-18-stat-log_0.1-2.pgdg12+1_arm64.deb
@ d12.aarch64 18 postgresql-18-stat-log postgresql-18-stat-log_0.1-1.pgdg12+1_arm64.deb pgdg 0.1 42.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-stat-log/postgresql-18-stat-log_0.1-1.pgdg12+1_arm64.deb
@ d13.x86_64 18 postgresql-18-stat-log postgresql-18-stat-log_0.1-2.pgdg13+1_amd64.deb pgdg 0.1 42.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-stat-log/postgresql-18-stat-log_0.1-2.pgdg13+1_amd64.deb
@ d13.x86_64 18 postgresql-18-stat-log postgresql-18-stat-log_0.1-1.pgdg13+1_amd64.deb pgdg 0.1 42.1KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-stat-log/postgresql-18-stat-log_0.1-1.pgdg13+1_amd64.deb
@ d13.aarch64 18 postgresql-18-stat-log postgresql-18-stat-log_0.1-2.pgdg13+1_arm64.deb pgdg 0.1 42.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-stat-log/postgresql-18-stat-log_0.1-2.pgdg13+1_arm64.deb
@ d13.aarch64 18 postgresql-18-stat-log postgresql-18-stat-log_0.1-1.pgdg13+1_arm64.deb pgdg 0.1 42.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-stat-log/postgresql-18-stat-log_0.1-1.pgdg13+1_arm64.deb
@ u22.x86_64 18 postgresql-18-stat-log postgresql-18-stat-log_0.1-2.pgdg22.04+1_amd64.deb pgdg 0.1 42.7KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-stat-log/postgresql-18-stat-log_0.1-2.pgdg22.04+1_amd64.deb
@ u22.x86_64 18 postgresql-18-stat-log postgresql-18-stat-log_0.1-1.pgdg22.04+1_amd64.deb pgdg 0.1 42.6KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-stat-log/postgresql-18-stat-log_0.1-1.pgdg22.04+1_amd64.deb
@ u22.aarch64 18 postgresql-18-stat-log postgresql-18-stat-log_0.1-2.pgdg22.04+1_arm64.deb pgdg 0.1 42.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-stat-log/postgresql-18-stat-log_0.1-2.pgdg22.04+1_arm64.deb
@ u22.aarch64 18 postgresql-18-stat-log postgresql-18-stat-log_0.1-1.pgdg22.04+1_arm64.deb pgdg 0.1 42.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-stat-log/postgresql-18-stat-log_0.1-1.pgdg22.04+1_arm64.deb
@ u24.x86_64 18 postgresql-18-stat-log postgresql-18-stat-log_0.1-2.pgdg24.04+1_amd64.deb pgdg 0.1 42.5KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-stat-log/postgresql-18-stat-log_0.1-2.pgdg24.04+1_amd64.deb
@ u24.x86_64 18 postgresql-18-stat-log postgresql-18-stat-log_0.1-1.pgdg24.04+1_amd64.deb pgdg 0.1 42.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-stat-log/postgresql-18-stat-log_0.1-1.pgdg24.04+1_amd64.deb
@ u24.aarch64 18 postgresql-18-stat-log postgresql-18-stat-log_0.1-2.pgdg24.04+1_arm64.deb pgdg 0.1 42.4KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-stat-log/postgresql-18-stat-log_0.1-2.pgdg24.04+1_arm64.deb
@ u24.aarch64 18 postgresql-18-stat-log postgresql-18-stat-log_0.1-1.pgdg24.04+1_arm64.deb pgdg 0.1 42.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-stat-log/postgresql-18-stat-log_0.1-1.pgdg24.04+1_arm64.deb
@ u26.x86_64 18 postgresql-18-stat-log postgresql-18-stat-log_0.1-2.pgdg26.04+1_amd64.deb pgdg 0.1 42.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-stat-log/postgresql-18-stat-log_0.1-2.pgdg26.04+1_amd64.deb
@ u26.x86_64 18 postgresql-18-stat-log postgresql-18-stat-log_0.1-1.pgdg26.04+1_amd64.deb pgdg 0.1 42.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-stat-log/postgresql-18-stat-log_0.1-1.pgdg26.04+1_amd64.deb
@ u26.aarch64 18 postgresql-18-stat-log postgresql-18-stat-log_0.1-2.pgdg26.04+1_arm64.deb pgdg 0.1 42.3KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-stat-log/postgresql-18-stat-log_0.1-2.pgdg26.04+1_arm64.deb
@ u26.aarch64 18 postgresql-18-stat-log postgresql-18-stat-log_0.1-1.pgdg26.04+1_arm64.deb pgdg 0.1 42.2KiB https://mirrors.aliyun.com/postgresql/repos/apt/pool/main/p/pg-stat-log/postgresql-18-stat-log_0.1-1.pgdg26.04+1_arm64.deb
{{< /pgext_matrix >}}


## 安装

您可以直接安装 `pg_stat_log` 扩展包的预置二进制包，首先确保 [**PGDG**](/docs/repo/pgdg) 仓库已经添加并启用：

```bash
pig repo add pgdg -u          # 添加 PGDG 仓库并更新缓存
```

使用 [**pig**](/docs/pig) 或者是 `apt/yum/dnf` 安装扩展：

{{< tabpane text=true persist=header >}}
{{% tab header="安装" %}}
```bash
pig install pg_stat_log;          # 当前活跃 PG 版本安装
```
{{% /tab %}}
{{% tab header="pig" %}}
```bash
pig ext install -y pg_stat_log -v 18  # PG 18
```
{{% /tab %}}
{{% tab header="dnf" %}}
```bash
dnf install -y pg_stat_log_18       # PG 18
```
{{% /tab %}}
{{% tab header="apt" %}}
```bash
apt install -y postgresql-18-stat-log   # PG 18
```
{{% /tab %}}
{{< /tabpane >}}


**预加载配置**：

```bash
shared_preload_libraries = '$libdir/pg_stat_log';
```


**创建扩展**：

```sql
CREATE EXTENSION pg_stat_log;
```
