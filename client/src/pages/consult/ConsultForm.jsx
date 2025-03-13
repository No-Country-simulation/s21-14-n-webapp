import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { motion } from "framer-motion";
import { ConsultSchema } from "../../schemas";
import { createContact } from "../../network/fetchContact";
import Error from "../../ui/ErrorMessage";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(ConsultSchema) });

  const onSubmit = async (data) => {
    try {
      await createContact(data);
      reset();
    } catch (error) {
      console.error("Error al enviar la consulta", error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-cover bg-center" style={{ backgroundImage: "url('/path-to-your-image.jpg')" }}>
      <motion.div 
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5 }}
        className="p-10 bg-white bg-opacity-80 backdrop-blur-lg shadow-2xl rounded-3xl w-full max-w-lg text-gray-800 border border-gray-300"
      >
        <h2 className="text-4xl font-bold text-center mb-8">Contacto</h2>
        <motion.form 
          onSubmit={handleSubmit(onSubmit)} 
          className="w-full space-y-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <div>
            <input {...register("nombreApellido")} placeholder="Nombre y Apellido" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
            {errors.nombreApellido && <Error>{errors.nombreApellido.message}</Error>}
          </div>

          <div>
            <input {...register("email")} placeholder="Email" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
            {errors.email && <Error>{errors.email.message}</Error>}
          </div>

          <div>
            <input {...register("telefono")} placeholder="Teléfono" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
            {errors.telefono && <Error>{errors.telefono.message}</Error>}
          </div>

          <div>
            <select {...register("tipoConsulta")} className="w-full p-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option value="General">General</option>
              <option value="Soporte">Soporte</option>
              <option value="Ventas">Ventas</option>
              <option value="Otro">Otro</option>
            </select>
          </div>

          <div>
            <input {...register("titulo")} placeholder="Título" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
            {errors.titulo && <Error>{errors.titulo.message}</Error>}
          </div>

          <div>
            <textarea {...register("mensaje")} placeholder="Mensaje" className="w-full p-3 border border-gray-300 rounded-lg h-32 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            {errors.mensaje && <Error>{errors.mensaje.message}</Error>}
          </div>

          <motion.button 
            type="submit" 
            className="w-full bg-blue-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-blue-700 transition-all shadow-md"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Enviar
          </motion.button>
        </motion.form>
      </motion.div>
    </div>
  );
};

export default ContactForm;