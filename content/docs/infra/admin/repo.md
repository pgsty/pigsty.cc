---
title: 软件仓库
weight: 3104
description: 管理本地 APT/YUM 软件仓库
icon: fa-solid fa-box-archive
categories: [任务]
---


Pigsty 支持创建和管理本地 APT/YUM 软件仓库，用于在离线环境中部署或加速软件包安装。

----------------

## 快速开始

向本地仓库添加软件包：

1. 将软件包添加到 [`repo_packages`](/docs/infra/param#repo_packages)（默认软件包）
2. 将软件包添加到 [`repo_extra_packages`](/docs/infra/param#repo_extra_packages)（额外软件包）
3. 执行构建命令：

```bash
./infra.yml -t repo_build   # 从上游构建本地仓库
./node.yml -t node_repo     # 刷新节点仓库缓存
```


----------------

## 软件包别名

Pigsty 预定义了常用的软件包组合，方便批量安装：

### EL 系统（RHEL/CentOS/Rocky）

| 别名               | 说明                                 |
|------------------|------------------------------------|
| `node-bootstrap` | Ansible、Python3 工具、SSH 相关          |
| `infra-package`  | Nginx、etcd、HAProxy、监控导出器、MinIO 等   |
| `pgsql-utility`  | Patroni、pgBouncer、pgBackRest、PG 工具 |
| `pgsql`          | 完整 PostgreSQL（服务端、客户端、扩展）          |
| `pgsql-mini`     | 最小化 PostgreSQL 安装                  |
{.full-width}

### Debian/Ubuntu 系统

| 别名               | 说明                     |
|------------------|------------------------|
| `node-bootstrap` | Ansible、开发工具           |
| `infra-package`  | 基础设施组件（使用 Debian 命名规范） |
| `pgsql-client`   | PostgreSQL 客户端         |
| `pgsql-server`   | PostgreSQL 服务端及相关包     |
{.full-width}




----------------

## 剧本任务

### 主要任务

| 任务              | 说明                 |
|-----------------|--------------------|
| `repo`          | 从互联网或离线包创建本地仓库     |
| `repo_build`    | 如不存在则从上游构建         |
| `repo_upstream` | 添加上游仓库文件           |
| `repo_pkg`      | 下载软件包及依赖           |
| `repo_create`   | 创建/更新 YUM 或 APT 仓库 |
| `repo_nginx`    | 启动 Nginx 文件服务器     |
{.full-width}

### 完整任务列表

```bash
./infra.yml -t repo_dir          # 创建本地软件仓库目录
./infra.yml -t repo_check        # 检查本地仓库是否存在
./infra.yml -t repo_prepare      # 直接使用已有仓库
./infra.yml -t repo_build        # 从上游构建仓库
./infra.yml -t repo_upstream     # 添加上游仓库
./infra.yml -t repo_remove       # 删除现有仓库文件
./infra.yml -t repo_add          # 添加仓库到系统目录
./infra.yml -t repo_url_pkg      # 从互联网下载包
./infra.yml -t repo_cache        # 创建元数据缓存
./infra.yml -t repo_boot_pkg     # 安装引导包
./infra.yml -t repo_pkg          # 下载包及依赖
./infra.yml -t repo_create       # 创建本地仓库
./infra.yml -t repo_use          # 添加新建仓库到系统
./infra.yml -t repo_nginx        # 启动 Nginx 文件服务器
```


----------------

## 常用操作

### 添加新软件包

```bash
# 1. 配置上游仓库
./infra.yml -t repo_upstream

# 2. 下载软件包及依赖
./infra.yml -t repo_pkg

# 3. 构建本地仓库元数据
./infra.yml -t repo_create
```

### 刷新节点仓库

```bash
./node.yml -t node_repo    # 刷新所有节点的仓库缓存
```

### 完整重建仓库

```bash
./infra.yml -t repo        # 从互联网或离线包创建仓库
```
