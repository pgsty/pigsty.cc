---
title: Ansible
weight: 3101
description: 使用 Ansible 运行管理命令
icon: fa-solid fa-terminal
categories: [任务]
---

所有 INFRA 节点上都默认安装了 Ansible，可以用于管理整套部署。

Pigsty 基于 **Ansible** 实现自动化管理，它遵循 **基础设施即代码（Infrastructure-as-Code）** 的理念。

对于管理数据库与基础设施而言，Ansible 的知识很有用，但**并非必需**。您只需知道如何执行 **剧本（Playbook）** —— 那些定义了一系列自动化任务的 YAML 文件即可。


----------------

## 安装

Pigsty 在 [引导过程](/docs/setup/install#引导) 中会尽力自动安装 `ansible` 及其依赖项。
如需手动安装，请使用以下命令：

```bash
# Debian / Ubuntu
sudo apt install -y ansible python3-jmespath

# EL 10
sudo dnf install -y ansible python-jmespath

# EL 8/9
sudo dnf install -y ansible python3.12-jmespath

# EL 7
sudo yum install -y ansible python-jmespath
```

### macOS

macOS 用户可使用 [Homebrew](https://brew.sh/) 安装：

```bash
brew install ansible
pip3 install jmespath
```


----------------

## 基础用法

运行剧本只需执行 `./path/to/playbook.yml` 即可。以下是最常用的 Ansible 命令行参数：

| 用途 | 参数 | 说明 |
|------|------|------|
| **在哪里** | `-l` / `--limit <pattern>` | 限定目标主机/分组/匹配模式 |
| **做什么** | `-t` / `--tags <tags>` | 仅运行带有指定标签的任务 |
| **怎么做** | `-e` / `--extra-vars <vars>` | 传递额外的命令行变量 |
| **用什么配置** | `-i` / `--inventory <path>` | 指定配置清单文件路径 |


----------------

## 限定主机

使用 `-l|--limit <pattern>` 参数可将执行范围限定到特定的分组、主机或匹配模式：

```bash
./node.yml                      # 在所有节点上执行
./pgsql.yml -l pg-test          # 仅在 pg-test 集群上执行
./pgsql.yml -l pg-*             # 在所有以 pg- 开头的集群上执行
./pgsql.yml -l 10.10.10.10      # 仅在特定 IP 的主机上执行
```


> 不指定主机限制直接运行剧本**可能非常危险**！缺省情况下，大多数剧本会在 **所有（`all`）** 主机上执行。**务必谨慎使用！**


----------------

## 限定任务

使用 `-t|--tags <tags>` 参数可仅执行带有指定标签的任务子集：

```bash
./infra.yml -t repo           # 仅执行创建本地仓库的任务
./infra.yml -t repo_upstream  # 仅执行添加上游仓库的任务
./node.yml -t node_pkg        # 仅执行安装节点软件包的任务
./pgsql.yml -t pg_hba         # 仅执行渲染 pg_hba.conf 的任务
```


----------------

## 传递变量

使用 `-e|--extra-vars <key=value>` 参数可在运行时覆盖变量：

```bash
./pgsql.yml -e pg_clean=true         # 强制清理现有的 PG 实例
./pgsql-rm.yml -e pg_rm_pkg=false    # 卸载时保留软件包
./node.yml -e '{"node_tune":"tiny"}' # 使用 JSON 格式传递变量
./pgsql.yml -e @/path/to/config.yml  # 从 YAML 文件加载变量
```


----------------

## 指定配置清单

默认情况下，Ansible 会使用当前目录下的 `pigsty.yml` 作为配置清单。
使用 `-i|--inventory <path>` 参数可指定其他配置文件：

```bash
./pgsql.yml -i files/pigsty/full.yml -l pg-test
```

> [!NOTE]
>
> 若要永久更改默认配置文件的路径，可修改 `ansible.cfg` 中的 `inventory` 参数。
