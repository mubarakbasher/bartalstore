import { React, useState } from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Account from "./components/Account";
import Slideshadow from "./components/Slideshadow";
import Slideshow from "./components/Slideshow";
import ProductDetails from "./components/ProductDetails";

function App() {
  const [sideToggle, setSideToggle] = useState(false);
  return (
    <BrowserRouter>
      <div>
        <Header click={() => setSideToggle(true)} />
        <Slideshadow show={sideToggle} click={() => setSideToggle(false)} />
        <Slideshow show={sideToggle} click={() => setSideToggle(false)} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/account" element={<Account />} />
          <Route path="/product/:id" element={<ProductDetails />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
