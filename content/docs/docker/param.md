---
title: 参数列表
weight: 4220
description: DOCKER 模块提供了 8 个配置参数
icon: fa-solid fa-sliders
categories: [参考]
---

DOCKER 模块提供了 8 个配置参数。


## 参数概览

[`DOCKER`](#docker) 参数组用于 Docker 容器引擎的部署与配置，包括启用开关、数据目录、存储驱动、镜像加速以及监控。

| 参数                                                    |     类型     |    级别    | 说明                                         |
|:------------------------------------------------------|:----------:|:--------:|:-------------------------------------------|
| [`docker_enabled`](#docker_enabled)                   |   `bool`   | `G/C/I`  | 在当前节点上启用 Docker？默认不启用                      |
| [`docker_data`](#docker_data)                         |   `path`   | `G/C/I`  | Docker 数据目录，默认为 `/data/docker`             |
| [`docker_storage_driver`](#docker_storage_driver)     |   `enum`   | `G/C/I`  | Docker 存储驱动，默认为 `overlay2`                 |
| [`docker_cgroups_driver`](#docker_cgroups_driver)     |   `enum`   | `G/C/I`  | Docker CGroup 文件系统驱动：cgroupfs,systemd      |
| [`docker_registry_mirrors`](#docker_registry_mirrors) | `string[]` | `G/C/I`  | Docker 仓库镜像列表                              |
| [`docker_exporter_port`](#docker_exporter_port)       |   `port`   |   `G`    | Docker 监控指标导出端口，默认为 `9323`                 |
| [`docker_image`](#docker_image)                       | `string[]` | `G/C/I`  | Docker 待拉取的镜像列表，默认为空列表                     |
| [`docker_image_cache`](#docker_image_cache)           |   `path`   | `G/C/I`  | Docker 待导入的镜像压缩包路径，默认为 `/tmp/docker/*.tgz` |


您可以使用 [`docker.yml`](https://github.com/pgsty/pigsty/blob/main/docker.yml) 剧本，在节点上安装并启用 Docker。

Docker 的默认参数定义于 [`roles/docker/defaults/main.yml`](https://github.com/pgsty/pigsty/blob/main/roles/docker/defaults/main.yml)


```yaml
docker_enabled: false             # 在当前节点启用 Docker？
docker_data: /data/docker         # Docker 数据目录，默认为 /data/docker
docker_storage_driver: overlay2   # Docker 存储驱动，可选 zfs, btrfs 等
docker_cgroups_driver: systemd    # Docker CGroup 驱动：cgroupfs 或 systemd
docker_registry_mirrors: []       # Docker 镜像仓库加速列表
docker_exporter_port: 9323        # Docker 监控指标导出端口，默认 9323
docker_image: []                  # Docker 启动后待拉取的镜像列表
docker_image_cache: /tmp/docker/*.tgz # Docker 镜像缓存 tarball 匹配模式
```



### `docker_enabled`

参数名称： `docker_enabled`， 类型： `bool`， 层次：`G/C/I`

是否在当前节点启用Docker？默认为： `false`，即不启用。




### `docker_data`

参数名称： `docker_data`， 类型： `path`， 层次：`G/C/I`

Docker 数据目录，默认为 `/data/docker`。

此目录用于存储 Docker 的镜像、容器、卷等数据。如果您有独立的数据磁盘，建议将此目录指向该磁盘的挂载点。




### `docker_storage_driver`

参数名称： `docker_storage_driver`， 类型： `enum`， 层次：`G/C/I`

Docker 存储驱动，默认为 `overlay2`。

请参考官方文档：https://docs.docker.com/engine/storage/drivers/select-storage-driver/

可选的存储驱动包括：

- `overlay2`：推荐的默认驱动，适用于大多数场景
- `fuse-overlayfs`：用于无 root 权限的容器场景
- `btrfs`：使用 Btrfs 文件系统时
- `zfs`：使用 ZFS 文件系统时
- `vfs`：用于测试目的，不推荐生产使用




### `docker_cgroups_driver`

参数名称： `docker_cgroups_driver`， 类型： `enum`， 层次：`G/C/I`

Docker使用的 CGroup FS 驱动，可以是 `cgroupfs` 或 `systemd`，默认值为： `systemd`





### `docker_registry_mirrors`

参数名称： `docker_registry_mirrors`， 类型： `string[]`， 层次：`G/C/I`

Docker 镜像仓库加速地址列表，默认值为：`[]` 空数组。

您可以使用 Docker 镜像站点加速镜像拉取，下面是一些中国大陆可用的镜像站点示例：

```yaml
["https://docker.m.daocloud.io"]                # DaoCloud 镜像站点
["https://docker.1ms.run"]                      # 毫秒镜像站点
["https://mirror.ccs.tencentyun.com"]           # 腾讯云内网镜像站点
["https://registry.cn-hangzhou.aliyuncs.com"]   # 阿里云镜像站点，需要登录
```

您也可以考虑使用 Cloudflare Worker 搭建 [Docker Proxy](https://github.com/cmliu/CF-Workers-docker.io) 来加速访问。

如果拉取速度仍然太慢，您也可以考虑使用其他 Registry：`docker login quay.io`




### `docker_exporter_port`

参数名称： `docker_exporter_port`， 类型： `port`， 层次：`G`

Docker 监控指标导出端口，默认为 `9323`。

Docker 守护进程会在此端口暴露 Prometheus 格式的监控指标，供监控基础设施采集。




### `docker_image`

参数名称： `docker_image`， 类型： `string[]`， 层次：`G/C/I`

Docker 待拉取的镜像列表，默认为空列表 `[]`。

在这里指定的 Docker 镜像名称会在安装阶段自动拉取。





### `docker_image_cache`

参数名称： `docker_image_cache`， 类型： `path`， 层次：`G/C/I`

本地 Docker 镜像离线缓存包 glob 匹配模式，默认为 `/tmp/docker/*.tgz`。

您可以使用 `docker save | gzip` 的方式将镜像打包，并通过此参数在 Docker 安装阶段自动导入。

匹配该模式的 `.tgz` 后缀 tarball 文件将使用以下方式逐个导入 Docker 中：

```bash
cat *.tgz | gzip -d -c - | docker load
```


