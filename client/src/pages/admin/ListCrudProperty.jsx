import React, { useState } from 'react'
import { NavBar } from '../../components/shared/NavBar'
import { Card } from '../../components/CrudAdmin/Card'

export const ListCrudProperty = () => {
    const [activeCardId, setActiveCardId] = useState(null);

    const detailsProperty = [
        {
            titulo: "Apartamento Moderno en el Centro",
            id:1,
            descripcion: "Luminoso apartamento de 2 habitaciones con acabados de lujo y amplios ventanales que ofrecen una vista espectacular de la ciudad. Cuenta con cocina equipada, balcón privado y acceso a gimnasio y piscina en la azotea.",
            tipo: "Departamento",
            ubicacion: "Centro de la ciudad",
            precio: 2000000,
            imagen:"casa1.jpg",
        },
        {
            titulo: "Casa Espaciosa con Jardín",
            id:2,
            descripcion: "Hermosa casa con 4 habitaciones y un gran jardín con terraza. Perfecta para familias que buscan tranquilidad y comodidad. Ubicada en una zona segura y de fácil acceso.",
            tipo: "Casa",
            ubicacion: "Barrio residencial",
            precio: 3500000,
            imagen:"casa2.jpg",
        },
        {
            titulo: "Loft con Estilo Industrial",
            id:3,
            descripcion: "Moderno loft con techos altos, vigas expuestas y ventanales enormes que llenan el espacio de luz natural. Cocina de concepto abierto y acabados de concreto pulido.",
            tipo: "Departamento",
            ubicacion: "Distrito artístico",
            precio: 1800000,
            imagen:"casa1.jpg",
        },
        {
            titulo: "Penthouse con Vista Panorámica",
            id:4,
            descripcion: "Exclusivo penthouse con 3 habitaciones, terraza privada y jacuzzi con vista a la ciudad. Edificio con seguridad 24/7, gimnasio y piscina.",
            tipo: "Departamento",
            ubicacion: "Zona financiera",
            precio: 5000000,
            imagen:"edificio1.jpg",
        },
        {
            titulo: "Casa de Campo con Piscina",
            id:5,
            descripcion: "Increíble casa de campo rodeada de naturaleza con amplios espacios, piscina privada y zona de parrilla. Ideal para quienes buscan desconectarse de la ciudad.",
            tipo: "Casa",
            ubicacion: "A las afueras de la ciudad",
            precio: 2800000,
            imagen:"edificio2.jpg",
        },
        {
            titulo: "Dúplex en Zona Exclusiva",
            id:6,
            descripcion: "Dúplex con diseño moderno, espacios abiertos y balcones en ambas plantas. Cercano a centros comerciales y parques.",
            tipo: "Departamento",
            ubicacion: "Zona exclusiva",
            precio: 2600000,
            imagen:"edificio1.jpg",
        }

    ]
    const handleCardClick = (id) => {
        setActiveCardId(activeCardId === id ? null : id);
    };

    return (
        <div className='w-screen h-full bg-primary flex flex-col'>

            <NavBar />
            <div className='flex justify-center items-center w-full py-5'>
                <h1 className='xl:text-4xl text-tertiary'>Control de inmuebles</h1>
            </div>
            <section className='flex justify-center items-center w-full flex-grow'>
                <div className='w-[80%] min-h-[90%] flex flex-wrap px-10 py-5 gap-4 items-center justify-center rounded-lg'>
                    {detailsProperty.map((propiedad) => (
                        <Card
                            key={propiedad.id}
                            id={propiedad.id}
                            imagen={propiedad.imagen}
                            titulo={propiedad.titulo}
                            descripcion={propiedad.descripcion}
                            tipo={propiedad.tipo}
                            ubicacion={propiedad.ubicacion}
                            precio={propiedad.precio}
                            isActive={activeCardId === propiedad.id}
                            onClick={() => handleCardClick(propiedad.id)}
                        />
                    ))}
                </div>
            </section>
        </div>
    );
};
