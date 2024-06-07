/* eslint-disable array-callback-return */
import { Form, Modal, Table, Button, Input, message } from "antd";
import React, { useState } from "react";

const EditCategoriesModal = ({
    isEditModalOpen,
    setIsEditModalOpen,
    categories,
    setCategories,
}) => {
    const [editingRow, setEditingRow] = useState({});
    console.log(editingRow);

    const onFinish = (values) => {
        console.log(values);
        try {
            fetch(
                process.env.REACT_APP_SERVER_URL +
                    "/api/categories/update-category",
                {
                    method: "PUT",
                    body: JSON.stringify({ ...values, _id: editingRow._id }),
                    headers: {
                        "Content-type": "application/json; charset=UTF-8",
                    },
                }
            );
            message.success("Kategori başarıyla güncellendi");
            setCategories(
                categories.map((item) => {
                    if (item._id === editingRow._id) {
                        return { ...item, title: values.title };
                    }
                    return item;
                })
            );
        } catch (error) {
            message.error("Bir şeyler yanlış gitti");
            console.log(error);
        }
    };

    const deleteCategory = (id) => {
        if (window.confirm("Kategoriyi silmek istediğinize emin misiniz?")) {
            try {
                fetch(
                    process.env.REACT_APP_SERVER_URL +
                        "/api/categories/delete-category",
                    {
                        method: "DELETE",
                        body: JSON.stringify({ _id: id }),
                        headers: {
                            "Content-type": "application/json; charset=UTF-8",
                        },
                    }
                );
                message.success("Kategori başarıyla silindi");
                setCategories(categories.filter((item) => item._id !== id));
            } catch (error) {
                message.error("Bir şeyler yanlış gitti");
                console.log(error);
            }
        }
    };

    const columns = [
        {
            title: "Category Title",
            dataIndex: "title",
            render: (_, record) => {
                if (record._id === editingRow._id) {
                    return (
                        <Form.Item className="mb-0" name="title">
                            <Input defaultValue={record.title} />
                        </Form.Item>
                    );
                } else {
                    return <p>{record.title}</p>;
                }
            },
        },
        {
            title: "Action",
            dataIndex: "action",
            render: (text, record) => {
                return (
                    <div className="flex gap-5">
                        <Button
                            type="primary"
                            onClick={() => setEditingRow(record)}
                        >
                            Düzenle
                        </Button>
                        <Button htmlType="submit">Kaydet</Button>
                        <Button
                            type="primary"
                            danger
                            onClick={() => deleteCategory(record._id)}
                        >
                            Sil
                        </Button>
                    </div>
                );
            },
        },
    ];
    return (
        <Modal
            open={isEditModalOpen}
            onCancel={() => setIsEditModalOpen(false)}
            title="Kategori İşlemleri"
            footer={false}
        >
            <Form onFinish={onFinish}>
                <Table
                    bordered
                    dataSource={categories}
                    columns={columns}
                ></Table>
            </Form>
        </Modal>
    );
};

export default EditCategoriesModal;
