import './App.css';
import Banner from './components/Banner';
import CategorySection from './components/CategorySection';
import HeaderSection from './components/HeaderSection';
import ThisMonth from './components/ThisMonth';
import Todays from "./components/Todays";
import Enhance from "./components/Enhance";
import OurProducts from './components/OurProducts';
import NewArrivals from './components/NewArrivals';
import Services from './components/Services';
import Footer from './components/Footer';

function App() {

  return (
    <>
      <HeaderSection />
      <Banner />
      <Todays />
      <CategorySection />
      <ThisMonth />
      <Enhance />
      <OurProducts />
      <NewArrivals />
      <Services />
      <Footer />
    </>
  )
}

export default App
