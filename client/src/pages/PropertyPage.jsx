import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import GalleryItem from "../components/shared/GalleryItem";
import ThemeSelect from "../components/shared/ThemeSelect";
import { getInquiryById } from "../network/fetchApiInquirity";

const PropertyPage = () => {
  const { id } = useParams();
  const [property, setProperty] = useState(null);

  useEffect(() => {
    const fetchProperty = async () => {
      try {
        const data = await getInquiryById(id);
        setProperty(data);
      } catch (error) {
        console.error("Error al obtener los detalles de la propiedad:", error);
      }
    };

    fetchProperty();
  }, [id]);

  if (!property) return <p className="text-center mt-10 text-lg">Cargando información...</p>;

  return (
    <div className="bg-white dark:bg-primary dark:text-white transition-colors duration-500 ease-in-out">
      <ThemeSelect displayType="toggle" />

      {/* Título */}
      <h1 className="mt-8 text-center text-2xl md:text-3xl font-bold text-secundary capitalize">
        {property.title}
      </h1>

      {/* Sección Principal */}
      <main className="flex flex-col mt-6 sm:mt-10 px-6 sm:px-20">
        <section className="flex flex-col md:flex-row justify-center items-center gap-6">
          {/* Imagen Principal */}
          <div className="md:w-7/12 lg:w-6/12">
            <GalleryItem width="w-full" height="h-auto" imageSrc={property.imagePrincipal} imgAlt={property.title} />
          </div>

          {/* Detalles de la Propiedad */}
          <div className="md:w-5/12 lg:w-6/12 text-center md:text-left lg:pl-8 space-y-4">
            <p className="text-lg">
              <span className="font-semibold">Descripción:</span> {property.description}
            </p>
            <p className="text-lg">
              <span className="font-semibold">Precio:</span> ${property.price}
            </p>
            <p className="text-lg">
              <span className="font-semibold">Dirección:</span> {property.address}
            </p>
            <p className="text-lg">
              <span className="font-semibold">Metros cuadrados:</span> {property.squareMeters} m²
            </p>
            <p className="text-lg">
              <span className="font-semibold">Tipo de propiedad:</span> {property.propertyType}
            </p>
            <p className="text-lg">
              <span className="font-semibold">Tipo de contrato:</span> {property.contractType}
            </p>
          </div>
        </section>

        {/* Galería de Imágenes */}
        {property.images?.length > 0 && (
          <section className="mt-10">
            <h2 className="text-center text-xl font-semibold mb-4">Galería de Imágenes</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {property.images.map((image, index) => (
                <GalleryItem key={index} imageSrc={image} imgAlt={`Imagen ${index + 1}`} />
              ))}
            </div>
          </section>
        )}
      </main>
    </div>
  );
};

export default PropertyPage;
