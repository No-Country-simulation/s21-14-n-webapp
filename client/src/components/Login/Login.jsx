import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { loginUser } from '../../network/fetchApiUsers';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
    const navigate = useNavigate();
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = async (data) => {
        const response= await loginUser (data);
        const token = response.token
        localStorage.setItem("token", token)
        reset();
        navigate("/admin")
    };

    



    return (
        <motion.div 
            className="h-screen bg-primary flex items-center justify-center pt-"
            initial={{ opacity: 0 }}  
            animate={{ opacity: 1 }}  
            transition={{ duration: 1 }} 
        >
            <motion.div 
                className="bg-[url(/bannerLogin.jpg)] bg-cover bg-center mt-10 h-[90%] w-[75%] flex "
                initial={{ opacity: 0 }}  
                animate={{ opacity: 1 }}   
                transition={{ duration: 1, delay: 0.5 }} 
            >
                <motion.div
                    className="backdrop-blur-3xl shadow-[10px_0_15px_0_rgba(0,0,0,0.5)] p-10 h-full w-[40%] flex flex-col justify-center items-center gap-6 [&_input]:text-lg [&_input]:text-tertiary [&_input]:border-tertiary [&_label]:text-tertiary [&_label]:text-lg [&_label]:font-semibold"
                    initial={{ x: -100, opacity: 0 }}  
                    animate={{ x: 0, opacity: 1 }}   
                    transition={{ duration: 1 }}
                >
                    <div className='flex flex-col gap-5'>
                        <h2 className="text-4xl font-bold text-primary">¡Bienvenido!</h2>
                        <p className="text-4xl font-semibold max-w-96 text-tertiary">Inicie sesion con su cuenta empresarial</p>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                        <motion.input
                            {...register("email", { required: true })}
                            type="email"
                            placeholder="Email"
                            className="w-full p-3 bg-gray-800/60 border border-white/50 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500 text-white placeholder-gray-300"
                            whileFocus={{ scale: 1.05 }}
                        />
                        <motion.input
                            {...register("password", { required: true })}
                            type="password"
                            placeholder="Contraseña"
                            className="w-full p-3 bg-gray-800/60 border border-white/50 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500 text-white placeholder-gray-300"
                            whileFocus={{ scale: 1.05 }}
                        />
                        <motion.button
                            type="submit"
                            className="w-full bg-cyan-500/80 text-white py-2 rounded-md hover:bg-cyan-500 transition shadow-md"
                            whileHover={{ scale: 1.05 }}    
                            whileTap={{ scale: 0.95 }}
                        >
                            Iniciar Sesion
                        </motion.button>
                    </form>
                </motion.div>
            </motion.div>
        </motion.div>
    );
};
