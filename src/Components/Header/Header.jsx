import './header.css';
import logo from '../../assets/images/Logo.png';
import { Navbar } from '../NavBar/NavBar';


export const Header = () => {
    return (
        <header className="header_wrapper">
            <div className="logo_container">
                <img className="logo" src={logo} alt="" />
                <h1>Wanderlust Travel Team</h1>
            </div>
            <Navbar/>
        </header>
    );
};
