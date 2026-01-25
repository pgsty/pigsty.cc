---
title: 模块：Victoria
weight: 5090
description: 使用 Pigsty 拉起 VictoriaMetrics 与 VictoriaLogs，Prometheus 与 Loki 的原位上位替代组件。
icon: fas fa-layer-group
module: [PILOT]
categories: [参考]
---

> [VictoriaMetrics](https://victoriametrics.com/) 是 Prometheus 的原地上位替代，提供更好的性能，压缩比。


--------

## 概览

Victoria 模块目前仅在 Pigsty 专业版中提供 **Beta** 试用预览。包含了 VictoriaMetrics 与 VictoriaLogs 组件的部署与管理。


--------

## 安装

Pigsty Infra 仓库中提供了 VictoriaMetrics 的 RPM / DEB 软件包，使用以下命令即可完成安装：

```bash
./node.yml -t node_install -e '{"node_repo_modules":"infra","node_packages":["victoria-metrics"]}'
./node.yml -t node_install -e '{"node_repo_modules":"infra","node_packages":["victoria-metrics-cluster"]}'
./node.yml -t node_install -e '{"node_repo_modules":"infra","node_packages":["victoria-metrics-utils"]}'
./node.yml -t node_install -e '{"node_repo_modules":"infra","node_packages":["victoria-logs"]}'
```

通常普通用户安装单机版 VictoriaMetrics 即可，如果需要集群部署，可以安装 `victoria-metrics-cluster` 软件包。