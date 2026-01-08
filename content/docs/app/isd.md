---
title: NOAA ISD 全球气象站历史数据查询
linkTitle: NOAA ISD 气象数据
weight: 665
date: 2021-01-04
description: 以ISD数据集为例，展现如何将数据导入数据库中
module: [APP]
categories: [参考]
---

如果您拥有数据库后不知道干点什么，不妨参试试这个开源项目：[Vonng/isd](https://github.com/Vonng/isd)

您可以直接复用监控系统Grafana，以交互式的方式查阅近30000个地面气象站过去120年间的亚小时级气象数据。

这是一个功能完成的数据应用，可以查询全球30000个地表气象站从1901年来的气象观测记录。

项目地址：[https://github.com/Vonng/isd](https://github.com/Vonng/isd)

在线Demo地址：[https://demo.pigsty.cc/d/isd-overview](https://demo.pigsty.cc/d/isd-overview)

[![isd-overview.jpg](/img/docs/app/isd-overview.jpg)](https://demo.pigsty.cc/d/isd-overview)


## 快速上手

**克隆本仓库**

```bash
git clone https://github.com/Vonng/isd.git; cd isd;
```

**准备一个 PostgreSQL 实例**

该 PostgreSQL 实例应当启用了 PostGIS 扩展。使用 `PGURL` 环境变量传递数据库连接信息：

```bash
# Pigsty 默认使用的管理员账号是 dbuser_dba，密码是 DBUser.DBA
export PGURL=postgres://dbuser_dba:DBUser.DBA@127.0.0.1:5432/meta?sslmode=disable
psql "${PGURL}" -c 'SELECT 1'  # 检查连接是否可用
```

**获取并导入ISD气象站元数据**

这是一份每日更新的气象站元数据，包含了气象站的经纬度、海拔、名称、国家、省份等信息，使用以下命令下载并导入。

```bash
make reload-station   # 相当于先下载最新的Station数据再加载：get-station + load-station
```

**获取并导入最新的 `isd.daily` 数据**

`isd.daily` 是一个每日更新的数据集，包含了全球各气象站的日观测数据摘要，使用以下命令下载并导入。
请注意，直接从 NOAA 网站下载的原始数据需要经过**解析**方可入库，所以你需要下载或构建一个 ISD 数据 Parser。

```bash
make get-parser       # 从 Github 下载 Parser 二进制，当然你也可以用 make build 直接用 go 构建。
make reload-daily     # 下载本年度最新的 isd.daily 数据并导入数据库中
```

**加载解析好的 CSV 数据集**

ISD Daily 数据集有一些脏数据与[重复数据](https://github.com/Vonng/isd/blob/master/doc/isd-daily-caveat.md)，如果你不想手工解析处理清洗，这里也提供了一份解析好的稳定CSV数据集。

该数据集包含了截止到 2023-06-24 的 `isd.daily` 数据，你可以直接下载并导入 PostgreSQL 中，不需要 Parser，

```bash
make get-stable       # 从 Github 上获取稳定的 isd.daily 历史数据集。
make load-stable      # 将下载好的稳定历史数据集加载到 PostgreSQL 数据库中。
```





## 更多数据

ISD数据集有两个部分是每日更新的，气象站元数据，以及最新年份的 `isd.daily` （如 2023 年的 Tarball）。

你可以使用以下命令下载并刷新这两个部分。如果数据集没有更新，那么这些命令不会重新下载同样的数据包

```bash
make reload           # 实际上是：reload-station + reload-daily
```

你也可以使用以下命令下载并加载特定年份的 `isd.daily` 数据：

```bash
bin/get-daily  2022                   # 获取 2022 年的每日气象观测摘要 (1900-2023)
bin/load-daily "${PGURL}" 2022        # 加载 2022 年的每日气象观测摘要 (1900-2023) 
```

除了每日摘要 `isd.daily`， ISD 还提供了一份更详细的亚小时级原始观测记录 `isd.hourly`，下载与加载的方式与前者类似：

```bash
bin/get-hourly  2022                  # 下载特定某一年的小时级观测记录（例如2022年，可选 1900-2023）
bin/load-hourly "${PGURL}" 2022       # 加载特定某一年的小时级观测记录 
```


## 数据

### 数据集概要

ISD提供了四个数据集：亚小时级原始观测数据，每日统计摘要数据，月度统计摘要，年度统计摘要

| 数据集         | 备注                          |
|-------------|-----------------------------|
| ISD Hourly  | 亚小时级观测记录                    |
| ISD Daily   | 每日统计摘要                      |
| ISD Monthly | 没有用到，因为可以从 `isd.daily` 计算生成 |
| ISD Yearly  | 没有用到，因为可以从 `isd.daily` 计算生成 |


**每日摘要数据集**

- 压缩包大小 2.8GB (截止至 2023-06-24)
- 表大小 24GB，索引大小 6GB，PostgreSQL 中总大小约为 30GB
- 如果启用了 timescaledb 压缩，总大小可以压缩到 4.5 GB。

**亚小时级观测数据级**

- 压缩包总大小 117GB
- 灌入数据库后表大小 1TB+ ，索引大小 600GB+，总大小 1.6TB



### 数据库模式


**气象站元数据表**

```sql
CREATE TABLE isd.station
(
    station    VARCHAR(12) PRIMARY KEY,
    usaf       VARCHAR(6) GENERATED ALWAYS AS (substring(station, 1, 6)) STORED,
    wban       VARCHAR(5) GENERATED ALWAYS AS (substring(station, 7, 5)) STORED,
    name       VARCHAR(32),
    country    VARCHAR(2),
    province   VARCHAR(2),
    icao       VARCHAR(4),
    location   GEOMETRY(POINT),
    longitude  NUMERIC GENERATED ALWAYS AS (Round(ST_X(location)::NUMERIC, 6)) STORED,
    latitude   NUMERIC GENERATED ALWAYS AS (Round(ST_Y(location)::NUMERIC, 6)) STORED,
    elevation  NUMERIC,
    period     daterange,
    begin_date DATE GENERATED ALWAYS AS (lower(period)) STORED,
    end_date   DATE GENERATED ALWAYS AS (upper(period)) STORED
);
```

**每日摘要表**

```sql
CREATE TABLE IF NOT EXISTS isd.daily
(
    station     VARCHAR(12) NOT NULL, -- station number 6USAF+5WBAN
    ts          DATE        NOT NULL, -- observation date
    -- 气温 & 露点
    temp_mean   NUMERIC(3, 1),        -- mean temperature ℃
    temp_min    NUMERIC(3, 1),        -- min temperature ℃
    temp_max    NUMERIC(3, 1),        -- max temperature ℃
    dewp_mean   NUMERIC(3, 1),        -- mean dew point ℃
    -- 气压
    slp_mean    NUMERIC(5, 1),        -- sea level pressure (hPa)
    stp_mean    NUMERIC(5, 1),        -- station pressure (hPa)
    -- 可见距离
    vis_mean    NUMERIC(6),           -- visible distance (m)
    -- 风速
    wdsp_mean   NUMERIC(4, 1),        -- average wind speed (m/s)
    wdsp_max    NUMERIC(4, 1),        -- max wind speed (m/s)
    gust        NUMERIC(4, 1),        -- max wind gust (m/s) 
    -- 降水 / 雪深
    prcp_mean   NUMERIC(5, 1),        -- precipitation (mm)
    prcp        NUMERIC(5, 1),        -- rectified precipitation (mm)
    sndp        NuMERIC(5, 1),        -- snow depth (mm)
    -- FRSHTT (Fog/Rain/Snow/Hail/Thunder/Tornado) 雾/雨/雪/雹/雷/龙卷
    is_foggy    BOOLEAN,              -- (F)og
    is_rainy    BOOLEAN,              -- (R)ain or Drizzle
    is_snowy    BOOLEAN,              -- (S)now or pellets
    is_hail     BOOLEAN,              -- (H)ail
    is_thunder  BOOLEAN,              -- (T)hunder
    is_tornado  BOOLEAN,              -- (T)ornado or Funnel Cloud
    -- 统计聚合使用的记录数
    temp_count  SMALLINT,             -- record count for temp
    dewp_count  SMALLINT,             -- record count for dew point
    slp_count   SMALLINT,             -- record count for sea level pressure
    stp_count   SMALLINT,             -- record count for station pressure
    wdsp_count  SMALLINT,             -- record count for wind speed
    visib_count SMALLINT,             -- record count for visible distance
    -- 气温标记
    temp_min_f  BOOLEAN,              -- aggregate min temperature
    temp_max_f  BOOLEAN,              -- aggregate max temperature
    prcp_flag   CHAR,                 -- precipitation flag: ABCDEFGHI
    PRIMARY KEY (station, ts)
); -- PARTITION BY RANGE (ts);

```

**亚小时级原始观测数据表**

<details><summary>ISD Hourly</summary>

```sql
CREATE TABLE IF NOT EXISTS isd.hourly
(
    station    VARCHAR(12) NOT NULL, -- station id
    ts         TIMESTAMP   NOT NULL, -- timestamp
    -- air
    temp       NUMERIC(3, 1),        -- [-93.2,+61.8]
    dewp       NUMERIC(3, 1),        -- [-98.2,+36.8]
    slp        NUMERIC(5, 1),        -- [8600,10900]
    stp        NUMERIC(5, 1),        -- [4500,10900]
    vis        NUMERIC(6),           -- [0,160000]
    -- wind
    wd_angle   NUMERIC(3),           -- [1,360]
    wd_speed   NUMERIC(4, 1),        -- [0,90]
    wd_gust    NUMERIC(4, 1),        -- [0,110]
    wd_code    VARCHAR(1),           -- code that denotes the character of the WIND-OBSERVATION.
    -- cloud
    cld_height NUMERIC(5),           -- [0,22000]
    cld_code   VARCHAR(2),           -- cloud code
    -- water
    sndp       NUMERIC(5, 1),        -- mm snow
    prcp       NUMERIC(5, 1),        -- mm precipitation
    prcp_hour  NUMERIC(2),           -- precipitation duration in hour
    prcp_code  VARCHAR(1),           -- precipitation type code
    -- sky
    mw_code    VARCHAR(2),           -- manual weather observation code
    aw_code    VARCHAR(2),           -- auto weather observation code
    pw_code    VARCHAR(1),           -- weather code of past period of time
    pw_hour    NUMERIC(2),           -- duration of pw_code period
    -- misc
    -- remark     TEXT,
    -- eqd        TEXT,
    data       JSONB                 -- extra data
) PARTITION BY RANGE (ts);
```

</details>



## 解析器

NOAA ISD 提供的原始数据是高度压缩的专有格式，需要通过解析器加工，才能转换为数据库表的格式。

针对 Daily 与 Hourly 两份数据集，这里提供了两个 Parser： [`isdd`](https://github.com/Vonng/isd/blob/master/parser/isdd/isdd.go) and [`isdh`](https://github.com/Vonng/isd/blob/master/parser/isdh/isdh.go)。
这两个解析器都以年度数据压缩包作为输入，产生 CSV 结果作为输出，以管道的方式工作，如下所示：

```bash
NAME
        isd -- Intergrated Surface Dataset Parser

SYNOPSIS
        isd daily   [-i <input|stdin>] [-o <output|stout>] [-v]
        isd hourly  [-i <input|stdin>] [-o <output|stout>] [-v] [-d raw|ts-first|hour-first]

DESCRIPTION
        The isd program takes noaa isd daily/hourly raw tarball data as input.
        and generate parsed data in csv format as output. Works in pipe mode

        cat data/daily/2023.tar.gz | bin/isd daily -v | psql ${PGURL} -AXtwqc "COPY isd.daily FROM STDIN CSV;" 

        isd daily  -v -i data/daily/2023.tar.gz  | psql ${PGURL} -AXtwqc "COPY isd.daily FROM STDIN CSV;"
        isd hourly -v -i data/hourly/2023.tar.gz | psql ${PGURL} -AXtwqc "COPY isd.hourly FROM STDIN CSV;"

OPTIONS
        -i  <input>     input file, stdin by default
        -o  <output>    output file, stdout by default
        -p  <profpath>  pprof file path, enable if specified
        -d              de-duplicate rows for hourly dataset (raw, ts-first, hour-first)
        -v              verbose mode
        -h              print help

```




----------------

## 用户界面

这里提供了几个使用 Grafana 制作的 Dashboard，可以用于探索 ISD 数据集，查询气象站与历史气象数据。


-----------

**ISD Overview**

全局概览，总体指标与气象站导航。

![isd-overview.jpg](/img/docs/app/isd-overview.jpg)

-----------

**ISD Country**

展示单个国家/地区内所有的气象站。

![isd-country.jpg](/img/docs/app/isd-country.jpg)

-----------

**ISD Station**

展示单个气象站的详细信息，元数据，天/月/年度汇总指标。

<details><summary>ISD Station Dashboard</summary>

![isd-station.jpg](/img/docs/app/isd-station.jpg)

</details>

-----------

**ISD Detail**

展示一个气象站原始亚小时级观测指标数据，需要 `isd.hourly` 数据集。

<details><summary>ISD Station Dashboard</summary>

![isd-detail.jpg](/img/docs/app/isd-detail.jpg)

</details>
<br><br><br>