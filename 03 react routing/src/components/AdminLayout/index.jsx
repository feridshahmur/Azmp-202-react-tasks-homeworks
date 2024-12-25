import React from 'react'
import AdHeader from '../../layouts/Admin/AdminHeader'
import { Outlet } from 'react-router'

const AdLayout = () => {
  return (
    <>
    <AdHeader/>
    <Outlet/>
    </>
  )
}

export default AdLayout