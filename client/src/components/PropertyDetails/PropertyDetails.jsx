import React from 'react'



function PropertyDetails({ details, children }) 
{
  return (
    <>
        <span className='text-xl'>Código: {details.codigo}</span>
        <hr className='border-t w-1/4 mt-2 opacity-95 border-grey-50'/>
        <div className="py-4 grid lg:grid-cols-2 lg:grid-rows-2">
            {Object.entries(details)
                .filter(([key]) => key !== 'codigo' && key !== 'costo')
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
        <span className='mt-1 text-2xl font-bold text-text-color '>$ {details.costo} por mes</span>
    
    </>
  )
}

export default PropertyDetails