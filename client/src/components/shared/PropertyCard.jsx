import React from "react";
import { useNavigate } from "react-router-dom";

const PropertyCard = ({ id, imgSrc, title, price, address }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/inmueble/${id}`);
  };

  return (
    <div className="w-full bg-white shadow-xl shadow-black dark:bg-gray-800 dark:border-gray-700 cursor-pointer" onClick={handleClick}>
      <figure className="relative h-96 w-auto group transition-all duration-500">
        <img className="w-full h-full rounded-t-xs cont object-cover bg-center" src={imgSrc} alt={title} />
        <div className="absolute inset-0 bg-black/0 transition-all duration-500 pointer-events-none group-hover:bg-black/50 flex items-center justify-center">
          <span className="text-white font-light opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700 ease-out">
            Ver Detalles
          </span>
        </div>
      </figure>

      <div className="px-4 pb-3 pt-2 space-y-2 dark:backdrop-blur-sm dark:text-tertiary flex flex-col justify-center">
        <h2 className="block text-lg font-semibold tracking-tight capitalize">
          {title}
        </h2>
        <section className="text-xs flex justify-between">
          <span className="text-lg">$ {price}</span>
          <span>{address}</span>
        </section>
      </div>
    </div>
  );
};

export default PropertyCard;


