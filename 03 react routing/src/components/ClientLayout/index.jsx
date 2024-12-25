import React from 'react'
import ClHeader from '../../layouts/Clients/ClientsHeader'
import { Outlet } from 'react-router'

const ClLayout = () => {
  return (
    <>
    <ClHeader/>
    <Outlet/>
    </>
  )
}

export default ClLayout