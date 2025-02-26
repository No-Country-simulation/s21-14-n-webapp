import React from 'react';
import { NavLink } from 'react-router-dom';
import { Logo } from './Logo';

export const NavBar = () => {
    const items = [
        { name: 'Inicio', path: '/' },
        { name: 'Propiedades', path: '/inmuebles' },
        { name: 'Nosotros', path: '/nosotros' },
        { name: 'Contacto', path: '/contacto' }
    ];

    return (
        <nav className='w-full h-10 lg:h-20 flex justify-between items-center p-2 lg:px-20 bg-opacity-50 bg-primary'>
            <div>
                <img src="/public/logo_Urbania-03.png" className='w-40' alt="" />
            </div>
            <ul className="flex gap-3 lg:gap-10 [&_li]:active:scale-95 [&_li]:hover:scale-105 [&_li]:text-xs [&_li]:lg:text-xl [&_li]:cursor-pointer transform transition duration-150">
                {items.map((item, index) => (
                    <li key={index}>
                        <NavLink
                            to={item.path}
                            className={({ isActive }) =>
                                `p-1 lg:p-3 ${isActive ? 'text-tertiary' : 'text-secundary'}`
                            }
                        >
                            {item.name}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    );
};
