import React from 'react';
import { Box, CircularProgress, LinearProgress } from '@mui/material';
import { getCircularProgressStyles } from './Loader.Styles';

const Loader = () => {
    
    const { classes } = getCircularProgressStyles();

    return (
        <Box className={classes.getLoaderContStyles}>
            <LinearProgress color="inherit" className={classes.getLoaderStyles} />
        </Box>
    );
}

export default Loader;