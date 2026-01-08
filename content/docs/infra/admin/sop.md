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
./infra-rm.yml  # 从 infra 分组上卸载 INFRA 模块
```


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
./infra.yml -t infra_env       # 配置环境变量
./infra.yml -t infra_pkg       # 安装软件包
./infra.yml -t infra_user      # 设置操作系统用户
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
./infra.yml -t grafana_plugin                     # 下载 Grafana 插件
```
