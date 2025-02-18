import React from 'react'
import { Logo } from './Logo'
import { PiFacebookLogoLight } from "react-icons/pi";
import { PiInstagramLogoLight } from "react-icons/pi";
import { PiWhatsappLogoLight } from "react-icons/pi";

export const Footer = () => {
  return (
    <footer className='w-full h-10 lg:h-28 bg-[#333] flex justify-between items-center px-2 lg:px-20'>
        <div>
            <Logo />
        </div>
        <span className='text-amber-300 text-xs lg:text-2xl  lg:w-[700px] hidden lg:flex'>Copyright &copy; 2025 Urbania. Todos los derechos reservados. </span>
        <span className='text-amber-300 text-xs lg:text-2xl  lg:w-[700px] flex lg:hidden'>Copyright &copy; 2025 Urbania. </span>
        <div className='flex gap-2 lg:gap-10 text-2xl lg:text-7xl text-amber-300'>
            <PiFacebookLogoLight className=' rounded-3xl'/>
            <PiInstagramLogoLight className=''/>
            <PiWhatsappLogoLight className='' />
        </div>
    </footer>
  )
}
