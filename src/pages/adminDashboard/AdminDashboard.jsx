import React, { useState, useEffect} from 'react';
import { getAdminDashboardStyles } from './AdminDashboard.Styles';
import { Box, Grid, Typography, Skeleton,TextField, Stack } from '@mui/material';
import InviteMemberCard from '../../components/card/InviteMemberCard';
import { getNonInvitedMembers } from '../../api/invitationMethods/InvitationMethods';
import { handleMemberCountByDate } from '../../bookingMethods/BookingMethods';
import { handleFormattedDate, getNextDate } from '../../common/CommonData';

const AdminDashboard = () => {

    const { classes } = getAdminDashboardStyles();

    const [isDataLoaded, setIsDataLoaded] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const [notInvited, setNotInvited] = useState([]);
    let animationDuration = 0.4;

    const formattedDate = handleFormattedDate(new Date());
    const nextDate = getNextDate(new Date());
    const nextDateFormatted = handleFormattedDate(nextDate);

    const dateToGetTodaysCount = {
        date: new Date().getHours() >= 15 && new Date().getHours() <= 23 ? nextDateFormatted : formattedDate
    };

    useEffect(()=>{
        const handleGetNonInvitedMembers = async () => {
            const response = await getNonInvitedMembers();
            console.log(response);
            setNotInvited(response.data.data.data);
            setIsDataLoaded(true);
        };

        handleGetNonInvitedMembers();

        const getTodaysTotalCount = async () => {
            const response = await handleMemberCountByDate(dateToGetTodaysCount);
            console.log("response of today's count api", response);
        };

        getTodaysTotalCount();
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

    return (
        <Grid container className={classes.getGridContStyles}>

            <Grid container item lg={6} md={6} sm={12} xs={12} className={classes.getGridItemOneStyles}>
                <Grid container item xs={12} sx={{ width:"100%", display:"flex", background:"red", height:"50%" }}>
                    <Grid item lg={6} md={6} sm={12} xs={12} sx={{ width:"100%", display:"flex", justifyContent:"center", background:"skyblue"}}>
                        <Box className={classes.getTotalCountContStyles}>
                            <Box className={classes.getTotalMemberStyles}>
                                40/93
                            </Box>
                            <Box className={classes.getMemberCountContStyles}>
                                <Typography className={classes.getMemberCountStyles}>
                                    <span
                                        style={{
                                            color:"#ef5d36",
                                            fontSize:"1.5rem",
                                            fontFamily:"Poppins, sans-serif",
                                            fontWeight:500
                                        }}
                                    >
                                        40/93
                                    </span> members took lunch
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>

                    <Grid item lg={6} md={6} sm={12} xs={12} sx={{ width:"100%", display:"flex", justifyContent:"center", background:"skyblue"}}>
                        <Box className={classes.getTotalCountContStyles}>
                            <Box className={classes.getTotalMemberStyles}>
                                40/93
                            </Box>
                            <Box className={classes.getMemberCountContStyles}>
                                <Typography className={classes.getMemberCountStyles}>
                                    <span
                                        style={{
                                            color:"#ef5d36",
                                            fontSize:"1.5rem",
                                            fontFamily:"Poppins, sans-serif",
                                            fontWeight:500
                                        }}
                                    >
                                        40/93
                                    </span> members took lunch
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>

                <Grid item xs={12} sx={{ width:"100%", display:"flex", justifyContent:"center", background:"red", height:"50%" }}>
                    <Box className={classes.getTotalCountContStyles}>
                        <Box className={classes.getTotalMemberStyles}>
                            40/93
                        </Box>
                        <Box className={classes.getMemberCountContStyles}>
                            <Typography className={classes.getMemberCountStyles}>
                                <span
                                    style={{
                                        color:"#ef5d36",
                                        fontSize:"1.5rem",
                                        fontFamily:"Poppins, sans-serif",
                                        fontWeight:500
                                    }}
                                >
                                    40/93
                                </span> members took lunch
                            </Typography>
                        </Box>
                    </Box>
                </Grid>
                
            </Grid>

            <Grid item lg={6} md={6} sm={12} xs={12} className={classes.getGridItemTwoStyles}>
                <TextField
                    type="search"
                    placeholder="Search members..."
                    variant="outlined"
                    multiline
                    className={classes.root}
                    onChange={handleMemberSearch}
                />
                <Stack className={classes.getStackStyles}>
                    {
                        isDataLoaded
                        ?
                        filteredUsers?.map((member, index)=>{
                            return(
                                <InviteMemberCard
                                    indexNumber={index+1}
                                    memberName={member.fullName}
                                    memberEmail={member.email}
                                    animationDuration={animationDuration}
                                    children="Remove"
                                    isDataLoaded={isDataLoaded}
                                />
                            );
                        })
                        :
                        memberData?.map((member, index)=>{
                            return(
                                <Skeleton animation="wave" sx={{ minWidth:"100% !important" }}>
                                    <InviteMemberCard
                                        indexNumber={index+1}
                                        memberName={member.memberName}
                                        memberEmail={member.memberEmail}
                                        animationDuration={animationDuration}
                                        children="Remove"
                                        isDataLoaded={isDataLoaded}
                                    />
                                </Skeleton>
                            );
                        })
                    }
                    </Stack>
            </Grid> 
        </Grid>
    );
}

export default AdminDashboard;