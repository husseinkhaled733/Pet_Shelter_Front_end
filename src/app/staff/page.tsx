'use client'

import React from 'react'
import Button from '@mui/material/Button'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import PetsIcon from '@mui/icons-material/Pets'
import { useState, useEffect } from 'react'
import ShelterProfile from '@/app/components/shelterProfile'
import StaffMembers from '../components/staffMembers'
import StaffMemberForm from '../components/addStaffMember'
import { useRouter } from 'next/navigation'
import { HOME_ROUTE } from '../constants/routes'
import AddPetForm from '../components/addPet'
import ReviewApps from '../components/reviewApplications'

const StaffPage = () => {
  const mainStyle = "flex min-h-screen min-w-screen flex-col items-center bg-white"
  const buttonStyle = 'm-4 text-white hover:text-sky-300 font-bold'
  const activeButtonStyle = 'm-4 text-sky-300 font-bold'

  const router = useRouter()

  useEffect(() => {
    const auth = localStorage.getItem('Authorization')
    if (!auth) {
      router.push(HOME_ROUTE)
    }
  }, [])

  const addPet = <AddPetForm />
  const applications = <ReviewApps />
  const addStaffMember = <div></div>
  const [display, setDisplay] = useState(addPet)
  const [currPage, setCurrPage] = useState(0)

  const handleClick = (page: number) => {
    if (page == 0) {
      setDisplay(addPet)
      setCurrPage(page)
    } else if (page == 1) {
      setCurrPage(page)
      setDisplay(applications)
    } else if (page == 2) {
      setCurrPage(page)
      setDisplay(addStaffMember)
    }
  }

  return (
    <main className={mainStyle}>
      <AppBar position="static" color="primary">
        <Toolbar disableGutters>
          <PetsIcon fontSize="large" className='ml-4' />
          <Button variant='text' className={currPage === 0 ? activeButtonStyle : buttonStyle} onClick={() => handleClick(0)}>
            Add pet
          </Button>
          <Button variant='text' className={currPage === 1 ? activeButtonStyle : buttonStyle} onClick={() => handleClick(1)}>
            Review applications
          </Button>
          <Button variant='text' className={currPage === 2 ? activeButtonStyle : buttonStyle} onClick={() => handleClick(2)}>
            Pet profiles
          </Button>
        </Toolbar>
      </AppBar>
      {display}
    </main>
  )
}

export default StaffPage;