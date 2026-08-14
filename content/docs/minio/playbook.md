---
title: 预置剧本
weight: 3640
description: 使用预置 Ansible 剧本部署或移除 Silo 对象存储集群。
icon: fa-solid fa-scroll
module: [MINIO]
categories: [任务]
---


MINIO 模块提供两个内置剧本：

- [`minio.yml`](#minioyml)：安装并配置 Silo
- [`minio-rm.yml`](#minio-rmyml)：移除 Silo、配置和可选数据


--------

## `minio.yml`

[`minio.yml`](https://github.com/pgsty/pigsty/blob/main/minio.yml) 以 `hosts: all` 运行，但会在预任务阶段跳过没有定义 [`minio_cluster`](/docs/minio/param#minio_cluster) 的主机。进入角色后还会校验：

- `minio_cluster` 已定义且非空
- `minio_seq` 已定义且为非负整数
- `minio_type` 必须等于 `silo`

因此，`minio_cluster` 是模块成员门控，而 `minio_seq` 与 `minio_type` 的错误会让身份校验明确失败。不要在 `all.vars` 中定义 `minio_cluster`。

主要任务标签如下：

- `minio-id`：校验身份，并按 `minio_cluster` 从整个清单计算实际成员、节点名与卷参数
- `minio_install`：创建 `minio` OS 用户，安装 Silo 与 `mcli`，准备数据目录
  - `minio_os_user`
  - `minio_pkg`
  - `minio_dir`
- `minio_config`：渲染 `/etc/default/silo`、`/etc/systemd/system/silo.service`、证书和 DNS
  - `minio_conf`
  - `minio_cert`
  - `minio_dns`
- `minio_launch`：启动或重启 `silo.service`
- `minio_register`：写入 VictoriaMetrics FileSD 目标
- `minio_provision`：由集群首个成员执行一次 `mcli` 别名、存储桶与用户置备

重新执行 `minio.yml` 可能重启正在运行的对象存储服务，但不会主动重建数据。生产环境应按集群故障预算安排执行窗口。


--------

## `minio-rm.yml`

[`minio-rm.yml`](https://github.com/pgsty/pigsty/blob/main/minio-rm.yml) 使用相同的 `minio_cluster` 成员门控和身份校验，并执行：

- `minio_safeguard`：防误删检查，默认 `false`
- `minio_pause`：暂停 3 秒，允许 Ctrl+C 中止
- `minio_deregister`：删除 VictoriaMetrics 目标与 DNS 记录
- `minio_svc`：停止并禁用 Silo 服务
- `minio_data`：按 [`minio_rm_data`](/docs/minio/param#minio_rm_data) 删除数据与配置
- `minio_pkg`：按 [`minio_rm_pkg`](/docs/minio/param#minio_rm_pkg) 卸载 Silo 与 `mcli`

{{% alert title="危险操作" color="danger" %}}
`minio_rm_data` 默认为 `true`。完整执行移除剧本会删除展开后的所有 `minio_data` 目录；运行前必须核对 `minio_cluster`、`minio_seq`、`minio_type: silo` 与磁盘挂载路径。只想退役服务并保留数据时，请显式设置 `-e minio_rm_data=false`。
{{% /alert %}}

部署与移除角色都默认 `minio_type: silo`，其他取值会被拒绝。下面的删除示例仍显式传入该值，作为复核软件包、服务、证书目录和数据路径的一部分；它不是额外的交互确认门。


----------------

## 命令速查

```bash
./minio.yml -l <group>                         # 部署该限域内具有 minio_cluster 身份的成员
./minio.yml -l minio -t minio_install         # 安装 Silo 与 mcli，准备目录
./minio.yml -l minio -t minio_config          # 重新渲染配置、证书和 DNS
./minio.yml -l minio -t minio_launch          # 重启 Silo 服务
./minio.yml -l minio -t minio_register        # 刷新监控目标
./minio.yml -l minio -t minio_provision       # 重新置备别名、存储桶和用户

./minio-rm.yml -l minio -e minio_type=silo                         # 移除 Silo 服务、配置与数据
./minio-rm.yml -l minio -e minio_type=silo -e minio_rm_data=false  # 移除服务但保留数据和配置
./minio-rm.yml -l minio -e minio_type=silo -e minio_rm_pkg=true    # 同时卸载 Silo 与 mcli
```

如果配置组名与 `minio_cluster` 不同，`-l` 使用的是 Ansible 分组或主机模式，而不是逻辑集群名；请用能覆盖完整目标成员的限域表达式。


--------

## 保护机制

生产集群建议在集群变量中启用防误删保险：

```yaml
minio_safeguard: true
```

确需销毁时，可在充分核对目标和备份后显式覆盖：

```bash
./minio-rm.yml -l minio -e minio_type=silo -e minio_safeguard=false
```


--------

## 执行演示

[![asciicast](https://asciinema.org/a/566415.svg)](https://asciinema.org/a/566415)
