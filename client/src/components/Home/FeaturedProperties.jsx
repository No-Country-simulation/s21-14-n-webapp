import React, { useState } from 'react';
import { motion } from "motion/react"

export default function FeaturedProperties() {
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

    const infoProperties = [
    {
        "precio": 245000,
        "direccion" : "Direccion 123",
        "m2": 500,
        "tipo": "Casa",
        "descripcion": "Casa grande en esquina que linda con una calle importante de la ciudad"
    },
    {
        "precio": 500000,
        "direccion" : "direccion 456",
        "m2": 400,
        "tipo": "Casa",
        "descripcion": "Casa hubicada estrategicamente en pleno centro de la ciudad"
    },
    {
        "precio": 452447,
        "direccion" : "direccion 789",
        "m2": 300,
        "tipo": "apartamento",
        "descripcion": "Apartamento en pleno centro a 2 cuadras de la costa"
    },
    {
        "precio": 1000000,
        "direccion" : "direccion 101112",
        "m2": 200,
        "tipo": "apartamento",
        "descripcion": "Apartamento en zona de barrios privados a estrenar"
    },
    ]

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
                            className='flex justify-center items-center relative'
                            key={index}
                            style={{ opacity: hovered === null ? 1 : hovered === index ? 1 : 0.05 }}
                            whileHover={{ scale: 1.1, filter: "brightness(1.2)" }}
                            transition={transition}
                            onMouseEnter={() => setHovered(index)}
                            onMouseLeave={() => setHovered(null)}
                        >

                            {/*imagen de la propiedad */}
                            <motion.img
                                className='w-96 h-70 xl:h-full xl:w-[500px] object-cover cursor-pointer'
                                src={image}
                                alt=""
                                whileTap={{ scale: 0.95 }}
                            />


                            {/*titulo de la propiedad */}
                            <motion.div
                                className='bg-white/30 backdrop-blur-xl h-20 xl:h-10 z-10 absolute p-2 xl:p-0 xl:text-3xl mt-[160px] lg:mt-[650px] text-white brightness-110 flex justify-center items-center w-full'
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
                                    className={`bg-gray-950 h-full lg:h-[50%] ml-10 lg:w-72 text-black p-4 space-y-6 absolute flex flex-col justify-center z-50 ${
                                        isLastImage ? "-left-10 lg:left-20 -translate-x-full" : " right-1 lg:right-20 translate-x-full"
                                    }`}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }} 
                                    exit={{ opacity: 0, y: 20 }}
                                    transition={transition}
                                >
                                    <div className='text-xs lg:text-xl flex flex-col gap-2 lg:gap-5   [&_span]:text-amber-300  font-semibold'>
                                        <p>
                                            <span>Precio:</span> ${infoProperties[index].precio.toLocaleString('es-ES')}
                                        </p>
                                        <p>
                                            <span>Dirección:</span> {infoProperties[index].direccion}
                                        </p>
                                        <p>
                                            <span>m²:</span> {infoProperties[index].m2}
                                        </p>
                                        <p>
                                            <span>Tipo:</span> {infoProperties[index].tipo}
                                        </p>
                                        <p>
                                            <span>Descripción:</span> {infoProperties[index].descripcion}
                                        </p>
                                    </div>
                                </motion.div>
                            )}
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
};



