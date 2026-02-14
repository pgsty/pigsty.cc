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

## 如何移除实例？

1. 将实例 `state` 设为 `absent`
2. 执行：

```bash
./juice.yml -l <host> -t juice_clean
```

移除不会删除 PostgreSQL 元数据或对象存储数据。

--------

## 文件数据存储在哪里？

取决于 `data` 参数：

- `--storage postgres`：数据存于 PostgreSQL `pg_largeobject`
- `--storage minio/s3`：数据存于对象存储 bucket

元数据存储在 `meta` 指定的元数据引擎中（Pigsty 生产场景通常使用 PostgreSQL）。

--------

## 多节点挂载注意事项？

- 多节点使用相同的 `meta` 与实例名
- 首次格式化仅需执行一次，其余节点会自动跳过
- 确保 `port` 在每个节点上不冲突

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
