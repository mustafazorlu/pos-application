import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Cartpage from "./pages/Cartpage";
import Billspage from "./pages/Billspage";
import Customerpage from "./pages/Customerpage";
import Register from "./pages/Register";
import Login from "./pages/Login";
import ProductPage from "./pages/ProductPage";
import { useSelector } from "react-redux";
import { useEffect } from "react";

function App() {
    const cart = useSelector((state) => state.cart);

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart))
    }, [cart])
    
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route
                        path="/"
                        element={
                            <RouteControl>
                                <Homepage />
                            </RouteControl>
                        }
                    />
                    <Route
                        path="/cart"
                        element={
                            <RouteControl>
                                <Cartpage />
                            </RouteControl>
                        }
                    />
                    <Route
                        path="/bills"
                        element={
                            <RouteControl>
                                <Billspage />
                            </RouteControl>
                        }
                    />
                    <Route
                        path="/customers"
                        element={
                            <RouteControl>
                                <Customerpage />
                            </RouteControl>
                        }
                    />
                    <Route
                        path="/products"
                        element={
                            <RouteControl>
                                <ProductPage />
                            </RouteControl>
                        }
                    />
                    <Route path="/register" element={<Register />} />
                    <Route path="/login" element={<Login />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;

export const RouteControl = ({ children }) => {
    if (localStorage.getItem("posUser")) {
        return children;
    } else {
        return <Navigate to="login" />;
    }
};
