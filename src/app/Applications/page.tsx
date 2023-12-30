import React from 'react'
import Headercomponent from '../Header/Headercomponent'
import ApplicationCard from './ApplicationCard'
import ApplicationsList from './ApplicationsList';

const Applications = () => {
  return (
    <>
        <Headercomponent></Headercomponent>
        <ApplicationsList></ApplicationsList>
    </>
  )
}

export default Applications