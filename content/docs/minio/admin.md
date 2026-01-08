---
title: 管理预案
weight: 3650
description: MinIO 集群管理 SOP：创建，销毁，扩容，缩容，节点故障与磁盘故障的处理。
icon: fa-solid fa-building-columns
module: [MINIO]
categories: [任务]
---


------

## 创建集群

要创建一个集群，在配置清单中定义好后，执行 [`minio.yml`](playbook#minioyml) 剧本即可。

```yaml
minio: { hosts: { 10.10.10.10: { minio_seq: 1 } }, vars: { minio_cluster: minio } }
```

例如，上面的配置定义了一个 SNSD [单机单盘](config#单机单盘) MinIO 集群，使用以下命令即可创建该 MinIO 集群：

```bash
./minio.yml -l minio  # 在 minio 分组上安装 MinIO 模块 
```


------

## 销毁集群

要销毁一个集群，执行专用的 [`minio-rm.yml`](playbook#minio-rmyml) 剧本即可：

```bash
./minio-rm.yml -l minio                   # 移除 MinIO 集群
./minio-rm.yml -l minio -e minio_rm_data=false  # 移除集群但保留数据
./minio-rm.yml -l minio -e minio_rm_pkg=true    # 移除集群并卸载软件包
```

{{% alert title="架构变更：Pigsty v3.6+" color="info" %}}
从 Pigsty v3.6 开始，集群移除操作已从 `minio.yml` 剧本迁移至专用的 `minio-rm.yml` 剧本。旧的 `minio_clean` 任务已被弃用。
{{% /alert %}}

移除剧本会自动完成以下操作：
- 从 Victoria/Prometheus 监控系统中注销 MinIO 目标
- 从 INFRA 节点的 DNS 服务中移除记录
- 停止并禁用 MinIO systemd 服务
- 删除 MinIO 数据目录和配置文件（可选）
- 卸载 MinIO 软件包（可选）



--------

## 集群扩容

- [集群扩容教程](https://min.io/docs/minio/linux/operations/install-deploy-manage/expand-minio-deployment.html)

MinIO 无法在节点/磁盘级别上扩容，但可以在存储池（多个节点）层次上进行扩容。

现在假设您有 [这样一个](config#多盘部署) 四节点的 MinIO 集群，希望扩容一倍，新增一个四节点的存储池。

```yaml
minio:
  hosts:
    10.10.10.10: { minio_seq: 1 , nodename: minio-1 }
    10.10.10.11: { minio_seq: 2 , nodename: minio-2 }
    10.10.10.12: { minio_seq: 3 , nodename: minio-3 }
    10.10.10.13: { minio_seq: 4 , nodename: minio-4 }
  vars:
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

首先，修改 MinIO 集群定义，新增四台节点，按顺序分配序列号 5 到 8。
这里的关键一步是修改 [`minio_volumes`](param#minio_volumes) 参数，将新的四个节点指定为一个新的 **存储池**。

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
    minio_cluster: minio
    minio_data: '/data{1...4}'
    minio_volumes: 'https://minio-{1...4}.pigsty:9000/data{1...4} https://minio-{5...8}.pigsty:9000/data{1...4}'  # 新增的集群配置
    # …… 省略其他配置
```

第二步，将这些节点交由 Pigsty 纳管： 

```bash
./node.yml -l 10.10.10.14,10.10.10.15,10.10.10.16,10.10.10.17
```

第三步，在新节点上，使用 Ansible [剧本](playbook) 安装并准备 MinIO 软件：

```bash
./minio.yml -l 10.10.10.14,10.10.10.15,10.10.10.16,10.10.10.17 -t minio_install
```

第四步，在 **整个集群** 上，使用 Ansible [剧本](playbook) 重新配置 MinIO 集群：

```bash
./minio.yml -l minio -t minio_config
```

> 这一步会更新现有四个节点的 `MINIO_VOLUMES` 配置

第五步，一次性重启整个 MinIO 集群（请注意，不要滚动重启！）：

```bash
./minio.yml -l minio -t minio_launch -f 10   # 8并发数，确保同时重启
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

MinIO 无法在节点/磁盘级别上缩容，但可以在存储池（多个节点）层次上进行退役 —— 新增一个新存储池，将旧存储池排干迁移到新存储池，然后将旧存储池退役。

- [集群缩容教程](https://min.io/docs/minio/linux/operations/install-deploy-manage/decommission-server-pool.html)





--------

## 集群升级

- [集群升级教程](https://min.io/docs/minio/linux/operations/install-deploy-manage/upgrade-minio-deployment.html)

首先，将新版本的 MinIO 软件包下载至 INFRA 节点的本地软件仓库，然后重建软件仓库索引：

- [minio](https://github.com/minio/minio):
    - amd64: https://dl.min.io/server/minio/release/linux-amd64/
    - arm64: https://dl.min.io/server/minio/release/linux-arm64/
- [mcli](https://github.com/minio/mc): 
    - amd64: https://dl.min.io/client/mc/release/linux-amd64/
    - arm64: https://dl.min.io/client/mc/release/linux-arm64/

```bash
./infra.yml -t repo_create
```

其次，使用 Ansible 批量升级 MinIO 软件包版本：

```bash
ansible minio -m package -b -a 'name=minio state=latest'  # 升级 MinIO 服务器软件版本
ansible minio -m package -b -a 'name=mcli state=latest'   # 升级 MinIO 客户端软件版本
```

最后，使用 mc 命令行工具通知 MinIO 集群重启：

```bash
mc admin service restart sss
```



--------

## 替换故障节点

- [节点故障教程](https://min.io/docs/minio/linux/operations/data-recovery/recover-after-node-failure.html#minio-restore-hardware-failure-node)

```bash
# 1. 从集群中下线故障节点
bin/node-rm <your_old_node_ip>

# 2. 替换故障节点，使用原来的节点名称（如果IP变化，您需要修改 MinIO 集群定义）
bin/node-add <your_new_node_ip>

# 3. 在新节点上安装配置 MinIO
./minio.yml -l <your_new_node_ip>

# 4. 指示 MinIO 执行恢复动作
mc admin heal
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

# 5. 指示 MinIO 执行恢复动作
mc admin heal
```