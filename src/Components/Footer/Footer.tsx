import React from "react";
import "./footer.css";
import { SocialMedia } from "../SocialMedia/SocialMedia";
import logo from "../../assets/images/Logo.png";

export const Footer: React.FC = () => {
    return (
        <footer className="footer_wrapper">
            <div className="container">
                <SocialMedia footer />
                <div className="footer_logo_container">
                    <img src={logo} alt="logo" />
                    <h1>Wanderlust Travel Team</h1>
                </div>
            </div>
        </footer>
    );
};
