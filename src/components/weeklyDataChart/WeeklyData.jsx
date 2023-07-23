import React, { useState, useEffect } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { Box, Skeleton } from "@mui/material";
import { motion } from "framer-motion";
import {
  getWeeklyDataChartStyles,
  getWeeklyDataChartAnimation,
} from "./WeeklyData.Styles";
import WeeklyDataUtils from "./WeeklyData.Utils";

ChartJS.register(ArcElement, Tooltip, Legend);

const WeeklyData = () => {
  const { classes } = getWeeklyDataChartStyles();
  const { initial, whileInView, transition } = getWeeklyDataChartAnimation;
  const {
    isDataLoaded,
    lastFiveDaysCount,
    lastFiveDaysDate,
    handleLastFiveDaysCount,
  } = WeeklyDataUtils();

  useEffect(() => {
    handleLastFiveDaysCount();
  }, []);

  const data = {
    //date for doughnut chart
    labels: lastFiveDaysDate,
    datasets: [
      {
        label: "Total Count",
        data: lastFiveDaysCount,
        backgroundColor: [
          "rgba(239, 93, 54, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
        ],
        borderColor: [
          "rgba(239, 93, 54, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
        ],
        borderWidth: 2,
      },
    ],
  };

  return (
    <>
      {isDataLoaded ? (
        <motion.div
          initial={initial}
          whileInView={whileInView}
          transition={transition}
          className={classes.getTopContStyles}
        >
          <Box className={classes.getDoughnutContStyles}>
            <Doughnut data={data} />
          </Box>
        </motion.div>
      ) : (
        <Skeleton animation="wave">
          <motion.div
            initial={initial}
            whileInView={whileInView}
            transition={transition}
            className={classes.getTopContStyles}
          >
            <Box className={classes.getDoughnutContStyles}>
              <Doughnut data={data} />
            </Box>
          </motion.div>
        </Skeleton>
      )}
    </>
  );
};

export default WeeklyData;
