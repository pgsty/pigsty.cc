---
title: "Etcd 坑了多少公司？"
date: 2025-05-07
manualLink: https://vonng.com/db/bad-etcd/
author: 冯若航
description: >
  因为 Etcd 而翻车的公司并非少数。Etcd 有一个坑爹的默认设计：写满2GB 数据就挂了。如果你在自己折腾 Kubernetes 或使用 Patroni 做 PostgreSQL 高可用，大概率会在这上面翻车。
images: ['/img/hero/db/bad-etcd.jpg']
tags: [数据库]
---

[![featured](/img/hero/db/bad-etcd.jpg)](https://vonng.com/db/bad-etcd/)

因为 Etcd 而翻车的公司并非少数。Etcd 有一个坑爹的默认设计：写满2GB 数据就挂了。如果你在自己折腾 Kubernetes 或使用 Patroni 做 PostgreSQL 高可用，大概率会在这上面翻车。 [**阅读全文**](https://vonng.com/db/bad-etcd/)
