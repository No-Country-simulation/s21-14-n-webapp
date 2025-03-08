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
