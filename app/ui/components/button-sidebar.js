import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import LocalLibraryOutlinedIcon from '@mui/icons-material/LocalLibraryOutlined';
import ManageAccountsOutlinedIcon from '@mui/icons-material/ManageAccountsOutlined';
import QueryStatsOutlinedIcon from '@mui/icons-material/QueryStatsOutlined';

export default function IconLabelButtons() {
  return (
    <Stack direction="column"  spacing={2}>
      <Button variant="contained"  startIcon={<GroupsOutlinedIcon  />}>
        Групи
      </Button>
      <Button variant="contained" startIcon={<PersonOutlineOutlinedIcon/>}>
        Студенти
      </Button>
      <Button variant="contained" startIcon={<LocalLibraryOutlinedIcon/>}>
        Викладачі
      </Button>
      <Button variant="contained" startIcon={<ManageAccountsOutlinedIcon/>}>
        Управління
      </Button>
      <Button variant="contained" startIcon={<QueryStatsOutlinedIcon/>}>
        Статистика
      </Button>
    </Stack>
  );
}