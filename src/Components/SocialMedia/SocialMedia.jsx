import './socialmedia.css';
import { Telegram } from "./Telegram/Telegram";
import { WhatsApp } from "./WhatsApp/WhatsApp";

export const SocialMedia = () => {
    const phoneNumber = '+37495060607';
    const message = "Hello, let's talk!!!";

    return (
        <>
            <ul className="social_media">
                <a className="icon facebook" to={'https://www.facebook.com/profile.php?id=100093948756626'} target="_blank">
                    <span className="tooltip">Facebook</span>
                    <span><i className="fab fa-facebook-f"></i></span>
                </a>
                <a className="icon instagram" to={'https://www.instagram.com/wanderlust.evn?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=='} target="_blank">
                    <span className="tooltip">Instagram</span>
                    <span><i className="fab fa-instagram"></i></span>
                </a>
                <WhatsApp phoneNumber={phoneNumber} message={message}/>
                <Telegram phoneNumber={phoneNumber} message={message}/>
            </ul>
        </>
    )
}