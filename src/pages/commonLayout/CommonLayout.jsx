import React from 'react';
import { getCommonLayoutStyles } from './CommonLayout.Styles';
import { Container } from '@mui/material';
import Home from '../../components/home/Home';

const CommonLayout = ({ component }) => {

    const { classes } = getCommonLayoutStyles();

    return (
        <Container maxWidth="xl" className={classes.getContainerStyles}>
            {component}
        </Container>
    );
}

export default CommonLayout;