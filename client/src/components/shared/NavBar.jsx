import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

export const NavBar = () => {
    const [isAdmin, setIsAdmin] = useState(0);

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            setIsAdmin(1);
        }
    }, []);
    const items = [
        { name: 'Inicio', path: '/' },
        { name: 'Propiedades', path: '/inmuebles' },
        { name: 'Nosotros', path: '/nosotros' },
        { name: 'Contacto', path: '/contacto' },
        
    ];

    const itemsAdmin = [
        { name:'inicio', path:'/admin'},
        { name: "Subir Propiedad", path: "/admin/crearInmueble" },
        { name: "Editar Propiedades", path: "/admin/CrudPropiedad" },
        { name: "Gestionar Usuarios", path: "/admin/Usuarios" },
    ];

    const menuItems = isAdmin === 0 ? items : itemsAdmin;

    return (
        <nav className='w-full h-10 lg:h-20 flex justify-between items-center p-2 lg:px-20 bg-opacity-50 bg-primary fixed top-0 left-0 z-50'>
            <div>
                <img src="/logo_Urbania-03.png" className='w-40' alt="Urbania Logo" />
            </div>
            <ul className="flex gap-3 lg:gap-10 [&_li]:active:scale-95 [&_li]:hover:scale-105 [&_li]:text-xs [&_li]:lg:text-xl [&_li]:cursor-pointer transform transition duration-150">
                {menuItems.map((item, index) => (
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



