import React, { useEffect, useState } from "react";
import ProductItem from "../utils/ProductItem";
import { PlusOutlined, EditOutlined } from "@ant-design/icons";
import AddProductModal from "../modals/AddProductModal";
import { useNavigate } from "react-router-dom";

const Products = ({ categories }) => {
    const [products, setProducts] = useState([]);
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const navigate = useNavigate();

    const getProducts = async () => {
        try {
            const res = await fetch(
                "http://localhost:5000/api/products/get-all"
            );
            const data = await res.json();
            setProducts(data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getProducts();
    }, []);

    return (
        <div className="products-wrapper grid gap-4 grid-cols-card">
            {products.map((item, index) => (
                <ProductItem key={index} item={item} />
            ))}

            <div
                onClick={() => setIsAddModalOpen(true)}
                className="min-h-[180px] products-item flex items-center justify-center bg-purple-800 border hover:shadow cursor-pointer transition-all select-none hover:opacity-90"
            >
                <PlusOutlined className="text-white text-2xl" />
            </div>
            <div
                onClick={() => navigate("/products")}
                className="min-h-[180px] products-item flex items-center justify-center bg-orange-800 border hover:shadow cursor-pointer transition-all select-none hover:opacity-90"
            >
                <EditOutlined className="text-white text-2xl" />
            </div>

            <AddProductModal
                isAddModalOpen={isAddModalOpen}
                setIsAddModalOpen={setIsAddModalOpen}
                categories={categories}
                products={products}
                setProducts={setProducts}
            />
        </div>
    );
};

export default Products;
