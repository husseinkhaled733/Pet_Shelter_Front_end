'use client'

import React from 'react'
import { Box, Button } from '@mui/material'
import { useRouter } from 'next/navigation'
import { MANAGER_SIGNUP_ROUTE, STAFF_LOGIN_ROUTE, ADOPTER_SIGNUP_ROUTE } from './constants/routes'

export default function Home() {

  const mainStyle = "flex min-h-screen min-w-screen flex-col items-center p-24 bg-inherit"
  const titleStyle = "font-bold text-4xl m-16 text-center text-white"
  const boxStyle = "flex flex-col items-center justify-around w-4/5 h-1/2 border-4 border-white rounded-sm"
  const fontStyle = "font-bold text-3xl m-8 text-center text-white"
  const buttonStyle = "transition m-8 border-white border-4 bg-inherit text-white font-bold rounded-sm p-2 h-20 w-1/2 duration-300 hover:bg-grey-200 hover:border-sky-400 hover:text-sky-400 hover:border-4"

  const router = useRouter()

  const handleClick = (page: string) => {
    router.push(page)
  }

  return (
    <main className={mainStyle} >
      <Box className={boxStyle}>
        <h1 className={titleStyle}>Welcom to our Pet shelter</h1>
        <h2 className={fontStyle}>You want to register as..</h2>
        <Button variant='outlined' className={buttonStyle} onClick={() => handleClick(MANAGER_SIGNUP_ROUTE)}>
          Manager
        </Button>
        <Button variant='outlined' className={buttonStyle} onClick={() => handleClick(STAFF_LOGIN_ROUTE)}>
          Staff member
        </Button>
        <Button variant='outlined' className={buttonStyle} onClick={() => handleClick(ADOPTER_SIGNUP_ROUTE)}>
          Adopter
        </Button>
      </Box>
    </main>
  )
}
