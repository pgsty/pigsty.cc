---
title: 故障模型
weight: 1104
description: 哪些故障高可用可以解决，哪些不行？
icon: fa-solid fa-triangle-exclamation
module: [PIGSTY, PGSQL]
categories: [概念]
---


## 故障场景分析

### 单节点故障

#### 主库进程崩溃

**场景**：PostgreSQL 主库进程被 `kill -9` 或发生崩溃

```mermaid
flowchart LR
    subgraph Detection["🔍 故障检测"]
        D1["Patroni 检测进程消失"]
        D2["尝试重启 PostgreSQL"]
        D3["重启失败，停止续租"]
        D1 --> D2 --> D3
    end

    subgraph Failover["🔄 故障切换"]
        F1["Etcd 租约过期 (~10s)"]
        F2["触发选举，最新从库胜出"]
        F3["新主库提升"]
        F4["HAProxy 检测到新主库"]
        F1 --> F2 --> F3 --> F4
    end

    subgraph Impact["📊 影响"]
        I1["写服务中断: 15-30s"]
        I2["读服务: 短暂闪断"]
        I3["数据丢失: < 1MB 或 0"]
    end

    Detection --> Failover --> Impact

    style D1 fill:#ffcdd2
    style F3 fill:#c8e6c9
    style I1 fill:#fff9c4
```

#### Patroni 进程故障

**场景**：Patroni 进程被杀或崩溃

```mermaid
flowchart TB
    FAULT["Patroni 进程故障"]

    subgraph Detection["故障检测"]
        D1["Patroni 停止续租"]
        D2["PostgreSQL 继续运行<br/>(orphan 状态)"]
        D3["Etcd 租约倒计时"]
    end

    subgraph FailsafeOn["failsafe_mode: true"]
        FS1["检查是否能访问其他 Patroni"]
        FS2["✅ 可以 → 继续作为主库"]
        FS3["❌ 不能 → 自我降级"]
    end

    subgraph FailsafeOff["failsafe_mode: false"]
        FF1["租约过期后触发切换"]
        FF2["原主库降级"]
    end

    FAULT --> Detection
    Detection --> FailsafeOn
    Detection --> FailsafeOff

    style FAULT fill:#f44336,color:#fff
    style FS2 fill:#4CAF50,color:#fff
    style FS3 fill:#ff9800,color:#fff
```

#### 从库故障

**场景**：任意从库节点故障

**影响**：
- 只读流量重新分配到其他从库
- 如果无其他从库，主库承担只读流量
- ✅ 写服务完全不受影响

**恢复**：
- 节点恢复后 Patroni 自动启动
- 自动从主库重新同步
- 恢复为从库角色

-----------------

### 多节点故障

#### 三节点坏两个（2/3 故障）

**场景**：3 节点集群，2 个节点同时故障

```mermaid
flowchart TB
    subgraph Analysis["情况分析"]
        A1["Etcd 失去多数派 (1/3 < 2/3)"]
        A2["无法进行领导者选举"]
        A3["自动切换机制失效"]
    end

    subgraph Survivor["存活节点情况"]
        S1{"存活节点是?"}
        S2["🟢 主库<br/>failsafe_mode 下继续运行"]
        S3["🔵 从库<br/>无法自动提升"]
    end

    A1 --> A2 --> A3 --> S1
    S1 -->|"Primary"| S2
    S1 -->|"Replica"| S3

    style A1 fill:#ffcdd2
    style S2 fill:#c8e6c9
    style S3 fill:#fff9c4
```

**紧急恢复流程**：

```bash
# 1. 确认存活节点状态
patronictl -c /etc/patroni/patroni.yml list

# 2. 如果存活节点是从库，手动提升
pg_ctl promote -D /pg/data

# 3. 或者使用 pg-promote 脚本
/pg/bin/pg-promote

# 4. 修改 HAProxy 配置，直接指向存活节点
# 注释掉健康检查，硬编码路由

# 5. 恢复 Etcd 集群后，重新初始化
```

#### 两节点坏一个（1/2 故障）

**场景**：2 节点集群，主库故障

**问题**：
- Etcd 只有 2 节点，无多数派
- 无法完成选举
- 从库无法自动提升

**解决方案**：
1. 方案 1：添加外部 Etcd 仲裁节点
2. 方案 2：人工介入提升从库
3. 方案 3：使用 Witness 节点

**手动提升步骤**：
1. 确认主库确实不可恢复
2. 停止从库 Patroni：`systemctl stop patroni`
3. 手动提升：`pg_ctl promote -D /pg/data`
4. 直接启动 PostgreSQL：`systemctl start postgres`
5. 更新应用连接串或 HAProxy 配置

-----------------

### Etcd 集群故障

#### Etcd 单节点故障

