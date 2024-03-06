import CartTotals from "./components/CartTotals";
import Categories from "./components/Categories";
import Header from "./components/Header";
import Products from "./components/Products";

function App() {
    return (
        <div className="App">
            <Header />
            <div className="home px-6 flex gap-10 justify-between">
                <div className="categories flex-1 overflow-auto max-h-[calc(100vh_-_96px)]">
                    <Categories />
                </div>
                <div className="products flex-[8]">
                    <Products />
                </div>
                <div className="cart-totals min-w-[300px] md:-mr-[24px] md:-mt-[24px] border-l">
                    <CartTotals />
                </div>
            </div>
        </div>
    );
}

export default App;
