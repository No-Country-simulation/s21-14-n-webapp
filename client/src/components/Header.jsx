import React from 'react';
import { NavBar } from './NavBar';

export const Header = () => {
    return (
        <header 
            className='h-[300px] lg:h-[750px] relative flex flex-col'
            style={{
                backgroundImage: "url('/src/img/pexels-binyaminmellish-186077.jpg')", 
                backgroundSize: 'cover', 
                backgroundPosition: 'center'
            }}
        >
            <div className="absolute inset-0 bg-[rgba(0,0,0,0.3)]"></div>
            <NavBar className="relative z-10"/>
            <div className='h-full w-full grid place-items-center'>
                <h1 className='text-2xl lg:text-7xl text-white z-10 font-bold mb-10 lg:mb-24'>Viviendas de lujo a tu alcance</h1>
            </div>
        </header>
    );
};