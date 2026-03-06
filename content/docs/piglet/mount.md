---
title: "将远程目录挂载到本地"
linkTitle: "本地挂载"
weight: 8000
description: "想要在多个设备上同步玩耍？Piglet 支持将云端目录挂载到本地，随时随地访问你的 AI 编码沙箱！"
icon: fas fa-piggy-bank
draft: true
module: [PIGLET]
---


## 检验连通性

要远程挂载 Piglet 沙箱中的目录到本地，你需要可以通过 URL 访问沙箱上的的 PostgreSQL 数据库：

```bash
psql postgres://dbuser_meta:DBUser.Meta@10.10.10.10:5432/meta
```

如果你在用容器跑 Pigsty (`cd docker/; make launch`)，使用 `make pass` 打印出 `dbuser_meta` 的密码

```bash
psql postgres://dbuser_meta:X3f8aVbTChqPppgzn0fbaDpy@127.0.01:5432/meta
```

只要确保可以连上即可。


--------

## 本地挂载

本地挂载需要使用到 juicefs，在 MacOS 上，你可以简单的使用 homebrew 进行安装。

```bash
brew install juicefs
```

然后使用 `juicefs mount` 命令将远程目录挂载到本地，两个参数分别是数据库 URL，挂载点，以及 `-d` 参数表示以后台模式运行。

```bash
juicefs mount "postgres://dbuser_meta:DBUser.Meta@10.10.10.10:5432/meta" ~/work -d
```

需要注意，JuiceFS 在 MacOS 上运行时默认使用 [MacFUSE](https://macfuse.github.io/) 作为底层文件系统驱动。





