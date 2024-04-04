import "../styles/categories.css";
import { PlusOutlined } from "@ant-design/icons";
import { useState } from "react";
import { Button, Modal, Form, Input, message } from "antd";

const Categories = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [form] = Form.useForm();
    const onFinish = (values) => {
        try {
            //inputtaki kategorileri post ile mongodbye gönderdik
            fetch("http://localhost:5000/api/categories/add-category", {
                method: "POST",
                body: JSON.stringify(values),
                headers: { "Content-type": "application/json; charset=UTF-8" },
            });
            console.log(values);
            message.success("Kategori başarıyla eklendi.");
            form.resetFields();
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <ul className="flex md:flex-col gap-4">
            <li className="category-item">
                <span>Tümü</span>
            </li>
            <li className="category-item">
                <span>Yiyecek</span>
            </li>
            <li className="category-item">
                <span>İçecek</span>
            </li>
            <li className="category-item">
                <span>Tümü</span>
            </li>
            <li className="category-item">
                <span>Yiyecek</span>
            </li>
            <li className="category-item">
                <span>İçecek</span>
            </li>
            <li className="category-item">
                <span>Tümü</span>
            </li>
            <li className="category-item">
                <span>Yiyecek</span>
            </li>
            <li className="category-item">
                <span>İçecek</span>
            </li>
            <li
                onClick={() => setIsModalOpen(true)}
                className="category-item !bg-purple-800 hover:opacity-90"
            >
                <span>{<PlusOutlined className="m" />}</span>
            </li>
            <Modal
                title="Yeni Kategori Ekle"
                open={isModalOpen}
                onCancel={() => setIsModalOpen(false)}
                footer={false}
            >
                <Form layout="vertical" onFinish={onFinish} form={form}>
                    <Form.Item
                        label="Kategori Ekle"
                        name={"title"}
                        rules={[
                            {
                                required: true,
                                message: "Kategori alanı boş bırakılamaz.",
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item className="flex justify-end mb-0">
                        <Button type="primary" htmlType="submit">
                            Oluştur
                        </Button>
                    </Form.Item>
                </Form>
            </Modal>
        </ul>
    );
};

export default Categories;
