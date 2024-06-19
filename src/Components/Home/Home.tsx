import React from "react";
import './home.css'
import { Slider } from "../Slider/Slider";
import { ServiceSlider } from "../ServiceSlider/ServiceSlider";


export const Home: React.FC = () => {
    return (
        <section className="homepage">
            <Slider/>
            <ServiceSlider/>
        </section>
    );
};
