import Categories from "./components/Categories";
import Header from "./components/Header";

function App() {
    return (
        <div className="App">
            <Header />
            <div className="home px-6 flex gap-10 justify-between">
                <div className="categories flex-1 overflow-auto max-h-[calc(100vh-112px)]">
                    <Categories />
                </div>
                <div className="products flex-[8]">
                    <div>products</div>
                </div>
                <div className="cart-totals flex">
                    <div>cart totals</div>
                </div>
            </div>
        </div>
    );
}

export default App;
