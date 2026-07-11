---
title: demo/wool
weight: 1090
description: 面向中国区低配云主机的单节点 tiny 参数示例
icon: fa-solid fa-cloud
categories: [参考]
---

`demo/wool` 是面向中国区低配云主机的单节点示例，默认使用 `region: china`、PostgreSQL 18 与 `tiny` 调优参数。


--------

## 配置概览

- 配置名称：`demo/wool`
- 节点数量：单节点
- 建议规格：约 2C/2G 的测试主机
- 相关配置：[`meta`](/docs/conf/meta/)、[`slim`](/docs/conf/slim/)

```bash
./configure -c demo/wool [-i <private_ip>]
```


--------

## 配置内容

源文件地址：[`pigsty/conf/demo/wool.yml`](https://github.com/pgsty/pigsty/blob/main/conf/demo/wool.yml)

{{< readfile file="yaml/demo/wool.yml" code="true" lang="yaml" >}}


--------

## 配置解读

- 在 `pg-meta` 上显式设置 `pg_conf: tiny.yml` 与 `node_tune: tiny`
- 使用云主机内网 IP 替换 `10.10.10.10`
- 默认禁用 pgBackRest，以减少低配测试机的磁盘占用
- 预留多个 Portal 域名示例

该模板牺牲备份能力换取更低资源消耗，只适合临时测试。生产环境必须启用并验证备份、收紧网络规则、替换默认密码，并按实际 DNS 删除无用入口。
