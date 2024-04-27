import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { Table } from "antd";

const Customerpage = () => {
    const [billItems, setBillItems] = useState([]);

    const getBills = async () => {
        try {
            const res = await fetch("http://localhost:5000/api/bills/get-all");
            const data = await res.json();
            setBillItems(data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getBills();
    }, []);

    const columns = [
        {
            title: "Müşteri Adı",
            dataIndex: "customerName",
            key: "customerName",
        },
        {
            title: "Telefon Numarası",
            dataIndex: "customerPhoneNumber",
            key: "customerPhoneNumber",
        },
        {
            title: "İşlem Tarihi",
            dataIndex: "createdAt",
            key: "createdAt",
            render: (text) => {
                return <span>{text.substring(0, 10)}</span>;
            },
        },
    ];
    return (
        <>
            <Header />
            <h1 className="text-center font-semibold text-3xl my-10">
                Müşterilerim
            </h1>
            <div className="px-6">
                <Table
                    bordered
                    dataSource={billItems}
                    columns={columns}
                    pagination={false}
                />
            </div>
        </>
    );
};

export default Customerpage;
