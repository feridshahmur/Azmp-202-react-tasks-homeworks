import React from 'react'
import AdminHeader from '../AdminHeader/index'
import { Outlet } from 'react-router-dom'
const AdminLayout = () => {
  return (
    <>
      <AdminHeader/>
      <Outlet/>
    </>
  )
}

export default AdminLayout
