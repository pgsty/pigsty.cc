---
title: "PIGLET.RUN"
weight: 8000
description: "Pigsty 轻量运行时，AI Vibe Coding 沙箱，一键在云端拉起你的写意编程环境"
icon: fas fa-piggy-bank fa-shake
module: [PIGLET]
---

—— **Pigsty Lightweight Runtime，动嘴出活的 AI 编码沙箱**

PIGLET 是基于 Pigsty 的轻量运行时环境，专为 **AI Web Coding** 打造的云端编码沙箱。
它将 PostgreSQL 数据库、JuiceFS 分布式存储、VS Code、JupyterLab 等工具整合为一体，
让你从 **"出嘴编码"** 到 **"部署上线"** 实现零阻力。

--------

## 核心特性

|    特性     | 说明                                                                                                |                                                                                           
|:---------:|:--------------------------------------------------------------------------------------------------|                                                                                               
| 🤖 AI 编码  | 预装 **Claude Code**、OpenCode、VS Code、Jupyter 全家桶，Python/Go/Node.js 开发环境开箱即用                        |                                                                                  
|  🐘 数据全能  | PostgreSQL 18 + [**400+**](https://pgext.cloud/zh/list) 扩展，向量/时序/地理/图/分析一网打尽，可加装 Supabase，复杂应用不求人 |                                                                        
|  💾 共享存储  | [**JuiceFS**](/docs/juice) 将工作目录存入数据库，多 Agent / 多用户同时协作，文件永不丢失，还能回滚至任意时间点                         |                                                                            
|  ⏱️ 时光机器  | 数据库 **PITR** + 文件系统快照联动，搞砸了？一键回到任意时间点，文件系统与数据库保持一致与同步！                                            |                                                                            
|  🔀 瞬间克隆  | **CoW** 百毫秒级 [**Fork 巨型数据库**](/docs/pgsql/admin/db#克隆数据库)，Fork 现有实例与集群，不占额外存储空间，随时快速重建，放心折腾！      |                                                                            
|  🌐 一键上线  | 内置 **Nginx** 搞定域名、证书、代理，静态网页，动态网站，从出嘴到上线交付一步到位，省略中间步骤！                                            |                                                                           
|  📊 全栈监控  | **VictoriaMetrics** + **Grafana** 全景大盘，特供 Claude Code 可观测性，一切细节尽在掌控！                              |                                                                                     
| 🇨🇳 国内畅通 | 全球 CDN + 国内镜像双通道，免翻墙，一行配置 CC + **GLM-4.7** 国产模型，无需魔法，合法合规！                                        |                                                                              
{.full-width}

--------

## 快速上手

[**准备**](/docs/deploy/prepare) 一台具有 [**SSH 权限**](/docs/deploy/admin#ssh) 的 [**节点**](/docs/deploy/prepare#节点)，
安装有 [**兼容的 Linux 系统**](/docs/ref/linux/)，使用具有免密 [**`ssh`**](/docs/deploy/admin#ssh) 和 [**`sudo`**](/docs/deploy/admin#sudo) 权限的 [**管理用户**](/docs/deploy/admin) 执行：

```bash
curl -fsSL https://repo.pigsty.io/get | bash; cd ~/pigsty
./configure -c vibe -g # 使用 vibe 模式，生成随机密码！
./deploy.yml           # 部署基础设施和 PostgreSQL
./juice.yml            # 部署 JuiceFS 文件系统
./vibe.yml             # 部署 Claude, Code-Server, JupyterLab
```

安装完成后，直接访问 IP 地址: `http://<ip>` 即可访问沙箱环境首页，假设您的 IP 地址是 `10.10.10.10`

| 工具            | 说明                                                                        |
|:--------------|:--------------------------------------------------------------------------|
| 首页            | [`http://10.10.10.10/`](http://10.10.10.10/)                              |
| VSCODE Server | [`http://10.10.10.10/code`](http://10.10.10.10/code)                      |
| Jupyter Lab   | [`http://10.10.10.10/jupyter`](http://10.10.10.10/jupyter)                |
| Grafana 大盘    | [`http://10.10.10.10/ui`](http://10.10.10.10/ui)                          |
| Claude 监控     | [`http://10.10.10.10/ui/d/claude-code`](http://10.10.10.10/d/claude-code) |
{.full-width}

> 提示，如果你在公网云服务器上部署，最好看一眼 [**安全建议**](/docs/setup/security)，把密码改了（`configure -g` 即可），[**防火墙打开**](/docs/node/param#node_firewall_mode)。

--------

## 开始 Vibe

接下来，你就可以动嘴开始 Vibe Coding 了，默认情况下 `/fs` 是存放在 PostgreSQL 里的共享目录，也是 VSCode，Jupyter 的默认家目录。
家目录里放置了 `CLAUDE.md`/`AGENTS.md` 环境说明，建议在这个目录里面 Vibe Coding。

你可以直接 ssh 登陆服务器然后 `cd /fs`，使用 `x` 启动 `claude`，使用 `xx` 以 YOLO 模式启动 Claude。
你也可以直接利用 VS Code 与 Jupyter 的 Claude 插件或者终端启动 claude。

![](/img/pigsty/vscode.webp)

这里的 Claude 已经将日志与监控指标默认接入到 Grafana 大盘，你可以通过 Grafana 监控 Claude 的运行状态。

![](/img/pigsty/claude-monitor-1.webp)

-------

## 使用其他模型

如果你想使用其他模型，比如不用翻墙的 GLM 4.7，那么可以在上面安装的过程中，修改 `pigsty.yml` 配置文件，找到最下面的 `claude_env` 部分，
按需添加环境变量，例如：

```yaml
    # you can use other models here!
    claude_env:
      ANTHROPIC_BASE_URL: https://open.bigmodel.cn/api/anthropic
      ANTHROPIC_API_URL: https://open.bigmodel.cn/api/anthropic
      ANTHROPIC_AUTH_TOKEN: your_api_service_token # 填入你的 KEY！
      ANTHROPIC_MODEL: glm-4.7
      ANTHROPIC_SMALL_FAST_MODEL: glm-4.5-air
```

然后重新执行 `./vibe.yml` 即可。

![](/img/pigsty/claude-monitor-2.webp)


## Claude Code 接入监控

如果你想把其他环境的 Claude Code 指标接入监控系统，请配置环境变量，将 OTEL 事件打入到 VictoriaMetrics / VictoriaLogs 的 OTEL 端点即可。
Claude Code 自己应该可以自己 Vibe 自己处理好这件事。

```bash
# Claude Code OTEL 配置
export CLAUDE_CODE_ENABLE_TELEMETRY=1             # 启用监控
export OTEL_METRICS_EXPORTER=otlp
export OTEL_LOGS_EXPORTER=otlp
export OTEL_EXPORTER_OTLP_PROTOCOL=http/protobuf
export OTEL_LOG_USER_PROMPTS=1                    # 如果要隐藏 Prompt，设置为 0
export OTEL_RESOURCE_ATTRIBUTES="job=claude"      # 添加你自己的标签
export OTEL_EXPORTER_OTLP_METRICS_ENDPOINT=http://10.10.10.10:8428/opentelemetry/v1/metrics     # 指标端点，打入 VictoriaMetrics
export OTEL_EXPORTER_OTLP_LOGS_ENDPOINT=http://10.10.10.10:9428/insert/opentelemetry/v1/logs    # 日志端点，打入 VictoriaLogs
export OTEL_EXPORTER_OTLP_METRICS_TEMPORALITY_PREFERENCE=cumulative
```

