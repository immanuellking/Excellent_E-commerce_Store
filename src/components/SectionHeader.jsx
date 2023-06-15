import React from 'react';
import Tag from "./Tag";
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';

const SectionHeader = ({handleScroll, title, tag, direction}) => {
  return (
    <div className="flex flex-col space-y-6 sm:space-y-9 ">
        <Tag title={tag} />
        <div className="flex justify-between">
            <h1 className="section-heading">{title}</h1>
            {direction && <div className="flex items-center justify-end space-x-5">
                <div className="arrow">
                    <BsArrowLeft className="text-xl font-semibold" onClick={() => handleScroll("left")} />
                </div>
                <div className="arrow" onClick={() => handleScroll("right")}>
                    <BsArrowRight className="text-xl font-semibold" />
                </div>
            </div>}
        </div>
    </div>
  )
}

export default SectionHeader