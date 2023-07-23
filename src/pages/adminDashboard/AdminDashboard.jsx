import React, { useState, useEffect, useRef } from "react";
import { getAdminDashboardStyles } from "./AdminDashboard.Styles";
import {
  Box,
  Grid,
  Typography,
  Skeleton,
  TextField,
  Stack,
  Button,
} from "@mui/material";
import InviteMemberCard from "../../components/card/InviteMemberCard";
import { handleMemberCountByDate } from "../../bookingMethods/BookingMethods";
import { handleFormattedDate, getNextDate } from "../../common/CommonData";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import ProgressBar from "../../components/progressBar/ProgressBar";
import { useDispatch, useSelector } from "react-redux";
import {
  getTotalMembers,
  getReversedDate,
} from "../../invitationMethods/InvitationMethods";
import CommonButton from "../../components/button/CommonButton";
import WeeklyData from "../../components/weeklyDataChart/WeeklyData";
import AddMemberDialog from "../../components/dialog/addMemberDialog/AddMemberDialog";
import DeleteMemberDialog from "../../components/dialog/DeleteMemberDialog";
import snackbarMessages from "../../Constants";
import { setCustomSnackbar } from "../../store/slices/SnackbarSlice";
import { motion } from "framer-motion";
import * as XLSX from "xlsx";
const AdminDashboard = () => {
  const { location } = useSelector((state) => {
    return state.memberDataReducer;
  });

  const { classes } = getAdminDashboardStyles();
  const dispatch = useDispatch();

  const [isDataLoaded, setIsDataLoaded] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [todaysCount, setTodaysCount] = useState([]);
  const [todaysTotalCount, setTodaysTotalCount] = useState(0);
  const [totalMembers, setTotalMembers] = useState(0);
  const [addMemberOpen, setAddMemberOpen] = useState(false);
  const [addMemberScroll, setAddMemberScroll] = useState("paper");
  const [deleteMemberOpen, setDeleteMemberOpen] = useState(false);
  const [deleteMemberScroll, setDeleteMemberScroll] = useState("paper");
  let animationDuration = 0.4;

  const formattedDate = handleFormattedDate(new Date());
  const nextDate = getNextDate(new Date());
  const nextDateFormatted = handleFormattedDate(nextDate);

  const dateToGetTodaysCount = {
    //date to get todays count
    date:
      new Date().getHours() >= 12 && new Date().getHours() <= 23
        ? nextDateFormatted
        : formattedDate,
  };

  const handleReversedDate = (date) => {
    //reverses a date
    const reversedDate = getReversedDate(date);
    return reversedDate;
  };

  const handleAddMemberOpen = (scrollType) => () => {
    //opens add member dialog
    setAddMemberOpen(true);
    setAddMemberScroll(scrollType);
  };

  const handleAddMemberClose = () => {
    //closeds add member dialog
    setAddMemberOpen(false);
  };

  const handleDeleteMemberOpen = (scrollType) => () => {
    //opens delete member dialog
    setDeleteMemberOpen(true);
    setDeleteMemberScroll(scrollType);
  };

  const handleDeleteMemberClose = () => {
    //closes delete member dialog
    setDeleteMemberOpen(false);
  };

  const descriptionElementRef = useRef(null);
  useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  useEffect(() => {
    //get todaysCount according to date
    const getTodaysTotalCount = async () => {
      const response = await handleMemberCountByDate(dateToGetTodaysCount);
      console.log(
        "Response of today's count api----------------------->",
        response
      );
      setTodaysCount(response?.data?.data);
      setIsDataLoaded(true);
    };

    getTodaysTotalCount();
  }, []);

  useEffect(() => {
    //get total members according to location
    const handleGetTotalMembers = async () => {
      const response = await getTotalMembers(location);
      setTotalMembers(response?.data?.data?.length);
    };

    handleGetTotalMembers();
  }, []);

  useEffect(() => {
    //gradually increases the value from 0 to todaysCount.length
    const todaysCountPercentage =
      todaysCount?.length > 0 ? (todaysCount?.length / totalMembers) * 100 : 0;

    let currentValue = 0;
    const increment = todaysCountPercentage / 100;
    const interval = setInterval(() => {
      currentValue += increment;
      if (currentValue >= todaysCountPercentage) {
        currentValue = todaysCountPercentage;
        clearInterval(interval);
      }
      setTodaysTotalCount(currentValue);
    }, 10);

    return () => {
      clearInterval(interval);
    };
  }, [todaysCount, totalMembers]);

  const memberData = [
    //member's dummy data
    {
      memberName: "Dummy User",
      memberEmail: "dummy.user@fiftyfivetech.io",
    },
    {
      memberName: "Dummy User",
      memberEmail: "dummy.user@fiftyfivetech.io",
    },
    {
      memberName: "Dummy User",
      memberEmail: "dummy.user@fiftyfivetech.io",
    },
    {
      memberName: "Dummy User",
      memberEmail: "dummy.user@fiftyfivetech.io",
    },
    {
      memberName: "Dummy User",
      memberEmail: "dummy.user@fiftyfivetech.io",
    },
    {
      memberName: "Dummy User",
      memberEmail: "dummy.user@fiftyfivetech.io",
    },
  ];

  const handleMemberSearch = (event) => {
    //handles member search
    setSearchTerm(event.target.value.toLowerCase());
  };
  const filteredUsers = todaysCount?.filter((member) =>
    member.fullName.toLowerCase().includes(searchTerm)
  );

  const handleExportInExcel = (memberData) => {
    //handles exporting member list in excel
    const fileName =
      new Date().getHours() >= 15 && new Date().getHours() <= 23
        ? `Count for ${handleReversedDate(nextDateFormatted)}`
        : `Count for ${handleReversedDate(formattedDate)}`;

    if (memberData.length === 0) {
      dispatch(
        setCustomSnackbar({
          snackbarOpen: true,
          snackbarType: snackbarMessages.ERROR,
          snackbarMessage: snackbarMessages.NO_MEMBER_IN_LIST,
        })
      );
    } else if (memberData.length > 0) {
      try {
        const worksheet = XLSX.utils.json_to_sheet(memberData);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, `${fileName}`);
        XLSX.writeFile(workbook, `${fileName}.xlsx`);
        dispatch(
          setCustomSnackbar({
            snackbarOpen: true,
            snackbarType: snackbarMessages.SUCCESS,
            snackbarMessage: snackbarMessages.FILE_DOWNLOAD_SUCCESSFULL,
          })
        );
      } catch (error) {
        dispatch(
          setCustomSnackbar({
            snackbarOpen: true,
            snackbarType: snackbarMessages.ERROR,
            snackbarMessage: snackbarMessages.FILE_DOWNLOAD_FAILURE,
          })
        );
      }
    }
  };

  // const handleExportInPDF = (pdfFileLink) => {
  //   //handles exporting member list in PDF
  //   window.open(pdfFileLink);
  // };

  return (
    <Grid container className={classes.getGridContStyles} rowGap={2}>
      <Grid
        container
        item
        lg={6}
        md={6}
        sm={12}
        xs={12}
        className={classes.getGridItemOneStyles}
        rowGap={0}
      >
        <Grid
          item
          lg={6}
          md={6}
          sm={6}
          xs={12}
          className={classes.getGridItemOnePointOneStyles}
        >
          <Box className={classes.getBoxOneStyles}>
            <Stack className={classes.getStackOneStyles}>
              <Typography className={classes.getTextOneStyles}>
                {new Date().getHours() >= 15 && new Date().getHours() <= 23
                  ? `Count for ${handleReversedDate(nextDateFormatted)}`
                  : `Count for ${handleReversedDate(formattedDate)}`}
              </Typography>
              <Typography className={classes.getTextTwoStyles}>
                {`${Math.round(todaysTotalCount)}`}
              </Typography>
            </Stack>
            <ShowChartIcon className={classes.getIconOneStyles} />
          </Box>
        </Grid>

        <Grid
          item
          lg={6}
          md={6}
          sm={6}
          xs={12}
          className={classes.getGridItemOnePointTwoStyles}
        >
          <Box className={classes.getBoxTwoStyles}>
            <ProgressBar
              todaysCount={todaysTotalCount}
              totalMembers={totalMembers}
            />
          </Box>
        </Grid>

        <Grid
          item
          lg={6}
          md={6}
          sm={6}
          xs={12}
          sx={{ background: "" }}
          className={classes.getGridItemOnePointThreeStyles}
        >
          <Box className={classes.getBoxThreeStyles}>
            <Stack>
              <Typography className={classes.getTextThreeStyles}>
                Freeing up the time by transitioning from manual list creation
                to automation
              </Typography>
              <Box className={classes.getDownloadButtonsContStyles}>
                <motion.div
                  initial={{ scale: 1 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ duration: 0.1 }}
                  style={{ width: "100%" }}
                >
                  <CommonButton
                    children={"Export in Excel"}
                    type=""
                    onClick={() => {
                      handleExportInExcel(todaysCount);
                    }}
                    customStyles={{
                      width: "75% !important",
                      height: "40px",
                      borderRadius: "4px",
                      border: "1px solid #ef5d36",
                      color: "#ef5d36",
                      fontSize: "0.9rem",
                      margin: "0.25rem 0rem",
                      "&:hover": {
                        background: "#ef5d36",
                        border: "none",
                        color: "#FFF",
                      },
                      "&:focus": {
                        outline: "none",
                      },
                      "@media screen and (max-width: 399px)": {
                        fontSize: "0.8rem",
                      },
                    }}
                  />
                </motion.div>
                <motion.div
                  initial={{ scale: 1 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ duration: 0.1 }}
                  style={{ width: "100%" }}
                >
                  <CommonButton
                    children={"Update menu"}
                    type=""
                    onClick={() => {}}
                    customStyles={{
                      width: "75% !important",
                      height: "40px",
                      borderRadius: "4px",
                      border: "1px solid #ef5d36",
                      color: "#ef5d36",
                      fontSize: "0.9rem",
                      margin: "0.25rem 0rem",
                      "&:hover": {
                        background: "#ef5d36",
                        border: "none",
                        color: "#FFF",
                      },
                      "&:focus": {
                        outline: "none",
                      },
                      "@media screen and (max-width: 399px)": {
                        fontSize: "0.8rem",
                      },
                    }}
                  />
                </motion.div>
              </Box>
            </Stack>
          </Box>
        </Grid>

        <Grid
          item
          lg={6}
          md={6}
          sm={6}
          xs={12}
          sx={{ background: "" }}
          className={classes.getGridItemOnePointFourStyles}
        >
          <Box className={classes.getBoxFourStyles}>
            <Stack>
              <Typography className={classes.getTextFourStyles}>
                Now you can add & delete members in a speedy way without a fuss!
              </Typography>
              <Box className={classes.getDownloadButtonsContStyles}>
                <motion.div
                  initial={{ scale: 1 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ duration: 0.1 }}
                  style={{ width: "100%" }}
                >
                  <Button
                    className={classes.getAddMemberButtonStyles}
                    onClick={handleAddMemberOpen("paper")}
                  >
                    Add member
                  </Button>
                </motion.div>
                {addMemberOpen ? (
                  <AddMemberDialog
                    open={addMemberOpen}
                    scroll={addMemberScroll}
                    handleClose={handleAddMemberClose}
                  />
                ) : (
                  <></>
                )}
                <motion.div
                  initial={{ scale: 1 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ duration: 0.1 }}
                  style={{ width: "100%" }}
                >
                  <Button
                    className={classes.getAddMemberButtonStyles}
                    onClick={handleDeleteMemberOpen("paper")}
                  >
                    Delete member
                  </Button>
                </motion.div>
                {deleteMemberOpen ? (
                  <DeleteMemberDialog
                    open={deleteMemberOpen}
                    scroll={deleteMemberScroll}
                    handleClose={handleDeleteMemberClose}
                    children="Delete"
                    placeholder="Search member to delete..."
                  />
                ) : (
                  <></>
                )}
              </Box>
            </Stack>
          </Box>
        </Grid>
      </Grid>

      <Grid
        container
        item
        lg={6}
        md={6}
        sm={12}
        xs={12}
        className={classes.getGridItemTwoStyles}
      >
        <Grid
          item
          lg={12}
          md={12}
          sm={12}
          xs={12}
          className={classes.getGridItemTwoPointOneStyles}
        >
          <TextField
            type="search"
            placeholder="Search members for today's count..."
            variant="outlined"
            multiline
            className={classes.root}
            onChange={handleMemberSearch}
          />
          <Box className={classes.getStackStyles}>
            <Grid container item>
              {isDataLoaded ? (
                filteredUsers?.length > 0 ? (
                  filteredUsers?.map((member, index) => {
                    return (
                      <Grid
                        item
                        lg={12}
                        md={12}
                        sm={12}
                        xs={12}
                        sx={{ background: "" }}
                      >
                        <InviteMemberCard
                          indexNumber={index + 1}
                          memberName={member.fullName}
                          memberEmail={member.email}
                          animationDuration={animationDuration}
                          children="Remove"
                          isDataLoaded={isDataLoaded}
                          isDashboard={true}
                        />
                      </Grid>
                    );
                  })
                ) : (
                  <Typography className={classes.getErrorMessageOneStyles}>
                    {`No member has booked a meal for ${
                      new Date().getHours() >= 15 && new Date().getHours() <= 23
                        ? handleReversedDate(nextDateFormatted)
                        : handleReversedDate(formattedDate)
                    }`}
                  </Typography>
                )
              ) : (
                memberData?.map((member, index) => {
                  return (
                    <Grid
                      item
                      lg={12}
                      md={12}
                      sm={12}
                      xs={12}
                      sx={{ background: "" }}
                    >
                      <Skeleton
                        animation="wave"
                        sx={{ minWidth: "100% !important" }}
                      >
                        <InviteMemberCard
                          indexNumber={index + 1}
                          memberName={member.memberName}
                          memberEmail={member.memberEmail}
                          animationDuration={animationDuration}
                          children="Remove"
                          isDataLoaded={isDataLoaded}
                          isDashboard={true}
                        />
                      </Skeleton>
                    </Grid>
                  );
                })
              )}
            </Grid>
          </Box>
        </Grid>

        <Grid
          item
          lg={12}
          md={12}
          sm={12}
          xs={12}
          className={classes.getGridItemTwoPointTwoStyles}
        >
          <WeeklyData />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default AdminDashboard;
