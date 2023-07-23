import { useState } from "react";
import { handleFormattedDate, getNextDate } from "../../../common/CommonData";
import { useDispatch } from "react-redux";
import { setCustomSnackbar } from "../../../store/slices/SnackbarSlice";
import snackbarMessages from "../../../Constants";

const BookForBuddyUtils = () => {
  const dispatch = useDispatch();

  const [isDataLoaded, setIsDataLoaded] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [myBuddies, setMyBuddies] = useState([]);
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const formattedDate = handleFormattedDate(new Date());
  const nextDate = getNextDate(new Date());
  const nextDateFormatted = handleFormattedDate(nextDate);

  const date =
    new Date().getHours() >= 15 && new Date().getHours() <= 23
      ? nextDateFormatted
      : formattedDate;

  const memberData = [
    //member's dummy data
    {
      memberName: "",
      memberEmail: "",
    },
    {
      memberName: "",
      memberEmail: "",
    },
    {
      memberName: "",
      memberEmail: "",
    },
    {
      memberName: "",
      memberEmail: "",
    },
    {
      memberName: "",
      memberEmail: "",
    },
    {
      memberName: "",
      memberEmail: "",
    },
  ];

  const handleMemberSearch = (event) => {
    //handles member search
    setSearchTerm(event.target.value.toLowerCase());
  };

  const handleBookingNotifications = (notificationMessage) => {
    //dispatches notifications based on response
    dispatch(
      setCustomSnackbar({
        snackbarOpen: true,
        snackbarType: snackbarMessages.ERROR,
        snackbarMessage: notificationMessage,
      })
    );
  };

  const checkMealBookingAvailability = () => {
    //handles checking timings for meal bookings
    const currentDateTime = new Date();
    const currentDay = currentDateTime.getDay();
    const currentHour = currentDateTime.getHours();

    if (currentDay === 0) {
      if (currentHour >= 15 && currentHour <= 23) {
        //booking allowed from 5PM(Sunday) to 9AM(Monday)
        setIsBookingOpen(true);
        return true;
      } else {
        setIsBookingOpen(false);
        handleBookingNotifications("Bookings closed for today !");
        return false;
      }
    } else if (currentDay >= 1 && currentDay <= 4) {
      if (currentHour >= 0 && currentHour <= 8) {
        //booking allowed from 7PM to 9AM the next day
        setIsBookingOpen(true);
        return true;
      } else if (currentHour >= 12 && currentHour <= 23) {
        setIsBookingOpen(true);
        return true;
      } else {
        setIsBookingOpen(false);
        handleBookingNotifications("Bookings closed for today !");
        return false;
      }
    } else if (currentDay === 5) {
      if (currentHour >= 0 && currentHour <= 8) {
        //booking allowed from 12AM(Friday) to 9AM(Friday)
        setIsBookingOpen(true);
        return true;
      } else {
        setIsBookingOpen(false);
        handleBookingNotifications("Bookings closed for today !");
        return false;
      }
    } else {
      setIsBookingOpen(false);
      handleBookingNotifications("Bookings not allowed on weekend !");
      return false;
    }
  };

  return {
    isDataLoaded,
    setIsDataLoaded,
    searchTerm,
    setSearchTerm,
    myBuddies,
    setMyBuddies,
    memberData,
    date,
    handleMemberSearch,
    checkMealBookingAvailability,
  };
};

export default BookForBuddyUtils;
