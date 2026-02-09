---
title: Supabase
weight: 2102
date: 2024-06-23
description: 如何使用Pigsty自建Supabase，一键拉起开源Firebase替代，后端全栈全家桶。
icon: fas fa-bolt
module: [SOFTWARE]
categories: [概念]
---

> [Supabase](https://supabase.com/) —— Build in a weekend, Scale to millions

Supabase 是一个开源的 Firebase 替代，对 PostgreSQL 进行了封装，并提供了认证，开箱即用的 API，边缘函数，实时订阅，对象存储，向量嵌入能力。
这是一个低代码的一站式后端平台，能让你几乎告别大部分后端开发的工作，只需要懂数据库设计与前端即可快速出活！

Supabase 的口号是：“**花个周末写写，随便扩容至百万**”。诚然，在小微规模（4c8g）内的 Supabase [极有性价比](https://supabase.com/pricing)，堪称赛博菩萨。
—— 但当你真的增长到百万用户时 —— 确实应该认真考虑托管自建 Supabase 了 —— 无论是出于功能，性能，还是成本上的考虑。

Pigsty 为您提供完整的 Supabase 一键自建方案。自建的 Supabase 可以享受完整的 PostgreSQL 监控，IaC，PITR 与高可用，
而且相比 Supabase 云服务，提供了多达 [**444**](https://pgext.cloud) 个开箱即用的 PostgreSQL 扩展，并能够更充分地利用现代硬件的性能与成本优势。

完整自建教程，请参考：《[**Supabase自建手册**](/docs/app/supabase)》


![](/img/pigsty/supabase.webp)

-------

## 快速上手

Pigsty 默认提供的 [`supa.yml`](https://github.com/Vonng/pigsty/blob/main/conf/supa.yml) 配置模板定义了一套单节点 Supabase。

首先，使用 Pigsty [标准安装流程](/docs/setup/install) 安装 Supabase 所需的 MinIO 与 PostgreSQL 实例：

```bash
 curl -fsSL https://repo.pigsty.io/get | bash
./bootstrap          # 环境检查，安装依赖
./configure -c supa  # 重要：请在配置文件中修改密码等关键信息！
./deploy.yml         # 安装 Pigsty，拉起 PGSQL 与 MINIO！
```

请在部署 Supabase 前，根据您的实际情况，修改 `pigsty.yml` 配置文件中 [关于 Supabase 的参数](#配置细节)（主要是密码！）

然后，运行 [`supabase.yml`](https://github.com/Vonng/pigsty/blob/main/supabase.yml) 完成剩余的工作，拉起 Supabase 容器

```bash
./docker.yml       # 安装 Docker 模块
./app.yml          # 拉起 Supabase 无状态部分！
```

中国区域用户注意，请您配置合适的 Docker 镜像站点或代理服务器绕过 GFW 以拉取 DockerHub 镜像。
对于 [专业订阅](/docs/about/service) ，我们提供在没有互联网访问的情况下，[离线安装](/docs/setup/offline) Pigsty 与 Supabase 的能力。

Pigsty 默认通过管理节点/INFRA节点上的 Nginx 对外暴露 Web 服务，您可以在本地添加 `supa.pigsty` 的 DNS 解析指向该节点，
然后通过浏览器访问 `https://supa.pigsty` 即可进入 Supabase Studio 管理界面。

> 默认用户名与密码：supabase / pigsty

{{< asciinema file="demo/supabase.cast" markers="0:检查环境,11:安装,43:配置,307:Docker,321:域名,340:App,350:检查" speed="1.3" autoplay="true" loop="true" >}}


-------

## 配置细节

`./configure -c supa` 会生成 `~/pigsty/pigsty.yml`。在执行 `./deploy.yml` 之前，请至少检查并修改其中的密码、密钥、域名等敏感配置。

更完整的配置说明请参阅：《[Supabase自建手册](/docs/app/supabase)》。
