import { Link } from "react-router-dom";
import "./footer.css";

export const FooterServiceSub = () => {
    return (
        <ul className="service_sub">
        <li id="sub_nav_link">
            <Link to={''}>Ավիատոմսեր</Link> 
        </li>
        <li id="sub_nav_link">
            <Link to={''}>Վիզա</Link> 
        </li>
        <li id="sub_nav_link">
            <Link to={''}>Ճանապարհորդական <br /> Աապպահովագրություն</Link> 
        </li>
    </ul>
    );
};
