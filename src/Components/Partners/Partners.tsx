import React from "react";
import "./partners.css";
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
                <div className="animate_on_scroll">
                    <img src={image1} alt="" />
                </div>
                <div className="animate_on_scroll">
                    <img src={image2} alt="" />
                </div>
                <div className="animate_on_scroll">
                    <img src={image3} alt="" />
                </div>
                <div className="animate_on_scroll">
                    <img src={image4} alt="" />
                </div>
                <div className="animate_on_scroll">
                    <img src={image5} alt="" />
                </div>
                <div className="animate_on_scroll">
                    <img src={image6} alt="" />
                </div>
                <div className="animate_on_scroll">
                    <img src={image7} alt="" />
                </div>
                <div className="animate_on_scroll">
                    <img src={image8} alt="" />
                </div>
                <div className="animate_on_scroll">
                    <img src={image9} alt="" />
                </div>
            </div>
        </section>
    );
};
