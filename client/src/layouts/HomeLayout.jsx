import React from 'react'
import { Outlet } from 'react-router-dom'

const HomeLayout = () => {
  return (
    <div>



    <main>
        <Outlet/>
    </main>
    </div>
  )
}

export default HomeLayout