'use client'
import React from 'react';
import { Box, IconButton, InputAdornment, TextField, Button, Typography } from '@mui/material';
import { useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { Visibility, VisibilityOff } from '@mui/icons-material';

const MangerSignUp = () => {

  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);

  const [showPassword, setShowPassword] = useState(false);

  const validateUser = (user: any) => {
    let userValid = {
      name: true,
      email: true,
      password: true,
      phone: true
    };

    let errors = {
      name: '',
      email: '',
      password: '',
      phone: ''
    };

    if (!user.name) {
      userValid.name = false;
      errors.name = 'Name is required';
    }

    if (!user.email) {
      userValid.email = false;
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(user.email)) {
      userValid.email = false;
      errors.email = 'Email address is invalid';
    }

    if (!user.password) {
      userValid.password = false;
      errors.password = 'Password is required';
    } else if (user.password.length < 6) {
      userValid.password = false;
      errors.password = 'Password must be 6 or more characters';
    }

    if (!user.phone) {
      userValid.phone = false;
      errors.phone = 'Phone is required';
    } else if (!/^\d+$/.test(user.phone)) {
      userValid.phone = false;
      errors.phone = 'Phone number is invalid';
    }

    return { userValid, errors };
  }

  const [userValid, setUserValid] = useState({
    name: true,
    email: true,
    password: true,
    phone: true
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    password: '',
    phone: ''
  });

  const router = useRouter();

  const handleSubmit = () => {
    let user = {
      name: nameRef.current?.value,
      email: emailRef.current?.value,
      password: passwordRef.current?.value,
      phone: phoneRef.current?.value
    }

    let {userValid, errors} = validateUser(user);
    setUserValid(userValid);
    setErrors(errors);

    userValid.name && userValid.email && userValid.password && userValid.phone && router.push('/manager');
  }

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  }

  const longinButton = <Button onClick={() => router.push('/manager/login')} className='hover:bg-inherit  text-sky-800 text-bold'>login</Button>

  const testFieldStyle = "w-2/3 m-4"

  return (
    <main className="min-h-screen p-24">
      <Box component="form" className="bg-inherit border-white border-solid border-4  min-h-56 min-w-52 h-4/5 w-3/5 m-auto flex flex-col justify-center items-center rounded-lg">
        <Typography component='h2' variant='h4' color='white' mt={4}>Sign Up</Typography>
        <Typography variant="body1" color="white">register and build your shelter now!</Typography>
        <TextField
          className={testFieldStyle}
          label='Name'
          placeholder='Enter your name'
          inputRef={nameRef}
          required
          variant='filled'
          error={!userValid.name}
          helperText={(userValid.name)? '' : errors.name}>
        </TextField>
        <TextField
          className={testFieldStyle}
          label='Email'
          placeholder='Enter your email'
          inputRef={emailRef}
          required
          variant='filled'
          error={!userValid.email}
          helperText={(userValid.email)? '' : errors.email}>
        </TextField>
        <TextField
          className={testFieldStyle}
          label='Phone number'
          placeholder='Enter your phone number'
          inputRef={phoneRef}
          required
          variant='filled'
          error={!userValid.phone}
          helperText={(userValid.phone)? '' : errors.phone}>
        </TextField>
        <TextField
          className={testFieldStyle}
          label='Password'
          placeholder='Enter your password'
          inputRef={passwordRef}
          required
          variant='filled'
          error={!userValid.password}
          helperText={(userValid.password)? '' : errors.password}
          type={showPassword ? 'text' : 'password'}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={toggleShowPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            )
          }}>
        </TextField>
        <button onClick={handleSubmit}
        className='border-white rounded-md border-2 h-10 w-1/2 hover:bg-grey-500 text-white'>
          Sign up
        </button>
        <Typography variant="body1" color="white" m={3}>Already have an account? {longinButton}</Typography>
      </Box>
    </main>
  )
}

export default MangerSignUp;