import React, { useState } from 'react';
import { Typography, Skeleton, Grid } from '@mui/material';
import InviteButton from '../inviteButton/InviteButton';
import { getInviteMemberCardStyles } from './InviteMemberCard.Styles';
import { motion } from 'framer-motion';
import { useDispatch } from 'react-redux';
import snackbarMessages from '../../Constants';
import { setCustomSnackbar } from '../../store/slices/SnackbarSlice';

const InviteMemberCard = ({
    indexNumber,
    memberName,
    memberEmail,
    children,
    animationDuration,
    isDataLoaded ,
    handleAction,
    isDashboard
}) => {

    const { classes } = getInviteMemberCardStyles();

    const dispatch = useDispatch();
    const actionBeingPerformed = async () => {
        try{
            const response = await handleAction();
            console.log("Response at invite member card-------->", response);
            if(response?.data?.status === "success"){
                if(response?.data?.message === "Invited successfully"){
                    dispatch(
                        setCustomSnackbar({
                        snackbarOpen: true,
                        snackbarType: snackbarMessages.SUCCESS,
                        snackbarMessage: snackbarMessages.MEMBER_INVITATION_SUCCESSFULL,
                        })
                    );
                }
                else if(response?.data?.message === "Meal booked successfully"){
                    dispatch(
                        setCustomSnackbar({
                        snackbarOpen: true,
                        snackbarType: snackbarMessages.SUCCESS,
                        snackbarMessage: snackbarMessages.MEMBER_MEAL_BOOKING_SUCCESSFULL,
                        })
                    );
                }
            }
            else if(response?.response?.data?.status === "failure"){
                if(response?.response?.data?.message === "Internal server error"){
                    dispatch(
                        setCustomSnackbar({
                        snackbarOpen: true,
                        snackbarType: snackbarMessages.ERROR,
                        snackbarMessage: snackbarMessages.MEMBER_INVITATION_FAILURE,
                        })
                    );
                }
                else{
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
        }
        catch(error){
            // console.log("inside catch");
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

    const handleMemberName = () => {
        const finalName = memberName.split(" ");
        if(finalName.length === 1){
            memberName = finalName[0];
        }
        else if(finalName.length >= 2){
            memberName = finalName[0] + " " + finalName[1];
        }
    };

    const handleMemberEmail = () => {
        if(memberEmail.length > 24){
            memberEmail = memberEmail.substring(0, 24) + "...";
        }
    };

    { !isDashboard ? handleMemberEmail() : null };
    handleMemberName();

    return (
        <>
            {
                isDataLoaded
                ?
                <motion.div
                    className={classes.getMemberCardStyles}
                    key={indexNumber}
                    initial={{ translateY: '25px', opacity: 0 }}
                    whileInView={{ translateY: '0px', opacity: 1}}
                    transition={{
                        duration: animationDuration,
                        repeatType: 'reverse',
                        ease:'easeInOut',
                    }}
                >
                    <Grid container className={classes.getGridContStyles}>
                        <Grid item lg={1} md={1} sm={1} xs={0} className={classes.getMemberNumberContStyles}>
                            <Typography className={classes.getMemberNumberStyles}>{indexNumber}</Typography>
                        </Grid>
                        <Grid item lg={4} md={4} sm={4} xs={isDashboard ? 5 : 9} className={classes.getMemberNameContStyles} >
                            <Typography className={classes.getMemberNameStyles}>{memberName}</Typography>
                        </Grid>
                        <Grid item lg={5} md={5} sm={5} xs={isDashboard ? 7 : 0} className={classes.getMemberEmailContStyles}
                            sx={{
                                ...(!isDashboard
                                    ?
                                    {
                                        "@media screen and (max-width: 599px)": {
                                            display:"none",
                                        },
                                    }
                                    :
                                    {
                                        "@media screen and (max-width: 599px)": {
                                            display:"flex",
                                        },
                                        "@media screen and (max-width: 470px)": {
                                            wordBreak: "break-all",
                                        },
                                    }
                                )
                            }}
                        >
                            <Typography className={classes.getMemberEmailStyles}>{memberEmail}</Typography>
                        </Grid>
                        <Grid item lg={2} md={2} sm={2} xs={isDashboard ? 0 : 3} className={classes.getInviteButtonContStyles}>
                            <InviteButton
                                children={children}
                                type=""
                                handleAction={actionBeingPerformed}
                                styles={{
                                    display: isDashboard ? "none" : "flex",
                                    "@media screen and (max-width: 615px)": {
                                        fontSize:"0.8rem",
                                    },
                                    "@media screen and (max-width: 370px)": {
                                        padding:"0.15rem 0rem",
                                    },
                                }}
                            />
                        </Grid>
                    </Grid>
                </motion.div>
                :
                <Skeleton animation="wave">
                <motion.div
                    className={classes.getMemberCardStyles}
                    key={indexNumber}
                    initial={{ translateY: '25px', opacity: 0 }}
                    whileInView={{ translateY: '0px', opacity: 1}}
                    transition={{
                        duration: animationDuration,
                        repeatType: 'reverse',
                        ease:'easeInOut',
                    }}
                >
                    <Grid container>
                        <Skeleton animation="wave">
                            <Grid item lg={1} md={1} sm={1} xs={0} className={classes.getMemberAvatarContStyles}>
                                <Skeleton animation="wave">
                                    <Typography className={classes.getMemberNumberStyles}>{indexNumber}</Typography>
                                </Skeleton>
                            </Grid>
                        </Skeleton>

                        <Skeleton animation="wave">
                            <Grid item lg={4} md={4} sm={4} xs={4} className={classes.getMemberNameContStyles} >
                                <Skeleton animation="wave">
                                    <Typography className={classes.getMemberNameStyles}>{memberName}</Typography>
                                </Skeleton>
                            </Grid>
                        </Skeleton>

                        <Skeleton animation="wave">
                            <Grid item lg={5} md={5} sm={5} xs={5} className={classes.getMemberEmailContStyles}>
                                <Skeleton animation="wave">
                                    <Typography className={classes.getMemberEmailStyles}>{memberEmail}</Typography>
                                </Skeleton>
                            </Grid>
                        </Skeleton>

                        <Skeleton animation="wave">
                            <Grid item className={classes.getInviteButtonContStyles}>
                            <Skeleton animation="wave">
                            {
                                !isDashboard
                                ?
                                <InviteButton
                                    children={children}
                                    type=""
                                    handleAction={actionBeingPerformed}
                                    styles={{
                                        "@media screen and (max-width: 615px)": {
                                            fontSize:"0.8rem",
                                        },
                                        "@media screen and (max-width: 370px)": {
                                            padding:"0.15rem 0rem",
                                        },
                                    }}
                                />
                                :
                                null
                            }
                            </Skeleton>
                            </Grid>
                        </Skeleton>
                    </Grid>
                </motion.div>
                </Skeleton>
            }
        </>
    );
}

export default InviteMemberCard;