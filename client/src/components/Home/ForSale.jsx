import React from 'react';
import { motion } from "motion/react"

export const ForSale = () => {
    return (
        <div className='bg-[#333] flex flex-col xl:flex-row justify-between items-center pt-28 px-3 xl:px-20 xl:pt-32 pb-20 xl:pb-32'>
            
            {/* Imagen con animación */}
            <motion.img 
                src="/src/img/pexels-mart-production-7414922.jpg" 
                alt="" 
                className='xl:h-[42.2%] xl:w-[42.2%] mb-10 xl:mb-0'
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.3 }}
            />

            {/* Contenedor de texto con animación */}
            <motion.div 
                className='xl:text-4xl xl:mr-48 xl:ml-52 font-semibold text-amber-300'
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                viewport={{ once: true, amount: 0.3 }}
            >
                <h3 className='mb-10 xl:mb-32'>¿Tienes una propiedad para vender?</h3>
                <p className='leading-relaxed'>
                    Déjalo en manos de especialistas, contáctenos y lo asesoraremos para que obtenga la mejor rentabilidad de su inversión inmobiliaria.
                </p>
            </motion.div>

        </div>
    );
};
