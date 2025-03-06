import React from "react";

const PropertyCard = ({ imgSrc, title, price, address }) => {
  return (
    <div className="w-full bg-white shadow-lg dark:bg-gray-800 dark:border-gray-700">
      <figure className="relative h-40 group transition-all duration-500">
        <a href="/inmueble">
          <img className="w-full h-full rounded-t-xs" src={imgSrc} alt={title} />
        </a>
        <div className="absolute inset-0 bg-black/0 transition-all duration-500 pointer-events-none group-hover:bg-black/50 flex items-center justify-center">
          <span className="text-white font-light opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700 ease-out">
            Ver Detalles
          </span>
        </div>
      </figure>

      <div className="px-3 pb-3 pt-2 space-y-2 dark:bg-white dark:text-black">
        <a href="#" className="block text-xs font-semibold tracking-tight text-gray-900 dark:text-black capitalize">
          {title}
        </a>
        <section className="text-xs flex justify-between">
          <span className="font-medium text-gray-900 dark:text-black">$ {price}</span>
          <span>{address}</span>
        </section>
      </div>
    </div>
  );
};

export default PropertyCard;
