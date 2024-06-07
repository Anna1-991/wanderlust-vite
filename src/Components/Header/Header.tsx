import './header.css';
import { Navbar } from '../NavBar/NavBar';
import logo  from '../../assets/images/Logo.png';
// import plane  from '../../assets/images/Logo.png';

const imageUrl: string = logo;

export const Header = () => {
    return (
        <header className="header_wrapper">
            <div className="logo_container">
                <img className="logo" src={imageUrl} alt="" />
                <h1>Wanderlust Travel Team</h1>
                {/* <img src={plane} alt="" /> */}
            </div>
            <Navbar/>
        </header>
    );
};
