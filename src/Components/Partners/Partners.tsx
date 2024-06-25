import React from "react";
import './partners.css';
import image1 from "../../assets/images/partners/image1.png";
import image2 from "../../assets/images/partners/image2.png";
import image3 from "../../assets/images/partners/image3.png";
import image4 from "../../assets/images/partners/image4.png";
import image5 from "../../assets/images/partners/image5.png";
import image6 from "../../assets/images/partners/image6.png";
import image7 from "../../assets/images/partners/image7.png";
import image8 from "../../assets/images/partners/image8.png";
import image9 from "../../assets/images/partners/image9.png";

export const Partners: React.FC = () => {
    return (
        <section className="partners container">
            <h3>Մեր Գործընկերները</h3>
            <div className="image_wrapper">
                <img src={image1} alt="" />
                <img src={image2} alt="" />
                <img src={image3} alt="" />
                <img src={image4} alt="" />
                <img src={image5} alt="" />
                <img src={image6} alt="" />
                <img src={image7} alt="" />
                <img src={image8} alt="" />
                <img src={image9} alt="" />
            </div>
        </section>
    );
};
