---
title: Hermes：AI Agent
weight: 568
description: 在 Pigsty 主机上用 Python 虚拟环境安装固定版本的 Hermes Agent，并连接外部模型服务。
module: [SOFTWARE]
categories: [参考]
---

[`app/hermes`](https://github.com/pgsty/pigsty/tree/main/app/hermes) 提供 [**Hermes Agent**](https://github.com/NousResearch/hermes-agent) 的源码安装指南。它使用独立 Python 虚拟环境与外部模型 API，适合已有 Pigsty 的 Linux 主机；该目录没有 Compose 文件或 `conf/app/hermes.yml`，无需运行 `app.yml`。

开发版指南固定 [**v2026.9.24**](https://github.com/NousResearch/hermes-agent/tree/f97608f178d1ffeca59860195ab7da295f7c8e5f)（Python 包版本 `0.21.5`），要求 Python `>=3.11,<3.14`。公开 Pigsty 仓库中的指南仍为早期 `0.8.0` 示例，安装新版时使用以下步骤。

## 安装

先安装 `python3.12-venv` 等系统依赖，在目标 Linux 主机上执行：

```bash
set -euo pipefail
curl -fL -o /tmp/hermes-agent.tar.gz \
  https://codeload.github.com/NousResearch/hermes-agent/tar.gz/f97608f178d1ffeca59860195ab7da295f7c8e5f
printf '%s  %s\n' \
  babbdb9706ad1c96708d75914afb45d809cd4b73dec1ceae233a6814f5ed97e3 \
  /tmp/hermes-agent.tar.gz | sha256sum -c -

HERMES_INSTALL_DIR="$HOME/.hermes/hermes-agent-v2026.9.24"
test ! -e "$HERMES_INSTALL_DIR"
mkdir -p "$HERMES_INSTALL_DIR"
tar -xzf /tmp/hermes-agent.tar.gz -C "$HERMES_INSTALL_DIR" --strip-components=1
cd "$HERMES_INSTALL_DIR"
python3.12 -m venv venv
./venv/bin/python -m pip install --upgrade pip
./venv/bin/python -m pip install -e '.[pty,mcp,cron]'
./venv/bin/python -m pip check
./venv/bin/hermes --version
```

此版本使用 editable 源码安装，CLI 已属于核心依赖，不再使用旧的 `cli` extra。

## 配置与验收

使用 `~/.hermes/.env` 保存 provider 凭据并将权限设为 `0600`，在 `~/.hermes/config.yaml` 中选择 provider、模型与终端执行目录。参数说明见 [**Hermes 配置文档**](https://hermes-agent.nousresearch.com/docs/user-guide/configuration/) 与 [**模型服务配置**](https://hermes-agent.nousresearch.com/docs/integrations/providers/)。

```bash
./venv/bin/hermes doctor
./venv/bin/hermes chat -q '你好'
```
