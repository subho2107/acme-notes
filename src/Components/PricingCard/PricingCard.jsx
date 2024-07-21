import React from "react";
import CallToAction from "../CallToAction/CallToAction";

const PricingCard = ({tier, price, features, isSuggested, index}) => {
    return (
        <div className={`gap-16 relative shadow-lg z-50 p-20 rounded-lg justify-center items-center w-[30%] overflow-hidden h-[40rem] flex flex-col bg-gradient-to-b ${index % 2 == 1 ? 'from-[#252161] via-[#dd4a94]  to-[#252161] text-white': 'from-[#f06a9a] via-[#f8b09e]  to-[#b25280] text-gray-900'} ${isSuggested ? 'scale-110' :''} grid grid-rows-[1fr_3fr_5fr_2fr]`}>
            <h1 className="text-2xl text-center">{tier}</h1>
            <div className={`flex ${index % 2 == 0 ? 'text-white':'text-gray-900'} items-baseline justify-center`}>
                <h1 className=" font-bold text-5xl">{price}</h1>
                <span>/month</span>
            </div>
            <ul className="list-disc">
            {
                features.map((feature, index) => {
                    return <li key={index}>{feature}</li>
                })
            }
            </ul>
            <CallToAction text="Get Started" styles='bg-white text-gray-950 w-80' />
        </div>
    );
}

export default PricingCard;