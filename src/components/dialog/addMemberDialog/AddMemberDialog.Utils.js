import { useState } from "react";
import { useDispatch } from "react-redux";
import { setCustomSnackbar } from "../../../store/slices/SnackbarSlice";
import snackbarMessages from "../../../Constants";
import { setIsLoading } from "../../../store/slices/LoaderSlice";
import { handleAddMember } from "../../../invitationMethods/InvitationMethods";

const AddMemberDialogUtils = () => {
  const dispatch = useDispatch();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [location, setLocation] = useState("");

  const handleAddNewMember = async (event, newMemberData) => {
    //handles adding new member
    event.preventDefault();
    if (fullName === "") {
      dispatch(
        setCustomSnackbar({
          snackbarOpen: true,
          snackbarType: snackbarMessages.ERROR,
          snackbarMessage: "Please enter fullname !",
        })
      );
    } else if (email === "") {
      dispatch(
        setCustomSnackbar({
          snackbarOpen: true,
          snackbarType: snackbarMessages.ERROR,
          snackbarMessage: "Please enter email !",
        })
      );
    } else if (location === "") {
      dispatch(
        setCustomSnackbar({
          snackbarOpen: true,
          snackbarType: snackbarMessages.ERROR,
          snackbarMessage: "Please enter location !",
        })
      );
    } else if (fullName !== "" && email !== "" && location !== "") {
      dispatch(setIsLoading(true));
      const response = await handleAddMember(newMemberData);
      console.log("Response of add new member API is this", response);
      if (response?.data?.status === "success") {
        dispatch(setIsLoading(false));
        dispatch(
          setCustomSnackbar({
            snackbarOpen: true,
            snackbarType: snackbarMessages.SUCCESS,
            snackbarMessage: "Member added successfully !",
          })
        );
        setFullName("");
        setEmail("");
        setLocation("");
      } else if (response?.data?.data?.status === "failure") {
        dispatch(setIsLoading(false));
        dispatch(
          setCustomSnackbar({
            snackbarOpen: true,
            snackbarType: snackbarMessages.ERROR,
            snackbarMessage: "Error adding member !",
          })
        );
      }
    }
  };

  return {
    fullName,
    setFullName,
    email,
    setEmail,
    location,
    setLocation,
    handleAddNewMember,
  };
};

export default AddMemberDialogUtils;
