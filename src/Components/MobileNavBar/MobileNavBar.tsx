import { useState } from 'react';
import './mobileNavBar.css';
import { Dropdown } from "../Dropdown/Dropdown";
import { SocialMedia } from '../SocialMedia/SocialMedia';
import { Link } from 'react-router-dom';
import planeImg from '../../assets/images/plane-heart.png'

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
                            <li>
                                <Link to={'/home'} >Գլխավոր</Link>
                            </li>
                            <Dropdown/>
                            <li>
                                <Link to={"/partners"}>Գործընկերներ</Link>
                            </li>
                        </ul>
                        <SocialMedia number={'+374 95 06-06-07'} footer={false} />
                        <img src={planeImg} alt="" />
                    </>
                )}
            </div>
        </div>
    )
}