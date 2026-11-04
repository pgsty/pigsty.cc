---
title: 模块管理
weight: 3106
description: Infra 模块本身的管理 SOP：定义，创建，销毁，扩容，缩容
icon: fa-solid fa-building-columns
categories: [任务]
---


本文介绍 INFRA 模块的日常管理操作，包括安装、卸载、扩容、以及各组件的管理维护。


----------------

## 安装 Infra 模块

使用 [`infra.yml`](/docs/infra/playbook/#infrayml) 剧本在 `infra` 分组上安装 INFRA 模块：

```bash
./infra.yml     # 在 infra 分组上安装 INFRA 模块
```


----------------

## 卸载 Infra 模块

使用 [`infra-rm.yml`](/docs/infra/playbook/#infra-rmyml) 剧本从 `infra` 分组上卸载 INFRA 模块：

```bash
./infra-rm.yml -l infra # 全量移除：注销、停服、删配置/环境/数据并卸载软件包
```

该剧本没有防误删开关，且全量执行会删除 `infra_data`、`nginx_data`、`nginx_home`（默认 `/www`）和 `/var/lib/grafana`。
如果只需要停止服务或注销目标，应使用 `-t service` 或 `-t deregister`；执行前请阅读 [移除剧本的完整范围](/docs/infra/playbook/#infra-rmyml) 并备份所需数据。


----------------

## 扩容 Infra 模块

在配置清单中为新节点分配 [`infra_seq`](/docs/infra/param/#infra_seq) 并加入 `infra` 分组：

```yaml
all:
  children:
    infra:
      hosts:
        10.10.10.10: { infra_seq: 1 }  # 原有节点
        10.10.10.11: { infra_seq: 2 }  # 新节点
```

使用限制选项 `-l` 仅在新节点上执行剧本：

```bash
./infra.yml -l 10.10.10.11    # 在新节点上安装 INFRA 模块
```


----------------

## 管理本地软件仓库

本地软件仓库相关的管理任务：

```bash
./infra.yml -t repo              # 从互联网或离线包创建仓库
./infra.yml -t repo_upstream     # 添加上游仓库
./infra.yml -t repo_pkg          # 下载包及依赖
./infra.yml -t repo_create       # 创建本地 yum/apt 仓库
```

完整子任务列表：

```bash
./infra.yml -t repo_dir          # 创建本地软件仓库
./infra.yml -t repo_check        # 检查本地软件仓库是否存在
./infra.yml -t repo_prepare      # 直接使用已有仓库
./infra.yml -t repo_build        # 从上游构建仓库
./infra.yml -t repo_upstream     # 添加上游仓库
./infra.yml -t repo_remove       # 删除现有仓库文件
./infra.yml -t repo_add          # 添加仓库到系统目录
./infra.yml -t repo_url_pkg      # 从互联网下载包
./infra.yml -t repo_cache        # 创建元数据缓存
./infra.yml -t repo_boot_pkg     # 安装引导包
./infra.yml -t repo_pkg          # 下载包及依赖
./infra.yml -t repo_create       # 创建本地仓库
./infra.yml -t repo_use          # 添加新建仓库到系统
./infra.yml -t repo_nginx        # 启动 nginx 文件服务器
```


----------------

## 管理 Nginx

Nginx 相关的管理任务：

```bash
./infra.yml -t nginx                       # 重置 Nginx 组件
./infra.yml -t nginx_index                 # 重新渲染首页
./infra.yml -t nginx_config,nginx_reload   # 重新渲染配置并重载
```

申请 HTTPS 证书：

```bash
./infra.yml -t nginx_certbot,nginx_reload -e certbot_sign=true
```


----------------

## 管理基础设施组件

基础设施各组件的管理命令：

```bash
./infra.yml -t infra           # 配置基础设施
./infra.yml -t infra_user      # 设置操作系统用户
./infra.yml -t infra_dir       # 创建基础设施目录
./infra.yml -t infra_env       # 配置环境变量
./infra.yml -t infra_pkg       # 安装软件包
./infra.yml -t infra_cert      # 颁发证书
./infra.yml -t dns             # 配置 DNSMasq
./infra.yml -t nginx           # 配置 Nginx
./infra.yml -t victoria        # 配置 VictoriaMetrics/Logs/Traces
./infra.yml -t alertmanager    # 配置 AlertManager
./infra.yml -t blackbox        # 配置 Blackbox Exporter
./infra.yml -t grafana         # 配置 Grafana
./infra.yml -t infra_register  # 注册到 VictoriaMetrics/Grafana
```

常用维护命令：

```bash
./infra.yml -t nginx_index                        # 重新渲染首页
./infra.yml -t nginx_config,nginx_reload          # 重新配置并重载
./infra.yml -t vmetrics_config,vmetrics_launch    # 重新生成 VictoriaMetrics 配置并重启
./infra.yml -t vlogs_config,vlogs_launch          # 更新 VictoriaLogs 配置
./infra.yml -t grafana_provision                  # 重新加载 Grafana 仪表盘与数据源定义
```


----------------

## 管理 Grafana 匿名访问

Grafana 默认允许匿名用户以 `Viewer` 角色访问。使用支持 [`grafana_anon_enabled`](/docs/infra/param#grafana_anon_enabled) 的版本，在配置清单的 `all.vars` 或 `infra` 分组变量中设置：

```yaml
grafana_anon_enabled: false
```

然后重新渲染配置并重启 Grafana：

```bash
./infra.yml -l infra -t grafana_config,grafana_launch
```

仅执行 `grafana_config` 不会立即生效。针对单个节点操作时，将 `-l infra` 替换为 `-l <infra-node>`。
配置清单中的设置会在后续重跑时保留；直接编辑 `/etc/grafana/grafana.ini` 会被模板覆盖。
此开关与 [`grafana_auth_proxy`](/docs/infra/param#grafana_auth_proxy) 独立，只保护 Grafana 的访问入口。


----------------

## 管理 Grafana 密码

Grafana 有两个密码参数：[**`grafana_admin_password`**](/docs/infra/param#grafana_admin_password)（默认 `pigsty`）和 [**`grafana_view_password`**](/docs/infra/param#grafana_view_password)（默认 `DBUser.Viewer`）：

| 参数                       | 渲染到的配置文件                                           |
|:-------------------------|:---------------------------------------------------|
| `grafana_admin_password` | `/etc/grafana/grafana.ini`，`/infra/env/pigsty`     |
| `grafana_view_password`  | `/etc/grafana/provisioning/datasources/pigsty.yml` |
{.full-width}

初始化后，仅修改配置清单中的 `grafana_admin_password` 不会重设现有 Grafana 账号密码。请通过 Grafana 界面或其管理工具修改，并同步更新配置清单。

Pigsty 会在初始化 Grafana 监控面板，注册 Grafana 数据源的时候，使用 [**`grafana_admin_password`**](/docs/infra/param#grafana_admin_password)。
所以如果你通过 Grafana GUI 修改了这个密码，请相应调整配置文件里面的配置。另外，您可以使用以下命令渲染新的密码到环境变量中。

```bash
./infra.yml -t env_var            # 重新渲染环境变量
```

[**`grafana_view_password`**](/docs/infra/param#grafana_view_password) 是 Grafana 中默认的 Meta PostgreSQL 数据源用户 `dbuser_view` 的密码。
如果数据库用户密码发生变化，应同步更新 `grafana_view_password`，并重新渲染数据源配置、重启 Grafana；只修改其中一端会导致数据源连接失败。它不是 Grafana 访客的登录密码。
