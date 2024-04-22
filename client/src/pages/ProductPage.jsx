import React from "react";
import Header from "../components/Header";
import EditProductModal from "../modals/EditProductModal";

const ProductPage = () => {
    return (
        <>
            <Header />
            <div className="px-6">
                <h1 className="text-4xl font-bold text-center">Ürünler</h1>
                <EditProductModal />
            </div>
        </>
    );
};

export default ProductPage;
