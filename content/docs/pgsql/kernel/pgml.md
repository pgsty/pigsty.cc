---
title: PostgresML
weight: 2109
date: 2024-06-23
description: 如何使用 Pigsty 部署 PostgresML，在数据库内进行机器学习、模型训练、推理、Embedding 与 RAG。
icon: fas fa-bolt
module: [SOFTWARE]
categories: [概念]
---


[PostgresML](https://postgresml.org/) 是一个 PostgreSQL 扩展，支持最新的大语言模型（LLM）、向量操作、经典机器学习以及传统的 Postgres 应用负载。

PostgresML (pgml) 是一个用 Rust 编写的 PostgreSQL 扩展。您可以运行独立的 Docker 镜像，但本文档不是 docker-compose 模板介绍，仅供参考。

PostgresML 官方支持 Ubuntu 22.04，但我们也为 EL 8/9 维护了 RPM 版本，如果您不需要 CUDA 和 NVIDIA 相关功能的话。

您需要在数据库节点上能够访问互联网，以便从 PyPI 下载 Python 依赖，并从 HuggingFace 下载模型。



-----------------------

## 配置

PostgresML 是一个用 Rust 编写的扩展，官方支持 Ubuntu。Pigsty 在 EL8 和 EL9 上维护了 PostgresML 的 RPM 版本。


**创建新集群**

PostgresML 2.7.9 可用于 PostgreSQL 15，支持 Ubuntu 22.04（官方）、Debian 12 和 EL 8/9（Pigsty 维护）。要启用 `pgml`，首先需要安装扩展：

```yaml
pg-meta:
  hosts: { 10.10.10.10: { pg_seq: 1, pg_role: primary } }
  vars:
    pg_cluster: pg-meta
    pg_users:
      - {name: dbuser_meta     ,password: DBUser.Meta     ,pgbouncer: true ,roles: [dbrole_admin]    ,comment: pigsty admin user }
      - {name: dbuser_view     ,password: DBUser.Viewer   ,pgbouncer: true ,roles: [dbrole_readonly] ,comment: read-only viewer for meta database }
    pg_databases:
      - { name: meta ,baseline: cmdb.sql ,comment: pigsty meta database ,schemas: [pigsty] ,extensions: [{name: postgis, schema: public}, {name: timescaledb}]}
    pg_hba_rules:
      - {user: dbuser_view , db: all ,addr: infra ,auth: pwd ,title: 'allow grafana dashboard access cmdb from infra nodes'}
    pg_libs: 'pgml, pg_stat_statements, auto_explain'
    pg_extensions: [ 'pgml_15 pgvector_15 wal2json_15 repack_15' ]  # ubuntu
    #pg_extensions: [ 'postgresql-pgml-15 postgresql-15-pgvector postgresql-15-wal2json postgresql-15-repack' ]  # ubuntu
```

在 EL 8/9 中，扩展名为 `pgml_15`，对应的 Ubuntu/Debian 名称为 `postgresql-pgml-15`。同时需要将 `pgml` 添加到 `pg_libs` 中。


**在现有集群上启用**

要在现有集群上启用 `pgml`，可以使用 Ansible 的 `package` 模块安装：

```bash
ansible pg-meta -m package -b -a 'name=pgml_15'
# ansible el8,el9 -m package -b -a 'name=pgml_15'           # EL 8/9
# ansible u22 -m package -b -a 'name=postgresql-pgml-15'    # Ubuntu 22.04 jammy
```



-----------------------

## Python 依赖

您还需要在集群节点上安装 PostgresML 的 Python 依赖。官方教程：[安装指南](https://postgresml.org/docs/guides/developer-docs/installation)



**安装 Python 和 PIP**

确保已安装 `python3`、`pip` 和 `venv`：

```bash
# Ubuntu 22.04 (python3.10)，需要使用 apt 安装 pip 和 venv
sudo apt install -y python3 python3-pip python3-venv
```

对于 EL 8 / EL9 及兼容发行版，可以使用 python3.11：

```bash
# EL 8/9，可以升级默认的 pip 和 virtualenv
sudo yum install -y python3.11 python3.11-pip       # 安装最新的 python3.11
python3.11 -m pip install --upgrade pip virtualenv  # 在 EL8 / EL9 上使用 python3.11
```

<details><summary>使用 PyPI 镜像</summary>

对于中国大陆用户，建议使用清华大学 PyPI [镜像](https://mirrors.tuna.tsinghua.edu.cn/help/pypi/)。

```bash
pip config set global.index-url https://pypi.tuna.tsinghua.edu.cn/simple    # 设置全局镜像（推荐）
pip install -i https://pypi.tuna.tsinghua.edu.cn/simple some-package        # 单次安装时使用
```

</details>



**安装依赖包**

创建 Python 虚拟环境，并使用 `pip` 从 [`requirements.txt`](https://github.com/postgresml/postgresml/blob/master/pgml-extension/requirements.txt) 和 [`requirements-xformers.txt`](https://github.com/postgresml/postgresml/blob/master/pgml-extension/requirements-xformers.txt) 安装依赖。

> 如果您使用的是 EL 8/9，需要将以下命令中的 `python3` 替换为 `python3.11`。

```bash
su - postgres;                          # 使用数据库超级用户创建虚拟环境
mkdir -p /data/pgml; cd /data/pgml;     # 创建虚拟环境目录
python3    -m venv /data/pgml           # 创建虚拟环境目录（Ubuntu 22.04）
source /data/pgml/bin/activate          # 激活虚拟环境

# 写入 Python 依赖并使用 pip 安装
cat > /data/pgml/requirments.txt <<EOF
accelerate==0.22.0
auto-gptq==0.4.2
bitsandbytes==0.41.1
catboost==1.2
ctransformers==0.2.27
datasets==2.14.5
deepspeed==0.10.3
huggingface-hub==0.17.1
InstructorEmbedding==1.0.1
lightgbm==4.1.0
orjson==3.9.7
pandas==2.1.0
rich==13.5.2
rouge==1.0.1
sacrebleu==2.3.1
sacremoses==0.0.53
scikit-learn==1.3.0
sentencepiece==0.1.99
sentence-transformers==2.2.2
tokenizers==0.13.3
torch==2.0.1
torchaudio==2.0.2
torchvision==0.15.2
tqdm==4.66.1
transformers==4.33.1
xgboost==2.0.0
langchain==0.0.287
einops==0.6.1
pynvml==11.5.0
EOF

# 在虚拟环境中使用 pip 安装依赖
python3 -m pip install -r /data/pgml/requirments.txt
python3 -m pip install xformers==0.0.21 --no-dependencies

# 此外，有 3 个 Python 包需要使用 sudo 全局安装！
sudo python3 -m pip install xgboost lightgbm scikit-learn
```





-----------------------

## 启用 PostgresML

在所有集群节点上安装 `pgml` 扩展和 Python 依赖后，就可以在 PostgreSQL 集群上启用 `pgml` 了。

使用 `patronictl` 命令 [配置集群](https://pigsty.io/docs/pgsql/admin/#config-cluster)，将 `pgml` 添加到 `shared_preload_libraries`，并在 `pgml.venv` 中指定您的虚拟环境目录：

```yaml
shared_preload_libraries: pgml, timescaledb, pg_stat_statements, auto_explain
pgml.venv: '/data/pgml'
```

然后重启数据库集群，并使用 SQL 命令创建扩展：

```sql
CREATE EXTENSION vector;        -- 建议同时安装 pgvector！
CREATE EXTENSION pgml;          -- 在当前数据库中创建 PostgresML
SELECT pgml.version();          -- 打印 PostgresML 版本信息
```

如果一切正常，您应该会看到类似以下输出：

```bash
# create extension pgml;
INFO:  Python version: 3.11.2 (main, Oct  5 2023, 16:06:03) [GCC 8.5.0 20210514 (Red Hat 8.5.0-18)]
INFO:  Scikit-learn 1.3.0, XGBoost 2.0.0, LightGBM 4.1.0, NumPy 1.26.1
CREATE EXTENSION

# SELECT pgml.version(); -- 打印 PostgresML 版本信息
 version
---------
 2.7.8
```

大功告成！更多详情请参阅 PostgresML 官方文档：https://postgresml.org/docs/guides/use-cases/

