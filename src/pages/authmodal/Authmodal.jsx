import React from 'react';
import { Box, Grid } from '@mui/material';
import { getAuthmodalStyles } from './Authmodal.Styles';
import AnimatedImage from '../../components/animatedImage/AnimatedImage';

const Authmodal = ({ image, component }) => {

    const { classes } = getAuthmodalStyles();

    return (
        <Box className={classes.getMainContStyles}>
            <Grid container className={classes.getGridContStyles}>
                <Grid item lg={5} md={5} sm={5} xs={12} className={classes.getGridItemOneStyles}>
                    {component}
                </Grid>
                <Grid item lg={7} md={7} sm={7} xs={12} className={classes.getGridItemTwoStyles}>
                    <AnimatedImage image={image} />
                </Grid>
            </Grid>
        </Box>
    );
}

export default Authmodal;