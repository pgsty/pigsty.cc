---
title: VIBE 监控
weight: 4850
description: VIBE 模块的监控集成说明，包括 Claude Code 可观测性、Dashboard 使用等。
icon: fas fa-chart-line
module: [VIBE]
categories: [监控]
---

VIBE 模块提供了完整的可观测性支持，特别是 Claude Code 的 OpenTelemetry 集成，可以通过 Grafana Dashboard 监控 AI 编程助手的使用情况。


--------

## 监控架构

```
Claude Code CLI
    │
    ├── OpenTelemetry Metrics ──► VictoriaMetrics (8428)
    └── OpenTelemetry Logs    ──► VictoriaLogs    (9428)
                                       │
                                       ▼
                               Grafana Dashboard
                               (Claude Code Dashboard)
```


--------

## Claude Code 可观测性

### OpenTelemetry 配置

Claude Code 默认集成了 OpenTelemetry，自动将指标和日志推送到本地的 VictoriaMetrics/VictoriaLogs：

配置文件 `~/.claude/settings.json`：

```json
{
  "otelEndpointMetrics": "http://127.0.0.1:8428/opentelemetry/v1/metrics",
  "otelEndpointLogs": "http://127.0.0.1:9428/insert/opentelemetry/v1/logs",
  "otelResourceAttributes": {
    "ip": "10.10.10.10",
    "job": "claude"
  }
}
```

### 监控指标

Claude Code 上报的主要指标包括：

| 指标类型    | 说明                        |
|:--------|:--------------------------|
| 会话指标    | 会话数量、持续时间                |
| Token 指标 | 输入/输出 Token 数量、成本统计      |
| API 调用   | API 请求次数、延迟、错误率          |
| 工具使用    | 各类工具（Read、Write、Bash 等）调用次数 |
{.full-width}

### 日志数据

Claude Code 的日志包含：

- 会话开始/结束事件
- 用户提示和助手响应
- 工具调用详情
- 错误和警告信息


--------

## Grafana Dashboard

### 访问 Dashboard

Claude Code Dashboard 可以通过以下方式访问：

```
https://<ip>:3000/d/claude-code
```

使用 Grafana 凭证登录（默认：`admin` / `pigsty`）。

### Dashboard 功能

| 面板          | 说明                        |
|:------------|:--------------------------|
| 会话概览      | 活跃会话数、总会话数              |
| Token 使用    | 输入/输出 Token 趋势、成本分析     |
| API 性能      | 请求延迟、错误率                 |
| 工具使用统计    | 各工具调用频次、耗时分布            |
| 会话日志      | 详细的会话记录和对话内容            |
{.full-width}


--------

## 系统服务监控

### 使用 systemd 监控

```bash
# 查看 Code-Server 状态
systemctl status code-server

# 查看 JupyterLab 状态
systemctl status jupyter

# 查看服务日志
journalctl -u code-server -f
journalctl -u jupyter -f
```

### 端口检查

```bash
# 检查 Code-Server 端口（8443）
ss -tlnp | grep 8443

# 检查 JupyterLab 端口（8888）
ss -tlnp | grep 8888

# 使用 curl 检查服务
curl -s -o /dev/null -w "%{http_code}" http://127.0.0.1:8443
curl -s -o /dev/null -w "%{http_code}" http://127.0.0.1:8888
```


--------

## 健康检查

### 自动化健康检查脚本

```bash
#!/bin/bash
# vibe-health-check.sh

echo "=== VIBE 服务健康检查 ==="

# Code-Server
if systemctl is-active --quiet code-server; then
    echo "[OK] Code-Server: 运行中"
else
    echo "[ERROR] Code-Server: 未运行"
fi

# JupyterLab
if systemctl is-active --quiet jupyter; then
    echo "[OK] JupyterLab: 运行中"
else
    echo "[ERROR] JupyterLab: 未运行"
fi

# 端口检查
if ss -tlnp | grep -q ":8443 "; then
    echo "[OK] Code-Server 端口 8443: 监听中"
else
    echo "[ERROR] Code-Server 端口 8443: 未监听"
fi

if ss -tlnp | grep -q ":8888 "; then
    echo "[OK] JupyterLab 端口 8888: 监听中"
else
    echo "[ERROR] JupyterLab 端口 8888: 未监听"
fi
```

### 使用 curl 进行端点检查

```bash
# 检查 Code-Server
curl -s -o /dev/null -w "%{http_code}\n" \
    --connect-timeout 5 \
    http://127.0.0.1:8443/healthz

# 检查 JupyterLab
curl -s -o /dev/null -w "%{http_code}\n" \
    --connect-timeout 5 \
    http://127.0.0.1:8888/api/status
```


--------

## 告警配置

### 服务停止告警

可以在 Alertmanager 中配置 VIBE 服务告警：

```yaml
# 示例：Code-Server 停止告警
- alert: CodeServerDown
  expr: up{job="code-server"} == 0
  for: 5m
  labels:
    severity: warning
  annotations:
    summary: "Code-Server 服务停止"
    description: "Code-Server 在 {{ $labels.instance }} 上已停止超过 5 分钟"

# 示例：JupyterLab 停止告警
- alert: JupyterLabDown
  expr: up{job="jupyter"} == 0
  for: 5m
  labels:
    severity: warning
  annotations:
    summary: "JupyterLab 服务停止"
    description: "JupyterLab 在 {{ $labels.instance }} 上已停止超过 5 分钟"
```


--------

## 日志管理

### 日志位置

| 组件          | 日志位置                                |
|:------------|:------------------------------------|
| Code-Server | `journalctl -u code-server`         |
| JupyterLab  | `journalctl -u jupyter`             |
| Claude Code | VictoriaLogs / `~/.claude/logs/`    |
{.full-width}

### 日志查询

**使用 journalctl**

```bash
# 查看最近日志
journalctl -u code-server -n 100

# 查看特定时间范围
journalctl -u code-server --since "2024-01-01" --until "2024-01-02"

# 实时跟踪
journalctl -u code-server -f
```

**使用 VictoriaLogs 查询 Claude 日志**

```bash
# 通过 Grafana Explore 面板查询
# 或使用 vlogs API
curl -G 'http://localhost:9428/select/logsql/query' \
    --data-urlencode 'query={job="claude"}'
```


--------

## 资源监控

### 查看资源使用

```bash
# 查看 Code-Server 资源使用
systemctl status code-server
ps aux | grep code-server

# 查看 JupyterLab 资源使用
systemctl status jupyter
ps aux | grep jupyter

# 查看内存使用
free -h

# 查看磁盘使用
df -h /data
df -h /fs
```

### JuiceFS 存储监控

如果使用 JuiceFS 作为工作目录：

```bash
# 查看 JuiceFS 状态
juicefs status /fs

# 查看文件系统使用情况
df -h /fs

# 查看文件统计
juicefs info /fs
```


--------

## 性能调优

### Code-Server 性能优化

```yaml
# 增加文件句柄限制（已在 systemd 服务中配置）
# /etc/systemd/system/code-server.service
LimitNOFILE=65535
```

### JupyterLab 性能优化

```python
# /data/jupyter/jupyter_config.py

# 增加最大缓冲区大小
c.ServerApp.max_buffer_size = 1073741824  # 1GB

# 配置超时时间
c.ServerApp.shutdown_no_activity_timeout = 0  # 禁用自动关闭
```


