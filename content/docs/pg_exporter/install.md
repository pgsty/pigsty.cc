---
title: 安装指南
weight: 5620
icon: fas fa-download
description: 如何下载和安装 PG Exporter
categories: [任务]
---

PG Exporter 提供多种安装方式以适应不同的部署场景。本指南涵盖了各平台的所有可用安装选项及详细说明。


--------

## Pigsty

最简单的使用 `pg_exporter` 的方式是使用 [Pigsty](https://pigsty.cc)，这是一个完整的 PostgreSQL 发行版，内置了基于 `pg_exporter`、Prometheus 和 Grafana 的可观测性最佳实践。您甚至不需要了解 `pg_exporter` 的任何细节，它会直接为您提供所有指标和仪表盘面板。

```bash
curl -fsSL https://repo.pigsty.io/get | bash; cd ~/pigsty;
```


--------

## 发布版本

您也可以直接从 [GitHub 发布页面](https://github.com/pgsty/pg_exporter/releases/latest) 下载 `pg_exporter` 软件包（`RPM`/`DEB`/Tarball）：

**v1.1.1 发布文件：**

| 类型                      | 文件                                                                                                                                               |
|-------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------|
| DEB (amd64)             | [pg-exporter_1.1.1-1_amd64.deb](https://github.com/pgsty/pg_exporter/releases/download/v1.1.1/pg-exporter_1.1.1-1_amd64.deb)                     |
| DEB (arm64)             | [pg-exporter_1.1.1-1_arm64.deb](https://github.com/pgsty/pg_exporter/releases/download/v1.1.1/pg-exporter_1.1.1-1_arm64.deb)                     |
| DEB (ppc64le)           | [pg-exporter_1.1.1-1_ppc64le.deb](https://github.com/pgsty/pg_exporter/releases/download/v1.1.1/pg-exporter_1.1.1-1_ppc64le.deb)                 |
| RPM (aarch64)           | [pg_exporter-1.1.1-1.aarch64.rpm](https://github.com/pgsty/pg_exporter/releases/download/v1.1.1/pg_exporter-1.1.1-1.aarch64.rpm)                 |
| RPM (x86_64)            | [pg_exporter-1.1.1-1.x86_64.rpm](https://github.com/pgsty/pg_exporter/releases/download/v1.1.1/pg_exporter-1.1.1-1.x86_64.rpm)                   |
| RPM (ppc64le)           | [pg_exporter-1.1.1-1.ppc64le.rpm](https://github.com/pgsty/pg_exporter/releases/download/v1.1.1/pg_exporter-1.1.1-1.ppc64le.rpm)                 |
| Tarball (Linux amd64)   | [pg_exporter-1.1.1.linux-amd64.tar.gz](https://github.com/pgsty/pg_exporter/releases/download/v1.1.1/pg_exporter-1.1.1.linux-amd64.tar.gz)       |
| Tarball (Linux arm64)   | [pg_exporter-1.1.1.linux-arm64.tar.gz](https://github.com/pgsty/pg_exporter/releases/download/v1.1.1/pg_exporter-1.1.1.linux-arm64.tar.gz)       |
| Tarball (Linux ppc64le) | [pg_exporter-1.1.1.linux-ppc64le.tar.gz](https://github.com/pgsty/pg_exporter/releases/download/v1.1.1/pg_exporter-1.1.1.linux-ppc64le.tar.gz)   |
| Tarball (macOS amd64)   | [pg_exporter-1.1.1.darwin-amd64.tar.gz](https://github.com/pgsty/pg_exporter/releases/download/v1.1.1/pg_exporter-1.1.1.darwin-amd64.tar.gz)     |
| Tarball (macOS arm64)   | [pg_exporter-1.1.1.darwin-arm64.tar.gz](https://github.com/pgsty/pg_exporter/releases/download/v1.1.1/pg_exporter-1.1.1.darwin-arm64.tar.gz)     |
| Tarball (Windows amd64) | [pg_exporter-1.1.1.windows-amd64.tar.gz](https://github.com/pgsty/pg_exporter/releases/download/v1.1.1/pg_exporter-1.1.1.windows-amd64.tar.gz)   |
{.full-width}

您可以直接使用操作系统的包管理器（`rpm`/`dpkg`）安装，或者将二进制文件放入 `$PATH` 中。


--------

## 软件仓库

pg_exporter 软件包也可以在 [`pigsty-infra`](https://ext.pgsty.com/repo/infra) 仓库中获取。您可以将该仓库添加到系统中，然后使用操作系统包管理器安装：

### YUM

适用于 RHEL、RockyLinux、CentOS、Alma Linux、OracleLinux 等 EL 系发行版：

```bash
sudo tee /etc/yum.repos.d/pigsty-infra.repo > /dev/null <<-'EOF'
[pigsty-infra]
name=Pigsty Infra for $basearch
baseurl=https://repo.pigsty.io/yum/infra/$basearch
enabled = 1
gpgcheck = 0
module_hotfixes=1
EOF

sudo yum makecache;
sudo yum install -y pg_exporter
```

### APT

适用于 Debian、Ubuntu 及兼容的 Linux 发行版：

```bash
sudo tee /etc/apt/sources.list.d/pigsty-infra.list > /dev/null <<EOF
deb [trusted=yes] https://repo.pigsty.io/apt/infra generic main
EOF

sudo apt update;
sudo apt install -y pg-exporter
```


--------

## Docker

我们在 Docker Hub 上提供了 `amd64` 和 `arm64` 架构的预构建镜像：[pgsty/pg_exporter](https://hub.docker.com/r/pgsty/pg_exporter)。

```bash
# 基本用法
docker run -d \
  --name pg_exporter \
  -p 9630:9630 \
  -e PG_EXPORTER_URL="postgres://user:password@host:5432/postgres" \
  pgsty/pg_exporter:latest

# 使用自定义配置
docker run -d \
  --name pg_exporter \
  -p 9630:9630 \
  -v /path/to/pg_exporter.yml:/etc/pg_exporter.yml:ro \
  -e PG_EXPORTER_CONFIG="/etc/pg_exporter.yml" \
  -e PG_EXPORTER_URL="postgres://user:password@host:5432/postgres" \
  pgsty/pg_exporter:latest

# 启用自动发现
docker run -d \
  --name pg_exporter \
  -p 9630:9630 \
  -e PG_EXPORTER_URL="postgres://user:password@host:5432/postgres" \
  -e PG_EXPORTER_AUTO_DISCOVERY="true" \
  -e PG_EXPORTER_EXCLUDE_DATABASE="template0,template1" \
  pgsty/pg_exporter:latest
```


--------

## 二进制安装

`pg_exporter` 可以作为独立的二进制文件安装。从发布页面下载适合您平台的 tarball，解压后将二进制文件放入 `$PATH` 即可使用。


--------

## 兼容性

当前 pg_exporter 支持 PostgreSQL 10 及以上版本，但设计上可以兼容任何 PostgreSQL 主版本（向下兼容到 9.x）。

使用旧版本（9.6 及以下）的唯一问题是，由于这些版本已停止维护，我们移除了对应的旧版指标采集器分支定义。

您可以随时获取这些旧版配置文件，用于监控历史版本的 PostgreSQL。

| PostgreSQL 版本 | 支持状态      |
|---------------|-----------|
| 10 ~ 18       | ✅ 完全支持    |
| 9.6 及更早       | ⚠️ 需要旧版配置 |
{.full-width}

pg_exporter 支持 pgBouncer 1.8+，因为 `v1.8` 是第一个支持 `SHOW` 命令的版本。

| pgBouncer 版本   | 支持状态   |
|----------------|--------|
| 1.8.x ~ 1.25.x | ✅ 完全支持 |
| 1.8.x 之前       | ⚠️ 无指标 |
{.full-width}
