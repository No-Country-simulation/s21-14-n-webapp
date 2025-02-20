
import { yupResolver } from "@hookform/resolvers/yup";
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
        <div className="max-w-xl mx-auto px-10 py-8 my-16 bg-white shadow-lg rounded-lg font-light dark:bg-bg-color">
            
            <h2 className="text-xl font-medium ">
                Enviar una consulta sobre esta propiedad
            </h2>
            <form onSubmit={handleSubmit(sendInquiry)} className="mt-2 space-y-2">
                <div className="">
                    <label className="block ">Nombre</label>
                    <input className="w-full p-2 border rounded dark:bg-neutral-600" {...register("nombre")} />
                    {errors.nombre && <Error>{errors.nombre.message}</Error>}
                </div>
        
                <div className="">
                    <label className="block ">Email</label>
                    <input className="w-full p-2 border rounded dark:bg-neutral-600" {...register("email")} type="email" />
                    {errors.descripcion && <Error>{errors.email.message}</Error>}
                </div>
        
                <div className="">
                    <label className="block ">Teléfono</label>
                    <input type="tel" className="w-full p-2 border rounded dark:bg-neutral-600" {...register("telefono")} />
                    {errors.precio && <Error>{errors.telefono.message}</Error>}
                </div>
        
                <div className="">
                    <label className="block ">Escriba su consulta</label>
                    <textarea className="w-full p-2 border rounded dark:bg-neutral-600" {...register("consulta")} />
                    {errors.consulta && <Error>{errors.consulta.message}</Error>}
                </div>
        
                <button
                type="submit"
                className="w-full p-3 bg-text-color text-white font-bold rounded hover:bg-amber-500 active:bg-amber-600 cursor-pointer"
                >
                Enviar
                </button>
            </form>
        </div>
    );
}

export default PropertyInquiryForm