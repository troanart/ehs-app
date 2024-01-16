"use client"
import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import DrowerComponent from './drower';



export default function BasicList() {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <Box className='border-[2px] rounded-[5px] border-[#1677ff]' sx={{ width: '100%', maxWidth: 360, bgcolor: 'white' }}>
      <nav aria-label="main mailbox folders" >
        <List>
          <ListItem disablePadding onClick={showDrawer} >
            <ListItemButton component='a' >
              <ListItemIcon >
                <AccountCircleIcon  sx={{scale:'1.5'}} />
              </ListItemIcon>
              <ListItemText primary="Дмитро" />
            </ListItemButton>
          </ListItem>
          <Divider />
          <ListItem disablePadding onClick={showDrawer}>
            <ListItemButton component='a'>
              <ListItemIcon >
                <AccountCircleIcon  sx={{scale:'1.5'}} />
              </ListItemIcon>
              <ListItemText primary="Марк" />
            </ListItemButton>
          </ListItem>
          <Divider />
          <ListItem disablePadding onClick={showDrawer}>
            <ListItemButton component='a'>
              <ListItemIcon >
                <AccountCircleIcon  sx={{scale:'1.5'}} />
              </ListItemIcon>
              <ListItemText primary="Олег" />
            </ListItemButton>
          </ListItem>
          <Divider />
          <ListItem disablePadding onClick={showDrawer}>
            <ListItemButton component='a'>
              <ListItemIcon >
                <AccountCircleIcon  sx={{scale:'1.5'}} />
              </ListItemIcon>
              <ListItemText primary="Ольга" />
            </ListItemButton>
          </ListItem>
        </List>
        
      </nav>
      <DrowerComponent placement="right" closable={false} onClose={onClose} open={open}/>
    </Box>
  );
}