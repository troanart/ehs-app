"use client";
import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import api from "@/app/utils/api";

const AddStudentsForm = () => {
  const [login, setLogin] = useState("");
  const [groupType, setGroupType] = useState("online");
  const [selectedTeacher, setSelectedTeacher] = useState("");
  const [teachers, setTeachers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const teachersData = await api.getTeachers();
        setTeachers(teachersData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleLoginChange = (event) => {
    setLogin(event.target.value);
  };

  const handleGroupTypeChange = (event) => {
    setGroupType(event.target.value);
  };

  const handleTeacherChange = (event) => {
    setSelectedTeacher(event.target.value);
  };

  return (
    <div>
      <form className="p-2">
        <FormControl className="mb-4 min-w-[450px] ">
          <FormControl className="mb-4 w-[100%]">
            <TextField
              id="outlined-basic-login"
              label="Імя"
              value={login}
              variant="outlined"
              onChange={handleLoginChange}
              type="text"
            />
          </FormControl>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Викладач</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={selectedTeacher}
              label="Викладач"
              onChange={handleTeacherChange}>
              {teachers.map((teacher) => (
                <MenuItem key={teacher.id} value={teacher.id}>
                  {teacher.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </FormControl>

        <FormControl className="mb-5 w-[100%] text-center ">
          <FormLabel id="demo-row-radio-buttons-group-label text-center ">
            Тип групи
          </FormLabel>
          <RadioGroup
            className="justify-center"
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
            value={groupType}
            onChange={handleGroupTypeChange}>
            <FormControlLabel
              value="online"
              control={<Radio />}
              label="Онлайн"
            />
            <FormControlLabel
              value="offline"
              control={<Radio />}
              label="Офлайн"
            />
            <FormControlLabel
              value="corporate"
              control={<Radio />}
              label="Корпоративна"
            />
          </RadioGroup>
        </FormControl>
        {/* <FormControl className="w-[100%]">
          <InputLabel id="demo-simple-select-label">Викладач</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={selectedTeacher}
            label="Викладач"
            onChange={handleTeacherChange}>
            {teachers.map((teacher) => (
              <MenuItem key={teacher.id} value={teacher.id}>
                {teacher.name}
              </MenuItem>
            ))}
          </Select>
          <div></div>
        </FormControl> */}
      </form>
    </div>
  );
};

export default AddStudentsForm;
