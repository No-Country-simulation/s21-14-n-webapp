import React from "react";
import { NavBar } from "../components/shared/NavBar";
import { Outlet } from "react-router-dom";
import { Footer } from "../components/shared/Footer";
import { ButtonContact } from "../components/shared/ButtonContract";



const HomeLayout = () => {
    return (
        <div>
            <header>
                <NavBar/>
            </header>
            <main className="pt-12">
                <Outlet/>
                <ButtonContact/>
            </main>
            <footer>
                <Footer/>
            </footer>
        </div>
    )
}

export default HomeLayout

