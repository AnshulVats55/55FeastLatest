import { Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper";
import { motion } from 'framer-motion';
import { getMenuItemStyles } from "./MenuSwiper.Styles";
import FruitsImage from '../../assets/fruits.jpg';
import SproutsImage from '../../assets/sprouts.jpg';
import FoxnutsImage from '../../assets/foxnuts.jpg';
import IdliImage from '../../assets/idli.jpg';

const LunchSwiper= () => {

    const { classes } = getMenuItemStyles();
    
    <motion.div
            initial={{ translateY: '50px', opacity: 0 }}
            whileInView={{ translateY: '0px', opacity: 1}}
            transition={{ 
                duration: 2,
                repeatType: 'reverse',
                ease:'easeInOut',
            }}
        >
            <motion.div
                className={classes.getSwiperTextContStyles}
            >
                <Typography className={classes.getSwiperTextOneStyles}>
                    Our snacks pick
                </Typography>
                <Typography className={classes.getSwiperTextTwoStyles}>
                    Elevate your snacking experience and enjoy a delightful culinary adventure 
                </Typography>
            </motion.div>
            <Swiper
                effect={"coverflow"}
                grabCursor={true}
                loop={false}
                autoplay
                centeredSlides={true}
                slidesPerView={"auto"}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: false,
                }}
                pagination={false}
                modules={[EffectCoverflow, Pagination]}
                className={classes.getMainContStyles}
            >
                <SwiperSlide className={classes.getFoodItemImageContStyles}>
                    <img src={FruitsImage} alt="" className={classes.getFoodItemImageStyles} />
                    <Typography className={classes.getSnacksItemNameStyles}>Fruit Chaat</Typography>
                </SwiperSlide>
                <SwiperSlide className={classes.getFoodItemImageContStyles}>
                    <img src={SproutsImage} alt="" className={classes.getFoodItemImageStyles} />
                    <Typography className={classes.getSnacksItemNameStyles}>Sprouts</Typography>
                </SwiperSlide>
                <SwiperSlide className={classes.getFoodItemImageContStyles}>
                    <img src={FoxnutsImage} alt="" className={classes.getFoodItemImageStyles} />
                    <Typography className={classes.getSnacksItemNameStyles}>Salted Foxnuts</Typography>
                </SwiperSlide>
                <SwiperSlide className={classes.getFoodItemImageContStyles}>
                    <img src={IdliImage} alt="" className={classes.getFoodItemImageStyles} />
                    <Typography className={classes.getSnacksItemNameStyles}>Fried Idli</Typography>
                </SwiperSlide>
            </Swiper>
        </motion.div>
}

export default LunchSwiper;