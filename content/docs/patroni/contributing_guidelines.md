---
title: "贡献指南"
linkTitle: "贡献"
weight: 200
icon: fa-solid fa-users
description: "贡献工作流程、支持渠道与开发指南。"
module: [PATRONI]
categories: [任务]
upstream_link: "https://patroni.readthedocs.io/en/latest/contributing_guidelines.html"
---

<a id="contributing_guidelines"></a>

--------

<div id="在线交流"></div>

## 在线交流 {#chatting}

如有疑问、需要互动式故障排查帮助，或希望与其他 Patroni 用户交流，欢迎加入 [PostgreSQL Slack](https://pgtreats.info/slack-invite) 的 [#patroni](https://postgresteam.slack.com/archives/C9XPYG92A) 频道。

<a id="reporting_bugs"></a>

--------

<div id="报告缺陷"></div>

## 报告缺陷 {#reporting-bugs}

提交缺陷报告前，请务必 **在最新版 Patroni 上复现该问题**！同时请仔细核对 [问题跟踪器](https://github.com/patroni/patroni/issues) 中是否已存在相同问题。

--------

<div id="运行测试"></div>

## 运行测试 {#running-tests}

运行 behave 测试的前置条件：

1.  需要安装包含 [contrib](https://www.postgresql.org/docs/current/contrib.html) 模块的 PostgreSQL 软件包。
2.  PostgreSQL 二进制文件必须在 **`PATH`** 中可访问。你可能需要通过类似 **`PATH=/usr/lib/postgresql/11/bin:$PATH python -m behave`** 的方式将其加入路径。
3.  如需测试外部 DCS（如 Etcd、Consul、Zookeeper），需要提前安装相应软件包，并确保对应服务在本地默认端口上以无加密/无认证方式接受连接。对于 Etcd 或 Consul，若相应二进制文件在 **`PATH`** 中可用，behave 测试套件可以自动启动它们。

安装依赖：

``` bash
# You may want to use Virtualenv or specify pip3.
pip install -r requirements.txt
pip install -r requirements.dev.txt
```

安装完所有依赖后，可以运行各类测试套件：

``` bash
# You may want to use Virtualenv or specify python3.

# Run flake8 to check syntax and formatting:
python setup.py flake8

# Run the pytest suite in tests/:
python setup.py test

# Moreover, you may want to run tests in different scopes for debugging purposes,
# the -s option include print output during test execution.
# Tests in pytest typically follow the pattern: FILEPATH::CLASSNAME::TESTNAME.
pytest -s tests/test_api.py
pytest -s tests/test_api.py::TestRestApiHandler
pytest -s tests/test_api.py::TestRestApiHandler::test_do_GET

# Run the behave (https://behave.readthedocs.io/en/latest/) test suite in features/;
# modify DCS as desired (raft has no dependencies so is the easiest to start with):
DCS=raft python -m behave
```

--------

<div id="使用-tox-进行测试"></div>

## 使用 tox 进行测试 {#testing-with-tox}

运行 tox 测试只需安装一个额外依赖（Python 本身除外）：

``` bash
pip install "tox>=4"
```

如需运行基于 Docker 的 **`behave`** 测试，还需要安装 Docker。

**`tox.ini`** 中的 tox 配置定义了以下"环境"以执行各类任务：

- **`lint`**：使用 **`flake8`** 对 Python 代码进行 lint 检查
- **`test`**：使用 **`pytest`** 在所有可用 Python 解释器上运行单元测试，若检测到 TTY 则生成 HTML 报告，否则生成 XML 报告
- **`dep`**：使用 **`pipdeptree`** 检测软件包依赖冲突
- **`type`**：使用 **`pyright`** 进行静态类型检查
- **`black`**：使用 **`black`** 进行代码格式化
- **`docker-build`**：构建用于 **`behave`** 环境的 Docker 镜像
- **`docker-cmd`**：使用上述镜像运行任意命令
- **`docker-behave-etcd`**：使用上述镜像运行 tox behave 测试
- **`py*behave`**：使用可用的 Python 解释器运行 behave（不使用 Docker，但这正是在 Docker 容器内部调用的方式）
- **`docs`**：使用 **`sphinx`** 构建文档

<div id="运行-tox"></div>

### 运行 tox {#running-tox}

运行默认环境列表（dep、lint、test 和 docs），直接执行：

``` bash
tox
```

可以使用 **`test`** 标签运行 **`test`** 环境：

``` bash
tox -m test
```

可以使用 **`behave`** 标签运行 **`behave`** Docker 测试：

``` bash
tox -m behave
```

类似地，docs 使用 **`docs`** 标签。

其他所有环境可通过对应的环境名称运行：

``` bash
tox -e lint
tox -e py39-test-lin
```

也可以使用 **`factors`** 筛选部分环境列表。例如，若要运行所有 Python 3.10 相关环境：

``` bash
tox -f py310
```

这等价于运行以下所有环境：

``` bash
$ tox -l -f py310
py310-test-lin
py310-test-mac
py310-test-win
py310-type-lin
py310-type-mac
py310-type-win
py310-behave-etcd-lin
py310-behave-etcd-win
py310-behave-etcd-mac
py310-behave-etcd3-lin
py310-behave-etcd3-win
py310-behave-etcd3-mac
```

可以使用 tox（>= v4）列出所有已配置的环境组合：

``` bash
tox l
```

当 tox 在有活跃终端的情况下运行时，**`test`** 和 **`docs`** 环境在任务完成后会尝试自动打开 HTML 输出文件，方便本地开发人员查看。在 macOS 上会调用 **`open`** 命令，在 Linux 上会调用 **`xdg-open`**。如需使用其他命令，可将环境变量 **`OPEN_CMD`** 设置为该命令的名称或路径。即使此步骤失败，也不会导致整体运行失败。如需禁用此功能，可将 **`OPEN_CMD`** 设置为 **`:`** 空操作命令。

``` bash
OPEN_CMD=: tox -m docs
```

<div id="behave-测试"></div>

### Behave 测试 {#behave-tests}

使用 **`-m behave`** 运行 behave 测试时，将基于 PG_MAJOR 版本 12 到 18 构建 Docker 镜像，然后运行所有 behave 测试。这可能需要相当长的时间，因此你可能希望将范围限定为特定的 PostgreSQL 版本、特定功能集或特定步骤。

若要指定 PostgreSQL 版本，请包含所需依赖镜像构建环境的完整名称，以及随后的 behave 环境名称。例如，若要测试 PostgreSQL 14，请使用：

``` bash
tox -e pg14-docker-build,pg14-docker-behave-etcd-lin
```

如果只想测试特定功能，可以向 behave 传递位置参数。以下命令将针对所有 PostgreSQL 版本运行 watchdog behave 功能测试场景：

``` bash
tox -m behave -- features/watchdog.feature
```

当然，也可以将上述两种方式结合使用。

--------

<div id="提交-pull-request"></div>

## 提交 Pull Request {#contributing-a-pull-request}

1.  Fork 仓库，开发并测试你的代码变更。
2.  在用户文档中同步反映相关变更。
3.  提交 Pull Request，并清晰描述本次变更的目标。如有必要，请关联已有的 Issue。

我们将尽快为你的 Pull Request 提供反馈。

祝 Patroni 开发愉快 ;-)
