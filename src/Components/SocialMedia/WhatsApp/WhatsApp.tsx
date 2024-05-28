import React from 'react';

interface WhatsAppProps {
    phoneNumber: string;
    message: string;
}

export const WhatsApp: React.FC<WhatsAppProps> = ({ phoneNumber, message }) => {
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    return (
        <a className="icon whats_app" href={whatsappUrl} target="_blank" rel="noopener noreferrer">
            <span className="tooltip">WhatsApp</span>
            <span><i className="fa-brands fa-whatsapp"></i></span>
        </a>
    );
};
