---
title: 管理预案
weight: 3650
description: Silo 对象存储集群的创建、销毁、升级、扩缩容与故障处理。
icon: fa-solid fa-building-columns
module: [MINIO]
categories: [任务]
---


------

## 创建集群

要创建一个集群，在配置清单中定义好后，执行 [`minio.yml`](/docs/minio/playbook#minioyml) 剧本即可。

```yaml
minio: { hosts: { 10.10.10.10: { minio_seq: 1 } }, vars: { minio_cluster: minio, minio_type: silo } }
```

例如，上面的配置定义了一个 SNSD [单机单盘](/docs/minio/config#单机单盘) Silo 集群，使用以下命令即可创建所选对象存储集群：

```bash
./minio.yml -l minio  # 在 minio 分组上安装 Silo
```


------

## 销毁集群

要销毁一个集群，执行专用的 [`minio-rm.yml`](/docs/minio/playbook#minio-rmyml) 剧本即可：

```bash
./minio-rm.yml -l minio --check -e minio_type=silo                 # 先以完全相同的目标预演
./minio-rm.yml -l minio -e minio_type=silo                         # 移除 Silo 集群
./minio-rm.yml -l minio -e minio_type=silo -e minio_rm_data=false  # 移除集群但保留数据与配置
./minio-rm.yml -l minio -e minio_type=silo -e minio_rm_pkg=true    # 移除集群并卸载软件包
```

删除角色不为 `minio_type` 提供默认值。若清单中未显式定义，必须像上例一样通过 `-e minio_type=silo` 指定；当前其他取值会被拒绝。

{{% alert title="架构变更：Pigsty v3.6+" color="info" %}}
从 Pigsty v3.6 开始，集群移除操作已从 `minio.yml` 剧本迁移至专用的 `minio-rm.yml` 剧本。旧的 `minio_clean` 任务已被弃用。
{{% /alert %}}

移除剧本会依次尝试以下操作：
- 从 VictoriaMetrics 监控系统中注销对象存储目标
- 从 INFRA 节点的 DNS 服务中移除记录
- 停止并禁用 `silo.service`
- 删除数据目录和 Silo 配置（由 `minio_rm_data` 控制，默认执行）
- 卸载 Silo 与 `mcli` 软件包（由 `minio_rm_pkg` 控制，默认不执行）

该剧本启用了错误容忍，返回状态不能单独证明服务、数据、DNS 与监控目标已经全部按预期处理；真实运行后应逐项核对现场。



--------

## 集群扩容

本节使用 Silo 保留的 MinIO 兼容管理接口。生产操作前必须按实际 Silo 版本核对上游约束并完成专项演练。

- [集群扩容教程](https://min.io/docs/minio/linux/operations/install-deploy-manage/expand-minio-deployment.html)

Silo 不能直接改变既有存储池的节点或磁盘数量，但可以通过新增存储池扩容。

假设您有 [这样一个](/docs/minio/config#多机多盘) 四节点 Silo 集群，希望通过新增四节点存储池将容量扩展一倍。

```yaml
minio:
  hosts:
    10.10.10.10: { minio_seq: 1 , nodename: minio-1 }
    10.10.10.11: { minio_seq: 2 , nodename: minio-2 }
    10.10.10.12: { minio_seq: 3 , nodename: minio-3 }
    10.10.10.13: { minio_seq: 4 , nodename: minio-4 }
  vars:
    minio_type: silo
    minio_cluster: minio
    minio_data: '/data{1...4}'
    minio_buckets: [ { name: pgsql }, { name: infra }, { name: redis } ]
    minio_users:
      - { access_key: dba , secret_key: S3User.DBA, policy: consoleAdmin }
      - { access_key: pgbackrest , secret_key: S3User.SomeNewPassWord , policy: readwrite }

    # bind a node l2 vip (10.10.10.9) to minio cluster (optional)
    node_cluster: minio
    vip_enabled: true
    vip_vrid: 128
    vip_address: 10.10.10.9
    vip_interface: eth1

    # expose minio service with haproxy on all nodes
    haproxy_services:
      - name: minio                    # [REQUIRED] service name, unique
        port: 9002                     # [REQUIRED] service port, unique
        balance: leastconn             # [OPTIONAL] load balancer algorithm
        options:                       # [OPTIONAL] minio health check
          - option httpchk
          - option http-keep-alive
          - http-check send meth OPTIONS uri /minio/health/live
          - http-check expect status 200
        servers:
          - { name: minio-1 ,ip: 10.10.10.10 ,port: 9000 ,options: 'check-ssl ca-file /etc/pki/ca.crt check port 9000' }
          - { name: minio-2 ,ip: 10.10.10.11 ,port: 9000 ,options: 'check-ssl ca-file /etc/pki/ca.crt check port 9000' }
          - { name: minio-3 ,ip: 10.10.10.12 ,port: 9000 ,options: 'check-ssl ca-file /etc/pki/ca.crt check port 9000' }
          - { name: minio-4 ,ip: 10.10.10.13 ,port: 9000 ,options: 'check-ssl ca-file /etc/pki/ca.crt check port 9000' }
```

首先，修改 Silo 集群定义，新增四台节点，按顺序分配序列号 5 到 8。
这里的关键一步是修改 [`minio_volumes`](/docs/minio/param#minio_volumes) 参数，将新的四个节点指定为一个新的 **存储池**。

```yaml
minio:
  hosts:
    10.10.10.10: { minio_seq: 1 , nodename: minio-1 }
    10.10.10.11: { minio_seq: 2 , nodename: minio-2 }
    10.10.10.12: { minio_seq: 3 , nodename: minio-3 }
    10.10.10.13: { minio_seq: 4 , nodename: minio-4 }
    # 新增的四个节点
    10.10.10.14: { minio_seq: 5 , nodename: minio-5 }
    10.10.10.15: { minio_seq: 6 , nodename: minio-6 }
    10.10.10.16: { minio_seq: 7 , nodename: minio-7 }
    10.10.10.17: { minio_seq: 8 , nodename: minio-8 }

  vars:
    minio_type: silo
    minio_cluster: minio
    minio_data: '/data{1...4}'
    minio_volumes: 'https://minio-{1...4}.pigsty:9000/data{1...4} https://minio-{5...8}.pigsty:9000/data{1...4}'  # 新增的集群配置
    # …… 省略其他配置
```

第二步，将这些节点交由 Pigsty 纳管：

```bash
./node.yml -l 10.10.10.14,10.10.10.15,10.10.10.16,10.10.10.17
```

第三步，在新节点上使用 Ansible [剧本](/docs/minio/playbook/) 安装并准备 Silo：

```bash
./minio.yml -l 10.10.10.14,10.10.10.15,10.10.10.16,10.10.10.17 -t minio_install
```

第四步，在 **整个集群** 上使用 Ansible [剧本](/docs/minio/playbook/) 重新配置 Silo：

```bash
./minio.yml -l minio -t minio_config
```

> 这一步会更新现有四个节点的 `MINIO_VOLUMES` 配置

第五步，一次性重启整个 Silo 集群（请注意，不要滚动重启！）：

```bash
./minio.yml -l minio -t minio_launch -f 10   # 最多 10 并发，确保 8 个节点同时重启
```

第六步（可选）：如果您使用了负载均衡，那么请确保负载均衡器的配置也已经更新。例如，将新的四个节点加入到负载均衡器的配置中：

```yaml
# expose minio service with haproxy on all nodes
haproxy_services:
  - name: minio                    # [REQUIRED] service name, unique
    port: 9002                     # [REQUIRED] service port, unique
    balance: leastconn             # [OPTIONAL] load balancer algorithm
    options:                       # [OPTIONAL] minio health check
      - option httpchk
      - option http-keep-alive
      - http-check send meth OPTIONS uri /minio/health/live
      - http-check expect status 200
    servers:
      - { name: minio-1 ,ip: 10.10.10.10 ,port: 9000 ,options: 'check-ssl ca-file /etc/pki/ca.crt check port 9000' }
      - { name: minio-2 ,ip: 10.10.10.11 ,port: 9000 ,options: 'check-ssl ca-file /etc/pki/ca.crt check port 9000' }
      - { name: minio-3 ,ip: 10.10.10.12 ,port: 9000 ,options: 'check-ssl ca-file /etc/pki/ca.crt check port 9000' }
      - { name: minio-4 ,ip: 10.10.10.13 ,port: 9000 ,options: 'check-ssl ca-file /etc/pki/ca.crt check port 9000' }

      - { name: minio-5 ,ip: 10.10.10.14 ,port: 9000 ,options: 'check-ssl ca-file /etc/pki/ca.crt check port 9000' }
      - { name: minio-6 ,ip: 10.10.10.15 ,port: 9000 ,options: 'check-ssl ca-file /etc/pki/ca.crt check port 9000' }
      - { name: minio-7 ,ip: 10.10.10.16 ,port: 9000 ,options: 'check-ssl ca-file /etc/pki/ca.crt check port 9000' }
      - { name: minio-8 ,ip: 10.10.10.17 ,port: 9000 ,options: 'check-ssl ca-file /etc/pki/ca.crt check port 9000' }
```

然后，执行 `node.yml` 剧本的 `haproxy` 子任务，更新负载均衡器配置：

```bash
./node.yml -l minio -t haproxy_config,haproxy_reload   # 更新负载均衡器配置并在线加载
```

如果您使用 L2 VIP 来确保可靠的负载均衡器接入，那么还需要将新的节点（如果有）加入到现有 NODE VIP 分组中：

```bash
./node.yml -l minio -t node_vip  # 刷新集群 L2 VIP 配置 
```


--------

## 集群缩容

Silo 不能直接缩减既有存储池的节点或磁盘数量，但可以在存储池层次退役：先新增存储池，将旧池数据排干迁移，再退役旧池。

- [集群缩容教程](https://min.io/docs/minio/linux/operations/install-deploy-manage/decommission-server-pool.html)





--------

## 集群升级

- [集群升级教程](https://min.io/docs/minio/linux/operations/install-deploy-manage/upgrade-minio-deployment.html)

首先，将新版 `silo` 与 `mcli` 软件包下载至 INFRA 节点的本地软件仓库，然后使用 SOW 重建仓库索引：

```bash
./infra.yml -t repo_create
```

其次，升级 Silo 服务端与 `mcli` 兼容客户端：

```bash
ansible minio -m package -b -a 'name=silo state=latest'  # 服务端
ansible minio -m package -b -a 'name=mcli state=latest'  # 兼容客户端
```

最后，使用角色重启完整 Silo 集群：

```bash
./minio.yml -l minio -t minio_config,minio_launch
```

软件包升级与从旧 MinIO 迁移到 Silo 是两件事。前者针对已经运行 Silo 的集群；后者必须另行完成数据兼容性验证、备份、停机窗口与回滚演练，不能直接套用本节的升级命令。



--------

## 替换故障节点

- [节点故障教程](https://min.io/docs/minio/linux/operations/data-recovery/recover-after-node-failure.html#minio-restore-hardware-failure-node)

```bash
# 1. 从集群中下线故障节点
bin/node-rm <your_old_node_ip>

# 2. 替换故障节点，保留原节点名称（如果 IP 变化，需要修改 Silo 集群定义）
bin/node-add <your_new_node_ip>

# 3. 在新节点上安装配置 Silo
./minio.yml -l <your_new_node_ip>

# 4. 指示 Silo 执行恢复动作
mcli admin heal
```



--------

## 替换故障磁盘

- [磁盘故障教程](https://min.io/docs/minio/linux/operations/data-recovery/recover-after-drive-failure.html#minio-restore-hardware-failure-drive)

```bash
# 1. 从集群中删除故障磁盘
umount /dev/<your_disk_device>

# 2. 替换故障磁盘，使用xfs格盘
mkfs.xfs /dev/sdb -L DRIVE1

# 3. 不要忘记设置开机自动挂载
vi /etc/fstab
# LABEL=DRIVE1     /mnt/drive1    xfs     defaults,noatime  0       2

# 4. 重新挂载
mount -a

# 5. 指示 Silo 执行恢复动作
mcli admin heal
```


--------

## 管理 Silo 密码

[**`minio_secret_key`**](/docs/minio/param#minio_secret_key)（默认 `S3User.MinIO`）是 Silo root 用户密码，渲染到 `/etc/default/silo`。

修改密码后，使用以下命令刷新配置并重启服务（需同时重启整个集群）：

```bash
./minio.yml -l minio -t minio_config,minio_launch,minio_alias -f 30  # 重新渲染配置文件，写入 Alias
```

如果要修改 Silo 普通用户的密码，例如 `pgbackrest`，请在可以访问 Silo 的节点上执行：

```bash
set +o history
mcli admin user passwd sss pgbackrest <YOUR_NEW_PASSWORD>
set -o history
```

然后还要修改引用该用户密码的所有配置。例如，当 pgBackRest 使用 `minio` S3 兼容仓库预设时，需要同步更新访问密钥密码：

```bash
./pgsql.yml -t pgbackrest_config
```
