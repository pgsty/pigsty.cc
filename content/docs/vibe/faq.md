---
title: VIBE FAQ
weight: 4860
description: VIBE 模块的常见问题解答，涵盖部署、配置、使用等方面的常见问题。
icon: fas fa-question-circle
module: [VIBE]
categories: [FAQ]
---

本文档汇总了 VIBE 模块使用过程中的常见问题和解决方案。


--------

## 部署问题

### 如何使用 VIBE 配置模板？

```bash
# 下载 Pigsty
curl https://repo.pigsty.io/get | bash

# 使用 vibe 配置模板
./configure -c vibe

# 修改密码后部署
vi pigsty.yml
./deploy.yml
./juice.yml   # 可选
./vibe.yml
```

### 部署时报错 "code-server package not found"

确保已正确配置软件仓库：

```bash
# 检查仓库是否可用
yum repolist          # EL 系统
apt update            # Debian/Ubuntu

# 重新刷新仓库缓存
./infra.yml -t repo
```

### JupyterLab 安装失败

检查 Python 虚拟环境是否存在：

```bash
# 检查 venv
ls -la /data/venv/bin/python

# 如不存在，手动创建
python3 -m venv /data/venv

# 重新执行剧本
./vibe.yml -l <host> -t jupyter
```


--------

## 访问问题

### 无法访问 Code-Server

1. **检查服务状态**
   ```bash
   systemctl status code-server
   ```

2. **检查端口监听**
   ```bash
   ss -tlnp | grep 8443
   ```

3. **检查 Nginx 配置**
   ```bash
   nginx -t
   systemctl status nginx
   ```

4. **检查防火墙**
   ```bash
   firewall-cmd --list-all
   ```

### 无法访问 JupyterLab

1. **检查服务状态**
   ```bash
   systemctl status jupyter
   ```

2. **检查端口监听**
   ```bash
   ss -tlnp | grep 8888
   ```

3. **验证 Token**

   确保使用正确的 Token 访问，默认为 `Jupyter.Lab`。

### WebSocket 连接失败

JupyterLab 和 Code-Server 都依赖 WebSocket。确保 Nginx 配置正确：

```nginx
proxy_http_version 1.1;
proxy_set_header Upgrade $http_upgrade;
proxy_set_header Connection "upgrade";
```

检查 `infra_portal` 配置是否启用了 WebSocket：

```yaml
infra_portal:
  code: { domain: code.pigsty, endpoint: "127.0.0.1:8443", websocket: true }
  jupyter: { domain: jupyter.pigsty, endpoint: "127.0.0.1:8888", websocket: true }
```


--------

## 密码和认证

### 如何修改 Code-Server 密码？

**方法一：直接修改配置**
```bash
vi /data/code/code-server/config.yaml
# 修改 password 字段
systemctl restart code-server
```

**方法二：使用 Ansible**
```bash
# 修改 pigsty.yml 中的 code_password
./vibe.yml -l <host> -t code_config,code_launch
```

### 如何修改 JupyterLab Token？

**方法一：直接修改配置**
```bash
vi /data/jupyter/jupyter_config.py
# 修改 c.ServerApp.token
systemctl restart jupyter
```

**方法二：使用 Ansible**
```bash
# 修改 pigsty.yml 中的 jupyter_password
./vibe.yml -l <host> -t jupyter_config,jupyter_launch
```

### 忘记密码怎么办？

查看配置文件中的密码：

```bash
# Code-Server 密码
grep password /data/code/code-server/config.yaml

# JupyterLab Token
grep token /data/jupyter/jupyter_config.py
```


--------

## Claude Code 问题

### Claude Code 无法使用

1. **检查 API Key 是否配置**
   ```bash
   echo $ANTHROPIC_API_KEY
   cat ~/.claude.json
   ```

2. **配置 API Key**
   ```bash
   export ANTHROPIC_API_KEY=sk-ant-xxx
   # 或
   claude config set apiKey sk-ant-xxx
   ```

### Claude Code 无法连接 API

1. **检查网络**
   ```bash
   curl -I https://api.anthropic.com
   ```

2. **检查代理设置**
   ```bash
   echo $HTTP_PROXY
   echo $HTTPS_PROXY
   ```

### Claude Code 监控数据不显示

检查 OpenTelemetry 端点是否可达：

```bash
# 检查 VictoriaMetrics
curl http://127.0.0.1:8428/api/v1/status/buildinfo

# 检查 VictoriaLogs
curl http://127.0.0.1:9428/select/logsql/stats_query
```

确认 `~/.claude/settings.json` 配置正确。


--------

## 扩展和插件

### Code-Server 扩展安装失败

