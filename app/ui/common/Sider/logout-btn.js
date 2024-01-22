'use client'

import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import LogoutIcon from '@mui/icons-material/Logout';



export default function Logout() {
  return (
    <Stack direction="row" spacing={1}>
        <Button variant="contained" startIcon={<LogoutIcon />}>
            Вихід
        </Button>
    </Stack>
  );
}