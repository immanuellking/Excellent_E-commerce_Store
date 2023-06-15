import React from "react";
import game from "../assets/ps5.png";
import womanHat from "../assets/woman-hat.png";
import wirelessSpeaker from "../assets/wireless-speakers.png";
import perfume from "../assets/perfume.png";

const ArrivalInfo = ({heading, info}) => {
  return (
    <div className="text-lightGrey absolute bottom-6 left-3 lg:left-6 ">
      <h1 className="text-2xl font-semibold">{heading}</h1>
      <p className="text-sm sm:py-1 lg:py-3 w-44">{info}</p>
      <a href="#" className="underline">Shop Now</a>
    </div>
  )
}

const NewArrivalsBanner = () => {
  return (
    <div className="w-full h-[32rem] flex flex-col space-y-3 sm:space-y-0 sm:grid sm:grid-cols-4 sm:grid-rows-2 sm:gap-2 lg:gap-6 mt-10">
      <div className="col-span-2 row-span-2 bg-[#0D0D0D] relative">
        <div className="h-full flex items-end justify-center">
          <img src={game} alt="ps5" className="h-5/6" />
        </div>
        <ArrivalInfo heading={"PlayStation 5"} info={"Black and White version of the PS5 coming out on sale."} />
      </div>
      <div className="col-span-2 bg-[#0D0D0D] flex items-end justify-end relative">
        <div className="h-full">
          <img src={womanHat} alt="woman in hat" className="h-full" />
        </div>
        <ArrivalInfo heading={"Women’s Collections"} info={"Featured woman collections that give you another vibe."} />
      </div>
      <div className="bg-[#0D0D0D] flex-center relative py-4 sm:py-0">
        <div className="h-full">
          <img src={wirelessSpeaker} alt="wireless speaker" />
        </div>
        <ArrivalInfo heading={"Speakers"} info={"Amazon wireless speakers"} />
      </div>
      <div className="bg-[#0D0D0D] flex-center relative">
        <div className="h-full">
          <img src={perfume} alt="perfume" />
        </div>
        <ArrivalInfo heading={"Perfume"} info={"GUCCI INTENSE OUD EDP"} />
      </div>
    </div>
  );
};

export default NewArrivalsBanner;
