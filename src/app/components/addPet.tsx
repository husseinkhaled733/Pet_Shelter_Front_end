'use client'
import { Box, TextField, Button } from '@mui/material';
import React, { useState , useRef} from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { ADD_PET_ENDPOINT, BASE_BACKEND_URL } from '../constants/end-points';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddPetForm = () => {
  const nameRef = useRef<HTMLInputElement>(null);
  const healthStatusRef = useRef<HTMLInputElement>(null);
  const speciesRef = useRef<HTMLInputElement>(null);
  const breedRef = useRef<HTMLInputElement>(null);
  const behaviorRef = useRef<HTMLInputElement>(null);
  const descriptionRef = useRef<HTMLInputElement>(null);
  const genderRef = useRef<HTMLInputElement>(null);
  const docLinkRef = useRef<HTMLInputElement>(null);
  const [birthDate, setBirthDate] = useState(new Date());
  const [image, setImage] = useState<File | null>(null);

  const [petValid, setIsPetValid] = useState({
    name: true,
    healthStatus: true,
    species: true,
    breed: true,
    behavior: true,
    description: true,
    gender: true,
    docLink: true,
  });

  const [errors, setErrors] = useState({
    name: '',
    healthStatus: '',
    species: '',
    breed: '',
    behavior: '',
    description: '',
    gender: '',
    docLink: '',
  })

  const allValid = (petValid: any) => {
    return petValid.name && petValid.healthStatus && petValid.species && petValid.breed && petValid.behavior && petValid.description && petValid.gender && petValid.docLink
  }

  const sendToServer = async (pet: any) => {
    const wrapper = {
      staffEmail: localStorage.getItem('email'),
      pet: {
        name: pet.name,
        healthStatus: pet.healthStatus,
        species: pet.species,
        breed: pet.breed,
        behavior: pet.behavior,
        description: pet.description,
        gender: (pet.gender.tolower() == 'male')? true : false,
        birthDate: birthDate,
        docLink: pet.docLink,
        image: image
      }
    }

    const url = BASE_BACKEND_URL + ADD_PET_ENDPOINT
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
      toast.success("Pet added successfully!", {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 1000
      });
    } else {
      toast.error("Something went wrong!", {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 1000
      });
    }
  }

  const validatePet = (pet: any) => {
    const isValid = {
      name: true,
      healthStatus: true,
      species: true,
      breed: true,
      behavior: true,
      description: true,
      gender: true,
      docLink: true,
    }

    const error = {
      name: '',
      healthStatus: '',
      species: '',
      breed: '',
      behavior: '',
      description: '',
      gender: '',
      docLink: '',
    }

    if (!pet.name) {
      isValid.name = false;
      error.name = 'Name is required';
    }

    if (!pet.healthStatus) {
      isValid.healthStatus = false;
      error.healthStatus = 'Health status is required';
    }

    if (!pet.species) {
      isValid.species = false;
      error.species = 'Species is required';
    }

    if (!pet.breed) {
      isValid.breed = false;
      error.breed = 'Breed is required';
    }

    if (!pet.behavior) {
      isValid.behavior = false;
      error.behavior = 'Behavior is required';
    }

    if (!pet.description) {
      isValid.description = false;
      error.description = 'Description is required';
    }

    if (!pet.gender) {
      isValid.gender = false;
      error.gender = 'Gender is required'
    }

    if (!pet.docLink) {
      isValid.docLink = false;
      error.docLink = 'Document link is required'
    }

    return {isValid, error};
  }

  const handleImageChange = (e: any) => {
    setImage(e.target.files[0]);
    console.log(e.target.files[0]);
  }

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const pet = {
      name: nameRef.current?.value,
      healthStatus: healthStatusRef.current?.value,
      species: speciesRef.current?.value,
      breed: breedRef.current?.value,
      behavior: behaviorRef.current?.value,
      description: descriptionRef.current?.value,
      gender: genderRef.current?.value,
      docLink: docLinkRef.current?.value,
    }

    const {isValid, error} = validatePet(pet);
    setIsPetValid(isValid);
    setErrors(error);

    allValid(isValid) && sendToServer(pet);
  }

  const testFieldStyle = "w-2/3 m-4"

  return (
    <Box component="form" className="bg-inherit mt-4 min-h-56 min-w-52 h-4/5 w-4/5 flex flex-col justify-center items-center">
      <input type="file" accept='image/*' onChange={handleImageChange} />
      <DatePicker selected={birthDate} onChange={(date: any) => setBirthDate(date)} />
      <TextField
        className={testFieldStyle}
        label='Name'
        placeholder="Pet's name"
        inputRef={nameRef}
        required
        variant='filled'
        error={!petValid.name}
        helperText={(petValid.name)? '' : errors.name}>
      </TextField>
      <TextField
        className={testFieldStyle}
        label='Health status'
        placeholder="Pet's health status"
        inputRef={healthStatusRef}
        required
        variant='filled'
        error={!petValid.name}
        helperText={(petValid.healthStatus)? '' : errors.healthStatus}>
      </TextField>
      <TextField
        className={testFieldStyle}
        label='Gender'
        placeholder="Pet's gender"
        inputRef={genderRef}
        required
        variant='filled'
        error={!petValid.gender}
        helperText={(petValid.gender)? '' : errors.gender}>
      </TextField>
      <TextField
        className={testFieldStyle}
        label='Species'
        placeholder="Pet's species"
        inputRef={speciesRef}
        required
        variant='filled'
        error={!petValid.species}
        helperText={(petValid.species)? '' : errors.species}>
      </TextField>
      <TextField
        className={testFieldStyle}
        label='Breed'
        placeholder="Pet's breed"
        inputRef={breedRef}
        required
        variant='filled'
        error={!petValid.breed}
        helperText={(petValid.breed)? '' : errors.breed}>
      </TextField>
      <TextField
        className={testFieldStyle}
        label='Behavior'
        placeholder="Pet's behavior"
        inputRef={behaviorRef}
        required
        variant='filled'
        error={!petValid.behavior}
        helperText={(petValid.behavior)? '' : errors.behavior}>
      </TextField>
      <TextField
        className={testFieldStyle}
        label='Description'
        placeholder="Pet's description"
        inputRef={descriptionRef}
        required
        variant='filled'
        error={!petValid.description}
        helperText={(petValid.description)? '' : errors.description}>
      </TextField>
      <button onClick={handleSubmit}
        className='m-4 bg-blue-600 text-white p-4 rounded-md font-mono hover:bg-blue-800'>
          Add pet
        </button>
        <ToastContainer />
    </Box>
  )


};

export default AddPetForm;
