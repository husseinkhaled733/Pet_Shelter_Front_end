import React from 'react'
import Headercomponent from '../Header/Headercomponent'
import ApplicationCard from './ApplicationCard'

const Applications = () => {
  return (
    <>
        <Headercomponent></Headercomponent>
        <ul className="flex flex-wrap flex-col justify-center gap-4">
            <li>
              <ApplicationCard />
            </li>
            <li>
              <ApplicationCard />
            </li>
            <li>
              <ApplicationCard />
            </li>
        </ul>
    </>
  )
}

export default Applications