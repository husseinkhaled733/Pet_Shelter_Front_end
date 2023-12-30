'use client'
import React from 'react';
import { Box, TextField, Typography } from '@mui/material';
import { useState, useRef } from 'react';
import { BASE_BACKEND_URL, ADD_STAFF_ENDPOINT } from '@/app/constants/end-points';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { HOME_ROUTE } from '@/app/constants/routes';

const StaffMemberForm = () => {

  const router = useRouter()

  useEffect(() => {
    const auth = localStorage.getItem('Authorization')
    if (!auth) {
      router.push(HOME_ROUTE)
    }
  }, [])

  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);

  const [userValid, setUserValid] = useState({
    name: true,
    email: true,
    phone: true
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    phone: ''
  });

  const allValid = (userValid: any) => {
    return userValid.name && userValid.email && userValid.phone;
  }

  const notify = () => {
    toast.success("Staff member added successfully!", {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 1000
    });
  }

  const sendToServer = async (staff: any) => {
    staff.password = ('@' + staff.name + '123').toLowerCase().replaceAll(' ', '');
    console.log("to server")
    const wrapper = {
      managerEmail: localStorage.getItem('email'),
      staff: {
        name: staff.name,
        email: staff.email,
        phone: staff.phone,
        password: staff.password,
        role: 'staff'
      }
    }

    const url = BASE_BACKEND_URL + ADD_STAFF_ENDPOINT;
    let headers = new Headers()
    headers.append('Content-Type', 'application/json');
    headers.append('mode', 'cors')
    headers.append('Authorization', localStorage.getItem('Authorization')!)
    let response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(wrapper),
      headers: headers
    })

    if (response.status === 200) {
      notify()
    } else {
      toast.error("Something went wrong!", {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 1000
      });
    }
  }

  const validateStaff = (staff: any) => {

    let staffValid = {
      name: true,
      email: true,
      phone: true
    };
    
    let errors = {
      name: '',
      email: '',
      phone: '',
    };

    if (!staff.name) {
      staffValid.name = false;
      errors.name = 'Name is required';
    }

    if (!staff.email) {
      staffValid.email = false;
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(staff.email)) {
      staffValid.email = false;
      errors.email = 'Email address is invalid';
    }

    if (!staff.phone) {
      staffValid.phone = false;
      errors.phone = 'Phone is required';
    } else if (!/^\d+$/.test(staff.phone)) {
      staffValid.phone = false;
      errors.phone = 'Phone number is invalid';
    }

    return {staffValid, errors};
  }

  const handleSubmit = (e: any) => {
    e.preventDefault();

    console.log('handle submit')
    let staff = {
      name: nameRef.current?.value,
      email: emailRef.current?.value,
      phone: phoneRef.current?.value,
    }

    let {staffValid, errors} = validateStaff(staff);
    setUserValid(staffValid);
    setErrors(errors);

    allValid(staffValid) && sendToServer(staff);

  }

  const testFieldStyle = "w-2/3 m-4"

  return (
      <Box component="form" className="bg-inherit mt-4 min-h-56 min-w-52 h-4/5 w-4/5 flex flex-col justify-center items-center">
        <Typography component='h2' variant='h4' color='#1976d2' mt={4}>Hire new staff member</Typography>
        <TextField
          className={testFieldStyle}
          label='Name'
          placeholder="Member's name"
          inputRef={nameRef}
          required
          variant='filled'
          error={!userValid.name}
          helperText={(userValid.name)? '' : errors.name}>
        </TextField>
        <TextField
          className={testFieldStyle}
          label='Email'
          placeholder="Member's email"
          inputRef={emailRef}
          required
          variant='filled'
          error={!userValid.email}
          helperText={(userValid.email)? '' : errors.email}>
        </TextField>
        <TextField
          className={testFieldStyle}
          label='Phone number'
          placeholder="Member's phone number"
          inputRef={phoneRef}
          required
          variant='filled'
          error={!userValid.phone}
          helperText={(userValid.phone)? '' : errors.phone}>
        </TextField>
        <button onClick={handleSubmit}
        className='m-4 bg-blue-600 text-white p-4 rounded-md font-mono hover:bg-blue-800'>
          Hire
        </button>
        <ToastContainer />
      </Box>
  )
}

export default StaffMemberForm;