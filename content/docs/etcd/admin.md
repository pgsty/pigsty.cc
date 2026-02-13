---
title: 管理预案
weight: 3430
description: etcd 集群管理 SOP：创建，销毁，扩缩容，更新配置，RBAC 配置的详细说明。
icon: fa-solid fa-building-columns
module: [ETCD]
categories: [任务]
---


以下是一些常见的 etcd 管理任务 SOP（预案）：

- [创建集群](#创建集群)：如何初始化 etcd 集群？
- [销毁集群](#销毁集群)：如何销毁 etcd 集群？
- [环境变量](#环境变量)：如何配置 etcd 客户端，以访问 etcd 服务器集群？
- [RBAC 认证](#rbac-认证)：如何使用 etcd 的 RBAC 认证？
- [重载配置](#重载配置)：如何更新客户端使用的 etcd 服务器成员列表？
- [添加成员](#添加成员)：如何向现有 etcd 集群添加新成员？
- [移除成员](#移除成员)：如何从 etcd 集群移除老成员？
- [便捷脚本](#便捷脚本)：使用 `bin/etcd-add` 和 `bin/etcd-rm` 简化操作

更多问题请参考 [FAQ：ETCD](/docs/etcd/faq/)。


------

## 创建集群

要创建一个集群，首先需要在 [**配置清单**](/docs/setup/config/) 中定义 `etcd` 集群：

```yaml
etcd:
  hosts:
    10.10.10.10: { etcd_seq: 1 }
    10.10.10.11: { etcd_seq: 2 }
    10.10.10.12: { etcd_seq: 3 }
  vars: { etcd_cluster: etcd }
```

执行 [`etcd.yml`](/docs/etcd/playbook#etcdyml) 剧本即可。

```bash
./etcd.yml  # 初始化 etcd 集群
```

{{% alert title="架构变化：Pigsty v3.6+" color="info" %}}
自 Pigsty v3.6 起，`etcd.yml` 剧本专注于集群安装和成员添加，不再包含移除功能。所有移除操作请使用独立的 `etcd-rm.yml` 剧本。
{{% /alert %}}

对于已初始化的生产环境 etcd 集群，可以打开防误删保护 [`etcd_safeguard`](/docs/etcd/param#etcd_safeguard)，避免误删现有的 etcd 实例。





------

## 销毁集群

要销毁一个 etcd 集群，请使用独立的 [`etcd-rm.yml`](/docs/etcd/playbook#etcd-rmyml) 剧本。执行此命令前请务必三思！

```bash
./etcd-rm.yml                         # 移除整个 etcd 集群
./etcd-rm.yml -e etcd_safeguard=false # 强制覆盖防误删保险
```

或使用便捷脚本：

```bash
bin/etcd-rm                           # 移除整个 etcd 集群
```

移除剧本会尊重 [`etcd_safeguard`](/docs/etcd/param#etcd_safeguard) 防误删保险的配置。如果该参数设置为 `true`，剧本将中止执行以防止误删。

{{% alert title="注意" color="warning" %}}
在移除 etcd 集群之前，请确保没有 PostgreSQL 集群正在使用该 etcd 作为 DCS 服务。否则会导致 PostgreSQL 高可用功能失效。
{{% /alert %}}




------

## 环境变量

Pigsty 默认使用 etcd v3 API（v3.6+ 已移除 v2 API 支持）。Pigsty 会在 etcd 节点上自动配置环境变量脚本 `/etc/profile.d/etcdctl.sh`，登录后会自动加载。

以下是 etcd 客户端配置环境变量的示例：

```bash
alias e="etcdctl"
alias em="etcdctl member"
export ETCDCTL_ENDPOINTS=https://10.10.10.10:2379
export ETCDCTL_CACERT=/etc/etcd/ca.crt
export ETCDCTL_CERT=/etc/etcd/server.crt
export ETCDCTL_KEY=/etc/etcd/server.key
```

Pigsty v4.0 默认启用 RBAC 认证，因此还需要配置用户认证：

```bash
export ETCDCTL_USER="root:$(cat /etc/etcd/etcd.pass)"
```

配置好客户端环境变量后，你可以使用以下命令进行 etcd CRUD 操作：

```bash
e put a 10 ; e get a; e del a   # 基本 KV 操作
e member list                    # 列出集群成员
e endpoint health                # 检查端点健康状态
e endpoint status                # 查看端点状态
```



------

## RBAC 认证

Pigsty v4.0 默认启用 etcd 的 RBAC（基于角色的访问控制）认证机制。在集群初始化时，`etcd_auth` 任务会自动创建 root 用户并启用认证。

**root 用户密码**由 [`etcd_root_password`](/docs/etcd/param#etcd_root_password) 参数指定，默认值为 `Etcd.Root`。密码存储在 `/etc/etcd/etcd.pass` 文件中，权限为 `0640`（root 所有，etcd 组可读）。

**在生产环境中，强烈建议修改默认密码**：

```yaml
etcd:
  hosts:
    10.10.10.10: { etcd_seq: 1 }
    10.10.10.11: { etcd_seq: 2 }
    10.10.10.12: { etcd_seq: 3 }
  vars:
    etcd_cluster: etcd
    etcd_root_password: 'YourSecurePassword'  # 修改默认密码
```

**客户端认证方式**：

```bash
# 方式一：使用环境变量（推荐，已自动配置在 /etc/profile.d/etcdctl.sh）
export ETCDCTL_USER="root:$(cat /etc/etcd/etcd.pass)"

# 方式二：在命令行中指定
etcdctl --user root:YourSecurePassword member list
```



------

## 重载配置

如果 etcd 集群的成员发生变化（添加或移除成员），我们需要刷新对 etcd 服务端点的引用。目前 Pigsty 中有以下几处 etcd 引用需要更新：

| 配置位置 | 配置文件 | 更新方式 |
|:--------|:--------|:--------|
| etcd 成员配置 | `/etc/etcd/etcd.conf` | `./etcd.yml -t etcd_conf` |
| etcdctl 环境变量 | `/etc/profile.d/etcdctl.sh` | `./etcd.yml -t etcd_config` |
| Patroni DCS 配置 | `/etc/patroni/patroni.yml` | `./pgsql.yml -t pg_conf` |
| VIP-Manager 配置 | `/etc/default/vip-manager.yml` | `./pgsql.yml -t pg_vip_config` |
{.full-width}

**刷新 etcd 成员配置文件**：

```bash
./etcd.yml -t etcd_conf                           # 刷新 /etc/etcd/etcd.conf
ansible etcd -f 1 -b -a 'systemctl restart etcd'  # 可选：逐一重启 etcd 实例
```

**刷新 etcdctl 客户端环境变量**：

```bash
./etcd.yml -t etcd_config                         # 刷新 /etc/profile.d/etcdctl.sh
```

**更新 Patroni DCS 端点配置**：

```bash
./pgsql.yml -t pg_conf                            # 重新生成 patroni 配置
ansible all -f 1 -b -a 'systemctl reload patroni' # 重新加载 patroni 配置
```

**更新 VIP-Manager 端点配置**（仅当使用 PGSQL L2 VIP 时需要）：

```bash
./pgsql.yml -t pg_vip_config                           # 重新生成 vip-manager 配置
ansible all -f 1 -b -a 'systemctl restart vip-manager' # 重启 vip-manager
```

{{% alert title="提示" color="info" %}}
使用 `bin/etcd-add` 和 `bin/etcd-rm` 便捷脚本时，脚本会在操作完成后提示您需要执行的配置刷新命令。
{{% /alert %}}



------

## 添加成员

ETCD 参考: [添加成员](https://etcd.io/docs/v3.6/op-guide/runtime-configuration/#add-a-new-member)

### 推荐方式：使用便捷脚本

使用 `bin/etcd-add` 脚本是向现有 etcd 集群添加新成员的**推荐方式**：

```bash
# 首先在配置清单中添加新成员定义，然后执行：
bin/etcd-add <ip>              # 添加单个新成员
bin/etcd-add <ip1> <ip2> ...   # 添加多个新成员
```

脚本会自动完成以下操作：
- 验证 IP 地址有效性
- 执行 `etcd.yml` 剧本（自动设置 `etcd_init=existing`）
- 提供安全警告和倒计时
- 操作完成后提示配置刷新命令

### 手动方式：分步操作

向现有的 etcd 集群添加新成员需要以下步骤：

1. **更新配置清单**：将新实例添加到 `etcd` 组
2. **通知集群**：执行 `etcdctl member add` 命令（可选，剧本会自动执行）
3. **初始化新成员**：使用 `etcd_init=existing` 参数运行剧本
4. **提升成员**：将学习者提升为正式成员（可选，使用 `etcd_learner=true` 时需要）
5. **重载配置**：更新所有客户端的 etcd 端点引用

```bash
# 配置清单更新后，初始化新成员
./etcd.yml -l <new_ins_ip> -e etcd_init=existing

# 如果使用 learner 模式，需要手动提升
etcdctl member promote <new_ins_server_id>
```

{{% alert title="重要" color="warning" %}}
添加新成员时必须使用 `etcd_init=existing` 参数，否则新实例会尝试创建新集群而非加入现有集群。
{{% /alert %}}

<details><summary>详细步骤：向etcd集群添加成员</summary>

下面是具体操作的详细细节，让我们从一个单实例 etcd 集群开始：

```yaml
etcd:
  hosts:
    10.10.10.10: { etcd_seq: 1 } # <--- 集群中原本存在的唯一实例
    10.10.10.11: { etcd_seq: 2 } # <--- 将此新成员定义添加到清单中
  vars: { etcd_cluster: etcd }
```

使用便捷脚本添加新成员（推荐）：

```bash
$ bin/etcd-add 10.10.10.11
```

或者手动操作。首先使用 `etcdctl member add` 向现有 etcd 集群宣告新的学习者实例 `etcd-2` 即将到来：

```bash
$ etcdctl member add etcd-2 --learner=true --peer-urls=https://10.10.10.11:2380
Member 33631ba6ced84cf8 added to cluster 6646fbcf5debc68f

ETCD_NAME="etcd-2"
ETCD_INITIAL_CLUSTER="etcd-2=https://10.10.10.11:2380,etcd-1=https://10.10.10.10:2380"
ETCD_INITIAL_ADVERTISE_PEER_URLS="https://10.10.10.11:2380"
ETCD_INITIAL_CLUSTER_STATE="existing"
```

使用 `etcdctl member list`（或 `em list`）检查成员列表，我们可以看到一个 `unstarted` 新成员：

```bash
33631ba6ced84cf8, unstarted, , https://10.10.10.11:2380, , true       # 这里有一个未启动的新成员
429ee12c7fbab5c1, started, etcd-1, https://10.10.10.10:2380, https://10.10.10.10:2379, false
```

接下来使用 `etcd.yml` 剧本初始化新的 etcd 实例 `etcd-2`，完成后，我们可以看到新成员已经启动：

```bash
$ ./etcd.yml -l 10.10.10.11 -e etcd_init=existing    # 一定要添加 existing 参数
...
33631ba6ced84cf8, started, etcd-2, https://10.10.10.11:2380, https://10.10.10.11:2379, true
429ee12c7fbab5c1, started, etcd-1, https://10.10.10.10:2380, https://10.10.10.10:2379, false
```

新成员初始化完成并稳定运行后，可以将新成员从学习者提升为追随者：

```bash
$ etcdctl member promote 33631ba6ced84cf8   # 将学习者提升为追随者
Member 33631ba6ced84cf8 promoted in cluster 6646fbcf5debc68f

$ em list                # 再次检查，新成员已提升为正式成员
33631ba6ced84cf8, started, etcd-2, https://10.10.10.11:2380, https://10.10.10.11:2379, false
429ee12c7fbab5c1, started, etcd-1, https://10.10.10.10:2380, https://10.10.10.10:2379, false
```

新成员添加完成，请不要忘记 [重载配置](#重载配置) ，让所有客户端也知道新成员的存在。

重复以上步骤，可以添加更多成员。记住，生产环境中至少要使用 3 个成员。

</details>




----------------

## 移除成员

### 推荐方式：使用便捷脚本

使用 `bin/etcd-rm` 脚本是从 etcd 集群移除成员的**推荐方式**：

```bash
bin/etcd-rm <ip>              # 移除指定成员
bin/etcd-rm <ip1> <ip2> ...   # 移除多个成员
bin/etcd-rm                   # 移除整个 etcd 集群
```

脚本会自动完成以下操作：
- 从集群中优雅地移除成员
- 停止并禁用 etcd 服务
- 清理数据和配置文件
- 从监控系统中注销

### 手动方式：分步操作

要从 etcd 集群中删除一个成员实例，通常需要以下步骤：

1. **从配置清单中移除**：注释或删除该实例，并 [重载配置](#重载配置)
2. **从集群中踢除**：使用 `etcdctl member remove` 命令
3. **清理实例**：使用 `etcd-rm.yml` 剧本清理实例

```bash
# 使用专用移除剧本（推荐）
./etcd-rm.yml -l <ip>

# 或者手动操作
etcdctl member remove <server_id>      # 从集群中踢除
./etcd-rm.yml -l <ip>                  # 清理实例
```

<details><summary>详细步骤：从etcd集群移除成员</summary>

让我们以一个 3 节点的 etcd 集群为例，从中移除 3 号实例。

**方法一：使用便捷脚本（推荐）**

```bash
$ bin/etcd-rm 10.10.10.12
```

脚本会自动完成所有操作，包括从集群中移除成员、停止服务、清理数据。

**方法二：手动操作**

首先，为了刷新配置，您需要 **注释** 待删除的成员，然后 [重载配置](#重载配置)，让所有客户端都不要再使用此实例。

```yaml
etcd:
  hosts:
    10.10.10.10: { etcd_seq: 1 }
    10.10.10.11: { etcd_seq: 2 }
    # 10.10.10.12: { etcd_seq: 3 }   # <---- 注释掉这个成员
  vars: { etcd_cluster: etcd }
```

然后，使用移除剧本：

```bash
$ ./etcd-rm.yml -l 10.10.10.12
```

剧本会自动执行以下操作：
1. 获取成员列表并找到对应的成员 ID
2. 执行 `etcdctl member remove` 从集群中踢除
3. 停止 etcd 服务
4. 清理数据和配置文件

如果需要手动操作，可以这样做：

```bash
$ etcdctl member list
429ee12c7fbab5c1, started, etcd-1, https://10.10.10.10:2380, https://10.10.10.10:2379, false
33631ba6ced84cf8, started, etcd-2, https://10.10.10.11:2380, https://10.10.10.11:2379, false
93fcf23b220473fb, started, etcd-3, https://10.10.10.12:2380, https://10.10.10.12:2379, false  # <--- 移除这个

$ etcdctl member remove 93fcf23b220473fb  # 从集群中踢除
Member 93fcf23b220473fb removed from cluster 6646fbcf5debc68f
```

执行完毕后，您可以将其从配置清单中永久删除，移除成员至此完成。

重复以上步骤，可以移除更多成员，与 [添加成员](#添加成员) 配合使用，可以对 etcd 集群进行滚动升级搬迁。

</details>



------

## 便捷脚本

Pigsty v3.6+ 提供了便捷脚本简化 etcd 集群的扩容和缩容操作：

### `bin/etcd-add`

向现有 etcd 集群添加新成员：

```bash
bin/etcd-add <ip>              # 添加单个新成员
bin/etcd-add <ip1> <ip2> ...   # 添加多个新成员
```

脚本功能：
- 验证 IP 地址格式
- 自动设置 `etcd_init=existing` 参数
- 执行 `etcd.yml` 剧本完成成员添加
- 操作完成后提示配置刷新命令

### `bin/etcd-rm`

从 etcd 集群移除成员或整个集群：

```bash
bin/etcd-rm <ip>              # 移除指定成员
bin/etcd-rm <ip1> <ip2> ...   # 移除多个成员
bin/etcd-rm                   # 移除整个 etcd 集群
```

脚本功能：
- 提供安全警告和确认倒计时
- 自动执行 `etcd-rm.yml` 剧本
- 优雅地从集群中移除成员
- 清理数据和配置文件


--------

## 管理 Etcd 密码

[**`etcd_root_password`**](/docs/etcd/param#etcd_root_password) 参数定义了 etcd 集群的 root 用户密码。

要修改此密码，你需要访问到 etcd 端点，例如在 [**INFRA节点**](/docs/concept/arch/node#infra节点) 与 [**ETCD节点**](/docs/concept/arch/node#etcd节点) 上使用 [**管理用户**](/docs/deploy/admin) 执行：

```bash
e user passwd root  # 修改 etcd root 用户密码
```

然后你应该刷新所有对 etcd root 密码的引用，包括 INFRA 节点上的 Patroni 客户端配置与 etcdctl 客户端环境变量：

```bash
./infra.yml -t env_patroni    # 刷新 /infra/conf/patronictl.yml 对 etcd root 密码的引用
./etcd.yml  -t etcd_conf      # 刷新 /etc/etcd/etcd.pass 与 /etc/profile.d/etcdctl.sh
```
