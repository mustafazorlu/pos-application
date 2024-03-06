import React from "react";
import { Button } from "antd";
import { ClearOutlined } from "@ant-design/icons";

const CartTotals = () => {
    return (
        <div className="cart flex flex-col h-full max-h-[calc(100vh - 120px)]">
            <h2 className="bg-blue-600 text-center py-4 text-white font-bold tracking-wide">
                Sepetteki Ürünler
            </h2>
            <div className="cart-items">
                <div className="cart-item">cart item</div>
            </div>
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
