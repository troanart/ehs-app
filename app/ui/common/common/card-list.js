'use client'

import React, { useEffect, useState } from 'react';
import api from '@/app/utils/api';
import { Card, List } from 'antd';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Progress } from 'antd';
import PersonIcon from '@mui/icons-material/Person';
import GroupsIcon from '@mui/icons-material/Groups';
import PaidIcon from '@mui/icons-material/Paid';





const CardList = () => {
    const [students, setStudents] = useState([]);
    const [groups, setGroups] = useState([]);
    useEffect(() => {
      const fetchData = async () => {
        try {
          const studentsData = await api.getStudents();
          const groupsData = await api.getGroups();
          setGroups(groupsData);
          setStudents(studentsData);
        } catch (error) {}
      };
      fetchData();
    }, []);

    const data = [
        {
            title: 'Загальна кількість груп',
            value: groups.length || 0 ,
            icon: <GroupsIcon className='w-[100px] h-[100px] absolute top-0 left-[38px]'/>,
        },
        {
            title: 'Загальна кількість студентів',
            value: students.length || 0,
            icon: <PersonIcon className='w-[100px] h-[100px] absolute top-0 left-[38px]'/>,
        },
        {
            title: 'Загальний прибуток',
            value: groups.reduce((sum, group) => sum + (group.income || 0), 0) || 0 ,
            icon: <PaidIcon className='w-[100px] h-[100px] absolute top-0 left-[38px]'/>,
        },
        {
            title: 'Чистий прибуток',
            value: groups.reduce((sum, group) => sum + (group.cleareIncome || 0), 0) || 0,
            icon: <PaidIcon className='w-[100px] h-[100px] absolute top-0 left-[38px]'/>,
        },
    ]
    
    return (
        
      <List
     
        grid={{
          gutter: 16,
          xs: 1,
          sm: 2,
          md: 4,
          lg: 4,
          xl: 4,
          xxl: 4,
        }}
        dataSource={data}
        renderItem={(item) => (
          <List.Item  >
            <Card className='relative' >
                {item.icon}
                <CardContent style={{paddingBottom: 0, paddingTop: 0}}>
                    <Typography   fontSize='15px'>
                        {item.title}
                    </Typography>
                    <Typography  fontSize= '20px' marginBottom="15px">
                        {item.value}
                    </Typography>
                    <Typography   fontSize= '12px' align='left'>
                    Ціль на місяць 
                    </Typography>
                    <Progress percent={30} />
                </CardContent>
            </Card>
          </List.Item>
        )}
      />
      
    );
  };
  
export default CardList;