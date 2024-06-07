import { Button, Form, Input, Modal, message } from "antd";
import React from "react";

const AddCategoriesModal = ({
    isAddModalOpen,
    setIsAddModalOpen,
    categories,
    setCategories,
}) => {
    const [form] = Form.useForm();
    const onFinish = (values) => {
        try {
            //inputtaki kategorileri post ile mongodbye gönderdik
            fetch(
                process.env.REACT_APP_SERVER_URL +
                    "/api/categories/add-category",
                {
                    method: "POST",
                    body: JSON.stringify(values),
                    headers: {
                        "Content-type": "application/json; charset=UTF-8",
                    },
                }
            );
            console.log(values);
            message.success("Kategori başarıyla eklendi.");
            form.resetFields();
            setCategories([...categories, values]);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <Modal
            title="Yeni Kategori Ekle"
            open={isAddModalOpen}
            onCancel={() => setIsAddModalOpen(false)}
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
    );
};

export default AddCategoriesModal;
