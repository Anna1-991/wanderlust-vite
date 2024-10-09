import { HashLink } from "react-router-hash-link";
import "./footer.css";

export const FooterSubNav = () => {
    return (
        <ul className="sub_nav">
            <li id="sub_nav_link">
                <HashLink to="/#reviews">
                    Մեր Հաճախորդները
                </HashLink>
            </li>
            <li id="sub_nav_link">
                <HashLink to="/#services">
                    Թեժ առաջարկներ
                </HashLink>
            </li>
            <li id="sub_nav_link">
                <HashLink to="/#socialmedia">
                    Կապ մեզ հետ
                </HashLink>
            </li>
        </ul>
    );
};
