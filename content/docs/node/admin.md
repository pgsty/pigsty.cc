---
title: 管理预案
weight: 3250
description: Node 集群管理 SOP：创建，销毁，扩容，缩容，节点故障与磁盘故障的处理。
icon: fa-solid fa-building-columns
modules: [NODE]
categories: [任务]
---

下面是 Node 模块中常用的管理操作：

- [添加节点](#添加节点)
- [移除节点](#移除节点)
- [创建管理员](#创建管理员)
- [绑定VIP](#绑定vip)
- [添加节点监控](#添加节点监控)
- [其他常见任务](#其他常见任务)

更多问题请参考 [FAQ：NODE](faq/)


----------------

## 添加节点

要将节点添加到 Pigsty，您需要对该节点具有无密码的 ssh/sudo 访问权限。

您也可以选择一次性添加一个集群，或使用通配符匹配配置清单中要加入 Pigsty 的节点。

```bash
# ./node.yml -l <cls|ip|group>        # 向 Pigsty 中添加节点的实际剧本
# bin/node-add <selector|ip...>       # 向 Pigsty 中添加节点
bin/node-add node-test                # 初始化节点集群 'node-test'
bin/node-add 10.10.10.10              # 初始化节点 '10.10.10.10'
```


----------------

## 移除节点

要从 Pigsty 中移除一个节点，您可以使用以下命令：

```bash
# ./node-rm.yml -l <cls|ip|group>    # 从 pigsty 中移除节点的实际剧本
# bin/node-rm <cls|ip|selector> ...  # 从 pigsty 中移除节点
bin/node-rm node-test                # 移除节点集群 'node-test'
bin/node-rm 10.10.10.10              # 移除节点 '10.10.10.10'
```

您也可以选择一次性移除一个集群，或使用通配符匹配配置清单中要从 Pigsty 移除的节点。


----------------

## 创建管理员

如果当前用户没有对节点的无密码 ssh/sudo 访问权限，您可以使用另一个管理员用户来初始化该节点：

```bash
node.yml -t node_admin -k -K -e ansible_user=<另一个管理员>   # 为另一个管理员输入 ssh/sudo 密码以完成此任务
```


----------------

## 绑定VIP

您可以在节点集群上绑定一个可选的 L2 VIP，使用 [`vip_enabled`](param/#vip_enabled) 参数。

```yaml
proxy:
  hosts:
    10.10.10.29: { nodename: proxy-1 }   # 您可以显式指定初始的 VIP 角色：MASTER / BACKUP
    10.10.10.30: { nodename: proxy-2 }   # , vip_role: master }
  vars:
    node_cluster: proxy
    vip_enabled: true
    vip_vrid: 128
    vip_address: 10.10.10.99
    vip_interface: eth1
```

```bash
./node.yml -l proxy -t node_vip     # 首次启用 VIP
./node.yml -l proxy -t vip_refresh  # 刷新 vip 配置（例如指定 master）
```


----------------

## 添加节点监控

如果您想要在现有节点上添加或重新配置监控，可以使用以下命令：

```bash
./node.yml -t node_exporter,node_register  # 配置监控并注册
./node.yml -t vector                        # 配置日志收集
```


----------------

## 其他常见任务

```bash
# Play
./node.yml -t node                            # 完成节点主体初始化（haproxy，监控除外）
./node.yml -t haproxy                         # 在节点上设置 haproxy
./node.yml -t monitor                         # 配置节点监控：node_exporter & vector
./node.yml -t node_vip                        # 为没启用过 VIP 的集群安装、配置、启用 L2 VIP
./node.yml -t vip_config,vip_reload           # 刷新节点 L2 VIP 配置
./node.yml -t haproxy_config,haproxy_reload   # 刷新节点上的服务定义
./node.yml -t register_prometheus             # 重新将节点注册到 Prometheus 中
./node.yml -t register_nginx                  # 重新将节点 haproxy 管控界面注册到 Nginx 中

# Task
./node.yml -t node-id        # 生成节点身份标识
./node.yml -t node_name      # 设置主机名
./node.yml -t node_hosts     # 配置节点 /etc/hosts 记录
./node.yml -t node_resolv    # 配置节点 DNS 解析器 /etc/resolv.conf
./node.yml -t node_firewall  # 配置防火墙 & selinux
./node.yml -t node_ca        # 配置节点的CA证书
./node.yml -t node_repo      # 配置节点上游软件仓库
./node.yml -t node_pkg       # 在节点上安装 yum 软件包
./node.yml -t node_feature   # 配置 numa、grub、静态网络等特性
./node.yml -t node_kernel    # 配置操作系统内核模块
./node.yml -t node_tune      # 配置 tuned 调优模板
./node.yml -t node_sysctl    # 设置额外的 sysctl 参数
./node.yml -t node_profile   # 配置节点环境变量：/etc/profile.d/node.sh
./node.yml -t node_ulimit    # 配置节点资源限制
./node.yml -t node_data      # 配置节点首要数据目录
./node.yml -t node_admin     # 配置管理员用户和ssh密钥
./node.yml -t node_timezone  # 配置节点时区
./node.yml -t node_ntp       # 配置节点 NTP 服务器/客户端
./node.yml -t node_crontab   # 添加/覆盖 crontab 定时任务
./node.yml -t node_vip       # 为节点集群设置可选的 L2 VIP
```
