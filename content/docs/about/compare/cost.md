---
title: 成本对比
weight: 171
description: 本文提供了一组成本数据，供您评估 Pigsty 自建，使用云数据库 RDS 所需的成本，以及常规的 DBA 薪酬参考。
icon: fa-solid fa-sack-dollar
module: [PIGSTY]
categories: [参考]
---


--------------------

## 总体概览

|              EC2               |    核·月    |              RDS               |   核·月   |
|:------------------------------:|:---------:|:------------------------------:|:-------:|
|     DHH 自建核月价格（192C 384G）      | **25.32** |         初级开源数据库DBA参考工资         | 15K/人·月 |
|    IDC自建机房（独占物理机: 64C384G）     | **19.53** |         中级开源数据库DBA参考工资         | 30K/人·月 |
|       IDC自建机房（容器，超卖500%）       |     7     |         高级开源数据库DBA参考工资         | 60K/人·月 |
|    UCloud 弹性虚拟机（8C16G，有超卖）     |    25     |          ORACLE 数据库授权          |  10000  |
|     阿里云 弹性服务器 2x内存（独占无超卖）      |    107    |      阿里云 RDS PG 2x内存（独占）       |   260   |
|     阿里云 弹性服务器 4x内存（独占无超卖）      |    138    |      阿里云 RDS PG 4x内存（独占）       |   320   |
|     阿里云 弹性服务器 8x内存（独占无超卖）      |    180    |      阿里云 RDS PG 8x内存（独占）       |   410   |
| AWS C5D.METAL 96C 200G (按月无预付) |    100    | AWS RDS PostgreSQL db.T2 (2x)  |   440   |
| AWS C5D.METAL 96C 200G (预付三年)  |    80     | AWS RDS PostgreSQL db.M5 (4x)  |   611   |
| AWS C7A.METAL 192C 384G (预付三年) |   104.8   | AWS RDS PostgreSQL db.R6G (8x) |   786   |
{.full-width}


--------------------

## RDS成本参考

| 付费模式            | 价格              | 折合每年（万¥）  |
|-----------------|-----------------|-----------|
| IDC自建（单物理机）     | ¥7.5w / 5年      | 1.5       |
| IDC自建（2～3台组HA）  | ¥15w / 5年       | 3.0 ~ 4.5 |
| 阿里云 RDS 按需      | ¥87.36/时        | 76.5      |
| 阿里云 RDS 月付（基准）  | ¥4.2w / 月       | 50        |
| 阿里云 RDS 年付（85折） | ¥425095 / 年     | 42.5      |
| 阿里云 RDS 3年付（5折） | ¥750168 / 3年    | 25        |
| AWS 按需          | $25,817 / 月     | 217       |
| AWS 1年不预付       | $22,827 / 月     | 191.7     |
| AWS 3年全预付       | 12w$ + 17.5k$/月 | 175       |
| AWS 中国/宁夏按需     | ¥197,489 / 月    | 237       |
| AWS 中国/宁夏1年不预付  | ¥143,176 / 月    | 171       |
| AWS 中国/宁夏3年全预付  | ¥647k + 116k/月  | 160.6     |
{.full-width}

我们可以对比一下自建与云数据库的成本差异：

| 方式                                                                 | 折合每年（万元）  |
|--------------------------------------------------------------------|-----------|
| IDC托管服务器 64C / 384G / 3.2TB NVME SSD 660K IOPS (2～3台)              | 3.0 ~ 4.5 |
| 阿里云 RDS PG 高可用版 pg.x4m.8xlarge.2c, 64C / 256GB / 3.2TB ESSD PL3    | 25 ～ 50   |
| AWS RDS PG 高可用版 db.m5.16xlarge, 64C / 256GB / 3.2TB io1 x 80k IOPS | 160 ～ 217 |
{.full-width}



--------------------

## ECS 成本参考

### 排除 NVMe SSD / ESSD PL3 后的纯算力价格对比

