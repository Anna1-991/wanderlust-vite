import { HashLink } from "react-router-hash-link";
import "./footer.css";

const scrollWithOffset = (el: { getBoundingClientRect: () => { (): any; new(): any; top: number; }; }) => {
    const yOffset = -80; // Adjust this value to control how much higher the scroll should stop
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: yCoordinate, behavior: "smooth" });
};

export const FooterSubNav = () => {
    return (
        <ul className="sub_nav">
            <li id="sub_nav_link">
                <HashLink scroll={scrollWithOffset} to="/#reviews">
                    Մեր Հաճախորդները
                </HashLink>
            </li>
            <li id="sub_nav_link">
                <HashLink scroll={scrollWithOffset} to="/#services">
                    Թեժ առաջարկներ
                </HashLink>
            </li>
            <li id="sub_nav_link">
                <HashLink scroll={scrollWithOffset} to="/#socialmedia">
                    Կապ մեզ հետ
                </HashLink>
            </li>
        </ul>
    );
};
