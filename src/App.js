import "./App.css";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { Routes, Route} from "react-router-dom";
import React from "react";
import CartProvider from "./CartContext";
import Cart from "./components/Cart";
import Checkout from './components/Checkout';
import Home from './components/Home'

function App() {
  return (
      <CartProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/speakers" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </CartProvider>
  );
}

export default App;
