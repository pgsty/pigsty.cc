---
title: "将独立实例转换为 Patroni 集群"
linkTitle: "转换现有集群"
weight: 140
icon: fa-solid fa-truck-moving
description: "将现有 PostgreSQL 数据迁移并转换为 Patroni 集群的操作步骤。"
module: [PATRONI]
category: [Task]
---

> 原始页面： https://patroni.readthedocs.io/en/latest/existing_data.html

<a id="existing_data"></a>
本节介绍将独立 PostgreSQL 实例转换为 Patroni 集群的操作流程。

如需从零开始部署 Patroni 集群（不使用已有 PostgreSQL 实例），请参阅 [**运行与配置**](/docs/patroni/readme#running_configuring)。

--------

## 操作步骤

以下是将现有 PostgreSQL 集群转换为 Patroni 托管集群的步骤概览。本步骤假设现有集群的所有节点当前均在运行，并且您**不打算**在迁移过程中修改 PostgreSQL 配置。具体步骤如下：

1.  按照 Patroni 配置中 [**认证**](/docs/patroni/config/yaml#postgresql_settings) 章节的说明创建 PostgreSQL 用户。下方代码块中提供了创建用户的示例 SQL 命令，请根据您的实际环境替换用户名和密码。如果相关用户已存在，可跳过此步骤。

    ``` sql
    -- Patroni 超级用户
    -- 请将 PATRONI_SUPERUSER_USERNAME 和 PATRONI_SUPERUSER_PASSWORD 替换为实际值
    CREATE USER PATRONI_SUPERUSER_USERNAME WITH SUPERUSER ENCRYPTED PASSWORD 'PATRONI_SUPERUSER_PASSWORD';

    -- Patroni 复制用户
    -- 请将 PATRONI_REPLICATION_USERNAME 和 PATRONI_REPLICATION_PASSWORD 替换为实际值
    CREATE USER PATRONI_REPLICATION_USERNAME WITH REPLICATION ENCRYPTED PASSWORD 'PATRONI_REPLICATION_PASSWORD';

    -- Patroni rewind 用户（若您打算在 Patroni 配置中启用 use_pg_rewind）
    -- 请将 PATRONI_REWIND_USERNAME 和 PATRONI_REWIND_PASSWORD 替换为实际值
    CREATE USER PATRONI_REWIND_USERNAME WITH ENCRYPTED PASSWORD 'PATRONI_REWIND_PASSWORD';
    GRANT EXECUTE ON function pg_catalog.pg_ls_dir(text, boolean, boolean) TO PATRONI_REWIND_USERNAME;
    GRANT EXECUTE ON function pg_catalog.pg_stat_file(text, boolean) TO PATRONI_REWIND_USERNAME;
    GRANT EXECUTE ON function pg_catalog.pg_read_binary_file(text) TO PATRONI_REWIND_USERNAME;
    GRANT EXECUTE ON function pg_catalog.pg_read_binary_file(text, bigint, bigint, boolean) TO PATRONI_REWIND_USERNAME;
    ```

2.  在所有 PostgreSQL 节点上依次执行以下操作。请逐节点完成所有步骤后再处理下一个节点，先从主库开始，然后依次处理各从库节点：

    1.  如果 PostgreSQL 通过 systemd 管理，请先禁用 PostgreSQL 的 systemd 服务单元——因为 PostgreSQL 的启停将改由 Patroni 负责管理。
    2.  为 Patroni 创建 YAML 配置文件。可使用 [**Patroni 配置生成与校验工具**](/docs/patroni/config#validate_generate_config) 完成此操作。
        - **注意（仅适用于主库）：** 如果现有集群成员之间使用复制槽进行复制，建议启用 **`use_slots`** 并通过 **`slots`** 配置项将现有复制槽设为永久槽。请注意，当 **`use_slots`** 启用时，Patroni 会自动为成员间复制创建复制槽，并删除它无法识别的复制槽。此处使用永久槽的目的是在迁移至 Patroni 的过程中保留现有复制槽。详情请参阅 [**动态配置项**](/docs/patroni/config/dynamic#dynamic)。
    3.  通过 **`patroni`** systemd 服务单元启动 Patroni。Patroni 将自动检测到 PostgreSQL 已在运行，并开始监控该实例。

3.  将 PostgreSQL 的"启动控制权"移交给 Patroni。为此，需要通过 [`patronictl restart cluster-name member-name`](/docs/patroni/patronictl#patronictl_restart_parameters) 命令重启各集群成员。为最大限度减少停机时间，建议将此步骤拆分为：

    1.  立即重启从库节点。
    2.  在维护窗口内计划性地重启主库。

4.  如果您在第 2.2 步中配置了永久槽，应在 Patroni 创建的复制槽的 **`restart_lsn`** 追上对应成员原始槽的 **`restart_lsn`** 之后，通过 [`patronictl edit-config cluster-name`](/docs/patroni/patronictl#patronictl_edit_config_parameters) 命令将其从 **`slots`** 配置中移除。移除后，Patroni 将在这些原始槽不再被需要时自动将其删除。以下是用于比较两个槽 **`restart_lsn`** 的示例查询：

    ``` sql
    -- 假设 original_slot_for_member_x 是原集群中用于向成员 X 复制变更的槽名称，
    -- slot_for_member_x 是 Patroni 为同一目的创建的槽名称。
    -- 需要确认 slot_for_member_x 的 restart_lsn >= original_slot_for_member_x 的 restart_lsn
    SELECT slot_name,
           restart_lsn
    FROM pg_replication_slots
    WHERE slot_name IN (
        'original_slot_for_member_x',
        'slot_for_member_x'
    )
    ```

<a id="major_upgrade"></a>
## PostgreSQL 大版本升级

目前，进行大版本升级的唯一可行方式是：

1.  停止 Patroni。
2.  升级 PostgreSQL 二进制文件，并在主库上执行 [pg_upgrade](https://www.postgresql.org/docs/current/pgupgrade.html)。
3.  更新 **`patroni.yml`**。
4.  从 DCS 中删除 **`initialize`** 键，或清除 DCS 中的完整集群状态。后者可通过执行 [`patronictl remove cluster-name`](/docs/patroni/patronictl#patronictl_remove_parameters) 命令完成。这是必要的，因为 **`pg_upgrade`** 会运行 **`initdb`**，从而创建一个具有新 PostgreSQL 系统标识符的新数据库。
5.  如果您在上一步中清除了集群状态，建议将旧数据目录中的 **`patroni.dynamic.json`** 复制到新数据目录，以保留之前设置的 PostgreSQL 参数。
6.  在主库上启动 Patroni。
7.  在从库节点上升级 PostgreSQL 二进制文件，更新 **`patroni.yml`**，并清空 **`data_dir`**。
8.  在从库节点上启动 Patroni，等待复制完成。

PostgreSQL 不支持在从库节点上运行 **`pg_upgrade`**。如果您清楚自己在做什么，也可以尝试 <https://www.postgresql.org/docs/current/pgupgrade.html> 中描述的 rsync 方式，以替代清空从库节点 **`data_dir`** 的操作。但最安全的方式仍然是让 Patroni 为您完成数据复制。

--------

## 常见问题

- **Patroni 启动时报错，提示无法绑定到 PostgreSQL 端口。**

  请核查 **`postgresql.conf`** 中的 **`listen_addresses`** 和 **`port`** 配置，以及 **`patroni.yml`** 中的 **`postgresql.listen`** 配置。同时不要忘记确认 **`pg_hba.conf`** 中允许相应的访问。

- **请求 Patroni 重启节点后，PostgreSQL 报错：`could not open configuration file "/etc/postgresql/10/main/pg_hba.conf": No such file or directory`**

  这个问题可能由多种原因引起，具体取决于您管理 PostgreSQL 配置的方式。如果您指定了 **`postgresql.config_dir`**，Patroni 只会在引导新集群时，根据 [**bootstrap**](/docs/patroni/config/yaml#bootstrap_settings) 章节中的配置生成 **`pg_hba.conf`**。在当前场景中，由于 **`PGDATA`** 非空，引导过程并未发生，因此该文件必须事先存在。
