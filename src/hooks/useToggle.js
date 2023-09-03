import { useState } from "react";

export const useToggle = () => {
  const [toggledOn, setToggle] = useState(false);

  const handlerToggle = () => {
    //handler -> click -> toggle
    console.log("handlerToggle");
    setToggle(!toggledOn);
  };
  return {
    toggledOn,
    handlerToggle,
  };
};
