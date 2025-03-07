import React from 'react'



function PropertyDetails({ details, children }) 
{
  return (
    <>
        <div className="py-4 space-y-2">
            {Object.entries(details)
                .filter(([key]) => key !== 'caracteristicas' & key !== 'costo')
                .map(([key, value]) => (
                <div key={key} className="flex items-center gap-2">
                    <div className="flex items-center">
                        <span className="font-semibold capitalize">{key.replace(/_/g, ' ')}: </span>
                    </div>
                    <span>{value}</span>
                </div>
            ))}
        </div>        
        {children}
        <button type="button" className='my-4 py-1 px-6 bg-neutral-100 rounded-md text-black font-medium cursor-pointer 
        hover:bg-orange-200 active:bg-orange-300'>
            Comprar
        </button>
        <span className='block mt-2 text-2xl font-bold text-secundary '>U$D {details.costo}</span>
    </>
  )
}

export default PropertyDetails