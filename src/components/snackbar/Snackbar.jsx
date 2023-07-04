import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Snackbar, Alert, Typography, Container } from '@mui/material';
import { getSnackbarStyles } from './Snackbar.Styles';
import { setCustomSnackbar } from '../../store/slices/SnackbarSlice';

const CustomSnackbar = () => {

    const { classes } = getSnackbarStyles();

    const dispatch = useDispatch();
    const{ snackbarOpen, snackbarType, snackbarMessage } = useSelector((state)=>state.snackbarReducer)
    const handleClose = (reason) => {
        if(reason === "clickaway"){
            return;
        }
        dispatch(setCustomSnackbar(
            {
                snackbarOpen:false,
                snackbarType,
                snackbarMessage
            }
        ));
    };

    return (
        <div>
            <Snackbar
                open={snackbarOpen}
                autoHideDuration={1500}
                onClose={handleClose}
                anchorOrigin={{
                    vertical:"top",
                    horizontal:"center"
                }}
                color={snackbarType}
                className={classes.getSnackbarStyles}
            >
                <Container
                    maxWidth="xl"
                    sx={{
                        display:"flex",
                        justifyContent:"center",
                    }}
                >
                    <Alert
                        elevation={5}
                        variant="filled"
                        onClose={handleClose}
                        color={snackbarType}
                        className={classes.getAlertStyles}
                    >
                        <Typography className={classes.getSnackbarTextStyles}>{snackbarMessage}</Typography>
                    </Alert>
                </Container>
            </Snackbar>
        </div>
    );
}

export default CustomSnackbar;