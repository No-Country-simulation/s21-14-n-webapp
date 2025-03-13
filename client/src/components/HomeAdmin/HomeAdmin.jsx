import React, { useState } from 'react';
import { CgCloseR } from "react-icons/cg";
import './HomeAdmin.css';
import { Card } from './Card';

export const HomeAdmin = () => {
    const [showCards, setShowCards] = useState({});

    const todoTitle = [
        { name: "Consultas de propiedades", id: 1 },
        { name: "Otras consultas", id: 2 },
        { name: "Consultas de propiedades atendidas", id: 3 },
        { name: "Otras consultas atendidas", id: 4 }
    ];

    const consultas = [
        {
            telefono: "555-1234",
            nombre: "Juan",
            apellido: "González",
            tipoConsulta: "inmuebles",
            email: "juan.gonzalez@example.com",
            mensaje: "Estoy interesado en la casa en venta en el centro.",
            estado:"pendiente"
        },
        {
            telefono: "555-2345",
            nombre: "María",
            apellido: "Rodríguez",
            tipoConsulta: "inmuebles",
            email: "maria.rodriguez@example.com",
            mensaje: "¿Podrían darme información sobre el departamento en alquiler?",
            estado:"pendiente"
        },
        {
            telefono: "555-3456",
            nombre: "Carlos",
            apellido: "Pérez",
            tipoConsulta: "inmuebles",
            email: "carlos.perez@example.com",
            mensaje: "Necesito detalles sobre la propiedad en la zona norte.",
            estado:"pendiente"
        },
        {
            telefono: "555-4567",
            nombre: "Ana",
            apellido: "López",
            tipoConsulta: "inmuebles",
            email: "ana.lopez@example.com",
            mensaje: "Me interesa saber si hay propiedades con opción a financiamiento.",
            estado:"pendiente"
        },
        {
            telefono: "555-5678",
            nombre: "Luis",
            apellido: "Martínez",
            tipoConsulta: "inmuebles",
            email: "luis.martinez@example.com",
            mensaje: "Quiero agendar una visita a la casa que vi en el anuncio.",
            estado:"pendiente"
        },
        {
            telefono: "555-6789",
            nombre: "Sofía",
            apellido: "García",
            tipoConsulta: "otros",
            email: "sofia.garcia@example.com",
            mensaje: "Necesito información sobre los plazos de pago.",
            estado:"pendiente"
        },
        {
            telefono: "555-7890",
            nombre: "Diego",
            apellido: "Hernández",
            tipoConsulta: "otros",
            email: "diego.hernandez@example.com",
            mensaje: "¿Cómo puedo obtener una factura electrónica?",
            estado:"pendiente"
        },
        {
            telefono: "555-8901",
            nombre: "Elena",
            apellido: "Sánchez",
            tipoConsulta: "otros",
            email: "elena.sanchez@example.com",
            mensaje: "Tengo problemas para iniciar sesión en mi cuenta.",
            estado:"pendiente"
        },
        {
            telefono: "555-9012",
            nombre: "Miguel",
            apellido: "Ramírez",
            tipoConsulta: "otros",
            email: "walter.azariel.moreno@gmail.com",
            mensaje: "¿Existen descuentos por pago anticipado?",
            estado:"pendiente"
        },
        {
            telefono: "555-0123",
            nombre: "Laura",
            apellido: "Torres",
            tipoConsulta: "otros",
            email: "laura.torres@example.com",
            mensaje: "Me gustaría saber si ofrecen atención personalizada para resolver dudas.",
            estado:"pendiente"
        }
    ];

    const handleClick = (id) => {
        setShowCards(prevState => ({
            ...prevState,
            [id]: !prevState[id] 
        }));
    };

    return (
        <div className='h-screen w-screen bg-primary flex flex-col justify-center items-center gap-10 mb-52'>
            <h1 className='mt text-4xl font-bold text-tertiary mt-20'>
                <span className='text-secundary'>B</span>ienvenido, <span className='text-secundary'>A</span>dmin
            </h1>
            <section className='w-[86%] h-[80%] flex gap-5 justify-center custom-bg p-5'>
                {todoTitle.map((item) => {
                    const filteredConsultas = consultas.filter(consulta => {
                        if (item.name === "Consultas de propiedades") {
                            return consulta.tipoConsulta === "inmuebles";
                        } else if (item.name === "Otras consultas") {
                            return consulta.tipoConsulta === "otros";
                        }
                        return false;
                    });

                    return (
                        <div 
                            key={item.id} 
                            className='h-full w-96 flex flex-col text-primary border border-primary shadow-2xl shadow-black justify-center items-center backdrop-blur-md text-3xl font-bold p-4'
                        >
                            <button 
                                className={`w-full h-full hover:scale-110 cursor-pointer bg-red flex justify-center items-center ${showCards[item.id] ? "hidden" : "flex"}`} 
                                onClick={() => handleClick(item.id)}
                            >
                                {item.name}
                            </button>
                            <div className={`bg-secundary h-full w-full flex flex-col overflow-y-auto items-center transition-all ${showCards[item.id] ? "flex card-enter scroll-invisible" : "card-exit"}`}>
                                    <button onClick={() => handleClick(item.id)} className='mt-5 mb-5'>
                                        <CgCloseR className='text-tertiary h-10 w-10 hover:scale-105 cursor-pointer' />
                                    </button>
                                {filteredConsultas.map((consulta, index) => (
                                    <Card 
                                        key={index}
                                        onClick={() => handleClick(item.id)} 
                                        name={consulta.nombre} 
                                        subname={consulta.apellido} 
                                        typeConsult={consulta.tipoConsulta} 
                                        email={consulta.email} 
                                        message={consulta.mensaje}
                                        state={consulta.estado}
                                    />
                                ))}
                            </div>
                        </div>
                    );
                })}
            </section>
        </div>
    );
};

{/*
// Clasificar los mensajes
    const consultasInmueblesPendientes = messages.filter(m => m.tipo === "inmuebles" && m.estado === "pendiente");
    const consultasOtrosPendientes = messages.filter(m => m.tipo === "otros" && m.estado === "pendiente");
    const consultasInmueblesResueltas = messages.filter(m => m.tipo === "inmuebles" && m.estado === "resuelto");
    const consultasOtrosResueltas = messages.filter(m => m.tipo === "otros" && m.estado === "resuelto");
*/}