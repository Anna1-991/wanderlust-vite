import React from "react";
import "./footer.css";
import logo from "../../assets/images/Logo.png";
import { Link } from "react-router-dom";
import { FooterSubNav } from "./FooterSubNav";
import { FooterServiceSub } from "./FooterServiceSub";
import { HashLink } from "react-router-hash-link";

export const Footer: React.FC = () => {
    return (
        <footer className="footer_wrapper container">
            <div className="footer_logo_container">
                <HashLink to={"/#"}>
                    <h1>Wanderlust Travel Team</h1>
                    <img src={logo} alt="logo" />
                </HashLink>
            </div>
            <div className="footer_nav_wrapper">
                <ul>
                    <li>
                        <HashLink to="/#">Գլխավոր</HashLink>
                        <FooterSubNav />
                    </li>
                </ul>
                <ul>
                    <li>
                        <Link to={""}>Ծառայություններ</Link>
                        <FooterServiceSub />
                    </li>
                </ul>
                <ul>
                    <li>
                        <Link to="/partners">Գործընկերներ</Link>
                    </li>
                    <li>
                        <Link to={""}>Կապ</Link>
                    </li>
                </ul>
            </div>
        </footer>
    );
};