**场景**：3 节点 Etcd 集群，1 节点故障

**影响**：
- ✅ Etcd 仍有多数派（2/3）
- ✅ 服务正常运行
- ✅ PostgreSQL HA 不受影响

**恢复**：
- 修复故障节点
- 使用 etcd-add 重新加入
- 或替换为新节点

#### Etcd 多数派丢失

**场景**：3 节点 Etcd 集群，2 节点故障

```mermaid
flowchart TB
    subgraph Impact["❌ 影响"]
        I1["Etcd 无法写入"]
        I2["Patroni 无法续租"]
        I3["failsafe_mode 激活"]
        I4["无法进行故障切换"]
    end

    subgraph PG["PostgreSQL 表现"]
        P1["🟢 主库: 继续运行"]
        P2["🔵 从库: 继续复制"]
        P3["✅ 新写入可以继续"]
    end

    subgraph Limit["⚠️ 限制"]
        L1["无法 switchover"]
        L2["无法 failover"]
        L3["配置变更无法生效"]
    end

    Impact --> PG --> Limit

    style I1 fill:#ffcdd2
    style P1 fill:#c8e6c9
    style L1 fill:#fff9c4
```

**恢复优先级**：
1. 恢复 Etcd 多数派
2. 验证 PostgreSQL 状态
3. 检查 Patroni 是否正常续租

-----------------

### 网络分区

#### 主库网络隔离

**场景**：主库与 Etcd/其他节点网络不通

```mermaid
flowchart LR
    subgraph Isolated["🔒 隔离侧 (主库)"]
        P1["Primary"]
        CHECK{"failsafe_mode<br/>检查"}
        CONT["继续运行"]
        DEMOTE["自我降级"]

        P1 --> CHECK
        CHECK -->|"能访问其他 Patroni"| CONT
        CHECK -->|"不能访问"| DEMOTE
    end

    subgraph Majority["✅ 多数派侧"]
        E[("Etcd")]
        P2["Replica"]
        ELECT["触发选举"]
        NEWPRI["新主库产生"]

        E --> ELECT --> P2 --> NEWPRI
    end

    Isolated -.->|"网络分区"| Majority

    style P1 fill:#ff9800,color:#fff
    style DEMOTE fill:#f44336,color:#fff
    style NEWPRI fill:#4CAF50,color:#fff
```

**脑裂防护**：
- Patroni failsafe_mode
- 旧主库自我检测
- fencing（可选）
- Watchdog（可选）

#### Watchdog 机制

**用于极端情况下的防护**：

```yaml
watchdog:
  mode: automatic                     # off|automatic|required
  device: /dev/watchdog
  safety_margin: 5                    # 安全边际（秒）
```

**工作原理**：
- Patroni 定期向 watchdog 设备写入
- 如果 Patroni 无响应，内核触发重启
- 确保旧主库不会继续服务
- 防止严重的脑裂场景

-----------------

## 最佳实践

### 生产环境检查清单

**基础设施**：
- [ ] 至少 3 个节点（PostgreSQL）
- [ ] 至少 3 个节点（Etcd，可与 PG 共用）
- [ ] 节点分布在不同故障域（机架/可用区）
- [ ] 网络延迟 < 10ms（同城）或 < 50ms（异地）
- [ ] 万兆网络（推荐）

**参数配置**：
- [ ] `pg_rto` 根据网络状况调整（15-60s）
- [ ] `pg_rpo` 根据业务需求设置（0 或 1MB）
- [ ] `pg_conf` 选择合适的模板（oltp/crit）
- [ ] `patroni_watchdog_mode` 评估是否需要

**监控告警**：
- [ ] Patroni 状态监控（领导者/复制延迟）
- [ ] Etcd 集群健康监控
- [ ] 复制延迟告警（lag > 1MB）
- [ ] failsafe_mode 激活告警

**灾备演练**：
- [ ] 定期执行故障切换演练
- [ ] 验证 RTO/RPO 是否符合预期
- [ ] 测试备份恢复流程
- [ ] 验证监控告警有效性

### 常见问题排查

**故障切换失败**：
```bash
# 检查 Patroni 状态
patronictl -c /etc/patroni/patroni.yml list

# 检查 Etcd 集群健康
etcdctl endpoint health

# 检查复制延迟
psql -c "SELECT * FROM pg_stat_replication"

# 查看 Patroni 日志
journalctl -u patroni -f
```

**脑裂场景处理**：
```bash
# 1. 确认哪个是"真正"的主库
psql -c "SELECT pg_is_in_recovery()"

# 2. 停止"错误"的主库
systemctl stop patroni

# 3. 使用 pg_rewind 同步
pg_rewind --target-pgdata=/pg/data --source-server="host=<true_primary>"

# 4. 重启 Patroni
systemctl start patroni
```

