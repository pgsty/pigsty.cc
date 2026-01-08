---
title: "MySQL正确性竟如此垃圾？"
date: 2023-12-28
manualLink: https://vonng.com/db/bad-mysql/
author: 冯若航
description: >
  MySQL的事务ACID存在缺陷，且与文档承诺不符。JEPSEN测试揭示MySQL的可重复读隔离级别既不原子也不单调，连基本的单调原子视图都不满足。这可能导致严重的正确性问题，使用时请务必谨慎。
images: ['/img/hero/db/bad-mysql.jpg']
tags: [数据库]
---

[![featured](/img/hero/db/bad-mysql.jpg)](https://vonng.com/db/bad-mysql/)

MySQL的事务ACID存在缺陷，且与文档承诺不符。JEPSEN测试揭示MySQL的可重复读隔离级别既不原子也不单调，连基本的单调原子视图都不满足。这可能导致严重的正确性问题，使用时请务必谨慎。 [**阅读全文**](https://vonng.com/db/bad-mysql/)
