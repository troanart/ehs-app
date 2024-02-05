// import React, { useEffect, useState } from "react";
// import { Transfer } from "antd";
// import api from "@/app/utils/api";

// const TransferList = () => {
//   const [students, setStudents] = useState([]);
//   const [targetKeys, setTargetKeys] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const apiData = await api.getStudents();

//         // Преобразуйте полученные данные в формат, который ожидает Transfer
//         const updatedMockData = apiData.map((item) => ({
//           key: item.id.toString(),
//           title: item.name,
//           description: item.description,
//         }));

//         // Выберите ключи, которые должны быть выбраны по умолчанию
//         const updatedTargetKeys = updatedMockData.map((item) => item.key);

//         setStudents(updatedMockData); // Обновляем состояние students, а не mockData
//         setTargetKeys(updatedTargetKeys);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     fetchData();
//   }, []);

//   const filterOption = (inputValue, option) =>
//     option.description.indexOf(inputValue) > -1;

//   const handleChange = (newTargetKeys) => {
//     setTargetKeys(newTargetKeys);
//   };

//   const handleSearch = (dir, value) => {
//     console.log("search:", dir, value);
//   };
//   return (
//     <Transfer
//       dataSource={students || []} // Используем данные из состояния students
//       showSearch
//       filterOption={filterOption}
//       targetKeys={targetKeys || []}
//       onChange={handleChange}
//       onSearch={handleSearch}
//       render={(item) => item.title}
//     />
//   );
// };
// export default TransferList;
