import "./navBar.css";
import { Dropdown } from "../Dropdown/Dropdown";
import { MobileNavBar } from "../MobileNavBar/MobileNavBar";
import { Link } from "react-router-dom";

export const Navbar = () => {
    return (
        <>
            <nav className="nav_bar">
                <ul className="nav_bar">
                    <li>
                        <Link to='/'>Գլխավոր</Link>
                    </li>
                    <Dropdown />
                    <li>
                        <Link to='/partners'>Գործընկերներ</Link>
                    </li>
                    <li>
                        <Link to={''}>Կապ</Link> 
                    </li>
                </ul>
            </nav>
            <MobileNavBar />
        </>
    );
};
