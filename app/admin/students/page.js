import React from "react";
import ColorToggleButton from "@/app/ui/common/Main/filter-btn";
import AddStudents from "@/app/ui/common/students/add-button-students";
import StudentTable from "@/app/ui/common/students/students-table";
import SearchPanel from "@/app/ui/common/students/search-panel";


export default function students() {
  return (
    <div>
      <div className="mb-4 p-4 rounded-md border-[#1976d2] border-[1px] border-dashed flex ">
        <div className="mr-auto">
          <SearchPanel
          />
        </div>
        <AddStudents />
      </div>
      <StudentTable/>
    </div>
  );
}
