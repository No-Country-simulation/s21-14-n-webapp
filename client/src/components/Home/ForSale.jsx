import React from 'react'

export const ForSale = () => {
    return (
        <div className='bg-[#333] flex flex-col xl:flex-row justify-between items-center pt-28 px-3 xl:px-20 xl:pt-32 pb-20 xl:pb-32'>
                <img src="/src/img/pexels-mart-production-7414922.jpg" alt="" className='xl:h-[42.2%] xl:w-[42.2%] mb-10 xl:mb-0' />
                <div className='xl:text-4xl xl:mr-48 xl:ml-52 font-semibold text-amber-300'>
                    <h3 className='mb-10 xl:mb-32'>¿Tienes una propiedad para vender?</h3>
                    <p className='leading-relaxed'>
                        Dejalo en manos de especialistas, contactenos y lo asesoraremos para que obtenga la mejor rentabilidad de su inversion inmobiliaria
                    </p>
                </div>
        </div>
    )
}

