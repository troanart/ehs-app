import React from 'react';
import Button from '@mui/material/Button';
import CardList from "../ui/common/common/card-list";
const Admin = () => {
  return (
    <div className='text-right'>
      <div>
        <Button sx={{marginBottom:'4px'}}>Детальніше</Button>
        <CardList/>
      </div>
    </div>
  );
};

export default Admin;