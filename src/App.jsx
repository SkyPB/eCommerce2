import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar.jsx";
import Footer from "./components/Footer.jsx";
import FeaturedProduct from "./components/FeaturedProduct.jsx";
import CareFAQs from "./components/CareFAQs.jsx";
import Catalog from "./components/Catalog.jsx";
import CartPage from "./components/Cart.jsx";
import RefundPolicy from "./components/Refund.jsx";
import SignInPage from "./components/SignIn.jsx";
import RegisterPage from "./components/Register.jsx";
import Slider from "./components/Slider.jsx";
import "./css/styles.css";

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
    console.log(`${product.name} added to cart`);
  };

  return (
    <Router>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<Catalog addToCart={addToCart} />} />
          <Route path="/refund-policy" element={<RefundPolicy />} />
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/cart" element={<CartPage cart={cart} />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

const HomePage = function () {
  return (
    <div>
      <img src="/images/candles.jpg" alt="candles" />
      <FeaturedProduct
        name="Champagne Life"
        price={22.0}
        imageUrl="/images/bigchampagne.webp"
      />
      <Slider />
      <CareFAQs />
    </div>
  );
};

export default App;
