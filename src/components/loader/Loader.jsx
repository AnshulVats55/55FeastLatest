import React from 'react';
import { LinearProgress, Stack } from '@mui/material';
import { getCircularProgressStyles } from './Loader.Styles';

const Loader = () => {
    
    const { classes } = getCircularProgressStyles();

    return (
        <Stack className={classes.getLoaderContStyles} sx={{ color: '#ef5d36' }}>
            <LinearProgress color="inherit" className={classes.getLoaderStyles} />
        </Stack>
    );
}

export default Loader;