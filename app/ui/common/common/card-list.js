"use client";

import React, { useEffect, useState } from "react";
import api from "@/app/utils/api";
import { Card, List } from "antd";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Progress } from "antd";
import PersonIcon from "@mui/icons-material/Person";
import GroupsIcon from "@mui/icons-material/Groups";
import PaidIcon from "@mui/icons-material/Paid";
import InfoIcon from "@mui/icons-material/Info";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import SettingsIcon from "@mui/icons-material/Settings";

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
      title: "Кількість груп:",
      value: groups.length || 0,
      icon: (
        <GroupsIcon className="w-[35px] h-[35px]  absolute top-0 right-1  " />
      ),
    },
    {
      title: "Кількість студентів:",
      value: students.length || 0,
      icon: 
        <PersonIcon className="w-[35px] h-[35px]  absolute top-0 right-1  " />
      ,
    },
    {
      title: "Загальний прибуток:",
      value: new Intl.NumberFormat("uk", { notation: "compact" }).format(
        groups.reduce((sum, group) => sum + (group.income || 0), 0) || 0
      ),
      icon: 
        <PaidIcon className="w-[35px] h-[35px]  absolute top-0 right-1  " />
      ,
      description: "Загальний прибуток з урахуванням заробітної плати вчителів",
    },
    {
      title: "Чистий прибуток:",
      value: new Intl.NumberFormat("uk", { notation: "compact" }).format(
        groups.reduce((sum, group) => sum + (group.cleareIncome || 0), 0) || 0
      ),
      icon: <PaidIcon className="w-[35px] h-[35px] absolute top-0 right-1" />,
      description:
        "Загальний прибуток з вирахуванням заробітної плати вчителів",
    },
  ];

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
        <List.Item>
          <Card className="relative">
            <CardContent
              style={{
                textAlign: "left",
                padding: 0,
              }}>
              <Typography fontSize="15px" className="inline-block">
                {item.title}
              </Typography>
              <Typography fontSize="20px" className="inline-block mb-5 ml-2">
                {item.value}
              </Typography>
              <Typography fontSize="12px" align="left">
                Ціль на місяць
              </Typography>
              <Progress percent={30} className="m-0 " />
              <Tooltip arrow title="Змінити цілі">
                <IconButton
                  aria-label="delete"
                  className="p-0 absolute left-[115px] bottom-[43px]">
                  <SettingsIcon className="w-4 " />
                </IconButton>
              </Tooltip>
            </CardContent>
            {item.description && ( // Показываем Tooltip только если есть описание
              <Tooltip
                title={item.description}
                arrow
                className="absolute top-1 right-1 p-0">
                <IconButton>
                  <InfoIcon className="w-6 h-5" />
                </IconButton>
              </Tooltip>
            )}
          </Card>
        </List.Item>
      )}
    />
  );
};

export default CardList;
