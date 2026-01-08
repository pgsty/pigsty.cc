---
title: 管理机制
weight: 370
description: 关于管理用户、管理节点，Sudo、SSH、可达性验证，以及防火墙的配置与准备
icon: fa-solid fa-user-shield
module: [PIGSTY]
categories: [教程]
---


Pigsty 需要一个在所有被管理节点上具有免密 [**SSH**](#ssh) 和 [**Sudo**](#sudo) 权限的操作系统 **管理用户**。

这个用户需要能够通过 ssh 访问到所有被管理节点，并且能够在这些节点上执行 sudo 命令。

要想将节点纳入 Pigsty 中管理，


--------

## 用户

通常我们会选择 `dba` 或 `admin` 这样的用户名称，并避免使用 `root` 与 `postgres`：

- 使用 `root` 进行部署是可行的，但不符合生产最佳实践。
- 使用 `postgres` （[**`pg_dbsu`**](/docs/pgsql/param#pg_dbsu)）作为管理员用户是严格禁止的。


--------

## 免密码

如果您可以接受为每个 `ssh` 和 `sudo` 命令输入密码，则免密码要求是可选的。

您可以在 [**执行剧本**](/docs/setup/playbook/) 时使用 `-k|--ask-pass` 来提示输入 **SSH** 密码，
以及 `-K|--ask-become-pass` 来提示输入 **sudo** 密码。

```bash
./deploy.yml -k -K
```

一些企业的安全策略可能不允许免密 `ssh` 或 `sudo`，在这种情况下，您可以使用上述选项。

或者考虑配置一个 sudo 密码缓存时间较长的 sudoers 规则，以减少密码提示的频率。



----------------

## 创建管理员用户

通常，您的服务器/虚拟机供应商会为您创建一个初始管理员用户。

如果你对这个用户不满意，Pigsty 的部署剧本可以为你创建一个 [**新的管理员用户**](#创建管理员用户)。

假设您在节点上有 root 权限，或有一个现有的管理员用户，您可以使用 Pigsty 本身创建管理员用户：

```bash
./node.yml -k -K -t node_admin -e ansible_user=[你准备使用的管理员名称]
```

它将利用现有的管理员创建新的管理员，创建由以下参数描述的专用 `dba`（uid=88）用户，并正确配置 sudo / ssh。

| 名称                                                            | 描述           | 默认值    |
|---------------------------------------------------------------|--------------|--------|
| [`node_admin_enabled`](/docs/node/param#node_admin_enabled)   | 启用节点管理员用户    | `true` |
| [`node_admin_uid`](/docs/node/param#node_admin_uid)           | 节点管理员用户的 UID | `88`   |
| [`node_admin_username`](/docs/node/param#node_admin_username) | 节点管理员用户名     | `dba`  |
{.full-width}



----------------

## Sudo

所有 [**管理员用户**](#用户) 都应该在所有被管理节点上具有 `sudo` 权限【最好带有免密码执行权限】。

如果您想从头开始配置具有免密 `sudo` 权限的管理员用户，可以编辑/创建 suoder 文件（假设用户名为 `vagrant`）：

```bash
echo '%vagrant ALL=(ALL) NOPASSWD: ALL' | sudo tee /etc/sudoers.d/vagrant
```

假设您的管理员用户名选择是 `dba`，那么 `/etc/sudoers.d/dba` 内容应该是：

```bash
%dba ALL=(ALL) NOPASSWD: ALL
```

如果您的安全策略不允许免密码 `sudo`，请将 `NOPASSWD:` 部分删除：

```bash
%dba ALL=(ALL) ALL
```

Ansible 依赖 `sudo` 在被管理节点上以 root 权限执行命令。
在 `sudo` 不可用的环境中（比如 Docker 容器内）需要先安装 `sudo` 才能正确部署。



----------------

## SSH

您的当前用户应该能够以相应的管理员用户身份免密 SSH 访问所有被管理节点。

您的当前用户可以是管理员用户本身，但不是必需的，只要您能以管理员用户身份 SSH。

SSH 配置是 Linux 101，但我们会在此处介绍基础知识，以防您不熟悉：


### 生成 SSH 密钥

如果您没有 SSH 密钥对，请生成一个：

```bash
ssh-keygen -t rsa -b 2048 -N '' -f ~/.ssh/id_rsa -q
```

如果您没有密钥对，Pigsty 会在 [`bootstrap`](/docs/setup/offline#bootstrap) 阶段为您完成此操作。


### 复制 SSH 密钥

您需要将生成的公钥分发到远程（和本地）服务器，并将其放入所有节点上管理员用户的 `~/.ssh/authorized_keys` 文件中。
可以使用 `ssh-copy-id` 工具。

```bash
ssh-copy-id <ip>                        # 交互式密码输入
sshpass -p <password> ssh-copy-id <ip>  # 非交互式（谨慎使用）
```


### 使用别名

当无法直接 SSH 访问时（由于跳板机、其他端口、凭据等），考虑在 `~/.ssh/config` 中配置 SSH 别名：

```bash
Host meta
    HostName 10.10.10.10
    User dba                      # 远程上不同的用户
    IdentityFile /etc/dba/id_rsa  # 不是普通密钥
    Port 24                       # 不是众所周知的端口
```

并在清单中引用别名，使用 `ansible_host` 指定真实的 SSH 别名：

```yaml
nodes:
  hosts:          # 如果节点 `10.10.10.10` 需要 SSH 别名 `meta`
    10.10.10.10: { ansible_host: meta }  # 通过 `ssh meta` 访问
```

SSH 参数可以直接在 Ansible 中使用，详情请查看 [Ansible Inventory Guide](https://docs.ansible.com/ansible/latest/inventory_guide/intro_inventory.html#connecting-to-hosts-behavioral-inventory-parameters)。
通过这种技术，您可以使用跳板机访问私有网络中的节点，或者使用不同的端口和凭据访问节点。
或者是利用本地笔记本作为管理节点。



----------------

## 验证可达性

您应该能够从管理节点通过当前用户免密 `ssh` 访问所有被管理节点。
远程用户（管理员用户）应该有权限运行免密 `sudo` 命令。
要验证免密 ssh sudo 是否工作，在管理节点上对所有被管理节点运行此命令：

```bash
ssh <ip|alias> 'sudo ls'
```

如果没有密码提示或错误，免密 ssh/sudo 按预期工作。





--------

## 防火墙

在生产环境部署时，通常需要设置防火墙，以阻止未经授权的端口访问。

默认情况下，你可以阻断办公网/互联网对节点的入站访问，只开放下列端口：

- 要通过 ssh 访问节点，您必须允许 SSH 端口 `22` 入站访问。
- 要访问 WebUI 服务，您必须允许 HTTP（`80`）/ HTTPS（`443`）入站访问。
- 要访问 PostgreSQL 数据库服务，您必须允许 PostgreSQL 的 `5432` 入站访问。

如果您通过其他端口访问 PostgreSQL 服务，请相应地允许它们。
Pigsty 组件使用的端口列表，请参考：[**使用的端口**](/docs/node/)。

- `5432`: PostgreSQL 数据库
- `6432`: Pgbouncer 连接池
- `5433`: PG 主要服务
- `5434`: PG 副本服务
- `5436`: PG 默认服务
- `5438`: PG 离线服务



