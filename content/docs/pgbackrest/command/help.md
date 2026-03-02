---
title: "帮助命令（help）"
linkTitle: "help"
weight: 70
description: "pgBackRest `help` 命令的选项与行为参考。"
icon: fa-solid fa-circle-question
module: [PGBACKREST]
category: [Reference]
---

> 原始页面： [pgBackRest Command Docs: help](https://pgbackrest.org/command.html#command-help)

`help` 命令提供三个层级的帮助信息：未指定命令时显示通用帮助；指定命令（例如 `pgbackrest help backup`）时显示该命令的完整说明及有效选项列表；在命令之外还指定了某个选项（例如 `pgbackrest help backup type`）时显示该选项在此命令下的完整说明。

## 命令选项

### 显示帮助选项（`--help`）

显示帮助信息。

即使未指定 `help` 命令也会显示帮助信息，且优先于 `--version` 选项。

```yaml
default: n
example: --help
```

### 显示版本选项（`--version`）

显示版本信息。

即使未指定 `version` 或 `help` 命令也会显示版本信息。

```yaml
default: n
example: --version
```
