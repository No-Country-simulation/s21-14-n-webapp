import React, { useEffect, useState } from 'react'
import { NavBar } from '../../components/shared/NavBar'
import { Card } from '../../components/crudAdmin/Card'
import { getAllInquiries } from '../../network/fetchApiInquirity';

export const ListCrudProperty = () => {
    const [activeCardId, setActiveCardId] = useState(null);

    const handleCardClick = (id) => {


        setActiveCardId(activeCardId === id ? null : id);
    };
     const [allProperties, setAllProperties] = useState([]);
    
    
      useEffect(() => {
        const fetchData = async () => {
          try {
            const data = await getAllInquiries();
            if (!data) {
              setAllProperties([]);
              return;
            }
            setAllProperties(data);
          } catch (error) {
            console.log(error);
          }
        };
    
        fetchData();
      }, []);

    return (
        <div className='w-screen h-full bg-primary flex flex-col'>
            <NavBar />
            <div className='flex justify-center items-center w-full py-5'>
                <h1 className='xl:text-4xl text-tertiary'>Control de inmuebles</h1>
            </div>
            <section className='flex justify-center items-center w-full flex-grow'>
                <div className='w-[80%] min-h-[90%] flex flex-wrap px-10 py-5 gap-4 items-center justify-center rounded-lg'>
                    {allProperties.map((propiedad) => (
                        <Card
                            key={propiedad._id}
                            id={propiedad._id}
                            imagen={propiedad.imagePrincipal}
                            titulo={propiedad.title}
                            descripcion={propiedad.title}
                            tipo={propiedad.typeProperty}
                            ubicacion={propiedad.address}
                            precio={propiedad.price}
                            destacado={propiedad.isSelected}
                            isActive={activeCardId === propiedad._id}
                            onClick={() => handleCardClick(propiedad._id)}
                        />
                    ))}
                </div>
            </section>
        </div>
    );
};
