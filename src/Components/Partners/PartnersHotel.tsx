import React from "react";
import { EffectCoverflow } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "./partners.css";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import hotel1 from "../../assets/images/hotels/2.png";
import hotel2 from "../../assets/images/hotels/3.png";
import hotel3 from "../../assets/images/hotels/4.png";
import hotel4 from "../../assets/images/hotels/5.png";
import hotel5 from "../../assets/images/hotels/6.png";
import hotel6 from "../../assets/images/hotels/7.png";
import hotel7 from "../../assets/images/hotels/8.png";
import hotel8 from "../../assets/images/hotels/9.png";
import hotel9 from "../../assets/images/hotels/10.png";
import hotel10 from "../../assets/images/hotels/11.png";
import hotel11 from "../../assets/images/hotels/12.png";
import hotel12 from "../../assets/images/hotels/13.png";
import hotel13 from "../../assets/images/hotels/14.png";
import hotel14 from "../../assets/images/hotels/15.png";
import hotel15 from "../../assets/images/hotels/16.png";
import hotel16 from "../../assets/images/hotels/17.png";
import hotel17 from "../../assets/images/hotels/18.png";
import hotel18 from "../../assets/images/hotels/19.png";
import hotel19 from "../../assets/images/hotels/20.png";

const hotelImages = [
    hotel1,
    hotel2,
    hotel3,
    hotel4,
    hotel5,
    hotel6,
    hotel7,
    hotel8,
    hotel9,
    hotel10,
    hotel11,
    hotel12,
    hotel13,
    hotel14,
    hotel15,
    hotel16,
    hotel17,
    hotel18,
    hotel19,
];

export const PartnersHotel: React.FC = () => {
    return (
        <section className="partners_hotel">
            <p>Հյուրանոցներ</p>
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
                {hotelImages.map((image, index) => (
                    <SwiperSlide key={index}>
                        <div className="card">
                            <img src={image} alt={`Partner ${index + 1}`} />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};
