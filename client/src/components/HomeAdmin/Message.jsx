import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FaCopy } from 'react-icons/fa';
import { BiLogoGmail } from "react-icons/bi";

export const Message = ({ name, subname, typeConsult, email, message }) => {
    const [copied, setCopied] = useState(false);
    const [pending, setPending] = useState(false);

    const copyToClipboard = () => {
        navigator.clipboard.writeText(email).then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        }).catch(err => {
            console.error('Error al copiar el email: ', err);
        });
    };

    const handleRedirect = () => {
        setPending(true); 
        window.open("https://mail.google.com/mail/u/0/#inbox?compose=new", "_blank");
    };

    return (
        <div className={`w-full text-sm [&_span]:text-secundary [&_span]:text-base text-tertiary p-4 rounded-lg ${pending ? 'bg-red-950' : 'bg-primary'}`}>
            <div className='flex flex-col gap-2'>
                <p>
                    <span>Nombre:</span> {name} {subname}
                </p>
                <p>
                    <span>Tipo de consulta:</span> {typeConsult}
                </p>
                <p>
                    <span>Email:</span> {email}
                </p>

                <p className='mt-10'><span>Mensaje:</span></p>

                <div className='bg-tertiary p-5'>
                    <p className='text-primary text-base'>{message}</p>
                </div>

                <div className='flex w-full justify-between items-center [&_button]:h-8'>
                    <p>
                        <button onClick={copyToClipboard} className="flex w-auto gap-2 items-center text-tertiary hover:text-secundary hover:scale-105 text-xs cursor-pointer">
                            <p>Copiar Email</p> <FaCopy />
                            {copied && (
                                <div className="bg-secundary text-primary text-xs px-1 rounded-lg">
                                    ¡Email copiado!
                                </div>
                            )}
                        </button>
                    </p>
                    <p>
                        <button onClick={handleRedirect} className="flex gap-2 items-center text-tertiary hover:text-secundary hover:scale-105 text-xs cursor-pointer">
                            <BiLogoGmail className='h-5 w-5' /><p>Gmail</p>
                        </button>
                    </p>
                </div>
            </div>
        </div>
    );
};

Message.propTypes = {
    name: PropTypes.string.isRequired,
    subname: PropTypes.string.isRequired,
    typeConsult: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
};