import * as yup from "yup"

export const PropertieSchema = yup.object().shape({
  title: yup
    .string()
    .min(3, "Mínimo 5 caracteres")
    .max(100, "Máximo 100 caracteres")
    .required("El título es necesario"),
  description: yup
    .string()
    .min(20, "Mínimo 20 caracteres")
    .required("La descripción es necesaria"),
  price: yup
    .number()
    .positive("Debe ser un número positivo")
    .required("El precio es necesario"),
  address: yup.string().required("La ubicación es necesaria"),
  squareMeters: yup
    .number()
    .positive("Debe ser un número positivo")
    .required("Los metros cuadrados son necesarios"),
  imageUrl: yup.string().url("Debe ser una URL válida"),
  typeProperty: yup
    .number()
    .integer("Debe ser un número entero")
    .required("El tipo de propiedad es necesario"),
  typeContract: yup
    .number()
    .integer("Debe ser un número entero")
    .required("El tipo de contrato es necesario"),
  // imagenPrincipal: yup.mixed().required("La imagen principal es necesaria"),
});