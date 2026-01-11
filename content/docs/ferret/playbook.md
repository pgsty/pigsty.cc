---
title: 管理剧本
weight: 4050
description: 可在 FERRET 模块中使用的 Ansible 剧本
icon: fa-solid fa-scroll
categories: [任务]
linkTitle: 管理剧本
---

Pigsty 提供了一个内置剧本 [`mongo.yml`](https://github.com/pgsty/pigsty/blob/main/mongo.yml) 用于在节点上安装 FerretDB。

**重要说明**：此剧本仅在定义了 [`mongo_seq`](/docs/ferret/param#mongo_seq) 参数的主机上执行。
对于未定义 `mongo_seq` 的主机，剧本会安全跳过所有任务，因此可以安全地在混合主机组上运行。


----------------

## `mongo.yml`

剧本地址：[`mongo.yml`](https://github.com/pgsty/pigsty/blob/main/mongo.yml)

功能说明：在定义了 `mongo_seq` 的目标主机上安装 MongoDB/FerretDB。

此剧本包含以下子任务：

| 子任务              | 说明                        |
|------------------|:--------------------------|
| `mongo_check`    | 检查 mongo 身份参数             |
| `mongo_dbsu`     | 创建操作系统用户 mongod           |
| `mongo_install`  | 安装 ferretdb RPM/DEB 包     |
| `mongo_purge`    | 清理现有 FerretDB（默认不执行）      |
| `mongo_config`   | 配置 FerretDB 服务            |
| `mongo_cert`     | 签发 FerretDB SSL 证书        |
| `mongo_launch`   | 启动 FerretDB 服务            |
| `mongo_register` | 将 FerretDB 注册到 Prometheus |
{.full-width}


----------------

## 任务详解

### `mongo_check`

检查必选的身份参数是否已定义：
- `mongo_cluster`：集群名称
- `mongo_seq`：实例序号
- `mongo_pgurl`：PostgreSQL 连接串

如果任一参数缺失，剧本将报错退出。

### `mongo_dbsu`

创建 FerretDB 运行所需的操作系统用户和组：
- 创建 `mongod` 用户组
- 创建 `mongod` 用户，家目录为 `/var/lib/mongod`

### `mongo_install`

安装 FerretDB 软件包：
- 在 RPM 系发行版上安装 `ferretdb2` 包
- 在 DEB 系发行版上安装对应的 deb 包

### `mongo_purge`

清理现有的 FerretDB 集群。此任务默认不执行，需要显式指定：

```bash
./mongo.yml -l <cluster> -e mongo_purge=true -t mongo_purge
```

**重要**：请务必使用 `-l <cluster>` 参数限制执行范围。

清理操作包括：
- 停止并禁用 ferretdb 服务
- 移除 systemd 服务文件
- 移除配置文件和 SSL 证书
- 从 Prometheus 监控目标中注销

### `mongo_config`

配置 FerretDB 服务：
- 渲染环境变量配置文件 `/etc/default/ferretdb`
- 创建 systemd 服务文件

### `mongo_cert`

当 [`mongo_ssl_enabled`](/docs/ferret/param#mongo_ssl_enabled) 设置为 `true` 时，此任务会：
- 生成 FerretDB 的 SSL 私钥
- 创建证书签名请求（CSR）
- 使用 CA 签发 SSL 证书
- 将证书文件部署到 `/var/lib/mongod/`

### `mongo_launch`

启动 FerretDB 服务：
- 重新加载 systemd 配置
- 启动并启用 ferretdb 服务
- 等待服务在指定端口上可用（默认 27017）

FerretDB 服务配置了 `Restart=on-failure`，因此当进程意外崩溃时会自动重启。这为这个无状态代理服务提供了基本的容错能力。

### `mongo_register`

将 FerretDB 实例注册到 Prometheus 监控系统：
- 在所有 `infra` 节点上创建监控目标文件
- 目标文件路径：`/infra/targets/mongo/<cluster>-<seq>.yml`
- 包含实例的 IP、标签和指标端口信息


----------------

## 使用示例

```bash
# 在 ferret 分组上部署 FerretDB
./mongo.yml -l ferret

# 仅执行配置任务
./mongo.yml -l ferret -t mongo_config

# 重新签发 SSL 证书
./mongo.yml -l ferret -t mongo_cert

# 重启 FerretDB 服务
./mongo.yml -l ferret -t mongo_launch

# 清理 FerretDB 集群
./mongo.yml -l ferret -e mongo_purge=true -t mongo_purge
```
