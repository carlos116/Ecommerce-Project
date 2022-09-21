import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Products from "./components/Products";
import Cart from "./components/Cart";
import { Routes, Route }  from 'react-router-dom';
import Contact from "./components/Contact";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<> <Home /> </>}></Route>
        <Route path="products" element={<Products />}></Route>
        <Route path="contact" element={<Contact />}></Route>
        <Route path="cart" element={<Cart />}></Route>
      </Routes>
    </div>
  );
}

export default App;
