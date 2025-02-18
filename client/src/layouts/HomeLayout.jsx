import React from "react";
import { Outlet } from 'react-router-dom'
import { NavBar } from "../components/NavBar";
import { Footer } from "../components/Footer";
const HomeLayout = () => {
  return (
    <div>
        <header>
            <NavBar/>
        </header>
        <main>
            <Outlet/>
        </main>
        <footer>
            <Footer/>
        </footer>
    </div>
  )
}

export default HomeLayout