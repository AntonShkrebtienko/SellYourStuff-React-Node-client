import * as React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css"
import Menu from "./components/navigation/Menu"
import Root from "./components/routes/root/Root";
import Login from "./components/routes/login/Login";
import Register from "./components/routes/register/Register";
import Products from "./components/routes/products/Products";
import AddProduct from "./components/routes/products/Add-product";
import Logout from "./components/routes/logout/Logout";


function App() {
    return (
        <Router>
            <Menu />
            <Routes>
                <Route path="/" element={<Root />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/products" element={<Products />} />
                <Route path="/add-product" element={<AddProduct />} />
                <Route path="/logout" element={<Logout />} />
            </Routes>
        </Router>
    );
}

export default App;