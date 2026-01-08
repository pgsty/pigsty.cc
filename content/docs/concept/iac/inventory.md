---
title: 配置清单
weight: 211
description: 使用声明式的配置文件描述你需要的基础设施与集群
icon: fa-solid fa-code
module: [PIGSTY]
categories: [教程]
---


每一套 Pigsty 部署都对应着一份 **配置清单** （Inventory），描述了基础设施与数据库集群的关键属性。

--------

## 配置文件

Pigsty 默认使用 [**Ansible YAML 配置格式**](https://docs.ansible.com/projects/ansible/latest/inventory_guide/intro_inventory.html)，
使用一个单一 YAML 配置文件 [**`pigsty.yml`**](https://github.com/pgsty/pigsty/blob/main/pigsty.yml) 作为配置清单。

```bash
~/pigsty
  ^---- pigsty.yml   # <---- 默认配置文件
```

您可以直接修改该配置文件来定制您的部署，或者使用 Pigsty 提供的 [**配置向导**](/docs/concept/iac/configure) **`configure`** 脚本自动生成合适的配置文件。






------

## 配置结构

配置清单使用标准的 [**Ansible YAML 配置格式**](https://docs.ansible.com/projects/ansible/latest/inventory_guide/intro_inventory.html)，由两部分组成：**全局参数** （`all.vars`）和多个 **组**（`all.children`）。

您可以在 `all.children` 中定义新集群，并使用全局变量描述基础设施：`all.vars`，它看起来像这样：

```yaml
all:                  # 顶级对象：all
  vars: {...}         # 全局参数
  children:           # 组定义
    infra:            # 组定义：'infra'
      hosts: {...}        # 组成员：'infra'
      vars:  {...}        # 组参数：'infra'
    etcd:    {...}    # 组定义：'etcd'
    pg-meta: {...}    # 组定义：'pg-meta'
    pg-test: {...}    # 组定义：'pg-test'
    redis-test: {...} # 组定义：'redis-test'
    # ...
```




------

## 集群定义

每个 Ansible 组可能代表一个集群，可以是节点集群、PostgreSQL 集群、Redis 集群、Etcd 集群或 MinIO 集群等…

集群定义由两部分组成：**集群成员** （**`hosts`**）与 **集群参数**（**`vars`**）。
您可以在 `<cls>.hosts` 中定义集群成员，并在 `<cls>.vars` 中使用 [**配置参数**](/docs/concept/iac/parameter) 描述集群。
下面是一个 3 节点高可用 PostgreSQL 集群的定义示例：

```yaml
all:
  children:    # ansible 组列表
    pg-test:   # ansible 组名
      hosts:   # ansible 组内实例（集群成员）
        10.10.10.11: { pg_seq: 1, pg_role: primary } # 主机 1
        10.10.10.12: { pg_seq: 2, pg_role: replica } # 主机 2
        10.10.10.13: { pg_seq: 3, pg_role: offline } # 主机 3
      vars:    # ansible 组变量（集群参数）
        pg_cluster: pg-test
```

集群级别的 `vars` （集群参数）将覆盖全局参数，实例级别的 `vars` 将覆盖集群参数和全局参数。



------

## 拆分配置

如果您的部署规模较大，或者希望更好地组织配置文件，
可以将配置清单 [**拆分为多个文件**](https://docs.ansible.com/projects/ansible/latest/inventory_guide/intro_inventory.html#id18)，便于管理与维护。

```yaml
inventory/
├── hosts.yml              # 主机和集群定义
├── group_vars/
│   ├── all.yml            # 全局默认变量 (对应 all.vars)
│   ├── infra.yml          # infra 组变量
│   ├── etcd.yml           # etcd 组变量
│   └── pg-meta.yml        # pg-meta 集群变量
└── host_vars/
    ├── 10.10.10.10.yml    # 特定主机变量
    └── 10.10.10.11.yml
```

您可以将集群成员定义放在 `hosts.yml` 文件中，将集群层面的 [**配置参数**](/docs/concept/iac/parameter#参数优先级) 放在 `group_vars` 目录下的对应文件中。



------

## 切换配置

您可以在执行剧本的时候，通过 `-i` 参数，临时指定另外的配置清单文件。

```bash
./pgsql.yml -i another_config.yml
./infra.yml -i nginx_config.yml
```

此外，Ansible 支持多种配置方式，您可以使用本地 `yaml|ini` 配置文件，或者是 CMDB 与任意的动态配置脚本作为配置源。

在 Pigsty 中，我们通过 Pigsty 主目录中的 [**`ansible.cfg`**](https://github.com/pgsty/pigsty/blob/main/ansible.cfg#L6)
指定同目录下的 **`pigsty.yml`** 作为默认的 **配置清单**，您可按需修改。

```ini
[defaults]
inventory = pigsty.yml
```

此外，Pigsty 还支持使用 [**CMDB 元数据库**](/docs/concept/iac/cmdb) 来存储配置清单，便于与现有系统对接整合。


