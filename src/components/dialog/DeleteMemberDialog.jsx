import React, { useState, useEffect, useRef } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField, Typography, Skeleton } from '@mui/material';
import { getDeleteMemberDialogStyles } from './DeleteMemberDialog.Styles';
import InviteMemberCard from '../card/InviteMemberCard';
import { useDispatch, useSelector } from 'react-redux';
import { getTotalMembers, handleDeleteMember } from '../../invitationMethods/InvitationMethods';
import { motion } from 'framer-motion';

const DeleteMemberDialog = ({ open, scroll, handleClose, children, placeholder }) => {

    const { location } = useSelector((state)=>{
        return state.memberDataReducer;
    });

    const { classes } = getDeleteMemberDialogStyles();

    const dispatch = useDispatch();
    
    const [isDataLoaded, setIsDataLoaded] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const [totalMembers, setTotalMembers] = useState([]);
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
        const handleGetTotalMembers = async () => {
            const response = await getTotalMembers(location);
            console.log("Total members API response is this", response);
            setTotalMembers(response?.data?.data);
            setIsDataLoaded(true);
        };

        handleGetTotalMembers();
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
    const filteredUsers = totalMembers?.filter(member => member.fullName.toLowerCase().includes(searchTerm));

    const handleDeleteExistingMember = async (memberEmail) => {
        const response = await handleDeleteMember(memberEmail);
        return response;
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
                    Delete Members
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
                            Deleting an existing member is an easy-peasy task you can do now with a click!
                        </Typography>
                        <TextField
                            type="search"
                            placeholder={placeholder}
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
                                handleAction={async () => {
                                        const response = await handleDeleteExistingMember(member.email);
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
                        No member found...
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
                                    isDashboard={false}
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

export default DeleteMemberDialog;