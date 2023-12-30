'use client'
import React from 'react';
import { Box, IconButton, InputAdornment, TextField, Button, Typography } from '@mui/material';
import { useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { ADOPTER_DASHBOARD_ROUTE, STAFF_DASHBOARD_ROUTE } from '@/app/constants/routes';
import loginController from '@/app/controllers/loginController';
import { LOGIN_ENDPOINT } from '@/app/constants/end-points';
import toJSON from '@/app/utils/readableBodyToJson';
import buildAuthToken from '@/app/utils/securityUtil';

const AdopterSignin = () => {

  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const [showPassword, setShowPassword] = useState(false);

  const [userValid, setUserValid] = useState({
    email: true,
    password: true,
  });

  const [errors, setErrors] = useState({
    email: '',
    password: '',
  });

  const router = useRouter();

  const handleAuth = (userDTO: any) => {
    const authToken = buildAuthToken(userDTO);
    localStorage.setItem("Authorization", authToken);
    localStorage.setItem('email', userDTO.email)
  }

  const sendToServer = async (user: any) => {
    let response = await loginController.sendPostRequest(user, LOGIN_ENDPOINT)
    let jsonResponse = await toJSON(response.body!)
    let responseStatus = response.status

    console.log(jsonResponse)
    console.log(responseStatus)

    if (responseStatus === 200) {
      handleAuth(user)
      router.push(ADOPTER_DASHBOARD_ROUTE)
    } else {
      setUserValid({
        email: false,
        password: false,
      })
      setErrors({
        email: jsonResponse.email,
        password: jsonResponse.password,
      })
    }
  }

  const validateSignin = (user: any) => {
    let userValid = {
      email: true,
      password: true,
    }

    let errors = {
      email: '',
      password: '',
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

    return {userValid, errors};
  }

  const handleSubmit = (e: any) => {
    e.preventDefault()
    let user = {
      email: emailRef.current?.value,
      password: passwordRef.current?.value,
    }

    let {userValid, errors} = validateSignin(user);
    setUserValid(userValid);
    setErrors(errors);

    userValid.email && userValid.password && sendToServer(user);
  }

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  }

  const testFieldStyle = "w-2/3 m-4"

  return (
    <main className="min-h-screen p-32">
      <Box component="form" className="bg-inherit border-white border-solid border-4  min-h-56 min-w-52 h-4/5 w-2/5 m-auto flex flex-col justify-center items-center rounded-lg">
        <Typography component='h2' variant='h4' color='white' mt={4}>Sign In</Typography>
        <Typography variant="body1" color="white">welcome back</Typography>
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
        className='border-white rounded-md border-2 h-10 w-1/2 hover:bg-grey-500 text-white m-4'>
          Sign in
        </button>
      </Box>
    </main>
  )
}

export default AdopterSignin;