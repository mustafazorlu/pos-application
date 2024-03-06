import React from "react";

const Products = () => {
    return (
        <div className="products-wrapper grid gap-4 grid-cols-card">
            <div className="products-item border hover:shadow cursor-pointer transition-all select-none">
                <div className="product-img">
                    <img
                        src="https://cdn.yemek.com/uploads/2015/10/elma-zencefil-suyu-aralik-2020.jpg"
                        alt=""
                        className="h-28 object-cover w-full border-b"
                    />
                </div>
                <div className="product-info flex flex-col p-3">
                    <span className="font-bold">Elma</span>
                    <span>$12</span>
                </div>
            </div>
            <div className="products-item border hover:shadow cursor-pointer transition-all select-none">
                <div className="product-img">
                    <img
                        src="https://cdn.yemek.com/uploads/2015/10/elma-zencefil-suyu-aralik-2020.jpg"
                        alt=""
                        className="h-28 object-cover w-full border-b"
                    />
                </div>
                <div className="product-info flex flex-col p-3">
                    <span className="font-bold">Elma</span>
                    <span>$12</span>
                </div>
            </div>
        </div>
    );
};

export default Products;
