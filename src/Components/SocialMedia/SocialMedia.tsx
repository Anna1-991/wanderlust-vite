import React from "react";
import { Telegram } from "./Telegram/Telegram";
import { WhatsApp } from "./WhatsApp/WhatsApp";
import "./socialmedia.css";

export const SocialMedia: React.FC = () => {
    const phoneNumber = "+37495060607";
    const message = "Hello, let's talk!!!";

    return (
        <div className="container" id="socialmedia">
            <h3>Կապ մեզ հետ</h3>
            <ul className="social_media" id="socialmedia">
                <li>
                    <a
                        className="icon facebook"
                        href={
                            "https://www.facebook.com/profile.php?id=100093948756626"
                        }
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <span className="tooltip">Facebook</span>
                        <span>
                            <i className="fab fa-facebook-f"></i>
                        </span>
                    </a>
                </li>
                <li>
                    <a
                        className="icon instagram"
                        href={
                            "https://www.instagram.com/wanderlust.evn?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                        }
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <span className="tooltip">Instagram</span>
                        <span>
                            <i className="fab fa-instagram"></i>
                        </span>
                    </a>
                </li>
                <li>
                    <WhatsApp phoneNumber={phoneNumber} message={message} />
                </li>
                <li>
                    <Telegram />
                </li>
                <li>
                    <a
                        className="icon phonenumber"
                        href={`tel:${phoneNumber}`}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <span className="tooltip">095060607</span>
                        <span>
                            <i className="fa-solid fa-phone"></i>
                        </span>
                    </a>
                </li>
            </ul>
        </div>
    );
};
