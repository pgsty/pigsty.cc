---
title: 应用
weight: 550
description: 使用 Docker 拉起应用软件模板，使用 Pigsty Grafana & Echarts 工具箱进行数据分析与可视化
icon: fa-solid fa-chart-line
module: [APP]
categories: [参考]
---

## Applet的结构

Applet，是一种自包含的，运行于Pigsty基础设施中的数据小应用。

一个Pigsty应用通常包括以下内容中的至少一样或全部：

* 图形界面（Grafana Dashboard定义） 放置于`ui`目录
* 数据定义（PostgreSQL DDL File），放置于 `sql` 目录
* 数据文件（各类资源，需要下载的文件），放置于`data`目录
* 逻辑脚本（执行各类逻辑），放置于`bin`目录

Pigsty默认提供了几个样例应用：

* [`pglog`](/docs/app/pglog)， 分析PostgreSQL CSV日志样本。
* [`covid`](/docs/app/covid)， 可视化WHO COVID-19数据，查阅各国疫情数据。
* [`isd`](/docs/app/isd)， NOAA ISD，可以查询全球30000个地表气象站从1901年来的气象观测记录。


---------

## 应用的结构

一个Pigsty应用会在应用根目录提供一个安装脚本：`install`或相关快捷方式。您需要使用管理用户在 [**管理节点**](/docs/concept/arch/node#admin节点) 执行安装。安装脚本会检测当前的环境（获取 `METADB_URL`， `PIGSTY_HOME`，`GRAFANA_ENDPOINT`等信息以执行安装）

通常，带有`APP`标签的面板会被列入Pigsty Grafana首页导航中App下拉菜单中，带有`APP`和`Overview`标签的面板则会列入首页面板导航中。

您可以从 https://github.com/Vonng/pigsty/releases/download/v1.5.1/app.tgz 下载带有基础数据的应用进行安装。

