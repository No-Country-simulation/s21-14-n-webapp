import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { motion } from "framer-motion";
import { PropertieSchema } from "../../schemas";
import Error from "../../ui/ErrorMessage";
import { createInquiry, editInquiry, getInquiryById } from "../../network/fetchApiInquirity";
import { useEffect, useState } from "react";

const PropertiesForm = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [idInmueble, setIdInmueble] = useState(null);
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(PropertieSchema) });
  useEffect(() => {
    const storedId = localStorage.getItem("idInmueble");

    if (storedId) {
      setIsEditing(true);
      setIdInmueble(storedId);

      // Cargar los datos del inmueble
      getInquiryById(storedId).then((data) => {
        setValue("title", data.title);
        setValue("description", data.description);
        setValue("price", data.price);
        setValue("address", data.address);
        setValue("squareMeters", data.squareMeters);
        setValue("typeProperty", data.typeProperty);
        setValue("typeContract", data.typeContract);

        if (data.imagePrincipal) {
          setPreviewImage(data.imagePrincipal);
        }
        if (data.images) {
          setPreviewAdditionalImages(data.images);
        }
      });
    }
  }, [setValue]);

  const [imagenesAdicionales, setImagenesAdicionales] = useState([]);
  const [previewImage, setPreviewImage] = useState(null);
  const [previewAdditionalImages, setPreviewAdditionalImages] = useState([]);

  // Imagen principal
  const handleImagenPrincipalChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setValue("imagenPrincipal", file, { shouldValidate: true });

      // Generar vista previa
      const reader = new FileReader();
      reader.onloadend = () => setPreviewImage(reader.result);
      reader.readAsDataURL(file);
    }
  };

  // Imágenes adicionales
  const handleImagenesAdicionalesChange = (e) => {
    const files = Array.from(e.target.files);
    setImagenesAdicionales(files);
    setValue("imagenesAdicionales", files, { shouldValidate: true });

    // Generar vistas previas
    Promise.all(
      files.map((file) => {
        return new Promise((resolve) => {
          const reader = new FileReader();
          reader.onloadend = () => resolve(reader.result);
          reader.readAsDataURL(file);
        });
      })
    ).then(setPreviewAdditionalImages);
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
        const imagenPrincipalRenombrada = new File(
          [property.imagenPrincipal],
          "imagen_principal.jpg",
          { type: property.imagenPrincipal.type }
        );
        formData.append("imagePrincipal", imagenPrincipalRenombrada);
      }

      imagenesAdicionales.forEach((image, index) => {
        const renamedImage = new File(
          [image],
          `imagen_adicional_${index + 1}.jpg`,
          { type: image.type }
        );
        formData.append("images", renamedImage);
      });

      console.log("Contenido de FormData:");
      for (let pair of formData.entries()) {
        console.log(pair[0], pair[1].name);
      }

      let response;
      if (isEditing) {
        response = await editInquiry(formData, idInmueble);
        console.log("Propiedad editada con éxito:", response);
      } else {
        response = await createInquiry(formData);
        console.log("Propiedad creada con éxito:", response);
      }

      reset();
      setPreviewImage(null);
      setPreviewAdditionalImages([]);
      setImagenesAdicionales([]);
      localStorage.removeItem("idInmueble");
    } catch (error) {
      console.error("Error al guardar propiedad:", error);
    }
  };

  return (
    <div className="relative w-full h-full flex items-center justify-center pb-5 pt-28 bg-[url(/banner.jpg)] bg-cover bg-center before:absolute before:inset-0 before:bg-black before:opacity-50">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-lg min-h-[500px] mx-auto p-6 bg-white/65 shadow-lg rounded-lg backdrop-blur-sm relative md:min-h-[600px] sm:w-11/12"
      >

        <h2 className="text-2xl font-bold text-center">Crea La Vivienda</h2>
        <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data" className="flex flex-col gap-2 mt-20" >

          {/* Input Title */}
          <div className="relative ">
            <label className="block text-sm text-gray-600">Título</label>
            <input
              type="text"
              className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
              {...register("title")}
            />
            {errors.title && <Error>{errors.title.message}</Error>}
          </div>

          {/* Input Description */}
          <div className="relative ">
            <label className="block text-sm text-gray-600">Descripción</label>
            <textarea
              className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
              {...register("description")}
            ></textarea>
            {errors.description && <Error>{errors.description.message}</Error>}
          </div>

          {/* Input Price */}
          <div className="relative ">
            <label className="block text-sm text-gray-600">Precio</label>
            <input
              type="number"
              className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
              {...register("price")}
            />
            {errors.price && <Error>{errors.price.message}</Error>}
          </div>

          {/* Input Address */}
          <div className="relative ">
            <label className="block text-sm text-gray-600">Dirección</label>
            <input
              type="text"
              className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
              {...register("address")}
            />
            {errors.address && <Error>{errors.address.message}</Error>}
          </div>

          {/* Input Square Meters */}

          <div className="relative ">
            <label className="block text-sm text-gray-600">Metros Cuadrados</label>
            <input
              type="number"
              className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
              {...register("squareMeters")}
            />
            {errors.squareMeters && (
              <Error>{errors.squareMeters.message}</Error>
            )}
          </div>

          {/* Input Type Property */}
          <div className="relative ">
            <label className="block text-sm text-gray-600">Tipo de Propiedad</label>
            <input
              type="text"
              className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
              {...register("typeProperty")}
            />
            {errors.typeProperty && (
              <Error>{errors.typeProperty.message}</Error>
            )}
          </div>

          {/* Input Type Contract */}
          <div className="relative ">
            <label className="block text-sm text-gray-600">Tipo de Contrato</label>

            <input
              type="text"
              className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
              {...register("typeContract")}
            />
            {errors.typeContract && (
              <Error>{errors.typeContract.message}</Error>
            )}
          </div>


          {/* Imagen Principal */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700">
              Imagen Principal
            </label>
            <input
              type="file"
              accept="image/*"
              className="mt-1 p-2 border rounded w-full"
              onChange={handleImagenPrincipalChange}
            />
            {errors.imagenPrincipal && (
              <Error>{errors.imagenPrincipal.message}</Error>
            )}
            {previewImage && (
              <img
                src={previewImage}
                alt="Vista previa"
                className="w-full max-w-xs border rounded shadow mt-2"
              />
            )}
          </div>

          {/* Imágenes Adicionales */}
          <div className="">
            <label className="block font-semibold">Imágenes Adicionales</label>
            <input
              type="file"
              accept="image/*"
              multiple
              className="w-full p-2 border rounded"
              onChange={handleImagenesAdicionalesChange}
            />
            {errors.imagenesAdicionales && (
              <Error>{errors.imagenesAdicionales.message}</Error>
            )}
            {previewAdditionalImages.length > 0 && (
              <div className="mt-4 grid grid-cols-3 gap-2">
                {previewAdditionalImages.map((src, index) => (
                  <img
                    key={index}
                    src={src}
                    alt={`Imagen ${index + 1}`}
                    className="w-full h-auto border rounded shadow"
                  />
                ))}
              </div>
            )}
          </div>

          {/* Botón de Envío */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full p-3 bg-primary text-white font-bold rounded hover:bg-secundary"
          >
            {isEditing ? "Editar Propiedad" : "Guardar Propiedad"}
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
};

export default PropertiesForm;
