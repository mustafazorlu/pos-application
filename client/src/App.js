import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Cartpage from "./pages/Cartpage";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Homepage />} />
                    <Route path="/cart" element={<Cartpage />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
