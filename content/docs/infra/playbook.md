---
title: 预置剧本
weight: 3040
description: 如何使用预置的 ansible 剧本来管理 INFRA 集群，常用管理命令速查。
icon: fa-solid fa-scroll
categories: [任务]
---


Pigsty 提供了三个与 INFRA 模块相关的剧本：

- [`deploy.yml`](#deployyml)：在所有节点上一次性部署 NODE、INFRA、ETCD、MINIO 与 PGSQL 核心模块
- [`infra.yml`](#infrayml)：在 infra 节点上初始化 pigsty 基础设施
- [`infra-rm.yml`](#infra-rmyml)：从 infra 节点移除基础设施组件


----------------

## `deploy.yml`

在所有节点上一次性部署 NODE、INFRA、ETCD、MINIO 与 PGSQL 核心模块，解决 INFRA/NODE 循环依赖问题。

该剧本会交叉执行 `infra.yml` 与 `node.yml` 的子任务，按以下顺序完成核心组件的部署：

1. **id**：生成节点与 PostgreSQL 身份标识
2. **ca**：在本地创建自签名 CA 证书
3. **repo**：在 infra 节点上创建本地软件仓库
4. **node-init**：初始化节点与 HAProxy
5. **infra**：初始化 Nginx、DNS、VictoriaMetrics、Grafana 等
6. **node-monitor**：初始化 node-exporter、vector
7. **etcd**：初始化 etcd（PostgreSQL 高可用必需）
8. **minio**：初始化 Silo（可选）
9. **pgsql**：初始化 PostgreSQL 集群并配置 PostgreSQL 监控

该剧本等效于依次执行以下五个剧本：

```bash
./infra.yml -l infra    # 在 infra 分组上部署基础设施
./node.yml              # 在所有节点上初始化节点
./etcd.yml              # 初始化 etcd 集群
./minio.yml             # 初始化 MINIO（Silo）集群（可选）
./pgsql.yml             # 初始化 PostgreSQL 集群
```

`deploy.yml` 当前不部署 Docker 模块；需要 Docker 时，应另行设置 `docker_enabled: true` 并单独执行 `docker.yml`。


----------------

## `infra.yml`

在配置文件的 `infra` 分组所定义的 Infra 节点 上初始化基础设施模块。

执行该剧本将完成以下任务：

- 配置 Infra 节点 的目录与环境变量
- 下载并创建本地软件仓库，加速后续安装
- 将当前 Infra 节点 作为普通节点纳入 Pigsty 管理
- 部署基础设施组件（VictoriaMetrics/Logs/Traces、VMAlert、Grafana、Alertmanager、Blackbox Exporter 等）

**剧本注意事项**：

- 本剧本为幂等剧本，重复执行默认不会清理历史数据与 Grafana 数据
- 如需保留历史监控数据，请先将 `vmetrics_clean`、`vlogs_clean`、`vtraces_clean` 设置为 `false`
- 如果设置 `grafana_clean` 为 `true`，Grafana 数据库会被清理，原有仪表盘与配置会丢失
- 当本地软件仓库 `/www/pigsty/repo_complete` 存在时，本剧本会跳过互联网下载；该文件是 SOW 生成的 SHA-256 清单与完成标记
- 完整执行该剧本耗时约1～3分钟，视机器配置与网络条件而异


### 可用任务列表

```text
# ca: create self-signed CA on localhost files/pki
#   - ca_dir        : create CA directory
#   - ca_private    : generate ca private key: files/pki/ca/ca.key
#   - ca_cert       : signing ca cert: files/pki/ca/ca.crt
#
# id: generate node identity
#
# repo: bootstrap a local yum repo from internet or offline packages
#   - repo_dir      : create repo directory
#   - repo_check    : check repo exists
#   - repo_prepare  : use existing repo if exists
#   - repo_build    : build repo from upstream if not exists
#     - repo_upstream    : handle upstream repo files in /etc/yum.repos.d
#       - repo_remove    : remove existing repo file if repo_remove == true
#       - repo_add       : add upstream repo files to /etc/yum.repos.d
#     - repo_url_pkg     : download packages from internet defined by repo_url_packages
#     - repo_cache       : make upstream yum cache with yum makecache
#     - repo_boot_pkg    : install sow and dnf/yum download utilities
#     - repo_pkg         : download packages & dependencies from upstream repo
#     - repo_create      : atomically create RPM/APT metadata with sow create --pigsty
#     - repo_use         : add newly built repo into /etc/yum.repos.d
#   - repo_nginx    : launch a nginx for repo if no nginx is serving
#
# node/haproxy/monitor: setup infra node as a common node
#   - node_name, node_hosts, node_resolv, node_firewall, node_ca, node_repo, node_pkg
#   - node_feature, node_kernel, node_tune, node_sysctl, node_profile, node_ulimit
#   - node_data, node_admin, node_timezone, node_ntp, node_crontab, node_vip
#   - haproxy_install, haproxy_config, haproxy_launch, haproxy_reload
#   - haproxy_register, node_exporter, node_register, vector
#
# infra: setup infra components
#   - infra_user     : setup infra os user group
#   - infra_dir      : create infra data/config/runtime directories
#   - infra_env      : env_patroni, env_pg, env_pgadmin, env_etcd, env_pglog, env_var
#   - infra_pkg      : install infra packages
#   - infra_cert     : issue cert for infra components
#   - dns            : dns_config, dns_record, dns_launch
#   - nginx          : nginx_dir, nginx_config, nginx_cert, nginx_static, nginx_launch, nginx_certbot, nginx_reload, nginx_exporter
#   - victoria       : vmetrics/vlogs/vtraces clean, config & launch; vmalert_config, vmalert_launch
#   - alertmanager   : alertmanager_config, alertmanager_launch
#   - blackbox       : blackbox_config, blackbox_launch
#   - grafana        : grafana_clean, grafana_dir, grafana_config, grafana_launch, grafana_provision
#   - infra_register : add_metrics, add_logs, add_ds
```


----------------

## `infra-rm.yml`

从配置文件 `infra` 分组定义的 Infra 节点 上移除 Pigsty 基础设施。

常用子任务包括：

```bash
./infra-rm.yml               # 执行全部阶段：注销、停服、删配置/环境/数据并卸载软件包
./infra-rm.yml -t deregister # 仅注销监控目标、Grafana 数据源与 Nginx 日志采集
./infra-rm.yml -t service    # 停止 INFRA 上的基础设施服务
./infra-rm.yml -t config     # 删除 INFRA 配置与 Systemd Unit
./infra-rm.yml -t env        # 删除管理用户的 Pigsty/PostgreSQL 环境文件
./infra-rm.yml -t data       # 移除 INFRA 上的存留数据
./infra-rm.yml -t package    # 卸载 INFRA 上安装的软件包
```

{{% alert title="全量移除会删除数据" color="danger" %}}
`infra-rm.yml` 没有防误删开关；不带标签执行时会运行上面所有阶段。`data` 阶段会递归删除 `infra_data`（默认 `/data/infra`）、`nginx_data`（默认 `/data/nginx`）、`nginx_home`（默认 `/www`）与 `/var/lib/grafana`，其中包括监控/日志/追踪数据、软件仓库和 Grafana 本地数据。只想停服或注销时必须使用相应标签，并应在全量执行前单独备份需要保留的数据。
{{% /alert %}}
