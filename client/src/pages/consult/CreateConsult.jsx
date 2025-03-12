import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { motion } from "framer-motion";

import ProgressIndicator from "./ProgressIndicator";
import SupportForm from "./ConsultForm";
import { createContact } from "../../network/fetchContact";
import { ConsultSchema } from "../../schemas";

const CreateConsult = () => 
{
  const [currentSection, setCurrentSection] = useState(1);

  const { 
    register, 
    handleSubmit, 
    formState: { errors }, 
    reset,
    trigger,
    } = useForm(
    {
        resolver: yupResolver(ConsultSchema),
    });
 
  const nextSection = async () => {  
    if (currentSection === 1) {
        const isSectionValid = await trigger(["nombreApellido", "email", "telefono", "tipoConsulta"]);
        if (!isSectionValid) return; 
      }
      setCurrentSection(2);
  }

  const prevSection = () => {
      setCurrentSection(1);
  };


  const onSubmit = async (supportForm) => 
  {
    console.log("Datos del formulario:", supportForm);

    try {
      const formData = new FormData();
      formData.append("nombreApellido", supportForm.nombreApellido);
      formData.append("email", supportForm.email);
      formData.append("telefono", supportForm.telefono);
      formData.append("tipoConsulta", supportForm.tipoConsulta);
      formData.append("mensaje", supportForm.mensaje);
      formData.append("titulo", supportForm.titulo);

      console.log("Contenido de FormData:");
      for (let pair of formData.entries()) {
        console.log(pair[0], pair[1]);
        console.log(pair[0], pair[1]); 
      }

      const response = await createContact(formData);
      console.log("Ayuda tècnica creada con éxito:", response);

      reset();
      prevSection();
    } catch (error) {
      console.error("Error al crear el formulario de contacto:", error.message);
    }
  };

  return (
    <div className="relative h-svh flex items-center justify-center">
      <div className="absolute top-0 left-0 w-full h-full bg-black/50"></div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="mt-20 min-h-[500px] py-8 w-4/5 mx-auto p-6 bg-white/65 shadow-lg rounded-lg backdrop-blur-sm relative"
      >
        <h2 className="text-2xl font-bold text-center mb-4">Formulario de Consulta</h2>
        <ProgressIndicator 
          currentSection={currentSection}
          nextSection={nextSection}
          prevSection={prevSection}        
        />

        <SupportForm
          currentSection={currentSection}
          nextSection={nextSection}
          prevSection={prevSection}
          onSubmit={handleSubmit(onSubmit)}
          register={register}
          errors={errors}
        />
      </motion.div>
      
    </div>
  );
};

export default CreateConsult;