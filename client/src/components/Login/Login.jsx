import React, { useState } from 'react';
import { motion } from 'framer-motion';

export const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Email:', email);
        console.log('Password:', password);
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
                    <form onSubmit={handleSubmit} className='max-w-96'>
                        <div className="mb-4">
                            <label htmlFor="email" className="y">
                                Correo Electrónico
                            </label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className=" pl-5 mt-1 p-2 w-full border  rounded-md focus:outline-none focus:ring-2 focus:ring-secundary"
                                placeholder="Ingresa tu correo electrónico"
                                required
                            />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="password" className="block text-sm font-medium">
                                Contraseña
                            </label>
                            <input
                                type="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className=" pl-5 mt-1 p-2 w-full border  rounded-md focus:outline-none focus:ring-2 focus:ring-secundary"
                                placeholder="Ingresa tu contraseña"
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-primary cursor-pointer text-tertiary py-2 px-4 rounded-md hover:bg-secundary hover:text-primary transition duration-300"
                        >
                            Iniciar Sesión
                        </button>
                    </form>
                </motion.div>
            </motion.div>
        </motion.div>
    );
};
