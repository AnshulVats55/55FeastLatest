import { makeStyles } from "tss-react/mui";

export const getAnimatedImageStyles = makeStyles()(() => ({
  getAnimatedImageContStyles: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  getAnimatedImageStyles: {
    width: "65%",
    "@media screen and (max-width: 899px)": {
      width: "75%",
    },
  },
}));

export const getImageAnimation = {
  initial: {
    translateY: "0px",
  },

  whileInView: {
    translateY: ["0px", "-35px", "35px"],
  },

  transition: {
    duration: 10,
    repeat: Infinity,
    repeatType: "reverse",
    ease: "easeInOut",
  },
};
