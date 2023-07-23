import React, { useState, useEffect, useRef } from 'react';
import { getPrebookDialogStyles } from './PrebookDialog.Styles';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField, Typography, Grid } from '@mui/material';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import 'date-fns';
import { handleFormattedDate, getLastDateOfCurrentMonth, getNextDate } from '../../common/CommonData';
import { getReversedDate } from '../../invitationMethods/InvitationMethods';
import { useDispatch } from 'react-redux';
import snackbarMessages from '../../Constants';
import { setCustomSnackbar } from '../../store/slices/SnackbarSlice';

const PrebookDialog = ({ open, scroll, handleClose }) => {

    const { classes } = getPrebookDialogStyles();
    const dispatch = useDispatch();

    const descriptionElementRef = useRef(null);
    useEffect(() => {
        if (open) {
        const { current: descriptionElement } = descriptionElementRef;
        if (descriptionElement !== null) {
            descriptionElement.focus();
        }
        }
    }, [open]);

    const [rangeStartDate, setRangeStartDate] = useState("");
    const [rangeEndDate, setRangeEndDate] = useState("");

    const handleStartDatePicked = (event) => {
        const formattedDate = handleFormattedDate(event);
        const reversedDate = getReversedDate(formattedDate);
        setRangeStartDate(reversedDate);
    };

    const handleEndDatePicked = (event) => {
        const formattedDate = handleFormattedDate(event);
        const reversedDate = getReversedDate(formattedDate);
        setRangeEndDate(reversedDate);
    };

    const disableWeekends = (date) => {
        return date.getDay() === 0 || date.getDay() === 6;
    }

    const handleMealPrebooking = async () => {//handles pre-booking of meal for a maximum of 5 days
        if(rangeStartDate === ""){//if start date is empty
            dispatch(
                setCustomSnackbar({
                snackbarOpen: true,
                snackbarType: snackbarMessages.ERROR,
                snackbarMessage: snackbarMessages.SELECT_START_DATE,
                })
            );
        }
        else if(rangeEndDate === ""){//if end date is empty
            dispatch(
                setCustomSnackbar({
                snackbarOpen: true,
                snackbarType: snackbarMessages.ERROR,
                snackbarMessage: snackbarMessages.SELECT_END_DATE,
                })
            );
        }
        else if(rangeStartDate !== "" && rangeEndDate !== ""){//if member has selected both dates
            const startMonth = rangeStartDate.split("-")[1];
            const endMonth = rangeEndDate.split("-")[1];
            if(startMonth === endMonth){//if start and end date falls in same month
                if((parseInt(rangeEndDate.split("-")[0]) - parseInt(rangeStartDate.split("-")[0])) <= 0){//if end date is equal to or less than start date
                    dispatch(
                        setCustomSnackbar({
                        snackbarOpen: true,
                        snackbarType: snackbarMessages.ERROR,
                        snackbarMessage: snackbarMessages.INVALID_END_DATE,
                        })
                    );
                }
                else{//if end date is greater than start date
                    const dateRange = 1 + parseInt(rangeEndDate.split("-")[0]) - parseInt(rangeStartDate.split("-")[0]);
                    console.log("date range first", dateRange);
                    if(dateRange >= 1 && dateRange <= 5){
                        console.log("Call first API here");
                        console.log("rangeStartDate", rangeStartDate);
                        console.log("rangeEndDate", rangeEndDate);
                        const reversedStartDate = getReversedDate(rangeStartDate);
                        const reversedEndDate = getReversedDate(rangeEndDate);
                    }
                    else{
                        dispatch(
                            setCustomSnackbar({
                            snackbarOpen: true,
                            snackbarType: snackbarMessages.ERROR,
                            snackbarMessage: snackbarMessages.INVALID_DATE_RANGE,
                            })
                        );
                    }
                }
            }
            else if(endMonth > startMonth && endMonth - startMonth === 1){//if end date month is greater than start date month by ONE
                const lastDateOfStartDateMonth = getLastDateOfCurrentMonth(startMonth);
                const dateRange = 1 + (lastDateOfStartDateMonth - parseInt(rangeStartDate.split("-")[0])) + (parseInt(rangeEndDate.split("-")[0]));
                if(dateRange >= 1 && dateRange <= 5){
                    console.log("Call second API here");
                    console.log("rangeStartDate", rangeStartDate);
                    console.log("rangeEndDate", rangeEndDate);
                }
                else{
                    dispatch(
                        setCustomSnackbar({
                        snackbarOpen: true,
                        snackbarType: snackbarMessages.ERROR,
                        snackbarMessage: snackbarMessages.INVALID_DATE_RANGE,
                        })
                    );
                }
            }
            else if(endMonth > startMonth && endMonth - startMonth > 1){//if end date month is greater than start date month but by more than ONE
                dispatch(
                    setCustomSnackbar({
                    snackbarOpen: true,
                    snackbarType: snackbarMessages.ERROR,
                    snackbarMessage: snackbarMessages.INVALID_MONTH_RANGE,
                    })
                );
            }
        }
    };

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
                    Pre-book your meal
                </DialogTitle>
                <DialogContent dividers={scroll === 'paper'} className={classes.getDialogContentStyles}>
                    <DialogContentText
                        id="scroll-dialog-description"
                        ref={descriptionElementRef}
                        tabIndex={-1}
                        className={classes.getDialogContentTextStyles}
                    >
                        <Typography
                            sx={{
                                fontSize:"1rem",
                            }}
                        >
                            Pre-book your mouthwatering meals and enjoy a week full of culinary delights, conveniently delivered to your table
                        </Typography>
                        <Grid container spacing={1} className={classes.getGridContStyles}>
                            <Grid item lg={6} md={6} sm={12} xs={12} className={classes.getGridItemStyles}>
                                <Typography
                                    sx={{
                                        fontSize:"1rem",
                                    }}
                                >
                                    Start Date
                                </Typography>
                                <DesktopDatePicker
                                    className={classes.root}
                                    autoOk
                                    onChange={(event)=>{handleStartDatePicked(event)}}
                                    timezone="default"
                                    disablePast
                                    // shouldDisableDate={()=>{
                                    //     const nextDate = getNextDate(new Date());
                                    //     return disableWeekends(nextDate);
                                    // }}
                                />
                                <Typography
                                    sx={{
                                        fontSize:"0.8rem",
                                        marginTop:"1rem",
                                    }}
                                >
                                    {rangeStartDate}
                                </Typography>
                            </Grid>
                            <Grid item lg={6} md={6} sm={12} xs={12} className={classes.getGridItemStyles}>
                                <Typography
                                    sx={{
                                        fontSize:"1rem",
                                    }}
                                >
                                    End Date
                                </Typography>
                                <DesktopDatePicker
                                    className={classes.root}
                                    autoOk
                                    onChange={(event)=>{handleEndDatePicked(event)}}
                                    timezone="default"
                                    disablePast
                                />
                                <Typography
                                    sx={{
                                        fontSize:"0.8rem",
                                        marginTop:"1rem",
                                    }}
                                >
                                    {rangeEndDate}
                                </Typography>
                            </Grid>
                        </Grid>
                    </DialogContentText>
                </DialogContent>
            <DialogActions
                className={classes.getDialogActionStyles}
            >
                <Button
                    onClick={handleMealPrebooking}
                    className={classes.getCloseButtonStyles}
                >
                    Book
                </Button>
                <Button
                    onClick={handleClose}
                    className={classes.getCloseButtonStyles}
                >
                    Close
                </Button>
            </DialogActions>
        </Dialog>
        </div>
    );
}

export default PrebookDialog;