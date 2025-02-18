import React from "react";
import { Outlet } from 'react-router-dom'
import { Header } from '../components/Header'

const HomeLayout = () => {
  return (
    <div>
        <header>
            <Header></Header>
        </header>
        <main>
            <Outlet/>
        </main>
    </div>
  )
}

export default HomeLayout