import React, { useState } from 'react';
import { motion } from "motion/react"

export const FeaturedProperties = () => {
    const [hovered, setHovered] = useState(null);

    const featurePropeties = [
        '/src/img/feature-properties/pexels-30nudos-adicora-164429726-13907871.jpg',
        '/src/img/feature-properties/pexels-kate-filatova-1861817299-30707539.jpg',
        '/src/img/feature-properties/pexels-rgsk97-1717272.jpg',
        '/src/img/feature-properties/pexels-scottwebb-430216.jpg'
    ];

    const titlesProperties = [
        'Hermosa casa ecologica en Los miradores',
        'Casa en esquina rivadivia',
        'Depto en complejo Almitante Brown',
        'Departamento frente a la costa'
    ];

    const transition = {
        duration: 0.7,
        delay: 0.1,
        ease: [0, 0.71, 0.2, 1.01],
    }



    return (
        <div className='flex flex-col items-center h-full xl:h-full pt-20 xl:pt-32 pb:20 xl:pb-32 bg-[#333]'>
            <h2 className='text-3xl font-semibold text-amber-300'>Propiedades Destacadas</h2>
            <div className='flex h-full px-3 xl:px-20 mt-20 xl:mt-32'>
                {featurePropeties.map((image, index) => {
                    const isLastImage = index === featurePropeties.length - 1; 

                    return (
                        <motion.div
                            key={index}
                            style={{ opacity: hovered === null ? 1 : hovered === index ? 1 : 0.05 }}
                            className='flex justify-center items-center relative'
                            whileHover={{ scale: 1.1, filter: "brightness(1.2)" }}
                            transition={transition}
                            onMouseEnter={() => setHovered(index)}
                            onMouseLeave={() => setHovered(null)}
                        >

                            {/*imagen de la propiedad */}
                            <motion.img
                                src={image}
                                alt=""
                                className='w-96 h-70 xl:h-full xl:w-[500px] object-cover  cursor-pointer'
                                
                            />

                            {/*titulo de la propiedad */}
                            <motion.div
                                className='bg-white/30 backdrop-blur-xl h-20 xl:h-10 z-10 absolute p-2 xl:p-0 xl:text-3xl mt-[200px] lg:mt-[650px] text-white brightness-110 flex justify-center items-center w-full'
                                initial={{ y: 20, opacity: 1 }}
                                animate={{
                                    y: hovered === index ? 0 : 20,
                                }}
                                transition={transition}
                                style={{ opacity: hovered === null ? 1 : hovered === index ? 1 : 0.1 }}
                            >
                                <motion.p
                                    className='text-xs xl:text-xl'
                                    initial={{ scale: 1 }}
                                    animate={{
                                        scale: hovered === index ? 1.1 : 1,
                                    }}
                                    transition={transition}
                                >
                                    {titlesProperties[index]}
                                </motion.p>
                            </motion.div>

                            {/* Div condicional */}
                            {hovered === index && (
                                <motion.div
                                    className={`bg-gray-950 h-[50%] ml-10 w-72 text-black p-4 space-y-6 absolute flex flex-col justify-center z-50  ${
                                        isLastImage ? "left-20  -translate-x-full" : "right-20 translate-x-full"
                                    }`}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }} 
                                    exit={{ opacity: 0, y: 20 }}
                                    transition={transition}
                                >
                                    <p className="text-xl font-semibold"> <span className='text-2xl text-amber-300 font-bold'>Precio:</span> $ 1.000.000</p>
                                    <p className="text-xl font-semibold"><span className='text-2xl text-amber-300 font-bold'>Direccion:</span> los miradores</p>
                                    <p className="text-xl font-semibold"><span className='text-2xl text-amber-300 font-bold'>km/4:</span> 500</p>
                                    <p className="text-xl font-semibold"><span className='text-2xl text-amber-300 font-bold'>Tipo:</span> departamento</p>
                                    <p className="text-xl font-semibold"><span className='text-2xl text-amber-300 font-bold'>Descripcion:</span> apartamento frente en pleno centro con vista al mar</p>
                                </motion.div>
                            )}
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
};



