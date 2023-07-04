import React, { useState, useEffect, useRef } from 'react';
import { getPrebookDialogStyles } from './PrebookDialog.Styles';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField, Typography, Grid } from '@mui/material';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { format, startOfWeek, endOfWeek, setDay } from 'date-fns';
import 'date-fns';

const PrebookDialog = ({ open, scroll, handleClose }) => {

    const { classes } = getPrebookDialogStyles();

    const descriptionElementRef = useRef(null);
    useEffect(() => {
        if (open) {
        const { current: descriptionElement } = descriptionElementRef;
        if (descriptionElement !== null) {
            descriptionElement.focus();
        }
        }
    }, [open]);

    const [datePicked, setDatePicked] = useState("Seletced date appears here");

    const handleDatePick = (event) => {
        console.log("Calendar event is this--------------------------->", event);
        setDatePicked(JSON.stringify(event).substring(0, 11));
    };

    const endDate = endOfWeek(new Date(), { weekStartsOn: 0 }); // Maximum Friday

    return (
        <div style={{background:"brown !important"}}>
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
                    Pre-book for a week
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
                        <Grid container spacing={1} sx={{width:"100%", background:"pink"}}>
                            <Grid item lg={6} md={6} sm={12} xs={12}>
                                <Typography>Start Date</Typography>
                                <DesktopDatePicker
                                    className={classes.getDatePickerStyles}
                                    autoOk
                                    onChange={(event)=>{handleDatePick(event)}}
                                    timezone="default"
                                    disablePast="true"
                                    maxDate={endDate}
                                />
                            </Grid>
                            <Grid item lg={6} md={6} sm={12} xs={12}>
                            <Typography>End Date</Typography>
                                <DesktopDatePicker
                                    className={classes.getDatePickerStyles}
                                    autoOk
                                    onChange={(event)=>{handleDatePick(event)}}
                                    timezone="default"
                                    disablePast="true"
                                    maxDate={endDate}
                                />
                            </Grid>
                        </Grid>
                        <Typography>{datePicked}</Typography>
                    </DialogContentText>
            </DialogContent>
            <DialogActions
                className={classes.getDialogActionStyles}
            >
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