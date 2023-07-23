import React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import ProfilePicNotFound from '../../assets/profile pic not found.jpg';
import { Typography } from '@mui/material';
import { getDialogStyles } from './Dialog.Styles';

const CustomDialog = ({ open, scroll, handleClose, image }) => {

  const { classes } = getDialogStyles();

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogContent dividers={scroll === 'paper'}>
          <DialogContentText
            id="scroll-dialog-description"
            tabIndex={-1}
          >
            <Typography variant="body1" textAlign={"center"}>Your profile picture</Typography>
            <img src={image} alt="" width="100%" />
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            className={classes.getActionButtonStyles}
            onClick={handleClose}>
              Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default CustomDialog;