import * as yup from "yup"

export const InquirySchema = yup.object().shape({
    nombre: yup
    .string()
    .min(5, "Mínimo 5 caracteres")
    .max(100, "Máximo 100 caracteres")
    .required("El nombre es necesario"),
    email: yup
    .string()
    .email("Formato de correo electrónico inválido")
    .required("El email es necesario"),
    telefono: yup
    .string()
    .matches(/^\d+$/, "Solo se permiten números en el teléfono")
    .required("El precio es necesario"),
    consulta: yup
    .string()
    .min(5, "Mínimo 5 caracteres")
    .max(100, "Máximo 100 caracteres")
    .required("La consulta es necesaria"),
});