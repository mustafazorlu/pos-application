import React, { useEffect, useState } from "react";
import CartTotals from "../components/CartTotals";
import Categories from "../components/Categories";
import Products from "../components/Products";
import Header from "../components/Header";

const Homepage = () => {
    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);
    const [filtered, setFiltered] = useState([]);
    const [search, setSearch] = useState("");

    const getCategories = async () => {
        try {
            const res = await fetch(
                process.env.REACT_APP_SERVER_URL + "/api/categories/get-all"
            );
            const data = await res.json();
            data &&
                setCategories(
                    data.map((item) => {
                        return {
                            ...item,
                            value: item.title,
                            label: item.title,
                        };
                    })
                );
        } catch (error) {
            console.log(error);
        }
    };

    const getProducts = async () => {
        try {
            const res = await fetch(
                process.env.REACT_APP_SERVER_URL + "/api/products/get-all"
            );
            const data = await res.json();
            setProducts(data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getProducts();
        getCategories();
    }, []);

    return (
        <>
            <Header search={search} setSearch={setSearch} />
            <div className="home px-6 flex flex-col md:flex-row gap-10 justify-between">
                <div className="categories flex-1 overflow-auto max-h-[calc(100vh_-_97px)]">
                    <Categories
                        categories={categories}
                        setCategories={setCategories}
                        products={products}
                        setProducts={setProducts}
                        setFiltered={setFiltered}
                    />
                </div>
                <div className="products flex-[8] max-h-[calc(100vh_-_97px)] overflow-auto">
                    <Products
                        categories={categories}
                        products={products}
                        setProducts={setProducts}
                        filtered={filtered}
                        search={search}
                    />
                </div>
                <div className="cart-totals min-w-[300px] md:-mr-[24px] md:-mt-[24px] border-l">
                    <CartTotals />
                </div>
            </div>
        </>
    );
};

export default Homepage;
