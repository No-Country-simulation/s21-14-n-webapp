import React from 'react'

export const FeaturedProperties = () => {

    const featurePropeties=[
        '/src/img/feature-properties/pexels-30nudos-adicora-164429726-13907871.jpg',
        '/src/img/feature-properties/pexels-kate-filatova-1861817299-30707539.jpg',
        '/src/img/feature-properties/pexels-rgsk97-1717272.jpg',
        '/src/img/feature-properties/pexels-scottwebb-430216.jpg'
    ]

    return (
        <main className='flex flex-col items-center h-full xl:h-full pt-20 xl:pt-32 pb:20 xl:pb-32 bg-[#333]'>
            <h2 className='text-3xl font-semibold text-amber-300'>Propiedades Destacadas</h2>
            <div className='flex h-full px-3 xl:px-20 mt-20 xl:mt-32'>
                {featurePropeties.map((image, index)=>{
                    return(
                    <div key={index} className='flex gap-0 justify-center'>
                        <img src={image} alt="" className='w-[1000px] h-70 xl:h-full xl:w-full object-cover brightness-75 ' />
                        <p className=' z-10 absolute text-sm xl:text-3xl lg:mt-[36%] text-white brightness-110 '>Lorem Ipsum</p>
                    </div>)
                })}
            </div>
        </main>
    )
}
