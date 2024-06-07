import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { Button, Card, Table } from "antd";
import PrintBill from "../components/PrintBill";

const Billspage = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [customer, setCustomer] = useState();
    const [billItems, setBillItems] = useState([]);

    console.log(customer);
    const getBills = async () => {
        try {
            const res = await fetch(
                process.env.REACT_APP_SERVER_URL + "/api/bills/get-all"
            );
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
            title: "Oluşturma Tarihi",
            dataIndex: "createdAt",
            key: "createdAt",
            render: (text, record) => {
                return <span>{text.substring(0, 10)}</span>;
            },
        },
        {
            title: "Ödeme Yöntemi",
            dataIndex: "paymentMode",
            key: "paymentMode",
        },
        {
            title: "Ödeme Yöntemi",
            dataIndex: "paymentMode",
            key: "paymentMode",
        },
        {
            title: "Toplam Fiyat",
            dataIndex: "totalAmount",
            key: "totalAmount",
            render: (text, record) => {
                return <span>{text}₺</span>;
            },
        },
        {
            title: "Yazdır",
            render: (text, record) => {
                return (
                    <Button
                        className="pl-0"
                        onClick={() => {
                            setIsModalOpen(true);
                            setCustomer(record);
                        }}
                        type="link"
                    >
                        Yazdır
                    </Button>
                );
            },
        },
    ];
    return (
        <>
            <Header />
            <div className="px-6">
                <Table
                    bordered
                    dataSource={billItems}
                    columns={columns}
                    pagination={false}
                />
                <PrintBill
                    isModalOpen={isModalOpen}
                    setIsModalOpen={setIsModalOpen}
                    customer={customer}
                />
            </div>
        </>
    );
};

export default Billspage;
