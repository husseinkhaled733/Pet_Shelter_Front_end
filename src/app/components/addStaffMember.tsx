'use client'
import React from 'react';
import { Box, TextField, Typography } from '@mui/material';
import { useState, useRef } from 'react';

const StaffMemberForm = () => {
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

  const sendToServer = (staff: any) => {
    // TODO: send to server
    staff.password = ('@' + staff.name + '123').toLowerCase().replaceAll(' ', '');
    staff.role = 'staff'

    console.log(staff);
    console.log('send to server');
  }

  const validateShelter = (staff: any) => {

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
    let staff = {
      name: nameRef.current?.value,
      email: emailRef.current?.value,
      phone: phoneRef.current?.value,
    }

    let {staffValid, errors} = validateShelter(staff);
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
      </Box>
  )
}

export default StaffMemberForm;