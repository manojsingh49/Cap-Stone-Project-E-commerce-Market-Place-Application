import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Registration from "./components/Registration";
import Login from "./components/Login";
import ShoppingCart from "./components/ShoppingCart";
import SearchBar from "./components/SearchBar";
import ShoppingCartIcon from "@mui/icons-material/LocalMall";
import SearchIcon from "@mui/icons-material/Search";
import "./App.css";
import Footer from "./components/footer";
import Homebar from "./components/Homebar";
import NewArrivals from "./components/NewArrivals";
import ProductDetails from "./components/ProductDetails";
import { CartProvider } from "./components/CartContext";
import toastr from "toastr";
import "toastr/build/toastr.min.css";
import Checkout from "./components/Checkout";
const App = () => {
  return (
    <CartProvider>
      <Router>
        <div>
          <nav className="navbar">
            <div className="navbar-left">
              <Link to="/">Home</Link>
            </div>
            <div className="navbar-right">
              <Link to="/register">SignUp</Link>
              <Link to="/login">Login</Link>
              <Link to="/cart">
                <ShoppingCartIcon style={{ color: "black" }} />
              </Link>
              <Link to="/search">
                <SearchIcon style={{ color: "black" }} />
              </Link>
            </div>
          </nav>
          <Homebar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Registration />} />
            <Route path="/login" element={<Login />} />
            <Route path="/cart" element={<ShoppingCart />} />
            <Route path="/search" element={<SearchBar />} />
            <Route path="/new-arrivals" element={<NewArrivals />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
};

export default App;
