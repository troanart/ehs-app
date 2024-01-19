'use client'

import {React, useState, useEffect} from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const fetchData = async () => {
  try {
    const response = await fetch("http://localhost:3000/api/data");
    const data = await response.json();
    return data
  } catch( error) {
    console.error("Error fetching data:", error)
    return []
  }
};

export default function BasicCard() {
  const [groupsCount, setGroupsCount] = useState(0);

  useEffect(() => {
    const fetchDataAndCount = async () => {
      const data = await fetchData();
      const count = data.length; // Используем свойство length для подсчета групп
      setGroupsCount(count);
    };

    fetchDataAndCount();
  }, []);

  return (
    <Card sx={{ maxWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }}  >
          Загальна кількість груп:{groupsCount}
        </Typography>
        <Typography >
          benevolent
        </Typography>
        <Typography sx={{ mb: 1.5 }} >
        
        </Typography>
        <Typography variant="body2">

          <br />
    
        </Typography>
      </CardContent>
      
    </Card>
  );
}