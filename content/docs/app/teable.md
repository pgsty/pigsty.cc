---
title: Teable：AI 无代码数据库
weight: 580
description: 使用 Teable 构建 AI 驱动的无代码数据库应用，提升团队生产力。
module: [SOFTWARE]
categories: [参考]
---

[**Teable**](https://teable.io/) 是一个 AI 驱动的无代码数据库平台，专为团队协作和自动化而设计。

Teable 将数据库的强大功能与电子表格的易用性完美结合，并集成 AI 能力，帮助团队高效地生成、自动化和协作处理数据。



## 快速开始

Teable 需要完整的 Pigsty 环境支持（包括 PostgreSQL、Redis、MinIO）。

### 准备环境

```bash
cd ~/pigsty
./bootstrap                # 准备本地源与 Ansible
./configure -c app/teable  # 重要：修改默认凭据！
./deploy.yml               # 安装 Pigsty、PostgreSQL、MinIO
./redis.yml                # 安装 Redis 实例
./docker.yml               # 安装 Docker 与 Docker Compose
./app.yml                  # 使用 Docker Compose 安装 Teable
```

### 访问服务

- 默认地址： http://teable.pigsty
- 备用地址： http://10.10.10.10:3000
- 首次访问需要注册管理员账户



## 管理命令

在 Pigsty 软件模板目录中管理 Teable：

```bash
cd ~/pigsty/app/teable

make up      # 启动 Teable 服务
make down    # 停止 Teable 服务
make log     # 查看容器日志
make clean   # 清理容器和数据
```



## 架构说明

Teable 依赖以下组件：

- **PostgreSQL**：存储应用数据和元数据
- **Redis**：缓存和会话管理
- **MinIO**：对象存储（文件、图片等）
- **Docker**：容器运行环境

确保这些服务在部署 Teable 前已正确安装。



## 功能特性

- **AI 集成**：内置 AI 助手，自动生成数据、公式和工作流
- **智能表格**：强大的表格功能，支持多种字段类型
- **自动化工作流**：无代码自动化，提升团队效率
- **多视图支持**：网格、表单、看板、日历等多种视图
- **团队协作**：实时协作、权限管理、评论
- **API 和集成**：自动生成 API，支持 Webhook 集成
- **模板库**：丰富的应用模板，快速启动项目



## 配置说明

Teable 的配置通过环境变量管理，主要配置在 `docker-compose.yml` 中：

```yaml
# PostgreSQL 连接
POSTGRES_HOST=10.10.10.10
POSTGRES_PORT=5432
POSTGRES_DB=teable
POSTGRES_USER=dbuser_teable
POSTGRES_PASSWORD=DBUser.Teable

# Redis 连接
REDIS_HOST=10.10.10.10
REDIS_PORT=6379
REDIS_DB=0

# MinIO 连接
MINIO_ENDPOINT=http://10.10.10.10:9000
MINIO_ACCESS_KEY=minioadmin
MINIO_SECRET_KEY=minioadmin

# 应用配置
BACKEND_URL=http://teable.pigsty
PUBLIC_ORIGIN=http://teable.pigsty
```

**重要**：在生产环境中，请修改所有默认密码和密钥！



## 数据持久化

Teable 的数据持久化依赖：

- **PostgreSQL**：所有结构化数据存储在 PostgreSQL 中
- **MinIO**：文件、图片等非结构化数据存储在 MinIO 中
- **Redis**：缓存数据（可选持久化）

定期备份 PostgreSQL 数据库和 MinIO 存储桶以确保数据安全。



## 安全建议

1. **修改默认凭据**：在配置文件中修改所有默认用户名和密码
2. **启用 HTTPS**：生产环境建议配置 SSL 证书
3. **配置防火墙**：限制对服务的访问
4. **定期备份**：定期备份 PostgreSQL 和 MinIO 数据
5. **更新组件**：及时更新 Teable 和依赖组件的版本



## 相关链接

- Teable 官网： https://teable.io/
- 官方文档： https://help.teable.io/
- GitHub 仓库： https://github.com/teableio/teable
- Pigsty 软件模板： https://github.com/Vonng/pigsty/tree/main/app/teable
