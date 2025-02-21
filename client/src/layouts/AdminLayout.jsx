import { Outlet } from "react-router-dom"
import React from 'react'

const AdminLayout = () => {
  return (
    <div>
        
    <main>
        <Outlet/>
    </main>


    </div>
  )
}

export default AdminLayout