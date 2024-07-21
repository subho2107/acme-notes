import React from "react";
import {motion, useTransform} from "framer-motion";
const FeatureCard = ({ header, description, Icon, index, scrollYProgress, scaleToReach, range}) => {
    const cardScale = useTransform(scrollYProgress, range, [1, scaleToReach]);
    return(
        <motion.div className="h-screen top-0 justify-center items-center flex sticky flex-col" style={{scale: cardScale}}>
            <h1 className={`font-bold text-3xl md:text-5xl top-0 sticky font-serif p-32`} style={{color: index === 0 ? 'white' : 'transparent'}}>FEATURES</h1>
            <div className={`relative shadow-lg z-50 p-20 rounded-lg justify-center items-center w-1/2 h-fit flex flex-col bg-gradient-to-b ${index %2 == 1 ? 'from-[#252161] via-[#dd4a94]  to-[#252161]': 'from-[#f06a9a] via-[#f8b09e]  to-[#b25280]'}  text-white`} style={{top: `calc(-10% + ${index * 25}px)`}}>
                <div className={`mb-32 ${index % 2 == 1 ? 'text-amber-400':'text-[#252161]'}`}>
                    <Icon fontSize="large" className="scale-[4]"/>
                </div>
                <h1 className={`text-xl font-semibold ml-4 font-mono text-center ${index % 2 == 1 ? 'text-white':'text-black'}`}>{header}</h1>
                <p className={`mt-4 text-lg font-serif text-center ${index % 2 == 1 ? 'text-white':'text-gray-900'}`}>{description}</p>
            </div>
        </motion.div>
    );
}

export default FeatureCard;