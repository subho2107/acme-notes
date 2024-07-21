import React, { useRef } from "react";
import { BENEFITS } from "../../constants";
import FadingInText from "../FadingInText/FadingInText";
import LazyImage from "../LazyImage/LazyImage";

const Benefits = () => {
    const benefits = BENEFITS;
    const images = ["logo", "productivity", "collaboration", "accessibility"];
    
    

    return (
        <div className="w-full text-wrap text-white text-center p-12 justify-center flex flex-col">
            <h1 className="font-bold text-white text-3xl md:text-5xl top-40 font-serif mt-32">WHY US?</h1>
            {benefits.map((benefit, index) => {
                const detailsWords = benefit.details.split(" ");
                const isEven = index % 2 === 0;

                return (
                    <div key={index} className="h-[100vh] flex flex-col justify-center mt-10 bg-gradient-to-b from-[#252161] via-[#dd4a94] to-[#252161] overflow-hidden">
                        <h2 className="font-bold text-xl md:text-2xl font-serif">{benefit.heading}</h2>
                        <div className={`flex p-10 justify-between ${isEven ? "flex-row" : "flex-row-reverse"}`}>
                            <LazyImage dataSrc={images[index]} alt={benefit.heading} isEven={isEven} />
                            <FadingInText words={detailsWords} />
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default Benefits;
