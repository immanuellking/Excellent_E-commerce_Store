import './App.css';
import HeaderSection from './components/HeaderSection';
import Footer from './components/Footer';
import { Routes, Route } from "react-router-dom"
import Home from './pages/Home';
import Cart from './pages/Cart';

function App() {

  return (
    <>
      <HeaderSection />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      <Footer />
    </>
  )
}

export default App
