import React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import ProfilePicNotFound from '../../assets/profile pic not found.jpg';
import { Typography } from '@mui/material';

const CustomDialog = ({ open, scroll, handleClose, handleImageReselection, image }) => {

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
            {
              image !== ""
              ?
              <>
                <Typography variant="body1" textAlign={"center"}>Your profile picture</Typography>
                <img src={image} alt="" width="100%" />
              </>
              :
                <img src={ProfilePicNotFound} alt="" width="100%" />
            }
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleImageReselection}>Re-select</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default CustomDialog;