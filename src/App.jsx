import './App.css';
import HeaderSection from './components/HeaderSection';
import Footer from './components/Footer';
import { Routes, Route } from "react-router-dom"
import Home from './pages/Home';
import Cart from './pages/Cart';
import WishLists from './pages/WishLists';
import NotFound from './components/404';
import ProductPage from './components/ProductPage';
import AllProducts from './pages/AllProducts';
import About from './pages/About';
import Contact from './pages/Contact';
import CheckOut from './pages/CheckOut';

function App() {

  return (
    <>
      <HeaderSection />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/wish-list" element={<WishLists />} />
          <Route path="product/:itemId" element={<ProductPage />} />
          <Route path="/products" element={<AllProducts />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/cart/checkout" element={<CheckOut/>}/>
        </Routes>
      <Footer />
    </>
  )
}

export default App
