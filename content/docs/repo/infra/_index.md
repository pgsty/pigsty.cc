---
title: "INFRA 仓库"
icon: fas fa-bank
description: 可观测性/PostgreSQL 工具软件仓库，Linux 发行版大版本无关的软件包
weight: 5440
---

[`pigsty-infra`](https://github.com/pgsty/infra-pkg) 仓库包含与任何 PostgreSQL 版本和 Linux 主版本无关的通用软件包，
包括 Prometheus & Grafana 技术栈、PostgreSQL 管理工具，以及许多用 Go 编写的实用工具。

该仓库由 [冯若航](https://vonng.com/) ([Vonng](https://github.com/Vonng)) @ [Pigsty](https://pigsty.io) 维护，
您可以在 [https://github.com/pgsty/infra-pkg](https://github.com/pgsty/infra-pkg) 找到所有构建源代码与命令。
为 RHEL / Debian / Ubuntu 发行版提供预构建的 RPM / DEB 包，支持 `x86_64` 和 `aarch64` 架构。
托管于 Cloudflare CDN，提供免费的全球访问。

| Linux  |  包类型  | x86_64 | aarch64 |
|:------:|:-----:|:------:|:-------:|
|   EL   | `rpm` |   ✓    |    ✓    |
| Debian | `deb` |   ✓    |    ✓    |

Infra 仓库的更新记录可以参考 [**发布 - Infra 变更日志**](/docs/repo/infra/log/) 。


---------

## 快速上手

您可以使用 [**`pig`**](/docs/pig/) CLI 工具添加 `pigsty-infra` 仓库，它会自动从 `apt/yum/dnf` 中选择合适的包管理器。

{{< tabpane text=true persist=header >}}
{{% tab header="默认" %}}
```bash
curl https://repo.pigsty.io/pig | bash  # 下载并安装 pig CLI 工具
pig repo add infra                      # 将 pigsty-infra 仓库文件添加到您的系统
pig repo update                         # 使用 apt / dnf 更新本地仓库缓存
```
{{% /tab %}}
{{% tab header="镜像" %}}
```bash
# 在中国大陆或 Cloudflare 不可用时使用
curl https://repo.pigsty.cc/pig | bash  # 从中国 CDN 镜像安装 pig
pig repo add infra                      # 将 pigsty-infra 仓库文件添加到您的系统
pig repo update                         # 使用 apt / dnf 更新本地仓库缓存
```
{{% /tab %}}
{{% tab header="提示" %}}
```bash
# 您可以使用以下命令管理 infra 仓库：
pig repo add infra -u       # 添加仓库文件，并更新缓存
pig repo add infra -ru      # 删除所有现有仓库，添加仓库并创建缓存
pig repo set infra          # = pigsty repo add infra -ru

pig repo add all            # 将 infra、node、pgsql 仓库添加到您的系统
pig repo set all            # 删除现有仓库，添加上述仓库并更新缓存
```
{{% /tab %}}
{{< /tabpane >}}


---------

## 手动设置

您也可以不使用 `pig` CLI 工具直接使用此仓库，手动将其添加到您的 Linux 操作系统仓库列表中：

### APT 仓库

在 **Debian / Ubuntu** 兼容的 Linux 发行版上，您可以手动添加 [GPG 密钥](/docs/repo/gpg/) 和 APT 仓库文件：

{{< tabpane text=true persist=header >}}
{{% tab header="默认" %}}
```bash
# 将 Pigsty 的 GPG 公钥添加到您的系统密钥链以验证包签名，或者直接信任
curl -fsSL https://repo.pigsty.io/key | sudo gpg --dearmor -o /etc/apt/keyrings/pigsty.gpg

# 获取 Debian 发行版代号（distro_codename=jammy, focal, bullseye, bookworm）
# 并将相应的上游仓库地址写入 APT List 文件
distro_codename=$(lsb_release -cs)
sudo tee /etc/apt/sources.list.d/pigsty-infra.list > /dev/null <<EOF
deb [signed-by=/etc/apt/keyrings/pigsty.gpg] https://repo.pigsty.io/apt/infra generic main
EOF

# 刷新 APT 仓库缓存
sudo apt update
```
{{% /tab %}}
{{% tab header="镜像" %}}
```bash
# 在中国大陆或 Cloudflare 不可用时使用
# 将 Pigsty 的 GPG 公钥添加到您的系统密钥链以验证包签名，或者直接信任
curl -fsSL https://repo.pigsty.cc/key | sudo gpg --dearmor -o /etc/apt/keyrings/pigsty.gpg

# 获取 Debian 发行版代号（distro_codename=jammy, focal, bullseye, bookworm）
# 并将相应的上游仓库地址写入 APT List 文件
distro_codename=$(lsb_release -cs)
sudo tee /etc/apt/sources.list.d/pigsty-infra.list > /dev/null <<EOF
deb [signed-by=/etc/apt/keyrings/pigsty.gpg] https://repo.pigsty.cc/apt/infra generic main
EOF

# 刷新 APT 仓库缓存
sudo apt update
```
{{% /tab %}}
{{% tab header="免密钥" %}}
```bash
# 如果您不想信任任何 GPG 密钥，直接信任仓库
distro_codename=$(lsb_release -cs)
sudo tee /etc/apt/sources.list.d/pigsty-infra.list > /dev/null <<EOF
deb [trust=yes] https://repo.pigsty.io/apt/infra generic main
EOF

sudo apt update
```
{{% /tab %}}
{{< /tabpane >}}




### YUM 仓库

在 **RHEL** 兼容的 Linux 发行版上，您可以手动添加 [GPG 密钥](/docs/repo/gpg/) 和 YUM 仓库文件：

{{< tabpane text=true persist=header >}}
{{% tab header="默认" %}}
```bash
# 将 Pigsty 的 GPG 公钥添加到您的系统密钥链以验证包签名
curl -fsSL https://repo.pigsty.io/key | sudo tee /etc/pki/rpm-gpg/RPM-GPG-KEY-pigsty >/dev/null

# 将 Pigsty 仓库定义文件添加到 /etc/yum.repos.d/ 目录
sudo tee /etc/yum.repos.d/pigsty-infra.repo > /dev/null <<-'EOF'
[pigsty-infra]
name=Pigsty Infra for $basearch
baseurl=https://repo.pigsty.io/yum/infra/$basearch
skip_if_unavailable = 1
enabled = 1
priority = 1
gpgcheck = 1
gpgkey=file:///etc/pki/rpm-gpg/RPM-GPG-KEY-pigsty
module_hotfixes=1
EOF

# 刷新 YUM/DNF 仓库缓存
sudo yum makecache;
```
{{% /tab %}}
{{% tab header="镜像" %}}
```bash
# 在中国大陆或 Cloudflare 不可用时使用
# 将 Pigsty 的 GPG 公钥添加到您的系统密钥链以验证包签名
curl -fsSL https://repo.pigsty.cc/key | sudo tee /etc/pki/rpm-gpg/RPM-GPG-KEY-pigsty >/dev/null

# 将 Pigsty 仓库定义文件添加到 /etc/yum.repos.d/ 目录
sudo tee /etc/yum.repos.d/pigsty-infra.repo > /dev/null <<-'EOF'
[pigsty-infra]
name=Pigsty Infra for $basearch
baseurl=https://repo.pigsty.cc/yum/infra/$basearch
skip_if_unavailable = 1
enabled = 1
priority = 1
gpgcheck = 1
gpgkey=file:///etc/pki/rpm-gpg/RPM-GPG-KEY-pigsty
module_hotfixes=1
EOF

# 刷新 YUM/DNF 仓库缓存
sudo yum makecache;
```
{{% /tab %}}
{{% tab header="免密钥" %}}
```bash
# 如果您不想信任任何 GPG 密钥，直接信任仓库
sudo tee /etc/yum.repos.d/pigsty-infra.repo > /dev/null <<-'EOF'
[pigsty-infra]
name=Pigsty Infra for $basearch
baseurl=https://repo.pigsty.io/yum/infra/$basearch
skip_if_unavailable = 1
enabled = 1
priority = 1
gpgcheck = 0
module_hotfixes=1
EOF

sudo yum makecache;
```
{{% /tab %}}
{{< /tabpane >}}


