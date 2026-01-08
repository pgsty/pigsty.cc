---
title: Jupyter：笔记本 AI IDE
weight: 650
description: 使用 Jupyter Lab 并访问 PostgreSQL 数据库，组合使用 SQL 与 Python 的能力进行数据分析。
module: [SOFTWARE]
categories: [参考]
---

Jupyter Lab 是基于 IPython Notebook 的完整数据科学研发环境，可用于数据分析与可视化。

Pigsty 提供了 Docker Compose 模板，可以一键在容器中启动 Jupyter Lab 服务，并方便地访问 PostgreSQL 数据库。

![](/img/docs/app/jupyter.jpeg)



## 快速开始

在 Pigsty 软件模板目录中提供了 Jupyter 的 Docker Compose 配置文件：

```bash
cd ~/pigsty/app/jupyter
```

修改默认密码，编辑 `.env` 文件中的 `JUPYTER_TOKEN` 参数（默认值为 `pigsty`）。

创建数据目录并启动服务：

```bash
make dir    # 创建 /data/jupyter 目录并设置权限
make up     # 使用 Docker Compose 启动服务
```

访问 Jupyter Lab：

- 默认地址： http://lab.pigsty
- 备用地址： http://10.10.10.10:8888
- 默认 Token：`pigsty`



## 管理命令

Pigsty 提供了便捷的 Makefile 命令来管理 Jupyter 服务：

```bash
make up      # 启动 Jupyter Lab 服务
make dir     # 创建 /data/jupyter 数据目录
make log     # 查看容器日志
make info    # 显示服务信息
make stop    # 停止服务
make clean   # 停止并移除容器
make pull    # 拉取最新镜像
make save    # 保存 Docker 镜像到文件
make load    # 从文件加载 Docker 镜像
```



## 访问 PostgreSQL 数据库

在 Jupyter Lab 中访问 PostgreSQL 数据库需要先安装驱动。

在 Jupyter Lab 的 Terminal 中执行：

```bash
pip install psycopg2-binary psycopg2
```

然后在 Notebook 中使用 `psycopg2` 驱动访问 PostgreSQL：

```python
import psycopg2

# 连接到 PostgreSQL 数据库
conn = psycopg2.connect('postgres://dbuser_meta:DBUser.Meta@10.10.10.10:5432/meta')

# 执行查询
cursor = conn.cursor()
cursor.execute("SELECT date, new_cases FROM covid.country_history WHERE country_code = 'CN';")
data = cursor.fetchall()

# 处理数据
for row in data:
    print(row)
```

你也可以使用其他 Python 数据分析库，如 Pandas、SQLAlchemy 等：

```python
import pandas as pd
from sqlalchemy import create_engine

# 使用 SQLAlchemy 连接
engine = create_engine('postgresql://dbuser_meta:DBUser.Meta@10.10.10.10:5432/meta')

# 使用 Pandas 读取数据
df = pd.read_sql("SELECT * FROM covid.country_history WHERE country_code = 'CN'", engine)
print(df.head())
```



## 配置说明

Jupyter 服务的配置在 `.env` 文件中：

```bash
JUPYTER_TOKEN=pigsty    # Jupyter Lab 访问 Token（密码）
```

如果需要修改端口或其他配置，可以编辑 `docker-compose.yml` 文件：

```yaml
services:
  jupyter:
    image: jupyter/scipy-notebook:latest
    ports:
      - "8888:8888"
    volumes:
      - /data/jupyter:/home/jovyan/work
    environment:
      - JUPYTER_TOKEN=${JUPYTER_TOKEN}
```



## 安装额外的 Python 包

Jupyter 容器支持使用 `pip` 或 `conda` 安装 Python 包。

在 Jupyter Lab 的 Terminal 中执行：

```bash
# 使用 pip 安装
pip install numpy pandas matplotlib seaborn scikit-learn

# 使用 conda 安装
conda install -c conda-forge geopandas

# 使用国内镜像加速（可选）
pip install -i https://pypi.tuna.tsinghua.edu.cn/simple numpy
```



## 数据持久化

Jupyter 的数据存储在 `/data/jupyter` 目录中，该目录会被挂载到容器的 `/home/jovyan/work` 路径。

所有保存在 `work` 目录下的 Notebook 和数据文件都会持久化保存在宿主机上，即使容器重启或删除也不会丢失。



## 安全建议

**强烈建议修改默认的 Token（密码）！**

1. 编辑 `.env` 文件，修改 `JUPYTER_TOKEN` 的值
2. 重启服务：`make up`

如果在生产环境中使用 Jupyter Lab，还应该：

- 使用强密码或禁用 Token 认证
- 配置 HTTPS 访问
- 限制网络访问权限
- 定期备份数据目录



## 相关链接

- Jupyter 官方文档： https://jupyter.org/documentation
- Docker Stacks 仓库： https://github.com/jupyter/docker-stacks
- Pigsty 软件模板： https://github.com/Vonng/pigsty/tree/main/app