import React from 'react'

export const Card = () => {
    return (
<section className="bg-primary w-[750px] h-[450px] mt-10 shadow-2xl shadow-black hover:shadow-none duration-500 flex md:flex-row items-center p-4 rounded-sm">

    <div className="w-80 h-full flex flex-col justify-center items-start ml-6">
        <div className='w-full md:w-60 h-[400px] flex flex-col'>
            <img 
                src="/public/img/feature-properties/pexels-kate-filatova-1861817299-30707539.jpg" 
                className='w-full h-full aspect-[16/9] object-cover rounded-sm' 
                alt="Imagen de la propiedad" 
            />
        </div>

    </div>

    <div className='w-96 flex flex-col gap-8 text-2xl text-tertiary'>
        <p><span className='text-secundary'>Descripcion: </span>uhaiusgfdiudha uhafdisugfhdsuah duish uhaufdhdufuh hafdsiufgasi </p>
        <p><span className='text-secundary'>Tipo: </span>Departamento</p>
        <p><span className='text-secundary'>Ubicacion: </span>Almirante Brown 25481</p>
        <p><span className='text-secundary'>Precio:</span> 1.000.000</p>
        <section className="flex space-x-2  mt-2  w-52 mr-32">
            <button className="bg-green-500 text-white px-4 py-2 rounded-sm hover:bg-green-600 duration-300">Vendido</button>
            <button className="bg-red-500 text-white px-4 py-2 rounded-sm hover:bg-red-600 duration-300">Tacho</button>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-sm hover:bg-blue-600 duration-300">Lápiz</button>
        </section>
    </div>
    

   
    
</section>

    )
}



