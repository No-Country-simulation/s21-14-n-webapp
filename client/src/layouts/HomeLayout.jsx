import { Outlet } from 'react-router-dom'
import { Header } from '../components/Header'
import React from 'react'
const HomeLayout = () => {
  return (
    <div>
        <h1 >gika</h1>
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