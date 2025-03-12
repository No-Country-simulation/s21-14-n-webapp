import React from 'react'

export const ButtonCard = () => {
  return (
    <div className='bg-primary text-tertiary text-lg flex justify-between w-full px-4 items-center'>
        <button className='text-green-400'>Hecho</button>
        <button className='text-red-400'>Eliminar</button>
    </div>
  )
}
