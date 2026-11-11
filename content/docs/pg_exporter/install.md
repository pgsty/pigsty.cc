---
title: 安装指南
weight: 5620
icon: fas fa-download
description: 如何下载和安装 PG Exporter
categories: [任务]
---

`pg_exporter` 可以通过 Pigsty、YUM/APT 仓库、GitHub 发布包（RPM/DEB/Tarball）、Docker 镜像或源码构建安装，按你的基础设施任选一种即可。

软件仓库安装使用仓库当前提供的包，可能晚于 GitHub Release。需要精确安装 v1.6.1 时，使用下方带版本号的发布制品。

## Pigsty {#pigsty}

最简单的使用 `pg_exporter` 的方式是使用 [Pigsty](https://pigsty.cc)。Pigsty 内置了基于 `pg_exporter`、VictoriaMetrics（Prometheus 兼容指标抓取与查询）和 Grafana 的 PostgreSQL 可观测性方案；部署后即可使用预置指标、规则与仪表盘。

```bash
curl -fsSL https://repo.pigsty.io/get | bash; cd ~/pigsty;
```

## 发布版本 {#release}

您也可以直接从 [GitHub 发布页面](https://github.com/pgsty/pg_exporter/releases/latest) 下载 `pg_exporter` 软件包（`RPM`/`DEB`/Tarball）：

**v1.6.1 发布文件：**

| 类型                      | 文件                                                                                                                                               |
|-------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------|
| DEB (amd64)             | [pg-exporter_1.6.1-1_amd64.deb](https://github.com/pgsty/pg_exporter/releases/download/v1.6.1/pg-exporter_1.6.1-1_amd64.deb)                     |
| DEB (arm64)             | [pg-exporter_1.6.1-1_arm64.deb](https://github.com/pgsty/pg_exporter/releases/download/v1.6.1/pg-exporter_1.6.1-1_arm64.deb)                     |
| DEB (ppc64le)           | [pg-exporter_1.6.1-1_ppc64le.deb](https://github.com/pgsty/pg_exporter/releases/download/v1.6.1/pg-exporter_1.6.1-1_ppc64le.deb)                 |
| RPM (aarch64)           | [pg-exporter-1.6.1-1.aarch64.rpm](https://github.com/pgsty/pg_exporter/releases/download/v1.6.1/pg-exporter-1.6.1-1.aarch64.rpm)                 |
| RPM (x86_64)            | [pg-exporter-1.6.1-1.x86_64.rpm](https://github.com/pgsty/pg_exporter/releases/download/v1.6.1/pg-exporter-1.6.1-1.x86_64.rpm)                   |
| RPM (ppc64le)           | [pg-exporter-1.6.1-1.ppc64le.rpm](https://github.com/pgsty/pg_exporter/releases/download/v1.6.1/pg-exporter-1.6.1-1.ppc64le.rpm)                 |
| Tarball (Linux amd64)   | [pg_exporter-1.6.1.linux-amd64.tar.gz](https://github.com/pgsty/pg_exporter/releases/download/v1.6.1/pg_exporter-1.6.1.linux-amd64.tar.gz)       |
| Tarball (Linux arm64)   | [pg_exporter-1.6.1.linux-arm64.tar.gz](https://github.com/pgsty/pg_exporter/releases/download/v1.6.1/pg_exporter-1.6.1.linux-arm64.tar.gz)       |
| Tarball (Linux ppc64le) | [pg_exporter-1.6.1.linux-ppc64le.tar.gz](https://github.com/pgsty/pg_exporter/releases/download/v1.6.1/pg_exporter-1.6.1.linux-ppc64le.tar.gz)   |
| Tarball (macOS amd64)   | [pg_exporter-1.6.1.darwin-amd64.tar.gz](https://github.com/pgsty/pg_exporter/releases/download/v1.6.1/pg_exporter-1.6.1.darwin-amd64.tar.gz)     |
| Tarball (macOS arm64)   | [pg_exporter-1.6.1.darwin-arm64.tar.gz](https://github.com/pgsty/pg_exporter/releases/download/v1.6.1/pg_exporter-1.6.1.darwin-arm64.tar.gz)     |
| Tarball (Windows amd64) | [pg_exporter-1.6.1.windows-amd64.tar.gz](https://github.com/pgsty/pg_exporter/releases/download/v1.6.1/pg_exporter-1.6.1.windows-amd64.tar.gz)   |
{.full-width .wide .expand}

您可以直接使用操作系统的包管理器（`rpm`/`dpkg`）安装，或者将二进制文件放入 `$PATH` 中。当前归档文件还会附带 `pg_exporter.yml`、`package/pg_exporter.default`、`package/pg_exporter.service` 与 `LICENSE`，便于按 tarball 手工部署。

> [!NOTE] RPM 包名变更
> 自 `v1.4.1` 起，官方 RPM 的包名及文件名前缀由 `pg_exporter` 统一为 `pg-exporter`，与 DEB 及仓库安装命令保持一致。新 RPM 同时声明兼容并替换旧包名 `pg_exporter`，可直接从旧版升级。

完整 SHA256 校验信息见发布页面中的 `checksums.txt`；具体版本的校验和也会在 [发布注记](/docs/pg_exporter/release/) 中归档。

## 软件仓库 {#repository}

pg_exporter 软件包也可以在 [`pigsty-infra`](https://ext.pgsty.com/repo/infra) 仓库中获取。您可以将该仓库添加到系统中，然后使用操作系统包管理器安装：

### YUM {#yum}

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
sudo yum install -y pg-exporter
```

### APT {#apt}

适用于 Debian、Ubuntu 及兼容的 Linux 发行版：

```bash
sudo tee /etc/apt/sources.list.d/pigsty-infra.list > /dev/null <<EOF
deb [trusted=yes] https://repo.pigsty.io/apt/infra generic main
EOF

sudo apt update;
sudo apt install -y pg-exporter
```

## Docker {#docker}

我们在 Docker Hub 上提供了 `amd64` 和 `arm64` 架构的预构建镜像：[pgsty/pg_exporter](https://hub.docker.com/r/pgsty/pg_exporter)。

```bash
# 基本用法
docker run -d \
  --name pg_exporter \
  -p 9630:9630 \
  -e PG_EXPORTER_URL="postgres://user:password@host:5432/postgres" \
  pgsty/pg_exporter:1.6.1

# 使用自定义配置
docker run -d \
  --name pg_exporter \
  -p 9630:9630 \
  -v /path/to/pg_exporter.yml:/etc/pg_exporter.yml:ro \
  -e PG_EXPORTER_CONFIG="/etc/pg_exporter.yml" \
  -e PG_EXPORTER_URL="postgres://user:password@host:5432/postgres" \
  pgsty/pg_exporter:1.6.1

# 启用自动发现
docker run -d \
  --name pg_exporter \
  -p 9630:9630 \
  -e PG_EXPORTER_URL="postgres://user:password@host:5432/postgres" \
  -e PG_EXPORTER_AUTO_DISCOVERY="true" \
  -e PG_EXPORTER_EXCLUDE_DATABASE="template0,template1" \
  pgsty/pg_exporter:1.6.1
```

> [!WARNING] 注意
> 镜像基于 `scratch`，包含系统 CA 证书包与许可证，但没有 shell。公共受信任证书可使用内置根证书；使用私有 CA 且启用 `sslmode=verify-ca` 或 `verify-full` 时，仍需挂载私有 CA 并设置 `sslrootcert`。

## 兼容性 {#compatibility}

当前默认配置支持 PostgreSQL 10-19+。
对于 EOL 旧版本 PostgreSQL，使用 [main 分支单独维护的 legacy 配置包](https://github.com/pgsty/pg_exporter/tree/main/legacy)。它不包含在二进制压缩包或 RPM／DEB 中，需要独立下载。

| PostgreSQL 版本 | 支持状态                           |
|---------------|--------------------------------|
| 10 ~ 19+      | ✅ 完全支持（默认配置）                   |
| 9.1 ~ 9.6     | ⚠️ 使用 `legacy/pg_exporter.yml` |
| 9.0 及更早       | ❌ 不支持                          |
{.full-width}

启用 Legacy 配置示例：

```bash
curl -fSL https://raw.githubusercontent.com/pgsty/pg_exporter/v1.6.1/legacy/pg_exporter.yml -o pg_exporter-legacy.yml
PG_EXPORTER_CONFIG=pg_exporter-legacy.yml pg_exporter
```

PostgreSQL 9.1 可使用上面固定版本的配置，或 main 上 `282e19d` 及之后的版本。该修复已纳入 v1.6.1 源码标签，解决无 TOAST 表触发 OID 0 错误、整组表大小指标缺失的问题；v1.6.0 及更早源码标签不含此修复。

pg_exporter 的内置采集器支持 pgBouncer 1.8+；这些采集器使用的 `SHOW STATS` 字段从 1.8 开始可用。

| pgBouncer 版本   | 支持状态   |
|----------------|--------|
| 1.8.x ~ 1.26+  | ✅ 完全支持 |
| 1.8.x 之前       | ⚠️ 无指标 |
{.full-width}
