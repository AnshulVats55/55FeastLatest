import React, { useState, useEffect } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { Box, Skeleton } from '@mui/material';
import { motion } from 'framer-motion';
import { getWeeklyDataChartStyles } from './WeeklyData.Styles';

ChartJS.register(ArcElement, Tooltip, Legend);

const WeeklyData = () => {

    const { classes } = getWeeklyDataChartStyles();

    const [isDataLoaded, setIsDataLoaded] = useState(false);

    const data = {
        labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        datasets: [
          {
            label: 'Total Count',
            data: [35, 41, 30, 32, 60],
            backgroundColor: [
                'rgba(239, 93, 54, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
            ],
            borderColor: [
              'rgba(239, 93, 54, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
            ],
            borderWidth: 1,
          },
        ],
    };

    useEffect(() => {
        setTimeout(() => {
            setIsDataLoaded(true);
        }, 1000);
    }, []);

    return (
        <>
            {
                isDataLoaded
                ?
                <motion.div
                    className={classes.getTopContStyles}
                >
                    <Box className={classes.getDoughnutContStyles}>
                        <Doughnut data={data} />
                    </Box>
                </motion.div>
                :
                <Skeleton animation="wave">
                    <motion.div
                        className={classes.getTopContStyles}
                    >
                        <Box className={classes.getDoughnutContStyles}>
                            <Doughnut data={data} />
                        </Box>
                    </motion.div>
                </Skeleton>
            }
        </>
    );
}

export default WeeklyData;