---
title: Jupyter：Notebook 与数据分析环境
weight: 650
lastmod: 2026-08-13
description: 使用 Pigsty 的独立 Docker Compose 模板运行 JupyterLab，并安全访问 PostgreSQL。
module: [SOFTWARE]
categories: [参考]
---

[JupyterLab](https://jupyter.org/) 是交互式 Notebook、终端与数据分析环境。Pigsty v4.5.0 有两种不同的部署方式：

- [`VIBE`](/docs/vibe/) 模块：由 Ansible 和 systemd 管理，适合 v4.5.0 的完整开发沙箱。
- `app/jupyter`：轻量的独立 Docker Compose 模板，本页介绍这一方式。

`app/jupyter` 不是默认 `apps` 清单项，且创建数据目录是独立步骤；不要直接假设 `app.yml -e app=jupyter` 能处理目录权限。

![JupyterLab](/img/docs/app/jupyter.jpeg)

--------

## 快速开始

```bash
cd ~/pigsty/app/jupyter
vi .env                    # 修改 JUPYTER_TOKEN，并按需固定 JUPYTER_IMAGE
chmod 600 .env
make dir                   # 创建 /data/jupyter，属主 1000:100
make up                    # docker compose up -d
```

可用 `openssl rand -hex 32` 生成强 Token。默认端口为 `8888`，从 `http://<host_ip>:8888` 访问。

只有在 `infra_portal`、Nginx 与 DNS 中配置了 `lab.pigsty` 时，该域名才可用。模板默认值 `JUPYTER_TOKEN=pigsty` 只能用于本地演示，生产环境必须更换。

--------

## 当前模板

`.env` 的 v4.5.0 默认值为：

```bash
JUPYTER_IMAGE=quay.io/jupyter/minimal-notebook:latest
JUPYTER_PORT=8888
JUPYTER_TOKEN=pigsty
```

Compose 将宿主机 `/data/jupyter` 挂载到容器的 `/home/jovyan/work`，并把 Token 传给容器。`latest` 会随上游变化；生产环境应改为经过验证的具体镜像标签或摘要。

若需要 SciPy、R、Julia、TensorFlow、PyTorch 或 Spark，可使用 `.env` 中列出的其他 [Jupyter Docker Stacks](https://jupyter-docker-stacks.readthedocs.io/) 镜像，但仍应固定版本并验证架构支持。

--------

## 访问 PostgreSQL

在 Jupyter Terminal 中安装现代 Psycopg 驱动及可选分析库：

```bash
pip install "psycopg[binary]" pandas sqlalchemy
```

不要把真实密码写入 Notebook。以下示例通过隐藏输入获得连接串，只读取系统信息：

```python
from getpass import getpass
import psycopg

pgurl = getpass("PostgreSQL URL: ")
with psycopg.connect(pgurl) as conn:
    with conn.cursor() as cur:
        cur.execute("SELECT current_database(), current_user, version()")
        print(cur.fetchone())
```

使用 Pandas 与 SQLAlchemy 查询系统统计视图：

```python
import pandas as pd
from sqlalchemy import create_engine

engine = create_engine(pgurl)
df = pd.read_sql(
    "SELECT datname, numbackends, xact_commit, xact_rollback "
    "FROM pg_stat_database ORDER BY datname",
    engine,
)
df
```

这些示例只访问系统视图。读取业务表前，应得到数据所有者授权，并限制列、条件和结果规模。

--------

## 持久化与依赖

只有 `/home/jovyan/work` 映射到 `/data/jupyter`。以下内容默认不会随容器重建持久化：

- 在容器环境中临时安装的 Python/Conda 包
- `work` 目录以外的 Notebook、配置与缓存
- 容器自身的用户状态

生产环境应通过固定镜像、定制 Dockerfile 或可复现的依赖文件安装包，并单独备份 `/data/jupyter`。持久卷不能替代备份。

--------

## 管理命令

在 `~/pigsty/app/jupyter` 中：

```bash
make up      # 启动 JupyterLab
make dir     # 创建数据目录并设置 1000:100 权限
make view    # 显示访问地址
make log     # 跟随日志
make info    # 检查容器
make stop    # 停止容器
make pull    # 拉取 .env 指定的镜像
```

`make clean` 会移除容器但保留 `/data/jupyter`；`make purge` 会递归删除 `/data/jupyter`，属于不可恢复的数据删除操作，执行前必须确认精确目录与近期备份。

--------

## 安全建议

- 使用随机强 Token，保护 `.env`，不要禁用认证。
- 默认端口映射监听主机网络；用防火墙限制来源，优先通过 Nginx 与有效 HTTPS 证书访问。
- Notebook 可执行任意代码并访问挂载文件与数据库；只授予最小权限的数据库账号和宿主机目录。
- 固定镜像版本、扫描镜像并对依赖升级做可复现验证。
- 定期备份 `/data/jupyter`，并实际验证恢复到临时目录。

--------

## 相关链接

- [Jupyter 官方文档](https://jupyter.org/documentation)
- [Jupyter Docker Stacks](https://jupyter-docker-stacks.readthedocs.io/)
- [Pigsty VIBE 模块](/docs/vibe/)
