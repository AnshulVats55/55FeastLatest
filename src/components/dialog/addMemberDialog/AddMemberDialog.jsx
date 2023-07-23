import React, { useEffect, useRef } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
  Typography,
  Grid,
  Stack,
  FormControl,
  Select,
  MenuItem,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import {
  getAddMemberDialogStyles,
  getCommonButtonCustomStyles,
} from "./AddMemberDialog.Styles";
import CommonButton from "../../button/CommonButton";
import Loader from "../../loader/Loader";
import { useSelector } from "react-redux";
import AddMemberDialogUtils from "./AddMemberDialog.Utils";

const AddMemberDialog = ({ open, scroll, handleClose }) => {
  const { isLoading } = useSelector((state) => {
    return state.loaderReducer;
  });

  const { classes } = getAddMemberDialogStyles();
  const {
    fullName,
    setFullName,
    email,
    setEmail,
    location,
    setLocation,
    handleAddNewMember,
  } = AddMemberDialogUtils();
  const { customStyles } = getCommonButtonCustomStyles;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const descriptionElementRef = useRef(null);
  useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  const newMemberData = {
    //data of new member to be added
    fullName: fullName,
    email: email,
    location: location,
  };
  console.log(newMemberData);

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
        className={classes.getDialogBoxStyles}
      >
        <DialogTitle
          id="scroll-dialog-title"
          className={classes.getDialogTitleStyles}
        >
          Add new member
        </DialogTitle>
        <DialogContent
          dividers={scroll === "paper"}
          className={classes.getDialogContentStyles}
        >
          <DialogContentText
            id="scroll-dialog-description"
            ref={descriptionElementRef}
            tabIndex={-1}
            className={classes.getDialogContentTextStyles}
          >
            <Typography
              sx={{
                fontSize: "1rem",
                "@media screen and (max-width: 532px)": {
                  fontSize: "0.9rem",
                },
              }}
            >
              Easily add new members to the portal for receiving their lunch
              counts
            </Typography>
          </DialogContentText>
          <form className={classes.getAddMemberFormStyles}>
            <Grid
              container
              rowGap={2}
              className={classes.getFormGridContStyles}
            >
              <Grid
                item
                lg={6}
                md={6}
                sm={6}
                xs={12}
                className={classes.getFormGridItemStyles}
              >
                <Stack sx={{ width: "95% " }}>
                  <TextField
                    placeholder="Enter member fullname*"
                    variant="outlined"
                    type="text"
                    value={fullName}
                    id="fullName"
                    {...register("fullName", {
                      required: true,
                      maxLength: 15,
                    })}
                    onChange={(e) => {
                      setFullName(e.target.value);
                    }}
                    className={classes.root}
                    inputProps={{ className: classes.input }}
                  />
                </Stack>
              </Grid>

              <Grid
                item
                lg={6}
                md={6}
                sm={6}
                xs={12}
                className={classes.getFormGridItemStyles}
              >
                <Stack sx={{ width: "95% " }}>
                  <TextField
                    placeholder="Enter member email*"
                    variant="outlined"
                    type="email"
                    value={email}
                    id="email"
                    {...register("email", {
                      required: true,
                      maxLength: 15,
                    })}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    className={classes.root}
                    inputProps={{ className: classes.input }}
                  />
                </Stack>
              </Grid>

              <Grid
                item
                lg={6}
                md={6}
                sm={6}
                xs={12}
                className={classes.getFormGridItemStyles}
              >
                <Stack sx={{ width: "95% " }}>
                  <FormControl fullWidth sx={{ background: "" }}>
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
                          fontSize: "0.9rem",
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
                      <MenuItem
                        value={"WFH"}
                        className={classes.getMenuItemStyles}
                      >
                        Work from home
                      </MenuItem>
                    </Select>
                  </FormControl>
                </Stack>
              </Grid>

              <Grid
                item
                lg={6}
                md={6}
                sm={6}
                xs={12}
                className={classes.getFormGridItemFourStyles}
              >
                <motion.div
                  initial={{ scale: 1 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ duration: 0.1 }}
                  style={{ width: "95%" }}
                >
                  <CommonButton
                    children="Add member"
                    customStyles={customStyles}
                    type="submit"
                    onClick={(event) => {
                      handleAddNewMember(event, newMemberData);
                    }}
                  />
                </motion.div>
              </Grid>
            </Grid>
          </form>
        </DialogContent>
        <DialogActions className={classes.getDialogActionStyles}>
          <Button
            onClick={handleClose}
            className={classes.getCloseButtonStyles}
          >
            Close
          </Button>
        </DialogActions>
      </Dialog>
      {isLoading ? <Loader /> : <></>}
    </div>
  );
};

export default AddMemberDialog;
