import React from 'react'
import { Outlet } from 'react-router-dom'
import ClientHeader from '../ClientHeader'

const MainHeader = () => {
  return (
    <>
    <ClientHeader/>
    <Outlet/>
    </>
  )
}

export default MainHeader