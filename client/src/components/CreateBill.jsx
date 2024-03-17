import { Button, Card, Form, Input, Modal, Select } from "antd";
import React from "react";

const CreateBill = ({ isModalOpen, setIsModalOpen }) => {
    const onFinish = (values) => {
        console.log(values);
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
                    name={"phoneNumber"}
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
                    name={"paymentType"}
                    required={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Select placeholder="Nakit">
                        <Select.Option value="Cash">Nakit</Select.Option>
                        <Select.Option value="Credit">Kredi Kartı</Select.Option>
                    </Select>
                </Form.Item>

                <div className="cart-total flex justify-end">
                    <Card className="w-full">
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
