import React from "react";
import { addProduct } from "../redux/cartslice";
import { useDispatch, useSelector } from "react-redux";
import { message } from "antd";

const ProductItem = ({ item }) => {
    const cart = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(addProduct({ ...item, quantity: 1 }));
        message.success("Ürün sepete eklendi.");
    };

    console.log(cart);
    return (
        <div
            onClick={handleClick}
            className="products-item border hover:shadow cursor-pointer transition-all select-none"
        >
            <div className="product-img">
                <img
                    src={item.img}
                    alt=""
                    className="h-28 object-cover w-full border-b"
                />
            </div>
            <div className="product-info flex flex-col p-3">
                <span className="font-bold">{item.title}</span>
                <span>{item.price}₺</span>
            </div>
        </div>
    );
};

export default ProductItem;
