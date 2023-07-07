import React, { useEffect, useState } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { getProgressBarStyles } from './ProgressBar.Styles';
import { Box } from '@mui/material';

const ProgressBar = ({ totalMembers, todaysCount }) => {

    const { classes } = getProgressBarStyles();

    const [progress, setProgress] = useState(0);

    const textStyle = {
      fontFamily: 'Poppins, sans-serif !important',
    };
  
    useEffect(() => {
        const progressPercentage = (todaysCount / totalMembers) * 100;
        setProgress(progressPercentage);

        let currentValue = 0;
        const increment = progressPercentage / 100;
        const interval = setInterval(() => {
          currentValue += increment;
          if (currentValue >= progressPercentage) {
            currentValue = progressPercentage;
            clearInterval(interval);
          }
          setProgress(currentValue);
        }, 10);

        return () => {
          clearInterval(interval);
        };
        
    }, [todaysCount, totalMembers]);
  
    return (
        <Box className={classes.getProgressBarContStyles}>
            <CircularProgressbar
                value={progress}
                text={`${Math.round(progress)}%`}
                circleRatio={0.75}
                strokeWidth={20}
                styles={buildStyles({
                  rotation: (1 / 2) + (1 / 8),
                  strokeLinecap: 'butt',
                  textSize: '0.70rem',
                  pathTransitionDuration: 0,
                  pathTransition: 'ease-in-out',
                  pathColor: Math.round(progress) >= 75 ? "#4caf50" : "#ef5d36",
                  textColor: Math.round(progress) >= 75 ? "#4caf50" : "#ef5d36",
                  trailColor: "#f5f5f5",
                  textStyle,
                })}
                minValue={0}
            />
        </Box>
    );
};
  
export default ProgressBar;