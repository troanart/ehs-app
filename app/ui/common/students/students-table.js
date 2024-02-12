'use client'
import React, { useEffect, useState } from 'react';
import { Table } from 'antd';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import api from '@/app/utils/api';

const columns = [
  {
    title: 'Імя',
    dataIndex: 'name',
    render: (name) => `${name}`,
    // width: '20%',
  },
  {
    title: 'Контакти',
    dataIndex: 'contacts',
    render: (name) => `${name}`,
  },
  {
    title: 'Вік',
    dataIndex: 'age',
    render: (name) => `${name}`,
    
  },
  {
    title: 'Група',
    dataIndex: 'group',
    render: (name) => `${name}`,
    

  },
  {
    title: 'Тариф',
    dataIndex: 'tariff',
   
    render: (name) => `${name}`,
  
  },
  {
    title: 'Кількість занять',
    dataIndex: 'allLessons',

    render: (name) => `${name}`,
   
  },
  {
    title: 'Відвіданих занять',
    dataIndex: 'checkLessons',
  
    render: (name) => `${name}`,
  
  },
  {
    title: 'Можливості',
    dataIndex: '',
    key: 'x',
    render: () => {
      return (
        <div>
          <IconButton aria-label="delete" color="primary">
           <EditIcon />
          </IconButton>
          <IconButton aria-label="delete" color="primary">
           <DeleteIcon />
          </IconButton>
        </div>
      )
    },
  },
];


const StudentTable = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [tableParams, setTableParams] = useState({
    pagination: {
      current: 1,
      pageSize: 10,
    },
  });

 
  useEffect(() => {
    const fetchData = async () => {
        try {
          const studentsData = await api.getStudents();
          setData(studentsData);
          setLoading(false)
          setTableParams({
            ...tableParams,
            pagination: {
              ...tableParams.pagination,
              total: 200,
            },
          });
        } catch (error) {
          console.error("Error fetching data:", error);
          loading
        }
      };
  
      fetchData();
  });
  
  const handleTableChange = (pagination, filters, sorter) => {
    setTableParams({
      pagination,
      filters,
      ...sorter,
    });

   
    if (pagination.pageSize !== tableParams.pagination?.pageSize) {
      setData([]);
    }
  };
  return (
    <Table
      columns={columns}
      rowKey={(record) => record._id}
      dataSource={data}
      pagination={tableParams.pagination}
      loading={loading}
      onChange={handleTableChange}
    />
  );
};
export default StudentTable;