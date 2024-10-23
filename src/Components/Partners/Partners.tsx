import React, { useEffect } from "react";
import "./partners.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import image1 from "../../assets/images/partners/image1.png";
import image2 from "../../assets/images/partners/image2.png";
import image3 from "../../assets/images/partners/image3.png";
import image4 from "../../assets/images/partners/image4.png";
import image5 from "../../assets/images/partners/image5.png";
import image6 from "../../assets/images/partners/image6.png";
import image7 from "../../assets/images/partners/image7.png";
import image8 from "../../assets/images/partners/image8.png";
import image9 from "../../assets/images/partners/image9.png";
import { PartnersHotel } from "./PartnersHotel";
import { EffectCoverflow } from "swiper/modules";

const images = [image1, image2, image3, image4, image5, image6, image7, image8, image9,]

export const Partners: React.FC = () => {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }, []);

    return (
        <section className="partners container">
            <h3>Մեր Գործընկերները</h3>
            <p>Ավիաընկերություններ</p>
            <Swiper
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={"auto"}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                initialSlide={3}
                pagination={true}
                modules={[EffectCoverflow]}
                className="mySwiper"
            >
                {images.map((image, index) => (
                    <SwiperSlide key={index}>
                        <div className="card">
                            <img src={image} alt={`Partner ${index + 1}`} />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            <PartnersHotel />
        </section>
    );
};
