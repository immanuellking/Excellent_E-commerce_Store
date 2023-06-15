import './App.css';
import Banner from './components/Banner';
import CategorySection from './components/CategorySection';
import HeaderSection from './components/HeaderSection';
import ThisMonth from './components/ThisMonth';
import Todays from "./components/Todays";
import Enhance from "./components/Enhance";
import OurProducts from './components/OurProducts';
import NewArrivals from './components/NewArrivals';

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
    </>
  )
}

export default App
