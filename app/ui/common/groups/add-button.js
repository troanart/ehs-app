'use client'
import React from 'react';
import AddGroupsForm from "@/app/ui/common/groups/add-groups-form";
import Button from '@mui/material/Button';
import GroupAddIcon from '@mui/icons-material/GroupAdd';

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

export default function AddGroups() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
    return ( 
    <>
        <Button variant="outlined" color='primary' startIcon={<GroupAddIcon />} onClick={handleClickOpen} >
            Створити групу
        </Button>
         <Dialog
         open={open}
         TransitionComponent={Transition}
         keepMounted
         onClose={handleClose}
         aria-describedby="alert-dialog-slide-description"
       >
         <DialogTitle>{"Створити нову групу"}</DialogTitle>
         <DialogContent>
            <AddGroupsForm/>
         </DialogContent>
         <DialogActions>
        
         </DialogActions>
       </Dialog>
    </>
    )
}


