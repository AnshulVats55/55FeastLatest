import React, { useState, useEffect, useRef } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField, Typography, Skeleton } from '@mui/material';
import { getBookForBuddyDialogStyles } from './BookForBuddy.Styles';
import InviteMemberCard from '../card/InviteMemberCard';
import { getMyBuddies, bookMealForBuddy } from '../../bookingMethods/BookingMethods';
import { handleFormattedDate, getNextDate } from '../../common/CommonData';
import { useSelector } from 'react-redux';

const BookForBuddyDialog = ({ open, scroll, handleClose }) => {

    const myData = useSelector((state)=>{
        return state.memberDataReducer;
    });

    const { classes } = getBookForBuddyDialogStyles();
    
    const [isDataLoaded, setIsDataLoaded] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const [myBuddies, setMyBuddies] = useState([]);
    let animationDuration = 0.4;

    const formattedDate = handleFormattedDate(new Date());
    const nextDate = getNextDate(new Date());
    const nextDateFormatted = handleFormattedDate(nextDate);

    const descriptionElementRef = useRef(null);
    useEffect(() => {
        if (open) {
        const { current: descriptionElement } = descriptionElementRef;
        if (descriptionElement !== null) {
            descriptionElement.focus();
        }
        }
    }, [open]);

    const date = new Date().getHours() >= 15 && new Date().getHours() <= 23 ? nextDateFormatted : formattedDate;

    const memberData = [//member's dummy data
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

    useEffect(()=>{
        const handleMyBuddies = async () => {
            const response = await getMyBuddies(myData.email);
            console.log("these are my buddies--------------->", response);
            if(response?.data?.status === "success"){
                setMyBuddies(response.data.data);
                setIsDataLoaded(true);
            }
        };

        handleMyBuddies();
    }, []);

    const handleMemberSearch = event => {//handles member search
        setSearchTerm(event.target.value.toLowerCase());
    };
    const filteredUsers = myBuddies?.filter(member => member.fullName.toLowerCase().includes(searchTerm));

    const handleBookForBuddy = async (buddyData) => {
        const response = await bookMealForBuddy(buddyData);
        console.log(`Meal booked for my buddy ${buddyData.email}`, response);
        return response;
    };

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
                    Book for buddy
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
                            Book a lunch count for your buddy and invite them to have lunch with you
                        </Typography>
                        <TextField
                            type="search"
                            placeholder="Search for your buddy..."
                            variant="outlined"
                            multiline
                            className={classes.root}
                            inputProps={{ className: classes.input }}
                            onChange={handleMemberSearch}
                        />
                    {
                    isDataLoaded
                    ?
                    filteredUsers?.length > 0
                    ?
                    filteredUsers?.map((member, index)=>{
                        return(
                            <InviteMemberCard
                                indexNumber={index+1}
                                memberName={member.fullName}
                                memberEmail={member.email}
                                animationDuration={animationDuration}
                                children="Book"
                                isDataLoaded={isDataLoaded}
                                isButtonRequired={true}
                                isEmailChopRequired={true}
                                handleAction={()=>{
                                    const response = handleBookForBuddy({ email: member.email, date: date });
                                    return response;
                                }
                            }
                            />
                        );
                    })
                    :
                    <Typography
                        sx={{
                            marginTop:"2rem",
                            fontSize:"1rem",
                            fontFamily:"Poppins, sans-serif",
                        }}
                    >
                        No buddy found with this name
                    </Typography>
                    :
                    memberData?.map((member, index)=>{
                        return(
                            <Skeleton animation="wave" sx={{ minWidth:"100% !important" }}>
                                <InviteMemberCard
                                    indexNumber={index+1}
                                    memberName={member.memberName}
                                    memberEmail={member.memberEmail}
                                    animationDuration={animationDuration}
                                    children="Book"
                                    isDataLoaded={isDataLoaded}
                                    isButtonRequired={true}
                                    isEmailChopRequired={true}
                                />
                            </Skeleton>
                        );
                    })
                    }
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

export default BookForBuddyDialog;