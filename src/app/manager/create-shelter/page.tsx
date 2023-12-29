'use client'
import React from 'react';
import { Box, TextField, Typography } from '@mui/material';
import { useState, useRef } from 'react';
import { useRouter } from 'next/navigation';

const CreateShelterPage = () => {

  const nameRef = useRef<HTMLInputElement>(null);
  const countryRef = useRef<HTMLInputElement>(null);
  const cityRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const addressRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);

  const [shelterValid, setIsShelterValid] = useState({
    name: true,
    email: true,
    phone: true,
    country: true,
    city: true,
    address: true
  });
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    phone: '',
    country: '',
    city: '',
    address: ''
  });

  const allValid = (shelterValid: any) => {
    return shelterValid.name && shelterValid.email && shelterValid.phone && shelterValid.country && shelterValid.city && shelterValid.address;
  }

  const sendToServer = (shelter: any) => {
    // TODO: send to server
    router.push('/manager');
  }

  const validateShelter = (shelter: any) => {
    let shelterValid = {
      name: true,
      email: true,
      phone: true,
      country: true,
      city: true,
      address: true
    };

    let errors = {
      name: '',
      email: '',
      phone: '',
      country: '',
      city: '',
      address: ''
    };

    if (!shelter.name) {
      shelterValid.name = false;
      errors.name = 'Name is required';
    }

    if (!shelter.email) {
      shelterValid.email = false;
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(shelter.email)) {
      shelterValid.email = false;
      errors.email = 'Email address is invalid';
    }

    if (!shelter.phone) {
      shelterValid.phone = false;
      errors.phone = 'Phone is required';
    } else if (!/^\d+$/.test(shelter.phone)) {
      shelterValid.phone = false;
      errors.phone = 'Phone number is invalid';
    }

    if (!shelter.country) {
      shelterValid.country = false;
      errors.country = 'Country is required';
    }

    if (!shelter.city) {
      shelterValid.city = false;
      errors.city = 'City is required';
    }

    if (!shelter.address) {
      shelterValid.address = false;
      errors.address = 'Address is required';
    }

    return { shelterValid, errors };
  }

  const handleSubmit = () => {
    let shelter = {
      name: nameRef.current?.value,
      country: countryRef.current?.value,
      city: cityRef.current?.value,
      email: emailRef.current?.value,
      address: addressRef.current?.value,
      phone: phoneRef.current?.value
    }

    let {shelterValid, errors} = validateShelter(shelter);
    setIsShelterValid(shelterValid);
    setErrors(errors);

    allValid(shelterValid) && sendToServer(shelter);

  }

  const router = useRouter();

  const testFieldStyle = "w-2/3 m-4"

  return (
    <main className="min-h-screen p-24">
      <Box component="form" className="bg-inherit border-white border-solid border-4  min-h-56 min-w-52 h-4/5 w-4/5 m-auto flex flex-col justify-center items-center rounded-lg">
        <Typography component='h2' variant='h4' color='white' mt={4}>Create your shelter</Typography>
        <TextField
          className={testFieldStyle}
          label='Name'
          placeholder="Enter shelter's name"
          inputRef={nameRef}
          required
          variant='filled'
          error={!shelterValid.name}
          helperText={(shelterValid.name)? '' : errors.name}>
        </TextField>
        <TextField
          className={testFieldStyle}
          label='Email'
          placeholder="Enter shelter's email"
          inputRef={emailRef}
          required
          variant='filled'
          error={!shelterValid.email}
          helperText={(shelterValid.email)? '' : errors.email}>
        </TextField>
        <TextField
          className={testFieldStyle}
          label='Phone number'
          placeholder="Enter shelter's phone number"
          inputRef={phoneRef}
          required
          variant='filled'
          error={!shelterValid.phone}
          helperText={(shelterValid.phone)? '' : errors.phone}>
        </TextField>
        <TextField
          className={testFieldStyle}
          label='Country'
          placeholder="Enter shelter's country"
          inputRef={countryRef}
          required
          variant='filled'
          error={!shelterValid.country}
          helperText={(shelterValid.country)? '' : errors.country}>
        </TextField>
        <TextField
          className={testFieldStyle}
          label='City'
          placeholder="Enter shelter's city"
          inputRef={cityRef}
          required
          variant='filled'
          error={!shelterValid.city}
          helperText={(shelterValid.city)? '' : errors.city}>
        </TextField>
        <TextField
          className={testFieldStyle}
          label='Address'
          placeholder="Enter shelter's detailed address"
          inputRef={addressRef}
          required
          variant='filled'
          error={!shelterValid.address}
          helperText={(shelterValid.address)? '' : errors.address}>
        </TextField>
        <button onClick={handleSubmit}
        className='border-white rounded-md border-2 m-4 h-10 w-1/2 hover:bg-grey-500 text-white'>
          Create
        </button>
      </Box>
    </main>
  )
}

export default CreateShelterPage;