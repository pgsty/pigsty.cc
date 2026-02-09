---
title: 常见问题
weight: 3280
description: Pigsty NODE 主机节点模块常见问题答疑
icon: fa-solid fa-circle-question
modules: [NODE]
categories: [参考]
---



----------------

## 如何配置主机节点上的NTP服务？

> NTP对于生产环境各项服务非常重要，如果没有配置 NTP，您可以使用公共 NTP 服务，或管理节点上的 Chronyd 作为标准时间。

如果您的节点已经配置了 NTP，可以通过设置 `node_ntp_enabled` 为 `false` 来保留现有配置，不进行任何变更。

否则，如果您有互联网访问权限，可以使用公共 NTP 服务，例如 `pool.ntp.org`。

如果您没有互联网访问权限，可以使用以下方式，确保所有环境内的节点与管理节点时间是同步的，或者使用其他内网环境的 NTP 授时服务。

```bash
node_ntp_servers:                 # /etc/chrony.conf 中的 ntp 服务器列表
  - pool cn.pool.ntp.org iburst
  - pool ${admin_ip} iburst       # 假设其他节点都没有互联网访问，那么至少与 Admin 节点保持时间同步。
```

----------------

## 如何在节点上强制同步时间？

为了使用 `chronyc` 来同步时间。您首先需要配置 NTP 服务。

```bash
ansible all -b -a 'chronyc -a makestep'     # 同步时间
```

您可以用任何组或主机 IP 地址替换 `all`，以限制执行范围。



----------------

## 远程节点无法通过SSH访问怎么办？

如果目标机器隐藏在SSH跳板机后面， 或者进行了一些无法直接使用`ssh ip`访问的自定义操作， 可以使用诸如 `ansible_port`
或 `ansible_host` 这一类 [Ansible连接参数](https://docs.ansible.com/ansible/latest/inventory_guide/connection_details.html) 来指定各种 SSH 连接信息，如下所示：

```bash
pg-test:
  vars: { pg_cluster: pg-test }
  hosts:
    10.10.10.11: {pg_seq: 1, pg_role: primary, ansible_host: node-1 }
    10.10.10.12: {pg_seq: 2, pg_role: replica, ansible_port: 22223, ansible_user: admin }
    10.10.10.13: {pg_seq: 3, pg_role: offline, ansible_port: 22224 }
```



----------------

## 远程节点SSH与SUDO需要密码怎么办？

**执行部署和更改时**，使用的管理员用户**必须**对所有节点拥有`ssh`和`sudo`权限。无需密码免密登录。

您可以在执行剧本时通过 `-k|-K` 参数传入 ssh 和 sudo 密码，甚至可以通过 `-e ansible_user=<another_user>` 使用另一个用户来运行剧本。

但是，Pigsty强烈建议为管理员用户配置SSH**无密码登录**以及无密码的`sudo`。



----------------

## 如何使用现有管理员创建专用管理员用户？

使用以下命令，使用该节点上现有的管理员用户，创建由 [`node_admin_username`](/docs/node/param#node_admin_username)
定义的新的标准的管理员用户。

```bash
./node.yml -k -K -e ansible_user=<another_admin> -t node_admin
```

----------------

## 如何使用节点上的HAProxy对外暴露服务？

您可以在配置中中使用 [`haproxy_services`](/docs/node/param#haproxy_services)
来暴露服务，并使用 `node.yml -t haproxy_config,haproxy_reload` 来更新配置。

以下是使用它暴露MinIO服务的示例：[暴露MinIO服务](/docs/minio/config#服务接入)



----------------

## 为什么我的 `/etc/yum.repos.d/*` 全没了？

Pigsty会在infra节点上构建的本地软件仓库源中包含所有依赖项。而所有普通节点会根据 [`node_repo_modules`](/docs/node/param#node_repo_modules) 的默认配置 `local` 来引用并使用 Infra 节点上的本地软件源。

这一设计从而避免了互联网访问，增强了安装过程的稳定性与可靠性。所有原有的源定义文件会被移动到 `/etc/yum.repos.d/backup` 目录中，您只要按需复制回来即可。

如果您想在普通节点安装过程中保留原有的源定义文件，将 [`node_repo_remove`](/docs/node/param#node_repo_remove) 设置为`false`即可。

如果您想在 Infra 节点构建本地源的过程中保留原有的源定义文件，将 [`repo_remove`](/docs/infra/param#repo_remove) 设置为`false`即可。



----------------

## 为什么我的命令行提示符变样了？怎么恢复？

Pigsty 使用的 Shell 命令行提示符是由环境变量 `PS1` 指定，定义在 `/etc/profile.d/node.sh` 文件中。

如果您不喜欢，想要修改或恢复原样，可以将这个文件移除，重新登陆即可。




----------------

## 为什么我的主机名变了？

在两种情况下，Pigsty 会修改您的节点主机名：

* 显式定义了 [`nodename`](/docs/node/param#nodename_overwrite) 的值（默认为空）
* 节点上声明了 [**`PGSQL`**](/docs/pgsql) 模块，且启用了 [**`node_id_from_pg`**](/docs/node/param#node_id_from_pg) 参数（默认为 `true`）

如果您不希望修改主机名，可以在全局/集群/实例层面修改 [**`nodename_overwrite`**](/docs/node/param#nodename_overwrite) 参数为 `false` （默认值为 `true`）。

详情请参考 [**`NODE_ID`**](/docs/node/param#node_id) 一节。




----------------

## 腾讯云的 OpenCloudOS 有什么兼容性问题？

OpenCloudOS 上的 `softdog` 内核模块不可用，需要从 `node_kernel_modules` 中移除。在配置文件全局变量中添加以下配置项以覆盖：

```yaml
node_kernel_modules: [ ip_vs, ip_vs_rr, ip_vs_wrr, ip_vs_sh ]
```


----------------

## Debian 系统有哪些常见问题？

在 Debian/Ubuntu 系统上使用 Pigsty 时，可能遇到以下问题：

**本地语言环境缺失**

如果系统提示 locale 相关错误，可以使用以下命令修复：

```bash
localedef -i en_US -f UTF-8 en_US.UTF-8
```

**缺少 rsync 工具**

Pigsty 依赖 rsync 进行文件同步，如果系统未安装，可以使用以下命令安装：

```bash
apt-get install rsync
```
