'use client'
import {React, useEffect,useState} from 'react';
import { Card, List, Statistic, Col, Row,Tag } from 'antd';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import IconButton from '@mui/material/IconButton';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import api from '@/app/utils/api';


const GroupsCards = ({ selectedColors,filterType }) => {
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
         
        }
      };
  
      fetchData();
    }, []);

    const filteredGroups = groups.filter((item) => {
      if (filterType === "all") {
        return true;
      }
      return item.type === filterType;
    });

    const getBorderColor = (groupType) => {
      switch (groupType) {
        case 'online':
          return selectedColors.online;
        case 'offline':
          return selectedColors.offline;
        case 'corporate':
          return selectedColors.corporate;
        default:
          return selectedColors.online; // или другой цвет по умолчанию
      }
    };
    
  
    return (
      <List
        grid={{
          gutter: 16,
          column: 4,
        }}
        dataSource={filteredGroups}
        renderItem={(item) => {
          const studentsGroup = students.filter((student) => student.groupId === item.id);
  
          return (
            <List.Item key={item.id} >
              <Card className={`border-l-[15px] text-left relative min-h-[250px] `} style={{ borderLeftColor: getBorderColor(item.type)}}  title={<div className='text-2xl'>{item.name}</div>}>
                <IconButton className='absolute top-2 right-3'>
                  <MoreHorizIcon color='primary' />
                </IconButton>
                <div>
                  <p className='inline-block text-lg'>Викладач:</p><span className='ml-2 text-sm'>{item.teacher}</span>
                </div>
                <div className='border my-2 p-2 rounded-lg border-dashed border-[#1976d2]'>
                 
                    <div className='flex flex-wrap gap-1 '>
                        {studentsGroup.map((student) => (
                            <Tag key={student.id} className='bg-sky-300 border-none px-3'>{student.name}</Tag>
                        ))}
                    </div>
                </div>
                <div >
                  <Row gutter={16}>
                      <Col span={12}>
                        <Card className='bg-inherit'  bordered={true}>
                          <Statistic
                            title="Прибуток"
                            value={new Intl.NumberFormat("uk", { notation: "compact" }).format(
                              item.income || 0
                            )}
                            precision={2}
                            valueStyle={{
                              color: '#3f8600',
                            }}
                            prefix={<MonetizationOnIcon sx={{mb:'6px'}} />}
                            
                          />
                        </Card>
                      </Col>
                      <Col span={12}>
                        <Card className='bg-inherit'  bordered={true}>
                          <Statistic
                            title="Дохід"
                            value={new Intl.NumberFormat("uk", { notation: "compact" }).format(
                              item.cleareIncome|| 0
                            )}
                            precision={2}
                            valueStyle={{
                              color: '#0891b2',
                            }}
                            prefix={<MonetizationOnIcon sx={{mb:'6px'}} />}
                            
                          />
                        </Card>
                      </Col>
                  </Row>  
                </div>
                
              </Card>
            </List.Item>
          );
        }}
      />
    );
  };
  
  export default GroupsCards;