1. **检查网络连接**
   ```bash
   curl -I https://open-vsx.org
   ```

2. **切换扩展市场**
   ```yaml
   code_gallery: microsoft  # 切换到微软市场
   ```

   重新部署：
   ```bash
   ./vibe.yml -l <host> -t code_config,code_launch
   ```

3. **手动安装 VSIX**
   ```bash
   code-server --install-extension /path/to/extension.vsix
   ```

### 如何使用 GitHub Copilot？

GitHub Copilot 不支持 Code-Server。可以考虑：

- 使用 Claude Code 作为 AI 编程助手
- 使用 Codeium 等支持 Code-Server 的 AI 工具

### JupyterLab 扩展安装失败

```bash
# 激活虚拟环境
source /data/venv/bin/activate

# 检查 JupyterLab 版本
jupyter --version

# 安装扩展
pip install jupyterlab-git

# 重启服务
systemctl restart jupyter
```


--------

## Python 和 Jupyter

### JupyterLab 无法启动

1. **检查虚拟环境**
   ```bash
   /data/venv/bin/python --version
   /data/venv/bin/jupyter --version
   ```

2. **重新安装 JupyterLab**
   ```bash
   /data/venv/bin/pip install --upgrade jupyterlab ipykernel
   ```

3. **检查日志**
   ```bash
   journalctl -u jupyter -xe
   ```

### 如何安装额外的 Python 包？

```bash
# 激活虚拟环境
source /data/venv/bin/activate

# 安装包
pip install numpy pandas matplotlib

# 使用清华镜像
pip install -i https://pypi.tuna.tsinghua.edu.cn/simple numpy pandas
```

### 如何添加新的 Jupyter Kernel？

```bash
# 安装 ipykernel
pip install ipykernel

# 注册内核
python -m ipykernel install --user --name myenv --display-name "Python (myenv)"

# 列出内核
jupyter kernelspec list
```

### 如何连接 PostgreSQL？

```python
import psycopg2

conn = psycopg2.connect(
    'postgres://dbuser_dba:DBUser.DBA@10.10.10.10:5432/meta'
)
cursor = conn.cursor()
cursor.execute('SELECT version()')
print(cursor.fetchone())
conn.close()
```


--------

## 性能和资源

### Code-Server 卡顿

1. **检查内存使用**
   ```bash
   free -h
   ps aux | grep code-server
   ```

2. **禁用不必要的扩展**

   在 Code-Server 中禁用不常用的扩展。

3. **增加系统资源**

   考虑增加虚拟机内存。

### JupyterLab Notebook 运行缓慢

1. **检查内核资源**
   ```bash
   top
   htop
   ```

2. **清理 Notebook 输出**

   清除 Cell 输出可以减少内存占用。

3. **重启内核**

   定期重启内核释放内存。

### 磁盘空间不足

```bash
# 检查磁盘使用
df -h

# 清理日志
journalctl --vacuum-time=7d

# 清理 pip 缓存
pip cache purge
```


--------

## JuiceFS 集成

### 工作目录不可用

1. **检查 JuiceFS 挂载**
   ```bash
   mount | grep juicefs
   df -h /fs
   ```

2. **重新挂载**
   ```bash
   ./juice.yml -l <host>
   ```

### 文件系统性能差

1. **检查网络延迟**
   ```bash
   ping <postgresql-host>
   ```

2. **检查 PostgreSQL 状态**
   ```bash
   psql postgres://... -c "SELECT 1"
   ```


--------

## 安全问题

### 如何限制访问？

1. **配置防火墙**
   ```bash
   # 只允许特定 IP
   firewall-cmd --add-rich-rule='rule family="ipv4" source address="10.0.0.0/8" port port="443" protocol="tcp" accept'
   ```

2. **使用 Nginx 访问控制**
   ```nginx
   location /code/ {
       allow 10.0.0.0/8;
       deny all;
       ...
   }
   ```

### 默认密码是否安全？

**不安全！** 生产环境务必修改：

- `code_password`：默认 `Code.Server`
- `jupyter_password`：默认 `Jupyter.Lab`

```yaml
code_password: 'YourStrongPassword!'
jupyter_password: 'YourStrongToken!'
```


--------

## 支持平台

### 支持哪些操作系统？

| 系统     | 版本              |
|:-------|:----------------|
| EL     | 8、9、10         |
| Ubuntu | 20.04、22.04、24.04 |
| Debian | 11、12、13       |
{.full-width}

### 支持哪些架构？

- x86_64 (AMD64)
- ARM64 (AArch64)

### Ansible 版本要求？

最低版本：Ansible 2.9+


