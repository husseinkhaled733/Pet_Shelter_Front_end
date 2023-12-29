'use client'
import { Box } from "@mui/material";
import StaffMemberCard from "./staffMemberCard";
import { use, useState } from "react";
import { Button } from "@mui/material";

const StaffMembers = (props: any) => {

  const [staffList, setStaffList] = useState(props.staffList);
  
  return (
    <Box>
      {props.staffList.map((staff: any) => 
        <StaffMemberCard key={staff.email} staff={staff} staffList={staffList} setStaffList={setStaffList} />
      )}
    </Box>
  )
}

export default StaffMembers;