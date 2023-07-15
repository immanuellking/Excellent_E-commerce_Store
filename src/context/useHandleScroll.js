import { useRef } from "react";

const useHandleScroll = () => {
  const slideRef = useRef();

  const handleScroll = (direction) => {
    const scrollAmount = slideRef.current.clientWidth;
    if (direction === "right") {
      slideRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
    if (direction === "left") {
      slideRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    }
  };

  return {
    slideRef,
    handleScroll,
  };
};

export default useHandleScroll;
