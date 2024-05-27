import './navBar.css';
// import { Link } from "react-router-dom";
import { Dropdown } from '../Dropdown/Dropdown';
import { PhoneNumber } from '../PhoneNumber/PhoneNumber';
import { MobileNavBar } from '../MobileNavBar/MobileNavBar';

export const Navbar = () =>{
    return(
        <nav className='nav_bar'>
            <div className="phone_num">
                <PhoneNumber number={'+374 95 06-06-07'}/>
            </div>
            <ul className="nav_bar container">
                <li>
                    Գլխավոր
                </li>
                <Dropdown/>
                <li>
                    Գործընկերներ
                </li>
            </ul>
            <MobileNavBar/>
        </nav>
    )
}