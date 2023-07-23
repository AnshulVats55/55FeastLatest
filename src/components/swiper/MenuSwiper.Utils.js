import { useState } from "react";

const MenuSwiperUtils = () => {
  const [isDataLoaded, setIsDataLoaded] = useState(false);

  return {
    isDataLoaded,
    setIsDataLoaded,
  };
};

export default MenuSwiperUtils;
