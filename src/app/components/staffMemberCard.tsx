'use client'
import React from 'react';
import PersonRemoveOutlinedIcon from '@mui/icons-material/PersonRemoveOutlined';
import IconButton from '@mui/material/IconButton'

const StaffMemberCard = (props: any) => {
  
  const handleDelete = (e: any) => {
    e.preventDefault();
    console.log('delete');
    console.log(props.staffList);
    console.log(props.staff);
  }

  return (
    <div className="flex flex-row items-center bg-blue-500 m-4 rounded-md w-full p-10 justify-evenly">
        <p className="text-lg font-bold m-4 text-white">{props.staff.name}</p>
        <div className='h-6 w-px bg-white mx-0 my-4'></div>
        <p className="text-lg m-4 font-bold">{props.staff.email}</p>
        <div className='h-6 w-px bg-white mx-0 my-4'></div>
        <p className="text-lg font-bold m-4 text-white">{props.staff.phone}</p>
        <IconButton aria-label="delete" onClick={handleDelete} size='large'>
          <PersonRemoveOutlinedIcon />
        </IconButton>
    </div>
  )
}

export default StaffMemberCard;