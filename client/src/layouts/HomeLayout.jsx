import React from "react";
import { Outlet } from 'react-router-dom'
import { NavBar } from "../components/NavBar";
const HomeLayout = () => {
  return (
    <div>

        <NavBar/>
        <main>
            <Outlet/>
        </main>
    </div>
  )
}

export default HomeLayout