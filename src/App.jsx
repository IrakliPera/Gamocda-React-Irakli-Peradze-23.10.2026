import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import {
  BrowserRouter,
  Routes,
  Route,
  link,
} from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Contact from "./pages/Contact";

function ProductDetails() {
  return <h2>Product details</h2>
}

function App() {
  return (
    <>
      <Header></Header>
      <Footer></Footer>
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
    <nav>
      <link to="/">Home</link>{" "}
      <link to="/products">Products</link>{" "}
      <link to="/contact">Contact</link>{" "}
    </nav>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/product/:id" element={<ProductDetails />} />
    </Routes>
    </BrowserRouter>
  )
};