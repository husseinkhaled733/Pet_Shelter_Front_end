'use client'
import React from 'react';
import PersonRemoveOutlinedIcon from '@mui/icons-material/PersonRemoveOutlined';
import IconButton from '@mui/material/IconButton'
import { BASE_BACKEND_URL, DELETE_STAFF_ENDPOINT } from '../constants/end-points';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const StaffMemberCard = (props: any) => {

  const deleteStaffMember = async (email: string) => {
    const url = BASE_BACKEND_URL + DELETE_STAFF_ENDPOINT + email
    let headers = new Headers()
    headers.append('Content-Type', 'application/json');
    headers.append('mode', 'cors')
    headers.append('Authorization', localStorage.getItem('Authorization')!)
    let response = await fetch(url, {
      method: 'GET',
      headers: headers
    })

    if (response.status === 200) {
      toast.success("Staff member deleted successfully!", {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 1000
      });
    } else {
      toast.error("Failed to delete staff member!", {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 1000
      });
    }
  }
  
  const handleDelete = (e: any) => {
    e.preventDefault();
    deleteStaffMember(props.staff.email)
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