import { Button, Carousel, Checkbox, Form, Input } from "antd";
import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
    const contentStyle = {
        height: "160px",
        color: "#fff",
        lineHeight: "160px",
        textAlign: "center",
    };
    return (
        <div className="h-screen">
            <div className="flex justify-between h-full">
                <div className="left relative w-full flex flex-col h-full justify-center xl:px-20 px-10">
                    <h1 className="text-center text-5xl font-bold mb-2">
                        LOGO
                    </h1>
                    <Form layout="vertical">
                        <Form.Item
                            label="Email"
                            name={"email"}
                            rules={[
                                {
                                    required: true,
                                    message: "Kullanıcı adı boş bırakılamaz",
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            label="Şifre"
                            name={"password"}
                            rules={[
                                {
                                    required: true,
                                    message: "Kullanıcı adı boş bırakılamaz",
                                },
                            ]}
                        >
                            <Input.Password />
                        </Form.Item>
                        <Form.Item name={"remember"} valuePropName="checked">
                            <div className="flex justify-between">
                                <Checkbox>Remember me</Checkbox>
                                <Link>Forgot Password?</Link>
                            </div>
                        </Form.Item>
                        <Form.Item>
                            <Button
                                type="primary"
                                htmlType="submit"
                                size="large"
                                className="w-full"
                            >
                                Kaydol
                            </Button>
                        </Form.Item>
                    </Form>
                    <div className="haveAnAccount text-center left-0 absolute w-full bottom-10">
                        Henüz bir hesabınız yok mu?{" "}
                        <Link to={"/register"} className="text-blue-600">
                            Şimdi kaybol!
                        </Link>
                    </div>
                </div>
                <div className="right xl:w-4/6 lg:w-3/5 md:1/2 md:block hidden bg-[#6c63ff] h-full">
                    <div className="w-full h-full flex items-center">
                        <div className="w-full">
                            <Carousel autoplay>
                                <div className="!flex flex-col items-center justify-center mb-16">
                                    <img
                                        src="https://my-pos-application.onrender.com/images/responsive.svg"
                                        alt=""
                                        className="w-[600px] h-[500px]"
                                    />
                                    <h3 className="text-4xl text-white text-center font-bold">
                                        Responsive
                                    </h3>
                                    <p className="mt-5 text-2xl text-white text-center">
                                        Tüm Cihaz Boyutlarıyla Uyumluluk
                                    </p>
                                </div>
                                <div className="!flex flex-col items-center justify-center mb-16">
                                    <img
                                        src="https://my-pos-application.onrender.com/images/statistic.svg"
                                        alt=""
                                        className="w-[600px] h-[500px]"
                                    />
                                    <h3 className="text-4xl text-white text-center font-bold">
                                        İstatistikler
                                    </h3>
                                    <p className="mt-5 text-2xl text-white text-center">
                                        Geniş Tutulan İstatistikler
                                    </p>
                                </div>
                                <div className="!flex flex-col items-center justify-center mb-16">
                                    <img
                                        src="https://my-pos-application.onrender.com/images/customer.svg"
                                        alt=""
                                        className="w-[600px] h-[500px]"
                                    />
                                    <h3 className="text-4xl text-white text-center font-bold">
                                        Müşteri Memnuniyeti
                                    </h3>
                                    <p className="mt-5 text-2xl text-white text-center">
                                        Deneyim Sonunda Üründen Memnun
                                        Müşteriler
                                    </p>
                                </div>
                                <div className="!flex flex-col items-center justify-center mb-16">
                                    <img
                                        src="https://my-pos-application.onrender.com/images/admin.svg"
                                        alt=""
                                        className="w-[600px] h-[500px]"
                                    />
                                    <h3 className="text-4xl text-white text-center font-bold">
                                        Yönetici Paneli
                                    </h3>
                                    <p className="mt-5 text-2xl text-white text-center">
                                        Tek Yerden Yönetim
                                    </p>
                                </div>
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
