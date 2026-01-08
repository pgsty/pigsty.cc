---
title: COVID-19 数据大盘
weight: 670
date: 2022-01-18
description: Pigsty 自带的，用于展示世界卫生组织官方 COVID 疫情数据的一个样例 Applet
module: [APP]
categories: [参考]
---


Covid 是 Pigsty 自带的，用于展示世界卫生组织官方疫情数据大盘的一个样例 Applet。

您可以查阅每个国家与地区 COVID-19 的感染与死亡案例，以及全球的疫情趋势。 



-----------

## 概览

GitHub 仓库地址：[https://github.com/Vonng/pigsty-app/tree/master/covid](https://github.com/Vonng/pigsty-app/tree/master/covid)

在线Demo地址：[https://demo.pigsty.cc/d/covid](https://demo.pigsty.cc/d/covid)

[![](/img/docs/app/covid.jpg)](https://demo.pigsty.cc/d/covid)


-----------

## 安装

在管理节点上进入应用目录，执行`make`以完成安装。

```bash
make            # 完成所有配置 
```

其他一些子任务：

```bash
make reload     # download latest data and pour it again
make ui         # install grafana dashboards
make sql        # install database schemas
make download   # download latest data
make load       # load downloaded data into database
make reload     # download latest data and pour it into database
```

