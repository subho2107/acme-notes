import {React, useRef} from "react";
import { useScroll } from "framer-motion";
import ShadowWord from "../ShadowWord/ShadowWord";

const FadingInText = ({ words }) => {
    const referenceToParagraph = useRef(null);
    const { scrollYProgress } = useScroll({
        target: referenceToParagraph,
        offset: ["start end", "start 0.4"],
    });
    return (
       <p ref={referenceToParagraph} className="p-10 flex flex-wrap leading-3 w-[60%] self-center text-center">
            {
                words.map((word, index) => {
                    const animationStartTime = index/ words.length;
                    const duration = 1 / words.length;// we get this from (i+1)/len - i/len = 1/len
                    const animationEndTime = animationStartTime + duration; 
                    return <ShadowWord word={word} key={index} scrollYProgress={scrollYProgress}  animationDuration={[animationStartTime, animationEndTime]}/>;
                })
            }
       </p>
    );
}

export default FadingInText;