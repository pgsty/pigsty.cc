---
title: 预置剧本
weight: 3240
description: 如何使用预置的 ansible 剧本来管理 Node 集群，常用管理命令速查。
icon: fa-solid fa-scroll
modules: [NODE]
categories: [任务]
---

Pigsty 提供两个与 NODE 模块相关的剧本：

- [`node.yml`](#nodeyml)：纳管节点，调整节点到期望状态
- [`node-rm.yml`](#node-rmyml)：从 Pigsty 中移除纳管节点

另提供两个包装命令工具：`bin/node-add` 与 `bin/node-rm`，用于快速调用剧本。


----------------

## `node.yml`

向 Pigsty 添加节点的 [`node.yml`](https://github.com/pgsty/pigsty/blob/main/node.yml) 包含以下子任务：

```
node-id       ：生成节点身份标识
node_name     ：设置主机名
node_hosts    ：配置 /etc/hosts 记录
node_resolv   ：配置 DNS 解析器 /etc/resolv.conf
node_firewall ：设置防火墙 & selinux
node_ca       ：添加并信任CA证书
node_repo     ：添加上游软件仓库
node_pkg      ：安装 rpm/deb 软件包
node_uv       ：配置 uv Python 虚拟环境
node_feature  ：配置 numa、grub、静态网络等特性
node_kernel   ：配置操作系统内核模块
node_tune     ：配置 tuned 调优模板
node_sysctl   ：设置额外的 sysctl 参数
node_profile  ：写入 /etc/profile.d/node.sh
node_ulimit   ：配置资源限制
node_data     ：配置数据目录
node_admin    ：配置管理员用户和ssh密钥
node_timezone ：配置时区
node_ntp      ：配置 NTP 服务器/客户端
node_crontab  ：添加/覆盖 crontab 定时任务
node_vip      ：为节点集群设置可选的 L2 VIP
haproxy       ：在节点上设置 haproxy 以暴露服务
monitor       ：配置节点监控：node_exporter & vector
```


----------------

## `node-rm.yml`

从 Pigsty 中移除节点的剧本 [`node-rm.yml`](https://github.com/pgsty/pigsty/blob/main/node-rm.yml) 包含以下子任务：

```
register       : 从 prometheus & nginx 中移除节点注册信息
  - prometheus : 移除已注册的 prometheus 监控目标
  - nginx      : 移除用于 haproxy 管理界面的 nginx 代理记录
vip            : 移除节点的 keepalived 与 L2 VIP（如果启用 VIP）
haproxy        : 移除 haproxy 负载均衡器
node_exporter  : 移除节点监控：Node Exporter
vip_exporter   : 移除 keepalived_exporter （如果启用 VIP）
vector         : 移除日志收集代理 vector
node_crontab   : 恢复默认 /etc/crontab（当 node_crontab_overwrite=true 时）
profile        : 移除 /etc/profile.d/node.sh 环境配置文件
```


----------------

## 常用命令速查

```bash
# 基础节点管理
./node.yml -l <cls|ip|group>          # 向 Pigsty 中添加节点
./node-rm.yml -l <cls|ip|group>       # 从 Pigsty 中移除节点

# 节点管理快捷命令
bin/node-add node-test                 # 初始化节点集群 'node-test'
bin/node-add 10.10.10.10               # 初始化节点 '10.10.10.10'
bin/node-rm node-test                  # 移除节点集群 'node-test'
bin/node-rm 10.10.10.10                # 移除节点 '10.10.10.10'

# 节点主体初始化
./node.yml -t node                     # 完成节点主体初始化（haproxy，监控除外）
./node.yml -t haproxy                  # 在节点上设置 haproxy
./node.yml -t monitor                  # 配置节点监控：node_exporter & vector

# VIP 管理
./node.yml -t node_vip                 # 为节点集群设置可选的 L2 VIP
./node.yml -t vip_config,vip_reload    # 刷新节点 L2 VIP 配置

# HAProxy 管理
./node.yml -t haproxy_config,haproxy_reload   # 刷新节点上的服务定义

# 注册管理
./node.yml -t register_prometheus      # 重新将节点注册到 Prometheus 中
./node.yml -t register_nginx           # 重新将节点 haproxy 管控界面注册到 Nginx 中

# 具体任务
./node.yml -t node-id                  # 生成节点身份标识
./node.yml -t node_name                # 设置主机名
./node.yml -t node_hosts               # 配置节点 /etc/hosts 记录
./node.yml -t node_resolv              # 配置节点 DNS 解析器 /etc/resolv.conf
./node.yml -t node_firewall            # 配置防火墙 & selinux
./node.yml -t node_ca                  # 配置节点的CA证书
./node.yml -t node_repo                # 配置节点上游软件仓库
./node.yml -t node_pkg                 # 在节点上安装 yum 软件包
./node.yml -t node_uv                  # 配置 uv Python 虚拟环境
./node.yml -t node_feature             # 配置 numa、grub、静态网络等特性
./node.yml -t node_kernel              # 配置操作系统内核模块
./node.yml -t node_tune                # 配置 tuned 调优模板
./node.yml -t node_sysctl              # 设置额外的 sysctl 参数
./node.yml -t node_profile             # 配置节点环境变量：/etc/profile.d/node.sh
./node.yml -t node_ulimit              # 配置节点资源限制
./node.yml -t node_data                # 配置节点首要数据目录
./node.yml -t node_admin               # 配置管理员用户和ssh密钥
./node.yml -t node_timezone            # 配置节点时区
./node.yml -t node_ntp                 # 配置节点 NTP 服务器/客户端
./node.yml -t node_crontab             # 添加/覆盖 crontab 定时任务
```
