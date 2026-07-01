---
title: "Piglet Runtime：AI 运行时沙箱"
linkTitle: "piglet.run"
weight: 8000
description: "Pigsty 轻量运行时，AI Vibe Coding 沙箱，一键在云端拉起你的写意编程环境"
icon: fas fa-dharmachakra
module: [PIGLET]
---

—— **Pigsty Lightweight Runtime，动嘴出活的 AI 编码沙箱**

PIGLET 是基于 Pigsty 的轻量运行时环境，专为 **AI Web Coding** 打造的云端编码沙箱。
它将 PostgreSQL 数据库、JuiceFS 分布式存储、Code Server、JupyterLab、Claude Code 与 Codex CLI 等工具整合为一体，
让你从 **"出嘴编码"** 到 **"部署上线"** 实现零阻力。

--------

## 核心特性

|    特性     | 说明                                                                                           |                                                                                           
|:---------:|:---------------------------------------------------------------------------------------------|                                                                                               
| 🤖 AI 编码  | 预装 **Claude Code**、**Codex CLI**、OpenCode、VS Code、Jupyter 全家桶，Python/Go/Node.js 开发环境开箱即用     |
|  🐘 数据全能  | PostgreSQL 18 + [**531**](/ext/list/) 扩展，向量/时序/地理/图/分析一网打尽，可加装 Supabase，复杂应用不求人              |
|  💾 共享存储  | [**JuiceFS**](/docs/juice) 将工作目录存入数据库，多 Agent / 多用户同时协作，文件永不丢失，还能回滚至任意时间点                    |                                                                            
|  ⏱️ 时光机器  | 数据库 **PITR** + 文件系统快照联动，搞砸了？一键回到任意时间点，文件系统与数据库保持一致与同步！                                       |                                                                            
|  🔀 瞬间克隆  | **CoW** 百毫秒级 [**Fork 巨型数据库**](/docs/pgsql/admin/db#克隆数据库)，Fork 现有实例与集群，不占额外存储空间，随时快速重建，放心折腾！ |                                                                            
|  🌐 一键上线  | 内置 **Nginx** 搞定域名、证书、代理，静态网页，动态网站，从出嘴到上线交付一步到位，省略中间步骤！                                       |                                                                           
|  📊 全栈监控  | **VictoriaMetrics** + **Grafana** 全景大盘，特供 Claude Code 可观测性，一切细节尽在掌控！                         |                                                                                     
| 🇨🇳 国内畅通 | 全球 CDN + 国内镜像双通道，免翻墙，一行配置 CC + **GLM-5.2** 国产模型，无需魔法，合法合规！                                   |
{.full-width}

--------

## 快速上手

[**准备**](/docs/deploy/prepare) 一台具有 [**SSH 权限**](/docs/deploy/admin#ssh) 的 [**节点**](/docs/deploy/prepare#节点)，
安装有 [**兼容的 Linux 系统**](/docs/ref/linux/)，使用具有免密 [**`ssh`**](/docs/deploy/admin#ssh) 和 [**`sudo`**](/docs/deploy/admin#sudo) 权限的 [**管理用户**](/docs/deploy/admin) 执行：

```bash
curl -fsSL https://repo.pigsty.cc/get | bash; cd ~/pigsty
./configure -c vibe -g # 使用 vibe 模式，生成随机密码！
./deploy.yml           # 部署基础设施和 PostgreSQL
./juice.yml            # 部署 JuiceFS 文件系统
./vibe.yml             # 部署 Claude Code, Codex CLI, Code-Server, JupyterLab
```

安装完成后，直接访问 IP 地址: `http://<ip>` 即可访问沙箱环境首页，假设您的 IP 地址是 `10.10.10.10`

| 工具            | 说明                                                                           |
|:--------------|:-----------------------------------------------------------------------------|
| 首页            | [`http://10.10.10.10/`](http://10.10.10.10/)                                 |
| Code Server   | [`http://10.10.10.10/code`](http://10.10.10.10/code)                         |
| Jupyter Lab   | [`http://10.10.10.10/jupyter`](http://10.10.10.10/jupyter)                   |
| Grafana 大盘    | [`http://10.10.10.10/ui`](http://10.10.10.10/ui)                             |
| Claude 监控     | [`http://10.10.10.10/ui/d/claude-code`](http://10.10.10.10/ui/d/claude-code) |
{.full-width}

> 提示，如果你在公网云服务器上部署，最好看一眼 [**安全建议**](/docs/setup/security)，把密码改了（`configure -g` 即可），[**防火墙打开**](/docs/node/param#node_firewall_mode)。



--------

## VIBE 组件

`vibe.yml` 将浏览器 IDE、Notebook、AI CLI 与 Node.js 运行时拆成了可独立开关的组件：

| 组件          | 默认值                     | 说明                                                                                    | 单独执行                       |
|:------------|:------------------------|:--------------------------------------------------------------------------------------|:---------------------------|
| Code Server | `code_enabled: true`    | 浏览器版 VS Code，默认挂在 `/code`                                                             | `./vibe.yml -t code`       |
| JupyterLab  | `jupyter_enabled: true` | Notebook 与交互式终端；角色默认关闭，但 `conf/vibe.yml` 沙箱模板会显式开启                                    | `./vibe.yml -t jupyter`    |
| Node.js     | `nodejs_enabled: true`  | AI CLI 所需运行时；Claude/Codex 启用时会按需安装，`region=china` 时 npm 默认走 `npmmirror`               | `./vibe.yml -t nodejs`     |
| Claude Code | `claude_enabled: true`  | 安装 `@anthropic-ai/claude-code`，渲染 `~/.claude.json` 与 `~/.claude/settings.json`，默认接入监控 | `./vibe.yml -t claude`     |
| Codex CLI   | `codex_enabled: true`   | 仅执行 `npm install -g @openai/codex`；不托管 Codex 配置，也不接入 VIBE 观测                          | `./vibe.yml -t codex`      |
| 额外 npm 包    | `npm_packages: []`      | 只用于安装额外全局包；Claude 与 Codex 已由各自任务负责安装                                                  | `./vibe.yml -t nodejs_pkg` |
{.full-width}

如果不需要某个组件，可以在 `pigsty.yml` 中设置对应的 `*_enabled: false`，或临时执行 `./vibe.yml -e codex_enabled=false` 这类开关。



--------

## 开始 AI Coding

接下来，你就可以动嘴开始 AI Coding 了，默认情况下 `/fs` 是存放在 PostgreSQL 里的共享目录，也是 VSCode，Jupyter 的默认家目录。
`vibe` 会在这里渲染 `AGENTS.md` 环境说明，并创建 `CLAUDE.md -> AGENTS.md` 软链接，建议在这个目录里面 Vibe Coding。

你可以直接 ssh 登陆服务器然后 `cd /fs`，常规使用 `claude` 或 `codex` 启动对应 CLI；预置的 `x` 是 Codex YOLO 别名，`xx` 是 Claude YOLO 别名，涉及真实数据时慎用。
你也可以直接利用 Code Server 与 Jupyter 的终端，或者 VS Code / Jupyter 的 Claude 插件启动 Claude Code。

![](/img/pigsty/vscode.webp)

这里的 Claude 已经将日志与监控指标默认接入到 Grafana 大盘，你可以通过 Grafana 监控 Claude 的运行状态。
Codex CLI 在 VIBE 中是 package-only：默认安装命令行软件包，但登录、Provider 与配置文件仍按 Codex 自身方式管理。

![](/img/pigsty/claude-monitor-1.webp)

-------

## 使用其他模型

如果你想让 Claude Code 使用其他模型，比如无需境外网络的 GLM-5.2，那么可以在上面安装的过程中，修改 `pigsty.yml` 配置文件，找到最下面的 `claude_env` 部分，
按需添加 Anthropic 兼容端点的环境变量，例如：

```yaml
claude_env:
  ANTHROPIC_BASE_URL: https://open.bigmodel.cn/api/anthropic
  ANTHROPIC_API_URL: https://open.bigmodel.cn/api/anthropic
  ANTHROPIC_AUTH_TOKEN: your_api_service_token
  ANTHROPIC_DEFAULT_OPUS_MODEL: "glm-5.2[1m]"
  ANTHROPIC_DEFAULT_SONNET_MODEL: "glm-5.2[1m]"
  ANTHROPIC_DEFAULT_HAIKU_MODEL: "glm-4.7"
  CLAUDE_CODE_AUTO_COMPACT_WINDOW: "1000000"
```

然后重新执行 `./vibe.yml -t claude` 即可。这只影响 Claude Code；Codex CLI 的账号与 Provider 配置不由 VIBE 管理。

![](/img/pigsty/claude-monitor-2.webp)


## Claude Code 接入监控

如果你想把其他环境的 Claude Code 指标与日志接入 PIGLET 监控系统，请配置环境变量，将 OTEL 事件打入到 VictoriaMetrics / VictoriaLogs 的 OTEL 端点即可。

```bash
# Claude Code OTEL 配置
export CLAUDE_CODE_ENABLE_TELEMETRY=1             # 启用监控
export OTEL_METRICS_EXPORTER=otlp
export OTEL_LOGS_EXPORTER=otlp
export OTEL_LOG_USER_PROMPTS=1                  # 如需采集 Prompt 内容，显式打开
export OTEL_EXPORTER_OTLP_METRICS_PROTOCOL=http/protobuf
export OTEL_EXPORTER_OTLP_LOGS_PROTOCOL=http/protobuf
export OTEL_RESOURCE_ATTRIBUTES="ip=10.10.10.20,job=claude"  # 添加你自己的标签
export OTEL_EXPORTER_OTLP_METRICS_ENDPOINT=http://10.10.10.10:8428/opentelemetry/v1/metrics     # 指标端点，打入 VictoriaMetrics
export OTEL_EXPORTER_OTLP_LOGS_ENDPOINT=http://10.10.10.10:9428/insert/opentelemetry/v1/logs    # 日志端点，打入 VictoriaLogs
export OTEL_EXPORTER_OTLP_METRICS_TEMPORALITY_PREFERENCE=cumulative

```
