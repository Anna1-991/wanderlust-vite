import { useState } from 'react';
import './mobileNavBar.css';
import { Dropdown } from "../Dropdown/Dropdown";
import { PhoneNumber } from "../PhoneNumber/PhoneNumber";
import { SocialMedia } from "../SocialMedia/SocialMedia";


export const MobileNavBar = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);
    const menuOnClick = () =>{
        setMenuOpen(!isMenuOpen);
    }

    return(
        <div className="mobile_navbar">
            <div id="menu_bar" onClick={menuOnClick} className={isMenuOpen ? 'change' : ''}> 
                <div id="bar1" className={`bar ${isMenuOpen ? 'change' : ''}`}></div>
                <div id="bar2" className={`bar ${isMenuOpen ? 'change' : ''}`}></div>
                <div id="bar3" className={`bar ${isMenuOpen ? 'change' : ''}`}></div>
            </div>
            <div className={`menu_bg ${isMenuOpen ? 'change_bg' : ''}`}>
                {isMenuOpen && (
                    <>
                        <ul className="nav">
                            <li to="/">Գլխավոր</li>
                            <Dropdown/>
                            <li to="/partners">Գործընկերներ</li>
                        </ul>
                        <PhoneNumber number={'+374 99 99-99-99'} />
                        <SocialMedia />
                    </>
                )}
            </div>
        </div>
    )
}