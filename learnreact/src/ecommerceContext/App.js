import React, { createContext, useState } from "react";
import Home from "./Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./About";
import Cart from "./Cart";
import Header from "./Header";

export const ecommerceContext = createContext({});

function App() {
  const [cart, setCart] = useState([]);
  return (
    <>
      <ecommerceContext.Provider value={{cart, setCart}}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/cart" element={<Cart />}></Route>
          </Routes>
        </BrowserRouter>
      </ecommerceContext.Provider>
    </>
  );
}

export default App;
