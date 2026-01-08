---
title: Maybe：个人财务管理
weight: 600
description: 使用 Maybe 管理个人财务，开源的 Mint/Personal Capital 替代方案。
module: [SOFTWARE]
categories: [参考]
---

[**Maybe**](https://github.com/maybe-finance/maybe) 是一个开源的个人财务管理应用。

Maybe 提供财务跟踪、预算管理、投资分析等功能，是 Mint 和 Personal Capital 的开源替代方案，让您完全掌控自己的财务数据。

## 快速开始

```bash
cd ~/pigsty/app/maybe
cp .env.example .env
vim .env                    # 必须修改 SECRET_KEY_BASE
make up                      # 启动 Maybe 服务
```

访问地址： http://maybe.pigsty 或 http://10.10.10.10:5002

## 配置说明

在 `.env` 文件中配置：

```bash
SECRET_KEY_BASE=your-secret-key-here    # 必须修改！
DATABASE_URL=postgresql://...
```

**重要**：首次部署前必须修改 `SECRET_KEY_BASE`！

## 功能特性

- **账户管理**：追踪多个银行账户和信用卡
- **预算规划**：设置和跟踪预算
- **投资分析**：监控投资组合表现
- **账单提醒**：自动提醒即将到期的账单
- **隐私优先**：数据完全在您的控制之下

## 相关链接

- GitHub 仓库： https://github.com/maybe-finance/maybe
