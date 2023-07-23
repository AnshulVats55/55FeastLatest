import { useState } from "react";

const BookingkCardUtils = () => {
  const [isDataLoaded, setIsDataLoaded] = useState(false);

  const handleDataLoading = () => {
    setTimeout(() => {
      setIsDataLoaded(true);
    }, 1500);
  };

  return {
    isDataLoaded,
    handleDataLoading,
  };
};

export default BookingkCardUtils;
