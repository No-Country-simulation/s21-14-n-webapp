import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const Card = ({ titulo, descripcion, tipo, ubicacion, precio, imagen }) => {

    const [showInfo, setShowInfo] = useState(false);

    const toggleInfo = () => {
        setShowInfo(!showInfo);
    };

    return (
        <motion.section
            className={`bg-primary gap-52 h-[700px] mt-10 hover:shadow-[-10px_10px_20px_0px_rgba(0,0,0,0.5)] hover:shadow-black border-r-8 border-r-secundary duration-500 flex md:flex-row items-center relative transition-all ${
                showInfo ? 'w-[1100px]' : 'w-[488px]' 
            }`}
        >
            {/* Contenedor de la imagen */}
            <div className="w-80 h-full flex flex-col justify-center items-start">
                <div className='w-full md:w-[480px] h-[700px] flex flex-col'>
                    <img
                        src={`/${imagen}`}
                        className='w-full h-full aspect-[16/9] object-cover cursor-pointer'
                        alt="Imagen de la propiedad"
                        onClick={toggleInfo} 
                    />
                </div>
            </div>

            {/* Contenedor de la información y botones con Framer Motion */}
            <AnimatePresence>
                {showInfo && (
                    <motion.div
                        className="flex-1"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }} 
                        exit={{ opacity: 0, transition: { duration: 0.1 } }} 
                        transition={{ delay: 0.3, duration: 0.5 }} 
                    >
                        <div className='w-[500px] flex flex-col gap-40 text-2xl text-tertiary [&_span]:text-secundary [&_span]:text-3xl [&_span]:font-bold mb-52'>
                            <section className='flex flex-col gap-9'>
                                <p><span>Titulo: </span>{titulo} </p>
                                <p><span className='text-secundary'>Descripcion: </span>{descripcion} </p>
                                <p><span className='text-secundary'>Tipo: </span>{tipo}</p>
                                <p><span className='text-secundary'>Ubicacion: </span>{ubicacion}</p>
                                <p><span className='text-secundary'>Precio:</span>{precio}</p>
                            </section>

                            <section className="absolute -bottom-10 right-0 flex space-x-6 mr-32 mb-10">
                                <button className="bg-green-500 text-white px-4 py-2 rounded-sm hover:bg-green-600 duration-300">Vendido</button>
                                <button className="bg-red-500 text-white px-4 py-2 rounded-sm hover:bg-red-600 duration-300">Tacho</button>
                                <button className="bg-blue-500 text-white px-4 py-2 rounded-sm hover:bg-blue-600 duration-300">Lápiz</button>
                            </section>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.section>
    );
};