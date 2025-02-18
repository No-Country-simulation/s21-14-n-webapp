import React from 'react';

export const Banner = () => {
    return (
        <header 
            className='h-[300px] lg:h-screen relative flex flex-col'
            style={{
                backgroundImage: "url('/src/img/pexels-binyaminmellish-186077.jpg')", 
                backgroundSize: 'cover', 
                backgroundPosition: 'center'
            }}
        >
            <div className="absolute inset-0 bg-[rgba(0,0,0,0.3)]"></div>
            <div className='h-full w-full grid place-items-center'>
                <h1 className='text-3xl lg:text-7xl text-white z-10 font-bold mb-1 lg:mb-8'>Viviendas de lujo a tu alcance</h1>
            </div>
        </header>
    );
};