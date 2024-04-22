import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import StatisticCard from "../components/StatisticCard";
// import { Area, Pie } from "@ant-design/plots";
const Statisticpage = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        asyncFetch();
    }, []);

    const asyncFetch = () => {
        fetch(
            "https://gw.alipayobjects.com/os/bmw-prod/360c3eae-0c73-46f0-a982-4746a6095010.json"
        )
            .then((response) => response.json())
            .then((json) => setData(json))
            .catch((error) => {
                console.log("fetch data failed", error);
            });
    };
    const data2 = [
        {
            type: "asd",
            value: 27,
        },
        {
            type: "asd",
            value: 25,
        },
        {
            type: "afdsf",
            value: 18,
        },
        {
            type: "sdf",
            value: 15,
        },
        {
            type: "sdfgdfg",
            value: 10,
        },
        {
            type: "dsf",
            value: 5,
        },
    ];
    const config = {
        data,
        xField: "timePeriod",
        yField: "value",
        xAxis: {
            range: [0, 1],
        },
    };
    const config2 = {
        appendPadding: 10,
        data: data2,
        angleField: "value",
        colorField: "type",
        radius: 1,
        innerRadius: 0.6,
        label: {
            type: "inner",
            offset: "-50%",
            content: "{value}",
            style: {
                textAlign: "center",
                fontSize: 14,
            },
        },
        interactions: [
            {
                type: "element-selected",
            },
            {
                type: "element-active",
            },
        ],
        statistic: {
            title: false,
            content: {
                style: {
                    whiteSpace: "pre-wrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                },
                content: "AntV\nG2Plot",
            },
        },
    };
    return (
        <div>
            <Header />
            <div className="px-6 md:pb-0 pb-20">
                <h1 className="text-center font-semibold text-3xl my-10">
                    Müşterilerim
                </h1>
                <div>
                    <h2 className="mb-8">
                        Hoş geldin{" "}
                        <span className="text-green-700 font-bold text-xl">
                            admin
                        </span>
                    </h2>
                    <div className="statistic-cards grid xl:grid-cols-4 md:grid-cols-2 md:gap-8 gap-6">
                        <StatisticCard
                            title="Toplam Müşteri"
                            amount="10"
                            img="https://cdn.iconscout.com/icon/free/png-256/free-user-1648810-1401302.png"
                        />
                        <StatisticCard
                            title="Toplam Kazanç"
                            amount="660.00 ₺"
                            img="https://assets.materialup.com/uploads/bcf6dd06-7117-424f-9a6e-4bb795c8fb4d/preview.png"
                        />
                        <StatisticCard
                            title="Toplam Satış"
                            amount="8"
                            img="https://cdn-icons-png.freepik.com/512/6136/6136558.png"
                        />
                        <StatisticCard
                            title="Toplam Ürün"
                            amount="15"
                            img="https://cdn-icons-png.flaticon.com/512/679/679821.png"
                        />
                    </div>
                    <div className="flex gap-10 lg:flex-row flex-col">
                        <div className="lg:w-1/2 lg:h-full h-72">
                            {/* <Area {...config} /> */}
                        </div>
                        <div className="lg:w-1/2 lg:h-full h-72">
                            {/* <Pie {...config2} /> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Statisticpage;
