import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { motion, AnimatePresence } from "framer-motion";
import { deleteUsers, getAllUsers, registerUser } from "../../network/fetchApiUsers";

export default function AdminUsers() {
    const { register, handleSubmit, reset } = useForm();
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        const data = await getAllUsers();
        setUsers(data);
    };

    const onSubmit = async (data) => {
        await registerUser(data);
        fetchUsers();
        reset();
    };

    const handleDelete = async (id) => {
        await deleteUsers(id);
        setUsers((prevUsers) => prevUsers.filter(user => user._id !== id));
    };
    
    return (
        <motion.div
            className="max-w-2xl mx-auto p-6 bg-gray-900/80 shadow-2xl rounded-lg backdrop-blur-md text-white"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <h2 className="text-3xl font-semibold text-center mb-6 tracking-wide">Administración de Usuarios</h2>

            {/* Formulario */}
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
                    Agregar Usuario
                </motion.button>
            </form>

            {/* Lista de Usuarios */}
            <ul className="mt-6 space-y-3">
                <AnimatePresence>
                    {users.map((user) => (
                        <motion.li
                            key={user._id}
                            className="flex justify-between items-center p-3 bg-gray-800/70 rounded-md shadow-md"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, x: -50 }}
                            transition={{ duration: 0.3 }}
                        >
                            <span className="text-gray-200">{user.email}</span>
                            <motion.button
                                onClick={() => handleDelete(user._id)}
                                className="bg-red-500/80 text-white px-3 py-1 rounded-md hover:bg-red-500 transition shadow-md"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                Eliminar
                            </motion.button>
                        </motion.li>
                    ))}
                </AnimatePresence>
            </ul>
        </motion.div>
    );
}
