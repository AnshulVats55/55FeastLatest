import { Typography, Skeleton } from '@mui/material';
import React, { useEffect, useState } from 'react';
import CommonButton from '../button/CommonButton';
import { getBookingCardStyles } from './BookingCard.Styles';
import { motion } from 'framer-motion';

const BookingCard = ({ image, heading, caption, actionName, animationDuration, onClick, isBooked }) => {

    const { classes } = getBookingCardStyles();
    
    const [isDataLoaded, setIsDataLoaded] = useState(false);

    useEffect(()=>{
        setTimeout(() => {
            setIsDataLoaded(true);
        }, 1500);
    }, [isDataLoaded]);

    return (
        <motion.div
            className={classes.getCardStyles}
            initial={{ translateY: '30px', opacity: 0}}
            animate={{ translateY: '0px', opacity: 1}}
            whileHover={{ scale: 1.015 }}
            transition={{
                duration: animationDuration,
                repeatType: 'reverse',
                ease: 'easeInOut',
            }}
        >
            {
            isDataLoaded
            ?
            <>
                <img src={image} alt="" className={classes.getMemberPictureStyles} />
                <Typography className={classes.getHeadingStyles}>{heading}</Typography>
                <Typography className={classes.getCaptionStyles}>{caption}</Typography>
                <CommonButton
                    children={actionName}
                    type=""
                    customStyles={{
                        fontWeight:"normal",
                        background: isBooked ? "red" : "transparent",
                        color: isBooked ? "#FFF" : "#ef5d36",
                        borderRadius:"4px",
                        border:"1px solid",
                        borderColor: isBooked ? "red" : "#ef5d36",
                        margin:"1rem 0rem 2rem 0rem",
                        fontSize:"0.9rem",
                        "&:hover": {
                            background: isBooked ? "transparent" : "#ef5d36",
                            color: isBooked ? "red" : "#FFF",
                            borderColor: isBooked ? "red" : "#ef5d36",
                        },
                        "&:focus": {
                            outline:"none",
                        },
                        "@media screen and (max-width: 399px)": {
                            fontSize:"0.85rem",
                        },
                    }}
                    onClick={onClick ? onClick : null}
                />
            </>
            :
            <>
                <Skeleton animation="wave" className={classes.getImageSkeletonStyles}>
                    <img src={image} alt="" className={classes.getMemberPictureStyles} />
                </Skeleton>
                <Skeleton animation="wave">
                    <Typography className={classes.getHeadingStyles}>{heading}</Typography>
                </Skeleton>
                <Skeleton animation="wave">
                    <Typography className={classes.getCaptionStyles}>{caption}</Typography>
                </Skeleton>
                <Skeleton animation="wave">
                <CommonButton
                    children={actionName}
                    type=""
                    customStyles={{
                        fontWeight:"normal",
                        background: isBooked ? "red" : "transparent",
                        color: isBooked ? "#FFF" : "#ef5d36",
                        borderRadius:"4px",
                        border:"1px solid",
                        borderColor: isBooked ? "red" : "#ef5d36",
                        margin:"1rem 0rem 2rem 0rem",
                        fontSize:"0.9rem",
                        "&:hover": {
                            background: isBooked ? "transparent" : "#ef5d36",
                            color: isBooked ? "red" : "#FFF",
                            borderColor: isBooked ? "red" : "#ef5d36",
                        },
                        "&:focus": {
                            outline:"none",
                        },
                        "@media screen and (max-width: 399px)": {
                            fontSize:"0.85rem",
                        },
                    }}
                    onClick={onClick ? onClick : null}
                />
                </Skeleton>
            </>
            }
        </motion.div>
    );
}

export default BookingCard;