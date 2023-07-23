import { makeStyles } from "tss-react/mui";

export const getMenuItemStyles = makeStyles()((theme) => ({
  getSwiperTextContStyles: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },

  getSwiperTextOneStyles: {
    fontSize: "2.5rem",
    fontWeight: 500,
    color: "#ef5d36",
    textAlign: "center",
    fontWeight: "normal",
    "@media screen and (max-width: 544px)": {
      fontSize: "2.25rem",
    },
    "@media screen and (max-width: 409px)": {
      fontSize: "1.75rem",
    },
  },

  getSwiperTextTwoStyles: {
    fontSize: theme.typography.fontSize,
    textAlign: "center",
    "@media screen and (max-width: 544px)": {
      fontSize: "0.9rem",
    },
    "@media screen and (max-width: 409px)": {
      fontSize: "0.8rem",
    },
  },

  getMainContStyles: {
    width: "100% !important",
  },

  getFoodItemImageContStyles: {
    width: "500px",
    height: "285px",
    padding: "2rem 0rem",
    "@media screen and (max-width: 899px)": {
      width: "400px",
      height: "225px",
    },
    "@media screen and (max-width: 599px)": {
      width: "300px",
      height: "170px",
    },
    "@media screen and (max-width:544px)": {
      width: "250px",
      height: "140px",
    },
    "@media screen and (max-width:409px)": {
      width: "225px",
      height: "126px",
    },
  },

  getFoodItemImageStyles: {
    width: "100%",
    height: "100%",
    borderRadius: "10px",
  },

  getSnacksItemNameStyles: {
    fontSize: theme.typography.fontSize,
    textAlign: "center",
    color: theme.palette.action.active,
    "@media screen and (max-width:544px)": {
      fontSize: "0.9rem",
    },
  },
}));

export const getMenuSwiperAnimation = {
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
