import React from 'react'

const PropertyCard = ({ imgSrc }) => {
  return (
    <div className="w-full bg-white shadow-lg dark:bg-gray-800 dark:border-gray-700 ">
        <figure className={`relative h-40 group transition-all duration-500`}>
            <a href="#" className="">
                <img className="w-full h-full rounded-t-xs" src={imgSrc} alt="product image" />
            </a>
            <div className="absolute inset-0 bg-black/0  transition-all duration-500 pointer-events-none group-hover:bg-black/50 flex items-center justify-center">
                <a href="#" className="text-white font-light opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700 ease-out">
                    Ver Detalles
                </a>
            </div>
    

        </figure>

        <div className="px-3 pb-3 pt-2 space-y-2 ">
            <a href="#" className="block text-xs font-semibold tracking-tight text-gray-900 dark:text-white capitalize">departamento cerca de</a>
            <section className='text-xs flex justify-between'>
                <span className="font-bold text-gray-900 dark:text-white">$ 4800.000</span>
                <span>Codigo A1246</span>
            </section>

        </div>
    </div>

  )
}

export default PropertyCard