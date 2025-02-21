import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { motion } from "framer-motion";
import { PropertieSchema } from "../../schemas";
import Error from "../../ui/ErrorMessage";

const PropertiesForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(PropertieSchema) });

  const [imagenPrincipal, setImagenPrincipal] = useState(null);

  const createProperty = (data) => {
    console.log({ ...data, imagenPrincipal });
    reset();
    setImagenPrincipal(null);
  };

  return (
    <div className="relative w-full h-screen flex items-center justify-center">
      <div className="absolute top-0 left-0 w-full h-full bg-black/50"></div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-lg min-h-[500px] mx-auto p-6 bg-white/65 shadow-lg rounded-lg backdrop-blur-sm relative md:min-h-[600px] sm:w-11/12"
      >
        <h2 className="text-2xl font-bold text-center mb-4">Crea La Vivienda</h2>
        <form onSubmit={handleSubmit(createProperty)}>
          {[
            { name: "titulo", label: "Título", type: "text" },
            { name: "descripcion", label: "Descripción", type: "textarea" },
            { name: "precio", label: "Precio", type: "number" },
            { name: "ubicacion", label: "Ubicación", type: "text" },
            { name: "tipo", label: "Tipo", type: "text" },
          ].map(({ name, label, type }, index) => (
            <div key={name} className="relative mb-4">
              <motion.label
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="absolute top-2 left-2 text-gray-600 text-sm"
              >
                {label}
              </motion.label>
              {type === "textarea" ? (
                <textarea
                  className="w-full p-3 pt-6 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
                  {...register(name)}
                />
              ) : (
                <input
                  type={type}
                  className="w-full p-3 pt-6 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
                  {...register(name)}
                />
              )}
              {errors[name] && <Error>{errors[name].message}</Error>}
            </div>
          ))}
          <div className="mb-6">
            <label className="block font-semibold">Imagen Principal</label>
            {!imagenPrincipal ? (
  <input
    type="file"
    className="w-full p-2 border rounded"
    onChange={(e) => setImagenPrincipal(e.target.files[0])}
  />
) : (
  <div className="relative flex justify-center items-center">
    <img
      src={URL.createObjectURL(imagenPrincipal)}
      alt="Principal"
      className="w-full max-h-40 object-cover rounded shadow-md"
    />
    <button
      type="button"
      className="absolute top-2 right-2 bg-red-500 text-white px-2 rounded"
      onClick={() => setImagenPrincipal(null)}
    >
      X
    </button>
  </div>
)}

            {errors.imagenPrincipal && <Error>{errors.imagenPrincipal.message}</Error>}
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full p-3 bg-indigo-600 text-white font-bold rounded hover:bg-indigo-700"
          >
            Guardar Propiedad
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
};

export default PropertiesForm;
