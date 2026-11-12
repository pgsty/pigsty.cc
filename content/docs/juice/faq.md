---
title: 常见问题
weight: 4560
description: JUICE 模块常见问题解答。
icon: fa-solid fa-circle-question
module: [JUICE]
categories: [参考]
---

--------

## 端口冲突怎么办？

同一节点上的多个实例必须使用不同的 `port`。示例：

```yaml
juice_instances:
  fs1:
    path: /fs1
    meta: postgres://...
    port: 9567
  fs2:
    path: /fs2
    meta: postgres://...
    port: 9568
```

`state: absent` 的实例豁免 `port` 与 `path` 冲突检查（但 `unit` 仍需在节点内全部实例间保持唯一）。替换实例时，可以把旧实例标记为 `absent`，让新实例使用新的实例名并沿用原端口。

--------

## 实例名称有什么限制？

实例名（`juice_instances` 的 Key）即 JuiceFS 卷名，须为 3–63 位小写字母、数字或连字符，且首尾不能是连字符。
例如 `jfs`、`pg-fs` 合法，`fs`、`pg_fs`、`JFS` 不合法。`state: absent` 的实例不受此限制，名称不合规的旧条目也能正常清理。

--------

## 为什么 `data` 变更不生效？

`data` 仅用于 `juicefs format --no-update`，文件系统创建后不会再更新。
如需切换后端，请手动迁移与重新格式化。

--------

## 如何添加新实例？

1. 在配置中新增实例定义
2. 执行：

```bash
./juice.yml -l <host> -e fsname=<name>
```

--------

## 不带 `-l` 执行 `juice.yml` 会怎样？

未定义 `juice_instances`、其值为 `null` 或为空字典的主机（以及指定 `-e fsname=<name>` 但未命中的主机）会被直接跳过，不会安装软件包、创建缓存目录或写入监控目标文件；定义了实例的主机照常执行。
不过仍建议使用 `-l` 明确执行范围。

--------

## 如何移除实例？

1. 先停止使用该挂载点的应用进程，将实例 `state` 设为 `absent`（默认 `unit` 无需保留 `path` 与 `meta`）
2. 执行：

```bash
./juice.yml -l <host> -t juice_clean
```

`juice_clean` 会停止服务并强校验正常卸载（不执行 `umount -l` 懒卸载；若挂载点繁忙会报错中止并保留单元与环境文件以便排障），成功后删除配置并刷新或清理该节点的监控目标文件。移除不会删除元数据、文件数据（PostgreSQL `jfs_blob` 表或对象存储）、本地缓存与挂载点目录。
v4.5.0 及更早版本中，`-t juice_clean` 不会执行清理任务，请改用不带标签的完整执行：`./juice.yml -l <host> -e fsname=<name>`。

--------

## 文件数据存储在哪里？

取决于 `data` 参数：

- `--storage postgres`：JuiceFS 在 `--bucket` 指定的 PostgreSQL 数据库中创建 `jfs_blob` 表存储数据
- `--storage minio/s3`：数据存于 Silo/S3 兼容对象存储的 bucket

元数据存储在 `meta` 指定的元数据引擎中（Pigsty 生产场景通常使用 PostgreSQL）。

--------

## 多节点挂载注意事项？

- 多节点使用相同的 `meta` 与实例名
- 首次格式化仅需执行一次，其余节点会自动跳过
- 确保 `port` 在每个节点上不冲突
- 各节点的 `owner` / `group` / `mode` 必须一致，否则每次执行都会互相覆盖

--------

## `owner` / `group` / `mode` 设置的是哪个目录？

设置的是 JuiceFS 文件系统的根目录，而不是挂载点下面的本地目录。剧本在挂载就绪后才设置这些属性，它们存于元数据中，所有挂载该文件系统的节点看到的是同一份。
新格式化的文件系统根目录为 `root:root 0777`，剧本会按配置修改（默认 `root:root 0755`）。以 `--read-only` 挂载的客户端无法修改根目录属性，若实际值与配置不一致，`juice_dir` 会失败，请让配置与实际值保持一致。

--------

## 监控目标没有生成？

`juice_register` 仅在存在 `infra` 组时写入 `/infra/targets/juice/`。
可手动执行：

```bash
./juice.yml -l <host> -t juice_register
```

--------

## 如何修改挂载参数？

在实例中调整 `mount` 后，先刷新配置，再手动重启服务：

```bash
./juice.yml -l <host> -t juice_config,juice_launch
systemctl restart juicefs-<name>
```

剧本从不自动重启正在运行的实例。重启等于卸载后重新挂载，已打开的文件与容器的 bind mount 会中断。
