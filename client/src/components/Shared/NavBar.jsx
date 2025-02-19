import React from 'react'
import { Logo } from './Logo'

export const NavBar = () => {
    return (
        <nav className='w-full h-10 lg:h-20  flex justify-between items-center p-2 lg:px-20 bg-opacity-50 bg-[#333]'>
            <div>
                <Logo/>
            </div>
            <ul className='flex gap-3 lg:gap-10'>
                <li className='text-sm text-white lg:text-xl font-semibold'>Inicio</li>
                <li className='text-sm text-amber-300 lg:text-xl font-semibold'>Propiedades</li>
                <li className='text-sm text-amber-300 lg:text-xl font-semibold'>Nosotros</li>
                <li className='text-sm text-amber-300 lg:text-xl font-semibold'>Contacto</li>
            </ul>
        </nav>
    )
}
