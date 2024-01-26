'use client'

import {React, useState, useEffect} from 'react';
import { Space, Table, Tag } from 'antd';
import api from '@/app/utils/api';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import DeleteIcon from '@mui/icons-material/Delete';
import DrowerComponent from '../groups/drower';


const App = () => {
  const [open, setOpen] = useState(false);
  const [selectedGroupName, setSelectedGroupName] = useState('');

  const showDrawer = (groupName) => {
    setOpen(true);
    setSelectedGroupName(groupName);
  };

  const onClose = () => {
    setOpen(false);
  };


  const [groups, setGroups] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const groupsData = await api.getGroups();
        setGroups(groupsData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const columns = [
    {
      title: 'Назва',
      dataIndex: 'name',
      key: 'name',
      render: (text) => <a onClick={() => showDrawer(text)}>{text}</a>,
      
    },
    {
      title: 'Викладач',
      dataIndex: 'teacher',
      key: 'teacher',
      render: (text) => <a onClick={() => showDrawer(text)}>{text}</a>,
      
    },
    {
      title: 'К-ть студентів',
      dataIndex: 'studentsCount',
      key: 'studentsCount',
    },
    
    {
      title: 'Тип',
      key: 'type',
      dataIndex: 'type',
      render: (text) => (
        <Tag style={{color: text === 'online'? 'blue': 'green'}}>
          {text.toUpperCase()}
        </Tag>
       
      ) 
    },
    {
      title: 'Прибуток',
      dataIndex: 'income',
      key: 'income',
    },
    {
      title: 'Чистий прибуток',
      dataIndex: 'cleareIncome',
      key: 'cleareIncome',
    },
    {
      title: 'Дії',
      key: 'action',
      render: () => (
        <Stack direction="row" spacing={1}>
          <IconButton aria-label="edit">
            <ModeEditIcon/>
          </IconButton>
          <IconButton aria-label="delete">
            <DeleteIcon/>
          </IconButton>
        </Stack>
      ),
    },
  ];
  
  return (
    <>
    <Table columns={columns} dataSource={groups} pagination={false} />
    <DrowerComponent open={open} onClose={onClose} groupName={selectedGroupName} />
  </>
  );
};


export default App;