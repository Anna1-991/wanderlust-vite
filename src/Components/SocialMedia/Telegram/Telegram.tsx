import React from 'react';

export const Telegram: React.FC = () => {
    const telegramUrl = `https://t.me/wanderlustanna`;

    return (
        <a className="icon telegram" href={telegramUrl} target="_blank" rel="noopener noreferrer">
            <span className="tooltip">Telegram</span>
            <span><i className="fa-brands fa-telegram"></i></span>
        </a>
    );
}
