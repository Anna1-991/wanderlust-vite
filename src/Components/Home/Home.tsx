import React from "react";
import './home.css'
import { Slider } from "../Slider/Slider";
import { ServiceSlider } from "../ServiceSlider/ServiceSlider";
import { Review } from "../Review/Review";


export const Home: React.FC = () => {
    return (
        <section className="homepage">
            <Slider/>
            <ServiceSlider/>
            <Review/>
        </section>
    );
};
