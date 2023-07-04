import React, { useState, useEffect } from 'react';
import { getMealBookingTimerStyles } from './MealBookingTimer.Styles';
import { Box, Typography } from '@mui/material';

const MealBookingTimer = ({ timerMessage }) => {

    const { classes } = getMealBookingTimerStyles();

    const [countdown, setCountdown] = useState('00:00:00');

      const handleNextDay = () => {
            const today = new Date();
            const currentDay = today.getDay();
            let nextDay;
            if(currentDay >= 0 && currentDay <= 4){
                nextDay = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1);
            }
            else if(currentDay === 5){
                nextDay = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 2);
            }
            else if(currentDay === 6){
                nextDay = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1);
            }
            return nextDay;
      };

      useEffect(()=>{
        const nextDay = handleNextDay();
        let timeDifference;
        if(nextDay.getDay() === 0){
            nextDay.setHours(17);
            nextDay.setMinutes(0);
            nextDay.setSeconds(0);
            nextDay.setMilliseconds(0);
            const interval = setInterval(() => {
                let currentTime = new Date();
                timeDifference = (nextDay - currentTime)/1000;
                if(timeDifference <= 0){
                    clearInterval(interval);
                }
                const hoursLeft = Math.floor(timeDifference/(3600));
                const minutesLeft = Math.floor((timeDifference%3600)/60);
                const secondsLeft = Math.floor(timeDifference%60);
                setCountdown(`${hoursLeft+":"+minutesLeft+":"+secondsLeft}`);
            }, 1000);
        }
      }, []);
    return (
        <Box className={classes.getTimerContStyles}>
            <Typography className={classes.getTimerStyles}>
                {`${timerMessage} ${countdown}`}
            </Typography>
        </Box>
    );
}

export default MealBookingTimer;