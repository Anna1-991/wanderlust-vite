import React from 'react';
import { Telegram } from './Telegram/Telegram';
import { WhatsApp } from './WhatsApp/WhatsApp';
import './socialmedia.css';

export const SocialMedia = () => {
    const phoneNumber = '+37495060607';
    const message = "Hello, let's talk!!!";

    return (
        <ul className="social_media">
            <li>
                <a className="icon facebook" href={'https://www.facebook.com/profile.php?id=100093948756626'} target="_blank" rel="noopener noreferrer">
                    <span className="tooltip">Facebook</span>
                    <span><i className="fab fa-facebook-f"></i></span>
                </a>
            </li>
            <li>
                <a className="icon instagram" href={'https://www.instagram.com/wanderlust.evn?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=='} target="_blank" rel="noopener noreferrer">
                    <span className="tooltip">Instagram</span>
                    <span><i className="fab fa-instagram"></i></span>
                </a>
            </li>
            <li>
                <WhatsApp phoneNumber={phoneNumber} message={message}/>
            </li>
            <li>
                <Telegram/>
            </li>
        </ul>
    )
}
