import * as yup from "yup"

export const PropertieSchema = yup.object().shape({
  titulo: yup
    .string()
    .min(3, "Mínimo 5 caracteres")
    .max(100, "Máximo 100 caracteres")
    .required("El título es necesario"),
  descripcion: yup
    .string()
    .min(20, "Mínimo 20 caracteres")
    .required("La descripción es necesaria"),
  precio: yup
    .number()
    .positive("Debe ser un número positivo")
    .required("El precio es necesario"),
  ubicacion: yup.string().required("La ubicación es necesaria"),
  tipo: yup.string().required("El tipo es necesario"),
  imagenPrincipal: yup.mixed().required("La imagen principal es necesaria"),
});