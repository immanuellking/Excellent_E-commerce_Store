import React from 'react';
import NewArrivalsBanner from './NewArrivalsBanner';
import SectionHeader from './SectionHeader';

const NewArrivals = () => {
  return (
    <section className="px-3 my-12 lg:px-12 lg:my-20 w-full">
      <SectionHeader title={"New Arrival"} tag={"Featured"} />
      <NewArrivalsBanner direction={false}/>
    </section>
  )
}

export default NewArrivals