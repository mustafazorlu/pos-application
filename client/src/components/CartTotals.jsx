import React from "react";
import { Button } from "antd";
import { ClearOutlined, PlusOutlined, MinusOutlined } from "@ant-design/icons";

const CartTotals = () => {
    return (
        <div className="cart flex flex-col h-full max-h-[calc(100vh_-_72px)]">
            <h2 className="bg-blue-600 text-center py-4 text-white font-bold tracking-wide">
                Sepetteki Ürünler
            </h2>
            <ul className="cart-items px-2 py-2 flex flex-col gap-y-3 overflow-y-auto">
                <li className="cart-item flex items-center justify-between">
                    <div className="flex items-center">
                        <img
                            src="https://cdn.yemek.com/uploads/2015/10/elma-zencefil-suyu-aralik-2020.jpg"
                            alt=""
                            className="w-16 h-16 object-cover"
                        />
                        <div className="flex flex-col ml-2">
                            <b>Elma</b>
                            <span>12₺ x 2</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <Button
                            type="primary"
                            size="small"
                            icon={<PlusOutlined />}
                        ></Button>
                        <span>1</span>
                        <Button
                            type="primary"
                            size="small"
                            icon={<MinusOutlined />}
                        ></Button>
                    </div>
                </li>
                <li className="cart-item flex items-center justify-between">
                    <div className="flex items-center">
                        <img
                            src="https://cdn.yemek.com/uploads/2015/10/elma-zencefil-suyu-aralik-2020.jpg"
                            alt=""
                            className="w-16 h-16 object-cover"
                        />
                        <div className="flex flex-col ml-2">
                            <b>Elma</b>
                            <span>12₺ x 2</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <Button
                            type="primary"
                            size="small"
                            icon={<PlusOutlined />}
                        ></Button>
                        <span>1</span>
                        <Button
                            type="primary"
                            size="small"
                            icon={<MinusOutlined />}
                        ></Button>
                    </div>
                </li>
                <li className="cart-item flex items-center justify-between">
                    <div className="flex items-center">
                        <img
                            src="https://cdn.yemek.com/uploads/2015/10/elma-zencefil-suyu-aralik-2020.jpg"
                            alt=""
                            className="w-16 h-16 object-cover"
                        />
                        <div className="flex flex-col ml-2">
                            <b>Elma</b>
                            <span>12₺ x 2</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <Button
                            type="primary"
                            size="small"
                            icon={<PlusOutlined />}
                        ></Button>
                        <span>1</span>
                        <Button
                            type="primary"
                            size="small"
                            icon={<MinusOutlined />}
                        ></Button>
                    </div>
                </li>
            </ul>
            <div className="cart-totals mt-auto">
                <div className="border-t border-b">
                    <div className="flex justify-between p-2">
                        <b>Ara Toplam</b>
                        <span>99</span>
                    </div>
                    <div className="flex justify-between p-2">
                        <b>KDV %8</b>
                        <span className="text-red-700">+7.48</span>
                    </div>
                </div>
                <div className="border-b">
                    <div className="flex justify-between p-2">
                        <b className="text-lg text-green-500">Genel Toplam</b>
                        <span className="text-lg font-bold">99</span>
                    </div>
                </div>
                <div className="p-2">
                    <Button type="primary" size="large" className="w-full">
                        Sipariş Oluştur
                    </Button>
                    <Button
                        type="primary"
                        danger
                        size="large"
                        className="w-full mt-2"
                        icon={<ClearOutlined />}
                    >
                        Temizle
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default CartTotals;
