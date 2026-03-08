---
title: "PgBouncer 编译与安装"
linkTitle: "安装"
weight: 40
description: "PgBouncer 编译与安装说明"
icon: fa-solid fa-cloud-arrow-down
module: [PGBOUNCER]
categories: [教程]
---

> 原始页面： <https://www.pgbouncer.org/install.html>

--------

## 编译

PgBouncer 的编译依赖以下组件：

* [GNU Make] 3.81+
* [Libevent] 2.0+
* [pkg-config]
* [OpenSSL] 1.0.1+（TLS 支持）
* （可选）[c-ares]，作为 Libevent 内置 evdns 的替代方案
* （可选）LDAP 库
* （可选）PAM 库

[GNU Make]: https://www.gnu.org/software/make/
[Libevent]: http://libevent.org/
[pkg-config]: https://www.freedesktop.org/wiki/Software/pkg-config/
[OpenSSL]: https://www.openssl.org/
[c-ares]: http://c-ares.haxx.se/

安装依赖后，执行以下命令：

    $ ./configure --prefix=/usr/local
    $ make
    $ make install

如果从 Git 构建或在 Windows 上构建，请参阅下方的单独构建说明。

--------

## DNS 查询支持

PgBouncer 在每次连接时执行主机名查询，而非仅在配置加载时查询一次。这需要异步 DNS 实现。下表列出了支持的后端及其探测顺序：

| 后端                         | 并行  | EDNS0 (1) | /etc/hosts | SOA 查询 (2) | 备注                                  |
|------------------------------|-------|-----------|------------|--------------|---------------------------------------|
| c-ares                       | 是    | 是        | 是         | 是           | <=1.10 版本中 IPv6+CNAME 存在缺陷      |
| evdns, libevent 2.x          | 是    | 否        | 是         | 否           | 不检查 /etc/hosts 更新                |
| getaddrinfo_a, glibc 2.9+    | 是    | 是 (3)    | 是         | 否           | 非 glibc 环境不可用                    |
| getaddrinfo, libc            | 否    | 是 (3)    | 是         | 否           | 需要 pthreads                         |

1. 若需要一个主机名对应 8 个以上 IP 地址，则需要 EDNS0 支持。
2. SOA 查询用于在区域序列号变更时重新检查主机名。
3. 要启用 EDNS0，请在 `/etc/resolv.conf` 中添加 `options edns0`。

c-ares 是功能最完整的实现，推荐在大多数场景和二进制打包中使用（前提是有足够新的版本可用）。Libevent 内置的 evdns 在列出的限制条件下也适用于许多场景。其他后端目前基本属于遗留选项，不再接受太多测试。

默认情况下，若系统中存在 c-ares，则会优先使用它。可通过 `configure --with-cares` 强制使用，或通过 `--without-cares` 禁用。若不使用 c-ares（未找到或被禁用），则使用 Libevent。指定 `--disable-evdns` 可禁用 Libevent 的 evdns，并回退到基于 libc 的实现。

--------

## PAM 认证

要启用 PAM 认证，`./configure` 提供了 `--with-pam` 标志（默认值为 no）。编译时启用 PAM 支持后，将新增一个全局认证类型 `pam`，可通过 PAM 对用户进行鉴权。

--------

## LDAP 认证

要启用 LDAP 认证，`./configure` 提供了 `--with-ldap` 标志（默认值为 no）。编译时启用 LDAP 支持后，将新增一个全局认证类型 `ldap`，可通过 LDAP 对用户进行鉴权。

--------

## systemd 集成

要启用 systemd 集成，请使用 `configure` 选项 `--with-systemd`。这将允许使用 `Type=notify`（若使用 systemd 253 或更高版本，则可使用 `Type=notify-reload`）以及 socket 激活。示例请参见 `etc/pgbouncer.service` 和 `etc/pgbouncer.socket`。

--------

## 从 Git 构建

从 Git 构建 PgBouncer 需要在运行 `configure` 之前先生成头文件和配置文件：

	$ git clone https://github.com/pgbouncer/pgbouncer.git
	$ cd pgbouncer
	$ ./autogen.sh
	$ ./configure
	$ make
	$ make install

默认情况下，所有文件将安装在 `/usr/local` 下。可向 `configure` 提供一个或多个命令行选项。运行 `./configure --help` 可列出所有可用选项及用于自定义配置的环境变量。

额外需要的软件包：autoconf、automake、libtool、pandoc

--------

## 测试

如需了解如何运行测试，请参阅 [**测试目录中的 `README.md` 文件**][1]。

[1]: https://github.com/pgbouncer/pgbouncer/blob/master/test/README.md

--------

## 在 Windows 上构建

Windows 上唯一受支持的构建环境是 MinGW。不支持 Cygwin 和 Visual $ANYTHING。

在 MinGW 上构建，按照常规方式执行：

	$ ./configure
	$ make

如果从 Unix 交叉编译：

	$ ./configure --host=i586-mingw32msvc

LDAP 构建选项目前不支持 Windows。

--------

## 在 Windows 上运行

从命令行运行的方式与通常相同，但 `-d`（守护进程化）、`-R`（重启）和 `-u`（切换用户）选项无法使用。

要将 PgBouncer 作为 Windows 服务运行，需要配置 `service_name` 参数以设置服务名称。然后执行：

	$ pgbouncer -regservice config.ini

要卸载服务：

	$ pgbouncer -unregservice config.ini

要使用 Windows 事件日志，请在配置文件中设置 `syslog = 1`。但在此之前，需要先注册 `pgbevent.dll`：

	$ regsvr32 pgbevent.dll

要取消注册，执行：

	$ regsvr32 /u pgbevent.dll
