import React, { useEffect, useState } from 'react';
import { CgCloseR } from "react-icons/cg";
import './HomeAdmin.css';
import { Card } from './Card';
import { getAllContact } from '../../network/fetchContact';

export const HomeAdmin = () => {
    const [showCards, setShowCards] = useState({});
 const [allContact, setAllContact] = useState([]);

    const todoTitle = [
        { name: "Consultas de propiedades", id: 1 },
        { name: "Otras consultas", id: 2 },
        { name: "Consultas de propiedades atendidas", id: 3 },
        { name: "Otras consultas atendidas", id: 4 }
    ];

      useEffect(() => {
           const fetchData = async () => {
             try {
               const data = await getAllContact();
               if (!data) {
                setAllContact([]);
                 return;
               }
               setAllContact(data);
             } catch (error) {
               console.log(error);
             }
           };
       
           fetchData();
         }, []);

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
                    const filteredConsultas = allContact.filter(consulta => {
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
                                {filteredConsultas.map((consulta) => (
                                    <Card 
                                        key={item._id}
                                        onClick={() => handleClick(item._id)} 
                                        name={consulta.nombreApellido} 
                                        typeConsult={consulta.tipoConsulta} 
                                        email={consulta.email} 
                                        message={consulta.mensaje}
                                        state={consulta.state}
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