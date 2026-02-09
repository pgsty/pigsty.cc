---
title: 参数列表
weight: 3030
description: INFRA 模块提供了 10 组共 70+ 个配置参数
icon: fa-solid fa-sliders
categories: [参考]
---


INFRA 模块负责配置 Pigsty 的基础设施组件：本地软件源、Nginx、DNSMasq、VictoriaMetrics、VictoriaLogs、Grafana、Alertmanager、Blackbox Exporter 等监控告警基础设施。

> Pigsty v4.0 使用 VictoriaMetrics 替代 Prometheus，使用 VictoriaLogs 替代 Loki，实现了更优秀的可观测性方案。


| 参数组                               | 功能说明                               |
|:----------------------------------|:-----------------------------------|
| [`META`](#meta)                   | Pigsty 元信息：版本、管理IP、区域、语言、代理        |
| [`CA`](#ca)                       | 自签名 CA 证书管理                        |
| [`INFRA_ID`](#infra_id)           | 基础设施节点身份标识与服务门户                    |
| [`REPO`](#repo)                   | 本地软件仓库配置                           |
| [`INFRA_PACKAGE`](#infra_package) | 基础设施节点软件包安装                        |
| [`NGINX`](#nginx)                 | Nginx Web服务器与反向代理配置                |
| [`DNS`](#dns)                     | DNSMasq 域名解析服务配置                   |
| [`VICTORIA`](#victoria)           | VictoriaMetrics/Logs/Traces 可观测性套件 |
| [`PROMETHEUS`](#prometheus)       | Alertmanager 与 Blackbox Exporter   |
| [`GRAFANA`](#grafana)             | Grafana 可视化平台配置                    |
{.full-width}


----------------

## 参数概览

[`META`](#meta) 参数组用于定义 Pigsty 的元信息，包括版本号、管理节点 IP、软件源区域、默认语言以及代理设置。

| 参数                              |      类型      |  级别  | 说明                          |
|:--------------------------------|:------------:|:----:|:----------------------------|
| [`version`](#version)           |   `string`   | `G`  | pigsty 版本字符串                |
| [`admin_ip`](#admin_ip)         |     `ip`     | `G`  | 管理节点 IP 地址                  |
| [`region`](#region)             |    `enum`    | `G`  | 上游镜像区域：default,china,europe |
| [`language`](#language)         |    `enum`    | `G`  | 默认语言，en 或 zh                |
| [`proxy_env`](#proxy_env)       |    `dict`    | `G`  | 下载包时使用的全局代理环境变量             |
{.full-width}

[`CA`](#ca) 参数组用于配置 Pigsty 自签名 CA 证书管理，包括是否创建 CA、CA 名称以及证书有效期。

| 参数                                  |     类型      |  级别  | 说明                     |
|:------------------------------------|:-----------:|:----:|:-----------------------|
| [`ca_create`](#ca_create)           |   `bool`    | `G`  | 不存在时是否创建 CA？默认为 true   |
| [`ca_cn`](#ca_cn)                   |  `string`   | `G`  | CA CN名称，固定为 pigsty-ca  |
| [`cert_validity`](#cert_validity)   | `interval`  | `G`  | 证书有效期，默认为 20 年         |
{.full-width}

[`INFRA_ID`](#infra_id) 参数组用于定义基础设施节点的身份标识，包括节点序号、服务门户配置以及数据目录。

| 参数                                |    类型    |  级别  | 说明                       |
|:----------------------------------|:--------:|:----:|:-------------------------|
| [`infra_seq`](#infra_seq)         |  `int`   | `I`  | 基础设施节点序号，必选身份参数          |
| [`infra_portal`](#infra_portal)   |  `dict`  | `G`  | 通过 Nginx 门户暴露的基础设施服务列表   |
| [`infra_data`](#infra_data)       |  `path`  | `G`  | 基础设施数据目录，默认为 /data/infra |
{.full-width}

[`REPO`](#repo) 参数组用于配置本地软件仓库，包括仓库启用开关、目录路径、上游源定义以及要下载的软件包列表。

| 参数                                            |      类型       |   级别    | 说明                    |
|:----------------------------------------------|:-------------:|:-------:|:----------------------|
| [`repo_enabled`](#repo_enabled)               |    `bool`     | `G/I`   | 在此基础设施节点上创建软件仓库？      |
| [`repo_home`](#repo_home)                     |    `path`     |  `G`    | 软件仓库主目录，默认为`/www`     |
| [`repo_name`](#repo_name)                     |   `string`    |  `G`    | 软件仓库名称，默认为 pigsty     |
| [`repo_endpoint`](#repo_endpoint)             |     `url`     |  `G`    | 仓库的访问点：域名或 `ip:port` 格式 |
| [`repo_remove`](#repo_remove)                 |    `bool`     | `G/A`   | 构建本地仓库时是否移除现有上游仓库源定义文件？ |
| [`repo_modules`](#repo_modules)               |   `string`    | `G/A`   | 启用的上游仓库模块列表，用逗号分隔     |
| [`repo_upstream`](#repo_upstream)             | `upstream[]`  |  `G`    | 上游仓库源定义：从哪里下载上游包？     |
| [`repo_packages`](#repo_packages)             |  `string[]`   |  `G`    | 从上游仓库下载哪些软件包？         |
| [`repo_extra_packages`](#repo_extra_packages) |  `string[]`   | `G/C/I` | 从上游仓库下载哪些额外的软件包？      |
| [`repo_url_packages`](#repo_url_packages)     |  `string[]`   |  `G`    | 使用URL下载的额外软件包列表       |
{.full-width}

[`INFRA_PACKAGE`](#infra_package) 参数组用于定义在基础设施节点上安装的软件包，包括 RPM/DEB 包和 PIP 包。

| 参数                                          |     类型      |  级别  | 说明                    |
|:--------------------------------------------|:-----------:|:----:|:----------------------|
| [`infra_packages`](#infra_packages)         | `string[]`  | `G`  | 在基础设施节点上要安装的软件包       |
| [`infra_packages_pip`](#infra_packages_pip) |  `string`   | `G`  | 在基础设施节点上使用 pip 安装的包   |
{.full-width}

[`NGINX`](#nginx) 参数组用于配置 Nginx Web 服务器与反向代理，包括启用开关、端口、SSL 模式、证书以及基础认证。

| 参数                                              |     类型     |   级别   | 说明                            |
|:------------------------------------------------|:----------:|:------:|:------------------------------|
| [`nginx_enabled`](#nginx_enabled)               |   `bool`   | `G/I`  | 在此基础设施节点上启用 nginx？            |
| [`nginx_clean`](#nginx_clean)                   |   `bool`   | `G/A`  | 初始化时清理现有 nginx 配置？            |
| [`nginx_exporter_enabled`](#nginx_exporter_enabled) |   `bool`   | `G/I`  | 在此基础设施节点上启用 nginx_exporter？   |
| [`nginx_exporter_port`](#nginx_exporter_port)   |   `port`   |  `G`   | nginx_exporter 监听端口，默认为 9113  |
| [`nginx_sslmode`](#nginx_sslmode)               |   `enum`   |  `G`   | nginx SSL模式？disable,enable,enforce |
| [`nginx_cert_validity`](#nginx_cert_validity)   | `duration` |  `G`   | nginx 自签名证书有效期，默认为 397d       |
| [`nginx_home`](#nginx_home)                     |   `path`   |  `G`   | nginx 内容目录，默认为 `/www`，软链接到 nginx_data |
| [`nginx_data`](#nginx_data)                     |   `path`   |  `G`   | nginx 实际数据目录，默认为 /data/nginx  |
| [`nginx_users`](#nginx_users)                   |   `dict`   |  `G`   | nginx 基础认证用户：用户名和密码字典         |
| [`nginx_port`](#nginx_port)                     |   `port`   |  `G`   | nginx 监听端口，默认为 80             |
| [`nginx_ssl_port`](#nginx_ssl_port)             |   `port`   |  `G`   | nginx SSL监听端口，默认为 443         |
| [`certbot_sign`](#certbot_sign)                 |   `bool`   | `G/A`  | 是否使用 certbot 签署证书？            |
| [`certbot_email`](#certbot_email)               |  `string`  | `G/A`  | certbot 通知邮箱地址                |
| [`certbot_options`](#certbot_options)           |  `string`  | `G/A`  | certbot 额外的命令行参数              |
{.full-width}

[`DNS`](#dns) 参数组用于配置 DNSMasq 域名解析服务，包括启用开关、监听端口以及动态 DNS 记录。

| 参数                            |     类型      |   级别   | 说明                     |
|:------------------------------|:-----------:|:------:|:-----------------------|
| [`dns_enabled`](#dns_enabled) |   `bool`    | `G/I`  | 在此基础设施节点上设置dnsmasq？    |
| [`dns_port`](#dns_port)       |   `port`    |  `G`   | DNS 服务器监听端口，默认为 53     |
| [`dns_records`](#dns_records) | `string[]`  |  `G`   | 由 dnsmasq 解析的动态 DNS 记录 |
{.full-width}

[`VICTORIA`](#victoria) 参数组用于配置 VictoriaMetrics/Logs/Traces 可观测性套件，包括启用开关、端口、数据保留策略等。

| 参数                                                      |     类型     |   级别   | 说明                          |
|:--------------------------------------------------------|:----------:|:------:|:----------------------------|
| [`vmetrics_enabled`](#vmetrics_enabled)                 |   `bool`   | `G/I`  | 在此基础设施节点上启用 VictoriaMetrics？ |
| [`vmetrics_clean`](#vmetrics_clean)                     |   `bool`   | `G/A`  | 初始化时清理 VictoriaMetrics 数据？  |
| [`vmetrics_port`](#vmetrics_port)                       |   `port`   |  `G`   | VictoriaMetrics 监听端口，默认为 8428 |
| [`vmetrics_scrape_interval`](#vmetrics_scrape_interval) | `interval` |  `G`   | 全局抓取间隔，默认为 10s              |
| [`vmetrics_scrape_timeout`](#vmetrics_scrape_timeout)   | `interval` |  `G`   | 全局抓取超时，默认为 8s               |
| [`vmetrics_options`](#vmetrics_options)                 |   `arg`    |  `G`   | VictoriaMetrics 额外命令行参数     |
| [`vlogs_enabled`](#vlogs_enabled)                       |   `bool`   | `G/I`  | 在此基础设施节点上启用 VictoriaLogs？   |
| [`vlogs_clean`](#vlogs_clean)                           |   `bool`   | `G/A`  | 初始化时清理 VictoriaLogs 数据？     |
| [`vlogs_port`](#vlogs_port)                             |   `port`   |  `G`   | VictoriaLogs 监听端口，默认为 9428  |
| [`vlogs_options`](#vlogs_options)                       |   `arg`    |  `G`   | VictoriaLogs 额外命令行参数        |
| [`vtraces_enabled`](#vtraces_enabled)                   |   `bool`   | `G/I`  | 在此基础设施节点上启用 VictoriaTraces？ |
| [`vtraces_clean`](#vtraces_clean)                       |   `bool`   | `G/A`  | 初始化时清理 VictoriaTraces 数据？   |
| [`vtraces_port`](#vtraces_port)                         |   `port`   |  `G`   | VictoriaTraces 监听端口，默认为 10428 |
| [`vtraces_options`](#vtraces_options)                   |   `arg`    |  `G`   | VictoriaTraces 额外命令行参数      |
| [`vmalert_enabled`](#vmalert_enabled)                   |   `bool`   | `G/I`  | 在此基础设施节点上启用 VMAlert？        |
| [`vmalert_port`](#vmalert_port)                         |   `port`   |  `G`   | VMAlert 监听端口，默认为 8880       |
| [`vmalert_options`](#vmalert_options)                   |   `arg`    |  `G`   | VMAlert 额外命令行参数             |
{.full-width}

[`PROMETHEUS`](#prometheus) 参数组用于配置 Alertmanager 与 Blackbox Exporter，提供告警管理和网络探测功能。

| 参数                                              |    类型    |   级别   | 说明                          |
|:------------------------------------------------|:--------:|:------:|:----------------------------|
| [`blackbox_enabled`](#blackbox_enabled)         |  `bool`  | `G/I`  | 在此基础设施节点上设置 blackbox_exporter？ |
| [`blackbox_port`](#blackbox_port)               |  `port`  |  `G`   | blackbox_exporter 监听端口，默认为 9115 |
| [`blackbox_options`](#blackbox_options)         |  `arg`   |  `G`   | blackbox_exporter 额外的命令行参数选项 |
| [`alertmanager_enabled`](#alertmanager_enabled) |  `bool`  | `G/I`  | 在此基础设施节点上设置 alertmanager？   |
| [`alertmanager_port`](#alertmanager_port)       |  `port`  |  `G`   | AlertManager 监听端口，默认为 9059  |
| [`alertmanager_options`](#alertmanager_options) |  `arg`   |  `G`   | alertmanager 额外的命令行参数选项     |
| [`exporter_metrics_path`](#exporter_metrics_path) |  `path`  |  `G`   | exporter 指标路径，默认为 /metrics  |
{.full-width}

[`GRAFANA`](#grafana) 参数组用于配置 Grafana 可视化平台，包括启用开关、端口、管理员凭据以及数据源配置。

| 参数                                              |     类型     |   级别   | 说明                         |
|:------------------------------------------------|:----------:|:------:|:---------------------------|
| [`grafana_enabled`](#grafana_enabled)           |   `bool`   | `G/I`  | 在此基础设施节点上启用 Grafana？       |
| [`grafana_port`](#grafana_port)                 |   `port`   |  `G`   | Grafana 监听端口，默认为 3000      |
| [`grafana_clean`](#grafana_clean)               |   `bool`   | `G/A`  | 初始化Grafana期间清除数据？          |
| [`grafana_admin_username`](#grafana_admin_username) | `username` |  `G`   | Grafana 管理员用户名，默认为 `admin` |
| [`grafana_admin_password`](#grafana_admin_password) | `password` |  `G`   | Grafana 管理员密码，默认为 `pigsty` |
| [`grafana_auth_proxy`](#grafana_auth_proxy)     |   `bool`   |  `G`   | 启用 Grafana 身份代理？           |
| [`grafana_pgurl`](#grafana_pgurl)               |   `url`    |  `G`   | 外部 PostgreSQL 数据库 URL（用于Grafana持久化） |
| [`grafana_view_password`](#grafana_view_password) | `password` |  `G`   | Grafana 元数据库 PG 数据源密码      |
{.full-width}


------------------------------

## `META`

这一小节指定了一套 Pigsty 部署的元数据：包括版本号，管理员节点 IP 地址，软件源镜像上游 [`区域`](#region)，默认语言，以及下载软件包时使用的 http(s) 代理。

```yaml
version: v4.0.0                   # pigsty 版本号
admin_ip: 10.10.10.10             # 管理节点IP地址
region: default                   # 上游镜像区域：default,china,europe
language: en                      # 默认语言: en 或 zh
proxy_env:                        # 全局HTTPS代理，用于下载、安装软件包。
  no_proxy: "localhost,127.0.0.1,10.0.0.0/8,192.168.0.0/16,*.pigsty,*.aliyun.com,mirrors.*,*.myqcloud.com,*.tsinghua.edu.cn"
  # http_proxy:  # set your proxy here: e.g http://user:pass@proxy.xxx.com
  # https_proxy: # set your proxy here: e.g http://user:pass@proxy.xxx.com
  # all_proxy:   # set your proxy here: e.g http://user:pass@proxy.xxx.com
```




### `version`

参数名称： `version`， 类型： `string`， 层次：`G`

Pigsty 版本号字符串，默认值为当前版本：`v4.0.0`。

Pigsty 内部会使用版本号进行功能控制与内容渲染，请勿随意修改此参数。

Pigsty 使用语义化版本号，版本号字符串通常以字符 `v` 开头，例如 `v4.0.0`。






### `admin_ip`

参数名称： `admin_ip`， 类型： `ip`， 层次：`G`

管理节点的 IP 地址，默认为占位符 IP 地址：`10.10.10.10`

由该参数指定的节点将被视为管理节点，通常指向安装 Pigsty 时的第一个节点，即中控节点。

默认值 `10.10.10.10` 是一个占位符，会在 [configure](/docs/setup/install#配置) 过程中被替换为实际的管理节点 IP 地址。

许多参数都会引用此参数，例如：

- [`infra_portal`](#infra_portal)
- [`repo_endpoint`](#repo_endpoint)
- [`repo_upstream`](#repo_upstream)
- [`dns_records`](#dns_records)
- [`node_default_etc_hosts`](/docs/node/param#node_default_etc_hosts)
- [`node_etc_hosts`](/docs/node/param#node_etc_hosts)

在这些参数中，字符串 `${admin_ip}` 会被替换为 `admin_ip` 的真实取值。使用这种机制，您可以为不同的节点指定不同的中控管理节点。





### `region`

参数名称： `region`， 类型： `enum`， 层次：`G`

上游镜像的区域，默认可选值为：`default`、 `china`、 `europe`，默认为： `default`

如果一个不同于 `default` 的区域被设置，且在 [`repo_upstream`](#repo_upstream) 中有对应的条目，将会使用该条目对应 `baseurl` 代替 `default` 中的 `baseurl`。

例如，如果您的区域被设置为 `china`，那么 Pigsty 会尝试使用中国地区的上游软件镜像站点以加速下载，如果某个上游软件仓库没有对应的中国地区镜像，那么会使用默认的上游镜像站点替代。
同时，在 [`repo_url_packages`](#repo_url_packages) 中定义的 URL 地址，也会进行从 `repo.pigsty.io` 到 `repo.pigsty.cc` 的替换，以使用国内的镜像源。






### `language`

参数名称： `language`， 类型： `enum`， 层次：`G`

默认语言设置，可选值为 `en`（英文） 或 `zh`（中文），默认为 `en`。

此参数会影响 Pigsty 生成的部分配置与内容的语言偏好，例如 Grafana 面板的初始语言设置等。

如果您是中国用户，建议将此参数设置为 `zh`，以获得更好的中文支持体验。




### `proxy_env`

参数名称： `proxy_env`， 类型： `dict`， 层次：`G`

下载包时使用的全局代理环境变量，默认值指定了 `no_proxy`，即不使用代理的地址列表：

```yaml
proxy_env:
  no_proxy: "localhost,127.0.0.1,10.0.0.0/8,192.168.0.0/16,*.pigsty,*.aliyun.com,mirrors.aliyuncs.com,mirrors.tuna.tsinghua.edu.cn,mirrors.zju.edu.cn"
  #http_proxy: 'http://username:password@proxy.address.com'
  #https_proxy: 'http://username:password@proxy.address.com'
  #all_proxy: 'http://username:password@proxy.address.com'
```

当您在中国大陆地区从互联网上游安装时，特定的软件包可能会被墙，您可以使用代理来解决这个问题。

请注意，如果使用了 Docker 模块，那么这里的代理服务器配置也会写入 Docker Daemon 配置文件中。

请注意，如果在 `./configure` 过程中指定了 `-x` 参数，那么当前环境中的代理配置信息将会被自动填入到生成的 `pigsty.yaml` 文件中。





------------------------------

## `CA`

Pigsty 使用自签名 CA 证书，用于支持高级安全特性，例如 HTTPS 访问、PostgreSQL SSL 连接等。

```yaml
ca_create: true                   # 如果 CA 不存在，是否创建？默认为 true
ca_cn: pigsty-ca                  # CA CN名称，固定为 pigsty-ca
cert_validity: 7300d              # 证书有效期，默认为 20 年
```


### `ca_create`

参数名称： `ca_create`， 类型： `bool`， 层次：`G`

如果 CA 不存在，是否创建？默认值为 `true`。

当设置为 `true` 时，如果 `files/pki/ca` 目录中不存在 CA 公私钥对，Pigsty 将会自动创建一个新的 CA。

如果您已经有了一对 CA 公私钥对，可以将其复制到 `files/pki/ca` 目录下：

- `files/pki/ca/ca.crt`：CA 公钥证书
- `files/pki/ca/ca.key`：CA 私钥文件

Pigsty 将会使用现有的 CA 公私钥对，而不是新建一个。如果 CA 不存在且此参数设置为 `false`，则会报错终止。

**请务必保留并备份好部署过程中新生成的 CA 私钥文件，这对于后续签发新证书至关重要。**

> 注意：Pigsty v3.x 使用的是 `ca_method` 参数（取值为 `create`/`recreate`/`copy`），v4.0 简化为布尔类型的 `ca_create`。





### `ca_cn`

参数名称： `ca_cn`， 类型： `string`， 层次：`G`

CA CN（Common Name）名称，固定为 `pigsty-ca`，不建议修改。

你可以使用以下命令来查看节点上的 Pigsty CA 证书详情：

```bash
openssl x509 -text -in /etc/pki/ca.crt
```





### `cert_validity`

参数名称： `cert_validity`， 类型： `interval`， 层次：`G`

签发证书的有效期，默认为 20 年，对绝大多数场景都足够了。默认值为： `7300d`

此参数影响由 Pigsty CA 签发的所有证书的有效期，包括：

- PostgreSQL 服务器证书
- Patroni API 证书
- etcd 服务器/客户端证书
- 其他内部服务证书

注意：Nginx 使用的 HTTPS 证书有效期由 [`nginx_cert_validity`](#nginx_cert_validity) 单独控制，因为现代浏览器对网站证书有效期有更严格的要求（最长 397 天）。







------------------------------

## `INFRA_ID`

基础设施身份标识与门户定义。

```yaml
#infra_seq: 1                     # 基础设施节点序号，必选身份参数
infra_portal:                     # 通过 Nginx 门户暴露的基础设施服务
  home : { domain: i.pigsty }     # 默认首页服务器定义
infra_data: /data/infra           # 基础设施默认数据目录
```



### `infra_seq`

参数名称： `infra_seq`， 类型： `int`， 层次：`I`

基础设施节点序号，必选身份参数，必须在基础设施节点上显式指定，所以不提供默认值。

此参数用于在多个基础设施节点的部署中唯一标识每个节点，通常使用从 1 开始的正整数。

示例配置：

```yaml
infra:
  hosts:
    10.10.10.10: { infra_seq: 1 }
    10.10.10.11: { infra_seq: 2 }
```




### `infra_portal`

参数名称： `infra_portal`， 类型： `dict`， 层次：`G`

通过 Nginx 门户暴露的基础设施服务列表。v4.0 的默认值非常简洁：

```yaml
infra_portal:
  home : { domain: i.pigsty }     # 默认首页服务器定义
```

Pigsty 会根据实际启用的组件自动配置相应的反向代理，用户通常只需要定义首页域名即可。

每条记录由一个 Key 与一个 Value 字典组成，`name` 作为键，代表组件名称，value 是一个可以配置以下参数的对象：

- `name`: **必填**，指定 Nginx 服务器的名称
  - 默认记录：home 是固定名称，请不要修改。
  - 作为 Nginx 配置文件名称的一部分，对应配置文件：`/etc/nginx/conf.d/<name>.conf`
  - 没有 domain 字段的 Nginx 服务器不会生成配置文件，但会被用作引用。
- `domain`: **可选**，当服务需要通过 Nginx 对外暴露时为**必填**字段，指定使用的域名
  - 在 Pigsty 自签名 Nginx HTTPS 证书中，域名将被添加到 Nginx SSL 证书的 SAN 字段
  - Pigsty 网页交叉引用将使用这里的默认域名
- `endpoint`: 通常作为 path 的替代，指定上游服务器地址。设置 endpoint 表示这是一个反向代理服务器
  - 配置中可以使用 `${admin_ip}` 作为占位符，在部署时会被动态替换为 [`admin_ip`](#admin_ip)
  - 默认反向代理服务器使用 [endpoint.conf](https://github.com/pgsty/pigsty/blob/main/roles/infra/templates/nginx/endpoint.conf) 作为配置模板
  - 反向代理服务器还可以配置 websocket 和 schema 参数
- `path`: 通常作为 endpoint 的替代，指定本地文件服务器路径。设置 path 表示这是一个本地 Web 服务器
  - 本地 Web 服务器使用 [path.conf](https://github.com/pgsty/pigsty/blob/main/roles/infra/templates/nginx/path.conf) 作为配置模板
  - 本地 Web 服务器还可以配置 index 参数，是否启用文件索引页
- `certbot`: Certbot 证书名称，如果配置，将使用 Certbot 申请证书
  - 如果多个服务器指定相同的 certbot，Pigsty 会合并证书申请，最终证书名称为此 certbot 的值
- `cert`: 证书文件路径，如果配置，将覆盖默认证书路径
- `key`: 证书密钥文件路径，如果配置，将覆盖默认证书密钥路径
- `websocket`: 是否启用 WebSocket 支持
  - 只有反向代理服务器可以配置此参数，如果启用将允许上游使用 WebSocket 连接
- `schema`: 上游服务器使用的协议，如果配置，将覆盖默认协议
  - 默认为 http，如果配置为 https 将强制使用 HTTPS 连接到上游服务器
- `index`: 是否启用文件索引页
  - 只有本地 Web 服务器可以配置此参数，如果启用将启用 autoindex 配置自动生成目录索引页
- `log`: Nginx 日志文件路径
  - 如果指定，访问日志将写入此文件，否则根据服务器类型使用默认日志文件
  - 反向代理服务器使用 `/var/log/nginx/<name>.log` 作为默认日志文件路径
  - 本地 Web 服务器使用默认 Access 日志
- `conf`: Nginx 配置文件路径
  - 显式指定使用的配置模板文件，位于 [roles/infra/templates/nginx](https://github.com/pgsty/pigsty/tree/main/roles/infra/templates/nginx) 或 [templates/nginx](https://github.com/pgsty/pigsty/tree/main/templates/nginx) 目录
  - 如果未指定此参数，将使用默认配置模板
- `config`: Nginx 配置代码块
  - 直接注入到 Nginx Server 配置块中的配置文本
- `enforce_https`: 将 HTTP 重定向到 HTTPS
  - 可以通过 nginx_sslmode: enforce 指定全局配置
  - 此配置不影响默认的 home 服务器，它将始终同时监听 80 和 443 端口以确保兼容性




### `infra_data`

参数名称： `infra_data`， 类型： `path`， 层次：`G`

基础设施数据目录，默认值为 `/data/infra`。

此目录用于存放基础设施组件的数据文件，包括：

- VictoriaMetrics 时序数据库数据
- VictoriaLogs 日志数据
- VictoriaTraces 追踪数据
- 其他基础设施组件的持久化数据

建议将此目录放置在独立的数据盘上，以便于管理和扩展。





------------------------------

## `REPO`


本节配置是关于本地软件仓库的。 Pigsty 默认会在基础设施节点上启用一个本地软件仓库（APT / YUM）。

在初始化过程中，Pigsty 会从互联网上游仓库（由 [`repo_upstream`](#repo_upstream) 指定）下载所有软件包及其依赖项（由 [`repo_packages`](#repo_packages) 指定）到 [`{{ nginx_home }}`](#nginx_home) / [`{{ repo_name }}`](#repo_name) （默认为 `/www/pigsty`），所有软件及其依赖的总大小约为 1GB 左右。

创建本地软件仓库时，如果仓库已存在（判断方式：仓库目录中有一个名为 `repo_complete` 的标记文件）Pigsty 将认为仓库已经创建完成，跳过软件下载阶段，直接使用构建好的仓库。

如果某些软件包的下载速度太慢，您可以通过使用 [`proxy_env`](#proxy_env) 配置项来设置下载代理来完成首次下载，或直接下载预打包的 [离线软件包](/docs/setup/offline)，离线软件包本质上就是在同样操作系统上构建好的本地软件源。


```yaml
repo_enabled: true                # 在此 Infra 节点上创建本地软件仓库？
repo_home: /www                   # 软件仓库主目录，默认为 /www
repo_name: pigsty                 # 软件仓库名称，默认为 pigsty
repo_endpoint: http://${admin_ip}:80 # 仓库访问端点
repo_remove: true                 # 移除现有上游仓库定义
repo_modules: infra,node,pgsql    # 启用的上游仓库模块
#repo_upstream: []                # 上游仓库定义（从操作系统变量继承）
#repo_packages: []                # 要下载的软件包（从操作系统变量继承）
#repo_extra_packages: []          # 额外要下载的软件包
repo_url_packages: []             # 通过 URL 下载的额外软件包
```




### `repo_enabled`

参数名称： `repo_enabled`， 类型： `bool`， 层次：`G/I`

是否在当前的基础设施节点上启用本地软件源？默认为： `true`，即所有 Infra 节点都会设置一个本地软件仓库。

如果您有多个基础设施节点，可以只保留 1～2 个节点作为软件仓库，其他节点可以通过设置此参数为 `false` 来避免重复软件下载构建。





### `repo_home`

参数名称： `repo_home`， 类型： `path`， 层次：`G`

本地软件仓库的家目录，默认为 Nginx 的根目录，也就是： `/www`。

这个目录实际上是指向 [`nginx_data`](#nginx_data) 的软链接，不建议修改此目录。如果修改，需要和 [`nginx_home`](#nginx_home) 保持一致。




### `repo_name`

参数名称： `repo_name`， 类型： `string`， 层次：`G`

本地仓库名称，默认为 `pigsty`，更改此仓库的名称是不明智的行为。

最终的仓库路径为 `{{ repo_home }}/{{ repo_name }}`，默认为 `/www/pigsty`。





### `repo_endpoint`

参数名称： `repo_endpoint`， 类型： `url`， 层次：`G`

其他节点访问此仓库时使用的端点，默认值为：`http://${admin_ip}:80`。

Pigsty 默认会在基础设施节点 80/443 端口启动 Nginx，对外提供本地软件源（静态文件）服务。

如果您修改了 [`nginx_port`](#nginx_port) 与 [`nginx_ssl_port`](#nginx_ssl_port)，或者使用了不同于中控节点的基础设施节点，请相应调整此参数。

如果您使用了域名，可以在 [`node_default_etc_hosts`](/docs/node/param#node_default_etc_hosts)、[`node_etc_hosts`](/docs/node/param#node_etc_hosts)、或者 [`dns_records`](#dns_records) 中添加解析。





### `repo_remove`

参数名称： `repo_remove`， 类型： `bool`， 层次：`G/A`

在构建本地软件源时，是否移除现有的上游仓库定义？默认值： `true`。

当启用此参数时，`/etc/yum.repos.d` 中所有已有仓库文件会被移动备份至 `/etc/yum.repos.d/backup`，在 Debian 系上是移除 `/etc/apt/sources.list` 和 `/etc/apt/sources.list.d`，将文件备份至 `/etc/apt/backup` 中。

因为操作系统已有的源内容不可控，使用 Pigsty 验证过的上游软件源可以提高从互联网下载软件包的成功率与速度。

但在一些特定情况下（例如您的操作系统是某种 EL/Deb 兼容版，许多软件包使用了自己的私有源），您可能需要保留现有的上游仓库定义，此时可以将此参数设置为 `false`。






### `repo_modules`

参数名称： `repo_modules`， 类型： `string`， 层次：`G/A`

哪些上游仓库模块会被添加到本地软件源中，默认值： `infra,node,pgsql`

当 Pigsty 尝试添加上游仓库时，会根据此参数的值来过滤 [`repo_upstream`](#repo_upstream) 中的条目，只有 `module` 字段与此参数值匹配的条目才会被添加到本地软件源中。

模块以逗号分隔，可用的模块列表请参考 `repo_upstream` 中的定义，常见模块包括：

- `local`: 本地 Pigsty 仓库
- `infra`: 基础设施软件包（Nginx、Docker 等）
- `node`: 操作系统基础软件包
- `pgsql`: PostgreSQL 相关软件包
- `extra`: 额外的 PostgreSQL 扩展
- `docker`: Docker 相关
- `redis`: Redis 相关
- `mongo`: MongoDB 相关
- `mysql`: MySQL 相关
- 等等...





### `repo_upstream`

参数名称： `repo_upstream`， 类型： `upstream[]`， 层次：`G`

构建本地软件源时，从哪里下载上游软件包？本参数没有默认值，如果用户不在配置文件中显式指定，则会从根据当前节点的操作系统族，从定义于 [`roles/node_id/vars`](https://github.com/pgsty/pigsty/blob/main/roles/node_id/vars/) 中的 `repo_upstream_default` 变量中加载获取。

Pigsty 为不同的操作系统版本（EL8/9/10, Debian 11/12/13, Ubuntu 22/24）预置了完整的上游仓库定义，包括：

- 操作系统基础仓库（BaseOS、AppStream、EPEL 等）
- PostgreSQL 官方 PGDG 仓库
- Pigsty 扩展仓库
- 各种第三方软件仓库（Docker、Nginx、Grafana 等）

每个上游仓库定义包含以下字段：

```yaml
- name: pigsty-pgsql              # 仓库名称
  description: 'Pigsty PGSQL'     # 仓库描述
  module: pgsql                   # 所属模块
  releases: [8,9,10]              # 支持的操作系统版本
  arch: [x86_64, aarch64]         # 支持的 CPU 架构
  baseurl:                        # 仓库 URL，按区域配置
    default: 'https://repo.pigsty.io/yum/pgsql/el$releasever.$basearch'
    china: 'https://repo.pigsty.cc/yum/pgsql/el$releasever.$basearch'
```

用户通常不需要修改此参数，除非有特殊的仓库需求。详细的仓库定义请参考 [`roles/node_id/vars/`](https://github.com/pgsty/pigsty/blob/main/roles/node_id/vars/) 目录下对应操作系统的配置文件。




### `repo_packages`

参数名称： `repo_packages`， 类型： `string[]`， 层次：`G`

字符串数组类型，每一行都是 **由空格分隔** 的软件包列表字符串，指定将要使用 `repotrack` 或 `apt download` 下载到本地的软件包（及其依赖）。

本参数没有默认值，即默认值为未定义状态。如果该参数没有被显式定义，那么 Pigsty 会从 [`roles/node_id/vars`](https://github.com/pgsty/pigsty/blob/main/roles/node_id/vars/) 中定义的 `repo_packages_default` 变量中加载获取默认值，默认值为：

```yaml
[ node-bootstrap, infra-package, infra-addons, node-package1, node-package2, pgsql-utility, extra-modules ]
```

该参数中的每个元素，都会在上述文件中定义的 `package_map` 中，根据特定的操作系统发行版大版本进行翻译。例如在 EL 系统上会翻译为：

```yaml
node-bootstrap:          "ansible python3 python3-pip python3-virtualenv python3-requests python3-jmespath python3-cryptography dnf-utils modulemd-tools createrepo_c sshpass"
infra-package:           "nginx dnsmasq etcd haproxy vip-manager node_exporter keepalived_exporter pg_exporter pgbackrest_exporter redis_exporter redis minio mcli pig"
infra-addons:            "grafana grafana-plugins grafana-victoriametrics-ds grafana-victorialogs-ds victoria-metrics victoria-logs victoria-traces vlogscli vmutils vector alertmanager"
```

作为一个使用约定，`repo_packages` 中通常包括了那些与 PostgreSQL 大版本号无关的软件包（例如 Infra，Node 和 PGDG Common 等部分），而 PostgreSQL 大版本相关的软件包（内核，扩展），通常在 `repo_extra_packages` 中指定，方便用户切换 PG 大版本。







### `repo_extra_packages`

参数名称： `repo_extra_packages`， 类型： `string[]`， 层次：`G/C/I`

用于在不修改 [`repo_packages`](#repo_packages) 的基础上，指定额外需要下载的软件包（通常是 PG 大版本相关的软件包），默认值为空列表。

如果该参数没有被显式定义，那么 Pigsty 会从 [`roles/node_id/vars`](https://github.com/pgsty/pigsty/blob/main/roles/node_id/vars/) 中定义的 `repo_extra_packages_default` 变量中加载获取默认值，默认值为：

```yaml
[ pgsql-main ]
```

该参数中的元素会进行包名翻译，其中 `$v` 会被替换为 [`pg_version`](/docs/pgsql/param#pg_version)，即当前 PG 大版本号（默认为 `18`）。

这里的 `pgsql-main` 在 EL 系统上会翻译为：

```yaml
postgresql$v postgresql$v-server postgresql$v-libs postgresql$v-contrib postgresql$v-plperl postgresql$v-plpython3 postgresql$v-pltcl postgresql$v-llvmjit pg_repack_$v* wal2json_$v* pgvector_$v*
```

通常用户可以在这里指定 PostgreSQL 大版本相关的软件包，而不影响 `repo_packages` 中定义的其他 PG 大版本无关的软件包。






### `repo_url_packages`

参数名称： `repo_url_packages`， 类型： `object[] | string[]`， 层次：`G`

直接使用 URL 从互联网上下载的软件包，默认为空数组： `[]`

您可以直接在本参数中使用 URL 字符串作为数组元素，也可以使用对象结构，显式指定 URL 与文件名称。

请注意，本参数会受到 [`region`](#region) 变量的影响，如果您在中国大陆地区，Pigsty 会自动将 URL 替换为国内镜像站点，即将 URL 里的 `repo.pigsty.io` 替换为 `repo.pigsty.cc`。





------------------------------

## `INFRA_PACKAGE`

这些软件包只会在 INFRA 节点上安装，包括普通的 RPM/DEB 软件包，以及 PIP 软件包。



### `infra_packages`

参数名称： `infra_packages`， 类型： `string[]`， 层次：`G`

字符串数组类型，每一行都是 **由空格分隔** 的软件包列表字符串，指定将要在 Infra 节点上安装的软件包列表。

本参数没有默认值，即默认值为未定义状态。如果用户不在配置文件中显式指定本参数，则 Pigsty 会从根据当前节点的操作系统族，从定义于 [`roles/node_id/vars`](https://github.com/pgsty/pigsty/blob/main/roles/node_id/vars/) 中的 `infra_packages_default` 变量中加载获取默认值。

v4.0 默认值（EL系操作系统）：

```yaml
infra_packages_default:
  - grafana,grafana-plugins,grafana-victorialogs-ds,grafana-victoriametrics-ds,victoria-metrics,victoria-logs,victoria-traces,vmutils,vlogscli,alertmanager
  - node_exporter,blackbox_exporter,nginx_exporter,pg_exporter,pev2,nginx,dnsmasq,ansible,etcd,python3-requests,redis,mcli,restic,certbot,python3-certbot-nginx
```

默认值（Debian/Ubuntu）：

```yaml
infra_packages_default:
  - grafana,grafana-plugins,grafana-victorialogs-ds,grafana-victoriametrics-ds,victoria-metrics,victoria-logs,victoria-traces,vmutils,vlogscli,alertmanager
  - node-exporter,blackbox-exporter,nginx-exporter,pg-exporter,pev2,nginx,dnsmasq,ansible,etcd,python3-requests,redis,mcli,restic,certbot,python3-certbot-nginx
```

> 注意：v4.0 使用 VictoriaMetrics 套件替代了 Prometheus 和 Loki，因此软件包列表与 v3.x 有显著差异。




### `infra_packages_pip`

参数名称： `infra_packages_pip`， 类型： `string`， 层次：`G`

Infra 节点上要使用 `pip` 额外安装的软件包，包名使用逗号分隔，默认值是空字符串，即不安装任何额外的 python 包。

示例：

```yaml
infra_packages_pip: 'requests,boto3,awscli'
```







------------------------------

## `NGINX`

Pigsty 会通过 Nginx 代理所有的 Web 服务访问：Home Page、Grafana、VictoriaMetrics 等等。
以及其他可选的工具，如 PGWeb、Jupyter Lab、Pgadmin、Bytebase 等等，还有一些静态资源和报告，如 `pev`、`schemaspy` 和 `pgbadger`。

最重要的是，Nginx 还作为本地软件仓库（Yum/Apt）的 Web 服务器，用于存储和分发 Pigsty 的软件包。

```yaml
nginx_enabled: true               # 在此 Infra 节点上启用 Nginx？
nginx_clean: false                # 初始化时清理现有 Nginx 配置？
nginx_exporter_enabled: true      # 启用 nginx_exporter？
nginx_exporter_port: 9113         # nginx_exporter 监听端口
nginx_sslmode: enable             # SSL 模式：disable,enable,enforce
nginx_cert_validity: 397d         # 自签名证书有效期
nginx_home: /www                  # Nginx 内容目录（软链接）
nginx_data: /data/nginx           # Nginx 实际数据目录
nginx_users: {}                   # 基础认证用户字典
nginx_port: 80                    # HTTP 端口
nginx_ssl_port: 443               # HTTPS 端口
certbot_sign: false               # 使用 certbot 签署证书？
certbot_email: your@email.com     # certbot 邮箱
certbot_options: ''               # certbot 额外选项
```



### `nginx_enabled`

参数名称： `nginx_enabled`， 类型： `bool`， 层次：`G/I`

是否在当前的 Infra 节点上启用 Nginx？默认值为： `true`。

Nginx 是 Pigsty 基础设施的核心组件，负责：
- 提供本地软件仓库服务
- 反向代理 Grafana、VictoriaMetrics 等 Web 服务
- 托管静态文件和报告





### `nginx_clean`

参数名称： `nginx_clean`， 类型： `bool`， 层次：`G/A`

初始化时是否清理现有的 Nginx 配置？默认值为： `false`。

当设置为 `true` 时，在 Nginx 初始化过程中会删除 `/etc/nginx/conf.d/` 下的所有现有配置文件，确保一个干净的起点。

如果您是首次部署或希望完全重建 Nginx 配置，可以将此参数设置为 `true`。




### `nginx_exporter_enabled`

参数名称： `nginx_exporter_enabled`， 类型： `bool`， 层次：`G/I`

在此基础设施节点上启用 nginx_exporter ？默认值为： `true`。

如果禁用此选项，还会一并禁用 `/nginx` 健康检查 stub，当您安装使用的 Nginx 版本不支持此功能时可以考虑关闭此开关。




### `nginx_exporter_port`

参数名称： `nginx_exporter_port`， 类型： `port`， 层次：`G`

nginx_exporter 监听端口，默认值为 `9113`。

nginx_exporter 用于收集 Nginx 的运行指标，供 VictoriaMetrics 抓取监控。





### `nginx_sslmode`

参数名称： `nginx_sslmode`， 类型： `enum`， 层次：`G`

Nginx 的 SSL 工作模式？有三种选择：`disable` , `enable` , `enforce`， 默认值为 `enable`，即启用 SSL，但不强制使用。

* `disable`：只监听 [`nginx_port`](#nginx_port) 指定的端口服务 HTTP 请求。
* `enable`：同时会监听 [`nginx_ssl_port`](#nginx_ssl_port) 指定的端口服务 HTTPS 请求。
* `enforce`：所有链接都会被渲染为默认使用 `https://`
  * 同时会将 [`infra_portal`](#infra_portal) 中非默认服务器的 80 端口重定向到 443 端口




### `nginx_cert_validity`

参数名称： `nginx_cert_validity`， 类型： `duration`， 层次：`G`

Nginx 自签名证书的有效期，默认值为 `397d`（约13个月）。

现代浏览器要求网站证书的有效期最多为 397 天，因此这是默认值。不建议设置更长的有效期，否则浏览器可能会拒绝信任该证书。




### `nginx_home`

参数名称： `nginx_home`， 类型： `path`， 层次：`G`

Nginx 服务器静态文件目录，默认为： `/www`

这是一个软链接，实际指向 [`nginx_data`](#nginx_data) 目录。此目录包含静态资源和软件仓库文件。

最好不要随意修改此参数，修改时需要与 [`repo_home`](#repo_home) 参数保持一致。




### `nginx_data`

参数名称： `nginx_data`， 类型： `path`， 层次：`G`

Nginx 实际数据目录，默认为 `/data/nginx`。

这是 Nginx 静态文件的实际存储位置，[`nginx_home`](#nginx_home) 是指向此目录的软链接。

建议将此目录放置在数据盘上，以便于管理大量的软件包文件。




### `nginx_users`

参数名称： `nginx_users`， 类型： `dict`， 层次：`G`

Nginx 基础认证（Basic Auth）用户字典，默认为空字典 `{}`。

格式为 `{ username: password }` 的键值对，例如：

```yaml
nginx_users:
  admin: pigsty
  viewer: readonly
```

这些用户可用于保护某些需要认证的 Nginx 端点。




### `nginx_port`

参数名称： `nginx_port`， 类型： `port`， 层次：`G`

Nginx 默认监听的端口（提供 HTTP 服务），默认为 `80` 端口，最好不要修改这个参数。

当您的服务器 80 端口被占用时，可以考虑修改此参数，但需要同时修改 [`repo_endpoint`](#repo_endpoint) 并确保相关节点能够通过新的端口访问本地软件仓库。






### `nginx_ssl_port`

参数名称： `nginx_ssl_port`， 类型： `port`， 层次：`G`

Nginx SSL 默认监听的端口，默认为 `443`，最好不要修改这个参数。




### `certbot_sign`

参数名称： `certbot_sign`， 类型： `bool`， 层次：`G/A`

是否在安装过程中使用 certbot 签署 Nginx 证书？默认值为 `false`。

当设置为 `true` 时，Pigsty 会在执行 `infra.yml` 和 `deploy.yml` 剧本（`nginx` 角色）期间使用 certbot 自动从 Let's Encrypt 申请免费 SSL 证书。

在 [`infra_portal`](#infra_portal) 定义的域名中，如果定义了 `certbot` 参数，Pigsty 将使用 certbot 为 `domain` 域名申请证书，证书名称将是 `certbot` 参数的值。如果多个服务器/域名指定了相同的 `certbot` 参数，Pigsty 会合并并为这些域名申请一个证书，使用 `certbot` 参数的值作为证书名称。

启用此选项需要：

- 当前节点可以通过公共域名访问，并且 DNS 解析已正确指向当前节点的公网 IP
- 当前节点可以访问 Let's Encrypt API 接口

此选项默认禁用，您可以在安装后手动执行 `make cert` 命令来手动执行，它实际上调用渲染好的 `/etc/nginx/sign-cert` 脚本，使用 certbot 更新或申请证书。




### `certbot_email`

参数名称： `certbot_email`， 类型： `string`， 层次：`G/A`

用于接收证书过期提醒邮件的电子邮件地址，默认值为 `your@email.com`。

当 `certbot_sign` 设置为 `true` 时，建议提供此参数。Let's Encrypt 会在证书即将过期时向此邮箱发送提醒邮件。




### `certbot_options`

参数名称： `certbot_options`， 类型： `string`， 层次：`G/A`

传递给 certbot 的额外配置参数，默认值为空字符串。

您可以通过此参数向 certbot 传递额外的命令行选项，例如 `--dry-run`，则 certbot 不会实际申请证书，而是进行预览和测试。





------------------------------

## `DNS`

Pigsty 默认会在 Infra 节点上启用 DNSMASQ 服务，用于解析一些辅助域名，例如 `i.pigsty`、`m.pigsty`、`api.pigsty` 等等，以及可选 MinIO 的 `sss.pigsty`。

解析记录会记录在 Infra 节点的 `/etc/hosts.d/default` 文件中。 要使用这个 DNS 服务器，您必须将 `nameserver <ip>` 添加到 `/etc/resolv.conf` 中，[`node_dns_servers`](/docs/node/param#node_dns_servers) 参数可以解决这个问题。

```yaml
dns_enabled: true                 # 在此 Infra 节点上设置 dnsmasq？
dns_port: 53                      # DNS 服务器监听端口
dns_records:                      # 动态 DNS 记录
  - "${admin_ip} i.pigsty"
  - "${admin_ip} m.pigsty supa.pigsty api.pigsty adm.pigsty cli.pigsty ddl.pigsty"
```



### `dns_enabled`

参数名称： `dns_enabled`， 类型： `bool`， 层次：`G/I`

是否在这个 Infra 节点上启用 DNSMASQ 服务？默认值为： `true`。

如果你不想使用默认的 DNS 服务器（比如你已经有了外部的 DNS 服务器，或者您的供应商不允许您使用 DNS 服务器）可以将此值设置为 `false` 来禁用它。
并使用 [`node_default_etc_hosts`](/docs/node/param#node_default_etc_hosts) 和 [`node_etc_hosts`](/docs/node/param#node_etc_hosts) 静态解析记录代替。




### `dns_port`

参数名称： `dns_port`， 类型： `port`， 层次：`G`

DNSMASQ 的默认监听端口，默认是 `53`，不建议修改 DNS 服务默认端口。





### `dns_records`

参数名称： `dns_records`， 类型： `string[]`， 层次：`G`

由 dnsmasq 负责解析的动态 DNS 记录，一般用于将一些辅助域名解析到管理节点。这些记录会被写入到基础设施节点的 `/etc/hosts.d/default` 文件中。

v4.0 默认值：

```yaml
dns_records:
  - "${admin_ip} i.pigsty"
  - "${admin_ip} m.pigsty supa.pigsty api.pigsty adm.pigsty cli.pigsty ddl.pigsty"
```

这里使用 `${admin_ip}` 占位符，在部署时会被替换为实际的 [`admin_ip`](#admin_ip) 值。

常见的域名用途：

- `i.pigsty`：Pigsty 首页
- `m.pigsty`：VictoriaMetrics Web UI
- `api.pigsty`：API 服务
- `adm.pigsty`：管理服务
- 其他根据实际部署需求自定义



------------------------------

## `VICTORIA`

Pigsty v4.0 使用 VictoriaMetrics 套件替代 Prometheus 和 Loki，提供更优秀的可观测性解决方案：

- **VictoriaMetrics**：替代 Prometheus，作为时序数据库存储监控指标
- **VictoriaLogs**：替代 Loki，作为日志聚合存储
- **VictoriaTraces**：分布式追踪存储
- **VMAlert**：替代 Prometheus Alerting，进行告警规则评估

```yaml
vmetrics_enabled: true            # 启用 VictoriaMetrics？
vmetrics_clean: false             # 初始化时清理数据？
vmetrics_port: 8428               # 监听端口
vmetrics_scrape_interval: 10s     # 全局抓取间隔
vmetrics_scrape_timeout: 8s       # 全局抓取超时
vmetrics_options: >-
  -retentionPeriod=15d
  -promscrape.fileSDCheckInterval=5s
vlogs_enabled: true               # 启用 VictoriaLogs？
vlogs_clean: false                # 初始化时清理数据？
vlogs_port: 9428                  # 监听端口
vlogs_options: >-
  -retentionPeriod=15d
  -retention.maxDiskSpaceUsageBytes=50GiB
  -insert.maxLineSizeBytes=1MB
  -search.maxQueryDuration=120s
vtraces_enabled: true             # 启用 VictoriaTraces？
vtraces_clean: false              # 初始化时清理数据？
vtraces_port: 10428               # 监听端口
vtraces_options: >-
  -retentionPeriod=15d
  -retention.maxDiskSpaceUsageBytes=50GiB
vmalert_enabled: true             # 启用 VMAlert？
vmalert_port: 8880                # 监听端口
vmalert_options: ''               # 额外命令行参数
```


### `vmetrics_enabled`

参数名称： `vmetrics_enabled`， 类型： `bool`， 层次：`G/I`

是否在当前 Infra 节点上启用 VictoriaMetrics？默认值为 `true`。

VictoriaMetrics 是 Pigsty v4.0 的核心监控组件，替代 Prometheus 作为时序数据库，负责：

- 从各个 Exporter 抓取监控指标
- 存储时序数据
- 提供 PromQL 兼容的查询接口
- 支持 Grafana 数据源


### `vmetrics_clean`

参数名称： `vmetrics_clean`， 类型： `bool`， 层次：`G/A`

初始化 VictoriaMetrics 时是否清理现有数据？默认值为 `false`。

当设置为 `true` 时，在初始化过程中会删除已有的时序数据。谨慎使用此选项，除非您确定要重建监控数据。


### `vmetrics_port`

参数名称： `vmetrics_port`， 类型： `port`， 层次：`G`

VictoriaMetrics 监听端口，默认值为 `8428`。

此端口用于：
- HTTP API 访问
- Web UI 访问
- Prometheus 兼容的远程写入/读取
- Grafana 数据源连接


### `vmetrics_scrape_interval`

参数名称： `vmetrics_scrape_interval`， 类型： `interval`， 层次：`G`

VictoriaMetrics 全局指标抓取周期，默认值为 `10s`。

在生产环境，10秒 - 30秒是一个较为合适的抓取周期。如果您需要更精细的监控数据粒度，可以调整此参数，但会增加存储和 CPU 开销。


### `vmetrics_scrape_timeout`

参数名称： `vmetrics_scrape_timeout`， 类型： `interval`， 层次：`G`

VictoriaMetrics 全局抓取超时，默认为 `8s`。

设置抓取超时可以有效避免监控系统查询导致的雪崩，设置原则是本参数必须小于并接近 [`vmetrics_scrape_interval`](#vmetrics_scrape_interval)，确保每次抓取时长不超过抓取周期。


### `vmetrics_options`

参数名称： `vmetrics_options`， 类型： `arg`， 层次：`G`

VictoriaMetrics 的额外命令行参数，默认值：

```yaml
vmetrics_options: >-
  -retentionPeriod=15d
  -promscrape.fileSDCheckInterval=5s
```

常用参数说明：

- `-retentionPeriod=15d`：数据保留期限，默认 15 天
- `-promscrape.fileSDCheckInterval=5s`：文件服务发现刷新间隔

您可以根据需要添加其他 VictoriaMetrics 支持的参数。


### `vlogs_enabled`

参数名称： `vlogs_enabled`， 类型： `bool`， 层次：`G/I`

是否在当前 Infra 节点上启用 VictoriaLogs？默认值为 `true`。

VictoriaLogs 替代 Loki 作为日志聚合存储，负责：

- 接收来自 Vector 的日志数据
- 存储和索引日志
- 提供日志查询接口
- 支持 Grafana VictoriaLogs 数据源


### `vlogs_clean`

参数名称： `vlogs_clean`， 类型： `bool`， 层次：`G/A`

初始化 VictoriaLogs 时是否清理现有数据？默认值为 `false`。


### `vlogs_port`

参数名称： `vlogs_port`， 类型： `port`， 层次：`G`

VictoriaLogs 监听端口，默认值为 `9428`。


### `vlogs_options`

参数名称： `vlogs_options`， 类型： `arg`， 层次：`G`

VictoriaLogs 的额外命令行参数，默认值：

```yaml
vlogs_options: >-
  -retentionPeriod=15d
  -retention.maxDiskSpaceUsageBytes=50GiB
  -insert.maxLineSizeBytes=1MB
  -search.maxQueryDuration=120s
```

常用参数说明：

- `-retentionPeriod=15d`：日志保留期限，默认 15 天
- `-retention.maxDiskSpaceUsageBytes=50GiB`：最大磁盘使用量
- `-insert.maxLineSizeBytes=1MB`：单行日志最大大小
- `-search.maxQueryDuration=120s`：查询最大执行时间


### `vtraces_enabled`

参数名称： `vtraces_enabled`， 类型： `bool`， 层次：`G/I`

是否在当前 Infra 节点上启用 VictoriaTraces？默认值为 `true`。

VictoriaTraces 用于分布式追踪数据的存储和查询，支持 Jaeger、Zipkin 等追踪协议。


### `vtraces_clean`

参数名称： `vtraces_clean`， 类型： `bool`， 层次：`G/A`

初始化 VictoriaTraces 时是否清理现有数据？默认值为 `false`。


### `vtraces_port`

参数名称： `vtraces_port`， 类型： `port`， 层次：`G`

VictoriaTraces 监听端口，默认值为 `10428`。


### `vtraces_options`

参数名称： `vtraces_options`， 类型： `arg`， 层次：`G`

VictoriaTraces 的额外命令行参数，默认值：

```yaml
vtraces_options: >-
  -retentionPeriod=15d
  -retention.maxDiskSpaceUsageBytes=50GiB
```


### `vmalert_enabled`

参数名称： `vmalert_enabled`， 类型： `bool`， 层次：`G/I`

是否在当前 Infra 节点上启用 VMAlert？默认值为 `true`。

VMAlert 负责告警规则评估，替代 Prometheus Alerting 功能，与 Alertmanager 配合使用。


### `vmalert_port`

参数名称： `vmalert_port`， 类型： `port`， 层次：`G`

VMAlert 监听端口，默认值为 `8880`。


### `vmalert_options`

参数名称： `vmalert_options`， 类型： `arg`， 层次：`G`

VMAlert 的额外命令行参数，默认值为空字符串。





------------------------------

## `PROMETHEUS`

此部分现在主要包含 Blackbox Exporter 和 Alertmanager 的配置。

> 注意：Pigsty v4.0 使用 VictoriaMetrics 替代 Prometheus，原有的 `prometheus_*` 和 `pushgateway_*` 参数已移至 [`VICTORIA`](#victoria) 部分。

```yaml
blackbox_enabled: true            # 启用 blackbox_exporter？
blackbox_port: 9115               # blackbox_exporter 监听端口
blackbox_options: ''              # 额外命令行参数
alertmanager_enabled: true        # 启用 alertmanager？
alertmanager_port: 9059           # alertmanager 监听端口
alertmanager_options: ''          # 额外命令行参数
exporter_metrics_path: /metrics   # exporter 指标路径
```


### `blackbox_enabled`

参数名称： `blackbox_enabled`， 类型： `bool`， 层次：`G/I`

是否在当前 Infra 节点上启用 BlackboxExporter？默认值为 `true`。

BlackboxExporter 会向节点 IP 地址、VIP 地址、PostgreSQL VIP 地址发送 ICMP 报文测试网络连通性，还可以进行 HTTP、TCP、DNS 等探测。


### `blackbox_port`

参数名称： `blackbox_port`， 类型： `port`， 层次：`G`

Blackbox Exporter 监听端口，默认值为 `9115`。


### `blackbox_options`

参数名称： `blackbox_options`， 类型： `arg`， 层次：`G`

BlackboxExporter 的额外命令行参数，默认值：空字符串。



### `alertmanager_enabled`

参数名称： `alertmanager_enabled`， 类型： `bool`， 层次：`G/I`

是否在当前 Infra 节点上启用 AlertManager？默认值为 `true`。

AlertManager 负责接收来自 VMAlert 的告警通知，并进行告警分组、抑制、静默、路由等处理。


### `alertmanager_port`

参数名称： `alertmanager_port`， 类型： `port`， 层次：`G`

AlertManager 监听端口，默认值为 `9059`。

如果您修改了此端口，请确保相应更新 [`infra_portal`](#infra_portal) 中 alertmanager 条目的 `endpoint` 配置（如果有定义的话）。


### `alertmanager_options`

参数名称： `alertmanager_options`， 类型： `arg`， 层次：`G`

AlertManager 的额外命令行参数，默认值：空字符串。


### `exporter_metrics_path`

参数名称： `exporter_metrics_path`， 类型： `path`， 层次：`G`

监控 exporter 暴露指标的 HTTP 端点路径，默认为： `/metrics`，不建议修改此参数。

此参数定义了所有 Exporter 暴露监控指标的标准路径。





------------------------------

## `GRAFANA`

Pigsty 使用 Grafana 作为监控系统前端。它也可以作为数据分析与可视化平台，或者用于低代码数据应用开发，制作数据应用原型等目的。


```yaml
grafana_enabled: true             # 启用 Grafana？
grafana_port: 3000                # Grafana 监听端口
grafana_clean: false              # 初始化时清理数据？
grafana_admin_username: admin     # 管理员用户名
grafana_admin_password: pigsty    # 管理员密码
grafana_auth_proxy: false         # 启用身份代理？
grafana_pgurl: ''                 # 外部 PostgreSQL URL
grafana_view_password: DBUser.Viewer  # PG 数据源密码
```



### `grafana_enabled`

参数名称： `grafana_enabled`， 类型： `bool`， 层次：`G/I`

是否在 Infra 节点上启用 Grafana？默认值为： `true`，即所有基础设施节点默认都会安装启用 Grafana。




### `grafana_port`

参数名称： `grafana_port`， 类型： `port`， 层次：`G`

Grafana 监听端口，默认值为 `3000`。

如果您需要直接访问 Grafana（不通过 Nginx 反向代理），可以使用此端口。



### `grafana_clean`

参数名称： `grafana_clean`， 类型： `bool`， 层次：`G/A`

是否在初始化 Grafana 时一并清理其数据文件？默认为：`false`。

如果设置为 `true`，初始化 Grafana 时会移除 `/var/lib/grafana/grafana.db`，确保 Grafana 是一个全新安装。

如果您希望保留现有的 Grafana 配置（如仪表盘、用户、数据源等），请将此参数保留为 `false`。





### `grafana_admin_username`

参数名称： `grafana_admin_username`， 类型： `username`， 层次：`G`

Grafana 管理员用户名，默认为 `admin`。





### `grafana_admin_password`

参数名称： `grafana_admin_password`， 类型： `password`， 层次：`G`

Grafana 管理员密码，默认为 `pigsty`。

> **重要提示：请务必在生产部署中修改此密码参数！**




### `grafana_auth_proxy`

参数名称： `grafana_auth_proxy`， 类型： `bool`， 层次：`G`

是否启用 Grafana 身份代理？默认为 `false`。

当启用时，Grafana 会信任反向代理（Nginx）传递的用户身份信息，实现单点登录（SSO）功能。

这通常用于与外部身份认证系统集成的场景。



### `grafana_pgurl`

参数名称： `grafana_pgurl`， 类型： `url`， 层次：`G`

外部 PostgreSQL 数据库 URL，用于 Grafana 持久化存储。默认为空字符串。

如果指定，Grafana 将使用此 PostgreSQL 数据库替代默认的 SQLite 数据库存储其配置数据。

格式示例：`postgres://grafana:password@pg-meta:5432/grafana?sslmode=disable`

这对于需要 Grafana 高可用部署或数据持久化的场景非常有用。



### `grafana_view_password`

参数名称： `grafana_view_password`， 类型： `password`， 层次：`G`

Grafana 元数据库 PG 数据源使用的只读用户密码，默认为 `DBUser.Viewer`。

此密码用于 Grafana 连接 PostgreSQL CMDB 数据源，以只读方式查询元数据。