以阿里云为例，纯算力包月模式的价格是自建基准的 5 ～ 7 倍，预付五年的价格是自建的 2 倍

|    付费模式    | 单价（¥/核·月） | 相对于标准价格 |   自建溢价倍率   |
|:----------:|:---------:|:-------:|:----------:|
| 按量付费（1.5倍） |   ¥ 202   |  160 %  | 9.2 ~ 11.2 |
|  包月（标准价格）  |   ¥ 126   |  100 %  | 5.7 ～ 7.0  |
| 预付一年（65折）  |  ¥ 83.7   |  66 %   | 3.8 ～ 4.7  |
| 预付二年（55折）  |  ¥ 70.6   |  56 %   | 3.2 ~ 3.9  |
| 预付三年（44折）  |  ¥ 55.1   |  44 %   | 2.5 ~ 3.1  |
| 预付四年（35折）  |   ¥ 45    |  35 %   | 2.0 ~ 2.5  |
| 预付五年（30折）  |  ¥ 38.5   |  30 %   | 1.8 ~ 2.1  |
|            |           |         |            |
| DHH @ 2023 |  ¥ 22.0   |         |            |
| 探探 IDC 自建  |  ¥ 18.0   |         |            |
{.full-width}


### 含 NVMe SSD / ESSD PL3 情况下的等效价格对比

包含常用规格后的 NVMe SSD 规格之后，纯算力包月模式的价格是自建基准的 11 ～ 14 倍，预付五年的价格是自建的 9 倍左右。

|    付费模式    | 单价（¥/核·月） | + 40GB ESSD PL3 |   自建溢价比例    |
|:----------:|:---------:|:---------------:|:-----------:|
| 按量付费（1.5倍） |   ¥ 202   |      ¥ 362      | 14.3 ～ 18.6 |
|  包月（标准价格）  |   ¥ 126   |      ¥ 286      | 11.3 ～ 14.7 |
| 预付一年（65折）  |  ¥ 83.7   |      ¥ 244      | 9.6 ～ 12.5  |
| 预付二年（55折）  |  ¥ 70.6   |      ¥ 230      | 9.1 ～ 11.8  |
| 预付三年（44折）  |  ¥ 55.1   |      ¥ 215      | 8.5 ～ 11.0  |
| 预付四年（35折）  |   ¥ 45    |      ¥ 205      | 8.1 ～ 10.5  |
| 预付五年（30折）  |  ¥ 38.5   |      ¥ 199      | 7.9 ～ 10.2  |
|            |           |                 |             |
| DHH @ 2023 |  ¥ 25.3   |                 |             |
| 探探 IDC 自建  |  ¥ 19.5   |                 |             |
{.full-width}

> DHH案例：192核配12.8TB Gen4 SSD (1c:66)；探探案例： 64核配3.2T Gen3 MLC SSD (1c:50)。
>
> 云上价格每核配比40GB ESSD PL3（1核:4x内存:40x磁盘）计算。


--------------------

## EBS成本参考

