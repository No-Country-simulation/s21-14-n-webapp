import React from 'react'
import { NavBar } from '../../components/shared/NavBar'
import { ContainerProperties } from '../../components/CrudAdmin/ContainerProperties'

export const ListCrudProperty = () => {
    return (
        <div className='w-screen h-screen bg-primary flex flex-col'>
            <NavBar />
            <div className='flex justify-center items-center w-full py-5'> 
                <h1 className='xl:text-4xl text-tertiary'>Control de inmuebles</h1>
            </div>
            {/*seccion de titulo para abajo */}
            <section className='flex justify-center items-center w-full flex-grow'>

                {/*tablero */}
                <div className='w-[60%] min-h-[90%] bg-tertiary flex flex-col'>
                    <h2 className='text-3xl mt-5 ml-5'>Agregados recientemente</h2>
                        <ContainerProperties/>
                    <h2 className='text-3xl mt-5 ml-5'>Mas antiguas</h2>
                    <div className='flex flex-col gap-5'>
                        <ContainerProperties/>
                        <ContainerProperties/>
                    </div>
                </div>
            </section>
        </div>
    )
}

//