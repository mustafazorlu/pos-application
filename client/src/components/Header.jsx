import { Badge, Input } from "antd";
import {
    SearchOutlined,
    HomeOutlined,
    ShoppingCartOutlined,
    CopyOutlined,
    UserOutlined,
    BarChartOutlined,
    LogoutOutlined,
} from "@ant-design/icons";

const Header = () => {
    return (
        <div className="border-b mb-6">
            <header className="py-4 px-6 flex items-center justify-between gap-10">
                <div className="logo">
                    <a href="/">
                        <h2 className="text-2xl font-bold md:text-4xl">LOGO</h2>
                    </a>
                </div>
                <div className="header-search flex-1 flex justify-center">
                    <Input
                        size="large"
                        placeholder="Ürün ara.."
                        prefix={<SearchOutlined />}
                        className="rounded-full max-w-[800px]"
                    />
                </div>
                <div className="menu-links z-50 flex justify-between items-center gap-7 md:static fixed bottom-0 md:w-auto w-full md:bg-transparent left-0 border-t md:border-t-0 md:p-0 p-4 bg-white">
                    <a
                        href="#/"
                        className="flex flex-col items-center hover:text-[#40a9ff]"
                    >
                        <HomeOutlined className="text-xl" />
                        <span className="text-sm">Ana Sayfa</span>
                    </a>
                    <Badge count={5} className="md:flex hidden">
                        <a
                            href="#/"
                            className="flex flex-col items-center hover:text-[#40a9ff]"
                        >
                            <ShoppingCartOutlined className="text-xl" />
                            <span className="text-sm">Sepet</span>
                        </a>
                    </Badge>
                    <a
                        href="#/"
                        className="flex flex-col items-center hover:text-[#40a9ff]"
                    >
                        <CopyOutlined className="text-xl" />
                        <span className="text-sm">Faturalar</span>
                    </a>
                    <a
                        href="#/"
                        className="flex flex-col items-center hover:text-[#40a9ff]"
                    >
                        <UserOutlined className="text-xl" />
                        <span className="text-sm">Müşteriler</span>
                    </a>
                    <a
                        href="#/"
                        className="flex flex-col items-center hover:text-[#40a9ff]"
                    >
                        <BarChartOutlined className="text-xl" />
                        <span className="text-sm">İstatistikler</span>
                    </a>
                    <a
                        href="#/"
                        className="flex flex-col items-center hover:text-[#40a9ff]"
                    >
                        <LogoutOutlined className="text-xl" />
                        <span className="text-sm">Çıkış</span>
                    </a>
                </div>
                <Badge count={5} className="md:hidden flex">
                    <a
                        href="#/"
                        className="flex flex-col items-center hover:text-[#40a9ff]"
                    >
                        <ShoppingCartOutlined className="text-2xl" />
                        <span className="text-sm">Sepet</span>
                    </a>
                </Badge>
            </header>
        </div>
    );
};

export default Header;
