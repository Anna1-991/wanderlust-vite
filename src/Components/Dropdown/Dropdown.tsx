import { useRef, useState } from 'react';
import './dropdown.css';
import AirplanemodeActiveIcon from '@mui/icons-material/AirplanemodeActive';
import { useOutSideClick } from '../../hooks/useOutsideClick';
import { Link } from 'react-router-dom';


export const Dropdown = () => {
    const dropdownRef = useRef(null);
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const toggleDropdown = () => {
        setDropdownOpen(!isDropdownOpen);
    };
    useOutSideClick(dropdownRef, () => setDropdownOpen(false));

    return (
        <div>
            <div
                className="dropdown_button"
                onClick={toggleDropdown}
                ref={dropdownRef}
            >
                <span>Ծառայություններ </span>
                <AirplanemodeActiveIcon className={`my_icon ${isDropdownOpen ? 'down' : ''}`}/>
            </div>
            {isDropdownOpen && (
                <ul className={`dropdown_content ${isDropdownOpen ? "open_anim" : ""}`}>
                    <li className={`list ${isDropdownOpen ? 'open_anim2' : ''}`}>
                        <Link to={''}>Ավիատոմսեր</Link> 
                    </li>
                    <li className={`list ${isDropdownOpen ? 'open_anim3' : ''}`}>
                        <Link to={''}>Վիզա</Link> 
                    </li>
                    <li className={`list ${isDropdownOpen ? 'open_anim4' : ''}`}>
                        <Link to={''}>Ճանապարհորդական Աապպահովագրություն</Link> 
                    </li>
                </ul>
            )}
        </div>
    );
};
