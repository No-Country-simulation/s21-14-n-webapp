import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import Error from "../ui/ErrorMessage";
import { PropertieSchema } from "../schemas";


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
    <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold text-center mb-4">Crea La Vivienda</h2>
      <form onSubmit={handleSubmit(createProperty)}>
        <div className="mb-4">
          <label className="block font-semibold">Título</label>
          <input className="w-full p-2 border rounded" {...register("titulo")} />
          {errors.titulo && <Error>{errors.titulo.message}</Error>}
        </div>

        <div className="mb-4">
          <label className="block font-semibold">Descripción</label>
          <textarea className="w-full p-2 border rounded" {...register("descripcion")} />
          {errors.descripcion && <Error>{errors.descripcion.message}</Error>}
        </div>

        <div className="mb-4">
          <label className="block font-semibold">Precio</label>
          <input type="number" className="w-full p-2 border rounded" {...register("precio")} />
          {errors.precio && <Error>{errors.precio.message}</Error>}
        </div>

        <div className="mb-4">
          <label className="block font-semibold">Ubicación</label>
          <input className="w-full p-2 border rounded" {...register("ubicacion")} />
          {errors.ubicacion && <Error>{errors.ubicacion.message}</Error>}
        </div>

        <div className="mb-4">
          <label className="block font-semibold">Tipo</label>
          <input className="w-full p-2 border rounded" {...register("tipo")} />
          {errors.tipo && <Error>{errors.tipo.message}</Error>}
        </div>

        <div className="mb-6">
          <label className="block font-semibold">Imagen Principal</label>
          {!imagenPrincipal ? (
            <input
              type="file"
              className="w-full p-2 border rounded"
              onChange={(e) => setImagenPrincipal(e.target.files[0])}
            />
          ) : (
            <div className="relative">
              <img
                src={URL.createObjectURL(imagenPrincipal)}
                alt="Principal"
                className="w-full h-40 object-cover rounded"
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

        <button
          type="submit"
          className="w-full p-3 bg-indigo-600 text-white font-bold rounded hover:bg-indigo-700"
        >
          Guardar Propiedad
        </button>
      </form>
    </div>
  );
};

export default PropertiesForm;
