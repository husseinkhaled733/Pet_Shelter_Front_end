'use client'

import React from 'react'
import Button from '@mui/material/Button'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import PetsIcon from '@mui/icons-material/Pets'
import { useState } from 'react'
import ShelterProfile from '@/app/components/shelterProfile'
import StaffMembers from '../components/staffMembers'
import StaffMemberForm from '../components/addStaffMember'


const ManagerPage = () => {

  const originalShelter = {
    name: 'Pety House',
    country: 'Vietnam',
    city: 'Ho Chi Minh',
    email: 'pety@gmail.com',
    address: '123 Nguyen Van Linh',
    phone: '0123456789'
  }

  const [shelterState, setShelterState] = useState(originalShelter)
  const [staffList, setStaffList] = useState([
    {
      name: 'John Doe',
      email: 'john1@gmail.com',
      phone: '054-1234567'
    },
    {
      name: 'John Doe',
      email: 'john2@gmail.com',
      phone: '054-1234567'
    },
    {
      name: 'John Doe',
      email: 'john3@gmail.com',
      phone: '054-1234567'
    }
  ])



  const mainStyle = "flex min-h-screen min-w-screen flex-col items-center bg-white"
  const buttonStyle = 'm-4 text-white hover:text-sky-300 font-bold'
  const activeButtonStyle = 'm-4 text-sky-300 font-bold'

  const shelter = <ShelterProfile shelter={shelterState}/>
  const staffMembers = <StaffMembers staffList={staffList} setStaffList={setStaffList} />
  const addStaffMember = <StaffMemberForm />
  const [display, setDisplay] = useState(shelter)
  const [currPage, setCurrPage] = useState(0)

  const handleClick = (page: number) => {
    if (page == 0) {
      setDisplay(shelter)
      setCurrPage(page)
    } else if (page == 1) {
      setCurrPage(page)
      setDisplay(staffMembers)
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
            Shleter
          </Button>
          <Button variant='text' className={currPage === 1 ? activeButtonStyle : buttonStyle} onClick={() => handleClick(1)}>
            Staff members
          </Button>
          <Button variant='text' className={currPage === 2 ? activeButtonStyle : buttonStyle} onClick={() => handleClick(2)}>
            Add new staff member
          </Button>
        </Toolbar>
      </AppBar>
      {display}
    </main>
  )
}

export default ManagerPage;