---
title: Terraform
weight: 390
description: 使用 Terraform 在公有云上创建虚拟机环境
icon: fa-solid fa-cloud
module: [PIGSTY]
categories: [教程]
---

[**Terraform**](https://www.terraform.io/) 是一个流行的"基础设施即代码"工具，您可以使用它在公有云上一键创建虚拟机。

Pigsty 当前提供阿里云、AWS（全球与中国区）、Azure、GCP、腾讯云、Hetzner、Vultr、DigitalOcean 与 Linode 的 Terraform 示例模板；其中 `aliyun-s3.tf` 还会为 S3/pgBackRest 场景创建私有 OSS Bucket 与专用 RAM 读写凭据。


----------------

## 快速开始

### 安装 Terraform

在 macOS 上，您可以使用 [**Homebrew**](https://brew.sh/) 安装 Terraform：

```bash
brew install terraform
```

其他平台请参考 [**Terraform 官方安装指南**](https://developer.hashicorp.com/terraform/install)。

### 初始化与应用

进入 Terraform 目录，选择模板，初始化提供商插件，然后应用配置：

```bash
cd ~/pigsty/terraform
cp spec/aliyun.tf terraform.tf         # 选择模板
terraform init                         # 安装云提供商插件（首次使用时）
terraform apply                        # 生成执行计划并创建资源
```

运行 `apply` 命令后，按提示输入 `yes` 确认，Terraform 将为您创建虚拟机及相关云资源。

### 获取 IP 地址

创建完成后，打印管理节点的公网 IP 地址：

```bash
terraform output -raw meta_ip
```

### 配置 SSH 访问

全球云模板通常同时提供可直接执行的 `ssh_command` 输出：

```bash
terraform output -raw ssh_command
```

仓库中的 `./ssh` 是面向旧式“全部输出都是 IP、root 密码为 `PigstyDemo4`”模板的兼容脚本：它会遍历 **每一个** Terraform 输出，将其当作 IP 写入 `~/.ssh/pigsty_config`，再用 `sshpass` 分发密钥。因此它适用于 `aliyun.tf`、`aliyun-full.tf`、`aliyun-oss.tf`、`aliyun-pro.tf` 这类兼容模板；不要对包含 `ssh_command`、私网 IP 或访问密钥输出的现代模板运行它。

使用兼容脚本时：

```bash
./ssh       # 写入 SSH 配置并分发密钥
ssh meta    # 使用主机名而非 IP 登录
```

{{% alert title="使用 SSH 配置文件" color="info" %}}
如果您希望使用 `~/.ssh/pigsty_config` 中的配置，请确保在 `~/.ssh/config` 中包含以下内容：

```bash
Include ~/.ssh/pigsty_config
```
{{% /alert %}}

### 销毁资源

测试完成后，可以一键销毁所有创建的云资源：

```bash
terraform destroy
```


----------------

## 模板规格

Pigsty 在 [`terraform/spec/`](https://github.com/pgsty/pigsty/tree/main/terraform/spec) 目录下提供了多种预定义的云资源模板：

| 模板文件                                                                                          | 云厂商          | 说明                                                |
|-----------------------------------------------------------------------------------------------|--------------|---------------------------------------------------|
| [`aliyun.tf`](https://github.com/pgsty/pigsty/blob/main/terraform/spec/aliyun.tf)             | 阿里云          | 单节点元节点模板，支持所有发行版和 AMD/ARM（默认）                     |
| [`aliyun-s3.tf`](https://github.com/pgsty/pigsty/blob/main/terraform/spec/aliyun-s3.tf)       | 阿里云          | 单节点 + 私有 OSS Bucket 与 RAM 读写凭据，供 S3/pgBackRest 使用 |
| [`aliyun-full.tf`](https://github.com/pgsty/pigsty/blob/main/terraform/spec/aliyun-full.tf)   | 阿里云          | 4 节点沙箱模板，支持所有发行版和 AMD/ARM                         |
| [`aliyun-oss.tf`](https://github.com/pgsty/pigsty/blob/main/terraform/spec/aliyun-oss.tf)     | 阿里云          | 6 节点构建模板，支持所有发行版和 AMD/ARM                         |
| [`aliyun-pro.tf`](https://github.com/pgsty/pigsty/blob/main/terraform/spec/aliyun-pro.tf)     | 阿里云          | 7 节点多发行版测试模板，用于跨操作系统测试                            |
| [`aws.tf`](https://github.com/pgsty/pigsty/blob/main/terraform/spec/aws.tf)                   | AWS          | AWS 全球区域单节点，Debian 12/13，AMD/ARM                  |
| [`aws-cn.tf`](https://github.com/pgsty/pigsty/blob/main/terraform/spec/aws-cn.tf)             | AWS          | AWS 中国区旧式单节点环境                                    |
| [`azure.tf`](https://github.com/pgsty/pigsty/blob/main/terraform/spec/azure.tf)               | Azure        | Azure 单节点，Debian 12/13，AMD/ARM                    |
| [`gcp.tf`](https://github.com/pgsty/pigsty/blob/main/terraform/spec/gcp.tf)                   | GCP          | GCP 单节点，Debian 12/13，AMD/ARM                      |
| [`qcloud.tf`](https://github.com/pgsty/pigsty/blob/main/terraform/spec/qcloud.tf)             | 腾讯云          | 腾讯云单节点环境                                          |
| [`hetzner.tf`](https://github.com/pgsty/pigsty/blob/main/terraform/spec/hetzner.tf)           | Hetzner      | 单节点，Debian 12/13，AMD/ARM                          |
| [`vultr.tf`](https://github.com/pgsty/pigsty/blob/main/terraform/spec/vultr.tf)               | Vultr        | 单节点，Debian 12/13，当前仅 AMD                          |
| [`digitalocean.tf`](https://github.com/pgsty/pigsty/blob/main/terraform/spec/digitalocean.tf) | DigitalOcean | 单节点，Debian 12/13，当前仅 AMD                          |
| [`linode.tf`](https://github.com/pgsty/pigsty/blob/main/terraform/spec/linode.tf)             | Linode       | 单节点，Debian 12/13，当前仅 AMD                          |
{.full-width}

使用模板时，将模板文件复制为 `terraform.tf`：

```bash
cd ~/pigsty/terraform
cp spec/aliyun-full.tf terraform.tf   # 使用阿里云 4 节点沙箱模板
terraform init && terraform apply
```


----------------

## 变量配置

各模板的变量并不完全相同。阿里云模板支持完整的多发行版矩阵，默认 `u26`；AWS 全球、Azure、GCP、腾讯云与 Hetzner 支持 Debian 12/13 并可选 AMD/ARM，默认 `d12`/`amd64`；Vultr、DigitalOcean 与 Linode 当前只提供 AMD 实例选择。

### 架构与发行版

```hcl
variable "architecture" {
  description = "架构类型 (amd64 或 arm64)"
  type        = string
  default     = "amd64"    # 注释此行以使用 arm64
  #default     = "arm64"   # 取消注释以使用 arm64
}

variable "distro" {
  description = "发行版代码（具体集合由模板决定）"
  type        = string
  default     = "d12"       # 全球云模板通常默认 Debian 12；阿里云模板默认 u26
}
```

### 资源配置

阿里云模板可在 `locals` 块中配置以下资源参数；其他云模板使用各自提供商的实例、磁盘与网络变量或本地值，请以所选 `.tf` 文件为准：

```hcl
locals {
  bandwidth        = 100                    # 公网带宽 (Mbps)
  disk_size        = 40                     # 系统盘大小 (GB)
  spot_policy      = "SpotWithPriceLimit"   # 竞价策略：NoSpot, SpotWithPriceLimit, SpotAsPriceGo
  spot_price_limit = 5                      # 最高竞价价格 (仅在 SpotWithPriceLimit 时有效)
}
```


----------------

## 阿里云配置

### 凭证设置

将您的阿里云凭证添加到环境变量中，例如在 `~/.bash_profile` 或 `~/.zshrc` 中：

```bash
export ALICLOUD_ACCESS_KEY="<your_access_key>"
export ALICLOUD_SECRET_KEY="<your_secret_key>"
export ALICLOUD_REGION="cn-shanghai"
```

### 支持的镜像

以下是阿里云中常用的 [**ECS 公共操作系统镜像**](https://help.aliyun.com/zh/ecs/user-guide/public-mirroring-overview) 前缀：

当前推荐并验证的基线为 Rocky Linux 9.8 / 10.2、Debian 12.15 / 13.6，以及 Ubuntu 22.04.5 / 24.04.4 / 26.04.0。

| 发行版                   | 代码     | x86_64 镜像前缀                       | aarch64 镜像前缀                        |
|-----------------------|--------|-----------------------------------|-------------------------------------|
| CentOS 7.9            | `el7`  | `centos_7_9_x64`                  | -                                   |
| Rocky 8.10            | `el8`  | `rockylinux_8_10_x64`             | `rockylinux_8_10_arm64`             |
| Rocky 9.8             | `el9`  | `rockylinux_9_8_x64`              | `rockylinux_9_8_arm64`              |
| Rocky 10.2            | `el10` | `rockylinux_10_2_x64`             | `rockylinux_10_2_arm64`             |
| Debian 11.11          | `d11`  | `debian_11_11_x64`                | -                                   |
| Debian 12.15          | `d12`  | `debian_12_15_x64`                | `debian_12_15_arm64`                |
| Debian 13.6           | `d13`  | `debian_13_6_x64`                 | `debian_13_6_arm64`                 |
| Ubuntu 22.04.5 LTS    | `u22`  | `ubuntu_22_04_x64_20G`            | `ubuntu_22_04_arm64_20G`            |
| Ubuntu 24.04.4 LTS    | `u24`  | `ubuntu_24_04_x64_20G`            | `ubuntu_24_04_arm64_20G`            |
| Ubuntu 26.04.0 LTS    | `u26`  | `ubuntu_26_04_x64_20G`            | `ubuntu_26_04_arm64_20G`            |
| Anolis 8.10           | `an8`  | `anolisos_8_10_x64`               | `anolisos_8_10_arm64`               |
| Alibaba Cloud Linux 3 | `al3`  | `aliyun_3_x64_20G_alibase_[0-9]+` | `aliyun_3_arm64_20G_alibase_[0-9]+` |
{.full-width}

### OSS 存储配置

`aliyun-s3.tf` 模板会额外创建 OSS 存储桶及相关权限，用于 PostgreSQL 的 PITR 备份：

- **OSS Bucket**：创建名为 `pigsty-oss` 的私有存储桶
- **RAM 用户**：创建专用的 `pigsty-oss-user` 用户
- **访问密钥**：生成 AccessKey 并保存到 `~/pigsty.sk`
- **RAM 策略**：面向读写场景，为该用户授予存储桶及桶内对象的 `oss:*` 权限


----------------

## AWS 配置

### 凭证设置

全球与中国区模板都可以读取标准 AWS 环境变量或凭证文件：

```bash
export AWS_ACCESS_KEY_ID="<your_access_key>"
export AWS_SECRET_ACCESS_KEY="<your_secret_key>"
export AWS_REGION="us-west-2"

# ~/.aws/config
[default]
region = us-west-2

# ~/.aws/credentials
[default]
aws_access_key_id = <YOUR_AWS_ACCESS_KEY>
aws_secret_access_key = <AWS_ACCESS_SECRET>
```

`aws.tf` 默认读取 `~/.ssh/id_rsa.pub`；旧式中国区 `aws-cn.tf` 则读取以下专用公钥：

```bash
~/.aws/pigsty-key.pub
```

{{% alert title="AWS 模板需要调整" color="warning" %}}
`aws.tf` 使用 Debian 官方 AMI 的滚动查询；`aws-cn.tf` 使用中国区硬编码 AMI 与 `~/.aws/pigsty-key.pub`，部署前应核对目标区域、AMI 与密钥。
{{% /alert %}}


----------------

## 腾讯云配置

### 凭证设置

将腾讯云凭证添加到环境变量中：

```bash
export TENCENTCLOUD_SECRET_ID="<your_secret_id>"
export TENCENTCLOUD_SECRET_KEY="<your_secret_key>"
export TENCENTCLOUD_REGION="ap-beijing"
```

{{% alert title="腾讯云模板需要调整" color="warning" %}}
腾讯云模板是社区贡献的示例，可能需要根据您的具体需求进行调整。
{{% /alert %}}

### 其他云凭证

```bash
# Azure：推荐先 az login；服务主体方式使用以下四项
export ARM_CLIENT_ID="<client_id>"
export ARM_CLIENT_SECRET="<client_secret>"
export ARM_SUBSCRIPTION_ID="<subscription_id>"
export ARM_TENANT_ID="<tenant_id>"

# GCP：也可使用 gcloud auth application-default login
export GOOGLE_APPLICATION_CREDENTIALS="/path/to/service-account-key.json"

# Hetzner / Vultr / DigitalOcean / Linode
export HCLOUD_TOKEN="<api_token>"
export VULTR_API_KEY="<api_key>"
export DIGITALOCEAN_TOKEN="<api_token>"
export LINODE_TOKEN="<api_token>"
```

GCP 模板还要求提供 `project` 变量，例如 `terraform apply -var="project=my-project"`。除 AWS 中国区外，使用密钥认证的当前模板默认读取 `~/.ssh/id_rsa.pub`；如需其他公钥路径，请直接修改所选模板。


----------------

## 快捷命令

Pigsty 提供了一些 Makefile 快捷命令用于 Terraform 操作：

```bash
cd ~/pigsty/terraform

make u          # terraform apply -auto-approve + 运行旧式 ./ssh（仅兼容模板）
make d          # terraform destroy -auto-approve
make apply      # terraform apply（交互式确认）
make destroy    # terraform destroy（交互式确认）
make out        # terraform output
make ssh        # 运行 ssh 脚本配置 SSH 访问
make r          # 重置 terraform.tf 到版本库状态
```

对于带有 `ssh_command`、私网 IP 或其他非 IP 输出的现代模板，请直接运行 `terraform apply`，不要使用会随后调用旧式 `./ssh` 的 `make u`。


----------------

## 注意事项

{{% alert title="云资源费用" color="warning" %}}
使用 Terraform 创建的云资源会产生费用。测试完成后，请及时使用 `terraform destroy` 销毁资源，避免不必要的开支。

建议使用按量付费的实例类型进行测试。模板默认使用竞价实例（Spot Instance）以降低成本。
{{% /alert %}}

{{% alert title="默认密码" color="info" %}}
阿里云模板与腾讯云模板默认设置 root 密码 `PigstyDemo4`；Linode 因密码复杂度要求使用 `PigstyDemo4!`。
AWS、Azure、GCP、Hetzner、Vultr 与 DigitalOcean 的当前模板主要使用 SSH 公钥认证，并没有统一的默认 root 密码。示例密码只能用于临时测试，生产环境必须更换或禁用密码登录。
{{% /alert %}}

{{% alert title="安全组配置" color="info" %}}
这些模板面向演示/开发，当前安全组或云防火墙会从 `0.0.0.0/0`（部分同时含 `::/0`）开放全部或近乎全部入站流量，而不只是 Pigsty 必需端口。
部署前应先限制来源网段与端口；不要原样用于生产环境。
{{% /alert %}}

{{% alert title="SSH 访问" color="info" %}}
创建完成后，使用以下命令 SSH 登录到管理节点：

```bash
ssh root@<public_ip>
```

兼容旧式输出与密码约定的阿里云模板还可以使用 `./ssh` 或 `make ssh` 写入 SSH 别名；其他模板请使用其 `ssh_command` 输出。
{{% /alert %}}
