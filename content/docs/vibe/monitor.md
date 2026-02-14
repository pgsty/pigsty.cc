---
title: 监控告警
weight: 4850
description: VIBE 模块监控说明，重点为 Claude Code 可观测性。
icon: fas fa-chart-line
module: [VIBE]
categories: [监控]
---

VIBE 的监控主要集中在 Claude Code 的 OpenTelemetry 数据。
Code-Server 与 JupyterLab 本身不暴露 Prometheus 指标，可通过 systemd 与日志进行健康检查。

--------

## Claude Code 可观测性

VIBE 在 `~/.claude/settings.json` 中写入默认 OpenTelemetry 环境变量：

```json
{
  "env": {
    "CLAUDE_CODE_ENABLE_TELEMETRY": 1,
    "CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS": 1,
    "OTEL_LOG_USER_PROMPTS": 1,
    "OTEL_METRICS_EXPORTER": "otlp",
    "OTEL_LOGS_EXPORTER": "otlp",
    "OTEL_EXPORTER_OTLP_PROTOCOL": "http/protobuf",
    "OTEL_EXPORTER_OTLP_METRICS_ENDPOINT": "http://127.0.0.1:8428/opentelemetry/v1/metrics",
    "OTEL_EXPORTER_OTLP_LOGS_ENDPOINT": "http://127.0.0.1:9428/insert/opentelemetry/v1/logs",
    "OTEL_RESOURCE_ATTRIBUTES": "ip=<host>,job=claude"
  }
}
```

`claude_env` 会与上述默认配置合并，可用于配置 API Key 或替换模型端点。

--------

## Grafana Dashboard

Grafana 默认包含 `claude-code` Dashboard：

- Portal 入口：`https://<domain>/ui/d/claude-code`
- 直接访问：`http://<ip>:3000/d/claude-code`

--------

## 运行状态检查

```bash
systemctl status code-server
systemctl status jupyter
journalctl -u code-server -f
journalctl -u jupyter -f
```

端口检查：

```bash
ss -tlnp | grep 8443
ss -tlnp | grep 8888
```

--------

## Claude 日志查询

通过 VictoriaLogs：

```bash
curl -G 'http://127.0.0.1:9428/select/logsql/query' \
  --data-urlencode 'query=job:claude'
```
