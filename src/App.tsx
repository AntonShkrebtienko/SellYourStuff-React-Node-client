import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import Menu from "./components/navigation/Menu"
import Root from "./components/routes/root/Root";
import Login from "./components/routes/login/Login";
import Register from "./components/routes/register/Register";
import Products from "./components/routes/products/Products";
import AddProduct from "./components/routes/products/Add-product";
import * as React from "react";


function App() {
    return (
        <Router>
            <Menu />
            <Routes>
                <Route path="/" element={<Root />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/products" element={<Products />} />
                <Route path="/contact" element={<AddProduct />} />

            </Routes>
        </Router>
    );
}

export default App;