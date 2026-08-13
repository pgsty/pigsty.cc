---
title: 软件仓库
weight: 3104
description: 使用 SOW 创建和维护 Pigsty 本地 RPM/APT 软件仓库，理解完成标记、ModuleMD 与强制重建语义。
icon: fa-solid fa-box-archive
categories: [任务]
---


Pigsty 的 REPO 角色会下载所需软件包，并在 `/www/pigsty` 创建可由 Nginx 提供服务的本地 YUM/APT 仓库。当前候选软件包版本为 **SOW 0.3.0**，源码统一使用 SOW 生成两类仓库元数据，不再分别调用 `createrepo_c`、`modifyrepo_c` 或 `dpkg-scanpackages`。


----------------

## 快速开始

将软件包加入 [`repo_packages`](/docs/infra/param#repo_packages) 或 [`repo_extra_packages`](/docs/infra/param#repo_extra_packages)，然后执行：

```bash
./infra.yml -t repo_build   # 仅当仓库不存在时下载并构建
./node.yml -t node_repo     # 刷新各节点的软件仓库配置与缓存
```

如果 `/www/pigsty/repo_complete` 已存在，默认 `repo_build` 会跳过构建。需要强制重建时必须显式覆盖：

```bash
./infra.yml -t repo_build -e repo_build=true
```

只重建已有软件包的元数据，不下载新包：

```bash
./infra.yml -t repo_create
```


----------------

## SOW 前置条件

`repo_create` 与 `cache_create` 都要求目标节点上已经安装 `sow`。全新在线构建会把 `infra` 自动加入 [`repo_modules`](/docs/infra/param#repo_modules)，从 Pigsty INFRA 上游仓库安装 SOW。

早于此次改造的离线包或本地仓库可能不含 SOW。使用旧介质重建前，应先刷新离线包/本地仓库，或从 Pigsty INFRA 仓库安装当前候选的 SOW 0.3.0；不能假定旧环境仍可回退到 `createrepo_c`。

全新安装时，如果 `/www` 不存在，角色会创建 `/data/nginx` 并令 `/www` 指向它；已经存在的目录或符号链接会被保留，不会被强制替换。


----------------

## 构建流程

| 任务 | 作用 |
|:---|:---|
| `repo_check` | 检查 `repo_complete`，判断本地仓库是否已完成 |
| `repo_prepare` | 配置并使用已有仓库 |
| `repo_dir` | 创建 `/www/pigsty` 与 ACME 目录 |
| `repo_upstream` | 备份/添加上游 YUM 或 APT 定义 |
| `repo_url_pkg` | 下载 URL 直链软件包 |
| `repo_cache` | 执行 `yum makecache` 或 `apt update` |
| `repo_boot_pkg` | 安装 `sow` 以及 RPM 平台所需的 `dnf-utils` / `yum-utils` |
| `repo_pkg` | 下载软件包及依赖 |
| `repo_create` | 执行 SOW，清理并原子发布仓库元数据 |
| `repo_use` | 写入本机的 Pigsty local repo 定义 |
| `repo_nginx` | 在没有现有服务时启动临时 Nginx |
{.full-width}

`repo_create` 的实际命令是：

```bash
sow create --pigsty --timeout 10m -- /www/pigsty
```

`--pigsty` 会清理不需要或容易冲突的软件包，并在元数据完整生成后再原子发布结果。典型结构如下：

```text
/www/pigsty/
├── *.rpm / *.deb
├── repodata/            # RPM 仓库
├── Packages             # APT 仓库
├── Packages.gz
└── repo_complete        # 仓库文件的 SHA-256 校验清单与完成标记
```

不要把 `repo_complete` 当作空哨兵文件；它包含 SHA-256 校验内容。该文件存在表示 SOW 已完整发布本地仓库元数据，但不证明远端镜像、签名仓库或离线包已经同步完成。


----------------

## DNF 模块流

Pigsty 不再为聚合本地仓库伪造 `modules.yaml` / ModuleMD 元数据。系统上游仓库保留原生 DNF 模块过滤；只有确实需要替代 EL 模块流的软件源，才在 `repo_upstream` 的 `meta` 中显式设置：

```yaml
- name: example
  module: pgsql
  # ... releases、arch、baseurl ...
  meta: { module_hotfixes: 1 }
```

Pigsty 聚合本地仓库自身会以 `module_hotfixes=1` 配置，避免本地 PostgreSQL 软件包被系统模块流隐藏。这与生成虚假的 ModuleMD 是两回事。


----------------

## 软件包别名

默认 [`repo_packages`](/docs/infra/param#repo_packages) 使用以下别名组：

```yaml
[node-bootstrap, infra-package, infra-addons, node-package1,
 node-package2, node-package3, pgsql-utility, extra-modules]
```

其中 `node-bootstrap` 包含 Ansible、Python 依赖、SOW 与 SSH 工具；`infra-package` 包含 Nginx、etcd、HAProxy、Victoria exporters、Redis/Valkey、Silo、`mcli`、SOW 与 Pig。具体包名会随操作系统映射，始终以 `roles/node_id/vars/<os>.<arch>.yml` 为准。


----------------

## 常用命令

```bash
./infra.yml -t repo                         # 检查、准备或构建，并启动仓库服务
./infra.yml -t repo_check,repo_prepare      # 只检查并使用已有仓库
./infra.yml -t repo_upstream                # 刷新上游仓库定义
./infra.yml -t repo_pkg                     # 下载配置的软件包及依赖
./infra.yml -t repo_create                  # 用 SOW 重建现有目录元数据
./infra.yml -t repo_build -e repo_build=true  # 强制执行完整构建阶段
./infra.yml -t repo_nginx                   # 配置/启动仓库 Nginx
./node.yml -t node_repo                     # 刷新受管节点仓库缓存
./cache.yml                                 # 用 SOW 重建元数据后制作离线包
```
