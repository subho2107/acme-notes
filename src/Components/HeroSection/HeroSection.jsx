import {React, useRef} from 'react';
import {motion, useScroll, useTransform} from 'framer-motion';
import Bottom from '../../assets/bottom.png';
import Deer from '../../assets/deer.png';
import TypingText from '../TypingText/TypingText';
import CallToAction from '../CallToAction/CallToAction';

const HeroSection = () => {
    const reference = useRef(null);
    const { scrollYProgress } = useScroll({
        target: reference,
        offset: ["start start", "end start"],
    });
    const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
    const textY = useTransform(scrollYProgress, [0, 1], ["0%", "550%"]);
    const buttonsZIndex = useTransform(scrollYProgress, [0, 0.2], [30, 10]);//this is a fix for the hover animations to work
  return (
    <>
        <div ref={reference} className='w-full h-screen overflow-hidden relative grid place-items-center'>
            <TypingText styleY={textY}/>
            <motion.div className='flex z-30  lg:bottom-96 md:bottom-96 gap-4 sticky sm:bottom-[25rem]' style={{y: textY, zIndex: buttonsZIndex}}>
                <CallToAction text="Take a Demo" styles="bg-[#252161] text-white w-40 !p-4 hover:shadow-2xl hover:shadow-violet-950"/>
                <CallToAction text="Get Started" styles="bg-[#252161] text-white w-40 !p-4 hover:shadow-2xl hover:shadow-violet-950"/>
            </motion.div>
            <motion.div
                className='absolute inset-0 z-0'
                style={{
                    backgroundImage: `url(${Deer})`,
                    backgroundPosition: 'bottom',
                    backgroundSize: 'cover',
                    y: backgroundY,
                }}
            />
            <div
                className='absolute inset-0 z-20'
                style={{
                    backgroundImage: `url(${Bottom})`,
                    backgroundPosition: 'bottom',
                    backgroundSize: 'cover',
                }}
            />
        </div>
    </>
    
  );
};

export default HeroSection;