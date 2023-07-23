// import { useState } from "react";
import { useDispatch } from "react-redux";
import snackbarMessages from "../../Constants";
import { setCustomSnackbar } from "../../store/slices/SnackbarSlice";
import { memo } from "react";

const InviteMemberCardUtils = () => {
  const dispatch = useDispatch();
  const handleMemberName = (memberName) => {
    //chops member name
    const finalName = memberName?.split(" ");
    if (finalName?.length === 1) {
      memberName = finalName[0];
    } else if (finalName?.length >= 2) {
      memberName = finalName[0] + " " + finalName[1];
    }
  };

  const handleMemberEmail = (isDashboard, memberEmail) => {
    //chops member email
    if(!isDashboard){
      if (memberEmail?.length > 24) {
        memberEmail = memberEmail.substring(0, 24) + "...";
      }
      return memberEmail;
    }
    return memberEmail;
  };

  const actionBeingPerformed = async (handleAction) => {
    try {
      const response = await handleAction();
      console.log(
        "Response at invite member card is this -------------->",
        response
      );
      if (response?.data?.status === "success") {
        if (response?.data?.message === "Invited successfully") {
          dispatch(
            setCustomSnackbar({
              snackbarOpen: true,
              snackbarType: snackbarMessages.SUCCESS,
              snackbarMessage: snackbarMessages.MEMBER_INVITATION_SUCCESSFULL,
            })
          );
        } else if (response?.data?.message === "Meal booked successfully") {
          dispatch(
            setCustomSnackbar({
              snackbarOpen: true,
              snackbarType: snackbarMessages.SUCCESS,
              snackbarMessage: snackbarMessages.MEMBER_MEAL_BOOKING_SUCCESSFULL,
            })
          );
        } else if (response?.data?.message === "User deleted successfully") {
          dispatch(
            setCustomSnackbar({
              snackbarOpen: true,
              snackbarType: snackbarMessages.SUCCESS,
              snackbarMessage: snackbarMessages.MEMBER_DELETED_SUCCESSFULL,
            })
          );
        }
      } else if (response?.response?.data?.status === "failure") {
        if (response?.response?.data?.message === "Internal server error") {
          dispatch(
            setCustomSnackbar({
              snackbarOpen: true,
              snackbarType: snackbarMessages.ERROR,
              snackbarMessage: snackbarMessages.MEMBER_INVITATION_FAILURE,
            })
          );
        } else {
          dispatch(
            setCustomSnackbar({
              snackbarOpen: true,
              snackbarType: snackbarMessages.ERROR,
              snackbarMessage: snackbarMessages.MEMBER_MEAL_BOOKING_FAILURE,
            })
          );
        }
      }
      return response;
    } catch (error) {
      dispatch(
        setCustomSnackbar({
          snackbarOpen: true,
          snackbarType: snackbarMessages.ERROR,
          snackbarMessage: "Try again later !",
        })
      );
      return error;
    }
  };

  return {
    handleMemberName,
    handleMemberEmail,
    actionBeingPerformed
  };
};

export default InviteMemberCardUtils;
