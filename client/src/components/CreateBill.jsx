import { Button, Card, Form, Input, Modal, Select, message } from "antd";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { reset } from "../redux/cartslice";
import { useNavigate } from "react-router-dom";

const CreateBill = ({ isModalOpen, setIsModalOpen }) => {
    const cart = useSelector((state) => state.cart);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onFinish = async (values) => {
        try {
            const res = await fetch(
                "http://localhost:5000/api/bills/add-bill",
                {
                    method: "POST",
                    body: JSON.stringify({
                        ...values,
                        cartItems: cart.cartItems,
                        subTotal: cart.total,
                        tax: ((cart.total * cart.tax) / 100).toFixed(2),
                        totalAmount: (
                            cart.total +
                            (cart.total * cart.tax) / 100
                        ).toFixed(2),
                    }),
                    headers: {
                        "Content-type": "application/json; charset=UTF-8",
                    },
                }
            );

            if (res.status === 200) {
                message.success("Fatura başarıyla oluşturuldu");
                dispatch(reset());
                navigate("/bills");
            }
        } catch (error) {
            message.error("Bir sorun oluştu tekrar deneyiniz.");
        }
    };
    return (
        <Modal
            title="Fatura Oluştur"
            open={isModalOpen}
            footer={false}
            onCancel={() => setIsModalOpen(false)}
        >
            <Form layout="vertical" onFinish={onFinish}>
                <Form.Item
                    label="Müşteri Adı"
                    name={"customerName"}
                    required={[
                        {
                            required: true,
                            message: "Username is required",
                        },
                    ]}
                >
                    <Input placeholder="Müşteri adı" />
                </Form.Item>
                <Form.Item
                    label="Tel No"
                    name={"customerPhoneNumber"}
                    required={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input placeholder="Tel no" maxLength={11} />
                </Form.Item>
                <Form.Item
                    label="Ödeme Yöntemi"
                    name={"paymentMode"}
                    required={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Select placeholder="Nakit">
                        <Select.Option value="Nakit">Nakit</Select.Option>
                        <Select.Option value="Kredi Kartı">
                            Kredi Kartı
                        </Select.Option>
                    </Select>
                </Form.Item>

                <div className="cart-total flex justify-end">
                    <Card className="w-full">
                        <div className="flex justify-between">
                            <span>Ara Toplam</span>
                            <span>{cart.total.toFixed(2)}₺</span>
                        </div>
                        <div className="flex justify-between my-2">
                            <span>KDV Değeri %{cart.tax}</span>
                            <span className="text-red-600">
                                +{((cart.total * cart.tax) / 100).toFixed(2)}₺
                            </span>
                        </div>
                        <div className="flex justify-between">
                            <span className="font-bold">Genel Toplam</span>
                            <span className="font-bold">
                                {(
                                    cart.total +
                                    (cart.total * cart.tax) / 100
                                ).toFixed(2)}
                                ₺
                            </span>
                        </div>
                        <div className="flex justify-end">
                            <Button
                                type="primary"
                                className="mt-3"
                                size="large"
                                onClick={() => setIsModalOpen(true)}
                                htmlType="submit"
                            >
                                Sipariş Oluştur
                            </Button>
                        </div>
                    </Card>
                </div>
            </Form>
        </Modal>
    );
};

export default CreateBill;
