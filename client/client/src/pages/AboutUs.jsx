import React from 'react';
import { motion } from "framer-motion";

const AboutUs = () => {
    return (
        <div className='bg-primary flex flex-col items-center text-center'>
            <div className='bg-[url(/casa2.jpg)] bg-cover bg-center relative w-full h-[500px] flex items-center justify-center text-white text-center px-6 xl:px-20'>
                <div className='absolute inset-0 bg-black bg-opacity-50'></div>
                <motion.div 
                    className='relative z-10'
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    <h1 className='text-4xl xl:text-6xl font-bold text-[#C8A25F]'>Sobre Nosotros</h1>
                    <p className='text-lg xl:text-2xl mt-4'>Conectamos sueños con hogares perfectos, facilitando información y asesoramiento inmobiliario.</p>
                </motion.div>
            </div>
      
            <div className='w-full max-w-6xl px-6 xl:px-20 py-16'>
        
                <motion.div 
                    className='bg-secondary p-8 rounded-lg shadow-lg mb-10'
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                >
                    <h2 className='text-3xl xl:text-4xl text-[#C8A25F] mb-4'>Nuestra Misión</h2>
                    <p className='text-lg xl:text-xl text-tertiary'>
                        Facilitar el acceso a información inmobiliaria confiable y optimizar la experiencia de compra y venta.
                    </p>
                </motion.div>
      
                <motion.div 
                    className='bg-secondary p-8 rounded-lg shadow-lg mb-10'
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    <h2 className='text-3xl xl:text-4xl text-[#C8A25F] mb-4'>Nuestra Visión</h2>
                    <p className='text-lg xl:text-xl text-tertiary'>
                        Ser la plataforma líder en información inmobiliaria, con tecnología innovadora y una comunidad confiable.
                    </p>
                </motion.div>

              
                <motion.div 
                    className='bg-[#C8A25F] p-8 rounded-lg shadow-lg text-white'
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                    viewport={{ once: true }}
                >
                    <h2 className='text-2xl xl:text-3xl mb-4'>Descargo de Responsabilidad</h2>
                    <p className='text-lg xl:text-xl'>
    Urbania es una plataforma informativa y una web de desarrollo no actúa como agente inmobiliario. No intermediamos en la compra o venta de propiedades y no asumimos responsabilidad porque realmente no vendemos inmuebles.
</p>

                </motion.div>
            </div>
        </div>
    );
};

export default AboutUs;
