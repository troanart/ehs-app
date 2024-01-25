import React from "react";
import Button from "@mui/material/Button";
import CardList from "../ui/common/common/card-list";
import CalendarComponent from "../ui/common/common/calendar";
const Admin = () => {
  return (
    <div className="text-right">
      <div className="bg-[#f5f5f5] px-5 rounded-lg">
        <Button sx={{ marginBottom: "4px" }}>Детальніше</Button>
        <CardList />
      </div>
      <CalendarComponent />
    </div>
  );
};

export default Admin;
