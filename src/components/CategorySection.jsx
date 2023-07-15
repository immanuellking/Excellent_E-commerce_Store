import React from 'react';
import SectionHeader from './SectionHeader';
import Categories from './Categories';
import useHandleScroll from '../context/useHandleScroll';

const CategorySection = () => {
  const {slideRef, handleScroll} = useHandleScroll()

  return (
    <div className="px-3 my-12 lg:px-12 lg:my-20 w-full">
      <SectionHeader handleScroll={handleScroll} direction={true} title={"Browse By Category"} tag={"Category"} />
      <Categories slideRef={slideRef} />
    </div>
  )
}

export default CategorySection