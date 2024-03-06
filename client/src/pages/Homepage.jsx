import React from "react";
import CartTotals from "../components/CartTotals";
import Categories from "../components/Categories";
import Products from "../components/Products";
import Header from "../components/Header";

const Homepage = () => {
    return (
        <>
            <Header />
            <div className="home px-6 flex flex-col md:flex-row gap-10 justify-between">
                <div className="categories flex-1 overflow-auto max-h-[calc(100vh_-_97px)]">
                    <Categories />
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
