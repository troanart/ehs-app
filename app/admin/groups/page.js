'use client'
import React, {useState,useEffect} from "react";
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
  const [selectedColors, setSelectedColors] = useState(() => {
    // Попытка получить цвета из localStorage при первом рендере
    const storedColors = localStorage.getItem('selectedColors');
    return storedColors ? JSON.parse(storedColors) : getDefaultColors();
  });

 

  const handleColorChange = (color, groupType) => {
    setSelectedColors((prevColors) => ({
      ...prevColors,
      [groupType]: color,
    }));
  };

  useEffect(() => {
    // Сохранение цветов в localStorage при изменении
    localStorage.setItem('selectedColors', JSON.stringify(selectedColors));
  }, [selectedColors]);

  return (
    <div>
      <div className="mb-4 p-4 rounded-md border-[#1976d2] border-[1px] border-dashed flex ">
        <div className="">
          <ColorToggleButton />
        </div>
        <ul className=" mx-auto flex gap-12 justify-items-center  border  border-[#1976d1] text- rounded-md  items-center py-[5px] px-[15px]">
          <li className="flex gap-5 justify-items-center items-center">
            <p className="text-sm">Онлайн</p>
            <Demo onColorChange={(color) => handleColorChange(color, "online")} />
          </li>
          <li className="flex gap-5 justify-items-center items-center">
            <p className="text-sm">Офлайн</p>
            <Demo onColorChange={(color) => handleColorChange(color, "offline")} />
          </li>
          <li className="flex gap-5 justify-items-center items-center">
            <p className="text-sm">Корпоративні</p>
            <Demo onColorChange={(color) => handleColorChange(color, "corporate")} />
          </li>
        </ul>
        <AddGroups />
      </div>
      <GroupsCards selectedColors={selectedColors} />
    </div>
  );
}