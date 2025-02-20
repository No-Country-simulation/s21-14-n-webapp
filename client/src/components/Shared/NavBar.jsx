import React from 'react'
import { Logo } from './Logo'
import { useState } from 'react'

export const NavBar = () => {
    const [active, setActive] = useState(0)
    const items = ['Inicio', 'Propiedades', 'Nosotros', 'Contacto'];


    const handleClickLi=(index)=>{
        setActive(index)
    }

    return (
        <nav className='w-full h-10 lg:h-20  flex justify-between items-center p-2 lg:px-20 bg-opacity-50 bg-[#333]'>
            <div>
                <Logo/>
            </div>
            <ul className="flex gap-3 lg:gap-10 [&_li]:active:scale-95 [&_li]:hover:scale-105 [&_li]:text-xs [&_li]:lg:text-xl [&_li]:cursor-pointer transform transition duration-150">
                {items.map((item,index)=>(
                    <li
                        key={index}
                        onClick={()=>handleClickLi(index)}
                        className={`p-1 lg:p-3  ${active === index ? "text-white" : "text-amber-300" }`}
                    >
                        {item}
                    </li>
                ))}
            </ul>
        </nav>
    )
}
