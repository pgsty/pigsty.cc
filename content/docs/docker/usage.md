---
title: 使用方法
weight: 4210
description: Docker 模块快速上手，安装，卸载，下载，仓库，镜像，代理，拉取，关于 Docker 你需要知道的内容。
icon: fa-solid fa-bell-concierge
module: [DOCKER]
categories: [参考]
---


Pigsty 内置了 [**Docker**](https://www.docker.com/) 支持，您可以用它来快速部署容器化的应用软件。


--------

## 上手

Docker 是一个 **可选模块**，且在 Pigsty 的大部分配置模板中，Docker **并非默认启用**。因此，用户需要显式地 **下载** 并 **配置** 才能在 Pigsty 中使用 Docker。

例如，在默认使用的 [`meta`](/docs/conf/meta) 模板中，Docker 默认是不会下载安装的。不过在 [`rich`](/docs/conf/rich) 单节点模板中，则会下载并安装 Docker。

这两个配置的关键区别就在于这两个参数：[`repo_modules`](/docs/infra/param#repo_modules) 与 [`repo_packages`](/docs/infra/param#repo_packages)。

```yaml
repo_modules: infra,node,pgsql,docker  # <--- 启用 Docker 仓库
repo_packages: 
  - node-bootstrap, infra-package, infra-addons, node-package1, node-package2, pgsql-common, docker   # <--- 下载 Docker
```

Docker 下载完之后，您需要在待安装 Docker 的节点上配置 [**`docker_enabled`**](param#docker_enabled): `true` 标记，并按需配置 [**其他参数**](param)。

```yaml
infra:
  hosts:
    10.10.10.10: { infra_seq: 1 ,nodename: infra-1 }
    10.10.10.11: { infra_seq: 2 ,nodename: infra-2 }
  vars:
    docker_enabled: true  # 在这个分组上安装 Docker ！
```

最后，使用 您可以使用 [`docker.yml`](playbook#dockeryml) 剧本将其安装到节点上：

```bash
./docker.yml -l infra    # 在 infra 分组上安装 Docker
```



--------

## 安装

如果您只是临时性的希望在某些节点上，直接从互联网安装 Docker，那么可以考虑使用以下命令：

```bash
./node.yml -e '{"node_repo_modules":"node,docker","node_packages":["docker-ce,docker-compose-plugin"]}' -t node_repo,node_pkg -l <select_group_ip>
```

这条命令会在目标节点上，首先启用 `node,docker` 两个模块对应的上游软件源，然后安装 `docker-ce` 与 `docker-compose-plugin` 两个软件包（EL/Debian同名）。

如果您希望的是在 Pigsty 初始化的时候就自动下载好 Docker 相关软件包，请参考下面的说明。




--------

## 卸载

因为过于简单，Pigsty 不提供 Docker 模块的卸载剧本，你可以直接使用 Ansible 指令移除 Docker

```bash
ansible minio -m package -b -a 'name=docker-ce state=absent'  # 卸载 docker
```

这条命令会在目标节点上，首先启用 `node,docker` 两个模块对应的上游软件源，然后安装 `docker-ce` 与 `docker-compose-plugin` 两个软件包（EL/Debian同名）。

如果您希望的是在 Pigsty 初始化的时候就自动下载好 Docker 相关软件包，请参考下面的说明。






--------

## 下载

想要在 Pigsty 安装过程中下载 Docker，在 [**配置清单**](/docs/setup/config#配置清单) 中修改参数 [`repo_modules`](/docs/infra/param#repo_modules) 启用 Docker 软件仓库，
然后在 [`repo_packages`](/docs/infra/param#repo_packages) 或 [`repo_extra_packages`](/docs/infra/param#repo_extra_packages) 参数中指定下载 Docker 软件包。

```yaml
repo_modules: infra,node,pgsql,docker  # <--- 启用 Docker 仓库
repo_packages: 
  - node-bootstrap, infra-package, infra-addons, node-package1, node-package2, pgsql-common, docker   # <--- 下载 Docker
repo_extra_packages:
  - pgsql-main docker # <--- 也可以在这里指定
```

这里指定的 `docker`（实际对应 `docker-ce` 与 `docker-compose-plugin` 两个软件包）会在默认的 [`deploy.yml`](/docs/setup/playbook#部署剧本) 过程中自动下载到本地软件源中。
下载完成后的 Docker 软件包可以通过本地软件源，对所有节点可用。

如果您已经完成了 Pigsty 安装，本地软件源已经初始化完毕，您可以在修改配置之后执行 `./infra.yml -t repo_build` 重新下载并构建离线软件源。

安装 Docker 需要用到 Docker 的 YUM/APT [仓库](#仓库)，这个仓库在 Pigsty 中默认包含，但不启用，需要将 `docker` 加入到 [`repo_modules`](/docs/infra/param#repo_modules) 中启用后才能安装



--------

## 仓库

下载 Docker 需要用到互联网上游软件仓库，已经在定义在默认的 `repo_upstream` 中，模块名为 `docker`

```yaml
- { name: docker-ce ,description: 'Docker CE' ,module: docker  ,releases: [7,8,9] ,arch: [x86_64, aarch64] ,baseurl: { default: 'https://download.docker.com/linux/centos/$releasever/$basearch/stable'    ,china: 'https://mirrors.aliyun.com/docker-ce/linux/centos/$releasever/$basearch/stable'  ,europe: 'https://mirrors.xtom.de/docker-ce/linux/centos/$releasever/$basearch/stable' }}
- { name: docker-ce ,description: 'Docker CE' ,module: docker  ,releases: [11,12,20,22,24] ,arch: [x86_64, aarch64] ,baseurl: { default: 'https://download.docker.com/linux/${distro_name} ${distro_codename} stable' ,china: 'https://mirrors.tuna.tsinghua.edu.cn/docker-ce/linux//${distro_name} ${distro_codename} stable' }}
```

您可以在 [`repo_modules`](/docs/infra/param#repo_modules) 与  [`node_repo_modules`](/docs/node/param#node_repo_modules) 两个参数中，使用 `docker` 模块名引用这个仓库。

> 请注意，Docker 的官方软件仓库在中国大陆默认处于 **封锁** 状态，您需要使用中国地区的镜像站点才能正常完成下载。
>
> 如果您处在中国大陆地区遇到 Docker 本身下载失败的问题，请检查您的配置清单中，`region` 是否被设置为了 `default`，默认情况下自动配置的 `region: china` 可以解决这个问题。





--------

## 代理

如果您的网络环境需要使用代理服务器才能访问互联网，您可以在 Pigsty 的配置清单中配置 [`proxy_env`](/docs/infra/param#proxy_env) 参数，这个参数会被写入到 Docker 的配置文件中的 `proxy` 相关配置中。

```bash
proxy_env:
  no_proxy: "localhost,127.0.0.1,10.0.0.0/8,192.168.0.0/16,*.pigsty,*.aliyun.com,mirrors.aliyuncs.com,mirrors.tuna.tsinghua.edu.cn,mirrors.zju.edu.cn"
  #http_proxy: 'http://username:password@proxy.address.com'
  #https_proxy: 'http://username:password@proxy.address.com'
  #all_proxy: 'http://username:password@proxy.address.com'
```

在执行 [`configure`](/docs/setup/install#配置) 的过程中如果指定了 `-x` 参数，当前环境中的代理服务器配置会自动生成到 Pigsty 配置文件到 `proxy_env` 中。

除了使用代理服务器之外，您还可以通过配置 [**Docker镜像站点**](#镜像站) 的方式来规避封锁。





--------

## 镜像站

您可以通过参数 [`docker_registry_mirrors`](param#docker_registry_mirrors) 指定 Docker 的 Registry Mirrors 参数，使用未被墙掉的镜像站点：

普通墙外用户，除了官方默认的 DockerHub 站点外，还可以考虑使用 `quay.io` 镜像站点。如果您的内网环境已经有了成熟的镜像基础设施，您可以使用内网的 Docker 镜像站点，避免受到外网镜像站点的影响，提高下载速度。

使用公有云厂商服务的用户可以考虑使用内网免费的 Docker 镜像。例如，如果您使用阿里云，可以使用阿里云提供的内网 Docker 镜像站点（需要登陆）：

```bash
["https://registry.cn-hangzhou.aliyuncs.com"]   # 阿里云镜像站点，需要显式登陆
```

如果你使用腾讯云，可以使用腾讯云提供的内网 Docker 镜像站点（需要内网）：

```bash
["https://ccr.ccs.tencentyun.com"]   # 腾讯云镜像站点，内网专用
```

此外，您还可以使用 [CF-Workers-docker.io](https://github.com/cmliu/CF-Workers-docker.io?tab=readme-ov-file#%E7%AC%AC%E4%B8%89%E6%96%B9-dockerhub-%E9%95%9C%E5%83%8F%E6%9C%8D%E5%8A%A1) 快速拉起您自己的 Docker 镜像代理。
也可以考虑使用免费的 [Docker代理镜像](https://github.com/cmliu/CF-Workers-docker.io?tab=readme-ov-file#%E7%AC%AC%E4%B8%89%E6%96%B9-dockerhub-%E9%95%9C%E5%83%8F%E6%9C%8D%E5%8A%A1) （风险自负！）




--------

## 拉取镜像

参数 [`docker_image`](param#docker_image) 与 [`docker_image_cache`](param#docker_image_cache) 可用于直接指定在 Docker 安装时，需要拉取的镜像列表。

使用这一功能，可以让 Docker 装好之后就带有指定的镜像（前提是可以成功拉取，此任务失败会自动忽略跳过）

例如，您可以在配置清单中指定需要拉取的镜像：

```yaml
infra:
  hosts:
    10.10.10.10: { infra_seq: 1 }
  vars:
    docker_enabled: true  # 在这个分组上安装 Docker ！
    docker_image:
      - redis:latest      # 拉取最新版本的 Redis 镜像
```

另一种预先加载镜像的方式是使用本地 `save` 的 `tgz` 压缩包：如果您预先使用 `docker save xxx | gzip -c > /tmp/docker/xxx.tgz` 将 Docker 镜像导出保存在本地。
那么这些导出的镜像文件可以通过参数 [`docker_image_cache`](param#docker_image_cache) 指定的 glob 被自动加载。默认的位置是： `/tmp/docker/*.tgz`。

这意味着你可以事先把镜像放在 `/tmp/docker` 目录中，然后执行 [`docker.yml`](playbook#dockeryml) 安装 docker 后会自动加载这些镜像包。

例如，在 [supabase自建教程](/blog/db/supabase) 中就使用了这种技术，在拉起 Supabase，安装 Docker 之前，把本地 `/tmp/supabase` 目录的 `*.tgz` 镜像压缩包都拷贝到了目标节点的 `/tmp/docker` 目录下。

```yaml
- name: copy local docker images
  copy: src="{{ item }}" dest="/tmp/docker/"
  with_fileglob: "{{ supa_images }}"
  vars: # you can override this with -e cli args
    supa_images: /tmp/supabase/*.tgz
```


--------

## 应用

Pigsty 提供了一系列开箱即用的，基于 Docker Compose 的 [**软件模板**](/docs/app/)，您可以用它们一键拉起使用外部由 Pigsty 管理数据库集群的业务软件。
