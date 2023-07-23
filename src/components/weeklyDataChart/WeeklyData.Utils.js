import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  getLastFiveDaysCount,
  getReversedDate,
} from "../../invitationMethods/InvitationMethods";
import { setCustomSnackbar } from "../../store/slices/SnackbarSlice";
import snackbarMessages from "../../Constants";

const WeeklyDataUtils = () => {
  const dispatch = useDispatch();

  const [isDataLoaded, setIsDataLoaded] = useState(false);
  const [lastFiveDaysCount, setLastFiveDaysCount] = useState([]);
  const [lastFiveDaysDate, setLastFiveDaysDate] = useState([]);

  const handleLastFiveDaysCount = async () => {
    //handles last five days count
    const response = await getLastFiveDaysCount();
    console.log("Response of get previous week count API", response);
    if (response?.data?.status === snackbarMessages.SUCCESS) {
      const fiveDaysCount = [],
        fiveDaysName = [],
        fiveDaysDate = [];
      response?.data?.data.map((count) => {
        fiveDaysCount.push(count.count);
        fiveDaysName.push(count.day);
        fiveDaysDate.push(getReversedDate(count.date));
      });
      setLastFiveDaysCount(fiveDaysCount);
      setLastFiveDaysDate(fiveDaysDate);
      setIsDataLoaded(true);
    } else if (response?.response?.data?.status === snackbarMessages.FAILURE) {
      dispatch(
        setCustomSnackbar({
          snackbarOpen: true,
          snackbarType: snackbarMessages.ERROR,
          snackbarMessage: snackbarMessages.DATA_FETCHED_FAILURE,
        })
      );
    }
  };

  return {
    isDataLoaded,
    lastFiveDaysCount,
    lastFiveDaysDate,
    handleLastFiveDaysCount,
  };
};

export default WeeklyDataUtils;
