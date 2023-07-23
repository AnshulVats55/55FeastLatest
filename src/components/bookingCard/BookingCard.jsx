import { Typography, Skeleton, Box } from "@mui/material";
import React, { useEffect } from "react";
import CommonButton from "../button/CommonButton";
import {
  getBookingCardStyles,
  getCommonButtonCustomStyles,
  getBookingCardAnimation,
} from "./BookingCard.Styles";
import { motion } from "framer-motion";
import BookingkCardUtils from "./BookingkCard.Utils";

const BookingCard = ({
  image,
  heading,
  caption,
  actionName,
  animationDuration,
  onClick,
  isBooked,
  label,
}) => {
  const { classes } = getBookingCardStyles();
  const { isDataLoaded, handleDataLoading } = BookingkCardUtils();
  const { customStyles } = getCommonButtonCustomStyles;
  const { initial, animate, whileHover, transition } = getBookingCardAnimation;

  useEffect(() => {
    handleDataLoading();
  }, [isDataLoaded]);

  return (
    <motion.div
      className={classes.getCardStyles}
      initial={initial}
      animate={animate}
      whileHover={whileHover}
      transition={transition(animationDuration)}
    >
      {isDataLoaded ? (
        <>
          <Box className={classes.getCardLabelContStyles}>
            <Typography className={classes.getCardLabelStyles}>
              {label}
            </Typography>
          </Box>
          <img src={image} alt="" className={classes.getMemberPictureStyles} />
          <Typography className={classes.getHeadingStyles}>
            {heading}
          </Typography>
          <Typography className={classes.getCaptionStyles}>
            {caption}
          </Typography>
          <CommonButton
            children={actionName}
            type=""
            customStyles={customStyles(isBooked)}
            onClick={onClick ? onClick : null}
          />
        </>
      ) : (
        <>
          <Skeleton animation="wave" className={classes.getImageSkeletonStyles}>
            <img
              src={image}
              alt=""
              className={classes.getMemberPictureStyles}
            />
          </Skeleton>
          <Skeleton animation="wave">
            <Typography className={classes.getHeadingStyles}>
              {heading}
            </Typography>
          </Skeleton>
          <Skeleton animation="wave">
            <Typography className={classes.getCaptionStyles}>
              {caption}
            </Typography>
          </Skeleton>
          <Skeleton animation="wave">
            <CommonButton
              children={actionName}
              type=""
              customStyles={customStyles(isBooked)}
              onClick={onClick ? onClick : null}
            />
          </Skeleton>
        </>
      )}
    </motion.div>
  );
};

export default BookingCard;
