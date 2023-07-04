import React from 'react';
import { Button } from '@mui/material';
import { getInviteButtonStyles } from './InviteButton.Styles';

const InviteButton = ({ children, type, handleAction, styles }) => {

    const { classes } = getInviteButtonStyles(styles);

    const handleActionBeingPerformed = async () => {
        try{
            const response = await handleAction();
            return response;
        }
        catch(error){
            return error;
        }
    };

    return (
        <Button
            className={classes.getButtonStyles}
            type={type}
            onClick={handleActionBeingPerformed}
        >
            {children}
        </Button>
    );
}

export default InviteButton;