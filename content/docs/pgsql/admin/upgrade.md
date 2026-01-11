---
title: 升级 PostgreSQL 大小版本 
linkTitle: 版本升级
weight: 90
description: 如何升级（或降级） PostgreSQL 小版本内核，以及如何进行大版本升级。
icon: fa-solid fa-plane-up
module: [PGSQL]
categories: [任务]
---


----------------

## 小版本升级

要执行小版本的服务器升级/降级，您首先需要在本地软件仓库中 [添加软件](#添加软件)：最新的PG小版本 RPM/DEB。

首先对所有从库执行滚动升级/降级，然后执行集群 [主从切换](#主动切换)以升级/降级主库。

```bash
ansible <cls> -b -a "yum upgrade/downgrade -y <pkg>"    # 升级/降级软件包
pg restart --force <cls>                                # 重启集群
```

这次我们采用滚动方式升级：

```bash
ansible pg-test -b -a "yum upgrade -y postgresql15*"    # 升级软件包（或 apt upgrade）
ansible pg-test -b -a '/usr/pgsql/bin/pg_ctl --version' # 检查二进制版本是否为15.2
pg restart --role replica --force pg-test               # 重启从库
pg switchover --leader pg-test-1 --candidate=pg-test-2 --scheduled=now --force pg-test    # 切换主从
pg restart --role primary --force pg-test               # 重启主库
```


----------------

## 小版本降级

将15.1的包添加到软件仓库并刷新节点的 yum/apt 缓存：

```bash
cd ~/pigsty; ./infra.yml -t repo_upstream               # 添加上游仓库
cd /www/pigsty; repotrack postgresql15-*-15.1           # 将15.1的包添加到yum仓库
cd ~/pigsty; ./infra.yml -t repo_create                 # 重建仓库元数据
ansible pg-test -b -a 'yum clean all'                   # 清理节点仓库缓存
ansible pg-test -b -a 'yum makecache'                   # 从新仓库重新生成yum缓存

# 对于 Ubutnu/Debian 用户，使用 apt 替换 yum
ansible pg-test -b -a 'apt clean'                       # 清理节点仓库缓存
ansible pg-test -b -a 'apt update'                      # 从新仓库重新生成apt缓存
``` 

执行降级并重启集群：

```bash
ansible pg-test -b -a "yum downgrade -y postgresql15*"  # 降级软件包）
pg restart --force pg-test                              # 重启整个集群以完成升级
```




----------------

## 大版本升级

实现大版本升级的最简单办法是：创建一个使用新版本的新集群，然后通过逻辑复制，蓝绿部署，并进行 [**在线迁移**](/docs/pgsql/migration)。

您也可以进行原地大版本升级，当您只使用数据库内核本身时，这并不复杂，使用 PostgreSQL 自带的 `pg_upgrade` 即可：

假设您想将 PostgreSQL 大版本从 14 升级到 15，您首先需要在仓库中 **添加软件**，并确保两个大版本两侧安装的核心扩展插件也具有相同的版本号。

```bash
./pgsql.yml -t pg_pkg -e pg_version=15                         # 安装pg 15的包
sudo su - postgres; mkdir -p /data/postgres/pg-meta-15/data/   # 为15准备目录
pg_upgrade -b /usr/pgsql-14/bin/ -B /usr/pgsql-15/bin/ -d /data/postgres/pg-meta-14/data/ -D /data/postgres/pg-meta-15/data/ -v -c # 预检
pg_upgrade -b /usr/pgsql-14/bin/ -B /usr/pgsql-15/bin/ -d /data/postgres/pg-meta-14/data/ -D /data/postgres/pg-meta-15/data/ --link -j8 -v -c
rm -rf /usr/pgsql; ln -s /usr/pgsql-15 /usr/pgsql;             # 修复二进制链接
mv /data/postgres/pg-meta-14 /data/postgres/pg-meta-15         # 重命名数据目录
rm -rf /pg; ln -s /data/postgres/pg-meta-15 /pg                # 修复数据目录链接
```
