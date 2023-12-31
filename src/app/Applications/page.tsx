import React from 'react'
import Headercomponent from '../Header/Headercomponent'
import ApplicationCard from './ApplicationCard'
import ApplicationsList from './ApplicationsList';

const Applications = () => {
  return (
    <div className='min-h-screen min-w-screen bg-inherit'>
        <Headercomponent></Headercomponent>
        <ApplicationsList></ApplicationsList>
    </div>
  )
}

export default Applications