import React from "react";
import Header from "../components/Header";
import { Table } from "antd";

const Customerpage = () => {
    const dataSource = [
        {
            key: "1",
            name: "Mike",
            age: 32,
            address: "10 Downing Street",
        },
        {
            key: "2",
            name: "John",
            age: 42,
            address: "10 Downing Street",
        },
        {
            key: "3",
            name: "Ash",
            age: 30,
            address: "30 Downing Street",
        },
    ];
    const columns = [
        {
            title: "Name",
            dataIndex: "name",
            key: "name",
        },
        {
            title: "Age",
            dataIndex: "age",
            key: "age",
        },
        {
            title: "Address",
            dataIndex: "address",
            key: "address",
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
                    dataSource={dataSource}
                    columns={columns}
                    pagination={false}
                />
            </div>
        </>
    );
};

export default Customerpage;
