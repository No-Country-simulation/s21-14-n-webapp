import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { motion, AnimatePresence } from "framer-motion";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { CgCloseR } from "react-icons/cg";
import { ConsultSchema } from "../../schemas";
import { createContact } from "../../network/fetchContact";
import Error from "../../ui/ErrorMessage";

export const ButtonContact = () => {
  const [isActive, setIsActive] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(ConsultSchema) });

  const handleClick = () => {
    setIsActive((prevState) => !prevState);
  };

  const onSubmit = async (data) => {
    try {
      await createContact(data);
      reset();
      setIsActive(false);
    } catch (error) {
      console.error("Error al enviar la consulta", error);
    }
  };

  return (
    <motion.div
      className="z-50 rounded-4xl bg-primary flex flex-col justify-center items-center bottom-9 right-10 fixed border-4 border-secundary shadow-2xl overflow-hidden"
      initial={{ width: 128, height: 80 }}
      animate={
        isActive ? { width: 400, height: 800 } : { width: 128, height: 80 }
      }
      transition={{ type: "spring", stiffness: 100 }}
    >
      <button
        className="hover:scale-105 cursor-pointer p-4"
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
            onSubmit={handleSubmit(onSubmit)}
            className="w-full p-4 space-y-4 text-tertiary flex flex-col gap-2"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <div>
              <input
                {...register("nombreApellido")}
                placeholder="Nombre y Apellido"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errors.nombreApellido && (
                <Error>{errors.nombreApellido.message}</Error>
              )}
            </div>

            <div>
              <input
                {...register("email")}
                placeholder="Email"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errors.email && <Error>{errors.email.message}</Error>}
            </div>

            <div>
              <input
                {...register("telefono")}
                placeholder="Teléfono"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errors.telefono && <Error>{errors.telefono.message}</Error>}
            </div>

            <div>
              <select
                {...register("tipoConsulta")}
                className="w-full p-3 border border-gray-300 rounded-lg bg-blue-100 text-blue-800 font-bold focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="General">General</option>
                <option value="Soporte">Soporte</option>
                <option value="Ventas">Ventas</option>
                <option value="Otro">Otro</option>
              </select>
            </div>

            <div>
              <input
                {...register("titulo")}
                placeholder="Título"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errors.titulo && <Error>{errors.titulo.message}</Error>}
            </div>

            <div>
              <textarea
                {...register("mensaje")}
                placeholder="Mensaje"
                className="w-full p-3 border border-gray-300 rounded-lg h-24 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errors.mensaje && <Error>{errors.mensaje.message}</Error>}
            </div>

            <motion.button
              type="submit"
              className="w-full bg-primary text-tertiary font-bold py-4 px-6 rounded-lg hover:bg-secundary hover:text-tertiary transition-all shadow-lg border-2 border-white"
              whileHover={{ scale: 0.95 }}
              whileTap={{ scale: 1 }}
            >
              Enviar
            </motion.button>
          </motion.form>
        )}
      </AnimatePresence>
    </motion.div>
  );
};
