import { motion } from "framer-motion";
import Error from "../../ui/ErrorMessage";

const ConsultForm = ({ currentSection, nextSection, prevSection, onSubmit, errors, register }) => 
{
  return (
    <form onSubmit={onSubmit} className="mt-4 flex gap-4 justify-center items-center" >
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: currentSection === 1 ? 1 : 0, x: currentSection === 1 ? 0 : -50 }}
        transition={{ duration: 0.5 }}
        className={` ${currentSection === 1 ? 'grid grid-cols-2 gap-8 w-8/12' : 'hidden'}`}
      >
        {/* Form fields for Section 1 */}
        <div className="relative mb-4">
          <label className="block text-sm text-gray-600">Nombre y Apellido</label>
          <input
            type="text"
            className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
            {...register("nombreApellido")}
          />
          {errors.nombreApellido && <Error>{errors.nombreApellido.message}</Error>}
          
        </div>

        <div className="relative mb-4">
          <label className="block text-sm text-gray-600">Email</label>
          <input
            type="email"
            className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
            {...register("email")}
          />
          {errors.email && <Error>{errors.email.message}</Error>}
        </div>

        <div className="relative mb-4">
          <label className="block text-sm text-gray-600">Teléfono</label>
          <input
            type="text"
            className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
            {...register("telefono")}
          />
          {errors.telefono && <Error>{errors.telefono.message}</Error>}
        </div>

        <div className="relative mb-4">
          <label className="block text-sm text-gray-600">Tipo de Consulta</label>
          <select
            className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
            {...register("tipoConsulta")}
          >
            <option value="General">General</option>
            <option value="Soporte">Soporte</option>
            <option value="Ventas">Ventas</option>
            <option value="Otro">Otro</option>
          </select>
          {errors.tipoConsulta && <Error>{errors.tipoConsulta.message}</Error>}
        </div>
        
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 1 }}
          type="button"
          className="w-2/5 mx-auto p-2 col-span-2 bg-primary hover:bg-slate-700 focus:bg-slate-600 border-2 border-orange-300/90 text-white font-bold rounded-lg hover:bg-indigo-700 cursor-pointer"
          onClick={nextSection}
        >
          Siguiente
        </motion.button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: currentSection === 2 ? 1 : 0, x: currentSection === 2 ? 0 : -50 }}
        transition={{ duration: 1 }}
        className={`${currentSection === 2 ? 'block w-8/12' : 'hidden'}`}
      >
        {/* Form fields for Section 2 */}
        <div className="relative mb-4">
          <label className="block text-sm text-gray-600">Título</label>
          <input
            type="text"
            className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
            {...register("titulo")}
          />
          {errors.titulo && <Error>{errors.titulo.message}</Error>}
        </div>

        <div className="relative mb-4">
          <label className="block text-sm text-gray-600">Mensaje</label>
          <textarea
            className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
            {...register("mensaje")}
          ></textarea>
          {errors.mensaje && <Error>{errors.mensaje.message}</Error>}
        </div>

        <div className="flex justify-around gap-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="button"
            className="w-3/12 p-2 bg-primary hover:bg-slate-700 focus:bg-slate-600 border-2 border-orange-300/90 text-white font-bold rounded-lg hover:bg-indigo-700 cursor-pointer"
            onClick={prevSection}
          >
            Atrás
          </motion.button>  
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="realtive w-2/5 p-2 bg-primary hover:bg-slate-700 focus:bg-slate-600  text-white font-bold rounded cursor-pointer
            hover:bg-primary hover:ring-2 hover:ring-offset-1 hover:ring-secundary "
          >   
            <span>Enviar Formulario</span>
          </motion.button>  
        </div>        
      </motion.div>
    </form>
  );

};

export default ConsultForm;
