import React from "react";
import { Button, message } from "antd";
import { ClearOutlined, PlusOutlined, MinusOutlined } from "@ant-design/icons";
import { useSelector, useDispatch } from "react-redux";
import { decrease, deleteCart, increase, reset } from "../redux/cartslice";
import { useNavigate } from "react-router-dom";

const CartTotals = () => {
    const cart = useSelector((state) => state.cart);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    return (
        <div className="cart flex flex-col mb-24 border-r lg:border-r-0 lg:mb-0 h-full md:h-[calc(100vh_-_73px)]">
            <h2 className="bg-blue-600 text-center py-4 text-white font-bold tracking-wide">
                Sepetteki Ürünler
            </h2>
            <ul className="cart-items px-2 py-2 flex flex-col gap-y-3 overflow-y-auto">
                {cart.cartItems.length > 0
                    ? cart.cartItems
                          .map((item) => (
                              <li
                                  key={item._id}
                                  className="cart-item flex items-center justify-between"
                              >
                                  <div className="flex items-center">
                                      <img
                                          src={item.img}
                                          alt=""
                                          className="w-16 h-16 object-cover"
                                          onClick={() => {
                                              dispatch(deleteCart(item));
                                              message.warning(
                                                  "Ürün sepetten silindi"
                                              );
                                          }}
                                      />
                                      <div className="flex flex-col ml-2">
                                          <b>{item.title}</b>
                                          <span>
                                              {item.price}₺ x {item.quantity}
                                          </span>
                                      </div>
                                  </div>
                                  <div className="flex items-center gap-2">
                                      <Button
                                          type="primary"
                                          size="small"
                                          icon={<PlusOutlined />}
                                          onClick={() =>
                                              dispatch(increase(item))
                                          }
                                      ></Button>
                                      <span className="w-5 inline-block text-center">
                                          {item.quantity}
                                      </span>
                                      <Button
                                          type="primary"
                                          size="small"
                                          icon={<MinusOutlined />}
                                          //burası önemli !!! bu mantığı anla :D
                                          onClick={() => {
                                              if (item.quantity === 1) {
                                                  if (
                                                      window.confirm(
                                                          "Ürün silinsin mi?"
                                                      )
                                                  ) {
                                                      dispatch(decrease(item));
                                                      message.warning(
                                                          "Ürün sepetten silindi"
                                                      );
                                                  }
                                              }
                                              if (item.quantity > 1) {
                                                  dispatch(decrease(item));
                                              }
                                          }}
                                      ></Button>
                                  </div>
                              </li>
                          ))
                          .reverse()
                    : "Sepette hiç ürün yok.."}
            </ul>
            <div className="cart-totals mt-auto">
                <div className="border-t border-b">
                    <div className="flex justify-between p-2">
                        <b>Ara Toplam</b>
                        <span>{cart.total.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between p-2">
                        <b>KDV Değeri %{cart.tax}</b>
                        <span className="text-red-700">
                            +{((cart.total * cart.tax) / 100).toFixed(2)}
                        </span>
                    </div>
                </div>
                <div className="border-b">
                    <div className="flex justify-between p-2">
                        <b className="text-lg text-green-500">Genel Toplam</b>
                        <span className="text-lg font-bold">
                            {(
                                cart.total +
                                (cart.total * cart.tax) / 100
                            ).toFixed(2)}
                        </span>
                    </div>
                </div>
                <div className="p-2">
                    <Button
                        type="primary"
                        size="large"
                        className="w-full"
                        disabled={cart.cartItems.length > 0 ? false : true}
                        onClick={() => navigate("/cart")}
                    >
                        Sipariş Oluştur
                    </Button>
                    <Button
                        type="primary"
                        danger
                        size="large"
                        className="w-full mt-2"
                        disabled={cart.cartItems.length > 0 ? false : true}
                        icon={<ClearOutlined />}
                        onClick={() => {
                            if (
                                window.confirm(
                                    "Tüm ürünleri silmek istediğinize emin misiniz?"
                                )
                            ) {
                                dispatch(reset());

                                if (cart.cartItems.length === 0) {
                                    message.info("Silinecek ürün yok.");
                                } else {
                                    message.success("Tüm ürünler silindi.");
                                }
                            }
                        }}
                    >
                        Temizle
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default CartTotals;
