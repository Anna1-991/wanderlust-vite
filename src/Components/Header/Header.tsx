import "./header.css";
import { Navbar } from "../NavBar/NavBar";
import logo from "../../assets/images/Logo.png";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const imageUrl: string = logo;

export const Header = () => {
    const [isScrollingUp, setIsScrollingUp] = useState(true);
    let lastScrollTop = 0;

    const handleScroll = () => {
        const scrollTop =
            window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > lastScrollTop) {
            setIsScrollingUp(false); // Scrolling Down
        } else {
            setIsScrollingUp(true); // Scrolling Up
        }
        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <header
            className={`header_wrapper container ${
                isScrollingUp ? "show" : "hide"
            }`}
        >
            <div className="logo_container">
                <Link to={"/home"}>
                    <img className="logo" src={imageUrl} alt="logo" />
                    <h1>Wanderlust Travel Team</h1>
                </Link>
            </div>
            <Navbar />
        </header>
    );
};
