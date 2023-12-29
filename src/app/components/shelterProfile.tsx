import React from 'react';
import { Box, TextField, Typography } from '@mui/material';
import { useState, useRef } from 'react';

const ShelterProfile = (props: any) => {


  const nameRef = useRef<HTMLInputElement>(null);
  const countryRef = useRef<HTMLInputElement>(null);
  const cityRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const addressRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);

  const [currShelter, setShelter] = useState({
    name: props.shelter.name,
    country: props.shelter.country,
    city: props.shelter.city,
    email: props.shelter.email,
    address: props.shelter.address,
    phone: props.shelter.phone
  });

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
    console.log(shelter);
    console.log('send to server');
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

  const handleSubmit = (e: any) => {
    e.preventDefault();
    let shelter = {
      name: nameRef.current?.value,
      country: countryRef.current?.value,
      city: cityRef.current?.value,
      email: emailRef.current?.value,
      address: addressRef.current?.value,
      phone: phoneRef.current?.value
    }

    if (shelter.name === currShelter.name && shelter.country === currShelter.country && shelter.city === currShelter.city && shelter.email === currShelter.email && shelter.address === currShelter.address && shelter.phone === currShelter.phone) {
      console.log('no change');
      return;
    }

    let {shelterValid, errors} = validateShelter(shelter);
    setIsShelterValid(shelterValid);
    setErrors(errors);

    allValid(shelterValid) && sendToServer(shelter);

  }

  const testFieldStyle = "w-2/3 m-4"

  return (
      <Box component="form" className="bg-inherit mt-4 min-h-56 min-w-52 h-4/5 w-4/5 flex flex-col justify-center items-center">
        <Typography component='h2' variant='h4' color='#1976d2' mt={4}>{currShelter.name}</Typography>
        <TextField
          className={testFieldStyle}
          label='Name'
          placeholder="Enter shelter's name"
          inputRef={nameRef}
          required
          value={currShelter.name}
          variant='filled'
          error={!shelterValid.name}
          helperText={(shelterValid.name)? '' : errors.name}>
        </TextField>
        <TextField
          className={testFieldStyle}
          label='Email'
          placeholder="Enter shelter's email"
          inputRef={emailRef}
          value={currShelter.email}
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
          value={currShelter.phone}
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
          value={currShelter.country}
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
          value={currShelter.city}
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
          value={currShelter.address}
          variant='filled'
          error={!shelterValid.address}
          helperText={(shelterValid.address)? '' : errors.address}>
        </TextField>
        <button onClick={handleSubmit}
        className='m-4 bg-blue-600 text-white p-4 rounded-md font-mono hover:bg-blue-800'>
          Save updates
        </button>
      </Box>
  )
}

export default ShelterProfile;