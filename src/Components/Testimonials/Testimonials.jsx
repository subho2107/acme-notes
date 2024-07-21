import React, {useRef} from "react";
import {TESTIMONIALS} from "../../constants";
import TestimonialCard from "../TestimonialCard/TestimonialCard";
import {useScroll, motion, useTransform} from "framer-motion";

const Testimonials = () => {
    const testimonials = TESTIMONIALS;
    const referenceToCards = useRef(null);
    const {scrollYProgress} = useScroll({
        target: referenceToCards,
        offset: ["start start", "end end"],
    });
    const horizontalTransition = useTransform(scrollYProgress, [0, 1], ["400%", "-180%"]);

    const cardHeight = 36;

    return (
        <div className="relative h-[300vh]">
            <div className="top-0 h-screen sticky flex items-center overflow-hidden">
                <motion.div className="flex gap-4" style={{x: horizontalTransition}}>
                    {
                        testimonials.map((testimonial, index) => {
                            return <TestimonialCard testimonialGive={testimonial.testimony} nameOfPerson={testimonial.name} index={index} key={index}/>
                        })
                    }
                </motion.div>
            </div>
        </div>
    );
}

export default Testimonials;