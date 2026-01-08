---
title: 更新扩展
weight: 2208
description: 升级 PostgreSQL 扩展版本
icon: fas fa-arrow-up
module: [PGSQL]
categories: [参考]
---

扩展更新涉及两个层面：**软件包更新**（操作系统层面）和**扩展对象更新**（数据库层面）。


--------

## 更新软件包

使用包管理器更新扩展的软件包：

```bash
# EL 系统
sudo yum update pgvector_18*

# Debian/Ubuntu 系统
sudo apt update && sudo apt upgrade postgresql-18-pgvector
```

使用 Pigsty 批量更新：

```bash
# 更新指定集群的扩展包
./pgsql.yml -l pg-meta -t pg_extension -e '{"pg_extensions":["pgvector"]}'

# 使用 pig 包管理器
pig update pgvector
```


--------

## 更新扩展对象

软件包更新后，数据库中的扩展对象可能需要同步更新。

### 查看可更新的扩展

```sql
-- 查看已安装扩展及其版本
SELECT name, default_version, installed_version
FROM pg_available_extensions
WHERE installed_version IS NOT NULL;

-- 查看可升级的扩展
SELECT name, installed_version, default_version
FROM pg_available_extensions
WHERE installed_version IS NOT NULL
  AND installed_version <> default_version;
```

### 执行扩展更新

```sql
-- 更新到最新版本
ALTER EXTENSION pgvector UPDATE;

-- 更新到指定版本
ALTER EXTENSION pgvector UPDATE TO '0.8.0';
```

### 查看更新路径

```sql
-- 查看扩展的可用升级路径
SELECT * FROM pg_extension_update_paths('pgvector');
```


--------

## 注意事项

1. **备份优先**：更新扩展前建议先备份数据库，特别是涉及数据类型变更的扩展。

2. **检查兼容性**：某些扩展的大版本升级可能不兼容，需查阅扩展的升级文档。

3. **预加载扩展**：如果更新的是需要预加载的扩展（如 `timescaledb`），更新后可能需要重启数据库。

4. **依赖关系**：如果其他扩展依赖于被更新的扩展，需要按依赖顺序更新。

5. **复制环境**：在主从复制环境中，应先在从库测试更新，确认无误后再更新主库。


--------

## 常见问题

### 更新失败

如果 `ALTER EXTENSION UPDATE` 失败，可能是因为：

- 没有可用的升级路径
- 扩展正在被使用
- 权限不足

```sql
-- 查看扩展依赖
SELECT * FROM pg_depend WHERE refobjid = (SELECT oid FROM pg_extension WHERE extname = 'pgvector');
```

### 回滚更新

PostgreSQL 扩展通常不支持直接回滚。如需回滚：

1. 从备份恢复
2. 或者：卸载新版本扩展，安装旧版本软件包，重新创建扩展

