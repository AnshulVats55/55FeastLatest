import { makeStyles } from "tss-react/mui";

export const getBookingCardStyles = makeStyles()((theme) => ({
  getCardStyles: {
    width: "80%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    border: "none",
    borderRadius: "10px",
    margin: "2rem 0rem",
    cursor: "pointer",
    "&:hover": {
      boxShadow:
        "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",
      borderBottom: "2px solid #ef5d36",
    },
    "@media screen and (max-width: 1099px)": {
      width: "90%",
    },
    "@media screen and (max-width: 899px)": {
      width: "70%",
    },
    "@media screen and (max-width: 599px)": {
      width: "80%",
      margin: "2rem 0rem 1rem 0rem",
    },
    "@media screen and (max-width: 399px)": {
      width: "85%",
    },
  },

  getCardLabelContStyles: {
    minWidth:"100%",
    borderRadius: "10px 10px 0px 0px",
    display:"flex",
    justifyContent:"flex-end",
    padding:"0rem 2rem",
  },

  getCardLabelStyles: {
    fontSize:"0.7rem",
    fontFamily: theme.typography.fontFamily,
    background:"#4caf50",
    border:"none",
    borderRadius:"10px",
    padding:"0.1rem 0.70rem",
    color:"#FFF",
    fontWeight:500,
  },


  getImageSkeletonStyles: {
    width: "100%",
    borderRadius: "0px",
  },

  getMemberPictureStyles: {
    width: "100%",
    borderTopLeftRadius: "10px",
    borderTopRightRadius: "10px",
  },

  getHeadingStyles: {
    fontSize: "1.5rem",
    fontFamily: theme.typography.fontFamily,
    marginTop: "1rem",
    textAlign: "center",
    "@media screen and (max-width: 346px)": {
      fontSize: "1.35rem",
    },
  },

  getCaptionStyles: {
    fontSize: "0.9rem",
    textAlign: "center",
    marginTop: "0.25rem",
    textAlign: "center",
    "@media screen and (max-width: 1275px)": {
      fontSize: "0.85rem",
    },
    "@media screen and (max-width: 346px)": {
      fontSize: "0.80rem",
    },
  },

  getActionButtonStyles: {},
}));

export const getCommonButtonCustomStyles = {
  customStyles: (isBooked) => {
    return {
      fontWeight: "normal",
      background: isBooked ? "red" : "transparent",
      color: isBooked ? "#FFF" : "#ef5d36",
      borderRadius: "4px",
      border: "1px solid",
      borderColor: isBooked ? "red" : "#ef5d36",
      margin: "1rem 0rem 2rem 0rem",
      fontSize: "0.9rem",
      "&:hover": {
        background: isBooked ? "transparent" : "#ef5d36",
        color: isBooked ? "red" : "#FFF",
        borderColor: isBooked ? "red" : "#ef5d36",
      },
      "&:focus": {
        outline: "none",
      },
      "@media screen and (max-width: 399px)": {
        fontSize: "0.85rem",
      },
    };
  },
};

export const getBookingCardAnimation = {
  initital: {
    translateY: "30px",
    opacity: 0,
  },
  animate: {
    translateY: "0px",
    opacity: 1,
  },
  whileHover: {
    scale: 1.015,
  },
  transition: (animationDuration) => {
    return {
      duration: animationDuration,
      repeatType: "reverse",
      ease: "easeInOut",
    };
  },
};
