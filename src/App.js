import "./App.css";
import Nav from "./Component/Nav";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Component/home/Home";
import Footer from "./Component/footer/Footer";
import Accesories from "./Component/accessories/Accesories";
import ProductPage from "./Component/Product/ProductPage";
import Cart from "./Component/cart/Cart";
import Signin from "./Component/sign/Signin";
import Register from "./Component/sign/Register";
import UserProvider from "./Component/context/UserContext";

function App() {
  return (
    <div className="App">
     <UserProvider>
     <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/accesories" element={<Accesories />} />
          <Route path="/productpage/:_id" element={<ProductPage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/ " element={<Register />} />
          </Routes>
        <Footer />
      </BrowserRouter>
     </UserProvider>
    </div>
  );
}

export default App;
