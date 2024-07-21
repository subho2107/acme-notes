import React, { useEffect } from "react";
import { animate, motion, useMotionValue, useTransform } from "framer-motion";
import { HERO_SECTION } from "../../constants";

const TypingText = ({styleY}) => {
    const currentIndex = useMotionValue(0);
    const listOfTextsType = HERO_SECTION.subHeader;
    const currentText = useTransform(currentIndex, (index) => listOfTextsType[index]);
    const countOfChars = useMotionValue(0);
    const roundedCount = useTransform(countOfChars, (value) => Math.round(value));
    const textToShow = useTransform(roundedCount, (value) => currentText.get().slice(0, value));
    const isCurrentTextTypingCompleted = useMotionValue(true);

    useEffect(() => {
        animate(countOfChars, 100, {
            type: "tween",
            duration: 3,
            ease: "easeIn",
            repeat: Infinity,
            repeatType: "reverse",
            repeatDelay: 1,
            onUpdate(latestVal) {
                if(isCurrentTextTypingCompleted.get() && latestVal > 0){
                    isCurrentTextTypingCompleted.set(false);
                } else if(!isCurrentTextTypingCompleted.get() && latestVal === 0){
                    if (currentIndex.get() === listOfTextsType.length - 1) {
                        currentIndex.set(0);
                    } else {
                        currentIndex.set(currentIndex.get() + 1);
                    }
                    isCurrentTextTypingCompleted.set(true);
                }   
            }
        })
    }, []);
    return (
        <>
        <motion.span className="font-bold text-white text-3xl md:text-5xl relative z-10 top-40 font-serif" style={{y: styleY}}>{textToShow}</motion.span>
        </>
    );
}

export default TypingText;