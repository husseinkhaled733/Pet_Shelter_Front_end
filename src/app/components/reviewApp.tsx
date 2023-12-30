'use client'
import React from 'react';
import PersonRemoveOutlinedIcon from '@mui/icons-material/PersonRemoveOutlined';
import IconButton from '@mui/material/IconButton'
import { BASE_BACKEND_URL, DELETE_STAFF_ENDPOINT, TAKE_ACTION_ENDPOINT } from '../constants/end-points';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/navigation';
import { HOME_ROUTE } from '../constants/routes';
import { useEffect } from 'react';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import ClearIcon from '@mui/icons-material/Clear';



const ReviewAppCard = (props: any) => {

  const router = useRouter()

  useEffect(() => {
    const auth = localStorage.getItem('Authorization')
    if (!auth) {
      router.push(HOME_ROUTE)
    }
  }, [])

  const handleReject = async (e: any) => {
    e.preventDefault();
    const url = BASE_BACKEND_URL + TAKE_ACTION_ENDPOINT
    let headers = new Headers()
    headers.append('Content-Type', 'application/json');
    headers.append('mode', 'cors')
    headers.append('Authorization', localStorage.getItem('Authorization')!)
    let response = await fetch(url, {
      method: 'PUT',
      body: JSON.stringify({
        email: props.app.email,
        status: 'rejected',
        petId: props.app.petId
      }),
      headers: headers
    })

    if (response.status === 200) {
      toast.success("Application rejected successfully!", {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 1000
      });
    }

  }

  const handleApprove = async (e: any) => {
    e.preventDefault();
    const url = BASE_BACKEND_URL + TAKE_ACTION_ENDPOINT
    let headers = new Headers()
    headers.append('Content-Type', 'application/json');
    headers.append('mode', 'cors')
    headers.append('Authorization', localStorage.getItem('Authorization')!)
    let response = await fetch(url, {
      method: 'PUT',
      body: JSON.stringify({
        email: props.app.email,
        status: 'approved',
        petId: props.app.petId
      }),
      headers: headers
    })

    if (response.status === 200) {
      toast.success("Application approved successfully!", {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 1000
      });
    }
  }

  return (
    <div className="flex flex-row items-center bg-blue-500 m-4 rounded-md w-full p-10 justify-evenly">
        <p className="text-lg font-bold m-4 text-white">{props.app.email}</p>
        <div className='h-6 w-px bg-white mx-0 my-4'></div>
        <p className="text-lg m-4 font-bold text-black">{props.app.name}</p>
        <div className='h-6 w-px bg-white mx-0 my-4'></div>
        <p className="text-lg font-bold m-4 text-white">{props.app.status}</p>
        (props.app.status == 'pending') && <IconButton aria-label="delete" size='large' onClick={handleReject}>
          <ClearIcon className='text-white' />
        </IconButton>
        (props.app.status == 'pending') && <IconButton aria-label="accept" onClick={handleApprove}>
          <DoneAllIcon className='text-white' />
        </IconButton>
    </div>
  )
}

export default ReviewAppCard;