---
title: "版本命令（version）"
linkTitle: "version"
weight: 200
description: "pgBackRest `version` 命令的选项与行为参考。"
icon: fa-solid fa-tag
module: [PGBACKREST]
category: [Reference]
---

> 原始页面： [pgBackRest Command Docs: version](https://pgbackrest.org/command.html#command-version)

显示已安装的 pgBackRest 版本。

## 命令选项

### 输出格式选项（`--output`）

输出类型。

支持以下输出类型：

- `text` — 以文本形式显示已安装的 pgBackRest 版本。
- `num` — 以整数形式显示已安装的 pgBackRest 版本。

```yaml
default: text
example: --output=num
```
