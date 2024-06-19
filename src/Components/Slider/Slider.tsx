import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import italy from "../../assets/slider/italy1.png";
import greece from "../../assets/slider/greece.png";
import poland from "../../assets/slider/poland.png";
import spain from "../../assets/slider/spain2.png";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/autoplay";

import "./slider.css";
import { Autoplay, EffectFade } from "swiper/modules";
import { SocialMedia } from "../SocialMedia/SocialMedia";

export const Slider: React.FC = () => {
    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                effect="fade"
                speed={1500}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                modules={[Autoplay, EffectFade]}
                className="slider2"
            >
                <SwiperSlide>
                    <img src={italy} alt="Italy" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={poland} alt="Poland" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={spain} alt="Spain" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={greece} alt="Greece" />
                </SwiperSlide>
            </Swiper>
            <div className="hide_on_small_screen">
                <SocialMedia />
            </div>
        </>
    );
};
