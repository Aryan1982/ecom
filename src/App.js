import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from "./scenes/home/Home";
import Navbar from "./scenes/global/Navbar";
import Footer from "./scenes/global/Footer";
import ItemDetails from "./scenes/itemDetails/ItemDetails";
import CartMenu from "./scenes/global/CartMenu";
import Checkout from "./scenes/checkout/Checkout";
import Confirmation from "./scenes/checkout/Confirmation";
import Login from "./components/Login";
import Register from "./components/Register";
import { ToastContainer } from "react-toastify";
import { Protector } from "./helpers";
import Logout from "./components/Logout";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        {/* <Navbar /> */}
        <ScrollToTop />
        <Routes>
        <Route path="/" element={<Protector Component={Home} />} />
          <Route path="/login" element={<Login />} />
          <Route path="item/:itemId" element={<ItemDetails />} />
          <Route path="/logout" element={<Logout/>} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="/register" element={<Register/>} />
          <Route path="checkout/success" element={<Confirmation />} />
        </Routes>
        <CartMenu />
        <ToastContainer />
      </BrowserRouter>
    </div>
  );
}

export default App;
