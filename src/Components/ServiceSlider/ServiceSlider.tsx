import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow} from "swiper/modules";
import "./serviceSlider.css";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import italy from "../../assets/slider/Italy.png";
import abuDabi from "../../assets/slider/Abu-Dabi.png";
import kypros from "../../assets/slider/Kypros.png";
import larnaka from "../../assets/slider/Larnaka.png";
import paris from "../../assets/slider/Paris.png";
import rome from "../../assets/slider/Rome.png";
import spain from "../../assets/slider/Spain.png";
import venetic from "../../assets/slider/Venetic.png";
import vienna from "../../assets/slider/Vienna.png";
import milan from "../../assets/slider/milan.png";
;

export const ServiceSlider: React.FC = () => {
    return (
        <section className="swiper container">
            <h3>Թեժ առաջարկներ</h3>
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
                <SwiperSlide>
                    <img src={italy} alt="italy" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={larnaka} alt="larnaka" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={spain} alt="spain" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={paris} alt="paris" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={abuDabi} alt="abuDabi" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={kypros} alt="kypros" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={rome} alt="rome" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={vienna} alt="vienna" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={venetic} alt="venetic" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={milan} alt="milan" />
                </SwiperSlide>
            </Swiper>
        </section>
    );
};
