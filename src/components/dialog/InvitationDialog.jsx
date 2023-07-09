import React, { useState, useEffect, useRef } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField, Typography, Skeleton } from '@mui/material';
import { getInvitationDialogStyles } from './InvitationDialog.Styles';
import InviteMemberCard from '../card/InviteMemberCard';
import { getNonInvitedMembers } from '../../api/invitationMethods/InvitationMethods';
import { useDispatch, useSelector } from 'react-redux';
import { handleInviteMembers } from '../../invitationMethods/InvitationMethods';
import { setTotalMembers } from '../../store/slices/TotalMembersSlice';

const InvitationDialog = ({ open, scroll, handleClose, children }) => {

    const adminData = useSelector((state)=>{
        return state.memberDataReducer;
    });

    const { classes } = getInvitationDialogStyles();
    const dispatch = useDispatch();
    
    const [isDataLoaded, setIsDataLoaded] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const [notInvited, setNotInvited] = useState([]);
    let animationDuration = 0.4;

    const descriptionElementRef = useRef(null);
    useEffect(() => {
        if (open) {
        const { current: descriptionElement } = descriptionElementRef;
        if (descriptionElement !== null) {
            descriptionElement.focus();
        }
        }
    }, [open]);

    useEffect(()=>{
        const handleGetNonInvitedMembers = async () => {
            const response = await getNonInvitedMembers(adminData.email);
            console.log("non invited members", response);
            if(response?.data?.status === "success"){
                setNotInvited(response.data.data);
                setIsDataLoaded(true);
                dispatch(setTotalMembers(response.data.data.length));
            }
        };

        handleGetNonInvitedMembers();
    }, []);

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

    const handleMemberSearch = event => {//handles member search
        setSearchTerm(event.target.value.toLowerCase());
    };
    const filteredUsers = notInvited?.filter(member => member.fullName.toLowerCase().includes(searchTerm));

    const handleInviteNewMember = async (memberEmail) => {
        const response = await handleInviteMembers(memberEmail);
        console.log(`${memberEmail} has been invited by you !`, response);
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
                    Invite Members
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
                                "@media screen and (max-width: 532px)": {
                                    fontSize:"0.9rem",
                                },
                            }}
                        >
                            Invite new members and help them automate their Lunch Count process
                        </Typography>
                        <TextField
                            type="search"
                            placeholder="Search members to invite"
                            variant="outlined"
                            multiline
                            className={classes.root}
                            onChange={handleMemberSearch}
                        />
                    {
                    isDataLoaded
                    ?
                    filteredUsers?.length > 0
                    ?
                    filteredUsers.map((member, index)=>{
                        return(
                            <InviteMemberCard
                                indexNumber={index+1}
                                memberName={member.fullName}
                                memberEmail={member.email}
                                animationDuration={animationDuration}
                                children={children}
                                isDataLoaded={isDataLoaded}
                                isDashboard={false}
                                handleAction={()=>{
                                        const response = handleInviteNewMember(member.email);
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
                        No member found with this name...
                    </Typography>
                    :
                    memberData.map((member, index)=>{
                        return(
                            <Skeleton animation="wave" sx={{ minWidth:"100% !important" }}>
                                <InviteMemberCard
                                    indexNumber={index+1}
                                    memberName={member.memberName}
                                    memberEmail={member.memberEmail}
                                    animationDuration={animationDuration}
                                    children="Invite"
                                    isDataLoaded={isDataLoaded}
                                    isEmailChopRequired={true}
                                    isButtonRequired={true}
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

export default InvitationDialog;