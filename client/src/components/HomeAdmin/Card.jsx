import React from 'react';
import PropTypes from 'prop-types'; 

import { Message } from './Message';
import { ButtonCard } from './ButtonCard';

export const Card = ({ name, subname, typeConsult, email, message, state }) => {
    return (
        <div className='h-full w-full flex p-5 gap-10 justify-center'>

            {message ? (
                
                <div className='w-96 h-auto pt-5 pb-5 gap-2 shadow-primary shadow-xl  bg-primary flex flex-col justify-center items-center'>
                    <Message
                    name={name}
                    subname={subname}
                    typeConsult={typeConsult}
                    email={email}
                    message={message}
                    />
                    <ButtonCard/>
                </div>
            ) : (
                <p>No hay mensajes</p>
            )}
        </div>
    );
};

Card.propTypes = {
    onClick: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    subname: PropTypes.string.isRequired,
    typeConsult: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired, 
};