import React from 'react'
import ClientHeader from '../ClientHeader'
import { Outlet } from 'react-router-dom'

const ClientLayout = () => {
  return (
    <>
      <ClientHeader/>
      <Outlet/>
    </>
  )
}

export default ClientLayout
