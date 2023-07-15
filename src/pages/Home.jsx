import React from 'react';
import Banner from "../components/Banner"
import Todays from "../components/Todays"
import CategorySection from "../components/CategorySection"
import ThisMonth from "../components/ThisMonth"
import Enhance from "../components/Enhance"
import OurProducts from "../components/OurProducts"
import NewArrivals from "../components/NewArrivals"
import Services from "../components/Services"
import ScrollToTop from '../components/ScrollToTop';

const Home = () => {
  return (
    <>
      <Banner />
      <Todays />
      <CategorySection />
      <ThisMonth />
      <Enhance />
      <OurProducts />
      <NewArrivals />
      <Services />
    </>
  )
}

export default Home