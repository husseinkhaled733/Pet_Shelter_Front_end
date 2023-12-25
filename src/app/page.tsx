'use client'

import React from 'react'
import { Box, Button } from '@mui/material'
import { useRouter } from 'next/navigation'

export default function Home() {

  const mainStyle = "flex min-h-screen min-w-screen flex-col items-center p-24 bg-inherit"
  const titleStyle = "font-bold text-4xl m-16 text-center text-white"
  const boxStyle = "flex flex-col items-center justify-around w-4/5 h-1/2 border-2 border-white rounded-xl shadow-md shadow-white"
  const fontStyle = "font-bold text-3xl m-8 text-center text-white"
  const buttonStyle = "transition m-8 border-white bg-inherit text-white font-bold rounded-full p-2 h-20 w-1/2 shadow-md shadow-white duration-300 hover:bg-grey-200 hover:shadow-xl"

  const router = useRouter()

  const handleClick = (page: string) => {
    router.push(`/${page}`)
  }

  return (
    <main className={mainStyle} >
      <Box className={boxStyle}>
        <h1 className={titleStyle}>Welcom to our Pet shelter</h1>
        <h2 className={fontStyle}>You want to register as..</h2>
        <Button className={buttonStyle} onClick={() => handleClick('manager/signup')}>
          Manager
        </Button>
        <Button className={buttonStyle} onClick={() => handleClick('staff')}>
          Staff member
        </Button>
        <Button className={buttonStyle} onClick={() => handleClick('adopter')}>
          Adopter
        </Button>
      </Box>
    </main>
  )
}
