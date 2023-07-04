import React from 'react';
import { getAnimatedImageStyles } from './AnimatedImage.Styles';
import { motion } from 'framer-motion';

const AnimatedImage = ({ image }) => {

    const { classes } = getAnimatedImageStyles();

    return (
        <motion.div
            className={classes.getAnimatedImageContStyles}
            initial={{ translateY: '0px' }}
            animate={{ translateY: ['0px', '-35px', '35px'] }}
            transition={{
                duration: 10,
                repeat: Infinity,
                repeatType: 'reverse',
                ease:'easeInOut',
            }}
        >
            <img src={image} alt="" className={classes.getAnimatedImageStyles} />
        </motion.div>
    );
}

export default AnimatedImage;