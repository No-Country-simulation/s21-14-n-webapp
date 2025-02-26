
import { motion } from "motion/react"

export const ForSale = () => {


    
    return (
        <div className='bg-tertiary flex flex-col lg:flex-row lg:gap-2 xl:gap-0 justify-between items-center pt-28 px-3 xl:px-20 xl:pt-32 pb-20 xl:pb-32'>
            
            {/* Imagen con animación */}
            <motion.img 

                src="/forSale.jpg" 
                alt="" 
                className=' lg:h-96 xl:h-[42.2%] xl:w-[42.2%] mb-10 xl:mb-0'
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.3 }}
            />

            {/* Contenedor de texto con animación */}
            <motion.div 
                className=' xl:mr-48 xl:ml-52 font-semibold flex flex-col items-center justify-center'
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                viewport={{ once: true, amount: 0.3 }}
            >
                <h3 className='mb-10 lg:text-4xl text-2xl xl:text-6xl xl:mb-16 text-[#C8A25F] w-80 lg:w-full'>¿Tiene una propiedad para vender?</h3>
                <p className='leading-relaxed text-primary w-80 lg:w-full text-lg lg:text-2xl xl:text-4xl'>
                    Déjelo en manos de especialistas, contáctenos y lo asesoraremos para que obtenga la mejor rentabilidad de su inversión inmobiliaria.
                </p>
            </motion.div>

        </div>
    );
};