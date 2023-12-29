'use client'
import React from 'react';
import PersonRemoveOutlinedIcon from '@mui/icons-material/PersonRemoveOutlined';
import IconButton from '@mui/material/IconButton'

const StaffMemberCard = (props: any) => {
  
  const handleDelete = () => {
    console.log('delete');
    console.log(props.staffList);
    console.log(props.staff);
  }

  return (
    <div className="flex flex-col items-center bg-blue-500 m-4 rounded-md p-10">
      <div className="flex flex-col items-center">
        <p className="text-lg font-bold text-white">{props.staff.name}</p>
        <p className="text-lg font-bold">{props.staff.email}</p>
        <p className="text-lg font-bold text-white">{props.staff.phone}</p>
        <IconButton aria-label="delete" onClick={handleDelete}>
          <PersonRemoveOutlinedIcon />
        </IconButton>
      </div>
    </div>
  )
}

export default StaffMemberCard;