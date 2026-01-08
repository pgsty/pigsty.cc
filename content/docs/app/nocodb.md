---
title: NocoDB：开源 Airtable
weight: 575
description: 使用 NocoDB 将 PostgreSQL 数据库转变为智能电子表格，无代码数据库应用平台。
module: [SOFTWARE]
categories: [参考]
---

[**NocoDB**](https://nocodb.com/) 是一个开源的 Airtable 替代方案，可以将任何数据库转变为智能电子表格。

它提供了丰富的用户界面，让您无需编写代码即可创建强大的数据库应用。NocoDB 支持 PostgreSQL、MySQL、SQL Server 等多种数据库，是构建内部工具和数据管理系统的理想选择。



## 快速开始

在 Pigsty 软件模板目录中提供了 NocoDB 的 Docker Compose 配置文件：

```bash
cd ~/pigsty/app/nocodb
```

检查并修改 `.env` 配置文件（根据需要调整数据库连接等配置）。

启动服务：

```bash
make up     # 使用 Docker Compose 启动 NocoDB
```

访问 NocoDB：

- 默认地址： http://nocodb.pigsty
- 备用地址： http://10.10.10.10:8080
- 首次访问需要创建管理员账户



## 管理命令

Pigsty 提供了便捷的 Makefile 命令来管理 NocoDB 服务：

```bash
make up      # 启动 NocoDB 服务
make run     # 使用 Docker 启动（连接外部 PostgreSQL）
make view    # 显示 NocoDB 访问地址
make log     # 查看容器日志
make info    # 查看服务详细信息
make stop    # 停止服务
make clean   # 停止并移除容器
make pull    # 拉取最新镜像
make rmi     # 移除 NocoDB 镜像
make save    # 保存镜像到 /tmp/nocodb.tgz
make load    # 从 /tmp/nocodb.tgz 加载镜像
```



## 连接 PostgreSQL

NocoDB 可以连接到 Pigsty 管理的 PostgreSQL 数据库。

在 NocoDB 界面中添加新项目时，选择「External Database」，然后输入 PostgreSQL 连接信息：

```
主机：10.10.10.10
端口：5432
数据库名：your_database
用户名：your_username
密码：your_password
SSL：禁用（或根据实际情况启用）
```

连接成功后，NocoDB 会自动读取数据库的表结构，您可以通过可视化界面进行数据管理。



## 功能特性

- **智能电子表格界面**：类似 Excel/Airtable 的用户体验
- **多种视图**：网格、表单、看板、日历、画廊视图
- **协作功能**：团队协作、权限管理、评论
- **API 支持**：自动生成 REST API
- **集成能力**：支持 Webhook、Zapier 等集成
- **数据导入导出**：支持 CSV、Excel 等格式
- **公式和验证**：支持复杂的数据计算和验证规则



## 配置说明

NocoDB 的配置在 `.env` 文件中：

```bash
# 数据库连接（NocoDB 元数据存储）
NC_DB=pg://postgres:DBUser.Postgres@10.10.10.10:5432/nocodb

# JWT 密钥（建议修改）
NC_AUTH_JWT_SECRET=your-secret-key

# 其他配置
NC_PUBLIC_URL=http://nocodb.pigsty
NC_DISABLE_TELE=true
```



## 数据持久化

NocoDB 的元数据默认存储在外部 PostgreSQL 数据库中，应用数据也可以存储在 PostgreSQL 中。

如果使用本地存储，数据会保存在 `/data/nocodb` 目录中。



## 安全建议

1. **修改默认密钥**：在 `.env` 文件中修改 `NC_AUTH_JWT_SECRET`
2. **使用强密码**：为管理员账户设置强密码
3. **配置 HTTPS**：生产环境建议启用 HTTPS
4. **限制访问**：通过防火墙或 Nginx 限制访问权限
5. **定期备份**：定期备份 NocoDB 元数据库



## 相关链接

- NocoDB 官网： https://nocodb.com/
- 官方文档： https://docs.nocodb.com/
- GitHub 仓库： https://github.com/nocodb/nocodb
- Pigsty 软件模板： https://github.com/Vonng/pigsty/tree/main/app/nocodb
