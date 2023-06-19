import React, {useRef} from 'react';
import SectionHeader from './SectionHeader';
import Categories from './Categories';

const CategorySection = () => {
  const slideRef = useRef();

    const handleScroll = (direction) => {
        if(direction === "right" ) {
            slideRef.current.scrollLeft += 200
        }
        if(direction === "left" ) {
            slideRef.current.scrollLeft -= 200
        }
    }

  return (
    <div className=" px-3 my-12 lg:px-12 lg:my-20 w-full">
      <SectionHeader handleScroll={handleScroll} direction={true} title={"Browse By Category"} tag={"Category"} />
      <Categories slideRef={slideRef} />
    </div>
  )
}

export default CategorySection