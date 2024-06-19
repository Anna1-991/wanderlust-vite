import './header.css';
import { Navbar } from '../NavBar/NavBar';
import logo  from '../../assets/images/Logo.png';

const imageUrl: string = logo;

export const Header = () => {
    return (
        <header className="header_wrapper">
            <div className="logo_container">
                <img className="logo" src={imageUrl} alt="logo" />
                <h1>Wanderlust Travel Team</h1>
            </div>
            <Navbar/>
        </header>
    );
};
