import React, { useState, useEffect} from 'react';
import { getAdminDashboardStyles } from './AdminDashboard.Styles';
import { Box, Grid, Typography, Skeleton,TextField, Stack, Button } from '@mui/material';
import InviteMemberCard from '../../components/card/InviteMemberCard';
import { handleMemberCountByDate } from '../../bookingMethods/BookingMethods';
import { handleFormattedDate, getNextDate } from '../../common/CommonData';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import ProgressBar from '../../components/ProgressBar';
import { useSelector } from 'react-redux';
import { getTotalMembers } from '../../invitationMethods/InvitationMethods';
import CommonButton from '../../components/button/CommonButton';
import WeeklyData from '../../components/weeklyDataChart/WeeklyData';
const AdminDashboard = () => {

    const { location } = useSelector((state)=>{
        return state.memberDataReducer;
    });
    console.log("location is this", location);

    const { classes } = getAdminDashboardStyles();

    const [isDataLoaded, setIsDataLoaded] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const [todaysCount, setTodaysCount] = useState([]);
    const [totalMembers, setTotalMembers] = useState(0);
    let animationDuration = 0.4;

    const formattedDate = handleFormattedDate(new Date());
    const nextDate = getNextDate(new Date());
    const nextDateFormatted = handleFormattedDate(nextDate);

    const dateToGetTodaysCount = {
        date: new Date().getHours() >= 11 && new Date().getHours() <= 23 ? nextDateFormatted : formattedDate
    };

    // useEffect(()=>{
    //     const getTodaysTotalCount = async () => {
    //         const response = await handleMemberCountByDate(dateToGetTodaysCount);
    //         // console.log("Response of today's count api----------------------->", response);
    //         setTodaysCount(response?.data?.data);
    //         setIsDataLoaded(true);
    //     };

    //     getTodaysTotalCount();
        
    // }, []);

    useEffect(()=>{
        const handleGetTotalMembers = async () => {
            const response = await getTotalMembers(location);
            console.log("Total members API response is this", response);
            setTotalMembers(response?.data?.data?.length);
            setTodaysCount(response?.data?.data);
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
    const filteredUsers = todaysCount?.filter(member => member.fullName.toLowerCase().includes(searchTerm));

    const handleExportInExcel = (excelFileLink) => {
        window.open(excelFileLink);
    };

    const handleExportInPDF = (PdfFileLink) => {
        window.open(PdfFileLink);
    };

    const handleAddNewMember = async () => {
        console.log("add new member clicked !");
    };

    const handleDeleteExistingMember = async () => {
        console.log("delete existing member clicked !");
    };

    return (
        <Grid container className={classes.getGridContStyles} rowGap={2}>

            <Grid container item lg={6} md={6} sm={12} xs={12} className={classes.getGridItemOneStyles} rowGap={0}>

                <Grid item lg={6} md={6} sm={6} xs={12} className={classes.getGridItemOnePointOneStyles}>
                    <Box className={classes.getBoxOneStyles}>
                        <Stack className={classes.getStackOneStyles}>
                            <Typography className={classes.getTextOneStyles}>
                                {new Date().getHours() >= 15 && new Date().getHours() <= 23 ? `Count for ${nextDateFormatted}` : `Count for ${formattedDate}`}
                            </Typography>
                            <Typography className={classes.getTextTwoStyles}>
                                {`${todaysCount.length}`}
                            </Typography>
                        </Stack>
                        <ShowChartIcon className={classes.getIconOneStyles} />
                    </Box>
                </Grid>

                <Grid item lg={6} md={6} sm={6} xs={12} className={classes.getGridItemOnePointTwoStyles}>
                    <Box className={classes.getBoxTwoStyles}>
                        <ProgressBar
                            todaysCount={51}
                            totalMembers={totalMembers}
                        />
                    </Box>
                </Grid>

                <Grid item lg={6} md={6} sm={6} xs={12} sx={{ background:"" }} className={classes.getGridItemOnePointThreeStyles}>
                    <Box className={classes.getBoxThreeStyles}>
                        <Stack>
                            <Typography className={classes.getTextThreeStyles}>
                                Say goodbye to the hassel of making list of members
                            </Typography>
                            <Box className={classes.getDownloadButtonsContStyles}>
                                <CommonButton
                                    children={"Export in Excel"}
                                    type=""
                                    onClick={()=>{
                                            handleExportInExcel('https://sample-videos.com/xls/Sample-Spreadsheet-10-rows.xls')
                                        }
                                    }
                                    customStyles={{
                                        width:"75% !important",
                                        height:"40px",
                                        borderRadius:"4px",
                                        border:"1px solid #ef5d36",
                                        color:"#ef5d36",
                                        fontSize:"0.9rem",
                                        margin:"0.25rem 0rem",
                                        "&:hover": {
                                            background:"#ef5d36",
                                            border:"none",
                                            color:"#FFF",
                                        },
                                        "&:focus": {
                                            outline:"none",
                                        },
                                        "@media screen and (max-width: 399px)": {
                                            fontSize:"0.8rem",
                                        },
                                    }}
                                />
                                <CommonButton
                                    children={"Export in PDF"}
                                    type=""
                                    onClick={()=>{
                                            handleExportInPDF('https://www.africau.edu/images/default/sample.pdf')
                                        }
                                    }
                                    customStyles={{
                                        width:"75% !important",
                                        height:"40px",
                                        borderRadius:"4px",
                                        border:"1px solid #ef5d36",
                                        color:"#ef5d36",
                                        fontSize:"0.9rem",
                                        margin:"0.25rem 0rem",
                                        "&:hover": {
                                            background:"#ef5d36",
                                            border:"none",
                                            color:"#FFF",
                                        },
                                        "&:focus": {
                                            outline:"none",
                                        },
                                        "@media screen and (max-width: 399px)": {
                                            fontSize:"0.8rem",
                                        },
                                    }}
                                />
                            </Box>
                        </Stack>
                    </Box>
                </Grid>

                <Grid item lg={6} md={6} sm={6} xs={12} sx={{ background:"" }} className={classes.getGridItemOnePointFourStyles}>
                    <Box className={classes.getBoxFourStyles}>
                    <Stack>
                            <Typography className={classes.getTextFourStyles}>
                                Add new member or delete an existing member
                            </Typography>
                            <Box className={classes.getDownloadButtonsContStyles}>
                                <CommonButton
                                    children={"Add Member"}
                                    type=""
                                    onClick={handleAddNewMember}
                                    customStyles={{
                                        width:"75% !important",
                                        height:"40px",
                                        borderRadius:"4px",
                                        border:"1px solid #ef5d36",
                                        color:"#ef5d36",
                                        fontSize:"0.9rem",
                                        margin:"0.25rem 0rem",
                                        "&:hover": {
                                            background:"#ef5d36",
                                            border:"none",
                                            color:"#FFF",
                                        },
                                        "&:focus": {
                                            outline:"none",
                                        },
                                        "@media screen and (max-width: 399px)": {
                                            fontSize:"0.8rem",
                                        },
                                    }}
                                />
                                <CommonButton
                                    children={"Delete Member"}
                                    type=""
                                    onClick={handleDeleteExistingMember}
                                    customStyles={{
                                        width:"75% !important",
                                        height:"40px",
                                        borderRadius:"4px",
                                        border:"1px solid #ef5d36",
                                        color:"#ef5d36",
                                        fontSize:"0.9rem",
                                        margin:"0.25rem 0rem",
                                        "&:hover": {
                                            background:"#ef5d36",
                                            border:"none",
                                            color:"#FFF",
                                        },
                                        "&:focus": {
                                            outline:"none",
                                        },
                                        "@media screen and (max-width: 399px)": {
                                            fontSize:"0.8rem",
                                        },
                                    }}
                                />
                            </Box>
                        </Stack>
                    </Box>
                </Grid>

            </Grid>

            <Grid container item lg={6} md={6} sm={12} xs={12} className={classes.getGridItemTwoStyles}>
                <Grid item lg={12} md={12} sm={12} xs={12} className={classes.getGridItemTwoPointOneStyles}>
                    <TextField
                        type="search"
                        placeholder="Search members..."
                        variant="outlined"
                        multiline
                        className={classes.root}
                        onChange={handleMemberSearch}
                    />
                    <Stack className={classes.getStackStyles}>
                        <Grid container item columnSpacing={1}>
                        {
                            isDataLoaded
                            ?
                            filteredUsers?.map((member, index)=>{
                                return(
                                    <Grid item lg={12} md={12} sm={12} xs={12} sx={{ background:"" }}>
                                        <InviteMemberCard
                                            indexNumber={index+1}
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
                            :
                            memberData?.map((member, index)=>{
                                return(
                                    <Grid item lg={12} md={12} sm={12} xs={12} sx={{ background:"" }}>
                                        <Skeleton animation="wave" sx={{ minWidth:"100% !important" }}>
                                            <InviteMemberCard
                                                indexNumber={index+1}
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
                        }
                        </Grid>
                    </Stack>
                </Grid>

                <Grid item lg={12} md={12} sm={12} xs={12} className={classes.getGridItemTwoPointTwoStyles}>
                    <WeeklyData />
                </Grid>
            </Grid> 
        </Grid>
    );
}

export default AdminDashboard;