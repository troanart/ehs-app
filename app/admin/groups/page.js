import React from "react";
import CollapsibleTable from "@/app/ui/common/Main/table-groups";
import ColorToggleButton from "@/app/ui/common/Main/filter-btn";
import GroupsCards from "@/app/ui/common/groups/groups-card";
import Button from '@mui/material/Button';

import { Divider } from "antd";
import AddGroups from "@/app/ui/common/groups/add-button";

export default function Groups() {
  return (
    <div>
       {/* <h2 className="text-left text-3xl font-serif ">Групи</h2>
       <Divider className="mt-0 "/> */}
      <div className="mb-4 p-4 rounded-md border-[#1976d2] border-[1px] border-dashed flex ">
        <div className="mr-auto">
          <ColorToggleButton />
        </div>
        
        <AddGroups/>
      </div>
      <GroupsCards/>
      {/* <CollapsibleTable/>  */}
    </div>
  );
}
