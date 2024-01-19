import React from "react";
import CollapsibleTable from "@/app/ui/common/Main/table-groups";
import ColorToggleButton from "@/app/ui/common/Main/filter-btn";
import BasicCard from "@/app/ui/common/common/information-card";

export default function Groups() {
  return (
    <div>
      <BasicCard />
      <ColorToggleButton/>
      <CollapsibleTable/>

    </div>
  );
}
