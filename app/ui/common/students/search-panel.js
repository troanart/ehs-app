'use client'

import * as React from 'react';
import { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import api from '@/app/utils/api';


export default function SearchPanel() {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const studentsData = await api.getStudents();
                setStudents(studentsData)
            } catch (error){
                console.log(error)
            }
        }
        fetchData()
    },[])

    console.log(students)

   
  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={students.map((item) => {
        return item.name
      })}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Пошук Студента " />}
    />
  );
}


