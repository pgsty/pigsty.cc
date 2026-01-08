---
title: Metabase：BI 分析工具
weight: 605
description: 使用 Metabase 进行快速的商业智能分析，友好的用户界面让团队自主探索数据。
module: [SOFTWARE]
categories: [参考]
---

[**Metabase**](https://metabase.com/) 是一个快速、易用的开源商业智能工具，让您的团队无需 SQL 知识即可探索和可视化数据。

Metabase 提供友好的用户界面和丰富的图表类型，支持连接多种数据库，是企业数据分析的理想选择。



## 快速开始

在 Pigsty 软件模板目录中提供了 Metabase 的 Docker Compose 配置文件：

```bash
cd ~/pigsty/app/metabase
```

检查并修改 `.env` 配置文件：

```bash
vim .env    # 检查配置，建议修改默认凭据
```

启动服务：

```bash
make up     # 使用 Docker Compose 启动 Metabase
```

访问 Metabase：

- 默认地址： http://metabase.pigsty
- 备用地址： http://10.10.10.10:3001
- 首次访问需要完成初始化设置



## 管理命令

Pigsty 提供了便捷的 Makefile 命令来管理 Metabase 服务：

```bash
make up      # 启动 Metabase 服务
make run     # 使用 Docker 启动（连接外部 PostgreSQL）
make view    # 显示 Metabase 访问地址
make log     # 查看容器日志
make info    # 查看服务详细信息
make stop    # 停止服务
make clean   # 停止并移除容器
make pull    # 拉取最新镜像
make rmi     # 移除 Metabase 镜像
make save    # 保存镜像到文件
make load    # 从文件加载镜像
```



## 连接 PostgreSQL

Metabase 可以连接到 Pigsty 管理的 PostgreSQL 数据库。

在 Metabase 初始化或添加数据库时，选择「PostgreSQL」，然后输入连接信息：

```
数据库类型：PostgreSQL
名称：自定义名称（如 "生产数据库"）
主机：10.10.10.10
端口：5432
数据库名：your_database
用户名：dbuser_meta
密码：DBUser.Meta
```

连接成功后，Metabase 会自动扫描数据库结构，您可以开始创建问题和仪表板。



## 功能特性

- **无需 SQL**：通过可视化界面构建查询
- **丰富的图表类型**：折线图、柱状图、饼图、地图等
- **交互式仪表板**：创建美观的数据仪表板
- **自动刷新**：定时更新数据和仪表板
- **权限管理**：精细的用户和数据访问控制
- **SQL 模式**：高级用户可以直接编写 SQL
- **嵌入功能**：将图表嵌入到其他应用
- **告警功能**：数据变化自动通知



## 配置说明

Metabase 的配置在 `.env` 文件中：

```bash
# Metabase 元数据库（建议使用 PostgreSQL）
MB_DB_TYPE=postgres
MB_DB_DBNAME=metabase
MB_DB_PORT=5432
MB_DB_USER=dbuser_metabase
MB_DB_PASS=DBUser.Metabase
MB_DB_HOST=10.10.10.10

# 应用配置
JAVA_OPTS=-Xmx2g
```

**建议**：为 Metabase 使用独立的 PostgreSQL 数据库存储元数据。



## 数据持久化

Metabase 的元数据（用户、问题、仪表板等）存储在配置的数据库中。

如果使用 H2 数据库（默认），数据会保存在 `/data/metabase` 目录。强烈建议在生产环境中使用 PostgreSQL 作为元数据库。



## 性能优化

- **使用 PostgreSQL**：替代默认的 H2 数据库
- **增加内存**：通过 `JAVA_OPTS=-Xmx4g` 增加 JVM 内存
- **数据库索引**：为常查询的字段创建索引
- **结果缓存**：启用 Metabase 的查询结果缓存
- **定时更新**：合理设置仪表板的自动刷新频率



## 安全建议

1. **修改默认凭据**：修改元数据库的用户名和密码
2. **启用 HTTPS**：生产环境配置 SSL 证书
3. **配置认证**：启用 SSO 或 LDAP 认证
4. **限制访问**：通过防火墙限制访问
5. **定期备份**：备份 Metabase 元数据库



## 相关链接

- Metabase 官网： https://metabase.com/
- 官方文档： https://www.metabase.com/docs/
- GitHub 仓库： https://github.com/metabase/metabase
- Pigsty 软件模板： https://github.com/Vonng/pigsty/tree/main/app/metabase
