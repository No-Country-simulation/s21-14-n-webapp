import React from 'react'
import { NavBar } from '../../components/shared/NavBar'
import { Card } from '../../components/CrudAdmin/Card'
//mañana: hacer que las card se multipliquen con un .map, y que la informacion llegue por props
export const ListCrudProperty = () => {
    return (
        <div className='w-screen h-full bg-primary flex flex-col'>
            <NavBar />
            <div className='flex justify-center items-center w-full py-5'> 
                <h1 className='xl:text-4xl text-tertiary'>Control de inmuebles</h1>
            </div>
            {/*seccion de titulo para abajo */}
            <section className='flex justify-center items-center w-full flex-grow'>

                {/*tablero */}
                <div className='w-[40%] min-h-[90%] bg-tertiary flex flex-wrap px-10 py-5 gap-4 items-center justify-center shadow-2xl shadow-black rounded-lg'>
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
            </section>
        </div>
    )
}

//