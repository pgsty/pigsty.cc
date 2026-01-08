---
title: 部署
weight: 350
description: 在严肃生产环境中进行多节点、高可用的 Pigsty 规划、准备与部署工作。
icon: fas fa-boxes-packing
module: [PIGSTY]
categories: [教程]
---


与 [**快速上手**](/docs/setup/) 不同，严肃企业生产环境 Pigsty 部署需要更多 [**架构规划**](/docs/deploy/planning) 与 [**准备工作**](/docs/deploy/prepare)。

本章将帮助您理解 Pigsty 的完整部署流程，并提供生产环境部署的最佳实践建议。

--------

我们建议您在真实的生产环境部署之前，使用 Pigsty 提供的 [**沙箱环境**](/docs/deploy/sandbox) 进行测试与演练，确保对部署流程有充分的了解。
您可以使用 [**Vagrant**](/docs/deploy/vagrant/) 在本地快速创建一个四节点的 Pigsty 沙箱环境用于测试，或者利用 [**Terraform**](/docs/deploy/terraform/) 在云端置备一个更大规模的仿真环境。

[![pigsty-sandbox](/img/pigsty/sandbox.png)](/docs/concept/arch)

对于生产环境部署，您通常需要准备至少三个 [**节点**](/docs/deploy/prepare) 以实现高可用。您需要进一步了解 Pigsty 的 [**相关概念**](/docs/concept) 以及常见操作的管理 SOP。
包括如何通过 [**参数配置**](/docs/setup/config) 进行定制，如何执行 [**Ansible 剧本**](/docs/setup/playbook) 进行部署。以及如何加固部署的 [**安全性**](/docs/deploy/security) 以满足企业合规要求。


