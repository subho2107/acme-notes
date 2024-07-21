import { useTransform, motion } from "framer-motion";
import React from "react";

const ShadowWord = ({word, animationDuration, scrollYProgress}) => {
    const opacity = useTransform(scrollYProgress, animationDuration, [0, 1]);
    return (
        <span className="relative mt-4 mr-4 text-lg md:text-xl font-mono">
            <span className="absolute opacity-10">{word}</span>
            <motion.span style={{opacity}} >{word}</motion.span>
        </span>
    );
}

export default ShadowWord;