---
title: 移除扩展
weight: 2209
description: 卸载 PostgreSQL 扩展
icon: fas fa-trash
module: [PGSQL]
categories: [参考]
---

移除扩展涉及两个层面：**删除扩展对象**（数据库层面）和**卸载软件包**（操作系统层面）。


--------

## 删除扩展对象

使用 `DROP EXTENSION` 从数据库中删除扩展：

```sql
-- 删除扩展
DROP EXTENSION pgvector;

-- 如果有依赖对象，需要级联删除
DROP EXTENSION pgvector CASCADE;
```

> **警告**：`CASCADE` 会删除所有依赖于该扩展的对象（表、函数、视图等），请谨慎使用。

### 查看扩展依赖

删除前建议先检查依赖关系：

```sql
-- 查看依赖于某扩展的对象
SELECT
    classid::regclass,
    objid,
    deptype
FROM pg_depend
WHERE refobjid = (SELECT oid FROM pg_extension WHERE extname = 'pgvector');

-- 查看使用了扩展类型的表
SELECT
    c.relname AS table_name,
    a.attname AS column_name,
    t.typname AS type_name
FROM pg_attribute a
JOIN pg_class c ON a.attrelid = c.oid
JOIN pg_type t ON a.atttypid = t.oid
WHERE t.typname = 'vector';
```


--------

## 移除预加载

如果扩展在 `shared_preload_libraries` 中，删除后需要从预加载列表移除：

```bash
# 修改 shared_preload_libraries，移除扩展
pg edit-config pg-meta --force -p shared_preload_libraries='pg_stat_statements, auto_explain'

# 重启使配置生效
pg restart pg-meta
```


--------

## 卸载软件包

从数据库中删除扩展后，可以选择卸载软件包：

```bash
# EL 系统
sudo yum remove pgvector_18*

# Debian/Ubuntu 系统
sudo apt remove postgresql-18-pgvector

# 使用 pig 包管理器
pig remove pgvector
```

> 通常保留软件包不会有问题，仅在需要释放磁盘空间或解决冲突时才需要卸载。


--------

## 注意事项

1. **数据丢失风险**：使用 `CASCADE` 会删除依赖对象，可能导致数据丢失。

2. **应用兼容性**：删除扩展前确保应用程序不再使用该扩展的功能。

3. **预加载顺序**：如果删除的是预加载扩展，务必同时从 `shared_preload_libraries` 中移除，否则数据库可能无法启动。

4. **主从环境**：在主从复制环境中，`DROP EXTENSION` 会自动复制到从库。


--------

## 操作顺序

完整的扩展移除流程：

```bash
# 1. 检查依赖关系
psql -d mydb -c "SELECT * FROM pg_depend WHERE refobjid = (SELECT oid FROM pg_extension WHERE extname = 'pgvector');"

# 2. 删除数据库中的扩展
psql -d mydb -c "DROP EXTENSION pgvector;"

# 3. 如果是预加载扩展，从 shared_preload_libraries 移除
pg edit-config pg-meta --force -p shared_preload_libraries='pg_stat_statements, auto_explain'

# 4. 重启数据库（如果修改了预加载配置）
pg restart pg-meta

# 5. 可选：卸载软件包
sudo yum remove pgvector_18*
```

