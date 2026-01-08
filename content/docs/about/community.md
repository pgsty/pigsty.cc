---
title: 加入社区
weight: 125
description: Pigsty 是一个 Build in Public 的项目，我们在 GitHub 上非常活跃，中文区用户主要活跃于微信群组中。
icon: fas fa-user-group
module: [PIGSTY]
categories: [参考]
---


---------------

## GitHub

我们的 GitHub 仓库地址是：[https://github.com/pgsty/pigsty](https://github.com/pgsty/pigsty) ，欢迎点个 ⭐️ [**关注**](https://github.com/pgsty/pigsty/stargazers) 我们。

我们欢迎任何人 [提交新 Issue](https://github.com/pgsty/pigsty/issues/new) 或创建 [Pull Request](https://github.com/pgsty/pigsty/pulls)，提出功能建议并参与 Pigsty 贡献。

[![Star History Chart](https://api.star-history.com/svg?repos=pgsty/pigsty&type=Date)](https://star-history.com/#pgsty/pigsty&Date)

请注意，关于 Pigsty 文档的问题，请在 [github.com/Vonng/pigsty.cc](https://github.com/Vonng/pigsty.cc) 仓库中提交 [Issue](https://github.com/Vonng/pigsty.cc/issues)。


---------------

## 微信群组

中文区用户主要活跃于微信群组中，目前有七个活跃的群组，1群-4群已经满员，其他群需要添加小助手微信拉入。

加入微信社群，请用搜索 “Pigsty小助手”，（微信号 `pigsty-cc`） 备注或发送 “加群” ，小助手会将您拉入群组中。

![](/img/pigsty/pigsty-cc.jpg)


---------------

## 海外社群

Telegram: https://t.me/joinchat/gV9zfZraNPM3YjFh

Discord: https://discord.gg/j5pG8qfKxU

您也可以通过邮件联系我： rh@vonng.com





---------------

## 社区求助

当您使用 Pigsty 遇到问题时，可以向社区求助，您提供的信息越丰富，就越有可能在社区得到帮助。

请参考 [社区求助指南](https://github.com/pgsty/pigsty/discussions/338) ，尽可能提供足够的信息，以便社区成员帮助您解决问题。以下是求助提问的参考模板：


**发生了什么事？**  (**必选项**)

**Pigsty版本号与操作系统版本** (**必选项**)

```
$ grep version pigsty.yml 

$ cat /etc/os-release

$ uname -a
```

一些云厂商对标准操作系统发行版进行了定制，您可以告诉我们使用的是哪一家云厂商的什么操作系统镜像。
如果您在安装操作系统后对环境进行了定制与修改，或者在您的局域网中有特定的安全规则与防火墙配置，也请在提问时告知我们。


**Pigsty配置文件**

> 请不要忘记抹掉任何敏感信息：密码，内部密钥，敏感配置等。

```
cat ~/pigsty/pigsty.yml
```

**你期待发生什么？**

> 请描述正常情况下应该发生什么事情，实际发生的情况与期待的情况有何偏离？

**如何复现此问题？**

> 请尽可能详细地告诉我们复现此问题的方法与步骤。

**监控截图**

> 如果你在使用 Pigsty 提供的监控系统，可以提供 **相关** 的截图。


**错误日志**

请尽可能提供与错误有关的日志。**请不要粘贴类似 “Failed to start xxx service” 之类没有信息量的内容**。

您可以从 Grafana / Loki 中查询日志，或从以下位置获取日志：

- Syslog:    `/var/log/messages` (rhel) or `/var/log/syslog` (debian)
- Postgres:   `/pg/log/postgres/*`
- Patroni:   `/pg/log/patroni/*`
- Pgbouncer:   `/pg/log/pgbouncer/*`
- Pgbackrest:   `/pg/log/pgbackrest/*`

```bash
journalctl -u patroni
journalctl -u <service name>
```




**您已经搜索过 Issue/网站/FAQ了吗？**

> 在 FAQ 中，我们提供了许多常见问题的解答，请在提问前检查

您也可以从 Github Issue 与 Discussion 中搜索相关问题：

- [Pigsty常见问题](/docs/pgsql/faq)
- [Github 议题](https://github.com/pgsty/pigsty/issues)
- [Pigsty 讨论组](https://github.com/pgsty/pigsty/discussions)


**有什么其他信息是我们需要知道的吗？**

> 您提供的信息与上下文越丰富，我们越有可能帮助您解决问题。

