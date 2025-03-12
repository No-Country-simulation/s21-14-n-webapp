import * as yup from "yup";

export const PropertieSchema = yup.object().shape({
  title: yup.string().min(3, "Mínimo 3 caracteres").max(100, "Máximo 100 caracteres").required("El título es necesario"),
  description: yup.string().min(20, "Mínimo 20 caracteres").required("La descripción es necesaria"),
  price: yup.number().positive("Debe ser un número positivo").required("El precio es necesario"),
  address: yup.string().required("La ubicación es necesaria"),
  squareMeters: yup.number().positive("Debe ser un número positivo").required("Los metros cuadrados son necesarios"),
  typeProperty: yup.string().required("El tipo de propiedad es necesario"),
  typeContract: yup.string().required("El tipo de contrato es necesario"),
  imagenPrincipal: yup.mixed().required("La imagen principal es obligatoria"),
  imagenesAdicionales: yup.array().of(yup.mixed().test("fileType", "Solo imágenes (jpg, png, jpeg)", (value) => 
    value && ["image/jpeg", "image/png", "image/jpg"].includes(value.type)
  )),
});

export const ConsultSchema = yup.object().shape({
    nombreApellido: yup
        .string()
        .min(3, "Mínimo 3 caracteres")
        .max(100, "Máximo 100 caracteres")
        .required("El nombre y apellido son obligatorios"),
    email: yup
        .string()
        .email("Debe ser un correo electrónico válido")
        .required("El correo electrónico es obligatorio"),
    telefono: yup
        .string()
        .matches(/^\d+$/, "Solo se permiten números en el teléfono")
        .required("El tipo de consulta es obligatorio"),
    tipoConsulta: yup
        .string()
        .oneOf(['General', 'Soporte', 'Ventas', 'Otro'], "Tipo de consulta no válido")
        .required("El tipo de consulta es obligatorio"),
    mensaje: yup
        .string()
        .min(10, "Mínimo 10 caracteres")
        .required("El mensaje es obligatorio"),
    titulo: yup
        .string()
        .min(5, "Mínimo 5 caracteres")
        .max(100, "Máximo 100 caracteres")
        .required("El título es obligatorio"),
});