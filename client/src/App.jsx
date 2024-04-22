import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Cartpage from "./pages/Cartpage";
import Billspage from "./pages/Billspage";
import Customerpage from "./pages/Customerpage";
// import Statisticpage from "./pages/Statisticpage";
import Register from "./pages/Register";
import Login from "./pages/Login";
import ProductPage from "./pages/ProductPage";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Homepage />} />
                    <Route path="/cart" element={<Cartpage />} />
                    <Route path="/bills" element={<Billspage />} />
                    <Route path="/customers" element={<Customerpage />} />
                    {/* <Route path="/statistic" element={<Statisticpage />} /> */}
                    <Route path="/products" element={<ProductPage />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/login" element={<Login />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
