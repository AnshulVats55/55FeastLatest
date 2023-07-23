import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { getSignupFormStyles } from "./SignupForm.Styles";
import {
  Box,
  Grid,
  Stack,
  TextField,
  FormControl,
  Select,
  MenuItem,
  Typography,
  OutlinedInput,
  IconButton,
  InputAdornment,
} from "@mui/material";
import CommonButton from "../button/CommonButton";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import CustomDialog from "../dialog/Dialog";
import { motion } from "framer-motion";
import handleMemberSignup from "../../api/signup/Signup";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setIsLoading } from "../../store/slices/LoaderSlice";
import { setCustomSnackbar } from "../../store/slices/SnackbarSlice";
import Loader from "../loader/Loader";
import snackbarMessages from "../../Constants";

const SignupForm = () => {
  const { classes } = getSignupFormStyles();

  const { isLoading } = useSelector((state) => {
    return state.loaderReducer;
  });
  // console.log(isLoading);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [location, setLocation] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [profilePicture, setProfilePicture] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [isProfilePicAttached, setIsProfilePicAttached] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const [open, setOpen] = useState(false);
  const [scroll, setScroll] = useState("paper");

  const handleClose = () => {
    setOpen(false);
  };

  const handlePhoneNumber = (event) => {
    const input = event.target.value;
    const hasEnglishAlphabets = /[a-zA-Z]/.test(input);
    const hasSpecialSymbols = /[^a-zA-Z0-9\s]/.test(input);

    if (hasEnglishAlphabets) {
      alert("Phone number can't have english characters");
    } else if (hasSpecialSymbols) {
      alert("Phone number can't have special symbols");
    } else {
      setPhoneNumber(input);
    }
  };

  const getBase64 = (file) => {
    let reader = new FileReader();
    let encodedFile = "";
    reader.readAsDataURL(file);
    reader.onload = function () {
      encodedFile = reader.result;
      setProfilePicture(encodedFile);
    };
    reader.onerror = function (error) {
      return error;
    };
  };

  const handleProfilePictureChange = (event) => {
    const profilePic = event.target.files;
    if (profilePic && profilePic.length > 0) {
      getBase64(profilePic[0]);
      setIsProfilePicAttached(true);
      setOpen(true);
    }
  };

  const handlePasswordVisibility = () => {
    //to toggle visibility of password
    setIsPasswordVisible(!isPasswordVisible);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const memberData = {
    firstName: firstName,
    lastName: lastName,
    phone: parseInt(phoneNumber),
    photo: profilePicture,
    location: location,
    gender: gender,
    email: email,
    password: password,
  };

  const handleSignup = async (event) => {
    event.preventDefault();
    dispatch(setIsLoading(true));
    const response = await handleMemberSignup(memberData);
    console.log(
      "Signup response is-------------------------------->",
      response
    );
    if (response?.data?.status === snackbarMessages.SUCCESS) {
      dispatch(setIsLoading(false));
      dispatch(
        setCustomSnackbar({
          snackbarOpen: true,
          snackbarType: snackbarMessages.SUCCESS,
          snackbarMessage: snackbarMessages.SIGNUP_SUCCESSFULL,
        })
      );
      setTimeout(() => {
        navigate("/");
      }, 2500);
    } else if (response?.data?.status === snackbarMessages.FAILURE) {
      dispatch(setIsLoading(false));
      dispatch(
        setCustomSnackbar({
          snackbarOpen: true,
          snackbarType: snackbarMessages.FAILURE,
          snackbarMessage: snackbarMessages.SIGNUP_FAILURE,
        })
      );
    }
  };

  return (
    <Box className={classes.getMainContStyles}>
      <Stack className={classes.getTextContStyles}>
        <Typography className={classes.getTextOneStyles}>
          Welcome to 55Feast
        </Typography>
        <Typography className={classes.getTextTwoStyles}>
          Please enter your details
        </Typography>
      </Stack>
      <form className={classes.getSignupFormStyles}>
        <Grid container rowSpacing={2} columnSpacing={1}>
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <Stack>
              <TextField
                placeholder="Enter first name*"
                variant="outlined"
                type="text"
                value={firstName}
                id="firstName"
                {...register("firstName", {
                  required: true,
                  maxLength: 15,
                })}
                onChange={(e) => {
                  setFirstName(e.target.value);
                }}
                className={classes.root}
                inputProps={{ className: classes.input }}
              />
            </Stack>
          </Grid>

          <Grid item lg={6} md={6} sm={12} xs={12}>
            <Stack>
              <TextField
                placeholder="Enter last name*"
                variant="outlined"
                type="text"
                value={lastName}
                id="lastName"
                {...register("lastName", {
                  required: true,
                  maxLength: 15,
                })}
                onChange={(e) => {
                  setLastName(e.target.value);
                }}
                className={classes.root}
                inputProps={{ className: classes.input }}
              />
            </Stack>
          </Grid>

          <Grid item lg={6} md={6} sm={12} xs={12}>
            <Stack>
              <TextField
                placeholder="Enter phone number"
                variant="outlined"
                type="text"
                value={phoneNumber}
                id="phoneNumber"
                {...register("phoneNumber", {
                  required: true,
                  maxLength: 10,
                })}
                onChange={(event) => {
                  handlePhoneNumber(event);
                }}
                className={classes.root}
                inputProps={{ className: classes.input, maxLength: 10 }}
              />
            </Stack>
          </Grid>

          <Grid
            item
            lg={6}
            md={6}
            sm={12}
            xs={12}
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
            }}
          >
            <motion.div
              initial={{ scale: 1 }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.1 }}
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <label
                htmlFor="files"
                className={classes.getProfilePicLabelStyles}
              >
                Choose Picture
              </label>
            </motion.div>
            <input
              id="files"
              type="file"
              style={{
                display: "none",
              }}
              multiple={false}
              accept="image/*"
              {...register("profilePicture")}
              onChange={(event) => {
                handleProfilePictureChange(event);
              }}
            />
          </Grid>
          {isProfilePicAttached ? (
            <CustomDialog
              open={open}
              scroll={scroll}
              handleClose={handleClose}
              image={profilePicture}
            />
          ) : (
            <></>
          )}
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <Stack>
              <FormControl fullWidth>
                <Select
                  variant="outlined"
                  labelId="demo-simple-select-label"
                  displayEmpty
                  value={location}
                  inputProps={{ "aria-label": "Without label" }}
                  {...register("location")}
                  onChange={(e) => {
                    setLocation(e.target.value);
                  }}
                  sx={{
                    "& .MuiSelect-select": {
                      paddingLeft: "13px",
                      fontSize: "1rem",
                      background: "#F7F7F7",
                    },
                    "&.MuiInputBase-root": {
                      color: "#232229 !important",
                      "& fieldset": {
                        border: "none",
                      },
                      "&:hover fieldset": {
                        border: "none",
                      },
                      "&.MuiInputBase-root.Mui-focused fieldset": {
                        border: "1px solid #ef5d36",
                      },
                    },
                  }}
                >
                  <MenuItem value="" className={classes.getMenuItemStyles}>
                    Select location
                  </MenuItem>
                  <MenuItem
                    value={"Jaipur"}
                    className={classes.getMenuItemStyles}
                  >
                    Jaipur
                  </MenuItem>
                  <MenuItem
                    value={"Gurgaon"}
                    className={classes.getMenuItemStyles}
                  >
                    Gurgaon
                  </MenuItem>
                </Select>
              </FormControl>
            </Stack>
          </Grid>

          <Grid item lg={6} md={6} sm={12} xs={12}>
            <Stack>
              <FormControl fullWidth>
                <Select
                  variant="outlined"
                  labelId="demo-simple-select-label"
                  displayEmpty
                  value={gender}
                  inputProps={{ "aria-label": "Without label" }}
                  {...register("gender")}
                  onChange={(e) => {
                    setGender(e.target.value);
                  }}
                  sx={{
                    "& .MuiSelect-select": {
                      paddingLeft: "13px",
                      fontSize: "1rem",
                      background: "#F7F7F7",
                    },
                    "&.MuiInputBase-root": {
                      color: "#232229 !important",
                      "& fieldset": {
                        border: "none",
                      },
                      "&:hover fieldset": {
                        border: "none",
                      },
                      "&.MuiInputBase-root.Mui-focused fieldset": {
                        border: "1px solid #ef5d36",
                      },
                    },
                  }}
                >
                  <MenuItem value="" className={classes.getMenuItemStyles}>
                    Select gender
                  </MenuItem>
                  <MenuItem
                    value={"Male"}
                    className={classes.getMenuItemStyles}
                  >
                    Male
                  </MenuItem>
                  <MenuItem
                    value={"Female"}
                    className={classes.getMenuItemStyles}
                  >
                    Female
                  </MenuItem>
                </Select>
              </FormControl>
            </Stack>
          </Grid>

          <Grid item lg={12} md={12} sm={12} xs={12}>
            <Stack>
              <TextField
                placeholder="Enter your email*"
                variant="outlined"
                type="email"
                value={email}
                {...register("email", { required: true })}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                className={classes.root}
                inputProps={{ className: classes.input }}
              ></TextField>
            </Stack>
          </Grid>

          <Grid item lg={12} md={12} sm={12} xs={12}>
            <Stack>
              <OutlinedInput
                placeholder="Create password*"
                variant="outlined"
                type={isPasswordVisible ? "text" : "password"}
                value={password}
                {...register("password", {
                  required: true,
                  minLength: 8,
                  maxLength: 20,
                })}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handlePasswordVisibility}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {isPasswordVisible ? (
                        <VisibilityOffIcon />
                      ) : (
                        <VisibilityIcon />
                      )}
                    </IconButton>
                  </InputAdornment>
                }
                sx={{
                  "&.MuiOutlinedInput-root": {
                    background: "#F7F7F7",
                    fontSize: "1rem",
                    "& fieldset": {
                      border: "none",
                    },
                    "&:hover fieldset": {
                      border: "none",
                    },
                    "&.MuiInputBase-root.Mui-focused fieldset": {
                      border: "1px solid #ef5d36",
                    },
                  },
                  "&.MuiFormLabel-root": {
                    color: "green !important",
                    fontSize: "1rem",
                    "&.MuiFormLabel-root.Mui-focused": {
                      color: "#ef5d36",
                    },
                  },
                  "& .MuiOutlinedInput-input": {
                    color: "#232229 !important",
                  },
                }}
              />
            </Stack>
          </Grid>

          <Grid item lg={12} md={12} sm={12} xs={12}>
            <motion.div
              initial={{ scale: 1 }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.1 }}
            >
              <CommonButton
                children="Signup"
                customStyles={{
                  width: "100% !important",
                  height: "40px",
                  borderRadius: "4px",
                  border: "1px solid #ef5d36",
                  color: "#ef5d36",
                  "&:hover": {
                    background: "#ef5d36",
                    border: "none",
                    color: "#FFF",
                  },
                  "&:focus": {
                    outline: "none",
                  },
                }}
                type="submit"
                onClick={(event)=>{handleSignup(event)}}
              />
            </motion.div>
          </Grid>
        </Grid>
      </form>
      <Box className={classes.getLinkContStyles}>
        <Typography className={classes.getActionTextOneStyles}>
          Already have an account?
        </Typography>
        <Link to="/" className={classes.getLinkStyles}>
          &nbsp;Login
        </Link>
      </Box>
      {isLoading ? <Loader /> : <></>}
    </Box>
  );
};

export default SignupForm;
