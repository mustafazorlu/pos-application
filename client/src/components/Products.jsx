import React, { useEffect, useState } from "react";
import ProductItem from "../utils/ProductItem";
import { PlusOutlined, EditOutlined } from "@ant-design/icons";
import AddProductModal from "../modals/AddProductModal";
import { useNavigate } from "react-router-dom";

const Products = ({ categories, products, setProducts, filtered }) => {
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const navigate = useNavigate();

    return (
        <div className="products-wrapper grid gap-4 grid-cols-card">
            {filtered.map((item, index) => (
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
