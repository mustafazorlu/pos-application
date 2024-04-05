import React, { useEffect, useState } from "react";
import CartTotals from "../components/CartTotals";
import Categories from "../components/Categories";
import Products from "../components/Products";
import Header from "../components/Header";

const Homepage = () => {
    const [categories, setCategories] = useState([]);

    const getCategories = async () => {
        try {
            const res = await fetch(
                "http://localhost:5000/api/categories/get-all"
            );
            const data = await res.json();
            setCategories(data);
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        getCategories();
    },[]);

    return (
        <>
            <Header />
            <div className="home px-6 flex flex-col md:flex-row gap-10 justify-between">
                <div className="categories flex-1 overflow-auto max-h-[calc(100vh_-_97px)]">
                    <Categories
                        categories={categories}
                        setCategories={setCategories}
                    />
                </div>
                <div className="products flex-[8] max-h-[calc(100vh_-_97px)] overflow-auto">
                    <Products />
                </div>
                <div className="cart-totals min-w-[300px] md:-mr-[24px] md:-mt-[24px] border-l">
                    <CartTotals />
                </div>
            </div>
        </>
    );
};

export default Homepage;
