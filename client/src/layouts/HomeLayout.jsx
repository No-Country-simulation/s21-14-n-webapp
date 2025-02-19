import React from "react";
import { NavBar } from "../components/Shared/NavBar";
import { Outlet } from "react-router-dom";
import { Footer } from "../components/Shared/Footer";

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