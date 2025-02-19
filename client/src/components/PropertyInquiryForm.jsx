
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import Error from "../ui/ErrorMessage";
import { InquirySchema } from "../schemas/InquirySchema";
import { useForm } from "react-hook-form";

const PropertyInquiryForm = () => 
{
    const 
    {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm({ resolver: yupResolver(InquirySchema) });

    const sendInquiry = (data) => {
        console.log({ ...data, imagenPrincipal });
        reset();
    };
    
    
    return (
        <div className="max-w-xl px-10 py-8 my-16 bg-white shadow-lg rounded-lg font-light">
            <h2 className="text-xl ">
                Enviar una consulta sobre esta propiedad
            </h2>
            <form onSubmit={handleSubmit(sendInquiry)} className="mt-2 space-y-2">
                <div className="">
                    <label className="block ">Nombre</label>
                    <input className="w-full p-2 border rounded" {...register("nombre")} />
                    {errors.nombre && <Error>{errors.nombre.message}</Error>}
                </div>
        
                <div className="">
                    <label className="block ">Email</label>
                    <input className="w-full p-2 border rounded" {...register("email")} type="email" />
                    {errors.descripcion && <Error>{errors.email.message}</Error>}
                </div>
        
                <div className="">
                    <label className="block ">Teléfono</label>
                    <input type="tel" className="w-full p-2 border rounded" {...register("telefono")} />
                    {errors.precio && <Error>{errors.telefono.message}</Error>}
                </div>
        
                <div className="">
                    <label className="block ">Escriba su consulta</label>
                    <textarea className="w-full p-2 border rounded" {...register("consulta")} />
                    {errors.consulta && <Error>{errors.consulta.message}</Error>}
                </div>
        
                <button
                type="submit"
                className="w-full p-3 bg-indigo-600 focus:bg-indigo-700 active:bg-indigo-800 text-white font-bold rounded hover:bg-indigo-700 cursor-pointer"
                >
                Enviar
                </button>
            </form>
        </div>
    );
}

export default PropertyInquiryForm