import { makeStyles } from "tss-react/mui";

export const getWeeklyDataChartStyles = makeStyles()((theme) => ({
  getTopContStyles: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
  },
}));

export const getWeeklyDataChartAnimation = {
  initial: {
    translateY: "50px",
    opacity: 0,
  },

  whileInView: {
    translateY: "0px",
    opacity: 1,
  },

  transition: {
    duration: 0.7,
    repeatType: "reverse",
    ease: "easeInOut",
  },
};
