---
title: Mattermost：开源 IM
weight: 595
description: 使用 Mattermost 构建私有化的团队协作平台，开源的 Slack 替代方案。
module: [SOFTWARE]
categories: [参考]
---

[**Mattermost**](https://mattermost.com/) 是一个开源的团队协作和消息平台。

Mattermost 提供即时消息、文件共享、音视频通话等功能，是 Slack 和 Microsoft Teams 的开源替代方案，特别适合需要私有化部署的企业。



## 快速开始

```bash
cd ~/pigsty/app/mattermost
make up     # 使用 Docker Compose 启动 Mattermost
```

访问地址： http://mattermost.pigsty 或 http://10.10.10.10:8065

首次访问需要创建管理员账户。



## 功能特性

- **即时消息**：个人和群组聊天
- **频道管理**：公开和私有频道
- **文件共享**：安全的文件存储和共享
- **音视频通话**：内置通话功能
- **集成能力**：支持 Webhook、Bot、插件
- **移动应用**：iOS 和 Android 客户端
- **企业级**：SSO、LDAP、合规性功能



## 连接 PostgreSQL

Mattermost 使用 PostgreSQL 存储数据，在配置中指定连接信息：

```bash
MM_SQLSETTINGS_DRIVERNAME=postgres
MM_SQLSETTINGS_DATASOURCE=postgres://dbuser_mm:DBUser.MM@10.10.10.10:5432/mattermost
```



## 相关链接

- Mattermost 官网： https://mattermost.com/
- 官方文档： https://docs.mattermost.com/
- GitHub 仓库： https://github.com/mattermost/mattermost
