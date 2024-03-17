import React, { useState } from "react";
import Header from "../components/Header";
import { Button, Card, Table } from "antd";
import PrintBill from "../components/PrintBill";

const Billspage = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
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
            <div className="px-6">
                <Table
                    bordered
                    dataSource={dataSource}
                    columns={columns}
                    pagination={false}
                />
                <div className="cart-total flex justify-end">
                    <Card className="w-72 mt-6">
                        <div className="flex justify-between">
                            <span>Ara Toplam</span>
                            <span>548.00₺</span>
                        </div>
                        <div className="flex justify-between my-2">
                            <span>KDV Toplam %8</span>
                            <span className="text-red-600">+43.92₺</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="font-bold">Toplam</span>
                            <span className="font-bold">548.00₺</span>
                        </div>
                        <Button
                            type="primary"
                            className="mt-3 w-full"
                            size="large"
                            onClick={() => setIsModalOpen(true)}
                        >
                            Sipariş Oluştur
                        </Button>
                    </Card>
                    <PrintBill
                        isModalOpen={isModalOpen}
                        setIsModalOpen={setIsModalOpen}
                    />
                </div>
            </div>
        </>
    );
};

export default Billspage;
