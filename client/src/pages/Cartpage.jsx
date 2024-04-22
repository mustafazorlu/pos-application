import React, { useState } from "react";
import Header from "../components/Header";
import { Button, Card, Table, message } from "antd";
import CreateBill from "../components/CreateBill";
import { useDispatch, useSelector } from "react-redux";
import { decrease, deleteCart, increase } from "../redux/cartslice";

import { ClearOutlined, PlusOutlined, MinusOutlined } from "@ant-design/icons";

const Cartpage = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const cart = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    const columns = [
        {
            title: "Ürün Görseli",
            dataIndex: "img",
            key: "img",
            width: "150px",
            render: (text) => {
                return (
                    <img className="w-full h-[80px] object-cover" src={text} />
                );
            },
        },
        {
            title: "Ürün Adı",
            dataIndex: "title",
            key: "title",
        },
        {
            title: "Kategori",
            dataIndex: "category",
            key: "category",
        },
        {
            title: "Ürün Fiyatı",
            dataIndex: "price",
            key: "price",
            render: (text) => {
                return <span>{text.toFixed(2)}₺</span>;
            },
        },
        {
            title: "Ürün Adeti",
            dataIndex: "quantity",
            key: "quantity",
            render: (text, record) => {
                return (
                    <div className="flex items-center gap-2">
                        <Button
                            type="primary"
                            size="small"
                            icon={<PlusOutlined />}
                            onClick={() => dispatch(increase(record))}
                        ></Button>
                        <span className="w-5 inline-block text-center">
                            {record.quantity}
                        </span>
                        <Button
                            type="primary"
                            size="small"
                            icon={<MinusOutlined />}
                            //burası önemli !!! bu mantığı anla :D
                            onClick={() => {
                                if (record.quantity === 1) {
                                    if (window.confirm("Ürün silinsin mi?")) {
                                        dispatch(decrease(record));
                                        message.warning(
                                            "Ürün sepetten silindi"
                                        );
                                    }
                                }
                                if (record.quantity > 1) {
                                    dispatch(decrease(record));
                                }
                            }}
                        ></Button>
                    </div>
                );
            },
        },
        {
            title: "Toplam Fiyat",
            render: (text, record) => {
                return (
                    <span>{(record.price * record.quantity).toFixed(2)}₺</span>
                );
            },
        },
        {
            title: "Aksiyonlar",
            render: (_, record) => {
                return (
                    <Button
                        type="primary"
                        danger
                        onClick={() => {
                            dispatch(deleteCart(record));
                            message.success("Ürün sepetten silindi.");
                        }}
                    >
                        Sil
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
                    dataSource={cart.cartItems}
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
                </div>
            </div>
            <CreateBill
                isModalOpen={isModalOpen}
                setIsModalOpen={setIsModalOpen}
            />
        </>
    );
};

export default Cartpage;
