import React from "react";
import PricingCard from "../PricingCard/PricingCard";
import { PRICING_TIERS } from "../../constants";
const Pricing = () => {
    const pricings = PRICING_TIERS;
    return (
        <div className="h-screen flex flex-col justify-center items-center ">
            <h1 className="font-bold text-white text-3xl md:text-5xl top-40 font-serif mt-[90rem]">PRICING</h1>
            <div className="p-20 flex gap-10 font-mono justify-center">
                {
                    pricings.map((pricing, index) => {
                        return <PricingCard tier={pricing.tier} price={pricing.price} features={pricing.whatComesWithThisTier} isSuggested={pricing.isSuggested} index={index} key={index}/>
                    })
                }
            </div>
        </div>
    );
}

export default Pricing;