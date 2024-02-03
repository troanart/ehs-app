'use client'
import React, { useState, useEffect } from "react";
import ColorToggleButton from "@/app/ui/common/Main/filter-btn";
import GroupsCards from "@/app/ui/common/groups/groups-card";
import Demo from "@/app/ui/common/groups/color-picker";
import AddGroups from "@/app/ui/common/groups/add-button";

export default function Groups() {
  const getDefaultColors = () => ({
    online: '#1677ff',
    offline: '#1677ff',
    corporate: '#1677ff',
  });

  const [filterType, setFilterType] = useState("all");
  
  const [selectedColors, setSelectedColors] = useState(() => {
    const storedColors = localStorage.getItem('selectedColors');
    return storedColors ? JSON.parse(storedColors) : getDefaultColors();
  });

  const handleColorChange = (color, groupType) => {
    setSelectedColors((prevColors) => ({
      ...prevColors,
      [groupType]: color,
    }));
  };

  const handleFilterChange = (event, newFilterType) => {
    console.log(newFilterType)
    setFilterType(newFilterType);
    
  };

  useEffect(() => {
    localStorage.setItem('selectedColors', JSON.stringify(selectedColors));
  }, [selectedColors]);

  return (
    <div>
      <div className="mb-4 p-4 rounded-md border-[#1976d2] border-[1px] border-dashed flex ">
        <div className="">
         
          <ColorToggleButton selectedColors={selectedColors} filterType={filterType} onChange={handleFilterChange} />
        </div>
        <ul className=" mx-auto flex gap-12 justify-items-center relative  border  border-[#1976d1] text- rounded-md  items-center py-[5px] px-[35px]">
        <h2 className="absolute top-[-13px] left-2 bg-white text-[ #1976d1] ">Налаштування</h2>
          <li key={1} className="flex gap-5 justify-items-center items-center">
            <p className="text-sm">Онлайн</p>
            <Demo onColorChange={(color) => handleColorChange(color, "online")} />
          </li>
          <li key={2} className="flex gap-5 justify-items-center items-center">
            <p className="text-sm">Офлайн</p>
            <Demo onColorChange={(color) => handleColorChange(color, "offline")} />
          </li>
          <li key={3} className="flex gap-5 justify-items-center items-center">
            <p className="text-sm">Корпоративні</p>
            <Demo onColorChange={(color) => handleColorChange(color, "corporate")} />
          </li>
        </ul>
        <AddGroups />
      </div>
      <GroupsCards selectedColors={selectedColors} filterType={filterType} />
    </div>
  );
}