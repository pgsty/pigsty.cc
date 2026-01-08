---
title: Electric：PGLite 同步引擎
weight: 645
description: 使用 Electric 解决 PostgreSQL 数据同步难题，支持部分复制和实时数据传输。
module: [SOFTWARE]
categories: [参考]
---

[**Electric**](https://electric-sql.com/) 是一个 PostgreSQL 同步引擎，解决了数据同步的复杂问题。

Electric 支持部分复制、扇出传输和高效的数据交付，是构建实时应用和离线优先应用的理想选择。

## 快速开始

```bash
cd ~/pigsty/app/electric
make up     # 启动 Electric 服务
```

访问地址： http://electric.pigsty 或 http://10.10.10.10:3000

## 功能特性

- **部分复制**：只同步需要的数据
- **实时同步**：毫秒级数据更新
- **离线优先**：支持离线工作，自动同步
- **冲突解决**：自动处理数据冲突
- **类型安全**：TypeScript 支持

## 相关链接

- Electric 官网： https://electric-sql.com/
- 官方文档： https://electric-sql.com/docs
- GitHub 仓库： https://github.com/electric-sql/electric
