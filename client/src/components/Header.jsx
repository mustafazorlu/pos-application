import { Badge, Input, message } from "antd";
import {
    SearchOutlined,
    HomeOutlined,
    ShoppingCartOutlined,
    CopyOutlined,
    UserOutlined,
    BarChartOutlined,
    LogoutOutlined,
} from "@ant-design/icons";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = ({ search, setSearch }) => {
    const navigate = useNavigate();
    const logOut = () => {
        if (window.confirm("Çıkış yapmak istediğinize emin misiniz?")) {
            localStorage.removeItem("posUser");
            message.success("Çıkış işlemi başarılı.");
            navigate("/login");
        }
    };
    const { cartItems } = useSelector((state) => state.cart);
    return (
        <div className="border-b mb-6">
            <header className="py-4 px-6 flex items-center justify-between gap-10">
                <div className="logo">
                    <Link to="/">
                        <h2 className="text-2xl font-bold md:text-4xl">POSMARKET</h2>
                    </Link>
                </div>
                <div className="header-search flex-1 flex justify-center">
                    <Input
                        size="large"
                        placeholder="Ürün ara.."
                        prefix={<SearchOutlined />}
                        className="rounded-full max-w-[800px]"
                        onChange={(e) =>
                            setSearch(e.target.value.toLowerCase())
                        }
                    />
                </div>
                <div className="menu-links z-50 flex justify-between items-center gap-7 md:static fixed bottom-0 md:w-auto w-full md:bg-transparent left-0 border-t md:border-t-0 md:p-0 p-4 bg-white">
                    <Link
                        to="/"
                        className="flex flex-col items-center hover:text-[#40a9ff]"
                    >
                        <HomeOutlined className="text-xl" />
                        <span className="text-sm">Ana Sayfa</span>
                    </Link>
                    <Badge count={cartItems.length} className="md:flex hidden">
                        <Link
                            to="/cart"
                            className="flex flex-col items-center hover:text-[#40a9ff]"
                        >
                            <ShoppingCartOutlined className="text-xl" />
                            <span className="text-sm">Sepet</span>
                        </Link>
                    </Badge>
                    <Link
                        to="/bills"
                        className="flex flex-col items-center hover:text-[#40a9ff]"
                    >
                        <CopyOutlined className="text-xl" />
                        <span className="text-sm">Faturalar</span>
                    </Link>
                    <Link
                        to="/customers"
                        className="flex flex-col items-center hover:text-[#40a9ff]"
                    >
                        <UserOutlined className="text-xl" />
                        <span className="text-sm">Müşteriler</span>
                    </Link>
                    <div onClick={logOut}>
                        <Link className="flex flex-col items-center hover:text-[#40a9ff]">
                            <LogoutOutlined className="text-xl" />
                            <span className="text-sm">Çıkış</span>
                        </Link>
                    </div>
                </div>
                <Badge count={cartItems.length} className="md:hidden flex">
                    <Link className="flex flex-col items-center hover:text-[#40a9ff]">
                        <ShoppingCartOutlined className="text-2xl" />
                        <span className="text-sm">Sepet</span>
                    </Link>
                </Badge>
            </header>
        </div>
    );
};

export default Header;
