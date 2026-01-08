---
title: PGLOG：PG自带日志分析应用
weight: 660
date: 2022-05-18
description: Pigsty自带的，用于分析PostgreSQL CSV日志样本的一个样例Applet
module: [APP]
categories: [参考]
linkTitle: PGLOG CSV日志分析
---


PGLOG是Pigsty自带的一个样例应用，固定使用MetaDB中`pglog.sample`表作为数据来源。您只需要将日志灌入该表，然后访问相关Dashboard即可。

Pigsty提供了一些趁手的命令，用于拉取csv日志，并灌入样本表中。在元节点上，默认提供下列快捷命令：

```bash
catlog  [node=localhost]  [date=today]   # 打印CSV日志到标准输出
pglog                                    # 从标准输入灌入CSVLOG
pglog12                                  # 灌入PG12格式的CSVLOG
pglog13                                  # 灌入PG13格式的CSVLOG
pglog14                                  # 灌入PG14格式的CSVLOG (=pglog)

catlog | pglog                       # 分析当前节点当日的日志
catlog node-1 '2021-07-15' | pglog   # 分析node-1在2021-07-15的csvlog
```

接下来，您可以访问以下的连接，查看样例日志分析界面。

* [PGLOG Overview](https://demo.pigsty.cc/d/pglog-overview):  呈现整份CSV日志样本详情，按多种维度聚合。

[![](/img/dashboard/pglog-overview.jpg)](https://demo.pigsty.cc/d/pglog-overview)

* [PGLOG Session](https://demo.pigsty.cc/d/pglog-session):  呈现日志样本中一条具体连接的详细信息。

[![](/img/dashboard/pglog-session.jpg)](https://demo.pigsty.cc/d/pglog-session)

`catlog`命令从特定节点拉取特定日期的CSV数据库日志，写入`stdout`

默认情况下，`catlog`会拉取当前节点当日的日志，您可以通过参数指定节点与日期。

组合使用`pglog`与`catlog`，即可快速拉取数据库CSV日志进行分析。

```bash
catlog | pglog                       # 分析当前节点当日的日志
catlog node-1 '2021-07-15' | pglog   # 分析node-1在2021-07-15的csvlog
```

