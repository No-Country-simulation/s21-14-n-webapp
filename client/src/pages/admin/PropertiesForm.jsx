import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { motion } from "framer-motion";
import { PropertieSchema } from "../../schemas";
import Error from "../../ui/ErrorMessage";
import { createInquiry } from "../../network/fetchApiInquirity";

const PropertiesForm = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(PropertieSchema) });

  const [imagenesAdicionales, setImagenesAdicionales] = useState([]);


  const handleImagenPrincipalChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setValue("imagenPrincipal", file);
    }
  };

 
  const handleImagenesAdicionalesChange = (e) => {
    setImagenesAdicionales([...e.target.files]);
  };

  const onSubmit = async (property) => {
    console.log("Datos del formulario:", property);

    try {
      const formData = new FormData();
      formData.append("title", property.title);
      formData.append("description", property.description);
      formData.append("price", property.price);
      formData.append("address", property.address);
      formData.append("squareMeters", property.squareMeters);
      formData.append("typeProperty", property.typeProperty);
      formData.append("typeContract", property.typeContract);

      if (property.imagenPrincipal) {
        formData.append("imagePrincipal", property.imagenPrincipal);
      }

      imagenesAdicionales.forEach((image) => {
        formData.append("images", image);
      });

      console.log("Datos enviados:", Object.fromEntries(formData.entries()));

      const response = await createInquiry(formData);
      console.log("Propiedad creada con éxito:", response);

      reset();
      setImagenesAdicionales([]);
    } catch (error) {
      console.error("Error al crear propiedad:", error);
    }
  };

  console.log("Errores del formulario:", errors);

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
        <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
          
          {/* Input Title */}
          <div className="relative mb-4">
            <label className="block text-sm text-gray-600">Título</label>
            <input
              type="text"
              className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
              {...register("title")}
            />
            {errors.title && <Error>{errors.title.message}</Error>}
          </div>

          {/* Input Description */}
          <div className="relative mb-4">
            <label className="block text-sm text-gray-600">Descripción</label>
            <textarea
              className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
              {...register("description")}
            ></textarea>
            {errors.description && <Error>{errors.description.message}</Error>}
          </div>

          {/* Input Price */}
          <div className="relative mb-4">
            <label className="block text-sm text-gray-600">Precio</label>
            <input
              type="number"
              className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
              {...register("price")}
            />
            {errors.price && <Error>{errors.price.message}</Error>}
          </div>

          {/* Input Address */}
          <div className="relative mb-4">
            <label className="block text-sm text-gray-600">Dirección</label>
            <input
              type="text"
              className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
              {...register("address")}
            />
            {errors.address && <Error>{errors.address.message}</Error>}
          </div>

          {/* Input Square Meters */}
          <div className="relative mb-4">
            <label className="block text-sm text-gray-600">Metros Cuadrados</label>
            <input
              type="number"
              className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
              {...register("squareMeters")}
            />
            {errors.squareMeters && <Error>{errors.squareMeters.message}</Error>}
          </div>

          {/* Input Type Property */}
          <div className="relative mb-4">
            <label className="block text-sm text-gray-600">Tipo de Propiedad</label>
            <input
              type="text"
              className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
              {...register("typeProperty")}
            />
            {errors.typeProperty && <Error>{errors.typeProperty.message}</Error>}
          </div>

          {/* Input Type Contract */}
          <div className="relative mb-4">
            <label className="block text-sm text-gray-600">Tipo de Contrato</label>
            <input
              type="text"
              className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
              {...register("typeContract")}
            />
            {errors.typeContract && <Error>{errors.typeContract.message}</Error>}
          </div>

          {/* Imagen Principal */}
          <div className="mb-6">
            <label className="block font-semibold">Imagen Principal</label>
            <input
              type="file"
              accept="image/*"
              className="w-full p-2 border rounded"
              onChange={handleImagenPrincipalChange}
            />
            {errors.imagenPrincipal && <Error>{errors.imagenPrincipal.message}</Error>}
          </div>

          {/* Imágenes Adicionales */}
          <div className="mb-6">
            <label className="block font-semibold">Imágenes Adicionales</label>
            <input
              type="file"
              accept="image/*"
              multiple
              className="w-full p-2 border rounded"
              onChange={handleImagenesAdicionalesChange}
            />
          </div>

          {/* Botón de Envío */}
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
