import React from 'react'

export const NavBar = () => {
  return (
    <nav className='w-full h-10 lg:h-20  flex justify-between items-center p-2 lg:px-20 bg-opacity-50 backdrop-blur-lg'>
        <div className='w-20 h-8 bg-white grid place-items-center '>
            Logo
        </div>
        <ul className='flex gap-3'>
            <li className='text-sm text-white lg:text-xl font-semibold'>Inicio</li>
            <li className='text-sm text-amber-300 lg:text-xl font-semibold'>Propiedades</li>
            <li className='text-sm text-amber-300 lg:text-xl font-semibold'>Nosotros</li>
            <li className='text-sm text-amber-300 lg:text-xl font-semibold'>Contacto</li>
        </ul>
    </nav>
  )
}
