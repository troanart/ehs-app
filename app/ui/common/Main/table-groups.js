'use client'

import {React, useState, useEffect} from 'react';
import { Space, Table, Tag } from 'antd';
import api from '@/app/utils/api';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import DeleteIcon from '@mui/icons-material/Delete';

const columns = [
  {
    title: 'Назва',
    dataIndex: 'name',
    key: 'name',
    
  },
  {
    title: 'Викладач',
    dataIndex: 'teacher',
    key: 'teacher',
  },
  {
    title: 'К-ть студентів',
    dataIndex: 'studentsCount',
    key: 'studentsCount',
  },
  
  {
    title: 'Тип',
    key: 'tags',
    dataIndex: 'tags',
    // render: (_, { tags }) => (
    //   <>
    //     {tags.map((tag) => {
    //       let color = tag.length > 5 ? 'geekblue' : 'green';
    //       if (tag === 'loser') {
    //         color = 'volcano';
    //       }
    //       return (
    //         <Tag color={color} key={tag}>
    //           {tag.toUpperCase()}
    //         </Tag>
    //       );
    //     })}
    //   </>
    // ),
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

const App = () => {
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

  return (
    <Table columns={columns} dataSource={groups} pagination={false} />
  );
};


export default App;