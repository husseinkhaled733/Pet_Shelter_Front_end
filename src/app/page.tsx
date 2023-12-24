'use client'

import React from 'react'
import { Box, Button } from '@mui/material'
import { useRouter } from 'next/navigation'

export default function Home() {

  const mainStyle = "flex min-h-screen flex-col items-center p-24"
  const titleStyle = "font-bold text-4xl m-16 text-center text-blue-500"
  const boxStyle = "flex flex-col items-center justify-around w-4/5 h-1/2 border-2 border-black rounded-xl"
  const fontStyle = "font-bold text-3xl m-8 text-center text-blue-500"
  const buttonStyle = "transition m-8 bg-blue-500 text-blue-200 font-bold rounded-full p-2 h-20 w-1/2 shadow-md shadow-blue-700 hover:bg-blue-800 ease-in duration-200 hover:ease-out hover:shadow-lg hover:shadow-blue-900"

  const router = useRouter()

  const handleClick = (page: string) => {
    router.push(`/${page}`)
  }

  return (
    <main className={mainStyle} >
      <h1 className={titleStyle}>Welcom to our Pet shelter</h1>
      <Box className={boxStyle}>
        <h2 className={fontStyle}>You want to register as..</h2>
        <Button className={buttonStyle} onClick={() => handleClick('manager')}>
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
