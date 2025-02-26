import React from 'react';
import PropTypes from 'prop-types';
import { motion } from "motion/react"


const AnimatedText = ({ text }) => {
    return (
        <>
            {text.split('').map((letter, index) => (
                <motion.span
                key={index}
                initial={{ y: -50, opacity: 0 }} 
                animate={{ y: 0, opacity: 1 }} 
                transition={{
                    type: 'spring',
                    stiffness: 100,
                    damping: 12,
                    delay: index * 0.05, 
                }}
                >
                    {letter === ' ' ? '\u00A0' : letter} 
                </motion.span>
            ))}
        </>
    );
};

AnimatedText.propTypes = {
    text: PropTypes.string.isRequired,
};

export const Banner = () => {
    return (
        <motion.header
            className='h-[300px] lg:h-screen relative flex flex-col'
            style={{

                backgroundImage: "url('/banner.jpg')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}    
            transition={{ duration: 1, ease: 'easeOut' }} 
        >
            <div className="absolute inset-0 bg-[rgba(0,0,0,0.3)]"></div>
            <motion.div
                className='h-full w-full grid place-items-center'
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8, ease: 'easeOut' }}
            >
                <h1 className='text-xl lg:text-4xl xl:text-7xl text-tertiary z-10 font-bold mb-1 lg:mb-8 bg-white/5 backdrop-blur-sm px-10 py-3'>
                    <AnimatedText text="Viviendas de lujo a tu alcance" />
                </h1>
            </motion.div>
        </motion.header>
    );
};