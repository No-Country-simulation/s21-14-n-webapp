import React, { useState } from 'react';
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { CgCloseR } from "react-icons/cg";
import { motion, AnimatePresence } from 'framer-motion';

export const ButtonContact = () => {
    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
        setIsActive(prevState => !prevState);
    };

    // Animaciones
    const containerVariants = {
        hidden: { width: 128, height: 80 },
        visible: { width: 384, height: 600 }, 
    };

    const formVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: { opacity: 1, y: 0, transition: { delay: 0.3 } },
    };

    return (
        <motion.div
            className="z-100 rounded-4xl bg-primary flex flex-col justify-center items-center bottom-9 right-10 fixed border-4 border-secundary shadow-2xl overflow-hidden"
            variants={containerVariants}
            initial="hidden"
            animate={isActive ? "visible" : "hidden"}
            transition={{ type: "spring", stiffness: 100 }}
        >
            <button
                className={`hover:scale-105 cursor-pointer p-4 ${isActive ? "self-start" : ""}`}
                onClick={handleClick}
            >
                {!isActive ? (
                    <IoChatbubbleEllipsesOutline className="w-12 h-12 text-tertiary shadow-2xl" />
                ) : (
                    <CgCloseR className="w-12 h-12 text-tertiary shadow-2xl" />
                )}
            </button>

            <AnimatePresence>
                {isActive && (
                    <motion.form
                        className="w-full p-4 space-y-4 text-tertiary flex flex-col gap-7"
                        variants={formVariants}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                    >
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium">
                                Email del interesado
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="mt-1 bg-tertiary block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-tertiary focus:border-tertiary"
                                placeholder="Ingresa tu email"
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="propertyTitle" className="block text-sm font-medium">
                                Título de la propiedad de interés
                            </label>
                            <input
                                type="text"
                                id="propertyTitle"
                                name="propertyTitle"
                                className="mt-1 bg-tertiary block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-tertiary focus:border-tertiary"
                                placeholder="Ingresa el título de la propiedad"
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-sm font-medium">
                                Mensaje
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                rows="4"
                                className="mt-1 bg-tertiary block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-tertiary focus:border-tertiary"
                                placeholder="Escribe tu mensaje aquí"
                                required
                            ></textarea>
                        </div>

                        <motion.button
                            type="submit"
                            className="w-full px-4 py-2 bg-secundary text-primary text-xl rounded-md hover:bg-tertiary-dark focus:outline-none focus:ring-2 focus:ring-tertiary focus:ring-opacity-50"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Enviar
                        </motion.button>
                    </motion.form>
                )}
            </AnimatePresence>
        </motion.div>
    );
};