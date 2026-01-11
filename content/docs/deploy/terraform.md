---
title: Terraform
weight: 390
description: 使用 Terraform 在公有云上创建虚拟机环境
icon: fa-solid fa-cloud
module: [PIGSTY]
categories: [教程]
---

[**Terraform**](https://www.terraform.io/) 是一个流行的"基础设施即代码"工具，您可以使用它在公有云上一键创建虚拟机。

Pigsty 提供了阿里云、AWS、腾讯云的 Terraform 模板作为示例。


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
cp spec/aliyun-meta.tf terraform.tf   # 选择模板
terraform init                         # 安装云提供商插件（首次使用时）
terraform apply                        # 生成执行计划并创建资源
```

运行 `apply` 命令后，按提示输入 `yes` 确认，Terraform 将为您创建虚拟机及相关云资源。

### 获取 IP 地址

创建完成后，打印管理节点的公网 IP 地址：

```bash
terraform output | grep -Eo '[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}'
```

### 配置 SSH 访问

使用 `ssh` 脚本自动配置 SSH 别名并分发密钥：

```bash
./ssh    # 写入 SSH 配置到 ~/.ssh/pigsty_config 并复制密钥
```

此脚本会将 Terraform 输出的 IP 地址写入 `~/.ssh/pigsty_config`，并使用默认密码 `PigstyDemo4` 自动分发 SSH 密钥。

配置完成后，您可以直接使用主机名登录：

```bash
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

| 模板文件 | 云厂商 | 说明 |
|---------|-------|------|
| [`aliyun-meta.tf`](https://github.com/pgsty/pigsty/tree/main/terraform/spec/aliyun-meta.tf) | 阿里云 | 单节点元节点模板，支持所有发行版和 AMD/ARM（默认） |
| [`aliyun-meta-s3.tf`](https://github.com/pgsty/pigsty/tree/main/terraform/spec/aliyun-meta-s3.tf) | 阿里云 | 单节点模板 + OSS 存储桶，用于 PITR 备份 |
| [`aliyun-full.tf`](https://github.com/pgsty/pigsty/tree/main/terraform/spec/aliyun-full.tf) | 阿里云 | 4 节点沙箱模板，支持所有发行版和 AMD/ARM |
| [`aliyun-oss.tf`](https://github.com/pgsty/pigsty/tree/main/terraform/spec/aliyun-oss.tf) | 阿里云 | 5 节点构建模板，支持所有发行版和 AMD/ARM |
| [`aliyun-pro.tf`](https://github.com/pgsty/pigsty/tree/main/terraform/spec/aliyun-pro.tf) | 阿里云 | 多发行版测试模板，用于跨操作系统测试 |
| [`aws-cn.tf`](https://github.com/pgsty/pigsty/tree/main/terraform/spec/aws-cn.tf) | AWS | AWS 中国区 4 节点环境 |
| [`tencentcloud.tf`](https://github.com/pgsty/pigsty/tree/main/terraform/spec/tencentcloud.tf) | 腾讯云 | 腾讯云 4 节点环境 |
{.full-width}

使用模板时，将模板文件复制为 `terraform.tf`：

```bash
cd ~/pigsty/terraform
cp spec/aliyun-full.tf terraform.tf   # 使用阿里云 4 节点沙箱模板
terraform init && terraform apply
```


----------------

## 变量配置

Pigsty 的 Terraform 模板使用变量来控制架构、操作系统发行版和资源配置：

### 架构与发行版

```hcl
variable "architecture" {
  description = "架构类型 (amd64 或 arm64)"
  type        = string
  default     = "amd64"    # 注释此行以使用 arm64
  #default     = "arm64"   # 取消注释以使用 arm64
}

variable "distro" {
  description = "发行版代码 (el8,el9,el10,u22,u24,d12,d13)"
  type        = string
  default     = "el9"       # 默认使用 Rocky Linux 9
}
```

### 资源配置

在 `locals` 块中可以配置以下资源参数：

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

| 发行版 | 代码 | x86_64 镜像前缀 | aarch64 镜像前缀 |
|--------|------|----------------|-----------------|
| CentOS 7.9 | `el7` | `centos_7_9_x64` | - |
| Rocky 8.10 | `el8` | `rockylinux_8_10_x64` | `rockylinux_8_10_arm64` |
| Rocky 9.6 | `el9` | `rockylinux_9_6_x64` | `rockylinux_9_6_arm64` |
| Rocky 10.0 | `el10` | `rockylinux_10_0_x64` | `rockylinux_10_0_arm64` |
| Debian 11.11 | `d11` | `debian_11_11_x64` | - |
| Debian 12.11 | `d12` | `debian_12_11_x64` | `debian_12_11_arm64` |
| Debian 13.2 | `d13` | `debian_13_2_x64` | `debian_13_2_arm64` |
| Ubuntu 20.04 | `u20` | `ubuntu_20_04_x64` | - |
| Ubuntu 22.04 | `u22` | `ubuntu_22_04_x64` | `ubuntu_22_04_arm64` |
| Ubuntu 24.04 | `u24` | `ubuntu_24_04_x64` | `ubuntu_24_04_arm64` |
| Anolis 8.9 | `an8` | `anolisos_8_9_x64` | - |
| Alibaba Cloud Linux 3 | `al3` | `aliyun_3_0_x64` | - |
{.full-width}

### OSS 存储配置

`aliyun-meta-s3.tf` 模板会额外创建 OSS 存储桶及相关权限，用于 PostgreSQL 的 PITR 备份：

- **OSS Bucket**：创建名为 `pigsty-oss` 的私有存储桶
- **RAM 用户**：创建专用的 `pigsty-oss-user` 用户
- **访问密钥**：生成 AccessKey 并保存到 `~/pigsty.sk`
- **IAM 策略**：授予对存储桶的完全访问权限


----------------

## AWS 配置

### 凭证设置

设置 AWS 配置和凭证文件：

```bash
# ~/.aws/config
[default]
region = cn-northwest-1

# ~/.aws/credentials
[default]
aws_access_key_id = <YOUR_AWS_ACCESS_KEY>
aws_secret_access_key = <AWS_ACCESS_SECRET>
```

如果需要使用 SSH 密钥，将密钥文件放置在：

```bash
~/.aws/pigsty-key
~/.aws/pigsty-key.pub
```

{{% alert title="AWS 模板需要调整" color="warning" %}}
AWS 模板是社区贡献的示例，可能需要根据您的具体需求进行调整。
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


----------------

## 快捷命令

Pigsty 提供了一些 Makefile 快捷命令用于 Terraform 操作：

```bash
cd ~/pigsty/terraform

make u          # terraform apply -auto-approve + 配置 SSH
make d          # terraform destroy -auto-approve
make apply      # terraform apply（交互式确认）
make destroy    # terraform destroy（交互式确认）
make out        # terraform output
make ssh        # 运行 ssh 脚本配置 SSH 访问
make r          # 重置 terraform.tf 到版本库状态
```


----------------

## 注意事项

{{% alert title="云资源费用" color="warning" %}}
使用 Terraform 创建的云资源会产生费用。测试完成后，请及时使用 `terraform destroy` 销毁资源，避免不必要的开支。

建议使用按量付费的实例类型进行测试。模板默认使用竞价实例（Spot Instance）以降低成本。
{{% /alert %}}

{{% alert title="默认密码" color="info" %}}
所有模板中虚拟机的默认 root 密码为 `PigstyDemo4`。在生产环境中，请务必修改此密码或使用 SSH 密钥认证。
{{% /alert %}}

{{% alert title="安全组配置" color="info" %}}
Terraform 模板会自动创建安全组并开放必要的端口（默认开放所有 TCP 端口）。在生产环境中，请根据实际需求调整安全组规则，遵循最小权限原则。
{{% /alert %}}

{{% alert title="SSH 访问" color="info" %}}
创建完成后，使用以下命令 SSH 登录到管理节点：

```bash
ssh root@<public_ip>
```

您也可以使用 `./ssh` 或 `make ssh` 将 SSH 别名写入配置文件，然后使用 `ssh pg-meta` 登录。
{{% /alert %}}

