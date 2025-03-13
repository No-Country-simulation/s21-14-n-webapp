import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { deleteInquiry, togglePropertySelection } from '../../network/fetchApiInquirity';

export const Card = ({ id, titulo, descripcion, tipo, ubicacion, precio, imagen,destacado, isActive, onClick }) => {
    const [isClicked, setIsClicked] = useState(false);
    const [isStar, setIsStar] = useState(destacado);
    const navigate = useNavigate();

    const handleMouseDown = () => {
        setIsClicked(true);
    };

    const handleMouseUp = () => {
        setIsClicked(false);
        onClick(id);
    };

    const handleDelete = async () => {
        await deleteInquiry(id);
        alert("Inmueble eliminado");
        window.location.reload();
    };

    const handleUpdate = () => {
        localStorage.setItem("idInmueble", id);
        navigate("/admin/crearInmueble");
    };

    const handleChangeStar = async () => {
        try {
            await togglePropertySelection(id, !destacado);
            alert(`El inmueble ahora está ${!destacado ? "destacado" : "no destacado"}`);
            window.location.reload(); 
        } catch (error) {
            console.error("Error al actualizar el destacado:", error);
        }
    };
    

    return (
        <motion.section
            className={`bg-primary gap-52 h-[700px] mt-10 border-r-8 border-r-secundary duration-500 flex md:flex-row items-center relative transition-all ${
                isActive ? 'w-[930px]' : 'w-[488px]'
            }`}
        >
            <div className="w-full h-full flex flex-col justify-center items-start relative">
                
                <motion.img
                    src={`${imagen}`}
                    className='w-full h-full aspect-[16/9] object-cover cursor-pointer shadow-2xl shadow-black'
                    alt="Imagen de la propiedad"
                    onMouseDown={handleMouseDown}
                    onMouseUp={handleMouseUp}
                    initial={{ scale: 1 }}
                    animate={{ scale: isClicked ? 0.9 : 1 }}
                    transition={{ duration: 0.1 }}
                />
                {isStar && (
                    <span className="absolute top-2 right-2 bg-yellow-500 text-white px-2 py-1 rounded-full">⭐</span>
                )}
            </div>

            <AnimatePresence>
                {isActive && (
                    <motion.div
                        className="flex-1"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, transition: { duration: 0.1 } }}
                        transition={{ delay: 0.3, duration: 0.2 }}
                    >
                        <div className='w-[380px] flex flex-col text-2xl text-tertiary [&_span]:text-secundary [&_span]:font-bold mb-52'>
                            <section className='flex flex-col gap-5'>
                                <p><span>Titulo: </span>{titulo} </p>
                                <p><span className='text-secundary'>Descripcion: </span>{descripcion} </p>
                                <p><span className='text-secundary'>Tipo: </span>{tipo}</p>
                                <p><span className='text-secundary'>Ubicacion: </span>{ubicacion}</p>
                                <p><span className='text-secundary'>Precio:</span>{precio}</p>
                            </section>

                            <section className="absolute -bottom-10 right-0 flex space-x-10 mr-3 mb-10">
                                <button
                                    className="bg-yellow-500 text-white px-4 py-2 rounded-sm hover:bg-yellow-600 duration-300"
                                    onClick={handleChangeStar}
                                >
                                    {isStar ? "Quitar Destacado" : "Destacar"}
                                </button>
                                <button
                                    className="bg-red-500 text-white px-4 py-2 rounded-sm hover:bg-red-600 duration-300"
                                    onClick={handleDelete}
                                >
                                    Eliminar
                                </button>
                                <button
                                    className="bg-blue-500 text-white px-4 py-2 rounded-sm hover:bg-blue-600 duration-300"
                                    onClick={handleUpdate}
                                >
                                    Editar
                                </button>
                            </section>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.section>
    );
};
