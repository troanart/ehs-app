'use client'
import {React, useEffect,useState} from 'react';
import { Card, List, Statistic, Space  ,Tag } from 'antd';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import IconButton from '@mui/material/IconButton';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import api from '@/app/utils/api';

const GroupsCards = () => {
    const [groups, setGroups] = useState([]);
    const [students, setStudents] = useState([]);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const groupsData = await api.getGroups();
          const studentsData = await api.getStudents();
          setStudents(studentsData);
          setGroups(groupsData);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      fetchData();
    }, []);
  
    return (
      <List
        grid={{
          gutter: 16,
          column: 4,
        }}
        dataSource={groups}
        renderItem={(item) => {
          const studentsGroup = students.filter((student) => student.groupId === item.id);
  
          return (
            <List.Item>
              <Card className='text-left relative min-h-[340px]' title={<div className='text-2xl'>{item.name}</div>}>
                <IconButton className='absolute top-2 right-3'>
                  <MoreHorizIcon color='primary' />
                </IconButton>
                <div>
                  <p className='inline-block text-lg'>Викладач:</p><span className='ml-2'>{item.teacher}</span>
                </div>
                <div className=' min-h-[110px] mt-1'>
                    <div className='flex flex-wrap gap-1'>
                        {studentsGroup.map((student) => (
                            <Tag className='bg-sky-300 border-none'>{student.name}</Tag>
                        ))}
                    </div>
                    
                </div>
                <div className='flex items-center justify-center gap-2'>
                    <div>
                        <Statistic title="Прибуток" value={item.income} precision={2} prefix={<MonetizationOnIcon sx={{fill: " rgba(25, 118, 210, 0.5)"}}/>} />
                    </div>
                    <div>
                        <Statistic title="Дохід" value={item.cleareIncome} prefix={<MonetizationOnIcon sx={{fill:'rgba(13,167,89,.1)'}}/>} />
                    </div>
                </div>
                
              </Card>
            </List.Item>
          );
        }}
      />
    );
  };
  
  export default GroupsCards;