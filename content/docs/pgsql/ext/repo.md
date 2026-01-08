---
title: 扩展仓库
weight: 2211
description: Pigsty 扩展软件仓库配置
icon: fas fa-warehouse
module: [PGSQL]
categories: [参考]
---

Pigsty 提供补充扩展仓库，在 PGDG 官方仓库基础上提供额外的扩展包。


--------

## YUM 仓库

适用于 EL 7/8/9/10 及其兼容系统（RHEL、Rocky、AlmaLinux、CentOS 等）。

### 添加仓库

```bash
# 添加 GPG 公钥
curl -fsSL https://repo.pigsty.io/key | sudo tee /etc/pki/rpm-gpg/RPM-GPG-KEY-pigsty >/dev/null

# 添加仓库配置
curl -fsSL https://repo.pigsty.io/yum/repo | sudo tee /etc/yum.repos.d/pigsty.repo >/dev/null

# 刷新缓存
sudo yum makecache
```

### 中国大陆镜像

```bash
curl -fsSL https://repo.pigsty.cc/key | sudo tee /etc/pki/rpm-gpg/RPM-GPG-KEY-pigsty >/dev/null
curl -fsSL https://repo.pigsty.cc/yum/repo | sudo tee /etc/yum.repos.d/pigsty.repo >/dev/null
```

### 仓库地址

- 国际: https://repo.pigsty.io/yum/
- 中国: https://repo.pigsty.cc/yum/


--------

## APT 仓库

适用于 Debian 11/12/13 和 Ubuntu 22.04/24.04 及其兼容系统。

### 添加仓库

```bash
# 添加 GPG 公钥
curl -fsSL https://repo.pigsty.io/key | sudo gpg --dearmor -o /etc/apt/keyrings/pigsty.gpg

# 获取发行版代号并添加仓库
distro_codename=$(lsb_release -cs)
sudo tee /etc/apt/sources.list.d/pigsty.list > /dev/null <<EOF
deb [signed-by=/etc/apt/keyrings/pigsty.gpg] https://repo.pigsty.io/apt/infra generic main
deb [signed-by=/etc/apt/keyrings/pigsty.gpg] https://repo.pigsty.io/apt/pgsql ${distro_codename} main
EOF

# 刷新缓存
sudo apt update
```

### 中国大陆镜像

```bash
curl -fsSL https://repo.pigsty.cc/key | sudo gpg --dearmor -o /etc/apt/keyrings/pigsty.gpg

distro_codename=$(lsb_release -cs)
sudo tee /etc/apt/sources.list.d/pigsty.list > /dev/null <<EOF
deb [signed-by=/etc/apt/keyrings/pigsty.gpg] https://repo.pigsty.cc/apt/infra generic main
deb [signed-by=/etc/apt/keyrings/pigsty.gpg] https://repo.pigsty.cc/apt/pgsql/${distro_codename} ${distro_codename} main
EOF
```

### 仓库地址

- 国际: https://repo.pigsty.io/apt/
- 中国: https://repo.pigsty.cc/apt/


--------

## GPG 签名

所有软件包均使用 GPG 签名：

- 指纹: `9592A7BC7A682E7333376E09E7935D8DB9BD8B20`
- 短 ID: `B9BD8B20`


--------

## 仓库策略

Pigsty 仓库遵循以下原则：

1. **补充性**：只收录 PGDG 仓库中不存在的扩展
2. **一致性**：扩展进入 PGDG 仓库后，Pigsty 仓库会移除或保持一致
3. **兼容性**：支持 PostgreSQL 13-18 多个大版本
4. **多平台**：支持 x86_64 和 aarch64 架构


--------

## 相关资源

- [Pigsty 扩展目录](https://pgext.cloud/zh/list)：查阅所有可用扩展
- [PGDG YUM 仓库](https://download.postgresql.org/pub/repos/yum/)
- [PGDG APT 仓库](https://apt.postgresql.org/pub/repos/apt/)