| **评估因素** | **本地** **PCI-E NVME SSD**                            | **Aliyun ESSD PL3**                                                                                                                                                                                             | **AWS io2 Block Express**                                                                                                                                           |
|----------|------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 容量       | 32TB                                                 | 32 TB                                                                                                                                                                                                           | 64 TB                                                                                                                                                               |
| IOPS     | 4K随机读：600K ~ 1.1M 4K随机写 200K ~ 350K                  | 4K随机读：最大 1M                                                                                                                                                                                                     | 16K随机IOPS： 256K                                                                                                                                                     |
| 延迟       | 4K随机读：75µs 4K随机写：15µs                                | 4K 随机读： 200µs                                                                                                                                                                                                   | 随机IO：500µs 上下文推断为16K                                                                                                                                                |
| 可靠性      | UBER < 1e-18，折合18个9 MTBF: 200万小时 5DWPD，持续三年          | 数据可靠性 9个9 [存储与数据可靠性](https://help.aliyun.com/document_detail/476273.html)                                                                                                                                       | **持久性**：99.999%，5个9 （0.001% 年故障率） [io2 说明](https://aws.amazon.com/cn/blogs/storage/achieve-higher-database-performance-using-amazon-ebs-io2-block-express-volumes/) |
| 成本       | **16 ¥/TB·****月** ( 5年均摊 / 3.2T MLC ) 5 年质保，¥3000 零售 | **3200¥/TB·****月** （原价 6400¥，包月4000¥） 3年预付整体打5折才有此价格                                                                                                                                                            | **1900 ¥/TB·****月** 使用最大规格 65536GB 256K IOPS 最优惠状态                                                                                                                  |
| SLA      | 5年质保 出问题直接换新                                         | [Aliyun RDS SLA](https://terms.aliyun.com/legal-agreement/terms/suit_bu1_ali_cloud/suit_bu1_ali_cloud201910310944_35008.html?spm=a2c4g.11186623.0.0.270e6e37n8Exh5) 可用性 99.99%: 月费 15% 99%: 月费 30% 95%: 月费 100% | [Amazon RDS SLA](https://d1.awsstatic.com/legal/amazonrdsservice/Amazon-RDS-Service-Level-Agreement-Chinese.pdf) 可用性 99.95%: 月费 15% 99%: 月费 25% 95%: 月费 100%        |
{.full-width}

--------------------

## S3成本参考


|                                                          Date                                                          |    $/GB·月    |  ¥/TB·5年  |    HDD ¥/TB     | SSD ¥/TB |
|:----------------------------------------------------------------------------------------------------------------------:|:------------:|:---------:|:---------------:|:--------:|
|                               [2006](https://aws.amazon.com/cn/blogs/aws/amazon_s3/).03                                |    0.150     |   63000   |      2800       |          |
|          [2010](http://aws.typepad.com/aws/2010/11/what-can-i-say-another-amazon-s3-price-reduction.html).11           |    0.140     |   58800   |      1680       |          |
|              [2012](http://aws.typepad.com/aws/2012/11/amazon-s3-price-reduction-december-1-2012.html).12              |    0.095     |   39900   |       420       |  15400   |
| [2014](http://aws.typepad.com/aws/2014/03/aws-price-reduction-42-ec2-s3-rds-elasticache-and-elastic-mapreduce.html).04 |    0.030     |   12600   |       371       |   9051   |
|             [2016](https://aws.amazon.com/ru/blogs/aws/aws-storage-update-s3-glacier-price-reductions/).12             |    0.023     |   9660    |       245       |   3766   |
|                                    [2023](https://aws.amazon.com/cn/s3/pricing).12                                     |    0.023     |   9660    |       105       |   280    |
|                                                                                                                        |              |           |                 |          |
|                                                       **其他参考价**                                                        |  **高性能存储**   | **顶配底折价** | **与采购NVMe SSD** | **价格参考** |
|                                                       S3 Express                                                       |    0.160     |   67200   |     DHH 12T     |   1400   |
|                                                        EBS io2                                                         | 0.125 + IOPS |  114000   |  Shannon 3.2T   |   900    |
{.full-width}

--------------------

## 下云合集

曾几何时，“**上云**“近乎成为技术圈的政治正确，整整一代应用开发者的视野被云遮蔽。就让我们用实打实的数据分析与亲身经历，讲清楚公有云租赁模式的价值与陷阱 —— 在这个降本增效的时代中，供您借鉴与参考 —— 请看 《[云计算泥石流：合订本](/blog/cloud/exit/)》

**云基础资源篇**

- [重新拿回计算机硬件的红利](https://mp.weixin.qq.com/s/1OSRcBfd58s0tgZTUZHB9g)

- [扒皮对象存储：从降本到杀猪](https://mp.weixin.qq.com/s/HathxpQ_KUuqxyrtyCDzWw)

- [云盘是不是杀猪盘？](https://mp.weixin.qq.com/s/UxjiUBTpb1pRUfGtR9V3ag)

- [云数据库是不是智商税](https://mp.weixin.qq.com/s/LefEAXTcBH-KBJNhXNoc7A)

- [垃圾腾讯云CDN：从入门到放弃](https://mp.weixin.qq.com/s/ANFnbDXwuhKI99fgYRZ9ug)

-------------

**云商业模式篇**

- [FinOps终点是下云](https://mp.weixin.qq.com/s/Yp_PU8nmyK-NVq0clD98RQ)

- [云计算为啥还没挖沙子赚钱？](https://mp.weixin.qq.com/s/2w0bLJI7TvUNp1tzLYbvsA)

- [云SLA是不是安慰剂？](https://mp.weixin.qq.com/s/LC5jAhuVObRcrTLxI1FUQA)

- [杀猪盘真的降价了吗？](https://mp.weixin.qq.com/s/TksQ108v_nGaW11-87Es3A)

- [范式转移：从云到本地优先](https://mp.weixin.qq.com/s/Yp6L0hh4b4HuJQRPD3aJYw)

-------------

**下云奥德赛篇**

- [下云高可用的秘诀：拒绝智力自慰](https://mp.weixin.qq.com/s/yIVal-9U6_TXX-dZpVtjBg)

- [半年下云省千万：DHH下云FAQ答疑](https://mp.weixin.qq.com/s/xaa079P4DRCz0hzNovGoOA)

- [是时候放弃云计算了吗？](https://mp.weixin.qq.com/s/CicctyvV1xk5B-AsKfzPjw)

- [下云奥德赛](https://mp.weixin.qq.com/s/H2S3TV-AsqS43A5Hh-XMhQ)

-------------

**云故障复盘篇**

- [从降本增笑到真的降本增效](https://mp.weixin.qq.com/s/FIOB_Oqefx1oez1iu7AGGg)

- [我们能从阿里云史诗级故障中学到什么](https://mp.weixin.qq.com/s/OIlR0rolEQff9YfCpj3wIQ)

- [阿里云周爆：云数据库管控又挂了](https://mp.weixin.qq.com/s/3F1ud-tWB3eymu1-dxSHMA)

- [【阿里】云计算史诗级大翻车来了](https://mp.weixin.qq.com/s/cTge3xOlIQCALQc8Mi-P8w)


-------------

**RDS翻车篇**

- [更好的开源RDS替代：Pigsty](https://mp.weixin.qq.com/s/-E_-HZ7LvOze5lmzy3QbQA)

- [驳《再论为什么你不应该招DBA》](https://mp.weixin.qq.com/s/CMRrqI2yBWlNbACHpNgL1g)

- [云RDS：从删库到跑路](https://mp.weixin.qq.com/s/AGEW1iHQkQy4NQyYC2GonQ)

- [数据库应该放入K8S里吗？](https://mp.weixin.qq.com/s/4a8Qy4O80xqsnytC4l9lRg)

- [把数据库放入Docker是一个好主意吗？](https://mp.weixin.qq.com/s/kFftay1IokBDqyMuArqOpg)


-------------

**云厂商画像篇**

- [互联网技术大师速成班 ](https://mp.weixin.qq.com/s/8ZffsCgchv8LH5ujv0lRGQ)【转载】

- [门内的国企如何看门外的云厂商](https://mp.weixin.qq.com/s/qSTEf9txjHNTHeEFv3NkWg)【转载】

- [卡在政企客户门口的阿里云](https://mp.weixin.qq.com/s/1dse1KSCq2xG-QaL1JzZ8Q)【转载】

- [互联网故障背后的草台班子们](https://mp.weixin.qq.com/s/OxhhJ4U1P43di_eaE1uGPw)【转载】

- [云厂商眼中的客户：又穷又闲又缺爱](https://mp.weixin.qq.com/s/y9IradwxTxOsUGcOHia1XQ)【转载】

