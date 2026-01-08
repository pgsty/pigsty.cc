---
title: 管理预案
weight: 1500
description: 数据库管理任务标准操作指南（SOP）
icon: fa-solid fa-building-columns
module: [PGSQL]
categories: [任务, 参考]
---

> 如何使用 Pigsty 维护现有的 PostgreSQL 集群？

本章节提供 PostgreSQL 常见管理任务的标准操作流程（SOP）：

- [常用预案](sop)：创建/移除集群与实例，备份恢复，滚动升级等标准操作流程
- [故障排查](failure)：常见故障排查思路与处理方法，如磁盘写满、连接耗尽、XID回卷等
- [误删处理](drop)：处理误删数据、误删表、误删数据库的应急处理流程
- [维护保养](maintain)：定期巡检、故障切换善后、表膨胀治理、VACUUM FREEZE 等维护任务
- [参数优化](tune)：内存、CPU、存储等参数的自动优化策略与调整方法

